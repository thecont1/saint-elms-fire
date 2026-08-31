***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: calculus-using-python
courseName: Calculus using Python
moduleId: calculus-using-python-module-2
moduleName: Symbolic Computation and Equation Solving
lessonId: calculus-using-python-m2-l2
lessonName: Root Finding and Equation Solving
lessonNumber: 4
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 40
releaseOrder: 4
prerequisites:
  - calculus-using-python-m2-l1
learningObjectives:
  - Implement bisection, Newton–Raphson, and secant methods for root finding.
  - Apply SciPy's `root` and `root_scalar` for one-dimensional root finding.
  - Diagnose convergence failures and choose an appropriate method.
concepts:
  - Bisection method
  - Newton–Raphson method
  - Secant method
  - Convergence
  - Initial bracket
  - Convergence criteria
tags:
  - computational-methods
  - python
  - root-finding
  - numerical-methods
sourceType: authored-courseware
assessmentHints:
  - short-answer
  - problem-solving
***

# Root Finding and Equation Solving

## Overview

Many physics problems reduce to solving an equation $f(x) = 0$ for which no closed-form solution is available. The lesson develops the three classical numerical methods — bisection, Newton–Raphson, and secant — and shows how to use SciPy's `root_scalar` and `root` for one- and multi-dimensional problems. The lesson closes with a discussion of convergence, failure modes, and the choice of an appropriate method. The lesson is the foundation of the numerical methods course in Semester 4 and of computational physics throughout the programme.

## Learning Path

- **What you should already know**: the calculus (differential and integral); Python basics, NumPy, SymPy (Lessons m1-l1 to m2-l1).
- **What this lesson adds**: the three classical root-finding methods; SciPy's `root_scalar` and `root`; convergence diagnosis; the choice of an appropriate method.
- **What later lessons this will unlock**: the ODE solvers of Lesson m2-l3; the numerical methods of Semester 4; the application of root finding to physics problems.

## Core Explanation

### Bisection method

The **bisection method** finds a root of $f$ in an interval $[a, b]$ where $f$ changes sign ($f(a) f(b) < 0$). At each step, the interval is halved:

```python
def bisection(f, a, b, tol=1e-10, max_iter=100):
    assert f(a) * f(b) < 0
    for _ in range(max_iter):
        c = (a + b) / 2
        if abs(f(c)) < tol:
            return c
        if f(a) * f(c) < 0:
            b = c
        else:
            a = c
    return (a + b) / 2
```

The bisection method is guaranteed to converge (if the initial bracket is valid) at a rate of one bit per iteration (the interval halves each time). For tolerance $10^{-10}$, about $34$ iterations are needed. The method is robust but slow.

### Newton–Raphson method

The **Newton–Raphson method** uses the derivative to extrapolate to the root:

$$x_{n+1} = x_n - f(x_n) / f'(x_n).$$

The method converges quadratically (the number of correct digits doubles each step) near a simple root, but may fail if the initial guess is poor or if $f'$ is zero or small.

```python
def newton(f, f_prime, x0, tol=1e-10, max_iter=100):
    x = x0
    for _ in range(max_iter):
        x_new = x - f(x) / f_prime(x)
        if abs(x_new - x) < tol:
            return x_new
        x = x_new
    return x
```

The method is fast but requires the derivative. If the derivative is not available, use the secant method (below) or a finite-difference approximation.

### Secant method

The **secant method** approximates the derivative by a finite difference:

$$x_{n+1} = x_n - f(x_n) \cdot \frac{x_n - x_{n-1}}{f(x_n) - f(x_{n-1})}.$$

The method requires two initial guesses and converges at a rate between bisection and Newton (about $1.618$ — the golden ratio — for simple roots). It is the standard method when the derivative is unavailable but two starting values are easy to provide.

```python
def secant(f, x0, x1, tol=1e-10, max_iter=100):
    for _ in range(max_iter):
        x_new = x1 - f(x1) * (x1 - x0) / (f(x1) - f(x0))
        if abs(x_new - x1) < tol:
            return x_new
        x0, x1 = x1, x_new
    return x1
```

### SciPy's `root_scalar`

SciPy's `scipy.optimize.root_scalar` is a one-dimensional root finder with multiple methods:

```python
from scipy.optimize import root_scalar

result = root_scalar(f, method='bisect', bracket=[a, b], xtol=1e-10)
result = root_scalar(f, method='newton', x0=x0, fprime=f_prime, xtol=1e-10)
result = root_scalar(f, method='secant', x0=x0, xtol=1e-10)
result = root_scalar(f, method='halley', x0=x0, fprime=f_prime, fprime2=f_prime2, xtol=1e-10)
```

The Halley method uses the second derivative and converges cubically. The result object has attributes `root`, `converged`, `iterations`.

### SciPy's `root` (multi-dimensional)

For systems of equations $\vec f(\vec x) = 0$ with $n$ equations in $n$ unknowns, use `scipy.optimize.root`:

```python
from scipy.optimize import root

def f(x):
    return [x[0]**2 + x[1]**2 - 1, x[0] - x[1]]

result = root(f, [0.5, 0.5])
```

The default method is a hybrid Powell method, suitable for most problems. For large sparse systems, use a Newton–Krylov method.

### Convergence criteria

Each iteration produces a new approximation $x_{n+1}$. The iteration terminates when:

- **Absolute convergence**: $|x_{n+1} - x_n| < \epsilon_a$.
- **Relative convergence**: $|x_{n+1} - x_n| / |x_{n+1}| < \epsilon_r$.
- **Function value**: $|f(x_{n+1})| < \epsilon_f$.

A robust stopping criterion combines all three: stop when the absolute AND relative step is small AND the function value is small.

### Convergence rates

The convergence rates of the three methods:

- **Bisection**: linear with rate $1/2$ per iteration. Robust but slow.
- **Secant**: superlinear with rate $\approx 1.618$ (the golden ratio).
- **Newton–Raphson**: quadratic (the error squares each iteration).
- **Halley**: cubic (the error cubes each iteration).

For most physics problems, Newton–Raphson is the best choice if the derivative is available; the secant method is the second choice.

### Failure modes

Root finding can fail in several ways:

- **No root in the interval**: bisection requires a sign change. Verify $f(a) f(b) < 0$.
- **Derivative zero or small**: Newton–Raphson divides by $f'(x_n)$. If $f'$ is zero, the method is stuck.
- **Divergence**: Newton–Raphson can diverge if the initial guess is far from the root. Use a smaller initial guess or switch to bisection.
- **Multiple roots**: at a multiple root, the convergence rate of Newton–Raphson degrades to linear. Use a modified method.
- **Cycle**: the iteration may cycle between two values. Detect by monitoring the iteration.

The robust approach is to use a method that combines the best of all worlds: bisection (for reliability) and Newton or secant (for speed). Brent's method (`method='brentq'` in `root_scalar`) is the standard.

### Worked examples

**Example 1 — Bisection for the cube root of 2.**

Find $x$ such that $x^3 = 2$.

```python
def f(x):
    return x**3 - 2

result = root_scalar(f, method='bisect', bracket=[1, 2], xtol=1e-10)
print(result.root)  # 1.2599210498948732
```

The cube root of 2 is approximately $1.2599$.

**Example 2 — Newton–Raphson for the square root of 2.**

Find $x$ such that $x^2 = 2$.

```python
def f(x):
    return x**2 - 2
def f_prime(x):
    return 2 * x

result = root_scalar(f, method='newton', x0=1.0, fprime=f_prime, xtol=1e-10)
print(result.root)  # 1.4142135623730951
```

Newton's method converges quadratically; with $x_0 = 1$, the iteration is $1, 1.5, 1.41667, 1.41422, 1.41421, \ldots$

**Example 3 — Bracketed method (Brent's) for a root of a transcendental function.**

Find $x$ such that $\cos x = x$ (the Dottie number).

```python
import numpy as np
def f(x):
    return np.cos(x) - x

result = root_scalar(f, method='brentq', bracket=[0, 1], xtol=1e-12)
print(result.root)  # 0.7390851332151607
```

Brent's method is reliable and fast: it combines bisection (for reliability) with the secant method (for speed).

### Multi-dimensional root finding

For systems of equations, the Newton–Raphson method generalises: $\vec x_{n+1} = \vec x_n - J(\vec x_n)^{-1} \vec f(\vec x_n)$, where $J$ is the Jacobian. SciPy's `root` handles this automatically:

```python
def f(x):
    return [x[0]**2 + x[1]**2 - 1, x[0] - x[1] - 0.5]

result = root(f, [0.0, 0.0])
print(result.x)  # [0.983..., 0.483...]
```

For large sparse systems (e.g. from finite-element discretisations), use `root` with `method='gmres'` or `method='bicgstab'`.

### Common pitfalls

- **Bad initial guess**: Newton–Raphson can diverge or converge to the wrong root if the initial guess is poor. Plot the function first.
- **No sign change**: bisection requires $f(a) f(b) < 0$. If the function touches zero without changing sign (a double root), bisection will fail.
- **Vanishing derivative**: Newton–Raphson divides by $f'$. If $f' = 0$ at some point, the method is stuck. Use secant or bisection.
- **Multiple roots**: at a multiple root, the convergence rate of Newton–Raphson degrades. Use a modified method.
- **Round-off**: the iteration may converge to a value that is not the true root due to round-off. The tolerance should be larger than the machine epsilon.

### Key Ideas

- Bisection is robust but slow; Newton–Raphson is fast but needs the derivative; secant is in between.
- Brent's method combines bisection and secant for reliability and speed.
- SciPy's `root_scalar` and `root` are the standard tools for one- and multi-dimensional root finding.
- Convergence diagnosis is essential: a method can converge to the wrong root or fail entirely.
- The choice of method depends on the availability of the derivative, the smoothness of the function, and the quality of the initial guess.

## Worked Examples

### Example 1 — Root of $x = \tan x$ (the smallest positive root).

Find the smallest positive solution of $x = \tan x$.

```python
import numpy as np
def f(x):
    return np.tan(x) - x

# The first positive root is between 4 and 5
result = root_scalar(f, method='brentq', bracket=[4, 4.5], xtol=1e-12)
print(result.root)  # 4.493409457909064
```

This is the smallest positive eigenvalue of the square-well quantum mechanics problem (with appropriate boundary conditions).

### Example 2 — Multi-dimensional root: equilibrium of a 2-spring system.

Two springs of stiffness $k_1$ and $k_2$ are attached to masses $m_1$ and $m_2$ in series. The equilibrium positions satisfy:

$$k_1 x_1 = k_2 x_2, \quad x_1 + x_2 = L.$$

Solve for $x_1$ and $x_2$ given $L$, $k_1$, $k_2$.

```python
from sympy import symbols, solve, Rational
L, k1, k2 = symbols('L k1 k2', positive=True)
x1, x2 = symbols('x1 x2')
sol = solve([k1*x1 - k2*x2, x1 + x2 - L], [x1, x2])
print(sol)  # {x1: k2*L/(k1 + k2), x2: k1*L/(k1 + k2)}
```

The solution is $x_1 = k_2 L / (k_1 + k_2)$ and $x_2 = k_1 L / (k_1 + k_2)$, as expected.

## Common Misconceptions

- **"Newton–Raphson always converges."** No. It can diverge or converge to the wrong root.
- **"Bisection is always slow."** It is reliable but not slow for moderate accuracy. For $10^{-10}$ tolerance, about $34$ iterations are needed.
- **"Secant is worse than Newton–Raphson."** It is slightly slower in convergence rate but does not require the derivative, which is often the more important practical consideration.
- **"The root is unique."** Many functions have multiple roots. Always check the function's shape (by plotting) before root finding.
- **"Convergence means the method worked."** Convergence to a value is necessary but not sufficient; verify that $f(x^*) \approx 0$.

## Connections

- Root finding is the foundation of many numerical methods, including the Newton–Raphson method for optimisation and the implicit methods for differential equations.
- The numerical solution of boundary-value problems in physics often reduces to a large system of nonlinear equations, solved by Newton–Raphson.
- The quantum mechanics of bound states reduces to finding the eigenvalues of a differential operator, which in turn reduces to root finding (the shooting method).
- SciPy's `root_scalar` and `root` are the workhorses of scientific computing in Python.

## Quick Check

1. Implement the bisection method from scratch and use it to find the cube root of 5.
2. Implement the Newton–Raphson method from scratch and use it to find the solution of $x^3 - 6 x^2 + 11 x - 6 = 0$ starting from $x_0 = 0$.
3. Use `root_scalar` to find the solution of $\cos x = x$ to 12 decimal places.
4. Use `root` to solve the system $x^2 + y^2 = 1$, $x - y = 0.5$.
5. What are the convergence rates of the bisection, secant, Newton–Raphson, and Halley methods?

## Takeaway

- Bisection is robust; Newton–Raphson is fast; secant is in between.
- Brent's method is the standard for one-dimensional problems.
- SciPy's `root_scalar` and `root` are the workhorses of scientific computing.
- Convergence diagnosis is essential: a method can converge to the wrong root or fail.
- The choice of method depends on the derivative, the smoothness, and the initial guess.
