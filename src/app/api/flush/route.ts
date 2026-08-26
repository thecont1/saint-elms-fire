import { NextResponse } from 'next/server';
import { db } from '@/lib/firestore';

const COLLECTIONS = [
  'programmes',
  'subjects',
  'semesters',
  'courses',
  'modules',
  'lessons',
  'releases',
  'ingestion_artifacts',
  'ingestion_embeddings',
  'knowledge_nodes',
  'knowledge_edges',
  'courseware_chunks',
  'generated_formats',
  'quiz_submissions',
  'socratic_sessions',
  'incidents',
];

export async function POST() {
  try {
    const results: Record<string, number> = {};

    for (const name of COLLECTIONS) {
      const snap = await db.collection(name).get();
      let deleted = 0;
      let batch = db.batch();
      for (const doc of snap.docs) {
        batch.delete(doc.ref);
        deleted += 1;
        if (deleted % 450 === 0) {
          await batch.commit();
          batch = db.batch();
        }
      }
      if (deleted % 450 !== 0) {
        await batch.commit();
      }
      results[name] = deleted;
    }

    return NextResponse.json({ message: 'All data flushed.', results });
  } catch (error: any) {
    console.error('Flush error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
