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
lessonId: advanced-numerical-methods-m3-l2
lessonName: Iterative Solvers for Sparse Systems: Jacobi, Gauss–Seidel, SOR and Conjugate Gradients
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - advanced-numerical-methods-m3-l1
  - advanced-numerical-methods-m2-l3
  - numerical-methods-m3-l2
learningObjectives:
  - Prove that a stationary iteration converges from every start if and only if $\rho(T) < 1$, and turn a spectral radius into an iteration count.
  - Derive the Jacobi, Gauss–Seidel and SOR spectral radii for the five-point Laplacian, including $\omega_{\text{opt}} = 2/(1 + \sin\pi h)$.
  - Derive conjugate gradients as energy minimisation over Krylov subspaces and state its Chebyshev bound.
  - Compare the cost of the four methods as the grid is refined.
concepts:
  - Spectral radius of an iteration matrix
  - Jacobi iteration
  - Gauss–Seidel iteration
  - Successive over-relaxation
  - Optimal relaxation parameter
  - Conjugate gradient method
  - Chebyshev convergence bound
tags:
  - mathematics
  - advanced-numerical-methods
  - iterative-solvers
  - conjugate-gradient
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Iterative Solvers for Sparse Systems: Jacobi, Gauss–Seidel, SOR and Conjugate Gradients

## Overview

The five-point Laplacian of Lesson m3-l1 has $N^2$ unknowns and five nonzeros per row; dense LU would cost $O(N^6)$, so we use only matrix–vector products. Stationary methods (Jacobi, Gauss–Seidel, SOR) iterate a fixed map whose convergence is set by one spectral radius, which we compute exactly for the model problem; optimal over-relaxation turns $O(N^2)$ iterations into $O(N)$. Conjugate gradients minimises a quadratic energy over Krylov subspaces, needs no tuning, and obeys the Chebyshev bound of Lesson m2-l3.

## Learning Path

- **What you should already know**: Jacobi, Gauss–Seidel and diagonal dominance (Numerical Methods, Lesson m3-l2); the five-point Laplacian and its eigenvalues (Lesson m3-l1); Krylov subspaces and Lanczos (Lesson m2-l3).
- **What this lesson adds**: the spectral-radius criterion; exact model-problem rates; optimal SOR; conjugate gradients and its $\sqrt{\kappa}$ bound.
- **What later lessons this will unlock**: steepest descent, Newton and BFGS for general objectives, and nonlinear least squares (Lesson m3-l3).

## Core Explanation

### Stationary iterations and the spectral radius

Write $A = M - K$ with $M$ easy to invert. Then $Ax = b$ becomes $Mx = Kx + b$, suggesting the **stationary iteration**

$$x_{k+1} = M^{-1}Kx_k + M^{-1}b = Tx_k + c.$$

As $x^*$ is a fixed point, $e_{k+1} = Te_k$ and $e_k = T^ke_0$. Each eigencomponent of $e_0$ is multiplied by $\mu_i^k$ (Jordan form in general), so the iteration converges from every start **if and only if** $\rho(T) = \max_i|\mu_i| < 1$. Gaining $d$ digits takes

$$k \approx \frac{d\ln 10}{-\ln\rho(T)}$$

iterations; $-\ln\rho$ is the **asymptotic rate of convergence**. Splitting $A = D - L - U$ (diagonal, strictly lower, strictly upper) gives:

| Method | $M$ | Iteration matrix $T$ |
|---|---|---|
| Jacobi | $D$ | $T_J = D^{-1}(L + U)$ |
| Gauss–Seidel | $D - L$ | $T_{GS} = (D - L)^{-1}U$ |
| SOR | $\tfrac{1}{\omega}D - L$ | $T_\omega = (D - \omega L)^{-1}\big((1 - \omega)D + \omega U\big)$ |

Gauss–Seidel uses new values at once and converges for symmetric positive definite (SPD) $A$; SOR sets $x_i \leftarrow (1 - \omega)x_i + \omega x_i^{GS}$. Since $\det T_\omega = (1 - \omega)^n$, Kahan's bound $\rho(T_\omega) \ge |\omega - 1|$ makes $0 < \omega < 2$ necessary; Ostrowski–Reich shows it is sufficient for SPD $A$.

### Jacobi and Gauss–Seidel on the model problem

Scale the system as $A = 4I - (\text{four neighbours})$, $b = h^2f$, $h = 1/(N + 1)$, zero boundary data. Then $D = 4I$ and $T_J = I - A/4$. The eigenvectors of $A$ are $\sin(p\pi ih)\sin(q\pi jh)$ with eigenvalues $4\sin^2(p\pi h/2) + 4\sin^2(q\pi h/2)$, so, using $\sin^2\theta = (1 - \cos 2\theta)/2$,

$$\mu_{pq} = 1 - \sin^2\frac{p\pi h}{2} - \sin^2\frac{q\pi h}{2} = \frac{\cos p\pi h + \cos q\pi h}{2}, \qquad \rho_J = \cos\pi h \approx 1 - \tfrac{1}{2}\pi^2h^2,$$

attained at $p = q = 1$. The smoothest mode is slowest, since a long wave looks constant to a local average, and the rate $\tfrac{1}{2}\pi^2h^2$ means $O(N^2)$ iterations.

The red–black ordering, and also the natural ordering, of the five-point grid is **consistently ordered**, and for such matrices **Young's theorem** relates each eigenvalue $\lambda$ of $T_\omega$ to an eigenvalue $\mu$ of $T_J$:

$$(\lambda + \omega - 1)^2 = \lambda\,\omega^2\mu^2.$$

At $\omega = 1$ this gives $\lambda = \mu^2$, so $\rho_{GS} = \rho_J^2 = \cos^2\pi h \approx 1 - \pi^2h^2$: twice the Jacobi rate, still $O(N^2)$ iterations.

### SOR and the optimal relaxation parameter

Solving Young's relation for $\sqrt{\lambda}$ gives

$$\sqrt{\lambda} = \tfrac{1}{2}\Big(\omega\mu \pm \sqrt{\omega^2\mu^2 - 4(\omega - 1)}\Big).$$

A negative discriminant gives complex roots with product $\omega - 1$, so $|\lambda| = \omega - 1$; a positive one gives a larger root growing with $\mu$, worst at $\mu = \rho_J$. Raising $\omega$ lowers $\max|\lambda|$ until the discriminant at $\rho_J$ vanishes; beyond that $|\lambda| = \omega - 1$ rises. The optimum solves $\omega^2\rho_J^2 - 4\omega + 4 = 0$:

$$\omega_{\text{opt}} = \frac{2}{1 + \sqrt{1 - \rho_J^2}} = \frac{2}{1 + \sin\pi h}, \qquad \rho_{\text{SOR}} = \omega_{\text{opt}} - 1 = \frac{1 - \sin\pi h}{1 + \sin\pi h} \approx 1 - 2\pi h.$$

The rate $2\,\text{artanh}(\sin\pi h) \approx 2\pi h$ is linear in $h$: $O(N)$ iterations. Underestimating $\omega$ costs more than overestimating ($\rho$ has infinite left slope at $\omega_{\text{opt}}$), and a Jordan block there makes the error decay like $k\rho^k$, so real counts exceed the estimate.

### Conjugate gradients

For SPD $A$, solving $Ax = b$ is minimising the **energy** $\phi(x) = \tfrac{1}{2}x^\mathsf{T}Ax - b^\mathsf{T}x$, with $\nabla\phi = -r$ and $\phi(x) - \phi(x^*) = \tfrac{1}{2}\|x - x^*\|_A^2$; for the five-point system $\phi$ is the membrane's discrete Dirichlet energy. Steepest descent along $r$ cuts $\|e\|_A$ only by $(\kappa - 1)/(\kappa + 1)$ per step. **Conjugate gradients** uses **$A$-conjugate** directions, $p_i^\mathsf{T}Ap_j = 0$ for $i \ne j$, so the cross terms vanish and minimising along each direction in turn minimises over their span. From $x_0 = 0$, $r_0 = p_0 = b$:

$$\alpha_k = \frac{r_k^\mathsf{T}r_k}{p_k^\mathsf{T}Ap_k}, \quad x_{k+1} = x_k + \alpha_kp_k, \quad r_{k+1} = r_k - \alpha_kAp_k, \quad \beta_k = \frac{r_{k+1}^\mathsf{T}r_{k+1}}{r_k^\mathsf{T}r_k}, \quad p_{k+1} = r_{k+1} + \beta_kp_k.$$

By induction residuals are orthogonal, directions conjugate, and both span $\mathcal{K}_k(A, b)$: CG is Lanczos rearranged to solve a system, at one matrix–vector product per step.

### The convergence bound

As $x_k$ minimises $\|x - x^*\|_A$ over $x_0 + \mathcal{K}_k$, $e_k = P_k(A)e_0$ for the best degree-$k$ polynomial with $P_k(0) = 1$, and expanding in eigenvectors,

$$\frac{\|e_k\|_A}{\|e_0\|_A} \le \min_{P_k(0) = 1}\ \max_{\lambda \in [\lambda_{\min}, \lambda_{\max}]}|P_k(\lambda)| = \frac{1}{T_k\big(\tfrac{\kappa + 1}{\kappa - 1}\big)} \le 2\left(\frac{\sqrt{\kappa} - 1}{\sqrt{\kappa} + 1}\right)^k,$$

attained by a scaled Chebyshev polynomial $T_k$. In exact arithmetic CG also stops after at most as many steps as $A$ has distinct eigenvalues. For the model problem $\kappa = \cot^2(\pi h/2) \approx 4/(\pi h)^2$, so the rate is about $2/\sqrt{\kappa} \approx \pi h$: $O(N)$ iterations, like optimal SOR but parameter-free, and often faster than the bound because clustered eigenvalues are absorbed early. Preconditioning, especially by multigrid, makes the count nearly independent of $h$.

The script solves $-\nabla^2u = 1$ on the unit square ($N = 63$) matrix-free by all four methods to relative residual $10^{-6}$.

```python
import numpy as np

N = 63; h = 1.0 / (N + 1)
b = h**2 * np.ones((N, N))                       # -lap u = 1, zero boundary values
red = np.add.outer(np.arange(N), np.arange(N)) % 2 == 0

def nbrs(u):                                     # sum of four neighbours, zeros outside
    s = np.zeros_like(u)
    s[1:, :] += u[:-1, :]; s[:-1, :] += u[1:, :]
    s[:, 1:] += u[:, :-1]; s[:, :-1] += u[:, 1:]
    return s

A = lambda u: 4 * u - nbrs(u)
done = lambda u, tol: np.linalg.norm(b - A(u)) < tol * np.linalg.norm(b)

def jacobi(tol=1e-6, maxit=50_000):
    u = np.zeros_like(b)
    for k in range(1, maxit + 1):
        u = (b + nbrs(u)) / 4
        if done(u, tol): return u, k
    return u, maxit

def sor(w, tol=1e-6, maxit=50_000):              # w = 1 is Gauss-Seidel
    u = np.zeros_like(b)
    for k in range(1, maxit + 1):
        for m in (red, ~red):                    # red points depend only on black ones
            u[m] = (1 - w) * u[m] + w * ((b + nbrs(u)) / 4)[m]
        if done(u, tol): return u, k
    return u, maxit

def cg(tol=1e-6, maxit=10_000):
    u = np.zeros_like(b); r = b.copy(); p = r.copy(); rr = np.sum(r * r)
    for k in range(1, maxit + 1):
        Ap = A(p); a = rr / np.sum(p * Ap)
        u += a * p; r -= a * Ap; rr_new = np.sum(r * r)
        if np.sqrt(rr_new) < tol * np.linalg.norm(b): return u, k
        p = r + (rr_new / rr) * p; rr = rr_new
    return u, maxit

w_opt = 2 / (1 + np.sin(np.pi * h))
for name, (u, k) in [("Jacobi", jacobi()), ("Gauss-Seidel", sor(1.0)),
                     ("SOR", sor(w_opt)), ("CG", cg())]:
    print(f"{name:12s} {k:6d} iterations  u(centre) = {u[N // 2, N // 2]:.5f}")
```

Expect about 11,300 Jacobi, 5,800 Gauss–Seidel, 210 SOR ($\omega_{\text{opt}} = 1.9065$) and 100 CG iterations, all with $u(\tfrac{1}{2}, \tfrac{1}{2}) \approx 0.0737$; a log plot of the residuals shows lines whose slopes are the rates above.

## Key Ideas

- **Stationary iteration** converges iff $\rho(T) < 1$; $d$ digits take $d\ln 10/(-\ln\rho)$ iterations.
- **Model problem**: $\rho_J = \cos\pi h$, $\rho_{GS} = \cos^2\pi h$: $O(h^{-2})$ iterations.
- **Young's theory** gives $\omega_{\text{opt}} = 2/(1 + \sin\pi h)$ and $\rho_{\text{SOR}} = (1 - \sin\pi h)/(1 + \sin\pi h) \approx 1 - 2\pi h$: $O(h^{-1})$ iterations.
- **Conjugate gradients** minimises the energy over Krylov subspaces along $A$-conjugate directions.
- **CG bound**: $\|e_k\|_A \le 2\big((\sqrt{\kappa} - 1)/(\sqrt{\kappa} + 1)\big)^k\|e_0\|_A$, again $O(h^{-1})$ iterations, with no parameter.

## Worked Examples

### Example 1 — Jacobi, Gauss–Seidel and SOR on the $2 \times 2$ grid

Confirm the spectral radii on Example 3 of Lesson m3-l1 ($h = 1/3$, $u = 100$ on the top edge).

**Solution.** The equations are $u_1 = (100 + u_2 + u_3)/4$, $u_2 = (100 + u_1 + u_4)/4$, $u_3 = (u_1 + u_4)/4$, $u_4 = (u_2 + u_3)/4$, with solution $(37.5, 37.5, 12.5, 12.5)$. Theory gives $\rho_J = \cos(\pi/3) = 0.5$ and $\rho_{GS} = 0.25$. Jacobi from zero has errors $(12.5, 12.5, 12.5, 12.5)$, then $(6.25, \ldots)$: a factor $0.5$. Gauss–Seidel in the order $u_1, \ldots, u_4$ gives

| Sweep | $u_1$ | $u_2$ | $u_3$ | $u_4$ |
|---|---|---|---|---|
| 1 | 25 | 31.25 | 6.25 | 9.375 |
| 2 | 34.375 | 35.9375 | 10.9375 | 11.71875 |
| 3 | 36.71875 | 37.109375 | 12.109375 | 12.304688 |

with errors $(12.5, 6.25, 6.25, 3.125)$, $(3.125, 1.5625, 1.5625, 0.78125)$, $(0.78125, 0.390625, 0.390625, 0.195312)$: exactly $0.25$ per sweep. SOR uses $\omega_{\text{opt}} = 2/1.866025 = 1.0718$, $\rho_{\text{SOR}} = 0.0718$. Six digits need $13.82/0.693 \approx 20$ Jacobi, 10 Gauss–Seidel and $13.82/2.634 \approx 6$ SOR sweeps.

### Example 2 — Iteration counts on a fine grid

For $h = 0.01$, estimate the iterations needed to reduce the error by $10^{-6}$.

**Solution.** With $\pi h = 0.0314159$, $-\ln\cos\pi h = 4.9356 \times 10^{-4}$, so Jacobi needs $13.816/4.9356 \times 10^{-4} \approx 28{,}000$ and Gauss–Seidel about $14{,}000$. For SOR, $\sin\pi h = 0.0314108$, $\omega_{\text{opt}} = 1.9391$ and $-\ln\rho_{\text{SOR}} = 2\,\text{artanh}(0.0314108) = 0.06284$: about $220$. For CG, $\sqrt{\kappa} = \cot(0.015708) = 63.657$, the ratio is $62.657/64.657 = 0.96907$ with $-\ln = 0.031421$, and $2(0.96907)^k \le 10^{-6}$ needs $k \ge \ln(2 \times 10^6)/0.031421 = 462$. With $O(N^2)$ work per iteration, Jacobi and Gauss–Seidel cost $O(N^4)$, SOR and CG $O(N^3)$. The CG figure is a bound: at $N = 63$ it predicts 300 and the script takes 100.

### Example 3 — Conjugate gradients by hand

Solve $\begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix}x = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ by CG from $x_0 = 0$.

**Solution.** $r_0 = p_0 = (1, 2)$, $Ap_0 = (6, 7)$, $r_0^\mathsf{T}r_0 = 5$, $p_0^\mathsf{T}Ap_0 = 20$, so $\alpha_0 = 0.25$, $x_1 = (0.25, 0.5)$, $r_1 = (-0.5, 0.25)$, orthogonal to $r_0$. Then $\beta_0 = 0.3125/5 = 0.0625$, $p_1 = (-0.4375, 0.375)$ and $Ap_1 = (-1.375, 0.6875)$, with $p_0^\mathsf{T}Ap_1 = 0$. Now $p_1^\mathsf{T}Ap_1 = 0.859375$, $\alpha_1 = 0.3125/0.859375 = 4/11$, and

$$x_2 = (0.25, 0.5) + \tfrac{4}{11}(-0.4375, 0.375) = \left(\tfrac{1}{11}, \tfrac{7}{11}\right),$$

which satisfies $Ax_2 = (1, 2)$ exactly: two steps for two distinct eigenvalues, $(7 \pm \sqrt{5})/2$.

## Common Misconceptions

- **"Gauss–Seidel always beats Jacobi."** Only for classes such as consistently ordered SPD matrices; for others either may fail while the other converges.
- **"Over-relaxation is a small tweak."** At $h = 0.01$ it turns 14,000 iterations into 220, changing $O(N^4)$ into $O(N^3)$.
- **"CG takes $n$ iterations, so it is direct."** Finite termination needs exact arithmetic and is irrelevant for $n = 10^6$; $\sqrt{\kappa}$ governs accuracy after $k \ll n$ steps.
- **"A small residual means a small error."** The error can be $\kappa(A)$ times larger (Lesson m1-l1), and $\kappa \approx 4/(\pi h)^2$ here.
- **"CG works for any matrix."** It needs SPD $A$; nonsymmetric systems use GMRES, built on Arnoldi.

## Connections

- Mathematics Lab using Python III (Lesson m1-l2) applies `scipy.sparse.linalg.cg` to these systems.
- Electrostatic potentials in Electricity and Magnetism solve Poisson's equation; SOR long computed electrode and capacitor fields.
- Gravitational potentials in simulations for Astrophysics IV — Galaxies, Cosmology and Compact Objects come from Poisson solves by FFT or multigrid-preconditioned CG.
- The criterion $\rho(T) < 1$ is the matrix form of $|g'(x^*)| < 1$ for fixed-point iteration in Numerical Methods, and the stability test for linear recurrences in Linear Algebra (Lesson m3-l1).

## Quick Check

1. Show $e_{k+1} = Te_k$ and explain why $\rho(T) < 1$ is necessary.
2. Show that the Jacobi eigenvalues are $(\cos p\pi h + \cos q\pi h)/2$ and identify the slowest mode.
3. Derive $\omega_{\text{opt}}$ from Young's relation and evaluate it for $h = 1/50$.
4. Why does minimising along $A$-conjugate directions one at a time minimise over their span?
5. Estimate the CG count for $\kappa = 10^4$ and an $A$-norm reduction of $10^{-8}$.

## Takeaway

- Stationary methods converge at rate $-\ln\rho(T)$: $O(N^2)$ iterations for Jacobi and Gauss–Seidel on the model problem, $O(N)$ for SOR with $\omega = 2/(1 + \sin\pi h)$.
- CG minimises the energy over Krylov subspaces and converges like $\big((\sqrt{\kappa} - 1)/(\sqrt{\kappa} + 1)\big)^k$, also $O(N)$, with no parameter.
- Energy minimisation leads straight to the optimisation methods of the next lesson.
