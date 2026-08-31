***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: computational-methods
subjectName: Computational Methods
courseId: numerical-methods
courseName: Numerical Methods
moduleId: numerical-methods-module-3
moduleName: Linear Systems and ODEs
lessonId: numerical-methods-m3-l1
lessonName: Direct Methods for Linear Systems — LU
lessonNumber: 7
moduleNumber: 3
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - numerical-methods-m2-l2
  - linear-algebra-m2-l1
learningObjectives:
  - Solve $A x = b$ by Gaussian elimination and LU decomposition.
  - State when LU decomposition exists.
  - Apply partial pivoting for stability.
  - Use the Cholesky decomposition for symmetric positive-definite systems.
concepts:
  - Gaussian elimination
  - LU decomposition
  - Partial pivoting
  - Cholesky decomposition
  - Operation count
  - Condition number
tags:
  - computational-methods
  - numerical-analysis
  - linear-systems
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Direct Methods for Linear Systems — LU

## Overview
Solving a system of linear equations $A x = b$ is a basic task in numerical methods: it underlies finite-difference and finite-element PDE solvers, optimisation algorithms, and statistical computations. The direct methods — Gaussian elimination, LU decomposition, and Cholesky decomposition — solve the system in a finite number of operations, exact in exact arithmetic and accurate in floating point with appropriate pivoting. This lesson develops the methods, the role of pivoting, the operation counts, and the practical use.

## Learning Path
- What you should already know: matrix algebra, the structure of triangular systems, basic floating-point arithmetic.
- What this lesson adds: Gaussian elimination, LU and Cholesky decompositions, pivoting, and the cost.
- What it unlocks: iterative methods for sparse systems (next lesson), eigenvalue problems, and the numerical solution of PDEs.

## Core Explanation
**The problem.** Solve $A x = b$ for $x$, given an $n \times n$ matrix $A$ and an $n$-vector $b$. Often $A$ is large and sparse (e.g. from a finite-difference discretisation of a PDE), or dense (e.g. from a small least-squares problem).

**Gaussian elimination.** Reduce $A$ to upper triangular form $U$ by elementary row operations; reduce $b$ in lockstep. Then solve $U x = y$ by back substitution.

**Elementary row operations.** Three types: (1) swap two rows, (2) multiply a row by a nonzero scalar, (3) add a multiple of one row to another. The first two change the solution unless the operations are also applied to $b$. Gaussian elimination uses type 3 (and type 1 for pivoting).

**LU decomposition.** Gaussian elimination is equivalent to factoring $A$ as $A = L U$, where $L$ is lower triangular (with $1$s on the diagonal) and $U$ is upper triangular. Once the factorisation exists, solving $A x = b$ is $L y = b$ (forward substitution) then $U x = y$ (back substitution).

**Existence of LU.** LU decomposition exists if all leading principal minors of $A$ are nonzero (i.e. $A$ is *nonsingular* and no row swaps are needed during elimination). If a zero pivot is encountered, row-swap (pivoting) is required.

**Pivoting.** To avoid division by zero and to improve numerical stability, swap rows (or columns) during elimination. *Partial pivoting*: at each step, swap the current row with the row having the largest absolute value in the current column. *Complete pivoting*: also swap columns (rarely needed).

**LU with partial pivoting.** $P A = L U$ where $P$ is a permutation matrix. The permutation is tracked and applied to $b$ as well.

**Operation count.** Gaussian elimination on an $n \times n$ matrix is $O(n^3)$: $\frac{2}{3} n^3$ flops for the factorisation, plus $O(n^2)$ for the forward and back substitution. For large $n$, this is expensive.

**Storage.** For a dense $A$, the $L$ and $U$ factors take $O(n^2)$ storage (the same as $A$). For sparse $A$, $L$ and $U$ may be denser (a phenomenon called *fill-in*).

**Cholesky decomposition.** For symmetric positive-definite $A$, $A = G G^T$ where $G$ is lower triangular with positive diagonal. The factorisation always exists, and no pivoting is needed. Cost: $\frac{1}{3} n^3$ flops (half of LU). Standard for least squares, optimisation, and finite-element stiffness matrices.

**Stability of Gaussian elimination.** With partial pivoting, Gaussian elimination is *backward stable*: the computed solution $\hat{x}$ is the exact solution of $(A + \delta A) \hat{x} = b$ with $|\delta A| / |A|$ of order $n \epsilon$ (machine epsilon). Without pivoting, the algorithm can be unstable for certain matrices.

**Condition number.** The *condition number* of $A$, $\kappa(A) = \|A\| \|A^{-1}\|$, measures the sensitivity of $A x = b$ to perturbations. If $\kappa$ is large, small changes in $b$ produce large changes in $x$. The relative error in the computed solution is bounded by $\kappa(A)$ times machine epsilon.

**Ill-conditioned systems.** A system with $\kappa(A) \gg 1$ is ill-conditioned. Examples: Hilbert matrices, Vandermonde matrices, or matrices with rows nearly proportional. Iterative refinement can recover some accuracy.

**Iterative refinement.** Compute $\hat{x}$ by LU; compute the residual $r = b - A \hat{x}$; solve $A \delta = r$ for the correction; update $\hat{x} \leftarrow \hat{x} + \delta$. This can recover lost accuracy at the cost of an extra solve per iteration.

**Matrix conditioning.** A measure of how close $A$ is to being singular. $\kappa(A) = 1$ means $A$ is perfectly conditioned. $\kappa(A) = \infty$ means $A$ is singular. In practice, $\kappa(A) \approx 10^k$ means you lose about $k$ digits of accuracy.

**Special matrices.** Tridiagonal, banded, and sparse matrices have specialised solvers. For a tridiagonal $A$, the Thomas algorithm (a specialised LU) is $O(n)$ — much faster than dense LU.

**Band matrices.** A banded matrix has nonzero entries only near the diagonal (bandwidth $w$). LU decomposition preserves the band structure, with cost $O(n w^2)$.

**Sparse LU.** For genuinely sparse matrices, specialised orderings (minimum-degree, nested dissection) reduce fill-in. Used in finite-element solvers.

**Eigenvalues via LU.** Repeated LU decompositions can compute the eigenvalues of a matrix: $A_0 = A$, $A_{k+1} = L_k^{-1} A_k U_k^{-1}$ (the *QR algorithm* uses QR instead of LU; more stable).

**Solving multiple right-hand sides.** For the same $A$ but many $b$, the LU factorisation is done once and used for each $b$. Cost per $b$: $O(n^2)$ (forward + back substitution), versus $O(n^3)$ for fresh Gaussian elimination.

**Sparse direct solvers.** For very large sparse systems, packages like UMFPACK, SuperLU, MUMPS use sophisticated orderings and efficient data structures to compute LU quickly and with limited fill-in.

**Scaling.** Before solving, scale $A$ and $b$ so that the diagonal is dominant (or so that all rows have similar norms). This improves the conditioning and the accuracy of the solution.

**Partial vs. complete pivoting.** Partial is much cheaper ($O(n^2)$ vs. $O(n^3)$ for complete) and sufficient for almost all practical matrices. Complete is used in numerical linear algebra libraries for stability.

**Block LU.** For large matrices, the operations are organised into blocks for cache efficiency. This gives a significant speedup in practice. Used in BLAS and LAPACK.

**Iterative methods.** For very large sparse systems, iterative methods (next lesson) are often preferred. Direct methods may require too much memory and time. The choice depends on the problem.

**Stability of Cholesky.** Cholesky is stable for symmetric positive-definite matrices. The computed $G$ satisfies $G G^T = A + \delta A$ with $|\delta A| / |A|$ of order $\epsilon$. No pivoting is required.

**Implementation.** All numerical libraries (LAPACK, SciPy, etc.) provide LU and Cholesky. The user should almost never write their own; the libraries are highly optimised and tested.

**Avoiding forming $A^{-1}$.** Computing $A^{-1}$ explicitly is wasteful and numerically less stable. Solve $A x = b$ by LU + forward + back substitution instead.

**Sparse matrices in physics.** Finite-difference and finite-element discretisations of PDEs give sparse matrices. Direct sparse solvers (UMFPACK, MUMPS) are widely used in computational physics.

**Banded matrices in physics.** Tridiagonal matrices arise from 1D finite differences; pentadiagonal from 2D with one-sided stencils. Banded solvers are standard.

**Conditioning in physics.** Many physical problems are ill-conditioned: ill-posed inverse problems, near-singular integral equations, stiff ODEs. Conditioning analysis is part of the numerical methodology.

**Solving $A X = B$ for many $B$.** The same LU factorisation, with multiple forward and back substitutions. Used in uncertainty quantification and in iterative methods.

**Sparse Cholesky.** For symmetric positive-definite sparse matrices (typical in finite elements), sparse Cholesky is very efficient. Used in every finite-element code.

**Direct methods vs. iterative.** Direct methods are exact (in exact arithmetic) and robust; iterative methods are faster for large sparse systems. The cutoff is roughly $n \approx 10^4$ for dense matrices, much higher for sparse.

**Application: Schrödinger equation.** Discretise the Hamiltonian; solve the eigenvalue problem $H \psi = E \psi$ for the lowest few eigenvalues. For small systems, direct methods (LAPACK) work; for large systems, iterative methods (Lanczos, Davidson).

**Application: Heat equation.** Discretise on a grid; advance in time with implicit methods. Each time step requires solving a sparse linear system. Direct methods work for small grids; multigrid or iterative methods for large.

**Application: Linear regression.** Solve the normal equations $X^T X \beta = X^T y$ by Cholesky on $X^T X$. The condition number of $X^T X$ is the square of the condition number of $X$ — can be problematic.

**Preconditioning.** For iterative methods (next lesson), preconditioning by an approximate inverse of $A$ accelerates convergence. Direct methods can be used to construct good preconditioners.

## Key Ideas
- LU decomposition: $A = L U$ (with pivoting: $P A = L U$).
- Gaussian elimination is $O(n^3)$ flops; substitution is $O(n^2)$.
- Partial pivoting is needed for stability; $O(n^2)$ cost.
- Cholesky for symmetric positive-definite: $A = G G^T$, $O(n^3/3)$ flops, no pivoting.
- Condition number $\kappa(A)$ measures sensitivity to perturbation.

## Worked Examples
**Example 1 — LU of a $2 \times 2$ matrix.** $A = \begin{pmatrix} 2 & 1 \\ 4 & 9 \end{pmatrix}$. Step 1: $L_{21} = 4/2 = 2$. $A' = A - 2 \cdot (\text{row 1 of } A) = \begin{pmatrix} 2 & 1 \\ 0 & 7 \end{pmatrix}$. So $L = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$, $U = \begin{pmatrix} 2 & 1 \\ 0 & 7 \end{pmatrix}$. ✓

**Example 2 — Solve $A x = b$.** $A = \begin{pmatrix} 2 & 1 \\ 4 & 9 \end{pmatrix}$, $b = (5, 21)$. $L y = b$: $y_1 = 5$, $2 y_1 + y_2 = 21 \Rightarrow y_2 = 11$. $U x = y$: $2 x_1 + x_2 = 5$, $7 x_2 = 11 \Rightarrow x_2 = 11/7$, $x_1 = (5 - 11/7)/2 = 12/7$. $x = (12/7, 11/7)$.

**Example 3 — Cholesky.** $A = \begin{pmatrix} 4 & 2 \\ 2 & 5 \end{pmatrix}$. Positive-definite (eigenvalues $3, 6 > 0$). $G = \begin{pmatrix} g_{11} & 0 \\ g_{21} & g_{22} \end{pmatrix}$. $G G^T = \begin{pmatrix} g_{11}^2 & g_{11} g_{21} \\ g_{11} g_{21} & g_{21}^2 + g_{22}^2 \end{pmatrix}$. Equate: $g_{11} = 2$, $g_{21} = 1$, $g_{22} = \sqrt{5 - 1} = 2$. $G = \begin{pmatrix} 2 & 0 \\ 1 & 2 \end{pmatrix}$. ✓

**Example 4 — Condition number.** Hilbert matrix $H_{ij} = 1/(i + j - 1)$. $\kappa_2(H_n) \sim e^{3.5 n}$ — doubly exponential! For $n = 6$, $\kappa \approx 1.5 \times 10^7$; for $n = 10$, $\kappa \approx 10^{13}$. Solving $H x = b$ loses all precision for $n \ge 7$ or so.

## Common Misconceptions
- **"LU exists for all matrices."** Only with pivoting. Without pivoting, even non-singular matrices can fail.
- **"More pivoting is always better."** Complete pivoting is more expensive and rarely needed. Partial is usually enough.
- **"Cholesky is just LU for symmetric matrices."** It is more efficient (half the flops) and doesn't need pivoting.
- **"Computing $A^{-1}$ is the same as solving $A x = b$."** Computing $A^{-1}$ is more expensive ($O(n^3)$ to invert) and less stable. Always solve, never invert.

## Connections
Direct methods are the workhorses of numerical linear algebra. They underlie iterative methods (as preconditioners), eigenvalue problems, optimisation, and PDE solvers. The Cholesky decomposition is the basis of least squares, Kalman filtering, and Monte Carlo Markov chains.

## Quick Check
1. State the LU decomposition.
2. What is the cost of LU decomposition?
3. Why is pivoting needed?
4. When is Cholesky decomposition possible?
5. What does the condition number measure?

## Takeaway
- Gaussian elimination: $A = L U$ (or $P A = L U$ with pivoting).
- $O(n^3)$ flops; pivoting needed for stability.
- Cholesky for symmetric positive-definite: $A = G G^T$, no pivoting.
- Condition number $\kappa(A)$ measures sensitivity.
- Never compute $A^{-1}$; solve $A x = b$ by LU + substitution.
