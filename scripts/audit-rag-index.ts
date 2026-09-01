#!/usr/bin/env bun
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { db } from '../src/lib/firestore';
import { DataService } from '../src/lib/data-service';

interface AuditRow {
  lessonId: string;
  lessonTitle: string;
  embeddingCount: number;
}

const PERSONAS: Record<string, string> = {
  ananya: 'student-ananya',
  brinda: 'student-brinda',
  chetna: 'student-chetna',
};

function arg(name: string): string | undefined {
  const prefix = `--${name}=`;
  return process.argv.slice(2).find((value) => value.startsWith(prefix))?.slice(prefix.length);
}

const studentArg = arg('student') ?? 'chetna';
const studentId = PERSONAS[studentArg] ?? studentArg;
const outputPath = resolve(arg('output') ?? `artifacts/rag-index-audit-${studentArg}.json`);

const lessons = await DataService.getReleasedLessonsForStudent(studentId);
const releasedIds = new Set(lessons.map((lesson) => lesson.id));
const counts = new Map<string, number>();

// A collection scan is intentional: this is a one-time operational audit and
// avoids one Firestore read query per lesson at Chetna scale. Select the
// embedding value (not just document presence) so a chunk only counts as
// indexed coverage when it carries a non-empty vector.
const chunks = await db.collection('courseware_chunks').select('lessonId', 'embedding').get();
for (const doc of chunks.docs) {
  const data = doc.data();
  const lessonId = String(data.lessonId || '');
  const embedding = (data.embedding as { toArray?: () => unknown[] } | undefined)?.toArray?.();
  if (releasedIds.has(lessonId) && Array.isArray(embedding) && embedding.length > 0) {
    counts.set(lessonId, (counts.get(lessonId) ?? 0) + 1);
  }
}

const rows: AuditRow[] = lessons
  .map((lesson) => ({
    lessonId: lesson.id,
    lessonTitle: lesson.title,
    embeddingCount: counts.get(lesson.id) ?? 0,
  }))
  .sort((left, right) => left.embeddingCount - right.embeddingCount || left.lessonId.localeCompare(right.lessonId));
const missingLessons = rows.filter((row) => row.embeddingCount === 0);
const distribution = Object.fromEntries(
  [...new Set(rows.map((row) => row.embeddingCount))]
    .sort((left, right) => left - right)
    .map((count) => [String(count), rows.filter((row) => row.embeddingCount === count).length]),
);
const report = {
  auditedAt: new Date().toISOString(),
  student: studentArg,
  studentId,
  releasedLessonCount: lessons.length,
  embeddedLessonCount: rows.length - missingLessons.length,
  missingEmbeddingCount: missingLessons.length,
  totalEmbeddings: rows.reduce((sum, row) => sum + row.embeddingCount, 0),
  distribution,
  missingLessons,
  lessons: rows,
};

console.table(rows.map((row) => ({ lessonId: row.lessonId, title: row.lessonTitle, embeddings: row.embeddingCount })));
console.table(Object.entries(distribution).map(([embeddingCount, lessonCount]) => ({ embeddingCount, lessonCount })));
console.log(`Released lessons: ${report.releasedLessonCount}`);
console.log(`Lessons with embeddings: ${report.embeddedLessonCount}`);
console.log(`Lessons missing embeddings: ${report.missingEmbeddingCount}`);
console.log(`Total embeddings: ${report.totalEmbeddings}`);
await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
console.log(`Report: ${outputPath}`);

if (missingLessons.length > 0) process.exitCode = 1;
