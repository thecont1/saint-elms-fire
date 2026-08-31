// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import { handlePodcastAudioJob, handleNotesPdfJob } from './artifact-jobs';
import { buildPendingArtifact } from './artifacts';
import { buildPendingJob, JobExecutionError } from './job-queue';
import { pcmToWav } from '../ai/tts';

const artifact = buildPendingArtifact({
  id: 'art-1',
  studentId: 'student-alex',
  lessonId: 'lesson-1',
  formatType: 'podcast_audio',
  requestedAt: '2026-08-27T00:00:00.000Z',
});

const job = buildPendingJob({
  id: 'job-1',
  kind: 'podcast_audio',
  payload: { artifactId: 'art-1', studentId: 'student-alex', lessonId: 'lesson-1' },
  requestedAt: '2026-08-27T00:00:00.000Z',
});

function makeDeps(overrides = {}) {
  const state = { ready: null, failed: null, saved: null };
  return {
    state,
    deps: {
      getArtifact: async () => artifact,
      markArtifactReady: async (id, size, sources, servedBy) => { state.ready = { id, size, sources, servedBy }; },
      markArtifactFailed: async (id, category) => { state.failed = { id, category }; },
      generate: async () => ({ content: 'HOST: Welcome.\nGUEST: Glad to be here.' }),
      synthesizePodcast: async () => pcmToWav(Buffer.alloc(200)),
      renderPdf: async () => Buffer.from('%PDF-fake'),
      save: async (path, data) => { state.saved = { path, bytes: data.length }; return { sizeBytes: data.length }; },
      ...overrides,
    },
  };
}

describe('podcast pipeline end-to-end (stubbed adapters)', () => {
  test('generate → TTS → store → ready', async () => {
    const { state, deps } = makeDeps();
    await handlePodcastAudioJob(job, deps);
    expect(state.saved.path).toBe(artifact.storagePath);
    expect(state.ready.id).toBe('art-1');
    expect(state.failed).toBeNull();
  });

  test('TTS failure marks artifact failed with tts_unavailable and script remains the fallback', async () => {
    const { state, deps } = makeDeps({ synthesizePodcast: async () => { throw new Error('quota'); } });
    await expect(handlePodcastAudioJob(job, deps)).rejects.toBeInstanceOf(JobExecutionError);
    expect(state.failed.category).toBe('tts_unavailable');
    expect(state.ready).toBeNull();
  });

  test('generation failure is categorized generation_failed', async () => {
    const { state, deps } = makeDeps({ generate: async () => { throw new Error('model down'); } });
    await expect(handlePodcastAudioJob(job, deps)).rejects.toBeInstanceOf(JobExecutionError);
    expect(state.failed.category).toBe('generation_failed');
  });

  test('storage failure is categorized storage_write_failed', async () => {
    const { state, deps } = makeDeps({ save: async () => { throw new Error('gcs down'); } });
    await expect(handlePodcastAudioJob(job, deps)).rejects.toBeInstanceOf(JobExecutionError);
    expect(state.failed.category).toBe('storage_write_failed');
  });
});

describe('pdf pipeline', () => {
  const pdfJob = { ...job, kind: 'notes_pdf' };

  test('render failure is categorized pdf_render_failed', async () => {
    const { state, deps } = makeDeps({ renderPdf: async () => { throw new Error('layout'); } });
    await expect(handleNotesPdfJob(pdfJob, deps)).rejects.toBeInstanceOf(JobExecutionError);
    expect(state.failed.category).toBe('pdf_render_failed');
  });

  test('happy path stores the PDF and marks ready', async () => {
    const { state, deps } = makeDeps();
    await handleNotesPdfJob(pdfJob, deps);
    expect(state.ready.id).toBe('art-1');
  });

  test('persists the exact generation provenance on a ready artifact', async () => {
    const servedBy = { model: 'sarvam-105b-conversations', role: 'fallback', attemptCount: 3 };
    const { state, deps } = makeDeps({
      generate: async () => ({ content: 'HOST: Welcome.\nGUEST: Glad to be here.', servedBy }),
    });
    await handleNotesPdfJob(pdfJob, deps);
    expect(state.ready.servedBy).toEqual(servedBy);
  });
});
