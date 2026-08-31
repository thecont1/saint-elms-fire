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
lessonId: introduction-to-quantum-mechanics-m3-l2
lessonName: Hydrogen Atom — Quantum Numbers and Orbitals
lessonNumber: 8
moduleNumber: 3
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - introduction-to-quantum-mechanics-m3-l1
learningObjectives:
  - Separate the hydrogen Schrödinger equation in spherical coordinates.
  - Identify the quantum numbers $n, \ell, m$ and their allowed values.
  - State the energy spectrum and degeneracy.
  - Sketch the shapes of the s, p, and d orbitals.
concepts:
  - Hydrogen atom
  - Quantum numbers n, l, m
  - Spherical harmonics
  - Laguerre polynomials
  - Degeneracy
  - Orbital shapes
tags:
  - physics
  - quantum-mechanics
  - hydrogen-atom
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Hydrogen Atom — Quantum Numbers and Orbitals

## Overview
The hydrogen atom is the most important solvable quantum-mechanical problem. Solving the Schrödinger equation in three dimensions for the Coulomb potential $V(r) = -e^2/(4 \pi \varepsilon_0 r)$ gives the famous energy spectrum, the quantum numbers $n, \ell, m$, and the *orbitals* — the wavefunctions that determine the probability of finding the electron at each point in space. The hydrogen atom is the foundation of atomic physics, the periodic table, and chemistry. This lesson separates the Schrödinger equation, identifies the quantum numbers, and surveys the shapes of the orbitals.

## Learning Path
- What you should already know: the Schrödinger equation in 1D, the central-force problem, the angular-momentum algebra.
- What this lesson adds: separation of variables in 3D, the quantum numbers, the shapes of the orbitals, and the energy spectrum.
- What it unlocks: multi-electron atoms (Sem 6), the periodic table, molecular bonding, and the chemistry of materials.

## Core Explanation
**The Coulomb potential.** $V(r) = -e^2/(4 \pi \varepsilon_0 r)$ for an electron ($-e$) and a proton ($+e$). Spherically symmetric, so the natural coordinates are spherical: $(r, \theta, \phi)$.

**The Schrödinger equation in 3D.** $-\hbar^2/(2m) \nabla^2 \psi - (e^2/(4 \pi \varepsilon_0 r)) \psi = E \psi$. The Laplacian in spherical coordinates:

$$\nabla^2 = \frac{1}{r^2} \frac{\partial}{\partial r} \left(r^2 \frac{\partial \psi}{\partial r}\right) + \frac{1}{r^2 \sin\theta} \frac{\partial}{\partial \theta} \left(\sin\theta \frac{\partial \psi}{\partial \theta}\right) + \frac{1}{r^2 \sin^2\theta} \frac{\partial^2 \psi}{\partial \phi^2}.$$

**Separation of variables.** Try $\psi(r, \theta, \phi) = R(r) Y(\theta, \phi)$. Substitute. The angular equation is

$$\frac{1}{\sin\theta} \frac{\partial}{\partial \theta} \left(\sin\theta \frac{\partial Y}{\partial \theta}\right) + \frac{1}{\sin^2\theta} \frac{\partial^2 Y}{\partial \phi^2} = -\ell(\ell + 1) Y.$$

The radial equation is

$$-\frac{\hbar^2}{2m} \frac{1}{r^2} \frac{d}{dr} \left(r^2 \frac{dR}{dr}\right) + \frac{\hbar^2 \ell(\ell+1)}{2m r^2} R - \frac{e^2}{4 \pi \varepsilon_0 r} R = E R.$$

The separation constant $\ell(\ell + 1)$ is the eigenvalue of the angular-momentum-squared operator $L^2$.

**Spherical harmonics.** The solutions to the angular equation are the spherical harmonics $Y_\ell^m(\theta, \phi)$, with $\ell = 0, 1, 2, \ldots$ and $m = -\ell, -\ell + 1, \ldots, \ell$. They are eigenstates of $L^2$ (eigenvalue $\hbar^2 \ell(\ell+1)$) and $L_z$ (eigenvalue $m \hbar$). Examples:
- $Y_0^0 = 1/\sqrt{4\pi}$ (spherically symmetric).
- $Y_1^0 = \sqrt{3/(4\pi)} \cos\theta$ (pz-like).
- $Y_1^{\pm 1} = \mp \sqrt{3/(8\pi)} \sin\theta e^{\pm i\phi}$ (px ± i py).

**Radial equation.** The equation for $R(r)$ has a singular point at $r = 0$ and an exponential behaviour at infinity. The square-integrable solutions exist only for discrete values of $E$ (for bound states, $E < 0$). The bound-state energies are

$$E_n = -\frac{m e^4}{2 (4 \pi \varepsilon_0)^2 \hbar^2} \frac{1}{n^2} = -\frac{13.6\text{ eV}}{n^2}, \quad n = 1, 2, 3, \ldots$$

This is the same result as the Bohr model — but now derived from first principles.

**Quantum numbers.** Three quantum numbers emerge:
- $n = 1, 2, 3, \ldots$ (principal): determines the energy and the radial scale.
- $\ell = 0, 1, 2, \ldots, n - 1$ (orbital): determines the angular momentum $L = \sqrt{\ell(\ell+1)} \hbar$.
- $m = -\ell, \ldots, \ell$ (magnetic): determines the $z$-component $L_z = m \hbar$.

**Notation.** States are labelled by $n$ and a letter for $\ell$: s for $\ell = 0$, p for $\ell = 1$, d for $\ell = 2$, f for $\ell = 3$. So $1\text{s}$ is $n=1, \ell=0$; $2\text{p}$ is $n=2, \ell=1$; and so on.

**Radial wavefunctions.** $R_{n\ell}(r)$ involves associated Laguerre polynomials. The first few:
- $R_{10} = 2 (1/a_0)^{3/2} e^{-r/a_0}$ (1s).
- $R_{20} = (1/(2\sqrt{2}))(1/a_0)^{3/2} (2 - r/a_0) e^{-r/(2 a_0)}$ (2s).
- $R_{21} = (1/(2\sqrt{6}))(1/a_0)^{3/2} (r/a_0) e^{-r/(2 a_0)}$ (2p).

**Bohr radius.** $a_0 = 4 \pi \varepsilon_0 \hbar^2/(m e^2) \approx 0.529 \text{ Å}$ — the natural unit of length for hydrogen.

**Degeneracy.** Each $E_n$ has degeneracy $n^2$: there are $n$ values of $\ell$ (from $0$ to $n - 1$) and $2 \ell + 1$ values of $m$ for each. Total: $\sum_{\ell=0}^{n-1} (2 \ell + 1) = n^2$. This degeneracy is a special feature of the $1/r$ Coulomb potential.

**Orbital shapes.** The probability density $|\psi|^2$ gives the electron density. The shapes:
- s orbitals ($\ell = 0$): spherically symmetric. The 1s is a single peak; 2s has a node.
- p orbitals ($\ell = 1$): two-lobed, with a node at the nucleus. The three p orbitals ($p_x, p_y, p_z$) are aligned along the axes.
- d orbitals ($\ell = 2$): more complex, with four lobes (e.g. $d_{xy}$, $d_{z^2}$).

**Radial nodes.** The radial wavefunction $R_{n\ell}$ has $n - \ell - 1$ radial nodes (spheres where the wavefunction is zero). The total number of nodes (radial + angular) is $n - 1$.

**Selection rules.** Atomic transitions obey $\Delta \ell = \pm 1$ (electric dipole selection rule). So 1s $\to$ 2s is forbidden, 1s $\to$ 2p is allowed. The transition rate depends on the matrix element $\langle f | \vec{r} | i \rangle$ via the dipole operator.

**Lyman, Balmer, Paschen series.** As in the Bohr model: $1/\lambda = R (1/n'^2 - 1/n^2)$ for $n \to n'$ transitions, with $R$ the Rydberg constant. Lyman: $n' = 1$ (UV). Balmer: $n' = 2$ (visible). Paschen: $n' = 3$ (IR).

**Multi-electron atoms.** For atoms with more than one electron, the Schrödinger equation is not exactly solvable (each electron interacts with all others). The *independent-particle approximation* treats each electron as moving in an effective potential. This gives the *shell structure* of the periodic table: $1\text{s}^2, 2\text{s}^2 2\text{p}^6, 3\text{s}^2 3\text{p}^6 4\text{s}^2 3\text{d}^{10}, \ldots$

**Exchange symmetry.** Electrons are fermions, so the many-electron wavefunction must be antisymmetric under exchange (Pauli exclusion principle). This is the basis of the Aufbau principle and the structure of the periodic table.

**Spin-orbit coupling.** An electron's spin interacts with the magnetic field of its orbital motion in the nucleus's frame. This splits the energy levels slightly (fine structure), giving the total angular momentum $\vec{J} = \vec{L} + \vec{S}$ and the quantum number $j = \ell \pm 1/2$ (for $\ell \ge 1$).

**The Zeeman effect (preview).** A magnetic field lifts the $m$-degeneracy, splitting spectral lines. The normal Zeeman effect (without spin) gives a triplet; the anomalous Zeeman effect (with spin) gives more complex patterns.

## Key Ideas
- Hydrogen Schrödinger equation separates in spherical coordinates.
- Three quantum numbers: $n, \ell, m$.
- Energy: $E_n = -13.6\text{ eV}/n^2$, degeneracy $n^2$.
- Orbitals: s, p, d, f with characteristic shapes.
- $L^2$ has eigenvalue $\hbar^2 \ell(\ell+1)$; $L_z$ has eigenvalue $m \hbar$.

## Worked Examples
**Example 1 — Bohr radius.** $a_0 = 4 \pi \varepsilon_0 \hbar^2/(m e^2) = 4 \pi \times 8.85 \times 10^{-12} \times (1.05 \times 10^{-34})^2 / (9.11 \times 10^{-31} \times (1.6 \times 10^{-19})^2) \approx 5.29 \times 10^{-11}\text{ m}$.

**Example 2 — 2p orbital.** $\ell = 1, m = 0$: $Y_1^0 = \sqrt{3/(4\pi)} \cos\theta$. Combined with $R_{21}$: $\psi_{210}(r, \theta, \phi) = R_{21}(r) Y_1^0(\theta, \phi)$. Probability density peaks along the $z$-axis.

**Example 3 — Lyman-$\alpha$.** $n = 2 \to n' = 1$: $E = -13.6 (1 - 1/4) = 10.2\text{ eV}$. $\lambda = h c/E = 1240/10.2 = 121.6\text{ nm}$ (UV).

**Example 4 — Degeneracy of $n = 3$.** $n = 3$ has $\ell = 0, 1, 2$ (s, p, d) and $2\ell + 1$ values of $m$ each: $1 + 3 + 5 = 9 = 3^2$. So nine states with $E = -13.6/9 \approx -1.51\text{ eV}$.

## Common Misconceptions
- **"The electron orbits the nucleus like a planet."** No — the electron is a delocalised wavefunction. The "orbit" picture is wrong; the orbital picture is correct.
- **"Higher $n$ means the electron is further out."** On average, yes — the expectation $\langle r \rangle$ grows with $n$. But the wavefunction has nodes and the radial distribution has multiple peaks.
- **"$\ell$ and $m$ are independent of $n$."** No — $\ell$ ranges from $0$ to $n - 1$; $m$ from $-\ell$ to $\ell$.
- **"Degeneracy means the states are physically different."** In the absence of external fields, the degenerate states are physically indistinguishable. A magnetic field lifts the degeneracy.

## Connections
The hydrogen atom is the prototype for all of atomic physics. The orbitals and the quantum numbers underlie the periodic table, molecular bonding, and chemical reactivity. The same separation-of-variables technique works in three dimensions for any central potential, including the three-dimensional isotropic harmonic oscillator (in *Solid State Physics*) and the shell model potential (in *Nuclear Physics*).

## Quick Check
1. State the three quantum numbers of the hydrogen atom and their allowed values.
2. State the energy spectrum of hydrogen.
3. What is the degeneracy of the $n = 4$ level?
4. Sketch the shape of a $2 p_z$ orbital.
5. State the relation between $L^2$ and $\ell$.

## Takeaway
- Quantum numbers: $n = 1, 2, \ldots$; $\ell = 0, 1, \ldots, n - 1$; $m = -\ell, \ldots, \ell$.
- Energy: $E_n = -13.6\text{ eV}/n^2$, degeneracy $n^2$.
- $L^2 = \hbar^2 \ell(\ell+1)$, $L_z = m \hbar$.
- Orbitals: s (spherical), p (two-lobed), d (four-lobed).
- Hydrogen is the basis of multi-electron atomic physics and chemistry.
