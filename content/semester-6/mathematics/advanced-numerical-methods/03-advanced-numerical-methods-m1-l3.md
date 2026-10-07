***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: advanced-numerical-methods
courseName: Advanced Numerical Methods (Math Elective I, A)
moduleId: advanced-numerical-methods-module-1
moduleName: Error, Stability and Nonlinear Systems
lessonId: advanced-numerical-methods-m1-l3
lessonName: Stiffness, A-Stability and Adaptive Step Control
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 3
prerequisites:
  - advanced-numerical-methods-m1-l2
  - numerical-methods-m3-l3
  - mathematics-lab-using-python-ii-m1-l3
learningObjectives:
  - Define stiffness through the test equation $y' = \lambda y$ and derive the stability function $R(z)$ of explicit Euler, implicit Euler, the trapezoidal rule and BDF2.
  - Prove A-stability of implicit Euler and the trapezoidal rule and explain why L-stability distinguishes them on very stiff components.
  - Derive BDF2 from backward differences, verify its order, and state the second Dahlquist barrier.
  - Implement an embedded Runge–Kutta pair with a local error estimate and the step-size law $h_{\text{new}} = 0.9\,h\,(\text{tol}/\text{err})^{1/(q+1)}$.
concepts:
  - Stiff differential equation
  - Stability function
  - A-stability
  - L-stability
  - Backward differentiation formula
  - Dahlquist barrier
  - Embedded Runge–Kutta pair
tags:
  - mathematics
  - advanced-numerical-methods
  - stiff-odes
  - adaptive-stepping
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Stiffness, A-Stability and Adaptive Step Control

## Overview

Convergence as $h \to 0$ says nothing about the step sizes one can afford. Many physical systems contain processes on wildly different time scales, such as a chemical intermediate relaxing in microseconds inside a reaction evolving over hours. Such systems are **stiff**, and an explicit method must take steps dictated by the fastest, least interesting mode or blow up. This lesson analyses the mechanism through the test equation and the stability function, introduces A-stability and L-stability, and shows why implicit Euler, the trapezoidal rule and the backward differentiation formulae (BDF) escape the restriction at the price of a Newton solve per step. The second half estimates the local error with an embedded Runge–Kutta pair and adapts the step so that the error, not the clock, governs the computation.

## Learning Path

- **What you should already know**: Euler, Heun and classical Runge–Kutta (Numerical Methods, Lesson m3-l3; Mathematics Lab using Python II, Lesson m1-l3); Newton's method for systems (Lesson m1-l2); eigenvalue decomposition (Linear Algebra, Lesson m2-l3).
- **What this lesson adds**: the test equation and stability function $R(z)$; A-stability and L-stability; BDF2 and the Dahlquist barrier; the Newton solve inside an implicit step; embedded pairs and the step-size controller.
- **What later lessons this will unlock**: the eigenvalues that decide stiffness are computed in Lesson m2-l1; the method of lines makes the heat equation a stiff system, and Crank–Nicolson (Lesson m3-l1) is the trapezoidal rule in disguise.

## Core Explanation

### Stiffness and the test equation

For $y' = Ay$ with $A = V\Lambda V^{-1}$, the eigenbasis decouples the system into scalar equations $w_j' = \lambda_j w_j$, so a method's behaviour is fixed by the **test equation**

$$y' = \lambda y, \qquad \operatorname{Re}\lambda < 0.$$

The exact solution obeys $y(t_{n+1}) = e^{h\lambda}y(t_n)$. Explicit Euler gives $y_{n+1} = (1 + h\lambda)y_n$, which decays only if $|1 + h\lambda| < 1$, that is $h < 2/|\lambda|$ for real negative $\lambda$. Consider

$$A = \begin{pmatrix} 998 & 1998 \\ -999 & -1999 \end{pmatrix}, \qquad \lambda_1 = -1, \quad \lambda_2 = -1000.$$

The fast mode is dead after $t \approx 0.01$ and the solution is thereafter the smooth $e^{-t}$ mode, yet explicit Euler must keep $h < 0.002$ throughout. A problem is **stiff** when stability rather than accuracy limits the step of an explicit method; the **stiffness ratio** $\max|\operatorname{Re}\lambda_j|/\min|\operatorname{Re}\lambda_j|$ measures it.

### Stability functions and A-stability

On the test equation every one-step method yields $y_{n+1} = R(z)y_n$ with $z = h\lambda$; $R$ is the **stability function** and $\{z : |R(z)| \le 1\}$ the **stability region**.

| Method | Update | $R(z)$ |
|---|---|---|
| Explicit Euler | $y_{n+1} = y_n + hf_n$ | $1 + z$ |
| Implicit Euler | $y_{n+1} = y_n + hf_{n+1}$ | $1/(1 - z)$ |
| Trapezoidal | $y_{n+1} = y_n + \tfrac{h}{2}(f_n + f_{n+1})$ | $(1 + z/2)/(1 - z/2)$ |

Explicit Euler's region is the unit disc about $-1$; classical RK4 has $R(z) = 1 + z + z^2/2 + z^3/6 + z^4/24$ and its region meets the negative axis at $z \approx -2.785$. Every explicit method has a polynomial $R$, so its region is bounded.

A method is **A-stable** if its region contains the closed left half-plane; then every decaying mode is damped for every $h$. Implicit Euler: $\operatorname{Re} z \le 0$ gives $|1 - z| \ge 1$, so $|R| \le 1$. Trapezoidal rule:

$$|1 + z/2|^2 - |1 - z/2|^2 = 2\operatorname{Re} z,$$

so $|R(z)| \le 1$ exactly when $\operatorname{Re} z \le 0$.

The two differ as $z \to -\infty$, where stiff modes live. Implicit Euler has $R(-\infty) = 0$ and annihilates a mode with $h|\lambda| \gg 1$ in one step, as the exact solution does; an A-stable method with $R(-\infty) = 0$ is **L-stable**. The trapezoidal rule has $R(-\infty) = -1$: the stiff mode is barely damped and survives as an alternating-sign oscillation. At $z = -100$ the factor is $-99/101 = -0.980$: ringing that persists for hundreds of steps. This is the sawtooth seen in Crank–Nicolson heat solutions with discontinuous data.

### Backward differentiation formulae

The BDF family keeps implicitness but replaces $y'(t_{n+1})$ by the derivative at $t_{n+1}$ of the polynomial interpolating $y_{n+1}, y_n, y_{n-1}, \ldots$. Through three points this is $(3y_{n+1} - 4y_n + y_{n-1})/(2h)$, giving **BDF2**:

$$y_{n+1} - \tfrac{4}{3}y_n + \tfrac{1}{3}y_{n-1} = \tfrac{2}{3}hf_{n+1}.$$

Example 2 shows it is second order; BDF$k$ has order $k$ for $k \le 6$.

A linear multistep method is stable at $z$ when all roots of $\rho(\zeta) - z\sigma(\zeta)$ lie in the unit disc, and its region's boundary is the **root locus** $z(\theta) = \rho(e^{i\theta})/\sigma(e^{i\theta})$. For BDF2, $\rho = \zeta^2 - \tfrac{4}{3}\zeta + \tfrac{1}{3}$ and $\sigma = \tfrac{2}{3}\zeta^2$, so

$$z(\theta) = \tfrac{3}{2} - 2e^{-i\theta} + \tfrac{1}{2}e^{-2i\theta}, \qquad \operatorname{Re} z(\theta) = \tfrac{3}{2} - 2\cos\theta + \tfrac{1}{2}\cos 2\theta = (1 - \cos\theta)^2 \ge 0.$$

The boundary never enters the open left half-plane, so BDF2 is A-stable; since the roots tend to zero as $z \to -\infty$ it is also L-stable. The **second Dahlquist barrier** states that no A-stable linear multistep method has order above 2. BDF3 to BDF6 are **A($\alpha$)-stable** in the wedge $|\arg(-z)| \le \alpha$, $\alpha = 86°, 73°, 51°, 18°$; BDF7 and higher are unstable for every $h$.

### The nonlinear solve inside an implicit step

For nonlinear $y' = f(t, y)$, implicit Euler needs the root of

$$G(y) = y - y_n - hf(t_{n+1}, y) = 0, \qquad G'(y) = I - hJ,$$

with $J = \partial f/\partial y$. Newton's method applies directly, with $y_n$ as predictor. Fixed-point iteration $y \leftarrow y_n + hf(t_{n+1}, y)$ is cheaper but converges only if $h\|J\| < 1$, the very restriction one is escaping; codes reuse one LU factorisation of $I - hJ$ for many steps.

### Local error estimation and adaptive steps

**Embedded Runge–Kutta pairs** compute approximations of orders $q$ and $q + 1$ from shared stages; their difference estimates the local error of the lower-order result. The simplest is Heun with Euler embedded:

$$k_1 = f(t_n, y_n), \quad k_2 = f(t_n + h, y_n + hk_1), \quad y^{[1]} = y_n + hk_1, \quad y^{[2]} = y_n + \tfrac{h}{2}(k_1 + k_2),$$

$$\text{err} = \|y^{[2]} - y^{[1]}\| = \tfrac{h}{2}\|k_2 - k_1\|.$$

Since the order-$q$ local error scales as $Ch^{q+1}$, the step that just meets a tolerance satisfies $\text{tol}/\text{err} = (h_{\text{new}}/h)^{q+1}$, giving the **step-size controller**

$$h_{\text{new}} = 0.9\,h\left(\frac{\text{tol}}{\text{err}}\right)^{1/(q+1)},$$

with safety factor $0.9$ and the ratio clipped to $[0.2, 5]$. If $\text{err} > \text{tol}$ the step is rejected and repeated; otherwise the higher-order $y^{[2]}$ is propagated. The Dormand–Prince 5(4) pair behind `scipy.integrate.solve_ivp(method="RK45")` uses seven stages and $q = 4$; its `BDF` option combines error control with Newton iteration.

The script integrates the stiff system at $h = 0.1$ by explicit and implicit Euler, then runs the adaptive pair on $y' = -2ty$. Expect the explicit component to grow like $99^n$, the implicit one to track $2e^{-t}$, and the adaptive steps to lengthen once the Gaussian has decayed.

```python
import numpy as np

A = np.array([[998.0, 1998.0], [-999.0, -1999.0]])   # eigenvalues -1 and -1000
h, I, y_ex, y_im = 0.1, np.eye(2), np.array([1.0, 0.0]), np.array([1.0, 0.0])
for n in range(1, 21):
    y_ex = y_ex + h * A @ y_ex                        # explicit Euler: h*1000 > 2, unstable
    y_im = np.linalg.solve(I - h * A, y_im)           # implicit Euler: R(z) = 1/(1 - z)
print(f"t=2: explicit {y_ex[0]:.3e}  implicit {y_im[0]:.5f}  exact {2*np.exp(-2.0):.5f}")

f = lambda t, y: -2 * t * y
t, y, h, tol, steps = 0.0, 1.0, 0.5, 1e-4, 0
while t < 3.0:
    h = min(h, 3.0 - t)
    k1 = f(t, y); k2 = f(t + h, y + h * k1)
    err = 0.5 * h * abs(k2 - k1)                      # estimate of Euler's local error
    if err <= tol:                                    # accept: propagate Heun's value
        t, y, steps = t + h, y + 0.5 * h * (k1 + k2), steps + 1
    h *= min(5.0, max(0.2, 0.9 * (tol / max(err, 1e-300)) ** 0.5))   # q = 1
print(f"y(3) = {y:.6e}, exact {np.exp(-9):.6e}, {steps} accepted steps")
```

## Key Ideas

- **Stiffness**: the stability limit $h < 2/|\lambda_{\max}|$ of explicit Euler is far below what accuracy would allow.
- **A-stability**: the region contains the left half-plane; implicit Euler, the trapezoidal rule and BDF2 are A-stable.
- **L-stability** adds $R(-\infty) = 0$; implicit Euler and BDF2 have it, the trapezoidal rule does not.
- **Dahlquist's second barrier**: no A-stable linear multistep method exceeds order 2; BDF3–6 are A($\alpha$)-stable.
- **Embedded pairs** give a free local error estimate; the controller $h_{\text{new}} = 0.9h(\text{tol}/\text{err})^{1/(q+1)}$ accepts or rejects each step.

## Worked Examples

### Example 1 — Three methods at a stiff step

For the system with eigenvalues $-1$ and $-1000$, find the per-step amplification of each mode under explicit Euler, implicit Euler and the trapezoidal rule at $h = 0.1$.

**Solution.** The exact factors are $e^{-0.1} = 0.9048$ and $e^{-100} \approx 4 \times 10^{-44}$. With $z_1 = -0.1$ and $z_2 = -100$:

| Method | Slow mode $R(-0.1)$ | Fast mode $R(-100)$ |
|---|---|---|
| Explicit Euler | $0.9$ | $-99$ |
| Implicit Euler | $1/1.1 = 0.9091$ | $1/101 = 0.0099$ |
| Trapezoidal | $0.95/1.05 = 0.9048$ | $-49/51 = -0.9608$ |

Explicit Euler multiplies the fast mode by $-99$ per step, a factor $9.5 \times 10^{9}$ after five steps. Implicit Euler kills the fast mode in one step and is 0.5% high on the slow one. The trapezoidal rule reproduces the slow factor to four digits but leaves the fast mode alternating at 96% amplitude for about fifty steps. BDF2 would be the method of choice here.

### Example 2 — Order of BDF2

Show that $y_{n+1} - \tfrac{4}{3}y_n + \tfrac{1}{3}y_{n-1} - \tfrac{2}{3}hy'_{n+1} = O(h^3)$ for a smooth solution.

**Solution.** Expand about $t_{n+1}$: $y_n = y - hy' + \tfrac{1}{2}h^2y'' - \tfrac{1}{6}h^3y''' + \ldots$ and $y_{n-1} = y - 2hy' + 2h^2y'' - \tfrac{4}{3}h^3y''' + \ldots$. The coefficients are: constant $1 - \tfrac{4}{3} + \tfrac{1}{3} = 0$; $hy'$: $\tfrac{4}{3} - \tfrac{2}{3} - \tfrac{2}{3} = 0$; $h^2y''$: $-\tfrac{2}{3} + \tfrac{2}{3} = 0$; $h^3y'''$: $\tfrac{2}{9} - \tfrac{4}{9} = -\tfrac{2}{9}$. The residual is $-\tfrac{2}{9}h^3y''' + O(h^4)$, so the global order is 2.

### Example 3 — One adaptive step

Apply the Heun–Euler pair to $y' = -2ty$, $y(0) = 1$, with $h = 0.5$ and tol $= 10^{-3}$.

**Solution.** $k_1 = f(0, 1) = 0$, $k_2 = f(0.5, 1) = -1$, so $y^{[1]} = 1$, $y^{[2]} = 0.75$ and $\text{err} = 0.25$ (Euler's true local error is $e^{-0.25} - 1 = -0.221$, so the estimate is faithful). The step is rejected and

$$h_{\text{new}} = 0.9 \times 0.5 \times \left(\frac{10^{-3}}{0.25}\right)^{1/2} = 0.45 \times 0.0632 = 0.0285.$$

Retrying: $k_1 = 0$, $k_2 = -0.0570$, $\text{err} = 8.1 \times 10^{-4} < 10^{-3}$. The step is accepted with $y^{[2]} = 1 - 8.1 \times 10^{-4} = 0.99919$, matching $e^{-0.0285^2} = 0.99919$, and steps lengthen once $|y''|$ falls.

## Common Misconceptions

- **"Stiffness means the problem has large eigenvalues."** It is about disparate scales: $y' = -1000y$ alone is not stiff on $t < 0.01$; the coexistence of a fast mode with a slow mode one wants forces the stability limit.
- **"A convergent method is safe for any step size."** Convergence concerns $h \to 0$; at finite $h$ explicit Euler on a stiff problem produces exponentially growing garbage.
- **"Implicit methods are more accurate."** They are more stable: implicit Euler is first order like explicit Euler, but its step may be chosen by accuracy rather than stability.
- **"A-stable means the fast modes are handled correctly."** The trapezoidal rule is A-stable yet leaves stiff modes ringing; correct treatment needs L-stability.

## Connections

- The discretised heat equation (Mathematics Lab using Python II, Lesson m1-l4) has eigenvalues down to $-4/\Delta x^2$; the FTCS limit $\Delta t \le \Delta x^2/2$ is $h|\lambda_{\max}| \le 2$ and Crank–Nicolson is the trapezoidal rule (Lesson m3-l1).
- Chemical kinetics and nuclear reaction networks in stellar interiors (Astrophysics II) are the classic stiff problems for which Gear's BDF codes were written.
- Oscillatory problems in Introduction to Quantum Mechanics have imaginary eigenvalues; there one wants $|R(iy)| = 1$, which the trapezoidal rule gives exactly.
- Orbit integration through close encounters in Astrophysics relies on high-order embedded pairs.

## Quick Check

1. Derive the stability function of the implicit midpoint rule and show it is A-stable.
2. For eigenvalues $-2$ and $-500$, what is the largest stable step for explicit Euler, and for classical RK4?
3. Distinguish A-stability from L-stability and give one method of each kind.
4. State the second Dahlquist barrier and explain why BDF3 is still used.
5. A 4(5) pair returns $\text{err} = 8 \times 10^{-6}$ at $h = 0.05$ with tol $= 10^{-6}$. Is the step accepted, and what step is tried next?

## Takeaway

- Stiffness forces explicit methods to take steps set by the fastest mode, through $|R(h\lambda)| \le 1$ for every eigenvalue.
- Implicit Euler, the trapezoidal rule and BDF2 are A-stable; the first and last are also L-stable, while the trapezoidal rule leaves very stiff modes ringing.
- No A-stable linear multistep method has order above 2 (Dahlquist).
- Embedded pairs estimate the local error for free, and $h_{\text{new}} = 0.9h(\text{tol}/\text{err})^{1/(q+1)}$ makes the error the quantity the user specifies.
