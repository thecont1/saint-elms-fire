***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: computational-linear-algebra
courseName: Computational Linear Algebra (Math Elective II, A)
moduleId: computational-linear-algebra-module-1
moduleName: Direct Methods and Conditioning
lessonId: computational-linear-algebra-m1-l1
lessonName: Norms, Condition Numbers and Floating-Point Stability
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - linear-algebra-m2-l2
  - numerical-methods-m2-l1
  - mathematics-lab-using-python-ii-m1-l1
learningObjectives:
  - Compute the $1$-, $2$-, $\infty$- and Frobenius norms of vectors and matrices and state the submultiplicative and consistency properties they satisfy.
  - Derive the perturbation bound $\|\delta x\|/\|x\| \le \kappa(A)\,\|\delta b\|/\|b\|$ and interpret $\kappa(A)$ as the worst-case amplification of relative error.
  - Describe IEEE double-precision arithmetic through the model $\mathrm{fl}(x \circ y) = (x \circ y)(1+\delta)$ with $|\delta| \le u$, and distinguish forward error, backward error and stability.
  - Explain the rule of thumb "forward error $\lesssim$ condition number $\times$ backward error" and apply it to a computed solution of a linear system.
concepts:
  - Vector and matrix norms
  - Induced (operator) norm
  - Condition number of a matrix
  - Unit roundoff and the floating-point model
  - Backward error
  - Backward stability
tags:
  - mathematics
  - computational-linear-algebra
  - conditioning
  - floating-point
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Norms, Condition Numbers and Floating-Point Stability

## Overview

Every algorithm in this course runs in finite precision on data that already carry error. Two questions follow. How sensitive is the exact answer to the data? That is conditioning, measured by $\kappa(A) = \|A\|\,\|A^{-1}\|$. How far does an algorithm stray when every operation is rounded? That is stability, best expressed as backward error: the computed result is exact for slightly perturbed data. This lesson sets up norms, derives the perturbation bound for $Ax = b$, describes IEEE arithmetic, and reaches the central heuristic: forward error $\lesssim$ condition number $\times$ backward error.

## Learning Path

- **What you should already know**: inner products, the Euclidean norm and orthogonality (Linear Algebra, Lesson m2-l2); truncation and round-off error (Numerical Methods, Lesson m2-l1); `np.linalg.cond` and ill-conditioned systems (Mathematics Lab using Python II, Lesson m1-l1).
- **What this lesson adds**: induced matrix norms, the condition-number bound, the floating-point model with $u = 2^{-53}$, and forward/backward error analysis.
- **What later lessons this will unlock**: stability of pivoted LU (Lesson m1-l2), Householder QR (Lesson m2-l1), why the normal equations square $\kappa$ (Lesson m2-l2), and CG convergence in terms of $\kappa$ (Lesson m3-l1).

## Core Explanation

### Vector norms

A **norm** on $\mathbb{R}^n$ satisfies $\|x\| = 0 \iff x = 0$, $\|\alpha x\| = |\alpha|\,\|x\|$ and $\|x + y\| \le \|x\| + \|y\|$. The three used constantly are the **$p$-norms**

$$\|x\|_1 = \sum_{i=1}^n |x_i|, \qquad \|x\|_2 = \Big(\sum_{i=1}^n x_i^2\Big)^{1/2}, \qquad \|x\|_\infty = \max_{1 \le i \le n} |x_i|.$$

All norms on a finite-dimensional space are equivalent:

$$\|x\|_\infty \le \|x\|_2 \le \sqrt{n}\,\|x\|_\infty, \qquad \|x\|_2 \le \|x\|_1 \le \sqrt{n}\,\|x\|_2.$$

The constants grow with $n$: at $n = 10^6$ a bound tight in one norm can be loose by $10^3$ in another. The 2-norm suits least squares and the SVD because $\|Qx\|_2 = \|x\|_2$ when $Q^\mathsf{T} Q = I$.

### Matrix norms

A vector norm induces a **matrix norm** (operator norm), the maximum stretching:

$$\|A\| = \max_{x \ne 0} \frac{\|Ax\|}{\|x\|} = \max_{\|x\| = 1} \|Ax\|.$$

For the standard norms,

$$\|A\|_1 = \max_j \sum_i |a_{ij}| \ (\text{largest column sum}), \qquad \|A\|_\infty = \max_i \sum_j |a_{ij}| \ (\text{largest row sum}), \qquad \|A\|_2 = \sigma_{\max}(A) = \sqrt{\lambda_{\max}(A^\mathsf{T} A)}.$$

The **Frobenius norm** $\|A\|_F = \big(\sum_{i,j} a_{ij}^2\big)^{1/2} = \sqrt{\operatorname{tr}(A^\mathsf{T} A)}$ is not induced but is cheap and orthogonally invariant, with $\|A\|_2 \le \|A\|_F \le \sqrt{\operatorname{rank}(A)}\,\|A\|_2$. Induced norms are **consistent**, $\|Ax\| \le \|A\|\,\|x\|$, and **submultiplicative**, $\|AB\| \le \|A\|\,\|B\|$. For orthogonal $Q$, $\|QA\|_2 = \|A\|_2$: orthogonal transformations are the stable building blocks of Module 2.

### The condition number of a linear system

Let $A$ be nonsingular and perturb $b$ to $b + \delta b$. Then $A\,\delta x = \delta b$, so $\delta x = A^{-1}\delta b$ and

$$\|\delta x\| \le \|A^{-1}\|\,\|\delta b\|.$$

From $b = Ax$, $\|b\| \le \|A\|\,\|x\|$, i.e. $1/\|x\| \le \|A\|/\|b\|$. Multiplying,

$$\frac{\|\delta x\|}{\|x\|} \le \|A\|\,\|A^{-1}\|\,\frac{\|\delta b\|}{\|b\|} = \kappa(A)\,\frac{\|\delta b\|}{\|b\|}.$$

$\kappa(A) = \|A\|\,\|A^{-1}\|$ is the **condition number** in the chosen norm. It is at least 1, since $1 = \|I\| = \|AA^{-1}\| \le \|A\|\,\|A^{-1}\|$, and $\kappa_2(A) = \sigma_{\max}/\sigma_{\min}$. The bound is attained for suitable $b$ and $\delta b$, so $\kappa(A)$ is the worst-case amplification of relative error. If the matrix is perturbed, $(A + \delta A)(x + \delta x) = b$, a similar argument gives to first order

$$\frac{\|\delta x\|}{\|x\|} \lesssim \kappa(A)\,\frac{\|\delta A\|}{\|A\|}.$$

Scaling $A$ changes nothing; what matters is the relative distance to singularity: $\min\{\|\delta A\|_2/\|A\|_2 : A + \delta A \text{ singular}\} = 1/\kappa_2(A)$. A matrix with $\kappa_2 = 10^{12}$ is within $10^{-12}$ of singular, which in double precision is singular for practical purposes.

### Floating-point arithmetic

IEEE 754 double precision stores $\pm 1.f \times 2^e$ with a 52-bit fraction and an 11-bit exponent: about 16 significant digits and a range of roughly $10^{-308}$ to $10^{308}$. The **unit roundoff** is

$$u = 2^{-53} \approx 1.11 \times 10^{-16},$$

and machine epsilon, the gap from 1 to the next number, is $\varepsilon_{\text{mach}} = 2^{-52} = 2u$. The **standard model** states that for $\circ \in \{+,-,\times,/\}$ and representable $x, y$,

$$\mathrm{fl}(x \circ y) = (x \circ y)(1 + \delta), \qquad |\delta| \le u,$$

barring overflow or underflow. Error analysis tracks how these $(1+\delta)$ factors accumulate. Addition is not associative: $(10^{16} + 1) - 10^{16} = 0$ but $10^{16} + (1 - 10^{16}) = 1$. **Cancellation**, subtracting nearly equal quantities, turns operand errors of size $u$ into a much larger relative error in the difference; it does not create error but exposes it.

```python
import numpy as np
u = np.finfo(np.float64).eps / 2          # unit roundoff, 1.11e-16
print(u, 1.0 + u == 1.0, 1.0 + 2*u == 1.0)  # 1.11e-16  True  False
print((1e16 + 1.0) - 1e16, 1e16 + (1.0 - 1e16))  # 0.0  1.0
x = np.float64(0.1) + np.float64(0.2)
print(x == 0.3, abs(x - 0.3) / 0.3 <= 2*u)   # False  True
```

### Forward error, backward error and stability

An algorithm asked for $y = f(x)$ returns $\hat y$. The **forward error** is $\|\hat y - y\|/\|y\|$. The **backward error** is the smallest input perturbation making the output exact:

$$\eta(\hat y) = \min\{\,\|\delta x\|/\|x\| : \hat y = f(x + \delta x)\,\}.$$

An algorithm is **backward stable** if it always returns $\hat y = f(x + \delta x)$ with $\|\delta x\|/\|x\| = O(u)$: the exact answer to nearly the right question. The two errors are linked by the condition number of $f$,

$$\text{forward error} \lesssim \kappa_f \times \text{backward error},$$

for a linear system $\|\hat x - x\|/\|x\| \lesssim \kappa(A)\,\eta(\hat x)$. A poor answer from a backward-stable algorithm means an ill-conditioned problem; a poor answer to a well-conditioned problem means an unstable algorithm.

The backward error is computable from the **residual** $r = b - A\hat x$. By the Rigal–Gaches theorem the smallest $\eta$ with $(A + \delta A)\hat x = b + \delta b$, $\|\delta A\| \le \eta\|A\|$, $\|\delta b\| \le \eta\|b\|$ is

$$\eta(\hat x) = \frac{\|r\|}{\|A\|\,\|\hat x\| + \|b\|}.$$

A small residual certifies a small backward error, whatever the forward error.

```python
import numpy as np
A = np.array([[1.0, 1.0], [1.0, 1.0001]]); b = np.array([2.0, 2.0001])
xhat = np.linalg.solve(A, b)                         # LU with partial pivoting
r = b - A @ xhat
eta = np.linalg.norm(r, np.inf) / (np.linalg.norm(A, np.inf) * np.linalg.norm(xhat, np.inf)
                                   + np.linalg.norm(b, np.inf))
print(f"kappa_inf = {np.linalg.cond(A, np.inf):.3e}, backward error = {eta:.2e}")
```

The backward error is of order $10^{-17}$, below $u$, so `solve` is backward stable, while $\kappa_\infty \approx 4 \times 10^4$ warns that about four digits of the solution may be untrustworthy.

### Why conditioning matters for data

Measured data carry relative errors of $10^{-3}$ to $10^{-6}$, far above $u$; with $\kappa(A) = 10^4$ and three-figure data, no digit need be correct. The cure is reformulation (rescaling, orthogonal bases, regularisation), the theme of Module 2.

## Key Ideas

- **Norms**: induced $1$-, $2$-, $\infty$-norms are the largest column sum, largest singular value and largest row sum.
- **Condition number**: $\kappa(A) = \|A\|\,\|A^{-1}\| \ge 1$ bounds relative error amplification; $\kappa_2 = \sigma_{\max}/\sigma_{\min}$.
- **Floating-point model**: $\mathrm{fl}(x \circ y) = (x \circ y)(1 + \delta)$, $|\delta| \le u = 2^{-53} \approx 1.1 \times 10^{-16}$; addition is not associative and cancellation exposes hidden error.
- **Backward error**: the smallest relative data perturbation explaining the computed answer; for $Ax = b$ it is $\|r\|/(\|A\|\|\hat x\| + \|b\|)$, computable a posteriori.
- **Backward stability**: backward error $O(u)$ for every input; LU with partial pivoting, Householder QR and the SVD qualify.
- **Forward error $\lesssim$ condition number $\times$ backward error**: separates the fault of the problem from the fault of the algorithm.

## Worked Examples

### Example 1 — Computing norms and the condition number

For $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, compute $\|A\|_1$, $\|A\|_\infty$, $\|A\|_F$, $\|A\|_2$ and $\kappa_2(A)$.

**Solution.** Column sums $4, 6$ give $\|A\|_1 = 6$; row sums $3, 7$ give $\|A\|_\infty = 7$. $\|A\|_F = \sqrt{1 + 4 + 9 + 16} = \sqrt{30} = 5.477$. For the 2-norm, $A^\mathsf{T} A = \begin{pmatrix} 10 & 14 \\ 14 & 20 \end{pmatrix}$ has characteristic equation $\lambda^2 - 30\lambda + 4 = 0$, so $\lambda = 15 \pm \sqrt{221} = 29.866,\ 0.134$. Hence $\sigma_{\max} = 5.465$, $\sigma_{\min} = 0.366$, $\|A\|_2 = 5.465$ and

$$\kappa_2(A) = \frac{5.465}{0.366} = 14.93.$$

Check: $\sigma_{\max}\sigma_{\min} = |\det A| = 2$, and $5.465 \times 0.366 = 2.00$. Also $\|A\|_2 \le \|A\|_F$, and $A^{-1} = \tfrac{1}{-2}\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$ has $\|A^{-1}\|_\infty = 3$, so $\kappa_\infty(A) = 7 \times 3 = 21$.

### Example 2 — An ill-conditioned system

Solve $Ax = b$ for $A = \begin{pmatrix} 1 & 1 \\ 1 & 1.0001 \end{pmatrix}$, $b = (2,\ 2.0001)^\mathsf{T}$, then perturb $b$ to $\tilde b = (2,\ 2.0002)^\mathsf{T}$ and compare the relative changes.

**Solution.** By inspection $x = (1, 1)^\mathsf{T}$. For $\tilde b$, subtracting the equations gives $0.0001\,\tilde x_2 = 0.0002$, so $\tilde x = (0, 2)^\mathsf{T}$. The relative data change is

$$\frac{\|\delta b\|_\infty}{\|b\|_\infty} = \frac{0.0001}{2.0001} = 5.0 \times 10^{-5},$$

while $\|\delta x\|_\infty / \|x\|_\infty = 1$, an amplification of $2 \times 10^4$. Since $A^{-1} = 10^4\begin{pmatrix} 1.0001 & -1 \\ -1 & 1 \end{pmatrix}$, $\|A^{-1}\|_\infty = 2.0001 \times 10^4$ and $\kappa_\infty(A) = 2.0001 \times 2.0001 \times 10^4 = 4.0 \times 10^4$. The observed amplification is half the bound, which is attained only for the most unfavourable $\delta b$.

### Example 3 — Backward and forward error of an approximate solution

For $A = \begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix}$ and $b = (1, 2)^\mathsf{T}$, a student reports $\hat x = (0.09,\ 0.64)^\mathsf{T}$. Compute the backward and forward errors and check the heuristic bound in the $\infty$-norm.

**Solution.** The exact solution is $x = (1/11,\ 7/11)^\mathsf{T} = (0.090909,\ 0.636364)^\mathsf{T}$. The residual is $r = b - A\hat x = (1 - 0.36 - 0.64,\ 2 - 0.09 - 1.92)^\mathsf{T} = (0,\ -0.01)^\mathsf{T}$. Attributing the discrepancy to $b$ alone, $\hat x$ solves $A\hat x = b - r$ exactly, with backward error

$$\eta_b = \frac{\|r\|_\infty}{\|b\|_\infty} = \frac{0.01}{2} = 5.0 \times 10^{-3}.$$

(Rigal–Gaches, sharing the perturbation with $A$, gives $0.01/(5 \times 0.64 + 2) = 1.92 \times 10^{-3}$.) The forward error is $0.003636/0.636364 = 5.71 \times 10^{-3}$. With $A^{-1} = \tfrac{1}{11}\begin{pmatrix} 3 & -1 \\ -1 & 4 \end{pmatrix}$, $\|A^{-1}\|_\infty = 5/11$ and $\kappa_\infty(A) = 25/11 = 2.27$, so the bound is $2.27 \times 5.0 \times 10^{-3} = 1.14 \times 10^{-2}$, comfortably above the actual $5.7 \times 10^{-3}$. (The tighter $\|A^{-1}\|_\infty\|r\|_\infty/\|x\|_\infty = 7.1 \times 10^{-3}$.) A good solution of a well-conditioned problem.

## Common Misconceptions

- **"A small residual means an accurate solution."** It means a small backward error; the forward error can be $\kappa(A)$ times larger, so a residual of $10^{-16}$ is compatible with a fourth-digit error.
- **"A small determinant means ill-conditioning."** $\det(10^{-3} I_{10}) = 10^{-30}$, yet $\kappa(10^{-3} I) = 1$. Conditioning is the ratio of extreme singular values, not $\det A$.
- **"Floating-point error is random noise of size $10^{-16}$."** Cancellation and ill-conditioning amplify the per-operation $u$; the final error is structured and analysable.
- **"A well-conditioned matrix guarantees an accurate answer."** Conditioning belongs to the problem, stability to the algorithm; elimination without pivoting or classical Gram–Schmidt can ruin a well-conditioned problem.
- **"The condition number depends on the norm, so it is not meaningful."** Values differ by factors depending on $n$ (for instance $\kappa_2/n \le \kappa_\infty \le n\kappa_2$), so the order of magnitude is norm-independent.

## Connections

- The ill-conditioned Vandermonde matrix explains unstable equispaced interpolation (Numerical Methods, Lesson m1-l2); Chebyshev nodes lower $\kappa$.
- The $O(u/h)$ round-off in finite-difference derivatives (Numerical Methods, Lesson m2-l1) is cancellation.
- Stiff systems in Differential Equations and normal modes in Mechanics have eigenvalues spanning many orders of magnitude, hence large $\kappa$.
- In Astrophysics, orbit-fitting design matrices with $\kappa \sim 10^8$ limit how many fitted digits are real.
- $\|Qx\|_2 = \|x\|_2$ is why unitary evolution preserves probability in Introduction to Quantum Mechanics, and why orthogonal factorisations are backward stable.

## Quick Check

1. State the closed forms of $\|A\|_1$, $\|A\|_\infty$ and $\|A\|_2$ and compute the first two for $A = \begin{pmatrix} 2 & -3 \\ 0 & 5 \end{pmatrix}$.
2. Derive $\|\delta x\|/\|x\| \le \kappa(A)\,\|\delta b\|/\|b\|$ and explain why $\kappa(A) \ge 1$ in any induced norm.
3. What is the unit roundoff in double precision, and why does $(1 + u) - 1$ evaluate to zero while $(1 + 2u) - 1$ does not?
4. Give the backward error of a linear system in terms of the residual. Why is it a property of the solution, not the algorithm?
5. With $\kappa_2(A) = 10^{10}$ and $b$ known to six figures, how many correct digits can any algorithm deliver?

## Takeaway

- Induced norms are consistent and submultiplicative; orthogonal matrices have 2-norm 1.
- $\kappa(A)$ is the worst-case amplification of relative perturbations; $1/\kappa_2(A)$ is the distance to singularity.
- Double precision rounds every operation with relative error at most $u \approx 1.1 \times 10^{-16}$; cancellation exposes accumulated error.
- Backward error measures how nearly the answer solves the given problem and is computable from the residual; backward-stable algorithms achieve $O(u)$.
- Forward error $\lesssim$ condition number $\times$ backward error, so a poor answer from a stable algorithm indicts the problem, not the method.
