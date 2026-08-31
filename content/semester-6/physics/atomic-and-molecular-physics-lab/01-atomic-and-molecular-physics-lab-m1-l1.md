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
lessonId: atomic-and-molecular-physics-lab-m1-l1
lessonName: Atomic Spectroscopy — Hydrogen, Mercury, Sodium, and the Zeeman Effect
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - low-dimensional-materials-lab-m1-l6
learningObjectives:
  - Measure the spectrum of hydrogen (Balmer series), mercury, and sodium with a high-resolution spectrometer.
  - Verify the Rydberg formula for hydrogen and determine the Rydberg constant.
  - Observe the Zeeman effect: split a spectral line in a magnetic field and measure the Bohr magneton.
concepts:
  - Atomic spectroscopy
  - High-resolution spectrometer
  - Balmer series
  - Mercury triplet
  - Sodium doublet
  - Zeeman effect
  - Normal and anomalous Zeeman effect
  - Bohr magneton
  - Landé g-factor
tags:
  - physics
  - laboratory
  - atomic
  - spectroscopy
  - zeeman
  - bohr-magneton
sourceType: authored-courseware
assessmentHints:
  - Hydrogen Balmer: Hα (656.3 nm), Hβ (486.1 nm), Hγ (434.0 nm), Hδ (410.2 nm).
  - Mercury yellow doublet: 577.0 and 579.1 nm.
  - Sodium yellow doublet: 589.0 and 589.6 nm (resolvable with a Fabry-Perot).
  - Zeeman splitting: Δλ = (e λ² B) / (4π m_e c) for the normal Zeeman effect.
status: in-review
***

# Atomic Spectroscopy — Hydrogen, Mercury, Sodium, and the Zeeman Effect

## Overview

Atomic spectroscopy is the study of the discrete spectral lines emitted or absorbed by atoms. The line positions are determined by the energy levels of the atom; the line intensities are determined by the transition probabilities. High-resolution spectroscopy (with a resolving power > 10⁵) can resolve the fine structure of the lines (e.g. the sodium doublet, the Zeeman splitting).

This lesson covers the apparatus (a high-resolution spectrometer, a discharge tube for hydrogen, mercury, or sodium, a magnet for the Zeeman effect, a Fabry-Perot etalon for high resolution), the procedure (record the spectrum, identify the lines, measure the wavelengths, observe the Zeeman splitting), the analysis (verify the Rydberg formula, measure the Bohr magneton), and the dominant sources of error (instrumental broadening, Doppler broadening, Zeeman tube alignment).

## Learning Path

1. **Set up the spectrometer.** Set up the discharge tube in front of the spectrometer slit. Allow the tube to warm up.
2. **Record the spectrum of hydrogen.** Use a hydrogen discharge tube; record the Balmer lines (Hα, Hβ, Hγ, Hδ).
3. **Verify the Rydberg formula.** Plot 1/λ against (1/4 − 1/n²); fit a straight line; extract the Rydberg constant.
4. **Record the spectrum of mercury.** Use a mercury discharge tube; record the prominent lines (yellow doublet, green, blue, violet).
5. **Record the spectrum of sodium.** Use a sodium discharge tube; resolve the sodium doublet (589.0 and 589.6 nm) with a Fabry-Perot etalon.
6. **Observe the Zeeman effect.** Place a mercury or sodium discharge tube in a magnetic field; observe the splitting of the spectral lines. Measure the splitting as a function of the magnetic field.

## Core Explanation

### Theory: Atomic Energy Levels

The energy levels of a hydrogen atom are

E_n = − 13.6 eV / n², n = 1, 2, 3, ...

The transitions from n_i to n_f (< n_i) emit photons of wavelength

1/λ = R (1/n_f² − 1/n_i²), R = 1.097 × 10⁷ m⁻¹.

For multi-electron atoms, the energy levels are described by the quantum numbers n, l, m_l, s, m_s, and the transition rules (Δl = ±1, Δm_l = 0, ±1, Δm_s = 0). The fine structure (splitting due to spin-orbit coupling) gives the sodium doublet (3p ²P_{1/2, 3/2}) and the mercury triplet (3p ³P_{0, 1, 2}).

### Theory: Zeeman Effect

In a magnetic field B, the energy levels split according to

ΔE = m_l · μ_B · B,

where μ_B = e ℏ / (2 m_e) = 9.274 × 10⁻²⁴ J/T is the Bohr magneton and m_l is the magnetic quantum number. For the normal Zeeman effect (singlet states), the splitting is uniform; the spectral line splits into three components (π, σ+, σ−).

For the anomalous Zeeman effect (multiplet states with spin), the splitting is more complex; the Landé g-factor accounts for the spin contribution:

ΔE = m_J · g_J · μ_B · B,

where g_J is the Landé g-factor. The spectral line splits into multiple components.

The wavelength shift is

Δλ = (λ² / h c) · g · μ_B · B,

where g is the Landé g-factor (g = 1 for the normal Zeeman effect, g = 1.5 for some sodium D lines). For B = 1 T and λ = 500 nm, Δλ ≈ 0.05 nm — small but measurable with a high-resolution spectrometer.

### Theory: Fabry-Perot Etalon

A Fabry-Perot etalon is a high-resolution spectrometer consisting of two parallel mirrors with high reflectivity. The transmission is maximum when the constructive interference condition is satisfied:

2 n d cos(θ) = m λ,

where n is the refractive index, d is the spacing, θ is the angle, m is the order, and λ is the wavelength. The free spectral range (the wavelength difference between adjacent orders) is

Δλ_FSR = λ² / (2 n d).

For d = 1 mm and λ = 500 nm, Δλ_FSR = 0.125 nm — small enough to resolve the sodium doublet (Δλ = 0.6 nm).

The finesse F is the ratio of the free spectral range to the resolution:

F = Δλ_FSR / δλ = π √R / (1 − R),

where R is the reflectivity of the mirrors. For R = 0.95, F ≈ 60; the resolution is δλ = 0.125 / 60 = 0.002 nm — sufficient to resolve the Zeeman splitting.

### Apparatus

- High-resolution spectrometer (a 1 m or 2 m Czerny-Turner spectrometer with a 1200 lines/mm grating, or a Fabry-Perot etalon).
- Discharge tubes: hydrogen, mercury, sodium (or cadmium, helium, neon).
- Power supply for the discharge tubes (5-10 kV at 10-30 mA).
- Electromagnet (0-2 T) for the Zeeman effect.
- Fabry-Perot etalon (for high resolution).
- Photomultiplier tube (PMT) or CCD for detection.
- Safety glasses (the discharge tubes emit UV; the high voltage is dangerous).

### Procedure

1. **Set up the spectrometer.** Mount the discharge tube in front of the slit. Allow the tube to warm up (10-15 minutes for sodium).
2. **Calibrate the spectrometer.** Use a mercury lamp with known lines (e.g. 546.1 nm green) to calibrate the wavelength scale.
3. **Record the hydrogen spectrum.** Scan the spectrometer from 380 nm to 700 nm; record the intensity as a function of wavelength. Identify the Balmer lines.
4. **Record the mercury spectrum.** Replace the hydrogen tube with a mercury tube. Scan from 380 nm to 700 nm.
5. **Record the sodium spectrum.** Replace with a sodium tube. Use the Fabry-Perot etalon to resolve the doublet.
6. **Observe the Zeeman effect.** Place the mercury or sodium tube in the magnetic field. Scan across one of the lines (e.g. the mercury green line at 546.1 nm). Observe the splitting as a function of B.

### Analysis

#### Hydrogen Spectrum and the Rydberg Constant

For the hydrogen Balmer series, plot 1/λ (y) against (1/4 − 1/n²) (x). A linear fit returns the slope = R. The expected value is R = 1.097 × 10⁷ m⁻¹.

For the data:

| Line | n | λ (nm) | 1/λ (m⁻¹) | (1/4 − 1/n²) |
|------|---|-------|----------|--------------|
| Hα | 3 | 656.3 | 1.524 × 10⁶ | 0.1389 |
| Hβ | 4 | 486.1 | 2.057 × 10⁶ | 0.1875 |
| Hγ | 5 | 434.0 | 2.304 × 10⁶ | 0.2100 |
| Hδ | 6 | 410.2 | 2.438 × 10⁶ | 0.2222 |

A linear fit gives slope = (1.524 × 10⁶) / 0.1389 = 1.097 × 10⁷ m⁻¹, in agreement with the accepted value.

#### Mercury Spectrum

The mercury spectrum has many lines. The prominent lines are:
- 253.7 nm (UV, resonance line)
- 365.0 nm (UV)
- 404.7 nm (violet)
- 435.8 nm (blue)
- 491.6 nm (cyan)
- 546.1 nm (green)
- 577.0 and 579.1 nm (yellow doublet)
- 690.7 nm (red)

The yellow doublet (577.0 and 579.1 nm) is a triplet transition: 6s6p ³P_0,1,2 → 6s6s ³S_1. The splitting is due to spin-orbit coupling.

#### Sodium Doublet

The sodium D lines are at 589.0 nm (D2, 3p ²P_{3/2} → 3s ²S_{1/2}) and 589.6 nm (D1, 3p ²P_{1/2} → 3s ²S_{1/2}). The splitting is 0.6 nm (1.7 cm⁻¹ in wavenumber). A Fabry-Perot etalon with a finesse of 30 can resolve the doublet.

#### Zeeman Effect

For the mercury green line (546.1 nm) in a magnetic field of 1 T:

Δλ = (λ² / h c) · g · μ_B · B

For the normal Zeeman effect (g = 1):
Δλ = (546.1 × 10⁻⁹)² · 1 · 9.274 × 10⁻²⁴ · 1 / (6.626 × 10⁻³⁴ · 3 × 10⁸)
   = 2.98 × 10⁻¹³ · 9.274 × 10⁻²⁴ / 1.99 × 10⁻²⁵
   = 1.39 × 10⁻¹¹ m = 0.0139 nm.

This is small but measurable with a high-resolution spectrometer. The line splits into three components: σ+ (shifted to higher frequency), π (unshifted), σ− (shifted to lower frequency).

For the anomalous Zeeman effect (e.g. sodium D2, g = 1.5), the splitting is larger and more complex (6 components for D2, 4 components for D1).

### Sources of Error

- **Instrumental broadening.** The finite resolution of the spectrometer broadens the lines. Use a spectrometer with a resolution better than the natural linewidth.
- **Doppler broadening.** The thermal motion of the atoms broadens the lines. The Doppler width is Δλ_D = (λ / c) · √(8 k_B T ln 2 / m). For sodium at 500 K, Δλ_D = 0.001 nm.
- **Self-absorption.** The discharge tube absorbs the light emitted by the same atoms. Use a low-pressure tube to minimise self-absorption.
- **Magnet calibration.** The magnetic field must be calibrated. Use a Hall probe or a teslameter.
- **Zeeman tube alignment.** The tube must be perpendicular to the magnetic field for the normal Zeeman effect. A misalignment gives a mix of σ and π components.

## Key Ideas

- Hydrogen Balmer series: 1/λ = R (1/4 − 1/n²), R = 1.097 × 10⁷ m⁻¹.
- Mercury yellow doublet: 577.0 and 579.1 nm, due to spin-orbit coupling.
- Sodium D doublet: 589.0 and 589.6 nm.
- Zeeman effect: spectral line splits in a magnetic field. Normal Zeeman: Δλ = (λ² / h c) · μ_B · B. Anomalous: includes the Landé g-factor.
- Fabry-Perot etalon: high-resolution spectrometer, resolution δλ = Δλ_FSR / F.

## Worked Examples

#### Example 1: Rydberg Constant

From the hydrogen data above, the slope of 1/λ vs (1/4 − 1/n²) is 1.097 × 10⁷ m⁻¹. This is the Rydberg constant R.

#### Example 2: Zeeman Splitting of the Mercury Green Line

For B = 1 T, the normal Zeeman splitting of the 546.1 nm line is Δλ = 0.014 nm. The line splits into three components: σ+ at 546.07 nm, π at 546.10 nm, σ− at 546.13 nm.

#### Example 3: Sodium D2 Zeeman Splitting

The sodium D2 line (3p ²P_{3/2} → 3s ²S_{1/2}) has g = 1.5. In a magnetic field of 1 T, the splitting is

Δλ = (λ² / h c) · g · μ_B · B = 0.014 · 1.5 = 0.021 nm.

The D2 line splits into 6 components: the upper level (²P_{3/2}) has m_J = -3/2, -1/2, +1/2, +3/2, and the lower level (²S_{1/2}) has m_J = -1/2, +1/2. The selection rules Δm_J = 0, ±1 give 6 transitions.

## Common Misconceptions

- **"The Zeeman effect is always normal."** No. The normal Zeeman effect (uniform splitting) occurs only for singlet states (S = 0). For multiplet states, the anomalous Zeeman effect (non-uniform splitting) occurs, with a Landé g-factor different from 1.
- **"The sodium doublet is two lines."** The sodium doublet is a single transition (3p → 3s) with two components (D1 and D2) due to spin-orbit coupling. Each component is further split by the Zeeman effect in a magnetic field.
- **"The Fabry-Perot resolution is the same as the free spectral range."** No. The resolution is the FSR divided by the finesse. For R = 0.95, F = 60; the resolution is 60× better than the FSR.
- **"The Doppler width is the natural linewidth."** No. The natural linewidth is set by the lifetime of the excited state (~ 10 MHz for visible lines). The Doppler width is set by the thermal motion (~ 1 GHz at 500 K). The Doppler width is much larger than the natural linewidth.
- **"The Rydberg constant is the same for all atoms."** No. The Rydberg constant is the same for all hydrogen-like atoms (single electron). For multi-electron atoms, the Rydberg constant is modified by the reduced mass and the screening.

## Connections

- **Atomic and Molecular Physics (Sem 6 theory).** Atomic spectroscopy is the primary tool for studying atomic structure. The line positions give the energy levels; the line intensities give the transition probabilities; the Zeeman splitting gives the g-factors.
- **Quantum Mechanics (Sem 4 theory).** The energy levels, the transition rules, and the spin-orbit coupling are the central results of quantum mechanics. The Zeeman effect is the prototype of the magnetic interaction.
- **Astrophysics (Sem 5/6).** Stellar spectra are observed with high-resolution spectrographs. The line positions identify the elements; the line strengths give the abundances; the Zeeman effect gives the magnetic field of the star.
- **Laser physics.** The sodium doublet is the basis of the sodium-vapour lamp and the sodium-vapour laser. The mercury line at 253.7 nm is the basis of the fluorescent lamp.
- **Metrology.** The Rydberg constant is one of the most precisely known physical constants. The current value is R = 1.0973731568508 × 10⁷ m⁻¹, with an uncertainty of < 10⁻¹².

## Quick Check

1. What is the wavelength of Hα? Hβ? Hγ? Hδ?
2. What is the Rydberg constant?
3. What is the wavelength of the sodium D1 line? D2?
4. What is the wavelength of the mercury green line?
5. What is the normal Zeeman effect? The anomalous Zeeman effect?
6. What is the Bohr magneton?
7. What is the finesse of a Fabry-Perot etalon?
8. A mercury green line in a 0.5 T magnetic field is split into three components. What is the splitting (in nm)?

## Takeaway

Atomic spectroscopy is the lab's primary tool for studying atomic structure. The Balmer series, the mercury triplet, the sodium doublet, and the Zeeman effect are the central experimental signatures. The lab's discipline — high-resolution spectrometer, careful sample preparation, accurate wavelength calibration, proper data analysis — is the same discipline that runs through every atomic physics experiment. The same physics (energy levels, transition rules, spin-orbit coupling, Zeeman effect) governs every atom, every star, and every laser. The data you collect today is the raw material for the analysis that follows.
