"use strict";
// Lista de participantes "quemada" en el código
const PARTICIPANTS = [
    'Sergio Anaya',
    'Sandy Gonzalez',
    'Paola Gonzalez',
    'Sharlin Llanos',
    'Dominga Mejia',
    'Jose David Novio de Paola',
    'María Elena',
    'Yair Hernandez',
    'Ivan Ramos',
    'Milena Ibarra'
];
const STORAGE_KEY = 'secret-santa-assignments-v1';
function saveAssignments(assigns) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(assigns));
}
function loadAssignments() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
}
// Genera una derangement (permutación sin puntos fijos) simple
function derangement(names) {
    if (names.length <= 1)
        return [];
    const n = names.length;
    let result = names.slice();
    // Fisher-Yates shuffle until no one maps to themselves.
    // For small n this is fine.
    for (let attempt = 0; attempt < 1000; attempt++) {
        // shuffle
        for (let i = n - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        // check fixed points
        let ok = true;
        for (let i = 0; i < n; i++) {
            if (result[i] === names[i]) {
                ok = false;
                break;
            }
        }
        if (ok)
            return result;
    }
    // Fallback: deterministic derangement for small sets
    // rotate by 1
    return names.slice(1).concat(names[0]);
}
function ensureAssignments() {
    const existing = loadAssignments();
    // If assignments already cover all participants, return them
    if (Object.keys(existing).length === PARTICIPANTS.length)
        return existing;
    // Build list of available receivers
    const receivers = PARTICIPANTS.slice();
    // Generate a derangement matching PARTICIPANTS order
    const der = derangement(receivers);
    const assigns = {};
    for (let i = 0; i < PARTICIPANTS.length; i++) {
        assigns[PARTICIPANTS[i]] = der[i];
    }
    saveAssignments(assigns);
    return assigns;
}
// UI
const openListBtn = document.getElementById('openListBtn');
const participantsList = document.getElementById('participantsList');
const resultArea = document.getElementById('resultArea');
const modalEl = document.getElementById('participantsModal');
let bsModal = null;
if (modalEl) {
    // @ts-ignore
    bsModal = new bootstrap.Modal(modalEl);
}
// Secret result (party) modal
const secretResultModalEl = document.getElementById('secretResultModal');
let bsSecretResultModal = null;
if (secretResultModalEl) {
    // @ts-ignore
    bsSecretResultModal = new bootstrap.Modal(secretResultModalEl);
}
const secretAssignedText = document.getElementById('secretAssignedText');
function renderParticipants() {
    participantsList.innerHTML = '';
    const assignments = ensureAssignments();
    for (const name of PARTICIPANTS) {
        const item = document.createElement('button');
        item.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
        item.textContent = name;
        const assigned = assignments[name];
        const used = Object.values(assignments).filter(v => v === assigned).length > 0;
        // If this participant already revealed, disable
        const revealed = localStorage.getItem('revealed-' + name) === '1';
        if (revealed) {
            item.classList.add('disabled');
            const span = document.createElement('span');
            span.className = 'badge bg-success';
            span.textContent = 'Revelado';
            item.appendChild(span);
        }
        else {
            item.addEventListener('click', () => onSelectParticipant(name));
        }
        participantsList.appendChild(item);
    }
}
function onSelectParticipant(name) {
    const assignments = ensureAssignments();
    // If already revealed, ignore
    if (localStorage.getItem('revealed-' + name) === '1')
        return;
    const assigned = assignments[name];
    // Show result
    // Render also a festive modal result
    if (secretAssignedText) {
        secretAssignedText.innerHTML = `${name}, <br/>tu Amigo Secreto es:<br/><strong style="font-size:1.6rem">${assigned}</strong>`;
    }
    if (bsSecretResultModal)
        bsSecretResultModal.show();
    // Mark this participant as revealed so they can't pick again
    localStorage.setItem('revealed-' + name, '1');
    // Also mark the assigned person as "taken" so they won't be assigned again.
    // In this implementation assignments are precomputed as a derangement, so
    // assigned persons are unique by construction. We still persist a flag for clarity.
    localStorage.setItem('taken-' + assigned, '1');
    // re-render participants to disable buttons
    renderParticipants();
    // close modal
    if (bsModal)
        bsModal.hide();
}
openListBtn.addEventListener('click', () => {
    renderParticipants();
    if (bsModal)
        bsModal.show();
});
// initial render for result areas if needed
renderParticipants();
// Expose reset for debugging
// @ts-ignore
window.__secretSanta = {
    reset() {
        localStorage.removeItem(STORAGE_KEY);
        for (const p of PARTICIPANTS) {
            localStorage.removeItem('revealed-' + p);
            localStorage.removeItem('taken-' + p);
        }
        renderParticipants();
        resultArea.innerHTML = '';
    }
};
