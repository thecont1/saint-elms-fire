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
lessonId: number-theory-m2-l5
lessonName: The Distribution of Primes
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - number-theory-m2-l4
learningObjectives:
  - Prove the infinitude of primes by Euclid's and Euler's arguments, and explain why Euler's is quantitatively stronger.
  - State the prime number theorem and read π(x) against x/log x on real data, including the size of the error at finite x.
  - Use the sieve of Eratosthenes as the baseline counting/factoring device and state what Chebyshev-type bounds and Bertrand's postulate guarantee.
concepts:
  - Infinitude of primes
  - Prime counting function
  - Prime number theorem
  - Sieve of Eratosthenes
  - Chebyshev bounds
tags:
  - mathematics
  - number-theory
  - prime-distribution
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# The Distribution of Primes

## Overview

The primes are defined locally — no divisors but 1 and themselves — yet their global arrangement behaves like a random process with a law: the density near x is about 1/log x. This lesson walks the route from the qualitative to the quantitative. Euclid proves there are infinitely many primes by contradiction; Euler proves it by showing the sum of reciprocals diverges, which says the primes are not merely endless but dense. The sieve of Eratosthenes turns counting into computation, producing the data — π(100) = 25, π(10⁶) = 78,498 — that the prime number theorem then explains: π(x) ~ x/log x, with a finite-x error you can measure on the same data. Chebyshev's bounds and Bertrand's postulate give the unconditional scaffolding that keeps the asymptotic statements honest before any proof of the theorem itself.

## Learning Path

1. **Infinitude, twice:** Euclid's construction and Euler's divergent-reciprocal argument; what each actually proves.
2. **Counting:** the sieve of Eratosthenes; the table of π(x) at powers of ten.
3. **The prime number theorem:** statement π(x) ~ x/log x; reading the ratio on real data.
4. **Unconditional scaffolding:** Chebyshev-type bounds; Bertrand's postulate.
5. **Consequences:** size of the n-th prime p_n ~ n log n; what the theorem does and does not say about gaps.

## Core Explanation

### Euclid and Euler

Euclid: given primes p₁, …, p_k, the number N = p₁⋯p_k + 1 is divisible by some prime, and none of the p_i divides it (each leaves remainder 1). So any finite list is incomplete. The argument is constructive in a weak sense — it exhibits a number with a new prime factor — and purely qualitative.

Euler: the harmonic series diverges, and the unique factorisation of every integer gives, formally,

Σ_{n≥1} 1/n = ∏_p (1 + 1/p + 1/p² + ⋯) = ∏_p (1 − 1/p)⁻¹.

If there were finitely many primes, the product would be finite — contradicting divergence. So Σ_p 1/p diverges: the primes are dense enough that their reciprocals do not sum. (The manipulation is formal at this stage; making it rigorous uses partial products over p ≤ x and the divergence of the harmonic series — the shape of the argument survives intact.) Euler's statement is strictly stronger: infinitude falls out of it, but not conversely.

### Counting by sieve

The sieve of Eratosthenes lists primes up to x: strike multiples of 2, then of 3, and so on, processing base primes only up to √x — any composite ≤ x has a prime factor ≤ √x. Cost is roughly x log log x operations, quasi-linear, and it remains the practical way to produce π(x) for moderate x. The data it produces:

| x | π(x) | x / log x |
|---|------|-----------|
| 10 | 4 | 4.3 |
| 10² | 25 | 21.7 |
| 10³ | 168 | 144.8 |
| 10⁶ | 78,498 | 72,382 |

(x/log x evaluated with natural logs: 10⁶/ln 10⁶ = 10⁶/13.816 ≈ 72,382.) The approximation tracks the trend and is ~8% low at 10⁶ — close, visibly improving relative to π, but never exact at finite x.

### The prime number theorem

π(x) ~ x/log x: the ratio tends to 1 as x → ∞. Equivalently the density of primes near x is ≈ 1/log x, so "a random integer near x is prime with probability about 1/log x" is the theorem's heuristic content. The slightly better estimator li(x) = ∫₂ˣ dt/log t stays closer at finite x, but x/log x carries the main term. The theorem was proved in 1896 (Hadamard, de la Vallée Poussin) via complex analysis of ζ(s) — far beyond this course's toolkit — and what we keep here is its statement, the data confirming it, and its consequences.

### Unconditional scaffolding

Before the asymptotic theorem, Chebyshev-type results bound π(x) between constant multiples of x/log x: there exist c₁ < 1 < c₂ with c₁·x/log x < π(x) < c₂·x/log x for all large x — enough to know the PNT's order of magnitude is right even without the ratio tending to 1. And Bertrand's postulate: for every n > 1 there is a prime p with n < p < 2n. Primes never thin out to total gaps; doubling windows always catch one.

### Consequences for individual primes

The n-th prime satisfies p_n ~ n log n. Check on the data: p₁₀₀ = 541, while 100·log 100 ≈ 461 — the asymptotic undershoots by ~17% at n = 100, consistent with the slow convergence seen in the π table. The theorem says nothing directly about gaps between consecutive primes (bounded gaps is a deep modern result; Legendre's conjecture — a prime between n² and (n+1)² — remains open); it governs averages, not individuals.

## Key Ideas

- Euclid gives infinitude; Euler's divergent Σ 1/p gives density — a strictly stronger statement.
- The sieve is the computational ground truth: quasi-linear, correct by the √x factor argument.
- PNT: π(x) ~ x/log x; density near x is ≈ 1/log x; finite-x error is measurable and appreciable (≈ 8% at 10⁶).
- Chebyshev bounds fix the order of magnitude; Bertrand's postulate rules out total prime deserts.
- p_n ~ n log n transfers the counting law to individual primes, with the same slow convergence.

## Worked Examples

#### Example 1: Sieve budget

To list all primes ≤ 1000, the sieve only needs base primes ≤ √1000 ≈ 31.6 — i.e. 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 — and the output is the classical π(1000) = 168. The √x cutoff is the whole trick: composites that survive all bases ≤ √x cannot exist, since any composite carries a factor ≤ its square root.

#### Example 2: Estimating primes in a range

How many primes near 10⁹? Density ≈ 1/log(10⁹) = 1/20.72 ≈ 0.048 — about one integer in 21. In a window of 10⁶ integers around 10⁹ expect ≈ 48,000 primes. Such estimates set trial-division budgets for prime searches: testing candidates near 10⁹ against base primes ≤ √10⁹ ≈ 31,623 costs about 3,400 divisions per candidate, and about 21 candidates per success.

#### Example 3: Where Euler's argument bites

Σ 1/p diverges but glacially: the partial sum over primes ≤ x grows like log log x. Reaching a partial sum of 3 already needs astronomically large x. The lesson is qualitative power at quantitative slowness — divergence certifies density without promising any finite search interval.

## Common Misconceptions

- **"The PNT predicts individual primes."** It predicts density; individual gaps and positions remain unconstrained by it.
- **"x/log x equals π(x) for large x."** The ratio tends to 1; at 10⁶ the error is still ~8%, and convergence is famously slow.
- **"Euclid's proof lists the next prime."** N = p₁⋯p_k + 1 has a new prime factor, which may be much smaller than N — the proof is non-constructive about which prime.
- **"The sieve is only for small numbers."** Segmented and combinatorial sieves remain state-of-the-art tools at research scale.
- **"Divergent Σ 1/p means primes are common."** log log x growth is divergence at the slowest crawl — a statement of inexhaustibility, not abundance.

## Connections

- **Lesson 1:** unique factorisation is what licenses Euler's product identity — the arithmetic fundamental theorem powering an analytic statement.
- **Lesson 4:** Möbius and divisor-sum machinery connect to π via the identities of the next module's level; Σ μ(d) is the sieve's algebraic shadow.
- **Lesson 9:** primality testing is the computational twin of this lesson — given the density estimate, how do you check a single candidate?
- **Analysis prereq:** limits, asymptotics and the meaning of ~ are exactly the real-analysis vocabulary, now applied.

## Quick Check

1. What does Euler's argument prove that Euclid's does not?
2. Why does the sieve need only base primes up to √x?
3. State the prime number theorem and interpret 1/log x.
4. What do Chebyshev bounds and Bertrand's postulate each guarantee?
5. Estimate the number of primes near 10¹² and the trial-division budget per candidate.

## Takeaway

The primes pass from a qualitative fact (infinitely many) to a quantitative law (density 1/log x) along a route of three ideas: Euler's product, the sieve's data, and the PNT's asymptotic. The law is average-case and slow-converging — respect both caveats — and it sets the stage for everything computational the course does next: if primes near x arrive at rate 1/log x, the questions become finding them and telling them apart from composites.
