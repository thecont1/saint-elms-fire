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
lessonId: computational-linear-algebra-m2-l3
lessonName: The SVD, Low-Rank Approximation, Pseudoinverse and PCA
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - computational-linear-algebra-m2-l2
  - linear-algebra-m3-l2
learningObjectives:
  - Prove the existence of the singular value decomposition $A = U\Sigma V^\mathsf{T}$ from the spectral theorem for $A^\mathsf{T}A$ and read off rank, norms, condition number and the four fundamental subspaces.
  - State and prove the Eckart–Young theorem in the 2-norm and compute the best rank-$k$ approximation and its error.
  - Define the pseudoinverse $A^+ = V\Sigma^+U^\mathsf{T}$ and show that $A^+b$ is the minimum-norm least-squares solution, including the rank-deficient case.
  - Carry out principal component analysis as the SVD of a centred data matrix and interpret singular values as explained variance.
concepts:
  - Singular value decomposition
  - Singular values and the 2-norm
  - Eckart–Young theorem
  - Truncated SVD and low-rank approximation
  - Moore–Penrose pseudoinverse
  - Principal component analysis
tags:
  - mathematics
  - computational-linear-algebra
  - svd
  - pca
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# The SVD, Low-Rank Approximation, Pseudoinverse and PCA

## Overview

The singular value decomposition is the most informative factorisation in linear algebra, relied on whenever a matrix may be rank deficient, ill-conditioned or too big to inspect. It writes any $m \times n$ matrix as $A = U\Sigma V^\mathsf{T}$: a rotation, a scaling along orthogonal axes, and another rotation. From $\Sigma$ one reads the rank, the 2-norm, the Frobenius norm, the condition number and the distance to the nearest singular matrix. Truncating the sum $A = \sum \sigma_i u_i v_i^\mathsf{T}$ gives the best approximation of any prescribed rank, the Eckart–Young theorem, which is the basis of compression and of principal component analysis. Inverting the nonzero singular values gives the pseudoinverse, which solves least-squares problems even when $A^\mathsf{T}A$ is singular. This lesson proves the existence of the SVD, derives these consequences, and works PCA on a five-point data set.

## Learning Path

- **What you should already know**: the SVD as a statement and its applications (Linear Algebra, Lesson m3-l2); least squares by QR and the role of $\kappa_2(A) = \sigma_1/\sigma_n$ (Lessons m1-l1 and m2-l2).
- **What this lesson adds**: an existence proof; the geometric and norm consequences; Eckart–Young with proof; the pseudoinverse and minimum-norm least squares; truncated SVD as regularisation; PCA worked by hand and in numpy.
- **What later lessons this will unlock**: the randomised SVD for very large matrices and the image-compression and regression applications (Lesson m3-l3); the relation between singular values and eigenvalues used in power iteration (Lesson m3-l2).

## Core Explanation

### Existence

Let $A \in \mathbb{R}^{m \times n}$ with $m \ge n$. The matrix $A^\mathsf{T}A$ is symmetric positive semidefinite, so by the spectral theorem $A^\mathsf{T}A = V\Lambda V^\mathsf{T}$ with $V$ orthogonal and $\lambda_1 \ge \dots \ge \lambda_n \ge 0$. Define $\sigma_i = \sqrt{\lambda_i}$ and, for each $\sigma_i > 0$, $u_i = Av_i/\sigma_i$. These are orthonormal, since

$$u_i^\mathsf{T}u_j = \frac{v_i^\mathsf{T}A^\mathsf{T}Av_j}{\sigma_i\sigma_j} = \frac{\lambda_j\,v_i^\mathsf{T}v_j}{\sigma_i\sigma_j} = \delta_{ij}.$$

Completing them to an orthonormal basis of $\mathbb{R}^m$ gives $U$, and $Av_i = \sigma_i u_i$ for all $i$ (with $Av_i = 0$ when $\sigma_i = 0$) is the statement $AV = U\Sigma$, that is,

$$A = U\Sigma V^\mathsf{T} = \sum_{i=1}^{r} \sigma_i u_i v_i^\mathsf{T}, \qquad \sigma_1 \ge \sigma_2 \ge \dots \ge \sigma_r > 0,$$

where $r$ is the number of nonzero singular values. The **singular values** are unique; the singular vectors are unique up to sign when the $\sigma_i$ are distinct.

### Geometry and what $\Sigma$ tells us

$A$ maps the unit sphere of $\mathbb{R}^n$ to an ellipsoid in $\mathbb{R}^m$ whose semi-axes are $\sigma_i u_i$: $V^\mathsf{T}$ rotates, $\Sigma$ stretches each axis, $U$ rotates again. Everything about the size and invertibility of $A$ is in $\Sigma$:

$$\operatorname{rank} A = r, \qquad \|A\|_2 = \sigma_1, \qquad \|A\|_F = \Big(\sum \sigma_i^2\Big)^{1/2}, \qquad \kappa_2(A) = \frac{\sigma_1}{\sigma_n}, \qquad |\det A| = \prod \sigma_i \ (m = n).$$

The four fundamental subspaces are read off directly: $\mathcal{R}(A) = \operatorname{span}(u_1, \dots, u_r)$, $\mathcal{N}(A^\mathsf{T}) = \operatorname{span}(u_{r+1}, \dots, u_m)$, $\mathcal{R}(A^\mathsf{T}) = \operatorname{span}(v_1, \dots, v_r)$ and $\mathcal{N}(A) = \operatorname{span}(v_{r+1}, \dots, v_n)$. The **numerical rank** is the number of singular values above a tolerance such as $\sigma_1 \max(m, n) u$; the SVD is the only reliable way to determine it.

### Low-rank approximation: Eckart–Young

Truncate the sum after $k$ terms:

$$A_k = \sum_{i=1}^{k} \sigma_i u_i v_i^\mathsf{T} = U_k\Sigma_k V_k^\mathsf{T}.$$

**Theorem (Eckart–Young).** Among all matrices $B$ of rank at most $k$, $A_k$ minimises $\|A - B\|_2$ and $\|A - B\|_F$, with

$$\|A - A_k\|_2 = \sigma_{k+1}, \qquad \|A - A_k\|_F = \Big(\sum_{i > k} \sigma_i^2\Big)^{1/2}.$$

*Proof for the 2-norm.* $A - A_k = \sum_{i>k} \sigma_i u_i v_i^\mathsf{T}$ has largest singular value $\sigma_{k+1}$, so the stated error is attained. If $\operatorname{rank} B \le k$, its null space has dimension at least $n - k$ and must intersect the $(k+1)$-dimensional space $\operatorname{span}(v_1, \dots, v_{k+1})$ in some unit vector $w$. Then $Bw = 0$ and

$$\|A - B\|_2 \ge \|(A - B)w\|_2 = \|Aw\|_2 = \Big(\sum_{i \le k+1} \sigma_i^2 (v_i^\mathsf{T}w)^2\Big)^{1/2} \ge \sigma_{k+1}. \qquad \square$$

Discarding small singular values is therefore optimal. Storing $A_k$ needs $k(m + n + 1)$ numbers instead of $mn$; for a $1000 \times 1000$ image and $k = 50$ that is a compression factor of 10 with error $\sigma_{51}/\sigma_1$.

### The pseudoinverse

Define $\Sigma^+ \in \mathbb{R}^{n \times m}$ by inverting the nonzero singular values and transposing, and set

$$A^+ = V\Sigma^+U^\mathsf{T} = \sum_{i=1}^{r} \frac{1}{\sigma_i} v_i u_i^\mathsf{T}.$$

This **Moore–Penrose pseudoinverse** equals $A^{-1}$ when $A$ is square and nonsingular, and $(A^\mathsf{T}A)^{-1}A^\mathsf{T}$ when $A$ has full column rank, so it reproduces the least-squares solution of Lesson m2-l2. Its real value is the rank-deficient case. For any $A$, the least-squares problem $\min\|Ax - b\|_2$ has the solution set $x = A^+b + \mathcal{N}(A)$, and $A^+b$ is the member of **minimum 2-norm**: writing $b$ in the basis $U$, the residual $\|\Sigma V^\mathsf{T}x - U^\mathsf{T}b\|$ is minimised by choosing $(V^\mathsf{T}x)_i = u_i^\mathsf{T}b/\sigma_i$ for $i \le r$ and anything for $i > r$, and zero is the choice of smallest norm.

Numerically, dividing by a tiny $\sigma_i$ amplifies noise in $b$ by $1/\sigma_i$, so in practice singular values below a threshold are treated as zero: this **truncated SVD** is what `np.linalg.lstsq` and `np.linalg.pinv` do with their `rcond` argument, the simplest regularisation of ill-posed problems. The thin SVD of a dense $m \times n$ matrix costs about $2mn^2 + 11n^3$ flops, a small multiple of Householder QR, and is backward stable; it is the method of choice when the rank is in doubt.

### Principal component analysis

Let $X \in \mathbb{R}^{n \times p}$ hold $n$ observations of $p$ variables. Centre each column, $\tilde X = X - \mathbf{1}\bar x^\mathsf{T}$, so that the sample covariance matrix is $C = \tilde X^\mathsf{T}\tilde X/(n - 1)$. **Principal component analysis** seeks the unit direction $v$ along which the projected data have maximum variance, $v^\mathsf{T}Cv$; by the spectral theorem this is the top eigenvector of $C$, and with $\tilde X = U\Sigma V^\mathsf{T}$ it is $v_1$, with variance $\sigma_1^2/(n-1)$. The **principal components** are the right singular vectors $v_i$, the **scores** (coordinates of the data in the new basis) are $\tilde X V = U\Sigma$, and the fraction of total variance explained by the first $k$ components is $\sum_{i \le k}\sigma_i^2 / \sum_i \sigma_i^2$. By Eckart–Young, projecting onto the first $k$ components is the best rank-$k$ reconstruction of the data. Computing the SVD of $\tilde X$ rather than the eigendecomposition of $C$ avoids squaring the condition number, exactly the lesson of the normal equations.

```python
import numpy as np
X = np.array([[1., 2.], [2., 1.], [3., 3.], [4., 5.], [5., 4.]])
Xc = X - X.mean(axis=0)                          # centre the columns
U, s, Vt = np.linalg.svd(Xc, full_matrices=False)
print(s)                                         # [4.243 1.414]
print(Vt)                                        # rows (1,1)/sqrt2 and (1,-1)/sqrt2, up to sign
var = s**2 / (len(X) - 1)                        # variances along the components: [4.5 0.5]
print(var / var.sum())                           # explained fraction [0.9 0.1]
X1 = s[0] * np.outer(U[:, 0], Vt[0])             # best rank-1 reconstruction
print(np.linalg.norm(Xc - X1))                   # 1.414 = s[1], as Eckart-Young predicts
```

## Key Ideas

- **SVD**: $A = U\Sigma V^\mathsf{T}$ exists for every matrix; $\sigma_i^2$ are the eigenvalues of $A^\mathsf{T}A$ and $u_i = Av_i/\sigma_i$.
- **$\Sigma$ is the whole story**: rank, $\|A\|_2 = \sigma_1$, $\|A\|_F$, $\kappa_2 = \sigma_1/\sigma_n$, the four subspaces and the distance $\sigma_n$ to singularity.
- **Eckart–Young**: $A_k = \sum_{i \le k}\sigma_i u_i v_i^\mathsf{T}$ is the best rank-$k$ approximation in both norms, with 2-norm error $\sigma_{k+1}$.
- **Pseudoinverse**: $A^+ = V\Sigma^+U^\mathsf{T}$; $A^+b$ is the minimum-norm least-squares solution for any rank, and truncating small $\sigma_i$ regularises.
- **PCA is the SVD of centred data**: components $v_i$, scores $U\Sigma$, variances $\sigma_i^2/(n-1)$; the SVD route avoids forming the covariance matrix.

## Worked Examples

### Example 1 — SVD of a $2 \times 2$ matrix and its best rank-one approximation

Compute the SVD of $A = \begin{pmatrix} 3 & 0 \\ 4 & 5 \end{pmatrix}$ and its best rank-one approximation.

**Solution.** $A^\mathsf{T}A = \begin{pmatrix} 25 & 20 \\ 20 & 25 \end{pmatrix}$ has eigenvalues $45$ and $5$, so $\sigma_1 = 3\sqrt{5} = 6.708$, $\sigma_2 = \sqrt{5} = 2.236$, with $v_1 = (1, 1)^\mathsf{T}/\sqrt{2}$ and $v_2 = (1, -1)^\mathsf{T}/\sqrt{2}$. Then

$$u_1 = \frac{Av_1}{\sigma_1} = \frac{(3, 9)^\mathsf{T}}{\sqrt{2}\cdot 3\sqrt{5}} = \frac{(1, 3)^\mathsf{T}}{\sqrt{10}}, \qquad u_2 = \frac{Av_2}{\sigma_2} = \frac{(3, -1)^\mathsf{T}}{\sqrt{10}},$$

which are orthonormal. Checks: $\sigma_1\sigma_2 = 15 = \det A$, $\sigma_1^2 + \sigma_2^2 = 50 = \|A\|_F^2$, $\kappa_2(A) = 3$. The best rank-one approximation is

$$A_1 = \sigma_1 u_1 v_1^\mathsf{T} = \frac{3\sqrt{5}}{\sqrt{20}}\begin{pmatrix} 1 \\ 3 \end{pmatrix}\begin{pmatrix} 1 & 1 \end{pmatrix} = \begin{pmatrix} 1.5 & 1.5 \\ 4.5 & 4.5 \end{pmatrix},$$

and $A - A_1 = \begin{pmatrix} 1.5 & -1.5 \\ -0.5 & 0.5 \end{pmatrix} = (1.5, -0.5)^\mathsf{T}(1, -1)$ has 2-norm $\sqrt{2.5}\cdot\sqrt{2} = \sqrt{5} = \sigma_2$, as Eckart–Young requires.

### Example 2 — Pseudoinverse and minimum-norm least squares

Find $A^+$ for $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ and the minimum-norm least-squares solution of $Ax = (1, 3)^\mathsf{T}$.

**Solution.** $A$ has rank one with $\sigma_1 = 2$ and $u_1 = v_1 = (1, 1)^\mathsf{T}/\sqrt{2}$, so

$$A^+ = \frac{1}{\sigma_1}v_1u_1^\mathsf{T} = \frac{1}{2}\cdot\frac{1}{2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 0.25 & 0.25 \\ 0.25 & 0.25 \end{pmatrix}.$$

Then $x = A^+b = (1, 1)^\mathsf{T}$, with $Ax = (2, 2)^\mathsf{T}$ and residual $(-1, 1)^\mathsf{T}$, orthogonal to the column space $\operatorname{span}(1, 1)^\mathsf{T}$ as required. Every $x$ with $x_1 + x_2 = 2$ gives the same residual; among them $(1, 1)^\mathsf{T}$ has the smallest norm. The normal equations are singular here and QR fails too; the pseudoinverse does not.

### Example 3 — PCA of a five-point data set

Five students score $(x, y) = (1, 2), (2, 1), (3, 3), (4, 5), (5, 4)$ on two tests. Find the principal components, the variance explained by the first, and the best rank-one reconstruction.

**Solution.** The means are $(3, 3)$, so the centred rows are $(-2, -1), (-1, -2), (0, 0), (1, 2), (2, 1)$ and

$$\tilde X^\mathsf{T}\tilde X = \begin{pmatrix} 10 & 8 \\ 8 & 10 \end{pmatrix}, \qquad \lambda = 18, 2, \qquad \sigma_1 = \sqrt{18} = 4.243, \quad \sigma_2 = \sqrt{2} = 1.414.$$

The components are $v_1 = (1, 1)^\mathsf{T}/\sqrt{2}$ and $v_2 = (1, -1)^\mathsf{T}/\sqrt{2}$. Variances along them are $\sigma_i^2/(n-1) = 4.5$ and $0.5$, so the first component explains $18/20 = 90\%$ of the variance. The scores are $\tilde Xv_1 = (-3, -3, 0, 3, 3)^\mathsf{T}/\sqrt{2}$, so $u_1 = \tilde Xv_1/\sigma_1 = (-0.5, -0.5, 0, 0.5, 0.5)^\mathsf{T}$, and the rank-one reconstruction $\sigma_1 u_1 v_1^\mathsf{T}$ has rows $(-1.5, -1.5), (-1.5, -1.5), (0, 0), (1.5, 1.5), (1.5, 1.5)$. The reconstruction error is the Frobenius norm of the residual rows $(\mp 0.5, \pm 0.5)$, $\sqrt{4 \times 0.5} = \sqrt{2} = \sigma_2$, as the theorem predicts.

## Common Misconceptions

- **"Singular values are the absolute values of the eigenvalues."** Only for symmetric (more generally normal) matrices. For $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ both eigenvalues are $0$ but $\sigma_1 = 1$.
- **"The rank of a matrix can be found by Gaussian elimination."** In floating point every matrix has full rank; only the singular values, compared with a tolerance, give a meaningful numerical rank.
- **"The pseudoinverse is a trick for singular matrices."** It gives the minimum-norm least-squares solution for every $b$ and reduces to $A^{-1}$ or $(A^\mathsf{T}A)^{-1}A^\mathsf{T}$ whenever those exist.
- **"PCA should be done on the covariance matrix."** Forming $\tilde X^\mathsf{T}\tilde X$ squares the condition number; the SVD of $\tilde X$ gives the same components with no loss, and centring the columns first is essential.

## Connections

- The SVD of Linear Algebra (Lesson m3-l2) is here proved and computed; the Schmidt decomposition of a bipartite state in Introduction to Quantum Mechanics is exactly an SVD.
- Image compression and noise filtering of spectra in Waves and Optics are low-rank approximations justified by Eckart–Young.
- Deconvolution of a blurred image or spectrum is an ill-posed least-squares problem; truncating small singular values is the first regularisation method.
- PCA of galaxy spectra in Astrophysics compresses thousands of pixels to a handful of components; the same mathematics underlies normal-mode analysis in Mechanics.

## Quick Check

1. Prove that $u_i = Av_i/\sigma_i$ are orthonormal and deduce $A = U\Sigma V^\mathsf{T}$.
2. State the Eckart–Young theorem and explain why the null-space dimension argument forces $\|A - B\|_2 \ge \sigma_{k+1}$.
3. Compute the singular values of $\begin{pmatrix} 2 & 0 \\ 0 & -3 \end{pmatrix}$ and of $\begin{pmatrix} 0 & 2 \\ 0 & 0 \end{pmatrix}$.
4. Show that $A^+ = (A^\mathsf{T}A)^{-1}A^\mathsf{T}$ when $A$ has full column rank.
5. A data matrix has singular values $10, 6, 1, 0.5$. What fraction of the variance do the first two components explain, and what is the rank-two reconstruction error?

## Takeaway

- Every matrix has an SVD $A = U\Sigma V^\mathsf{T}$; the singular values determine rank, norms, condition number and the distance to singularity.
- The truncated SVD $A_k$ is the best rank-$k$ approximation in the 2- and Frobenius norms, with error $\sigma_{k+1}$: the basis of compression and dimension reduction.
- The pseudoinverse $A^+ = V\Sigma^+U^\mathsf{T}$ gives the minimum-norm least-squares solution for any rank, and truncating small singular values regularises ill-posed problems.
- PCA is the SVD of the centred data matrix; components are right singular vectors and explained variance is proportional to $\sigma_i^2$.
