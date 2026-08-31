***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-ii
courseName: Astrophysics II — Gravitation and the Solar System
moduleId: astrophysics-ii-module-1
moduleName: Newtonian Gravity
lessonId: astrophysics-ii-m1-l1
lessonName: Kepler's Laws from Newtonian Gravity
lessonNumber: 1
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - astrophysics-i-m1-l1
  - mechanics-m3-l1
learningObjectives:
  - State Newton's law of universal gravitation.
  - Derive Kepler's three laws from Newton's law and the inverse-square form.
  - Compute orbital periods and the gravitational parameter.
  - Recognise the connection between Kepler's laws and conservation of angular momentum and energy.
concepts:
  - Newton's law of gravitation
  - Gravitational constant G
  - Kepler's first law (ellipses)
  - Kepler's second law (equal areas)
  - Kepler's third law (period–distance)
  - Conservation of angular momentum
tags:
  - astrophysics
  - gravitation
  - kepler
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Kepler's Laws from Newtonian Gravity

## Overview
Johannes Kepler distilled decades of Tycho Brahe's observations into three laws of planetary motion. Isaac Newton showed that these laws are consequences of his law of universal gravitation and the laws of motion. This lesson derives Kepler's laws from Newton, exposing the conservation laws (angular momentum, energy) that make the orbits what they are. Kepler's laws are the foundation of orbital mechanics, from spacecraft trajectories to exoplanet detection.

## Learning Path
- What you should already know: Newton's laws, conservation of angular momentum and energy, the conic sections.
- What this lesson adds: a derivation of Kepler's laws and a working understanding of gravitational orbits.
- What it unlocks: the two-body problem, orbital manoeuvres, escape velocity, and the detection of exoplanets.

## Core Explanation
**Newton's law of universal gravitation.** Every pair of point masses $m_1$ and $m_2$ separated by a distance $r$ attracts each other with a force

$$F = G \frac{m_1 m_2}{r^2},$$

where $G = 6.674 \times 10^{-11}\text{ N·m}^2/\text{kg}^2$ is the gravitational constant. The force is along the line joining the masses and is attractive.

For spherically symmetric bodies (like the Sun and most planets), the formula applies as if all the mass were at the centre. This is a consequence of the inverse-square law and the shell theorem (the field of a uniform shell is zero inside and equivalent to a point mass at the centre outside).

**Kepler's first law (the ellipse).** Each planet moves in an ellipse with the Sun at one focus. Derivation: conservation of energy $E = \tfrac{1}{2} m v^2 - G M m/r$ and conservation of angular momentum $L = m r^2 \dot{\theta}$, combined with Newton's second law in polar coordinates, give an orbit equation in terms of the semi-latus rectum $\ell = L^2/(G M m^2)$ and the eccentricity $e$:

$$r(\theta) = \frac{\ell}{1 + e \cos(\theta - \theta_0)}.$$

This is the polar equation of a conic section with focus at the origin: ellipse ($0 \le e < 1$), parabola ($e = 1$), or hyperbola ($e > 1$). Bound orbits ($E < 0$) are ellipses; unbound ($E \ge 0$) are parabolae or hyperbolae.

**Kepler's second law (equal areas).** The line joining the planet to the Sun sweeps out equal areas in equal times. This is a direct consequence of conservation of angular momentum: $dA/dt = L/(2 m) = $ constant.

**Kepler's third law (the harmonic law).** The square of the orbital period is proportional to the cube of the semi-major axis:

$$T^2 = \frac{4 \pi^2 a^3}{G(M + m)} \approx \frac{4 \pi^2 a^3}{G M}$$

for $m \ll M$. For the Solar System, with $T$ in years and $a$ in AU: $T^2 = a^3$. (Earth: $T = 1$ year, $a = 1$ AU. Jupiter: $T \approx 11.86$ years, $a \approx 5.2$ AU. Check: $11.86^2 = 140.7$, $5.2^3 = 140.6$. ✓)

Derivation: the area of an ellipse is $\pi a b$ where $b = a \sqrt{1 - e^2}$. The rate of area sweep is $L/(2 m) = \pi a b / T$. Equating with the angular-momentum value $L^2 = G M m^2 a (1 - e^2)$ gives $T^2 = 4 \pi^2 a^3 / (G M)$.

**Energy of an orbit.** The total energy of a Keplerian orbit is

$$E = -\frac{G M m}{2 a},$$

depending only on the semi-major axis $a$ (not the eccentricity). The kinetic and potential energies at any point can be expressed in terms of $r$ and $a$:

$$\tfrac{1}{2} m v^2 = G M m \left(\frac{1}{r} - \frac{1}{2 a}\right).$$

This is the *vis-viva* equation, used in spacecraft navigation.

**Bound vs. unbound.** $E < 0$ for bound (elliptical) orbits; $E = 0$ for parabolic (escape trajectory); $E > 0$ for hyperbolic (open) trajectories. The escape velocity at distance $r$ is

$$v_{\text{esc}} = \sqrt{\frac{2 G M}{r}}.$$

For Earth's surface: $v_{\text{esc}} \approx 11.2\text{ km/s}$. For the Sun's surface: about $618\text{ km/s}$.

**Reduced mass.** For two bodies $m_1, m_2$ orbiting their common centre of mass, the relative motion $\vec{r} = \vec{r}_1 - \vec{r}_2$ follows an ellipse with the "central mass" replaced by the reduced mass $\mu = m_1 m_2 / (m_1 + m_2)$. Kepler's third law becomes $T^2 = 4 \pi^2 a^3 / (G (m_1 + m_2))$.

## Key Ideas
- Newton's law: $F = G m_1 m_2 / r^2$ for point (or spherically symmetric) masses.
- The orbit equation $r = \ell / (1 + e \cos\theta)$ is a conic with the focus at the centre.
- Kepler's second law: equal areas in equal times (from angular momentum conservation).
- Kepler's third law: $T^2 \propto a^3$ (from energy and angular momentum).
- Total orbital energy: $E = -G M m / (2 a)$.

## Worked Examples
**Example 1 — Orbital period of a satellite.** A satellite orbits Earth at altitude $h = 400\text{ km}$ (LEO). Earth's mass $M = 5.97 \times 10^{24}\text{ kg}$, radius $R = 6371\text{ km}$. Find the period.
$a = R + h = 6.771 \times 10^6\text{ m}$. $T = 2\pi \sqrt{a^3/(G M)} = 2\pi \sqrt{(6.77 \times 10^6)^3 / (6.67 \times 10^{-11} \times 5.97 \times 10^{24})} \approx 5.54 \times 10^3\text{ s} \approx 92.4\text{ min}$.

**Example 2 — Escape velocity from the Sun.** From Earth's orbital distance ($r = 1.5 \times 10^{11}\text{ m}$), what is the escape velocity from the Sun?
$v_{\text{esc}} = \sqrt{2 G M_\odot / r} = \sqrt{2 \times 6.67 \times 10^{-11} \times 1.99 \times 10^{30} / (1.5 \times 10^{11})} \approx 42.1\text{ km/s}$.

**Example 3 — Geosynchronous orbit.** A satellite orbits Earth once per sidereal day ($T = 86164\text{ s}$). Find $a$.
$a = (G M T^2 / (4 \pi^2))^{1/3} = (6.67 \times 10^{-11} \times 5.97 \times 10^{24} \times (86164)^2 / (4 \pi^2))^{1/3} \approx 4.22 \times 10^7\text{ m}$. This is the geosynchronous orbit, about $35{,}786\text{ km}$ above Earth's surface.

## Common Misconceptions
- **"Kepler's laws apply to the Sun and planets only."** They apply to any inverse-square central force — planets around stars, stars around galactic centres, satellites around planets, electrons in hydrogen (Coulomb force, with sign).
- **"The Sun is at the centre of the orbit."** The Sun is at one *focus* of the ellipse. For circular orbits, the two foci coincide and the distinction is moot.
- **"The orbit is determined by the initial position."** No — it is determined by the initial *position and velocity*. Six numbers (three position, three velocity) determine the orbit.
- **"Mass of the orbiting body doesn't matter for the period."** It appears in the reduced-mass correction to Kepler's third law, but for $m \ll M$ the correction is negligible.

## Connections
Kepler's laws are the basis of *orbital mechanics* in *Astrophysics II* and the rest of this course. The energy equation $E = -G M m/(2 a)$ is the starting point for Hohmann transfer orbits and the patched-conic approximation for interplanetary travel. The same inverse-square law and conic-section orbits reappear for the hydrogen atom in *Introduction to Quantum Mechanics* — a profound connection.

## Quick Check
1. State Kepler's three laws.
2. A planet orbits a star of mass $M$ at semi-major axis $a$. Find its period in terms of $M$ and $a$.
3. The asteroid Ceres has $a = 2.77$ AU. Estimate its orbital period.
4. Why is the Sun at a focus of the orbit, not the centre?
5. A satellite is moved from a low orbit to a higher orbit. Does its total energy increase, decrease, or stay the same?

## Takeaway
- Newton's law of gravitation: $F = G m_1 m_2 / r^2$.
- Kepler's first law: planets move in ellipses with the Sun at one focus.
- Kepler's second law: equal areas in equal times (angular momentum conservation).
- Kepler's third law: $T^2 = 4 \pi^2 a^3 / (G M)$.
- Orbital energy: $E = -G M m / (2 a)$.
