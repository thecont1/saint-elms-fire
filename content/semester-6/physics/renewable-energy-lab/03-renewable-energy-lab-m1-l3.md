***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: renewable-energy-lab
courseName: Renewable Energy and Applications Lab (Option A)
moduleId: renewable-energy-lab-module-1
moduleName: Solar Cells, Energy Conversion, and Storage
lessonId: renewable-energy-lab-m1-l3
lessonName: Temperature and Irradiance Dependence
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - renewable-energy-lab-m1-l2
learningObjectives:
  - Measure the I-V characteristic at several temperatures; determine the temperature coefficients of V_oc, I_sc, FF, and η.
  - Measure the I-V characteristic at several light intensities; verify the linear dependence of I_sc on intensity.
  - Identify the operating conditions (temperature, irradiance) that maximise the efficiency.
concepts:
  - Temperature coefficient
  - Irradiance dependence
  - Standard test conditions (STC)
  - NOCT
  - Translation of STC to operating conditions
  - Air mass (AM)
  - Spectral mismatch
tags:
  - physics
  - laboratory
  - solar
  - temperature
  - irradiance
  - stc
sourceType: authored-courseware
assessmentHints:
  - dV_oc/dT ~ -2 mV/K for Si. dI_sc/dT ~ +0.05 %/K. dFF/dT ~ -0.1 %/K. dη/dT ~ -0.4 %/K.
  - I_sc proportional to light intensity. V_oc ~ ln(I_sc). FF weakly dependent.
  - STC: 1000 W/m², AM 1.5G, 25 degC cell temperature.
status: in-review
***

# Temperature and Irradiance Dependence

## Overview

The performance of a solar cell depends on the cell temperature and the light intensity. V_oc decreases by ~ 2 mV/K as the temperature increases (because the dark saturation current increases). I_sc increases slightly with temperature (because the band gap decreases, increasing the absorption). The fill factor decreases with temperature. The net effect is a decrease in efficiency with temperature at ~ 0.4 %/K for silicon. I_sc is proportional to the light intensity; V_oc increases logarithmically with intensity. The standard test conditions (STC) are 1000 W/m² irradiance, AM 1.5G spectrum, and 25 °C cell temperature. The NOCT (Nominal Operating Cell Temperature) is ~ 45 °C for a typical module.

## Learning Path

1. **Set up the solar cell** on a temperature-controlled stage (a Peltier cooler or a heated plate).
2. **Measure the I-V curve at several temperatures** (e.g. 15, 25, 35, 45, 55 °C) at STC irradiance.
3. **Measure the I-V curve at several light intensities** (e.g. 200, 400, 600, 800, 1000 W/m²) at 25 °C.
4. **Extract the temperature coefficients** of V_oc, I_sc, FF, η.
5. **Identify the operating conditions** that maximise the efficiency.

## Core Explanation

### Temperature Dependence

V_oc(T) = V_oc(25 °C) + (dV_oc/dT) · (T − 25 °C), with dV_oc/dT ≈ − 2 mV/K for Si.
I_sc(T) = I_sc(25 °C) · (1 + (dI_sc/dT) · (T − 25 °C)), with dI_sc/dT ≈ + 0.05 %/K.
FF(T) = FF(25 °C) · (1 + (dFF/dT) · (T − 25 °C)), with dFF/dT ≈ − 0.1 %/K.
η(T) = η(25 °C) · (1 + (dη/dT) · (T − 25 °C)), with dη/dT ≈ − 0.4 %/K.

The temperature dependence of V_oc is dominated by the increase in the dark saturation current I_0 with temperature. From V_oc = n V_T ln(I_sc / I_0 + 1) and I_0 ∝ T³ exp(− E_g / (k_B T)), dV_oc / dT = − E_g / (q T) + 3 k_B / q ≈ − 1.7 mV/K (for Si, E_g = 1.12 eV, T = 300 K). The measured value is ~ − 2 mV/K, slightly larger due to the temperature dependence of I_sc.

### Irradiance Dependence

I_sc(G) = I_sc(STC) · (G / 1000 W/m²).
V_oc(G) = V_oc(STC) + n V_T · ln(G / 1000 W/m²).
FF(G) = FF(STC) · (1 − 0.05 · (1 − G / 1000 W/m²)).

For G < 200 W/m², the fill factor decreases significantly. For G > 400 W/m², the fill factor is approximately constant.

### Standard Test Conditions (STC)

The STC are 1000 W/m² irradiance, AM 1.5G spectrum, and 25 °C cell temperature. All solar cell datasheets quote the performance at STC.

### NOCT

The NOCT (Nominal Operating Cell Temperature) is the cell temperature at 800 W/m² irradiance, 20 °C ambient temperature, and 1 m/s wind speed. The NOCT is typically 45 ± 3 °C for a silicon module in a rooftop installation.

### Apparatus

- Solar cell (as in L1).
- Temperature-controlled stage (Peltier cooler with a temperature controller).
- Solar simulator (with adjustable intensity).
- Voltmeter, ammeter, variable load.
- Pyranometer (for the light intensity).
- Thermocouple (for the cell temperature).
- Safety glasses.

### Procedure

1. Mount the solar cell on the temperature-controlled stage. Set the temperature to 15 °C.
2. Set the solar simulator to 1000 W/m² (STC). Measure the I-V curve.
3. Repeat at 25, 35, 45, 55 °C.
4. Set the temperature to 25 °C. Vary the light intensity: 200, 400, 600, 800, 1000 W/m². Measure the I-V curve at each intensity.
5. Extract the parameters and the temperature/irradiance coefficients.

### Analysis

For each temperature, extract I_sc, V_oc, FF, η. Plot against T and fit linear trends.

For each irradiance, extract the same parameters. Plot against G (on a log scale for V_oc).

### Sources of Error

- **Temperature non-uniformity.** The cell temperature may not be uniform. Use a good thermal contact.
- **Spectral mismatch.** The spectrum of the solar simulator may not match AM 1.5G. Use a solar simulator with a proper filter.
- **Intensity fluctuation.** The light intensity may fluctuate. Use a monitored reference cell.
- **Series resistance.** A high R_s reduces the temperature coefficient. Use a low-R_s cell.

## Key Ideas

- Temperature coefficients: dV_oc/dT ~ -2 mV/K, dη/dT ~ -0.4 %/K (for Si).
- Irradiance: I_sc ∝ G, V_oc ∝ ln G.
- STC: 1000 W/m², AM 1.5G, 25 °C.
- NOCT: 45 °C at 800 W/m², 20 °C ambient, 1 m/s wind.

## Worked Example

For a Si cell at STC: V_oc = 0.60 V, I_sc = 3 A, FF = 0.80, η = 20 %.

At 50 °C: V_oc = 0.60 − 2 × 10⁻³ · 25 = 0.55 V, FF = 0.80 · (1 − 0.001 · 25) = 0.78, η = 20 · (1 − 0.004 · 25) = 18 %.

The efficiency decreases by 2 percentage points (from 20 % to 18 %) as the temperature increases by 25 K.

## Common Misconceptions

- **"Higher temperature is better for solar cells."** No. Higher temperature decreases the efficiency. Solar cells work best at low temperatures; the NOCT is 45 °C, well above the optimum.
- **"The fill factor is constant."** No. FF decreases with temperature and with decreasing irradiance.
- **"STC is the operating condition."** No. STC is the reference condition for datasheets. The operating condition (NOCT) is hotter, reducing the efficiency by ~ 20 %.

## Connections

- **Renewable Energy (Sem 6 theory).** Temperature and irradiance dependence are central to solar cell performance and to the design of solar energy systems.
- **Energy systems.** The temperature of a solar panel is determined by the irradiance, the ambient temperature, the wind speed, and the mounting. The temperature coefficient determines the energy yield in different climates.
- **Engineering.** Solar plant design accounts for the temperature and irradiance dependence. The performance ratio (actual energy / theoretical energy at STC) is typically 75-85 %.

## Quick Check

1. What is dV_oc/dT for silicon?
2. What is dη/dT for silicon?
3. What is NOCT?
4. What is the STC?
5. How does I_sc depend on the irradiance?
6. How does V_oc depend on the irradiance?
7. What is the dominant loss mechanism at low irradiance?
8. What is the dominant loss mechanism at high temperature?

## Takeaway

The temperature and irradiance dependence of a solar cell are essential to predicting its performance in the field. The lab's discipline — accurate temperature and irradiance control, proper STC translation, honest uncertainty estimation — is the same discipline that runs through every solar cell measurement. The data you collect today is the raw material for the design of the solar energy system.
