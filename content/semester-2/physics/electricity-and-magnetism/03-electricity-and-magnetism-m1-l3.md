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
lessonId: electricity-and-magnetism-m1-l3
lessonName: Electric Potential and Capacitance
lessonNumber: 3
moduleNumber: 1
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - electricity-and-magnetism-m1-l1
  - electricity-and-magnetism-m1-l2
learningObjectives:
  - Define the electric potential and relate it to the electric field.
  - Compute the potential of a point charge and of a charge distribution.
  - State the energy stored in a configuration of charges.
  - Define capacitance and compute it for simple geometries.
concepts:
  - Electric potential
  - Potential difference
  - Equipotential surface
  - Capacitance
  - Parallel-plate capacitor
  - Energy stored in a capacitor
tags:
  - physics
  - electromagnetism
  - potential
  - capacitance
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
***

# Electric Potential and Capacitance

## Overview
The electric field is a vector; the electric potential is the scalar from which the field can be derived. Potential is the electrical analogue of gravitational potential energy, and like its mechanical counterpart it is conserved when only the electric force does work. This lesson defines the potential, shows how to compute it for point charges and simple distributions, and uses it to introduce capacitance — a property of conductors that store electric energy.

## Learning Path
- What you should already know: the electric field, work, line integrals, the conservation of mechanical energy.
- What this lesson adds: a scalar description of the electric field and a way to compute it more easily for many-charge problems.
- What it unlocks: capacitance, capacitors in circuits, the energy of electric fields, and the chemical potential in atomic physics.

## Core Explanation
**The potential difference.** The potential difference between two points $A$ and $B$ in an electric field $\vec{E}$ is the work done per unit positive charge in moving from $A$ to $B$ against the field:

$$V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}.$$

Equivalently, $\vec{E} = -\nabla V$ — the field is the negative gradient of the potential. Units: joules per coulomb = volts (V).

The minus sign is essential: a positive charge spontaneously moves from high potential to low potential, just as a mass falls from high gravitational potential to low.

**Reference point.** The potential is defined up to an additive constant. For a point charge, the convention is to take $V(\infty) = 0$. Then the potential of a point charge $q$ at distance $r$ is

$$V(r) = \frac{1}{4\pi\varepsilon_0} \frac{q}{r}.$$

**Superposition of potentials.** Potentials add as scalars (no vectors), so the total potential from many charges is the algebraic sum:

$$V(\vec{r}) = \frac{1}{4\pi\varepsilon_0} \sum_i \frac{q_i}{|\vec{r} - \vec{r}_i|}.$$

This is much easier than summing vector fields, which is one reason potentials are useful.

**Equipotential surfaces.** A surface on which $V$ is constant. Since $\vec{E} = -\nabla V$ and the gradient is perpendicular to level sets, $\vec{E}$ is perpendicular to equipotentials. The work to move a charge along an equipotential is zero.

**Energy of a charge configuration.** The work to assemble $N$ point charges from infinity is the potential energy of the configuration. For two charges $q_1$ and $q_2$ separated by $r_{12}$, $U = q_1 q_2 / (4\pi\varepsilon_0 r_{12})$. For more charges, sum over all distinct pairs.

**Energy density of the field.** The energy stored in an electric field can be written in terms of the field itself:

$$u_E = \tfrac{1}{2} \varepsilon_0 E^2 \quad \text{(energy per unit volume)}.$$

Integrating over a region gives the total field energy. The energy is in the field, not in the charges — a deep statement that survives even in electromagnetic waves (where there are no charges present).

**Capacitance.** A capacitor is two conductors separated by an insulator (or vacuum). When charge $+Q$ is placed on one conductor and $-Q$ on the other, the potential difference $V$ between them is proportional to $Q$. The capacitance is

$$C = Q/V,$$

measured in farads (F), where $1\text{ F} = 1\text{ C/V}$. Capacitance depends only on the geometry of the conductors and the dielectric (insulating material) between them.

**Parallel-plate capacitor.** Two parallel plates of area $A$ separated by distance $d$, with charge $+Q$ on one and $-Q$ on the other. The field between the plates is uniform, $E = \sigma/\varepsilon_0 = Q/(\varepsilon_0 A)$. The potential difference is $V = E d = Q d/(\varepsilon_0 A)$. So the capacitance is

$$C = \frac{\varepsilon_0 A}{d}.$$

A $1\text{ F}$ capacitor with $d = 1\text{ mm}$ and $\varepsilon_0$ as given would need $A \approx 10^8\text{ m}^2$ — a square $10$ km on a side. Practical capacitors use high-permittivity dielectrics and clever geometry (rolled foil) to pack more area into a small volume.

**Other geometries.** A spherical capacitor (concentric spheres of radii $a$ and $b$) has $C = 4\pi\varepsilon_0 a b/(b - a)$. A cylindrical capacitor (coaxial cylinders) has $C = 2\pi\varepsilon_0 L / \ln(b/a)$.

**Energy stored in a capacitor.** To charge a capacitor from $0$ to $Q$, you do work $W = \tfrac{1}{2} Q V = \tfrac{1}{2} C V^2 = Q^2/(2 C)$. This is the energy stored in the field between the plates.

**Dielectrics.** Inserting an insulating material (dielectric) between the plates increases the capacitance by a factor $\kappa$ (the dielectric constant): $C = \kappa \varepsilon_0 A / d$. The dielectric reduces the field inside by a factor $\kappa$ for the same free charge on the plates.

## Key Ideas
- Potential difference: $V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}$; equivalently $\vec{E} = -\nabla V$.
- Potential of a point charge: $V = q/(4\pi\varepsilon_0 r)$.
- Potentials superpose as scalars — much easier than field superposition.
- Capacitance $C = Q/V$; geometry-dependent, measured in farads.
- Energy stored: $U = \tfrac{1}{2} C V^2$; field energy density $u_E = \tfrac{1}{2} \varepsilon_0 E^2$.

## Worked Examples
**Example 1 — Potential of a dipole.** A dipole has charges $+q$ and $-q$ separated by $d$. The potential on the perpendicular bisector at distance $r$ is $V = 0$ (by symmetry — the contributions cancel). On the axis, at large distance $r$, $V \approx q d \cos\theta / (4\pi\varepsilon_0 r^2)$, where $\theta$ is the angle from the dipole axis.

**Example 2 — Parallel-plate capacitor.** A capacitor has plates of area $100\text{ cm}^2$ separated by $1\text{ mm}$ of air. Find the capacitance.
$C = \varepsilon_0 A/d = 8.85 \times 10^{-12} \times 100 \times 10^{-4} / 10^{-3} = 8.85 \times 10^{-11}\text{ F} = 88.5\text{ pF}$.

**Example 3 — Energy in a capacitor.** A $100\ \mu\text{F}$ capacitor is charged to $12\text{ V}$. How much energy is stored?
$U = \tfrac{1}{2} C V^2 = \tfrac{1}{2} \times 10^{-4} \times 144 = 7.2 \times 10^{-3}\text{ J} = 7.2\text{ mJ}$. This is the energy delivered by a camera flash.

## Common Misconceptions
- **"Potential is the same as potential energy."** Potential is potential *energy per unit charge*. They have different units and different signs.
- **"Voltage is a vector."** Voltage is a scalar (potential difference). The *electric field* is the vector.
- **"A capacitor stores charge."** It stores *energy*, in the electric field between the plates. The charges on the plates are equal and opposite; the net charge is zero.
- **"Higher capacitance means more charge at the same voltage."** True, but the more interesting statement is that the *energy* scales as $C V^2/2$. A bigger capacitor stores more energy at the same voltage, and a smaller voltage stores less.

## Connections
The relation $V = -\int \vec{E} \cdot d\vec{l}$ is the same kind of line integral as the work–energy theorem from *Mechanics*. The capacitance and energy of a capacitor reappear in *RC Circuits* (the next module) and in the energy of atomic bonds in *Atomic and Molecular Physics*. The energy density $u_E = \tfrac{1}{2} \varepsilon_0 E^2$ becomes part of the Poynting vector (energy flow in EM waves) in *Waves and Optics*.

## Quick Check
1. Define the electric potential difference and its units.
2. What is the potential at a distance of $1\text{ m}$ from a $1\text{ nC}$ point charge, with $V(\infty) = 0$?
3. State the formula for the capacitance of a parallel-plate capacitor.
4. A $10\ \mu\text{F}$ capacitor is charged to $50\text{ V}$. How much energy does it store?
5. Why is the field inside a conductor zero in electrostatic equilibrium?

## Takeaway
- $V_B - V_A = -\int_A^B \vec{E} \cdot d\vec{l}$; $\vec{E} = -\nabla V$.
- Potential of a point charge: $V = q/(4\pi\varepsilon_0 r)$.
- Potentials superpose as scalars; the field is the negative gradient.
- Capacitance $C = Q/V$ is geometry-dependent; units are farads.
- Energy density in an electric field: $u_E = \tfrac{1}{2} \varepsilon_0 E^2$.
