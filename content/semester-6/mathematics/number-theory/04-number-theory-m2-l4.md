***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: number-theory
courseName: Number Theory (Math Elective I, B)
moduleId: number-theory-module-2
moduleName: Arithmetic Functions and the Distribution of Primes
lessonId: number-theory-m2-l4
lessonName: Multiplicative Functions and Möbius Inversion
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - number-theory-m1-l3
learningObjectives:
  - Compute the standard arithmetic functions φ, σ, τ, μ from prime factorisations, using their multiplicativity.
  - Prove the key identities Σ_{d|n} φ(d) = n and Σ_{d|n} μ(d) = [n = 1], and use them.
  - Apply Möbius inversion in both directions and recognise divisor sums as the structure it inverts.
concepts:
  - Arithmetic functions
  - Multiplicativity
  - Divisor sums
  - Möbius function
  - Möbius inversion
tags:
  - mathematics
  - number-theory
  - arithmetic-functions
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Multiplicative Functions and Möbius Inversion

## Overview

An arithmetic function is any function on the positive integers, and the ones that matter here — the totient φ, the divisor-sum σ, the divisor-count τ, and the Möbius function μ — share a single structural property: they factor over coprime inputs. That multiplicativity turns evaluation into a lookup on prime powers and turns identities into checks on prime powers. The centrepiece is Möbius inversion: the exact statement that passing from f to its divisor-sum F(n) = Σ_{d|n} f(d) is reversible, with μ supplying the inverse transform. This is the first genuinely structural tool of the course — it proves φ's closed form in one line, reappears in the prime-counting identities of the next lesson, and is the template for every "sum over divisors" argument you will meet.

## Learning Path

1. **The cast:** definitions of φ, σ, τ, μ; first values by hand.
2. **Multiplicativity:** definition, why it reduces evaluation to prime powers, formulas for each function there.
3. **Two divisor-sum identities:** Σ_{d|n} φ(d) = n and Σ_{d|n} μ(d) = [n = 1], each proved directly.
4. **Möbius inversion:** statement, proof from the μ-identity, both directions.
5. **Inversion at work:** φ's formula from the identity Σ_{d|n} φ(d) = n; perfect numbers as σ's showcase.

## Core Explanation

### Definitions and first values

For n ≥ 1: φ(n) counts units mod n (Lesson 3); σ(n) = Σ_{d|n} d; τ(n) = Σ_{d|n} 1; and the Möbius function is μ(1) = 1, μ(n) = 0 if a square divides n, and μ(n) = (−1)^k if n is a product of k distinct primes. Sample: μ(12) = 0 (4 | 12), μ(30) = (−1)³ = −1, σ(12) = 1 + 2 + 3 + 4 + 6 + 12 = 28, τ(12) = 6.

### Multiplicativity

Call f multiplicative when gcd(a, b) = 1 ⟹ f(ab) = f(a)f(b) (and f not identically zero). φ, σ, τ and μ are all multiplicative — for φ, Lesson 2's isomorphism ℤ/abℤ ≅ ℤ/aℤ × ℤ/bℤ restricts to a bijection on units, so φ(ab) = φ(a)φ(b); σ and τ because divisors of ab split uniquely as d₁d₂ with d₁ | a, d₂ | b; μ by inspection of prime factors. The payoff: evaluate on prime powers, multiply across the factorisation.

On prime powers: φ(p^k) = p^k − p^{k−1}; τ(p^k) = k + 1; σ(p^k) = 1 + p + ⋯ + p^k = (p^{k+1} − 1)/(p − 1); μ(p^k) = −1 for k = 1 and 0 beyond. So σ(12) = σ(4)σ(3) = 7 · 4 = 28 ✓ and τ(12) = τ(4)τ(3) = 3·2 = 6 ✓, from the factorisation alone.

### Two divisor-sum identities

**Σ_{d|n} φ(d) = n.** Proof by partition: classify integers 1 ≤ m ≤ n by d = n/gcd(m, n); for each divisor d of n there are exactly φ(d) such m. The φ-values over divisors therefore count n objects. Check n = 12: φ over divisors 1, 2, 3, 4, 6, 12 gives 1 + 1 + 2 + 2 + 2 + 4 = 12 ✓.

**Σ_{d|n} μ(d) = [n = 1]** (1 if n = 1, else 0). For n = p₁^{a₁}⋯p_r^{a_r}, multiplicativity reduces it to prime powers: Σ_{d|p^a} μ(d) = μ(1) + μ(p) = 1 − 1 = 0 for a ≥ 1; and the product of zeros is zero. Check n = 12: μ(1) + μ(2) + μ(3) + μ(4) + μ(6) + μ(12) = 1 − 1 − 1 + 0 + 1 + 0 = 0 ✓.

### Möbius inversion

If F(n) = Σ_{d|n} f(d), then f(n) = Σ_{d|n} μ(d) F(n/d); and conversely the second identity implies the first. Proof: substitute and swap summation —

Σ_{d|n} μ(d) F(n/d) = Σ_{d|n} μ(d) Σ_{e|(n/d)} f(e) = Σ_{e|n} f(e) Σ_{d|(n/e)} μ(d) = f(n),

because the inner sum is [n/e = 1] by the μ-identity, killing every term but e = n. The transform "sum over divisors" is thus exactly invertible, with μ as its inverse kernel.

### Inversion at work

Apply inversion to Σ_{d|n} φ(d) = n (read as F(n) = n, f = φ): φ(n) = Σ_{d|n} μ(d)·(n/d). For n = 12: 12·μ(1) + 6·μ(2) + 4·μ(3) + 3·μ(4) + 2·μ(6) + 1·μ(12) = 12 − 6 − 4 + 0 + 2 + 0 = 4 ✓ — φ's closed form from the divisor identity, no counting.

Showcase for σ: perfect numbers, σ(n) = 2n. Euclid's construction: if 2^p − 1 is prime then 2^{p−1}(2^p − 1) is perfect — multiplicativity gives σ = (2^p − 1)·2^p = 2n. Instances: p = 2 gives 6; p = 3 gives 28; p = 5 gives 16 · 31 = 496, with σ(496) = σ(16)σ(31) = 31 · 32 = 992 = 2·496 ✓. Euler proved the converse for even perfect numbers; odd perfect numbers remain an open problem — a standing reminder that clean structure can outrun proof.

## Key Ideas

- Multiplicativity collapses evaluation to prime powers; the factorisation is the input, the prime-power formulas the lookup table.
- Σ_{d|n} φ(d) = n is a counting identity (partition by gcd); Σ_{d|n} μ(d) = [n = 1] is the inversion kernel.
- Möbius inversion: divisor summation is exactly reversible, and the proof is one summation swap away.
- Inverting Σ φ(d) = n yields φ's closed form — identities and closed forms are the same fact in two directions.
- σ ties arithmetic functions to open problems (odd perfect numbers) through perfect numbers.

## Worked Examples

#### Example 1: Full evaluation from a factorisation

Compute φ(360), σ(360), τ(360): 360 = 2³·3²·5. φ(2³) = 8 − 4 = 4, φ(3²) = 9 − 3 = 6, φ(5) = 4 ⟹ φ(360) = 4·6·4 = 96. τ = 4·3·2 = 24. σ = (15)(13)(6) = 1170. Each comes from prime-power formulas times multiplicativity — no divisor lists needed.

#### Example 2: Inverting a divisor count

Suppose F(n) = Σ_{d|n} f(d) is known to be F(n) = τ(n). Then f(n) = Σ_{d|n} μ(d) τ(n/d). On a prime power: f(p^a) = μ(1)τ(p^a) + μ(p)τ(p^{a−1}) = (a + 1) − a = 1, so f ≡ 1 — consistent, since τ is by definition the divisor-sum of the constant 1. The inversion round-trip is its own verification here.

#### Example 3: Detecting non-multiplicativity

The function f(n) = n + 1 is not multiplicative: f(2·3) = 7 but f(2)f(3) = 3·4 = 12. The failure test is always a coprime pair; one counterexample suffices, and multiplicativity claims must be proved, never extrapolated from primes.

## Common Misconceptions

- **"Multiplicative means f(ab) = f(a)f(b) always."** Only for coprime a, b — the condition is part of the definition; σ(4·2) ≠ σ(4)σ(2).
- **"μ(n) is a sign."** It is 0 whenever a square divides n; that vanishing, not the sign, is what drives the inversion identities.
- **"Σ φ(d) = n is a formula for φ."** It is an identity for the divisor-sum of φ; φ itself comes from inverting it.
- **"Inversion is a trick for φ."** It is a general transform on arithmetic functions; any divisor-sum relation inverts the same way.
- **"Perfect numbers are solved."** Even ones are characterised; the existence of odd perfect numbers is open.

## Connections

- **Lesson 3:** φ's group-theoretic definition now acquires its divisor-sum identity and closed form.
- **Abstract algebra:** multiplicativity of φ, used computationally there, gets its structural CRT justification in the next module.
- **Next lesson:** the prime-counting functions are related by exactly the divisor-sum/inversion pattern, at the level of sums over primes.
- **Lesson 7:** μ reappears implicitly when counting irreducible polynomials over finite fields.

## Quick Check

1. Define the four functions φ, σ, τ, μ, and compute each at n = 12.
2. Why does multiplicativity reduce evaluation to prime powers?
3. Prove Σ_{d|n} μ(d) = [n = 1] for prime powers, and say why that suffices.
4. State Möbius inversion and outline the summation-swap proof.
5. Derive φ(n) = Σ_{d|n} μ(d)(n/d) and verify it at n = 12.

## Takeaway

Four functions, one structural property, one inversion: multiplicativity makes arithmetic functions computable from factorisations, and Möbius inversion makes divisor-sum identities reversible. The pair is the working algebra of the next two lessons and a tool you will carry well beyond this course.
