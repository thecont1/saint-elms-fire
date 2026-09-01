# Saint Elms Fire

This project began about a week ago as a fallout of an argument I had with my wife Vidya, an ed-tech industry professional. She sees every day how learning platforms fail students. Most ELMS products today are digital filing cabinets — they store content, track grades, and maybe recommend a course. But they don't *teach*. They don't adapt to how a student actually thinks, or help them build a mental model that grows over time.

That argument stuck with me. I'm a documentary photographer turned data scientist — I've spent my career trying to make complex systems legible. And I realized: what if an ELMS could be different? What if it could build a "second brain" for each student — a living map of what they've learned and how concepts connect across their entire degree?

Saint Elms Fire is my implementation of that vision.

### What it does

Saint Elms Fire is a next-generation e-learning management system (ELMS) built on Gemini and Google Cloud. It has four core capabilities:

**1. RAG-grounded teaching over real courseware.** The system ingests courseware custom developed to meet the requirements of an actual programme — B.Sc Physics, Mathematics, Astrophysics as offered by Christ University in Bangalore. It chunks it, embeds it, and retrieves it when students ask questions. When Chetna (a first-year student in our demo) asks "What is resonance in a driven oscillator?", the answer is grounded in her 219 unlocked lessons, not generic internet knowledge. This is retrieval-augmented generation doing actual pedagogical work.

**2. Proactive Socratic tutoring.** The system doesn't just answer — it challenges. If a student holds a misconception, the Socratic Beacon proactively surfaces it. When Chetna thinks resonance is just about amplitude, "Socrates my Philosopher" asks: "But why does the phase shift matter at resonance?" — forcing her to reconcile conflicting ideas. This isn't reactive chat; it's a teaching agent that watches for gaps.

**3. A second-brain constellation.** Every concept a student engages with becomes a "star" in a personal knowledge graph. Ananya has 36 stars as a first-year student. Chetna, further along in her journey, has 236 stars. The constellation grows denser as they progress. Students can see their own intellectual growth visually — and they can see when a peer has engaged with the same concept (shown as a dashed ring around a star). This is the "second brain" made visible.

**4. Multimodal artifact generation.** Students don't just consume — they create. The system can generate structured notes, podcast episodes, and other artifacts from courseware. Chetna can ask for a podcast explaining resonance; the AI produces a script, converts it to audio, and stores it in Google Cloud Storage. This meets students where they are: some learn by reading, others by listening, others by doing.

### How I built it

The architecture is intentionally simple and production-ready:

- **Next.js** hosts the frontend and API routes on **Google Cloud Run**.
- **GenKit** orchestrates AI flows: `guide-chat` for RAG-grounded Q&A, `socratic-tutor` for proactive challenges, `multi-format` for artifact generation, and `ingestion` for courseware processing.
- **Gemini 3.5 Flash** is the primary LLM, with a fallback model configured in GenKit for resilience.
- **Firestore** stores three things:
  - Vector embeddings for RAG retrieval.
  - Graph data for the constellation (stars, peer-sharing relationships).
  - Course releases and student state (which lessons are unlocked for which student).
- **Google Cloud Storage** holds generated artifacts (audio files, PDFs, etc.).
- **Secret Manager** stores API credentials and auth secrets.

The system implements production patterns: a generation-aware circuit breaker to handle API failures, idempotent chat retries to prevent duplicate documents, and structured logging for observability. These aren't demo tricks — they're the kind of hardening you'd expect in a real product.

The entire codebase is public at https://github.com/thecont1/saint-elms-fire. It's built with TypeScript, Bun, and Tailwind CSS, with 250 passing tests covering routing, retrieval, and retry logic.

### Challenges I ran into

**RAG retrieval at scale.** Midway through development, the system failed to retrieve answers for in-syllabus questions when tested against Chetna's full 219-lesson corpus — even though the same questions worked fine against small test fixtures. This was a scale-dependent bug: either the indexing pipeline was silently dropping embeddings in large batches, or the retrieval threshold was tuned too aggressively for a tiny corpus.

I spent an entire phase (Phase 9) triaging and fixing this. The root cause was a combination of factors: the retrieval threshold was over-filtering valid matches as the corpus grew, and there were edge cases in how the ingestion flow handled large batch releases. The fix involved adjusting the similarity threshold, adding a scale-aware regression test with hundreds of lessons, and building a smoke-test script to verify retrieval before any live demo.

**Circuit breaker races and stale state.** Early versions of the generation-aware circuit breaker had race conditions where stale pre-open results could incorrectly affect admission decisions. This was fixed by adding generation tags to admissions and guards to ignore stale results. The fix is now regression-tested with 250 tests passing.

**Idempotent retries.** Chat retries were initially creating duplicate documents in Firestore. This was fixed by validating message IDs and using deterministic document IDs with upserts (`doc(id).set()`). Tests cover both failure→retry and failure→failure durability.

**Time pressure.** This entire project was built in about a week. That meant making hard tradeoffs: the Socratic Beacon is implemented but not yet as sophisticated as the full vision; the courseware is real B.Sc. material but not yet a complete degree program; the multi-student demo is a narrative proof point, not a large-scale stress test.

### Accomplishments that I'm proud of

**End-to-end functionality.** The system works. RAG-grounded chat, Socratic tutoring, constellation visualization, and artifact generation all run end-to-end on Google Cloud. This isn't a mockup — it's a working system.

**Production-grade hardening.** Despite the time pressure, I didn't cut corners on resilience. The circuit breaker, idempotent retries, and structured error classification are all implemented and tested. These are the kinds of patterns you'd expect in a real product, not a hackathon demo.

**The second-brain metaphor made real.** The constellation isn't just a visualization gimmick — it's a real Firestore graph that tracks peer-sharing relationships and grows with the student. Seeing Ananya's 36 stars vs Chetna's 236 stars side-by-side is the clearest proof point I have that the system scales with the learner.

### What I learned

**RAG is only as good as your retrieval tuning.** A similarity threshold that works for a 2-lesson test corpus will fail catastrophically at 200+ lessons. You need scale-aware tests from day one, not as an afterthought.

**Circuit breakers need generation awareness.** A naive circuit breaker that doesn't track which "generation" of requests it's protecting can make wrong decisions when concurrent requests are in flight. Tagging admissions by generation is essential.

**Idempotency is non-negotiable.** Any system that retries AI calls must be idempotent at the data layer. Validating message IDs and using deterministic document IDs is the only way to prevent corruption.

**Demo narratives matter.** The Chetna-vs-Ananya contrast is the strongest visual proof point in the demo. It's not enough to build the system — you have to make the value legible in 30 seconds.

**Google Cloud is production-ready.** Cloud Run, Firestore, GCS, Secret Manager, and Vertex AI all worked smoothly. The deployment experience was straightforward, and the services integrate cleanly.

### What's next for Saint Elms Fire

**More sophisticated Socratic reasoning.** The current implementation challenges misconceptions, but the full vision is a proactive teaching agent that watches for patterns of error across multiple sessions and intervenes strategically.

**Full degree program content.** The current courseware is real B.Sc. material, but it's not yet a complete degree. Scaling to hundreds more lessons across multiple majors is the next content milestone.

**Multi-student stress testing.** The demo shows two students. The system supports many, but it hasn't been stress-tested at scale (e.g., 100+ concurrent students with overlapping constellations).

**Richer artifact types.** Beyond notes and podcasts: generated quizzes, diagrams, interactive simulations. The `multi-format` flow is designed to be extensible.

**Better observability.** Structured logs for routing decisions, circuit-breaker metrics, and retrieval diagnostics are on the Phase 10 roadmap. This is about making the system debuggable in production.

**Open-sourcing the second-brain graph.** The constellation data model could be useful beyond education — any domain where you want to visualize knowledge growth (onboarding, training, research) could benefit.

## Architecture

```mermaid
flowchart LR
    subgraph CloudRun["Cloud Run"]
        Next["Next.js 16 App Router"]
        GenKit["Genkit 1.41 Flows"]
        Gemini["Gemini 3.7 Flash + Sarvam 105B fallback"]
    end
    Firestore[("Firestore (native mode)")]
    GCS[("Google Cloud Storage")]
    Secret[("Secret Manager")]
    Student(["Student / Internet"])
    Student --> Next
    Next --> GenKit
    GenKit --> Gemini
    GenKit <--> Firestore
    Next <--> Firestore
    GenKit --> GCS
    Next --> GCS
    Next --> Secret
    GenKit --> Secret
```

For the editable source with component responsibilities and environment flags, open `artifacts/architecture/architecture.drawio` in [diagrams.net](https://app.diagrams.net/).

## UGC Academic Hierarchy

The schema follows the University Grants Commission CBCS/NEP 2020 framework:

**Programme → Subject → Semester → Course → CourseModule → Lesson**

Every descendant carries its full ancestor chain as flat optional fields (`programmeId`, `subjectId`, `semesterId`), mirroring the `KnowledgeNode` pattern — so any layer can be queried directly without joins.

## Quick start

```bash
# Install dependencies
bun install

# Set up environment
cp .env.example .env
# Edit .env with your GEMINI_API_KEY

# Authenticate with Google Cloud (for Firestore)
gcloud auth application-default login

# Run the dev server
bun run dev
```

Open `http://localhost:3000/student` or `http://localhost:3000/admin`. The app auto-seeds demo courseware on first load.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `GEMINI_API_KEY` | Yes | Google AI / Gemini API key |
| `GOOGLE_CLOUD_PROJECT` | For Firestore | GCP project ID |
| `FIRESTORE_DATABASE_ID` | No | Defaults to `(default)` |
| `SARVAM_API_KEY` | No | Sarvam fallback model key |
| `AUTH_MODE` | No | `demo` (default, local/development only) or `trusted-proxy` (required in production) |
| `DEMO_USER_ID` | No | Demo identity (default: `student-alex`) |
| `DEMO_USER_ROLE` | No | Demo role (default: `admin`) |
| `AUTH_PROXY_SECRET` | Prod | Shared secret for trusted-proxy mode (Secret Manager) |
| `ALLOW_PRODUCTION_SEED` | No | `true` only during initial demo seeding |

See [`.env.example`](.env.example) for the full template.

## Commands

```bash
bun run dev          # Start dev server
bun run build        # Production build
bun run typecheck    # TypeScript type checking
bun run start        # Start production server
bun test             # Run tests
```

## Deployment

Saint Elms Fire deploys to Cloud Run as a private service. See:

- [docs/PHASE3.md](docs/PHASE3.md) — Cloud Run deployment guide
- [docs/PHASE4_PLAN.md](docs/PHASE4_PLAN.md) — Production trust boundaries plan
- [docs/PHASE5.md](docs/PHASE5.md) — Deployment and submission readiness runbook

### Docker

```bash
docker build -t saint-elms-fire .
docker run -p 8080:8080 --env-file .env.production saint-elms-fire
```

The container exposes port 8080 with a healthcheck against `/health`.

## Buildathon constraint checklist

| Constraint | Status |
| --- | --- |
| Gemini 3.5+ model | ✅ Gemini 3.7 Flash (`gemini-3.7-flash`) |
| Google agent framework | ✅ Genkit 1.41 (`@genkit-ai/google-genai`) |
| At least one GCP service | ✅ Firestore (native mode), Cloud Run, Secret Manager |
| Public GitHub repository | ✅ |
| Working demo (live or video) | ✅ https://saint-elms-fire-demo-543329415341.asia-south1.run.app |
