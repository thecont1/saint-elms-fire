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
lessonId: introduction-to-quantum-mechanics-m2-l3
lessonName: Tunnelling and the Harmonic Oscillator
lessonNumber: 6
moduleNumber: 2
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - introduction-to-quantum-mechanics-m2-l2
learningObjectives:
  - Compute the tunnelling probability for a finite barrier.
  - Solve the quantum harmonic oscillator by the power-series method.
  - State the energy spectrum and Hermite-polynomial wavefunctions.
  - Recognise the zero-point energy and the classical turning points.
concepts:
  - Quantum tunnelling
  - Tunnelling probability
  - Harmonic oscillator
  - Hermite polynomials
  - Ladder operators (preview)
  - Classical turning point
tags:
  - physics
  - quantum-mechanics
  - tunnelling
  - harmonic-oscillator
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Tunnelling and the Harmonic Oscillator

## Overview
Two of the most important 1D problems in quantum mechanics are quantum tunnelling (a particle passing through a classically forbidden region) and the quantum harmonic oscillator. Tunnelling is the basis of the tunnel diode, the scanning tunnelling microscope, and alpha decay. The harmonic oscillator is the model of molecular vibrations, phonons in solids, and the quantised electromagnetic field. This lesson derives both, with the tunnelling probability formula and the Hermite-polynomial wavefunctions of the oscillator.

## Learning Path
- What you should already know: the TISE, the square well, the wavefunction and its properties.
- What this lesson adds: tunnelling as a quantum effect with a measurable probability, and the harmonic-oscillator spectrum.
- What it unlocks: the hydrogen atom, phonons, lasers, and quantum field theory.

## Core Explanation
**Tunnelling setup.** A particle of energy $E < V_0$ encounters a barrier of height $V_0$ and width $w$. Classically, the particle cannot enter the barrier. Quantum mechanically, the wavefunction in the barrier is exponentially decaying: $\psi \propto e^{-\kappa x}$ with $\kappa = \sqrt{2 m (V_0 - E)}/\hbar$. On the far side, the wavefunction is non-zero.

**Tunnelling probability.** For a wide barrier, the transmission probability is

$$T \approx e^{-2 \kappa w} = \exp\left(-\frac{2 w \sqrt{2 m (V_0 - E)}}{\hbar}\right).$$

The exact expression (from matching boundary conditions for a rectangular barrier) is

$$T = \frac{1}{1 + (V_0^2 \sinh^2(\kappa w))/(4 E (V_0 - E))}.$$

For $\kappa w \gg 1$, this reduces to the exponential approximation.

**Why tunnelling matters.** The exponential dependence on width makes tunnelling significant only for thin barriers. A $1\text{ eV}$ electron with a $2\text{ eV}$ barrier of width $0.1\text{ nm}$ has $T \approx 0.5$ — comparable to transmission. A width of $1\text{ nm}$ reduces $T$ to about $10^{-5}$.

**Alpha decay.** An alpha particle (helium nucleus) is bound inside a heavy nucleus by the strong nuclear force. Outside, it is repelled by the Coulomb barrier (height $\sim 25\text{ MeV}$). The Gamow factor $G = 2 \kappa w / \hbar$ — proportional to the integral of $\sqrt{2 m (V(r) - E)}$ over the classically forbidden region — gives the half-life. The Geiger–Nuttall law (log half-life linear in $1/\sqrt{E}$) is a consequence.

**Scanning tunnelling microscope.** A sharp metal tip is brought within a nanometre of a conducting surface. A small bias voltage causes electrons to tunnel across the vacuum gap. The tunnelling current is exponential in the tip–surface distance; by scanning the tip and keeping the current constant, the surface topography is mapped at sub-Ångström resolution.

**Tunnel diode.** A semiconductor device with a thin depletion region. Electrons tunnel through the barrier; the current–voltage curve has a region of negative differential resistance. Used in high-frequency oscillators.

**The harmonic oscillator potential.** $V(x) = \tfrac{1}{2} m \omega^2 x^2$ for a particle of mass $m$ on a spring of constant $k = m \omega^2$. Classical motion: $x(t) = A \cos(\omega t + \phi)$, energy $E = \tfrac{1}{2} m \omega^2 A^2$.

**Quantum harmonic oscillator: TISE.** $-\hbar^2/(2m) \psi'' + \tfrac{1}{2} m \omega^2 x^2 \psi = E \psi$. In the standard form,

$$\frac{d^2 \psi}{d \xi^2} + (\lambda - \xi^2) \psi = 0, \quad \xi = \sqrt{\frac{m \omega}{\hbar}} x, \quad \lambda = \frac{2 E}{\hbar \omega}.$$

**Asymptotic behaviour.** For large $\xi$, the equation becomes $\psi'' \approx \xi^2 \psi$, with solutions $\psi \sim e^{\pm \xi^2/2}$. The square-integrable one is $\psi \sim e^{-\xi^2/2}$ (decay, not growth).

**Power-series solution.** Try $\psi = e^{-\xi^2/2} u(\xi)$. The equation becomes the *Hermite equation* $u'' - 2 \xi u' + (\lambda - 1) u = 0$. Look for a power series $u = \sum a_n \xi^n$. The recurrence is $a_{n+2} = (2 n + 1 - \lambda) a_n / ((n+1)(n+2))$.

**Termination condition.** For $u$ to be a polynomial (not an infinite series, which diverges at infinity), the recurrence must terminate. This requires $\lambda = 2 n + 1$ for some non-negative integer $n$, i.e.

$$E_n = \hbar \omega (n + 1/2), \quad n = 0, 1, 2, \ldots$$

**The energy spectrum.** Evenly spaced, with zero-point energy $E_0 = \tfrac{1}{2} \hbar \omega$. Unlike the particle in a box, the spacing is constant, not quadratic in $n$.

**Hermite polynomials.** The polynomial solutions are the Hermite polynomials $H_n(\xi)$:

$$H_0 = 1, \quad H_1 = 2\xi, \quad H_2 = 4\xi^2 - 2, \quad H_3 = 8\xi^3 - 12\xi, \quad \ldots$$

The recurrence $H_{n+1} = 2 \xi H_n - 2 n H_{n-1}$ generates them all. They are orthogonal with respect to the weight $e^{-\xi^2}$:

$$\int_{-\infty}^{\infty} H_n(\xi) H_m(\xi) e^{-\xi^2} d\xi = 0 \quad (n \ne m).$$

**Normalised wavefunctions.** $\psi_n(x) = (m\omega/(\pi \hbar))^{1/4} (1/\sqrt{2^n n!}) H_n(\sqrt{m\omega/\hbar} x) e^{-m \omega x^2/(2 \hbar)}$.

**Properties of the wavefunctions.**
- $\psi_n$ has $n$ nodes (zeros), in addition to the Gaussian decay at infinity.
- $E_n = (n + 1/2) \hbar \omega$.
- The classical turning point is at $x_n = \sqrt{2 E_n/(m \omega^2)} = \sqrt{(2 n + 1) \hbar/(m \omega)}$. The probability density $|\psi_n|^2$ is maximum near the classical turning point for large $n$ — the *correspondence principle*.
- The parity is $(-1)^n$: $\psi_n(-x) = (-1)^n \psi_n(x)$.

**Ladder operators (preview).** Define the raising and lowering operators

$$a = \sqrt{\frac{m \omega}{2 \hbar}} \left(x + \frac{i}{m \omega} p\right), \quad a^\dagger = \sqrt{\frac{m \omega}{2 \hbar}} \left(x - \frac{i}{m \omega} p\right),$$

where $p = -i \hbar d/dx$. These satisfy $[a, a^\dagger] = 1$, and $H = \hbar \omega (a^\dagger a + 1/2)$. The eigenstates are $|n\rangle$ with $H |n\rangle = (n + 1/2) \hbar \omega |n\rangle$, $a^\dagger |n\rangle = \sqrt{n+1} |n+1\rangle$, $a |n\rangle = \sqrt{n} |n-1\rangle$. The ladder-operator method gives the spectrum without solving a differential equation.

**Coherent states.** Eigenstates of $a$: $a |\alpha\rangle = \alpha |\alpha\rangle$. They are minimum-uncertainty wave packets that follow the classical trajectory. The closest quantum-mechanical analogue of a classical oscillating particle.

**Molecular vibrations.** A diatomic molecule vibrates approximately as a harmonic oscillator near its equilibrium separation. The vibrational levels are $E_n = (n + 1/2) \hbar \omega$, with $\omega = \sqrt{k/\mu}$ where $\mu$ is the reduced mass. Transitions between levels produce infrared spectra.

**Phonons.** In a crystal, the collective vibrations of atoms are quantised as *phonons*, each with energy $\hbar \omega$. The harmonic-oscillator formalism is the foundation of lattice dynamics in *Solid State Physics* (Sem 5).

**Why the harmonic oscillator is everywhere.** Any potential $V(x)$ near a stable minimum can be approximated as harmonic: $V(x) \approx V(x_0) + \tfrac{1}{2} V''(x_0) (x - x_0)^2$. Small oscillations of any system are harmonic, and the quantisation of those oscillations is the harmonic oscillator's energy spectrum.

## Key Ideas
- Tunnelling probability: $T \approx e^{-2 \kappa w}$ for $E < V_0$, $\kappa = \sqrt{2 m (V_0 - E)}/\hbar$.
- Quantum harmonic oscillator: $E_n = (n + 1/2) \hbar \omega$, evenly spaced.
- Zero-point energy: $E_0 = \tfrac{1}{2} \hbar \omega$.
- Wavefunctions: $\psi_n \propto H_n(\xi) e^{-\xi^2/2}$.
- Ladder operators: $a^\dagger$ raises, $a$ lowers, by one quantum.

## Worked Examples
**Example 1 — Alpha decay.** A $5\text{ MeV}$ alpha in a nucleus, Coulomb barrier $\sim 25\text{ MeV}$, $A \sim 200$. Width of forbidden region at the classical turning point: $w \sim 30\text{ fm}$. $\kappa = \sqrt{2 \times 4 \times 1.66 \times 10^{-27} \times (25 - 5) \times 1.6 \times 10^{-13}} / 1.05 \times 10^{-34} \approx 1.4 \times 10^{15}\text{ m}^{-1}$. $2 \kappa w \approx 84$. $T \approx e^{-84} \approx 10^{-36}$. The half-life is $\hbar/T \sim 10^{20}\text{ s}$ for a typical $5\text{ MeV}$ alpha — consistent with observed half-lives.

**Example 2 — Zero-point of a molecular vibration.** HCl: $\omega = 5.5 \times 10^{14}\text{ rad/s}$ (vibrational frequency). $E_0 = \tfrac{1}{2} \hbar \omega = 0.19\text{ eV}$. The molecule vibrates with at least this much energy even at absolute zero.

**Example 3 — STM.** Tip–surface distance $0.5\text{ nm}$, work function $4\text{ eV}$, bias $0.1\text{ V}$. $\kappa = \sqrt{2 \times 9.11 \times 10^{-31} \times 4 \times 1.6 \times 10^{-19}} / 1.05 \times 10^{-34} \approx 1.0 \times 10^{10}\text{ m}^{-1}$. $2 \kappa w \approx 10$. $T \approx e^{-10} \approx 5 \times 10^{-5}$ — a measurable current.

## Common Misconceptions
- **"Tunnelling violates energy conservation."** No — the particle's energy is the same on both sides. The barrier is forbidden by classical energy conservation, not by the quantum dynamics.
- **"The harmonic oscillator has $E = 0$ as the lowest state."** No — the zero-point energy $\tfrac{1}{2} \hbar \omega$ is a quantum effect.
- **"Higher $n$ means more spread-out wavefunction."** Yes, but the wavefunction also has more nodes. The classical turning point $\sqrt{(2 n + 1) \hbar/(m \omega)}$ grows with $n$, so the wavefunction does spread.
- **"Hermite polynomials are only for harmonic oscillators."** They appear in many other contexts (Hermite functions in probability, Hermite polynomials in combinatorics).

## Connections
Tunnelling is the basis of many modern devices and natural phenomena. The harmonic oscillator is the most important exactly solvable quantum problem, with applications everywhere from molecular physics to quantum optics. The ladder-operator method is the prototype of second quantisation in quantum field theory. The energy spectrum $E_n = (n + 1/2) \hbar \omega$ is the foundation of blackbody radiation in *Astrophysics I* and of phonons in *Solid State Physics*.

## Quick Check
1. State the tunnelling probability formula.
2. State the energy spectrum of the quantum harmonic oscillator.
3. What is the zero-point energy of a harmonic oscillator with $\omega = 10^{15}\text{ rad/s}$?
4. Sketch $\psi_0$ and $\psi_1$ of the harmonic oscillator.
5. What is the classical turning point for state $n$?

## Takeaway
- Tunnelling: $T \approx e^{-2 \kappa w}$ for $E < V_0$.
- Quantum HO: $E_n = (n + 1/2) \hbar \omega$, evenly spaced.
- Wavefunctions: $\psi_n \propto H_n(\xi) e^{-\xi^2/2}$.
- Ladder operators raise and lower the energy.
- The HO is the prototype of every small oscillation; phonons are bosonic excitations.
