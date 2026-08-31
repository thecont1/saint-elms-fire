***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: waves-and-optics-lab
courseName: Waves and Optics Lab
moduleId: waves-and-optics-lab-module-1
moduleName: Oscillations, Geometrical Optics, and Wave Optics
lessonId: waves-and-optics-lab-m1-l6
lessonName: Uncertainty, Report Writing, and the Viva
lessonNumber: 6
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - waves-and-optics-lab-m1-l5
learningObjectives:
  - Identify the dominant sources of uncertainty in waves-and-optics experiments (parallax, alignment, calibration, finite precision).
  - Propagate uncertainties through a derived quantity such as the focal length, the radius of curvature, or the wavelength.
  - Write a complete lab report for a waves-and-optics experiment using the canonical structure.
  - Anticipate and answer viva-style questions about the five waves-and-optics experiments.
concepts:
  - Uncertainty propagation
  - Parallax
  - Alignment
  - Calibration
  - Lab report structure
  - Viva preparation
tags:
  - physics
  - laboratory
  - optics
  - uncertainty
  - report-writing
  - viva
sourceType: authored-courseware
assessmentHints:
  - The dominant uncertainty in optics measurements is often the position reading (e.g. vernier, micrometer, spectrometer scale).
  - Parallax errors can be reduced by careful alignment of the eye with the scale.
  - Viva questions often test whether the student can identify the dominant source of error in their own experiment.
status: in-review
***

# Uncertainty, Report Writing, and the Viva

## Overview

The five waves-and-optics experiments you have done — standing waves on a string (Melde's), lens focal length (direct and displacement), Newton's rings, diffraction grating with the spectrometer, and polarisation — all produce numbers that depend on the precise measurement of position, angle, or intensity. The dominant uncertainty in each experiment is usually the position or angle reading, not the underlying physics.

This lesson covers the four dominant sources of uncertainty in waves-and-optics experiments: position reading (vernier, micrometer, spectrometer scale), angle reading (goniometer, polariser rotation), intensity reading (photodetector linearity, source stability), and alignment (lens axis, grating rulings, polariser axes). It walks through a worked example of uncertainty propagation for the radius of curvature from Newton's rings, the wavelength from the grating, and the refractive index from Brewster's angle. It then collects the viva questions an examiner is likely to ask across the five experiments.

## Learning Path

1. **Identify the dominant uncertainty in each experiment** — for Melde's, the loop count and the tension; for the lens, the position of the lens and the screen; for Newton's rings, the ring diameter; for the grating, the angular reading; for Brewster's angle, the angle of incidence.
2. **Propagate uncertainties** — compute the uncertainty in R from Newton's rings, in λ from the grating, in n from Brewster's angle.
3. **Write a complete report** — for one of the waves-and-optics experiments (e.g. Newton's rings), produce a full lab report using the canonical structure.
4. **Viva rehearsal** — work through the viva questions with a partner.

## Core Explanation

### Sources of Uncertainty in Optics Measurements

#### Position Reading

- **Vernier scale (0.05 mm or 0.02 mm resolution).** The reading error is ± 0.5 of the least count, i.e. ± 0.025 mm for a 0.05 mm vernier. For a single reading, the random error is small; for a difference of two readings (e.g. the diameter of a Newton's ring), the random errors add in quadrature.
- **Micrometer (0.01 mm resolution).** Reading error ± 0.005 mm; includes the zero error.
- **Spectrometer scale (1 arcmin or 0.5 arcmin resolution).** Reading error ± 0.5 arcmin. The angle is the difference of two readings, so the random error is ± 0.7 arcmin (√2 times the single-reading error).
- **Travelling microscope (0.01 mm resolution).** Reading error ± 0.005 mm; the same quadrature rule for differences.

#### Angle Reading

- **Polariser rotation (1° resolution).** Reading error ± 0.5°; in Malus's law, I = I_0 cos² θ, the relative error is σ_I / I = 2 |tan θ| σ_θ, which is large near θ = 90°.
- **Goniometer (1 arcmin resolution).** Reading error ± 0.5 arcmin; same as spectrometer.

#### Intensity Reading

- **Photodetector linearity.** A silicon photodiode is linear over many decades; a photomultiplier is linear over a smaller range. Check the linearity with a calibrated source.
- **Source stability.** A sodium lamp or mercury lamp can drift in intensity by 1–2 % over 10 minutes. Allow the lamp to warm up; use a regulated power supply.
- **Background light.** Stray light in the lab adds to the photodetector reading. Shield the detector; work in a darkened area.

#### Alignment

- **Lens axis.** The optical axis of the lens must be perpendicular to the optical bench. A tilted lens introduces astigmatism and coma; the image is not sharp.
- **Grating rulings.** The grating rulings must be vertical and the grating normal to the incident beam. A small misalignment adds a systematic error to θ.
- **Polariser axes.** The transmission axes of the polarisers must be marked. A 1° misalignment adds a 3 % error to cos² θ.
- **Slit width.** A wide slit gives a brighter image but lower resolution. A narrow slit is preferred; the trade-off is intensity vs resolution.

### Uncertainty Propagation Examples

#### Example 1: Radius of Curvature from Newton's Rings

The slope of the D_n² vs n plot is m = 4 R λ. The uncertainty in R is

σ_R / R = √((σ_m / m)² + (σ_λ / λ)²).

For a typical measurement: m = 3.53 × 10⁻⁶ m², σ_m / m = 2 % (from the scatter of the data), λ = 589.3 nm, σ_λ / λ = 0.1 % (the sodium D line is known to high precision). Hence σ_R / R = 2 %; σ_R = 0.03 m. The reported value: R = (1.50 ± 0.03) m.

#### Example 2: Wavelength from the Grating

λ = d sin θ / m. With m = 1, d = 1.667 × 10⁻⁶ m (assumed known to 0.1 %), θ = 20.74° (sin θ = 0.3542), σ_θ = 0.5 arcmin = 0.0083° = 1.45 × 10⁻⁴ rad, σ_{sin θ} = cos θ · σ_θ = 0.9352 · 1.45 × 10⁻⁴ = 1.36 × 10⁻⁴.

σ_λ / λ = √((σ_d / d)² + (σ_{sin θ} / sin θ)²) = √((0.001)² + (1.36 × 10⁻⁴ / 0.3542)²) = √(10⁻⁶ + 1.48 × 10⁻⁷) = √(1.15 × 10⁻⁶) = 0.00107.

σ_λ = 0.00107 · 590.5 nm = 0.63 nm.

Reported: λ = (590.5 ± 0.6) nm. The dominant uncertainty is the angular reading.

#### Example 3: Refractive Index from Brewster's Angle

n = tan θ_B. σ_n / n = (1 / sin θ_B cos θ_B) · σ_θ = (2 / sin 2 θ_B) · σ_θ.

For θ_B = 56.3°, sin 2 θ_B = sin 112.6° = 0.924. σ_θ = 0.5°. σ_n / n = 2 · 0.5 / 0.924 / 57.3 = 0.0189. σ_n = 0.0189 · 1.50 = 0.028. Reported: n = 1.50 ± 0.03. The dominant uncertainty is the angle of incidence.

### Worked Example: Lab Report for Newton's Rings

**Title:** Measurement of the radius of curvature of a plano-convex lens using Newton's rings.

**Abstract:** A plano-convex lens was placed on a flat glass plate and illuminated with sodium light (λ = 589.3 nm). The diameters of the dark rings from n = 5 to n = 30 were measured using a travelling microscope. The plot of D_n² against n is a straight line with slope (3.53 ± 0.07) × 10⁻⁶ m², giving R = (1.50 ± 0.03) m. This is consistent with the catalog value of 1.50 m for a typical 1.5 m lens.

**Theory:** [Air-film geometry: t = r² / (2 R). Interference: dark rings at t = m λ / 2. Combined: D_n² = 4 m R λ. Phase change on reflection: π at the air-glass interface.]

**Apparatus:** Plano-convex lens (catalog R = 1.50 m); flat glass plate; sodium lamp (λ = 589.3 nm); 45° glass plate to direct the light; travelling microscope (0.01 mm resolution).

**Procedure:** [As in the lab manual, with the rings measured at n = 5, 10, 15, 20, 25, 30, taking the average of left-right readings for each ring.]

**Data:**

| n | D_left (mm) | D_right (mm) | D_n (mm) | D_n² (mm²) |
|--:|------------:|-------------:|---------:|-----------:|
| 5 | 12.85 | 13.20 | 4.20 | 17.6 |
| 10 | 12.40 | 13.70 | 5.90 | 34.8 |
| 15 | 12.10 | 14.00 | 7.30 | 53.3 |
| 20 | 11.90 | 14.20 | 8.40 | 70.6 |
| 25 | 11.75 | 14.35 | 9.40 | 88.4 |
| 30 | 11.60 | 14.50 | 10.30 | 106.1 |

**Analysis:** Plot D_n² (y, in mm²) against n (x, dimensionless). A linear fit returns slope = (106.1 − 17.6) / (30 − 5) = 88.5 / 25 = 3.54 mm²/ring. The intercept is small (consistent with zero). The slope in SI units: 3.54 × 10⁻⁶ m²/ring. R = slope / (4 λ) = 3.54 × 10⁻⁶ / (4 · 589.3 × 10⁻⁹) = 1.50 m. σ_R / R = 2 % (from the fit); σ_R = 0.03 m.

**Discussion:** The measured R = 1.50 ± 0.03 m is in agreement with the catalog value. The dominant uncertainty is the ring diameter measurement (~ 0.05 mm, contributing ~ 1 % to D_n²), compounded by the small number of data points. A larger number of rings (n = 5 to 50) would reduce the uncertainty. Spherical aberration of the lens is a possible systematic error: the measured R is the paraxial radius, but a real lens has a slightly different radius for marginal rays. The effect is small for the small ring diameters used here.

**Conclusion:** The radius of curvature of the lens was measured to be R = (1.50 ± 0.03) m, in agreement with the catalog value. The Newton's rings method is a sensitive and accurate way to measure R for a long-focal-length lens.

**References:** [Lab manual; any textbook chapters on interference; any external sources.]

## Key Ideas

- The dominant uncertainty in waves-and-optics experiments is the position or angle reading.
- σ_λ / λ is often dominated by σ_θ / θ, not by σ_d / d.
- The plot of D_n² against n (Newton's rings), sin θ against m (grating), or I/I_max against θ (Malus's law) is the standard analysis.
- A good lab report identifies the dominant source of uncertainty and estimates its magnitude.
- The viva tests the student's understanding of the experiment, not just the formulas.

## Common Misconceptions

- **"A 0.01 mm reading precision gives 0.01 mm uncertainty."** The reading precision is the least count; the reading uncertainty is usually ± 0.5 of the least count, or larger if the scale is poorly defined.
- **"Parallax is not an issue in optics."** Parallax is a major issue in optics — the eye must be aligned with the scale to read it correctly. The error can be several millimetres for a poorly-aligned reading.
- **"The lab's accuracy is limited by the formulas."** The accuracy is limited by the measurements. The formulas are exact (within the paraxial approximation); the experimental accuracy is set by the precision of the position and angle readings.
- **"A photodetector is more accurate than the eye."** A photodetector is more precise and more linear, but it must be calibrated. An uncalibrated photodetector can give systematic errors of 10 % or more.
- **"A long report is a better report."** A long report is not necessarily better. The best reports are concise, well-organised, and focused on the key results and uncertainties.

## Connections

- **Waves and Optics (Sem 3 theory).** Uncertainty analysis is the bridge between theory and experiment. The theoretical formulas (D_n² = 4 n R λ, d sin θ = m λ, tan θ_B = n) are exact; the experimental accuracy is set by the measurement precision.
- **Statistics (later semesters).** The propagation of uncertainty is a special case of the linearised error propagation in multivariate statistics. The same mathematics underlies least-squares fitting, hypothesis testing, and Bayesian inference.
- **Engineering.** Every measurement in engineering comes with an uncertainty; every design specification has a tolerance. The lab's discipline — careful measurement, honest uncertainty estimation, and clear reporting — is the discipline of engineering practice.
- **Metrology.** The science of measurement is the discipline of reducing uncertainties to the smallest possible values. The interferometric measurement of length (using fringes of known wavelength) is the most precise length measurement available, with relative uncertainties of 10⁻¹¹ or better.

## Quick Check

1. The reading precision of a vernier is 0.05 mm. What is the reading uncertainty?
2. A spectrometer scale reads to 1 arcmin. What is the uncertainty in an angle that is the difference of two readings?
3. The slope of a D_n² vs n plot is 3.5 × 10⁻⁶ m² with σ_slope = 0.07 × 10⁻⁶ m². The wavelength is 589.3 nm with σ_λ = 0.1 nm. What is R ± σ_R?
4. A grating measurement gives θ = 20.74° with σ_θ = 0.5°. What is the uncertainty in λ?
5. Brewster's angle for glass is 56.3° with σ_θ = 0.5°. What is the uncertainty in n?
6. Why is the dominant uncertainty in optics usually the position or angle reading, not the wavelength or the line density?
7. Sketch a complete lab report structure. What goes in each section?
8. Viva question: "Why is the central spot of Newton's rings dark, not bright?"

## Takeaway

Uncertainty is the lab's most important concept, and it is particularly visible in waves-and-optics experiments. The dominant uncertainty is the position or angle reading, not the underlying physics. The lab's discipline — careful alignment, accurate reading, multiple repeats, honest uncertainty estimation — is the same discipline that runs through every optical measurement in physics and engineering. The lab report is the formal record of the measurement, the analysis, the uncertainty, and the conclusion. The viva is the examiner's way of testing whether you understand the experiment you have done — not just the formulas, but the apparatus, the procedure, the error sources, and the conclusions. Read your own data; know what each formula does; anticipate where the systematic errors live.
