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
lessonId: electronic-instrumentation-lab-m1-l3
lessonName: Operational Amplifier Circuits and Instrumentation Amplifiers
lessonNumber: 3
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - electronic-instrumentation-lab-m1-l2
learningObjectives:
  - Build and characterise inverting and non-inverting op-amp amplifiers; measure closed-loop gain, bandwidth, and saturation limits.
  - Build a three-op-amp instrumentation amplifier; measure its differential gain and common-mode rejection ratio (CMRR).
  - Amplify a Wheatstone bridge output to a usable level and quantify the gain calibration and its uncertainty.
concepts:
  - Operational amplifier
  - Closed-loop gain
  - Gain-bandwidth product
  - Instrumentation amplifier
  - Common-mode rejection ratio
  - Saturation and headroom
  - Input offset voltage
tags:
  - physics
  - laboratory
  - instrumentation
  - op-amp
  - amplification
sourceType: authored-courseware
assessmentHints:
  - Non-inverting gain: G = 1 + R_f/R_1. Inverting gain: G = −R_f/R_1.
  - Gain-bandwidth product: G × BW ≈ constant (e.g. ~1 MHz for a general-purpose op-amp).
  - CMRR = 20 log10(A_d/A_cm) in dB; typical three-op-amp IA achieves 80-100 dB with matched resistors.
status: in-review
***

# Operational Amplifier Circuits and Instrumentation Amplifiers

## Overview

The Wheatstone bridge of the previous lesson produces a signal — but a small one. A strain gauge in a quarter bridge at full load may unbalance the bridge by only millivolts, riding on top of volts of common-mode level. The bridge needs an amplifier: one that provides precise, stable gain to the tiny differential signal while rejecting the large common-mode voltage. This lesson builds and characterises the two workhorses of the analogue front end — the op-amp amplifier (inverting and non-inverting) and the three-op-amp instrumentation amplifier — and connects them directly to the bridge you already know.

## Learning Path

1. **Review the ideal op-amp rules** (virtual short, no input current) and the two basic gain topologies.
2. **Build a non-inverting amplifier** (G = 10); measure its actual gain, bandwidth, and saturation levels.
3. **Build an inverting amplifier** (G = −10); compare its input impedance and offset behaviour with the non-inverting form.
4. **Measure the gain-bandwidth product** and confirm that gain × bandwidth is approximately constant.
5. **Build the three-op-amp instrumentation amplifier**; measure differential gain, then common-mode gain, and compute CMRR.
6. **Amplify the strain-gauge bridge** from lesson 2; calibrate the chain (bridge output → amplified voltage) and propagate uncertainties.

## Core Explanation

### Theory: Op-Amp Gain Topologies

An ideal op-amp has infinite open-loop gain A, infinite input impedance, and zero output impedance. Negative feedback sets the closed-loop gain using only the external resistors:

- **Non-inverting:** G = 1 + R_f/R_1. Input impedance is very high (≈ the op-amp's own), so the source is barely loaded.
- **Inverting:** G = −R_f/R_1. Input impedance equals R_1, which loads the source; useful when a defined input impedance is wanted.

Both topologies share the real op-amp's limits:

- **Saturation:** the output cannot exceed the supply rails minus a headroom (~1-2 V for a standard part on ±15 V rails). Driving into saturation clips the waveform and is the most common student fault.
- **Gain-bandwidth product (GBP):** the open-loop gain rolls off at 20 dB/decade; the closed-loop bandwidth is approximately GBP/G. A 1 MHz GBP op-amp at G = 10 has BW ≈ 100 kHz.
- **Input offset voltage:** a small differential input voltage (µV to mV) that appears as an output error of G × V_os — significant at high gain.

### Theory: The Instrumentation Amplifier

The three-op-amp instrumentation amplifier (IA) consists of two non-inverting buffers (gain stage, set by one resistor R_g) followed by a difference amplifier:

A_d = (1 + 2R/R_g) × (R_2/R_1) (buffer stage × difference stage)

Its virtues: very high input impedance (both inputs buffered), gain set by one resistor, and — crucially — **common-mode rejection**. The difference stage cancels any voltage common to both inputs, provided its resistor ratios match. The CMRR quantifies this:

CMRR = 20 log₁₀(A_d / A_cm) dB

A CMRR of 100 dB means a 10 V common-mode disturbance produces only 100 µV of equivalent input error. Cheap difference amplifiers built from discrete 1%-tolerance resistors achieve ~40-50 dB; matched networks or monolithic IAs reach 80-110 dB. This is exactly what bridge measurements need: the bridge output is millivolts differential on volts of common mode.

### Apparatus

- Op-amps: general-purpose (e.g. uA741/TL081 class) ×3; optional monolithic IA (e.g. AD620/INA128) for comparison.
- Resistors: 1 kΩ, 10 kΩ, 100 kΩ (1% tolerance); 100 Ω gain-set resistor for the IA.
- Function generator (sine, 1 kHz to 1 MHz), dual DC supply (±15 V or ±12 V).
- Oscilloscope (2 channels) and/or lock-in/multimeter for DC measurements.
- Wheatstone bridge with strain gauge from lesson 2 (loaded cantilever).
- Breadboard, shielded cables, safety glasses.

### Procedure

1. **Non-inverting amplifier, G = 10.** Use R_f = 90 kΩ (or 100 kΩ with R_1 = 10 kΩ → G = 11), ±15 V rails. Apply a 100 mV, 1 kHz sine input; measure the output amplitude; compute actual gain.
2. **Bandwidth sweep.** Keep the input amplitude fixed; increase frequency until the output falls to 1/√2 (−3 dB) of its low-frequency value; record f_−3dB. Repeat for G = 100 (R_f/R_1 = 99) and verify GBP ≈ G × f_−3dB is constant.
3. **Saturation limits.** Increase the input amplitude until the output clips; record the positive and negative saturation levels and compare with the rails.
4. **Inverting amplifier, G = −10.** Build it; measure gain and measure the input impedance by the series-resistor method; compare with the non-inverting case.
5. **Instrumentation amplifier.** Build the three-op-amp IA with R_g = 100 Ω (buffer gain ≈ 201, then difference stage G = 0.05-1 to bring total gain to ~10-100).
   a. Apply a small differential input; measure A_d.
   b. Tie both inputs together to a 5 V common-mode signal; measure the output; compute A_cm and CMRR.
   c. Repeat with 1% mismatch introduced deliberately in the difference-stage resistors; observe the CMRR collapse.
6. **Bridge chain.** Connect the strain-gauge bridge (lesson 2) to the IA; load the cantilever in steps; record amplified output versus strain; fit the chain calibration.

### Analysis

#### Gain and bandwidth

For the non-inverting stage with R_f = 90 kΩ, R_1 = 10 kΩ: nominal G = 10. Measured example: 998 mV out for 100 mV in → G = 9.98 (−0.2%). The −3 dB point at G = 10 falls near 95 kHz for a 1 MHz-GBP part; at G = 100 near 9.5 kHz. The product G × f_−3dB ≈ 0.95-1.0 MHz confirms the GBP model within a few percent.

#### CMRR

With matched 0.1% difference-stage resistors: A_d = 100.0, measured output for 5 V common-mode input = 0.5 mV → A_cm = 10⁻⁴ → CMRR = 20 log₁₀(100/10⁻⁴) = 120 dB (measurement-floor limited; typical real result ~100 dB). With one 1% resistor swapped in: A_cm rises to ~2 × 10⁻³ → CMRR ≈ 94 dB; with 5% parts, ~60-70 dB. The resistor ratio, not the op-amps, sets the achievable CMRR.

#### Bridge-to-voltage chain

The quarter bridge gives ΔV_bridge ≈ (V_ex/4) × GF × ε. With V_ex = 5 V, GF = 2, ε = 1000 µε: ΔV_bridge ≈ 2.5 mV. The IA at G = 100 delivers ~250 mV — a comfortable measurement level. The chain calibration (mV_bridge → V_out) is linear; its slope is G × (bridge sensitivity), and the error budget combines the gain tolerance (resistor tolerance), offset, and CMRR residual.

### Sources of Error

- **Resistor tolerance:** sets gain accuracy and CMRR; use 0.1-1% metal film for the difference stage.
- **Input offset:** at G = 100, a 1 mV offset becomes 100 mV of output error; null it or subtract it (zero the bridge first).
- **Bandwidth limitation:** gain error grows as the signal frequency approaches f_−3dB.
- **Power-supply noise and ground loops:** appear as common-mode or differential hum; use star grounding and shielded cables.
- **Loading:** an inverting input impedance of 10 kΩ loading a 350 Ω bridge would corrupt the signal — use the IA (high-Z inputs) for bridges.

## Key Ideas

- Closed-loop gain is set by feedback resistors: non-inverting G = 1 + R_f/R_1, inverting G = −R_f/R_1.
- Real limits: saturation headroom, gain-bandwidth product (G × BW ≈ constant), and input offset multiplied by gain.
- The three-op-amp instrumentation amplifier gives high input impedance, one-resistor gain setting, and common-mode rejection.
- CMRR = 20 log₁₀(A_d/A_cm); resistor-ratio matching, not op-amp quality, dominates achievable CMRR.
- Bridges need IAs: millivolt differential signals on volt-level common mode are exactly the IA use case.

## Worked Examples

#### Example 1: Bandwidth budget

A sensor signal spans up to 20 kHz and needs gain 50. With a 1 MHz-GBP op-amp, f_−3dB = 1 MHz/50 = 20 kHz — the signal band sits right at −3 dB, giving ~30% gain error at the band edge. Fix: use a faster op-amp (10 MHz GBP) or split the gain over two stages.

#### Example 2: CMRR requirement

A bridge sits at 5 V common mode with a 2 mV signal; you need the common-mode feed-through below 1% of the signal (20 µV). Required A_cm ≤ 20 µV/5 V = 4 × 10⁻⁶; with A_d = 100, CMRR ≥ 20 log₁₀(100/4 × 10⁻⁶) ≈ 134 dB — beyond discrete builds, so use a monolithic IA or reduce the common-mode level first.

#### Example 3: Offset error

An IA with 50 µV input offset at G = 200 contributes 10 mV of output error. If the full-scale signal is 2 V, that is 0.5% of span — correctable by a zero-offset calibration (short the bridge, record the offset, subtract), which is standard practice.

## Common Misconceptions

- **"Gain is exactly R_f/R_1."** Only for ideal op-amps at low frequency; real gain carries tolerance, bandwidth, and loading corrections.
- **"Any amplifier works for a bridge."** A single-ended amplifier loads the bridge and amplifies the common-mode level into saturation; bridges need differential, high-Z amplification.
- **"High CMRR comes from good op-amps."** It comes from matched resistor ratios in the difference stage; 5% resistors ruin even the best op-amps.
- **"Saturation protects nothing and costs nothing."** Clipped output corrupts the measurement and recovery from saturation can be slow; always leave headroom.
- **"Offset can be ignored at low gain."** At G = 10 it usually can; at G = 100-1000 it dominates the error budget.

## Connections

- **Previous lesson:** The Wheatstone bridge is the source; this lesson supplies its front end.
- **Electronic Instrumentation theory (Sem 6):** Op-amp idealisations, feedback theory, and CMRR analysis appear there in full.
- **Next lesson:** The amplified signal needs bandwidth shaping — active filters.
- **Communication Electronics Lab (Sem 4):** The same op-amp toolkit builds the modulators and demodulators there.

## Quick Check

1. What is the gain of a non-inverting amplifier with R_f = 99 kΩ and R_1 = 1 kΩ?
2. Why does an inverting amplifier have input impedance equal to R_1?
3. What is the gain-bandwidth product, and what bandwidth does a 1 MHz-GBP op-amp give at G = 100?
4. Define CMRR and state what physically limits it in a discrete IA.
5. Why is an instrumentation amplifier the correct front end for a Wheatstone bridge?

## Takeaway

Amplification is not just gain: it is gain applied with precision — correct topology, known bandwidth, controlled offset, and common-mode rejection matched to the source. The instrumentation amplifier is the bridge's natural partner, turning millivolt unbalances into volt-level signals without dragging the common mode along. With calibration (L1), the bridge (L2), and now the amplifier in place, the measurement chain grows toward its full form.
