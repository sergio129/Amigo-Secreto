// Lista de participantes "quemada" en el código
const PARTICIPANTS: string[] = [
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

type Assignments = Record<string, string>;

const STORAGE_KEY = 'secret-santa-assignments-v1';

function saveAssignments(assigns: Assignments) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(assigns));
}

function loadAssignments(): Assignments {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : {};
}

// Genera una derangement (permutación sin puntos fijos) simple
function derangement(names: string[]): string[] {
  if (names.length <= 1) return [];
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
      if (result[i] === names[i]) { ok = false; break; }
    }
    if (ok) return result;
  }

  // Fallback: deterministic derangement for small sets
  // rotate by 1
  return names.slice(1).concat(names[0]);
}

function ensureAssignments(): Assignments {
  const existing = loadAssignments();
  // If assignments already cover all participants, return them
  if (Object.keys(existing).length === PARTICIPANTS.length) return existing;

  // Build list of available receivers
  const receivers = PARTICIPANTS.slice();
  // Generate a derangement matching PARTICIPANTS order
  const der = derangement(receivers);
  const assigns: Assignments = {};
  for (let i = 0; i < PARTICIPANTS.length; i++) {
    assigns[PARTICIPANTS[i]] = der[i];
  }
  saveAssignments(assigns);
  return assigns;
}

// UI
const openListBtn = document.getElementById('openListBtn') as HTMLButtonElement;
const participantsList = document.getElementById('participantsList') as HTMLElement;
const resultArea = document.getElementById('resultArea') as HTMLElement;
const resetBtn = document.getElementById('resetBtn') as HTMLButtonElement | null;

const modalEl = document.getElementById('participantsModal') as HTMLElement;
let bsModal: any = null;
if (modalEl) {
  // @ts-ignore
  bsModal = new bootstrap.Modal(modalEl);
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
    } else {
      item.addEventListener('click', () => onSelectParticipant(name));
    }

    participantsList.appendChild(item);
  }
}

function onSelectParticipant(name: string) {
  const assignments = ensureAssignments();
  // If already revealed, ignore
  if (localStorage.getItem('revealed-' + name) === '1') return;

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
  if (bsModal) bsModal.hide();
}

openListBtn.addEventListener('click', () => {
  renderParticipants();
  if (bsModal) bsModal.show();
});

if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    // @ts-ignore
    window.__secretSanta.reset();
    // small visual feedback
    resultArea.innerHTML = `<div class="result-card text-center"><em>Estado reiniciado</em></div>`;
  });
}

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
