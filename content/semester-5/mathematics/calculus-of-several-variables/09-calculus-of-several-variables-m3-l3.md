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
lessonId: calculus-of-several-variables-m3-l3
lessonName: The Divergence Theorem, Stokes' Theorem and Maxwell's Equations
lessonNumber: 9
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - calculus-of-several-variables-m3-l2
  - electricity-and-magnetism-m3-l2
  - electricity-and-magnetism-m3-l3
learningObjectives:
  - State the divergence theorem and Stokes' theorem with their orientation conventions, and sketch their proofs.
  - Use the divergence theorem to evaluate fluxes through closed surfaces and Stokes' theorem to evaluate circulations, choosing the simpler side of each identity.
  - Derive the continuity equation $\partial\rho/\partial t + \nabla\cdot\mathbf{J} = 0$ from conservation of charge.
  - Convert Maxwell's equations between integral and differential form and show that the displacement current is required by charge conservation.
concepts:
  - Divergence theorem
  - Stokes' theorem
  - Right-hand orientation rule
  - Continuity equation
  - Maxwell's equations in integral form
  - Maxwell's equations in differential form
  - Displacement current
tags:
  - mathematics
  - calculus-of-several-variables
  - stokes-theorem
  - maxwell-equations
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - computational
***

# The Divergence Theorem, Stokes' Theorem and Maxwell's Equations

## Overview

Every integral theorem of the course has one shape: the integral of a derivative over a region equals an integral of the function over the region's boundary. This lesson completes the family in three dimensions. The divergence theorem equates the outward flux through a closed surface to the volume integral of the divergence inside; Stokes' theorem equates the circulation around a closed curve to the flux of the curl through any surface it bounds. Their greatest application is to physics. Conservation of charge, written as a flux balance, becomes the continuity equation; Gauss's, Faraday's and Ampère's laws, written as statements about fluxes and circulations, become Maxwell's equations in differential form, from which electromagnetic waves travelling at $c = 1/\sqrt{\mu_0\varepsilon_0}$ follow in a few lines.

## Learning Path

- **What you should already know**: divergence, curl and conservative fields (Lesson m3-l1); Green's theorem, surface integrals and flux (Lesson m3-l2); Ampère's law (electricity-and-magnetism Lesson m3-l2) and Faraday's law (electricity-and-magnetism Lesson m3-l3).
- **What this lesson adds**: the divergence theorem and Stokes' theorem with proofs in outline; the continuity equation; Maxwell's equations in both forms; the displacement current; the electromagnetic wave equation.
- **What later lessons this will unlock**: electromagnetic waves (waves-and-optics), stellar-structure equations in astrophysics, and the conservation laws of mathematical-modelling.

## Core Explanation

### The divergence theorem

**Theorem (Gauss).** Let $E$ be a solid bounded by a closed piecewise-smooth surface $S$ with outward unit normal $\mathbf{n}$, and let $\mathbf{F}$ have continuous partial derivatives on an open set containing $E$. Then

$$\oint_S\mathbf{F}\cdot\mathbf{n}\,dS = \iiint_E\nabla\cdot\mathbf{F}\,dV.$$

*Proof outline.* Write $\mathbf{F} = (P, Q, R)$ and prove the $R$ part for a region $E = \{(x,y)\in D,\ u_1 \le z \le u_2\}$. By Fubini,

$$\iiint_E\frac{\partial R}{\partial z}\,dV = \iint_D\big[R(x,y,u_2) - R(x,y,u_1)\big]\,dA.$$

On the top surface the outward normal vector is $(-u_{2,x}, -u_{2,y}, 1)\,dA$, so $\iint_{\text{top}}R\,\mathbf{k}\cdot\mathbf{n}\,dS = \iint_D R(x,y,u_2)\,dA$. On the bottom the outward normal points down, giving $-\iint_D R(x,y,u_1)\,dA$, and on vertical sides $\mathbf{k}\cdot\mathbf{n} = 0$. The two sides agree. The $P$ and $Q$ parts are identical, and general solids are cut into such pieces, the fluxes through internal faces cancelling. $\square$

Applied to a small ball $B_\varepsilon$ about a point, the theorem gives $\nabla\cdot\mathbf{F} = \lim_{\varepsilon\to0}\frac{1}{V_\varepsilon}\oint\mathbf{F}\cdot\mathbf{n}\,dS$: divergence is outward flux per unit volume, independent of coordinates.

**Gauss's law for gravity.** The flux of $\mathbf{g} = -GM\hat{\mathbf{r}}/r^2$ through any sphere about a point mass is $-4\pi GM$, and by superposition $\oint_S\mathbf{g}\cdot\mathbf{n}\,dS = -4\pi GM_{\text{enc}}$. For a spherically symmetric body, $g(s)\cdot 4\pi s^2 = -4\pi GM(s)$ gives $g = -GM(s)/s^2$: the shell theorem of Lesson m2-l3 in two lines. With the divergence theorem, $\nabla\cdot\mathbf{g} = -4\pi G\rho$, and with $\mathbf{g} = -\nabla\Phi$, Poisson's equation $\nabla^2\Phi = 4\pi G\rho$.

### Stokes' theorem

**Theorem (Stokes).** Let $S$ be an oriented piecewise-smooth surface with unit normal $\mathbf{n}$, bounded by a closed curve $C$, and let $\mathbf{F}$ have continuous partial derivatives near $S$. Then

$$\oint_C\mathbf{F}\cdot d\mathbf{r} = \iint_S(\nabla\times\mathbf{F})\cdot\mathbf{n}\,dS,$$

where $C$ carries the **positive orientation** induced by $\mathbf{n}$: curl the fingers of the right hand along $C$ and the thumb points along $\mathbf{n}$; equivalently, walking along $C$ with your head along $\mathbf{n}$, the surface lies on your left. For a flat region in the $xy$-plane with $\mathbf{n} = \mathbf{k}$ this is exactly Green's theorem.

*Why it is true.* Tile $S$ with small patches. By Green's theorem in each patch's tangent plane, the circulation around a patch is approximately $(\nabla\times\mathbf{F})\cdot\mathbf{n}\,\Delta S$. On adding, interior edges are traversed twice in opposite directions and cancel, leaving the circulation around $C$.

Two consequences matter. First, the flux of a curl depends only on the boundary curve: any two surfaces with the same oriented boundary give the same value, and the flux of a curl through any closed surface is zero, consistent with $\nabla\cdot(\nabla\times\mathbf{F}) = 0$. Second, if $\nabla\times\mathbf{F} = \mathbf{0}$ on a simply connected domain, every closed curve bounds a surface in the domain, so every circulation vanishes and $\mathbf{F}$ is conservative, which completes the curl test of Lesson m3-l1.

| Theorem | Derivative integrated | Over | Equals integral over |
|---|---|---|---|
| Fundamental theorem | $f'$ | $[a,b]$ | endpoints: $f(b) - f(a)$ |
| Line integrals | $\nabla f$ | curve $C$ | endpoints: $f(B) - f(A)$ |
| Green | $Q_x - P_y$ | plane region | boundary curve, counterclockwise |
| Stokes | $\nabla\times\mathbf{F}$ | surface $S$ | boundary curve, right-hand rule |
| Divergence | $\nabla\cdot\mathbf{F}$ | solid $E$ | closed surface, outward normal |

### The continuity equation

Let $\rho$ be the charge density and $\mathbf{J}$ the current density. Charge is conserved, so the charge inside any fixed volume $V$ decreases only by flowing out through its surface:

$$\frac{d}{dt}\iiint_V\rho\,dV = -\oint_S\mathbf{J}\cdot\mathbf{n}\,dS = -\iiint_V\nabla\cdot\mathbf{J}\,dV.$$

Hence $\iiint_V\left(\partial\rho/\partial t + \nabla\cdot\mathbf{J}\right)dV = 0$ for every $V$. A continuous function whose integral over every small ball vanishes is identically zero, so

$$\frac{\partial\rho}{\partial t} + \nabla\cdot\mathbf{J} = 0.$$

With mass density and $\mathbf{J} = \rho\mathbf{v}$ the same argument gives the continuity equation of fluid dynamics.

### Maxwell's equations

The laws of electromagnetism are measured as statements about fluxes and circulations. The divergence theorem (first two rows), Stokes' theorem for a fixed surface (last two) and the "every region" argument give the differential forms.

| Law | Integral form | Differential form |
|---|---|---|
| Gauss | $\oint_S\mathbf{E}\cdot d\mathbf{A} = Q_{\text{enc}}/\varepsilon_0$ | $\nabla\cdot\mathbf{E} = \rho/\varepsilon_0$ |
| No monopoles | $\oint_S\mathbf{B}\cdot d\mathbf{A} = 0$ | $\nabla\cdot\mathbf{B} = 0$ |
| Faraday | $\oint_C\mathbf{E}\cdot d\mathbf{r} = -\dfrac{d}{dt}\iint_S\mathbf{B}\cdot d\mathbf{A}$ | $\nabla\times\mathbf{E} = -\dfrac{\partial\mathbf{B}}{\partial t}$ |
| Ampère–Maxwell | $\oint_C\mathbf{B}\cdot d\mathbf{r} = \mu_0I_{\text{enc}} + \mu_0\varepsilon_0\dfrac{d}{dt}\iint_S\mathbf{E}\cdot d\mathbf{A}$ | $\nabla\times\mathbf{B} = \mu_0\mathbf{J} + \mu_0\varepsilon_0\dfrac{\partial\mathbf{E}}{\partial t}$ |

For example, Faraday's law with Stokes' theorem reads $\iint_S(\nabla\times\mathbf{E} + \partial\mathbf{B}/\partial t)\cdot d\mathbf{A} = 0$ for every surface, so the integrand vanishes. Since $\nabla\times\mathbf{E} \ne \mathbf{0}$ when $\mathbf{B}$ changes, induced electric fields are not conservative.

**Why the displacement current is needed.** Take the divergence of the Ampère–Maxwell equation. The left side is zero because $\nabla\cdot(\nabla\times\mathbf{B}) = 0$, so

$$0 = \mu_0\nabla\cdot\mathbf{J} + \mu_0\varepsilon_0\frac{\partial}{\partial t}\nabla\cdot\mathbf{E} = \mu_0\left(\nabla\cdot\mathbf{J} + \frac{\partial\rho}{\partial t}\right),$$

using Gauss's law. Without Maxwell's term $\mu_0\varepsilon_0\partial\mathbf{E}/\partial t$ we would need $\nabla\cdot\mathbf{J} = 0$, which fails whenever charge accumulates, as on a charging capacitor. Maxwell's equations thus contain the continuity equation.

**Electromagnetic waves.** In vacuum ($\rho = 0$, $\mathbf{J} = \mathbf{0}$), take the curl of Faraday's law and use $\nabla\times(\nabla\times\mathbf{E}) = \nabla(\nabla\cdot\mathbf{E}) - \nabla^2\mathbf{E}$:

$$-\nabla^2\mathbf{E} = -\frac{\partial}{\partial t}\nabla\times\mathbf{B} = -\mu_0\varepsilon_0\frac{\partial^2\mathbf{E}}{\partial t^2} \quad\Longrightarrow\quad \nabla^2\mathbf{E} = \mu_0\varepsilon_0\frac{\partial^2\mathbf{E}}{\partial t^2},$$

a wave equation with speed $c = 1/\sqrt{\mu_0\varepsilon_0} = 1/\sqrt{(1.2566\times10^{-6})(8.854\times10^{-12})} = 2.998\times10^8\ \text{m s}^{-1}$.

## Key Ideas

- **Divergence theorem**: $\oint_S\mathbf{F}\cdot\mathbf{n}\,dS = \iiint_E\nabla\cdot\mathbf{F}\,dV$ with outward $\mathbf{n}$; divergence is flux per unit volume.
- **Stokes' theorem**: $\oint_C\mathbf{F}\cdot d\mathbf{r} = \iint_S(\nabla\times\mathbf{F})\cdot\mathbf{n}\,dS$ with $C$ and $\mathbf{n}$ related by the right-hand rule.
- **Surface independence**: the flux of a curl depends only on the boundary curve; through a closed surface it vanishes.
- **Integral to differential**: an integral law that holds for every region forces the integrand to vanish pointwise.
- **Continuity equation** $\partial\rho/\partial t + \nabla\cdot\mathbf{J} = 0$ is local conservation of charge.
- **Maxwell's equations** in differential form follow from the integral laws; the displacement current makes them consistent with charge conservation and predicts light.

## Worked Examples

### Example 1 — Flux through a sphere by the divergence theorem

Find the outward flux of $\mathbf{F} = (x^3, y^3, z^3)$ through the sphere $x^2 + y^2 + z^2 = a^2$.

**Solution.** Directly, $\mathbf{F}\cdot\mathbf{n} = (x^4 + y^4 + z^4)/a$, an awkward integrand. Instead, $\nabla\cdot\mathbf{F} = 3(x^2 + y^2 + z^2) = 3r^2$, so

$$\oint_S\mathbf{F}\cdot\mathbf{n}\,dS = \iiint_{r\le a}3r^2\cdot r^2\sin\theta\,dr\,d\theta\,d\phi = 3\cdot 4\pi\cdot\frac{a^5}{5} = \frac{12\pi a^5}{5}.$$

For $a = 1$ this is $7.540$. The pure-Python midpoint sum below computes the surface integral directly and should agree to about four figures.

```python
import math

n, flux = 300, 0.0
dth, dph = math.pi / n, 2 * math.pi / n
for i in range(n):
    th = (i + 0.5) * dth
    for j in range(n):
        ph = (j + 0.5) * dph
        x, y, z = math.sin(th) * math.cos(ph), math.sin(th) * math.sin(ph), math.cos(th)
        # on the unit sphere n dS = (x, y, z) sin(th) dth dph
        flux += (x**3 * x + y**3 * y + z**3 * z) * math.sin(th) * dth * dph
print(flux, 12 * math.pi / 5)
```

### Example 2 — Verifying Stokes' theorem on a hemisphere

Verify Stokes' theorem for $\mathbf{F} = (-y, x, z)$ on the upper hemisphere $x^2 + y^2 + z^2 = a^2$, $z \ge 0$, with upward (outward) normal.

**Solution.** *Surface side.* $\nabla\times\mathbf{F} = (\partial_y z - \partial_z x,\ \partial_z(-y) - \partial_x z,\ \partial_x x - \partial_y(-y)) = (0, 0, 2)$. With $\mathbf{n}\,dS = a^2\sin\theta\,\hat{\mathbf{r}}\,d\theta\,d\phi$ (Lesson m3-l2), $(\nabla\times\mathbf{F})\cdot\mathbf{n}\,dS = 2a^2\sin\theta\cos\theta\,d\theta\,d\phi$, and

$$\iint_S(\nabla\times\mathbf{F})\cdot\mathbf{n}\,dS = 2a^2\cdot2\pi\int_0^{\pi/2}\sin\theta\cos\theta\,d\theta = 2a^2\cdot2\pi\cdot\tfrac12 = 2\pi a^2.$$

*Line side.* The upward normal induces the counterclockwise orientation (seen from above) on the equator $\mathbf{r} = (a\cos t, a\sin t, 0)$, $0 \le t \le 2\pi$. Then $\mathbf{F}\cdot\mathbf{r}' = (-a\sin t)(-a\sin t) + (a\cos t)(a\cos t) + 0 = a^2$, so $\oint_C\mathbf{F}\cdot d\mathbf{r} = 2\pi a^2$. The two agree. The flat disc $z = 0$, $r \le a$, with normal $\mathbf{k}$ gives $2\times\pi a^2$, the same, as surface independence requires.

### Example 3 — The magnetic field inside a wire

A long straight wire of radius $R = 1.0$ mm carries $I = 10$ A uniformly distributed over its cross-section. Ampère's law gives the field inside as $\mathbf{B} = \dfrac{\mu_0I}{2\pi R^2}(-y, x, 0)$. Verify $\nabla\times\mathbf{B} = \mu_0\mathbf{J}$ and find $J$ and the field at the surface.

**Solution.** With $k = \mu_0I/2\pi R^2$, $\nabla\times\mathbf{B} = k(0, 0, \partial_x x - \partial_y(-y)) = (0, 0, 2k) = \dfrac{\mu_0I}{\pi R^2}\mathbf{k}$. The current density is $\mathbf{J} = \dfrac{I}{\pi R^2}\mathbf{k}$, so $\nabla\times\mathbf{B} = \mu_0\mathbf{J}$, the differential Ampère law for a steady current. Numerically,

$$J = \frac{10}{\pi(1.0\times10^{-3})^2} = 3.2\times10^6\ \text{A m}^{-2}, \qquad B(R) = \frac{\mu_0I}{2\pi R} = \frac{(2\times10^{-7})(10)}{1.0\times10^{-3}} = 2.0\times10^{-3}\ \text{T}.$$

Also $\nabla\cdot\mathbf{B} = \partial_x(-ky) + \partial_y(kx) = 0$, as it must be.

## Common Misconceptions

- **"Any surface with boundary $C$ works in Stokes' theorem with any normal."** The normal and the direction of $C$ must be linked by the right-hand rule; the wrong pairing flips the sign.
- **"The divergence theorem applies to an open surface such as a hemisphere."** It requires a closed surface bounding a solid. For a hemisphere, add the base disc, apply the theorem, and subtract the flux through the disc.
- **"The displacement current is a real flow of charge."** It is the term $\varepsilon_0\partial\mathbf{E}/\partial t$, not moving charge; between capacitor plates it carries the circulation of $\mathbf{B}$ where no conduction current flows.
- **"The differential and integral forms of Maxwell's equations are different laws."** They are equivalent for fixed regions, related exactly by the divergence and Stokes theorems.

## Connections

- Gauss's, Ampère's and Faraday's laws of electricity-and-magnetism Lessons m1-l2, m3-l2 and m3-l3 are the integral forms tabulated here; their differential forms are the language of electromagnetic theory.
- The wave equation for $\mathbf{E}$ is the three-dimensional form of the wave equation in waves-and-optics Lesson m1-l2, and its speed identifies light as an electromagnetic wave.
- Poisson's equation $\nabla^2\Phi = 4\pi G\rho$ governs galactic dynamics and stellar structure in astrophysics-iii and astrophysics-iv; the continuity equation underlies the mass equation $dM/dr = 4\pi r^2\rho$.
- The probability current $\mathbf{j}$ in introduction-to-quantum-mechanics obeys $\partial|\psi|^2/\partial t + \nabla\cdot\mathbf{j} = 0$, the same continuity equation.
- Finite-volume solvers for fluid and plasma simulations (numerical-methods, mathematical-modelling) discretise exactly the flux balance used to derive the continuity equation.

## Quick Check

1. Use the divergence theorem to find the outward flux of $\mathbf{F} = (x, y, z)$ through the surface of the cube $[0,1]^3$.
2. Find the flux of $\mathbf{F} = (0, 0, z)$ out of the closed surface formed by the paraboloid $z = 4 - x^2 - y^2$ and the disc $z = 0$, and compare with Lesson m3-l2, Example 3.
3. Use Stokes' theorem to evaluate $\oint_C\mathbf{F}\cdot d\mathbf{r}$ for $\mathbf{F} = (y, z, x)$ around the circle $x^2 + y^2 = 1$, $z = 0$, counterclockwise from above.
4. Derive $\nabla\cdot\mathbf{E} = \rho/\varepsilon_0$ from the integral form of Gauss's law.
5. Show that taking the divergence of $\nabla\times\mathbf{B} = \mu_0\mathbf{J}$ forces $\nabla\cdot\mathbf{J} = 0$, and explain why this is inconsistent with a charging capacitor.

## Takeaway

- The divergence theorem converts outward flux through a closed surface into the volume integral of the divergence.
- Stokes' theorem converts circulation around a closed curve into the flux of the curl through any surface it bounds, oriented by the right-hand rule.
- Applied to conservation of charge, they give the continuity equation $\partial\rho/\partial t + \nabla\cdot\mathbf{J} = 0$.
- Applied to the laws of Gauss, Faraday and Ampère, they give Maxwell's equations in differential form, and the displacement current makes these consistent with charge conservation.
- From the differential equations, electromagnetic waves travelling at $c = 1/\sqrt{\mu_0\varepsilon_0}$ follow directly, the payoff of the whole course.
