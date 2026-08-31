***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: introductory-algebra
courseName: Introductory Algebra
moduleId: introductory-algebra-module-3
moduleName: Elementary Group Theory and Algebraic Problem Solving
lessonId: introductory-algebra-m3-l2
lessonName: Permutation Groups and Symmetries
lessonNumber: 8
moduleNumber: 3
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 40
releaseOrder: 8
prerequisites:
  - introductory-algebra-m3-l1
learningObjectives:
  - Manipulate permutations in cycle notation and compute their sign and order.
  - Distinguish even and odd permutations, and connect them to the determinant.
  - Identify the permutation group as the symmetry group of a discrete set.
concepts:
  - Cycle notation
  - Sign of a permutation
  - Even and odd permutations
  - Transposition
  - Alternating group
  - Symmetry group
tags:
  - mathematics
  - algebra
  - permutations
  - symmetric-group
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Permutation Groups and Symmetries

## Overview

Permutations are bijections of a finite set; the set of all permutations of $n$ elements forms the symmetric group $S_n$, one of the most important groups in mathematics. The lesson develops cycle notation, the calculation of order and sign, the alternating subgroup $A_n$, and the relationship between permutations and determinants. The lesson closes with applications: the symmetries of polygons and polyhedra (the dihedral and symmetry groups), the classification of crystal symmetries, and the role of permutations in quantum mechanics. The lesson is the foundation of group representation theory and a key tool for the abstract algebra course in Semester 4.

## Learning Path

- **What you should already know**: the axioms of a group and the basic examples (Lesson m3-l1); cycle notation at an intuitive level.
- **What this lesson adds**: precise cycle notation; the calculation of order and sign; the alternating group; the connection to determinants; applications in physics and chemistry.
- **What later lessons this will unlock**: algebraic problem solving in Lesson m3-l3; abstract algebra in Semester 4 (rings, fields); representation theory in advanced courses.

## Core Explanation

### Permutations and cycle notation

A **permutation** of $\{1, 2, \ldots, n\}$ is a bijection from the set to itself. There are $n!$ permutations; they form the symmetric group $S_n$ under composition.

A permutation can be written in **cycle notation** as a product of disjoint cycles. A cycle $(a_1 a_2 \cdots a_k)$ is the permutation that sends $a_1 \to a_2$, $a_2 \to a_3$, $\ldots$, $a_{k-1} \to a_k$, $a_k \to a_1$. The cycles are disjoint iff they share no elements. Every permutation can be written uniquely (up to the order of the cycles) as a product of disjoint cycles.

Examples (in $S_5$):
- $(1 2 3)$ sends $1 \to 2$, $2 \to 3$, $3 \to 1$, $4 \to 4$, $5 \to 5$.
- $(1 3)(2 5 4)$ sends $1 \to 3$, $3 \to 1$, $2 \to 5$, $5 \to 4$, $4 \to 2$.
- The identity is the empty product (no cycles).
- A **transposition** is a 2-cycle, e.g. $(1 2)$.

The cycle structure of a permutation (the set of cycle lengths) determines many of its properties: order, sign, conjugacy class.

### Order of a permutation

The **order** of a permutation is the smallest positive integer $n$ such that $\sigma^n = e$. If the cycle structure of $\sigma$ has cycles of lengths $k_1, k_2, \ldots, k_r$ (with $k_1 + k_2 + \ldots + k_r = n$), then $\text{ord}(\sigma) = \text{lcm}(k_1, k_2, \ldots, k_r)$.

Example: $(1 2 3)(4 5)$ has cycle lengths $3$ and $2$, so $\text{ord} = \text{lcm}(3, 2) = 6$.

### Sign of a permutation

The **sign** $\text{sgn}(\sigma)$ of a permutation $\sigma$ is $+1$ (even) or $-1$ (odd). A transposition $(a b)$ is odd. Every permutation can be written as a product of transpositions, and the sign of $\sigma$ is $(-1)^m$ where $m$ is the number of transpositions in any such decomposition. (The decomposition is not unique, but the parity of $m$ is.)

The sign of a cycle of length $k$ is $(-1)^{k - 1}$ (since a $k$-cycle is a product of $k - 1$ transpositions). The sign of a product of disjoint cycles is the product of the signs.

Examples:
- A $2$-cycle is odd ($-1$).
- A $3$-cycle is even ($+1$).
- A $4$-cycle is odd ($-1$).
- The identity is even ($+1$).

### The alternating group

The **alternating group** $A_n$ is the set of even permutations in $S_n$, with $|A_n| = n! / 2$ for $n \ge 2$. $A_n$ is a normal subgroup of $S_n$ (the only non-trivial proper normal subgroup for $n \ge 5$).

$A_n$ is non-abelian for $n \ge 4$. The simple groups $A_5$ (order $60$), $A_6$ (order $360$), $A_7$ (order $2520$), etc. are the smallest non-abelian simple groups. The classification of finite simple groups (CFSG) reduces the problem of classifying all finite simple groups to the alternating groups, the cyclic groups of prime order, the Lie-type groups, and the $26$ sporadic groups.

### Permutations and determinants

The sign of a permutation is the central connection between $S_n$ and the determinant. The Leibniz formula for the determinant of an $n \times n$ matrix is

$$\det(A) = \sum_{\sigma \in S_n} \text{sgn}(\sigma) \prod_{i=1}^n a_{i, \sigma(i)},$$

a sum over all permutations of $\{1, \ldots, n\}$, with each term weighted by the sign of the permutation. The Leibniz formula is what makes the determinant a polynomial in the entries of $A$ and gives the multiplicativity $\det(AB) = \det(A) \det(B)$.

The connection goes further: the determinant is the unique alternating multilinear form on an $n$-dimensional vector space, normalised so that $\det(I) = 1$. The alternating property is encoded in the sign of the permutation.

### Permutation matrices

A **permutation matrix** is a square matrix with exactly one $1$ in each row and each column, and $0$'s elsewhere. Permutation matrices are in bijection with permutations: the matrix $P_\sigma$ has a $1$ in position $(i, \sigma(i))$ and $0$ elsewhere. The product of permutation matrices is a permutation matrix: $P_\sigma P_\tau = P_{\sigma \tau}$. So the set of $n \times n$ permutation matrices forms a group isomorphic to $S_n$.

Permutation matrices are orthogonal ($P^T P = I$) and have determinant $\text{sgn}(\sigma)$. They are used in numerical linear algebra (e.g. LU decomposition with partial pivoting) and in the description of symmetric states in quantum mechanics.

### The sign representation

The map $\text{sgn} : S_n \to \{\pm 1\}$ is a group homomorphism: $\text{sgn}(\sigma \tau) = \text{sgn}(\sigma) \text{sgn}(\tau)$. The kernel is $A_n$, and the image is $\{\pm 1\} \cong \mathbb{Z}/2\mathbb{Z}$. By the first isomorphism theorem, $S_n / A_n \cong \mathbb{Z}/2\mathbb{Z}$.

The sign representation is the simplest non-trivial representation of $S_n$ and is the basis of the theory of alternating tensors and the determinant. It is also central to the theory of spinors in quantum mechanics: the change of sign of a spinor under a $2 \pi$ rotation is the sign representation of $SO(3)$'s double cover $SU(2)$.

### Conjugacy classes

Two permutations $\sigma, \tau \in S_n$ are **conjugate** if there exists $\pi \in S_n$ with $\tau = \pi \sigma \pi^{-1}$. The conjugacy classes of $S_n$ are indexed by the cycle structure: two permutations are conjugate iff they have the same cycle type.

The number of conjugacy classes equals the number of partitions of $n$. For small $n$:
- $S_1$: 1 class.
- $S_2$: 2 classes ($e$ and $(12)$).
- $S_3$: 3 classes ($e$, 3 transpositions, 2 three-cycles).
- $S_4$: 5 classes ($e$, 6 transpositions, 3 double transpositions, 8 three-cycles, 6 four-cycles).

Conjugacy classes are important in representation theory: every irreducible representation of $S_n$ is supported on a single conjugacy class.

### Permutation puzzles

The **15-puzzle** (sliding puzzle) is solved by considering the permutation of the tiles. The puzzle is solvable iff the permutation is even. The 15-puzzle is unsolvable in the configuration in which two adjacent tiles are swapped, because the swap is an odd permutation.

The **Rubik's cube** has a permutation group of $4.3 \times 10^{19}$ elements. The cube can be solved iff the permutation of the cubies and the orientation of the corners and edges are consistent; the group-theoretic analysis is the basis of optimal-solving algorithms.

### The symmetric group in physics

- **Identical particles**: in quantum mechanics, identical particles are described by symmetric (bosons) or antisymmetric (fermions) wavefunctions. The permutation group acts on the particle labels; the symmetric and antisymmetric representations are the physical states.
- **Spin-statistics theorem**: the symmetrisation postulate of quantum mechanics is the statement that physical states transform under the sign representation of $S_n$ (fermions) or its trivial extension (bosons).
- **Tensor operators**: the symmetrisation and antisymmetrisation of tensor operators under permutation of indices gives the symmetric and antisymmetric tensor representations, used in classical and quantum mechanics.
- **Parity**: the parity transformation inverts all spatial coordinates; for $n$ particles, it acts on the wavefunction as a sign representation of the permutation group, in addition to its geometric action.

The symmetric group is the foundation of the multi-particle structure of quantum mechanics.

### The dihedral and Platonic symmetry groups

The **Platonic solids** (tetrahedron, cube, octahedron, dodecahedron, icosahedron) have rotational symmetry groups that are the rotation groups of the regular solids:

- Tetrahedron: $A_4$ (alternating group on 4 elements, order 12).
- Cube / Octahedron: $S_4$ (symmetric group on 4 elements, order 24).
- Dodecahedron / Icosahedron: $A_5$ (alternating group on 5 elements, order 60).

With reflections, the full symmetry groups are larger (48 for the cube, 120 for the dodecahedron). The full symmetry group of the cube is $S_4 \times \mathbb{Z}/2\mathbb{Z}$, the group of the octahedron is the same.

### Crystallographic restrictions

The symmetries of a crystal are constrained: only certain rotations are compatible with a periodic lattice. The allowed rotations in 3D have orders $1, 2, 3, 4, 6$ (no order 5, 7, 8, etc.). The proof uses the lattice structure and gives rise to the 32 crystallographic point groups and the 230 space groups.

The same restriction applies to 2D crystals (only orders $1, 2, 3, 4, 6$ in 2D) and to quasicrystals (which can have other orders, e.g. 5-fold symmetry in icosahedral quasicrystals, and are aperiodic).

### Worked Examples

**Example 1 — Cycle structure, order, sign.**

For $\sigma = (1 3 5)(2 4)(6 7 8 9)$ in $S_9$:

**Solution.** Cycle lengths: $3, 2, 4$. Order: $\text{lcm}(3, 2, 4) = 12$. Sign: $3$-cycle is even, $2$-cycle is odd, $4$-cycle is odd, total sign $= (-1) \cdot (-1) = +1$ (even). So $\sigma$ is an even permutation of order $12$.

**Example 2 — Decomposition into transpositions.**

Decompose $(1 2 3 4)$ into transpositions.

**Solution.** $(1 2 3 4) = (1 4)(1 3)(1 2)$, a product of $3$ transpositions. Alternatively, $(1 2 3 4) = (1 2)(2 3)(3 4)$, also $3$ transpositions. The sign is $(-1)^3 = -1$ (odd). ✓ (A $4$-cycle has $k - 1 = 3$ transpositions.)

**Example 3 — The 15-puzzle.**

A 15-puzzle is in a configuration where two adjacent tiles are swapped. Is it solvable from the standard configuration?

**Solution.** The standard configuration is the identity permutation (even). A single adjacent swap is a transposition (odd). An odd permutation cannot be reached from the identity by a sequence of even permutations; the puzzle is unsolvable. ✓

## Key Ideas

- Permutations are bijections of a finite set; cycle notation is the standard representation.
- The order of a permutation is the LCM of the cycle lengths.
- The sign of a permutation is the parity of the number of transpositions.
- The alternating group $A_n$ is the kernel of the sign homomorphism.
- Permutations are the basis of the symmetric group, the alternating group, the dihedral group, and the symmetry groups of polyhedra.
- The symmetric group is the foundation of the multi-particle structure of quantum mechanics.

## Common Misconceptions

- **"Every permutation can be written as a product of disjoint transpositions."** No. Disjoint transpositions commute; a permutation with a 3-cycle cannot be written as a product of disjoint transpositions.
- **"The sign of a permutation is well-defined only if the decomposition into transpositions is unique."** The decomposition is not unique, but the parity of the number of transpositions is. The sign is well-defined.
- **"$A_n$ is abelian."** It is non-abelian for $n \ge 4$. (For $n = 3$, $A_3$ is cyclic of order $3$ and is abelian.)
- **"The symmetric group is the symmetry group of any $n$-element set."** It is the symmetry group of the labelled set, where the labels matter. The symmetry group of an unlabelled object is a subgroup of $S_n$.
- **"All rotations are symmetries of crystals."** No, only rotations of order $1, 2, 3, 4, 6$ (crystallographic restriction).

## Connections

- Permutations are the foundation of the symmetric group, a central object in algebra.
- The sign representation is the basis of the determinant, of spinors in quantum mechanics, and of the spin-statistics theorem.
- The cycle structure of a permutation determines its order, sign, and conjugacy class.
- The dihedral and Platonic symmetry groups are the foundation of molecular and crystallographic symmetries.
- The 230 space groups describe the symmetries of crystals; the 32 point groups describe the symmetries at a single site.

## Quick Check

1. Write the permutation $(1 3 5)(2 4)$ in $S_5$ as a product of transpositions.
2. What is the order of the permutation $(1 2)(3 4 5 6)(7 8)$ in $S_8$?
3. Is the permutation $(1 2 3 4 5)$ even or odd?
4. What is the order of $A_5$?
5. Which Platonic solid has $A_5$ as its rotational symmetry group?

## Takeaway

- Permutations are bijections of a finite set; cycle notation is the standard representation.
- The order of a permutation is the LCM of its cycle lengths.
- The sign of a permutation is the parity of the number of transpositions.
- The alternating group $A_n$ is the kernel of the sign homomorphism; it is the simplest non-abelian simple group for $n \ge 5$.
- The symmetric group is the foundation of the multi-particle structure of quantum mechanics.
- The symmetry groups of the Platonic solids are $A_4$, $S_4$, and $A_5$.
