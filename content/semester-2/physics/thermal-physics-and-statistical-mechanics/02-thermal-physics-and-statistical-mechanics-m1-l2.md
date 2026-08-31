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
lessonId: thermal-physics-and-statistical-mechanics-m1-l2
lessonName: Equations of State and the Ideal Gas Law
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - thermal-physics-and-statistical-mechanics-m1-l1
learningObjectives:
  - Define an equation of state and identify the canonical forms.
  - Apply the ideal gas law to elementary problems.
  - Distinguish real gases, ideal gases, and the van der Waals model.
concepts:
  - Equation of state
  - Ideal gas law
  - Van der Waals equation
  - Critical point
  - Reduced variables
  - Phase diagram
tags:
  - physics
  - thermodynamics
  - ideal-gas
  - equation-of-state
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Equations of State and the Ideal Gas Law

## Overview

An equation of state is a relation among the macroscopic variables (pressure, volume, temperature, amount of substance) of a thermodynamic system in equilibrium. The simplest and most important is the ideal gas law, $p V = n R T$, which describes the behaviour of dilute gases over a wide range of conditions. The lesson develops the ideal gas law from the empirical gas laws (Boyle's, Charles's, Avogadro's), introduces the kinetic-theory derivation as a preview, and then extends to real gases via the van der Waals equation, which accounts for finite molecular size and intermolecular forces. The lesson closes with the critical point and reduced variables, which unify the description of real gases.

## Learning Path

- **What you should already know**: temperature scales; the concepts of pressure, volume, and amount of substance; basic algebra.
- **What this lesson adds**: the ideal gas law and its derivation from the empirical gas laws; the kinetic-theory derivation as a preview; the van der Waals equation and the critical point; the principle of corresponding states.
- **What later lessons this will unlock**: the first law of thermodynamics in Lesson m1-l3; the kinetic theory of gases in Module 2; phase transitions and the Clausius–Clapeyron equation in Module 3.

## Core Explanation

### Equation of state

An **equation of state** is a functional relation $f(p, V, T, n) = 0$ among the pressure $p$, volume $V$, absolute temperature $T$, and amount of substance $n$ of a system in equilibrium. The equation holds for any equilibrium state of the system; it does not describe non-equilibrium processes.

For a given substance, the equation of state is a property of the substance and is determined by experiment or by a microscopic theory. Different substances have different equations of state; the simplest is the ideal gas law.

### The ideal gas law

The **ideal gas law** is

$$p V = n R T,$$

where $R = 8.314$ J/(mol·K) is the universal gas constant. Equivalently, $p V = N k_B T$, where $N$ is the number of molecules and $k_B = 1.381 \times 10^{-23}$ J/K is the Boltzmann constant. The two forms are related by $R = N_A k_B$, where $N_A = 6.022 \times 10^{23}$ mol$^{-1}$ is Avogadro's constant.

The ideal gas law assumes:

- The gas molecules are point particles (no volume of their own).
- There are no intermolecular forces except during instantaneous elastic collisions.
- The gas is dilute (low density, molecules far apart on average).
- The gas is in thermal equilibrium.

The ideal gas law is a good approximation for many real gases at room temperature and atmospheric pressure, and an excellent approximation at low densities. It fails for dense gases, near the condensation point, and for gases with strong intermolecular forces.

### Derivation from empirical gas laws

The ideal gas law is a combination of three empirical laws:

- **Boyle's law** (1662): at constant temperature, $p V = \text{const}$.
- **Charles's law** (1787): at constant pressure, $V/T = \text{const}$.
- **Avogadro's law** (1811): at constant temperature and pressure, $V/n = \text{const}$.

Combining these three laws into a single relation gives $p V / (n T) = \text{const}$. Evaluating the constant for one mole at STP ($0 °C$ and $1$ atm, where $V_m \approx 22.414$ L) gives $R \approx 0.0821$ L·atm/(mol·K) or $R \approx 8.314$ J/(mol·K).

### Kinetic theory derivation

The ideal gas law can be derived from kinetic theory by considering a gas as a collection of $N$ point particles in a box of volume $V$, each with average kinetic energy $(3/2) k_B T$. The pressure on the walls is the rate of momentum transfer per unit area. The derivation gives

$$p V = N k_B T = n R T,$$

with the root-mean-square speed

$$v_\text{rms} = \sqrt{\frac{3 k_B T}{m}} = \sqrt{\frac{3 R T}{M}},$$

where $m$ is the mass of one molecule and $M$ is the molar mass. At room temperature, $v_\text{rms}$ is about $500$ m/s for nitrogen and $1800$ m/s for hydrogen.

The kinetic theory is the foundation of the microscopic interpretation of thermodynamics. The derivation is taken up in detail in Module 2 Lesson m2-l1.

### Real gases and the van der Waals equation

The ideal gas law fails at high density because real molecules have finite size (so the available volume is $V - n b$ rather than $V$) and exert attractive forces on each other (which reduce the pressure by an amount proportional to $n^2/V^2$). The **van der Waals equation** is

$$\left(p + \frac{a n^2}{V^2}\right)(V - n b) = n R T,$$

where $a$ and $b$ are substance-specific constants. The $a$ term accounts for the attractive forces (the "internal pressure"); the $b$ term accounts for the finite molecular volume.

The van der Waals equation is qualitatively correct for most gases over a wide range of conditions. It predicts the condensation of a gas into a liquid at low temperature and the existence of a critical point. It is not quantitatively accurate near the critical point, where the actual behaviour involves critical phenomena (scaling laws, divergent correlation length).

### Critical point and reduced variables

The van der Waals equation has a **critical point** at which the liquid and gas phases become indistinguishable. The critical constants are

$$T_c = \frac{8 a}{27 R b}, \quad p_c = \frac{a}{27 b^2}, \quad V_{m,c} = 3 b.$$

At the critical point, the isotherm $p(V)$ has an inflection point: $(\partial p / \partial V)_T = 0$ and $(\partial^2 p / \partial V^2)_T = 0$ simultaneously.

**Reduced variables** are dimensionless variables scaled by the critical constants:

$$T_r = T/T_c, \quad p_r = p/p_c, \quad V_r = V/V_{m,c}.$$

In reduced variables, the van der Waals equation is

$$\left(p_r + \frac{3}{V_r^2}\right)(3 V_r - 1) = 8 T_r.$$

The same equation holds for all substances, a manifestation of the **law of corresponding states**: real gases with similar intermolecular forces behave similarly when compared in reduced variables. The principle is approximate but useful for estimating properties of one gas from data on another.

### The compressibility factor

A useful diagnostic of non-ideality is the **compressibility factor**:

$$Z = \frac{p V}{n R T}.$$

For an ideal gas, $Z = 1$ exactly. For a real gas, $Z$ deviates from $1$ at high density. The deviation reveals the importance of intermolecular forces and finite molecular size: $Z > 1$ indicates repulsive forces dominate (typical at high density); $Z < 1$ indicates attractive forces dominate (typical at moderate density).

The compressibility factor is plotted as a function of $p_r$ and $T_r$ in standard reference tables; the curves are nearly universal across substances with similar intermolecular forces, a reflection of the law of corresponding states.

### Phase diagrams

A **phase diagram** is a plot of pressure vs. temperature showing the regions of stability of the solid, liquid, and gas phases, and the lines (or curves) of phase coexistence. The triple point is where all three phases coexist; the critical point is the terminus of the liquid-gas coexistence line.

The phase diagram of water is unusual: the solid-liquid coexistence line has a negative slope (because ice is less dense than water). This is the basis of ice skating, frost wedging, and the survival of aquatic life under ice.

The Clausius–Clapeyron equation (covered in Module 3) describes the slope of the phase coexistence lines:

$$\frac{d p}{d T} = \frac{L}{T \Delta v},$$

where $L$ is the latent heat of the transition and $\Delta v$ is the change in specific volume.

### Mixtures of gases

For a mixture of non-reacting ideal gases, the **Dalton's law of partial pressures** states: the total pressure is the sum of the partial pressures of the individual gases,

$$p = \sum_i p_i = \sum_i \frac{n_i R T}{V} = \frac{n_\text{tot} R T}{V}.$$

Each gas behaves as if it alone occupied the volume, ignoring the others. Dalton's law is a good approximation for ideal mixtures; it fails for real mixtures at high density.

The **Amagat law** is the volume analogue: the total volume of a mixture is the sum of the volumes the individual gases would occupy at the same temperature and pressure.

### Density and molar mass

The ideal gas law gives the density of an ideal gas:

$$\rho = \frac{p M}{R T},$$

where $M$ is the molar mass. At STP, the density of air ($M \approx 0.029$ kg/mol) is about $1.29$ kg/m$^3$.

The molar mass of an unknown gas can be determined by measuring the density at known temperature and pressure: $M = \rho R T / p$. This is the principle of the gas-density method for molar-mass determination.

### Ideal gas in astrophysics

The ideal gas law applies to stellar interiors, where temperatures and densities are extreme but the gas is well described as ideal (except near the centre, where quantum and nuclear-physics corrections become important). The pressure in a star is approximately $p = \rho k_B T / (m_p \mu)$, where $\mu$ is the mean molecular weight. This pressure supports the star against gravity; the equilibrium of pressure and gravity determines the stellar structure.

In the early universe, before the formation of atoms, the matter was a hot plasma of protons, neutrons, and electrons, well described by the ideal gas law. The cosmic microwave background records the temperature of the universe at the moment of recombination; ideal-gas physics governs the expansion history before that.

## Key Ideas

- The ideal gas law: $p V = n R T$ (or $p V = N k_B T$).
- Empirical gas laws: Boyle ($pV = \text{const}$), Charles ($V/T = \text{const}$), Avogadro ($V/n = \text{const}$).
- Real gases: van der Waals equation with finite-size ($b$) and attractive-force ($a$) corrections.
- Critical point: $T_c = 8a/27Rb$, $p_c = a/27b^2$, $V_{m,c} = 3b$.
- Compressibility factor: $Z = pV/nRT$.
- Phase diagram: solid-liquid-gas regions and coexistence lines.
- Dalton's law: partial pressures add in ideal mixtures.
- Astrophysical applications: stellar interiors, primordial plasma.

## Worked Examples

### Example 1 — Volume of a gas

A $0.5$ mol sample of an ideal gas is at $300$ K and $1$ atm. What is its volume?

**Solution.** $V = n R T / p = 0.5 \times 8.314 \times 300 / (101325) = 1247 / 101325 \approx 0.0123$ m$^3 = 12.3$ L.

### Example 2 — Density of air

Estimate the density of air at $20 °C$ and $1$ atm. The mean molar mass of air is $M = 0.029$ kg/mol.

**Solution.** $T = 293$ K. $\rho = p M / (R T) = (101325 \times 0.029) / (8.314 \times 293) = 2938 / 2436 \approx 1.21$ kg/m$^3$. This is close to the standard value of $1.204$ kg/m$^3$ at $20 °C$.

### Example 3 — RMS speed of nitrogen

Find the root-mean-square speed of a nitrogen molecule ($M = 0.028$ kg/mol) at $T = 300$ K.

**Solution.** $v_\text{rms} = \sqrt{3 R T / M} = \sqrt{3 \times 8.314 \times 300 / 0.028} = \sqrt{267231} \approx 517$ m/s. This is comparable to the speed of sound in air ($343$ m/s at $20 °C$); the two are related but not identical.

## Common Misconceptions

- **"The ideal gas law is exact."** No. It is an approximation, exact only in the limit of zero density. Real gases deviate, especially near condensation.
- **"Real gases obey the van der Waals equation."** Approximately; the van der Waals equation is qualitative near the critical point and quantitatively wrong for some gases. More accurate equations of state (e.g. Redlich–Kwong, Peng–Robinson) are used in engineering.
- **"Pressure is a property of the gas."** Pressure is a property of the gas in equilibrium. In a non-equilibrium state, pressure may not be well-defined.
- **"The triple point and the freezing point are the same."** They differ. The triple point is at $0.01 °C$ and $611.657$ Pa; the freezing point at $1$ atm is approximately $0 °C$ (it depends on the pressure).
- **"All gases are heavier than air."** No. Hydrogen, helium, methane, ammonia, and water vapour are lighter than air. The molar mass determines the relative density.

## Connections

- The ideal gas law is the simplest equation of state; the rest of the course refines it.
- The kinetic theory (Module 2) provides the microscopic basis for the ideal gas law.
- Real gases near the critical point exhibit critical phenomena, a subject of advanced statistical mechanics.
- Phase transitions (Module 3) involve the coexistence of phases; the Clausius–Clapeyron equation describes the phase boundaries.
- The ideal gas law is the foundation of stellar astrophysics and of the early-universe physics.
- The compressibility factor is a diagnostic of non-ideality; it appears in chemical engineering and in geological applications.

## Quick Check

1. State the ideal gas law and the SI units of $R$.
2. A $1$ mol sample of gas occupies $22.4$ L at STP. What is the pressure at $V = 11.2$ L and $T = 273$ K?
3. Estimate the RMS speed of a hydrogen molecule ($M = 0.002$ kg/mol) at $300$ K.
4. State the van der Waals equation and explain the role of $a$ and $b$.
5. What is the compressibility factor for an ideal gas?

## Takeaway

- The ideal gas law is the simplest equation of state; it is the foundation of thermal physics.
- Real gases deviate from ideality at high density; the van der Waals equation captures the main features.
- The critical point and reduced variables unify the description of real gases.
- Phase diagrams describe solid-liquid-gas regions and coexistence.
- The ideal gas law is the basis of stellar astrophysics, atmospheric physics, and the early universe.
