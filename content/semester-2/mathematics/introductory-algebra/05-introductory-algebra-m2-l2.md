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
lessonId: introductory-algebra-m2-l2
lessonName: Determinants
lessonNumber: 5
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 45
releaseOrder: 5
prerequisites:
  - introductory-algebra-m2-l1
learningObjectives:
  - Compute the determinant of a square matrix by cofactor expansion or row reduction.
  - Apply the rules of determinants (multiplicativity, transpose, row operations).
  - Use the determinant to test invertibility, compute volumes, and solve linear systems.
concepts:
  - Determinant
  - Cofactor expansion
  - Invertibility
  - Cramer's rule
  - Geometric interpretation
  - Permutation formula
tags:
  - mathematics
  - algebra
  - determinants
  - linear-algebra
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Determinants

## Overview

The determinant is a scalar-valued function of a square matrix that encodes the matrix's invertibility, the volume scaling of the corresponding linear map, and the product of the eigenvalues. The lesson develops the determinant from the permutation formula, the cofactor expansion, and the row-reduction approach. The lesson shows the rules of determinants (multiplicativity, transpose invariance, behaviour under row operations) and the geometric interpretation as a signed volume. The lesson closes with Cramer's rule for solving linear systems and the connection to the inverse of a matrix. The determinant is the gateway to the theory of eigenvalues, the change of variables in multiple integrals, and the classification of linear systems.

## Learning Path

- **What you should already know**: matrices and matrix operations (Lesson m2-l1); the $2 \times 2$ determinant (from earlier algebra); permutations of a finite set.
- **What this lesson adds**: the general definition of the determinant; the cofactor expansion; the rules of determinants; Cramer's rule; the geometric interpretation as a signed volume.
- **What later lessons this will unlock**: solving linear systems in Lesson m2-l3; the theory of eigenvalues in linear algebra (Semester 5); the Jacobian in multivariable calculus.

## Core Explanation

### The $2 \times 2$ determinant

For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the **determinant** is

$$\det(A) = a d - b c.$$

The determinant is the signed area of the parallelogram spanned by the column vectors of $A$. If the columns are parallel, the area is zero and the determinant is zero. The sign of the determinant tells whether the orientation of the columns is preserved ($+$) or reversed ($-$).

The $2 \times 2$ case is the basis for the generalisation. The pattern $a d - b c$ — product of diagonal minus product of off-diagonal — is a special case of the Leibniz formula below.

### The Leibniz formula

The determinant of an $n \times n$ matrix $A$ is given by the **Leibniz formula**:

$$\det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i=1}^n a_{i, \sigma(i)},$$

where the sum is over all permutations $\sigma$ of $\{1, 2, \ldots, n\}$ and $\text{sgn}(\sigma)$ is the sign of the permutation ($+1$ for even permutations, $-1$ for odd). For $n = 2$, the permutations are the identity (sgn $+1$, contribution $a_{11} a_{22}$) and the swap (sgn $-1$, contribution $-a_{12} a_{21}$), giving $a d - b c$. ✓

For $n = 3$, there are $6$ permutations; the determinant is a sum of $6$ signed products, each a product of $3$ entries (one from each row and one from each column).

The Leibniz formula is impractical for computation but useful for proofs: it shows that the determinant is a polynomial in the entries of $A$, and it makes the algebraic properties (multiplicativity, etc.) manifest.

### Cofactor expansion

The determinant can be computed by **cofactor expansion** along a row or column. The $(i, j)$ **minor** $M_{ij}$ is the determinant of the $(n - 1) \times (n - 1)$ submatrix obtained by deleting row $i$ and column $j$. The $(i, j)$ **cofactor** is $C_{ij} = (-1)^{i + j} M_{ij}$. The cofactor expansion along row $i$ is

$$\det(A) = \sum_{j=1}^n a_{ij} C_{ij} = \sum_{j=1}^n (-1)^{i + j} a_{ij} M_{ij}.$$

The expansion along any row (or column) gives the same answer. The choice of row or column is a computational strategy: pick a row or column with many zeros.

For a $3 \times 3$ matrix, cofactor expansion reduces to three $2 \times 2$ determinants. The recursive structure of the expansion gives a polynomial-time algorithm for the determinant; the naive Leibniz formula is exponential-time.

### Determinant by row reduction

A more efficient method: row reduce the matrix to upper triangular form using elementary row operations, and compute the determinant from the result. The row operations affect the determinant in well-defined ways:

- **Row swap**: multiplies the determinant by $-1$.
- **Row scaling by $c$**: multiplies the determinant by $c$.
- **Row addition** (adding a multiple of one row to another): does not change the determinant.

For an upper triangular matrix, the determinant is the product of the diagonal entries. So if row reduction takes $A$ to an upper triangular $U$, with row swaps (counted) and row scalings (counted) in the process,

$$\det(A) = (-1)^s \prod (\text{row scaling factors}) \cdot \prod_{i = 1}^n u_{ii},$$

where $s$ is the number of row swaps. Gaussian elimination is the standard algorithm.

### Properties of the determinant

The determinant satisfies a number of useful properties:

- **Multiplicativity**: $\det(A B) = \det(A) \det(B)$.
- **Transpose**: $\det(A^T) = \det(A)$.
- **Inverse**: $\det(A^{-1}) = 1 / \det(A)$ when $A$ is invertible.
- **Scalar**: $\det(c A) = c^n \det(A)$ for $n \times n$ $A$.
- **Block diagonal**: $\det \begin{pmatrix} A & 0 \\ 0 & B \end{pmatrix} = \det(A) \det(B)$.
- **Conjugate transpose**: $\det(A^*) = \overline{\det(A)}$.
- **Triangular**: $\det(A) = \prod_i a_{ii}$ for triangular $A$.
- **Row/column operation**: swapping two rows flips the sign; scaling a row by $c$ multiplies the determinant by $c$; adding a multiple of one row to another does not change the determinant.
- **Sum of rows**: if two rows of $A$ are equal, $\det(A) = 0$.

The properties follow from the Leibniz formula (and from the row-reduction definition). The multiplicativity is the most important: it implies that a matrix is invertible iff its determinant is non-zero.

### Invertibility criterion

A square matrix $A$ is **invertible** iff $\det(A) \ne 0$. The inverse is given by

$$A^{-1} = \frac{1}{\det(A)} \text{adj}(A),$$

where $\text{adj}(A)$ is the **adjugate** (classical adjoint): $\text{adj}(A)_{ij} = C_{ji}$ (the transpose of the cofactor matrix).

For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ with $ad - bc \ne 0$:

$$A^{-1} = \frac{1}{a d - b c} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}.$$

For larger matrices, the adjugate is computationally expensive; the Gauss–Jordan method is preferred.

### Geometric interpretation

The determinant is the **signed volume** of the parallelepiped spanned by the column vectors of $A$. For a $2 \times 2$ matrix, the signed area; for a $3 \times 3$ matrix, the signed volume; in general, the signed $n$-dimensional volume.

The sign of the determinant tells whether the orientation is preserved (positive determinant) or reversed (negative). A zero determinant means the parallelepiped is degenerate (the vectors are linearly dependent) and the volume is zero.

The geometric interpretation is the basis of the change-of-variables formula in multivariable calculus: the volume element transforms by the absolute value of the Jacobian determinant.

### Determinant and eigenvalues

The determinant of a matrix is the product of its eigenvalues (counted with multiplicity). This connects the determinant to the characteristic polynomial and to the spectral theory. For a triangular matrix, the eigenvalues are the diagonal entries, and the determinant is their product. The multiplicativity of the determinant then follows from the multiplicativity of the characteristic polynomial.

For real symmetric matrices (or Hermitian matrices), the eigenvalues are real, and the determinant is the product of the real eigenvalues. The sign of the determinant is positive iff the number of negative eigenvalues is even.

### Cramer's rule

**Cramer's rule** solves a linear system $A \vec x = \vec b$ using determinants:

$$x_i = \frac{\det(A_i)}{\det(A)},$$

where $A_i$ is the matrix $A$ with the $i$-th column replaced by $\vec b$. Cramer's rule is useful for small systems (especially $2 \times 2$ and $3 \times 3$) and for theoretical arguments, but inefficient for large systems (it requires $O(n)$ determinants of size $n \times n$, each $O(n^3)$, giving $O(n^4)$ overall — slower than Gaussian elimination at $O(n^3)$).

For a $2 \times 2$ system:
$$\begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} e \\ f \end{pmatrix}, \quad x = \frac{e d - b f}{a d - b c}, \quad y = \frac{a f - e c}{a d - b c}.$$

### The Vandermonde determinant

The **Vandermonde matrix** is

$$V = \begin{pmatrix} 1 & 1 & 1 & \cdots & 1 \\ x_1 & x_2 & x_3 & \cdots & x_n \\ x_1^2 & x_2^2 & x_3^2 & \cdots & x_n^2 \\ \vdots & \vdots & \vdots & \ddots & \vdots \\ x_1^{n-1} & x_2^{n-1} & x_3^{n-1} & \cdots & x_n^{n-1} \end{pmatrix},$$

with determinant

$$\det(V) = \prod_{1 \le i < j \le n} (x_j - x_i).$$

The Vandermonde determinant is zero iff two of the $x_i$ are equal (the columns are linearly dependent). It appears in polynomial interpolation, in the theory of resultants, and in the study of orthogonal polynomials.

### The Wronskian

The **Wronskian** of $n$ differentiable functions $f_1, \ldots, f_n$ is the determinant of the matrix of their derivatives:

$$W(f_1, \ldots, f_n) = \det \begin{pmatrix} f_1 & f_2 & \cdots & f_n \\ f_1' & f_2' & \cdots & f_n' \\ \vdots & \vdots & \ddots & \vdots \\ f_1^{(n-1)} & f_2^{(n-1)} & \cdots & f_n^{(n-1)} \end{pmatrix}.$$

The Wronskian is zero iff the functions are linearly dependent (under suitable conditions). It appears in the theory of linear ODEs and in the proof of the existence of fundamental solution sets.

### Determinants in physics

- **Classical mechanics**: the determinant of the Jacobian appears in the change of variables in the action integral; phase-space volumes are preserved by Hamiltonian flow (Liouville's theorem).
- **Quantum mechanics**: the Wronskian of solutions of a Schrödinger-like equation determines their linear independence; the determinant of the density matrix gives the partition function.
- **Statistical mechanics**: the partition function $Z = \text{tr}(e^{-\beta H})$ involves traces of matrices; for classical systems, the determinant of the Hessian (matrix of second derivatives) determines the stability of equilibria.
- **Electromagnetism**: the determinant of the Jacobian is the volume element in the change of variables for integration.
- **Special relativity**: the Lorentz transformation has determinant $\pm 1$, preserving orientation and (for proper Lorentz transformations) orientation sign.

The determinant is the most concise scalar summary of a square matrix.

### Worked Examples

**Example 1 — $3 \times 3$ determinant by cofactor expansion.**

Compute $\det \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 10 \end{pmatrix}$.

**Solution.** Expand along the first row:

$\det = 1 \cdot \det \begin{pmatrix} 5 & 6 \\ 8 & 10 \end{pmatrix} - 2 \cdot \det \begin{pmatrix} 4 & 6 \\ 7 & 10 \end{pmatrix} + 3 \cdot \det \begin{pmatrix} 4 & 5 \\ 7 & 8 \end{pmatrix}$

$= 1 \cdot (50 - 48) - 2 \cdot (40 - 42) + 3 \cdot (32 - 35) = 1 \cdot 2 - 2 \cdot (-2) + 3 \cdot (-3) = 2 + 4 - 9 = -3$.

**Example 2 — Cramer's rule.**

Solve $\begin{cases} 2 x + 3 y = 7 \\ x - y = 1 \end{cases}$.

**Solution.** $A = \begin{pmatrix} 2 & 3 \\ 1 & -1 \end{pmatrix}$, $\det(A) = 2(-1) - 3(1) = -5$. $A_1 = \begin{pmatrix} 7 & 3 \\ 1 & -1 \end{pmatrix}$, $\det(A_1) = 7(-1) - 3(1) = -10$. $A_2 = \begin{pmatrix} 2 & 7 \\ 1 & 1 \end{pmatrix}$, $\det(A_2) = 2(1) - 7(1) = -5$. $x = \det(A_1) / \det(A) = -10 / -5 = 2$. $y = \det(A_2) / \det(A) = -5 / -5 = 1$.

Check: $2 \cdot 2 + 3 \cdot 1 = 7$ ✓, $2 - 1 = 1$ ✓.

**Example 3 — Vandermonde determinant.**

Compute the Vandermonde determinant for $x_1 = 1, x_2 = 2, x_3 = 3$, $n = 3$.

**Solution.** $\det(V) = (x_2 - x_1)(x_3 - x_1)(x_3 - x_2) = 1 \cdot 2 \cdot 1 = 2$. Direct: $V = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 4 & 9 \end{pmatrix}$, $\det(V) = 1 (18 - 12) - 1 (9 - 3) + 1 (4 - 2) = 6 - 6 + 2 = 2$. ✓

## Key Ideas

- The determinant is a scalar function of a square matrix, given by the Leibniz formula or by cofactor expansion.
- Properties: $\det(AB) = \det(A) \det(B)$, $\det(A^T) = \det(A)$, $\det(c A) = c^n \det(A)$.
- Invertibility: $A$ is invertible iff $\det(A) \ne 0$.
- Geometric interpretation: signed volume of the parallelepiped spanned by the columns.
- Cramer's rule: $x_i = \det(A_i) / \det(A)$.
- Determinant = product of eigenvalues; determinant = 0 iff the matrix is singular.

## Common Misconceptions

- **"$\det(A + B) = \det(A) + \det(B)$."** No. The determinant is not additive. The multiplicativity $\det(AB) = \det(A) \det(B)$ is a different kind of identity.
- **"$\det(A) \ne 0$ implies $A$ is non-singular."** Yes, but the converse also holds: $\det(A) = 0$ iff $A$ is singular. The two are equivalent.
- **"The determinant is the same as the trace."** No. The trace is the sum of the diagonal entries; the determinant is the product. For a $2 \times 2$ matrix, trace is $a + d$, determinant is $ad - bc$.
- **"Cramer's rule is the best method for solving linear systems."** It is elegant but slow for large systems. Gaussian elimination is the standard algorithm.
- **"A zero determinant means the matrix is the zero matrix."** No. A zero determinant means the columns (or rows) are linearly dependent. The matrix may have non-zero entries.

## Connections

- The determinant is the foundation of the theory of eigenvalues, the characteristic polynomial, and the spectral theorem.
- The geometric interpretation as a signed volume is the basis of the Jacobian in multivariable calculus.
- The multiplicativity is the basis of the change of variables in integration.
- The Wronskian is the bridge between linear ODEs and linear algebra.
- The Vandermonde determinant is the bridge between polynomial interpolation and determinants.
- The determinant is the foundation of the theory of invariants in classical and quantum mechanics.

## Quick Check

1. Compute $\det \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.
2. State the multiplicativity property of the determinant.
3. For what values of $a$ is $\begin{pmatrix} a & 1 \\ 1 & a \end{pmatrix}$ invertible?
4. Use Cramer's rule to solve $\begin{cases} x + 2 y = 3 \\ 2 x + y = 4 \end{cases}$.
5. What is the geometric interpretation of the determinant?

## Takeaway

- The determinant is a scalar summary of a square matrix.
- It is non-zero iff the matrix is invertible.
- The Leibniz formula and cofactor expansion are the standard definitions.
- The multiplicativity $\det(AB) = \det(A) \det(B)$ is the most important property.
- Cramer's rule solves small systems; Gaussian elimination solves large systems.
- The geometric interpretation as a signed volume is the basis of the change of variables in calculus.
- The determinant is the product of the eigenvalues.
