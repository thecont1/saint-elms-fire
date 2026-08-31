***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: atomic-and-molecular-physics-lab
courseName: Atomic and Molecular Physics Lab
moduleId: atomic-and-molecular-physics-lab-module-1
moduleName: Atomic Spectroscopy, Lasers, and Molecular Physics
lessonId: atomic-and-molecular-physics-lab-m1-l4
lessonName: Molecular Spectroscopy — Rotational, Vibrational, and Raman
lessonNumber: 4
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - atomic-and-molecular-physics-lab-m1-l3
learningObjectives:
  - Measure the rotational spectrum of a diatomic molecule (e.g. HCl, CO) in the microwave region; determine the rotational constant B.
  - Measure the vibrational spectrum of a diatomic molecule (e.g. HCl) in the infrared region; determine the vibrational frequency ω_e and the anharmonicity ω_e x_e.
  - Measure the Raman spectrum of a liquid (e.g. CCl₄, benzene); identify the vibrational modes.
concepts:
  - Rotational spectroscopy
  - Rigid rotor
  - Rotational constant B
  - Vibrational spectroscopy
  - Harmonic oscillator
  - Vibrational frequency ω_e
  - Anharmonicity ω_e x_e
  - Raman spectroscopy
  - Stokes and anti-Stokes lines
  - Vibrational modes
tags:
  - physics
  - laboratory
  - molecular
  - rotational
  - vibrational
  - raman
sourceType: authored-courseware
assessmentHints:
  - Rotational: E_J = B J(J+1), transition frequency ν = 2B(J+1).
  - Vibrational: E_v = ω_e (v + 1/2) - ω_e x_e (v + 1/2)².
  - Raman: Stokes line at ν_0 - ν_vib, anti-Stokes at ν_0 + ν_vib.
status: in-review
***

# Molecular Spectroscopy — Rotational, Vibrational, and Raman

## Overview

Molecular spectroscopy is the study of the discrete energy levels of molecules. The energy levels are described by the rotational, vibrational, and electronic states. The rotational levels (in the microwave region, 1-100 GHz) give the moments of inertia and the bond lengths. The vibrational levels (in the infrared region, 10-100 THz) give the force constants and the bond stiffness. The electronic levels (in the visible and UV regions) give the electronic structure. The Raman spectrum (shifted by the vibrational frequency from the laser line) gives the vibrational modes of symmetric molecules.

This lesson covers the apparatus (a microwave spectrometer for rotational spectroscopy, an FTIR for vibrational spectroscopy, a Raman spectrometer, a sample), the procedure (record the spectrum, identify the lines, fit the model), the analysis (compute the rotational constant, the vibrational frequency, the anharmonicity, the Raman shifts), and the dominant sources of error (instrumental broadening, sample pressure, laser power).

## Learning Path

1. **Measure the rotational spectrum of HCl.** Use a microwave spectrometer; record the absorption lines in the 1-100 GHz range.
2. **Fit the rigid rotor model.** Plot the line frequencies against J; fit a straight line; extract the rotational constant B.
3. **Measure the vibrational spectrum of HCl.** Use an FTIR spectrometer; record the absorption spectrum in the 2500-3100 cm⁻¹ range.
4. **Fit the anharmonic oscillator model.** Identify the fundamental band and the overtone bands; fit to extract ω_e and ω_e x_e.
5. **Measure the Raman spectrum of CCl₄.** Use a Raman spectrometer with a 532 nm laser; record the Raman shifts.
6. **Identify the vibrational modes.** Compare with the literature; identify the symmetric and antisymmetric modes.

## Core Explanation

### Theory: Rotational Spectroscopy

The rotational energy levels of a diatomic molecule (treated as a rigid rotor) are

E_J = B J(J+1), J = 0, 1, 2, ...

where B is the rotational constant (in energy units) and J is the rotational quantum number. In wavenumber units,

E_J / (h c) = B̃ J(J+1),

where B̃ is the rotational constant in cm⁻¹. For HCl, B̃ = 10.44 cm⁻¹, corresponding to a rotational constant B = h c B̃ = 2.07 × 10⁻²² J.

The selection rule for rotational transitions is ΔJ = ±1. The transition frequency (in wavenumber) is

ν̃ = 2 B̃ (J + 1).

The spectrum is a series of equally spaced lines at 2 B̃, 4 B̃, 6 B̃, ... (for J = 0, 1, 2, ...).

The moment of inertia is

I = h / (8 π² c B̃).

For HCl, I = 2.65 × 10⁻⁴⁷ kg·m². The bond length is

r = √(I / μ),

where μ is the reduced mass. For HCl, μ = m_H · m_Cl / (m_H + m_Cl) = 1.63 × 10⁻²⁷ kg. r = √(2.65 × 10⁻⁴⁷ / 1.63 × 10⁻²⁷) = 1.28 × 10⁻¹⁰ m = 1.28 Å. This is consistent with the literature value for HCl (1.27 Å).

### Theory: Vibrational Spectroscopy

The vibrational energy levels of a diatomic molecule (treated as an anharmonic oscillator) are

E_v = ω_e (v + 1/2) − ω_e x_e (v + 1/2)², v = 0, 1, 2, ...

where ω_e is the harmonic vibrational frequency, ω_e x_e is the anharmonicity constant, and v is the vibrational quantum number. In wavenumber units,

E_v / (h c) = ω̃_e (v + 1/2) − ω̃_e x̃_e (v + 1/2)².

For HCl, ω̃_e = 2990 cm⁻¹ and ω̃_e x̃_e = 52 cm⁻¹.

The selection rule for vibrational transitions is Δv = ±1 (within the harmonic approximation). The transition frequency (in wavenumber) is

ν̃ = ω̃_e − 2 ω̃_e x̃_e (v + 1).

The fundamental band (v = 0 → 1) is at ν̃ = ω̃_e − 2 ω̃_e x̃_e ≈ 2886 cm⁻¹ for HCl. The first overtone (v = 0 → 2) is at ν̃ = 2 ω̃_e − 6 ω̃_e x̃_e ≈ 5668 cm⁻¹.

The force constant is

k = μ (2 π c ω̃_e)².

For HCl, k = 1.63 × 10⁻²⁷ · (2 π · 3 × 10¹⁰ · 2990)² = 516 N/m.

### Theory: Raman Spectroscopy

Raman scattering is the inelastic scattering of light by a molecule. The energy of the scattered photon is shifted by the vibrational energy of the molecule:

ν_scattered = ν_0 ± ν_vib,

where ν_0 is the laser frequency and ν_vib is the vibrational frequency. The minus sign is the Stokes line (the molecule gains energy); the plus sign is the anti-Stokes line (the molecule loses energy). The anti-Stokes line is weaker than the Stokes line because fewer molecules are in the excited vibrational state at room temperature.

The Raman spectrum is a plot of intensity vs Raman shift (in cm⁻¹). For CCl₄, the prominent Raman shifts are at 218, 314, 459, and 762 cm⁻¹, corresponding to the four vibrational modes of the tetrahedral molecule (ν₂, ν₄, ν₁, ν₃).

### Apparatus

- Microwave spectrometer (for rotational spectroscopy; 1-100 GHz).
- FTIR spectrometer (for vibrational spectroscopy; 500-4000 cm⁻¹).
- Raman spectrometer (with a 532 nm or 785 nm laser).
- Sample: HCl gas (in a cell for microwave), liquid HCl (in a sealed cell for FTIR), CCl₄ liquid (in a cuvette for Raman).
- Reference sample (for instrument calibration).
- Safety glasses (the laser is dangerous; the FTIR uses a high-intensity source).

### Procedure

1. **Measure the rotational spectrum of HCl.** Set up the microwave spectrometer; fill the cell with HCl gas at low pressure (e.g. 0.1 mbar). Scan the frequency from 1 to 100 GHz. Record the absorption spectrum.
2. **Identify the lines.** The rotational lines of HCl are at 2 B̃ (J+1) for J = 0, 1, 2, ..., up to about J = 10. The spacing is 2 B̃ ≈ 21 cm⁻¹ (or 630 GHz).
3. **Fit the rigid rotor model.** Plot the line frequencies against J; fit a straight line; extract B̃.
4. **Measure the vibrational spectrum of HCl.** Use the FTIR spectrometer; record the absorption spectrum from 500 to 4000 cm⁻¹. The fundamental band is at ~ 2886 cm⁻¹; the overtone is at ~ 5668 cm⁻¹.
5. **Fit the anharmonic oscillator model.** Identify the fundamental and the overtone; fit to extract ω̃_e and ω̃_e x̃_e.
6. **Measure the Raman spectrum of CCl₄.** Place the sample in the Raman spectrometer. Set the laser power (e.g. 50 mW). Scan the Raman shift from 100 to 3500 cm⁻¹. Record the spectrum.
7. **Identify the vibrational modes.** Compare the Raman shifts with the literature.

### Analysis

#### Rotational Constant and Bond Length

For HCl, the rotational lines are at 21.0, 41.9, 62.9, 83.8, 104.7, 125.6, 146.6, 167.5, 188.4, 209.4 cm⁻¹. The slope of ν̃ vs J is 20.94 cm⁻¹ per J, giving 2 B̃ = 20.94 cm⁻¹, B̃ = 10.47 cm⁻¹.

The moment of inertia is I = h / (8 π² c B̃) = 6.626 × 10⁻³⁴ / (8 π² · 3 × 10¹⁰ · 10.47 · 100) = 2.67 × 10⁻⁴⁷ kg·m².

The bond length is r = √(I / μ) = √(2.67 × 10⁻⁴⁷ / 1.63 × 10⁻²⁷) = 1.28 × 10⁻¹⁰ m = 1.28 Å.

#### Vibrational Frequency and Anharmonicity

For HCl, the fundamental band is at 2885.9 cm⁻¹ and the first overtone is at 5668.0 cm⁻¹. The transition frequencies are:

ν̃(0→1) = ω̃_e − 2 ω̃_e x̃_e
ν̃(0→2) = 2 ω̃_e − 6 ω̃_e x̃_e

Solving: 2 ν̃(0→1) − ν̃(0→2) = 2 (ω̃_e − 2 ω̃_e x̃_e) − (2 ω̃_e − 6 ω̃_e x̃_e) = 2 ω̃_e x̃_e.

2 ω̃_e x̃_e = 2 · 2885.9 − 5668.0 = 103.8 cm⁻¹, so ω̃_e x̃_e = 51.9 cm⁻¹.

ω̃_e = ν̃(0→1) + 2 ω̃_e x̃_e = 2885.9 + 103.8 = 2989.7 cm⁻¹.

#### Raman Spectrum of CCl₄

The Raman spectrum of CCl₄ has four prominent peaks at 218, 314, 459, and 762 cm⁻¹. The 459 cm⁻¹ line is the symmetric stretch (ν₁, A₁); the 218 and 314 cm⁻¹ lines are the bending modes (ν₂ and ν₄); the 762 cm⁻¹ line is the antisymmetric stretch (ν₃, T₂).

### Sources of Error

- **Instrumental broadening.** The finite resolution of the spectrometer broadens the lines. Use a high-resolution spectrometer for precise measurements.
- **Doppler broadening.** The thermal motion of the molecules broadens the rotational lines. Cool the sample to reduce the Doppler width.
- **Pressure broadening.** High pressure broadens the lines due to collisions. Use a low-pressure sample.
- **Sample purity.** Impurities in the sample can introduce additional lines. Use a high-purity sample.
- **Laser power.** High laser power can heat the sample or cause fluorescence. Use a low laser power and a long integration time.

## Key Ideas

- Rotational spectroscopy: E_J = B J(J+1), transition at 2B(J+1). For HCl, B = 10.44 cm⁻¹, r = 1.28 Å.
- Vibrational spectroscopy: E_v = ω_e(v+1/2) − ω_e x_e(v+1/2)². For HCl, ω_e = 2990 cm⁻¹, ω_e x_e = 52 cm⁻¹, k = 516 N/m.
- Raman spectroscopy: Stokes at ν₀ − ν_vib, anti-Stokes at ν₀ + ν_vib.
- Vibrational modes: symmetric and antisymmetric stretches, bending modes. For CCl₄: 218, 314, 459, 762 cm⁻¹.

## Worked Examples

#### Example 1: HCl Bond Length

The rotational constant of HCl is B̃ = 10.44 cm⁻¹. The moment of inertia is I = h / (8 π² c B̃) = 2.65 × 10⁻⁴⁷ kg·m². The reduced mass is μ = m_H · m_Cl / (m_H + m_Cl) = 1.63 × 10⁻²⁷ kg. The bond length is r = √(I / μ) = 1.28 × 10⁻¹⁰ m = 1.28 Å.

#### Example 2: HCl Force Constant

The vibrational frequency is ω̃_e = 2990 cm⁻¹. The angular frequency is ω = 2 π c ω̃_e = 2 π · 3 × 10⁸ · 2990 · 100 = 5.64 × 10¹⁴ rad/s. The force constant is k = μ ω² = 1.63 × 10⁻²⁷ · (5.64 × 10¹⁴)² = 518 N/m.

#### Example 3: DCl Isotope Shift

For DCl (deuterium chloride), the reduced mass is μ_DCl = m_D · m_Cl / (m_D + m_Cl) = 3.14 × 10⁻²⁷ kg (≈ 2 × μ_HCl because D is twice as heavy as H). The rotational constant is B̃_DCl = B̃_HCl · μ_HCl / μ_DCl = 10.44 / 1.93 = 5.41 cm⁻¹. The vibrational frequency is ω̃_e,DCl = ω̃_e,HCl · √(μ_HCl / μ_DCl) = 2990 / √1.93 = 2152 cm⁻¹.

## Common Misconceptions

- **"The rotational lines are equally spaced."** They are approximately equally spaced for a rigid rotor. For a non-rigid rotor, the spacing decreases at high J (centrifugal distortion).
- **"The vibrational frequency is the same for all isotopes."** No. The vibrational frequency depends on the reduced mass: ω̃ ∝ 1/√μ. Deuterium substitution reduces the frequency by a factor of ~ √2.
- **"Raman scattering is the same as IR absorption."** No. IR absorption requires a change in the dipole moment; Raman scattering requires a change in the polarisability. For centrosymmetric molecules (e.g. O₂, N₂), the modes are Raman-active but IR-inactive (and vice versa).
- **"The anti-Stokes line is the same intensity as the Stokes line."** No. The anti-Stokes line is weaker at room temperature because fewer molecules are in the excited vibrational state.
- **"The rotational constant is independent of the vibrational state."** For a non-rigid rotor, B depends on v. The vibration-rotation interaction gives B_v = B_e − α_e (v + 1/2), where α_e is the vibration-rotation coupling constant.

## Connections

- **Atomic and Molecular Physics (Sem 6 theory).** Molecular spectroscopy is the primary tool for studying molecular structure. The rotational spectrum gives the geometry; the vibrational spectrum gives the force constants; the electronic spectrum gives the electronic structure.
- **Chemistry.** The vibrational spectrum is the "fingerprint" of a molecule. The technique is used in chemical analysis, reaction monitoring, and atmospheric sensing.
- **Astronomy (Sem 5/6).** Molecular lines are observed in stellar spectra, in interstellar clouds, and in planetary atmospheres. The detection of complex molecules (e.g. amino acids) in space is one of the most active areas of modern astrophysics.
- **Atmospheric science.** The IR spectrum of atmospheric molecules (CO₂, H₂O, CH₄, O₃) is used to monitor the composition and the temperature of the atmosphere. Greenhouse gases are identified by their IR absorption bands.
- **Biology.** IR and Raman spectroscopy are used to study biological molecules (proteins, DNA, lipids). The amide I band (~ 1650 cm⁻¹) is a marker of the protein secondary structure.

## Quick Check

1. What is the rotational constant of HCl? The bond length?
2. What is the vibrational frequency of HCl? The anharmonicity? The force constant?
3. What is the difference between Stokes and anti-Stokes Raman lines?
4. What are the four Raman-active modes of CCl₄?
5. Why is the anti-Stokes line weaker than the Stokes line?
6. What is the moment of inertia of HCl?
7. How is the bond length determined from the rotational constant?
8. How is the force constant determined from the vibrational frequency?

## Takeaway

Molecular spectroscopy is the lab's primary tool for studying molecular structure. The rotational spectrum gives the geometry; the vibrational spectrum gives the force constants; the Raman spectrum gives the vibrational modes. The lab's discipline — careful sample preparation, high-resolution spectroscopy, accurate line identification, proper data fitting — is the same discipline that runs through every molecular spectroscopy experiment. The same principles (rigid rotor, anharmonic oscillator, Raman scattering) apply to all diatomic and polyatomic molecules. The data you collect today is the raw material for the analysis that follows.
