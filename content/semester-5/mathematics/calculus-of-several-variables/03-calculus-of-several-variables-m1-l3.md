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
lessonId: calculus-of-several-variables-m1-l3
lessonName: Taylor Expansion, Extrema and Lagrange Multipliers
lessonNumber: 3
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - calculus-of-several-variables-m1-l2
  - differential-calculus-m3-l1
  - differential-calculus-m3-l2
learningObjectives:
  - Write the second-order Taylor expansion of $f(x,y)$ about a point, in both explicit and Hessian-matrix form, and use it to estimate function values.
  - Locate critical points from $\nabla f = \mathbf{0}$ and classify them with the second-derivative test $D = f_{xx}f_{yy} - f_{xy}^2$ or the eigenvalues of the Hessian.
  - Find absolute extrema of a continuous function on a closed bounded region by combining interior critical points with a boundary analysis.
  - Solve constrained optimisation problems with Lagrange multipliers, $\nabla f = \lambda \nabla g$, and interpret the multiplier physically.
concepts:
  - Taylor expansion in several variables
  - Hessian matrix
  - Critical point
  - Second-derivative test
  - Saddle point
  - Lagrange multiplier
  - Maximum-entropy principle
tags:
  - mathematics
  - calculus-of-several-variables
  - optimisation
  - lagrange-multipliers
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Taylor Expansion, Extrema and Lagrange Multipliers

## Overview

Equilibrium in physics is a statement about extrema: stable equilibrium sits at a minimum of potential energy, thermal equilibrium at a maximum of entropy. This lesson finds and classifies such points for functions of several variables. The second-order Taylor expansion shows that near a critical point a smooth function is a quadratic form governed by the Hessian matrix, whose sign pattern decides between minimum, maximum and saddle. Absolute extrema on a closed region need a separate look at the boundary. When the variables are tied by a constraint, Lagrange multipliers turn the problem into the geometric condition that the gradients of objective and constraint are parallel; applied to entropy at fixed normalisation and energy, this yields the Boltzmann distribution.

## Learning Path

- **What you should already know**: the gradient, the chain rule and the fact that $\nabla g$ is normal to the level set $g = c$ (Lesson m1-l2); Taylor series in one variable (differential-calculus Lesson m3-l1); the first- and second-derivative tests (differential-calculus Lesson m3-l2).
- **What this lesson adds**: the multivariable Taylor formula and the Hessian; classification of critical points; absolute extrema on closed bounded regions; Lagrange multipliers.
- **What later lessons this will unlock**: potential-energy minima of conservative fields (Lesson m3-l1); the multiple integrals of Lessons m2-l1 to m2-l3, whose regions are described by the same inequalities; the statistical arguments of thermal-physics-and-statistical-mechanics.

## Core Explanation

### Taylor's theorem in two variables

Fix a point $(a,b)$ and a displacement $(h,k)$, and define $g(t) = f(a + th, b + tk)$. The one-variable Taylor formula gives $g(1) = g(0) + g'(0) + \tfrac12 g''(0) + \dots$, and the chain rule of Lesson m1-l2 supplies the derivatives:

$$g'(0) = h f_x + k f_y, \qquad g''(0) = h^2 f_{xx} + 2hk\, f_{xy} + k^2 f_{yy},$$

all evaluated at $(a,b)$, using Clairaut's theorem to merge the mixed terms. Hence

$$f(a+h, b+k) = f(a,b) + \left(h f_x + k f_y\right) + \tfrac12\left(h^2 f_{xx} + 2hk\, f_{xy} + k^2 f_{yy}\right) + R_2,$$

where the remainder $R_2$ is of third order in $(h,k)$ if $f$ has continuous third partials. In vector form, with $\mathbf{h} = (h,k)$,

$$f(\mathbf{a} + \mathbf{h}) = f(\mathbf{a}) + \nabla f(\mathbf{a})\cdot\mathbf{h} + \tfrac12\,\mathbf{h}^{\mathsf T} H(\mathbf{a})\,\mathbf{h} + o(|\mathbf{h}|^2), \qquad H = \begin{pmatrix} f_{xx} & f_{xy} \\ f_{xy} & f_{yy} \end{pmatrix}.$$

The symmetric matrix $H$ of second partials is the **Hessian**; the same formula holds in $n$ variables. The linear term is the tangent plane of Lesson m1-l2; the quadratic term measures how the surface bends away from it.

### Critical points and the second-derivative test

If $f$ has a local extremum at an interior point $\mathbf{a}$ and is differentiable there, every directional derivative vanishes, so $\nabla f(\mathbf{a}) = \mathbf{0}$. Such a point is a **critical point**. At a critical point the Taylor expansion reduces to

$$f(\mathbf{a} + \mathbf{h}) - f(\mathbf{a}) \approx \tfrac12\,\mathbf{h}^{\mathsf T} H\,\mathbf{h},$$

so the behaviour is decided by the quadratic form. Completing the square in $Q(h,k) = A h^2 + 2B hk + C k^2$ (with $A = f_{xx}$, $B = f_{xy}$, $C = f_{yy}$, $A \ne 0$) gives

$$Q = A\left(h + \frac{B}{A}k\right)^2 + \frac{AC - B^2}{A}\,k^2.$$

Define the discriminant $D = f_{xx}f_{yy} - f_{xy}^2 = \det H$. The **second-derivative test** follows at once:

| Condition at the critical point | Nature |
|---|---|
| $D > 0$, $f_{xx} > 0$ | local minimum |
| $D > 0$, $f_{xx} < 0$ | local maximum |
| $D < 0$ | **saddle point** |
| $D = 0$ | test inconclusive |

At a saddle the function rises in some directions and falls in others, as $z = x^2 - y^2$ does at the origin. In $n$ variables one uses the eigenvalues of the symmetric matrix $H$: all positive gives a minimum, all negative a maximum, mixed signs a saddle, and a zero eigenvalue leaves the question open. Newton's method for optimisation steps by $\mathbf{h} = -H^{-1}\nabla f$ to the stationary point of this local quadratic model.

### Absolute extrema on a closed bounded region

A continuous function on a closed bounded set attains an absolute maximum and minimum (the extreme value theorem of real-analysis). Find the interior critical points, find the extreme values on the boundary (by parametrising it or by Lagrange multipliers), and compare all candidates. Boundary extrema need not be critical points of $f$, so the boundary step is never optional.

### Constrained extrema and Lagrange multipliers

Suppose we wish to extremise $f(x,y,z)$ subject to a constraint $g(x,y,z) = c$. Let $\mathbf{r}(t)$ be any curve lying in the constraint surface and passing through the constrained extremum $\mathbf{a}$ at $t = 0$. Then $f(\mathbf{r}(t))$ has an extremum at $t = 0$, so

$$\frac{d}{dt}f(\mathbf{r}(t))\Big|_{t=0} = \nabla f(\mathbf{a})\cdot\mathbf{r}'(0) = 0.$$

Thus $\nabla f(\mathbf{a})$ is perpendicular to every tangent vector of the surface, as is $\nabla g(\mathbf{a})$, so the two gradients are parallel:

$$\nabla f = \lambda\,\nabla g, \qquad g = c, \qquad (\nabla g \ne \mathbf{0}).$$

These are four equations for $x, y, z$ and the **Lagrange multiplier** $\lambda$: at the optimum the level surface of $f$ just touches the constraint surface. With two constraints $g = c_1$, $h = c_2$ the condition becomes $\nabla f = \lambda\nabla g + \mu\nabla h$. If $f^*(c)$ denotes the optimal value as a function of the constraint level, then

$$\frac{df^*}{dc} = \lambda,$$

so $\lambda$ is the sensitivity of the optimum to the constraint, often a physical intensive variable.

### Physics payoff: the maximum-entropy distribution

A system has energy levels $E_i$ occupied with probabilities $p_i$. The Gibbs entropy is $S = -k_B\sum_i p_i \ln p_i$. Maximise $S$ subject to normalisation $\sum_i p_i = 1$ and fixed mean energy $\sum_i p_i E_i = U$. With multipliers $\alpha$ and $\lambda$,

$$\frac{\partial S}{\partial p_i} = -k_B(\ln p_i + 1) = \alpha + \lambda E_i \quad\Longrightarrow\quad p_i = \frac{e^{-\beta E_i}}{Z}, \qquad \beta = \frac{\lambda}{k_B},\quad Z = \sum_i e^{-\beta E_i},$$

where $Z$ absorbs the constant factor $e^{-1-\alpha/k_B}$ and is fixed by normalisation. The sensitivity result gives $\lambda = \partial S_{\max}/\partial U = 1/T$, so $\beta = 1/(k_B T)$: the Boltzmann distribution is the constrained maximum of entropy.

The plot shows contours of $f = x^3 + y^3 - 3xy$ (Example 1) with gradient arrows; expect closed loops around the minimum $(1,1)$, crossing contours at the saddle $(0,0)$, and arrows normal to the contours.

```python
import numpy as np
import matplotlib.pyplot as plt

x, y = np.meshgrid(np.linspace(-1.5, 2, 300), np.linspace(-1.5, 2, 300))
f = x**3 + y**3 - 3*x*y
xs, ys = np.meshgrid(np.linspace(-1.5, 2, 15), np.linspace(-1.5, 2, 15))
fx, fy = 3*xs**2 - 3*ys, 3*ys**2 - 3*xs

plt.contour(x, y, f, levels=np.linspace(-1, 4, 21), cmap="viridis")
plt.quiver(xs, ys, fx, fy, color="grey")
plt.plot([0, 1], [0, 1], "ro")
plt.gca().set_aspect("equal")
plt.show()
```

## Key Ideas

- **Second-order Taylor expansion**: $f(\mathbf{a}+\mathbf{h}) \approx f(\mathbf{a}) + \nabla f\cdot\mathbf{h} + \tfrac12\mathbf{h}^{\mathsf T}H\mathbf{h}$, obtained by restricting $f$ to a line and using the chain rule.
- **Critical points** satisfy $\nabla f = \mathbf{0}$; they are candidates for interior extrema, not guarantees.
- **Second-derivative test**: with $D = f_{xx}f_{yy} - f_{xy}^2$, $D > 0$ gives a minimum or maximum by the sign of $f_{xx}$, $D < 0$ a saddle, $D = 0$ no conclusion; Hessian eigenvalues generalise it.
- **Absolute extrema** on a closed bounded region come from interior critical points or from the boundary.
- **Lagrange multipliers**: at a constrained extremum $\nabla f = \lambda\nabla g$, and $\lambda = df^*/dc$.
- **Maximum entropy** subject to fixed normalisation and energy gives $p_i \propto e^{-E_i/k_BT}$.

## Worked Examples

### Example 1 — Classifying critical points

Find and classify the critical points of $f(x,y) = x^3 + y^3 - 3xy$.

**Solution.** The gradient vanishes when

$$f_x = 3x^2 - 3y = 0, \qquad f_y = 3y^2 - 3x = 0.$$

The first gives $y = x^2$; substituting into the second gives $x^4 = x$, so $x = 0$ or $x = 1$. The critical points are $(0,0)$ and $(1,1)$. The second partials are $f_{xx} = 6x$, $f_{yy} = 6y$, $f_{xy} = -3$, so $D = 36xy - 9$.

At $(0,0)$, $D = -9 < 0$: a saddle. At $(1,1)$, $D = 27 > 0$ and $f_{xx} = 6 > 0$: a local minimum, $f(1,1) = -1$, but not a global one, since $f(x,0) = x^3 \to -\infty$.

### Example 2 — Minimum-surface water tank

An open-topped rectangular tank must hold $V = 0.500\ \text{m}^3$. Find the dimensions that minimise the area of sheet metal, and interpret the multiplier.

**Solution.** With base $x \times y$ and height $z$, minimise $S = xy + 2xz + 2yz$ subject to $xyz = V$. The Lagrange conditions $\nabla S = \lambda\nabla(xyz)$ are

$$y + 2z = \lambda yz, \qquad x + 2z = \lambda xz, \qquad 2x + 2y = \lambda xy.$$

Multiply the first by $x$ and the second by $y$: both right-hand sides equal $\lambda xyz$, so $xy + 2xz = xy + 2yz$, giving $x = y$. Multiply the third by $z$ and compare with the first times $x$: $2xz + 2yz = xy + 2xz$, so $xy = 2yz$, giving $x = 2z$. Hence $x = y = 2z$ and $V = 4z^3$, so

$$z = \left(\frac{0.500}{4}\right)^{1/3} = 0.500\ \text{m}, \qquad x = y = 1.00\ \text{m}, \qquad S_{\min} = 1 + 1 + 1 = 3.00\ \text{m}^2.$$

From $y + 2z = \lambda yz$, $\lambda = 2.00/0.500 = 4.00\ \text{m}^{-1}$. Check: $S_{\min}(V) = 12(V/4)^{2/3}$, so $dS_{\min}/dV = 2/z = 4.00\ \text{m}^{-1}$: each extra litre costs about $40\ \text{cm}^2$ of metal.

### Example 3 — Hottest and coldest points on a plate

The temperature on the disc $x^2 + y^2 \le 1$ is $T(x,y) = x^2 + 2y^2 - x$ (in units of 10 K above ambient). Find the absolute extrema.

**Solution.** *Interior.* $T_x = 2x - 1 = 0$, $T_y = 4y = 0$ give $(\tfrac12, 0)$ with $T = -\tfrac14$.

*Boundary.* Use $g = x^2 + y^2 = 1$ and $\nabla T = \lambda\nabla g$:

$$2x - 1 = 2\lambda x, \qquad 4y = 2\lambda y.$$

Either $y = 0$, giving $x = \pm 1$ with $T(1,0) = 0$ and $T(-1,0) = 2$; or $\lambda = 2$, giving $2x - 1 = 4x$, so $x = -\tfrac12$, $y = \pm\tfrac{\sqrt3}{2}$, with $T = \tfrac14 + \tfrac32 + \tfrac12 = \tfrac94$.

*Comparison.* Of the candidates $-\tfrac14, 0, 2, \tfrac94$, the coldest point is $(\tfrac12, 0)$ at $-2.5$ K relative to ambient and the hottest are $(-\tfrac12, \pm\tfrac{\sqrt3}{2})$ at $+22.5$ K, on the boundary where $\nabla T \ne \mathbf{0}$.

## Common Misconceptions

- **"Every critical point is a maximum or a minimum."** Saddle points are critical points too, and in several variables they are common; $x^3 + y^3 - 3xy$ has one at the origin.
- **"If $f_{xx} > 0$ and $f_{yy} > 0$, the point is a minimum."** Not unless $D = f_{xx}f_{yy} - f_{xy}^2 > 0$. For $x^2 + 3xy + y^2$ both pure second partials are positive, but $D = 4 - 9 < 0$, a saddle.
- **"$D = 0$ means there is no extremum."** It means the quadratic test is silent; higher-order terms decide, as $x^4 + y^4$ (minimum) and $x^4 - y^4$ (saddle) show.
- **"Lagrange multipliers give the maximum."** They give all constrained stationary points; one must evaluate $f$ at each candidate and compare. The multiplier itself is meaningful: $\lambda = df^*/dc$, which is $1/T$ in the entropy problem.

## Connections

- Stable equilibria are minima of potential energy (mechanics Lesson m3-l2); the Hessian there gives the effective spring constants, whose eigenvalues (linear-algebra Lesson m2-l3) set the normal-mode frequencies.
- The maximum-entropy derivation of the Boltzmann distribution underpins thermal-physics-and-statistical-mechanics Lesson m3-l1; $\beta = 1/k_BT$ reappears in every partition function.
- Lagrange points in the restricted three-body problem are critical points of the effective potential; $L_1$, $L_2$, $L_3$ are saddles, which governs Roche-lobe overflow in astrophysics-ii Lesson m1-l3.
- Gradient descent and Newton's method for minimisation (numerical-methods) iterate the first- and second-order Taylor models of this lesson; in operations-research the multipliers of linear programming become dual variables.

## Quick Check

1. Write the second-order Taylor polynomial of $f = e^x\cos y$ about $(0,0)$ and use it to estimate $f(0.1, 0.2)$.
2. Classify the critical points of $f = x^2 + xy + y^2 - 3x$.
3. Explain, with an example, why the second-derivative test is inconclusive when $D = 0$.
4. Find the point on the plane $x + 2y + 2z = 9$ closest to the origin using a Lagrange multiplier.
5. Maximise $f = xy$ on the ellipse $x^2 + 4y^2 = 8$ and state the value of $\lambda$ at the maximum.

## Takeaway

- Near any point a smooth function is its tangent plane plus a quadratic correction set by the Hessian.
- Interior extrema occur at critical points, classified by $D$ or the eigenvalues of $H$; absolute extrema also require the boundary.
- At a constrained extremum the objective and constraint gradients are parallel, $\nabla f = \lambda\nabla g$, and $\lambda$ is the rate of change of the optimum with the constraint.
- Maximising entropy at fixed energy produces the Boltzmann distribution, the most important constrained optimum in physics.
