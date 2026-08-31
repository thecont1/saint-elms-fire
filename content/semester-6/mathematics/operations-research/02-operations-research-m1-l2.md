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
lessonId: operations-research-m1-l2
lessonName: The Simplex Method — Tableaux, Pivots and Termination
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - operations-research-m1-l1
learningObjectives:
  - Execute the simplex method on a linear programme in standard form, choosing entering and leaving variables by the reduced-cost and ratio tests.
  - Interpret each tableau as a vertex — its basic variables, its objective value, and its reduced costs.
  - Detect degeneracy, unboundedness and multiple optima from tableau signatures.
concepts:
  - Basic feasible solution
  - Reduced cost
  - Ratio test
  - Pivot
  - Degeneracy
tags:
  - mathematics
  - operations-research
  - simplex-method
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# The Simplex Method — Tableaux, Pivots and Termination

## Overview

Lesson 1 reduced LP to a finite search over vertices; this lesson is the search, made mechanical. The simplex method holds a **basic feasible solution** — algebra for a vertex — and asks one question at a time: can I improve by sliding along an edge? Each pivot trades one basic variable for another, moves to an adjacent vertex, and never decreases the objective. The running example of the course is solved twice, by hand and by inspection, and the tableau is read both ways: as arithmetic and as geometry. Along the way come the three signatures that matter in practice — a zero step (degeneracy), an empty ratio test (unboundedness), and a zero reduced cost at the end (multiple optima).

## Learning Path

1. **Basic feasible solutions:** bases, non-bases, and why BFS ⇔ vertex.
2. **The initial tableau** in canonical max form with slack basis.
3. **The two tests:** entering variable by most negative reduced cost, leaving variable by minimum ratio.
4. **Full simplex run** on the course's running example.
5. **Signatures:** degeneracy, unboundedness, multiple optima — read from the final tableau.

## Core Explanation

### Basic feasible solutions

Put the LP in standard form: maximise z = c·x subject to Ax = b, x ≥ 0, with A an m × n matrix of rank m, n > m. Choose m linearly independent columns — a **basis** B — set the remaining n − m variables to zero, and solve Bx_B = b. If the solution x_B ≥ 0, it is a **basic feasible solution** (BFS). The claim tying algebra to Lesson 1's geometry: the BFSs are exactly the vertices of the feasible region. Counting note: there are at most C(n, m) bases, usually far fewer feasible ones — finite, but exponential; simplex succeeds in practice because it walks intelligently, not exhaustively.

### The tableau

Keep the objective as an equation z − c·x = 0 and stack it over the constraint rows. For the running example — max z = 3x₁ + 5x₂, x₁ + x₃ = 4, 2x₂ + x₄ = 12, 3x₁ + 2x₂ + x₅ = 18 — the initial tableau, with the slack basis (x₃, x₄, x₅):

| Basic | x₁ | x₂ | x₃ | x₄ | x₅ | RHS |
|---|---|---|---|---|---|---|
| z | −3 | −5 | 0 | 0 | 0 | 0 |
| x₃ | 1 | 0 | 1 | 0 | 0 | 4 |
| x₄ | 0 | 2 | 0 | 1 | 0 | 12 |
| x₅ | 3 | 2 | 0 | 0 | 1 | 18 |

This tableau *is* the vertex (0, 0) with z = 0. Reading the z-row: increasing x₁ by one unit (while holding other non-basic variables at zero and letting the basis absorb it) raises z by 3; increasing x₂ raises it by 5. A negative entry in the z-row is therefore an invitation.

### The two tests

**Entering variable (optimality test):** pick any non-basic variable with a negative z-row coefficient — conventionally the most negative, here x₂ (coefficient −5, the steepest improvement per unit). If every z-row coefficient is ≥ 0, no direction improves: the current BFS is optimal.

**Leaving variable (ratio test):** raise the entering variable while keeping feasibility. Each basic row i constrains it: RHS_i divided by its (positive) entry in the entering column. Take the smallest ratio; that row's basic variable hits zero first and leaves the basis. Ties are degeneracy — discussed below. Ignore zero and negative entries: those basic variables grow, or do not move, as x₂ grows, and impose no cap.

Then pivot — ordinary Gauss–Jordan elimination on the entering column — and read the new vertex.

### The full run

**Pivot 1:** x₂ enters. Ratios: row x₄ gives 12/2 = 6; row x₅ gives 18/2 = 9; row x₃ has no entry. Minimum 6, so x₄ leaves. Divide row x₄ by 2 and eliminate x₂ from the other rows:

| Basic | x₁ | x₂ | x₃ | x₄ | x₅ | RHS |
|---|---|---|---|---|---|---|
| z | −3 | 0 | 0 | 5/2 | 0 | 30 |
| x₃ | 1 | 0 | 1 | 0 | 0 | 4 |
| x₂ | 0 | 1 | 0 | 1/2 | 0 | 6 |
| x₅ | 3 | 0 | 0 | −1 | 1 | 6 |

Vertex (0, 6), z = 30; resource B now exhausted (x₄ out of the basis, slack zero). Still x₁ invites (coefficient −3).

**Pivot 2:** x₁ enters. Ratios: row x₃ gives 4/1 = 4; row x₅ gives 6/3 = 2. Minimum 2, so x₅ leaves. Divide by 3 and eliminate:

| Basic | x₁ | x₂ | x₃ | x₄ | x₅ | RHS |
|---|---|---|---|---|---|---|
| z | 0 | 0 | 0 | 3/2 | 1 | 36 |
| x₃ | 0 | 0 | 1 | 1/3 | −1/3 | 2 |
| x₂ | 0 | 1 | 0 | 1/2 | 0 | 6 |
| x₁ | 1 | 0 | 0 | −1/3 | 1/3 | 2 |

Vertex (2, 6), z = 36. The z-row has no negative entries: **optimal**. The path (0,0) → (0,6) → (2,6) matches Lesson 1's picture exactly — two edge slides, each improving by the full available margin (0 → 30 → 36).

### Signatures worth memorising

- **Multiple optima:** at the final tableau, a *non-basic* variable with z-row coefficient exactly 0 could enter without changing z — the edge it travels lies level. Lesson 1's Example 2 situation, detected algebraically.
- **Unboundedness:** the entering column has no positive entry — no ratio exists, no basic variable caps the increase, z → ∞. The geometry is a feasible ray.
- **Degeneracy:** a ratio tie, or a zero RHS in some row; the next pivot may move to a new basis describing the *same* vertex with z unchanged. Rare cycling is possible; Bland's rule (smallest-index choice for entering and leaving) provably prevents it. In applications, degeneracy is common and cycling almost never seen.

### Where this is heading

The final z-row coefficients of the slack variables — 3/2 for x₄ and 1 for x₅ here, with x₃'s coefficient 0 — are not leftovers. They are the **shadow prices** of the three resources: what one more unit of each resource would be worth at the margin. Lesson 3 promotes them to the dual problem.

## Key Ideas

- BFS ⇔ vertex: a basis of m columns plus non-negativity is the algebra of a corner; simplex never leaves this dictionary between algebra and geometry.
- Entering variable: most negative z-row coefficient (improvement direction). All coefficients non-negative ⟺ optimal.
- Leaving variable: minimum ratio test protects feasibility; the smallest ratio is the first basic variable to hit zero.
- Every pivot is Gauss–Jordan elimination; the tableau after a pivot is the next vertex, with z non-decreasing by construction.
- Read the endings: zero reduced cost on a non-basic ⟹ alternative optima; no positive pivot-column entry ⟹ unbounded; ties ⟹ degeneracy.

## Worked Examples

#### Example 1: Verifying the final tableau against the model

From the last tableau: x₁ = 2, x₂ = 6, slacks (x₃, x₄, x₅) = (2, 0, 0). Check against the original constraints: x₁ = 2 ≤ 4 (two units unused ✓), 2x₂ = 12 ≤ 12 (tight ✓), 3x₁ + 2x₂ = 6 + 12 = 18 ≤ 18 (tight ✓), and z = 3·2 + 5·6 = 36 matches the tableau's RHS. A tableau that fails this check contains an arithmetic error — always close the loop.

#### Example 2: Unboundedness, detected

Maximise z = x₂ subject to −x₁ + x₂ ≤ 1, x ≥ 0, with slack s: −x₁ + x₂ + s = 1. Initial BFS: x₁ = 0, x₂ = 0, s = 1. Let x₁ enter (any improving or neutral direction will do to demonstrate): its column has entry −1 in the constraint row, so no positive entry exists — the ratio test has no candidate. The reason is visible: rewriting, x₂ = 1 + x₁ − s, so raising x₁ raises x₂ without limit along the feasible ray. Simplex reports unbounded exactly when the geometry deserves it.

#### Example 3: A ratio tie

Maximise x₁ + x₂ subject to x₁ ≤ 1, x₂ ≤ 1, x₁ + x₂ ≤ 2. After one pivot the point (1, 1) is optimal and the third constraint has slack — but pivot into it from (0, 0) via x₁ first: ratios from rows one and three are both 1. Either leaving choice is legal; both lead to the same vertex (1, 0), one basis or the other. A tie means the pivot step may have zero length; it does not mean an error was made.

## Common Misconceptions

- **"Simplex checks every vertex."** It walks adjacent vertices in improving directions and stops at the first with no improving edge — usually a tiny fraction of the vertices. Worst-case exponential behaviour exists, but is a pathology, not the norm.
- **"Most negative coefficient is mandatory."** It is a rule of thumb that often cuts pivots; any negative coefficient is a legal entering choice, and the final optimum is the same regardless.
- **"A negative number in the body of the tableau is an error."** Only the z-row's signs carry optimality information; constraint-row negatives merely encode geometry (Example 2's −1 is the reason no cap exists).
- **"Degeneracy means the problem is broken."** It means more constraints meet at a vertex than the minimum; the model is fine, the step may just be zero-length, and cycling in real data is almost never observed.
- **"The simplex answer depends on the tie-breaking."** Different pivot rules may visit different vertices, but a bounded LP's optimal value is a property of the problem, not of the path.

## Connections

The method is Gaussian elimination guided by geometry — linear algebra from Semester 5 doing the arithmetic, Lesson 1's corner-point property doing the navigation. The final z-row hides Lesson 3's dual solution: the slack coefficients (0, 3/2, 1) are the shadow prices, and "no negative reduced cost" is secretly weak duality going tight. Degeneracy is the algebraic twin of more-than-n constraints meeting at one vertex; Lesson 8 will see the same near-tangencies as the reason sensitivity ranges can collapse to a point. And the whole tableau machinery — bases, pivots, ratio tests — reappears in Lesson 4's network simplex and Lesson 7's branch-and-bound, where LPs are solved again and again inside a tree search.

## Quick Check

1. In the initial tableau, why does x₂ enter rather than x₁? *(Its z-row coefficient is −5, more negative than −3; each unit of x₂ improves z by 5 versus 3 for x₁.)*
2. At the first pivot, why do only two rows offer ratios? *(Row x₃ has zero entry in the x₂ column — x₃ is unaffected as x₂ grows — so it imposes no cap; 12/2 = 6 beats 18/2 = 9.)*
3. State the optimality criterion for a maximisation tableau. *(Every z-row coefficient ≥ 0; then no feasible edge improves z.)*
4. What do the z-row entries 3/2 and 1 above the slack columns x₄, x₅ mean? *(The marginal worth of one more unit of resources B and C — shadow prices, 1.5 and 1; resource A has slack and price 0.)*
5. Give the tableau signature of unboundedness and of multiple optima. *(Unbounded: entering column has no positive entry. Multiple optima: a non-basic variable with zero z-row coefficient in the final tableau.)*

## Takeaway

Simplex is the corner-point property running as an algorithm: hold a vertex in a tableau, price each outgoing edge by its reduced cost, slide along an improving one as far as feasibility allows, repeat. The two tests — most negative reduced cost to enter, minimum ratio to leave — are all the machinery, and the final tableau reports not just the optimum (2, 6), z = 36, but the prices of the resources that made it binding. Next lesson extracts those prices properly: the dual problem, weak and strong duality, and the economics hiding in the z-row.
