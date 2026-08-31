/**
 * Job watchdog (Phase 7, Track A2): no job or artifact may be unobservable.
 * Reclaims jobs stranded in `running` (process reload/crash), dead-letters
 * jobs that exhaust their attempts, and fails artifacts orphaned in
 * `pending` with no live job. Pure orchestration over an injected store so
 * the policy is unit-testable without Firestore.
 */
import type { JobRecord, JobErrorCategory, JobKind } from './job-queue';
import type { GeneratedArtifact, ArtifactErrorCategory } from './artifacts';

/** Above the worst-case bounded job duration (75s generation + 120s TTS +
 *  30s storage ≈ 225s) so a legitimately slow job is never reclaimed. */
export const JOB_LEASE_MS = 5 * 60_000;
export const MAX_JOB_ATTEMPTS = 3;

const DEFAULT_PODCAST_CEILING_MS = 4 * 60_000;

export function parsePodcastCeilingMs(value: string | undefined): number {
  if (!value || !/^\d+$/.test(value)) return DEFAULT_PODCAST_CEILING_MS;
  const seconds = Number(value);
  return Number.isSafeInteger(seconds) && seconds > 0
    ? seconds * 1000
    : DEFAULT_PODCAST_CEILING_MS;
}

/** Wall-clock dead-letter ceilings measured from createdAt. They MUST sit
 *  above each pipeline's own bounded worst case (podcast ≈ 75s generation +
 *  120s TTS + 30s storage ≈ 225s; PDF ≈ 75s + render + 30s ≈ 110s): a
 *  legitimately running job always reaches a terminal state by its own
 *  deadlines before the watchdog may fire. A lower ceiling kills in-flight
 *  work — the artifacts list endpoint sweeps on every UI poll, so an
 *  under-sized ceiling fails legitimate jobs while users watch. */
export const JOB_TIMEOUT_MS: Record<JobKind, number> = {
  podcast_audio: parsePodcastCeilingMs(process.env.WATCHDOG_PODCAST_CEILING_S),
  notes_pdf: 2 * 60_000,
  reading_recommendation: 2 * 60_000,
};
/** Client gives up waiting at ~4min (Track A4); the watchdog owns the fate
 *  of anything still pending after this. */
export const ARTIFACT_PENDING_DEADLINE_MS = 6 * 60_000;

export const WATCHDOG_CATEGORY: JobErrorCategory & ArtifactErrorCategory = 'job_lost';

export interface WatchdogStore {
  listActiveJobs(): Promise<JobRecord[]>;
  listPendingArtifactsOlderThan(cutoffIso: string): Promise<GeneratedArtifact[]>;
  getJob(id: string): Promise<JobRecord | null>;
  resetJobToPending(job: JobRecord): Promise<void>;
  failJob(job: JobRecord, category?: JobErrorCategory): Promise<void>;
  failArtifact(id: string, expectedStatus?: 'pending', category?: ArtifactErrorCategory): Promise<void>;
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
  for (const job of await store.listActiveJobs()) {
    const isTimeout = now - Date.parse(job.createdAt) > JOB_TIMEOUT_MS[job.kind];

    if (isTimeout) {
      await store.failJob(job, 'timeout');
      if (job.payload.artifactId) {
        await store.failArtifact(job.payload.artifactId, 'pending', 'timeout');
      }
      result.deadLettered += 1;
      continue;
    }

    if (job.status === 'running') {
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
