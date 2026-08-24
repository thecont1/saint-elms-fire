/**
 * Verifies both live integrations end to end.
 *   bun run scripts/smoke-test.ts
 */
import { ai, GEMINI_FLASH } from '../src/ai/genkit';
import { db, FieldValue } from '../src/lib/firestore';

async function main() {
  console.log(`project    : ${process.env.GOOGLE_CLOUD_PROJECT}`);
  console.log(`model      : ${GEMINI_FLASH}\n`);

  // 1. Gemini
  const { text } = await ai.generate('Reply with exactly: GEMINI OK');
  console.log(`gemini     : ${text.trim()}`);

  // 2. Firestore write + read + cleanup
  const ref = db.collection('_smoke').doc('probe');
  await ref.set({ at: FieldValue.serverTimestamp(), ok: true });
  const snap = await ref.get();
  console.log(`firestore  : write+read ok (${JSON.stringify(snap.data())})`);
  await ref.delete();
  console.log('firestore  : cleanup ok');
}

main().catch((err) => {
  console.error('\nSMOKE TEST FAILED\n', err);
  process.exit(1);
});
