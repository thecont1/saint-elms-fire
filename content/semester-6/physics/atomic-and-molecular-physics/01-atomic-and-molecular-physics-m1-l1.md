***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: atomic-and-molecular-physics
courseName: Atomic and Molecular Physics
moduleId: atomic-and-molecular-physics-module-1
moduleName: Hydrogen and Multi-Electron Atoms
lessonId: atomic-and-molecular-physics-m1-l1
lessonName: Hydrogen Atom — Quantum Numbers and Orbitals
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - introduction-to-quantum-mechanics-m3-l2
learningObjectives:
  - State the quantum numbers of the hydrogen atom.
  - Sketch the shapes of the $1s$, $2s$, $2p$, $3s$, $3p$, $3d$ orbitals.
  - Compute the radial probability distribution.
  - Apply the selection rules for atomic transitions.
concepts:
  - Principal quantum number $n$
  - Orbital quantum number $\ell$
  - Magnetic quantum number $m$
  - Spin quantum number $m_s$
  - Orbital shapes
  - Selection rules
tags:
  - physics
  - atomic
  - hydrogen-atom
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
***

# Hydrogen Atom — Quantum Numbers and Orbitals

## Overview
The hydrogen atom is the most important solvable quantum problem and the foundation of atomic physics. Its solution gives the quantum numbers $n, \ell, m, m_s$ that label every electron state; the shapes of the *orbitals* (probability distributions) that determine chemistry; and the energy spectrum that determines atomic spectra. This lesson develops the solution, the wavefunctions, the orbital shapes, and the selection rules that govern transitions.

## Learning Path
- What you should already know: the Schrödinger equation in 3D, the separation of variables, angular momentum.
- What this lesson adds: the details of the hydrogen wavefunctions, the orbital shapes, and the selection rules.
- What it unlocks: multi-electron atoms, the periodic table, atomic spectra, and chemistry.

## Core Explanation
**The hydrogen atom.** One electron (mass $m$, charge $-e$) bound to a proton (charge $+e$, infinitely heavy). The Coulomb potential is $V(r) = -e^2/(4 \pi \varepsilon_0 r)$.

**Schrödinger equation.** $-\hbar^2/(2m) \nabla^2 \psi - (e^2/(4 \pi \varepsilon_0 r)) \psi = E \psi$. Separable in spherical coordinates: $\psi(r, \theta, \phi) = R_{n\ell}(r) Y_\ell^m(\theta, \phi)$.

**Angular part: spherical harmonics.** $Y_\ell^m(\theta, \phi)$ are the eigenfunctions of $L^2$ (eigenvalue $\hbar^2 \ell(\ell+1)$) and $L_z$ (eigenvalue $m \hbar$). $\ell = 0, 1, 2, \ldots$ (s, p, d, f, ...). $m = -\ell, \ldots, \ell$ (2$\ell + 1$ values).

**Radial part.** The equation for $R(r)$ involves the effective potential $V_\text{eff}(r) = V(r) + \hbar^2 \ell(\ell + 1)/(2 m r^2)$. The bound-state solutions have discrete energies $E_n = -13.6\text{ eV}/n^2$, with $n = 1, 2, 3, \ldots$.

**Bohr radius.** $a_0 = 4 \pi \varepsilon_0 \hbar^2/(m e^2) \approx 0.529$ Å. The natural unit of length for hydrogen.

**Radial wavefunctions.** $R_{n\ell}(r)$ involves associated Laguerre polynomials. Examples:
- $1s$: $R_{10}(r) = 2 (1/a_0)^{3/2} e^{-r/a_0}$.
- $2s$: $R_{20}(r) = (1/(2\sqrt{2}))(1/a_0)^{3/2} (2 - r/a_0) e^{-r/(2 a_0)}$.
- $2p$: $R_{21}(r) = (1/(2\sqrt{6}))(1/a_0)^{3/2} (r/a_0) e^{-r/(2 a_0)}$.

**Nodes.** The radial wavefunction $R_{n\ell}$ has $n - \ell - 1$ radial nodes (spheres where it vanishes). The spherical harmonic $Y_\ell^m$ has $\ell$ angular nodes (cones or planes). Total nodes: $n - 1$.

**Orbitals.** The probability density $|\psi_{n\ell m}|^2$. The "shape" of the orbital is the contour of constant $|\psi|^2$. The naming:
- $1s$ ($n = 1, \ell = 0$): spherically symmetric, $1$ lobe.
- $2s$ ($n = 2, \ell = 0$): spherically symmetric, $1$ radial node.
- $2p$ ($n = 2, \ell = 1$): three orbitals ($p_x, p_y, p_z$), each with two lobes along an axis, $1$ angular node (a plane).
- $3s, 3p, 3d$: similar, with more nodes.
- $3d$: five orbitals ($d_{z^2}, d_{x^2 - y^2}, d_{xy}, d_{xz}, d_{yz}$), each with two angular nodes.

**Radial probability distribution.** $P(r) dr = |R_{n\ell}(r)|^2 r^2 dr$ is the probability of finding the electron in a shell of radius $r$ and thickness $dr$. For $1s$: $P(r) = 4 r^2/a_0^3 e^{-2r/a_0}$, with maximum at $r = a_0$.

**Expectation values.** $\langle r^k \rangle = \int_0^\infty r^{k+2} |R_{n\ell}(r)|^2 dr$. The mean radius scales as $n^2 a_0$ (for the most probable radius). The mean inverse radius determines the energy.

**Hydrogen energy levels.** $E_n = -13.6\text{ eV}/n^2$. $E_1 = -13.6\text{ eV}$ (ground), $E_2 = -3.4\text{ eV}$, $E_3 = -1.51\text{ eV}$. Converging to $0$ (ionisation).

**Degeneracy.** Each $E_n$ has degeneracy $n^2$ (all $\ell < n$ and $m = -\ell, \ldots, \ell$). The Lyman series ($n' = 1$), Balmer ($n' = 2$), Paschen ($n' = 3$), Brackett ($n' = 4$), Pfund ($n' = 5$).

**Selection rules.** For electric dipole transitions, $\Delta \ell = \pm 1$, $\Delta m = 0, \pm 1$. So $1s \to 2s$ is forbidden, $1s \to 2p$ is allowed. The selection rules come from the matrix elements of the dipole operator $\vec{r}$ between the states.

**Wavelengths of transitions.** $1/\lambda = R (1/n_1^2 - 1/n_2^2)$ with $R = 1.097 \times 10^7\text{ m}^{-1}$ (Rydberg constant). Lyman-$\alpha$ ($2 \to 1$): $121.6$ nm (UV). Balmer-$\alpha$ ($3 \to 2$): $656.3$ nm (red, H$\alpha$). Balmer-$\beta$ ($4 \to 2$): $486.1$ nm (blue-green, H$\beta$).

**Spin and fine structure.** The electron has spin $s = 1/2$, with $m_s = \pm 1/2$. The total angular momentum $\vec{J} = \vec{L} + \vec{S}$ has $j = \ell \pm 1/2$. Spin-orbit coupling gives fine structure (splitting of energy levels by spin-orbit interaction).

**Lamb shift.** A small shift of the $2s_{1/2}$ level relative to $2p_{1/2}$ (which would be degenerate in the Dirac equation). Caused by quantum fluctuations of the electromagnetic field. Measured by Lamb and Retherford (1947), confirming QED.

**Hyperfine structure.** Coupling of the electron's magnetic moment to the proton's magnetic moment. The $21$ cm line of neutral hydrogen ($1s$ hyperfine transition) is a cornerstone of radio astronomy.

**Stark and Zeeman effects.** External electric (Stark) or magnetic (Zeeman) fields split the energy levels. The linear Stark effect (in hydrogen) is due to the degeneracy of opposite-$m$ states. The Zeeman effect splits the $m$ sublevels.

**Spin–orbit coupling.** The interaction of the electron's spin magnetic moment with the magnetic field of the nucleus (in the electron's frame). The Hamiltonian is $H_{SO} = \xi(r) \vec{L} \cdot \vec{S}$. The energy depends on $j$ and $\ell$.

**Selection rules for fine structure.** $\Delta j = 0, \pm 1$ (but $0 \to 0$ forbidden). $\Delta m_j = 0, \pm 1$. These follow from the Wigner–Eckart theorem.

**Hyperfine structure constant.** For hydrogen, the $1s$ hyperfine splitting is $\Delta E = (4/3) g_p \alpha^2 (m_e/m_p) E_1 \approx 5.9 \times 10^{-6}\text{ eV}$, corresponding to a frequency of $1420$ MHz (the famous 21 cm line).

**Dirac equation.** The relativistic wave equation for spin-1/2 particles. Predicts the fine structure and the existence of antimatter. The Dirac energy levels depend on $n$ and $j$: $E_{n, j} = m c^2 \left[1 + \left(\frac{\alpha}{n - j - 1/2 + \sqrt{(j + 1/2)^2 - \alpha^2}}\right)^2\right]^{-1/2}$, where $\alpha$ is the fine structure constant.

**Lamb–Retherford experiment.** Measured the splitting of the $2s_{1/2}$ and $2p_{1/2}$ levels (the Lamb shift, $\sim 1058$ MHz). Confirmed QED and the reality of vacuum fluctuations.

**Quantum numbers of hydrogen.** Four: $n$ (principal), $\ell$ (orbital), $m$ (magnetic), $m_s$ (spin). Together they specify the wavefunction (up to irrelevant constants).

**Pauli exclusion principle.** No two electrons can share all four quantum numbers. (For hydrogen, there's only one electron, but the principle is crucial for multi-electron atoms.)

**The Aufbau principle.** Multi-electron atoms fill the lowest-energy orbitals first, respecting the Pauli principle. The order is $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 5f, 6d, 7p$.

**Periodic table.** The structure of the periodic table follows from the Aufbau principle and the Pauli principle. Periods correspond to filling of shells ($n = 1, 2, 3, \ldots$). Groups correspond to similar valence configurations.

**Orbital energies in multi-electron atoms.** Not degenerate (the electron-electron interaction lifts the $\ell$-degeneracy). For a given $n$, lower $\ell$ has lower energy (more penetration to the nucleus). Order: $1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, \ldots$ (the $(n + \ell)$ rule).

**Penetration and shielding.** Inner electrons shield the outer electron from the full nuclear charge. The effective nuclear charge is $Z_\text{eff} = Z - \sigma$, with $\sigma$ the shielding constant (Slater's rules). Lower-$\ell$ orbitals penetrate closer to the nucleus (less shielding), so they are more bound.

**Radial nodes and angular nodes.** Total nodes of $\psi_{n\ell m}$: $n - 1$. Radial: $n - \ell - 1$. Angular: $\ell$. (Counted with multiplicity: a $2p$ orbital has $\ell = 1$ angular node; a $3p$ has 1 angular + 1 radial node.)

**Selection rule for hydrogen.** Electric dipole transitions: $\Delta \ell = \pm 1$. So $1s \to 2s$ is forbidden (no change in $\ell$), but $1s \to 2p$ is allowed. The transition rate is $\propto \omega^3 |\langle f | \vec{r} | i \rangle|^2$.

**Oscillator strength.** $f_{if} = (2 m \omega_{if}/3 \hbar) |\langle f | \vec{r} | i \rangle|^2$. A dimensionless measure of transition strength.

**Lifetimes and widths.** Excited states have finite lifetimes (by spontaneous emission), so their energies are uncertain by the uncertainty principle: $\Delta E \Delta t \ge \hbar/2$. The natural linewidth is $\Gamma = 1/\tau$. For hydrogen $2p$, $\tau \sim 1.6 \times 10^{-9}$ s.

**Selection rules in the dipole approximation.** Electric dipole: $\Delta \ell = \pm 1$, $\Delta m = 0, \pm 1$, $\Delta j = 0, \pm 1$ (not $0 \to 0$). Magnetic dipole: $\Delta \ell = 0$, $\Delta m = 0, \pm 1$. Electric quadrupole: $\Delta \ell = 0, \pm 2$. Magnetic quadrupole: similar. The transition strength decreases rapidly with multipole order.

**Forbidden transitions.** Transitions that violate the selection rules. They are slow but do occur (e.g. the $21$ cm line is a magnetic dipole transition, technically forbidden but observed because hydrogen is so abundant).

**The hydrogen spectrum.** The simplest atomic spectrum. Each line of the Balmer series is a transition to $n = 2$ from a higher level. Lyman ($n = 1$), Balmer ($n = 2$), etc. The wavelengths are exactly calculable from the Rydberg formula.

**Pickering series.** Ionised helium (He$^+$) has a hydrogen-like spectrum with $Z = 2$. The lines are at wavelengths $\lambda_\text{He}/\lambda_\text{H} = 1/4$ (for the same transition). The Pickering series was historically confused with hydrogen.

**Rydberg atoms.** Hydrogen-like atoms with one electron in a very high $n$ level ($n \sim 100$). Have very large radii ($\sim n^2 a_0$) and long lifetimes. Used in precision measurements and quantum information.

**Antihydrogen.** The antimatter counterpart of hydrogen. The spectrum should be identical (CPT symmetry). The ALPHA experiment at CERN has measured the antihydrogen spectrum and confirmed the symmetry to high precision.

**Positronium.** A bound state of an electron and a positron. Hydrogen-like with reduced mass $m_e/2$. Lifetimes: para-positronium (singlet) $125$ ps, ortho-positronium (triplet) $142$ ns.

**Muonic hydrogen.** A proton bound to a muon (instead of an electron). Smaller Bohr radius ($a_\mu = a_0 m_e/m_\mu \approx 185$ fm). The $2s \to 1s$ transition frequency has been measured precisely. Sensitive to the proton size and the Rydberg constant.

**Lamb shift in hydrogen.** The measured $2s_{1/2} - 2p_{1/2}$ splitting of $1057.845$ MHz is a triumph of QED. Theoretically: $\sim 1058$ MHz. Agreement at the kHz level.

**Proton radius puzzle.** The proton charge radius from muonic hydrogen ($\sim 0.84$ fm) is discrepant with the value from electronic hydrogen and electron-proton scattering ($\sim 0.88$ fm). The "proton radius puzzle" — possibly a sign of new physics, or a subtle systematic.

**Positronium and antihydrogen as QED tests.** Pure leptonic systems (no hadrons). The cleanest tests of bound-state QED.

**Hyperfine splitting of hydrogen.** $1420.405$ MHz. Used in radio astronomy to map the Milky Way's neutral hydrogen.

**Energy scale of atomic physics.** $1$ eV $\sim 11,600$ K $\sim 10^4$ cm$^{-1}$ (wavenumber). Atomic energies are a few eV; fine structure is $\sim 10^{-3}$ eV; hyperfine is $\sim 10^{-6}$ eV. The Lamb shift is $\sim 10^{-6}$ eV.

**Selection rules from parity.** Electric dipole transitions connect states of opposite parity. The parity of hydrogen eigenstates is $(-1)^\ell$. So $\Delta \ell = \pm 1$ (odd). Magnetic dipole connects states of the same parity ($\Delta \ell = 0$). Electric quadrupole: $\Delta \ell = 0, \pm 2$.

**Wigner–Eckart theorem.** A matrix element of a tensor operator $T_q^{(k)}$ between angular momentum eigenstates factorises into a *reduced matrix element* (physics) and a *Clebsch–Gordan coefficient* (geometry). The selection rules come from the CG coefficients being zero unless the triangle rule is satisfied.

**Selection rules summarised.** Electric dipole: $\Delta \ell = \pm 1$, $\Delta m = 0, \pm 1$, $\Delta j = 0, \pm 1$ (not $0 \to 0$), parity changes. Magnetic dipole: $\Delta \ell = 0$, $\Delta j = 0, \pm 1$, no parity change. Higher multipoles: more complex rules.

**Why hydrogen matters.** Hydrogen is the only exactly solvable many-body quantum system. Everything else is approximation or numerics. The hydrogen solution is the foundation of all atomic physics.

**Connection to other hydrogen-like ions.** He$^+$, Li$^{2+}$, etc. have hydrogen-like spectra with $E_n = -Z^2 \cdot 13.6\text{ eV}/n^2$. The wavefunctions are the same with $r$ scaled by $1/Z$ and the Bohr radius by $1/Z$.

**Connection to quantum mechanics.** The hydrogen solution uses everything from *Introduction to Quantum Mechanics*: the Schrödinger equation, separation of variables, angular momentum, the radial equation, eigenvalues and eigenfunctions, the selection rules, the spin–orbit coupling, and the perturbation theory that gives the fine structure.

## Key Ideas
- Quantum numbers: $n, \ell, m, m_s$ for hydrogen.
- Energy: $E_n = -13.6\text{ eV}/n^2$, degeneracy $n^2$.
- Orbitals: $1s, 2s, 2p, 3s, 3p, 3d, \ldots$.
- Selection rules: $\Delta \ell = \pm 1$, $\Delta m = 0, \pm 1$.
- Spin–orbit coupling: fine structure.

## Worked Examples
**Example 1 — Hydrogen radius.** For $1s$, the most probable radius is $a_0 = 0.529$ Å. The mean radius is $\langle r \rangle = (3/2) a_0$ for $1s$, $6 a_0$ for $2s$, $5 a_0$ for $2p$, $15 a_0$ for $3s$, $12.5 a_0$ for $3p$, $10.5 a_0$ for $3d$. The factor is $n^2 [1 + (1/2)(1 - \ell(\ell+1)/n^2)]$, but this needs a derivation.

**Example 2 — Balmer-$\alpha$ wavelength.** $3 \to 2$: $1/\lambda = R (1/4 - 1/9) = 5R/36 = 5 \times 1.097 \times 10^7/36 \approx 1.524 \times 10^6\text{ m}^{-1}$. $\lambda = 1/1.524 \times 10^6 \approx 6.563 \times 10^{-7}\text{ m} = 656.3$ nm. ✓

**Example 3 — Energy levels in eV.** $E_1 = -13.6$ eV. $E_2 = -3.4$ eV. $E_3 = -1.51$ eV. $E_4 = -0.85$ eV. Lyman limit: $13.6$ eV (ionisation from $n = 1$). Balmer limit: $3.4$ eV.

**Example 4 — Spin–orbit splitting in sodium.** The $3p$ level of Na is split by spin–orbit into $3p_{1/2}$ and $3p_{3/2}$, separated by $\sim 17$ cm$^{-1}$. This is the famous Na D doublet (589.0 and 589.6 nm).

**Example 5 — $2p$ lifetime in hydrogen.** The transition $2p \to 1s$ has $\tau \approx 1.6$ ns. From Fermi's golden rule, the spontaneous emission rate is $A = \omega^3 |\langle 1s | \vec{r} | 2p \rangle|^2/(3 \pi \varepsilon_0 \hbar c^3)$. For the $2p \to 1s$ transition, this gives the correct lifetime to within a factor of a few.

## Common Misconceptions
- **"An electron in a $1s$ orbit is at the Bohr radius."** It is most likely to be found at $a_0$, but it has a probability distribution extending from $0$ to $\infty$.
- **"Different $m$ levels have the same energy in hydrogen."** True in the absence of external fields. In a magnetic field, they split (Zeeman effect).
- **"Selection rules are absolute."** They are for electric dipole. Other multipoles have different rules. Forbidden transitions do occur (slowly).
- **"Spin–orbit coupling is small."** In heavy atoms, it is comparable to the orbital energies (the fine structure of the Balmer lines is large).

## Connections
The hydrogen atom is the foundation of atomic physics: the energy levels, the orbitals, the selection rules. Multi-electron atoms are built on top (Hartree–Fock, DFT). The periodic table is the chemistry. The spectrum is the probe (astronomy, lasers, atomic clocks).

## Quick Check
1. State the quantum numbers of the hydrogen atom.
2. State the energy spectrum.
3. What are the selection rules for electric dipole transitions?
4. Sketch the $2p_z$ orbital.
5. What is the most probable radius of the $1s$ electron?

## Takeaway
- Quantum numbers: $n, \ell, m, m_s$.
- Energy: $E_n = -13.6\text{ eV}/n^2$, degeneracy $n^2$.
- Orbitals: s, p, d, f, with characteristic shapes.
- Selection rules: $\Delta \ell = \pm 1$, $\Delta m = 0, \pm 1$.
- Fine structure: spin–orbit coupling splits levels.
