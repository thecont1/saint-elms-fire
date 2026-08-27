# Phase 6 Runbook: Multimodal Artifacts & the Collaborative Second Brain

Phase 6 delivered the two headline innovations end-to-end (see
[PHASE6_PLAN.md](PHASE6_PLAN.md) for the plan and rationale):

1. **Multimodal artifacts** — branded PDF notes and two-voice podcast audio,
   generated asynchronously from the student's own Second Brain corpus with
   visible source provenance, plus the existing quizzes.
2. **Collaborative Second Brain** — a curated corpus built from released
   lessons, catalog-backed library readings attached at ingestion, and
   peer-shared material that each student individually accepts or dismisses.

## What shipped (by task)

| # | Deliverable | Key modules |
| --- | --- | --- |
| 1 | Artifact records + GCS storage + signed-URL API (owner-only, release-gated) | `src/lib/artifacts.ts`, `src/lib/artifact-storage.ts`, `/api/artifacts/*` |
| 2 | In-process async job loop + status polling | `src/lib/job-queue.ts`, `/api/jobs` |
| 3 | `library_items` catalog, admin-only CRUD | `src/lib/library-catalog.ts`, `/api/library` |
| 4 | Recommended-reading match stage + library excerpt ingestion (soft failure) | `src/lib/reading-recommendation.ts` |
| 5 | `shared_items` CRUD: sanitized markdown, 10KB cap, 10/day rate limit | `src/lib/shared-items.ts`, `/api/shares` |
| 6 | Accept/dismiss/undo with per-acceptor ingestion, cross-student isolation | `src/lib/peer-acceptance.ts`, `src/lib/second-brain-ingestion.ts` |
| 7 | Second-Brain-grounded corpus assembly with provenance (`corpusScope`) | `src/lib/corpus-assembly.ts` |
| 8 | PDF renderer decision: `@react-pdf/renderer` (no Chromium) | [ADR-006](ADR-006-pdf-renderer.md) |
| 9 | PDF notes pipeline: branded template, 202 + poll, download | `src/lib/pdf-notes.tsx`, `src/components/ArtifactPanel.tsx` |
| 10 | TTS adapter: Gemini TTS primary, Sarvam fallback, WAV concat | `src/ai/*` (tts adapter) |
| 11 | Podcast audio pipeline + inline player | `src/lib/artifact-jobs.ts` |
| 12 | Wiki page view + dashed-ring peer nodes in the constellation | `src/lib/wiki.ts`, `/api/wiki/[nodeId]`, `src/components/WikiPageView.tsx` |
| 13 | Quotas (12 artifacts/day), metrics, failed-artifact retry | `src/lib/quotas.ts`, `/api/artifacts/[id]/retry`, `/api/model-activity?metrics=1` |

## Operating the pipelines

### Generating an artifact

```
POST /api/artifacts/generate
  { lessonId, formatType: 'notes_pdf' | 'podcast_audio', persona?, corpusScope? }
→ 202 { artifactId, jobId, status: 'pending' }
```

Poll `GET /api/artifacts/{artifactId}`; when `status: 'ready'`, mint a
15-minute signed URL via `GET /api/artifacts/{artifactId}/url`. `storagePath`
is never serialized to clients. Binary payloads live in Cloud Storage under
`artifacts/{studentId}/{lessonId}/{artifactId}.{ext}`.

- **Quota:** 12 artifacts per student per rolling 24h → `429` with a bounded
  message.
- **Failure:** artifacts fail with a bounded category (`tts_unavailable`,
  `pdf_render_failed`, …). The text script/notes remain consumable as
  fallback.
- **Retry:** `POST /api/artifacts/{artifactId}/retry` — owner-only,
  release-gated, `409` unless the artifact is `failed`. Re-enqueues the same
  job into the same storage path; does not double-count quota.

### Corpus scope and provenance

With `corpusScope: 'second_brain'` (default in the UI), generation retrieves
from released lesson chunks **plus** the student's accepted `origin:'library'`
and `origin:'peer_share'` chunks. Every artifact stores
`sources: [{kind, refId, label?}]`, rendered as "Built from: …" in the
artifact hub. Two students with different accepted material get demonstrably
different artifacts for the same lesson.

### Library catalog and recommended readings

Admins manage `library_items` via `/api/library` (Phase 4 role matrix).
During release ingestion, the `recommend` stage embeds catalog metadata and
matches it against new knowledge nodes — top matches become
`recommended_readings` with rationale and score. **No open-web URLs are ever
generated**; every recommendation resolves to a real catalog record. The
`recommend` stage is a documented soft failure: release still completes if it
fails.

### Peer sharing loop

1. Student shares (`POST /api/shares`) a note/link from a released lesson —
   sanitized markdown, ≤10KB, ≤10/day, cohort-scoped.
2. A peer previews and **accepts** (ingests into *their own* vector space and
   graph, tagged `origin:'peer_share'`) or **dismisses**.
3. Accepted material appears as dashed-ring nodes in the constellation, joins
   RAG retrieval and artifact generation for that student only. Undo removes
   chunks and orphaned nodes idempotently.
4. Withdrawn shares are no longer acceptable; already-accepted copies persist
   (documented semantics).

### Wiki reading surface

The constellation node detail panel links to a per-concept wiki page
(`GET /api/wiki/{nodeId}`): summary, source lessons, recommended readings,
accepted peer material, and bidirectional backlinks that navigate between
concept pages. The graph is the map; the wiki page is the territory.

### Observability

`GET /api/model-activity?metrics=1` adds aggregate artifact counts
(total/pending/ready/failed) and share counts (active/withdrawn) to the model
status payload. Without the flag the endpoint stays cheap for the header
status lights.

## Environment additions

| Variable | Required | Description |
| --- | --- | --- |
| `ARTIFACT_BUCKET` | No | Cloud Storage bucket for generated binaries (default: `saint-elms-fire-artifacts`) |

## Upgrade path

The async job loop is in-process (`jobs` collection + worker kick). Under
multi-instance Cloud Run, migrate to Pub/Sub push or Cloud Tasks; job records
and the 202+poll contract are already shaped for that move.

## Verification

From a clean clone:

```bash
bun install
bun run typecheck   # clean
bun test            # 115 tests pass
bun run build       # production build passes
docker build -t saint-elms-fire .
```
