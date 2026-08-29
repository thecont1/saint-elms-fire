/** A0 diagnostic scratch script — direct Gemini probe to surface the real upstream error. Delete after use. */
const model = 'gemini-3.7-flash';
const key = process.env.GEMINI_API_KEY;
if (!key) {
  console.error('GEMINI_API_KEY not set');
  process.exit(1);
}
console.log(`probe: model=${model} keyLength=${key.length}`);

const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), 30_000);
try {
  const started = Date.now();
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({ contents: [{ parts: [{ text: 'Reply with the single word: pong' }] }] }),
      signal: controller.signal,
    }
  );
  const elapsed = Date.now() - started;
  const body = await res.text();
  console.log(`generateContent -> HTTP ${res.status} in ${elapsed}ms`);
  console.log(body.slice(0, 600));
  if (!res.ok) {
    process.exit(1);
  }
} catch (error) {
  console.error('generateContent FAILED:', error instanceof Error ? error.message : String(error));
  process.exit(1);
} finally {
  clearTimeout(timer);
}
process.exit(0);
