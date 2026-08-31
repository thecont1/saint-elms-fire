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
lessonId: electricity-and-magnetism-m2-l2
lessonName: Kirchhoff's Laws and Network Analysis
lessonNumber: 5
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - electricity-and-magnetism-m2-l1
learningObjectives:
  - State Kirchhoff's current and voltage laws.
  - Apply the laws to a multi-loop DC circuit.
  - Solve for branch currents and node voltages.
  - Recognise the limits of simple-series-parallel analysis.
concepts:
  - Kirchhoff's current law (KCL)
  - Kirchhoff's voltage law (KVL)
  - Node
  - Loop
  - Branch
  - Mesh analysis
tags:
  - physics
  - electromagnetism
  - circuits
  - kirchhoff
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - conceptual
  - short-answer
***

# Kirchhoff's Laws and Network Analysis

## Overview
Real circuits are usually not just one loop or one pair of parallel resistors. They have multiple branches, multiple sources, and complicated topologies. Kirchhoff's two laws — one for current at a node, one for voltage around a loop — give a systematic way to write down the equations that govern any network of resistors, capacitors, and sources. This lesson states the laws, applies them to common circuits, and shows how to set up the linear equations that determine the unknown currents.

## Learning Path
- What you should already know: Ohm's law, series and parallel combinations, basic algebra.
- What this lesson adds: a systematic method to handle arbitrary DC networks.
- What it unlocks: AC circuit analysis, the mesh and nodal analysis techniques used in *Numerical Methods*, and the analog computation of physical systems.

## Core Explanation
**Two laws.**
- **Kirchhoff's current law (KCL)**: the sum of currents entering a node equals the sum leaving. Equivalently, $\sum I = 0$ at any node, with sign convention.
- **Kirchhoff's voltage law (KVL)**: the sum of potential differences around any closed loop is zero. Equivalently, $\sum V = 0$ around any loop.

These laws follow from the conservation of charge (KCL) and the conservation of energy (KVL). They apply to *any* lumped circuit at any instant, regardless of the components.

**Lumped vs. distributed.** A circuit is *lumped* if the components are small enough that the time for a signal to cross the circuit is much less than the timescales of interest. For such circuits, we can treat wires as equipotentials and components as discrete elements.

**Setting up equations.** To analyse a circuit with $N$ branches, you need $N$ independent equations. KCL gives one equation per node (less one for the reference), KVL gives one per independent loop, and Ohm's law gives a relation for each resistor. The result is a linear system that can be solved by substitution, elimination, or matrix methods.

**Sign conventions.** Choose a direction for each branch current. As you traverse a loop, a resistor in the direction of assumed current gives a voltage *drop* of $IR$ (a $-IR$ contribution to the KVL sum); a battery from $-$ to $+$ gives a $+\mathcal{E}$ contribution. Be consistent.

**Mesh analysis.** Choose a circulating current for each independent loop ("mesh"). Write KVL around each mesh in terms of the mesh currents. The result is a system of equations in the mesh currents, easily solved. The actual branch current is the algebraic sum of the mesh currents through that branch.

**Nodal analysis.** Choose a reference (ground) node. Write KCL at each non-reference node, expressing currents in terms of node voltages via Ohm's law. The result is a system in the node voltages, which can be solved. Nodal analysis is often easier than mesh for circuits with many parallel branches.

**Superposition.** For a linear circuit (all components obey linear $V$-$I$ relations), the response to multiple sources is the sum of responses to each source acting alone (with the others zeroed out — voltage sources shorted, current sources opened). This is a direct consequence of the linearity of Ohm's law and of KCL/KVL.

**Thevenin's theorem.** Any linear two-terminal network can be replaced by a single voltage source $\mathcal{E}_{\text{th}}$ in series with a single resistance $R_{\text{th}}$. The values are found by computing the open-circuit voltage across the terminals and the short-circuit current, then $R_{\text{th}} = \mathcal{E}_{\text{th}}/I_{\text{sc}}$. Thevenin's theorem is invaluable for analysing one branch of a complex circuit.

**Norton's theorem.** The dual of Thevenin's: any linear two-terminal network can be replaced by a current source $I_N$ in parallel with a resistance $R_N$.

## Key Ideas
- KCL: $\sum I = 0$ at any node; follows from charge conservation.
- KVL: $\sum V = 0$ around any loop; follows from energy conservation.
- A network with $N$ branches needs $N$ independent equations.
- Sign conventions: choose branch current directions and stick to them.
- Thevenin: a linear network is equivalent to a voltage source and a series resistance.

## Worked Examples
**Example 1 — Two-loop circuit.** A $12\text{ V}$ battery (internal resistance $1\ \Omega$) is in series with a $4\ \Omega$ resistor and a parallel combination of $6\ \Omega$ and $3\ \Omega$ resistors. Find the current through the battery.
Parallel combination: $R_p = (6 \cdot 3)/(6 + 3) = 2\ \Omega$. Total: $1 + 4 + 2 = 7\ \Omega$. Current: $I = 12/7 \approx 1.71\text{ A}$.

**Example 2 — Wheatstone bridge.** A Wheatstone bridge has four resistors $R_1, R_2, R_3, R_4$ in a diamond, with a galvanometer across the middle. The bridge is balanced when $R_1/R_2 = R_3/R_4$, in which case no current flows through the galvanometer. This is the principle of the classical resistance-measuring bridge.

**Example 3 — Two sources.** A $6\text{ V}$ and a $9\text{ V}$ battery, both with $0.5\ \Omega$ internal resistance, are connected in parallel (same polarity) across a $4\ \Omega$ load. Find the current through each battery and the load.
Use mesh analysis with two loops. Let $I_1$ be the loop with the $6\text{ V}$ battery, $I_2$ with the $9\text{ V}$ battery. KVL on each:
$6 - 0.5 I_1 - 4 (I_1 + I_2) = 0$
$9 - 0.5 I_2 - 4 (I_1 + I_2) = 0$.
Solve: subtract to get $3 - 0.5 I_1 + 0.5 I_2 = 0 \Rightarrow I_2 = I_1 - 6$. Substitute: $6 - 0.5 I_1 - 4 (2 I_1 - 6) = 6 - 0.5 I_1 - 8 I_1 + 24 = 30 - 8.5 I_1 = 0 \Rightarrow I_1 = 30/8.5 \approx 3.53\text{ A}$. Then $I_2 \approx -2.47\text{ A}$ (the $9\text{ V}$ battery is being charged by the $6\text{ V}$ battery). Load current: $I_1 + I_2 \approx 1.06\text{ A}$.

## Common Misconceptions
- **"The current returns to the battery."** Current is conserved; the same current that leaves one terminal returns to the other. But the charges are not the same electrons — they enter and leave the battery through different wires.
- **"KVL says voltages sum to the EMF."** KVL says the *algebraic* sum of potential differences around a loop is zero. You can write it as "sum of EMFs = sum of $IR$ drops" if you choose a consistent sign convention.
- **"Short circuits are always bad."** In a power supply, a short circuit draws the maximum current the supply can deliver — often damaging. But in some control circuits, a deliberate short is used to provide a low-impedance reference.
- **"Mesh and nodal analysis give different answers."** They give the same answer if applied correctly. The choice is a matter of convenience.

## Connections
KCL and KVL are linear-system statements, and the matrices that arise in circuit analysis are the same ones studied in *Linear Algebra* (Sem 5). Mesh and nodal analysis are direct applications of graph theory. Thevenin's theorem is an early example of equivalent-circuit reduction, used in semiconductor modelling in *Solid State Physics* and in the analysis of neural circuits in biophysics.

## Quick Check
1. State Kirchhoff's current and voltage laws in your own words.
2. In a circuit with three branches meeting at a node with currents $2\text{ A}$ and $3\text{ A}$ entering, what is the current leaving?
3. State Thevenin's theorem and explain what it is useful for.
4. A circuit has two loops and three branches. How many independent equations are needed to find all branch currents?
5. Why is superposition valid for a linear circuit with multiple sources?

## Takeaway
- KCL: $\sum I = 0$ at any node; KVL: $\sum V = 0$ around any loop.
- Use Ohm's law to relate $V$ and $I$ in each resistor.
- Mesh or nodal analysis gives a linear system; the number of independent equations equals the number of unknowns.
- Thevenin's theorem: a linear two-terminal network reduces to a voltage source and series resistance.
- Superposition works for linear circuits: sum the responses to each source separately.
