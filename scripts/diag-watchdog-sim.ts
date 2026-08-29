/** C2/kill-path scratch — synthesize a stranded job + orphaned artifact, verify the watchdog, clean up. Delete after use. */
import { db } from '../src/lib/firestore';

const BASE = 'http://localhost:3000';
const jobId = `diag-stranded-job-${Date.now()}`;
const artifactId = `diag-orphaned-artifact-${Date.now()}`;
const oldIso = new Date(Date.now() - 10 * 60_000).toISOString();

/**
 * Runs the job watchdog sweep and reports its results.
 *
 * @returns Counts of reclaimed jobs, dead-lettered jobs, and orphaned artifacts.
 */
async function sweep() {
  const res = await fetch(`${BASE}/api/jobs/sweep`, { method: 'POST' });
  return (await res.json()) as { swept: { reclaimed: number; deadLettered: number; orphanedArtifacts: number } };
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

if (
  process.env.NODE_ENV !== 'development' ||
  !process.env.FIRESTORE_EMULATOR_HOST ||
  process.env.CONFIRM_DIAGNOSTIC !== 'yes'
) {
  console.error('Guard failed: must run in development against emulators with CONFIRM_DIAGNOSTIC=yes');
  process.exit(1);
}

try {
  // Seed: stranded running job (attempts 1) + orphaned pending artifact.
  await db.collection('jobs').doc(jobId).set({
    id: jobId,
    kind: 'notes_pdf',
    payload: { artifactId, studentId: 'student-alex', lessonId: 'XUERyrHYJ4DLtowzsE7Q' },
    status: 'running',
    attempts: 1,
    createdAt: oldIso,
    startedAt: oldIso,
  });
  await db.collection('generated_artifacts').doc(artifactId).set({
    id: artifactId,
    studentId: 'student-alex',
    lessonId: 'XUERyrHYJ4DLtowzsE7Q',
    formatType: 'notes_pdf',
    status: 'pending',
    storagePath: 'artifacts/student-alex/XUERyrHYJ4DLtowzsE7Q/diag.pdf',
    mimeType: 'application/pdf',
    jobId,
    createdAt: oldIso,
  });

  const first = await sweep();
  console.log('sweep 1 (expect reclaimed>=1):', JSON.stringify(first.swept));
  const jobAfter1 = (await db.collection('jobs').doc(jobId).get()).data();
  console.log('job after sweep 1:', jobAfter1?.status, 'attempts', jobAfter1?.attempts);

  await sleep(2000);

  // Force the exhausted state: stale running at the attempt cap.
  await db.collection('jobs').doc(jobId).update({ status: 'running', startedAt: oldIso, attempts: 2 });
  await db.collection('generated_artifacts').doc(artifactId).update({ status: 'pending' });

  const second = await sweep();
  console.log('sweep 2 (expect deadLettered>=1):', JSON.stringify(second.swept));
  const jobAfter2 = (await db.collection('jobs').doc(jobId).get()).data();
  const artifactAfter2 = (await db.collection('generated_artifacts').doc(artifactId).get()).data();
  console.log('job after sweep 2:', jobAfter2?.status, jobAfter2?.errorCategory);
  console.log('artifact after sweep 2:', artifactAfter2?.status, artifactAfter2?.error);
} finally {
  // Cleanup synthetic docs.
  await db.collection('jobs').doc(jobId).delete();
  await db.collection('generated_artifacts').doc(artifactId).delete();
  console.log('cleaned up');
}
process.exit(0);
