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
lessonId: advanced-quantum-mechanics-m2-l3
lessonName: Identical Particles, Exchange Symmetry and the Helium Atom
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - advanced-quantum-mechanics-m2-l2
  - introduction-to-quantum-mechanics-m3-l3
learningObjectives:
  - State the symmetrisation postulate and construct symmetric and antisymmetric states for two identical particles, including spin.
  - Write an $N$-fermion state as a Slater determinant and derive the Pauli exclusion principle from it.
  - Calculate the exchange contribution to $\langle(x_1 - x_2)^2\rangle$ and explain the exchange interaction between electrons.
  - Estimate the helium ground-state energy to first order in the electron repulsion and explain the ortho–para splitting of excited helium.
concepts:
  - Exchange operator
  - Symmetrisation postulate
  - Bosons and fermions
  - Slater determinant
  - Pauli exclusion principle
  - Exchange integral
  - Ortho- and parahelium
tags:
  - physics
  - advanced-quantum-mechanics
  - identical-particles
  - helium-atom
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Identical Particles, Exchange Symmetry and the Helium Atom

## Overview

Classically, two electrons can always be told apart by following their trajectories. Quantum mechanically there are no trajectories, and two electrons are identical in the strongest sense: no measurement can distinguish the state in which "electron 1 is here and electron 2 is there" from the one with the labels swapped. This lesson turns that fact into a constraint on the state vector. The exchange operator commutes with every physical Hamiltonian, and the symmetrisation postulate requires states of identical particles to be either symmetric (bosons) or antisymmetric (fermions) under exchange. Antisymmetry produces the Pauli principle, Slater determinants and an effective exchange interaction that is not a new force but a consequence of symmetry combined with the Coulomb repulsion. The helium atom, the simplest system where all of this matters, is analysed at the end: the ground-state energy to first order in the electron–electron repulsion, and the splitting of excited states into ortho- and parahelium.

## Learning Path

- **What you should already know**: the Pauli principle and shell filling (introduction-to-quantum-mechanics Lesson m3-l3); the singlet and triplet states and $\hat{\mathbf S}_1\cdot\hat{\mathbf S}_2$ (Lesson m2-l2); oscillator matrix elements (Lesson m1-l3).
- **What this lesson adds**: the exchange operator, the symmetrisation postulate and spin–statistics connection, Slater determinants, exchange correlations, direct and exchange integrals, and the first-order theory of helium.
- **What later lessons this will unlock**: the variational treatment of helium (Lesson m3-l1), spin selection rules that forbid singlet–triplet transitions (Lesson m3-l2), and exchange effects in identical-particle scattering (Lesson m3-l3).

## Core Explanation

### The exchange operator

For two particles, write a state as $\psi(1, 2)$, where each label stands for position and spin. The **exchange operator** is defined by $\hat P_{12}\psi(1, 2) = \psi(2, 1)$. Since $\hat P_{12}^2 = \hat 1$, its eigenvalues are $\pm1$. For identical particles every observable, and in particular the Hamiltonian, is symmetric under relabelling, so $[\hat P_{12}, \hat H] = 0$. Exchange symmetry is therefore a constant of motion: a state that starts symmetric stays symmetric.

### The symmetrisation postulate

Experiment shows that only the two eigenvalues of $\hat P_{12}$ are realised in nature, and each species uses only one of them. The **symmetrisation postulate** states that a system of identical particles is described by states that are either

- totally symmetric under exchange of any pair: **bosons**, or
- totally antisymmetric under exchange of any pair: **fermions**.

The **spin–statistics theorem** of relativistic quantum field theory fixes which is which: particles of integer spin (photons, pions, $^4$He atoms) are bosons, and particles of half-integer spin (electrons, protons, neutrons, $^3$He atoms) are fermions.

If one particle occupies the single-particle state $\psi_a$ and the other $\psi_b$, the allowed spatial states are

$$\psi_\pm(x_1, x_2) = \frac{1}{\sqrt2}\left[\psi_a(x_1)\psi_b(x_2) \pm \psi_b(x_1)\psi_a(x_2)\right].$$

For fermions with $a = b$ the antisymmetric combination vanishes identically: two identical fermions cannot occupy the same single-particle state. This is the **Pauli exclusion principle**, now a theorem rather than a rule.

### Including spin

For electrons the full state is a product of a spatial part and a spin part (or a sum of such products), and only the total must be antisymmetric. From Lesson m2-l2 the spin singlet is antisymmetric and the triplet symmetric, so the two allowed combinations are

$$\Psi = \psi_+(\mathbf r_1, \mathbf r_2)\,\chi_{0,0} \quad\text{or}\quad \Psi = \psi_-(\mathbf r_1, \mathbf r_2)\,\chi_{1,m_S}.$$

Spatial symmetry and total spin are locked together. This is how a spin-independent Hamiltonian can produce energies that depend on total spin.

### Slater determinants

For $N$ non-interacting fermions in single-particle spin-orbitals $\phi_1, \ldots, \phi_N$, the antisymmetric state is the **Slater determinant**

$$\Psi(1, \ldots, N) = \frac{1}{\sqrt{N!}}\begin{vmatrix}\phi_1(1) & \phi_2(1) & \cdots & \phi_N(1)\\ \phi_1(2) & \phi_2(2) & \cdots & \phi_N(2)\\ \vdots & & & \vdots\\ \phi_1(N) & \phi_2(N) & \cdots & \phi_N(N)\end{vmatrix}.$$

Exchanging two particles swaps two rows and changes the sign; two equal spin-orbitals make two columns equal and the determinant vanishes. For lithium, $\phi_1 = 1s\uparrow$, $\phi_2 = 1s\downarrow$, $\phi_3 = 2s\uparrow$ gives the $1s^22s$ ground configuration; a third electron in $1s$ would repeat a column. Slater determinants are the starting point of the Hartree–Fock method used for all many-electron atoms and molecules.

### Exchange correlations

Antisymmetry changes where identical particles are found relative to each other, even without any interaction. For one-dimensional states $\psi_a$, $\psi_b$, a direct calculation with $\psi_\pm$ gives

$$\langle(x_1 - x_2)^2\rangle_\pm = \langle x^2\rangle_a + \langle x^2\rangle_b - 2\langle x\rangle_a\langle x\rangle_b \mp 2|\langle x\rangle_{ab}|^2,$$

where $\langle x\rangle_{ab} = \int\psi_a^*x\,\psi_b\,dx$. The first three terms are the result for distinguishable particles. Symmetric spatial states ($+$, upper sign) huddle together; antisymmetric spatial states are pushed apart. The effect requires the two wavefunctions to overlap; widely separated particles behave as if distinguishable.

### The helium atom

With the nucleus fixed, helium ($Z = 2$) has

$$\hat H = \sum_{i=1}^2\left(\frac{\hat p_i^2}{2m} - \frac{Ze^2}{4\pi\varepsilon_0 r_i}\right) + \frac{e^2}{4\pi\varepsilon_0|\mathbf r_1 - \mathbf r_2|}.$$

Without the last term each electron sees a hydrogen-like nucleus with energies $-Z^2(13.6\ \text{eV})/n^2$. The ground configuration $1s^2$ has a symmetric spatial part $\psi_{100}(\mathbf r_1)\psi_{100}(\mathbf r_2)$, so the spin part must be the singlet, and the zeroth-order energy is $2\times(-4\times13.6) = -108.8$ eV. The repulsion raises this. Its expectation value in the unperturbed state is a standard integral,

$$\left\langle\frac{e^2}{4\pi\varepsilon_0 r_{12}}\right\rangle = \frac58Z\,\frac{e^2}{4\pi\varepsilon_0 a_0} = \frac54Z\times13.6\ \text{eV} = 34.0\ \text{eV},$$

giving $E_0 \approx -74.8$ eV against the measured $-79.0$ eV. The estimate is 5% high because the repulsion, about a third of the binding, is not small; Lesson m3-l1 formalises this as first-order perturbation theory and improves it with the variational method.

### Ortho- and parahelium

For the excited configuration $1s\,2s$ there are two spatial states $\psi_\pm = [\psi_{100}(1)\psi_{200}(2) \pm \psi_{200}(1)\psi_{100}(2)]/\sqrt2$. The repulsion has expectation value

$$\langle V_{ee}\rangle_\pm = J \pm K,$$

with the **direct integral** $J = \int|\psi_{100}(\mathbf r_1)|^2|\psi_{200}(\mathbf r_2)|^2\,\frac{e^2}{4\pi\varepsilon_0 r_{12}}\,d^3r_1d^3r_2$, the classical repulsion of two charge clouds, and the **exchange integral** $K = \int\psi_{100}^*(\mathbf r_1)\psi_{200}^*(\mathbf r_2)\,\frac{e^2}{4\pi\varepsilon_0 r_{12}}\,\psi_{200}(\mathbf r_1)\psi_{100}(\mathbf r_2)\,d^3r_1d^3r_2$, which has no classical analogue and is positive. The spatially antisymmetric state goes with the spin triplet (**orthohelium**) and has energy $J - K$; the symmetric one goes with the singlet (**parahelium**) at $J + K$. Electrons in the triplet avoid each other, feel less repulsion and lie lower: the quantum origin of Hund's first rule. Using $\hat P_{\rm spin} = \tfrac12(1 + 4\hat{\mathbf S}_1\cdot\hat{\mathbf S}_2/\hbar^2)$, which is $+1$ on the triplet and $-1$ on the singlet, the energy can be written

$$E = J - \frac K2\left(1 + \frac{4\hat{\mathbf S}_1\cdot\hat{\mathbf S}_2}{\hbar^2}\right),$$

an effective spin–spin coupling generated by Coulomb repulsion plus antisymmetry. Its lattice version, the Heisenberg exchange Hamiltonian, explains ferromagnetism.

## Key Ideas

- **Exchange operator** $\hat P_{12}$ commutes with the Hamiltonian of identical particles; its eigenvalues are $\pm1$.
- **Symmetrisation postulate**: bosons (integer spin) have symmetric states, fermions (half-integer spin) antisymmetric ones.
- **Pauli principle** follows from antisymmetry: the fermion state vanishes if two particles share a spin-orbital.
- **Slater determinants** build antisymmetric $N$-fermion states from spin-orbitals.
- **Exchange correlations**: symmetric spatial states bunch, antisymmetric ones avoid each other, by $\mp2|\langle x\rangle_{ab}|^2$.
- **Helium**: first-order repulsion gives $-74.8$ eV against $-79.0$ eV; triplet $1s2s$ lies below singlet by $2K$.

## Worked Examples

### Example 1 — Five particles in an infinite well

Five non-interacting particles occupy an infinite well of width $L = 1.00$ nm, with $E_1 = 0.376$ eV for an electron (Lesson m1-l2). Find the ground-state energy if they are (a) electrons, (b) spin-polarised electrons, (c) spin-zero bosons of electron mass.

**Solution.** (a) Each level holds two electrons of opposite spin: fill $n = 1, 1, 2, 2, 3$, so $E = (1 + 1 + 4 + 4 + 9)E_1 = 19E_1 = 7.14$ eV. (b) With all spins up, each level holds one: $E = (1 + 4 + 9 + 16 + 25)E_1 = 55E_1 = 20.7$ eV. (c) Bosons all occupy $n = 1$: $E = 5E_1 = 1.88$ eV. The factor of eleven between (b) and (c) arises entirely from exchange symmetry; the Hamiltonian is the same.

### Example 2 — Exchange correlation in a harmonic oscillator

Two identical particles in an oscillator occupy $|0\rangle$ and $|1\rangle$. Compute $\langle(x_1 - x_2)^2\rangle$ for distinguishable particles, for a symmetric spatial state and for an antisymmetric spatial state.

**Solution.** From Lesson m1-l3, $\langle x^2\rangle_0 = \hbar/2m\omega$, $\langle x^2\rangle_1 = 3\hbar/2m\omega$, $\langle x\rangle_0 = \langle x\rangle_1 = 0$ and $\langle 0|\hat x|1\rangle = \sqrt{\hbar/2m\omega}$. The distinguishable result is $\hbar/2m\omega + 3\hbar/2m\omega = 2\hbar/m\omega$. The exchange term is $2|\langle x\rangle_{01}|^2 = \hbar/m\omega$, so

$$\langle(x_1 - x_2)^2\rangle_+ = \frac{\hbar}{m\omega}, \qquad \langle(x_1 - x_2)^2\rangle_- = \frac{3\hbar}{m\omega}.$$

The rms separation in the antisymmetric state is $\sqrt3 = 1.73$ times that in the symmetric state. For two electrons, the antisymmetric spatial state is the spin triplet, which therefore has the smaller Coulomb repulsion.

### Example 3 — Helium energies and the exchange integral

Using the first-order result, predict the first ionisation energy of helium. Then use the measured excitation energies of the $1s2s$ levels, $2\,^3S$ at 19.82 eV and $2\,^1S$ at 20.62 eV, to extract $K$.

**Solution.** He$^+$ is hydrogen-like with $E = -Z^2(13.6\ \text{eV}) = -54.4$ eV. The ionisation energy is $E(\text{He}^+) - E_0(\text{He}) = -54.4 - (-74.8) = 20.4$ eV, below the measured 24.6 eV because $E_0$ was too high by 4.2 eV. For the excited states, $E_{\rm para} - E_{\rm ortho} = (J + K) - (J - K) = 2K$, so

$$2K = 20.62 - 19.82 = 0.80\ \text{eV}, \qquad K = 0.40\ \text{eV}.$$

The triplet is lower, as predicted. Because the electric-dipole operator does not act on spin, singlet–triplet transitions are strongly suppressed, and helium spectra historically appeared to come from two separate gases.

## Common Misconceptions

- **"The exchange interaction is a new fundamental force."** It is the ordinary Coulomb repulsion evaluated in states of definite exchange symmetry; its spin dependence comes from antisymmetry.
- **"The Pauli principle forbids two electrons from being in the same place."** It forbids two identical fermions from sharing a complete set of quantum numbers; electrons of opposite spin can share a spatial orbital.
- **"Symmetric spatial states are attractive."** They increase the probability of finding particles close together, but there is no attractive potential; it is a correlation.
- **"For a two-electron system the spatial part must be antisymmetric."** Only the total must be; a symmetric spatial part with a singlet spin is allowed, and it is the helium ground state.
- **"Distant identical particles must be antisymmetrised."** Formally yes, but the exchange terms vanish without overlap, so distant electrons can be treated as distinguishable.

## Connections

- The Fermi–Dirac and Bose–Einstein distributions of thermal-physics-and-statistical-mechanics follow from counting antisymmetric and symmetric many-particle states.
- Electron degeneracy pressure, a direct consequence of the Pauli principle, supports white dwarfs up to the Chandrasekhar limit (astrophysics-iii Lesson m3-l8); neutron degeneracy supports neutron stars (astrophysics-iv Lesson m3-l7).
- The free-electron model and Fermi level of solid-state-physics Lesson m3-l1 fill single-particle states two electrons at a time, and exchange coupling explains ferromagnetism.
- Shell structure and the periodic table in atomic-and-molecular-physics, and the nuclear shell model in nuclear-physics Lesson m1-l3, are both built from Slater-determinant filling.
- Covalent bonding in H$_2$ (atomic-and-molecular-physics Lesson m3-l1) is the bonding singlet versus antibonding triplet, the same $J \pm K$ structure as excited helium.

## Quick Check

1. Show that $\hat P_{12}$ is Hermitian and unitary, and hence has eigenvalues $\pm1$.
2. Write the Slater determinant for two electrons in $1s\uparrow$ and $2s\downarrow$ and expand it. Is it an eigenstate of total spin?
3. Why must the helium ground state be a spin singlet?
4. Three spin-polarised fermions occupy the lowest oscillator levels. What is the ground-state energy?
5. Explain why orthohelium lies below parahelium for the same configuration.

## Takeaway

- Identical particles are described by symmetric (bosons) or antisymmetric (fermions) states, fixed by spin.
- The Pauli principle and the Slater determinant are direct consequences of antisymmetry.
- Exchange symmetry creates correlations that make Coulomb energies depend on total spin.
- First-order theory gives helium's ground state to 5%, and the exchange integral explains the ortho–para splitting.
- Module 3 develops the approximation methods, beginning with perturbation theory and the variational method in Lesson m3-l1.
