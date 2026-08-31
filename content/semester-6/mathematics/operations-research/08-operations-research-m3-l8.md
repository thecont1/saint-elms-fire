***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: operations-research
courseName: Operations Research (Math Elective I, C)
moduleId: operations-research-module-3
moduleName: Integer Programming, Sensitivity and Applications
lessonId: operations-research-m3-l8
lessonName: Sensitivity Analysis — How Long the Answer Stays True
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - operations-research-m3-l7
learningObjectives:
  - Compute ranges for right-hand sides over which the current basis stays feasible, using B⁻¹ from the final tableau.
  - Compute ranges for objective coefficients over which the current basis stays optimal, using reduced costs.
  - Evaluate proposed new activities against shadow prices without re-solving, and state the 100% rule for simultaneous changes.
concepts:
  - Post-optimality analysis
  - Allowable range
  - Basis invariance
  - Pricing out a new activity
  - 100% rule
tags:
  - mathematics
  - operations-research
  - sensitivity-analysis
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Sensitivity Analysis — How Long the Answer Stays True

## Overview

An LP optimum is an answer to a *specific* question with *specific* numbers; operations live in a world where those numbers move — resource supplies shift, profit estimates get revised, new products are proposed. **Sensitivity analysis** reads the final tableau one more time and extracts, without re-solving, the ranges within which the answer's *structure* survives: which basis stays feasible as the right-hand sides move, which stays optimal as the profits move, and what a brand-new activity must earn to deserve production. The mechanism is a single object — B⁻¹, hiding in plain sight in the slack columns of the final tableau — applied to perturbations. This is where LP stops being a solver and becomes a decision-support system: the numbers (2, 6), z = 36, come with their own warranty terms.

## Learning Path

1. **What can move:** right-hand sides (feasibility risk), objective coefficients (optimality risk), and new variables (both).
2. **B⁻¹ from the final tableau:** why the slack columns carry it.
3. **RHS ranges:** perturb b, propagate with B⁻¹, keep the basis feasible.
4. **Objective-coefficient ranges:** perturb c, re-price reduced costs, keep them non-negative.
5. **Pricing out new activities** with shadow prices; the 100% rule for simultaneous changes.

## Core Explanation

### The object that does everything

Recall the course's running example and Lesson 2's final tableau, basis B = (x₃, x₂, x₁): the constraint rows read x_B = B⁻¹b and the z-row reduced costs read y* = c_B B⁻¹ over the slack columns. The slack columns *are* B⁻¹, because the original slack columns formed the identity: after elimination, A-slack-column j becomes B⁻¹e_j, i.e. column j of B⁻¹. Reading them off:

B⁻¹ =
| 1 | 1/3 | −1/3 |
| 0 | 1/2 | 0 |
| 0 | −1/3 | 1/3 |

Sanity check: B·B⁻¹ = I with B having columns (1,0,0), (0,2,2), (1,0,3) — verified column by column. Everything below is this matrix at work.

### RHS sensitivity: the feasibility of the basis

Change b to b + Δ·e_i. The new basic values are x_B + Δ·(column i of B⁻¹); the basis stays **feasible** exactly while all components stay ≥ 0, and while it is feasible it stays optimal (reduced costs do not involve b). For resource B — b₂ = 12 + Δ, column 2 of B⁻¹ is (1/3, 1/2, −1/3) — the conditions are 2 + Δ/3 ≥ 0, 6 + Δ/2 ≥ 0, 2 − Δ/3 ≥ 0, i.e. Δ ∈ [−6, 6]. So **b₂ ∈ [6, 18]**: within it, the shadow price 1.5 is honest and z = 36 + 1.5Δ. At the upper end, b₂ = 18, the basis gives x = (0, 9) with slacks (4, 0, 0) and z = 45 = 36 + 9 — verifiable directly against the constraints. Beyond it, x₁ hits zero, the basis changes, and the price 1.5 retires. The same computation for resource C gives b₃ ∈ [12, 24] at price 1; for resource A — with slack already — b₁ ∈ [2, ∞) at price 0.

### Objective-coefficient sensitivity: the optimality of the basis

Change one profit, say c₁ → c₁ + δ. Feasibility is untouched (x_B does not involve c), but the reduced costs move, because y* = c_B B⁻¹ does. Recompute y* = (0, 5, c₁)B⁻¹ = (0, 5/2 − c₁/3, c₁/3); the reduced costs of the non-basic slacks x₄, x₅ are its second and third components. Keeping both ≥ 0: 5/2 − c₁/3 ≥ 0 ⟹ c₁ ≤ 7.5, and c₁/3 ≥ 0 ⟹ c₁ ≥ 0. So **c₁ ∈ [0, 7.5]**. At c₁ = 7.5 the reduced cost of x₄ hits zero — the alternative-optimum signature: vertices (2, 6) and (4, 3) tie at z = 45, checkable by hand. Similarly perturbing c₂: y* = (0, c₂/2 − 1, 1) — the third component is independent of c₂ — gives the single condition c₂/2 − 1 ≥ 0, so **c₂ ∈ [2, ∞)**: product 2's profit can rise without limit without moving the optimum (its constraint chain is already saturated), but dropping below 2 hands the optimum to (4, 3). One-sided ranges like this are common; read them as structural facts, not computation accidents.

### Pricing out a new activity

A proposed product x₆ consumes resources in amounts a₆ = (a₁₆, a₂₆, a₃₆) and earns profit p per unit. It is worth producing exactly when its profit exceeds the opportunity cost of the resources it consumes at current shadow prices: **produce iff p > y*·a₆ = 1.5·a₂₆ + 1·a₃₆** (resource A prices at 0). For a candidate using (1, 1, 2) units: threshold 0 + 1.5 + 2 = 3.5 — any unit profit above 3.5 justifies re-solving with x₆ in the model; below it, the current plan silently remains optimal. This is the dual at work again: Lesson 3's prices now screen proposals before any solver runs.

### Simultaneous changes: the 100% rule

The ranges above are one-at-a-time. For simultaneous changes, the **100% rule** gives a quick sufficient test: for each changed coefficient take the fraction of its allowable increase or decrease consumed, and sum; if the total ≤ 100%, the current basis is guaranteed to survive. It is sufficient, not necessary — sums above 100% mean "recheck", not "wrong basis" — but it converts a re-solve into a sum for small joint moves.

## Key Ideas

- The final tableau already contains B⁻¹ (in the slack columns) and y* (in the z-row): sensitivity analysis is their reuse, not a re-solve.
- RHS changes threaten feasibility of the basis; the range is where B⁻¹(b + Δe_i) ≥ 0, and inside it z moves at the shadow price.
- Objective changes threaten optimality; the range is where recomputed reduced costs stay non-negative — and range endpoints are alternative-optimum events.
- A new activity earns its place iff its profit beats the shadow-price value of what it consumes: p > y*·a.
- The 100% rule governs simultaneous changes: fraction-of-range consumed, summed, ≤ 1.

## Worked Examples

#### Example 1: b₂ = 18, verified in full

Take resource B to its upper allowable limit: b₂ = 18 (Δ = 6). Predicted new solution: x_B = (2, 6, 2) + 6·(1/3, 1/2, −1/3) = (4, 9, 0), i.e. x₁ = 0, x₂ = 9, slack x₃ = 4. Check against the model: x₁ = 0 ≤ 4 ✓ (slack 4), 2x₂ = 18 ✓ tight, 3x₁ + 2x₂ = 18 ✓ tight. Value: z = 5·9 = 45, and the shadow-price formula gives 36 + 1.5·6 = 45 ✓. One unit more (b₂ = 19) leaves the range: the old basis would predict x₁ = 2 − 7/3 < 0, infeasible — the basis must change. Solving afresh, the optimum is (0, 9) with z = 45: constraint 3 caps x₂ at 9 (3·0 + 2·9 = 18), and constraint 2, now 18 ≤ 19, has slack. The price of resource B has fallen from 1.5 to 0 — beyond 18 units, extra resource B is worthless because resource C, not B, limits production. Outside the range, the shadow price retires; re-solve.

#### Example 2: Reading a solver's sensitivity report

Commercial solvers print exactly this lesson: for each constraint, the shadow price plus allowable increase and decrease of the RHS (here: resource B — price 1.5, +6, −6; resource C — price 1, +6, −6; resource A — price 0, ∞, −2); for each variable, the reduced cost plus the coefficient range (x₁: range [0, 7.5], x₂: range [2, ∞), both consistent with the current values 3 and 5 sitting inside). The discipline: quote a shadow price only inside its range, and treat reduced costs of zero (basic variables) versus positive (non-basic ones) as the activity-versus-inactivity report they are.

#### Example 3: Screening two proposals

Proposal P consumes (0, 2, 1) with profit 3.4: opportunity cost 1.5·2 + 1·1 = 4 > 3.4 — reject without re-solving; the resources earn more where they are. Proposal Q consumes (1, 1, 2) with profit 5: opportunity cost 3.5 < 5 — worth a re-solve. Note what the test does not say: it does not give Q's optimal production level, nor the new plan — only the go/no-go. Screening is cheap; adoption needs the full model re-run.

## Common Misconceptions

- **"The shadow price is the price."** It is a *marginal* value of the model's optimum, valid only within its allowable range; quoting 1.5 at b₂ = 30 is quoting outside the warranty.
- **"Ranges describe the optimum's value."** They describe the *basis* — the binding pattern. The value moves linearly within; the basis, and with it all prices, changes at the endpoints.
- **"Coefficients can vary independently within their ranges."** Individual ranges assume all else fixed; joint moves need the 100% rule or a re-solve.
- **"A new profitable-looking product always enters the plan."** Only if its profit exceeds the shadow-price value of its consumption; plenty of positive-profit products fail that test because the resources they need are worth more elsewhere.
- **"Sensitivity is a nicety for reports."** It is the difference between a one-shot answer and a robust plan; most operational decisions live entirely inside these ranges, where the LP speaks without re-solving.

## Connections

Everything here is Lesson 3's duality put to managerial use: B⁻¹ is the skeleton, y* the prices, reduced costs the dual feasibility conditions, and the ranges the domains on which one dual basis remains feasible. The endpoint event — a reduced cost or basic value hitting zero — is the same degeneracy geometry Lesson 2 flagged: ranges end where the polyhedron offers a second optimal vertex. Lesson 7's branch-and-bound inherits the question: how much can data move before the optimal *node* of the tree changes — parametric integer programming, far harder and still active research. In the programme's physics life, this is calibration culture transplanted: every quoted number with its error bars and validity domain, every extrapolation flagged as beyond the model's range.

## Quick Check

1. Where do B⁻¹ and y* sit in the final tableau? *(B⁻¹ in the columns of the original slack variables within the constraint rows; y* as the z-row coefficients over those same columns.)*
2. Over what range is the shadow price 1.5 of resource B valid, and what is z at the upper end? *(b₂ ∈ [6, 18]; at b₂ = 18, z = 36 + 1.5·6 = 45.)*
3. Why does c₂'s allowable range extend to infinity? *(Raising product 2's profit never makes another vertex better — its constraints are saturated at x₂ = 6; only a drop below 2 moves the optimum.)*
4. State the pricing-out test and apply it to profit 3.4 with consumption (0, 2, 1). *(Produce iff p > y*·a; here 1.5·2 + 1·1 = 4 > 3.4, so reject.)*
5. What does the 100% rule guarantee, and what does a sum above 100% mean? *(Sum ≤ 1 guarantees the basis survives; above 1 it is inconclusive — recheck, not refute.)*

## Takeaway

The final tableau answers more than it was asked: B⁻¹ converts resource changes into solution changes, the reduced costs convert profit changes into optimality ranges, and the shadow prices screen new products before any solver runs. The course's example now carries its full operational content — plan (2, 6), value 36, prices (0, 1.5, 1), with every warranty term computed. The last lesson collects the whole toolkit into a capstone: model a real operation end to end, from formulation to managerial memo.
