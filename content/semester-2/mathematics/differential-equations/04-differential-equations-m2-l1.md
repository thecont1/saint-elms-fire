***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: differential-equations
courseName: Differential Equations
moduleId: differential-equations-module-2
moduleName: Second-Order ODEs
lessonId: differential-equations-m2-l1
lessonName: Homogeneous Linear ODEs with Constant Coefficients
lessonNumber: 4
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - differential-equations-m1-l2
learningObjectives:
  - Solve homogeneous linear second-order ODEs with constant coefficients.
  - Identify the characteristic equation and its roots.
  - Distinguish three cases: distinct real, repeated real, and complex conjugate roots.
  - Apply the method to mechanical and electrical oscillators.
concepts:
  - Linear ODE with constant coefficients
  - Characteristic equation
  - Distinct real roots
  - Repeated root
  - Complex conjugate roots
  - Wronskian
tags:
  - mathematics
  - differential-equations
  - second-order
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Homogeneous Linear ODEs with Constant Coefficients

## Overview
The most important class of second-order ODEs in physics is the *homogeneous linear ODE with constant coefficients*: $a y'' + b y' + c y = 0$. The solutions are exponentials, and the unknown constants are the rates $r$ for which $e^{r t}$ solves the equation. The characteristic equation $a r^2 + b r + c = 0$ has roots that determine the form of the solution: distinct real, repeated real, or complex conjugate. The same mathematics governs damped and undamped oscillators in mechanics, RLC circuits, and many other systems.

## Learning Path
- What you should already know: exponential functions, complex numbers, basic algebra.
- What this lesson adds: the general method for constant-coefficient second-order ODEs and the three root cases.
- What it unlocks: forced oscillations, resonance, RLC circuits, and the linear algebra viewpoint in *Linear Algebra* (Sem 5).

## Core Explanation
**The form.** $a y'' + b y' + c y = 0$ with $a \ne 0$. Constant coefficients make this ODE particularly tractable.

**Ansatz $y = e^{r t}$.** Try a solution of the form $y = e^{r t}$. Substitute: $a r^2 e^{r t} + b r e^{r t} + c e^{r t} = (a r^2 + b r + c) e^{r t} = 0$. The exponential is never zero, so the coefficient must vanish:

$$a r^2 + b r + c = 0.$$

This is the **characteristic equation**. Its two roots (counted with multiplicity) determine the general solution.

**Case 1: distinct real roots $r_1, r_2$.** The general solution is

$$y(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}.$$

Each exponential is a solution, and the linear combination covers the full two-dimensional solution space.

**Case 2: repeated real root $r$.** The characteristic equation has a double root. One solution is $y_1 = e^{r t}$. The second independent solution is found by reduction of order to be $y_2 = t e^{r t}$. The general solution is

$$y(t) = (C_1 + C_2 t) e^{r t}.$$

The factor of $t$ is the price of degeneracy; it ensures two independent solutions.

**Case 3: complex conjugate roots $r = \alpha \pm i \beta$.** Using Euler's formula, $e^{(\alpha + i \beta) t} = e^{\alpha t} (\cos \beta t + i \sin \beta t)$. The real and imaginary parts are independent real solutions:

$$y(t) = e^{\alpha t} (C_1 \cos \beta t + C_2 \sin \beta t).$$

This is the form of *damped oscillations*: the exponential $e^{\alpha t}$ is the envelope, the sinusoid is the oscillation.

**Physical interpretations.**
- $\ddot{x} + \omega^2 x = 0$: characteristic $r^2 + \omega^2 = 0$, roots $r = \pm i \omega$. Solution $x(t) = C_1 \cos \omega t + C_2 \sin \omega t$ — undamped simple harmonic motion.
- $\ddot{x} + 2 \gamma \dot{x} + \omega_0^2 x = 0$: characteristic $r^2 + 2 \gamma r + \omega_0^2 = 0$, roots $r = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$. Three sub-cases:
  - *Underdamped* ($\gamma < \omega_0$): complex roots, damped oscillation.
  - *Critically damped* ($\gamma = \omega_0$): repeated root, fastest non-oscillatory decay.
  - *Overdamped* ($\gamma > \omega_0$): distinct real roots, slow non-oscillatory decay.

**The Wronskian.** For two solutions $y_1, y_2$, the Wronskian $W(t) = y_1 y_2' - y_1' y_2$ measures their linear independence. If $W \ne 0$ on an interval, $y_1$ and $y_2$ are independent. For a second-order linear ODE, the Wronskian is non-zero iff the two solutions are independent.

**Initial conditions.** Two conditions (e.g. $y(0) = y_0$, $y'(0) = v_0$) determine the two constants $C_1, C_2$ uniquely (provided the solutions are independent). This is the same as the initial value problem for the second-order system.

**Superposition principle.** Any linear combination of solutions is a solution. This makes the solution space a two-dimensional vector space, and the pair $(y_1, y_2)$ is a basis.

**Reduction of order.** Given one solution $y_1$ of a second-order linear ODE, a second solution is $y_2 = y_1 \int (e^{-\int p\, dt}/y_1^2) dt$ where $p$ is the coefficient of $y'$ divided by the coefficient of $y''$. This is how $t e^{r t}$ is found in the repeated-root case.

## Key Ideas
- Try $y = e^{r t}$ in $a y'' + b y' + c y = 0$ to get the characteristic equation $a r^2 + b r + c = 0$.
- Distinct real roots: $y = C_1 e^{r_1 t} + C_2 e^{r_2 t}$.
- Repeated root: $y = (C_1 + C_2 t) e^{r t}$.
- Complex roots: $y = e^{\alpha t}(C_1 \cos \beta t + C_2 \sin \beta t)$.
- Initial conditions fix the two constants.

## Worked Examples
**Example 1 — Distinct real roots.** $y'' - 5 y' + 6 y = 0$. Characteristic: $r^2 - 5 r + 6 = (r - 2)(r - 3) = 0$. Roots $2, 3$. General solution: $y = C_1 e^{2 t} + C_2 e^{3 t}$. With $y(0) = 1$, $y'(0) = 0$: $C_1 + C_2 = 1$, $2 C_1 + 3 C_2 = 0 \Rightarrow C_1 = 3, C_2 = -2$. $y = 3 e^{2 t} - 2 e^{3 t}$.

**Example 2 — Complex roots.** $y'' + 4 y = 0$. Characteristic: $r^2 + 4 = 0$, roots $\pm 2 i$. General solution: $y = C_1 \cos 2 t + C_2 \sin 2 t$. This is undamped SHM with $\omega = 2$.

**Example 3 — Damped oscillator.** $y'' + 2 y' + 5 y = 0$. Characteristic: $r^2 + 2 r + 5 = 0$, roots $r = -1 \pm 2 i$. Underdamped. General solution: $y = e^{-t} (C_1 \cos 2 t + C_2 \sin 2 t)$. The oscillation decays with time constant $1$ and angular frequency $2$.

## Common Misconceptions
- **"Try $y = e^{r t}$ and you're done."** You have to check the roots and apply the right formula. Three cases, three forms.
- **"Complex roots are unphysical."** No — they encode oscillation. The real-valued form $e^{\alpha t}(C_1 \cos \beta t + C_2 \sin \beta t)$ is what physics needs.
- **"The Wronskian determines the constants."** No — the Wronskian only tells you whether two solutions are independent. The constants come from initial conditions.
- **"All second-order linear ODEs have two independent solutions."** They do, in any interval where the coefficients are continuous. Existence and uniqueness are guaranteed by the Picard–Lindelöf theorem adapted to higher orders.

## Connections
The characteristic equation reappears in the eigenvalue problem of *Linear Algebra* (Sem 5), where $a r^2 + b r + c = 0$ is the determinant of $a I r^2 + b I r + c I = 0$ in scalar form. The underdamped/overdamped/critically-damped language is universal in mechanical engineering, electrical engineering, and *Electricity and Magnetism* (RLC circuits). The forced version, treated in the next lesson, is the basis of resonance.

## Quick Check
1. Solve $y'' - 4 y = 0$ with $y(0) = 2$, $y'(0) = 0$.
2. Find the general solution of $y'' + 6 y' + 9 y = 0$.
3. Solve $y'' + 9 y = 0$ and identify the period of oscillation.
4. Classify the roots and write the general form of the solution: $y'' + 2 y' + 10 y = 0$.
5. What is the Wronskian, and what does it tell you about two solutions?

## Takeaway
- Try $y = e^{r t}$ in $a y'' + b y' + c y = 0$ to obtain the characteristic equation.
- Three cases: distinct real, repeated, complex — three different solution forms.
- The complex-root case gives damped oscillations: $y = e^{\alpha t}(C_1 \cos \beta t + C_2 \sin \beta t)$.
- Two initial conditions fix the two constants.
- The characteristic equation is the determinant of the matrix eigenvalue problem in *Linear Algebra*.
