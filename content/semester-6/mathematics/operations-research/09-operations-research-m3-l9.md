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
lessonId: operations-research-m3-l9
lessonName: Capstone — Modelling a Real Operation
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - operations-research-m3-l8
learningObjectives:
  - Carry a messy real situation through the full pipeline — formulation, tool selection, solution, pricing, stress-testing — to a defensible recommendation.
  - Select the right OR structure (LP, network flow, scheduling, integer programme) for a given operational situation and justify the choice.
  - Produce a sensitivity and scenario analysis and communicate results in a managerial memo, separating recommendation from arithmetic.
concepts:
  - Modelling pipeline
  - Tool selection
  - Scenario analysis
  - Managerial memo
  - Model validation
tags:
  - mathematics
  - operations-research
  - modelling
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Capstone — Modelling a Real Operation

## Overview

The previous eight lessons built the machinery one piece at a time: geometry, simplex, duality, networks, schedules, integrality, sensitivity. This lesson is the pipeline all of it exists to serve — taking a real, messy situation and turning it into a solved, priced, stress-tested recommendation. The sequence is fixed: **formulate** with assumptions visible; **select** the structure that matches the situation; **solve** and certify with the dual; **stress-test** with ranges and scenarios; **report** in the decision maker's language, not the solver's. The capstone project asks you to run this pipeline end to end on an operation of your choosing, from the menu below; the deliverables contract at the end is the marking scheme and the professional standard in one.

## Learning Path

1. **The pipeline:** five stages, their inputs and outputs, and where each module's tools enter.
2. **Tool selection:** recognising LP, network, scheduling and integer structure in prose.
3. **Verification culture:** cross-checking primal against dual, hand against solver.
4. **Scenario analysis:** moving the data, reusing the sensitivity machinery.
5. **The project menu and the deliverables contract.**

## Core Explanation

### The pipeline

**1. Formulate.** Decision variables first — what must be chosen, in what units? Then constraints — every resource, requirement, and logic rule, with units audited on both sides — then the objective. Write the assumptions down as you make them: proportionality, additivity, divisibility, certainty (Lesson 1). A model whose assumptions are invisible cannot be debugged; one whose assumptions are listed can.

**2. Select the structure.** The situation usually announces itself: flows through a capacity-limited network (Lesson 5), shipment from sources to destinations (Lesson 4), time under precedence (Lesson 6), indivisible choices (Lesson 7), or continuous allocation (Lessons 1–3). Misclassification is the most expensive error in the pipeline — a scheduling problem forced into an LP loses its critical path; an integer problem relaxed silently loses its feasibility story.

**3. Solve and certify.** Solve by hand where the instance is small (this course's standard: simplex tableaus, MODI, augmenting paths, forward–backward passes), or by solver where it is not — and cross-check. The certificate is the dual: a shadow-price vector meeting weak duality at equality (Lesson 3), a cut meeting the flow (Lesson 5), a bound meeting the incumbent (Lesson 7). An uncross-checked optimum is a rumour.

**4. Stress-test.** Ranges on right-hand sides and objective coefficients (Lesson 8); one or two scenarios where the data moves beyond the ranges and the model is re-solved; for schedules, a PERT probability against the deadline. The output is the *stability report*: which conclusions are robust, which hinge on a single number.

**5. Report.** A one-page memo: the recommendation, its value, the binding constraints in operational terms ("resource C is exhausted; one more unit is worth 1"), the robustness statement, and the assumptions that would change the answer if wrong. Arithmetic goes in an appendix. Decision makers read the memo; auditors read the appendix; both must be right.

### Tool selection, as a diagnostic

Read the nouns. "Ships, routes, capacity, throughput" ⟶ network flow. "Assigns exactly one", "matches", "schedules meetings to rooms" ⟶ assignment. "Delivers from warehouses to stores" ⟶ transportation. "Before", "after", "deadline", "duration" ⟶ CPM/PERT. "Whole units", "open or closed", "choose k of" ⟶ integer programming. Everything else continuous and divisible ⟶ LP. When two readings fit, model the tighter one: an LP relaxation of a genuinely discrete decision is a bound (useful in Lesson 7's sense), not an answer.

### Scenario analysis

One worked flavour: on the small production model of Example 1 below, the shadow prices say one extra unit of resource 1 is worth 2.2. The scenario test moves the data and confirms: raising that resource from 10 to 11 shifts the optimal vertex to (2.6, 4.2), and the new value 31.4 exceeds 29.2 by exactly 2.2 — the price honoured, within range. Scenario analysis is sensitivity with the gloves off: move the data far enough to break a range, re-solve, and report which conclusions survived.

### The project menu

- **P1 — A production or blending plan (LP).** A workshop, kitchen, or lab with two-to-four products and two-to-four resources. Formulate, solve by simplex, extract shadow prices, compute both RHS and coefficient ranges, and advise on one proposed new product by pricing it out.
- **P2 — A logistics or service network (flows).** A campus water network, a courier grid, or a hospital referral system with 6–10 nodes. Compute the maximum throughput and exhibit the minimum cut; write the bottleneck report — which arcs to upgrade, in what order, with the new cut after each.
- **P3 — A campaign schedule (CPM/PERT).** A real upcoming project — a lab campaign, an event, a build — with at least ten activities and precedence constraints. Produce the critical path, all slacks, one delay analysis, and a PERT completion probability against the actual deadline.
- **P4 — A staffing or selection problem (IP).** Shift coverage for a service desk or selection of experiments for a beamline, with binary decisions. Solve the relaxation, show the rounding failure explicitly, and run branch-and-bound to a certified optimum on a reduced instance; report the relaxation gap.

### Deliverables contract

Your submission is complete when it contains all six:

1. **Formulation with visible assumptions** — variables, constraints, objective, units, and the list of modelling assumptions with a sentence defending each.
2. **The full solution** — by hand at demonstration scale and by solver at real scale, with the two cross-checked.
3. **The dual certificate** — shadow prices or cut or bound, verified against the primal value.
4. **The stability report** — allowable ranges for every binding constraint and every objective coefficient used in the recommendation.
5. **At least one beyond-range scenario** — data moved, model re-solved, conclusions compared.
6. **The one-page memo** — recommendation, value, bottleneck, robustness, assumptions at risk; no arithmetic on page one.

## Key Ideas

- The pipeline is ordered for a reason: a wrong formulation cannot be rescued by correct solving, and a wrong structure cannot be rescued by correct pricing.
- Tool selection is noun-reading: flows, matchings, precedence and integrality each have characteristic vocabulary, and misclassification is the costliest error available.
- Every stage carries its own certificate — dual prices, cuts, bounds — and the professional standard is to exhibit it, not merely the answer.
- Stress-testing separates robust conclusions from fragile ones; a recommendation that hinges on a single coefficient must say so.
- The memo is the deliverable; the arithmetic is its evidence. Communicating the model is part of solving it.

## Worked Examples

#### Example 1: A micro-pipeline, run end to end

A small shop makes two goods: profit 4 and 5 per unit, consuming resource R₁ as x₁ + 2x₂ ≤ 10 and R₂ as 3x₁ + x₂ ≤ 12. Graphical solution: vertices (0, 0), (4, 0), (0, 5), and the intersection x₁ + 2x₂ = 10 with 3x₁ + x₂ = 12 — twice the second equation minus the first gives 5x₁ = 14, so x₁ = 2.8, x₂ = 3.6. Values: 0, 16, 25, and 4·2.8 + 5·3.6 = 29.2 — the optimum. Dual: minimise 10y₁ + 12y₂ subject to y₁ + 3y₂ ≥ 4, 2y₁ + y₂ ≥ 5; both constraints bind at the optimum, giving y₁ = 2.2, y₂ = 0.6, and the dual value 22 + 7.2 = 29.2 matches — certificate exhibited. Pricing out: a new product consuming (1, 1) needs profit above 2.2 + 0.6 = 2.8 to enter the plan.

#### Example 2: Tool selection from prose

Three sketches. (a) "Eight clinics draw water from three reservoirs through pipes with known capacities; we need to know the maximum total delivery and which pipe limits it." Nodes, arcs, capacities, throughput ⟶ max-flow, min-cut report. (b) "The telescope dome must be commissioned after the mount and the cabling, the software after the electronics, and we need the probability of finishing before the observing run." Precedence and a deadline ⟶ PERT. (c) "We may open at most two of five depots; each open depot serves a fixed cost, and deliveries from open depots must cover all demand." Open/closed decisions plus flows ⟶ mixed-integer programme with binary open variables. The nouns made all three calls before any algebra.

#### Example 3: The scenario beyond the range

Back to Example 1: how long does the price 2.2 of R₁ hold? Raise R₁ from 10 to 11: new intersection gives x₁ = 2.6, x₂ = (3·11 − 12)/5 = 4.2, value 4·2.6 + 5·4.2 = 31.4 — exactly 29.2 + 2.2 ✓, and the same basis persists for all R₁ ∈ [4, 24]. Now a scenario beyond the range: raise R₁ to 30. The intersection vertex would need x₂ = (90 − 12)/5 = 15.6, forcing x₁ = (12 − 15.6)/3 < 0 — infeasible, basis broken. Re-solving: the optimum is (0, 12) with z = 60, constraint 2 alone binding, R₁ in surplus (24 ≤ 30) and priced at 0. Blind extrapolation would have quoted 29.2 + 2.2·20 = 73.2 — a wrong answer, 22% high. The habit is the lesson: within the range, arithmetic; beyond it, re-solve.

## Common Misconceptions

- **"A good solver compensates for a bad model."** Solvers do exactly what is formulated; a missing constraint produces an unbounded or wrong answer *confidently*. Formulation errors are invisible to the solver by design.
- **"The objective value is the result."** The result is the plan plus its prices and its stability report; a value without its binding constraints and ranges cannot be acted on or trusted.
- **"One model fits all scenarios."** Every scenario beyond a range needs a re-solve; reusing prices outside their warranty (Lesson 8) manufactures false precision.
- **"Hand methods are for classrooms."** They are the audit layer: a simplex trace or an augmenting-path list is how you know the solver's answer is the model's answer, not a tolerance artefact.
- **"The memo is the easy part."** Translating binding constraints into operational language — "we exhaust resource C daily; it is the only thing worth buying more of" — is the step that converts mathematics into decisions, and it is where most analyses die.

## Connections

The capstone's stages are the course in miniature: formulation is Lesson 1, solution is Lessons 2 and 4–7, pricing is Lesson 3, stress-testing is Lesson 8. The dual certificate habit is the same epistemology as the rest of the programme — a result is not a number but a number plus its proof; Number Theory's companion elective asks for primality certificates, and experimental physics asks for error bars, and this course asks for ranges. The tool-selection discipline is pattern recognition on structure, exactly as classifying a differential equation selects its solution method in Semester 2. And the managerial memo is the professional form of the answer — the recognition that the model's customer is a decision maker with one page of attention, owed a recommendation, a bottleneck, and the honest limits of both.

## Quick Check

1. List the five stages of the pipeline in order. *(Formulate, select structure, solve and certify, stress-test, report.)*
2. Which structure fits "at most two of five depots may open, each with a fixed cost"? *(Mixed-integer programming with binary opening variables.)*
3. In Example 1, what must a new product consuming (1, 1) earn per unit to be worth producing? *(Above y*·a = 2.2 + 0.6 = 2.8.)*
4. Why does the scenario check at R₁ = 11 confirm the shadow price exactly? *(The basis survives the one-unit move, so the value shifts by exactly the price: 29.2 + 2.2 = 31.4, verified by re-computing the vertex.)*
5. Name the six items of the deliverables contract. *(Formulation with assumptions; hand-plus-solver solution cross-checked; dual certificate; stability report with ranges; one beyond-range scenario; the one-page memo.)*

## Takeaway

Operations research is a pipeline with a certificate at every stage: formulate with visible assumptions, match the structure to the situation, solve and cross-check against the dual, stress-test every number the recommendation leans on, and report the decision — not the arithmetic — in one page. The menu above is the assignment; the contract is the standard. Everything earlier in this course — every tableau, potential, cut and range — exists to make that pipeline trustworthy. That is the discipline: not solving models, but producing decisions that come with their own proof and their own warranty.
