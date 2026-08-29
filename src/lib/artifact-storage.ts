/**
 * Cloud Storage adapter for generated artifacts (Phase 6, Track A1).
 *
 * All binary artifact bytes live in a private GCS bucket; access is only via
 * short-lived V4 signed URLs minted server-side after `authorizeArtifactAccess`
 * passes. Tests fake this interface — nothing here is imported by pure logic.
 *
 * Required setup (documented in docs/PHASE6.md):
 *   gsutil mb -l us-central1 gs://saint-elms-fire-artifacts
 *   (service account needs roles/storage.objectAdmin + iam.serviceAccountTokenCreator)
 */
import { Storage } from '@google-cloud/storage';
import { withDeadline } from './deadline';

/** Phase 7, Track A1: a hung upload must surface as storage_write_failed,
 *  not strand the job in running. */
export const STORAGE_WRITE_DEADLINE_MS = 30_000;

export interface ArtifactStorage {
  save(storagePath: string, data: Buffer, contentType: string): Promise<{ sizeBytes: number }>;
  getSignedUrl(storagePath: string, expiresInMs?: number): Promise<string>;
  read(storagePath: string): Promise<Buffer>;
  delete(storagePath: string): Promise<void>;
}

export const ARTIFACT_BUCKET =
  process.env.ARTIFACT_BUCKET || 'saint-elms-fire-artifacts';

export const SIGNED_URL_TTL_MS = 15 * 60 * 1000;

let storage: Storage | null = null;
function getStorage(): Storage {
  if (!storage) storage = new Storage();
  return storage;
}

export const gcsArtifactStorage: ArtifactStorage = {
  async save(storagePath, data, contentType) {
    const file = getStorage().bucket(ARTIFACT_BUCKET).file(storagePath);
    await withDeadline(
      file.save(data, { contentType, resumable: false }),
      STORAGE_WRITE_DEADLINE_MS,
      'artifact storage write',
    );
    return { sizeBytes: data.byteLength };
  },

  async getSignedUrl(storagePath, expiresInMs = SIGNED_URL_TTL_MS) {
    const file = getStorage().bucket(ARTIFACT_BUCKET).file(storagePath);
    const [url] = await file.getSignedUrl({
      version: 'v4',
      action: 'read',
      expires: Date.now() + expiresInMs,
    });
    return url;
  },

  async read(storagePath) {
    const file = getStorage().bucket(ARTIFACT_BUCKET).file(storagePath);
    const [content] = await withDeadline(file.download(), STORAGE_WRITE_DEADLINE_MS, 'artifact storage read');
    return content;
  },

  async delete(storagePath) {
    await getStorage()
      .bucket(ARTIFACT_BUCKET)
      .file(storagePath)
      .delete({ ignoreNotFound: true });
  },
};
