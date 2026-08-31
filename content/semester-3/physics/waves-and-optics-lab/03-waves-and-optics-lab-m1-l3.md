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
lessonId: waves-and-optics-lab-m1-l3
lessonName: Interference — Newton's Rings
lessonNumber: 3
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - waves-and-optics-lab-m1-l2
learningObjectives:
  - Produce Newton's rings by placing a plano-convex lens on a flat glass plate and observing the interference pattern in reflected light.
  - Measure the diameter of the n-th dark ring and use the relation D_n² = 4 n R λ to determine the radius of curvature R of the lens.
  - Identify the conditions for constructive and destructive interference in thin films, including the phase change on reflection.
concepts:
  - Thin-film interference
  - Newton's rings
  - Phase change on reflection
  - Air film
  - Wavelength
  - Radius of curvature
  - Constructive and destructive interference
  - Coherence
tags:
  - physics
  - laboratory
  - optics
  - interference
  - newton-rings
  - thin-film
sourceType: authored-courseware
assessmentHints:
  - Dark rings satisfy D_n² = 4 n R λ; bright rings satisfy D_n² = 2 (2n - 1) R λ.
  - The phase change on reflection: at a denser medium, the reflected wave shifts by π; at a less dense medium, no shift.
  - Use sodium light (λ = 589.3 nm) for sharp rings; white light gives coloured rings (the chromatic dispersion of the air film).
status: in-review
***

# Interference — Newton's Rings

## Overview

When a plano-convex lens is placed on a flat glass plate, a thin film of air is formed between the curved surface of the lens and the flat surface of the plate. The film thickness varies from zero at the point of contact to a maximum at the edge of the lens. Light reflected from the top surface of the air film (lens-air interface) interferes with light reflected from the bottom surface (air-plate interface). The interference pattern is a set of concentric rings — Newton's rings — centred on the contact point. The diameter of the n-th dark ring is D_n = √(4 n R λ), where R is the radius of curvature of the lens and λ is the wavelength of the light.

This lesson covers the theory of thin-film interference, the apparatus (a Newton's rings setup with a plano-convex lens on a glass plate, illuminated by monochromatic light), the procedure for measuring the diameter of successive rings, the analysis (plot of D_n² against n; slope = 4 R λ), and the dominant sources of error.

## Learning Path

1. **Set up the apparatus** — place a plano-convex lens on a flat glass plate; illuminate from above with a monochromatic source (sodium lamp, λ = 589.3 nm) through a glass plate held at 45° to direct the light vertically downward; observe the rings through a travelling microscope.
2. **Adjust the focus** — focus the microscope on the rings; adjust the lamp position to get uniform illumination.
3. **Measure ring diameters** — for n = 5, 10, 15, 20, 25, 30 (dark rings), measure the diameter on both sides of the centre (D_left and D_right); average to get D_n = (D_left + D_right) / 2. The averaging cancels any misalignment of the cross-hair with the centre of the rings.
4. **Plot D_n² against n** — a straight line through the origin with slope 4 R λ.
5. **Compute R** — R = slope / (4 λ). Compare with the catalog value.

## Core Explanation

### Theory: Thin-Film Interference

Consider a thin film of air of thickness t between two glass surfaces. Light of wavelength λ (in air) is incident normally from above. The light reflected from the top surface (lens-air) and the bottom surface (air-plate) interfere. The path difference is 2 t (the light traverses the film twice). The phase change on reflection is:

- At the top surface (lens-air): the light goes from glass (n ≈ 1.5) to air (n = 1); it reflects from a less dense medium, so no phase change.
- At the bottom surface (air-plate): the light goes from air (n = 1) to glass (n ≈ 1.5); it reflects from a denser medium, so there is a phase change of π (equivalent to a path difference of λ/2).

The total phase difference is

Δφ = (2π / λ) · 2 t + π.

For destructive interference (dark rings), Δφ = (2m + 1) π, m = 0, 1, 2, ...:

(2π / λ) · 2 t + π = (2m + 1) π  ⇒  2 t = m λ  ⇒  t = m λ / 2.

For constructive interference (bright rings), Δφ = 2 m π:

(2π / λ) · 2 t + π = 2 m π  ⇒  2 t = (2m − 1) λ / 2  ⇒  t = (2m − 1) λ / 4.

### Geometry of Newton's Rings

For a plano-convex lens of radius of curvature R, the air film thickness at a radial distance r from the contact point is

t = R − √(R² − r²) ≈ r² / (2 R)  (for r ≪ R).

The approximation r ≪ R is the paraxial approximation; it is well satisfied for Newton's rings, where the ring diameter is typically a few mm and R is typically 1–2 m.

For a dark ring of order m, t = m λ / 2, so

r² = 2 R t = 2 R · m λ / 2 = m R λ.

The diameter of the m-th dark ring is

D_m = 2 r = 2 √(m R λ),

or

D_m² = 4 m R λ.

This is the working formula: a plot of D_m² (y) against m (x) is a straight line through the origin with slope 4 R λ.

For a bright ring of order m (which is one of the bright fringes between dark fringes), t = (2m − 1) λ / 4, so

D_m² = 2 (2m − 1) R λ.

### Apparatus

- Plano-convex lens (large R, e.g. R = 1–2 m) on a flat glass plate.
- Monochromatic light source: sodium lamp (λ = 589.3 nm) preferred; mercury lamp (green line, λ = 546.1 nm) also works.
- Glass plate held at 45° to direct the light vertically down onto the lens-plate combination.
- Travelling microscope (with a horizontal cross-hair and a vertical scale; resolution 0.01 mm).
- Safety glasses (the sodium lamp is bright; do not look directly at it).

### Procedure

1. Clean the lens and the glass plate thoroughly (with lens tissue and a drop of distilled water or alcohol). Dust or fingerprints on the surfaces will distort the rings.
2. Place the lens on the plate, convex side down. The contact point should be near the centre of the lens.
3. Set up the sodium lamp and the 45° glass plate. The light should be incident normally on the lens-plate combination from above.
4. Focus the travelling microscope on the rings. You should see a central dark spot (the contact point; dark because the path difference is zero but the phase change at the bottom surface gives destructive interference) surrounded by concentric dark and bright rings.
5. Move the cross-hair to one side of the centre; count the rings. Move the cross-hair to a specific ring (e.g. the 30th dark ring from the centre), and record the microscope position. Move the cross-hair to the same ring on the other side of the centre; record the position. The diameter is the difference.
6. Repeat for several rings (e.g. n = 5, 10, 15, 20, 25, 30). For each n, record the left and right positions; average to get D_n.

### Analysis

For each n, compute D_n = position_right − position_left.

Plot D_n² (y) against n (x). A linear fit through the origin (or with a small intercept) gives slope = 4 R λ. Hence

R = slope / (4 λ).

For sodium light (λ = 589.3 nm) and a typical lens (R = 1.5 m), the slope is 4 · 1.5 · 589.3 × 10⁻⁹ = 3.54 × 10⁻⁶ m². So D_30² = 30 · 3.54 × 10⁻⁶ = 1.06 × 10⁻⁴ m², D_30 = 1.03 cm. The ring diameters are typically a few mm to ~ 1 cm.

### Sources of Error

- **Centre of the rings.** The "centre" of the ring pattern is at the contact point, which is not always exactly at the centre of the lens. Averaging the left and right positions of each ring cancels a small offset of the cross-hair from the centre, but a systematic offset (if the rings are not concentric with the lens) cannot be cancelled.
- **Cleaning of the surfaces.** A dust particle or a fingerprint on either surface will distort the rings locally. Clean the surfaces with lens tissue before each measurement.
- **Wavelength accuracy.** The sodium D line is actually a doublet (D_1 = 589.592 nm, D_2 = 588.995 nm); for high-precision work, use the mean (589.3 nm) or a single-frequency laser.
- **Travelling microscope backlash.** The microscope's position scale has backlash; always approach the ring from the same direction (e.g. always move the cross-hair from left to right).
- **Ring counting.** The central dark spot is the "0-th" dark ring; the first dark ring is the one immediately outside. The counting should be consistent.

## Key Ideas

- Newton's rings are formed by interference in the thin air film between a plano-convex lens and a flat glass plate.
- Phase change on reflection: π at a denser medium, 0 at a less dense medium.
- Dark rings: D_n² = 4 n R λ. Bright rings: D_n² = 2 (2n − 1) R λ.
- Plot D_n² against n to extract R.
- The contact point at the centre is dark (because of the phase change).

## Worked Examples

### Example 1: Measuring R

You measure the following ring diameters with sodium light (λ = 589.3 nm):

| n | D_n (cm) | D_n² (cm²) |
|--:|---------:|-----------:|
| 5 | 0.42 | 0.176 |
| 10 | 0.59 | 0.348 |
| 15 | 0.73 | 0.533 |
| 20 | 0.84 | 0.706 |
| 25 | 0.94 | 0.884 |
| 30 | 1.03 | 1.061 |

A linear fit of D_n² (y) against n (x) gives slope = 0.0353 cm²/ring = 3.53 × 10⁻⁶ m²/ring.

R = slope / (4 λ) = 3.53 × 10⁻⁶ / (4 · 589.3 × 10⁻⁹) = 3.53 × 10⁻⁶ / 2.357 × 10⁻⁶ = 1.50 m.

This is the radius of curvature of the lens, consistent with a typical 1.5 m lens.

### Example 2: Wavelength from R

If R is known (e.g. 1.50 m), the slope can be used to determine λ:

λ = slope / (4 R) = 3.53 × 10⁻⁶ / (4 · 1.50) = 5.88 × 10⁻⁷ m = 588 nm.

This is the wavelength of the sodium D line, within 0.3 % of the accepted value.

### Example 3: Ring at a given r

For a lens of R = 1.50 m and sodium light, the diameter of the 20th dark ring is

D_20 = √(4 · 20 · 1.50 · 589.3 × 10⁻⁹) = √(7.07 × 10⁻⁵) = 8.41 × 10⁻³ m = 8.41 mm.

A measurement of 8.4 mm is consistent; a measurement of 8.0 mm or 8.8 mm would be off by 5 %.

## Common Misconceptions

- **"The central spot is bright because the path difference is zero."** The central spot is dark because of the phase change on reflection at the bottom surface (air-glass). The total path difference at t = 0 is 0, but the phase change is π, giving destructive interference.
- **"The ring spacing increases with n."** The ring spacing decreases with n. The diameter increases as √n, so the spacing (D_{n+1} − D_n) decreases as n increases.
- **"The wavelength of light affects the ring spacing."** Smaller wavelength gives smaller rings (D ∝ √λ). For the same lens, blue rings are smaller than red rings. This is why white light gives coloured rings.
- **"The lens formula (L2) and Newton's rings formula are unrelated."** Both are consequences of wave optics, but the lens formula is the paraxial approximation for image formation, while Newton's rings is the interference pattern in the reflected light from a thin film.
- **"The radius of curvature of the lens equals the focal length."** R = 2 f for a mirror; for a lens, the focal length is given by the lens-maker's equation and depends on the refractive index n. For a thin plano-convex lens in air, f ≈ R / (n − 1); for n = 1.5, f ≈ 2 R. So for R = 1.5 m, f ≈ 3 m.

## Connections

- **Waves and Optics (Sem 3 theory).** Newton's rings is the canonical demonstration of thin-film interference. The same physics governs the colours of soap bubbles, oil films on water, and the anti-reflective coatings on lenses.
- **Optics in everyday life.** The coloured patterns on soap bubbles, the iridescence of butterfly wings and peacock feathers, the blue of the sky (Rayleigh scattering, a different phenomenon but related), and the anti-reflective coating on camera lenses are all manifestations of thin-film interference.
- **Metrology.** Newton's rings is a sensitive method for measuring the radius of curvature of a lens. The technique is also used to test the flatness of a glass plate: a perfectly flat plate gives perfectly circular rings centred on the contact point; a non-flat plate gives distorted rings.
- **Astronomy (Sem 5/6).** Newton's rings is the basis of the coronagraph, an instrument that blocks the bright solar disk to image the solar corona. The coronagraph uses a small occulting disk to produce a diffraction pattern that is the "Newton's rings of the solar limb."
- **Modern physics.** The Michelson interferometer, used in the famous Michelson-Morley experiment and in modern gravitational-wave detectors (LIGO), is built on the same interference principle as Newton's rings. The mirrors of LIGO are controlled to a fraction of a wavelength over 4 km paths.

## Quick Check

1. Why is the central spot of Newton's rings dark?
2. Derive the formula D_n² = 4 n R λ for the diameter of the n-th dark ring.
3. A lens of R = 2 m is illuminated with sodium light (λ = 589 nm). What is the diameter of the 10th dark ring?
4. A measurement gives slope = 5.0 × 10⁻⁶ m². If λ = 589 nm, what is R?
5. Why must the lens and the glass plate be clean?
6. Why does the ring spacing decrease with n?
7. Why are the rings coloured in white light?
8. The phase change on reflection is π at a denser medium. What does this mean for the path difference?

## Takeaway

Newton's rings is the lab's introduction to thin-film interference. The relation D_n² = 4 n R λ is the workhorse; the plot of D_n² against n is the standard analysis. The phase change on reflection is the conceptual key; the air-film geometry is the practical detail. The same physics governs the colours of soap bubbles and the anti-reflective coatings on lenses. The lab's discipline — clean surfaces, careful ring counting, average of left-right readings — is the same discipline that runs through every interferometric measurement in physics. Newton's rings is the simplest interferometer; the Michelson interferometer is the most general; LIGO is the largest.
