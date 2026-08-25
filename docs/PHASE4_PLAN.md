# Phase 4: Production Trust Boundaries — Implementation Plan

> **For Hermes:** Use the `subagent-driven-development` skill to implement this plan task-by-task. Every production-code task follows strict RED → GREEN → REFACTOR and receives separate spec-compliance and code-quality reviews before the next task starts.

**Goal:** Replace the demo’s caller-controlled identity and partial release workflow with server-derived authorization, auditable role boundaries, and retryable all-or-nothing release ingestion.

**Architecture:** Keep the existing Next.js + Genkit + Firestore stack. Add a small server-only identity adapter with two explicit modes: `demo` for local/buildathon use and `trusted-proxy` for a private Cloud Run deployment behind an identity-aware proxy. API routes derive the acting principal from that adapter; they never trust a body/query `studentId` for student access. Release records become a state machine (`pending → released` or `pending → failed`) so content is visible only after every target lesson has been indexed.

**Tech Stack:** Next.js 16 App Router, TypeScript 7, Bun test runner, Genkit 1.41, `@google-cloud/firestore`, Cloud Run, Secret Manager.

---

## Why this is Phase 4

Phases 1–3 established live Gemini generation, vector RAG, and a deployable Cloud Run container. The remaining production blockers are trust and consistency:

1. Student-facing routes accept caller-supplied `studentId`, allowing cross-student reads/writes.
2. Admin mutations are callable without a role check; the UI role switch is cosmetic.
3. A release is stored as `released` before ingestion. Failed ingestion can leave visible but unindexed courseware.
4. An existing pending Socratic session is returned without revalidating its lesson release.
5. Cohort releases unlock courseware but student knowledge graphs are stored per student, so cohort graph propagation is incomplete.
6. Course/detail reads return full lesson Markdown without release filtering, and quiz submissions trust caller-supplied correctness evidence.

This phase addresses those as one coherent boundary: **who may act, what they may access, and when a release becomes visible**.

## Explicit non-goals

- No OAuth login screen, Firebase Auth UI, Auth0, Clerk, NextAuth, or password database.
- No public/unauthenticated Cloud Run service.
- No redesign of the dashboard.
- No asynchronous job platform, Pub/Sub, Cloud Tasks, or Durable Objects yet.
- No change to the four Phase 2 Genkit flow names or compatibility aliases.
- No deployment or merge as part of this planning PR.

## Security model

### Identity modes

- `AUTH_MODE=demo`
  - Server-controlled principal from `DEMO_USER_ID` and `DEMO_USER_ROLE`.
  - Suitable only for local/demo environments.
  - Incoming role/identity headers and request-body identities are ignored.
- `AUTH_MODE=trusted-proxy`
  - Identity is accepted only from a trusted upstream that also supplies a shared secret from Secret Manager.
  - Required headers:
    - `X-Saint-Elms-Auth-Secret`
    - `X-Saint-Elms-User-Id`
    - `X-Saint-Elms-Role: admin|student`
  - Compare the proxy secret in constant time.
- Production with missing/unknown `AUTH_MODE` fails closed with HTTP 401. Production additionally rejects `AUTH_MODE=demo` with HTTP 401 — demo identity must never serve production traffic (Task 1 covers this with a dedicated RED test using the `AUTH_MODE` / `DEMO_USER_ROLE` symbols).

### Authorization policy

| Operation | Student | Admin |
| --- | --- | --- |
| Read own releases, graph, quizzes, formats, Socratic sessions | Yes | Yes, with explicit target |
| Submit own quiz/Socratic response | Yes | Yes, with explicit target |
| RAG chat / quiz generation / format generation for own released lesson | Yes | Yes, with explicit target |
| Read another student’s state | No | Yes |
| Create courses/modules/lessons | No | Yes |
| Create/retry releases | No | Yes |
| Seed data | No | Yes; additionally disabled in production unless explicitly enabled |
| Read shallow/deep health | Controlled by Cloud Run/IAP service access | Controlled by Cloud Run/IAP service access |

### Compatibility rule

Student routes may continue to receive `studentId` during migration, but the server treats it only as a consistency assertion:

- absent or equal to the authenticated student → use authenticated ID;
- different from authenticated student → HTTP 403;
- admin request without an explicit target → HTTP 400/403 rather than silently defaulting to `student-alex`.

The current demo continues to work with:

```env
AUTH_MODE=demo
DEMO_USER_ID=student-alex
DEMO_USER_ROLE=admin
```

Use `DEMO_USER_ROLE=student` when testing the student-only surface. The role switch must become display/navigation state only; it must never grant server authority.

---

## Firestore contracts

### Release document

Extend `ReleaseEvent` without breaking legacy released records:

```ts
type ReleaseStatus = 'pending' | 'released' | 'failed' | 'scheduled';
type IngestionStatus = 'pending' | 'running' | 'ready' | 'failed';

interface ReleaseEvent {
  id: string;
  courseId: string;
  moduleId: string;
  lessonId?: string;
  studentId: string;
  cohortId?: string;
  status: ReleaseStatus;
  ingestionStatus?: IngestionStatus;
  ingestionAttempts?: number;
  ingestionSummary?: {
    total: number;
    succeeded: number;
    failed: number;
  };
  requestedAt?: string;
  requestedBy?: string;
  releasedAt: string; // retained for legacy compatibility; becomes visibility time
  lastAttemptAt?: string;
  failureCode?: string; // bounded public category; never raw upstream error/secrets
}
```

Visibility predicate:

```ts
release.status === 'released' &&
release.releasedAt <= now &&
(release.ingestionStatus === undefined || release.ingestionStatus === 'ready')
```

Legacy records with `status='released'` and no `ingestionStatus` remain visible.

### Release transition

1. Validate admin identity and course/module/lesson consistency.
2. Create a `pending` release with `ingestionStatus='pending'` and `requestedBy`.
3. Mark the attempt `running`; ingest every target lesson.
4. If all succeed, atomically update to `status='released'`, `ingestionStatus='ready'`, and set `releasedAt` to completion time.
5. If any fail, update to `status='failed'`, `ingestionStatus='failed'`; do not expose the release.
6. `POST /api/releases/:id/retry` repeats from step 3 using deterministic chunk IDs.
7. Duplicate submissions for the same target/student should return/reuse the existing pending/ready release rather than create parallel jobs.

### Cohort knowledge graph decision

Do **not** materialize graph nodes for a literal `cohort-all` pseudo-student. For Phase 4, cohort releases make lessons visible, while graph reads merge:

- the student’s existing nodes/edges; and
- lesson-derived shared nodes/edges stored under a new `knowledge_templates`/`knowledge_template_edges` collection keyed by lesson.

Student mastery remains student-specific. If this migration is too large for the first implementation batch, explicitly defer it behind an acceptance test marked `test.todo`; do not claim cohort graphs are fixed merely because courseware is visible.

---

## Task 1: Add server-derived identity policy

**Objective:** Provide one testable server-only module for identity resolution and authorization.

**Files:**
- Create: `src/lib/request-identity.ts`
- Create: `src/lib/request-identity.test.ts`
- Modify: `.env.example`

**RED tests:**

1. Demo mode ignores incoming identity/role headers.
2. Trusted-proxy mode accepts a valid secret, user ID, and role.
3. Missing/wrong secret returns an authorization error.
4. Production without explicit `AUTH_MODE` fails closed.
5. Production with `AUTH_MODE=demo` fails closed with HTTP 401 (demo identity rejected in production regardless of `DEMO_USER_ROLE`).
6. A trusted-proxy header whose secret differs in length from the configured secret is handled without throwing and returns HTTP 401 — `timingSafeEqual` is only invoked on equal-length buffers; length mismatches short-circuit to a denial.
7. Student scope resolves to the authenticated student.
8. Student requesting another ID receives 403.
9. Admin mutation guard accepts only admin.
10. Admin student-scoped request requires an explicit target.

**Implementation API:**

```ts
resolveRequestIdentity(request, env?): RequestIdentity
resolveStudentScope(identity, requestedStudentId?): string
requireAdmin(identity): RequestIdentity
authorizationResponse(error): Response | null
```

Use `node:crypto.timingSafeEqual` for the trusted secret. Do not log the secret or raw authorization headers.

**Commands:**

```bash
bun test src/lib/request-identity.test.ts
bun run typecheck
```

Expected: targeted tests pass; full typecheck remains clean.

---

## Task 2: Enforce identity on student-scoped APIs

**Objective:** Remove cross-student access through caller-controlled identifiers.

**Files:**
- Modify: `src/app/api/chat/route.ts`
- Modify: `src/app/api/graph/route.ts`
- Modify: `src/app/api/quiz/route.ts`
- Modify: `src/app/api/quiz/generate/route.ts`
- Modify: `src/app/api/generate-format/route.ts`
- Modify: `src/app/api/socratic-tutor/route.ts`
- Modify: `src/app/api/releases/route.ts` (`GET`)
- Modify: `src/app/api/courses/[courseId]/route.ts` (`GET` lesson filtering)
- Modify: `src/app/api/lessons/route.ts` (`GET` lesson filtering)
- Create: route-level tests under `src/app/api/**/route.test.ts` or a shared policy contract test if module mocking is required.

**RED tests:**

- Authenticated student cannot read/write another student’s graph, quiz history, generated formats, chat, releases, or Socratic session.
- Omitted `studentId` resolves to the authenticated student.
- Matching legacy `studentId` remains accepted.
- Admin can target another student only explicitly.
- Student course/detail and lesson-list reads contain only released lessons; unreleased Markdown is never serialized.
- Admin course/detail and lesson-list reads may explicitly request the complete authoring view.
- HTTP mapping is stable: unauthenticated 401, forbidden 403, malformed 400.

**Implementation notes:**

Resolve identity before reading JSON where practical. Replace all `studentId = 'student-alex'` defaults in routes with `resolveStudentScope`. Keep Genkit flow schemas unchanged; routes pass the resolved ID. Treat full lesson Markdown as protected courseware, not public course metadata.

---

## Task 3: Protect administrator mutations and pages

**Objective:** Make the UI role switch cosmetic and enforce real admin authority server-side.

**Files:**
- Modify: `src/app/api/courses/route.ts` (`POST`)
- Modify: `src/app/api/modules/route.ts`
- Modify: `src/app/api/lessons/route.ts` (`POST`)
- Modify: `src/app/api/releases/route.ts` (`POST` and retry)
- Modify: `src/app/api/seed/route.ts`
- Modify: `src/app/admin/page.tsx`
- Modify: `src/components/Navigation.tsx`
- Modify: `src/components/LmsDashboardClient.tsx`
- Add tests for admin guard and production seed lockout.

**Acceptance:**

- Student gets 403 for every admin mutation.
- Admin access is based on server identity, not the client role toggle.
- `/admin` does not expose admin controls to a student principal.
- `POST /api/seed` is disabled in production unless `ALLOW_PRODUCTION_SEED=true` and the caller is admin.
- Public/basic course metadata may remain unchanged, but `GET /api/courses/[courseId]` and `GET /api/lessons` must filter lesson payloads to the resolved student's released lessons. Only an authenticated admin authoring view may return all lesson Markdown.

### Quiz evidence integrity

`POST /api/quiz` currently accepts `isCorrect` and `feedback` from the browser. Authorization alone
does not make those mastery records trustworthy. Phase 4 must choose and test one of these contracts:

1. **Preferred:** persist each generated quiz server-side with its correct answer, return an opaque
   `quizId`, and compute `isCorrect`, feedback, and `weakSpotDetected` on submission; or
2. split this into a named follow-up with a blocking `test.todo` and ensure no downstream feature
   claims client-reported correctness as trusted mastery evidence.

The server must always derive `studentId`; it must never persist caller-supplied correctness as
authoritative evidence without validation.

---

## Task 4: Introduce release state-machine helpers

**Objective:** Define deterministic pure release transitions before changing Firestore writes.

**Files:**
- Create: `src/lib/release-integrity.ts`
- Create: `src/lib/release-integrity.test.ts`
- Modify: `src/lib/types.ts`

**RED tests:**

- A new request is pending and invisible.
- All lesson ingestions succeeding produces `released/ready`.
- Any failure produces `failed/failed`, preserves counts, and remains invisible.
- Retry increments `ingestionAttempts`.
- Future/scheduled release remains invisible.
- Legacy released record without `ingestionStatus` remains visible.

**Implementation API:**

```ts
buildReleaseState(input): ReleaseEvent
summarizeIngestionResults(results): IngestionSummary
finalizeReleaseState(release, summary, completedAt): ReleaseEvent
isReleaseVisible(release, now?): boolean
```

Update `DataService.getReleasesForStudent()` to use the single visibility predicate.

---

## Task 5: Make release ingestion retryable and all-or-nothing

**Objective:** Prevent visible-but-unindexed lessons and support safe recovery.

**Files:**
- Modify: `src/lib/data-service.ts`
- Modify: `src/app/api/releases/route.ts`
- Create: `src/app/api/releases/[releaseId]/retry/route.ts`
- Modify: `src/components/AdminReleaseManager.tsx`
- Add route/service tests.

**DataService additions:**

```ts
getRelease(id)
findEquivalentRelease(target)
createPendingRelease(target, requestedBy)
markReleaseRunning(id)
finalizeRelease(id, summary)
failRelease(id, summary, failureCode)
```

Use Firestore transactions for compare-and-set state transitions. Ingestion can remain sequential in Phase 4; correctness beats throughput. Surface bounded error categories (`embedding_unavailable`, `model_unavailable`, `firestore_write_failed`, `unknown`) rather than raw provider messages.

**HTTP contract:**

- Initial success: 201/200 with `status='released'`.
- Ingestion failure: 502 with a persisted `status='failed'` release and retry URL.
- Concurrent duplicate: 409 or return the existing state; choose one behavior and test it. Preferred: return existing release with 200 for idempotency.
- Retry allowed only for admin and `failed` releases.

**UI acceptance:**

Admin Release Manager displays Pending, Ready, and Failed. Failed entries expose a Retry button; no optimistic “released” display before ready.

---

## Task 6: Revalidate Socratic session ownership and release access

**Objective:** Stop stale or cross-student Socratic sessions from bypassing release boundaries.

**Files:**
- Modify: `src/ai/flows/socratic-tutor.ts`
- Modify: `src/ai/flows/evaluate-socratic.ts`
- Modify: `src/lib/data-service.ts`
- Modify: `src/app/api/socratic-tutor/route.ts`
- Add focused flow/helper tests.

**RED tests:**

- Existing active session is returned only if its related lesson is still released to that student.
- Stale session is closed/cancelled and a new eligible target is selected.
- Evaluation requires session ownership by the resolved student.
- Answered or missing session cannot be evaluated again.

Add a terminal state such as `cancelled` with a bounded reason (`release_revoked`). Do not evaluate a session from body-supplied `sessionId` without loading it and comparing `studentId`.

---

## Task 7: Resolve cohort graph propagation

**Objective:** Make cohort releases produce useful graphs without conflating student mastery.

**Files:**
- Modify: `src/ai/flows/ingestion.ts`
- Modify: `src/lib/data-service.ts`
- Modify: `src/lib/types.ts`
- Modify: `src/app/api/graph/route.ts`
- Add unit tests for merged template + student graph views.

**Acceptance:**

- Cohort ingestion stores lesson-level template concepts once.
- Every cohort student sees those concepts after release.
- Student mastery/evaluation updates remain student-owned.
- Duplicate cohort ingestion is idempotent.
- No `studentId='cohort-all'` nodes appear in student mastery queries.

---

## Task 8: Deployment configuration and documentation

**Objective:** Document the production identity boundary and bind its secret safely.

**Files:**
- Create: `docs/PHASE4.md` after implementation (operational runbook; this file remains the implementation plan)
- Modify: `docs/PHASE3.md`
- Modify: `SETUP.md`
- Modify: `.env.example`
- Modify: `src/lib/cloud-run-contract.test.ts`

**Required configuration:**

```env
AUTH_MODE=trusted-proxy
AUTH_PROXY_SECRET=<Secret Manager binding>
```

Update `gcloud run deploy` to bind `AUTH_PROXY_SECRET=saint-elms-auth-proxy-secret:latest`. Document that Cloud Run’s `--no-allow-unauthenticated` protects the service perimeter but does not provide application-level student/admin identity by itself.

Add contract tests asserting:

- production docs do not recommend `AUTH_MODE=demo`;
- proxy secret is referenced by Secret Manager name, never literal value;
- production deployment remains private;
- no JSON service-account key is copied into the container.

---

## Task 9: Integration verification and review gates

**Objective:** Prove the phase works as a coherent security and consistency boundary.

**Automated gates:**

```bash
bun test
bun run typecheck
bun run build
docker build -t saint-elms-fire:phase4 .
git diff --check
```

Expected: 100% tests pass; typecheck/build/container build succeed.

**Container probes:**

1. Start with `AUTH_MODE=demo`, student role: student APIs work; admin mutations return 403.
2. Start with `AUTH_MODE=demo`, admin role: admin release flow works.
3. Start with `AUTH_MODE=trusted-proxy`, missing/invalid secret: 401.
4. Trusted headers + valid secret: role policy enforced.
5. `/health/live`: 200 independent of Firestore/Gemini.
6. `/health`: honest 200/503 dependency status.

**Security scan:**

- No literal API keys, proxy secrets, service-account keys, or tokens.
- No raw upstream errors returned to clients.
- No route continues to default a student-scoped operation to caller-controlled `student-alex`.
- No admin mutation relies on UI state.

**Review gates (mandatory):**

1. Spec-compliance reviewer: identity matrix, release transitions, Socratic ownership, cohort behavior.
2. Code-quality/security reviewer: header trust, timing-safe comparison, error leakage, Firestore transaction races, route coverage.
3. Integration reviewer after all tasks.
4. Do not merge until all requested GitHub reviewers have responded and every blocking comment is resolved.

---

## Rollout and rollback

### Rollout

1. Deploy with `AUTH_MODE=demo` only to the existing private demo service and verify UI compatibility.
2. Configure upstream identity proxy and Secret Manager secret.
3. Switch a staging revision to `trusted-proxy`; run the role matrix.
4. Migrate/leave legacy release records readable via backward-compatible visibility logic.
5. Enable the production revision only after failed-release retry and cohort behavior are verified.

### Rollback

- Route traffic to the Phase 3 revision.
- Legacy release readers remain compatible because new fields are optional.
- Do not delete failed/pending release records; retain them as audit evidence.
- Rotate `AUTH_PROXY_SECRET` if the proxy boundary is suspected compromised.

## Risks and decisions requiring reviewer attention

1. **Trusted-proxy boundary:** reviewers must verify the header-stripping/injection behavior of the chosen proxy before production. Direct access to the app must remain blocked.
2. **Course metadata leakage:** current course/detail APIs may return unreleased lesson Markdown. Phase 4 should explicitly classify and filter student reads.
3. **Quiz evidence integrity:** current quiz submissions self-report correctness and feedback. Persist issued quizzes and score server-side, or split this as explicit blocked follow-up work; do not label self-reported results trusted mastery.
4. **Synchronous ingestion:** long module releases may approach Cloud Run request limits. Keep synchronous behavior for Phase 4 correctness; measure before introducing a queue in a later phase.
5. **Cohort graph migration:** template graphs are the clean design but materially expand scope. Reviewers may split Task 7 into a follow-up PR, provided the limitation remains explicit and tested.
6. **Demo admin ergonomics:** a single server-configured role means switching student/admin may require two local runs or a deliberate dev-only mechanism. Do not weaken production policy for UI convenience.

## Definition of done

Phase 4 is done only when:

- server-derived identity governs every student/admin API;
- cross-student access and student admin mutations are denied by tests;
- unreleased lesson Markdown is absent from student course/detail and lesson-list responses;
- quiz correctness is scored server-side or explicitly split into blocked follow-up work with no trusted-mastery claim;
- visible releases are fully indexed or legacy-compatible;
- failed ingestion is persisted and retryable;
- active/evaluated Socratic sessions revalidate ownership and release access;
- cohort graph behavior is implemented or explicitly split with a tracked limitation;
- full tests, typecheck, build, Docker verification, security scan, and all code-review gates pass;
- deployment docs use Secret Manager and keep Cloud Run private;
- the PR is approved but not merged without explicit instruction.
