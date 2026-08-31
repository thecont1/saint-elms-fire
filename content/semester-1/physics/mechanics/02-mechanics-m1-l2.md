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
lessonId: mechanics-m1-l2
lessonName: Free-Body Diagrams and Constraint Forces
lessonNumber: 2
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 40
releaseOrder: 2
prerequisites:
  - mechanics-m1-l1
learningObjectives:
  - Draw a free-body diagram for a single particle or system.
  - Identify tension, normal, friction, and constraint forces.
  - Recognise when a system is in equilibrium and apply the equilibrium conditions.
  - Choose an appropriate coordinate system for a problem.
concepts:
  - Free-body diagram
  - Normal force
  - Tension
  - Constraint force
  - Static equilibrium
  - Contact force
tags:
  - physics
  - mechanics
  - statics
  - free-body
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Free-Body Diagrams and Constraint Forces

## Overview
A free-body diagram is the single most important practical skill in elementary mechanics. It is the bridge between a physical situation and the equation $\vec{F}_{\text{net}} = m\vec{a}$. Most wrong answers in mechanics come from a poor diagram, not from a wrong formula. This lesson trains you to draw the diagram carefully, recognise the constraint forces (normal, tension, friction) that appear in everyday problems, and write down the equilibrium conditions when nothing is accelerating.

## Learning Path
- What you should already know: Newton's three laws, vectors, components.
- What this lesson adds: a method for translating a physical scene into a vector equation.
- What it unlocks: inclined-plane problems, Atwood machines, connected systems, and ultimately the static analysis of trusses, beams, and frames.

## Core Explanation
A **free-body diagram** (FBD) is a sketch of a single body (or a small enough system treated as a particle) with all the forces acting on it drawn as arrows. Crucially, you do not draw forces the body exerts on others — those go on the *other* body's diagram. Forces on the chosen body that you must consider include gravity, contact forces (normal, friction), tension in strings, applied pushes or pulls, and any other identifiable interaction.

**Contact forces.** When two solid bodies touch, the contact region exerts a force on each. The component perpendicular to the surface is the **normal force** $N$. The component parallel is **friction** $f$. The contact force is the vector sum of these. On a horizontal floor with a stationary block, the vertical forces are $N$ (up) and $m g$ (down), and equilibrium tells you $N = m g$. Note that $N$ is *not* automatically equal to $m g$ in general — only when the body has no vertical acceleration.

**Tension.** A string or rope can only pull along its length; it cannot push. The magnitude of the pull is the **tension** $T$. For a massless, inextensible string, $T$ is the same at both ends. A pulley that is massless and frictionless just redirects a string: it does not change the magnitude of $T$.

**Constraint forces** are forces whose magnitude is determined by other equations in the problem. If a body slides on a smooth horizontal surface, the surface enforces $a_y = 0$ and supplies the normal force to make that true. If a body moves on a smooth sphere, the surface enforces the radial equation and supplies whatever normal force is needed.

**Equilibrium.** A body is in equilibrium if its linear acceleration is zero. The condition is $\vec{F}_{\text{net}} = 0$, which means *both* components vanish in any chosen basis:

$$F_x = 0, \quad F_y = 0.$$

For an extended body, you also have the rotational equilibrium condition $\vec{\tau}_{\text{net}} = 0$ about any point, but for a particle, only the force equations are needed.

**Choosing axes.** Pick coordinates that exploit the geometry. For an inclined plane, tilt your axes so the $x$-axis runs along the slope. For a pendulum, use tangential and radial components instead of $x$ and $y$. The right choice removes a step from the algebra.

## Key Ideas
- An FBD shows *only* the forces acting on the chosen body.
- Normal force is perpendicular to a surface; tension is along a string; friction is parallel.
- Constraints determine certain forces; you don't choose them, you solve for them.
- Equilibrium means $\sum \vec{F} = 0$ (and, for extended bodies, $\sum \vec{\tau} = 0$).
- Choose axes that match the geometry of the problem.

## Worked Examples
**Example 1 — Block on a smooth incline.** A $4\text{ kg}$ block rests on a smooth plane inclined at $30°$. Find the normal force.
Take axes along and perpendicular to the plane. Gravity has component $m g \sin 30°$ down the slope and $m g \cos 30°$ into the surface. Equilibrium perpendicular to the slope gives $N = m g \cos 30° = 4 \times 9.8 \times (\sqrt{3}/2) \approx 33.9\text{ N}$. The block does not slide (smooth surface, so no friction); along the slope it accelerates with $a = g \sin 30°$.

**Example 2 — Atwood machine.** Two blocks of mass $m_1 = 3\text{ kg}$ (hanging) and $m_2 = 5\text{ kg}$ (hanging on the other side) are connected by a light string over a frictionless pulley. Find the acceleration.
For each block, draw an FBD: tension $T$ up, weight $m g$ down. The constraint says the magnitudes of the accelerations are equal. For the lighter side, $T - m_1 g = m_1 a$; for the heavier, $m_2 g - T = m_2 a$. Add: $(m_2 - m_1) g = (m_1 + m_2) a$, so $a = 2 g / 8 = g/4 \approx 2.45\text{ m/s}^2$, and $T = m_1(g + a) = 3 \times 12.25 = 36.75\text{ N}$.

## Common Misconceptions
- **"Normal force always equals weight."** Only when there is no vertical acceleration. In a lift accelerating upward, $N = m(g + a)$; accelerating downward, $N = m(g - a)$.
- **"Tension can push."** A string can only pull. If you find a "negative tension" in a solution, the geometry is wrong (or the string would have gone slack).
- **"Action and reaction both go on the same diagram."** They do not. Action–reaction pairs always live on *different* FBDs.
- **"If the net force is zero, the body is at rest."** No — it could be moving with constant velocity. Equilibrium is about *zero acceleration*, not zero velocity.

## Connections
Constraint forces show up in rigid body rotation (Sem 1, Module 3): the axle of a wheel provides a centripetal constraint force. The same idea reappears in *Electricity and Magnetism* where the wire of a circuit enforces $V = IR$ and supplies whatever current is needed at the load.

## Quick Check
1. A $10\text{ kg}$ block is at rest on a horizontal floor. Sketch its FBD and label the magnitudes of the forces.
2. A block is on a smooth incline of $45°$. Is the normal force greater than, less than, or equal to its weight?
3. Two equal masses are connected by a string over a frictionless pulley. What is the acceleration? Justify briefly.
4. A child pulls a sled with a force at an angle above the horizontal. Draw the FBD and identify the components of the pulling force along and perpendicular to the ground.
5. Why is tension the same on both sides of a frictionless, massless pulley?

## Takeaway
- An FBD is a forced inventory of every external force on one body.
- Normal force and tension are constraint forces whose magnitudes are solved for, not chosen.
- Equilibrium is $\sum \vec{F} = 0$, written component-by-component in well-chosen axes.
- Match your axes to the geometry of the problem; the math will follow.
