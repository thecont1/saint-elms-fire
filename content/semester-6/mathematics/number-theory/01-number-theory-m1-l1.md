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
lessonId: number-theory-m1-l1
lessonName: The Integers — Divisibility, the Euclidean Algorithm and Unique Factorisation
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - abstract-algebra
learningObjectives:
  - Apply the division algorithm and the Euclidean algorithm to compute gcds, and express them as Bézout combinations by back-substitution.
  - Prove the fundamental theorem of arithmetic from Euclid's lemma, separating existence from uniqueness.
  - Use the language of divisibility (associate, coprime, prime vs irreducible) precisely in the integers.
concepts:
  - Divisibility
  - Euclidean algorithm
  - Bézout identity
  - Prime and irreducible
  - Unique factorisation
tags:
  - mathematics
  - number-theory
  - divisibility
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# The Integers — Divisibility, the Euclidean Algorithm and Unique Factorisation

## Overview

Number theory begins with the least sophisticated object in mathematics — the integers — and immediately finds structure deep enough to sustain the rest of the course. Two facts carry everything that follows: the Euclidean algorithm, which computes gcds and certifies coprimality in a handful of steps, and unique factorisation, which makes every integer a product of primes in exactly one way. This lesson builds both from scratch, keeping the proofs honest: the division algorithm as the ground floor, Euclid's lemma as the hinge of uniqueness, and Bézout's identity as the tool that turns "gcd" from a definition into something you can compute and deploy. Every later topic — congruences, arithmetic functions, finite fields — rests on these two facts being proved, not just believed.

## Learning Path

1. **Divisibility and the division algorithm:** notation a | b, quotient and remainder, well-ordering as the engine of proof.
2. **The Euclidean algorithm:** repeated division; why the last nonzero remainder is the gcd.
3. **Bézout's identity:** back-substitution; the gcd as the smallest positive linear combination.
4. **Primes and Euclid's lemma:** p | ab ⟹ p | a or p | b — proved via Bézout, not assumed.
5. **The fundamental theorem of arithmetic:** existence by strong induction, uniqueness from Euclid's lemma.

## Core Explanation

### The division algorithm and its consequences

For integers a ≥ 0 and b > 0 there exist unique q, r with a = bq + r and 0 ≤ r < b. Uniqueness is quick (two representations force b | (r₁ − r₂) with |r₁ − r₂| < b, so r₁ = r₂); existence comes from well-ordering — take r = a − bq where q is the largest integer with bq ≤ a. Everything about the integers flows from this: the remainder is always strictly smaller than the divisor, which is what makes descent arguments terminate.

We write a | b ("a divides b") when b = ac for some integer c. The elementary properties (transitivity, a | b and a | c ⟹ a | (bx + cy) for all x, y) follow directly from the definition and are used without ceremony from here on. Note the asymmetry of the notation: a | b says b is the multiple.

### The Euclidean algorithm

To find gcd(a, b), divide repeatedly and carry the remainder down:

a = bq₁ + r₁, b = r₁q₂ + r₂, r₁ = r₂q₃ + r₃, …

Each remainder is strictly smaller than the previous, so the process ends with some r_n followed by remainder 0. The key invariant: gcd(a, b) = gcd(b, r₁) = gcd(r₁, r₂) = … — because any common divisor of a and b divides r₁ = a − bq₁, and conversely any common divisor of b and r₁ divides a = bq₁ + r₁. The last nonzero remainder r_n therefore equals gcd(a, b): it divides its predecessor all the way up, and is itself a common divisor.

Worked in full: gcd(1001, 385). 1001 = 2·385 + 231; 385 = 1·231 + 154; 231 = 1·154 + 77; 154 = 2·77 + 0. The gcd is 77, and indeed 1001 = 77·13 and 385 = 77·5. The number of steps is modest in practice — worst case inputs are consecutive Fibonacci numbers, where the algorithm runs about log_φ steps, still fast.

### Bézout's identity

Back-substitute through the Euclidean algorithm to write the gcd as an integer combination: from the lines above, 77 = 231 − 154 = 231 − (385 − 231) = 2·231 − 385 = 2(1001 − 2·385) − 385 = 2·1001 − 5·385. In general:

gcd(a, b) = ax + by for some integers x, y.

Two reformulations matter. First, the set of all combinations {ax + by} is precisely the set of multiples of gcd(a, b) — the gcd is the smallest positive combination. Second, a and b are coprime iff 1 = ax + by for some x, y — a certificate of coprimality you will use constantly, starting with the next lemma.

### Primes and Euclid's lemma

Call p > 1 prime when its only positive divisors are 1 and p. The pivotal fact — Euclid's lemma — is: if p is prime and p | ab, then p | a or p | b. Proof: if p ∤ a then gcd(p, a) = 1, so 1 = px + ay; multiply by b: b = pbx + ab(y), and p divides both terms on the right, so p | b. Notice the logic: the lemma rests on Bézout, not on factorisation — this order of dependence is what makes the uniqueness proof below non-circular.

In the integers, "prime" (p | ab ⟹ p | a or p | b) and "irreducible" (p = ab ⟹ one factor is ±1) coincide, but the equivalence uses the special structure of ℤ; in other rings they separate, which is why the distinction is worth keeping in mind.

### The fundamental theorem of arithmetic

Every integer n > 1 factors into primes, uniquely up to order. Existence: strong induction — n is prime (done) or n = ab with 1 < a, b < n, and each factor splits by induction. Uniqueness: suppose p₁⋯p_r = q₁⋯q_s. By Euclid's lemma p₁ divides some q_j; both are prime, so p₁ = q_j; cancel and continue by induction. The whole argument leans on Euclid's lemma; without it, unique factorisation can fail (and does, in general rings).

## Key Ideas

- The division algorithm supplies a strictly decreasing remainder; that descent is the engine behind every termination argument here.
- The Euclidean algorithm preserves the gcd at each step, so the last nonzero remainder is the gcd — and back-substitution exhibits it as a Bézout combination.
- Coprimality has an algebraic certificate: gcd(a, b) = 1 iff 1 = ax + by.
- Euclid's lemma (p | ab ⟹ p | a or p | b) is proved from Bézout and is the load-bearing fact for uniqueness.
- Unique factorisation splits cleanly into existence (strong induction) and uniqueness (Euclid's lemma) — keep the two proofs apart.

## Worked Examples

#### Example 1: A gcd with its certificate

Compute gcd(252, 105) and the Bézout coefficients. Euclid: 252 = 2·105 + 42; 105 = 2·42 + 21; 42 = 2·21 + 0, so the gcd is 21. Back-substitute: 21 = 105 − 2·42 = 105 − 2(252 − 2·105) = 5·105 − 2·252. Check: 5·105 − 2·252 = 525 − 504 = 21 ✓. The certificate matters as much as the value: it proves coprimality claims downstream without recomputation.

#### Example 2: Consecutive Fibonacci inputs

Run the algorithm on 89 and 55: remainders 34, 21, 13, 8, 5, 3, 2, 1, 0 — nine steps for two-digit inputs, every quotient equal to 1, the slowest possible behaviour. This is the worst case the bound predicts (consecutive Fibonacci numbers), and it shows why the algorithm's cost is measured in steps, not in the size of intermediate numbers: nothing in the computation ever exceeds the inputs.

#### Example 3: Euclid's lemma doing work

Show that if gcd(a, b) = 1 and a | bc, then a | c. From Bézout, 1 = ax + by; multiply by c: c = acx + bcy. The first term is divisible by a; the second is too, since a | bc. Hence a | c. The same one-line device — multiply a Bézout relation by whatever you need — recurs throughout the course.

## Common Misconceptions

- **"The Euclidean algorithm finds factors."** It finds the gcd; factorisation is a different (and much harder) problem — this gap is the foundation of RSA, met again in Lesson 8.
- **"Unique factorisation is obvious."** It is a theorem resting on Euclid's lemma, which rests on Bézout; in general rings it fails, and knowing where the proof uses the structure of ℤ is the point of proving it.
- **"Prime and irreducible are synonyms by definition."** In ℤ they coincide, but the definitions differ and the equivalence is a result; elsewhere they come apart.
- **"gcd(a, b) is just the largest common divisor."** Equally it is the smallest positive combination ax + by — the second characterisation is the one that powers proofs.
- **"The remainder must be positive."** It must satisfy 0 ≤ r < b; the division algorithm fixes r uniquely in that range, which is what descent arguments rely on.

## Connections

- **Abstract algebra (prerequisite):** the proof style — descent, induction, structural certificates — is the same as in group and ring theory; ℤ is now the running example.
- **Next lesson:** congruences package divisibility into arithmetic on residue classes; Bézout decides which linear congruences are solvable.
- **Lesson 3:** Fermat's and Euler's theorems are Bézout-plus-structure applied to the units modulo n.
- **Lesson 8:** the computational asymmetry between gcd (fast) and factorisation (hard) becomes cryptography.

## Quick Check

1. State the division algorithm and say where well-ordering enters its proof.
2. Why does the Euclidean algorithm preserve the gcd at each step, and why must it terminate?
3. Express gcd(252, 105) as a linear combination of 252 and 105.
4. Prove Euclid's lemma from Bézout's identity.
5. Where exactly does uniqueness of prime factorisation use Euclid's lemma?

## Takeaway

Two facts, both proved: every gcd is computable by descent and certifiable as a combination; every integer factors into primes in exactly one way. Everything else in this course — congruences, arithmetic functions, finite fields — is built on these, and the proofs above are the templates you will keep reusing.
