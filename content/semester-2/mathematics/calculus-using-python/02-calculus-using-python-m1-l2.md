***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: calculus-using-python
courseName: Calculus using Python
moduleId: calculus-using-python-module-1
moduleName: Python Environment and Numerical Differentiation
lessonId: calculus-using-python-m1-l2
lessonName: Numerical Integration and Visualisation
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 40
releaseOrder: 2
prerequisites:
  - calculus-using-python-m1-l1
learningObjectives:
  - Implement the trapezoidal rule and Simpson's rule for numerical integration.
  - Use SciPy's `quad` for high-accuracy integration.
  - Visualise integrals as the area under a curve.
concepts:
  - Trapezoidal rule
  - Simpson's rule
  - SciPy quad
  - Adaptive quadrature
  - Monte Carlo integration
  - Convergence rate
tags:
  - computational-methods
  - python
  - numerical-integration
  - quadrature
sourceType: authored-courseware
assessmentHints:
  - short-answer
  - problem-solving
***

# Numerical Integration and Visualisation

## Overview

Numerical integration computes the definite integral $\int_a^b f(x)\, dx$ as a numerical value when an antiderivative is not available. The lesson develops the trapezoidal rule and Simpson's rule from first principles, then introduces SciPy's high-accuracy `quad` function. The lesson applies the methods to standard physics integrals (Gaussian, oscillatory, probability) and visualises the integral as the area under the curve. The lesson closes with Monte Carlo integration, a powerful method for high-dimensional integrals. The lesson is the gateway to the numerical methods course in Semester 4 and to the application of calculus in research.

## Learning Path

- **What you should already know**: definite integrals and the fundamental theorem of calculus (Integral Calculus Module 2); Python basics and NumPy (Lesson m1-l1).
- **What this lesson adds**: the trapezoidal rule and Simpson's rule; SciPy's `quad`; the convergence rate of numerical integration; Monte Carlo integration; visualisation of the integral as area.
- **What later lessons this will unlock**: symbolic computation in Lesson m2-l1; root finding in Lesson m2-l2; ODE solvers in Lesson m2-l3; advanced numerical methods in Semester 4.

## Core Explanation

### The trapezoidal rule

The **trapezoidal rule** approximates $\int_a^b f(x)\, dx$ by the area of a chain of trapezoids:

$$\int_a^b f(x)\, dx \approx \frac{h}{2} [f(x_0) + 2 f(x_1) + 2 f(x_2) + \ldots + 2 f(x_{n-1}) + f(x_n)],$$

where $h = (b - a)/n$ and $x_i = a + i h$. The error is $O(h^2)$ for smooth $f$, and halving $h$ reduces the error by a factor of 4 (i.e. doubling $n$ quarters the error).

The trapezoidal rule is the simplest numerical integrator. It is exact for linear functions (because the trapezoid exactly matches the area under a line).

In Python:

```python
import numpy as np

def trapezoidal(f, a, b, n):
    x = np.linspace(a, b, n + 1)
    y = f(x)
    h = (b - a) / n
    return h * (0.5 * y[0] + 0.5 * y[-1] + np.sum(y[1:-1]))
```

### Simpson's rule

**Simpson's rule** uses parabolic segments (passing through three points) to approximate the integrand. With $n$ even:

$$\int_a^b f(x)\, dx \approx \frac{h}{3} [f(x_0) + 4 f(x_1) + 2 f(x_2) + 4 f(x_3) + \ldots + 4 f(x_{n-1}) + f(x_n)].$$

The error is $O(h^4)$, a substantial improvement over the trapezoidal rule. For a smooth integrand, Simpson's rule is much more accurate for the same $n$.

In Python:

```python
def simpson(f, a, b, n):
    assert n % 2 == 0
    x = np.linspace(a, b, n + 1)
    y = f(x)
    h = (b - a) / n
    return h / 3 * (y[0] + y[-1] + 4 * np.sum(y[1:-1:2]) + 2 * np.sum(y[2:-1:2]))
```

### SciPy's `quad`

SciPy's `scipy.integrate.quad` is a high-accuracy adaptive integrator based on the Gauss–Kronrod rule. The usage:

```python
from scipy.integrate import quad

result, error = quad(f, a, b)
```

The function returns the integral `result` and an estimate of the absolute error `error`. The default accuracy is high (about 14 significant digits for smooth integrands).

For improper integrals (singularities at the endpoints or at infinity), `quad` accepts `points` (interior singularities) and `limit` (subdivisions for oscillatory integrals). For example, $\int_0^\infty e^{-x^2} dx = \sqrt{\pi}/2$ is computed with `quad(np.exp(-x**2), 0, np.inf)`.

### Adaptive quadrature

**Adaptive quadrature** refines the subdivision in regions where the integrand varies rapidly. The algorithm estimates the error on each subinterval and subdivides further where the error is too large. SciPy's `quad` is adaptive; it achieves high accuracy with few function evaluations.

The `quad` function accepts an `epsabs` (absolute error tolerance) and `epsrel` (relative error tolerance). The default values are appropriate for most purposes; tighter tolerances require more function evaluations.

### Gauss quadrature

**Gauss–Legendre quadrature** chooses the nodes optimally (not equally spaced) to maximise the degree of precision. With $n$ nodes, the rule is exact for polynomials of degree up to $2 n - 1$. The standard Gauss–Legendre nodes and weights are tabulated or computed by the Golub–Welsch algorithm.

In SciPy, Gauss–Legendre quadrature is available via `scipy.integrate.fixed_quad`. The usage:

```python
from scipy.integrate import fixed_quad

result, error = fixed_quad(f, a, b, n=10)
```

The function computes the integral using $n$-point Gauss–Legendre quadrature. For smooth integrands, the convergence is much faster than the trapezoidal or Simpson's rule.

### Convergence comparison

For a smooth integrand, the convergence rate of the various methods:

- Trapezoidal: $O(h^2)$. Halving $h$ quarters the error.
- Simpson's: $O(h^4)$. Halving $h$ reduces the error by $16$.
- Gauss–Legendre with $n$ nodes: $O(h^{2n})$. Exponential convergence for analytic integrands.
- Adaptive quadrature: usually close to Gauss–Legendre, with the subdivision chosen automatically.

For most practical purposes, SciPy's `quad` is the best choice. The trapezoidal and Simpson's rules are useful for pedagogical purposes and for problems where the integrand is cheap and high accuracy is not required.

### Monte Carlo integration

**Monte Carlo integration** computes the integral by random sampling. The basic formula for $\int_a^b f(x)\, dx$ is

$$\int_a^b f(x)\, dx \approx (b - a) \cdot \frac{1}{N} \sum_{i=1}^N f(x_i),$$

where $x_i$ are uniform random samples in $[a, b]$. The error is $O(1/\sqrt{N})$, independent of the dimension of the integral.

Monte Carlo is the method of choice for high-dimensional integrals (e.g. integrals over the phase space of a many-particle system, lattice QCD integrals, Bayesian posterior integrals). The error decreases slowly with $N$, but the method is embarrassingly parallel and easy to implement.

In Python:

```python
import numpy as np

def monte_carlo_1d(f, a, b, N):
    x = np.random.uniform(a, b, N)
    return (b - a) * np.mean(f(x))
```

The standard error is $(b - a) \sigma / \sqrt{N}$, where $\sigma$ is the standard deviation of $f(x_i)$. Confidence intervals are computed from the standard error.

### Importance sampling

**Importance sampling** draws samples from a distribution $p(x)$ that approximates the integrand, and uses

$$\int f(x) dx = \int \frac{f(x)}{p(x)} p(x) dx \approx \frac{1}{N} \sum_{i=1}^N \frac{f(x_i)}{p(x_i)},$$

where $x_i \sim p(x)$. The variance is reduced when $p(x)$ is close to $f(x)$. Importance sampling is the basis of the Markov-chain Monte Carlo methods and of many high-dimensional integration techniques.

### Worked examples

**Example 1 — Gaussian integral.**

Compute $\int_0^1 e^{-x^2} dx$ using `quad`.

```python
from scipy.integrate import quad
import numpy as np

result, error = quad(lambda x: np.exp(-x**2), 0, 1)
print(f"Integral = {result:.10f}, error estimate = {error:.2e}")
```

The result is approximately $0.7468241$, with an error estimate of order $10^{-14}$. The exact value is related to the error function: $\int_0^1 e^{-x^2} dx = (\sqrt{\pi}/2) \text{erf}(1) \approx 0.7468241$.

**Example 2 — Convergence of the trapezoidal rule.**

Compute $\int_0^\pi \sin x\, dx = 2$ using the trapezoidal rule with $n = 2, 4, 8, 16, 32, 64$ subintervals.

```python
import numpy as np

def f(x):
    return np.sin(x)

for n in [2, 4, 8, 16, 32, 64]:
    x = np.linspace(0, np.pi, n + 1)
    h = np.pi / n
    integral = h * (0.5 * f(x[0]) + 0.5 * f(x[-1]) + np.sum(f(x[1:-1])))
    error = abs(integral - 2)
    print(f"n = {n}, integral = {integral:.10f}, error = {error:.2e}")
```

The error decreases by a factor of about $4$ each time $n$ doubles, confirming the $O(h^2)$ convergence.

**Example 3 — Monte Carlo integration.**

Compute $\int_0^1 e^{-x^2} dx$ using Monte Carlo with $N = 10^4, 10^5, 10^6$ samples.

```python
import numpy as np

def f(x):
    return np.exp(-x**2)

for N in [10**4, 10**5, 10**6]:
    x = np.random.uniform(0, 1, N)
    integral = np.mean(f(x))
    print(f"N = {N}, integral = {integral:.6f}, error ≈ {1 / np.sqrt(N):.4f}")
```

The error decreases as $1/\sqrt{N}$, independent of the smoothness of the integrand.

### Visualisation

The integral can be visualised as the area under the curve. Matplotlib can fill the area between the curve and the $x$-axis:

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import quad

def f(x):
    return np.exp(-x**2)

x = np.linspace(0, 2, 200)
y = f(x)
fig, ax = plt.subplots()
ax.plot(x, y, 'b-', label='$e^{-x^2}$')
ax.fill_between(x, 0, y, alpha=0.3, label='area = integral')
ax.set_xlabel('x')
ax.set_ylabel('y')
ax.legend()
plt.savefig('integral.png', dpi=150)
plt.show()
```

The shaded area is the integral of $f$ from $0$ to $2$. The result is approximately $0.882$.

### Common pitfalls

- **Confusing trapezoidal and Simpson's rules**: the trapezoidal rule is $O(h^2)$; Simpson's rule is $O(h^4)$. For the same $n$, Simpson's is much more accurate.
- **Using $n$ odd in Simpson's rule**: Simpson's rule requires $n$ even. If $n$ is odd, add one more subinterval.
- **Confusing the integrand with its antiderivative**: numerical integration computes the area, not the antiderivative.
- **Monte Carlo without error estimate**: the error is the most important quantity; always report it.
- **Forgetting the limits**: the integrand is evaluated at the limits $a$ and $b$ in the trapezoidal and Simpson's rules.

### Key Ideas

- The trapezoidal rule: $O(h^2)$, simple, accurate for linear integrands.
- Simpson's rule: $O(h^4)$, accurate for quadratic and cubic integrands.
- SciPy's `quad`: high-accuracy adaptive quadrature, the workhorse of numerical integration.
- Gauss–Legendre quadrature: optimal nodes, exponential convergence for analytic integrands.
- Monte Carlo integration: $O(1/\sqrt{N})$, the method of choice for high-dimensional integrals.
- Importance sampling: variance reduction by sampling from a distribution that approximates the integrand.

## Worked Examples

### Example 1 — Gaussian integral

Compute $\int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}$ using `quad`.

```python
from scipy.integrate import quad
import numpy as np

result, error = quad(lambda x: np.exp(-x**2), -np.inf, np.inf)
print(f"Integral = {result:.10f}, error = {error:.2e}, expected = {np.sqrt(np.pi):.10f}")
```

The result is $\sqrt{\pi} \approx 1.7724539$, with an error of order $10^{-11}$.

### Example 2 — Oscillatory integral

Compute $\int_0^{10 \pi} \sin(x) / x\, dx$ (the sine integral $\text{Si}(10 \pi) \approx 1.5623$).

```python
from scipy.integrate import quad
import numpy as np

result, error = quad(lambda x: np.sin(x) / x if x > 0 else 1, 0, 10 * np.pi, limit=200)
print(f"Si(10π) = {result:.6f}, error = {error:.2e}")
```

The function is oscillatory, so we increase `limit` to allow more subdivisions. The result is approximately $1.5623$.

### Example 3 — 2D Monte Carlo

Compute $\iint_{[0,1]^2} e^{-(x^2 + y^2)} dx\, dy$ using Monte Carlo with $N = 10^6$ samples.

```python
import numpy as np

N = 10**6
x = np.random.uniform(0, 1, N)
y = np.random.uniform(0, 1, N)
integral = np.mean(np.exp(-(x**2 + y**2)))
error = np.std(np.exp(-(x**2 + y**2))) / np.sqrt(N)
print(f"Integral ≈ {integral:.6f} ± {error:.4f}")
```

The result is approximately $0.5577 \pm 0.0004$, in agreement with the exact value $(\text{erf}(1))^2 / 4 \approx 0.5577$.

## Common Misconceptions

- **"The trapezoidal rule is always inaccurate."** No. It is $O(h^2)$, accurate for many integrands, and very efficient for smooth functions.
- **"Simpson's rule is the most accurate."** It is $O(h^4)$ and very accurate, but Gauss quadrature is better for analytic integrands.
- **"Monte Carlo is always slow."** It is slow per function evaluation, but it is embarrassingly parallel. For high-dimensional integrals, it is often the only practical method.
- **"`quad` is exact."** It is very accurate, but not exact. The error estimate is a bound, not a guarantee.
- **"The error of a numerical method is always positive."** No. The error can be positive or negative. The absolute value is what matters.

## Connections

- Numerical integration is the foundation of the numerical solution of differential equations.
- SciPy's `quad` is the workhorse of scientific computing in Python.
- Monte Carlo integration is the basis of the Markov-chain Monte Carlo methods used in Bayesian statistics and lattice field theory.
- The error analysis is a general theme in numerical analysis.
- The visualisation of integrals as areas is the gateway to intuitive understanding of calculus.

## Quick Check

1. Implement the trapezoidal rule and Simpson's rule for a given function $f$ and interval $[a, b]$.
2. Compute $\int_0^1 \sin(x^2) dx$ using `quad`. Compare to a reference value.
3. Use Monte Carlo to compute $\int_0^1 x^2 (1 - x)^2 dx = 1/30$. How many samples are needed for $0.1\%$ accuracy?
4. What is the convergence rate of Gauss–Legendre quadrature for an analytic integrand?
5. Plot $f(x) = e^{-x^2}$ from $-3$ to $3$ and shade the area under the curve from $0$ to $1$.

## Takeaway

- The trapezoidal rule is $O(h^2)$; Simpson's rule is $O(h^4)$.
- SciPy's `quad` is the standard tool for high-accuracy numerical integration.
- Gauss–Legendre quadrature is optimal for analytic integrands.
- Monte Carlo integration is the method of choice for high-dimensional integrals.
- Importance sampling reduces the variance by sampling from a distribution that approximates the integrand.
- The visualisation of integrals as areas is the gateway to intuitive understanding.
