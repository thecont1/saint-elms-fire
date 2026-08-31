***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: mathematics
subjectName: Mathematics
courseId: abstract-algebra
courseName: Abstract Algebra
moduleId: abstract-algebra-module-2
moduleName: Subgroups and Quotients
lessonId: abstract-algebra-m2-l3
lessonName: Normal Subgroups and Quotient Groups
lessonNumber: 6
moduleNumber: 2
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - abstract-algebra-m2-l2
learningObjectives:
  - Define normal subgroups and quotient groups.
  - Verify normality in examples.
  - Recognise the structure of $G/H$ for various $G$ and $H$.
  - State and apply the isomorphism theorems.
concepts:
  - Normal subgroup
  - Quotient group
  - First isomorphism theorem
  - Second isomorphism theorem
  - Third isomorphism theorem
  - Simple group
tags:
  - mathematics
  - algebra
  - normal-subgroups
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Normal Subgroups and Quotient Groups

## Overview
A *normal* subgroup $N$ of $G$ is one that is invariant under conjugation: $g N g^{-1} = N$ for all $g \in G$. Normal subgroups are exactly those for which the cosets form a group, the *quotient group* $G/N$. The isomorphism theorems describe how $G$, $N$, and $G/N$ are related. This lesson develops the definitions, verifies them in standard examples, and proves the three isomorphism theorems.

## Learning Path
- What you should already know: subgroups, cosets, index, group homomorphisms.
- What this lesson adds: normality, quotient groups, the isomorphism theorems.
- What it unlocks: the classification of finite groups, Galois theory, and the symmetry-breaking patterns of physics.

## Core Explanation
**Normal subgroup.** A subgroup $N \trianglelefteq G$ is *normal* if $g N g^{-1} = N$ for every $g \in G$. Equivalent characterisations:
- $g N = N g$ for all $g$ (left cosets = right cosets).
- $g n g^{-1} \in N$ for all $g \in G$, $n \in N$ (every conjugate of an element of $N$ is in $N$).

In an abelian group, every subgroup is normal.

**Examples of normal subgroups.**
- $A_n$ is normal in $S_n$ (the only proper normal subgroup of $S_n$ for $n \ge 5$).
- $Z(G)$ is always normal.
- Index-2 subgroups are always normal.
- The commutator subgroup $[G, G]$ is always normal.
- The trivial subgroup $\{e\}$ and $G$ itself are normal in every group.

**Non-examples.** In $S_3$, the subgroups $\{e, (1 2)\}$, $\{e, (1 3)\}$, $\{e, (2 3)\}$ are not normal (conjugating by $(1 2)$ takes $(1 3)$ to $(2 3)$, which is in a different subgroup).

**Quotient group construction.** If $N \trianglelefteq G$, define $G/N$ as the set of left cosets $G/N = \{g N : g \in G\}$. Define the operation by $(g_1 N)(g_2 N) = (g_1 g_2) N$. This is well-defined (independent of the choice of coset representatives) precisely because $N$ is normal.

**Group axioms for $G/N$.** The four group axioms translate directly from $G$:
- Closure: $(g_1 N)(g_2 N) = g_1 g_2 N \in G/N$.
- Associativity: $((g_1 N)(g_2 N))(g_3 N) = g_1 g_2 g_3 N = (g_1 N)((g_2 N)(g_3 N))$.
- Identity: $e N = N$.
- Inverse: $(g N)^{-1} = g^{-1} N$.

**Order of $G/N$.** $|G/N| = |G|/|N| = [G : N]$.

**Examples of quotient groups.**
- $\mathbb{Z}/n\mathbb{Z} = \mathbb{Z}_n$, cyclic of order $n$.
- $S_n / A_n \cong \mathbb{Z}_2$ (the sign map).
- $\text{GL}(n)/\text{SL}(n) \cong \mathbb{R}^*$ (the determinant map).
- $\mathbb{R}/\mathbb{Z} \cong $ unit circle (topologically).
- $\text{SO}(3)/\text{SO}(2) \cong S^2$ (the sphere of unit vectors).

**Kernels.** If $\phi: G \to H$ is a homomorphism, then $\ker \phi = \{g \in G : \phi(g) = e_H\}$ is a normal subgroup of $G$. (Conjugation invariance: $\phi(g x g^{-1}) = \phi(g) \phi(x) \phi(g)^{-1} = \phi(g) e_H \phi(g)^{-1} = e_H$.) Conversely, every normal subgroup is the kernel of some homomorphism (the projection $\pi: G \to G/N$).

**First isomorphism theorem.** If $\phi: G \to H$ is a homomorphism, then $G / \ker \phi \cong \phi(G)$. Proof: the map $g \ker \phi \mapsto \phi(g)$ is a well-defined, injective, surjective homomorphism from $G/\ker\phi$ to $\phi(G)$.

**Examples of the first isomorphism theorem.**
- $\mathbb{R}^* / \mathbb{R}^+ \cong \{1, -1\}$ (positive reals modulo all reals gives the sign).
- $\text{GL}(n) / \text{SL}(n) \cong \mathbb{R}^*$ (determinant).
- $\mathbb{Z} / 6\mathbb{Z} \cong \mathbb{Z}_6$ (trivial). More usefully, $\mathbb{Z} / n\mathbb{Z} \cong \mathbb{Z}_n$.

**Second isomorphism theorem.** If $H$ is a subgroup of $G$ and $N \trianglelefteq G$, then:
- $H N = \{h n : h \in H, n \in N\}$ is a subgroup of $G$.
- $H \cap N \trianglelefteq H$.
- $H / (H \cap N) \cong H N / N$.

**Third isomorphism theorem.** If $N \trianglelefteq G$ and $K$ is a normal subgroup of $G$ with $N \subseteq K$, then $K/N \trianglelefteq G/N$ and $(G/N)/(K/N) \cong G/K$.

**Simple groups.** A group is *simple* if it has no proper non-trivial normal subgroups. Simple groups are the building blocks of finite groups, just as primes are the building blocks of integers. The classification of finite simple groups (the *Enormous Theorem*) is a monumental achievement: they are exactly the cyclic groups $\mathbb{Z}_p$ of prime order, the alternating groups $A_n$ ($n \ge 5$), the groups of Lie type (including the classical groups), and $26$ sporadic groups.

**$A_5$ is simple.** $A_5$ has order $60$. Its proper non-trivial subgroups are the cyclic $\mathbb{Z}_2$, $\mathbb{Z}_3$, $\mathbb{Z}_5$, and some others. None of these is normal in $A_5$. The only normal subgroups are $\{e\}$ and $A_5$. So $A_5$ is simple. This is the smallest non-abelian simple group.

**Why quotient groups matter.** The slogan: "build a complicated group from simpler ones, and study it via the simpler ones". The Jordan–Hölder theorem: any finite group has a composition series $G \triangleright G_1 \triangleright G_2 \triangleright \ldots \triangleright \{e\}$ with simple quotients; the simple quotients are unique up to reordering and isomorphism. So understanding simple groups is enough to understand all finite groups.

**Examples of quotient-group computations.**
- $(\mathbb{Z}/12\mathbb{Z})/(2\mathbb{Z}/12\mathbb{Z}) \cong \mathbb{Z}/2\mathbb{Z}$ (by third isomorphism, with $G = \mathbb{Z}, K = 2\mathbb{Z} \cong 12\mathbb{Z}/2\mathbb{Z}, N = 12\mathbb{Z}$).
- $(\mathbb{Z}/12\mathbb{Z})/(3\mathbb{Z}/12\mathbb{Z}) \cong \mathbb{Z}/3\mathbb{Z}$.
- $(\mathbb{Z}/12\mathbb{Z})/(4\mathbb{Z}/12\mathbb{Z}) \cong \mathbb{Z}/4\mathbb{Z}$.

**Quotients of matrix groups.** $\text{O}(n) / \text{SO}(n) \cong \mathbb{Z}_2$ (determinant is $\pm 1$ for orthogonal matrices). $\text{SU}(n) / \text{SU}(n-1) \cong S^{2n-1}$ (the sphere, topologically). These quotients describe the "directions" the group can act in.

**Quotients and fundamental groups.** Topologically, $S^1 = \mathbb{R}/\mathbb{Z}$. The torus $T^2 = S^1 \times S^1$ has fundamental group $\mathbb{Z}^2$. The fundamental group of a quotient $G/H$ (for $G$ simply connected and $H$ closed) is $H$. This is the topological meaning of quotient groups.

**Quotients in physics.** Symmetry breaking: a system with symmetry group $G$ can have a ground state with smaller symmetry $H$. The broken-symmetry group is $G/H$, the "Goldstone bosons" are the coset directions. The Standard Model has $G = \text{SU}(3) \times \text{SU}(2) \times \text{U}(1)$, broken by the Higgs mechanism to a smaller group.

**Verifying normality.** To show $N$ is normal, show that for any generator $g$ of $G$ and any generator $n$ of $N$, $g n g^{-1} \in N$. (If $N$ is generated by a set, it suffices to check that conjugates of the generators stay in $N$.)

**Normaliser.** The normaliser $N_G(H) = \{g \in G : g H g^{-1} = H\}$ is a subgroup of $G$ (the largest subgroup of $G$ in which $H$ is normal). $H$ is normal in $G$ iff $N_G(H) = G$.

**Centraliser.** The centraliser $C_G(g) = \{h \in G : h g = g h\}$. $C_G(g)$ is a subgroup; $g$ is central iff $C_G(g) = G$.

**Conjugacy and normal subgroups.** $H \trianglelefteq G$ iff $H$ is a union of conjugacy classes of $G$. So to check normality, check that every conjugate of every element of $H$ is in $H$.

**Centre.** $Z(G)$ is the set of $g$ that are in their own conjugacy class alone. $Z(G)$ is always normal.

**Examples of normality tests.**
- $H = \{e, (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)\} \subset S_4$. Check conjugates: $g (1 2)(3 4) g^{-1}$ is a product of two disjoint transpositions. The set of all such products is exactly $H$. So $H \trianglelefteq S_4$. (This is the Klein four-group, normal in $S_4$.)
- The cyclic subgroup $\langle (1 2 3) \rangle = \{e, (1 2 3), (1 3 2)\} = A_3$ in $S_3$ is normal. (It's the only subgroup of order $3$ in $S_3$, so it must be normal — there are no others to conjugate it to.)
- The subgroup $\langle (1 2) \rangle = \{e, (1 2)\}$ in $S_3$ is not normal: $(1 3) (1 2) (1 3) = (2 3) \notin \langle (1 2) \rangle$.

## Key Ideas
- $N \trianglelefteq G$ iff $g N g^{-1} = N$ for all $g \in G$.
- $G/N$ is a group under coset multiplication when $N$ is normal.
- $|G/N| = |G|/|N|$.
- First iso: $G/\ker \phi \cong \text{im}(\phi)$.
- Simple groups are the building blocks of finite groups.

## Worked Examples
**Example 1 — Quotient $\mathbb{Z}/6\mathbb{Z}$.** $6\mathbb{Z} = \{0\}$ is normal in $\mathbb{Z}$ (trivially). $\mathbb{Z}/6\mathbb{Z} = \mathbb{Z}_6$, cyclic of order $6$.

**Example 2 — Quotient $\text{GL}(2)/\text{SL}(2)$.** The determinant map $\det: \text{GL}(2) \to \mathbb{R}^*$ is a homomorphism. The kernel is $\text{SL}(2)$. By the first isomorphism theorem, $\text{GL}(2)/\text{SL}(2) \cong \mathbb{R}^*$.

**Example 3 — Verification of normality in $A_5$.** $A_5$ is generated by 3-cycles (e.g. $(1 2 3)$). Conjugation by any element of $A_5$ (or even $S_5$) sends 3-cycles to 3-cycles. So $A_5$ has no normal subgroup generated by 3-cycles except itself. The conjugacy classes in $A_5$ are: $\{e\}$, 3-cycles (20 of them), products of two disjoint transpositions (15), and 5-cycles (24). No proper union of these is closed under multiplication — so $A_5$ is simple.

**Example 4 — Third isomorphism.** $G = S_4$, $N = V_4 = \{e, (1 2)(3 4), (1 3)(2 4), (1 4)(2 3)\} \trianglelefteq S_4$, $K = A_4 \trianglelefteq S_4$, $N \subseteq K$. $(S_4 / N) / (A_4 / N) \cong S_4 / A_4 \cong \mathbb{Z}_2$. Both sides are $\mathbb{Z}_2$. ✓

## Common Misconceptions
- **"Every subgroup is normal."** Only in abelian groups.
- **"Quotient groups are smaller than the group."** Always: $|G/N| = |G|/|N| \le |G|$.
- **"Simple = easy."** Simple groups are the building blocks; they are not always easy to study. $A_5$ is simple but its structure took decades to understand.
- **"All quotients of a group exist."** Only quotients by normal subgroups.

## Connections
Quotient groups are the foundation of:
- *Galois theory*: the fundamental theorem says subgroups of the Galois group correspond to intermediate field extensions. Quotients of the Galois group correspond to sub-extensions.
- *Jordan–Hölder theorem*: composition series and simple quotients.
- *Symmetry breaking* in physics: $G \to G/H$ is the broken-symmetry group.
- *Topology*: fundamental groups of quotient spaces.

## Quick Check
1. Define a normal subgroup.
2. When is $G/N$ a group?
3. State the first isomorphism theorem.
4. Show that $A_n$ is normal in $S_n$.
5. What does "simple group" mean? Give two examples.

## Takeaway
- $N \trianglelefteq G$ iff $g N g^{-1} = N$ for all $g$.
- $G/N$ is a group under coset multiplication.
- $|G/N| = |G|/|N|$.
- First isomorphism theorem: $G/\ker\phi \cong \text{im}(\phi)$.
- Simple groups are the building blocks of all finite groups.
