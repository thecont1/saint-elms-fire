// @ts-nocheck -- Bun exposes bun:test at runtime.
import { describe, expect, test } from 'bun:test';
import { buildBreakModeChallenge, buildGuideRefusal, safeFriendSources } from './persona-responses';

describe('deterministic persona responses', () => {
  test('Guide refusal never includes the unreleased title or content', () => {
    const response = buildGuideRefusal();
    expect(response.answer).toBe("that's beyond what I've released to you — try the Philosopher");
    expect(response.groundedSources).toEqual([]);
    expect(response.retrievedChunkCount).toBe(0);
  });

  test('Friend drops model-invented and non-support sources', () => {
    const safe = safeFriendSources(
      [{ lessonId: 'support-1', lessonTitle: 'Fees', concept: 'Fees', summary: 'deadline' }, { lessonId: 'physics-1', lessonTitle: 'Mechanics', concept: 'Force', summary: 'F=ma' }],
      new Map([['support-1', { lessonId: 'support-1', lessonTitle: 'Fees', concept: 'Fees', summary: 'deadline' }]]),
    );
    expect(safe).toEqual([{ lessonId: 'support-1', lessonTitle: 'Fees', concept: 'Fees', summary: 'deadline' }]);
  });

  test('break-mode challenge uses a licensed reading trailhead and banked-fire language', () => {
    const response = buildBreakModeChallenge({
      studentId: 'student-chetna',
      sessionId: 'session-1',
      concept: 'Resonance',
      lessonTitle: 'Waves & Optics',
      readingTitle: 'The Feynman Lectures on Physics',
    });
    expect(response.socraticQuestion).toContain('keep the fire banked');
    expect(response.contextHint).toContain('The Feynman Lectures on Physics');
    expect(response.triggerReason).toContain('Spaced revisitation');
  });
});
