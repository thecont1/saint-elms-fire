***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: computational-methods
subjectName: Computational Methods
courseId: numerical-methods
courseName: Numerical Methods
moduleId: numerical-methods-module-2
moduleName: Numerical Calculus
lessonId: numerical-methods-m2-l2
lessonName: Numerical Integration — Trapezoidal and Simpson's Rules
lessonNumber: 5
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - numerical-methods-m2-l1
  - real-analysis-m3-l3
learningObjectives:
  - Derive the trapezoidal rule and state its error.
  - Derive Simpson's rule and state its error.
  - Apply composite versions to integrate over intervals.
  - Choose step sizes for a given error tolerance.
concepts:
  - Trapezoidal rule
  - Simpson's rule
  - Composite rule
  - Error analysis
  - Newton–Cotes formulas
  - Degree of precision
tags:
  - computational-methods
  - numerical-analysis
  - integration
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Numerical Integration — Trapezoidal and Simpson's Rules

## Overview
Most definite integrals do not have closed-form antiderivatives. The error function $\int_0^x e^{-t^2} dt$ is the classic example. Numerical integration (or *quadrature*) approximates the integral by weighted sums of function values. The simplest rules are the trapezoidal (linear interpolation) and Simpson's (parabolic interpolation). The composite versions handle a partition of the interval, with errors of order $h^2$ and $h^4$ respectively. This lesson develops the rules, their error analysis, and practical guidance.

## Learning Path
- What you should already know: definite integrals, polynomial interpolation, Taylor's theorem.
- What this lesson adds: the standard quadrature rules, their error analysis, and how to choose $h$.
- What it unlocks: Gaussian quadrature, Romberg integration, and Monte Carlo methods (next lesson), and the numerical solution of physics problems.

## Core Explanation
**The problem.** Approximate $I = \int_a^b f(x)\, dx$ given a function $f$ that may be expensive to evaluate or have no closed-form antiderivative. We use weighted sums $I \approx \sum w_i f(x_i)$ at chosen nodes $x_i$.

**Trapezoidal rule.** Approximate $f$ by the linear function through $(a, f(a))$ and $(b, f(b))$:

$$T = \frac{b - a}{2} (f(a) + f(b)).$$

The error is $-((b - a)^3/12) f''(\xi)$ for some $\xi \in (a, b)$ — derived by integrating the interpolation error.

**Geometric meaning.** The area under $f$ is approximated by the area of a trapezoid (the linear interpolant). The trapezoid lies under the curve if $f$ is concave up, over it if concave down.

**Simpson's rule.** Approximate $f$ by the parabola through $(a, f(a))$, $((a + b)/2, f((a + b)/2))$, and $(b, f(b))$:

$$S = \frac{b - a}{6} \left[f(a) + 4 f\left(\frac{a + b}{2}\right) + f(b)\right].$$

The error is $-(b - a)^5/90 \cdot f^{(4)}(\xi)$ — order $h^4$ (where $h = (b - a)/2$ for Simpson's). The factor of $4$ in front of the midpoint is a hallmark of Simpson's rule.

**Why Simpson is $O(h^4)$.** Simpson's rule is exact for polynomials up to degree $3$ (not just degree $1$ as the trapezoidal). This is its *degree of precision*. The error involves $f^{(4)}$, the next derivative.

**Composite trapezoidal.** Divide $[a, b]$ into $n$ equal subintervals of width $h = (b - a)/n$, with nodes $x_i = a + i h$. The composite rule is

$$T_n = h \left[\frac{f(a) + f(b)}{2} + \sum_{i=1}^{n-1} f(x_i)\right] = \frac{h}{2} [f(a) + 2 f(x_1) + \ldots + 2 f(x_{n-1}) + f(b)].$$

Error: $E_T = -\frac{(b - a)}{12} h^2 f''(\xi) = O(h^2)$.

**Composite Simpson.** Use Simpson's rule on each pair of subintervals. Requires $n$ even (so $n/2$ parabolas). The composite rule is

$$S_n = \frac{h}{3} [f(a) + 4 f(x_1) + 2 f(x_2) + 4 f(x_3) + \ldots + 4 f(x_{n-1}) + f(b)],$$

with the pattern $1, 4, 2, 4, 2, \ldots, 4, 1$ for the weights.

Error: $E_S = -\frac{(b - a)}{180} h^4 f^{(4)}(\xi) = O(h^4)$.

**Degree of precision.** A quadrature rule has *degree of precision* $d$ if it integrates all polynomials of degree $\le d$ exactly. Trapezoidal has $d = 1$; Simpson's has $d = 3$. Higher $d$ usually means smaller error for smooth functions.

**Newton–Cotes formulas.** A family of quadrature rules based on integrating Lagrange interpolation polynomials through equally spaced nodes. Trapezoidal ($n = 1$ panel) and Simpson's ($n = 2$ panels) are the first two. Higher-order Newton–Cotes: Boole's rule ($n = 4$), etc. High-order Newton–Cotes are usually not used because of numerical instability.

**Why composite rules?** The error in a single-panel rule depends on the higher derivatives of $f$, which can be large. By using many small panels, the error is reduced dramatically. Composite trapezoidal is $O(h^2)$, composite Simpson is $O(h^4)$, etc.

**Achieving a tolerance.** For the trapezoidal rule with error tolerance $\varepsilon$ on $\int_a^b f$, choose $h$ such that

$$|E_T| = \frac{(b - a)^3}{12 n^2} \max |f''| \le \varepsilon,$$

i.e.

$$n \ge \sqrt{\frac{(b - a)^3 \max |f''|}{12 \varepsilon}}.$$

For Simpson's,

$$n \ge \left(\frac{(b - a)^5 \max |f^{(4)}|}{180 \varepsilon}\right)^{1/4}.$$

Simpson needs much fewer panels for the same accuracy.

**Richardson extrapolation.** Combines trapezoidal at $h$ and $h/2$ to eliminate the $O(h^2)$ term:

$$T^* = \frac{4 T(h/2) - T(h)}{3} = I + O(h^4).$$

This is the *Romberg* path: $T_{k+1} = (4 T_k - T_{k-1})/3$ etc., giving successively higher accuracy. Romberg integration builds a table of extrapolations.

**Practical tips.**
- Plot $f$ first. The behaviour of $f$ tells you what rule and step size to use.
- Estimate the error by comparing $T(h)$ and $T(h/2)$ (or $S(h)$ and $S(h/2)$).
- Use Simpson's if $f$ is smooth; trapezoidal if $f$ has kinks or oscillations.
- For improper integrals, split or transform.

**Multidimensional integrals.** Trapezoidal and Simpson extend by tensor product to 2D and 3D, but the number of function evaluations grows exponentially. For moderate dimensions, use Monte Carlo methods (next lesson).

**Singular integrals.** Trapezoidal and Simpson fail if $f$ is singular. Use special methods: change of variables, subtraction of the singularity, or specialised quadrature (Gauss–Jacobi for $\int (1 - x)^\alpha (1 + x)^\beta f(x) dx$).

**Adaptive quadrature.** Adaptively choose the subinterval sizes: use a coarse grid, estimate the error on each subinterval, refine where the error is large. The standard algorithm: subdivide the interval, apply the rule on each half, and accept when the combined error is below the tolerance. The implementation is recursive.

**Adaptive Simpson's quadrature.** A specific adaptive algorithm: apply Simpson on $[a, b]$ and on $[a, c]$ and $[c, b]$ (where $c$ is the midpoint). The error on $[a, b]$ is approximated by $S(a, b) - S(a, c) - S(c, b)$, scaled by $1/15$. Accept if the error is below the tolerance, otherwise recurse on each half.

**Why Simpson's rule is the standard.** It is exact for cubics, $O(h^4)$ error, easy to implement, and well-behaved for most smooth functions. It is the workhorse of numerical integration in physics and engineering.

**Romberg integration.** Apply the trapezoidal rule at $h, h/2, h/4, \ldots$, then Richardson-extrapolate to remove the $O(h^2), O(h^4), \ldots$ terms. The result is a triangular table of increasingly accurate estimates.

**Multiple integrals.** Simpson's rule extends to 2D and 3D by tensor product. In 2D: $S_{2D} = (h_x h_y/9) \sum w_{ij} f(x_i, y_j)$ with weights $1, 4, 2, \ldots$ in each direction. The number of points is $n^2$ for $n$ points in each direction.

**High-dimensional integration.** Simpson and trapezoidal are impractical above $4$ or $5$ dimensions. Monte Carlo methods (next lesson) are the only practical choice for high dimensions.

**Applications in physics.**
- Normalisation constants in quantum mechanics: $\int |\psi|^2 dV = 1$.
- Expectation values: $\langle A \rangle = \int \psi^* A \psi\, dV$.
- Statistical mechanics: partition functions, free energies.
- Field theory: path integrals (discretised as multi-dimensional integrals).
- Cross-sections: $\int |M|^2 d\Phi$ over phase space.

**Monte Carlo integration.** A different paradigm: estimate the integral by the average of $f$ at random points, with error $O(1/\sqrt{N})$ where $N$ is the number of samples. Diminishing returns ($N$ must quadruple to halve the error) but unbeatable in high dimensions. (Covered in the next lesson.)

**Quadrature and probability.** If $f$ is a probability density and you want $\int f g\, dx = E[g(X)]$, quadrature approximates the expectation by a weighted sum. Gaussian quadrature with the density's polynomial basis gives the most efficient approximation.

**Quadrature in computer graphics.** Monte Carlo integration of the rendering equation (light transport). Variance reduction by importance sampling. The modern graphics pipeline uses these methods.

**Adaptive vs. uniform.** Adaptive quadrature is more efficient when $f$ has regions of rapid variation. For smooth $f$, uniform quadrature with a small $h$ is simpler and competitive.

**Parallelism.** Each function evaluation is independent; quadrature is embarrassingly parallel. Useful for expensive integrands (e.g. solutions of PDEs).

## Key Ideas
- Trapezoidal: $O(h^2)$ error, $d = 1$.
- Simpson's: $O(h^4)$ error, $d = 3$.
- Composite rules sum over subintervals.
- Error tolerance determines the step size.
- Adaptive quadrature refines where the function is rough.

## Worked Examples
**Example 1 — Trapezoidal.** $I = \int_0^1 e^x dx = e - 1 \approx 1.71828$. $T_1 = (1/2)(1 + e) = (1/2)(1 + 2.718) = 1.859$. Error: $0.14$. $T_2 = (1/4)(1 + 2 e^{0.5} + e) = (1/4)(1 + 3.297 + 2.718) = 1.754$. Error: $0.035$. $T_4 = (1/8)(1 + 2 e^{0.25} + 2 e^{0.5} + 2 e^{0.75} + e) = (1/8)(1 + 2 \times 1.284 + 2 \times 1.649 + 2 \times 2.117 + 2.718) = 1.725$. Error: $0.007$. Each halving of $h$ reduces the error by a factor of $4$ (quadratic convergence). ✓

**Example 2 — Simpson's.** $S_2 = (1/6)(1 + 4 e^{0.5} + e) = (1/6)(1 + 6.594 + 2.718) = 1.719$. Error: $0.0003$. Already accurate to 4 decimal places! Simpson's is much more efficient than trapezoidal.

**Example 3 — Step size for tolerance.** For $\int_0^1 e^x dx$ with $\varepsilon = 10^{-4}$. Trapezoidal: $n \ge \sqrt{(1)^3 \cdot e / (12 \cdot 10^{-4})} = \sqrt{2263} \approx 48$. Simpson: $n \ge (1 \cdot e / (180 \cdot 10^{-4}))^{1/4} = 3.3$, so $n = 4$ (must be even). Just $4$ Simpson panels vs. $48$ trapezoidal.

**Example 4 — Composite Simpson on a smooth function.** $\int_0^{\pi} \sin x\, dx = 2$. With $n = 2$ (one parabola): $S = (\pi/6)[\sin 0 + 4 \sin(\pi/2) + \sin \pi] = (\pi/6)(0 + 4 + 0) = 2\pi/3 \approx 2.094$. Error: $0.094$. $n = 4$: $S = (\pi/12)[\sin 0 + 4 \sin(\pi/4) + 2 \sin(\pi/2) + 4 \sin(3\pi/4) + \sin \pi] = (\pi/12)[0 + 2.828 + 2 + 2.828 + 0] = (\pi/12)(7.656) = 2.005$. Error: $0.005$. Each doubling of $n$ reduces the error by $\approx 16$ (fourth order). ✓

## Common Misconceptions
- **"Trapezoidal is always less accurate than Simpson's."** Per panel, yes. Per function evaluation, the comparison depends on $f$ and $h$.
- **"Smaller $h$ is always better."** For the trapezoidal/Simpson rules, yes (they are convergent). But not for very small $h$ if there is round-off.
- **"Newton–Cotes formulas are the best."** No — they are easy to derive but generally not optimal. Gaussian quadrature (next lesson) is better.
- **"Adaptive quadrature is always more efficient."** Often yes, but for smooth functions uniform quadrature with a small $h$ is competitive.

## Connections
Trapezoidal and Simpson are the basic Newton–Cotes rules. Gaussian quadrature (next lesson) is the optimal choice for smooth integrands. Adaptive quadrature refines where needed. Romberg integration extrapolates to high accuracy. Monte Carlo handles high dimensions.

## Quick Check
1. State the trapezoidal rule and its error.
2. State Simpson's rule and its error.
3. What is the degree of precision of each?
4. How does the composite rule work?
5. Apply Simpson's rule with $n = 2$ to $\int_0^1 x^2 dx$.

## Takeaway
- Trapezoidal: $O(h^2)$ error, $d = 1$.
- Simpson's: $O(h^4)$ error, $d = 3$.
- Composite rules: sum over subintervals.
- Adaptive: refine where the function is rough.
- For high dimensions, switch to Monte Carlo.
