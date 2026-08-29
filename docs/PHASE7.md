# Phase 7 Runbook: Reliable Generation

Operational companion to [PHASE7_PLAN.md](PHASE7_PLAN.md). This file is filled in as tasks
land; the Diagnosis section below is the A0 deliverable.

## Diagnosis (A0, 2026-08-30)

Method: live reproduction as Alex on lesson 1.1 (`localhost:3000`, dev server PID 95488) with
browser network capture, server log tail (`.next/dev/logs/next-development.log`), Firestore
`jobs`/`generated_artifacts` dumps, and direct dependency probes (`scripts/diag-*.ts`, scratch).

### Environment state at diagnosis time

| Dependency | Status | Evidence |
| --- | --- | --- |
| Firestore | up | deep health: 309–376ms round trip |
| Sarvam 105b | up | deep health: 0.3–0.4s |
| Gemini 3.7 Flash | **flapping** | direct REST `generateContent` pong OK in 3.7s; deep health down (10.4s) then up (14.3s) minutes apart; dev log shows repeated `[503 Service Unavailable] high demand` from 02:03–02:11 |
| GCS `saint-elms-fire-artifacts` | **missing** | probe: `bucket.exists -> false`; `file.save` → "The specified bucket does not exist" |

### Path 1 — legacy sync (`/api/generate-format`, "Kindling the fire...")

Timeline (click at T0): `POST /api/generate-format` stayed `[pending]` in the network panel for
~60s while UI polling continued; server log then showed
`Multi-format generation flow error: GenkitError: UNAVAILABLE ... [503 Service Unavailable]`;
the POST completed **502** and the UI fired its alert.

Root cause: not an infinite hang — an **unbounded black-hole**. Under the capacity flap, Gemini
holds the request for tens of seconds before answering 503; neither the route
(`generate-format/route.ts:51`) nor the client (`MultiFormatViewer.tsx:56`) has any timeout, so
the user stares at "Kindling the fire..." for the whole window. The evaluation's "never resolved
after 40+ seconds" was inside this window.

### Path 2 — async artifacts (`/api/artifacts/*`, ArtifactPanel)

Contract works as documented: `POST /api/artifacts/generate` → **202** in <1s; poll
`GET /api/artifacts?lessonId=…` every 4s. The new `notes_pdf` job was **claimed 269ms after
creation** (worker kick is healthy — the evaluation's "worker isn't running" hypothesis is
refuted), ran ~9s, and failed `generation_failed` (Gemini 503). The artifact doc flipped to
`failed`, and the panel rendered `failed — retry below` for both cards. The three `podcast_audio`
jobs from the 2026-08-27 evaluation session show the same fast, honest failure pattern — the
evaluation's clicks were on the legacy tab buttons, not these cards.

The async path currently **cannot succeed** for two stacked reasons: the Gemini flap kills the
generation step, and even with healthy Gemini the missing bucket would fail every binary at
upload (`storage_write_failed`).

### Incidental findings (all demo-relevant)

1. **Missing Firestore composite index** — chat history fetch (feature from `cbff51cb`) fails
   with `9 FAILED_PRECONDITION: The query requires an index` on collection group
   `chat_messages` (`studentId` ASC + `createdAt` DESC). The error payload contains the console
   creation URL. Chat persistence is broken until the index exists.
2. **Layout overlap at ~1200px viewport** — the course-list sidebar covers the Reader's format
   tabs; real mouse clicks on "Structured Notes" etc. are intercepted by lesson rows
   (verified via `elementFromPoint`). Programmatic clicks work. A judge hitting this viewport
   will see unclickable tabs.
3. **Log serialization gap** — `job_failed`/`artifact_job_failed` lines render as `{}` in the
   Next dev log; the `{jobId, kind, category}` context object is lost.
4. **Probe load** — `model-activity` (10s) and health (30s cache) each fire Gemini generation
   probes; during a flap this adds steady 503 noise to the log and can look like app failure.

### Effect on Track A ordering

- **A6 (bucket provisioning) promoted to first code action** — it is the confirmed hard blocker
  for every binary artifact; nothing else makes the async path succeed.
- **A1 (timeouts) unchanged priority** — the black-hole is confirmed; 75s server / 90s client
  ceilings turn the legacy path's minute of silence into bounded, honest feedback.
- **A2 (watchdog) demoted in urgency** — the worker is proven healthy in dev; the watchdog still
  ships (kill-path + Cloud Run restarts) but is no longer the suspected culprit.
- **New P0 items:** create the `chat_messages` composite index (one console click or
  `firestore.indexes.json`), and fix the sidebar/Reader overlap so the demo is clickable.
- **New P2 item:** serialize job-failure context into the log message string.

Remaining runbook sections (watchdog/polling contract, single-instance guard, dry-run
results) land with tasks A2–A7 and C1–C4.

## Implementation log

### Provisioning (A6, 2026-08-30)

- Bucket `saint-elms-fire-artifacts` created in `ASIA-SOUTH1` (via `scripts/diag-provision.ts`,
  ADC — gcloud had no credentialed account). Round-trip probe now PASS
  (save/download/delete).
- `roles/storage.objectAdmin` granted on the bucket to the Cloud Run runtime SA
  (`saint-elms-fire-app@…`) and the local ADC identity.
- Firestore composite index `chat_messages (studentId ASC, createdAt DESC)` created
  (`queryScope: COLLECTION`); `/api/chat/history` now returns persisted messages —
  the `FAILED_PRECONDITION` from the diagnosis is resolved.
- `.env.example` now documents `ARTIFACT_BUCKET`.

### A1 — bounded deadlines (2026-08-30)

- New `src/lib/deadline.ts` (`withDeadline`), unit-tested (`src/lib/deadline.test.ts`).
- `multi-format.ts`: `ai.generate` bounded at 75s (`GENERATION_DEADLINE_MS`); artifact
  handlers map a deadline breach to `generation_failed`, the sync route returns a
  displayable 504 "Format generation timed out — please retry".
- `artifact-storage.ts`: GCS write bounded at 30s (`STORAGE_WRITE_DEADLINE_MS`) →
  `storage_write_failed`.
- `tts.ts`: overall podcast synthesis ceiling 120s (`PODCAST_SYNTHESIS_DEADLINE_MS`) →
  `tts_unavailable`.
- Log serialization fix: `job_failed`, `artifact_job_failed`, and the TTS fallback warning
  now log context as message strings (the `{}` gap from the diagnosis).
- Verified: `bun run typecheck` clean; 127 tests pass. Live retry of the failed `notes_pdf`
  artifact: retry endpoint re-enqueues, worker claims in <1s, terminal state within ~15s.
- **End-to-end `ready` achieved** (attempt 4 of the retry loop, during a healthy Gemini
  window): generate → render → GCS save → `ready`, `sizeBytes=10484`.
- Signed-URL minting failed locally (`SigningError: Cannot sign data without client_email` —
  user-ADC cannot V4-sign; same risk on Cloud Run without
  `iam.serviceAccountTokenCreator`). Fix: new owner-only
  `GET /api/artifacts/{id}/stream` route (same authorization as `/url`, bounded read,
  `Cache-Control: private, no-store`); `/url` falls back to it on signing failure. Verified:
  `/url` → stream URL → HTTP 200 `application/pdf`, 10484 bytes, valid 3-page PDF;
  cross-student `studentId` → 403.
- Layout fix: the curriculum sidebar was `sticky top-20` unconditionally; below the `lg`
  breakpoint the single-column grid let the sticky sidebar float over the Reader and
  intercept clicks. Now `lg:sticky lg:top-20` (`LmsDashboardClient.tsx`); real mouse clicks
  on the format tabs verified in the browser.

### A2 — watchdog (2026-08-30)

- `src/lib/job-watchdog.ts`: pure `sweepStaleWork` over an injected store. Lease
  `JOB_LEASE_MS=5min` (above the ~225s worst-case bounded job), `MAX_JOB_ATTEMPTS=3`,
  `ARTIFACT_PENDING_DEADLINE_MS=6min`. Stranded `running` jobs are reclaimed to pending
  under the cap, dead-lettered `job_lost` (new bounded category on jobs and artifacts) at
  the cap; orphaned `pending` artifacts with missing/terminal jobs fail `job_lost`.
- Wiring: `kickArtifactJobs()` (sweep + kick) on generate/retry routes; throttled (30s)
  fire-and-forget sweep inside `GET /api/artifacts`; admin `POST /api/jobs/sweep` for
  forced recovery. Verified live: `{"swept":{"reclaimed":0,"deadLettered":0,"orphanedArtifacts":0}}`.
- 5 unit tests over an in-memory store (reclaim, dead-letter, fresh-job untouched,
  orphaned artifact, live-job untouched).

### A3 — job state on artifact endpoints (2026-08-30)

`GET /api/artifacts/{id}` and the list endpoint now include
`job: { status, attempts, errorCategory }`; the panel's failed line falls back to the job
category.

### A4 — polling discipline (2026-08-30)

`ArtifactPanel` rewritten: backoff 3s→5s→8s while pending; polling survives fetch errors
(notice after 3 consecutive); 4-minute deadline renders "taking longer" with **Stop
waiting** / **Check status**; unknown statuses render neutral, never as pending; stale
closure fixed (functional state updates, server-driven pending detection). New: the panel
keeps the newest `ready` artifact per format, so a failed re-generation no longer hides the
last good download/playback (found live when an external regeneration attempt shadowed the
staged podcast).

### A5 — client bounds on the sync path (2026-08-30)

`MultiFormatViewer`: 90s `AbortController` deadline, elapsed-seconds button label
("Kindling the fire… 34s"), inline error banner replaces the bare `alert()`.

### Podcast staging + Sarvam fix (C1, 2026-08-30)

- Live Gemini generation stayed `generation_failed` through 7 retry attempts (persistent
  503 flap on long prompts). Staged the podcast per Track C1 using the app's own Sarvam
  fallback adapter → `ready`, 1,836,484-byte WAV; streams and plays inline (readyState 4).
- Found and fixed a real fallback bug while staging: Sarvam deprecated `bulbul:v2`
  (400 invalid_request_error) and the v3 catalog replaced the voices — adapter now uses
  `bulbul:v3` with `priya`/`aditya`. The documented TTS fallback was dead-on-arrival
  before this fix.

### Track B — constellation decision + borrows (2026-08-30)

- `docs/ADR-007-relex.md` (Accepted): relex is a visual-design reference pre-submission;
  no Cytoscape/BSL code enters this repo; "Constellation 2.0" spike deferred post-deadline.
- Two borrows implemented in `KnowledgeGraphVisualizer.tsx` (ideas ported, not code):
  - **Hub sizing by degree** — node radius gains `min(6, degree * 1.5)`; verified live
    (connected concepts render r=27–31 vs ~21.5 baseline).
  - **Ego-network fade** — selecting a star fades non-neighbors to 15% opacity with a
    500ms transition (relex dwell-then-fade simplified); verified live (10 faded /
    2 full on a 1-neighbor selection).
- Third candidate (progressive label disclosure) deliberately skipped — two was the cap
  and labels already truncate at 20 chars.

### Track C — demo hardening (2026-08-30)

**C1 staged artifacts:** PDF notes reached `ready` via live generation; podcast staged via the
Sarvam fallback adapter (C1 safety net). Both stream through the owner-only `/stream` route.

**C2 localhost dry run (as Alex):**

| Scenario | Result |
| --- | --- |
| RAG chat round trip + persistence | ✅ 28s grounded answer; persisted (composite index) |
| Constellation: ego fade + hub sizing | ✅ verified live (Track B) |
| Node detail → wiki page → backlink navigation | ✅ page swaps both directions |
| PDF notes → download | ✅ ready; 3-page PDF via stream route |
| Podcast → inline playback | ✅ ready; WAV readyState 4 |
| Failure story | ✅ artifact `generation_failed` + retry; quiz honest failure; sync 504/inline error |
| Deep health | ✅ honest (`ok` in healthy windows, `degraded` under the flap) |
| Quiz success path | ⚠️ blocked by the external 503 flap during the run (verified in Phase 2; failure path verified live) |
| Share → accept as a second student | ⚠️ requires identity swap; covered by Phase 6 isolation tests |

**Demo video script** (record manually once, per Phase 5 insurance):

1. Dashboard hero: 3/4 lessons, 12 stars, voyage 75% — one line on release-gated RAG.
2. Constellation: click a hub star (ego fade), open its wiki page, follow one backlink.
3. Chat: ask about a released concept; point at the grounded-source line.
4. Artifacts: Download PDF (ready), Play episode (ready), then hit Regenerate on one to show
   the bounded pending → failed/ready cycle with provenance ("Built from: …").
5. Failure theatre: with the models flapping, show "Kindling the fire… Ns" terminating into the
   inline error, and a failed chip recovering via retry. Narrate: *every failure terminates*.
6. Quiz: take one if the models are healthy; otherwise show the honest failure card.
7. Close on `/health?deep=true` and the Socratic challenge card.

**C3 single-instance guard (pending approval — touches the live deployment):**

```bash
gcloud run services update saint-elms-fire --region=asia-south1 --max-instances=1
# optional, judging window only:
gcloud run services update saint-elms-fire --region=asia-south1 --min-instances=1
```

**Submission-window checklist:**

- [ ] Deploy current tree to Cloud Run (pending approval).
- [ ] Apply C3 max-instances=1.
- [ ] Re-run the C2 table against the Cloud Run URL (artifacts stream via `/stream` if the
      runtime SA lacks `iam.serviceAccountTokenCreator`; signed URLs otherwise).
- [ ] Retry live podcast/PDF generation once the Gemini flap subsides; staged artifacts remain
      the fallback.
- [ ] Record the demo video from the script above.
- [ ] Revert min-instances after judging if cost matters.

### Verification (this phase)

`bun run typecheck` clean · `bun test` 132 pass / 0 fail · `bun run build` passes.
