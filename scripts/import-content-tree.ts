/**
 * WP-G content import: loads the authored courseware tree (content/) into
 * the live Elms service through the admin API — courses, modules, lessons —
 * then verifies one release end-to-end (ingestion metadata, knowledge-graph
 * growth, RAG availability).
 *
 * Idempotent: courses are matched by `code` (the manifest courseId), modules
 * by a moduleId marker in their description, and a course with all of its
 * lessons already present is skipped.
 *
 * Usage: bun run scripts/import-content-tree.ts [baseUrl] [--skip-release]
 * Env: SERVICE_URL, IDENTITY_TOKEN, AUTH_PROXY_SECRET (else resolved via gcloud)
 */
import * as fs from 'node:fs';
import * as path from 'node:path';
import { resolveProdContext, fetchJson, type ProdContext } from './lib/prod-context';

const ADMIN_ID = process.env.WPG_ADMIN_ID || 'admin-wpg-import';
const STUDENT_ID = process.env.WPG_STUDENT_ID || 'student-wpg-import';
const RELEASE_CHECK_LESSON = 'bridge-physics-m1-l1';

interface Frontmatter {
  [key: string]: string;
}

interface LessonFile {
  fm: Frontmatter;
  raw: string;
  file: string;
  tags: string[];
  overview: string;
}

function parseFrontmatter(content: string): Frontmatter {
  const lines = content.split('\n');
  if (lines[0]?.trim() !== '***') throw new Error('missing *** opening delimiter');
  const fields: Frontmatter = {};
  let listKey: string | null = null;
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === '***') return fields;
    const kv = line.match(/^([A-Za-z][A-Za-z0-9]*):\s*(.*)$/);
    if (kv) {
      fields[kv[1]] = kv[2].trim();
      listKey = kv[2].trim() === '' ? kv[1] : null;
      continue;
    }
    const item = line.match(/^\s+-\s+(.*)$/);
    if (item && listKey) {
      fields[listKey] = fields[listKey] ? `${fields[listKey]}|${item[1].trim()}` : item[1].trim();
    }
  }
  throw new Error('missing *** closing delimiter');
}

function extractOverview(raw: string): string {
  const match = raw.match(/## Overview\n+([\s\S]*?)(?=\n## |\n$)/);
  if (!match) return '';
  const paragraph = match[1].trim().split(/\n{2,}/)[0].replace(/\s+/g, ' ').trim();
  return paragraph.length > 280 ? `${paragraph.slice(0, 277)}...` : paragraph;
}

function walk(dir: string, found: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (fs.statSync(full).isDirectory()) walk(full, found);
    else if (entry.endsWith('.md')) found.push(full);
  }
  return found;
}

function collect(): LessonFile[] {
  const root = path.join(process.cwd(), 'content');
  const dirs = fs
    .readdirSync(root)
    .filter((entry) => /^semester-\d+$/.test(entry) || entry === 'university-support')
    .map((entry) => path.join(root, entry));
  const lessons: LessonFile[] = [];
  for (const dir of dirs) {
    for (const file of walk(dir)) {
      const raw = fs.readFileSync(file, 'utf8');
      const fm = parseFrontmatter(raw);
      lessons.push({
        fm,
        raw,
        file: path.relative(process.cwd(), file),
        tags: (fm.tags || '').split('|').filter(Boolean),
        overview: extractOverview(raw),
      });
    }
  }
  return lessons.sort(
    (a, b) => Number(a.fm.releaseOrder ?? 0) - Number(b.fm.releaseOrder ?? 0) || a.file.localeCompare(b.file)
  );
}

interface EntityRefs {
  courseId: string;
  moduleIds: Map<string, string>;
  lessonIds: Map<string, string>;
}

interface ApiCourse {
  id: string;
  title: string;
  code?: string;
}

async function findOrCreateCourse(ctx: ProdContext, existing: ApiCourse[], first: LessonFile): Promise<string> {
  const code = first.fm.courseId;
  const hit = existing.find((course) => course.code === code);
  if (hit) return hit.id;
  const { status, body } = await fetchJson<{ course?: ApiCourse; error?: string }>(
    `${ctx.baseUrl}/api/courses`,
    {
      method: 'POST',
      headers: ctx.headers(ADMIN_ID, 'admin'),
      body: JSON.stringify({
        title: first.fm.courseName,
        description: `B.Sc. PM-Astrophysics programme courseware (${first.fm.subjectName}).`,
        code,
        programmeId: first.fm.programmeId,
        subjectId: first.fm.subjectId,
        semesterId: first.fm.semesterId,
      }),
    },
    60_000,
  );
  if (status !== 200 || !body.course?.id) {
    throw new Error(`course create failed for ${code}: HTTP ${status} ${JSON.stringify(body).slice(0, 200)}`);
  }
  existing.push(body.course);
  console.log(`  + course "${first.fm.courseName}" (${body.course.id})`);
  return body.course.id;
}

async function courseDetail(ctx: ProdContext, courseId: string) {
  const { status, body } = await fetchJson<{
    modules?: Array<{ id: string; title: string; description?: string }>;
    lessons?: Array<{ id: string; title: string }>;
  }>(`${ctx.baseUrl}/api/courses/${courseId}`, { headers: ctx.headers(ADMIN_ID, 'admin') }, 60_000);
  if (status !== 200) throw new Error(`course detail failed for ${courseId}: HTTP ${status}`);
  return { modules: body.modules ?? [], lessons: body.lessons ?? [] };
}

async function findOrCreateModule(
  ctx: ProdContext,
  courseId: string,
  existing: Array<{ id: string; description?: string }>,
  lesson: LessonFile,
  order: number
): Promise<string> {
  const moduleId = lesson.fm.moduleId;
  const hit = existing.find((mod) => mod.description === moduleId);
  if (hit) return hit.id;
  const { status, body } = await fetchJson<{ module?: { id: string }; error?: string }>(
    `${ctx.baseUrl}/api/modules`,
    {
      method: 'POST',
      headers: ctx.headers(ADMIN_ID, 'admin'),
      body: JSON.stringify({
        courseId,
        title: lesson.fm.moduleName,
        description: moduleId,
        order,
        programmeId: lesson.fm.programmeId,
        subjectId: lesson.fm.subjectId,
        semesterId: lesson.fm.semesterId,
      }),
    },
    60_000,
  );
  if (status !== 200 || !body.module?.id) {
    throw new Error(`module create failed for ${moduleId}: HTTP ${status} ${JSON.stringify(body).slice(0, 200)}`);
  }
  existing.push({ id: body.module.id, description: moduleId });
  return body.module.id;
}

async function createLesson(ctx: ProdContext, refs: EntityRefs, entityModuleId: string, lesson: LessonFile): Promise<string> {
  const { status, body } = await fetchJson<{ lesson?: { id: string }; error?: string }>(
    `${ctx.baseUrl}/api/lessons`,
    {
      method: 'POST',
      headers: ctx.headers(ADMIN_ID, 'admin'),
      body: JSON.stringify({
        courseId: refs.courseId,
        moduleId: entityModuleId,
        title: lesson.fm.lessonName,
        markdownContent: lesson.raw,
        summary: lesson.overview,
        tags: lesson.tags,
        order: Number(lesson.fm.lessonNumber ?? 1),
        programmeId: lesson.fm.programmeId,
        subjectId: lesson.fm.subjectId,
        semesterId: lesson.fm.semesterId,
      }),
    },
    60_000,
  );
  if (status !== 200 || !body.lesson?.id) {
    throw new Error(`lesson create failed for ${lesson.fm.lessonId}: HTTP ${status} ${JSON.stringify(body).slice(0, 200)}`);
  }
  return body.lesson.id;
}

interface ReleaseBody {
  release?: { id?: string; overallStatus?: string; status?: string };
  ingestionResults?: Array<{ lessonId: string; status: string; result?: { chunksStored?: number; extractedNodesCount?: number; extractedEdgesCount?: number } }>;
  idempotent?: boolean;
  retryUrl?: string;
  error?: string;
}

async function releaseCheck(ctx: ProdContext, refs: EntityRefs, entityModuleId: string): Promise<boolean> {
  const entityLessonId = refs.lessonIds.get(RELEASE_CHECK_LESSON);
  if (!entityLessonId) {
    console.log(`SKIP  release check: ${RELEASE_CHECK_LESSON} was not imported in this run`);
    return false;
  }
  console.log(`\nRelease check: ${RELEASE_CHECK_LESSON} -> ${STUDENT_ID}`);
  const started = Date.now();
  let { status, body } = await fetchJson<ReleaseBody>(
    `${ctx.baseUrl}/api/releases`,
    {
      method: 'POST',
      headers: ctx.headers(ADMIN_ID, 'admin'),
      body: JSON.stringify({
        courseId: refs.courseId,
        moduleId: entityModuleId,
        lessonId: entityLessonId,
        studentId: STUDENT_ID,
      }),
    },
    300_000,
  );

  // Unified recovery: graph extraction sits on Gemini, which flaps in this
  // environment. Whether the release is fresh-and-failed (502) or a prior
  // run's idempotent failure (200), chase it through the bounded retry path.
  let state = body.release?.overallStatus ?? body.release?.status ?? '';
  const releaseId = body.release?.id ?? '';
  let attempts = 0;
  while (state === 'failed' && releaseId && attempts < 3) {
    attempts++;
    console.log(`      release ${releaseId} failed (attempt ${attempts}/3 retries)...`);
    const retry = await fetchJson<ReleaseBody>(
      `${ctx.baseUrl}/api/releases/${releaseId}/retry`,
      { method: 'POST', headers: ctx.headers(ADMIN_ID, 'admin'), body: '{}' },
      300_000,
    );
    status = retry.status;
    body = retry.body;
    state = body.release?.overallStatus ?? body.release?.status ?? '';
  }
  if (state === 'pending') {
    console.log('      release pending (another ingestion in flight); waiting 60s');
    await new Promise((resolve) => setTimeout(resolve, 60_000));
    const audit = await fetchJson<{ releases?: Array<{ id: string; overallStatus?: string; status?: string }> }>(
      `${ctx.baseUrl}/api/releases?studentId=${encodeURIComponent(STUDENT_ID)}`,
      { headers: ctx.headers(ADMIN_ID, 'admin') },
      60_000,
    );
    state = audit.body.releases?.find((r) => r.id === releaseId)?.overallStatus ?? state;
  }
  if (status >= 500 && state !== 'released' && state !== 'failed' && state !== 'pending') {
    console.log(`FAIL  release: HTTP ${status} — ${JSON.stringify(body).slice(0, 300)}`);
    return false;
  }
  if (state !== 'released') {
    console.log(`FAIL  release ${releaseId}: terminal state "${state}" after ${attempts} retries — ${JSON.stringify(body).slice(0, 300)}`);
    return false;
  }
  const ingested = body.ingestionResults?.[0];
  if (ingested?.status === 'success' && ingested.result) {
    const chunks = ingested.result.chunksStored ?? 0;
    const nodes = ingested.result.extractedNodesCount ?? 0;
    const edges = ingested.result.extractedEdgesCount ?? 0;
    if (chunks === 0 || nodes === 0) {
      console.log(`FAIL  ingestion metadata: chunks=${chunks} nodes=${nodes} edges=${edges}`);
      return false;
    }
    console.log(`PASS  release ${releaseId} in ${Math.round((Date.now() - started) / 1000)}s: chunks=${chunks}, graph +${nodes} nodes / ${edges} edges`);
  } else {
    console.log(`PASS  release ${releaseId} is released (${Math.round((Date.now() - started) / 1000)}s, ${attempts} retries)`);
  }

  const chat = await fetchJson<{ answer?: string; isGrounded?: boolean; error?: string }>(
    `${ctx.baseUrl}/api/chat`,
    {
      method: 'POST',
      headers: ctx.headers(STUDENT_ID, 'student'),
      body: JSON.stringify({
        question: 'What are the base SI units, and why do units matter when reporting a measurement?',
        courseId: refs.courseId,
      }),
    },
    120_000,
  );
  if (chat.status !== 200 || !chat.body.answer) {
    console.log(`FAIL  RAG chat: HTTP ${chat.status} — ${JSON.stringify(chat.body).slice(0, 300)}`);
    return false;
  }
  console.log(`PASS  RAG chat answered (grounded=${chat.body.isGrounded ?? 'n/a'}): ${chat.body.answer.slice(0, 140)}...`);
  return true;
}

async function main() {
  const argv = process.argv.slice(2);
  const skipRelease = argv.includes('--skip-release');
  const ctx = resolveProdContext(argv.find((arg) => arg.startsWith('http')));
  const lessons = collect();
  console.log(`Collected ${lessons.length} lessons from content/`);

  const { status: courseStatus, body: courseBody } = await fetchJson<{ courses?: ApiCourse[] }>(
    `${ctx.baseUrl}/api/courses`,
    { headers: ctx.headers(ADMIN_ID, 'admin') },
    60_000,
  );
  if (courseStatus !== 200) throw new Error(`GET /api/courses failed: HTTP ${courseStatus}`);
  const existingCourses = courseBody.courses ?? [];
  console.log(`Service already has ${existingCourses.length} courses`);

  const byCourse = new Map<string, LessonFile[]>();
  for (const lesson of lessons) {
    const key = lesson.fm.courseId;
    byCourse.set(key, [...(byCourse.get(key) ?? []), lesson]);
  }

  let createdLessons = 0;
  let skippedCourses = 0;
  let bridgeRefs: EntityRefs | null = null;
  let bridgeModuleId = '';

  for (const [courseId, courseLessons] of byCourse) {
    const entityCourseId = await findOrCreateCourse(ctx, existingCourses, courseLessons[0]);
    const detail = await courseDetail(ctx, entityCourseId);
    const expected = courseLessons.length;
    if (detail.lessons.length >= expected) {
      console.log(`= ${courseId}: already imported (${detail.lessons.length}/${expected} lessons)`);
      skippedCourses++;
      if (courseId === 'bridge-physics') {
        const moduleByMarker = new Map(detail.modules.map((mod) => [mod.description ?? '', mod.id]));
        const lessonIdByTitle = new Map(detail.lessons.map((les) => [les.title, les.id]));
        const target = courseLessons.find((les) => les.fm.lessonId === RELEASE_CHECK_LESSON);
        bridgeRefs = {
          courseId: entityCourseId,
          moduleIds: moduleByMarker,
          lessonIds: new Map(target ? [[RELEASE_CHECK_LESSON, lessonIdByTitle.get(target.fm.lessonName) ?? '']] : []),
        };
        bridgeModuleId = target ? moduleByMarker.get(target.fm.moduleId) ?? '' : '';
      }
      continue;
    }

    const refs: EntityRefs = { courseId: entityCourseId, moduleIds: new Map(), lessonIds: new Map() };
    const moduleOrder = new Map<string, number>();
    for (const lesson of courseLessons) {
      if (!moduleOrder.has(lesson.fm.moduleId)) {
        moduleOrder.set(lesson.fm.moduleId, Number(lesson.fm.moduleNumber ?? moduleOrder.size + 1));
      }
      const entityModuleId = await findOrCreateModule(
        ctx,
        entityCourseId,
        detail.modules,
        lesson,
        moduleOrder.get(lesson.fm.moduleId) ?? 1
      );
      refs.moduleIds.set(lesson.fm.moduleId, entityModuleId);
      const entityLessonId = await createLesson(ctx, refs, entityModuleId, lesson);
      refs.lessonIds.set(lesson.fm.lessonId, entityLessonId);
      createdLessons++;
    }
    console.log(`+ ${courseId}: imported ${courseLessons.length} lessons (${moduleOrder.size} modules)`);
    if (courseId === 'bridge-physics') {
      bridgeRefs = refs;
      const target = courseLessons.find((les) => les.fm.lessonId === RELEASE_CHECK_LESSON);
      bridgeModuleId = target ? refs.moduleIds.get(target.fm.moduleId) ?? '' : '';
    }
  }

  console.log(`\nImport summary: ${createdLessons} lessons created, ${skippedCourses} courses already complete.`);

  if (skipRelease) {
    console.log('Release check skipped (--skip-release).');
    return;
  }
  if (!bridgeRefs || !bridgeModuleId) {
    console.log('SKIP release check: bridge-physics not found in import set.');
    return;
  }
  const ok = await releaseCheck(ctx, bridgeRefs, bridgeModuleId);
  process.exitCode = ok ? 0 : 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
