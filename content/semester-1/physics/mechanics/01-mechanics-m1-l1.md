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
lessonId: mechanics-m1-l1
lessonName: Newton's Laws and Inertial Frames
lessonNumber: 1
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 1
prerequisites:
  - bridge-course-physics
  - differential-calculus-m1-l1
learningObjectives:
  - State Newton's three laws precisely.
  - Explain what an inertial reference frame is and why it matters.
  - Distinguish mass from weight.
  - Recognise when Newton's laws apply and when they must be replaced (relativistic or quantum regimes).
concepts:
  - Inertial frame
  - Newton's first law
  - Newton's second law
  - Newton's third law
  - Inertial mass
  - Force
tags:
  - physics
  - mechanics
  - classical-mechanics
  - newton
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Newton's Laws and Inertial Frames

## Overview
This opening lesson frames the entire Mechanics course. Mechanics is the study of how and why things move, and almost everything we will do this semester is built on three short statements known as Newton's laws. They look simple. They are not. The job of this lesson is to give you a precise reading of those laws and to introduce the concept of an inertial reference frame, which decides whether the laws are even true in the form we write them.

## Learning Path
- What you should already know: how to plot position vs. time, how to read a velocity as a slope, and what a vector is.
- What this lesson adds: a working vocabulary of force, mass, acceleration, and reference frame; a habit of asking "in which frame?" before you solve a problem.
- What it unlocks: free-body diagrams, constraint forces, energy methods, rotation, and ultimately everything from orbital mechanics to rigid body dynamics.

## Core Explanation
A **force** is an interaction that can change the motion of an object. The word "change" is deliberate: forces do not cause motion, they cause changes in motion. This was Newton's real breakthrough, not the famous apple story.

**Newton's First Law.** Every body continues in its state of rest, or of uniform motion in a straight line, unless it is compelled to change that state by impressed forces. This is the **law of inertia**: in the absence of net force, velocity is conserved. A body at rest stays at rest, and a body moving at constant velocity keeps moving at that velocity.

Notice the first law is empty unless we specify *relative to what*. We need a **reference frame** — a coordinate system in which we describe positions, velocities, and accelerations. A frame in which the first law holds is called an **inertial reference frame**. Roughly, an inertial frame is one that is not accelerating or rotating. A frame attached to the surface of the Earth is *approximately* inertial for many everyday problems; a frame attached to a rotating merry-go-round is not.

**Newton's Second Law.** The rate of change of momentum of a body is proportional to the impressed force and takes place in the direction of that force. For a body of constant mass $m$, this gives

$$\vec{F}_{\text{net}} = m \vec{a}.$$

The quantity $m$ is the **inertial mass**: a measure of how much a body resists being accelerated. Weight is different: weight is the gravitational force $m g$ on the body. Mass is a property of the body; weight depends on where the body is.

The second law is a vector equation. That means it really gives you three scalar equations, one per component:

$$F_x = m a_x, \quad F_y = m a_y, \quad F_z = m a_z.$$

When you draw a free-body diagram, you are building these three components.

**Newton's Third Law.** For every action, there is an equal and opposite reaction. More precisely: if body A exerts a force $\vec{F}_{AB}$ on body B, then body B exerts $\vec{F}_{BA} = -\vec{F}_{AB}$ on body A. The forces act on *different* bodies, which is the source of many beginner mistakes — you cannot put both forces on the same object and have them cancel.

A quick sanity test: a book sits on a table. Gravity pulls the book down with force $m g$. By the third law, the book pulls the Earth up with force $m g$. The Earth's acceleration is invisible because the Earth's mass is enormous.

**Where Newton's laws work, and where they don't.** They work extraordinarily well for objects moving slowly compared to the speed of light and bigger than a molecule. They fail for objects moving at relativistic speeds (replace with special relativity) and for objects on the scale of atoms (replace with quantum mechanics). The boundary is fuzzy — Newton's laws remain a useful approximation far beyond the textbook threshold.

## Key Ideas
- Newton's first law defines an inertial reference frame.
- Newton's second law is the equation of motion in vector form: $\vec{F}_{\text{net}} = m \vec{a}$.
- Mass measures inertia; weight is a force and depends on local gravity.
- Newton's third law pairs forces on *two* different bodies; the pair never cancels on a single body.
- The laws are valid in inertial frames; in non-inertial frames you must add pseudo forces.

## Worked Examples
**Example 1.** A $2\text{ kg}$ block on a frictionless horizontal surface is pulled by a horizontal force of $10\text{ N}$. What is its acceleration?
By the second law, $a = F/m = 10 / 2 = 5\text{ m/s}^2$, directed along the force. There is no vertical motion, so the normal force and gravity cancel to zero net vertical force.

**Example 2.** Two children, A (mass $30\text{ kg}$) and B (mass $45\text{ kg}$), sit on a frictionless ice pond and push off each other. Child A feels an acceleration of $1.5\text{ m/s}^2$. Find the force on each child and child B's acceleration.
The force on A is $F = 30 \times 1.5 = 45\text{ N}$. By Newton's third law, child B feels the same magnitude in the opposite direction. B's acceleration is $a_B = 45 / 45 = 1.0\text{ m/s}^2$. The ratio of accelerations is the inverse ratio of the masses: $a_A / a_B = m_B / m_A$.

## Common Misconceptions
- **"A constant force produces a constant velocity."** No — a constant net force produces a constant *acceleration*, which means velocity changes linearly with time. Constant velocity requires zero net force.
- **"Action and reaction cancel out."** They do not, because they act on different bodies. A horse pulling a cart is not a paradox: the cart pulls the horse backward, but the horse also pushes the ground backward through friction, and the ground pushes the horse forward.
- **"Mass and weight are the same thing."** Mass is intrinsic; weight is a force and changes with location. A $70\text{ kg}$ astronaut weighs about $686\text{ N}$ on Earth and about $113\text{ N}$ on the Moon.
- **"Newton's laws work everywhere."** They are an approximation. They fail for relativistic speeds and for atomic-scale phenomena.

## Connections
The vector form of the second law directly uses the derivative — the foundation laid in *Limits and Continuity* and *Differentiation* in Differential Calculus. The distinction between mass and weight resurfaces in Astrophysics II when we discuss gravitational fields. The same second-law structure reappears in *Electricity and Magnetism* in the form $\vec{F} = q \vec{E}$ and $\vec{F} = q \vec{v} \times \vec{B}$, with charge playing the role of inertia.

## Quick Check
1. State Newton's first law. What does it assume about the reference frame?
2. A constant $5\text{ N}$ force acts on a $1\text{ kg}$ block for $4\text{ s}$ starting from rest. What is its speed at the end?
3. A book of mass $1.5\text{ kg}$ lies on a table. Identify the action–reaction pairs involving the book.
4. Is a frame attached to a freely falling lift an inertial frame? Why or why not?
5. Give one physical situation where Newton's laws are known to be inadequate.

## Takeaway
- Newton's first law defines inertial frames; the second law is $\vec{F}_{\text{net}} = m \vec{a}$ in those frames; the third law pairs forces on two distinct bodies.
- Inertial mass measures resistance to acceleration; weight is a gravitational force.
- Forces are vectors; decompose them into components and apply the second law separately along each axis.
- The same law structure recurs across physics, with different "charges" (mass, electric charge) and different "fields" (gravity, electromagnetism).
