# Saint Elms Fire — Phase 0 Baseline Audit

Ground truth on what exists vs. what's cosmetic. Audited against `thecont1/saint-elms-fire` @ `ca6e58c9`.

## TL;DR

The core is **real**: genuine Genkit flows, real Firestore, real Gemini wiring, no mock stores or `DEV_MODE` bypasses. The cosmetic parts are the **quiz questions** (hardcoded client-side), the **"RAG"** (prompt-stuffing, no embeddings/vector store), and **silent fallbacks** that mask Gemini failures. No `/health` endpoint or Cloud Run config yet.

---

## ✅ What's REAL

| Area | Evidence |
|---|---|
| Genkit flows (5) | `src/ai/flows/`: `studentChatFlow`, `ingestCoursewareFlow`, `proactiveSocraticTutorFlow`, `evaluateSocraticFlow`, `multiFormatGenerationFlow` — all genuine `ai.defineFlow()` with typed Zod input/output schemas |
| Flow → API wiring | Next API routes call flows directly: `/api/chat` → `studentChatFlow`, `/api/releases` POST → `ingestCoursewareFlow`, `/api/socratic-tutor` → proactive + evaluate flows, `/api/generate-format` → `multiFormatGenerationFlow` |
| Model string | `src/ai/genkit.ts` — `GEMINI_FLASH = 'gemini-3.7-flash'` is the real default model via `googleAI()` plugin with `GEMINI_API_KEY` env var. Header/footer label is not just UI text. ⚠️ Verify this exact model ID is available on your API key in AI Studio before the demo. |
| Firestore | `src/lib/firestore.ts` — real `@google-cloud/firestore` client (`projectId` from env, `(default)` DB). `DataService` (564 lines) does real CRUD across `courses`, `modules`, `lessons`, `releases`, `knowledge_nodes/edges`, `generated_formats`, `quiz_submissions`, `socratic_sessions`. "Sync Firestore" button triggers real reads. |
| Release gating | Real enforcement: `studentChatFlow` builds corpus only from released lessons; `multiFormatGenerationFlow` throws on unreleased lessons |
| Secrets hygiene | `.env` is gitignored and never committed (only `.env.example` is tracked); no `AIza…` keys or hardcoded secrets in `src/` |
| Genkit Dev UI | `bun run genkit:dev` → `src/ai/dev.ts` registers all flows — screenshot-able for submission |
| Seed data | `/api/seed` writes real seed course/modules/lessons to Firestore (not a mock store) |

## 🟡 What's MOCKED / COSMETIC

| Area | Reality |
|---|---|
| **Quiz questions** | Hardcoded in `QuizModal.tsx` — 3 fixed question banks selected by lesson-title keyword (`raft`/`vector`/else). No Gemini generation. `/api/quiz` POST only records the submission. |
| **"RAG"** | No embeddings, no chunking, no Firestore vector store. `studentChatFlow` serializes the *entire* released markdown corpus into the prompt. Fine at current scale, but it's prompt-stuffing, not retrieval. |
| **Silent fallbacks** | Every flow catches Gemini errors (rate/quota) and returns deterministic canned content (`extractFallbackConcepts`, `generateFallbackFormat`, fixed Socratic question, heuristic evaluation). Caller/UI can't tell live output from fallback. Good demo resilience; risky for judging transparency. |
| **Unreleased-topic guard** | Keyword matching on 4 hardcoded terms (`vector`, `hnsw`, `durable`, `agent`) in `student-chat.ts` — not semantic. |
| **Knowledge graph layout** | Golden-angle formula positioning; `d3-force` is in `package.json` but unused. |
| **Beacon Calls "scheduling"** | `proactiveSocraticTutorFlow` is triggered on page load / refresh — no cron or event trigger. |

## ❌ What's MISSING (backlog for Phases 1–3)

- [ ] `/health` endpoint pinging Firestore + Gemini (needed for demo + Cloud Run)
- [ ] Real quiz generation flow (Gemini-authored questions from lesson content) replacing `QuizModal` hardcoding
- [ ] Chunking + embeddings + Firestore vector search in `ingestCoursewareFlow`; similarity retrieval in `ragChat` (true release-gated RAG)
- [ ] Fix ugly dynamic `import('../../../src/lib/firestore')` inside `evaluate-socratic.ts` — import `db` directly
- [ ] Remove or quarantine scaffolding flows (`example.ts`, `incident-summary.ts`) from the dev UI before screenshots
- [ ] Dockerfile: switch `EXPOSE 3000` → `8080` (Cloud Run convention; `next start` already respects `$PORT`), add healthcheck
- [ ] Cloud Run deploy config + Secret Manager binding for `GEMINI_API_KEY` (`--set-secrets`)
- [ ] (Optional) GitHub Actions CI/CD: build + deploy on push to `main`

## Phase readiness

| Phase | Blocker |
|---|---|
| 1 — Live wiring | `.env` already has `GEMINI_API_KEY` + `GOOGLE_CLOUD_PROJECT` set; needs user-generated service-account JSON + APIs enabled. Code-side items (health endpoint, quiz-gen flow) can start now. |
| 2 — Flow hardening | None — flows already exist as separate `defineFlow()`s; needs embeddings + quiz-gen additions. |
| 3 — Cloud Run | User runs `gcloud` commands; I prepare Dockerfile + command blocks. |
