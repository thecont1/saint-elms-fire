# ADR 006: PDF renderer for generated notes (Phase 6, Task 8)

**Status:** Accepted · **Date:** 2026-08-27 · **Spike cap:** 1 day (decision made in under a day)

## Context

Phase 6 Track A3 needs a server-side Markdown → branded PDF pipeline for
`structured_notes` artifacts, running inside the existing Cloud Run container.
Two candidates from the plan:

1. **`md-to-pdf` (headless Chromium)** — pixel-faithful HTML/CSS rendering.
2. **`@react-pdf/renderer`** — pure-JS PDF layout engine, React component model.

## Findings

- The current container (`node:22-bookworm-slim` runtime) ships **no Chromium**.
  Adding it costs ~300MB image size, extra apt dependencies (fonts, libnss),
  slower cold starts, and a sandboxing/`--no-sandbox` decision on Cloud Run.
- Our input is *our own generated markdown* — headings, lists, bold/code,
  callouts. We do not need arbitrary HTML/CSS fidelity; we need a branded,
  consistent template (course/module/lesson header, concept callouts, footer).
- `@react-pdf/renderer` is pure JS: no system deps, works in the existing
  Node runtime, deterministic output (good for golden-file tests), and the
  template is typed React components consistent with the rest of the codebase.

## Decision

Use **`@react-pdf/renderer`** with a small internal markdown-block parser
(`src/lib/pdf-notes.tsx`) that maps our generated markdown subset to template
components. No Chromium enters the container.

## Consequences

- ✅ No container size/cold-start regression; Docker build unchanged.
- ✅ Deterministic rendering → testable without image diffing.
- ⚠️ Markdown support is a curated subset (headings, paragraphs, lists, code,
  bold/inline-code, blockquote callouts). Exotic markdown degrades to plain
  paragraphs — acceptable because we control the generator prompt.
- 🔁 Revisit if a future phase needs Mermaid diagrams or full HTML fidelity;
  at that point add a dedicated render service rather than fattening this container.
