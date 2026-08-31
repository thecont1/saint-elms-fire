***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: quantum-mechanics-lab
courseName: Quantum Mechanics Lab
moduleId: quantum-mechanics-lab-module-1
moduleName: Spectroscopy, the Photoelectric Effect, and Quantum Demonstrations
lessonId: quantum-mechanics-lab-m1-l5
lessonName: Numerical Wavefunctions — Particle in a Box and the Harmonic Oscillator
lessonNumber: 5
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 60
releaseOrder: 5
prerequisites:
  - quantum-mechanics-lab-m1-l4
learningObjectives:
  - Numerically solve the time-independent Schrödinger equation for a particle in a 1D box and verify the energy eigenvalues E_n = n² π² ℏ² / (2 m L²).
  - Numerically solve for the quantum harmonic oscillator and verify the energy eigenvalues E_n = (n + 1/2) ℏ ω.
  - Visualise the wavefunctions and probability densities, and check orthogonality and normalisation.
concepts:
  - Schrödinger equation
  - Time-independent Schrödinger equation
  - Wavefunction
  - Probability density
  - Boundary conditions
  - Particle in a box
  - Quantum harmonic oscillator
  - Finite difference method
  - Numerov algorithm
  - Eigenvalue problem
tags:
  - physics
  - laboratory
  - quantum
  - computational
  - schrodinger
  - numerical
sourceType: authored-courseware
assessmentHints:
  - The particle in a box has E_n = n² π² ℏ² / (2 m L²) and wavefunctions ψ_n(x) = √(2/L) sin(n π x / L).
  - The quantum harmonic oscillator has E_n = (n + 1/2) ℏ ω and wavefunctions are Hermite polynomials times a Gaussian.
  - The Numerov algorithm is a fourth-order method for solving second-order ODEs; it is more accurate than the simple finite-difference method.
status: in-review
***

# Numerical Wavefunctions — Particle in a Box and the Harmonic Oscillator

## Overview

The time-independent Schrödinger equation,

− (ℏ² / 2 m) d²ψ / dx² + V(x) ψ = E ψ,

is a linear eigenvalue problem. For a few simple potentials, it can be solved analytically: the particle in a box (V = 0 inside, V = ∞ outside) and the quantum harmonic oscillator (V = (1/2) m ω² x²) are the two canonical examples. For more complex potentials, the equation must be solved numerically. This lesson covers the numerical solution using a finite-difference discretisation, the resulting matrix eigenvalue problem, and the extraction of eigenvalues (energies) and eigenvectors (wavefunctions).

The lab uses Python (NumPy, SciPy, Matplotlib) to discretise the Schrödinger equation on a 1D grid, construct the Hamiltonian matrix, and compute its eigenvalues and eigenvectors. The student verifies the analytical formulas for the particle in a box and the harmonic oscillator, and explores the wavefunctions, probability densities, and orthogonality.

## Learning Path

1. **Set up the Python environment** — install NumPy, SciPy, Matplotlib. Open a Jupyter notebook or a Python script.
2. **Particle in a box** — discretise the Schrödinger equation on a 1D grid of N points between x = 0 and x = L. Construct the Hamiltonian matrix H = T + V (with T the kinetic energy operator, V the potential). Use `numpy.linalg.eigh` to find the eigenvalues and eigenvectors. Compare with the analytical E_n = n² π² ℏ² / (2 m L²).
3. **Quantum harmonic oscillator** — discretise the same way, with V(x) = (1/2) m ω² x². Compare the eigenvalues with E_n = (n + 1/2) ℏ ω. Plot the wavefunctions and probability densities for n = 0, 1, 2, 3.
4. **Check orthogonality** — verify that ∫ ψ_m(x) ψ_n(x) dx = δ_{mn} for several pairs (m, n).
5. **Visualise** — plot the wavefunctions, the probability densities, and the potential. Observe the nodes (zeros of ψ), the increasing number of nodes with n, and the asymptotic behaviour at the boundaries.

## Core Explanation

### Theory: The Schrödinger Equation

The time-independent Schrödinger equation in 1D is

− (ℏ² / 2 m) d²ψ / dx² + V(x) ψ(x) = E ψ(x).

For a particle in a box of width L, V(x) = 0 for 0 < x < L, and V = ∞ outside. The boundary conditions are ψ(0) = ψ(L) = 0. The solutions are

ψ_n(x) = √(2/L) sin(n π x / L),   E_n = n² π² ℏ² / (2 m L²),  n = 1, 2, 3, ...

For the quantum harmonic oscillator, V(x) = (1/2) m ω² x². The solutions are

ψ_n(x) = (1 / √(2ⁿ n!)) (m ω / (π ℏ))^(1/4) H_n(√(m ω / ℏ) x) e^(− m ω x² / (2 ℏ)),   E_n = (n + 1/2) ℏ ω,

where H_n is the Hermite polynomial.

### Theory: Finite-Difference Discretisation

Discretise the x-axis on a grid of N points: x_i = i Δx, for i = 0, 1, ..., N − 1, with Δx = L / (N − 1). The second derivative is approximated by the central difference:

d²ψ / dx² ≈ (ψ_{i+1} − 2 ψ_i + ψ_{i−1}) / Δx².

The Schrödinger equation becomes

− (ℏ² / 2 m) (ψ_{i+1} − 2 ψ_i + ψ_{i−1}) / Δx² + V_i ψ_i = E ψ_i.

This is a matrix eigenvalue problem H ψ = E ψ, where H is an N × N tridiagonal matrix with diagonal entries V_i + ℏ² / (m Δx²) and off-diagonal entries − ℏ² / (2 m Δx²).

The eigenvalues and eigenvectors are found by `numpy.linalg.eigh` (for symmetric matrices).

### Theory: Boundary Conditions

For the particle in a box, ψ_0 = ψ_{N-1} = 0. The matrix is (N-2) × (N-2), with the endpoints removed.

For the harmonic oscillator, the boundary conditions are ψ → 0 as x → ±∞. In the discretised version, the boundary is at finite x; choose x_min and x_max large enough that ψ(x_min) ≈ 0 and ψ(x_max) ≈ 0. A typical choice is x ∈ [− 10 x_0, 10 x_0], where x_0 = √(ℏ / (m ω)) is the natural length scale.

### Python Implementation

```python
import numpy as np
import matplotlib.pyplot as plt

# Constants
hbar = 1.0545718e-34  # J·s
m = 9.10938356e-31    # kg (electron mass)
eV = 1.602176634e-19  # J/eV

# Parameters
L = 1e-9  # box width, 1 nm
N = 1000  # number of grid points
x = np.linspace(0, L, N)
dx = x[1] - x[0]

# Kinetic energy operator (finite difference, second derivative)
T = -hbar**2 / (2 * m) * (-2 * np.eye(N-2) + np.eye(N-2, k=1) + np.eye(N-2, k=-1)) / dx**2

# Potential energy (zero inside the box)
V = np.zeros(N-2)

# Hamiltonian
H = T + np.diag(V)

# Eigenvalues and eigenvectors
E, psi = np.linalg.eigh(H)

# Convert to eV
E_eV = E / eV

# Print first 5 eigenvalues
for n in range(5):
    E_analytical = (n+1)**2 * np.pi**2 * hbar**2 / (2 * m * L**2) / eV
    print(f"n = {n+1}: E_numerical = {E_eV[n]:.4f} eV, E_analytical = {E_analytical:.4f} eV")
```

Expected output:

```
n = 1: E_numerical = 0.3760 eV, E_analytical = 0.3760 eV
n = 2: E_numerical = 1.5038 eV, E_analytical = 1.5038 eV
n = 3: E_numerical = 3.3836 eV, E_analytical = 3.3836 eV
n = 4: E_numerical = 6.0154 eV, E_analytical = 6.0154 eV
n = 5: E_numerical = 9.3993 eV, E_analytical = 9.3993 eV
```

The numerical and analytical values agree to four significant figures, confirming the implementation.

### Quantum Harmonic Oscillator

```python
# Quantum harmonic oscillator
omega = 1e15  # angular frequency, rad/s
x0 = np.sqrt(hbar / (m * omega))  # natural length scale
x = np.linspace(-10 * x0, 10 * x0, N)
dx = x[1] - x[0]

# Kinetic energy
T = -hbar**2 / (2 * m) * (-2 * np.eye(N) + np.eye(N, k=1) + np.eye(N, k=-1)) / dx**2

# Potential energy
V = 0.5 * m * omega**2 * x**2

# Hamiltonian
H = T + np.diag(V)

# Eigenvalues and eigenvectors
E, psi = np.linalg.eigh(H)

# Convert to eV
E_eV = E / eV

# Print first 5 eigenvalues
for n in range(5):
    E_analytical = (n + 0.5) * hbar * omega / eV
    print(f"n = {n}: E_numerical = {E_eV[n]:.4f} eV, E_analytical = {E_analytical:.4f} eV")
```

### Analysis

#### Eigenvalues

Compare the numerical eigenvalues with the analytical formulas. The agreement is typically within 0.1 % for the first 10–20 eigenvalues (using a sufficiently fine grid).

#### Wavefunctions

Plot the wavefunctions ψ_n(x) for n = 0, 1, 2, 3. Observe the number of nodes (zeros of ψ): n nodes for the n-th excited state. For the particle in a box, the wavefunctions are sine waves. For the harmonic oscillator, the wavefunctions are Hermite polynomials times a Gaussian.

#### Probability Density

The probability density is |ψ_n(x)|². For the particle in a box, |ψ_n(x)|² = (2/L) sin²(n π x / L). For the harmonic oscillator, |ψ_n(x)|² is the Hermite-Gaussian function.

#### Orthogonality

The wavefunctions are orthogonal: ∫ ψ_m(x) ψ_n(x) dx = δ_{mn}. This can be checked numerically: compute ∑_i ψ_m(x_i) ψ_n(x_i) Δx for several pairs (m, n). The off-diagonal elements should be ~ 0; the diagonal elements should be 1 (after normalisation).

#### Numerical Convergence

The accuracy of the eigenvalues depends on the grid spacing Δx. The error in the n-th eigenvalue is typically O((n Δx)²). For the first 10 eigenvalues, Δx ~ L / 1000 gives errors < 0.1 %.

### Sources of Error

- **Grid spacing.** A coarse grid gives large errors. Use N = 500–2000 points for the first 10–20 eigenvalues.
- **Boundary conditions.** For the harmonic oscillator, the boundary at finite x truncates the wavefunction. Choose x_max large enough that the wavefunction is negligible at the boundary.
- **Finite-difference approximation.** The second-derivative approximation has an error O(Δx²). Higher-order finite-difference schemes (e.g. 5-point) reduce the error to O(Δx⁴).
- **Eigenvalue solver.** `numpy.linalg.eigh` returns all eigenvalues; for very large matrices, iterative methods (e.g. Lanczos) are more efficient. For N = 1000, the direct method is fast.
- **Normalisation.** The eigenvectors from `eigh` are normalised to unit length (∑ ψ_i² = 1). For the probability density to integrate to 1 over the continuous variable x, the wavefunction must be normalised by √Δx.

## Key Ideas

- The Schrödinger equation is a linear eigenvalue problem.
- The finite-difference method converts it to a matrix eigenvalue problem.
- The particle in a box has E_n ∝ n²; the harmonic oscillator has E_n ∝ (n + 1/2).
- The wavefunctions are orthogonal and can be normalised.
- The number of nodes in ψ_n is n.
- The probability density |ψ_n|² gives the probability of finding the particle at position x.

## Worked Examples

### Example 1: Particle in a box, L = 1 nm

Numerical eigenvalues: 0.376, 1.504, 3.384, 6.015, 9.399 eV. Analytical: n² π² ℏ² / (2 m L²) for n = 1, 2, 3, 4, 5 = 0.376, 1.504, 3.384, 6.015, 9.399 eV. Agreement to four significant figures.

### Example 2: Harmonic oscillator, ω = 10¹⁵ rad/s

Numerical eigenvalues (in units of ℏ ω): 0.5, 1.5, 2.5, 3.5, 4.5. Analytical: (n + 1/2) for n = 0, 1, 2, 3, 4 = 0.5, 1.5, 2.5, 3.5, 4.5. Agreement to four significant figures.

### Example 3: Nodes in the wavefunctions

The particle-in-a-box wavefunction for n = 3 has 3 nodes (at x = L/3, 2L/3, and the endpoints). The harmonic oscillator wavefunction for n = 3 has 3 nodes (at x = 0 and two symmetric points). The number of nodes is always n.

### Example 4: Convergence

Compute the first 5 eigenvalues for N = 100, 500, 1000, 2000. The error in the n = 5 eigenvalue decreases from ~ 1 % (N = 100) to ~ 0.01 % (N = 2000). The convergence is O(Δx²) = O(1/N²).

## Common Misconceptions

- **"The Schrödinger equation can be solved exactly for all potentials."** Only a few potentials (box, harmonic oscillator, hydrogen atom, etc.) have analytical solutions. Most realistic potentials require numerical methods.
- **"The wavefunction is a physical wave."** The wavefunction is a mathematical object; the physical quantity is |ψ|², the probability density. The wavefunction can be complex (for unbound states, e.g. a free particle).
- **"Higher energy means the particle moves faster."** Not necessarily. For the particle in a box, the energy is kinetic (since V = 0), so higher E means higher speed. For the harmonic oscillator, the energy is partly kinetic and partly potential; the time-averaged kinetic energy is E/2.
- **"The wavefunction is zero at the nodes."** The wavefunction is zero at the nodes; the probability density is also zero. The particle is never found at the nodes.
- **"The particle is 'smeared out' over the box."** The particle is not a classical point with a definite position; the wavefunction gives the probability of finding the particle at each position. The particle is detected at a specific point when measured, but the probability of that point is |ψ(x)|².

## Connections

- **Quantum Mechanics (Sem 4 theory).** The Schrödinger equation is the central equation of quantum mechanics. The numerical solution is essential for any realistic system (atoms with more than one electron, molecules, solids).
- **Computational physics.** The finite-difference method is one of many numerical methods for the Schrödinger equation. The Numerov algorithm, the finite-element method, the variational method, and quantum Monte Carlo are alternatives.
- **Chemistry.** Computational chemistry uses the Schrödinger equation to compute the structures and energies of molecules. The Hartree-Fock method, density functional theory, and quantum Monte Carlo are the standard approaches.
- **Materials science.** The band structure of solids is computed by solving the Schrödinger equation for electrons in a periodic potential. The same finite-difference method, with periodic boundary conditions, is used.
- **Astrophysics (Sem 5/6).** The Schrödinger equation for the hydrogen atom is solved analytically, giving the wavefunctions (orbitals) that describe the electron's probability distribution. The same equations are used to model white dwarfs and other dense stellar objects.

## Quick Check

1. State the time-independent Schrödinger equation.
2. What are the eigenvalues for a particle in a box of width L? For a harmonic oscillator of frequency ω?
3. How many nodes does the n-th wavefunction have?
4. Why is the wavefunction normalised? What does normalisation mean?
5. What is the boundary condition for a particle in a box? For a harmonic oscillator?
6. Why does the numerical error decrease with N²?
7. How do you check orthogonality numerically?
8. Why is the harmonic oscillator's ground state energy ℏ ω / 2, not zero?

## Takeaway

The numerical solution of the Schrödinger equation is the lab's introduction to computational quantum mechanics. The finite-difference method, the matrix eigenvalue problem, and the extraction of eigenvalues and eigenvectors are the standard tools. The lab's discipline — careful discretisation, convergence testing, comparison with analytical solutions, visualisation of wavefunctions and probability densities — is the same discipline that runs through every computational physics problem. The particle in a box and the harmonic oscillator are the two simplest examples; the same methods extend to the hydrogen atom, the helium atom, and more complex molecules. The Schrödinger equation is the central equation of quantum mechanics; the numerical methods are the workhorse of computational chemistry, materials science, and atomic physics.
