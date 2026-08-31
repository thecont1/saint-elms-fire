***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: thermal-physics-and-statistical-mechanics
courseName: Thermal Physics and Statistical Mechanics
moduleId: thermal-physics-and-statistical-mechanics-module-1
moduleName: Temperature, Equations of State, and the First Law
lessonId: thermal-physics-and-statistical-mechanics-m1-l3
lessonName: The First Law of Thermodynamics and Internal Energy
lessonNumber: 3
moduleNumber: 1
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - thermal-physics-and-statistical-mechanics-m1-l2
  - integral-calculus
learningObjectives:
  - State the first law of thermodynamics in words, formula, and differential form.
  - Distinguish between heat, work, and internal energy in a thermodynamic process.
  - Apply the first law to isothermal, isobaric, isochoric, and adiabatic processes of an ideal gas.
concepts:
  - First law
  - Internal energy
  - Heat capacity
  - Latent heat
  - Isothermal process
  - Adiabatic process
tags:
  - physics
  - thermodynamics
  - first-law
  - processes
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# The First Law of Thermodynamics and Internal Energy

## Overview

The first law of thermodynamics is the statement of energy conservation for thermodynamic systems: the change in internal energy equals the heat added plus the work done on the system. The lesson develops the law from the operational definitions of heat and work, derives the heat capacities at constant volume and constant pressure, and applies the law to four canonical processes: isothermal (constant temperature), isobaric (constant pressure), isochoric (constant volume), and adiabatic (no heat exchange). Each process is illustrated with an ideal-gas example, and the relations among the heat capacities are derived. The lesson is the foundation of all quantitative thermodynamics.

## Learning Path

- **What you should already know**: the concept of internal energy (Lesson m1-l1); the ideal gas law (Lesson m1-l2); the integral for work done by pressure; the kinetic-theory result $\langle K \rangle = (3/2) k_B T$ per molecule.
- **What this lesson adds**: the first law in words, formula, and differential form; the heat capacities $C_V$ and $C_p$; the four canonical processes; the Mayer relation $C_p - C_V = R$; the adiabatic relation $p V^\gamma = \text{const}$.
- **What later lessons this will unlock**: the second law and entropy in Module 2; the kinetic theory of gases in Module 2; the thermodynamic potentials in Module 3.

## Core Explanation

### The first law

The **first law of thermodynamics** states: the change in the internal energy of a closed system equals the heat added to the system plus the work done on the system:

$$\Delta U = Q + W,$$

where $Q$ is the heat added to the system and $W$ is the work done on the system (note that many textbooks use the convention $W$ for the work done *by* the system, with a sign flip; we use the "on the system" convention here, which is consistent with $\Delta U = Q + W$).

In differential form,

$$d U = \delta Q + \delta W,$$

where $d U$ is an exact differential (a property of the state) and $\delta Q$ and $\delta W$ are inexact differentials (path-dependent). The distinction is fundamental: $U$ is a state function, but $Q$ and $W$ are not.

### Heat and work

**Heat** $Q$ is the energy transferred across the system boundary because of a temperature difference. The sign convention is $Q > 0$ for heat added to the system, $Q < 0$ for heat removed.

**Work** $W$ is any other energy transfer across the boundary. For a system whose only work mode is pressure–volume, $\delta W = -p\, dV$ for the work done *on* the system (work done *by* the system is $+p\, dV$). The minus sign is because work done by the system is positive when the system expands ($dV > 0$); by the "on the system" convention, this is work done on the surroundings, not on the system.

For other work modes (e.g. electrical, magnetic, surface tension), the work term is added: $\delta W = -p\, dV + \mathcal{E}\, dq + \mu\, dN + \ldots$.

### Internal energy as a state function

A **state function** depends only on the current state of the system, not on the history. The internal energy $U$ is a state function: $\Delta U$ between two equilibrium states is the same regardless of the path taken.

The state-function property is the source of much of the power of thermodynamics. It allows us to compute $\Delta U$ for any process (perhaps irreversible) by finding a reversible path between the same two states and computing $Q + W$ along it.

### Heat capacity

The **heat capacity** of a system is the heat required to raise its temperature by one kelvin:

$$C = \frac{\delta Q}{d T}.$$

The heat capacity depends on the conditions under which the heat is added. Two are particularly important:

- **Heat capacity at constant volume** $C_V$: heat added at fixed $V$. Since $W = 0$, $Q = \Delta U$, and $C_V = (\partial U / \partial T)_V$.
- **Heat capacity at constant pressure** $C_p$: heat added at fixed $p$. The work done is $-p\, \Delta V$, and $C_p = (\partial H / \partial T)_p$, where $H = U + p V$ is the **enthalpy**.

For a given amount of substance, the molar heat capacities are $c_{V,m} = C_V / n$ and $c_{p,m} = C_p / n$.

### Ideal-gas heat capacities

For an ideal gas, the internal energy depends only on the temperature: $U = U(T)$. The heat capacity at constant volume is then

$$C_V = \frac{d U}{d T}, \quad U(T) = \int C_V\, dT + U(T_0).$$

For a monatomic ideal gas (e.g. helium, neon, argon), the kinetic theory gives $C_V = (3/2) n R$ (three translational degrees of freedom). For a diatomic ideal gas at ordinary temperatures, $C_V = (5/2) n R$ (three translational + two rotational). At higher temperatures, vibrational modes are excited and $C_V$ rises to $(7/2) n R$ and beyond.

The heat capacity at constant pressure is related to $C_V$ by the **Mayer relation**:

$$C_p = C_V + n R.$$

For a monatomic gas: $C_p = (5/2) n R$. For a diatomic gas at ordinary temperatures: $C_p = (7/2) n R$. The ratio $\gamma = C_p / C_V$ is used in the adiabatic relations below.

### Isothermal process

An **isothermal process** keeps the temperature constant. For an ideal gas, the internal energy depends only on temperature, so $\Delta U = 0$ and $Q = -W$. The work done by the gas in an isothermal expansion from $V_1$ to $V_2$ is

$$W_\text{by} = \int_{V_1}^{V_2} p\, dV = \int_{V_1}^{V_2} \frac{n R T}{V}\, dV = n R T \ln(V_2/V_1).$$

For expansion, $V_2 > V_1$, $W_\text{by} > 0$, and $Q > 0$ (heat is absorbed to maintain temperature). For compression, $V_2 < V_1$, $W_\text{by} < 0$, and $Q < 0$.

### Isobaric process

An **isobaric process** keeps the pressure constant. The work done by the gas is $W_\text{by} = p (V_2 - V_1) = n R (T_2 - T_1)$. The heat added is $Q = n c_{p,m} (T_2 - T_1)$, and the change in internal energy is $\Delta U = n c_{V,m} (T_2 - T_1)$. Check: $Q - W_\text{by} = n c_{p,m} \Delta T - n R \Delta T = n (c_{p,m} - R) \Delta T = n c_{V,m} \Delta T = \Delta U$. ✓ (Mayer relation $c_{p,m} - c_{V,m} = R$.)

### Isochoric process

An **isochoric process** keeps the volume constant. The work is zero ($W = 0$). The heat added is $Q = n c_{V,m} (T_2 - T_1)$, and $\Delta U = Q$.

### Adiabatic process

An **adiabatic process** has no heat exchange: $Q = 0$, so $\Delta U = W$. For an ideal gas undergoing a quasi-static adiabatic change, the temperature, pressure, and volume are related by

$$p V^\gamma = \text{const}, \quad T V^{\gamma - 1} = \text{const}, \quad T^{\gamma} p^{1 - \gamma} = \text{const},$$

where $\gamma = C_p / C_V$ is the heat-capacity ratio. For air (diatomic, $\gamma = 7/5$): $p V^{1.4} = \text{const}$.

The derivation uses $d U = \delta W$ with $d U = n c_{V,m} dT$ and $\delta W = -p dV$, combined with the ideal gas law $p V = n R T$. The result is the adiabatic relations above.

### Adiabatic vs isothermal processes

The adiabatic $p$-$V$ curve is steeper than the isothermal $p$-$V$ curve: for a given volume change, the pressure change is larger in the adiabatic case. The reason is that the temperature changes in the adiabatic case (cooling on expansion, heating on compression), which reinforces the pressure change.

For a Carnot cycle (covered in Module 2), the two adiabatic legs and the two isothermal legs form a closed cycle in the $p$-$V$ plane. The work done in the cycle is the area enclosed, and the efficiency is determined by the temperature ratio of the two isotherms.

### Latent heat

The **latent heat** is the heat required to change the phase of a unit mass of a substance without changing its temperature:

$$Q = m L,$$

where $L$ is the specific latent heat. Common values at atmospheric pressure:

- Latent heat of fusion of water: $L_f = 333$ kJ/kg.
- Latent heat of vaporisation of water: $L_v = 2260$ kJ/kg.

The high latent heat of vaporisation of water makes evaporative cooling effective (sweating, panting). It also means that a lot of energy is required to boil water; steam engines and steam turbines exploit this.

### The first law as energy conservation

The first law is the statement that energy is conserved in thermodynamic processes. It rules out **perpetual motion machines of the first kind** — devices that produce work without any energy input. Many inventors have proposed such machines; the first law rules them all out.

The first law is not sufficient to rule out perpetual motion machines of the second kind (which produce work by extracting heat from a single reservoir, with no other effect). The second law (Module 2) rules those out.

### Enthalpy

The **enthalpy** is the state function

$$H = U + p V.$$

For a process at constant pressure, the heat added is $Q_p = \Delta H$. Enthalpy is useful in chemistry (heats of reaction at constant pressure) and in engineering (heat exchanges at atmospheric pressure).

For an ideal gas, $H$ depends only on temperature: $d H = n c_{p,m} dT$.

### Worked Examples

**Example 1 — Isothermal compression of an ideal gas.** $1$ mol of an ideal gas is compressed isothermally at $300$ K from $10$ L to $2$ L. Find $Q$, $W$, and $\Delta U$.

**Solution.** $W_\text{by} = n R T \ln(V_2/V_1) = 1 \times 8.314 \times 300 \times \ln(2/10) = 2494 \times (-1.609) \approx -4013$ J. So the work done *on* the gas is $W = +4013$ J. For an isothermal process, $\Delta U = 0$, so $Q = -W = -4013$ J. The gas releases $4013$ J of heat to the surroundings.

**Example 2 — Adiabatic expansion of an ideal gas.** $0.5$ mol of a monatomic ideal gas ($\gamma = 5/3$) is expanded adiabatically from $V_1 = 2$ L at $T_1 = 400$ K to $V_2 = 8$ L. Find the final temperature.

**Solution.** $T_2 / T_1 = (V_1 / V_2)^{\gamma - 1}$. Here $\gamma - 1 = 2/3$, and $V_1 / V_2 = 2/8 = 1/4$. So $T_2 / T_1 = (1/4)^{2/3} = 4^{-2/3} = 1 / 4^{2/3} = 1 / (2^{4/3}) \approx 1/2.52 \approx 0.397$. $T_2 \approx 400 \times 0.397 \approx 159$ K.

**Example 3 — Heating at constant pressure.** $2$ mol of a diatomic ideal gas ($c_{p,m} = 29$ J/(mol·K), $c_{V,m} = 21$ J/(mol·K)) is heated at constant pressure from $300$ K to $500$ K. Find $Q$, $W$, and $\Delta U$.

**Solution.** $Q = n c_{p,m} \Delta T = 2 \times 29 \times 200 = 11{,}600$ J. $\Delta U = n c_{V,m} \Delta T = 2 \times 21 \times 200 = 8400$ J. $W = \Delta U - Q = 8400 - 11{,}600 = -3200$ J. The work is done *by* the gas (negative work done on the gas), and the energy to do this work comes from the heat input.

## Common Misconceptions

- **"Heat is contained in a body."** No. The energy contained in a body is the internal energy. Heat is energy in transit.
- **"$Q$ and $W$ are state functions."** They are not; they are path-dependent. Only $U$ (and derived state functions like $H$, $S$) are state functions.
- **"Isothermal means no heat exchange."** No. Isothermal means constant temperature; heat can flow (and must, to maintain constant temperature during expansion or compression). The opposite of isothermal is adiabatic, which has no heat exchange.
- **"Adiabatic means isothermal."** No. Adiabatic means no heat exchange, but the temperature changes.
- **"The internal energy of an ideal gas depends on pressure."** No. For an ideal gas, $U$ depends only on temperature.

## Connections

- The first law is the foundation of all quantitative thermodynamics; the rest of the course refines and extends it.
- The four canonical processes are the building blocks of thermodynamic cycles (Carnot, Otto, Diesel, etc.).
- Enthalpy is the natural state function for chemistry and engineering; free energies (Module 3) extend the idea.
- The adiabatic relations are the basis of the speed of sound, the lapse rate in the atmosphere, and the operation of shock waves.
- The Mayer relation $C_p - C_V = R$ is a special case of a general thermodynamic identity (a Maxwell relation derived from the second law).

## Quick Check

1. State the first law of thermodynamics in words and in formula.
2. Why is $U$ a state function but $Q$ and $W$ are not?
3. A gas is heated at constant volume from $300$ K to $400$ K. For $2$ mol of a diatomic gas, find $Q$ and $\Delta U$.
4. An ideal gas is compressed adiabatically to half its initial volume. By what factor does the pressure change?
5. The Mayer relation for a diatomic ideal gas is $C_p - C_V = n R$. Compute $\gamma = C_p / C_V$.

## Takeaway

- The first law: $\Delta U = Q + W$ (with the "on the system" convention).
- Internal energy $U$ is a state function; $Q$ and $W$ are not.
- The four canonical processes: isothermal, isobaric, isochoric, adiabatic.
- The Mayer relation: $C_p - C_V = n R$.
- The adiabatic relations: $p V^\gamma = \text{const}$, $T V^{\gamma-1} = \text{const}$.
- Enthalpy $H = U + pV$ is the natural state function for constant-pressure processes.
- The first law rules out perpetual motion machines of the first kind.
