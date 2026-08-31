# Phase 10 Live-Demo Fallback Plan

Print or keep this file open next to the demo.

## 1. RAG audit or smoke test fails

Trigger: any missing embedding, non-200 response, zero retrieved chunks, `isGrounded=false`, or no grounded source.

Action:

1. Do not present live RAG as working.
2. State plainly that preflight rejected the live path.
3. Show the last verified answer/screenshot if one exists; otherwise skip the answer rather than fabricate one.
4. Continue with the constellation and pre-generated PDF.
5. After the demo, backfill through the real ingestion flow, then re-run both audits and smoke tests.

Known current condition (2026-09-01): Chetna is missing vectors for 218/219 released lessons; Ananya is missing 26/27. Live RAG is presently a no-go.

## 2. Artifact generation exceeds 45 seconds or fails

1. Use the existing pending/timeout/retry UI once.
2. At 45 seconds, stop waiting.
3. Open `artifacts/demo-fallback-forced-oscillations-notes.pdf`.
4. Say: “This is a pre-generated output from the same notes renderer; I’m using it because the live generation job exceeded the demo time budget.”
5. Do not imply the timed-out job completed.

Regenerate fallback before the demo:

```bash
bun run scripts/generate-demo-fallback.ts
pdfinfo artifacts/demo-fallback-forced-oscillations-notes.pdf
```

Expected: one A4 page, unencrypted, non-zero file size.

## 3. Student switch lags or shows stale data

1. Do not switch repeatedly.
2. Use the already-open Chetna and Ananya tabs.
3. Narrate the contrast from verified values: Chetna 219 released lessons / 36 stars; Ananya 27 released lessons / 8 stars.
4. If either tab is stale, show pre-captured screenshots only if they are labeled with capture time.
5. Skip the live switch rather than showing mixed-persona data.

## 4. Constellation controls lag

1. Reset zoom once.
2. Search a preselected concept rather than panning through the full graph.
3. If the graph remains unresponsive, use the metrics card plus a screenshot and continue.

## Go/no-go card

Live demo is GO only if all boxes are true:

- [ ] Chetna index audit: zero missing lessons.
- [ ] Ananya index audit: zero missing lessons.
- [ ] Chetna smoke test: all questions pass.
- [ ] Ananya smoke test: all questions pass.
- [ ] Typecheck, full tests, Next build, Docker build pass.
- [ ] Fallback PDF opens.
- [ ] One human 8-minute rehearsal completed.
