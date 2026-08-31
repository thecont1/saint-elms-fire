***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-ii
courseName: Astrophysics II — Gravitation and the Solar System
moduleId: astrophysics-ii-module-3
moduleName: Planetary Motion and Exoplanets
lessonId: astrophysics-ii-m3-l2
lessonName: Detecting Exoplanets — Transit and Radial Velocity
lessonNumber: 8
moduleNumber: 3
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 8
prerequisites:
  - astrophysics-ii-m1-l2
  - astrophysics-i-m1-l2
learningObjectives:
  - Describe the radial-velocity method for detecting exoplanets.
  - Describe the transit method and what it can measure.
  - Compute the radial-velocity amplitude and transit depth for a planet.
  - Recognise the biases and selection effects of each method.
concepts:
  - Radial velocity (Doppler) method
  - Transit method
  - Transit depth
  - Hot Jupiter
  - Selection bias
  - Detection yield
tags:
  - astrophysics
  - exoplanets
  - detection
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Detecting Exoplanets — Transit and Radial Velocity

## Overview
The first confirmed exoplanet around a Sun-like star — $51$ Pegasi b — was discovered in 1995 by Mayor and Queloz using the radial-velocity method. Since then, more than $5{,}500$ exoplanets have been confirmed, mostly by the transit method from the Kepler and TESS space missions. This lesson develops the physics of the two main detection techniques, the signals they produce, and the selection effects that shape the known population.

## Learning Path
- What you should already know: the Doppler effect, the two-body problem, brightness measurement.
- What this lesson adds: a quantitative understanding of how planets around other stars are detected and what we can learn from them.
- What it unlocks: the architecture of exoplanetary systems, the search for habitable worlds, and atmospheric characterisation of exoplanets.

## Core Explanation
**The radial-velocity (RV) method.** A planet and its star orbit the common centre of mass. The star's reflex motion produces a Doppler shift in its spectral lines, with a semi-amplitude

$$K = \left(\frac{2 \pi G}{P}\right)^{1/3} \frac{m_p \sin i}{M_*^{2/3}} \frac{1}{\sqrt{1 - e^2}},$$

where $P$ is the orbital period, $m_p$ the planet mass, $M_*$ the stellar mass, $i$ the inclination of the orbit, and $e$ the eccentricity. The factor $\sin i$ is the major limitation: the method measures only $m_p \sin i$, not the true mass. The Doppler shift is superposed on the star's intrinsic motion and stellar oscillations; the achievable precision is about $1\text{ m/s}$ for the best spectrographs (HARPS, ESPRESSO, NEID).

**A worked example.** A hot Jupiter with $m_p = 1 M_J$, $M_* = 1 M_\odot$, $P = 4$ days, $i = 90°$, $e = 0$: $K = (2\pi G/4\text{ d})^{1/3} \times 1/(1)^{2/3} \approx 130\text{ m/s}$. Easily detectable. For an Earth-mass planet at $1$ AU around a Sun-like star ($P = 1$ year), $K \approx 0.09\text{ m/s}$ — at the limit of current technology.

**The transit method.** When a planet's orbit is aligned nearly edge-on to the line of sight, the planet passes in front of the star once per orbit, blocking a fraction of the starlight. For a star of radius $R_*$ and a planet of radius $R_p$, the *transit depth* is

$$\delta = \left(\frac{R_p}{R_*}\right)^2.$$

For a Jupiter–Sun analog: $\delta \approx (0.1 R_\odot / R_\odot)^2 = 0.01$, or $1\%$. For an Earth–Sun: $\delta \approx 0.000084$, or $84$ parts per million — challenging but measurable from space (Kepler achieved $20$ ppm precision).

**Transit photometry.** A high-precision light curve is recorded, and a periodic dip is searched for. The shape of the dip reveals the planet's size, the orbital period, the inclination, and (in favourable cases) the planet's atmosphere. A second, smaller dip — the *secondary eclipse* — occurs when the planet passes behind the star; this is a measure of the planet's *emitted* light, which constrains the temperature and albedo.

**Transit timing variations (TTVs).** In multi-planet systems, the gravitational interaction between planets perturbs their orbits, leading to slight variations in the times of transits. The TTV amplitude is a probe of the planet masses, even without RV follow-up.

**Geometric transit probability.** The probability that a random orbit is aligned to produce a transit is $\sim R_*/a$ for a circular orbit. For a hot Jupiter at $0.05$ AU around a Sun-like star, the probability is about $10\%$; for Earth at $1$ AU, about $0.5\%$. This is why the transit method favours close-in planets.

**Selection biases.** Both methods are biased toward massive, close-in planets. The radial-velocity method favours massive planets and short periods (large $K$); the transit method favours large planets and short periods (geometric probability and more transits in a given time). The apparent abundance of "hot Jupiters" is largely a selection effect — they are over-represented in the known population, but not necessarily in the underlying population.

**Other methods.**
- *Astrometry*: measure the star's wobble in the plane of the sky. Gaia is detecting Jupiter-mass planets by this method.
- *Gravitational microlensing*: a star's gravity bends the light of a background star, briefly magnifying it; a planet can produce a brief anomaly.
- *Direct imaging*: block the starlight and photograph the planet. Limited to young, hot, widely separated planets.
- *Pulsar timing*: pulsar timing arrays are sensitive to Earth-mass planets around pulsars (the first exoplanets ever discovered, in 1992, were around a pulsar).

**The habitable zone.** The range of orbital distances at which a planet could have liquid water on the surface, given the star's luminosity. For the Sun, roughly $0.95$–$1.37$ AU. The habitable zone depends on the star's luminosity and on the planet's atmosphere (a thicker atmosphere extends the outer edge).

**Atmospheric characterisation.** During a transit, starlight passes through the planet's atmosphere. The wavelength-dependent absorption reveals the atmospheric composition (water, methane, $\text{CO}_2$, sodium, etc.). The James Webb Space Telescope is the new workhorse for transit spectroscopy.

## Key Ideas
- Radial velocity: $K = (2\pi G/P)^{1/3} m_p \sin i / (M_*^{2/3} \sqrt{1 - e^2})$.
- Transit depth: $\delta = (R_p/R_*)^2$.
- Both methods favour massive, close-in planets.
- Geometric transit probability $\sim R_*/a$ is small for Earth–Sun.
- TTVs probe masses; transit spectroscopy probes atmospheres.

## Worked Examples
**Example 1 — RV amplitude of an Earth–Sun analog.** $m_p = M_\oplus$, $M_* = M_\odot$, $P = 1$ year, $i = 90°$, $e = 0$. $K = (2\pi G/1\text{ yr})^{1/3} \times M_\oplus/M_\odot^{2/3}$. Compute: $2\pi G = 4.19 \times 10^{-10}\text{ m}^3/\text{kg·s}^2$. Divided by $P = 3.15 \times 10^7\text{ s}$: $1.33 \times 10^{-17}$. Cube root: $\approx 2.37 \times 10^{-6}$. $M_\oplus/M_\odot^{2/3} = 5.97 \times 10^{24} / (1.99 \times 10^{30})^{2/3} = 5.97 \times 10^{24} / 3.50 \times 10^{20} = 1.7 \times 10^4 \text{ kg}^{1/3}$. $K \approx 2.37 \times 10^{-6} \times 1.7 \times 10^4 \times \text{(unit conversion)} \approx 0.09\text{ m/s}$.

**Example 2 — Transit depth for a hot Jupiter.** $R_p = R_J \approx 0.1 R_\odot$, $R_* = R_\odot$. $\delta = 0.01 = 1\%$.

**Example 3 — Transit probability.** A planet at $a = 0.05$ AU around a Sun-like star ($R_* = R_\odot = 4.65 \times 10^{-3}$ AU): $P_\text{transit} = R_*/a = 0.093 \approx 9\%$. So only about one in ten hot Jupiters is geometrically aligned to transit.

## Common Misconceptions
- **"We have directly imaged most exoplanets."** No — direct imaging is the smallest contributor. Most exoplanets are detected indirectly.
- **"All exoplanet systems are like the Solar System."** No — most are very different (hot Jupiters, compact multi-planet systems, super-Earths).
- **"Earth-analog planets are easy to find."** No — they are at the limits of current technology, and selection effects are severe.
- **"A transit always means the planet is habitable."** No — a transit is just a geometric alignment. The transit method finds planets of all kinds.

## Connections
Exoplanet detection is the meeting point of *Mechanics* (the two-body problem), *Waves and Optics* (Doppler shift, photometry), *Atomic and Molecular Physics* (spectroscopy), and *Astrophysics I* (instruments and detector technology). The habitable zone concept ties to *climate science* and *geophysics* (a planet's atmosphere determines its actual surface conditions). The search for life is the long-term goal of exoplanet science.

## Quick Check
1. State the formula for radial-velocity semi-amplitude.
2. State the formula for transit depth.
3. Why does the transit method favour close-in planets?
4. What is the limit of the radial-velocity method for an Earth–Sun analog?
5. Name three detection methods besides RV and transit.

## Takeaway
- Radial velocity measures the star's reflex motion: $K \propto m_p \sin i / (M_*^{2/3} P^{1/3})$.
- Transit depth: $\delta = (R_p/R_*)^2$; requires edge-on alignment.
- Both methods favour massive, close-in planets; selection effects bias the known population.
- Transit spectroscopy probes planetary atmospheres; TTVs probe masses.
- The habitable zone is the range of $a$ where liquid water could exist on the surface.
