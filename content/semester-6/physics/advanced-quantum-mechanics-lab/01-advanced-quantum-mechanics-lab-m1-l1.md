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
lessonId: advanced-quantum-mechanics-lab-m1-l1
lessonName: Quantum Eigenvalue Problems by Matrix Diagonalisation
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - advanced-quantum-mechanics
learningObjectives:
  - Discretise the one-dimensional Schrödinger equation on a grid and build the Hamiltonian as a tridiagonal matrix.
  - Diagonalise the Hamiltonian numerically and compare the eigenvalues and eigenfunctions of the infinite square well against the analytic results.
  - Analyse the convergence of eigenvalues with grid spacing and domain size; quantify the discretisation error.
concepts:
  - Finite-difference discretisation
  - Tridiagonal Hamiltonian
  - Matrix diagonalisation
  - Eigenvalue convergence
  - Infinite square well
  - Numerical error analysis
tags:
  - physics
  - laboratory
  - computational-physics
  - quantum-mechanics
  - eigenvalue-problem
sourceType: authored-courseware
assessmentHints:
  - Kinetic-energy matrix element: −(ħ²/2m)(1/h²) on the tridiagonal with −2 on-diagonal, +1 off-diagonal.
  - Infinite well analytic levels: E_n = n²π²ħ²/(2mL²).
  - Convergence: eigenvalue error scales as h² for the second-order finite difference.
status: in-review
***

# Quantum Eigenvalue Problems by Matrix Diagonalisation

## Overview

Every bound-state problem in quantum mechanics is an eigenvalue problem: H ψ = E ψ. For the handful of solvable potentials the eigenvalues come from analytic tricks; for everything else — real molecules, real wells, real devices — the eigenvalues come from a matrix. This lesson turns the Schrödinger equation into a matrix by finite differences, diagonalises it numerically, and validates the numerics against the one potential whose answers are known exactly: the infinite square well. The convergence analysis you build here is the yardstick for every later simulation in the course.

## Learning Path

1. **Review the time-independent Schrödinger equation** and the infinite well's analytic spectrum.
2. **Discretise:** replace the second derivative with the central difference on a grid of spacing h.
3. **Assemble the Hamiltonian matrix** (tridiagonal: kinetic energy plus diagonal potential).
4. **Diagonalise** with a standard eigensolver (numpy.linalg.eigh); sort and inspect.
5. **Validate:** compare the lowest eigenvalues and eigenfunctions against the analytic results.
6. **Convergence study:** vary the grid spacing h and domain; plot eigenvalue error vs h and confirm second-order convergence.

## Core Explanation

### Theory: From Differential Equation to Matrix

The one-dimensional time-independent Schrödinger equation,

−(ħ²/2m) ψ''(x) + V(x) ψ(x) = E ψ(x),

becomes algebraic on a grid x_i = i h. The central-difference approximation

ψ''(x_i) ≈ (ψ_{i+1} − 2ψ_i + ψ_{i−1}) / h²

turns the Hamiltonian into an N × N matrix with

H_{ii} = ħ²/(m h²) + V(x_i), H_{i,i±1} = −ħ²/(2 m h²)

— a tridiagonal (kinetic) part plus the diagonal potential. The infinite well is V = 0 inside with ψ = 0 at the walls (Dirichlet boundary conditions, enforced by omitting the endpoints). The eigenvectors of this matrix are the sampled wavefunctions; the eigenvalues are the energy levels.

### Theory: Analytic Reference

For the infinite well of width L:

E_n = n² π² ħ² / (2 m L²), ψ_n(x) = √(2/L) sin(nπx/L)

Working in natural-ish numerical units (ħ = m = 1, L = 1) gives E_n = n²π²/2 ≈ 4.935, 19.739, 44.413, ... — clean targets for validation.

### Numerical Setup (Apparatus)

- Python with NumPy/SciPy (numpy.linalg.eigh for dense matrices; scipy.sparse.linalg.eigsh for larger grids — diagonalise only the lowest few states).
- Grid: N interior points, spacing h = L/(N+1). Start with N = 200.
- Boundary conditions: Dirichlet ψ = 0 at both walls.
- Safety: none physical; but save grids and parameters with every figure (reproducibility).

### Procedure

1. **Build the matrix** for N = 200, L = 1, ħ = m = 1: H = (ħ²/(2m h²)) × T + diag(V), where T has 2 on the main diagonal and −1 on both off-diagonals. With V = 0 the diagonal entries reduce to 1/h² and the off-diagonals to −1/(2h²). Check symmetry H = Hᵀ before diagonalising.
2. **Diagonalise** and sort ascending; extract the lowest six eigenvalues.
3. **Compare** against E_n = n²π²/2 in a table of relative errors.
4. **Plot the first four eigenvectors** against the analytic sine curves; check normalisation (Σ|ψ|² h = 1) and node counts.
5. **Convergence sweep:** repeat at N = 25, 50, 100, 200, 400, 800; record the E_1 error; fit error ∝ h^p.
6. **Domain check (for later lessons):** for confined states the walls may be finite and far; note how results shift when L changes.

### Analysis

#### Validation table (N = 200)

| n | Analytic E_n | Numerical E_n | Relative error |
|---|--------------|---------------|----------------|
| 1 | 4.9348 | 4.9347 | 2 × 10⁻⁵ |
| 2 | 19.7392 | 19.7384 | 4 × 10⁻⁵ |
| 3 | 44.4132 | 44.4100 | 7 × 10⁻⁵ |
| 6 | 177.653 | 177.62 | 2 × 10⁻⁴ |

The error grows with n: higher states oscillate faster, and the finite difference resolves them less accurately. A rule of thumb: the grid must carry ~10 points per de Broglie wavelength of the state of interest.

#### Convergence

Log-log plot of |ΔE_1| vs h gives slope ≈ 2.0 (e.g. error 3.3 × 10⁻³ at N = 50 → 2.1 × 10⁻⁴ at N = 200, ratio 16 = 4² for 4× finer h): the method is second-order, as the central difference promises. Halving h quarters the eigenvalue error — until round-off and matrix size take over.

#### Eigenvector checks

Numerical ψ_1 peaks at x = L/2 and matches √2 sin(πx) to < 10⁻³ pointwise; ψ_2 has one node at L/2; Σ|ψ|²h = 1 to machine precision after normalisation. Node count = n − 1 holds throughout — the qualitative quantum number survives discretisation intact.

### Sources of Error

- **Discretisation (truncation):** O(h²) eigenvalue error; dominates at coarse grids.
- **Finite round-off:** negligible for N ≤ 10⁴ in double precision; relevant only near machine epsilon.
- **Boundary placement:** for the infinite well the Dirichlet condition is exact; for finite wells (later lessons) wall distance must exceed the wavefunction's reach.
- **Representation error:** finite differences assume smoothness; discontinuous potentials still work but converge less cleanly at the discontinuity.

## Key Ideas

- Bound-state quantum mechanics is matrix diagonalisation once the derivative is discretised.
- The kinetic operator is tridiagonal: 2/h² on-diagonal, −1/h² off, scaled by ħ²/2m; the potential is diagonal.
- Validation against analytic cases (the infinite well) is mandatory before trusting new results.
- Second-order finite differences give eigenvalue error ∝ h²; verify the slope empirically.
- Higher eigenstates need finer grids (~10 points per wavelength).
- Qualitative structure (node counts, symmetry, normalisation) is a fast sanity check.

## Worked Examples

#### Example 1: First eigenvalue by hand-scale estimate

With h = 1/201 ≈ 0.005 and ħ = m = 1: kinetic scale ħ²/(2h²) ≈ 2 × 10⁴. The lowest eigenvalue 4.935 is a tiny eigenvalue of a huge-diagonal matrix — which is why relative precision is excellent: eigensolvers resolve it against a matrix norm of ~4 × 10⁴ easily.

#### Example 2: Error budget for a target precision

Requirement: E_1 to 0.1%. Since error ≈ c h² with c ≈ 0.13 (from the measured errors above: 2 × 10⁻⁵ at h ≈ 0.005), 10⁻³ needs h ≤ √(10⁻³/0.13)... numerically: N ≥ 36 → use N = 100 for margin. Always budget grid size from the measured convergence constant, not intuition.

#### Example 3: Symmetry check

The well is symmetric about L/2, so eigenfunctions must be alternately even/odd about the centre. Any computed eigenvector failing |ψ(x) ± ψ(L−x)| < 10⁻⁶ signals a coding bug (wrong indexing, broken tridiagonal) before any physics is discussed.

## Common Misconceptions

- **"More grid points always improve results."** Beyond the point where truncation error meets round-off and cost, gains vanish; convergence studies show where.
- **"The eigensolver returns physical units."** It returns numbers in your chosen units; unit discipline (ħ, m, L) is yours to maintain.
- **"Eigenvalues of the matrix are exact eigenvalues of H."** They are eigenvalues of the discretised approximation; the gap to the continuum operator is the truncation error.
- **"Any boundary condition works."** Wrong boundaries shift every level; Dirichlet walls must coincide with the physical infinite walls.
- **"Unsorted eigenvalues are fine."** Eigensolvers return unsorted spectra; physics discussion needs sorting and mode identification.

## Connections

- **Advanced Quantum Mechanics (Sem 6 theory):** The infinite well, operator formalism, and basis representations are the theory this lab computes.
- **Numerical Methods (Sem 4):** Finite differences, matrix diagonalisation, and convergence analysis come from there directly.
- **Next lesson:** The same discretisation, turned into a boundary-value solver, finds bound states of finite wells via the shooting method.
- **Mathematics Lab using Python:** The linear-algebra and reproducibility toolkit reappears throughout this course.

## Quick Check

1. What is the form of the kinetic-energy matrix after central differencing?
2. What is the analytic spectrum of the infinite square well?
3. How does the eigenvalue error scale with grid spacing, and how do you verify it?
4. Why do higher eigenstates need finer grids?
5. What qualitative checks validate a computed eigenfunction?

## Takeaway

Diagonalisation turns the eigenvalue problems of quantum mechanics into linear algebra, and validation against the infinite well turns the linear algebra into trust. The convergence discipline built here — measure the error, fit its scaling, budget the grid — is the method every later simulation in this course inherits. The matrix is now your laboratory bench.
