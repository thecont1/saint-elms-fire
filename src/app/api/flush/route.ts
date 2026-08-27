import { NextResponse } from 'next/server';
import { db } from '@/lib/firestore';
import { resolveRequestIdentity, requireAdmin, authorizationResponse } from '@/lib/request-identity';

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

export async function POST(req: Request) {
  try {
    const identity = resolveRequestIdentity(req);
    requireAdmin(identity);

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
  } catch (error: unknown) {
    const authResponse = authorizationResponse(error);
    if (authResponse) return authResponse;
    console.error('Flush error:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Flush failed' }, { status: 500 });
  }
}
