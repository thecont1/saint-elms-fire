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
lessonId: waves-and-optics-lab-m1-l2
lessonName: Geometrical Optics — Lenses, Mirrors, and the Thin-Lens Formula
lessonNumber: 2
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - waves-and-optics-lab-m1-l1
learningObjectives:
  - Measure the focal length of a thin convex lens using the lens formula and the displacement method.
  - Determine the focal length of a concave mirror using the mirror formula.
  - Verify the thin-lens maker's equation and the relation between object distance, image distance, and focal length.
concepts:
  - Thin lens
  - Convex lens
  - Concave mirror
  - Lens formula
  - Mirror formula
  - Magnification
  - Real image
  - Virtual image
  - Principal axis
  - Focal length
tags:
  - physics
  - laboratory
  - optics
  - lens
  - mirror
  - focal-length
sourceType: authored-courseware
assessmentHints:
  - The lens formula is 1/v - 1/u = 1/f, with the sign convention: u is negative for a real object, v is positive for a real image.
  - The displacement method (Bessel's method) gives f = (D² - d²) / (4D), where D is the object-screen distance and d is the lens displacement between the two conjugate positions.
  - Spherical aberration: a real lens has a slightly different focal length for paraxial vs marginal rays. Use a small aperture to select paraxial rays.
status: in-review
***

# Geometrical Optics — Lenses, Mirrors, and the Thin-Lens Formula

## Overview

A thin lens maps an object to an image according to the lens formula

1/v − 1/u = 1/f,

where u is the object distance (negative for a real object on the incoming side of the lens), v is the image distance (positive for a real image on the outgoing side), and f is the focal length (positive for a converging lens, negative for a diverging lens). Measure u and v for several object positions, plot 1/v against 1/u, and fit a straight line of slope 1 (with intercept − 1/f).

This lesson covers two methods for measuring the focal length of a converging lens: the direct method (measure u and v, compute f from the lens formula) and the displacement method (Bessel's method, which uses only the object-screen distance and the displacement of the lens between two conjugate positions). It also covers the focal length of a concave mirror using the mirror formula, and the magnification of the lens.

## Learning Path

1. **Set up the optical bench** — a long optical bench (1–2 m) with a light source (illuminated object, e.g. a crossed-arrow target), a lens holder, and a screen.
2. **Direct method** — for a converging lens of nominal focal length f, place the object at u = 2f; adjust the screen until the image is in sharp focus; record v. Compute f = uv / (u + v).
3. **Repeat for several u** — vary u from 1.5f to 5f; record v at each. Plot 1/v against 1/u; fit a straight line.
4. **Displacement method (Bessel)** — for a fixed object-screen distance D > 4f, there are two positions of the lens that give a sharp image (one with magnification M, one with 1/M). Measure the displacement d between the two positions; f = (D² − d²) / (4D).
5. **Mirror method** — replace the lens with a concave mirror; place an illuminated object in front of the mirror; adjust the screen until the image is in focus; record u and v. Compute f from the mirror formula 1/v + 1/u = 1/f (with the sign convention that u and v are both positive for a real object and a real image on the same side as the object).

## Core Explanation

### Theory: The Thin Lens

A thin lens in the paraxial approximation (rays close to the principal axis) maps an object at distance u to an image at distance v by

1/v − 1/u = 1/f.

The sign convention (Cartesian): u is negative for a real object on the incoming side; v is positive for a real image on the outgoing side; f is positive for a converging lens and negative for a diverging lens. The magnification is

M = v / u.

For a real object and a real image, both u and v are real distances, and |M| > 1 for a magnified image, |M| < 1 for a diminished image.

The thin-lens maker's equation relates the focal length to the radii of curvature of the lens surfaces:

1/f = (n − 1) (1/R_1 − 1/R_2),

where n is the refractive index of the lens material and R_1, R_2 are the radii of curvature of the two surfaces (positive if the centre of curvature is on the outgoing side of the surface, negative otherwise).

### Theory: The Displacement Method (Bessel)

For a fixed object-screen distance D, the lens formula gives a quadratic in the lens position x. The two solutions are

x_1 = (D + d) / 2, x_2 = (D − d) / 2,

where d is the distance between the two lens positions. The focal length is

f = (D² − d²) / (4D).

This method has the advantage of not requiring a measurement of u or v; only D and d are needed. It is also less sensitive to the exact position of the lens, because the lens is moved to a position of sharp focus at each measurement.

### Theory: The Concave Mirror

A concave mirror of radius of curvature R has focal length f = R/2. The mirror formula is

1/v + 1/u = 1/f,

where u and v are both positive for a real object and a real image on the same side of the mirror. The magnification is M = v / u.

### Apparatus

- Optical bench (1.5 m or 2 m, with centimetre scale).
- Illuminated object (e.g. a crossed-arrow target on a ground glass screen, illuminated from behind by a lamp).
- Convex lens (f ≈ 10–20 cm).
- Concave mirror (f ≈ 10–20 cm).
- Screen (white card or ground glass).
- Metre scale.
- Light source (a small lamp or a laser, for the mirror).
- Safety glasses.

### Procedure: Direct Method

1. Mount the lens, object, and screen on the optical bench.
2. Place the object at u = 2f (twice the nominal focal length) from the lens.
3. Move the screen until the image is in sharp focus. Record v.
4. Compute f = uv / (u + v).
5. Repeat for u = 1.5f, 3f, 4f, 5f (as long as v remains positive, i.e. the image is real).

### Procedure: Displacement Method

1. Place the object and screen at a fixed distance D > 4f (e.g. D = 1.5 × 4f = 6f if f = 10 cm and D = 60 cm).
2. Move the lens between the object and the screen until a sharp image is obtained. This is one position. Record the lens position.
3. Move the lens further until a second sharp image is obtained (this is the conjugate position). Record the lens position.
4. The displacement d is the distance between the two lens positions.
5. Compute f = (D² − d²) / (4D).
6. Repeat for several values of D.

### Procedure: Concave Mirror

1. Mount the concave mirror on the optical bench. Place the illuminated object in front of the mirror.
2. Move the screen (also in front of the mirror, on the same side as the object) until a sharp image is obtained.
3. Record u (object-mirror distance) and v (image-mirror distance).
4. Compute f = uv / (u + v).
5. Repeat for several u.

### Analysis

#### Direct Method

For each (u, v) pair, compute f = uv / (u + v). Average the f values for the best estimate; the standard deviation gives the random error.

Alternatively, plot 1/v (y) against 1/u (x). The data should fall on a straight line of slope 1 (since 1/v = 1/u + 1/f, with the sign convention). The intercept on the y-axis is 1/f.

#### Displacement Method

For each (D, d) pair, compute f = (D² − d²) / (4D). Average.

#### Mirror Method

For each (u, v) pair, compute f = uv / (u + v). Average.

### Sources of Error

- **Spherical aberration.** A real spherical lens does not bring all rays to the same focus; the marginal rays (far from the axis) focus closer to the lens than the paraxial rays. The image is a compromise, slightly out of focus for either. Use a small aperture (a piece of cardboard with a 1–2 cm hole) to select paraxial rays.
- **Chromatic aberration.** A real lens has a different focal length for different colours (because n depends on wavelength). Use a monochromatic source (e.g. a sodium lamp) for high accuracy.
- **Image assessment.** "Sharp focus" is a subjective judgement; the depth of focus (the range of screen positions over which the image looks sharp) is ~ 1–2 mm for a typical setup.
- **Centre of the lens.** The "position of the lens" is ambiguous because the lens has finite thickness. Use a fixed reference (e.g. the lens holder) and record its position, not the lens's centre.
- **Parallax.** When measuring the image distance, parallax between the image and the screen can be a problem. Look for the position where the image and the screen have no relative motion as you move your head from side to side.

## Key Ideas

- Thin lens formula: 1/v − 1/u = 1/f (with the sign convention).
- Magnification: M = v / u.
- Displacement method: f = (D² − d²) / (4D). No need to measure u or v directly.
- Mirror formula: 1/v + 1/u = 1/f (with both u and v positive for real object and image on the same side).
- The thin-lens maker's equation: 1/f = (n − 1) (1/R_1 − 1/R_2).
- Spherical and chromatic aberration are the dominant sources of error.

## Worked Examples

### Example 1: Direct method

You record the following data for a converging lens:

| u (cm) | v (cm) |
|-------:|-------:|
| 25.0 | 50.5 |
| 30.0 | 30.5 |
| 40.0 | 27.0 |
| 50.0 | 25.5 |
| 60.0 | 24.5 |

Compute f for each pair:

- f = uv / (u + v):
  - 25.0 · 50.5 / 75.5 = 16.7 cm
  - 30.0 · 30.5 / 60.5 = 15.1 cm
  - 40.0 · 27.0 / 67.0 = 16.1 cm
  - 50.0 · 25.5 / 75.5 = 16.9 cm
  - 60.0 · 24.5 / 84.5 = 17.4 cm

Mean: f ≈ 16.4 cm. The spread is from 15.1 to 17.4, so the random error is ~ 1 cm (6 %).

### Example 2: Displacement method

You place the object and screen at D = 80 cm. The lens is in sharp focus at x_1 = 28.5 cm and x_2 = 51.5 cm.

- d = 51.5 − 28.5 = 23.0 cm.
- f = (80² − 23²) / (4 · 80) = (6400 − 529) / 320 = 5871 / 320 = 18.3 cm.

This is more reliable than the direct method because the position measurements (D and d) are large and easy to read.

### Example 3: Mirror method

You place an object at u = 30 cm from a concave mirror. The image is in focus at v = 60 cm.

- f = uv / (u + v) = 30 · 60 / 90 = 20 cm.
- Radius of curvature: R = 2f = 40 cm.

The mirror is a 20 cm focal length concave mirror with a 40 cm radius of curvature.

## Common Misconceptions

- **"The focal length is the distance from the lens to the image when the object is at infinity."** Correct (in the thin-lens approximation). For a finite object, the image distance is different.
- **"A converging lens always produces a real image."** No. If the object is inside the focal length (u < f), the image is virtual, on the same side of the lens as the object, and cannot be projected on a screen. The lab uses objects outside the focal length to get real images.
- **"The magnification is the size of the image divided by the size of the object."** |M| = (image size) / (object size). The sign of M indicates whether the image is upright (positive) or inverted (negative).
- **"The displacement method works for any D."** It requires D > 4f; otherwise, the two conjugate positions coincide and d = 0, giving f = D/4 (the minimum working distance).
- **"A concave mirror and a convex lens are the same."** They are similar in that both can form real images, but the optical theory is different. The mirror formula uses + signs (both u and v positive on the same side), the lens formula uses − sign (u negative for real object, v positive for real image on the other side).

## Connections

- **Waves and Optics (Sem 3 theory).** The thin-lens formula is the paraxial approximation of Snell's law applied to a thin lens. It is the workhorse of geometrical optics.
- **Optometry and ophthalmology.** The eye is a lens system (cornea + crystalline lens) that forms an image on the retina. The focal length is adjusted by the ciliary muscles (accommodation). Myopia, hyperopia, and presbyopia are all related to the mismatch between the eye's focal length and its axial length.
- **Photography.** A camera lens is a compound lens system; the focal length determines the field of view, and the aperture determines the depth of field. The thin-lens formula is the starting point for lens design.
- **Astronomy (Sem 5/6).** A telescope is a two-lens system (or a mirror-lens combination): the objective lens (or primary mirror) forms a real image at its focal plane, and the eyepiece magnifies that image. The focal length of the objective determines the magnification.
- **Microscopy.** A compound microscope uses an objective lens (short focal length) and an eyepiece (longer focal length) to achieve high magnification. The same thin-lens formula, applied twice.

## Quick Check

1. State the thin-lens formula. Define each symbol and its sign convention.
2. A converging lens of f = 20 cm forms an image of an object at u = 30 cm. Where is the image? What is the magnification?
3. The displacement method gives D = 80 cm, d = 20 cm. What is f?
4. A concave mirror has R = 30 cm. What is f?
5. A lens of n = 1.5 has R_1 = +20 cm and R_2 = −30 cm. What is f?
6. Why is the image of a real lens not perfectly sharp, even at the "best focus"?
7. Why does a camera lens have multiple elements?
8. The displacement method requires D > 4f. Why?

## Takeaway

The thin-lens formula is the lab's introduction to geometrical optics. The direct method and the displacement method are the two ways to extract the focal length; the mirror formula is the analogue for curved mirrors. Spherical and chromatic aberration are the dominant sources of error; the lab's discipline — small aperture, monochromatic source, careful focus assessment, no parallax — is the same discipline that runs through every optical measurement in physics and engineering. The thin-lens formula is the paraxial approximation; the full lens design uses ray tracing through multiple elements with Snell's law at each surface. The eye, the camera, the microscope, the telescope — all are built on the same formula.
