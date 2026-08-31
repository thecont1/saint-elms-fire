***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: operations-research
courseName: Operations Research (Math Elective I, C)
moduleId: operations-research-module-1
moduleName: Linear Programming — Geometry, Simplex and Duality
lessonId: operations-research-m1-l3
lessonName: Duality — Shadow Prices, Bounds and Complementary Slackness
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - operations-research-m1-l2
learningObjectives:
  - Write the dual of a linear programme in canonical form and explain the correspondence rule for constraints, variables and senses.
  - Prove weak duality and use any feasible dual solution as a certificate bounding the primal objective.
  - Recover the optimal dual solution from the final simplex tableau and apply complementary slackness.
concepts:
  - Dual problem
  - Weak and strong duality
  - Shadow price
  - Complementary slackness
  - Duality certificate
tags:
  - mathematics
  - operations-research
  - duality
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Duality — Shadow Prices, Bounds and Complementary Slackness

## Overview

Every linear programme carries a second one, its **dual**, built from the same data with roles reversed: resources become variables, profits become requirements, maximisation becomes minimisation. The two are not merely paired — they bound each other, and at optimality they meet. That meeting is the deepest fact in linear programming. It turns the z-row numbers of Lesson 2 into prices, gives every feasible solution of one problem the power to certify the other, and explains why "what is one more unit of resource B worth?" has a rigorous answer: 1.5, and here is the proof. Duality is also the bridge to everything after: sensitivity (Lesson 8), network potentials (Lesson 5) and the relaxations of integer programming (Lesson 7) all speak this language.

## Learning Path

1. **The correspondence:** primal max with ≤ constraints ⟷ dual min with ≥ constraints; the dictionary.
2. **Weak duality:** one short proof, and its use as certification.
3. **Strong duality:** the optimum values coincide; the dual solution read off the final tableau.
4. **Shadow prices as dual variables:** economics of the running example.
5. **Complementary slackness:** the exact bookkeeping of slack and price at optimality.

## Core Explanation

### The correspondence

Take the canonical primal (P): maximise z = c·x subject to Ax ≤ b, x ≥ 0, with A an m × n matrix. Its dual (D): minimise w = b·y subject to Aᵀy ≥ c, y ≥ 0. The dictionary: each primal constraint gets a dual variable y_i ≥ 0; each primal variable gets a dual constraint; coefficients of b become the dual objective; coefficients of c become the dual right-hand sides; the sense flips max → min, ≤ → ≥. So for the running example — c = (3, 5), b = (4, 12, 18), rows of A given by the three constraints — the dual is:

Minimise w = 4y₁ + 12y₂ + 18y₃ subject to y₁ + 3y₃ ≥ 3, 2y₂ + 2y₃ ≥ 5, y ≥ 0.

One reading that makes the dual inevitable: imagine a buyer offering prices y₁, y₂, y₃ per unit of the three resources. Constraint 1 says the offer must value the resources consumed by one unit of product 1 at least as high as product 1's profit 3 — otherwise the factory would rather produce. Constraint 2 likewise for product 2. The buyer minimises the total bill 4y₁ + 12y₂ + 18y₃ while remaining unbeatable. The dual is the *price system the primal forces into existence*.

### Weak duality

**Theorem.** For any primal-feasible x and dual-feasible y: c·x ≤ b·y.

Proof: c·x ≤ (Aᵀy)·x = y·(Ax) ≤ y·b = b·y — the first inequality uses Aᵀy ≥ c with x ≥ 0, the second uses Ax ≤ b with y ≥ 0. ∎

The consequences are immediate and powerful. Any feasible production plan gives a *lower* bound on what is achievable; any feasible price system gives an *upper* bound; when the two agree, both are certified optimal with no further computation. If the primal is unbounded above, no dual-feasible y can exist; if the dual is unbounded below, the primal is infeasible. Infeasibility and unboundedness are dual twins.

### Strong duality and the tableau

**Theorem (strong duality).** If (P) has a finite optimum, so does (D), and the optimal values coincide.

Proof from Lesson 2's final tableau, where the machinery is already done. At the final basis B with basic-cost vector c_B, define y* = c_B B⁻¹. Then the z-row coefficient of any variable is z_j − c_j = y*·a_j − c_j, and optimality says these are ≥ 0 — which is exactly Aᵀy* ≥ c, dual feasibility. For the basic columns, z_j − c_j = 0, so y*·a_j = c_j there; multiplying by x_B and summing gives y*·b = y*·Ax = c·x — the dual value equals the primal value. Dual feasibility plus equal values plus weak duality certify both optima. ∎

Apply it here: the optimal basis was (x₃, x₂, x₁) with costs (0, 5, 3), and the slack columns of the final tableau *are* B⁻¹'s columns, so y* = c_B B⁻¹ reads off the z-row over the slacks directly: **y* = (0, 3/2, 1)**. Check dual feasibility: y₁ + 3y₃ = 3 ≥ 3 ✓ and 2y₂ + 2y₃ = 3 + 2 = 5 ≥ 5 ✓; dual value 4·0 + 12·(3/2) + 18·1 = 18 + 18 = 36 = z*. Strong duality, numerically.

### Shadow prices

y_i* is the **shadow price** of resource i: the rate at which the optimal value would grow per extra unit of that resource, for small changes. Resource A has two idle units (slack x₃ = 2), so its price is 0 — more of it is worthless. Resources B and C are exhausted, priced 1.5 and 1. Lesson 8 computes exactly how far each rate holds (for resource B: up to six more units). Shadow prices are the LP's answer to "where is the bottleneck, and what is relieving it worth?" — the single most operationally useful output of the whole method.

### Complementary slackness

At any primal–dual optimal pair: **x_j > 0 ⟹ dual constraint j holds with equality**, and **y_i > 0 ⟹ primal constraint i holds with equality**. It is the fine print of strong duality, and it makes checking and reconstruction fast. In the example: x₁, x₂ > 0 forces both dual constraints tight (verified: 3 and 5); constraint 1 has slack, so its price y₁ = 0; prices y₂, y₃ > 0 force constraints 2 and 3 tight (12 and 18). Every zero and nonzero in the solution has a matched partner.

## Key Ideas

- The dual reverses roles mechanically — constraints ↔ variables, b ↔ c, max ↔ min — but its variables are prices, giving the pairing an economic meaning, not just an algebraic one.
- Weak duality, c·x ≤ y·b, is two lines to prove and turns every feasible dual point into a certificate: agree, and both sides are optimal.
- Strong duality is constructive: y* = c_B B⁻¹ sits in the final tableau's z-row over the slack columns; the prices were computed all along.
- Shadow price = marginal worth of a resource at the optimum; idle resources price at 0, binding ones price positive.
- Complementary slackness pairs every slack with a price: exactly one of each pair is nonzero.

## Worked Examples

#### Example 1: Certification by hand

Someone claims the running example can do better than 36. You answer with y = (0, 3/2, 1): dual-feasible (both dual constraints hold at equality, as checked above), so by weak duality z ≤ 4·0 + 12·(3/2) + 18·1 = 36 for every feasible plan. One feasible price system closes the question for all plans at once — that is the asymmetric power of the dual.

#### Example 2: Solving one side from the other

Suppose only the dual were solved: y* = (0, 3/2, 1). Recover the primal by complementary slackness. Since y₂, y₃ > 0, constraints 2 and 3 bind: 2x₂ = 12 and 3x₁ + 2x₂ = 18, giving x₂ = 6, x₁ = 2. Check constraint 1: x₁ = 2 ≤ 4, slack 2 > 0, consistent with y₁ = 0. And x₁, x₂ > 0 required both dual constraints tight — they were. The primal optimum is reconstructed from prices alone; no tableau needed.

#### Example 3: A minimisation primal

Minimise 5u₁ + 4u₂ subject to 2u₁ + u₂ ≥ 6, u₁ + u₂ ≥ 4, u ≥ 0. The dual, flipping sense and roles: maximise 6v₁ + 4v₂ subject to 2v₁ + v₂ ≤ 5, v₁ + v₂ ≤ 4, v ≥ 0. Solve the primal graphically: vertices (4, 0) at cost 20, (0, 6) at cost 24, and the intersection 2u₁ + u₂ = 6 with u₁ + u₂ = 4, i.e. u₁ = 2, u₂ = 2, at cost 10 + 8 = 18 — the minimum. Solve the dual the same way: vertices (2.5, 0) at 15, (0, 4) at 16, and the intersection v₁ = 1, v₂ = 3 at value 6 + 12 = 18 — the maximum. Strong duality confirmed numerically, and complementary slackness holds perfectly: u₁, u₂ > 0 with both dual constraints tight (2·1 + 3 = 5, 1 + 3 = 4), and v₁, v₂ > 0 with both primal constraints tight.

## Common Misconceptions

- **"The dual is a different problem."** It is the same fact priced differently — strong duality says the values agree at the optimum, and each side's solution reconstructs the other's.
- **"Shadow prices are market prices."** They are internal marginal values specific to this model at this optimum; they say what *this* system would pay for one more unit, valid only within Lesson 8's ranges.
- **"Weak duality is a weaker theorem."** It is the workhorse: certification, infeasibility proofs and branch-and-bound pruning (Lesson 7) all use the bound, not the equality.
- **"Every constraint has a positive price."** Only binding constraints can; a constraint with slack must have price zero by complementary slackness — resource A above.
- **"Dualising twice returns a different form."** The dual of the dual is the primal; the correspondence is an involution, which is why "which one do I solve?" is a computational, not mathematical, choice.

## Connections

The proof of weak duality is a single chain of inequalities — the same move that underlies every certificate in optimisation, from Lesson 5's max-flow min-cut theorem to Lesson 7's relaxation bounds. The construction y* = c_B B⁻¹ shows simplex was solving both problems simultaneously — Lesson 2's final z-row was the dual all along. Lesson 8 is duality applied: sensitivity ranges are the intervals over which one fixed dual basis remains feasible. In the wider programme, duality generalises the Lagrange-multiplier story from calculus — multipliers *are* dual variables — and the price interpretation recurs in physics as conjugate variables: each constraint earns a quantity measured in units of the objective.

## Quick Check

1. Write the dual of: max x₁ + 2x₂ s.t. x₁ + x₂ ≤ 4, x₂ ≤ 3, x ≥ 0. *(Min 4y₁ + 3y₂ s.t. y₁ ≥ 1, y₁ + y₂ ≥ 2, y ≥ 0.)*
2. Prove weak duality in one line for feasible x and y. *(c·x ≤ (Aᵀy)·x = y·(Ax) ≤ y·b, using Aᵀy ≥ c, x ≥ 0, then Ax ≤ b, y ≥ 0.)*
3. Why is resource A's shadow price zero in the running example? *(Its constraint has slack 2 at the optimum; by complementary slackness a non-binding constraint's price is zero — extra units of it change nothing.)*
4. Verify y* = (0, 3/2, 1) is dual-optimal. *(Feasible: 0 + 3 = 3 ≥ 3 and 3 + 2 = 5 ≥ 5; value 18 + 18 = 36 equals the primal optimum, so weak duality certifies both.)*
5. State complementary slackness and use it to explain why both dual constraints hold with equality here. *(x_j > 0 ⟹ dual constraint j tight; both products are produced at the optimum, so both dual constraints bind.)*

## Takeaway

Duality converts an optimisation problem into its price system and proves the two agree: weak duality gives every feasible pricing an upper-bound power, strong duality guarantees the best prices exactly match the best plan, and complementary slackness keeps the books. The running example's final answer is now richer than a point: (2, 6), z = 36, with resources priced (0, 1.5, 1) — a plan, a value, and an economics. Lesson 4 changes scenery to networks, where the same duality reappears as shortest-path potentials and min-cut bounds.
