import { db } from '../src/lib/firestore';

async function main() {
  const snap = await db.collection('courseware_chunks').where('lessonId', '==', 'student-life-and-university-navigation-m1-l1').findNearest({
    vectorField: 'embedding',
    queryVector: new Array(768).fill(0.1),
    limit: 10,
    distanceMeasure: 'COSINE',
  }).get();
  console.log(snap.docs.length);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
