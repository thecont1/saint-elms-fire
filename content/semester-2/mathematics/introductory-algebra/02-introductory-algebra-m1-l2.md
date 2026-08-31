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
lessonId: introductory-algebra-m1-l2
lessonName: Natural Numbers, Integers, Rationals and Reals
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 40
releaseOrder: 2
prerequisites:
  - introductory-algebra-m1-l1
learningObjectives:
  - Describe the natural numbers, integers, rationals, and reals as nested sets with closure under different operations.
  - Apply the divisibility and congruence properties of integers.
  - Distinguish rational from irrational numbers; provide examples of each.
concepts:
  - Natural numbers
  - Integers
  - Rationals
  - Reals
  - Divisibility
  - Modular arithmetic
tags:
  - mathematics
  - algebra
  - number-systems
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Natural Numbers, Integers, Rationals and Reals

## Overview

The number systems are the foundation of arithmetic and the natural entry point to algebra. The lesson reviews the natural numbers, the integers, the rationals, and the reals as nested sets, each closed under certain operations and admitting certain manipulations. The lesson develops divisibility, primes, the Euclidean algorithm, and modular arithmetic — the foundations of number theory and of much of abstract algebra. The lesson closes with the construction of the reals (via Dedekind cuts or Cauchy sequences) and the distinction between rational and irrational numbers. The lesson prepares for complex numbers in Lesson m1-l3, matrices in Module 2, and groups in Module 3.

## Learning Path

- **What you should already know**: the natural numbers and basic arithmetic; the concept of a set (Lesson m1-l1).
- **What this lesson adds**: the nested hierarchy of number systems; divisibility, primes, the Euclidean algorithm, modular arithmetic; the construction of the rationals and the reals; the distinction between rational and irrational.
- **What later lessons this will unlock**: complex numbers in Lesson m1-l3; matrices and linear systems in Module 2; groups in Module 3; the integers and rationals as the natural state spaces for combinatorial problems.

## Core Explanation

### The natural numbers

The **natural numbers** $\mathbb{N} = \{0, 1, 2, 3, \ldots\}$ (some authors start at $1$) are the non-negative integers. The natural numbers are closed under addition and multiplication: the sum and product of two natural numbers is a natural number. Subtraction and division of natural numbers are not always defined: $1 - 2 = -1 \notin \mathbb{N}$, and $1 / 2 \notin \mathbb{N}$. To close under subtraction, we need the integers.

The natural numbers are well-ordered: every non-empty subset of $\mathbb{N}$ has a least element. Well-ordering is the basis of **mathematical induction**: a property that holds for $0$ and that, when it holds for $n$, also holds for $n + 1$, holds for all natural numbers.

The natural numbers are also **Peano axioms**: a formalisation that gives the natural numbers their characteristic structure. The axioms define $0$, a successor function $S(n) = n + 1$, and the rules of induction. The construction is the foundation of arithmetic in modern logic.

### The integers

The **integers** $\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}$ are the natural numbers extended with their negatives. The integers are closed under addition, subtraction, and multiplication. Division is not always defined: $1 / 2 \notin \mathbb{Z}$. To close under division, we need the rationals.

The integers are the natural setting for **modular arithmetic** (covered below) and for the number theory of divisibility. The integers are also the natural domain for the index of an array, the step of a loop in a computer program, and the year of a calendar.

### The rationals

The **rationals** $\mathbb{Q} = \{p / q : p, q \in \mathbb{Z}, q \ne 0\}$ are the ratios of integers. The rationals are closed under addition, subtraction, multiplication, and division (by a non-zero number). The rationals are the smallest field containing the integers.

The rationals are dense in themselves: between any two rationals, there is another rational. (For example, the average of $p / q$ and $p' / q'$ is rational.) But the rationals are not complete: there are sequences of rationals that "want" to converge but do not (e.g. $\pi$ approximated by decimals). The completion of the rationals gives the reals.

### The reals

The **reals** $\mathbb{R}$ are the completion of the rationals. The construction is via **Dedekind cuts** (a real is a partition of $\mathbb{Q}$ into two non-empty sets $L$ and $R$ with every element of $L$ less than every element of $R$) or via **Cauchy sequences** (a real is an equivalence class of Cauchy sequences of rationals). The two constructions give the same set; the reals are a complete ordered field.

The reals are closed under the same operations as the rationals, plus limits: every convergent sequence of reals has a real limit. The completeness makes the reals the natural setting for calculus, real analysis, and most of physics.

The reals contain the rationals as a dense subset: between any two reals, there is a rational. The reals also contain the irrationals (numbers like $\sqrt{2}$, $\pi$, $e$ that are not rational). The irrationals are themselves dense in the reals.

### Divisibility

For integers $a, b$, we say $a$ **divides** $b$, written $a \mid b$, if $b = a k$ for some integer $k$. Equivalently, $a \mid b$ iff the remainder of $b$ divided by $a$ is zero.

Examples: $2 \mid 6$ (since $6 = 2 \cdot 3$); $3 \mid 15$; $5 \mid 25$; $7 \nmid 25$ (since $25 = 3 \cdot 7 + 4$). The notation $a \nmid b$ means "$a$ does not divide $b$".

Properties of divisibility:
- $a \mid b$ and $a \mid c$ implies $a \mid (b + c)$ and $a \mid (b c)$.
- $a \mid b$ implies $a \mid (k b)$ for any integer $k$.
- $a \mid b$ and $b \mid c$ implies $a \mid c$.

### Primes

A **prime** is an integer $p > 1$ whose only positive divisors are $1$ and $p$. The first primes are $2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \ldots$. The **fundamental theorem of arithmetic** states that every integer $n > 1$ can be written uniquely (up to order) as a product of primes. The uniqueness makes the prime factorisation the natural "fingerprint" of an integer.

The primes are infinite: Euclid's proof considers $p_1 p_2 \cdots p_n + 1$, which is not divisible by any of the primes $p_1, \ldots, p_n$, and hence has a prime factor not in the list. The infinitude of primes is the foundation of the structure of the integers.

The distribution of primes is described by the **prime number theorem**: the number of primes less than $x$ is asymptotically $x / \ln x$. The Riemann hypothesis is a deep refinement, asserting that the zeros of the Riemann zeta function $\zeta(s) = \sum_n n^{-s}$ all have real part $1/2$.

### The Euclidean algorithm

The **Euclidean algorithm** computes the greatest common divisor (gcd) of two integers. It is based on the observation that $\gcd(a, b) = \gcd(b, a \mod b)$.

**Algorithm**: to compute $\gcd(a, b)$ with $a > b > 0$:
1. If $b = 0$, return $a$.
2. Otherwise, return $\gcd(b, a \mod b)$.

The algorithm terminates because the remainders strictly decrease. Example: $\gcd(48, 18)$: $48 = 2 \cdot 18 + 12$, $\gcd(18, 12)$: $18 = 1 \cdot 12 + 6$, $\gcd(12, 6)$: $12 = 2 \cdot 6 + 0$. So $\gcd(48, 18) = 6$.

The Euclidean algorithm has applications in cryptography (RSA), in continued fractions, and in finding the modular inverse of a number (which is needed for the RSA decryption).

### Modular arithmetic

Two integers $a$ and $b$ are **congruent modulo $n$**, written $a \equiv b \pmod{n}$, if $n \mid (a - b)$. Equivalently, $a$ and $b$ have the same remainder when divided by $n$. The equivalence classes are the residue classes modulo $n$:

$$\mathbb{Z}/n\mathbb{Z} = \{0, 1, 2, \ldots, n - 1\}.$$

The set $\mathbb{Z}/n\mathbb{Z}$ is closed under addition and multiplication (mod $n$), giving the **ring of integers modulo $n$**. When $n$ is prime, $\mathbb{Z}/n\mathbb{Z}$ is a field: every non-zero element has a multiplicative inverse.

Modular arithmetic is the basis of cryptography (RSA, elliptic-curve cryptography), of error-correcting codes, and of the calendar (modulo 7 for days of the week, modulo 12 for months). Modular arithmetic also appears in the proof of the impossibility of solving the quintic in radicals and in the classification of finite simple groups.

### Irrational numbers

A real number is **rational** if it can be written as $p / q$ for integers $p, q$. A real number is **irrational** if it is not rational.

Examples of irrationals: $\sqrt{2}$ (a proof of irrationality by contradiction: if $\sqrt{2} = p / q$ with $\gcd(p, q) = 1$, then $2 q^2 = p^2$, so $p$ is even, so $p = 2 k$, so $q^2 = 2 k^2$, so $q$ is even, contradicting $\gcd(p, q) = 1$); $\sqrt{3}, \sqrt{5}, \sqrt[3]{2}, \pi, e$, and most other "natural" constants.

The irrationals are dense in the reals (between any two reals, there is an irrational). The cardinality of the irrationals equals the cardinality of the reals (both are uncountable); the rationals are countably infinite.

### Continued fractions

A **continued fraction** is a representation of a real number as

$$x = a_0 + \cfrac{1}{a_1 + \cfrac{1}{a_2 + \cfrac{1}{a_3 + \cdots}}},$$

where the $a_i$ are integers (positive after the first). The continued fraction representation is finite for rationals and infinite for irrationals. The convergents of the continued fraction give the best rational approximations to the number.

Continued fractions are connected to the Euclidean algorithm: the continued fraction expansion of a rational $p / q$ is related to the sequence of quotients in the Euclidean algorithm applied to $p$ and $q$. Continued fractions have applications in number theory (e.g. Pell's equation), in physics (the period of a continued fraction is related to the topology of the energy surface in a Hamiltonian system), and in algorithms for finding rational approximations to irrationals.

### The cardinality of the reals

The set of reals is uncountable: there is no bijection between $\mathbb{R}$ and $\mathbb{N}$. The proof is by Cantor's diagonal argument: suppose $r_1, r_2, r_3, \ldots$ is an enumeration of the reals; construct a new real whose $n$-th digit differs from the $n$-th digit of $r_n$; this real is not in the list, a contradiction.

The uncountability of the reals is the basis of the existence of transcendental numbers (numbers that are not roots of any polynomial with rational coefficients). The cardinality of the reals is $2^{\aleph_0}$, strictly larger than $\aleph_0$ (the cardinality of the natural numbers).

### Number systems in physics

- The natural numbers appear as quantum numbers (principal, angular momentum, magnetic, spin).
- The integers appear in the discretisation of space (lattice models in solid-state physics, integer charge in elementary particles).
- The rationals appear as ratios of physical quantities (mass ratios, energy ratios).
- The reals are the natural setting for classical mechanics (position, momentum, energy) and for the mathematical description of physical fields.
- Modular arithmetic appears in crystallography (the classification of lattices by symmetry groups), in number-theoretic aspects of quantum field theory, and in the discrete symmetries of particle physics.

### Axioms of the reals

The reals are characterised by a small set of axioms (a complete ordered field):

1. **Field axioms**: closure under addition, subtraction, multiplication, division (by non-zero), with the usual identities.
2. **Order axioms**: $\le$ is reflexive, antisymmetric, transitive, total, and compatible with addition and multiplication.
3. **Completeness axiom**: every non-empty subset of $\mathbb{R}$ that is bounded above has a least upper bound.

The completeness axiom distinguishes the reals from the rationals: the rationals satisfy the field and order axioms but not the completeness axiom. Every ordered field is either the rationals or the reals or something larger (e.g. the surreal numbers).

## Key Ideas

- Number systems: $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$, each closed under different operations.
- Divisibility: $a \mid b$ iff $b = a k$ for some integer $k$.
- Prime factorisation is unique (fundamental theorem of arithmetic).
- The Euclidean algorithm computes the gcd.
- Modular arithmetic: $a \equiv b \pmod n$ iff $n \mid (a - b)$.
- Irrationals exist; they are dense in the reals.
- The reals are the smallest complete ordered field.
- The reals are uncountable (Cantor's diagonal argument).

## Worked Examples

### Example 1 — Divisibility and primes

Determine whether $252$ is divisible by $12$.

**Solution.** $252 = 12 \cdot 21$. So $12 \mid 252$ ✓. The prime factorisation of $252 = 2^2 \cdot 3^2 \cdot 7$, and $12 = 2^2 \cdot 3$, so $12$ divides $252$ (the factor $7$ is "extra").

### Example 2 — Euclidean algorithm

Compute $\gcd(126, 35)$ using the Euclidean algorithm.

**Solution.** $126 = 3 \cdot 35 + 21$. $\gcd(35, 21)$: $35 = 1 \cdot 21 + 14$. $\gcd(21, 14)$: $21 = 1 \cdot 14 + 7$. $\gcd(14, 7)$: $14 = 2 \cdot 7 + 0$. So $\gcd(126, 35) = 7$.

### Example 3 — Modular arithmetic

Compute $7^{100} \mod 13$.

**Solution.** By Fermat's little theorem, $7^{12} \equiv 1 \pmod{13}$ (since $\gcd(7, 13) = 1$). $7^{100} = 7^{96} \cdot 7^4 = (7^{12})^8 \cdot 7^4 \equiv 1^8 \cdot 7^4 = 7^4 \pmod{13}$. $7^2 = 49 \equiv 49 - 3 \cdot 13 = 49 - 39 = 10 \pmod{13}$. $7^4 = (7^2)^2 \equiv 10^2 = 100 \equiv 100 - 7 \cdot 13 = 100 - 91 = 9 \pmod{13}$. So $7^{100} \equiv 9 \pmod{13}$.

## Common Misconceptions

- **"The natural numbers start at 1."** In some conventions; in others, they start at 0. Both conventions are common; the choice rarely matters but should be stated.
- **"All real numbers are rational."** No. Most reals are irrational (the irrationals are uncountable, the rationals are countably infinite).
- **"$\sqrt{2}$ is rational."** It is not. The classical proof by contradiction shows that no integers $p, q$ can satisfy $\sqrt{2} = p / q$.
- **"Modular arithmetic is just arithmetic with remainders."** It is arithmetic on the ring $\mathbb{Z}/n\mathbb{Z}$, with its own rules (e.g. division is not always defined).
- **"The Euclidean algorithm is for computing gcds only."** It has many other applications: continued fractions, modular inverses, lattice basis reduction, the RSA cryptosystem.

## Connections

- The number systems are the foundation of all of arithmetic and algebra.
- The Euclidean algorithm is the gateway to advanced number theory (continued fractions, Pell's equation, modular forms).
- Modular arithmetic is the basis of public-key cryptography (RSA, elliptic-curve cryptography).
- The irrationals and the cardinality of the reals are the foundation of set theory and analysis.
- The construction of the reals via Dedekind cuts is the first explicit example of an abstract mathematical construction in the modern sense.
- The reals are the natural setting for calculus, real analysis, and the mathematical description of physical systems.

## Quick Check

1. State the closure properties of $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ under addition, subtraction, multiplication, division.
2. Compute $\gcd(84, 18)$.
3. Compute $5^{50} \mod 7$ using Fermat's little theorem.
4. State the fundamental theorem of arithmetic.
5. Prove that $\sqrt{3}$ is irrational.

## Takeaway

- The number systems are nested: $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$.
- Each is closed under different operations; the differences drive much of algebra and number theory.
- The fundamental theorem of arithmetic makes the prime factorisation the "fingerprint" of an integer.
- The Euclidean algorithm computes the gcd and underlies the RSA cryptosystem.
- Modular arithmetic is the language of congruence and the basis of public-key cryptography.
- The reals are the natural setting for calculus, real analysis, and physics.
- The irrationals are dense in the reals; the reals are uncountable.
