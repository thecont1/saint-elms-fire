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
lessonId: thermal-physics-lab-m1-l1
lessonName: Thermometry, Calibration, and Linear Thermal Expansion
lessonNumber: 1
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - electricity-and-magnetism-lab-m1-l6
learningObjectives:
  - Calibrate a thermocouple or resistance thermometer against a mercury-in-glass standard.
  - Measure the linear thermal expansion coefficient of a metal rod and verify α = ΔL / (L₀ ΔT).
  - Identify and correct for the dominant sources of error in thermal expansion measurements.
concepts:
  - Temperature scales
  - Thermocouple
  - Resistance thermometer
  - Seebeck effect
  - Linear thermal expansion
  - Coefficient of linear expansion
  - Calibration
  - Heat conduction along the rod
tags:
  - physics
  - laboratory
  - thermal
  - thermometry
  - expansion
  - seebeck
sourceType: authored-courseware
assessmentHints:
  - The expansion of a 1 m brass rod over 50 K is about 0.5 mm — small, but measurable with a vernier microscope.
  - Heat conduction along the rod limits the temperature uniformity; the expansion is the average over the rod length.
  - Thermocouples are non-linear; a single-point calibration is not sufficient over a wide range.
status: in-review
***

# Thermometry, Calibration, and Linear Thermal Expansion

## Overview

Two of the most common thermal measurements in the lab are temperature and length. Temperature is read with a thermometer — mercury-in-glass, thermocouple, resistance thermometer, or pyrometer. Length changes with temperature because solids expand when heated, and the fractional change ΔL / L is linear in the temperature change ΔT for small ΔT, with the constant of proportionality being the linear expansion coefficient α (units K⁻¹). Measure α for a metal rod and you have measured one of its fundamental material properties.

This lesson covers the calibration of a thermocouple or resistance thermometer against a mercury standard, the measurement of the linear expansion of a metal rod (brass, copper, or aluminium) using a vernier microscope or a dial gauge, the analysis (linear fit of ΔL against ΔT), and the dominant error sources (heat conduction, temperature non-uniformity, thermal lag).

## Learning Path

1. **Calibrate the thermometer** — place the thermocouple and a calibrated mercury thermometer in a water bath at several temperatures between 0 °C and 100 °C; record both readings; fit a polynomial or look-up table.
2. **Set the expansion apparatus** — mount a metal rod in a steam jacket; one end is fixed; the other end is free to expand against a vernier microscope or dial gauge.
3. **Measure the cold length** — record L₀ at room temperature.
4. **Measure the expansion** — pass steam through the jacket; record the temperature T and the length L; compute ΔL.
5. **Repeat for several temperatures** — let the rod cool in steps; record L and T at each step.
6. **Fit α** — plot ΔL (y) against L₀ ΔT (x); the slope is α.
7. **Compare with literature** — look up α for the metal used (brass ~ 19 × 10⁻⁶ K⁻¹, copper ~ 17 × 10⁻⁶ K⁻¹, aluminium ~ 23 × 10⁻⁶ K⁻¹).

## Core Explanation

### Theory: Thermocouples and the Seebeck Effect

A thermocouple is a junction of two dissimilar metals. The Seebeck effect produces a voltage V proportional to the temperature difference between the junction and the reference (cold) junction. For a type K thermocouple (chromel-alumel), the sensitivity is about 41 μV/°C near room temperature; the voltage is approximately linear in ΔT over a wide range, with small corrections.

To use a thermocouple, you need a reference temperature (often 0 °C, the ice point). The voltage is read with a high-impedance millivolt meter or a temperature readout. The calibration is done by placing the thermocouple in a known temperature bath (ice water, boiling water, or a calibrated oil bath) and recording the reading.

### Theory: Resistance Thermometers

A resistance thermometer (RTD) uses a metal (typically platinum) whose resistance R increases with temperature. For platinum, the relationship is approximately linear over a wide range:

R(T) = R₀ (1 + a T + b T²),

with a ≈ 3.9 × 10⁻³ K⁻¹ and b ≈ −5.8 × 10⁻⁷ K⁻². A more accurate form is the Callendar-Van Dusen equation.

To use an RTD, you measure R with a 4-wire Kelvin connection (to eliminate the lead resistance), then look up T from a calibration table or polynomial.

### Theory: Linear Thermal Expansion

For a solid of length L at temperature T, the length at temperature T + ΔT is

L(T + ΔT) = L(T) (1 + α ΔT),

where α is the linear expansion coefficient. The change in length is

ΔL = L(T) α ΔT.

For small ΔT, α is approximately constant. For larger ΔT, α itself varies with T, and a polynomial fit is needed.

Typical values of α (at room temperature):
- Brass: 19 × 10⁻⁶ K⁻¹
- Copper: 17 × 10⁻⁶ K⁻¹
- Aluminium: 23 × 10⁻⁶ K⁻¹
- Steel: 12 × 10⁻⁶ K⁻¹
- Invar: 1.2 × 10⁻⁶ K⁻¹ (low-expansion alloy used in precision instruments)

### Apparatus

- Linear expansion apparatus: a metal rod (~ 50 cm long, 1 cm diameter) inside a steam jacket or oil bath; one end fixed, the other end free to expand; a vernier microscope or dial gauge to measure the expansion.
- Steam generator (or a hot plate with a beaker of water and a delivery tube).
- Thermocouple (type K) with digital readout, or mercury thermometer (0–100 °C, 0.1 °C divisions).
- Calibrated mercury thermometer (for the reference).
- Ice, distilled water, Bunsen burner, tripod.
- Vernier microscope (resolution 0.01 mm) or dial gauge (0.01 mm).
- Safety glasses, heat-resistant gloves.

### Procedure: Thermocouple Calibration

1. Prepare an ice bath: a mixture of crushed ice and distilled water in a dewar, with continuous stirring. The temperature is 0.0 °C.
2. Prepare a boiling-water bath: a beaker of distilled water on a hot plate, with the thermocouple and the reference thermometer in the water. The temperature is 100.0 °C at standard pressure; correct for local pressure if high accuracy is required.
3. Place the thermocouple junction and the reference thermometer in the ice bath. Allow 2–3 minutes for thermal equilibrium. Record the thermocouple voltage V_ice and the reference temperature T_ice.
4. Place both in the boiling-water bath. Record V_boil and T_boil.
5. (Optional) For a more complete calibration, use additional temperature points (room temperature, an intermediate bath at ~ 50 °C).
6. Compute the sensitivity: S = (V_boil − V_ice) / (T_boil − T_ice), in μV/°C.
7. For a type K thermocouple, S should be about 41 μV/°C. The discrepancy, if any, is the linearity error.

### Procedure: Linear Expansion

1. Measure the cold length of the rod L₀ with a metre scale (resolution 1 mm). The expansion is a few tenths of a millimetre over 50 K, so the cold length should be known to ± 0.5 mm.
2. Mount the rod in the expansion apparatus. Make sure the free end is in contact with the vernier microscope or dial gauge, and the fixed end is rigidly clamped.
3. Record the cold length reading x₀ on the vernier microscope or dial gauge.
4. Pass steam through the jacket. Allow 10–15 minutes for thermal equilibrium. The rod will expand; the reading on the vernier will increase.
5. Record the new reading x and the rod temperature T (from a thermometer or thermocouple in the steam jacket).
6. Stop the steam; let the rod cool. Record x and T at intervals as it cools (e.g. every 10 °C) to get a full curve.
7. Compute ΔL = x − x₀ for each temperature.

### Analysis

#### Calibration

The thermocouple sensitivity S is computed as above. If you have multiple calibration points, fit a polynomial V(T) to the data; the slope at any T gives the local sensitivity.

#### Linear Expansion

Plot ΔL (y) against L₀ ΔT (x). The slope is α. A linear fit returns α with an uncertainty from the scatter.

For a single temperature point (e.g. ΔT = 80 K, L₀ = 0.500 m, ΔL = 0.76 mm), the inferred α = 0.00076 / (0.500 · 80) = 1.9 × 10⁻⁵ K⁻¹ — consistent with brass.

### Error Sources

- **Temperature non-uniformity along the rod.** The end of the rod nearest the steam inlet is hotter than the far end. The expansion is the average; if the temperature gradient is large, the average temperature is not the average of the two ends. Use multiple thermocouples along the rod to map the temperature profile.
- **Thermal lag.** The rod takes time to reach equilibrium. Wait at least 10 minutes after a temperature change.
- **Heat conduction through the rod to the support.** The fixed end of the rod is in contact with a metal support, which conducts heat away. The temperature at the fixed end is therefore lower than in the middle. Mitigate by using a low-conductivity support (e.g. PTFE) or by insulating the support.
- **Vernier microscope parallax.** Read the vernier with the eye directly above the scale to avoid parallax. The expansion is small (~ 0.5 mm); a 0.05 mm reading error is 10 % of the signal.
- **Calibration drift.** The mercury thermometer's calibration can drift over years. Use a freshly-calibrated reference for high-accuracy work.

## Key Ideas

- A thermocouple's voltage is approximately linear in the temperature difference between the hot junction and the cold (reference) junction. Type K has a sensitivity of about 41 μV/°C near room temperature.
- A resistance thermometer uses the temperature dependence of a metal's resistance; platinum is the standard.
- The linear expansion coefficient α is defined by ΔL = L₀ α ΔT. Typical values: 12 × 10⁻⁶ K⁻¹ (steel) to 23 × 10⁻⁶ K⁻¹ (aluminium).
- The expansion of a 1 m rod over 50 K is about 0.5–1 mm — small but measurable with a vernier microscope.
- Heat conduction and thermal lag are the dominant error sources in expansion measurements.

## Worked Examples

### Example 1: Thermocouple calibration

You place a type K thermocouple in an ice bath and read V_ice = 0.000 mV. You place it in boiling water and read V_boil = 4.10 mV.

- Sensitivity: S = (4.10 − 0.000) mV / (100.0 − 0.0) °C = 0.0410 mV/°C = 41.0 μV/°C.
- This matches the rated sensitivity of type K (41 μV/°C), so the thermocouple is working correctly.
- The cold-junction compensation is built into the digital readout; the ice-bath reading is the reference 0 °C.

### Example 2: Linear expansion of brass

You mount a brass rod of L₀ = (500.0 ± 0.5) mm in the expansion apparatus. At room temperature (T = 30.0 °C), the dial gauge reads x₀ = 5.00 mm. You pass steam and wait for equilibrium. The steam temperature is T_steam = 100.0 °C, and the dial gauge now reads x = 5.95 mm.

- ΔT = 100.0 − 30.0 = 70.0 K.
- ΔL = 5.95 − 5.00 = 0.95 mm.
- α = ΔL / (L₀ ΔT) = 0.00095 m / (0.500 m · 70.0 K) = 2.71 × 10⁻⁵ K⁻¹.

This is somewhat high for brass (literature: 19 × 10⁻⁶ K⁻¹). The discrepancy suggests that the cold temperature of the rod was not actually 30 °C (it may have been closer to 50 °C because the room was warm, or the steam jacket had pre-heated the rod), reducing ΔT and inflating α. The systematic correction is to measure T directly on the rod, not in the room.

A corrected analysis: if the rod's average temperature at the cold end is 50 °C, then ΔT = 50 K, and α = 0.00095 / (0.500 · 50) = 3.8 × 10⁻⁵ K⁻¹ — still high. The most likely issue is that the cold end of the rod is in contact with the metal support, which acts as a heat sink, and the average temperature is much less than 100 °C. A real lab would map the temperature along the rod.

### Example 3: Multiple temperature points

You record the rod length and temperature at several points during cooling:

| T (°C) | L (mm) | ΔL (mm) |
|-------:|-------:|--------:|
| 100 | 500.95 | 0.95 |
| 80 | 500.76 | 0.76 |
| 60 | 500.57 | 0.57 |
| 40 | 500.38 | 0.38 |
| 30 | 500.29 | 0.29 |

Plot ΔL against T. A linear fit gives ΔL = (0.0095 mm/°C) (T − 30 °C), with T the rod temperature (assuming the room temperature is 30 °C and the cold reading is the reference). Then α = 0.0095 / (500 · 1000) = 1.9 × 10⁻⁵ K⁻¹ — close to the brass value. The lesson: the multiple-point analysis avoids the systematic error in the single-point case.

## Common Misconceptions

- **"A thermocouple measures temperature."** It measures the temperature difference between the hot junction and the cold (reference) junction. To get absolute temperature, you need a known reference (usually 0 °C, the ice point).
- **"The expansion of the rod is uniform along its length."** Only if the temperature is uniform. In a real steam-jacketed rod, the temperature is non-uniform, and the expansion is the integral of α(T) dT along the rod.
- **"The expansion is large enough to measure with a ruler."** For a 1 m brass rod over 50 K, the expansion is about 0.5 mm — small. A vernier microscope or dial gauge is needed.
- **"The thermal expansion coefficient is a constant."** It depends weakly on temperature. For high-precision work, use a polynomial α(T) over the temperature range of interest.
- **"Mercury thermometers are obsolete."** They are still used as laboratory references, because they are stable, accurate (with calibration), and do not require electrical power. Their main drawback is that mercury is toxic, and broken thermometers are a hazard.

## Connections

- **Thermal Physics and Statistical Mechanics (Sem 2 theory).** Thermal expansion is one of the macroscopic consequences of the anharmonicity of the interatomic potential. A purely harmonic crystal would not expand; the asymmetry of the potential produces both thermal expansion and a contribution to the heat capacity (the Dulong-Petit limit).
- **Engineering.** The thermal expansion of solids is critical in the design of bridges (expansion joints), buildings (sliding supports), railways (continuous welded rail with pre-tensioning), and precision instruments (low-expansion materials like Invar and Zerodur).
- **Thermometry.** Every temperature measurement ultimately relies on a material property that depends on temperature: the volume of a liquid (mercury, alcohol), the pressure of a gas (constant-volume gas thermometer), the voltage of a thermocouple, the resistance of a metal (RTD), or the spectrum of a blackbody (pyrometer). The lab covers the first three.
- **Astrophysics (Sem 5/6).** The thermal expansion of the atmosphere sets the scale height of the troposphere; the expansion of stellar interiors is the central process in stellar structure; the expansion of the universe is the cosmological redshift.

## Quick Check

1. What is the Seebeck effect? How does a thermocouple use it?
2. Why does a thermocouple need a reference junction?
3. The expansion of a 1 m brass rod over 50 K is about how much?
4. A copper rod of L₀ = 600 mm is heated from 25 °C to 125 °C. What is ΔL? (α_Cu = 17 × 10⁻⁶ K⁻¹.)
5. Why is the cold-junction compensation necessary in a thermocouple measurement?
6. Why is the expansion of a steel rod smaller than that of a brass rod at the same ΔT?
7. A student reports α for brass as 3 × 10⁻⁵ K⁻¹, much higher than the literature value. Identify two possible sources of systematic error.
8. Sketch the temperature profile along a steam-jacketed rod. Where is the temperature highest? Where is it lowest?

## Takeaway

Thermometry and thermal expansion are the foundations of the thermal lab. A calibrated thermometer is the prerequisite for every other thermal measurement; the linear expansion coefficient is the first material property you will measure. The dominant error sources — heat conduction, thermal lag, temperature non-uniformity — are the same in every thermal experiment, and the techniques for managing them (insulation, equilibration time, temperature mapping) are the same too. Master the calibration and the expansion, and the calorimetry and gas-law experiments in the next lessons will be on solid ground.
