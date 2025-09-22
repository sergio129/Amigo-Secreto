// Algoritmo de derangement - migrado desde el código actual que funciona
export function derangement(names: string[]): string[] {
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
      if (result[i] === names[i]) { 
        ok = false; 
        break; 
      }
    }
    if (ok) return result;
  }

  // Fallback: deterministic derangement for small sets
  if (n === 2) return [names[1], names[0]];
  if (n === 3) return [names[1], names[2], names[0]];
  
  // For larger sets, use a simple rotation as fallback
  return [names[1], ...names.slice(2), names[0]];
}

// Crear asignaciones usando el algoritmo de derangement
export function createAssignments(participants: string[]): Record<string, string> {
  const shuffled = derangement(participants);
  const assignments: Record<string, string> = {};
  
  for (let i = 0; i < participants.length; i++) {
    assignments[participants[i]] = shuffled[i];
  }
  
  return assignments;
}