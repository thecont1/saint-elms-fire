***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: electronic-instrumentation-lab
courseName: Electronic Instrumentation Lab (Option B)
moduleId: electronic-instrumentation-lab-module-1
moduleName: Sensor Calibration, Bridge Circuits, and Amplification
lessonId: electronic-instrumentation-lab-m1-l1
lessonName: Sensor Calibration and the Error Budget
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - renewable-energy-lab-m1-l6
learningObjectives:
  - Calibrate a temperature sensor (thermistor or RTD) against a reference; determine the calibration coefficients and their uncertainties.
  - Construct an error budget for the measurement system, identifying the dominant sources of error.
  - Use the error budget to optimise the measurement (e.g. reduce the dominant error).
concepts:
  - Sensor calibration
  - Calibration curve
  - Error budget
  - Least-squares fit
  - Uncertainty propagation
  - Thermistor
  - RTD (Resistance Temperature Detector)
  - Systematic and random errors
tags:
  - physics
  - laboratory
  - instrumentation
  - calibration
  - error-budget
  - sensor
sourceType: authored-courseware
assessmentHints:
  - Calibration: measure the sensor output at several known values of the measurand; fit a model.
  - Error budget: list all sources of error; estimate the magnitude of each; combine in quadrature.
  - For a thermistor: R = R_0 exp(B/T), where B is the beta constant.
status: in-review
***

# Sensor Calibration and the Error Budget

## Overview

Every measurement system has errors. The errors can be systematic (e.g. a miscalibrated sensor) or random (e.g. electrical noise). The error budget is the list of all sources of error, with an estimate of the magnitude of each. The total error is the quadrature sum of the individual errors (assuming they are independent).

This lesson covers the apparatus (a thermistor or RTD, a reference thermometer, a multimeter, a temperature-controlled bath), the procedure (calibrate the sensor at several temperatures; construct the error budget), the analysis (fit the calibration model, compute the uncertainties, identify the dominant error), and the dominant sources of error (sensor calibration, reference accuracy, thermal coupling, self-heating, electrical noise).

## Learning Path

1. **Set up the temperature-controlled bath.** Fill the bath with water; set the temperature to 20 °C.
2. **Measure the sensor resistance** at several temperatures (e.g. 20, 30, 40, 50, 60, 70, 80 °C). Use the multimeter.
3. **Measure the reference temperature** with the calibrated thermometer.
4. **Fit the calibration model** (Steinhart-Hart for thermistor, or linear for RTD).
5. **Construct the error budget** — list all sources of error; estimate the magnitude of each; combine in quadrature.
6. **Identify the dominant error** and propose a method to reduce it.

## Core Explanation

### Theory: Sensor Calibration

A sensor converts a physical quantity (temperature, pressure, light) into a measurable output (resistance, voltage, current). The calibration is the relationship between the output and the physical quantity. For a linear sensor,

y = a · x + b,

where y is the output, x is the physical quantity, a is the sensitivity, and b is the offset. For a non-linear sensor (e.g. a thermistor), the relationship is more complex.

For a thermistor (NTC), the resistance depends on the temperature:

R(T) = R_0 exp(B · (1/T − 1/T_0)),

where R_0 is the resistance at T_0, B is the beta constant (~ 3000-5000 K for typical NTC thermistors), and T is the absolute temperature. The Steinhart-Hart equation is a more accurate three-parameter model.

For an RTD (e.g. PT100), the resistance depends linearly on the temperature:

R(T) = R_0 · (1 + α · (T − T_0)),

where α = 0.00385 K⁻¹ for platinum. The PT100 has R_0 = 100 Ω at 0 °C.

### Theory: Error Budget

The error budget is the list of all sources of error and their magnitudes. The total error is

σ_total = √(Σ σ_i²),

assuming the errors are independent. The dominant error is the largest σ_i; reducing it gives the biggest improvement in the total error.

The sources of error for a temperature measurement with a thermistor:
- Sensor calibration: the error in the calibration model.
- Reference accuracy: the error in the reference thermometer (~ 0.1 °C for a typical laboratory thermometer).
- Thermal coupling: the temperature difference between the sensor and the bath.
- Self-heating: the sensor dissipates power (I²R), heating itself.
- Electrical noise: the noise in the multimeter reading.
- Quantisation: the resolution of the multimeter (e.g. 0.1 Ω for a 4-digit meter).

### Apparatus

- Thermistor (NTC, 10 kΩ at 25 °C, B = 3950 K) or RTD (PT100).
- Reference thermometer (calibrated, 0.1 °C accuracy).
- Multimeter (4-digit, 0.1 Ω resolution).
- Temperature-controlled bath (a water bath with a heater and a stirrer; range 0-100 °C; stability 0.1 °C).
- Beaker, stirrer, ice (for 0 °C), hot water.
- Safety glasses.

### Procedure

1. **Set up the bath.** Fill with water; set the temperature to 20 °C. Allow 5-10 minutes for thermal equilibrium.
2. **Measure the sensor resistance** with the multimeter. Record the resistance and the reference temperature.
3. **Repeat at 30, 40, 50, 60, 70, 80 °C.** Allow 5 minutes for thermal equilibrium at each setpoint.
4. **Fit the calibration model.** For a thermistor, use the Steinhart-Hart equation. For an RTD, use a linear model.
5. **Construct the error budget** — estimate the magnitude of each source of error.
6. **Compute the total error** as the quadrature sum.
7. **Identify the dominant error.**

### Analysis

#### Calibration

For an NTC thermistor (10 kΩ at 25 °C, B = 3950 K), the Steinhart-Hart equation is

1/T = A + B · ln(R) + C · (ln R)³.

The fit returns A, B, C with their uncertainties. The residual (the difference between the measured and the predicted T) is typically ~ 0.1 °C for a good calibration.

For a PT100 RTD, the linear fit is

R(T) = 100 · (1 + 0.00385 · (T − 0)).

The fit returns R_0 and α with their uncertainties. The residual is typically ~ 0.01 °C for a good calibration.

#### Error Budget

For a temperature measurement with the thermistor:

| Source | Magnitude |
|--------|----------:|
| Sensor calibration | 0.1 °C |
| Reference accuracy | 0.1 °C |
| Thermal coupling | 0.2 °C |
| Self-heating | 0.05 °C |
| Electrical noise | 0.01 °C |
| Quantisation | 0.01 °C |
| **Total** (quadrature) | **0.26 °C** |

The dominant error is the thermal coupling (0.2 °C). Reducing the thermal coupling (e.g. by using a better thermal contact) gives the biggest improvement.

### Sources of Error

- **Sensor calibration.** A miscalibrated sensor gives a systematic error. The calibration is the most important part of the measurement.
- **Reference accuracy.** A poor reference gives a poor calibration. Use a calibrated reference thermometer.
- **Thermal coupling.** A poor thermal contact between the sensor and the bath gives a temperature difference. Use thermal paste or a stirred bath.
- **Self-heating.** The sensor dissipates power, heating itself. Use a low measurement current (e.g. 0.1 mA for a 10 kΩ thermistor).
- **Electrical noise.** The noise in the multimeter reading is a random error. Use averaging or a low-noise multimeter.
- **Quantisation.** The resolution of the multimeter is a random error. Use a higher-resolution multimeter.

## Key Ideas

- Calibration: measure the sensor output at several known values of the measurand; fit a model.
- Error budget: list all sources of error; estimate the magnitude; combine in quadrature.
- Dominant error: the largest σ_i; reducing it gives the biggest improvement.
- Thermistor: R = R_0 exp(B/T). RTD: R = R_0 (1 + α T).

## Worked Examples

#### Example 1: Thermistor Calibration

A 10 kΩ NTC thermistor is calibrated at 5 temperatures. The fit of the Steinhart-Hart equation returns A = 1.13 × 10⁻³, B = 2.89 × 10⁻⁴, C = 1.64 × 10⁻⁷ (with the resistance in Ω and T in K). The residual is 0.05 °C.

The dominant error is the thermal coupling (0.2 °C). To reduce it, use a thermal paste or a stirred bath with a longer equilibration time.

#### Example 2: PT100 RTD Calibration

A PT100 RTD is calibrated at 0 °C (ice bath), 25 °C (room temperature), 50 °C (water bath), and 100 °C (boiling water). The fit returns R_0 = 100.0 ± 0.1 Ω and α = 0.00385 ± 0.00001 K⁻¹. The residual is 0.02 °C.

The error budget: sensor calibration 0.02 °C, reference 0.1 °C, thermal coupling 0.1 °C, self-heating 0.01 °C. Total: 0.15 °C.

## Common Misconceptions

- **"The calibration is exact."** No. The calibration is an approximation; the residual is the deviation.
- **"The error budget is the same as the measurement uncertainty."** No. The error budget is the list of sources; the measurement uncertainty is the quadrature sum.
- **"The dominant error is the biggest source."** Not always. The dominant error is the one that contributes the most to the total error (i.e. the largest σ_i in the quadrature sum).
- **"A more expensive sensor is more accurate."** Not always. The accuracy depends on the calibration, the thermal coupling, and the environment. A well-calibrated cheap sensor is more accurate than a poorly-calibrated expensive sensor.
- **"Self-heating is negligible."** For a 10 kΩ thermistor with 1 mA, the power is 10 μW — negligible. For a 100 Ω RTD with 10 mA, the power is 10 mW — significant. Use a low measurement current.

## Connections

- **Electronic Instrumentation (Sem 6 theory).** Calibration and error budgets are the foundations of measurement science. Every measurement system must be calibrated and its errors quantified.
- **Metrology.** Metrology is the science of measurement. The error budget is the central tool of the metrologist.
- **Quality control.** The ISO 9000 standards require calibration and error analysis for all measurement equipment used in production.
- **Engineering.** Every engineered system has tolerances and uncertainties. The error budget is the design tool for the uncertainty.
- **Data science.** The error budget is the Bayesian prior on the data. The data analysis combines the prior with the data to give the posterior.

## Quick Check

1. What is the calibration of a sensor?
2. What is the error budget?
3. How are independent errors combined?
4. What is the dominant error?
5. What is the Steinhart-Hart equation?
6. What is the alpha of a PT100 RTD?
7. How is self-heating reduced?
8. What is the difference between systematic and random errors?

## Takeaway

The calibration and the error budget are the lab's primary tools for ensuring the accuracy of a measurement. The lab's discipline — careful calibration, complete error budget, identification of the dominant error — is the same discipline that runs through every measurement system. The same principles (calibration, error propagation, dominant error) apply to all measurements, from the laboratory to the industrial process. The data you collect today is only as good as the calibration and the error budget.
