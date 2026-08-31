***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: integral-calculus
courseName: Integral Calculus
moduleId: integral-calculus-module-2
moduleName: Definite Integrals and Applications
lessonId: integral-calculus-m2-l2
lessonName: Area Between Curves and Applications to Physics
lessonNumber: 5
moduleNumber: 2
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - integral-calculus-m2-l1
learningObjectives:
  - Compute the area between two curves by integrating their difference.
  - Apply the integral to compute displacement, work, and energy storage.
  - Choose the integration variable and limits appropriate to the geometry or physics.
concepts:
  - Area between curves
  - Displacement as a definite integral
  - Work as a definite integral
  - Energy stored in a spring
  - Order of limits and sign
tags:
  - mathematics
  - calculus
  - definite-integral
  - applications
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Area Between Curves and Applications to Physics

## Overview

The definite integral is the workhorse of physics because it converts a "rate" into a "total". This lesson shows three families of applications: (1) the area between two curves in the plane, (2) the displacement of a particle from a velocity-time graph, and (3) the work done by a variable force along a path. Each application is a definite integral; the art is in choosing the integration variable, the limits, and (in the case of areas) the integrand. The lesson emphasises the geometry behind the formulas and the physical units that confirm the result.

## Learning Path

- **What you should already know**: the definite integral as a signed area (Lesson m2-l1); the antiderivative rules from Module 1; the basic kinematics of constant and non-constant acceleration.
- **What this lesson adds**: the area between two curves; the geometric interpretation of velocity-time and force-distance graphs; the work-energy theorem in integral form.
- **What later lessons this will unlock**: average value and the mean value theorem in Lesson m2-l3; integration by parts in Module 3; the use of definite integrals in physics courses throughout the programme.

## Core Explanation

### Area between two curves

The area between two curves $y = f(x)$ and $y = g(x)$ from $x = a$ to $x = b$, where $f(x) \ge g(x)$ on $[a, b]$, is

$$A = \int_a^b [f(x) - g(x)]\, dx.$$

The integrand is the vertical distance between the two curves at each $x$; the integral sums (integrates) these distances across the interval.

**If the curves cross** in the interval, the order of $f$ and $g$ switches at the crossing points, and the area is the sum of the integrals over the subintervals where each ordering holds:

$$A = \int_a^{x_1} [f - g]\, dx + \int_{x_1}^{x_2} [g - f]\, dx + \ldots = \int_a^b |f(x) - g(x)|\, dx.$$

The absolute value is the safe form: it guarantees a non-negative area regardless of the ordering of $f$ and $g$. In practice, it is usually easier to find the crossing points (by setting $f(x) = g(x)$) and split the integral at those points.

**Symmetry.** The integrand is sometimes an even or odd function on a symmetric interval, simplifying the calculation. For example, the area between $y = x$ and $y = x^3$ from $-1$ to $1$ is $2 \int_0^1 (x - x^3)\, dx$ (the integrand is odd, so the negative-$x$ contribution equals the positive-$x$ contribution).

### Setting up the area integral

The standard procedure is:

1. **Sketch the region.** A rough sketch identifies which curve is on top, where they cross, and the relevant limits.
2. **Find intersection points.** Solve $f(x) = g(x)$ for $x$.
3. **Choose the integration variable.** Use $x$ if the region is described naturally as a function of $x$ (vertical strips); use $y$ if it is described naturally as a function of $y$ (horizontal strips). The choice depends on which description is simpler.
4. **Integrate the difference** $f - g$ over the limits.

For some regions (e.g. a circle), the $y$-description is much simpler than the $x$-description. A useful rule of thumb: integrate with respect to $x$ if the region's left and right boundaries are functions of $x$; integrate with respect to $y$ if the top and bottom boundaries are functions of $y$.

### Areas in polar coordinates

For a region described in polar coordinates by $r = f(\theta)$ from $\theta = \alpha$ to $\theta = \beta$, the area is

$$A = \frac{1}{2} \int_\alpha^\beta f(\theta)^2\, d\theta.$$

The integrand is $r^2/2$ (the area of a sector of angle $d\theta$ and radius $r$). The formula is the basis of computing the areas of circles (a circle of radius $R$: $A = \int_0^{2\pi} R^2/2 d\theta = \pi R^2$), cardioids, and other polar curves.

### Displacement from velocity

A particle moving along a straight line with velocity $v(t)$ has displacement over $[t_1, t_2]$:

$$\Delta x = \int_{t_1}^{t_2} v(t)\, dt.$$

The integral is the signed area under the velocity-time graph. If the velocity is positive throughout, the displacement equals the distance travelled; if the velocity changes sign, the displacement is the net area (positive minus negative), while the distance is the total area (always positive).

The result connects directly to the antiderivative interpretation: $x(t_2) - x(t_1) = \int_{t_1}^{t_2} v(t)\, dt$, which is just the net change theorem applied to position.

### Distance vs. displacement

The **distance** travelled is $\int_{t_1}^{t_2} |v(t)|\, dt$, the integral of the absolute value of the velocity. Distance is always non-negative; displacement can be positive, negative, or zero. For motion in a fixed direction (no backtracking), the distance equals the displacement. For motion with backtracking, the distance exceeds the displacement.

### Work from a variable force

When a force $F(x)$ acts on a particle along a straight line from $x = a$ to $x = b$, the work done is

$$W = \int_a^b F(x)\, dx.$$

The integrand is the force at each position; the integral is the total work, the area under the force-position graph. Units: force in newtons, distance in metres, work in joules.

**Spring (Hooke's law).** The force exerted by an ideal spring is $F(x) = -k x$, where $x$ is the displacement from the natural length. The work done by the spring as it is compressed (or stretched) from $x = 0$ to $x = x_0$ is

$$W = \int_0^{x_0} (-k x)\, dx = -\frac{k x_0^2}{2}.$$

The negative sign means the spring does negative work on the agent compressing it (the agent does positive work on the spring). The magnitude of the work is the elastic potential energy stored in the spring: $U = k x_0^2/2$.

**Gravity.** Near the earth's surface, the gravitational force is $F = -m g$ (taking up as positive). The work done by gravity as an object falls from $h_1$ to $h_2$ is

$$W = \int_{h_1}^{h_2} (-m g)\, dx = -m g (h_2 - h_1) = m g (h_1 - h_2),$$

which is positive when the object falls ($h_2 < h_1$). The gravitational potential energy is $U = m g h$, with the change $\Delta U = -W$.

### Work-energy theorem

The work done by the net force on a particle equals the change in its kinetic energy:

$$W_\text{net} = \int_a^b F_\text{net}(x)\, dx = \frac{1}{2} m v_b^2 - \frac{1}{2} m v_a^2 = \Delta K.$$

This is the integral form of the work-energy theorem; it is equivalent to Newton's second law but expressed in terms of energy rather than force. The theorem is the foundation of the energy methods in classical mechanics.

### Other definite-integral applications

- **Charge from current**: $Q = \int_a^b I(t)\, dt$. The total charge that flows through a circuit between two times.
- **Distance from speed**: $d = \int_a^b |v(t)|\, dt$. Same as distance from velocity, but with absolute value.
- **Average power**: $\bar{P} = \frac{1}{b - a} \int_a^b P(t)\, dt$. The mean value of the integrand (covered in Lesson m2-l3).
- **Heat from specific heat**: $Q = \int_{T_1}^{T_2} m c(T)\, dT$. The heat required to change the temperature of a substance with temperature-dependent specific heat.
- **Electric field from potential**: $V(b) - V(a) = -\int_a^b E(x)\, dx$. The integral relation between field and potential.

### Checking units

The unit check is a quick way to catch errors in physics integrals. If the integrand has units of force (N) and the variable has units of length (m), the integral has units of N·m = J, which is the correct unit for work. If the integrand has units of current (A) and the variable has units of time (s), the integral has units of A·s = C, which is the correct unit for charge. Units must be consistent throughout the calculation.

### Symmetry and shortcuts

Several applications of definite integrals have symmetry-based shortcuts:

- **Even integrand on symmetric interval**: $\int_{-a}^a f(x)\, dx = 2 \int_0^a f(x)\, dx$ if $f$ is even.
- **Odd integrand on symmetric interval**: $\int_{-a}^a f(x)\, dx = 0$ if $f$ is odd.
- **Periodicity**: $\int_0^{2\pi} \sin^2 x\, dx = \pi$ (one period).

These shortcuts save algebra and reduce the chance of sign errors.

## Key Ideas

- Area between two curves: $\int_a^b |f(x) - g(x)|\, dx$, split at intersection points.
- Displacement: $\int v(t)\, dt$; distance: $\int |v(t)|\, dt$.
- Work: $\int F(x)\, dx$.
- Hooke's law: $F = -k x$, elastic energy $U = k x^2/2$.
- Gravity: $F = -m g$, potential energy $U = m g h$.
- Work-energy theorem: $W_\text{net} = \Delta K$.
- Unit check is a reliable diagnostic.

## Worked Examples

### Example 1 — Area between a line and a parabola

Find the area between $y = x$ and $y = x^2$ on the interval $[0, 1]$.

**Solution.** The curves intersect at $x = 0$ and $x = 1$. On $[0, 1]$, $x \ge x^2$, so $f - g = x - x^2$. The area is

$$A = \int_0^1 (x - x^2)\, dx = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}.$$

### Example 2 — Displacement from velocity

A particle has velocity $v(t) = 2 t - 4$ m/s for $0 \le t \le 6$ s. Find (a) the displacement and (b) the distance travelled.

**Solution.**

(a) Displacement: $\Delta x = \int_0^6 (2 t - 4)\, dt = [t^2 - 4 t]_0^6 = (36 - 24) - 0 = 12$ m.

(b) Distance: the velocity is negative for $0 \le t < 2$ and positive for $2 < t \le 6$. So

$$d = \int_0^2 |2 t - 4|\, dt + \int_2^6 |2 t - 4|\, dt = \int_0^2 (4 - 2 t)\, dt + \int_2^6 (2 t - 4)\, dt.$$

Compute: $\int_0^2 (4 - 2 t)\, dt = [4 t - t^2]_0^2 = 8 - 4 = 4$ m. $\int_2^6 (2 t - 4)\, dt = [t^2 - 4 t]_2^6 = (36 - 24) - (4 - 8) = 12 - (-4) = 16$ m. So $d = 4 + 16 = 20$ m.

The particle moves backwards for 4 m, then forwards for 16 m, ending up 12 m from where it started. ✓

### Example 3 — Work done by a spring

A spring with $k = 200$ N/m is compressed by 0.1 m from its natural length. How much work is done on the spring? How much energy is stored?

**Solution.** The force exerted by an external agent to compress the spring is $F = k x = 200 x$ (in N, with $x$ in m). The work done by the external agent is

$$W = \int_0^{0.1} 200 x\, dx = \left[100 x^2\right]_0^{0.1} = 100 \times 0.01 = 1 \text{ J}.$$

The energy stored in the spring is $U = 1/2 k x_0^2 = 0.5 \times 200 \times 0.01 = 1$ J. ✓ (The work-energy theorem: $W = U$.)

## Common Misconceptions

- **"Area between curves = $\int (f - g)\, dx$ always."** It is $\int |f - g|\, dx$. The order of the curves matters; without absolute value, the integral gives the signed area.
- **"Displacement equals distance."** Only if the velocity does not change sign. If it does, the distance is greater than the displacement.
- **"Work is always positive."** No. A force opposing the motion does negative work. The sign of the work depends on the angle between the force and the displacement.
- **"The work done by a spring is $F \cdot d$."** Only if the force is constant. For a spring, $F$ varies with $x$, so the work is the integral $\int F\, dx$.
- **"The integral of velocity is always positive."** No. Negative velocities give negative contributions. The integral gives the net displacement, which can be positive, negative, or zero.

## Connections

- The area-between-curves formula generalises to volumes between surfaces (a triple integral) and to higher-dimensional analogues.
- The displacement and distance distinction is important in oscillatory motion, where a particle repeatedly reverses direction.
- The work-energy theorem is the starting point of Lagrangian and Hamiltonian mechanics, treated in advanced courses.
- The Hooke's law work calculation is the basis of the elastic energy in materials science, molecular vibration, and many other contexts.
- The definite integral is also the workhorse of probability (expectation = integral of $x$ times the density), which appears in the astrophysics minor.

## Quick Check

1. Find the area between $y = 1$ and $y = x^2$ on $[0, 1]$.
2. A particle has $v(t) = t^2 - 1$ m/s for $0 \le t \le 2$ s. Find the displacement and the distance.
3. A $5$ kg object is lifted from the ground to a height of $10$ m at constant speed. How much work is done?
4. A spring with $k = 100$ N/m is stretched from $0.05$ m to $0.10$ m. Find the work done on the spring.
5. State the work-energy theorem in words and in integral form.

## Takeaway

- Area between curves: $\int |f - g|\, dx$, split at intersection points.
- Displacement: $\int v\, dt$; distance: $\int |v|\, dt$.
- Work: $\int F\, dx$.
- Hooke's law: $F = -k x$, $U = k x^2/2$.
- Gravity: $F = -m g$, $U = m g h$.
- The work-energy theorem is the integral form of Newton's second law.
