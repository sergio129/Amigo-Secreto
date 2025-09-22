// Tipos para el sistema de Amigo Secreto
export interface Participant {
  _id?: string;
  eventId: string;
  name: string;
  email?: string;
  isRevealed: boolean;
  revealedAt?: Date;
  createdAt: Date;
}

export interface AmigoSecretoEvent {
  _id?: string;
  name: string;
  description: string;
  status: 'active' | 'finished' | 'draft';
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  settings: {
    allowSelfAssignment: boolean;
    revealDate?: Date;
    maxBudget?: number;
  };
}

export interface Assignment {
  _id?: string;
  eventId: string;
  giverId: string; // ID del participante que da el regalo
  receiverId: string; // ID del participante que recibe el regalo
  createdAt: Date;
}

export type Assignments = Record<string, string>;