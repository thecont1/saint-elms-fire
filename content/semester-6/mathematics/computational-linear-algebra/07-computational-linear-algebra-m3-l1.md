***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: computational-linear-algebra
courseName: Computational Linear Algebra (Math Elective II, A)
moduleId: computational-linear-algebra-module-3
moduleName: Iterative Methods and Large-Scale Computation
lessonId: computational-linear-algebra-m3-l1
lessonName: Krylov Subspaces, Conjugate Gradients, GMRES and Preconditioning
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 7
prerequisites:
  - computational-linear-algebra-m2-l3
  - numerical-methods-m3-l2
learningObjectives:
  - Define the Krylov subspace $\mathcal{K}_k(A, b)$ and explain why every method built on matrix–vector products produces iterates in $x_0 + \mathcal{K}_k$.
  - State the conjugate gradient algorithm, carry out two iterations by hand, and prove the orthogonality and conjugacy properties that give termination in at most $n$ steps.
  - Apply the convergence bound $\|e_k\|_A \le 2\big(\tfrac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\big)^k\|e_0\|_A$ to estimate iteration counts and total cost for discretised Laplacians.
  - Describe GMRES through the Arnoldi process and explain how a preconditioner $M \approx A$ reduces the effective condition number.
concepts:
  - Krylov subspace
  - Conjugate gradient method
  - A-norm and energy minimisation
  - Chebyshev convergence bound
  - Arnoldi process and GMRES
  - Preconditioning and incomplete Cholesky
tags:
  - mathematics
  - computational-linear-algebra
  - conjugate-gradient
  - krylov-methods
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Krylov Subspaces, Conjugate Gradients, GMRES and Preconditioning

## Overview

Lesson m1-l3 ended at a wall: in three dimensions no ordering keeps the Cholesky factor sparse, and $O(n^2)$ flops are unaffordable at $n = 10^7$. Iterative methods never factor $A$. They touch it only through matrix–vector products, which cost $2\,\mathrm{nnz}$ flops and need no extra memory, and stop when the residual is small enough. Krylov subspace methods are optimal: after $k$ products they return the best approximation available in the subspace spanned by $b, Ab, \dots, A^{k-1}b$. For symmetric positive definite matrices this is the conjugate gradient method, whose iteration count grows only like $\sqrt{\kappa}$, and for general matrices it is GMRES. This lesson derives CG and its convergence bound, sketches GMRES, and introduces preconditioning.

## Learning Path

- **What you should already know**: Jacobi and Gauss–Seidel iterations (Numerical Methods, Lesson m3-l2); SPD matrices, Cholesky and sparse storage (Lesson m1-l3); modified Gram–Schmidt (Lesson m2-l1); $\kappa_2 = \sigma_1/\sigma_n$ (Lesson m2-l3).
- **What this lesson adds**: Krylov subspaces; the CG algorithm with its optimality, orthogonality and termination properties; the $\sqrt{\kappa}$ convergence bound and cost model; Arnoldi and GMRES; preconditioning.
- **What later lessons this will unlock**: power iteration and PageRank (Lesson m3-l2); randomised methods, memory and parallelism (Lesson m3-l3).

## Core Explanation

### Krylov subspaces

Suppose the only operation available is $v \mapsto Av$. Starting from $x_0 = 0$ (the general case replaces $b$ by $r_0 = b - Ax_0$), after $k$ products every vector we can have formed lies in the **Krylov subspace**

$$\mathcal{K}_k(A, b) = \operatorname{span}\{b, Ab, A^2b, \dots, A^{k-1}b\} = \{p(A)b : \deg p \le k - 1\}.$$

Stationary methods such as Jacobi also live in $\mathcal{K}_k$ but choose a fixed, non-optimal combination. A **Krylov method** chooses $x_k \in \mathcal{K}_k$ by an optimality condition. By Cayley–Hamilton $A^{-1}b \in \mathcal{K}_n$, so the methods terminate in at most $n$ steps in exact arithmetic; for well-clustered spectra they get close in far fewer.

### The conjugate gradient method

Let $A$ be SPD and define the **$A$-norm** $\|v\|_A = \sqrt{v^\mathsf{T}Av}$. Minimising the quadratic $\phi(x) = \tfrac{1}{2}x^\mathsf{T}Ax - b^\mathsf{T}x$ is equivalent to solving $Ax = b$, since $\nabla\phi = Ax - b$, and $\phi(x) - \phi(x^\ast) = \tfrac{1}{2}\|x - x^\ast\|_A^2$. The **conjugate gradient method** (CG) chooses $x_k \in \mathcal{K}_k$ to minimise $\|x - x^\ast\|_A$, and does so with a three-term recurrence that stores only four vectors:

$$\alpha_k = \frac{r_k^\mathsf{T}r_k}{p_k^\mathsf{T}Ap_k}, \quad x_{k+1} = x_k + \alpha_k p_k, \quad r_{k+1} = r_k - \alpha_k Ap_k, \quad \beta_k = \frac{r_{k+1}^\mathsf{T}r_{k+1}}{r_k^\mathsf{T}r_k}, \quad p_{k+1} = r_{k+1} + \beta_k p_k,$$

with $r_0 = p_0 = b - Ax_0$. The two structural facts, proved together by induction, are

$$r_i^\mathsf{T}r_j = 0 \quad\text{and}\quad p_i^\mathsf{T}Ap_j = 0 \qquad (i \ne j):$$

the residuals are mutually orthogonal and the search directions are **$A$-conjugate**. Conjugacy means that minimising along $p_k$ does not undo earlier minimisations, so $x_k$ minimises $\phi$ over all of $x_0 + \mathcal{K}_k$. Orthogonality of $n$ residuals in $\mathbb{R}^n$ forces $r_n = 0$. The cost per iteration is one matrix–vector product, two inner products and three vector updates: about $2\,\mathrm{nnz} + 10n$ flops and memory for $x, r, p, Ap$.

### Convergence rate

Because $x_k$ is optimal in $\mathcal{K}_k$, the error $e_k = x^\ast - x_k$ satisfies $e_k = p_k(A)e_0$ for the polynomial $p_k$ of degree $k$ with $p_k(0) = 1$ that minimises $\|p_k(A)e_0\|_A$. Expanding $e_0$ in eigenvectors of $A$ with eigenvalues in $[\lambda_{\min}, \lambda_{\max}]$,

$$\frac{\|e_k\|_A}{\|e_0\|_A} \le \min_{p_k(0)=1}\ \max_{\lambda \in [\lambda_{\min}, \lambda_{\max}]} |p_k(\lambda)|.$$

The minimax polynomial on an interval is a scaled Chebyshev polynomial, and evaluating it gives the **CG convergence bound**

$$\|e_k\|_A \le 2\left(\frac{\sqrt{\kappa} - 1}{\sqrt{\kappa} + 1}\right)^{k}\|e_0\|_A, \qquad \kappa = \kappa_2(A) = \frac{\lambda_{\max}}{\lambda_{\min}}.$$

For large $\kappa$ the factor is about $1 - 2/\sqrt{\kappa}$, so reducing the error by $\varepsilon$ needs

$$k \approx \tfrac{1}{2}\sqrt{\kappa}\,\ln(2/\varepsilon)$$

iterations. Jacobi and steepest descent need $O(\kappa)$ iterations instead. The bound is pessimistic when the eigenvalues cluster: if $A$ has only $m$ distinct eigenvalues, CG terminates in $m$ steps. For the five-point Laplacian on an $N \times N$ grid, $\kappa \approx 4/(\pi^2h^2)$ with $h = 1/(N+1)$, so $\sqrt{\kappa} \approx 2N/\pi$: iterations grow linearly with $N$, each costs $O(n) = O(N^2)$, and the total is $O(N^3) = O(n^{3/2})$ with $O(n)$ memory; in three dimensions the total is $O(n^{4/3})$, which beats every direct method.

### GMRES for nonsymmetric systems

When $A$ is not symmetric, the short recurrence of CG is unavailable and an explicit basis of $\mathcal{K}_k$ must be built. The **Arnoldi process** is modified Gram–Schmidt applied to $b, Ab, A^2b, \dots$ one vector at a time: given orthonormal $q_1, \dots, q_k$, form $v = Aq_k$, subtract $h_{jk} = q_j^\mathsf{T}v$ times $q_j$ for $j \le k$, and normalise to get $q_{k+1}$ with $h_{k+1,k} = \|v\|$. In matrix form $AQ_k = Q_{k+1}\tilde H_k$ with $\tilde H_k$ a $(k+1) \times k$ upper Hessenberg matrix. **GMRES** chooses $x_k = Q_k y$ to minimise the residual 2-norm,

$$\min_y \|b - AQ_ky\|_2 = \min_y \|\,\|b\|e_1 - \tilde H_k y\,\|_2,$$

a tiny least-squares problem solved by Givens rotations, one new rotation per iteration. The price is that all $k$ basis vectors must be stored and each new vector orthogonalised against all of them, so storage is $O(nk)$ and work $O(nk^2)$; in practice one restarts every $m$ steps (GMRES($m$)), at some cost in convergence. There is no bound as clean as CG's: convergence depends on the whole spectrum and on how far $A$ is from normal.

### Preconditioning

Since iteration counts scale with $\sqrt{\kappa}$, the most powerful lever is to change the matrix. A **preconditioner** $M$ is an SPD matrix that approximates $A$ and for which $Mz = r$ is cheap to solve; CG is then applied, implicitly, to $M^{-1/2}AM^{-1/2}$, whose condition number can be far smaller. The **preconditioned CG** algorithm needs one extra solve $Mz_k = r_k$ per iteration and replaces $r_k^\mathsf{T}r_k$ by $r_k^\mathsf{T}z_k$ and $p_{k+1} = z_{k+1} + \beta_kp_k$. Standard choices:

| Preconditioner | $M$ | Cost per solve | Effect on $\kappa$ for 2-D Laplacian |
|---|---|---|---|
| Jacobi | $\operatorname{diag}(A)$ | $n$ | removes scaling, no change in $O(h^{-2})$ |
| Incomplete Cholesky IC(0) | $\tilde L\tilde L^\mathsf{T}$ with fill discarded | $2\,\mathrm{nnz}$ | constant factor, typically 5–10 |
| Multigrid | one V-cycle | $O(n)$ | $\kappa = O(1)$, iterations independent of $n$ |

Incomplete Cholesky runs the algorithm of Lesson m1-l3 but discards all fill, so it costs the same memory as $A$. Incomplete LU plays the same role inside GMRES.

```python
import numpy as np
import scipy.sparse as sp

def conjugate_gradient(A, b, tol=1e-8, maxiter=10_000):
    x = np.zeros_like(b); r = b.copy(); p = r.copy(); rr = r @ r
    for k in range(maxiter):
        Ap = A @ p                               # the only matrix-vector product
        alpha = rr / (p @ Ap)
        x += alpha * p; r -= alpha * Ap
        rr_new = r @ r
        if np.sqrt(rr_new) <= tol * np.linalg.norm(b):
            return x, k + 1
        p = r + (rr_new / rr) * p; rr = rr_new
    return x, maxiter

N = 100                                           # 2-D Poisson matrix, n = N^2 = 10^4, nnz ~ 5n
T = sp.diags([-1.0, 2.0, -1.0], [-1, 0, 1], shape=(N, N))
A = (sp.kron(sp.eye(N), T) + sp.kron(T, sp.eye(N))).tocsr()
b = np.ones(N * N)
x, its = conjugate_gradient(A, b)
print(its, np.linalg.norm(A @ x - b) / np.linalg.norm(b))
# a few hundred iterations; kappa ~ 4100 and the bound gives 612
```

## Key Ideas

- **Krylov subspace**: $\mathcal{K}_k = \operatorname{span}\{b, \dots, A^{k-1}b\}$ is everything reachable with $k$ matrix–vector products; Krylov methods pick the optimal element.
- **CG**: minimises $\|x - x^\ast\|_A$ over $\mathcal{K}_k$ with a short recurrence; residuals orthogonal, directions $A$-conjugate, exact in at most $n$ steps.
- **Convergence**: $\|e_k\|_A \le 2\big(\frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\big)^k\|e_0\|_A$, so about $\tfrac{1}{2}\sqrt{\kappa}\ln(2/\varepsilon)$ iterations; clustering helps beyond the bound.
- **GMRES**: Arnoldi builds an orthonormal Krylov basis and a Hessenberg $\tilde H_k$; a small least-squares solve minimises the residual; storage grows with $k$.
- **Preconditioning**: solve $M^{-1}Ax = M^{-1}b$ with $M \approx A$ cheap to invert; Jacobi, incomplete Cholesky and multigrid trade cost for a smaller $\kappa$.

## Worked Examples

### Example 1 — Two CG iterations by hand

Solve $Ax = b$ with $A = \begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix}$, $b = (1, 2)^\mathsf{T}$, $x_0 = 0$.

**Solution.** $r_0 = p_0 = (1, 2)^\mathsf{T}$, $r_0^\mathsf{T}r_0 = 5$, $Ap_0 = (6, 7)^\mathsf{T}$, $p_0^\mathsf{T}Ap_0 = 20$, so $\alpha_0 = 5/20 = 0.25$ and

$$x_1 = (0.25, 0.5)^\mathsf{T}, \qquad r_1 = r_0 - 0.25(6, 7)^\mathsf{T} = (-0.5, 0.25)^\mathsf{T}.$$

Check $r_1^\mathsf{T}r_0 = -0.5 + 0.5 = 0$. Then $r_1^\mathsf{T}r_1 = 0.3125$, $\beta_0 = 0.3125/5 = 0.0625$, $p_1 = r_1 + 0.0625\,p_0 = (-0.4375, 0.375)^\mathsf{T}$, $Ap_1 = (-1.375, 0.6875)^\mathsf{T}$, and $p_0^\mathsf{T}Ap_1 = -1.375 + 1.375 = 0$ confirms conjugacy. Now $p_1^\mathsf{T}Ap_1 = 0.6015625 + 0.2578125 = 0.859375$, $\alpha_1 = 0.3125/0.859375 = 4/11$, and

$$x_2 = x_1 + \tfrac{4}{11}p_1 = (0.25 - 0.15909,\ 0.5 + 0.13636)^\mathsf{T} = (\tfrac{1}{11}, \tfrac{7}{11})^\mathsf{T},$$

the exact solution (compare Lesson m1-l1, Example 3), with $r_2 = r_1 - \tfrac{4}{11}Ap_1 = (0, 0)^\mathsf{T}$.

### Example 2 — Cost of CG against banded Cholesky for a large Laplacian

The five-point Laplacian on a $1000 \times 1000$ grid ($n = 10^6$, $\mathrm{nnz} \approx 5n$) is to be solved to relative accuracy $10^{-8}$. Compare unpreconditioned CG with the banded Cholesky of Lesson m1-l3 at $10^{10}$ flop/s.

**Solution.** With $h = 1/1001$, $\kappa \approx 4/(\pi^2h^2) = 4 \times 1.002 \times 10^6/9.87 = 4.06 \times 10^5$ and $\sqrt{\kappa} = 637$. The bound gives $k \approx \tfrac{1}{2}(637)\ln(2 \times 10^8) = 318.5 \times 19.1 \approx 6{,}100$ iterations. Each costs $2 \times 5 \times 10^6 + 10 \times 10^6 = 2 \times 10^7$ flops, so the total is $1.2 \times 10^{11}$ flops, about $12$ s, with memory for four vectors, $32$ MB. Banded Cholesky with $p = 1000$ costs $np^2 = 10^{12}$ flops, about $100$ s, and the factor occupies $n(p+1) \approx 10^9$ numbers, $8$ GB. CG wins by a factor of 8 in time and 250 in memory; a preconditioner cutting $\kappa$ tenfold would divide the iterations by $\sqrt{10}$.

### Example 3 — The effect of a Jacobi preconditioner

A large SPD matrix has eigenvalues filling $[1, 100]$. After symmetric diagonal (Jacobi) scaling the spectrum lies in $[0.9, 1.1]$. How many CG iterations does the bound predict in each case for a reduction of $10^{-6}$?

**Solution.** Before: $\kappa = 100$, $\sqrt{\kappa} = 10$, ratio $(10 - 1)/(10 + 1) = 9/11 = 0.818$. The bound $2(0.818)^k \le 10^{-6}$ gives $k \ge \ln(2 \times 10^6)/\ln(11/9) = 14.51/0.2007 = 72.3$, so $73$ iterations. After: $\kappa = 1.1/0.9 = 1.222$, $\sqrt{\kappa} = 1.1055$, ratio $0.1055/2.1055 = 0.0501$, and $k \ge 14.51/\ln(1/0.0501) = 14.51/2.994 = 4.85$, so $5$ iterations. The preconditioner costs one division per unknown per iteration and saves 68 matrix–vector products.

## Common Misconceptions

- **"CG is a direct method because it terminates in $n$ steps."** In floating point orthogonality is lost long before step $n$; CG is an iterative method stopped by a residual test after $O(\sqrt{\kappa})$ iterations.
- **"The convergence rate of CG depends on $\kappa$."** It depends on $\sqrt{\kappa}$, which is why CG beats Jacobi and steepest descent (rate governed by $\kappa$) so decisively; and clustering of eigenvalues makes it faster still.
- **"GMRES is CG for nonsymmetric matrices."** GMRES minimises the residual over the same subspace but must store the whole Krylov basis; CG's short recurrence depends on symmetry.
- **"A preconditioner must approximate $A^{-1}$ entrywise."** It must cluster the spectrum of $M^{-1}A$; the diagonal of $A$ is a poor approximation to $A^{-1}$ yet can cut iterations tenfold.

## Connections

- Jacobi and Gauss–Seidel in Numerical Methods (Lesson m3-l2) are the stationary ancestors of CG; the Krylov viewpoint shows why an optimal combination of the same products converges so much faster.
- The discretised Poisson equation of Electricity and Magnetism and the implicit heat-equation steps of Mathematics Lab using Python II (Lesson m1-l4) produce exactly the SPD sparse systems CG was designed for.
- The Chebyshev polynomials behind the convergence bound also minimise interpolation error in Numerical Methods (Lesson m1-l2).
- Gravity and radiative-transfer solvers in Astrophysics solve Poisson-type systems with $n \sim 10^8$ by preconditioned CG or multigrid at every time step.

## Quick Check

1. Define $\mathcal{K}_k(A, b)$ and explain why the exact solution lies in $\mathcal{K}_n$.
2. Starting from $r_{k+1} = r_k - \alpha_kAp_k$ and the definition of $\alpha_k$, show that $r_{k+1}^\mathsf{T}r_k = 0$.
3. A matrix has $\kappa = 10^4$. How many CG iterations does the bound predict for a $10^{-10}$ error reduction?
4. Why does GMRES need restarts while CG does not, and what is lost when restarting?
5. Explain how incomplete Cholesky differs from Cholesky and why it costs no more memory than $A$.

## Takeaway

- Krylov methods use only matrix–vector products and return the optimal approximation in $\mathcal{K}_k$.
- Conjugate gradients minimises the $A$-norm error with a three-term recurrence costing $2\,\mathrm{nnz} + 10n$ flops and four vectors per step.
- The error decreases at least like $\big(\frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\big)^k$, so iteration counts scale with $\sqrt{\kappa}$; a 3-D Laplacian costs $O(n^{4/3})$ in all.
- GMRES extends the idea to nonsymmetric matrices through Arnoldi and a Hessenberg least-squares problem, at the price of storing the whole basis.
- Preconditioning replaces $A$ by $M^{-1}A$ with a clustered spectrum; incomplete Cholesky and multigrid are the standard tools.
