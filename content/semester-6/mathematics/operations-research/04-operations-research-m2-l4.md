***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: operations-research
courseName: Operations Research (Math Elective I, C)
moduleId: operations-research-module-2
moduleName: Networks and Project Scheduling
lessonId: operations-research-m2-l4
lessonName: Transportation and Assignment Problems
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - operations-research-m1-l3
learningObjectives:
  - Formulate balanced transportation problems and construct an initial basic feasible solution by the north-west corner rule.
  - Test optimality with the MODI multiplier method and improve with stepping-stone loops until optimal.
  - Solve assignment problems with the Hungarian method and interpret its row-column reductions.
concepts:
  - Transportation problem
  - North-west corner rule
  - MODI method
  - Stepping-stone loop
  - Hungarian method
tags:
  - mathematics
  - operations-research
  - network-optimisation
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Transportation and Assignment Problems

## Overview

Some linear programmes have so much structure that generic simplex wastes it. The **transportation problem** ships one commodity from several sources to several destinations at minimum cost; the **assignment problem** matches agents to tasks one-to-one. Both are LPs, both have constraint matrices so regular that basic solutions are automatically integral, and both have bespoke algorithms — stepping-stone/MODI and the Hungarian method — that are faster and more transparent than a tableau ever would be. This lesson develops both from first principles on small instances worked to certified optimality, and names the property — total unimodularity — that makes their integer answers come free.

## Learning Path

1. **The transportation model:** supplies, demands, balance, and the cost table.
2. **A starting solution:** the north-west corner rule and why it produces exactly m + n − 1 basic cells.
3. **Optimality testing:** MODI multipliers u_i, v_j and the reduced costs of non-basic cells.
4. **Improvement:** the stepping-stone loop, the θ-shift, and iteration to optimality.
5. **The assignment problem:** the Hungarian method — reductions, line covers, and matching.

## Core Explanation

### The transportation model

m sources with supplies s_i, n destinations with demands d_j, unit shipping cost c_ij on route (i, j). Choose flows x_ij ≥ 0 to minimise Σ c_ij x_ij subject to Σ_j x_ij = s_i for each source and Σ_i x_ij = d_j for each destination. The system is consistent only if **balanced**: Σ s_i = Σ d_j (an unbalanced instance gets a dummy source or destination with zero costs to absorb the difference). This is an LP — each flow a variable, each row and column sum a constraint — but one with a special reward: the constraint matrix is **totally unimodular**, so every basic feasible solution has integer flows whenever supplies and demands are integers. Shipping problems get integral answers without asking.

### Starting: the north-west corner rule

Fill the cost table greedily by position, ignoring costs entirely: start at cell (1,1), allocate the minimum of remaining supply and demand, exhaust one of them, move right if the destination is filled and down if the source is, and repeat. The result is a basic feasible solution with exactly m + n − 1 occupied cells (fewer only under degeneracy, when a step exhausts a row and column simultaneously — then place a zero in one of the cells to keep the count). It is usually far from optimal; its only job is to hand MODI a basis.

### MODI: pricing the basis

For the occupied cells, solve the multiplier equations u_i + v_j = c_ij — m + n − 1 equations in m + n unknowns, so fix u₁ = 0 and sweep. For each *unoccupied* cell compute the reduced cost Δ_ij = c_ij − u_i − v_j. Optimality criterion: **all Δ_ij ≥ 0** (this is the transportation twin of Lesson 2's z-row criterion, and it comes from the same duality — the u and v are the dual potentials). If some Δ_ij < 0, entering that cell lowers the total cost.

### Stepping-stone improvement

Take the most negative cell. Because the occupied cells form a spanning structure, there is a unique closed **loop** starting at it, alternating horizontal and vertical moves through occupied cells. Mark the loop +, −, +, − from the entering cell; shift θ = min of the − cells around the loop. Cost changes by θ · Δ_ij — down, since Δ_ij < 0. Re-price with MODI and repeat until all Δ_ij ≥ 0.

The running instance, verified end to end: supplies (10, 15, 15), demands (8, 16, 16), costs

| | D₁ | D₂ | D₃ | supply |
|---|---|---|---|---|
| S₁ | 2 | 3 | 5 | 10 |
| S₂ | 4 | 1 | 8 | 15 |
| S₃ | 7 | 6 | 2 | 15 |
| demand | 8 | 16 | 16 | |

North-west corner allocates (1,1) = 8, (1,2) = 2, (2,2) = 14, (2,3) = 1, (3,3) = 15 — five cells = m + n − 1 ✓ — at cost 16 + 6 + 14 + 8 + 30 = 74. MODI with u₁ = 0 gives v₁ = 2, v₂ = 3, u₂ = −2, v₃ = 10, u₃ = −8; the reduced costs are Δ₁₃ = 5 − 0 − 10 = −5, Δ₂₁ = 4 − (−2) − 2 = 4, Δ₃₁ = 7 − (−8) − 2 = 13, Δ₃₂ = 6 − (−8) − 3 = 11. Cell (1,3) enters. Its loop is (1,3) → (2,3) → (2,2) → (1,2) → (1,3), with signs +, −, +, − starting at the entering cell; θ = min(1, 2) = 1. New allocation: (1,1) = 8, (1,2) = 1, (1,3) = 1, (2,2) = 15, (3,3) = 15, cost 16 + 3 + 5 + 15 + 30 = 69. Re-pricing: u₁ = 0 gives v₁ = 2, v₂ = 3, v₃ = 5, u₂ = −2, u₃ = −3, and the four non-basic reduced costs are Δ₂₁ = 4, Δ₂₃ = 5, Δ₃₁ = 8, Δ₃₂ = 6 — all ≥ 0, so 69 is certified optimal, saving 5 against the corner start.

### The assignment problem

n agents, n tasks, cost c_ij of assigning agent i to task j; choose a one-to-one matching of minimum total cost. It is a transportation problem with all supplies and demands equal to 1 — and total unimodularity promises a 0–1 answer. The **Hungarian method** exploits this:

1. **Row reduction:** subtract each row's minimum from its row. **Column reduction:** subtract each column's minimum. These subtractions lower every complete assignment's cost by the same constant (row r's minimum is paid once by any assignment, likewise each column's), so the optimal assignment is unchanged.
2. **Cover the zeros** of the reduced matrix with a minimum number of lines (rows and columns). If n lines suffice, pick n independent zeros — a zero-cost assignment in the reduced matrix, hence an optimal assignment in the original.
3. Otherwise, let θ be the smallest *uncovered* entry; subtract θ from every uncovered cell and add θ to every cell covered twice. Return to step 2. Each round increases the number of coverable zeros; the method terminates.

The verification in Example 2 below runs the full method on a 3 × 3 instance.

## Key Ideas

- Transportation LPs are balanced flows through a cost table; total unimodularity guarantees integral optimal shipments from integer data.
- North-west corner ignores costs but builds a legal basis of exactly m + n − 1 cells — a starting point, never an answer.
- MODI multipliers are the dual potentials; Δ_ij = c_ij − u_i − v_j ≥ 0 for all non-basic cells is the optimality certificate.
- Improvement rides a unique alternating loop; the θ-shift lowers cost by exactly −θΔ_ij, and finitely many rounds reach the certificate.
- The Hungarian method works because row and column reductions shift all assignments equally, and line covers detect when zero-cost matching is possible.

## Worked Examples

#### Example 1: Reading the optimal shipment

The certified solution above ships 8 units S₁→D₁, 1 unit S₁→D₂, 1 unit S₁→D₃, 15 units S₂→D₂, 15 units S₃→D₃, at cost 69. Sanity check the margins: S₁ ships 8 + 1 + 1 = 10 ✓, S₂ ships 15 ✓, S₃ ships 15 ✓; D₁ receives 8 ✓, D₂ receives 1 + 15 = 16 ✓, D₃ receives 1 + 15 = 16 ✓. The cheap route S₂→D₂ (cost 1) carries the heavy flow, and the expensive routes are avoided precisely where MODI's prices said so: Δ₂₃ = 5 means forcing a unit onto S₂→D₃ would cost 5 more than the current plan.

#### Example 2: Hungarian method, complete

Cost matrix: agents A, B, C against tasks 1, 2, 3 with rows (4, 1, 3), (2, 0, 5), (3, 2, 2). Row reductions (subtract 1, 0, 2): rows (3, 0, 2), (2, 0, 5), (1, 0, 0). Column reductions (subtract 1, 0, 0 from the columns): matrix (2, 0, 2), (1, 0, 5), (0, 0, 0). Covering zeros: row C and column 2 cover all of them — only 2 lines, less than 3, so not yet matchable. Smallest uncovered entry is 1 (cells A1, A3, B1, B3): subtract 1 from those and add 1 to the doubly covered cell (C, 2), giving (1, 0, 1), (0, 0, 4), (0, 1, 0). Now column 1, column 2 and row C cover all zeros — 3 lines. Pick independent zeros: A's only zero is task 2; then B takes task 1 and C takes task 3. Original cost: c_A2 + c_B1 + c_C3 = 1 + 2 + 2 = 5. Exhaustively, the six matchings cost 6, 11, 5, 9, 7, 6 — so 5 is optimal and unique.

#### Example 3: Unbalanced supply

If the table above had demand (8, 16, 20) — total 44 against supply 40 — add a dummy source S₄ with supply 4 and zero costs to every destination. Solve the balanced 4 × 3 problem; whatever the dummy "ships" is unmet demand in the real problem, identified by destination rather than discovered afterwards. Symmetrically, excess supply gets a dummy destination. Balance is not a restriction; it is a notational discipline.

## Common Misconceptions

- **"North-west corner is a heuristic answer."** It is only a basis — deliberately cost-blind; judging a shipment by its corner cost (74 here) overstates the truth (69) by a full 7%.
- **"MODI needs all cells priced."** Only the non-basic ones; the multipliers exist precisely because the basis equations determine u and v up to one free constant.
- **"The improvement loop is one of many."** For a non-degenerate basis the loop through occupied cells is unique; there is no choice to make, only to trace.
- **"Assignment needs the full transportation machinery."** The Hungarian method is faster and cleaner for square one-to-one matching; rectangular or unequal-load variants reduce to it by dummy rows with zero costs.
- **"Fractional flows are the LP's default."** Not here — total unimodularity makes integrality automatic, a special gift of network matrices that general integer programming (Lesson 7) painfully lacks.

## Connections

The transportation tableau is simplex wearing a disguise: occupied cells are the basis, MODI multipliers are the dual vector y* = c_B B⁻¹ of Lesson 3, reduced costs Δ_ij are z_j − c_j, and the loop pivot is a tableau pivot. The same dual potentials reappear in Lesson 5 as shortest-path distances — both are systems of prices making every used edge tight. Total unimodularity, the reason integrality is free here, is the sharp contrast motivating Lesson 7's branch-and-bound, and it also explains why max-flow answers come out integral next lesson. Practically, assignment models schedule anything matched one-to-one — exam halls to invigilators, detectors to beamlines — and transportation models are the single-commodity core of logistics.

## Quick Check

1. Why must a transportation problem be balanced, and how do you enforce it? *(Row sums equal column sums for consistency; add a dummy source or destination with zero costs to absorb the difference.)*
2. How many occupied cells should a non-degenerate starting solution have, and why? *(m + n − 1 — the rank of the balance equations, equivalently the size of a spanning tree on m + n nodes.)*
3. State the MODI optimality criterion. *(With u_i + v_j = c_ij on basic cells, every non-basic reduced cost c_ij − u_i − v_j ≥ 0.)*
4. In the worked instance, what is the saving from corner to optimum, and which cell caused it? *(74 → 69, a saving of 5, driven by cell (1,3) with reduced cost −5 and loop shift θ = 1.)*
5. Why do the Hungarian method's row reductions not change the optimal assignment? *(Each row minimum is subtracted exactly once from every complete assignment, shifting all totals by the same constant.)*

## Takeaway

Structure earns shortcuts: the transportation and assignment problems are LPs whose regularity delivers integral answers automatically and bespoke algorithms that make simplex tableaus unnecessary. North-west corner starts, MODI certifies, the stepping-stone loop improves — and the Hungarian method reduces matching to a game of covering zeros. The pattern of the module is now visible a second time: a primal structure, its dual prices, and a pivot rule connecting them. Lesson 5 takes the same trio onto general networks: shortest paths and max-flow min-cut.
