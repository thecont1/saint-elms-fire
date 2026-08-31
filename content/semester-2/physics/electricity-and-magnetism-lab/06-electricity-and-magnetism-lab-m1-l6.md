***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: electricity-and-magnetism-lab
courseName: Electricity and Magnetism Lab
moduleId: electricity-and-magnetism-lab-module-1
moduleName: Electrostatics, Circuits, and Magnetics
lessonId: electricity-and-magnetism-lab-m1-l6
lessonName: Uncertainties in E&M Measurements, Report Writing, and the Viva
lessonNumber: 6
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - electricity-and-magnetism-lab-m1-l5
learningObjectives:
  - Identify the dominant sources of uncertainty in E&M measurements (multimeter accuracy, scope probe loading, signal noise, ground loops).
  - Estimate the uncertainty in a derived quantity by propagating uncertainties through a calculation.
  - Write a complete lab report for an E&M experiment using the canonical structure.
  - Anticipate and answer viva-style questions about the five E&M experiments (equipotentials, RC, magnetic force, induction, RLC).
concepts:
  - Multimeter accuracy classes
  - Oscilloscope probe compensation
  - Signal-to-noise ratio
  - Ground loops
  - Uncertainty propagation
  - Lab report structure
  - Viva preparation
tags:
  - physics
  - laboratory
  - em
  - uncertainty
  - report-writing
  - viva
sourceType: authored-courseware
assessmentHints:
  - Multimeter accuracy is specified as ± (% of reading + % of range) — both terms must be evaluated.
  - Scope probe must be compensated; a mis-compensated probe distorts the waveform.
  - Viva questions often test whether the student can read their own data and identify the dominant error source.
status: in-review
***

# Uncertainties in E&M Measurements, Report Writing, and the Viva

## Overview

The five E&M experiments you have done — equipotential mapping, RC transients, magnetic force, induction, RLC resonance — produce numbers that look precise on the screen of the multimeter or the oscilloscope. But the precision of the instrument is not the same as the accuracy of the measurement. A 6.5-digit multimeter reading 1.00000 V is not 1.00000 V exactly; it is 1.00000 V plus or minus the instrument's specified accuracy, which is typically ± (0.0035 % of reading + 0.0005 % of range). For a 10 V range, that is ± (0.35 mV + 0.05 mV) = ± 0.4 mV — much larger than the least significant digit would suggest.

This lesson covers the four dominant sources of uncertainty in E&M measurements: instrument accuracy, scope probe loading, signal noise (including 50 Hz mains pickup), and ground loops. It walks through a worked example of uncertainty propagation for the RC time constant, the magnetic force, and the Q-factor. It then collects the viva questions an examiner is likely to ask across the five E&M experiments, so that you can rehearse them before the practical exam.

## Learning Path

1. **Calibrate the multimeter** — read the accuracy specification; check the zero on each range; record the calibration curve.
2. **Compensate the scope probe** — connect the probe to the scope's calibration terminal; adjust the trimmer until the square wave is flat-topped.
3. **Identify the dominant noise source** — measure the signal with and without a 50 Hz notch filter; identify the 50 Hz mains pickup.
4. **Propagate uncertainties** — compute the uncertainty in τ = RC, in F = B I L, in Q = (1/R) √(L/C).
5. **Write a complete report** — for one of the E&M experiments (e.g. RLC resonance), produce a full lab report using the canonical structure.
6. **Viva rehearsal** — work through the viva questions with a partner.

## Core Explanation

### Multimeter Accuracy

A digital multimeter (DMM) has an accuracy specification of the form

± (a % of reading + b % of range),

where a and b are specified by the manufacturer for each range and each function (DCV, ACV, resistance, current). For example, a Keysight 34461A on the 10 V DC range has a 1-year accuracy of ± (0.0035 % of reading + 0.0005 % of range) = ± (0.35 mV + 0.05 mV) = ± 0.40 mV on a 10 V reading. The "of reading" term scales with the signal; the "of range" term is a fixed offset.

For a 1.00000 V reading on the 10 V range, the absolute uncertainty is ± 0.40 mV, or a relative uncertainty of 0.04 %. The "1.00000 V" displayed precision is a red herring; the true uncertainty is at the fourth significant digit, not the sixth.

For the 1 V range (where you would put a 1 V signal to get the best resolution), the same accuracy spec becomes ± (0.0035 % of 1 V + 0.0005 % of 1 V) = ± 0.004 %, or ± 0.04 mV. So the 1 V range is 10× more accurate for a 1 V signal — always use the lowest range that does not overflow.

### Oscilloscope Probe Compensation

A scope probe is a compensated attenuator: a 10 MΩ resistor in the probe in series with a 10 MΩ resistor in the scope forms a 2:1 divider for DC; a small trimmer capacitor in the probe, in parallel with the probe's 10 MΩ, is adjusted to make the AC response also flat. A mis-compensated probe shows a square wave with overshoot or undershoot — a clear sign of trouble.

To compensate the probe, connect it to the scope's front-panel calibration terminal (a 1 kHz square wave of known amplitude, typically 1 V or 5 V). Adjust the trimmer (usually a small slotted screw in the probe body) until the displayed square wave is flat-topped, with sharp corners and no overshoot. This is part of the lab routine, not a one-time setup.

### Signal Noise and Ground Loops

E&M signals are often small (mV range) and easily contaminated by:

- **50 Hz mains pickup** — capacitive coupling from the AC power lines. The 50 Hz appears as a sinusoidal ripple on the signal, often with harmonics (100 Hz, 150 Hz) if the pickup is non-linear.
- **RF pickup** — radio stations, mobile phones, WiFi. Usually small, but can be significant for high-impedance circuits.
- **Thermal noise** — Johnson noise in the resistors, with RMS voltage V_noise = √(4 k_B T R Δf). At room temperature, in a 1 kΩ resistor over a 1 kHz bandwidth, V_noise ≈ 4 nV — usually negligible.
- **Ground loops** — two pieces of equipment connected to different ground points (e.g. the function generator and the scope) can have a small potential difference between their grounds (mV to V), which appears as a 50 Hz signal in the measurement. The remedy is to use a single ground point (star grounding) and to connect all signals relative to that point.

To diagnose 50 Hz pickup, view the signal on the scope with the time base at 10 ms/div or 20 ms/div. The 50 Hz ripple is unmistakable. A notch filter at 50 Hz (either hardware or in post-processing) removes the interference. For very small signals, a lock-in amplifier or a phase-sensitive detector can pull the signal out of the noise.

### Uncertainty Propagation

Given a measurement x ± σ_x and y ± σ_y, the uncertainty in a derived quantity z = f(x, y) is

σ_z = √((∂f/∂x)² σ_x² + (∂f/∂y)² σ_y²),

assuming x and y are independent. For a function of N variables, the same formula generalises with a sum of N terms.

For a product z = x y, σ_z / z = √((σ_x / x)² + (σ_y / y)²). For a sum z = x + y, σ_z = √(σ_x² + σ_y²). For a power z = x^n, σ_z / z = |n| σ_x / x.

### Worked Examples of Uncertainty Propagation

#### Example 1: RC Time Constant

You measure R = (1000 ± 1) Ω (from a 0.1 % resistor) and C = (1.00 ± 0.05) μF (from a 5 % capacitor). The time constant is τ = RC = 1.00 ms.

σ_R / R = 0.1 %; σ_C / C = 5 %.

σ_τ / τ = √((σ_R / R)² + (σ_C / C)²) = √(0.1² + 5²) % = √(25.01) % = 5.001 %.

So σ_τ = 0.05 ms, dominated by the capacitor tolerance. The resistor is precise to 0.1 %, but the capacitor is precise only to 5 %; the time constant inherits the capacitor's uncertainty.

**Reported:** τ = (1.00 ± 0.05) ms.

#### Example 2: Magnetic Force

You measure F = (9.8 ± 0.1) mN, I = (2.00 ± 0.02) A, L = (5.00 ± 0.05) cm. Compute B = F / (I L) and its uncertainty.

B = 0.0098 / (2.00 · 0.05) = 0.0098 / 0.1 = 0.098 T.

σ_F / F = 0.1 / 9.8 = 1.0 %.
σ_I / I = 0.02 / 2.00 = 1.0 %.
σ_L / L = 0.05 / 5.00 = 1.0 %.

σ_B / B = √(1² + 1² + 1²) % = √3 % = 1.73 %.

σ_B = 0.0017 T.

**Reported:** B = (0.098 ± 0.002) T.

#### Example 3: Q-Factor

Q = (1/R) √(L/C). You measure R = (10.0 ± 0.1) Ω, L = (10.0 ± 0.5) mH, C = (1.00 ± 0.05) μF.

Q = (1/10) √(0.010 / 10⁻⁶) = 100.

For Q = (1/R) L^(1/2) C^(-1/2):

∂Q/∂R = −Q / R, so (∂Q/∂R) σ_R = − Q · σ_R / R = − 100 · 0.01 = −1.0.
∂Q/∂L = Q / (2L), so (∂Q/∂L) σ_L = Q · σ_L / (2L) = 100 · 0.05 / 2 = 2.5.
∂Q/∂C = −Q / (2C), so (∂Q/∂C) σ_C = Q · σ_C / (2C) = 100 · 0.05 / 2 = 2.5.

σ_Q = √(1.0² + 2.5² + 2.5²) = √(13.5) = 3.7.

**Reported:** Q = 100 ± 4 (or 4 %).

### Apparatus Calibration

#### Multimeter Calibration

1. Select the DCV function, 10 V range.
2. Connect the multimeter inputs together. The reading should be 0.000 V ± 1 count. If not, the meter has a zero offset; use the "REL" or "zero" function to cancel it.
3. Connect the multimeter to a precision voltage reference (e.g. a calibrated 5 V source or a freshly-recharged 1.5 V cell measured against a higher-accuracy meter). Record the reading and the deviation from the reference.

#### Scope Probe Compensation

1. Connect the probe to the scope's CAL terminal (1 kHz square wave, ~ 1 V peak).
2. Observe the waveform. If it is flat-topped, the probe is compensated. If it has overshoot, turn the trimmer clockwise; if it has undershoot, counter-clockwise. Adjust until the corners are sharp and the top is flat.
3. Re-check whenever you change probes or scopes.

#### Signal Averaging

Most digital scopes have an "average" acquisition mode, which averages N successive traces. The signal (if it is periodic and synchronously triggered) adds coherently, while noise adds as √N. The signal-to-noise ratio improves by √N. For 50 Hz pickup, a 1 s average reduces the 50 Hz by a factor of √(50 · 1) = √50 ≈ 7 — significant if the 50 Hz is comparable to the signal.

## Key Ideas

- Multimeter accuracy is specified as ± (% of reading + % of range); both terms contribute.
- Use the lowest range that does not overflow the meter.
- A scope probe must be compensated; an uncompensated probe distorts the waveform.
- 50 Hz mains pickup is the most common E&M noise source. Use a notch filter or averaging.
- Uncertainty propagation: σ_z² = Σ (∂z/∂xᵢ)² σᵢ² for independent inputs.
- The dominant uncertainty in a measurement is usually not the instrument's least significant digit.

## Worked Example: Complete Report for the RLC Resonance

Below is a complete report outline, filled in with the RLC data above.

**Title:** Q-factor measurement of a series RLC circuit using the resonance curve.

**Abstract:** A series RLC circuit (R = 10.0 Ω, L = 10.0 mH, C = 1.00 μF) was driven by a sine wave of variable frequency. The resonance curve was measured by recording V_R as a function of frequency. The resonant frequency f₀ = 1592 ± 2 Hz, in agreement with the theoretical value f₀ = 1/(2π√(LC)) = 1592 Hz. The bandwidth Δf = 16 ± 1 Hz, giving Q = 99 ± 7, in agreement with the predicted Q = (1/R) √(L/C) = 100.

**Theory:** [Impedance of R, L, C; resonance condition ω₀ = 1/√(LC); bandwidth Δf = R/(2π L); Q = f₀/Δf; phase behaviour.]

**Apparatus:** Function generator (1 V peak sine, high-Z mode); resistor (10 Ω, 5 %); inductor (10 mH, ferrite core, Q ≈ 100); capacitor (1 μF, film, 5 %); oscilloscope (two channels); breadboard and connecting wires.

**Procedure:** [As in the lab manual.]

**Data:**

| f (Hz) | V_R (V peak-peak) | φ (degrees) |
|-------:|------------------:|------------:|
| 500 | 0.05 | +85 |
| 1000 | 0.18 | +72 |
| 1400 | 0.62 | +25 |
| 1592 | 1.00 | 0 |
| 1800 | 0.50 | −30 |
| 2500 | 0.15 | −72 |
| 5000 | 0.04 | −85 |

**Analysis:** [Plot V_R against f; locate the peak; measure the −3 dB points; compute Q.]

**Discussion:** The measured Q (99) is in good agreement with the predicted Q (100) within the uncertainty. The phase behaviour is also consistent: positive (current leads) below resonance, negative (current lags) above. The dominant uncertainty is in the bandwidth measurement (limited by the 10 Hz step size in the frequency sweep); a finer sweep would reduce this. The inductor's internal resistance (a few ohms, not separately measured) reduces Q slightly, but the agreement is within the combined uncertainty.

**Conclusion:** The series RLC resonance was measured with f₀ = 1592 ± 2 Hz and Q = 99 ± 7. Both are consistent with theory.

**References:** [Lab manual; any textbook chapters on AC circuits; any external sources.]

## Common Misconceptions

- **"A 6.5-digit multimeter is accurate to 6.5 digits."** It displays 6.5 digits, but its accuracy specification is typically ± 4-5 digits on the last place. The display precision is not the same as the measurement accuracy.
- **"The oscilloscope is a passive device; it does not load the circuit."** It loads the circuit through its 1 MΩ || 20 pF input. The loading is usually negligible, but at high frequencies or high impedances, it can distort the signal.
- **"50 Hz pickup is harmless because it averages out."** It averages out only if you average synchronously with the 50 Hz. A free-running average does not cancel 50 Hz unless the acquisition time is an integer multiple of 20 ms.
- **"The uncertainty in a derived quantity is the sum of the input uncertainties."** It is the sum in quadrature (square root of the sum of the squares), not the linear sum. The linear sum overestimates the uncertainty.
- **"A lab report is a description of what you did."** It is a description of what you did, what you observed, what you concluded, and how certain you are. The "what you did" is the smallest part.

## Connections

- **Electricity and Magnetism (Sem 2 theory).** The uncertainty analysis is the practical counterpart to the theory: every formula comes with an uncertainty, and the lab's job is to verify that the formula and the data agree within that uncertainty.
- **Statistics (later semesters).** The propagation of uncertainty is a special case of the linearised error propagation in multivariate statistics. The same mathematics underlies least-squares fitting, the chi-squared test, and the bootstrap.
- **Engineering.** Engineering specifications always come with tolerances. The skill of estimating the uncertainty in a measurement, and propagating it through a calculation, is the central skill of experimental engineering.
- **Signal processing.** Signal averaging, lock-in detection, and Fourier filtering are the standard tools for pulling small signals out of noise. The lab's 50 Hz pickup problem is a small-scale version of every noise-limited measurement in physics.

## Quick Check

1. A multimeter on the 10 V range reads 1.0000 V. The accuracy spec is ± (0.005 % of reading + 0.001 % of range). What is the absolute uncertainty?
2. The same multimeter on the 1 V range reads 1.0000 V with the same spec. What is the absolute uncertainty? Which range is more accurate?
3. A scope probe is uncompensated. What does the displayed square wave look like?
4. A signal of 1 mV is contaminated by 50 Hz pickup of 5 mV peak. By what factor does 100× averaging reduce the 50 Hz interference (assuming synchronous averaging)?
5. For z = x y, derive σ_z / z in terms of σ_x / x and σ_y / y.
6. You measure x = 10 ± 0.1 and y = 5 ± 0.1. Compute z = x + y, z = x − y, z = x y, and z = x / y, with uncertainties.
7. A lab report includes a discussion section. What should it contain?
8. Viva question: "Why is the bandwidth of a series RLC resonance R/(2π L) and not R/(2π C)?"
9. Viva question: "If your Q-factor measurement is half the theoretical value, list three possible experimental causes."

## Takeaway

Uncertainty is the lab's most important concept. The instrument's display precision is not the measurement's accuracy; the dominant uncertainty is usually not the least significant digit; the propagation of uncertainties through a calculation is the only honest way to report a derived number. The lab report is the formal record of the measurement, its uncertainty, and the conclusion. The viva is the examiner's way of testing whether you understand the experiment you have done. Read your own data, know what each formula does, anticipate where the systematic errors live, and you will be prepared for every experiment in the programme and for the practical exam at the end of Sem 2.
