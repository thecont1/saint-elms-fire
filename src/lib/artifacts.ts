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
  /** Generation options preserved so retries can replay the original request. */
  persona?: string;
  corpusScope?: 'lesson' | 'second_brain';
  createdAt: string;
  completedAt?: string;
  error?: ArtifactErrorCategory;
}

const FORMAT_META: Record<ArtifactFormatType, { ext: string; mimeType: string }> = {
  podcast_audio: { ext: 'wav', mimeType: 'audio/wav' },
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
  persona?: string;
  corpusScope?: 'lesson' | 'second_brain';
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
    persona: input.persona,
    corpusScope: input.corpusScope,
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
  sources?: ArtifactSource[],
): GeneratedArtifact {
  return { ...artifact, status: 'ready', sizeBytes, completedAt, sources: sources ?? artifact.sources, error: undefined };
}

/**
 * Retry policy (Phase 6, Track C3): only failed artifacts may be retried;
 * retry resets the record to pending and clears the bounded error so the
 * job runner regenerates into the same storage path.
 */
export function retryArtifact(artifact: GeneratedArtifact, retriedAt: string): GeneratedArtifact {
  if (artifact.status !== 'failed') {
    throw new Error('Only failed artifacts can be retried');
  }
  return { ...artifact, status: 'pending', error: undefined, completedAt: undefined, sizeBytes: undefined, createdAt: retriedAt };
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
