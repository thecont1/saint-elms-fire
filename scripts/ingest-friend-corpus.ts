import * as fs from 'fs';
import * as path from 'path';
import { ai, COURSEWARE_EMBEDDER } from '../src/ai/genkit';
import { db } from '../src/lib/firestore';
import { FieldValue } from '@google-cloud/firestore';

async function main() {
  const baseDir = path.join(process.cwd(), 'content', 'university-support', 'student-life-and-university-navigation');
  const files = fs.readdirSync(baseDir).filter(f => f.endsWith('.md'));
  
  let batch = db.batch();
  let totalOpCount = 0;
  let opCount = 0;
  
  for (const file of files) {
    const content = fs.readFileSync(path.join(baseDir, file), 'utf8');
    const titleMatch = content.match(/lessonName:\s*(.+)/);
    const lessonIdMatch = content.match(/lessonId:\s*(.+)/);
    const subjectIdMatch = content.match(/subjectId:\s*(.+)/);
    if (!titleMatch || !lessonIdMatch) continue;
    const title = titleMatch[1].trim();
    const lessonId = lessonIdMatch[1].trim();
    const subjectId = subjectIdMatch ? subjectIdMatch[1].trim() : 'university-support';
    
    // Simple chunking (split by headers)
    const chunks = content.split(/(?=\n## )/);
    
    for (let i = 0; i < chunks.length; i++) {
      const chunkText = chunks[i].trim();
      if (!chunkText) continue;
      
      const response = await ai.embed({
        embedder: COURSEWARE_EMBEDDER,
        content: chunkText,
        options: { taskType: 'RETRIEVAL_DOCUMENT', title },
      });
      const embedding = response[0]?.embedding;
      if (!embedding) continue;
      
      // We ingest into courseware_chunks instead, to reuse its vector index.
      // But we give it a unique releaseId or identify it by subjectId.
      const ref = db.collection('courseware_chunks').doc(`${lessonId}-chunk-${i}`);
      batch.set(ref, {
        lessonId,
        subjectId, // tag it!
        lessonTitle: title,
        chunkIndex: i,
        content: chunkText,
        embedding: FieldValue.vector(embedding),
        createdAt: new Date().toISOString()
      });
      
      opCount++;
      totalOpCount++;
      if (opCount === 450) {
        await batch.commit();
        batch = db.batch();
        opCount = 0;
      }
    }
  }
  
  if (opCount > 0) {
    await batch.commit();
  }
  console.log('Ingestion complete. Total chunks:', totalOpCount);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
