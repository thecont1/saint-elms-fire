***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: differential-calculus
courseName: Differential Calculus
moduleId: differential-calculus-module-3
moduleName: Applications and Series
lessonId: differential-calculus-m3-l1
lessonName: Taylor and Maclaurin Series
lessonNumber: 7
moduleNumber: 3
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - differential-calculus-m2-l3
learningObjectives:
  - State Taylor's theorem with remainder.
  - Compute Taylor polynomials and Taylor series of standard functions.
  - Estimate truncation error using the Lagrange remainder.
  - Use series to compute limits, integrals, and approximations.
concepts:
  - Taylor polynomial
  - Taylor series
  - Maclaurin series
  - Lagrange remainder
  - Radius of convergence
tags:
  - mathematics
  - calculus
  - taylor-series
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Taylor and Maclaurin Series

## Overview
Taylor's theorem is the most important theorem of elementary calculus. It says that a smooth function can be approximated near a point by a polynomial whose coefficients are the function's derivatives at that point. As you take more terms, the polynomial matches the function to higher and higher order. This is the bridge from calculus to analysis, and the workhorse of approximation throughout physics and engineering.

## Learning Path
- What you should already know: derivatives, the limit concept, the idea of an infinite series.
- What this lesson adds: a precise expansion technique, error bounds, and a stock of standard series.
- What it unlocks: approximations in physics, computing $\sin$ and $e$ on a calculator, the small-$\theta$ approximations, *Real Analysis* (Taylor's theorem with remainder).

## Core Explanation
**Taylor's theorem.** If $f$ has $n + 1$ continuous derivatives in a neighbourhood of $a$, then for $x$ in that neighbourhood,

$$f(x) = f(a) + f'(a)(x - a) + \frac{f''(a)}{2!}(x - a)^2 + \cdots + \frac{f^{(n)}(a)}{n!}(x - a)^n + R_n(x),$$

where the **Lagrange remainder** is

$$R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!} (x - a)^{n+1}$$

for some $c$ between $a$ and $x$. The remainder tells you how far off the polynomial approximation is.

**Taylor series.** If $\lim_{n \to \infty} R_n(x) = 0$, then $f$ equals its Taylor series on the relevant interval:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n.$$

The series converges in some interval $|x - a| < R$, where $R$ is the radius of convergence. Inside $R$, the series equals the function. Outside, it diverges or equals a different analytic continuation.

**Maclaurin series.** A Taylor series about $a = 0$ is a Maclaurin series. For functions that behave nicely near $0$, the Maclaurin series is often the easiest to remember.

**Standard Maclaurin series.**

| $f(x)$ | Maclaurin series | Interval |
|--------|-----------------|----------|
| $e^x$ | $\sum x^n/n! = 1 + x + x^2/2! + x^3/3! + \cdots$ | $(-\infty, \infty)$ |
| $\sin x$ | $\sum (-1)^n x^{2n+1}/(2n+1)! = x - x^3/3! + x^5/5! - \cdots$ | $(-\infty, \infty)$ |
| $\cos x$ | $\sum (-1)^n x^{2n}/(2n)! = 1 - x^2/2! + x^4/4! - \cdots$ | $(-\infty, \infty)$ |
| $\ln(1 + x)$ | $\sum (-1)^{n+1} x^n/n = x - x^2/2 + x^3/3 - \cdots$ | $(-1, 1]$ |
| $(1 + x)^\alpha$ | $\sum \binom{\alpha}{n} x^n$ with $\binom{\alpha}{n} = \alpha(\alpha-1)\cdots(\alpha - n + 1)/n!$ | $|x| < 1$ |

**Computing new series.** Use four operations and differentiation or integration of known series. To expand $\cos^2 x$, use $\cos^2 x = (1 + \cos 2x)/2$, expand $\cos 2x$, and add. To expand $\arctan x$, integrate the series for $1/(1 + x^2)$.

**Error estimation.** The Lagrange remainder is the most useful. For example, the error in approximating $\sin x$ by its $n$-th degree Maclaurin polynomial is at most $|x|^{n+1}/(n+1)!$, since the next derivative of $\sin$ is bounded by $1$ in magnitude.

**Geometric meaning.** A Taylor polynomial is the *best* polynomial approximation of given degree near $a$, in the sense that it matches the function's value, slope, curvature, and so on up to the order of the polynomial.

## Key Ideas
- Taylor's theorem: $f(x) = \sum_{k=0}^{n} f^{(k)}(a)(x - a)^k/k! + R_n(x)$.
- The Lagrange remainder $R_n(x) = f^{(n+1)}(c)(x - a)^{n+1}/(n+1)!$ gives a concrete error bound.
- Maclaurin series are Taylor series about $0$.
- The series converges to $f$ on an interval determined by the radius of convergence.
- Differentiation, integration, and algebra of known series generate new series.

## Worked Examples
**Example 1 — Approximate $e^{0.1}$ with two terms.** $e^{0.1} \approx 1 + 0.1 + 0.1^2/2 = 1.105$. The true value is $1.10517\ldots$ — error $\approx 0.0002$, or $0.02\%$.

**Example 2 — Maclaurin series of $\sin x$ to third order.** $\sin x \approx x - x^3/6$. For small $x$, this is the standard small-angle approximation. For $x = 30° = \pi/6 \approx 0.524$: $\sin(\pi/6) \approx 0.524 - 0.524^3/6 = 0.524 - 0.024 = 0.500$. The true value is exactly $0.5$, and the next term $x^5/120 \approx 0.0003$ accounts for the small error.

**Example 3 — Integrate the geometric series.** $\int_0^x 1/(1 + t^2)\, dt = \arctan x$. The geometric series gives $1/(1 + t^2) = \sum (-1)^n t^{2n}$. Integrate term by term: $\arctan x = \sum (-1)^n x^{2n+1}/(2n + 1)$ for $|x| \le 1$. Setting $x = 1$ recovers the famous series $\pi/4 = 1 - 1/3 + 1/5 - 1/7 + \cdots$.

## Common Misconceptions
- **"A Taylor series equals the function everywhere."** Only inside its radius of convergence. Outside, the series may diverge or sum to a different function (the analytic continuation).
- **"Higher-order Taylor polynomials are always better."** Locally near $a$, yes. Globally, a Taylor polynomial can overshoot or undershoot wildly.
- **"You can integrate Taylor series term by term without checking convergence."** Term-by-term integration of a power series is valid inside the radius of convergence. Outside, it may fail.
- **"The Maclaurin series of a function is unique."** The Maclaurin series, if it converges to the function, is unique. Different functions can have the same Taylor series on one interval if they agree to all orders at $a$ but differ elsewhere (the "identity theorem" for analytic functions).

## Connections
Taylor series are the workhorse of small-$\theta$ approximations in *Mechanics* (pendulums, $\sin\theta \approx \theta$ for small $\theta$) and *Astrophysics* (relativistic corrections, e.g. $1/\sqrt{1 - v^2/c^2} \approx 1 + v^2/(2c^2)$). Taylor's theorem with remainder is the foundation of *Real Analysis* (Sem 3). Series solution methods in *Differential Equations* (Sem 2) build Taylor series term by term.

## Quick Check
1. Write the Maclaurin series for $e^x$ to four terms. Use it to estimate $e^{0.2}$.
2. Find the Maclaurin series of $\cos x$ by differentiating the series for $\sin x$.
3. Use the Maclaurin series of $\ln(1 + x)$ to estimate $\ln 1.1$ to two decimal places.
4. State the Lagrange remainder for the $n$-th Taylor polynomial of $f$ at $a$.
5. The Maclaurin series of $1/(1 - x)$ is $\sum x^n$ for $|x| < 1$. Use this to find a series for $1/(1 - x)^2$.

## Takeaway
- Taylor's theorem: a smooth function is a polynomial of its derivatives at a point, plus a remainder.
- The Lagrange remainder $R_n$ provides a practical error estimate.
- Maclaurin series are Taylor series at $0$.
- The standard series for $e^x$, $\sin x$, $\cos x$, $\ln(1 + x)$, $(1 + x)^\alpha$ cover most practical needs.
- Inside the radius of convergence, the series equals the function and you can differentiate or integrate term by term.
