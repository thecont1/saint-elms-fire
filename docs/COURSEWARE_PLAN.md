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
   **Retry (2026-09-01):** re-run imported all 60 new WP-D/C/E lessons — Astrophysics III,
   Astrophysics IV, Mathematics Lab using Python II and III, Electronic Instrumentation
   Lab, Advanced Quantum Mechanics Lab, Number Theory, Operations Research — into the
   live service; the release check itself failed again, 3/3 retries, terminal state
   `failed`. Release verification still flap-gated; imports are complete and idempotent.
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
**Status (2026-08-31): DONE — 18/18 lessons authored and committed on `content/wp-fdg`.**

Manifest verification corrected the plan's semester assignments: **Astrophysics III is
Semester 3** and **Astrophysics IV is Semester 4** (the plan draft said Sem 5/6; the
manifest is authoritative).

- **Astrophysics III** (`content/semester-3/astrophysics/astrophysics-iii/`, 9/9,
  commit `2c4a4b69`): M1 Stellar Properties and Spectra (magnitudes/distances, spectral
  classification, HR diagram); M2 Stellar Structure and Energy (hydrostatic equilibrium
  and transport, pp/CNO burning, main sequence and mass–luminosity); M3 Stellar
  Evolution and Distance Indicators (post-main-sequence, white dwarfs + Type Ia,
  clusters/isochrones with a photometry data exercise).
- **Astrophysics IV** (`content/semester-4/astrophysics/astrophysics-iv/`, 9/9,
  commit `522ac955`): M1 The Milky Way and Galaxies (Galactic structure, Hubble
  sequence/scaling relations, AGN/quasars); M2 Cosmology (expansion and the distance
  ladder, Big Bang/CMB, dark matter/dark energy/ΛCDM); M3 Compact Objects and the
  Evolving Universe (neutron stars/pulsars, black holes/gravitational waves, capstone
  survey + Hubble-diagram data exercise).

All lessons follow the mandated schema: `***` frontmatter, `difficulty: advanced`,
`estimatedStudyMinutes` 50–55, chained prerequisites, 9-section body, 10–17 KB each.
Catalog regenerated to 281 lessons / 38 courses and both manifest rows flipped to
`released` with `contentPath` (commit `e63db6cd`, manifestVersion 2026-08-31.3).

**Authoring pattern:** 9-section body schema, `difficulty: advanced`, `estimatedStudyMinutes: 45–55` per lesson.

---

### 3.4 WP-C: Remaining physics labs (22 lessons, completeness)

**Status (2026-08-31): DONE — 22/22 lessons authored, committed on `content/wp-fdg`, manifest rows flipped to `released` with `contentPath` (releasedRows 37 → 41, manifestVersion 2026-08-31.4), catalog regenerated and `--check` clean (303 lessons / 41 courses).**

| # | Lab | Sem | Lessons | Status | Notes |
|---|-----|-----|---------|--------|-------|
| 1 | Electronic Instrumentation Lab | 6 Option B | 6 | 6/6 done | L3–L6 authored: sensor calibration, bridge circuits, amplification, filtering, ADC, error budgets. |
| 2 | Advanced Quantum Mechanics Lab | 6 Option C | 6 | 6/6 done | Authored per the manifest notes (authoritative): eigenvalue problems, numerical quantum mechanics, driven dynamics, scattering, interpretation, capstone — not the instrument list originally sketched here. |
| 3 | Mathematics Lab using Python II | 4 | 6 | 6/6 done | Linear algebra, ODE/PDE numerical, integration, visualization, reproducibility. |
| 4 | Mathematics Lab using Python III | 5/6 | 6 | 6/6 done | Advanced numerical linear algebra, transforms, optimisation, visualisation, capstone. |

---

### 3.5 WP-E: Mathematics breadth + options (60–90 lessons, time-boxed)

**Goal:** Fill the mathematics spine for Ananya/Brinda continuity.

**Status (2026-08-31): CLOSED at time-box minimum (2 courses, 18 lessons). Existence sweep found the package premise stale: Differential Equations, Real Analysis, Linear Algebra, Abstract Algebra and Numerical Methods already exist on disk with full released lesson sets — re-authoring them is forbidden by this package's own verification rule — and Probability and Statistics / Topology are not manifest rows, so there is nothing to author for them. The authorable scope collapsed to the planned semester-6 electives. Per Mahesh's scope decision (time-box minimum), authored Number Theory (9/9, commit `c1a67bff`) and Operations Research (9/9, commit `2b9ef098`); both manifest rows flipped to `released` with `contentPath` (releasedRows 41 → 43, manifestVersion 2026-08-31.5), catalog regenerated to 321 lessons / 43 courses with `--check` clean.**

**Verification rule:** For each WP-E row, verify against the manifest and the `content/` tree whether lessons already exist (the 17 editorial corrections touched Linear Algebra, Abstract Algebra, Numerical Methods — those courses are not empty). **Forbid re-authoring any course that already has lessons on disk.**

Courses (semester order, 6–9 lessons each):

- Differential Equations (Sem 2) — exists on disk, released; not re-authored
- Real Analysis (Sem 3) — exists on disk, released; not re-authored
- Linear Algebra (Sem 2) — verified: exists on disk, released; not re-authored
- Abstract Algebra (Sem 4) — verified: exists on disk, released; not re-authored
- Number Theory (Sem 3, elective) — authored 9/9 as a semester-6 elective per manifest (`c1a67bff`), released
- Probability and Statistics (Sem 3, elective) — not a manifest row; nothing to author
- Numerical Methods (Sem 4, elective) — verified: exists on disk, released; not re-authored
- Operations Research (Sem 4, elective) — authored 9/9 as a semester-6 elective per manifest (`2b9ef098`), released
- Mathematical Modelling (Sem 5, elective) — remains planned (out of the time-boxed scope chosen)
- Topology (Sem 5, elective) — not a manifest row; nothing to author

**Time-box:** Stop after Differential Equations + Real Analysis + two electives if Phase 9 deadlines tighten.

---

### 3.6 Remaining rows after WP-B through WP-E (29 rows; 43 of 72 released)

**Status (2026-09-01): every work package in this plan is complete. Below is the residual scope left in the manifest — 13 external rows, 1 internship workflow, and 15 authorable courses (3 of them lab/practical, with module plans detailed below).**

**A. External / administrative rows (13) — no authoring until provider or syllabus is confirmed.** English I (Sem 1), English II (Sem 2), Environmental Science (Sem 1), Holistic Education I–IV (Sems 1/2/3/4), Open Elective I / II / Swayam (Sems 1/2/3), Understanding India (Sem 2), Modern Indian Language I / II (Sems 3/4). Action per row: confirm provider and approved syllabus, then record provider/link/credit evidence in the manifest (`external` delivery); do not author placeholder content.

**B. Internship (Sem 5, 8 credits) — milestone workflow, not lessons.** Placement/proposal → supervisor approval → work log → midpoint review → final report → presentation → viva. Model as a supervised workflow artefact; the 9-lesson schema does not apply.

**C. Authorable courses (15), semester order.** Lab/practical courses carry detailed module plans; theory rows keep the manifest `notes` as scope until a package is opened.

**Lab and practical courses — proposed module plans** (6-lesson lab schema from WP-C: each lesson is a full experiment with Theory / Apparatus / Procedure / Analysis / Sources of Error; theory-practical templates alternate theory and practical lessons):

- **Analog and Digital Electronics** (Sem 3, SEC, 6 lessons)
  - M1 Analog building blocks: L1 CE transistor amplifier — bias point, small-signal gain, frequency response with measured f_L and f_H; L2 Op-amp circuits — inverting/non-inverting/summing configurations, gain-bandwidth product and slew-rate measurements.
  - M2 Digital logic: L3 Logic gates — truth-table verification, fan-out and noise margins with 74-series ICs; L4 Flip-flops and counters — SR/JK/D behaviour, switch debouncing, ripple-counter chains.
  - M3 Data conversion and capstone: L5 ADC/DAC — R-2R ladder, quantisation error, sampling and aliasing demos; L6 capstone — one small measurement or simulation project (sensor → amplifier → converter chain).
- **Communication Electronics** (Sem 4, Major Core, 6 lessons, theory-practical)
  - M1 Modulation and demodulation: L1 AM generation and envelope detection — modulation index measurement; L2 FM generation and detection — VCO-based modulation, discriminator concept.
  - M2 Oscillators, filters, channels: L3 LC and crystal oscillators — startup condition and frequency stability; L4 Active filters and channel response — design, impedance matching, block-diagram tracing.
  - M3 Noise and system integration: L5 Noise — SNR and noise-figure measurements, noise temperature; L6 superheterodyne receiver system — complete block diagram and link budget.
- **Electronic Instrumentation** (Sem 6, Physics Option B, 6 lessons, theory-practical; complements the released `electronic-instrumentation-lab`)
  - M1 Sensors and conditioning: L1 Transducer families — resistive/capacitive/optical sensors, sensitivity and linearity calibration; L2 Bridges and instrumentation amplifiers — Wheatstone bridge balancing, INA gain/offset, filtering.
  - M2 Conversion and calibration: L3 ADC/DAC in instruments — resolution, integral and differential nonlinearity measurements; L4 Calibration and uncertainty — standards, traceability, uncertainty budgets.
  - M3 Noise and instrument design: L5 Low-noise practice — grounding, shielding, lock-in principle; L6 design case — a complete instrument chain for one physics measurement, bridging into the released EI lab experiments.

**Theory/project electives (manifest notes as scope):** Astronomy and Astrophysics (Sem 5, Option A, advanced theory), Microcontroller and Embedded Systems (Sem 5, Option B, project-based: architecture, GPIO, sensors, timing, serial communication, data logging, physics-instrumentation project), Low-Dimensional Materials (Sem 5, Option C, advanced theory), Integral Transforms (Sem 5, Math Elective I), Calculus of Several Variables (Sem 5, Math Elective II), Renewable Energy and Applications (Sem 6, Option A, theory + design case), Advanced Quantum Mechanics (Sem 6, Option C), Complex Analysis (Sem 6, Major Core), Advanced Numerical Methods (Sem 6, Math Elective I A, computational), Computational Linear Algebra (Sem 6, Math Elective II A), Financial Mathematics (Sem 6, Math Elective II B), Mathematical Modelling (Sem 6, Math Elective II C, project). Note the semester-5/6 option groups are elective *choices* — a learner takes one option per group, so authoring all of them completes the catalogue even though not every row is on any one learner's path.

**Close-out rule for future packages:** identical pipeline to WP-C/WP-E — author with `status: in-review`, regenerate catalog and verify `--check`, flip manifest rows to `released` with `contentPath` and bump `manifestVersion`/`releasedRows`, import via `scripts/import-content-tree.ts`, one PR per package.

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

- [x] `git checkout main && git pull`
- [x] `git checkout -b content/wp-fdg` (fresh branch from main)
- [x] **Step 0:** verify `***` frontmatter acceptance — ACCEPTED (no parser; YAML rides chunk 0)
- [x] WP-G: catalog + status + release-verified import — done except flap-gated release re-verification
- [x] WP-F: university-support corpus (6 lessons) → run `ingest-friend-corpus.ts` (corpus pre-existed on `main`)
- [x] WP-D: Astrophysics III + IV (18 lessons)
- [x] WP-C leftovers (22 lessons) — 4 lab courses complete; manifest flipped to released; catalog at 303 lessons / 41 courses
- [x] WP-E math breadth (time-boxed) — closed at 2 courses (Number Theory, Operations Research); manifest at 43 released rows; catalog at 321 lessons / 43 courses
- [x] Open PR per work package; merge when verified — PR #9 opened and merged 2026-09-01
- [x] Never touch `src/` in this branch — content-only throughout
- [ ] Remaining scope per §3.6: 15 authorable courses (3 lab/practical with module plans), internship workflow, 13 external rows awaiting provider confirmation
- [ ] WP-G release check re-run in a healthy Gemini window (§3.1 item 6)