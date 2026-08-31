import { Flame, Navigation, Telescope } from 'lucide-react';
import type { ComponentType } from 'react';

export type HearthPersona = 'guide' | 'philosopher' | 'friend';

export interface HearthPersonaConfig {
  id: HearthPersona;
  label: string;
  voice: string;
  stageLine: string;
  Icon: ComponentType<{ className?: string }>;
  emptyTitle: string;
  emptyBody: string;
  samplePrompts: [string, string, string];
}

// Persona identity is carried by iconography + typographic treatment in the
// mariner palette (banked flame / telescope / compass star) — never by hue.
// Canonical trident order: Friend, Philosopher, Guide.
export const HEARTH_PERSONAS: readonly HearthPersonaConfig[] = [
  {
    id: 'friend',
    label: 'Friend',
    voice: 'Socrates my Friend',
    stageLine: 'Course operations, deadlines, and university support',
    Icon: Flame,
    emptyTitle: 'The fire is banked for you.',
    emptyBody:
      'Fees, calendars, offices, policies — the business of the university, kept warm. For academics I will walk you to the Guide.',
    samplePrompts: [
      'When are semester fees due?',
      'Where do I find the academic calendar?',
      'How do I contact the student support office?',
    ],
  },
  {
    id: 'philosopher',
    label: 'Philosopher',
    voice: 'Socratest my Philosopher',
    stageLine: 'Connects released concepts to the wider world',
    Icon: Telescope,
    emptyTitle: 'The horizon is wider than the chart.',
    emptyBody:
      'I take what your lessons have taught and push it into the world — every claim marked [course] or [web], and every answer ends at a new trailhead.',
    samplePrompts: [
      'How does resonance appear outside physics?',
      'Where do the ideas in this lesson connect to real-world engineering?',
      'What should I read next to deepen this concept?',
    ],
  },
  {
    id: 'guide',
    label: 'Guide',
    voice: 'Socrates my Guide',
    stageLine: 'Answers from your released courseware only',
    Icon: Navigation,
    emptyTitle: 'The course is plotted.',
    emptyBody:
      'Ask within your charted course and I will answer from released lessons alone. Beyond the chart, I will point you to the Philosopher.',
    samplePrompts: [
      'Explain the difference between displacement and distance.',
      'What does the wave equation tell us about energy transfer?',
      'Walk me through the steps of a proof by induction.',
    ],
  },
] as const;

export function getPersonaConfig(id: HearthPersona): HearthPersonaConfig {
  const found = HEARTH_PERSONAS.find((p) => p.id === id);
  if (!found) throw new Error(`Unknown persona: ${id}`);
  return found;
}

export function personaLabel(id: HearthPersona): string {
  return getPersonaConfig(id).voice;
}
