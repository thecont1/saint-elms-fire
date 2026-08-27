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
import { renderNotesPdf } from './pdf-notes';
import { synthesizePodcast } from '../ai/tts';
import { multiFormatGenerationFlow } from '../ai/flows/multi-format';
import type { ArtifactErrorCategory } from './artifacts';

async function failBoth(job: JobRecord, category: ArtifactErrorCategory, cause: unknown): Promise<never> {
  await DataService.markArtifactFailed(job.payload.artifactId, category).catch(() => {});
  console.error('artifact_job_failed', {
    artifactId: job.payload.artifactId,
    kind: job.kind,
    category,
    reason: cause instanceof Error ? cause.name : 'unknown',
  });
  throw new JobExecutionError(category as JobExecutionError['category'], `Artifact generation failed: ${category}`);
}

async function generateSourceContent(job: JobRecord, formatType: 'structured_notes' | 'podcast_dialogue'): Promise<string> {
  const result = await multiFormatGenerationFlow({
    lessonId: job.payload.lessonId,
    studentId: job.payload.studentId,
    formatType,
    persona: job.payload.persona || undefined,
    corpusScope: (job.payload.corpusScope as 'lesson' | 'second_brain') || 'second_brain',
  });
  if (!result.content) throw new Error('empty generation');
  return result.content;
}

export async function handleNotesPdfJob(job: JobRecord): Promise<void> {
  const artifact = await DataService.getArtifact(job.payload.artifactId);
  if (!artifact) throw new JobExecutionError('unknown', 'Artifact record missing');

  let markdown: string;
  try {
    markdown = await generateSourceContent(job, 'structured_notes');
  } catch (error) {
    await failBoth(job, 'generation_failed', error);
    return;
  }

  let pdf: Buffer;
  try {
    const [lesson, graph] = await Promise.all([
      DataService.getLesson(job.payload.lessonId),
      DataService.getStudentKnowledgeGraph(job.payload.studentId),
    ]);
    const course = lesson ? await DataService.getCourse(lesson.courseId) : null;
    const modules = lesson ? await DataService.getModules(lesson.courseId) : [];
    const module = modules.find((candidate) => candidate.id === lesson?.moduleId);
    pdf = await renderNotesPdf({
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
  } catch (error) {
    await failBoth(job, 'pdf_render_failed', error);
    return;
  }

  try {
    const { sizeBytes } = await gcsArtifactStorage.save(artifact.storagePath, pdf, artifact.mimeType);
    await DataService.markArtifactReady(artifact.id, sizeBytes);
  } catch (error) {
    await failBoth(job, 'storage_write_failed', error);
  }
}

export async function handlePodcastAudioJob(job: JobRecord): Promise<void> {
  const artifact = await DataService.getArtifact(job.payload.artifactId);
  if (!artifact) throw new JobExecutionError('unknown', 'Artifact record missing');

  let script: string;
  try {
    script = await generateSourceContent(job, 'podcast_dialogue');
  } catch (error) {
    await failBoth(job, 'generation_failed', error);
    return;
  }

  let audio: Buffer;
  try {
    audio = await synthesizePodcast(script);
  } catch (error) {
    await failBoth(job, 'tts_unavailable', error);
    return;
  }

  try {
    const { sizeBytes } = await gcsArtifactStorage.save(artifact.storagePath, audio, artifact.mimeType);
    await DataService.markArtifactReady(artifact.id, sizeBytes);
  } catch (error) {
    await failBoth(job, 'storage_write_failed', error);
  }
}

let runner: JobRunner | null = null;

/** Singleton in-process job runner used by the artifact APIs. */
export function getArtifactJobRunner(): JobRunner {
  if (!runner) {
    runner = createJobRunner(DataService.jobStore, {
      notes_pdf: handleNotesPdfJob,
      podcast_audio: handlePodcastAudioJob,
      reading_recommendation: async () => {
        // Placeholder retry hook; the recommend stage runs post-release inline.
      },
    });
  }
  return runner;
}
