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
lessonId: thermal-physics-lab-m1-l5
lessonName: Verification of the Gas Laws and the Universal Gas Constant
lessonNumber: 5
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - thermal-physics-lab-m1-l4
learningObjectives:
  - Verify Boyle's law (PV = constant at constant T) for a gas at room temperature.
  - Verify Charles's law (V/T = constant at constant P) for a gas at low pressure.
  - Measure the universal gas constant R from the ideal gas law PV = nRT.
concepts:
  - Boyle's law
  - Charles's law
  - Gay-Lussac's law
  - Ideal gas law
  - Universal gas constant
  - Avogadro's number
  - Isothermal process
  - Isobaric process
  - Jolly's apparatus
  - Gas thermometer
tags:
  - physics
  - laboratory
  - thermal
  - gas-laws
  - boyle
  - charles
  - ideal-gas
sourceType: authored-courseware
assessmentHints:
  - R = 8.314 J/(mol·K). Verify with a calculator before the experiment.
  - Boyle's law: at constant T, P × V = constant. Plot P (y) against 1/V (x); slope is the constant.
  - Charles's law: at constant P, V/T = constant. The absolute zero of temperature is found by extrapolating V to zero.
status: in-review
***

# Verification of the Gas Laws and the Universal Gas Constant

## Overview

The ideal gas law, PV = nRT, is one of the most-tested equations in physics. The lab verifies each of its limiting cases: Boyle's law (T constant, P inversely proportional to V), Charles's law (P constant, V proportional to T), and Gay-Lussac's law (V constant, P proportional to T). It also measures the universal gas constant R from a known amount of gas at known P, V, and T.

This lesson covers two experiments. First, Boyle's law using Jolly's apparatus (a closed tube of gas with mercury columns to vary the pressure, or a syringe connected to a pressure gauge). Second, a gas-thermometer experiment to verify Charles's law and to measure R.

## Learning Path

#### Boyle's Law

1. **Set up Jolly's apparatus** — a closed bulb of dry gas connected to a mercury manometer; the gas volume is fixed; the pressure is varied by adding mercury to the open side.
2. **Read pressure and volume** — at each mercury level, record the pressure P (from the height difference) and the gas volume V (from the gas column length and the bulb volume).
3. **Verify** — plot P (y) against 1/V (x); fit a straight line through the origin. The slope is the constant PV.
4. **Repeat at a different temperature** — set the apparatus in a water bath at a different temperature; repeat the measurements. The slope PV should change (increase with T).

#### Charles's Law and the Universal Gas Constant

1. **Set up the gas thermometer** — a bulb of known volume V connected to a mercury manometer and a precision pressure gauge.
2. **Measure P, V, T at room temperature** — read the manometer and the thermometer.
3. **Compute n** — the gas is air (or nitrogen); the number of moles is n = (mass of gas) / (molar mass). Alternatively, evacuate the bulb, weigh it, fill it to atmospheric pressure with the gas, weigh again; the mass difference is the gas mass.
4. **Compute R = PV / (nT)** — compare with the accepted value 8.314 J/(mol·K).
5. **Vary T** — place the bulb in a water bath at several temperatures; record P at each; verify P/T = constant.
6. **Extrapolate to absolute zero** — plot P (y) against T (x); the intercept on the T-axis is the absolute zero of temperature.

## Core Explanation

### Theory: The Ideal Gas Law

For an ideal gas, the pressure P, volume V, temperature T (in kelvin), and amount of gas n (in moles) are related by

PV = nRT,

where R = 8.314 J/(mol·K) is the universal gas constant. The law is exact in the limit of low pressure and high temperature, where the gas molecules are far apart and the interactions are negligible. At higher pressures and lower temperatures, real gases deviate from the ideal; the deviations are described by the van der Waals equation or by the virial expansion.

### Theory: Boyle's Law

At constant T, PV = nRT = constant. So P ∝ 1/V. A plot of P (y) against 1/V (x) is a straight line through the origin with slope nRT.

### Theory: Charles's Law

At constant P, V/T = nR/P = constant. So V ∝ T. A plot of V (y) against T (x) is a straight line through the origin. The intercept on the T-axis (where V = 0) is the absolute zero, T = 0 K = − 273.15 °C.

### Theory: Gay-Lussac's Law

At constant V, P/T = nR/V = constant. So P ∝ T. A plot of P (y) against T (x) is a straight line through the origin; the intercept on the T-axis is the absolute zero.

### Apparatus: Jolly's Apparatus

- A glass bulb (~ 50 mL) containing dry air or nitrogen, connected by a capillary tube to a mercury manometer.
- A scale behind the manometer for reading mercury heights.
- A thermometer for the bulb temperature.
- A water bath (to vary the bulb temperature).
- A pressure scale (or use atmospheric pressure as a reference).

### Apparatus: Gas Thermometer

- A glass bulb (e.g. 250 mL) with a stopcock, connected to a precision pressure transducer or a mercury manometer.
- A water bath with a heater/stirrer/thermometer for temperature control.
- A vacuum pump (to evacuate the bulb before weighing).
- A precision balance (0.001 g resolution).
- Safety glasses.

### Procedure: Boyle's Law

1. Set the Jolly apparatus vertical; the bulb is at the top, the open mercury reservoir at the bottom.
2. Read the initial mercury heights: h_closed (in the closed side) and h_open (in the open side). The pressure of the gas is P = P_atm + (h_open − h_closed) (in mmHg; convert to Pa or atm as needed).
3. Read the gas volume V (it is fixed for a given apparatus; the gas column length is the variable).
4. Add mercury to the open side. This increases the gas pressure and decreases the gas volume. Read the new h_closed, h_open, and the new gas column length. Repeat for 5–10 different mercury levels.
5. Convert each P and V to SI. Plot P (y) against 1/V (x). The slope is nRT.
6. Repeat at a second temperature (e.g. 30 °C) by immersing the bulb in a water bath.

### Procedure: Charles's Law and R

1. Weigh the empty bulb (evacuated): m_empty.
2. Fill the bulb with the gas (air, nitrogen, or argon) to atmospheric pressure. Weigh: m_full. The mass of gas is m = m_full − m_empty.
3. The number of moles is n = m / M, where M is the molar mass (e.g. 28.97 g/mol for air, 28.02 g/mol for N₂, 39.95 g/mol for Ar).
4. Connect the bulb to a pressure transducer. Immerse in a water bath at room temperature T_1. Read P_1.
5. Heat the bath to several temperatures (e.g. 30, 40, 50, 60 °C). Allow 5–10 minutes for thermal equilibrium. Read P at each.
6. Convert temperatures to kelvin: T = T_°C + 273.15.
7. Compute R = P V / (n T) at each temperature. Average to get R_measured.
8. Plot P (y) against T (x). The intercept on the T-axis is the absolute zero.

### Analysis

#### Boyle's Law

A linear fit to P (y) against 1/V (x) gives slope = nRT. With T known, the constant nR = slope / T. The number of moles n can be computed if the gas is identified (n = slope / (R T)).

For the two temperatures, the ratio of slopes should equal the ratio of absolute temperatures: slope(T_2) / slope(T_1) = T_2 / T_1.

#### Charles's Law

A linear fit to P (y) against T (x) gives slope = nR/V, and intercept = 0 (within experimental error). The intercept is the absolute zero; for a non-zero intercept, the lab value of absolute zero is − intercept / slope (in °C).

#### R

R = P V / (n T). The dominant uncertainty is in n (from the weighing) and P (from the pressure gauge). For a 250 mL bulb filled with air at 1 atm and 25 °C, with 0.001 g weighing accuracy:

- m_air = ρ_air × V = 1.18 kg/m³ × 2.5 × 10⁻⁴ m³ = 2.95 × 10⁻⁴ kg = 0.295 g. With 0.001 g accuracy, σ_m / m = 0.3 %; σ_n / n = 0.3 %.
- σ_P / P = 0.1 % (for a good pressure gauge).
- σ_T / T = 0.1 K / 298 K = 0.03 %.
- σ_R / R = √(0.1² + 0.3² + 0.03²) % = √(0.1) % = 0.32 %.

So R can be measured to about 0.3 % with a good apparatus.

### Sources of Error

- **Temperature of the gas.** The gas in the bulb may not be at the bath temperature. Allow 10 minutes for equilibrium, and use a stirrer to keep the bath temperature uniform.
- **Gas adsorption on the walls.** For a precise measurement, the gas adsorbed on the bulb walls is not at the same pressure as the free gas. Heat the bulb to ~ 100 °C under vacuum before filling to desorb the gas.
- **Mercury column reading.** The manometer heights are read with ± 0.5 mm accuracy; the resulting pressure uncertainty is ~ 0.5 mmHg = 67 Pa. For a 1 atm (101325 Pa) reading, this is 0.07 % — small.
- **Volume of the connecting tube.** The gas in the connecting tube is at a different temperature from the gas in the bulb. Include a correction for the "dead volume" of the tube, or use a thin capillary to minimise it.
- **Real gas deviations.** At 1 atm, real gases deviate from ideal by < 1 %. For higher accuracy, use a virial correction or a low-pressure measurement.

## Key Ideas

- The ideal gas law PV = nRT is exact in the limit of low pressure.
- Boyle's law (T constant): P × V = constant.
- Charles's law (P constant): V/T = constant.
- Gay-Lussac's law (V constant): P/T = constant.
- Extrapolating V or P to zero gives the absolute zero of temperature.
- R = 8.314 J/(mol·K) is one of the most precisely known physical constants.

## Worked Examples

### Example 1: Boyle's law

You record (P in kPa, V in mL):

| P (kPa) | V (mL) | 1/V (mL⁻¹) |
|--------:|-------:|------------:|
| 100 | 50.0 | 0.0200 |
| 110 | 45.5 | 0.0220 |
| 125 | 40.0 | 0.0250 |
| 145 | 34.5 | 0.0290 |
| 170 | 29.4 | 0.0340 |
| 200 | 25.0 | 0.0400 |

A linear fit to P (y) against 1/V (x) gives slope = (200 − 100) / (0.04 − 0.02) = 100 / 0.02 = 5000 kPa·mL = 5.0 × 10⁶ Pa·mL = 5.0 J.

The intercept should be zero (within the fit uncertainty); the data are consistent with P × V = 5.0 J. The number of moles is n = 5.0 J / (R T) = 5.0 / (8.314 · 298) = 0.00202 mol.

### Example 2: Charles's law

You measure the pressure of a fixed amount of gas at several temperatures:

| T (°C) | T (K) | P (kPa) |
|-------:|------:|--------:|
| 25 | 298 | 100.0 |
| 35 | 308 | 103.4 |
| 45 | 318 | 106.7 |
| 55 | 328 | 110.1 |
| 65 | 338 | 113.5 |
| 75 | 348 | 116.9 |

A linear fit to P (y) against T (x) gives slope = 0.337 kPa/K. Extrapolating to P = 0 gives T = 100.0 / (−0.337) = − 297 K (relative to the y-intercept) — but a fit through the data should be done with P = a (T − T_0), giving T_0 = − intercept / slope.

The ideal gas law predicts P/T = constant. From the data: P/T at 298 K is 0.336 kPa/K; at 348 K is 0.336 kPa/K. The agreement is excellent.

### Example 3: R

A 250.0 mL bulb is filled with nitrogen (M = 28.02 g/mol) at 100.0 kPa and 25.0 °C. The mass of nitrogen is 0.286 g.

n = 0.286 / 28.02 = 0.01021 mol.

PV = 100000 · 2.5 × 10⁻⁴ = 25.0 J.

R = PV / (nT) = 25.0 / (0.01021 · 298.15) = 25.0 / 3.044 = 8.213 J/(mol·K).

The literature value is 8.314 J/(mol·K). The discrepancy of 1.2 % is consistent with the uncertainty in the volume (the bulb is not exactly 250.0 mL), the pressure (atmospheric pressure fluctuations), and the temperature (bath not exactly 25.0 °C).

## Common Misconceptions

- **"PV = nRT is exact."** It is exact for an ideal gas. Real gases deviate; the deviations are described by the van der Waals equation or the virial expansion. At 1 atm, the deviation is typically < 1 %; at 10 atm, several per cent.
- **"Absolute zero is unattainable."** Correct — the third law of thermodynamics says it cannot be reached in a finite number of steps. But it can be approached arbitrarily closely (current record: ~ 100 pK for ultracold原子 gases; ~ 1 nK for laser-cooled atoms).
- **"Temperature in the gas law is in Celsius."** It must be in kelvin. Using Celsius gives an incorrect absolute zero and incorrect scaling.
- **"Boyle's law requires T to be constant."** Strictly yes; the lab usually assumes room temperature is constant, but a careful measurement records T at each P.
- **"R depends on the gas."** It is the same for all ideal gases. Real gases have slightly different effective R at finite pressure, but the universal gas constant is universal.

## Connections

- **Thermal Physics and Statistical Mechanics (Sem 2 theory).** The ideal gas law is the thermodynamic identity of an ideal gas. The kinetic theory of gases derives PV = nRT from the microscopic motion of molecules; the equipartition theorem gives the heat capacity; the partition function of a monatomic ideal gas is the foundation of statistical mechanics.
- **Chemistry.** The gas law is the workhorse of stoichiometry: the volume of gas produced in a reaction is related to the moles by PV = nRT. Combustion, respiration, photosynthesis, and atmospheric chemistry are all governed by the gas law in one form or another.
- **Engineering.** The design of engines, refrigerators, compressors, and pneumatic systems relies on the gas law. The thermodynamic cycles (Carnot, Otto, Diesel, Brayton) are all built from gas-law processes.
- **Astrophysics (Sem 5/6).** The gas law applies to the interior of stars (where the gas is fully ionised and behaves ideally), to planetary atmospheres, and to the interstellar medium. The gas law in spherical coordinates is the equation of hydrostatic equilibrium.
- **Meteorology.** The atmosphere is a thin shell of ideal gas on a sphere; the gas law in hydrostatic equilibrium gives the barometric formula and the lapse rate.

## Quick Check

1. State the ideal gas law. Define each symbol.
2. State Boyle's law. What is held constant?
3. State Charles's law. What is held constant?
4. A gas at 300 K occupies 500 mL at 1 atm. What volume does it occupy at 600 K at the same pressure?
5. A gas at 1 atm and 300 K is compressed to half its volume. What is the new pressure (at constant T)?
6. A 1 L bulb contains 0.04 mol of gas at 300 K. What is the pressure?
7. A student measures R and gets 7.5 J/(mol·K), 10 % below the accepted value. What might be wrong?
8. Extrapolating P vs T to P = 0 gives what temperature? Why?

## Takeaway

The ideal gas law is the lab's most-tested equation. The lab verifies each of its limiting cases (Boyle, Charles, Gay-Lussac), measures R to within a per cent or so, and extrapolates the absolute zero of temperature. The dominant errors are in the temperature of the gas (must be measured in the bath, not the room), the mass of the gas (requires a good balance and accounting for adsorbed gas), and the volume of the bulb (must be calibrated). The lab's discipline — careful weighing, accurate temperature control, slow equilibration — is the same discipline that runs through every gas-law experiment in chemistry, biology, and engineering. The ideal gas law is the limit; the real gas law (van der Waals, virial) is the refinement.
