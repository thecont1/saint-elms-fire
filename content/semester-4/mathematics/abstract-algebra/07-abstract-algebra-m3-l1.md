***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: mathematics
subjectName: Mathematics
courseId: abstract-algebra
courseName: Abstract Algebra
moduleId: abstract-algebra-module-3
moduleName: Rings and Fields
lessonId: abstract-algebra-m3-l1
lessonName: Rings, Subrings and Integral Domains
lessonNumber: 7
moduleNumber: 3
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 7
prerequisites:
  - abstract-algebra-m2-l3
learningObjectives:
  - Define a ring, a commutative ring, and an integral domain.
  - Identify the standard rings: $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$, $\mathbb{Z}_n$, polynomial rings.
  - Verify the ring axioms in examples.
  - Recognise zero-divisors and units.
concepts:
  - Ring
  - Commutative ring
  - Ring with unity
  - Integral domain
  - Zero-divisor
  - Unit
tags:
  - mathematics
  - algebra
  - rings
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Rings, Subrings and Integral Domains

## Overview
A *ring* is a set with two operations — addition and multiplication — that behave like the integers. Rings are the natural setting for arithmetic: the integers $\mathbb{Z}$, the rationals $\mathbb{Q}$, the reals $\mathbb{R}$, the complexes $\mathbb{C}$, the integers mod $n$, and the polynomial rings are all rings. The major variants are commutative rings (multiplication commutes), rings with unity (multiplicative identity $1$), and integral domains (no zero-divisors). This lesson develops the definitions and identifies the most important examples.

## Learning Path
- What you should already know: group axioms, integers, polynomials.
- What this lesson adds: a second algebraic structure (rings) and its examples.
- What it unlocks: ideals and quotient rings, fields, and the foundations of algebraic geometry and number theory.

## Core Explanation
**Ring axioms.** A *ring* $R$ is a set with two operations $+$ and $\times$ such that:
1. $(R, +)$ is an abelian group (identity $0$, inverses $-r$).
2. Multiplication is associative: $(a b) c = a (b c)$.
3. Distributive laws: $a (b + c) = a b + a c$ and $(a + b) c = a c + b c$.

A ring is *commutative* if $a b = b a$ for all $a, b$. A ring *with unity* (or *with identity*) has a multiplicative identity $1$.

**Examples of rings.**
- $(\mathbb{Z}, +, \times)$: integers, commutative, with unity, no zero-divisors.
- $(\mathbb{Q}, +, \times)$, $(\mathbb{R}, +, \times)$, $(\mathbb{C}, +, \times)$: rationals, reals, complexes; fields (defined below).
- $(\mathbb{Z}_n, +, \times)$: integers mod $n$, commutative, with unity $1 \mod n$. Has zero-divisors iff $n$ is not prime.
- Polynomial ring $R[x]$: polynomials in $x$ with coefficients in $R$, commutative, with unity, no zero-divisors if $R$ has none.
- $M_n(R)$: $n \times n$ matrices over $R$, non-commutative for $n \ge 2$, with unity $I_n$.

**Non-examples.**
- $(\mathbb{N}, +, \times)$: not a ring, because $\mathbb{N}$ has no additive inverses.
- $(\mathbb{Z}_n, +)$: a group, not a ring (no multiplication).

**Subring.** A subset $S \subseteq R$ is a *subring* if it is a ring under the same operations. Equivalently: $S$ is non-empty, closed under subtraction ($a - b \in S$) and under multiplication. (For a ring with unity, subrings need not contain the unity.)

**Homomorphisms.** A *ring homomorphism* $\phi: R \to S$ preserves both operations: $\phi(a + b) = \phi(a) + \phi(b)$ and $\phi(a b) = \phi(a) \phi(b)$. The kernel $\ker \phi = \{r \in R : \phi(r) = 0\}$ is an *ideal* of $R$ (next lesson).

**Zero-divisor.** A non-zero $a \in R$ is a *zero-divisor* if there exists a non-zero $b \in R$ with $a b = 0$ (or $b a = 0$). In $\mathbb{Z}_6$, $2$ is a zero-divisor ($2 \cdot 3 = 6 \equiv 0 \pmod 6$). In $\mathbb{Z}$ or $\mathbb{Q}$, there are no zero-divisors.

**Unit.** A non-zero $a \in R$ is a *unit* if there exists $a^{-1} \in R$ with $a a^{-1} = 1$. The set of units forms a group $R^*$ under multiplication. In $\mathbb{Z}$, the units are $\pm 1$. In $\mathbb{Z}_n$, the units are the elements coprime to $n$.

**Integral domain.** A commutative ring with unity and no zero-divisors. Examples: $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$, any field, $\mathbb{Z}[x]$ (polynomials with integer coefficients). Not an integral domain: $\mathbb{Z}_n$ for $n$ composite, $M_n(R)$ for $n \ge 2$.

**Cancellation in integral domains.** If $a b = a c$ and $a \ne 0$, then $b = c$ (since $a (b - c) = 0$ implies $b - c = 0$). This is a useful property of integral domains that fails in general rings.

**The characteristic of a ring.** The smallest positive $n$ (if it exists) such that $n \cdot 1 = \underbrace{1 + \cdots + 1}_{n} = 0$. If no such $n$ exists, the characteristic is $0$. Examples: $\mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$ have characteristic $0$. $\mathbb{Z}_n$ has characteristic $n$. A field has either characteristic $0$ (containing $\mathbb{Q}$) or characteristic $p$ (containing $\mathbb{F}_p$).

**Fields.** A *field* is a commutative ring with unity in which every non-zero element is a unit (every non-zero element has a multiplicative inverse). Equivalently: a field is a commutative ring with unity and no zero-divisors, where every non-zero element is invertible. Examples: $\mathbb{Q}, \mathbb{R}, \mathbb{C}, \mathbb{Z}_p$ for $p$ prime, $\mathbb{F}_{p^n}$ (finite fields of order $p^n$).

**Why $\mathbb{Z}_n$ is a field only for $n$ prime.** If $n$ is composite, $n = a b$ with $1 < a, b < n$. Then $a, b \ne 0$ in $\mathbb{Z}_n$ but $a b = n = 0$. So $a$ and $b$ are zero-divisors; $a$ is not a unit (because $a$ cannot have a multiplicative inverse — $a b = 0$ but $b \ne 0$, so $a$ is not invertible). If $n$ is prime, every non-zero element is a unit.

**Polynomial rings.** $R[x] = \{a_0 + a_1 x + a_2 x^2 + \cdots + a_n x^n : a_i \in R\}$. Addition is componentwise. Multiplication is the convolution: $(a_i) * (b_j) = c_k$ where $c_k = \sum_{i + j = k} a_i b_j$. The degree of a polynomial is the highest $k$ with $a_k \ne 0$.

**Division algorithm.** For polynomials $f, g$ with $g \ne 0$, there exist unique $q, r$ with $f = q g + r$ and $\deg r < \deg g$. Works over any field; over a general ring, more delicate.

**Ideals (preview).** An *ideal* $I$ of a ring $R$ is a subgroup of $(R, +)$ such that $r i \in I$ for all $r \in R, i \in I$. The kernel of a ring homomorphism is an ideal. Quotient rings $R/I$ are constructed from ideals. The next lesson develops this.

**Prime and maximal ideals.** A *prime ideal* $P$ is one where $a b \in P$ implies $a \in P$ or $b \in P$. A *maximal ideal* $M$ is one where the only ideals containing $M$ are $M$ and $R$ itself. $R/P$ is an integral domain iff $P$ is prime. $R/M$ is a field iff $M$ is maximal.

**Examples of prime/maximal ideals.**
- $(p)$ in $\mathbb{Z}$ is both prime and maximal (for $p$ prime).
- $(0)$ in $\mathbb{Z}$ is prime but not maximal.
- $(x)$ in $\mathbb{Z}[x]$ is prime but not maximal.
- $(2, x) = \{2 a + x b : a, b \in \mathbb{Z}[x]\}$ in $\mathbb{Z}[x]$ is maximal (the quotient is $\mathbb{F}_2$).

**Field of fractions.** Any integral domain $R$ has a field of fractions, the smallest field containing $R$. For $R = \mathbb{Z}$, this is $\mathbb{Q}$. For $R = \mathbb{Z}[x]$, this is $\mathbb{Q}(x)$, the rational functions.

**Chinese remainder theorem.** If $I, J$ are comaximal ideals ($I + J = R$), then $R/(I \cap J) \cong R/I \times R/J$. For example, $\mathbb{Z}/15\mathbb{Z} \cong \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/5\mathbb{Z}$.

**Ring of integers of a number field.** For an algebraic number field $K$, the *ring of integers* $\mathcal{O}_K$ is the integral closure of $\mathbb{Z}$ in $K$. This is the basic object of algebraic number theory. For $K = \mathbb{Q}(\sqrt{-5})$, $\mathcal{O}_K = \mathbb{Z}[\sqrt{-5}]$, and the factorisation $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$ shows that unique factorisation fails.

**Rings in physics.** Operator rings (in quantum mechanics: bounded operators on a Hilbert space form a ring under addition and composition). Group rings (formal combinations of group elements with integer or real coefficients). Function rings (continuous functions on a topological space, with pointwise addition and multiplication).

**Polynomials and physics.** The polynomial ring $R[x]$ underlies classical mechanics (Lagrangian and Hamiltonian are functions on configuration space), quantum mechanics (wavefunctions as polynomials in some approximation), and the theory of special functions (Hermite, Legendre, Bessel polynomials).

**Matrix rings.** $M_n(R)$ is non-commutative for $n \ge 2$. The centre is the scalar matrices $c I$. The matrix ring is the prototype of a non-commutative ring and is the foundation of matrix mechanics in *Quantum Mechanics* and the representation theory of groups.

**Boolean rings.** A ring in which $a^2 = a$ for all $a$. Examples: $\mathbb{Z}_2$ and the power set of any set (with symmetric difference and intersection). Used in logic and computer science.

## Key Ideas
- A ring has two operations: abelian group under addition, monoid under multiplication, distributive.
- Commutative ring: $a b = b a$.
- Ring with unity: multiplicative identity $1$.
- Integral domain: commutative with unity, no zero-divisors.
- Field: every non-zero element is a unit.

## Worked Examples
**Example 1 — Units of $\mathbb{Z}_n$.** $\mathbb{Z}_{12}$: units are $\{1, 5, 7, 11\}$ (coprime to $12$). $\mathbb{Z}_{15}$: units are $\{1, 2, 4, 7, 8, 11, 13, 14\}$ (coprime to $15$). The product of two units is a unit.

**Example 2 — $\mathbb{Z}_6$ is not an integral domain.** $2 \cdot 3 = 6 \equiv 0 \pmod 6$, with $2, 3$ both non-zero. So $\mathbb{Z}_6$ has zero-divisors and is not an integral domain.

**Example 3 — Polynomial multiplication.** $(x^2 + 1)(x^3 - 2x + 1) = x^5 - 2 x^3 + x^2 + x^3 - 2 x + 1 = x^5 - x^3 + x^2 - 2 x + 1$.

**Example 4 — Characteristic of $\mathbb{Z}_p$.** In $\mathbb{Z}_p$, $p \cdot 1 = 0$ (because $p \equiv 0 \pmod p$). No smaller positive $n$ has $n \cdot 1 = 0$ (because $n < p$ implies $n \not\equiv 0$). So $\mathbb{Z}_p$ has characteristic $p$.

## Common Misconceptions
- **"Every ring has $1$."** Not all definitions require it; "rng" is sometimes used for a ring without unity.
- **"$\mathbb{Z}_n$ is always a field."** Only for $n$ prime.
- **"Cancellation always works in a ring."** Only in integral domains (or for units).
- **"A subring must contain $1$."** It depends on the definition. In some books, subrings contain the unity; in others, not.

## Connections
Rings are the workhorse of algebraic number theory (rings of integers), algebraic geometry (coordinate rings of varieties), and commutative algebra (the foundations). The polynomial ring $R[x]$ is the prototype of a ring extension and the basis of the algebraic theory of fields. Matrix rings $M_n(R)$ are the foundation of representation theory and quantum mechanics.

## Quick Check
1. State the ring axioms.
2. Is $\mathbb{Z}_6$ an integral domain?
3. What are the units of $\mathbb{Z}_{10}$?
4. What is the characteristic of $\mathbb{Z}_7$?
5. Give an example of a non-commutative ring.

## Takeaway
- A ring is an abelian group under addition, monoid under multiplication, distributive.
- Commutative, with unity, no zero-divisors: integral domain.
- Field: every non-zero element is a unit.
- $\mathbb{Z}_n$ is a field iff $n$ is prime.
- Polynomial rings: $R[x]$, with degrees and the division algorithm.
