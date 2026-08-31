***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: mechanics
courseName: Mechanics
moduleId: mechanics-module-2
moduleName: Kinematics and Dynamics
lessonId: mechanics-m2-l2
lessonName: Projectile and Circular Motion
lessonNumber: 5
moduleNumber: 2
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - mechanics-m2-l1
learningObjectives:
  - Set up and solve the projectile motion equations.
  - Identify the trajectory, range, time of flight, and maximum height of a projectile.
  - Describe uniform circular motion and compute the centripetal acceleration.
  - Distinguish tangential and centripetal components of acceleration.
concepts:
  - Projectile motion
  - Range
  - Maximum height
  - Time of flight
  - Uniform circular motion
  - Centripetal acceleration
  - Tangential acceleration
tags:
  - physics
  - mechanics
  - projectile
  - circular-motion
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Projectile and Circular Motion

## Overview
Two pieces of kinematics deserve their own lesson because they occur everywhere: projectile motion (constant downward acceleration under gravity, with the horizontal component unaffected) and uniform circular motion (constant speed, but constantly turning, so the velocity vector changes). Both reduce to the vector machinery of the previous lesson plus a careful choice of components.

## Learning Path
- What you should already know: vector components, constant-acceleration formulas, basic trigonometry.
- What this lesson adds: a complete projectile toolkit, plus the centripetal-acceleration formula and its consequences.
- What it unlocks: orbital motion in *Astrophysics II*, the motion of charges in magnetic fields in *Electricity and Magnetism*, and rotational dynamics later in this course.

## Core Explanation
**Projectile motion.** Set up axes with $x$ horizontal and $y$ upward. Initial velocity $\vec{v}_0$ has components $v_0 \cos\theta$ horizontally and $v_0 \sin\theta$ vertically. Acceleration is $\vec{a} = -g\,\hat{j}$ with $g$ constant (assuming launch and landing are at similar heights and air resistance is negligible).

The components evolve independently:

$$x(t) = (v_0 \cos\theta)\, t, \qquad y(t) = (v_0 \sin\theta)\, t - \tfrac{1}{2} g t^2.$$

The time of flight back to the launch height is found by setting $y = 0$ (other than $t = 0$):

$$T = \frac{2 v_0 \sin\theta}{g}.$$

The range is

$$R = v_0 \cos\theta \cdot T = \frac{v_0^2 \sin 2\theta}{g}.$$

Maximum height is $H = v_0^2 \sin^2 \theta / (2 g)$. The trajectory $y(x)$ is a parabola. Note that the range is maximised at $\theta = 45°$ for a fixed speed on level ground, and that complementary launch angles $\theta$ and $90° - \theta$ give the same range but different times of flight.

**Uniform circular motion.** A particle moves at constant speed $v$ on a circle of radius $r$. Even though $|\vec{v}|$ is constant, the *direction* of $\vec{v}$ changes continuously, so the particle *is* accelerating. The acceleration is purely radial, pointing toward the centre:

$$a_c = \frac{v^2}{r} = \omega^2 r,$$

where $\omega = v/r$ is the angular speed in radians per second. The period of the motion is $T = 2\pi r / v = 2\pi / \omega$. The frequency in revolutions per second is $f = 1/T$, and $\omega = 2\pi f$.

**Tangential and normal components of acceleration.** For motion along any smooth curve, decompose the acceleration along the tangent and the principal normal:

$$\vec{a} = a_t\,\hat{t} + a_n\,\hat{n}.$$

The tangential component $a_t = dv/dt$ changes the speed; the normal component $a_n = v^2 / \rho$ changes the direction, where $\rho$ is the local radius of curvature. For uniform circular motion, $a_t = 0$ and $a_n = v^2 / r$. For motion in a straight line, $a_n = 0$.

**Apparent forces on a turn.** In the inertial frame, a particle on a curve requires a net inward (centripetal) force $m v^2 / r$ to keep it turning. In the rotating frame of a car, the driver feels a "centrifugal" pseudo force outward. Same physics, different frames.

## Key Ideas
- Projectile: $x = (v_0 \cos\theta) t$, $y = (v_0 \sin\theta) t - \tfrac{1}{2} g t^2$.
- Range $R = v_0^2 \sin 2\theta / g$, max range at $45°$ on level ground.
- Centripetal acceleration: $a_c = v^2 / r = \omega^2 r$, directed to the centre.
- General acceleration in curvilinear motion: $a_t$ (changes speed) plus $a_n = v^2/\rho$ (changes direction).
- Period $T = 2\pi r / v$, frequency $f = 1/T$, $\omega = 2\pi f$.

## Worked Examples
**Example 1 — Kicking a football.** A football is kicked at $25\text{ m/s}$ at $40°$ above the horizontal. Find the time of flight, maximum height, and range.
Time of flight: $T = 2 v_0 \sin\theta / g = 2 \times 25 \times \sin 40° / 9.8 \approx 50 \times 0.643 / 9.8 \approx 3.28\text{ s}$.
Maximum height: $H = v_0^2 \sin^2 \theta / (2 g) = 625 \times 0.413 / 19.6 \approx 13.18\text{ m}$.
Range: $R = v_0^2 \sin 2\theta / g = 625 \times \sin 80° / 9.8 \approx 625 \times 0.985 / 9.8 \approx 62.8\text{ m}$.

**Example 2 — Car on a curve.** A $1200\text{ kg}$ car rounds a flat curve of radius $80\text{ m}$ at $20\text{ m/s}$. What is the centripetal force, and what is the minimum coefficient of static friction?
Centripetal force: $F_c = m v^2 / r = 1200 \times 400 / 80 = 6000\text{ N}$. On a flat curve, the friction force supplies this. Required $\mu_s$ satisfies $\mu_s m g = F_c$, so $\mu_s = F_c / (m g) = 6000 / (1200 \times 9.8) \approx 0.51$.

## Common Misconceptions
- **"The force on a particle in circular motion is outward."** In an inertial frame, the net force is *inward* (centripetal). The "centrifugal" force only appears in a rotating frame and is a pseudo force.
- **"Heavier projectiles fall faster."** With no air resistance, all projectiles have $a_y = -g$ regardless of mass. Air resistance is what makes a feather fall differently from a stone.
- **"Maximum range is at $45°$ for any launch configuration."** Only on level ground and with no air resistance. Uneven launch/landing heights or significant drag change the optimal angle.
- **"If speed is constant, the acceleration is zero."** No. Acceleration is the rate of change of the velocity *vector*. Turning the velocity vector is acceleration.

## Connections
The centripetal-acceleration formula $a_c = v^2 / r$ reappears in *Astrophysics II* for orbital motion (with $r$ the orbital radius) and in *Electricity and Magnetism* for a charged particle moving in a magnetic field (cyclotron motion). The independence of horizontal and vertical motions is also the conceptual basis for the separation of variables in *Differential Equations*.

## Quick Check
1. A ball is thrown horizontally at $15\text{ m/s}$ from a $20\text{ m}$ cliff. How long is it in the air, and how far from the base does it land?
2. A projectile is launched at $60°$ with $v_0 = 30\text{ m/s}$. Find its maximum height and time of flight.
3. Show that the range formula $R = v_0^2 \sin 2\theta / g$ is maximised at $\theta = 45°$.
4. A $0.5\text{ kg}$ mass moves at $4\text{ m/s}$ on a circle of radius $1.5\text{ m}$. Find the centripetal force on it.
5. A car goes around a flat circular track at constant speed. Is its acceleration zero? Explain.

## Takeaway
- Projectile motion is two independent 1D motions glued by time.
- Centripetal acceleration $a_c = v^2/r$ is the price of changing direction at constant speed.
- Decompose acceleration into tangential (changes speed) and normal (changes direction) parts.
- Apparent "outward" forces in a rotating frame are pseudo forces, not real interactions.
