***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: advanced-quantum-mechanics
courseName: Advanced Quantum Mechanics (Physics Option C)
moduleId: advanced-quantum-mechanics-module-3
moduleName: Approximation Methods and Scattering
lessonId: advanced-quantum-mechanics-m3-l1
lessonName: Time-Independent Perturbation Theory and the Variational Method
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 7
prerequisites:
  - advanced-quantum-mechanics-m2-l3
  - atomic-and-molecular-physics-m1-l2
learningObjectives:
  - Derive the first- and second-order energy corrections $E_n^{(1)} = \langle n|\hat H'|n\rangle$ and $E_n^{(2)} = \sum_{k\neq n}|H'_{kn}|^2/(E_n - E_k)$ and apply them to the anharmonic oscillator.
  - Apply degenerate perturbation theory to the linear Stark effect in the $n = 2$ level of hydrogen.
  - Derive the Landé $g$-factor for the weak-field (anomalous) Zeeman effect from Clebsch–Gordan coefficients and predict the splitting of the sodium D lines.
  - Prove the variational principle and use it to bound the ground-state energies of hydrogen with a Gaussian trial function and of helium with an effective charge.
concepts:
  - Non-degenerate perturbation theory
  - Degenerate perturbation theory
  - Linear Stark effect
  - Anomalous Zeeman effect
  - Landé g-factor
  - Variational principle
  - Effective nuclear charge
tags:
  - physics
  - advanced-quantum-mechanics
  - perturbation-theory
  - variational-method
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Time-Independent Perturbation Theory and the Variational Method

## Overview

Almost no realistic Hamiltonian can be diagonalised exactly. The two workhorse approximations for stationary states are developed in this lesson. Perturbation theory applies when $\hat H = \hat H_0 + \hat H'$ with $\hat H_0$ solved and $\hat H'$ small; the corrections are expressed through the matrix elements $H'_{kn} = \langle k|\hat H'|n\rangle$ of Lesson m1-l1, which is why oscillator and angular-momentum algebra from earlier lessons makes them easy to compute. When the unperturbed level is degenerate, the perturbation must first be diagonalised within the degenerate subspace, and the linear Stark effect in hydrogen and the anomalous Zeeman effect are the classic examples. The variational method needs no small parameter: any trial state gives an upper bound to the ground-state energy, and minimising over parameters gives remarkably good estimates, as helium shows.

## Learning Path

- **What you should already know**: matrix representations (Lesson m1-l1), oscillator ladder algebra (Lesson m1-l3), Clebsch–Gordan coefficients for $l\otimes\tfrac12$ (Lesson m2-l2), the first-order helium estimate (Lesson m2-l3), and the vector-model Zeeman effect (atomic-and-molecular-physics Lesson m1-l2).
- **What this lesson adds**: the Rayleigh–Schrödinger series to second order, degenerate perturbation theory, the linear Stark effect, the Landé $g$-factor from first principles, and the variational principle.
- **What later lessons this will unlock**: the semiclassical WKB method and time-dependent perturbation theory (Lesson m3-l2), and the Born approximation as first-order perturbation theory for scattering (Lesson m3-l3).

## Core Explanation

### Non-degenerate perturbation theory

Write $\hat H = \hat H_0 + \lambda\hat H'$ with known $\hat H_0|n^{(0)}\rangle = E_n^{(0)}|n^{(0)}\rangle$, and expand $E_n = E_n^{(0)} + \lambda E_n^{(1)} + \lambda^2E_n^{(2)} + \cdots$ and $|n\rangle = |n^{(0)}\rangle + \lambda|n^{(1)}\rangle + \cdots$. Substituting into $\hat H|n\rangle = E_n|n\rangle$ and collecting powers of $\lambda$, the first-order equation is $(\hat H_0 - E_n^{(0)})|n^{(1)}\rangle = (E_n^{(1)} - \hat H')|n^{(0)}\rangle$. Projecting onto $\langle n^{(0)}|$ kills the left side, so

$$E_n^{(1)} = \langle n^{(0)}|\hat H'|n^{(0)}\rangle.$$

Projecting onto $\langle k^{(0)}|$ with $k\neq n$ gives the state correction, and the second-order equation then gives the second-order energy:

$$|n^{(1)}\rangle = \sum_{k\neq n}\frac{H'_{kn}}{E_n^{(0)} - E_k^{(0)}}|k^{(0)}\rangle, \qquad E_n^{(2)} = \sum_{k\neq n}\frac{|H'_{kn}|^2}{E_n^{(0)} - E_k^{(0)}}.$$

The series is useful when $|H'_{kn}| \ll |E_n^{(0)} - E_k^{(0)}|$. Two general consequences: the second-order correction to the ground state is always negative, and coupled levels repel. The first-order energy is just the expectation value of $\hat H'$, which is exactly what was computed for helium in Lesson m2-l3.

For the anharmonic oscillator $\hat H' = \lambda\hat x^4$, ladder algebra gives $\langle n|\hat x^4|n\rangle = (\hbar/2m\omega)^2(6n^2 + 6n + 3)$; the ground state also couples to $|2\rangle$ and $|4\rangle$, and in units $\hbar = m = \omega = 1$ the series is $E_0 = \tfrac12 + \tfrac34\lambda - \tfrac{21}{8}\lambda^2 + \cdots$. The script below diagonalises the truncated matrix, the method of advanced-quantum-mechanics-lab Lesson m1-l1, and compares.

```python
import numpy as np
N, lam = 60, 0.1
a = np.diag(np.sqrt(np.arange(1, N)), 1)        # hbar = m = omega = 1
x = (a + a.T)/np.sqrt(2)
H = np.diag(np.arange(N) + 0.5) + lam*np.linalg.matrix_power(x, 4)
print(np.linalg.eigvalsh(H)[0])                   # 0.55915 (converged)
print(0.5 + 0.75*lam, 0.5 + 0.75*lam - 21/8*lam**2)   # 0.575, 0.54875
```

First order overshoots by 0.016 and second order undershoots by 0.010: the perturbation series for $\hat x^4$ is asymptotic, improving at first and eventually diverging.

### Degenerate perturbation theory

If $E_n^{(0)}$ is $g$-fold degenerate, the denominators above vanish and the method fails. The cure is to choose the zeroth-order states correctly. Within the degenerate subspace, form the $g\times g$ matrix $W_{ij} = \langle n_i^{(0)}|\hat H'|n_j^{(0)}\rangle$. Its eigenvalues are the first-order shifts, and its eigenvectors are the **good** zeroth-order states, those that evolve continuously into the exact states as $\lambda\to0$. In practice one looks for an operator $\hat A$ commuting with both $\hat H_0$ and $\hat H'$; its eigenstates are already good and $W$ is diagonal in them.

### The linear Stark effect in hydrogen $n = 2$

An electron in a uniform field $\mathcal E\hat{\mathbf z}$ has $\hat H' = e\mathcal E\hat z$. The level $n = 2$ is fourfold degenerate (ignoring spin and fine structure): $|200\rangle, |210\rangle, |21,\pm1\rangle$. Since $\hat z$ is odd under parity and commutes with $\hat L_z$, its matrix elements vanish unless $\Delta l = \pm1$ and $\Delta m = 0$. The only non-zero element is

$$\langle 200|\hat z|210\rangle = \frac{1}{32\pi a_0^3}\int_0^\infty\left(2 - \frac r{a_0}\right)\frac{r^4}{a_0}e^{-r/a_0}dr\int\cos^2\theta\,d\Omega = \frac{1}{32\pi a_0^3}\left(-72a_0^4\right)\frac{4\pi}{3} = -3a_0.$$

The matrix $W$ in the subspace $\{|200\rangle, |210\rangle\}$ is $\begin{pmatrix}0 & -3e\mathcal Ea_0\\ -3e\mathcal Ea_0 & 0\end{pmatrix}$, with eigenvalues $\pm3e\mathcal Ea_0$ and good states $(|200\rangle \mp |210\rangle)/\sqrt2$. The $m = \pm1$ states are unshifted. The shift is linear in $\mathcal E$ because the degenerate mixtures of $s$ and $p$ possess a permanent dipole moment of magnitude $3ea_0$. The ground state, non-degenerate and of definite parity, has no first-order shift; its quadratic shift $-\tfrac12\alpha\mathcal E^2$ involves the polarisability $\alpha = \tfrac92(4\pi\varepsilon_0)a_0^3$.

### The anomalous Zeeman effect

In a magnetic field $B\hat{\mathbf z}$ the electron has $\hat H_Z = (\mu_B B/\hbar)(\hat L_z + 2\hat S_z)$, with $g_s = 2$ and $\mu_B = e\hbar/2m_e = 5.788\times10^{-5}$ eV T$^{-1}$. In a **weak** field, $\hat H_Z$ is small compared with the fine-structure splitting, so the unperturbed states are the coupled states $|l, j, m_j\rangle$ of Lesson m2-l2, each $(2j+1)$-fold degenerate. Writing $\hat L_z + 2\hat S_z = \hat J_z + \hat S_z$, both terms conserve $m_j$, and within a given $j$ there is only one state per $m_j$, so $W$ is already diagonal. Using the Clebsch–Gordan coefficients, $\langle\hat S_z\rangle = \pm m_j\hbar/(2l + 1)$ for $j = l\pm\tfrac12$ (Lesson m2-l2, Example 2). Hence

$$E_Z^{(1)} = g_J\,\mu_B B\,m_j, \qquad g_J = 1 \pm \frac{1}{2l + 1},$$

which agrees with the Landé formula $g_J = 1 + [j(j+1) + s(s+1) - l(l+1)]/[2j(j+1)]$. Because $g_J$ differs from level to level, the upper and lower states of a line split by different amounts and a line breaks into more than three components. That is the anomalous Zeeman effect; the normal three-line pattern requires $S = 0$. For fields strong enough that $\mu_BB$ exceeds the fine structure, the uncoupled basis becomes good instead (the Paschen–Back effect).

### The variational method

For any normalised $|\psi\rangle$, expand in the exact eigenstates, $|\psi\rangle = \sum_nc_n|n\rangle$:

$$\langle\psi|\hat H|\psi\rangle = \sum_n|c_n|^2E_n \geq E_0\sum_n|c_n|^2 = E_0.$$

This is the **variational principle**: every trial state gives an upper bound on the ground-state energy, with equality only for the true ground state. Choosing a family $\psi(\mathbf r;\beta)$ and minimising $E(\beta) = \langle\hat H\rangle$ gives the best bound in that family. An error of order $\epsilon$ in the state produces an error of order $\epsilon^2$ in the energy, which is why crude trial functions give good energies.

For helium, take both electrons in hydrogen-like $1s$ orbitals with an adjustable charge $\zeta$, representing screening of the nucleus by the other electron. In hartree units ($E_h = 27.21$ eV) the kinetic energy is $\zeta^2$, the nuclear attraction $-2Z\zeta$, and the repulsion $\tfrac58\zeta$, so

$$E(\zeta) = \zeta^2 - 2Z\zeta + \tfrac58\zeta, \qquad \zeta_{\min} = Z - \tfrac5{16} = \tfrac{27}{16}, \qquad E_{\min} = -\left(\tfrac{27}{16}\right)^2E_h = -77.5\ \text{eV}.$$

The bound lies above the measured $-79.0$ eV, as it must, and improves the first-order estimate of $-74.8$ eV. The optimal $\zeta = 1.69$ quantifies screening: each electron sees about 0.31 of the other's charge between itself and the nucleus.

## Key Ideas

- **First-order energy** is the expectation value of $\hat H'$ in the unperturbed state; the first-order state mixes in other levels weighted by $H'_{kn}/(E_n - E_k)$.
- **Second-order energy** $\sum|H'_{kn}|^2/(E_n - E_k)$ is negative for the ground state; coupled levels repel.
- **Degenerate perturbation theory** diagonalises $\hat H'$ inside the degenerate subspace; symmetry operators identify the good states.
- **Linear Stark effect**: hydrogen $n = 2$ splits into $\pm3e\mathcal Ea_0$ and $0$ (twice), from $2s$–$2p$ mixing.
- **Anomalous Zeeman effect**: weak-field shifts $g_J\mu_BBm_j$ with $g_J = 1 \pm 1/(2l + 1)$.
- **Variational principle**: $\langle\hat H\rangle \geq E_0$ for any trial state; helium with $\zeta = 27/16$ gives $-77.5$ eV.

## Worked Examples

### Example 1 — Stark splitting of hydrogen $n = 2$

Find the first-order Stark shifts of hydrogen $n = 2$ in a field of $1.0\times10^7$ V m$^{-1}$ and compare with the $n = 2$ fine-structure splitting of $4.5\times10^{-5}$ eV.

**Solution.** $3e\mathcal Ea_0 = 3\times(1.0\times10^7\ \text{V m}^{-1})\times(5.29\times10^{-11}\ \text{m})\times e = 1.59\times10^{-3}$ eV. The level splits into $+1.59$ meV, $0$ (the two $m = \pm1$ states) and $-1.59$ meV. The shift is 35 times the fine structure, so neglecting fine structure in the degenerate subspace is justified. The Lyman-$\alpha$ line therefore shows components displaced by $\pm1.59$ meV, about $\pm0.019$ nm at 121.6 nm.

### Example 2 — Anomalous Zeeman pattern of the sodium D lines

Find the Zeeman components of the D$_1$ line ($3p\,^2P_{1/2}\to3s\,^2S_{1/2}$) in a field of 1.00 T, and the number of components of D$_2$.

**Solution.** For $^2S_{1/2}$ ($l = 0$), $g = 2$; for $^2P_{1/2}$ ($l = 1$, $j = l - \tfrac12$), $g = 1 - \tfrac13 = \tfrac23$; for $^2P_{3/2}$, $g = \tfrac43$. The photon energy shift is $\mu_BB(g'm' - gm)$ with $\Delta m = 0, \pm1$. For D$_1$:

| $m'\to m$ | $\tfrac12\to\tfrac12$ | $\tfrac12\to-\tfrac12$ | $-\tfrac12\to\tfrac12$ | $-\tfrac12\to-\tfrac12$ |
|---|---|---|---|---|
| $g'm' - gm$ | $-\tfrac23$ | $+\tfrac43$ | $-\tfrac43$ | $+\tfrac23$ |

With $\mu_BB = 5.79\times10^{-5}$ eV, the four components lie at $\pm3.86\times10^{-5}$ eV and $\pm7.72\times10^{-5}$ eV. For D$_2$ the upper level has four $m'$ values and gives six allowed components at $\pm\tfrac13$, $\pm1$ and $\pm\tfrac53$ times $\mu_BB$. These shifts are far smaller than the 2.13 meV fine structure, so the weak-field treatment is valid.

### Example 3 — Hydrogen with a Gaussian trial function

Use $\psi = e^{-\beta r^2}$ to bound the hydrogen ground-state energy. The required integrals are $\langle\hat T\rangle = 3\hbar^2\beta/2m$ and $\langle1/r\rangle = 2\sqrt{2\beta/\pi}$.

**Solution.** $E(\beta) = \dfrac{3\hbar^2\beta}{2m} - \dfrac{e^2}{4\pi\varepsilon_0}\,2\sqrt{\dfrac{2\beta}{\pi}}$. Setting $dE/d\beta = 0$ and using $a_0 = 4\pi\varepsilon_0\hbar^2/me^2$ gives $\sqrt\beta = \tfrac23\sqrt{2/\pi}\,/a_0$, so $\beta = 8/9\pi a_0^2$. At the minimum $\langle\hat V\rangle = -2\langle\hat T\rangle$, hence

$$E_{\min} = -\langle\hat T\rangle = -\frac{3\hbar^2}{2m}\cdot\frac{8}{9\pi a_0^2} = -\frac{8}{3\pi}\cdot\frac{\hbar^2}{2ma_0^2} = -0.849\times13.6\ \text{eV} = -11.5\ \text{eV}.$$

The bound is 15% above the exact $-13.6$ eV; a Gaussian has the wrong cusp at $r = 0$ and decays too fast, yet the energy is still respectable.

## Common Misconceptions

- **"Perturbation theory always converges if $\lambda$ is small."** Many series, including the $\hat x^4$ oscillator, are asymptotic; low orders help, high orders diverge.
- **"Degenerate states can be perturbed one at a time."** The zeroth-order states must first be chosen to diagonalise $\hat H'$ in the degenerate subspace, otherwise the formulas divide by zero.
- **"The ground state of hydrogen has a linear Stark effect."** It has definite parity and no permanent dipole; its shift is quadratic in the field.
- **"The anomalous Zeeman effect is anomalous physics."** It is the normal effect of electron spin with $g_s = 2$; the name predates spin.
- **"A variational energy below the true value means a better trial function."** The variational energy can never fall below $E_0$; a lower value signals an algebra error.

## Connections

- Stark and Zeeman splittings of spectral lines are the tools for measuring electric and magnetic fields in stellar atmospheres and sunspots in astrophysics-iii Lesson m1-l2.
- The Zeeman patterns predicted here are measured in atomic-and-molecular-physics-lab Lesson m1-l1, and the vector-model results of atomic-and-molecular-physics Lesson m1-l2 are justified.
- Matrix diagonalisation and the variational principle are the same mathematics as the Rayleigh quotient in linear-algebra and the eigenvalue solvers of numerical-methods.
- Second-order perturbation theory gives van der Waals attraction between atoms (atomic-and-molecular-physics Lesson m3-l1) and the effective-mass approximation in solid-state-physics.
- The effective nuclear charge introduced variationally explains the screening behind Moseley's law in atomic-and-molecular-physics Lesson m2-l3.

## Quick Check

1. Find the first-order shift of $|n\rangle$ for the perturbation $\hat H' = \lambda\hat x^2$ and compare with the exact result for the frequency $\omega\sqrt{1 + 2\lambda/m\omega^2}$.
2. Why does the second-order correction to the ground state always lower the energy?
3. Which $n = 2$ hydrogen states are unshifted by the linear Stark effect, and why?
4. Compute $g_J$ for $^2D_{3/2}$ and $^2D_{5/2}$.
5. Show that a trial function $e^{-\beta r}$ gives the exact hydrogen ground-state energy.

## Takeaway

- Non-degenerate perturbation theory expresses corrections through matrix elements and energy denominators.
- Degenerate levels require diagonalising the perturbation within the degenerate subspace, as in the linear Stark effect.
- The weak-field Zeeman effect follows from Clebsch–Gordan algebra, giving the Landé $g_J$.
- The variational method gives rigorous upper bounds without a small parameter and improves the helium estimate to $-77.5$ eV.
- Time-dependent perturbations, transitions and the semiclassical WKB method come next in Lesson m3-l2.
