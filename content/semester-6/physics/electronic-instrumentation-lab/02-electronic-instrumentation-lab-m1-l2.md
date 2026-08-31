***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: electronic-instrumentation-lab
courseName: Electronic Instrumentation Lab (Option B)
moduleId: electronic-instrumentation-lab-module-1
moduleName: Sensor Calibration, Bridge Circuits, and Amplification
lessonId: electronic-instrumentation-lab-m1-l2
lessonName: Wheatstone Bridge and Strain Gauge Measurement
lessonNumber: 2
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - electronic-instrumentation-lab-m1-l1
learningObjectives:
  - Build a Wheatstone bridge circuit; balance the bridge; measure an unknown resistance.
  - Use a strain gauge in a Wheatstone bridge configuration; measure the gauge factor of the strain gauge.
  - Distinguish quarter-bridge, half-bridge, and full-bridge configurations; understand the temperature compensation.
concepts:
  - Wheatstone bridge
  - Balance condition
  - Sensitivity
  - Strain gauge
  - Gauge factor
  - Quarter-bridge, half-bridge, full-bridge
  - Temperature compensation
  - Common-mode rejection
tags:
  - physics
  - laboratory
  - instrumentation
  - wheatstone
  - bridge
  - strain
  - gauge
sourceType: authored-courseware
assessmentHints:
  - Wheatstone balance: R_1/R_2 = R_3/R_4.
  - Gauge factor: GF = (dR/R) / (dL/L). Typical GF ~ 2 for a metal foil gauge.
  - Full-bridge gives 4x the sensitivity of quarter-bridge.
status: in-review
***

# Wheatstone Bridge and Strain Gauge Measurement

## Overview

A Wheatstone bridge is a classic circuit for measuring small changes in resistance. The bridge consists of four resistors in a diamond configuration; a galvanometer detects the balance. When the bridge is balanced (no current through the galvanometer), the ratio of the resistances is known. Small changes in one resistance (e.g. due to strain, temperature, or light) unbalance the bridge; the galvanometer current is proportional to the change.

A strain gauge is a resistor whose resistance changes with strain. The gauge factor GF = (ΔR / R) / (ΔL / L) is typically ~ 2 for a metal foil gauge. The strain gauge is used in a Wheatstone bridge configuration to convert the small resistance change to a measurable voltage.

This lesson covers the apparatus (a Wheatstone bridge circuit, a strain gauge, a galvanometer, a multimeter, weights for loading), the procedure (balance the bridge, measure the unknown resistance, measure the strain as a function of load), the analysis (compute the gauge factor, the sensitivity, the temperature compensation), and the dominant sources of error (resistor tolerance, lead resistance, temperature, gauge non-linearity).

## Learning Path

1. **Build the Wheatstone bridge.** Connect four resistors (three known, one unknown) in a diamond configuration. Connect a DC source and a galvanometer.
2. **Balance the bridge.** Adjust one of the known resistors until the galvanometer reads zero. Compute the unknown resistance.
3. **Replace one resistor with a strain gauge.** Apply a known load; record the bridge output voltage.
4. **Compute the strain** and the gauge factor.
5. **Compare quarter-bridge, half-bridge, and full-bridge configurations.**
6. **Investigate the temperature compensation.**

## Core Explanation

### Theory: Wheatstone Bridge

A Wheatstone bridge consists of four resistors R_1, R_2, R_3, R_4 arranged in a diamond. A DC source V_s is applied between the top and bottom nodes; a galvanometer is connected between the left and right nodes. The bridge is balanced when the galvanometer current is zero, which occurs when

R_1 / R_2 = R_3 / R_4.

The balance condition is independent of the source voltage and the galvanometer resistance. The sensitivity is maximum when all four resistances are equal (R_1 = R_2 = R_3 = R_4 = R); the bridge output is V_o = (ΔR / R) · V_s / 4 for a small change in one resistor.

### Theory: Strain Gauge

A strain gauge is a metal foil or semiconductor resistor whose resistance changes with strain. The gauge factor is

GF = (ΔR / R) / ε,

where ε = ΔL / L is the strain. For a metal foil gauge, GF ~ 2 (the dominant contribution is the change in geometry, with a small contribution from the piezoresistive effect). For a semiconductor gauge, GF can be 100 or more.

The strain gauge is bonded to the specimen with a thin layer of adhesive. The strain in the specimen is transferred to the gauge through the adhesive.

### Theory: Quarter-Bridge, Half-Bridge, Full-Bridge

- **Quarter-bridge**: one active gauge, three fixed resistors. Sensitivity: V_o = (GF · ε / 4) · V_s. No temperature compensation (the gauge resistance changes with temperature, mimicking strain).
- **Half-bridge**: two active gauges, two fixed resistors. Sensitivity: 2x. Temperature compensation: if the two gauges are at the same temperature, the temperature-induced resistance changes cancel.
- **Full-bridge**: four active gauges. Sensitivity: 4x. Maximum temperature compensation and common-mode rejection.

### Apparatus

- Resistors (1 kΩ, 0.1 % tolerance).
- Strain gauge (e.g. a metal foil gauge with GF = 2.0, 120 Ω, 5 mm gauge length).
- Cantilever beam (for applying a known strain).
- Weights (10 g to 1 kg).
- Galvanometer or instrumentation amplifier.
- DC source (0-10 V).
- Multimeter.
- Connecting wires.
- Safety glasses.

### Procedure

1. **Build the Wheatstone bridge** with three 1 kΩ resistors and one unknown resistor. Apply 5 V DC. Connect the galvanometer.
2. **Balance the bridge** by varying one of the known resistors (use a decade resistor). Record the value when the galvanometer reads zero.
3. **Compute the unknown resistance** from the balance condition.
4. **Replace one resistor with a strain gauge** bonded to a cantilever beam. Apply weights to the end of the beam; record the bridge output voltage.
5. **Compute the strain** (from the beam theory: ε = 6 W L / (E w t²) for a cantilever beam with end load W).
6. **Compute the gauge factor** from GF = (ΔR / R) / ε = (4 V_o / V_s) / ε.
7. **Compare quarter-bridge, half-bridge, full-bridge** configurations.
8. **Investigate temperature compensation** by heating one of the gauges with a finger.

### Analysis

For a 1 kΩ bridge with V_s = 5 V and a gauge with GF = 2.0, the bridge output for a strain of 100 μstrain is

V_o = (GF · ε / 4) · V_s = (2.0 · 100 × 10⁻⁶ / 4) · 5 = 2.5 × 10⁻⁴ V = 0.25 mV.

For a strain gauge with R = 120 Ω, the resistance change is

ΔR = GF · ε · R = 2.0 · 100 × 10⁻⁶ · 120 = 0.024 Ω.

This is a very small change; the bridge amplifies it to a measurable voltage.

For a full-bridge with four active gauges (two in tension, two in compression), the sensitivity is 4x: V_o = 1.0 mV for the same strain.

### Sources of Error

- **Resistor tolerance.** The fixed resistors have a tolerance of 0.1 %; this gives a zero-offset error.
- **Lead resistance.** The lead resistance adds to the gauge resistance; for a 120 Ω gauge with 1 Ω lead resistance, the error is ~ 1 %. Use the Kelvin (4-wire) connection for low resistances.
- **Temperature.** The gauge resistance changes with temperature (~ 0.1 %/K for a metal gauge). The temperature compensation (half-bridge, full-bridge) cancels the common-mode temperature change.
- **Gauge non-linearity.** The gauge factor is approximately constant for small strains (< 1 %), but becomes non-linear for large strains.
- **Self-heating.** The measurement current heats the gauge, changing its resistance. Use a low current (e.g. 5 mA for a 120 Ω gauge).

## Key Ideas

- Wheatstone bridge: R_1/R_2 = R_3/R_4 at balance. Sensitivity ∝ ΔR / R.
- Strain gauge: GF = (ΔR / R) / ε. For metal foil, GF ~ 2.
- Quarter-bridge: 1 active gauge. Half-bridge: 2 active gauges. Full-bridge: 4 active gauges.
- Temperature compensation: half-bridge or full-bridge. Common-mode rejection.

## Worked Examples

#### Example 1: Unknown Resistance

A Wheatstone bridge with R_1 = R_2 = R_3 = 1 kΩ is balanced when R_4 = 1.005 kΩ. The unknown resistance is R_x = R_4 = 1.005 kΩ.

#### Example 2: Strain Gauge Calibration

A strain gauge with GF = 2.0 and R = 120 Ω is mounted on a cantilever beam. A weight of 100 g is applied at the end; the bridge output is V_o = 0.25 mV (with V_s = 5 V).

The strain is ε = (4 V_o) / (V_s · GF) = (4 · 0.25 × 10⁻³) / (5 · 2.0) = 100 × 10⁻⁶ = 100 μstrain.

The resistance change is ΔR = GF · ε · R = 2.0 · 100 × 10⁻⁶ · 120 = 0.024 Ω.

## Common Misconceptions

- **"The Wheatstone bridge measures absolute resistance."** No. The bridge measures the ratio of two resistances. To measure absolute resistance, one resistor must be calibrated.
- **"The strain gauge measures strain directly."** No. The strain gauge measures the resistance change, which is proportional to the strain (with the gauge factor). The strain is computed from the resistance change.
- **"The full-bridge is always better than the half-bridge."** Not always. The full-bridge is more sensitive but requires four gauges; the half-bridge is a good compromise.
- **"The temperature compensation is perfect."** No. The compensation is good for common-mode temperature changes; differential temperature changes (e.g. one gauge heated more than another) are not compensated.

## Connections

- **Electronic Instrumentation (Sem 6 theory).** The Wheatstone bridge is the workhorse of precision resistance measurement. The strain gauge is the workhorse of stress and strain measurement.
- **Mechanical engineering.** Strain gauges are used to measure stress in beams, bridges, pressure vessels, and other structures. The data is used for design validation, fatigue analysis, and structural health monitoring.
- **Civil engineering.** Strain gauges are used in structural health monitoring of bridges, dams, and buildings. The data is used to detect damage and to schedule maintenance.
- **Sensors.** Many sensors (pressure, force, acceleration) use a strain gauge as the sensing element. The strain gauge converts the physical quantity to a resistance change; the bridge converts the resistance change to a voltage.
- **Materials science.** The piezoresistive effect in semiconductors is much larger than in metals. Semiconductor strain gauges have GF ~ 100, allowing much smaller strains to be measured.

## Quick Check

1. What is the balance condition of a Wheatstone bridge?
2. What is the gauge factor of a strain gauge?
3. What is the difference between quarter-bridge, half-bridge, and full-bridge?
4. Why is the temperature compensation important?
5. What is the dominant source of error in a strain gauge measurement?
6. What is the typical gauge factor of a metal foil gauge?
7. What is the piezoresistive effect?
8. What is the Kelvin connection?

## Takeaway

The Wheatstone bridge and the strain gauge are the lab's primary tools for measuring small changes in resistance and for measuring strain. The bridge balance, the gauge factor, the bridge configurations, and the temperature compensation are the central concepts. The lab's discipline — careful bridge construction, accurate strain application, proper temperature compensation, honest uncertainty estimation — is the same discipline that runs through every strain gauge measurement. The same principles (Wheatstone bridge, strain gauge, temperature compensation) apply to all resistive sensors, from the strain gauge to the thermistor to the photoresistor. The data you collect today is the raw material for the analysis that follows.
