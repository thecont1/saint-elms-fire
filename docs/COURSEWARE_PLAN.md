# Courseware Completion Plan v2

**Status snapshot:** 2026-08-31, 21:50 IST.
**Branching model:** All new work on `content/wp-fdg` (feature branch), cut from `main` after PR #8 merge. Open a PR per work package; merge when verified. **Never touch `src/` in this branch.**

---

## 1. What is done (as of 2026-08-31)

- **Programme manifest (WP-A):** 71 PDF rows transcribed, 17 editorial corrections listed, option rules for Sem 5/6 captured.
- **Editorial corrections register (WP-A follow-up):** 17 lessons fixed in place across numerical-methods, abstract-algebra, QM, atomic-and-molecular, nuclear, linear-algebra, solid-state.
- **STEM-foundation courses (WP-B, 42 lessons):** Bridge Physics, Integral Calculus, Thermal Physics & Statistical Mechanics, Introductory Algebra, Calculus using Python, Basic Electronics.
- **Physics labs (WP-C, partial):** 13 complete labs (78 lessons), 1 partial (Electronic Instrumentation L1–L2).
- **Statistics:** 122 authored lessons, ~2.0 MB total, all on `main` post-merge.

**Note on frontmatter:** Existing lessons use `***` delimiters. **Step 0 below must verify parser acceptance before any new authoring.**

---

## 2. Step 0 — Parser verification (mandatory, 30 min)

Before any new courseware is written:

1. Confirm the Elms ingestion pipeline (admin upload + seed path) accepts `***` frontmatter delimiters.
2. If it does: proceed with the existing convention.
3. If it does not: **stop** and patch the parser to accept `***` (preferred) or migrate the 122 existing lessons to `---` (last resort). Do not author new lessons until this is resolved.

**Verdict (2026-08-31, first `content/wp-fdg` session): ACCEPTED.** There is no
frontmatter parser anywhere in `src/` — the admin upload path treats the whole
file as markdown body, so both `***` and `---` are tolerated as inert text.
Verified empirically: a real `***`-delimited lesson chunks cleanly through
`chunkMarkdown` (23 chunks, no error). Known quirk (pre-existing, all released
lessons share it): the YAML block rides along inside the first "Introduction"
chunk and gets embedded/graph-extracted with the body. If that ever matters,
the fix is a strip step in `parseMarkdown` (`src/ai/flows/ingestion.ts`) —
which needs a `src/` branch, not this one.

---

## 3. What remains — prioritized for demo value

### 3.1 WP-G: Catalog regeneration + manifest status + release-verified import (1 task, no authoring)

**Goal:** Make the existing lessons actually usable in Elms.
**Status (2026-08-31): DONE, except one flap-gated release re-verification.**

Executed findings and steps:

1. **Revert trap discovered:** `5ef5a303` reverted the manifest + Bridge Physics (3),
   Integral Calculus (9), Thermal Physics & Stat Mech (9), Introductory Algebra (9),
   and Calculus using Python L1–L2. The later feature-branch merge could not bring
   them back (their commits were already "merged"). Restored byte-for-byte from
   `3dd7faf8` as new commits — history untouched, per item 6 below.
2. **Manifest restored + synced:** `content/programme-manifest.yaml` back; 13 complete
   labs, Basic Electronics, Calculus using Python and the four restored WP-B courses
   set `released` (35 released rows); Electronic Instrumentation Lab `in_authoring` (2/6).
3. **Catalog generator written:** `scripts/generate-course-catalog.ts` (none existed);
   `content/course-catalog.md` regenerated: 263 lessons across 36 courses. `--check`
   flag detects drift.
4. **Frontmatter corrected:** 42 lessons carried module-derived `semesterNumber`
   (and the EI lab a wrong semester triple); all now match the `content/semester-{N}/` tree.
5. **Import complete:** `scripts/import-content-tree.ts` (idempotent; matches courses by
   `code`, modules by marker, skips complete courses) imported all 263 lessons / 36
   courses into the live service via the admin API.
6. **Release check flap-gated:** `bridge-physics-m1-l1` → `student-wpg-import` reached
   parsing/chunking/embedding/vector_write (21/21 vectors) but failed at `graph_write`
   with `graph_extraction_failed` — Gemini 3.7 Flash was 503-ing environment-wide at the
   time (verified by direct probe). Re-run when Gemini is healthy:
   `bun run scripts/import-content-tree.ts` (imports skip; release check retries itself).
7. **Do not** revert the revert (`5ef5a303`) — history stays; restoration rides forward.

---

### 3.2 WP-F: University Support corpus (6 lessons, highest demo-value-per-lesson)

**Goal:** Unblock the Friend persona (Phase 9 Task 4).
**Status (2026-08-31): AUTHORING ALREADY COMPLETE on `main`.** The corpus exists at
`content/university-support/student-life-and-university-navigation/` (6/6 lessons) and
covers all six planned topics: timetable + academic calendar (m1-l1), office hours /
faculty contact / helpdesks (m1-l2), fee deadlines / payments / refunds (m1-l3),
classroom / laboratory / field etiquette (m2-l1), library / e-resources / reading lists
(m2-l2), peer contact / privacy / code of conduct (m2-l3). It is also imported into the
live service by `scripts/import-content-tree.ts` (WP-G). The only remaining step is
running `scripts/ingest-friend-corpus.ts`, which lives on `dev/krithika` and belongs to
the Phase 9 persona workstream — no authoring needed in this branch.

---

### 3.3 WP-D: Astrophysics theory courses (18 lessons, closes the minor spine)

**Goal:** Unblock Brinda (end Sem III) and Chetna (completed Sem V) staging; the Astrophysics minor cannot demo while Astro III/IV are missing.

Courses (verify exact list in the manifest before starting):

- **Astrophysics III** (Sem 5, 9 lessons, theory): stellar structure, stellar evolution, stellar atmospheres.
- **Astrophysics IV** (Sem 6, 9 lessons, theory): galactic astronomy, extragalactic astronomy, cosmology.

**Authoring pattern:** 9-section body schema, `difficulty: advanced`, `estimatedStudyMinutes: 45–55` per lesson.

---

### 3.4 WP-C: Remaining physics labs (22 lessons, completeness)

| # | Lab | Sem | Lessons | Status | Notes |
|---|-----|-----|---------|--------|-------|
| 1 | Electronic Instrumentation Lab | 6 Option B | 6 | 2/6 done | L3–L6 deferred: sensor calibration, bridge circuits, amplification, filtering, ADC, error budgets. |
| 2 | Advanced Quantum Mechanics Lab | 6 Option C | 6 | 0/6 | Laser spectroscopy, Mossbauer, NMR, EPR, entanglement, capstone. |
| 3 | Mathematics Lab using Python II | 4 | 6 | 0/6 | Linear algebra, ODE/PDE numerical, integration, visualization, reproducibility. |
| 4 | Mathematics Lab using Python III | 5/6 | 6 | 0/6 | Advanced numerical linear algebra, transforms, optimisation, visualisation, capstone. |

---

### 3.5 WP-E: Mathematics breadth + options (60–90 lessons, time-boxed)

**Goal:** Fill the mathematics spine for Ananya/Brinda continuity.

**Verification rule:** For each WP-E row, verify against the manifest and the `content/` tree whether lessons already exist (the 17 editorial corrections touched Linear Algebra, Abstract Algebra, Numerical Methods — those courses are not empty). **Forbid re-authoring any course that already has lessons on disk.**

Courses (semester order, 6–9 lessons each):

- Differential Equations (Sem 2)
- Real Analysis (Sem 3)
- Linear Algebra (Sem 2) — verify existing lessons first
- Abstract Algebra (Sem 4) — verify existing lessons first
- Number Theory (Sem 3, elective)
- Probability and Statistics (Sem 3, elective)
- Numerical Methods (Sem 4, elective) — verify existing lessons first
- Operations Research (Sem 4, elective)
- Mathematical Modelling (Sem 5, elective)
- Topology (Sem 5, elective)

**Time-box:** Stop after Differential Equations + Real Analysis + two electives if Phase 9 deadlines tighten.

---

## 4. Process notes for the next session

### 4.1 Defensive branching

- Run `git checkout content/wp-fdg` at the start of every authoring turn.
- Run `git branch --show-current` before every `git add` + `git commit`.
- Add a guard clause to any wrapper script that automates commits.

### 4.2 Lesson authoring pattern

Each lesson file:

- Lives at `content/semester-{N}/{subject}/{course-id}/{NN}-{course-id}-m1-l{N}.md`.
- Uses `***` frontmatter delimiters (pending Step 0 verification) with the standard key set (`programmeId`, `programmeName`, `semesterId`, `semesterName`, `subjectId`, `subjectName`, `courseId`, `courseName`, `moduleId`, `moduleName`, `lessonId`, `lessonName`, `lessonNumber`, `moduleNumber`, `semesterNumber`, `difficulty`, `estimatedStudyMinutes`, `releaseOrder`, `prerequisites`, `learningObjectives`, `concepts`, `tags`, `sourceType`, `assessmentHints`, `status`).
- Uses the 9-section body schema: `# Title`, `## Overview`, `## Learning Path`, `## Core Explanation`, `## Key Ideas`, `## Worked Examples`, `## Common Misconceptions`, `## Connections`, `## Quick Check`, `## Takeaway`.
- Sets `difficulty: foundation` / `intermediate` / `advanced` based on the semester and the prerequisite level.
- Sets `status: in-review` for new lessons; the user/reviewer promotes to `released` after review.
- `estimatedStudyMinutes` typically 50–60 min per lab lesson, 40–55 min per theory lesson.
- Length: 10–17 KB per lesson (exhaustive, per user direction).

### 4.3 Commit cadence

- One course per commit (rare exceptions when a course needs to be split for size).
- Commit message format: `Courseware: complete {Course Name} ({n}/{n})` for full courses, or `Courseware: partial {Course Name} ({n}/{N})` for partial.
- Each commit message lists the lessons and any deferred items.

### 4.4 Per-course substeps (replicable for any deferred course)

1. Read the manifest row for the course; capture the `prerequisites`, `notes`, `hoursPerWeek`, `credits`, and the `semesterNumber` + optionGroup.
2. Create the directory `content/semester-{N}/{subject}/{course-id}/` if missing.
3. Author each of the 6–9 lessons, matching the prerequisite chain and the course's `notes`.
4. Commit, push.
5. Continue.

---

## 5. Run order (demo-optimized)

| Order | Work package | Lessons | Why |
|---|---|---|---|
| 1 | WP-G: catalog + status + release-verified import | 0 | Makes the existing 122 lessons actually usable in Elms |
| 2 | WP-F: university-support corpus | 6 | Unblocks Friend (Phase 9 Task 4) |
| 3 | WP-D: Astrophysics III + IV | 18 | Closes the minor spine; unblocks Brinda/Chetna staging |
| 4 | WP-C leftovers (Electronic Instrumentation L3–L6, Adv Quantum Lab, Math Python II/III) | 22 | Completeness; labs already well-represented |
| 5 | WP-E math breadth, semester order, time-boxed | 60–90 | Largest block; Differential Equations + Real Analysis first for Ananya/Brinda continuity |

---

## 6. Quick-start checklist for the next session

- [ ] `git checkout main && git pull`
- [ ] `git checkout -b content/wp-fdg` (fresh branch from main)
- [ ] **Step 0:** verify `***` frontmatter acceptance; patch parser or migrate if needed
- [ ] WP-G: catalog + status + release-verified import
- [ ] WP-F: university-support corpus (6 lessons) → run `ingest-friend-corpus.ts`
- [ ] WP-D: Astrophysics III + IV (18 lessons)
- [ ] WP-C leftovers (22 lessons)
- [ ] WP-E math breadth (time-boxed)
- [ ] Open PR per work package; merge when verified
- [ ] Never touch `src/` in this branch