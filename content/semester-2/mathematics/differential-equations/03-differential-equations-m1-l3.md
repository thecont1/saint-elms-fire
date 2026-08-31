***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: differential-equations
courseName: Differential Equations
moduleId: differential-equations-module-1
moduleName: First-Order ODEs
lessonId: differential-equations-m1-l3
lessonName: Exact Equations and Integrating Factors
lessonNumber: 3
moduleNumber: 1
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - differential-equations-m1-l2
learningObjectives:
  - Recognise an exact differential equation and verify the exactness condition.
  - Solve exact equations by finding a potential function.
  - Convert a non-exact equation to an exact one using an integrating factor.
  - Apply the technique to a simple physical model.
concepts:
  - Exact differential equation
  - Potential function
  - Integrating factor (general)
  - Conservative vector field
  - Mixed partials
  - Bernoulli equation (preview)
tags:
  - mathematics
  - differential-equations
  - exact-equations
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - derivation
***

# Exact Equations and Integrating Factors

## Overview
Some first-order equations can be written as the total derivative of a function $F(x, y) = C$. Such equations are *exact*, and the solution is the level curve $F(x, y) = C$. The exactness condition is a mixed-partial test that connects this chapter back to *Differential Calculus* and previews the *conservative* vector fields of *Electricity and Magnetism*. When an equation is not exact, multiplying by a suitable integrating factor can make it so.

## Learning Path
- What you should already know: partial derivatives, line integrals, the linear-first-order integrating factor.
- What this lesson adds: a more general technique for first-order equations, and the connection to conservative fields.
- What it unlocks: Hamiltonian mechanics, conservative vector fields in *Electricity and Magnetism*, and the method of characteristics for PDEs.

## Core Explanation
**The exact equation.** A first-order ODE of the form

$$M(x, y) + N(x, y) y' = 0$$

is *exact* if there is a function $F(x, y)$ such that $\partial F/\partial x = M$ and $\partial F/\partial y = N$. The ODE then says $dF/dt = 0$ along a solution, so $F(x, y) = C$ is the implicit solution.

**The exactness test.** If $M$ and $N$ have continuous partial derivatives in a simply connected region, the equation is exact if and only if

$$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x}.$$

This is a mixed-partials condition that says the vector field $(M, N)$ is *conservative* (curl-free in 2D). It is the same condition that appears in *Electricity and Magnetism* for conservative electric fields.

**Why the test works.** If $F$ exists with $\partial F/\partial x = M$ and $\partial F/\partial y = N$, then $\partial^2 F/\partial y \partial x = \partial M/\partial y$ and $\partial^2 F/\partial x \partial y = \partial N/\partial x$. Equality of mixed partials gives the test. Conversely, if the test holds in a simply connected region, an $F$ can be constructed.

**Constructing $F$.** Given $M, N$ satisfying the test, find $F$ by integrating $M$ with respect to $x$:

$$F(x, y) = \int M(x, y)\, dx + g(y),$$

where $g(y)$ is a function of $y$ alone. Then $\partial F/\partial y = \int (\partial M/\partial y) dx + g'(y) = N(x, y)$ determines $g'(y)$, hence $g(y)$, hence $F$.

**Integrating factors.** Not every first-order ODE is exact as written. But sometimes a function $\mu(x, y)$ exists such that multiplying through by $\mu$ makes the equation exact. Such $\mu$ is an integrating factor.

Two cases have simple formulas:
- If $\dfrac{(\partial M/\partial y) - (\partial N/\partial x)}{N}$ depends only on $x$, then $\mu(x) = \exp(\int \frac{(\partial M/\partial y) - (\partial N/\partial x)}{N} dx)$.
- If $\dfrac{(\partial N/\partial x) - (\partial M/\partial y)}{M}$ depends only on $y$, then $\mu(y) = \exp(\int \frac{(\partial N/\partial x) - (\partial M/\partial y)}{M} dy)$.

These formulas cover a wide class of problems. If neither gives a function of the right type, the integrating factor is harder to find.

**Bernoulli equation.** A nonlinear equation of the form $y' + p(x) y = q(x) y^n$. The substitution $v = y^{1-n}$ converts it to a linear first-order equation in $v$, which is then solved with the integrating factor. Bernoulli's equation is the simplest nonlinear first-order ODE that admits a general solution.

**Homogeneous equations.** An equation of the form $y' = f(y/x)$ is *homogeneous* in the sense that scaling $x$ and $y$ by the same factor leaves the equation invariant. The substitution $v = y/x$ converts it to a separable equation in $v$ and $x$.

**Geometric meaning.** The level curves of $F(x, y) = C$ are the solution curves of the exact ODE. The vector field $(M, N)$ is the gradient of $F$ (up to a sign), and the solutions are the perpendiculars to the gradient — the "streamlines" of the conservative field.

## Key Ideas
- Exact: $M + N y' = 0$ with $M = \partial F/\partial x$, $N = \partial F/\partial y$.
- Exactness test: $\partial M/\partial y = \partial N/\partial x$ (mixed partials).
- Construct $F$ by integrating $M$ in $x$, then fixing the $y$-function using $N$.
- Integrating factor $\mu(x)$ or $\mu(y)$ can make a non-exact equation exact.
- Bernoulli: substitute $v = y^{1-n}$ to linearise.

## Worked Examples
**Example 1 — Verify and solve.** Is $2 x y + x^2 y' = 0$ exact? Here $M = 2xy$, $N = x^2$. $\partial M/\partial y = 2x$, $\partial N/\partial x = 2x$. Equal, so exact. $F = \int 2 x y\, dx + g(y) = x^2 y + g(y)$. Then $\partial F/\partial y = x^2 + g'(y) = N = x^2$, so $g'(y) = 0$. $F = x^2 y = C$. So $y = C/x^2$.

**Example 2 — Find integrating factor.** $y^2 + x y y' = 0$. $M = y^2$, $N = x y$. $\partial M/\partial y = 2 y$, $\partial N/\partial x = y$. Not exact. $(\partial M/\partial y - \partial N/\partial x)/N = (2 y - y)/(x y) = 1/x$, which depends only on $x$. So $\mu = e^{\int dx/x} = x$. Multiply: $x y^2 + x^2 y y' = 0$. Now $M = x y^2$, $N = x^2 y$. $\partial M/\partial y = 2 x y$, $\partial N/\partial x = 2 x y$. Exact. $F = \int x y^2 dx = (1/2) x^2 y^2 + g(y)$. $\partial F/\partial y = x^2 y + g'(y) = N = x^2 y$, so $g'(y) = 0$. $F = (1/2) x^2 y^2 = C$, i.e. $x y = C'$.

**Example 3 — Bernoulli.** Solve $y' + y = y^2$. Substitute $v = y^{-1}$. Then $v' = -y^{-2} y'$. The equation becomes $-v' + v = 1$, or $v' - v = -1$. Integrating factor $e^{-x}$: $(e^{-x} v)' = -e^{-x}$. Integrate: $e^{-x} v = e^{-x} + C$, $v = 1 + C e^x$, $y = 1/(1 + C e^x)$.

## Common Misconceptions
- **"Every first-order ODE is exact after multiplying by something."** No. Integrating factors exist in many cases, but not all. Sometimes the equation is genuinely non-integrable in closed form.
- **"Mixed partials are always equal."** They are equal when the second partial derivatives are *continuous* (Clairaut's theorem). If they aren't (e.g. corner singularities), the test can fail.
- **"The integrating factor is unique."** It is not. If $\mu$ is an integrating factor, so is $C \mu$ for any constant $C$. Sometimes more than one independent integrating factor exists.
- **"Bernoulli is linear."** It is not — the $y^n$ term is nonlinear. The substitution trick linearises it, but the original equation is not linear.

## Connections
Exactness is the 2D statement of "curl-free vector field", which generalises to conservative fields in 3D in *Electricity and Magnetism* (electrostatic fields are exact because $\nabla \times \vec{E} = 0$). The Bernoulli substitution previews the change-of-variables techniques used in *Real Analysis* (Sem 3) and in *Numerical Methods* (Sem 4). The integrating-factor construction reappears in *Differential Equations* Module 2 for higher-order equations.

## Quick Check
1. State the exactness test for $M + N y' = 0$.
2. Verify that $2 x y + (x^2 + 1) y' = 0$ is exact and solve it.
3. Find an integrating factor for $y + x y' = 0$ and solve.
4. Use the substitution $v = y^{-1}$ to linearise $y' = y - y^3$.
5. Why is the exactness condition $\partial M/\partial y = \partial N/\partial x$?

## Takeaway
- Exact equation: $M + N y' = 0$ with $\partial M/\partial y = \partial N/\partial x$.
- Construct $F(x, y) = C$ as the implicit solution.
- Integrating factors can convert non-exact equations to exact.
- Bernoulli: substitute $v = y^{1-n}$ to linearise.
- The exactness condition is the 2D form of "the vector field is conservative".
