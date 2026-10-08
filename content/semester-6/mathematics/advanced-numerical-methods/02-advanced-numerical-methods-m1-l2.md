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
lessonId: advanced-numerical-methods-m1-l2
lessonName: Newton's Method for Systems, Quasi-Newton Updates and Continuation
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 2
prerequisites:
  - advanced-numerical-methods-m1-l1
  - numerical-methods-m1-l1
  - numerical-methods-m3-l1
learningObjectives:
  - Derive Newton's method for a system $F(x) = 0$ from the multivariate Taylor expansion and implement it with an LU solve of the Jacobian system at each step.
  - State the conditions for local quadratic convergence and explain the roles of a nonsingular Jacobian and a good starting point.
  - Derive Broyden's rank-one update from the secant condition and compare its cost and convergence rate with Newton's method.
  - Formulate a homotopy or natural-parameter continuation scheme with a tangent predictor and a Newton corrector.
concepts:
  - Newton's method for systems
  - Jacobian matrix
  - Quadratic convergence
  - Secant condition
  - Broyden's method
  - Damped Newton iteration
  - Continuation method
tags:
  - mathematics
  - advanced-numerical-methods
  - nonlinear-systems
  - quasi-newton
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Newton's Method for Systems, Quasi-Newton Updates and Continuation

## Overview

Most physical problems are systems: equilibria, steady states of reaction networks, implicit steps of stiff integrators and self-consistent fields all reduce to $F(x) = 0$, $F: \mathbb{R}^n \to \mathbb{R}^n$. This lesson extends Newton's method to systems, with a Jacobian solve per step, and proves quadratic convergence from a good start. Broyden's rank-one secant update trades this for superlinear convergence at far lower cost, and damping and continuation address the need for a good initial guess. The implicit ODE solvers of the next lesson call these algorithms at every step.

## Learning Path

- **What you should already know**: Newton–Raphson in one variable (Numerical Methods, Lesson m1-l1); LU factorisation and its cost (Numerical Methods, Lesson m3-l1); condition numbers and backward error (Lesson m1-l1).
- **What this lesson adds**: the Newton step and its convergence theorem; finite-difference Jacobians; Broyden's update; damping; continuation.
- **What later lessons this will unlock**: the nonlinear solve inside implicit stiff integrators (Lesson m1-l3); the Newton-like structure of Rayleigh quotient iteration (Lesson m2-l1); Newton and BFGS for optimisation, where the Jacobian becomes the Hessian (Lesson m3-l3).

## Core Explanation

### From Taylor expansion to the Newton step

For continuously differentiable $F: \mathbb{R}^n \to \mathbb{R}^n$ the **Jacobian matrix** is

$$J(x) = \begin{pmatrix} \partial F_1/\partial x_1 & \cdots & \partial F_1/\partial x_n \\ \vdots & & \vdots \\ \partial F_n/\partial x_1 & \cdots & \partial F_n/\partial x_n \end{pmatrix},$$

and Taylor expansion about the iterate $x_k$ gives

$$F(x_k + s) = F(x_k) + J(x_k)\,s + O(\|s\|^2).$$

Newton's method drops the remainder and makes the linear model vanish:

$$J(x_k)\,s_k = -F(x_k), \qquad x_{k+1} = x_k + s_k.$$

Each iteration forms $J$ and solves by LU with partial pivoting, $\tfrac{2}{3}n^3$ flops; never form $J^{-1}$.

Without analytic derivatives, the Jacobian is built column by column,

$$J_{:,j} \approx \frac{F(x + h e_j) - F(x)}{h}, \qquad h \approx \sqrt{u}\,\max(|x_j|, 1),$$

at $n$ extra evaluations per step; $h \sim \sqrt{u} \approx 10^{-8}$ balances truncation $O(h)$ against rounding $O(u/h)$, as in Lesson m1-l1.

### Local convergence theorem

**Theorem (local quadratic convergence).** Suppose $F(x^*) = 0$, $J$ is Lipschitz near $x^*$ with constant $L$, and $J(x^*)$ is nonsingular with $\|J(x^*)^{-1}\| \le \beta$. Then there is $r > 0$ such that for $\|x_0 - x^*\| < r$ the iterates are well defined, converge to $x^*$, and satisfy

$$\|x_{k+1} - x^*\| \le \beta L\,\|x_k - x^*\|^2.$$

The proof subtracts $x^*$ from the update and uses $F(x^*) = 0$:

$$x_{k+1} - x^* = x_k - x^* - J(x_k)^{-1}\big(F(x_k) - F(x^*)\big) = J(x_k)^{-1}\Big[J(x_k)(x_k - x^*) - \int_0^1 J\big(x^* + t(x_k - x^*)\big)(x_k - x^*)\,dt\Big],$$

and the Lipschitz bound on the integrand gives $\tfrac{1}{2}L\|x_k - x^*\|^2$, absorbed into the constant. Each hypothesis matters: a singular Jacobian at the root makes convergence linear, a Lipschitz failure can destroy it, and $r$ may be tiny. For $\arctan x$, Newton from $x_0 = 1.5$ gives $-1.69$, $2.32$, $-5.11$, $32.3$, diverging as the tangent overshoots.

In the quadratic phase correct digits double each step (Example 1). Below the noise floor $\sim u\,\|F'\|\,\|x\|$ no progress is possible, so stopping tests compare $\|F(x_k)\|$ or $\|s_k\|$ with a tolerance of that order.

### Damped Newton and the merit function

Far from the root the full step may increase $\|F\|$. **Damped Newton** sets $x_{k+1} = x_k + \alpha_ks_k$, $0 < \alpha_k \le 1$, requiring sufficient decrease of the **merit function** $\phi(x) = \tfrac{1}{2}\|F(x)\|_2^2$:

$$\phi(x_k + \alpha_k s_k) \le (1 - 2c\,\alpha_k)\,\phi(x_k), \qquad c \in (0, \tfrac{1}{2}).$$

The Newton direction always descends, since $\nabla\phi = J^\mathsf{T}F$ and $\nabla\phi \cdot s = -F^\mathsf{T}J J^{-1}F = -2\phi < 0$. Backtracking halves $\alpha$ from 1 until the test holds; near the root the full step returns. Damping converges globally to a stationary point of $\phi$, not necessarily a root: minima of $\|F\|$ with singular $J$ are the failure mode.

### Broyden's quasi-Newton method

Broyden keeps an approximation $B_k \approx J(x_k)$ and updates it cheaply. With $s_k = x_{k+1} - x_k$ and $y_k = F(x_{k+1}) - F(x_k)$, the mean-value theorem gives $y_k \approx J\,s_k$, so we impose the **secant condition**

$$B_{k+1} s_k = y_k,$$

which fixes only $n$ of $n^2$ entries. Taking $B_{k+1}$ closest to $B_k$ in the Frobenius norm, unchanged orthogonal to $s_k$, gives the rank-one update

$$B_{k+1} = B_k + \frac{(y_k - B_k s_k)\,s_k^\mathsf{T}}{s_k^\mathsf{T} s_k},$$

and indeed $B_{k+1}s_k = B_k s_k + (y_k - B_k s_k) = y_k$. The iteration solves $B_k s_k = -F(x_k)$ with $B_0 = J(x_0)$ or a finite-difference estimate.

Each step costs one function evaluation plus $O(n^2)$ for the update. Updating $H_k = B_k^{-1}$ instead by Sherman–Morrison,

$$H_{k+1} = H_k + \frac{(s_k - H_k y_k)\,s_k^\mathsf{T} H_k}{s_k^\mathsf{T} H_k y_k},$$

removes the solve too. Convergence is **superlinear**, $\|x_{k+1} - x^*\|/\|x_k - x^*\| \to 0$: six steps where Newton needs four in Example 1, each far cheaper for large $n$. It is the standard inner solver in implicit ODE codes.

### Continuation and homotopy

Without a start inside the basin, embed the problem in a family. **Natural-parameter continuation** advances $\lambda$ in $F(x, \lambda) = 0$ in small steps from a known solution. Differentiating $F(x(\lambda), \lambda) = 0$ gives the **tangent predictor**

$$J\,\frac{dx}{d\lambda} = -\frac{\partial F}{\partial \lambda}, \qquad x^{\text{pred}} = x_j + (\lambda_{j+1} - \lambda_j)\,\frac{dx}{d\lambda}\Big|_{j},$$

followed by Newton correction at fixed $\lambda_{j+1}$. This predictor–corrector structure matches the ODE solvers of the next lesson: continuation integrates the Davidenko equation $dx/d\lambda = -J^{-1}\partial F/\partial\lambda$.

Without a natural parameter, invent one. The **homotopy**

$$H(x, t) = F(x) - (1 - t)\,F(x_0), \qquad t \in [0, 1],$$

is solved by $x_0$ at $t = 0$ and becomes $F(x) = 0$ at $t = 1$; tracking it reaches a root unless the curve turns back. At a **turning point** (fold) $J$ is singular; **pseudo-arclength continuation** parametrises by arclength $s$ and appends $\|dx/ds\|^2 + (d\lambda/ds)^2 = 1$, keeping the augmented Jacobian nonsingular. Bifurcation diagrams are traced this way.

The script solves Example 1 by Newton and Broyden, printing residual histories, then traces $x^3 + x = \lambda$ by continuation.

```python
import numpy as np

def F(v):
    x, y = v
    return np.array([x**2 + y**2 - 4.0, x * y - 1.0])

def J(v):
    x, y = v
    return np.array([[2 * x, 2 * y], [y, x]])

def newton(F, J, x0, tol=1e-12, maxit=50):
    x = np.array(x0, dtype=float); hist = []
    for _ in range(maxit):
        f = F(x); hist.append(np.linalg.norm(f))
        if hist[-1] < tol:
            break
        x = x - np.linalg.solve(J(x), f)          # LU solve, never an explicit inverse
    return x, hist

def broyden(F, B0, x0, tol=1e-12, maxit=100):
    x = np.array(x0, dtype=float); B = B0.copy()
    f = F(x); hist = [np.linalg.norm(f)]
    while hist[-1] >= tol and len(hist) <= maxit:
        s = -np.linalg.solve(B, f)
        x = x + s
        f_new = F(x); y = f_new - f
        B = B + np.outer(y - B @ s, s) / (s @ s)    # rank-one secant update
        f = f_new; hist.append(np.linalg.norm(f))
    return x, hist

x0 = [2.0, 0.5]
xn, hn = newton(F, J, x0)
xb, hb = broyden(F, J(np.array(x0)), x0)
print("Newton ", xn, ["%.1e" % h for h in hn])
print("Broyden", xb, ["%.1e" % h for h in hb])

# natural-parameter continuation for g(x, lam) = x^3 + x - lam = 0, from (x, lam) = (0, 0)
x, lam, dlam = 0.0, 0.0, 0.5
for _ in range(4):
    x_pred = x + dlam / (3 * x**2 + 1)              # tangent predictor: dx/dlam = 1 / g_x
    lam += dlam; x = x_pred
    for _ in range(10):                               # Newton corrector at fixed lam
        x -= (x**3 + x - lam) / (3 * x**2 + 1)
    print(f"lambda = {lam:.1f}  predictor {x_pred:.4f}  corrected {x:.6f}")
```

## Key Ideas

- **Newton step**: solve $J(x_k)s_k = -F(x_k)$ by LU, $O(n^3)$.
- **Quadratic convergence** needs a nonsingular Lipschitz Jacobian and a start inside the basin.
- **Finite-difference Jacobians** use $h \approx \sqrt{u}$ and $n$ extra evaluations.
- **Damping** on $\tfrac{1}{2}\|F\|^2$ gives global convergence to its stationary points.
- **Broyden's update** is the minimal Frobenius-norm change satisfying the secant condition: superlinear convergence at $O(n^2)$ per step.
- **Continuation** uses a tangent predictor and Newton corrector; pseudo-arclength passes turning points.

## Worked Examples

### Example 1 — Two Newton steps on a $2 \times 2$ system

Solve $x^2 + y^2 = 4$, $xy = 1$ starting from $(2, 0.5)$.

**Solution.** $F(x, y) = (x^2 + y^2 - 4,\; xy - 1)^\mathsf{T}$ and $J = \begin{pmatrix} 2x & 2y \\ y & x \end{pmatrix}$. At $(2, 0.5)$: $F_0 = (0.25, 0)^\mathsf{T}$ and $J_0 = \begin{pmatrix} 4 & 1 \\ 0.5 & 2 \end{pmatrix}$ with determinant $7.5$. Solving $J_0 s = -F_0$:

$$s = -\frac{1}{7.5}\begin{pmatrix} 2 & -1 \\ -0.5 & 4 \end{pmatrix}\begin{pmatrix} 0.25 \\ 0 \end{pmatrix} = \begin{pmatrix} -0.066667 \\ 0.016667 \end{pmatrix},$$

so $x_1 = (1.933333, 0.516667)$ with $F_1 = (4.72 \times 10^{-3}, -1.11 \times 10^{-3})^\mathsf{T}$. The second step gives $x_2 = (1.931853, 0.517637)$; the root is $x = \sqrt{2 + \sqrt{3}} = 1.9318517$, $y = \sqrt{2 - \sqrt{3}} = 0.5176381$. Residuals $2.5 \times 10^{-1}, 4.9 \times 10^{-3}, 3.4 \times 10^{-6}, 2.5 \times 10^{-12}$ show the exponent doubling of quadratic convergence; four steps reach machine precision.

### Example 2 — One Broyden update

Using the step of Example 1, compute $B_1$ from $B_0 = J_0$ and compare with the true Jacobian at $x_1$.

**Solution.** $s_0 = (-0.066667, 0.016667)^\mathsf{T}$ and $y_0 = F_1 - F_0 = (-0.245278, -0.001111)^\mathsf{T}$. Since $B_0 s_0 = -F_0 = (-0.25, 0)^\mathsf{T}$, $y_0 - B_0 s_0 = (0.004722, -0.001111)^\mathsf{T}$, and $s_0^\mathsf{T}s_0 = 4.722 \times 10^{-3}$. The update is

$$B_1 = B_0 + \frac{1}{4.722 \times 10^{-3}}\begin{pmatrix} 0.004722 \\ -0.001111 \end{pmatrix}\begin{pmatrix} -0.066667 & 0.016667 \end{pmatrix} = \begin{pmatrix} 3.9333 & 1.0167 \\ 0.5157 & 1.9961 \end{pmatrix},$$

against the exact $J(x_1) = \begin{pmatrix} 3.8667 & 1.0333 \\ 0.5167 & 1.9333 \end{pmatrix}$: correct to 2–3% and exact along $s_0$, all the secant condition promises. The full Broyden run converges in six steps, residuals $2.5 \times 10^{-1}, 4.9 \times 10^{-3}, 1.3 \times 10^{-4}, 7.7 \times 10^{-7}, 1.3 \times 10^{-8}, 2.5 \times 10^{-11}, 6.7 \times 10^{-16}$: superlinear, without exponent doubling.

### Example 3 — Continuation for $x^3 + x = \lambda$

Trace the root of $g(x, \lambda) = x^3 + x - \lambda$ from $\lambda = 0$ to $\lambda = 2$ in steps of $0.5$ with tangent predictor and Newton corrector.

**Solution.** At $\lambda = 0$, $x = 0$, and $dx/d\lambda = 1/g_x = 1/(3x^2 + 1)$. Step 1: predictor $0 + 0.5 \times 1 = 0.5$, corrected to $0.423854$ at $\lambda = 0.5$. Step 2: tangent $1/(3 \times 0.1797 + 1) = 0.6498$, predictor $0.7487$, corrected $0.682328$. Step 3: tangent $1/(3 \times 0.4656 + 1) = 0.4172$, predictor $0.8909$, corrected $0.861224$. Step 4: tangent $1/(3 \times 0.7417 + 1) = 0.3101$, predictor $1.0163$, corrected $1.000000$, the exact root since $1^3 + 1 = 2$. Each predictor lands within $0.07$ of the root. As $g_x > 0$ there is no turning point; for $x^3 - x - \lambda$ the curve folds at $x = \pm 1/\sqrt{3}$ and needs pseudo-arclength.

## Common Misconceptions

- **"Newton's method always converges if the Jacobian is nonsingular."** Only locally. From a poor start iterates diverge or cycle, as $\arctan x$ from $1.5$ shows; damping or continuation is needed.
- **"Compute $J^{-1}$ and multiply."** The inverse costs three times an LU factorisation and is less accurate; solve $Js = -F$.
- **"Broyden converges quadratically because it approximates Newton."** It is superlinear; $B_k$ is exact only along the latest step. The gain is cost per step.
- **"A small step $\|s_k\|$ means convergence."** It may reflect a plateau; check $\|F(x_k)\|$ too.
- **"Continuation just means trying several starting points."** It follows a curve with a derivative-based predictor, so each solve starts inside the basin.

## Connections

- Stellar-structure equations (Astrophysics III — Stars and Stellar Evolution) are solved by the Henyey method, Newton on a banded Jacobian, with continuation in mass or composition generating evolutionary sequences.
- Self-consistent field calculations for multi-electron atoms (Introduction to Quantum Mechanics, Lesson m3-l3) are fixed-point iterations often accelerated by Broyden-type (Pulay or DIIS) mixing.
- The Jacobian at an equilibrium classifies its stability through its eigenvalues, as in Linear Algebra (Lesson m3-l1).
- Circuit simulators such as SPICE use damped Newton with continuation in supply voltage (source stepping).
- Pseudo-arclength continuation of a driven pendulum or laser rate equation extends the forced oscillations of Differential Equations (Lesson m2-l3) into the nonlinear regime.

## Quick Check

1. Write out the Newton step for $F(x, y) = (e^x + y - 1,\; x^2 + y^2 - 1)$ including the Jacobian.
2. State the hypotheses of the local convergence theorem and what happens if the Jacobian is singular at the root.
3. Show by substitution that Broyden's update satisfies $B_{k+1}s_k = y_k$.
4. Why is the Newton direction always a descent direction for $\tfrac{1}{2}\|F\|^2$?
5. What is a turning point, and why does natural-parameter continuation fail there?

## Takeaway

- Newton's method solves $Js = -F$ each step and converges quadratically near a root with nonsingular Jacobian.
- The Jacobian dominates the cost; finite differences supply it at $n$ extra evaluations.
- Broyden's secant update cuts the cost to $O(n^2)$ per step for superlinear convergence.
- Damping guards against overshoot; continuation supplies good starting points.
- These solvers drive implicit ODE methods and optimisation.
