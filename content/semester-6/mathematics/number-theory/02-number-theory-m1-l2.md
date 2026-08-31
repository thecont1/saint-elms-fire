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
lessonId: number-theory-m1-l2
lessonName: Congruences, Residue Classes and the Chinese Remainder Theorem
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - number-theory-m1-l1
learningObjectives:
  - Work fluently in the ring of residue classes modulo m, deciding when elements are cancellable or invertible.
  - Solve linear congruences ax ≡ b (mod m) completely, stating the exact solution count.
  - Solve simultaneous congruences by the Chinese remainder theorem for pairwise coprime moduli, both by construction and by successive substitution.
concepts:
  - Congruence modulo m
  - Residue classes
  - Linear congruences
  - Chinese remainder theorem
  - Units modulo m
tags:
  - mathematics
  - number-theory
  - congruences
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Congruences, Residue Classes and the Chinese Remainder Theorem

## Overview

Congruence repackages divisibility into arithmetic: instead of asking whether m divides a − b, you compute inside the residue classes modulo m, where addition and multiplication behave well and division is the interesting question. The two engines of this lesson are the solvability criterion for linear congruences — gcd(a, m) | b, with the solution count exact — and the Chinese remainder theorem, which says that for pairwise coprime moduli a system of simultaneous congruences is one congruence in disguise, with a unique answer modulo the product. Both are constructive: the same Bézout machinery from Lesson 1 produces the solutions, not merely their existence. These are the working tools for everything after — Fermat and Euler in the next lesson, arithmetic functions and finite fields beyond.

## Learning Path

1. **Residue classes mod m:** definition, the ring operations, why they are well-defined.
2. **Cancellation and units:** when ax ≡ ay ⟹ x ≡ y; invertible classes and the Bézout criterion.
3. **Linear congruences:** the gcd criterion, solution count, solving by reducing to a unit coefficient.
4. **The Chinese remainder theorem:** statement, uniqueness by coprimality, existence by construction.
5. **Solving CRT systems** both ways: direct Bézout weights and successive substitution.

## Core Explanation

### Residue classes and their arithmetic

Write a ≡ b (mod m) when m | (a − b). This is an equivalence relation; the classes [a] = {a + km : k ∈ ℤ} form the set ℤ/mℤ, with m classes: [0], [1], …, [m − 1]. Addition and multiplication by representatives, [a] + [b] = [a + b], [a][b] = [ab], are well-defined precisely because congruence respects both operations: a ≡ a′ and b ≡ b′ ⟹ a + b ≡ a′ + b′ and ab ≡ a′b′ (mod m). So ℤ/mℤ is a ring — the quotient of ℤ by the ideal mℤ — and computation in it is ordinary integer arithmetic followed by reduction.

One habit to keep from ordinary arithmetic and one to drop: addition and multiplication transfer freely, but cancellation does not. From ax ≡ ay (mod m) you may conclude x ≡ y (mod m) only when gcd(a, m) = 1. The criterion for [a] to be a unit — having some [b] with [a][b] = [1] — is the same: gcd(a, m) = 1, and the inverse comes from Bézout, ab + mx = 1 ⟹ ab ≡ 1 (mod m).

### Linear congruences

The congruence ax ≡ b (mod m) is solvable iff d = gcd(a, m) divides b; when solvable it has exactly d solutions modulo m. Proof structure: solvability of ax ≡ b is solvability of ax − my = b, a linear Diophantine equation, which Bézout settles — possible exactly when d | b. For the count: with d | b, divide everything by d to get (a/d)x ≡ (b/d) (mod m/d), where the coefficient is now a unit; that reduced congruence has one class mod m/d, which lifts to exactly d classes mod m.

Worked in full: 6x ≡ 9 (mod 15). Here d = 3, which divides 9, so three solutions exist. Divide by 3: 2x ≡ 3 (mod 5). The inverse of 2 mod 5 is 3 (2·3 = 6 ≡ 1), so x ≡ 3·3 = 9 ≡ 4 (mod 5). Lift to mod 15: x ≡ 4, 9, 14. Check each: 6·4 = 24 ≡ 9; 6·9 = 54 ≡ 9; 6·14 = 84 ≡ 9 — all mod 15 ✓.

### The Chinese remainder theorem

Let m₁, …, m_k be pairwise coprime. Then for any right-hand sides b₁, …, b_k the system

x ≡ b₁ (mod m₁), …, x ≡ b_k (mod m_k)

has a solution, unique modulo M = m₁⋯m_k. Uniqueness is immediate: two solutions differ by a multiple of every m_i, hence of M by pairwise coprimality. Existence is constructive — two routes below. The content of the theorem, stated structurally, is that the natural map ℤ/Mℤ → ℤ/m₁ℤ × ⋯ × ℤ/m_kℤ is a ring isomorphism: one large residue ring decomposes as a product of smaller ones.

### Two solution methods

**Direct construction (Bézout weights):** for each i set M_i = M/m_i; since gcd(M_i, m_i) = 1, find y_i with M_i y_i ≡ 1 (mod m_i) by Bézout. Then x = Σ b_i M_i y_i works: term i is ≡ b_i mod m_i and every other term is ≡ 0 mod m_i.

**Successive substitution:** solve the first two congruences by writing x = b₁ + m₁ t and substituting into the second; the coprimality makes the resulting congruence for t solvable with a unit coefficient. Merge, and repeat. This scales better by hand, since each step is one linear congruence.

Worked in full (both ways converge on the classical Sunzi problem): x ≡ 2 (3), x ≡ 3 (5), x ≡ 2 (7). Substitution: x = 2 + 3k; into mod 5: 3k ≡ 1 ⟹ k ≡ 2 (inverse of 3 mod 5 is 2), so x = 8 + 15j; into mod 7: 8 + 15j ≡ 2 ⟹ 15j ≡ −6 ≡ 1 (mod 7), and 15 ≡ 1, so j ≡ 1 and x = 23. Check: 23 ≡ 2 (3), 23 ≡ 3 (5), 23 ≡ 2 (7) ✓ — unique mod 105. The direct method gives the same answer: M = 105, weights M₁y₁ = 35·2 = 70, M₂y₂ = 21·1 = 21, M₃y₃ = 15·1 = 15; x = 2·70 + 3·21 + 2·15 = 233 ≡ 23 (mod 105).

## Key Ideas

- Congruence turns divisibility into ring arithmetic; the quotient ℤ/mℤ computes by representatives and reduces.
- Cancellation and invertibility mod m are both governed by gcd(a, m) = 1, with Bézout producing the inverse.
- ax ≡ b (mod m): solvable iff gcd(a, m) | b, with exactly gcd(a, m) solutions mod m — the count is part of the answer.
- CRT: pairwise coprime moduli make a system equivalent to one congruence mod the product; uniqueness is coprimality, existence is Bézout.
- The structural statement ℤ/Mℤ ≅ ∏ ℤ/m_iℤ is what the computations instantiate.

## Worked Examples

#### Example 1: No-solution detection

3x ≡ 2 (mod 6): gcd(3, 6) = 3, which does not divide 2 — no solutions. Equivalently, 3x mod 6 only ever lands in {0, 3}. A fast sanity filter: the left side lives in a subgroup of the additive classes; if b is outside it, stop.

#### Example 2: Inverting a residue class

Find 7⁻¹ mod 15. Euclid: 15 = 2·7 + 1, so 1 = 15 − 2·7 and the inverse is −2 ≡ 13. Check: 7·13 = 91 = 6·15 + 1 ✓. Any product involving division by 7 mod 15 now converts to multiplication by 13.

#### Example 3: A CRT system with non-coprime moduli

x ≡ 2 (mod 4) and x ≡ 4 (mod 6) — CRT does not apply directly since gcd(4, 6) = 2. Consistency check: any solution has x even and x ≡ 2 (4) forces x ≡ 0 (2), while x ≡ 4 (6) forces x ≡ 0 (2) too — compatible. Solve by substitution: x = 2 + 4k, into mod 6: 4k ≡ 2 (mod 6), gcd(4, 6) = 2 | 2 ⟹ 2k ≡ 1 (mod 3) ⟹ k ≡ 2 (mod 3), so x ≡ 10 (mod 12). The modulus of uniqueness is lcm(4, 6) = 12, not the product — the general rule for non-coprime systems.

## Common Misconceptions

- **"You can cancel in congruences like in ℤ."** Only by units: 2·3 ≡ 2·0 (mod 6) but 3 ≢ 0 (mod 6); dividing by a non-unit loses solutions or manufactures them.
- **"CRT needs prime moduli."** Pairwise coprimality suffices; primes are merely the common case. Non-coprime moduli need the compatibility check and an lcm conclusion.
- **"A linear congruence has one solution."** It has gcd(a, m) solutions modulo m; missing the extra lifts is the standard error in 6x ≡ 9 (mod 15)-type problems.
- **"The CRT solution is a number."** It is a residue class mod the product; quoting 23 without "mod 105" states less than what was proved.
- **"Well-definedness is formality."** Arithmetic on classes only works because congruence respects + and ×; quotient constructions elsewhere (Lesson 7's finite fields) reuse the same check.

## Connections

- **Lesson 1:** every result here is Bézout applied one level up: inverses, solution counts, CRT weights.
- **Abstract algebra:** ℤ/mℤ is the prototype quotient ring; CRT is the first decomposition theorem you meet in this course.
- **Next lesson:** the units (ℤ/mℤ)× form a group of order φ(m); Fermat and Euler are statements about that group.
- **Lesson 7:** CRT reappears structurally when finite fields are built as quotients F_p[x]/(f).

## Quick Check

1. When is [a] invertible in ℤ/mℤ, and how do you compute the inverse?
2. State the exact solvability criterion and solution count for ax ≡ b (mod m).
3. Solve 6x ≡ 9 (mod 15) completely.
4. State the Chinese remainder theorem and explain where coprimality enters the proof.
5. What changes when CRT's moduli are not coprime?

## Takeaway

Congruence arithmetic is ordinary arithmetic with one new rule: division is allowed only by units, and Bézout tells you exactly which classes are units. Linear congruences come with a precise existence-and-count criterion, and coprime-modulus systems collapse to single congruences by CRT — uniquely and constructively. With these, the residue rings ℤ/mℤ become places you can compute, and the next lesson starts computing in earnest.
