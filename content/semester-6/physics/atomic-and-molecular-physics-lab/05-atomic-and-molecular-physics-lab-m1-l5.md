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
lessonId: atomic-and-molecular-physics-lab-m1-l5
lessonName: Molecular Electronic Spectra, Fluorescence, and Phosphorescence
lessonNumber: 5
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - atomic-and-molecular-physics-lab-m1-l4
learningObjectives:
  - Measure the UV-Vis absorption spectrum of a molecule in solution; identify the electronic transition and the absorption peak.
  - Measure the fluorescence spectrum of the same molecule; determine the Stokes shift and the fluorescence lifetime.
  - Measure the phosphorescence spectrum and the lifetime of a phosphorescent molecule; compare with the fluorescence.
concepts:
  - Electronic transition
  - Singlet and triplet states
  - Absorption and emission
  - Stokes shift
  - Fluorescence
  - Phosphorescence
  - Intersystem crossing
  - Jablonski diagram
  - Fluorescence lifetime
tags:
  - physics
  - laboratory
  - molecular
  - electronic
  - fluorescence
  - phosphorescence
sourceType: authored-courseware
assessmentHints:
  - Stokes shift: difference between the absorption peak and the emission peak.
  - Fluorescence: S1 → S0, lifetime ~ ns.
  - Phosphorescence: T1 → S0, lifetime ~ ms to s.
status: in-review
***

# Molecular Electronic Spectra, Fluorescence, and Phosphorescence

## Overview

Molecular electronic spectra are the visible and UV absorption and emission bands of molecules. The electronic transition (from the ground electronic state S₀ to an excited electronic state S₁) is accompanied by vibrational and rotational transitions, giving a broad band. The fluorescence (S₁ → S₀) is the emission from the lowest vibrational level of S₁ to the various vibrational levels of S₀; it is shifted to longer wavelengths than the absorption (the Stokes shift). The phosphorescence (T₁ → S₀) is the emission from the triplet state; it is much slower than the fluorescence because the transition is spin-forbidden.

This lesson covers the apparatus (a UV-Vis spectrophotometer, a fluorometer, a sample, a UV lamp for visual observation), the procedure (measure the absorption spectrum, the fluorescence spectrum, the phosphorescence spectrum, the fluorescence lifetime), the analysis (identify the electronic transition, measure the Stokes shift, measure the lifetimes, construct a Jablonski diagram), and the dominant sources of error (sample concentration, inner filter effects, scattered light, oxygen quenching).

## Learning Path

1. **Measure the UV-Vis absorption spectrum** of a fluorescent molecule in solution (e.g. fluorescein, rhodamine 6G, quinine). Identify the absorption peak and the molar extinction coefficient.
2. **Measure the fluorescence spectrum** of the same solution. Identify the emission peak and the Stokes shift.
3. **Measure the fluorescence lifetime** with a pulsed laser or a time-correlated single photon counting (TCSPC) system. Determine the lifetime from the exponential decay.
4. **Measure the phosphorescence spectrum** of a phosphorescent molecule (e.g. eosin, benzophenone). Identify the phosphorescence peak and the lifetime.
5. **Construct a Jablonski diagram** showing the ground state, the excited singlet states, the triplet state, and the transitions.

## Core Explanation

### Theory: Electronic Transitions

The electronic states of a molecule are classified by their spin multiplicity: singlet (S, total spin S = 0, multiplicity 2S+1 = 1) and triplet (T, total spin S = 1, multiplicity 2S+1 = 3). The ground state of most organic molecules is a singlet (S₀). The excited states are the singlet states (S₁, S₂, ...) and the triplet states (T₁, T₂, ...).

The electronic transition from S₀ to S₁ is in the visible or near-UV (e.g. 400-600 nm for many dyes). The transition from S₀ to T₁ is spin-forbidden and is much weaker. The transition from T₁ to S₀ (phosphorescence) is also spin-forbidden and is much slower than the fluorescence (S₁ → S₀).

### Theory: Jablonski Diagram

The Jablonski diagram is a schematic of the electronic states and the transitions:

- **Absorption**: S₀ → S₁, S₂, ... (typically < 1 ns).
- **Internal conversion**: S₂ → S₁, S₁ → S₀ (radiationless, ~ ps).
- **Vibrational relaxation**: within an electronic state (~ ps).
- **Fluorescence**: S₁ → S₀ (radiative, ~ ns).
- **Intersystem crossing**: S₁ → T₁ (spin-forbidden, ~ ns).
- **Phosphorescence**: T₁ → S₀ (spin-forbidden, ~ ms to s).
- **Non-radiative decay**: S₁ → S₀ or T₁ → S₀ (radiationless, e.g. via internal conversion).

The relative rates of these processes determine the fluorescence quantum yield (the fraction of absorbed photons that are re-emitted as fluorescence) and the phosphorescence quantum yield.

### Theory: Stokes Shift

The Stokes shift is the difference between the absorption peak and the emission peak:

Δ ν_Stokes = ν_absorption − ν_emission.

The Stokes shift is caused by the relaxation of the excited state (vibrational relaxation, solvent reorganisation) before emission. A large Stokes shift is desirable for fluorescence microscopy and sensing applications, because it allows the excitation and the emission to be separated by a filter.

### Theory: Fluorescence Lifetime

The fluorescence lifetime is the time constant of the exponential decay of the fluorescence intensity after a pulsed excitation:

I(t) = I_0 exp(−t / τ),

where τ is the fluorescence lifetime. The lifetime is related to the radiative rate k_r and the non-radiative rate k_nr by

1 / τ = k_r + k_nr.

The fluorescence quantum yield is

Φ_F = k_r / (k_r + k_nr) = τ / τ_r,

where τ_r = 1 / k_r is the radiative lifetime (the lifetime in the absence of non-radiative decay).

For fluorescein in water, τ ≈ 4 ns, τ_r ≈ 7 ns, Φ_F ≈ 0.6. For rhodamine 6G in ethanol, τ ≈ 4 ns, Φ_F ≈ 0.95.

### Theory: Phosphorescence

The phosphorescence is the emission from the triplet state T₁ to the ground state S₀. The transition is spin-forbidden; the radiative rate is ~ 10³ s⁻¹ (vs ~ 10⁹ s⁻¹ for the fluorescence). The lifetime is ~ 1 ms to 1 s (vs ~ 1 ns for the fluorescence). The phosphorescence is observed at low temperature (to reduce the non-radiative decay) or in a rigid matrix (e.g. in a polymer or in a glass).

The phosphorescence spectrum is shifted to longer wavelengths than the fluorescence (because the triplet state is lower in energy than the singlet state). The phosphorescence lifetime is longer at low temperature (because the non-radiative decay is reduced).

### Apparatus

- UV-Vis spectrophotometer.
- Fluorometer (with a monochromator for excitation and emission, a PMT detector).
- Time-resolved fluorometer (with a pulsed LED or laser, a TCSPC system).
- Sample: fluorescein, rhodamine 6G, quinine (for fluorescence); eosin, benzophenone (for phosphorescence).
- Cuvette (quartz, 1 cm path length).
- Solvent: water, ethanol, methanol (depending on the sample).
- UV lamp (for visual observation of fluorescence).
- Safety glasses (the UV light is dangerous; the laser is dangerous).

### Procedure

1. **Prepare the solution.** Dissolve the fluorescent molecule in a suitable solvent at a low concentration (e.g. 10⁻⁵ to 10⁻⁶ M) to avoid the inner filter effect.
2. **Measure the UV-Vis absorption spectrum.** Place the solution in the UV-Vis spectrophotometer. Scan from 200 to 700 nm. Record the absorption peak and the molar extinction coefficient.
3. **Measure the fluorescence spectrum.** Place the solution in the fluorometer. Set the excitation wavelength to the absorption peak. Scan the emission from 400 to 800 nm. Record the emission peak and the Stokes shift.
4. **Measure the fluorescence lifetime.** Use a pulsed LED or laser (with a pulse width < 1 ns) to excite the sample. Record the fluorescence decay with a TCSPC system. Determine the lifetime from the exponential decay.
5. **Measure the phosphorescence spectrum** (for a phosphorescent sample). Use a low temperature (e.g. 77 K with liquid nitrogen) to reduce the non-radiative decay. Scan the emission from 400 to 800 nm with a delay after the excitation pulse.
6. **Construct a Jablonski diagram.** Plot the ground state, the excited singlet states, the triplet state, and the transitions (absorption, fluorescence, phosphorescence, non-radiative).

### Analysis

#### Absorption and Emission

For fluorescein in water (pH > 7), the absorption peak is at 494 nm and the emission peak is at 521 nm. The Stokes shift is 27 nm (1050 cm⁻¹).

The molar extinction coefficient at the absorption peak is ε ≈ 7 × 10⁴ M⁻¹ cm⁻¹. The fluorescence quantum yield is Φ_F ≈ 0.93.

#### Fluorescence Lifetime

The fluorescence decay of fluorescein in water is a single exponential with τ ≈ 4.1 ns. The radiative lifetime is τ_r = τ / Φ_F ≈ 4.4 ns. The non-radiative rate is k_nr = 1/τ − 1/τ_r = 1.4 × 10⁸ s⁻¹.

#### Phosphorescence

The phosphorescence of eosin in a rigid glass at 77 K has a peak at ~ 680 nm and a lifetime of ~ 1 ms. The large Stokes shift (absorption at 525 nm, phosphorescence at 680 nm) and the long lifetime are characteristic of the triplet state.

### Sources of Error

- **Inner filter effect.** High concentrations of the fluorophore absorb the excitation and the emission, reducing the observed fluorescence. Use low concentrations (10⁻⁵ to 10⁻⁶ M).
- **Scattered light.** The scattered excitation light can overwhelm the fluorescence. Use a monochromator to select the emission wavelength.
- **Oxygen quenching.** Dissolved oxygen in the solvent can quench the fluorescence and the phosphorescence. Degas the solution by bubbling nitrogen or argon.
- **Sample degradation.** High excitation power can bleach the fluorophore. Use a low excitation power and a short exposure.
- **Inner filter effect in the absorption measurement.** High concentrations can saturate the absorption. Use concentrations that give an absorbance of ~ 0.1-1.0.

## Key Ideas

- Electronic states: singlet (S₀, S₁, ...) and triplet (T₁, T₂, ...). Ground state is S₀ for most organic molecules.
- Jablonski diagram: absorption, internal conversion, vibrational relaxation, fluorescence, intersystem crossing, phosphorescence, non-radiative decay.
- Stokes shift: difference between absorption and emission peaks.
- Fluorescence lifetime: 1/τ = k_r + k_nr. Typically 1-10 ns.
- Phosphorescence lifetime: 1 ms to 1 s. Spin-forbidden transition.

## Worked Examples

#### Example 1: Stokes Shift

For fluorescein, the absorption peak is at 494 nm and the emission peak is at 521 nm. The Stokes shift is

Δ λ = 521 − 494 = 27 nm.

In wavenumber: Δ ν̃ = 1/494 × 10⁻⁷ − 1/521 × 10⁻⁷ = (20243 − 19194) cm⁻¹ = 1049 cm⁻¹.

The Stokes shift is ~ 1050 cm⁻¹, typical for a fluorescent dye.

#### Example 2: Fluorescence Quantum Yield

The fluorescence lifetime is τ = 4.1 ns. The radiative lifetime is τ_r = 4.4 ns. The fluorescence quantum yield is

Φ_F = τ / τ_r = 4.1 / 4.4 = 0.93.

The non-radiative rate is k_nr = 1/τ − 1/τ_r = 1.4 × 10⁸ s⁻¹.

#### Example 3: Phosphorescence

The phosphorescence of eosin at 77 K has a peak at 680 nm and a lifetime of 1 ms. The phosphorescence quantum yield is ~ 0.5 (the other 0.5 is non-radiative). The radiative rate is k_r = Φ_P / τ_P = 500 s⁻¹. The non-radiative rate is k_nr = 1/τ_P − k_r = 500 s⁻¹.

The long lifetime is due to the spin-forbidden nature of the T₁ → S₀ transition. The phosphorescence is observed at low temperature because the non-radiative rate is reduced at low T.

## Common Misconceptions

- **"Fluorescence and phosphorescence are the same."** No. Fluorescence is S₁ → S₀ (spin-allowed, fast); phosphorescence is T₁ → S₀ (spin-forbidden, slow).
- **"The Stokes shift is a constant."** The Stokes shift depends on the solvent, the temperature, and the molecular structure. A polar solvent gives a larger Stokes shift.
- **"A higher fluorescence quantum yield is always better."** A high quantum yield is good for bright fluorescence; for some applications (e.g. FRET sensors), a moderate quantum yield with a long lifetime is preferred.
- **"Phosphorescence is the same as delayed fluorescence."** No. Delayed fluorescence is the thermal activation of the triplet state back to the singlet state, followed by fluorescence. The lifetime is similar to phosphorescence, but the spectrum is the same as the fluorescence.
- **"The fluorescence lifetime is the same as the radiative lifetime."** No. The fluorescence lifetime is the inverse of the sum of the radiative and non-radiative rates; the radiative lifetime is the inverse of the radiative rate alone.

## Connections

- **Atomic and Molecular Physics (Sem 6 theory).** Fluorescence and phosphorescence are the primary tools for studying the electronic structure of molecules. The spectra give the energy levels; the lifetimes give the transition rates; the quantum yields give the branching ratios.
- **Chemistry.** Fluorescence is used in chemical analysis (fluorescent indicators, fluorescent labels), in biochemistry (fluorescent proteins, fluorescent dyes), and in forensics (fingerprint detection).
- **Biology.** Green fluorescent protein (GFP) and its variants are used to label proteins in living cells. The fluorescence microscopy of GFP-labelled proteins is one of the most important techniques in modern biology.
- **Medicine.** Fluorescence imaging is used in medical diagnosis (e.g. fluorescence endoscopy, fluorescence-guided surgery). The fluorescence of porphyrins is used in photodynamic therapy.
- **Materials science.** Fluorescent materials are used in displays (OLEDs), in lighting (white LEDs), in solar cells (down-conversion), and in security (anti-counterfeiting).

## Quick Check

1. What is the difference between fluorescence and phosphorescence?
2. What is the Stokes shift?
3. What is the typical fluorescence lifetime? Phosphorescence lifetime?
4. What is the fluorescence quantum yield?
5. What is the Jablonski diagram?
6. What is the role of the triplet state in phosphorescence?
7. Why is phosphorescence observed at low temperature?
8. What is the inner filter effect?

## Takeaway

Fluorescence and phosphorescence are the lab's primary tools for studying the electronic states of molecules. The Jablonski diagram, the Stokes shift, the fluorescence lifetime, and the phosphorescence lifetime are the central concepts. The lab's discipline — careful sample preparation, proper wavelength selection, accurate lifetime measurement, honest uncertainty estimation — is the same discipline that runs through every fluorescence and phosphorescence experiment. The same physics (singlet and triplet states, radiative and non-radiative transitions, intersystem crossing) applies to all organic molecules, from the simplest dye to the most complex protein. The data you collect today is the raw material for the analysis that follows.
