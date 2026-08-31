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
lessonId: operations-research-m2-l6
lessonName: Project Scheduling — Critical Path and PERT
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 6
prerequisites:
  - operations-research-m2-l5
learningObjectives:
  - Build an activity network with precedence constraints and compute earliest and latest event times by forward and backward passes.
  - Identify the critical path and each activity's slack, and explain why the critical path governs the project duration.
  - Apply PERT's three-estimate model to compute expected durations, path variances and completion probabilities.
concepts:
  - Activity network
  - Forward and backward pass
  - Critical path
  - Slack
  - PERT estimates
tags:
  - mathematics
  - operations-research
  - project-scheduling
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
status: in-review
***

# Project Scheduling — Critical Path and PERT

## Overview

The networks of Lesson 5 measured space — lengths and capacities. Project scheduling measures *time* under precedence: activities that cannot start until others finish. The **critical path method** (CPM) answers, deterministically, three questions: when is the earliest each activity can start, when is the latest it can start without delaying the finish, and which activities have no freedom at all — the **critical path**, the longest route through the precedence network, which alone sets the project duration. **PERT** adds honesty about uncertainty: three time estimates per activity, combined into a mean and variance, letting the scheduler quote completion *probabilities*, not just dates. Both methods are the standard planning machinery of experimental campaigns — detector upgrades, observing runs, commissioned builds — anywhere dozens of tasks interlock.

## Learning Path

1. **The activity network:** activities, predecessors, dummy structure, earliest times.
2. **Forward pass:** earliest start and finish, project duration.
3. **Backward pass:** latest start and finish, working from the deadline back.
4. **Slack and the critical path:** zero-slack activities, and why "longest path" and "bottleneck chain" are the same thing.
5. **PERT:** the (a, m, b) model, t_e = (a + 4m + b)/6, variance along the path, normal approximation.

## Core Explanation

### The network and the forward pass

List each activity with its duration and its immediate predecessors(s); draw the precedence network (activity-on-node: nodes are activities, arcs mean "must finish before"). The **forward pass** computes, for each activity, the earliest start ES = max of predecessors' earliest finishes, and EF = ES + duration. Starting from ES = 0 for activities without predecessors and sweeping in precedence order, the maximum EF over terminal activities is the **project duration**.

The worked instance used throughout: activities A (3, no predecessor), B (4, none), C (2, after A), D (5, after A), E (1, after B), F (6, after C and E), G (4, after D and E), H (2, after F and G). Forward pass:

| Activity | ES | EF |
|---|---|---|
| A | 0 | 3 |
| B | 0 | 4 |
| C | 3 | 5 |
| D | 3 | 8 |
| E | 4 | 5 |
| F | 5 | 11 |
| G | 8 | 12 |
| H | 12 | 14 |

(F waits for both C, done at 5, and E, done at 5; G waits for D at 8 and E at 5; H waits for F at 11 and G at 12.) Project duration: **14**.

### The backward pass and slack

The **backward pass** runs from the deadline, LF = 14 for terminal activities, with LS = LF − duration and LF = min of successors' LS, sweeping in reverse order:

| Activity | LS | LF |
|---|---|---|
| H | 12 | 14 |
| F | 6 | 12 |
| G | 8 | 12 |
| D | 3 | 8 |
| E | 5 | 6 |
| C | 4 | 6 |
| A | 0 | 3 |
| B | 1 | 5 |

(A's LF is the minimum of C's LS = 4 and D's LS = 3, hence 3; E's LF is the minimum of F's LS = 6 and G's LS = 8, hence 6.) The **slack** (float) of an activity is LS − ES, equivalently LF − EF: how long it may be delayed without moving the finish. Here: A, D, G, H have slack 0; B, C, E each have slack 1.

### The critical path

Activities of zero slack form the **critical path**: here A → D → G → H, and indeed 3 + 5 + 4 + 2 = 14, the project duration. Two viewpoints, one object: it is the *longest* path through the network (nothing finishes sooner than the longest chain), and it is the *bottleneck* chain (every other path has slack to give). The operational consequences: any delay on a critical activity delays the whole project one-for-one; non-critical activities may absorb delays up to their slack; and shortening the project requires shortening the critical path — and only it, until another path becomes critical too.

### PERT: three estimates instead of one

Deterministic durations are fiction for novel work. PERT replaces each duration by three estimates — optimistic a, most likely m, pessimistic b — and models the duration as approximately beta-distributed on [a, b], giving

t_e = (a + 4m + b) / 6,  σ² = ((b − a) / 6)².

Path duration is a sum of (assumed independent) activity durations, so its mean and variance add: μ = Σ t_e, σ² = Σ σ². By the central limit theorem the path duration is approximately normal, and completion probabilities reduce to z-scores. Example 2 computes one end to end: a = 2, m = 5, b = 14 gives t_e = (2 + 20 + 14)/6 = 6 and σ² = ((14 − 2)/6)² = 4 — note how the variance records indecision, not the point estimate.

## Key Ideas

- Forward pass gives earliest times (max over predecessors), backward pass gives latest times (min over successors); the sweep order is the topology of the precedence graph.
- Slack = LS − ES is the freedom an activity has; zero-slack activities form the critical path, whose length equals the project duration.
- Criticality is not about size: a short activity with zero slack (H, 2 days) is more schedule-important than a long one with float.
- Crashing the schedule means buying time on the critical path only, re-checking after each purchase since another path may become critical.
- PERT converts durations into statistics: means and variances add along the path, and the normal approximation turns a deadline into a probability.

## Worked Examples

#### Example 1: Delay analysis on the worked network

Activity C slips by 1 day. C's slack is 1, so F's earliest start stays 5 — but C's slack is now consumed; any *further* slip on C delays F, H and the finish one-for-one. Meanwhile B slips by 2 days: EF(B) becomes 6 and EF(E) becomes 7, so F's ES becomes max(5, 7) = 7 and EF(F) = 13, pushing H's start to 13 and the project finish to 15 — one day late. B's single unit of slack absorbed the first day; the second landed. Lesson: slack is a budget, and the backward pass must be recomputed the moment reality changes.

#### Example 2: PERT probability

An activity estimates a = 2, m = 5, b = 14 days: t_e = (2 + 20 + 14)/6 = 6, σ² = ((14 − 2)/6)² = 4 — note how the variance records indecision, not the point estimate. Along a critical path whose activities' estimates total μ = 20 and σ² = 4 (σ = 2), the probability of finishing by day 22 is z = (22 − 20)/2 = 1, P = Φ(1) ≈ 0.84; by day 24 it is z = 2, P ≈ 0.977. The distribution — not the point estimate — is the deliverable: management that hears "twenty days" hears a promise the model never made.

#### Example 3: Crashing decisions

Suppose the network above must finish by day 12. Only the critical path A–D–G–H matters, at least at first: crashing D by 1 (to 4) and G by 1 (to 3) gives path length 3 + 4 + 3 + 2 = 12 — but now check the next-longest paths: A–C–F–H has length 3 + 2 + 6 + 2 = 13 and B–E–F–H has length 4 + 1 + 6 + 2 = 13, and they now dominate. The crash plan is incomplete until every path fits under 12; since both stragglers share F, crashing F by 1 covers both at once — whereas crashing C instead would leave B–E–F–H at 13. Crashing without re-running the passes is the classic planning error.

## Common Misconceptions

- **"The critical path is the chain of longest activities."** It is the longest *path*; individually short activities (H at 2) can be critical while long ones (F at 6) float.
- **"Non-critical activities can be ignored."** They carry slack today and can become critical tomorrow — Example 1's second day of slip on B. Slack is monitored, not dismissed.
- **"Crashing any activity shortens the project."** Only critical ones do, and only until a parallel path catches up; every crash purchase needs a re-run of both passes.
- **"t_e is the average of a, m, b."** It weights the most likely estimate four-to-one: (a + 4m + b)/6. The plain average misplaces the mean whenever the distribution is skewed.
- **"A 97% completion probability is safe."** The 3% tail of a large programme contains the correlated failures the independence assumption suppressed; PERT's probabilities are planning signals, not guarantees.

## Connections

The forward pass is a longest-path computation on an acyclic network — Lesson 5's shortest-path algorithm with signs flipped and the greedy order replaced by topological sweep; duality persists, with the backward-pass times as the dual prices of the precedence constraints. The critical path is exactly the binding-constraint chain of Lesson 3: zero-slack activities are binding constraints of the scheduling LP, and slack is complementary slackness wearing a hard hat. PERT's normal approximation reuses the central limit theorem from probability, and its variance-additivity assumes independence the way LP assumes additivity — an assumption to audit, not absorb. In the programme's physics life, this is the machinery of run scheduling: cryostat cooldown sequences, telescope time allocation backstops, and detector commissioning all run on precedence networks.

## Quick Check

1. Compute ES and EF of activity F in the worked network. *(ES = max(EF(C), EF(E)) = max(5, 5) = 5, EF = 5 + 6 = 11.)*
2. Why does the backward pass take the minimum over successors? *(An activity must finish early enough for every successor to start by its latest time; the tightest successor governs.)*
3. Identify the critical path and verify its length against the project duration. *(A→D→G→H: 3 + 5 + 4 + 2 = 14, equal to the forward-pass duration.)*
4. An activity has a = 3, m = 6, b = 15. Find t_e and σ². *(t_e = (3 + 24 + 15)/6 = 7; σ² = ((15 − 3)/6)² = 4.)*
5. If the critical path has μ = 20, σ = 2, what is P(finish by day 23)? *(z = 1.5, P ≈ 0.933.)*

## Takeaway

Scheduling is network optimisation over time: the forward pass finds what is possible, the backward pass finds what is permissible, and the difference — slack — locates the project's true rigidity in the zero-slack chain of the critical path. PERT layers statistics on the skeleton, converting durations into means, variances and honest probabilities. With Module 2 complete — transportation, flows, schedules — Module 3 turns to the harder world where variables must be whole numbers and the data never stop moving: integer programming and sensitivity.
