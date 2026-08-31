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
lessonId: introductory-algebra-m2-l1
lessonName: Matrices and Matrix Algebra
lessonNumber: 4
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 45
releaseOrder: 4
prerequisites:
  - introductory-algebra-m1-l3
learningObjectives:
  - Define a matrix and identify the special classes (square, diagonal, triangular, symmetric, identity).
  - Perform addition, scalar multiplication, multiplication, and transposition of matrices.
  - Recognise matrices as the natural language of linear maps, systems of equations, and transformations.
concepts:
  - Matrix
  - Square matrix
  - Diagonal matrix
  - Identity matrix
  - Matrix multiplication
  - Transpose
tags:
  - mathematics
  - algebra
  - matrices
  - linear-algebra
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Matrices and Matrix Algebra

## Overview

Matrices are rectangular arrays of numbers that encode linear maps, systems of linear equations, and geometric transformations. The lesson introduces the basic definitions, the special classes of matrices (square, diagonal, triangular, symmetric, identity), and the matrix operations (addition, scalar multiplication, matrix multiplication, transposition). The lesson emphasises the geometric and physical meaning of matrices: a matrix represents a linear map between vector spaces, a change of basis, or a physical transformation (rotation, scaling, shear). The lesson is the foundation of linear algebra (the course in Semester 5) and of the numerical methods in Semester 4.

## Learning Path

- **What you should already know**: vectors and vector operations (covered in earlier courses); complex numbers (Lesson m1-l3).
- **What this lesson adds**: the language of matrices; the rules of matrix algebra; the special matrix classes; matrix multiplication and its interpretation as composition of linear maps.
- **What later lessons this will unlock**: determinants in Lesson m2-l2; solving linear systems in Lesson m2-l3; the full course Linear Algebra in Semester 5; the use of matrices in classical and quantum mechanics.

## Core Explanation

### Definition of a matrix

An $m \times n$ **matrix** is a rectangular array of $m n$ numbers arranged in $m$ rows and $n$ columns:

$$A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}.$$

The entry in row $i$ and column $j$ is $a_{ij}$. The matrix $A$ is **square** if $m = n$; it is a **row vector** if $m = 1$ and a **column vector** if $n = 1$.

Matrices are the natural representation of linear maps between finite-dimensional vector spaces. The matrix represents the action of the map on a basis: the $j$-th column is the image of the $j$-th basis vector, expressed in the chosen basis of the codomain.

### Special matrices

Several special classes of matrices are used throughout mathematics:

- **Zero matrix**: all entries zero, denoted $0$ or $0_{m \times n}$. The identity element of matrix addition.
- **Identity matrix** $I_n$ (or just $I$): the $n \times n$ matrix with $1$'s on the diagonal and $0$'s elsewhere. The identity element of matrix multiplication.
- **Diagonal matrix**: $a_{ij} = 0$ for $i \ne j$. Denoted $\text{diag}(d_1, d_2, \ldots, d_n)$.
- **Triangular matrix**: upper triangular if $a_{ij} = 0$ for $i > j$, lower triangular if $a_{ij} = 0$ for $i < j$. Diagonal matrices are both.
- **Symmetric matrix**: $A = A^T$, equivalently $a_{ij} = a_{ji}$.
- **Skew-symmetric matrix**: $A^T = -A$, equivalently $a_{ij} = -a_{ji}$ (the diagonal is zero).
- **Hermitian matrix**: $A^* = A$ (entrywise complex conjugate transpose), equivalently $a_{ij} = \bar a_{ji}$. Real symmetric matrices are Hermitian.
- **Unitary matrix**: $A^* A = I$. The complex analogue of orthogonal matrices.

### Matrix addition and scalar multiplication

**Matrix addition** is defined entrywise for matrices of the same size:

$$(A + B)_{ij} = a_{ij} + b_{ij}.$$

Matrix addition is commutative and associative, with the zero matrix as the identity.

**Scalar multiplication** multiplies each entry:

$$(c A)_{ij} = c \cdot a_{ij}.$$

Matrix addition and scalar multiplication give the space of $m \times n$ matrices the structure of a vector space of dimension $m n$.

### Matrix multiplication

**Matrix multiplication** is defined for compatible matrices. The product $A B$ is defined when the number of columns of $A$ equals the number of rows of $B$ (e.g. $A$ is $m \times n$ and $B$ is $n \times p$); the result is an $m \times p$ matrix:

$$(A B)_{ij} = \sum_{k = 1}^n a_{ik} b_{kj}.$$

The $(i, j)$ entry of $A B$ is the dot product of row $i$ of $A$ with column $j$ of $B$.

Properties of matrix multiplication:

- **Associative**: $(A B) C = A (B C)$.
- **Distributive over addition**: $A (B + C) = A B + A C$ and $(A + B) C = A C + B C$.
- **Not commutative**: in general, $A B \ne B A$. The commutator $[A, B] = A B - B A$ measures the failure of commutativity.
- **Identity**: $I A = A I = A$ when the dimensions match.
- **Zero divisors**: $A B = 0$ does not imply $A = 0$ or $B = 0$ (in general).

The non-commutativity of matrix multiplication is the basis of the quantisation of observables in quantum mechanics: position and momentum satisfy $x p - p x = i \hbar$, a non-zero commutator.

### Composition of linear maps

A matrix represents a linear map. If $A : V \to W$ and $B : W \to U$ are linear maps with matrices $A$ and $B$ in chosen bases, then the matrix of the composition $B \circ A : V \to U$ is $B A$. The order of composition is reversed: the matrix on the right is applied first.

This is a key convention: the matrix acts on column vectors on the right: $A \vec{x}$ is the image of $\vec{x}$ under the linear map. The convention is the standard in mathematics and in physics.

### Block matrices

A **block matrix** is a matrix whose entries are themselves matrices. The block structure can be exploited to simplify calculations. For example, the $2 \times 2$ block matrix

$$\begin{pmatrix} A & B \\ C & D \end{pmatrix}$$

is a matrix whose entries are matrices $A, B, C, D$ of compatible dimensions. Block multiplication follows the same rules as ordinary multiplication, with the entries being matrices.

Block matrices are used in numerical linear algebra (e.g. block LU, block QR), in physics (e.g. block-diagonal Hamiltonians), and in coding theory (parity-check matrices).

### The transpose

The **transpose** $A^T$ of an $m \times n$ matrix $A$ is the $n \times m$ matrix with $(A^T)_{ij} = a_{ji}$: the rows of $A^T$ are the columns of $A$. Properties:

- $(A + B)^T = A^T + B^T$.
- $(c A)^T = c A^T$.
- $(A B)^T = B^T A^T$ (order reversed).
- $(A^T)^T = A$ (involution).

The transpose of a symmetric matrix is itself. The transpose of a skew-symmetric matrix is its negative.

The transpose is the basis of the definition of symmetric matrices and of the inner product in $\mathbb{R}^n$: $\langle \vec x, \vec y \rangle = \vec x^T \vec y$.

### The complex conjugate transpose

For complex matrices, the **conjugate transpose** (or Hermitian conjugate) $A^* = \overline{A^T}$ is the complex analogue of the transpose:

$$(A^*)_{ij} = \bar a_{ji}.$$

Properties are the same as for the transpose, with the complex conjugation taken into account. The Hermitian matrix satisfies $A^* = A$; the unitary matrix satisfies $A^* A = I$.

The conjugate transpose is the standard transpose in quantum mechanics: the inner product is $\langle \vec x, \vec y \rangle = \vec x^* \vec y$, and Hermitian operators represent observables.

### The trace

The **trace** of a square matrix $A$ is the sum of the diagonal entries:

$$\text{tr}(A) = \sum_i a_{ii}.$$

Properties:

- $\text{tr}(A + B) = \text{tr}(A) + \text{tr}(B)$.
- $\text{tr}(c A) = c \cdot \text{tr}(A)$.
- $\text{tr}(A B) = \text{tr}(B A)$ (cyclic property, more general than this).
- $\text{tr}(A^T) = \text{tr}(A)$.
- $\text{tr}(A^*) = \overline{\text{tr}(A)}$.
- $\text{tr}(A) = $ sum of eigenvalues of $A$ (counted with multiplicity).

The trace is a linear functional on the space of matrices. It is invariant under cyclic permutations but not under arbitrary permutations: $\text{tr}(A B) = \text{tr}(B A)$ but in general $\text{tr}(A B C) \ne \text{tr}(A C B)$ unless $A$ and $C$ commute.

The trace appears in many physics contexts: the partition function $Z = \text{tr}(e^{-\beta H})$, the expectation value $\langle A \rangle = \text{tr}(\rho A)$, the heat capacity $C_V = k_B \beta^2 \text{tr}(\rho H^2) - (k_B \beta \text{tr}(\rho H))^2$, and the susceptibility $\chi = \beta \text{tr}(\rho M^2)$ in mean-field theory.

### The rank

The **rank** of a matrix $A$ is the dimension of the image of the corresponding linear map. Equivalently, it is the number of linearly independent rows (or columns) of $A$. The rank is bounded by $\min(m, n)$ for an $m \times n$ matrix.

The rank theorem: $\text{rank}(A) + \text{nullity}(A) = n$, where $\text{nullity}(A) = n - \text{rank}(A)$ is the dimension of the kernel of $A$. This is the rank-nullity theorem, the matrix version of the dimension theorem for linear maps.

### Matrix norms

A **matrix norm** measures the "size" of a matrix. Common examples:

- **Frobenius norm**: $\|A\|_F = \sqrt{\sum_{i, j} |a_{ij}|^2}$.
- **Operator (spectral) norm**: $\|A\|_2 = \max_{\|x\| = 1} \|A x\|$, the largest singular value of $A$.
- **1-norm and infinity-norm**: $\|A\|_1 = \max_j \sum_i |a_{ij}|$, $\|A\|_\infty = \max_i \sum_j |a_{ij}|$.

Norms are used to measure errors in numerical computations, to bound the conditioning of linear systems, and to assess the convergence of iterative algorithms.

### The Hadamard product

The **Hadamard product** (or entrywise product) of two matrices of the same size is the matrix with entries $(A \circ B)_{ij} = a_{ij} b_{ij}$. Unlike the standard matrix product, the Hadamard product is commutative. It appears in element-wise operations in machine learning (e.g. attention masks in transformers) and in some image-processing algorithms.

### Matrices as linear maps

A matrix $A$ represents a linear map $f : \mathbb{R}^n \to \mathbb{R}^m$ (or between other vector spaces) by $f(\vec x) = A \vec x$. The columns of $A$ are the images of the standard basis vectors. The map is linear: $f(\alpha \vec x + \beta \vec y) = \alpha A \vec x + \beta A \vec y$.

Every linear map between finite-dimensional vector spaces can be represented by a matrix in some basis, and matrix multiplication corresponds to composition. The matrix representation depends on the choice of basis; the abstract linear map does not.

In physics, matrices represent:
- **Rotations**: a $3 \times 3$ orthogonal matrix rotates vectors in 3D.
- **Lorentz transformations**: a $4 \times 4$ matrix transforms spacetime vectors in special relativity.
- **Hamiltonians**: a Hermitian matrix represents the energy observable in quantum mechanics.
- **Density matrices**: a positive-definite Hermitian matrix of trace 1 represents a quantum state.

The matrix language is universal across the physical sciences.

### Worked Examples

**Example 1 — Matrix multiplication.**

Compute $A B$ and $B A$ for $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.

**Solution.**

$AB = \begin{pmatrix} 1 \cdot 0 + 2 \cdot 1 & 1 \cdot 1 + 2 \cdot 0 \\ 3 \cdot 0 + 4 \cdot 1 & 3 \cdot 1 + 4 \cdot 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$.

$BA = \begin{pmatrix} 0 \cdot 1 + 1 \cdot 3 & 0 \cdot 2 + 1 \cdot 4 \\ 1 \cdot 1 + 0 \cdot 3 & 1 \cdot 2 + 0 \cdot 4 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$.

$AB \ne BA$, confirming non-commutativity. Note that $B$ is the permutation matrix that swaps the two basis vectors.

**Example 2 — Trace of a product.**

Compute $\text{tr}(A B C)$ for $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$.

**Solution.** $BC = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$. $A(BC) = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$. $\text{tr}(ABC) = 1$.

Alternatively, $AB = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$. $(AB) C = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$. $\text{tr}((AB) C) = 1$. ✓ (Cyclic property.)

**Example 3 — Composition of rotations.**

The matrix $R(\theta) = \begin{pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{pmatrix}$ represents a rotation by $\theta$. Compute $R(\theta_1) R(\theta_2)$ and interpret.

**Solution.** $R(\theta_1) R(\theta_2) = \begin{pmatrix} \cos \theta_1 \cos \theta_2 - \sin \theta_1 \sin \theta_2 & -\cos \theta_1 \sin \theta_2 - \sin \theta_1 \cos \theta_2 \\ \sin \theta_1 \cos \theta_2 + \cos \theta_1 \sin \theta_2 & -\sin \theta_1 \sin \theta_2 + \cos \theta_1 \cos \theta_2 \end{pmatrix} = \begin{pmatrix} \cos(\theta_1 + \theta_2) & -\sin(\theta_1 + \theta_2) \\ \sin(\theta_1 + \theta_2) & \cos(\theta_1 + \theta_2) \end{pmatrix} = R(\theta_1 + \theta_2)$.

Composition of rotations is a rotation by the sum of the angles. ✓ (The rotation matrices form a group, the special orthogonal group $SO(2)$.)

## Key Ideas

- A matrix is a rectangular array of numbers; matrix addition, scalar multiplication, and matrix multiplication are the basic operations.
- Special classes: identity, diagonal, triangular, symmetric, skew-symmetric, Hermitian, unitary.
- The transpose $A^T$ and conjugate transpose $A^*$ are essential for the inner product and the Hermitian structure.
- The trace is a linear functional; $\text{tr}(A B) = \text{tr}(B A)$.
- Matrix multiplication is non-commutative; the commutator $[A, B] = A B - B A$ measures the failure.
- Matrices represent linear maps; the composition of linear maps is the product of matrices (in reverse order).

## Common Misconceptions

- **"Matrix multiplication is commutative."** It is not, in general. Most pairs of matrices do not commute. The commutator is a measure of the failure.
- **"$A B = 0$ implies $A = 0$ or $B = 0$."** No. There are non-zero matrices whose product is zero (zero divisors).
- **"The transpose changes the matrix to a different one."** The transpose is an involution: $(A^T)^T = A$.
- **"The trace is the same as the determinant."** No. The trace is the sum of diagonal entries (and the sum of eigenvalues); the determinant is the product of diagonal entries (and the product of eigenvalues).
- **"All matrices are diagonalisable."** No. Defective matrices (e.g. $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$) are not.

## Connections

- Matrices are the language of linear algebra; the course in Semester 5 develops the theory in depth.
- The matrix representation of linear maps is the basis of the formulation of physics: rotations, Lorentz transformations, Hamiltonians, density matrices.
- The trace appears throughout statistical mechanics (partition function, expectation values, susceptibilities).
- The commutator is the basis of the canonical commutation relations in quantum mechanics.
- The Hadamard product and matrix norms are tools in numerical analysis and machine learning.

## Quick Check

1. Compute the product of $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.
2. Is the matrix $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ symmetric, skew-symmetric, neither, or both?
3. State the cyclic property of the trace.
4. What is the rank of $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$?
5. Compute the commutator $[A, B] = A B - B A$ for $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$.

## Takeaway

- Matrices are rectangular arrays of numbers representing linear maps, systems of equations, and transformations.
- Matrix addition, scalar multiplication, and matrix multiplication are the basic operations.
- The transpose, conjugate transpose, and trace are important auxiliary operations.
- Matrix multiplication is non-commutative; the commutator measures the failure.
- The matrix language is universal in physics: rotations, Lorentz transformations, Hamiltonians, density matrices, and more.
