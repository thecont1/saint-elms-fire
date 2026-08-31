***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: introduction-to-quantum-mechanics
courseName: Introduction to Quantum Mechanics
moduleId: introduction-to-quantum-mechanics-module-2
moduleName: Schrödinger Equation in 1D
lessonId: introduction-to-quantum-mechanics-m2-l1
lessonName: The Time-Independent Schrödinger Equation
lessonNumber: 4
moduleNumber: 2
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - introduction-to-quantum-mechanics-m1-l3
  - differential-equations-m3-l1
learningObjectives:
  - State the time-independent Schrödinger equation.
  - Explain the role of the potential energy term.
  - Solve the free-particle Schrödinger equation.
  - Sketch solutions for typical 1D potentials.
concepts:
  - Schrödinger equation
  - Wavefunction
  - Probability density
  - Hamiltonian
  - Eigenvalue problem
  - Stationary state
tags:
  - physics
  - quantum-mechanics
  - schrodinger
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
***

# The Time-Independent Schrödinger Equation

## Overview
The time-independent Schrödinger equation is the central equation of quantum mechanics. It is an eigenvalue equation: find the wavefunctions $\psi(x)$ and energies $E$ such that $H \psi = E \psi$, where $H$ is the Hamiltonian operator. For a particle of mass $m$ in a 1D potential $V(x)$, the equation is

$$-\frac{\hbar^2}{2 m} \frac{d^2 \psi}{dx^2} + V(x) \psi = E \psi.$$

This lesson develops the equation, interprets the wavefunction, and solves the simplest case: the free particle.

## Learning Path
- What you should already know: de Broglie waves, the Bohr atom, the wave equation.
- What this lesson adds: a differential equation for matter waves, with energy eigenvalues and normalised wavefunctions.
- What it unlocks: the square well, the harmonic oscillator, the hydrogen atom, and every quantum-mechanical calculation.

## Core Explanation
**The wavefunction.** A complex function $\Psi(x, t)$ whose squared modulus $|\Psi(x, t)|^2 = \Psi^* \Psi$ is the probability density of finding the particle at position $x$ at time $t$. The Born rule. The wavefunction must be normalised: $\int |\Psi|^2 dx = 1$ (over all space, the probability of finding the particle somewhere is $1$).

**The Schrödinger equation.** The wavefunction obeys the time-dependent Schrödinger equation

$$i \hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2 m} \frac{\partial^2 \Psi}{\partial x^2} + V(x) \Psi.$$

This is a wave equation, but with an imaginary unit $i$, making the solutions oscillatory in a way that preserves probability (not energy).

**Time-independent Schrödinger equation (TISE).** For a stationary state, the wavefunction separates: $\Psi(x, t) = \psi(x) e^{-i E t/\hbar}$. The time-dependence factors out, leaving

$$-\frac{\hbar^2}{2 m} \frac{d^2 \psi}{dx^2} + V(x) \psi = E \psi,$$

or equivalently

$$\frac{d^2 \psi}{dx^2} = \frac{2 m}{\hbar^2} (V(x) - E) \psi.$$

This is the *time-independent Schrödinger equation*. The unknowns are $\psi(x)$ and $E$. For each allowed $E$, there is a corresponding $\psi(x)$.

**The Hamiltonian.** The operator $H = -(\hbar^2/2m) d^2/dx^2 + V(x)$. The TISE is $H \psi = E \psi$ — an eigenvalue equation. $E$ is the energy eigenvalue; $\psi$ is the eigenfunction.

**Conditions on $\psi$.** The wavefunction must be:
- Continuous (so the probability density is well-defined).
- Once continuously differentiable (so $d\psi/dx$ is continuous; required for $d^2\psi/dx^2$ to be defined in the usual sense).
- Square-integrable: $\int |\psi|^2 dx < \infty$ (so it can be normalised).
- Well-behaved at infinity (must vanish or be normalisable).

These conditions restrict the allowed energies $E$ to a discrete set for bound states.

**Free particle ($V = 0$).** The TISE becomes

$$\frac{d^2 \psi}{dx^2} = -\frac{2 m E}{\hbar^2} \psi = -k^2 \psi, \quad k = \frac{\sqrt{2 m E}}{\hbar}.$$

Solutions: $\psi(x) = A e^{i k x} + B e^{-i k x}$. In terms of sines and cosines: $\psi(x) = C \cos(k x) + D \sin(k x)$. The energy $E = \hbar^2 k^2/(2 m)$ is continuous (no quantisation) — a free particle has any energy. The wavefunctions are not normalisable on the whole real line; they represent plane waves $e^{i k x}$ or superpositions.

**Wave packets.** A localised free particle is described by a *wave packet* — a superposition of plane waves centred on some mean momentum. The wave packet moves at the group velocity $v_g = p/m$ and spreads in time. This is the wave-mechanical version of a classical particle.

**Probability current.** For a wave packet moving with velocity $v$, the probability flux is $j = |\Psi|^2 v$. The continuity equation $\partial \rho/\partial t + \partial j/\partial x = 0$ expresses conservation of probability.

**Particle in a 1D box (preview).** A particle confined to $0 < x < L$ with $V = 0$ inside, $V = \infty$ outside. The TISE has the free-particle form inside, with boundary conditions $\psi(0) = \psi(L) = 0$. Solutions: $\psi_n(x) = \sqrt{2/L} \sin(n \pi x/L)$, $E_n = n^2 \pi^2 \hbar^2/(2 m L^2)$. The energy is quantised. Covered in detail in the next lesson.

**Step potential.** A potential that is $0$ for $x < 0$ and $V_0$ for $x > 0$. For $E > V_0$, the wave is transmitted and reflected; for $E < V_0$, there is exponential decay in the $V_0$ region but non-zero probability of *tunnelling* through a finite-width barrier.

**Units.** In "natural" units where $\hbar = m = 1$, the TISE is $-d^2 \psi/dx^2/2 + V \psi = E \psi$. This is convenient for numerical work and analytical estimates.

**Eigenvalue problem.** Mathematically, the TISE is a Sturm–Liouville problem on a domain with appropriate boundary conditions. The solutions form a complete orthonormal basis. Any wavefunction can be expanded in this basis.

**Probability interpretation requires normalisation.** A wavefunction is *normalised* if $\int_{-\infty}^{\infty} |\psi(x)|^2 dx = 1$. Unnormalised $\psi$ are common in intermediate calculations; the normalisation constant is fixed at the end.

**Inner product.** The inner product of two wavefunctions is $\langle \phi | \psi \rangle = \int \phi^* \psi\, dx$. Normalisation is $\langle \psi | \psi \rangle = 1$. Orthogonality is $\langle \phi_n | \psi_m \rangle = 0$ for $n \ne m$. These are the basic tools of quantum-mechanical calculation.

**Expectation values.** The expectation value of an observable $A$ in state $\psi$ is $\langle A \rangle = \langle \psi | A | \psi \rangle = \int \psi^* A \psi\, dx$ (for $A$ an operator). For position: $\langle x \rangle = \int x |\psi|^2 dx$. For momentum: $\langle p \rangle = \int \psi^* (-i \hbar d\psi/dx) dx$.

**The Hamiltonian as a differential operator.** $H = p^2/(2m) + V(x)$ in classical form. Replace $p$ with the operator $-i \hbar d/dx$: $H = -(\hbar^2/2m) d^2/dx^2 + V(x)$. The TISE $H \psi = E \psi$ is the operator form of the energy equation.

## Key Ideas
- Wavefunction $\Psi(x, t)$; $|\Psi|^2$ is the probability density.
- Time-independent Schrödinger equation: $-(\hbar^2/2m) \psi'' + V \psi = E \psi$.
- $H \psi = E \psi$ is an eigenvalue equation.
- Normalisation: $\int |\psi|^2 dx = 1$.
- Expectation value: $\langle A \rangle = \int \psi^* A \psi dx$.

## Worked Examples
**Example 1 — Free particle.** $V = 0$, $E > 0$. $k = \sqrt{2 m E}/\hbar$, $\psi = A e^{i k x} + B e^{-i k x}$. Energy continuous, no quantisation.

**Example 2 — Normalisation of a Gaussian wave packet.** $\psi(x) = A e^{-x^2/(4 \sigma^2)} e^{i k_0 x}$. $\int |\psi|^2 dx = |A|^2 \int e^{-x^2/(2 \sigma^2)} dx = |A|^2 \sigma \sqrt{2\pi}$. So $A = (2\pi \sigma^2)^{-1/4}$.

**Example 3 — Expectation value of kinetic energy.** For the ground state of a particle in a box, $\psi_1 = \sqrt{2/L} \sin(\pi x/L)$. $\langle T \rangle = -\hbar^2/(2m) \int \psi^* d^2 \psi/dx^2 dx = \pi^2 \hbar^2/(2 m L^2) = E_1$. As expected, since $V = 0$ inside the box.

## Common Misconceptions
- **"The wavefunction is real."** Not necessarily — it can be complex. Only $|\Psi|^2$ is observable.
- **"$|\Psi|^2$ is the probability."** It is the *probability density*. The probability of finding the particle in a small interval $dx$ is $|\Psi|^2 dx$.
- **"Eigenvalues are the only allowed energies."** For bound states, yes (discrete spectrum). For unbound states, the spectrum is continuous.
- **"The Schrödinger equation is derived from classical mechanics."** It is not — it is a postulate of quantum mechanics, motivated by analogy with the wave equation and the de Broglie relation. Its validity is established by experiment.

## Connections
The Schrödinger equation is the foundation of *Atomic and Molecular Physics* (Sem 6), *Solid State Physics* (Sem 5), and *Nuclear Physics* (Sem 6). The same eigenvalue-problem structure appears in every bound-state problem: the particle in a box, the harmonic oscillator, the hydrogen atom, and the periodic potential of a crystal. The probability interpretation underlies the measurement theory and the uncertainty principle.

## Quick Check
1. State the time-independent Schrödinger equation.
2. What is the role of the wavefunction?
3. State the Born rule.
4. Solve the free-particle Schrödinger equation.
5. State the conditions on the wavefunction.

## Takeaway
- TISE: $-(\hbar^2/2m) \psi'' + V \psi = E \psi$.
- $H \psi = E \psi$ is an eigenvalue equation.
- Wavefunction must be continuous, differentiable, square-integrable.
- $|\Psi|^2$ is the probability density (Born rule).
- Expectation: $\langle A \rangle = \int \psi^* A \psi\, dx$.
