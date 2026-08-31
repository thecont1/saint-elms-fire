***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: calculus-using-python
courseName: Calculus using Python
moduleId: calculus-using-python-module-2
moduleName: Symbolic Computation and Equation Solving
lessonId: calculus-using-python-m2-l3
lessonName: ODEs and Initial Value Problems
lessonNumber: 5
moduleNumber: 2
semesterNumber: 2
difficulty: advanced
estimatedStudyMinutes: 45
releaseOrder: 5
prerequisites:
  - calculus-using-python-m2-l2
learningObjectives:
  - Solve first-order ODEs with SciPy's `solve_ivp`.
  - Choose between explicit and implicit methods based on stiffness.
  - Apply ODE solvers to physics problems: oscillators, decay, planetary motion.
concepts:
  - Initial value problem
  - Euler method
  - Runge–Kutta methods
  - Stiff equations
  - Adaptive step size
  - Energy conservation
tags:
  - computational-methods
  - python
  - ode
  - numerical-methods
sourceType: authored-courseware
assessmentHints:
  - short-answer
  - problem-solving
***

# ODEs and Initial Value Problems

## Overview

An initial value problem (IVP) is a system of ordinary differential equations with a specified starting state. IVPs are central to physics: Newton's second law, the heat equation (after discretisation), the Schrödinger equation (after time splitting), circuit equations, and population dynamics all reduce to IVPs. The lesson develops the Euler and Runge–Kutta methods from first principles, then introduces SciPy's `solve_ivp` for production work. The lesson emphasises the choice of method based on stiffness, accuracy, and conservation properties. The lesson applies the methods to canonical physics problems: the simple harmonic oscillator, exponential decay, and the two-body Kepler problem.

## Learning Path

- **What you should already know**: the calculus of differential equations (Semester 2); Python basics, NumPy, SymPy (Lessons m1-l1 to m2-l1); root finding (Lesson m2-l2).
- **What this lesson adds**: the Euler and Runge–Kutta methods; SciPy's `solve_ivp`; stiffness and adaptive step size; application to physics problems.
- **What later lessons this will unlock**: the capstone project in Lesson m2-l3; the numerical methods of Semester 4; the application of ODEs throughout the rest of the programme.

## Core Explanation

### Initial value problems

An initial value problem (IVP) is a system of ODEs of the form

$$\frac{d \vec y}{dt} = \vec f(t, \vec y), \quad \vec y(t_0) = \vec y_0,$$

where $\vec y(t)$ is the unknown vector, $\vec f$ is a known function, and $\vec y_0$ is the initial condition. The solution is a function $\vec y(t)$ that satisfies the ODE and the initial condition.

A simple example: $\dot y = -k y$, $y(0) = y_0$. The solution is $y(t) = y_0 e^{-k t}$, an exponential decay.

A more complex example: the simple harmonic oscillator $\ddot x = -\omega^2 x$, $x(0) = x_0$, $\dot x(0) = 0$. The solution is $x(t) = x_0 \cos(\omega t)$. To apply a numerical method, write the second-order ODE as a system of first-order ODEs: $\dot x = v$, $\dot v = -\omega^2 x$, with initial conditions $x(0) = x_0$, $v(0) = 0$.

### Euler's method

The **Euler method** is the simplest ODE solver: at each step, the derivative is approximated by a forward difference:

$$y_{n+1} = y_n + h f(t_n, y_n).$$

The error per step is $O(h^2)$, and the global error after $N$ steps is $O(h)$. Euler's method is rarely used in practice (it is unstable for stiff equations) but is the basis of all higher-order methods.

```python
def euler(f, t, y0):
    y = np.zeros((len(t), len(y0)))
    y[0] = y0
    for n in range(len(t) - 1):
        h = t[n+1] - t[n]
        y[n+1] = y[n] + h * f(t[n], y[n])
    return y
```

### Runge–Kutta methods

The **Runge–Kutta methods** use multiple evaluations of $f$ per step to achieve higher accuracy. The fourth-order Runge–Kutta (RK4) is the most common:

```python
def rk4(f, t, y0):
    y = np.zeros((len(t), len(y0)))
    y[0] = y0
    for n in range(len(t) - 1):
        h = t[n+1] - t[n]
        k1 = f(t[n], y[n])
        k2 = f(t[n] + h/2, y[n] + h*k1/2)
        k3 = f(t[n] + h/2, y[n] + h*k2/2)
        k4 = f(t[n] + h, y[n] + h*k3)
        y[n+1] = y[n] + h * (k1 + 2*k2 + 2*k3 + k4) / 6
    return y
```

The error per step is $O(h^5)$, and the global error is $O(h^4)$. RK4 is the workhorse of non-stiff ODE solvers. Higher-order methods (RK45, Dormand–Prince) use adaptive step size to balance accuracy and speed.

### SciPy's `solve_ivp`

SciPy's `scipy.integrate.solve_ivp` is the standard tool for IVPs in Python. The usage:

```python
from scipy.integrate import solve_ivp

def f(t, y):
    return -y  # exponential decay

result = solve_ivp(f, [0, 5], [1.0], method='RK45', t_eval=np.linspace(0, 5, 100))
```

The arguments:

- `fun`: the right-hand side $f(t, y)$.
- `t_span`: the interval $[t_0, t_f]$.
- `y0`: the initial condition $\vec y(t_0)$.
- `method`: the solver ('RK45', 'RK23', 'DOP853', 'Radau', 'BDF', 'LSODA').
- `t_eval`: the times at which the solution is reported.
- `rtol`, `atol`: relative and absolute tolerances.

The result is an `OdeResult` object with attributes `t` (the time points), `y` (the solution), `success` (a boolean), `message` (a status string), and `nfev` (the number of function evaluations).

### Adaptive step size

Most modern ODE solvers use **adaptive step size**: they estimate the local error at each step and adjust $h$ to maintain a target tolerance. The standard approach is to use two methods of different order (e.g. RK4 and RK5) and compare; the difference is an estimate of the local error. If the error is too large, the step is rejected and a smaller $h$ is tried; if it is much smaller than the tolerance, the step is accepted and a larger $h$ is tried for the next step.

SciPy's `RK45` is an explicit Runge–Kutta method of order 5(4) (Dormand–Prince), which uses adaptive step size. It is the default choice for non-stiff problems.

### Stiffness

A system is **stiff** if some components decay much faster than others. The classical example: $y' = -1000 y + 999 e^{-t}$, with $y(0) = 1$. The solution is $y(t) = e^{-1000 t} + e^{-t}$. The fast component ($e^{-1000 t}$) decays in a few milliseconds; the slow component ($e^{-t}$) lasts seconds. Explicit methods (Euler, RK4) require a step size $h \ll 1/1000$ for stability, even though the slow component can be resolved with a much larger $h$.

For stiff problems, use an **implicit method** (e.g. BDF, Radau). The implicit Euler method is $y_{n+1} = y_n + h f(t_{n+1}, y_{n+1})$, which requires solving for $y_{n+1}$ at each step. The method is unconditionally stable (no constraint on $h$ from stability) but requires more computation per step.

SciPy's `Radau` and `BDF` are implicit methods suitable for stiff problems. SciPy's `LSODA` is an adaptive method that switches between non-stiff and stiff solvers automatically; it is the default when `method` is not specified.

### Worked examples

**Example 1 — Exponential decay.**

Solve $y' = -k y$, $y(0) = 1$, for $t \in [0, 5]$ with $k = 1$.

```python
from scipy.integrate import solve_ivp
import numpy as np

def f(t, y):
    return -y

result = solve_ivp(f, [0, 5], [1.0], t_eval=np.linspace(0, 5, 11))
print(result.y[0])  # [1.0, 0.6065, 0.3679, ..., 0.0067]
```

The solution is $e^{-t}$, evaluated at the requested times.

**Example 2 — Simple harmonic oscillator.**

Solve $\ddot x + \omega^2 x = 0$ with $\omega = 1$, $x(0) = 1$, $\dot x(0) = 0$.

```python
def f(t, y):
    x, v = y
    return [v, -x]

result = solve_ivp(f, [0, 10], [1.0, 0.0], t_eval=np.linspace(0, 10, 101))
print(result.y[0, :5])  # [1.0, 0.9999, 0.9995, 0.9989, 0.9980]
```

The solution is $\cos t$, evaluated at the requested times. The energy $E = \frac{1}{2}(\dot x^2 + x^2)$ is conserved (to machine precision) by the RK45 method.

**Example 3 — Stiff problem: the Robertson chemical kinetics system.**

Solve the Robertson system, a classic stiff ODE test problem.

```python
def f(t, y):
    y1, y2, y3 = y
    return [
        -0.04 * y1 + 1e4 * y2 * y3,
        0.04 * y1 - 1e4 * y2 * y3 - 3e7 * y2**2,
        3e7 * y2**2
    ]

result = solve_ivp(f, [0, 1e5], [1.0, 0.0, 0.0], method='Radau', rtol=1e-6, atol=1e-12)
```

The Robertson system is stiff because the rate constants differ by 9 orders of magnitude. The `Radau` method is necessary; RK45 will fail or require an extremely small step size.

### Conservation laws

Some ODEs conserve a quantity (energy, momentum, particle number). A good ODE solver should approximately conserve these quantities. Explicit Runge–Kutta methods do not conserve energy exactly; the error grows linearly with time (a "phase error"). For long-time integration, use a **symplectic integrator** (for Hamiltonian systems) or a method that conserves the specific quantity (e.g. a positivity-preserving method).

SciPy's `solve_ivp` does not have a built-in symplectic method, but the library `scipy.integrate` can be extended with custom solvers. For simple Hamiltonian systems (e.g. the Kepler problem), the standard RK45 with very tight tolerances is usually sufficient.

### Worked example — Two-body Kepler problem.

Solve Newton's equations for the two-body Kepler problem: $\ddot{\vec r} = -G M \vec r / r^3$, with $G M = 1$, initial conditions $\vec r(0) = (1, 0)$, $\dot{\vec r}(0) = (0, 0.5)$.

```python
def f(t, y):
    x, y_pos, vx, vy = y
    r = np.sqrt(x**2 + y_pos**2)
    return [vx, vy, -x / r**3, -y_pos / r**3]

result = solve_ivp(f, [0, 100], [1, 0, 0, 0.5], rtol=1e-9, atol=1e-12, t_eval=np.linspace(0, 100, 1000))

# Plot the orbit
import matplotlib.pyplot as plt
plt.plot(result.y[0], result.y[1])
plt.axis('equal')
plt.show()
```

The orbit is an ellipse (Kepler's first law), and the energy is approximately conserved (the small drift is the numerical error of the RK45 method).

### Common pitfalls

- **Too large a step**: the adaptive method takes a small step for accuracy, but the result may still be inaccurate. Reduce the tolerance and check the result.
- **Stiff equation with explicit method**: RK45 will take a very small step, requiring many function evaluations. Use `Radau` or `BDF`.
- **Discontinuities in the RHS**: most ODE solvers assume $f$ is smooth. A discontinuity causes the solver to take a very small step. Smooth the RHS or use an event-driven method.
- **Conservation laws not preserved**: the energy of the harmonic oscillator may drift with RK45. For long-time integration, use a symplectic method.
- **Wrong initial conditions**: the most common error. Always verify the initial conditions before running the solver.

### Key Ideas

- Euler's method: simple, unstable for stiff problems, $O(h)$ global error.
- RK4: fourth-order, $O(h^4)$ global error, the workhorse of non-stiff solvers.
- Adaptive step size: balances accuracy and speed.
- Stiffness: requires implicit methods (Radau, BDF).
- SciPy's `solve_ivp` is the standard tool for IVPs in Python.
- Conservation laws: explicit Runge–Kutta does not preserve them exactly.

## Worked Examples

### Example 1 — Logistic growth.

Solve $y' = r y (1 - y / K)$ with $r = 1$, $K = 10$, $y(0) = 0.1$.

```python
def f(t, y):
    return 1 * y * (1 - y / 10)

result = solve_ivp(f, [0, 20], [0.1], t_eval=np.linspace(0, 20, 21))
```

The solution approaches the carrying capacity $K = 10$.

### Example 2 — Driven harmonic oscillator with damping.

Solve $\ddot x + 2 \gamma \dot x + \omega^2 x = F_0 \cos(\omega_d t)$ with $\gamma = 0.1$, $\omega = 1$, $F_0 = 1$, $\omega_d = 0.9$.

```python
def f(t, y):
    x, v = y
    return [v, 1 * np.cos(0.9 * t) - 2 * 0.1 * v - 1 * x]

result = solve_ivp(f, [0, 100], [0, 0], t_eval=np.linspace(0, 100, 1000))
```

The solution shows the transient behaviour (decay of the initial conditions) and the steady-state response (forced oscillation at $\omega_d$).

## Common Misconceptions

- **"Euler is good enough."** No, it is unstable for stiff problems and inaccurate for non-stiff problems. Use RK45 or higher.
- **"RK4 is always the best."** For non-stiff problems, RK45 (Dormand–Prince) is more accurate and adaptive. For stiff problems, use `Radau` or `BDF`.
- **"Stiffness is a property of the equation."** It depends on the time scale of interest. A problem can be stiff for a long-time integration but not for a short one.
- **"The adaptive step size gives the right answer."** It gives an answer to within the tolerance. The user must check the tolerance and the result.
- **"Conservation laws are preserved by any good method."** No. Explicit Runge–Kutta does not preserve energy exactly. For long-time integration, use a symplectic method.

## Connections

- ODEs are the foundation of classical mechanics (Newton's second law), electromagnetism (Maxwell's equations in time domain), and quantum mechanics (the Schrödinger equation in time domain).
- The numerical solution of ODEs is the gateway to computational physics.
- The numerical methods course in Semester 4 develops these methods in detail.
- The Kepler problem is a classical test of numerical methods and a fundamental problem in celestial mechanics.

## Quick Check

1. Solve $y' = -2 y$, $y(0) = 1$ using `solve_ivp` with `RK45` and `t_eval = np.linspace(0, 5, 11)`.
2. Solve the simple harmonic oscillator $\ddot x + x = 0$, $x(0) = 1$, $\dot x(0) = 0$ and verify that the energy is conserved to machine precision.
3. Solve the Robertson system using `Radau` and compare the number of function evaluations to `RK45`.
4. What is the difference between explicit and implicit ODE methods? When is each appropriate?
5. Plot the orbit of a satellite in a Kepler problem with $e = 0.5$.

## Takeaway

- Euler's method is simple but unstable; RK4 is the workhorse of non-stiff solvers.
- Adaptive step size methods (RK45) balance accuracy and speed.
- Stiff equations require implicit methods (Radau, BDF).
- SciPy's `solve_ivp` is the standard tool for IVPs in Python.
- Conservation laws are not preserved exactly by explicit Runge–Kutta; use symplectic methods for long-time integration.
