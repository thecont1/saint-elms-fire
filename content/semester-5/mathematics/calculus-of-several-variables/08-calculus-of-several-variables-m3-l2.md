***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: calculus-of-several-variables
courseName: Calculus of Several Variables (Mathematics Elective II)
moduleId: calculus-of-several-variables-module-3
moduleName: Vector Calculus and Integral Theorems
lessonId: calculus-of-several-variables-m3-l2
lessonName: Green's Theorem, Surface Integrals and Flux
lessonNumber: 8
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - calculus-of-several-variables-m3-l1
  - electricity-and-magnetism-m1-l2
learningObjectives:
  - State and prove Green's theorem for a Type I region, with the boundary oriented positively, and apply it in both circulation and flux forms.
  - Compute areas from line integrals and handle regions with holes by orienting inner boundaries clockwise.
  - Parametrise surfaces, compute the normal $\mathbf{r}_u\times\mathbf{r}_v$ and area element $dS$, and evaluate scalar surface integrals.
  - Evaluate the flux $\iint_S\mathbf{F}\cdot\mathbf{n}\,dS$ through oriented surfaces, including the electric flux of a point charge through a sphere.
concepts:
  - Green's theorem
  - Positive orientation of a boundary
  - Circulation and flux in the plane
  - Parametrised surface
  - Surface area element
  - Surface integral
  - Flux of a vector field
tags:
  - mathematics
  - calculus-of-several-variables
  - greens-theorem
  - flux
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Green's Theorem, Surface Integrals and Flux

## Overview

The fundamental theorem for line integrals related an integral along a curve to values at its two endpoints. Green's theorem is the next step up in dimension: it relates the circulation of a plane vector field around a closed curve to the double integral of its curl over the enclosed region. Rotating the field by a right angle gives the flux form, which relates outflow across the boundary to the divergence inside, and so explains what divergence and curl mean physically. To pass to three dimensions we need integrals over surfaces. We parametrise a surface by two variables, find its normal vector and area element from a cross product, and define the flux of a vector field through an oriented surface. These are the ingredients of the divergence and Stokes theorems in Lesson m3-l3, and the flux of the electric field through a closed surface is the left-hand side of Gauss's law.

## Learning Path

- **What you should already know**: line integrals and the vortex field (Lesson m3-l1); double integrals, polar coordinates and Jacobians (Lessons m2-l1 and m2-l2); Gauss's law as a statement about flux (electricity-and-magnetism Lesson m1-l2); the cross product.
- **What this lesson adds**: Green's theorem in circulation and flux form, with proof; area by line integrals; regions with holes; parametrised surfaces, $dS$, surface integrals and flux.
- **What later lessons this will unlock**: the divergence theorem and Stokes' theorem, Maxwell's equations and the continuity equation (Lesson m3-l3).

## Core Explanation

### Green's theorem

Let $D$ be a bounded plane region whose boundary $C$ is a piecewise-smooth simple closed curve. $C$ is **positively oriented** if it is traversed counterclockwise, so that $D$ lies on the left as one walks along it.

**Green's theorem.** If $P$ and $Q$ have continuous partial derivatives on an open set containing $D$, then

$$\oint_C P\,dx + Q\,dy = \iint_D\left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA.$$

*Proof for a Type I region* $D = \{a \le x \le b,\ g_1(x) \le y \le g_2(x)\}$. We show $\oint_C P\,dx = -\iint_D P_y\,dA$. By Fubini and the fundamental theorem in $y$,

$$\iint_D\frac{\partial P}{\partial y}\,dA = \int_a^b\big[P(x, g_2(x)) - P(x, g_1(x))\big]dx.$$

Now traverse $C$ counterclockwise: along the bottom $y = g_1(x)$ from $x = a$ to $b$ the contribution is $\int_a^b P(x, g_1(x))\,dx$; along the top from $x = b$ back to $a$ it is $-\int_a^b P(x, g_2(x))\,dx$; on any vertical sides $dx = 0$. Hence $\oint_C P\,dx = -\iint_D P_y\,dA$. The same argument for a Type II region gives $\oint_C Q\,dy = \iint_D Q_x\,dA$, and adding proves the theorem for regions of both types. General regions are cut into such pieces; the integrals along internal cuts are traversed twice in opposite directions and cancel. $\square$

The integrand $Q_x - P_y$ is the $z$-component of $\nabla\times\mathbf{F}$ for $\mathbf{F} = (P, Q, 0)$, so Green's theorem reads $\oint_C\mathbf{F}\cdot d\mathbf{r} = \iint_D(\nabla\times\mathbf{F})\cdot\mathbf{k}\,dA$: circulation around the boundary equals total curl inside. Shrinking $D$ to a point shows that $(\nabla\times\mathbf{F})\cdot\mathbf{k}$ is the **circulation per unit area**.

**Area.** Choosing $P = -y/2$, $Q = x/2$ gives $Q_x - P_y = 1$, hence

$$A = \frac12\oint_C\left(x\,dy - y\,dx\right).$$

For the ellipse $(a\cos t, b\sin t)$ the integrand is $ab\,dt$ and $A = \pi ab$. Mechanical planimeters measure areas this way.

**Regions with holes.** If $D$ has holes, its positively oriented boundary consists of the outer curve counterclockwise and each inner curve clockwise (still keeping $D$ on the left). For the vortex field of Lesson m3-l1, $Q_x - P_y = 0$ in the annulus between any simple closed curve $C$ around the origin and a small circle $C_\varepsilon$; Green's theorem gives $\oint_C\mathbf{F}\cdot d\mathbf{r} - \oint_{C_\varepsilon}\mathbf{F}\cdot d\mathbf{r} = 0$, so the circulation is $2\pi$ for every such $C$.

### The flux form

The outward unit normal to a positively oriented curve is $\mathbf{n} = (dy, -dx)/ds$, the unit tangent rotated clockwise. The outward **flux** of $\mathbf{F} = (P,Q)$ across $C$ is

$$\oint_C\mathbf{F}\cdot\mathbf{n}\,ds = \oint_C P\,dy - Q\,dx = \iint_D\left(\frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y}\right)dA = \iint_D\nabla\cdot\mathbf{F}\,dA,$$

applying Green's theorem to the pair $(-Q, P)$. Shrinking $D$ shows that $\nabla\cdot\mathbf{F}$ is the **outward flux per unit area**: a source density. A fluid with $\nabla\cdot\mathbf{v} > 0$ at a point is spreading out from it.

### Parametrised surfaces and the area element

A **parametrised surface** is a map $\mathbf{r}(u,v) = (x(u,v), y(u,v), z(u,v))$ from a region $S$ of the $uv$-plane. The tangent vectors $\mathbf{r}_u$, $\mathbf{r}_v$ span the tangent plane, and a small parameter rectangle maps to a parallelogram of area $|\mathbf{r}_u\times\mathbf{r}_v|\,\Delta u\,\Delta v$. Hence

$$\mathbf{N} = \mathbf{r}_u\times\mathbf{r}_v, \qquad dS = |\mathbf{r}_u\times\mathbf{r}_v|\,du\,dv.$$

Two cases recur.

- **Graph** $z = g(x,y)$: with $\mathbf{r} = (x, y, g)$, $\mathbf{N} = (-g_x, -g_y, 1)$ (upward) and $dS = \sqrt{1 + g_x^2 + g_y^2}\,dA$.
- **Sphere** of radius $a$: with $\mathbf{r} = a(\sin\theta\cos\phi, \sin\theta\sin\phi, \cos\theta)$,

$$\mathbf{r}_\theta = a(\cos\theta\cos\phi, \cos\theta\sin\phi, -\sin\theta), \qquad \mathbf{r}_\phi = a(-\sin\theta\sin\phi, \sin\theta\cos\phi, 0),$$

$$\mathbf{r}_\theta\times\mathbf{r}_\phi = a^2\sin\theta\,(\sin\theta\cos\phi, \sin\theta\sin\phi, \cos\theta) = a^2\sin\theta\,\hat{\mathbf{r}},$$

which points outward, and $dS = a^2\sin\theta\,d\theta\,d\phi$, giving area $4\pi a^2$.

The **scalar surface integral** is $\iint_S f\,dS = \iint f(\mathbf{r}(u,v))\,|\mathbf{r}_u\times\mathbf{r}_v|\,du\,dv$, used for the mass of a shell or the charge on a curved conductor, as in the shell integral of Lesson m2-l3.

### Flux through a surface

An **oriented** surface carries a continuous choice of unit normal $\mathbf{n}$; for a closed surface the convention is outward. (The Möbius strip has no consistent choice and is non-orientable.) The **flux** of $\mathbf{F}$ through $S$ is

$$\Phi_F = \iint_S\mathbf{F}\cdot\mathbf{n}\,dS = \iint_S\mathbf{F}(\mathbf{r}(u,v))\cdot(\mathbf{r}_u\times\mathbf{r}_v)\,du\,dv,$$

with the sign of $\mathbf{r}_u\times\mathbf{r}_v$ reversed if it points against the chosen orientation. If $\mathbf{F} = \rho\mathbf{v}$ for a fluid, the flux is the mass crossing $S$ per unit time.

**Gauss's law for a point charge.** For $\mathbf{E} = \dfrac{q}{4\pi\varepsilon_0}\dfrac{\hat{\mathbf{r}}}{r^2}$ and a sphere of radius $a$ centred on the charge,

$$\oint\mathbf{E}\cdot\mathbf{n}\,dS = \int_0^{2\pi}\int_0^\pi\frac{q}{4\pi\varepsilon_0a^2}\,a^2\sin\theta\,d\theta\,d\phi = \frac{q}{\varepsilon_0},$$

independent of $a$: the $r^{-2}$ fall-off of the field exactly compensates the $r^2$ growth of the area.

A flux integral is easily checked numerically. The pure-Python midpoint sum below evaluates the flux in Example 3 and should print a value close to $8\pi \approx 25.133$.

```python
import math

n, flux = 400, 0.0
dr, dt = 2 / n, 2 * math.pi / n
for i in range(n):
    r = (i + 0.5) * dr
    for j in range(n):
        t = (j + 0.5) * dt
        x, y, z = r * math.cos(t), r * math.sin(t), 4 - r * r
        N = (2 * r * r * math.cos(t), 2 * r * r * math.sin(t), r)   # r_r x r_t
        F = (0.0, 0.0, z)
        flux += sum(a * b for a, b in zip(F, N)) * dr * dt
print(flux, 8 * math.pi)
```

## Key Ideas

- **Green's theorem**: $\oint_C P\,dx + Q\,dy = \iint_D(Q_x - P_y)\,dA$ with $C$ counterclockwise, region on the left.
- **Circulation and flux forms**: circulation equals total curl; outward flux $\oint\mathbf{F}\cdot\mathbf{n}\,ds$ equals total divergence.
- **Meaning of curl and divergence**: circulation per unit area and outflow per unit area (or volume).
- **Area** $A = \tfrac12\oint(x\,dy - y\,dx)$; inner boundaries of a region with holes run clockwise.
- **Surface element**: $\mathbf{N} = \mathbf{r}_u\times\mathbf{r}_v$, $dS = |\mathbf{N}|\,du\,dv$; on a sphere $dS = a^2\sin\theta\,d\theta\,d\phi$.
- **Flux** $\iint_S\mathbf{F}\cdot\mathbf{n}\,dS$ requires an orientation; the electric flux of a point charge through any centred sphere is $q/\varepsilon_0$.

## Worked Examples

### Example 1 — Verifying Green's theorem on a half-disc

Verify Green's theorem for $\oint_C y^2\,dx + 3xy\,dy$, where $C$ is the positively oriented boundary of the half-disc $x^2 + y^2 \le 1$, $y \ge 0$.

**Solution.** *Double integral.* $Q_x - P_y = 3y - 2y = y$, so in polar coordinates

$$\iint_D y\,dA = \int_0^\pi\int_0^1 r\sin\theta\cdot r\,dr\,d\theta = \frac13\cdot 2 = \frac23.$$

*Line integral.* On the diameter $y = 0$, $dy = 0$ and $P = 0$, contributing nothing. On the arc $x = \cos t$, $y = \sin t$, $0 \le t \le \pi$ (counterclockwise),

$$\int_0^\pi\left[\sin^2t\,(-\sin t) + 3\cos t\sin t\,\cos t\right]dt = -\int_0^\pi\sin^3t\,dt + 3\int_0^\pi\cos^2t\sin t\,dt = -\frac43 + 2 = \frac23.$$

The two sides agree.

### Example 2 — Area of an astroid

Find the area enclosed by the astroid $x = a\cos^3t$, $y = a\sin^3t$, $0 \le t \le 2\pi$.

**Solution.** Here $dx = -3a\cos^2t\sin t\,dt$ and $dy = 3a\sin^2t\cos t\,dt$, so

$$x\,dy - y\,dx = 3a^2\left(\cos^4t\sin^2t + \sin^4t\cos^2t\right)dt = 3a^2\sin^2t\cos^2t\,dt = \frac{3a^2}{4}\sin^22t\,dt.$$

Since $\int_0^{2\pi}\sin^22t\,dt = \pi$,

$$A = \frac12\cdot\frac{3a^2}{4}\cdot\pi = \frac{3\pi a^2}{8}.$$

For $a = 4.0$ cm this is $18.8\ \text{cm}^2$, a little over a third of the circumscribing circle's $50.3\ \text{cm}^2$.

### Example 3 — Flux through a paraboloid

Find the upward flux of $\mathbf{F} = (0, 0, z)$ through the paraboloid $z = 4 - x^2 - y^2$, $z \ge 0$.

**Solution.** For the graph, the upward normal is $\mathbf{N} = (-g_x, -g_y, 1) = (2x, 2y, 1)$, so $\mathbf{F}\cdot\mathbf{N} = z = 4 - x^2 - y^2$ and

$$\Phi = \iint_{r\le 2}(4 - r^2)\,r\,dr\,d\theta = 2\pi\left[2r^2 - \frac{r^4}{4}\right]_0^2 = 8\pi.$$

This equals the volume of the solid under the paraboloid (Lesson m2-l1). That is no coincidence: $\nabla\cdot\mathbf{F} = 1$, and the flux through the base disc $z = 0$ vanishes because $\mathbf{F} = \mathbf{0}$ there. Lesson m3-l3 shows that the total outward flux through a closed surface equals the volume integral of the divergence.

## Common Misconceptions

- **"Green's theorem works whatever the direction of $C$."** With clockwise orientation the sign flips; the theorem as stated needs the region on the left.
- **"Green's theorem applies to the vortex field around the unit circle."** $P$ and $Q$ are not continuous at the origin, so the theorem fails on the full disc; on an annulus it applies with the inner circle clockwise.
- **"$dS$ is $du\,dv$."** The area element carries the stretching factor $|\mathbf{r}_u\times\mathbf{r}_v|$, which is $a^2\sin\theta$ on a sphere and $\sqrt{1 + g_x^2 + g_y^2}$ on a graph.
- **"Flux is a vector."** Flux is a scalar: the integral of the normal component $\mathbf{F}\cdot\mathbf{n}$. Its sign depends on the chosen orientation.
- **"Zero flux through a closed surface means zero field on it."** Inflow and outflow can cancel; a uniform field has zero net flux through any closed surface.

## Connections

- Gauss's law, $\oint\mathbf{E}\cdot d\mathbf{A} = Q_{\text{enc}}/\varepsilon_0$, studied in electricity-and-magnetism Lesson m1-l2, is a flux integral; this lesson supplies the machinery to evaluate it on any surface.
- Magnetic flux $\Phi_B = \iint\mathbf{B}\cdot d\mathbf{A}$ is the quantity whose rate of change drives induction in electricity-and-magnetism Lesson m3-l3.
- In two-dimensional fluid flow, Green's flux form expresses conservation of mass across a closed curve; the stream function is the potential of the rotated velocity field, as in Lesson m3-l1.
- Radiative flux and luminosity in astrophysics-iii, $L = \oint\mathbf{F}_{\text{rad}}\cdot d\mathbf{A} = 4\pi R^2F$, are surface integrals over a star.
- Complex-analysis contour integrals rest on Green's theorem: applied to $f = u + iv$ with the Cauchy–Riemann equations, it proves Cauchy's theorem.

## Quick Check

1. Use Green's theorem to evaluate $\oint_C(x^2 - y)\,dx + (x + y^2)\,dy$ around the square with vertices $(0,0)$, $(2,0)$, $(2,2)$, $(0,2)$, counterclockwise.
2. Find the area inside the ellipse $x = 3\cos t$, $y = 2\sin t$ using $A = \tfrac12\oint(x\,dy - y\,dx)$.
3. Compute the outward flux of $\mathbf{F} = (x, y)$ across the unit circle, both directly and with the flux form of Green's theorem.
4. Find the surface area of the part of the plane $z = 2x + 2y$ above the unit square.
5. Compute the outward flux of $\mathbf{F} = (x, y, z)$ through the sphere of radius $a$.

## Takeaway

- Green's theorem trades a circulation around a closed plane curve for a double integral of the curl inside, with the boundary oriented counterclockwise.
- Its flux form trades outflow across the boundary for a double integral of the divergence, giving divergence and curl their physical meaning.
- Surfaces are parametrised by two variables; $\mathbf{r}_u\times\mathbf{r}_v$ supplies both the normal and the area element.
- Flux through an oriented surface is $\iint\mathbf{F}\cdot\mathbf{n}\,dS$, and for a point charge through a centred sphere it is $q/\varepsilon_0$.
- These tools set up the divergence and Stokes theorems of the final lesson.
