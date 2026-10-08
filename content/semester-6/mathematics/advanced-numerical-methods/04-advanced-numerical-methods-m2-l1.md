***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: advanced-numerical-methods
courseName: Advanced Numerical Methods (Math Elective I, A)
moduleId: advanced-numerical-methods-module-2
moduleName: Eigenvalue Methods
lessonId: advanced-numerical-methods-m2-l1
lessonName: Power Iteration, Inverse Iteration with Shifts and the Rayleigh Quotient
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - advanced-numerical-methods-m1-l3
  - mathematics-lab-using-python-ii-m1-l2
  - linear-algebra-m2-l3
learningObjectives:
  - Derive the linear convergence of power iteration at rate $|\lambda_2/\lambda_1|$ from the eigenvector expansion of the starting vector.
  - Prove that the Rayleigh quotient of a symmetric matrix has error $O(\varepsilon^2)$ when the eigenvector error is $O(\varepsilon)$.
  - Apply inverse iteration with a shift $\mu$ to find the eigenvalue nearest $\mu$ and state its convergence rate.
  - Explain why Rayleigh quotient iteration converges cubically for symmetric matrices and what each step costs.
concepts:
  - Power iteration
  - Dominant eigenvalue
  - Rayleigh quotient
  - Inverse iteration
  - Spectral shift
  - Rayleigh quotient iteration
  - Deflation
tags:
  - mathematics
  - advanced-numerical-methods
  - eigenvalues
  - power-iteration
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Power Iteration, Inverse Iteration with Shifts and the Rayleigh Quotient

## Overview

Eigenvalues decided everything in Module 1: they classify equilibria and set the stiffness of an ODE system. Linear Algebra taught that eigenvalues are roots of the characteristic polynomial, but that is useless numerically: roots are catastrophically sensitive to coefficients, and by Abel–Ruffini no finite formula exists beyond degree four, so every eigenvalue algorithm is iterative. This lesson builds the simplest family. Power iteration repeatedly multiplies a vector by $A$ and converges to the dominant eigenvector at the linear rate $|\lambda_2/\lambda_1|$; the Rayleigh quotient extracts an eigenvalue whose error is the square of the eigenvector error. Inverse iteration applies the same idea to $(A - \mu I)^{-1}$, making the eigenvalue nearest the shift $\mu$ dominant, and updating the shift from the Rayleigh quotient at every step gives cubic convergence. Extended to many vectors at once, these ideas become the QR algorithm.

## Learning Path

- **What you should already know**: diagonalisation and the spectral theorem (Linear Algebra, Lesson m2-l3); the power method for normal modes of a chain (Mathematics Lab using Python II, Lesson m1-l2); LU factorisation (Numerical Methods, Lesson m3-l1).
- **What this lesson adds**: the convergence proof of power iteration; stationarity and quadratic accuracy of the Rayleigh quotient; shifted inverse iteration; Rayleigh quotient iteration and its cubic convergence; deflation.
- **What later lessons this will unlock**: simultaneous power iteration on a whole basis is the QR algorithm (Lesson m2-l2); power iteration that keeps every intermediate vector is the Lanczos and Arnoldi idea (Lesson m2-l3); eigenvalues govern the convergence of conjugate gradients (Lesson m3-l2).

## Core Explanation

### Why not the characteristic polynomial

Polynomial roots are ill-conditioned: Wilkinson's polynomial $\prod_{k=1}^{20}(x - k)$ has roots that move by whole units when its coefficients change in the tenth digit. Passing from matrix to polynomial throws away conditioning the matrix possesses, since a symmetric matrix's eigenvalues move by at most $\|\Delta A\|_2$ under a perturbation $\Delta A$. Good algorithms therefore iterate on the matrix directly.

### Power iteration

Let $A$ have eigenvalues ordered $|\lambda_1| > |\lambda_2| \ge \cdots \ge |\lambda_n|$ with eigenvectors $v_1, \ldots, v_n$. Expand a starting vector $x_0 = \sum c_i v_i$ with $c_1 \ne 0$. Then

$$A^k x_0 = \sum_i c_i \lambda_i^k v_i = \lambda_1^k \Big[c_1 v_1 + \sum_{i \ge 2} c_i \Big(\frac{\lambda_i}{\lambda_1}\Big)^k v_i\Big],$$

and every term in the sum dies like $|\lambda_i/\lambda_1|^k$. **Power iteration** is the normalised version,

$$y_k = Ax_{k-1}, \qquad x_k = y_k/\|y_k\|,$$

whose iterates converge to $\pm v_1$ with the direction error shrinking by $|\lambda_2/\lambda_1|$ per step: linear convergence, hopeless when $|\lambda_2| \approx |\lambda_1|$. If $\lambda_1 = -\lambda_2$ the iteration never settles. The condition $c_1 \ne 0$ is no concern in practice, because rounding injects a component along $v_1$ that then grows. Each step costs one matrix–vector product, which is why power iteration remains the method for huge sparse matrices such as the web graph behind PageRank.

### The Rayleigh quotient

Given an approximate eigenvector $x$, the least-squares eigenvalue estimate (minimise $\|Ax - \lambda x\|_2$ over $\lambda$) is the **Rayleigh quotient**

$$r(x) = \frac{x^\mathsf{T} A x}{x^\mathsf{T} x}.$$

For symmetric $A$ two properties make the whole module work. First, $\nabla r(x) = \frac{2}{x^\mathsf{T}x}(Ax - r(x)x)$ vanishes exactly at eigenvectors: they are the stationary points of $r$, with $\lambda_{\max}$ and $\lambda_{\min}$ its extreme values. Second, stationarity makes $r$ quadratically accurate. Write a unit vector as $x = (v_1 + \varepsilon w)/\sqrt{1 + \varepsilon^2}$ with $w \perp v_1$, $\|w\| = 1$. Then

$$r(x) = \frac{\lambda_1 + \varepsilon^2\, w^\mathsf{T}Aw}{1 + \varepsilon^2} = \lambda_1 + \varepsilon^2(w^\mathsf{T}Aw - \lambda_1) + O(\varepsilon^4),$$

because the cross term $v_1^\mathsf{T}Aw = \lambda_1 v_1^\mathsf{T}w = 0$. An eigenvector correct to $\varepsilon$ gives an eigenvalue correct to $\varepsilon^2$, so power iteration on a symmetric matrix has eigenvalue error $|\lambda_2/\lambda_1|^{2k}$. For nonsymmetric matrices the cross term survives and the estimate is only first-order accurate.

### Inverse iteration and shifts

Power iteration finds only the dominant eigenvalue. If $Av = \lambda v$ then $(A - \mu I)^{-1}v = (\lambda - \mu)^{-1}v$: the shifted inverse has the same eigenvectors, and its dominant eigenvalue belongs to the $\lambda$ **closest to the shift** $\mu$. **Inverse iteration** is power iteration on $(A - \mu I)^{-1}$,

$$(A - \mu I)\,y_k = x_{k-1}, \qquad x_k = y_k/\|y_k\|,$$

implemented as a linear solve, never an explicit inverse, with convergence factor

$$\frac{|\lambda_{(1)} - \mu|}{|\lambda_{(2)} - \mu|},$$

where $\lambda_{(1)}, \lambda_{(2)}$ are the eigenvalues nearest and second nearest to $\mu$. The matrix is factorised once, $O(n^3)$, and each step is then two triangular solves at $O(n^2)$. One might worry that $A - \mu I$ is nearly singular when $\mu$ is nearly an eigenvalue; but the large forward error of the solve lies almost entirely along $v_{(1)}$, exactly the direction wanted. Inverse iteration is the standard way to recover an eigenvector once its eigenvalue is known to a few digits.

### Rayleigh quotient iteration

Since the Rayleigh quotient improves as the eigenvector does, we may update the shift at every step:

$$\mu_k = r(x_{k-1}), \qquad (A - \mu_k I)\,y_k = x_{k-1}, \qquad x_k = y_k/\|y_k\|.$$

This is **Rayleigh quotient iteration**. If the eigenvector error is $\varepsilon_k$, the shift error is $O(\varepsilon_k^2)$, and one inverse-iteration step with that shift reduces the eigenvector error by the factor $O(\varepsilon_k^2)$, so $\varepsilon_{k+1} = O(\varepsilon_k^3)$: **cubic convergence** for symmetric matrices, tripling the correct digits each step. The price is a fresh factorisation every step, $O(n^3)$, so RQI is used for a few eigenpairs or on tridiagonal matrices where factorisation costs $O(n)$. It is Newton's method in disguise: $Ax - \lambda x = 0$, $\|x\| = 1$ is a nonlinear system, and RQI is essentially Newton's iteration on it, the connection promised in Lesson m1-l2.

### Deflation and the road to many eigenvalues

After $(\lambda_1, v_1)$ of a symmetric matrix one may **deflate**: $A' = A - \lambda_1 v_1 v_1^\mathsf{T}$ has the same eigenvectors with $\lambda_1$ replaced by zero, so power iteration on $A'$ finds $\lambda_2$; equivalently, orthogonalise every iterate against $v_1$. Repeating this $n$ times accumulates rounding error; better to iterate on $n$ orthonormal vectors at once, re-orthogonalising after each multiplication, which reorganised is the QR algorithm.

The script runs the three methods on a symmetric matrix with eigenvalues $1, 2, 4$ and prints eigenvalue errors. Expect the power-iteration error to shrink by $(2/4)^2 = 1/4$ per step, inverse iteration with shift $1.2$ by $(0.2/0.8)^2 = 1/16$, and RQI to reach machine precision in three or four steps.

```python
import numpy as np

Q, _ = np.linalg.qr(np.array([[1.0, 2.0, 0.0], [0.0, 1.0, 3.0], [2.0, 0.0, 1.0]]))
A = Q @ np.diag([4.0, 2.0, 1.0]) @ Q.T          # symmetric, eigenvalues 4, 2, 1
rq = lambda x: x @ A @ x / (x @ x)
x = np.array([1.0, 1.0, 1.0])

for k in range(8):                                # power iteration, target 4
    x = A @ x; x /= np.linalg.norm(x)
    print("power", k + 1, f"{abs(rq(x) - 4.0):.2e}")

x, mu = np.array([1.0, 1.0, 1.0]), 1.2
for k in range(5):                                # inverse iteration, shift 1.2, target 1
    x = np.linalg.solve(A - mu * np.eye(3), x); x /= np.linalg.norm(x)
    print("inverse", k + 1, f"{abs(rq(x) - 1.0):.2e}")

x = np.array([1.0, 0.3, -0.2])
for k in range(5):                                # Rayleigh quotient iteration
    mu = rq(x)
    x = np.linalg.solve(A - mu * np.eye(3), x); x /= np.linalg.norm(x)
    print("RQI", k + 1, f"mu = {mu:.12f}", f"residual {np.linalg.norm(A @ x - rq(x) * x):.1e}")
```

## Key Ideas

- **Power iteration** converges to the dominant eigenvector linearly with factor $|\lambda_2/\lambda_1|$, at one matrix–vector product per step.
- **Rayleigh quotient** $r(x) = x^\mathsf{T}Ax/x^\mathsf{T}x$ is stationary at eigenvectors; for symmetric $A$ an $O(\varepsilon)$ eigenvector gives an $O(\varepsilon^2)$ eigenvalue.
- **Inverse iteration** on $(A - \mu I)^{-1}$ finds the eigenvalue nearest $\mu$ with factor $|\lambda_{(1)} - \mu|/|\lambda_{(2)} - \mu|$; factorise once, solve each step.
- **Rayleigh quotient iteration** updates the shift each step and converges cubically for symmetric matrices at $O(n^3)$ per step.

## Worked Examples

### Example 1 — Power iteration on a $2 \times 2$ matrix

Run power iteration on $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ from $x_0 = (1, 0)^\mathsf{T}$ and verify the convergence rates.

**Solution.** The eigenpairs are $\lambda_1 = 3$, $v_1 \propto (1, 1)$ and $\lambda_2 = 1$, $v_2 \propto (1, -1)$, so $A^k x_0 = \tfrac{1}{2}(3^k + 1,\; 3^k - 1)$: iterates $(1, 0), (2, 1), (5, 4), (14, 13)$. The $v_2$-to-$v_1$ component ratio is $3^{-k}$, a direction error falling by $1/3$ per step. For $x = (a, b)$, $r = 2 + 2ab/(a^2 + b^2)$:

| $k$ | $x_k$ | $r(x_k)$ | error |
|---|---|---|---|
| 0 | $(1, 0)$ | $2$ | $1$ |
| 1 | $(2, 1)$ | $2.8$ | $0.2$ |
| 2 | $(5, 4)$ | $2.9756$ | $2.44 \times 10^{-2}$ |
| 3 | $(14, 13)$ | $2.99726$ | $2.74 \times 10^{-3}$ |

Successive error ratios $0.2$, $0.122$, $0.112$ tend to $1/9 = |\lambda_2/\lambda_1|^2$: the eigenvalue converges twice as fast as the eigenvector, as quadratic accuracy predicts.

### Example 2 — Inverse iteration with a shift

Find the eigenvalue of the same $A$ nearest $\mu = 0.9$, starting from $(1, 0)^\mathsf{T}$.

**Solution.** $A - 0.9I = \begin{pmatrix} 1.1 & 1 \\ 1 & 1.1 \end{pmatrix}$ with determinant $0.21$, so $(A - 0.9I)^{-1} = \frac{1}{0.21}\begin{pmatrix} 1.1 & -1 \\ -1 & 1.1 \end{pmatrix}$. One step maps $(1, 0)$ to the direction $(1.1, -1)$, with $r = 2 - 2.2/2.21 = 1.00452$. A second step gives $(2.21, -2.2)$ and $r = 2 - 9.724/9.7241 = 1.0000103$. The predicted factor is $|1 - 0.9|/|3 - 0.9| = 0.0476$ for the eigenvector and $0.0476^2 = 2.27 \times 10^{-3}$ for the eigenvalue; the observed ratio $1.03 \times 10^{-5}/4.52 \times 10^{-3} = 2.28 \times 10^{-3}$ agrees. Two solves give five digits of an eigenvalue power iteration could never reach.

### Example 3 — Cubic convergence of Rayleigh quotient iteration

Apply RQI to the same $A$ from $x_0 = (2, 1)^\mathsf{T}$.

**Solution.** $\mu_1 = r(x_0) = 2.8$, and solving $(A - 2.8I)y = (2, 1)$ gives $y \propto (2.6, 2.8)$, so $\mu_2 = 2 + 14.56/14.6 = 2.99726$, error $2.74 \times 10^{-3}$. Next, $(A - 2.99726I)y = (2.6, 2.8)$ gives $y \propto (a, b) = (5.39288, 5.39233)$. With $a - b = 5.5 \times 10^{-4}$ and $a + b = 10.785$,

$$\mu_3 = 3 - \frac{2(a - b)^2}{(a + b)^2 + (a - b)^2} = 3 - \frac{6.05 \times 10^{-7}}{116.3} = 3 - 5.2 \times 10^{-9}.$$

The errors $0.2 \to 2.7 \times 10^{-3} \to 5.2 \times 10^{-9}$ obey $\varepsilon_{k+1} \approx \varepsilon_k^3$. Starting instead from $(1, 0)$ gives $\mu_1 = 2$, midway between the eigenvalues; $A - 2I$ swaps the components and RQI cycles between $(1, 0)$ and $(0, 1)$ for ever: cubic convergence is local.

## Common Misconceptions

- **"Compute the characteristic polynomial and find its roots."** This destroys conditioning: a symmetric matrix has perfectly conditioned eigenvalues but its characteristic polynomial may have hopelessly ill-conditioned roots.
- **"Power iteration converges to the largest eigenvalue."** It converges to the eigenvalue of largest modulus, and only if that modulus is strictly larger than the next; $\lambda_1 = -\lambda_2$ defeats it.
- **"Inverse iteration fails when the shift is nearly an eigenvalue because the matrix is singular."** The solve is inaccurate only along the eigenvector sought, which is harmless; a very close shift gives the fastest convergence.
- **"Rayleigh quotient iteration converges to the eigenvalue nearest the start."** It converges cubically to some eigenpair, not necessarily the nearest, and can stall from symmetric starts.

## Connections

- The normal modes of a coupled chain (Mathematics Lab using Python II, Lesson m1-l2; Waves and Optics) are eigenvectors of a tridiagonal matrix; shifted inverse iteration isolates a single mode of chosen frequency.
- The ground state in Introduction to Quantum Mechanics is the lowest eigenvalue of the Hamiltonian; inverse iteration on $H$, or power iteration on $e^{-\tau H}$ (imaginary-time propagation), finds it.
- Linear stability of equilibria (Linear Algebra, Lesson m3-l1) needs only the eigenvalue of largest real part, a task for shifted inverse iteration or Arnoldi (Lesson m2-l3).
- PageRank and the stationary distribution of a Markov chain are the dominant eigenvector of a huge sparse stochastic matrix, found by plain power iteration.

## Quick Check

1. Show that if $x_0$ has no component along $v_1$, exact power iteration converges to $v_2$, and explain why this does not happen in floating point.
2. For eigenvalues $5, 4.9, 1$, how many power-iteration steps reduce the eigenvector error by $10^{6}$? How many steps of inverse iteration with shift $\mu = 4.95$?
3. Prove that $\nabla r(x) = 0$ exactly when $x$ is an eigenvector of symmetric $A$.
4. Why does RQI cost $O(n^3)$ per step while inverse iteration costs $O(n^2)$ after the first?
5. How would you find the eigenvalue of $A$ closest to $7.3$, and what is the convergence factor if the spectrum contains $7.1$ and $7.9$?

## Takeaway

- Power iteration converges to the dominant eigenvector at rate $|\lambda_2/\lambda_1|$; the Rayleigh quotient squares that accuracy for symmetric matrices.
- Shifting and inverting makes any chosen eigenvalue dominant; one factorisation and a solve per step gives the eigenvalue nearest the shift.
- Updating the shift from the Rayleigh quotient gives cubic convergence at a new factorisation per step.
- Iterating on a full orthonormal basis leads to the QR algorithm of the next lesson.
