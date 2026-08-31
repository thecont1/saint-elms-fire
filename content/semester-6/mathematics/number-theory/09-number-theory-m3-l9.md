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
lessonId: number-theory-m3-l9
lessonName: Capstone — Primality, Cryptography and Finite-Field Computation
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - number-theory-m3-l8
learningObjectives:
  - Distinguish primality tests from primality criteria, and place Fermat tests, pseudoprimes, Carmichael numbers and Miller–Rabin on that map.
  - Build and audit toy cryptographic pipelines (RSA, Diffie–Hellman) against parameter-hygiene failure modes.
  - Deliver one finite-field computation project with a verification target, an error/honesty note, and reproducible code.
concepts:
  - Primality testing
  - Pseudoprimes and Carmichael numbers
  - Miller–Rabin test
  - Cryptographic pipelines
  - Capstone project
tags:
  - mathematics
  - number-theory
  - capstone
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Capstone — Primality, Cryptography and Finite-Field Computation

## Overview

The course ends where Lesson 5 pointed: if primes near x arrive at rate 1/log x, the working questions are finding them and telling them from composites — fast. This capstone turns the course's three modules into one computational investigation. The theory layer is primality testing: Wilson's theorem (Lesson 3) certifies primes and is unusable; Fermat's theorem gives a cheap test that composites can pass; the pseudoprimes and Carmichael numbers quantify exactly how badly; Miller–Rabin repairs the test at the cost of one structural refinement. The practice layer is a project menu — prime counting against the PNT, a toy RSA pipeline with a parameter-hygiene audit, a Miller–Rabin implementation that hunts pseudoprimes, or a finite-field code library. Each project ships with a built-in verification target; passing it is the entry ticket, and the honest failure modes are part of the grade.

## Learning Path

1. **Theory:** criteria vs tests; the Fermat test and its failures (341, 561); Miller–Rabin's refinement and a worked detection.
2. **Budgets:** trial-division cost from Lesson 5's density estimates; why probabilistic tests dominate.
3. **Choose a project** (P1–P4) and write its specification page with verification target.
4. **Verify first, then produce:** pass the built-in check on a small instance.
5. **Package:** reproducible code, parameter record, honest limits.

## Core Explanation

### Criteria versus tests

A primality criterion is an if-and-only-if statement: Wilson's theorem ((n − 1)! ≡ −1 mod n ⟺ n prime) and the definition itself. Criteria certify; they rarely compute — Wilson costs O(n) multiplications. A primality test is a fast procedure whose answer you understand: Fermat's test checks a^{n−1} ≡ 1 (mod n) for chosen bases, necessary for primes by Fermat's little theorem but not sufficient. The gap between necessary and sufficient is exactly where pseudoprimes live.

### The failures, made explicit

341 = 11·31 is composite yet passes Fermat's test to base 2: CRT verifies 2³⁴⁰ ≡ 1 both mod 11 (2¹⁰ ≡ 1, and 10 | 340) and mod 31 (2⁵ ≡ 1, and 5 | 340), hence mod 341. Worse exist: 561 = 3·11·17 (the first Carmichael number) passes Fermat's test for every base coprime to 561 — check base 2 by CRT again: 2⁵⁶⁰ ≡ 1 mod 3 (2² ≡ 1, 2 | 560), mod 11 (2¹⁰ ≡ 1, 10 | 560), and mod 17 (2⁸ ≡ 1, 8 | 560). Korselt's criterion characterises them: n squarefree, and p − 1 | n − 1 for every prime p | n. Fermat testing is therefore not "usually right" — it has an adversarial blind spot, and any protocol built on it alone is breakable.

### Miller–Rabin's refinement

Write n − 1 = 2^s·d (d odd). Base-a Miller–Rabin computes a^d, a^{2d}, …, a^{2^s d} = a^{n−1} mod n. If n is prime, either a^d ≡ ±1 or the first nontrivial square root of 1 reached is −1 — otherwise n is composite (a witness is found). Worked detection: n = 91 = 7·13, base 2. Here 90 = 2·45 (s = 1, d = 45). Compute: 2¹² ≡ 1 (mod 91) (since 2⁶ = 64 and 64² = 4096 ≡ 1), so 2⁴⁵ = 2^{36}·2⁹ ≡ 2⁹ = 512 ≡ 57 (mod 91). Neither ±1; its single further square: 57² = 3249 ≡ 64 ≠ 1 (mod 91). Witness found: 91 is composite — and indeed 2⁹⁰ ≡ 64 ≠ 1, so plain Fermat base 2 catches 91 too; the sequence check is what catches composites that plain Fermat passes, as base 2 catches 341 (2⁸⁵ ≡ 32, and 32² ≡ 1 without ever hitting −1). Composites that fool even the stronger test exist — 2047 = 23·89 is a strong pseudoprime to base 2 — but they are far rarer, and each additional independent base multiplies the miss probability by at most 1/4.

### Budgets

Trial division of a candidate near x costs the primes up to √x: about 3,400 divisions near 10⁹ (Lesson 5's estimate), with about 21 candidates per prime found. Fermat/Miller–Rabin cost O(log n) modular exponentiations per base — repeated squaring keeps each exponentiation at O(log n) multiplications. The density estimate tells you how many candidates to expect; the test cost tells you what each candidate consumes; together they budget a prime search before it starts.

### The project menu

- **P1 — Counting against the PNT.** Implement the sieve; tabulate π(x) at powers of ten up to at least 10⁶; plot π(x) against x/log x and li(x), and report the measured relative error at each decade. Verification: reproduce π(10⁶) = 78,498 exactly.
- **P2 — A toy RSA pipeline with a hygiene audit.** Key generation (seeded prime search using your Miller–Rabin), encryption/decryption round trip, then a deliberate fault audit: e non-coprime to φ(n), p = q, tiny primes, repeated messages — document each failure and which check catches it. Verification: round trip on 100 random messages with correctly generated keys; every fault detected by its audit.
- **P3 — The pseudoprime hunt.** Implement Fermat and Miller–Rabin side by side; list all base-2 Fermat pseudoprimes below 10⁵; verify 341 and 561 pass Fermat base 2 and that Miller–Rabin exposes every composite found (cross-check against trial division as ground truth). Report: how many composites below 10⁵ survive k = 3 Miller–Rabin bases? (The answer should be: none — and the report must show the audit, not assert it.)
- **P4 — Arithmetic of F_{2^n} and a working code.** Build F_2[x]/(f) arithmetic for an irreducible f of degree 8 (or your choice); use it to implement Hamming(7, 4) encode/syndrome-decode. Verification: the syndrome table has exactly 2³ = 8 entries covering all single-error positions, and injecting each of the 7 single-bit errors into a known codeword is corrected 7/7.

### Deliverables contract

Specification page (question, verification target, success criteria) before code; verification passes on a small instance before production; seeded randomness with the seed recorded; parameter table alongside results; honest limits section naming what the experiment does not show (toy key sizes prove structure, not security — say so); reproducible archive with a one-command rerun.

## Analysis

The expected honest negatives, so they are recognised when met. P1: the ratio π(x)/(x/log x) approaches 1 from above and slowly — at 10⁶ the x/log x estimate is still ~8% low (Lesson 5's table); the report should show the improvement across decades without extrapolating a limit from finite data. P2: every "break" demonstrated is trivial at toy sizes — the audit's value is the mapping from bad parameter to broken property, not any security claim. P3: the pseudoprime list is finite below any bound, and the honest statement includes the runtime split — Miller–Rabin's extra cost per candidate is small; the lesson is the blind spot's existence, not its density. P4: single-error correction is exactly one error — two errors decode to a wrong codeword silently; the demonstration should include that failure mode, labelled.

## Key Ideas

- Criteria certify, tests compute: Wilson is the criterion, Fermat and Miller–Rabin are tests with known failure sets.
- Pseudoprimes (341) and Carmichael numbers (561) are not rarities to ignore but the explicit reason Fermat tests alone fail.
- Miller–Rabin's witness check uses the structure of square roots of 1; worked detection of 91 shows the mechanism.
- Search budgets = density estimate × per-candidate test cost; both come from earlier lessons.
- Every project verifies against a built-in target; honest negatives belong in the report.

## Worked Examples

#### Example 1: Why 341 fools Fermat base 2

The CRT computation in full: mod 11, 2¹⁰ ≡ 1 and 340 = 10·34, so 2³⁴⁰ ≡ 1; mod 31, 2⁵ = 32 ≡ 1 and 340 = 5·68, so 2³⁴⁰ ≡ 1. Both prime factors of 341 see 1, so 341 does. The structural reason is visible: 10 | 340 and 5 | 340 — the p − 1 divisibility that Korselt's criterion generalises.

#### Example 2: The Miller–Rabin sequence as an audit trail

For n = 91, base 2, the full trail: d = 45, s = 1; a^d ≡ 57; a^{2d} ≡ 64 ≠ 1. Had 91 been prime, the sequence would have started at ±1 or stepped through −1 — it did neither, so the composite verdict carries its own evidence. Reports should keep the trail, not just the verdict.

#### Example 3: Budgeting a search near 10⁹

Target: one prime near 10⁹. Density says ~21 odd candidates; Miller–Rabin with 3 bases costs roughly 3·log₂(10⁹) ≈ 90 modular squarings per candidate — about 1,900 squarings total, plus ~3,400 trial divisions if deterministic certification by trial division is demanded of the survivor. The probabilistic route replaces certification cost with an error probability that falls as 4^{−k} per composite per base — the trade the report should state numerically.

## Common Misconceptions

- **"Fermat's test fails rarely enough to ignore."** 341 and 561 fail it by construction; protocols need tests whose failure sets are understood, not just small.
- **"Miller–Rabin is an approximation."** A composite verdict is a proof (the witness can be exhibited); only the prime verdict is probabilistic, with quantified error per base.
- **"Toy cryptography teaches cryptography."** It teaches the number theory; security claims require sizes and padding the toy cannot show, and the report must say so.
- **"More bases always help equally."** Each independent base multiplies the miss probability by ≤ 1/4 per composite — diminishing but geometric; the budget sets k.
- **"The capstone is done when the code runs."** It is done when the verification target passes, the limits are stated, and the rerun reproduces the figures.

## Connections

- **Lesson 3:** Fermat, Euler and Wilson provide the three reference points — theorem, generalisation, criterion — that testing theory organises.
- **Lesson 5:** the density estimate budgets candidate supply; the sieve supplies ground truth for audits.
- **Lesson 8:** RSA and Diffie–Hellman pipelines become the audit subjects of P2; finite-field arithmetic becomes P4's deliverable.
- **Beyond the course:** Miller–Rabin plus seeded prime search is how real key generation starts; the honesty discipline transfers unchanged.

## Quick Check

1. Distinguish a primality criterion from a primality test, with one example of each.
2. Verify by CRT that 341 passes Fermat's test to base 2.
3. What structural fact about square roots of 1 does Miller–Rabin exploit?
4. Estimate the cost of finding one prime near 10¹² with 3-base Miller–Rabin.
5. What belongs in a capstone's honest-limits section — give one example from the menu.

## Takeaway

Number theory's computational face is a trade between certainty and cost: Wilson certifies and cannot scale; Fermat scales and has blind spots; Miller–Rabin buys quantified confidence with structure. The capstone asks you to implement that trade honestly — verify first, audit your own failures, state your limits — which is the working standard of every application this course feeds, from cryptography to coding theory.
