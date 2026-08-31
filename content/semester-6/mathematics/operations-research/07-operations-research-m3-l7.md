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
lessonId: operations-research-m3-l7
lessonName: Integer Programming and Branch-and-Bound
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - operations-research-m2-l6
learningObjectives:
  - Formulate integer and mixed-integer programmes, and explain why rounding the LP relaxation can fail — producing infeasible or suboptimal integer points.
  - Execute a complete branch-and-bound tree — LP relaxation, branching on fractional variables, bounding against the incumbent, fathoming.
  - Identify when integrality comes free via total unimodularity, making the LP relaxation exact.
concepts:
  - Integer programme
  - LP relaxation
  - Branch-and-bound
  - Incumbent and bound
  - Total unimodularity
tags:
  - mathematics
  - operations-research
  - integer-programming
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Integer Programming and Branch-and-Bound

## Overview

Divisibility was Lesson 1's quietest assumption; dropping it changes everything. When variables must be whole numbers — trucks, shifts, machines, yes/no decisions — the feasible set loses its convexity, the corner-point property dies, and simplex alone no longer decides. Yet the LP does not become useless: relaxing the integrality requirement gives a bound, and that bound powers **branch-and-bound**, a systematic tree search that partitions the integer space, solves LPs on the pieces, and prunes every piece whose bound cannot beat the best integer solution found so far. This lesson runs the full machinery on one carefully chosen instance — small enough to trace by hand, sharp enough to show why rounding fails and why the pruning works — and ends with the exception that proves the rule: network matrices, where integrality is automatic.

## Learning Path

1. **Integer programmes:** pure, mixed, and binary formulations; what integrality costs.
2. **The LP relaxation and its betrayals:** rounding can be infeasible, and even when feasible, suboptimal.
3. **Branch-and-bound:** the tree, the bound, the incumbent, and the three fathoming rules.
4. **A complete trace** on a two-variable instance.
5. **When the LP is enough:** total unimodularity and the network connection.

## Core Explanation

### Integer programmes

An **integer programme** (IP) is an LP whose variables are constrained to be integers; a **mixed** IP allows some variables continuous; **binary** variables x ∈ {0, 1} encode decisions — open/close, select/reject. Most of the expressive power comes from binaries: fixed costs, logical conditions ("if activity j runs, then at least one safety system is armed"), and sequencing all linearise with binary variables and a few auxiliary constraints. The price of this power is complexity: IP is NP-hard in general, and no polynomial-time algorithm is known. Solution methods are therefore *searches with intelligence*, not closed procedures.

### The relaxation and why rounding betrays

The **LP relaxation** drops the integrality constraints. Its optimum bounds the IP's (for a max: relaxation ≥ IP, since it optimises over a superset of feasible points). The tempting move — solve the relaxation, round — fails in two independent ways. It can land **outside** the feasible set: on a tight constraint boundary, the nearest lattice point may violate it. And even when the rounded point is feasible, it can be **suboptimal**: the true integer optimum may sit far from the relaxation's vertex, in a direction rounding never explores. The worked instance below demonstrates both failures on a single problem.

### Branch-and-bound

The algorithm maintains an **incumbent** — the best integer-feasible solution found — and a list of live **nodes**, each an LP over extra branching constraints:

1. **Bound:** solve the node's LP relaxation. Its value bounds every integer solution in that node's region.
2. **Fathom** the node if any of three conditions holds: (a) the LP is infeasible; (b) the LP solution is integral — update the incumbent if it improves; (c) the LP value ≤ incumbent — no integer point here can do better.
3. Otherwise pick a fractional variable x_j with value x_j*, and **branch**: create two child nodes with x_j ≤ ⌊x_j*⌋ and x_j ≥ ⌈x_j*⌉. Together they cover exactly the integer points of the parent; neither adds or loses any.

Each branch partitions; each fathom certifies. When the node list empties, the incumbent is optimal — not by luck, but because every region of the integer space was either solved exactly or proved unable to improve on it. The bound does the pruning: a good incumbent early makes later fathoming cheap, which is why heuristics often run before the tree search begins.

### The geometry

Relaxation feasible region: a polyhedron. IP feasible set: the lattice points inside it. Branching on x_j ≤ k slices the polyhedron by a hyperplane that passes *between* two lattice columns — no integer point lies on the cut itself, so the partition is clean. Fathoming by bound says the slice's LP peak is below the incumbent: geometrically, the whole slice sits under the objective level already achieved. Branch-and-bound is thus the corner-point philosophy of Lesson 1 extended: vertices still govern each LP, while the tree governs the lattice.

## Key Ideas

- Integrality destroys convexity; the relaxation survives as an upper bound (for max) and as the engine of search.
- Rounding the relaxation is not an algorithm: it can violate constraints or miss the optimum entirely — the worked instance shows both.
- Branch-and-bound = partition (branch on fractional variables) + certificate (fathom by infeasibility, integrality, or bound versus incumbent).
- The incumbent converts pruning from guesswork into proof; termination certifies optimality, not just feasibility.
- Total unimodularity is the escape clause: for network-type matrices the relaxation is already integral, and no tree is needed.

## Worked Examples

#### Example 1: Rounding, doubly betrayed

Maximise z = 5x₁ + 8x₂ subject to x₁ + x₂ ≤ 6, 5x₁ + 9x₂ ≤ 45, x₁, x₂ ≥ 0 and integer. The LP relaxation's optimum is the intersection x₁ + x₂ = 6 with 5x₁ + 9x₂ = 45: subtracting 5·(first) from the second gives 4x₂ = 15, so x₂ = 3.75, x₁ = 2.25, value z = 11.25 + 30 = 41.25. Now round. Nearest lattice point (2, 4): check constraint 2 — 10 + 36 = 46 > 45, **infeasible**. Feasible neighbours: (3, 3) gives 15 + 27 = 42 ≤ 45 ✓ with z = 15 + 24 = 39; (1, 4) gives 5 + 36 = 41 ≤ 45 ✓ with z = 5 + 32 = 37. So rounding suggests 39. But the true integer optimum is **(0, 5)**: constraints give 5 ≤ 6 and 45 ≤ 45, with z = 40 — better than any rounded neighbour, found by no rounding rule. Rounding betrayed twice: once into infeasibility, once into suboptimality.

#### Example 2: The branch-and-bound tree, complete

Root: relaxation value 41.25 at (2.25, 3.75); no integer point yet. **Branch on x₂** (the more fractional-looking choice; either works):

- **Node x₂ ≤ 3.** Relaxation: with x₂ = 3, the binding constraints give x₁ = min(3, (45 − 27)/5) = min(3, 3.6) = 3 — integral. Value 15 + 24 = 39. Fathom (integrality): **incumbent = 39**.
- **Node x₂ ≥ 4.** Relaxation optimum at (1.8, 4): constraint 2 binds (5x₁ + 36 = 45 ⟹ x₁ = 9/5), value 9 + 32 = 41 > 39, fractional — branch on x₁.
  - **Node x₂ ≥ 4, x₁ ≤ 1.** Relaxation: x₁ = 1, x₂ = (45 − 5)/9 = 40/9 ≈ 4.44, value 5 + 320/9 = 365/9 ≈ 40.6 > 39, fractional — branch on x₂.
    - **…, x₂ ≤ 4:** solution (1, 4), integral, value 37 ≤ 39 — fathom (bound).
    - **…, x₂ ≥ 5:** solution (0, 5) — constraint 2 forces x₁ = 0 since 9·5 = 45 — integral, value 40 > 39. **Incumbent = 40.**
  - **Node x₂ ≥ 4, x₁ ≥ 2.** With x₁ + x₂ ≤ 6 and x₂ ≥ 4 we get x₁ ≤ 2, so x₁ = 2, x₂ = 4; but 10 + 36 = 46 > 45 — **infeasible**, fathom.

Node list empty. Certified optimum: **(0, 5), z = 40** — matching Example 1's true answer, this time with proof. Six LPs (root, five nodes) decided the instance; the bound pruned what the lattice hid.

#### Example 3: When no tree is needed

Max-flow (Lesson 5) and transportation (Lesson 4) are IPs in disguise — flows and shipments should be integral — yet their LPs return integer answers automatically. The reason is **total unimodularity**: their constraint matrices have every square subdeterminant in {−1, 0, 1}, forcing every vertex of the relaxation to be integral. For such models, the relaxation *is* the IP; branch-and-bound would solve the root and stop. Recognising total unimodularity converts an NP-hard problem into a polynomial one, and it is the first thing to check before reaching for the tree.

## Common Misconceptions

- **"Round the LP, done."** Example 1 is the standing refutation: rounding can be infeasible, and even feasible rounding can be suboptimal by a margin no local search reveals.
- **"Branch-and-bound is brute force."** Enumeration would list every lattice point; the bound fathoms entire regions without visiting them — above, the node x₁ ≥ 2 was dismissed by one infeasible LP, and x₂ ≤ 4 by one comparison.
- **"Any fractional variable is equally good to branch on."** Legally yes, but the choice controls tree size; branching on variables central to the combinatorics (or with strong heuristics) keeps the tree shallow.
- **"The incumbent is just a warm start."** It is the pruning standard — every bound fathom is measured against it — and finding a good one early can collapse the tree by orders of magnitude.
- **"Integrality is always expensive."** Network models, assignment, transportation: total unimodularity makes integrality free. Ask the matrix before assuming the hardness.

## Connections

Branch-and-bound is weak duality run as a search: each node's LP bound is Lesson 3's certificate restricted to a slice of the lattice, and fathoming by bound is exactly "no feasible point here can beat the incumbent". The relaxation hierarchy generalises far — Lagrangian relaxation, cutting planes, semidefinite bounds — but the logic of bound-then-prune is constant. Lesson 8's sensitivity analysis meets the same tree from a different direction: how much can data move before the optimal branch changes? Within the programme, binary variables model detector trigger logic and mode selection, and the total-unimodularity escape hatch is why the network lessons never mentioned integrality anxiety. In computer science terms, this is the meeting point of optimisation and combinatorial search; in physics terms, it is the ground-state problem of a discrete system, LP providing the variational bound.

## Quick Check

1. Why does the LP relaxation bound the integer optimum from above (for a max problem)? *(It optimises over a superset of the integer-feasible points; the best over more options cannot be worse.)*
2. In Example 1, why is (2, 4) unusable, and what value does rounding wrongly suggest? *(5·2 + 9·4 = 46 > 45, infeasible; feasible rounding suggests 39 at (3, 3), below the true 40 at (0, 5).)*
3. State the three fathoming conditions. *(Node LP infeasible; node LP integral (update incumbent); node LP value ≤ incumbent.)*
4. Why do the two branches x_j ≤ ⌊x_j*⌋ and x_j ≥ ⌈x_j*⌉ neither lose nor duplicate integer points? *(Every integer is ≤ the floor or ≥ the ceiling of x_j*, and no integer lies strictly between them.)*
5. What property lets max-flow skip branch-and-bound entirely? *(Total unimodularity of the network constraint matrix — every relaxation vertex is integral.)*

## Takeaway

Integer constraints trade convexity for expressiveness, and branch-and-bound pays the bill with certificates: each node's LP relaxation bounds its region, the incumbent records the best proven integer solution, and fathoming closes regions without exploring them. The full trace above — root 41.25, incumbent 39, final optimum (0, 5) at 40 with every node fathomed — is the template for every serious discrete optimisation run. Next lesson returns to continuous LPs with a different question: not how to solve them once, but how long the answer stays true as the data moves.
