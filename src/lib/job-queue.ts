/**
 * Minimal in-process async job discipline (Phase 6, Track C1).
 *
 * Jobs are persisted in the `jobs` Firestore collection so API routes can
 * return 202 + poll while long-running work (TTS, PDF render, reading
 * recommendation) executes in-process after the response is sent.
 *
 * Deliberately NOT a distributed queue: single Cloud Run instance semantics.
 * Upgrade path (documented in docs/PHASE6.md): swap JobStore for a Cloud
 * Tasks/Pub-Sub-backed implementation without touching handlers.
 */

export const JOB_KINDS = ['podcast_audio', 'notes_pdf', 'reading_recommendation'] as const;
export type JobKind = (typeof JOB_KINDS)[number];

export type JobStatus = 'pending' | 'running' | 'succeeded' | 'failed';

export type JobErrorCategory =
  | 'tts_unavailable'
  | 'pdf_render_failed'
  | 'generation_failed'
  | 'storage_write_failed'
  | 'job_lost'
  | 'unknown';

export interface JobRecord {
  id: string;
  kind: JobKind;
  payload: Record<string, string>;
  status: JobStatus;
  attempts: number;
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
  errorCategory?: JobErrorCategory;
}

export interface JobStore {
  claimNextPending(): Promise<JobRecord | null>;
  update(id: string, patch: Partial<JobRecord>): Promise<void>;
}

export type JobHandlers = Record<JobKind, (job: JobRecord) => Promise<void>>;

export class JobExecutionError extends Error {
  constructor(readonly category: JobErrorCategory, publicMessage: string) {
    super(publicMessage);
    this.name = 'JobExecutionError';
  }
}

export function buildPendingJob(input: {
  id: string;
  kind: JobKind;
  payload: Record<string, string>;
  requestedAt: string;
}): JobRecord {
  if (!JOB_KINDS.includes(input.kind)) {
    throw new Error(`Unknown job kind: ${String(input.kind)}`);
  }
  return {
    id: input.id,
    kind: input.kind,
    payload: input.payload,
    status: 'pending',
    attempts: 0,
    createdAt: input.requestedAt,
  };
}

export interface JobRunner {
  /** Process every currently-pending job once; returns count processed. */
  drainOnce(): Promise<number>;
  /** Fire-and-forget drain, for use after a 202 response. */
  kick(): void;
}

export function createJobRunner(store: JobStore, handlers: JobHandlers): JobRunner {
  let draining = false;
  let kickedWhileDraining = false;

  async function drainOnce(): Promise<number> {
    let processed = 0;
    // Bounded loop: claim → run → finalize until no pending jobs remain.
    for (;;) {
      const job = await store.claimNextPending();
      if (!job) break;
      const attempts = job.attempts + 1;
      try {
        await handlers[job.kind](job);
        await store.update(job.id, {
          status: 'succeeded',
          attempts,
          completedAt: new Date().toISOString(),
          errorCategory: undefined,
        });
      } catch (error) {
        // Bounded category only — raw messages must never persist to the record.
        const category = error instanceof JobExecutionError ? error.category : 'unknown';
        console.error(`job_failed jobId=${job.id} kind=${job.kind} category=${category}`);
        await store.update(job.id, {
          status: 'failed',
          attempts,
          completedAt: new Date().toISOString(),
          errorCategory: category,
        });
      }
      processed += 1;
    }
    return processed;
  }

  function kick(): void {
    if (draining) {
      kickedWhileDraining = true;
      return;
    }
    draining = true;
    void drainOnce()
      .catch((error) => console.error('job_drain_error', error instanceof Error ? error.message : String(error)))
      .finally(() => {
        draining = false;
        if (kickedWhileDraining) {
          kickedWhileDraining = false;
          kick();
        }
      });
  }

  return { drainOnce, kick };
}
