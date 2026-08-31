***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: thermal-physics-lab
courseName: Thermal Physics and Statistical Mechanics Lab
moduleId: thermal-physics-lab-module-1
moduleName: Thermometry, Calorimetry, and Heat Transfer
lessonId: thermal-physics-lab-m1-l2
lessonName: Specific Heat Capacity by the Method of Mixtures
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - thermal-physics-lab-m1-l1
learningObjectives:
  - Measure the specific heat capacity of a solid by the method of mixtures and propagate uncertainties through the calculation.
  - Apply the heat-loss correction (Newton's law of cooling) to a calorimetry experiment.
  - Verify the Dulong-Petit law for metals at room temperature.
concepts:
  - Specific heat capacity
  - Method of mixtures
  - Heat capacity of the calorimeter
  - Newton's law of cooling
  - Heat-loss correction
  - Dulong-Petit law
  - Thermal equilibrium
tags:
  - physics
  - laboratory
  - thermal
  - calorimetry
  - specific-heat
  - newton-cooling
sourceType: authored-courseware
assessmentHints:
  - The heat capacity of the calorimeter (water equivalent) must be measured or estimated.
  - Newton's law of cooling correction: T_corrected = T_observed + (cooling constant) × (time since mixing).
  - Dulong-Petit: c × M ≈ 25 J/(mol·K) for many solids at room temperature; deviation is the Einstein/Debye correction.
status: in-review
***

# Specific Heat Capacity by the Method of Mixtures

## Overview

The specific heat capacity c of a solid is the heat required to raise the temperature of unit mass by one kelvin. For water, c = 4186 J/(kg·K); for metals, c is much smaller (e.g. copper ~ 385 J/(kg·K), lead ~ 128 J/(kg·K)). The method of mixtures is the lab's classical way to measure c: heat a known mass of the solid to a known temperature, drop it into a known mass of water at a known temperature in a calorimeter, and observe the equilibrium temperature. The heat lost by the solid equals the heat gained by the water and the calorimeter, and the unknown c is extracted.

The method is simple in principle but rich in error sources: heat loss to the surroundings, finite equilibration time, water adhering to the solid, the heat capacity of the calorimeter and the thermometer. The lab is as much about correcting these errors as it is about the measurement.

## Learning Path

1. **Measure the water equivalent of the calorimeter** — fill the calorimeter with a known mass of warm water; add a known mass of cold water; observe the equilibrium temperature; compute W = m_c (the mass of water with the same heat capacity as the calorimeter + stirrer + thermometer).
2. **Weigh the solid** — measure the mass m_s of the solid sample (brass, copper, iron, or aluminium) on a balance.
3. **Heat the solid** — heat the solid in a steam jacket or boiling water to T_s = 100 °C.
4. **Measure the water mass and temperature** — pour a known mass m_w of water at room temperature T_w into the calorimeter; record T_w.
5. **Transfer and mix** — quickly transfer the hot solid into the calorimeter; stir gently; record the equilibrium temperature T_eq.
6. **Apply Newton's law of cooling correction** — observe the cooling rate of the calorimeter after mixing; extrapolate back to the time of mixing to find T_eq,corrected.
7. **Compute c_s** — from m_s c_s (T_s − T_eq,corrected) = (m_w + W) c_w (T_eq,corrected − T_w), solve for c_s.

## Core Explanation

### Theory

The first law of thermodynamics, applied to the system (water + calorimeter + solid) at constant pressure, gives

Q_lost by solid = Q_gained by water + Q_gained by calorimeter + Q_gained by thermometer.

The heat lost by the solid as it cools from T_s to T_eq is

Q_lost = m_s c_s (T_s − T_eq),

where m_s is the mass of the solid and c_s is its specific heat capacity. The heat gained by the water is

Q_water = m_w c_w (T_eq − T_w),

and the heat gained by the calorimeter is

Q_cal = W c_w (T_eq − T_w),

where W is the water equivalent — the mass of water with the same heat capacity as the calorimeter, stirrer, and thermometer.

Setting heat lost = heat gained (assuming no loss to the surroundings):

m_s c_s (T_s − T_eq) = (m_w + W) c_w (T_eq − T_w).

Solving for c_s:

c_s = (m_w + W) c_w (T_eq − T_w) / (m_s (T_s − T_eq)).

### Heat-Loss Correction (Newton's Law of Cooling)

Newton's law of cooling states that the rate of heat loss of a body is proportional to the temperature difference between the body and the surroundings:

dT/dt = − k (T − T_room),

where k is the cooling constant (units of s⁻¹) and T_room is the ambient temperature. The solution is

T(t) − T_room = (T_0 − T_room) e^(−k t).

The cooling constant k is measured by observing the calorimeter's temperature vs time after mixing. For a typical calorimeter with a metal cup and a cardboard lid, k ~ 10⁻³ to 10⁻² s⁻¹. Over 5 minutes (300 s), the temperature drop is 1 − e^(−k · 300), or about 30 % for k = 10⁻³ s⁻¹ — a significant correction.

To correct the measured T_eq, extrapolate back to the time of mixing using the cooling law. Or, take a series of T readings after mixing and fit an exponential decay back to t = 0.

### Dulong-Petit Law

At room temperature, the molar heat capacity of many solids is approximately

C_molar = c × M ≈ 3 R ≈ 25 J/(mol·K),

where M is the molar mass and R is the gas constant. This is the Dulong-Petit law, a classical result explained by the equipartition theorem: each atom has 3 degrees of translational freedom, each contributing (1/2) R to the heat capacity. The law works well for many solids at room temperature; it fails at low temperatures, where the quantum mechanical treatment (Einstein-Debye model) is needed.

### Apparatus

- Calorimeter: a metal cup (brass or copper) with a cardboard or PTFE lid, suspended in a wooden box to reduce heat loss; or a Dewar flask for higher accuracy.
- Stirrer (insulated handle).
- Thermometer (mercury, 0–50 °C, 0.1 °C divisions) or digital thermometer.
- Balance (0.1 g resolution).
- Steam jacket or boiling-water bath for the solid.
- Stopwatch.
- Tongs, safety glasses, heat-resistant gloves.

### Procedure: Water Equivalent of the Calorimeter

1. Weigh the empty calorimeter + stirrer + thermometer, m_c.
2. Fill the calorimeter about two-thirds full with warm water (~ 35 °C). Weigh to get m_w,1 (the mass of warm water).
3. Record T_w,1 (the temperature of the warm water).
4. Prepare a second beaker of cold water (~ 15 °C). Record T_w,2.
5. Pour the cold water into the calorimeter. Stir. Record the equilibrium temperature T_eq.
6. The energy balance is

m_w,1 c_w (T_w,1 − T_eq) = (m_w,2 + W) c_w (T_eq − T_w,2),

where m_w,2 is the mass of cold water. Solving for W:

W = m_w,1 (T_w,1 − T_eq) / (T_eq − T_w,2) − m_w,2.

7. The water equivalent is typically 5–15 g for a small brass calorimeter with a stirrer and thermometer. A Dewar has W ~ 0 (negligible heat capacity in the glass walls).

### Procedure: Specific Heat

1. Weigh the solid sample, m_s.
2. Heat the solid in a steam jacket or boiling-water bath to T_s = 100 °C. Use at least 10 minutes for thermal equilibrium.
3. Weigh the empty calorimeter + stirrer + thermometer.
4. Fill the calorimeter with water at room temperature. Weigh to get m_w (mass of water).
5. Place the calorimeter in its insulating jacket. Record the initial water temperature T_w.
6. Quickly transfer the hot solid from the steam bath into the calorimeter. Use tongs; minimise the time the solid is in transit (heat loss to the air is significant).
7. Stir gently. Record the maximum temperature reached T_max. Note the time t = 0 of mixing.
8. Continue recording the temperature every 30 seconds for 5 minutes. Plot T(t) and fit an exponential decay: T(t) = T_room + (T_max − T_room) e^(−k t).
9. Extrapolate to t = 0 to get T_eq,corrected.

### Analysis

#### Specific Heat

Compute c_s using the formula above, with T_eq,corrected.

#### Uncertainty

The dominant uncertainties are usually:
- m_s (small, 0.1 %).
- m_w (small, 0.1 %).
- W (moderate, ~ 5 %).
- T_s (small, ~ 0.5 %).
- T_w (small, ~ 0.5 %).
- T_eq,corrected (larger, 1–2 %, because of the heat-loss correction).

Propagate to get σ_c_s. Compare with literature values.

#### Dulong-Petit

Compute c × M. For a metal like copper, M = 63.5 g/mol, c ~ 385 J/(kg·K), so c × M = 24.4 J/(mol·K) — close to 3 R = 24.94 J/(mol·K). For iron, M = 55.8 g/mol, c ~ 449 J/(kg·K), c × M = 25.1 J/(mol·K). For lead, M = 207.2 g/mol, c ~ 128 J/(kg·K), c × M = 26.5 J/(mol·K).

### Error Sources

- **Heat loss during transfer.** The hot solid cools rapidly in air; the time between removing it from the steam bath and immersing it in the calorimeter should be less than 2 seconds.
- **Water adhering to the solid.** When the solid is removed from the boiling water, some water clings to it. This water adds to the system and biases T_s. Wipe the solid quickly with a cloth before transferring (but not so long that the solid cools).
- **Thermometer lag.** A mercury thermometer takes ~ 10 seconds to reach equilibrium. Read the temperature after the mercury has stopped moving, or use a digital thermometer with a fast response.
- **Stirring.** Stir the calorimeter continuously during the equilibration; otherwise, hot water near the solid and cold water near the walls give a non-uniform temperature.
- **Heat capacity of the thermometer.** A mercury thermometer has a heat capacity of ~ 1 J/K. For a 100 J heat exchange, this is a 1 % correction; include it in W.
- **Evaporation.** The hot water in the calorimeter evaporates slightly, cooling the system. The effect is small for short experiments; cover the calorimeter with a lid.

## Key Ideas

- Method of mixtures: heat a solid, transfer to a calorimeter, measure the temperature change.
- The water equivalent W accounts for the heat capacity of the calorimeter, stirrer, and thermometer.
- Newton's law of cooling: dT/dt = −k (T − T_room). The cooling constant k is measured by observing the temperature decay after mixing.
- Dulong-Petit: c × M ≈ 25 J/(mol·K) for many solids at room temperature.
- The dominant uncertainty is the heat-loss correction, not the temperature measurement.

## Worked Examples

### Example 1: Specific heat of copper

You measure: m_s = 200 g (copper), m_w = 300 g, W = 10 g, T_s = 100 °C, T_w = 25.0 °C, T_eq,corrected = 28.6 °C (after Newton's law correction).

- c_s = (m_w + W) c_w (T_eq − T_w) / (m_s (T_s − T_eq))
- c_s = (0.310 kg) (4186 J/(kg·K)) (3.6 K) / (0.200 kg · 71.4 K)
- c_s = 4671 J / 14.28 K / 0.200 kg = 4671 / 14.28 / 0.200 = 327 J/(kg·K).

Wait, let me recompute: (0.310 × 4186 × 3.6) / (0.200 × 71.4) = 4670 / 14.28 = 327 J/(kg·K). The literature value for copper is 385 J/(kg·K). The discrepancy of 15 % is large; possible causes: heat loss during transfer, water equivalent underestimated, or T_s not actually 100 °C (the steam was not in equilibrium).

A recheck: if T_s = 95 °C instead of 100 °C, the denominator becomes 0.200 × 66.4 = 13.28, and c_s = 352 J/(kg·K) — closer. The lesson: T_s must be measured carefully.

### Example 2: Heat-loss correction

You record the calorimeter temperature after mixing at 30-second intervals:

| t (s) | T (°C) |
|------:|-------:|
| 0 | 28.6 |
| 30 | 28.5 |
| 60 | 28.4 |
| 90 | 28.3 |
| 120 | 28.2 |
| 180 | 28.1 |
| 240 | 28.0 |
| 300 | 27.9 |

A fit to T(t) = T_room + (T_0 − T_room) e^(−k t), with T_room = 25 °C, gives T_0 = 28.6 °C and k = 4.6 × 10⁻⁴ s⁻¹. The extrapolated T at t = 0 (the moment of mixing) is 28.6 °C. If you had read T only at t = 60 s, you would have recorded 28.4 °C, and the inferred c_s would have been 6 % low.

### Example 3: Dulong-Petit check

For copper, c × M = 385 J/(kg·K) × 0.0635 kg/mol = 24.4 J/(mol·K). The Dulong-Petit value is 3 R = 24.94 J/(mol·K). The agreement is within 2 %.

For lead, c × M = 128 × 0.2072 = 26.5 J/(mol·K). The agreement with 3 R is within 7 %.

For beryllium, c × M = 1825 × 0.00901 = 16.4 J/(mol·K). The agreement is poor because beryllium is a light atom with a high Debye temperature (~ 1440 K), so the room-temperature heat capacity is well below the Dulong-Petit limit. This is the Einstein-Debye correction in action.

## Common Misconceptions

- **"The water equivalent W is just the mass of the calorimeter divided by the specific heat of water."** No, the water equivalent is the mass of water with the same heat capacity as the calorimeter + stirrer + thermometer. It is computed by a calibration experiment or estimated from the masses and specific heats of the components.
- **"T_eq is the maximum temperature reached."** It is the equilibrium temperature after mixing, which is the maximum if the calorimeter is well insulated. With heat loss, T_eq must be extrapolated back to the time of mixing using the cooling law.
- **"Dulong-Petit is exact."** It is a classical approximation that works for many solids at high temperature. It fails for light atoms (Be, B, diamond) at room temperature, where the Debye temperature is high.
- **"The calorimeter is at room temperature."** After mixing, the calorimeter and its contents are at T_eq, which is above room temperature. The system loses heat to the surroundings; this is the dominant error source.
- **"Specific heat is constant over all temperatures."** It depends on temperature, especially at low temperatures. The lab measures c at room temperature; cryogenic measurements require different apparatus.

## Connections

- **Thermal Physics and Statistical Mechanics (Sem 2 theory).** Specific heat is one of the central quantities in thermodynamics. Its temperature dependence is a window into the spectrum of lattice vibrations (phonons) in a solid; the Einstein model and the Debye model are the standard theoretical frameworks.
- **Chemistry.** Calorimetry is the workhorse of chemical thermodynamics: heat of reaction, heat of combustion, heat of solution, heat of dilution, heat of neutralisation. The same method-of-mixtures principle underlies bomb calorimetry, differential scanning calorimetry (DSC), and isothermal titration calorimetry (ITC).
- **Engineering.** Specific heat is critical in any thermal design: the thermal mass of a building, the heat-sink capacity of a CPU, the cool-down time of a reactor. The lab value of c is the engineering input.
- **Astrophysics (Sem 5/6).** The specific heat of stellar matter (mostly ionised hydrogen) determines the thermal inertia of stars; the time scale of stellar evolution is set by the rate at which the star can radiate away its gravitational energy, and that depends on the heat capacity.

## Quick Check

1. Define specific heat capacity. What are its SI units?
2. State Newton's law of cooling. What is the cooling constant k?
3. In the method of mixtures, write the heat-balance equation. Solve for c_s.
4. What is the water equivalent of a calorimeter? How is it measured?
5. A 200 g sample of copper at 100 °C is dropped into 300 g of water at 20 °C in a calorimeter with W = 10 g. Predict the equilibrium temperature (no heat loss).
6. Why does the Dulong-Petit law fail for beryllium at room temperature?
7. A student reads T_eq = 30.0 °C from the thermometer but does not apply the heat-loss correction. Is the inferred c_s too high or too low? Why?
8. What is the dominant source of uncertainty in the method of mixtures? How can it be reduced?

## Takeaway

The method of mixtures is the lab's introduction to calorimetry. The first law — heat lost = heat gained — is the conceptual core; Newton's law of cooling is the practical correction; the water equivalent is the bookkeeping. The Dulong-Petit law is the high-level check: if your measured c × M is far from 25 J/(mol·K), something is wrong. The lab's discipline — careful weighing, fast transfer, continuous stirring, time-resolved temperature reading — is the same discipline that runs through every calorimetric measurement in chemistry, biology, and engineering. The dominant error is heat loss to the surroundings; the dominant correction is Newton's law of cooling, applied with a careful time series.
