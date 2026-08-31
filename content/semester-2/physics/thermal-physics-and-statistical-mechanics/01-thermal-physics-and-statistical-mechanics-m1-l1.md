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
lessonId: thermal-physics-and-statistical-mechanics-m1-l1
lessonName: Temperature, Heat and Thermal Equilibrium
lessonNumber: 1
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - mechanics
  - integral-calculus
learningObjectives:
  - Define temperature operationally and identify its measurement scales.
  - Distinguish temperature, heat, and internal energy.
  - State the zeroth law of thermodynamics and explain thermal equilibrium.
concepts:
  - Temperature scales
  - Heat vs temperature
  - Internal energy
  - Thermal equilibrium
  - Zeroth law
  - Thermal expansion
tags:
  - physics
  - thermodynamics
  - temperature
  - heat
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Temperature, Heat and Thermal Equilibrium

## Overview

Temperature is one of the most familiar physical quantities, but its definition is subtle. The lesson opens the thermal-physics sequence by developing the operational definition of temperature, the distinction between temperature, heat, and internal energy, the temperature scales in common use, and the zeroth law of thermodynamics — the law that allows thermometers to work. The lesson closes with thermal expansion, the most direct macroscopic consequence of changing temperature. The lesson prepares you for the equations of state in Lesson m1-l2 and the first law of thermodynamics in Lesson m1-l3.

## Learning Path

- **What you should already know**: the SI units (from the Bridge Course); the basic kinematic and dynamic concepts from Mechanics; the integral calculus for the work done by pressure.
- **What this lesson adds**: the operational definition of temperature; the distinction between temperature, heat, and internal energy; the zeroth law; thermal expansion; temperature scales and conversion.
- **What later lessons this will unlock**: the ideal gas law in Lesson m1-l2; the first law of thermodynamics in Lesson m1-l3; the kinetic theory of gases in Module 2; entropy and the second law in Module 2.

## Core Explanation

### Temperature, intuitively

Temperature is a measure of how hot or cold a body is. Hotter bodies have higher temperatures. But this everyday notion is not precise enough for physics. A thermometer is a device whose physical property (e.g. the height of a mercury column) varies monotonically with "hotness"; the temperature is the reading of the calibrated scale.

The operational definition of temperature comes from thermal equilibrium. Two bodies in thermal contact eventually reach a state in which no further net heat flows between them; this is thermal equilibrium, and the two bodies have the same temperature. The principle that allows thermometers to work — and temperature to be a well-defined property of a single body — is the zeroth law of thermodynamics.

### The zeroth law of thermodynamics

The **zeroth law of thermodynamics** states: if two bodies are each in thermal equilibrium with a third, they are in thermal equilibrium with each other.

This sounds obvious, but it has a deep consequence: temperature is a well-defined property of any body in thermal equilibrium. The third body is a thermometer; the zeroth law guarantees that any two bodies with the same reading are in thermal equilibrium with each other.

The zeroth law is also the foundation of temperature measurement. The thermometer is calibrated by placing it in equilibrium with a body at a known temperature (e.g. melting ice, boiling water) and marking the reading. Then any body in equilibrium with the thermometer has the same temperature.

### Temperature scales

Several temperature scales are in use:

- **Kelvin (K)**: the SI base unit of temperature. $0$ K is absolute zero; the triple point of water is $273.16$ K. The kelvin is defined by setting the Boltzmann constant to $1.380649 \times 10^{-23}$ J/K exactly.
- **Celsius (°C)**: $T(°C) = T(K) - 273.15$. The triple point of water is $0.01 °C$, the freezing point (at $1$ atm) is approximately $0 °C$, and the boiling point is approximately $100 °C$.
- **Fahrenheit (°F)**: used in the United States. $T(°F) = 1.8 T(°C) + 32$. The freezing point of water is $32 °F$ and the boiling point is $212 °F$.
- **Rankine (°R or R)**: used in some engineering applications. $T(°R) = 1.8 T(K)$.

Conversions: $T(K) = T(°C) + 273.15$; $T(°F) = 1.8 T(°C) + 32$; $T(R) = 1.8 T(K)$.

### Heat vs temperature vs internal energy

The three quantities are related but distinct:

- **Temperature**: a measure of the average kinetic energy per molecule (in an ideal gas) or, more generally, a state variable that determines the direction of spontaneous heat flow.
- **Heat**: energy in transit from one body to another because of a temperature difference. Heat is denoted $Q$ and has units of joules. The phrase "heat content" of a body is technically incorrect; the correct term is internal energy.
- **Internal energy**: the total energy contained in a body, including kinetic energy of molecular motion, potential energy of molecular interactions, and any other internal contributions. Denoted $U$, with units of joules.

The confusion arises because in everyday language "heat" is used for both the energy content of a body (which is internal energy) and the energy transferred (which is heat). The technical distinction matters: heat is a process, internal energy is a state.

The first law of thermodynamics (covered in Lesson m1-l3) is the statement that the change in internal energy of a closed system equals the heat added plus the work done on the system: $\Delta U = Q + W$ (with sign conventions varying by textbook).

### Thermodynamic systems

A **thermodynamic system** is a region of the universe separated by a real or imaginary boundary. Everything outside the boundary is the **surroundings**. The system can be:

- **Open**: matter and energy can cross the boundary.
- **Closed**: energy can cross but not matter.
- **Isolated**: neither energy nor matter can cross.

A cup of coffee on a desk is an open system (heat and water vapour escape to the air). A sealed thermos is approximately a closed system (energy but not matter can cross). The entire universe is the canonical isolated system (nothing crosses the boundary).

### Thermal contact and equilibrium

Two systems are in **thermal contact** if they can exchange heat. The systems are in **thermal equilibrium** if, after a long time in thermal contact, no further net heat flows. The condition for thermal equilibrium is equality of temperature; if the temperatures differ, heat flows from the hotter to the colder system until equilibrium is reached.

A **thermodynamic state** is a snapshot of a system specified by its macroscopic variables (e.g. pressure, volume, temperature, composition). The state is independent of the history. The macroscopic variables are not all independent; they are related by the **equation of state**.

### Thermal expansion

Most substances expand when heated. For a small temperature change, the change in a linear dimension $L$ is

$$\Delta L = \alpha L_0 \Delta T,$$

where $\alpha$ is the **linear thermal expansion coefficient** (in $\text{K}^{-1}$). For a solid, the volume change is

$$\Delta V = 3 \alpha V_0 \Delta T \approx \beta V_0 \Delta T,$$

where $\beta \approx 3\alpha$ is the volume expansion coefficient (valid for isotropic solids).

For liquids and gases, thermal expansion is more pronounced and the simple linear approximation is less accurate. Real gases follow the ideal gas law at low density, and the expansion is significant.

Thermal expansion has engineering consequences: bridges have expansion joints, railway tracks have gaps, mercury thermometers work because mercury expands. Bimetal strips (two metals with different $\alpha$) bend when heated and are used in thermostats.

### Anomalous expansion of water

Water is anomalous: it contracts on heating from $0 °C$ to $4 °C$, then expands. The density of water is maximum at $4 °C$. This is why lakes freeze from the top (cold water is less dense and floats; warmer water sinks) and why aquatic life can survive under ice.

The anomaly is due to the hydrogen-bonded structure of water: the open, ice-like structure of cold water collapses slightly on warming to $4 °C$, then the normal thermal expansion takes over.

### Temperature and molecular motion

In a classical ideal gas, the temperature is directly related to the average translational kinetic energy per molecule:

$$\langle K \rangle = \frac{3}{2} k_B T,$$

where $k_B$ is the Boltzmann constant. This is the basis of the kinetic theory of gases (covered in Module 2). More generally, the **equipartition theorem** says that each quadratic degree of freedom (e.g. $x^2$, $y^2$, $z^2$, or rotational kinetic energy around an axis) contributes $\frac{1}{2} k_B T$ to the average energy per molecule. A monatomic ideal gas has 3 translational degrees of freedom, giving average energy $\frac{3}{2} k_B T$ per molecule; a diatomic gas has 3 translational and 2 rotational (at ordinary temperatures), giving $\frac{5}{2} k_B T$.

The kinetic interpretation of temperature is the foundation of the microscopic theory of matter. It is the basis of the connection between macroscopic thermodynamics and the atomic structure of matter.

### Operational vs absolute temperature

The **operational temperature** is defined by the reading of a thermometer; it depends on the thermometric substance (mercury, alcohol, gas, etc.). The **absolute (thermodynamic) temperature** is independent of the substance and is defined via the second law of thermodynamics (covered in Module 2). The two are related but not identical; the difference is the basis of the gas-thermometer corrections used in precise thermometry.

For most purposes, the two scales agree to high accuracy, and the difference is negligible. The kelvin scale is the absolute scale; the Celsius and Fahrenheit scales are operational scales offset by a constant.

## Key Ideas

- Temperature is defined operationally via thermal equilibrium; the zeroth law guarantees consistency.
- Heat is energy in transit; internal energy is the total energy of a body.
- SI uses the kelvin; conversions to Celsius, Fahrenheit, and Rankine are well-defined.
- Thermal expansion is approximately linear in $\Delta T$ for small temperature changes.
- The kinetic interpretation: $\langle K \rangle = (3/2) k_B T$ for an ideal gas.
- Anomalous expansion of water affects aquatic ecosystems and the freezing of lakes.

## Worked Examples

### Example 1 — Convert temperatures

Convert $25 °C$ to kelvin, Fahrenheit, and Rankine.

**Solution.**

$T(K) = 25 + 273.15 = 298.15$ K.

$T(°F) = 1.8 \times 25 + 32 = 77 °F$.

$T(R) = 1.8 \times 298.15 = 536.67$ °R.

### Example 2 — Linear expansion of a bridge

A $100$ m steel bridge has a linear expansion coefficient $\alpha = 1.2 \times 10^{-5} \text{ K}^{-1}$. If the temperature rises by $30$ K, by how much does the bridge lengthen?

**Solution.** $\Delta L = \alpha L_0 \Delta T = 1.2 \times 10^{-5} \times 100 \times 30 = 0.036$ m $= 3.6$ cm. This is a significant change; bridges are designed with expansion joints to accommodate it.

### Example 3 — Average kinetic energy of a gas molecule

Find the average translational kinetic energy of a nitrogen molecule (mass $4.65 \times 10^{-26}$ kg) at room temperature ($T = 300$ K).

**Solution.** $\langle K \rangle = (3/2) k_B T = 1.5 \times 1.38 \times 10^{-23} \times 300 = 6.21 \times 10^{-21}$ J $\approx 0.039$ eV. This is comparable to the energy of visible-light photons ($\sim 1$–$3$ eV), which is why thermal radiation at room temperature peaks in the infrared, not the visible.

## Common Misconceptions

- **"Heat and temperature are the same."** No. Heat is energy; temperature is a state variable. Adding heat raises the temperature, but the relationship is not direct (e.g. different substances have different heat capacities).
- **"Cold is a substance."** Cold is the absence of heat; cold is not a thing that flows. The phrase "cold flows from one body to another" is misleading; the correct phrasing is "heat flows from a hotter body to a colder body".
- **"Temperature is the heat."** No. Temperature is a measure of the average kinetic energy per molecule; the total internal energy is the sum of all molecular energies, which depends on the number of molecules and the heat capacity.
- **"Absolute zero is unreachable."** The third law of thermodynamics says yes, but in practice temperatures of order $10^{-10}$ K have been achieved in ultracold-atom experiments; absolute zero is approached but not reached.
- **"All substances expand on heating."** Water between $0 °C$ and $4 °C$ contracts on heating. Some solid materials (e.g. zirconium tungstate) have negative thermal expansion over wide temperature ranges.

## Connections

- The zeroth law is the foundation of thermometry; the first, second, and third laws (covered in subsequent lessons) build on it.
- The kinetic interpretation of temperature is the bridge between macroscopic thermodynamics and microscopic kinetic theory.
- Thermal expansion is a key engineering consideration: bridges, pipelines, bimetallic thermostats, and mercury thermometers all rely on it.
- The anomalous expansion of water is essential to aquatic life and to the climate of cold regions.
- The temperature scales and the Boltzmann constant are the standards of metrology: the kelvin is one of the seven SI base units.

## Quick Check

1. Convert $100 °F$ to Celsius and kelvin.
2. State the zeroth law of thermodynamics in your own words.
3. A metal rod of length $2.0$ m has $\alpha = 2 \times 10^{-5} \text{ K}^{-1}$. How much does it lengthen when heated by $50$ K?
4. Distinguish heat, temperature, and internal energy.
5. Compute the average translational kinetic energy of a helium atom at $400$ K.

## Takeaway

- Temperature is operationally defined via thermal equilibrium.
- The zeroth law guarantees that thermometers are consistent.
- Heat is energy in transit; internal energy is the total energy of a body.
- The SI temperature is the kelvin; other scales are offset by constants.
- Thermal expansion is approximately linear in $\Delta T$ for small changes.
- The kinetic interpretation gives $\langle K \rangle = (3/2) k_B T$ for an ideal gas.
