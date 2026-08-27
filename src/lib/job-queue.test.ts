// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import {
  createJobRunner,
  buildPendingJob,
  JOB_KINDS,
  type JobRecord,
  type JobStore,
} from './job-queue';

function makeFakeStore(initial: JobRecord[] = []): JobStore & { jobs: Map<string, JobRecord> } {
  const jobs = new Map(initial.map((job) => [job.id, job]));
  return {
    jobs,
    async claimNextPending() {
      for (const job of jobs.values()) {
        if (job.status === 'pending') {
          const claimed = { ...job, status: 'running' as const, startedAt: new Date().toISOString() };
          jobs.set(job.id, claimed);
          return claimed;
        }
      }
      return null;
    },
    async update(id, patch) {
      const existing = jobs.get(id);
      if (!existing) throw new Error('job not found');
      jobs.set(id, { ...existing, ...patch });
    },
  };
}

const baseJob = buildPendingJob({
  id: 'job-1',
  kind: 'podcast_audio',
  payload: { artifactId: 'art-1', studentId: 'student-alex', lessonId: 'lesson-1' },
  requestedAt: '2026-08-27T00:00:00.000Z',
});

describe('buildPendingJob', () => {
  test('creates a pending job with attempts=0', () => {
    expect(baseJob.status).toBe('pending');
    expect(baseJob.attempts).toBe(0);
    expect(JOB_KINDS).toContain(baseJob.kind);
  });

  test('rejects unknown kinds', () => {
    expect(() => buildPendingJob({ ...baseJob, kind: 'mine_bitcoin' })).toThrow();
  });
});

describe('job runner lifecycle', () => {
  test('successful handler marks job succeeded', async () => {
    const store = makeFakeStore([baseJob]);
    const runner = createJobRunner(store, {
      podcast_audio: async () => {},
      notes_pdf: async () => {},
      reading_recommendation: async () => {},
    });
    const processed = await runner.drainOnce();
    expect(processed).toBe(1);
    expect(store.jobs.get('job-1')!.status).toBe('succeeded');
  });

  test('handler failure marks job failed with bounded category, never raw message', async () => {
    const store = makeFakeStore([baseJob]);
    const runner = createJobRunner(store, {
      podcast_audio: async () => {
        throw new Error('SECRET_KEY leaked stacktrace');
      },
      notes_pdf: async () => {},
      reading_recommendation: async () => {},
    });
    await runner.drainOnce();
    const job = store.jobs.get('job-1')!;
    expect(job.status).toBe('failed');
    expect(job.errorCategory).toBe('unknown');
    expect(JSON.stringify(job)).not.toContain('SECRET_KEY');
  });

  test('drainOnce processes all pending jobs and increments attempts', async () => {
    const second = buildPendingJob({ ...baseJob, id: 'job-2' });
    const store = makeFakeStore([baseJob, second]);
    const runner = createJobRunner(store, {
      podcast_audio: async () => {},
      notes_pdf: async () => {},
      reading_recommendation: async () => {},
    });
    const processed = await runner.drainOnce();
    expect(processed).toBe(2);
    expect(store.jobs.get('job-2')!.attempts).toBe(1);
  });

  test('no pending jobs is a no-op', async () => {
    const store = makeFakeStore([]);
    const runner = createJobRunner(store, {
      podcast_audio: async () => {},
      notes_pdf: async () => {},
      reading_recommendation: async () => {},
    });
    expect(await runner.drainOnce()).toBe(0);
  });
});
