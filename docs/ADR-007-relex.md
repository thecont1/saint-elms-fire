# ADR 007: relex as design reference, not extracted library (Phase 7, Track B)

**Status:** Accepted · **Date:** 2026-08-30 · **Context:** hackathon submission 2026-09-01 05:30

## Context

The Second Brain constellation is a core feature: concepts and relationships
extracted at ingestion, visualized as an interactive star chart that grows with
releases. Phase 6 tailored it to the data model (dashed-ring peer nodes, lesson
provenance, per-concept wiki pages with backlink navigation). The question for
Phase 7: the finished `relexplorer` repo (`/Users/home/DEV/tools/relexplorer`)
is a polished network-map explorer — should we extract its graph-rendering core
as a library for the constellation, or treat relex as a visual-design reference?

## Findings (audit of `relexplorer/src`)

- **Rendering core:** Cytoscape.js + `cytoscape-fcose` (`GraphCanvas.tsx`,
  1,781 lines), plus a Three.js globe mode. The renderers take a `GraphModel`
  prop and do **not** import the workbook/CSV ingestion — extraction is
  mechanically possible (~3,769 portable lines; ~2,500 for flat mode).
- **Domain coupling:** the renderer is deeply opinionated about a 3-type node
  taxonomy (`faculty` / `platform` / `vertical`) that drives shape choice
  (ellipse/round-rect/hexagon), degree-based hub sizing, inline wrapped labels,
  filter semantics (`showPlatforms` etc.), and sector-driven color. Mapping
  knowledge-node categories onto it means rewriting most of `buildStylesheet`,
  `recomputeDegreeClasses`, `computeInlineShapeSizes`, and `applyVisibility` —
  i.e., port a monolith, then rewrite its core, then rebuild the Phase 6
  provenance encodings (dashed rings, origin styling, wiki navigation) inside
  Cytoscape styles.
- **Cleanly decoupled parts (~600 lines):** `highlightController.ts`
  (renderer-agnostic hover/pin state machine with dwell-then-fade timing),
  `dynamicLayout.ts` (space-aware sizing/collision math), `egoNetwork.ts`
  (1-hop neighbor computation). These are portable as-is.
- **Licensing:** relex is **BSL 1.0**; this repo is MIT and public for the
  buildathon. The author is the same person, so this is a paperwork concern
  rather than a rights concern — but embedding BSL code in a public MIT
  submission artifact creates a license inconsistency judges will read.
- **Current visualizer:** raw inline SVG with a deterministic golden-angle
  layout (`KnowledgeGraphVisualizer.tsx`), cohesive with the mariner's-chart
  language, legible at the expected scale (tens of nodes, low hundreds max),
  and already integrated with the wiki, filters, and provenance styling.

## Decision

For Phase 7 (pre-submission), treat relex as a **visual-design reference only**.
The current SVG constellation stays. Do not extract `GraphCanvas` or any
Cytoscape code before the submission.

Post-submission, run a "Constellation 2.0" spike: adopt Cytoscape + fcose
directly (MIT/Apache), port the three decoupled libs verbatim
(`highlightController`, `dynamicLayout`, `egoNetwork`), and rebuild the
stylesheet around knowledge-node categories with our provenance encodings,
adding drag/wheel-zoom. Decision gate after the submission.

## Consequences

- ✅ Zero regression risk to a core demo feature inside the deadline window;
  the constellation keeps its Phase 6 data-model affordances.
- ✅ No BSL code enters the MIT submission repo.
- ✅ Cheap, revertible borrows remain available pre-submission if time allows
  (at most two, porting ideas rather than code): ego-network fade on hover
  (~130ms in / 380ms dwell / 500ms fade), progressive label disclosure past a
  zoom threshold, hub sizing by degree.
- 🔁 Revisit in the Constellation 2.0 spike; if that spike proceeds, re-evaluate
  licensing posture for any further relex code at that time.
