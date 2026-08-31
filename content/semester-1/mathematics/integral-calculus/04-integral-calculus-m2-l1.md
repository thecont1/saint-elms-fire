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
lessonId: integral-calculus-m2-l1
lessonName: The Definite Integral and the Fundamental Theorem of Calculus
lessonNumber: 4
moduleNumber: 2
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - integral-calculus-m1-l3
learningObjectives:
  - Define the definite integral as a limit of Riemann sums and recognise its geometric meaning.
  - State and apply the two parts of the fundamental theorem of calculus.
  - Evaluate definite integrals using antiderivatives.
concepts:
  - Riemann sum
  - Definite integral
  - Fundamental theorem of calculus
  - Signed area
  - Net change theorem
tags:
  - mathematics
  - calculus
  - definite-integral
  - fundamental-theorem
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# The Definite Integral and the Fundamental Theorem of Calculus

## Overview

The definite integral $\int_a^b f(x)\, dx$ generalises the indefinite integral to a specific interval: it is the signed area under the curve $y = f(x)$ between $x = a$ and $x = b$. The fundamental theorem of calculus connects the definite integral to the antiderivative, allowing the evaluation of definite integrals by finding an antiderivative and computing its change between the limits. This lesson develops the Riemann-sum definition, states both parts of the fundamental theorem, and works through examples that connect to physics (displacement, work, average power, charge). The lesson is the gateway to the applications in Lesson m2-l2 and the advanced techniques in Module 3.

## Learning Path

- **What you should already know**: the antiderivative rules from Module 1; the geometric meaning of area; the chain rule.
- **What this lesson adds**: the Riemann-sum definition of the definite integral; the fundamental theorem of calculus; the connection between antiderivatives and signed area.
- **What later lessons this will unlock**: applications to area, work, and average value in Lesson m2-l2; the mean value theorem in Lesson m2-l3; advanced techniques in Module 3.

## Core Explanation

### The Riemann sum

A **Riemann sum** approximates the area under a curve $y = f(x)$ from $x = a$ to $x = b$ by partitioning the interval into $n$ subintervals of width $\Delta x = (b - a)/n$, evaluating $f$ at a sample point $x_i^*$ in each subinterval, and summing the areas of the rectangles:

$$S_n = \sum_{i=1}^{n} f(x_i^*)\, \Delta x.$$

The choice of sample point $x_i^*$ determines the variant: left-endpoint ($x_i^* = a + (i-1) \Delta x$), right-endpoint ($x_i^* = a + i \Delta x$), or midpoint ($x_i^* = a + (i - 1/2) \Delta x$). For a continuous $f$ on $[a, b]$, all three variants converge to the same limit as $n \to \infty$.

### The definite integral

The **definite integral** of $f$ from $a$ to $b$ is the limit of the Riemann sums as the partition is refined:

$$\int_a^b f(x)\, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*)\, \Delta x.$$

For a continuous $f$, the limit exists and is independent of the choice of sample points. Geometrically, the definite integral is the signed area: positive where $f > 0$, negative where $f < 0$, zero where $f = 0$.

The integral has several important properties:
- **Linearity**: $\int_a^b [a f(x) + b g(x)]\, dx = a \int_a^b f\, dx + b \int_a^b g\, dx$.
- **Additivity over intervals**: $\int_a^c f\, dx = \int_a^b f\, dx + \int_b^c f\, dx$ for any $a \le b \le c$.
- **Reversal**: $\int_a^b f\, dx = -\int_b^a f\, dx$.
- **Bounds**: if $f \ge g$ on $[a, b]$, then $\int_a^b f\, dx \ge \int_a^b g\, dx$.

### The fundamental theorem of calculus

The fundamental theorem of calculus has two parts.

**Part 1 (derivative of an integral).** If $f$ is continuous on $[a, b]$ and $F(x) = \int_a^x f(t)\, dt$, then $F$ is differentiable on $(a, b)$ and

$$F'(x) = f(x).$$

So the derivative of the area function recovers the integrand. This connects the integral to the derivative: every continuous function has an antiderivative, given by the area function.

**Part 2 (evaluation of an integral).** If $F$ is any antiderivative of $f$ (i.e. $F' = f$), then

$$\int_a^b f(x)\, dx = F(b) - F(a).$$

The definite integral equals the change in the antiderivative between the limits. The notation $[F(x)]_a^b$ is shorthand for $F(b) - F(a)$.

Together, the two parts say: the area under the curve from $a$ to $b$ is the change in the antiderivative. The Riemann sum gives the area by adding rectangles; the antiderivative gives it by an algebraic evaluation. The two answers agree because the fundamental theorem says they must.

### Applying the fundamental theorem

To evaluate $\int_a^b f(x)\, dx$:

1. Find any antiderivative $F(x)$ of $f(x)$.
2. Compute $F(b) - F(a)$.
3. The result is a number (or expression in terms of the parameters $a$ and $b$).

**Example.** Evaluate $\int_0^2 x^2\, dx$.

Antiderivative: $F(x) = x^3/3$. Then $\int_0^2 x^2\, dx = F(2) - F(0) = 8/3 - 0 = 8/3$. The area under the parabola from $0$ to $2$ is $8/3$ square units.

### The constant of integration in definite integrals

The constant of integration cancels in the definite integral:

$$\int_a^b f(x)\, dx = [F(x) + C]_a^b = (F(b) + C) - (F(a) + C) = F(b) - F(a).$$

So the constant does not affect the definite integral, and any antiderivative can be used. This is one of the most useful properties of definite integrals.

### The net change theorem

A physical application of the fundamental theorem is the **net change theorem**: if $F'(x) = f(x)$, then the total change in $F$ over $[a, b]$ is $\int_a^b f(x)\, dx$. In physics, this is the basis of:

- Position from velocity: $x(b) - x(a) = \int_a^b v(t)\, dt$.
- Energy from power: $E(b) - E(a) = \int_a^b P(t)\, dt$.
- Charge from current: $Q(b) - Q(a) = \int_a^b I(t)\, dt$.
- Work from force: $W = \int_a^b F(x)\, dx$.

In each case, the change in a quantity equals the integral of its rate of change.

### Geometric interpretation

Geometrically, the definite integral $\int_a^b f(x)\, dx$ is the **signed area** between the graph of $f$ and the $x$-axis. The sign is important: if the curve crosses the $x$-axis, parts of the area are positive and parts are negative; the integral gives the net area, not the absolute value.

The geometric interpretation is a check on the calculation: a positive integrand on a positive interval gives a positive integral; the area is the value of the integral.

### Numerical estimates

When an antiderivative is not available in closed form, the definite integral can be estimated numerically. The simplest method is the **trapezoidal rule**:

$$\int_a^b f(x)\, dx \approx \frac{\Delta x}{2} \left[ f(x_0) + 2 f(x_1) + 2 f(x_2) + \ldots + 2 f(x_{n-1}) + f(x_n) \right],$$

where $\Delta x = (b - a)/n$ and $x_i = a + i \Delta x$. Simpson's rule (using parabolic segments) and Gauss–Legendre quadrature (using optimised nodes) are more accurate. Numerical integration is covered in detail in the Numerical Methods course in Semester 4.

### The integral as a function of the limits

A definite integral with a variable upper limit is a function:

$$F(x) = \int_a^x f(t)\, dt.$$

By the first part of the fundamental theorem, $F'(x) = f(x)$. So $F$ is the antiderivative of $f$ that vanishes at $x = a$. The function $F$ is unique once the lower limit $a$ is fixed; this is a more constructive way to define antiderivatives than the indefinite-integral approach.

The integral is also well defined with both limits variable:

$$G(x, y) = \int_x^y f(t)\, dt,$$

and by the chain rule, $\partial G / \partial y = f(y)$ and $\partial G / \partial x = -f(x)$. This is the basis of Leibniz's rule for differentiating under the integral sign.

## Key Ideas

- The definite integral $\int_a^b f(x)\, dx$ is the signed area between $f$ and the $x$-axis from $a$ to $b$.
- It is the limit of Riemann sums.
- Part 1 of the fundamental theorem: $F(x) = \int_a^x f(t)\, dt$ has $F'(x) = f(x)$.
- Part 2 of the fundamental theorem: $\int_a^b f(x)\, dx = F(b) - F(a)$ for any antiderivative $F$.
- The constant of integration cancels in the definite integral.
- The net change theorem: $F(b) - F(a) = \int_a^b f(x)\, dx$ for any $F' = f$.

## Worked Examples

### Example 1 — Polynomial definite integral

Evaluate $\int_0^3 (x^2 - 2 x + 1) dx$.

**Solution.** The antiderivative is $F(x) = x^3/3 - x^2 + x$. Then

$$\int_0^3 (x^2 - 2 x + 1) dx = \left[\frac{x^3}{3} - x^2 + x\right]_0^3 = \left(\frac{27}{3} - 9 + 3\right) - 0 = 9 - 9 + 3 = 3.$$

Geometrically, this is the signed area between the parabola $y = (x-1)^2$ and the $x$-axis from $0$ to $3$, which is positive (the parabola touches the $x$-axis at $x = 1$ and is positive elsewhere). ✓

### Example 2 — Exponential definite integral

Evaluate $\int_0^1 3 e^{2 t} dt$.

**Solution.** Antiderivative: $\int 3 e^{2 t} dt = (3/2) e^{2 t}$. Then

$$\int_0^1 3 e^{2 t} dt = \left[\frac{3}{2} e^{2 t}\right]_0^1 = \frac{3}{2}(e^2 - e^0) = \frac{3}{2}(e^2 - 1) \approx \frac{3}{2}(7.389 - 1) \approx 9.58.$$

### Example 3 — Trigonometric definite integral

Evaluate $\int_0^{\pi/2} \sin x\, dx$.

**Solution.** Antiderivative: $-\cos x$. Then

$$\int_0^{\pi/2} \sin x\, dx = [-\cos x]_0^{\pi/2} = -\cos(\pi/2) - (-\cos 0) = -0 - (-1) = 1.$$

Geometrically, the area under one quarter-period of the sine curve is exactly 1 (the area under the full half-period is 2, and the symmetry gives 1 per quarter).

## Common Misconceptions

- **"The definite integral is the area between the curve and the $x$-axis."** It is the signed area. If the curve goes below the axis, that part contributes negatively.
- **"The constant of integration matters in the definite integral."** It cancels. Any antiderivative gives the same definite integral.
- **"The fundamental theorem is a definition."** It is a theorem; the integral is defined as the limit of Riemann sums, and the fundamental theorem is the (non-trivial) connection to the antiderivative.
- **"$\int_a^b f\, dx$ requires $a < b$."** It is defined for any $a$ and $b$, with the convention that swapping the limits flips the sign. For $a = b$, the integral is zero.
- **"The definite integral always has a closed-form antiderivative."** No. Most continuous functions do not have elementary antiderivatives; their definite integrals are evaluated numerically.

## Connections

- The definite integral is the workhorse of physics: every "total" quantity is an integral of a density.
- The fundamental theorem connects differentiation and integration, the two central operations of calculus.
- The net change theorem is the basis of the integral form of the laws of physics (energy conservation, momentum conservation, charge conservation).
- Numerical integration is needed when the antiderivative is not elementary; it is the subject of Module 2 of Numerical Methods (Semester 4).
- The integral as a function of the limits is the foundation of the special functions of mathematical physics (error function, gamma function, exponential integral).

## Quick Check

1. Evaluate $\int_1^4 \sqrt{x}\, dx$.
2. Evaluate $\int_0^{\pi} \cos x\, dx$.
3. Evaluate $\int_{-1}^1 x^3\, dx$. Why is the result zero?
4. The velocity of a particle is $v(t) = 3 t^2$ m/s. Find the displacement from $t = 0$ to $t = 5$ s.
5. State the two parts of the fundamental theorem of calculus in your own words.

## Takeaway

- The definite integral is the signed area under the curve.
- It is defined as the limit of Riemann sums.
- The fundamental theorem connects the definite integral to the antiderivative.
- The net change theorem is the basis of integral physics.
- The constant of integration cancels in the definite integral.
