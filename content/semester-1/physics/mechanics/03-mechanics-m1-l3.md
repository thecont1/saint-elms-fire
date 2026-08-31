***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: mechanics
courseName: Mechanics
moduleId: mechanics-module-1
moduleName: Forces and Equilibrium
lessonId: mechanics-m1-l3
lessonName: Friction, Tension and Equilibrium Problems
lessonNumber: 3
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 3
prerequisites:
  - mechanics-m1-l2
learningObjectives:
  - Distinguish static from kinetic friction and use the friction inequality.
  - Set up a multi-body equilibrium problem and solve it.
  - Identify tension in strings and rods of a static structure.
  - Recognise when friction is a maximum, a minimum, or a specific value.
concepts:
  - Static friction
  - Kinetic friction
  - Coefficient of friction
  - Limiting friction
  - Multi-body equilibrium
  - Tipped-and-slide condition
tags:
  - physics
  - mechanics
  - friction
  - statics
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
***

# Friction, Tension and Equilibrium Problems

## Overview
Friction is the most common contact force in everyday life, and the one most often misapplied in problems. The rule is subtle: static friction is *inequality-bounded*, not equal to a fixed value. This lesson teaches the two friction laws (static and kinetic), shows how to handle the inequality, and uses tension-bearing systems — strings, rods, and pulleys — to build a working fluency with multi-body equilibrium.

## Learning Path
- What you should already know: FBDs, normal force, tension, components.
- What this lesson adds: how to handle inequality constraints and how to combine multiple FBDs into a solvable system.
- What it unlocks: statics of frames and machines, tipping problems, and the friction-based analysis of road vehicles and biomechanics.

## Core Explanation
**The two laws of friction.** When two dry surfaces slide (or tend to slide) against each other, the contact exerts a friction force parallel to the surface. The magnitude obeys

$$|f_s| \le \mu_s N \quad \text{(static)}, \qquad f_k = \mu_k N \quad \text{(kinetic)}.$$

Here $N$ is the magnitude of the normal force and $\mu_s, \mu_k$ are dimensionless coefficients that depend on the pair of materials. Generally $\mu_s > \mu_k$: it takes a larger tangential force to *start* a body sliding than to *keep* it sliding. The direction of the friction force opposes the *impending or actual* relative motion of the surfaces.

**Static friction is not a single value.** This is the rule students miss. Until the applied tangential force exceeds $\mu_s N$, friction is whatever is needed to prevent motion. Once the inequality is violated, the body starts to slide and friction drops to $\mu_k N$. So when you solve a problem, first assume the body is in static equilibrium, solve for the required friction, and check whether it satisfies $|f| \le \mu_s N$. If yes, the body stays put. If no, it slides and you use $f_k = \mu_k N$.

**Tipped or sliding?** Place a block on an incline and slowly raise the angle. At some critical angle $\theta_c$ the block begins to slide. The condition is

$$\tan \theta_c = \mu_s.$$

For a tall block, you can also ask whether the block *tips* before it slides. The tipping condition depends on the geometry: tipping happens when the normal force line of action leaves the base. The taller the block, the more likely it is to tip.

**Tension in strings and rods.** Strings can only pull; rods can push or pull. A two-force member (a body with forces only at two points) is special: the two forces must be equal, opposite, and along the line joining the points. This is a powerful shortcut in truss problems.

**Multi-body equilibrium.** For a system of $n$ particles in equilibrium, write one vector (or two scalar) equation per particle. Internal forces come in equal-and-opposite pairs by Newton's third law and cancel when you sum over the whole system. The external forces then must sum to zero. This is the basis for treating whole machines as single objects when you only care about their overall balance.

## Key Ideas
- Static friction: $|f_s| \le \mu_s N$, kinetic friction: $f_k = \mu_k N$, with $\mu_s > \mu_k$ usually.
- Direction of friction opposes the *impending or actual* relative motion.
- To solve: assume static equilibrium, find required $f$, then check the inequality.
- Two-force members: forces are equal, opposite, and collinear.
- For a system, internal action–reaction pairs cancel when summing forces over the system.

## Worked Examples
**Example 1 — Will the block slide?** A $5\text{ kg}$ block sits on a horizontal floor with $\mu_s = 0.4$, $\mu_k = 0.3$. A horizontal force of $15\text{ N}$ is applied. Does it move?
Required friction for static equilibrium is $f = 15\text{ N}$. Maximum static friction is $\mu_s m g = 0.4 \times 5 \times 9.8 = 19.6\text{ N}$. Since $15 < 19.6$, the block does not move; the friction force is $15\text{ N}$.

**Example 2 — Pulling at an angle.** A $10\text{ kg}$ crate is pulled across a horizontal floor with $\mu_k = 0.3$ by a force of $60\text{ N}$ at $30°$ above horizontal. Find the acceleration.
Resolve the force: $F_x = 60 \cos 30° \approx 51.96\text{ N}$, $F_y = 60 \sin 30° = 30\text{ N}$ (upward). Vertical equilibrium: $N + F_y - m g = 0 \Rightarrow N = m g - F_y = 98 - 30 = 68\text{ N}$. Kinetic friction: $f_k = 0.3 \times 68 = 20.4\text{ N}$. Net horizontal: $F_x - f_k = 51.96 - 20.4 = 31.56\text{ N}$. Acceleration: $a = 31.56 / 10 \approx 3.16\text{ m/s}^2$.

## Common Misconceptions
- **"Friction is always $\mu N$."** Only kinetic friction is. Static friction is a *range*, and you only commit to the maximum when motion is impending.
- **"Friction always opposes motion."** Friction opposes the *relative* motion of the surfaces. A person walking pushes backward on the ground; friction pushes them forward.
- **"Pulling at an angle always makes things easier."** Pulling upward reduces the normal force and therefore the friction, but the vertical component does not contribute to forward motion. The optimal angle is $\tan\theta^* = \mu$ — exactly the angle that gives the largest net force on the body.
- **"A rod and a string are interchangeable."** A string can only pull (tension). A rod can pull or push (compression or tension), and its internal force can be either sign.

## Connections
Friction in this Newtonian sense is a *macroscopic* effect arising from microscopic interactions — the same physical idea is revisited in *Solid State Physics* (Sem 5) when we discuss phonon scattering as a source of electrical resistance. The inequality $f_s \le \mu_s N$ is also the simplest example of a *constraint inequality* — a flavour of optimisation problem that reappears in *Linear Algebra* (Sem 5) under linear programming.

## Quick Check
1. A block is at rest on a slope of $20°$ with $\mu_s = 0.5$. Will it slide? Show the calculation.
2. Why is the critical sliding angle given by $\tan \theta_c = \mu_s$? Derive it.
3. A horizontal rope pulls a $4\text{ kg}$ block across a rough floor with $\mu_k = 0.25$. If the normal force is $39.2\text{ N}$, what is the friction force?
4. A rod of length $2\text{ m}$ connects two pins with forces only at the ends. The force at one end is $20\text{ N}$ upward. What is the force at the other end?
5. A block on a slope is on the verge of sliding. If the slope angle is increased, does the required static friction increase, decrease, or stay the same?

## Takeaway
- Static friction is bounded by $\mu_s N$; kinetic friction equals $\mu_k N$.
- Solve by assuming equilibrium, finding the required friction, then checking the inequality.
- Two-force members: equal, opposite, collinear.
- Internal forces cancel in a system-level sum; only external forces matter for overall balance.
- Optimal pull angle balances the lift (reducing $N$) against the lost horizontal component.
