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
lessonId: mathematics-lab-using-python-ii-m1-l4
lessonName: Boundary Value Problems and the Heat Equation — Stability of FTCS
lessonNumber: 4
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - mathematics-lab-using-python-ii-m1-l3
learningObjectives:
  - Solve two-point boundary value problems by finite differences, reducing them to tridiagonal linear systems, and verify against analytic solutions.
  - Implement the FTCS scheme for the 1D heat equation and validate it on the exactly-decaying sine mode.
  - Demonstrate the stability condition r = αΔt/Δx² ≤ 1/2 by running on both sides of it, and measure second-order spatial convergence.
concepts:
  - Boundary value problem
  - Finite differences
  - Tridiagonal systems
  - Heat equation
  - FTCS scheme
  - Stability condition
tags:
  - mathematics
  - laboratory
  - python
  - partial-differential-equations
  - finite-differences
sourceType: authored-courseware
assessmentHints:
  - BVP: −u'' = f with fixed ends gives the tridiagonal system (1/Δx²)·tridiag(−1, 2, −1) u = f.
  - FTCS update: u_j^{n+1} = u_j^n + r(u_{j+1}^n − 2u_j^n + u_{j-1}^n), r = αΔt/Δx²; stable iff r ≤ 1/2.
  - Validation standard: the sine mode sin(πx) decays exactly as e^{−απ²t}; check the rate, then check the stability boundary.
status: in-review
***

# Boundary Value Problems and the Heat Equation — Stability of FTCS

## Overview

Two ideas meet here, both built from the same finite-difference bricks. First, boundary value problems: unlike initial-value problems, the data sit at both ends, and the solution comes not from stepping forward but from solving a linear system — the tridiagonal machinery of Lesson 1, reused. Second, the heat equation, the prototype time-dependent PDE, marched forward by the FTCS scheme. The heat equation is forgiving physics but unforgiving numerics: its explicit discretisation carries a sharp stability condition, r ≤ 1/2, that you will locate experimentally — watching a solution that is smooth, bounded, and physical explode into oscillating garbage the moment r crosses the line. Along the way, the single sine mode provides an exact solution to validate everything against.

## Learning Path

1. **Discretise the two-point BVP** −u'' = f with Dirichlet ends; recognise the discrete Laplacian from Lesson 2.
2. **Solve the tridiagonal system** and validate against an analytic solution.
3. **Set up the heat equation** and the FTCS update; derive (or verify) the amplification-factor stability condition r ≤ 1/2.
4. **Validate on the sine mode:** u(x, 0) = sin(πx) must decay as e^{−απ²t}.
5. **Cross the stability boundary:** run r = 0.49 and r = 0.51 on identical data; compare fates.
6. **Convergence and diffusion:** measure the spatial order with r fixed; visualise a step profile smoothing out.

## Core Explanation

### Theory: The BVP as a linear system

For −u'' = f on (0, 1) with u(0) = a, u(1) = b, the central difference u''(x_j) ≈ (u_{j+1} − 2u_j + u_{j−1})/Δx² turns the problem into (1/Δx²)·L u = f, where L = tridiag(−1, 2, −1) on the interior points — the discrete Laplacian of Lesson 2, now inverted rather than diagonalised. Boundary values enter as known terms moved to the right-hand side. Validation case: f = π² sin(πx), a = b = 0 has exact solution u = sin(πx); the discrete solution converges to it as Δx².

### Theory: FTCS for the heat equation

For u_t = α u_{xx} with the same central difference in space and a forward difference in time:

u_j^{n+1} = u_j^n + r (u_{j+1}^n − 2u_j^n + u_{j−1}^n), r = αΔt/Δx².

Von Neumann analysis writes each Fourier mode's amplification factor as g(θ) = 1 − 4r sin²(θ/2). Stability (|g| ≤ 1 for all θ) requires r ≤ 1/2. The worst mode is the grid-scale oscillation θ = π, amplified by 1 − 4r: harmless decay at r = 0.49 (factor −0.96), growing sign-alternating explosion at r = 0.51 (factor −1.04). The condition is not a suggestion about accuracy — below it the error is small; above it no amount of precision saves the run.

### Theory: The exact benchmark

With α = 1, domain [0, 1], zero boundary values, and u(x, 0) = sin(πx), separation of variables gives u(x, t) = e^{−π²t} sin(πx): a single mode decaying exponentially, nothing else. It is the perfect validation target — one number to check at any time, sensitive to both the spatial operator and the time stepping.

### Numerical Setup (Apparatus)

- Python: numpy, scipy.linalg.solve_banded (or Lesson 1's Thomas solver), matplotlib.
- BVP: n = 49 interior points (Δx = 0.02); validation against sin(πx).
- Heat equation: α = 1, Δx = 0.01, zero Dirichlet ends; r = 0.4 as the default (Δt = 4 × 10⁻⁵).
- Stability runs: same initial data at r = 0.49 and r = 0.51 (adjusting Δt), 1000 steps each.
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Assemble and solve the BVP** for f = π² sin(πx); plot the discrete solution against sin(πx); record the max-norm error.
2. **Refine Δx** (25, 49, 99 interior points); confirm the error drops by ~4× per refinement (second order).
3. **FTCS validation:** start from sin(πx) with r = 0.4; compare u(0.5, 0.1) with e^{−π²·0.1} = 0.37270.
4. **Stability boundary:** run r = 0.49 and r = 0.51 for 1000 steps from the same smooth data; plot both final profiles.
5. **Convergence at fixed r:** halve Δx (and hence Δt, keeping r = 0.4); measure the error drop at (x, t) = (0.5, 0.1).
6. **Diffusion visualisation:** step initial profile (1 for x < 0.5, else 0); animate or plot snapshots at t = 0, 0.002, 0.01, 0.05.

### Analysis

#### BVP solution

The discrete solution for f = π² sin(πx) matches sin(πx) with max error ≈ 3.3 × 10⁻⁴ at Δx = 0.02 — consistent with the truncation estimate π²Δx²/12 ≈ 3.3 × 10⁻⁴. Refining to Δx = 0.01 and 0.005 reduces the error by 4.0× and 4.0×: clean second order, and the tridiagonal solve (Lesson 1's machinery) handles all three sizes instantly.

#### Sine-mode decay

At t = 0.1, r = 0.4, Δx = 0.01: u_num(0.5, 0.1) = 0.37268 against the exact 0.37270 — error ~2 × 10⁻⁵. The scheme reproduces the decay rate e^{−π²t} to five digits, validating the spatial operator and the time stepping in one measurement. Tracking the mode amplitude on a log plot gives a straight line of slope −π² to within 10⁻⁴.

#### The stability boundary, side by side

From identical smooth data after 1000 steps: the r = 0.49 profile is the correctly decayed sine; the r = 0.51 profile is grid-scale oscillation with amplitude ~10¹⁷ — the factor |1 − 4r|^{1000} = 1.04^{1000} ≈ 10¹⁷, exactly as predicted. A 2% change in Δt separates a perfect solution from total blow-up; the boundary r = 1/2 is sharp.

#### Convergence and the diffusing step

With r fixed at 0.4, the error at (0.5, 0.1) runs 1.9 × 10⁻⁴ (Δx = 0.02), 4.8 × 10⁻⁵ (Δx = 0.01), 1.2 × 10⁻⁵ (Δx = 0.005) — ratios 4.0 and 4.0: second order in space, as designed. The step profile snapshots show the discontinuity smoothing on the scale √(2αt): by t = 0.01 the front has rounded into a smooth ramp several grid-widths wide, and the maximum principle holds numerically — no overshoot beyond [0, 1] while r ≤ 1/2.

### Sources of Error

- **r drift:** when Δx changes, Δt must change as Δx² to hold r fixed; forgetting this converts a convergence study into a stability accident.
- **Boundary injection errors:** boundary values enter the first and last rows of the system/update; a half-grid shift or missed factor shows up as a kink near the ends.
- **Initial-condition sampling:** sin(πx) sampled at grid points is exact to sample, but a step profile sits between grid points for even N — state where the jump lands.
- **Overreading unstable runs:** an unstable FTCS run can look fine for dozens of steps before exploding; never certify stability from a short window.
- **Mode confusion in validation:** a non-sine initial condition excites many modes; the clean e^{−π²t} check works only because the initial data is a single eigenmode.

## Key Ideas

- BVPs trade marching for solving: the discrete Laplacian appears again, this time inverted as a tridiagonal system.
- FTCS is consistent, explicit, and conditionally stable: r = αΔt/Δx² ≤ 1/2, with the grid-scale mode as the executioner.
- The sine mode e^{−απ²t} sin(πx) is the validation standard — one exact number per time.
- Crossing the stability boundary changes the qualitative behaviour (decay → alternating growth), not just the accuracy.
- Fixed-r refinement exposes the spatial order: halving Δx quarters the error while the cost per unit time quadruples.

## Worked Examples

#### Example 1: Predicting the decay

α = 1, t = 0.1: e^{−π²/10} = e^{−0.98696} = 0.37270 at x = 0.5. The scheme's own effective decay factor, (1 − 4r sin²(πΔx/2))^{t/Δt} with r = 0.4, Δx = 0.01, evaluates to 0.37268 — the discrepancy 2 × 10⁻⁵ is the method's honest truncation error, and knowing it in advance is what makes the check quantitative.

#### Example 2: Blow-up arithmetic

r = 0.51: the worst mode multiplies by 1 − 4r = −1.04 per step. After 1000 steps, magnitude 1.04^{1000} = e^{1000 × 0.03922} ≈ e^{39.2} ≈ 10¹⁷, sign alternating every step. No physical solution grows like that from bounded data — the arithmetic diagnoses the instability before the plot does.

#### Example 3: The cost of r

To halve Δx at fixed r = 0.4 requires quartering Δt — four times as many steps, each over twice as many points: ~8× the work for 4× the accuracy. That ratio (work ∝ accuracy²) is the signature tax of explicit parabolic schemes and the motivation for implicit methods later in the programme.

## Common Misconceptions

- **"Instability means the code has a bug."** The code can be flawless; r > 1/2 makes the exact discrete scheme explode. Stability is a parameter choice, not a debugging target.
- **"A small initial oscillation is harmless."** The unstable mode grows by |1 − 4r| every step regardless of initial size; roundoff alone is enough seed.
- **"More time accuracy removes the restriction."** FTCS's limit comes from pairing explicit time stepping with the centred Laplacian; implicit time stepping (Crank–Nicolson) is what lifts it.
- **"The BVP solve is just the heat equation at steady state."** Conceptually related, but the BVP system is elliptic and solved once; confusing the workflows leads to wrong boundary handling.
- **"Second-order convergence proves correctness."** It proves consistency and clean implementation; the absolute check against e^{−π²t} is what proves correctness.

## Connections

- **Lesson 1:** the tridiagonal factorisation solves the BVP system; conditioning ideas carry over (the discrete Laplacian's condition number grows as Δx⁻²).
- **Lesson 2:** the same matrix L, whose eigenvectors are precisely the sine modes that diagonalise the heat equation's evolution.
- **Lesson 3:** stability logic transfers from ODEs — "accurate per step" never implies "bounded in time".
- **Physics:** diffusion, thermal conduction, and the maximum principle; Fourier's law meets von Neumann's analysis.

## Quick Check

1. What linear system does −u'' = f with fixed ends produce, and why is it cheap to solve?
2. State the FTCS update and its stability condition.
3. Why is the sine mode the ideal validation initial condition for the heat equation?
4. What does the worst mode do per step at r = 0.51, and what is its size after 1000 steps?
5. When refining at fixed r, how do error and work each change under Δx → Δx/2?

## Takeaway

The heat equation teaches the two great habits of PDE computing: validate against exact modes before trusting any complex evolution, and respect the stability condition as a hard physical boundary of the discrete world. A scheme that passes the sine-mode test and survives the r = 0.49/0.51 comparison has earned its place in the toolkit — and the blow-up at r = 0.51 becomes not a failure but a measured confirmation of theory.
