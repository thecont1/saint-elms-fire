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
lessonId: computational-linear-algebra-m1-l3
lessonName: Cholesky Factorisation, Banded Systems and Sparse Storage
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - computational-linear-algebra-m1-l2
  - linear-algebra-m2-l3
  - mathematics-lab-using-python-ii-m1-l4
learningObjectives:
  - Derive the Cholesky factorisation $A = LL^\mathsf{T}$ of a symmetric positive definite matrix, carry it out by hand, and justify its $\tfrac{1}{3}n^3$ flop count.
  - Explain, through the bound $|l_{ik}| \le \sqrt{a_{ii}}$, why Cholesky is backward stable without pivoting.
  - Derive the $2npq$ cost of banded LU and the $8n$ flop count of the Thomas algorithm.
  - Describe COO and CSR storage, compute their memory, and explain fill-in and reordering in sparse Cholesky.
concepts:
  - Cholesky factorisation
  - Symmetric positive definite matrix
  - Banded matrix and bandwidth
  - Thomas algorithm
  - Compressed sparse row storage
  - Fill-in and matrix reordering
tags:
  - mathematics
  - computational-linear-algebra
  - cholesky
  - sparse-matrices
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - short-answer
***

# Cholesky Factorisation, Banded Systems and Sparse Storage

## Overview

Lesson m1-l2 gave the general tool for dense square systems, $PA = LU$ at $\tfrac{2}{3}n^3$ flops. This lesson exploits structure, in three steps of increasing payoff. When $A$ is symmetric positive definite, the factorisation becomes symmetric, $A = LL^\mathsf{T}$: Cholesky's method halves the flops and storage, needs no pivoting and is backward stable with no growth-factor caveat. When $A$ is banded, elimination never touches the zeros outside the band and the cost falls from cubic to linear in $n$. When $A$ is merely sparse, it is stored as a list of nonzeros and factorisation becomes combinatorial, because elimination creates new nonzeros whose number depends on the elimination order.

## Learning Path

- **What you should already know**: $PA = LU$, its flop count and the growth factor (Lesson m1-l2); positive definiteness and the spectral theorem (Linear Algebra, Lesson m2-l3); tridiagonal finite-difference systems (Mathematics Lab using Python II, Lesson m1-l4).
- **What this lesson adds**: the Cholesky algorithm, its existence via Schur complements, its cost and unconditional stability; banded elimination and the Thomas algorithm; COO and CSR storage; fill-in and reordering.
- **What later lessons this will unlock**: Cholesky on the normal equations (Lesson m2-l2); sparse matrix–vector products and incomplete Cholesky preconditioning (Lesson m3-l1); sparse adjacency matrices in PageRank (Lesson m3-l2); memory and parallelism (Lesson m3-l3).

## Core Explanation

### Symmetric positive definite matrices

A real symmetric $A$ is **positive definite** (SPD) if $x^\mathsf{T} A x > 0$ for all $x \ne 0$. Every diagonal entry $a_{ii} = e_i^\mathsf{T} A e_i$ is positive, and if

$$A = \begin{pmatrix} \alpha & w^\mathsf{T} \\ w & K \end{pmatrix},$$

the **Schur complement** $K - ww^\mathsf{T}/\alpha$ is again SPD: for $y \ne 0$ put $x = (-w^\mathsf{T} y/\alpha,\ y^\mathsf{T})^\mathsf{T}$, then $x^\mathsf{T} A x = y^\mathsf{T}(K - ww^\mathsf{T}/\alpha)y > 0$. The Schur complement is the trailing matrix after one elimination step, so every pivot of an SPD matrix is positive and elimination never breaks down.

### The Cholesky factorisation

One symmetric elimination step, recursed on the SPD Schur complement, gives the **Cholesky factorisation** $A = LL^\mathsf{T}$ with $L$ lower triangular and $l_{jj} > 0$, which is unique. In practice one equates entries column by column:

$$l_{jj} = \Big(a_{jj} - \sum_{k<j} l_{jk}^2\Big)^{1/2}, \qquad l_{ij} = \frac{1}{l_{jj}}\Big(a_{ij} - \sum_{k<j} l_{ik} l_{jk}\Big), \quad i > j.$$

Each radicand is a pivot, positive exactly when $A$ is SPD, so the attempt is the cheapest **test for positive definiteness**; `np.linalg.cholesky` raises `LinAlgError` otherwise. The diagonal equation gives $\sum_{k \le j} l_{jk}^2 = a_{jj}$, hence $|l_{jk}| \le \sqrt{a_{jj}}$: the factor never exceeds the square root of the matrix, the heart of the stability argument. Solving $Ax = b$ is $Ly = b$ then $L^\mathsf{T}x = y$ at $2n^2$ flops, and only one triangle, $n(n+1)/2$ numbers, is stored.

### Operation count

Column $j$ needs $2(j-1)$ flops for each of the $n-j$ subdiagonal entries, so

$$\sum_{j=1}^{n} 2(j-1)(n-j) \approx 2\int_0^n j(n-j)\,dj = 2\Big(\frac{n^3}{2} - \frac{n^3}{3}\Big) = \frac{1}{3}n^3,$$

half of LU because only one triangle of each Schur complement is updated.

### Backward stability without pivoting

The computed factor satisfies $\hat L \hat L^\mathsf{T} = A + \delta A$ with $|\delta A| \le \gamma_{n+1}\,|\hat L|\,|\hat L|^\mathsf{T}$, $\gamma_{n+1} \approx (n+1)u$. By Cauchy–Schwarz and $\sum_k l_{ik}^2 = a_{ii}$, $(|\hat L||\hat L|^\mathsf{T})_{ij} \le \sqrt{a_{ii}a_{jj}}$, so $\|\,|\hat L||\hat L|^\mathsf{T}\|_2 \le \|\hat L\|_F^2 = \operatorname{tr} A \le n\|A\|_2$ and

$$\frac{\|\delta A\|_2}{\|A\|_2} \le n\gamma_{n+1} \approx n^2 u.$$

No growth factor appears because no growth is possible: Cholesky is **unconditionally backward stable**. Its sole floating-point failure is rounding pushing a tiny pivot negative, which needs $A$ nearly singular; a sufficient condition for success has the form $c\,n^{3/2}\kappa_2(A)\,u < 1$.

### Banded matrices

$A$ has **lower bandwidth** $q$ and **upper bandwidth** $p$ if $a_{ij} = 0$ for $i - j > q$ or $j - i > p$; tridiagonal means $p = q = 1$, and the five-point Laplacian on an $N \times N$ grid has $p = q = N$, $n = N^2$. **LU without pivoting preserves the band**, since eliminating column $k$ touches only $q$ rows and $p$ columns beyond the pivot. Each step updates a $q \times p$ block, so

$$\text{factorisation} \approx 2npq, \qquad \text{solves} \approx 2n(p+q) \ \text{flops},$$

against $\tfrac{2}{3}n^3$ and $2n^2$ dense. Banded Cholesky costs about $np^2$.

The tridiagonal case is the **Thomas algorithm**. With sub-, main and super-diagonals $a_i, b_i, c_i$: $u_1 = b_1$ and for $i = 2, \dots, n$

$$l_i = a_i/u_{i-1}, \qquad u_i = b_i - l_i c_{i-1},$$

3 flops per row; the forward sweep $y_i = d_i - l_i y_{i-1}$ costs 2 and the back sweep $x_i = (y_i - c_i x_{i+1})/u_i$ costs 3, about $8n$ flops and $4n$ numbers in all. Pivoting is unnecessary for diagonally dominant ($|b_i| \ge |a_i| + |c_i|$) or SPD matrices.

### Sparse storage

A **sparse** matrix has $\mathrm{nnz} \ll n^2$ nonzeros without band structure. **COO** (coordinate) format stores arrays `row`, `col`, `val` of length nnz, $3\,\mathrm{nnz}$ numbers, and is easy to build. **CSR** (compressed sparse row) stores `data` and `indices` of length nnz plus `indptr` of length $n+1$, $2\,\mathrm{nnz} + n + 1$ numbers; row $i$ is `data[indptr[i]:indptr[i+1]]` with columns in the same slice of `indices`. A matrix–vector product costs $2\,\mathrm{nnz}$ flops instead of $2n^2$ and is the workhorse of Module 3.

### Fill-in and ordering

Sparsity of $A$ does not imply sparsity of $L$. The update $a_{ij} \leftarrow a_{ij} - l_{ik}u_{kj}$ makes a zero nonzero whenever $a_{ik}$ and $a_{kj}$ are nonzero: **fill-in**. In graph terms, eliminating a vertex joins all its neighbours, and the amount depends on the order: an arrowhead matrix fills completely if its hub is eliminated first and not at all if it is eliminated last (Example 3). Minimum fill is NP-hard, so solvers use heuristics such as **minimum degree** and **nested dissection**. On an $N \times N$ grid ($n = N^2$) banded elimination costs $O(n^2)$ flops, nested dissection $O(n^{3/2})$ flops with $O(n\log n)$ storage; in three dimensions even the best ordering needs $O(n^2)$ flops and $O(n^{4/3})$ storage, tens of gigabytes for $n = 10^7$. That wall is why iterative methods exist.

```python
import numpy as np
from scipy.linalg import cholesky, solve_banded
from scipy.sparse import diags

A = np.array([[4., 2., 2.], [2., 5., 3.], [2., 3., 6.]])
L = cholesky(A, lower=True)                 # A = L @ L.T, n^3/3 flops
print(L)                                    # [[2 0 0] [1 2 0] [1 1 2]]

n = 1_000_000                               # tridiagonal (-1, 4, -1)
ab = np.zeros((3, n))                       # one diagonal per row
ab[0, 1:] = -1.0                            # superdiagonal: ab[0, j] = a[j-1, j]
ab[1, :] = 4.0                              # main diagonal
ab[2, :-1] = -1.0                           # subdiagonal:   ab[2, j] = a[j+1, j]
x = solve_banded((1, 1), ab, np.ones(n))    # about 8n flops
T = diags([-1.0, 4.0, -1.0], [-1, 0, 1], shape=(n, n), format="csr")
print(T.nnz, T.data.nbytes / 1e6, "MB")     # 2999998  24 MB (dense: 8e6 MB)
```

## Key Ideas

- **Cholesky**: an SPD matrix factors uniquely as $A = LL^\mathsf{T}$, computed column by column with every radicand a positive pivot.
- **Half the cost, half the storage**: $\tfrac{1}{3}n^3$ flops and $n(n+1)/2$ numbers; the attempt tests positive definiteness.
- **Unconditionally backward stable**: $|l_{ik}| \le \sqrt{a_{ii}}$ rules out growth, so $\|\delta A\|_2/\|A\|_2 \lesssim n^2 u$ without pivoting.
- **Banded LU preserves the band**: $2npq$ to factor, $2n(p+q)$ to solve; the Thomas algorithm costs $8n$ flops.
- **Sparse formats**: COO to build, CSR to multiply at $2\,\mathrm{nnz}$ flops; memory $2\,\mathrm{nnz} + n + 1$ instead of $n^2$.
- **Fill-in**: eliminating a vertex joins its neighbours; the ordering decides between $O(n)$ and $O(n^3)$ work.

## Worked Examples

### Example 1 — Cholesky factorisation by hand

Factorise $A = \begin{pmatrix} 4 & 2 & 2 \\ 2 & 5 & 3 \\ 2 & 3 & 6 \end{pmatrix}$ and solve $Ax = (8, 10, 11)^\mathsf{T}$.

**Solution.** Column 1: $l_{11} = \sqrt{4} = 2$, $l_{21} = l_{31} = 2/2 = 1$. Column 2: $l_{22} = \sqrt{5 - 1} = 2$, $l_{32} = (3 - 1 \cdot 1)/2 = 1$. Column 3: $l_{33} = \sqrt{6 - 1 - 1} = 2$. So

$$L = \begin{pmatrix} 2 & 0 & 0 \\ 1 & 2 & 0 \\ 1 & 1 & 2 \end{pmatrix},$$

and $(LL^\mathsf{T})_{22} = 1 + 4 = 5$, $(LL^\mathsf{T})_{32} = 1 + 2 = 3$, $(LL^\mathsf{T})_{33} = 1 + 1 + 4 = 6$ check. Forward $Ly = b$: $y_1 = 4$, $y_2 = (10 - 4)/2 = 3$, $y_3 = (11 - 4 - 3)/2 = 2$. Back $L^\mathsf{T}x = y$: $x_3 = 1$, $x_2 = (3 - 1)/2 = 1$, $x_1 = (4 - 1 - 1)/2 = 1$, and $A(1,1,1)^\mathsf{T} = (8, 10, 11)^\mathsf{T}$ confirms.

### Example 2 — Choosing a solver by cost and memory

An SPD system has $n = 10^6$ and $p = q = 100$. Compare dense LU, dense Cholesky, banded Cholesky and, for the tridiagonal case, the Thomas algorithm at $10^{10}$ flop/s.

**Solution.** Dense LU: $\tfrac{2}{3}n^3 = 6.7 \times 10^{17}$ flops, $6.7 \times 10^7$ s, about 2.1 years, and $8n^2 = 8$ TB of memory. Dense Cholesky: $3.3 \times 10^{17}$ flops, about a year, 4 TB. Banded Cholesky: $np^2 = 10^{10}$ flops, about 1 s, with $n(p+1) \approx 10^8$ numbers $= 0.8$ GB for the factor. Thomas: $8n = 8 \times 10^6$ flops, under a millisecond, $4n$ numbers $= 32$ MB.

### Example 3 — Fill-in and the effect of ordering

For the arrowhead matrix $A = \begin{pmatrix} 4 & 1 & 1 & 1 \\ 1 & 2 & 0 & 0 \\ 1 & 0 & 2 & 0 \\ 1 & 0 & 0 & 2 \end{pmatrix}$, compute the Cholesky factor in the given order and with the unknowns reversed.

**Solution.** $A$ is strictly diagonally dominant with positive diagonal, hence SPD. Given order: $l_{11} = 2$, $l_{21} = l_{31} = l_{41} = 0.5$, and the Schur complement $2I - 0.25\,\mathbf{1}\mathbf{1}^\mathsf{T}$ has $1.75$ on the diagonal and $-0.25$ elsewhere: completely dense. All three lower-triangle zeros fill in and $L$ has all $10$ possible nonzeros.

Reversed, the hub moves to position 4: the matrix has $2$ on the first three diagonal entries, $1$ in the last row and column, $4$ in the corner, and zeros elsewhere. Then $l_{11} = l_{22} = l_{33} = \sqrt{2}$, $l_{41} = l_{42} = l_{43} = 1/\sqrt{2}$, $l_{44} = \sqrt{4 - 3 \times \tfrac{1}{2}} = \sqrt{2.5} = 1.581$. The factor has $7$ nonzeros, exactly where the permuted matrix had them: no fill.

## Common Misconceptions

- **"Cholesky is just LU for symmetric matrices."** It applies only to symmetric *positive definite* matrices; indefinite ones need $LDL^\mathsf{T}$ with pivoting. Within its domain it needs no pivoting and has no growth factor.
- **"Pivoting is always needed for stability."** Not for SPD matrices: $|l_{ik}| \le \sqrt{a_{ii}}$ bounds every entry a priori. Sparse Cholesky permutes for sparsity, not stability.
- **"A positive definite matrix has positive entries."** Neither direction holds: $\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ is indefinite, while the discrete Laplacian with $-1$ off the diagonal is SPD.
- **"Storing a matrix sparsely makes solving it cheap."** The cost follows the sparsity of $L$, not of $A$; fill-in can make $L$ dense.

## Connections

- The tridiagonal systems of boundary value problems and the Crank–Nicolson heat scheme in Mathematics Lab using Python II (Lesson m1-l4) are solved by the Thomas algorithm, which is why implicit stepping costs no more per step than explicit.
- Cubic splines in Numerical Methods (Lesson m1-l3) solve a tridiagonal SPD system for the knot second derivatives without pivoting.
- A covariance matrix is SPD, and its Cholesky factor generates correlated samples $x = \mu + Lz$ from standard normal $z$, the basis of Monte Carlo sampling in Thermal Physics and Statistical Mechanics.
- Adjacency matrices of networks are stored in CSR because every algorithm on them, including PageRank in Lesson m3-l2, is built on matrix–vector products.

## Quick Check

1. Show that the Schur complement of an SPD matrix is SPD, and explain why Cholesky therefore never meets a non-positive pivot.
2. Derive the leading term $\tfrac{1}{3}n^3$ of the Cholesky flop count and explain the factor-of-two saving over LU.
3. Compute the Cholesky factor of $\begin{pmatrix} 9 & 3 \\ 3 & 5 \end{pmatrix}$ and decide whether $\begin{pmatrix} 2 & 3 \\ 3 & 4 \end{pmatrix}$ is positive definite.
4. Write the CSR arrays `data`, `indices`, `indptr` for the arrowhead matrix of Example 3 and give the flop count of one matrix–vector product.
5. A three-dimensional finite-difference SPD matrix has $n = 10^6$ and $p = q = 10^4$. Estimate the banded Cholesky cost and explain why this motivates Module 3.

## Takeaway

- A symmetric positive definite matrix factors as $A = LL^\mathsf{T}$ in $\tfrac{1}{3}n^3$ flops and half the storage of LU; the attempt is the standard positive-definiteness test.
- Cholesky needs no pivoting and is unconditionally backward stable, because every entry of $L$ is bounded by the square root of a diagonal entry of $A$.
- Banded elimination preserves the band and costs $O(npq)$; the Thomas algorithm runs in $8n$ flops.
- Sparse direct solvers live or die by fill-in; reordering can change $O(n^3)$ to $O(n)$, but in three dimensions no ordering avoids $O(n^2)$ work, which is where iterative methods take over.
