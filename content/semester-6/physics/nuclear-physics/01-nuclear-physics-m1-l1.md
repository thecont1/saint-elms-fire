***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: nuclear-physics
courseName: Nuclear Physics
moduleId: nuclear-physics-module-1
moduleName: Nuclear Properties and Models
lessonId: nuclear-physics-m1-l1
lessonName: Nuclear Size, Mass and Binding Energy
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - introduction-to-quantum-mechanics-m2-l1
learningObjectives:
  - Describe the experimental evidence for nuclear size and the form of the nuclear charge distribution.
  - Define the atomic mass unit, mass excess, and binding energy, and use them in nuclear calculations.
  - Sketch the binding-energy-per-nucleon curve and identify the peak near iron.
concepts:
  - Nuclear radius
  - Mass excess
  - Binding energy
  - Mass defect
  - Semi-empirical mass formula
  - Fermi energy
tags:
  - physics
  - nuclear-physics
  - nuclear-structure
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Nuclear Size, Mass and Binding Energy

## Overview

This lesson opens the nuclear-physics sequence by establishing the basic measurable properties of atomic nuclei: their size, mass, and the energy that holds them together. We discuss the experimental evidence for nuclear size from Rutherford scattering, electron scattering, and muonic-atom spectroscopy, the standard form of the nuclear charge distribution, the system of atomic mass units, and the binding-energy-per-nucleon curve that lies at the heart of nuclear stability and energy release. The lesson is foundational: the semi-empirical mass formula derived in the next lesson is built directly on the systematics introduced here, and the radioactive decay and reaction rates discussed in Module 2 follow from the same energetics.

## Learning Path

- **What you should already know**: the Rutherford scattering experiment and the discovery of the nucleus (mechanics, Semester 1); basic quantum mechanics and the de Broglie wavelength (introductory quantum mechanics, Semester 4); the relation between mass and energy, $E = mc^2$, from special relativity.
- **What this lesson adds**: the precise form of the nuclear charge distribution; the system of atomic mass units; the binding energy and its variation across the periodic table; the binding-energy-per-nucleon curve.
- **What later lessons this will unlock**: the semi-empirical mass formula (Lesson m1-l2), the shell model and magic numbers (Lesson m1-l3), radioactive decay energetics (Module 2), fission and fusion (Module 2 Lesson 3), and applications in medicine, energy, and dating (Module 3).

## Core Explanation

### Nuclear size

The first quantitative measure of nuclear size came from Rutherford's analysis of alpha-particle scattering. For an alpha particle of kinetic energy $E$ scattering off a nucleus of charge $Z e$ at angle $\theta$, the distance of closest approach for a head-on collision is

$$d = \frac{1}{4\pi\epsilon_0}\frac{2 Z e^2}{E}.$$

The observation of large-angle scattering confirmed the existence of a small, dense, positively charged nucleus, and gave an upper limit on its size of about 10 fm.

Modern measurements of nuclear size use electron scattering, which probes the charge distribution through the electromagnetic interaction. Because the electron is a point particle with no internal structure, the cross-section is sensitive only to the charge distribution, and the de Broglie wavelength of high-energy electrons can be made much smaller than the nuclear radius. The form factor $F(q^2)$, the Fourier transform of the charge density, is measured in elastic scattering. The standard parametrisation of the charge density is the Fermi distribution,

$$\rho(r) = \frac{\rho_0}{1 + e^{(r - R_{1/2})/a}},$$

where $R_{1/2}$ is the half-density radius and $a$ is the surface thickness, typically 0.5–0.6 fm. The mean-square charge radius is

$$\langle r^2 \rangle = \frac{3 R_{1/2}^2}{5}\left[1 + \frac{7}{3}\left(\frac{\pi a}{R_{1/2}}\right)^2 + \ldots\right].$$

For a wide range of nuclei, the half-density radius scales as

$$R_{1/2} \approx 1.2\, A^{1/3}\,\text{fm},$$

where $A$ is the mass number. The $A^{1/3}$ dependence is consistent with a roughly constant nuclear density $\rho_0 \approx 0.16$ nucleons per fm$^3$, or about $2.7 \times 10^{17}$ kg/m$^3$. A teaspoon of nuclear matter would weigh billions of tonnes.

Muonic atoms provide a complementary measurement. A muon's Bohr radius is about 200 times smaller than the electron's because of its larger mass, so a muon in the 1s state of a heavy atom spends a significant fraction of its time inside the nucleus. The 1s energy is shifted by the finite nuclear size, and the shift measures $\langle r^2 \rangle$ directly. Muonic-atom spectroscopy is currently the most precise method for absolute charge radii of stable nuclei.

### Mass and atomic mass unit

Nuclear masses are quoted in the **atomic mass unit** (u or amu), defined as 1/12 of the mass of a neutral $^{12}$C atom at rest:

$$1\,\text{u} = 1.660539 \times 10^{-27}\,\text{kg} = 931.494\,\text{MeV}/c^2.$$

The energy equivalent of 1 u is 931.494 MeV, a useful number for nuclear energetics. The **mass excess** $\Delta$ is defined as

$$\Delta = (M - A) c^2,$$

in energy units (typically keV or MeV), where $M$ is the atomic mass and $A$ is the mass number. Tabulated nuclear mass data are usually given as mass excesses.

The **mass defect** is the difference between the sum of the separated nucleon masses and the bound nuclear mass:

$$\Delta M = Z m_p + N m_n - M_{\text{nucleus}},$$

where $Z$ is the proton number, $N = A - Z$ is the neutron number, $m_p$ is the proton mass, and $m_n$ is the neutron mass. The mass defect is positive for a bound nucleus. In practice, atomic masses (including the electron cloud) are tabulated, and the electron masses are subtracted when working with the bare nucleus.

### Binding energy

The binding energy is the energy required to disassemble the nucleus into its constituent nucleons:

$$B = \Delta M \cdot c^2 = (Z m_p + N m_n - M_{\text{nucleus}}) c^2.$$

It can also be written in terms of atomic masses (including the electrons) by including the electron-binding-energy corrections:

$$B = Z M(^1H) + N m_n - M(^A_ZX) c^2,$$

where $M(^1H)$ is the atomic mass of hydrogen and $M(^A_ZX)$ is the atomic mass of the nuclide. The binding energy is typically on the order of 1% of the nuclear mass, an enormous density of energy compared with chemical binding.

The **binding energy per nucleon** $B/A$ is a more informative quantity. Plotting $B/A$ against $A$ gives the famous binding-energy curve:

- $B/A$ rises from about 1 MeV for the lightest nuclei to a maximum of about 8.8 MeV near $A \approx 56$ ($^{56}$Fe).
- $B/A$ then decreases slowly to about 7.6 MeV for the heaviest stable nuclei ($A \approx 200$).
- $B/A$ drops sharply for very light nuclei ($A < 12$), with notable peaks at $^4$He (7.07 MeV), $^{12}$C (7.68 MeV), and $^{16}$O (7.98 MeV).

The shape of the curve is the key to nuclear energy production. **Fusion** of light nuclei (left side of the curve) increases $B/A$ and releases energy; **fission** of heavy nuclei (right side) also increases $B/A$ and releases energy. The maximum near iron is the reason iron is the most thermodynamically stable nucleus and the endpoint of stellar nucleosynthesis in the cores of massive stars.

### Components of the binding energy

The binding energy of a nucleus can be decomposed into several contributions, each with a characteristic dependence on $A$ and $Z$:

- **Volume energy** $\propto a_v A$: the dominant contribution, from the short-range strong force between nearest-neighbour nucleons. Scales as $A$ (the volume of the nucleus).
- **Surface energy** $\propto -a_s A^{2/3}$: a correction for the fact that nucleons at the surface have fewer neighbours. Scales as the surface area $A^{2/3}$.
- **Coulomb energy** $\propto -a_c Z^2/A^{1/3}$: the electrostatic repulsion of the protons. Scales as $Z^2$ divided by the nuclear radius $A^{1/3}$.
- **Asymmetry energy** $\propto -a_a (A - 2Z)^2 / A$: the cost of having $N \neq Z$ because of the Pauli principle. Scales as $(N-Z)^2/A$.
- **Pairing energy** $\propto \pm \delta(A)$: a small correction that is positive for even-even nuclei (most bound), negative for odd-odd nuclei (least bound), and zero for odd-$A$ nuclei.

The combination of these terms is the **semi-empirical mass formula (SEMF)**, which is the subject of the next lesson.

### Stable nuclei and the drip lines

Out of the roughly 3000 known nuclei, only about 286 are stable. The plot of stable nuclei on the $(N, Z)$ plane is the **nuclear chart** or **Segrè chart**. Stable nuclei lie along a band that runs from $N = Z$ at low $A$ to $N \approx 1.5 Z$ at high $A$, reflecting the increasing importance of the Coulomb repulsion for heavy nuclei. The **neutron drip line** on the neutron-rich side and the **proton drip line** on the proton-rich side mark the limits beyond which nuclei decay by emitting a nucleon within a time of order $10^{-22}$ s.

The existence of the drip lines is a prediction of the SEMF and of the shell model. The most exotic nuclei known today are at the drip lines or just inside them; their study is a major frontier of nuclear physics, with applications to the synthesis of heavy elements in stars and to the structure of neutron-star crusts.

## Key Ideas

- **Nuclear radius** scales as $R \approx 1.2 A^{1/3}$ fm; nuclear density is approximately constant at $\rho_0 \approx 0.16$ nucleons/fm$^3$.
- **Atomic mass unit** is 1/12 the mass of a $^{12}$C atom; $1\,\text{u} = 931.494$ MeV/$c^2$.
- **Binding energy** is the energy required to disassemble a nucleus into free nucleons; binding-energy-per-nucleon peaks at 8.8 MeV for $^{56}$Fe.
- **Fusion** of light nuclei and **fission** of heavy nuclei both release energy by moving toward the maximum of the binding-energy curve.
- **Mass excess** is the standard way to tabulate nuclear masses.
- **Components of binding energy** are volume, surface, Coulomb, asymmetry, and pairing.

## Worked Examples

### Example 1 — Density of nuclear matter

For $^{56}$Fe with $R_{1/2} \approx 4.6$ fm, compute the average nuclear density in nucleons per fm$^3$ and in kg/m$^3$.

**Solution.** The volume of the nucleus is

$$V = \frac{4\pi}{3} R^3 = \frac{4\pi}{3} (4.6)^3 \approx 408\,\text{fm}^3.$$

The density is $A/V = 56/408 \approx 0.137$ nucleons/fm$^3$, consistent with the standard value of about 0.16 nucleons/fm$^3$. In SI units:

$$\rho = 0.137 \times \frac{1.66 \times 10^{-27}}{10^{-45}}\,\text{kg/m}^3 = 0.137 \times 1.66 \times 10^{18} \approx 2.3 \times 10^{17}\,\text{kg/m}^3.$$

This is about $2 \times 10^{14}$ times the density of water.

### Example 2 — Binding energy of $^{12}$C

$^{12}$C has atomic mass $M = 12.000000\,\text{u}$ exactly (by definition of the mass unit). The proton mass is $m_p = 1.007276\,\text{u}$, the neutron mass is $m_n = 1.008665\,\text{u}$, and the electron mass is $m_e = 0.000549\,\text{u}$. Compute the binding energy and the binding energy per nucleon.

**Solution.** For $^{12}$C, $Z = 6$ and $N = 6$. The mass of 6 hydrogen atoms is $6 \times (m_p + m_e) = 6 \times 1.007825 = 6.046950\,\text{u}$. The mass of 6 free neutrons is $6 \times 1.008665 = 6.051990\,\text{u}$. The total mass of separated nucleons (as atoms) is $6.046950 + 6.051990 = 12.098940\,\text{u}$. The mass of $^{12}$C is exactly 12.000000 u. The mass defect is therefore $0.098940\,\text{u}$.

The binding energy is

$$B = 0.098940\,\text{u} \times 931.494\,\text{MeV/u} = 92.16\,\text{MeV}.$$

The binding energy per nucleon is $92.16/12 = 7.68$ MeV, in good agreement with the experimental value.

### Example 3 — Binding energy of $^{235}$U and energy release in fission

$^{235}$U has atomic mass 235.043930 u. The fission products of one typical fission are $^{141}$Ba (140.914411 u) and $^{92}$Kr (91.926156 u), with about 2.5 neutrons emitted. Use the masses to estimate the energy released in the fission of one $^{235}$U nucleus.

**Solution.** The total mass of the products is

$$M_{\text{products}} = 140.914411 + 91.926156 + 2.5 \times 1.008665 = 233.362\,\text{u}.$$

The mass of the initial $^{235}$U is 235.043930 u. The mass difference is

$$\Delta M = 235.043930 - 233.362 = 1.682\,\text{u}.$$

The energy released is

$$E = 1.682\,\text{u} \times 931.494\,\text{MeV/u} \approx 200\,\text{MeV}.$$

This is the typical energy release per fission of $^{235}$U, distributed mainly as kinetic energy of the fission fragments (about 165 MeV), with the rest carried by the neutrons, prompt gamma rays, and the decay of the fission products. The 200 MeV per fission is about $8 \times 10^7$ times the energy released per molecule in a chemical reaction; it is the basis of nuclear energy and nuclear weapons.

## Common Misconceptions

- **"The nucleus is a solid sphere."** It is more accurately described as a quantum fluid with a diffuse surface, modelled by the Fermi distribution. The radius is a half-density radius, not a sharp boundary.
- **"Binding energy is the energy stored in the nucleus."** Binding energy is the energy that must be supplied to disassemble the nucleus. A more bound nucleus has lower total energy, not higher. The total energy of a bound system is less than the sum of the parts by an amount equal to the binding energy.
- **"The binding-energy curve shows that heavy nuclei are unstable."** No. The binding energy per nucleon is lower for heavy nuclei, but they are still bound. The instability of very heavy nuclei comes from other effects (Coulomb repulsion, spontaneous fission) that the $B/A$ curve alone does not capture.
- **"Iron-56 is the most stable nucleus."** Iron-56 has the highest binding energy per nucleon, which makes it the most thermodynamically stable against nucleosynthesis. The most stable against radioactive decay is different; $^{209}$Bi and several others have very long half-lives.
- **"The mass of a nucleus is the sum of the masses of its nucleons."** No. The bound nucleus has less mass by an amount $\Delta M = B/c^2$, the mass defect. The mass of $^{12}$C is less than 12 times the mass of a free nucleon.

## Connections

- The $A^{1/3}$ scaling of the nuclear radius is a manifestation of the short-range, saturating nature of the strong force, in contrast to the long-range Coulomb force that scales with charge.
- The binding-energy curve is the unifying concept behind stellar nucleosynthesis, nuclear energy, and radioactive dating; it is the most important diagram in nuclear physics.
- The components of the binding energy introduced here (volume, surface, Coulomb, asymmetry, pairing) are the basis of the semi-empirical mass formula derived in the next lesson.
- The proton–neutron composition of stable nuclei is determined by the competition between the Coulomb repulsion (favours $N > Z$ for heavy nuclei) and the asymmetry energy (favours $N = Z$).
- The drip lines are the experimental frontier of nuclear physics, with major facilities such as FRIB, RIKEN, and GSI pushing the known chart of nuclides to its limits.

## Quick Check

1. State the formula for the nuclear radius in terms of $A$, and explain the physical meaning of the $A^{1/3}$ dependence.
2. The mass defect of $^{16}$O is 0.137005 u. Compute the binding energy and the binding energy per nucleon.
3. Sketch the binding-energy-per-nucleon curve and identify the position of $^{56}$Fe.
4. Explain why a teaspoon of nuclear matter would weigh billions of tonnes.
5. The atomic mass of $^{4}$He is 4.002603 u. Compute the binding energy and compare it to the binding energy per nucleon of $^{56}$Fe.

## Takeaway

- The nuclear radius scales as $A^{1/3}$ fm, consistent with a roughly constant nuclear density of $0.16$ nucleons/fm$^3$.
- The atomic mass unit is 1/12 the mass of $^{12}$C; $1\,\text{u} = 931.494$ MeV/$c^2$.
- Binding energy is the energy required to disassemble a nucleus; the binding-energy-per-nucleon curve peaks at about 8.8 MeV near $^{56}$Fe.
- The position on the binding-energy curve determines whether fusion or fission is energetically favourable.
- The components of binding energy — volume, surface, Coulomb, asymmetry, and pairing — are the basis of the semi-empirical mass formula.
