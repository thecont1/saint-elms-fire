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
lessonId: advanced-quantum-mechanics-m1-l3
lessonName: The Harmonic Oscillator by Ladder Operators and Coherent States
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - advanced-quantum-mechanics-m1-l2
  - introduction-to-quantum-mechanics-m2-l3
learningObjectives:
  - Construct the ladder operators $\hat a$, $\hat a^\dagger$ from $\hat x$ and $\hat p$, verify $[\hat a,\hat a^\dagger] = 1$ and derive the spectrum $E_n = (n+\tfrac12)\hbar\omega$ algebraically.
  - Evaluate oscillator matrix elements such as $\langle n'|\hat x|n\rangle$ and $\langle n|\hat x^4|n\rangle$ using ladder-operator algebra and state the resulting selection rule.
  - Solve the Heisenberg equations of motion for $\hat a(t)$ and $\hat x(t)$.
  - Define coherent states, derive their Poisson number distribution and show that their centroids follow the classical trajectory with constant minimum uncertainty.
concepts:
  - Ladder operators
  - Number operator
  - Zero-point energy
  - Oscillator selection rule
  - Heisenberg-picture oscillator
  - Coherent state
  - Poisson number distribution
tags:
  - physics
  - advanced-quantum-mechanics
  - harmonic-oscillator
  - coherent-states
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# The Harmonic Oscillator by Ladder Operators and Coherent States

## Overview

The harmonic oscillator was solved in introductory quantum mechanics by a power-series attack on the Schrödinger equation, which produced Hermite polynomials and the levels $E_n = (n+\tfrac12)\hbar\omega$ after considerable labour. Dirac's algebraic method obtains the same spectrum from the single commutator $[\hat x,\hat p] = i\hbar$ without solving any differential equation. One factorises the Hamiltonian into a lowering operator $\hat a$ and a raising operator $\hat a^\dagger$, shows that they step between eigenstates in units of $\hbar\omega$, and uses the positivity of the norm to prove that the ladder has a bottom rung. Matrix elements of $\hat x$ and $\hat p$ then follow in one line, which makes the oscillator the workhorse of perturbation theory, molecular vibrations, phonons and the quantised electromagnetic field. The lesson closes with the Heisenberg-picture oscillator and with coherent states, the eigenstates of $\hat a$, which are the most classical states quantum mechanics allows and describe laser light.

## Learning Path

- **What you should already know**: the oscillator potential and its Hermite-function solutions (introduction-to-quantum-mechanics Lesson m2-l3); Dirac notation, matrix elements and the Heisenberg equation of motion (Lessons m1-l1 and m1-l2).
- **What this lesson adds**: the ladder operators and number operator, the algebraic derivation of the spectrum, matrix elements and the $\Delta n = \pm1$ selection rule, the Heisenberg-picture solution, and coherent states.
- **What later lessons this will unlock**: the identical ladder logic for angular momentum (Lesson m2-l1), the exchange interaction in an oscillator (Lesson m2-l3), the anharmonic oscillator as a perturbation problem (Lesson m3-l1), and dipole selection rules (Lesson m3-l2).

## Core Explanation

### Factorising the Hamiltonian

The oscillator Hamiltonian is $\hat H = \hat p^2/2m + \tfrac12 m\omega^2\hat x^2$. Define the dimensionless operators

$$\hat a = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat x + \frac{i\hat p}{m\omega}\right), \qquad \hat a^\dagger = \sqrt{\frac{m\omega}{2\hbar}}\left(\hat x - \frac{i\hat p}{m\omega}\right).$$

They are adjoints of each other but not Hermitian, so they are not observables. Their commutator follows from $[\hat x,\hat p] = i\hbar$:

$$[\hat a,\hat a^\dagger] = \frac{m\omega}{2\hbar}\left(-\frac{i}{m\omega}[\hat x,\hat p] + \frac{i}{m\omega}[\hat p,\hat x]\right) = \frac{m\omega}{2\hbar}\cdot\frac{2\hbar}{m\omega} = 1.$$

Multiplying out, $\hat a^\dagger\hat a = \frac{m\omega}{2\hbar}\left(\hat x^2 + \frac{\hat p^2}{m^2\omega^2} + \frac{i}{m\omega}[\hat x,\hat p]\right) = \frac{\hat H}{\hbar\omega} - \frac12$, so

$$\hat H = \hbar\omega\left(\hat N + \tfrac12\right), \qquad \hat N = \hat a^\dagger\hat a.$$

The **number operator** $\hat N$ is Hermitian and commutes with $\hat H$; diagonalising one diagonalises the other. Inverting the definitions gives the relations used constantly below,

$$\hat x = \sqrt{\frac{\hbar}{2m\omega}}\left(\hat a + \hat a^\dagger\right), \qquad \hat p = i\sqrt{\frac{m\hbar\omega}{2}}\left(\hat a^\dagger - \hat a\right).$$

### The ladder and its bottom rung

From $[\hat a,\hat a^\dagger] = 1$ one finds $[\hat N,\hat a] = -\hat a$ and $[\hat N,\hat a^\dagger] = \hat a^\dagger$. If $\hat N|\nu\rangle = \nu|\nu\rangle$, then

$$\hat N\hat a|\nu\rangle = (\hat a\hat N - \hat a)|\nu\rangle = (\nu - 1)\,\hat a|\nu\rangle, \qquad \hat N\hat a^\dagger|\nu\rangle = (\nu + 1)\,\hat a^\dagger|\nu\rangle.$$

So $\hat a$ lowers the eigenvalue by one and $\hat a^\dagger$ raises it by one: they are **ladder operators**. The norm of the lowered state is $\|\hat a|\nu\rangle\|^2 = \langle\nu|\hat a^\dagger\hat a|\nu\rangle = \nu$, which cannot be negative. Repeated lowering would eventually produce a negative eigenvalue unless the sequence terminates, and it can only terminate on a state with $\hat a|0\rangle = 0$, for which $\nu = 0$. Hence the eigenvalues of $\hat N$ are the non-negative integers $n = 0, 1, 2, \ldots$ and

$$E_n = \left(n + \tfrac12\right)\hbar\omega.$$

The lowest energy $\tfrac12\hbar\omega$ is the **zero-point energy**, forced by the uncertainty relation. Choosing phases real and positive, the normalised ladder relations are

$$\hat a|n\rangle = \sqrt n\,|n-1\rangle, \qquad \hat a^\dagger|n\rangle = \sqrt{n+1}\,|n+1\rangle, \qquad |n\rangle = \frac{(\hat a^\dagger)^n}{\sqrt{n!}}|0\rangle.$$

The ground-state wavefunction follows from $\langle x|\hat a|0\rangle = 0$, a first-order equation $\left(x + \frac{\hbar}{m\omega}\frac{d}{dx}\right)\psi_0 = 0$ with solution

$$\psi_0(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4}e^{-m\omega x^2/2\hbar},$$

the Gaussian of Lesson m1-l1 with $a^2 = \hbar/m\omega$. Acting with $\hat a^\dagger$ in the position representation generates the Hermite functions, so the algebraic and analytic solutions agree.

### Matrix elements and the selection rule

Because $\hat x \propto \hat a + \hat a^\dagger$,

$$\langle n'|\hat x|n\rangle = \sqrt{\frac{\hbar}{2m\omega}}\left(\sqrt n\,\delta_{n',n-1} + \sqrt{n+1}\,\delta_{n',n+1}\right).$$

The position operator connects only neighbouring levels. Since the electric-dipole coupling to light is proportional to $\hat x$, a harmonic oscillator absorbs or emits only at $\omega$, with the **selection rule** $\Delta n = \pm1$; this is the origin of the single fundamental band in the vibrational spectrum of a diatomic molecule. Higher powers are handled the same way. Writing $\hat x^2 = \frac{\hbar}{2m\omega}\left(\hat a^2 + \hat a^{\dagger2} + 2\hat N + 1\right)$ gives at once

$$\langle n|\hat x^2|n\rangle = \frac{\hbar}{2m\omega}(2n+1), \qquad \langle n|\hat p^2|n\rangle = \frac{m\hbar\omega}{2}(2n+1),$$

so $\langle\hat T\rangle = \langle\hat V\rangle = \tfrac12E_n$ (the virial theorem) and $\Delta x\,\Delta p = (n + \tfrac12)\hbar$, saturating the bound only for $n = 0$.

### The Heisenberg-picture oscillator

The Heisenberg equation of Lesson m1-l2 gives $d\hat a_H/dt = (i/\hbar)[\hat H,\hat a_H] = i\omega[\hat N,\hat a_H] = -i\omega\hat a_H$, so

$$\hat a_H(t) = \hat a\,e^{-i\omega t}, \qquad \hat a_H^\dagger(t) = \hat a^\dagger e^{i\omega t}.$$

Substituting into $\hat x_H = \sqrt{\hbar/2m\omega}\,(\hat a_H + \hat a_H^\dagger)$ and re-expressing in $\hat x$ and $\hat p$,

$$\hat x_H(t) = \hat x\cos\omega t + \frac{\hat p}{m\omega}\sin\omega t, \qquad \hat p_H(t) = \hat p\cos\omega t - m\omega\hat x\sin\omega t,$$

exactly the classical solution with operators in place of initial conditions. Because the potential is quadratic, Ehrenfest's theorem is exact and every wave packet's centroid oscillates classically.

### Coherent states

Energy eigenstates have $\langle\hat x\rangle = 0$ at all times, so they look nothing like a swinging pendulum. The states that do are the **coherent states**, eigenstates of the non-Hermitian lowering operator,

$$\hat a|\alpha\rangle = \alpha|\alpha\rangle, \qquad \alpha\in\mathbb C.$$

Expanding $|\alpha\rangle = \sum_n c_n|n\rangle$ and using $\hat a|n\rangle = \sqrt n|n-1\rangle$ gives $c_n = (\alpha/\sqrt n)\,c_{n-1}$, hence

$$|\alpha\rangle = e^{-|\alpha|^2/2}\sum_{n=0}^\infty\frac{\alpha^n}{\sqrt{n!}}|n\rangle = e^{-|\alpha|^2/2}e^{\alpha\hat a^\dagger}|0\rangle.$$

The probability of finding $n$ quanta is the **Poisson distribution** $P(n) = e^{-|\alpha|^2}|\alpha|^{2n}/n!$ with mean $\langle\hat N\rangle = |\alpha|^2$ and spread $\Delta N = |\alpha|$, so the relative fluctuation $1/|\alpha|$ shrinks for large amplitudes. Time evolution multiplies each term by $e^{-i(n+1/2)\omega t}$, which simply rotates the label:

$$|\alpha(t)\rangle = e^{-i\omega t/2}\,|\alpha e^{-i\omega t}\rangle.$$

A coherent state therefore stays coherent. Its expectation values are

$$\langle\hat x\rangle(t) = \sqrt{\frac{2\hbar}{m\omega}}\,|\alpha|\cos(\omega t - \varphi), \qquad \Delta x = \sqrt{\frac{\hbar}{2m\omega}}, \qquad \Delta p = \sqrt{\frac{m\hbar\omega}{2}},$$

with $\alpha = |\alpha|e^{i\varphi}$. The packet is the ground-state Gaussian displaced to the classical trajectory, oscillating without spreading and with $\Delta x\,\Delta p = \hbar/2$ at every instant. Formally $|\alpha\rangle = \hat D(\alpha)|0\rangle$ with the unitary displacement operator $\hat D(\alpha) = \exp(\alpha\hat a^\dagger - \alpha^*\hat a)$. For the electromagnetic field, where each mode is an oscillator and $n$ counts photons, a coherent state is the output of an ideal single-mode laser, and the Poisson statistics are measured directly in photon-counting experiments.

The following short script builds $\hat a$ in a truncated number basis and checks the spectrum; the last diagonal entry of the commutator is the truncation artefact $1 - N$, a useful warning when oscillator matrices are used numerically, as in advanced-quantum-mechanics-lab Lesson m1-l1.

```python
import numpy as np
N = 8
a = np.diag(np.sqrt(np.arange(1, N)), 1)       # <n-1|a|n> = sqrt(n)
x, p = (a + a.T)/np.sqrt(2), 1j*(a.T - a)/np.sqrt(2)   # hbar = m = omega = 1
H = (p @ p + x @ x)/2
print(np.round(np.linalg.eigvalsh(H), 3))      # 0.5 ... 6.5 plus a spurious 3.5
print(np.diag(a @ a.T - a.T @ a))              # 1, 1, ..., 1, -7
```

## Key Ideas

- **Ladder operators** $\hat a,\hat a^\dagger$ satisfy $[\hat a,\hat a^\dagger] = 1$ and factorise $\hat H = \hbar\omega(\hat N + \tfrac12)$.
- **Spectrum from algebra**: positivity of $\|\hat a|n\rangle\|^2 = n$ forces a lowest state $\hat a|0\rangle = 0$ and integer $n$, giving $E_n = (n + \tfrac12)\hbar\omega$.
- **Matrix elements** follow from $\hat x \propto \hat a + \hat a^\dagger$; dipole transitions obey $\Delta n = \pm1$.
- **Zero-point energy** $\tfrac12\hbar\omega$ and $\Delta x\,\Delta p = \hbar/2$ in the ground state reflect the uncertainty relation.
- **Heisenberg picture**: $\hat a_H(t) = \hat a e^{-i\omega t}$ and $\hat x_H(t)$ obeys the classical equation exactly.
- **Coherent states** $\hat a|\alpha\rangle = \alpha|\alpha\rangle$ have Poisson statistics, follow the classical orbit and keep minimum uncertainty.

## Worked Examples

### Example 1 — Zero-point motion of carbon monoxide

The CO fundamental lies at $\tilde\nu = 2143$ cm$^{-1}$. Treating the bond as a harmonic oscillator with reduced mass $\mu$, find $\hbar\omega$, the zero-point energy and the root-mean-square bond-length fluctuation in the ground state.

**Solution.** $\hbar\omega = hc\tilde\nu = (1.2398\times10^{-4}\ \text{eV cm})(2143\ \text{cm}^{-1}) = 0.2657$ eV, so the zero-point energy is $0.1328$ eV. The angular frequency is $\omega = 2\pi c\tilde\nu = 4.037\times10^{14}$ s$^{-1}$. The reduced mass is $\mu = (12.000\times15.995)/27.995$ u $= 6.856$ u $= 1.1385\times10^{-26}$ kg. From $\langle 0|\hat x^2|0\rangle = \hbar/2\mu\omega$,

$$\Delta x = \sqrt{\frac{1.0546\times10^{-34}}{2\times1.1385\times10^{-26}\times4.037\times10^{14}}}\ \text{m} = 3.39\times10^{-12}\ \text{m}.$$

The zero-point spread of 3.4 pm is about 3% of the 113 pm bond length, which justifies the harmonic approximation for low-lying levels.

### Example 2 — The expectation value $\langle 0|\hat x^4|0\rangle$

Use ladder operators to evaluate $\langle 0|\hat x^4|0\rangle$ and hence the first-order energy shift of the ground state due to a perturbation $\lambda\hat x^4$.

**Solution.** With $c = \hbar/2m\omega$, $\hat x^2|0\rangle = c(\hat a^2 + \hat a^{\dagger2} + 2\hat N + 1)|0\rangle = c\left(|0\rangle + \sqrt2|2\rangle\right)$, using $\hat a^{\dagger2}|0\rangle = \sqrt1\sqrt2\,|2\rangle$. Since $\hat x^2$ is Hermitian,

$$\langle 0|\hat x^4|0\rangle = \|\hat x^2|0\rangle\|^2 = c^2(1 + 2) = 3\left(\frac{\hbar}{2m\omega}\right)^2.$$

The first-order shift is therefore $\Delta E_0 = 3\lambda(\hbar/2m\omega)^2$. In units $\hbar = m = \omega = 1$ with $\lambda = 0.1$ this is $0.075$, raising $E_0$ from $0.500$ to $0.575$; Lesson m3-l1 compares this with exact diagonalisation. No Hermite-polynomial integral was needed.

### Example 3 — Photon statistics of a coherent state

A single-mode field is in the coherent state $|\alpha\rangle$ with $\alpha = 3$. Find the mean photon number, the probability of exactly the mean number, the spread $\Delta N$, and the mean energy in units of $\hbar\omega$.

**Solution.** $\langle\hat N\rangle = |\alpha|^2 = 9$. The probability of $n = 9$ is

$$P(9) = e^{-9}\frac{9^9}{9!} = 1.234\times10^{-4}\times\frac{387\,420\,489}{362\,880} = 0.132.$$

Even the most probable photon number occurs only 13% of the time. The spread is $\Delta N = |\alpha| = 3$, a relative fluctuation of 33%. The mean energy is $\langle\hat H\rangle = \hbar\omega(|\alpha|^2 + \tfrac12) = 9.5\,\hbar\omega$. The centroid amplitude is $\sqrt{2\hbar/m\omega}\times3 = 6\Delta x_0$, where $\Delta x_0 = \sqrt{\hbar/2m\omega}$ is the unchanging packet width.

## Common Misconceptions

- **"$\hat a$ and $\hat a^\dagger$ are observables."** They are not Hermitian and have no real-valued measurement outcomes; the observables are $\hat N$, $\hat x$, $\hat p$ and $\hat H$ built from them.
- **"The zero-point energy can be removed by redefining the zero of energy."** For one oscillator the constant is unobservable, but its dependence on $\omega$ is physical: it appears in isotope shifts of molecular dissociation energies and in the Casimir effect.
- **"A coherent state has a definite number of quanta."** It is a superposition of all $n$ with Poisson weights; only its phase and amplitude are well defined in the classical limit.
- **"The ladder could continue downward to negative $n$."** The norm $\|\hat a|n\rangle\|^2 = n$ would become negative, which is impossible in a Hilbert space; the ladder must stop at $\hat a|0\rangle = 0$.
- **"Truncated matrices of $\hat a$ obey $[\hat a,\hat a^\dagger] = 1$."** No finite matrices can, since the trace of a commutator vanishes; truncation always spoils the last row, as the script shows.

## Connections

- The oscillator ODE and its normal-mode solution are those of differential-equations Lesson m2-l2 and mechanics; the quantum treatment replaces initial conditions by operators.
- Quantising each normal mode of a crystal lattice with $\hat a,\hat a^\dagger$ gives phonons and the Einstein and Debye heat capacities of solid-state-physics Lessons m2-l1 and m2-l2.
- The $\Delta n = \pm1$ rule and zero-point energy underlie the vibrational spectra of diatomics in atomic-and-molecular-physics Lesson m3-l2.
- Each mode of the electromagnetic field is an oscillator; coherent states describe laser light (atomic-and-molecular-physics Lesson m2-l2) and the Poisson counting statistics used in waves-and-optics.
- Truncated oscillator bases are standard in numerical diagonalisation (advanced-quantum-mechanics-lab Lesson m1-l1 and numerical-methods), with the truncation artefact shown above as the main pitfall.

## Quick Check

1. Verify $[\hat N,\hat a^\dagger] = \hat a^\dagger$ from $[\hat a,\hat a^\dagger] = 1$.
2. Compute $\langle 2|\hat x|3\rangle$ and $\langle 3|\hat x^2|1\rangle$ in terms of $\hbar/2m\omega$.
3. Explain why the eigenvalues of $\hat N$ cannot be non-integer.
4. Show that $\langle\alpha|\hat p|\alpha\rangle = \sqrt{2m\hbar\omega}\,\operatorname{Im}\alpha$.
5. A coherent state has $\langle\hat N\rangle = 4$. What is the probability of finding zero quanta?

## Takeaway

- The oscillator spectrum follows from $[\hat x,\hat p] = i\hbar$ alone, via ladder operators and the positivity of the norm.
- Ladder algebra turns matrix elements into bookkeeping and exposes the $\Delta n = \pm1$ selection rule.
- In the Heisenberg picture the operators obey the classical equations of motion exactly.
- Coherent states are displaced ground states with Poisson statistics, the quantum description of classical oscillation and laser light.
- The same raising-and-lowering logic will deliver the angular-momentum spectrum in Lesson m2-l1.
