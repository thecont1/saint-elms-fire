***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: complex-analysis
courseName: Complex Analysis
moduleId: complex-analysis-module-1
moduleName: Complex Numbers and Analytic Functions
lessonId: complex-analysis-m1-l2
lessonName: Analyticity and the Cauchy–Riemann Equations
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - complex-analysis-m1-l1
  - real-analysis-m2-l3
  - differential-equations-m1-l3
learningObjectives:
  - Define the complex derivative and derive the Cauchy–Riemann equations $u_x = v_y$, $u_y = -v_x$ as a necessary condition for differentiability.
  - State and apply the sufficient condition for differentiability and the polar form of the Cauchy–Riemann equations.
  - Distinguish differentiability at a point from analyticity on a domain, and identify entire functions.
  - Show that the real and imaginary parts of an analytic function are harmonic and construct a harmonic conjugate.
concepts:
  - Complex derivative
  - Cauchy–Riemann equations
  - Analytic function
  - Entire function
  - Harmonic function
  - Harmonic conjugate
tags:
  - mathematics
  - complex-analysis
  - cauchy-riemann
  - harmonic-functions
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# Analyticity and the Cauchy–Riemann Equations

## Overview

The complex derivative is defined by the same difference quotient as the real derivative, but because $\Delta z$ may approach zero from any direction, existence of the limit is far more demanding. Working out what it demands produces the Cauchy–Riemann equations, a pair of partial differential equations linking the real and imaginary parts of the function. They identify which functions of two real variables are secretly functions of $z$, show that real and imaginary parts satisfy Laplace's equation, and explain why analytic functions are so rigid. This lesson develops the derivative, derives the Cauchy–Riemann equations in Cartesian and polar form, establishes when they are sufficient, defines analytic and entire functions, and introduces harmonic functions and conjugates, the heart of two-dimensional potential theory.

## Learning Path

- **What you should already know**: polar form and path-independent limits (Lesson m1-l1); the mean value theorem (Real Analysis Lesson m2-l3); exact differential equations (Differential Equations Lesson m1-l3).
- **What this lesson adds**: the complex derivative; the Cauchy–Riemann equations as necessary and, with continuous partials, sufficient conditions; analytic and entire functions; harmonic functions and conjugates.
- **What later lessons this will unlock**: derivatives of the exponential, logarithm and power functions (Lesson m1-l3); the Cauchy–Goursat theorem, proved via Green's theorem and Cauchy–Riemann (Lesson m2-l1); complex potentials for flow and electrostatics (Lesson m3-l3).

## Core Explanation

### The complex derivative

Let $f$ be defined near $z_0$. The **derivative** of $f$ at $z_0$ is

$$f'(z_0) = \lim_{\Delta z \to 0} \frac{f(z_0 + \Delta z) - f(z_0)}{\Delta z},$$

provided the limit exists. Because $\Delta z$ ranges over a two-dimensional deleted neighbourhood of $0$, the quotient must tend to the same value along every path. If $f'(z_0)$ exists then $f$ is continuous at $z_0$, since $f(z_0 + \Delta z) - f(z_0) = [\text{quotient}]\cdot\Delta z \to 0$.

The sum, product, quotient and chain rules follow from the limit laws as in real calculus, and $\frac{d}{dz}z^n = nz^{n-1}$ for integer $n$, so polynomials are differentiable everywhere and rational functions wherever the denominator is non-zero.

The function $\bar z$ shows how easily differentiability fails. The quotient $\overline{\Delta z}/\Delta z$ equals $1$ along the real axis and $-1$ along the imaginary axis (Lesson m1-l1, Example 3), so $\bar z$ is differentiable nowhere despite smooth components $u = x$, $v = -y$. A relation between $u$ and $v$ is needed.

### Derivation of the Cauchy–Riemann equations

Write $f = u + iv$ and suppose $f'(z_0)$ exists at $z_0 = x_0 + iy_0$. Take $\Delta z = \Delta x$ real:

$$f'(z_0) = \lim_{\Delta x\to 0}\frac{u(x_0 + \Delta x, y_0) - u(x_0, y_0)}{\Delta x} + i\,\frac{v(x_0 + \Delta x, y_0) - v(x_0, y_0)}{\Delta x} = u_x + i v_x.$$

Now take $\Delta z = i\Delta y$ imaginary:

$$f'(z_0) = \lim_{\Delta y\to 0}\frac{u(x_0, y_0 + \Delta y) - u(x_0, y_0)}{i\Delta y} + i\,\frac{v(x_0, y_0 + \Delta y) - v(x_0, y_0)}{i\Delta y} = \frac{1}{i}u_y + v_y = v_y - i u_y.$$

Equating the two expressions for $f'(z_0)$ gives the **Cauchy–Riemann equations**

$$u_x = v_y, \qquad u_y = -v_x,$$

together with the formulae $f'(z_0) = u_x + iv_x = v_y - iu_y$. These are necessary conditions: if they fail at $z_0$, $f$ is not differentiable there. For $f = \bar z$, $u_x = 1 \ne -1 = v_y$ at every point. For $f = z^2$, $u = x^2 - y^2$, $v = 2xy$ give $u_x = 2x = v_y$, $u_y = -2y = -v_x$, and $f' = u_x + iv_x = 2x + 2iy = 2z$ as expected.

### Sufficiency

The Cauchy–Riemann equations alone do not guarantee differentiability ($f(z) = z^5/|z|^4$, $f(0) = 0$, satisfies them at the origin yet is not differentiable there); the missing ingredient is continuity of the partials.

**Theorem (sufficient condition).** Let $f = u + iv$ be defined near $z_0$. If the first-order partials of $u$ and $v$ exist near $z_0$, are continuous at $z_0$, and satisfy the Cauchy–Riemann equations there, then $f'(z_0)$ exists and equals $u_x + iv_x$.

For the proof, continuity of the partials gives $\Delta u = u_x\Delta x + u_y\Delta y + \varepsilon_1|\Delta z|$ and $\Delta v = v_x\Delta x + v_y\Delta y + \varepsilon_2|\Delta z|$ with $\varepsilon_{1,2} \to 0$. Then

$$\Delta u + i\Delta v = (u_x + iv_x)\Delta x + (u_y + iv_y)\Delta y + (\varepsilon_1 + i\varepsilon_2)|\Delta z|.$$

By Cauchy–Riemann, $u_y + iv_y = -v_x + iu_x = i(u_x + iv_x)$, so the first two terms combine into $(u_x + iv_x)\Delta z$. Dividing by $\Delta z$, the error term has modulus $|\varepsilon_1 + i\varepsilon_2| \to 0$, which proves the theorem.

### Polar form

For $f = u(r, \theta) + iv(r, \theta)$, the chain rule with $x = r\cos\theta$, $y = r\sin\theta$ converts the equations to

$$r u_r = v_\theta, \qquad u_\theta = -r v_r,$$

and the derivative becomes $f'(z) = e^{-i\theta}(u_r + iv_r)$. For $f = 1/z$, $u = \cos\theta/r$ and $v = -\sin\theta/r$ satisfy both equations for $r \ne 0$, and $f' = e^{-i\theta}(-\cos\theta + i\sin\theta)/r^2 = -1/z^2$. The polar form suits the logarithm and fractional powers of Lesson m1-l3.

### Analytic and entire functions

A function is **analytic** (equivalently holomorphic or regular) at $z_0$ if it is differentiable throughout some neighbourhood of $z_0$, and analytic on a domain $D$ if analytic at every point of $D$. A function analytic on the whole plane is **entire**. Polynomials are entire; rational functions are analytic except at the zeros of the denominator, the **singular points**. Analyticity is a property of open sets: $|z|^2$ is differentiable at $z = 0$ only (Example 1), hence analytic nowhere.

Sums, products, quotients (away from zeros of the denominator) and compositions of analytic functions are analytic. Two consequences of Cauchy–Riemann show how rigid analytic functions are:

- If $f'(z) = 0$ throughout a domain $D$, then $f$ is constant: $u_x = v_x = 0$ and, by Cauchy–Riemann, $u_y = v_y = 0$, so $u$ and $v$ are constant along every polygonal path in $D$.
- If $|f|$ is constant on $D$, or $f$ is real-valued on $D$, then $f$ is constant. For real $f$, $v \equiv 0$ forces $u_x = u_y = 0$. For $u^2 + v^2 = c \ne 0$, differentiating gives $uu_x + vv_x = 0$ and $uu_y + vv_y = -uv_x + vu_x = 0$; eliminating $v_x$ yields $(u^2 + v^2)u_x = 0$, so $u_x = 0$, and similarly for the other partials.

### Harmonic functions and harmonic conjugates

A real function $\phi(x, y)$ with continuous second partials is **harmonic** on a domain if it satisfies **Laplace's equation**

$$\nabla^2\phi = \phi_{xx} + \phi_{yy} = 0.$$

If $f = u + iv$ is analytic on $D$ then $u$ and $v$ are harmonic there. Anticipating from Lesson m2-l2 that analytic functions have continuous partials of all orders, differentiate $u_x = v_y$ in $x$ and $u_y = -v_x$ in $y$:

$$u_{xx} = v_{yx}, \qquad u_{yy} = -v_{xy},$$

and add, using equality of mixed partials, to obtain $u_{xx} + u_{yy} = 0$; likewise $\nabla^2 v = 0$.

Conversely, given a harmonic $u$ on a simply connected domain, there exists a **harmonic conjugate** $v$ such that $u + iv$ is analytic. The construction solves an exact differential equation (Differential Equations Lesson m1-l3): Cauchy–Riemann prescribes $v_x = -u_y$ and $v_y = u_x$, and the compatibility condition $(-u_y)_y = (u_x)_x$ is Laplace's equation itself. Integrate $v_y = u_x$ with respect to $y$, add an unknown $g(x)$, and fix $g$ from $v_x = -u_y$. The conjugate is unique up to a real constant.

The level curves $u = c_1$ and $v = c_2$ intersect orthogonally wherever $f' \ne 0$, because the gradients $\nabla u = (u_x, u_y)$ and $\nabla v = (-u_y, u_x)$ are perpendicular. In Lesson m3-l3, equipotentials and field lines in two-dimensional electrostatics are the level curves of the real and imaginary parts of one analytic function.

## Key Ideas

- **Complex derivative**: the real difference quotient, but the limit must exist along every direction.
- **Cauchy–Riemann equations**: $u_x = v_y$, $u_y = -v_x$ are necessary for differentiability; with continuous partials they are also sufficient. In polar form, $ru_r = v_\theta$, $u_\theta = -rv_r$.
- **Analytic versus differentiable**: analyticity needs differentiability on an open set; $|z|^2$ is differentiable only at the origin.
- **Rigidity**: an analytic function with zero derivative, constant modulus or real values on a domain is constant.
- **Harmonic functions**: real and imaginary parts of analytic functions satisfy Laplace's equation; on a simply connected domain every harmonic function has a conjugate, unique up to a constant.

## Worked Examples

### Example 1 — Where is $f(z) = |z|^2$ differentiable?

Find where $f(z) = |z|^2 = x^2 + y^2$ is differentiable, and whether it is analytic anywhere.

**Solution.** Here $u = x^2 + y^2$ and $v = 0$. Cauchy–Riemann requires $u_x = v_y$, i.e. $2x = 0$, and $u_y = -v_x$, i.e. $2y = 0$, which hold only at $z = 0$. The partials are continuous, so the sufficient condition applies at the origin: $f'(0) = u_x + iv_x = 0$. At any $z_0 \ne 0$ the necessary condition fails. Since no neighbourhood of $0$ consists of points of differentiability, $f$ is analytic nowhere. Directly, the quotient at the origin is $|\Delta z|^2/\Delta z = \overline{\Delta z} \to 0$.

### Example 2 — A function built from $e^x$

Let $f(z) = e^x(\cos y + i\sin y)$. Show that $f$ is entire and that $f'(z) = f(z)$.

**Solution.** With $u = e^x\cos y$ and $v = e^x\sin y$,

$$u_x = e^x\cos y, \quad v_y = e^x\cos y, \quad u_y = -e^x\sin y, \quad v_x = e^x\sin y.$$

Thus $u_x = v_y$ and $u_y = -v_x$ everywhere, with continuous partials, so $f$ is differentiable at every point, hence entire, with

$$f'(z) = u_x + iv_x = e^x\cos y + ie^x\sin y = f(z).$$

This is the complex exponential $e^z$ of Lesson m1-l3, with $\frac{d}{dz}e^z = e^z$.

### Example 3 — Constructing a harmonic conjugate

Verify that $u = x^3 - 3xy^2 + y$ is harmonic and find an analytic $f = u + iv$ with $f(0) = 0$.

**Solution.** We compute $u_{xx} = 6x$ and $u_{yy} = -6x$, so $\nabla^2 u = 0$ on the whole plane and $u$ is harmonic. By Cauchy–Riemann, $v_y = u_x = 3x^2 - 3y^2$. Integrating with respect to $y$,

$$v = 3x^2 y - y^3 + g(x).$$

Then $v_x = 6xy + g'(x)$ must equal $-u_y = -(-6xy + 1) = 6xy - 1$, giving $g'(x) = -1$ and $g(x) = -x + c$. Hence

$$f(z) = (x^3 - 3xy^2 + y) + i(3x^2y - y^3 - x + c).$$

Recognising $x^3 - 3xy^2 + i(3x^2y - y^3) = z^3$ and $y - ix = -iz$, we obtain $f(z) = z^3 - iz + ic$; $f(0) = 0$ gives $c = 0$, so $f(z) = z^3 - iz$. Check: $f'(0) = -i$ agrees with $u_x + iv_x = 0 - i$ at the origin.

## Common Misconceptions

- **"If $u$ and $v$ are smooth, then $u + iv$ is differentiable."** $f(z) = \bar z$ has polynomial components and is differentiable nowhere; Cauchy–Riemann is an additional constraint linking $u$ and $v$.
- **"The Cauchy–Riemann equations are sufficient for differentiability."** They are necessary; sufficiency also needs continuous partial derivatives.
- **"Differentiable at a point and analytic at a point mean the same thing."** Analyticity at $z_0$ requires differentiability throughout a neighbourhood; $|z|^2$ is differentiable at the origin but analytic nowhere.
- **"A harmonic function always has a harmonic conjugate."** Only on a simply connected domain. On the punctured plane $u = \ln|z|$ is harmonic but its conjugate $\arg z$ cannot be defined continuously around the origin.

## Connections

- Laplace's equation governs the electrostatic potential in charge-free regions (Electricity and Magnetism Lesson m1-l3); in two dimensions it is the real part of an analytic function whose imaginary part gives the field lines (Lesson m3-l3).
- Constructing a harmonic conjugate solves an exact first-order equation (Differential Equations Lesson m1-l3): Cauchy–Riemann supplies $dv = -u_y\,dx + u_x\,dy$ and Laplace's equation is the exactness condition.
- Irrotational, incompressible two-dimensional flow has a velocity potential and stream function that are harmonic conjugates (Lesson m3-l3).
- Orthogonality of the level curves of $u$ and $v$ is the first appearance of conformality, developed in Lesson m3-l2.

## Quick Check

1. Using the definition of the derivative, show that $f(z) = \operatorname{Re} z$ is differentiable nowhere.
2. State the Cauchy–Riemann equations in Cartesian and polar form with the formulae for $f'$.
3. Is $f(z) = x^2 + iy^2$ analytic anywhere? Where is it differentiable?
4. Prove that if $f$ is analytic on a domain with $\operatorname{Im} f$ constant, then $f$ is constant.
5. Find a harmonic conjugate of $u = e^{-y}\sin x$ and identify the resulting analytic function.

## Takeaway

- The two-dimensional limit in the difference quotient forces the Cauchy–Riemann equations $u_x = v_y$, $u_y = -v_x$.
- With continuous partials they are sufficient as well as necessary; the polar form $ru_r = v_\theta$, $u_\theta = -rv_r$ handles polar data.
- Analyticity is differentiability on an open set; entire functions are analytic on the whole plane.
- Analytic functions are rigid: zero derivative, constant modulus or real values on a domain force constancy.
- Real and imaginary parts of an analytic function are harmonic conjugates with orthogonal level curves, the basis of two-dimensional potential theory.
