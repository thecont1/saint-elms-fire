***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: introductory-algebra
courseName: Introductory Algebra
moduleId: introductory-algebra-module-1
moduleName: Sets, Mappings, and Elementary Number Systems
lessonId: introductory-algebra-m1-l1
lessonName: Sets, Mappings and Functions
lessonNumber: 1
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 40
releaseOrder: 1
prerequisites: []
learningObjectives:
  - Define sets, subsets, unions, intersections, complements, and Cartesian products.
  - Distinguish between a mapping, an injection, a surjection, and a bijection.
  - Apply set theory and function concepts to elementary physics problems.
concepts:
  - Set
  - Subset
  - Union and intersection
  - Cartesian product
  - Mapping
  - Injective, surjective, bijective
tags:
  - mathematics
  - algebra
  - sets
  - functions
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Sets, Mappings and Functions

## Overview

Set theory is the language of modern mathematics. Every mathematical object — numbers, functions, vectors, groups, spaces — can be described in terms of sets and the mappings between them. The lesson introduces the basic concepts of set theory: sets, subsets, unions, intersections, complements, and Cartesian products. The lesson then defines mappings (functions) and the special classes: injections (one-to-one), surjections (onto), and bijections (one-to-one and onto). The lesson closes with applications to physics: the description of physical states, the set of all possible measurements, and the structure of state space. The lesson is the foundation of every subsequent algebra course.

## Learning Path

- **What you should already know**: basic arithmetic; the concept of a variable; the Cartesian coordinate system.
- **What this lesson adds**: the language of set theory (membership, subset, union, intersection, complement, Cartesian product); the classification of mappings; the set-theoretic description of physical state space.
- **What later lessons this will unlock**: the number systems in Lesson m1-l2; complex numbers in Lesson m1-l3; matrices and linear systems in Module 2; groups in Module 3.

## Core Explanation

### Sets and membership

A **set** is a collection of distinct objects, considered as a single entity. The objects in a set are its **elements** or **members**. We write $x \in S$ to say that $x$ is an element of $S$, and $x \notin S$ to say it is not.

Examples:
- $S_1 = \{1, 2, 3, 4, 5\}$ — a finite set of natural numbers.
- $S_2 = \{2, 4, 6, 8, \ldots\}$ — the set of even natural numbers (infinite).
- $S_3 = \{x : x \text{ is a prime number}\}$ — the set of primes, defined by a property.
- $S_4 = \emptyset = \{\}$ — the empty set, with no elements.

A set is determined by its elements: $\{1, 2, 3\} = \{3, 2, 1\}$. Order does not matter (in the standard definition); repetition does not matter (each element is counted once).

### Subsets

A set $A$ is a **subset** of $B$, written $A \subseteq B$, if every element of $A$ is also an element of $B$. The empty set is a subset of every set. $A$ is a **proper subset** of $B$, written $A \subset B$, if $A \subseteq B$ and $A \ne B$.

Examples: $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}$, where $\mathbb{N}$ is the natural numbers, $\mathbb{Z}$ the integers, $\mathbb{Q}$ the rationals, $\mathbb{R}$ the reals, and $\mathbb{C}$ the complex numbers. Each is a proper subset of the next.

The **power set** $\mathcal{P}(A)$ is the set of all subsets of $A$: $\mathcal{P}(A) = \{B : B \subseteq A\}$. The power set of an $n$-element set has $2^n$ elements. The power set is the fundamental operation of propositional logic: each subset corresponds to a property that holds for some elements of $A$ and fails for others.

### Set operations

The **union** $A \cup B$ is the set of elements in $A$ or in $B$ (or both). The **intersection** $A \cap B$ is the set of elements in both $A$ and $B$. The **difference** $A \setminus B$ is the set of elements in $A$ but not in $B$. The **complement** $\bar A$ (with respect to a universal set $U$) is the set of elements in $U$ but not in $A$: $\bar A = U \setminus A$.

Examples (with $U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$, $A = \{1, 3, 5, 7, 9\}$, $B = \{2, 4, 6, 8, 10\}$):
- $A \cup B = U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$.
- $A \cap B = \emptyset$ (disjoint sets).
- $A \setminus B = A = \{1, 3, 5, 7, 9\}$.
- $\bar A = B = \{2, 4, 6, 8, 10\}$.

The set operations satisfy the **De Morgan laws**: $\overline{A \cup B} = \bar A \cap \bar B$ and $\overline{A \cap B} = \bar A \cup \bar B$. These are the basis of the duality between universal and existential quantifiers in logic.

### Cartesian product

The **Cartesian product** $A \times B$ is the set of ordered pairs $(a, b)$ with $a \in A$ and $b \in B$. For example, $\mathbb{R} \times \mathbb{R} = \mathbb{R}^2$ is the plane, and $\mathbb{R}^3$ is 3D space. The Cartesian product generalises to more than two sets: $A_1 \times A_2 \times \cdots \times A_n$ is the set of $n$-tuples.

The Cartesian product is the basis of the state space in classical mechanics: the state of a point particle in 3D is $(x, y, z, p_x, p_y, p_z) \in \mathbb{R}^6$, an element of the 6D phase space. In quantum mechanics, the state is a vector in a Hilbert space, a more general structure.

### Mappings and functions

A **mapping** (or **function**) $f : A \to B$ assigns to each element of $A$ a unique element of $B$. $A$ is the **domain** of $f$, $B$ is the **codomain**, and the set of values actually taken by $f$ is the **image** (or range) $f(A) = \{f(a) : a \in A\}$.

Examples:
- $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2$. Domain $\mathbb{R}$, codomain $\mathbb{R}$, image $[0, \infty)$.
- $f : \mathbb{N} \to \mathbb{N}$, $f(n) = 2 n$. The doubling function.
- $f : \mathbb{R} \to \mathbb{C}$, $f(x) = e^{i x}$. Maps reals to the unit circle in the complex plane.

A function is a special case of a relation; the requirement is that each input has a unique output. This rules out multivalued functions in the standard definition; the square root, for instance, is not a function unless one specifies the principal branch.

### Injections, surjections, bijections

A function $f : A \to B$ is:

- **Injective** (one-to-one) if $f(a_1) = f(a_2) \Rightarrow a_1 = a_2$. Different inputs give different outputs.
- **Surjective** (onto) if every $b \in B$ is $f(a)$ for some $a \in A$. The image is the whole codomain.
- **Bijective** if it is both injective and surjective. There is a one-to-one correspondence between $A$ and $B$, and an inverse function $f^{-1} : B \to A$ exists.

Examples:
- $f(x) = x^3$ on $\mathbb{R}$: bijective (and so has an inverse, $f^{-1}(x) = x^{1/3}$).
- $f(x) = x^2$ on $\mathbb{R}$: neither injective (since $f(-x) = f(x)$) nor surjective (negative numbers are not in the image).
- $f(x) = e^x$ on $\mathbb{R}$: injective but not surjective (its image is $(0, \infty)$, not all of $\mathbb{R}$).
- $f(x) = \sin x$ on $\mathbb{R}$: neither (not injective, not surjective onto $\mathbb{R}$).

The classifications matter for the existence of inverse functions: only bijections have a well-defined inverse.

### Composition of functions

The **composition** $f \circ g : A \to C$ of $f : B \to C$ and $g : A \to B$ is the function $(f \circ g)(a) = f(g(a))$. Composition is associative: $f \circ (g \circ h) = (f \circ g) \circ h$. The identity function $\text{id}_A(a) = a$ is the identity for composition: $f \circ \text{id}_A = f$ and $\text{id}_B \circ f = f$ when $f : A \to B$.

The composition of bijections is a bijection, and the inverses compose as $(f \circ g)^{-1} = g^{-1} \circ f^{-1}$. The set of bijections from a set $A$ to itself forms a group under composition (the symmetric group, covered in Module 3).

### Indicator functions

The **indicator function** $\chi_S : X \to \{0, 1\}$ of a subset $S \subseteq X$ is $\chi_S(x) = 1$ if $x \in S$, $0$ if $x \notin S$. The indicator function encodes membership of $S$; many set operations can be expressed in terms of indicator functions (e.g. $\chi_{A \cup B} = \max(\chi_A, \chi_B)$, $\chi_{A \cap B} = \min(\chi_A, \chi_B)$, $\chi_{\bar A} = 1 - \chi_A$).

Indicator functions are used in probability (the indicator of an event), in measure theory (the indicator of a measurable set), and in machine learning (one-hot encoding of categorical data).

### Cardinality

The **cardinality** $|A|$ of a finite set $A$ is the number of elements in $A$. Two finite sets have the same cardinality iff there is a bijection between them. For infinite sets, the notion extends via the existence of bijections: the natural numbers $\mathbb{N}$ and the integers $\mathbb{Z}$ have the same cardinality (both are countably infinite, $|\aleph_0|$), and the real numbers $\mathbb{R}$ have a strictly larger cardinality (uncountable, $|\mathbb{R}|$).

The hierarchy of infinite cardinalities is a deep subject (Cantor, set theory, the continuum hypothesis); for most of the physics and mathematics curriculum, the relevant distinction is between finite, countably infinite, and uncountable sets.

### Set theory in physics

- **State space**: the set of all possible states of a system. For a single particle in 1D, the state is $(x, p) \in \mathbb{R}^2$ (classical) or a vector in $L^2(\mathbb{R})$ (quantum). The set is uncountable.
- **Observables**: functions from the state space to $\mathbb{R}$ (or to another set). Position $x(p) = x$, momentum $p(p) = p$, energy $E(p) = p^2/2m + V(x)$.
- **Symmetry groups**: the set of all transformations of the state space that leave the physics invariant. For example, the rotation group $SO(3)$ for a spherically symmetric system.
- **Statistical ensembles**: the set of all microstates consistent with a macrostate. The cardinality of this set is the multiplicity $\Omega$ of the macrostate (covered in thermal physics).

The set-theoretic language is the standard way to express these ideas. The state space is a set with structure (a smooth manifold, a Hilbert space); the observables are functions on it; the symmetries are mappings of the set to itself.

### Function spaces

The set of all functions from $A$ to $B$ is denoted $B^A$. For example, $\mathbb{R}^{\mathbb{R}}$ is the set of all real-valued functions on $\mathbb{R}$. Function spaces are themselves sets, and they can be endowed with additional structure (a vector space structure, a norm, an inner product) that turns them into the natural setting for analysis, differential equations, and quantum mechanics.

The space of square-integrable functions $L^2(\mathbb{R})$ is the state space of a single quantum-mechanical particle in 1D. The space of continuous functions $C(\mathbb{R})$ is the natural setting for the heat equation and other parabolic PDEs. The space of smooth functions $C^\infty(\mathbb{R})$ is the natural setting for distributions and generalised functions.

## Key Ideas

- A set is a collection of distinct objects; $x \in S$ denotes membership.
- Subset, union, intersection, difference, complement, and Cartesian product are the basic set operations.
- A function $f : A \to B$ assigns a unique element of $B$ to each element of $A$.
- Injective, surjective, bijective are the three special classes of functions.
- Composition: $(f \circ g)(a) = f(g(a))$.
- Set theory is the language of modern mathematics and the basis of state space, observables, and symmetry in physics.

## Worked Examples

### Example 1 — Set operations

Let $A = \{1, 2, 3, 4, 5\}$, $B = \{3, 4, 5, 6, 7\}$, $C = \{5, 6\}$ (with $U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$). Compute $A \cup B$, $A \cap B$, $A \setminus B$, $A \cap (B \cup C)$.

**Solution.**
- $A \cup B = \{1, 2, 3, 4, 5, 6, 7\}$.
- $A \cap B = \{3, 4, 5\}$.
- $A \setminus B = \{1, 2\}$.
- $B \cup C = \{3, 4, 5, 6, 7\}$. $A \cap (B \cup C) = \{3, 4, 5\}$.

### Example 2 — Injective, surjective, bijective

Classify each function:
- $f : \mathbb{R} \to \mathbb{R}$, $f(x) = 2 x + 1$.
- $g : \mathbb{N} \to \mathbb{N}$, $g(n) = n^2$.
- $h : \mathbb{R} \to \mathbb{R}$, $h(x) = x^3 - x$.

**Solution.**
- $f$: injective (linear with non-zero slope), surjective (any $y$ is $f((y-1)/2)$), so bijective. Inverse: $f^{-1}(y) = (y-1)/2$.
- $g$: injective ($n_1^2 = n_2^2$ implies $n_1 = n_2$ for non-negative integers), not surjective (3 is not a perfect square). Not bijective.
- $h$: not injective ($h(0) = 0$ and $h(1) = 0$, $h(-1) = 0$), surjective (cubic, all reals are attained). Neither.

### Example 3 — Set-theoretic state of a particle

A particle in 1D has position $x$ and momentum $p$. The state space is $\mathbb{R}^2$ (classical) or $L^2(\mathbb{R})$ (quantum). Describe the energy observable in each case.

**Solution.** Classical: $E : \mathbb{R}^2 \to \mathbb{R}$, $E(x, p) = p^2 / 2 m + V(x)$, where $V$ is the potential. Quantum: $E : L^2(\mathbb{R}) \to L^2(\mathbb{R})$, $E \psi = (-(\hbar^2 / 2m) d^2 \psi / dx^2 + V(x) \psi)$. The energy is a function of the state in each case; in the quantum case, it is a linear operator on the state space (a Hamiltonian).

## Common Misconceptions

- **"A set is an ordered collection."** No, a set is unordered (in the standard definition). If order matters, the structure is a sequence or tuple, not a set.
- **"A set can have repeated elements."** No, a set contains each element at most once. Multisets (which allow repetition) are a different structure.
- **"Every function has an inverse."** Only bijections. Injective-but-not-surjective and surjective-but-not-injective functions do not have a well-defined inverse.
- **"$|A| = |B|$ implies $A = B$."** No. The sets $\{1, 2, 3\}$ and $\{4, 5, 6\}$ have the same cardinality but are different sets.
- **"All infinite sets have the same cardinality."** No. The natural numbers are countably infinite, but the real numbers are uncountable; there is no bijection between them.

## Connections

- Set theory is the language of modern mathematics; every mathematical object can be described in terms of sets.
- Functions are the workhorses of calculus, linear algebra, and differential equations.
- The set-theoretic state space is the foundation of classical and quantum mechanics.
- Cardinality is the basis of probability (counting) and of set theory (Cantor).
- Function spaces are the natural setting for quantum mechanics, PDEs, and functional analysis.

## Quick Check

1. State the De Morgan laws.
2. What is the power set of $\{1, 2, 3\}$?
3. Classify $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^3 - 3 x$ as injective, surjective, bijective, or none of these.
4. What is the cardinality of $\mathcal{P}(\{1, 2, 3, 4, 5\})$?
5. Describe the state space of a classical particle in 3D.

## Takeaway

- A set is a collection of distinct objects; the basic operations are union, intersection, and complement.
- A function assigns a unique output to each input; the special classes are injective, surjective, bijective.
- Composition of functions is associative; bijections have inverses.
- Set theory is the language of modern mathematics; the state space, observables, and symmetries of physics are all described in set-theoretic terms.
- The cardinality of a set is its number of elements; the distinction between finite, countably infinite, and uncountable sets is the basis of set theory.
