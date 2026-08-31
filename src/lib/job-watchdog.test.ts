import { describe, expect, test } from 'bun:test';
import { sweepStaleWork, JOB_LEASE_MS, JOB_TIMEOUT_MS, MAX_JOB_ATTEMPTS, ARTIFACT_PENDING_DEADLINE_MS, type WatchdogStore } from './job-watchdog';
import type { JobRecord } from './job-queue';
import type { GeneratedArtifact } from './artifacts';

function makeStore(state: { jobs: JobRecord[]; artifacts: GeneratedArtifact[] }) {
  const calls: string[] = [];
  const store: WatchdogStore = {
    async listActiveJobs() {
      return state.jobs.filter((j) => j.status === 'running' || j.status === 'pending');
    },
    async listPendingArtifactsOlderThan(cutoffIso) {
      return state.artifacts.filter((a) => a.status === 'pending' && a.createdAt < cutoffIso);
    },
    async getJob(id) {
      return state.jobs.find((j) => j.id === id) ?? null;
    },
    async resetJobToPending(job) {
      calls.push(`reset:${job.id}`);
      const j = state.jobs.find((x) => x.id === job.id);
      if (j) {
        j.status = 'pending';
        j.startedAt = undefined;
      }
    },
    async failJob(job) {
      calls.push(`failJob:${job.id}`);
      const j = state.jobs.find((x) => x.id === job.id);
      if (j) j.status = 'failed';
    },
    async failArtifact(id) {
      calls.push(`failArtifact:${id}`);
      const artifact = state.artifacts.find((a) => a.id === id);
      if (artifact) {
        artifact.status = 'failed';
        artifact.error = 'job_lost';
      }
    },
  };
  return { store, calls };
}

const job = (over: Partial<JobRecord>): JobRecord => ({
  id: 'job-1',
  kind: 'notes_pdf',
  payload: { artifactId: 'art-1' },
  status: 'running',
  attempts: 1,
  createdAt: new Date().toISOString(),
  ...over,
});

const artifact = (over: Partial<GeneratedArtifact>): GeneratedArtifact => ({
  id: 'art-1',
  studentId: 'student-alex',
  lessonId: 'lesson-1',
  formatType: 'notes_pdf',
  status: 'pending',
  storagePath: 'artifacts/x/y/z.pdf',
  mimeType: 'application/pdf',
  createdAt: new Date(0).toISOString(),
  ...over,
});

describe('sweepStaleWork', () => {
  test('reclaims a stranded running job under the attempt cap', async () => {
    const now = Date.now();
    const stale = job({ startedAt: new Date(now - JOB_LEASE_MS - 1000).toISOString(), attempts: 1 });
    const { store, calls } = makeStore({ jobs: [stale], artifacts: [] });
    const result = await sweepStaleWork(store, now);
    expect(result).toEqual({ reclaimed: 1, deadLettered: 0, orphanedArtifacts: 0 });
    expect(calls).toEqual(['reset:job-1']);
    expect(stale.status).toBe('pending');
  });

  test('dead-letters a stranded job at the attempt cap and fails its artifact', async () => {
    const now = Date.now();
    const exhausted = job({ startedAt: new Date(now - JOB_LEASE_MS - 1000).toISOString(), attempts: MAX_JOB_ATTEMPTS - 1 });
    const pending = artifact({});
    const { store, calls } = makeStore({ jobs: [exhausted], artifacts: [pending] });
    const result = await sweepStaleWork(store, now);
    expect(result).toEqual({ reclaimed: 0, deadLettered: 1, orphanedArtifacts: 0 });
    expect(calls).toEqual(['failJob:job-1', 'failArtifact:art-1']);
    expect(exhausted.status).toBe('failed');
    expect(pending.status).toBe('failed');
    expect(pending.error).toBe('job_lost');
  });

  test('leaves a fresh running job alone', async () => {
    const now = Date.now();
    const fresh = job({ startedAt: new Date(now - 1000).toISOString() });
    const { store, calls } = makeStore({ jobs: [fresh], artifacts: [] });
    const result = await sweepStaleWork(store, now);
    expect(result).toEqual({ reclaimed: 0, deadLettered: 0, orphanedArtifacts: 0 });
    expect(calls).toEqual([]);
  });

  test('fails an orphaned pending artifact whose job is terminal', async () => {
    const now = Date.now();
    const failedJob = job({ status: 'failed', startedAt: new Date(now - 1000).toISOString() });
    const orphan = artifact({
      createdAt: new Date(now - ARTIFACT_PENDING_DEADLINE_MS - 1000).toISOString(),
      jobId: 'job-1',
    });
    const { store, calls } = makeStore({ jobs: [failedJob], artifacts: [orphan] });
    const result = await sweepStaleWork(store, now);
    expect(result).toEqual({ reclaimed: 0, deadLettered: 0, orphanedArtifacts: 1 });
    expect(calls).toEqual(['failArtifact:art-1']);
  });

  test('fails a stuck podcast past its overall timeout ceiling', async () => {
    const now = Date.now();
    const stuck = job({
      createdAt: new Date(now - (JOB_TIMEOUT_MS.podcast_audio + 1000)).toISOString(),
      startedAt: new Date(now - (JOB_TIMEOUT_MS.podcast_audio + 1000)).toISOString(),
      status: 'running',
      kind: 'podcast_audio',
    });
    const { store, calls } = makeStore({ jobs: [stuck], artifacts: [] });
    const result = await sweepStaleWork(store, now);
    expect(result).toEqual({ reclaimed: 0, deadLettered: 1, orphanedArtifacts: 0 });
    expect(calls).toEqual(['failJob:job-1', 'failArtifact:art-1']);
  });

  test('leaves a legitimately slow podcast alone inside its bounded budget', async () => {
    // The artifacts list endpoint sweeps on every UI poll: a podcast at 200s
    // is still inside its ~225s bounded worst case and must NOT be
    // dead-lettered while it is visibly making progress.
    const now = Date.now();
    const slow = job({
      createdAt: new Date(now - 200_000).toISOString(),
      startedAt: new Date(now - 200_000).toISOString(),
      status: 'running',
      kind: 'podcast_audio',
    });
    const { store, calls } = makeStore({ jobs: [slow], artifacts: [] });
    const result = await sweepStaleWork(store, now);
    expect(result).toEqual({ reclaimed: 0, deadLettered: 0, orphanedArtifacts: 0 });
    expect(calls).toEqual([]);
  });

  test('fails a stuck notes_pdf job past its 2-minute ceiling', async () => {
    const now = Date.now();
    const stuck = job({
      createdAt: new Date(now - (JOB_TIMEOUT_MS.notes_pdf + 1000)).toISOString(),
      startedAt: new Date(now - (JOB_TIMEOUT_MS.notes_pdf + 1000)).toISOString(),
      status: 'running',
      kind: 'notes_pdf',
    });
    const { store, calls } = makeStore({ jobs: [stuck], artifacts: [] });
    const result = await sweepStaleWork(store, now);
    expect(result).toEqual({ reclaimed: 0, deadLettered: 1, orphanedArtifacts: 0 });
    expect(calls).toEqual(['failJob:job-1', 'failArtifact:art-1']);
  });

  test('leaves a pending artifact with a live job alone', async () => {
    const now = Date.now();
    const live = job({ status: 'running', startedAt: new Date(now - 1000).toISOString() });
    const oldPending = artifact({
      createdAt: new Date(now - ARTIFACT_PENDING_DEADLINE_MS - 1000).toISOString(),
      jobId: 'job-1',
    });
    const { store, calls } = makeStore({ jobs: [live], artifacts: [oldPending] });
    const result = await sweepStaleWork(store, now);
    expect(result.orphanedArtifacts).toBe(0);
    expect(calls).toEqual([]);
  });
});
