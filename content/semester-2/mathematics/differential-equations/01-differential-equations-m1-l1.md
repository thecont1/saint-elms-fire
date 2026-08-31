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
lessonId: differential-equations-m1-l1
lessonName: Classification and Direction Fields
lessonNumber: 1
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 1
prerequisites:
  - differential-calculus-m2-l2
learningObjectives:
  - Classify differential equations by order, linearity, and homogeneity.
  - Recognise ordinary vs. partial differential equations.
  - Sketch and interpret a direction field.
  - State existence and uniqueness conditions for first-order ODEs.
concepts:
  - Ordinary differential equation (ODE)
  - Partial differential equation (PDE)
  - Order and degree
  - Linear and nonlinear ODEs
  - Direction field
  - Initial value problem
tags:
  - mathematics
  - calculus
  - differential-equations
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Classification and Direction Fields

## Overview
A differential equation relates a function to its derivatives. Almost every physical law — Newton's second law, the heat equation, Maxwell's equations, the Schrödinger equation — is a differential equation. This lesson introduces the language of ODEs (ordinary differential equations): order, linearity, and the basic forms. Direction fields are a graphical way to read off qualitative behaviour without solving the equation.

## Learning Path
- What you should already know: derivatives, integrals, basic algebra.
- What this lesson adds: a vocabulary for differential equations and a way to visualise their solutions.
- What it unlocks: the standard first-order techniques of the next two lessons, the second-order equations in the next module, and the models used throughout physics.

## Core Explanation
**What is a differential equation?** An equation involving an unknown function and its derivatives. Examples:
- $y' = 2 x$ (relates $y$ and its first derivative to $x$).
- $m \ddot{x} = -k x$ (relates $x$ and its second derivative to $x$).
- $y'' + 9 y = 0$ (a second-order linear ODE).

If the unknown is a function of one variable, it is an *ordinary* differential equation (ODE). If the unknown is a function of several variables and partial derivatives appear, it is a *partial* differential equation (PDE). This course is about ODEs; PDEs appear in *Waves and Optics*, *Electricity and Magnetism*, and *Quantum Mechanics*.

**Order and degree.** The *order* is the highest derivative that appears: first-order, second-order, etc. The *degree* is the power of the highest-order derivative, after the equation is cleared of fractions and radicals. Most physics ODEs are first- or second-order and of degree one.

**Linearity.** A differential equation is *linear* if the unknown function and its derivatives appear to the first power and are not multiplied together. $y' + p(x) y = q(x)$ is linear in $y$. $y \cdot y' = 1$ is not linear (the product $y \cdot y'$). $y'' + \sin x \cdot y = 0$ is linear (the coefficient of $y$ depends on $x$ but $y$ itself appears linearly).

Linear ODEs are usually much easier to solve than nonlinear ones, and have a richer theory (existence, uniqueness, superposition). Nonlinear ODEs often require numerical methods.

**Homogeneous vs. non-homogeneous.** A linear ODE is *homogeneous* if every term involves the unknown or its derivatives. It is *non-homogeneous* if there is a term that does not (called the *forcing* or *source* term). $y'' + 9 y = 0$ is homogeneous; $y'' + 9 y = \sin x$ is non-homogeneous. The general solution of a non-homogeneous linear ODE is the sum of the general solution of the homogeneous equation plus a particular solution.

**General and particular solutions.** The *general solution* of an $n$-th order ODE contains $n$ arbitrary constants. A *particular solution* specifies the constants using $n$ initial or boundary conditions. The initial value problem (IVP) is: solve the ODE subject to conditions like $y(x_0) = y_0$, $y'(x_0) = y_1$, etc.

**Direction fields.** For a first-order ODE $y' = f(x, y)$, the right-hand side $f(x, y)$ is a known function of $x$ and $y$. At every point $(x, y)$ in the plane, we can draw a small line with slope $f(x, y)$. The collection of these lines is the *direction field* (or *slope field*). Solution curves follow the direction field; they are tangent to the line at every point.

**Equilibrium solutions.** If $f(x, y) = 0$ for some $y = y^*(x)$ (or $y = $ const), then the line $y = y^*$ is an equilibrium solution. The system has zero derivative there, so once on the line, the solution stays on it.

**Existence and uniqueness.** For the first-order IVP $y' = f(x, y)$, $y(x_0) = y_0$: if $f$ and $\partial f/\partial y$ are continuous in a region containing $(x_0, y_0)$, then there is a unique solution through that point (locally). This is the Picard–Lindelöf theorem. Without continuity, solutions can fail to exist or be non-unique.

**Sketching solution curves.** To sketch: pick an initial point, follow the direction field. Different starting points give different solution curves. Equilibrium solutions are special curves where the field is horizontal. The behaviour near equilibria — whether solutions are attracted, repelled, or pass through — is the *stability* of the equilibrium.

## Key Ideas
- An ODE relates an unknown function of one variable to its derivatives.
- Order: highest derivative. Linearity: no products of $y$ or its derivatives.
- General solution: $n$ arbitrary constants for an $n$-th order ODE. Particular: $n$ conditions.
- Direction field: at each point $(x, y)$, plot a short segment of slope $f(x, y)$.
- Picard–Lindelöf: continuity of $f$ and $\partial f/\partial y$ guarantees a unique local solution.

## Worked Examples
**Example 1 — Classify.** $y''' + x y'' - e^x y = \sin x$ is a third-order, linear, non-homogeneous ODE.
$y y' = x$ is first-order, non-linear.
$\partial u / \partial t = \alpha \partial^2 u / \partial x^2$ is the heat equation, a PDE.

**Example 2 — Direction field of $y' = -y$.** At $y = 1$, slope $-1$; at $y = 2$, slope $-2$; at $y = 0$, slope $0$ (equilibrium). The field points down for $y > 0$ and up for $y < 0$, with $y = 0$ as a stable equilibrium. Solution curves decay exponentially to zero.

**Example 3 — Logistic direction field.** $y' = y(1 - y)$ has equilibria at $y = 0$ and $y = 1$. For $0 < y < 1$, the slope is positive, so $y$ increases. For $y > 1$, the slope is negative, so $y$ decreases. Both equilibria are stable (or at least attracting).

## Common Misconceptions
- **"The constants of integration are arbitrary."** Yes — they are arbitrary until initial or boundary conditions fix them. A "particular solution" without conditions is not a particular solution at all.
- **"Linear means $y$ is a straight line."** No. *Linear* refers to the differential equation, not the graph of the solution. The solution of $y'' + 9 y = 0$ is sinusoidal, not linear.
- **"Every ODE has a closed-form solution."** False. Most ODEs do not. Numerical methods (Sem 4) are often necessary.
- **"Direction fields give approximate solutions."** Direction fields are *exact* visualisations of the equation; solution curves are uniquely defined. The "approximation" is in the manual sketching, not in the field.

## Connections
The most important physical ODEs all show up in this course: Newton's second law gives $m \ddot{x} = F$ (Mechanics); the RC circuit gives $RC \, dV/dt + V = V_s$ (Electricity and Magnetism); the simple harmonic oscillator gives $\ddot{x} + \omega^2 x = 0$ (Mechanics and *Waves and Optics*). Linear second-order ODEs with constant coefficients — covered in Module 2 — are the workhorse of vibrations, circuits, and quantum mechanics.

## Quick Check
1. Classify $y'' + 4 y' - 3 y = \cos x$ by order, linearity, and homogeneity.
2. Sketch the direction field of $y' = y$ and identify the equilibrium.
3. State the Picard–Lindelöf theorem and the conditions for existence and uniqueness.
4. How many arbitrary constants does the general solution of a fourth-order ODE contain?
5. What is the difference between a general solution and a particular solution?

## Takeaway
- ODEs relate a function of one variable to its derivatives; PDEs to partial derivatives.
- Order: highest derivative; linearity: no products of the unknown.
- General solution has $n$ arbitrary constants for an $n$-th order ODE.
- Direction field plots slope $f(x, y)$ at each point; solution curves follow the field.
- Picard–Lindelöf: continuity of $f$ and $\partial f/\partial y$ gives existence and uniqueness.
