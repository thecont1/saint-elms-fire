# Saint Elms Fire — `dev/aishwarya` Accomplishment Report

Branch `dev/aishwarya` carries the multi-phase engagement that took Saint Elms Fire from a
demo-grade prototype to a live, release-gated, Cloud Run-ready application. This report is the
ground-truth summary of what shipped, verified against real execution (tests, typecheck, build,
and container runtime) rather than intent.

Base: `main` @ `f833da9d` → `dev/aishwarya` @ `34b4df3a`
Delta at PR creation: 6 feature/deploy commits + this planning/report commit — 33 files,
2,375 insertions, and 708 deletions.

---

## Phase 0 — Baseline audit (context)

`AUDIT.md` (already on the branch) established the honest starting point:

- **Real:** 5 genuine `ai.defineFlow()` Genkit flows with typed Zod schemas, a real
  `@google-cloud/firestore` `DataService` across 9 collections, real `gemini-3.7-flash` wiring,
  clean secrets hygiene.
- **Cosmetic:** hardcoded quiz banks in `QuizModal.tsx`; "RAG" that was whole-corpus
  prompt-stuffing (no chunking/embeddings/vector store); silent canned fallbacks masking Gemini
  failures; no `/health` endpoint; no Cloud Run config.

Phases 1–3 below closed the scoped quiz, RAG, health, and Cloud Run backlog. Remaining trust and
consistency work is explicit under Phase 4; the legacy `evaluateSocraticFlow` heuristic fallback
also remains visible technical debt rather than being misreported as removed.

---

## Phase 1 — Live wiring (`a0aaa1b4`, `c39ee3ac`)

**Goal:** replace cosmetic quiz content with live generation and add real health checks.

- `src/ai/flows/generate-quiz.ts` — new `generateQuizFlow`, typed Zod I/O, release-gated via
  `isLessonReleasedToStudent`, honest throw on model failure (no canned fallback).
- `src/app/api/quiz/generate/route.ts` — `GET /api/quiz/generate` with 400 (missing params),
  403 (Access Denied), 404 (missing lesson), 502 (upstream model/data failure). Public error
  messages distinguish quota/billing from auth/permission failures.
- `src/app/api/health/route.ts` — deep `/api/health` running parallel, time-bounded Firestore and
  Gemini probes; returns honest `degraded`/503 without leaking the API key.
- `src/app/health/route.ts` — root health alias.
- `src/components/QuizModal.tsx` — rewired to consume live-generated questions.
- Tests: `src/ai/flows/generate-quiz.test.ts` (schema + gating contract).

**Verified:** during development the Gemini path returned `429 RESOURCE_EXHAUSTED` — traced to a
project-wide depleted-credit billing state (the pre-existing `scripts/smoke-test.ts` hit the same
error via the SDK directly), **not** a regression from this code. Firestore reads proven live.

---

## Phase 2 — Genkit flow hardening + real RAG (`6b796b9e`)

**Goal:** replace prompt-stuffing with chunk-level Firestore vector retrieval and expose four
explicit typed flows.

- Four explicit `ai.defineFlow()` flows with exact names:
  - `ingestCourseware` (`src/ai/flows/ingestion.ts`) — heading-aware markdown chunking, batched
    Gemini embeddings (768-dim), Firestore vector persistence, and knowledge-graph extraction.
  - `ragChat` (`src/ai/flows/student-chat.ts`) — release-gated vector retrieval + Gemini answer,
    grounded-source filtering, no unreleased-topic leakage.
  - `proactiveTutor` (`src/ai/flows/socratic-tutor.ts`) — quiz/graph-driven Socratic challenge
    selection from released courseware.
  - `regenerateFormat` (`src/ai/flows/multi-format.ts`) — structured notes / podcast / video-script
    regeneration from released lessons or raw markdown.
- Backward-compatible aliases retained (`ingestCoursewareFlow`, `studentChatFlow`,
  `proactiveSocraticTutorFlow`, `multiFormatGenerationFlow`) so existing API routes keep working.
- `src/lib/courseware-rag.ts` — pure, unit-tested helpers: `chunkMarkdown`, `isReleaseActive`,
  `filterReleasedRetrievedChunks`, `selectProactiveTarget`, `resolveRegenerationSource`.
- `src/lib/data-service.ts` — `replaceCoursewareChunks` (batched, `FieldValue.vector`) and
  `retrieveCoursewareChunks` (per-released-lesson `findNearest` COSINE search, so unreleased
  documents never enter the query).
- `src/lib/types.ts` — `CoursewareChunk` and related types.
- `src/ai/dev.ts` — fixed a real setup defect: the standalone `tsx` Genkit UI process was not
  loading `.env`, so the Google plugin initialised without `GEMINI_API_KEY` and registered zero
  flows. Now loads env via `@next/env` before importing flows.
- Tests: `src/lib/courseware-rag.test.ts` (chunking, release filtering, proactive selection).

---

## Phase 3 — Cloud Run deployment (`eb460cca`, `b5ca60b8`, `0b4c1200`)

**Goal:** package for Cloud Run, bind Gemini via Secret Manager, keep Firestore on ADC.

- `Dockerfile` — production image on port `8080`, binding `0.0.0.0`, non-root `node` user.
  A real container-build defect was caught and fixed: Bun `1.3.14` crashed with `SIGTRAP` during
  Next/Turbopack builds on **both** Alpine and Debian. Final image uses Bun only for reproducible
  frozen-lockfile install and Node 22 for build + serve.
- `src/app/health/live/route.ts` — shallow `/health/live` process-liveness probe that does **not**
  depend on Firestore/Gemini, so depleted Gemini credits can't restart otherwise-healthy instances.
  The Docker `HEALTHCHECK` targets `/health/live`; deep readiness stays on `/health`.
- `src/ai/flows/evaluate-socratic.ts` — replaced the dynamic Firestore import with the shared
  static `db` client.
- `.dockerignore` hardened; `src/lib/cloud-run-contract.test.ts` regression tests for the container
  contract (port, non-root, healthcheck target, no `EXPOSE 3000`).
- `docs/PHASE2.md`, `docs/PHASE3.md` — deployment runbook including Secret Manager binding for
  `GEMINI_API_KEY` and ADC for the runtime service account.

**Verified (fresh rebuild this session):** container starts, `/health/live` → HTTP 200, Docker
health → `healthy`, deep `/health` → honest HTTP 503 under an intentionally invalid Gemini key
(no secret leakage), then the test container was stopped and removed.

---

## Phase 4 — Plan only (this commit)

`docs/PHASE4_PLAN.md` defines the next phase — **production trust boundaries** — without shipping
code. It covers server-derived identity (`demo` / `trusted-proxy` modes, fail-closed in
production), route-level student/admin authorization, an all-or-nothing retryable release-ingestion
state machine (so lessons can't become released-but-unindexed), Socratic session ownership +
release revalidation, cohort knowledge-graph propagation, and deployment identity config. Nine
TDD-oriented tasks, each with exact files, RED tests, interfaces, compatibility constraints, and
verification commands.

Phase 4 is intentionally left unimplemented pending review of this plan.

---

## Verification summary (this branch, this session)

| Check | Result |
|---|---|
| `bun test` | 23 pass, 0 fail (3 files) |
| `bun run typecheck` (`tsc --noEmit`) | clean |
| `bun run build` | success |
| Docker build + runtime | image builds; `/health/live` 200; healthcheck healthy; `/health` honest 503 on bad key |

## Known external constraints (not code defects)

- Gemini live calls return `429 RESOURCE_EXHAUSTED` until AI Studio prepay credits are topped up.
- The Firestore vector index and full Gemini round-trips can only be confirmed once GCP ADC + a
  funded key are active in the deploy environment.

## Deferred to Phase 4 (see `docs/PHASE4_PLAN.md`)

Caller-supplied `studentId` is currently trusted; admin mutations aren't authorized; releases are
recorded before ingestion completes; active Socratic sessions can outlive release access; and
course/detail GETs return unreleased lesson markdown. Quiz submissions also trust caller-supplied
`isCorrect` and `feedback`, allowing forged mastery evidence. These are the coupled production
risks Phase 4 addresses or must explicitly split into tracked follow-up work.
