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
lessonId: mathematics-lab-using-python-ii-m1-l1
lessonName: Linear Systems, Factorisations and the Condition Number
lessonNumber: 1
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - calculus-using-python-m2-l3-capstone
learningObjectives:
  - Solve linear systems Ax = b in NumPy using LU factorisation with partial pivoting, and measure residuals to judge solution quality.
  - Compute and interpret the condition number; predict and demonstrate error amplification in ill-conditioned systems.
  - Distinguish floating-point reality from textbook algebra: rounding, residual checks, and why det(A) is not a reliable diagnostic.
concepts:
  - LU factorisation
  - Partial pivoting
  - Residual and backward error
  - Condition number
  - Ill-conditioned systems
  - Floating-point arithmetic
tags:
  - mathematics
  - laboratory
  - python
  - linear-algebra
  - numerical-methods
sourceType: authored-courseware
assessmentHints:
  - Judge a solution by its residual r = b − Ax, not by how plausible x looks.
  - Condition number κ(A) = ||A|| ||A⁻¹|| bounds relative error amplification: ||δx||/||x|| ≲ κ(A) · ||δb||/||b||.
  - Hilbert matrices H_n are the standard ill-conditioned test family; κ grows exponentially with n.
status: in-review
***

# Linear Systems, Factorisations and the Condition Number

## Overview

Solving Ax = b is the most common operation in scientific computing — and the first place where floating-point arithmetic betrays textbook expectations. A solution can look wrong while its residual is tiny, and look right while it is catastrophically wrong; the difference is the condition number of the matrix. This lesson builds the working habits of numerical linear algebra in NumPy: solve with factorisations, never with explicit inverses; audit every answer with its residual; and treat κ(A), not det(A), as the warning light. The Hilbert matrices provide the stress test: systems so ill-conditioned that four digits of input error become total output garbage.

## Learning Path

1. **Review Gaussian elimination** and why partial pivoting is non-negotiable.
2. **Solve systems in NumPy** via scipy.linalg.solve (LU underneath); compute residuals.
3. **Perturb the right-hand side** and measure the amplification; compare with κ(A).
4. **Stress test with Hilbert matrices:** watch residuals stay tiny while solutions disintegrate.
5. **Benchmark against the explicit inverse** and learn why `solve` beats `inv` in speed and accuracy.
6. **Diagnose:** build the intuition for which matrices are dangerous and why.

## Core Explanation

### Theory: Factorisation, not inversion

Gaussian elimination factors A = PLU (permutation, lower, upper triangular); solving then costs two triangular substitutions, O(n²) after the O(n³) factorisation. Partial pivoting — swapping rows so the pivot is the largest available entry in its column — keeps the multipliers bounded and is what makes the algorithm stable in floating point. The explicit inverse A⁻¹ is never formed: computing it costs more, stores more, and accumulates more rounding than the solve. In code: `scipy.linalg.solve(A, b)` (or `scipy.linalg.lu_factor`/`lu_solve` for repeated right-hand sides), never `np.linalg.inv(A) @ b`.

The quality of a computed x̂ is judged by its residual r = b − Ax̂: small residual means x̂ solves a *nearby* system (backward stability). Whether that nearby system's solution is close to the true one is a separate question, governed by conditioning.

### Theory: The condition number

κ(A) = ||A||·||A⁻¹|| measures the worst-case sensitivity of the solution to perturbations:

||δx||/||x|| ≲ κ(A) · (||δb||/||b|| + ||δA||/||A||).

κ = 1 (orthogonal matrices) amplifies nothing; κ = 10⁸ can convert eight-digit input data into zero-digit output. A useful rule: you can lose up to log₁₀κ(A) decimal digits. Note that det(A) carries almost no information here — a matrix can have det = 1 and κ = 10¹⁰.

### Numerical Setup (Apparatus)

- Python: numpy, scipy.linalg, matplotlib. Double precision throughout (float64); machine epsilon ≈ 2.2 × 10⁻¹⁶.
- Test systems: random well-conditioned matrices (n = 50), diagonally dominant systems, and Hilbert matrices H_n with (H_n)_ij = 1/(i + j − 1), n from 4 to 14.
- Norms: the 2-norm (np.linalg.norm with default ord), and κ from np.linalg.cond.
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Baseline solve:** generate a random 50 × 50 matrix A and a random b; solve; compute the residual norm and the relative residual ||r||/||b||.
2. **Verify the solution another way:** with A fixed, solve for x_true from a known x and compare; count correct digits against κ(A).
3. **Perturbation experiment:** perturb b by relative 10⁻⁶; measure ||δx||/||x||; compare with κ(A) × 10⁻⁶.
4. **Hilbert sweep:** for n = 4, 6, 8, 10, 12, 14: solve H_n x = 1 (the all-ones right-hand side); record κ(H_n), the residual, and the error against a high-precision reference (or against the known structure).
5. **Inverse benchmark:** time and residual-compare `solve(A, b)` vs `inv(A) @ b` at n = 200.
6. **Plot:** log κ(H_n) vs n; digits lost vs log₁₀ κ.

### Analysis

#### Residuals vs truth

For the random well-conditioned systems (κ ~ 10²), relative residuals land at ~10⁻¹⁵ and the solutions agree with the reference to ~14 digits: κ costs about two digits, exactly as log₁₀ κ predicts. The story inverts for Hilbert matrices: at n = 12, κ(H_12) ≈ 10¹⁶, the residual stays ~10⁻¹⁴ (the computed x̂ solves a nearby system faithfully) while the error against the reference is O(1) — every digit lost. Small residual, worthless answer: the pair is the whole lesson.

#### Amplification measured

Perturbing b by 10⁻⁶ amplifies into ||δx||/||x|| ≈ κ(A) × 10⁻⁶ up to O(1) factors, saturating the bound for unlucky directions. Repeating with random perturbation directions typically lands a factor below the bound — the bound is worst-case; the experiment shows both the scaling and the direction dependence.

#### solve vs inv

At n = 200, `solve` is roughly 2–3× faster than forming the inverse, and its residual is typically a few times smaller. Neither advantage is the real point: the habit of never forming A⁻¹ prevents a class of slow, inaccurate code by construction.

### Sources of Error

- **No pivoting:** elimination without pivoting fails on matrices with small leading minors (e.g. [[0, 1], [1, 0]]) and degrades on many others; always use the pivoted library routines.
- **Residual-only confidence:** as the Hilbert sweep shows, a tiny residual certifies backward error, not forward error; condition decides the gap.
- **Determinant diagnostics:** det near zero suggests singularity but scales with n and units; κ is the quantity that bounds error growth.
- **Accumulated formation error:** building A from data with fewer significant digits than the solver assumes pushes the true error floor up; the bound applies to the data you have, not the data you wished for.
- **Norm confusion:** mixing ∞-norms and 2-norms between κ and the error estimate muddies the comparison; fix one norm per experiment.

## Key Ideas

- Solve via LU with partial pivoting; never form the inverse.
- The residual r = b − Ax̂ measures backward error — how nearby a problem you solved; conditioning decides what that implies about the true answer.
- κ(A) bounds digit loss: expect up to log₁₀κ(A) digits gone; Hilbert matrices make this visceral.
- Determinants diagnose nothing about sensitivity; condition numbers do.
- Experiment design: known-answer tests, controlled perturbations, and a sweep of conditioning turn vague caution into quantified practice.

## Worked Examples

#### Example 1: Counting digits

A random n = 50 system with κ(A) ≈ 300 and a right-hand side accurate to machine precision (16 digits): expect ~16 − log₁₀(300) ≈ 13.5 correct digits. The measured error ||x̂ − x_ref||/||x_ref|| ≈ 4 × 10⁻¹⁴ — 13.4 digits. The rule works.

#### Example 2: Hilbert breakdown

H_10: κ ≈ 1.6 × 10¹³ → ~3 digits survive; H_12: κ ≈ 10¹⁶ → nothing survives. In both cases the relative residual is ≤ 10⁻¹³. A report that quotes the H_12 solution without κ is quoting noise; the sweep's plot of digits-lost vs log₁₀κ with unit slope is the quantitative statement.

#### Example 3: Fixing an ill-posed fit

Polynomial fitting through 12 equally spaced points produces a Vandermonde system with κ ~ 10¹⁴ — wild oscillations between points (the Runge phenomenon's linear-algebra cousin). Switching to a well-conditioned basis (shifted/scaled Legendre polynomials) drops κ to ~10² and the oscillations vanish: the problem was the basis, not the data.

## Common Misconceptions

- **"A tiny residual means a correct answer."** It means a nearby problem was solved; conditioning decides whether nearby problems have nearby answers.
- **"The inverse is needed whenever x appears repeatedly."** Factor once, solve many times — the LU factors are the reusable object.
- **"Ill-conditioning is a numerical bug."** It is a property of the mathematical problem; a perfect solver would still amplify input errors by κ.
- **"Double precision is always enough."** It provides 16 digits; κ = 10¹⁰ leaves 6. Precision is a budget, not a guarantee.
- **"Bigger determinant means better conditioned."** Scaling A by 10 multiplies det by 10ⁿ and leaves κ untouched; sensitivity lives in the singular-value spread, not the volume.

## Connections

- **Calculus using Python (Sem 2):** array computing, plotting, and script discipline carry straight over; the linear algebra is new.
- **Numerical Methods (Sem 4 theory):** the conditioning and stability theorems appear here as measured quantities.
- **Lesson 2:** eigenvalue computations inherit the same floating-point discipline; power iteration's convergence is another conditioning story.
- **Physics labs:** least-squares fitting of lab data is a linear system; its reliability is governed by exactly this lesson's κ.

## Quick Check

1. Why is partial pivoting necessary, and where does NumPy/SciPy get it?
2. Define the residual and explain what it does and does not certify.
3. State the condition-number error bound and the digits-lost rule.
4. Why do Hilbert matrices make such effective stress tests?
5. Why is `solve` preferred over `inv(A) @ b` beyond speed?

## Takeaway

Numerical linear algebra replaces "did the algebra work?" with two sharper questions: how nearby a problem did I actually solve (residual), and how violently does the true problem amplify perturbations (condition number)? Form the habit now — factor, don't invert; residual, then condition; trust digits only after κ has approved them — and every later lab in this course, from ODEs to least squares, inherits a foundation it can stand on.
