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
lessonId: operations-research-m2-l5
lessonName: Shortest Paths and Max-Flow Min-Cut
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - operations-research-m2-l4
learningObjectives:
  - Execute Dijkstra's algorithm with a permanent/temporary label table and recover the shortest path by backtracking.
  - Run the Ford–Fulkerson augmenting-path method on a capacity network and compute a maximum flow.
  - State and apply the max-flow min-cut theorem, exhibiting a cut whose capacity certifies optimality.
concepts:
  - Shortest path
  - Dijkstra's algorithm
  - Residual network
  - Augmenting path
  - Minimum cut
tags:
  - mathematics
  - operations-research
  - network-flows
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Shortest Paths and Max-Flow Min-Cut

## Overview

Networks strip optimisation to its combinatorial skeleton: nodes, arcs, and one number per arc — a length or a capacity. Two questions dominate. **Shortest path:** route one traveller from source to destination at minimum total length; Dijkstra's algorithm answers it by growing a frontier of permanently settled distances. **Maximum flow:** push as much commodity as possible from source to sink through capacity-limited arcs; the Ford–Fulkerson method answers it by repeatedly finding room to push, and the max-flow min-cut theorem certifies the answer with a single bottleneck cut. Both algorithms carry their own proof of correctness in their termination conditions — and both are, underneath, the primal–dual pattern of Lesson 3 once more: distances and cuts are the price systems of their networks.

## Learning Path

1. **Network language:** directed graphs, lengths, capacities, paths and cuts.
2. **Dijkstra's algorithm:** permanent and temporary labels, the settle-and-update loop, backtracking.
3. **Why Dijkstra works:** the greedy permanence argument (non-negative lengths).
4. **Flows and residuals:** conservation, capacity constraints, augmenting paths.
5. **Ford–Fulkerson and the min-cut certificate:** the theorem and how to exhibit the cut.

## Core Explanation

### Dijkstra's algorithm

Given a network with non-negative arc lengths and a source s, maintain for every node a tentative distance d(v) and a predecessor. Repeat: make permanent the temporary node with smallest d(v) — call it settled; then for each unsettled neighbour w, update d(w) ← min(d(w), d(v) + length(v, w)). When the destination settles, read the path backwards through predecessors. The invariant that powers everything: **when v settles, d(v) is the true shortest distance to v**. Proof: any shorter path would have to enter the settled set through some unsettled node u with d(u) ≤ that path's length < d(v) — but v was chosen with the smallest temporary label, contradiction. Non-negativity is essential: a negative arc could make a "settled" node improvable later (negative lengths require Bellman–Ford instead).

### Flows, conservation and residuals

A flow assigns f(uv) to each arc with 0 ≤ f(uv) ≤ c(uv), satisfying **conservation** at every node except source s and sink t: inflow equals outflow. The **value** of the flow is the net outflow of s. The **residual capacity** of arc uv is c(uv) − f(uv) — room to push forward — and the residual network also carries reverse arcs vu with capacity f(uv): room to *undo* flow already sent. Reversal is the algorithmic expression of a physical truth: good routing revises earlier choices.

### Ford–Fulkerson

Start with any flow (zero will do). While the residual network contains an s–t path — an **augmenting path** — push along it the minimum residual capacity on the path, updating forward arcs by +θ and reverse arcs by −θ. Each augmentation strictly increases the flow value; with integer capacities every θ ≥ 1, so termination is guaranteed. When no augmenting path remains, the flow is maximum, certified as follows.

**Max-flow min-cut theorem.** A cut (S, T) is a partition with s ∈ S, t ∈ T; its capacity is the sum of c(uv) over arcs from S to T. Every cut is an upper bound on every flow (all flow must cross it), and when the algorithm stalls, taking S = {nodes reachable from s in the residual network} gives a cut whose arcs from S to T are all saturated and whose arcs from T to S all carry zero flow — so flow value equals cut capacity. Bound met; both are optimal. This is strong duality for networks: the max-flow LP's dual is exactly the min-cut LP, and integrality makes both answers whole numbers.

The worked instances — Dijkstra on a six-node network and Ford–Fulkerson on the classical six-node capacity network — are in the examples below, run to completion with every label and augmentation shown.

## Key Ideas

- Dijkstra settles nodes greedily by smallest tentative distance; correctness is the frontier argument, and it needs non-negative lengths.
- Permanent labels are never revised; the predecessor pointers accumulated along the way reconstruct the path, not just its length.
- A flow respects capacity and conservation; its value is measured at the source alone.
- Residual networks encode both pushing and undoing; augmenting paths exist exactly while the flow is improvable.
- Max-flow min-cut: the bottleneck cut bounds all flows, the stalled residual network exhibits a cut that meets the bound — a self-certifying algorithm.

## Worked Examples

#### Example 1: Dijkstra, end to end

Nodes A, B, C, D, E, T; arcs (lengths): A→B 4, A→C 2, C→B 1, B→D 5, C→D 8, C→E 10, D→E 2, D→T 6, E→T 3.

| Step | Settle | Labels after settling (node: distance) |
|---|---|---|
| 1 | A (0) | B:4, C:2 |
| 2 | C (2) | B:3 (via C), D:10, E:12 |
| 3 | B (3) | D:8 (via B) |
| 4 | D (8) | E:10 (via D), T:14 |
| 5 | E (10) | T:13 (via E) |
| 6 | T (13) | done |

Backtracking predecessors: T ← E ← D ← B ← C ← A, so the shortest path is A → C → B → D → E → T of length 2 + 1 + 5 + 2 + 3 = 13. Two lessons in one trace: B's label improved from 4 to 3 after C settled (temporary labels are exactly for revision), and the direct-looking route through C→E lost to the detour via D.

#### Example 2: Max flow on the classical network

Nodes s, 1, 2, 3, 4, t; capacities: s→1: 16, s→2: 13, 1→2: 10, 2→1: 4, 1→3: 12, 3→2: 9, 2→4: 14, 4→3: 7, 3→t: 20, 4→t: 4. One augmentation sequence:

1. Path s→1→3→t, push 12 (bottleneck min(16, 12, 20) = 12).
2. Path s→2→4→t, push 4 (bottleneck 4→t).
3. Path s→2→4→3→t, push 7 (bottleneck 4→3; residuals allow it: 2→4 has 14 − 4 = 10 left, 3→t has 20 − 12 = 8 left).

Total pushed: 12 + 4 + 7 = 23. The resulting arc flows — s→1: 12, s→2: 11, 1→3: 12, 2→4: 11, 4→t: 4, 4→3: 7, 3→t: 19 — satisfy conservation everywhere: node 1 passes on its 12; node 2 passes on its 11; node 4 receives 11 and sends 4 + 7; node 3 receives 12 + 7 = 19 and sends 19 to t. The certificate: in the residual network, s reaches {s, 1, 2, 4} (residuals s→1: 4, s→2: 2, 1→2: 10, 2→1: 4, 2→4: 3) but not 3 or t — arcs 1→3, 4→3 and 4→t are saturated. The cut ({s, 1, 2, 4}, {3, t}) therefore has capacity c(1→3) + c(4→3) + c(4→t) = 12 + 7 + 4 = 23. Flow value = cut capacity: **23 is maximum, proved**.

#### Example 3: Where augmenting paths matter

A greedy sequence can route flow badly and then need revision: in the network above, if step 2 had pushed s→2→4→t with 4 but an earlier choice had filled 2→4 completely via a worse path, progress would stall below 23 — until a residual *reverse* arc lets a later augmentation reroute earlier flow. The reverse arcs are not decoration; they are the mechanism by which Ford–Fulkerson corrects suboptimal routing choices. Choosing shortest augmenting paths (Edmonds–Karp) bounds the total number of augmentations by O(VE).

## Common Misconceptions

- **"Dijkstra revisits settled nodes."** Never — settling is permanent by the frontier argument; what gets revised are the temporary labels of unsettled neighbours.
- **"Negative arcs are fine if small."** Any negative length breaks the permanence argument; Dijkstra's certificate is void, and Bellman–Ford (or reweighting) is required.
- **"Max flow depends on the augmentation order."** Different orders take different numbers of steps, but the terminal value is unique — the min-cut bound it meets is a property of the network alone.
- **"The min cut is the set of saturated arcs."** Any flow saturates at least one arc in every cut; the min cut is the specific partition the stalled residual network exhibits — reachable side versus the rest.
- **"Flow travels along one path."** A flow decomposes into path-flows (and possibly cycles), but it is an edge-by-edge object; conservation, not a chosen itinerary, is the defining law.

## Connections

Dijkstra is the greedy method of Lesson 1's geometry in graph form — each settlement is a vertex of the "distance polyhedron" made permanent — and its labels are the dual potentials of the shortest-path LP, exactly as MODI multipliers were the potentials of transportation in Lesson 4. Max-flow min-cut is strong duality with integral answers: the theorem *is* the duality of the flow and cut LPs, and total unimodularity (Lesson 4's gift) guarantees the integer optimum. Lesson 6's project networks reuse the longest-path computation under the name "critical path". In the wider programme, networks model queues, data routing and even Feynman-diagram-style decompositions: whenever something conserved moves through constrained channels, this lesson applies.

## Quick Check

1. Why does Dijkstra's argument fail for negative arc lengths? *(A shorter path could enter the settled set through a node whose improvement arrives late; the frontier contradiction uses non-negativity.)*
2. Reconstruct the shortest path in Example 1 from its predecessor chain. *(T ← E ← D ← B ← C ← A gives A→C→B→D→E→T, length 13.)*
3. What are the two kinds of arcs in a residual network and what does each permit? *(Forward arcs with residual capacity c − f permit pushing more; reverse arcs with capacity f permit cancelling flow already sent.)*
4. State the max-flow min-cut theorem and identify the certificate in Example 2. *(Maximum flow value equals minimum cut capacity; the cut ({s,1,2,4}, {3,t}) of capacity 12 + 7 + 4 = 23 matches the flow of 23.)*
5. Why are integral capacities enough to guarantee Ford–Fulkerson terminates? *(Every augmentation then adds at least one unit of flow value, which is bounded by the cut capacities.)*

## Takeaway

Two networks, one message: greedy settling solves shortest paths because non-negativity makes the frontier honest, and augmenting paths solve max flow because the residual network remembers how to undo. Both terminate with a certificate — settled labels in one case, a cut equal to the flow in the other — and both certificates are the dual prices of Lesson 3 in disguise. Next lesson applies the same graph machinery to time: project networks, forward and backward passes, and the critical path.
