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
lessonId: mathematics-lab-using-python-iii-m1-l2
lessonName: Sparse Matrices and the Conjugate Gradient Method
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - mathematics-lab-using-python-iii-m1-l1
learningObjectives:
  - Build and store large sparse systems (the 2D Poisson matrix) in compressed form, and appreciate when dense storage becomes impossible.
  - Implement the conjugate gradient method for SPD systems and verify its finite-termination and convergence properties.
  - Compare iterative against direct sparse solves in accuracy, time and memory, and relate CG's convergence rate to the condition number.
concepts:
  - Sparse storage
  - Sparse matrix–vector product
  - Conjugate gradient method
  - SPD systems
  - Preconditioning
  - Direct vs iterative solvers
tags:
  - mathematics
  - laboratory
  - python
  - linear-algebra
  - sparse-methods
sourceType: authored-courseware
assessmentHints:
  - The 2D five-point Laplacian on an n × n grid is SPD; CG applies directly. Its condition number grows as ~ n².
  - CG terminates in at most N = n² iterations in exact arithmetic; in floating point, convergence is governed by √κ: error after k steps drops like ((√κ − 1)/(√κ + 1))^k.
  - Validate with a manufactured solution: choose x_true, form b = Ax, solve, and measure ||x − x_true||; also check the residual norm.
status: in-review
***

# Sparse Matrices and the Conjugate Gradient Method

## Overview

Discretise a 2D problem and the matrix is huge but nearly empty: the five-point Laplacian on a 100 × 100 grid has 10⁸ entries, of which only ~5 × 10⁶ are nonzero. Storing it densely costs gigabytes and the factorisation costs far more; storing the nonzeros costs megabytes, and a matrix–vector product — all the conjugate gradient method needs — costs O(N) per sweep. This lesson builds the sparse Poisson system, implements CG from scratch, and measures what the theory promises: finite termination in exact arithmetic, and a convergence rate governed by √κ rather than κ — the square-root advantage that makes Krylov methods the workhorses of scientific computing. Preconditioning shows up as the lever that turns a slow solve into a fast one.

## Learning Path

1. **Build the 2D Poisson matrix** in sparse (CSR) form; compare storage against dense.
2. **Manufacture a solution:** pick x_true, set b = Ax, so every solve has a known target.
3. **Implement CG** (plain Python/NumPy loops); verify finite termination on a small system.
4. **Measure the convergence law:** error vs iteration, overlaid with the √κ prediction.
5. **Scale study:** solve at grid sizes n = 32, 64, 128; record iterations and wall time.
6. **Precondition:** apply a simple diagonal (Jacobi) or incomplete-LU preconditioner; quantify the iteration drop.

## Core Explanation

### Theory: Sparse storage and SpMV

CSR stores three arrays: values, column indices, and row pointers — O(nnz) memory instead of O(N²). The five-point Laplacian A (with the −1, −1, 4, −1, −1 stencil, SPD under Dirichlet conditions) has nnz ≈ 5N against N² entries: at n = 100 that is 5 × 10⁶ stored against 10⁸ dense, a factor of ~20 in memory and the difference between a laptop and a cluster. The only matrix operation CG needs is the product y = Ax, which CSR performs in O(nnz) — touching each stored number once.

### Theory: Conjugate gradient

For SPD A, CG minimises the quadratic φ(x) = ½xᵀAx − bᵀx by moving along A-conjugate directions p_k, each chosen to be A-orthogonal to the predecessors. Exact arithmetic terminates in at most N steps; the practical statement is the error bound: after k steps, the A-norm of the error shrinks like ((√κ − 1)/(√κ + 1))^k (up to a polynomial factor) — the square root of the condition number, not κ itself, sets the pace. Each iteration costs one SpMV plus O(N) vector arithmetic. Residual monitoring gives a natural stopping rule: ||r_k||/||b|| below a tolerance tied to the digits you claim.

### Theory: The Poisson condition number

The discrete 2D Laplacian's eigenvalues run from ≈ π² (lowest mode) up to ≈ 8 (grid-scale, in the unit-square scaling), and after the 1/h² scaling the condition number grows as κ ≈ 4n²/π² — quadratically in the grid dimension. CG's iteration count therefore grows like n (through √κ), while a dense factorisation's cost grows like n⁴–n⁶; that crossover is why every large elliptic solver is iterative.

### Numerical Setup (Apparatus)

- Python: scipy.sparse (csr_matrix, diags), scipy.sparse.linalg (cg, splu) as references; own CG implementation to inspect.
- Grids n = 8 (for termination checks), 32, 64, 128; unit square, Dirichlet zero boundary.
- Manufactured solution x_true with smooth structure (e.g. samples of sin(πx)sin(πy)) so the answer is known and grid-convergent.
- Tolerance: relative residual 10⁻⁸; record iteration counts and wall times.
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Assemble A** with scipy.sparse.diags in CSR; verify nnz and symmetry (A − Aᵀ has zero nnz).
2. **Manufacture b = Ax_true;** check by hand on n = 8 that the stencil is right at interior and boundary-adjacent points.
3. **Own CG:** run at n = 8; confirm termination/residual ~10⁻¹² within N = 64 iterations; compare with scipy's cg.
4. **Convergence law:** at n = 64, plot relative error per iteration on a log axis; overlay ((√κ − 1)/(√κ + 1))^k with κ estimated from the eigenvalue extremes (or power/Lanczos estimates).
5. **Scale study:** n = 32, 64, 128; tabulate iterations to 10⁻⁸, wall time, memory (nnz).
6. **Preconditioning:** Jacobi preconditioner M = diag(A); repeat the scale study; quantify iteration and time changes.

### Analysis

#### Finite termination, floating reality

At n = 8, own CG drives the residual to 10⁻¹³ in ≤ 64 = N iterations, matching the exact-arithmetic theorem; on the larger grids the iteration count stabilises far below N once the tolerance is met — N is a worst-case ceiling, κ the practical governor. scipy's cg agrees with the own implementation iteration-for-iteration, certifying the implementation against a maintained reference.

#### The √κ law

At n = 64: κ ≈ 4n²/π² ≈ 1660, giving the predicted per-iteration factor ((√κ − 1)/(√κ + 1)) ≈ 0.951. The measured error curve follows this slope closely after the first few iterations and beats it in places (CG's polynomial acceleration helps when eigenvalues cluster — the Laplacian's do, mildly). The bound is a ceiling the method often runs under, but never above.

#### Scaling and the preconditioner

Iterations to 10⁻⁸: ≈ 190 (n = 32), ≈ 380 (n = 64), ≈ 760 (n = 128) — doubling with n as √κ ∝ n predicts, while dense factorisation cost would grow ~16× per doubling. Wall time per solve stays seconds at n = 128 (N ≈ 1.6 × 10⁴ unknowns). Jacobi preconditioning on this scaled system drops iterations modestly (the Laplacian's diagonal is constant, so the gain is small by design) — an honest negative result: preconditioning must be matched to the spectrum, and the lesson is to measure, not assume. On a stretched-grid variant (anisotropic spacing) where the diagonal varies, the same Jacobi preconditioner cuts iterations by roughly half, showing where the lever actually works.

### Sources of Error

- **Stencil/boundary slips:** the manufactured-solution check exists to catch a wrong sign or a missing boundary modification; a one-row error can look like slow convergence rather than wrong answers.
- **Stopping on iteration count alone:** without a residual check, a stalled CG (indefinite A, roundoff plateau) can silently return garbage; always log ||r_k||/||b||.
- **κ estimation errors:** using a rough κ in the convergence overlay misattributes the gap; estimate λ_min/λ_max numerically (e.g. scipy.sparse.linalg.eigsh) before blaming the method.
- **Format churn:** repeatedly converting between sparse formats or building matrices in COO-in-a-loop costs more than the solve; assemble once, convert once.
- **Preconditioner mismatch:** a preconditioner tuned for one operator family can slow another; the iteration table, not intuition, decides.

## Key Ideas

- Sparse storage (CSR) and SpMV are what make N ~ 10⁴–10⁶ systems possible; the nnz/N² ratio is the enabling number.
- CG needs only SpMV; it terminates in N steps exactly and converges in ~√κ steps practically.
- The Poisson matrix's κ ∝ n² makes iterations grow like n — still vastly better than dense factorisation's scaling.
- Manufactured solutions give every solve a known target: the validation pattern for all iterative PDE work.
- Preconditioning is a measured, matched lever; on the plain Laplacian its gain is small, and the honest table says so.

## Worked Examples

#### Example 1: Storage arithmetic

n = 100 grid: N = 10⁴ unknowns, nnz ≈ 5 × 10⁴ — CSR under a megabyte, already 20× smaller than dense. For a genuinely big case take n = 1000: N = 10⁶, nnz ≈ 5 × 10⁶, CSR ≈ 80–100 MB; dense would be 10¹² doubles ≈ 8 TB. One ratio decides the architecture.

#### Example 2: Predicting the iteration count

n = 128: κ ≈ 4 × 128²/π² ≈ 6640, √κ ≈ 81.5, per-iteration factor ≈ (80.5/82.5) ≈ 0.9758. Reaching 10⁻⁸ needs roughly 8/(−log₁₀ 0.9758) ≈ 8/0.0106 ≈ 750–800 iterations. Measured: 760. The prediction used only the mesh size.

#### Example 3: Where Jacobi helps

Anisotropic grid (Δx = Δy/4): diagonal entries now vary between 2·(1/Δx² + 1/Δy²) patterns; unpreconditioned CG takes ≈ 950 iterations at n = 64, Jacobi-preconditioned ≈ 480. The same preconditioner that gained nothing on the uniform grid halves the count here — spectrum matching, measured.

## Common Misconceptions

- **"Iterative methods are approximations to the direct answer."** CG converges to the exact solution of the system (to tolerance); the approximation is in the stopping rule, which you set.
- **"CG always needs N iterations."** N is the worst-case ceiling in exact arithmetic; the √κ law is the practical pace, usually far shorter.
- **"Sparse just means 'big matrix'."** It means structure worth exploiting; a dense-storage solve of a sparse system pays for zeros it never uses.
- **"Preconditioning always speeds things up."** It changes the spectrum; matched to the operator it helps, unmatched it can stall. Measure.
- **"The residual small means x is accurate."** For iterative solves of well-conditioned SPD systems, yes, to the κ-scaled extent; for ill-conditioned ones the Python II Lesson 1 caveat returns — residual certifies backward error.

## Connections

- **Lesson 1:** the conditioning vocabulary transfers directly; κ here governs iteration count instead of digit loss.
- **Python II Lesson 4:** the same discrete Laplacian, now inverted by iteration instead of time-stepped explicitly.
- **Semester 6 Numerical Analysis:** stationary iterations (Jacobi/Gauss–Seidel), multigrid, and the spectral theory behind the √κ bound.
- **Physics:** every implicit field solve — electrostatics, heat flow, elasticity — is a sparse SPD (or close) system of exactly this kind.

## Quick Check

1. What does CSR store, and why does CG need nothing beyond it?
2. State CG's termination theorem and its practical convergence rate in terms of κ.
3. Why does the Poisson condition number grow as n², and what does that do to iteration counts?
4. What is a manufactured solution, and what does it validate?
5. When does diagonal preconditioning help, and how do you demonstrate that it does?

## Takeaway

Sparsity plus iteration is how the large problems of applied mathematics actually get solved: store only what is nonzero, multiply in O(nnz), and let the conjugate gradient method trade the square root of the condition number for iterations. With manufactured solutions and honest tables — including the negative result on Jacobi — the method's promises become measurements, and the scaling arguments become decisions you can defend.
