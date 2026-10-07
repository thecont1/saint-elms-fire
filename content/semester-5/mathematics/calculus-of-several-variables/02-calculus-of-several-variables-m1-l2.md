***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: calculus-of-several-variables
courseName: Calculus of Several Variables (Mathematics Elective II)
moduleId: calculus-of-several-variables-module-1
moduleName: Differentiation in Several Variables
lessonId: calculus-of-several-variables-m1-l2
lessonName: Differentiability, the Chain Rule, Gradient and Directional Derivatives
lessonNumber: 2
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - calculus-of-several-variables-m1-l1
  - differential-calculus-m2-l2
  - mechanics-m3-l2
learningObjectives:
  - State the definition of differentiability for $f:\mathbb{R}^n \to \mathbb{R}$, write the tangent-plane and linear approximations, and explain why continuous partials imply differentiability.
  - Apply the multivariable chain rule, in both the path form $df/dt = \nabla f \cdot \mathbf{r}'(t)$ and the Jacobian-matrix form, to composite and implicitly defined functions.
  - Compute directional derivatives $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u}$ and identify the direction and magnitude of the steepest ascent.
  - Use the gradient as the normal to a level surface to find tangent planes, and interpret $\mathbf{F} = -\nabla V$ for conservative forces and fields.
concepts:
  - Differentiability and the linear approximation
  - Tangent plane
  - Multivariable chain rule
  - Jacobian matrix
  - Gradient vector
  - Directional derivative
  - Implicit differentiation in several variables
tags:
  - mathematics
  - calculus-of-several-variables
  - gradient
  - chain-rule
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Differentiability, the Chain Rule, Gradient and Directional Derivatives

## Overview

Partial derivatives describe change along the coordinate axes, but a physicist usually wants the rate of change in an arbitrary direction or along a moving particle's path. One object answers both questions: the gradient vector $\nabla f$. We first define differentiability as the existence of a good linear approximation, which is exactly the condition for a tangent plane. The chain rule follows in two forms: the path form, giving the rate of change seen by a moving observer, and the matrix form, which composes Jacobians. The directional derivative is the dot product of the gradient with the unit direction, so the gradient points along steepest ascent and is perpendicular to level sets. That fact gives tangent planes, implicit differentiation, and the statement that a conservative force is minus the gradient of its potential energy.

## Learning Path

- **What you should already know**: partial derivatives and their notation (Lesson m1-l1); the one-variable chain rule and linear approximation (differential-calculus Lesson m2-l2); dot products and unit vectors; potential energy of a conservative force (mechanics Lesson m3-l2).
- **What this lesson adds**: differentiability and tangent planes; the chain rule in path and Jacobian form; the gradient, directional derivatives and normals to level sets; implicit differentiation.
- **What later lessons this will unlock**: Taylor expansion, the Hessian and Lagrange multipliers, which use the gradient as normal to a constraint surface (Lesson m1-l3); Jacobians in change of variables (Lesson m2-l2); conservative fields and the fundamental theorem for line integrals (Lesson m3-l1).

## Core Explanation

### Differentiability and the tangent plane

In one variable, $f$ is differentiable at $a$ if $f(a+h) = f(a) + f'(a)h + \varepsilon(h)h$ with $\varepsilon(h) \to 0$: a line approximates $f$ with error small compared with $h$. The same idea works in several variables.

**Definition.** $f(x,y)$ is **differentiable at $(a,b)$** if there are numbers $A$, $B$ such that

$$f(a+h, b+k) = f(a,b) + A h + B k + \varepsilon(h,k)\sqrt{h^2 + k^2}, \qquad \varepsilon(h,k) \to 0 \text{ as } (h,k) \to (0,0).$$

Setting $k = 0$ gives $A = f_x(a,b)$; setting $h = 0$ gives $B = f_y(a,b)$. The graph of the linear part,

$$z = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b),$$

is the **tangent plane** to $z = f(x,y)$ at $(a,b,f(a,b))$. Differentiability means the surface hugs this plane to first order in every direction, not merely along the coordinate lines. The **linear approximation**

$$f(x,y) \approx f(a,b) + f_x(a,b)\,\Delta x + f_y(a,b)\,\Delta y$$

underlies laboratory error propagation: for $Q(x,y)$ computed from measured $x$ and $y$, $\delta Q \approx |Q_x|\,\delta x + |Q_y|\,\delta y$ (or in quadrature for independent errors).

**Theorem 1.** If $f$ is differentiable at $(a,b)$, it is continuous there (let $(h,k) \to 0$ in the definition). **Theorem 2.** If $f_x$ and $f_y$ exist near $(a,b)$ and are continuous there, then $f$ is differentiable at $(a,b)$. The proof splits $f(a+h,b+k) - f(a,b)$ into a step in $x$ and a step in $y$, applies the one-variable mean value theorem to each, and uses continuity of the partials to move the evaluation points to $(a,b)$. Theorem 2 is why almost every function in physics is differentiable. The implications are strictly one-way:

$$\text{continuous partials} \implies \text{differentiable} \implies \text{continuous and partials exist}.$$

In three or more variables, $f(\mathbf{a} + \mathbf{h}) = f(\mathbf{a}) + \nabla f(\mathbf{a}) \cdot \mathbf{h} + o(|\mathbf{h}|)$ with $\nabla f = (f_x, f_y, f_z)$.

### The chain rule

A particle moving along $\mathbf{r}(t) = (x(t), y(t))$ through a temperature field $T(x,y)$ experiences $T(x(t), y(t))$, changing at the rate

$$\frac{dT}{dt} = \frac{\partial T}{\partial x}\frac{dx}{dt} + \frac{\partial T}{\partial y}\frac{dy}{dt} = \nabla T \cdot \mathbf{r}'(t).$$

This is the **chain rule in path form**. By differentiability, $\Delta T = T_x \Delta x + T_y \Delta y + \varepsilon\sqrt{\Delta x^2 + \Delta y^2}$; divide by $\Delta t$ and let $\Delta t \to 0$. The error term vanishes because $T$ is differentiable, not merely because its partials exist.

More generally, if $z = f(x,y)$ with $x = x(s,t)$ and $y = y(s,t)$, then

$$\frac{\partial z}{\partial s} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial s} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial s}, \qquad \frac{\partial z}{\partial t} = \frac{\partial z}{\partial x}\frac{\partial x}{\partial t} + \frac{\partial z}{\partial y}\frac{\partial y}{\partial t}.$$

A tree diagram generates every term: multiply along each path from $z$ to the independent variable, add over paths. In matrix form, for $\mathbf{F}: \mathbb{R}^n \to \mathbb{R}^m$ the **Jacobian matrix** $D\mathbf{F}$ has entries $\partial F_i/\partial x_j$, and

$$D(\mathbf{F}\circ\mathbf{G}) = (D\mathbf{F})(D\mathbf{G}),$$

an ordinary matrix product. For the polar map $(r,\theta) \mapsto (r\cos\theta, r\sin\theta)$,

$$D = \begin{pmatrix} \cos\theta & -r\sin\theta \\ \sin\theta & r\cos\theta \end{pmatrix}, \qquad \det D = r,$$

which reappears as the area factor $dA = r\,dr\,d\theta$ in Lesson m2-l1.

### The gradient and directional derivatives

The **gradient** of $f$ is

$$\nabla f = \left(\frac{\partial f}{\partial x}, \frac{\partial f}{\partial y}, \frac{\partial f}{\partial z}\right).$$

The **directional derivative** of $f$ at $\mathbf{a}$ along a unit vector $\mathbf{u}$ is the rate of change along the line $\mathbf{a} + t\mathbf{u}$:

$$D_{\mathbf{u}} f(\mathbf{a}) = \lim_{t\to 0}\frac{f(\mathbf{a} + t\mathbf{u}) - f(\mathbf{a})}{t} = \frac{d}{dt} f(\mathbf{a} + t\mathbf{u})\Big|_{t=0} = \nabla f(\mathbf{a}) \cdot \mathbf{u},$$

by the chain rule with $\mathbf{r}'(t) = \mathbf{u}$. With $\theta$ the angle between $\nabla f$ and $\mathbf{u}$,

$$D_{\mathbf{u}} f = |\nabla f|\cos\theta.$$

Three consequences follow:

- $f$ increases fastest along $\nabla f$, at the maximum rate $|\nabla f|$.
- $f$ decreases fastest along $-\nabla f$: the principle of gradient descent, and the reason heat flows along $-\nabla T$.
- $D_{\mathbf{u}} f = 0$ when $\mathbf{u} \perp \nabla f$, so $\nabla f$ is **normal to the level set**.

The last point is the geometric heart of the lesson. If $\mathbf{r}(t)$ is any curve in the level surface $F(x,y,z) = c$, differentiating $F(\mathbf{r}(t)) = c$ gives $\nabla F \cdot \mathbf{r}'(t) = 0$. Every tangent vector is perpendicular to $\nabla F$, so the **tangent plane** to $F = c$ at $\mathbf{a}$ is

$$\nabla F(\mathbf{a}) \cdot (\mathbf{x} - \mathbf{a}) = 0, \quad\text{i.e.}\quad F_x(x - a) + F_y(y - b) + F_z(z - c) = 0.$$

Writing the graph $z = f(x,y)$ as $F = f(x,y) - z = 0$, with $\nabla F = (f_x, f_y, -1)$, recovers the earlier formula. Likewise electric field lines, along $\mathbf{E} = -\nabla\phi$, cross equipotentials at right angles.

### Implicit differentiation

If $F(x,y) = 0$ defines $y(x)$, differentiating along the curve gives $F_x + F_y\,dy/dx = 0$, hence

$$\frac{dy}{dx} = -\frac{F_x}{F_y} \quad (F_y \ne 0),$$

and for a surface $F(x,y,z) = 0$ defining $z(x,y)$,

$$\frac{\partial z}{\partial x} = -\frac{F_x}{F_z}, \qquad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}.$$

The **implicit function theorem** guarantees a differentiable local solution whenever $F_z \ne 0$ and $F$ has continuous partials. For the van der Waals equation $(P + a n^2/V^2)(V - nb) = nRT$, which cannot be solved explicitly for $V$, these formulae give $(\partial V/\partial T)_P$ directly.

### Gradients in physics

Nature uses the gradient repeatedly: a conservative force is $\mathbf{F} = -\nabla V$, the electrostatic field $\mathbf{E} = -\nabla\phi$, heat flux obeys Fourier's law $\mathbf{q} = -k\nabla T$, diffusion obeys Fick's law $\mathbf{J} = -D\nabla c$, and the pressure force per unit volume is $-\nabla p$. The minus sign says that flow or force points downhill. Lesson m3-l1 shows that a force field has path-independent work exactly when it is a gradient.

## Key Ideas

- **Differentiability** means $f(\mathbf{a}+\mathbf{h}) = f(\mathbf{a}) + \nabla f(\mathbf{a})\cdot\mathbf{h} + o(|\mathbf{h}|)$; continuous partials guarantee it, and it guarantees continuity.
- **Chain rule**: $df/dt = \nabla f \cdot \mathbf{r}'(t)$ along a path; in general $D(\mathbf{F}\circ\mathbf{G}) = D\mathbf{F}\,D\mathbf{G}$ with Jacobian matrices.
- **Directional derivative**: $D_{\mathbf{u}} f = \nabla f \cdot \mathbf{u} = |\nabla f|\cos\theta$ for unit $\mathbf{u}$, so $\nabla f$ points along steepest ascent at rate $|\nabla f|$.
- **Normal to level sets**: $\nabla F$ is perpendicular to the surface $F = c$, giving tangent planes and implicit derivatives $\partial z/\partial x = -F_x/F_z$.
- **Physics**: forces, static fields and diffusive fluxes are minus the gradient of a scalar.

## Worked Examples

### Example 1 — Linear approximation and error propagation

Use the tangent plane to estimate $f(3.02, 1.97)$ for $f(x,y) = x^2 y$, and compare with the exact value.

**Solution.** At $(a,b) = (3,2)$, $f = 18$, $f_x = 2xy = 12$ and $f_y = x^2 = 9$. With $\Delta x = 0.02$, $\Delta y = -0.03$,

$$f(3.02, 1.97) \approx 18 + 12(0.02) + 9(-0.03) = 18 + 0.24 - 0.27 = 17.97.$$

The exact value is $(3.02)^2(1.97) = 17.967$; the error $0.003$ is second order, and the quadratic terms $\tfrac12 f_{xx}\Delta x^2 + f_{xy}\Delta x\Delta y = 0.0008 - 0.0036 = -0.0028$ account for almost all of it. For independent measurements $x = 3.00 \pm 0.02$ and $y = 2.00 \pm 0.03$, the uncertainty in $x^2 y$ is $\sqrt{(12 \times 0.02)^2 + (9 \times 0.03)^2} = 0.36$.

### Example 2 — Directional derivative of a temperature field

The temperature in a solid is $T(x,y,z) = \dfrac{80}{1 + x^2 + 2y^2 + 3z^2}$ in kelvin above ambient, with lengths in metres. At the point $P(1,1,-2)$, find the rate of change of $T$ in the direction of $\mathbf{v} = (1,-1,1)$, and the direction and magnitude of the greatest rate of increase.

**Solution.** Write $T = 80 D^{-1}$ with $D = 1 + x^2 + 2y^2 + 3z^2$, so $\nabla T = -80 D^{-2}(2x, 4y, 6z)$. At $P$, $D = 16$ and

$$\nabla T(P) = -\frac{80}{256}(2, 4, -12) = -\frac{5}{16}(2,4,-12) = \left(-\tfrac{5}{8}, -\tfrac{5}{4}, \tfrac{15}{4}\right)\ \text{K m}^{-1}.$$

The unit vector is $\mathbf{u} = (1,-1,1)/\sqrt{3}$, so

$$D_{\mathbf{u}} T = \frac{1}{\sqrt{3}}\left(-\tfrac{5}{8} + \tfrac{5}{4} + \tfrac{15}{4}\right) = \frac{35}{8\sqrt{3}} \approx 2.53\ \text{K m}^{-1}.$$

The greatest rate of increase is $|\nabla T| = \tfrac{5}{8}\sqrt{41} \approx 4.00\ \text{K m}^{-1}$, along $(-1, -2, 6)/\sqrt{41}$; heat flows the opposite way, along $-\nabla T$.

### Example 3 — Chain rule for an expanding gas

One mole of ideal gas has $PV = RT$. At an instant when $P = 2.0 \times 10^5$ Pa and $V = 0.010\ \text{m}^3$, the pressure is falling at $1.0 \times 10^3\ \text{Pa s}^{-1}$ while the volume grows at $2.0 \times 10^{-4}\ \text{m}^3\,\text{s}^{-1}$. Find $dT/dt$.

**Solution.** $T = PV/R$ depends on the time-dependent $P$ and $V$, so by the chain rule

$$\frac{dT}{dt} = \frac{\partial T}{\partial P}\frac{dP}{dt} + \frac{\partial T}{\partial V}\frac{dV}{dt} = \frac{V}{R}\frac{dP}{dt} + \frac{P}{R}\frac{dV}{dt}.$$

With $R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}$,

$$\frac{dT}{dt} = \frac{(0.010)(-1.0\times 10^3) + (2.0\times 10^5)(2.0\times 10^{-4})}{8.314} = \frac{-10 + 40}{8.314} = 3.6\ \text{K s}^{-1}.$$

The temperature (currently $T = PV/R = 241$ K) rises because the expansion term outweighs the pressure drop; the chain rule combines the two opposing contributions.

## Common Misconceptions

- **"If both partials exist, the function is differentiable."** No: $xy/(x^2+y^2)$ has partials at the origin but is not even continuous there. Continuous partials are the practical sufficient condition.
- **"The gradient is tangent to the surface $z = f(x,y)$."** $\nabla f = (f_x, f_y)$ lives in the $xy$-plane, perpendicular to the level curves; the normal to the graph is $(f_x, f_y, -1)$.
- **"$D_{\mathbf{u}} f = \nabla f \cdot \mathbf{v}$ for any direction vector $\mathbf{v}$."** The formula needs a unit vector; using $(1,-1,1)$ in Example 2 would overstate the rate by $\sqrt{3}$.
- **"The chain rule just means multiplying derivatives."** There is one term per route from dependent to independent variable, and the terms are added; omitting the $P\,dV/dt$ term of Example 3 gives the wrong sign.
- **"$\partial z/\partial x = F_x/F_z$ for an implicit surface."** Differentiating $F(x,y,z(x,y)) = 0$ gives $F_x + F_z z_x = 0$, so $z_x = -F_x/F_z$.

## Connections

- $\mathbf{F} = -\nabla V$ formalises the conservative forces of mechanics Lesson m3-l2; gravity $-GMm\hat{\mathbf{r}}/r^2$ is minus the gradient of $-GMm/r$, since $\partial r/\partial x = x/r$.
- Field lines cross equipotentials at right angles (electricity-and-magnetism Lesson m1-l3) because $\mathbf{E} = -\nabla\phi$ is normal to the level surfaces of $\phi$.
- The Jacobian matrix and $D(\mathbf{F}\circ\mathbf{G}) = D\mathbf{F}\,D\mathbf{G}$ view the derivative as a linear map (linear-algebra Lesson m1-l3); the Jacobian determinant measures volume scaling.
- Gradient descent (numerical-methods) moves along $-\nabla f$; Newton's variant uses the Hessian of Lesson m1-l3.
- Laboratory error propagation (mechanics-lab Lesson m1-l2) is this lesson's linear approximation applied to several measured inputs.

## Quick Check

1. Find the tangent plane to $z = x^2 + 3y^2$ at $(1,1,4)$ and use it to estimate $f(1.1, 0.9)$.
2. A particle moves along $\mathbf{r}(t) = (\cos t, \sin t, t)$ through the field $f = xyz$. Compute $df/dt$ at $t = \pi/2$.
3. For $f = x e^{y} + z^2$ at $(1, 0, 2)$, find $D_{\mathbf{u}} f$ in the direction of $(2, 1, -2)$ and the maximum rate of increase.
4. Find the equation of the tangent plane to the ellipsoid $x^2 + 2y^2 + 3z^2 = 6$ at $(1,1,1)$.
5. If $x^3 + y^3 + z^3 + 6xyz = 1$, find $\partial z/\partial x$ in terms of $x, y, z$.

## Takeaway

- Differentiability means a tangent plane exists; continuous partials guarantee it.
- The chain rule, in path form or as a product of Jacobian matrices, handles every composite dependence.
- The gradient points along steepest ascent, with magnitude equal to the maximum rate, and is normal to level sets.
- Forces, fields and fluxes in physics are minus gradients of scalar potentials: things flow downhill.
