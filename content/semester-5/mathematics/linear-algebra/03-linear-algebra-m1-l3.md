***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: linear-algebra
courseName: Linear Algebra
moduleId: linear-algebra-module-1
moduleName: Vector Spaces
lessonId: linear-algebra-m1-l3
lessonName: Linear Maps, Isomorphisms and Dimension
lessonNumber: 3
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - linear-algebra-m1-l2
learningObjectives:
  - Define a linear map and verify linearity.
  - State the rank-nullity theorem.
  - Define the kernel and image of a linear map.
  - State and apply the isomorphism theorems.
concepts:
  - Linear map
  - Kernel
  - Image
  - Rank-nullity theorem
  - Isomorphism
  - First isomorphism theorem
tags:
  - mathematics
  - algebra
  - linear-maps
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Linear Maps, Isomorphisms and Dimension

## Overview
A *linear map* $T: V \to W$ is a structure-preserving map between vector spaces — it respects addition and scalar multiplication. The kernel and image measure the deviation from injectivity and surjectivity. The *rank-nullity theorem* is the central structural result: $\dim V = \dim \ker T + \dim \text{im}(T)$. This lesson develops the theory, proves the theorem, and applies the isomorphism theorems that connect quotients and images.

## Learning Path
- What you should already know: vector spaces, basis, dimension, subspaces.
- What this lesson adds: linear maps, kernel, image, rank-nullity, isomorphisms, and the isomorphism theorems.
- What it unlocks: matrix representations, change of basis, the structure theory for linear operators, and the spectral theorem.

## Core Explanation
**Linear map.** A function $T: V \to W$ between vector spaces (over the same field) is *linear* if $T(u + v) = T(u) + T(v)$ and $T(c v) = c T(v)$ for all $u, v \in V$, $c \in F$. Equivalently, $T(a u + b v) = a T(u) + b T(v)$.

**Examples of linear maps.**
- Matrix action: $T(x) = A x$ for $A$ an $m \times n$ matrix.
- Differentiation: $D: F[x] \to F[x]$ given by $D(p) = p'$.
- Integration: $T: C[a, b] \to \mathbb{R}$ given by $T(f) = \int_a^b f(x) dx$.
- Trace: $\text{tr}: M_n \to F$, $T(A) = $ sum of diagonal.
- Rotation: $R_\theta: \mathbb{R}^2 \to \mathbb{R}^2$, $R_\theta(x, y) = (x \cos\theta - y \sin\theta, x \sin\theta + y \cos\theta)$.

**Non-examples.** $T(x) = x + 1$ (not linear — constant term). $T(x) = x^2$ (not linear — quadratic). $T(x) = |x|$ (not linear).

**Kernel.** $\ker T = \{v \in V : T(v) = 0\}$. A subspace of $V$. $T$ is injective iff $\ker T = \{0\}$.

**Image.** $\text{im}(T) = \{T(v) : v \in V\}$. A subspace of $W$. $T$ is surjective iff $\text{im}(T) = W$.

**Nullity and rank.** $\text{nullity}(T) = \dim \ker T$, $\text{rank}(T) = \dim \text{im}(T)$. For a matrix $A$, $\text{rank}(A) = \text{rank}(T_A)$ and $\text{nullity}(A) = \text{nullity}(T_A)$.

**Rank-nullity theorem.** $\dim V = \dim \ker T + \dim \text{im}(T) = \text{nullity}(T) + \text{rank}(T)$. One of the most useful theorems of linear algebra.

**Proof.** Let $v_1, \ldots, v_k$ be a basis of $\ker T$, and extend to a basis $v_1, \ldots, v_k, v_{k+1}, \ldots, v_n$ of $V$. Then $T(v_{k+1}), \ldots, T(v_n)$ form a basis of $\text{im}(T)$ (need to show this). Hence $\dim V = n = k + (n - k) = \dim \ker T + \dim \text{im}(T)$. $\blacksquare$

**Linear maps in coordinates.** A linear map $T: V \to W$ is determined by its action on a basis. If $\{v_1, \ldots, v_n\}$ is a basis of $V$ and $\{w_1, \ldots, w_m\}$ of $W$, then $T(v_j) = \sum_{i=1}^m a_{ij} w_i$ for some $a_{ij} \in F$. The $m \times n$ matrix $A = (a_{ij})$ is the matrix of $T$ in the chosen bases.

**The map $\text{Hom}(V, W) \cong F^{m \times n}$.** Once bases are chosen, linear maps $V \to W$ are in bijection with $m \times n$ matrices. Linear algebra becomes matrix algebra.

**Isomorphism.** A linear map $T: V \to W$ is an *isomorphism* if it is bijective (injective and surjective). $V$ and $W$ are *isomorphic* if there is an isomorphism between them; written $V \cong W$. Isomorphic spaces are "the same" as vector spaces.

**Characterisation of isomorphism.** $T$ is an isomorphism iff $\ker T = 0$ and $\text{im}(T) = W$ iff $T$ has a two-sided inverse (a linear map $T^{-1}: W \to V$ with $T \circ T^{-1} = \text{id}$).

**Dimension is the only invariant.** Two finite-dimensional vector spaces over the same field are isomorphic iff they have the same dimension. So $V \cong F^n$ iff $\dim V = n$. This is why linear algebra reduces to $F^n$.

**Examples of isomorphisms.**
- $F^n \cong F^n$ (the identity).
- $M_{m \times n} \cong F^{mn}$ (vectorise the matrix).
- $F[x]_{\le n} \cong F^{n+1}$ (by the map $p \mapsto (a_0, a_1, \ldots, a_n)$).
- $\mathbb{R}^2 \cong \mathbb{C}$ as real vector spaces (identify $(a, b) \leftrightarrow a + b i$; note $\mathbb{C}$ is 1-dimensional over $\mathbb{C}$ but 2-dimensional over $\mathbb{R}$).
- $V \oplus W \cong F^{\dim V + \dim W}$.

**First isomorphism theorem.** If $T: V \to W$ is linear, then $V / \ker T \cong \text{im}(T)$. So the quotient is isomorphic to the image. In particular, $\dim V = \dim \ker T + \dim \text{im}(T)$ — a restatement of rank-nullity.

**Second isomorphism theorem.** If $U \subseteq V$ is a subspace and $W \subseteq V$ is a subspace containing $U$, then $V/U \cong (V/W)/((U + W)/W)$ — or more simply, $U/(U \cap W) \cong (U + W)/W$.

**Third isomorphism theorem.** If $U \subseteq W \subseteq V$ are nested subspaces, then $(V/U)/(W/U) \cong V/W$.

**Linear maps and bases.** If $\{v_i\}$ is a basis of $V$ and $\{w_j\}$ of $W$, then $T \mapsto $ its matrix $A$ is a linear isomorphism $\text{Hom}(V, W) \cong F^{m \times n}$. So the algebra of linear maps is just matrix algebra.

**Injective, surjective, bijective.** $T$ is injective iff $\ker T = 0$. Surjective iff $\text{im}(T) = W$. Bijective iff both. For a square matrix, all equivalent to $\det A \ne 0$.

**The matrix of a linear map.** $A_{ij}$ is the $i$-th coordinate of $T(v_j)$ in the basis of $W$. The matrix depends on the choice of bases; a change of basis gives a similar matrix $A' = P A Q^{-1}$ (or $A' = P^{-1} A P$ for endomorphisms with the same basis change on both sides).

**Diagonalisation.** A linear operator $T$ is *diagonalisable* if there is a basis of $V$ consisting of eigenvectors. In this basis, the matrix of $T$ is diagonal. Equivalent: $V$ has a basis of eigenvectors iff the minimal polynomial of $T$ splits into distinct linear factors over $F$.

**Eigenvalues and eigenvectors.** $T(v) = \lambda v$ for some $\lambda \in F$ and $v \ne 0$. The eigenvalues are the roots of the characteristic polynomial $\det(T - \lambda I) = 0$.

**Spectral theorem.** For a self-adjoint operator on a finite-dimensional inner-product space, there is an orthonormal basis of eigenvectors. Real eigenvalues; orthogonality of eigenvectors for distinct eigenvalues.

**Singular value decomposition.** Any matrix $A$ can be written $A = U \Sigma V^T$ where $U, V$ are orthogonal and $\Sigma$ is diagonal (with non-negative entries). The columns of $U$ are the left singular vectors; the columns of $V$ are the right. The diagonal entries are the singular values.

**Jordan normal form.** Over $\mathbb{C}$, every matrix is similar to an upper triangular matrix (Schur form), and more specifically to a block-diagonal matrix with Jordan blocks. The Jordan form reveals the algebraic and geometric multiplicities of the eigenvalues.

**Examples of kernels and images.**
- $T: F^2 \to F^2$, $T(x, y) = (x + y, x - y)$. $T(x, y) = (0, 0) \Rightarrow x + y = 0, x - y = 0 \Rightarrow x = y = 0$. So $\ker T = 0$; $T$ is injective. $\dim F^2 = 2$, so $\text{im}(T) = F^2$ (by rank-nullity).
- $T: F^3 \to F^2$, $T(x, y, z) = (x + y, y + z)$. $T = 0$ gives $x = -y = z$. So $\ker T = \text{span}\{(1, -1, 1)\}$, nullity $1$. $\dim F^3 = 3$, so $\text{rank} T = 2$, and $\text{im}(T) = F^2$ (surjective).

**Image and kernel of matrix multiplication.** For an $m \times n$ matrix $A$, the image is the column space of $A$ (in $F^n$); the kernel is the null space of $A$ (in $F^m$). Rank-nullity: $\dim \text{col}(A) + \dim \ker A = n$.

**Why the isomorphism theorems matter.** They let you replace one vector space by another, isomorphic one, often with simpler structure. For example, $V/\ker T \cong \text{im}(T)$ lets you identify the quotient with a subspace of $W$.

**Examples of the first isomorphism theorem.**
- $T: F[x] \to F[x]$ defined by $T(p) = p'$. $\ker T = $ constants. $\text{im}(T) = F[x]$. So $F[x]/\mathbb{R} \cong F[x]$ (trivially). $T: F[x]_{\le n} \to F[x]_{\le n-1}$ defined by $T(p) = p'$. $\ker T = \mathbb{R}$. $\text{im}(T) = F[x]_{\le n-1}$. So $F[x]_{\le n}/\mathbb{R} \cong F[x]_{\le n-1}$, and $\dim = n + 1 - 1 = n$. ✓
- $T: \mathbb{R}^3 \to \mathbb{R}^2$ given by $T(x, y, z) = (x, y)$. $\ker T = \{(0, 0, z) : z \in \mathbb{R}\}$ (the $z$-axis). $\text{im}(T) = \mathbb{R}^2$ (the $xy$-plane). So $\mathbb{R}^3 / \mathbb{R} \cong \mathbb{R}^2$ (as vector spaces).

**Composition of linear maps.** $T \circ S: U \to W$ (defined when $S: U \to V$, $T: V \to W$) is linear. Matrix of the composition is the product of the matrices. $\text{rank}(T \circ S) \le \min(\text{rank}(T), \text{rank}(S))$.

**Injective and surjective linear maps.**
- $T: V \to W$ injective iff $\ker T = 0$. Equivalently, the columns of the matrix are linearly independent.
- $T: V \to W$ surjective iff the columns span $W$. Equivalently, the rank equals $\dim W$.

**The matrix of a linear map is unique given the bases.** Conversely, the linear map is uniquely determined by the matrix in given bases. So linear algebra (in a chosen basis) is matrix algebra.

**Change of basis.** If $P$ is the change-of-basis matrix (columns = new basis in old coordinates), then the new matrix of $T$ is $P^{-1} A P$ (for endomorphisms) or $Q^{-1} A P$ (for general linear maps $V \to W$).

**Similar matrices.** $A$ and $B$ are similar if $B = P^{-1} A P$ for some invertible $P$. They represent the same linear operator in different bases. Similar matrices have the same eigenvalues, determinant, trace, rank, and characteristic polynomial.

**Invariant subspace.** A subspace $W \subseteq V$ is $T$-invariant if $T(W) \subseteq W$. Invariant subspaces are the building blocks of the structure theory.

**Triangularisability.** $T$ is triangularisable if there is a basis in which its matrix is upper triangular. Equivalent (over $\mathbb{C}$): the characteristic polynomial splits.

**Minimal polynomial.** The monic polynomial of smallest degree such that $m(T) = 0$. Divides the characteristic polynomial. The size of the Jordan blocks is determined by the multiplicities in the minimal polynomial.

**The Cayley–Hamilton theorem.** Every matrix satisfies its own characteristic polynomial: $p_A(A) = 0$. A deep result with many applications.

**Cayley–Hamilton proof (for diagonalisable matrices).** If $A = P D P^{-1}$ with $D$ diagonal, then $p_A(A) = P p_A(D) P^{-1} = P \cdot 0 \cdot P^{-1} = 0$. For non-diagonalisable, use the Jordan form (or a continuity argument).

**Applications of Cayley–Hamilton.** Computing $A^n$ for large $n$ (reduce to a polynomial in $A$ of degree $< n$). Showing that the minimal polynomial divides the characteristic. The structure of linear operators.

**Invariant subspaces and block-diagonal matrices.** If $V = W_1 \oplus W_2$ and both $W_i$ are $T$-invariant, then the matrix of $T$ in a basis adapted to $V$ is block-diagonal (with $W_1$ and $W_2$ blocks). The structure of the operator is reflected in the matrix.

**Projection operators.** A linear map $P: V \to V$ with $P^2 = P$. A projection decomposes $V$ into $\ker P \oplus \text{im}(P)$. Idempotent operators.

**Direct sum decomposition.** $V = W_1 \oplus W_2$ corresponds to the projection $P$ with image $W_1$ and kernel $W_2$. Many structure theorems (spectral theorem, Jordan form) can be phrased in terms of projections.

**Differential operators.** $D = d/dx$ on $F[x]$ is a linear operator with no eigenvalues (over $F[x]$, $D p = \lambda p$ gives $p' = \lambda p$, so $p = c e^{\lambda x}$, not a polynomial). On suitable function spaces, $D$ has a spectrum (Fourier transform).

**Integral operators.** $T(f)(x) = \int_a^b K(x, y) f(y) dy$ — a linear map on $C[a, b]$ or $L^2[a, b]$. The kernel $K(x, y)$ defines the operator. Fredholm theory analyses these.

**Adjoint.** For a linear map $T: V \to W$ between inner-product spaces, the *adjoint* $T^*: W \to V$ is defined by $\langle T v, w \rangle_W = \langle v, T^* w \rangle_V$. The matrix of $T^*$ is the conjugate transpose of the matrix of $T$. Self-adjoint: $T = T^*$.

**Normal operator.** $T T^* = T^* T$. Eigenvectors are orthogonal (for distinct eigenvalues). The spectral theorem applies: diagonalisable by a unitary.

**Unitary operator.** $T T^* = T^* T = I$. Preserves inner products and norms. The matrix of a unitary is a unitary matrix.

**Polar decomposition.** $T = U |T|$ for any linear operator $T$ on an inner-product space, where $U$ is unitary and $|T| = \sqrt{T^* T}$ is positive semi-definite. Analogous to writing a complex number as $z = e^{i\theta} |z|$.

**Singular value decomposition.** Any $m \times n$ matrix $A$ can be written $A = U \Sigma V^T$ with $U, V$ unitary and $\Sigma$ diagonal. The singular values are the diagonal entries of $\Sigma$. The SVD is the workhorse of numerical linear algebra.

**Best low-rank approximation.** The SVD gives the best rank-$k$ approximation to $A$ (in the Frobenius or spectral norm): keep the $k$ largest singular values. Used in principal component analysis, image compression, recommendation systems.

**Linear maps in physics.** Operators in quantum mechanics are linear maps on Hilbert spaces. Observables are self-adjoint operators. Time evolution is a unitary operator. Symmetries are linear maps preserving the structure.

**The Schrödinger equation.** $i \hbar \partial \psi/\partial t = H \psi$, where $H$ is the Hamiltonian (a self-adjoint operator). The time-evolution operator $U(t) = e^{-i H t/\hbar}$ is unitary.

**The rotation group SO(3).** The $3 \times 3$ real orthogonal matrices with determinant $1$. Linear maps preserving the inner product and orientation. A Lie group (covered in advanced algebra).

**Tensor products and operators.** Operators on $V \otimes W$ include $T \otimes I$, $I \otimes S$, and many others. The basis of quantum mechanics for composite systems.

## Key Ideas
- Linear map: $T(a u + b v) = a T(u) + b T(v)$.
- Kernel: $\ker T = T^{-1}(0)$; image: $\text{im}(T) = T(V)$.
- Rank-nullity: $\dim V = \dim \ker T + \dim \text{im}(T)$.
- First isomorphism: $V/\ker T \cong \text{im}(T)$.
- $V \cong F^n$ iff $\dim V = n$.

## Worked Examples
**Example 1 — Verify linearity.** $T: \mathbb{R}^2 \to \mathbb{R}^3$, $T(x, y) = (x + y, x - y, 2 x)$. $T(a u + b v) = T(a u_1 + b v_1, a u_2 + b v_2) = (a u_1 + b v_1 + a u_2 + b v_2, a u_1 + b v_1 - a u_2 - b v_2, 2 a u_1 + 2 b v_1) = a (u_1 + u_2, u_1 - u_2, 2 u_1) + b (v_1 + v_2, v_1 - v_2, 2 v_1) = a T(u) + b T(v)$. ✓

**Example 2 — Kernel and image.** $T: \mathbb{R}^3 \to \mathbb{R}^2$ given by $T(x, y, z) = (x + y, 2 y + z)$. Solve $T = 0$: $x = -y, z = -2 y$. So $\ker T = \{(-y, y, -2 y) : y \in \mathbb{R}\} = \text{span}\{(-1, 1, -2)\}$. $\dim \ker T = 1$. By rank-nullity, $\text{rank} T = 3 - 1 = 2$, so $\text{im}(T) = \mathbb{R}^2$.

**Example 3 — Diagonalisation.** $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$. Characteristic polynomial: $\lambda^2 - 2 \lambda - 3 = (\lambda - 3)(\lambda + 1)$. Eigenvalues $3, -1$. Eigenvectors: for $\lambda = 3$: $(1, 1)$. For $\lambda = -1$: $(1, -1)$. Diagonalisation: $A = P D P^{-1}$ with $P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, $D = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}$.

**Example 4 — First isomorphism.** $T: \mathbb{R}^3 \to \mathbb{R}^2$, $T(x, y, z) = (x, y)$. $\ker T = \mathbb{R}(0, 0, 1)$ (the $z$-axis). $\text{im}(T) = \mathbb{R}^2$. So $\mathbb{R}^3 / \mathbb{R}(0, 0, 1) \cong \mathbb{R}^2$. Both sides are 2D. ✓

**Example 5 — Singular value decomposition.** $A = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix}$. A diagonal matrix with a negative entry is *not* already in SVD form, because SVD requires non-negative singular values. The SVD is $A = U \Sigma V^T$ with $U = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$, $\Sigma = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$, $V = I$: $U \Sigma V^T = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & -2 \end{pmatrix} = A$. ✓ The sign of the negative entry is absorbed into $U$ (or $V$).

## Common Misconceptions
- **"Every linear map is a matrix."** Only after choosing bases. The matrix depends on the bases.
- **"Isomorphic means identical."** No — isomorphic means the same up to a change of basis. The objects can look different.
- **"Rank-nullity is a different theorem from dimension counting."** It is the same thing: a map that collapses $\ker T$ to $0$ (mod the kernel) is injective on the quotient.
- **"SVD is the same as eigendecomposition."** No — SVD applies to any (even non-square) matrix; eigendecomposition only to square matrices (and only for diagonalisable ones).

## Connections
Linear maps are the workhorses of linear algebra and its applications. They appear as operators in quantum mechanics, as derivatives in calculus, as matrices in numerical analysis, and as transformations in geometry. The rank-nullity theorem and the isomorphism theorems are the structural backbone.

## Quick Check
1. Define a linear map.
2. State rank-nullity.
3. What is the kernel of a linear map?
4. When are two vector spaces isomorphic?
5. State the first isomorphism theorem.

## Takeaway
- Linear map: $T(a u + b v) = a T(u) + b T(v)$.
- $\ker T$ is a subspace of $V$; $\text{im}(T)$ is a subspace of $W$.
- Rank-nullity: $\dim V = \dim \ker T + \dim \text{im}(T)$.
- First isomorphism: $V/\ker T \cong \text{im}(T)$.
- $V \cong F^n$ iff $\dim V = n$.
