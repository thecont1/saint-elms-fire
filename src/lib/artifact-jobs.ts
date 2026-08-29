/**
 * Artifact job handlers + shared runner (Phase 6, Tracks A2/A3 over C1).
 *
 * `POST /api/artifacts/generate` returns 202 with a pending artifact; these
 * handlers run in-process afterwards, producing the binary in Cloud Storage
 * and flipping the artifact record to ready/failed with bounded categories.
 */
import { DataService } from './data-service';
import { gcsArtifactStorage } from './artifact-storage';
import { createJobRunner, JobExecutionError, type JobRecord, type JobRunner } from './job-queue';
import { sweepStaleWork, type SweepResult, type WatchdogStore } from './job-watchdog';
import { renderNotesPdf } from './pdf-notes';
import { synthesizePodcast } from '../ai/tts';
import { multiFormatGenerationFlow } from '../ai/flows/multi-format';
import { runRecommendReadingStage } from '../ai/flows/recommend-readings';
import type { ArtifactErrorCategory } from './artifacts';

/**
 * Injectable pipeline dependencies so end-to-end tests can run the full
 * generate → synthesize/render → store → ready flow without cloud services.
 */
export interface ArtifactPipelineDeps {
  getArtifact: typeof DataService.getArtifact;
  markArtifactReady: typeof DataService.markArtifactReady;
  markArtifactFailed: typeof DataService.markArtifactFailed;
  generate(job: JobRecord, formatType: 'structured_notes' | 'podcast_dialogue'): Promise<{ content: string; sources?: import('./artifacts').ArtifactSource[] }>;
  synthesizePodcast(script: string): Promise<Buffer>;
  renderPdf(job: JobRecord, markdown: string): Promise<Buffer>;
  save(storagePath: string, data: Buffer, contentType: string): Promise<{ sizeBytes: number }>;
}

async function failBoth(deps: ArtifactPipelineDeps, job: JobRecord, category: ArtifactErrorCategory, cause: unknown): Promise<never> {
  await deps.markArtifactFailed(job.payload.artifactId, category).catch(() => {});
  console.error(
    `artifact_job_failed artifactId=${job.payload.artifactId} kind=${job.kind} category=${category} reason=${cause instanceof Error ? cause.name : 'unknown'}`,
  );
  throw new JobExecutionError(category as JobExecutionError['category'], `Artifact generation failed: ${category}`);
}

export async function handleNotesPdfJob(job: JobRecord, deps: ArtifactPipelineDeps = defaultDeps()): Promise<void> {
  const artifact = await deps.getArtifact(job.payload.artifactId);
  if (!artifact) throw new JobExecutionError('unknown', 'Artifact record missing');

  let markdown: string;
  let sources: import('./artifacts').ArtifactSource[] | undefined;
  try {
    const result = await deps.generate(job, 'structured_notes');
    markdown = result.content;
    sources = result.sources;
  } catch (error) {
    await failBoth(deps, job, 'generation_failed', error);
    return;
  }

  let pdf: Buffer;
  try {
    pdf = await deps.renderPdf(job, markdown);
  } catch (error) {
    await failBoth(deps, job, 'pdf_render_failed', error);
    return;
  }

  try {
    const { sizeBytes } = await deps.save(artifact.storagePath, pdf, artifact.mimeType);
    await deps.markArtifactReady(artifact.id, sizeBytes, sources);
  } catch (error) {
    await failBoth(deps, job, 'storage_write_failed', error);
  }
}

export async function handlePodcastAudioJob(job: JobRecord, deps: ArtifactPipelineDeps = defaultDeps()): Promise<void> {
  const artifact = await deps.getArtifact(job.payload.artifactId);
  if (!artifact) throw new JobExecutionError('unknown', 'Artifact record missing');

  let script: string;
  let sources: import('./artifacts').ArtifactSource[] | undefined;
  try {
    const result = await deps.generate(job, 'podcast_dialogue');
    script = result.content;
    sources = result.sources;
  } catch (error) {
    await failBoth(deps, job, 'generation_failed', error);
    return;
  }

  let audio: Buffer;
  try {
    audio = await deps.synthesizePodcast(script);
  } catch (error) {
    await failBoth(deps, job, 'tts_unavailable', error);
    return;
  }

  try {
    const { sizeBytes } = await deps.save(artifact.storagePath, audio, artifact.mimeType);
    await deps.markArtifactReady(artifact.id, sizeBytes, sources);
  } catch (error) {
    await failBoth(deps, job, 'storage_write_failed', error);
  }
}

export async function handleReadingRecommendationJob(job: JobRecord): Promise<void> {
  const release = await DataService.getRelease(job.payload.releaseId);
  if (!release) throw new JobExecutionError('unknown', 'Release record missing for recommendation job');

  const payloadTarget = job.payload.targetLessonIds?.split(',').filter(Boolean) ?? [];
  const targetLessonIds = payloadTarget.length
    ? payloadTarget
    : (release.targetLessonIds ?? (release.lessonId ? [release.lessonId] : []));

  const graph = await DataService.getStudentKnowledgeGraph(release.studentId);
  const nodes = graph.nodes
    .filter((node) => targetLessonIds.includes(node.lessonId))
    .map((node) => ({ id: node.id, lessonId: node.lessonId, concept: node.concept, summary: node.summary }));

  const result = await runRecommendReadingStage({
    studentId: release.studentId,
    courseId: release.courseId,
    moduleId: release.moduleId,
    nodes,
  });

  if (result.failed) {
    throw new JobExecutionError('unknown', 'Reading recommendation stage failed');
  }
}

function defaultDeps(): ArtifactPipelineDeps {
  return {
    getArtifact: (id) => DataService.getArtifact(id),
    markArtifactReady: (id, size) => DataService.markArtifactReady(id, size),
    markArtifactFailed: (id, category) => DataService.markArtifactFailed(id, category),
    async generate(job, formatType) {
      const result = await multiFormatGenerationFlow({
        lessonId: job.payload.lessonId,
        studentId: job.payload.studentId,
        formatType,
        persona: job.payload.persona || undefined,
        corpusScope: (job.payload.corpusScope as 'lesson' | 'second_brain') || 'second_brain',
      });
      if (!result.content) throw new Error('empty generation');
      return {
        content: result.content,
        sources: (result.metadata?.sources as import('./artifacts').ArtifactSource[] | undefined) || undefined,
      };
    },
    synthesizePodcast: (script) => synthesizePodcast(script),
    async renderPdf(job, markdown) {
      const [lesson, graph] = await Promise.all([
        DataService.getLesson(job.payload.lessonId),
        DataService.getStudentKnowledgeGraph(job.payload.studentId),
      ]);
      const course = lesson ? await DataService.getCourse(lesson.courseId) : null;
      const modules = lesson ? await DataService.getModules(lesson.courseId) : [];
      const module = modules.find((candidate) => candidate.id === lesson?.moduleId);
      return renderNotesPdf({
        markdown,
        courseTitle: course?.title ?? 'Saint Elms Fire',
        moduleTitle: module?.title ?? '',
        lessonTitle: lesson?.title ?? job.payload.lessonId,
        releasedAt: new Date().toISOString(),
        concepts: graph.nodes
          .filter((node) => node.lessonId === job.payload.lessonId)
          .sort((a, b) => b.importance - a.importance)
          .map((node) => node.concept),
      });
    },
    save: (storagePath, data, contentType) => gcsArtifactStorage.save(storagePath, data, contentType),
  };
}

let runner: JobRunner | null = null;

/** Singleton in-process job runner used by the artifact APIs. */
export function getArtifactJobRunner(): JobRunner {
  if (!runner) {
    runner = createJobRunner(DataService.jobStore, {
      notes_pdf: handleNotesPdfJob,
      podcast_audio: handlePodcastAudioJob,
      reading_recommendation: handleReadingRecommendationJob,
    });
  }
  return runner;
}

// JOB WATCHDOG wiring (Phase 7, Track A2)
const SWEEP_THROTTLE_MS = 30_000;
let lastSweepAt = 0;

export function createFirestoreWatchdogStore(): WatchdogStore {
  return {
    listRunningJobs: () => DataService.listRunningJobs(),
    listPendingArtifactsOlderThan: (cutoff) => DataService.listPendingArtifactsOlderThan(cutoff),
    getJob: (id) => DataService.getJob(id),
    resetJobToPending: (job) => DataService.resetJobToPending(job),
    failJob: (job) => DataService.failJobAsLost(job),
    failArtifact: (id, expectedStatus) => DataService.markArtifactFailed(id, 'job_lost', expectedStatus).then(() => {}),
  };
}

/** Throttled so poll-driven sweeps stay cheap (one pair of queries per 30s). */
export async function runArtifactWatchdogSweep(force = false): Promise<SweepResult | null> {
  const now = Date.now();
  if (!force && now - lastSweepAt < SWEEP_THROTTLE_MS) return null;
  lastSweepAt = now;
  return sweepStaleWork(createFirestoreWatchdogStore());
}

export function kickArtifactJobs(): void {
  void runArtifactWatchdogSweep().catch((error) => {
    console.error(`watchdog_sweep_error ${error instanceof Error ? error.message : String(error)}`);
  });
  getArtifactJobRunner().kick();
}
