***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: advanced-numerical-methods
courseName: Advanced Numerical Methods (Math Elective I, A)
moduleId: advanced-numerical-methods-module-3
moduleName: Partial Differential Equations and Optimisation
lessonId: advanced-numerical-methods-m3-l3
lessonName: Optimisation: Line Search, Newton, BFGS, Nonlinear Least Squares and KKT Conditions
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - advanced-numerical-methods-m3-l2
  - advanced-numerical-methods-m1-l2
  - advanced-numerical-methods-m2-l2
learningObjectives:
  - Implement gradient descent with an Armijo backtracking line search and derive its $\big((\kappa - 1)/(\kappa + 1)\big)^2$ rate on quadratics.
  - Derive Newton's method and the BFGS update for minimisation and compare their convergence and cost.
  - Solve nonlinear least-squares problems by Gauss–Newton and Levenberg–Marquardt, explaining the role of the damping parameter.
  - State the KKT conditions for a constrained problem and interpret the multipliers.
concepts:
  - Armijo backtracking line search
  - Steepest descent
  - Newton's method for minimisation
  - BFGS update
  - Gauss–Newton method
  - Levenberg–Marquardt method
  - Karush–Kuhn–Tucker conditions
tags:
  - mathematics
  - advanced-numerical-methods
  - optimisation
  - nonlinear-least-squares
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Optimisation: Line Search, Newton, BFGS, Nonlinear Least Squares and KKT Conditions

## Overview

Lesson m3-l2 solved $Ax = b$ by minimising a quadratic energy; here $f: \mathbb{R}^n \to \mathbb{R}$ is general. Each method picks a descent direction and a step: steepest descent crawls when the Hessian is ill-conditioned; Newton's method is Lesson m1-l2's iteration applied to $\nabla f = 0$; BFGS builds a Hessian from gradients, as Broyden did for Jacobians. Data fitting gives nonlinear least squares, solved by Gauss–Newton and Levenberg–Marquardt, and the KKT conditions sketch constrained problems.

## Learning Path

- **What you should already know**: Newton's method, Broyden's secant update and backtracking (Lesson m1-l2); QR factorisation (Lesson m2-l2); steepest descent and conjugate gradients as energy minimisation (Lesson m3-l2).
- **What this lesson adds**: Armijo and Wolfe line searches; the steepest-descent rate; Newton and BFGS; Gauss–Newton and Levenberg–Marquardt; the KKT conditions.
- **What later lessons this will unlock**: parameter fitting in the laboratory courses and linear programming in Operations Research (Math Elective I, C).

## Core Explanation

### Optimality and descent

At a local minimiser $x^*$ of smooth $f$, $\nabla f(x^*) = 0$ and the Hessian $\nabla^2f(x^*)$ is positive semidefinite; $\nabla f = 0$ with $\nabla^2f$ positive definite is sufficient. A direction $p$ is a **descent direction** at $x$ if $g^\mathsf{T}p < 0$, $g = \nabla f(x)$, since then $f(x + \alpha p) = f(x) + \alpha g^\mathsf{T}p + O(\alpha^2)$ decreases for small $\alpha$. Line-search methods iterate $x_{k+1} = x_k + \alpha_kp_k$.

### Line search and steepest descent

Exact minimisation along $p$ is wasteful. The **Armijo condition** asks for sufficient decrease,

$$f(x + \alpha p) \le f(x) + c_1\alpha\,g^\mathsf{T}p, \qquad c_1 = 10^{-4},$$

and **backtracking** halves $\alpha$ from 1 until it holds, which must happen because the right side has slope $c_1g^\mathsf{T}p > g^\mathsf{T}p$. The **Wolfe curvature condition** $\nabla f(x + \alpha p)^\mathsf{T}p \ge c_2g^\mathsf{T}p$, $c_2 = 0.9$, also rules out tiny steps.

**Steepest descent** takes $p = -g$. On a quadratic $f = \tfrac{1}{2}x^\mathsf{T}Ax$ with exact line search, $\alpha = g^\mathsf{T}g/g^\mathsf{T}Ag$ and Kantorovich's inequality gives

$$f(x_{k+1}) - f^* \le \left(\frac{\kappa - 1}{\kappa + 1}\right)^2\big(f(x_k) - f^*\big), \qquad \kappa = \frac{\lambda_{\max}}{\lambda_{\min}},$$

the square of the $A$-norm factor of Lesson m3-l2. Successive gradients are orthogonal, so the path zigzags across the valley and the iteration count grows like $\kappa$, that of the Hessian for general $f$.

### Newton's method

Minimising the quadratic model $f(x_k) + g_k^\mathsf{T}p + \tfrac{1}{2}p^\mathsf{T}H_kp$, with $H_k = \nabla^2f(x_k)$, gives

$$H_kp_k = -g_k,$$

exactly Newton's method of Lesson m1-l2 for $F = \nabla f$, whose Jacobian is the Hessian. Near a minimiser with positive definite Hessian it converges quadratically and is affine invariant, so $\kappa$ no longer matters. Far away $H_k$ may be indefinite; then one uses $-g_k$ or solves $(H_k + \tau I)p = -g_k$ with $\tau$ large enough. Each step needs second derivatives and an $O(n^3)$ Cholesky solve.

### The BFGS quasi-Newton method

With $s_k = x_{k+1} - x_k$ and $y_k = g_{k+1} - g_k$, the **secant condition** $B_{k+1}s_k = y_k$ asks the Hessian approximation to reproduce the observed gradient change; unlike Broyden's, it must stay symmetric positive definite so that $p = -B^{-1}g$ descends. The **BFGS** rank-two update

$$B_{k+1} = B_k - \frac{B_ks_ks_k^\mathsf{T}B_k}{s_k^\mathsf{T}B_ks_k} + \frac{y_ky_k^\mathsf{T}}{y_k^\mathsf{T}s_k}$$

satisfies it, since $B_{k+1}s_k = B_ks_k - B_ks_k + y_k$, and preserves positive definiteness exactly when the **curvature condition** $y_k^\mathsf{T}s_k > 0$ holds, which the Wolfe condition guarantees. In practice one updates $H_k = B_k^{-1}$ directly, with $\rho_k = 1/y_k^\mathsf{T}s_k$,

$$H_{k+1} = (I - \rho_ks_ky_k^\mathsf{T})H_k(I - \rho_ky_ks_k^\mathsf{T}) + \rho_ks_ks_k^\mathsf{T},$$

costing $O(n^2)$ per step without second derivatives. Convergence is superlinear, and with exact line searches on a quadratic BFGS terminates in $n$ steps. **L-BFGS** keeps only recent pairs $(s_k, y_k)$, using $O(n)$ memory.

### Nonlinear least squares: Gauss–Newton and Levenberg–Marquardt

Fitting a model with parameters $x$ to $m$ data minimises $f(x) = \tfrac{1}{2}\|r(x)\|^2$, $r_i = \text{model}_i(x) - y_i$. With $J$ the $m \times n$ Jacobian of $r$,

$$\nabla f = J^\mathsf{T}r, \qquad \nabla^2f = J^\mathsf{T}J + \sum_i r_i\nabla^2r_i.$$

**Gauss–Newton** drops the second term, small for small residuals, and solves $J^\mathsf{T}Jp = -J^\mathsf{T}r$; better, it solves the linear least-squares problem $\min_p\|Jp + r\|$ by Householder QR (Lesson m2-l2), since $\kappa(J^\mathsf{T}J) = \kappa(J)^2$ (Lesson m1-l1). It converges quadratically for zero-residual problems, linearly otherwise, and can diverge from a poor start. **Levenberg–Marquardt** damps the step:

$$(J^\mathsf{T}J + \mu I)\,p = -J^\mathsf{T}r.$$

As $\mu \to 0$ this is Gauss–Newton; for large $\mu$, $p \approx -\nabla f/\mu$, a short steepest-descent step. A step that lowers $f$ is accepted and $\mu$ reduced; otherwise it is rejected and $\mu$ increased. The system is the least-squares problem with $J$ stacked on $\sqrt{\mu}I$ and $-r$ on $0$.

### Constrained optimisation and the KKT conditions

For $\min f(x)$ subject to $c_i(x) = 0$ and $h_j(x) \le 0$, form the Lagrangian $\mathcal{L} = f + \sum_i\lambda_ic_i + \sum_j\mu_jh_j$. Under a constraint qualification (for example, linearly independent active-constraint gradients), a local minimiser satisfies the **Karush–Kuhn–Tucker conditions**: stationarity $\nabla f + \sum\lambda_i\nabla c_i + \sum\mu_j\nabla h_j = 0$; feasibility; $\mu_j \ge 0$; and **complementary slackness** $\mu_jh_j = 0$, so inactive constraints carry no multiplier. Each multiplier is the sensitivity of the optimum to its constraint. For $\min x^2 + y^2$ subject to $x + y \ge 2$, write $h = 2 - x - y \le 0$; stationarity $2x - \mu = 2y - \mu = 0$ with the constraint active gives $x = y = 1$, $\mu = 2 \ge 0$, and indeed $f^* = c^2/2$ for $x + y \ge c$ has $df^*/dc = 2$ at $c = 2$. Penalty and barrier methods add $\tfrac{\sigma}{2}\|c\|^2$ or $-\sigma\sum\ln(-h_j)$ to $f$; sequential quadratic programming applies Newton's method to the KKT system.

The script compares descent methods on the Rosenbrock function $f = (1 - x)^2 + 100(y - x^2)^2$ from $(-1.2, 1)$, then fits $a e^{-kt}$ to nine points by Levenberg–Marquardt from $(a, k) = (1, 2)$.

```python
import numpy as np

f = lambda x: (1 - x[0])**2 + 100 * (x[1] - x[0]**2)**2
grad = lambda x: np.array([-2 * (1 - x[0]) - 400 * x[0] * (x[1] - x[0]**2), 200 * (x[1] - x[0]**2)])
hess = lambda x: np.array([[2 - 400 * (x[1] - x[0]**2) + 800 * x[0]**2, -400 * x[0]], [-400 * x[0], 200.0]])

def minimise(x0, method, tol=1e-6, maxit=50_000):
    x = np.array(x0, float); H = np.eye(2)            # H: BFGS inverse-Hessian estimate
    for k in range(maxit):
        g = grad(x)
        if np.linalg.norm(g) < tol: return x, k
        if method == "newton":
            p = np.linalg.solve(hess(x), -g)
            if g @ p >= 0: p = -g                     # Hessian indefinite: fall back
        else:
            p = -g if method == "gd" else -H @ g
        a = 1.0
        while f(x + a * p) > f(x) + 1e-4 * a * (g @ p): a /= 2   # Armijo backtracking
        s = a * p; y = grad(x + s) - g
        if method == "bfgs" and y @ s > 1e-12:        # update only if curvature condition holds
            rho = 1 / (y @ s); V = np.eye(2) - rho * np.outer(y, s)
            H = V.T @ H @ V + rho * np.outer(s, s)
        x = x + s
    return x, maxit

for m in ("gd", "newton", "bfgs"):
    print(m, *minimise([-1.2, 1.0], m))

t = np.linspace(0, 4, 9); data = 2 * np.exp(-0.7 * t) + 0.01 * (-1.0)**np.arange(9)
res = lambda q: q[0] * np.exp(-q[1] * t) - data
jac = lambda q: np.column_stack([np.exp(-q[1] * t), -q[0] * t * np.exp(-q[1] * t)])

def lm(q, mu=1e-2, tol=1e-10, maxit=100):
    for k in range(maxit):
        r, J = res(q), jac(q)                         # (J^T J + mu I) p = -J^T r via least squares
        p = np.linalg.lstsq(np.vstack([J, np.sqrt(mu) * np.eye(2)]),
                            np.concatenate([-r, np.zeros(2)]), rcond=None)[0]
        if np.linalg.norm(p) < tol: break
        if np.sum(res(q + p)**2) < np.sum(r**2): q, mu = q + p, mu / 3
        else: mu *= 2
    return q, k

print("LM", *lm(np.array([1.0, 2.0])))
```

Expect gradient descent to need about 13,800 iterations, Newton 21 and BFGS 34 to reach $\|\nabla f\| < 10^{-6}$; LM rejects four steps while $\mu$ grows, then reaches $(a, k) = (2.0048, 0.7017)$ in ten iterations, whereas undamped Gauss–Newton diverges from the same start.

## Key Ideas

- **Line search**: backtrack until Armijo holds; add Wolfe for quasi-Newton methods.
- **Steepest descent** reduces $f - f^*$ by up to $\big((\kappa - 1)/(\kappa + 1)\big)^2$ per step.
- **Newton** solves $Hp = -g$, converges quadratically near a minimiser, and needs a safeguard when $H$ is indefinite.
- **BFGS** keeps a positive definite secant approximation via a rank-two update, at $O(n^2)$ per step and superlinear convergence.
- **Gauss–Newton** approximates the Hessian by $J^\mathsf{T}J$; **Levenberg–Marquardt** adds $\mu I$ to interpolate towards gradient descent.
- **KKT**: stationarity of the Lagrangian, feasibility, $\mu_j \ge 0$ and complementary slackness.

## Worked Examples

### Example 1 — Steepest descent versus Newton on an elongated quadratic

Minimise $f = \tfrac{1}{2}(x^2 + 10y^2)$ from $(10, 1)$ by steepest descent with exact line search, and by Newton.

**Solution.** Here $A = \text{diag}(1, 10)$, $\kappa = 10$. At $(10, 1)$, $g = (10, 10)$, $g^\mathsf{T}g = 200$, $g^\mathsf{T}Ag = 1100$, so $\alpha = 2/11$ and $x_1 = (10 - \tfrac{20}{11}, 1 - \tfrac{20}{11}) = \tfrac{9}{11}(10, -1)$. Then $f$ falls from $55$ to $\tfrac{81}{121} \times 55 = 36.82$, a factor $(9/11)^2 = \big((\kappa - 1)/(\kappa + 1)\big)^2$, the worst case. By symmetry $x_2 = (\tfrac{9}{11})^2(10, 1)$: a zigzag. Reducing $f$ by $10^{-6}$ needs $\ln 10^6/\ln(121/81) = 13.82/0.4013 \approx 35$ steps. Newton gives $p = -A^{-1}g = -(10, 1)$ and lands on the minimiser $(0, 0)$ in one step.

### Example 2 — One BFGS update

Starting with $B_0 = I$, take the first step of Example 1 and compute $B_1$.

**Solution.** With $B_0 = I$ the first step is the steepest-descent step, $s_0 = -\tfrac{20}{11}(1, 1)$, and $y_0 = As_0 = -\tfrac{20}{11}(1, 10)$. Then $y_0^\mathsf{T}s_0 = \tfrac{400}{121} \times 11 = 36.36 > 0$, $s_0s_0^\mathsf{T}/s_0^\mathsf{T}s_0 = \tfrac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ and $y_0y_0^\mathsf{T}/y_0^\mathsf{T}s_0 = \tfrac{1}{11}\begin{pmatrix} 1 & 10 \\ 10 & 100 \end{pmatrix}$, so

$$B_1 = \begin{pmatrix} 13/22 & 9/22 \\ 9/22 & 211/22 \end{pmatrix} = \begin{pmatrix} 0.591 & 0.409 \\ 0.409 & 9.591 \end{pmatrix}.$$

Check: $B_1(1, 1)^\mathsf{T} = (1, 10)^\mathsf{T}$, so $B_1s_0 = y_0$, and $\det B_1 = 5.5 > 0$ with positive diagonal, so $B_1$ is positive definite. At $x_1 = \tfrac{9}{11}(10, -1)$, $g_1 = \tfrac{90}{11}(1, -1)$ and $B_1^{-1}g_1 = \tfrac{90}{60.5}(10, -1)$, so the second direction points straight at the origin: BFGS finishes in $n = 2$ steps.

### Example 3 — A Gauss–Newton step for exponential decay

Fit $ae^{-kt}$ to $(0, 2), (1, 1), (2, 0.5)$ from $(a, k) = (2, 0.5)$.

**Solution.** The model gives $(2, 1.213061, 0.735759)$, so $r = (0, 0.213061, 0.235759)$ and $f = 0.050489$. The Jacobian columns are $e^{-kt} = (1, 0.606531, 0.367879)$ and $-ate^{-kt} = (0, -1.213061, -1.471518)$, giving

$$J^\mathsf{T}J = \begin{pmatrix} 1.503215 & -1.277100 \\ -1.277100 & 3.636882 \end{pmatrix}, \qquad J^\mathsf{T}r = \begin{pmatrix} 0.215959 \\ -0.605380 \end{pmatrix}.$$

The determinant is $3.836031$, and solving gives $p = (-0.003203, 0.165331)$, so $(a, k) = (1.996797, 0.665331)$. The exact fit is $(2, \ln 2)$ with zero residual; the errors in $k$ over successive steps are $1.93 \times 10^{-1}$, $2.78 \times 10^{-2}$, $5.51 \times 10^{-4}$, $2.21 \times 10^{-7}$, $3.6 \times 10^{-14}$, quadratic convergence as expected for a zero-residual problem.

## Common Misconceptions

- **"The negative gradient is the best direction."** Only for an infinitesimal Euclidean step; at $\kappa = 10$ it already zigzags.
- **"Newton's method always goes downhill."** Only with a positive definite Hessian; otherwise it can head for a saddle or maximum.
- **"BFGS approximates the Hessian accurately."** Only along recent steps; superlinear convergence needs no more.
- **"Gauss–Newton is Newton's method."** It drops $\sum r_i\nabla^2r_i$, so it is only linearly convergent on large-residual problems.
- **"A zero multiplier means the constraint is irrelevant."** It is merely inactive at the optimum; moving its bound can activate it.

## Connections

- Mathematics Lab using Python III (Lesson m1-l4) applies these methods with `scipy.optimize.minimize` and `least_squares` to physical data.
- Operations Research (Math Elective I, C) develops linear programming, where KKT conditions become LP duality and complementary slackness.
- Fitting decay curves in Nuclear Physics Lab or line profiles in Atomic and Molecular Physics Lab is nonlinear least squares.
- Mathematics Lab using Python III (Lesson m1-l1) solves linear least squares by the SVD; Gauss–Newton solves a sequence of such problems.

## Quick Check

1. Show that backtracking terminates whenever $g^\mathsf{T}p < 0$.
2. Derive $\alpha = g^\mathsf{T}g/g^\mathsf{T}Ag$ for steepest descent on $\tfrac{1}{2}x^\mathsf{T}Ax$.
3. Verify that the BFGS update satisfies the secant condition and explain why $y^\mathsf{T}s > 0$ is required.
4. Write the Gauss–Newton step for fitting $a\sin(\omega t)$ and state when it converges quadratically.
5. Solve $\min x + y$ subject to $x^2 + y^2 \le 2$ by the KKT conditions and interpret the multiplier.

## Takeaway

- Line-search methods choose a descent direction and an Armijo step; steepest descent costs $O(\kappa)$ iterations.
- Newton's method converges quadratically using the Hessian; BFGS gets superlinear convergence from gradients alone.
- Nonlinear least squares uses $J^\mathsf{T}J$: Gauss–Newton is fast near a good fit, Levenberg–Marquardt is robust far from it.
- KKT conditions extend $\nabla f = 0$ to constraints, with multipliers measuring sensitivities.
- As in Lesson m1-l1, conditioning decides which algorithm to trust.
