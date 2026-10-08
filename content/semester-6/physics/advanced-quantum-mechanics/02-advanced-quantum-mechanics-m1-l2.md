***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: advanced-quantum-mechanics
courseName: Advanced Quantum Mechanics (Physics Option C)
moduleId: advanced-quantum-mechanics-module-1
moduleName: Dirac Formalism and Quantum Dynamics
lessonId: advanced-quantum-mechanics-m1-l2
lessonName: Postulates, Measurement and the Pictures of Quantum Dynamics
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - advanced-quantum-mechanics-m1-l1
  - introduction-to-quantum-mechanics-m2-l1
learningObjectives:
  - State the postulates of quantum mechanics in Dirac notation and apply the Born rule and projection postulate to a measurement on a superposition.
  - Derive the generalised uncertainty relation $\Delta A\,\Delta B \geq \tfrac12|\langle[\hat A,\hat B]\rangle|$ from the Schwarz inequality.
  - Construct the time-evolution operator $\hat U(t) = e^{-i\hat Ht/\hbar}$ and derive the Heisenberg equation of motion and Ehrenfest's theorem.
  - Compare the Schrödinger, Heisenberg and interaction pictures and choose the natural one for a given problem.
concepts:
  - Postulates of quantum mechanics
  - Born rule
  - Projection postulate
  - Generalised uncertainty relation
  - Time-evolution operator
  - Heisenberg picture
  - Interaction picture
tags:
  - physics
  - advanced-quantum-mechanics
  - measurement
  - heisenberg-picture
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Postulates, Measurement and the Pictures of Quantum Dynamics

## Overview

In Hilbert-space language the physics of quantum mechanics is a short list of postulates: states are rays, observables are Hermitian operators, outcomes are eigenvalues distributed by the Born rule, measurement projects onto an eigenspace, and between measurements evolution is unitary. This lesson states them, derives the general uncertainty relation, introduces the density operator, and turns to dynamics. The time-evolution operator $\hat U(t) = e^{-i\hat Ht/\hbar}$ solves the Schrödinger equation; moving it from states to observables gives the Heisenberg picture, whose operator equations mirror Hamilton's equations with commutators replacing Poisson brackets. Splitting the Hamiltonian into a solvable part and a perturbation gives the interaction picture, the setting for time-dependent perturbation theory in Module 3.

## Learning Path

- **What you should already know**: Dirac notation, Hermitian and unitary operators, spectral decomposition (Lesson m1-l1); the Schrödinger equation and stationary states (introduction-to-quantum-mechanics Lesson m2-l1).
- **What this lesson adds**: the postulates, compatible observables and CSCOs, the generalised uncertainty relation, the density operator, the time-evolution operator, and the three pictures of dynamics.
- **What later lessons this will unlock**: the Heisenberg-picture oscillator (Lesson m1-l3), simultaneous eigenstates of $\hat J^2$ and $\hat J_z$ (Lesson m2-l1), the Dyson series and Fermi's golden rule (Lesson m3-l2), and scattering theory (Lesson m3-l3).

## Core Explanation

### The postulates

1. **State postulate.** An isolated system's state is a normalised ket $|\psi\rangle$ in a Hilbert space $\mathcal H$, defined up to a phase.
2. **Observable postulate.** Each measurable quantity $A$ is a Hermitian operator $\hat A$ with a complete orthonormal set of eigenkets, $\hat A|a\rangle = a|a\rangle$.
3. **Born rule.** Measuring $A$ yields an eigenvalue $a$ with probability $P(a) = |\langle a|\psi\rangle|^2$ if $a$ is non-degenerate, and $P(a) = \langle\psi|\hat P_a|\psi\rangle$ in general, with $\hat P_a$ the projector onto the eigenspace. For a continuous spectrum $P(a)\,da = |\langle a|\psi\rangle|^2 da$, which for $\hat x$ is $|\psi(x)|^2 dx$.
4. **Projection postulate.** Immediately after a result $a$, the state is $\hat P_a|\psi\rangle/\sqrt{P(a)}$, so repeating the measurement returns $a$ with certainty.
5. **Evolution postulate.** Between measurements $i\hbar\,\partial_t|\psi(t)\rangle = \hat H|\psi(t)\rangle$, with $\hat H$ the Hamiltonian.

The **expectation value** is $\langle\hat A\rangle = \sum_a aP(a) = \langle\psi|\hat A|\psi\rangle$, and the **uncertainty** is $(\Delta A)^2 = \langle\hat A^2\rangle - \langle\hat A\rangle^2 = \langle\psi|(\hat A - \langle\hat A\rangle)^2|\psi\rangle$. It vanishes only for eigenkets of $\hat A$.

### Compatible observables and complete sets

Observables are **compatible** if $[\hat A,\hat B] = 0$. They then share simultaneous eigenkets $|a, b\rangle$, and measuring $A$, then $B$, then $A$ again returns the original value. Otherwise the second measurement generally destroys the information from the first. Adding commuting observables until the joint eigenvalues specify a unique ket gives a **complete set of commuting observables** (CSCO). For hydrogen $\{\hat H, \hat L^2, \hat L_z, \hat S_z\}$ is a CSCO with joint eigenvalues $(n, l, m_l, m_s)$.

### The generalised uncertainty relation

Let $\delta\hat A = \hat A - \langle\hat A\rangle$, $\delta\hat B = \hat B - \langle\hat B\rangle$, $|f\rangle = \delta\hat A|\psi\rangle$ and $|g\rangle = \delta\hat B|\psi\rangle$. The Schwarz inequality $\langle f|f\rangle\langle g|g\rangle \geq |\langle f|g\rangle|^2$ gives $(\Delta A)^2(\Delta B)^2 \geq |\langle\delta\hat A\,\delta\hat B\rangle|^2$. Split $\delta\hat A\,\delta\hat B = \tfrac12\{\delta\hat A,\delta\hat B\} + \tfrac12[\delta\hat A,\delta\hat B]$ into a Hermitian anticommutator, with real expectation, and an anti-Hermitian commutator, with imaginary expectation. Since $|\text{real} + \text{imaginary}|^2 \geq |\text{imaginary}|^2$ and $[\delta\hat A,\delta\hat B] = [\hat A,\hat B]$,

$$\Delta A\,\Delta B \geq \tfrac12\left|\langle[\hat A,\hat B]\rangle\right|.$$

With $[\hat x,\hat p] = i\hbar$ this is Heisenberg's $\Delta x\,\Delta p \geq \hbar/2$, a property of non-commuting operators, not of apparatus. Equality requires $|g\rangle = \lambda|f\rangle$ with $\lambda$ imaginary, which for $\hat x, \hat p$ selects Gaussian wave packets.

### The density operator

Incomplete information is described by a **density operator** $\hat\rho = \sum_i p_i|\psi_i\rangle\langle\psi_i|$, with $p_i$ the classical probability of preparation in $|\psi_i\rangle$. Then $\langle\hat A\rangle = \operatorname{Tr}(\hat\rho\hat A)$ and $\operatorname{Tr}\hat\rho = 1$. A **pure state** has $\hat\rho = |\psi\rangle\langle\psi|$ and $\operatorname{Tr}\hat\rho^2 = 1$; a **mixed state** has $\operatorname{Tr}\hat\rho^2 < 1$. An unpolarised Stern–Gerlach beam is $\hat\rho = \tfrac12\hat 1$, an incoherent mixture, not a superposition. The density operator obeys the von Neumann equation $i\hbar\,\partial_t\hat\rho = [\hat H,\hat\rho]$.

### The time-evolution operator and the Schrödinger picture

Linearity allows $|\psi(t)\rangle = \hat U(t, t_0)|\psi(t_0)\rangle$, with a **time-evolution operator** obeying $i\hbar\,\partial_t\hat U = \hat H\hat U$ and $\hat U(t_0,t_0) = \hat 1$. For a time-independent Hamiltonian

$$\hat U(t) = e^{-i\hat Ht/\hbar} = \sum_n e^{-iE_nt/\hbar}|n\rangle\langle n|,$$

using the spectral decomposition of $\hat H$. $\hat U$ is unitary, so probability is conserved. Expanding $|\psi(0)\rangle = \sum_n c_n|n\rangle$ gives $|\psi(t)\rangle = \sum_n c_ne^{-iE_nt/\hbar}|n\rangle$: each energy eigenstate acquires its own phase, and the probabilities $|c_n|^2$ are constant. An energy eigenstate is a **stationary state**, with time-independent expectation values; superpositions vary at the Bohr frequencies $\omega_{mn} = (E_m - E_n)/\hbar$. Time-dependent states with fixed operators constitute the **Schrödinger picture**.

### The Heisenberg picture

Since $\langle\hat A\rangle(t) = \langle\psi(0)|\hat U^\dagger\hat A\hat U|\psi(0)\rangle$, one may fix the state at $|\psi(0)\rangle$ and let operators carry the time dependence:

$$\hat A_H(t) = \hat U^\dagger(t)\,\hat A\,\hat U(t).$$

Differentiating, with $\partial_t\hat U = -i\hat H\hat U/\hbar$ and $\partial_t\hat U^\dagger = i\hat U^\dagger\hat H/\hbar$, gives the **Heisenberg equation of motion**

$$\frac{d\hat A_H}{dt} = \frac{i}{\hbar}[\hat H, \hat A_H] + \left(\frac{\partial\hat A}{\partial t}\right)_H.$$

The second term appears only for explicit time dependence; an observable without it that commutes with $\hat H$ is a **constant of motion**. For $\hat H = \hat p^2/2m + V(\hat x)$, using $[\hat x,\hat p] = i\hbar$,

$$\frac{d\hat x_H}{dt} = \frac{\hat p_H}{m}, \qquad \frac{d\hat p_H}{dt} = -V'(\hat x_H),$$

Hamilton's equations with Poisson brackets replaced by $[\hat A,\hat H]/i\hbar$. Averaging gives **Ehrenfest's theorem**, $m\,d^2\langle\hat x\rangle/dt^2 = -\langle V'(\hat x)\rangle$: a packet's centroid obeys Newton's law exactly when $\langle V'(\hat x)\rangle = V'(\langle\hat x\rangle)$, true for potentials at most quadratic and approximately for narrow packets. For a free particle $\hat x_H(t) = \hat x + \hat pt/m$, and since $[\hat x_H(t), \hat x_H(0)] = -i\hbar t/m \neq 0$, positions at different times are incompatible and a free packet spreads.

### The interaction picture

For $\hat H = \hat H_0 + \hat V(t)$ with $\hat H_0$ solvable, let $\hat U_0 = e^{-i\hat H_0t/\hbar}$ and transfer only the $\hat H_0$ evolution to the operators:

$$|\psi_I(t)\rangle = \hat U_0^\dagger|\psi_S(t)\rangle, \qquad \hat A_I(t) = \hat U_0^\dagger\hat A\hat U_0.$$

Then $i\hbar\,\partial_t|\psi_I\rangle = \hat V_I(t)|\psi_I\rangle$ with $\hat V_I = \hat U_0^\dagger\hat V\hat U_0$: states move only under the perturbation, operators under $\hat H_0$, and the Bohr phases appear explicitly in $\langle m|\hat V_I|n\rangle = V_{mn}e^{i\omega_{mn}t}$. Iterating the integral form $|\psi_I(t)\rangle = |\psi_I(0)\rangle - (i/\hbar)\int_0^t\hat V_I(t')|\psi_I(t')\rangle dt'$ generates the Dyson series, whose first term is time-dependent perturbation theory (Lesson m3-l2). All three pictures give identical expectation values.

| Picture | States | Operators | Natural use |
|---|---|---|---|
| Schrödinger | evolve under $\hat H$ | fixed | wave mechanics, bound states |
| Heisenberg | fixed | evolve under $\hat H$ | oscillators, constants of motion, field theory |
| Interaction | evolve under $\hat V_I$ | evolve under $\hat H_0$ | time-dependent perturbation theory, scattering |

The Heisenberg equation with the uncertainty relation for $\hat B = \hat H$ gives $\tau_A\,\Delta E \geq \hbar/2$, where $\tau_A = \Delta A/|d\langle\hat A\rangle/dt|$ is the time for $\langle\hat A\rangle$ to change by one standard deviation: fast evolution requires an energy spread, the origin of natural linewidths.

## Key Ideas

- **Postulates**: states are rays, observables Hermitian operators, outcomes eigenvalues with probabilities $|\langle a|\psi\rangle|^2$; measurement projects and evolution is unitary.
- **Compatible observables** commute and share eigenkets; a CSCO labels every state uniquely.
- **Generalised uncertainty**: $\Delta A\,\Delta B \geq \tfrac12|\langle[\hat A,\hat B]\rangle|$, a theorem about operators.
- **Density operator** $\hat\rho$ describes mixtures; $\operatorname{Tr}\hat\rho^2 = 1$ only for pure states.
- **Time evolution** is $\hat U(t) = e^{-i\hat Ht/\hbar}$; superpositions oscillate at Bohr frequencies.
- **Heisenberg equation**: $d\hat A_H/dt = (i/\hbar)[\hat H,\hat A_H]$ gives Hamilton's equations and Ehrenfest's theorem; observables commuting with $\hat H$ are conserved.
- **Interaction picture** isolates the perturbation, the gateway to time-dependent perturbation theory.

## Worked Examples

### Example 1 — Measurement on a superposition in an infinite well

An electron in an infinite well of width $L = 1.00$ nm is prepared in $|\psi(0)\rangle = (|1\rangle + |2\rangle)/\sqrt2$. Find the possible energies and their probabilities, $\langle E\rangle$, and the period of oscillation of $|\psi(x,t)|^2$.

**Solution.** With $E_n = n^2h^2/8mL^2$,

$$E_1 = \frac{(6.626\times10^{-34})^2}{8\times9.109\times10^{-31}\times(10^{-9})^2} = 6.02\times10^{-20}\,\text{J} = 0.376\,\text{eV}, \qquad E_2 = 4E_1 = 1.504\,\text{eV}.$$

By the Born rule the result is $E_1$ or $E_2$, each with probability $1/2$. The expectation value $\langle E\rangle = 0.940$ eV is not itself an allowed result. Evolving each term, $|\psi(x,t)|^2 = \tfrac12[\psi_1^2 + \psi_2^2 + 2\psi_1\psi_2\cos(\omega_{21}t)]$ with $\omega_{21} = (E_2 - E_1)/\hbar$, so the period is

$$T = \frac{2\pi\hbar}{E_2 - E_1} = \frac{h}{1.128\,\text{eV}} = \frac{4.136\times10^{-15}\,\text{eV s}}{1.128\,\text{eV}} = 3.67\times10^{-15}\,\text{s}.$$

The density sloshes across the well every half period, 1.8 fs, while the energy probabilities stay at 1/2.

### Example 2 — Spreading of a free Gaussian packet in the Heisenberg picture

Using $\hat x_H(t) = \hat x + \hat pt/m$, find $\Delta x(t)$ for a free electron starting in the Gaussian of Lesson m1-l1 with $a = 0.10$ nm, and evaluate it at $t = 1.0$ fs.

**Solution.** Squaring and averaging in a state with $\langle\hat x\rangle = \langle\hat p\rangle = 0$ and $\langle\hat x\hat p + \hat p\hat x\rangle = 0$ (true for a real Gaussian),

$$(\Delta x)^2(t) = \langle\hat x^2\rangle + \frac{t^2}{m^2}\langle\hat p^2\rangle = (\Delta x_0)^2 + \frac{(\Delta p)^2t^2}{m^2}.$$

From Lesson m1-l1, $\Delta x_0 = a/\sqrt2 = 0.0707$ nm and $\Delta p = \hbar/(a\sqrt2) = 7.46\times10^{-25}$ kg m s$^{-1}$. Then $\Delta p\,t/m = 7.46\times10^{-25}\times10^{-15}/9.109\times10^{-31} = 8.19\times10^{-10}$ m $= 0.819$ nm, and

$$\Delta x(1\,\text{fs}) = \sqrt{0.0707^2 + 0.819^2}\ \text{nm} = 0.822\ \text{nm}.$$

The packet broadens tenfold in a femtosecond, a result obtained without any wavefunction.

### Example 3 — Checking the uncertainty relation in the ground state of a well

Compute $\Delta x\,\Delta p$ for the well ground state $\psi_1(x) = \sqrt{2/L}\sin(\pi x/L)$ and compare with $\hbar/2$.

**Solution.** By symmetry $\langle\hat x\rangle = L/2$, $\langle\hat p\rangle = 0$, and the standard integral is $\langle\hat x^2\rangle = L^2\left(\tfrac13 - \tfrac1{2\pi^2}\right)$, so

$$(\Delta x)^2 = L^2\left(\frac13 - \frac1{2\pi^2} - \frac14\right) = L^2\left(\frac1{12} - \frac1{2\pi^2}\right) = L^2(0.08333 - 0.05066) = 0.03267L^2,$$

giving $\Delta x = 0.1808L$. Since $\hat p^2 = 2m\hat H$ in the well, $\langle\hat p^2\rangle = 2mE_1 = \pi^2\hbar^2/L^2$ and $\Delta p = \pi\hbar/L$. Hence

$$\Delta x\,\Delta p = 0.1808\pi\,\hbar = 0.568\,\hbar > 0.500\,\hbar.$$

The bound holds but is not saturated, because the ground state is not Gaussian.

## Common Misconceptions

- **"The expectation value is the most likely result of a measurement."** It is the average over many identically prepared systems; in Example 1 the value 0.940 eV can never be observed.
- **"The uncertainty principle is caused by the measuring apparatus disturbing the particle."** The relation follows from non-commuting operators and holds for the state itself, before any measurement.
- **"A mixed state is the same as a superposition."** A superposition $(|\uparrow\rangle + |\downarrow\rangle)/\sqrt2$ is a pure state with definite spin along $x$; the mixture $\hat\rho = \tfrac12\hat 1$ has none along any axis, and the two give different $\langle\hat S_x\rangle$.
- **"In the Heisenberg picture the physics is different."** The pictures are related by unitary transformations and predict identical probabilities; only the bookkeeping differs.
- **"Stationary states do not change in time."** The ket acquires the phase $e^{-iEt/\hbar}$; only expectation values and densities are constant.

## Connections

- The Heisenberg equation $d\hat A/dt = (i/\hbar)[\hat H,\hat A]$ is the quantum image of $dA/dt = \{A, H\}$ in Hamiltonian mechanics; Dirac's correspondence $\{A,B\} \to [\hat A,\hat B]/i\hbar$ is the formal route from classical to quantum theory.
- The uncertainty proof uses the Cauchy–Schwarz inequality of linear-algebra Lesson m2-l2 and real-analysis.
- The Bohr frequencies $\omega_{mn}$ are the spectral-line frequencies of atomic-and-molecular-physics Lesson m1-l3; the energy–time relation gives their natural widths.
- The two-level dynamics of Example 1 generalises to the Rabi oscillations of a driven two-level system, simulated in advanced-quantum-mechanics-lab Lesson m1-l4.
- Density operators describe thermal ensembles, $\hat\rho = e^{-\hat H/k_BT}/Z$, in thermal-physics-and-statistical-mechanics, and partially polarised light (Stokes parameters) in waves-and-optics.

## Quick Check

1. State the Born rule and projection postulate. What is the state just after measuring $\hat A$ on $|\psi\rangle$ and finding a degenerate eigenvalue $a$?
2. Show that $\hat U(t) = e^{-i\hat Ht/\hbar}$ is unitary and that $\langle\psi(t)|\psi(t)\rangle$ is constant.
3. Why must observables commute to be simultaneously measurable with arbitrary precision?
4. Derive the Heisenberg equations for $\hat x$ and $\hat p$ in a uniform field $V = -Fx$, and show that $\langle\hat x\rangle(t)$ follows the classical parabola exactly.
5. Write down $\hat V_I(t)$ for a perturbation $\hat V$ between two levels of $\hat H_0$ and identify the frequency that appears.

## Takeaway

- The postulates reduce quantum mechanics to linear algebra plus the Born rule.
- Non-commuting observables cannot share eigenstates; the generalised uncertainty relation quantifies the trade-off.
- The evolution operator $e^{-i\hat Ht/\hbar}$ makes energy eigenstates stationary and superpositions oscillate at Bohr frequencies.
- The Heisenberg picture gives operator equations of motion that mirror classical mechanics and yield Ehrenfest's theorem.
- The interaction picture separates known from unknown dynamics, setting up the perturbative methods of Module 3.
