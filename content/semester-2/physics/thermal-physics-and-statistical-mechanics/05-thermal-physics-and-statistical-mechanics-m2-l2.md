***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: thermal-physics-and-statistical-mechanics
courseName: Thermal Physics and Statistical Mechanics
moduleId: thermal-physics-and-statistical-mechanics-module-2
moduleName: Kinetic Theory and the Second Law
lessonId: thermal-physics-and-statistical-mechanics-m2-l2
lessonName: Heat Engines, Refrigerators and the Second Law
lessonNumber: 5
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - thermal-physics-and-statistical-mechanics-m2-l1
learningObjectives:
  - State the second law of thermodynamics in its Clausius and Kelvin forms.
  - Compute the efficiency of a Carnot cycle operating between two reservoirs.
  - Analyse real heat engines (Otto, Diesel) and refrigerators using the second law.
concepts:
  - Second law
  - Heat engine
  - Refrigerator
  - Carnot cycle
  - Coefficient of performance
  - Otto and Diesel cycles
tags:
  - physics
  - thermodynamics
  - second-law
  - heat-engine
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Heat Engines, Refrigerators and the Second Law

## Overview

The second law of thermodynamics places a fundamental limit on the conversion of heat into work. The lesson develops the two equivalent statements of the law (Clausius and Kelvin), introduces heat engines and refrigerators as the canonical devices to which the law applies, and works out the efficiency of the Carnot cycle — the most efficient cycle operating between two thermal reservoirs. The lesson then generalises to real cycles (Otto, Diesel) and to the coefficient of performance of refrigerators. The lesson is the foundation of the concept of entropy that follows in the next lesson, and the basis of the engineering discipline of thermodynamics.

## Learning Path

- **What you should already know**: the first law (Lesson m1-l3); the four canonical processes (isothermal, isobaric, isochoric, adiabatic); the kinetic theory of gases (Lesson m2-l1).
- **What this lesson adds**: the two statements of the second law; the Carnot cycle and its efficiency; real heat engines and refrigerators; the concept of reversibility.
- **What later lessons this will unlock**: entropy and the thermodynamic temperature scale (Lesson m2-l3); the statistical interpretation of the second law (Module 3); free energies and phase transitions (Module 3).

## Core Explanation

### The second law

The **second law of thermodynamics** can be stated in several equivalent forms. The most common:

**Clausius statement**: heat cannot spontaneously flow from a colder body to a hotter body.

**Kelvin (or Kelvin–Planck) statement**: it is impossible to construct a device that, operating in a cycle, produces no effect other than the extraction of heat from a single reservoir and the performance of an equivalent amount of work.

The two statements are equivalent: a violation of one implies a violation of the other.

The second law rules out **perpetual motion machines of the second kind**: devices that convert heat entirely into work from a single reservoir. Such machines do not violate the first law (energy is conserved), but they violate the second law.

### Reversible and irreversible processes

A **reversible process** is one that can be reversed by an infinitesimal change in the external conditions, leaving the system and surroundings in their original states. A **quasi-static** process (one that proceeds infinitely slowly through equilibrium states) is reversible in the idealised limit. Examples: frictionless motion, isothermal expansion of an ideal gas against a variable external pressure, slow heat transfer between bodies at almost the same temperature.

An **irreversible process** cannot be reversed without leaving changes in the system or surroundings. Examples: friction, free expansion, heat transfer across a finite temperature difference, mixing of different gases, chemical reaction.

The second law applies to irreversible processes: it states that real processes have a natural direction. Reversible processes are the idealised limit; the second law is most useful as a tool for finding the maximum efficiency of real processes.

### Heat engines

A **heat engine** is a device that converts heat into work, operating in a cycle. The engine absorbs heat $Q_h$ from a hot reservoir at temperature $T_h$, performs work $W$, and rejects heat $Q_c$ to a cold reservoir at temperature $T_c$. By the first law, the work done in a cycle is $W = Q_h - Q_c$ (with $Q_c$ being the magnitude of the rejected heat, and the convention that heat added to the engine is positive).

The **thermal efficiency** of a heat engine is

$$\eta = \frac{W}{Q_h} = 1 - \frac{Q_c}{Q_h}.$$

The efficiency is a number between $0$ and $1$ (or $0$% and $100$%).

### The Carnot cycle

The **Carnot cycle** is the most efficient cycle operating between two thermal reservoirs. It consists of two isothermal processes (at $T_h$ and $T_c$) and two adiabatic processes. The cycle is reversible.

The steps of the Carnot cycle on a $p$-$V$ diagram:

1. Isothermal expansion at $T_h$: the gas absorbs heat $Q_h = n R T_h \ln(V_2 / V_1)$ from the hot reservoir.
2. Adiabatic expansion from $T_h$ to $T_c$: the gas does work but exchanges no heat.
3. Isothermal compression at $T_c$: the gas releases heat $Q_c = n R T_c \ln(V_3 / V_4)$ to the cold reservoir.
4. Adiabatic compression from $T_c$ to $T_h$: the gas is brought back to its initial state.

For a Carnot cycle, the ratio of heat flows is the ratio of absolute temperatures:

$$\frac{Q_c}{Q_h} = \frac{T_c}{T_h}.$$

The **Carnot efficiency** is therefore

$$\eta_\text{Carnot} = 1 - \frac{T_c}{T_h}.$$

The Carnot efficiency depends only on the reservoir temperatures, not on the working substance. It is the upper limit for any heat engine operating between the same two reservoirs.

The Carnot efficiency is $1$ only when $T_c = 0$ K (absolute zero); the third law of thermodynamics says this is unreachable, so all real heat engines have $\eta < 1$.

### The thermodynamic temperature scale

The Carnot efficiency can be used to define an absolute temperature scale: $T_h / T_c = Q_h / Q_c$ for a Carnot engine. The temperature is defined by the heat flow in a reversible engine, independent of any particular thermometric substance.

This is the **thermodynamic (absolute) temperature scale**, which coincides with the kelvin scale. The thermodynamic temperature is the natural temperature for thermodynamics, just as the ideal gas temperature is the natural temperature for kinetic theory. The two agree.

### Real heat engines

Real heat engines are less efficient than the Carnot engine, because real processes are irreversible. The main types:

**Otto cycle** (used in spark-ignition gasoline engines). Two adiabatic and two isochoric processes. The efficiency is

$$\eta_\text{Otto} = 1 - \frac{1}{r^{\gamma - 1}},$$

where $r$ is the compression ratio and $\gamma$ is the heat-capacity ratio. Typical values: $r = 8$, $\gamma = 1.4$, $\eta_\text{Otto} \approx 0.56$. Real Otto engines achieve about $25$–$30$% efficiency.

**Diesel cycle** (used in compression-ignition diesel engines). Two adiabatic, one isobaric, and one isochoric process. The efficiency is

$$\eta_\text{Diesel} = 1 - \frac{1}{\gamma} \frac{1}{r^{\gamma - 1}} \frac{r_c^\gamma - 1}{r_c - 1},$$

where $r_c$ is the cut-off ratio. Diesel engines are more efficient than Otto engines for the same compression ratio; the trade-off is the need for high compression and robust construction.

**Rankine cycle** (used in steam turbines and power plants). Two isobaric and two isothermal-like processes (with phase change). The efficiency depends on the boiler and condenser temperatures and on the irreversibility of the turbine and pump. Modern power plants achieve about $40$% efficiency; combined-cycle plants (with both gas and steam turbines) reach $60$%.

**Refrigeration cycles** (used in refrigerators and heat pumps). The cycle is reversed: work is input to extract heat from a cold reservoir and reject it to a hot reservoir. The **coefficient of performance (COP)** for a refrigerator is

$$\text{COP}_R = \frac{Q_c}{W},$$

and for a heat pump is

$$\text{COP}_\text{HP} = \frac{Q_h}{W}.$$

The maximum COP of a refrigerator operating between $T_c$ and $T_h$ is

$$\text{COP}_R^\text{Carnot} = \frac{T_c}{T_h - T_c},$$

and for a heat pump,

$$\text{COP}_\text{HP}^\text{Carnot} = \frac{T_h}{T_h - T_h T_c / T_c} = \frac{T_h}{T_h - T_c}.$$

Real refrigerators have COPs of $2$–$6$ for domestic use, and heat pumps can reach COPs of $3$–$5$. The high COP is the basis of the energy efficiency of heat pumps for domestic heating.

### Entropy and the second law (preview)

The **entropy** $S$ is a state function whose change in a reversible process is $dS = \delta Q_\text{rev} / T$. The second law can be stated as $dS \ge \delta Q / T$, with equality for reversible processes. The total entropy of an isolated system never decreases. Entropy is the subject of the next lesson.

The second law implies the **Clausius inequality**: $\oint \delta Q / T \le 0$ for any cyclic process, with equality for reversible cycles. This is the integral form of the second law.

### The Clausius and Kelvin statements are equivalent

To see the equivalence: a violation of Clausius would mean a refrigerator that pumps heat from a cold body to a hot body without work input. Such a refrigerator could be coupled to a heat engine: the engine takes heat from the hot body, does work, and rejects heat to the cold body; the refrigerator pumps the same amount of heat from the cold body to the hot body without work. The net result is a heat engine that extracts heat from a single reservoir and converts it to work, with no other effect — a violation of Kelvin.

Similarly, a violation of Kelvin would allow a heat engine with efficiency $1$ (no rejected heat). Coupling this to a refrigerator (work input from a falling weight, for example) would give a refrigerator that pumps heat from a cold body to a hot body without any other effect — a violation of Clausius.

### The unattainability of absolute zero

The third law of thermodynamics states that absolute zero is unattainable. The argument uses the second law: to cool a body to $T = 0$, the refrigerator would need an infinite coefficient of performance, which is impossible.

In practice, ultracold-atom experiments reach temperatures of order $10^{-10}$ K but not absolute zero. The unattainability is not just an engineering limitation; it is a fundamental principle.

### Heat engines in astrophysics

Stars can be viewed as heat engines: they radiate energy from a hot core to a cold photosphere, with work done by the radiation pressure and gravitational contraction. The efficiency of a stellar heat engine is the fraction of the energy released by nuclear reactions that is converted to work (lifting the stellar material against gravity, driving stellar winds, etc.). For the sun, the efficiency is small, of order $10^{-4}$: most of the energy is radiated, with only a small fraction used for work.

### Limits of the second law

The second law is a statement about macroscopic systems. It does not prevent fluctuations: in a small system, the entropy can decrease for short times (the "fluctuation theorem" of Evans and Searles). The probability of a macroscopic violation of the second law is exponentially small: for a $1$ kg mass, the probability of a $1$ K temperature difference appearing spontaneously in thermal equilibrium is $\sim e^{-10^{25}}$, which is effectively zero.

The second law also does not prevent energy from being converted to work entirely: that requires a temperature difference, which is what the second law says we must have.

## Key Ideas

- The second law: heat cannot flow from cold to hot spontaneously (Clausius); no engine can convert heat entirely to work (Kelvin).
- Reversible processes: the idealised limit; real processes are irreversible.
- Carnot cycle: most efficient cycle operating between $T_h$ and $T_c$; $\eta = 1 - T_c / T_h$.
- Real heat engines: Otto (gasoline), Diesel, Rankine (steam) — all less efficient than Carnot.
- Refrigerator COP: $Q_c / W$; Carnot limit $T_c / (T_h - T_c)$.
- Clausius inequality: $\oint \delta Q / T \le 0$.
- The third law: absolute zero is unattainable.

## Worked Examples

### Example 1 — Carnot efficiency

A Carnot engine operates between $T_h = 500$ K and $T_c = 300$ K. Find the efficiency and the work done per cycle if $Q_h = 1000$ J.

**Solution.** $\eta = 1 - T_c / T_h = 1 - 300/500 = 0.4$ (40%). $W = \eta Q_h = 0.4 \times 1000 = 400$ J. $Q_c = Q_h - W = 600$ J.

### Example 2 — Refrigerator COP

A refrigerator maintains its interior at $4 °C$ in a room at $30 °C$. It extracts $200$ J of heat from the interior per cycle. Find the work input required for a Carnot refrigerator and the heat rejected to the room.

**Solution.** $T_c = 277$ K, $T_h = 303$ K. Carnot COP: $T_c / (T_h - T_c) = 277 / 26 \approx 10.65$. $W = Q_c / \text{COP} = 200 / 10.65 \approx 18.8$ J. $Q_h = Q_c + W = 218.8$ J.

### Example 3 — Otto engine efficiency

A gasoline engine has a compression ratio $r = 9$ and uses a fuel-air mixture with $\gamma = 1.4$. Find the ideal Otto efficiency.

**Solution.** $\eta_\text{Otto} = 1 - 1/r^{\gamma - 1} = 1 - 1/9^{0.4}$. $9^{0.4} = e^{0.4 \ln 9} = e^{0.4 \times 2.197} = e^{0.879} \approx 2.408$. So $\eta = 1 - 1/2.408 = 1 - 0.415 = 0.585$, or $58.5$%. The actual efficiency is lower (about $25$–$30$%) because of finite heat-transfer rates, friction, and incomplete combustion.

## Common Misconceptions

- **"The second law is just a statement about heat flow."** It is broader: it is a statement about the direction of spontaneous processes, including mixing, chemical reactions, and biological evolution.
- **"A 100% efficient engine is possible."** No. The second law rules out engines with $\eta = 1$ unless $T_c = 0$ K, which is unattainable.
- **"The Carnot efficiency is a theoretical ideal that real engines can never approach."** Real engines can and do approach the Carnot efficiency when operated at low power with good heat transfer. The most efficient power plants reach about $80$% of the Carnot limit.
- **"Refrigerators create cold."** No. They move heat from a cold body to a hot body using work input. The cold body cools because heat is being removed, not because cold is being created.
- **"The second law is violated in living systems."** Living systems are not isolated; they maintain low entropy by exporting high-entropy waste to the surroundings. The total entropy (system + surroundings) increases, consistent with the second law.

## Connections

- The Carnot cycle is the foundation of thermodynamics; the second law is the operating principle.
- Real engines (Otto, Diesel, Rankine) are the workhorses of transportation and power generation; the second law limits their efficiency.
- The Clausius inequality is the integral form of the second law; the differential form is the entropy inequality (next lesson).
- The unattainability of absolute zero is the third law; it limits the lowest achievable temperatures.
- The second law applies to all spontaneous processes: chemical reactions, biological evolution, and the expansion of the universe.

## Quick Check

1. State the second law in its Clausius and Kelvin forms.
2. Compute the Carnot efficiency for an engine between $T_h = 600$ K and $T_c = 300$ K.
3. A refrigerator with COP $3$ extracts $300$ J of heat. How much work is required, and how much heat is rejected?
4. Why is the Carnot engine more efficient than any other engine operating between the same two temperatures?
5. State the unattainability principle for absolute zero.

## Takeaway

- The second law sets the direction of spontaneous processes and the limit of engine efficiency.
- The Carnot cycle is the most efficient cycle between two reservoirs; its efficiency is $1 - T_c / T_h$.
- Real engines are less efficient than Carnot; the gap is the irreversibility of real processes.
- Refrigerators are heat engines run in reverse; the COP is bounded by the Carnot COP.
- The second law rules out perpetual motion machines of the second kind.
- The third law says absolute zero is unattainable.
