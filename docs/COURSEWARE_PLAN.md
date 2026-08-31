# Courseware Completion Plan

**Status snapshot at session pause (2026-08-31).**

This document is the authoritative handoff for the rest of the B.Sc. PM-Astrophysics courseware authoring effort. The bulk of the work is done on `content/courseware-56-row-gap-fill`; the remainder is documented below with the next steps to take in a follow-up session.

## 1. What is done

The complete set of authored work is now on the `content/courseware-56-row-gap-fill` branch, which is being merged into `main` per the 2026-08-31 instruction.

### 1.1 Programme manifest (WP-A)

- `content/programme-manifest.yaml` — 71 PDF rows transcribed, all 17 editorial corrections listed, status fields, option rules for Sem 5/6 captured. 41 KB.

### 1.2 Editorial corrections register (WP-A follow-up)

- 17 lessons fixed in place across numerical-methods, abstract-algebra, QM, atomic-and-molecular, nuclear, linear-algebra, solid-state.
- Each commit message describes the fix and downstream impact.

### 1.3 STEM-foundation courses (WP-B, 42 lessons)

- Bridge Physics (3 lessons, 37 KB)
- Integral Calculus (9 lessons, 124 KB)
- Thermal Physics & Statistical Mechanics (9 lessons, 152 KB)
- Introductory Algebra (9 lessons, 144 KB)
- Calculus using Python (6 lessons, ~85 KB)
- Basic Electronics (6 lessons, ~105 KB)

### 1.4 Physics labs (WP-C, partial)

13 complete labs (78 lessons), all 6/6:

1. Mechanics Lab (Sem 1)
2. Electricity & Magnetism Lab (Sem 2)
3. Thermal Physics Lab (Sem 2)
4. Waves & Optics Lab (Sem 3)
5. Quantum Mechanics Lab (Sem 4)
6. Communication Electronics Lab (Sem 4)
7. Solid State Physics Lab (Sem 5)
8. Astronomy & Astrophysics Lab (Sem 5, Option A)
9. Microcontroller & Embedded Systems Lab (Sem 5, Option B)
10. Low-Dimensional Materials Lab (Sem 5, Option C)
11. Atomic & Molecular Physics Lab (Sem 6)
12. Nuclear Physics Lab (Sem 6)
13. Renewable Energy Lab (Sem 6, Option A)

1 partial lab (2/6 lessons):

- Electronic Instrumentation Lab (Sem 6, Option B) — L1, L2 written, L3-L6 deferred

### 1.5 Statistics

- Total authored lessons on the feature branch: **122**
- Approx total content size: **~2.0 MB** of frontmatter + body
- All pushed to `origin/content/courseware-56-row-gap-fill`
- One incident this session: a thermal-physics-lab commit was accidentally made to `dev/jennifer` (the user's working branch) instead of the feature branch. It was recovered by cherry-picking onto the feature branch, pushing, and `git reset --hard` on `dev/jennifer` to remove the stray commit while preserving the user's own `938cae83 docs: record post-deploy watchdog-fix verification` commit. Verified clean state on both branches.

## 2. What is remaining

Per the original work plan, the following remain. The session was paused at the user's direction to consolidate; resume any of these in a follow-up session.

### 2.1 WP-C remaining physics labs (16 lessons, 4 labs)

| # | Lab | Sem | Lessons | Status | Notes |
|---|-----|-----|---------|--------|-------|
| 1 | Electronic Instrumentation Lab | 6 Option B | 6 | 2/6 done | L3-L6 deferred. Notes: sensor calibration, bridge circuits, amplification, filtering, ADC, error budgets. |
| 2 | Advanced Quantum Mechanics Lab | 6 Option C | 6 | 0/6 | Notes: laser spectroscopy, Mossbauer, NMR, EPR, entanglement, capstone. |
| 3 | Mathematics Lab using Python II | 4 | 6 | 0/6 | Six-lesson computational lab. Notes: linear algebra, ODE/PDE numerical, integration, visualization, reproducibility. |
| 4 | Mathematics Lab using Python III | 5/6 | 6 | 0/6 | Six-lesson computational lab. Notes: advanced numerical linear algebra, transforms, optimisation, visualisation, capstone. |

### 2.2 WP-D Astrophysics theory courses (estimated 27-36 lessons)

The Astrophysics minor stream has 4 theory courses plus 3 option courses still at `status: planned` in the manifest. The 13/15 theory courses are already in the manifest as released. WP-D covers the remaining ones:

- **Astrophysics III** (Sem 5, 9 lessons, theory) — stellar structure, stellar evolution, stellar atmospheres.
- **Astrophysics IV** (Sem 6, 9 lessons, theory) — galactic astronomy, extragalactic astronomy, cosmology.
- **Sem 5/6 A&A option A** (Astronomy & Astrophysics Lab) — already done as a lab in WP-C; the manifest row for the option theory course may need separate authoring if it is a distinct course; verify against the manifest.
- **Sem 5/6 A&A option B** (6-9 lessons) — choice from Stellar Astrophysics / High-Energy Astrophysics / Cosmology.
- **Sem 5/6 A&A option C** (6-9 lessons) — choice from Observational Astronomy / Astronomical Data Analysis / Astrobiology.

Verify the exact course list in the manifest before starting. These are nine-lesson theory courses with the same frontmatter + 9-section body schema as the other theory courses.

### 2.3 WP-E Mathematics breadth + options (estimated 60-90 lessons)

Ten mathematics courses are at `status: planned` in the manifest:

- Real Analysis (Sem 3)
- Differential Equations (Sem 2)
- Linear Algebra (Sem 2)
- Abstract Algebra (Sem 4)
- Number Theory (Sem 3, elective)
- Probability and Statistics (Sem 3, elective)
- Numerical Methods (Sem 4, elective)
- Operations Research (Sem 4, elective)
- Mathematical Modelling (Sem 5, elective)
- Topology (Sem 5, elective)

Each course is 6-9 lessons with the standard frontmatter + 9-section body schema. Together ~60-90 lessons.

### 2.4 WP-G Catalog regeneration + final QA (1 task, no authoring)

Steps:

1. Run the catalog generation script (whatever the project uses to build the lesson catalog from `content/programme-manifest.yaml` and the `content/semester-*/` tree). Likely a Node/TypeScript build, given the Next.js / Genkit stack.
2. Verify the catalog includes all 13 complete WP-C labs and the partial Electronic Instrumentation Lab.
3. Verify the manifest row `status: planned` flags are updated for the completed courses. This is a content edit to `content/programme-manifest.yaml` (set `status: released` for the 13 complete labs, leave the rest as `planned`).
4. Run a final QA pass: spot-check 3-5 lessons per course for frontmatter consistency, body completeness, and absence of placeholder text.
5. Verify the build succeeds and the site renders the new lessons correctly.

## 3. Process notes for the next session

### 3.1 Defensive branching

The session had one branching incident (a commit landed on `dev/jennifer` instead of the feature branch because the user had switched the working tree between turns). The following defensive habit prevented further incidents:

- Run `git checkout content/courseware-56-row-gap-fill` at the start of every authoring turn.
- Run `git branch --show-current` before every `git add` + `git commit`.
- Add a guard clause to any wrapper script that automates commits.

### 3.2 Lesson authoring pattern

Each lesson file:

- Lives at `content/semester-{N}/{subject}/{course-id}/{NN}-{course-id}-m1-l{N}.md`.
- Uses `***` frontmatter delimiters with the standard key set (`programmeId`, `programmeName`, `semesterId`, `semesterName`, `subjectId`, `subjectName`, `courseId`, `courseName`, `moduleId`, `moduleName`, `lessonId`, `lessonName`, `lessonNumber`, `moduleNumber`, `semesterNumber`, `difficulty`, `estimatedStudyMinutes`, `releaseOrder`, `prerequisites`, `learningObjectives`, `concepts`, `tags`, `sourceType`, `assessmentHints`, `status`).
- Uses the 9-section body schema: `# Title`, `## Overview`, `## Learning Path`, `## Core Explanation`, `## Key Ideas`, `## Worked Examples`, `## Common Misconceptions`, `## Connections`, `## Quick Check`, `## Takeaway`.
- Sets `difficulty: foundation` / `intermediate` / `advanced` based on the semester and the prerequisite level.
- Sets `status: in-review` for new lessons; the user/reviewer promotes to `released` after review.
- `estimatedStudyMinutes` typically 50-60 min per lab lesson, 40-55 min per theory lesson.
- Length: 10-17 KB per lesson (exhaustive, per user direction).

### 3.3 Commit cadence

- One course per commit (rare exceptions when a course needs to be split for size).
- Commit message format: `Courseware: complete {Course Name} ({n}/{n})` for full courses, or `Courseware: partial {Course Name} ({n}/{N})` for partial.
- Each commit message lists the lessons and any deferred items.

### 3.4 Per-course substeps (replicable for any deferred course)

1. Read the manifest row for the course; capture the `prerequisites`, `notes`, `hoursPerWeek`, `credits`, and the `semesterNumber` + optionGroup.
2. Create the directory `content/semester-{N}/{subject}/{course-id}/` if missing.
3. Author each of the 6-9 lessons, matching the prerequisite chain and the course's `notes`.
4. Commit, push.
5. Continue.

## 4. Outstanding branch hygiene

- `main` has a revert commit `5ef5a303 Revert "Courseware: programme manifest + 17 corrections + 5 STEM foundation courses"` that undid the original courseware commit. The user has now instructed merging the feature branch to main; this merge re-introduces the original 5 STEM-foundation courses, the manifest, the 17 corrections, and the 13 new labs, but the revert commit remains in history. If the user wants a clean main without the revert, a follow-up can revert the revert (`git revert 5ef5a303`) before or after the merge.

- `dev/jennifer` has the user's own `938cae83 docs: record post-deploy watchdog-fix verification` commit. If a future session needs that commit, it can be cherry-picked onto any branch.

## 5. Quick-start checklist for the next session

- [ ] `git checkout main && git pull` (after the merge is pushed)
- [ ] `git checkout content/courseware-56-row-gap-fill` (the working branch)
- [ ] `git pull` to get any new commits
- [ ] Pick up at WP-C remaining: finish Electronic Instrumentation Lab L3-L6, then Advanced Quantum Mechanics Lab L1-L6, then Mathematics Lab using Python II L1-L6, then Mathematics Lab using Python III L1-L6.
- [ ] Then WP-D: Astrophysics III, IV, plus the 3 option courses (verify exact list in the manifest).
- [ ] Then WP-E: the 10 mathematics courses in semester order (Sem 2 → Sem 5).
- [ ] Then WP-G: catalog regeneration + manifest `status: released` updates + final QA.
- [ ] When complete, the same merge procedure (PR or direct merge to main) applies.
