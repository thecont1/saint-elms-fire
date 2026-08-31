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
lessonId: integral-calculus-m2-l3
lessonName: Average Value, Mean Value Theorem and Estimating Integrals
lessonNumber: 6
moduleNumber: 2
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 6
prerequisites:
  - integral-calculus-m2-l1
learningObjectives:
  - Compute the average value of a function on an interval as a definite integral divided by the interval length.
  - State and apply the mean value theorem for integrals.
  - Estimate definite integrals using symmetry, comparison, and the trapezoidal rule.
concepts:
  - Average value
  - Mean value theorem for integrals
  - Trapezoidal rule
  - Comparison of integrals
  - Symmetry in definite integrals
tags:
  - mathematics
  - calculus
  - definite-integral
  - mean-value-theorem
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Average Value, Mean Value Theorem and Estimating Integrals

## Overview

A continuous function on an interval has an average value, defined as the integral divided by the interval length. The mean value theorem for integrals guarantees that this average is attained somewhere in the interval. These tools, together with the comparison theorems and the trapezoidal rule, give a way to estimate definite integrals when an antiderivative is not available. The lesson develops the average value and the mean value theorem, illustrates the use of symmetry and comparison, and closes with a worked example of the trapezoidal rule. The applications in physics — average power, average velocity, RMS quantities — are emphasised throughout.

## Learning Path

- **What you should already know**: the definite integral as a signed area (Lesson m2-l1); the antiderivative rules from Module 1; the geometric meaning of area.
- **What this lesson adds**: the average value of a function; the mean value theorem for integrals; comparison theorems; the trapezoidal rule; symmetry-based shortcuts.
- **What later lessons this will unlock**: integration by parts in Module 3; numerical integration in Semester 4; applications in physics throughout the programme.

## Core Explanation

### Average value of a function

The **average value** of a continuous function $f$ on the interval $[a, b]$ is

$$\bar{f} = \frac{1}{b - a} \int_a^b f(x)\, dx.$$

Geometrically, the average value is the height of a rectangle with the same base $[a, b]$ as the region under the curve and the same area as the integral. Equivalently, the area under $y = f(x)$ equals the area of the rectangle $y = \bar{f}$ with the same base.

For a positive integrand, the average value is between the minimum and maximum of $f$ on $[a, b]$, and the rectangle of height $\bar{f}$ "cuts off" the same area as the region. For a sign-changing integrand, the average value can be anywhere in the range.

### Average value in physics

Average value appears throughout physics:

- **Average velocity**: $\bar{v} = \frac{1}{t_2 - t_1} \int_{t_1}^{t_2} v(t)\, dt = \frac{x(t_2) - x(t_1)}{t_2 - t_1}$. This is the total displacement divided by the elapsed time.
- **Average power**: $\bar{P} = \frac{1}{T} \int_0^T P(t)\, dt$. For sinusoidal AC, the average power is half the peak power (a key result in electrical engineering).
- **Average current**: $\bar{I} = \frac{1}{T} \int_0^T I(t)\, dt$. For half-wave rectified AC, the average is $I_\text{peak}/\pi$.
- **Average force**: $\bar{F} = \frac{1}{b - a} \int_a^b F(x)\, dx$. This is the constant force that would do the same total work over the same distance.

### Mean value theorem for integrals

The **mean value theorem for integrals** states that if $f$ is continuous on $[a, b]$, then there exists a point $c \in [a, b]$ such that

$$\int_a^b f(x)\, dx = f(c)(b - a).$$

Equivalently, $f(c) = \bar{f}$. The theorem says the average value is attained at some point in the interval; the location of $c$ is not determined by the theorem, but its existence is.

The mean value theorem for integrals is the continuous analogue of the fact that any finite set of numbers has a mean. The continuous "set" of values $f(x)$ for $x \in [a, b]$ has a mean, and that mean is one of the values.

### Comparison theorems

The comparison theorems bound a definite integral by simpler quantities.

**Theorem (monotonicity).** If $f(x) \le g(x)$ for all $x \in [a, b]$, then $\int_a^b f\, dx \le \int_a^b g\, dx$.

**Theorem (bounding).** If $m \le f(x) \le M$ for all $x \in [a, b]$, then $m (b - a) \le \int_a^b f\, dx \le M (b - a)$.

The bounding theorem is the most useful: it gives a quick estimate of the integral using the min and max of the integrand. The bound is often tight when $f$ is close to constant.

**Theorem (triangle inequality for integrals).** $\left| \int_a^b f\, dx \right| \le \int_a^b |f|\, dx$. The magnitude of the integral is at most the integral of the magnitude.

These theorems are used in numerical analysis to bound the error of approximations, and in physics to estimate total quantities when only bounds on the integrand are known.

### Symmetry-based shortcuts

Many definite integrals simplify dramatically under symmetry. The most important:

- **Even integrand on symmetric interval**: $\int_{-a}^a f(x)\, dx = 2 \int_0^a f(x)\, dx$ if $f(-x) = f(x)$.
- **Odd integrand on symmetric interval**: $\int_{-a}^a f(x)\, dx = 0$ if $f(-x) = -f(x)$.
- **Periodicity**: $\int_0^{T} f(t)\, dt = \int_a^{a + T} f(t)\, dt$ for any $a$ if $f$ has period $T$.
- **Half-period**: $\int_0^{T} \sin^2(\omega t)\, dt = T/2$ and $\int_0^T \cos^2(\omega t)\, dt = T/2$. The mean-square of a sinusoid over a period is half the peak.

These shortcuts save time and reduce the chance of algebraic errors. The trick is to recognise the symmetry in the integrand.

### RMS quantities

The **root mean square (RMS)** of a function on $[a, b]$ is

$$f_\text{rms} = \sqrt{\frac{1}{b - a} \int_a^b f(x)^2\, dx}.$$

The RMS is the square root of the average of the square. It is the natural measure of the "size" of a sign-changing quantity (e.g. AC voltage, where the average is zero but the RMS is non-zero).

In physics, RMS appears in:
- **AC voltage and current**: $V_\text{rms} = V_\text{peak}/\sqrt{2}$ for a sinusoid; the power delivered is $V_\text{rms} I_\text{rms}$.
- **RMS speed of a gas molecule**: $v_\text{rms} = \sqrt{3 k T / m}$, related to the temperature.
- **RMS displacement of a harmonic oscillator**: $x_\text{rms} = A/\sqrt{2}$ for a sinusoid.

### Estimating integrals numerically

When an antiderivative is not available, the integral is estimated numerically. The simplest method is the **trapezoidal rule**:

$$\int_a^b f(x)\, dx \approx \frac{\Delta x}{2} \left[ f(x_0) + 2 f(x_1) + 2 f(x_2) + \ldots + 2 f(x_{n-1}) + f(x_n) \right],$$

where $\Delta x = (b - a)/n$ and $x_i = a + i \Delta x$. The rule approximates the region under the curve by a chain of trapezoids.

The error of the trapezoidal rule is bounded by

$$\left| E_T \right| \le \frac{(b - a)^3}{12 n^2} \max |f''|,$$

so doubling $n$ reduces the error by a factor of $4$. For smooth $f$, the trapezoidal rule is accurate with a modest $n$; for rough $f$, more sophisticated methods (Simpson's, Gauss–Legendre) are needed.

**Midpoint rule** is a related estimator that uses the value at the midpoint of each subinterval:

$$\int_a^b f(x)\, dx \approx \Delta x \sum_{i=1}^{n} f\left(a + \left(i - \tfrac{1}{2}\right) \Delta x\right).$$

The midpoint rule has a similar error bound but is sometimes more accurate than the trapezoidal rule for the same number of function evaluations.

### Simpson's rule

A higher-order method is **Simpson's rule**, which fits a parabola to each pair of subintervals:

$$\int_a^b f(x)\, dx \approx \frac{\Delta x}{3} \left[ f(x_0) + 4 f(x_1) + 2 f(x_2) + 4 f(x_3) + 2 f(x_4) + \ldots + f(x_n) \right],$$

where $n$ is even. The error is $O(\Delta x^4)$, a substantial improvement over the trapezoidal rule's $O(\Delta x^2)$. Simpson's rule is the workhorse of routine numerical integration in spreadsheets and simple code.

### Estimating with bounds

The bounding theorem gives a quick estimate:

$$\text{min}(f) (b - a) \le \int_a^b f(x)\, dx \le \text{max}(f) (b - a).$$

For a function that varies little on the interval, the bound is tight; for a function with sharp peaks, the bound is loose and a finer method is needed.

A useful refinement is the **interval-halving technique**: split the interval in half, estimate each half separately, and add. The sum is more accurate than the single-interval estimate. Repeating the halving is the basis of adaptive quadrature.

### Averaging in physics

Averaging is a natural operation in physics because many quantities are integrals of underlying distributions:

- **Average kinetic energy of a gas**: $\bar{K} = (3/2) k T$ from the Maxwell–Boltzmann distribution.
- **Average power in AC circuits**: $\bar{P} = V_\text{rms} I_\text{rms} \cos \phi$, where $\phi$ is the phase angle.
- **Average spacing of random points**: related to the integral of the distribution.
- **Average value of a function over a region**: a higher-dimensional generalisation of the average.

The average value is often the most physically meaningful single number characterising a distribution.

## Key Ideas

- Average value: $\bar{f} = (1/(b-a)) \int_a^b f\, dx$.
- Mean value theorem: there exists $c \in [a, b]$ with $\int_a^b f\, dx = f(c)(b - a)$.
- Comparison theorems: bounded integrand gives bounded integral; $|f| \le g \Rightarrow |\int f| \le \int g$.
- Symmetry: even integrand on symmetric interval doubles; odd integrand on symmetric interval vanishes.
- Trapezoidal rule: $O(\Delta x^2)$ error; Simpson's rule: $O(\Delta x^4)$ error.
- RMS: $\sqrt{\bar{f^2}}$; measures the "size" of a sign-changing quantity.

## Worked Examples

### Example 1 — Average value of a parabola

Find the average value of $f(x) = x^2$ on $[0, 3]$.

**Solution.**

$$\bar{f} = \frac{1}{3 - 0} \int_0^3 x^2\, dx = \frac{1}{3} \left[\frac{x^3}{3}\right]_0^3 = \frac{1}{3} \cdot \frac{27}{3} = 3.$$

The average value is $3$, attained at the point $x = \sqrt{3}$ (where $f(\sqrt{3}) = 3$, by the mean value theorem).

### Example 2 — RMS of a sinusoid

Find the RMS of $f(t) = A \sin(\omega t)$ over one period $T = 2\pi/\omega$.

**Solution.** By symmetry (or by direct integration),

$$f_\text{rms}^2 = \frac{1}{T} \int_0^T A^2 \sin^2(\omega t)\, dt = \frac{A^2}{T} \cdot \frac{T}{2} = \frac{A^2}{2}.$$

So $f_\text{rms} = A/\sqrt{2}$. This is the basis of the $1/\sqrt{2}$ factor in the AC voltage formula $V_\text{rms} = V_\text{peak}/\sqrt{2}$.

### Example 3 — Trapezoidal rule

Estimate $\int_0^1 e^{-x^2} dx$ using the trapezoidal rule with $n = 4$.

**Solution.** $\Delta x = 0.25$. The sample points are $x_i = 0, 0.25, 0.5, 0.75, 1$ with $f(x_i) = e^{-x_i^2}$:

| $i$ | $x_i$ | $f(x_i)$ |
|---|---|---|
| 0 | 0.00 | 1.00000 |
| 1 | 0.25 | 0.93941 |
| 2 | 0.50 | 0.77880 |
| 3 | 0.75 | 0.56978 |
| 4 | 1.00 | 0.36788 |

Trapezoidal estimate:

$$T_4 = \frac{0.25}{2} [1 + 2(0.93941) + 2(0.77880) + 2(0.56978) + 0.36788] = 0.125 \times 6.94386 \approx 0.8680.$$

The true value is about $0.7468$ (this is the well-known Gaussian integral on $[0, 1]$, related to the error function). The trapezoidal rule with $n = 4$ overestimates by about 16%; with more subintervals, the estimate improves.

## Common Misconceptions

- **"The average value of a function is the value at the midpoint of the interval."** Only for linear functions. In general, the average depends on the function's shape, not just the endpoints.
- **"The mean value theorem gives the location of the mean."** It guarantees existence, not the location. The actual $c$ is rarely easy to find in closed form.
- **"Symmetry always helps."** It helps when the symmetry is present. For integrands without obvious symmetry, the shortcut is unavailable.
- **"The trapezoidal rule is always accurate enough."** It depends on $f$. For a smooth function, $n = 100$ may be ample; for a function with a sharp peak, $n = 10^6$ may be needed.
- **"RMS is the same as average for a sign-changing quantity."** No. The average can be zero even when the RMS is non-zero. RMS is the appropriate "size" measure for AC quantities, noise, and other fluctuating signals.

## Connections

- Average value is the simplest summary statistic of a function; it is the basis of the expectation in probability.
- The mean value theorem is the continuous analogue of the intermediate value theorem; both are existence theorems, not formulas.
- The trapezoidal rule is the simplest numerical integrator; more accurate methods (Simpson's, Gauss) build on the same idea.
- RMS appears in AC analysis, statistical mechanics, and the analysis of noise.
- The work-energy theorem can be written in terms of average power: $W = \bar{P} \Delta t$.

## Quick Check

1. Find the average value of $f(x) = \sin x$ on $[0, \pi]$.
2. Find the RMS of $f(x) = x$ on $[0, 1]$.
3. State the mean value theorem for integrals.
4. Estimate $\int_0^2 x^2\, dx$ using the trapezoidal rule with $n = 4$.
5. Use the bounding theorem to estimate $\int_0^{\pi/2} \sin x\, dx$.

## Takeaway

- Average value is the integral divided by the interval length.
- The mean value theorem guarantees a point where the function equals its average.
- Symmetry simplifies many definite integrals.
- The trapezoidal rule and Simpson's rule are the simplest numerical integrators.
- RMS is the natural "size" measure for sign-changing quantities.
