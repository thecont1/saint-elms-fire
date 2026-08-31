/**
 * Production smoke test for the Cloud Run runtime contract (Phase 8).
 *
 * Verifies, against a deployed Cloud Run service:
 *   T1  Health endpoint reports honest dependency status (Firestore, Gemini).
 *   T2  Auth boundary: requests without X-Saint-Elms-Auth-Secret get 401.
 *   T3  THE CRITICAL TEST — background artifact generation survives without
 *       client ticks: POST generate, then NO polling for 90s (simulating a
 *       user walking away), then verify the job reached a terminal success
 *       state and the artifact is `ready`. If the instance was deployed
 *       without --no-cpu-throttling, the job is still `pending`/`running`
 *       after the window because Cloud Run froze the event loop at the 202.
 *   T4  Watchdog sweep endpoint identifies stale work with bounded counts.
 *
 * Usage:
 *   bun run scripts/smoke-test-production.ts [baseUrl] [--quick]
 *
 *   --quick   skip the 90s silent window (poll immediately; loses T3's
 *             throttling proof, useful for fast iteration)
 *
 * Env overrides: SERVICE_URL, IDENTITY_TOKEN, AUTH_PROXY_SECRET,
 *   SMOKE_LESSON_ID, SMOKE_STUDENT_ID (default student-alex),
 *   SMOKE_WAIT_SECONDS (default 90)
 */
import {
  resolveProdContext,
  fetchJson,
  sleep,
  type ProdContext,
} from './lib/prod-context';

const argv = process.argv.slice(2);
const quick = argv.includes('--quick');
const baseUrlArg = argv.find((arg) => arg.startsWith('http'));

const STUDENT_ID = process.env.SMOKE_STUDENT_ID || 'student-alex';
const WAIT_SECONDS = quick ? 0 : Number(process.env.SMOKE_WAIT_SECONDS ?? 90);
const POLL_INTERVAL_MS = 10_000;
const POLL_BUDGET_MS = 5 * 60_000;
const TRANSIENT_CATEGORIES = new Set(['generation_failed', 'tts_unavailable']);

interface TestResult {
  name: string;
  pass: boolean;
  detail: string;
}
const results: TestResult[] = [];

function record(name: string, pass: boolean, detail: string): void {
  results.push({ name, pass, detail });
  console.log(`${pass ? 'PASS' : 'FAIL'}  ${name}\n      ${detail}`);
}

interface JobPoll {
  job: { id: string; kind: string; status: string; attempts: number; errorCategory?: string };
}
interface GenerateResponse {
  artifactId?: string;
  jobId?: string;
  status?: string;
  error?: string;
}
interface ArtifactResponse {
  artifact?: { id: string; status: string; job?: { status: string; errorCategory?: string } };
  error?: string;
}
interface ReleaseAudit {
  releases?: Array<{
    lessonId?: string;
    targetLessonIds?: string[];
    overallStatus?: string;
    status?: string;
  }>;
}
interface SweepResponse {
  swept?: { reclaimed: number; deadLettered: number; orphanedArtifacts: number };
  error?: string;
}
interface HealthReport {
  status?: string;
  checks?: {
    firestore: { status: string };
    gemini: { status: string };
    sarvam: { status: string };
  };
}

async function testHealth(ctx: ProdContext): Promise<void> {
  const live = await fetchJson(`${ctx.baseUrl}/health/live`, { headers: ctx.invokerOnlyHeaders() }, 30_000);
  if (live.status !== 200) {
    record('T1 health', false, `/health/live returned ${live.status}`);
    return;
  }
  const { status, body } = await fetchJson<HealthReport>(
    `${ctx.baseUrl}/api/health`,
    { headers: ctx.invokerOnlyHeaders() },
    90_000,
  );
  const checks = body.checks;
  const detail = checks
    ? `status=${body.status} firestore=${checks.firestore.status} gemini=${checks.gemini.status} sarvam=${checks.sarvam.status}`
    : `HTTP ${status}: ${JSON.stringify(body).slice(0, 200)}`;
  const ok =
    status === 200 &&
    body.status === 'ok' &&
    checks?.firestore.status === 'up' &&
    checks?.gemini.status === 'up';
  record('T1 health', ok, detail);
}

async function testAuthBoundary(ctx: ProdContext): Promise<void> {
  const noSecret = await fetchJson(
    `${ctx.baseUrl}/api/artifacts/generate`,
    {
      method: 'POST',
      headers: ctx.invokerOnlyHeaders(),
      body: JSON.stringify({ lessonId: 'any', formatType: 'podcast_audio' }),
    },
    30_000,
  );
  if (noSecret.status !== 401) {
    record('T2 auth boundary', false, `expected 401 without proxy secret, got ${noSecret.status}`);
    return;
  }
  const wrongHeaders = ctx.headers(STUDENT_ID, 'student');
  wrongHeaders['X-Saint-Elms-Auth-Secret'] = 'wrong-secret-value';
  const wrongSecret = await fetchJson(
    `${ctx.baseUrl}/api/artifacts/generate`,
    {
      method: 'POST',
      headers: wrongHeaders,
      body: JSON.stringify({ lessonId: 'any', formatType: 'podcast_audio' }),
    },
    30_000,
  );
  // Positive control: the correct secret must actually be accepted. Without this,
  // a corrupted secret value (e.g. trailing newline in the Secret Manager
  // payload) would pass both negative checks while rejecting every real user.
  const accepted = await fetchJson(
    `${ctx.baseUrl}/api/releases?studentId=${encodeURIComponent(STUDENT_ID)}`,
    { headers: ctx.headers(STUDENT_ID, 'student') },
    30_000,
  );
  record(
    'T2 auth boundary',
    wrongSecret.status === 401 && accepted.status === 200,
    `missing secret -> ${noSecret.status}; wrong secret -> ${wrongSecret.status}; correct secret -> ${accepted.status}`,
  );
}

async function findReleasedLesson(ctx: ProdContext): Promise<string | null> {
  if (process.env.SMOKE_LESSON_ID) return process.env.SMOKE_LESSON_ID;
  const { status, body } = await fetchJson<ReleaseAudit>(
    `${ctx.baseUrl}/api/releases?studentId=${encodeURIComponent(STUDENT_ID)}`,
    { headers: ctx.headers(STUDENT_ID, 'student') },
    30_000,
  );
  if (status !== 200 || !body.releases) return null;
  for (const release of body.releases) {
    const released = (release.overallStatus ?? release.status) === 'released';
    const lessonId = release.lessonId || release.targetLessonIds?.[0];
    if (released && lessonId) return lessonId;
  }
  return null;
}

async function pollJobToTerminal(
  ctx: ProdContext,
  jobId: string,
  budgetMs: number,
): Promise<{ status: string; errorCategory?: string; attempts: number; elapsedMs: number }> {
  const started = Date.now();
  let last: JobPoll['job'] | null = null;
  while (Date.now() - started < budgetMs) {
    await sleep(POLL_INTERVAL_MS);
    const { status, body } = await fetchJson<JobPoll>(
      `${ctx.baseUrl}/api/jobs/${jobId}`,
      { headers: ctx.headers(STUDENT_ID, 'student') },
      30_000,
    );
    if (status !== 200) continue;
    last = body.job;
    if (last.status === 'succeeded' || last.status === 'failed') {
      return { ...last, elapsedMs: Date.now() - started };
    }
  }
  return {
    status: last?.status ?? 'pending',
    errorCategory: last?.errorCategory,
    attempts: last?.attempts ?? 0,
    elapsedMs: Date.now() - started,
  };
}

async function testBackgroundPipeline(ctx: ProdContext): Promise<void> {
  const name = 'T3 background pipeline (90s silent window)';
  const lessonId = await findReleasedLesson(ctx);
  if (!lessonId) {
    record(name, false, `no released lesson found for ${STUDENT_ID} (set SMOKE_LESSON_ID)`);
    return;
  }
  console.log(`      using released lesson ${lessonId}`);

  const startedAt = Date.now();
  const gen = await fetchJson<GenerateResponse>(
    `${ctx.baseUrl}/api/artifacts/generate`,
    {
      method: 'POST',
      headers: ctx.headers(STUDENT_ID, 'student'),
      body: JSON.stringify({ lessonId, formatType: 'podcast_audio' }),
    },
    30_000,
  );
  if (gen.status !== 202 || !gen.body.jobId || !gen.body.artifactId) {
    record(name, false, `generate returned ${gen.status}: ${JSON.stringify(gen.body).slice(0, 200)}`);
    return;
  }
  const { jobId, artifactId } = gen.body;
  console.log(`      202 accepted: jobId=${jobId} artifactId=${artifactId}`);

  // Silent window: NO HTTP calls at all. A throttled or scaled-to-zero
  // instance gets no further ticks and must run the worker on its own.
  if (WAIT_SECONDS > 0) {
    console.log(`      silent window: no polling for ${WAIT_SECONDS}s...`);
    const windowMs = WAIT_SECONDS * 1000;
    const windowStart = Date.now();
    while (Date.now() - windowStart < windowMs) {
      await sleep(Math.min(15_000, windowMs - (Date.now() - windowStart)));
      console.log(`      ...${Math.round((Date.now() - windowStart) / 1000)}s elapsed, still not polling`);
    }
  }

  // First poll after the window. The job state is persisted in Firestore and
  // reflects what the worker accomplished during the silence:
  //   - `pending`            — the worker never claimed the job: the event
  //                            loop was throttled/scaled away (the exact
  //                            failure --no-cpu-throttling prevents). FAIL.
  //   - `running`/terminal   — the worker claimed the job during the silent
  //                            window; a podcast legitimately runs up to ~225s
  //                            (75s generation + 120s TTS), so keep polling
  //                            to the terminal state.
  const firstCheck = await fetchJson<JobPoll>(
    `${ctx.baseUrl}/api/jobs/${jobId}`,
    { headers: ctx.headers(STUDENT_ID, 'student') },
    30_000,
  );
  const firstStatus = firstCheck.status === 200 ? firstCheck.body.job.status : `HTTP ${firstCheck.status}`;
  if (firstStatus === 'pending' && !quick) {
    record(
      name,
      false,
      `job still pending after ${WAIT_SECONDS}s without client ticks — the worker never ran; CPU throttling or scale-to-zero suspected. Verify the revision has --no-cpu-throttling and --min-instances=1 (docs/PHASE8_OPS.md runbook)`,
    );
    return;
  }
  console.log(`      state after silent window: ${firstStatus} (worker claimed the job during the silence)`);

  let terminal =
    firstStatus === 'succeeded' || firstStatus === 'failed'
      ? {
          status: firstStatus,
          errorCategory: firstCheck.body.job.errorCategory,
          attempts: firstCheck.body.job.attempts,
          elapsedMs: Date.now() - startedAt,
        }
      : await pollJobToTerminal(ctx, jobId, POLL_BUDGET_MS);

  // Known environmental flaps (Gemini 503 / Sarvam) fail generation honestly.
  // One artifact-level retry distinguishes a transient dependency flap from a
  // runtime-contract failure. Watchdog `timeout` is NOT retried: it is the
  // frozen-worker signature.
  if (terminal.status === 'failed' && terminal.errorCategory && TRANSIENT_CATEGORIES.has(terminal.errorCategory)) {
    console.log(`      job failed ${terminal.errorCategory} (transient) — retrying artifact once`);
    const retry = await fetchJson<GenerateResponse>(
      `${ctx.baseUrl}/api/artifacts/${artifactId}/retry?studentId=${encodeURIComponent(STUDENT_ID)}`,
      { method: 'POST', headers: ctx.headers(STUDENT_ID, 'student') },
      30_000,
    );
    if (retry.status === 202 && retry.body.jobId) {
      terminal = await pollJobToTerminal(ctx, retry.body.jobId, POLL_BUDGET_MS);
    }
  }

  if (terminal.status !== 'succeeded') {
    const throttleHint = terminal.errorCategory === 'timeout'
      ? ' — watchdog timeout is the frozen-worker signature; check --no-cpu-throttling'
      : '';
    record(
      name,
      false,
      `job terminal=${terminal.status} category=${terminal.errorCategory ?? 'n/a'} after ${Math.round(terminal.elapsedMs / 1000)}s${throttleHint}`,
    );
    return;
  }

  const artifactCheck = await fetchJson<ArtifactResponse>(
    `${ctx.baseUrl}/api/artifacts/${artifactId}?studentId=${encodeURIComponent(STUDENT_ID)}`,
    { headers: ctx.headers(STUDENT_ID, 'student') },
    30_000,
  );
  const artifactStatus = artifactCheck.body.artifact?.status;
  const totalSec = Math.round((Date.now() - startedAt) / 1000);
  record(
    name,
    artifactStatus === 'ready',
    `job succeeded (attempts=${terminal.attempts}); artifact=${artifactStatus}; total ${totalSec}s including ${WAIT_SECONDS}s silent window`,
  );
}

async function testWatchdog(ctx: ProdContext): Promise<void> {
  const { status, body } = await fetchJson<SweepResponse>(
    `${ctx.baseUrl}/api/jobs/sweep`,
    { method: 'POST', headers: ctx.headers('smoke-admin', 'admin') },
    60_000,
  );
  const swept = body.swept;
  const shaped =
    swept !== undefined &&
    typeof swept.reclaimed === 'number' &&
    typeof swept.deadLettered === 'number' &&
    typeof swept.orphanedArtifacts === 'number';
  record(
    'T4 watchdog sweep',
    status === 200 && shaped,
    shaped
      ? `swept reclaimed=${swept!.reclaimed} deadLettered=${swept!.deadLettered} orphanedArtifacts=${swept!.orphanedArtifacts}`
      : `HTTP ${status}: ${JSON.stringify(body).slice(0, 200)}`,
  );
}

async function main(): Promise<void> {
  console.log('Resolving production context (identity token + proxy secret)...');
  const ctx = resolveProdContext(baseUrlArg);
  console.log(`Target: ${ctx.baseUrl}${quick ? '  (--quick: silent window skipped)' : ''}\n`);

  await testHealth(ctx);
  await testAuthBoundary(ctx);
  await testBackgroundPipeline(ctx);
  await testWatchdog(ctx);

  const failed = results.filter((r) => !r.pass);
  console.log(`\n${results.length - failed.length}/${results.length} smoke checks passed.`);
  if (failed.length > 0) process.exit(1);
}

main().catch((error) => {
  console.error('\nSMOKE TEST ERRORED\n', error);
  process.exit(1);
});
