***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: waves-and-optics
courseName: Waves and Optics
moduleId: waves-and-optics-module-2
moduleName: Geometrical Optics
lessonId: waves-and-optics-m2-l2
lessonName: Lenses, Mirrors and Image Formation
lessonNumber: 5
moduleNumber: 2
semesterNumber: 3
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - waves-and-optics-m2-l1
learningObjectives:
  - Apply the thin-lens equation to find image position and magnification.
  - Trace ray diagrams for converging and diverging lenses.
  - Apply the mirror equation for concave and convex mirrors.
  - Identify the types of images (real, virtual, upright, inverted) and when each occurs.
concepts:
  - Thin-lens equation
  - Mirror equation
  - Real vs. virtual image
  - Magnification
  - Ray diagram
  - Focal length
tags:
  - physics
  - optics
  - lenses
  - mirrors
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Lenses, Mirrors and Image Formation

## Overview
Lenses and mirrors are the basic elements of optical instruments. They form images by bending light rays according to the laws of reflection and refraction. The thin-lens equation and the mirror equation are the working tools of image formation; ray diagrams give the qualitative picture. This lesson develops the equations, the diagrams, and the basic vocabulary (real vs. virtual, upright vs. inverted, magnification).

## Learning Path
- What you should already know: Snell's law, the law of reflection, the geometry of similar triangles.
- What this lesson adds: a quantitative framework for image formation by lenses and mirrors.
- What it unlocks: optical instruments (next lesson), the camera, the telescope, the microscope, and the eye.

## Core Explanation
**Thin-lens equation.** A thin lens (one whose thickness is small compared to the radii of curvature) forms an image of an object according to

$$\frac{1}{s_o} + \frac{1}{s_i} = \frac{1}{f},$$

where $s_o$ is the object distance (positive for real objects, on the incoming side of the lens), $s_i$ is the image distance (positive on the outgoing side for real images, negative for virtual images), and $f$ is the focal length (positive for converging lenses, negative for diverging).

**Sign convention.** We use the convention: $s_o > 0$ (real object), $s_i > 0$ (real image, opposite side of lens from object), $s_i < 0$ (virtual image, same side as object), $f > 0$ (converging), $f < 0$ (diverging). Heights above the axis are positive.

**Magnification.** The lateral magnification is

$$m = -\frac{s_i}{s_o} = \frac{h_i}{h_o}.$$

A positive $m$ means the image is upright (same orientation as the object); a negative $m$ means inverted.

**Lens types.** *Converging lenses* (biconvex, plano-convex, concavo-convex with the convex side more curved) have $f > 0$. They bring parallel light to a focus. *Diverging lenses* (biconcave, etc.) have $f < 0$. They spread parallel light as if coming from a virtual focus on the same side as the object.

**Lensmaker's equation.** For a thin lens in air with two spherical surfaces of radii $R_1$ and $R_2$ (positive if the centre of curvature is on the outgoing side):

$$\frac{1}{f} = (n - 1) \left(\frac{1}{R_1} - \frac{1}{R_2}\right).$$

For a symmetric biconvex lens, $R_2 = -R_1$, giving $1/f = (n - 1)(2/R_1)$.

**Ray diagrams.** Three principal rays determine the image of a point on the object:
1. The ray parallel to the axis, which passes through the focal point on the far side.
2. The ray through the centre of the lens, which is undeviated.
3. The ray through the focal point on the near side, which emerges parallel to the axis.

The intersection of any two of these rays locates the image point.

**Image types.**
- Object outside $f$, converging lens: real, inverted, reduced (camera).
- Object between $f$ and $2f$, converging lens: real, inverted, enlarged (projector).
- Object inside $f$, converging lens: virtual, upright, enlarged (magnifier).
- Object anywhere, diverging lens: virtual, upright, reduced.

**Mirror equation.** A spherical mirror of radius $R$ (positive for concave, negative for convex) has focal length $f = R/2$. The mirror equation is

$$\frac{1}{s_o} + \frac{1}{s_i} = \frac{1}{f},$$

identical in form to the thin-lens equation. The magnification is $m = -s_i/s_o$ (with a sign convention that yields $m < 0$ for real inverted images from concave mirrors).

**Concave vs. convex mirrors.** A concave mirror (e.g. a shaving mirror) converges light. For an object outside the focal point, the image is real and inverted (used in reflecting telescopes); for an object inside the focal point, the image is virtual and upright (used as a makeup mirror). A convex mirror (e.g. a car's side mirror) always produces a virtual, upright, reduced image with a wide field of view.

**Aberrations.** Real lenses and mirrors do not form perfect images. Common aberrations:
- *Spherical aberration*: rays far from the axis focus at different points. Corrected by parabolic mirrors or aspheric lenses.
- *Chromatic aberration*: $n$ depends on wavelength, so different colours focus at different distances. Corrected by *achromatic doublets* (two lenses of different glasses).
- *Coma*: off-axis point sources produce comet-shaped images.
- *Astigmatism*: off-axis points are imaged differently in different directions.

**Stops and pupils.** Real optical systems have *aperture stops* (limit the cone of light) and *field stops* (limit the field of view). The *entrance pupil* is the image of the aperture stop as seen from the object side; the *exit pupil* is the image on the image side. The eye's pupil is the aperture stop of the visual system.

**Depth of field.** A point object not exactly in focus produces a *circle of confusion* on the image plane. The range of object distances for which the circle of confusion is acceptably small is the *depth of field*. Small apertures (large $f$-numbers) give large depth of field.

## Key Ideas
- Thin-lens equation: $1/s_o + 1/s_i = 1/f$.
- Magnification: $m = -s_i/s_o$ (negative for inverted images).
- Converging lens: real inverted image for object outside $f$.
- Mirror equation: $1/s_o + 1/s_i = 1/f = 2/R$.
- Real images can be projected; virtual images cannot.

## Worked Examples
**Example 1 — Camera image.** A camera lens with $f = 50\text{ mm}$ photographs a person $2.5\text{ m}$ away. Image distance: $1/s_i = 1/0.05 - 1/2.5 = 20 - 0.4 = 19.6\text{ m}^{-1}$, so $s_i = 51.0\text{ mm}$. Magnification: $m = -0.051/2.5 = -0.0204$. The image is reduced about $50\times$ — a face is about $4\text{ cm}$ on the image.

**Example 2 — Magnifier.** A converging lens with $f = 5\text{ cm}$ used as a magnifier, with object at $s_o = 3\text{ cm}$. Image: $1/s_i = 1/0.05 - 1/0.03 = 20 - 33.3 = -13.3$, so $s_i = -7.5\text{ cm}$ (virtual). Magnification $m = -(-0.075)/0.03 = 2.5$. The image is upright, virtual, and $2.5\times$ larger.

**Example 3 — Shaving mirror.** A concave mirror with $f = 30\text{ cm}$. For an object at $s_o = 20\text{ cm}$ (between $f$ and the mirror): $1/s_i = 1/0.3 - 1/0.2 = 3.33 - 5 = -1.67$, so $s_i = -0.6\text{ m}$. The negative sign means the image is virtual, on the same side as the object, at $60\text{ cm}$ behind the mirror. Magnification: $m = -(-0.6)/0.2 = 3$. An upright, virtual, $3\times$ image — a useful makeup/shaving mirror.

## Common Misconceptions
- **"A real image is one that really exists."** A real image is one where light physically converges; a virtual image is one where light only appears to come from a point. Both are images.
- **"A virtual image cannot be photographed."** It can — the camera lens converts the diverging rays into a real image on the sensor.
- **"Convex means converging."** No — a convex lens is converging (in the usual sign convention), but a convex mirror is diverging.
- **"Higher magnification is always better."** No — a magnifier with $f = 1\text{ cm}$ has high magnification but tiny field of view and severe aberrations.

## Connections
Lens and mirror equations are the tools of *optical design*. They are used in cameras, microscopes, telescopes, spectacles, and the eye. The same mathematics appears in *electromagnetic lens design* (electron microscopes) and in *acoustics* (acoustic lenses). Aberration theory connects to the wave nature of light (Fourier optics) and to the design of high-quality instruments.

## Quick Check
1. State the thin-lens equation.
2. An object is at $30\text{ cm}$ from a converging lens of $f = 10\text{ cm}$. Find the image distance and the magnification.
3. Why do cameras have variable apertures?
4. State two aberrations and how they are corrected.
5. What is the difference between a real and a virtual image?

## Takeaway
- Thin-lens equation: $1/s_o + 1/s_i = 1/f$.
- Magnification: $m = -s_i/s_o$.
- Converging lens: real inverted image for object outside $f$, virtual upright for object inside.
- Mirror equation: $1/s_o + 1/s_i = 2/R$.
- Aberrations are corrected by lens combinations, parabolic mirrors, and stops.
