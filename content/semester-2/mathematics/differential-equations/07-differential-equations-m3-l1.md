***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: differential-equations
courseName: Differential Equations
moduleId: differential-equations-module-3
moduleName: Systems and Applications
lessonId: differential-equations-m3-l1
lessonName: Power Series Solutions near an Ordinary Point
lessonNumber: 7
moduleNumber: 3
semesterNumber: 2
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - differential-equations-m2-l1
  - differential-calculus-m3-l1
learningObjectives:
  - Identify ordinary and singular points of a linear ODE.
  - Use the power-series method to solve an ODE near an ordinary point.
  - Derive the recurrence relation for the coefficients.
  - Recognise when the series solution reduces to a familiar function.
concepts:
  - Ordinary point
  - Singular point
  - Power series method
  - Recurrence relation
  - Radius of convergence
  - Taylor series as a solution
tags:
  - mathematics
  - differential-equations
  - power-series
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Power Series Solutions near an Ordinary Point

## Overview
Not every linear ODE has a solution in closed form. The *power series method* builds a solution as a Taylor series $\sum a_n (x - x_0)^n$, with unknown coefficients determined by substitution. Near an *ordinary point* (where the leading coefficient does not vanish), the method always produces a solution, and that solution is exactly the Taylor series of the closed-form solution if one exists. This lesson develops the technique and applies it to several equations, including the Hermite equation that later appears in the quantum harmonic oscillator.

## Learning Path
- What you should already know: Taylor series, derivatives of power series, the standard differentiation rules.
- What this lesson adds: a constructive way to solve ODEs that resist closed form, and a way to derive solutions from scratch.
- What it unlocks: the Frobenius method at singular points, the special functions of mathematical physics (Legendre, Bessel, Hermite), and the perturbative methods of *Quantum Mechanics*.

## Core Explanation
**Ordinary vs. singular points.** For a second-order linear ODE $y'' + p(x) y' + q(x) y = 0$, the point $x_0$ is *ordinary* if $p$ and $q$ are analytic at $x_0$. It is *singular* if either $p$ or $q$ is not analytic there. (Higher-order equations have a similar definition.) The power-series method works at ordinary points; singular points need the Frobenius method.

**The idea.** Look for a solution of the form

$$y(x) = \sum_{n=0}^{\infty} a_n (x - x_0)^n,$$

substitute into the ODE, and match coefficients of $(x - x_0)^n$ to zero. The result is a recurrence relation for the $a_n$.

**Example: Airy's equation.** $y'' - x y = 0$. Take $x_0 = 0$ and substitute $y = \sum a_n x^n$. Then $y'' = \sum_{n \ge 2} n (n - 1) a_n x^{n-2} = \sum_{n \ge 0} (n + 2)(n + 1) a_{n+2} x^n$. The ODE says

$$\sum_{n \ge 0} (n + 2)(n + 1) a_{n+2} x^n = \sum_{n \ge 0} a_n x^{n+1} = \sum_{n \ge 1} a_{n-1} x^n.$$

For $n = 0$: $2 a_2 = 0 \Rightarrow a_2 = 0$. For $n \ge 1$: $(n + 2)(n + 1) a_{n+2} = a_{n - 1}$, so $a_{n+2} = a_{n-1}/((n+2)(n+1))$. Setting $a_0$ and $a_1$ arbitrarily gives two linearly independent solutions. The first few coefficients: $a_0, a_1, 0, a_0/6, a_1/12, 0, a_0/180, a_1/504, 0, \ldots$

**Recognising the solution.** The first solution is $y_1(x) = a_0 (1 + x^3/6 + x^6/180 + \ldots) = a_0 \text{Ai}(x)$, the Airy function. The second is $y_2(x) = a_1 (x + x^4/12 + x^7/504 + \ldots) = a_1 \text{Bi}(x)$. These functions cannot be expressed in elementary functions, but they are well-defined series and they have known asymptotic behaviour.

**The Hermite equation.** $y'' - 2 x y' + 2 \lambda y = 0$. Substitute the series. The recurrence relates every third coefficient. For certain values of $\lambda$ (non-negative integers), the series terminates and we get the Hermite polynomials, which are central to the quantum harmonic oscillator.

**When the method gives a closed form.** If the recurrence relation closes after finitely many steps (or if the resulting series matches a known function), the solution is elementary. Otherwise, the series is the answer — and often the series is what physics actually uses, especially for special functions like Bessel, Legendre, and confluent hypergeometric functions.

**Radius of convergence.** The series method does not automatically tell you the radius of convergence. The standard test (ratio or root test on the coefficients) gives the radius. For an ODE analytic everywhere, the radius is infinite; for an ODE with a singularity at distance $R$ from the expansion point, the radius is at most $R$.

**Higher-order equations.** The same method applies: substitute, match coefficients, get recurrences. The order of the ODE gives the number of arbitrary coefficients (initial conditions), one for each independent solution.

**Euler's equation.** $x^2 y'' + a x y' + b y = 0$ is a special singular equation. The substitution $x = e^t$ turns it into a constant-coefficient ODE in $t$, which is then solved by the characteristic equation. This is the Frobenius method's cousin for the simplest singular case.

## Key Ideas
- Power-series method: substitute a Taylor series into the ODE; match coefficients of like powers.
- Recurrence relation: each coefficient is determined by previous ones.
- Ordinary point: $p, q$ analytic there; the method works.
- Singular point: $p$ or $q$ not analytic; need Frobenius.
- Closed form: only if the series terminates or matches a known function.

## Worked Examples
**Example 1 — Airy's equation.** As above: $y_1 = 1 + x^3/6 + x^6/180 + \ldots$, $y_2 = x + x^4/12 + x^7/504 + \ldots$. The two solutions are linearly independent (Wronskian non-zero).

**Example 2 — A first-order example.** $y' = y$. Substitute $y = \sum a_n x^n$. $y' = \sum n a_n x^{n-1} = \sum (n+1) a_{n+1} x^n$. So $(n+1) a_{n+1} = a_n$, giving $a_n = a_0/n!$. The solution is $y = a_0 e^x$, as expected.

**Example 3 — Legendre's equation (preview).** $(1 - x^2) y'' - 2 x y' + \ell (\ell + 1) y = 0$. The recurrence relation has period $2$. For integer $\ell \ge 0$, the series terminates, giving the Legendre polynomials $P_\ell(x)$.

## Common Misconceptions
- **"The power series is an approximation."** The series *is* the solution; the partial sums are approximations. The full series, in its radius of convergence, gives the exact solution.
- **"Power series methods only work for special equations."** They work for *any* linear ODE analytic at the expansion point. The cost is a recurrence rather than a closed form.
- **"All second-order linear ODEs have closed-form solutions."** Most do not. The special functions (Bessel, Legendre, Hermite, Laguerre, hypergeometric) are defined by their series expansions or by integrals.
- **"The radius of convergence is set by the closest singularity of the ODE."** For the power series method, yes — the radius is at most the distance to the nearest singular point of the differential equation.

## Connections
The power-series method is the prototype for the Frobenius method, which extends the approach to singular points. The special functions defined this way — Legendre, Bessel, Hermite, Laguerre — are the eigenfunctions of the major ODEs of mathematical physics. The Hermite equation is solved by Hermite polynomials in the quantum harmonic oscillator; the Legendre equation by Legendre polynomials in the angular part of the hydrogen atom.

## Quick Check
1. State the power-series method in your own words.
2. Find the first three nonzero terms of the series solution of $y'' + y = 0$ about $x = 0$.
3. What is an ordinary point of a second-order linear ODE?
4. Solve $y'' - x y = 0$ about $x = 0$ to first non-trivial order.
5. Why does the Hermite equation have polynomial solutions for certain values of $\lambda$?

## Takeaway
- Substitute a Taylor series into the ODE; match coefficients to derive a recurrence.
- The method works at ordinary points (where the coefficients are analytic).
- Recurrences may close to give closed-form solutions or run forever (special functions).
- Radius of convergence is bounded by the distance to the nearest singular point.
- Power-series solutions are exact within their radius of convergence.
