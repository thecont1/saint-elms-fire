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
lessonId: number-theory-m2-l6
lessonName: Quadratic Residues and Quadratic Reciprocity
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - number-theory-m2-l5
learningObjectives:
  - Decide quadratic residuosity modulo a prime using Euler's criterion and Gauss's lemma, and compute Legendre symbols by the rules for −1 and 2.
  - Apply quadratic reciprocity to evaluate Legendre symbols without listing squares.
  - Extend the notation to Jacobi symbols and state precisely what the composite-modulus value does and does not certify.
concepts:
  - Quadratic residues
  - Legendre symbol
  - Euler's criterion
  - Gauss's lemma
  - Quadratic reciprocity
  - Jacobi symbol
tags:
  - mathematics
  - number-theory
  - quadratic-residues
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Quadratic Residues and Quadratic Reciprocity

## Overview

Which congruences x² ≡ a (mod p) are solvable? The question looks elementary and opens the deepest structural room in elementary number theory. The Legendre symbol packages the answer as ±1, Euler's criterion converts it into a power computation, and Gauss's lemma converts it into a count. The crown is quadratic reciprocity: for odd primes p and q, the solvability of x² ≡ p (mod q) and x² ≡ q (mod p) determines each other up to an explicit sign — a symmetry between primes that no list of examples could have predicted. This lesson builds the full symbol-computing machinery, closes with the Jacobi symbol's composite-modulus extension and its one dangerous misreading, and sets up the finite-field viewpoint of the next module.

## Learning Path

1. **Residues and non-residues:** the squaring map mod p has image of size (p − 1)/2; list them for small p.
2. **The Legendre symbol and Euler's criterion:** (a/p) = a^{(p−1)/2} mod p ∈ {±1}.
3. **Special values:** (−1/p) by parity of (p−1)/2; (2/p) by parity of (p² − 1)/8.
4. **Gauss's lemma:** the sign from counting overshoots; the bridge to reciprocity.
5. **Quadratic reciprocity:** statement, symbol evaluation workflow, worked computations.
6. **Jacobi symbols:** the composite-modulus extension and the misreading it invites.

## Core Explanation

### The squaring map and its image

In (ℤ/pℤ)× the map x ↦ x² is a group homomorphism with kernel {±1}, so its image has size (p − 1)/2: exactly half the nonzero classes are squares (quadratic residues), half are not. For p = 7: squares of 1, 2, 3 give {1, 4, 2}, the residue set; 3, 5, 6 are non-residues. The Legendre symbol records membership: (a/p) = 1 if a is a nonzero residue, −1 if not, 0 if p | a.

### Euler's criterion

For p ∤ a: a^{(p−1)/2} ≡ (a/p) (mod p). Proof: if a ≡ g² then a^{(p−1)/2} ≡ g^{p−1} ≡ 1 by Fermat; if not, the product argument (multiply all classes, pair residues against a times them) gives −1. It turns residuosity into exponentiation — slow by hand, but the conceptual anchor and the basis of every computational test. Check at p = 7: 2³ = 8 ≡ 1, so 2 is a residue (3² = 2 ✓); 3³ = 27 ≡ 6 ≡ −1, a non-residue ✓.

### The symbols of −1 and 2

From Euler's criterion with a = −1: (−1/p) = (−1)^{(p−1)/2} — so −1 is a square iff p ≡ 1 (mod 4). Check: mod 5, 2² = 4 ≡ −1 ✓; mod 7, −1 ≡ 6 ∉ {1, 2, 4} ✓. For 2: (2/p) = (−1)^{(p²−1)/8} — a square iff p ≡ ±1 (mod 8). Check: p = 7 gives exponent (49 − 1)/8 = 6, even, so 2 is a residue (3² ≡ 2 ✓); p = 5 gives exponent 3, odd, and indeed 2 ∉ {1, 4} ✓.

### Gauss's lemma

For odd prime p and p ∤ a, reduce a, 2a, …, ((p−1)/2)a to least positive residues mod p and count how many exceed p/2; call the count ν. Then (a/p) = (−1)^ν. Worked: (3/7) — the multiples are 3, 6; reduced: 3, 6; exceeding 3.5: just 6; ν = 1, so (3/7) = −1 ✓ (matching the list {1, 2, 4}). The lemma is a direct proof-level tool and, more importantly, Gauss's route to reciprocity: counting overshoots on a lattice rectangle produces the sign in the theorem below.

### Quadratic reciprocity

For distinct odd primes p, q:

(p/q)·(q/p) = (−1)^{(p−1)(q−1)/4}.

The exponent is odd exactly when both p ≡ q ≡ 3 (mod 4) — the only case where the two symbols are negatives of each other. Combined with the −1 and 2 rules and multiplicativity ((ab/p) = (a/p)(b/p), immediate from Euler's criterion), this evaluates any Legendre symbol by a Euclidean-algorithm-style descent on the numbers involved — no square lists ever.

Worked: (3/11). Reciprocity: (3/11)(11/3) = (−1)^{(2·10)/4} = (−1)⁵ = −1. Reduce: (11/3) = (2/3) = −1. Hence (3/11) = −1/(−1) = 1 — and indeed 5² = 25 ≡ 3 (mod 11) ✓. Second: (2/13): (13² − 1)/8 = 21 odd ⟹ −1; the residue list mod 13 is {1, 3, 4, 9, 10, 12}, no 2 ✓.

### Jacobi symbols

For odd composite n = p₁⋯p_k (with multiplicity), define (a/n) = ∏ (a/p_i) — the Jacobi symbol. It is computable by exactly the same rules (reciprocity holds for Jacobi symbols in both slots), which makes it cheap. The trap: (a/n) = −1 still certifies non-residuosity mod n, but (a/n) = 1 certifies nothing when n is composite — the factors can disagree in pairs. Example: (2/15) = (2/3)(2/5) = (−1)(−1) = 1, yet 2 is not a square mod 15 (a square mod 15 must be a square mod 3, and 2 is not). This distinction is load-bearing in Lesson 9's primality tests.

## Key Ideas

- Exactly half of the nonzero classes mod p are squares; the Legendre symbol records which side a falls on.
- Euler's criterion equates the symbol with a^{(p−1)/2}; the −1 and 2 rules are its packaged corollaries.
- Gauss's lemma converts the symbol into an overshoot count — the proof engine behind reciprocity.
- Quadratic reciprocity links residuosity of p mod q and q mod p, with a sign only when both are 3 mod 4; it reduces symbol evaluation to descent.
- Jacobi symbols extend the calculus to composites: −1 remains conclusive, +1 becomes meaningless about residuosity.

## Worked Examples

#### Example 1: A full descent

Evaluate (19/43). Both ≡ 3 (mod 4), so the reciprocity sign is −1: (19/43) = −(43/19) = −(5/19). Now 5 ≡ 1 (mod 4), so (5/19) = (19/5) = (4/5) = 1. Result: (19/43) = −1 — 19 is a non-residue mod 43, found in four lines with no square list.

#### Example 2: Solving a quadratic congruence

For which primes p ≠ 3 is x² ≡ 3 (mod p) solvable? Compute (3/p): by reciprocity and the mod-12 reduction, (3/p) = 1 iff p ≡ ±1 (mod 12), −1 iff p ≡ ±5 (mod 12). Check p = 11 ≡ −1: solvable (5² ≡ 3 ✓); p = 7 ≡ 7: not, matching {1, 2, 4}.

#### Example 3: Jacobi trap, exploited

Testing residuosity mod 21 with the Jacobi symbol: (5/21) = (5/3)(5/7) = (2/3)(5/7) = (−1)(−1) = 1 — yet squares mod 21 must be squares mod 3, and 5 ≡ 2 is not one. The value +1 told us nothing; only −1 would have certified. Any algorithm that reads Jacobi +1 as "square" is broken by construction.

## Common Misconceptions

- **"Half the classes are squares — so residuosity is a coin flip worth listing."** Structure, not chance: the symbols compute residuosity by descent, and the list method does not scale.
- **"Euler's criterion is just Fermat."** It refines Fermat's a^{p−1} ≡ 1 by halving the exponent, and the halving is exactly what separates residues from non-residues.
- **"The reciprocity sign is usually −1."** It is −1 only when both primes are 3 mod 4; most pairs of odd primes have sign +1.
- **"Jacobi 1 means square."** Only the −1 value certifies anything for composite moduli; the +1 reading is the trap.
- **"Reciprocity solves x² ≡ a."** It decides solvability; extracting a root is a separate algorithmic problem (Tonelli–Shanks), touched in the next module.

## Connections

- **Lesson 3:** Euler's criterion is Fermat's theorem sharpened by one square root of the exponent.
- **Next module:** over finite fields the same question becomes "does this polynomial split" — the Legendre symbol generalises to field theory.
- **Lesson 9:** Jacobi-symbol calculus is the bookkeeping layer of modern primality tests.
- **Cryptography (Lesson 8):** residuosity decisions underpin several cryptosystems; the hard direction is the same one RSA uses.

## Quick Check

1. How many quadratic residues are there mod p, and why exactly that many?
2. State Euler's criterion and verify it for a = 2, p = 7.
3. State Gauss's lemma and use it to compute (3/7).
4. State quadratic reciprocity, including exactly when the sign is −1.
5. What does Jacobi symbol value +1 certify when n is composite — and what does −1 certify?

## Takeaway

Residuosity modulo primes is decidable by pure symbol calculus: Euler converts it to powers, the special rules package −1 and 2, and reciprocity makes every symbol a short descent. The Jacobi extension keeps the calculus cheap at composite moduli — with one strict rule about which of its answers you may trust. That calculus is the bridge to the finite fields ahead, where "does x² = a have a solution" becomes the first case of "does this polynomial split."
