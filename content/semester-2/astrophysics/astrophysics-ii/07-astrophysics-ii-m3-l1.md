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
lessonId: astrophysics-ii-m3-l1
lessonName: Orbital Elements and the Orbit Equation
lessonNumber: 7
moduleNumber: 3
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - astrophysics-ii-m1-l1
  - astrophysics-ii-m1-l2
learningObjectives:
  - State the six Keplerian orbital elements.
  - Use the orbit equation $r = a(1 - e^2)/(1 + e \cos\nu)$ to compute positions.
  - Apply the vis-viva equation.
  - Compute the position and velocity of an orbiting body at any point in the orbit.
concepts:
  - Keplerian orbital elements
  - True anomaly
  - Eccentric anomaly
  - Mean anomaly
  - Vis-viva equation
  - Orbit equation
tags:
  - astrophysics
  - orbital-mechanics
  - exoplanets
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Orbital Elements and the Orbit Equation

## Overview
An orbit is fully specified by six numbers — the *Keplerian orbital elements*. Given those, the position and velocity of the orbiting body are determined at every moment. This lesson introduces the elements, derives the orbit equation, and shows how to compute position, velocity, and the time of flight between two points. The same framework is used for planets, asteroids, satellites, and exoplanets.

## Learning Path
- What you should already know: Kepler's laws, conic sections, conservation of angular momentum and energy.
- What this lesson adds: a complete working framework for orbits in 3D.
- What it unlocks: space-mission design, exoplanet transit timing, and binary-star orbit fitting.

## Core Explanation
**The six orbital elements.**
- $a$ — semi-major axis (size).
- $e$ — eccentricity (shape, $0 \le e < 1$ for bound).
- $i$ — inclination (tilt of the orbital plane to a reference plane, usually the ecliptic).
- $\Omega$ — longitude of ascending node (where the orbit crosses the reference plane going north).
- $\omega$ — argument of perihelion (where perihelion lies, measured from the ascending node in the orbital plane).
- $\nu$ (or $f$) — true anomaly (current position, measured from perihelion in the orbital plane).

Sometimes $T$ (time of perihelion passage) is used in place of $\nu$. The first five are constants of the motion; the last one changes with time.

**The orbit equation.** The position in the orbital plane, with focus at the Sun and perihelion along the $x$-axis:

$$r(\nu) = \frac{a(1 - e^2)}{1 + e \cos\nu} = \frac{\ell}{1 + e \cos\nu},$$

where $\ell = a(1 - e^2)$ is the *semi-latus rectum*. As $\nu$ varies from $0$ to $2\pi$, the radius traces an ellipse.

**Perihelion and aphelion.** $\nu = 0$: $r = a(1 - e) = q$ (perihelion distance). $\nu = \pi$: $r = a(1 + e) = Q$ (aphelion distance). $a = (q + Q)/2$.

**Velocity components.** In the orbital plane, with $\hat{r}$ along the radius and $\hat{\theta}$ perpendicular:

$$v_r = \dot{r} = \frac{G M}{L} e \sin\nu, \quad v_\theta = r \dot{\theta} = \frac{L}{m r},$$

where $L$ is the angular momentum. The total speed is $v^2 = v_r^2 + v_\theta^2$.

**Vis-viva equation.** The total speed at any point in the orbit depends only on the current distance $r$ and the semi-major axis $a$:

$$v^2 = G M \left(\frac{2}{r} - \frac{1}{a}\right).$$

At perihelion: $v_q = \sqrt{G M (1 + e)/(a(1 - e))}$. At aphelion: $v_Q = \sqrt{G M (1 - e)/(a(1 + e))}$. The ratio $v_q/v_Q = (1 + e)/(1 - e)$ — the planet moves faster at perihelion, as expected from Kepler's second law.

**Eccentric anomaly.** A geometric construction: project the planet's position onto the auxiliary circle (the circumscribing circle of the ellipse), then measure the angle at the centre of the ellipse. The *eccentric anomaly* $E$ is related to $\nu$ by

$$\tan(\nu/2) = \sqrt{\frac{1 + e}{1 - e}} \tan(E/2).$$

**Mean anomaly.** A linear function of time: $M = n (t - T)$, where $n = 2\pi/T$ is the mean motion and $T$ is the time of perihelion passage. Kepler's equation relates $M$ and $E$:

$$M = E - e \sin E.$$

This transcendental equation has no closed-form solution; it is solved numerically (Newton–Raphson in *Numerical Methods* Sem 4).

**Time of flight.** The time to go from perihelion to a given $E$ is $\Delta t = (E - e \sin E)/n$. For a transfer orbit, the time of flight between two positions is computed by integrating the area swept.

**The orbit in 3D.** To convert from orbital-plane coordinates to ecliptic coordinates, apply three rotations:
1. Rotate by $\omega$ around the $z$-axis to put perihelion at the right longitude in the orbital plane.
2. Rotate by $i$ around the $x$-axis to tilt the orbit to the ecliptic.
3. Rotate by $\Omega$ around the $z$-axis to place the ascending node.

The combined rotation matrix is the standard transformation used in ephemeris calculations.

**Hohmann transfer orbit.** A practical application: to move a spacecraft from orbit 1 (around body $A$) to orbit 2 (around body $B$), use an elliptical transfer orbit tangent to both, with apogee on orbit 2. Two velocity burns are needed: one to leave orbit 1, one to enter orbit 2. The total $\Delta v$ is

$$\Delta v = \sqrt{\frac{\mu}{r_1}} \left( \sqrt{\frac{2 r_2}{r_1 + r_2}} - 1 \right) + \sqrt{\frac{\mu}{r_2}} \left( 1 - \sqrt{\frac{2 r_1}{r_1 + r_2}} \right),$$

where $\mu$ is the gravitational parameter of the central body and $r_1, r_2$ are the orbital radii.

**Exoplanet orbits.** Most exoplanets have nearly circular orbits ($e$ small) because tides from the star circularise close-in orbits. Highly eccentric orbits are common for planets at large distances, like the Solar System's. The orbital elements of an exoplanet are inferred from radial-velocity and transit observations.

## Key Ideas
- Six orbital elements: $a, e, i, \Omega, \omega, \nu$.
- Orbit equation: $r = a(1-e^2)/(1 + e \cos\nu)$.
- Vis-viva: $v^2 = G M (2/r - 1/a)$.
- Kepler's equation: $M = E - e \sin E$.
- Hohmann transfer: minimum-$\Delta v$ two-burn orbit between two circular orbits.

## Worked Examples
**Example 1 — Position and velocity on an orbit.** Earth: $a = 1.5 \times 10^{11}\text{ m}$, $e = 0.0167$. At $\nu = 90°$ (quarter orbit after perihelion): $r = a(1 - e^2)/(1 + e \cos 90°) = a(1 - e^2) \approx 1.496 \times 10^{11}\text{ m}$. Speed from vis-viva: $v^2 = G M (2/r - 1/a) = 1.33 \times 10^{20} (2/(1.496 \times 10^{11}) - 1/(1.5 \times 10^{11})) \approx (1.33 \times 10^{20})(6.5 \times 10^{-12}) \approx 8.6 \times 10^8$, $v \approx 29.3\text{ km/s}$.

**Example 2 — Hohmann transfer Earth to Mars.** $r_1 = 1$ AU, $r_2 = 1.524$ AU. Transfer semi-major axis: $a_t = (r_1 + r_2)/2 = 1.262$ AU. Transfer time: $T_t = \pi \sqrt{a_t^3/\mu_\odot} = \pi \sqrt{1.262^3} \approx 8.6$ months (in units of years; about $259$ days). First $\Delta v$: $\sqrt{\mu/r_1}(\sqrt{2 r_2/(r_1+r_2)} - 1) \approx 30 (1.15 - 1) \approx 4.3\text{ km/s}$ (relative to Earth's orbital speed).

**Example 3 — Highly eccentric orbit.** Halley's comet: $a = 17.8$ AU, $e = 0.967$. Perihelion: $q = a(1 - e) = 0.586$ AU. Aphelion: $Q = a(1 + e) = 35.0$ AU. Speed at perihelion: $v_q = \sqrt{G M (1 + e)/q} \approx 54.5\text{ km/s}$.

## Common Misconceptions
- **"All orbits are circular."** No — only circular orbits have $e = 0$. Real orbits are usually elliptical, sometimes highly so.
- **"Inclination is the tilt of the orbit from horizontal."** It is the tilt of the orbital plane from a reference plane (usually the ecliptic).
- **"The orbital elements are constants."** The first five are constants of the motion; the sixth (true anomaly) changes with time.
- **"Hohmann transfer is the fastest."** It is the *most fuel-efficient* transfer between two circular orbits, not the fastest. Faster transfers use more fuel.

## Connections
The orbital elements are the standard input to ephemeris calculations — predicting where a planet or satellite will be at a given time. They are also the output of orbit-fitting procedures for binary stars, exoplanets, and asteroids. The vis-viva equation is used in space-mission planning. The mean anomaly and Kepler's equation connect orbital motion to the time domain and reappear in *Numerical Methods* (Sem 4) for solving transcendental equations.

## Quick Check
1. Name the six Keplerian orbital elements.
2. State the orbit equation and identify each symbol.
3. State the vis-viva equation.
4. An orbit has $a = 5$ AU, $e = 0.5$. Find $q, Q$.
5. A satellite is in a circular orbit of radius $7000\text{ km}$ around Earth. Find its speed.

## Takeaway
- Six orbital elements: $a, e, i, \Omega, \omega, \nu$.
- Orbit equation: $r = a(1-e^2)/(1 + e \cos\nu)$.
- Vis-viva: $v^2 = G M (2/r - 1/a)$.
- Kepler's equation: $M = E - e \sin E$ relates mean motion to eccentric anomaly.
- Hohmann transfer: minimum-$\Delta v$ two-burn transfer between circular orbits.
