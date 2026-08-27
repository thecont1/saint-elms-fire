/**
 * Generated artifact domain logic (Phase 6, Track A1).
 *
 * Pure helpers governing artifact records stored in the `generated_artifacts`
 * Firestore collection with binary payloads in Cloud Storage. Storage/signing
 * side effects live behind the adapter in `artifact-storage.ts` so these
 * policies stay unit-testable without cloud credentials.
 */

export const ARTIFACT_FORMAT_TYPES = ['podcast_audio', 'notes_pdf'] as const;
export type ArtifactFormatType = (typeof ARTIFACT_FORMAT_TYPES)[number];

export const ARTIFACT_ERROR_CATEGORIES = [
  'tts_unavailable',
  'pdf_render_failed',
  'generation_failed',
  'storage_write_failed',
  'quota_exceeded',
  'unknown',
] as const;
export type ArtifactErrorCategory = (typeof ARTIFACT_ERROR_CATEGORIES)[number];

export type ArtifactStatus = 'pending' | 'ready' | 'failed';

export interface ArtifactSource {
  kind: 'lesson' | 'library' | 'peer_share';
  refId: string;
  label?: string;
}

export interface GeneratedArtifact {
  id: string;
  studentId: string;
  lessonId: string;
  formatType: ArtifactFormatType;
  status: ArtifactStatus;
  storagePath: string;
  mimeType: string;
  sizeBytes?: number;
  sources?: ArtifactSource[];
  createdAt: string;
  completedAt?: string;
  error?: ArtifactErrorCategory;
}

const FORMAT_META: Record<ArtifactFormatType, { ext: string; mimeType: string }> = {
  podcast_audio: { ext: 'mp3', mimeType: 'audio/mpeg' },
  notes_pdf: { ext: 'pdf', mimeType: 'application/pdf' },
};

export class ArtifactAccessError extends Error {
  constructor(readonly status: number, message: string) {
    super(message);
    this.name = 'ArtifactAccessError';
  }
}

const SAFE_SEGMENT = /^[A-Za-z0-9_-]+$/;

function assertSafeSegment(value: string, name: string): void {
  if (!SAFE_SEGMENT.test(value)) {
    throw new Error(`${name} contains unsafe path characters`);
  }
}

export function artifactStoragePath(
  studentId: string,
  lessonId: string,
  artifactId: string,
  ext: string,
): string {
  assertSafeSegment(studentId, 'studentId');
  assertSafeSegment(lessonId, 'lessonId');
  assertSafeSegment(artifactId, 'artifactId');
  assertSafeSegment(ext, 'ext');
  return `artifacts/${studentId}/${lessonId}/${artifactId}.${ext}`;
}

export function buildPendingArtifact(input: {
  id: string;
  studentId: string;
  lessonId: string;
  formatType: ArtifactFormatType;
  requestedAt: string;
  sources?: ArtifactSource[];
}): GeneratedArtifact {
  const meta = FORMAT_META[input.formatType];
  if (!meta) throw new Error(`Unknown artifact format type: ${String(input.formatType)}`);
  return {
    id: input.id,
    studentId: input.studentId,
    lessonId: input.lessonId,
    formatType: input.formatType,
    status: 'pending',
    storagePath: artifactStoragePath(input.studentId, input.lessonId, input.id, meta.ext),
    mimeType: meta.mimeType,
    sources: input.sources,
    createdAt: input.requestedAt,
  };
}

/**
 * Authorization for any artifact read/URL-mint operation.
 * Enforces owner-only access and release gating in one predicate so routes
 * cannot accidentally check one without the other.
 */
export function authorizeArtifactAccess(input: {
  artifact: Pick<GeneratedArtifact, 'studentId' | 'lessonId'>;
  requesterStudentId: string;
  lessonReleased: boolean;
}): void {
  if (input.artifact.studentId !== input.requesterStudentId) {
    throw new ArtifactAccessError(403, 'Artifact belongs to another student');
  }
  if (!input.lessonReleased) {
    throw new ArtifactAccessError(403, 'Lesson has not been released to this student');
  }
}

export function completeArtifact(
  artifact: GeneratedArtifact,
  sizeBytes: number,
  completedAt: string,
): GeneratedArtifact {
  return { ...artifact, status: 'ready', sizeBytes, completedAt, error: undefined };
}

export function failArtifact(
  artifact: GeneratedArtifact,
  category: ArtifactErrorCategory,
): GeneratedArtifact {
  if (!ARTIFACT_ERROR_CATEGORIES.includes(category)) {
    throw new Error('Artifact failure category must be one of the bounded categories');
  }
  return { ...artifact, status: 'failed', error: category };
}
