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
lessonId: mathematics-lab-using-python-ii-m1-l2
lessonName: Eigenvalues by Iteration and by Library — Normal Modes of a Chain
lessonNumber: 2
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - mathematics-lab-using-python-ii-m1-l1
learningObjectives:
  - Implement the power method with Rayleigh-quotient estimates and verify its convergence rate |λ_2/λ_1| against theory.
  - Cross-check iterative eigenvalues against numpy.linalg.eigh and against the analytic spectrum of the discrete Laplacian.
  - Apply the machinery to a physical eigenproblem — the normal modes of a mass–spring chain — and visualise the modes.
concepts:
  - Eigenvalue problem
  - Power iteration
  - Rayleigh quotient
  - Convergence rate
  - Discrete Laplacian spectrum
  - Normal modes
tags:
  - mathematics
  - laboratory
  - python
  - linear-algebra
  - eigenvalues
sourceType: authored-courseware
assessmentHints:
  - Power iteration: x_{k+1} = Ax_k/||Ax_k||; eigenvalue estimate from the Rayleigh quotient ρ_k = x_k^T A x_k / x_k^T x_k.
  - Convergence is linear with ratio |λ_2/λ_1|; verify by plotting the error ratio between successive iterations.
  - Analytic check: tridiag(−1, 2, −1) of size n has eigenvalues 2 − 2cos(jπ/(n+1)); chain frequencies are ω_j = 2√(k/m) sin(jπ/(2(n+1))).
status: in-review
***

# Eigenvalues by Iteration and by Library — Normal Modes of a Chain

## Overview

Eigenvalue problems decide stability, resonance, and long-time behaviour across all of applied mathematics, and they come in two computational flavours: dense library routines that give everything at once, and iterative methods that extract one (or a few) eigenvalues at a cost that scales with matrix–vector products. You will build the power method from scratch, measure its convergence rate against the theoretical ratio |λ_2/λ_1|, and cross-validate it against numpy.linalg.eigh on a matrix with a known analytic spectrum. The payoff application is physical: the same tridiagonal matrix governs the normal modes of n masses joined by springs, so the eigenvectors you compute are literally the shapes in which the chain can oscillate without changing form — and you will plot them.

## Learning Path

1. **Review the eigenproblem** and why symmetric matrices (real spectra, orthogonal eigenvectors) are the friendly case.
2. **Implement power iteration** with normalisation and Rayleigh-quotient tracking.
3. **Measure the convergence rate;** confirm the |λ_2/λ_1| law by varying the spectral gap.
4. **Validate against the analytic spectrum** of the discrete Laplacian tridiag(−1, 2, −1).
5. **Cross-check with numpy.linalg.eigh** — full spectrum in one call.
6. **Apply:** normal modes of a mass–spring chain; visualise the lowest modes.

## Core Explanation

### Theory: Power iteration

For symmetric A with |λ_1| > |λ_2| ≥ ..., repeated multiplication amplifies the dominant eigenvector component: iterate x_{k+1} = Ax_k/||Ax_k||. The eigenvalue estimate from the Rayleigh quotient ρ_k = x_k^T A x_k/(x_k^T x_k) converges quadratically in the angle to the eigenvector — in practice the error ratio ρ-error_{k+1}/ρ-error_k approaches (λ_2/λ_1)², while the vector itself converges at ratio |λ_2/λ_1|. Two practicalities: start from a random x (a vector exactly orthogonal to v_1 never converges to it, up to rounding), and stop on |ρ_k − ρ_{k−1}| below a tolerance tied to how many digits you claim.

The method's limitations are structural: one eigenvalue per run (deflation or shifts reach the others), and slow convergence when the spectral gap is thin. Both limitations are features in this lesson — you will measure them.

### Theory: The discrete Laplacian and the mass–spring chain

The n × n matrix L = tridiag(−1, 2, −1) is the finite-difference second derivative with fixed ends, and its spectrum is known exactly: λ_j = 2 − 2cos(jπ/(n+1)), j = 1...n. The same matrix appears in mechanics: n equal masses m on springs of stiffness k between fixed walls have equations m ü = −k L u, so normal-mode frequencies satisfy ω_j² = (k/m) λ_j, i.e.

ω_j = 2√(k/m) sin(jπ/(2(n+1))).

Eigenvector j is the mode shape: displacements proportional to sin(ijπ/(n+1)) along the chain. Power iteration on L finds the *largest* λ (the highest, most oscillatory mode); on L⁻¹ or a shifted matrix it finds the lowest — here you will get the largest directly and read the rest off the library.

### Numerical Setup (Apparatus)

- Python: numpy, matplotlib; random starts with a fixed seed (reproducibility).
- Matrix: L = tridiag(−1, 2, −1), sizes n = 20 and n = 100 (store as dense arrays here; the structure is what matters).
- Library reference: np.linalg.eigh (symmetric routines, sorted ascending).
- Chain parameters for the application: k = 1, m = 1, n = 12 masses.
- Record all parameters alongside outputs.

### Procedure

1. **Build L** for n = 20; compute the full spectrum with eigh as the reference; note λ_n and λ_{n−1}.
2. **Power iteration:** run from a seeded random start; log |ρ_k − λ_n| each iteration.
3. **Convergence law:** plot successive error ratios; confirm the approach to (λ_{n−1}/λ_n)² for the Rayleigh quotient (equivalently |λ_{n−1}/λ_n| for the vectors).
4. **Gap experiment:** repeat on a family with tunable gap (e.g. diag(1, r, r², ...) with r from 0.5 to 0.99); plot iterations-to-tolerance vs 1/(1 − r).
5. **Analytic validation:** overlay λ_j = 2 − 2cos(jπ/(n+1)) on the eigh spectrum for n = 100; quantify agreement.
6. **Chain modes:** with k = m = 1, n = 12, compute ω_j and plot mode shapes j = 1, 2, 3, and n as stem plots.

### Analysis

#### Power iteration diagnostics

For n = 20: λ_20 = 2 − 2cos(20π/21) ≈ 3.9777, λ_19 ≈ 3.9111 — ratio 0.9833, a deliberately thin gap. The Rayleigh quotient reaches 10⁻⁶ in ~410 iterations; the measured error ratio plateaus at (0.9833)² ≈ 0.9668, exactly the predicted rate. The gap experiment confirms the scaling: iterations-to-tolerance grows like 1/(1 − r²), roughly 30 iterations at r = 0.5 and several thousand near r = 0.99. Slow convergence near spectral degeneracy is not a bug to work around but the method's defining property.

#### Analytic validation

eigh's spectrum for n = 100 agrees with 2 − 2cos(jπ/101) to relative ~10⁻¹³ across all 100 eigenvalues — the library is validated on your machine, and you now have a forever-reference for future eigensolvers. The largest eigenvalue approaches 4 from below as n grows: the discrete Laplacian's spectral radius tends to the continuum operator's bound.

#### Chain modes

With k = m = 1, n = 12: ω_1 = 2 sin(π/26) ≈ 0.2411, ω_2 ≈ 0.4786, ω_3 ≈ 0.7092, and the top mode ω_12 = 2 sin(12π/26) ≈ 1.9854. The mode shapes are clean sinusoidal envelopes — mode j has j − 1 internal nodes — and the highest mode alternates sign every mass. Simulating the chain from initial condition = mode shape j reproduces pure sinusoidal motion at ω_j (a preview of Lesson 3's ODE tools), which closes the loop between eigenvector and physics.

### Sources of Error

- **Unlucky starts:** a random start with negligible v_1 component converges late or (in exact arithmetic) not at all; seeding and checking the projection onto v_1 rules this out.
- **Stopping too soon:** |ρ_k − ρ_{k−1}| can look small while the *vector* is still rotating; tie tolerances to the quantity you will use.
- **Gap misreading:** measuring the vector ratio but quoting the quotient rate (or vice versa) mixes (λ_2/λ_1) with its square; state which observable you fit.
- **Non-symmetric inputs:** the Rayleigh-quotient theory used here assumes symmetry; non-normal matrices can make power iteration converge to nothing useful without any error message.
- **Node-count miscounts in mode plots:** mode j has j − 1 internal nodes (fixed ends are not counted); off-by-one confusions are the classic mode-shape error.

## Key Ideas

- Power iteration finds the dominant eigenpair using only matrix–vector products; the Rayleigh quotient polishes the eigenvalue estimate.
- Convergence is linear with ratio |λ_2/λ_1| (squared for the Rayleigh quotient); thin gaps are expensive by law, not by accident.
- The discrete Laplacian has the closed spectrum 2 − 2cos(jπ/(n+1)) — a permanent validation standard.
- Mass–spring chains turn eigenvectors into pictures: mode shapes with j − 1 internal nodes, frequencies 2√(k/m) sin(jπ/(2(n+1))).
- Iterative and dense methods cross-validate each other; agreement to 10⁻¹³ on a known spectrum certifies the library for future unknowns.

## Worked Examples

#### Example 1: Predicting the iteration count

Gap ratio r = 0.98, target relative error 10⁻⁶ for the Rayleigh quotient: the error decays like (r²)^K, so K ≈ 6/(−2 log₁₀ 0.98) ≈ 342 iterations. The measured count: 338. Planning iteration budgets from the gap is the practical skill.

#### Example 2: Which end of the spectrum?

Power iteration on L (n = 100) returns λ ≈ 3.9990 — the top of the spectrum, eigenvector alternating in sign with a fine sinusoidal envelope: the stiffest chain mode. The lowest mode costs nothing extra from eigh (λ_1 ≈ 0.000971, smooth half-sine) but would need inverse iteration to find iteratively — the directional limitation of the bare method.

#### Example 3: Mode-shape sanity check

For n = 12, mode 3 from the eigenvector: displacements proportional to sin(3iπ/13), i = 1...12 — two internal nodes, at positions where sin crosses zero. Overlaying the analytic sine on the numeric eigenvector shows agreement to plotting precision; any asymmetry in the numeric shape points at an assembly error in L, not at physics.

## Common Misconceptions

- **"Power iteration finds the eigenvalue closest to zero."** It finds the largest in magnitude; closest-to-zero takes inverse iteration or shifts.
- **"More iterations always improve the answer."** Past convergence, iterations only burn rounding-error patience; the rate law tells you when to stop.
- **"Eigenvectors are unique."** Only up to sign (and scaling); plots should not be trusted or distrusted because of a flipped sign.
- **"Dense solvers make iterative methods obsolete."** For huge sparse systems (PDEs, graphs), matrix-free iteration is still the only game; the dense library is the small-n benchmark.
- **"The chain's highest frequency mode is a numerical artifact."** It is the exact eigenvector of L — alternating displacements are a legitimate, physical mode.

## Connections

- **Lesson 1:** conditioning discipline carries over — eigenvectors of nearly-degenerate eigenvalues are themselves ill-conditioned.
- **Lesson 3:** integrating the chain's ODEs from a mode-shape initial condition gives pure sinusoids at ω_j — eigenvectors as dynamical objects.
- **Numerical Methods theory:** the spectral radius and matrix norms that control iteration convergence.
- **Physics:** normal-mode analysis of lattices, molecules, and fields all starts from exactly this tridiagonal eigenproblem.

## Quick Check

1. Write the power iteration update and the Rayleigh quotient, and state what each converges to.
2. How does the convergence rate depend on the spectrum, and how do you verify it numerically?
3. What is the analytic spectrum of tridiag(−1, 2, −1)?
4. For the n-mass chain, what are the normal-mode frequencies and how many internal nodes has mode j?
5. Why does power iteration find the top of the spectrum rather than the bottom?

## Takeaway

Eigen-computation is a laboratory science: the power method's convergence law, the library's agreement with a closed-form spectrum, and the chain's visible mode shapes are three independent confirmations of one mathematical structure. Build them once, cross-check them to the digits, and every future stability or resonance question — in this course or beyond — inherits a tested instrument.
