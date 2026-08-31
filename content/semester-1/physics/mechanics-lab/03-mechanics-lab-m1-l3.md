***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: mechanics-lab
courseName: Mechanics Lab
moduleId: mechanics-lab-module-1
moduleName: Measurement and Uncertainty
lessonId: mechanics-lab-m1-l3
lessonName: Force, Equilibrium and the Force Table
lessonNumber: 3
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - mechanics-lab-m1-l2
learningObjectives:
  - Verify Newton's first law by demonstrating force equilibrium on a force table.
  - Apply the parallelogram rule to add two forces graphically and analytically.
  - Resolve a force into Cartesian components and verify the equilibrium condition.
concepts:
  - Newton's first law
  - Force equilibrium
  - Force table
  - Parallelogram of forces
  - Force components
  - Vector sum
tags:
  - physics
  - laboratory
  - newton
  - equilibrium
  - force-table
sourceType: authored-courseware
assessmentHints:
  - short-answer
  - scenario
  - problem-solving
***

# Force, Equilibrium and the Force Table

## Overview

The third lesson of the Mechanics Lab is the first formal experiment: the force table. The lesson verifies Newton's first law by demonstrating the equilibrium of a small ring under three concurrent forces. The forces are produced by hanging masses from pulleys around the table; the equilibrium condition is the vector sum of the three forces equals zero. The experiment reinforces the parallelogram rule, the components of a vector, and the difference between scalar and vector quantities. The lesson is the foundation of the next experiments in the course (friction, projectile motion, circular motion, rotational dynamics) and of the analysis of static structures in engineering.

## Learning Path

- **What you should already know**: the concept of force (from Mechanics); the parallelogram rule; the components of a vector; the SI units (newton, kilogram, metre).
- **What this lesson adds**: the use of the force table; the verification of Newton's first law; the experimental determination of an unknown force; the parallelogram rule applied to three forces.
- **What later lessons this will unlock**: the friction experiment in Lesson m2-l1; the analysis of static structures; the vector analysis in Module 2.

## Core Explanation

### Newton's first law

**Newton's first law**: a body remains at rest or in uniform motion in a straight line unless acted upon by a net external force. The condition for equilibrium is

$$\sum \vec F = 0.$$

The sum is a vector sum: each force has a magnitude and a direction, and the components in any direction must sum to zero.

In two dimensions, the equilibrium condition is equivalent to two scalar equations:

$$\sum F_x = 0, \quad \sum F_y = 0.$$

The two equations can be used to solve for two unknowns (e.g. the magnitude and direction of an unknown force).

### The force table

A **force table** is a circular table with a central pin and a series of pulleys around the rim. Strings are attached to a small ring at the centre of the table; the strings pass over the pulleys and support hanging masses. The tension in each string equals the weight of the hanging mass: $T = m g$, where $g$ is the acceleration due to gravity (approximately $9.81$ m/s$^2$).

The force on the ring from each string is the tension, directed along the string (from the ring towards the pulley). The ring is in equilibrium when the vector sum of the tensions is zero: $\vec T_1 + \vec T_2 + \vec T_3 = 0$.

The pulleys can be moved to any angle, allowing the experimenter to set the directions of the forces. The masses can be changed, allowing the experimenter to set the magnitudes.

### Parallelogram rule for two forces

For two forces $\vec F_1$ and $\vec F_2$, the sum is the diagonal of the parallelogram formed by the two forces:

$$\vec F_1 + \vec F_2 = \vec R,$$

where $\vec R$ is the resultant. The parallelogram is constructed by drawing $\vec F_1$ and $\vec F_2$ tail-to-tail, then completing the parallelogram with sides parallel to $\vec F_1$ and $\vec F_2$; the diagonal from the common tail to the opposite vertex is the resultant.

For three forces in equilibrium, the parallelogram rule is applied to two of the forces, and the third is the negative of the resultant. Equivalently, the three forces form a closed triangle: the tip of the first vector connects to the tail of the second, the tip of the second to the tail of the third, and the tip of the third to the tail of the first.

### Components of a force

A force $\vec F$ with magnitude $F$ at angle $\theta$ (measured from the positive $x$-axis) has Cartesian components:

$$F_x = F \cos \theta, \quad F_y = F \sin \theta.$$

The components are the projections of the force onto the $x$- and $y$-axes. The magnitude is recovered from the components: $F = \sqrt{F_x^2 + F_y^2}$. The angle is recovered as $\theta = \arctan(F_y / F_x)$ (with appropriate quadrant).

The components are useful for adding forces: the resultant is the sum of the components:

$$R_x = \sum F_x, \quad R_y = \sum F_y.$$

For three forces in equilibrium, $R_x = 0$ and $R_y = 0$.

### Experimental procedure

The standard procedure for the force table experiment:

1. **Set up the apparatus**: level the force table, attach three strings to the ring, pass the strings over three pulleys.
2. **Choose the masses**: select three masses that produce tensions which can be balanced by adjusting the pulley angles. A typical setup: $m_1 = 200$ g, $m_2 = 250$ g, $m_3 = ?$ g (the unknown).
3. **Adjust the pulleys**: move the pulleys to find the equilibrium configuration, where the ring is centred on the pin. The pulleys are at angles that make the vector sum of the three tensions equal to zero.
4. **Record the data**: read the angles of the three pulleys, with the convention that the angles are measured counter-clockwise from a reference direction (e.g. the $0°$ mark on the table).
5. **Compute the tensions**: $T_i = m_i g$ (with $g = 9.81$ m/s$^2$).
6. **Compute the components**: $T_{i,x} = T_i \cos \theta_i$, $T_{i,y} = T_i \sin \theta_i$.
7. **Verify equilibrium**: $\sum T_{i,x} = 0$ and $\sum T_{i,y} = 0$ (within the experimental uncertainty).
8. **Determine the unknown mass**: the unknown mass is $m_3 = T_3 / g$ (with $T_3$ determined by the equilibrium condition).

### Worked example: three forces in equilibrium

Three forces act on a ring: $\vec T_1 = 2.0$ N at $0°$, $\vec T_2 = 2.5$ N at $120°$, $\vec T_3$ at $\theta_3$ (unknown). Find $\vec T_3$ for equilibrium.

**Solution.** $\sum F_x = 0$: $2.0 \cos 0° + 2.5 \cos 120° + T_{3,x} = 0$. $2.0 \times 1 + 2.5 \times (-0.5) + T_{3,x} = 0$, so $T_{3,x} = 2.0 - 1.25 = 0.75$ N. $\sum F_y = 0$: $2.0 \sin 0° + 2.5 \sin 120° + T_{3,y} = 0$. $0 + 2.5 \times 0.866 + T_{3,y} = 0$, so $T_{3,y} = -2.165$ N. Magnitude: $T_3 = \sqrt{0.75^2 + 2.165^2} = \sqrt{0.5625 + 4.687} = \sqrt{5.25} = 2.29$ N. Direction: $\theta_3 = \arctan(-2.165 / 0.75) = \arctan(-2.887) = -70.9°$ (or equivalently $289.1°$).

Mass: $m_3 = T_3 / g = 2.29 / 9.81 = 0.234$ kg $= 234$ g.

### Sources of error

- **Friction at the pulleys**: the pulleys have some friction, which reduces the effective tension. The error is small but not zero.
- **Misalignment of the ring**: if the ring is not centred on the pin, the contact force is non-zero, and the equilibrium is not exact.
- **Reading the angles**: the angles are read to the nearest degree or half-degree, contributing an uncertainty of $\pm 0.5°$ or so.
- **String not horizontal**: the strings should be horizontal at the level of the ring. If they are not, the tension has a vertical component that affects the equilibrium.

### Reduction of error

- **Level the force table**: a level table minimises the misalignment.
- **Centre the ring**: the ring should be exactly at the centre, with no contact force from the pin.
- **Use a mirror**: a mirror behind the ring eliminates parallax when reading the equilibrium.
- **Repeat the measurement**: take several readings and average.
- **Check the pulleys**: ensure the pulleys are free to rotate and the strings are not frayed.

### Reporting the result

The result is the unknown mass $m_3$, with an uncertainty that includes the contributions from the mass measurement (typically $\pm 0.5$ g, the precision of the slotted masses), the angle measurement (typically $\pm 0.5°$), and the systematic error of the force table (the friction at the pulleys). The result is compared to the expected value (if known) and the discrepancy is discussed.

### Connections to other experiments

The force table experiment is the foundation of:

- **Friction experiment** (Lesson m2-l1): the force needed to overcome friction is measured by the force table.
- **Equilibrium of a rigid body**: the conditions for equilibrium of a rigid body (sum of forces = 0, sum of torques = 0) are the same as for the point particle.
- **Vector addition**: the parallelogram rule and the components are used throughout the physics curriculum.
- **Statics**: the analysis of bridges, trusses, and other static structures uses the same equilibrium conditions.

### Common pitfalls

- **Not centring the ring**: the ring must be exactly at the centre, with no contact force.
- **Not levelling the table**: an unlevelled table introduces systematic error.
- **Not using a mirror**: a mirror eliminates parallax and improves the precision.
- **Reading the angles in the wrong direction**: the convention is counter-clockwise from the reference; check the convention.
- **Using masses that are too small**: the friction at the pulleys becomes significant for small masses; use masses of at least $100$ g.

### Key Ideas

- Newton's first law: a body is in equilibrium when the sum of the forces is zero.
- The force table verifies the equilibrium condition for three concurrent forces.
- The parallelogram rule adds two forces; the components add any number of forces.
- The equilibrium condition gives two equations in two dimensions, allowing the determination of an unknown force.
- The unknown mass is determined by the equilibrium condition.

## Worked Examples

### Example 1 — Two forces in equilibrium

Two forces of $3$ N and $4$ N act on a particle at an angle of $90°$ between them. Find the third force needed for equilibrium.

**Solution.** $R_x = 3 + 0 + F_{3,x} = 0 \Rightarrow F_{3,x} = -3$ N. $R_y = 0 + 4 + F_{3,y} = 0 \Rightarrow F_{3,y} = -4$ N. $\vec F_3 = (-3, -4)$ N. Magnitude $= 5$ N. Direction $= \arctan(-4 / -3) = 53.1°$ in the third quadrant (or $180° + 53.1° = 233.1°$).

### Example 2 — Three forces with given angles

Three forces act on a ring: $T_1 = 2.0$ N at $0°$, $T_2 = 3.0$ N at $90°$, $T_3$ at $270°$. Find $T_3$ for equilibrium.

**Solution.** $R_x = 2.0 \cos 0° + 3.0 \cos 90° + T_3 \cos 270° = 2.0 + 0 + 0 = 2.0$ N. For $R_x = 0$: $T_3 = 2.0 / \cos 270° = 2.0 / 0$, which is undefined. The system cannot be in equilibrium with these three forces. The error is that the three forces cannot sum to zero unless their directions allow it.

### Example 3 — Verify equilibrium of a hanging mass

A $500$ g mass hangs from a string. The string is attached to a horizontal beam. The string makes an angle of $30°$ with the vertical. Find the tension in the string and the horizontal force on the beam.

**Solution.** The weight of the mass is $W = m g = 0.5 \times 9.81 = 4.905$ N downward. The tension has a vertical component $T \cos 30°$ (upward) and a horizontal component $T \sin 30°$. The beam exerts a horizontal force $F_H$ on the string (and hence on the mass). For equilibrium: $T \cos 30° = 4.905$ (vertical), $T \sin 30° = F_H$ (horizontal). $T = 4.905 / \cos 30° = 5.665$ N. $F_H = 5.665 \sin 30° = 2.832$ N. (The beam pushes outward on the string; the string pulls inward on the beam with the same magnitude.)

## Common Misconceptions

- **"Three forces always balance."** No, only if the three forces form a closed triangle. For arbitrary magnitudes and directions, three forces do not in general sum to zero.
- **"The ring is in equilibrium when it is centred."** The ring is in equilibrium when the sum of the forces is zero. Centring is a necessary but not sufficient condition.
- **"The angles are measured from the positive $x$-axis."** The convention is set by the experiment; check the convention in the lab manual.
- **"The friction at the pulleys is negligible."** For small masses, the friction is a significant fraction of the tension. Use large enough masses.

## Connections

- The force table is the simplest demonstration of Newton's first law and the vector sum of forces.
- The equilibrium condition is the foundation of statics, the analysis of static structures.
- The parallelogram rule is the basis of the vector addition in the rest of the physics curriculum.
- The components of a force are the basis of the analysis of forces in two dimensions.

## Quick Check

1. State Newton's first law and the equilibrium condition.
2. Three forces $2$ N at $0°$, $3$ N at $120°$, and $F$ at $240°$ act on a ring. Find $F$ for equilibrium.
3. A $200$ g mass hangs from a string at $30°$ to the vertical. Find the tension.
4. Sketch the force diagram for a mass hanging from two strings at different angles.
5. State three sources of error in the force table experiment.

## Takeaway

- Newton's first law: a body in equilibrium has zero net force.
- The force table verifies the equilibrium condition for three concurrent forces.
- The parallelogram rule and the components are the tools for vector addition.
- The equilibrium condition gives two equations in two dimensions, allowing the determination of an unknown force.
- The unknown mass is determined by the equilibrium condition.
