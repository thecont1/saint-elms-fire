***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: calculus-of-several-variables
courseName: Calculus of Several Variables (Mathematics Elective II)
moduleId: calculus-of-several-variables-module-2
moduleName: Multiple Integrals
lessonId: calculus-of-several-variables-m2-l3
lessonName: Mass, Centroids, Moments of Inertia and Gravitational Potential
lessonNumber: 6
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - calculus-of-several-variables-m2-l2
  - mechanics-m3-l3
learningObjectives:
  - Compute the mass and centre of mass of laminae and solids with variable density using double and triple integrals.
  - Derive the moments of inertia of standard solids (cylinder, sphere, cone) and apply the parallel- and perpendicular-axis theorems.
  - Derive the gravitational potential of a uniform spherical shell and a uniform solid sphere, inside and outside, from $\Phi = -G\iiint \rho\,dV'/|\mathbf{r} - \mathbf{r}'|$.
  - Apply these results to planetary interiors, including the moment-of-inertia factor and the potential at the centre of the Earth.
concepts:
  - Centre of mass
  - Centroid
  - Moment of inertia
  - Parallel-axis theorem
  - Gravitational potential of an extended body
  - Shell theorem
  - Moment-of-inertia factor
tags:
  - mathematics
  - calculus-of-several-variables
  - moment-of-inertia
  - gravitational-potential
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Mass, Centroids, Moments of Inertia and Gravitational Potential

## Overview

Multiple integrals were invented to describe extended bodies, and this lesson cashes in the machinery of Lessons m2-l1 and m2-l2. Every bulk property of a solid is an integral of the density weighted by some function of position: weight $1$ gives the mass, weight $\mathbf{r}$ the centre of mass, weight $d_\perp^2$ the moment of inertia, and weight $-G/|\mathbf{r} - \mathbf{r}'|$ the gravitational potential at a field point $\mathbf{r}$. We derive the familiar table of moments of inertia rather than quote it, prove the parallel-axis theorem, and then obtain Newton's shell theorem by direct integration over a sphere: a uniform shell attracts an outside particle as if its mass were concentrated at the centre and exerts no force inside. The potential of a solid sphere, obtained by adding shells, gives the field inside a planet and the potential at its centre.

## Learning Path

- **What you should already know**: triple integrals in cylindrical and spherical coordinates (Lesson m2-l2); moment of inertia and rotational kinetic energy of rigid bodies (mechanics Lesson m3-l3); gravitational potential energy $-GMm/r$ (mechanics Lesson m3-l2).
- **What this lesson adds**: mass and centre of mass as integrals; derivations of standard moments of inertia; the parallel- and perpendicular-axis theorems; the potential of a shell and of a solid sphere.
- **What later lessons this will unlock**: gravitational work and potentials of conservative fields (Lesson m3-l1); flux and Gauss's law for gravity (Lessons m3-l2 and m3-l3), which reproduce the shell theorem in two lines.

## Core Explanation

### Mass and centre of mass

A solid $E$ with density $\rho(x,y,z)$ (kg m$^{-3}$) has mass and centre of mass

$$M = \iiint_E \rho\,dV, \qquad \bar{\mathbf{r}} = \frac{1}{M}\iiint_E \mathbf{r}\,\rho\,dV,$$

that is, $\bar x = \frac1M\iiint x\rho\,dV$ and similarly for $\bar y$, $\bar z$. For a lamina replace $\rho\,dV$ by $\sigma\,dA$; for a wire, by $\lambda\,ds$ (Lesson m3-l1). When $\rho$ is constant the centre of mass is the **centroid**, a purely geometric point. Symmetry is the first tool: if $E$ and $\rho$ are symmetric under $x \to -x$, then $\bar x = 0$ without calculation.

**Solid hemisphere.** For $r \le R$, $0 \le \theta \le \pi/2$, symmetry gives $\bar x = \bar y = 0$, and

$$\iiint z\,dV = \int_0^{2\pi}\int_0^{\pi/2}\int_0^R (r\cos\theta)\,r^2\sin\theta\,dr\,d\theta\,d\phi = 2\pi\cdot\frac{R^4}{4}\cdot\frac12 = \frac{\pi R^4}{4}.$$

Dividing by $V = \tfrac23\pi R^3$ gives $\bar z = \tfrac38 R$.

### Moments of inertia

The **moment of inertia** about an axis is

$$I = \iiint_E d_\perp^2\,\rho\,dV,$$

where $d_\perp$ is the perpendicular distance from the axis; for the $z$-axis $d_\perp^2 = x^2 + y^2$. It sets the rotational kinetic energy $\tfrac12 I\omega^2$ and angular momentum $I\omega$.

**Solid cylinder about its axis** (radius $R$, height $h$, uniform): in cylindrical coordinates $d_\perp = r$, so

$$I = \rho\int_0^h\int_0^{2\pi}\int_0^R r^2\cdot r\,dr\,d\theta\,dz = \rho\cdot 2\pi h\cdot\frac{R^4}{4} = \tfrac12 MR^2, \qquad M = \rho\pi R^2 h.$$

**Solid sphere about a diameter**: in spherical coordinates $d_\perp^2 = x^2 + y^2 = r^2\sin^2\theta$, so

$$I = \rho\int_0^{2\pi}\int_0^\pi\int_0^R r^4\sin^3\theta\,dr\,d\theta\,d\phi = \rho\cdot 2\pi\cdot\frac43\cdot\frac{R^5}{5} = \frac{8\pi\rho R^5}{15} = \tfrac25 MR^2,$$

using $\int_0^\pi\sin^3\theta\,d\theta = \tfrac43$ and $M = \tfrac43\pi\rho R^3$. For a radially varying density the same steps give $I = \tfrac{8\pi}{3}\int_0^R\rho(r)\,r^4\,dr$.

| Body (uniform, mass $M$) | Axis | $I$ |
|---|---|---|
| Solid cylinder or disc, radius $R$ | symmetry axis | $\tfrac12 MR^2$ |
| Solid sphere, radius $R$ | diameter | $\tfrac25 MR^2$ |
| Thin spherical shell, radius $R$ | diameter | $\tfrac23 MR^2$ |
| Solid cone, base radius $R$ | symmetry axis | $\tfrac{3}{10}MR^2$ |
| Rectangular plate $a\times b$ | normal axis through centre | $\tfrac{1}{12}M(a^2 + b^2)$ |

**Parallel-axis theorem.** Let an axis pass through the centre of mass, and a parallel axis lie at perpendicular displacement $\mathbf{d}$. Writing each point's perpendicular position relative to the first axis as $\mathbf{s}$, its distance from the second is $|\mathbf{s} - \mathbf{d}|$, and

$$I = \int|\mathbf{s} - \mathbf{d}|^2dm = \int s^2\,dm - 2\mathbf{d}\cdot\int\mathbf{s}\,dm + d^2M = I_{\text{cm}} + Md^2,$$

because $\int\mathbf{s}\,dm = \mathbf{0}$ about the centre of mass. **Perpendicular-axis theorem.** For a lamina in the $xy$-plane, $I_z = \iint(x^2 + y^2)\sigma\,dA = I_x + I_y$.

Integrals of this kind are easily checked by Monte Carlo sampling; the pure-Python script below estimates $I/(MR^2)$ for a uniform ball and should print a value close to 0.400.

```python
import random

random.seed(1)
N, inside, sum_d2 = 200_000, 0, 0.0
for _ in range(N):
    x, y, z = (random.uniform(-1, 1) for _ in range(3))
    if x*x + y*y + z*z <= 1:          # point lies in the unit ball
        inside += 1
        sum_d2 += x*x + y*y           # squared distance from the z-axis
print("I/(M R^2) ~", sum_d2 / inside)  # exact value 2/5
```

### Gravitational potential of an extended body

The potential at a field point $\mathbf{r}$ due to mass density $\rho(\mathbf{r}')$ is the superposition of point-mass potentials:

$$\Phi(\mathbf{r}) = -G\iiint\frac{\rho(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|}\,dV', \qquad \mathbf{g} = -\nabla\Phi.$$

Integrating a scalar and then taking a gradient is far easier than integrating the vector force directly.

**Uniform shell.** Let a shell of radius $a$ carry surface density $\sigma$, total mass $m = 4\pi a^2\sigma$, and put the field point on the $z$-axis at distance $s$ from the centre. By the law of cosines $|\mathbf{r} - \mathbf{r}'| = \sqrt{a^2 + s^2 - 2as\cos\theta}$, and with $dA = a^2\sin\theta\,d\theta\,d\phi$,

$$\Phi(s) = -G\sigma a^2\int_0^{2\pi}\int_0^\pi\frac{\sin\theta\,d\theta\,d\phi}{\sqrt{a^2 + s^2 - 2as\cos\theta}}.$$

Substitute $u = a^2 + s^2 - 2as\cos\theta$, $du = 2as\sin\theta\,d\theta$, with $u$ running from $(s-a)^2$ to $(s+a)^2$:

$$\int_0^\pi\frac{\sin\theta\,d\theta}{\sqrt{u}} = \frac{1}{2as}\int_{(s-a)^2}^{(s+a)^2}u^{-1/2}\,du = \frac{(s + a) - |s - a|}{as}.$$

For $s > a$ this is $2/s$; for $s < a$ it is $2/a$. Therefore

$$\Phi(s) = \begin{cases} -\dfrac{Gm}{s}, & s > a,\\[2mm] -\dfrac{Gm}{a}, & s < a.\end{cases}$$

Outside, the shell acts as a point mass at its centre; inside, the potential is constant, so $\mathbf{g} = \mathbf{0}$. This is **Newton's shell theorem**. Note the absolute value $|s - a|$: the square root of $(s-a)^2$ is the positive root.

**Uniform solid sphere** (mass $M$, radius $R$, density $\rho = 3M/4\pi R^3$). Build it from shells of radius $a$ and mass $dm = 4\pi\rho a^2\,da$. At $s \ge R$ every shell lies inside radius $s$, so $\Phi = -GM/s$. At $s < R$, shells with $a < s$ contribute $-G\,dm/s$ and shells with $a > s$ contribute $-G\,dm/a$:

$$\Phi(s) = -\frac{G}{s}\cdot\frac{Ms^3}{R^3} - 4\pi G\rho\int_s^R a\,da = -\frac{GMs^2}{R^3} - \frac{3GM}{2R^3}(R^2 - s^2) = -\frac{GM}{2R^3}\left(3R^2 - s^2\right).$$

The two forms agree at $s = R$, the field inside is $g = -d\Phi/ds = -GMs/R^3$ (directed inwards, growing linearly with $s$), and the potential at the centre is $\Phi(0) = -\tfrac32 GM/R$.

## Key Ideas

- **Mass and centre of mass**: $M = \iiint\rho\,dV$, $\bar{\mathbf{r}} = \frac1M\iiint\mathbf{r}\rho\,dV$; symmetry often fixes components without calculation.
- **Moment of inertia**: $I = \iiint d_\perp^2\rho\,dV$; the standard results $\tfrac12MR^2$, $\tfrac25MR^2$, $\tfrac{3}{10}MR^2$ follow from cylindrical and spherical coordinates.
- **Parallel-axis theorem**: $I = I_{\text{cm}} + Md^2$; **perpendicular-axis theorem**: $I_z = I_x + I_y$ for laminae.
- **Potential of an extended body**: $\Phi = -G\iiint\rho\,dV'/|\mathbf{r} - \mathbf{r}'|$, then $\mathbf{g} = -\nabla\Phi$.
- **Shell theorem**: outside a uniform shell $\Phi = -Gm/s$; inside it is constant and the field vanishes.
- **Solid sphere**: $\Phi = -GM(3R^2 - s^2)/2R^3$ inside, $g \propto s$, and $\Phi(0) = -\tfrac32GM/R$.

## Worked Examples

### Example 1 — Solid cone: centroid and moment of inertia

A uniform solid cone of height $h$ and base radius $R$ has its apex at the origin and axis along $z$. Find the centroid and $I$ about the axis; evaluate $I$ for $M = 2.0$ kg, $R = 0.10$ m.

**Solution.** At height $z$ the cross-section is a disc of radius $Rz/h$. In cylindrical coordinates,

$$V = \int_0^h \pi\frac{R^2z^2}{h^2}\,dz = \frac{\pi R^2 h}{3}, \qquad \iiint z\,dV = \int_0^h\pi\frac{R^2z^3}{h^2}\,dz = \frac{\pi R^2h^2}{4},$$

so $\bar z = \tfrac34 h$ from the apex. For the moment of inertia,

$$I = \rho\int_0^h\int_0^{2\pi}\int_0^{Rz/h}r^3\,dr\,d\theta\,dz = \rho\cdot\frac{2\pi}{4}\cdot\frac{R^4}{h^4}\cdot\frac{h^5}{5} = \frac{\pi\rho R^4h}{10}.$$

Dividing by $M = \rho\pi R^2h/3$ gives $I = \tfrac{3}{10}MR^2 = 0.3 \times 2.0 \times 0.010 = 6.0\times10^{-3}\ \text{kg m}^2$.

### Example 2 — Inside a uniform Earth

Model the Earth as a uniform sphere with $GM = 3.986\times10^{14}\ \text{m}^3\text{s}^{-2}$ and $R = 6.371\times10^6$ m. Find the potential at the surface and at the centre, and the period of a body dropped through a frictionless tunnel along a diameter.

**Solution.** At the surface $\Phi(R) = -GM/R = -6.26\times10^7\ \text{J kg}^{-1}$; at the centre $\Phi(0) = -\tfrac32 GM/R = -9.39\times10^7\ \text{J kg}^{-1}$. Lifting 1 kg from the centre to the surface needs $GM/2R = 3.13\times10^7$ J.

Inside, $\ddot s = -GMs/R^3$: simple harmonic motion with $\omega^2 = GM/R^3$, so

$$T = 2\pi\sqrt{\frac{R^3}{GM}} = 2\pi\sqrt{\frac{2.586\times10^{20}}{3.986\times10^{14}}} = 2\pi\times 805.5\ \text{s} = 5.06\times10^3\ \text{s} \approx 84\ \text{min},$$

the same as the period of a satellite skimming the surface.

### Example 3 — A centrally condensed planet

A planet has density $\rho(r) = \rho_0(1 - r^2/R^2)$. Find its moment-of-inertia factor $I/(MR^2)$.

**Solution.** The mass is

$$M = 4\pi\rho_0\int_0^R\left(r^2 - \frac{r^4}{R^2}\right)dr = 4\pi\rho_0\left(\frac{R^3}{3} - \frac{R^3}{5}\right) = \frac{8\pi\rho_0R^3}{15}.$$

Using $I = \tfrac{8\pi}{3}\int_0^R\rho(r)\,r^4\,dr$,

$$I = \frac{8\pi\rho_0}{3}\left(\frac{R^5}{5} - \frac{R^5}{7}\right) = \frac{16\pi\rho_0R^5}{105}, \qquad \frac{I}{MR^2} = \frac{16/105}{8/15} = \frac27 \approx 0.286.$$

The value is below the uniform-sphere $0.4$ because mass is concentrated towards the centre. The Earth's measured factor, $0.331$, shows it is centrally condensed (an iron core) but less so than this model.

## Common Misconceptions

- **"The centre of mass must lie inside the body."** A ring, a horseshoe or a hollow hemisphere has its centre of mass in empty space.
- **"The moment of inertia uses the distance from the origin."** It uses the perpendicular distance from the axis, $d_\perp^2 = x^2 + y^2$ for the $z$-axis, not $r^2 = x^2 + y^2 + z^2$.
- **"The parallel-axis theorem works between any two parallel axes."** One of the axes must pass through the centre of mass; otherwise the cross term does not vanish.
- **"Gravity is zero at the centre, so the potential is zero there."** The field is zero at the centre, but the potential is at its minimum, $-\tfrac32GM/R$; field and potential are different quantities.
- **"Inside a hollow shell, the near side pulls harder and wins."** A thin double cone through the particle cuts the shell in two patches whose areas grow as the square of their distances while the pull falls as the inverse square, so opposite patches cancel exactly, as the constant potential confirms.

## Connections

- Moments of inertia of rigid bodies and the parallel-axis theorem are the core of mechanics Lesson m3-l3; this lesson derives the tabulated values from first principles.
- The interior field $g \propto s$ and the shell theorem are central to hydrostatic equilibrium in stellar interiors (astrophysics-iii Lesson m2-l4), where $dP/dr = -G M(r)\rho/r^2$.
- The same integrals with $1/4\pi\varepsilon_0$ in place of $-G$ give the potential of a uniformly charged sphere in electricity-and-magnetism Lesson m1-l3.
- The moment-of-inertia factor, measured from precession of the spin axis (astrophysics-i Lesson m2-l3), constrains the interior structure of the Earth and other planets.
- The inertia tensor, a symmetric matrix of integrals $\iiint(r^2\delta_{ij} - x_ix_j)\rho\,dV$, has principal axes given by its eigenvectors (linear-algebra Lesson m3-l3).

## Quick Check

1. Find the centroid of the quarter-disc $x^2 + y^2 \le a^2$, $x, y \ge 0$.
2. Use the parallel-axis theorem to find $I$ of a uniform rod of length $L$ about one end, given $I_{\text{cm}} = ML^2/12$.
3. Derive $I = \tfrac23MR^2$ for a thin spherical shell about a diameter.
4. A uniform sphere has $M = 5.0$ kg and $R = 0.20$ m. Find its moment of inertia about a tangent line.
5. Sketch $\Phi(s)$ for a uniform solid sphere from $s = 0$ to $s = 3R$ and explain why it is smooth at $s = R$.

## Takeaway

- Every bulk property of a solid is a density-weighted integral: mass, centre of mass, moment of inertia, potential.
- Cylindrical and spherical coordinates reduce the standard moments of inertia to one-line integrals.
- The parallel- and perpendicular-axis theorems extend a few computed results to many axes.
- Direct integration over a shell proves Newton's shell theorem: point-mass potential outside, constant potential inside.
- Adding shells gives the interior potential of a planet, $-GM(3R^2 - s^2)/2R^3$, and with it the field, tunnel period and central potential.
