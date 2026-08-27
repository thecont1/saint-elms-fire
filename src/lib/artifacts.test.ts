// @ts-nocheck -- Bun exposes bun:test at runtime; this project intentionally does not ship @types/bun.
import { describe, expect, test } from 'bun:test';
import {
  buildPendingArtifact,
  artifactStoragePath,
  authorizeArtifactAccess,
  completeArtifact,
  failArtifact,
  ArtifactAccessError,
  ARTIFACT_ERROR_CATEGORIES,
} from './artifacts';

const base = {
  id: 'art-1',
  studentId: 'student-alex',
  lessonId: 'lesson-1',
  formatType: 'podcast_audio' as const,
  requestedAt: '2026-08-27T00:00:00.000Z',
};

describe('buildPendingArtifact', () => {
  test('creates a pending artifact with deterministic storage path', () => {
    const artifact = buildPendingArtifact(base);
    expect(artifact.status).toBe('pending');
    expect(artifact.storagePath).toBe('artifacts/student-alex/lesson-1/art-1.wav');
    expect(artifact.mimeType).toBe('audio/wav');
    expect(artifact.createdAt).toBe(base.requestedAt);
  });

  test('pdf artifacts use pdf extension and mime type', () => {
    const artifact = buildPendingArtifact({ ...base, formatType: 'notes_pdf' });
    expect(artifact.storagePath).toBe('artifacts/student-alex/lesson-1/art-1.pdf');
    expect(artifact.mimeType).toBe('application/pdf');
  });

  test('rejects unknown format types', () => {
    expect(() => buildPendingArtifact({ ...base, formatType: 'exe' as never })).toThrow();
  });
});

describe('artifactStoragePath', () => {
  test('sanitizes path segments so ids cannot traverse directories', () => {
    expect(() => artifactStoragePath('../../etc', 'lesson', 'id', 'mp3')).toThrow();
    expect(() => artifactStoragePath('student', 'les/son', 'id', 'mp3')).toThrow();
  });
});

describe('authorizeArtifactAccess', () => {
  const artifact = { ...buildPendingArtifact(base), status: 'ready' as const };

  test('owner with released lesson may access', () => {
    expect(() =>
      authorizeArtifactAccess({
        artifact,
        requesterStudentId: 'student-alex',
        lessonReleased: true,
      }),
    ).not.toThrow();
  });

  test('cross-student access is rejected with 403', () => {
    try {
      authorizeArtifactAccess({
        artifact,
        requesterStudentId: 'student-bhavya',
        lessonReleased: true,
      });
      throw new Error('should have thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(ArtifactAccessError);
      expect(error.status).toBe(403);
    }
  });

  test('unreleased lesson is rejected with 403 even for the owner', () => {
    try {
      authorizeArtifactAccess({
        artifact,
        requesterStudentId: 'student-alex',
        lessonReleased: false,
      });
      throw new Error('should have thrown');
    } catch (error) {
      expect(error).toBeInstanceOf(ArtifactAccessError);
      expect(error.status).toBe(403);
    }
  });
});

describe('artifact lifecycle', () => {
  test('completeArtifact marks ready with size', () => {
    const done = completeArtifact(buildPendingArtifact(base), 12345, '2026-08-27T00:05:00.000Z');
    expect(done.status).toBe('ready');
    expect(done.sizeBytes).toBe(12345);
    expect(done.completedAt).toBe('2026-08-27T00:05:00.000Z');
    expect(done.error).toBeUndefined();
  });

  test('failArtifact records a bounded error category, never raw messages', () => {
    const failed = failArtifact(buildPendingArtifact(base), 'tts_unavailable');
    expect(failed.status).toBe('failed');
    expect(failed.error).toBe('tts_unavailable');
    expect(ARTIFACT_ERROR_CATEGORIES).toContain('tts_unavailable');
  });

  test('failArtifact rejects unbounded categories', () => {
    expect(() => failArtifact(buildPendingArtifact(base), 'raw upstream stacktrace' as never)).toThrow();
  });
});
