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
lessonId: electricity-and-magnetism-lab-m1-l2
lessonName: RC Transients and the Time Constant
lessonNumber: 2
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - electricity-and-magnetism-lab-m1-l1
learningObjectives:
  - Measure the charging and discharging curves of a capacitor through a resistor and extract the time constant τ = RC.
  - Verify the exponential law V(t) = V₀(1 − e^(−t/τ)) for charging and V(t) = V₀ e^(−t/τ) for discharging.
  - Distinguish the time constant from the half-life and use a semi-log plot to extract τ from a noisy trace.
concepts:
  - Capacitance
  - Resistance
  - Time constant
  - RC circuit
  - Charging transient
  - Discharging transient
  - Semi-log plot
  - Exponential decay
tags:
  - physics
  - laboratory
  - em
  - rc
  - transient
  - time-constant
sourceType: authored-courseware
assessmentHints:
  - The time constant is the time to reach 1 − 1/e ≈ 63.2 % of the final value (charging) or 1/e ≈ 36.8 % of the initial value (discharging).
  - A semi-log plot of V against t is a straight line with slope −1/τ for discharging.
  - Capacitors with very high capacitance (electrolytic) have large leakage currents that distort the measurement.
status: in-review
***

# RC Transients and the Time Constant

## Overview

A capacitor and a resistor in series, driven by a voltage step, produce one of the cleanest exponential transients in the lab. Connect a DC source through a switch to a series RC; the voltage across the capacitor rises as V(t) = V₀(1 − e^(−t/τ)) with τ = RC. Open the switch (or short the capacitor through the resistor) and the voltage decays as V(t) = V₀ e^(−t/τ). The time constant τ is the time to reach 1 − 1/e ≈ 63.2 % of the final value on charging, or 1/e ≈ 36.8 % on discharging.

This lesson walks through the apparatus (DC source, switch or function generator, resistor, capacitor, oscilloscope or data logger), the procedure for capturing the transient (single-shot triggering on the oscilloscope, or fast data logging), the data analysis (semi-log plot, linear fit, half-life method), and the diagnostic of common failure modes (bad capacitor, switch bounce, scope probe loading).

## Learning Path

1. **Set the circuit** — DC source (or function generator square wave at low frequency), resistor R (1 kΩ), capacitor C (1 μF), oscilloscope or data logger across the capacitor.
2. **Capture the charging transient** — close the switch; record V(t) from 0 to ~ 5τ.
3. **Capture the discharging transient** — open the source (or short across the source); record V(t) from V₀ down to near zero.
4. **Extract τ** — fit V(t) = V₀(1 − e^(−t/τ)) to the charging data, or V(t) = V₀ e^(−t/τ) to the discharge data, by non-linear least squares or by a semi-log plot.
5. **Compare with RC** — compute RC from the nominal R and C; compare with the measured τ. They should agree within a few per cent (capacitor tolerance is typically 10–20 %).
6. **Repeat for different R and C** — verify τ ∝ R and τ ∝ C.

## Core Explanation

### Theory

A series RC circuit driven by a step voltage V₀ at t = 0 obeys, by Kirchhoff's voltage law,

V₀ = I R + Q / C, with I = dQ/dt.

The solution for the charge on the capacitor is

Q(t) = C V₀ (1 − e^(−t/τ)),   τ = RC.

The voltage across the capacitor is V_C(t) = Q(t) / C = V₀(1 − e^(−t/τ)). The current in the circuit is I(t) = (V₀/R) e^(−t/τ) — a decaying exponential that starts at V₀/R and falls to zero. The voltage across the resistor is V_R(t) = I(t) R = V₀ e^(−t/τ) — a mirror of the capacitor discharge.

At t = τ, the capacitor voltage is V₀(1 − 1/e) ≈ 0.632 V₀. The time to fall to half is t₁/₂ = τ ln 2 ≈ 0.693 τ.

For discharging (source removed, capacitor shorted through the resistor), the equation is

0 = I R + Q / C, with I = dQ/dt,

and the solution is

Q(t) = Q₀ e^(−t/τ),   V_C(t) = V₀ e^(−t/τ).

Same time constant, same exponential shape.

### Apparatus

- DC power supply (0–10 V) or function generator with square wave output (low frequency, ~ 100 Hz, so each half-period is many τ).
- Resistor (1 kΩ, 5 % tolerance).
- Capacitor (1 μF, film or ceramic, low leakage; electrolytic capacitors are too leaky for accurate work).
- Single-pole switch or push-button.
- Oscilloscope (preferred) or computer-based data logger with at least 1 kHz sampling.
- Connecting wires, breadboard.
- Safety glasses.

If using a function generator with a square wave, the circuit sees alternating charge and discharge cycles with period 2 × (chosen half-period). The half-period must be at least 5τ for the capacitor to fully charge or discharge each cycle. Set the function generator to 1/(2 · 5τ) Hz ≈ 1/(10τ) Hz.

### Procedure: Single-Shot Transient

1. Build the circuit on a breadboard: source, switch, R, C in series, scope probe across C.
2. Set the scope to single-shot triggering on the rising edge of the source. Time base ~ 5 ms/div for τ = 1 ms.
3. Open the switch. Set the source to 5 V.
4. Close the switch. The scope captures the transient.
5. Save or photograph the trace.
6. Open the source (replace the source with a short). The capacitor discharges through R. Capture the discharge transient on the falling-edge trigger.

### Procedure: Square-Wave Repetitive

1. Replace the source and switch with a function generator square wave (5 V peak, 0 V baseline, 50 Hz for τ = 1 ms).
2. Set the scope to normal triggering. The trace will be a steady repetitive exponential charge and discharge.
3. Read off the trace at, say, 1 ms intervals: V(t) for charging, V(t) for discharging.
4. Plot on a linear axis to see the shape, then on a semi-log axis (log V against t for discharge) to extract τ.

### Analysis: Semi-Log Plot

For the discharge, V(t) = V₀ e^(−t/τ). Take the natural log:

ln V(t) = ln V₀ − t / τ.

A plot of ln V (y-axis) against t (x-axis) is a straight line with slope −1/τ and intercept ln V₀. Read τ from the slope:

τ = − 1 / slope.

For the charge, V(t) = V₀(1 − e^(−t/τ)). The deviation from V₀ is V₀ − V(t) = V₀ e^(−t/τ), so a semi-log plot of V₀ − V(t) against t is a straight line with slope −1/τ.

### Analysis: Half-Life

The half-life t₁/₂ is the time for V to fall to V₀/2 on discharge, or to rise to V₀/2 on charge. From the exponential, t₁/₂ = τ ln 2. So

τ = t₁/₂ / ln 2 = t₁/₂ / 0.693.

This is a quick check; it is less precise than a full fit, but useful when the data are noisy.

### Apparatus Calibration

The scope probe has its own capacitance (typically 10–20 pF) and resistance (10 MΩ). The 10 MΩ in parallel with a 1 MΩ resistor (or a high-impedance circuit) forms a divider; the 10 MΩ in parallel with a 1 μF capacitor forms a 10 ms time constant — a small correction for fast transients. Use the ×10 probe to minimise loading.

## Key Ideas

- Time constant τ = RC. Dimensionally: [Ω][F] = [s].
- Charging: V(t) = V₀(1 − e^(−t/τ)). At t = τ, V = 0.632 V₀.
- Discharging: V(t) = V₀ e^(−t/τ). At t = τ, V = 0.368 V₀.
- Semi-log plot of V against t (discharge) is a straight line; slope = −1/τ.
- Half-life: t₁/₂ = τ ln 2 ≈ 0.693 τ.

## Worked Examples

### Example 1: Reading the trace

You have a 1 kΩ resistor and a 1 μF capacitor, so τ = 1 ms. You record the discharge voltage at 0.5 ms intervals:

| t (ms) | V (V) |
|-------:|------:|
| 0 | 5.00 |
| 0.5 | 3.16 |
| 1.0 | 2.00 |
| 1.5 | 1.27 |
| 2.0 | 0.80 |
| 2.5 | 0.51 |
| 3.0 | 0.32 |

- Compute ln V: 1.609, 1.151, 0.693, 0.239, −0.223, −0.673, −1.139.
- A linear fit of ln V against t gives slope = (−1.139 − 1.609) / (3.0 − 0) = −2.748 / 3.0 = −0.916 ms⁻¹.
- τ = −1 / slope = 1 / 0.916 = 1.09 ms.
- This is 9 % above the nominal 1 ms — within the tolerance of a 5 % resistor and 10 % capacitor.

### Example 2: Half-life method

From the same data, the half-life is the time for V to fall from 5.00 V to 2.50 V. Reading off the table, this is between 0.5 ms (V = 3.16) and 1.0 ms (V = 2.00). Linear interpolation: t₁/₂ ≈ 0.5 + 0.5 · (3.16 − 2.50) / (3.16 − 2.00) = 0.5 + 0.5 · 0.566 = 0.78 ms.
- τ = t₁/₂ / ln 2 = 0.78 / 0.693 = 1.13 ms.
- Consistent with the semi-log fit.

### Example 3: Linearisation by subtracting the asymptote

For a charging transient V(t) = V₀(1 − e^(−t/τ)), the deviation from the asymptote is V₀ − V(t) = V₀ e^(−t/τ). A semi-log plot of V₀ − V(t) gives a straight line. From a data set, the asymptote V₀ is read at long times (e.g. 5τ or more). If V₀ = 5.00 V and V(t = 1 ms) = 3.16 V, then V₀ − V = 1.84 V; ln(1.84) = 0.610. At t = 2 ms, V = 4.32 V, V₀ − V = 0.68 V, ln(0.68) = −0.386. Slope = (−0.386 − 0.610) / (2 − 1) = −0.996 ms⁻¹; τ = 1.00 ms. Good agreement with the nominal.

## Common Misconceptions

- **"The time constant is the time to fully charge or discharge."** No. The time constant is the time to reach 1 − 1/e ≈ 63.2 % (charge) or 1/e ≈ 36.8 % (discharge). The "full" time is usually taken as 5τ, by which the deviation from asymptote is below 1 %.
- **"τ is a property of the capacitor alone."** τ = RC is a property of the circuit. A small capacitor with a large series resistance has a long time constant; a large capacitor with a small resistance has a short one.
- **"The capacitor charges instantaneously when the switch is closed."** It charges through the resistor. With R = 0 (a short across the source), the charge time is limited only by the source's internal resistance and the parasitic inductance of the wiring — a different regime, with possible resonance.
- **"The semi-log plot of V against t for a charging curve is a straight line."** Only if you plot V₀ − V against t, not V itself. V is not a single exponential; V₀ − V is.
- **"An electrolytic capacitor is just a polarised capacitor with a larger capacitance per volume."** True, but the leakage current is also larger, and the capacitance is rated with a wide tolerance (± 20 % is common). For accurate time-constant measurements, use a film or ceramic capacitor.

## Connections

- **Electricity and Magnetism (Sem 2 theory).** The RC circuit is the simplest example of a first-order linear ODE driven by a step. It introduces the language of transients, time constants, and steady-state responses.
- **Differential Equations (Sem 2).** The equation V₀ = IR + Q/C is a first-order linear ODE for Q(t). The exponential solution is the generic behaviour of any first-order system.
- **Electronics (Sem 2 and later).** RC filters are the building blocks of every analogue circuit: low-pass filters, high-pass filters, integrators, differentiators, sample-and-hold, de-glitchers, etc. The time constant sets the cutoff frequency.
- **Signal processing.** The Fourier transform of an exponential decay is a Lorentzian. The time constant and the bandwidth are reciprocally related: Δf · τ ≈ 1/(2π).
- **Biology and chemistry.** RC-like dynamics appear in pharmacokinetics (drug concentration in the blood), neural integration (the membrane as an RC circuit), and chemical kinetics (first-order reactions). The same exponential law governs all of them.

## Quick Check

1. Define the time constant of an RC circuit. What is its SI unit?
2. For a charging capacitor, what is V(t) at t = τ? At t = 3τ? At t = 5τ?
3. Sketch V(t) for charging and for discharging on the same axes. What is the relation between them?
4. Why does the semi-log plot of V against t (for discharging) give a straight line?
5. The time constant is 2 ms. What is the half-life? What is the 90 % discharge time?
6. A 10 kΩ resistor and a 0.1 μF capacitor are in series. What is τ? If the source is 5 V, what is the capacitor voltage at t = 1 ms?
7. You measure V(t) for a discharging RC and find that V drops by a factor of 10 in 5 ms. What is τ?
8. A student reports τ = 50 ms for a 1 kΩ and 47 μF capacitor. Is this consistent? What tolerance is implied?

## Takeaway

The RC circuit is the lab's introduction to first-order linear dynamics. The exponential is the canonical transient; the time constant is the canonical parameter. The semi-log plot is the canonical analysis. Every first-order system you meet in the programme — thermal cooling, chemical kinetics, signal filters, drug doses — has the same mathematical form. Master the RC transient here, and the rest of the programme is easier.
