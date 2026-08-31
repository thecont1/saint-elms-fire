***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: computational-methods
subjectName: Computational Methods
courseId: numerical-methods
courseName: Numerical Methods
moduleId: numerical-methods-module-1
moduleName: Root-Finding and Interpolation
lessonId: numerical-methods-m1-l1
lessonName: Bisection and Newton–Raphson Methods
lessonNumber: 1
moduleNumber: 1
semesterNumber: 4
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - real-analysis-m1-l1
  - differential-equations-m2-l1
learningObjectives:
  - Apply the bisection method to find a root of a continuous function.
  - Apply the Newton–Raphson method and explain its geometric meaning.
  - State the convergence rates of the two methods.
  - Recognise failure modes and how to handle them.
concepts:
  - Root-finding
  - Bisection method
  - Newton–Raphson method
  - Convergence rate
  - Linear vs. quadratic convergence
  - Iterative method
tags:
  - computational-methods
  - numerical-analysis
  - root-finding
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Bisection and Newton–Raphson Methods

## Overview
Many equations in physics and engineering cannot be solved in closed form: the Schrödinger equation for a complex potential, the equation of state for a real gas, the trajectory of a satellite under non-gravitational forces. Numerical root-finding provides iterative methods that converge to a solution to any desired accuracy. The two most important are the *bisection method* (slow but reliable) and the *Newton–Raphson method* (fast but requires a derivative). This lesson develops both, with their convergence rates, error bounds, and failure modes.

## Learning Path
- What you should already know: continuity and the Intermediate Value Theorem from *Real Analysis*, the derivative, the chain rule.
- What this lesson adds: iterative methods for root-finding, with error analysis.
- What it unlocks: numerical solution of nonlinear equations in physics, optimisation, and the rest of *Numerical Methods*.

## Core Explanation
**The problem.** Find $x^*$ such that $f(x^*) = 0$, given a continuous function $f: [a, b] \to \mathbb{R}$. In practice, we want a numerical approximation $x_n$ such that $|x_n - x^*| < \varepsilon$ for a specified tolerance $\varepsilon$.

**Bisection method.** Start with an interval $[a, b]$ where $f(a)$ and $f(b)$ have opposite signs. The IVT guarantees a root in the interval. Compute the midpoint $c = (a + b)/2$. If $f(c) = 0$, we are done. Otherwise, the root is in $[a, c]$ if $f(a) f(c) < 0$, or in $[c, b]$ otherwise. Replace $[a, b]$ with the half-interval and repeat. After $n$ iterations, the interval has length $(b - a)/2^n$, so $|x_n - x^*| \le (b - a)/2^{n+1}$.

**Convergence rate of bisection.** The error decreases by a factor of $2$ each iteration — *linear* convergence, with rate $1/2$. To get $k$ decimal places, you need about $n \approx k \log_2 10$ iterations. Slow but guaranteed.

**Newton–Raphson method.** Given a current guess $x_n$, replace it with the zero of the tangent line to $f$ at $x_n$:

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}.$$

The tangent line at $x_n$ is $f(x_n) + f'(x_n)(x - x_n) = 0$, giving the iteration above.

**Geometric meaning.** At each step, draw the tangent to the curve at the current point and take its zero as the next guess. The iteration converges to a root of $f$ if the initial guess is close enough and $f$ is well-behaved.

**Convergence rate of Newton–Raphson.** Quadratic: if $x_n \to x^*$, then $|x_{n+1} - x^*| \le C |x_n - x^*|^2$ for some constant $C$. The number of correct digits doubles with each iteration (eventually). Much faster than bisection.

**Proof of quadratic convergence.** By Taylor's theorem,

$$f(x^*) = 0 = f(x_n) + f'(x_n)(x^* - x_n) + \tfrac{1}{2} f''(c) (x^* - x_n)^2$$

for some $c$ between $x_n$ and $x^*$. Divide by $f'(x_n)$ (assuming $f'(x^*) \ne 0$):

$$x^* - x_n + \frac{f(x_n)}{f'(x_n)} = -\frac{f''(c)}{2 f'(x_n)} (x^* - x_n)^2,$$

so

$$x_{n+1} - x^* = -\frac{f''(c)}{2 f'(x_n)} (x_n - x^*)^2.$$

As $n \to \infty$, $f'(x_n) \to f'(x^*)$ and $c \to x^*$, so the leading constant is $C = |f''(x^*)| / (2 |f'(x^*)|)$. ✓

**Failure modes of Newton–Raphson.**
- **Bad initial guess**: the iteration may diverge or converge to a different root.
- **Zero derivative**: if $f'(x_n) = 0$, the iteration breaks down (division by zero).
- **Cycle**: the iteration may cycle between two values without converging (e.g. $f(x) = x^3 - 2x + 2$ starting from $x_0 = 0$).
- **Multiple roots**: for a root of multiplicity $m > 1$, Newton converges only linearly (not quadratically). Modified Newton uses $x_{n+1} = x_n - m f(x_n)/f'(x_n)$ for a root of known multiplicity $m$.

**Bisection: pros and cons.** Pros: guaranteed convergence (just needs a sign change). Cons: slow (linear), requires continuity, requires a sign change to start.

**Newton–Raphson: pros and cons.** Pros: fast (quadratic) when it works. Cons: needs the derivative; can diverge or cycle; needs a good initial guess.

**Secant method.** A derivative-free variant of Newton: replace $f'(x_n)$ with $(f(x_n) - f(x_{n-1}))/(x_n - x_{n-1})$:

$$x_{n+1} = x_n - \frac{f(x_n)(x_n - x_{n-1})}{f(x_n) - f(x_{n-1})}.$$

Convergence rate: $\phi \approx 1.618$ (the golden ratio), called *superlinear*. Useful when derivatives are expensive to compute.

**False position (regula falsi).** Like bisection, but uses the secant line through $(a, f(a))$ and $(b, f(b))$ to find the next iterate. Converges faster than bisection in some cases, slower in others.

**Fixed-point iteration.** Solve $x = g(x)$. Iterate $x_{n+1} = g(x_n)$. Converges if $|g'(x^*)| < 1$ (contraction mapping). Newton's method is fixed-point iteration with $g(x) = x - f(x)/f'(x)$. The Banach fixed-point theorem gives the convergence.

**Aitken's $\Delta^2$ acceleration.** A technique to accelerate convergence of a linearly converging sequence. If $x_n \to x^*$ with error $\sim C \lambda^n$ (with $|\lambda| < 1$), then

$$\hat{x}_n = x_n - \frac{(x_{n+1} - x_n)^2}{x_{n+2} - 2 x_{n+1} + x_n}$$

converges faster. Useful in practice.

**Steffensen's method.** Combines fixed-point iteration with Aitken's acceleration. Often achieves quadratic convergence without derivatives.

**Solving systems of nonlinear equations.** Newton's method extends to systems: $x_{n+1} = x_n - J(x_n)^{-1} F(x_n)$, where $J$ is the Jacobian. Quadratic convergence; used in physics for solving coupled nonlinear equations.

**Root-finding for transcendental equations.** Equations like $x = \tan x$ have infinitely many roots and no closed form. Newton's method finds them iteratively. Starting points can be chosen by graphing or by asymptotic analysis.

**Practical tips for Newton–Raphson.**
- Plot $f$ first to see the structure.
- Start from a guess close to the expected root.
- Check $f'(x_n) \ne 0$.
- Stop when $|f(x_n)| < \varepsilon$ or $|x_{n+1} - x_n| < \varepsilon$.
- If the iteration diverges, try a different initial guess or fall back to bisection.

**Root-finding in physics.**
- Eigenvalue problems: $H\psi = E \psi$ becomes $\det(H - E I) = 0$, a polynomial in $E$ of high degree. Newton's method on the characteristic polynomial is one approach.
- Phase transitions: the order parameter $\phi$ satisfies a self-consistency equation like $\phi = f(\phi)$ at a phase transition.
- Orbital mechanics: solving Kepler's equation $M = E - e \sin E$ for the eccentric anomaly $E$ given the mean anomaly $M$ and eccentricity $e$. Newton's method is the standard.
- Schrödinger equation: not directly root-finding, but the eigenvalues of a discretised Hamiltonian are roots of the characteristic polynomial.

**Hybrid methods.** In practice, many numerical libraries use a hybrid: start with bisection (safe, slow) to get close, then switch to Newton (fast, risky). This gives both reliability and speed. The `scipy.optimize.brentq` and `scipy.optimize.newton` are examples.

## Key Ideas
- Bisection: linear convergence, guaranteed.
- Newton–Raphson: quadratic convergence, needs derivative and good initial guess.
- Secant: superlinear, derivative-free.
- False position: hybrid of bisection and secant.
- Multiple roots: Newton converges only linearly; modified Newton fixes this.

## Worked Examples
**Example 1 — Bisection.** Find the root of $f(x) = x^3 - 2$ in $[1, 2]$. $f(1) = -1$, $f(2) = 6$. Midpoint $1.5$: $f(1.5) = 3.375 - 2 = 1.375 > 0$. Root in $[1, 1.5]$. Midpoint $1.25$: $f(1.25) = 1.953 - 2 = -0.047 < 0$. Root in $[1.25, 1.5]$. After 10 iterations, the interval has length $(2 - 1)/2^{10} = 0.001$. Error bound $\le 0.0005$.

**Example 2 — Newton–Raphson.** Find $\sqrt{2}$: solve $f(x) = x^2 - 2 = 0$, $f'(x) = 2x$. $x_{n+1} = x_n - (x_n^2 - 2)/(2 x_n) = (x_n + 2/x_n)/2$. Start $x_0 = 1$: $x_1 = 1.5$, $x_2 = (1.5 + 2/1.5)/2 = 1.4167$, $x_3 = 1.4142$, $x_4 = 1.41421356$. Five iterations to seven decimal places.

**Example 3 — Convergence rate check.** For Newton on $f(x) = x^2 - 2$ near $\sqrt{2}$: errors $0.5, 0.0833, 0.00245, 0.00000147$. Each error is roughly the square of the previous — quadratic convergence. ✓

**Example 4 — Kepler's equation.** $M = E - e \sin E$, with $M = 0.5$ rad, $e = 0.1$. Newton: $E_{n+1} = E_n - (E_n - e \sin E_n - M)/(1 - e \cos E_n)$. Start $E_0 = M = 0.5$: $E_1 = 0.5 - (0.5 - 0.1 \sin 0.5 - 0.5)/(1 - 0.1 \cos 0.5) = 0.5 + 0.04797/0.9477 \approx 0.5506$. Converges in 3-4 iterations.

## Common Misconceptions
- **"Newton's method always converges."** It does not — it depends on the initial guess and the function.
- **"Bisection is always slow."** It is linear, but it is reliable. Many real-world problems use bisection as a fallback.
- **"Convergence rate of $2$"** is for Newton on a simple root. For multiple roots, it is $1$.
- **"Newton's method is the same as fixed-point iteration."** It is one specific choice of fixed-point function $g(x) = x - f(x)/f'(x)$. Other choices may or may not converge.

## Connections
Root-finding is the prototype of iterative numerical methods. Newton's method reappears in *Numerical Methods* Module 3 for nonlinear systems and for optimisation (where the equation $f(x) = 0$ becomes $f'(x) = 0$). The same ideas underlie the EM algorithm in statistics, gradient descent in machine learning, and variational methods in quantum mechanics.

## Quick Check
1. State the bisection iteration and its error bound.
2. State the Newton–Raphson iteration.
3. What is the convergence rate of each?
4. Why might Newton's method fail?
5. Apply Newton to find the positive root of $x^3 - 2x - 5 = 0$ starting from $x_0 = 2$.

## Takeaway
- Bisection: linear convergence, $1/2^n$ error after $n$ steps; guaranteed.
- Newton–Raphson: quadratic convergence, $C \cdot |\epsilon|^2$; needs $f'(x^*) \ne 0$.
- Secant: superlinear, derivative-free.
- False position: hybrid method.
- Hybrid methods combine reliability of bisection with speed of Newton.
