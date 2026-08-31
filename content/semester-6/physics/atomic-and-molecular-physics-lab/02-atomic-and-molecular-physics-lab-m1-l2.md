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
lessonId: atomic-and-molecular-physics-lab-m1-l2
lessonName: Diffraction and Interferometry — Fabry-Perot and Michelson
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - atomic-and-molecular-physics-lab-m1-l1
learningObjectives:
  - Set up a Fabry-Perot etalon and observe the concentric interference rings; measure the free spectral range and the finesse.
  - Use a Michelson interferometer to measure the wavelength of a laser and to observe the interference fringes.
  - Determine the index of refraction of a glass plate from the shift of the interference fringes.
concepts:
  - Fabry-Perot etalon
  - Free spectral range
  - Finesse
  - Airy function
  - Michelson interferometer
  - Interference fringes
  - Path difference
  - Coherence
  - Refractive index measurement
tags:
  - physics
  - laboratory
  - interferometry
  - fabry-perot
  - michelson
  - interference
sourceType: authored-courseware
assessmentHints:
  - Fabry-Perot FSR: Δλ = λ² / (2 d) for normal incidence, or Δν = c / (2 d).
  - Fabry-Perot finesse: F = π √R / (1 - R), where R is the mirror reflectivity.
  - Michelson: fringe shift = 2 d / λ, where d is the mirror displacement.
status: in-review
***

# Diffraction and Interferometry — Fabry-Perot and Michelson

## Overview

The Fabry-Perot etalon and the Michelson interferometer are the two most important high-resolution interferometers in atomic and molecular physics. The Fabry-Perot etalon is a resonant cavity that transmits light only at specific wavelengths; it is used for high-resolution spectroscopy of atomic and molecular lines. The Michelson interferometer is a two-beam interferometer that splits a beam, sends the two parts along different paths, and recombines them; it is used for precise length measurements, Fourier transform spectroscopy, and the historical Michelson-Morley experiment.

This lesson covers the apparatus (a Fabry-Perot etalon, a Michelson interferometer, a laser, a light source, a lens, a screen or a detector), the procedure (observe the Fabry-Perot rings, measure the FSR and the finesse; observe the Michelson fringes, measure the wavelength; measure the refractive index of a glass plate), the analysis (compute the FSR, the finesse, the wavelength, the refractive index), and the dominant sources of error (mirror imperfections, beam alignment, coherence length, mechanical stability).

## Learning Path

1. **Set up the Fabry-Perot etalon.** Illuminate the etalon with a laser or a spectral line; observe the concentric rings.
2. **Measure the FSR.** Vary the spacing of the etalon; measure the change in the ring pattern; compute the FSR.
3. **Measure the finesse.** From the width of the rings (at half maximum), compute the finesse; compare with the theoretical value.
4. **Set up the Michelson interferometer.** Align the interferometer with a laser; observe the concentric circular fringes.
5. **Measure the wavelength.** Move one mirror by a known distance; count the fringe shifts; compute the wavelength.
6. **Measure the refractive index.** Insert a glass plate in one arm; measure the fringe shift; compute the refractive index.

## Core Explanation

### Theory: Fabry-Perot Etalon

A Fabry-Perot etalon consists of two parallel mirrors with high reflectivity (R > 0.9). The transmission is maximum when the constructive interference condition is satisfied:

2 n d cos(θ) = m λ, m = 1, 2, 3, ...

where n is the refractive index (≈ 1 for air), d is the spacing, θ is the angle of incidence, m is the order, and λ is the wavelength. For normal incidence (θ = 0), the condition is 2 d = m λ.

The free spectral range (the wavelength difference between adjacent orders) is

Δλ_FSR = λ² / (2 d).

For d = 1 mm and λ = 500 nm, Δλ_FSR = 0.125 nm.

The finesse is the ratio of the FSR to the full width at half maximum (FWHM) of a transmission peak:

F = Δλ_FSR / δλ = π √R / (1 − R).

For R = 0.95, F ≈ 60.

The transmission of the etalon is described by the Airy function:

T(δ) = 1 / (1 + F sin²(δ / 2)),

where δ = 4 π n d cos(θ) / λ is the phase difference. The maximum transmission (T = 1) occurs at δ = 2 π m; the minimum (T = T_min = 4 R / (1 + R)²) occurs at δ = (2 m + 1) π.

### Theory: Michelson Interferometer

A Michelson interferometer splits a beam with a beamsplitter, sends the two parts along two perpendicular paths, and recombines them. The recombined beam shows interference fringes (concentric circles for a diverging beam) with a phase difference

δ = 2 π · (2 d / λ),

where d is the path difference between the two arms. The condition for constructive interference is 2 d = m λ.

When one mirror is moved by Δd, the path difference changes by 2 Δd, and the number of fringes that pass a reference point is

N = 2 Δd / λ.

By measuring Δd and counting N, the wavelength can be determined to high precision.

### Theory: Refractive Index Measurement

Insert a glass plate of thickness t and refractive index n in one arm of the Michelson interferometer. The optical path in the glass is n t instead of t (in air). The path difference changes by (n − 1) t. The number of fringe shifts is

N = 2 (n − 1) t / λ.

By measuring N, t, and λ, the refractive index n is determined.

### Apparatus

- Fabry-Perot etalon (with a fixed spacing or a variable spacing; mirror reflectivity > 0.9).
- Michelson interferometer (with two mirrors, a beamsplitter, a compensator plate).
- Laser (He-Ne, 632.8 nm; or diode, 635 nm).
- Light source (sodium lamp, mercury lamp, white light source).
- Lens (for collimation or focusing).
- Screen or detector (for observing the fringes).
- Micrometer (for moving the mirror).
- Glass plate (for the refractive index measurement).
- Safety glasses.

### Procedure

1. **Set up the Fabry-Perot etalon.** Place the etalon in front of a laser; observe the concentric rings on a screen.
2. **Measure the FSR.** For a variable-spacing etalon, vary the spacing and observe the change in the ring pattern. The FSR is the spacing change that shifts the pattern by one order.
3. **Measure the finesse.** From the width of the rings (at half maximum), compute the finesse.
4. **Set up the Michelson interferometer.** Align the interferometer; observe the concentric circular fringes.
5. **Measure the wavelength.** Move one mirror by a known distance (e.g. 0.5 mm); count the fringe shifts. Compute the wavelength.
6. **Measure the refractive index.** Insert a glass plate of known thickness; measure the fringe shift. Compute n.

### Analysis

#### Fabry-Perot

For a Fabry-Perot etalon with d = 1 mm and R = 0.95, the FSR is Δλ_FSR = 0.125 nm (at 500 nm). The finesse is F = 60. The resolution is δλ = 0.125 / 60 = 0.002 nm.

For a sodium lamp, the FSR must be larger than the sodium doublet splitting (0.6 nm). With d = 1 mm, the FSR is 0.125 nm — too small. Use d = 5 mm to get FSR = 0.025 nm (still too small) or d = 0.2 mm to get FSR = 0.625 nm (just enough).

#### Michelson

For a He-Ne laser (λ = 632.8 nm) and a mirror displacement of 0.5 mm:

N = 2 · 0.5 × 10⁻³ / 632.8 × 10⁻⁹ = 1580 fringes.

By counting 1580 fringes for a 0.5 mm displacement, the wavelength is determined to 0.1 % (or better).

#### Refractive Index

For a glass plate of thickness t = 5 mm and refractive index n = 1.5, the path difference is (1.5 − 1) · 5 × 10⁻³ = 2.5 × 10⁻³ m. The number of fringe shifts (for a He-Ne laser) is

N = 2 · 2.5 × 10⁻³ / 632.8 × 10⁻⁹ = 7900 fringes.

By counting 7900 fringes, the refractive index is determined to ~ 0.1 %.

### Sources of Error

- **Mirror imperfections.** The Fabry-Perot mirrors must be flat to ~ λ/100; any deviation broadens the fringes.
- **Beam alignment.** The Michelson interferometer must be carefully aligned; a misalignment gives distorted or absent fringes.
- **Coherence length.** The light source must have a coherence length longer than the path difference. A laser has a long coherence length (> 1 m); a sodium lamp has a short coherence length (~ 1 cm).
- **Mechanical stability.** The Michelson interferometer is sensitive to vibrations; use a vibration-isolated table.
- **Refractive index of air.** The path difference depends on the refractive index of air (n_air ≈ 1.0003 at STP). For high-precision measurements, account for the air's refractive index.

## Key Ideas

- Fabry-Perot etalon: two parallel mirrors, free spectral range Δλ = λ² / (2 d), finesse F = π √R / (1 − R).
- Michelson interferometer: two-beam interferometer, path difference 2 d, fringe shift N = 2 Δd / λ.
- Refractive index: (n − 1) t = N λ / 2.
- Resolution: high for both interferometers (Fabry-Perot: δλ = Δλ_FSR / F; Michelson: limited by the coherence length and the mirror quality).

## Worked Examples

#### Example 1: Fabry-Perot Resolution

For a Fabry-Perot etalon with d = 5 mm and R = 0.95, the FSR is Δλ_FSR = (500 × 10⁻⁹)² / (2 · 5 × 10⁻³) = 25 × 10⁻⁶ nm = 2.5 × 10⁻⁵ nm. The finesse is F = 60. The resolution is δλ = 2.5 × 10⁻⁵ / 60 = 4.2 × 10⁻⁷ nm. This is sufficient to resolve the sodium doublet (0.6 nm) and the Zeeman splitting (~ 0.01 nm).

#### Example 2: Michelson Wavelength Measurement

For a He-Ne laser with λ = 632.8 nm, a mirror displacement of 0.1 mm gives N = 2 · 0.1 × 10⁻³ / 632.8 × 10⁻⁹ = 316 fringes. By counting 316 fringes, the wavelength is determined to ~ 0.3 % (or better with more precise counting).

#### Example 3: Refractive Index of Glass

For a glass plate of thickness t = 1.00 mm, the insertion of the plate in one arm of the Michelson shifts the fringes by N = 2 (n − 1) t / λ. For N = 1580 fringes (He-Ne laser, λ = 632.8 nm), the refractive index is n = 1 + N λ / (2 t) = 1 + 1580 · 632.8 × 10⁻⁹ / (2 · 1 × 10⁻³) = 1 + 0.5 = 1.5. This is consistent with crown glass (n = 1.5).

## Common Misconceptions

- **"The Fabry-Perot and the Michelson are the same."** They are different. The Fabry-Perot is a multi-beam interferometer (many beams interfere); the Michelson is a two-beam interferometer (only two beams interfere). The Fabry-Perot has a much higher resolution.
- **"The finesse is the same as the resolution."** The finesse is the ratio of the FSR to the resolution. The resolution is the FSR divided by the finesse.
- **"The Michelson can measure any wavelength."** The Michelson can measure any wavelength, but the precision depends on the coherence length of the source and the quality of the mirrors. For a white-light source, the fringes are visible only over a very short path difference (the coherence length).
- **"The refractive index measurement is exact."** The measurement is affected by the air's refractive index, the temperature, the wavelength, and the surface quality of the glass. The precision is typically ~ 0.001.
- **"The Fabry-Perot transmission is 1 at the peak."** The peak transmission is T_max = 1 (for lossless mirrors); for real mirrors with absorption, T_max < 1.

## Connections

- **Atomic and Molecular Physics (Sem 6 theory).** The Fabry-Perot and the Michelson are the workhorses of high-resolution spectroscopy. The Fabry-Perot is used to resolve the fine structure of spectral lines; the Michelson is used for Fourier transform spectroscopy.
- **Optics.** Both instruments are based on the interference of light. The Fabry-Perot is the prototype of the optical cavity (laser cavity, etalon filter); the Michelson is the prototype of the two-beam interferometer (Twyman-Green, Mach-Zehnder, Sagnac).
- **Metrology.** The Michelson interferometer is the basis of the modern length standard. The wavelength of the iodine-stabilised He-Ne laser is one of the reference wavelengths; the SI metre is defined in terms of the speed of light.
- **Gravitational waves.** The LIGO and Virgo gravitational-wave detectors are Michelson interferometers with 4-km arms. The strain sensitivity is ~ 10⁻²¹, corresponding to a length change of ~ 10⁻¹⁸ m.
- **Astronomy (Sem 5/6).** Stellar interferometers (Michelson stellar interferometer, intensity interferometer) are used to measure the angular diameters of stars. The same physics as the laboratory Michelson, but with much longer baselines (up to 100 m).

## Quick Check

1. What is the FSR of a Fabry-Perot etalon with d = 1 mm and λ = 500 nm?
2. What is the finesse for R = 0.95?
3. What is the resolution of the Fabry-Perot?
4. How many fringes pass when a Michelson mirror is moved by 0.1 mm (λ = 632.8 nm)?
5. What is the path difference in a Michelson?
6. How is the refractive index measured with a Michelson?
7. What is the difference between a Fabry-Perot and a Michelson?
8. What is the coherence length? Why is it important?

## Takeaway

The Fabry-Perot etalon and the Michelson interferometer are the lab's primary tools for high-resolution interferometry. The Fabry-Perot gives the highest resolution; the Michelson is the most versatile. The lab's discipline — careful alignment, accurate mirror control, proper fringe counting, honest uncertainty estimation — is the same discipline that runs through every interferometric measurement. The same physics (interference, coherence, fringe counting) governs the LIGO gravitational-wave detector, the stellar interferometer, and the Fourier-transform spectrometer. The instrument you build today is the prototype of every modern interferometer.
