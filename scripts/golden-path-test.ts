/**
 * Golden-path verification against the deployed Cloud Run service (Phase 8,
 * Task 4). Exercises the full demo journey with real courseware content:
 *
 *   1. Admin uploads a markdown lesson (small fixture drawn from the
 *      generated corpus, scripts/fixtures/golden-path-lesson.md).
 *   2. Admin releases it to a dedicated student; the release transitions
 *      pending -> released with ingestion metadata (chunks + embeddings +
 *      knowledge graph written synchronously).
 *   3. Student asks a RAG chat question about the lesson.
 *   4. Student requests PDF notes -> artifact reaches `ready`.
 *   5. Student requests a podcast -> artifact reaches `ready` (validates the
 *      Phase 7 timer-dispatched worker + Phase 8 runtime contract together).
 *
 * Each artifact must reach `ready` within 2 minutes of its 202.
 *
 * Usage: bun run scripts/golden-path-test.ts [baseUrl]
 * Env: SERVICE_URL, IDENTITY_TOKEN, AUTH_PROXY_SECRET, GOLDEN_ADMIN_ID,
 *      GOLDEN_STUDENT_ID
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  resolveProdContext,
  fetchJson,
  pollArtifactToTerminal,
  parseBaseUrlArg,
  type ProdContext,
} from './lib/prod-context';

const argv = process.argv.slice(2);

let baseUrlArg: string | undefined;
try {
  baseUrlArg = parseBaseUrlArg(argv);
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(2);
}

const ADMIN_ID = process.env.GOLDEN_ADMIN_ID || 'prof-golden-path';
const RUN_ID = Date.now().toString(36);
const STUDENT_ID = process.env.GOLDEN_STUDENT_ID || `student-golden-${RUN_ID}`;
const COURSE_ID = `gp-course-${RUN_ID}`;
const MODULE_ID = `gp-module-${RUN_ID}`;

const ARTIFACT_BUDGET_MS = 4 * 60_000; // observe up to 4 min...
const ARTIFACT_ACCEPT_MS = 2 * 60_000; // ...but only ready within 2 min passes

interface StepResult {
  step: string;
  pass: boolean;
  detail: string;
}
const results: StepResult[] = [];

function record(step: string, pass: boolean, detail: string): void {
  results.push({ step, pass, detail });
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${step}\n      ${detail}`);
}

interface LessonResponse {
  lesson?: { id: string; title: string };
  error?: string;
}
interface ReleaseResponse {
  release?: { id: string; overallStatus?: string; status?: string; releasedAt?: string; steps?: unknown[] };
  ingestionResults?: Array<{ lessonId: string; status: string }>;
  ingestedCount?: number;
  retryUrl?: string;
  error?: string;
}
interface ChatResponse {
  answer?: string;
  isGrounded?: boolean;
  groundedSources?: unknown[];
  error?: string;
}
interface GenerateResponse {
  artifactId?: string;
  jobId?: string;
  error?: string;
}

async function uploadLesson(ctx: ProdContext): Promise<string | null> {
  const markdownPath = join(import.meta.dir, 'fixtures', 'golden-path-lesson.md');
  const markdownContent = readFileSync(markdownPath, 'utf8');
  const { status, body } = await fetchJson<LessonResponse>(
    `${ctx.baseUrl}/api/lessons`,
    {
      method: 'POST',
      headers: ctx.headers(ADMIN_ID, 'admin'),
      body: JSON.stringify({
        courseId: COURSE_ID,
        moduleId: MODULE_ID,
        title: 'Golden Path: Rules of Differentiation',
        markdownContent,
        summary: 'Small corpus fixture used by the Phase 8 golden-path test.',
        tags: ['golden-path', 'differentiation'],
      }),
    },
    60_000,
  );
  if (status !== 200 || !body.lesson?.id) {
    record('1 upload lesson', false, `HTTP ${status}: ${JSON.stringify(body).slice(0, 200)}`);
    return null;
  }
  record('1 upload lesson', true, `lessonId=${body.lesson.id} (${markdownContent.length} bytes markdown)`);
  return body.lesson.id;
}

async function releaseLesson(ctx: ProdContext, lessonId: string): Promise<boolean> {
  const started = Date.now();
  // Ingestion (chunks + embeddings + graph extraction) runs synchronously
  // inside the release request; give it a generous client-side bound.
  const { status, body } = await fetchJson<ReleaseResponse>(
    `${ctx.baseUrl}/api/releases`,
    {
      method: 'POST',
      headers: ctx.headers(ADMIN_ID, 'admin'),
      body: JSON.stringify({ courseId: COURSE_ID, moduleId: MODULE_ID, lessonId, studentId: STUDENT_ID }),
    },
    300_000,
  );
  const sec = Math.round((Date.now() - started) / 1000);
  const release = body.release;
  const released = (release?.overallStatus ?? release?.status) === 'released';
  if (status !== 201 || !released) {
    record(
      '2 release (pending -> released)',
      false,
      `HTTP ${status} overallStatus=${release?.overallStatus ?? release?.status ?? 'n/a'} after ${sec}s — ${body.retryUrl ? `retry at ${body.retryUrl}` : JSON.stringify(body).slice(0, 200)}`,
    );
    return false;
  }
  const ingested = body.ingestedCount ?? body.ingestionResults?.length ?? 0;
  record(
    '2 release (pending -> released)',
    ingested === 1,
    `releaseId=${release?.id} ingestedCount=${ingested} releasedAt=${release?.releasedAt ?? 'n/a'} in ${sec}s`,
  );
  return ingested === 1;
}

async function ragChat(ctx: ProdContext): Promise<boolean> {
  const started = Date.now();
  const { status, body } = await fetchJson<ChatResponse>(
    `${ctx.baseUrl}/api/chat`,
    {
      method: 'POST',
      headers: ctx.headers(STUDENT_ID, 'student'),
      body: JSON.stringify({
        question: 'State the chain rule and use it to differentiate (3x^2 + 1)^4.',
        courseId: COURSE_ID,
        studentId: STUDENT_ID,
      }),
    },
    180_000,
  );
  const sec = Math.round((Date.now() - started) / 1000);
  const answer = body.answer?.trim() ?? '';
  if (status !== 200 || !answer) {
    record('3 RAG chat', false, `HTTP ${status}: ${JSON.stringify(body).slice(0, 200)}`);
    return false;
  }
  const looksGrounded = body.isGrounded === true && /24x|chain/i.test(answer);
  record(
    '3 RAG chat',
    true,
    `answered in ${sec}s, isGrounded=${body.isGrounded}, content-check=${looksGrounded ? 'mentions chain rule result' : 'answer may be ungrounded'} (${answer.length} chars)`,
  );
  return true;
}

async function generateArtifact(
  ctx: ProdContext,
  lessonId: string,
  formatType: 'notes_pdf' | 'podcast_audio',
  label: string,
): Promise<void> {
  const started = Date.now();
  const gen = await fetchJson<GenerateResponse>(
    `${ctx.baseUrl}/api/artifacts/generate`,
    {
      method: 'POST',
      headers: ctx.headers(STUDENT_ID, 'student'),
      body: JSON.stringify({ lessonId, formatType }),
    },
    60_000,
  );
  if (gen.status !== 202 || !gen.body.artifactId) {
    record(label, false, `generate HTTP ${gen.status}: ${JSON.stringify(gen.body).slice(0, 200)}`);
    return;
  }
  const { artifactId } = gen.body;

  let terminal = await pollArtifactToTerminal(ctx, artifactId, STUDENT_ID, ARTIFACT_BUDGET_MS);
  const transient = terminal.status === 'failed'
    && (terminal.errorCategory === 'generation_failed' || terminal.errorCategory === 'tts_unavailable');
  if (transient) {
    console.log(`      ${formatType} failed ${terminal.errorCategory} (transient) — one retry`);
    const retry = await fetchJson<GenerateResponse>(
      `${ctx.baseUrl}/api/artifacts/${artifactId}/retry?studentId=${encodeURIComponent(STUDENT_ID)}`,
      { method: 'POST', headers: ctx.headers(STUDENT_ID, 'student') },
      30_000,
    );
    if (retry.status === 202) {
      terminal = await pollArtifactToTerminal(ctx, artifactId, STUDENT_ID, ARTIFACT_BUDGET_MS);
    }
  }

  const totalSec = Math.round((Date.now() - started) / 1000);
  const ready = terminal.status === 'ready';
  const withinBudget = Date.now() - started <= ARTIFACT_ACCEPT_MS;
  record(
    label,
    ready && withinBudget,
    `status=${terminal.status}${terminal.errorCategory ? ` category=${terminal.errorCategory}` : ''} in ${totalSec}s (acceptance: ready < 120s)`,
  );
}

async function main(): Promise<void> {
  console.log('Resolving production context (identity token + proxy secret)...');
  const ctx = resolveProdContext(baseUrlArg);
  console.log(`Target: ${ctx.baseUrl}`);
  console.log(`Run: course=${COURSE_ID} module=${MODULE_ID} student=${STUDENT_ID}\n`);

  const lessonId = await uploadLesson(ctx);
  if (lessonId) {
    const released = await releaseLesson(ctx, lessonId);
    if (released) {
      await ragChat(ctx);
      await generateArtifact(ctx, lessonId, 'notes_pdf', '4 PDF notes artifact');
      await generateArtifact(ctx, lessonId, 'podcast_audio', '5 podcast artifact');
    }
  }

  const failed = results.filter((r) => !r.pass);
  console.log(`\nGolden path: ${results.length - failed.length}/${results.length} steps passed.`);
  if (failed.length > 0) process.exit(1);
}

main().catch((error) => {
  console.error('\nGOLDEN PATH TEST ERRORED\n', error);
  process.exit(1);
});
