***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: linear-algebra
courseName: Linear Algebra
moduleId: linear-algebra-module-2
moduleName: Linear Maps and Matrices
lessonId: linear-algebra-m2-l1
lessonName: Change of Basis and Similarity
lessonNumber: 4
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - linear-algebra-m1-l3
learningObjectives:
  - Construct the change-of-basis matrix.
  - State the similarity transformation for a linear operator.
  - Compute the matrix of a linear map in different bases.
  - Recognise invariants under similarity.
concepts:
  - Change of basis
  - Similarity transformation
  - Matrix of a linear map
  - Invariants of similarity
  - Conjugate matrices
  - Trace, determinant, eigenvalues as invariants
tags:
  - mathematics
  - algebra
  - change-of-basis
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Change of Basis and Similarity

## Overview
A linear operator $T$ on a vector space $V$ has a matrix that depends on the choice of basis. Two bases give *similar* matrices, related by $A' = P^{-1} A P$ where $P$ is the change-of-basis matrix. The invariants under similarity — eigenvalues, trace, determinant, rank, characteristic polynomial — are the true algebraic properties of the operator. This lesson develops the formalism of change of basis, proves the similarity theorem, and applies it to the spectral theorem and to numerical linear algebra.

## Learning Path
- What you should already know: bases, linear maps, matrices, determinants.
- What this lesson adds: change of basis, similar matrices, invariants, the spectral theorem.
- What it unlocks: diagonalisation, the Jordan form, principal axis theorem, and the structure theory for linear operators.

## Core Explanation
**Change of basis.** Let $B = \{v_1, \ldots, v_n\}$ and $B' = \{w_1, \ldots, w_n\}$ be two bases of $V$. Each $w_j$ is a linear combination of the $v_i$: $w_j = \sum_i p_{ij} v_i$. The matrix $P = (p_{ij})$ is the *change-of-basis matrix* from $B$ to $B'$. It is the matrix of the identity map $\text{id}: V \to V$ in the basis $B'$ (input) and $B$ (output).

**Coordinate transformation.** For $v \in V$, $[v]_B = P [v]_{B'}$, equivalently $[v]_{B'} = P^{-1} [v]_B$. The new coordinates are obtained by applying $P^{-1}$.

**Similar matrices.** Let $T: V \to V$ be a linear operator. If $A$ is the matrix of $T$ in basis $B$ and $A'$ is the matrix in basis $B'$, then $A' = P^{-1} A P$, where $P$ is the change-of-basis matrix from $B'$ to $B$.

**Proof.** $A' = P^{-1} A P$ by composing the three maps: $V \xrightarrow{P^{-1}} V$ in basis $B \xrightarrow{A} V$ in basis $B \xrightarrow{P} V$ in basis $B'$. Each step is represented by the corresponding matrix.

**Invariant under similarity.** Quantities that are preserved by $A' = P^{-1} A P$:
- Determinant: $\det A' = \det A$.
- Trace: $\text{tr}(A') = \text{tr}(A)$.
- Characteristic polynomial: $p_{A'}(\lambda) = p_A(\lambda)$.
- Eigenvalues (with multiplicities).
- Rank.
- Minimal polynomial.
- Whether $A$ is diagonalisable, nilpotent, invertible, etc.

**Characteristic polynomial in terms of the trace and determinant.** For a $2 \times 2$ matrix, $p(\lambda) = \lambda^2 - (\text{tr}\, A) \lambda + \det A$. For $3 \times 3$, $p(\lambda) = \lambda^3 - (\text{tr}\, A) \lambda^2 + c_2 \lambda - \det A$, where $c_2$ is the sum of the $2 \times 2$ principal minors (Newton's identities).

**Newton's identities.** Relate power sums of eigenvalues to traces of powers of $A$: $p_k = \text{tr}(A^k) = \sum \lambda_i^k$. Combined with $e_1 = \text{tr}(A), e_2 = (\text{tr}(A)^2 - \text{tr}(A^2))/2$, etc., gives the elementary symmetric functions from the traces.

**Diagonalisation.** A matrix $A$ is diagonalisable iff there is an invertible $P$ with $P^{-1} A P = D$ diagonal. Then the columns of $P$ are the eigenvectors of $A$, and the diagonal entries of $D$ are the eigenvalues.

**Condition for diagonalisability.** $A$ is diagonalisable over $F$ iff the minimal polynomial of $A$ has distinct roots in $F$ (i.e., splits into distinct linear factors). Equivalently, $V$ has a basis of eigenvectors.

**Triangularisability.** Over $\mathbb{C}$, every matrix is similar to an upper triangular matrix (Schur form). The diagonal entries are the eigenvalues.

**Jordan normal form.** Over $\mathbb{C}$, every matrix is similar to a block-diagonal matrix with Jordan blocks $J_n(\lambda) = \lambda I + N$, where $N$ is the nilpotent matrix with $1$s on the superdiagonal. The Jordan form is unique up to the order of the blocks.

**Spectral theorem.** A self-adjoint matrix (or normal matrix, over $\mathbb{C}$) is diagonalisable by a unitary matrix. There is an orthonormal basis of eigenvectors. The eigenvalues are real (for self-adjoint).

**Singular value decomposition (SVD).** Every matrix $A$ is $A = U \Sigma V^*$ with $U, V$ unitary and $\Sigma$ diagonal with non-negative entries (the singular values). The SVD is the workhorse of numerical linear algebra.

**Polar decomposition.** $A = U P$ with $U$ unitary and $P$ positive semi-definite (square root of $A^* A$). Always exists and is unique for invertible $A$.

**Principal axis theorem.** For a symmetric matrix $A$ (e.g. the inertia tensor), there is an orthogonal change of basis in which $A$ is diagonal. The new basis is the *principal axes*, the diagonal entries are the *principal moments* (of inertia, etc.).

**Why similarity is important.** The matrix of an operator depends on the basis; the operator itself does not. The invariants of similarity are the true algebraic properties of the operator. Many computational problems (diagonalisation, Jordan form) reduce to finding a convenient basis — i.e., to a change-of-basis problem.

**Examples of change of basis.**
- From the standard basis $\{e_1, e_2\}$ to $\{(1, 1)/\sqrt{2}, (1, -1)/\sqrt{2}\}$ in $\mathbb{R}^2$: $P = (1/\sqrt{2}) \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$.
- Diagonalisation: find $P$ such that $P^{-1} A P = D$.
- Coordinate transformation in physics: from Cartesian to spherical, from lab frame to body frame, etc.

**Examples of invariants.**
- $\det A$: $A$ is invertible iff $\det A \ne 0$; the volume scaling factor.
- $\text{tr}(A)$: the sum of eigenvalues; in physics, the trace of a stress tensor gives the pressure.
- Eigenvalues: the natural frequencies of vibration, the energy levels of a Hamiltonian, the principal moments of inertia.

**Change of basis for a linear map $T: V \to W$.** If $A$ is the matrix of $T$ in bases $B$ of $V$ and $C$ of $W$, and $P$ changes $B$ to $B'$, $Q$ changes $C$ to $C'$, then the matrix of $T$ in bases $B', C'$ is $A' = Q^{-1} A P$. (Two change-of-basis matrices: one for $V$, one for $W$.)

**Conjugacy classes.** The equivalence class of $A$ under similarity $A \sim P^{-1} A P$ is the *conjugacy class*. The classification of matrices up to similarity is the Jordan form (over $\mathbb{C}$).

**The minimal polynomial.** The monic polynomial $m(x)$ of smallest degree with $m(A) = 0$. Divides the characteristic polynomial. The size of the largest Jordan block for eigenvalue $\lambda$ is the multiplicity of $(x - \lambda)$ in $m(x)$.

**Cayley–Hamilton theorem.** $A$ satisfies its own characteristic polynomial: $p_A(A) = 0$. (Proved by showing that the statement holds for diagonal matrices and then extending by continuity or by the Jordan form.)

**Applications of Cayley–Hamilton.** Computing $A^n$ for large $n$: find a recurrence using $A^k = c_0 I + c_1 A + \cdots + c_{n-1} A^{n-1}$. The recurrence has $O(n^2)$ cost (or $O(n \log n)$ with fast matrix multiplication). The same idea gives the minimal polynomial and is used in control theory and coding theory.

**Normal forms.** A *normal form* is a canonical representative of a conjugacy class. The Jordan normal form is the normal form for similarity of matrices (over $\mathbb{C}$). The Smith normal form is the normal form for integer matrices. The Frobenius normal form is the normal form for linear operators.

**Smith normal form.** For an integer matrix $A$, there exist integer matrices $P, Q$ with $\det P, \det Q = \pm 1$ such that $P A Q$ is diagonal with each diagonal entry dividing the next. Gives the structure of finitely generated modules over $\mathbb{Z}$.

**Rational canonical form.** Over any field, every matrix is similar to a block-diagonal matrix with companion matrices of irreducible polynomials. Gives the structure for matrices that may not be triangularisable over the field (e.g. over $\mathbb{Q}$ with no eigenvalues in $\mathbb{Q}$).

**Applications of SVD.**
- Best low-rank approximation (image compression, recommendation systems).
- Solving ill-conditioned least-squares problems.
- Principal component analysis (PCA) in statistics.
- Computing the pseudoinverse of a non-square matrix.
- Numerical rank determination.

**Pseudoinverse.** For $A: F^n \to F^m$ with SVD $A = U \Sigma V^*$, the pseudoinverse is $A^+ = V \Sigma^+ U^*$ where $\Sigma^+$ is $\Sigma$ with non-zero entries inverted. The pseudoinverse gives the minimum-norm least-squares solution of $A x = b$.

**Condition number.** $\kappa(A) = \sigma_\text{max}/\sigma_\text{min}$ (ratio of largest to smallest singular value). Measures the sensitivity of $A x = b$ to perturbations in $b$. Used to assess numerical stability.

**Matrix norms.** The operator norm $\|A\|_2 = \sigma_\text{max}$. The Frobenius norm $\|A\|_F = \sqrt{\sum A_{ij}^2} = \sqrt{\text{tr}(A^* A)} = \sqrt{\sum \sigma_i^2}$. Used in numerical analysis.

**Diagonalisation of self-adjoint matrices.** Always possible by a unitary $U$: $U^* A U = D$ with $D$ real diagonal. The columns of $U$ are the eigenvectors; the entries of $D$ are the eigenvalues. Algorithm: power iteration, then deflation, or direct methods (QR, Jacobi).

**Eigenvalue algorithms.** Power iteration: $v \to A v / \|A v\|$ converges to the dominant eigenvector. QR algorithm: produces the Schur form iteratively. Divide-and-conquer: faster for large matrices. Lanczos for symmetric: tridiagonalises then diagonalises. All are polynomial in the matrix size.

**Numerical stability of similarity.** Some similarity transformations (e.g. diagonalisation) are numerically ill-conditioned. Use SVD or Schur form for stability.

**Why basis change is central to physics.** Almost every physical problem is "the same physics, different coordinates". Rotations, translations, boosts, gauge transformations — all are changes of basis. The invariants under these changes are the physical observables.

**Tensor transformations.** A $(k, l)$-tensor transforms with one factor of the basis change for each upper index and the inverse for each lower. The metric tensor is used to raise/lower indices. Coordinate-free formulation is the modern style.

**Transformation of differential operators.** Under a coordinate change $x \to y(x)$, a differential operator $D = d/dx$ becomes $D = (dy/dx) d/dy$ (chain rule). The form changes; the operator (acting on functions) does not.

**The Laplacian in curvilinear coordinates.** The Laplacian $\nabla^2$ takes different forms in Cartesian, spherical, and cylindrical coordinates. The operator is the same; the form changes.

**Quadric surfaces.** A quadratic form $Q(x) = x^T A x$ with symmetric $A$ can be diagonalised by an orthogonal change of basis. The result is the canonical form (e.g. ellipsoid, hyperboloid, paraboloid).

**Principal component analysis.** Given data points, find the direction of greatest variance. This is the eigenvector of the covariance matrix corresponding to the largest eigenvalue. The SVD gives the principal components.

**Face recognition (eigenfaces).** A face image is a vector in a high-dimensional space. The principal components (eigenfaces) form a basis. Faces are represented by their projections onto this basis. The SVD of the face data matrix is the workhorse.

**Compression.** The SVD of an image matrix gives the best low-rank approximation. Truncating to the $k$ largest singular values gives a compressed image with $O(k(m + n))$ storage (vs. $m n$ for the full image).

**Network analysis.** The adjacency matrix of a graph has eigenvectors (the spectral decomposition of the graph). The largest eigenvalue gives the asymptotic growth rate of random walks; the eigenvector is the stationary distribution.

**Google PageRank.** The PageRank vector is the dominant eigenvector of the modified adjacency matrix of the web graph. The largest eigenvalue is $1$ (after normalisation). Computed by power iteration on a matrix of size $10^{10}$ (the size of the web).

**Why SVD matters.** SVD supports low-rank approximation (truncating to the top-$k$ singular values gives the best rank-$k$ approximation in both Frobenius and spectral norm), compression (image, audio, and video codecs), denoising (signal lies in the top singular subspace, noise is distributed across all of them), and principal-component analysis (the right singular vectors of a centred data matrix are the principal axes of the cloud). These applications illustrate how a single linear-algebraic decomposition exposes the dominant structure in a wide range of datasets.

## Key Ideas
- Change of basis: $A' = P^{-1} A P$ (endomorphism) or $A' = Q^{-1} A P$ (general map).
- Invariants: $\det$, $\text{tr}$, eigenvalues, rank, characteristic polynomial, minimal polynomial.
- Diagonalisation: $A = P D P^{-1}$ iff the minimal polynomial has distinct roots.
- Spectral theorem: self-adjoint = diagonalisable by a unitary.
- SVD: any $A = U \Sigma V^*$.

## Worked Examples
**Example 1 — Change of basis in $\mathbb{R}^2$.** From $B = \{e_1, e_2\}$ to $B' = \{(1, 1), (1, -1)\}$: $P$ has columns $(1, 1)$ and $(1, -1)$. So $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$. The matrix of $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$ in $B'$ is $A' = P^{-1} A P = (1/2) \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = (1/2) \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} 3 & -1 \\ 3 & 1 \end{pmatrix} = (1/2) \begin{pmatrix} 6 & 0 \\ 0 & -2 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}$. So $A$ is diagonalised by this change of basis.

**Example 2 — Invariants of $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$.** $\det A = -2$. $\text{tr}\, A = 5$. Eigenvalues: roots of $\lambda^2 - 5 \lambda - 2 = 0$, $\lambda = (5 \pm \sqrt{33})/2$. All preserved under similarity.

**Example 3 — Cayley–Hamilton.** $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$. $p(\lambda) = \lambda^2 - 5 \lambda - 2$. $A^2 - 5 A - 2 I = \begin{pmatrix} 7 & 10 \\ 15 & 22 \end{pmatrix} - 5 \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} - 2 \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 7 & 10 \\ 15 & 22 \end{pmatrix} - \begin{pmatrix} 5 & 10 \\ 15 & 20 \end{pmatrix} - \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$. ✓

**Example 4 — Spectral theorem.** $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ (symmetric). Eigenvalues: $1, 3$. Eigenvectors: $(1, -1)/\sqrt{2}$ and $(1, 1)/\sqrt{2}$. $U = (1/\sqrt{2}) \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$. $U^* A U = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$. ✓

**Example 5 — SVD.** $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$. $A^T A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Eigenvalues: $1, 3$. Singular values: $1, \sqrt{3}$. $\Sigma = \begin{pmatrix} 1 & 0 \\ 0 & \sqrt{3} \\ 0 & 0 \end{pmatrix}$. $V = (1/\sqrt{2}) \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$. $U = A V \Sigma^{-1}$ — compute: ...

## Common Misconceptions
- **"All matrices are diagonalisable."** No — only those with distinct eigenvalues (or more generally, distinct roots of the minimal polynomial).
- **"The trace and determinant determine the eigenvalues."** For $2 \times 2$ and $3 \times 3$, yes (with the sum of principal minors for $3 \times 3$). For larger, more invariants are needed.
- **"Similar matrices are equal."** No — they are related by a change of basis.
- **"Cayley–Hamilton gives the minimal polynomial."** It gives a polynomial that annihilates $A$, but not necessarily the minimal one. The minimal polynomial divides the characteristic polynomial.

## Connections
Change of basis and similarity are the foundations of representation theory, quantum mechanics (change of basis = unitary transformation), numerical linear algebra (algorithms for eigenvalues and SVD), and statistics (PCA, factor analysis). The spectral theorem is the most important single result in operator theory.

## Quick Check
1. State the similarity transformation.
2. List three invariants under similarity.
3. What is the spectral theorem?
4. What is the SVD?
5. State the Cayley–Hamilton theorem.

## Takeaway
- Change of basis: $A' = P^{-1} A P$ (endomorphism), $A' = Q^{-1} A P$ (general).
- Invariants: $\det$, $\text{tr}$, eigenvalues, rank, characteristic polynomial.
- Spectral theorem: self-adjoint = diagonalisable by a unitary.
- SVD: $A = U \Sigma V^*$ for any matrix.
- Cayley–Hamilton: $p_A(A) = 0$.
