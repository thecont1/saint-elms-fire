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
lessonId: astrophysics-ii-m1-l2
lessonName: Two-Body Problem and the Gravitational Two-Body Problem
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - astrophysics-ii-m1-l1
learningObjectives:
  - Reduce the two-body problem to a one-body problem via centre of mass.
  - Define the reduced mass and explain its role.
  - Describe bound and unbound orbits, scattering states.
  - Use conservation laws to determine orbit geometry from initial conditions.
concepts:
  - Centre-of-mass frame
  - Reduced mass
  - One-body equivalent
  - Bound orbit
  - Unbound orbit (scattering)
  - Orbital elements from initial conditions
tags:
  - astrophysics
  - celestial-mechanics
  - two-body
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Two-Body Problem and the Gravitational Two-Body Problem

## Overview
Most astronomical "two-body" situations — a planet orbiting a star, a satellite orbiting Earth, a star in a binary — are not literally one body in a fixed central field. Both bodies move around their common centre of mass. The *two-body problem* in celestial mechanics is the exact solution of this system: two point masses interacting through gravity. The solution reduces to a one-body problem via the centre-of-mass frame and the reduced mass, giving the same conic-section orbits of Kepler's laws.

## Learning Path
- What you should already know: Newton's laws, conservation of momentum and energy, conic sections.
- What this lesson adds: the exact two-body solution and how to apply it to real systems.
- What it unlocks: binary star systems, the patched-conic approximation for interplanetary travel, and the three-body problem (where the two-body solution is the building block).

## Core Explanation
**The two-body problem.** Two point masses $m_1, m_2$ with positions $\vec{r}_1, \vec{r}_2$ interacting only through their mutual gravitational attraction. Newton's second law for each:

$$m_1 \ddot{\vec{r}}_1 = -\frac{G m_1 m_2}{r^3} (\vec{r}_1 - \vec{r}_2), \quad m_2 \ddot{\vec{r}}_2 = -\frac{G m_1 m_2}{r^3} (\vec{r}_2 - \vec{r}_1),$$

where $\vec{r} = \vec{r}_1 - \vec{r}_2$ and $r = |\vec{r}|$. These are coupled.

**Centre of mass.** Define the centre-of-mass position $\vec{R} = (m_1 \vec{r}_1 + m_2 \vec{r}_2)/(m_1 + m_2)$. Adding the two equations of motion gives $M \ddot{\vec{R}} = 0$ (where $M = m_1 + m_2$), so the centre of mass moves at constant velocity. In the COM frame ($\vec{R} = 0$), the two bodies orbit the common centre.

**Relative motion.** Subtracting the second equation from the first (after dividing by $m_1$ and $m_2$ respectively) gives the equation for $\vec{r} = \vec{r}_1 - \vec{r}_2$:

$$\ddot{\vec{r}} = -\frac{G (m_1 + m_2)}{r^3} \vec{r}.$$

This is *the same form* as the one-body Kepler problem — a particle in a central inverse-square force — with the central mass replaced by $m_1 + m_2$.

**Reduced mass.** Equivalently, write the relative-coordinate equation as $\mu \ddot{\vec{r}} = -G m_1 m_2 \vec{r}/r^3$ where $\mu = m_1 m_2 / (m_1 + m_2)$ is the *reduced mass*. This is the equation of a fictitious particle of mass $\mu$ in the gravitational field of a fixed mass $m_1 + m_2$ at the origin.

**Why the reduced mass.** The kinetic energy of the system is $T = \tfrac{1}{2}(m_1 \dot{\vec{r}}_1^2 + m_2 \dot{\vec{r}}_2^2) = \tfrac{1}{2} M \dot{\vec{R}}^2 + \tfrac{1}{2} \mu \dot{\vec{r}}^2$. The first term is the kinetic energy of the COM (often zero in the COM frame); the second is the kinetic energy of the "relative motion", with the reduced mass.

**Orbit in the COM frame.** Each body follows a similar ellipse scaled by the mass ratio: $\vec{r}_1 = -[m_2/(m_1+m_2)] \vec{r}$ and $\vec{r}_2 = [m_1/(m_1+m_2)] \vec{r}$, both with the same period. The Sun and Jupiter both orbit the COM, but since the Sun is much more massive, the Sun's orbit is small and Jupiter's is large.

**Orbital elements from initial conditions.** Given $\vec{r}$ and $\dot{\vec{r}}$ at some instant, six numbers determine the orbit: $a, e, i, \Omega, \omega, \nu$ (semi-major axis, eccentricity, inclination, longitude of ascending node, argument of perihelion, true anomaly). These are the *Keplerian orbital elements*. Conservation laws (energy, angular momentum) plus the inverse-square law fix them.

**Bound vs. unbound orbits.** $E < 0$ gives an ellipse (bound); $E = 0$ a parabola (marginal); $E > 0$ a hyperbola (unbound). A comet on a hyperbolic orbit passes through the inner Solar System once and leaves forever. A satellite in a circular orbit has $E = -G M m / (2 a)$.

**Scattering.** When an unbound body approaches a massive one, the trajectory is a hyperbola. The angle between the incoming and outgoing asymptotes is the *scattering angle*. Rutherford scattering of alpha particles by nuclei is the historical example; in astrophysics, gravitational scattering between stars is important in stellar dynamics.

**Hohmann transfer orbit.** A practical application: to move a satellite from a low circular orbit to a higher one, fire rockets to put it on an elliptical transfer orbit that is tangent to both; coast to the higher orbit; fire again to circularise. The total $\Delta v$ is the sum of the two burns.

**The three-body problem.** With three bodies, no general closed-form solution exists (a famous result by Poincaré). Special cases (Lagrange points, restricted three-body problem) admit analysis. Numerical integration is the standard tool.

## Key Ideas
- Two-body problem reduces to one-body via the centre-of-mass frame and reduced mass $\mu = m_1 m_2/(m_1+m_2)$.
- Both bodies orbit the COM, with separations scaled by the inverse mass ratio.
- Relative motion follows Kepler's laws with central mass $m_1 + m_2$.
- Bound orbits are ellipses; unbound are hyperbolae.
- Keplerian orbital elements: $a, e, i, \Omega, \omega, \nu$.

## Worked Examples
**Example 1 — Sun and Jupiter.** The Sun–Jupiter system: $M_\odot = 1.99 \times 10^{30}\text{ kg}$, $m_J = 1.90 \times 10^{27}\text{ kg}$. Reduced mass $\mu = m_J M_\odot/(m_J + M_\odot) \approx 1.90 \times 10^{27}\text{ kg}$ (very close to $m_J$). The Sun's orbital radius is $r_\odot = (m_J/M_\odot) a \approx 0.001 a$. For $a = 5.2$ AU, $r_\odot \approx 0.0052$ AU, about $778{,}000\text{ km}$ — the Sun orbits a point about a solar radius from its centre.

**Example 2 — Scattering cross section.** A comet on a hyperbolic orbit passes the Sun at perihelion distance $q = 0.5$ AU with velocity $v_\infty = 2\text{ km/s}$ (the asymptotic speed far from the Sun). Find the eccentricity.
$E = \tfrac{1}{2} m v_\infty^2 > 0$, so hyperbolic. $e = 1 + (r_p v_\infty^2)/(G M) = 1 + 0.5 \text{ AU} \times (2\text{ km/s})^2 / (G M_\odot)$. Note $1\text{ AU} = 1.5 \times 10^{11}\text{ m}$, $G M_\odot = 1.33 \times 10^{20}\text{ m}^3/\text{s}^2$. So $e = 1 + 0.5 \times 1.5 \times 10^{11} \times 4 \times 10^6 / 1.33 \times 10^{20} \approx 1 + 0.0226 = 1.023$. A very nearly parabolic hyperbolic orbit.

**Example 3 — Binary star.** A binary system has stars of masses $1.2 M_\odot$ and $0.8 M_\odot$ in a circular orbit with period $10$ days. Find the separation.
$a = (G M T^2/(4 \pi^2))^{1/3} = (6.67 \times 10^{-11} \times 2 \times 1.99 \times 10^{30} \times (864000)^2 / (4 \pi^2))^{1/3} \approx 1.4 \times 10^9\text{ m}$, about $0.009$ AU.

## Common Misconceptions
- **"Both bodies orbit a common focus."** The orbit of *each body*, in the COM frame, is an ellipse with the COM at one focus. The relative orbit is an ellipse with the centre of force at one focus.
- **"The Sun doesn't move."** It moves slightly, around the Sun–planet COM. For the Sun–Earth system, the Sun's orbit has radius about $450\text{ km}$, small but measurable.
- **"All orbits are ellipses."** No — only bound orbits. Comets and interstellar objects on hyperbolic trajectories are not ellipses.
- **"Three bodies can always be solved."** No — the three-body problem has no general closed-form solution.

## Connections
The two-body solution is the building block for every celestial mechanics calculation. The patched-conic approximation (treat a spacecraft trajectory as a sequence of two-body problems around different bodies) is the standard method for interplanetary mission design. The same reduced-mass trick is used in molecular physics (vibrations of a diatomic molecule) and in quantum mechanics (hydrogen atom).

## Quick Check
1. What is the reduced mass of a system with $m_1 = 2\text{ kg}$ and $m_2 = 3\text{ kg}$?
2. State the relation between the position of each body in the COM frame and the relative coordinate.
3. A binary has $M_1 = M_2 = M$, separation $a$. What is the orbital period?
4. Why is the orbit equation for the relative motion the same as the one-body Kepler problem?
5. State two examples where the two-body problem is exactly solvable but the three-body problem is not.

## Takeaway
- The two-body problem reduces to one body with reduced mass $\mu = m_1 m_2/(m_1+m_2)$.
- Both bodies orbit the common centre of mass, scaled by the inverse mass ratio.
- The relative orbit is a conic with central mass $m_1 + m_2$.
- Bound orbits are ellipses; unbound are hyperbolae.
- Orbital elements: $a, e, i, \Omega, \omega, \nu$.
