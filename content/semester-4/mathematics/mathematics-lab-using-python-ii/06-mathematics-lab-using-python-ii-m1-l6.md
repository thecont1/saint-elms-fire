***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: mathematics
subjectName: Mathematics
courseId: mathematics-lab-using-python-ii
courseName: Mathematics Lab using Python II
moduleId: mathematics-lab-using-python-ii-module-1
moduleName: Scientific Computing in Python — Linear Algebra, ODEs and Integration
lessonId: mathematics-lab-using-python-ii-m1-l6
lessonName: Capstone — A Reproducible Computational Experiment, End to End
lessonNumber: 6
moduleNumber: 1
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - mathematics-lab-using-python-ii-m1-l5
learningObjectives:
  - Scope, execute and deliver a complete computational experiment using the course's linear algebra, ODE/PDE, and quadrature tools, with validation and an error budget.
  - Produce publication-quality visualisations: honest axes, labelled convergence plots, and figures that state their parameters.
  - Make the work reproducible by construction: seeded randomness, recorded versions, archived code and data, and a rerun that regenerates every figure.
concepts:
  - Computational experiment
  - Reproducibility
  - Scientific visualisation
  - Convergence diagnostics
  - Error budget
  - Scientific reporting
tags:
  - mathematics
  - laboratory
  - python
  - capstone
  - reproducibility
sourceType: authored-courseware
assessmentHints:
  - Every project must contain at least one quantitative validation (a known answer reproduced to stated digits) and one convergence table.
  - Figures are graded on honesty: axes labelled with units, parameter values in captions, no axis truncation that exaggerates effects.
  - The reproducibility check is run, not asserted: a clean rerun from the archive must regenerate the report's figures.
status: in-review
***

# Capstone — A Reproducible Computational Experiment, End to End

## Overview

The first five lessons taught instruments: factorisations, eigenvalue iteration, time stepping, finite differences, quadrature — each calibrated against known answers. The capstone turns the instruments onto a question without a ready-made answer, and adds the two professional obligations the exercises only hinted at: visualisation that tells the truth, and reproducibility that lets anyone check it. A computational experiment is not finished when the plot looks right; it is finished when a stranger can rerun it, regenerate every figure, and see the same error budget. This lesson defines the project menu, the deliverables, and the grading contract, and walks one project's figures and failure modes in detail.

## Learning Path

1. **Choose a project** from the menu (or get a proposal approved in writing before coding).
2. **Write the specification:** question, model, parameters, observables, and the validation targets — before implementation.
3. **Implement with validation built in:** reproduce the named limiting cases to stated digits.
4. **Converge:** grid/step-size tables that justify every quoted digit.
5. **Visualise:** figures designed to be read cold — labels, units, captions with parameters.
6. **Package:** archive code + seed + environment; pass the clean-rerun test; write the report.

## Core Explanation

### The Project Menu

- **C1 — The driven pendulum's route to chaos.** θ'' + bθ' + sin θ = A cos(ωt): integrate (Lesson 3's RK4), sweep the drive amplitude A, and build the bifurcation diagram (long-time θ sampled once per drive period). Validation: A → 0 limit reproduces the damped linear oscillator's decay rate; period of small free oscillations → 2π. Visualisation: the bifurcation diagram itself, plus one time series each from the periodic and chaotic windows.
- **C2 — Least squares, two ways.** Fit a model to synthetic noisy data via the normal equations AᵀAx = Aᵀb and via QR (scipy.linalg.lstsq); compare recovered parameters and residuals as the basis becomes ill-conditioned (polynomial degree growing). Validation: zero-noise runs must recover the generating parameters to machine precision. Visualisation: parameter error vs basis condition number, both methods on one honest log-log axis.
- **C3 — Heat flow with a twist.** The heat equation (Lesson 4's FTCS) with a piecewise initial profile of your choice: validate against the Fourier-series solution you compute independently, then produce the space-time visualisation and a quantitative smoothing measure (e.g. decay of the highest resolved mode). Validation: single sine mode decays at e^{−π²t} to five digits before any complex profile is trusted.
- **C4 — The chain, energised.** The mass–spring chain of Lesson 2 with arbitrary initial conditions: decompose into modes (Lesson 2), integrate (Lesson 3), and track the modal energy distribution in time; diagnose recurrence and equipartition-like behaviour. Validation: starting from a pure mode gives pure sinusoidal motion at the predicted frequency. Visualisation: animated chain snapshots and the modal-energy heatmap.

### Deliverables (the grading contract)

1. **Specification page:** the question, the model equations, all parameters, and two validation targets with expected values — written before code.
2. **Validation evidence:** each target hit, with the digit-level agreement stated (not "the curves look similar").
3. **Convergence table:** the observable of record at three or more resolutions; claimed digits justified by its stability.
4. **Error budget:** discretisation, solver tolerance, finite-time effects, model idealisations — each with a magnitude; the dominant one named.
5. **Figures that stand alone:** title stating what is shown, axes labelled with quantity and units (or "dimensionless"), caption carrying the parameter values and the resolution used.
6. **Reproducibility package:** code, input data, random seed, and environment versions (a frozen requirements list or environment file); the clean-rerun check passes.
7. **Interpretation section:** the answer to the specification question, its limits of validity, and one honest statement of what the experiment does not show.

### Theory: Visualisation as argument

Three rules that separate evidence from decoration. (i) Axes: every axis carries a quantity and a unit; time is in the problem's natural units; log scales are used where ratios, not differences, are the claim (convergence plots always). (ii) Honesty: no truncated axes that manufacture drama, no rainbow colormaps on quantitative data (use a perceptually uniform map; the heatmap in C4 is quantitative), no smoothing applied after the fact without saying so. (iii) Self-sufficiency: a reader who has not read the report should extract the claim from the figure and caption alone.

### Theory: Reproducibility as method

Randomness is seeded and the seed is recorded. Library versions are frozen (they change results — integrator defaults and linear algebra kernels differ across releases). The archive must allow a *clean* rerun: fresh environment, one command, all figures regenerated. The discipline is not bureaucracy; it is the experiment's version of a witnessed measurement — and it routinely catches silent drift between "the result" and "the code that produced it".

### Procedure (execution phases)

1. **Phase 1 — specification and validation skeleton:** spec page; coarse validation runs; disagreements fixed here, cheaply.
2. **Phase 2 — production:** convergence table first; production runs at converged settings; figures drafted as results arrive, not at the end.
3. **Phase 3 — packaging:** error budget, clean-rerun test, report written so each figure is cited exactly once with its claim.

### Analysis: A Worked Project Sketch (C1)

Driven pendulum, b = 0.5, ω = 2/3, A swept from 0.5 to 1.5 in steps of 0.002, each run integrating 500 drive periods with h = 0.05 and discarding the first 300 (transient). The bifurcation diagram shows: period-1 for A ≲ 1.07, period-doubling cascade to chaos by A ≈ 1.15, periodic windows inside the chaotic band. Validation: at A = 0.01 the sampled θ decays at the linear rate b/2 = 0.25 per unit time (measured 0.250 ± 0.002 from the log-envelope slope); free small oscillations period 2π ± 10⁻³. The honest error budget: integration error per period from the h-table (~10⁻⁶ in θ), transient-discard adequacy checked by doubling the discard (no visible change), and the model's own idealisation (no drive-shape harmonics) named as outside scope. Figures: the bifurcation diagram with A-axis resolution stated; one period-2 and one chaotic time series sharing a parameter caption.

### Sources of Error (project-level)

- **Unstated transients:** sampling before the transient dies pollutes bifurcation diagrams and modal energies alike; state the discard and test doubling it.
- **Figure-first analysis:** choosing the plot that looks dramatic, then finding numbers to support it; the specification page exists to make this reversal visible.
- **Version drift:** a rerun months later on updated libraries can shift chaotic trajectories visibly; the frozen environment is the fix, and the clean-rerun check is the proof.
- **Seed superstition:** a result that changes qualitatively across seeds is an un-converged result, not bad luck; convergence in the observable, not the trajectory, is the target (especially in C1).
- **Colormap misuse:** rainbow maps create false edges in smooth data; quantitative heatmaps need perceptual uniformity and a labelled colorbar.

## Key Ideas

- A computational experiment is specified before it is run, validated while it is run, and packaged so it can be rerun by anyone.
- Convergence tables justify digits; error budgets rank doubts; both belong in the report, not the appendix.
- Honest visualisation is a method claim: labelled axes, log scales for ratios, perceptually uniform maps, captions carrying parameters.
- Reproducibility is tested, not declared: seeded randomness, frozen versions, and a clean rerun that regenerates every figure.
- The interpretation states limits of validity as prominently as results.

## Worked Examples

#### Example 1: A validation statement that earns its digits

"At A = 0.01 the log-envelope of θ(t) has slope −0.250 ± 0.002 over 20 periods, against the linear prediction −b/2 = −0.25; RK4 at h = 0.05 vs h = 0.025 shifts the slope by 4 × 10⁻⁵." A number, an uncertainty, and a resolution check — complete.

#### Example 2: The clean-rerun catches a silent change

A C2 project's parameter-error curve shifted by a factor of 3 between drafting and packaging. Diagnosis: a library update changed the default pivoting in the least-squares path. Freezing versions restored the drafting numbers; the report notes the sensitivity. The rerun test did its job precisely because it was run.

#### Example 3: A figure caption that stands alone

"Bifurcation diagram of the driven pendulum (b = 0.5, ω = 2/3): long-time θ sampled once per drive period after discarding 300 transient periods; A swept 0.5 → 1.5 in steps of 0.002; integration by RK4 at h = 0.05 (convergence table 2 shows < 10⁻⁵ sensitivity to h)." The claim, the parameters, and the resolution — a reader needs nothing else.

## Common Misconceptions

- **"The code worked, so the result is right."** Working code produces whatever the model and settings dictate; validation against known corners is what connects it to truth.
- **"Reproducibility is for other people."** The most common beneficiary of the archive is you, weeks later, when a reviewer (or examiner) asks how a number was produced.
- **"More colours mean more information."** Colour carries one scalar channel well; rainbow maps carry artifacts. Uniform maps and clear colorbars communicate more with less.
- **"Chaotic trajectories must match seed-for-seed to be reproducible."** Reproducibility means the same code and seed give the same numbers; the *physics* claim should be stable across seeds (statistics, not individual orbits).
- **"The report is done when the plots are in."** The report is done when each figure is cited once, with its claim, its parameters, and its limits — and the rerun proves it.

## Connections

- **Lessons 1–5:** every tool in the menu was calibrated there; the capstone reuses them under new questions.
- **Mathematics Lab using Python III (Sem 6):** the same deliverable contract returns with transforms, optimisation, and sparse linear algebra — the standard is cumulative.
- **Numerical Methods theory:** the convergence and stability theorems supply the validation targets every project leans on.
- **Beyond the course:** specification, validation, convergence, budget, honest figures, provenance — the working standard of computational research.

## Quick Check

1. What must the specification page contain, and why is it written before code?
2. What makes a figure "stand alone" by this lesson's rules?
3. What goes into the reproducibility package, and how is it tested?
4. Why is convergence in the observable (not the trajectory) the right target for chaotic systems?
5. What belongs in the error budget besides discretisation error?

## Takeaway

The capstone's real deliverable is a habit: specify before computing, validate against every known corner, justify every digit with a convergence table, draw figures that cannot mislead, and package the work so the rerun is a formality, not a hope. Numbers produced with that discipline are evidence; numbers without it are anecdotes. That distinction is the whole of the course, and the beginning of every computational project after it.
