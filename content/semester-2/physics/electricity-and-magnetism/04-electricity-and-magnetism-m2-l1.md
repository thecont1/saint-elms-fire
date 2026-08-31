***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: electricity-and-magnetism
courseName: Electricity and Magnetism
moduleId: electricity-and-magnetism-module-2
moduleName: Current and Circuits
lessonId: electricity-and-magnetism-m2-l1
lessonName: Ohm's Law, Resistance and DC Circuits
lessonNumber: 4
moduleNumber: 2
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 4
prerequisites:
  - electricity-and-magnetism-m1-l3
learningObjectives:
  - Define electric current, current density, and drift velocity.
  - State Ohm's law and define resistance and resistivity.
  - Compute the resistance of a uniform wire.
  - Use $P = IV$ to calculate power dissipation in a resistor.
concepts:
  - Electric current
  - Current density
  - Drift velocity
  - Ohm's law
  - Resistance
  - Resistivity
tags:
  - physics
  - electromagnetism
  - circuits
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
***

# Ohm's Law, Resistance and DC Circuits

## Overview
So far we have studied static charges. Now we study *charges in motion* — electric current. Current is the flow of charge through a conductor, driven by an electric field. The relation between the current, the field, and the material properties of the conductor is Ohm's law. This lesson defines current, drift velocity, resistance, and resistivity, and gives the practical tools to analyse direct-current (DC) circuits.

## Learning Path
- What you should already know: the electric field, the potential difference, basic algebra.
- What this lesson adds: a quantitative description of steady currents and the energy they dissipate.
- What it unlocks: Kirchhoff's laws, RC circuits, the time-dependent behaviour of capacitors, and the band theory of solids in *Solid State Physics*.

## Core Explanation
**Electric current.** The current $I$ through a surface is the rate at which charge crosses the surface:

$$I = \frac{dQ}{dt},$$

measured in amperes (A), where $1\text{ A} = 1\text{ C/s}$. Current is a *scalar* — though it is associated with a direction (the direction of charge flow), the symbol $I$ is the magnitude (or signed, in the sense of conventional current).

The **current density** $\vec{J}$ is current per unit area: $I = \int \vec{J} \cdot d\vec{A}$. $\vec{J}$ is a vector field with units of $\text{A/m}^2$.

**Drift velocity.** In a conductor, free electrons are in constant random thermal motion, but in the presence of an electric field they acquire a small *drift* velocity superimposed on the thermal motion. The drift speed is

$$v_d = \frac{J}{n e},$$

where $n$ is the free-electron density and $e$ is the elementary charge. For typical copper wires, $v_d$ is on the order of $\text{mm/s}$ — surprisingly slow. The electrical signal travels at the speed of light, but the individual electrons do not.

**Ohm's law.** For many materials (especially metals), the current density is proportional to the electric field:

$$\vec{J} = \sigma \vec{E},$$

where $\sigma$ is the *conductivity* of the material. This is the local form of Ohm's law. In a wire of uniform cross-section, integrating over the cross-section gives the more familiar form

$$V = I R,$$

where $V$ is the potential difference across the wire, $I$ the current, and $R$ the resistance (measured in ohms, $\Omega$).

**Resistance and resistivity.** For a uniform wire of length $L$ and cross-sectional area $A$,

$$R = \frac{\rho L}{A},$$

where $\rho$ is the *resistivity* (units $\Omega \cdot \text{m}$) and $\sigma = 1/\rho$ is the conductivity. Copper has $\rho \approx 1.7 \times 10^{-8}\ \Omega \cdot \text{m}$, very low. Glass has $\rho \approx 10^{10}\ \Omega \cdot \text{m}$ or more, very high. The ratio of resistivities between a good conductor and a good insulator is more than $20$ orders of magnitude.

**Temperature dependence.** For metals, resistivity increases linearly with temperature: $\rho(T) \approx \rho_0 (1 + \alpha (T - T_0))$. For semiconductors, resistivity typically *decreases* with temperature as more charge carriers are thermally excited across the band gap.

**Power dissipation.** A current $I$ driven by a potential difference $V$ dissipates power

$$P = IV = I^2 R = V^2 / R,$$

measured in watts. This is Joule heating: the kinetic energy gained by the charge carriers from the field is transferred to the lattice through collisions, increasing thermal motion.

**Resistors in series and parallel.** Series: same current, voltages add. $R_{\text{total}} = R_1 + R_2 + \cdots$. Parallel: same voltage, currents add. $1/R_{\text{total}} = 1/R_1 + 1/R_2 + \cdots$.

**Batteries and EMF.** A battery is a source of electromotive force (EMF) $\mathcal{E}$, measured in volts. A real battery has internal resistance $r$ in series with the EMF. The terminal voltage is $V = \mathcal{E} - I r$. The current in a circuit with EMF $\mathcal{E}$ and external resistance $R$ is $I = \mathcal{E}/(R + r)$.

## Key Ideas
- Current $I = dQ/dt$; current density $\vec{J}$ is current per unit area.
- Ohm's law: $V = IR$, or locally $\vec{J} = \sigma \vec{E}$.
- Resistivity $\rho$ is an intrinsic material property; resistance $R = \rho L/A$ is geometry-dependent.
- Power dissipation: $P = IV = I^2 R$.
- Resistors in series add; in parallel, the reciprocals add.

## Worked Examples
**Example 1 — Resistance of a copper wire.** A $100\text{ m}$ copper wire has cross-section $1\text{ mm}^2$. Find its resistance.
$R = \rho L/A = 1.7 \times 10^{-8} \times 100 / (10^{-6}) = 1.7\ \Omega$.

**Example 2 — Power in a resistor.** A $12\text{ V}$ battery is connected to a $100\ \Omega$ resistor. Find the current and the power dissipated.
$I = V/R = 12/100 = 0.12\text{ A}$. $P = V^2/R = 144/100 = 1.44\text{ W}$.

**Example 3 — Battery with internal resistance.** A $9\text{ V}$ battery with internal resistance $1\ \Omega$ is connected to a $4\ \Omega$ external load. Find the current and the terminal voltage.
$I = \mathcal{E}/(R + r) = 9/5 = 1.8\text{ A}$. $V = IR = 7.2\text{ V}$ (the terminal voltage is less than the EMF).

## Common Misconceptions
- **"Current is used up in a resistor."** No. Current is the *same* through series elements; what is "used up" is the potential energy of the charges.
- **"Resistance depends on voltage and current."** For ohmic materials, $R$ is a constant of the material at a given temperature. The relation $V = IR$ holds for any $V$ and $I$ you measure, but $R$ itself is fixed.
- **"High voltage is more dangerous than high current."** It is the current through the body that is dangerous (about $100\text{ mA}$ through the heart can be lethal). But high voltage drives current more easily, and at high voltage the body has lower resistance, so high voltage is more dangerous in practice.
- **"Batteries store charge."** Batteries store *chemical* energy; charges flow because of the EMF, not because the battery is "full of charge".

## Connections
Ohm's law is the macroscopic expression of the microscopic behaviour of charge carriers in a conductor — the connection to band theory in *Solid State Physics* is direct: in metals, the partially filled conduction band allows free-electron conduction; in insulators, the band gap prevents it. The drift-velocity picture underlies the Hall effect (next lesson) and the resistance-temperature behaviour in *Solid State Physics*.

## Quick Check
1. State Ohm's law and define each symbol.
2. A $1\text{ m}$ wire of $1\text{ mm}^2$ cross-section has a resistance of $0.017\ \Omega$. What is the resistivity?
3. Two $10\ \Omega$ resistors are connected (a) in series and (b) in parallel. Find the equivalent resistance in each case.
4. A $120\text{ V}$ heater draws $10\text{ A}$. What is its resistance and its power dissipation?
5. What is the drift velocity of electrons in a $1\text{ mm}^2$ copper wire carrying $1\text{ A}$? ($n \approx 8.5 \times 10^{28}\text{ m}^{-3}$ for copper.)

## Takeaway
- Current is the rate of charge flow; current density is current per unit area.
- Ohm's law: $V = IR$, locally $\vec{J} = \sigma \vec{E}$.
- Resistance $R = \rho L/A$; resistivity is an intrinsic material property.
- Power dissipated: $P = IV = I^2 R$.
- Resistors in series add; resistors in parallel combine reciprocally.
