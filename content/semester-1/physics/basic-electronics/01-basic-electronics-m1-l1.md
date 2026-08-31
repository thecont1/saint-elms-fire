***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: basic-electronics
courseName: Basic Electronics
moduleId: basic-electronics-module-1
moduleName: DC Circuits and Passive Components
lessonId: basic-electronics-m1-l1
lessonName: DC Circuits — Ohm's Law, Kirchhoff's Laws, Series and Parallel
lessonNumber: 1
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - bridge-physics-m1-l3
learningObjectives:
  - Apply Ohm's law and Kirchhoff's laws to DC circuits.
  - Compute equivalent resistance for series and parallel combinations.
  - Use voltage dividers and current dividers in practical circuits.
concepts:
  - Ohm's law
  - Kirchhoff's current law
  - Kirchhoff's voltage law
  - Series resistance
  - Parallel resistance
  - Voltage divider
tags:
  - physics
  - electronics
  - dc-circuits
  - ohm-law
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# DC Circuits — Ohm's Law, Kirchhoff's Laws, Series and Parallel

## Overview

Direct-current (DC) circuits are the simplest electronic systems: a source of constant voltage drives a current through resistors and other components. The lesson develops the three fundamental laws (Ohm's law, Kirchhoff's current law, Kirchhoff's voltage law), the rules for combining resistors in series and parallel, and the practical techniques of voltage and current division. The lesson is the foundation of every subsequent topic in electronics: passive components, diodes, transistors, op-amps, and digital circuits all build on the DC analysis developed here. The lesson emphasises both the mathematical analysis and the practical implementation, with worked examples drawn from common laboratory circuits.

## Learning Path

- **What you should already know**: the basic concepts of electric current, voltage, and resistance (from the Bridge Course); basic algebra and the solution of linear equations.
- **What this lesson adds**: the formal laws of DC circuit analysis; the rules for combining resistors; the voltage divider and current divider; the use of these tools in practical circuits.
- **What later lessons this will unlock**: passive components in Lesson m1-l2; diodes in Lesson m2-l1; transistors in Lesson m2-l2; measurement instruments in Lesson m2-l3; the build project in Lesson m3-l1.

## Core Explanation

### Electric current and voltage

**Electric current** $I$ is the rate of flow of electric charge: $I = d Q / d t$, measured in amperes (A). A current of $1$ A corresponds to $1$ C of charge flowing past a point per second.

**Voltage** $V$ (or potential difference) is the energy per unit charge: $V = W / Q$, measured in volts (V). A voltage of $1$ V corresponds to $1$ J of energy per $1$ C of charge.

The two quantities are related by the conservation of charge (Kirchhoff's current law) and the conservation of energy (Kirchhoff's voltage law), developed below.

### Resistance and Ohm's law

The **resistance** $R$ of a conductor is the ratio of the voltage across it to the current through it: $R = V / I$, measured in ohms ($\Omega$). A resistance of $1\ \Omega$ corresponds to $1$ V across a conductor carrying $1$ A.

**Ohm's law**: for an ohmic conductor (a metal wire, a carbon resistor, etc.), the current is proportional to the voltage: $V = I R$. Non-ohmic conductors (diodes, transistors, light bulbs) do not obey Ohm's law; the lesson focuses on ohmic conductors and returns to non-ohmic devices in the next module.

The inverse of resistance is **conductance** $G = 1 / R$, measured in siemens (S) or mho ($\Omega^{-1}$). High conductance means low resistance.

### Resistors

A **resistor** is a circuit element that obeys Ohm's law. Resistors are characterised by their resistance value (in ohms), their tolerance (e.g. 5% or 1%), and their power rating (e.g. $1/4$ W, $1/2$ W, $1$ W). The colour bands on a through-hole resistor encode the value and tolerance.

For a $1\ \text{k}\Omega \pm 5\%$ resistor with colour bands brown-black-red-gold: the first two bands (brown-black) are $1$ and $0$, the third band (red) is the multiplier $10^2 = 100$, giving $10 \times 100 = 1000\ \Omega = 1\ \text{k}\Omega$. The fourth band (gold) is the tolerance $5\%$.

### Series resistance

When resistors are connected in **series** (one after another, with the same current through each), the equivalent resistance is the sum:

$$R_\text{eq} = R_1 + R_2 + \ldots + R_n.$$

The voltage across the combination is $V = I R_\text{eq}$; the voltage across each resistor is $V_k = I R_k$ (a voltage divider). The total power is $P = I^2 R_\text{eq} = \sum I^2 R_k$.

### Parallel resistance

When resistors are connected in **parallel** (across the same two nodes, with the same voltage across each), the equivalent resistance is the reciprocal of the sum of reciprocals:

$$\frac{1}{R_\text{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \ldots + \frac{1}{R_n}.$$

For two resistors in parallel, $R_\text{eq} = R_1 R_2 / (R_1 + R_2)$. The current through each resistor is $I_k = V / R_k$ (a current divider). The total power is $P = V^2 / R_\text{eq} = \sum V^2 / R_k$.

### Kirchhoff's laws

**Kirchhoff's current law (KCL)**: the sum of currents into a node equals the sum of currents out of the node. This is the conservation of charge: charge cannot accumulate at a node.

**Kirchhoff's voltage law (KVL)**: the sum of voltage drops around any closed loop in a circuit equals zero. This is the conservation of energy: the net energy change around a closed loop is zero.

Kirchhoff's laws are the basis of circuit analysis. Combined with Ohm's law, they allow the solution of any DC circuit.

### Solving a circuit

The standard approach:

1. Label the nodes and the branches.
2. Define the currents in each branch (with a sign convention).
3. Apply KCL at each node.
4. Apply KVL around each independent loop.
5. Solve the resulting linear system.

For a circuit with $n$ branches and $p$ nodes, the number of independent KVL equations is $n - p + 1$ (the number of independent loops). The total number of independent equations equals the number of unknown currents, and the system can be solved.

### Voltage divider

A **voltage divider** is a series of two or more resistors across a voltage source. The voltage across any resistor is proportional to its share of the total resistance:

$$V_k = V_\text{total} \cdot \frac{R_k}{R_1 + R_2 + \ldots + R_n}.$$

Voltage dividers are used to scale a voltage (e.g. to provide a reference voltage to an op-amp) and to provide bias to a transistor. The Thevenin equivalent of a voltage divider is a voltage source $V_\text{th} = V_\text{total} R_2 / (R_1 + R_2)$ in series with a resistance $R_\text{th} = R_1 R_2 / (R_1 + R_2)$.

### Current divider

A **current divider** is a parallel combination of two or more resistors. The current through any resistor is proportional to its share of the total conductance:

$$I_k = I_\text{total} \cdot \frac{G_k}{G_1 + G_2 + \ldots + G_n} = I_\text{total} \cdot \frac{1/R_k}{1/R_1 + 1/R_2 + \ldots + 1/R_n}.$$

Current dividers are used to split a current into known fractions (e.g. to bias a transistor or to measure a current). The Norton equivalent of a current divider is a current source $I_\text{no} = I_\text{total}$ in parallel with a resistance $R_\text{no} = 1 / (1/R_1 + 1/R_2 + \ldots + 1/R_n)$.

### Thevenin and Norton equivalents

Any linear circuit can be reduced to either a Thevenin equivalent (a voltage source $V_\text{th}$ in series with a resistance $R_\text{th}$) or a Norton equivalent (a current source $I_\text{no}$ in parallel with a resistance $R_\text{no}$). The two are related by $V_\text{th} = I_\text{no} R_\text{no}$ and $R_\text{th} = R_\text{no}$.

The Thevenin and Norton equivalents are the basis of circuit simplification: to analyse the behaviour of a circuit at a particular pair of terminals, replace the rest of the circuit by its equivalent. The technique is essential for understanding loading effects, maximum power transfer, and the input/output impedance of amplifiers.

### Maximum power transfer

For a source with Thevenin equivalent $(V_\text{th}, R_\text{th})$ connected to a load $R_L$, the power delivered to the load is

$$P_L = \frac{V_\text{th}^2 R_L}{(R_\text{th} + R_L)^2}.$$

The power is maximised when $R_L = R_\text{th}$ (the **impedance matching** condition), with maximum power $P_\text{max} = V_\text{th}^2 / (4 R_\text{th})$. The result is the basis of the design of audio amplifiers, RF transmission lines, and antenna matching networks.

### Worked examples

**Example 1 — Voltage divider.**

A $12$ V source is connected to a series combination of $R_1 = 1\ \text{k}\Omega$ and $R_2 = 2\ \text{k}\Omega$. Find the voltage across $R_2$.

**Solution.** $V_2 = 12 \cdot 2 / (1 + 2) = 8\ \text{V}$. ✓

**Example 2 — Parallel resistors.**

A $10$ V source is connected to a parallel combination of $R_1 = 100\ \Omega$ and $R_2 = 200\ \Omega$. Find the total current.

**Solution.** $R_\text{eq} = 100 \cdot 200 / (100 + 200) = 200/3 \approx 66.7\ \Omega$. $I = V / R_\text{eq} = 10 / 66.7 = 0.15\ \text{A}$. ✓

**Example 3 — Kirchhoff's laws.**

A circuit has a $12$ V source, a $4\ \Omega$ resistor in series, and a parallel combination of $6\ \Omega$ and $12\ \Omega$ resistors. Find the current through the $6\ \Omega$ resistor.

**Solution.** The parallel combination is $R_p = 6 \cdot 12 / (6 + 12) = 4\ \Omega$. The total resistance is $R_\text{total} = 4 + 4 = 8\ \Omega$. The total current is $I = 12 / 8 = 1.5\ \text{A}$. The voltage across the parallel combination is $V_p = I \cdot R_p = 1.5 \cdot 4 = 6\ \text{V}$. The current through the $6\ \Omega$ resistor is $I_6 = V_p / 6 = 1\ \text{A}$.

### Common pitfalls

- **Confusing series and parallel**: the distinction is in how the current and voltage are shared. Series: same current. Parallel: same voltage.
- **Forgetting the power rating**: a $1/4$ W resistor in a circuit with $1$ W of dissipation will burn out. Always check the power rating.
- **Confusing conductance and resistance**: conductance is the inverse of resistance. The two are different quantities.
- **Using a non-ohmic device with Ohm's law**: diodes, transistors, and light bulbs do not obey Ohm's law. Use the device's I-V characteristic instead.
- **Ignoring the Thevenin resistance**: when connecting a source to a load, the source's internal resistance affects the voltage and the current at the load.

### Key Ideas

- Ohm's law: $V = I R$ for an ohmic conductor.
- Kirchhoff's current law: sum of currents into a node equals sum of currents out.
- Kirchhoff's voltage law: sum of voltage drops around a closed loop equals zero.
- Series resistance: $R_\text{eq} = \sum R_k$. Parallel resistance: $1 / R_\text{eq} = \sum 1 / R_k$.
- Voltage divider: $V_k = V \cdot R_k / \sum R_k$. Current divider: $I_k = I \cdot G_k / \sum G_k$.
- Thevenin and Norton equivalents: any linear circuit reduces to a voltage source in series with a resistance, or a current source in parallel with a resistance.
- Maximum power transfer: $P_L$ is maximised when $R_L = R_\text{th}$.

## Worked Examples

### Example 1 — Wheatstone bridge

A Wheatstone bridge is a circuit for measuring an unknown resistance. Four resistors $R_1, R_2, R_3, R_4$ are arranged in a diamond, with a galvanometer across the middle. The bridge is balanced when $R_1 / R_2 = R_3 / R_4$, in which case no current flows through the galvanometer. Given $R_1 = 100\ \Omega$, $R_2 = 200\ \Omega$, $R_3 = 50\ \Omega$, find $R_4$ for balance.

**Solution.** $R_4 = R_3 \cdot R_2 / R_1 = 50 \cdot 200 / 100 = 100\ \Omega$. ✓

### Example 2 — Resistor network

Find the equivalent resistance between $A$ and $B$ in a network of four $10\ \Omega$ resistors arranged in a square.

**Solution.** The square has $4$ resistors of $10\ \Omega$ each. The two paths from $A$ to $B$ each have $2$ resistors in series ($20\ \Omega$). The two paths are in parallel, giving $R_\text{eq} = 20 \cdot 20 / (20 + 20) = 10\ \Omega$.

### Example 3 — Loading a voltage source

A voltage source has Thevenin equivalent $V_\text{th} = 10\ \text{V}$, $R_\text{th} = 1\ \text{k}\Omega$. A load $R_L = 1\ \text{k}\Omega$ is connected. Find the voltage across the load and the power delivered.

**Solution.** Voltage divider: $V_L = V_\text{th} \cdot R_L / (R_\text{th} + R_L) = 10 \cdot 1 / 2 = 5\ \text{V}$. Power: $P_L = V_L^2 / R_L = 25 / 1000 = 25\ \text{mW}$. (Note: the voltage is half the open-circuit voltage, because the load matches the Thevenin resistance.)

## Common Misconceptions

- **"Ohm's law is universal."** It applies to ohmic conductors (metals, carbon resistors, most metal-oxide resistors). Non-ohmic devices (diodes, transistors, light bulbs) do not obey it.
- **"Series and parallel are interchangeable."** They are not. Series: same current. Parallel: same voltage. The two give different equivalent resistances.
- **"Thevenin and Norton are different circuits."** They are different representations of the same circuit, related by a source transformation.
- **"Maximum power transfer is always the goal."** No. In many applications (e.g. voltage regulators), the goal is to deliver a constant voltage, not maximum power. Maximum power transfer is the goal in RF and audio applications where the source and load impedances must be matched.
- **"Resistors are colour-coded by value."** The colour code encodes the value and the tolerance, not the power rating. The power rating is encoded by the physical size of the resistor.

## Connections

- DC circuit analysis is the foundation of all electronics; AC analysis extends the same tools using complex impedances.
- The voltage divider is the basis of bias networks in transistor amplifiers.
- Thevenin and Norton equivalents are essential for the analysis of amplifiers, where the input and output impedances determine the loading.
- The maximum power transfer theorem is the basis of impedance matching in RF and audio.
- The Wheatstone bridge is a classic example of a null measurement; the principle of null measurement appears in many precision instruments.

## Quick Check

1. State Ohm's law and Kirchhoff's laws.
2. Find the equivalent resistance of three $10\ \Omega$ resistors in series; of three $10\ \Omega$ resistors in parallel.
3. A $10$ V source is connected to a voltage divider of $R_1 = 1\ \text{k}\Omega$ and $R_2 = 2\ \text{k}\Omega$. Find the voltage across $R_2$.
4. A voltage source has $V_\text{th} = 12\ \text{V}$, $R_\text{th} = 100\ \Omega$. Find the load resistance for maximum power transfer and the maximum power.
5. Find the Thevenin equivalent of a circuit consisting of a $12$ V source in series with a $4\ \Omega$ resistor, connected to a parallel combination of $6\ \Omega$ and $12\ \Omega$.

## Takeaway

- Ohm's law and Kirchhoff's laws are the foundation of DC circuit analysis.
- Series and parallel combinations are reduced by simple rules.
- The voltage divider and current divider are the workhorses of practical circuits.
- Thevenin and Norton equivalents simplify the analysis of complex circuits.
- Maximum power transfer is achieved at impedance matching.
- The same tools extend to AC circuits with complex impedances.
