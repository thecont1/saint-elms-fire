// Firestore verification for the Phase 4 live runbook.
// Loads .env the same way the Next app does, then checks:
//   1. chunk counts per release/lesson (duplicate detection)
//   2. failed-release invisibility (no chunks with its releaseId)
import { readFileSync } from 'node:fs';
import { Firestore } from '@google-cloud/firestore';

const env = Object.fromEntries(
  readFileSync('.env', 'utf8').split('\n').filter(l => l.includes('=') && !l.startsWith('#')).map(l => {
    const i = l.indexOf('=');
    return [l.slice(0, i), l.slice(i + 1)];
  })
);
// Apply parsed .env values BEFORE constructing Firestore so credentials
// (GOOGLE_APPLICATION_CREDENTIALS, etc.) are visible to the client's auth
// resolution, matching how the Next app loads them.
for (const [key, value] of Object.entries(env)) {
  if (process.env[key] === undefined) process.env[key] = value;
}

const db = new Firestore({ projectId: env.GOOGLE_CLOUD_PROJECT });

const FAILED_REL = 'eZnvRTVUvUcyvXqMoFAr';
const OK_REL = 'Eg1olgZtDo5WfMrS1qGa';

const allChunks = await db.collection('courseware_chunks').get();
const byRelease = {};
for (const d of allChunks.docs) {
  const r = d.data().releaseId || '(none)';
  byRelease[r] = byRelease[r] || [];
  byRelease[r].push(d.id);
}
console.log('=== courseware_chunks inventory ===');
for (const [rel, ids] of Object.entries(byRelease)) {
  console.log(`${rel}: ${ids.length} chunks`);
  console.log('  ids:', ids.sort().join(', ').slice(0, 220));
}

console.log('\n=== assertions ===');
const okChunks = byRelease[OK_REL] || [];
const failChunks = byRelease[FAILED_REL] || [];
console.log(`happy release ${OK_REL}: ${okChunks.length} chunks (expected 2)`);
console.log(`failed release ${FAILED_REL}: ${failChunks.length} chunks (expected 0 — embedding never completed)`);

const graphNodes = await db.collection('knowledge_nodes').where('releaseId', '==', FAILED_REL).get();
console.log(`graph nodes tagged with failed releaseId: ${graphNodes.size} (expected 0)`);
const graphNodesOk = await db.collection('knowledge_nodes').where('releaseId', '==', OK_REL).get();
console.log(`graph nodes tagged with happy releaseId: ${graphNodesOk.size}`);

process.exit(0);
