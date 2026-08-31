# Phase 10 Demo Script

Target: 8 minutes. Stop at 8:00; do not let artifact generation consume the narrative.

## Preflight (not on stage)

1. Run both index audits. Any missing embedding is a no-go for live RAG.
2. Run the Chetna and Ananya RAG smoke tests. Any failure means use the fallback plan.
3. Open the fallback PDF: `artifacts/demo-fallback-forced-oscillations-notes.pdf`.
4. Open separate Chetna and Ananya tabs before presenting.
5. Confirm health lights, constellation controls, and the student selector respond.

## Flow

| Time | Action | Narration / proof |
| --- | --- | --- |
| 0:00–1:10 | Admin releases one preselected lesson. | Point to the release stages completing: parse, chunk, embed, vector write, graph write. The release is not visible until all stages verify. |
| 1:10–1:45 | Switch to the student and open the released lesson. | “Courseware is released incrementally. The student sees the lesson only after the second-brain write is complete.” |
| 1:45–2:45 | Ask Socrates my Guide one question already green in the smoke test. | Point to `isGrounded`, lesson source, and retrieval count. Do not improvise a question. |
| 2:45–3:35 | Open the proactive Socratic challenge. | “The Beacon is not generic encouragement; it chooses a released concept or a demonstrated weak spot and asks for reasoning.” |
| 3:35–4:40 | Generate PDF notes. | Start the job, narrate asynchronous progress, and cap the wait at 45 seconds. If still pending, show the fallback PDF immediately. |
| 4:40–5:45 | Show the Knowledge Constellation. | Search a concept, zoom, select a hub, point out the category legend and the dashed peer-share ring. |
| 5:45–7:00 | Switch from Chetna to Ananya. | Use the transition paragraph below. Show the metric-card and constellation contrast. |
| 7:00–8:00 | Return to the core claim and close. | “Release boundaries, retrieval, and each student’s graph all derive from the same verified courseware state.” |

## Multi-student transition beat

“Now I’ll switch from Chetna to Ananya. Chetna has completed Semester V, so her constellation is dense with 36 stars and her voyage spans 219 released lessons. Ananya is early in Semester I: 8 coherent stars across 27 released lessons. Sparse does not mean broken. The same release-gated second-brain engine powers both students, and the pre-demo smoke test verifies retrieval at both scales.”

## Rehearsal record

Automated/static rehearsal completed 2026-09-01:

- Fallback PDF generated and validated as a one-page A4 PDF.
- Chetna and Ananya Firestore states audited.
- Full live rehearsal is blocked until the missing-vector backfill is complete.

A full live rehearsal is planned once the missing-vector backfill is complete (static preflight only so far, 2026-09-01). Record actual elapsed times in the table below.

| Rehearsal | Date | Duration | RAG | Artifact | Student switch | Notes |
| --- | --- | ---: | --- | --- | --- | --- |
| Static preflight | 2026-09-01 | n/a | Blocked by missing vectors | Fallback ready | Code inspected | Awaiting backfill and browser rehearsal |

## Pre-demo scripts

| Script | Purpose | Command |
| --- | --- | --- |
| `scripts/audit-rag-index.ts` | Count vectors per released lesson and fail on gaps | `bun run scripts/audit-rag-index.ts --student=chetna` and `bun run scripts/audit-rag-index.ts --student=ananya` |
| `scripts/rag-smoke-test.ts` | Run known-good Guide questions and fail if any are ungrounded | `bun run scripts/rag-smoke-test.ts --student=chetna` and `bun run scripts/rag-smoke-test.ts --student=ananya` |
| `scripts/generate-demo-fallback.ts` | Regenerate the pre-baked PDF fallback | `bun run scripts/generate-demo-fallback.ts` |

## CI checks

- `bun run typecheck`
- `bun test`, including the Chetna-scale retrieval test in `src/lib/courseware-rag.test.ts`
- `bun run build`
- `docker build -t saint-elms-fire:phase10 .`
- Phase 9 routing, circuit-breaker, and chat-idempotency regression tests remain in the standard suite.
