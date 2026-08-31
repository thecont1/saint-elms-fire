***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: atomic-and-molecular-physics
courseName: Atomic and Molecular Physics
moduleId: atomic-and-molecular-physics-module-3
moduleName: Molecules and Bonds
lessonId: atomic-and-molecular-physics-m3-l3
lessonName: Molecular Orbital Theory and Band Spectra
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - atomic-and-molecular-physics-m3-l1
  - atomic-and-molecular-physics-m3-l2
  - solid-state-physics-m2-l1
learningObjectives:
  - Construct the molecular-orbital diagram of a homonuclear diatomic and assign electrons to bonding and antibonding orbitals.
  - Explain the Franck–Condon principle and its consequences for the shape of electronic-vibrational bands.
  - Distinguish band spectra of molecules from line spectra of atoms and link the band structure to the energy-level density.
concepts:
  - Molecular orbital
  - Bonding and antibonding orbitals
  - Sigma and pi bonds
  - Franck–Condon principle
  - Band spectra
  - Deslandres table
tags:
  - physics
  - molecular-physics
  - spectroscopy
  - quantum-chemistry
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Molecular Orbital Theory and Band Spectra

## Overview

The molecular-orbital (MO) picture is the natural extension of atomic orbital theory to molecules: orbitals extend over the whole molecule, are filled according to the Aufbau principle, and have well-defined symmetries. For diatomics, the MO diagram provides a clear organisation of bonding and antibonding orbitals, predicts bond orders, and explains the trends in ionisation energy, dissociation energy, and magnetic behaviour across the second-row diatomics. When a molecule undergoes an electronic transition, the geometry of the upper and lower states usually differ, and the Franck–Condon principle tells us which vibrational levels of the upper state are populated. The result is a band spectrum — a structured but broad emission or absorption feature that encodes a wealth of information about the molecule. This lesson closes the atomic and molecular physics sequence by bringing together MO theory, the Born–Oppenheimer separation, and the structure of electronic-vibrational spectra.

## Learning Path

- **What you should already know**: the Born–Oppenheimer separation and the rigid-rotor/harmonic-oscillator energy levels (Lesson m3-l2); the MO description of covalent bonds (Lesson m3-l1); the energy bands of solids (solid-state physics, Semester 5); the basic symmetries of atomic orbitals.
- **What this lesson adds**: the construction of MO diagrams for homonuclear diatomics, the assignment of electrons to bonding and antibonding orbitals, the calculation of bond orders, and the use of the Franck–Condon principle to understand band shapes.
- **What later lessons this will unlock**: applications in atmospheric spectroscopy, the assignment of diffuse interstellar bands, the spectroscopy of radicals and excited states, and the link between molecular electronic structure and reactivity.

## Core Explanation

### Building molecular orbitals

The MO description starts from the atomic orbitals of the separated atoms and combines them into orbitals that extend over the whole molecule. For two atoms A and B, each with a set of atomic orbitals $\{\phi_{A,i}\}$ and $\{\phi_{B,i}\}$, the molecular orbitals are linear combinations

$$\psi_i = c_{A,i} \phi_{A,i} + c_{B,i} \phi_{B,i},$$

with coefficients chosen to diagonalise the molecular Hamiltonian. The simplest case is two 1s atomic orbitals forming the $\sigma_{g}(1s)$ and $\sigma_u^*(1s)$ molecular orbitals of H$_2$:

$$\sigma_g = \frac{1}{\sqrt{2(1+S)}}(\phi_{A,1s} + \phi_{B,1s}),$$
$$\sigma_u^* = \frac{1}{\sqrt{2(1-S)}}(\phi_{A,1s} - \phi_{B,1s}).$$

The symmetric combination is lower in energy (bonding) and the antisymmetric combination is higher (antibonding, denoted with a star). For H$_2$, the two electrons occupy $\sigma_g$, giving a bond order of 1.

The same pattern applies to other shells. For $n = 2$, the atomic orbitals are 2s, 2p$_x$, 2p$_y$, 2p$_z$. The internuclear axis is conventionally taken along $z$, so 2p$_z$ on each atom forms a $\sigma$ bond (head-on overlap), while 2p$_x$ and 2p$_y$ form $\pi$ bonds (sideways overlap). The resulting MOs for a homonuclear diatomic are, in order of increasing energy:

1. $\sigma_g(1s)$, $\sigma_u^*(1s)$: from 1s.
2. $\sigma_g(2s)$, $\sigma_u^*(2s)$: from 2s.
3. $\sigma_g(2p)$, $\sigma_u^*(2p)$: from 2p$_z$ (head-on).
4. $\pi_u(2p)$, $\pi_g^*(2p)$: from 2p$_x$ and 2p$_y$ (sideways).

The order of the $\sigma_g(2p)$ and $\pi_u(2p)$ levels is reversed between the early second-row diatomics (Li$_2$ through N$_2$) and the later ones (O$_2$, F$_2$, Ne$_2$). This is a subtle effect of $s$–$p$ mixing, which is large for the lighter elements and small for the heavier ones.

The standard homonuclear MO diagram has 10 valence orbitals (for second-row atoms): 4 bonding ($\sigma_g(2s), \sigma_u^*(2s), \pi_u(2p), \sigma_g(2p)$) and 4 antibonding ($\sigma_u^*(2p), \pi_g^*(2p), \sigma_u^*(2s)$ in different orderings). Including the 1s core, the diagram accommodates 14 electrons.

### Bond order, magnetism, and trends

Filling the MOs in order of increasing energy with the available valence electrons gives the molecular electron configuration, the bond order, and the magnetic behaviour:

$$\text{Bond order} = \frac{1}{2}(n_b - n_a),$$

where $n_b$ and $n_a$ are the numbers of bonding and antibonding electrons.

For the second-row diatomics:

- **H$_2$** (2 e$^-$): $\sigma_g(1s)^2$, bond order 1, diamagnetic.
- **He$_2$** (4 e$^-$): $\sigma_g(1s)^2 \sigma_u^*(1s)^2$, bond order 0, unstable.
- **Li$_2$** (6 e$^-$): bond order 1, diamagnetic, dissociation energy 1.1 eV.
- **Be$_2$** (8 e$^-$): bond order 0, unstable.
- **B$_2$** (10 e$^-$): bond order 1, **paramagnetic** (two unpaired electrons in the $\pi_u$ orbitals, consistent with Hund's rules). The MO prediction of paramagnetism is one of the celebrated successes of the theory; valence bond theory predicted diamagnetism.
- **C$_2$** (12 e$^-$): bond order 2, diamagnetic, $D_e = 6.3$ eV.
- **N$_2$** (14 e$^-$): bond order 3 (a triple bond), diamagnetic, $D_e = 9.8$ eV, the strongest homonuclear diatomic bond.
- **O$_2$** (16 e$^-$): bond order 2, **paramagnetic** with two unpaired electrons in the $\pi_g^*$ orbitals, again a famous success of MO theory.
- **F$_2$** (18 e$^-$): bond order 1, diamagnetic, $D_e = 1.6$ eV.
- **Ne$_2$** (20 e$^-$): bond order 0, unstable.

The trends in bond order, dissociation energy, and bond length across the row are explained by the gradual filling of bonding and antibonding orbitals.

### Heteronuclear diatomics

For heteronuclear diatomics like CO, NO, HF, the MOs are still formed from the atomic orbitals, but the coefficients are no longer equal on the two atoms. The atomic orbital of the more electronegative atom contributes more to the bonding MOs, and the atomic orbital of the less electronegative atom contributes more to the antibonding MOs. The bond is partially ionic, and the dipole moment is non-zero.

CO has a bond order of 3 (similar to N$_2$) but a small dipole moment with the carbon end negative, because the lone pair on carbon dominates the bond polarity; this is a counterintuitive result explained by the MO description. The C–O bond is one of the strongest known, with $D_e = 11.1$ eV.

### Electronic transitions and band spectra

When a molecule undergoes an electronic transition, the absorption or emission spectrum is a band system: a structured but essentially continuous region of intensity, in contrast to the sharp line spectra of atoms. The structure is vibrational: each electronic transition is accompanied by a manifold of vibrational transitions in the upper and lower states, and the manifold is broad because the density of vibrational levels is high (a few thousand cm$^{-1}$ in a typical electronic band).

The **Franck–Condon principle** says that an electronic transition is so fast compared with nuclear motion that the nuclei do not move during the transition. The intensity of a particular vibronic transition $v' \leftarrow v''$ is therefore proportional to the square of the overlap integral of the vibrational wavefunctions in the upper and lower electronic states:

$$I_{v'v''} \propto |\langle \chi_{v'} | \chi_{v''} \rangle|^2.$$

The most intense transitions are those for which the classical turning points of the two vibrational states coincide. If the equilibrium bond length is the same in the two states, the $0 \to 0$ transition is strongest. If the upper state has a longer bond, the most intense transitions are to $v' = 2, 3, \ldots$ of the upper state, producing a characteristic progression.

The full band system of a diatomic electronic transition can be organised in a **Deslandres table**, with rows labelled by $v'$ and columns by $v''$. Each entry in the table is the wavenumber of the corresponding transition. The table has a regular structure: the differences within a row are the vibrational spacings of the lower state, and the differences within a column are the vibrational spacings of the upper state. Analysing a Deslandres table yields the vibrational constants $\omega_e$ and $\omega_e x_e$ of both electronic states.

In the rotational structure of an electronic transition, each vibronic line splits into P, Q, and R branches. The Q branch is now allowed because the electronic state has a non-zero electronic angular momentum ($\Sigma \to \Pi$ transitions, for example, have a strong Q branch). The rotational constants differ between the upper and lower states because the bond length is different, and the line spacings give the rotational constants of both states.

The band spectra of polyatomic molecules are even richer. A triatomic molecule like CO$_2$ has three vibrational modes (symmetric stretch, bend, asymmetric stretch), each with its own progression, and combinations of these modes give a complex spectrum used to identify the molecule in atmospheric and combustion studies.

### Band spectra in astrophysics

Electronic band spectra of small molecules are observed in comets, stellar atmospheres, and the interstellar medium. The CN violet system at 388 nm, the C$_2$ Swan bands at 516 nm, and the CH A–X system at 431 nm are classical examples. In cool stars, molecular bands dominate the spectrum; the TiO bands in M dwarfs and the C$_2$ and CN bands in carbon stars are the primary temperature and composition indicators. Diffuse interstellar bands, a set of broad absorption features seen in the spectra of reddened stars and long mysterious, are now believed to arise from electronic transitions of large molecules (PAHs, fullerenes) in the interstellar medium.

## Key Ideas

- **Molecular orbital (MO)**: an orbital that extends over the whole molecule, formed by linear combination of atomic orbitals.
- **Bonding and antibonding MOs**: symmetric and antisymmetric combinations; bonding lowers the energy, antibonding raises it.
- **$\sigma$ and $\pi$ bonds**: $\sigma$ from head-on overlap, $\pi$ from sideways overlap; multiple bonds combine $\sigma$ and $\pi$ contributions.
- **MO bond order**: $\frac{1}{2}(n_b - n_a)$; the standard way to summarise the strength of a bond in MO theory.
- **Homonuclear diatomic trends**: paramagnetism of B$_2$ and O$_2$ is a celebrated MO result that VB theory misses.
- **Franck–Condon principle**: electronic transitions are vertical on a potential-energy diagram; the intensity of a vibronic line is $|\langle \chi_{v'} | \chi_{v''} \rangle|^2$.
- **Deslandres table**: the systematic organisation of a band system into vibrational progressions.
- **Band spectra** are characteristic of molecules; line spectra are characteristic of atoms.

## Worked Examples

### Example 1 — Bond order and magnetism of O$_2$

O$_2$ has 12 valence electrons. Use the MO diagram to determine the bond order, the magnetic moment, and the ground-state term symbol.

**Solution.** Filling the MOs in order (assuming the $\pi_u$ comes before the $\sigma_g(2p)$ for O$_2$, but in O$_2$ the ordering is $\sigma_g(2p) < \pi_u(2p) < \pi_g^*(2p) < \sigma_u^*(2p)$):

- $\sigma_g(2s)^2$: 2 bonding.
- $\sigma_u^*(2s)^2$: 2 antibonding.
- $\sigma_g(2p)^2$: 2 bonding.
- $\pi_u(2p)^4$: 4 bonding.
- $\pi_g^*(2p)^2$: 2 antibonding.

Total bonding: 8; total antibonding: 4. Bond order = $(8-4)/2 = 2$.

The two electrons in $\pi_g^*$ are in degenerate orbitals, so by Hund's rules they have parallel spins, giving a triplet ground state. The term symbol is $^3\Sigma_g^-$. The molecule is paramagnetic with a magnetic moment of about 2 Bohr magnetons, the basis of liquid-oxygen magnetism demonstrably visible in laboratory experiments.

### Example 2 — Franck–Condon distribution for a bond-length change

A diatomic has equilibrium bond length $R_e'' = 1.4$ Å in the ground electronic state and $R_e' = 1.6$ Å in an excited state. The vibrational frequency is similar in both states. Use the reflection principle and the classical Franck–Condon approximation to predict which $v'$ levels are most populated in absorption from $v'' = 0$.

**Solution.** In the classical reflection principle, the Franck–Condon factor is large when the classical turning points of the upper and lower states overlap. The transition is vertical (instantaneous): at $R = R_e'' = 1.4$ Å in the ground state, the upper-state potential energy is high, and the corresponding classical turning point is at $R' = 1.4$ Å. The vibrational amplitude in the upper state is from $1.4$ Å to the outer turning point, which is at $R' = R_e' + (\text{amplitude})$. The intensity distribution is therefore peaked at $v'$ values where the upper-state classical turning point matches $R = 1.4$ Å. For a Morse-like potential, the most populated $v'$ is given by

$$v'_{\text{peak}} \approx \frac{\Delta R}{\alpha},$$

where $\Delta R = R_e' - R_e''$ and $\alpha$ is the Morse width parameter. For typical values, $\alpha \approx 0.2$ Å, so $\Delta R = 0.2$ Å gives $v'_{\text{peak}} \approx 1$, a transition to the $v' = 1$ or $v' = 2$ level. The exact distribution is calculated from the overlap integral of harmonic-oscillator wavefunctions displaced by $\Delta R$, and is approximately Gaussian in $v'$.

### Example 3 — Band head of a $^1\Pi \to ^1\Sigma$ transition

A singlet–singlet electronic transition of a diatomic has rotational constants $B' = 1.5\,\text{cm}^{-1}$ and $B'' = 2.0\,\text{cm}^{-1}$. The R-branch line positions (in wavenumbers) are $\nu_R(J) = \nu_0 + (B' + B'')J + (B' - B'')J^2$. Find the band head (the turning point of the R branch).

**Solution.** The R-branch line position is a quadratic in $J$. The band head occurs where $d\nu_R/dJ = 0$:

$$B' + B'' + 2(B' - B'')J = 0,$$

$$J_{\text{head}} = -\frac{B' + B''}{2(B' - B'')} = -\frac{1.5 + 2.0}{2(1.5 - 2.0)} = -\frac{3.5}{-1.0} = 3.5.$$

Since $J$ must be an integer, the band head is at $J = 3$ or $J = 4$. The lines crowd together at the band head and then shade back to the blue (if $B' < B''$, as here) or to the red. The band head is a characteristic feature of molecular electronic spectra and is often the first thing the spectroscopist identifies.

## Common Misconceptions

- **"Bond order is the same as the number of electron pairs shared."** For simple bonds, yes; for transition-metal complexes and complex molecules, bond order is a more nuanced average.
- **"MO theory and VB theory give the same answer."** They agree for many molecules but differ for important cases like O$_2$ (paramagnetic in MO, diamagnetic in simple VB) and benzene (resonance stabilisation only in VB).
- **"An electronic transition is instantaneous, so the nuclei are at the same point in both states."** Yes, that is the Franck–Condon principle. The transition is vertical on a potential-energy diagram; the nuclei do not move during the electronic transition.
- **"Band spectra are featureless."** Far from it. The vibronic and rotational structure provides a wealth of information; the apparent "band" is a densely packed set of lines.
- **"The MO diagram is independent of bond length."** The energies of the MOs depend on $R$. The diagram is for the equilibrium geometry; the full picture is given by the potential-energy curves of each MO as a function of $R$.

## Connections

- The MO description is the foundation of modern quantum chemistry; Hartree–Fock, configuration interaction, and density-functional theory all build on it.
- The same symmetry labels ($\sigma, \pi, g, u$) are used to label the electronic states of the hydrogen molecular ion, the oxygen molecule, and the carbon dioxide molecule.
- The Franck–Condon principle is a special case of the sudden approximation in quantum mechanics, applicable whenever the perturbation is much faster than the dynamics of the system.
- Band spectra are the molecular analogue of the line spectra of atoms; the difference is the additional degrees of freedom (vibration, rotation) that contribute to the energy-level density.
- The link between molecular structure and astronomical observations is one of the great triumphs of modern astrophysics; the unidentified diffuse interstellar bands remain an active research area.

## Quick Check

1. State the MO bond order and the term symbol of the O$_2$ ground state.
2. Explain the Franck–Condon principle in words and write the relevant overlap integral.
3. Why is B$_2$ predicted to be paramagnetic by MO theory, even though it has an even number of electrons?
4. Sketch a Deslandres table for a $^1\Pi \to ^1\Sigma$ transition and label the rows and columns.
5. The rotational constant decreases in an excited electronic state ($B' < B''$). Does the band head appear in the P branch or the R branch?

## Takeaway

- MO theory provides a unified description of homonuclear and heteronuclear diatomics, predicting bond orders, magnetic behaviour, and dissociation energies.
- The Franck–Condon principle explains the vibrational structure of electronic transitions: the most intense transitions are those whose classical turning points overlap.
- Band spectra are the molecular analogue of atomic line spectra, with vibrational and rotational structure broadened into dense manifolds.
- The standard MO diagram for the second-row diatomics explains the trend from Li$_2$ (bond order 1) to N$_2$ (bond order 3) to F$_2$ (bond order 1) and the paramagnetism of B$_2$ and O$_2$.
- MO theory, combined with the Born–Oppenheimer separation, is the foundation of modern molecular spectroscopy and quantum chemistry.
