/** A0 diagnostic scratch script — dump latest jobs + generated_artifacts docs. Delete after use. */
import { db } from '../src/lib/firestore';

const jobs = await db.collection('jobs').orderBy('createdAt', 'desc').limit(5).get();
console.log('== jobs (latest 5) ==');
for (const doc of jobs.docs) {
  const d = doc.data() as Record<string, unknown>;
  console.log(JSON.stringify({ id: doc.id, ...d }));
}

const artifacts = await db.collection('generated_artifacts').orderBy('createdAt', 'desc').limit(5).get();
console.log('== generated_artifacts (latest 5) ==');
for (const doc of artifacts.docs) {
  const d = doc.data() as Record<string, unknown>;
  console.log(JSON.stringify({ id: doc.id, ...d }));
}
process.exit(0);
