***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: number-theory
courseName: Number Theory (Math Elective I, B)
moduleId: number-theory-module-3
moduleName: Finite Fields and Applications
lessonId: number-theory-m3-l7
lessonName: Polynomial Rings and the Construction of Finite Fields
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - number-theory-m2-l6
learningObjectives:
  - Work in F_p[x] with polynomial division, gcds and irreducibility tests, mirroring the integer theory of Lesson 1.
  - Construct F_{p^n} as F_p[x]/(f) for irreducible f of degree n, and compute explicitly in F_4 and F_8.
  - Count monic irreducibles of a given degree using the Möbius-inversion formula and check the counts against explicit lists.
concepts:
  - Polynomial rings over fields
  - Irreducible polynomials
  - Quotient field construction
  - Finite fields F_{p^n}
  - Counting irreducibles
tags:
  - mathematics
  - number-theory
  - finite-fields
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Polynomial Rings and the Construction of Finite Fields

## Overview

The integers were the prototype: a Euclidean domain with unique factorisation, whose quotients by primes give the fields F_p. Polynomial rings over fields rerun the entire story one level up — F_p[x] has its own division algorithm, its own Euclidean algorithm, its own irreducibles — and its quotients deliver what ℤ could not: fields of size p^n for every n. This lesson builds F_4 and F_8 by hand from irreducible polynomials over F_2, proving along the way that the quotient by an irreducible is a field and that irreducibles of every degree exist. The session ends with the Möbius-powered formula that counts irreducible polynomials — the same inversion machinery of Lesson 4, applied to a new ring — closing the circle between the course's first and last modules.

## Learning Path

1. **F_p[x] as Euclidean domain:** division algorithm by degree, gcds, unique factorisation into irreducibles.
2. **Irreducibility tests:** root test for degrees 2 and 3; building irreducibles over F_2.
3. **Quotients by irreducibles:** why (f) maximal ⟹ F_p[x]/(f) is a field; elements as remainders of degree < n.
4. **Construct F_4 and F_8 explicitly:** tables, inverses, multiplicative orders.
5. **Counting irreducibles:** the formula (1/n)Σ_{d|n} μ(d)p^{n/d}, derived by degree-counting and inverted with Möbius.

## Core Explanation

### F_p[x] reruns the integer story

In F_p[x], degree replaces size: for f, g ≠ 0 there are unique q, r with f = qg + r and deg r < deg g. The Euclidean algorithm, Bézout's identity and unique factorisation into irreducibles (polynomials with no factorisation into lower-degree polynomials) all transfer verbatim, with degree as the descent measure. The analogy is the lesson's spine: primes ↔ irreducible polynomials; ℤ/nℤ ↔ F_p[x]/(f); the rest is transport of structure.

### Finding irreducibles over small fields

For degree 2 or 3, a polynomial is irreducible iff it has no root (any proper factor would have degree 1). Over F_2, evaluate at 0 and 1 only. The degree-2 list: x² + x + 1 has f(0) = f(1) = 1 — no roots, irreducible; x² + 1 = (x + 1)² and x² + x = x(x + 1) split. Degree 3: x³ + x + 1 and x³ + x² + 1 both survive the root test — irreducible; x³ + 1 has root 1, x³ + x² + x + 1 has root 1.

### Quotients by irreducibles are fields

For irreducible f of degree n, F_p[x]/(f) is a field. Reason: any nonzero class [g] has gcd(g, f) = 1 (nothing else is available — f has no factors), so Bézout gives ag + bf = 1, i.e. [a][g] = [1]: every nonzero element is a unit. Elements are remainder classes, uniquely represented by polynomials a₀ + a₁x + ⋯ + a_{n−1}x^{n−1}: exactly p^n of them. Write α for the class of x; then α satisfies f(α) = 0, and arithmetic is polynomial arithmetic with the reduction rule f(α) = 0.

### F_4 and F_8 by hand

**F_4 = F_2[x]/(x² + x + 1):** elements 0, 1, α, α + 1, with the rule α² = −α − 1 = α + 1 (characteristic 2). Multiplication: α(α + 1) = α² + α = (α + 1) + α = 1 — so α⁻¹ = α + 1, and the nonzero elements form a cyclic group: α¹ = α, α² = α + 1, α³ = α(α + 1) = 1. Every nonzero element is a power of α.

**F_8 = F_2[x]/(x³ + x + 1):** elements are a + bα + cα² (8 of them), with α³ = α + 1 (since α³ + α + 1 = 0, and −1 = 1). Reduction example: α⁴ = α·α³ = α(α + 1) = α² + α. Powers of α: α³ = α + 1, α⁴ = α² + α, α⁵ = α² + α + 1, α⁶ = α² + 1, α⁷ = 1 — checked step by step using α³ = α + 1, so α has order 7 and generates all seven nonzero elements. Inverses fall out: α⁻¹ = α⁶ = α² + 1.

### Counting irreducibles

Let N(n) count monic irreducibles of degree n over F_p. Degree-counting: every monic polynomial of degree m factors uniquely into irreducibles, so x^{p^m} − x (whose roots are exactly all elements of F_{p^m}, one per element) splits as the product of all monic irreducibles whose degrees divide m. Comparing degrees:

p^m = Σ_{d|m} d·N(d).

Möbius inversion (Lesson 4's transform, verbatim) gives N(m) = (1/m)Σ_{d|m} μ(d) p^{m/d}. Checks: over F_2, N(2) = (1/2)(μ(1)·4 + μ(2)·2) = (1/2)(4 − 2) = 1 ✓ (x² + x + 1 alone); N(3) = (1/3)(8 − 2) = 2 ✓ (the two cubics listed above). Existence of irreducibles of every degree follows for free — N(n) ≥ 1 — and with it, the existence of a field of every size p^n.

## Key Ideas

- F_p[x] is a Euclidean domain with degree as the descent measure; Lesson 1's integer theory transfers word for word.
- Degree 2/3 irreducibility ⟺ no roots; over F_2 that is a two-value check.
- Quotient by an irreducible is a field because Bézout supplies every inverse; elements are remainders of degree < n, so |F_p[x]/(f)| = p^n.
- F_4 and F_8: compute with a named root α and one reduction rule; the nonzero elements turn out cyclic.
- Counting irreducibles is degree-counting plus Möbius inversion — the course's Module 2 machinery doing Module 3's work.

## Worked Examples

#### Example 1: A full multiplication in F_8

Multiply (α² + α + 1)(α² + 1) in F_8. Expand: α⁴ + α³ + α² + α² + α + 1 = α⁴ + α³ + α + 1 (the α² terms cancel in characteristic 2). Reduce: (α² + α) + (α + 1) + α + 1 = α² + α. Verify via exponents: α² + α + 1 = α⁵ and α² + 1 = α⁶, so the product is α¹¹ = α⁴ = α² + α ✓ — the power table audits the direct computation.

#### Example 2: Inverting in F_4 two ways

Inverse of α + 1 in F_4. By the table: α + 1 = α², so (α + 1)⁻¹ = α⁻² = α (since α³ = 1). By Bézout: find a, b with a(x)(x + 1) + b(x)(x² + x + 1) = 1 in F_2[x] — one line of the Euclidean algorithm: x² + x + 1 = x(x + 1) + 1, so 1 = (x² + x + 1) + x(x + 1), giving inverse x, i.e. α ✓. Both routes agree; Bézout is the one that scales.

#### Example 3: Why reducible moduli fail

Take F_2[x]/(x² + 1) instead: since x² + 1 = (x + 1)², the class [x + 1] is nonzero but [x + 1]² = 0 — a nilpotent, hence not invertible, so the quotient is not a field. Reducible modulus ⟹ zero divisors; the irreducibility hypothesis is exactly what the field property rests on.

## Common Misconceptions

- **"Finite fields are just ℤ/p^nℤ."** ℤ/p^nℤ has nilpotents and zero divisors for n > 1; the field of size p^n is a quotient of F_p[x], a different object entirely.
- **"Any polynomial works as the modulus."** Only irreducibles give fields; Example 3 is the standard counterexample.
- **"α is a number."** α is a remainder class — a formal root adjoined so that f(α) = 0; all computation is polynomial arithmetic with a reduction rule.
- **"Degree 4 irreducibility is still 'no roots'."** Rootless quartics can split as a product of two quadratics; the root test only suffices in degrees 2 and 3.
- **"The count formula is combinatorics."** It is Möbius inversion on a degree-counting identity — the same theorem as Lesson 4, relabelled.

## Connections

- **Lesson 1:** everything here is the integer theory rerun with degree in place of size; Bézout is again the inverse-producing engine.
- **Lesson 2:** well-definedness of quotient arithmetic was first practised on ℤ/mℤ.
- **Lesson 4:** Möbius inversion reappears, counting irreducibles instead of inverting divisor sums of φ.
- **Next lesson:** the cyclic multiplicative group built here powers the cryptographic applications.

## Quick Check

1. State the division algorithm in F_p[x] and identify the descent measure.
2. Why does quotienting by an irreducible polynomial produce a field?
3. List the elements of F_4 and its full power cycle of α.
4. Verify α⁷ = 1 in F_8 = F_2[x]/(x³ + x + 1) step by step.
5. Derive the irreducible-counting formula and check it at p = 2, n = 2, 3.

## Takeaway

Polynomials over finite fields replay the arithmetic of the integers with degree as the measure, and their quotients by irreducibles manufacture fields of every prime-power size — explicitly, computably, and with counts governed by the same Möbius machinery from Module 2. F_4 and F_8 are now places you can calculate in; the next lesson extracts their structure and puts it to work.
