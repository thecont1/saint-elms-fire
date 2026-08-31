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
lessonId: electricity-and-magnetism-m3-l2
lessonName: Biot–Savart Law and Ampère's Law
lessonNumber: 8
moduleNumber: 3
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - electricity-and-magnetism-m3-l1
learningObjectives:
  - State the Biot–Savart law and use it to compute magnetic fields.
  - State Ampère's law and explain its meaning.
  - Use Ampère's law to compute the magnetic field of symmetric current distributions.
  - Compare and contrast Ampère's law with Gauss's law.
concepts:
  - Biot–Savart law
  - Ampère's law
  - Magnetic field of a straight wire
  - Solenoid
  - Toroid
  - Enclosed current
tags:
  - physics
  - electromagnetism
  - magnetic-fields
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - derivation
***

# Biot–Savart Law and Ampère's Law

## Overview
How do we compute the magnetic field produced by a current distribution? The Biot–Savart law is the magnetic analogue of Coulomb's law: it gives the field of a differential current element. Ampère's law is the magnetic analogue of Gauss's law: it relates the line integral of $\vec{B}$ around a closed loop to the current enclosed. For symmetric current distributions, Ampère's law is the most efficient tool. Together, the two laws underpin the magnetic-side calculations in this module.

## Learning Path
- What you should already know: Coulomb's law, Gauss's law, the Lorentz force, current elements.
- What this lesson adds: a quantitative way to compute the magnetic field of a current distribution.
- What it unlocks: Faraday's law, Maxwell's equations, the working of solenoids and electromagnets, and the magnetic field of a bar magnet.

## Core Explanation
**Biot–Savart law.** The magnetic field produced by a small current element $I d\vec{l}$ at the location $\vec{r}$ of the field point is

$$d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \hat{r}}{r^2},$$

where $\hat{r}$ is the unit vector from the current element to the field point, $r$ is the distance, and $\mu_0 = 4\pi \times 10^{-7}\text{ T·m/A}$ is the permeability of free space. The total field is the integral over the current distribution:

$$\vec{B}(\vec{r}) = \frac{\mu_0}{4\pi} \int \frac{I d\vec{l}' \times (\vec{r} - \vec{r}')}{|\vec{r} - \vec{r}'|^3}.$$

The Biot–Savart law looks like a magnetic "Coulomb's law" but with a cross product. It is the workhorse for arbitrary current distributions where symmetry is not available.

**Field of a straight wire.** For an infinite straight wire carrying current $I$, integrating the Biot–Savart law gives a field that circles the wire, magnitude

$$B = \frac{\mu_0 I}{2\pi r},$$

at distance $r$ from the wire. The direction is given by the right-hand rule: thumb in the direction of current, fingers curl in the direction of $\vec{B}$.

**Field on the axis of a circular loop.** On the axis of a circular loop of radius $a$ at distance $z$ from the centre,

$$B = \frac{\mu_0 I a^2}{2(a^2 + z^2)^{3/2}}.$$

At the centre ($z = 0$), $B = \mu_0 I / (2 a)$.

**Ampère's law.** For any closed loop,

$$\oint_C \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}},$$

where $I_{\text{enc}}$ is the total current passing through the surface bounded by $C$. This is the magnetic analogue of Gauss's law, but with a line integral (a *circulation*) on the left and a current on the right.

**When to use Ampère's law.** Ampère's law is most useful when the symmetry of the current distribution allows the magnitude of $\vec{B}$ to be factored out of the integral. The classic cases are:
- Infinite straight wire: $B \cdot 2\pi r = \mu_0 I \Rightarrow B = \mu_0 I / (2\pi r)$.
- Solenoid (long): $B \cdot L = \mu_0 N I \Rightarrow B = \mu_0 n I$ (where $n = N/L$ is turns per unit length).
- Toroid: $B \cdot 2\pi r = \mu_0 N I \Rightarrow B = \mu_0 N I / (2\pi r)$.

**Solenoid.** A long coil of wire. For an ideal solenoid (infinite length, tight winding), the field inside is uniform and parallel to the axis, with magnitude $B = \mu_0 n I$. The field outside is zero. Real solenoids have fringe fields near the ends, but a long solenoid is a good approximation.

**Toroid.** A coil bent into a doughnut shape. The field is entirely inside the toroid, circulating around the axis. Magnitude $B = \mu_0 N I / (2\pi r)$, where $r$ is the radius from the centre of the toroid.

**Comparison with Gauss's law.** Ampère's law is to $\vec{B}$ what Gauss's law is to $\vec{E}$, with two key differences. First, the right-hand side is current, not charge. Second, the line integral is a *circulation*, not a *flux* (in the elementary form; in vector-calculus form, both are written as a curl integral). Ampère's law is one of the four Maxwell equations, in the form $\nabla \times \vec{B} = \mu_0 \vec{J}$ (with Maxwell's displacement-current correction for time-varying fields).

**Magnetic field of a bar magnet.** A bar magnet is a magnetic dipole, with field lines that exit the north pole and enter the south pole. Far from the magnet, the field looks like the field of a current loop — because that is what a small bar magnet is, physically: tiny atomic current loops (electron spins) that add up.

## Key Ideas
- Biot–Savart: $d\vec{B} = (\mu_0/4\pi) I d\vec{l} \times \hat{r}/r^2$.
- Ampère's law: $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$.
- Useful for symmetric distributions: straight wire, solenoid, toroid.
- The field of a straight wire circles the wire with magnitude $\mu_0 I / (2\pi r)$.
- The field inside an ideal solenoid is $B = \mu_0 n I$ (uniform, axial).

## Worked Examples
**Example 1 — Field of a straight wire.** A $5\text{ A}$ current flows through a long straight wire. Find $B$ at $r = 10\text{ cm}$.
$B = \mu_0 I / (2\pi r) = 4\pi \times 10^{-7} \times 5 / (2\pi \times 0.1) = 10^{-5}\text{ T} = 10\ \mu\text{T}$. This is comparable to the Earth's field.

**Example 2 — Solenoid.** A solenoid has $1000$ turns over a length of $50\text{ cm}$, carrying $2\text{ A}$. Find the field inside.
$n = 1000/0.5 = 2000\text{ m}^{-1}$. $B = \mu_0 n I = 4\pi \times 10^{-7} \times 2000 \times 2 \approx 5 \times 10^{-3}\text{ T} = 5\text{ mT}$.

**Example 3 — Toroid.** A toroid has $N = 500$ turns, mean radius $R = 20\text{ cm}$, and carries $I = 1\text{ A}$. Find $B$ inside.
$B = \mu_0 N I / (2\pi R) = 4\pi \times 10^{-7} \times 500 / (2\pi \times 0.2) = 5 \times 10^{-4}\text{ T} = 0.5\text{ mT}$.

## Common Misconceptions
- **"$\vec{B}$ lines start and end on currents."** They don't — $\vec{B}$ lines are *closed* loops (no magnetic monopoles). They circle around currents.
- **"Ampère's law gives the field uniquely."** It gives the *circulation* of $\vec{B}$ around a closed loop. The field itself requires the symmetry to be useful.
- **"The field of a bar magnet comes from magnetic charges."** No — a bar magnet's field is exactly the field of a current loop, with the current being the sum of atomic electron spins. There are no magnetic monopoles in classical electromagnetism.
- **"A long solenoid has the same field everywhere."** Only an *infinitely* long solenoid. Real solenoids have fringe fields at the ends; in the middle, the field is approximately uniform.

## Connections
Biot–Savart and Ampère's law are the magnetic analogues of Coulomb's and Gauss's laws. Together with the Lorentz force and Faraday's law, they constitute the static part of Maxwell's equations. The solenoid is the basic electromagnet and the basis of the MRI machine. The toroid is the magnetic configuration used in tokamaks for plasma confinement in fusion research.

## Quick Check
1. State the Biot–Savart law in your own words.
2. State Ampère's law and explain what "enclosed current" means.
3. Find the field at a distance of $5\text{ cm}$ from a long straight wire carrying $10\text{ A}$.
4. Why does Ampère's law require symmetry to be useful?
5. A solenoid has $500$ turns over $25\text{ cm}$ and carries $3\text{ A}$. Find the field inside.

## Takeaway
- Biot–Savart: $d\vec{B} = (\mu_0/4\pi) I d\vec{l} \times \hat{r}/r^2$; integrate for the total field.
- Ampère's law: $\oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}}$.
- Most useful for straight wires, solenoids, and toroids (high-symmetry cases).
- Solenoid: $B = \mu_0 n I$ inside, $\approx 0$ outside.
- Toroid: $B = \mu_0 N I/(2\pi r)$ inside, $\approx 0$ outside.
