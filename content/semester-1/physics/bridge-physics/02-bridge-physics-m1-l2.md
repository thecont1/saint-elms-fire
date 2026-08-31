***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: bridge-physics
courseName: Bridge Course for Physics
moduleId: bridge-physics-module-1
moduleName: Foundations and Mathematical Refresh
lessonId: bridge-physics-m1-l2
lessonName: Vectors, Algebra and Graph Reading
lessonNumber: 2
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 35
releaseOrder: 2
prerequisites:
  - bridge-physics-m1-l1
learningObjectives:
  - Add and subtract vectors graphically and analytically; compute scalar and vector products.
  - Solve linear and quadratic equations, manipulate exponentials and logarithms.
  - Read and interpret graphs of linear, quadratic, exponential, and trigonometric functions.
concepts:
  - Vector components
  - Dot product
  - Cross product
  - Linear and quadratic equations
  - Logarithms and exponentials
  - Graph interpretation
tags:
  - physics
  - foundations
  - algebra
  - vectors
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Vectors, Algebra and Graph Reading

## Overview

This lesson is the second stop in the Bridge Course. It refreshes three tools that you will use in every physics class from Mechanics onwards: vectors, the algebra of elementary functions, and the interpretation of graphs. The goal is not to introduce new mathematics but to give you a fluent, intuitive command of the operations you already know, with the specific physics contexts (forces, velocities, fields) in mind. After this lesson you should be able to handle the algebra of the next two Bridge lessons and the early Mechanics lessons without re-learning elementary mathematics.

## Learning Path

- **What you should already know**: arithmetic, basic algebra, the geometry of right triangles, the Cartesian coordinate system.
- **What this lesson adds**: confident vector arithmetic (addition, components, dot and cross products); fluency with linear and quadratic equations, exponentials, logarithms, and trig; the habit of reading graphs as relations between quantities.
- **What later lessons this will unlock**: the calculus refresh in Lesson m1-l3; the kinematic equations in Mechanics; the laws of motion in Mechanics; the rest of the physics sequence.

## Core Explanation

### Vectors

A **vector** is a quantity with both a magnitude and a direction. Examples in physics: displacement, velocity, acceleration, force, momentum, electric and magnetic fields, electric current density. A vector in three-dimensional Cartesian coordinates is written

$$\vec{A} = (A_x, A_y, A_z) = A_x \hat{x} + A_y \hat{y} + A_z \hat{z},$$

where $\hat{x}, \hat{y}, \hat{z}$ are the unit vectors along the three coordinate axes. The **magnitude** is

$$|\vec{A}| = \sqrt{A_x^2 + A_y^2 + A_z^2}.$$

**Addition** is component-wise: $\vec{A} + \vec{B} = (A_x + B_x, A_y + B_y, A_z + B_z)$. Geometrically, the sum is the diagonal of the parallelogram formed by $\vec{A}$ and $\vec{B}$ (the "tip-to-tail" rule).

**Scalar (dot) product**:

$$\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z = |\vec{A}||\vec{B}|\cos\theta,$$

where $\theta$ is the angle between the vectors. The dot product is a scalar (no direction). It is positive when the vectors are aligned, zero when they are perpendicular, and negative when they are anti-aligned. The dot product is the basis of work ($W = \vec{F} \cdot \vec{d}$), power ($P = \vec{F} \cdot \vec{v}$), and the projection of one vector onto another.

**Vector (cross) product**:

$$\vec{A} \times \vec{B} = (A_y B_z - A_z B_y, A_z B_x - A_x B_z, A_x B_y - A_y B_x) = |\vec{A}||\vec{B}|\sin\theta\, \hat{n},$$

where $\hat{n}$ is the unit vector perpendicular to both $\vec{A}$ and $\vec{B}$ in the right-hand sense. The cross product is a vector. It is zero when the vectors are parallel and maximum when they are perpendicular. The cross product is the basis of torque ($\vec{\tau} = \vec{r} \times \vec{F}$), angular momentum ($\vec{L} = \vec{r} \times \vec{p}$), and the Lorentz force ($\vec{F} = q \vec{v} \times \vec{B}$).

**Graphical addition** uses the parallelogram or tip-to-tail rule. For two vectors, the parallelogram is constructed by translating $\vec{B}$ so its tail is at the tip of $\vec{A}$; the sum is the vector from the tail of $\vec{A}$ to the tip of the translated $\vec{B}$. For more than two, chain the vectors head-to-tail; the sum is the closing vector.

### Coordinate systems

The Cartesian system is the default. The polar system $(r, \theta)$ is convenient for central problems: $x = r \cos\theta$, $y = r \sin\theta$. The cylindrical system $(r, \theta, z)$ adds $z$. The spherical system $(r, \theta, \phi)$ is natural for central-force problems in three dimensions.

In two dimensions, the unit vectors in polar coordinates are $\hat{r}$ (radially outward) and $\hat{\theta}$ (perpendicular to $\hat{r}$ in the direction of increasing $\theta$). They are not constants; $\hat{r}$ and $\hat{\theta}$ rotate as the position changes. This is the source of the centripetal-acceleration term in circular motion.

### Linear equations

A linear equation in one variable has the form $a x + b = c$ with $a \ne 0$. Solution: $x = (c - b)/a$. In two variables, $a x + b y = c$ is a line in the $(x, y)$ plane; the slope is $-a/b$ and the intercept is $c/b$.

Linear equations in physics include $v = u + a t$ (velocity under constant acceleration), $V = IR$ (Ohm's law), $F = k x$ (Hooke's law), and $P = IV$ (electrical power).

### Quadratic equations

A quadratic equation has the form $a x^2 + b x + c = 0$ with $a \ne 0$. The solutions are

$$x = \frac{-b \pm \sqrt{b^2 - 4 a c}}{2 a}.$$

The discriminant $\Delta = b^2 - 4 a c$ determines the nature of the roots: two real roots if $\Delta > 0$, one real root if $\Delta = 0$, two complex roots if $\Delta < 0$.

In physics, quadratics arise in projectile motion (range from initial speed and launch angle), in the energy conservation of a harmonic oscillator, and in solving for the time of flight in kinematics.

### Exponentials and logarithms

The exponential function $e^x$ (or $\exp(x)$) is its own derivative and integral. It satisfies $e^x e^y = e^{x+y}$, $e^x / e^y = e^{x-y}$, $(e^x)^y = e^{xy}$. The natural logarithm $\ln x$ is its inverse: $\ln(e^x) = x$, $e^{\ln x} = x$.

Exponentials in physics: radioactive decay ($N(t) = N_0 e^{-\lambda t}$), RC discharge ($V(t) = V_0 e^{-t/RC}$), atmospheric pressure ($P = P_0 e^{-h/H}$), exponential growth. Logarithms appear whenever exponentials are inverted (decay constants, time constants, decibels).

### Trigonometric functions

The functions $\sin\theta$, $\cos\theta$, $\tan\theta$ relate the angles and sides of a right triangle. The Pythagorean identity $\sin^2\theta + \cos^2\theta = 1$ is the workhorse identity. The addition formulas $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$ (and analogues) are needed for wave interference and for rotating frames.

For small angles (in radians), $\sin\theta \approx \theta$ and $\cos\theta \approx 1 - \theta^2/2$ to first and second order respectively. This is the small-angle approximation used in the simple pendulum, in optics (paraxial rays), and in many Taylor expansions.

### Reading graphs

A graph of $y$ vs. $x$ shows the relationship between two variables. The slope at any point is $dy/dx$ (the rate of change), the area under the curve is $\int y\, dx$ (the accumulated quantity), and the intercept is the value of $y$ when $x = 0$ (or vice versa).

Common graph shapes in physics:
- **Straight line through origin**: $y = k x$ (linear relationship, like Ohm's law or Hooke's law).
- **Parabola**: $y = a x^2$ (free-fall distance, kinetic energy of a particle).
- **Exponential growth**: $y = y_0 e^{k t}$ (chain reactions in nuclear physics, capacitor charging).
- **Exponential decay**: $y = y_0 e^{-k t}$ (radioactive decay, RC discharge).
- **Sine wave**: $y = A \sin(\omega t + \phi)$ (oscillations, waves, AC signals).
- **Hyperbola**: $y = a/x$ (inverse-square law: gravity, electric force, light intensity).

The habit of sketching a graph before computing is one of the best ways to avoid silly algebraic errors. A correct calculation should produce a graph that makes physical sense; a wrong one often produces a graph that obviously does not.

## Key Ideas

- Vectors have magnitude and direction; addition, dot product, and cross product are the three core operations.
- The right-hand rule fixes the direction of the cross product.
- Linear, quadratic, exponential, and trigonometric functions are the workhorses of physics.
- Graphs encode relationships; slope, area, and intercept are the most useful features.
- Small-angle approximation: $\sin\theta \approx \theta$ and $\cos\theta \approx 1$ for $\theta \ll 1$ in radians.
- Algebraic fluency is built by doing, not by reading.

## Worked Examples

### Example 1 — Vector addition and dot product

Given $\vec{A} = (3, 4, 0)$ and $\vec{B} = (1, 2, 2)$. Compute $\vec{A} + \vec{B}$, $\vec{A} \cdot \vec{B}$, and $\vec{A} \times \vec{B}$.

**Solution.**

$\vec{A} + \vec{B} = (4, 6, 2)$.

$\vec{A} \cdot \vec{B} = 3 \times 1 + 4 \times 2 + 0 \times 2 = 3 + 8 + 0 = 11$.

$\vec{A} \times \vec{B} = (4 \times 2 - 0 \times 2, 0 \times 1 - 3 \times 2, 3 \times 2 - 4 \times 1) = (8, -6, 2)$.

Check: $|\vec{A}| = 5$, $|\vec{B}| = 3$, $\vec{A} \cdot \vec{B} = 5 \times 3 \cos\theta = 15 \cos\theta$, so $\cos\theta = 11/15$, $\theta \approx 42.8°$. ✓

### Example 2 — Solving a quadratic

A ball is thrown vertically with initial speed $20$ m/s from a height of $5$ m. Find the time when it hits the ground ($g = 9.8\,\text{m/s}^2$).

**Solution.** The height is $y(t) = 5 + 20 t - \frac{1}{2}(9.8) t^2 = 5 + 20 t - 4.9 t^2$. Set $y = 0$:

$$4.9 t^2 - 20 t - 5 = 0.$$

Quadratic formula: $t = \frac{20 \pm \sqrt{400 + 98}}{9.8} = \frac{20 \pm \sqrt{498}}{9.8} = \frac{20 \pm 22.32}{9.8}$.

The positive root is $t = 4.32$ s. (The negative root is unphysical.) ✓

### Example 3 — Reading a position-time graph

A position-time graph shows a straight line from $(0, 0)$ to $(5, 20)$ followed by a horizontal line at $x = 20$ for the next 5 seconds. Describe the motion.

**Solution.** From $t = 0$ to $t = 5$ s, the position changes from 0 to 20 m linearly. The velocity is constant at $20/5 = 4$ m/s. From $t = 5$ to $t = 10$ s, the position is constant at 20 m. The velocity is zero (the object is at rest). The graph describes uniform motion followed by a period of rest.

## Common Misconceptions

- **"The dot product is a vector."** It is a scalar. The notation $\vec{A} \cdot \vec{B}$ (with the dot) is a strong hint.
- **"The cross product is commutative."** $\vec{A} \times \vec{B} = -(\vec{B} \times \vec{A})$. The order matters; reversing it flips the direction.
- **"$\sin(A + B) = \sin A + \sin B$."** No. $\sin(A + B) = \sin A \cos B + \cos A \sin B$. Addition formulas are non-trivial.
- **"Logs are hard."** They are just a different way of writing exponentials. The same relationships hold: $\log(ab) = \log a + \log b$, $\log(a/b) = \log a - \log b$, $\log(a^n) = n \log a$.
- **"The graph of $y = 1/x$ does not pass through the origin."** Correct — it is undefined at $x = 0$. This is a feature, not a bug: the inverse-square law has no value at zero distance.

## Connections

- Vectors are the language of mechanics, electromagnetism, and modern physics. The dot and cross products appear in every later physics course.
- Quadratic equations appear in projectile motion, in the energy of a harmonic oscillator, and in solving for the time of flight.
- Exponentials and logarithms connect to radioactive decay, RC circuits, and any growth/decay process.
- Graphs are the universal diagnostic: a sketch of the expected shape is the first step of most problems.
- The small-angle approximation is the gateway to the simple pendulum, the thin lens, and the paraxial optics.

## Quick Check

1. Compute $|\vec{v}|$ and the angle with the $x$-axis for $\vec{v} = (3, 4, 0)$.
2. If $\vec{F} = (2, 0, 0)$ N and $\vec{d} = (0, 0, 5)$ m, compute the work $W = \vec{F} \cdot \vec{d}$.
3. Solve $3 x^2 - 12 x + 9 = 0$.
4. If a capacitor discharges as $V(t) = 10\, e^{-t/RC}$ with $RC = 1$ s, what is $V$ at $t = 3$ s?
5. A position-time graph is a horizontal line at $x = 5$. What is the velocity?

## Takeaway

- Vectors are central; component form, dot product, and cross product are the three operations.
- Linear, quadratic, exponential, and trigonometric functions are the workhorses of physics.
- Graphs are diagnostic; sketch first, compute second.
- The small-angle approximation, the right-hand rule, and the unit-circle identities are the most reused pieces of elementary mathematics.
- Algebraic fluency comes from practice; this lesson is a refresh, not a substitute.
