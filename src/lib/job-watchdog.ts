/**
 * Job watchdog (Phase 7, Track A2): no job or artifact may be unobservable.
 * Reclaims jobs stranded in `running` (process reload/crash), dead-letters
 * jobs that exhaust their attempts, and fails artifacts orphaned in
 * `pending` with no live job. Pure orchestration over an injected store so
 * the policy is unit-testable without Firestore.
 */
import type { JobRecord, JobErrorCategory } from './job-queue';
import type { GeneratedArtifact, ArtifactErrorCategory } from './artifacts';

/** Above the worst-case bounded job duration (75s generation + 120s TTS +
 *  30s storage ≈ 225s) so a legitimately slow job is never reclaimed. */
export const JOB_LEASE_MS = 5 * 60_000;
export const MAX_JOB_ATTEMPTS = 3;
/** Client gives up waiting at ~4min (Track A4); the watchdog owns the fate
 *  of anything still pending after this. */
export const ARTIFACT_PENDING_DEADLINE_MS = 6 * 60_000;

export const WATCHDOG_CATEGORY: JobErrorCategory & ArtifactErrorCategory = 'job_lost';

export interface WatchdogStore {
  listRunningJobs(): Promise<JobRecord[]>;
  listPendingArtifactsOlderThan(cutoffIso: string): Promise<GeneratedArtifact[]>;
  getJob(id: string): Promise<JobRecord | null>;
  resetJobToPending(job: JobRecord): Promise<void>;
  failJob(job: JobRecord): Promise<void>;
  failArtifact(id: string, expectedStatus?: 'pending'): Promise<void>;
}

export interface SweepResult {
  reclaimed: number;
  deadLettered: number;
  orphanedArtifacts: number;
}

/**
 * Reclaims stale jobs and fails exhausted jobs and orphaned artifacts.
 *
 * @param store - Storage operations used to inspect and update jobs and artifacts
 * @param now - Timestamp used to calculate staleness cutoffs
 * @returns Counts of reclaimed jobs, dead-lettered jobs, and orphaned artifacts
 */
export async function sweepStaleWork(store: WatchdogStore, now = Date.now()): Promise<SweepResult> {
  const result: SweepResult = { reclaimed: 0, deadLettered: 0, orphanedArtifacts: 0 };

  const leaseCutoff = new Date(now - JOB_LEASE_MS).toISOString();
  for (const job of await store.listRunningJobs()) {
    if (!job.startedAt || job.startedAt >= leaseCutoff) continue;
    if (job.attempts + 1 >= MAX_JOB_ATTEMPTS) {
      await store.failJob(job);
      if (job.payload.artifactId) await store.failArtifact(job.payload.artifactId, 'pending');
      result.deadLettered += 1;
    } else {
      await store.resetJobToPending(job);
      result.reclaimed += 1;
    }
  }

  const artifactCutoff = new Date(now - ARTIFACT_PENDING_DEADLINE_MS).toISOString();
  for (const artifact of await store.listPendingArtifactsOlderThan(artifactCutoff)) {
    const job = artifact.jobId ? await store.getJob(artifact.jobId) : null;
    if (job && (job.status === 'pending' || job.status === 'running')) continue;
    await store.failArtifact(artifact.id, 'pending');
    result.orphanedArtifacts += 1;
  }

  return result;
}
