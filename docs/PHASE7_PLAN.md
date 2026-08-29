# Phase 7: From Documented to Demoable — Reliable Generation & the Constellation Decision

**Deadline:** hackathon submission **Tuesday 2026-09-01, 05:30**. This phase is scoped to fit
inside that window: Track A is mandatory, Track C is expected, Track B is deliberately minimal.

**Goal:** Close the gap the Phase 6 evaluation exposed — "the plan says done, the demo hangs" —
by making **every generation path terminate in bounded time**: either `ready` fast, or visibly
`failed` with a bounded category and a working retry. No spinner in the app may be capable of
spinning forever. Secondary goal: settle the relex question with an ADR and borrow only what is
cheap and high-value for the constellation.

---

## Honest baseline (code audit, 2026-08-30)

The evaluation tested as Alex on released lesson 1.1 and saw "Kindling the fire..." never
resolve for either notes or podcast. A code audit reveals this is **two distinct broken paths**,
and the one observed live is not the one the evaluation suspected:

| # | Finding | Evidence |
| --- | --- | --- |
| 1 | **The live hang is the legacy sync path.** The "Generate structured notes" / "Generate podcast dialogue" buttons (`MultiFormatViewer.tsx:220-238`, spinner "Kindling the fire..." at `:230`) POST to `/api/generate-format`, which calls `multiFormatGenerationFlow` synchronously (`src/app/api/generate-format/route.ts:51`). The Genkit `ai.generate()` call has **no timeout**, and the client `fetch` has **no timeout** — a slow/hung Gemini call spins both ends forever. | `MultiFormatViewer.tsx:53-86`, `generate-format/route.ts:30-73` |
| 2 | **The async artifact pipeline (PDF/audio cards) has its own failure modes.** Jobs run only via a fire-and-forget `kick()` from the route handler (`job-queue.ts:112-127`, singleton at `artifact-jobs.ts:174-186`). There is **no watchdog**: a job left in `running` (process reload, crash, hung dependency) is never reclaimed — `claimNextPending` only selects `pending`. | `src/lib/job-queue.ts`, `src/lib/data-service.ts:1216-1226` |
| 3 | **Client polling is fragile.** `ArtifactPanel` polls every 4s fixed; on any non-2xx or fetch error it returns **without rescheduling** (`ArtifactPanel.tsx:40,54`), permanently freezing the UI in stale state. No backoff, no overall deadline, unknown statuses render as `pending`, and the Generate button is disabled while `pending` — a stuck artifact has no escape hatch. The `refresh` callback also reads a stale `artifacts` closure. | `src/components/ArtifactPanel.tsx:37-57,134,157` |
| 4 | **Generation steps can hang individually.** `ai.generate()` (no timeout), GCS `file.save()` (no timeout, no credential probe, no dev fallback), per-segment TTS (has a 30s cap — the one bounded step). | `multi-format.ts:101-104`, `artifact-storage.ts:20-36`, `ai/tts.ts:86-96` |
| 5 | **Failure detail never reaches the client.** `GET /api/artifacts/{id}` returns only artifact status + category; job `errorCategory`/`attempts` live on `/api/jobs/{id}`, which the client never polls. | `src/app/api/artifacts/[artifactId]/route.ts:20-29` |
| 6 | **Environment gap:** `.env` has Gemini/Sarvam/Firestore keys but no `ARTIFACT_BUCKET` (defaults to `saint-elms-fire-artifacts`) and no evidence the bucket exists or that local ADC can write it. `.env.example` doesn't document it either. | `.env`, `.env.example`, `artifact-storage.ts:20-29` |

**Consequence:** Phase 7 is not a feature phase. It is a reliability phase with a demo
hardening tail. Everything is judged by one question: *does the demo terminate gracefully under
every failure we can provoke?*

## Phase 7 non-goals

- No Pub/Sub / Cloud Tasks migration (documented upgrade path stays as-is; single-instance guard instead).
- No constellation rewrite, no relex extraction, no new graph library before submission.
- No new features in chat/quiz/Socratic/wiki/share flows beyond bug fixes found while testing.
- No new auth work; identity layer from Phase 4 is unchanged.

---

## Track A — Reliable generation (P0, the whole point of Phase 7)

### A0. Diagnose session — reproduce with the network tab open (½ day)

Before changing code, confirm which path fails and why, per the evaluation's suggestion.
Protocol, as Alex on lesson 1.1, dev tools → Network open, server logs tailing:

1. **Legacy path:** click "Generate structured notes" (tab button). Expected observations:
   - `POST /api/generate-format` stays `(pending)` in the network panel indefinitely → Genkit
     call hang (Finding 1). Note elapsed time; >90s is effectively a hang for demo purposes.
   - If it *does* resolve after 60–120s, the path is "slow", not "hung" — still needs a
     bounded client experience (A5) but changes priority slightly.
2. **Async path:** click "Generate" on the PDF Notes card. Expected observations:
   - `POST /api/artifacts/generate` → `202 {artifactId, jobId}` quickly.
   - `GET /api/artifacts?lessonId=…` every 4s. Watch the artifact status.
   - Server logs: `job_failed` / `job_drain_error` lines (from `job-queue.ts:99,119`).
   - Firestore console: inspect the `jobs` doc. `status: 'running'` with old `startedAt` →
     handler hang (Gemini or GCS). `status: 'pending'` forever → worker never ran (kick lost).
     `status: 'failed'` with category but UI still spinning → client-side render bug (Finding 3).
3. Repeat for Podcast Audio.
4. Check the GCS premise directly: from a scratch script with the same ADC, write + read one byte
   to `artifacts/…` in `saint-elms-fire-artifacts`. If this fails, half of Track A is explained.

Deliverable: a "Diagnosis" section appended to the Phase 7 runbook stating the confirmed root
cause(s) per path, with request timings. This section gates the ordering of A1–A7.

### A1. Server-side timeouts on every external call (½ day)

- Wrap the Genkit `ai.generate()` call used by `multiFormatGenerationFlow` and the artifact
  handlers in a deadline (target: 75s for long-form generation). On timeout, throw the bounded
  category `generation_failed` (artifacts) / return 504-style bounded error (sync route).
- GCS `file.save()` wrapped in a 30s deadline → `storage_write_failed`.
- TTS already has per-segment 30s caps; add an overall podcast-synthesis ceiling (e.g. 120s).
- RED tests first: fake slow dependency → handler fails with the right category within the
  deadline; never leaves the job `running`.

### A2. Job watchdog + reclaim (1 day)

The core invariant: **no job may be unobservable.** Single-instance semantics make this cheap:

- `claimNextPending` becomes lease-aware: a job counts as claimable if `status == 'pending'`, or
  `status == 'running'` with `startedAt` older than the lease window (e.g. 3 min) — i.e. the
  previous holder died. `attempts` increments on every claim; at max attempts (3) the job goes
  `failed` and the artifact goes `failed` with `job_lost` (new bounded category).
- Artifact-side sweep: any artifact `pending` older than the deadline whose job is
  missing/terminal → `failed` with `job_lost`. Clients must never observe a permanent pending.
- Sweep triggers: every `kick()`, plus an opportunistic cheap sweep inside
  `GET /api/artifacts?lessonId=…` (the poll the client is already making), plus a dev/admin
  `POST /api/jobs/sweep` for forced recovery and demos.
- RED tests: stranded `running` job reclaimed after lease; reclaimed job failing at max attempts
  becomes artifact `failed` + retryable; poll-triggered sweep flips an orphaned pending artifact.

### A3. Surface job state on the artifact endpoint (¼ day)

- `GET /api/artifacts/{id}` (and the list endpoint) include `job: { status, attempts,
  errorCategory }` when present. The UI should never have to guess why something is pending.
- Keep the bounded-categories-only rule (no raw upstream messages serialized).

### A4. Client polling discipline in ArtifactPanel (½ day)

- Polling continues on **every** outcome: backoff 3s → 5s → 8s cap while pending; on network
  error keep polling with a consecutive-error counter; after 3 consecutive errors show a notice
  ("Waiting on the server — still trying…") instead of silently freezing.
- Overall deadline per generation (e.g. 4 min): after it, render a distinct "taking longer than
  expected" state with **Stop waiting** and **Check status** actions; the artifact itself keeps
  running server-side (watchdog owns its fate).
- Unknown/unexpected statuses render as a neutral "unknown — refresh" state, never as pending.
- Fix the stale-closure `refresh` (use a functional set or include `artifacts` correctly), and
  keep the Generate button available for stuck `pending` artifacts (it becomes "check/retry").
- RED-ish: component-level tests for the state machine (pending → ready / failed / deadline),
  or, if time-boxed, a scripted fetch-mock unit test of the polling hook.

### A5. Bound the legacy sync path (½ day)

- Client: `AbortController` deadline on `POST /api/generate-format` (90s), elapsed-time feedback
  in the button ("Kindling the fire… 34s"), and an inline error state on timeout/502 instead of
  only `alert()`.
- Server: the A1 timeout applies; route returns a bounded 502/504-style error with a message the
  UI can display verbatim.
- Decision note (record in runbook): text formats stay synchronous because they're the fast path
  when Gemini is healthy; PDF/audio stay async. Both now terminate.

### A6. Storage environment: verify or provide (¼–½ day)

- Verify the bucket `saint-elms-fire-artifacts` exists, and that both local ADC and the Cloud
  Run runtime service account can write/read it (`gcloud storage buckets describe`, IAM check).
  Provision + grant if missing — this is a demo blocker, not a nicety.
- Add `ARTIFACT_BUCKET` to `.env.example` with a comment.
- Optional (only if A0–A5 land early): `ARTIFACT_STORAGE=local` adapter writing to a
  gitignored `.artifacts/` dir served by a local route, so the pipeline is testable without GCS.
  Time-box 3h; cut without mercy.

### A7. Golden-path + failure-injection verification (½ day)

A scripted end-to-end check (bun script or test) that exercises the full contract twice:

1. **Happy path:** generate `notes_pdf` and `podcast_audio` for lesson 1.1 → poll → both `ready`
   → signed URLs download/play → `sources` provenance non-empty.
2. **Failure path:** force a failure (e.g. temporarily bogus bucket env) → artifact reaches
   `failed` with a bounded category **within the deadline** → `POST /api/artifacts/{id}/retry`
   re-enqueues and succeeds once the env is restored → quota not double-counted.
3. **Kill path:** start a job, kill the server mid-run, restart → watchdog reclaims → terminal
   state reached without human intervention.

Then repeat 1–2 against the **deployed Cloud Run URL** (Track C), not just localhost.

---

## Track B — The constellation: relex decision (P1, deliberately small)

### B1. ADR-007: relex is a design reference for Phase 7 — do not extract

Findings from auditing `/Users/home/DEV/tools/relexplorer`:

- Its renderer is Cytoscape.js + fcose (`GraphCanvas.tsx`, 1,781 lines) and is **not** coupled
  to workbook parsing — the renderers take a `GraphModel` prop. Extraction is *possible*.
- But it is deeply coupled to a **3-type domain taxonomy** (faculty/platform/vertical) that
  drives shape choice, degree-based sizing, hub classification, inline labels, filter semantics,
  and sector colors. Mapping our knowledge-node categories onto it means rewriting most of
  `buildStylesheet`, `recomputeDegreeClasses`, `computeInlineShapeSizes`, and `applyVisibility`
  — i.e., you'd port a monolith and then rewrite its core.
- The genuinely decoupled, reusable parts are ~600 lines: `highlightController.ts`,
  `dynamicLayout.ts`, `egoNetwork.ts`.
- Licensing note: relex is **BSL 1.0** while this repo is MIT and public for the buildathon.
  Copying BSL code into it creates a license inconsistency in a submission artifact. (The author
  is the same person, so this is a paperwork concern, not a rights concern — but judges read
  repos.)

**Decision:** the current SVG constellation stays. It was purpose-built for this data model in
Phase 6 (dashed peer rings, lesson provenance, wiki navigation, origin styling), is cohesive
with the mariner's-chart language, and is legible at the expected scale (tens of nodes).
Rewriting it in Cytoscape days before submission risks the exact "documented vs demoable" gap
this phase exists to close.

### B2. Cheap, high-value borrows (only if Track A finishes with ≥6h spare)

Pick at most two, port ideas (not code) into `KnowledgeGraphVisualizer.tsx`:

1. **Ego-network highlight** — on node hover/select, fade non-neighbors to ~15% opacity
   (relex's dwell-then-fade pattern: ~130ms in, ~380ms dwell, ~500ms fade). ~60 lines against
   the existing edge list.
2. **Progressive label disclosure** — labels appear past a zoom threshold; reduces clutter as
   the graph grows.
3. **Hub sizing by degree** — node radius scales with edge count (already have the data).

Each is additive, revertible, and touches no data flow. Cut entirely if Track A slips.

### B3. Post-submission backlog (recorded, not scheduled)

"Constellation 2.0" spike: adopt Cytoscape + fcose directly (MIT/Apache), port relex's three
decoupled libs verbatim, rebuild the stylesheet around knowledge-node categories with our
provenance encodings, and add drag/wheel-zoom. Decision gate after submission.

---

## Track C — Demo & submission hardening (P1)

### C1. Pre-staged fallback artifacts (½ day)

Generate and store known-good PDF + podcast artifacts for lesson 1.1 **ahead of the demo** so
the hub can show `ready` states, provenance, download and playback even during a Gemini capacity
blip — consistent with the Phase 5 fallback posture. Live generation remains the demo; staged
artifacts are the safety net, and they double as the fixture for A7's happy-path assertions.

### C2. End-to-end dry run as Alex (½ day)

Scripted scenario checklist, run on **both** localhost and the Cloud Run deployment:

- RAG chat on a released lesson; refusal on unreleased topic.
- Quiz generation + submission on lesson 1.1 (confirmed working in Phase 2 — re-verify).
- Constellation → node detail → wiki page → backlink navigation.
- Share a note as student B → accept as Alex → dashed-ring node appears → RAG answer uses it.
- Notes PDF: generate → ready → download. Podcast: generate → ready → inline playback.
- Failure story: force one failure live, show the bounded error + retry → success. (A failure
  that terminates gracefully is a *stronger* demo than pretending nothing fails.)
- `/health?deep=true` honest status before and after.

Record a fresh demo video at the end of the dry run (judging-window insurance per Phase 5).

### C3. Cloud Run single-instance guard (¼ day)

The in-process job loop assumes one instance. For the judging window:
`gcloud run services update saint-elms-fire --region=asia-south1 --max-instances=1` (and
optionally `--min-instances=1` to kill cold starts). Document in the runbook; the upgrade path
to Cloud Tasks/Pub-Sub remains as written in PHASE6.md.

### C4. Docs (¼ day)

`docs/PHASE7.md` runbook: confirmed root causes (from A0), the new timeout/watchdog/polling
contract, environment additions, single-instance guard, dry-run results. Update README
architecture note if the job loop description changes. `ARTIFACT_BUCKET` into `.env.example`.

---

## Task order (priority-sorted, with time boxes)

| # | Task | Track | Priority | Test-first deliverable |
| --- | --- | --- | --- | --- |
| 1 | A0 Diagnose session (network tab + Firestore job docs + GCS probe) | A | P0 | Root-cause notes in runbook |
| 2 | A1 Timeouts on Genkit + GCS + synthesis ceiling | A | P0 | Slow-dependency REDs |
| 3 | A2 Watchdog: lease reclaim + artifact sweep + `/api/jobs/sweep` | A | P0 | Stranded-job REDs |
| 4 | A4 Polling: backoff, keep-alive on error, deadline state, stale-closure fix | A | P0 | Polling state-machine tests |
| 5 | A3 Job state on artifact endpoints | A | P0 | Contract test |
| 6 | A5 Sync path bound: client AbortController + server timeout + elapsed UI | A | P0 | Timeout RED |
| 7 | A6 Bucket verify/provision + `.env.example` | A | P0 | Byte round-trip script |
| 8 | A7 Golden-path + failure + kill verification script | A | P0 | Passing script, both paths |
| 9 | C1 Pre-staged fallback artifacts | C | P1 | Ready artifacts in prod |
| 10 | C3 Max-instances=1 guard | C | P1 | Runbook entry |
| 11 | C2 Full dry run on localhost + Cloud Run; fresh demo video | C | P1 | Checklist + video |
| 12 | C4 Runbook + docs | C | P1 | PHASE7.md |
| 13 | B1 ADR-007 (relex decision) | B | P1 | `docs/ADR-007-relex.md` |
| 14 | B2 Constellation borrows (max 2, only if ≥6h slack) | B | P2 | Visual check |

Cut line: if tasks 1–8 slip past Monday midday, drop 14 and 9, keep the dry run honest about
what works, and lean on the demo video.

## Definition of done

- On released lesson 1.1, as Alex: notes PDF and podcast audio each reach `ready` (download /
  inline playback works) **or** reach `failed` with a bounded category and a retry button that
  demonstrably recovers — within the documented deadline. Verified on localhost **and** Cloud Run.
- No UI state exists that can spin forever: every waiting surface has a timeout, an escape
  hatch, and honest messaging. Killing the server mid-job cannot strand an artifact.
- Failure injection (bogus bucket / killed process / Gemini timeout) produces the visible
  failure + retry flow end-to-end.
- Constellation decision recorded (ADR-007); no relex code in the repo before submission.
- Dry-run checklist green on both environments; fresh demo video recorded.
- `bun run typecheck`, `bun test`, `bun run build`, Docker build all pass; PHASE7.md runbook
  reflects reality, including anything that was cut.

## Risks & mitigations

| Risk | Mitigation |
| --- | --- |
| Gemini capacity blips during demo (seen twice already in health probes) | C1 staged artifacts, C2 fresh video, bounded failures everywhere |
| GCS bucket/permissions missing → all binary artifacts fail | A0 probes it first; A6 provisions; failure path is itself demoable |
| Watchdog changes destabilize the happy path | RED-first tests (A2) + A7 re-runs the full contract |
| Time-box slip | Hard cut line above; Track B is decorative; Track C partially cuttable |
| Multi-instance Cloud Run silently breaks the job loop | C3 max-instances=1 for judging window; upgrade path documented |
