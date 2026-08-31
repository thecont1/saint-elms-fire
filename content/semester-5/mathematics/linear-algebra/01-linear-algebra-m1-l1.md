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
lessonId: linear-algebra-m1-l1
lessonName: Vector Spaces and Subspaces
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - abstract-algebra-m1-l1
learningObjectives:
  - Define a vector space and verify the axioms.
  - Recognise the standard examples: $\mathbb{R}^n$, $F^n$, function spaces, matrix spaces.
  - Identify subspaces and verify the subspace test.
  - Compute sums and intersections of subspaces.
concepts:
  - Vector space
  - Vector space axioms
  - Subspace
  - Subspace test
  - Sum of subspaces
  - Intersection of subspaces
tags:
  - mathematics
  - algebra
  - vector-spaces
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
***

# Vector Spaces and Subspaces

## Overview
A *vector space* is a set with two operations — vector addition and scalar multiplication — that satisfy the axioms of a linear structure. The concept generalises $\mathbb{R}^n$ to infinite-dimensional function spaces, matrix spaces, and abstract algebraic settings. This lesson develops the axioms, surveys the standard examples, and introduces subspaces — the building blocks of linear algebra.

## Learning Path
- What you should already know: basic algebra, the integers, matrices, function notation.
- What this lesson adds: a precise definition of vector space, the subspace test, and the basic constructions.
- What it unlocks: linear independence, basis, dimension (next lessons), and the applications throughout physics.

## Core Explanation
**Vector space.** A set $V$ over a field $F$ (typically $\mathbb{R}$ or $\mathbb{C}$) with two operations: vector addition $V \times V \to V$ and scalar multiplication $F \times V \to V$, satisfying:
1. Closure under addition: $u + v \in V$.
2. Commutativity of addition: $u + v = v + u$.
3. Associativity of addition: $(u + v) + w = u + (v + w)$.
4. Zero vector: $0 \in V$ with $v + 0 = v$.
5. Negatives: $-v \in V$ with $v + (-v) = 0$.
6. Closure under scalar multiplication: $c v \in V$.
7. Distributivity: $c (u + v) = c u + c v$, $(c + d) v = c v + d v$.
8. Associativity of scalar multiplication: $c (d v) = (c d) v$.
9. Identity: $1 \cdot v = v$.

**Examples of vector spaces.**
- $\mathbb{R}^n$ (or $\mathbb{C}^n$): column vectors with componentwise operations.
- $F[x]$: polynomials with coefficients in $F$.
- $F[[x]]$: formal power series.
- $C[a, b]$: continuous real-valued functions on $[a, b]$.
- $L^p[a, b]$: $p$-integrable functions, $\|f\|_p = (\int |f|^p)^{1/p} < \infty$.
- $M_{m \times n}(F)$: $m \times n$ matrices.
- The trivial vector space $\{0\}$.

**Subspace.** A subset $W \subseteq V$ is a *subspace* if it is itself a vector space under the same operations. Equivalently (subspace test): $W$ is non-empty, closed under addition, and closed under scalar multiplication. (A non-empty subset closed under linear combinations is a subspace.)

**Examples of subspaces.**
- Lines through the origin in $\mathbb{R}^n$.
- Planes through the origin in $\mathbb{R}^3$.
- The set of solutions to a homogeneous linear system $A x = 0$ (the *null space* or *kernel* of $A$).
- The set of polynomials of degree $\le n$ in $F[x]$.
- The set of $n \times n$ symmetric matrices in $M_n(\mathbb{R})$.
- The set of continuous functions vanishing at $0$ in $C[0, 1]$.

**Span.** Given a subset $S \subseteq V$, the *span* of $S$ is the set of all finite linear combinations: $\text{span}(S) = \{c_1 v_1 + \cdots + c_k v_k : c_i \in F, v_i \in S\}$. Always a subspace; the smallest subspace containing $S$.

**Sum of subspaces.** $W_1 + W_2 = \{w_1 + w_2 : w_1 \in W_1, w_2 \in W_2\}$. Always a subspace. The smallest subspace containing both $W_1$ and $W_2$.

**Intersection of subspaces.** $W_1 \cap W_2$ is a subspace (the largest contained in both).

**Dimension formula.** $\dim(W_1 + W_2) = \dim W_1 + \dim W_2 - \dim(W_1 \cap W_2)$. (Covered in the next module.)

**Internal direct sum.** $V = W_1 \oplus W_2$ if $W_1 \cap W_2 = \{0\}$ and $W_1 + W_2 = V$. Every $v \in V$ is uniquely $w_1 + w_2$ with $w_i \in W_i$. (Covered in the next module.)

**Span generates a subspace.** $W = \text{span}(S)$ is a subspace; $S$ is called a *spanning set* for $W$. The minimal spanning set is a basis (next module).

**Linear combination.** An expression of the form $c_1 v_1 + \cdots + c_k v_k$. Every vector in $\text{span}(S)$ is a linear combination of elements of $S$.

**The zero subspace.** $\{0\}$ is a subspace of any $V$. The *whole space* $V$ is a subspace of itself. Any other subspace is *proper*.

**Subspace of $F^n$.** Every subspace of $F^n$ is the span of some finite set of vectors; equivalently, the null space of some matrix. A fundamental result: subspaces of $F^n$ are exactly the solution sets of homogeneous linear systems.

**Affine subspace.** A translate of a subspace: $v_0 + W$ for some $v_0$ and subspace $W$. Not a subspace (unless $v_0 \in W$). The solution set of an inhomogeneous linear system $A x = b$ (when non-empty) is an affine subspace.

**Function spaces as vector spaces.** $C[a, b]$: continuous functions on $[a, b]$, with pointwise addition and scalar multiplication. The zero vector is the zero function. Closed under linear combinations of continuous functions. Infinite-dimensional.

**Sequence spaces.** $\ell^p$: sequences $(a_n)$ with $\sum |a_n|^p < \infty$. With the $\ell^p$ norm, these are Banach spaces. $\ell^2$ is the prototypical Hilbert space; quantum mechanics lives in $\ell^2$ or $L^2(\mathbb{R})$.

**Why function spaces are useful.** Many physical quantities are functions: wavefunctions, fields, density distributions, response functions. Linear combinations and limits of functions are needed in analysis. Function spaces provide the framework.

**Subspace test.** $W \subseteq V$ is a subspace iff:
1. $W$ is non-empty (equivalently, $0 \in W$).
2. $W$ is closed under addition: $u, v \in W \Rightarrow u + v \in W$.
3. $W$ is closed under scalar multiplication: $u \in W, c \in F \Rightarrow c u \in W$.

(One-step version: $W$ is non-empty and closed under linear combinations: $a u + b v \in W$ for all $u, v \in W$ and $a, b \in F$.)

**Why this test is enough.** If $W$ satisfies the three conditions, the zero vector is in $W$ (take $0 = 0 \cdot u$), the negative is $-u = (-1) \cdot u \in W$, and the rest of the axioms are inherited from $V$.

**Direct sum and complements.** $V = W_1 \oplus W_2$ means every $v$ is uniquely $w_1 + w_2$ with $w_i \in W_i$. This is equivalent to $V = W_1 + W_2$ and $W_1 \cap W_2 = \{0\}$.

**Quotient space.** $V/W$ (for a subspace $W$) is the set of cosets $v + W$, with the natural operations. A vector space. The dimension is $\dim V - \dim W$.

**Why the axioms are useful.** The axioms are enough to prove the basic theorems (existence of basis, dimension, rank-nullity) for *all* vector spaces at once. So once you check the axioms for a specific space, the theorems follow for free.

**Examples of non-vector-spaces.**
- $\mathbb{R}^2$ with componentwise multiplication (no inverses).
- $\{1, 2, 3\}$ with any operations (too small).
- The plane $z = 1$ in $\mathbb{R}^3$ (not through the origin; not closed under scalar multiplication).

**Why physics needs vector spaces.** Quantum mechanics uses Hilbert spaces. Classical mechanics uses phase space (a vector space or symplectic manifold). Field theory uses function spaces. Group theory is built on vector spaces. Linear algebra is everywhere.

**Applications of vector spaces.**
- $\mathbb{R}^n$: coordinates of physical quantities.
- $L^2(\mathbb{R})$: square-integrable functions (wavefunctions in QM).
- $M_n(\mathbb{R})$: matrix representations of operators.
- $F[x]$: polynomials for interpolation and approximation.
- $C^\infty(M)$: smooth functions on a manifold.

**Subspaces in physics.** The state space of a physical system is a Hilbert space. Symmetric matrices (operators with real eigenvalues) form a subspace. The set of traceless matrices (operators with zero average) form a subspace. Conservation laws often pick out invariant subspaces.

**Hilbert space.** A complete inner product space. The natural setting for quantum mechanics. $L^2$, $\ell^2$, $F^n$ with the standard inner product are Hilbert spaces.

**Banach space.** A complete normed vector space. The generalisation of Hilbert space (need not have an inner product). $L^p$ for $p \ne 2$ are Banach but not Hilbert.

**Inner product.** A bilinear (or sesquilinear) form $\langle \cdot, \cdot \rangle$ on $V$ that is positive definite. The basis of orthogonality, projection, and Hilbert space theory.

**Span and linear independence (preview).** $S$ is *linearly independent* if no nontrivial linear combination gives zero. The maximal independent subset is a *basis* of $\text{span}(S)$. The size of a basis is the dimension. Covered in the next lessons.

**Examples of basis.**
- $\mathbb{R}^3$: standard basis $\{(1, 0, 0), (0, 1, 0), (0, 0, 1)\}$.
- $F[x]$: monomials $\{1, x, x^2, \ldots\}$ — infinite basis (so $F[x]$ is infinite-dimensional).
- $M_{m \times n}(F)$: matrix units $E_{ij}$ (1 in $(i, j)$, 0 elsewhere) — $m n$ of them, basis of dimension $m n$.

**The space $F[x]/(p(x))$.** For an irreducible polynomial $p$ of degree $n$, $F[x]/(p)$ is a vector space of dimension $n$ over $F$, with basis $\{1, \bar{x}, \ldots, \bar{x}^{n-1}\}$ (the cosets of the powers of $x$). This is the field extension $F(\alpha)$ for $\alpha$ a root of $p$.

**Spaces of operators.** The bounded linear operators on a Hilbert space form a Banach space (under the operator norm). The compact operators form a closed subspace. The trace-class operators form an ideal.

**Tensor products.** $V \otimes W$ is the vector space of formal linear combinations of $v \otimes w$, modulo the relations $(a v) \otimes w = a (v \otimes w) = v \otimes (a w)$ and $(v_1 + v_2) \otimes w = v_1 \otimes w + v_2 \otimes w$. Used in quantum mechanics for composite systems.

**The space of multilinear maps.** Maps $V_1 \times \cdots \times V_k \to W$ that are linear in each argument. Forms a vector space, isomorphic to the space of linear maps on the tensor product.

**Exterior algebra.** $\Lambda^k V$ is the space of alternating $k$-linear forms, the building blocks of differential forms. Used in differential geometry and electromagnetism.

**Symmetric algebra.** $S^k V$ is the space of symmetric $k$-linear forms, the building blocks of polynomials. Used in invariant theory and representation theory.

**Universal property of the tensor product.** Any multilinear map $V_1 \times \cdots \times V_k \to W$ factors uniquely through the tensor product $V_1 \otimes \cdots \otimes V_k$. This is the abstract reason tensor products exist.

**Polynomial functions on $V$.** The algebra of functions $V \to F$ that are polynomial in the coordinates. A graded algebra, basis of invariant theory.

**Rational functions.** The field of fractions of the polynomial algebra. Used in algebraic geometry.

**Subspace of solutions to a differential equation.** The set of solutions to a linear homogeneous ODE is a vector space (with pointwise addition and scalar multiplication). The dimension equals the order of the equation.

**Subspace of polynomials of bounded degree.** The polynomials of degree $\le n$ form a subspace of $F[x]$ of dimension $n + 1$ (basis $\{1, x, \ldots, x^n\}$).

**Subspace of solutions to $A x = 0$.** The null space of a matrix $A$ is a subspace of $F^n$. Its dimension is $n - \text{rank}(A)$ (rank-nullity theorem, next module).

**Cauchy sequences and completion.** The rational numbers $\mathbb{Q}$ are not complete; the reals $\mathbb{R}$ are the completion. Similarly, rational functions on $[a, b]$ are completed to continuous functions $C[a, b]$. The completion of $C[a, b]$ in the sup norm is $C[a, b]$ itself (already complete). The completion of polynomials in $L^2$ is $L^2$ itself.

**Subspace generated by a function.** The set of all polynomials in $f$ (and in constant functions) is a subalgebra of $C[a, b]$. If $f$ is algebraically independent of constants, this subalgebra has dimension equal to the degree bound.

**Sums of subspaces.** $W_1 + W_2$ is the smallest subspace containing both. Always a subspace.

**Intersections of subspaces.** $W_1 \cap W_2$ is the largest subspace contained in both. Always a subspace. (Note: the union of two subspaces is generally not a subspace.)

**Subspaces of $\mathbb{R}^2$.** The subspaces are $\{0\}$, lines through the origin, and $\mathbb{R}^2$ itself. Each line is a one-dimensional subspace.

**Subspaces of $\mathbb{R}^3$.** $\{0\}$, lines through the origin, planes through the origin, $\mathbb{R}^3$. Two-dimensional subspaces are planes; one-dimensional are lines.

**Subspaces of $\mathbb{R}^n$.** $k$-dimensional subspaces for $0 \le k \le n$. They are the level sets of $n - k$ independent linear equations, or equivalently, the spans of $k$ linearly independent vectors.

**The Grassmannian.** The set of all $k$-dimensional subspaces of $F^n$, denoted $G(k, n)$ or $\text{Gr}(k, n)$. A smooth manifold of dimension $k(n - k)$.

**Plücker embedding.** The Grassmannian embeds in projective space via the Plücker coordinates (determinants of $k \times k$ minors). Used in algebraic geometry.

**Affine subspaces in $\mathbb{R}^n$.** $v_0 + W$ for $W$ a subspace. Not a subspace (unless $v_0 = 0$); the solution set of an inhomogeneous linear system.

**Cosets and quotient spaces.** $V/W$ is the set of cosets $v + W$. A vector space of dimension $\dim V - \dim W$. The natural setting for the first isomorphism theorem (next module).

**Linear functionals.** Linear maps $V \to F$ (the field). Form a vector space $V^*$ (the dual space). For finite-dimensional $V$, $\dim V^* = \dim V$. Linear functionals are important in physics (observables, inner products, integration).

**The dual space.** $V^* = \text{Hom}(V, F)$. The double dual $V^{**}$ is naturally isomorphic to $V$ (canonically for finite-dimensional $V$).

## Key Ideas
- Vector space: set with vector addition and scalar multiplication, satisfying the axioms.
- Subspace: subset closed under the operations, containing zero.
- Span: smallest subspace containing a set.
- Sum and intersection of subspaces.
- All infinite-dimensional spaces (functions, sequences) are also vector spaces.

## Worked Examples
**Example 1 — Verify $\mathbb{R}^2$ is a vector space.** All axioms hold: addition is componentwise and commutative/associative; zero is $(0, 0)$; negatives are $(-x, -y)$; scalar multiplication is componentwise and distributive. ✓

**Example 2 — Subspace test.** $W = \{(x, y) \in \mathbb{R}^2 : x = 2 y\}$. Is it a subspace? Non-empty: $(0, 0) \in W$. Closed under addition: $(2 a, a) + (2 b, b) = (2(a + b), a + b)$, which is in $W$. Closed under scalar multiplication: $c (2 a, a) = (2 c a, c a)$, in $W$. So $W$ is a subspace (a line through the origin).

**Example 3 — Non-subspace.** $W = \{(x, y) : x \ge 0\}$. Non-empty, but $(1, 0) \in W$ and $(-1)(1, 0) = (-1, 0) \notin W$. So $W$ is not a subspace.

**Example 4 — Span.** $\text{span}\{(1, 2, 3), (4, 5, 6)\} = \{a (1, 2, 3) + b (4, 5, 6) : a, b \in \mathbb{R}\} = \{(a + 4 b, 2 a + 5 b, 3 a + 6 b)\}$. A two-dimensional subspace of $\mathbb{R}^3$.

**Example 5 — Sum and intersection.** $W_1 = \text{span}\{(1, 0, 0), (0, 1, 0)\}$ ($xy$-plane), $W_2 = \text{span}\{(0, 1, 0), (0, 0, 1)\}$ ($yz$-plane). $W_1 + W_2 = \mathbb{R}^3$ (the $y$-axis is shared). $W_1 \cap W_2 = $ span of the $y$-axis $= \{(0, y, 0)\}$.

**Example 6 — Null space.** $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$. Solve $A x = 0$: rank $2$, nullity $3 - 2 = 1$. The null space is one-dimensional, spanned by $(1, -2, 1)^T$ (verify: $A (1, -2, 1)^T = (1 - 4 + 3, 4 - 10 + 6) = (0, 0)$ ✓).

**Example 7 — Polynomials of degree $\le 3$.** $W = \{a + b x + c x^2 + d x^3 : a, b, c, d \in \mathbb{R}\}$. Subspace of $\mathbb{R}[x]$. Dimension $4$, basis $\{1, x, x^2, x^3\}$.

## Common Misconceptions
- **"All subsets of a vector space are subspaces."** No — must contain $0$ and be closed under the operations.
- **"$\mathbb{R}^2$ with componentwise multiplication is a vector space."** No — no multiplicative inverses. It is a *semiring*, not a vector space.
- **"A line not through the origin is a subspace."** No — it does not contain the zero vector (or it is not closed under scalar multiplication). Such sets are *affine subspaces*.
- **"The union of two subspaces is a subspace."** Generally not. Only if one is contained in the other. The intersection always is.

## Connections
Vector spaces are the most pervasive concept in mathematics. They are the setting for linear algebra (the next lessons), for the representation theory of groups (covered in *Abstract Algebra*), for differential equations (solutions of linear ODEs form a vector space), and for quantum mechanics (states live in Hilbert spaces).

## Quick Check
1. State the vector space axioms.
2. State the subspace test.
3. Give three examples of vector spaces.
4. What is the span of $\{(1, 0), (0, 1), (1, 1)\}$ in $\mathbb{R}^2$?
5. Is the set $\{(x, y, z) : x + y + z = 1\}$ a subspace of $\mathbb{R}^3$?

## Takeaway
- Vector space: axioms of addition and scalar multiplication.
- Subspace: subset closed under operations, containing zero.
- Span: smallest subspace containing a set.
- Sum and intersection of subspaces.
- Many infinite-dimensional examples: function spaces, sequence spaces.
