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
lessonId: calculus-of-several-variables-m1-l1
lessonName: Functions of Several Variables, Limits, Continuity and Partial Derivatives
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - differential-calculus-m1-l2
  - differential-calculus-m2-l1
learningObjectives:
  - Describe a function of two or three variables through its domain, graph and level sets, and sketch level curves of standard quadric surfaces.
  - Decide whether $\lim_{(x,y)\to(a,b)} f(x,y)$ exists using the two-path test and polar coordinates, and state the $\varepsilon$–$\delta$ definition.
  - Compute first and second partial derivatives, interpret them geometrically and physically, and apply Clairaut's theorem on mixed partials.
  - Verify that a given function satisfies a partial differential equation such as Laplace's equation.
concepts:
  - Level curves and level surfaces
  - Limit of a function of two variables
  - Two-path test
  - Continuity in several variables
  - Partial derivative
  - Clairaut's theorem on mixed partials
  - Laplace's equation
tags:
  - mathematics
  - calculus-of-several-variables
  - partial-derivatives
  - limits-and-continuity
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Functions of Several Variables, Limits, Continuity and Partial Derivatives

## Overview

Almost every quantity a physicist measures depends on several variables: the temperature in a room on three coordinates and time, the pressure of a gas on volume and temperature. This lesson begins the calculus of such functions. We visualise $f(x,y)$ through its graph and level curves, and $f(x,y,z)$ through level surfaces. We then meet the central new difficulty: a point in the plane can be approached from infinitely many directions, so a limit is a far stronger demand than in one variable; the two-path test and the polar-coordinate method decide it in practice. Finally we define partial derivatives, which freeze all variables but one, and meet Clairaut's theorem on mixed partials and Laplace's equation, the most important partial differential equation in physics.

## Learning Path

- **What you should already know**: the formal definition of a limit and of continuity in one variable (differential-calculus Lessons m1-l2 and m1-l3); the derivative and the rules of differentiation (differential-calculus Lessons m2-l1 and m2-l2); the distance formula in $\mathbb{R}^2$ and $\mathbb{R}^3$.
- **What this lesson adds**: level sets; limits and continuity in $\mathbb{R}^n$ with the two-path test; partial derivatives of all orders; Clairaut's theorem; partial differential equations.
- **What later lessons this will unlock**: differentiability, the chain rule and the gradient (Lesson m1-l2); Taylor expansion and extrema (Lesson m1-l3); Jacobians (Lesson m2-l2); divergence and curl (Lessons m3-l1 to m3-l3).

## Core Explanation

### Functions of two and three variables

A **function of two variables** is a rule $f: D \to \mathbb{R}$ assigning to each point $(x,y)$ of a domain $D \subseteq \mathbb{R}^2$ a real number $z = f(x,y)$; its **graph** is the surface $z = f(x,y)$. The domain is often implied by the formula: $\sqrt{9 - x^2 - y^2}$ is defined only on the disc $x^2 + y^2 \le 9$, and its graph is the upper hemisphere of radius 3.

Because graphs are hard to draw, we use **level curves** $f(x,y) = c$ in the $xy$-plane. A contour map shows them at equally spaced $c$; where they crowd together the surface is steep. Isobars, isotherms and equipotentials are level curves. Three quadric surfaces recur: the paraboloid $z = x^2 + y^2$ (level curves: circles of radius $\sqrt{c}$), the saddle $z = x^2 - y^2$ (hyperbolae, degenerating to the lines $y = \pm x$ at $c = 0$) and the cone $z = \sqrt{x^2 + y^2}$ (equally spaced circles of radius $c$).

For a **function of three variables** $w = f(x,y,z)$ we use **level surfaces** $f(x,y,z) = c$; those of the Coulomb potential $\phi = kq/r$ are concentric spheres, the equipotentials of a point charge.

### Limits in several variables

In one variable a limit requires only that the left- and right-hand limits agree. In two variables $(a,b)$ can be approached along infinitely many paths, and all must agree.

**Definition.** We write $\lim_{(x,y)\to(a,b)} f(x,y) = L$ if for every $\varepsilon > 0$ there is a $\delta > 0$ such that

$$0 < \sqrt{(x-a)^2 + (y-b)^2} < \delta \implies |f(x,y) - L| < \varepsilon.$$

The condition on the left is a punctured disc of radius $\delta$ about $(a,b)$: $f$ must be within $\varepsilon$ of $L$ throughout it, whatever the direction of approach.

**Two-path test.** If $f \to L_1$ along one path to $(a,b)$ and $f \to L_2 \ne L_1$ along another, the limit does not exist. Consider

$$f(x,y) = \frac{xy}{x^2 + y^2}.$$

Along the $x$-axis it is identically $0$; along $y = x$ it equals $x^2/(2x^2) = 1/2$. The limits disagree, so the limit does not exist. The coordinate axes alone would have been inconclusive; one must try lines $y = mx$ and even curves $y = mx^2$.

**Polar-coordinate method.** To prove that a limit at the origin exists, substitute $x = r\cos\theta$, $y = r\sin\theta$, so that $(x,y) \to (0,0)$ means $r \to 0$ uniformly in $\theta$. For

$$g(x,y) = \frac{x^2 y}{x^2 + y^2} = \frac{r^3 \cos^2\theta \sin\theta}{r^2} = r\cos^2\theta\sin\theta,$$

we have $|g| \le r \to 0$ independently of $\theta$, so the limit is $0$. The crucial feature is a $\theta$-independent bound; an expression such as $\cos^2\theta$ with no factor of $r$ signals path dependence. The limit laws and the squeeze theorem carry over from one variable.

### Continuity

A function is **continuous at $(a,b)$** if $\lim_{(x,y)\to(a,b)} f(x,y) = f(a,b)$, and continuous on $D$ if continuous at every point of $D$. Polynomials are continuous everywhere, rational functions wherever the denominator is non-zero, and compositions of continuous functions are continuous. Thus $g$ above becomes continuous once we set $g(0,0) = 0$, whereas no choice of $f(0,0)$ makes $xy/(x^2+y^2)$ continuous.

### Partial derivatives

The **partial derivative of $f$ with respect to $x$** at $(a,b)$ is the ordinary derivative of the one-variable function $x \mapsto f(x,b)$:

$$f_x(a,b) = \frac{\partial f}{\partial x}(a,b) = \lim_{h\to 0} \frac{f(a+h,b) - f(a,b)}{h},$$

and similarly

$$f_y(a,b) = \frac{\partial f}{\partial y}(a,b) = \lim_{h\to 0} \frac{f(a,b+h) - f(a,b)}{h}.$$

Geometrically, the plane $y = b$ slices the graph in a curve whose slope at $x = a$ is $f_x(a,b)$; operationally, treat $y$ as a constant. For $f(x,y) = x^3 y^2 + \sin(xy)$,

$$f_x = 3x^2 y^2 + y\cos(xy), \qquad f_y = 2x^3 y + x\cos(xy).$$

Thermodynamics states which variables are held fixed: $(\partial P/\partial T)_V$ is the rate of change of pressure with temperature at constant volume. The subscript matters because a quantity may be regarded as a function of different sets of variables.

A warning: existence of both partial derivatives does **not** imply continuity. For $f = xy/(x^2+y^2)$ with $f(0,0) = 0$, $f(h,0) = 0$ for all $h$, so $f_x(0,0) = 0 = f_y(0,0)$, yet $f$ is discontinuous at the origin: partials probe only the coordinate directions. Differentiability (Lesson m1-l2) does imply continuity.

### Higher-order partials and Clairaut's theorem

Differentiating again yields four **second-order partial derivatives**:

$$f_{xx} = \frac{\partial^2 f}{\partial x^2}, \quad f_{yy} = \frac{\partial^2 f}{\partial y^2}, \quad f_{xy} = \frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right) = \frac{\partial^2 f}{\partial y\,\partial x}, \quad f_{yx} = \frac{\partial^2 f}{\partial x\,\partial y}.$$

The subscript $f_{xy}$ is read left to right, the $\partial$ notation right to left. The order rarely matters, because of the following result.

**Clairaut's theorem (Schwarz's theorem).** If $f$ is defined on an open disc containing $(a,b)$ and the mixed partials $f_{xy}$ and $f_{yx}$ are both continuous on that disc, then $f_{xy}(a,b) = f_{yx}(a,b)$.

The hypothesis matters: for $f = xy(x^2 - y^2)/(x^2 + y^2)$ with $f(0,0) = 0$, $f_{xy}(0,0) = -1$ but $f_{yx}(0,0) = 1$. Applied to state functions such as $U(S,V)$, the theorem yields the Maxwell relations of thermodynamics.

### Partial differential equations

A **partial differential equation (PDE)** relates a function to its partial derivatives. Three dominate physics: **Laplace's equation** $\nabla^2 u = u_{xx} + u_{yy} + u_{zz} = 0$, obeyed by the electrostatic potential in charge-free space and by steady temperatures, whose solutions are **harmonic functions**; the **heat equation** $u_t = \kappa\,\nabla^2 u$; and the **wave equation** $u_{tt} = c^2\,\nabla^2 u$. Checking a candidate solution is direct partial differentiation (Example 3).

## Key Ideas

- **Level sets** $f = c$ turn an unpicturable graph into a family of curves (two variables) or surfaces (three variables); crowded contours indicate steep slopes.
- **Limit in $\mathbb{R}^2$**: $f \to L$ within every punctured disc about the point, independent of the path of approach.
- **Two-path test** disproves a limit; **polar coordinates** with a $\theta$-independent bound prove one.
- **Continuity** behaves as in one variable for sums, products, quotients and compositions.
- **Partial derivatives** differentiate in one variable with the others held constant; they probe only the coordinate directions and do not guarantee continuity.
- **Clairaut's theorem**: continuous mixed partials are equal, $f_{xy} = f_{yx}$; this underlies the Maxwell relations of thermodynamics.
- **Laplace's equation** $\nabla^2 u = 0$ is the prototype PDE; its solutions are harmonic functions.

## Worked Examples

### Example 1 — Deciding two limits at the origin

Determine whether the following limits exist: (a) $\displaystyle\lim_{(x,y)\to(0,0)} \frac{x^2 - y^2}{x^2 + y^2}$; (b) $\displaystyle\lim_{(x,y)\to(0,0)} \frac{3x^2 y}{x^2 + y^2}$.

**Solution.** (a) Along the $x$-axis ($y = 0$) the function equals $1$; along the $y$-axis ($x = 0$) it equals $-1$. Two paths give different values, so the limit does not exist. In polar form the function is $\cos 2\theta$, with no factor of $r$, confirming the path dependence.

(b) In polar coordinates,

$$\frac{3x^2 y}{x^2 + y^2} = \frac{3 r^3\cos^2\theta\sin\theta}{r^2} = 3r\cos^2\theta\sin\theta,$$

so $|f(x,y)| \le 3r = 3\sqrt{x^2 + y^2}$. Given $\varepsilon > 0$, choose $\delta = \varepsilon/3$; then $0 < \sqrt{x^2+y^2} < \delta$ implies $|f - 0| < \varepsilon$. The limit exists and equals $0$.

### Example 2 — Partial derivatives of the ideal gas law

For $n$ moles of an ideal gas, $PV = nRT$. Compute $(\partial P/\partial T)_V$, $(\partial T/\partial V)_P$ and $(\partial V/\partial P)_T$, and verify the cyclic relation

$$\left(\frac{\partial P}{\partial T}\right)_V \left(\frac{\partial T}{\partial V}\right)_P \left(\frac{\partial V}{\partial P}\right)_T = -1.$$

Evaluate $(\partial P/\partial T)_V$ for $n = 1$ mol in $V = 0.0224\ \text{m}^3$.

**Solution.** Writing each variable as a function of the other two: $P = nRT/V$, $T = PV/(nR)$, $V = nRT/P$. Then

$$\left(\frac{\partial P}{\partial T}\right)_V = \frac{nR}{V}, \qquad \left(\frac{\partial T}{\partial V}\right)_P = \frac{P}{nR}, \qquad \left(\frac{\partial V}{\partial P}\right)_T = -\frac{nRT}{P^2}.$$

Their product is

$$\frac{nR}{V}\cdot\frac{P}{nR}\cdot\left(-\frac{nRT}{P^2}\right) = -\frac{nRT}{PV} = -1,$$

using $PV = nRT$ in the last step. Numerically, with $R = 8.314\ \text{J mol}^{-1}\text{K}^{-1}$,

$$\left(\frac{\partial P}{\partial T}\right)_V = \frac{1 \times 8.314}{0.0224} = 371\ \text{Pa K}^{-1}.$$

Heating by 1 K at fixed volume raises the pressure by 371 Pa, consistent with $P/T = 101{,}325/273$ at STP.

### Example 3 — A harmonic function and its mixed partials

Show that $u(x,y) = \ln(x^2 + y^2)$ satisfies Laplace's equation $u_{xx} + u_{yy} = 0$ for $(x,y) \ne (0,0)$, and verify Clairaut's theorem for $u$.

**Solution.** First partials:

$$u_x = \frac{2x}{x^2 + y^2}, \qquad u_y = \frac{2y}{x^2 + y^2}.$$

By the quotient rule,

$$u_{xx} = \frac{2(x^2 + y^2) - 2x\cdot 2x}{(x^2 + y^2)^2} = \frac{2y^2 - 2x^2}{(x^2 + y^2)^2}, \qquad u_{yy} = \frac{2(x^2 + y^2) - 2y \cdot 2y}{(x^2 + y^2)^2} = \frac{2x^2 - 2y^2}{(x^2 + y^2)^2}.$$

Adding, $u_{xx} + u_{yy} = 0$, so $u$ is harmonic on the punctured plane; up to constants it is the potential of a uniformly charged line.

For the mixed partials,

$$u_{xy} = \frac{\partial}{\partial y}\frac{2x}{x^2 + y^2} = -\frac{4xy}{(x^2 + y^2)^2}, \qquad u_{yx} = \frac{\partial}{\partial x}\frac{2y}{x^2 + y^2} = -\frac{4xy}{(x^2 + y^2)^2},$$

equal, as Clairaut's theorem requires.

## Common Misconceptions

- **"If the limit along the $x$-axis and the $y$-axis agree, the limit exists."** No: $xy/(x^2+y^2)$ tends to $0$ along both axes yet has no limit. Only a bound valid in every direction, such as the polar estimate, proves existence.
- **"If both partial derivatives exist at a point, the function is continuous there."** No: $xy/(x^2+y^2)$ has $f_x(0,0) = f_y(0,0) = 0$ but is discontinuous at the origin.
- **"$\partial f/\partial x$ is just $df/dx$ with a different symbol."** It depends on which variables are held fixed: $(\partial U/\partial T)_V \ne (\partial U/\partial T)_P$ in general.
- **"Mixed partials are always equal."** Only when they are continuous (Clairaut's theorem); with discontinuous second partials the two orders can differ, as in $xy(x^2-y^2)/(x^2+y^2)$ at the origin.
- **"Level curves of a function can cross."** A point on both $f = c_1$ and $f = c_2$ would have two values; the crossing lines $y = \pm x$ of the saddle form the single level set $f = 0$.

## Connections

- The equipotentials of electricity-and-magnetism Lesson m1-l3 are level surfaces of $\phi(x,y,z)$; field lines cross them at right angles, as Lesson m1-l2 shows.
- Held-fixed subscripts are used throughout thermal-physics-and-statistical-mechanics; the Maxwell relations follow from Clairaut's theorem applied to state functions.
- Laplace's equation, the heat equation and the wave equation (waves-and-optics Lesson m1-l2) are the three canonical PDEs; separation of variables reduces them to the ODEs of differential-equations.
- The $\varepsilon$–$\delta$ definition of a limit generalises directly from real-analysis Lesson m1-l1; the metric-space viewpoint there makes the punctured-disc definition natural.
- Contour maps of the effective potential of a binary star show Roche lobes and Lagrange points (astrophysics-ii); mass transfer occurs through a saddle point.

## Quick Check

1. Sketch the level curves $c = 0, 1, 2$ of $f(x,y) = y - x^2$ and describe the graph.
2. Use the two-path test to show that $\lim_{(x,y)\to(0,0)} xy^2/(x^2 + y^4)$ does not exist. (Hint: try the curve $x = y^2$.)
3. Prove, using polar coordinates, that $\lim_{(x,y)\to(0,0)} (x^3 + y^3)/(x^2 + y^2) = 0$.
4. For $f(x,y,z) = x e^{yz}$, compute $f_x$, $f_y$, $f_z$ and verify $f_{yz} = f_{zy}$.
5. Show that $u(x,t) = e^{-\kappa k^2 t}\sin(kx)$ satisfies the heat equation $u_t = \kappa u_{xx}$.

## Takeaway

- Functions of several variables are visualised through level curves and surfaces.
- A limit in $\mathbb{R}^2$ must be the same along every path; the two-path test disproves limits and a polar bound proves them.
- Partial derivatives freeze all but one variable; they exist even for some discontinuous functions.
- Clairaut's theorem guarantees $f_{xy} = f_{yx}$ when the mixed partials are continuous, and it is the mathematical root of the Maxwell relations.
- Laplace's equation $\nabla^2 u = 0$ and its relatives, the heat and wave equations, organise much of physics; checking a candidate solution is a direct partial-differentiation exercise.
