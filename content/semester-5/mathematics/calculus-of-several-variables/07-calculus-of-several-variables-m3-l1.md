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
lessonId: calculus-of-several-variables-m3-l1
lessonName: Vector Fields, Line Integrals and Conservative Fields
lessonNumber: 7
moduleNumber: 3
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - calculus-of-several-variables-m2-l3
  - mechanics-m3-l1
  - mechanics-m3-l2
learningObjectives:
  - Describe vector fields and compute their divergence $\nabla\cdot\mathbf{F}$ and curl $\nabla\times\mathbf{F}$.
  - Evaluate scalar line integrals $\int_C f\,ds$ and vector line integrals $\int_C \mathbf{F}\cdot d\mathbf{r}$ along parametrised curves, and interpret the latter as work.
  - Prove and apply the fundamental theorem for line integrals, $\int_C\nabla f\cdot d\mathbf{r} = f(B) - f(A)$.
  - Test a field for conservativeness with the curl, construct a potential function, and explain why the test requires a simply connected domain.
concepts:
  - Vector field
  - Divergence and curl
  - Line integral
  - Work as a line integral
  - Fundamental theorem for line integrals
  - Conservative field and potential function
  - Simply connected domain
tags:
  - mathematics
  - calculus-of-several-variables
  - line-integrals
  - conservative-fields
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Vector Fields, Line Integrals and Conservative Fields

## Overview

Module 3 is vector calculus: the calculus of fields such as gravity, fluid velocity and the electric and magnetic fields. This lesson introduces vector fields and the two derivative operators that act on them, divergence and curl, and then defines the line integral, which adds up a field along a curve. The line integral of a force along a path is the work done, and for one special class of fields, the conservative ones, the work depends only on the endpoints. The fundamental theorem for line integrals makes this precise: the line integral of a gradient is the difference of the potential at the two ends. We then answer the practical question of how to recognise a conservative field, using the curl, and meet the subtle role of the shape of the domain through the vortex field, whose curl vanishes but whose circulation does not.

## Learning Path

- **What you should already know**: the gradient and the chain rule $df/dt = \nabla f\cdot\mathbf{r}'(t)$ (Lesson m1-l2); Clairaut's theorem (Lesson m1-l1); work, kinetic energy and power (mechanics Lesson m3-l1); conservative forces and potential energy (mechanics Lesson m3-l2).
- **What this lesson adds**: vector fields, divergence and curl; scalar and vector line integrals; the fundamental theorem for line integrals; the equivalent characterisations of conservative fields; construction of potentials.
- **What later lessons this will unlock**: Green's theorem, which relates circulation around a closed curve to the curl inside it (Lesson m3-l2); Stokes' theorem and Faraday's law of induction (Lesson m3-l3).

## Core Explanation

### Vector fields, divergence and curl

A **vector field** on a region $D \subseteq \mathbb{R}^3$ assigns a vector $\mathbf{F}(x,y,z) = (P, Q, R)$ to each point. Examples are the gravitational field $\mathbf{g} = -GM\mathbf{r}/r^3$, the velocity field of a rigidly rotating fluid $\mathbf{v} = \omega(-y, x, 0)$, and any gradient field $\nabla f$. **Field lines** are curves tangent to $\mathbf{F}$ at every point.

With the operator $\nabla = (\partial_x, \partial_y, \partial_z)$ we define the **divergence** (a scalar) and the **curl** (a vector):

$$\nabla\cdot\mathbf{F} = \frac{\partial P}{\partial x} + \frac{\partial Q}{\partial y} + \frac{\partial R}{\partial z}, \qquad \nabla\times\mathbf{F} = \begin{vmatrix}\mathbf{i} & \mathbf{j} & \mathbf{k}\\ \partial_x & \partial_y & \partial_z\\ P & Q & R\end{vmatrix} = \left(R_y - Q_z,\ P_z - R_x,\ Q_x - P_y\right).$$

For the rotating fluid, $\nabla\times\mathbf{v} = (0, 0, 2\omega)$ and $\nabla\cdot\mathbf{v} = 0$: the curl measures rotation (twice the angular velocity), while the divergence measures outflow per unit volume, interpreted fully in Lesson m3-l2. Two identities follow from Clairaut's theorem for fields with continuous second partials:

$$\nabla\times(\nabla f) = \mathbf{0}, \qquad \nabla\cdot(\nabla\times\mathbf{F}) = 0.$$

For example, the $z$-component of $\nabla\times\nabla f$ is $f_{yx} - f_{xy} = 0$.

### Line integrals

Let $C$ be a smooth curve parametrised by $\mathbf{r}(t)$, $a \le t \le b$. The arc-length element is $ds = |\mathbf{r}'(t)|\,dt$, and the **scalar line integral** is

$$\int_C f\,ds = \int_a^b f(\mathbf{r}(t))\,|\mathbf{r}'(t)|\,dt.$$

With $f = 1$ it is the length of $C$; with $f = \lambda$, a linear density, it is the mass of a wire. For the helix $\mathbf{r} = (\cos t, \sin t, t)$, $0 \le t \le 2\pi$, $|\mathbf{r}'| = \sqrt2$, so the length is $2\sqrt2\,\pi$. The value does not depend on the parametrisation or on the direction of travel.

The **line integral of a vector field** adds the tangential component of $\mathbf{F}$ along $C$:

$$\int_C\mathbf{F}\cdot d\mathbf{r} = \int_a^b\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)\,dt = \int_C P\,dx + Q\,dy + R\,dz.$$

If $\mathbf{F}$ is a force, this is the **work** done on a particle moving along $C$, the natural extension of $W = \int F\,dx$. If $C$ is closed, $\oint_C\mathbf{F}\cdot d\mathbf{r}$ is the **circulation**. Unlike the scalar integral, this one depends on orientation: reversing the direction of travel changes its sign, $\int_{-C}\mathbf{F}\cdot d\mathbf{r} = -\int_C\mathbf{F}\cdot d\mathbf{r}$. It is independent of how an orientation-preserving parametrisation is chosen, by the chain rule. Piecewise-smooth curves are handled by adding the integrals over the pieces.

### The fundamental theorem for line integrals

**Theorem.** If $f$ has continuous partial derivatives on an open set containing the smooth curve $C$ from $A = \mathbf{r}(a)$ to $B = \mathbf{r}(b)$, then

$$\int_C\nabla f\cdot d\mathbf{r} = f(B) - f(A).$$

*Proof.* By the chain rule, $\nabla f(\mathbf{r}(t))\cdot\mathbf{r}'(t) = \frac{d}{dt}f(\mathbf{r}(t))$, so the integral is $\int_a^b\frac{d}{dt}f(\mathbf{r}(t))\,dt = f(\mathbf{r}(b)) - f(\mathbf{r}(a))$ by the one-variable fundamental theorem. $\square$

A field $\mathbf{F}$ is **conservative** if $\mathbf{F} = \nabla f$ for some **potential function** $f$. In physics the potential energy is $U = -f$, so $\mathbf{F} = -\nabla U$ and the work done by the force is $W = U(A) - U(B)$: the loss of potential energy, which is the work–energy statement of mechanics.

### Characterising conservative fields

On an open connected region $D$ the following are equivalent:

1. $\mathbf{F} = \nabla f$ for some $f$ on $D$;
2. $\int_C\mathbf{F}\cdot d\mathbf{r}$ is **path independent**: it depends only on the endpoints;
3. $\oint_C\mathbf{F}\cdot d\mathbf{r} = 0$ for every closed curve $C$ in $D$.

(1)$\Rightarrow$(2) is the fundamental theorem. (2)$\Leftrightarrow$(3) because two paths from $A$ to $B$ form a closed loop when one is reversed. For (2)$\Rightarrow$(1), fix $A$ and define $f(\mathbf{x}) = \int_A^{\mathbf{x}}\mathbf{F}\cdot d\mathbf{r}$ along any path; extending the path by a short straight segment in the $x$-direction shows $f_x = P$, and similarly $f_y = Q$, $f_z = R$.

**The curl test.** If $\mathbf{F} = \nabla f$, then $\nabla\times\mathbf{F} = \nabla\times\nabla f = \mathbf{0}$. Conversely, if $\nabla\times\mathbf{F} = \mathbf{0}$ on a **simply connected** domain (one in which every closed curve can be shrunk to a point without leaving the domain), then $\mathbf{F}$ is conservative; the proof uses Stokes' theorem (Lesson m3-l3). In two dimensions the test is $Q_x = P_y$.

The hypothesis is essential. The **vortex field**

$$\mathbf{F} = \frac{(-y, x)}{x^2 + y^2}, \qquad (x,y) \ne (0,0),$$

has $Q_x - P_y = \dfrac{y^2 - x^2}{(x^2+y^2)^2} - \dfrac{y^2 - x^2}{(x^2+y^2)^2} = 0$, yet around the unit circle $\mathbf{r} = (\cos t, \sin t)$ we have $\mathbf{F}\cdot\mathbf{r}' = \sin^2t + \cos^2t = 1$ and $\oint\mathbf{F}\cdot d\mathbf{r} = 2\pi \ne 0$. The punctured plane is not simply connected: the circle cannot be shrunk past the hole at the origin. Locally $\mathbf{F} = \nabla\theta$, but the polar angle $\theta$ is not single-valued around the origin. The magnetic field of a long straight wire has exactly this form.

The figure contrasts a gradient field with a rotational one; expect radial arrows for $\nabla(\tfrac12 r^2) = (x, y)$ and circulating arrows for $(-y, x)$, whose curl is $2\mathbf{k}$.

```python
import numpy as np
import matplotlib.pyplot as plt

x, y = np.meshgrid(np.linspace(-2, 2, 15), np.linspace(-2, 2, 15))
fig, ax = plt.subplots(1, 2, figsize=(9, 4))
ax[0].quiver(x, y, x, y);  ax[0].set_title("conservative: (x, y)")
ax[1].quiver(x, y, -y, x); ax[1].set_title("rotational: (-y, x)")
for a in ax: a.set_aspect("equal")
plt.show()
```

### Finding a potential

To find $f$ with $\nabla f = (P, Q, R)$: integrate $P$ with respect to $x$, adding an arbitrary function $g(y,z)$; differentiate with respect to $y$ and match to $Q$ to determine $g$ up to a function of $z$; repeat with $R$. Example 2 carries this out.

## Key Ideas

- **Divergence** $\nabla\cdot\mathbf{F}$ measures outflow per unit volume and **curl** $\nabla\times\mathbf{F}$ measures local rotation; $\nabla\times\nabla f = \mathbf{0}$ and $\nabla\cdot\nabla\times\mathbf{F} = 0$.
- **Scalar line integral** $\int_C f\,ds$ gives length or mass and ignores orientation.
- **Vector line integral** $\int_C\mathbf{F}\cdot d\mathbf{r} = \int\mathbf{F}(\mathbf{r}(t))\cdot\mathbf{r}'(t)\,dt$ gives work or circulation and changes sign with orientation.
- **Fundamental theorem**: $\int_C\nabla f\cdot d\mathbf{r} = f(B) - f(A)$.
- **Conservative fields**: gradient $\Leftrightarrow$ path independence $\Leftrightarrow$ zero circulation, on a connected open region.
- **Curl test**: $\nabla\times\mathbf{F} = \mathbf{0}$ implies conservative only on a simply connected domain; the vortex field is the standard counterexample.

## Worked Examples

### Example 1 — Work along two paths

Compute the work done by $\mathbf{F} = (x^2, xy)$ (newtons, with lengths in metres) on a particle moving from $(0,0)$ to $(1,1)$ (a) along $y = x$ and (b) along $y = x^2$. Is $\mathbf{F}$ conservative?

**Solution.** (a) With $\mathbf{r} = (t, t)$, $\mathbf{r}' = (1,1)$ and $\mathbf{F} = (t^2, t^2)$:

$$W_a = \int_0^1 2t^2\,dt = \tfrac23\ \text{J}.$$

(b) With $\mathbf{r} = (t, t^2)$, $\mathbf{r}' = (1, 2t)$ and $\mathbf{F} = (t^2, t^3)$:

$$W_b = \int_0^1\left(t^2 + 2t^4\right)dt = \tfrac13 + \tfrac25 = \tfrac{11}{15}\ \text{J}.$$

The works differ, so $\mathbf{F}$ is not conservative, consistent with $Q_x - P_y = y \ne 0$.

### Example 2 — Constructing a potential

Show that $\mathbf{F} = (2xy + z^2,\ x^2,\ 2xz)$ is conservative, find a potential, and compute the work done along any path from $(0,0,0)$ to $(1,2,3)$.

**Solution.** The curl is

$$\nabla\times\mathbf{F} = \left(\partial_y(2xz) - \partial_z(x^2),\ \partial_z(2xy + z^2) - \partial_x(2xz),\ \partial_x(x^2) - \partial_y(2xy + z^2)\right) = (0,\ 2z - 2z,\ 2x - 2x) = \mathbf{0},$$

and $\mathbb{R}^3$ is simply connected, so $\mathbf{F}$ is conservative. Integrating $P$ in $x$: $f = x^2y + xz^2 + g(y,z)$. Then $f_y = x^2 + g_y = Q = x^2$ gives $g = h(z)$, and $f_z = 2xz + h'(z) = R = 2xz$ gives $h$ constant. Hence $f = x^2y + xz^2$, and

$$W = f(1,2,3) - f(0,0,0) = 2 + 9 = 11\ \text{J}$$

along every path.

### Example 3 — Raising a satellite to geostationary orbit

Find the work done by Earth's gravity on a 1000 kg satellite moved from the surface ($r_1 = 6.371\times10^6$ m) to geostationary radius ($r_2 = 4.216\times10^7$ m), with $GM = 3.986\times10^{14}\ \text{m}^3\text{s}^{-2}$.

**Solution.** The force $\mathbf{F} = -GMm\,\mathbf{r}/r^3$ equals $\nabla(GMm/r)$, since $\nabla(1/r) = -\mathbf{r}/r^3$ (using $\partial r/\partial x = x/r$). By the fundamental theorem, for any path,

$$W = GMm\left(\frac{1}{r_2} - \frac{1}{r_1}\right) = 3.986\times10^{17}\left(2.372\times10^{-8} - 1.570\times10^{-7}\right) = -5.31\times10^{10}\ \text{J}.$$

Gravity does negative work, so at least $5.31\times10^{10}$ J must be supplied to raise the satellite, before adding its orbital kinetic energy. The spiral route a real launch takes is irrelevant to this number.

## Common Misconceptions

- **"A line integral of a vector field does not depend on direction."** Reversing the curve reverses $d\mathbf{r}$ and changes the sign; only the scalar integral $\int f\,ds$ is orientation-independent.
- **"Zero curl always means conservative."** Only on a simply connected domain; the vortex field has zero curl on the punctured plane but circulation $2\pi$ around the origin.
- **"If the work around one closed loop is zero, the field is conservative."** Every closed loop must give zero. The field $(-y, x)$ has zero circulation around a figure-of-eight traversed with opposite senses, yet curl $2\mathbf{k}$.
- **"Potential energy and potential function are the same."** With the mathematical convention $\mathbf{F} = \nabla f$, the potential energy is $U = -f$; mixing the conventions produces sign errors in the work.
- **"Path independence means the work is zero."** It means the work depends only on the endpoints; it is zero only for closed paths.

## Connections

- The work–energy theorem and conservative forces of mechanics Lessons m3-l1 and m3-l2 are restated here as line integrals and the fundamental theorem for gradients.
- The electrostatic potential difference $V_B - V_A = -\int_A^B\mathbf{E}\cdot d\mathbf{r}$ (electricity-and-magnetism Lesson m1-l3) is path independent because $\nabla\times\mathbf{E} = \mathbf{0}$ in electrostatics.
- The vortex field is the magnetic field of a straight current, $\mathbf{B} = (\mu_0I/2\pi)(-y, x)/(x^2+y^2)$; its circulation $\mu_0I$ is Ampère's law (electricity-and-magnetism Lesson m3-l2).
- Exact differential equations $P\,dx + Q\,dy = 0$ with $P_y = Q_x$ (differential-equations Lesson m1-l3) are solved by finding a potential, exactly as in Example 2.
- Thermodynamic state functions have exact differentials, while heat and work are path dependent: $\oint dU = 0$ but $\oint\delta Q \ne 0$ around a cycle (thermal-physics-and-statistical-mechanics Lesson m2-l2).

## Quick Check

1. Compute $\nabla\cdot\mathbf{F}$ and $\nabla\times\mathbf{F}$ for $\mathbf{F} = (xy, yz, zx)$.
2. Find the mass of the wire $\mathbf{r}(t) = (3\cos t, 3\sin t, 4t)$, $0 \le t \le \pi$, with density $\lambda = 2\ \text{kg m}^{-1}$.
3. Evaluate $\int_C y\,dx - x\,dy$ counterclockwise around the circle $x^2 + y^2 = 4$.
4. Determine whether $\mathbf{F} = (e^y, xe^y + \cos z, -y\sin z)$ is conservative; if so, find its potential.
5. Explain why $\oint_C\mathbf{F}\cdot d\mathbf{r} = 0$ for the vortex field around any closed curve that does not enclose the origin.

## Takeaway

- Vector fields carry divergence (outflow) and curl (rotation), linked to the gradient by two Clairaut identities.
- The line integral $\int_C\mathbf{F}\cdot d\mathbf{r}$ is work or circulation; it depends on orientation and usually on the path.
- For gradient fields the fundamental theorem makes the work depend only on the endpoints.
- Conservative, path-independent and circulation-free are equivalent; zero curl implies all three on simply connected domains.
- Gravity and electrostatics are conservative, which is why potentials and potential energies exist for them.
