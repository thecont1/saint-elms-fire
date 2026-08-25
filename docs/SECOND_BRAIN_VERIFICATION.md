# Second Brain Verification — Phase 4

Date: 2026-08-25
Branch: `dev/ghazala`

## Root-cause note

The false-positive originated in two independent places:

1. `POST /api/releases` created the Firestore release document with `status: "released"` before calling the ingestion flow. The route caught per-lesson ingestion errors but never changed that persisted release back to a failed state.
2. `AdminReleaseManager` rendered every release record with a hard-coded green `Second Brain Synced` badge. It did not inspect ingestion results or backend state.

That meant an embedding, vector write, or graph write failure could return HTTP 502 while the persisted release still unlocked the lesson and the next UI refresh still displayed green.

## Implemented verification contract

Each new release has five ordered steps for every target lesson:

`parsing → chunking → embedding → vector_write → graph_write`

Each step is persisted as `pending`, `in_progress`, `complete`, or `failed`. The release becomes visible only when every required step for every target lesson is complete. Legacy records without `steps` remain visible and are labelled `Synced (legacy)`.

Vector writes and graph writes use deterministic IDs and explicit Firestore read-back checks before their steps complete. Retry resets only the failed step, retains completed parse/chunk artifacts and per-chunk embeddings, increments `attemptCount`, and upserts the same vector/graph IDs.

## Automated runs

### Baseline before implementation

```text
bun test
23 pass, 0 fail, 55 expect() calls
```

### Stage lifecycle, failure, retry, verification, and legacy compatibility

```text
bun test src/lib/release-integrity.test.ts src/lib/second-brain-ingestion.test.ts
10 pass, 0 fail, 44 expect() calls
```

Covered:

- ordered per-lesson stage records;
- a release cannot finalize with an incomplete step;
- embedding failure is bounded to `rate_limited` and raw provider text is not persisted;
- later stages remain pending after fail-fast;
- retry reuses deterministic chunks and already-created embeddings;
- repeated retry/upsert does not duplicate vector IDs;
- vector read-back mismatch fails `vector_write` and blocks graph writes;
- graph read-back/count mismatch fails `graph_write`;
- legacy released records remain visible but explicitly labelled;
- future or dishonest/incomplete releases remain invisible.

### Full regression suite

```text
bun run typecheck && bun test
TypeScript: pass
33 pass, 0 fail, 99 expect() calls
```

### Production build

```text
bun run build
Compiled successfully
TypeScript finished
/api/releases/[releaseId]/retry emitted as a dynamic route
```

### Diff hygiene

```text
git diff --check
pass
```

## Live integration attempt

`bun run smoke-test` reached the real Gemini endpoint but failed with HTTP 429 `RESOURCE_EXHAUSTED`: the configured AI Studio project's prepayment credits are depleted. Firestore write/read was not reached because the existing smoke script tests Gemini first.

This external billing failure is intentionally not represented as a successful manual end-to-end run. The new ingestion code maps an embedding-side 429 to the bounded `rate_limited` category, persists the failed step/release, keeps it invisible to lesson, RAG, graph, and Socratic reads, and enables `Retry Sync`.

## Manual runbook after credits are restored

1. Trigger a single-lesson release and inspect `releases/{id}` while it runs. Confirm the badge progresses from Pending/In Progress to Released only after all five steps complete.
2. Temporarily configure an invalid/unavailable embedding model. Trigger another release. Confirm:
   - `overallStatus = "failed"`;
   - the embedding step has bounded category `embedding_unavailable` or `rate_limited`;
   - no raw provider message is stored;
   - `/api/graph`, RAG chat, and Socratic targeting exclude the lesson.
3. Restore the model and click `Retry Sync`. Confirm `attemptCount` increments and the release becomes `released`.
4. Query `courseware_chunks` by `releaseId` and `lessonId`; compare count to `chunking.itemsTotal`. Repeat the retry and confirm the count and deterministic document IDs do not change.
5. Query `knowledge_nodes`/`knowledge_edges` by `releaseId`; compare the count to `graph_write.itemsTotal` and confirm the graph appears only after release finalization.

No screenshots are included because the live Gemini dependency was blocked by depleted credits. Do not use the failed smoke attempt as demo evidence; rerun the above after billing is restored.
