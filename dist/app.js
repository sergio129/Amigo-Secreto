"use strict";
// Lista de participantes "quemada" en el código
const PARTICIPANTS = [
    'Sergio Anaya',
    'Sandy Gonzalez',
    'Paola Gonzalez',
    'Sharlin Llanos',
    'Dominga Mejia',
    'Novio de Paola',
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
const resetBtn = document.getElementById('resetBtn');
const resetModalEl = document.getElementById('resetModal');
let bsResetModal = null;
if (resetModalEl) {
    // @ts-ignore
    bsResetModal = new bootstrap.Modal(resetModalEl);
}
const resetCodeInput = document.getElementById('resetCodeInput');
const confirmResetBtn = document.getElementById('confirmResetBtn');
const resetFeedback = document.getElementById('resetFeedback');
const modalEl = document.getElementById('participantsModal');
let bsModal = null;
if (modalEl) {
    // @ts-ignore
    bsModal = new bootstrap.Modal(modalEl);
}
// Chocoro Shower elements
const openChocoroBtn = document.getElementById('openChocoroBtn');
const chocoroModalEl = document.getElementById('chocoroModal');
let bsChocoroModal = null;
if (chocoroModalEl) {
    // @ts-ignore
    bsChocoroModal = new bootstrap.Modal(chocoroModalEl);
}
const familiesListEl = document.getElementById('familiesList');
const objectsListEl = document.getElementById('objectsList');
const chocoroFeedback = document.getElementById('chocoroFeedback');
const chocoroResult = document.getElementById('chocoroResult');
// Chocoro configuration (hard-coded)
// NOTE: configure family names below; this list is independent from PARTICIPANTS (Amigo Secreto)
const FAMILIES = [
    'Familia Hernández',
    'Familia González',
    'Familia Ramos',
    'Familia Ibarra',
    'Familia Mejía'
];
const OBJECTS = [
    'Pelota', 'Muñeco', 'Juego de té', 'Libro', 'Caja de chocolates', 'Set de tazas', 'Bufanda', 'Caja sorpresa', 'Juguete educativo', 'Velas decorativas'
];
const CHOCORO_KEY = 'chocoro-assignments-v1';
function loadChocoroAssignments() {
    const raw = localStorage.getItem(CHOCORO_KEY);
    return raw ? JSON.parse(raw) : {};
}
function saveChocoroAssignments(m) {
    localStorage.setItem(CHOCORO_KEY, JSON.stringify(m));
}
function getAvailableObjects(assigns) {
    const taken = new Set(Object.values(assigns));
    return OBJECTS.filter(o => !taken.has(o));
}
function renderChocoroLists() {
    if (!familiesListEl || !objectsListEl)
        return;
    familiesListEl.innerHTML = '';
    objectsListEl.innerHTML = '';
    const assigns = loadChocoroAssignments();
    for (const fam of FAMILIES) {
        const btn = document.createElement('button');
        btn.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-center';
        btn.textContent = fam;
        const assigned = assigns[fam];
        if (assigned) {
            btn.classList.add('disabled');
            const span = document.createElement('span');
            span.className = 'badge bg-success';
            span.textContent = 'Asignado';
            btn.appendChild(span);
        }
        else {
            btn.addEventListener('click', () => onSelectFamily(fam));
        }
        familiesListEl.appendChild(btn);
    }
    const available = getAvailableObjects(assigns);
    // Do not list objects explicitly — show only the remaining count to keep items hidden
    const countEl = document.createElement('div');
    countEl.className = 'list-group-item';
    countEl.textContent = `${available.length} objetos restantes (se asignan aleatoriamente al seleccionar una familia)`;
    objectsListEl.appendChild(countEl);
}
function onSelectFamily(family) {
    const assigns = loadChocoroAssignments();
    if (assigns[family])
        return; // already assigned
    const available = getAvailableObjects(assigns);
    if (available.length === 0) {
        if (chocoroFeedback) {
            chocoroFeedback.style.display = 'block';
            chocoroFeedback.textContent = 'No quedan objetos disponibles.';
        }
        return;
    }
    // pick a random available object
    const idx = Math.floor(Math.random() * available.length);
    const obj = available[idx];
    assigns[family] = obj;
    saveChocoroAssignments(assigns);
    // show result in chocoroResult
    if (chocoroResult) {
        chocoroResult.innerHTML = `<div class="result-card text-center"><div><strong>${family}</strong> recibió: <span style="color:var(--accent-2);">${obj}</span></div></div>`;
    }
    // re-render lists to reflect the new state
    renderChocoroLists();
}
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
    resultArea.innerHTML = `
    <div class="result-card">
      <div class="text-center">
        <p class="mb-2">${name}, tu Amigo Secreto es:</p>
        <div class="display-6"><strong>${assigned}</strong></div>
      </div>
    </div>
  `;
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
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        // open confirmation modal
        if (bsResetModal) {
            if (resetFeedback)
                resetFeedback.style.display = 'none';
            if (resetCodeInput)
                resetCodeInput.value = '';
            bsResetModal.show();
        }
        else {
            // fallback
            // @ts-ignore
            window.__secretSanta.reset();
            resultArea.innerHTML = `<div class="result-card text-center"><em>Estado reiniciado</em></div>`;
        }
    });
}
// Security code required to reset (configured as requested)
const RESET_CODE = 'Sheyo_0129';
if (confirmResetBtn) {
    confirmResetBtn.addEventListener('click', () => {
        const provided = resetCodeInput ? resetCodeInput.value.trim() : '';
        if (provided.toLowerCase() === RESET_CODE) {
            // @ts-ignore
            window.__secretSanta.reset();
            if (bsResetModal)
                bsResetModal.hide();
            resultArea.innerHTML = `<div class="result-card text-center"><em>Estado reiniciado</em></div>`;
        }
        else {
            if (resetFeedback) {
                resetFeedback.style.display = 'block';
                resetFeedback.textContent = 'Código incorrecto. Intenta de nuevo.';
            }
            if (resetCodeInput)
                resetCodeInput.focus();
        }
    });
}
// Chocoro button wiring
if (openChocoroBtn) {
    openChocoroBtn.addEventListener('click', () => {
        renderChocoroLists();
        if (bsChocoroModal)
            bsChocoroModal.show();
    });
}
// initial render for result areas if needed
renderParticipants();
renderChocoroLists();
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
