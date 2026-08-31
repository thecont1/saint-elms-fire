***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: electricity-and-magnetism
courseName: Electricity and Magnetism
moduleId: electricity-and-magnetism-module-3
moduleName: Magnetism and Induction
lessonId: electricity-and-magnetism-m3-l1
lessonName: Magnetic Force and Lorentz Force
lessonNumber: 7
moduleNumber: 3
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 7
prerequisites:
  - electricity-and-magnetism-m1-l1
  - mechanics-m2-l2
learningObjectives:
  - State the magnetic force on a moving charge and on a current-carrying wire.
  - Explain the right-hand rule for direction of the magnetic force.
  - Describe the motion of a charged particle in a uniform magnetic field.
  - Compute the magnetic force and torque on a current loop.
concepts:
  - Magnetic field
  - Lorentz force
  - Right-hand rule
  - Cyclotron motion
  - Magnetic moment
  - Torque on a current loop
tags:
  - physics
  - electromagnetism
  - magnetism
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
***

# Magnetic Force and Lorentz Force

## Overview
Magnetic phenomena have been known for millennia (lodestones), but the connection to electricity was discovered only in the 19th century. A magnetic field $\vec{B}$ exerts a force on moving charges, on currents, and on magnetic dipoles. The Lorentz force $\vec{F} = q \vec{v} \times \vec{B}$ is the central law. This lesson introduces the magnetic field, the Lorentz force, the motion of charges in uniform fields (cyclotron motion), and the basics of magnetic moments.

## Learning Path
- What you should already know: the electric force, vectors, cross product, circular motion.
- What this lesson adds: a new field $\vec{B}$ and a new kind of force, perpendicular to velocity.
- What it unlocks: Ampère's law, Faraday's law, the working of motors and generators, and the cyclotron in *Nuclear Physics*.

## Core Explanation
**The magnetic field.** The magnetic field $\vec{B}$ is a vector field that, together with the electric field, constitutes the electromagnetic field. Units: tesla (T), where $1\text{ T} = 1\text{ kg/(A·s}^2)$. The Earth's magnetic field is about $5 \times 10^{-5}\text{ T}$; a strong refrigerator magnet is about $0.01\text{ T}$; an MRI machine is $1.5$–$3\text{ T}$; the strongest continuous laboratory fields are around $45\text{ T}$.

**The Lorentz force.** The total electromagnetic force on a charge $q$ moving with velocity $\vec{v}$ in electric and magnetic fields is

$$\vec{F} = q (\vec{E} + \vec{v} \times \vec{B}).$$

The first term is the electric force, the second the magnetic. The magnetic force is perpendicular to both $\vec{v}$ and $\vec{B}$ and depends on the *direction* of motion — a charge at rest feels no magnetic force.

**Right-hand rule.** To find the direction of $\vec{v} \times \vec{B}$: point your right-hand fingers from $\vec{v}$ to $\vec{B}$; your thumb points in the direction of the cross product. For a positive charge, $\vec{F} = q \vec{v} \times \vec{B}$ is in the same direction; for a negative charge, opposite.

**Force on a current-carrying wire.** A current $I$ in a wire of length $d\vec{l}$ (a vector along the wire in the direction of conventional current) feels a force

$$d\vec{F} = I \, d\vec{l} \times \vec{B}.$$

For a straight wire of length $L$ in a uniform field, $\vec{F} = I \vec{L} \times \vec{B}$, with magnitude $F = I L B \sin\theta$.

**Motion in a uniform magnetic field.** For a charge in a uniform $\vec{B}$ with no $\vec{E}$, the Lorentz force is $\vec{F} = q \vec{v} \times \vec{B}$, always perpendicular to $\vec{v}$. The charge moves in a circle (or helix, if there is a velocity component along $\vec{B}$). The radius of the circle is set by equating the magnetic force to the centripetal force:

$$|q| v B = \frac{m v^2}{r} \quad \Rightarrow \quad r = \frac{m v}{|q| B}.$$

The angular frequency is the **cyclotron frequency** $\omega_c = |q| B / m$, and the period is $T = 2\pi m / (|q| B)$. Both are independent of $v$ — a key feature exploited in the cyclotron particle accelerator.

**Helical motion.** If the charge has a velocity component $v_\parallel$ along $\vec{B}$, that component is unaffected by the magnetic force. The charge moves in a helix: circular in the plane perpendicular to $\vec{B}$, with constant drift along $\vec{B}$ at $v_\parallel$. This is the basis of the magnetic bottle for plasma confinement and of the Van Allen radiation belts.

**Magnetic moment and torque.** A current loop of area $A$ carrying current $I$ has a magnetic moment $\vec{\mu} = I A \hat{n}$ (where $\hat{n}$ is normal to the loop by the right-hand rule). In an external field, it experiences a torque

$$\vec{\tau} = \vec{\mu} \times \vec{B},$$

and a potential energy

$$U = -\vec{\mu} \cdot \vec{B}.$$

The loop tends to align its moment with the field (the lowest-energy orientation). This is the principle of the electric motor.

**Force on a magnetic dipole.** In a non-uniform field, a magnetic dipole experiences a force $\vec{F} = \nabla (\vec{\mu} \cdot \vec{B})$. This is what attracts a small magnet to a strong magnet, and what aligns compass needles to the Earth's field.

**Why no work?** The magnetic force is always perpendicular to the velocity, so it does no work on a moving charge. A static magnetic field cannot change the speed of a particle; it can only change the direction.

## Key Ideas
- The Lorentz force is $\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$.
- The magnetic force is perpendicular to both $\vec{v}$ and $\vec{B}$.
- In a uniform field, a charge moves in a circle (or helix) with cyclotron frequency $\omega_c = |q|B/m$.
- Force on a current: $d\vec{F} = I d\vec{l} \times \vec{B}$.
- Magnetic moment of a loop: $\vec{\mu} = I A \hat{n}$; torque $\vec{\tau} = \vec{\mu} \times \vec{B}$.

## Worked Examples
**Example 1 — Proton in Earth's magnetic field.** A proton with $v = 10^6\text{ m/s}$ perpendicular to the Earth's field $B = 5 \times 10^{-5}\text{ T}$: the radius of curvature is $r = m v / (q B) = (1.67 \times 10^{-27} \times 10^6)/(1.6 \times 10^{-19} \times 5 \times 10^{-5}) \approx 209\text{ m}$. The cyclotron period is $T = 2\pi m/(q B) \approx 1.3\text{ ms}$. These are typical numbers for a particle in the inner Van Allen belt.

**Example 2 — Force on a current loop.** A rectangular loop $5\text{ cm} \times 10\text{ cm}$ carrying $2\text{ A}$ in a field $0.4\text{ T}$ (in the plane of the loop, perpendicular to the long side) experiences a torque $\tau = N I A B \sin\theta$. With $\theta = 90°$: $\tau = 1 \times 2 \times 5 \times 10^{-4} \times 0.4 = 4 \times 10^{-4}\text{ N·m}$. The torque tries to rotate the loop so its normal aligns with $\vec{B}$.

**Example 3 — Velocity selector.** A region has crossed $\vec{E}$ and $\vec{B}$ fields. A charge moving with $v = E/B$ experiences zero net force: $q E - q v B = 0$. This is a velocity selector used in mass spectrometers.

## Common Misconceptions
- **"Magnetic force does no work."** Correct for a *static* field. A time-varying magnetic field can do work through induced electric fields, as we will see in Faraday's law.
- **"Magnetic monopoles exist."** As far as we know, they do not. Magnetic fields always come from dipoles or currents; there are no point sources of $\vec{B}$ analogous to electric charges.
- **"The magnetic force pushes a charge along the field."** No — it pushes it *perpendicular* to both $\vec{v}$ and $\vec{B}$. The force is always sideways.
- **"A stationary charge near a magnet feels a force."** No — only moving charges (or magnetic dipoles) feel magnetic forces. A stationary charge in a static magnetic field feels nothing.

## Connections
The Lorentz force is the workhorse of *Magnetism and Induction* (this module). It is also the basis of the Hall effect, mass spectrometry, particle accelerators (cyclotrons, synchrotrons in *Nuclear Physics*), and the aurora (charged particles spiralling along Earth's magnetic field lines). The magnetic moment reappears in *Atomic and Molecular Physics* (electron spin, nuclear spin) and in *Solid State Physics* (magnetic materials).

## Quick Check
1. State the Lorentz force and explain the cross product's direction.
2. A proton moves at $10^5\text{ m/s}$ in a $0.5\text{ T}$ field perpendicular to its velocity. What is the radius of its circular motion?
3. Why is the cyclotron frequency independent of the particle's speed?
4. A current loop with magnetic moment $\mu$ is in a magnetic field $\vec{B}$. What is its potential energy? What orientation minimises this energy?
5. Does a magnetic force change the speed of a charged particle? Why or why not?

## Takeaway
- Lorentz force: $\vec{F} = q(\vec{E} + \vec{v} \times \vec{B})$.
- Magnetic force is perpendicular to $\vec{v}$ and $\vec{B}$; it changes direction, not speed.
- Cyclotron motion: $r = m v / (q B)$, $\omega_c = q B / m$.
- Force on a current: $d\vec{F} = I d\vec{l} \times \vec{B}$.
- Magnetic moment $\vec{\mu} = I A \hat{n}$ aligns with $\vec{B}$ at minimum energy.
