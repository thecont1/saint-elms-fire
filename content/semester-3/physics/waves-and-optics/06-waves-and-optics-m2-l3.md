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
lessonId: waves-and-optics-m2-l3
lessonName: Optical Instruments — Eye, Magnifier, Telescope
lessonNumber: 6
moduleNumber: 2
semesterNumber: 3
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 6
prerequisites:
  - waves-and-optics-m2-l2
learningObjectives:
  - Describe the structure and optics of the human eye.
  - Derive the magnification of a simple magnifier.
  - Compute the angular magnification of an astronomical telescope and a compound microscope.
  - Compare refracting and reflecting telescopes.
concepts:
  - Eye structure
  - Angular magnification
  - Simple magnifier
  - Refracting telescope
  - Reflecting telescope
  - Microscope
tags:
  - physics
  - optics
  - instruments
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Optical Instruments — Eye, Magnifier, Telescope

## Overview
Optical instruments extend the capabilities of the eye: the magnifier enlarges small nearby objects, the microscope reveals the microscopic, the telescope brings distant objects close. This lesson analyses the human eye as an optical system, derives the magnification of a simple magnifier, and develops the design of refracting and reflecting telescopes and the compound microscope. The trade-offs between magnification, brightness, and field of view are recurring themes.

## Learning Path
- What you should already know: the thin-lens and mirror equations, ray diagrams, basic anatomy of the eye.
- What this lesson adds: the working principles of the most important optical instruments.
- What it unlocks: the design of real instruments, the analysis of astronomical images, and the design of the corrective lenses in spectacles.

## Core Explanation
**The human eye.** A nearly spherical organ about $2.5\text{ cm}$ in diameter. The cornea (with a fixed refractive power of about $43$ dioptres) and the crystalline lens (variable power, $19$–$30$ dioptres) together form a real, inverted, reduced image on the retina. The retina contains photoreceptors (rods and cones) that convert the light to electrical signals sent to the brain via the optic nerve.

The fovea (a small area at the centre of the retina) is the region of highest visual acuity; it contains only cones. The iris controls the size of the pupil ($2$–$8\text{ mm}$), regulating the light reaching the retina.

**Accommodation.** The lens changes shape to focus on objects at different distances. The closest distance of comfortable focus is the *near point*, about $25\text{ cm}$ for a young adult. With age, the lens stiffens and the near point recedes (presbyopia), requiring reading glasses.

**Dioptre.** The unit of refractive power: $1\text{ D} = 1\text{ m}^{-1}$. The total power of the eye is about $60\text{ D}$ (cornea + lens).

**Defects of vision.**
- *Myopia (nearsightedness)*: the eye is too long, or the cornea too curved. Distant objects focus in front of the retina. Corrected with a diverging lens.
- *Hyperopia (farsightedness)*: the eye is too short, or the cornea too flat. Near objects focus behind the retina. Corrected with a converging lens.
- *Astigmatism*: the cornea is not spherical; different meridians focus differently. Corrected with a cylindrical lens.

**Angular size.** The eye perceives the size of an object by the angle it subtends at the eye. A magnifier or telescope increases the *angular size* of the object, not its physical size. The relevant quantity is *angular magnification*.

**Simple magnifier.** A converging lens held close to the eye, with the object at or inside the focal point. The image is virtual, upright, and enlarged. The angular magnification is

$$M = \frac{25\text{ cm}}{f},$$

where $25\text{ cm}$ is the conventional near-point distance and $f$ is the focal length. A lens with $f = 5\text{ cm}$ gives $M = 5\times$.

**Refracting telescope (Keplerian).** Two converging lenses: the *objective* (long focal length $f_o$) and the *eyepiece* (short focal length $f_e$). Parallel light from a distant object is brought to a focus by the objective; the eyepiece acts as a magnifier on this image. The angular magnification is

$$M = -\frac{f_o}{f_e}.$$

The negative sign indicates an inverted image — fine for astronomy, problematic for terrestrial use. The *erect image* terrestrial telescope adds an inverting lens or prism.

**Reflecting telescope.** Uses a primary mirror instead of an objective lens. The Newtonian design has a small flat secondary that sends the light to the side of the tube; the Cassegrain uses a curved secondary to send it back through a hole in the primary. Reflectors scale to much larger apertures because mirrors can be supported from behind. The magnification is the same $f_o/f_e$ as for a refractor, but $f_o$ is determined by the mirror's curvature.

**Compound microscope.** Two short-focal-length converging lenses: the *objective* (close to the object) and the *eyepiece* (close to the eye). The objective forms a real, inverted, enlarged image of the object at its image plane; the eyepiece magnifies this image. The angular magnification is

$$M = -\frac{L}{f_o} \cdot \frac{25\text{ cm}}{f_e},$$

where $L$ is the tube length (about $16\text{ cm}$ for biological microscopes). With $f_o = 4\text{ mm}$, $f_e = 25\text{ mm}$: $M \approx -1600 \times \approx 400\times$ — a useful microscope.

**Resolving power.** Magnification alone is not enough — the instrument must *resolve* the features. For a microscope, the limit is set by the wavelength of light (Abbe limit): $d \approx \lambda/(2 n \sin\theta) \approx 200\text{ nm}$ for visible light. For a telescope, the limit is the diffraction limit $\theta_R = 1.22 \lambda/D$, where $D$ is the aperture.

**Numerical aperture (NA).** For a microscope, $NA = n \sin\theta$, where $\theta$ is the half-angle of the cone of light collected. A higher NA means a higher resolution and a brighter image. Oil-immersion objectives ($n = 1.5$) achieve $NA \approx 1.4$.

**Field of view.** The angular size of the region visible through the instrument. For a telescope, the field of view is set by the focal length of the eyepiece and the size of the detector (or eye pupil). Wide-field telescopes use short focal-length eyepieces and large detectors.

**Depth of field.** A microscope has a very shallow depth of field (often less than $1\ \mu\text{m}$), requiring careful focusing. Telescopes and binoculars have much larger depth of field.

## Key Ideas
- Eye: cornea + lens focus on retina; defects corrected by lenses.
- Angular magnification: ratio of angular sizes, not linear.
- Simple magnifier: $M = 25/f$ (in cm).
- Telescope: $M = -f_o/f_e$ for a Keplerian.
- Microscope: $M = -(L/f_o)(25/f_e)$.

## Worked Examples
**Example 1 — Magnifier.** A lens of $f = 2.5\text{ cm}$ as a magnifier. $M = 25/2.5 = 10\times$. A small object that subtended $0.5°$ now appears as $5°$.

**Example 2 — Telescope.** A small refractor with $f_o = 700\text{ mm}$, $f_e = 20\text{ mm}$. $M = -700/20 = -35\times$. The image is inverted (astronomy is fine with this).

**Example 3 — Spectacle prescription.** A myopic eye has far point at $2\text{ m}$ (cannot see clearly beyond). The corrective lens should image an object at infinity to a virtual image at $-2\text{ m}$ (the far point). $1/f = 1/\infty - 1/2 = -0.5\text{ D}^{-1}$, so $f = -2\text{ m}$, or $-0.5$ dioptres. A diverging lens of $0.5$ dioptres.

## Common Misconceptions
- **"Magnification means the image is larger."** It means the image subtends a larger angle. A small, distant object magnified $10\times$ is still small but easier to see.
- **"A higher-power telescope shows more detail."** Only up to the diffraction limit. Beyond that, magnification is empty.
- **"The eye has a single focal length."** No — the lens changes shape to focus at different distances (accommodation).
- **"A short telescope tube is always better."** No — the tube length is set by the sum of the focal lengths (for an in-focus Keplerian). A short tube usually means short focal lengths, hence lower magnification.

## Connections
Optical instruments use the same lens and mirror equations as the basic geometry lesson, but with careful attention to aberrations and stops. The diffraction limit ties the design to the wave nature of light — the transition to *Waves and Optics* Module 3. Telescopes and microscopes are the prototypes of every imaging system, including the eye, the camera, and the spectrograph used in *Astrophysics I* and *Atomic and Molecular Physics*.

## Quick Check
1. What is the near point of a normal young adult?
2. State the magnification of a simple magnifier.
3. State the angular magnification of a Keplerian telescope.
4. A microscope has $f_o = 4\text{ mm}$, $f_e = 20\text{ mm}$, $L = 160\text{ mm}$. Find the magnification.
5. What sets the resolving power of a microscope?

## Takeaway
- Eye: cornea + lens focus on retina; defects corrected by spectacle lenses.
- Simple magnifier: $M = 25/f$ (cm).
- Keplerian telescope: $M = -f_o/f_e$.
- Compound microscope: $M = -(L/f_o)(25/f_e)$.
- Resolving power is set by wavelength and numerical aperture (microscope) or aperture (telescope).
