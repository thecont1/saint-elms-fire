***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: quantum-mechanics-lab
courseName: Quantum Mechanics Lab
moduleId: quantum-mechanics-lab-module-1
moduleName: Spectroscopy, the Photoelectric Effect, and Quantum Demonstrations
lessonId: quantum-mechanics-lab-m1-l1
lessonName: Hydrogen Spectrum and the Rydberg Constant
lessonNumber: 1
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - waves-and-optics-lab-m1-l6
learningObjectives:
  - Measure the wavelengths of the Balmer series lines of hydrogen using a spectrometer.
  - Verify the Rydberg formula and determine the Rydberg constant R.
  - Distinguish the Lyman, Balmer, Paschen, and Brackett series and identify them from the wavelength ranges.
concepts:
  - Hydrogen atom
  - Balmer series
  - Rydberg formula
  - Energy levels
  - Bohr model
  - Spectrometer
  - Diffraction grating
  - Wavelength
tags:
  - physics
  - laboratory
  - quantum
  - spectroscopy
  - hydrogen
  - rydberg
sourceType: authored-courseware
assessmentHints:
  - The Balmer series: Hα (656.3 nm), Hβ (486.1 nm), Hγ (434.0 nm), Hδ (410.2 nm).
  - The Rydberg formula: 1/λ = R (1/2² - 1/n²) for the Balmer series.
  - The Rydberg constant R = 1.097 × 10⁷ m⁻¹.
status: in-review
***

# Hydrogen Spectrum and the Rydberg Constant

## Overview

The hydrogen atom is the simplest atomic system, and its spectrum is the cleanest example of quantised energy levels. The Balmer series — the visible lines of hydrogen — is a set of discrete lines at wavelengths 656.3 nm (red, Hα), 486.1 nm (blue-green, Hβ), 434.0 nm (violet, Hγ), 410.2 nm (violet, Hδ), and so on. The wavelengths follow the Rydberg formula

1/λ = R (1/2² − 1/n²),  n = 3, 4, 5, ...

where R is the Rydberg constant. Measure the wavelengths and fit the formula; you have measured R to ~ 0.1 %.

This lesson covers the apparatus (a hydrogen discharge tube, a spectrometer, a diffraction grating), the procedure (set up the spectrometer, observe the Balmer lines, measure the angles), the analysis (Rydberg formula fit, extraction of R), and the dominant sources of error (calibration of the spectrometer, line identification, instrument broadening).

## Learning Path

1. **Set up the spectrometer** — collimator, grating (e.g. 600 lines/mm), telescope. Calibrate the spectrometer with a known source (sodium or mercury) if needed.
2. **Illuminate the slit with the hydrogen discharge tube** — a Geissler tube or hydrogen-filled discharge tube with a high-voltage power supply.
3. **Observe the Balmer lines** — Hα (red), Hβ (blue-green), Hγ (violet), Hδ (violet). For each line, record the first-order diffraction angle on both sides of the central maximum.
4. **Compute wavelengths** — using the grating equation d sin θ = m λ with m = 1 and d = 1/600 mm.
5. **Fit the Rydberg formula** — plot 1/λ against (1/4 − 1/n²); the slope is R.

## Core Explanation

### Theory: The Hydrogen Spectrum

The hydrogen atom has energy levels

E_n = − 13.6 eV / n²,  n = 1, 2, 3, ...

The transition from n_i to n_f (< n_i) emits a photon of energy

h ν = E_{n_i} − E_{n_f} = 13.6 eV (1/n_f² − 1/n_i²).

The wavelength is

1/λ = (13.6 eV / h c) (1/n_f² − 1/n_i²) = R (1/n_f² − 1/n_i²),

where R = 13.6 eV / (h c) = 1.097 × 10⁷ m⁻¹ is the Rydberg constant.

The spectral series are named after the lower level:
- **Lyman** (n_f = 1): ultraviolet, 91–122 nm.
- **Balmer** (n_f = 2): visible, 365–656 nm.
- **Paschen** (n_f = 3): infrared, 0.8–1.9 μm.
- **Brackett** (n_f = 4): infrared, 1.5–4.0 μm.
- **Pfund** (n_f = 5): infrared, 2.3–7.5 μm.

The Balmer series is the easiest to observe in the lab because the lines are in the visible range. A hydrogen discharge tube produces the lines by exciting the gas; the atoms decay radiatively, emitting photons at the series wavelengths.

### Theory: The Grating Equation (Recap)

The grating equation d sin θ = m λ relates the diffraction angle θ to the wavelength λ. With a known line density (e.g. 600 lines/mm, d = 1.667 μm), measuring θ gives λ.

### Apparatus

- Spectrometer (collimator + telescope + grating table + angular scale).
- Diffraction grating (600 lines/mm or 1200 lines/mm).
- Hydrogen discharge tube (Geissler tube) with a high-voltage power supply (typically 5 kV at 10 mA).
- Sodium or mercury lamp (for calibration of the spectrometer).
- Safety glasses (the hydrogen discharge tube emits UV; do not look directly at it).

### Procedure

1. **Set up the spectrometer** as in L4 of the Waves and Optics Lab. Calibrate the spectrometer with the sodium D line (589.3 nm) or the mercury green line (546.1 nm).
2. **Place the hydrogen discharge tube in front of the slit.** The tube should be at the focal point of the collimator lens (or the slit should be imaged onto the tube).
3. **Switch on the high-voltage power supply.** The tube will glow pink-red (the Balmer series is dominated by Hα at 656 nm).
4. **Look through the telescope.** Rotate the telescope to find the first-order (m = 1) Hα line. The line is red. Record the angular position θ_1.
5. **Rotate to the other side** of the central maximum; record the position θ_2. The diffraction angle is θ = (θ_2 − θ_1) / 2.
6. **Repeat for Hβ (blue-green), Hγ (violet), Hδ (violet).**
7. **Compute the wavelengths** using d sin θ = m λ with m = 1.

### Analysis

#### Wavelengths

For each line:

| Line | n_i | λ (nm) | 1/λ (m⁻¹) | (1/4 − 1/n_i²) |
|------|----|-------|----------|----------------|
| Hα | 3 | 656.3 | 1.524 × 10⁶ | 0.13889 |
| Hβ | 4 | 486.1 | 2.057 × 10⁶ | 0.18750 |
| Hγ | 5 | 434.0 | 2.304 × 10⁶ | 0.21000 |
| Hδ | 6 | 410.2 | 2.438 × 10⁶ | 0.22222 |

#### Rydberg Constant

Plot 1/λ (y) against (1/4 − 1/n_i²) (x). A linear fit through the origin gives slope = R.

From the data:
- slope = (1.524 × 10⁶) / 0.13889 = 1.097 × 10⁷ m⁻¹ (Hα)
- slope = (2.057 × 10⁶) / 0.18750 = 1.097 × 10⁷ m⁻¹ (Hβ)
- slope = (2.304 × 10⁶) / 0.21000 = 1.097 × 10⁷ m⁻¹ (Hγ)
- slope = (2.438 × 10⁶) / 0.22222 = 1.097 × 10⁷ m⁻¹ (Hδ)

All four lines give the same R to four significant figures, confirming the Rydberg formula.

#### Improving the Fit

A weighted least-squares fit (with the weights proportional to the inverse variance of 1/λ) gives the best R. The dominant uncertainty is the angular reading (σ_θ ~ 0.5 arcmin), which propagates to σ_λ / λ = σ_θ / tan θ.

For Hα at θ = 23.5° (sin θ = 0.399), σ_θ = 0.5 arcmin = 1.45 × 10⁻⁴ rad, σ_{sin θ} = cos θ · σ_θ = 0.917 · 1.45 × 10⁻⁴ = 1.33 × 10⁻⁴, σ_λ = λ · σ_{sin θ} / sin θ = 656 · 1.33 × 10⁻⁴ / 0.399 = 0.22 nm.

For Hδ at θ = 39.5° (sin θ = 0.636), σ_λ = 410 · cos(39.5°) · 1.45 × 10⁻⁴ / 0.636 = 0.14 nm.

The shorter-wavelength lines have smaller absolute uncertainty in λ; the relative uncertainty (σ_λ / λ) is approximately constant.

### Sources of Error

- **Calibration of the spectrometer.** A miscalibrated spectrometer gives a systematic error in all wavelengths. The calibration is checked with a known line (sodium or mercury) before the measurement.
- **Grating alignment.** The grating rulings must be vertical and the grating normal to the incident beam. Misalignment adds a systematic error.
- **Line identification.** The Hα line is unmistakable (red), but Hβ, Hγ, Hδ are closer together and may be misidentified. Use the relative intensities and the spacing to confirm.
- **Slit width.** A wide slit gives a brighter line but lower resolution. A narrow slit is preferred; the trade-off is intensity.
- **Instrument broadening.** The finite slit width and the diffraction limit of the grating give a finite linewidth (~ 0.1 nm for a typical setup). The line centre can be read to ~ 10 % of the linewidth.

## Key Ideas

- The hydrogen spectrum is a set of discrete lines corresponding to transitions between quantised energy levels.
- The Rydberg formula: 1/λ = R (1/n_f² − 1/n_i²).
- The Balmer series (n_f = 2) is in the visible range.
- The Rydberg constant R = 1.097 × 10⁷ m⁻¹.
- A diffraction grating spectrometer measures the wavelengths to ~ 0.1 %.

## Worked Examples

### Example 1: Single-line wavelength

You measure Hα at θ = 23.5° with a 600 lines/mm grating (d = 1.667 μm). m = 1.

- λ = d sin θ = 1.667 × 10⁻⁶ · 0.399 = 6.65 × 10⁻⁷ m = 665 nm.

The accepted value is 656.3 nm. The discrepancy of 1.3 % is consistent with the uncertainty in θ (~ 0.5°).

### Example 2: Rydberg constant

You measure (1/4 − 1/n²) and 1/λ for the first four Balmer lines:

| Line | n_i | 1/4 − 1/n_i² | 1/λ (m⁻¹) |
|------|----|-------------|-----------|
| Hα | 3 | 0.1389 | 1.524 × 10⁶ |
| Hβ | 4 | 0.1875 | 2.057 × 10⁶ |
| Hγ | 5 | 0.2100 | 2.304 × 10⁶ |
| Hδ | 6 | 0.2222 | 2.438 × 10⁶ |

A linear fit (constrained to pass through the origin) gives R = (Σ(xᵢ yᵢ)) / (Σ xᵢ²) = (0.1389 · 1.524 + 0.1875 · 2.057 + 0.2100 · 2.304 + 0.2222 · 2.438) × 10⁶ / (0.1389² + 0.1875² + 0.2100² + 0.2222²)
= (0.2116 + 0.3857 + 0.4838 + 0.5417) × 10⁶ / (0.01930 + 0.03516 + 0.04410 + 0.04937)
= 1.6228 × 10⁶ / 0.14793
= 1.097 × 10⁷ m⁻¹.

This matches the accepted value R = 1.097 × 10⁷ m⁻¹ to four significant figures.

### Example 3: Higher-order verification

The grating can be used at higher orders. For the green mercury line at 546.1 nm, the second-order (m = 2) is at

sin θ = m λ / d = 2 · 546.1 × 10⁻⁹ / 1.667 × 10⁻⁶ = 0.655, θ = 40.9°.

The third-order (m = 3) is at sin θ = 0.983, θ = 79.4°. The fourth-order would be at sin θ = 1.31, which is unphysical (the grating cannot diffract at > 90°); the m = 4 order is "missing."

## Common Misconceptions

- **"The Balmer series is the only hydrogen series."** It is the only one in the visible range. The Lyman series is in the UV; Paschen, Brackett, Pfund are in the IR.
- **"The hydrogen lines are infinitely sharp."** They have a natural linewidth (~ 10⁻⁸ nm for visible lines) due to the uncertainty principle and the finite lifetime of the excited state. Instrument broadening (~ 0.1 nm in a typical lab) dominates the observed linewidth.
- **"R is a universal constant."** It is a universal constant in the sense that it is the same for all hydrogen-like atoms (i.e. for all atoms with a single electron). For other elements, the Rydberg constant is modified by the reduced mass of the electron.
- **"The Bohr model is correct."** The Bohr model correctly predicts the energy levels of hydrogen, but it fails for more complex atoms and does not provide a correct description of the electron's wavefunction. Quantum mechanics (the Schrödinger equation) is the correct theory.
- **"The high-order lines converge to the series limit."** Yes — for the Balmer series, the limit (n → ∞) is at λ = 1/R / (1/4) = 4/R = 364.5 nm. The lines bunch up near this limit.

## Connections

- **Quantum Mechanics (Sem 4 theory).** The hydrogen atom is the central example of a quantised system. The Schrödinger equation for the Coulomb potential gives the same energy levels as the Bohr model, with the additional bonus of the wavefunctions (orbitals).
- **Spectroscopy.** The Balmer series was the first atomic spectrum to be explained (by Bohr in 1913); it launched the old quantum theory and, eventually, quantum mechanics. The same physics governs the spectra of all atoms, ions, and molecules.
- **Astronomy (Sem 5/6).** The Balmer lines are visible in the spectra of stars; the Hα line is the dominant feature in emission-line nebulae (HII regions). The Doppler shift of the Balmer lines is used to measure the radial velocities of stars.
- **Chemistry.** The hydrogen spectrum is the simplest atomic spectrum; the spectra of other atoms (helium, sodium, mercury) are more complex but follow the same principles of quantised energy levels and radiative transitions.
- **Astrophysics (Sem 5/6).** The 21 cm hydrogen line (a hyperfine transition) is the workhorse of radio astronomy; it is used to map the distribution of neutral hydrogen in the Galaxy and other galaxies. The same energy-level physics, at a much finer energy scale.

## Quick Check

1. State the Rydberg formula. Define each symbol.
2. What is the wavelength of the Hα line? Hβ? Hγ?
3. A line is at λ = 486.1 nm. What is the transition?
4. A line is at λ = 410.2 nm. What is the transition?
5. Why is the Balmer series in the visible range and the Lyman series in the UV?
6. The first four Balmer lines are observed with a 600 lines/mm grating. What are the first-order diffraction angles?
7. Plot 1/λ against (1/4 − 1/n²). What is the slope?
8. A hydrogen discharge tube also emits molecular hydrogen (H₂) lines. How can you tell which lines are atomic and which are molecular?

## Takeaway

The hydrogen spectrum is the lab's introduction to atomic physics. The Balmer series is the visible signature of the quantised energy levels of hydrogen; the Rydberg formula is the mathematical statement of the regularity; the Rydberg constant is the fundamental constant that ties the spectrum together. The lab's discipline — careful spectrometer calibration, accurate angle reading, clean line identification, proper fit to the Rydberg formula — is the same discipline that runs through every spectroscopic measurement in physics, chemistry, and astronomy. The Bohr model is the first quantum theory; the Schrödinger equation is the modern version; both predict the same energy levels for hydrogen. The lines you see tonight in a spectrometer are the same lines that astronomers see in starlight, and the same physics that makes neon signs glow and the Sun shine.
