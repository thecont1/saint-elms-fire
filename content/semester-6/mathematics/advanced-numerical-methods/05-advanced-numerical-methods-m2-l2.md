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
lessonId: advanced-numerical-methods-m2-l2
lessonName: Hessenberg Reduction, the QR Algorithm and Jacobi Rotations
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 5
prerequisites:
  - advanced-numerical-methods-m2-l1
  - linear-algebra-m2-l2
  - mathematics-lab-using-python-ii-m1-l1
learningObjectives:
  - Show that the QR iteration $A_k = Q_kR_k$, $A_{k+1} = R_kQ_k$ is an orthogonal similarity equivalent to simultaneous power iteration, and state its convergence rate.
  - Reduce a symmetric matrix to tridiagonal form with Householder reflectors and explain why Hessenberg form makes a QR step cost $O(n^2)$ (or $O(n)$ when tridiagonal).
  - Describe shifted QR with Rayleigh and Wilkinson shifts and the deflation test, and give the overall operation count.
  - Derive the Jacobi rotation angle $\tan 2\theta = 2a_{pq}/(a_{qq} - a_{pp})$ and prove that each rotation reduces the off-diagonal norm by $2a_{pq}^2$.
concepts:
  - QR algorithm
  - Orthogonal similarity
  - Hessenberg form
  - Householder reflector
  - Givens rotation
  - Wilkinson shift
  - Jacobi eigenvalue method
tags:
  - mathematics
  - advanced-numerical-methods
  - qr-algorithm
  - symmetric-eigenproblem
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Hessenberg Reduction, the QR Algorithm and Jacobi Rotations

## Overview

To find all eigenpairs at once we iterate on a whole orthonormal basis, and written in terms of the matrix rather than the vectors that process becomes the QR algorithm: factorise $A = QR$, form $RQ$, repeat. Each step is an orthogonal similarity, so eigenvalues are preserved exactly and, by the backward stability of orthogonal transformations (Lesson m1-l1), the computed eigenvalues are exact for a matrix within $O(u)\|A\|$ of the original. Two refinements make this the workhorse behind `numpy.linalg.eigh`: Householder reduction to Hessenberg form (tridiagonal when $A$ is symmetric), which cuts each QR step from $O(n^3)$ to $O(n^2)$, and shifts borrowed from Rayleigh quotient iteration, which make convergence cubic. The lesson closes with Jacobi's rotation method.

## Learning Path

- **What you should already know**: power iteration, the Rayleigh quotient and shifts (Lesson m2-l1); orthogonal matrices and the QR factorisation (Linear Algebra, Lesson m2-l2); `numpy.linalg.qr` and `eigh` (Mathematics Lab using Python II, Lesson m1-l1).
- **What this lesson adds**: QR iteration as simultaneous power iteration; Householder reduction to Hessenberg and tridiagonal form; Givens rotations; Rayleigh and Wilkinson shifts and deflation; the Jacobi rotation method.
- **What later lessons this will unlock**: Lanczos and Arnoldi (Lesson m2-l3) produce small tridiagonal or Hessenberg matrices whose eigenvalues this lesson's QR algorithm finds; Householder QR reappears in least squares (Lesson m3-l3).

## Core Explanation

### From simultaneous iteration to the QR algorithm

Apply power iteration to $n$ orthonormal vectors at once: multiply $Q^{(k)}$ by $A$, then re-orthonormalise, $AQ^{(k)} = Q^{(k+1)}R^{(k+1)}$. The first column tends to $v_1$; the second, kept orthogonal to the first, tends to $v_2$; and so on, provided $|\lambda_1| > |\lambda_2| > \cdots > |\lambda_n|$. Hence $(Q^{(k)})^\mathsf{T}AQ^{(k)}$ tends to upper triangular **Schur form**, diagonal when $A$ is symmetric.

The **QR algorithm** is the same process written without storing the basis:

$$A_k = Q_kR_k, \qquad A_{k+1} = R_kQ_k = Q_k^\mathsf{T}A_kQ_k.$$

Each step is an **orthogonal similarity**, so every $A_k$ has the eigenvalues of $A$. Induction shows $A^k = (Q_1\cdots Q_k)(R_k\cdots R_1)$, identifying $Q_1\cdots Q_k$ with the basis $Q^{(k)}$ of simultaneous iteration. The subdiagonal entry $(A_k)_{i+1,i}$ decays like $|\lambda_{i+1}/\lambda_i|^k$, the linear rate of power iteration; in Example 1 the $(1, 1)$ entries $2.8, 2.9756$ are precisely the Rayleigh quotients of Lesson m2-l1. Unshifted QR costs $O(n^3)$ per step and converges slowly; the remedies are Hessenberg reduction and shifts.

### Householder reduction to Hessenberg form

A matrix is **upper Hessenberg** if $a_{ij} = 0$ for $i > j + 1$. The **Householder reflector** for a vector $x$,

$$H = I - 2\frac{vv^\mathsf{T}}{v^\mathsf{T}v}, \qquad v = x + \operatorname{sign}(x_1)\|x\|_2\,e_1,$$

is symmetric and orthogonal and maps $x$ to $-\operatorname{sign}(x_1)\|x\|e_1$; the sign choice avoids cancellation. A reflector applied to rows $2, \ldots, n$ and then, for similarity, to columns $2, \ldots, n$ zeros the entries below $a_{21}$ in column 1 without disturbing them again. Repeating on columns $2, \ldots, n - 2$ with ever smaller reflectors gives

$$Q_0^\mathsf{T}AQ_0 = H_{\text{ess}}, \qquad Q_0 = H_1H_2\cdots H_{n-2},$$

in about $\tfrac{10}{3}n^3$ flops. One cannot reach triangular form this way: zeroing $a_{21}$ too would need a reflector acting on row 1, whose column counterpart refills the zeros. For symmetric $A$ the Hessenberg form is **tridiagonal** and the cost halves to $\tfrac{4}{3}n^3$. Crucially, Hessenberg form is **preserved by QR steps**: if $A_k$ is Hessenberg so are $Q_k$ and $R_kQ_k$, so the reduction is paid for once.

### Givens rotations and the cost of a QR step

The QR factorisation of a Hessenberg matrix needs only $n - 1$ **Givens rotations**, each acting on rows $i, i + 1$ to annihilate one subdiagonal entry,

$$\begin{pmatrix} c & s \\ -s & c \end{pmatrix}, \qquad c = \frac{a_{ii}}{\sqrt{a_{ii}^2 + a_{i+1,i}^2}}, \quad s = \frac{a_{i+1,i}}{\sqrt{a_{ii}^2 + a_{i+1,i}^2}}.$$

Each rotation touches $O(n)$ entries, so a QR step costs $O(n^2)$ on a Hessenberg matrix and $O(n)$ on a tridiagonal one. The symmetric eigenvalue problem thus costs $\tfrac{4}{3}n^3$ for tridiagonalisation plus a negligible $O(n^2)$ for all QR steps; accumulating eigenvectors raises the total to about $9n^3$.

### Shifts and deflation

The link with Rayleigh quotient iteration suggests shifting. The **shifted QR step**

$$A_k - \mu_kI = Q_kR_k, \qquad A_{k+1} = R_kQ_k + \mu_kI$$

is still an orthogonal similarity of $A_k$. With the **Rayleigh shift** $\mu_k = (A_k)_{nn}$, the last row behaves like Rayleigh quotient iteration on $e_n$, so for symmetric matrices $(A_k)_{n,n-1} \to 0$ cubically. The Rayleigh shift stalls on $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, where $0$ lies midway between $\pm 1$; the **Wilkinson shift**, the eigenvalue of the trailing $2 \times 2$ block closer to $a_{nn}$, cures this and is provably convergent for symmetric tridiagonal matrices. When $|(A_k)_{n,n-1}| \le u\,(|a_{n-1,n-1}| + |a_{nn}|)$ the entry is set to zero, $a_{nn}$ is accepted, and the algorithm **deflates** to the leading block. Two or three steps per eigenvalue are typical.

### The Jacobi method for symmetric matrices

Jacobi's method applies plane rotations directly to $A$. For symmetric $A$ and a pair $p < q$, the rotation $J$ with $J_{pp} = J_{qq} = c$, $J_{pq} = s$, $J_{qp} = -s$ gives $A' = J^\mathsf{T}AJ$ with

$$a'_{pq} = (c^2 - s^2)a_{pq} + cs\,(a_{pp} - a_{qq}) = a_{pq}\cos 2\theta + \tfrac{1}{2}(a_{pp} - a_{qq})\sin 2\theta.$$

Choosing

$$\tan 2\theta = \frac{2a_{pq}}{a_{qq} - a_{pp}}, \qquad |\theta| \le \pi/4,$$

annihilates it. The Frobenius norm is invariant under orthogonal similarity and only rows and columns $p, q$ change, so the diagonal's sum of squares grows by exactly $2a_{pq}^2$ and

$$\text{off}(A')^2 = \text{off}(A)^2 - 2a_{pq}^2.$$

Zeroed entries may refill, but the off-diagonal mass decreases monotonically. The **cyclic Jacobi method** sweeps all $n(n-1)/2$ pairs in order; convergence becomes quadratic, and five to ten sweeps at $O(n^3)$ each suffice. Jacobi is slower than tridiagonal QR but trivially parallel, and it computes small eigenvalues of positive definite matrices to high relative accuracy.

The script tridiagonalises the matrix of Example 2, finds its eigenvalues by Rayleigh-shifted QR with deflation, then runs cyclic Jacobi sweeps. Expect the tridiagonal matrix of Example 2, eigenvalues agreeing with `eigvalsh` to $10^{-15}$, and $\text{off}(A)$ falling from $3.4$ to below $10^{-10}$ in three sweeps.

```python
import numpy as np

A = np.array([[4.0, 1.0, 2.0], [1.0, 3.0, 0.0], [2.0, 0.0, 1.0]])
n = len(A)

T = A.copy()                                   # Householder reduction to tridiagonal form
for k in range(n - 2):
    x = T[k + 1:, k].copy()
    v = x.copy(); v[0] += np.copysign(np.linalg.norm(x), x[0]); v /= np.linalg.norm(v)
    H = np.eye(n); H[k + 1:, k + 1:] -= 2.0 * np.outer(v, v)
    T = H @ T @ H                              # H is symmetric and orthogonal
print(np.round(T, 4))

def qr_eigs(T, tol=1e-14):                     # Rayleigh-shifted QR with deflation
    T, eigs, m = T.copy(), [], len(T)
    while m > 1:
        while abs(T[m - 1, m - 2]) > tol * (abs(T[m - 1, m - 1]) + abs(T[m - 2, m - 2])):
            mu = T[m - 1, m - 1]
            Q, R = np.linalg.qr(T[:m, :m] - mu * np.eye(m))
            T[:m, :m] = R @ Q + mu * np.eye(m)
        eigs.append(T[m - 1, m - 1]); m -= 1
    return np.sort(eigs + [T[0, 0]])
print(qr_eigs(T), np.linalg.eigvalsh(A))

B = A.copy()                                   # cyclic Jacobi sweeps
for sweep in range(4):
    for p, q in [(0, 1), (0, 2), (1, 2)]:
        theta = 0.5 * np.arctan2(2 * B[p, q], B[q, q] - B[p, p])
        J = np.eye(n); J[p, p] = J[q, q] = np.cos(theta); J[p, q] = np.sin(theta); J[q, p] = -J[p, q]
        B = J.T @ B @ J
    print(sweep + 1, f"off(A) = {np.sqrt(np.sum(B**2) - np.sum(np.diag(B)**2)):.2e}")
```

## Key Ideas

- **QR iteration** $A_{k+1} = R_kQ_k = Q_k^\mathsf{T}A_kQ_k$ is simultaneous power iteration in disguise; subdiagonal entries decay like $|\lambda_{i+1}/\lambda_i|^k$.
- **Hessenberg reduction** by $n - 2$ Householder reflectors costs $\tfrac{10}{3}n^3$ ($\tfrac{4}{3}n^3$ when symmetric), is done once, and is preserved by QR steps.
- **Givens rotations** make a QR step $O(n^2)$ on Hessenberg and $O(n)$ on tridiagonal matrices.
- **Shifts**: the Rayleigh shift gives cubic convergence, the Wilkinson shift guarantees it; deflation peels off converged eigenvalues.
- **Jacobi rotations** zero one entry at a time, reducing $\text{off}(A)^2$ by $2a_{pq}^2$ per rotation.

## Worked Examples

### Example 1 — Two unshifted QR steps

Apply the QR algorithm to $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ and compare with power iteration.

**Solution.** The first column has norm $\sqrt{5}$, so $Q_1 = \frac{1}{\sqrt{5}}\begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}$, $R_1 = Q_1^\mathsf{T}A = \frac{1}{\sqrt{5}}\begin{pmatrix} 5 & 4 \\ 0 & 3 \end{pmatrix}$ and

$$A_1 = R_1Q_1 = \frac{1}{5}\begin{pmatrix} 5 & 4 \\ 0 & 3 \end{pmatrix}\begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 2.8 & 0.6 \\ 0.6 & 1.2 \end{pmatrix},$$

with trace $4$ and determinant $3$ preserved. The second step gives

$$A_2 = \begin{pmatrix} 2.9756 & 0.2195 \\ 0.2195 & 1.0244 \end{pmatrix}.$$

The diagonal $2.8, 2.9756$ reproduces the Rayleigh quotients of Lesson m2-l1, and the off-diagonal entries $1, 0.6, 0.2195$ shrink by ratios tending to $\lambda_2/\lambda_1 = 1/3$.

### Example 2 — Householder tridiagonalisation of a $3 \times 3$ matrix

Reduce $A = \begin{pmatrix} 4 & 1 & 2 \\ 1 & 3 & 0 \\ 2 & 0 & 1 \end{pmatrix}$ to tridiagonal form.

**Solution.** Below the diagonal in column 1 is $x = (1, 2)$, $\|x\| = \sqrt{5}$, so $v = (1 + \sqrt{5}, 2)$ and the reflector is

$$H_2 = I - 2\frac{vv^\mathsf{T}}{v^\mathsf{T}v} = \frac{1}{\sqrt{5}}\begin{pmatrix} -1 & -2 \\ -2 & 1 \end{pmatrix}, \qquad H_2x = (-\sqrt{5}, 0).$$

With $Q_0 = \operatorname{diag}(1, H_2)$, the first row and column become $(4, -\sqrt{5}, 0)$, and the trailing block $B = \operatorname{diag}(3, 1)$ becomes $H_2BH_2 = \tfrac{1}{5}\begin{pmatrix} 7 & 4 \\ 4 & 13 \end{pmatrix}$. Hence

$$T = Q_0^\mathsf{T}AQ_0 = \begin{pmatrix} 4 & -2.2361 & 0 \\ -2.2361 & 1.4 & 0.8 \\ 0 & 0.8 & 2.6 \end{pmatrix},$$

with trace $8$ preserved. The characteristic polynomial $\lambda^3 - 8\lambda^2 + 14\lambda + 1$ has roots $5.347, 2.722, -0.069$, which shifted QR on $T$ delivers.

### Example 3 — One Jacobi rotation

Apply a Jacobi rotation in the $(1, 2)$ plane to the $T$ of Example 2 and check the decrease of $\text{off}(T)^2$.

**Solution.** With $a_{pp} = 4$, $a_{qq} = 1.4$, $a_{pq} = -2.2361$: $\tan 2\theta = 2(-2.2361)/(1.4 - 4) = 1.7201$, so $2\theta = 59.83°$, $\theta = 29.91°$, $c = 0.8668$, $s = 0.4987$. The new diagonal entries are

$$a'_{pp} = c^2a_{pp} - 2cs\,a_{pq} + s^2a_{qq} = 3.0055 + 1.9332 + 0.3482 = 5.2869, \qquad a'_{qq} = 0.9948 - 1.9332 + 1.0520 = 0.1136,$$

summing to $5.4 = a_{pp} + a_{qq}$. Column 3 is mixed: $a'_{13} = c\,a_{13} - s\,a_{23} = -0.3990$ and $a'_{23} = s\,a_{13} + c\,a_{23} = 0.6934$, so the $(1, 3)$ zero has refilled. Before, $\text{off}(T)^2 = 2(2.2361^2 + 0.8^2) = 11.28$; after, $2(0.3990^2 + 0.6934^2) = 1.28$, exactly $2a_{pq}^2 = 10$ less. The diagonal $(5.287, 0.114, 2.6)$ is already within $0.2$ of the eigenvalues.

## Common Misconceptions

- **"The QR algorithm computes the QR factorisation of $A$."** It uses a factorisation at every step but computes eigenvalues; the sequence $A_k$ of similar matrices is the object.
- **"Householder reduction can be pushed to triangular form."** Zeroing the subdiagonal needs reflectors acting on row 1, whose column counterparts undo the zeros; a finite eigenvalue algorithm would contradict Abel–Ruffini.
- **"Shifts change the eigenvalues."** The shift is subtracted before and added back after the factorisation; $A_{k+1}$ stays orthogonally similar to $A_k$.
- **"Jacobi rotations zero entries permanently."** Later rotations refill earlier zeros; what decreases monotonically is the off-diagonal norm, by $2a_{pq}^2$ per rotation.

## Connections

- `numpy.linalg.eigh` calls LAPACK's tridiagonalisation and implicit QR, so every normal-mode and Schrödinger calculation in the programme (Waves and Optics; Introduction to Quantum Mechanics) runs this lesson's algorithms.
- The inertia tensor in Mechanics and the stress tensor in Solid State Physics are $3 \times 3$ symmetric matrices whose principal axes a few Jacobi rotations find.
- Householder QR of a tall matrix is the stable way to solve least-squares problems (Lesson m3-l3), avoiding the squared condition number of the normal equations.
- The Schur form, not the Jordan form, is what one computes for a nonsymmetric Jacobian (Linear Algebra, Lesson m3-l1), because Jordan structure is not a continuous function of the matrix.

## Quick Check

1. Prove that $A_{k+1} = R_kQ_k$ is orthogonally similar to $A_k$.
2. Why does a QR step on an upper Hessenberg matrix return an upper Hessenberg matrix?
3. Compute the Householder vector $v$ that maps $x = (3, 4)$ to a multiple of $e_1$.
4. Why does the Rayleigh shift fail on $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, and what does the Wilkinson shift do instead?
5. Starting from $\text{off}(A)^2 = 10$, a Jacobi rotation annihilates $a_{pq} = 1.5$. What is $\text{off}(A')^2$?

## Takeaway

- The QR algorithm is simultaneous power iteration written as orthogonal similarities; it converges to Schur form, diagonal for symmetric matrices.
- Householder reduction to Hessenberg or tridiagonal form is done once and makes each QR step cheap.
- Shifts give cubic convergence and deflation extracts eigenvalues one by one; the whole symmetric spectrum costs about $\tfrac{4}{3}n^3$ flops.
- Jacobi rotations reduce the off-diagonal norm by $2a_{pq}^2$ each; slower, but simple, parallel and accurate for small eigenvalues.
