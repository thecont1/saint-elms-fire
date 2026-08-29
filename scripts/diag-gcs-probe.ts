/** A0 diagnostic scratch script — one-byte GCS round trip with the app's ADC. Delete after use. */
import { Storage } from '@google-cloud/storage';

const bucketName = process.env.ARTIFACT_BUCKET ?? 'saint-elms-fire-artifacts';
const storage = new Storage();
const bucket = storage.bucket(bucketName);
const file = bucket.file('artifacts/__diag_probe__');

/**
 * Resolves with the operation's result or rejects if it exceeds the specified duration.
 *
 * @param p - The operation to monitor
 * @param ms - The maximum duration in milliseconds
 * @param label - The label included in the timeout error message
 * @returns The operation's result
 */
function withTimeout<T>(p: Promise<T>, ms: number, label: string): Promise<T> {
  return Promise.race([
    p,
    new Promise<T>((_, reject) => setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms)),
  ]);
}

console.log(`probe: bucket=${bucketName}`);
try {
  const [exists] = await withTimeout(bucket.exists(), 15_000, 'bucket.exists');
  console.log('bucket.exists ->', exists);
} catch (error) {
  console.error('bucket.exists FAILED:', error instanceof Error ? error.message : String(error));
}
try {
  await withTimeout(file.save('probe', { resumable: false }), 30_000, 'file.save');
  console.log('file.save -> ok');
  const [content] = await withTimeout(file.download(), 15_000, 'file.download');
  console.log('file.download ->', JSON.stringify(content.toString()));
  await withTimeout(file.delete(), 15_000, 'file.delete');
  console.log('file.delete -> ok');
  console.log('GCS PROBE: PASS');
  process.exit(0);
} catch (error) {
  console.error('GCS PROBE FAILED:', error instanceof Error ? error.message : String(error));
  process.exit(1);
}
