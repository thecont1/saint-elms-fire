***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: advanced-quantum-mechanics
courseName: Advanced Quantum Mechanics (Physics Option C)
moduleId: advanced-quantum-mechanics-module-2
moduleName: Angular Momentum and Identical Particles
lessonId: advanced-quantum-mechanics-m2-l1
lessonName: Angular Momentum Algebra, Spin-1/2 and Pauli Matrices
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 4
prerequisites:
  - advanced-quantum-mechanics-m1-l3
  - introduction-to-quantum-mechanics-m3-l3
  - atomic-and-molecular-physics-m1-l2
learningObjectives:
  - Derive $[\hat L_x,\hat L_y] = i\hbar\hat L_z$ and use the algebra $[\hat J_i,\hat J_j] = i\hbar\epsilon_{ijk}\hat J_k$ to obtain the spectrum $j(j+1)\hbar^2$, $m\hbar$ with $j$ integer or half-integer.
  - Construct the matrices of $\hat J_x$, $\hat J_y$, $\hat J_z$ for $j = \tfrac12$ and $j = 1$ from the ladder relations.
  - Use Pauli matrices to compute spin expectation values and measurement probabilities along arbitrary axes.
  - Solve the dynamics of a spin in a uniform magnetic field and obtain the Larmor precession frequency.
concepts:
  - Angular momentum commutation relations
  - Angular momentum ladder operators
  - Eigenvalue spectrum of J squared
  - Pauli matrices
  - Spinor
  - Larmor precession
  - Gyromagnetic ratio
tags:
  - physics
  - advanced-quantum-mechanics
  - angular-momentum
  - spin
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Angular Momentum Algebra, Spin-1/2 and Pauli Matrices

## Overview

In introductory quantum mechanics orbital angular momentum appeared through the spherical harmonics $Y_l^m(\theta,\phi)$, obtained by separating the Schrödinger equation in spherical coordinates. That route hides the essential point: the quantisation of angular momentum follows from the commutation relations alone, and the same algebra admits half-integer values that no wavefunction of $\theta$ and $\phi$ can represent. This lesson derives the angular-momentum commutators from $\hat{\mathbf L} = \hat{\mathbf r}\times\hat{\mathbf p}$, promotes them to the definition of a general angular momentum $\hat{\mathbf J}$, and uses ladder operators, exactly as for the oscillator in Lesson m1-l3, to find every allowed eigenvalue. The smallest non-trivial case, $j = \tfrac12$, is electron spin, represented by the Pauli matrices. The lesson ends with the precession of a spin in a magnetic field, the physics of magnetic resonance.

## Learning Path

- **What you should already know**: commutators, CSCOs and the Heisenberg equation (Lesson m1-l2); ladder-operator reasoning (Lesson m1-l3); electron spin and the Stern–Gerlach experiment (introduction-to-quantum-mechanics Lesson m3-l3); the vector model of the Zeeman effect (atomic-and-molecular-physics Lesson m1-l2).
- **What this lesson adds**: the algebraic derivation of the angular-momentum spectrum, the matrices for $j = \tfrac12$ and $j = 1$, Pauli-matrix identities, spinors along arbitrary axes, rotation operators and Larmor precession.
- **What later lessons this will unlock**: addition of angular momenta and Clebsch–Gordan coefficients (Lesson m2-l2), spin and exchange symmetry (Lesson m2-l3), the Zeeman effect as a perturbation (Lesson m3-l1) and dipole selection rules (Lesson m3-l2).

## Core Explanation

### Commutators of orbital angular momentum

With $\hat L_x = \hat y\hat p_z - \hat z\hat p_y$ and cyclic permutations, and using $[\hat x_i,\hat p_j] = i\hbar\delta_{ij}$, only two of the four cross terms in $[\hat L_x,\hat L_y]$ survive:

$$[\hat L_x,\hat L_y] = [\hat y\hat p_z,\hat z\hat p_x] + [\hat z\hat p_y,\hat x\hat p_z] = \hat y\hat p_x(-i\hbar) + \hat x\hat p_y(i\hbar) = i\hbar\hat L_z.$$

Together with the cyclic permutations this is $[\hat L_i,\hat L_j] = i\hbar\epsilon_{ijk}\hat L_k$. The components do not commute, so no two can be measured simultaneously with arbitrary precision. But $\hat L^2 = \hat L_x^2 + \hat L_y^2 + \hat L_z^2$ commutes with each component; for example $[\hat L^2,\hat L_z] = \hat L_x[\hat L_x,\hat L_z] + [\hat L_x,\hat L_z]\hat L_x + (x\to y) = -i\hbar(\hat L_x\hat L_y + \hat L_y\hat L_x) + i\hbar(\hat L_y\hat L_x + \hat L_x\hat L_y) = 0$. The standard choice of compatible observables is $\{\hat L^2,\hat L_z\}$.

### General angular momentum and its spectrum

Any three Hermitian operators obeying $[\hat J_i,\hat J_j] = i\hbar\epsilon_{ijk}\hat J_k$ define an **angular momentum**. Introduce the ladder operators $\hat J_\pm = \hat J_x \pm i\hat J_y$, with $\hat J_\pm^\dagger = \hat J_\mp$. Direct computation gives

$$[\hat J_z,\hat J_\pm] = \pm\hbar\hat J_\pm, \qquad [\hat J_+,\hat J_-] = 2\hbar\hat J_z, \qquad \hat J^2 = \hat J_\mp\hat J_\pm + \hat J_z^2 \pm \hbar\hat J_z.$$

Let $|\lambda, m\rangle$ be simultaneous eigenkets with $\hat J^2|\lambda,m\rangle = \lambda\hbar^2|\lambda,m\rangle$ and $\hat J_z|\lambda,m\rangle = m\hbar|\lambda,m\rangle$. The first commutator shows that $\hat J_\pm|\lambda,m\rangle$ is an eigenket of $\hat J_z$ with eigenvalue $(m\pm1)\hbar$ and the same $\lambda$. Since $\lambda - m^2 = \langle\hat J_x^2 + \hat J_y^2\rangle/\hbar^2 \geq 0$, the ladder must terminate at both ends: there is an $m_{\max}$ with $\hat J_+|\lambda,m_{\max}\rangle = 0$ and an $m_{\min}$ with $\hat J_-|\lambda,m_{\min}\rangle = 0$. Applying the identity for $\hat J^2$ to these states,

$$\lambda = m_{\max}(m_{\max} + 1) = m_{\min}(m_{\min} - 1).$$

The only solution with $m_{\min}\leq m_{\max}$ is $m_{\min} = -m_{\max}$. Calling $m_{\max} = j$, the ladder runs from $-j$ to $j$ in integer steps, so $2j$ is a non-negative integer:

$$\hat J^2|j,m\rangle = j(j+1)\hbar^2|j,m\rangle, \qquad \hat J_z|j,m\rangle = m\hbar|j,m\rangle, \qquad j = 0, \tfrac12, 1, \tfrac32, \ldots, \quad m = -j, \ldots, j.$$

The norm $\|\hat J_\pm|j,m\rangle\|^2 = \langle\hat J^2 - \hat J_z^2 \mp \hbar\hat J_z\rangle$ fixes the ladder coefficients (Condon–Shortley phase convention, real and positive):

$$\hat J_\pm|j,m\rangle = \hbar\sqrt{j(j+1) - m(m\pm1)}\;|j,m\pm1\rangle.$$

For orbital angular momentum the eigenfunctions $Y_l^m \propto e^{im\phi}$ must be single-valued under $\phi\to\phi + 2\pi$, which excludes half-integers: $l = 0, 1, 2, \ldots$. Spin is not tied to spatial wavefunctions, and nature uses both: electrons, protons and neutrons have $s = \tfrac12$, photons $s = 1$.

### Matrix representations

In the basis $|j,m\rangle$ ordered $m = j, j-1, \ldots, -j$, $\hat J_z$ is diagonal and $\hat J_\pm$ have entries only next to the diagonal; $\hat J_x = (\hat J_+ + \hat J_-)/2$ and $\hat J_y = (\hat J_+ - \hat J_-)/2i$. For $j = 1$,

$$J_x = \frac{\hbar}{\sqrt2}\begin{pmatrix}0&1&0\\1&0&1\\0&1&0\end{pmatrix}, \qquad J_y = \frac{\hbar}{\sqrt2}\begin{pmatrix}0&-i&0\\i&0&-i\\0&i&0\end{pmatrix}, \qquad J_z = \hbar\begin{pmatrix}1&0&0\\0&0&0\\0&0&-1\end{pmatrix}.$$

For $j = \tfrac12$ the only non-zero ladder element is $\langle\tfrac12,\tfrac12|\hat J_+|\tfrac12,-\tfrac12\rangle = \hbar$, and $\hat{\mathbf S} = \tfrac{\hbar}{2}\boldsymbol\sigma$ with the **Pauli matrices**

$$\sigma_x = \begin{pmatrix}0&1\\1&0\end{pmatrix}, \qquad \sigma_y = \begin{pmatrix}0&-i\\i&0\end{pmatrix}, \qquad \sigma_z = \begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$

### Pauli-matrix algebra and spinors

The Pauli matrices are Hermitian, traceless, square to the identity, and satisfy

$$\sigma_i\sigma_j = \delta_{ij}\mathbb 1 + i\epsilon_{ijk}\sigma_k, \qquad (\boldsymbol\sigma\cdot\mathbf a)(\boldsymbol\sigma\cdot\mathbf b) = (\mathbf a\cdot\mathbf b)\mathbb 1 + i\boldsymbol\sigma\cdot(\mathbf a\times\mathbf b).$$

Hence $S^2 = \tfrac34\hbar^2\mathbb 1$, consistent with $s(s+1) = \tfrac34$. A spin state is a two-component **spinor** $\chi = a|{\uparrow}\rangle + b|{\downarrow}\rangle$ with $|a|^2 + |b|^2 = 1$. The component along a unit vector $\hat{\mathbf n} = (\sin\theta\cos\phi, \sin\theta\sin\phi, \cos\theta)$ is $\hat S_n = \tfrac\hbar2\boldsymbol\sigma\cdot\hat{\mathbf n}$; since $(\boldsymbol\sigma\cdot\hat{\mathbf n})^2 = \mathbb 1$ its eigenvalues are $\pm\hbar/2$ for every direction, with the spin-up eigenspinor

$$|{\uparrow_n}\rangle = \cos\tfrac\theta2\,|{\uparrow}\rangle + e^{i\phi}\sin\tfrac\theta2\,|{\downarrow}\rangle.$$

Every pure spin-1/2 state is spin-up along some direction, the point $(\theta,\phi)$ on the Bloch sphere. The half-angles signal that a rotation by $\varphi$ about $\hat{\mathbf n}$, implemented by $\hat R = e^{-i\varphi\hat{\mathbf S}\cdot\hat{\mathbf n}/\hbar} = \cos\tfrac\varphi2\,\mathbb 1 - i\sin\tfrac\varphi2\,\boldsymbol\sigma\cdot\hat{\mathbf n}$, returns $-\chi$ after $\varphi = 2\pi$; spinors need a $4\pi$ rotation to return to themselves, a sign observed in neutron interferometry.

### Spin precession in a magnetic field

A particle with spin carries a magnetic moment $\hat{\boldsymbol\mu} = \gamma\hat{\mathbf S}$, where the **gyromagnetic ratio** for the electron is $\gamma_e = -g_se/2m_e$ with $g_s \approx 2.0023$, so $|\gamma_e| = 1.761\times10^{11}$ s$^{-1}$ T$^{-1}$; for the proton $\gamma_p = 2.675\times10^8$ s$^{-1}$ T$^{-1}$. In a uniform field $\mathbf B = B\hat{\mathbf z}$ the Hamiltonian is $\hat H = -\gamma B\hat S_z$, with eigenvalues $\mp\gamma B\hbar/2$. The Heisenberg equations with $[\hat S_z,\hat S_x] = i\hbar\hat S_y$ and $[\hat S_z,\hat S_y] = -i\hbar\hat S_x$ give

$$\frac{d\hat S_x}{dt} = \gamma B\hat S_y, \qquad \frac{d\hat S_y}{dt} = -\gamma B\hat S_x, \qquad \frac{d\hat S_z}{dt} = 0,$$

that is $d\hat{\mathbf S}/dt = \gamma\hat{\mathbf S}\times\mathbf B = \hat{\boldsymbol\mu}\times\mathbf B$, the quantum version of the classical torque equation. The spin vector precesses about $\mathbf B$ at the **Larmor frequency**

$$\omega_L = |\gamma|B,$$

which equals the level splitting divided by $\hbar$. Driving the system with a transverse field oscillating at $\omega_L$ flips the spin: this is electron spin resonance (about 28 GHz per tesla) and nuclear magnetic resonance (42.58 MHz per tesla for protons), and the resonant dynamics are the Rabi oscillations of advanced-quantum-mechanics-lab Lesson m1-l4.

## Key Ideas

- **Commutation relations** $[\hat J_i,\hat J_j] = i\hbar\epsilon_{ijk}\hat J_k$ define angular momentum; $\hat J^2$ commutes with every component.
- **Ladder operators** $\hat J_\pm$ shift $m$ by one; boundedness gives $j(j+1)\hbar^2$ and $m = -j,\ldots,j$ with $2j$ an integer.
- **Orbital versus spin**: single-valuedness restricts $l$ to integers; spin may be half-integer.
- **Ladder coefficients** $\hbar\sqrt{j(j+1) - m(m\pm1)}$ build the matrices for any $j$.
- **Pauli matrices** satisfy $\sigma_i\sigma_j = \delta_{ij} + i\epsilon_{ijk}\sigma_k$; every spin-1/2 state points along some axis of the Bloch sphere.
- **Larmor precession**: $d\hat{\mathbf S}/dt = \gamma\hat{\mathbf S}\times\mathbf B$ at $\omega_L = |\gamma|B$, the basis of ESR and NMR.

## Worked Examples

### Example 1 — Measuring $L_x$ in the state $|1,1\rangle$

A particle is in the state $|l = 1, m = 1\rangle$. Find the possible results of measuring $L_x$ and their probabilities.

**Solution.** The eigenvalues of the $j = 1$ matrix $J_x$ above are $\hbar, 0, -\hbar$ (it is $\hbar/\sqrt2$ times a matrix with eigenvalues $\sqrt2, 0, -\sqrt2$). The normalised eigenvectors in the $m = 1, 0, -1$ basis are

$$\hbar:\ \tfrac12(1, \sqrt2, 1), \qquad 0:\ \tfrac1{\sqrt2}(1, 0, -1), \qquad -\hbar:\ \tfrac12(1, -\sqrt2, 1).$$

The state $|1,1\rangle$ is $(1,0,0)$, so by the Born rule the probabilities are the squared first components: $P(\hbar) = \tfrac14$, $P(0) = \tfrac12$, $P(-\hbar) = \tfrac14$. Check: $\langle L_x\rangle = \hbar(\tfrac14 - \tfrac14) = 0$, as it must be for a state symmetric about the $z$ axis.

### Example 2 — Spin components of a given spinor

An electron is in $\chi = (|{\uparrow}\rangle + 2|{\downarrow}\rangle)/\sqrt5$. Find $\langle S_x\rangle$, $\langle S_y\rangle$, $\langle S_z\rangle$ and the probability of finding $S_x = +\hbar/2$.

**Solution.** With $a = 1/\sqrt5$, $b = 2/\sqrt5$: $\langle S_z\rangle = \tfrac\hbar2(|a|^2 - |b|^2) = \tfrac\hbar2(-\tfrac35) = -0.30\hbar$; $\langle S_x\rangle = \tfrac\hbar2\cdot2\operatorname{Re}(a^*b) = \tfrac\hbar2\cdot\tfrac45 = 0.40\hbar$; $\langle S_y\rangle = \tfrac\hbar2\cdot2\operatorname{Im}(a^*b) = 0$. The $S_x$ eigenspinor is $(|{\uparrow}\rangle + |{\downarrow}\rangle)/\sqrt2$, so

$$P(S_x = +\tfrac\hbar2) = \left|\frac{1 + 2}{\sqrt{10}}\right|^2 = 0.90.$$

Consistency: $\tfrac\hbar2(0.90 - 0.10) = 0.40\hbar$. The vector $\langle\boldsymbol\sigma\rangle = (0.8, 0, -0.6)$ has unit length, confirming a pure state pointing at $\theta = 126.9°$ in the $xz$ plane.

### Example 3 — Electron spin resonance at X-band

An electron spin initially along $+x$ sits in $B = 0.350$ T along $z$. Find the precession frequency, the probability of finding $S_x = +\hbar/2$ at time $t$, and the time for the spin to point along $-x$.

**Solution.** $f_L = |\gamma_e|B/2\pi = 1.761\times10^{11}\times0.350/2\pi = 9.81\times10^9$ Hz, the X-band frequency of ESR spectrometers. The spin precesses in the $xy$ plane, $\langle S_x\rangle = \tfrac\hbar2\cos\omega_Lt$, so

$$P_{+x}(t) = \tfrac12\left(1 + \cos\omega_Lt\right) = \cos^2\left(\tfrac{\omega_Lt}{2}\right).$$

It reaches $-x$ when $\omega_Lt = \pi$, at $t = 1/2f_L = 51$ ps. A proton in the same field would take $1/(2\times14.9\ \text{MHz}) = 34$ ns, three orders of magnitude longer because $\gamma_p/|\gamma_e| \approx 1/658$.

## Common Misconceptions

- **"$\hat L^2$ has eigenvalue $l^2\hbar^2$."** It is $l(l+1)\hbar^2$; the angular momentum vector can never point exactly along $z$, because $\langle L_x^2 + L_y^2\rangle = [l(l+1) - m^2]\hbar^2 > 0$.
- **"Spin is the electron literally rotating."** A point particle spinning fast enough to give $\hbar/2$ would need a surface speed above $c$; spin is an intrinsic angular momentum defined by the algebra.
- **"A spin-up electron along $z$ has zero spin along $x$."** $\langle S_x\rangle = 0$, but a measurement always gives $\pm\hbar/2$, each with probability $\tfrac12$.
- **"Half-integer $j$ is forbidden by the algebra."** The commutation relations allow it; only the single-valuedness of orbital wavefunctions excludes it for $\hat{\mathbf L}$.
- **"Precession requires a time-dependent field."** A static field produces precession; the oscillating field is needed only to induce resonant transitions.

## Connections

- The commutation relations mirror the Poisson brackets $\{L_i, L_j\} = \epsilon_{ijk}L_k$ of rotational mechanics, and Larmor precession is the quantum analogue of gyroscopic precession under a torque.
- Pauli matrices and the Bloch sphere are the language of qubits; the rotation operator is the single-qubit gate, linking to linear-algebra Lessons m2-l3 and m3-l3 on unitary matrices.
- ESR and NMR, built on Larmor precession, are standard probes in solid-state-physics and the basis of medical MRI; the proton frequency 42.58 MHz T$^{-1}$ sets MRI scanner frequencies.
- Spin precession of electrons and protons in magnetic fields is used in astrophysics to measure interstellar and stellar magnetic fields through the Zeeman splitting of spectral lines.
- The quantisation $l(l+1)\hbar^2$ underlies the rotational spectra of diatomic molecules in atomic-and-molecular-physics Lesson m3-l2.

## Quick Check

1. Show that $[\hat J_+,\hat J_-] = 2\hbar\hat J_z$.
2. Evaluate $\hat J_-|\tfrac32,\tfrac12\rangle$.
3. Using $\sigma_i\sigma_j = \delta_{ij} + i\epsilon_{ijk}\sigma_k$, simplify $\sigma_x\sigma_y\sigma_z$.
4. Find the spinor that is spin-up along the direction $\theta = 90°$, $\phi = 90°$ and identify the axis.
5. What field gives a proton Larmor frequency of 300 MHz?

## Takeaway

- Angular-momentum quantisation is a consequence of the commutation relations, not of any particular wavefunction.
- Ladder operators give the full spectrum and all matrix elements for every $j$.
- Spin-1/2 is described by Pauli matrices; every pure spin state points along a definite axis.
- A spin in a static field precesses at the Larmor frequency, the foundation of magnetic resonance.
- Combining two such angular momenta is the subject of Lesson m2-l2.
