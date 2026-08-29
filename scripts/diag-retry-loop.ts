/** A1 verification scratch — drive the notes_pdf artifact to ready (or exhaust attempts). Delete after use. */
const BASE = 'http://localhost:3000';
const artifactId = process.argv[2] ?? 'e0f1f2566c840c15fe0a07966d9bc6ece527fb4dd5d8302ce8db7b23f1d14ea2';
const POLL_WINDOW_MS = Number(process.argv[3] ?? 110_000);
const studentId = 'student-alex';
const MAX_ATTEMPTS = Number(process.argv[4] ?? 5);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Retrieves the artifact record for the configured student.
 *
 * @returns The artifact record, or `null` if the request fails or no artifact is present.
 */
async function getArtifact() {
  const res = await fetch(`${BASE}/api/artifacts/${artifactId}?studentId=${studentId}`);
  if (!res.ok) return null;
  const doc = (await res.json()) as { artifact?: { status: string; error?: string; sizeBytes?: number } };
  return doc.artifact ?? null;
}

for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
  let current = await getArtifact();
  if (current?.status === 'failed') {
    const retry = await fetch(`${BASE}/api/artifacts/${artifactId}/retry?studentId=${studentId}`, { method: 'POST' });
    console.log(`attempt ${attempt}: retry -> HTTP ${retry.status}`);
    if (!retry.ok) {
      console.log((await retry.text()).slice(0, 200));
      break;
    }
  } else {
    console.log(`attempt ${attempt}: artifact currently ${current?.status ?? 'missing'} — polling without retry`);
  }

  const deadline = Date.now() + POLL_WINDOW_MS;
  let status = current?.status ?? 'pending';
  while (Date.now() < deadline && (status === 'pending' || status === undefined)) {
    await sleep(5000);
    current = await getArtifact();
    status = current?.status ?? 'pending';
  }
  console.log(`attempt ${attempt}: terminal status=${status} error=${current?.error ?? '-'} sizeBytes=${current?.sizeBytes ?? '-'}`);
  if (status === 'ready') {
    const urlRes = await fetch(`${BASE}/api/artifacts/${artifactId}/url?studentId=${studentId}`);
    const urlDoc = (await urlRes.json()) as { url?: string };
    console.log(`READY: signed url -> HTTP ${urlRes.status}, url length ${urlDoc.url?.length ?? 0}`);
    process.exit(0);
  }
  await sleep(3000);
}
console.log('exhausted attempts without ready');
process.exit(1);
