export const FRIEND_ACADEMIC_REDIRECT = "I'm your course-ops buddy! For academic questions, please ask Socrates my Guide.";
export const FRIEND_PRIVACY_ANSWER = "Personal privacy is a right and a responsibility. Do not share a classmate's phone number, email, photographs, or other personal data without their consent.";

export type FriendQuestionLane = 'academic' | 'pii' | 'support';

const ACADEMIC_PATTERNS = [
  /\b(?:explain|derive|solve|calculate|prove)\b[\s\S]*\b(?:physics|math(?:ematics)?|calculus|mechanics|quantum|equation|theorem|law|force|energy|wave|integral|derivative)\b/i,
  /\b(?:newton(?:'s)?|einstein|quantum mechanics|real analysis|differential equations?|maxwell(?:'s)? equations?)\b/i,
  /\bwhat\s+is\s+(?:the\s+)?(?:cap theorem|newton(?:'s)? second law|derivative|integral|wave equation)\b/i,
];

const PII_PATTERNS = [
  /\b(?:classmate|student|roommate|teacher|professor|someone(?:'s)?)\b[\s\S]{0,48}\b(?:phone|mobile|email|address|aadhaar|bank account|password|contact (?:info|information|details))\b/i,
  /\b(?:phone|mobile|email|address|aadhaar|bank account|password|contact (?:info|information|details))\b[\s\S]{0,48}\b(?:classmate|student|roommate|teacher|professor|someone)\b/i,
  /\b(?:give|share|tell|find|what(?:'s| is))\b[\s\S]{0,32}\b(?:their|his|her|classmate(?:'s)?|student(?:'s)?)\b[\s\S]{0,24}\b(?:number|email|address|contact)\b/i,
];

export function classifyFriendQuestion(question: string): FriendQuestionLane {
  const normalized = question.trim();
  if (PII_PATTERNS.some((pattern) => pattern.test(normalized))) return 'pii';
  if (ACADEMIC_PATTERNS.some((pattern) => pattern.test(normalized))) return 'academic';
  return 'support';
}

function normalizedWords(value: string): string[] {
  return value.toLocaleLowerCase('en-IN').match(/[\p{L}\p{N}]+/gu) ?? [];
}

export function findMentionedUnreleasedTitle(question: string, titles: readonly string[]): string | null {
  const questionWords = normalizedWords(question);
  for (const title of titles) {
    const titleWords = normalizedWords(title);
    if (titleWords.length === 0) continue;
    for (let index = 0; index <= questionWords.length - titleWords.length; index++) {
      if (titleWords.every((word, offset) => questionWords[index + offset] === word)) return title;
    }
  }
  return null;
}

export type PhilosopherValidation = { ok: true } | { ok: false; reason: string };

export function validatePhilosopherAnswer(answer: string, unreleasedTitles: readonly string[]): PhilosopherValidation {
  const text = answer.trim();
  if (!text) return { ok: false, reason: 'empty answer' };

  const mentioned = findMentionedUnreleasedTitle(text, unreleasedTitles);
  if (mentioned) return { ok: false, reason: `unreleased title surfaced: ${mentioned}` };

  const lines = text.split(/\n+/).map((line) => line.trim()).filter(Boolean);
  const trailheads = lines.filter((line) => /^trailhead\s*:/i.test(line));
  if (trailheads.length !== 1) return { ok: false, reason: 'response must contain exactly one trailhead' };
  if (lines.at(-1) !== trailheads[0] || !trailheads[0].endsWith('?')) {
    return { ok: false, reason: 'trailhead must be the final question' };
  }

  const claims = lines.filter((line) => !/^trailhead\s*:/i.test(line));
  if (claims.length === 0) return { ok: false, reason: 'response has no grounded claims' };
  if (claims.some((line) => !/^\[(?:course|web)\](?:\s|$)/i.test(line))) {
    return { ok: false, reason: 'every substantive line must begin with [course] or [web]' };
  }
  return { ok: true };
}

export interface BreakModeState {
  breakMode: boolean;
  completedSemester: number;
  pendingReleaseCount: number;
}

export function shouldUseBreakMode(state: BreakModeState): boolean {
  return state.breakMode && state.completedSemester >= 5 && state.pendingReleaseCount === 0;
}
