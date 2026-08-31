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
lessonId: introduction-to-quantum-mechanics-m2-l2
lessonName: Infinite and Finite Square Wells
lessonNumber: 5
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - introduction-to-quantum-mechanics-m2-l1
learningObjectives:
  - Solve the infinite square well (particle in a box) and state the eigenstates.
  - Sketch the wavefunctions and probability densities.
  - Solve the finite square well and explain the bound-state condition.
  - Recognise the parity symmetry of the well eigenstates.
concepts:
  - Infinite square well
  - Particle in a box
  - Boundary condition
  - Quantised energy
  - Finite square well
  - Parity
tags:
  - physics
  - quantum-mechanics
  - square-well
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Infinite and Finite Square Wells

## Overview
The square well is the simplest quantum bound-state problem and the prototype of every confining potential. The *infinite* square well (the "particle in a box") has hard walls and analytic solutions; the *finite* square well has a soft wall and requires matching conditions. Both illustrate the basic features of quantised bound states: discrete energy levels, characteristic wavefunctions, and parity symmetry. This lesson solves both, and shows how the bound-state condition emerges from the matching at the potential step.

## Learning Path
- What you should already know: the TISE, boundary conditions on $\psi$, normalisation.
- What this lesson adds: the concrete solution of the simplest bound-state problem, and the contrast between hard and soft walls.
- What it unlocks: the harmonic oscillator (next lesson), the hydrogen atom (next module), and the periodic potential of a crystal.

## Core Explanation
**Infinite square well.** A particle of mass $m$ confined to $0 < x < L$, with $V = 0$ inside and $V = \infty$ outside. The boundary conditions are $\psi(0) = \psi(L) = 0$ (the wavefunction must vanish where the potential is infinite).

Inside the well, the TISE is the free-particle equation $\psi'' = -k^2 \psi$ with $k^2 = 2 m E/\hbar^2$. The general solution is $\psi = A \sin(k x) + B \cos(k x)$. Boundary conditions: $\psi(0) = 0 \Rightarrow B = 0$. $\psi(L) = 0 \Rightarrow A \sin(k L) = 0 \Rightarrow k L = n \pi$ for $n = 1, 2, 3, \ldots$.

**Eigenstates.** $\psi_n(x) = \sqrt{2/L} \sin(n \pi x / L)$, with the normalisation $\int_0^L \sin^2(n\pi x/L) dx = L/2$.

**Eigenvalues.** $E_n = n^2 \pi^2 \hbar^2 / (2 m L^2)$. The ground state ($n = 1$) is $E_1 = \pi^2 \hbar^2/(2 m L^2)$. The energies grow as $n^2$.

**Zero-point energy.** The lowest energy $E_1 > 0$ — the particle cannot be at rest, even at the lowest allowed state. This is a quantum effect: the uncertainty principle requires the particle to have a non-zero momentum spread $\Delta p \sim \hbar/L$, hence a kinetic energy $\sim \hbar^2/(2 m L^2) = E_1$.

**Wavefunctions.** $\psi_n$ has $n - 1$ nodes (zeros) inside the well, not counting the endpoints. The wavelength fits an integer number of half-wavelengths: $L = n \lambda/2$, so $\lambda_n = 2 L/n$ and $p_n = h/\lambda_n = n h/(2L)$. The momentum magnitude is $|p_n| = n \pi \hbar/L$, the kinetic energy is $E_n = p_n^2/(2m)$.

**Probability density.** $|\psi_n(x)|^2 = (2/L) \sin^2(n \pi x / L)$. For large $n$, the oscillations are rapid and the average density is uniform — the classical limit.

**Parity.** About the centre $x = L/2$, the well is symmetric: $V(L/2 + x) = V(L/2 - x)$. The eigenstates have definite parity: $\psi_n(L/2 + x) = (-1)^{n+1} \psi_n(L/2 - x)$. Odd $n$ are antisymmetric, even $n$ symmetric. Parity is a conserved quantum number for symmetric potentials.

**Comparison with classical.** Classically, the particle bounces between the walls with uniform probability density. Quantum mechanically, the density oscillates for low $n$ but averages to the classical value for high $n$. This is an example of the *correspondence principle*.

**Finite square well.** A potential $V = 0$ for $|x| < a$, $V = V_0 > 0$ for $|x| > a$ (a well of depth $V_0$ and width $2 a$). Bound states have $0 < E < V_0$.

**Inside the well.** $\psi'' = -k^2 \psi$ with $k^2 = 2 m E/\hbar^2$. Solutions: $\sin(k x)$ and $\cos(k x)$.

**Outside the well.** $\psi'' = \kappa^2 \psi$ with $\kappa^2 = 2 m (V_0 - E)/\hbar^2 > 0$. Solutions: $e^{\pm \kappa x}$. The bound-state condition (square-integrability) requires the wave to decay: $\psi \propto e^{-\kappa |x|}$ for $|x| > a$.

**Matching conditions.** At $x = \pm a$, $\psi$ and $d\psi/dx$ must be continuous. For an even state (symmetric, $\psi'(0) = 0$): match at $x = a$:

$$k \tan(k a) = \kappa.$$

For an odd state (antisymmetric, $\psi(0) = 0$): $-k \cot(k a) = \kappa$.

**Bound-state condition.** For a given well depth $V_0$ and width $a$, the equations $k \tan(k a) = \kappa$ and $-k \cot(k a) = \kappa$ have a finite number of solutions. The number of bound states is roughly $1 + \sqrt{2 m V_0 a^2/\hbar^2}/\pi$ — a deeper or wider well has more bound states.

**Transcendental equation.** The bound-state condition is a transcendental equation; solutions are found graphically or numerically. Plot the left and right sides as functions of $k$ (or $E$) and find the intersections.

**Even-odd alternation.** The lowest bound state is always even. The second is odd, the third even, and so on — alternating parity. For a deep well, the energies approach those of the infinite well.

**Tunnelling.** A particle with $E < V_0$ in a finite well has exponentially decaying wavefunction outside. If the well has finite width, the wavefunction on the other side is non-zero: the particle can *tunnel* through the barrier. This is the basis of the tunnel diode, the scanning tunnelling microscope, and alpha decay.

**Parity in general.** For a potential with $V(-x) = V(x)$, the eigenstates have definite parity. This is a powerful symmetry: it restricts which matrix elements can be non-zero, simplifies selection rules, and underpins many atomic physics results.

**Comparison to classical.** Classically, a particle with $E < V_0$ cannot be in the region $|x| > a$ (it would have negative kinetic energy). Quantum mechanically, there is a non-zero probability of finding the particle there — the wavefunction is non-zero outside the well.

**Tunnelling probability.** For a barrier of height $V_0$ and width $w$, and a particle with $E < V_0$, the transmission probability is $T \approx e^{-2 \kappa w}$, where $\kappa = \sqrt{2 m (V_0 - E)}/\hbar$. The exponential dependence on width makes tunnelling significant only for thin barriers (a few nm or less).

**STM.** The scanning tunnelling microscope uses the tunnelling current between a sharp tip and a conducting surface to image at atomic resolution. The current is exponential in the tip–surface distance.

## Key Ideas
- Infinite well: $E_n = n^2 \pi^2 \hbar^2/(2 m L^2)$, $\psi_n = \sqrt{2/L} \sin(n \pi x/L)$.
- Zero-point energy: $E_1 > 0$.
- Finite well: bound states satisfy $k \tan(k a) = \kappa$ (even) or $-k \cot(k a) = \kappa$ (odd).
- Tunnelling: $T \sim e^{-2 \kappa w}$.
- Parity: eigenstates of a symmetric potential are even or odd.

## Worked Examples
**Example 1 — Electron in a $1\text{ nm}$ well.** $E_1 = \pi^2 \hbar^2/(2 m L^2) = \pi^2 \times (1.05 \times 10^{-34})^2 / (2 \times 9.11 \times 10^{-31} \times 10^{-18}) \approx 6.0 \times 10^{-20}\text{ J} = 0.37\text{ eV}$.

**Example 2 — $n = 2$ wavefunction.** $\psi_2 = \sqrt{2/L} \sin(2 \pi x / L)$. One node in the interior, antisymmetric about $x = L/2$.

**Example 3 — Bound state of finite well.** $V_0 = 10\text{ eV}$, $a = 0.5\text{ nm}$, $m = m_e$. The transcendental equation $k \tan(k a) = \kappa$ has approximately $3$–$4$ bound states. Numerical solution gives $E_1 \approx 2.3\text{ eV}$, $E_2 \approx 8.9\text{ eV}$.

## Common Misconceptions
- **"A particle in a box can be at rest."** No — the zero-point energy $E_1 > 0$ is a quantum effect.
- **"Higher $n$ means higher probability in the middle."** Not for low $n$; the probability density oscillates and the average is uniform only in the classical limit ($n \to \infty$).
- **"Tunnelling violates energy conservation."** No — the particle's energy is the same on both sides. The barrier is not a "hill" of energy but a region of forbidden classical motion.
- **"Even/odd parity means even/odd energy."** The energies can be in any order; the parity refers to the spatial symmetry of the wavefunction, not the energy.

## Connections
The square well is the foundation of every bound-state problem. The finite-well bound-state condition reappears in nuclear physics (the deuteron, alpha decay), in solid-state physics (quantum wells, semiconductor heterostructures), and in atomic physics (deep potential wells of inner electrons). The tunnelling result is the basis of STM and many other modern devices.

## Quick Check
1. State the eigenstates of a particle in a 1D infinite square well.
2. What is the zero-point energy?
3. Sketch $\psi_1, \psi_2, \psi_3$ for the infinite well.
4. What is the bound-state condition for a finite square well?
5. What is the parity of the ground state?

## Takeaway
- Infinite well: $E_n = n^2 \pi^2 \hbar^2/(2 m L^2)$, $\psi_n = \sqrt{2/L} \sin(n \pi x/L)$.
- Zero-point energy: $E_1 > 0$.
- Finite well: bound states satisfy $k \tan(k a) = \kappa$ (even) or $-k \cot(k a) = \kappa$ (odd).
- Tunnelling: $T \sim e^{-2 \kappa w}$.
- Parity is a quantum number for symmetric potentials.
