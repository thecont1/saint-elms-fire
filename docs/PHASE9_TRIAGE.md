# Phase 9 v3 — Krithika triage

Date: 2026-08-31
Branch: `dev/krithika`
Base checkpoint: `cc30b92c`

## Baseline breaks reproduced

The first `bun run typecheck && bun test` stopped at TypeScript with three errors:

1. `src/ai/dev.ts` imported deleted `./flows/student-chat`.
2. `src/ai/genkit.ts` labelled the active model as Gemini 3.7 but exported `gemini-3.5-flash`, producing a duplicate key in `GEMINI_MODELS`.
3. `src/components/StudentChat.tsx` rendered `InfoIcon` without its required `text` prop.

The Cloud Run presentation contract also still asserted registration of the deleted flow.

## Triage fixes

- Registered `guide-chat`, `friend-chat`, and `philosopher-chat` in `src/ai/dev.ts`.
- Removed every code import/reference to `student-chat` and updated the Cloud Run contract test.
- Corrected `GEMINI_FLASH` to `gemini-3.7-flash` and made unknown model ids resolve to the actual `GEMINI_FLASH` bootstrap constant.
- Supplied accessible text to the chat header `InfoIcon`.
- Made all three smoke scripts return a non-zero exit code when their async flow rejects. Previously `.catch(console.error)` printed a failure but exited 0.

## Static verification

- `bun run typecheck`: PASS.
- `bun test`: PASS — 143 tests, 0 failures, 367 assertions across 20 files.
- Orphan search for `student-chat` / `studentChatFlow` in TypeScript: 0 matches.
- `git diff --check`: PASS.

## Flow audit

### Guide — NEEDS WORK

Present and real:

- Reads only visible releases via `getReleasesForStudent`.
- Retrieves only released lesson ids and applies `filterReleasedRetrievedChunks`.
- Prompt contains the exact out-of-lane redirect: `that's beyond what I've released to you — try the Philosopher`.

Contract gaps:

- Refusal is prompt-only, not enforced by output validation or a deterministic guard.
- The zero-indexed-passage branch gives an ingestion message, not the required Philosopher redirect.
- No acceptance test proves an unreleased query yields the redirect with zero unreleased chunks.
- Current smoke data has no visible releases, so both “in-lane” and “out-lane” calls take the same no-release branch.

### Friend — NEEDS WORK

Present and real:

- Queries only `courseware_chunks` with `subjectId == university-support` and `courseId == student-life-and-university-navigation`.
- Does not call the lesson/course RAG retrieval path.
- Prompt contains academic redirect and PII/privacy instructions.

Contract gaps:

- Academic and PII refusals are prompt-only; no deterministic preflight or response assertion exists.
- `subjectId` is hard-coded rather than an explicit flow input, though it is correctly scoped in the query.
- Existing smoke script covers only office hours; it does not test physics refusal, fee grounding, or PII.
- Live smoke failed honestly during a Gemini 503: Sarvam produced schema metadata rather than schema-valid output on all bounded attempts.

### Philosopher — NEEDS WORK

Present and real:

- Uses the same released-lesson retrieval boundary and post-retrieval release filter as Guide.
- Passes `config: { googleSearch: {} }`; `generateWithFallback` forwards `config` to Genkit, and the installed Google GenAI adapter supports this option.
- Prompt requests `[course]` / `[web]` tags, one trailhead, and no unreleased course material.

Contract gaps:

- Provenance and trailhead are prompt-only; the output schema does not validate either.
- The live fallback response had untagged factual claims and did not end in a trailhead question.
- `groundedSources` was empty despite `isGrounded: true`.
- Web-result suppression for unreleased material is only an instruction; no deterministic post-generation check exists.
- Sarvam fallback cannot actually perform Google Search, so fallback provenance needs an explicit degraded-mode contract.

## Smoke results

The scripts are now honest process-level gates:

| Script | Exit | Result |
|---|---:|---|
| `scripts/test-guide.ts` | 0 | Ran, but only no-release branch; not acceptance coverage. |
| `scripts/test-friend-chat.ts` | 1 | Gemini 503; Sarvam failed schema validation after bounded attempts. |
| `scripts/test-phil.ts` | 0 | Served by Sarvam; output exposed provenance/trailhead violations. |

## Triage conclusion

The branch compiles and the full existing unit suite is green. Salvage is real, but none of the three persona contracts is verified. All three flows are `NEEDS WORK`, not `SHELL`: their retrieval/corpus foundations exist, while Tasks 3–5 must add deterministic behavioral enforcement and RED acceptance tests before any merge to `main`.
