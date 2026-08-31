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
lessonId: atomic-and-molecular-physics-m3-l1
lessonName: Ionic, Covalent and Van der Waals Bonds
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - atomic-and-molecular-physics-m1-l2
  - introduction-to-quantum-mechanics-m2-l3
learningObjectives:
  - Distinguish ionic, covalent, and van der Waals bonding in terms of electronic structure and binding energy.
  - Explain the hydrogen molecular ion and the origin of covalent bonding from quantum-mechanical symmetry.
  - Estimate binding energies and equilibrium separations using simple models.
concepts:
  - Ionic bond
  - Covalent bond
  - Molecular orbital
  - Van der Waals force
  - Born–Mayer repulsion
  - Lennard–Jones potential
tags:
  - physics
  - molecular-physics
  - chemistry
  - bonding
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Ionic, Covalent and Van der Waals Bonds

## Overview

Atoms combine into molecules and solids because the resulting bonded state has lower energy than the separated atoms. The kind of bond that forms — ionic, covalent, metallic, or van der Waals — is determined by the electronic structure of the constituents. This lesson develops the three principal bonding mechanisms relevant to molecular physics: ionic bonding through Coulomb attraction of opposite charges, covalent bonding through quantum-mechanical sharing of electrons, and van der Waals bonding through induced-dipole–induced-dipole interactions. We work through the Born–Lande model for ionic crystals, the Heitler–London treatment of the hydrogen molecule, and the Lennard–Jones form of the inert-gas pair potential. The lesson sets up the spectroscopy of diatomic molecules in the next lesson and the molecular-orbital description of band spectra in the lesson after.

## Learning Path

- **What you should already know**: the Schrödinger equation for one and two electrons (introductory quantum mechanics, Semester 4); the structure of multi-electron atoms and the meaning of ionisation energy and electron affinity (Lesson m1-l2); the energy-band picture of solids (solid-state physics, Semester 5).
- **What this lesson adds**: a quantitative and qualitative description of the three principal bonding mechanisms; a clear picture of the quantum origin of covalent bonding; the Lennard–Jones potential as a model for inert-gas interactions.
- **What later lessons this will unlock**: rotational and vibrational spectra of diatomics (Lesson m3-l2), molecular orbital theory and band spectra (Lesson m3-l3), and the wider topic of chemical binding in materials.

## Core Explanation

A **bond** between two atoms exists if the energy of the bonded configuration is lower than the energy of the separated atoms. The energy lowering is the **binding energy** $D_e$, and the bond length is the equilibrium separation $r_e$ at which the total energy is minimised. The total energy is the sum of attractive and repulsive contributions; the equilibrium is the point at which the two are equal in magnitude.

### Ionic bonding

In an ionic bond, one or more electrons are transferred from one atom to another, and the resulting ions are held together by the Coulomb attraction of opposite charges. The prototypical example is sodium chloride: the sodium 3s electron has a low ionisation energy (5.14 eV), and the chlorine atom has a high electron affinity (3.61 eV). The transfer is energetically favourable by $3.61 - 5.14 = -1.53$ eV; in the bonded crystal, this deficit is more than compensated by the Madelung energy, the electrostatic energy of the alternating array of positive and negative ions.

For an isolated ion pair the potential energy is

$$U(r) = -\frac{e^2}{4\pi\epsilon_0 r} + \frac{B}{r^n},$$

where the first term is the Coulomb attraction and the second is the short-range repulsion (Born–Mayer form $B e^{-r/\rho}$, or the simpler power-law $B/r^n$ with $n \approx 9$ for alkali halides). Minimising,

$$\frac{dU}{dr}\bigg|_{r_e} = 0 \;\Rightarrow\; r_e = \left(\frac{nB}{e^2/(4\pi\epsilon_0)}\right)^{1/(n+1)}.$$

The bond energy is

$$D_e = \frac{e^2}{4\pi\epsilon_0 r_e}\left(\frac{1}{n} - 1\right).$$

For NaCl, $r_e \approx 2.36\,\text{Å}$ and $D_e \approx 4.2$ eV per ion pair. In the crystal, the Madelung constant for the rocksalt structure is $M \approx 1.748$, so the Coulomb energy per pair is $-M e^2 / (4\pi\epsilon_0 r_e) \approx -8.9$ eV, and the total cohesive energy per ion pair is about 7.9 eV after subtracting the repulsion and the ionisation/affinity terms.

### Covalent bonding

In a covalent bond, electrons are shared between two atoms. The simplest system is the hydrogen molecular ion H$_2^+$, with one electron moving in the field of two protons. The Hamiltonian is

$$H = -\frac{\hbar^2}{2m}\nabla^2 - \frac{e^2}{4\pi\epsilon_0 r_A} - \frac{e^2}{4\pi\epsilon_0 r_B} + \frac{e^2}{4\pi\epsilon_0 R},$$

where $r_A, r_B$ are the electron–proton distances and $R$ is the proton–proton separation. The exact solution is known in terms of confocal elliptic coordinates, but the qualitative physics is captured by the **LCAO (linear combination of atomic orbitals)** approach: take as trial wavefunctions the symmetric and antisymmetric combinations of the two 1s atomic orbitals,

$$\psi_\pm = \frac{1}{\sqrt{2(1 \pm S)}}(\phi_A \pm \phi_B),$$

where $S = \int \phi_A \phi_B dV$ is the overlap integral. The expectation values of the energy in the two states are

$$E_\pm(R) = \frac{H_{AA} \pm H_{AB}}{1 \pm S},$$

with $H_{AA} = \int \phi_A H \phi_A dV$ and $H_{AB} = \int \phi_A H \phi_B dV$. The symmetric combination has lower energy, and the difference $E_- - E_+$ is twice the **exchange integral**, which is negative and is the actual origin of the binding.

For H$_2^+$, the binding energy is 2.7 eV at $r_e = 1.06$ Å. For neutral H$_2$, the binding energy is 4.5 eV at $r_e = 0.74$ Å, requiring a more elaborate treatment (Heitler–London or valence bond). The bond in H$_2$ is a textbook $\sigma$ bond: the electron density is concentrated along the internuclear axis, and the orbital is symmetric under reflection through the axis.

The covalent bond has a clear quantum origin: the exchange interaction, which arises from the indistinguishability of the two electrons in a singlet state, lowers the energy of the symmetric spatial wavefunction. Covalent bonds are **directional** because the underlying atomic orbitals are directional; this is why carbon forms tetrahedral bonds in methane and planar bonds in ethylene, and why water is bent.

### Van der Waals bonding

Van der Waals bonding arises from induced-dipole–induced-dipole interactions. Even in a spherically symmetric atom, the instantaneous dipole moment fluctuates; this induces a dipole in a neighbouring atom, and the two dipoles attract. The interaction energy is

$$U_{\text{vdW}}(r) = -\frac{C_6}{r^6},$$

where $C_6$ is a constant set by the atomic polarisability. The London derivation (1930) gives

$$C_6 = \frac{3}{4}\alpha_A \alpha_B \frac{I_A I_B}{I_A + I_B},$$

where $\alpha$ is the static polarisability and $I$ is the ionisation energy. For two ground-state He atoms, $C_6 \approx 1.5\,\text{eV·Å}^6$.

The full pair potential for inert gases is the **Lennard–Jones** form,

$$U(r) = 4\epsilon \left[\left(\frac{\sigma}{r}\right)^{12} - \left(\frac{\sigma}{r}\right)^6\right],$$

where $\epsilon$ is the depth of the well and $\sigma$ is the distance at which the potential crosses zero. The $r^{-12}$ repulsion models the steep short-range Pauli repulsion; the $r^{-6}$ attraction is the van der Waals tail. For Ar, $\epsilon \approx 0.0104$ eV and $\sigma \approx 3.4$ Å; for Xe, $\epsilon \approx 0.020$ eV and $\sigma \approx 4.1$ Å. The bonds are much weaker than ionic or covalent bonds, but they are responsible for the condensation of inert gases into liquids and solids at low temperature.

### Comparison and crossover

The strength of a bond is set by the electronic structure. Ionic bonds dominate when the electronegativity difference is large, covalent bonds when it is small, and van der Waals bonds in the absence of significant charge transfer or orbital overlap. The total energy of a molecular system is the sum of these contributions plus the kinetic energy of the nuclei; the equilibrium geometry and the spectroscopic constants are the result of minimising the total energy.

A more modern view uses the concept of **molecular orbitals (MOs)** that extend over the whole molecule, formed by linear combinations of atomic orbitals. The Aufbau principle, the Pauli exclusion principle, and Hund's rules apply just as in atoms: MOs are filled in order of increasing energy, with at most two electrons of opposite spin in each. For homonuclear diatomics, the MOs are labelled $\sigma_g$, $\sigma_u$, $\pi_u$, $\pi_g$ by their symmetry under inversion and reflection. The bond order is $\frac{1}{2}(n_b - n_a)$, where $n_b$ and $n_a$ are the numbers of bonding and antibonding electrons. This formalism generalises to polyatomic molecules and to the energy bands of solids.

## Key Ideas

- **Ionic bond**: full electron transfer; held together by Coulomb attraction; strong (1–10 eV) and direction-insensitive; described by Born–Lande and Madelung models.
- **Covalent bond**: sharing of electrons between atoms; quantum-mechanical exchange lowers the energy of the symmetric spatial state; directional; described by valence-bond and molecular-orbital theories.
- **Van der Waals bond**: induced-dipole interaction between atoms; $U \propto -C_6/r^6$; weak (10–100 meV); universal.
- **Lennard–Jones potential**: $U(r) = 4\epsilon[(\sigma/r)^{12} - (\sigma/r)^6]$, the standard model for inert-gas pair potentials.
- **Bond order**: $\frac{1}{2}(n_b - n_a)$, determined by the count of bonding and antibonding electrons.
- **Electronegativity** difference predicts bond type: large $\Delta \chi$ → ionic, small → covalent, none → van der Waals or metallic.

## Worked Examples

### Example 1 — Cohesive energy of NaCl

Use the Born–Lande model with Madelung constant $M = 1.748$, ion separation $r_e = 2.36$ Å, Born repulsion exponent $n = 9$, and ionisation + affinity terms. Estimate the cohesive energy per ion pair.

**Solution.** The Born–Lande cohesive energy is

$$U = -\frac{N_A M e^2}{4\pi\epsilon_0 r_e}\left(1 - \frac{1}{n}\right).$$

The Coulomb term per pair is

$$\frac{M e^2}{4\pi\epsilon_0 r_e} = \frac{1.748 \times 1.44\,\text{eV·Å}}{2.36\,\text{Å}} = 1.067\,\text{eV}.$$

Wait, $e^2/(4\pi\epsilon_0) = 14.4$ eV·Å, so

$$\frac{M e^2}{4\pi\epsilon_0 r_e} = \frac{1.748 \times 14.4}{2.36} = 10.66\,\text{eV}.$$

With $1 - 1/n = 8/9$:

$$U = -10.66 \times 0.889 = -9.48\,\text{eV per pair}.$$

The experimental cohesive energy of NaCl is about 7.9 eV per ion pair. The Born–Lande estimate is high because it uses an oversimplified repulsion; the Born–Mayer form with exponential repulsion gives a more accurate value.

### Example 2 — Heitler–London binding of H$_2$

In the Heitler–London treatment, the ground-state energy of two hydrogen atoms at separation $R$ is

$$E(R) = 2E_H + \frac{Q + J}{1 + S^2},$$

where $Q$ is the Coulomb integral (positive), $J$ is the exchange integral (negative, more negative than $Q$ in magnitude at small $R$), and $S$ is the overlap. At $R = 0.74$ Å, the experimental binding energy is 4.5 eV. Comment on the relative magnitudes of $Q$ and $J$ at this distance.

**Solution.** The condition for binding is that the numerator $Q + J$ becomes sufficiently negative to overcome the denominator and the dissociation energy $2 E_H$. Numerical evaluation gives $Q \approx +1.6$ eV (Coulomb repulsion dominates) and $J \approx -6.4$ eV (exchange attraction). Their sum is $-4.8$ eV, the binding energy. The result shows that covalent bonding is **not** Coulombic in the classical sense: the Coulomb integral is actually repulsive, and the binding is entirely due to the exchange term, which is a purely quantum-mechanical effect arising from electron indistinguishability.

### Example 3 — Lennard–Jones equilibrium

For the Lennard–Jones potential $U(r) = 4\epsilon[(\sigma/r)^{12} - (\sigma/r)^6]$, find the equilibrium separation $r_m$ and the well depth.

**Solution.** Setting $dU/dr = 0$:

$$\frac{dU}{dr} = 4\epsilon \left[ -12 \frac{\sigma^{12}}{r^{13}} + 6 \frac{\sigma^6}{r^7} \right] = 0,$$

$$6 \frac{\sigma^6}{r^7} = 12 \frac{\sigma^{12}}{r^{13}},$$

$$r_m^6 = 2 \sigma^6, \quad r_m = 2^{1/6} \sigma \approx 1.122\,\sigma.$$

The well depth is

$$U(r_m) = 4\epsilon \left[\left(\frac{1}{2}\right)^2 - \left(\frac{1}{2}\right)\right] = 4\epsilon \left[\frac{1}{4} - \frac{1}{2}\right] = -\epsilon.$$

So $\epsilon$ is exactly the well depth. For argon, $\sigma = 3.4$ Å, so $r_m \approx 3.82$ Å and $\epsilon \approx 0.0104$ eV, the well depth of the Ar–Ar interaction. The Ar–Ar pair potential is a textbook example of a van der Waals bond.

## Common Misconceptions

- **"Covalent bonds are formed by sharing electrons equally."** Sharing is the right word, but the sharing is rarely equal; electronegativity differences make one atom's contribution larger, giving the bond partial ionic character. Pauling's relation $\Delta_{\text{ionic}} = 1 - e^{-(\Delta \chi)^2/4}$ quantifies this for heteronuclear diatomics.
- **"Van der Waals forces are weak and uninteresting."** They are weak per pair (10–100 meV) but universal. They determine the structure of proteins, the condensation of gases, the adhesion of geckos to walls, and the stability of molecular crystals.
- **"Hydrogen bonding is a covalent bond."** Hydrogen bonding is partly covalent (with partial sharing of the proton) and partly electrostatic; it is a distinct category. The O–H$\cdots$O bond in water has a bond energy of about 0.2 eV, intermediate between van der Waals and covalent.
- **"Metallic bonding is just lots of covalent bonds."** Metallic bonding is best described as a delocalised electron gas in a lattice of positive ions, with binding that depends on the density of states at the Fermi level. The Drude and Sommerfeld models are simpler starting points than the covalent picture.
- **"Bonds are static."** Molecules vibrate, rotate, and (in solution or in the gas phase) translate; the equilibrium geometry is the result of a delicate balance of forces. The vibrational and rotational degrees of freedom give rise to the spectra treated in the next two lessons.

## Connections

- The MO and VB formalisms developed here are the foundation of quantum chemistry; they generalise to the energy bands of solids (covered in solid-state physics).
- The Born–Lande model of ionic crystals is the same lattice-sum problem that arises in calculating the Madelung energy of a crystal, a key result in solid-state physics.
- The Lennard–Jones potential is the basis of molecular-dynamics simulations of inert gases and of more complex systems where a pairwise-additive approximation is reasonable.
- Hydrogen bonding is essential to the structure of water, DNA, and proteins, and is a recurring theme in biophysical chemistry.
- The exchange interaction that drives covalent bonding is the same exchange interaction that, combined with the Pauli exclusion principle, gives the Hund's-rules splitting of atomic terms in Lesson m1-l2.

## Quick Check

1. Sketch the Lennard–Jones potential and identify the contributions from attraction and repulsion.
2. Why is the exchange integral $J$ the origin of covalent bonding in the Heitler–London model, rather than the Coulomb integral $Q$?
3. Estimate the equilibrium separation of the Lennard–Jones potential in terms of $\sigma$, and give the well depth in terms of $\epsilon$.
4. The Madelung constant of the rocksalt structure is 1.748. Explain its physical meaning.
5. The covalent bond in H$_2$ has a binding energy of 4.5 eV. The ionic bond in NaCl is about 7.9 eV per ion pair. Why is the ionic bond stronger?

## Takeaway

- Ionic, covalent, and van der Waals bonds correspond to three distinct electronic mechanisms: charge transfer, electron sharing, and induced-dipole attraction.
- Covalent bonding is a quantum effect; the binding comes from the exchange interaction, not from classical Coulomb attraction.
- The Lennard–Jones potential is the standard model for van der Waals bonds; the Born–Lande model is the standard model for ionic crystals.
- The MO and VB formalisms extend naturally to polyatomic molecules and to the energy bands of solids.
- Bond types are not absolute: real bonds lie on a continuum from purely ionic to purely covalent, with partial ionic character in heteronuclear bonds.
