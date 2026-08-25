// @ts-nocheck -- Bun exposes bun:test at runtime.
import { describe, expect, test } from 'bun:test';
import {
  buildPendingRelease,
  completeRelease,
  failRelease,
  getReleaseDisplayState,
  isLegacyRelease,
  isReleaseVisible,
  releaseHasAllStepsComplete,
} from './release-integrity';

const requestedAt = '2026-08-25T10:00:00.000Z';

describe('release integrity state machine', () => {
  test('builds one ordered pending stage set per targeted lesson', () => {
    const release = buildPendingRelease({
      id: 'r1',
      courseId: 'c1',
      moduleId: 'm1',
      studentId: 's1',
      targetLessonIds: ['l1', 'l2'],
      requestedAt,
    });

    expect(release.overallStatus).toBe('pending');
    expect(release.status).toBe('pending');
    expect(release.attemptCount).toBe(1);
    expect(release.lastAttemptAt).toBe(requestedAt);
    expect(release.steps.map((step) => `${step.lessonId}:${step.stage}:${step.status}`)).toEqual([
      'l1:parsing:pending',
      'l1:chunking:pending',
      'l1:embedding:pending',
      'l1:vector_write:pending',
      'l1:graph_write:pending',
      'l2:parsing:pending',
      'l2:chunking:pending',
      'l2:embedding:pending',
      'l2:vector_write:pending',
      'l2:graph_write:pending',
    ]);
    expect(isReleaseVisible(release)).toBe(false);
  });

  test('only a release with every lesson stage complete can become visible', () => {
    const pending = buildPendingRelease({
      id: 'r1', courseId: 'c1', moduleId: 'm1', studentId: 's1',
      targetLessonIds: ['l1'], requestedAt,
    });
    expect(() => completeRelease(pending, '2026-08-25T10:01:00.000Z')).toThrow('not complete');

    const completeSteps = pending.steps.map((step) => ({ ...step, status: 'complete' as const }));
    const released = completeRelease({ ...pending, steps: completeSteps }, '2026-08-25T10:01:00.000Z');
    expect(releaseHasAllStepsComplete(released)).toBe(true);
    expect(released.overallStatus).toBe('released');
    expect(released.status).toBe('released');
    expect(released.releasedAt).toBe('2026-08-25T10:01:00.000Z');
    expect(isReleaseVisible(released, new Date('2026-08-25T10:02:00.000Z'))).toBe(true);
  });

  test('a bounded failure is invisible and diagnostic', () => {
    const pending = buildPendingRelease({
      id: 'r1', courseId: 'c1', moduleId: 'm1', studentId: 's1',
      targetLessonIds: ['l1'], requestedAt,
    });
    const failed = failRelease(pending, 'embedding_unavailable');
    expect(failed.overallStatus).toBe('failed');
    expect(failed.status).toBe('failed');
    expect(failed.failureCategory).toBe('embedding_unavailable');
    expect(isReleaseVisible(failed)).toBe(false);
    expect(getReleaseDisplayState(failed).label).toBe('Failed');
  });

  test('legacy released records remain visible and are labelled explicitly', () => {
    const legacy = {
      id: 'legacy', courseId: 'c1', moduleId: 'm1', studentId: 's1',
      releasedAt: '2026-08-24T10:00:00.000Z', status: 'released' as const,
    };
    expect(isLegacyRelease(legacy)).toBe(true);
    expect(isReleaseVisible(legacy, new Date('2026-08-25T10:00:00.000Z'))).toBe(true);
    expect(getReleaseDisplayState(legacy).label).toBe('Synced (legacy)');
  });

  test('future legacy releases and incomplete new releases remain invisible', () => {
    const futureLegacy = {
      id: 'legacy', courseId: 'c1', moduleId: 'm1', studentId: 's1',
      releasedAt: '2026-08-26T10:00:00.000Z', status: 'released' as const,
    };
    expect(isReleaseVisible(futureLegacy, new Date('2026-08-25T10:00:00.000Z'))).toBe(false);

    const pending = buildPendingRelease({
      id: 'r1', courseId: 'c1', moduleId: 'm1', studentId: 's1',
      targetLessonIds: ['l1'], requestedAt,
    });
    const dishonest = { ...pending, overallStatus: 'released' as const, status: 'released' as const };
    expect(isReleaseVisible(dishonest)).toBe(false);
  });
});
