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
lessonId: computational-linear-algebra-m1-l2
lessonName: LU Factorisation with Partial Pivoting and Operation Counts
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - computational-linear-algebra-m1-l1
  - numerical-methods-m3-l1
learningObjectives:
  - Express Gaussian elimination as the factorisation $PA = LU$ and carry out the algorithm with partial pivoting by hand on a $3 \times 3$ system.
  - Derive the operation count $\tfrac{2}{3}n^3 + O(n^2)$ flops for LU and $2n^2$ for each triangular solve, and use it to predict run times and to choose between factorising and inverting.
  - Explain, through the growth factor $\rho$, why elimination without pivoting is unstable and why partial pivoting is backward stable in practice.
  - Use `scipy.linalg.lu_factor` and `lu_solve` to reuse one factorisation for many right-hand sides and to estimate the condition number.
concepts:
  - LU factorisation
  - Partial pivoting
  - Permutation matrix
  - Flop count
  - Growth factor
  - Forward and back substitution
tags:
  - mathematics
  - computational-linear-algebra
  - lu-factorisation
  - gaussian-elimination
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - short-answer
***

# LU Factorisation with Partial Pivoting and Operation Counts

## Overview

Gaussian elimination, seen computationally, is a factorisation: a permuted $A$ equals unit lower-triangular $L$ times upper-triangular $U$, after which any right-hand side costs two cheap triangular solves. This lesson derives the factorisation, counts its $\tfrac{2}{3}n^3$ flops, and shows via the growth factor why elimination without row interchanges can fail on a well-conditioned matrix while partial pivoting is backward stable in practice. Then: factor once, solve many times, never form the inverse.

## Learning Path

- **What you should already know**: norms, condition numbers and forward/backward error (Lesson m1-l1); Gaussian elimination and LU decomposition (Numerical Methods, Lesson m3-l1).
- **What this lesson adds**: $PA = LU$ in matrix form, the flop count and its consequences, growth-factor stability analysis, partial pivoting, and factor-once-solve-many.
- **What later lessons this will unlock**: Cholesky and band and sparse structure (Lesson m1-l3); LU cost against QR and SVD (Lessons m2-l1 and m2-l3); iterative methods when $n^3$ is unaffordable (Lesson m3-l1).

## Core Explanation

### Elimination as matrix multiplication

In the first step of elimination on $A$ with $a_{11} \ne 0$, subtracting $l_{i1} = a_{i1}/a_{11}$ times row 1 from row $i$ is left-multiplication by the **Gauss transformation**

$$M_1 = I - l_1 e_1^\mathsf{T}, \qquad l_1 = (0, l_{21}, \dots, l_{n1})^\mathsf{T},$$

with inverse $M_1^{-1} = I + l_1 e_1^\mathsf{T}$. After $n - 1$ steps $M_{n-1} \cdots M_1 A = U$ is upper triangular, so

$$A = M_1^{-1} M_2^{-1} \cdots M_{n-1}^{-1}\, U = LU,$$

and the product of inverses comes free: $L = I + \sum_k l_k e_k^\mathsf{T}$ is **unit lower triangular** with multiplier $l_{ik}$ in position $(i, k)$. $U$ fills the upper triangle of the working array and the multipliers overwrite the eliminated entries, so no extra memory is needed.

Given $A = LU$, **forward substitution** solves $Ly = b$,

$$y_i = b_i - \sum_{j < i} l_{ij} y_j, \qquad i = 1, \dots, n,$$

and **back substitution** solves $Ux = y$,

$$x_i = \frac{1}{u_{ii}}\Big(y_i - \sum_{j > i} u_{ij} x_j\Big), \qquad i = n, \dots, 1.$$

### Counting operations

A **flop** is one floating-point addition, subtraction, multiplication or division. At step $k$, $(n-k)^2$ entries are each updated by a multiply and a subtract, and $n - k$ multipliers are formed by division:

$$\sum_{k=1}^{n-1}\big[2(n-k)^2 + (n-k)\big] = 2\sum_{m=1}^{n-1} m^2 + \sum_{m=1}^{n-1} m = \frac{(n-1)n(2n-1)}{3} + \frac{(n-1)n}{2} = \frac{2}{3}n^3 + O(n^2).$$

Each triangular solve costs $\sum_{i}(2i - 1) \approx n^2$, so a full solve is $\tfrac{2}{3}n^3 + 2n^2$. Doubling $n$ multiplies the time by eight; each extra right-hand side costs only $2n^2$; and the explicit inverse costs about $2n^3$ and is less accurate than solving. LAPACK's `dgetrf` works on cache-sized blocks to approach peak speed (Lesson m3-l3).

| Operation | Flops | $n = 10^3$ at $10^{10}$ flop/s | $n = 10^4$ |
|---|---|---|---|
| LU factorisation | $\tfrac{2}{3}n^3$ | $0.07$ s | $67$ s |
| One triangular pair of solves | $2n^2$ | $0.2$ ms | $20$ ms |
| Explicit inverse | $2n^3$ | $0.2$ s | $200$ s |
| Matrix–matrix product | $2n^3$ | $0.2$ s | $200$ s |

### Why pivoting is necessary

Elimination fails on a zero pivot, as for $A = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$, though $A$ is well conditioned. A small nonzero pivot is worse: it produces huge multipliers. Take

$$A = \begin{pmatrix} \varepsilon & 1 \\ 1 & 1 \end{pmatrix}, \qquad \varepsilon = 10^{-20},$$

where $Ax = (1, 2)^\mathsf{T}$ has $x \approx (1, 1)^\mathsf{T}$. Without pivoting $l_{21} = 10^{20}$ and $u_{22} = 1 - 10^{20}$ rounds to $-10^{20}$: the entry 1 is swallowed. Then $x_2 = \mathrm{fl}\big((2 - 10^{20})/(-10^{20})\big) = 1$ and $x_1 = (1 - x_2)/\varepsilon = 0$, an $O(1)$ error with $\kappa_\infty(A) \approx 4$. The algorithm, not the problem, is at fault.

Rounding analysis makes this precise. The computed factors satisfy $\hat L \hat U = A + \delta A$ with

$$|\delta A| \le \gamma_n\,|\hat L|\,|\hat U| \quad \text{componentwise}, \qquad \gamma_n = \frac{nu}{1 - nu} \approx nu,$$

so the backward error is small only if $|\hat L|\,|\hat U|$ is not much larger than $|A|$. Without pivoting nothing bounds $L$ or $U$.

### Partial pivoting and the growth factor

**Partial pivoting** searches column $k$ from the diagonal down for the entry of largest magnitude and swaps it into the pivot position. Recording the swaps in a permutation $P$,

$$PA = LU, \qquad |l_{ij}| \le 1.$$

The remaining danger is growth in $U$, measured by the **growth factor**

$$\rho_n = \frac{\max_{i,j,k} |a^{(k)}_{ij}|}{\max_{i,j} |a_{ij}|}.$$

Wilkinson's backward error bound is

$$\frac{\|\delta A\|_\infty}{\|A\|_\infty} \le n^2 \rho_n\, u \ (\text{to first order}),$$

with $\rho_n \le 2^{n-1}$ in the worst case. That bound is attained only by contrived matrices; in practice $\rho_n$ is almost always below 10 and the method is backward stable. In the $\varepsilon$ example pivoting swaps the rows, giving $l_{21} = \varepsilon$, $u_{22} = 1 - \varepsilon \to 1$ and $x = (1, 1)^\mathsf{T}$. **Complete pivoting** searches the whole remaining submatrix, guaranteeing slower growth at $O(n^3)$ comparisons; it is reserved for rank-revealing factorisations.

### Using the factorisation in practice

scipy separates factorisation from solution, as the cost analysis recommends.

```python
import numpy as np
from scipy.linalg import lu_factor, lu_solve, lu

A = np.array([[2., 1., 1.], [4., -6., 0.], [-2., 7., 2.]])
P, L, U = lu(A)                    # A = P @ L @ U  (scipy's convention)
print(L, U, sep="\n")
lu_piv = lu_factor(A)              # packed LU plus pivot indices, 2n^3/3 flops once
for b in ([4., -2., 7.], [1., 0., 0.], [0., 1., 0.]):
    x = lu_solve(lu_piv, b)        # 2n^2 flops per right-hand side
    print(x, np.linalg.norm(A @ x - b, np.inf))
```

scipy's `lu` returns $A = PLU$, so its $P$ is the transpose of ours. The condition number can be estimated from the factors with a few triangular solves (LAPACK `dgecon`), so solvers warn of ill-conditioning for $O(n^2)$ extra work.

### Iterative refinement

Given $\hat x$, form $r = b - A\hat x$ (preferably in higher precision), solve $A d = r$ with the existing factors, and set $\hat x \leftarrow \hat x + d$. Each $O(n^2)$ pass reduces the forward error by roughly $\kappa(A)u$; with an extended-precision residual the solution becomes correct to working precision whenever $\kappa(A) u < 1$.

## Key Ideas

- **$PA = LU$**: elimination with row swaps gives a permutation $P$, unit lower-triangular $L$ of multipliers and upper-triangular $U$, stored in place.
- **Cost**: $\tfrac{2}{3}n^3$ to factor, $2n^2$ per solve; the explicit inverse costs $2n^3$ and is never needed.
- **Factor once, solve many**: $k$ right-hand sides cost $\tfrac{2}{3}n^3 + 2kn^2$.
- **Instability without pivoting**: small pivots make $|L|\,|U|$ large and the bound $|\delta A| \lesssim nu\,|L|\,|U|$ useless.
- **Growth factor**: with partial pivoting $|l_{ij}| \le 1$; the worst case $\rho_n = 2^{n-1}$ never appears in practice.
- **Iterative refinement**: a residual and a pair of solves per pass recover accuracy at $O(n^2)$.

## Worked Examples

### Example 1 — LU with partial pivoting by hand

Factorise $A = \begin{pmatrix} 2 & 1 & 1 \\ 4 & -6 & 0 \\ -2 & 7 & 2 \end{pmatrix}$ as $PA = LU$ and solve $Ax = b$ for $b = (4, -2, 7)^\mathsf{T}$.

**Solution.** The largest entry of column 1 is $4$ in row 2, so swap rows 1 and 2: $\begin{pmatrix} 4 & -6 & 0 \\ 2 & 1 & 1 \\ -2 & 7 & 2 \end{pmatrix}$, with $l_{21} = 0.5$, $l_{31} = -0.5$. Row 2 minus $0.5 \times$ row 1 is $(0, 4, 1)$; row 3 plus $0.5 \times$ row 1 is $(0, 4, 2)$. In column 2 the candidates tie at $4$, so no swap; $l_{32} = 1$ and row 3 minus row 2 is $(0, 0, 1)$. Hence

$$P = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}, \quad L = \begin{pmatrix} 1 & 0 & 0 \\ 0.5 & 1 & 0 \\ -0.5 & 1 & 1 \end{pmatrix}, \quad U = \begin{pmatrix} 4 & -6 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 1 \end{pmatrix}.$$

The growth factor is $\rho_3 = 7/7 = 1$. With $Pb = (-2, 4, 7)^\mathsf{T}$, forward substitution gives $y_1 = -2$, $y_2 = 4 - 0.5(-2) = 5$, $y_3 = 7 - (-0.5)(-2) - 5 = 1$; back substitution gives $x_3 = 1$, $x_2 = (5 - 1)/4 = 1$, $x_1 = (-2 + 6)/4 = 1$. So $x = (1, 1, 1)^\mathsf{T}$, and $A(1,1,1)^\mathsf{T} = (4, -2, 7)^\mathsf{T}$.

### Example 2 — Choosing between factorising and inverting

Solve $Ax_j = b_j$ for a fixed dense $5000 \times 5000$ matrix and $k = 200$ right-hand sides at $2 \times 10^{10}$ flop/s by (a) refactoring each time, (b) factoring once, (c) forming $A^{-1}$.

**Solution.** Here $\tfrac{2}{3}n^3 = 8.33 \times 10^{10}$ and $2n^2 = 5.0 \times 10^7$.

(a) $200 \times (8.33 \times 10^{10} + 5.0 \times 10^7) = 1.67 \times 10^{13}$ flops, about $835$ s.

(b) $8.33 \times 10^{10} + 200 \times 5.0 \times 10^7 = 9.33 \times 10^{10}$ flops, about $4.7$ s.

(c) $2n^3 = 2.5 \times 10^{11}$ plus $200 \times 2n^2 = 1.0 \times 10^{10}$, total $2.6 \times 10^{11}$ flops, about $13$ s.

Option (b) wins by nearly three over the inverse and $180$ over refactoring, and is the most accurate: $A^{-1}b$ by multiplication has backward error bounded by $\kappa(A)u$ rather than $u$.

### Example 3 — The growth factor at work

Eliminate without and with partial pivoting on $A = \begin{pmatrix} 10^{-4} & 1 \\ 1 & 1 \end{pmatrix}$, $b = (1, 2)^\mathsf{T}$, in three-significant-digit decimal arithmetic.

**Solution.** Exactly, $x_2 = (2 - 10^4)/(1 - 10^4) = 9998/9999 = 0.99990$ and $x_1 = 2 - x_2 = 1.0001$.

Without pivoting: $l_{21} = 10^4$ and $u_{22} = 1 - 10^4 = -9999 \to -1.00 \times 10^4$, losing the entry $1$. The right-hand side $2 - 10^4 = -9998 \to -1.00 \times 10^4$. Then $x_2 = 1.00$ and $x_1 = (1 - 1.00)/10^{-4} = 0$, wrong by 100%. The growth factor $\rho \approx 10^4$ amplified the $10^{-4}$ relative rounding in $u_{22}$ on division by the pivot $10^{-4}$.

With pivoting: pivot $1$, $l_{21} = 10^{-4}$, $u_{22} = 1 - 10^{-4} = 0.9999 \to 1.00$, right-hand side $1 - 10^{-4} \times 2 = 0.9998 \to 1.00$. Then $x_2 = 1.00$, $x_1 = 2 - 1.00 = 1.00$, correct to working precision. Now $\rho = 1$, and $\kappa_\infty(A) \approx 4$: an unstable algorithm had been applied to a well-conditioned matrix.

## Common Misconceptions

- **"Solve $Ax = b$ with `inv(A) @ b`."** The inverse costs three factorisations and $A^{-1}b$ has a worse backward error bound; use `solve` or `lu_factor`/`lu_solve`.
- **"Pivoting is only needed for an exactly zero pivot."** Small pivots create large multipliers and growth; partial pivoting is applied unconditionally.
- **"LU with partial pivoting is proven backward stable."** The bound involves $\rho_n$, which can be $2^{n-1}$; stability in practice is an empirical fact, not a theorem for arbitrary $A$.
- **"Gaussian elimination costs $n^3$ flops."** It costs $\tfrac{2}{3}n^3$; the constant matters against Cholesky ($\tfrac{1}{3}n^3$) and Householder QR ($\tfrac{4}{3}n^3$ for square matrices).
- **"A permutation matrix is stored as an $n \times n$ array."** It is a vector of pivot indices, applied by reordering rows; hence `lu_factor` returns `piv`.

## Connections

- The direct solver of Numerical Methods (Lesson m3-l1) here gains a cost model and stability analysis.
- Finite-difference heat-equation problems (Mathematics Lab using Python II, Lesson m1-l4) give banded systems with $O(n)$ LU (Lesson m1-l3).
- Newton–Raphson solves a Jacobian system each step; reusing frozen factors gives the modified Newton methods of stellar-structure codes in Astrophysics.
- `np.linalg.det` computes $\det A = \pm \prod u_{ii}$ from the LU factors, not by $O(n!)$ cofactor expansion.
- Kirchhoff's laws in Electricity and Magnetism and stiffness matrices in Mechanics are solved by this routine.

## Quick Check

1. Show that $M_k = I - l_k e_k^\mathsf{T}$ has inverse $I + l_k e_k^\mathsf{T}$, and why $M_1^{-1} \cdots M_{n-1}^{-1}$ has the multipliers in their natural positions.
2. Derive the $\tfrac{2}{3}n^3$ flop count of LU and the $2n^2$ cost of the triangular solves.
3. For $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 1 \\ 3 & 1 & 2 \end{pmatrix}$, which row becomes the first pivot row under partial pivoting, and what are the first two multipliers?
4. Define $\rho_n$, state the bound $|l_{ij}| \le 1$, and explain why $\rho_n \le 2^{n-1}$ is not a practical obstacle.
5. A solution has relative residual $10^{-15}$ with $\kappa(A) = 10^8$. Would refinement with a double-precision residual help? With an extended-precision residual?

## Takeaway

- Gaussian elimination is $PA = LU$, computed in place in $\tfrac{2}{3}n^3$ flops.
- Each solve costs $2n^2$, so factor once and reuse; the explicit inverse is slower and less accurate.
- Without pivoting the factors, and so the backward error, can be arbitrarily large; partial pivoting bounds multipliers by 1 and keeps growth small in practice.
- LU with partial pivoting is backward stable in practice, so a poor solution signals ill-conditioning.
- Iterative refinement polishes a solution at $O(n^2)$ per pass.
