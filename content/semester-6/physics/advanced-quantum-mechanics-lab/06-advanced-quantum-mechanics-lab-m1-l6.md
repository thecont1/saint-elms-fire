***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: advanced-quantum-mechanics-lab
courseName: Advanced Quantum Mechanics Lab (Option C)
moduleId: advanced-quantum-mechanics-lab-module-1
moduleName: Numerical Quantum Mechanics — Eigenvalues, Dynamics and Scattering
lessonId: advanced-quantum-mechanics-lab-m1-l6
lessonName: Capstone — A Validated Quantum Simulation from Specification to Report
lessonNumber: 6
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - advanced-quantum-mechanics-lab-m1-l5
learningObjectives:
  - Scope, execute and deliver a complete numerical quantum-mechanics project: specification, implementation, validation, convergence study, interpretation, and reproducible record.
  - Apply the course's validation discipline to a problem without a ready-made analytic answer, using limiting cases and cross-method checks instead.
  - Communicate results with an honest error budget and a defensible statement of what the simulation does and does not show.
concepts:
  - Project specification
  - Validation by limiting cases
  - Cross-method verification
  - Convergence study
  - Error budget
  - Scientific reporting
tags:
  - physics
  - laboratory
  - computational-physics
  - quantum-mechanics
  - capstone
sourceType: authored-courseware
assessmentHints:
  - Every project must pass two independent validations: an analytic limiting case and a cross-method or conservation-law check.
  - The report must include a convergence table (grid, time step, domain) and an error budget, not just plots.
  - Interpretation is graded: what does the number say about the physics, and what are its limits of validity?
status: in-review
***

# Capstone — A Validated Quantum Simulation from Specification to Report

## Overview

The first five lessons built instruments — diagonalisation, shooting, time evolution, driven dynamics, scattering — each validated against problems with known answers. The capstone removes the safety net: you choose (or are assigned) a problem with no closed-form answer, and the validation discipline becomes the result. A simulation without validation is a video game; a validated simulation without interpretation is a table of numbers. This lesson defines the project menu, the required deliverables, and the grading contract, and walks one project end-to-end so you see the standard you are being held to.

## Learning Path

1. **Choose a project** from the approved menu (or propose one and get it approved in writing).
2. **Write the specification:** the physical question, the model, the observables, and — before coding — the limiting cases that will validate it.
3. **Implement and validate:** reproduce the limiting cases; run the conservation-law and cross-method checks.
4. **Convergence study:** demonstrate that your numbers are stable under refinement of grid, time step, and domain.
5. **Produce the physics:** the scan, the measurement, the plot that answers the question.
6. **Write the report:** error budget, limits of validity, interpretation, and the reproducible record.

## Core Explanation

### The Project Menu

Choose one. Proposals outside the menu are welcome but must be approved before implementation begins.

- **P1 — Double-well tunnelling splitting.** Symmetric double well; find the lowest two eigenvalues by diagonalisation (Lesson 1's machinery). The splitting ΔE between the symmetric and antisymmetric pair is the tunnelling rate scale; map ΔE against barrier height and width and compare against the WKB form ΔE ∝ e^{−∫κ dx}. Validation limits: degenerate isolated wells (thick barrier), harmonic wells near each minimum.
- **P2 — Driven population transfer beyond two levels.** A truncated harmonic ladder driven by a pulse (Lesson 4's machinery, larger basis): study how population climbs with pulse area and detuning, and where the two-level picture breaks. Validation limits: weak short pulse → perturbative quadratic onset; near-isolated pair → Rabi formula.
- **P3 — Resonant tunnelling through a double barrier.** The quantum-well structure of a resonant-tunnelling diode (Lesson 5's machinery, structured potential): compute T(E) and locate the quasi-bound resonances inside the well; connect peak positions to the well's bound-state energies and peak widths to lifetimes τ ≈ ħ/Γ. Validation limits: single-barrier result when one barrier is removed; transparent limit at resonance.
- **P4 — Quasi-bound states and decay.** A well plus an exit barrier (α-decay geometry): find the resonance energies and widths, estimate the lifetime, and check Gamow's exponential sensitivity of τ to barrier parameters. Validation limits: closed box recovers Lesson 1's spectrum; thick-barrier limit reproduces the bound states of the well alone.

### Deliverables (the grading contract)

1. **Specification page (before coding):** model, parameters, observables, and two named validation targets with their expected values.
2. **Validation evidence:** plots/tables showing each target hit, with the digit-level agreement stated. Conservation laws (norm, flux, energy where applicable) checked and quoted.
3. **Convergence table:** the observable of record computed at three or more resolutions (h or Δt or domain size), with the claimed digits justified by its stability.
4. **Error budget:** list every identified source (discretisation, solver tolerance, finite time/domain, model truncation) with magnitude; state the dominant one.
5. **Physics section:** the result plotted, the answer to the specification question, and the interpretation — including where the model would stop being trustworthy.
6. **Reproducible record:** code, parameters, and seeds archived so the run can be regenerated; the report cites the exact version used.

### Theory: Validation without an exact answer

The three moves that replace closed-form solutions:

- **Limiting cases:** every model has corners where it simplifies (barrier → ∞ or → 0, drive → 0, well isolation → ∞). The simulation must reproduce those corners *quantitatively*, at the numbers the simplified theory gives.
- **Conservation laws and identities:** norm, flux (T + R = 1), energy expectation under a time-independent H. These are exact at all parameters and cost nothing to check.
- **Cross-method agreement:** two independent discretisations, or stationary vs time-dependent (as in Lesson 5), or shooting vs diagonalisation (as in Lesson 2). Agreement at the claimed digits is strong evidence; disagreement is a diagnosis, not an average.

### Procedure (execution phases)

1. **Week 1 — specification and skeleton:** write the spec; run the limiting cases with coarse settings; fix any disagreement before refining.
2. **Week 2 — production runs:** convergence study first, then the physics scan at the converged settings.
3. **Week 3 — analysis and report:** error budget, interpretation, reproducibility check (a clean rerun from the archived code).

### Analysis: A Worked Project Sketch (P3)

Double barrier: two V_0 = 8, a = 0.5 barriers separated by a well of width 1. T(E) shows broad background and sharp peaks. The peak near E ≈ 3.2 sits within 10⁻³ of the isolated well's first bound level (computed separately by diagonalisation — the validation target); its width Γ ≈ 0.02 gives τ ≈ ħ/Γ = 50 in these units. Doubling the barrier widths halves the width parameter: Γ drops by the expected e^{−2κa} factor — the exponential lever of Lesson 5 reappears controlling the lifetime. The report's physics claim: resonant transmission occurs at the quasi-bound energies, with lifetime set by barrier tunnelling; its limit of validity: the two-peak picture breaks when peaks overlap (Γ comparable to spacing), which the report quantifies for its parameters.

### Sources of Error (project-level)

- **Specification drift:** changing the physical question mid-project to fit what the code can do; the spec page is the contract.
- **Validation theatre:** checking only what already works, or quoting "agreement" without digits; every check needs a number.
- **Unconverged digits:** reporting digits that move under refinement; the convergence table exists to prevent this.
- **Model-blindness:** presenting results of a 1D, truncated, idealised model as statements about the physical system; the limits-of-validity paragraph is mandatory.
- **Lost provenance:** results no one can regenerate; the archive (code + parameters + seed) is part of the grade.

## Key Ideas

- A project without a written specification is not a project; name the question, the model, and the validation targets before writing code.
- Without closed-form answers, validation moves to limiting cases, conservation laws, and cross-method agreement — all quantitative.
- The convergence table justifies the digits; the error budget ranks the doubts; the interpretation earns the grade.
- Dominant-error thinking from the earlier lessons scales up: find the largest uncertainty and reduce or report it.
- Reproducibility is a deliverable, not a virtue: archived code, parameters, and seed.

## Worked Examples

#### Example 1: A good validation statement (P1)

"For barrier width 4, the splitting is ΔE = 3.2 × 10⁻³ at h = 0.05, 3.2 × 10⁻³ at h = 0.025, and 3.1 × 10⁻³ at h = 0.0125 — converged to two significant figures. The WKB exponential ∫κ dx over the barrier gives ln ΔE within 0.05 of the measured trend across five barrier heights." Digits, a convergence table, and the analytic comparison: a complete claim.

#### Example 2: A caught bug (P4)

The lifetime scan showed τ *increasing* with barrier height — unphysical. Diagnosis: the resonance width was read off a scan too coarse to resolve the peaks (ΔE = 0.1 vs Γ ~ 10⁻³), so fitted widths were noise. Refining the scan around each peak restored the exponential decrease of Γ. The lesson: conservation laws cannot catch a measurement-definition error; only an unphysical trend read against physical intuition does.

#### Example 3: An honest limit-of-validity paragraph (P2)

"The ladder was truncated at n = 6. Population reaching level 5 during the strongest pulses means the truncation is active there; results above pulse area A ≈ 4π are not trustworthy. All conclusions are stated for A ≤ 3π, where level-6 population stays below 10⁻³."

## Common Misconceptions

- **"More resolution means more truth."** Convergence means the answer stops moving; resolution beyond that is cost without content.
- **"The plot is the result."** The result is the number with its error budget and limits of validity; the plot is its presentation.
- **"Validation is for code, not physics."** The limiting cases are physics; reproducing them is what licenses the extrapolation to the un-solvable regime.
- **"If two methods disagree, average them."** Disagreement is a diagnostic; find which is wrong and why. Averaging is how wrong digits get published.
- **"The capstone is five lessons stapled together."** It is the first problem where the method's honesty, not its mechanics, is the challenge.

## Connections

- **Lessons 1–5:** every tool in the capstone was built and validated there; the project reuses them under new physics.
- **Electronic Instrumentation Lab:** the error-budget and dominant-error discipline transfers across subjects unchanged — measurement science is one subject.
- **Advanced Quantum Mechanics theory:** WKB, time-dependent perturbation theory, and resonance phenomenology supply the analytic limiting cases the projects test against.
- **Beyond the course:** the deliverable structure (spec, validation, convergence, budget, interpretation, provenance) is the working standard of computational physics research.

## Quick Check

1. What must the specification page contain before implementation begins?
2. Name the three validation moves available when no closed-form answer exists.
3. What does the convergence table justify, and how?
4. For P3, why should a transmission peak sit at the isolated well's bound-state energy?
5. What makes a limit-of-validity paragraph honest rather than decorative?

## Takeaway

The capstone's real subject is not any one potential or pulse — it is the habit of validated computation: specify before coding, check against every corner where truth is known, prove your digits are stable, budget your errors, and say plainly where the model stops. A simulation delivered with that discipline is evidence; anything less is decoration. That is the standard this course leaves you with, and the one every computational result you ever defend will be measured against.
