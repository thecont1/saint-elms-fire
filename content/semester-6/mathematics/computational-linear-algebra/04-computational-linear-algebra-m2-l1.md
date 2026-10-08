***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: computational-linear-algebra
courseName: Computational Linear Algebra (Math Elective II, A)
moduleId: computational-linear-algebra-module-2
moduleName: Orthogonality, Least Squares and the SVD
lessonId: computational-linear-algebra-m2-l1
lessonName: QR Factorisation by Gram–Schmidt, Householder and Givens
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - computational-linear-algebra-m1-l3
  - linear-algebra-m2-l2
learningObjectives:
  - Compute the thin QR factorisation of a tall matrix by classical and modified Gram–Schmidt and explain why their loss of orthogonality scales as $u\kappa(A)^2$ and $u\kappa(A)$ respectively.
  - Construct a Householder reflector $H = I - 2vv^\mathsf{T}/v^\mathsf{T}v$ that maps a vector to a multiple of $e_1$, and apply it to compute $R$ column by column.
  - Construct a Givens rotation that zeroes one entry and state when rotations are preferred to reflectors.
  - Compare the flop counts $2mn^2$, $2mn^2 - \tfrac{2}{3}n^3$ and $3mn^2 - n^3$ and the stability of the three algorithms.
concepts:
  - QR factorisation
  - Classical and modified Gram–Schmidt
  - Loss of orthogonality
  - Householder reflector
  - Givens rotation
  - Orthogonal invariance of the 2-norm
tags:
  - mathematics
  - computational-linear-algebra
  - qr-factorisation
  - orthogonalisation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# QR Factorisation by Gram–Schmidt, Householder and Givens

## Overview

Module 2 turns to rectangular problems, least squares and the SVD, and its central tool is the **QR factorisation** $A = QR$ with $Q$ orthogonal and $R$ upper triangular. Orthogonal matrices preserve the 2-norm, so they neither amplify errors nor disturb conditioning. Gram–Schmidt orthogonalises the columns one at a time; it is the textbook method, but its classical form loses orthogonality catastrophically on ill-conditioned matrices, and even the modified form loses it in proportion to $\kappa(A)$. Householder reflections apply orthogonal transformations to $A$ itself and keep $Q$ orthogonal to working precision whatever the conditioning. Givens rotations zero one entry at a time and suit sparse matrices and updates. This lesson develops all three and compares their cost and stability.

## Learning Path

- **What you should already know**: orthonormal bases, projections and Gram–Schmidt (Linear Algebra, Lesson m2-l2); flop counting and backward stability (Lessons m1-l1 to m1-l3).
- **What this lesson adds**: thin and full QR; classical versus modified Gram–Schmidt and their loss-of-orthogonality bounds; Householder reflectors and Givens rotations; the cost comparison.
- **What later lessons this will unlock**: least squares by QR and its conditioning advantage over the normal equations (Lesson m2-l2); the Golub–Kahan bidiagonalisation behind the SVD (Lesson m2-l3); the Arnoldi process inside GMRES, which is Gram–Schmidt on Krylov vectors (Lesson m3-l1).

## Core Explanation

### The factorisation

Let $A \in \mathbb{R}^{m \times n}$ with $m \ge n$ and full column rank. The **full QR factorisation** is $A = QR$ with $Q \in \mathbb{R}^{m \times m}$ orthogonal and $R \in \mathbb{R}^{m \times n}$ upper triangular; the **thin** (or reduced) factorisation keeps only the first $n$ columns of $Q$ and the top $n \times n$ block of $R$,

$$A = \hat Q \hat R, \qquad \hat Q^\mathsf{T} \hat Q = I_n, \qquad \hat R \ \text{upper triangular}.$$

The columns of $\hat Q$ span the column space of $A$, and with $r_{jj} > 0$ the thin factorisation is unique. Because $\|Qx\|_2 = \|x\|_2$, we have $\|A\|_2 = \|R\|_2$ and $\kappa_2(A) = \kappa_2(R)$: the factorisation changes the problem into a triangular one with exactly the same conditioning, which is what LU could not promise.

### Classical and modified Gram–Schmidt

Reading $A = \hat Q \hat R$ column by column, $a_j = \sum_{i \le j} r_{ij} q_i$, so $q_j$ is the normalised component of $a_j$ orthogonal to $q_1, \dots, q_{j-1}$. **Classical Gram–Schmidt** (CGS) computes

$$r_{ij} = q_i^\mathsf{T} a_j \ (i < j), \qquad v_j = a_j - \sum_{i<j} r_{ij} q_i, \qquad r_{jj} = \|v_j\|_2, \qquad q_j = v_j / r_{jj}.$$

**Modified Gram–Schmidt** (MGS) computes each coefficient from the partially orthogonalised vector:

$$v \leftarrow a_j; \quad \text{for } i = 1, \dots, j-1: \ r_{ij} = q_i^\mathsf{T} v, \ v \leftarrow v - r_{ij} q_i.$$

In exact arithmetic the two are identical. In floating point they are not: CGS projects onto directions $q_i$ that are already slightly non-orthogonal, and the errors compound, while MGS removes each component from the current residual and is self-correcting to first order. Both cost $2mn^2$ flops. The computed $\hat Q$ satisfies

$$\|I - \hat Q^\mathsf{T} \hat Q\|_2 \lesssim u\,\kappa_2(A)^2 \ (\text{CGS}), \qquad \|I - \hat Q^\mathsf{T} \hat Q\|_2 \lesssim u\,\kappa_2(A) \ (\text{MGS}),$$

so CGS loses all orthogonality once $\kappa_2(A) \gtrsim 10^8$. Both nevertheless give a small residual $\|A - \hat Q \hat R\|$; the trouble is with $\hat Q$, not with the product. Re-orthogonalising each column once more ("twice is enough") restores full orthogonality at double the cost.

### Householder reflectors

A **Householder reflector** is

$$H = I - 2\frac{vv^\mathsf{T}}{v^\mathsf{T}v}, \qquad H = H^\mathsf{T} = H^{-1},$$

the reflection across the hyperplane orthogonal to $v$. Given $x \ne 0$, choosing $v = x + \operatorname{sign}(x_1)\|x\|_2 e_1$ gives $Hx = -\operatorname{sign}(x_1)\|x\|_2 e_1$; the sign choice avoids cancellation in $v_1$. Householder QR applies $H_1$ to zero the first column below the diagonal, then $H_2$ acting on rows $2$ to $m$ to zero the second column, and so on:

$$H_n \cdots H_2 H_1 A = R, \qquad Q = H_1 H_2 \cdots H_n.$$

The matrices $H_k$ are never formed; applying $H$ to a vector costs $4m$ flops via $Hz = z - 2v(v^\mathsf{T}z)/(v^\mathsf{T}v)$, and the total is $2mn^2 - \tfrac{2}{3}n^3$ flops, which equals $\tfrac{4}{3}n^3$ for square $A$, twice LU. The $v_k$ are stored in the zeroed part of $A$ and $Q$ is kept implicitly. Because every step is an orthogonal transformation applied with $O(u)$ error, the method is **backward stable**: the computed $\hat R$ is the exact triangular factor of $A + \delta A$ with $\|\delta A\|_2 \le c\,mn\,u\,\|A\|_2$, and the computed $\hat Q$ is orthogonal to working precision independently of $\kappa(A)$.

### Givens rotations

A **Givens rotation** acts in the plane of coordinates $(i, k)$:

$$G = \begin{pmatrix} c & s \\ -s & c \end{pmatrix}, \qquad c = \frac{a}{\sqrt{a^2 + b^2}}, \quad s = \frac{b}{\sqrt{a^2 + b^2}}, \qquad G\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} \sqrt{a^2+b^2} \\ 0 \end{pmatrix},$$

embedded in the identity. One rotation zeroes a single entry and changes only two rows at a cost of $6$ flops per column pair. Reducing a dense $m \times n$ matrix costs $3mn^2 - n^3$ flops, half again the Householder cost. Rotations win when most entries are already zero: a Hessenberg matrix needs only $n - 1$ rotations, and adding or deleting a row of a least-squares problem updates an existing $R$ in $O(n^2)$ instead of refactoring. Rotations on disjoint row pairs commute, so they parallelise.

| Method | Flops ($m \times n$) | $\|I - \hat Q^\mathsf{T}\hat Q\|$ | Best use |
|---|---|---|---|
| Classical GS | $2mn^2$ | $u\kappa^2$ | never in practice |
| Modified GS | $2mn^2$ | $u\kappa$ | Krylov methods, $Q$ needed explicitly |
| Householder | $2mn^2 - \tfrac{2}{3}n^3$ | $u$ | dense least squares, default |
| Givens | $3mn^2 - n^3$ | $u$ | sparse, Hessenberg, updating |

```python
import numpy as np

def gram_schmidt(A, modified=True):
    m, n = A.shape
    Q = np.zeros((m, n)); R = np.zeros((n, n))
    for j in range(n):
        v = A[:, j].copy()
        for i in range(j):
            R[i, j] = Q[:, i] @ (v if modified else A[:, j])
            v -= R[i, j] * Q[:, i]
        R[j, j] = np.linalg.norm(v)
        Q[:, j] = v / R[j, j]
    return Q, R

eps = 1e-8
A = np.vstack([np.ones(3), eps * np.eye(3)])           # Lauchli matrix, kappa ~ 1.7e8
for name, (Q, R) in {"CGS": gram_schmidt(A, False), "MGS": gram_schmidt(A, True),
                     "Householder": np.linalg.qr(A)}.items():
    print(f"{name:12s} |I - Q^T Q| = {np.linalg.norm(np.eye(3) - Q.T @ Q):.1e}",
          f"  |A - QR| = {np.linalg.norm(A - Q @ R):.1e}")
# CGS ~ 5e-01, MGS ~ 1e-08, Householder ~ 1e-16; all residuals ~ 1e-16
```

## Key Ideas

- **QR**: $A = QR$ with $Q$ orthogonal and $R$ triangular; $\kappa_2(R) = \kappa_2(A)$, so the reduction to triangular form costs nothing in conditioning.
- **CGS versus MGS**: same arithmetic in exact precision, but orthogonality is lost as $u\kappa^2$ for classical and $u\kappa$ for modified Gram–Schmidt; both cost $2mn^2$.
- **Householder**: $H = I - 2vv^\mathsf{T}/v^\mathsf{T}v$ zeroes a whole column; $n$ reflectors give $R$ in $2mn^2 - \tfrac{2}{3}n^3$ flops with $\hat Q$ orthogonal to $O(u)$.
- **Givens**: a $2 \times 2$ rotation zeroes one entry; costlier for dense matrices, ideal for sparse, Hessenberg and updating problems.
- **Residual versus orthogonality**: all three give $\|A - \hat Q\hat R\| = O(u)\|A\|$; only Householder and Givens guarantee an orthogonal $\hat Q$.

## Worked Examples

### Example 1 — Thin QR by Gram–Schmidt

Compute the thin QR factorisation of $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \\ 0 & 1 \end{pmatrix}$.

**Solution.** $a_1 = (1, 1, 0)^\mathsf{T}$ has $r_{11} = \sqrt{2}$, so $q_1 = (1, 1, 0)^\mathsf{T}/\sqrt{2}$. Then $r_{12} = q_1^\mathsf{T} a_2 = 1/\sqrt{2}$ and

$$v_2 = a_2 - r_{12} q_1 = (1, 0, 1)^\mathsf{T} - (\tfrac{1}{2}, \tfrac{1}{2}, 0)^\mathsf{T} = (\tfrac{1}{2}, -\tfrac{1}{2}, 1)^\mathsf{T}, \qquad r_{22} = \|v_2\|_2 = \sqrt{\tfrac{3}{2}} = \frac{\sqrt{6}}{2},$$

so $q_2 = (1, -1, 2)^\mathsf{T}/\sqrt{6}$. Hence

$$\hat Q = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{6} \\ 1/\sqrt{2} & -1/\sqrt{6} \\ 0 & 2/\sqrt{6} \end{pmatrix}, \qquad \hat R = \begin{pmatrix} \sqrt{2} & 1/\sqrt{2} \\ 0 & \sqrt{6}/2 \end{pmatrix}.$$

Check: $q_1^\mathsf{T} q_2 = (1 - 1 + 0)/\sqrt{12} = 0$ and $r_{12}q_1 + r_{22}q_2 = a_2$.

### Example 2 — One Householder reflector and one Givens rotation

Compute the QR factorisation of $A = \begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}$ by a Householder reflector, then repeat with a Givens rotation.

**Solution.** The first column is $x = (3, 4)^\mathsf{T}$ with $\|x\|_2 = 5$ and $x_1 > 0$, so $v = x + 5e_1 = (8, 4)^\mathsf{T}$, $v^\mathsf{T}v = 80$, and

$$H = I - \frac{2}{80}\begin{pmatrix} 64 & 32 \\ 32 & 16 \end{pmatrix} = \begin{pmatrix} -0.6 & -0.8 \\ -0.8 & 0.6 \end{pmatrix}.$$

Then $Hx = (-1.8 - 3.2,\ -2.4 + 2.4)^\mathsf{T} = (-5, 0)^\mathsf{T}$ as designed, and $H(1, 2)^\mathsf{T} = (-0.6 - 1.6,\ -0.8 + 1.2)^\mathsf{T} = (-2.2, 0.4)^\mathsf{T}$. So $R = \begin{pmatrix} -5 & -2.2 \\ 0 & 0.4 \end{pmatrix}$ and $Q = H$. Check: $\det R = -2 = \det H \det A$.

Givens: $c = 3/5$, $s = 4/5$, $G = \begin{pmatrix} 0.6 & 0.8 \\ -0.8 & 0.6 \end{pmatrix}$, and $GA = \begin{pmatrix} 5 & 2.2 \\ 0 & 0.4 \end{pmatrix}$, so $Q = G^\mathsf{T}$, $R = GA$. The reflector has determinant $-1$, the rotation $+1$, which accounts for the sign difference.

### Example 3 — Loss of orthogonality in classical Gram–Schmidt

Apply CGS and MGS by hand to the Läuchli matrix $A = \begin{pmatrix} 1 & 1 & 1 \\ \varepsilon & 0 & 0 \\ 0 & \varepsilon & 0 \\ 0 & 0 & \varepsilon \end{pmatrix}$ with $\varepsilon = 10^{-8}$ in double precision.

**Solution.** Since $1 + \varepsilon^2$ rounds to $1$, $\|a_1\| = 1$ and $q_1 = (1, \varepsilon, 0, 0)^\mathsf{T}$. For $a_2$: $r_{12} = q_1^\mathsf{T} a_2 = 1$, $v_2 = a_2 - q_1 = (0, -\varepsilon, \varepsilon, 0)^\mathsf{T}$, $q_2 = (0, -1, 1, 0)^\mathsf{T}/\sqrt{2}$. For $a_3 = (1, 0, 0, \varepsilon)^\mathsf{T}$ the methods diverge.

CGS uses the original $a_3$: $r_{13} = q_1^\mathsf{T} a_3 = 1$ and $r_{23} = q_2^\mathsf{T} a_3 = 0$, so $v_3 = a_3 - q_1 = (0, -\varepsilon, 0, \varepsilon)^\mathsf{T}$ and $q_3 = (0, -1, 0, 1)^\mathsf{T}/\sqrt{2}$. But $q_2^\mathsf{T} q_3 = \tfrac{1}{2}$: the "orthonormal" vectors meet at $60^\circ$.

MGS first forms $v = a_3 - q_1 = (0, -\varepsilon, 0, \varepsilon)^\mathsf{T}$, then $r_{23} = q_2^\mathsf{T} v = \varepsilon/\sqrt{2}$ and $v \leftarrow v - r_{23} q_2 = (0, -\tfrac{\varepsilon}{2}, -\tfrac{\varepsilon}{2}, \varepsilon)^\mathsf{T}$, giving $q_3 = (0, -1, -1, 2)^\mathsf{T}/\sqrt{6}$. Now $q_2^\mathsf{T} q_3 = 0$ exactly and $q_1^\mathsf{T} q_3 = -\varepsilon/\sqrt{6} \approx -4 \times 10^{-9}$. Here $\kappa_2(A) \approx \sqrt{3}/\varepsilon = 1.7 \times 10^8$ (the eigenvalues of $A^\mathsf{T}A$ are $3 + \varepsilon^2, \varepsilon^2, \varepsilon^2$); the predictions $u\kappa^2 \approx 3$ for CGS and $u\kappa \approx 2 \times 10^{-8}$ for MGS match the observed $0.5$ and $4 \times 10^{-9}$.

## Common Misconceptions

- **"Gram–Schmidt and Householder compute different factorisations."** The thin QR with positive diagonal is unique; the methods differ only in rounding behaviour and sign convention.
- **"A small residual $\|A - \hat Q\hat R\|$ means the factorisation is good."** CGS has a tiny residual while $\hat Q$ is far from orthogonal, and orthogonality is what least squares needs.
- **"Modified Gram–Schmidt is stable."** Its loss of orthogonality $u\kappa(A)$ still grows with conditioning; only Householder and Givens are independent of $\kappa$.
- **"The Householder matrices must be formed and multiplied."** Each reflector is stored as a vector and applied in $O(m)$ flops; $Q$ is formed only when its columns are needed.

## Connections

- The Gram–Schmidt process of Linear Algebra (Lesson m2-l2) is the algorithm here; the order of subtractions, irrelevant in exact arithmetic, is decisive in floating point.
- Orthogonal polynomials in Numerical Methods (Lesson m2-l3) are Gram–Schmidt applied to monomials under a weighted inner product.
- Householder reflections and Givens rotations are the computational form of the orthogonal group of Mechanics; every rigid-body rotation factors into Givens rotations about coordinate axes.
- Photometric calibration in Astrophysics solves least-squares problems with $\kappa \sim 10^8$; Householder QR is why those fits are trustworthy (Lesson m2-l2).

## Quick Check

1. Show that a Householder reflector is symmetric and orthogonal, and that $v = x + \operatorname{sign}(x_1)\|x\|e_1$ gives $Hx = -\operatorname{sign}(x_1)\|x\|e_1$.
2. Explain why MGS loses orthogonality as $u\kappa$ but CGS as $u\kappa^2$, and why both give a small residual.
3. Compute the Givens rotation that zeroes the second entry of $(5, 12)^\mathsf{T}$ and the resulting first entry.
4. Derive the leading term $2mn^2$ in the Gram–Schmidt flop count and explain where Householder saves $\tfrac{2}{3}n^3$.
5. A least-squares problem receives one new observation per second. Which QR algorithm should maintain the factorisation, and at what cost?

## Takeaway

- The QR factorisation reduces a rectangular matrix to triangular form without changing its 2-norm conditioning, which LU cannot do.
- Classical Gram–Schmidt loses orthogonality as $u\kappa^2$ and should not be used; modified Gram–Schmidt loses it as $u\kappa$.
- Householder QR applies $n$ reflectors in $2mn^2 - \tfrac{2}{3}n^3$ flops and delivers a $\hat Q$ orthogonal to working precision for any $A$.
- Givens rotations zero one entry at a time and suit sparse, Hessenberg and updating problems.
