***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: solid-state-physics
courseName: Solid State Physics
moduleId: solid-state-physics-module-3
moduleName: Band Theory
lessonId: solid-state-physics-m3-l2
lessonName: Bloch's Theorem and Energy Bands
lessonNumber: 8
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - solid-state-physics-m3-l1
  - differential-equations-m3-l1
learningObjectives:
  - State Bloch's theorem and explain its origin.
  - Use the Kronig–Penney model to derive band formation.
  - Describe the nearly-free electron model and the formation of gaps at the Brillouin zone boundary.
  - Sketch band structures in 1D and interpret them.
concepts:
  - Bloch's theorem
  - Periodic potential
  - Kronig–Penney model
  - Band gap
  - Brillouin zone
  - Nearly-free electrons
tags:
  - physics
  - solid-state
  - band-theory
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Bloch's Theorem and Energy Bands

## Overview
A crystalline solid has a periodic potential. Bloch's theorem says that the electron wavefunctions in such a potential are plane waves modulated by a periodic function: $\psi_k(\vec{r}) = e^{i \vec{k} \cdot \vec{r}} u_k(\vec{r})$. The energy spectrum forms bands separated by gaps — the foundation of all solid-state physics. This lesson develops Bloch's theorem, the Kronig–Penney model (a tractable 1D example), and the nearly-free electron picture that explains gap formation.

## Learning Path
- What you should already know: free electron model, periodic potentials, the reciprocal lattice.
- What this lesson adds: Bloch's theorem, band formation, the nearly-free electron model.
- What it unlocks: the classification of metals, insulators, and semiconductors; the band theory of solids; semiconductor devices.

## Core Explanation
**Bloch's theorem.** Let $V(\vec{r}) = V(\vec{r} + \vec{R})$ for all lattice vectors $\vec{R}$. Then every eigenstate of the Schrödinger equation can be written as

$$\psi_k(\vec{r}) = e^{i \vec{k} \cdot \vec{r}} u_k(\vec{r}),$$

where $u_k(\vec{r})$ is periodic with the lattice: $u_k(\vec{r}) = u_k(\vec{r} + \vec{R})$.

**Proof sketch.** The translation operator $T_{\vec{R}}$ commutes with the Hamiltonian (because $V$ is periodic). So they share eigenstates. The eigenstates of $T_{\vec{R}}$ are $e^{i \vec{k} \cdot \vec{r}}$ (up to normalisation), and the eigenvalues are $e^{i \vec{k} \cdot \vec{R}}$. The corresponding eigenstates of $H$ are the Bloch functions.

**Crystal momentum.** $\vec{k}$ is a *good quantum number* for electrons in a periodic potential. It is not the true momentum but is conserved (modulo reciprocal lattice vectors) in the absence of scattering.

**Band structure.** For each $\vec{k}$, the Schrödinger equation has a discrete set of energies $E_n(\vec{k})$ labelled by the band index $n$. The functions $E_n(\vec{k})$ are the *bands*. They are continuous in $\vec{k}$ and periodic in the reciprocal lattice: $E_n(\vec{k}) = E_n(\vec{k} + \vec{G})$.

**Brillouin zone.** The Wigner–Seitz cell of the reciprocal lattice. The bands are usually plotted for $\vec{k}$ in the first BZ, since $\vec{k}$ outside the BZ is equivalent to $\vec{k}$ inside (modulo $\vec{G}$).

**Gap labelling.** The bands are labelled by the irreducible representations of the *little group* (the subgroup of the point group that leaves $\vec{k}$ invariant). In 1D, the bands are usually labelled by the number of nodes in the wavefunction.

**Kronig–Penney model.** A 1D periodic potential: square wells of width $a$, separated by barriers of width $b$ and height $V_0$. The Schrödinger equation in each region is solved separately; the wavefunctions and their derivatives are matched at the boundaries. The result is the *dispersion relation*:

$$\cos(q a) = \frac{V_0^2 - \hbar^4 \alpha^2 \beta^2/m^2}{2 V_0 \hbar^2 \alpha \beta / m} \sinh(\beta b) \sin(\alpha a) + \cosh(\beta b) \cos(\alpha a),$$

where $\alpha = \sqrt{2 m E}/\hbar$ (in the well) and $\beta = \sqrt{2 m (V_0 - E)}/\hbar$ (in the barrier). The right-hand side must be in $[-1, 1]$ for the equation to have a solution; otherwise, the energy is in a gap.

**Band formation.** In the limit $V_0 \to 0$ (no potential), the energy is $\hbar^2 k^2/(2m)$ (free electrons). As $V_0$ increases, gaps open at the Brillouin zone boundaries ($q = \pm \pi/a$). The bands get narrower (the electrons are more localised); the gaps grow.

**Nearly-free electron model.** Start with free electrons; turn on a weak periodic potential perturbatively. The unperturbed energies are $E^0_k = \hbar^2 |\vec{k}|^2/(2m)$. At a Brillouin zone boundary, two free-electron states with $\vec{k}$ and $\vec{k} - \vec{G}$ are degenerate (have the same energy). The potential $V_{\vec{G}}$ couples them and splits the energies by $2 |V_{\vec{G}}|$. A band gap opens.

**Two-state degeneracy at BZ boundary.** In 1D, the state at $k = \pi/a$ is degenerate with the state at $k = \pi/a - 2\pi/a = -\pi/a$. The potential $V_G$ (with $G = 2\pi/a$) couples these two states and splits them into a higher and a lower energy. The splitting is $2 |V_{2\pi/a}|$.

**General gap formula.** At a Brillouin zone boundary, the gap has size $2 |V_{\vec{G}}|$, where $V_{\vec{G}}$ is the Fourier component of the potential at the reciprocal lattice vector $\vec{G}$. The first gap (at the smallest $|\vec{G}|$) is the largest, because $V_{\vec{G}}$ generally decreases with $|\vec{G}|$.

**Brillouin zones.** The first BZ is the Wigner–Seitz cell of the reciprocal lattice. The second BZ is the set of points closer to the second-nearest reciprocal lattice points than to the first; the third, etc. The free-electron energies at the BZ boundaries give the gaps.

**Tight binding.** The opposite limit: start with isolated atoms; turn on the interatomic coupling. The atomic levels broaden into bands. For an $s$ orbital, the band has width $\sim 2 |J|$ where $J$ is the hopping integral. The tight-binding dispersion is $\epsilon(\vec{k}) = \epsilon_0 - \alpha - 2 \gamma (\cos k_x a + \cos k_y a + \cos k_z a)$ for the simple cubic lattice with nearest-neighbour hopping $\gamma$.

**Wannier functions.** A localised basis for the bands, dual to the Bloch functions. Tight-binding Hamiltonians are naturally expressed in terms of Wannier functions. Used in modern electronic structure calculations.

**Effective mass near band edges.** Near a band minimum at $\vec{k}_0$, $E(\vec{k}) = E_0 + \hbar^2 |\vec{k} - \vec{k}_0|^2 / (2 m^*)$. The effective mass $m^*$ is determined by the band curvature. $m^* > 0$ at a minimum (electron-like); $m^* < 0$ at a maximum (hole-like).

**Holes.** An unoccupied state near the top of a filled band behaves as a positively charged particle — a *hole*. The hole's effective mass is the negative of the electron's effective mass; the hole's $\vec{k}$ is the negative of the missing electron's $\vec{k}$. This is the basis of $p$-type semiconductor physics.

**Direct and indirect band gaps.** A *direct* gap is at the same $\vec{k}$ for valence and conduction band extrema. An *indirect* gap requires a change of $\vec{k}$ (and hence a phonon) for optical transitions. Si has an indirect gap; GaAs has a direct gap.

**Optical absorption.** A photon can excite an electron from the valence to the conduction band, provided $h \nu > E_g$. For a direct gap, the transition is vertical in $\vec{k}$ (no phonon needed). For an indirect gap, a phonon is also required; the transition is much weaker.

**Density of states and the band gap.** The DOS is zero in the gap. Near the band edge, $g(E) \propto \sqrt{E - E_c}$ (3D) or $g(E) = $ const (2D). The specific heat, conductivity, and optical absorption all depend on the DOS.

**Band structure of common semiconductors.** Si: indirect gap $1.1\text{ eV}$ at $\vec{k} = 0.85 (2\pi/a, 0, 0)$ (near the $X$ point). GaAs: direct gap $1.42\text{ eV}$ at $\Gamma$. Ge: indirect gap $0.67\text{ eV}$ at $L$. InP: direct gap $1.35\text{ eV}$.

**Band structure of common metals.** Cu: a half-filled $sp$ band crosses the Fermi level; $d$-bands are filled and lie below. The Fermi surface is approximately spherical but with necks touching the BZ boundary at $L$.

**Alkali metals.** Na, K, Rb, Cs: nearly-free electron metals. The Fermi surface is almost spherical. The $E$ vs. $k$ is parabolic to a good approximation.

**Transition metals.** Fe, Co, Ni: narrow $d$-bands dominate. High density of states at $E_F$ → large $\gamma$, magnetic moments, tendency to magnetism. Fermi surfaces are complex.

**Insulators and semiconductors.** Si, Ge, GaAs: open band gap. Si: $1.1\text{ eV}$; GaAs: $1.4\text{ eV}$; diamond: $5.5\text{ eV}$. Wide-gap insulators: Al$_2$O$_3$, SiO$_2$, NaCl. All have valence band full, conduction band empty.

**Topological insulators.** Bi$_2$Se$_3$, Bi$_2$Te$_3$: bulk insulator with conducting surface states. The band gap is "inverted" by spin–orbit coupling, and the surface states are protected by topology.

**Weyl and Dirac semimetals.** Materials with linear band crossings near $E_F$. Electrons behave as massless relativistic particles. The transport shows unusual effects (chiral anomaly, negative magnetoresistance).

**Metal–insulator transition.** As the band gap is closed (by doping, pressure, or composition), a material goes from insulator to metal. The transition can be continuous (Anderson transition) or discontinuous (Mott transition). Active research area.

**Hubbard model.** A simple model of interacting electrons on a lattice: $H = -t \sum c^\dagger_{i\sigma} c_{j\sigma} + U \sum n_{i\uparrow} n_{i\downarrow}$. The ratio $U/t$ controls whether the system is a metal or a Mott insulator.

**DFT (density functional theory).** The standard first-principles method for computing the band structure of real materials. Uses the electron density (not the wavefunction) as the basic variable; the exchange–correlation functional is approximated (LDA, GGA, hybrids).

**Pseudopotentials.** Replace the strong Coulomb potential of the core electrons with a weaker "pseudo" potential that reproduces the valence-electron behaviour. The plane-wave basis can then be used efficiently.

**Tight binding vs. plane waves.** Tight binding: localised basis (atomic orbitals), good for narrow bands and large systems. Plane waves: delocalised basis, good for nearly-free electrons and standard DFT.

**$k \cdot p$ theory.** A perturbative method for the band structure near a specific $\vec{k}_0$. The Hamiltonian is expanded to second order in $\vec{k} - \vec{k}_0$, with the effective mass as a parameter. Used for the band structure of direct-gap semiconductors (GaAs, InP) and for understanding spin–orbit coupling.

**Effective Hamiltonian.** A reduced Hamiltonian that acts within a subspace of bands (e.g. the conduction and valence bands) and reproduces the relevant low-energy physics. The basis is the $\vec{k} \cdot \vec{p}$ basis. Used in semiconductor physics.

**Kane model.** An effective Hamiltonian for the band structure near the $\Gamma$ point in direct-gap semiconductors, including spin–orbit coupling. Gives the band-edge effective masses and the non-parabolicity.

**Density of states in 2D.** For a 2D parabolic band, $g(E) = m^*/(\pi \hbar^2)$ — a constant. The lack of energy dependence leads to unusual thermodynamic and transport properties (e.g. quantum Hall).

**Landau levels.** In a magnetic field, the free-electron spectrum is replaced by Landau levels at $E_n = \hbar \omega_c (n + 1/2)$, where $\omega_c = eB/m$. Each level is highly degenerate (proportional to the area of the sample). The 2D density of states is a series of delta functions, broadened by disorder. The basis of the quantum Hall effect.

**Quasi-particles and bands.** The band picture describes single-electron states. The actual excitations of the solid are quasi-particles (electrons in the partially-filled band, holes in the empty band) with renormalised masses and finite lifetimes.

**Why is the band structure so useful?** Because it determines essentially all the electronic properties: conductivity, optical absorption, magnetism, superconductivity, thermal transport. Computing and understanding the band structure is the foundation of modern materials science.

**Effective mass tensor.** In general, the effective mass is a tensor: $(1/m^*)_{ij} = (1/\hbar^2) \partial^2 E/\partial k_i \partial k_j$. The mass is anisotropic; in silicon, the conduction band minima are ellipsoidal, not spherical.

**Cyclotron resonance.** Measures the cyclotron mass directly. A microwave-frequency field is absorbed when the frequency matches the cyclotron frequency of electrons in a static magnetic field. The mass anisotropy is mapped out.

**Optical transitions.** A photon's electric field couples to the dipole moment of the electron. The transition rate is proportional to the joint density of states (initial and final) and the matrix element of the dipole operator.

**Direct vs. indirect transitions.** A direct transition (same $\vec{k}$) is fast ($\sim 10^{-9}\text{ s}$). An indirect transition (with a phonon) is slow ($\sim 10^{-3}\text{ s}$). The difference is why GaAs LEDs are efficient but Si LEDs are not (Si has an indirect gap).

**Effective mass theory.** The $\vec{k} \cdot \vec{p}$ method gives the effective masses and non-parabolicity. Combined with deformation potentials, it gives the band structure near a band extremum under stress.

**Conduction band valley.** A local minimum of the conduction band. Si has 6 equivalent valleys along $\Delta$. GaAs has 1 valley at $\Gamma$. The number of valleys affects transport (intervalley scattering, piezoresistance).

**Valence band structure.** Three bands at $\Gamma$ (in zinc-blende semiconductors): heavy hole, light hole, and split-off (due to spin–orbit coupling). The split-off energy $\Delta_\text{so}$ is important for optical transitions.

**Tight-binding parameters.** For a real material, the hopping integrals $t$ between orbitals on different atoms are fitted to band-structure calculations or experimental data. The Slater–Koster parameters are a standard parameterisation.

**Linear muffin-tin orbital (LMTO) method.** A standard first-principles band structure method. Uses atom-centred orbitals; fast and accurate for close-packed metals.

**Density of states in graphene.** Linear: $g(E) \propto |E|$ (2D Dirac cones at the $K$ and $K'$ points). Van Hove singularities at the $M$ points. Unusual for a 2D material.

**Weyl nodes.** Points in 3D momentum space where two bands cross linearly, with the dispersion $\epsilon(\vec{q}) = \pm v_F |\vec{q}|$ ($\vec{q}$ measured from the node). Weyl nodes are topologically protected; they come in pairs of opposite chirality.

**Chirality.** A Weyl node has a chirality $\pm 1$, determined by the sign of the determinant of the velocity matrix. The integral of the Berry curvature around the node is $2 \pi$ times the chirality.

**Anomalous Hall effect.** A contribution to the Hall conductivity that depends on the integral of the Berry curvature over occupied states. For Weyl semimetals, it is determined by the separation of the Weyl nodes.

## Key Ideas
- Bloch: $\psi = e^{i \vec{k} \cdot \vec{r}} u(\vec{r})$.
- Bands and gaps, Brillouin zone.
- Free electrons: gap opens at BZ boundary, size $2 |V_{\vec{G}}|$.
- Tight binding: bands from atomic levels.
- Effective mass $m^*$, holes, effective mass tensor.

## Worked Examples
**Example 1 — Kronig–Penney.** For $V_0 = 10\text{ eV}$, $a = b = 0.5\text{ nm}$, $m = m_e$: the bands have width $\sim 0.1\text{ eV}$ and gaps $\sim 5\text{ eV}$. (Numbers depend on the parameters.)

**Example 2 — Nearly-free electron gap.** A 1D crystal with lattice constant $a$ and a weak periodic potential $V(x) = 2 V_G \cos(2 \pi x/a)$. The first gap is at $k = \pi/a$, with size $2 V_G$. For $V_G = 1\text{ eV}$, the gap is $2\text{ eV}$.

**Example 3 — Tight-binding band width.** For a simple cubic lattice with nearest-neighbour hopping $t = 0.5\text{ eV}$: the band has width $2 \times 3 \times 0.5 = 3\text{ eV}$ (from $-6 t$ at $\Gamma$ to $+6 t$ at the corner of the BZ). The bandwidth is $12 t$ (from $-6 t$ to $+6 t$).

**Example 4 — Effective mass of GaAs.** The conduction band minimum at $\Gamma$ has $m^*/m_e \approx 0.067$ (very light). The heavy hole has $m^*/m_e \approx 0.5$; the light hole $\approx 0.087$. The split-off band is at $\Delta_\text{so} = 0.34\text{ eV}$ below the valence band edge.

**Example 5 — Cyclotron mass.** Cu: extremal cyclotron mass from de Haas–van Alphen: $m_c \approx 1.4 m_e$ (larger than the free-electron mass $m_e$ due to band-structure effects).

## Common Misconceptions
- **"Band theory assumes free electrons."** No — it includes the periodic potential perturbatively (nearly-free) or exactly (numerically).
- **"The band gap is the energy of the photon that excites the electron."** Almost — for a direct gap, the photon energy is just above $E_g$. For indirect, phonons are also involved.
- **"All semiconductors are the same."** No — they have very different band structures (direct vs. indirect, different masses, different spin–orbit splittings).
- **"Tight binding is just an approximation."** It is exact in the atomic limit, and with enough orbitals and neighbours, it can reproduce any band structure.

## Connections
Band theory is the foundation of all of solid-state physics. It determines the electrical, optical, magnetic, and thermal properties of every solid. The modern extensions — topological insulators, Weyl semimetals, Mott insulators — are the frontier of the field.

## Quick Check
1. State Bloch's theorem.
2. Where do band gaps open in the nearly-free electron model?
3. What is the Kronig–Penney model?
4. What is the effective mass?
5. Distinguish direct and indirect band gaps.

## Takeaway
- Bloch: $\psi = e^{i \vec{k} \cdot \vec{r}} u(\vec{r})$.
- Bands: $E_n(\vec{k})$; gaps at BZ boundaries.
- Nearly-free: gap $2 |V_{\vec{G}}|$.
- Tight binding: bands from atomic levels.
- Effective mass $m^*$ from band curvature.
