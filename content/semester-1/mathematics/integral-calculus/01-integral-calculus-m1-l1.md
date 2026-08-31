***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: integral-calculus
courseName: Integral Calculus
moduleId: integral-calculus-module-1
moduleName: Antiderivatives and Indefinite Integrals
lessonId: integral-calculus-m1-l1
lessonName: Antiderivatives and the Indefinite Integral
lessonNumber: 1
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 1
prerequisites:
  - differential-calculus
  - bridge-physics-m1-l3
learningObjectives:
  - Define the antiderivative of a function and identify the role of the constant of integration.
  - Verify an antiderivative by differentiation.
  - Reconstruct a function from its derivative and an initial condition.
concepts:
  - Antiderivative
  - Indefinite integral
  - Constant of integration
  - Initial value problem
  - General solution vs. particular solution
tags:
  - mathematics
  - calculus
  - integration
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Antiderivatives and the Indefinite Integral

## Overview

Differentiation and integration are inverse operations. The previous calculus course (Differential Calculus) showed how to take derivatives; this course, Integral Calculus, develops the opposite operation — finding a function whose derivative is given. The first half of this lesson defines the antiderivative and the indefinite integral, the role of the constant of integration, and the geometric interpretation. The second half works through the verification of antiderivatives and the resolution of initial value problems. The lesson is the gateway to the rest of the course: the techniques in the following lessons all amount to efficient ways to find antiderivatives, and the applications in Module 2 turn antiderivatives into physical quantities (area, work, displacement).

## Learning Path

- **What you should already know**: the rules of differentiation; the elementary derivatives of $x^n$, $\sin x$, $\cos x$, $e^x$, $\ln x$.
- **What this lesson adds**: the antiderivative; the indefinite integral; the constant of integration; initial value problems; the connection between antiderivatives and physics (velocity from acceleration, position from velocity, force from work, etc.).
- **What later lessons this will unlock**: integration rules in Lesson m1-l2, substitution in Lesson m1-l3, the definite integral and fundamental theorem in Module 2, and the physics applications in Module 2 and 3.

## Core Explanation

### The antiderivative

A function $F(x)$ is an **antiderivative** of $f(x)$ if $F'(x) = f(x)$ for every $x$ in the domain.

**Examples.** $F(x) = x^2$ is an antiderivative of $f(x) = 2x$. $F(x) = \sin x$ is an antiderivative of $f(x) = \cos x$. $F(x) = \frac{1}{3} x^3$ is an antiderivative of $f(x) = x^2$.

The antiderivative is not unique: if $F(x)$ is an antiderivative of $f(x)$, then so is $F(x) + C$ for any constant $C$, because the derivative of a constant is zero. So the set of all antiderivatives of $f$ is the family $\{F(x) + C : C \in \mathbb{R}\}$.

### The indefinite integral

The **indefinite integral** of $f(x)$ is the family of all antiderivatives, written

$$\int f(x)\, dx = F(x) + C,$$

where $F$ is any one antiderivative and $C$ is the constant of integration. The symbol $\int$ is the integral sign; $f(x)$ is the integrand; $dx$ indicates the variable of integration.

The constant of integration is essential. Two antiderivatives that differ by a constant are equally valid as indefinite integrals, but a specific physical problem (e.g. position at $t = 0$) determines a unique $C$.

### Verifying antiderivatives

To check that $F(x)$ is an antiderivative of $f(x)$, differentiate $F$ and confirm that $F'(x) = f(x)$. This is the safest way to verify integration results, and it is the basis of the fundamental theorem of calculus (covered in Module 2).

### Initial value problems

A specific antiderivative is selected by an **initial condition** $F(x_0) = y_0$. The result is a **particular solution** of the differential equation $F'(x) = f(x)$.

**Example.** The velocity of a particle is $v(t) = 2 t$ m/s. The position is the antiderivative of $v$: $x(t) = t^2 + C$. If the particle is at $x(0) = 5$ m initially, then $C = 5$, and $x(t) = t^2 + 5$ m.

Initial value problems appear in every physics context. Position from velocity, velocity from acceleration, voltage from current, charge from current, energy from power, displacement from velocity — all of these are antiderivative problems with initial conditions.

### Antiderivatives of elementary functions

| Function $f(x)$ | Antiderivative $F(x)$ |
|---|---|
| $x^n$ ($n \ne -1$) | $\frac{x^{n+1}}{n+1} + C$ |
| $1/x$ | $\ln |x| + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $a^x / \ln a + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\sec^2 x$ | $\tan x + C$ |
| $\frac{1}{\sqrt{1 - x^2}}$ | $\arcsin x + C$ |
| $\frac{1}{1 + x^2}$ | $\arctan x + C$ |

The constant of integration is included because every antiderivative family contains an arbitrary constant.

### Geometric meaning

Geometrically, the antiderivative $F(x)$ is the function whose slope at every point equals $f(x)$. If $f(x) > 0$, $F(x)$ is increasing; if $f(x) < 0$, $F(x)$ is decreasing. The graph of $F$ is the curve whose tangent slope at $x$ is $f(x)$. A family of antiderivatives is a family of parallel curves, displaced vertically by the constant $C$.

### The constant of integration and physical constants

In physics, the constant of integration is often determined by an initial condition, but it sometimes has a deeper meaning. The antiderivative of the gravitational force $-mg$ with respect to height $h$ is the potential energy $-mgh + C$, where $C$ is the arbitrary reference level for potential energy. Choosing $C = 0$ at ground level is conventional; choosing $C = 0$ at infinity (or at any other reference) is equally valid. Only differences in potential energy are physically meaningful.

Similarly, the antiderivative of acceleration $a(t)$ is velocity $v(t) = \int a(t)\, dt + C$, where $C$ is the initial velocity. The constant of integration encodes the initial condition; once it is fixed, the motion is determined.

### Existence and uniqueness

The existence and uniqueness of antiderivatives is a deep question, but in practice every continuous function on a connected domain has an antiderivative. More precisely, the antiderivative is unique up to the additive constant.

For functions with discontinuities or singularities (e.g. $1/x$ at $x = 0$), the antiderivative exists on each connected piece of the domain, with potentially different constants on each piece. This is the source of the absolute-value sign in $\int 1/x\, dx = \ln |x| + C$.

### Why antiderivatives matter

Almost every "find the function" problem in physics reduces to finding an antiderivative. The voltage across a capacitor is the antiderivative of the current. The position of an object is the antiderivative of the velocity. The displacement of a spring is the antiderivative of the velocity, and the velocity is the antiderivative of the acceleration. The energy stored in a capacitor is the antiderivative of the power, and the work done by a force is the antiderivative of the force along the path.

The next two lessons develop the techniques — power, exponential, trig, and substitution — that let you handle most antiderivatives you will meet in physics. Module 2 turns the indefinite integral into the definite integral, which computes accumulated quantities (area, work, charge). Module 3 develops more advanced techniques (integration by parts, trigonometric substitution, partial fractions) and improper integrals.

## Key Ideas

- An antiderivative of $f$ is a function $F$ with $F' = f$.
- The indefinite integral $\int f\, dx = F + C$ is the family of all antiderivatives.
- The constant of integration $C$ is fixed by an initial condition.
- An initial value problem combines $F'(x) = f(x)$ with $F(x_0) = y_0$.
- The antiderivative is geometrically the function whose slope at every point is the integrand.
- In physics, the constant of integration often corresponds to an initial value or a reference level.

## Worked Examples

### Example 1 — Find the antiderivative

Find $\int (3 x^2 + 2 x - 5) dx$.

**Solution.** Apply the rule term by term:

$$\int 3 x^2\, dx = 3 \cdot \frac{x^3}{3} = x^3,$$
$$\int 2 x\, dx = 2 \cdot \frac{x^2}{2} = x^2,$$
$$\int -5\, dx = -5 x.$$

So $\int (3 x^2 + 2 x - 5) dx = x^3 + x^2 - 5 x + C$. Check: $\frac{d}{dx}(x^3 + x^2 - 5 x) = 3 x^2 + 2 x - 5$. ✓

### Example 2 — Initial value problem

A particle has velocity $v(t) = 4 t - 3$ m/s. At $t = 0$, the position is $x(0) = 10$ m. Find $x(t)$.

**Solution.** The position is the antiderivative of the velocity:

$$x(t) = \int (4 t - 3)\, dt = 2 t^2 - 3 t + C.$$

Apply the initial condition: $x(0) = C = 10$. So $x(t) = 2 t^2 - 3 t + 10$ m. Check: $\frac{dx}{dt} = 4 t - 3 = v(t)$. ✓

### Example 3 — Constant of integration in physics

The potential energy of an object of mass $m$ at height $h$ above the ground is $U(h) = mgh + C$. What is the change in potential energy as the object rises from $h_1$ to $h_2$?

**Solution.** $\Delta U = U(h_2) - U(h_1) = mg h_2 + C - (mgh_1 + C) = mg(h_2 - h_1)$. The constant cancels. Only the difference in potential energy is physically meaningful; the absolute value depends on the arbitrary choice of reference. ✓

## Common Misconceptions

- **"The constant of integration is unimportant."** It is essential. Different $C$ values give different functions, even though their derivatives are the same. Physics problems almost always fix $C$ through an initial condition.
- **"Antiderivative and integral are different concepts."** The indefinite integral is the antiderivative family; the antiderivative is any particular member of the family. In practice the words are used interchangeably.
- **"Every continuous function has an elementary antiderivative."** No. Most continuous functions do not have antiderivatives expressible in elementary functions; $e^{x^2}$ and $\sin(x)/x$ are the standard examples. Their antiderivatives are defined in terms of integrals (e.g. the error function $\text{erf}(x) = (2/\sqrt{\pi}) \int_0^x e^{-t^2}\, dt$).
- **"You can ignore the $dx$."** The $dx$ indicates the variable of integration. It is essential when the integrand is a function of multiple variables: $\int x^2\, dx$ and $\int x^2\, dy$ are different (the latter is $x^2 y + C$).
- **"Antiderivatives are unique."** They are unique up to a constant; the indefinite integral notation makes this explicit.

## Connections

- The antiderivative is the inverse of the derivative, just as the integral is the inverse of differentiation.
- The fundamental theorem of calculus (Module 2) connects the antiderivative to the area under the curve, completing the geometric picture.
- In physics, every "find the function from its rate of change" problem is an antiderivative problem: position from velocity, velocity from acceleration, energy from power, charge from current.
- The error function and other non-elementary antiderivatives appear in statistics, heat conduction, and probability.
- The indefinite integral is the foundation of every integration technique in the rest of the course.

## Quick Check

1. Find $\int (5 x^4 - 3 x^2 + 7) dx$.
2. Verify that $F(x) = \frac{1}{4} \sin(4 x)$ is an antiderivative of $f(x) = \cos(4 x)$.
3. A particle has $a(t) = -10$ m/s². At $t = 0$, $v(0) = 30$ m/s. Find $v(t)$.
4. State why two antiderivatives of the same function differ by a constant.
5. What does the constant of integration represent in $U(h) = mgh + C$?

## Takeaway

- An antiderivative of $f$ is a function $F$ with $F' = f$.
- The indefinite integral $\int f\, dx = F + C$ is the family of all antiderivatives.
- The constant of integration is fixed by initial conditions or physical conventions.
- Antiderivatives are central to physics: position, energy, charge, voltage, displacement are all antiderivatives of their rates.
- Every continuous function has an antiderivative, but not every antiderivative is elementary.
