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
lessonId: renewable-energy-lab-m1-l1
lessonName: Solar Cell I-V Characteristics and Efficiency
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - nuclear-physics-lab-m1-l6
learningObjectives:
  - Measure the I-V characteristic of a silicon solar cell under illumination.
  - Determine the open-circuit voltage V_oc, the short-circuit current I_sc, the fill factor FF, and the efficiency η.
  - Measure the I-V characteristic in the dark; determine the dark saturation current and the ideality factor.
concepts:
  - Photovoltaic effect
  - Solar cell equivalent circuit
  - I-V characteristic
  - Open-circuit voltage
  - Short-circuit current
  - Fill factor
  - Efficiency
  - Standard test conditions (STC)
  - Series and shunt resistance
tags:
  - physics
  - laboratory
  - renewable
  - solar
  - photovoltaic
  - i-v
sourceType: authored-courseware
assessmentHints:
  - V_oc = (k_B T / q) ln(I_sc / I_0 + 1), where I_0 is the dark saturation current.
  - Fill factor: FF = (V_mpp · I_mpp) / (V_oc · I_sc), where mpp is the maximum power point.
  - Efficiency: η = P_max / P_in = (V_oc · I_sc · FF) / P_in.
status: in-review
***

# Solar Cell I-V Characteristics and Efficiency

## Overview

A solar cell converts sunlight directly into electricity via the photovoltaic effect. The solar cell is a p-n junction with a large area; the incident photons create electron-hole pairs, which are separated by the built-in electric field of the junction. The I-V characteristic of a solar cell under illumination is described by the equivalent circuit: a current source (the photo-generated current I_ph) in parallel with a diode (the dark current) and a shunt resistance R_sh, all in series with a series resistance R_s.

This lesson covers the apparatus (a silicon solar cell, a variable load, a voltmeter, an ammeter, a solar simulator or a sunlight source), the procedure (measure the I-V curve under illumination, measure the I-V curve in the dark), the analysis (extract V_oc, I_sc, FF, η, R_s, R_sh, the ideality factor), and the dominant sources of error (light intensity, temperature, contact resistance).

## Learning Path

1. **Set up the solar cell** under the solar simulator (or in sunlight). Connect the variable load, the voltmeter (across the cell), and the ammeter (in series with the load).
2. **Measure the I-V curve under illumination.** Vary the load from short circuit (R = 0) to open circuit (R = ∞). Record the current and the voltage at each load.
3. **Measure the I-V curve in the dark.** Cover the cell; vary the load; record the current and the voltage.
4. **Extract the parameters.** V_oc, I_sc, FF, η, I_0, n, R_s, R_sh.
5. **Compare with the specifications.** Check the efficiency against the rated value (typically 15-20 % for a silicon cell).

## Core Explanation

### Theory: Solar Cell Equivalent Circuit

The equivalent circuit of a solar cell is a current source I_ph (the photo-generated current) in parallel with a diode (the dark current) and a shunt resistance R_sh, all in series with a series resistance R_s. The I-V characteristic is

I = I_ph − I_0 (exp((V + I R_s) / (n V_T)) − 1) − (V + I R_s) / R_sh,

where I_0 is the dark saturation current, n is the ideality factor (1-2 for a good cell), V_T = k_B T / q is the thermal voltage (~ 25.7 mV at 300 K), and R_s and R_sh are the series and shunt resistances.

### Theory: Key Parameters

- **Short-circuit current I_sc**: the current at V = 0. I_sc ≈ I_ph.
- **Open-circuit voltage V_oc**: the voltage at I = 0. V_oc = n V_T ln(I_sc / I_0 + 1).
- **Fill factor FF**: the ratio of the maximum power to the product V_oc · I_sc. FF = (V_mpp · I_mpp) / (V_oc · I_sc). For a good cell, FF = 0.7-0.85.
- **Efficiency η**: the ratio of the electrical power output to the solar power input. η = (V_oc · I_sc · FF) / P_in. For a silicon cell, η = 15-22 %.

### Theory: Series and Shunt Resistance

- **Series resistance R_s**: due to the resistance of the metal contacts, the semiconductor, and the interfaces. A high R_s reduces the fill factor and the efficiency.
- **Shunt resistance R_sh**: due to leakage currents around the junction. A low R_sh reduces the fill factor and the efficiency.

For a good cell, R_s < 1 Ω·cm² and R_sh > 1000 Ω·cm².

### Apparatus

- Silicon solar cell (e.g. a 5 cm × 5 cm monocrystalline cell).
- Variable load (a decade resistor or a variable resistor).
- Voltmeter (digital, 0.1 mV resolution).
- Ammeter (digital, 0.1 mA resolution).
- Solar simulator (a xenon lamp with an AM 1.5G filter) or natural sunlight.
- Pyranometer (to measure the light intensity).
- Thermometer (to measure the cell temperature).
- Safety glasses.

### Procedure

1. **Set up the solar cell** under the solar simulator. Measure the light intensity (typically 1000 W/m² for AM 1.5G) and the cell temperature (typically 25 °C).
2. **Connect the circuit.** Connect the variable load across the cell. Connect the voltmeter across the cell and the ammeter in series with the load.
3. **Measure the I-V curve under illumination.** Vary the load from 0 (short circuit) to a large value (open circuit). For each load, record the current and the voltage. Take ~ 20 points.
4. **Measure the I-V curve in the dark.** Cover the cell. Repeat the measurement.
5. **Repeat at different light intensities** (e.g. 200, 400, 600, 800, 1000 W/m²) to study the dependence.

### Analysis

#### I-V Curve Under Illumination

Plot I (y) against V (x). Identify I_sc (at V = 0) and V_oc (at I = 0). Find the maximum power point (V_mpp, I_mpp) by finding the largest rectangle that fits under the curve.

For a typical silicon cell under AM 1.5G: I_sc = 30 mA, V_oc = 0.6 V, V_mpp = 0.48 V, I_mpp = 27 mA, P_max = 13 mW. For a 5 cm × 5 cm cell (25 cm² = 0.0025 m²), the input power is 1000 · 0.0025 = 2.5 W. The efficiency is η = 13 mW / 2.5 W = 0.5 % — wait, this is too low. Let me recompute.

For a 5 cm × 5 cm cell, the area is 25 cm². The input power at 1000 W/m² is 1000 · 25 × 10⁻⁴ = 2.5 W. For a 15 % efficient cell, the output power is 0.15 · 2.5 = 0.375 W. The current at the maximum power point is I_mpp = 0.375 / 0.5 = 0.75 A = 750 mA (for V_mpp = 0.5 V). For a smaller cell (e.g. 2 cm × 2 cm = 4 cm²), the output is 60 mW, and I_mpp = 120 mA.

For a typical lab cell (2 cm × 2 cm), the expected I_sc is ~ 100-200 mA, V_oc ~ 0.6 V, FF ~ 0.7, η ~ 12-15 %.

#### I-V Curve in the Dark

The dark I-V curve follows the diode equation: I = I_0 (exp(V / (n V_T)) − 1). Plot ln(I) vs V for V > 0.3 V. A linear fit returns the slope = 1 / (n V_T), giving the ideality factor n. The intercept is ln(I_0).

For a good cell, n = 1-2 and I_0 = 10⁻¹⁰ to 10⁻⁸ A/cm².

### Sources of Error

- **Light intensity.** The light intensity must be measured accurately. Use a calibrated pyranometer.
- **Temperature.** The cell temperature must be measured. V_oc decreases by ~ 2 mV/°C as the temperature increases.
- **Contact resistance.** A high contact resistance increases R_s. Use clean contacts and a 4-wire measurement.
- **Spectral mismatch.** The spectrum of the solar simulator may not match the AM 1.5G spectrum. Use a solar simulator with an AM 1.5G filter.
- **Shading.** Even partial shading of the cell can significantly reduce the output. Keep the cell fully illuminated.

## Key Ideas

- Solar cell equivalent circuit: I_ph, diode, R_sh, R_s.
- V_oc = n V_T ln(I_sc / I_0 + 1). For silicon, V_oc ~ 0.6 V.
- Fill factor: FF = (V_mpp · I_mpp) / (V_oc · I_sc). For a good cell, FF = 0.7-0.85.
- Efficiency: η = (V_oc · I_sc · FF) / P_in. For a silicon cell, η = 15-22 %.

## Worked Examples

#### Example 1: Solar Cell Parameters

A 2 cm × 2 cm silicon solar cell is measured under AM 1.5G (1000 W/m²). The I-V curve gives:
- I_sc = 120 mA
- V_oc = 0.60 V
- V_mpp = 0.48 V
- I_mpp = 105 mA

FF = (0.48 · 0.105) / (0.60 · 0.120) = 0.504 / 0.072 = 0.70.

P_in = 1000 · 4 × 10⁻⁴ = 0.4 W.

η = (0.48 · 0.105) / 0.4 = 0.0504 / 0.4 = 0.126 = 12.6 %.

This is a typical efficiency for a small lab silicon cell.

#### Example 2: Dark I-V Curve

The dark I-V curve gives a linear fit of ln(I) vs V with slope 1 / (n V_T) = 38.2 V⁻¹ (for V_T = 25.7 mV at 300 K). Then n = 1 / (38.2 · 0.0257) = 1.02. The intercept is ln(I_0) = − 18.4, so I_0 = 10⁻⁸ A.

For a good silicon cell, n is close to 1 (the diode ideality factor). A higher n indicates recombination in the depletion region.

## Common Misconceptions

- **"The solar cell efficiency is constant."** No. The efficiency depends on the light intensity, the spectrum, the temperature, and the angle of incidence.
- **"The open-circuit voltage is fixed."** V_oc depends on I_sc (and hence the light intensity) and on the dark saturation current (which depends on the temperature).
- **"The fill factor is always the same."** FF depends on the series and shunt resistances. A high R_s or a low R_sh reduces the FF.
- **"A silicon cell is the most efficient."** For single-junction cells, silicon is the most common but not the most efficient. GaAs (30 %), perovskite (25 %), and multi-junction cells (40+ %) are more efficient.
- **"The temperature doesn't matter."** V_oc decreases by 2 mV/°C, and I_sc increases slightly with temperature. The net effect is a decrease in efficiency with temperature (~ 0.4 %/°C for silicon).

## Connections

- **Renewable Energy and Applications (Sem 6 theory).** Solar cells are the workhorse of solar energy conversion. The I-V characteristic, the efficiency, and the temperature dependence are the central topics.
- **Materials science.** The semiconductor properties of silicon (and other materials) determine the solar cell performance. The band gap, the absorption coefficient, the carrier lifetime are the key parameters.
- **Engineering.** Solar cell manufacturing is a major industry. The design of solar cells, modules, and arrays requires understanding of the semiconductor physics, the optics, and the system engineering.
- **Energy.** Solar energy is the most abundant renewable energy source. The global solar energy potential is ~ 1000× the global energy consumption.
- **Climate change.** Solar energy is a key technology for mitigating climate change. The cost of solar electricity has decreased by ~ 90 % in the last decade, making it competitive with fossil fuels in many regions.

## Quick Check

1. What is the open-circuit voltage of a silicon solar cell?
2. What is the short-circuit current proportional to?
3. What is the fill factor?
4. What is the efficiency of a typical silicon solar cell?
5. What is the effect of temperature on V_oc?
6. What is the effect of series resistance on the fill factor?
7. What is the dark saturation current?
8. What is the ideality factor of a good silicon cell?

## Takeaway

The solar cell I-V characteristic is the lab's primary tool for characterising photovoltaic devices. The equivalent circuit, the V_oc, the I_sc, the FF, the η, the R_s, and the R_sh are the central concepts. The lab's discipline — careful light source calibration, accurate temperature control, proper 4-wire measurement, honest uncertainty estimation — is the same discipline that runs through every solar cell measurement. The same principles (photovoltaic effect, diode equation, fill factor) apply to all solar cells, from the laboratory cell to the rooftop panel to the satellite solar array. The data you collect today is the raw material for the analysis that follows.
