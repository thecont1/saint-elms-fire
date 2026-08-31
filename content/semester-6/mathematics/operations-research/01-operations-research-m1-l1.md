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
lessonId: operations-research-m1-l1
lessonName: Linear Programming — Formulation and the Geometry of Optima
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - linear-algebra
  - differential-calculus
learningObjectives:
  - Translate a resource-allocation problem into a linear programme in standard or canonical form, identifying decision variables, constraints and the objective.
  - Explain why the feasible region is a convex polyhedron and why an optimal value, if attained, is attained at a vertex.
  - Solve two-variable linear programmes graphically and classify the exceptional cases — infeasibility, unboundedness, multiple optima.
concepts:
  - Linear programme
  - Feasible region
  - Convex polyhedron
  - Vertex and corner-point property
  - Special cases
tags:
  - mathematics
  - operations-research
  - linear-programming
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Linear Programming — Formulation and the Geometry of Optima

## Overview

Operations research begins with one deceptively simple question: given limited resources and competing uses for them, what is the best you can do? Linear programming (LP) answers this in the case where everything — objective and constraints alike — is linear. That restriction buys an extraordinary amount of structure: the feasible set is a polyhedron, a linear function cannot peak in its interior, and the search for an optimum reduces to a finite hunt along corners. This lesson does no algorithms yet. It sets the ground: how to formulate an LP honestly, what the feasible region looks like, and why vertices are where optima live. Every later method — simplex in Lesson 2, duality in Lesson 3, sensitivity in Lesson 8 — is an exploitation of this geometry.

## Learning Path

1. **Anatomy of an LP:** decision variables, objective, constraints, non-negativity; canonical and standard forms.
2. **Formulation discipline:** units, proportionality, divisibility — the assumptions a model silently makes.
3. **The feasible region:** intersection of halfspaces, convexity of the polyhedron.
4. **Why vertices matter:** the corner-point property, proved by contradiction from linearity.
5. **Graphical solution** in two variables and the three exceptional cases.

## Core Explanation

### Anatomy of a linear programme

An LP chooses values of decision variables x₁, …, x_n to maximise (or minimise) a linear objective c₁x₁ + ⋯ + c_nx_n subject to linear constraints and non-negativity. The running example of this module is a production problem with two products and three constrained resources:

Maximise z = 3x₁ + 5x₂ subject to x₁ ≤ 4, 2x₂ ≤ 12, 3x₁ + 2x₂ ≤ 18, x₁, x₂ ≥ 0.

Read it as: product 1 earns 3 per unit, product 2 earns 5; resource A caps x₁ at 4, resource B caps 2x₂ at 12, resource C is shared as 3x₁ + 2x₂ ≤ 18. Two forms recur. **Canonical form** uses inequalities: maximise c·x subject to Ax ≤ b, x ≥ 0 — natural for "resources consumed". **Standard form** uses equalities: maximise c·x subject to Ax = b, x ≥ 0 — natural for computation, reached by adding a non-negative **slack variable** to each ≤ constraint. Here: x₁ + x₃ = 4, 2x₂ + x₄ = 12, 3x₁ + 2x₂ + x₅ = 18, all variables ≥ 0. The slack x₄, for instance, is the unused amount of resource B — a quantity with operational meaning, not an algebraic trick.

### What formulation assumes

Writing "profit = 3x₁" commits to **proportionality** (profit per unit constant, no bulk discounts), **additivity** (products do not interact), **divisibility** (fractional units allowed) and **certainty** (coefficients fixed). Each is a modelling decision. Divisibility failure — you cannot ship half a truck — is exactly what forces integer programming in Lesson 7; the LP then survives as its *relaxation*, and its answer bounds the true one.

### The feasible region and its convexity

The feasible region is the intersection of the halfspaces defined by the constraints — here a pentagon with vertices (0,0), (4,0), (4,3), (2,6), (0,6). Intersections of halfspaces are always **convex**: with x and y feasible, every point of the segment λx + (1−λ)y, 0 ≤ λ ≤ 1, satisfies every constraint, because each linear constraint evaluates linearly along the segment and both endpoints obey it. So the feasible region is a convex polyhedron; when bounded it is a polytope. Convexity is the reason local and global optimality coincide in LP — there are no hidden valleys, because the region has no indentations.

### The corner-point property

**Theorem.** If an LP attains a finite optimum, some vertex of the feasible region is optimal.

Proof sketch: suppose x* is optimal but not a vertex. Then x* lies on a segment between distinct feasible points u, v. By linearity, z(x*) = λz(u) + (1−λ)z(v) is a weighted average of z(u) and z(v), so at least one endpoint has z-value ≥ z(x*) — equality throughout, or improvement. Slide to that endpoint; if it is still not a vertex, repeat. The region has finitely many vertices and z cannot decrease along the slides, so the process ends at an optimal vertex. The practical consequence is enormous: optimising over infinitely many feasible points reduces to searching finitely many vertices. Simplex (Lesson 2) is precisely an organised walk along them.

### Graphical solution and exceptional cases

In two variables, draw the boundary line of each constraint, keep the feasible side, and read off the polygon. To optimise, slide the level line 3x₁ + 5x₂ = t outward: the last point touched is optimal. For the running example the last contact is the vertex (2,6) — intersection of 2x₂ = 12 with 3x₁ + 2x₂ = 18, i.e. x₂ = 6 and 3x₁ = 18 − 12 — giving z = 36; the other vertices yield 0, 12, 30 and 27 (Example 1). The exceptions worth knowing by name: **infeasible** (the halfspaces have empty intersection — no point satisfies all constraints; the model contradicts itself), **unbounded** (a feasible ray along which z → ∞ for a max; some limiting constraint is missing), and **multiple optima** (the level line lands flush on an edge; then every point of that edge is optimal). Detection by picture is immediate; detection by simplex has precise signatures, taken up next lesson.

## Key Ideas

- An LP is decision variables + linear objective + linear constraints + non-negativity; canonical form has Ax ≤ b, standard form Ax = b with slacks carrying the unused resources.
- Formulation commits to proportionality, additivity, divisibility and certainty — check each against the real system before trusting the model.
- The feasible region is a convex polyhedron: an intersection of halfspaces, hence with no indentations, hence local optima are global.
- Corner-point property: linearity pushes any optimum out to a vertex, reducing an infinite search to a finite one.
- The three pathologies — infeasible, unbounded, multiple optima — are features of the model, and each says something real about the system being modelled.

## Worked Examples

#### Example 1: The running problem, corner by corner

Vertices of the feasible pentagon: (0,0), (4,0), (0,6), (4,3) — intersection of x₁ = 4 with 3x₁ + 2x₂ = 18, giving x₂ = 3 — and (2,6) — intersection of x₂ = 6 with 3x₁ + 2x₂ = 18. Evaluating z = 3x₁ + 5x₂: 0, 12, 30, 27, 36. The optimum is (2,6) with z = 36. Note the optimum is not the vertex with the largest individual coordinate; the objective direction decides.

#### Example 2: Multiple optima

Replace the objective by z = 3x₁ + 3x₂ on the same feasible region. Then (2,6) gives 6 + 18 = 24 and (4,3) gives 12 + 9 = 21 — not equal, so try z = 3x₁ + 2x₂, parallel to the binding edge 3x₁ + 2x₂ = 18: now (2,6) gives 6 + 12 = 18 and (4,3) gives 12 + 6 = 18, and every convex combination on that edge gives 18 too. The level line coincides with the edge: two optimal vertices, and the whole segment between them. Reporting one optimum without flagging the edge misstates the decision maker's freedom.

#### Example 3: Unbounded and infeasible

Unbounded: maximise x₁ + x₂ subject only to x₁ − x₂ ≤ 1, x ≥ 0. The ray (t, 0) is feasible for all t ≥ 0 with z = t → ∞; no constraint limits growth in that direction. Infeasible: x₁ + x₂ ≤ 1 together with x₁ + x₂ ≥ 3 — parallel halfspaces facing away, empty intersection. In applications, infeasibility usually means a requirement was transcribed with the wrong sign or the wrong unit; unboundedness usually means a real constraint was forgotten.

## Common Misconceptions

- **"Slack variables are bookkeeping noise."** They measure unused resources; at (2, 6) the slacks are (2, 0, 0) — two units of resource A idle, B and C exhausted. That sentence is the start of every capacity conversation, and the slacks reappear as the engines of duality in Lesson 3.
- **"The optimum is where the most constraints cross."** The optimum is where the objective direction last touches the region; busy vertices need not be optimal, and (2,6) beat (4,3) despite equal vertex degree.
- **"Every LP has a unique optimum."** Multiple optima are generic whenever the objective is parallel to a supporting edge; the set of optima is then a whole face.
- **"If the region is unbounded, so is the objective."** Maximising −x₁ over x ≥ 0 has an unbounded region and an immediate optimum at the origin; unboundedness is a property of the objective *on* the region.
- **"Fractional answers invalidate the LP."** They invalidate it only when divisibility truly fails; otherwise the LP answer is exact, and even when integrality matters the relaxation still bounds and guides (Lesson 7).

## Connections

Linear algebra supplies the language — systems Ax ≤ b, hyperplanes, convex combinations; differential calculus is what LP *replaces*: a linear objective has zero gradient information to use, so extremality is pushed onto the boundary by geometry instead of found by derivatives. Lesson 2 converts the corner-point property into the simplex algorithm, Lesson 3 attaches prices to the constraints via duality, and Lesson 8 asks how much the data can move before the picture changes. Inside the programme, LP is also the continuous core that integer programming (Lesson 7) and network flows (Lessons 4–5) specialise.

## Quick Check

1. Convert max 2x₁ + x₂ subject to x₁ + x₂ ≤ 5, x₁ ≤ 3, x ≥ 0 to standard form. *(Add slacks s₁, s₂ ≥ 0: x₁ + x₂ + s₁ = 5, x₁ + s₂ = 3.)*
2. Why is the feasible region of any LP convex? *(Each constraint is a halfspace — convex — and intersections of convex sets are convex; linearity of each constraint along segments does the work.)*
3. State the corner-point property and say why linearity is essential. *(A finite optimum is attained at some vertex; the argument uses z(λu + (1−λ)v) = λz(u) + (1−λ)z(v), an interior optimum being improvable or matchable at an endpoint.)*
4. Give the vertices of the running example's feasible region and the z-value at each. *((0,0):0, (4,0):12, (0,6):30, (4,3):27, (2,6):36.)*
5. What does an unbounded LP mean about the model, and an infeasible one? *(Unbounded: a limiting constraint is missing; infeasible: the requirements contradict — often a sign or unit error.)*

## Takeaway

An LP is a linear objective over a convex polyhedron, and that single geometric fact organises the entire subject: optima live on the boundary, in fact at vertices, so an infinite optimisation collapses to a finite search over corners. Formulate with the assumptions visible — proportionality, additivity, divisibility, certainty — because each is a claim about the world, not a convenience. The next lesson turns the corner-point property into a machine: the simplex method walks from vertex to vertex, improving until none can.
