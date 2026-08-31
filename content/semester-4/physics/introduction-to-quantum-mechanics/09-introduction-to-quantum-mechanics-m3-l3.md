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
lessonId: introduction-to-quantum-mechanics-m3-l3
lessonName: Spin, Pauli Principle and Multi-electron Atoms
lessonNumber: 9
moduleNumber: 3
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - introduction-to-quantum-mechanics-m3-l2
learningObjectives:
  - Describe electron spin and the spin-1/2 algebra.
  - State the Pauli exclusion principle.
  - Explain how the Pauli principle builds the periodic table.
  - Recognise the role of exchange symmetry in multi-electron atoms.
concepts:
  - Electron spin
  - Spin-1/2
  - Pauli exclusion principle
  - Antisymmetric wavefunction
  - Exchange interaction
  - Periodic table
tags:
  - physics
  - quantum-mechanics
  - spin
  - periodic-table
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
***

# Spin, Pauli Principle and Multi-electron Atoms

## Overview
Electrons have an intrinsic angular momentum called *spin*, with no classical analogue. Spin-1/2 is described by the same angular-momentum algebra as orbital angular momentum, but with $\ell = 1/2$ and only two states ($m_s = \pm 1/2$). The Pauli exclusion principle — that no two identical fermions can occupy the same quantum state — is a consequence of the antisymmetry of the fermionic wavefunction, and it is the key to the structure of the periodic table and the chemistry of the elements. This lesson introduces spin, derives the Pauli principle, and shows how the shell structure of atoms emerges.

## Learning Path
- What you should already know: the hydrogen atom, angular momentum algebra, the periodic table (qualitative).
- What this lesson adds: spin, the Pauli principle, the quantum-mechanical basis of the periodic table.
- What it unlocks: multi-electron atoms, molecular bonding, the Aufbau principle, and the structure of matter.

## Core Explanation
**Electron spin.** The electron has an intrinsic angular momentum $\vec{S}$ with magnitude $\sqrt{s(s+1)} \hbar$, where $s = 1/2$. The component along any axis is $m_s \hbar$ with $m_s = +1/2$ ("spin up") or $m_s = -1/2$ ("spin down"). The spin operators satisfy $[S_i, S_j] = i \hbar \epsilon_{ijk} S_k$ — the standard angular-momentum algebra.

**Stern–Gerlach experiment.** A beam of silver atoms passing through an inhomogeneous magnetic field splits into two beams, corresponding to $m_s = +1/2$ and $m_s = -1/2$. This was the first direct evidence of spin quantisation (1922). The splitting is what you would expect for a magnetic moment aligned with the field, with only two orientations.

**The gyromagnetic ratio.** The magnetic moment associated with spin is $\vec{\mu} = -g_s (e/2m) \vec{S}$, where $g_s \approx 2.002$ is the electron's g-factor. The energy in a magnetic field $B$ is $-\vec{\mu} \cdot \vec{B} = g_s (e \hbar/2m) m_s B$. This is the basis of ESR (electron spin resonance) spectroscopy.

**Spinors.** A spin-1/2 state is a two-component complex vector (spinor): $|\chi\rangle = a |\uparrow\rangle + b |\downarrow\rangle$, with $|a|^2 + |b|^2 = 1$. The expectation values of the spin operators are computed using the Pauli matrices

$$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \sigma_y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad \sigma_z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.$$

$\vec{S} = (\hbar/2) \vec{\sigma}$. These matrices are the generators of SU(2), the group of rotations in spin space.

**Spin and rotations.** A rotation by angle $\theta$ about axis $\hat{n}$ acts on a spinor as $U = e^{-i \theta \hat{n} \cdot \vec{\sigma}/2}$. A $2\pi$ rotation multiplies the spinor by $-1$ — physically the same state, but with a sign change. A $4\pi$ rotation is the identity. This is a hallmark of fermionic spin.

**Total wavefunction of a multi-electron atom.** A product of single-electron orbitals, antisymmetrised under exchange of any two electrons:

$$\Psi(\vec{r}_1, \sigma_1, \vec{r}_2, \sigma_2, \ldots) = \frac{1}{\sqrt{N!}} \sum_P (-1)^P \prod_i \psi_i(\vec{r}_{P(i)}, \sigma_{P(i)}).$$

This is the *Slater determinant*. It is antisymmetric under any exchange of two electrons (Pauli principle), and identically zero if any two electrons occupy the same state.

**The Pauli exclusion principle.** No two identical fermions can be in the same quantum state. For electrons, this means no two electrons in an atom can have the same set of quantum numbers $(n, \ell, m, m_s)$. This is the rule that determines the structure of the periodic table.

**Hartree–Fock approximation.** The many-electron Schrödinger equation is not exactly solvable. The Hartree–Fock method approximates the wavefunction as a Slater determinant and finds the orbitals self-consistently: each electron moves in the average field of the others. This is the workhorse of computational chemistry.

**Exchange interaction.** The antisymmetry of the wavefunction gives an effective attraction between same-spin electrons (because they avoid each other) and an effective repulsion between opposite-spin electrons (the *exchange* part of the interaction). The exchange interaction is the basis of *Hund's rules* and of magnetism in solids.

**Hund's rules.** For a multi-electron atom in a given configuration:
1. Maximise the total spin $S$ (so unpaired spins are aligned).
2. Maximise the total orbital angular momentum $L$ consistent with rule 1.
3. $J = |L - S|$ for less-than-half-filled subshells, $J = L + S$ for more-than-half-filled.

These rules predict the ground-state term of an atom. They are explained by the exchange interaction and the spin–orbit coupling.

**The periodic table.** The Pauli principle builds the periodic table:
- $n = 1$: 1s, 2 electrons. Period 1: H, He.
- $n = 2$: 2s (2), 2p (6). Period 2: Li, Be, B, C, N, O, F, Ne. Total 8.
- $n = 3$: 3s (2), 3p (6). Period 3: Na, Mg, Al, Si, P, S, Cl, Ar. Total 8.
- $n = 4$: 4s (2), 3d (10), 4p (6). Period 4: K, Ca, Sc–Zn, Ga–Kr. Total 18.

The 18-element period is the first long period; the $3\text{d}$ and $4\text{s}$ energies are close, which is why the transition metals are a chemical series.

**The Aufbau principle.** Fill the lowest-energy orbitals first, respecting the Pauli principle. The order is $1\text{s}, 2\text{s}, 2\text{p}, 3\text{s}, 3\text{p}, 4\text{s}, 3\text{d}, 4\text{p}, 5\text{s}, 4\text{d}, 5\text{p}, 6\text{s}, 4\text{f}, 5\text{d}, 6\text{p}, \ldots$. The $n + \ell$ rule (Madelung's rule) determines the order: lower $n + \ell$ fills first; ties broken by lower $n$.

**Hund's rule in chemistry.** The $2\text{p}$ subshell can hold up to $6$ electrons. By Hund's first rule, they fill as $\uparrow, \uparrow\uparrow, \uparrow\uparrow\uparrow$ (parallel spins) before pairing. This is why nitrogen has three unpaired electrons (paramagnetic), while oxygen has two.

**Screening and effective nuclear charge.** In multi-electron atoms, inner electrons screen the outer electron from the full nuclear charge. The effective nuclear charge $Z_\text{eff} = Z - \sigma$ where $\sigma$ is the screening constant. Slater's rules give a quantitative estimate. $Z_\text{eff}$ sets the size and energy of the orbitals.

**Spin–orbit coupling.** The electron's spin interacts with the magnetic field of its orbital motion (in the electron's rest frame). The coupling adds a term $H_{SO} = \xi(r) \vec{L} \cdot \vec{S}$ to the Hamiltonian. The total angular momentum $\vec{J} = \vec{L} + \vec{S}$ is conserved; the eigenvalues are $j = |\ell \pm 1/2|$. Spin–orbit coupling is the origin of the fine structure of atomic spectra.

**The anomalous Zeeman effect.** With spin, the magnetic moment is $\vec{\mu} = -(e/2m)(\vec{L} + g_s \vec{S})$. The energy in a field $B$ is $-\vec{\mu} \cdot \vec{B}$. The Landé g-factor accounts for the contribution of both $L$ and $S$:

$$g_J = 1 + \frac{J(J+1) + S(S+1) - L(L+1)}{2 J(J+1)}.$$

The Zeeman splitting is $\Delta E = g_J m_J \mu_B B$, where $\mu_B = e\hbar/(2m)$ is the Bohr magneton.

**Identical particles and statistics.** Bosons (integer spin) have symmetric wavefunctions; fermions (half-integer spin) have antisymmetric wavefunctions. This is the *spin–statistics theorem*. The Pauli principle is a special case.

**Quantum information.** Spin-1/2 is the prototypical qubit. Quantum computing uses the manipulation of spin states for logical operations. Entanglement (in the spin states of two particles) is the key resource of quantum information.

## Key Ideas
- Spin-1/2: $s = 1/2$, $m_s = \pm 1/2$, with operators obeying $[S_i, S_j] = i \hbar \epsilon_{ijk} S_k$.
- Pauli principle: no two identical fermions in the same state.
- Slater determinant: antisymmetrised many-electron wavefunction.
- Periodic table built by Aufbau principle: fill lowest-energy orbitals, respect Pauli.
- Hund's rules: maximise $S$, then $L$, then apply $J$ rule.
- Spin–orbit coupling: $\vec{L} \cdot \vec{S}$ term, fine structure.

## Worked Examples
**Example 1 — Spin expectation.** For spin up $|\uparrow\rangle = (1, 0)^T$: $\langle S_z \rangle = \hbar/2$. $\langle S_x \rangle = 0$. $\langle S^2 \rangle = (3/4) \hbar^2$.

**Example 2 — Helium ground state.** $1\text{s}^2$. Two electrons, both in the 1s orbital, but with opposite spins (Pauli). $E \approx -79\text{ eV}$ (with corrections for electron–electron repulsion). Excited states $1\text{s} 2\text{s}$ have parallel spins (orthohelium) or antiparallel (parahelium), with different energies due to exchange.

**Example 3 — Carbon configuration.** $1\text{s}^2 2\text{s}^2 2\text{p}^2$. The two 2p electrons, by Hund's rule, have parallel spins ($S = 1$) and $L = 1$ (one $m_l = 1$, one $m_l = 0$, say). Term: $^3 P_0$ (for the ground state, $J = 0$ for less-than-half-filled p).

**Example 4 — Effective nuclear charge in sodium.** $Z = 11$, configuration $1s^2 2s^2 2p^6 3s^1$. For the 3s valence electron, Slater's rules assign a screening contribution of $0.85$ from each of the $10$ electrons in the inner shells ($n = 1, 2$). Total screening: $\sigma = 10 \times 0.85 = 8.5$, so $Z_\text{eff} = 11 - 8.5 = 2.5$. The 3s electron sees a much weaker nuclear charge than the bare $11$ — the "alkali" behaviour of sodium.

## Common Misconceptions
- **"Spin is the electron spinning."** No — the electron is a point particle. Spin is intrinsic angular momentum with no classical analogue.
- **"Pauli principle is a force."** It is not a force — it is a symmetry constraint on the wavefunction.
- **"Higher $L$ means higher energy."** Within a subshell, yes; across subshells, no. The 4s orbital is filled before 3d in potassium.
- **"Hund's rules are arbitrary."** They follow from the exchange interaction and spin–orbit coupling — they are derivable, not arbitrary.

## Connections
Spin is the foundation of magnetic phenomena in *Solid State Physics* (Sem 5) and *Atomic and Molecular Physics* (Sem 6). The Pauli principle is the basis of the periodic table, chemical bonding, and the stability of matter. Multi-electron atoms lead to molecular bonding, semiconductors, and the band structure of solids. Exchange interactions are the source of magnetism in solids.

## Quick Check
1. State the Pauli exclusion principle.
2. What is the Stern–Gerlach experiment?
3. State Hund's first rule.
4. What is a Slater determinant?
5. State the spin commutation relations.

## Takeaway
- Spin-1/2: $s = 1/2$, $m_s = \pm 1/2$.
- Pauli principle: no two identical fermions in the same state.
- Periodic table built by Aufbau + Pauli + Hund's rules.
- Spin–orbit coupling: $H_{SO} = \xi \vec{L} \cdot \vec{S}$, fine structure.
- Slater determinant: antisymmetrised many-electron wavefunction.
