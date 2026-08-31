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
lessonId: waves-and-optics-lab-m1-l4
lessonName: Diffraction, Gratings, and the Spectrometer
lessonNumber: 4
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - waves-and-optics-lab-m1-l3
learningObjectives:
  - Measure the wavelength of a spectral line using a diffraction grating and a spectrometer.
  - Verify the grating equation d sin θ = m λ and determine the grating constant d.
  - Distinguish single-slit diffraction, double-slit interference, and multiple-slit (grating) interference.
concepts:
  - Diffraction
  - Single-slit diffraction
  - Double-slit interference
  - Multiple-slit interference
  - Diffraction grating
  - Grating equation
  - Spectrometer
  - Resolving power
  - Spectral line
tags:
  - physics
  - laboratory
  - optics
  - diffraction
  - grating
  - spectrometer
sourceType: authored-courseware
assessmentHints:
  - Grating equation: d sin θ = m λ, where d is the grating spacing (1/N, N = lines/m).
  - Resolving power of a grating: R = m N, where N is the total number of lines illuminated.
  - Use the first-order (m = 1) spectrum for accurate wavelength measurements; higher orders may overlap.
status: in-review
***

# Diffraction, Gratings, and the Spectrometer

## Overview

A diffraction grating is a glass or metal plate ruled with many parallel lines, typically 600 to 1800 lines per mm. When light is incident on the grating, each line acts as a source of secondary wavelets (Huygens' principle), and the wavelets interfere. The interference is constructive in directions where the path difference between adjacent slits is an integer multiple of the wavelength:

d sin θ = m λ, m = 0, ±1, ±2, ...

where d is the grating spacing, θ is the diffraction angle, m is the order, and λ is the wavelength. The spectrometer is the instrument that measures θ precisely; with a calibrated grating, the wavelength of an unknown spectral line can be determined to ~ 0.1 %.

This lesson covers the theory of single-slit diffraction, double-slit interference, and multiple-slit (grating) interference; the apparatus (a spectrometer, a diffraction grating, a mercury or sodium lamp); the procedure (set up the spectrometer, align the grating, measure the diffraction angles for several orders and several spectral lines); the analysis (verify the grating equation, determine the wavelength of the sodium D lines or the mercury green line); and the dominant sources of error.

## Learning Path

1. **Set up the spectrometer** — collimator (with a slit at the focal point of an achromatic lens), grating on the spectrometer table, telescope to observe the diffracted light. The slit, collimator lens, and telescope are aligned so the slit is at the focal point of the collimator (parallel light exits the collimator) and the telescope is focused at infinity.
2. **Align the grating** — the grating rulings should be vertical (perpendicular to the spectrometer base); the grating should be normal to the collimator-telescope line.
3. **Observe the spectrum** — direct the telescope to the first-order (m = 1) diffraction maximum on one side; record the angular position. Record the position of the same line on the other side (m = −1 or m = 1 on the other side of the central maximum). The angle 2θ between the two positions is twice the diffraction angle θ.
4. **Repeat for several lines** — for a mercury lamp, the prominent lines are yellow (577 nm), green (546 nm), blue (436 nm), and violet (405 nm). For a sodium lamp, the yellow doublet (589.0 and 589.6 nm).
5. **Verify the grating equation** — for each line, plot sin θ (y) against m (x); the slope is λ / d.
6. **Determine d and λ** — if d is known (e.g. 600 lines/mm ⇒ d = 1.667 μm), compute λ for each line and compare with the catalog values. If d is unknown, use a known line to determine d, then use d to find unknown lines.

## Core Explanation

### Theory: Single-Slit Diffraction

Light of wavelength λ passing through a slit of width a produces a diffraction pattern on a distant screen. The intensity is

I(θ) = I_0 (sin β / β)²,  with β = (π a sin θ) / λ.

The minima are at sin θ = m λ / a, m = ±1, ±2, ... (the central maximum is at θ = 0). The width of the central maximum (between the first minima) is Δθ = 2 λ / a.

### Theory: Double-Slit Interference

Two slits of width a separated by a distance d produce a combined pattern: the double-slit interference fringes (with spacing λ / d) modulated by the single-slit diffraction envelope (with width λ / a). The intensity is

I(θ) = I_0 (sin β / β)² · cos² δ,  with β = (π a sin θ) / λ, δ = (π d sin θ) / λ.

The interference maxima are at d sin θ = m λ, m = 0, ±1, ±2, ...

### Theory: Multiple-Slit (Grating) Interference

For N slits (N = 600 lines/mm × 10 mm width = 6000 lines for a typical grating), the interference pattern is much sharper than for two slits. The principal maxima are at d sin θ = m λ, where d is the slit spacing. The width of each principal maximum is set by N: the first minimum adjacent to a principal maximum is at d sin θ = m λ + λ / N. The resolving power is

R = λ / Δλ = m N.

A grating with 600 lines/mm and 10 mm width has N = 6000. At first order (m = 1), R = 6000 — enough to resolve the sodium D doublet (Δλ = 0.6 nm at λ = 589 nm, so R_required = 589 / 0.6 = 982 < 6000).

### Theory: The Spectrometer

A spectrometer is a precision instrument for measuring angles. It consists of:

- **Collimator.** A slit at the focal point of an achromatic lens. Light from the slit is collimated (made parallel) by the lens.
- **Grating (or prism) table.** A rotating platform at the centre of the spectrometer; the grating is placed here.
- **Telescope.** An achromatic objective lens and an eyepiece with a cross-hair. The telescope is focused at infinity.
- **Angular scale.** A graduated circle, read with a vernier to ~ 1 arcminute (1/60 of a degree) or better.

The collimator and the telescope are on opposite arms of the spectrometer; the angle between them is read on the angular scale. The grating, on the table, diffracts the light; the telescope observes the diffracted beams.

### Apparatus

- Spectrometer (with collimator, telescope, grating table, and angular scale reading to 1 arcmin or better).
- Diffraction grating (e.g. 600 lines/mm, with the line density marked on the mount).
- Mercury lamp or sodium lamp (with a transformer/ballast).
- Spirit level (to level the spectrometer).
- Safety glasses (mercury and sodium lamps are bright; do not look directly at them).

### Procedure

1. Set up the spectrometer on a stable bench. Level the spectrometer with the spirit level.
2. Adjust the eyepiece of the telescope to focus the cross-hair sharply. Adjust the telescope to focus on a distant object (e.g. a tree outside the window) so that the cross-hair and the distant object are simultaneously in focus; the telescope is now focused at infinity.
3. Illuminate the slit with the lamp. Adjust the collimator to focus the slit at the focal point of the collimator lens. The light exiting the collimator is now parallel.
4. Place the grating on the table, rulings vertical. The grating should be normal to the collimator-telescope line; adjust until the reflection of the slit (in the grating) is visible at the centre of the telescope.
5. Rotate the telescope to find the first-order (m = 1) diffraction maximum of a known line (e.g. the green mercury line at 546 nm). Record the angular position θ_1. Rotate the telescope to the other side (m = −1 or m = 1 on the other side) and record θ_2. The diffraction angle is θ = (θ_2 − θ_1) / 2.
6. Repeat for several lines (yellow, green, blue, violet for mercury; yellow doublet for sodium).
7. Repeat for m = 2 (second order) for the green line, to verify the grating equation.

### Analysis

#### Grating Constant d

If a known line is used (e.g. green mercury, λ = 546.1 nm), d = m λ / sin θ. For the first-order (m = 1) green line at θ = 19.15° (sin θ = 0.328):

d = 1 · 546.1 × 10⁻⁹ / 0.328 = 1.665 × 10⁻⁶ m = 1.665 μm.

This is consistent with a 600 lines/mm grating (d = 1 / 600 mm = 1.667 μm).

#### Wavelength of an Unknown Line

If d is known, λ = d sin θ / m. For the same grating and a yellow line at θ = 20.7° (m = 1):

λ = 1.665 × 10⁻⁶ · sin(20.7°) / 1 = 1.665 × 10⁻⁶ · 0.3535 = 5.886 × 10⁻⁷ m = 588.6 nm.

This is consistent with the sodium D doublet (589.0 and 589.6 nm); the measured value is the mean of the doublet (or, if the doublet is unresolved, the mean).

#### Verifying the Grating Equation

For each line, plot sin θ (y) against m (x). The data should fall on a straight line through the origin with slope λ / d.

For the green line at m = 1, 2, 3: sin θ = 0.328, 0.622, 0.847. The slope is (0.847 − 0.328) / (3 − 1) = 0.260, so λ / d = 0.260. With d = 1.665 μm, λ = 0.260 · 1.665 × 10⁻⁶ = 4.33 × 10⁻⁷ m = 433 nm. The actual green mercury line is 546 nm; the discrepancy suggests the measurement is off, or the wrong line was observed. Recheck.

### Sources of Error

- **Grating alignment.** The grating rulings must be vertical and the grating normal to the incident light. A small misalignment adds a systematic error to θ.
- **Slit width.** A wide slit gives higher intensity but lower resolution. Use the narrowest slit that gives a visible line.
- **Telescope focus.** The telescope must be focused at infinity; a slight defocusing blurs the line and adds uncertainty to the angular measurement.
- **Collimator focus.** The collimator must produce parallel light; if the slit is not at the focal point, the diffracted light is not perfectly parallel and the angular measurement is biased.
- **Reading the angular scale.** The vernier reading has a precision of 1 arcmin or so; the reading error is the dominant source of random error.
- **Multiple orders overlap.** For a grating with high line density, the second-order (m = 2) of one line may overlap with the first-order (m = 1) of another (specifically, the second order of a line at λ is at the same angle as the first order of a line at λ/2). Use a filter (e.g. a coloured filter) to isolate the spectral region of interest.

## Key Ideas

- Grating equation: d sin θ = m λ.
- Resolving power: R = m N, where N is the total number of lines illuminated.
- Single-slit envelope modulates the multi-slit interference pattern.
- Spectrometer: collimator + grating + telescope; measures θ to ~ 1 arcmin.
- Wavelength is determined from θ, d, and m.

## Worked Examples

### Example 1: Wavelength of the sodium D line

You have a grating with 600 lines/mm (d = 1.667 μm). You measure the first-order diffraction angle of the sodium D line at θ = 20.74°.

- λ = d sin θ / m = 1.667 × 10⁻⁶ · sin(20.74°) / 1 = 1.667 × 10⁻⁶ · 0.3542 = 5.905 × 10⁻⁷ m = 590.5 nm.
- The accepted value for sodium D (mean of doublet) is 589.3 nm. The measurement is 0.2 % high, within the experimental error.

### Example 2: Grating constant from a known line

You measure the first-order diffraction angle of the green mercury line (λ = 546.1 nm) at θ = 19.10°.

- d = m λ / sin θ = 1 · 546.1 × 10⁻⁹ / sin(19.10°) = 546.1 × 10⁻⁹ / 0.3272 = 1.669 × 10⁻⁶ m = 1.669 μm.
- The line density is 1 / 1.669 × 10⁻⁶ = 5.99 × 10⁵ lines/m = 599 lines/mm. This is consistent with a 600 lines/mm grating (within the manufacturing tolerance).

### Example 3: Resolving power

A grating with 600 lines/mm and a 25 mm width is illuminated at first order. The resolving power is R = m N = 1 · (600 · 25) = 15,000. The smallest wavelength difference that can be resolved at λ = 589 nm is Δλ = λ / R = 589 / 15,000 = 0.039 nm. The sodium D doublet (Δλ = 0.6 nm) is well resolved (15× margin).

## Common Misconceptions

- **"Higher line density is always better."** Higher line density gives larger angles (better angular separation) but also smaller d, which can cause order overlap. A 1200 lines/mm grating is good for visible light; 600 lines/mm is a good general-purpose choice.
- **"The central maximum (m = 0) is brighter than the diffracted orders."** Yes — all the undiffracted light is in m = 0. The m = ±1 orders are typically a few per cent of the central intensity for a transmission grating.
- **"The spectrometer measures wavelength directly."** It measures angle; the wavelength is computed from the angle, the line density, and the order.
- **"A prism and a grating are the same."** A prism disperses light by refraction (the refractive index depends on wavelength); a grating disperses by interference. Prisms have higher transmission in a single order; gratings have higher resolving power.
- **"A diffraction grating is a single slit with many openings."** It is many slits, each acting as a source. The interference between many slits gives the sharp maxima.

## Connections

- **Waves and Optics (Sem 3 theory).** The grating is the workhorse of spectroscopic instrumentation. The same physics governs the colours of opals, the iridescence of CDs/DVDs (which are reflection gratings), and the structural colour of peacock feathers.
- **Astronomy (Sem 5/6).** Stellar spectra are obtained with diffraction gratings (or echelle spectrographs) in astronomical spectrographs. The wavelength of a spectral line identifies the chemical element; the Doppler shift of the line gives the radial velocity of the star. The resolving power of an astronomical spectrograph can exceed 100,000.
- **Chemistry.** Atomic absorption spectroscopy and atomic emission spectroscopy use gratings to identify and quantify elements. The grating equation is the same; the light source is the sample (emission) or a known reference (absorption).
- **Laser physics.** The grating is a key element in tunable dye lasers and external-cavity diode lasers. The grating selects the wavelength; the laser cavity provides the gain.
- **Modern physics.** The diffraction of X-rays by crystals (which are 3D gratings) is the basis of X-ray crystallography, which determined the structure of DNA, proteins, and many other molecules. The Bragg condition (2 d sin θ = n λ) is the 3D analogue of the grating equation.

## Quick Check

1. State the grating equation. Define each symbol.
2. A grating has 500 lines/mm. What is d? What is the first-order diffraction angle for λ = 600 nm?
3. Why must the spectrometer telescope be focused at infinity?
4. A grating with 600 lines/mm and 20 mm width is illuminated at m = 2. What is the resolving power? The smallest resolvable wavelength difference at λ = 500 nm?
5. A measurement gives sin θ = 0.342 for m = 1, λ = 570 nm. What is d? What is the line density?
6. Why is the second-order (m = 2) of one line at the same angle as the first-order (m = 1) of half the wavelength?
7. What is the difference between a grating and a prism?
8. Why must the grating rulings be vertical (not horizontal)?

## Takeaway

The diffraction grating is the lab's introduction to wave optics. The grating equation d sin θ = m λ is the workhorse; the plot of sin θ against m is the standard analysis. The spectrometer is the instrument that measures θ precisely; the grating is the dispersing element. The same physics governs the colours of opals, the structural colour of butterfly wings, and the spectrographs used in astronomy. The lab's discipline — careful alignment of the spectrometer, narrow slit, parallel light, sharp focus — is the same discipline that runs through every spectroscopic measurement in physics, chemistry, and astronomy. The grating is to wavelength measurement what the balance is to mass measurement: the central instrument.
