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
lessonId: waves-and-optics-m3-l1
lessonName: Interference and Young's Double Slit
lessonNumber: 7
moduleNumber: 3
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 7
prerequisites:
  - waves-and-optics-m1-l2
learningObjectives:
  - State the conditions for coherent sources and for interference.
  - Derive the position of bright and dark fringes in Young's double slit.
  - Use the relation between fringe spacing, slit separation, and wavelength.
  - Recognise interference in thin films, Newton's rings, and the Michelson interferometer.
concepts:
  - Coherence
  - Constructive and destructive interference
  - Path difference
  - Young's double slit
  - Fringe spacing
  - Thin-film interference
tags:
  - physics
  - wave-optics
  - interference
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Interference and Young's Double Slit

## Overview
The defining phenomenon of wave optics is interference: when two coherent waves overlap, they can reinforce (constructive) or cancel (destructive), depending on the phase difference. The classic demonstration is Young's double-slit experiment, in which a wave passing through two narrow slits produces a pattern of bright and dark fringes on a screen. This lesson develops the theory of interference, derives the double-slit formula, and surveys the rich variety of interference phenomena — from soap bubbles to interferometers.

## Learning Path
- What you should already know: wave superposition, the wave equation, basic geometry.
- What this lesson adds: a quantitative understanding of interference and its many applications.
- What it unlocks: diffraction and resolution, the operation of interferometers, and the wave nature of matter in *Quantum Mechanics*.

## Core Explanation
**Coherence.** Two sources are *coherent* if they have a fixed phase relationship over time. Lasers are highly coherent; ordinary light sources are mostly incoherent. Interference is observed only with coherent sources (or with very narrow-band light, or in clever setups that use a single source split into two paths).

**Path difference.** For two waves arriving at a point from two sources, the *path difference* $\Delta r = r_2 - r_1$ determines the phase difference $\Delta\phi = (2\pi/\lambda) \Delta r$. Constructive interference: $\Delta r = m \lambda$ ($m = 0, \pm 1, \pm 2, \ldots$). Destructive: $\Delta r = (m + 1/2) \lambda$.

**Young's double slit.** Two narrow slits separated by $d$, illuminated by a plane wave of wavelength $\lambda$. On a screen at distance $L \gg d$, the path difference at a point $y$ from the central axis is approximately

$$\Delta r \approx \frac{d y}{L}.$$

Bright fringes: $d y/L = m \lambda$, so $y_m = m \lambda L/d$. Fringe spacing (between adjacent bright fringes): $\Delta y = \lambda L/d$.

**Derivation.** Each slit acts as a coherent source (because they are illuminated by the same wavefront). At a point $P$ on the screen, the path difference between the two waves is $r_2 - r_1$. For $L \gg d$ and $y$ small, the geometry gives $r_2 - r_1 \approx d \sin\theta \approx d y/L$ for small angles. Constructive interference: $r_2 - r_1 = m \lambda$.

**Intensity pattern.** The intensity on the screen is

$$I(y) = 4 I_0 \cos^2\left(\frac{\pi d y}{\lambda L}\right),$$

where $I_0$ is the intensity from one slit alone. The pattern has bright fringes at $y = m \lambda L/d$ and dark fringes at $y = (m + 1/2) \lambda L/d$. The visibility (contrast) is

$$V = \frac{I_\text{max} - I_\text{min}}{I_\text{max} + I_\text{min}} = 1,$$

ideal for perfectly coherent sources.

**Thin-film interference.** Light reflecting from the top and bottom of a thin film (e.g. a soap bubble, an oil slick) interferes. The path difference is $2 n t \cos\theta_t$, where $t$ is the film thickness, $n$ the film index, $\theta_t$ the refracted angle. There is also a $\pi$ phase shift on reflection from a higher-index medium. The condition for constructive reflection from a film of index $n_1$ between media of indices $n_0$ and $n_2$ depends on the relative magnitudes; for $n_0 < n_1 < n_2$ (e.g. oil on water), constructive reflection occurs for $2 n_1 t = (m + 1/2) \lambda$.

**Newton's rings.** A plano-convex lens on a flat glass plate produces concentric interference rings. The radius of the $m$-th bright ring is $r_m = \sqrt{m \lambda R}$, where $R$ is the radius of curvature of the lens. The rings are equally spaced in $r^2$ — a classic method for measuring the wavelength of light.

**Michelson interferometer.** A beam splitter divides a beam into two perpendicular arms; the two return and recombine. Moving one mirror by $\lambda/2$ shifts the fringe pattern by one fringe. The interferometer can measure distances to sub-wavelength precision, the wavelength itself, the refractive index of gases, and (in LIGO) gravitational waves.

**Fabry–Pérot interferometer.** Two parallel partially reflecting surfaces. Light is multiply reflected inside, producing a sharp interference pattern. The resolving power is very high; the device is used in spectroscopy to resolve closely spaced spectral lines.

**Coherence length.** A real source has a finite bandwidth $\Delta \lambda$ and emits wave trains of finite duration $\tau_c$. The *coherence length* is $L_c = c \tau_c \approx \lambda^2/\Delta \lambda$. For interference to be observed, the path difference must be less than $L_c$. Lasers have long coherence lengths (metres to km); sunlight has a short one (about $1\ \mu\text{m}$).

**Spatial coherence.** A real source has finite size. The double-slit fringes wash out if the source's angular size $\theta_s$ satisfies $\theta_s \gtrsim \lambda/d$. This is why the slits in Young's experiment are illuminated by a single slit (to make the source effectively a point for spatial coherence).

**Anti-reflection coatings.** A thin layer of MgF$_2$ ($n \approx 1.38$) of thickness $\lambda/4$ on a glass lens ($n \approx 1.5$) produces destructive interference for the reflected wave, reducing reflection losses. Multi-layer coatings can reduce reflection to less than $0.1\%$ over a range of wavelengths.

**Diffraction vs. interference.** Diffraction is the bending of a wave by a single aperture or obstacle; interference is the combination of two or more waves. Both are wave phenomena and the mathematics is similar. The single-slit diffraction pattern in *Waves and Optics* Module 3 Lesson 2 is the diffraction counterpart of this lesson's interference pattern.

## Key Ideas
- Coherent sources have a fixed phase relation; interference requires coherence.
- Constructive: $\Delta r = m \lambda$; destructive: $\Delta r = (m + 1/2) \lambda$.
- Double-slit fringe spacing: $\Delta y = \lambda L / d$.
- Thin-film interference: phase shifts on reflection at higher index.
- Coherence length: $L_c \approx \lambda^2/\Delta \lambda$.

## Worked Examples
**Example 1 — Double slit.** $d = 0.5\text{ mm}$, $L = 2\text{ m}$, $\lambda = 600\text{ nm}$. Fringe spacing: $\Delta y = 600 \times 10^{-9} \times 2 / 0.5 \times 10^{-3} = 2.4 \times 10^{-3}\text{ m} = 2.4\text{ mm}$.

**Example 2 — Soap film.** A soap film ($n = 1.33$) of thickness $400\text{ nm}$ in air, with light of $\lambda = 600\text{ nm}$ at normal incidence. Path difference: $2 \times 1.33 \times 400 = 1064\text{ nm}$. Phase shifts: both reflections are at higher index, so both get a $\pi$ shift (no relative shift). $1064/600 = 1.77$, close to $2$ — not a constructive condition. Try $\lambda = 532\text{ nm}$: $1064/532 = 2.0$ — exact constructive.

**Example 3 — Michelson.** One arm of a Michelson interferometer is moved by $1.23\ \mu\text{m}$. Number of fringes shifted: $\Delta N = 2 \Delta L/\lambda = 2 \times 1.23/0.6 \approx 4.1$ fringes (assuming $\lambda = 600\text{ nm}$). The factor of 2 comes from the round trip.

## Common Misconceptions
- **"Bright fringes are where light is added."** Bright fringes are where two waves add *in phase*; the energy comes from the dark fringes, where the waves cancel. Total energy is conserved.
- **"Interference requires special equipment."** No — every soap bubble shows interference, and so does the lens coating on a camera. The phenomenon is everywhere; what is special is having *coherent* sources.
- **"A thin film is always coloured."** No — the colour depends on the film's thickness, the viewing angle, and the illumination. A flat film of uniform thickness shows uniform colour; varying thickness shows varying colour (like the bands on a soap film just before it breaks).
- **"Higher contrast means brighter fringes."** No — contrast (visibility) is a separate property from brightness. Coherent sources give high contrast; incoherent sources give low contrast.

## Connections
Interference is the defining phenomenon of wave optics and the basis of every interferometric measurement. The Michelson interferometer is the prototype of LIGO (gravitational waves). Fabry–Pérot resonators are the heart of every laser cavity. Anti-reflection coatings are everywhere in optics. The same interference mathematics reappears in *Quantum Mechanics* (the double-slit experiment with electrons) and in the theory of *coherence* in *Atomic and Molecular Physics* (laser spectroscopy).

## Quick Check
1. State the condition for constructive interference in terms of path difference.
2. In a double-slit experiment with $d = 0.2\text{ mm}$, $\lambda = 500\text{ nm}$, and $L = 1.5\text{ m}$, find the fringe spacing.
3. Why does a soap film show colours?
4. What is coherence length, and what limits it for a real source?
5. State the role of phase shifts in thin-film interference.

## Takeaway
- Interference requires coherent sources.
- Constructive: $\Delta r = m \lambda$; destructive: $\Delta r = (m + 1/2) \lambda$.
- Double-slit fringe spacing: $\Delta y = \lambda L / d$.
- Thin-film interference depends on path difference and reflection phase shifts.
- Coherence length: $L_c \approx \lambda^2/\Delta \lambda$.
