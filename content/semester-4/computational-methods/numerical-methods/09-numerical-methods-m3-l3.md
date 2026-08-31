***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: computational-methods
subjectName: Computational Methods
courseId: numerical-methods
courseName: Numerical Methods
moduleId: numerical-methods-module-3
moduleName: Linear Systems and ODEs
lessonId: numerical-methods-m3-l3
lessonName: Numerical ODEs — Euler and Runge–Kutta
lessonNumber: 9
moduleNumber: 3
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - numerical-methods-m3-l2
  - differential-equations-m2-l1
learningObjectives:
  - Derive Euler's method for $y' = f(t, y)$ and state its error.
  - State the classical fourth-order Runge–Kutta method.
  - Discuss stability and stiffness.
  - Choose step sizes for a given error tolerance.
concepts:
  - Initial value problem
  - Euler's method
  - Runge–Kutta methods
  - Local truncation error
  - Global error
  - Stability and stiffness
tags:
  - computational-methods
  - numerical-analysis
  - ode
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Numerical ODEs — Euler and Runge–Kutta

## Overview
Most differential equations in physics cannot be solved analytically. The initial value problem $y' = f(t, y)$, $y(t_0) = y_0$ is solved numerically by stepping forward in time from $t_0$ to a final time, computing approximate $y$ at each step. The simplest method is Euler's, with error $O(h)$ per step. Higher-order methods (Runge–Kutta, Adams, backward differentiation) give much better accuracy per step, and *implicit* methods are needed for stiff problems. This lesson develops the standard methods, their error analysis, and the issue of stiffness.

## Learning Path
- What you should already know: first-order ODEs from *Differential Equations*, Taylor's theorem, basic linear algebra.
- What this lesson adds: numerical methods for ODEs, their error analysis, and stiffness.
- What it unlocks: the numerical solution of stiff systems, of Hamiltonian systems, and of PDEs by the method of lines.

## Core Explanation
**The initial value problem (IVP).** Find $y(t)$ for $t \in [t_0, T]$ given $y' = f(t, y)$ and $y(t_0) = y_0$. We assume $f$ is sufficiently smooth and the IVP has a unique solution on the interval.

**Discretisation.** Pick a step size $h = (T - t_0)/N$ and a grid $t_n = t_0 + n h$. Compute approximate $y_n \approx y(t_n)$.

**Euler's method.** $y_{n+1} = y_n + h f(t_n, y_n)$. Geometric: step along the tangent line at $(t_n, y_n)$ for a distance $h$. The simplest possible method.

**Local truncation error.** The error introduced in a single step, assuming the previous step was exact. For Euler, LTE $= O(h^2)$ (one power of $h$ for the function evaluation, one for the truncation of Taylor's theorem).

**Global error.** The total error after $N = T/h$ steps. For a method with LTE $= O(h^{p+1})$, the global error is $O(h^p)$. For Euler, LTE $O(h^2)$, global $O(h)$. To halve the error, halve $h$ (and double the work).

**Stability.** A method is *stable* if small perturbations (e.g. round-off) do not grow. For the test equation $y' = \lambda y$ (with $\lambda$ having negative real part), the Euler iteration $y_{n+1} = (1 + h \lambda) y_n$ is stable iff $|1 + h \lambda| < 1$, i.e. $h |\lambda| < 2$ (for real $\lambda < 0$). The *stability region* is the set of $z = h \lambda$ in the complex plane where the method is stable.

**Euler's stability region.** $|1 + z| < 1$ — a disk of radius $1$ centred at $-1$. For $\lambda < 0$ real, need $h |\lambda| < 2$. For purely imaginary $\lambda$ (oscillations), Euler is unstable. Better methods have larger stability regions.

**Improved Euler (Heun's method).** $y_{n+1} = y_n + (h/2) (k_1 + k_2)$, where $k_1 = f(t_n, y_n)$, $k_2 = f(t_n + h, y_n + h k_1)$. Predictor-corrector: predict with Euler, then correct with the trapezoidal rule. Second order, $O(h^2)$ global error.

**Classical Runge–Kutta (RK4).** The workhorse of non-stiff ODEs. Four function evaluations per step:

$$k_1 = f(t_n, y_n),$$
$$k_2 = f(t_n + h/2, y_n + h k_1/2),$$
$$k_3 = f(t_n + h/2, y_n + h k_2/2),$$
$$k_4 = f(t_n + h, y_n + h k_3),$$
$$y_{n+1} = y_n + (h/6) (k_1 + 2 k_2 + 2 k_3 + k_4).$$

Fourth order: global error $O(h^4)$. Cost: 4 function evaluations per step. The most widely used method for non-stiff problems.

**Higher-order Runge–Kutta.** RK5(4) (Dormand–Prince) uses 6 function evaluations to get order 5 with an embedded order-4 estimate (for error control). RK8(7) is even higher. Adaptive step-size control uses the embedded estimates.

**Adaptive step size.** Choose $h$ to keep the local error below a tolerance. Estimate the local error from the difference between two methods of different order (e.g. RK4 and RK5). Increase $h$ if the error is small, decrease if large. This is what production-quality ODE solvers do.

**Embedded Runge–Kutta (e.g. RK45).** A pair of methods of different order, sharing function evaluations. The difference is the local error estimate, used for step-size control. The standard Dormand–Prince pair is RK4(5) — order 5 with an embedded order 4.

**Multi-step methods (Adams).** Use the values at several past points to extrapolate. *Adams–Bashforth* (explicit): $y_{n+1} = y_n + h \sum b_i f_{n - i}$. *Adams–Moulton* (implicit): $y_{n+1} = y_n + h \sum b_i f_{n+1 - i}$. Higher order, but more memory and harder to start.

**Backward differentiation formulas (BDF).** Use the derivative at $y_{n+1}$: $\sum a_i y_{n+1-i} = h f(t_{n+1}, y_{n+1})$. Implicit; requires solving a nonlinear equation at each step. Stable for stiff problems. BDF-2 is order 2, BDF-6 is order 6 (max for BDF).

**Stiffness.** An ODE is *stiff* if some components of the solution decay much faster than others. Example: $y' = -1000 y$, $y(0) = 1$, exact solution $y = e^{-1000 t}$. The decay is fast; explicit methods need very small $h$ to be stable. With $h > 2/1000$, Euler is unstable.

**Implicit Euler.** $y_{n+1} = y_n + h f(t_{n+1}, y_{n+1})$. Requires solving an equation (or system of equations) for $y_{n+1}$. Stable for any $h > 0$ (for $f$ with bounded derivative). First-order accuracy.

**Implicit methods for stiff systems.** Backward Euler, BDF, implicit Runge–Kutta (Radau, Lobatto). For linear systems, the implicit equation can be solved directly (involves a matrix solve). For nonlinear systems, use Newton's method.

**Linear stability analysis.** Apply the method to the test equation $y' = \lambda y$. The iteration $y_{n+1} = R(z) y_n$ with $z = h \lambda$. The method is stable iff $|R(z)| \le 1$. The stability region is the set of $z$ with $|R(z)| \le 1$.

**A-stability.** A method is *A-stable* if its stability region contains the entire left half-plane. Backward Euler, trapezoidal rule, and Radau IIA are A-stable. Forward Euler and explicit RK are not (their stability regions are bounded).

**L-stability.** A method is *L-stable* if it is A-stable and $|R(z)| \to 0$ as $z \to \infty$. Backward Euler is L-stable. The trapezoidal rule is A-stable but not L-stable.

**Symplectic methods.** For Hamiltonian systems, symplectic methods (e.g. Verlet, leapfrog) preserve the symplectic structure, giving long-time stability. Not as accurate per step as RK4, but better for energy conservation in long integrations.

**Leapfrog (Verlet).** $y_{n+1} = y_n + h f(t_n + h/2, (y_n + y_{n-1})/2)$, or equivalently $y_{n+1} = 2 y_n - y_{n-1} + h^2 f(t_n, y_n)$. Second order; symplectic; very common in molecular dynamics and celestial mechanics.

**Runge–Kutta–Fehlberg.** A family of embedded Runge–Kutta methods. RKF45 is order 4(5). The standard adaptive solver.

**Dormand–Prince.** The default method in MATLAB's `ode45`. Order 4(5) with a specific coefficient set chosen for accuracy and stability.

**Implicit Runge–Kutta.** Generalisation of RK that uses the function at intermediate points. Radau IIA and Lobatto IIIC are popular. A-stable.

**Radau IIA.** Two-stage, third order (Radau IIA-2) or three-stage, fifth order (Radau IIA-3). A-stable. Implicit; requires Newton's method at each step. The default for stiff problems.

**Lobatto IIIC.** Includes the endpoints. A-stable. Common in structural mechanics.

**Implicit–explicit (IMEX) methods.** Treat stiff and non-stiff parts differently. Common in PDE discretisations.

**Conservation laws.** For Hamiltonian systems, standard methods (RK4) do not conserve energy — they oscillate around the true energy. Symplectic methods (Verlet) preserve a modified Hamiltonian. Conservation of invariants is important for long-time integrations.

**Geometric integration.** Methods designed to preserve geometric properties of the ODE (symplecticity, volume, energy). Includes symplectic, energy-preserving, and Lie-group methods.

**Adaptive step size for RK.** At each step, compute two solutions (e.g. RK4 and RK5). If their difference is below the tolerance, accept; choose the step size for the next step by the formula $h_\text{new} = h_\text{old} (T_\text{tol}/\text{err})^{1/p}$ where $p$ is the order.

**Error control.** Local error: per-step error. Global error: accumulated over the whole interval. Adaptive methods control the local error; the global is then bounded by the local (for stable methods).

**Stability vs. accuracy.** A method can be stable but inaccurate, or accurate but unstable. The choice of method is a trade-off: explicit RK is accurate for non-stiff; implicit for stiff; symplectic for Hamiltonian.

**Stiff detection.** If the solver is taking very small steps despite small errors, the system is likely stiff. Switch to an implicit method.

**DAE (differential-algebraic equations).** Equations of the form $F(t, y, y') = 0$ with a singular Jacobian $\partial F / \partial y'$. Solved with specialised methods (BDF, Radau IIA).

**Boundary value problems.** For two-point BVP, use shooting (solve IVP with guessed initial condition, adjust to match the boundary) or collocation (finite differences, spectral methods). Different from IVP.

**Method of lines.** Discretise a PDE in space, leaving a system of ODEs in time. Then use a standard ODE solver. Common for parabolic and hyperbolic PDEs.

**Total variation diminishing (TVD) methods.** Preserve the non-oscillatory property of solutions. Used in conservation laws.

**Conservation form.** Write the ODE in conservation form $u_t + f(u)_x = 0$ to preserve conserved quantities. Used in shock-capturing schemes.

**Delay differential equations (DDE).** ODEs with delays: $y'(t) = f(t, y(t), y(t - \tau))$. Solved with specialised methods that interpolate the delayed values.

**Stochastic differential equations (SDE).** ODEs with a random term. Solved with Euler–Maruyama, Milstein, and stochastic Runge–Kutta methods. Used in finance and statistical physics.

**Rosenbrock methods.** Linearly implicit Runge–Kutta methods. Cheaper than fully implicit for stiff systems. Each step requires a matrix factorisation.

**Exponential integrators.** Use the exact evolution of the linear part: $y(t_{n+1}) = e^{h A} y(t_n) + h \int_0^1 e^{(1 - s) h A} g(t_n + s h, y(t_n + s h)) ds$. Useful for stiff systems with a dominant linear part.

**Symplectic integrator error.** Symplectic integrators conserve a modified Hamiltonian, $\tilde{H} = H + O(h^p)$, where $p$ is the order. The energy oscillates around the true value but does not drift. The oscillation amplitude is $O(h^p)$.

**Symplectic leapfrog.** The standard symplectic integrator. Used in N-body simulations, molecular dynamics, accelerator physics. The workhorse of long-time integrations of Hamiltonian systems.

**Backward error analysis.** For symplectic methods, the numerical solution is the exact solution of a modified ODE. This explains the long-time stability and is the foundation of geometric integration.

**Applications in physics.**
- Celestial mechanics: $N$-body problem (solar system, galaxies, star clusters).
- Molecular dynamics: forces from potentials, integration of $10^6$–$10^{12}$ atoms.
- Accelerator physics: tracking charged particles in magnetic fields.
- Quantum mechanics: time-dependent Schrödinger equation (often with the split-operator method).
- General relativity: black hole simulations, gravitational waveforms.
- Plasma physics: particle-in-cell (PIC) simulations of kinetic plasmas.
- Climate models: coupled ODE/PDE systems for atmosphere and ocean.

**Production solvers.** SUNDIALS (ARKode, CVODE, IDA), PETSc, SciPy, GNU Scientific Library. Most have adaptive RK (non-stiff) and BDF/Radau (stiff).

**Worked example: pendulum.** $\theta'' = -(g/L) \sin \theta$, $\theta(0) = \theta_0$, $\theta'(0) = 0$. As a first-order system: $\theta' = \omega$, $\omega' = -(g/L) \sin \theta$. Euler: $\theta_{n+1} = \theta_n + h \omega_n$, $\omega_{n+1} = \omega_n - h (g/L) \sin \theta_n$. For small $h$ and small $\theta_0$, this is reasonable; for large $\theta_0$ or long times, the energy drifts. Use Verlet or RK4 for better behaviour.

**Worked example: stiff system.** $y' = -1000 y + 2000 e^{-t}$, $y(0) = 0$. Exact: $y = 2(e^{-t} - e^{-1000 t})$. The fast component $e^{-1000 t}$ is invisible after a short time, but dictates the step size for explicit methods. Backward Euler: $y_{n+1} = y_n + h (-1000 y_{n+1} + 2000 e^{-t_{n+1}})$, i.e. $y_{n+1} (1 + 1000 h) = y_n + 2000 h e^{-t_{n+1}}$, so $y_{n+1} = (y_n + 2000 h e^{-t_{n+1}})/(1 + 1000 h)$. Stable for any $h > 0$.

**Stiff example: chemical kinetics.** The Robertson problem: $y_1' = -0.04 y_1 + 10^4 y_2 y_3$, $y_2' = 0.04 y_1 - 10^4 y_2 y_3 - 3 \times 10^7 y_2^2$, $y_3' = 3 \times 10^7 y_2^2$. Stiffness ratio $\sim 10^{11}$. Explicit methods need tiny steps; BDF or Radau handle it with reasonable $h$.

**Energy error in N-body.** For a planetary system integrated with RK4, the energy error grows linearly in time (random walk). With Verlet, the energy oscillates around the true value with no secular drift. For long-time integrations, the difference is dramatic.

**ODEs from PDEs.** Heat equation $u_t = D u_{xx}$: discretise $u_{xx}$ on a grid, get $u' = A u$ where $A$ is a (sparse) matrix. Solve with an ODE solver. Method of lines.

**Discretisation error in PDEs.** The spatial discretisation adds error $O(h_x^p)$ where $p$ is the order of the spatial method. The temporal error is $O(\Delta t^q)$ where $q$ is the order of the ODE method. Total error: balance the two.

**Method of characteristics.** For hyperbolic PDEs, the method of characteristics reduces the PDE to a system of ODEs along the characteristic curves. The ODEs are then solved numerically.

**Adaptive step size for stiffness detection.** If the step size is being reduced drastically without convergence, the system is stiff. Switch to an implicit method.

## Key Ideas
- Euler: $y_{n+1} = y_n + h f(t_n, y_n)$, $O(h)$ global.
- RK4: fourth-order, 4 evaluations per step, the workhorse for non-stiff.
- Adaptive step size: control local error by step-size adjustment.
- Implicit methods (backward Euler, BDF, Radau) for stiff problems.
- Symplectic methods (Verlet) for long-time integration of Hamiltonian systems.

## Worked Examples
**Example 1 — Euler on $y' = y$.** $y(0) = 1$, $h = 0.1$. $y_{n+1} = y_n + 0.1 y_n = 1.1 y_n$. $y_1 = 1.1$, $y_2 = 1.21$, $y_3 = 1.331$. After 10 steps: $1.1^{10} = 2.594$. Exact: $e^1 = 2.718$. Error: $0.12$, about $4.4\%$.

**Example 2 — RK4 on $y' = y$.** $k_1 = y_n$, $k_2 = y_n (1 + 0.1/2) = 1.05 y_n$, $k_3 = y_n (1 + 0.1 \cdot 1.05/2) = 1.0525 y_n$, $k_4 = y_n (1 + 0.1 \cdot 1.0525) = 1.10525 y_n$. $y_{n+1} = y_n + (0.1/6) (1 + 2 \cdot 1.05 + 2 \cdot 1.0525 + 1.10525) y_n = y_n (1 + 0.1 \cdot 1.050417) = 1.10504 y_n$. After 10 steps: $1.10504^{10} = 2.717$. Exact: $2.718$. Error: $0.001$, about $0.04\%$. Much better than Euler.

**Example 3 — Stiff system.** $y' = -1000 y + 2000 e^{-t}$, $y(0) = 0$, $h = 0.01$. Forward Euler: $y_1 = 0 + 0.01 (0 + 2000) = 20$. Hmm, the exact $y(0.01) = 2(e^{-0.01} - e^{-10}) \approx 2(0.99 - 0) = 1.98$. So forward Euler is off by a factor of $10$. With $h = 0.001$: $y_1 = 0 + 0.001 \cdot 2000 = 2$. Better! The issue is the stability: $h |\lambda| = 0.01 \cdot 1000 = 10 > 2$, so Euler is unstable. Backward Euler is stable for any $h$.

**Example 4 — Verlet for SHO.** $x'' = -\omega^2 x$. Verlet: $x_{n+1} = 2 x_n - x_{n-1} - h^2 \omega^2 x_n$. For $\omega = 1$, $h = 0.1$: $x_{n+1} = 2 x_n - x_{n-1} - 0.01 x_n = 1.99 x_n - x_{n-1}$. Initial: $x_0 = 1, x_1 = \cos(0.1) \approx 0.995$. $x_2 = 1.99 \cdot 0.995 - 1 = 0.980$. Exact: $\cos(0.2) = 0.980$. Excellent.

## Common Misconceptions
- **"Smaller $h$ is always better."** Not for stability — explicit methods can be unstable for large $h |\lambda|$.
- **"RK4 is the best."** For non-stiff problems, yes. For stiff, use implicit.
- **"Symplectic means energy-conserving."** Symplectic means conserving a modified energy, not the true energy. The error is bounded but not zero.
- **"Backward Euler is bad because it's only first order."** First order, but A-stable and L-stable. The right tool for stiff problems.

## Connections
Numerical ODEs are the workhorses of computational physics. The same ideas appear in dynamical systems (chaos, integrability), celestial mechanics, molecular dynamics, and the numerical solution of PDEs by the method of lines. The stability and accuracy analysis is the prototype of similar analyses for PDE solvers (next level of complexity).

## Quick Check
1. State Euler's method.
2. State the classical RK4 method.
3. What is a stability region?
4. What is stiffness?
5. Why are symplectic methods used for Hamiltonian systems?

## Takeaway
- Euler: $O(h)$ global, simple, often unstable.
- RK4: $O(h^4)$ global, 4 evaluations per step, workhorse for non-stiff.
- Adaptive step size: control local error.
- Implicit methods (BDF, Radau) for stiff problems.
- Symplectic methods (Verlet) for long-time Hamiltonian integration.
