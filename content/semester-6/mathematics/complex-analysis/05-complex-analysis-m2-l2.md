***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: complex-analysis
courseName: Complex Analysis
moduleId: complex-analysis-module-2
moduleName: Complex Integration and Series
lessonId: complex-analysis-m2-l2
lessonName: Cauchy's Integral Formula, Liouville's Theorem and the Fundamental Theorem of Algebra
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 5
prerequisites:
  - complex-analysis-m2-l1
  - real-analysis-m2-l2
  - electricity-and-magnetism-m1-l3
learningObjectives:
  - Derive Cauchy's integral formula $f(z_0) = \frac{1}{2\pi i}\oint_C \frac{f(z)}{z - z_0}\,dz$ and the derivative formulae, and use them to evaluate contour integrals.
  - Prove that analytic functions are infinitely differentiable and satisfy Cauchy's inequalities and the mean value property.
  - Prove Liouville's theorem and use it to prove the fundamental theorem of algebra.
  - State and apply the maximum modulus principle and Morera's theorem.
concepts:
  - Cauchy integral formula
  - Cauchy's integral formula for derivatives
  - Mean value property
  - Cauchy's inequalities
  - Liouville's theorem
  - Fundamental theorem of algebra
  - Maximum modulus principle
tags:
  - mathematics
  - complex-analysis
  - cauchy-integral-formula
  - liouville
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# Cauchy's Integral Formula, Liouville's Theorem and the Fundamental Theorem of Algebra

## Overview

Cauchy's integral formula is the most striking result in the course: the values of an analytic function inside a simple closed contour are completely determined by its values on the contour. From it follow the remarkable regularity properties of analytic functions, including infinite differentiability, bounds on derivatives, and the fact that a bounded entire function is constant. These results settle the questions left open earlier: that the real and imaginary parts of an analytic function are harmonic (Lesson m1-l2) and that continuity of $f'$ is automatic in the Cauchy–Goursat theorem (Lesson m2-l1). This lesson derives the integral formula from deformation of contours, extends it to all derivatives, proves Liouville's theorem and the fundamental theorem of algebra, and establishes the maximum modulus principle with its consequences for harmonic functions.

## Learning Path

- **What you should already know**: the Cauchy–Goursat theorem, deformation of contours and the $ML$-inequality (Lesson m2-l1); the extreme value theorem (Real Analysis Lesson m2-l2); harmonic functions and Earnshaw-type properties of electrostatic potentials (Electricity and Magnetism Lesson m1-l3).
- **What this lesson adds**: the integral formula and derivative formulae; mean value property; Cauchy's inequalities; Liouville's theorem; the fundamental theorem of algebra; Morera's theorem; the maximum modulus principle.
- **What later lessons this will unlock**: Taylor and Laurent series with radii of convergence set by singularities (Lesson m2-l3); residues as a generalisation of the formula (Lesson m3-l1); the mapping and potential theory of Lessons m3-l2 and m3-l3.

## Core Explanation

### Cauchy's integral formula

**Theorem.** Let $f$ be analytic on and inside a simple closed positively oriented contour $C$, and let $z_0$ be inside $C$. Then

$$f(z_0) = \frac{1}{2\pi i}\oint_C \frac{f(z)}{z - z_0}\,dz.$$

*Proof.* The integrand is analytic between $C$ and a small circle $C_\rho: |z - z_0| = \rho$, so by deformation (Lesson m2-l1) the integral over $C$ equals that over $C_\rho$. Write $f(z) = f(z_0) + [f(z) - f(z_0)]$. The first term gives $f(z_0)\oint_{C_\rho}\frac{dz}{z - z_0} = 2\pi i f(z_0)$. For the second, $f$ is differentiable at $z_0$, so $|f(z) - f(z_0)|/|z - z_0| \le M$ for small $\rho$, and by the $ML$-inequality

$$\left|\oint_{C_\rho}\frac{f(z) - f(z_0)}{z - z_0}\,dz\right| \le M\cdot 2\pi\rho \to 0 \quad (\rho\to 0).$$

The left side is independent of $\rho$, hence zero. $\blacksquare$

If $z_0$ lies outside $C$, the integrand is analytic inside and the integral is $0$ by Cauchy–Goursat. Taking $C$ to be a circle $z = z_0 + Re^{it}$ gives the **mean value property**

$$f(z_0) = \frac{1}{2\pi}\int_0^{2\pi}f(z_0 + Re^{it})\,dt:$$

the value at the centre is the average over any circle of analyticity.

### Derivatives of analytic functions

Treating $z_0$ as a variable and differentiating under the integral sign, which is justified by estimating the difference quotient with the $ML$-inequality, we obtain

$$f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z - z_0)^{n+1}}\,dz, \qquad n = 0, 1, 2, \dots$$

Since the integrand is differentiable in $z_0$ at every stage, the argument can be repeated. Hence **an analytic function has derivatives of all orders, each analytic**. This is a pure complex phenomenon: a function differentiable once on an interval need not have a second derivative ($x|x|$ at $0$). It also fills the gap in Lesson m1-l2: $u$ and $v$ have continuous partials of all orders, so they are harmonic.

**Morera's theorem** is a converse of Cauchy–Goursat: if $f$ is continuous on a domain $D$ and $\oint_C f\,dz = 0$ for every closed contour in $D$, then $f$ has an antiderivative $F$ there, $F$ is analytic, and so $f = F'$ is analytic by the result above.

### Cauchy's inequalities and Liouville's theorem

Let $C_R: |z - z_0| = R$ lie in the domain of analyticity and let $M_R = \max_{C_R}|f|$. Applying the $ML$-inequality to the derivative formula, with $L = 2\pi R$ and $|z - z_0|^{n+1} = R^{n+1}$, gives **Cauchy's inequalities**

$$|f^{(n)}(z_0)| \le \frac{n!\,M_R}{R^n}.$$

**Liouville's theorem.** A bounded entire function is constant.

*Proof.* Suppose $|f(z)| \le M$ for all $z$. Then for every $R$, $|f'(z_0)| \le M/R$. Letting $R\to\infty$ gives $f'(z_0) = 0$ at every $z_0$, so $f$ is constant (Lesson m1-l2). $\blacksquare$

Thus $\sin z$, $\cos z$ and $e^z$, being non-constant entire functions, are unbounded (Lesson m1-l3). The theorem extends to growth bounds: if an entire function satisfies $|f(z)| \le A|z|^k$ for large $|z|$, then Cauchy's inequality for the $(k+1)$-th derivative gives $|f^{(k+1)}(z_0)| \le (k+1)!\,A(|z_0|+R)^k/R^{k+1} \to 0$, so $f$ is a polynomial of degree at most $k$.

### The fundamental theorem of algebra

**Theorem.** Every non-constant polynomial $P(z) = a_nz^n + \dots + a_0$ with $a_n\neq0$ has at least one zero in $\mathbb{C}$.

*Proof.* Suppose $P$ has no zero. Then $1/P$ is entire. For $|z|$ large,

$$|P(z)| \ge |a_n||z|^n - \sum_{k<n}|a_k||z|^k \ge |z|^n\left(|a_n| - \sum_{k<n}\frac{|a_k|}{|z|^{n-k}}\right) \to \infty,$$

so $|1/P(z)| \to 0$ as $|z|\to\infty$. Hence $1/P$ is bounded outside some disc $|z| \le R_0$ and, being continuous, is bounded on that closed disc; it is bounded on $\mathbb{C}$. By Liouville $1/P$ is constant, so $P$ is constant, a contradiction. $\blacksquare$

Dividing out a zero and repeating gives $P(z) = a_n\prod_{k=1}^n(z - z_k)$: a polynomial of degree $n$ has exactly $n$ roots counting multiplicity. For polynomials with real coefficients, non-real roots occur in conjugate pairs, so every real polynomial factorises into real linear and quadratic factors.

### The maximum modulus principle

**Theorem.** If $f$ is analytic and non-constant on a domain $D$, then $|f|$ has no maximum in $D$. If $f$ is continuous on a closed bounded region $R$ and analytic and non-constant in its interior, the maximum of $|f|$ occurs only on the boundary.

*Proof.* Suppose $|f(z_0)| \ge |f(z)|$ for all $z$ in a neighbourhood of $z_0$. By the mean value property on a small circle, $|f(z_0)| \le \frac{1}{2\pi}\int_0^{2\pi}|f(z_0 + \rho e^{it})|\,dt \le |f(z_0)|$, so $|f| \equiv |f(z_0)|$ on the circle for every small $\rho$. Thus $|f|$ is constant near $z_0$, and by Lesson m1-l2 $f$ is constant there, hence on all of $D$ by the identity principle (Lesson m2-l3). The boundary statement follows from the extreme value theorem for $|f|$ on the compact set (Lesson m1-l1). $\blacksquare$

If $f$ has no zeros, applying the theorem to $1/f$ shows $|f|$ also attains its minimum on the boundary. The same mean-value argument applies to the harmonic function $u = \operatorname{Re}f$: a non-constant harmonic function has no interior maximum or minimum.

## Key Ideas

- **Integral formula**: $f(z_0) = \frac{1}{2\pi i}\oint_C\frac{f(z)}{z-z_0}\,dz$; boundary values determine interior values, and the integral is $0$ for $z_0$ outside $C$.
- **Derivative formulae**: $f^{(n)}(z_0) = \frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z-z_0)^{n+1}}\,dz$; analytic functions are infinitely differentiable.
- **Cauchy's inequalities**: $|f^{(n)}(z_0)| \le n!\,M_R/R^n$ control derivatives by the size of the function on a circle.
- **Liouville and algebra**: a bounded entire function is constant; consequently every non-constant polynomial has a root and factorises completely over $\mathbb{C}$.
- **Maximum modulus**: a non-constant analytic function attains its maximum modulus on the boundary, never in the interior; the same holds for harmonic functions.

## Worked Examples

### Example 1 — Using the integral formula

Evaluate $\oint_{|z|=2}\frac{e^z}{z^2+1}\,dz$.

**Solution.** The singularities $z = \pm i$ both lie inside $|z| = 2$. Partial fractions give $\frac{1}{z^2+1} = \frac{1}{2i}\left[\frac{1}{z-i} - \frac{1}{z+i}\right]$. Applying the integral formula to $e^z$ at each point,

$$\oint_{|z|=2}\frac{e^z}{z^2+1}\,dz = \frac{1}{2i}\left[2\pi i\,e^{i} - 2\pi i\,e^{-i}\right] = \pi(e^i - e^{-i}) = 2\pi i\sin 1 \approx 5.287i.$$

### Example 2 — The derivative formula

Evaluate $\oint_{|z|=1}\frac{e^{2z}}{z^4}\,dz$.

**Solution.** Take $f(z) = e^{2z}$, entire, with $z_0 = 0$ and $n = 3$ so that $(z-z_0)^{n+1} = z^4$. Then

$$\oint_{|z|=1}\frac{e^{2z}}{z^4}\,dz = \frac{2\pi i}{3!}f'''(0) = \frac{2\pi i}{6}\cdot 8 = \frac{8\pi i}{3}.$$

Check by series: $e^{2z}/z^4$ has $1/z$ coefficient $2^3/3! = 4/3$ from the term $(2z)^3/3!$, and $\oint z^{-1}dz = 2\pi i$ gives $8\pi i/3$, in agreement (Lesson m2-l3 develops this).

### Example 3 — Growth bounds force a polynomial

An entire function satisfies $|f(z)| \le 3|z| + 5$ for all $z$. Show that $f(z) = a + bz$ with $|b| \le 3$.

**Solution.** On the circle $|z - z_0| = R$, $M_R \le 3(|z_0| + R) + 5$. Cauchy's inequality for $n = 2$ gives

$$|f''(z_0)| \le \frac{2[3(|z_0|+R)+5]}{R^2} \to 0 \quad (R\to\infty),$$

so $f'' \equiv 0$ and $f$ is linear, $f = a + bz$. For the coefficient, $n = 1$ and $z_0 = 0$ give $|b| = |f'(0)| \le (3R + 5)/R \to 3$. The bound is sharp: $f(z) = 3z$ is admissible.

## Common Misconceptions

- **"The integral formula holds for any point $z_0$ in the plane."** It requires $z_0$ inside $C$; for $z_0$ outside the integral is $0$, and on $C$ it is undefined.
- **"$\sin z$ is bounded, so Liouville's theorem is false."** $\sin z$ is bounded by $1$ only on the real axis. On the imaginary axis $|\sin(iy)| = \sinh y \to \infty$.
- **"The maximum modulus principle says $|f|$ has no extreme values."** It excludes interior maxima of non-constant analytic functions. Interior minima occur at zeros, as $|z|$ shows at the origin, and the maximum on a closed region is on the boundary.
- **"If $f$ is differentiable once, it is smooth, as in real calculus."** In real calculus $x|x|$ is $C^1$ but not twice differentiable. Complex differentiability on an open set is much stronger and implies infinite differentiability.
- **"The fundamental theorem of algebra is a purely algebraic fact."** Every proof uses analysis or topology, because completeness of the reals is essential; here it enters through Liouville's theorem.

## Connections

- The mean value property says an analytic function's value at the centre is the circle average. The same holds for the harmonic potential in a charge-free region (Electricity and Magnetism Lesson m1-l3), averaged over spheres in three dimensions, so a potential has no interior maximum or minimum; this is Earnshaw's theorem, forbidding stable electrostatic trapping by static charges.
- The fundamental theorem of algebra guarantees that the characteristic polynomial of a constant-coefficient ODE has $n$ roots (Differential Equations Lesson m2-l1), and that every matrix has complex eigenvalues (Linear Algebra), the reason quantum observables can be diagonalised.
- Boundary-value determination is the logic of uniqueness theorems for Laplace's equation: the potential in a region follows from its values on the boundary.
- In Real Analysis the Taylor remainder must be controlled by hand; Cauchy's inequalities replace this by a bound on a circle, leading to the series of Lesson m2-l3.

## Quick Check

1. Evaluate $\oint_{|z|=1}\frac{\cos z}{z}\,dz$ and $\oint_{|z|=2}\frac{\sin z}{(z-1)^2}\,dz$.
2. Derive the mean value property from the integral formula and state what it implies for $\operatorname{Re}f$.
3. Prove that if $f$ is entire and $\operatorname{Re}f(z) \le 0$ for all $z$, then $f$ is constant (consider $e^{f}$).
4. Show that every zero of $z^5 + 3z + 1$ satisfies $|z| < 2$, and explain why there are exactly five zeros counted with multiplicity.
5. Show that the maximum modulus principle fails for the non-analytic function $f(z) = 2 - |z|^2$ on the disc $|z| \le 1$.

## Takeaway

- Cauchy's formula expresses an analytic function inside a contour through its boundary values, with derivatives of all orders given by the analogous integrals.
- Analytic functions are infinitely differentiable, satisfy the mean value property, and are bounded by Cauchy's inequalities.
- Liouville's theorem states that bounded entire functions are constant; the fundamental theorem of algebra follows by applying it to $1/P$.
- The maximum modulus principle places the extrema of $|f|$ and of harmonic functions on the boundary.
- Contour integrals around poles of the form $f(z)/(z-z_0)^{n+1}$ can be evaluated by differentiation, a prelude to residues.
