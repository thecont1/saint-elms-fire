***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: electricity-and-magnetism
courseName: Electricity and Magnetism
moduleId: electricity-and-magnetism-module-1
moduleName: Electrostatics
lessonId: electricity-and-magnetism-m1-l1
lessonName: Coulomb's Law and the Electric Field
lessonNumber: 1
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - mechanics-m1-l1
learningObjectives:
  - State Coulomb's law and explain its structure.
  - Define the electric field of a point charge and of a charge distribution.
  - Compute the electric field by superposition for simple distributions.
  - Sketch field lines for elementary charge configurations.
concepts:
  - Electric charge
  - Coulomb's law
  - Superposition
  - Electric field
  - Field lines
  - Permittivity of free space
tags:
  - physics
  - electromagnetism
  - electrostatics
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
***

# Coulomb's Law and the Electric Field

## Overview
The electric force is one of the four fundamental forces and the one that governs chemistry, biology, and most of the everyday world. This lesson introduces electric charge, the inverse-square law that governs the force between stationary charges (Coulomb's law), and the electric field — the way we package the influence of one charge on the space around it so we can compute its effect on others. Field thinking — introduced here for static charges and revisited in *Magnetism and Induction* for moving charges — is the conceptual foundation of all of electromagnetism.

## Learning Path
- What you should already know: Newton's laws, vectors, superposition.
- What this lesson adds: a precise law for the electric force and the field concept that lets us handle many-charge problems.
- What it unlocks: Gauss's law, electric potential, capacitance, and the electromagnetism of *Magnetism and Induction*.

## Core Explanation
**Electric charge.** Charge is an intrinsic property of matter, like mass. There are two kinds, called *positive* and *negative*. Like charges repel, unlike charges attract. The SI unit is the coulomb (C). The elementary charge is $e \approx 1.602 \times 10^{-19}\text{ C}$, the magnitude of the charge of the proton (or the electron, with opposite sign). Charge is conserved: the total charge in a closed system is constant. Charge is also quantised: it comes in integer multiples of $e$ (with the caveat that quarks carry $e/3$ and $2e/3$, but they are confined inside hadrons and never observed in isolation).

**Coulomb's law.** The force between two point charges $q_1$ and $q_2$ separated by a distance $r$ is

$$\vec{F}_{1 \to 2} = \frac{1}{4 \pi \varepsilon_0} \frac{q_1 q_2}{r^2} \hat{r}_{1 \to 2},$$

where $\hat{r}_{1 \to 2}$ is the unit vector from charge $1$ to charge $2$ and $\varepsilon_0 \approx 8.854 \times 10^{-12}\text{ C}^2 / (\text{N·m}^2)$ is the permittivity of free space. The constant $1/(4 \pi \varepsilon_0) \approx 8.99 \times 10^9\text{ N·m}^2/\text{C}^2$.

Coulomb's law is an inverse-square law, mathematically identical in form to Newton's law of gravitation. Three features distinguish the electric force from gravity: there are two signs of charge (so the force can be attractive or repulsive); the electric force is enormously stronger than gravity (between two electrons, the electric repulsion is about $10^{42}$ times the gravitational attraction); and electric charge is conserved.

**Superposition.** The total force on a charge is the vector sum of the forces from all other charges. This is *linear superposition* — the law is linear in each charge. It holds because experiments show no higher-order corrections (in classical electromagnetism).

**The electric field.** The force on a test charge $q_0$ at position $\vec{r}$ due to a charge $q$ at the origin is $\vec{F} = q_0 \vec{E}(\vec{r})$, where the *electric field* is

$$\vec{E}(\vec{r}) = \frac{1}{4 \pi \varepsilon_0} \frac{q}{r^2} \hat{r}.$$

The electric field is a vector field: every point in space has a vector associated with it. The field encodes the influence of the source charges; the response of a test charge is just $q_0 \vec{E}$. Defining $\vec{E}$ this way is what lets us handle many charges — we sum their fields (a vector sum) and then multiply by the test charge.

**Field lines.** A geometric representation. Draw a curve such that the tangent at every point is in the direction of $\vec{E}$ at that point. The density of lines (number crossing unit area perpendicular to the field) is proportional to the field magnitude. Field lines start on positive charges and end on negative charges; they never cross.

**Field of a point charge, dipole, and continuous distribution.** For a point charge, the field is radial, magnitude $\propto 1/r^2$. For a *dipole* (two equal and opposite charges separated by a small distance $d$), the field at large distances ($r \gg d$) falls as $1/r^3$ and has the characteristic two-lobed pattern. For a continuous distribution of charge, sum (integrate) the contributions of the differential elements:

$$\vec{E}(\vec{r}) = \frac{1}{4 \pi \varepsilon_0} \int \frac{\rho(\vec{r}') (\vec{r} - \vec{r}')}{|\vec{r} - \vec{r}'|^3} dV',$$

where $\rho$ is the volume charge density.

**Conductors and insulators.** In a *conductor* (e.g. copper), some charges are free to move; the field inside a conductor in electrostatic equilibrium is zero, and any excess charge resides on the surface. In an *insulator* (e.g. glass), charges are bound to atoms or molecules and do not move freely.

## Key Ideas
- Coulomb's law: $\vec{F} = (1/4\pi\varepsilon_0) q_1 q_2 \hat{r} / r^2$.
- The electric field $\vec{E}$ is force per unit charge, a vector field.
- Superposition: total field is the vector sum of individual fields.
- Field lines start on positive charges, end on negative charges, and never cross.
- Continuous charge distributions are handled by integrating the field of a differential element.

## Worked Examples
**Example 1 — Hydrogen atom.** What is the magnitude of the electric force between the proton and the electron in a hydrogen atom, separated by $r \approx 5.29 \times 10^{-11}\text{ m}$ (the Bohr radius)?
$F = (1/4\pi\varepsilon_0) e^2 / r^2 = 8.99 \times 10^9 \times (1.6 \times 10^{-19})^2 / (5.29 \times 10^{-11})^2 \approx 8.2 \times 10^{-8}\text{ N}$. This is the Coulomb force that holds the atom together.

**Example 2 — Superposition of two charges.** Two point charges $q_1 = +3\ \mu\text{C}$ at $(0, 0)$ and $q_2 = -4\ \mu\text{C}$ at $(1\text{ m}, 0)$. Find $\vec{E}$ at the point $P = (0.5\text{ m}, 0)$.
Field from $q_1$ at $P$: $\vec{E}_1 = (1/4\pi\varepsilon_0)(3 \times 10^{-6})/(0.5)^2 \hat{i} = 1.08 \times 10^5\text{ N/C} \hat{i}$.
Field from $q_2$ at $P$: $P$ is $0.5\text{ m}$ to the left of $q_2$, so the unit vector from $q_2$ to $P$ is $-\hat{i}$. $\vec{E}_2 = (1/4\pi\varepsilon_0)(-4 \times 10^{-6})/(0.5)^2 (-\hat{i}) = +1.44 \times 10^5\text{ N/C} \hat{i}$.
Total: $\vec{E} = 2.52 \times 10^5\text{ N/C} \hat{i}$.

**Example 3 — Ring of charge.** Find $\vec{E}$ on the axis of a ring of radius $a$ with total charge $Q$, at distance $z$ from the centre.
By symmetry, only the $z$-component survives. $dE_z = (1/4\pi\varepsilon_0)(dq)/(z^2 + a^2) \cdot (z/\sqrt{z^2 + a^2})$. Sum over the ring: $E_z = (1/4\pi\varepsilon_0) Q z / (z^2 + a^2)^{3/2}$.

## Common Misconceptions
- **"Coulomb's law applies to all charged objects."** Only to *point* charges, or to charge distributions that are spherically symmetric (because the integration of a $1/r^2$ law over a shell gives the same result as a point charge at the centre).
- **"The electric field is a useful fiction."** The field is real: it carries energy, momentum, and information at the speed of light. In *Electricity and Magnetism* Module 3, we will see that a changing magnetic field produces an electric field, even in empty space with no charges present.
- **"Field lines are real."** They are a visualisation tool. The field is a continuous vector field; the lines are an artist's representation.
- **"A test charge must be tiny."** It must be small enough not to disturb the source charges. In practice, "infinitesimal" is the idealisation.

## Connections
Coulomb's law is mathematically the same form as Newton's law of gravitation. The electric field, when it changes in time, generates a magnetic field (Maxwell–Ampère law); together, the two constitute the electromagnetic field, studied in *Magnetism and Induction*. The same inverse-square law applies to the gravitational field, which governs orbits in *Astrophysics II*.

## Quick Check
1. State Coulomb's law and define each symbol.
2. Two charges of $+2\ \mu\text{C}$ and $-2\ \mu\text{C}$ are placed $10\text{ cm}$ apart. Where is the electric field zero?
3. What is the electric field of a point charge at a distance of $1\text{ m}$ if the charge is $1\text{ nC}$?
4. State two differences between the electric force and the gravitational force.
5. Why is the superposition principle so important in electrostatics?

## Takeaway
- Coulomb's law: $\vec{F} = (1/4\pi\varepsilon_0) q_1 q_2 \hat{r}/r^2$.
- Electric field: $\vec{E} = \vec{F}/q_0$, force per unit positive test charge.
- Superposition: total field is the vector sum of source fields.
- Field lines visualise the field; their density is proportional to magnitude.
- Continuous distributions: $dE$ from each $dq$, then integrate.
