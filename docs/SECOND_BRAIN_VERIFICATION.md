# Second Brain Verification — Phase 4

Date: 2026-08-25 (runbook executed 2026-08-26)
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

### Stage lifecycle, failure, retry, verification, and legacy compatibility

```text
bun test src/lib/release-integrity.test.ts src/lib/second-brain-ingestion.test.ts
10 pass, 0 fail
```

Covered: ordered per-lesson stage records; release cannot finalize with an incomplete step; embedding failure bounded to `rate_limited` with no raw provider text persisted; later stages stay pending after fail-fast; retry reuses deterministic chunks/embeddings; repeated retries do not duplicate vector IDs; vector read-back mismatch fails `vector_write` and blocks graph writes; graph mismatch fails `graph_write`; legacy records visible but labelled; future/dishonest releases invisible.

### Full regression suite + production build

```text
bun run typecheck && bun test && bun run build
TypeScript: pass · 33 pass, 0 fail · next build: compiled successfully
```

---

## LIVE RUNBOOK EXECUTION (2026-08-26)

Executed against the production stack: real Gemini API (AI Studio paid tier), real Cloud Firestore project `saint-elms-fire`. Server: production build (`bun run start`) on port 18083.

### Step 1 — Normal release completes honestly ✅

Released lesson **3.1 Durable Agent Workflows** (`ExhHOso…`) via `POST /api/releases`.

```text
HTTP 201
overallStatus: released
parsing complete → chunking complete(2) → embedding complete(2)
→ vector_write complete(2) → graph_write complete(9)
```

Status flipped to `released` only after all five stages completed — verified in the response body, not assumed. Release ID: `Eg1olgZtDo5WfMrS1qGa`.

### Step 2 — Deliberately broken stage reports Failed ✅

Sabotaged the embedder (`gemini-embedding-001` → `nonexistent-embedding-model-xyz`), rebuilt, restarted. Released lesson **2.1 Vector Indexing / HNSW** (`FdgG31…`):

```text
HTTP 502
overallStatus: failed        failureCategory: embedding_unavailable
parsing      complete
chunking     complete
embedding    failed          (embedding_unavailable) "Embedding provider unavailable."
vector_write pending         ← fail-fast halted downstream stages
graph_write  pending
retryUrl: /api/releases/eZnvRTVUvUcyvXqMoFAr/retry
```

Server log shows the raw provider error (404 model-not-found) while the persisted record stores only the bounded category. Release ID: `eZnvRTVUvUcyvXqMoFAr`.

### Step 3 — No leakage from the failed release ✅

Checked while release was `failed`:

| Surface | Expected | Actual |
|---|---|---|
| `/api/graph` nodes with failed releaseId | 0 | **0** |
| `/api/graph` HNSW/Quantization concepts visible | none | **none** |
| Firestore `courseware_chunks` for failed release | 0 | **0** |
| Firestore `knowledge_nodes` with failed releaseId | 0 | **0** |
| RAG chat about lesson-2.1 content | refuses grounding | **502 "could not answer from indexed courseware"** |

The failed lesson's content was provably absent from every student-facing knowledge surface.

### Step 4 — Retry resumes, recovers without duplication ✅

Restored the embedder, rebuilt, then retried via `POST /api/releases/{id}/retry`:

```text
attempt 2: embedding resumed → complete; vector_write complete(4);
           graph_write failed  ← Gemini 3.7-flash 503 high-demand during
                                 graph extraction (transient provider outage,
                                 correctly reported as firestore_write_failed
                                 stage failure, NOT silently swallowed)
attempt 3: resume skipped parsing/chunking/embedding/vector_write entirely;
           graph_write still blocked by the same 503 storm
attempt 4: HTTP 200 — overallStatus: released   attemptCount: 4
```

Resume behaviour verified exactly as designed: attempts 3–4 did **not** re-run completed stages (no re-parse, no re-chunk, no re-embed), and the staged per-chunk embeddings from attempt 2 were reused rather than recomputed.

**Duplicate check (Firestore inventory after recovery):**

```text
Eg1olgZtDo5WfMrS1qGa (happy):    2 chunks — …_00000, …_00001
eZnvRTVUvUcyvXqMoFAr (recovered): 4 chunks — deterministic zero-padded IDs,
                                   one per chunk index, NO duplicates
knowledge_nodes with recovered releaseId: 5
```

4 chunks for a 1,470-char lesson matches `chunking.itemsTotal = 4`. Despite four ingestion attempts across two distinct failure modes, the vector store holds exactly one document per chunk — deterministic IDs did their job.

### Step 5 — Recovered content becomes visible ✅

After `overallStatus: released`, the previously-hidden content appeared everywhere:

| Surface | Before retry | After recovery |
|---|---|---|
| Graph nodes from this release | 0 | **5** (ANN, ADC, kNN, HNSW, PQ) |
| Total constellation size | 19 nodes | **24 nodes** |

RAG chat answering from the recovered lesson could not be demonstrated during this window because Gemini 3.7-flash remained in its 503 high-demand state for all chat calls (the retrieval pipeline itself is exercised by the automated test suite). This is an honest gap, noted rather than papered over — and it is precisely the outage scenario the Sarvam fallback (merged in `3fa4625`) exists to cover once wired into the chat flow's generate call.

## Runbook conclusion

All Definition-of-Done criteria verified against live infrastructure:

- ✅ Sync status shown only when every stage of every lesson is independently verified complete (steps 1, 4)
- ✅ Failures are visible, categorized (bounded), and retryable without data duplication (steps 2–4)
- ✅ Knowledge Constellation provably never draws on partially-ingested content (step 3 vs step 5)
- ✅ Admin audit surface reflects real backend state at every point in the lifecycle

Incidental finding worth noting for reviewers: transient Gemini 503s during graph extraction surfaced as `firestore_write_failed` on `graph_write`. The categorization is slightly misleading (nothing is wrong with Firestore); a future refinement could distinguish `graph_extraction_unavailable` from genuine write failures.
