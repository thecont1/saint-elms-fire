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
lessonId: waves-and-optics-m2-l1
lessonName: Reflection, Refraction and Snell's Law
lessonNumber: 4
moduleNumber: 2
semesterNumber: 3
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 4
prerequisites:
  - waves-and-optics-m1-l1
learningObjectives:
  - State the laws of reflection and refraction.
  - Apply Snell's law to compute refraction angles.
  - Define the index of refraction and explain dispersion.
  - Use the principle of least time (Fermat's principle) to derive the laws.
concepts:
  - Law of reflection
  - Snell's law
  - Index of refraction
  - Total internal reflection
  - Critical angle
  - Fermat's principle
tags:
  - physics
  - optics
  - refraction
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Reflection, Refraction and Snell's Law

## Overview
Geometrical optics treats light as rays that travel in straight lines in a uniform medium, and change direction at interfaces. Two simple laws — the law of reflection and Snell's law of refraction — describe this behaviour. Both follow from Fermat's principle of least time. This lesson develops the laws, the index of refraction, total internal reflection, and the dispersion that makes prisms and rainbows.

## Learning Path
- What you should already know: the wave nature of light, basic trigonometry, calculus of variations (qualitative).
- What this lesson adds: the laws of reflection and refraction, the index of refraction, and the tools of geometrical optics.
- What it unlocks: image formation by lenses and mirrors (next lesson), optical instruments, the spectrometer, and the optics of fibres and waveguides.

## Core Explanation
**Light as rays.** When the wavelength of light is much smaller than the size of any obstacle or aperture, the wave nature becomes hard to detect, and light can be treated as *rays* travelling in straight lines. This is the regime of *geometrical optics*.

**Index of refraction.** The speed of light in a medium is $v = c/n$, where $n$ is the *index of refraction* (always $\ge 1$). Vacuum: $n = 1$. Air: $n \approx 1.0003$. Water: $n \approx 1.33$. Glass: $n \approx 1.5$. Diamond: $n \approx 2.42$.

**Law of reflection.** When a ray hits a smooth interface, the reflected ray lies in the plane of incidence, and the angle of reflection equals the angle of incidence:

$$\theta_r = \theta_i,$$

where both angles are measured from the normal to the surface.

**Snell's law of refraction.** When a ray passes from a medium of index $n_1$ into one of index $n_2$, the angles satisfy

$$n_1 \sin\theta_1 = n_2 \sin\theta_2.$$

If $n_2 > n_1$ (going from less dense to more dense), the ray bends *toward* the normal; if $n_2 < n_1$, it bends *away*.

**Fermat's principle.** Light travels along the path that minimises the travel time. The time is $\int n/c \, ds$ along the path; minimising this functional gives both the law of reflection and Snell's law.

For reflection, consider a point $A$ above a mirror, a point $B$ below, and the variable point $P$ on the mirror. The total path length $AP + PB$ is minimised when the angle of incidence equals the angle of reflection (a one-line calculus problem).

For refraction, consider $A$ in medium 1, $B$ in medium 2, separated by a flat interface. The time is $(n_1/c) \cdot AP + (n_2/c) \cdot PB$. Minimising gives $n_1 \sin\theta_1 = n_2 \sin\theta_2$.

**Total internal reflection.** When light goes from a medium of higher $n$ to one of lower $n$ (e.g. glass to air), Snell's law gives $\sin\theta_2 = (n_1/n_2) \sin\theta_1$. Since $n_1/n_2 > 1$, $\sin\theta_2$ can exceed $1$ — which is impossible. This happens for $\theta_1 > \theta_c$, the *critical angle*:

$$\sin\theta_c = \frac{n_2}{n_1}.$$

For $\theta_1 > \theta_c$, the light is entirely reflected. This is *total internal reflection* and is the basis of optical fibres, prisms (binoculars, periscopes), and the sparkle of diamonds.

**Optical fibres.** A fibre has a high-index core surrounded by a low-index cladding. Light entering the fibre at a small enough angle undergoes total internal reflection at the core–cladding interface and is guided along the fibre. Fibres are used in telecommunications (where signals travel at close to the speed of light) and in medical endoscopes.

**Dispersion.** The index of refraction depends on wavelength: $n = n(\lambda)$. This is *dispersion*. For most materials, $n$ decreases with increasing wavelength (normal dispersion). The consequence: a prism separates white light into colours (a spectrum). Red light bends less than blue.

**The rainbow.** A combination of refraction, internal reflection, and dispersion in raindrops. Light enters a raindrop, is refracted, reflected off the back, and refracted again on exit. The total deviation is a function of wavelength, with a minimum at about $138°$ for red and $140°$ for blue. The result is the coloured arc.

**Apparent depth.** A coin at the bottom of a pool appears closer than it really is, because light rays from the coin bend at the water–air interface. By Snell's law, the apparent depth is the real depth divided by $n$ (for small angles).

**Mirages.** Hot air near the ground has lower $n$ than cooler air above. Light from the sky bends upward as it travels into the lower-index region, producing an apparent water-shimmer image. This is a *refraction mirage*.

## Key Ideas
- Index of refraction: $n = c/v$, always $\ge 1$.
- Law of reflection: $\theta_r = \theta_i$.
- Snell's law: $n_1 \sin\theta_1 = n_2 \sin\theta_2$.
- Total internal reflection: $\sin\theta_c = n_2/n_1$ for $n_1 > n_2$.
- Fermat's principle: light takes the path of least time.

## Worked Examples
**Example 1 — Refraction at a water–air interface.** Light goes from water ($n_1 = 1.33$) to air ($n_2 = 1$). At $\theta_1 = 30°$: $\sin\theta_2 = 1.33 \sin 30° / 1 = 0.665$, so $\theta_2 = 41.7°$. Critical angle: $\sin\theta_c = 1/1.33 = 0.752$, so $\theta_c = 48.8°$.

**Example 2 — Apparent depth of a pool.** A coin at depth $1\text{ m}$ in water ($n = 1.33$): apparent depth $\approx 1/1.33 = 0.75\text{ m}$.

**Example 3 — Optical fibre.** Core $n_1 = 1.5$, cladding $n_2 = 1.45$. Critical angle: $\sin\theta_c = 1.45/1.5 = 0.967$, so $\theta_c = 75.3°$. Maximum acceptance angle (relative to the fibre axis) is $\sin\theta_a = \sqrt{n_1^2 - n_2^2} = \sqrt{2.25 - 2.1025} = \sqrt{0.1475} \approx 0.384$, so $\theta_a \approx 22.6°$.

## Common Misconceptions
- **"Refraction is caused by light slowing down at the interface."** Light does slow down (in the higher-$n$ medium), but the bending is governed by Snell's law, not by the speed change alone. The connection is that the wavefronts must stay continuous across the interface.
- **"Total internal reflection means all the light is reflected."** Yes — by definition. There is no refracted ray; the reflection is $100\%$.
- **"Dispersion is the same as scattering."** No — dispersion is the wavelength-dependence of $n$; scattering is the redirection of light by particles. Both contribute to rainbows, but they are distinct.
- **"A mirror reverses left and right."** No — a mirror reverses front and back (depth). The left–right reversal is a perceptual artifact, not a physical one.

## Connections
Snell's law is the basis of lens design and image formation (next lesson). Total internal reflection is the basis of optical fibres, which are revolutionising telecommunications and endoscopy. Dispersion is the basis of spectroscopy — the dominant tool of *Astrophysics I* and *Atomic and Molecular Physics*. Fermat's principle is the prototype of variational methods in mechanics (Maupertuis' principle) and in *Quantum Mechanics* (Feynman's path integral).

## Quick Check
1. State the law of reflection.
2. State Snell's law.
3. Light goes from air ($n = 1$) to glass ($n = 1.5$) at $\theta_1 = 45°$. Find $\theta_2$.
4. Find the critical angle for total internal reflection at a glass–air interface ($n = 1.5$).
5. What is dispersion? Give an example.

## Takeaway
- Index of refraction: $n = c/v \ge 1$.
- Reflection: $\theta_r = \theta_i$.
- Snell's law: $n_1 \sin\theta_1 = n_2 \sin\theta_2$.
- Total internal reflection: $\sin\theta_c = n_2/n_1$ for $n_1 > n_2$.
- Fermat's principle: light takes the path of least time.
