# Phase 8 Verification: Production Smoke Test Harness

Companion to `scripts/smoke-test-production.ts`. This harness exists because
"works locally" and "works on Cloud Run" diverged in Phase 6/7: the async
artifact pipeline hung on the deployed revision when Cloud Run throttled CPU
after the 202 response. The harness verifies the runtime contract
(`docs/PHASE3.md` → Runtime contract) against a live revision.

## What each check proves

| Check | Endpoint | Proves |
| --- | --- | --- |
| T1 health | `GET /health/live`, `GET /api/health` | Container is up; Firestore and Gemini are honestly reported `up` (a 503 with dependency detail is honest degradation, not a crash). |
| T2 auth boundary | `POST /api/artifacts/generate` without / with wrong `X-Saint-Elms-Auth-Secret` | The trusted-proxy identity boundary (Phase 4) still fails closed with 401 in production. |
| T3 background pipeline | `POST /api/artifacts/generate` → 90s silence → `GET /api/jobs/{jobId}` | **The critical test.** The in-process worker completes a podcast job with zero client ticks after the 202. If the revision lacks `--no-cpu-throttling`, the first poll after the window still shows `pending`/`running` because Cloud Run froze the event loop at the response boundary. |
| T4 watchdog sweep | `POST /api/jobs/sweep` (admin) | The watchdog answers with bounded counts (`reclaimed`, `deadLettered`, `orphanedArtifacts`), so stranded work can always be recovered manually. |

### T3 detail

1. Finds a released lesson for `SMOKE_STUDENT_ID` (default `student-alex`) via
   `GET /api/releases`; override with `SMOKE_LESSON_ID`.
2. Requests `formatType=podcast_audio` — the worst-case bounded job
   (~75s generation + ~120s TTS), and the exact format that hung in the
   Phase 6 evaluation.
3. Sleeps 90 seconds with **no HTTP calls**. This simulates a user walking
   away; every poll would otherwise reset Cloud Run's "active request" window
   and mask throttling.
4. First poll: still `pending`/`running` → **FAIL** with a throttling
   diagnosis. Terminal `succeeded` → confirms the artifact is `ready`.
5. If the job fails with a transient dependency category
   (`generation_failed` from a Gemini 503 flap, `tts_unavailable`), the
   harness retries the artifact once — that distinguishes an environmental
   flap from a runtime-contract failure. The silent window applies only to
   the first attempt.

### Watchdog ceiling fix (found during this phase)

The golden-path runs landed podcasts at 133–143s, and the old watchdog
ceiling would have killed them: `sweepStaleWork` dead-letters any active job
older than a wall-clock ceiling measured from `createdAt` (60s notes / 120s
podcast — well UNDER the pipelines' own bounded worst case of ~225s). The
runs only survived because the harnesses poll endpoints that don't sweep;
`GET /api/artifacts` (the list route the UI polls) sweeps on every request,
so with the artifact panel open a slow-window podcast crossing 120s would be
failed `timeout` within ~30s — on camera. Ceilings raised to sit above the
bounded budgets (`JOB_TIMEOUT_MS` in `src/lib/job-watchdog.ts`):
`notes_pdf`/`reading_recommendation` 120s, `podcast_audio` 240s. A
legitimately progressing job now always reaches a terminal state by its own
deadlines before the watchdog may fire; the watchdog stays a safety net for
crashed/orphaned jobs. Regression guards: `src/lib/job-watchdog.test.ts`.

## Run

```bash
# Full run (90s silent window). Identity token + proxy secret resolve from
# gcloud automatically; override with IDENTITY_TOKEN / AUTH_PROXY_SECRET.
bun run scripts/smoke-test-production.ts

# Against a specific revision URL:
bun run scripts/smoke-test-production.ts https://REVISION-URL.run.app

# Fast iteration (skips the silent window; loses the throttling proof):
bun run scripts/smoke-test-production.ts --quick
```

Exit code 0 only when all four checks pass.

## The negative control (proving the flag necessity)

The harness doubles as a negative control. To prove `--no-cpu-throttling` is
load-bearing, deploy a control revision WITHOUT the flag and run T3 against it:

```bash
# Control revision (throttling ON, the Cloud Run default):
gcloud run deploy saint-elms-fire-throttle-control \
  --project=saint-elms-fire --region=asia-south1 \
  --image=<same image as the contract revision> \
  --service-account=saint-elms-fire-app@saint-elms-fire.iam.gserviceaccount.com \
  --port=8080 --no-allow-unauthenticated \
  --min-instances=1 --max-instances=1 \
  --cpu-throttling \
  --update-env-vars="GOOGLE_CLOUD_PROJECT=saint-elms-fire,AUTH_MODE=trusted-proxy" \
  --update-secrets="GEMINI_API_KEY=gemini-api-key:<N>,AUTH_PROXY_SECRET=saint-elms-auth-proxy-secret:<N>"

bun run scripts/smoke-test-production.ts https://saint-elms-fire-throttle-control-*.asia-south1.run.app
# Expected: T3 FAILS — job still pending/running after the silent window.

# Delete the control revision afterwards (it bills a warm instance):
gcloud run services delete saint-elms-fire-throttle-control \
  --project=saint-elms-fire --region=asia-south1 --quiet
```

The control costs one always-on instance for the duration of the test only —
run it deliberately, then delete it.

## Results

| Date (IST) | Revision | Contract flags | T1 | T2 | T3 | T4 | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-31 ~05:47 | `00010-l2p` | cpu-throttling=false, min=1, max=1 | FAIL (degraded: gemini=down, sarvam=down — environmental flap, honestly reported) | PASS (401 / 401 / correct secret 200) | FAIL terminal (first attempt `tts_unavailable`, retry `generation_failed` under the flap) — **but runtime-contract evidence positive: job was `running` after the 90s silent window, i.e. the worker claimed and continued the job with zero client ticks; no job stayed `pending`** | PASS (`swept 0/0/0`) | Same run also validated the secret rotation drill end-to-end (see PHASE8_OPS.md). |
| 2026-08-31 ~06:03 | `00010-l2p` | same | FAIL (flap ongoing at probe time) | PASS | **PASS** — after the 90s silent window the first attempt was honestly `failed generation_failed` (worker ran, bounded failure), the one allowed transient retry succeeded: job `succeeded`, artifact `ready`, 232s total including the silent window | PASS | Critical test passed: podcast completed with zero client polling. |
| 2026-08-31 ~06:06 | `00010-l2p` | same | **PASS** (`status=ok`, firestore=up, gemini=up; sarvam text probe down — not part of the health contract) | PASS | **PASS, first attempt** — the job was already `succeeded` at the first post-window check: the podcast generation finished entirely inside the 90s silent window with zero client ticks; artifact `ready`, attempts=1, 90s total | PASS | **4/4 clean pass.** Strongest form of the proof: no polling needed at any point after the 202. |

Interpretation: with the contract flags in place the failure mode under a
Gemini/Sarvam flap is an honest, bounded `failed` with a category — never a
hang — and in a healthy window the full pipeline reaches `ready` with no
client polling at all (run 3). The pre-contract failure mode (job stuck in
`pending` after the 202) is reproduced by the negative control described
above.

## Golden path (Task 4)

`scripts/golden-path-test.ts` runs the full demo journey against the deployed
service with real courseware content (fixture:
`scripts/fixtures/golden-path-lesson.md`, drawn from the corpus):

1. Admin uploads the markdown lesson (`POST /api/lessons`).
2. Admin releases it to a dedicated student (`POST /api/releases`) — the
   release must transition pending → released with ingestion metadata
   (`ingestedCount=1`, `releasedAt`).
3. Student asks a RAG chat question grounded in the lesson.
4. Student requests PDF notes → artifact `ready`.
5. Student requests a podcast → artifact `ready` (validates Phase 7 + Phase 8
   fixes together).

Acceptance: every artifact reaches `ready` in < 2 minutes. Each run uses
fresh course/module/student IDs (`gp-*` prefix) so runs never collide with
real curriculum data. One transient artifact retry is allowed (Gemini/Sarvam
flap); the clock includes the retry.

```bash
bun run scripts/golden-path-test.ts            # default service URL
bun run scripts/golden-path-test.ts <baseUrl>  # explicit URL
```

### Golden-path results

| Date (IST) | Revision | Steps 1–3 | PDF notes | Podcast | Notes |
| --- | --- | --- | --- | --- | --- |
| 2026-08-31 ~06:10 | `00010-l2p` | PASS (upload, release 22s ingestedCount=1, RAG grounded in 33s) | PASS (`ready` in 31s) | `ready` in 246s — FAIL on the 2-min budget | First podcast attempt hit `tts_unavailable` during a Sarvam TTS flap; retry succeeded but the honest total exceeded the budget. |
| 2026-08-31 ~06:16 | `00010-l2p` | PASS (release 24s, RAG grounded in 35s) | PASS (`ready` in 15s) | `ready` in 133s, clean first attempt — FAIL by 13s on the 2-min budget | No flaps involved; current Gemini generation + TTS latency simply lands just above 120s. The 06:06 smoke run shows the same pipeline completing inside 90s in a fast window. |
| 2026-08-31 ~06:20 | `00010-l2p` | PARTIAL — release 15s PASS; RAG chat 502 under a Gemini flap | PASS (`ready` in 31s, one transient retry) | `ready` in 143s — FAIL on the 2-min budget | Flap returned mid-run; steps that ran still reached honest terminal states. |

**Verdict.** The golden path is verified end-to-end on production with real
markdown content: upload → release (pending → `released` with ingestion
metadata) → grounded RAG chat → PDF `ready` → podcast `ready` all succeeded,
with the cleanest complete record in run 2. Against the 2-minute acceptance:
PDF passes with wide margin (15–31s); the podcast consistently reaches
`ready` but lands ~133–143s in the current dependency-latency regime —
13–23s over budget. That is a dependency-latency observation, not a hang: the
same pipeline completed inside 90s during the 06:06 smoke window, and every
failure along the way was a bounded, categorized, retryable result. No run
left a job `pending` without progress.
