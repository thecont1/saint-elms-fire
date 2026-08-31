***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: number-theory
courseName: Number Theory (Math Elective I, B)
moduleId: number-theory-module-1
moduleName: Divisibility and Congruences
lessonId: number-theory-m1-l3
lessonName: Fermat, Euler, Wilson and the Group of Units
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - number-theory-m1-l2
learningObjectives:
  - Prove Fermat's little theorem and Euler's theorem as statements about the group of units modulo n.
  - Use Wilson's theorem and its converse as a primality criterion, and explain why it is not a practical test.
  - Compute large powers modulo m via order, and identify primitive roots modulo small primes.
concepts:
  - Fermat's little theorem
  - Euler's theorem and φ
  - Wilson's theorem
  - Order of a unit
  - Primitive roots
tags:
  - mathematics
  - number-theory
  - modular-arithmetic
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Fermat, Euler, Wilson and the Group of Units

## Overview

The invertible residue classes modulo n form a group under multiplication — the units (ℤ/nℤ)× — and the three classical theorems of this lesson are group theory wearing number-theoretic clothes. Fermat's little theorem and Euler's theorem say that every unit raised to the size of the group gives the identity; Wilson's theorem characterises primes through the product of all units. Once stated in this language, the theorems stop being tricks: they are Lagrange's theorem applied to explicit finite groups, and the computational payoff — reducing enormous powers to small ones by tracking orders — follows immediately. The lesson closes with primitive roots, the elements whose powers sweep the whole group, whose existence modulo primes is the structural fact the next module will keep using.

## Learning Path

1. **The unit group:** (ℤ/nℤ)× has order φ(n); compute φ on prime powers and via coprimality.
2. **Euler's theorem:** a^φ(n) ≡ 1 (mod n) for units — Lagrange's theorem in this group.
3. **Fermat's little theorem:** the prime-modulus specialisation, two forms.
4. **Wilson's theorem:** (p − 1)! ≡ −1 (mod p), with converse; why it certifies but does not scale.
5. **Orders and primitive roots:** ord(a) divides φ(n); primitive roots mod 7; the cyclicity of (ℤ/pℤ)×.

## Core Explanation

### The unit group and Euler's totient

By Lesson 2's criterion, the units of ℤ/nℤ are exactly the classes coprime to n, and their count is Euler's totient φ(n). On prime powers: φ(p^k) = p^k − p^{k−1} (subtract the multiples of p). For coprime inputs φ is multiplicative — φ(ab) = φ(a)φ(b) when gcd(a, b) = 1 — a fact the Chinese remainder theorem proves structurally (Lesson 4); using it now as a computational fact, φ(12) = φ(4)φ(3) = 2·2 = 4, with units {1, 5, 7, 11}.

The units form a group under multiplication: closed (a product of invertibles is invertible), associative, identity [1], inverses by Bézout. Its order is φ(n). That single observation generates the main theorems.

### Euler and Fermat

Euler's theorem: if gcd(a, n) = 1 then a^φ(n) ≡ 1 (mod n). Proof as group theory: multiplication by [a] permutes the φ(n) units; multiplying all elements in the two listings of the group gives ∏u ≡ a^φ(n)∏u (mod n), and cancelling the unit product leaves the result. (Equivalently, Lagrange's theorem: the order of [a] divides the group order.)

Fermat's little theorem is the prime case: for prime p and p ∤ a, a^{p−1} ≡ 1 (mod p) — since φ(p) = p − 1 — and in the uniform form a^p ≡ a (mod p) for every a (both sides 0 when p | a). The usual caution applies: the hypothesis p ∤ a is essential for the first form, and the theorem gives no converse — composites can satisfy it for some bases, a trap revisited in the capstone.

### Wilson's theorem

For p prime, (p − 1)! ≡ −1 (mod p). Clean proof: in the product 1·2⋯(p − 1), pair each unit with its inverse; the only self-inverse classes satisfy x² ≡ 1, i.e. (x − 1)(x + 1) ≡ 0, and primality forces x ≡ ±1. Everything else cancels in pairs, leaving 1 · (p − 1) ≡ −1. Check on p = 7: 6! = 720 = 102·7 + 6 ≡ −1 (mod 7) ✓.

The converse holds too: if (n − 1)! ≡ −1 (mod n) then n is prime — for composite n > 4, a proper factor of n appears in the product (or appears twice), forcing (n − 1)! ≡ 0 (mod n), never −1. So Wilson is a genuine primality criterion. It is useless as a test: computing (n − 1)! mod n costs O(n) multiplications where better tests cost O(log n) or less — theoretical characterisation and practical algorithm are different artefacts.

### Orders and primitive roots

The order ord_n(a) of a unit is the least positive e with a^e ≡ 1 (mod n); it divides φ(n) (Lagrange again), and a^k ≡ 1 iff ord_n(a) | k. Computing powers reduces accordingly: a^k mod n depends only on k mod ord_n(a).

A primitive root mod p is a unit of order p − 1 — its powers exhaust all p − 1 nonzero classes. Modulo 7: the powers of 3 run 3, 2, 6, 4, 5, 1 — all six nonzero classes, so 3 is a primitive root; so is 5 (powers 5, 4, 6, 2, 3, 1), and these are the only two, since a cyclic group of order 6 has exactly φ(6) = 2 generators. The structural fact — used freely from here on — is that (ℤ/pℤ)× is cyclic for every prime p: primitive roots always exist modulo primes, though not modulo all n (e.g. no primitive root mod 8: every unit squares to 1).

## Key Ideas

- (ℤ/nℤ)× is a finite group of order φ(n); Euler, Fermat and Wilson are its basic counting facts.
- Euler's theorem reduces exponents modulo φ(n) for units; Fermat is its prime-modulus form with φ(p) = p − 1.
- Wilson's theorem is an if-and-only-if primality criterion — theoretically exact, computationally hopeless.
- Orders divide φ(n) and control power computations; primitive roots are generators, existing modulo every prime, counted by φ(p − 1).
- Fermat's theorem has no converse: composites can pass it for individual bases.

## Worked Examples

#### Example 1: A large power, reduced

Last digit of 7¹⁰⁰ — i.e. 7¹⁰⁰ mod 10. Since gcd(7, 10) = 1, Euler applies with φ(10) = 4: 7⁴ ≡ 1 (mod 10) (7⁴ = 2401), so 7¹⁰⁰ = (7⁴)²⁵ ≡ 1. The last digit is 1. Same device, different modulus: 2¹⁰⁰ mod 7. Fermat gives 2⁶ ≡ 1, and 100 = 6·16 + 4, so 2¹⁰⁰ ≡ 2⁴ = 16 ≡ 2 (mod 7).

#### Example 2: Reading off orders modulo 7

The units mod 7 with their orders: 1 ↦ 1; 2: 2, 4, 1 ↦ order 3; 3 ↦ order 6 (computed above); 4 = 2² ↦ order 3; 5 ↦ order 6; 6 ≡ −1 ↦ order 2. Orders divide φ(7) = 6 as guaranteed: the observed values {1, 2, 3, 6} are precisely the divisors. Note the generator count matches: two elements of order 6 = φ(6).

#### Example 3: Wilson on a borderline case

Is 9 prime? Wilson side: 8! = 40320; 40320 mod 9: digit sum 9 ⟹ 9 | 40320 ⟹ 8! ≡ 0 ≢ −1 (mod 9), so 9 is composite — correctly detected, and predictably: 3 appears twice in 8!, forcing the product to 0 mod 9, the composite-case behaviour the converse proof describes.

## Common Misconceptions

- **"a^{p−1} ≡ 1 proves p is prime."** It proves nothing about p; composite pseudoprimes pass the test for chosen bases. Primality needs more (Lesson 9).
- **"Wilson's theorem is a primality test."** It is a characterisation; the factorial cost makes it exponentially slower than the tests actually used.
- **"Euler's theorem applies to any a."** It needs gcd(a, n) = 1; applying a^{φ(n)} ≡ 1 to a non-unit is the classic reduction error.
- **"Every modulus has primitive roots."** Primes do; general n need not — mod 8 all units square to 1, so no element generates.
- **"Reducing exponents mod n works."** Exponents reduce modulo the order (dividing φ(n)), never modulo n itself.

## Connections

- **Lesson 2:** units and inverses by Bézout supply the group operation's well-definedness and cancellation.
- **Abstract algebra:** Lagrange's theorem is doing the real work; (ℤ/nℤ)× is the standing concrete group.
- **Next lesson:** φ's multiplicativity gets its CRT proof, and Σ_{d|n} φ(d) = n ties φ to divisor sums.
- **Lesson 8:** exponent reduction and hard inverses are exactly what RSA and Diffie–Hellman trade on.

## Quick Check

1. Prove Euler's theorem using the permutation argument on the unit group.
2. State Fermat's little theorem in both forms and say precisely where the hypothesis enters.
3. Why is Wilson's theorem a primality criterion, and why is it not a test?
4. What does ord_n(a) divide, and how does it reduce power computations?
5. How many primitive roots does a prime p have, and why?

## Takeaway

The units modulo n are a finite group, and once you see that, Fermat, Euler and Wilson are counting arguments you can reprove on demand. Orders control powers; primitive roots generate; and the honest boundary of Fermat's theorem — no converse — is precisely the gap the rest of the course exploits.
