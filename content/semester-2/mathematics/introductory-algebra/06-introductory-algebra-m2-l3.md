***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: introductory-algebra
courseName: Introductory Algebra
moduleId: introductory-algebra-module-2
moduleName: Matrices, Determinants, and Linear Systems
lessonId: introductory-algebra-m2-l3
lessonName: Solving Linear Systems — Gaussian Elimination
lessonNumber: 6
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 45
releaseOrder: 6
prerequisites:
  - introductory-algebra-m2-l2
learningObjectives:
  - Solve a linear system by Gaussian elimination and back-substitution.
  - Identify the rank, the solution set, and the conditions for solvability.
  - Apply matrix methods to small systems arising in physics problems.
concepts:
  - Linear system
  - Gaussian elimination
  - Back-substitution
  - Rank
  - Homogeneous and inhomogeneous systems
  - LU decomposition
tags:
  - mathematics
  - algebra
  - linear-systems
  - gaussian-elimination
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Solving Linear Systems — Gaussian Elimination

## Overview

A linear system $A \vec x = \vec b$ is a set of $m$ linear equations in $n$ unknowns. The lesson develops Gaussian elimination: the standard algorithm for solving linear systems by row reduction to upper triangular form, followed by back-substitution. The lesson covers the three cases (unique solution, infinitely many solutions, no solution), the role of the rank, and the application to homogeneous systems. The lesson closes with the LU decomposition (Gaussian elimination recorded as a matrix factorisation), which is the standard form of the algorithm in numerical analysis. The lesson is the foundation of linear algebra and of the numerical methods in Semester 4.

## Learning Path

- **What you should already know**: matrices, matrix operations, and the determinant (Lessons m2-l1 and m2-l2); the basics of row operations.
- **What this lesson adds**: Gaussian elimination by hand; back-substitution; the three cases (unique, infinite, no solution); the LU decomposition; the application to small physics systems.
- **What later lessons this will unlock**: linear algebra in Semester 5 (eigenvalues, singular value decomposition); the numerical methods in Semester 4 (iterative solvers, conditioning); applications in physics throughout the programme.

## Core Explanation

### Linear systems

A **linear system** is a set of $m$ equations in $n$ unknowns $x_1, \ldots, x_n$, each equation linear in the unknowns. In matrix form,

$$A \vec x = \vec b,$$

where $A$ is $m \times n$, $\vec x \in \mathbb{R}^n$ is the unknown vector, and $\vec b \in \mathbb{R}^m$ is the right-hand side.

A system is **homogeneous** if $\vec b = \vec 0$; otherwise it is **inhomogeneous**. A homogeneous system always has the trivial solution $\vec x = \vec 0$; non-trivial solutions exist iff $\det(A) = 0$ (for a square system).

The system is **consistent** (has at least one solution) iff $\vec b$ is in the column space of $A$, equivalently iff the rank of the augmented matrix $[A | \vec b]$ equals the rank of $A$.

### Three cases

A linear system can have:

- **A unique solution**: the system is square ($m = n$) and $\det(A) \ne 0$. The solution is $\vec x = A^{-1} \vec b$.
- **Infinitely many solutions**: the system has more unknowns than equations ($n > m$) and is consistent. The general solution is a particular solution plus a linear combination of basis vectors of the null space.
- **No solution**: the system is inconsistent; the rank of $[A | \vec b]$ is strictly greater than the rank of $A$.

The three cases are distinguished by the ranks of $A$ and $[A | \vec b]$.

### Gaussian elimination

**Gaussian elimination** solves a linear system by transforming it to upper triangular form via elementary row operations, then back-substituting to find the unknowns.

**Algorithm**:
1. Write the augmented matrix $[A | \vec b]$.
2. Use row operations to put $A$ in row echelon form (upper triangular).
3. Back-substitute from the last row to the first to find $\vec x$.

The three elementary row operations:
- **Swap two rows**: $R_i \leftrightarrow R_j$.
- **Scale a row by a non-zero constant**: $R_i \to c R_i$.
- **Add a multiple of one row to another**: $R_i \to R_i + c R_j$ ($i \ne j$).

The row operations do not change the solution set of the system.

### Worked example: $3 \times 3$ system by hand

Solve
$$\begin{cases} 2 x + y - z = 8 \\ -3 x - y + 2 z = -11 \\ -2 x + y + 2 z = -3 \end{cases}.$$

Augmented matrix:
$$\left[\begin{array}{ccc|c} 2 & 1 & -1 & 8 \\ -3 & -1 & 2 & -11 \\ -2 & 1 & 2 & -3 \end{array}\right].$$

Step 1: $R_2 \to R_2 + (3/2) R_1$ and $R_3 \to R_3 + R_1$:
$$\left[\begin{array}{ccc|c} 2 & 1 & -1 & 8 \\ 0 & 1/2 & 1/2 & 1 \\ 0 & 2 & 1 & 5 \end{array}\right].$$

Step 2: $R_3 \to R_3 - 4 R_2$:
$$\left[\begin{array}{ccc|c} 2 & 1 & -1 & 8 \\ 0 & 1/2 & 1/2 & 1 \\ 0 & 0 & -1 & 1 \end{array}\right].$$

Back-substitution: from row 3, $-z = 1$, so $z = -1$. From row 2, $(1/2) y + (1/2)(-1) = 1$, so $y = 3$. From row 1, $2 x + 3 - (-1) = 8$, so $x = 2$. Solution: $(x, y, z) = (2, 3, -1)$.

### Pivoting and numerical stability

In floating-point arithmetic, the choice of pivot matters. If the pivot (the leading entry in a row) is small, the row operations amplify round-off errors. The fix is **partial pivoting**: at each step, swap the current row with the row below it that has the largest absolute value in the pivot column. The resulting algorithm is numerically stable.

The algorithm with partial pivoting is what most numerical libraries implement (e.g. LAPACK's `dgesv` for square systems). The basic Gaussian elimination without pivoting is used only when the matrix is known to be well-conditioned.

### LU decomposition

The row operations of Gaussian elimination can be recorded as a matrix factorisation: $A = L U$, where $L$ is lower triangular (with $1$'s on the diagonal) and $U$ is upper triangular. The factorisation encodes the elimination; solving $A \vec x = \vec b$ becomes $L \vec y = \vec b$ (forward substitution) and $U \vec x = \vec y$ (back-substitution), both $O(n^2)$ given $L$ and $U$.

With partial pivoting, the factorisation is $P A = L U$, where $P$ is a permutation matrix encoding the row swaps. The factorisation is the basis of most linear-algebra computations.

### Rank and the solution set

The **rank** of $A$, denoted $\text{rank}(A)$, is the number of linearly independent rows (or columns) of $A$. Equivalently, it is the number of pivots in the row echelon form.

The system $A \vec x = \vec b$ has:
- A unique solution if $\text{rank}(A) = \text{rank}(A | \vec b) = n$.
- Infinitely many solutions if $\text{rank}(A) = \text{rank}(A | \vec b) < n$.
- No solution if $\text{rank}(A) < \text{rank}(A | \vec b)$.

For a square matrix ($m = n$), the unique-solution case is equivalent to $\det(A) \ne 0$ (the system is non-singular).

### Homogeneous systems

A homogeneous system $A \vec x = 0$ always has the trivial solution $\vec x = 0$. Non-trivial solutions exist iff $\text{rank}(A) < n$, equivalently (for a square matrix) iff $\det(A) = 0$. The set of solutions forms a vector space (the null space of $A$), with dimension $n - \text{rank}(A)$.

For example, the system $x + y = 0$, $2 x + 2 y = 0$ has a one-dimensional null space spanned by $(1, -1)$. The system is consistent (always, since the trivial solution is one) but has infinitely many solutions.

The non-trivial solutions of a homogeneous system are the basis for the **eigenvector problem**: $A \vec v = \lambda \vec v$ is equivalent to $(A - \lambda I) \vec v = 0$, a homogeneous system with a non-trivial solution iff $\det(A - \lambda I) = 0$.

### Inconsistent systems and least squares

If the system $A \vec x = \vec b$ is inconsistent (no exact solution), the standard approach is **least squares**: find $\vec x$ that minimises $\|A \vec x - \vec b\|^2$. The solution is $\vec x = (A^T A)^{-1} A^T \vec b$ (the **normal equations**), provided $A^T A$ is invertible.

Least squares is the workhorse of data fitting: given data points $(x_i, y_i)$, fit a function $f(x; \vec c)$ by minimising $\sum (y_i - f(x_i; \vec c))^2$. The normal equations give the optimal parameters.

### LU decomposition in physics

- **Tridiagonal systems**: many physics problems (1D Schrödinger equation, 1D heat equation, finite-difference discretisations of 1D ODEs) lead to tridiagonal systems. The Thomas algorithm solves a tridiagonal system in $O(n)$ time.
- **Sparse systems**: 2D and 3D discretisations of PDEs lead to sparse systems. Direct solvers (LU, Cholesky) work for moderate sizes; iterative solvers (conjugate gradient, GMRES) are needed for large systems.
- **Iterative methods**: for very large systems, iterative methods (Gauss–Seidel, conjugate gradient, multigrid) are the practical choice, especially when the matrix is structured.

The numerical solution of linear systems is a major topic in scientific computing; the Semester 4 course on Numerical Methods develops it further.

### Worked Examples

**Example 1 — $2 \times 2$ system.**

Solve $\begin{cases} 3 x + 2 y = 12 \\ 2 x - y = 1 \end{cases}$.

**Solution.** $R_2 \to R_2 + (2/3) R_1$: $0 x - y + 8/3 = 1 + 8 = 9$, so $-y = 1$, $y = -1$. Then $3 x + 2(-1) = 12$, $x = 14/3$. Solution: $(x, y) = (14/3, -1)$.

**Example 2 — Rank-deficient system.**

Solve $\begin{cases} x + y + z = 1 \\ 2 x + 2 y + 2 z = 3 \\ x + 2 y + 3 z = 0 \end{cases}$.

**Solution.** Augmented matrix:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 2 & 2 & 2 & 3 \\ 1 & 2 & 3 & 0 \end{array}\right].$$

$R_2 \to R_2 - 2 R_1$ and $R_3 \to R_3 - R_1$:
$$\left[\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 1 \\ 0 & 1 & 2 & -1 \end{array}\right].$$

Row 2 says $0 = 1$, which is impossible. The system is inconsistent. No solution.

**Example 3 — Underdetermined system.**

Solve $\begin{cases} x + y + z = 1 \\ 2 x + y - z = 0 \end{cases}$.

**Solution.** $R_2 \to R_2 - 2 R_1$: $-y - 3 z = -2$, so $y = 2 - 3 z$. Then $x = 1 - y - z = 1 - 2 + 3 z - z = -1 + 2 z$. General solution: $(x, y, z) = (-1 + 2 z, 2 - 3 z, z) = (-1, 2, 0) + z (2, -3, 1)$. The system has infinitely many solutions, parametrised by $z$.

## Key Ideas

- A linear system $A \vec x = \vec b$ can have a unique solution, infinitely many solutions, or no solution.
- Gaussian elimination: row reduce to upper triangular form, then back-substitute.
- The rank of $A$ and $[A | \vec b]$ determines the type of solution.
- The LU decomposition: $A = L U$, with $L$ lower triangular and $U$ upper triangular; with partial pivoting, $P A = L U$.
- The homogeneous system $A \vec x = 0$ has non-trivial solutions iff $\det(A) = 0$.
- The least-squares solution $\vec x = (A^T A)^{-1} A^T \vec b$ is used for inconsistent systems.

## Common Misconceptions

- **"Gaussian elimination always gives a unique solution."** No. It can give a unique solution, infinitely many, or none, depending on the rank of the system.
- **"A square linear system always has a solution."** No. Even a square system can be inconsistent (e.g. $x = 1, x = 2$).
- **"The LU decomposition always exists."** It exists if all pivots are non-zero. With partial pivoting (i.e. $P A = L U$), it always exists.
- **"Pivoting is optional."** It is essential for numerical stability. Without it, ill-conditioned matrices can give garbage.
- **"Least squares always works."** It gives the best approximation in the 2-norm. Other norms (e.g. $L^1$, $L^\infty$) require different methods.

## Connections

- Linear systems are the backbone of scientific computing; the Semester 4 course develops them further.
- The LU decomposition is the basis of direct solvers in LAPACK and other libraries.
- The null space of a matrix is the foundation of the singular value decomposition and of the principal component analysis.
- The least-squares solution is the basis of regression in statistics and machine learning.
- The homogeneous system is the foundation of the eigenvalue problem.

## Quick Check

1. Solve the system $\begin{cases} 2 x + y = 5 \\ x - y = 1 \end{cases}$.
2. State the three cases for a linear system and the rank condition for each.
3. Solve the system $\begin{cases} x + y = 1 \\ 2 x + 2 y = 2 \\ x - y = 0 \end{cases}$.
4. What is the LU decomposition of $\begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$?
5. Solve the homogeneous system $\begin{cases} x - y = 0 \\ 2 x - 2 y = 0 \end{cases}$.

## Takeaway

- Linear systems are solved by Gaussian elimination: row reduce and back-substitute.
- The three cases (unique, infinite, none) are determined by the ranks of $A$ and $[A | \vec b]$.
- The LU decomposition is the standard form of the algorithm.
- Homogeneous systems have non-trivial solutions iff the matrix is singular.
- Least squares is the standard approach for inconsistent systems.
- The numerical solution of linear systems is a major topic in scientific computing.
