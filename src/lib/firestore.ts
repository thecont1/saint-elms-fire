import { Firestore, FieldValue, Timestamp } from '@google-cloud/firestore';

/**
 * Firestore client for Saint Elms Fire.
 *
 * Auth resolution order (handled by the library):
 *   1. GOOGLE_APPLICATION_CREDENTIALS  -> service account JSON key file
 *   2. Application Default Credentials -> `gcloud auth application-default login`
 *   3. Attached service account         -> Cloud Run / GCE / Cloud Functions
 *
 * Locally you're on ADC as your own Google account. In production, attach
 * saint-elms-fire-app@saint-elms-fire.iam.gserviceaccount.com (Cloud Datastore User).
 */

const projectId =
  process.env.GOOGLE_CLOUD_PROJECT ??
  process.env.FIRESTORE_PROJECT_ID ??
  'saint-elms-fire';

export const db = new Firestore({
  projectId,
  // Firestore treats the literal string "(default)" as the unnamed database.
  databaseId: process.env.FIRESTORE_DATABASE_ID || '(default)',
  ignoreUndefinedProperties: true,
});

export { FieldValue, Timestamp };

/** Typed collection helper, so call sites don't repeat generics. */
export const collection = <T extends Record<string, unknown>>(name: string) =>
  db.collection(name) as unknown as import('@google-cloud/firestore').CollectionReference<T>;
