***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: waves-and-optics
courseName: Waves and Optics
moduleId: waves-and-optics-module-3
moduleName: Wave Optics
lessonId: waves-and-optics-m3-l2
lessonName: Diffraction — Single Slit and Gratings
lessonNumber: 8
moduleNumber: 3
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - waves-and-optics-m3-l1
learningObjectives:
  - Derive the single-slit diffraction pattern and identify the minima.
  - State the Rayleigh criterion and compute the diffraction limit.
  - Describe the diffraction grating and its dispersion and resolving power.
  - Use the grating equation to find angles of maxima.
concepts:
  - Single-slit diffraction
  - Diffraction minimum
  - Diffraction grating
  - Grating equation
  - Resolving power
  - Rayleigh criterion
tags:
  - physics
  - wave-optics
  - diffraction
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Diffraction — Single Slit and Gratings

## Overview
Diffraction is the bending of waves around obstacles or through apertures. Every optical instrument has a finite aperture, so diffraction is unavoidable — and it sets the ultimate limit on resolution. This lesson derives the single-slit diffraction pattern, states the Rayleigh criterion, develops the diffraction grating (a multi-slit version that produces sharp spectral lines), and computes the resolving power of an instrument.

## Learning Path
- What you should already know: superposition of waves, the double-slit pattern, basic trigonometry.
- What this lesson adds: the analysis of diffraction by a single aperture, the resolution limit, and the operation of diffraction gratings.
- What it unlocks: the design of high-resolution spectrometers, the theory of image resolution, and the basis of X-ray diffraction in *Solid State Physics*.

## Core Explanation
**Huygens' principle.** Every point on a wavefront acts as a source of secondary spherical wavelets. The new wavefront is the envelope of these wavelets. This is the geometric basis of diffraction.

**Single-slit diffraction.** A slit of width $a$ is illuminated by a plane wave. The amplitude at a point on a far screen is the sum of contributions from all points across the slit. Pairing off points equidistant from the centre, each pair cancels when the path difference is $\lambda/2$. The first minimum occurs when the slit can be divided into two halves, each pair cancelling: $a \sin\theta = \lambda$. The minima are at

$$a \sin\theta = m \lambda, \quad m = \pm 1, \pm 2, \pm 3, \ldots$$

**Single-slit intensity pattern.** The intensity is

$$I(\theta) = I_0 \left(\frac{\sin\beta}{\beta}\right)^2, \quad \beta = \frac{\pi a \sin\theta}{\lambda}.$$

The central maximum is twice as wide as the others (the first minima are at $\sin\theta = \pm \lambda/a$). About $85\%$ of the total power is in the central maximum.

**Circular aperture.** For a circular aperture of diameter $D$, the diffraction pattern is the *Airy disk*. The first minimum is at

$$\sin\theta = 1.22 \frac{\lambda}{D}.$$

This is the formula quoted as the *Rayleigh criterion* for the resolution of a telescope or microscope.

**Rayleigh criterion.** Two point sources are *just resolved* when the central maximum of one coincides with the first minimum of the other. The angular separation is

$$\theta_R = 1.22 \frac{\lambda}{D}.$$

This is the diffraction limit of a circular aperture.

**Resolving power of the eye.** The pupil diameter is about $5\text{ mm}$ in bright light; at $\lambda = 550\text{ nm}$, the resolution is $\theta_R = 1.22 \times 550 \times 10^{-9} / 5 \times 10^{-3} \approx 1.3 \times 10^{-4}\text{ rad} \approx 27''$. The eye's actual resolution is worse, limited by the density of photoreceptors on the retina (about $1'$, or $60''$).

**Resolving power of a telescope.** For a $D = 10\text{ cm}$ telescope at $\lambda = 550\text{ nm}$: $\theta_R = 6.7 \times 10^{-6}\text{ rad} \approx 1.4''$. For a $D = 10\text{ m}$ telescope: $\theta_R = 0.014''$. (Atmospheric seeing typically limits the resolution to $0.5$–$1''$, so space telescopes have a real advantage.)

**Diffraction grating.** A series of $N$ parallel slits with spacing $d$. The grating produces sharp maxima when the path difference between adjacent slits is a whole wavelength:

$$d \sin\theta = m \lambda, \quad m = 0, \pm 1, \pm 2, \ldots$$

This is the *grating equation*. The maxima are much sharper than the single-slit pattern, because the interference of $N$ slits produces a $\sin^2(N\alpha)/\sin^2(\alpha)$ pattern with sharp peaks (where $\alpha = \pi d \sin\theta/\lambda$).

**Resolving power of a grating.** The minimum resolvable wavelength difference is set by the width of the principal maxima. For a grating with $N$ slits, the resolving power is

$$R = \frac{\lambda}{\Delta\lambda} = m N.$$

So a grating with $N = 10^5$ slits in the second order ($m = 2$) can resolve $R = 2 \times 10^5$, i.e. $\Delta\lambda/\lambda = 5 \times 10^{-6}$ — sufficient to resolve individual atomic lines.

**Blazed gratings.** A regular grating has most of the light in the zeroth order (the direct beam, $m = 0$). A *blazed* grating has its grooves cut at an angle, so most of the light goes into a chosen order. This is the standard design for spectroscopic gratings.

**X-ray diffraction.** X-rays have wavelengths comparable to atomic spacings ($\sim 0.1\text{ nm}$). A crystal acts as a three-dimensional diffraction grating. Bragg's law ($2 d \sin\theta = m \lambda$) governs the diffraction angles. X-ray diffraction is the basis of the determination of crystal structures, including DNA.

**Fresnel and Fraunhofer diffraction.** Fraunhofer diffraction is what we have considered so far: the source and screen are effectively at infinity (paraxial, plane-wave conditions). Fresnel diffraction is the near-field case, with curved wavefronts. The analysis is more complex but leads to the same diffraction limit at large distances.

**Airy disk.** The diffraction pattern of a circular aperture is a bright central disk (the Airy disk) surrounded by faint rings. The first ring has about $1.7\%$ of the central intensity; the second has $0.4\%$. The angular radius of the Airy disk is $\theta_R = 1.22 \lambda/D$.

**Babinet's principle.** The diffraction pattern of an aperture and of the complementary obstacle (the same shape but opaque) are identical (except for the direct beam). This is useful in some problems.

## Key Ideas
- Single-slit minima: $a \sin\theta = m \lambda$.
- Circular aperture: $\theta_R = 1.22 \lambda/D$.
- Rayleigh criterion: just-resolved when central max of one coincides with first min of the other.
- Grating equation: $d \sin\theta = m \lambda$; resolving power $R = m N$.
- Diffraction is fundamental; even perfect lenses cannot beat it.

## Worked Examples
**Example 1 — Single slit.** $a = 0.1\text{ mm}$, $\lambda = 600\text{ nm}$. First minimum at $\sin\theta = 600 \times 10^{-9} / 10^{-4} = 6 \times 10^{-3}$, so $\theta \approx 0.34°$.

**Example 2 — Rayleigh criterion for a $10\text{ cm}$ telescope.** $\theta_R = 1.22 \times 550 \times 10^{-9} / 0.1 = 6.7 \times 10^{-6}\text{ rad} \approx 1.4''$. At a distance of $10\text{ km}$, the resolvable separation is about $7\text{ cm}$.

**Example 3 — Grating.** A grating with $1200$ lines/mm, $N = 10^5$ lines. $d = 1/1200\text{ mm} = 833\text{ nm}$. First-order maximum for $\lambda = 500\text{ nm}$: $\sin\theta = 500/833 = 0.6$, so $\theta = 36.9°$. Resolving power in 1st order: $R = N = 10^5$, so $\Delta\lambda = 500\text{ nm}/10^5 = 0.005\text{ nm}$ — very high resolution.

## Common Misconceptions
- **"A point source produces a point image."** No — it produces an Airy disk. The image of a point is always extended, with a width set by diffraction.
- **"Better lenses give sharper images."** Only up to the diffraction limit. Beyond that, the lens is limited by its aperture, not its quality.
- **"Gratings work like prisms."** Both disperse light, but gratings use interference (with $d \sin\theta = m \lambda$); prisms use dispersion ($n = n(\lambda)$). Gratings have higher resolution; prisms are useful in the UV (where gratings are hard to make).
- **"Diffraction is a minor correction."** For modern instruments (large telescopes, microscopes at high NA), diffraction is the dominant limit on resolution.

## Connections
Diffraction is the fundamental limit on resolution. The Rayleigh criterion is the design rule for every telescope and microscope. Diffraction gratings are the heart of most spectrometers. X-ray diffraction in *Solid State Physics* (Sem 5) is the same physics applied to atomic lattices. The diffraction limit is also the basis of the resolution of the eye and the camera.

## Quick Check
1. State the location of the first minimum in single-slit diffraction.
2. State the Rayleigh criterion for a circular aperture.
3. A telescope has $D = 4\text{ m}$. What is its diffraction limit at $\lambda = 500\text{ nm}$?
4. State the grating equation and the resolving power of a grating.
5. What is a blazed grating?

## Takeaway
- Single-slit minima: $a \sin\theta = m \lambda$.
- Circular aperture: $\theta_R = 1.22 \lambda/D$.
- Rayleigh criterion: $\theta_R = 1.22 \lambda/D$ for just-resolved point sources.
- Grating: $d \sin\theta = m \lambda$, resolving power $R = m N$.
- Diffraction is the fundamental limit on resolution of any instrument.
