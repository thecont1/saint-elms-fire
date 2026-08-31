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
lessonId: numerical-methods-m1-l2
lessonName: Interpolation — Lagrange and Newton's Divided Differences
lessonNumber: 2
moduleNumber: 1
semesterNumber: 4
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - numerical-methods-m1-l1
learningObjectives:
  - State the Lagrange interpolation formula and apply it.
  - Use Newton's divided differences to build an interpolating polynomial.
  - Estimate the error of polynomial interpolation.
  - Recognise the Runge phenomenon and how to avoid it.
concepts:
  - Polynomial interpolation
  - Lagrange polynomial
  - Divided differences
  - Newton form
  - Interpolation error
  - Runge phenomenon
tags:
  - computational-methods
  - numerical-analysis
  - interpolation
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Interpolation — Lagrange and Newton's Divided Differences

## Overview
Given $n + 1$ data points $(x_i, y_i)$, the *interpolation problem* is to find a polynomial of degree $\le n$ that passes through all of them. Such a polynomial exists and is unique. Two common forms are the *Lagrange form* (easy to write down but hard to update) and the *Newton form* (uses divided differences, easy to update by adding a new point). This lesson develops both, the error formula, and the pitfalls of high-degree interpolation.

## Learning Path
- What you should already know: polynomials, basic algebra, Taylor's theorem with remainder.
- What this lesson adds: polynomial interpolation, the two common forms, and the error.
- What it unlocks: numerical integration (next module), numerical ODEs, and curve fitting.

## Core Explanation
**The interpolation problem.** Given distinct points $x_0, x_1, \ldots, x_n$ and values $y_0, y_1, \ldots, y_n$, find a polynomial $p(x)$ of degree $\le n$ with $p(x_i) = y_i$ for all $i$. Existence and uniqueness follow from the Vandermonde determinant being nonzero for distinct $x_i$.

**Lagrange form.** The interpolating polynomial is

$$p(x) = \sum_{i=0}^{n} y_i L_i(x), \quad L_i(x) = \prod_{j \ne i} \frac{x - x_j}{x_i - x_j}.$$

$L_i(x)$ is the *Lagrange basis polynomial*: $L_i(x_i) = 1$ and $L_i(x_j) = 0$ for $j \ne i$. The polynomial $p$ is the unique degree-$\le n$ polynomial passing through all $(x_i, y_i)$.

**Lagrange interpolation example.** Through $(0, 1), (1, 3), (2, 7)$: $L_0(x) = (x-1)(x-2)/((0-1)(0-2)) = (x-1)(x-2)/2$. $L_1(x) = x(x-2)/((1-0)(1-2)) = -x(x-2)$. $L_2(x) = x(x-1)/((2-0)(2-1)) = x(x-1)/2$. $p(x) = L_0 + 3 L_1 + 7 L_2 = (x-1)(x-2)/2 - 3 x(x-2) + 7 x(x-1)/2$. Simplifying: $p(x) = x^2 + x + 1$. ✓

**Properties.** $p$ is unique. $p$ is degree $\le n$. If the data come from a function $f$, then $p(x_i) = f(x_i)$ but $p(x) \ne f(x)$ in general (only equal at the nodes).

**Divided differences.** The *first divided difference* of $f$ at $(x_i, x_{i+1})$ is

$$f[x_i, x_{i+1}] = \frac{f(x_{i+1}) - f(x_i)}{x_{i+1} - x_i}.$$

The *second divided difference* is

$$f[x_i, x_{i+1}, x_{i+2}] = \frac{f[x_{i+1}, x_{i+2}] - f[x_i, x_{i+1}]}{x_{i+2} - x_i},$$

and so on. The divided differences are computed in a triangular table.

**Newton form of the interpolating polynomial.**

$$p(x) = f[x_0] + f[x_0, x_1] (x - x_0) + f[x_0, x_1, x_2] (x - x_0)(x - x_1) + \cdots + f[x_0, \ldots, x_n] (x - x_0) \cdots (x - x_{n-1}).$$

The coefficients are the divided differences in the table. The Newton form is useful because adding a new point adds one new term; the Lagrange form would require recomputing all basis polynomials.

**Relation to Taylor.** If the nodes are equally spaced and centred, the Newton form reduces to the Taylor series (the divided differences become divided powers of $h$, related to the derivatives at a base point).

**Interpolation error.** If $f$ has $n + 1$ continuous derivatives and $p$ is the degree-$n$ interpolating polynomial, then for any $x$,

$$f(x) - p(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \prod_{i=0}^{n} (x - x_i),$$

for some $\xi$ between the smallest and largest $x_i$. This is the interpolation-error formula; it is the analog of Taylor's theorem for polynomial interpolation.

**Error bound.** $|f(x) - p(x)| \le \frac{\max |f^{(n+1)}|}{(n+1)!} \prod_{i=0}^{n} |x - x_i|$. The product $\prod (x - x_i)$ measures how far $x$ is from the nodes. Inside the convex hull of the nodes, the error is small; outside, it can be large.

**Runge phenomenon.** For fixed equally spaced nodes, the error of polynomial interpolation does not go to zero as $n \to \infty$ — in fact, it diverges near the ends of the interval. This is Runge's phenomenon. Example: interpolating $f(x) = 1/(1 + 25 x^2)$ at $n + 1$ equally spaced points on $[-1, 1]$ gives wild oscillations as $n$ grows.

**Chebyshev nodes.** To avoid Runge, use Chebyshev nodes: $x_k = \cos((2 k + 1) \pi/(2(n+1)))$ for $k = 0, \ldots, n$. These are concentrated near the ends of the interval, where the Runge oscillations are worst. The interpolation error for Chebyshev nodes is much smaller and decreases as $n$ grows.

**Piecewise polynomial interpolation.** Instead of a single high-degree polynomial, use several low-degree polynomials on subintervals. *Linear interpolation*: connect adjacent data points with straight lines. *Cubic spline*: piecewise cubic with continuous first and second derivatives. Both avoid the Runge phenomenon and are widely used.

**Hermite interpolation.** Matches both the function value and the derivative at the nodes. Useful when derivatives are known (e.g. from physics) or when smoothness is desired.

**Barycentric form.** A numerically stable form of Lagrange interpolation:

$$p(x) = \frac{\sum_i y_i w_i / (x - x_i)}{\sum_i w_i / (x - x_i)}, \quad w_i = \frac{1}{\prod_{j \ne i} (x_i - x_j)}.$$

Numerically robust; used in libraries.

**Extrapolation.** Evaluating the interpolating polynomial outside the range of the data. Dangerous — errors grow rapidly. Used in Romberg integration and in numerical ODEs (e.g. Richardson extrapolation).

**Richardson extrapolation.** A technique to improve the accuracy of a numerical method by combining results from different step sizes. If $A(h) = A + C h^p + O(h^{p+1})$, then $A^*(h) = (2^p A(h/2) - A(h))/(2^p - 1)$ eliminates the $h^p$ term, giving $O(h^{p+1})$. Repeat to get arbitrary accuracy (Romberg integration).

**Applications in physics.**
- Tabulated values of physical constants are interpolated.
- Lookup tables for special functions (sin, log, etc.) use interpolation.
- Numerical integration uses interpolating polynomials (Newton–Cotes formulas).
- Numerical ODEs use polynomial interpolation of past values.

**Why polynomials?** Polynomials are easy to evaluate, differentiate, and integrate. They form a linear space (any linear combination of polynomials is a polynomial). They are the natural choice for interpolation on a small number of points.

**Choice of nodes.** For polynomial interpolation, the Chebyshev nodes are optimal. For splines, equal spacing is fine. For applications where the function is smooth, equally spaced nodes work well. The choice depends on the function's behaviour and the desired accuracy.

**Spline interpolation.** A cubic spline is a piecewise cubic polynomial with continuous value, first derivative, and second derivative at the knots. It avoids the Runge phenomenon, gives a smooth interpolant, and is the workhorse of computer graphics and CAD.

**B-splines.** A basis for the space of splines of a given degree and knot sequence. Used in computer graphics, finite-element analysis, and geometric modelling.

**Trigonometric interpolation.** For periodic data, use trigonometric polynomials instead of ordinary polynomials. The DFT and FFT compute these. (Covered in detail in *Waves and Optics* in a different context.)

## Key Ideas
- Polynomial interpolation is unique and given by the Lagrange or Newton form.
- Divided differences are the building blocks of the Newton form.
- Interpolation error: $f - p = f^{(n+1)}(\xi)/(n+1)! \prod (x - x_i)$.
- Runge phenomenon: high-degree interpolation with equal spacing can diverge.
- Chebyshev nodes avoid Runge; splines are the practical alternative.

## Worked Examples
**Example 1 — Lagrange through three points.** Through $(0, 1), (1, 3), (2, 7)$: as computed above, $p(x) = x^2 + x + 1$.

**Example 2 — Divided difference table.**

| $x_i$ | $f(x_i)$ | $f[,]$ | $f[,,]$ |
|-------|---------|--------|---------|
| 0 | 1 |  |  |
| 1 | 3 | 2 |  |
| 2 | 7 | 4 | 1 |

So $f[0] = 1, f[0, 1] = 2, f[1, 2] = 4, f[0, 1, 2] = 1$. Newton form: $p(x) = 1 + 2(x - 0) + 1 (x - 0)(x - 1) = 1 + 2x + x^2 - x = x^2 + x + 1$. ✓

**Example 3 — Error estimate.** $f(x) = \sin x$, $p$ is the degree-3 interpolant at $0, \pi/6, \pi/4, \pi/3$. $|f^{(4)}(x)| = |\sin x| \le 1$. Error bound at $x = \pi/2$: $|f - p| \le (1/4!) (x)(x - \pi/6)(x - \pi/4)(x - \pi/3) = (1/24)(1.57)(1.04)(0.785)(0.524) \approx 0.028$. The actual error is about $0.0001$ — much smaller than the bound.

**Example 4 — Runge phenomenon.** $f(x) = 1/(1 + 25 x^2)$ on $[-1, 1]$, interpolated with 11 equally spaced nodes. The interpolating polynomial oscillates wildly near $x = \pm 1$, with error $\sim 5$. With Chebyshev nodes, the error is $< 10^{-3}$ for the same number of points.

## Common Misconceptions
- **"Higher degree = better interpolation."** No — for fixed nodes, higher degree can give worse results (Runge).
- **"The interpolating polynomial equals the function."** Only at the nodes; in between, it approximates.
- **"Lagrange and Newton are different polynomials."** They are the same polynomial, just in different forms.
- **"Divided differences are derivatives."** They are related but not equal: $f[x_0, \ldots, x_n] = f^{(n)}(\xi)/n!$ for some $\xi$ (a consequence of the mean-value theorem for divided differences).

## Connections
Interpolation is the foundation of numerical integration (Newton–Cotes, Gaussian quadrature), numerical ODEs (multistep methods), and curve fitting. Chebyshev nodes reappear in Gaussian quadrature. Splines are essential in computer graphics, finite-element analysis, and data fitting.

## Quick Check
1. State the Lagrange interpolation formula.
2. What is a divided difference?
3. State the interpolation-error formula.
4. What is the Runge phenomenon?
5. Apply Lagrange interpolation to the points $(0, 1), (1, 2), (2, 5)$.

## Takeaway
- Polynomial interpolation is unique; Lagrange and Newton forms.
- Divided differences are the Newton-form coefficients.
- Interpolation error: $f - p = f^{(n+1)}(\xi)/(n+1)! \prod (x - x_i)$.
- Runge phenomenon: equal spacing can give divergent high-degree interpolation.
- Chebyshev nodes or splines avoid the Runge phenomenon.
