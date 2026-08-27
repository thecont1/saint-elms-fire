# Phase 6: The Two Innovations, Delivered — Multimodal Artifacts & the Collaborative Second Brain

> **For Hermes:** Use the `subagent-driven-development` skill. Every production task is RED → GREEN → REFACTOR with separate spec-compliance and code-quality reviews, as in Phase 4.

**Goal:** Turn the two headline innovations from "scripts and a graph" into "artifacts and a living, collaborative second brain":

1. **Multimodal course content that students actually consume** — real podcast audio, real formatted PDFs, on-demand practice quizzes — generated from the student's Second Brain, delivered instantly for any released lesson.
2. **A Second Brain built from three quality-controlled sources** — (a) admin-released, university-approved lessons, (b) university-licensed e-book recommended readings attached by the backend at ingestion, and (c) peer-contributed links/notes that each student individually approves before ingestion.

**The core loop:** Admin releases approved material → e-book readings auto-attach → peers contribute current material → student curates their own brain → **that high-quality personal corpus is what multimodal generation draws from**. The Second Brain is not a side artifact of the course; it is the source corpus for everything the student requests.

**Tech stack:** unchanged core (Next.js 16, Genkit 1.41, Firestore, Cloud Run) plus: Gemini TTS (or Sarvam TTS fallback) for audio, a server-side Markdown→PDF renderer, and Cloud Storage for generated binary artifacts.

---

## Where we are (honest baseline after Phase 5)

| Innovation claim | Current reality |
| --- | --- |
| "Podcast to listen to on the metro" | `multiFormatGenerationFlow` produces a podcast **script** (text). No audio. |
| "Richly formatted PDF as customised notes" | Structured notes as **markdown text** in a viewer. No PDF. |
| "Quiz questionnaire at the dentist's" | ✅ Real Gemini-generated quizzes exist (Phase 2). Closest to done. |
| "Karpathy wiki / second brain grows with drips" | ✅ Knowledge graph extraction at ingestion, release-gated, visualized. Real. |
| "Backend drive adds recommended reading" | ❌ Does not exist. |
| "Students share material; peers accept/reject into their wiki" | ❌ Does not exist. No peer visibility of any kind. |

## Phase 6 non-goals

- No mobile app; the dashboard remains the surface (artifacts are downloadable/streamable for mobile use).
- No real-time collaboration (no CRDTs, no live cursors).
- No social features beyond share → review → accept/reject (no comments, likes, follows).
- No new auth system; peer identity rides on the Phase 4 identity adapter.
- No vendor lock beyond GCP services already in use + Cloud Storage.

---

## Track A — Multimodal artifacts (Innovation 1)

### A1. Artifact storage layer
- New Firestore collection `generated_artifacts`: `{ id, studentId, lessonId, formatType, status: pending|ready|failed, storagePath, mimeType, sizeBytes, createdAt, error? }`.
- Cloud Storage bucket `saint-elms-fire-artifacts`, path `artifacts/{studentId}/{lessonId}/{artifactId}.{ext}`.
- Signed URLs (15 min) minted server-side; never public objects.
- RED tests: release gating (unreleased lesson → 403), cross-student access (student A cannot mint URL for B's artifact).

### A0. Second-Brain-grounded generation (prerequisite for A2/A3)
- `multiFormatGenerationFlow` input gains `corpusScope: 'lesson' | 'second_brain'` (default `second_brain` once Track B lands; `lesson` until then).
- With `second_brain` scope, the source corpus for generation is assembled by vector retrieval over the student's own space for the lesson's concepts: released lesson chunks + `origin:'library'` excerpts + `origin:'peer_share'` accepted material. Provenance list is stored on the artifact (`sources: [{kind, refId}]`) and rendered in the UI ("built from: Lesson 3.2, *Manning ch. 4*, note shared by Priya").
- This is the payoff loop: the better a student curates their brain, the better their custom notes/podcasts get. Tested: two students requesting the same lesson's notes get corpora that differ exactly by their accepted material.

### A2. Podcast audio pipeline
- Extend `multiFormatGenerationFlow` output contract: `podcast_dialogue` gains a second stage — script → TTS → MP3 in Cloud Storage.
- Two-voice dialogue: map HOST/GUEST speaker tags to two TTS voices; concatenate segments server-side.
- Generation is async: API returns `202 { artifactId, status: 'pending' }`; client polls `/api/artifacts/{id}`. (Cloud Run request timeout makes sync generation fragile for 10-min audio.)
- Honest failure: TTS quota/failure → artifact `status: failed` with bounded error category; script text remains available as fallback consumption.

### A3. PDF notes pipeline
- Server-side renderer (`md-to-pdf` route using headless Chromium in the container, or `@react-pdf/renderer` if container size is a concern — decide in Task A3.1 spike, 1 day cap).
- Branded template: course/module/lesson header, concept callout boxes (pulled from the lesson's knowledge nodes), footer with release date.
- `structured_notes` format gains `?as=pdf` — renders the existing generated markdown to PDF, stores as artifact.
- Customisation hook: optional `persona`/`focus` param already exists in the flow; surface it in the UI ("summarise for revision", "expand worked examples").

### A4. Student UX
- `MultiFormatViewer` becomes an artifact hub per lesson: Notes (read / download PDF), Podcast (play inline / download MP3), Quiz (existing), Video script (existing text).
- Artifact status chips: generating / ready / failed-with-retry.
- Everything remains release-gated through the existing boundary — artifacts of unreleased lessons can neither be generated nor fetched.

## Track B — Collaborative Second Brain (Innovation 2)

### B1. University e-book catalog + recommended reading at ingestion
- **Catalog, not hallucination.** New admin-managed collection `library_items`: `{ id, title, authors, type: ebook|chapter|paper, licenseNote, storagePath|url, subjectIds[], excerptAllowed: boolean, addedBy, addedAt }`. Admin CRUD via new `/api/library` routes (admin-only per Phase 4 role matrix). This models the university's licensed e-book access.
- New ingestion stage `recommend` after graph extraction: for each new/updated knowledge node, Gemini performs **retrieval-and-match against the catalog** — embed catalog item metadata (+ excerpt when `excerptAllowed`), rank against node concept/summary, attach top 2–4 as `recommended_readings` `{ nodeId, studentId, libraryItemId, rationale, matchScore }`.
- No open-web URL generation. Every recommendation resolves to a real `library_items` record the university actually holds. Rendered in the constellation node detail panel with license-appropriate access (link, excerpt, or "available in library").
- Where `excerptAllowed`, matched excerpts are chunked + embedded into the student's vector space tagged `origin: 'library'` — so e-book content participates in RAG and downstream generation.
- Release integrity preserved: `recommend` failure is a soft failure (release still completes; readings retry queue), because readings are enrichment, not content. This is an explicit deviation from all-or-nothing — documented and tested.

### B2. Share primitives
- New collection `shared_items`: `{ id, sharerId, cohortId, kind: note|link|artifact|lesson_annotation, title, body (markdown, ≤10KB), sourceLessonId?, createdAt, status: active|withdrawn }`.
- API: `POST /api/shares` (student, own released lessons only), `GET /api/shares?cohort=` (peers see active items), `DELETE` (sharer withdraws).
- Moderation floor: shares are cohort-scoped, size-capped, markdown-sanitized (no raw HTML), rate-limited (N/day per student).

### B3. Accept/reject → personal wiki ingestion
- Peer actions on a shared item: **preview** (rendered markdown + provenance: who shared, source lesson), **accept**, **dismiss**.
- Accept triggers a scoped ingestion: chunk + embed the shared body into the acceptor's own vector space (`courseware_chunks` with `origin: 'peer_share'`, `sharedItemId`) and extract graph nodes/edges tagged `origin: 'peer_share'`.
- The constellation renders peer-derived nodes in a distinct visual style (e.g., dashed ring) — the second brain visibly grows from collaboration.
- RAG chat retrieval now includes accepted peer chunks for that student only. Reject/undo removes chunks + orphaned nodes (idempotent cleanup, tested).
- Trust boundary tests: student A's accept never mutates student B's graph; shared item content cannot escape its cohort; withdrawn items are no longer acceptable but already-accepted copies persist (documented semantics).

### B4. Second Brain wiki view
- Beyond the constellation: a browsable wiki page per concept node — summary, source lessons, recommended readings, accepted peer material, backlinks (edges).
- This is the "Karpathy wiki" reading surface; the graph is the map, the wiki page is the territory.

## Track C — Hardening carried forward
- C1. Async job discipline: a minimal `jobs` collection + in-process worker loop for TTS/PDF (no Pub/Sub yet; document the upgrade path).
- C2. Cost guardrails: per-student daily generation quotas (artifacts + shares), enforced server-side, 429 with bounded message.
- C3. Observability: artifact/share metrics in `/api/model-activity`; failed-artifact retry endpoint mirrors release retry.

---

## Task order (dependency-sorted)

| # | Task | Track | Test-first deliverable |
| --- | --- | --- | --- |
| 1 | Artifact schema + storage adapter + signed URL API | A1 | Access-control REDs |
| 2 | Async job loop + status polling API | C1 | Job lifecycle REDs |
| 3 | `library_items` catalog schema + admin CRUD API | B1 | Admin-only role REDs |
| 4 | Recommended-reading match stage + library excerpt ingestion | B1 | Catalog-match + soft-failure REDs |
| 5 | `shared_items` CRUD + sanitization + rate limits | B2 | Moderation-floor REDs |
| 6 | Accept/reject ingestion into personal wiki + graph tagging | B3 | Cross-student isolation REDs |
| 7 | Second-Brain-grounded corpus assembly for generation | A0 | Corpus-provenance REDs |
| 8 | PDF renderer spike + decision (1-day cap) | A3 | ADR note |
| 9 | PDF notes pipeline + UI download (brain-grounded) | A3/A4 | Golden-file render test |
| 10 | TTS adapter (Gemini TTS primary, Sarvam fallback) | A2 | Fallback + failure REDs |
| 11 | Podcast audio pipeline + inline player (brain-grounded) | A2/A4 | End-to-end artifact test |
| 12 | Wiki page view + constellation source-origin styling | B4 | Render + backlink tests |
| 13 | Quotas + metrics + retry endpoints | C2/C3 | Quota REDs |
| 14 | Docs: PHASE6.md runbook, updated README architecture diagram | — | Clean-clone verification |

Note the reorder: **Track B (corpus quality) now lands before the generation pipelines**, because generation quality is a function of corpus quality. PDFs/podcasts built on a lesson-only corpus are a fallback mode, not the headline.

## Definition of done

- A student on a released lesson can, within one session: download a branded PDF of custom notes, stream a two-voice podcast, and take a generated quiz — all release-gated, all generated from their Second Brain corpus with visible source provenance.
- Ingesting a new release visibly grows the constellation **and** attaches catalog-backed recommended readings (real `library_items`, never invented URLs) to new nodes.
- Two students requesting the same lesson's notes get different artifacts when their accepted peer/library material differs — demonstrably personalised generation.
- Student A shares a note; Student B previews, accepts, and immediately sees new dashed-ring nodes in their constellation and gets RAG answers grounded in the accepted material; Student C who dismissed it does not.
- `bun run typecheck`, `bun run build`, full test suite, and Docker build pass from a clean clone.
- No route trusts caller-supplied identity; all new collections covered by the Phase 4 authorization matrix.
