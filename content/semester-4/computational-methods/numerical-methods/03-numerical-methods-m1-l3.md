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
lessonId: numerical-methods-m1-l3
lessonName: Splines and Piecewise Approximation
lessonNumber: 3
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - numerical-methods-m1-l2
  - linear-algebra-m1-l1
learningObjectives:
  - Construct linear and cubic spline interpolants.
  - Set up the tridiagonal system for natural cubic splines.
  - Compare splines to high-degree polynomial interpolation.
  - Choose appropriate knots and boundary conditions.
concepts:
  - Piecewise linear interpolation
  - Cubic spline
  - Natural spline
  - Tridiagonal system
  - Spline basis (B-splines)
  - Knot vector
tags:
  - computational-methods
  - numerical-analysis
  - splines
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Splines and Piecewise Approximation

## Overview
High-degree polynomial interpolation suffers from the Runge phenomenon: it can diverge as the degree grows. The practical solution is to use *piecewise* polynomials: low-degree on each subinterval, with continuity conditions at the boundaries. *Splines* are piecewise polynomials with high-order continuity. They are smooth, well-behaved, and the standard tool for curve fitting and computer graphics. This lesson develops the simplest splines — linear, quadratic, and cubic — and the tridiagonal linear system for natural cubic splines.

## Learning Path
- What you should already know: polynomial interpolation, divided differences, tridiagonal matrices (preview of *Linear Algebra*).
- What this lesson adds: piecewise polynomial approximation, splines, and the construction of cubic splines.
- What it unlocks: numerical integration (next module), computer graphics, and data fitting in physics and engineering.

## Core Explanation
**Why piecewise?** A single high-degree polynomial can be wild (Runge). Piecewise polynomials of low degree are tame. They approximate the function well locally, and continuity conditions tie the pieces together smoothly.

**Piecewise linear interpolation.** Connect adjacent data points with straight line segments. On each subinterval $[x_i, x_{i+1}]$, the interpolant is linear: $p_i(x) = y_i + (y_{i+1} - y_i)/(x_{i+1} - x_i) (x - x_i)$. Continuous at the nodes but with kinks (discontinuous first derivative).

**Error of piecewise linear.** For $f \in C^2$, the error on each subinterval is bounded by $M_i (x - x_i)(x - x_{i+1})/2$, where $M_i = \max |f''|$. Order $h^2$, where $h$ is the maximum subinterval width.

**Quadratic spline.** Piecewise quadratic, with continuous first derivative at the nodes. Three conditions per piece: two for the values at the endpoints, one for the derivative at the left endpoint (or right). The system is tridiagonal; the solution is unique given a boundary condition (e.g. derivative at the first or last node).

**Cubic spline.** Piecewise cubic, with continuous value, first derivative, and second derivative at the nodes. Four conditions per piece: two for values at the endpoints, two for the derivatives (or one each at left and right ends of the piece). The full set of conditions determines the spline uniquely given boundary conditions.

**Natural cubic spline.** The boundary condition is that the second derivative vanishes at the endpoints: $S''(x_0) = S''(x_n) = 0$. This gives a "natural" extension — the spline is linear beyond the endpoints.

**Tridiagonal system for natural cubic splines.** Let $h_i = x_{i+1} - x_i$. The unknown second derivatives $M_i = S''(x_i)$ satisfy

$$h_{i-1} M_{i-1} + 2 (h_{i-1} + h_i) M_i + h_i M_{i+1} = 6 \left(\frac{y_{i+1} - y_i}{h_i} - \frac{y_i - y_{i-1}}{h_{i-1}}\right)$$

for $i = 1, \ldots, n - 1$, with $M_0 = M_n = 0$ (natural). This is a tridiagonal system that can be solved in $O(n)$ operations by the Thomas algorithm.

**Thomas algorithm.** For a tridiagonal system $a_i x_{i-1} + b_i x_i + c_i x_{i+1} = d_i$:
- Forward sweep: $c'_i = c_i/(b_i - a_i c'_{i-1})$, $d'_i = (d_i - a_i d'_{i-1})/(b_i - a_i c'_{i-1})$.
- Back substitution: $x_n = d'_n$, $x_i = d'_i - c'_i x_{i+1}$.

$O(n)$ time, stable for diagonally dominant matrices.

**Existence and uniqueness.** The tridiagonal matrix for the natural cubic spline is strictly diagonally dominant, hence invertible, hence a unique spline exists.

**Clamped cubic spline.** The boundary condition is $S'(x_0) = f'(x_0)$ and $S'(x_n) = f'(x_n)$ (specified derivatives at the endpoints). Often gives better accuracy than natural.

**Not-a-knot spline.** The boundary condition is that the third derivative is continuous at $x_1$ and $x_{n-1}$ (i.e. the first and last pieces are part of the same cubic). Avoids imposing artificial conditions at the boundaries.

**Error of cubic spline.** For $f \in C^4$, the natural cubic spline interpolant $S$ satisfies

$$\max |f^{(k)}(x) - S^{(k)}(x)| \le C_k h^{4-k} \max |f^{(4)}|, \quad k = 0, 1, 2, 3.$$

In particular, the interpolation error is $O(h^4)$ — better than the $O(h^2)$ of piecewise linear. This is why cubic splines are popular.

**B-splines.** A basis for the space of splines of a given degree and knot vector. The B-splines $B_{i, k}(x)$ are local (supported on $[x_i, x_{i+k+1}]$) and form a partition of unity. Cubic B-splines are the workhorse of computer graphics (e.g. Bézier curves, NURBS).

**Knot vector.** The sorted sequence of breakpoints $t_0 \le t_1 \le \cdots \le t_{n+k+1}$. Knots may have multiplicities (with $t_i = t_{i+1}$ allowed); the multiplicity controls the smoothness of the spline at that point.

**Order of a spline.** A spline of order $k$ has piecewise polynomial pieces of degree $k - 1$. A cubic spline has $k = 4$.

**Bézier curves.** A special case of B-splines, with all knots at the endpoints. Control points determine the shape. Widely used in computer-aided design.

**NURBS.** Non-uniform rational B-splines. Rational functions of B-splines, with weights. The standard representation for curves and surfaces in CAD and computer graphics.

**Tensor-product splines.** For 2D and 3D data, take the tensor product of 1D B-splines. Used for surface fitting.

**Multivariate interpolation.** Interpolation on a 2D grid can be done as a tensor product of 1D interpolations. The resulting surface is a tensor-product spline.

**Kriging.** A geostatistical interpolation method that uses the spatial correlation of the data. Optimal in the sense of minimum mean-squared error. Used in mining, hydrology, and atmospheric science.

**Inverse distance weighting.** A simple interpolation: $p(x) = \sum w_i y_i / \sum w_i$ with $w_i = 1/d(x, x_i)^p$. Fast but crude.

**Radial basis functions.** Interpolate with a sum of basis functions centred at the data points: $p(x) = \sum c_i \phi(\|x - x_i\|)$, where $\phi$ is a radial basis (Gaussian, multiquadric, thin-plate spline). Used in surface fitting and machine learning.

**Splines in physics.**
- Numerical solutions of PDEs (finite-element methods) use splines as basis functions.
- Curve fitting of experimental data (spectra, response functions, etc.).
- Computer graphics for visualisation of physical simulations.
- Image processing and computer vision.

**Geometric continuity vs. parametric continuity.** $G^1$ continuity means tangent directions match (but magnitudes can differ); $G^2$ matches curvatures. $C^1$ continuity means first derivatives match; $C^2$ means second derivatives match. For physics, $C^k$ is usually desired.

**Adaptive spline fitting.** Choose knots adaptively based on the function's behaviour. More knots where the function varies rapidly, fewer where it is smooth. This is "free-knot" spline fitting.

**Smoothing splines.** Trade off fidelity to the data against smoothness: minimise $\sum (y_i - p(x_i))^2 + \lambda \int (p''(x))^2 dx$. The parameter $\lambda$ controls the trade-off; large $\lambda$ gives a smoother spline, small $\lambda$ fits the data more closely. Used in statistics and signal processing.

**Total-variation regularisation.** A penalty on $\int |p'(x)| dx$ instead of $\int (p'')^2 dx$. Produces piecewise-constant or piecewise-linear fits. Used in image processing.

## Key Ideas
- Piecewise polynomials avoid the Runge phenomenon.
- Linear splines: $O(h^2)$ error; kinks at nodes.
- Cubic splines: $O(h^4)$ error; smooth derivatives.
- Natural cubic splines: tridiagonal system, $O(n)$ solution.
- B-splines: local basis for spline spaces, standard in graphics and CAD.

## Worked Examples
**Example 1 — Piecewise linear.** Data $(0, 0), (1, 1), (2, 4)$. The piecewise linear interpolant is $y = x$ on $[0, 1]$ and $y = 3x - 2$ on $[1, 2]$. Continuous, but the derivative jumps from $1$ to $3$ at $x = 1$.

**Example 2 — Natural cubic spline.** Data $(0, 0), (1, 1), (2, 0)$, with $h_0 = h_1 = 1$. The spline $S(x)$ is *piecewise* cubic: one cubic on $[0, 1]$ and another on $[1, 2]$. The tridiagonal system gives $2(1 + 1) M_1 = 6((0 - 1)/1 - (1 - 0)/1) = -12$, so $M_1 = -3$, with $M_0 = M_2 = 0$ (natural boundary conditions). Using the standard piecewise formula $S_i(x) = M_i (x_{i+1} - x)^3/(6 h_i) + M_{i+1} (x - x_i)^3/(6 h_i) + (y_i/h_i - M_i h_i/6)(x_{i+1} - x) + (y_{i+1}/h_i - M_{i+1} h_i/6)(x - x_i)$:
- On $[0, 1]$: $S(x) = -x^3/2 + 3 x/2$. Checks: $S(0) = 0$, $S(1) = 1$, $S''(0) = 0 = M_0$, $S''(1) = -3 = M_1$.
- On $[1, 2]$: $S(x) = -(2 - x)^3/2 + 3 (2 - x)/2$. Checks: $S(1) = 1$, $S(2) = 0$, $S''(1) = -3 = M_1$, $S''(2) = 0 = M_2$.

The two pieces meet at $x = 1$ with continuous value, first derivative ($S'(1) = 0$ from both sides), and second derivative ($-3$), as required.

**Example 3 — B-spline basis.** Cubic B-splines with uniform knots: $B_0 = (1 - 3t + 3t^2 - t^3)/6$ on $[0, 1]$, etc. Four overlapping pieces, each supported on a span of $4$ knots. Local: changing one control point only affects the spline locally.

## Common Misconceptions
- **"A spline is just a polynomial."** No — it is piecewise polynomial, with different formulas on different subintervals.
- **"Higher-degree splines are always better."** Cubic is usually a sweet spot; higher degrees can have the same Runge-like issues.
- **"Natural boundary conditions are wrong."** They are artificial but convenient; the clamped or not-a-knot conditions are often better.
- **"Splines smooth over data errors."** Yes — but they also smooth over real features. The choice of $\lambda$ in smoothing splines is a trade-off.

## Connections
Splines are the workhorse of computer graphics (every font rendering, every CAD model), data fitting (every physics experiment with a smooth response), and numerical methods (finite-element analysis, boundary-element methods). The B-spline basis generalises to surfaces and volumes (NURBS). Adaptive knot selection and smoothing-spline regularisation are important in modern data analysis.

## Quick Check
1. State the boundary condition for a natural cubic spline.
2. What is the tridiagonal system for natural cubic splines?
3. What is the error order of a cubic spline?
4. Define a B-spline.
5. What is the difference between natural and clamped boundary conditions?

## Takeaway
- Piecewise polynomials avoid Runge.
- Linear splines: $O(h^2)$ error.
- Cubic splines: $O(h^4)$ error, smooth derivatives.
- Natural cubic splines: tridiagonal system, $O(n)$ solution.
- B-splines: local basis for spline spaces.
