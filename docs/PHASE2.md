# Phase 2: Genkit Flow Hardening

Phase 2 replaces whole-corpus prompt stuffing with chunk-level Firestore vector retrieval and exposes four explicit Genkit flows in the Developer UI:

- `ingestCourseware` — heading-aware Markdown chunking, Gemini embeddings, Firestore vector persistence, and Knowledge Constellation extraction.
- `ragChat` — embeds the question, retrieves nearest chunks, enforces the student release boundary, then generates a cited answer.
- `proactiveTutor` — selects a weak concept or recently unlocked lesson and authors a Socratic challenge.
- `regenerateFormat` — transforms a released lesson or raw Markdown into notes, podcast dialogue, or a video lecture script.

## Firestore vector index

The embedding is reduced to 768 dimensions because Firestore vector indexes support at most 2048 dimensions. Create the required flat index once:

```bash
gcloud firestore indexes composite create \
  --project=saint-elms-fire \
  --database='(default)' \
  --collection-group=courseware_chunks \
  --query-scope=COLLECTION \
  --field-config=field-path=lessonId,order=ASCENDING \
  --field-config=field-path=embedding,vector-config='{"dimension":"768","flat":"{}"}'
```

Index construction is asynchronous. Check status with:

```bash
gcloud firestore indexes composite list \
  --project=saint-elms-fire \
  --database='(default)'
```

## Backfill released courseware

New releases automatically run `ingestCourseware` through `POST /api/releases`. Existing released lessons predate the vector store and must be released/ingested again after the index is ready. Re-ingestion replaces a lesson's previous chunks, so it is safe to repeat.

## Genkit Developer UI

```bash
bun run genkit:dev
```

The standalone entrypoint now loads `.env` before importing flows. Open `http://localhost:4000` and verify the four flow names above.

## Honest failure behavior

There are no canned Phase 2 model fallbacks. Missing indexes, depleted Gemini credits, embedding failures, and generation failures surface as errors. Empty release sets and empty retrieval results are handled without inventing an answer.
