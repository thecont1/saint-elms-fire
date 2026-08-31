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
lessonId: introductory-algebra-m3-l1
lessonName: Groups — Axioms and Examples
lessonNumber: 7
moduleNumber: 3
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 45
releaseOrder: 7
prerequisites:
  - introductory-algebra-m2-l3
learningObjectives:
  - State the axioms of a group and verify them for small examples.
  - Identify the cyclic, dihedral, symmetric, and matrix groups.
  - Recognise groups in physics: rotations, Lorentz transformations, internal symmetries of particles.
concepts:
  - Group axioms
  - Abelian group
  - Cyclic group
  - Symmetric group
  - Group homomorphism
  - Subgroup
tags:
  - mathematics
  - algebra
  - group-theory
  - abstract-algebra
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Groups — Axioms and Examples

## Overview

A **group** is a set with a binary operation that combines any two elements to give a third, satisfying four axioms. The concept abstracts the common structure of symmetry operations, number systems, and matrix multiplication. The lesson introduces the axioms, the basic examples (cyclic, symmetric, dihedral, matrix groups), the notion of subgroup, and group homomorphisms. The lesson closes with the appearance of groups in physics: the rotation group $SO(3)$ for spherical symmetry, the Lorentz group for special relativity, the internal symmetry groups of elementary particles, and the crystallographic point groups. The lesson is the gateway to Abstract Algebra (Semester 4) and to the representation theory that underlies particle physics.

## Learning Path

- **What you should already know**: sets, mappings, and functions (Introductory Algebra Lesson m1-l1); matrices and matrix multiplication (Lesson m2-l1).
- **What this lesson adds**: the axioms of a group; the canonical examples (cyclic, symmetric, dihedral, matrix groups); the notions of subgroup and homomorphism; the appearance of groups in physics.
- **What later lessons this will unlock**: permutation groups in Lesson m3-l2; algebraic problem solving in Lesson m3-l3; Abstract Algebra in Semester 4 (rings, fields, group actions); representation theory in advanced courses.

## Core Explanation

### The group axioms

A **group** $(G, \cdot)$ is a set $G$ together with a binary operation $\cdot : G \times G \to G$ satisfying:

1. **Closure**: $a \cdot b \in G$ for all $a, b \in G$.
2. **Associativity**: $(a \cdot b) \cdot c = a \cdot (b \cdot c)$ for all $a, b, c \in G$.
3. **Identity**: there exists $e \in G$ with $e \cdot a = a \cdot e = a$ for all $a \in G$.
4. **Inverses**: for each $a \in G$, there exists $a^{-1} \in G$ with $a \cdot a^{-1} = a^{-1} \cdot a = e$.

A group is **abelian** (or commutative) if $a \cdot b = b \cdot a$ for all $a, b \in G$; otherwise it is **non-abelian**.

The axioms are minimal: any set with an operation satisfying them is a group. Most familiar number systems are abelian groups under addition (with identity $0$ and inverse $-a$). The non-zero rationals, reals, and complex numbers are abelian groups under multiplication. Many symmetry groups are non-abelian.

### Subgroups

A **subgroup** $H$ of $G$ is a subset of $G$ that is itself a group under the same operation. Equivalently, $H$ is non-empty, closed under the group operation, and closed under taking inverses. A subset that is closed under the operation and inverses is automatically a subgroup.

Examples:
- The even integers $2 \mathbb{Z}$ are a subgroup of $\mathbb{Z}$.
- The rotation group $SO(2)$ is a subgroup of the Euclidean group $SE(2)$ (rotations and translations of the plane).
- The special linear group $SL(n, \mathbb{R})$ (matrices with determinant $1$) is a subgroup of $GL(n, \mathbb{R})$ (invertible matrices).

### Cyclic groups

The **cyclic group of order $n$**, denoted $\mathbb{Z}/n\mathbb{Z}$ or $C_n$, is the set $\{0, 1, 2, \ldots, n - 1\}$ with addition modulo $n$. Every element is a power of the generator $1$: $\{k \cdot 1 \mod n : k \in \mathbb{Z}\}$. Cyclic groups are abelian.

Examples:
- $\mathbb{Z}/2\mathbb{Z} = \{0, 1\}$ with mod-2 addition. Isomorphic to the multiplicative group $\{1, -1\}$.
- $\mathbb{Z}/12\mathbb{Z}$: the hours on a clock.
- $\mathbb{Z}/n\mathbb{Z}$ is the additive group of the integers modulo $n$.

### The symmetric group

The **symmetric group** $S_n$ is the set of all permutations of $n$ elements, with the operation of composition. $|S_n| = n!$. $S_n$ is non-abelian for $n \ge 3$ (different permutations do not generally commute).

A permutation is often written in cycle notation: $(1 2 3)$ is the permutation that sends $1 \to 2$, $2 \to 3$, $3 \to 1$. The sign of a permutation (even or odd) is determined by the number of transpositions (2-cycles) needed to express it.

Examples:
- $S_2$ has $2$ elements: the identity and the transposition $(12)$. Abelian.
- $S_3$ has $6$ elements. Non-abelian: $(12)(13) = (132) \ne (13)(12) = (123)$.
- $S_n$ is the automorphism group of any $n$-element set.

### The dihedral group

The **dihedral group** $D_n$ is the symmetry group of a regular $n$-gon: $n$ rotations and $n$ reflections, total $2 n$ elements. $D_n$ is non-abelian for $n \ge 3$.

Conventions: $D_n$ has order $2 n$ (sometimes $n$ in older texts). $D_3 \cong S_3$ (the dihedral group of the equilateral triangle is the symmetric group on three elements). $D_4$ is the symmetry group of the square; $D_6$ is the symmetry group of the hexagon.

### Matrix groups

Several important groups are defined as matrix groups:

- $GL(n, F)$: the general linear group, the set of $n \times n$ invertible matrices over the field $F$ (e.g. $\mathbb{R}$ or $\mathbb{C}$), with matrix multiplication. $|GL(n, F)|$ is infinite.
- $SL(n, F)$: the special linear group, the matrices with determinant $1$. A subgroup of $GL(n, F)$.
- $O(n)$: the orthogonal group, the matrices with $A^T A = I$. A subgroup of $GL(n, \mathbb{R})$.
- $SO(n)$: the special orthogonal group, the orthogonal matrices with determinant $1$. A subgroup of $O(n)$.
- $U(n)$: the unitary group, the matrices with $A^\dagger A = I$. A subgroup of $GL(n, \mathbb{C})$.
- $SU(n)$: the special unitary group, the unitary matrices with determinant $1$. A subgroup of $U(n)$.
- $GL(n, F) / SL(n, F) \cong F^\times$ (the multiplicative group of the field).
- $O(n) / SO(n) \cong \mathbb{Z}/2\mathbb{Z}$ (the parity).
- $U(n) / SU(n) \cong U(1)$ (the phase).

These groups are the symmetry groups of physical systems: $SO(3)$ for rotations in 3D, $SU(3)$ for the colour symmetry of quarks, $U(1)$ for electromagnetism.

### Order of an element

The **order** of an element $a \in G$ is the smallest positive integer $n$ such that $a^n = e$ (if such an integer exists). If no such integer exists, the element has infinite order.

Examples: in $\mathbb{Z}/6\mathbb{Z}$, the order of $2$ is $3$ (since $2 \cdot 3 = 6 \equiv 0$). In $S_3$, the order of $(123)$ is $3$. In $\mathbb{Z}$, the element $1$ has infinite order.

The order of an element divides the order of the group (Lagrange's theorem): if $G$ is finite and $a \in G$, then $\text{ord}(a)$ divides $|G|$.

### Homomorphisms and isomorphisms

A **group homomorphism** $\phi : G \to H$ is a map that preserves the group operation: $\phi(a \cdot b) = \phi(a) \cdot \phi(b)$. The **kernel** $\ker \phi = \phi^{-1}(e_H)$ is a subgroup of $G$; the **image** $\text{im}\, \phi$ is a subgroup of $H$.

A bijective homomorphism is an **isomorphism**: $G \cong H$. Isomorphic groups have the same abstract structure, even if they look different. The study of group theory is the study of groups up to isomorphism.

Examples:
- The map $\phi : \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$ defined by $\phi(k) = k \mod n$ is a homomorphism with kernel $n \mathbb{Z}$.
- The map $\det : GL(n, F) \to F^\times$ is a homomorphism with kernel $SL(n, F)$. By the first isomorphism theorem, $GL(n, F) / SL(n, F) \cong F^\times$.

### The dihedral group as a semidirect product

The dihedral group $D_n$ can be written as a **semidirect product** $D_n \cong \mathbb{Z}/n\mathbb{Z} \rtimes \mathbb{Z}/2\mathbb{Z}$, where $\mathbb{Z}/2\mathbb{Z}$ acts on $\mathbb{Z}/n\mathbb{Z}$ by inversion ($k \to -k$). The semidirect product is a generalisation of the direct product that allows non-trivial actions of one group on another.

Semidirect products are the basis of many groups in physics: the Poincaré group (translations and Lorentz transformations), the Euclidean group (translations and rotations), and the crystallographic space groups.

### Lagrange's theorem

**Lagrange's theorem**: if $H$ is a subgroup of a finite group $G$, then $|H|$ divides $|G|$. The **index** $[G : H] = |G| / |H|$ is the number of cosets of $H$ in $G$.

Lagrange's theorem is the foundation of finite group theory. It implies that a group of prime order has no proper subgroups; the only subgroups are the trivial group and the whole group.

### Cyclic subgroups

For any element $a \in G$, the set $\{a^n : n \in \mathbb{Z}\} = \{e, a, a^2, a^3, \ldots, a^{\text{ord}(a) - 1}\}$ is a cyclic subgroup of $G$ generated by $a$. The order of $a$ is the size of the subgroup.

Every cyclic group is abelian; the converse is false ($S_3$ is a non-cyclic abelian group; wait, $S_3$ is non-abelian — for non-cyclic abelian, consider $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$).

### Direct products

The **direct product** $G \times H$ is the Cartesian product of the underlying sets, with the operation $(g_1, h_1) \cdot (g_2, h_2) = (g_1 g_2, h_1 h_2)$. The direct product of abelian groups is abelian. The direct product of cyclic groups of coprime order is cyclic: $\mathbb{Z}/m\mathbb{Z} \times \mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}/mn\mathbb{Z}$ when $\gcd(m, n) = 1$.

Examples: $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$ is the Klein four-group, the smallest non-cyclic group. $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \cong \mathbb{Z}/6\mathbb{Z}$. $S_3$ is not a direct product (it has no normal subgroup of order $2$).

### Groups in physics

- **Symmetries of space**: the Euclidean group (translations and rotations of 3D space) is a 6-parameter Lie group; the Poincaré group (adds Lorentz boosts) is a 10-parameter Lie group.
- **Symmetries of particles**: the Standard Model of particle physics has the gauge group $SU(3) \times SU(2) \times U(1)$, where $SU(3)$ is the colour symmetry of the strong interaction, $SU(2) \times U(1)$ is the electroweak symmetry.
- **Crystallographic point groups**: 32 point groups describe the symmetries of crystals; 230 space groups include translations.
- **Molecular symmetries**: the symmetry group of a molecule (e.g. $C_{2v}$ for water, $T_d$ for methane, $O_h$ for SF$_6$) determines the selection rules for spectroscopy and the degeneracies of the energy levels.
- **Time-reversal and parity**: discrete symmetries in quantum mechanics are described by group actions on Hilbert space.

The group concept is the language of symmetry in physics.

### Lie groups

A **Lie group** is a group that is also a smooth manifold, with the group operations being smooth. The matrix groups $GL(n)$, $SL(n)$, $O(n)$, $SO(n)$, $U(n)$, $SU(n)$ are Lie groups. The Euclidean group, the Poincaré group, and the Standard Model gauge group are Lie groups.

The classification of Lie groups is a major achievement of 20th-century mathematics (Killing, Cartan). The simple Lie groups are classified into four infinite families ($A_n = SU(n+1)$, $B_n = SO(2n+1)$, $C_n = Sp(2n)$, $D_n = SO(2n)$) and five exceptional groups ($G_2$, $F_4$, $E_6$, $E_7$, $E_8$). The classification is the foundation of the Standard Model gauge group $SU(3) \times SU(2) \times U(1)$, which uses the Lie groups $A_2$, $A_1$, and $A_0 = U(1)$.

### Worked Examples

**Example 1 — Verifying a group.**

Verify that $(\mathbb{Z}, +)$ is a group.

**Solution.** Closure: $a + b \in \mathbb{Z}$ for $a, b \in \mathbb{Z}$. Associativity: standard. Identity: $0$. Inverses: $-a$. So $(\mathbb{Z}, +)$ is an abelian group. ✓

**Example 2 — A matrix group.**

Show that $SL(2, \mathbb{R}) = \{A \in M_2(\mathbb{R}) : \det A = 1\}$ is a group.

**Solution.** Closure: if $\det A = \det B = 1$, then $\det(A B) = \det A \det B = 1$. Associativity: matrix multiplication. Identity: $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, $\det I = 1$. Inverses: if $\det A = 1$, then $A^{-1}$ exists with $\det A^{-1} = 1$. So $SL(2, \mathbb{R})$ is a group. ✓ (It is also a Lie group.)

**Example 3 — The dihedral group $D_3$.**

$D_3$ is the symmetry group of the equilateral triangle. List its elements and verify that it is the same as $S_3$.

**Solution.** $D_3$ has $6$ elements: the identity $e$, two non-trivial rotations $r, r^2$ (by $120°$ and $240°$), and three reflections $s_1, s_2, s_3$ across the three axes. The action on the three vertices gives a homomorphism to $S_3$. The kernel is trivial (no non-identity element fixes all three vertices), so by the first isomorphism theorem, $D_3 \cong S_3$. ✓

## Key Ideas

- A group is a set with a binary operation satisfying closure, associativity, identity, and inverses.
- The cyclic, symmetric, dihedral, and matrix groups are the canonical examples.
- A subgroup $H$ of $G$ satisfies $|H|$ divides $|G|$ (Lagrange's theorem).
- A homomorphism preserves the group operation; an isomorphism is a bijective homomorphism.
- Matrix groups $GL(n)$, $SL(n)$, $O(n)$, $SO(n)$, $U(n)$, $SU(n)$ are central to physics.
- Lie groups are smooth groups; the Standard Model gauge group is $SU(3) \times SU(2) \times U(1)$.

## Common Misconceptions

- **"Every group is abelian."** No. $S_3$ and $SO(3)$ are non-abelian.
- **"A subgroup must be a proper subset."** No, the group itself is a subgroup of itself.
- **"A group must be finite."** No, $\mathbb{Z}$ and $\mathbb{R}$ are infinite abelian groups.
- **"A group must be a set of numbers."** No, $S_n$ is a set of permutations, and the matrix groups are sets of matrices.
- **"The inverse of an element is the reciprocal."** Only for multiplicative groups. In additive groups, the inverse is the negative.

## Connections

- Group theory is the language of symmetry in mathematics and physics.
- The matrix groups are the symmetry groups of physical systems: rotations, Lorentz transformations, gauge transformations.
- The classification of finite simple groups is one of the great achievements of 20th-century mathematics; the classification of Lie groups is the foundation of the Standard Model.
- Group actions on sets are the foundation of representation theory, which underlies particle physics.
- Group homomorphisms are the basis of symmetry breaking and the Higgs mechanism.

## Quick Check

1. State the four group axioms.
2. What is the order of the element $(1234)$ in $S_4$?
3. Show that $\mathbb{Z}/4\mathbb{Z}$ is a cyclic group.
4. Is $D_4$ abelian?
5. What is the kernel of the determinant map $\det : GL(n, \mathbb{R}) \to \mathbb{R}^\times$?

## Takeaway

- A group is a set with a binary operation satisfying the four axioms.
- The cyclic, symmetric, dihedral, and matrix groups are the canonical examples.
- Lagrange's theorem: the order of a subgroup divides the order of the group.
- Homomorphisms preserve the structure; isomorphisms identify groups with the same structure.
- Group theory is the language of symmetry in physics: rotations, Lorentz transformations, internal symmetries of particles.
- Lie groups are smooth groups; the Standard Model gauge group is $SU(3) \times SU(2) \times U(1)$.
