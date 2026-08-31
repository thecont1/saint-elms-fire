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
lessonId: linear-algebra-m1-l2
lessonName: Linear Independence, Basis and Dimension
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - linear-algebra-m1-l1
learningObjectives:
  - Define linear independence and dependence.
  - State and use the definition of a basis.
  - Define the dimension of a vector space and prove it is well-defined.
  - Compute dimensions of common vector spaces and subspaces.
concepts:
  - Linear independence
  - Linear dependence
  - Basis
  - Dimension
  - Spanning set
  - Standard basis
tags:
  - mathematics
  - algebra
  - basis
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Linear Independence, Basis and Dimension

## Overview
A *basis* of a vector space is a linearly independent spanning set. Every vector space has a basis (assuming the axiom of choice for infinite-dimensional spaces), and any two bases of a finite-dimensional space have the same number of vectors — the *dimension*. These concepts are the structural skeleton of linear algebra and the foundation of every concrete application. This lesson develops them in detail and applies them to the standard examples.

## Learning Path
- What you should already know: vector spaces, subspaces, span, the subspace test.
- What this lesson adds: linear independence, basis, dimension, and the techniques for computing them.
- What it unlocks: coordinates, dimension counting, the rank-nullity theorem, and the structure theorems for linear maps.

## Core Explanation
**Linear independence.** A set $S = \{v_1, \ldots, v_n\}$ is *linearly independent* if the only linear combination giving zero is the trivial one: $c_1 v_1 + \cdots + c_n v_n = 0 \Rightarrow c_1 = \cdots = c_n = 0$. Otherwise, $S$ is *linearly dependent* (there is a nontrivial relation).

**Equivalently.** $S$ is linearly dependent iff one of the vectors is a linear combination of the others.

**Spanning set.** $S$ is a spanning set for $V$ if $\text{span}(S) = V$. (Every vector in $V$ is a linear combination of vectors in $S$.)

**Basis.** $S$ is a basis of $V$ if it is both linearly independent and a spanning set. Equivalently, every $v \in V$ is uniquely a linear combination of $S$ (uniqueness from independence; existence from spanning).

**Standard bases.**
- $\mathbb{R}^n$: $\{e_1, \ldots, e_n\}$ where $e_i$ has $1$ in position $i$ and $0$ elsewhere.
- $F[x]$: $\{1, x, x^2, \ldots\}$ (infinite basis).
- $M_{m \times n}(F)$: $\{E_{ij} : 1 \le i \le m, 1 \le j \le n\}$ (matrix units).
- $F^n$: $e_i$ as for $\mathbb{R}^n$.

**Existence of a basis.** Every non-zero vector space has a basis. Proof: start with any non-zero vector; keep adding linearly independent vectors until the set spans. By Zorn's lemma (infinite case) or by the finite case of the above (finite-dimensional), a basis exists.

**Dimension.** For a finite-dimensional space, all bases have the same size. This common size is the *dimension*, $\dim V$.

**Well-definedness of dimension.** If $\{v_1, \ldots, v_m\}$ and $\{w_1, \ldots, w_n\}$ are both bases of $V$, then $m = n$. Proof: each $w_i$ is a linear combination of the $v$'s; by a counting argument, $n \le m$. Symmetrically, $m \le n$. So $m = n$.

**Theorem (replacement).** If $S$ is a linearly independent set in $V$, and $T$ is a spanning set with $|T| = n$, then $|S| \le n$.

**Coordinates.** If $B = \{v_1, \ldots, v_n\}$ is a basis of $V$, every $v \in V$ is uniquely $v = a_1 v_1 + \cdots + a_n v_n$. The *coordinate vector* is $[v]_B = (a_1, \ldots, a_n)^T \in F^n$.

**Change of basis.** Given two bases $B$ and $B'$ of $V$, the change-of-basis matrix $P$ satisfies $[v]_{B'} = P [v]_B$. $P$ is invertible; $P^{-1}$ converts back.

**Infinite-dimensional spaces.** $F[x]$, $C[a, b]$, $L^2$, $\ell^2$ are infinite-dimensional. The basis is infinite. The axiom of choice is needed to assert existence.

**Examples of dimension.**
- $\dim F^n = n$.
- $\dim M_{m \times n}(F) = m n$.
- $\dim F[x]_{\le n} = n + 1$ (polynomials of degree $\le n$).
- $\dim \mathbb{R}[x] = \aleph_0$ (countably infinite).
- $\dim C[a, b] = $ uncountable.
- $\dim L^2(\mathbb{R}) = $ uncountable.

**Subspace dimension.** If $W \subseteq V$ is a subspace, then $\dim W \le \dim V$, with equality iff $W = V$.

**Direct sum.** $V = W_1 \oplus W_2$ if $W_1 \cap W_2 = \{0\}$ and $W_1 + W_2 = V$. Then $\dim V = \dim W_1 + \dim W_2$.

**Examples of direct sums.** $\mathbb{R}^3 = \text{span}\{e_1, e_2\} \oplus \text{span}\{e_3\}$ (a plane and a line). $M_n = S_n \oplus A_n$ (symmetric and antisymmetric matrices). $L^2 = \text{span}\{\text{even functions}\} \oplus \text{span}\{\text{odd functions}\}$.

**Dimension formula.** $\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2)$. (Covered in the next module; preview here.)

**Finite vs. infinite-dimensional.** A vector space is finite-dimensional if it has a finite basis; otherwise infinite-dimensional. Different rules: an infinite-dimensional space can have linearly independent infinite sets; not every subspace is closed (in a topological sense); etc.

**Algorithms for finding a basis.**
- From a spanning set: keep vectors, remove any that is a linear combination of the previous ones (row reduction).
- From a linearly independent set: keep extending it by adding vectors not in its span (until it spans).

**Basis of a null space.** Solve $A x = 0$; express the solution as a parametric vector; the parameters correspond to basis vectors. The number of parameters is the nullity.

**Basis of a column space.** Reduce $A$ to echelon form; the columns of $A$ corresponding to the pivot columns of the echelon form are a basis. (Covered in the next module.)

**Rank.** $\text{rank}(A) = \dim(\text{column space of } A) = \dim(\text{row space of } A)$. For an $m \times n$ matrix, $\text{rank}(A) \le \min(m, n)$.

**Rank-nullity theorem.** $\text{rank}(A) + \text{nullity}(A) = n$ (number of columns). A consequence of the structure of the solution space.

**Determinant.** For a square matrix $A$, $\det A \ne 0$ iff $A$ is invertible iff the columns are linearly independent. (Covered in the next module.)

**Existence of bases for all vector spaces.** Requires the axiom of choice (for the infinite-dimensional case). Most vector spaces in practice are concrete enough that explicit bases can be written.

**Hamel basis.** A basis of an infinite-dimensional space is a *Hamel basis* (in contrast to a Schauder basis, which is a countable sequence whose finite linear combinations are dense). Hamel bases are usually non-constructive.

**Examples of bases in function spaces.** $\{1, x, x^2, \ldots\}$ is a basis of $F[x]$. The Fourier basis $\{\sin(n x), \cos(n x)\}_{n \ge 1}$ is a Schauder basis of $L^2[0, 2\pi]$. Wavelets are bases of $L^2(\mathbb{R})$.

**Coordinates and physics.** In quantum mechanics, the state vector lives in a Hilbert space; a basis (e.g. position eigenstates $|x\rangle$ or energy eigenstates $|n\rangle$) gives a representation. The change of basis is a unitary transformation.

**Wedge products.** $\Lambda^k V$ has dimension $\binom{n}{k}$ for $\dim V = n$. The basis is the set of $e_{i_1} \wedge \cdots \wedge e_{i_k}$ for $i_1 < \cdots < i_k$. Used in differential forms and the determinant.

**Symmetric and antisymmetric tensors.** $S^k V$ has dimension $\binom{n + k - 1}{k}$; $\Lambda^k V$ has dimension $\binom{n}{k}$. The basis of $S^k$ is the symmetrised tensor products.

**Quotient spaces.** $V/W$ has dimension $\dim V - \dim W$. Basis: lift a basis of a complement of $W$ to $V$ and take the cosets.

**Constructing bases from bases of subspaces.** If $V = W_1 \oplus W_2$ and $B_1, B_2$ are bases of $W_1, W_2$, then $B_1 \cup B_2$ is a basis of $V$. Conversely, if $B$ is a basis of $V$ and $B_1 \subseteq B$ spans $W_1$, then $B_2 = B \setminus B_1$ (modulo a refinement) spans a complement.

**Dimension of the solution space of a linear ODE.** The space of solutions to $a_n y^{(n)} + \cdots + a_0 y = 0$ is an $n$-dimensional vector space (the $n$ integration constants).

**Dimension of the solution space of a homogeneous linear system.** $\dim(\ker A) = n - \text{rank}(A)$ — the nullity.

**Hamel basis of $\mathbb{R}$.** A basis of $\mathbb{R}$ over $\mathbb{Q}$ exists but is uncountable. Cannot be written explicitly. (This is why "infinite-dimensional" is tricky for the reals as a $\mathbb{Q}$-vector space, but not as an $\mathbb{R}$-vector space — over $\mathbb{R}$, $\mathbb{R}$ is 1-dimensional.)

**Linear independence in $F[x]$.** $\{1, x, x^2, \ldots, x^n\}$ is linearly independent (a polynomial of degree $n$ has at most $n$ roots). So $F[x]$ has a countable basis and is infinite-dimensional.

**The dimension of the space of solutions to $A x = 0$.** The nullity. Equal to the number of free variables in the echelon form of $A$.

**Dimension of the column space of $A$.** The rank. The number of pivot columns in the echelon form.

**Row space and column space.** For an $m \times n$ matrix $A$, the column space (in $F^n$) has the same dimension as the row space (in $F^m$). This is the rank.

**Finding a basis of a span.** Given vectors $v_1, \ldots, v_k$, place them as columns of a matrix and row-reduce. The pivot columns give a basis of the span. (Algorithm: row-reduce; identify the pivots; the corresponding original columns form the basis.)

**Basis of a kernel.** Solve $A x = 0$. Express the solution in parametric form. The parameters correspond to basis vectors.

**Basis of a polynomial subspace.** For $W = \text{span}\{p_1, \ldots, p_k\} \subseteq F[x]_{\le n}$, use the matrix-of-coefficients method: each $p_i$ is a vector of coefficients; row-reduce the matrix; the pivots give a basis of polynomials.

**The dimension of $\text{Mat}_{m \times n}(F)$.** $m n$. Basis: matrix units $E_{ij}$. (The matrix with a $1$ in position $(i, j)$ and $0$ elsewhere.) Any $m \times n$ matrix is a unique linear combination of the $E_{ij}$.

**Dimension of $F^n$ over $F$.** $n$. The standard basis $e_1, \ldots, e_n$ has $n$ elements.

**Dimension of the dual space $V^*$.** For finite-dimensional $V$, $\dim V^* = \dim V$. The dual basis to $\{v_1, \ldots, v_n\}$ is $\{v^1, \ldots, v^n\}$ with $v^i(v_j) = \delta^i_j$.

**Dimension of the exterior algebra.** $\dim \Lambda^*(V) = 2^n$ for $\dim V = n$. The basis is $1 \oplus V \oplus \Lambda^2 V \oplus \cdots \oplus \Lambda^n V$.

**Dimension of the symmetric algebra.** $\dim S^k V = \binom{n + k - 1}{k}$.

**Dimension of tensor products.** $\dim(V \otimes W) = (\dim V)(\dim W)$. Basis: $v_i \otimes w_j$ if $\{v_i\}, \{w_j\}$ are bases.

**Dimension of the polynomial ring.** $\dim F[x_1, \ldots, x_n] = \infty$ (countably infinite — monomials $x_1^{a_1} \cdots x_n^{a_n}$ for non-negative $a_i$). $F[x_1, \ldots, x_n]_{\le d}$ (degree $\le d$ in each variable) has dimension $\binom{n + d}{d}$.

**Affine dimension.** The dimension of an affine subspace $v_0 + W$ is $\dim W$. Not the same as $\dim V$.

**Quotient spaces.** $V/W$ has dimension $\dim V - \dim W$. (For subspaces $W$.) If $V$ is finite-dimensional and $W$ is a subspace, then $V/W$ is finite-dimensional with dimension $\dim V - \dim W$.

**Codimension.** The codimension of $W$ in $V$ is $\dim V - \dim W$. Important in algebraic geometry (the codimension of a variety is the number of defining equations).

**Why the dimension is the "number of degrees of freedom".** Each coordinate in a basis is a degree of freedom — a real number you can choose. The number of degrees of freedom is the dimension.

**Examples of basis computations.**
- $\text{span}\{(1, 1, 0), (1, 0, 1), (0, 1, 1)\}$ in $\mathbb{R}^3$: matrix has rank $3$? Reduce: $\begin{pmatrix} 1 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix} \to \begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & 1 \\ 0 & 1 & 1 \end{pmatrix} \to \begin{pmatrix} 1 & 1 & 0 \\ 0 & -1 & 1 \\ 0 & 0 & 2 \end{pmatrix}$. Rank $3$, so the three vectors are linearly independent, and they form a basis of $\mathbb{R}^3$ (assuming they span). They do: any vector $(a, b, c)$ is a combination.

**Why the basis is not unique.** Many bases exist for any non-trivial vector space. The basis depends on choices; only the dimension is unique. Different bases give different coordinates for the same vector; change of basis relates them.

**Hamel basis vs. orthonormal basis.** A Hamel basis (algebraic basis) is what we have defined: linearly independent and spanning. An orthonormal basis also satisfies orthonormality with respect to an inner product. For finite-dimensional inner product spaces, the two notions coincide; for infinite-dimensional Hilbert spaces, the orthonormal basis is countable and dense, while a Hamel basis is uncountable.

**Greedy algorithm for basis.** Start with the empty set. At each step, add a vector not in the current span, if one exists. If the set eventually spans, you have a basis. For finite-dimensional spaces, the process terminates.

**Computing dimension by row reduction.** Place the vectors as columns of a matrix $A$. Row-reduce. The number of pivots is $\dim \text{span}(\text{columns})$. This is the rank.

**Rank-nullity preview.** For $A$ an $m \times n$ matrix, $\text{rank}(A) + \text{nullity}(A) = n$. So $\dim \text{col}(A) + \dim \ker(A) = n$. (Proved in the next module.)

**Examples of basis computation.**
- $W = \text{span}\{(1, 2, 3), (2, 3, 4), (3, 4, 5)\} \subseteq \mathbb{R}^3$. The third is the difference of the second and the first (and the sum): $(3, 4, 5) = (2, 3, 4) - (1, 2, 3) + 2(1, 2, 3) = (1, 1, 1) + 2 (1, 2, 3) - (1, 1, 1) \cdot$ hmm, let me check: $(2, 3, 4) - (1, 2, 3) = (1, 1, 1)$, so $(3, 4, 5) = (2, 3, 4) + (1, 1, 1)$. And $(1, 1, 1)$ is the difference. So $\{v_1, v_2, v_3\}$ is linearly dependent: $v_3 = v_2 + (v_2 - v_1) = 2 v_2 - v_1$. So $W = \text{span}\{v_1, v_2\}$, a 2D subspace.

**Dimension of $\mathbb{C}^n$ over $\mathbb{C}$.** $n$. Over $\mathbb{R}$: $2n$ (each complex number is two real numbers).

**Basis for $\mathbb{C}^n$ over $\mathbb{C}$.** Standard basis $e_1, \ldots, e_n$. Over $\mathbb{R}$: $\{e_1, i e_1, e_2, i e_2, \ldots, e_n, i e_n\}$, $2 n$ elements.

**Why this is all useful.** Every basis gives coordinates. Coordinates reduce linear algebra to componentwise computation. Once you have a basis, you can do everything in coordinates; once you have the dimensions, you can do many things without coordinates.

## Key Ideas
- Linear independence: no nontrivial linear combination is zero.
- Basis: independent + spanning.
- Dimension: number of vectors in a basis; well-defined.
- Coordinates relative to a basis.
- Rank-nullity: $\text{rank}(A) + \text{nullity}(A) = n$.

## Worked Examples
**Example 1 — Independence test.** Are $(1, 1, 0), (1, 0, 1), (0, 1, 1)$ independent? Set $a (1, 1, 0) + b (1, 0, 1) + c (0, 1, 1) = 0$. Three equations: $a + b = 0$, $a + c = 0$, $b + c = 0$. Adding the first two: $2 a + b + c = 0$, so $a = 0$. Then $b = c = 0$. So the vectors are independent. The dimension of their span is $3$, so they form a basis of $\mathbb{R}^3$.

**Example 2 — Independence and dimension.** $V = \mathbb{R}^3$, $W = \text{span}\{(1, 1, 0), (1, 0, 1), (0, 1, 1), (1, 1, 1)\}$. Are the four vectors independent? The sum of the first three is $(2, 2, 2) = 2 (1, 1, 1)$. So $v_1 + v_2 + v_3 = 2 v_4$, a nontrivial relation. So the four are dependent. The span has dimension at most $3$; in fact it is $\mathbb{R}^3$.

**Example 3 — Basis of kernel.** $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$. Solve $A x = 0$. The two rows are proportional, so one equation: $x_1 + 2 x_2 + 3 x_3 = 0$. Solution: $x_1 = -2 x_2 - 3 x_3$. Parametrise: $x_2 = s, x_3 = t$. Then $x = s (-2, 1, 0) + t (-3, 0, 1)$. Basis of kernel: $\{(-2, 1, 0), (-3, 0, 1)\}$. Dimension $2$.

**Example 4 — Dimension of polynomial subspace.** $W = \{p \in \mathbb{R}[x] : p(0) = p(1) = 0\}$. $W$ is the kernel of the linear map $p \mapsto (p(0), p(1)) : \mathbb{R}[x]_{\le n} \to \mathbb{R}^2$. The map is surjective for $n \ge 1$ (any $(a, b)$ is $(a, b)$ at $x = 0, 1$). So $\dim W = (n + 1) - 2 = n - 1$ for $n \ge 1$. A basis: $\{(x)(x - 1) q(x) : q \in \mathbb{R}[x]_{\le n-2}\}$, i.e., $x (x - 1), x^2 (x - 1), \ldots, x^{n-1} (x - 1)$.

**Example 5 — Basis of $W = \text{span}\{v_1, v_2, v_3\}$ with $v_1 = (1, 2, 3), v_2 = (4, 5, 6), v_3 = (7, 8, 9)$.** These are in arithmetic progression. Form the differences $v_2 - v_1 = (3, 3, 3) = 3(1, 1, 1)$ and $v_3 - v_1 = (6, 6, 6) = 6(1, 1, 1)$. Both differences lie on the single line $\mathbb{R}(1, 1, 1)$, so the three vectors are linearly dependent: $v_2 = v_1 + 3(1,1,1)$ and $v_3 = v_1 + 6(1,1,1)$. The span is therefore

$$W = \text{span}\{v_1, v_2, v_3\} = \mathbb{R}(1, 1, 1),$$

a one-dimensional subspace. A basis is $\{(1, 1, 1)\}$, and $\dim W = 1$.

## Common Misconceptions
- **"A basis is unique."** No — there are many bases.
- **"The dimension depends on the basis."** No — the dimension is basis-independent.
- **"All vector spaces have a finite basis."** No — only finite-dimensional ones.
- **"The set of all polynomials is countable."** No — the Hamel basis of $\mathbb{R}$ over $\mathbb{Q}$ is uncountable; but $\mathbb{R}[x]$ is countable (polynomials are finite sequences of coefficients).

## Connections
Basis and dimension are the foundation of coordinate geometry, of matrix representations, of the rank-nullity theorem, and of the structure theory of linear maps. In quantum mechanics, choosing a basis is choosing a representation; the dimension is the size of the Hilbert space.

## Quick Check
1. State the definition of linear independence.
2. State the definition of a basis.
3. What is the dimension of the span of $\{(1, 2), (2, 4)\}$?
4. Find a basis of the null space of $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$.
5. What is the dimension of the space of polynomials of degree $\le 4$?

## Takeaway
- Linear independence: no nontrivial combination is zero.
- Basis: independent + spanning.
- Dimension: number of vectors in a basis (well-defined).
- Coordinates relative to a basis.
- Rank-nullity: $\text{rank}(A) + \text{nullity}(A) = n$.
