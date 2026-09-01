# Phase 10 RAG Verification

Date: 2026-09-01
Branch: `dev/indulekha`
Baseline: `435eeb6f`

## Indexing audit

Commands:

```bash
bun run scripts/audit-rag-index.ts --student=chetna
bun run scripts/audit-rag-index.ts --student=ananya
```

Observed against the configured Firestore demo project:

| Student | Released lessons | Lessons with embeddings | Missing embeddings | Stored vectors |
| --- | ---: | ---: | ---: | ---: |
| Chetna | 219 | 1 | 218 | 105 |
| Ananya | 27 | 1 | 26 | 105 |

Reports:

- `artifacts/rag-index-audit-chetna.json`
- `artifacts/rag-index-audit-ananya.json`

This is a hard demo blocker for live RAG. The persona seeder creates release, graph, quiz, and Socratic fixture records, but does not ingest embeddings for those released lessons. The only indexed lesson is `Units, Dimensions and Scientific Notation` (105 vectors). Do not claim that the three target questions pass until the released corpus is backfilled and the smoke test is green.

## Exact earlier failures

| Question | In released syllabus? | Live result | Status |
| --- | --- | --- | --- |
| `resonance in a driven oscillator` | Yes — `Forced Oscillations and Resonance` | HTTP 200, `isGrounded=false`, 0 chunks, 0 sources | FAIL |
| `fine-structure splitting` | No for Chetna's Sem I–V state; the direct lesson is in unreleased Sem VI | Not sent by smoke script because release gating should refuse it | EXPECTED REFUSAL |
| `The Harmonic Oscillator` | Yes — Differential Equations, Sem II | HTTP 200, `isGrounded=false`, 0 chunks, 0 sources | FAIL |

The Phase 10 source plan expects all three to ground for Chetna, but that conflicts with the canonical Phase 9 persona state (Chetna has completed Sem V; `Spin, Pauli Principle and Multi-electron Atoms`, which directly teaches fine-structure splitting, is Sem VI). The release boundary wins. Either change the smoke question to an in-syllabus Sem V question or explicitly release the Sem VI lesson before expecting grounding.

## Retrieval hardening implemented

- Defaults: `topK=8`, `candidateK=24`, cosine similarity threshold `0.72`.
- Overrides: `RAG_TOP_K`, `RAG_CANDIDATE_K`, `RAG_SIMILARITY_THRESHOLD`.
- Structured `rag_retrieval` log includes released-lesson count, candidates retrieved, release-filter count, threshold-filter count, and returned count.
- Released lessons are queried in batches of up to 30, reducing Chetna's 219-lesson fan-out from 219 vector queries to eight.
- `courseware-rag.test.ts` contains a labeled Chetna-scale 219-lesson regression test.

## Verification evidence

```text
bun test src/lib/courseware-rag.test.ts
16 pass, 0 fail

bun run typecheck
pass

bun run scripts/rag-smoke-test.ts --student=chetna
0/7 passed (all returned HTTP 200 with isGrounded=false and zero chunks)

bun run scripts/rag-smoke-test.ts --student=ananya
0/5 passed (all returned HTTP 200 with isGrounded=false and zero chunks)
```

The production-context helper also printed a non-fatal `gcloud auth print-identity-token --audiences` warning because the active local principal is not a service account. The service was nevertheless reachable and returned application responses; trusted-proxy identity headers were used by the existing helper.

## Required recovery before live demo

1. Backfill courseware chunks/embeddings for every released lesson for Chetna and Ananya through the normal ingestion pipeline. Do not merely alter release records: that would falsify ingestion integrity.
2. Re-run both audit commands; require `missingEmbeddingCount: 0`.
3. Run:

```bash
bun run scripts/rag-smoke-test.ts --student=chetna
bun run scripts/rag-smoke-test.ts --student=ananya
```

4. Preserve the JSON audit reports and smoke-test terminal output as the go/no-go evidence.
