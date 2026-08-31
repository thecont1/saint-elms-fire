// @ts-nocheck -- Bun exposes bun:test at runtime.
import { describe, expect, test } from 'bun:test';
import {
  FRIEND_ACADEMIC_REDIRECT,
  FRIEND_PRIVACY_ANSWER,
  classifyFriendQuestion,
  findMentionedUnreleasedTitle,
  shouldUseBreakMode,
  validatePhilosopherAnswer,
} from './persona-contracts';

describe('Friend deterministic lane policy', () => {
  test('redirects explicit academic questions before retrieval', () => {
    expect(classifyFriendQuestion('Explain Newton second law')).toBe('academic');
    expect(FRIEND_ACADEMIC_REDIRECT).toContain('Socrates my Guide');
  });

  test('refuses requests for another student personal data with corpus policy', () => {
    expect(classifyFriendQuestion("what's a classmate's phone number?")).toBe('pii');
    expect(FRIEND_PRIVACY_ANSWER).toContain('Do not share');
    expect(FRIEND_PRIVACY_ANSWER).not.toMatch(/\d{7,}/);
  });

  test('keeps fee and deadline questions in the support lane', () => {
    expect(classifyFriendQuestion('When is the fee deadline?')).toBe('support');
  });
});

describe('Guide unreleased-title guard', () => {
  test('matches explicit unreleased lesson titles case-insensitively', () => {
    expect(findMentionedUnreleasedTitle('Can you explain Quantum Mechanics?', ['Quantum Mechanics', 'Real Analysis'])).toBe('Quantum Mechanics');
  });

  test('does not reject unrelated wording from title metadata alone', () => {
    expect(findMentionedUnreleasedTitle('How should I analyse this?', ['Real Analysis'])).toBeNull();
  });
});

describe('Philosopher response contract', () => {
  test('accepts tagged substantive claims ending in one trailhead question', () => {
    const answer = '[course] Oscillations exchange energy between kinetic and potential forms.\n[web] Modern detectors exploit related resonance effects.\nTrailhead: Which detector design would you compare next?';
    expect(validatePhilosopherAnswer(answer, [])).toEqual({ ok: true });
  });

  test('rejects untagged claims, absent trailhead, multiple trailheads, and unreleased titles', () => {
    expect(validatePhilosopherAnswer('An untagged factual claim.\nTrailhead: Why?', []).ok).toBe(false);
    expect(validatePhilosopherAnswer('[course] A supported claim.', []).ok).toBe(false);
    expect(validatePhilosopherAnswer('[course] A.\nTrailhead: Why?\nTrailhead: How?', []).ok).toBe(false);
    expect(validatePhilosopherAnswer('[web] Quantum Mechanics is next.\nTrailhead: Why?', ['Quantum Mechanics']).ok).toBe(false);
  });
});

describe('Chetna break mode', () => {
  test('requires completed Sem V state and no pending releases', () => {
    expect(shouldUseBreakMode({ breakMode: true, completedSemester: 5, pendingReleaseCount: 0 })).toBe(true);
    expect(shouldUseBreakMode({ breakMode: true, completedSemester: 5, pendingReleaseCount: 1 })).toBe(false);
    expect(shouldUseBreakMode({ breakMode: false, completedSemester: 5, pendingReleaseCount: 0 })).toBe(false);
    expect(shouldUseBreakMode({ breakMode: true, completedSemester: 4, pendingReleaseCount: 0 })).toBe(false);
  });
});
