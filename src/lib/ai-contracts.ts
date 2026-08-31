export const HEARTH_PERSONA_IDS = ['guide', 'philosopher', 'friend'] as const;
export type HearthPersona = (typeof HEARTH_PERSONA_IDS)[number];

export type ModelRole = 'primary' | 'fallback';
export interface ServedBy {
  model: string;
  role: ModelRole;
  attemptCount: number;
}
