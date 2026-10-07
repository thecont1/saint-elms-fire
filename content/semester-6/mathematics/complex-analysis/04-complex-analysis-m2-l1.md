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
lessonId: complex-analysis-m2-l1
lessonName: Contour Integrals and the Cauchy–Goursat Theorem
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - complex-analysis-m1-l3
  - real-analysis-m3-l3
  - electricity-and-magnetism-m1-l3
learningObjectives:
  - Parametrise a contour and evaluate $\int_C f(z)\,dz = \int_a^b f(z(t))z'(t)\,dt$ for straight, circular and piecewise smooth paths.
  - Prove and apply the estimate $\left|\int_C f\,dz\right| \le ML$.
  - Evaluate integrals by antiderivatives and compute $\oint (z-z_0)^n\,dz$ on a circle.
  - State the Cauchy–Goursat theorem, prove it via Green's theorem, and use contour deformation on multiply connected domains.
concepts:
  - Contour integral
  - Parametrisation of contours
  - ML-inequality
  - Antiderivative of an analytic function
  - Cauchy–Goursat theorem
  - Simply connected domain
  - Deformation of contours
tags:
  - mathematics
  - complex-analysis
  - contour-integration
  - cauchy-goursat
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# Contour Integrals and the Cauchy–Goursat Theorem

## Overview

Integration in the complex plane is integration along a path: the value of $\int_C f(z)\,dz$ depends in general on the curve $C$, not merely on its endpoints. The central discovery of the subject is that for analytic functions it usually does not. The Cauchy–Goursat theorem states that the integral of an analytic function around a closed contour bounding a region of analyticity vanishes, and every later result, from the integral formula to residues, grows from it. This lesson defines contour integrals through parametrisation, proves the basic estimate used to discard arcs at infinity, relates integrals to antiderivatives, and proves the Cauchy–Goursat theorem with the Cauchy–Riemann equations of Lesson m1-l2 and Green's theorem. It ends with the deformation of contours on multiply connected domains, which turns the computation of $\oint dz/(z-z_0) = 2\pi i$ into a general tool.

## Learning Path

- **What you should already know**: analytic functions, the Cauchy–Riemann equations and domains (Lessons m1-l1 and m1-l2); the logarithm and its branch cut (Lesson m1-l3); the fundamental theorem of calculus (Real Analysis Lesson m3-l3); path-independence of the line integral of a conservative field (Electricity and Magnetism Lesson m1-l3).
- **What this lesson adds**: parametrised contour integrals; the $ML$-inequality; antiderivatives; the Cauchy–Goursat theorem; simply and multiply connected domains and deformation of contours.
- **What later lessons this will unlock**: the Cauchy integral formula, Liouville's theorem and the fundamental theorem of algebra (Lesson m2-l2); Taylor and Laurent series (Lesson m2-l3); the residue theorem and real integrals (Lesson m3-l1).

## Core Explanation

### Contours and parametrisation

For a complex-valued $w(t) = a(t) + ib(t)$ of a real variable, $\int_a^b w\,dt = \int_a^b a\,dt + i\int_a^b b\,dt$. Linearity and the fundamental theorem hold, and $\left|\int_a^b w\,dt\right| \le \int_a^b|w|\,dt$: write the integral as $Re^{i\phi}$, so $R = \int e^{-i\phi}w\,dt = \operatorname{Re}\int e^{-i\phi}w\,dt \le \int|w|\,dt$.

A **smooth arc** is a curve $z(t) = x(t) + iy(t)$, $a \le t \le b$, with $z'$ continuous and non-zero. A **contour** is a finite chain of smooth arcs joined end to end; it is **simple** if it does not cross itself and **closed** if $z(b) = z(a)$. The positive orientation of a simple closed contour is anticlockwise. Standard parametrisations are the segment $z(t) = z_1 + t(z_2 - z_1)$, $0 \le t \le 1$, and the circle $z(t) = z_0 + Re^{it}$, $0 \le t \le 2\pi$.

### The contour integral

For $f$ piecewise continuous on $C$, the **contour integral** is

$$\int_C f(z)\,dz = \int_a^b f(z(t))\,z'(t)\,dt.$$

It is the limit of Riemann sums $\sum f(\zeta_k)\Delta z_k$, and a change of parametrisation preserving orientation does not alter it. Writing $f = u + iv$ and $dz = dx + i\,dy$ expresses it as two real line integrals,

$$\int_C f\,dz = \int_C (u\,dx - v\,dy) + i\int_C (v\,dx + u\,dy).$$

The integral is linear, additive over joined contours, and reverses sign with orientation: $\int_{-C} f\,dz = -\int_C f\,dz$.

### The $ML$-inequality

If $|f(z)| \le M$ on $C$ and $C$ has length $L = \int_a^b|z'(t)|\,dt$, then

$$\left|\int_C f(z)\,dz\right| \le \int_a^b |f(z(t))||z'(t)|\,dt \le ML.$$

Its use is to show that integrals over large arcs vanish, as in Lesson m3-l1. Lower bounds on denominators come from the reverse triangle inequality of Lesson m1-l1: $|z^n + a| \ge R^n - |a|$ on $|z| = R$.

### The key example

On the circle $C: z = z_0 + Re^{it}$, $dz = iRe^{it}dt$, so for an integer $n$

$$\oint_C (z - z_0)^n\,dz = iR^{n+1}\int_0^{2\pi} e^{i(n+1)t}\,dt = \begin{cases} 2\pi i & n = -1,\\ 0 & n \ne -1.\end{cases}$$

The integral is independent of $R$ and $z_0$. This single calculation underlies the residue theorem. Its exceptional case $n=-1$ reflects the fact that $1/(z-z_0)$ has no single-valued antiderivative around $z_0$: $\log(z-z_0)$ gains $2\pi i$ on one circuit.

### Antiderivatives

If $F' = f$ on a domain $D$ containing the contour $C$ from $z_1$ to $z_2$, then $\frac{d}{dt}F(z(t)) = f(z(t))z'(t)$ and

$$\int_C f(z)\,dz = F(z_2) - F(z_1).$$

The integral depends only on the endpoints, and hence $\oint_C f\,dz = 0$ for every closed contour in $D$. Conversely, if integrals of a continuous $f$ are path-independent in $D$, then $F(z) = \int_{z_0}^{z} f$ is an antiderivative. Thus, for polynomials and $e^z$, $\sin z$, the integral is evaluated as in real calculus. For $1/z$ on $\mathbb{C}\setminus\{0\}$ no antiderivative exists, consistent with the key example; on a domain avoiding a branch cut, $\operatorname{Log} z$ is one.

### The Cauchy–Goursat theorem

**Theorem.** If $f$ is analytic at all points interior to and on a simple closed contour $C$, then $\oint_C f(z)\,dz = 0$.

*Proof when $f'$ is continuous.* Apply Green's theorem to each real integral in the decomposition above, with $R$ the region enclosed by $C$:

$$\oint_C f\,dz = \iint_R(-v_x - u_y)\,dA + i\iint_R(u_x - v_y)\,dA = 0,$$

since Cauchy–Riemann gives $u_x = v_y$ and $u_y = -v_x$ throughout $R$. $\blacksquare$

Goursat removed the continuity assumption, which matters because continuity of $f'$ will in fact be a consequence (Lesson m2-l2). *Sketch for a triangle $T$:* bisect the sides to form four triangles. Their integrals sum to $I = \oint_T f\,dz$ (interior edges cancel), so one has $|I_1| \ge |I|/4$. Repeating, we obtain nested triangles $T_n$ with $|I_n| \ge |I|/4^n$, diameter $d_n = d/2^n$ and perimeter $L_n = L/2^n$, converging to a point $z_0$. Differentiability gives $f(z) = f(z_0) + f'(z_0)(z - z_0) + \eta(z)(z-z_0)$ with $\eta \to 0$. The linear part has an antiderivative, so integrates to zero around $T_n$, leaving $|I_n| \le \varepsilon d_nL_n = \varepsilon dL/4^n$. Combining, $|I| \le \varepsilon dL$ for every $\varepsilon$, so $I = 0$. Polygons follow by triangulation, and smooth contours by approximation.

### Simple and multiple connectivity

A domain $D$ is **simply connected** if every simple closed contour in $D$ encloses only points of $D$; intuitively it has no holes. The disc and the plane are simply connected; the annulus and the punctured plane are not. On a simply connected domain, Cauchy–Goursat gives $\oint_C f\,dz = 0$ for every closed contour, hence path-independence and an antiderivative $F(z) = \int_{z_0}^z f$.

For a **multiply connected** domain, the theorem extends by **deformation of contours**. Let $C_0$ be a positively oriented simple closed contour and $C_1, \dots, C_n$ disjoint positively oriented simple closed contours inside it, and let $f$ be analytic on all of these and in the region between them. Joining the contours by cross-cuts traversed twice in opposite directions produces a single closed contour bounding a region of analyticity, so

$$\oint_{C_0} f\,dz = \sum_{k=1}^n \oint_{C_k} f\,dz.$$

Integrals around holes in the domain may therefore be moved to small circles about each singularity, which makes the key example computable.

## Key Ideas

- **Contour integral**: $\int_C f\,dz = \int_a^b f(z(t))z'(t)\,dt$ depends on the oriented path, is linear, and changes sign when the orientation reverses.
- **$ML$-inequality**: $\left|\int_C f\,dz\right| \le ML$ is the standard tool for showing that arcs contribute nothing in a limit.
- **Antiderivatives**: if $F' = f$ along $C$, the integral is $F(z_2) - F(z_1)$ and closed integrals vanish; $1/z$ has no antiderivative around the origin.
- **Key example**: $\oint (z - z_0)^n\,dz = 2\pi i$ for $n = -1$ and $0$ otherwise, independent of the radius.
- **Cauchy–Goursat**: if $f$ is analytic inside and on a simple closed contour, the closed integral is zero; the proof is Green's theorem plus Cauchy–Riemann.
- **Deformation**: contours may be shrunk or expanded freely across regions where $f$ is analytic, which reduces multiply connected problems to small circles about the singularities.

## Worked Examples

### Example 1 — Path dependence for a non-analytic function

Compute $\int_C \bar z\,dz$ from $1$ to $-1$ along (a) the upper unit semicircle, (b) the real segment.

**Solution.** (a) With $z = e^{it}$, $0 \le t \le \pi$, $\bar z = e^{-it}$ and $dz = ie^{it}dt$, so the integral is $\int_0^\pi i\,dt = i\pi$. (b) On the real axis $\bar z = x$ and $dz = dx$, so $\int_1^{-1}x\,dx = 0$. The two paths give different values, so the closed contour (semicircle followed by the segment back from $-1$ to $1$) has integral $i\pi \neq 0$. There is no contradiction: $\bar z$ is not analytic (Lesson m1-l2), and by Green's theorem the closed integral equals $2i\times$ the enclosed area $= 2i\cdot\pi/2 = i\pi$.

### Example 2 — An $ML$ estimate

Let $C_R$ be the upper semicircle $|z| = R$, $R > 1$, $\operatorname{Im} z \ge 0$. Show that $\int_{C_R}\frac{dz}{z^4 + 1} \to 0$ as $R \to \infty$.

**Solution.** On $C_R$, $|z^4 + 1| \ge |z|^4 - 1 = R^4 - 1$, so $|f| \le M = 1/(R^4 - 1)$. The length is $L = \pi R$. Then

$$\left|\int_{C_R}\frac{dz}{z^4+1}\right| \le \frac{\pi R}{R^4 - 1} \sim \frac{\pi}{R^3} \to 0.$$

For $R = 10$ the bound is $\pi\cdot10/9999 \approx 3.1\times10^{-3}$. Any rational function with denominator degree at least two more than the numerator decays quickly enough for this argument.

### Example 3 — Deformation of contours

Evaluate $\oint_C \frac{dz}{z^2 - 1}$ for (a) $C: |z| = 2$ and (b) $C: |z - 1| = 1$, both anticlockwise.

**Solution.** Partial fractions give $\frac{1}{z^2-1} = \frac12\left[\frac{1}{z-1} - \frac{1}{z+1}\right]$. (a) Both $\pm1$ lie inside $|z| = 2$. Deforming onto small circles about each point and applying the key example, the integral is $\frac12(2\pi i - 2\pi i) = 0$. This agrees with the $ML$ bound $2\pi R/(R^2-1) \to 0$ on larger circles, which shows that the integral is the same for all $R > 1$ and tends to $0$. (b) The circle $|z-1| = 1$ encloses $z = 1$ but not $z = -1$, which is at distance $2$. The term $1/(z+1)$ is analytic inside and on $C$, so by Cauchy–Goursat contributes $0$, and the integral is $\frac12\cdot2\pi i = \pi i$.

## Common Misconceptions

- **"A contour integral depends only on the endpoints."** True only when $f$ has an antiderivative (for instance, is analytic on a simply connected domain). For $\bar z$ or for $1/z$ around the origin the value depends on the path.
- **"Cauchy–Goursat only needs $f$ analytic on the contour."** Analyticity is required at every point inside as well. The function $1/z$ is analytic on $|z| = 1$, yet $\oint dz/z = 2\pi i$.
- **"If $\oint_C f\,dz = 0$, then $f$ is analytic inside $C$."** The converse is false: $\oint_{|z|=1} z^{-2}\,dz = 0$ although $z^{-2}$ is singular at $0$. Only vanishing of the integral over every closed contour (Morera's theorem, Lesson m2-l2) implies analyticity.
- **"$\int_C f\,dz = 0$ whenever $C$ is closed."** Closedness is not enough; the function must be analytic throughout the enclosed region.

## Connections

- The statement that a conservative field has zero circulation around any closed loop (Electricity and Magnetism Lesson m1-l3) is the real analogue of Cauchy–Goursat: Green's theorem plus Cauchy–Riemann says the field $(u, -v)$ is curl-free and divergence-free when $f$ is analytic.
- The antiderivative statement is the complex fundamental theorem of calculus (Real Analysis Lesson m3-l3), and path-independence mirrors the exactness criterion of Differential Equations Lesson m1-l3.
- The $2\pi i$ in $\oint dz/z$ is a winding of phase by $2\pi$; the same topological quantisation appears in the single-valuedness condition on the wavefunction phase in Introduction to Quantum Mechanics.
- The vanishing of large-arc contributions via the $ML$-inequality is the mechanism behind the real-integral evaluations of Lesson m3-l1 and the inverse Laplace transform of Lesson m3-l3.

## Quick Check

1. Evaluate $\int_C z^2\,dz$ where $C$ is the line segment from $0$ to $1 + i$, first by parametrising and then by an antiderivative.
2. Show that $\left|\int_C \frac{e^z}{z}\,dz\right| \le 2\pi e$ for $C: |z| = 1$.
3. Compute $\oint_{|z|=3}\frac{dz}{z(z-1)}$ using partial fractions and the key example.
4. Why does Cauchy–Goursat not apply to $\oint_{|z|=1} \frac{dz}{z}$, and what does deformation give for $\oint_{|z-1|=3}\frac{dz}{z}$?
5. Explain why the derivation by Green's theorem needs $u_x, u_y, v_x, v_y$ to be continuous and how Goursat's argument avoids this.

## Takeaway

- A contour integral is evaluated by parametrising the path, and in general depends on the path as well as its endpoints.
- The $ML$-inequality bounds integrals by the maximum of the integrand times the length, which lets large arcs be discarded.
- An analytic function with an antiderivative integrates to $F(z_2) - F(z_1)$; the circle integral of $(z - z_0)^n$ is $2\pi i\,\delta_{n,-1}$.
- The Cauchy–Goursat theorem gives zero for closed contours enclosing only points of analyticity, and the proof follows from Green's theorem and Cauchy–Riemann.
- On multiply connected domains, contours deform onto small circles about each singularity, preparing the integral formula and residues.
