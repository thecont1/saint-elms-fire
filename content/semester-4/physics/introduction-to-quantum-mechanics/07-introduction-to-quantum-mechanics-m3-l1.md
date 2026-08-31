***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: introduction-to-quantum-mechanics
courseName: Introduction to Quantum Mechanics
moduleId: introduction-to-quantum-mechanics-module-3
moduleName: Atoms and Operators
lessonId: introduction-to-quantum-mechanics-m3-l1
lessonName: Operators, Eigenvalues and Commutators
lessonNumber: 7
moduleNumber: 3
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - introduction-to-quantum-mechanics-m2-l1
  - linear-algebra-m2-l1
learningObjectives:
  - Identify the position, momentum, Hamiltonian, and angular momentum operators.
  - Compute expectation values of operators.
  - State the uncertainty principle and use it.
  - State the commutator algebra of position and momentum.
concepts:
  - Hermitian operator
  - Eigenvalue and eigenstate
  - Commutator
  - Heisenberg uncertainty principle
  - Angular momentum operator
  - Expectation value
tags:
  - physics
  - quantum-mechanics
  - operators
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Operators, Eigenvalues and Commutators

## Overview
The mathematical language of quantum mechanics is linear algebra on a Hilbert space. Observables are represented by Hermitian operators, states by vectors, and the measurement process by the eigenvalue equation. The *commutator* of two operators tells you whether the corresponding observables can be simultaneously measured. This lesson develops the operator formalism, the connection to expectation values, and the Heisenberg uncertainty principle — one of the deepest results in physics.

## Learning Path
- What you should already know: the Schrödinger equation, the wavefunction, basic linear algebra (Sem 5 prerequisite).
- What this lesson adds: the operator formalism, the algebra of quantum observables, and the uncertainty principle.
- What it unlocks: the quantisation of angular momentum, the hydrogen atom, and quantum information theory.

## Core Explanation
**Operators and observables.** In quantum mechanics, every physical observable (position, momentum, energy, angular momentum) is represented by a *linear operator* on the Hilbert space of states. The result of a measurement is one of the operator's eigenvalues.

**Position operator.** $\hat{x}$ acts by multiplication: $\hat{x} \psi(x) = x \psi(x)$. The eigenfunctions are Dirac delta functions $\delta(x - x_0)$ with eigenvalues $x_0$ (continuous spectrum).

**Momentum operator.** $\hat{p} = -i \hbar d/dx$. Acts on a wavefunction: $\hat{p} \psi = -i \hbar d\psi/dx$. The eigenfunctions are plane waves $\psi_p(x) = e^{i p x/\hbar}$ with eigenvalues $p$ (continuous spectrum).

**Hamiltonian operator.** $\hat{H} = \hat{p}^2/(2 m) + V(\hat{x}) = -(\hbar^2/2m) d^2/dx^2 + V(x)$. The eigenvalue equation $\hat{H} \psi = E \psi$ is the time-independent Schrödinger equation.

**Angular momentum operator.** In 1D, $\hat{L}_z = \hat{x} \hat{p}_y - \hat{y} \hat{p}_x$ (this is just $\hat{L}_z$ about the $z$-axis, which is the natural axis for 2D problems). In 3D, the angular momentum vector operator $\vec{L} = \vec{r} \times \vec{p}$ has components $L_x, L_y, L_z$ that satisfy the commutation relations $[L_i, L_j] = i \hbar \epsilon_{ijk} L_k$.

**Hermitian operators.** An operator $\hat{A}$ is *Hermitian* (or *self-adjoint*) if $\langle \phi | \hat{A} \psi \rangle = \langle \hat{A} \phi | \psi \rangle$ for all $\phi, \psi$. Equivalently, $\int \phi^* (\hat{A} \psi) dx = \int (\hat{A} \phi)^* \psi\, dx$. Hermitian operators have real eigenvalues (so measurements are real) and a complete set of orthonormal eigenfunctions.

**Eigenvalue equation.** $\hat{A} |a\rangle = a |a\rangle$ has eigenvalue $a$ and eigenstate $|a\rangle$. The probability of measuring $a$ in state $|\psi\rangle$ is $|\langle a | \psi \rangle|^2$ (the Born rule).

**Spectral theorem.** A Hermitian operator on a Hilbert space has a complete set of orthonormal eigenstates. The space is the closure of the span of the eigenstates. Any state can be expanded in this basis: $|\psi\rangle = \sum c_n |n\rangle$.

**Expectation value.** $\langle A \rangle = \langle \psi | \hat{A} | \psi \rangle$. For a discrete basis, $\langle A \rangle = \sum |c_n|^2 a_n$. For a continuous basis (position), $\langle A \rangle = \int \psi^* (x) \hat{A} \psi(x)\, dx$. The expectation value is the average of many measurements of $A$ on identically prepared systems.

**Uncertainty.** The uncertainty (standard deviation) of $A$ in state $|\psi\rangle$ is

$$\Delta A = \sqrt{\langle A^2 \rangle - \langle A \rangle^2}.$$

This is the spread of measurement outcomes around the mean.

**Commutator.** The commutator of two operators is $[A, B] = AB - BA$. If $[A, B] = 0$, the operators commute, and they share a complete set of eigenstates. If $[A, B] \ne 0$, no state can be a simultaneous eigenstate of both, and the corresponding observables cannot both be measured with arbitrary precision.

**Canonical commutation relation.** $[x, p] = i \hbar$. This is the fundamental commutation relation of quantum mechanics. It is the algebraic statement of wave–particle duality.

**Heisenberg uncertainty principle.** For any two operators $A, B$ with $[A, B] = i C$ (where $C$ is Hermitian), the uncertainties satisfy

$$\Delta A \Delta B \ge \tfrac{1}{2} |\langle C \rangle|.$$

For $x$ and $p$: $\Delta x \Delta p \ge \hbar/2$. This is the famous position–momentum uncertainty relation.

**Proof of the uncertainty principle.** Consider $|f\rangle = (A - \langle A \rangle) |\psi\rangle$ and $|g\rangle = (B - \langle B \rangle) |\psi\rangle$. By Cauchy–Schwarz, $|\langle f | g \rangle|^2 \le \langle f | f \rangle \langle g | g \rangle$. Writing out: $(\Delta A)^2 (\Delta B)^2 \ge (\text{Im} \langle f | g \rangle)^2 = (1/4) |\langle [A, B] \rangle|^2$.

**Minimum uncertainty states.** The equality $\Delta A \Delta B = \tfrac{1}{2} |\langle C \rangle|$ is achieved when $|f\rangle$ and $|g\rangle$ are proportional (and pure imaginary). The Gaussian wave packet is the minimum-uncertainty state for $x$ and $p$.

**Energy–time uncertainty.** Often written as $\Delta E \Delta t \ge \hbar/2$. This is not the same as the position–momentum relation (because time is not an operator in non-relativistic QM). The interpretation: a state with lifetime $\Delta t$ has an energy uncertainty $\Delta E \ge \hbar/(2 \Delta t)$. The narrower the resonance, the longer it lives.

**Angular momentum commutation relations.** $[L_x, L_y] = i \hbar L_z$ (and cyclic permutations). The Casimir operator $L^2 = L_x^2 + L_y^2 + L_z^2$ commutes with all components: $[L^2, L_i] = 0$. This is the algebra underlying the quantisation of angular momentum in the hydrogen atom (next lesson) and the addition of angular momenta.

**Ladder operators for angular momentum.** $L_\pm = L_x \pm i L_y$. $[L_z, L_\pm] = \pm \hbar L_\pm$, $[L_+, L_-] = 2 \hbar L_z$. $L_+$ raises $m$ (the eigenvalue of $L_z$) by $\hbar$; $L_-$ lowers it. The spectrum of $L^2$ is $\hbar^2 \ell(\ell + 1)$ for $\ell = 0, 1/2, 1, 3/2, \ldots$; the spectrum of $L_z$ is $m \hbar$ for $m = -\ell, -\ell + 1, \ldots, \ell$.

**Orbital vs. spin angular momentum.** Orbital angular momentum $\vec{L} = \vec{r} \times \vec{p}$ has integer $\ell$. Spin angular momentum $\vec{S}$ (intrinsic) has half-integer values. The two together form the total angular momentum $\vec{J} = \vec{L} + \vec{S}$. The hydrogen atom (next lesson) uses both.

**Uncertainty relations for angular momentum.** $[\hat{L}_x, \hat{L}_y] = i \hbar \hat{L}_z$ (and cyclic). The uncertainties satisfy $\Delta L_x \Delta L_y \ge \tfrac{1}{2} \hbar |\langle L_z \rangle|$. Only one component of angular momentum can be measured with certainty at a time (along with $L^2$).

## Key Ideas
- Observables are Hermitian operators; states are vectors in Hilbert space.
- The Schrödinger equation is the eigenvalue equation of the Hamiltonian.
- The canonical commutation relation is $[x, p] = i \hbar$.
- Heisenberg uncertainty: $\Delta A \Delta B \ge \tfrac{1}{2} |\langle [A, B] \rangle|$.
- $L^2$ commutes with all $L_i$, so total and one component can be known simultaneously.

## Worked Examples
**Example 1 — Momentum of a plane wave.** $\psi_p = e^{i p x/\hbar}$. $\hat{p} \psi_p = -i \hbar \cdot i p/\hbar \cdot e^{i p x/\hbar} = p \psi_p$. So $\psi_p$ is an eigenstate of $\hat{p}$ with eigenvalue $p$. The uncertainty $\Delta p = 0$.

**Example 2 — Minimum-uncertainty wave packet.** $\psi(x) = (\sigma \sqrt{2\pi})^{-1/2} e^{-x^2/(4 \sigma^2)} e^{i k_0 x}$. $\Delta x = \sigma$, $\Delta p = \hbar/(2\sigma)$, $\Delta x \Delta p = \hbar/2$. The Gaussian saturates the uncertainty bound.

**Example 3 — Commutator.** $[x, p] \psi = x(-i \hbar d\psi/dx) - (-i \hbar d/dx)(x \psi) = -i \hbar x \psi' + i \hbar (\psi + x \psi') = i \hbar \psi$. So $[x, p] = i \hbar$. ✓

**Example 4 — Angular momentum ladder.** $L_+ |\ell, m\rangle = \hbar \sqrt{\ell(\ell + 1) - m(m+1)} |\ell, m+1\rangle$. $L_- |\ell, m\rangle = \hbar \sqrt{\ell(\ell + 1) - m(m-1)} |\ell, m-1\rangle$. The ladder terminates at $m = \pm \ell$.

## Common Misconceptions
- **"Heisenberg's principle is a measurement disturbance."** It is not — it is a property of the state. Even with perfect measurements, the uncertainties are intrinsic.
- **"Commuting operators can be measured simultaneously."** True — they share eigenstates. The uncertainties are independent.
- **"$\Delta E \Delta t$ is the same as $\Delta x \Delta p$."** It is a different statement; time is not an operator in non-relativistic QM.
- **"Spin is the electron rotating."** No — the electron is a point particle. Spin is an intrinsic quantum property with no classical analogue.

## Connections
Operator algebra is the language of quantum mechanics. The same structure appears in *Linear Algebra* (Sem 5) as the eigenvalue problem and in *Atomic and Molecular Physics* (Sem 6) as the algebra of angular momentum. The Heisenberg principle is the seed of quantum information theory (no-cloning theorem, entanglement). The hydrogen atom (next lesson) is the prime example of operator algebra in action.

## Quick Check
1. State the canonical commutation relation.
2. State the Heisenberg uncertainty principle for $x$ and $p$.
3. Show that $[x, p] = i \hbar$.
4. State the angular momentum commutation relations.
5. Why are Hermitian operators used for observables?

## Takeaway
- Observables are Hermitian operators; measurements are eigenvalues.
- Canonical commutation: $[x, p] = i \hbar$.
- Heisenberg uncertainty: $\Delta A \Delta B \ge \tfrac{1}{2} |\langle [A, B] \rangle|$.
- $L^2$ commutes with all $L_i$; only one component can be diagonalised at a time with $L^2$.
- Ladder operators raise and lower $m$ in angular-momentum states.
