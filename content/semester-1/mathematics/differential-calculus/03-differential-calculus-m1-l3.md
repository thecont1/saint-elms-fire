***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: differential-calculus
courseName: Differential Calculus
moduleId: differential-calculus-module-1
moduleName: Limits and Continuity
lessonId: differential-calculus-m1-l3
lessonName: Continuity and Discontinuities
lessonNumber: 3
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 3
prerequisites:
  - differential-calculus-m1-l2
learningObjectives:
  - Define continuity at a point and on an interval.
  - Classify common discontinuities (removable, jump, infinite, oscillatory).
  - State and apply the Intermediate Value Theorem.
  - State and apply the Extreme Value Theorem.
concepts:
  - Continuity at a point
  - Continuity on an interval
  - Removable discontinuity
  - Jump discontinuity
  - Intermediate Value Theorem
  - Extreme Value Theorem
tags:
  - mathematics
  - calculus
  - continuity
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Continuity and Discontinuities

## Overview
A function is continuous at a point if a small change in the input produces a small change in the output. The formal definition lines this up with limits: $f$ is continuous at $a$ iff $\lim_{x \to a} f(x) = f(a)$. Continuous functions are the "nice" functions — they can be drawn without lifting the pen, and they obey theorems that discontinuous functions flout. The two big theorems here — the Intermediate Value Theorem and the Extreme Value Theorem — turn calculus from a collection of tricks into a predictive science.

## Learning Path
- What you should already know: limit definition, basic function types, the algebra of limits.
- What this lesson adds: a precise continuity concept and the two classical "nice function" theorems.
- What it unlocks: existence of solutions to equations, the Extreme Value Theorem, definitions of integrals in *Real Analysis*.

## Core Explanation
**Three-part definition.** A function $f$ is continuous at $a$ if all three of the following hold:
1. $f(a)$ is defined.
2. $\lim_{x \to a} f(x)$ exists.
3. $\lim_{x \to a} f(x) = f(a)$.

Equivalently in $\varepsilon$–$\delta$ language: for every $\varepsilon > 0$ there exists $\delta > 0$ such that $|x - a| < \delta$ implies $|f(x) - f(a)| < \varepsilon$.

A function is continuous on an interval if it is continuous at every point of that interval. Polynomials, rational functions (where defined), trigonometric functions, exponentials, and logarithms are continuous on their natural domains.

**Discontinuities.** A point of discontinuity is a place where one of the three conditions fails. Common types:
- **Removable discontinuity** (a hole): the limit exists but is not equal to $f(a)$, or $f(a)$ is undefined. Example: $f(x) = \sin x / x$ at $x = 0$. Filling in $f(0) = 1$ makes it continuous.
- **Jump discontinuity**: one-sided limits exist but differ. Example: the Heaviside step function at $x = 0$.
- **Infinite discontinuity**: $|f(x)| \to \infty$ as $x \to a$. Example: $1/x$ at $x = 0$.
- **Oscillatory discontinuity**: $f$ does not approach any value. Example: $\sin(1/x)$ at $x = 0$.

**Algebra of continuous functions.** Sums, products, quotients (where defined), and compositions of continuous functions are continuous. This means we can build up complicated continuous functions from elementary ones without checking every point.

**Intermediate Value Theorem (IVT).** If $f$ is continuous on $[a, b]$ and $y$ is any value between $f(a)$ and $f(b)$, then there exists $c \in (a, b)$ with $f(c) = y$. Intuition: a continuous curve that starts below and ends above a horizontal line must cross that line.

The IVT is an *existence* theorem — it tells you a root or a target value exists, not where. Numerical root-finding (Newton–Raphson, bisection) is a constructive counterpart.

**Extreme Value Theorem (EVT).** If $f$ is continuous on a closed, bounded interval $[a, b]$, then $f$ attains a maximum and a minimum on $[a, b]$. That is, there exist $c, d \in [a, b]$ with $f(c) = \max f$ and $f(d) = \min f$. Continuity on a closed interval is essential; the function $f(x) = x$ on $(0, 1)$ has no maximum even though it is continuous on the open interval.

**Continuous functions on closed intervals are bounded.** This is a corollary: by the EVT, $|f(x)| \le \max(|f(c)|, |f(d)|)$ on $[a, b]$.

## Key Ideas
- Continuity at $a$: limit exists, equals $f(a)$, and $f(a)$ is defined.
- Removable, jump, infinite, and oscillatory are the four common types of discontinuity.
- IVT: a continuous function on $[a, b]$ takes every intermediate value.
- EVT: a continuous function on a closed interval attains a maximum and a minimum.
- Sums, products, quotients, and compositions of continuous functions are continuous.

## Worked Examples
**Example 1 — Show a root exists.** Show that $f(x) = x^3 - 6x + 2$ has a root between $0$ and $1$.
$f$ is a polynomial, hence continuous. $f(0) = 2 > 0$, $f(1) = 1 - 6 + 2 = -3 < 0$. By the IVT, there is a $c \in (0, 1)$ with $f(c) = 0$. Numerical methods can refine this to $c \approx 0.34$.

**Example 2 — Classify a discontinuity.** Classify the discontinuity of $g(x) = (x^2 - 1)/(x - 1)$ at $x = 1$.
For $x \ne 1$, $g(x) = x + 1$. The limit as $x \to 1$ is $2$. But $g(1)$ is undefined. This is a removable discontinuity; defining $g(1) = 2$ would make it continuous.

**Example 3 — Why the closed interval matters in EVT.** Consider $f(x) = 1/x$ on the open interval $(0, 1)$. $f$ is continuous on $(0, 1)$ but has no maximum (it grows without bound as $x \to 0^+$) and no minimum (it approaches $1$ as $x \to 1^-$ but never reaches it). The failure is the open interval: $0$ and $1$ are not in the domain.

## Common Misconceptions
- **"All functions are continuous where they are defined."** Not true. The function $f(x) = \sin x / x$ is not defined at $0$, but more importantly, the function $h(x)$ defined as $1$ for $x \ne 0$ and $0$ for $x = 0$ is discontinuous at $0$ even though it is defined there.
- **"The IVT gives the root."** The IVT only guarantees existence. To find the root, use numerical methods or solve algebraically when possible.
- **"Continuity on $(a, b)$ is enough for the EVT."** It is not; you also need the interval to be closed and bounded. The failure of EVT on open or unbounded intervals is the source of many subtle mistakes.
- **"Composition of continuous functions is automatically continuous."** True when the inner function's range lies in the domain of the outer. If the inner function can take values outside the outer's domain, the composition is not defined on those inputs.

## Connections
The IVT underpins existence proofs in *Mechanics* (when a particle must cross a level), *Astrophysics I* (when an orbit must close), and *Numerical Methods* (bisection method). The Extreme Value Theorem is a prerequisite for the Riemann integral in *Real Analysis* (Sem 3): without it, a continuous function might not be integrable on a closed interval.

## Quick Check
1. State the three conditions for continuity at a point.
2. Classify the discontinuity of $f(x) = 1/(x - 2)$ at $x = 2$.
3. Show that $x^5 - 3x + 1 = 0$ has a root in $(0, 1)$.
4. Why does the EVT fail for $f(x) = x$ on $(0, 1)$?
5. Is the product of two discontinuous functions necessarily discontinuous? Give an example or counter-example.

## Takeaway
- Continuity at $a$ requires the limit to exist, to equal $f(a)$, and for $f(a)$ to be defined.
- The four common discontinuities are removable, jump, infinite, and oscillatory.
- IVT guarantees intermediate values; EVT guarantees extrema on a closed bounded interval.
- Algebraic combinations of continuous functions stay continuous.
- The IVT and EVT are existence theorems; numerical methods are their constructive counterparts.
