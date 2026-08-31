***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: mathematics-lab-using-python-iii
courseName: Mathematics Lab using Python III
moduleId: mathematics-lab-using-python-iii-module-1
moduleName: Advanced Scientific Computing in Python — SVD, Transforms and Optimisation
lessonId: mathematics-lab-using-python-iii-m1-l6
lessonName: Capstone — An Open Computational Investigation
lessonNumber: 6
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - mathematics-lab-using-python-iii-m1-l5
learningObjectives:
  - Formulate an open computational investigation from a menu — low-rank data reduction, a spectral PDE solve, a nonlinear inverse problem, or a spectral denoising pipeline — with a built-in verification target.
  - Combine the course's instruments (factorisations, iterative solvers, transforms, optimisers, diagnostics) in one reproducible pipeline.
  - Deliver a report in which every number traces to a figure, every figure states its parameters, and a clean rerun regenerates everything.
concepts:
  - Capstone project
  - Verification-first workflow
  - Error budgeting
  - Reproducibility
  - Scientific reporting
tags:
  - mathematics
  - laboratory
  - python
  - capstone
  - reproducibility
sourceType: authored-courseware
assessmentHints:
  - Each project carries a built-in verification (zero-noise recovery, an exact solution, or cross-method agreement); the report leads with it, before any new claim.
  - Figures follow Lesson 5's diagnostic standards; the reproducibility contract follows the Python II capstone.
  - Grading rewards the verification chain and honest limits, not the ambition of the topic.
status: in-review
***

# Capstone — An Open Computational Investigation

## Overview

Five lessons of instruments: the SVD and rank, sparse solvers and conjugate gradients, the FFT and its discipline, optimisers and their rates, visualisation as measurement. The capstone points them at a question without a ready-made answer and adds the professional obligations the exercises only rehearsed: verification before discovery, an error budget that names its dominant term, and a rerun a stranger can execute. Choose one project from the menu. Each is specified the same way — a question, a verification target that must pass before production runs, a figure list, and a deliverables contract. The capstone is graded the way computational work is graded in practice: not on whether the plot looks convincing, but on whether the chain from code to claim can be audited end to end.

## Learning Path

1. **Choose a project** (P1–P4 below) and write its specification page: question, verification target, success criteria — before any code.
2. **Verify first:** pass the project's built-in check (zero-noise recovery, exact solution, or cross-method agreement) on a small instance.
3. **Production runs** at converged settings; draft figures as results arrive, not at the end.
4. **Error budget and limits:** name the dominant error term with a magnitude; state one thing the experiment does not show.
5. **Package:** seeded code, recorded parameters, archived environment; the clean-rerun test must regenerate every figure.

## Core Explanation

### The project menu

- **P1 — Low-rank: compression and denoising by SVD.** Take a greyscale image or a data matrix (≥ 256 × 256). Specify a storage budget (a fraction of the full matrix) or a fidelity target (fraction of Frobenius energy retained), and find the rank that meets it. Figures: singular-value spectrum on a log axis; reconstruction error vs rank against the Eckart–Young prediction; one before/after panel for the denoising variant (add noise, truncate, measure). Verification: at full rank the reconstruction equals the original to machine precision; the measured error-vs-rank curve must match √(Σ_{j>r} σ_j²) at every r you report.
- **P2 — Spectral vs finite differences for Poisson.** Solve the 2D Poisson equation on a periodic grid by FFT — invert each Fourier mode by its −|k|² factor, pinning the zero mode — and compare against the five-point finite-difference solve from Lesson 2's machinery. Verification: for a source that is a single grid mode, the exact solution is known and the spectral solve must recover it to machine precision; the finite-difference error must scale as Δx² under halving. Figures: both solutions and their difference; error vs grid size on log-log axes for both methods on one honest plot.
- **P3 — An inverse problem: fit a damped oscillator.** Generate synthetic data y(t) = A e^{−γt} cos(ωt + φ) with Gaussian noise at two signal-to-noise levels; recover A, γ, ω, φ with nonlinear least squares (Lesson 4's machinery), reporting each parameter with its covariance-derived uncertainty and the worst parameter correlation. Verification: the zero-noise run must recover the generating parameters to the optimiser's tolerance; residuals must be structureless within ±2σ. Figures: data with fit; residuals; the uncertainty/correlation statement. Bonus: repeat with low signal-to-noise and several starting points to expose the fit's sensitivity.
- **P4 — A spectral denoising pipeline.** Build a signal of slow trend plus tones plus broadband noise, corrupt it with 50 Hz mains hum, and clean it in the Fourier domain using Lesson 3's machinery: notch the hum band, optionally low-pass, and quantify the signal-to-noise improvement in decibels. Verification: the unfiltered round trip (transform and inverse only) must return the input to ~10⁻¹²; your notch must remove exactly the bins it claims (9 bins at 0.5 Hz resolution for 48–52 Hz with f_s = 1000, T = 2). Figures: spectra before and after; the residual spectrum audited for what the filter ate besides noise.

### The deliverables contract

1. **Specification page first:** question, verification target, success criteria — written before code, so "the result" cannot redefine "the question".
2. **Verification before production:** the built-in check passes on a small instance; the report leads with it.
3. **Reproducibility by construction:** seeded randomness with the seed recorded; parameter table (grid sizes, tolerances, filter bands, starting points); library versions frozen; one-command clean rerun from the archive regenerates every figure.
4. **Error budget:** the dominant error term named with a magnitude, and the knobs that would reduce it.
5. **Figures per Lesson 5:** diagnostic, perceptually honest, captioned with their parameters; each figure cited exactly once, with its claim.
6. **Interpretation:** the answer to the specification question, its limits of validity, and one honest statement of what the experiment does not show.

### A worked failure mode: P2's zero mode

The spectral Poisson solve divides each Fourier coefficient by −|k|² — and the zero mode has |k|² = 0. The first implementation therefore returns infinities or NaNs, and the instinct is to add a small ε to the denominator. Don't: that manufactures a solution to a problem that is genuinely singular. The periodic Poisson equation has a solution only when the source has zero mean, and then only up to a constant; the honest implementation checks the mean of f, sets the zero mode of u to a pinned value (say 0), and inverts the rest exactly. With that fix the single-mode verification recovers the exact solution to machine precision — and the failure mode, documented, becomes the report's best paragraph.

## Analysis

Expect each project to produce one honest negative alongside its positive. P1: the rank that meets a tight storage budget visibly smears fine texture — the Eckart–Young curve predicts exactly how much, and the report should show the prediction and the smear side by side. P2: finite differences stay at Δx² accuracy while the spectral method is exact for smooth single modes — but feed the spectral solver a discontinuous source and Gibbs oscillations appear at the jump, an honest O(1) local error that no grid refinement removes pointwise. P3: at low signal-to-noise the parameter correlations tighten (γ and A trade off against each other again, as in Lesson 4's decay fit) and multi-start fits may land in different local minima — report the spread, not the prettiest. P4: the notch removes the hum exactly, but if any signal tone sits inside 48–52 Hz it dies with the hum — the residual-spectrum audit is where that casualty appears, and the report must name it.

## Key Ideas

- Every project ships with its own verification target; passing it is the entry ticket to production runs.
- The deliverables contract (specification, verification, reproducibility, budget, figures, limits) is the capstone's grading rubric and the discipline of computational work generally.
- Singular problems (the zero mode) are solved by understanding, never by adding ε.
- Honest negatives — the smear, the Gibbs oscillation, the casualty bin — belong in the report next to the positives.
- A capstone is finished when a stranger can rerun it and see the same error budget, not when the plots look right.

## Worked Examples

#### Example 1: The specification page for P4

Question: how much signal-to-noise improvement does notch-plus-low-pass deliver on a hum-corrupted measurement, and what signal bandwidth does it cost? Verification: round-trip identity to ~10⁻¹²; notch removes exactly bins 48–52 Hz and nothing else on a tone audit. Success criteria: SNR improvement in dB with the noise band stated; residual spectrum audited; one statement of which signal components, if any, the filter touches. Written before any code — and it is what the conclusion answers, sentence for sentence.

#### Example 2: Reading P1's curve against theory

Singular values decay fast on natural images; the measured reconstruction error at ranks r = 5, 10, 20, 40 lies on the Eckart–Young prediction √(Σ_{j>r} σ_j²) to plotted precision. The figure's claim is therefore not "compression works" but "the optimal rank for this budget is 20, and theory says no other rank-20 matrix could have done better" — a much stronger sentence, bought by plotting prediction and measurement together.

#### Example 3: The rerun that caught the drift

A P3 report quoted uncertainties from a fit at 200 time points; the archived rerun produced 100-point data — the parameter table had been regenerated after a late change without refitting. The clean-rerun test exists precisely for this: the mismatch between "the result" and "the code that produced it" is caught by the archive, not by the reader. Fix, rerun, requote — and record the incident in the report's provenance note.

## Common Misconceptions

- **"The plot convinces; the code merely produces."** The plot is the last link in a chain whose earlier links are verification, budgeting and provenance; a convincing plot with a broken link is a polished error.
- **"Verification is for exercises; the capstone is discovery."** The capstone's claims are worth exactly its verification chain; an unverified discovery is an anecdote.
- **"Adding ε fixes the singularity."** It hides it; the singular problem's structure (zero mean, pinned constant) is the actual solution.
- **"Uncertainties are automatic output."** They are conditional on model, noise and data adequacy — and at low signal-to-noise the conditions fail first.
- **"The report is done when the figures are in."** It is done when the clean rerun regenerates them and every caption states its parameters.

## Connections

- **Lessons 1–4:** P1 is Lesson 1 with a budget; P2 is Lesson 2 versus Lesson 3's transform machinery; P3 is Lesson 4 with correlations; P4 is Lesson 3 with Lesson 5's audit figures.
- **Lesson 5:** every figure in every project is held to its standards — perceptually honest colormaps, windowed fits, annotated histories.
- **Python II capstone:** the reproducibility contract (seeds, versions, clean rerun) is inherited unchanged and enforced here on harder problems.
- **Beyond the course:** specification, verification, budget, figures, provenance — the working standard of computational research.

## Quick Check

1. What must pass before production runs begin, and where does it appear in the report?
2. Why is the zero mode of the periodic Poisson solve a structural fact rather than a numerical nuisance?
3. Name the six items of the deliverables contract.
4. What makes an "honest negative" worth reporting, and give one from the menu.
5. What does the clean-rerun test catch that careful writing cannot?

## Takeaway

The capstone is not a harder exercise; it is the whole discipline on one problem: write the question before the code, verify before you discover, budget your errors, render honestly, and leave a rerun trail a stranger can follow. Do that, and the number you report is not just computed — it is defended.
