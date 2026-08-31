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
lessonId: atomic-and-molecular-physics-m3-l2
lessonName: Rotational and Vibrational Spectra of Diatomics
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - atomic-and-molecular-physics-m3-l1
  - introduction-to-quantum-mechanics-m1-l3
learningObjectives:
  - Derive the rotational and vibrational energy levels of a diatomic molecule from the rigid-rotor and harmonic-oscillator models.
  - Explain the rigid-rotor selection rule $\Delta J = \pm 1$ and the harmonic-oscillator selection rule $\Delta v = \pm 1$.
  - Read a ro-vibrational spectrum of a diatomic and identify P and R branches.
concepts:
  - Rigid rotor
  - Harmonic oscillator
  - Rotational constant
  - Vibrational frequency
  - P and R branches
  - Anharmonicity
tags:
  - physics
  - molecular-spectroscopy
  - infrared
  - rotational-spectroscopy
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Rotational and Vibrational Spectra of Diatomics

## Overview

A diatomic molecule has three kinds of internal excitation: electronic transitions (changing the electron distribution), vibrational transitions (changing the internuclear separation), and rotational transitions (changing the orientation and magnitude of the rotational angular momentum). The last two are the workhorse of mid-infrared and microwave molecular spectroscopy. This lesson treats the rotational and vibrational motion of a diatomic as a rigid rotor and a quantum harmonic oscillator, derives the corresponding energy levels and selection rules, and then shows how a real molecule is described by the rotating vibrator with centrifugal distortion and anharmonic corrections. The lesson closes with the structure of a ro-vibrational band and the way P and R branches reveal the molecular constants.

## Learning Path

- **What you should already know**: the quantum harmonic oscillator and the angular-momentum eigenstates (introductory quantum mechanics, Semester 4); the structure of the Morse potential as a model for a real bond (covered in Lesson m3-l1); the basic notions of classical rotation and reduced mass.
- **What this lesson adds**: the rotational and vibrational energy levels, the corresponding spectroscopic selection rules, the way real molecules deviate from the idealised models, and how the deviations are read from a spectrum.
- **What later lessons this will unlock**: electronic spectroscopy of diatomics and the Franck–Condon principle; molecular-orbital description of band spectra; applications in atmospheric and astrophysical spectroscopy.

## Core Explanation

### Separation of scales

The Born–Oppenheimer approximation separates electronic, vibrational, and rotational motion because electrons are much lighter and faster than nuclei. The total wavefunction is written as

$$\Psi(\mathbf{r}, \mathbf{R}) = \psi_{\text{el}}(\mathbf{r}; \mathbf{R})\, \chi_v(R)\, Y_J(\theta, \phi),$$

where $\mathbf{r}$ are electronic coordinates, $\mathbf{R} = (R, \theta, \phi)$ are the internuclear coordinates, $\psi_{\text{el}}$ is the electronic wavefunction for fixed nuclei, $\chi_v$ is the vibrational radial wavefunction, and $Y_J$ is the rotational spherical harmonic. This separation is what makes it sensible to speak of distinct rotational, vibrational, and electronic spectra.

### Rotational energy levels

A diatomic is a rigid rotor with moment of inertia $I = \mu R^2$, where $\mu = m_1 m_2 / (m_1 + m_2)$ is the reduced mass. The rotational Hamiltonian is

$$H_{\text{rot}} = \frac{L^2}{2I},$$

with eigenvalues

$$E_J = \frac{\hbar^2}{2I} J(J+1) = B h J(J+1), \quad J = 0, 1, 2, \ldots$$

The rotational constant is

$$B = \frac{h}{8\pi^2 I c} \quad \text{(in cm}^{-1}\text{)},$$

or in frequency units, $B = h/(8\pi^2 I)$. For a typical diatomic like HCl with $R \approx 1.27$ Å and reduced mass $\mu \approx 1.6 \times 10^{-27}$ kg, $I \approx 2.6 \times 10^{-47}\,\text{kg·m}^2$ and $B \approx 10.6\,\text{cm}^{-1}$ (about 320 GHz), in the microwave region.

The selection rule for a pure rotational transition is

$$\Delta J = \pm 1,$$

because the photon carries one unit of angular momentum. The rotational spectrum therefore consists of equally spaced lines at frequencies

$$\nu_J = 2B(J+1), \quad J = 0, 1, 2, \ldots,$$

in the rigid-rotor approximation. For HCl, the $J = 0 \to 1$ line is at about 640 GHz.

In real molecules, the bond stretches as the rotational angular momentum increases (centrifugal distortion). The next-order correction is

$$E_J = B J(J+1) - D J^2(J+1)^2,$$

where $D$ is the centrifugal distortion constant, of order $D \sim 10^{-6}$ to $10^{-4}\,\text{cm}^{-1}$, much smaller than $B$. The transition frequencies become

$$\nu_J = 2B(J+1) - 4D(J+1)^3,$$

showing a small but measurable decrease in spacing with increasing $J$.

### Vibrational energy levels

The internuclear vibration is described near equilibrium by the harmonic oscillator Hamiltonian

$$H_{\text{vib}} = -\frac{\hbar^2}{2\mu}\frac{d^2}{dR^2} + \frac{1}{2}k(R - R_e)^2,$$

where $k$ is the force constant, related to the curvature of the potential at equilibrium. The energy levels are

$$E_v = \hbar\omega_e\left(v + \frac{1}{2}\right), \quad v = 0, 1, 2, \ldots,$$

with $\omega_e = \sqrt{k/\mu}$. The zero-point energy $\frac{1}{2}\hbar\omega_e$ is a purely quantum effect; the molecule cannot have $E = 0$ even at the lowest vibrational level.

The selection rule for a harmonic-oscillator transition is

$$\Delta v = \pm 1,$$

so the pure vibrational spectrum consists of a single line at $\nu_0 = \omega_e/(2\pi)$. For HCl, $\omega_e \approx 2990\,\text{cm}^{-1}$ in the mid-infrared. In reality, anharmonicity relaxes this rule, and overtones with $\Delta v = \pm 2, \pm 3, \ldots$ appear weakly.

The Morse potential is the standard anharmonic correction:

$$U(R) = D_e \left(1 - e^{-a(R - R_e)}\right)^2,$$

with $a = \sqrt{k/(2D_e)}$. Expanding around the minimum gives the energies

$$E_v = \hbar\omega_e\left(v + \frac{1}{2}\right) - \hbar\omega_e x_e \left(v + \frac{1}{2}\right)^2 + \ldots,$$

where $x_e$ is the anharmonicity constant, typically 0.01–0.05. The dissociation energy $D_e$ is then related to the spectroscopic constants by

$$D_e = \frac{\hbar\omega_e}{4 x_e}.$$

For HCl, $D_e \approx 4.6$ eV.

### Ro-vibrational spectra

Real molecules rotate and vibrate simultaneously. The combined energy (in the rotating-vibrator approximation) is

$$E_{v,J} = \hbar\omega_e\left(v + \frac{1}{2}\right) + B_v J(J+1) - D_v J^2(J+1)^2,$$

where $B_v$ and $D_v$ depend weakly on $v$ because the average bond length increases with vibrational excitation. The selection rules are

$$\Delta v = \pm 1, \pm 2, \ldots, \quad \Delta J = \pm 1.$$

A vibrational transition is therefore accompanied by a rotational structure. The spectrum splits into two branches:

- **P branch**: $\Delta J = -1$, transitions $J \to J - 1$. The line frequencies are

$$\nu_P(J) = \nu_0 - 2B J, \quad J = 1, 2, 3, \ldots$$

- **R branch**: $\Delta J = +1$, transitions $J \to J + 1$. The line frequencies are

$$\nu_R(J) = \nu_0 + 2B(J+1), \quad J = 0, 1, 2, \ldots$$

There is no Q branch ($\Delta J = 0$) for a diatomic with $\Sigma$ electronic state, because the total parity forbids it. The P and R branches are equally spaced in the rigid-rotor limit, with a gap of $4B$ at the band centre.

A real ro-vibrational spectrum of HCl shows:

- A strong fundamental band at $\nu_0 \approx 2886\,\text{cm}^{-1}$.
- A first overtone at $2\nu_0$ with about 1/100 the intensity.
- Higher overtones at rapidly decreasing intensities.

The P and R branches have line spacings that decrease with $J$ because of centrifugal distortion, and the band intensities show a maximum where the Boltzmann population of the lower $J$ levels is highest.

### Microwave, infrared, and visible regions

Different transitions lie in different spectral regions:

- **Microwave** (1–100 GHz, 0.03–3 cm$^{-1}$): pure rotational transitions of light molecules.
- **Far-infrared** (100–1000 GHz, 3–30 cm$^{-1}$): pure rotational transitions of heavier molecules.
- **Mid-infrared** (10–4000 cm$^{-1}$): fundamental vibrational and ro-vibrational transitions.
- **Near-infrared and visible** (4000–25000 cm$^{-1}$): overtone and electronic-vibrational (vibronic) transitions.
- **Ultraviolet** (> 25000 cm$^{-1}$): pure electronic transitions.

### Diatomic molecular spectroscopy and astrophysics

Ro-vibrational spectra of simple molecules are observed throughout the interstellar medium. CO, the second most abundant molecule in the universe after H$_2$, has a rotational transition at 115 GHz (the $J = 1 \to 0$ line) that is the standard tracer of molecular gas in galaxies. The vibrational bands of H$_2$ at 2.12 µm are observed in active galactic nuclei. Methane, water, and many other molecules have been detected in exoplanet atmospheres through their ro-vibrational signatures in transit spectroscopy. These applications make diatomic spectroscopy a foundational tool in modern astrophysics.

## Key Ideas

- **Rigid rotor**: rotational energy $E_J = B h J(J+1)$; selection rule $\Delta J = \pm 1$; pure rotational spectrum in the microwave region.
- **Quantum harmonic oscillator**: vibrational energy $E_v = \hbar\omega_e(v + 1/2)$; selection rule $\Delta v = \pm 1$; zero-point energy $\hbar\omega_e/2$.
- **Morse potential**: anharmonic correction; energies $E_v = \hbar\omega_e(v + 1/2) - \hbar\omega_e x_e(v + 1/2)^2$.
- **Ro-vibrational band**: P branch ($\Delta J = -1$) at $\nu_0 - 2BJ$, R branch ($\Delta J = +1$) at $\nu_0 + 2B(J+1)$; no Q branch for $\Sigma$ states.
- **Centrifugal distortion**: the next-order correction, $\propto -D J^2(J+1)^2$, makes line spacings decrease with $J$.
- **Anharmonicity**: allows overtones with $\Delta v > 1$, with rapidly decreasing intensity.

## Worked Examples

### Example 1 — Rotational spectrum of $^{12}$C$^{16}$O

CO has $B \approx 1.931\,\text{cm}^{-1}$ and $D \approx 6.4 \times 10^{-6}\,\text{cm}^{-1}$. Compute the frequencies of the $J = 0 \to 1$ and $J = 1 \to 2$ transitions.

**Solution.** In wavenumber units,

$$\nu(J \to J+1) = 2B(J+1) - 4D(J+1)^3.$$

For $J = 0 \to 1$: $\nu = 2 \times 1.931 - 4 \times 6.4 \times 10^{-6} \times 1 = 3.862 - 2.56 \times 10^{-5} \approx 3.862\,\text{cm}^{-1}$, corresponding to 115.8 GHz.

For $J = 1 \to 2$: $\nu = 2 \times 1.931 \times 2 - 4 \times 6.4 \times 10^{-6} \times 8 = 7.724 - 2.05 \times 10^{-4} \approx 7.724\,\text{cm}^{-1}$, corresponding to 231.5 GHz.

The $J = 1 \to 2$ line is exactly twice the $J = 0 \to 1$ line in the rigid-rotor limit; centrifugal distortion reduces it by a tiny but measurable amount.

### Example 2 — Vibrational spectrum of HCl

HCl has $\omega_e = 2990\,\text{cm}^{-1}$, $\omega_e x_e = 52.8\,\text{cm}^{-1}$, and $B_e = 10.59\,\text{cm}^{-1}$. Compute the frequencies of the $v = 0 \to 1$ fundamental and the $v = 0 \to 2$ first overtone.

**Solution.** The energy levels are $E_v = \hbar\omega_e(v + 1/2) - \hbar\omega_e x_e(v + 1/2)^2$. In wavenumber units,

$$E_v/hc = \omega_e(v + 1/2) - \omega_e x_e(v + 1/2)^2.$$

For $v = 0$: $E_0/hc = 1495 - 13.2 = 1481.8\,\text{cm}^{-1}$.

For $v = 1$: $E_1/hc = 4485 - 118.8 = 4366.2\,\text{cm}^{-1}$.

For $v = 2$: $E_2/hc = 7475 - 356.4 = 7118.6\,\text{cm}^{-1}$.

The fundamental is at $E_1 - E_0 = 2884.4\,\text{cm}^{-1}$. The first overtone is at $E_2 - E_0 = 5636.8\,\text{cm}^{-1}$. Both are slightly less than the harmonic values of 2990 and 5980 cm$^{-1}$ because of anharmonicity.

### Example 3 — Locating a P-branch line in a ro-vibrational spectrum

For CO ($B_e = 1.931\,\text{cm}^{-1}$), find the P-branch line originating from $J = 4$.

**Solution.** The P branch has $\Delta J = -1$, so $J = 4 \to 3$. The line position is

$$\nu_P(4) = \nu_0 - 2B_e \times 4 = \nu_0 - 15.45\,\text{cm}^{-1}.$$

For the CO fundamental, $\nu_0 \approx 2143\,\text{cm}^{-1}$, so this P(4) line is at $2127.5\,\text{cm}^{-1}$. The R-branch counterpart originating from $J = 3$ would be at $\nu_0 + 2B_e \times 4 = 2150.7\,\text{cm}^{-1}$.

## Common Misconceptions

- **"A molecule can have $E = 0$ at the lowest vibrational level."** No. The zero-point energy $\hbar\omega_e/2$ is unavoidable; the molecule cannot be at rest in the classical sense.
- **"The vibrational and rotational spectra are independent."** They are coupled. The rotational constant $B_v$ depends on $v$, and the centrifugal distortion introduces higher-order couplings. The pure rotational and pure vibrational pictures are limits; real spectra show combined ro-vibrational structure.
- **"All diatomics have a Q branch."** No. The Q branch ($\Delta J = 0$) is forbidden in $\Sigma$ electronic states by parity. It appears in $\Pi$, $\Delta$, etc. states, where the electronic orbital angular momentum along the bond axis is non-zero.
- **"The Morse potential is exact."** No. The Morse form is a useful approximation with three parameters; real diatomic potentials are not exactly Morse. The energy levels in a real potential have additional small corrections described by higher-order Dunham coefficients.
- **"The pure rotational line at 115 GHz of CO is at 115 GHz exactly."** The line centre depends slightly on the rotational quantum number, the centrifugal distortion, and the hyperfine structure. Precision spectroscopy measures these small deviations to determine the molecular constants.

## Connections

- The rigid rotor and harmonic oscillator are the same Hamiltonians treated in introductory quantum mechanics, here applied to molecular degrees of freedom.
- The Born–Oppenheimer separation is the same approximation that underlies nearly all of computational chemistry, from Hartree–Fock to density-functional theory.
- The Morse potential is the prototype of all anharmonic corrections; it appears in lattice vibrations of solids (the same anharmonicity that gives thermal expansion and finite thermal conductivity).
- The P and R branches of a ro-vibrational band are the molecular analogue of the electric-dipole selection rules for atoms: one unit of angular momentum is carried away or brought in by the photon.
- CO rotational transitions are the workhorse of molecular-line astronomy; the $J = 1 \to 0$ line at 115 GHz is the most observed molecular line in the universe.
- Diatomic spectroscopy is also the basis of trace-gas sensing: tunable diode laser absorption spectroscopy (TDLAS) uses mid-infrared diode lasers to measure parts-per-billion concentrations of NO, NO$_2$, NH$_3$, H$_2$O, etc., in atmospheric and combustion studies.

## Quick Check

1. State the rotational energy formula for a rigid diatomic rotor and the selection rule for pure rotational transitions.
2. Explain the origin of the zero-point energy of a quantum harmonic oscillator.
3. Sketch the P and R branches of a ro-vibrational spectrum and identify the band centre.
4. Why is there no Q branch in a $\Sigma$ electronic state?
5. The CO $J = 1 \to 0$ line is at 115.271 GHz. The reduced mass of $^{12}$C$^{16}$O is $1.138 \times 10^{-26}$ kg. Compute the bond length of CO.

## Takeaway

- Diatomic molecules have quantised rotational and vibrational motion described by the rigid rotor and harmonic oscillator.
- The rotational constant $B$ and vibrational frequency $\omega_e$ are determined by the moment of inertia and the force constant, which in turn depend on the bond length and the bond strength.
- Ro-vibrational spectra show P and R branches centred on the vibrational band origin; the absence of a Q branch for $\Sigma$ states is a parity effect.
- Anharmonicity (Morse) and centrifugal distortion (Dunham) corrections reveal the true shape of the molecular potential and the dissociation energy.
- Rotational spectroscopy of simple molecules like CO is one of the most important tools of modern astrophysics.
