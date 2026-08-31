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
lessonId: electricity-and-magnetism-lab-m1-l5
lessonName: RLC Resonance and the Q-factor
lessonNumber: 5
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - electricity-and-magnetism-lab-m1-l4
learningObjectives:
  - Measure the resonance curve of a series RLC circuit and extract the resonant frequency, the bandwidth, and the Q-factor.
  - Verify the relation ω₀ = 1/√(LC) for the resonant angular frequency.
  - Measure the phase difference between the driving voltage and the current at and away from resonance.
concepts:
  - AC circuit
  - Inductive reactance
  - Capacitive reactance
  - Impedance
  - Resonance
  - Q-factor
  - Bandwidth
  - Phase shift
tags:
  - physics
  - laboratory
  - em
  - ac
  - rlc
  - resonance
sourceType: authored-courseware
assessmentHints:
  - The resonant frequency is f₀ = 1/(2π√(LC)); check this with a calculator before sweeping the function generator.
  - The Q-factor is the ratio of the resonant frequency to the bandwidth: Q = f₀ / Δf.
  - At resonance, the voltage across L and C can be much larger than the driving voltage (Q times larger, in fact).
status: in-review
***

# RLC Resonance and the Q-factor

## Overview

Drive a series RLC circuit with a sine wave of variable frequency, and the current amplitude is largest at one specific frequency — the resonant frequency. Below resonance, the circuit is dominated by the capacitor; above, by the inductor. At resonance, the reactances cancel and the impedance is purely resistive, equal to R. The current amplitude at resonance is V/R, and the half-power bandwidth of the resonance is Δf = R / (2π L). The ratio f₀ / Δf is the Q-factor of the circuit, a measure of how sharply the resonance is peaked.

This lesson walks through the apparatus (function generator, R, L, C, oscilloscope), the procedure (sweeping frequency, reading current amplitude from V across R), the analysis (resonance curve, semi-log plot, linear-phase method), and the diagnostic of common failure modes (function generator output impedance, scope probe loading, lossy inductor).

## Learning Path

1. **Set the circuit** — function generator (sine, 1 V peak) → R (10 Ω) → L (10 mH) → C (1 μF) → ground. Scope probe across R for the current (V_R = I R).
2. **Predict the resonance** — compute f₀ = 1/(2π√(LC)) from the rated L and C. For L = 10 mH, C = 1 μF, f₀ ≈ 1.59 kHz.
3. **Sweep the frequency** — from 100 Hz to 10 kHz in 100–200 Hz steps. At each step, record the peak-to-peak voltage across R and the phase difference between V_source and V_R.
4. **Find the resonance** — locate the frequency of maximum V_R. Refine by sweeping in 10 Hz steps around the peak.
5. **Bandwidth** — find the two frequencies f₁, f₂ on either side of f₀ where V_R is 1/√2 of its peak value (the −3 dB points). The bandwidth is Δf = f₂ − f₁.
6. **Q-factor** — Q = f₀ / Δf. Compare with Q = (1/R) √(L/C).

## Core Explanation

### Theory: Impedance of R, L, C

For a sinusoidal drive V(t) = V₀ cos(ω t), the impedances of the three passive elements are:

- Resistor: Z_R = R (real, frequency-independent).
- Inductor: Z_L = i ω L (purely imaginary, positive — "inductive").
- Capacitor: Z_C = 1 / (i ω C) = − i / (ω C) (purely imaginary, negative — "capacitive").

In a series circuit, the impedances add: Z_total = R + i (ω L − 1/(ω C)). The magnitude is

|Z| = √(R² + (ω L − 1/(ω C))²).

The current amplitude is I = V / |Z|.

At resonance, the imaginary part of Z_total is zero, i.e.

ω L = 1 / (ω C)   ⇒   ω₀ = 1 / √(L C).

At ω = ω₀, the impedance is purely R, and the current is V / R — the maximum possible. The voltage across L is I ω L = V (ω L / R) = V · Q, where Q is the quality factor; similarly, V_C = V · Q. So at resonance, V_L and V_C are both Q times larger than the driving voltage. For a high-Q circuit, these voltages can be much larger than the source voltage — a phenomenon called "voltage magnification" or "resonant rise."

### Theory: Bandwidth and Q-Factor

The half-power frequencies f₁ and f₂ are the frequencies at which the power dissipated in R is half the peak power. Since power ∝ I², this corresponds to I being 1/√2 of its peak value. The bandwidth is

Δf = f₂ − f₁ = R / (2π L).

The Q-factor is defined as

Q = f₀ / Δf = ω₀ L / R = (1/R) √(L/C).

High Q means a sharp resonance; low Q means a broad resonance. Q is dimensionless.

### Theory: Phase

The phase of the current relative to the source voltage is

φ = arctan((ω L − 1/(ω C)) / R).

At ω = ω₀, φ = 0 (current in phase with voltage). Below resonance, the circuit is capacitive, and the current leads the voltage (φ > 0, in the convention where leading current is positive phase). Above resonance, the circuit is inductive, and the current lags (φ < 0).

### Apparatus

- Function generator (1 Hz to 1 MHz sine output, low output impedance, 50 Ω)
- Resistor (10 Ω, 5 %)
- Inductor (10 mH, low-loss; air-core or ferrite-core)
- Capacitor (1 μF, film, low-loss)
- Oscilloscope (two channels)
- Connecting wires, breadboard
- Safety glasses

The function generator's 50 Ω output impedance forms a voltage divider with the circuit. If the source is set to "high-Z" mode, the output voltage is the open-circuit voltage; if set to "50 Ω", the loaded voltage is half the open-circuit voltage. The lab manual should specify which mode is in use.

### Procedure

1. Build the series RLC circuit on a breadboard. Use short leads to minimise stray inductance.
2. Set the function generator to 1 V peak sine output, high-Z mode.
3. Set the scope: channel 1 on the source (across the function generator output); channel 2 across R.
4. Sweep the frequency from 100 Hz to 10 kHz in 200 Hz steps. At each step, record:
   - Peak-to-peak voltage on channel 2 (V_R).
   - Time difference Δt between zero crossings of the two channels. The phase is φ = 2π f Δt.
5. Locate the resonance frequency f₀ (where V_R is maximum).
6. Refine the sweep around f₀ in 10 Hz steps.
7. Find the −3 dB points: the two frequencies where V_R = V_R,peak / √2. The bandwidth is Δf = f₂ − f₁.

### Analysis

#### Resonance Curve

Plot V_R (y) against f (x). The curve peaks at f₀. The width at half-maximum is Δf.

#### Q-Factor

Q_measured = f₀ / Δf.
Q_predicted = (1/R) √(L/C) = (1/10) √(0.010 / 10⁻⁶) = (1/10) √(10000) = (1/10) · 100 = 100.

If L and C are accurate to 5 % and R is accurate to 5 %, Q_predicted is accurate to ~ 10 %. The measured Q should agree within ~ 20 %, allowing for losses in the inductor (the dominant source of discrepancy).

#### Phase

Plot φ (y) against f (x). The curve should pass through zero at f = f₀, be positive (current leads) for f < f₀, and negative (current lags) for f > f₀.

A fit of the phase data to φ(f) = arctan((ω L − 1/(ω C))/R) gives L and C as fitting parameters — a check that the rated values are correct.

#### Log-Log Plot (Optional)

A log-log plot of V_R against (f − f₀) far from resonance reveals the asymptotic behaviour. For f ≪ f₀, V_R ∝ f (capacitive regime, current is dominated by C). For f ≫ f₀, V_R ∝ 1/f (inductive regime, current is dominated by L). The two asymptotes intersect at f = f₀, with peak value V / R.

### Error Sources

- **Function generator output impedance.** A 50 Ω source impedance forms a divider with the circuit, reducing the effective drive voltage by a factor of 2. Use the high-Z mode if possible.
- **Inductor losses.** A real inductor has a series resistance; this lowers the Q. Air-core inductors have lower losses than ferrite-core; the rated Q is typically 50–200 for a lab inductor.
- **Stray capacitance and inductance.** Breadboard wiring has a few nH of inductance and a few pF of capacitance per cm. For a 10 mH inductor at 1.6 kHz, the stray L is negligible; for a 10 μH inductor at MHz, the stray L matters.
- **Scope probe loading.** A ×10 probe has 10 MΩ and ~ 10 pF; this loads the circuit slightly but is usually negligible.
- **Source voltage drift.** Some function generators drift in amplitude with frequency. Check the source voltage with the scope at each frequency, or use the high-Z mode and a separate voltmeter.

## Key Ideas

- At resonance, ω L = 1/(ω C), so ω₀ = 1/√(LC).
- The impedance at resonance is R; the current is V/R.
- The bandwidth is Δf = R / (2π L); the Q-factor is Q = f₀ / Δf = (1/R) √(L/C).
- The voltage across L and C at resonance is Q times the source voltage.
- The phase of the current relative to the source is zero at resonance, positive below (capacitive), and negative above (inductive).
- High-Q circuits resonate sharply; low-Q circuits resonate broadly.

## Worked Examples

### Example 1: Resonant frequency

L = 10 mH, C = 1 μF. f₀ = 1 / (2π √(LC)) = 1 / (2π √(10⁻² · 10⁻⁶)) = 1 / (2π · 10⁻⁴) = 1 / (6.283 × 10⁻⁴) ≈ 1592 Hz. Confirm with a calculator or by sweeping the function generator.

### Example 2: Q-factor and bandwidth

R = 10 Ω, L = 10 mH, C = 1 μF. Q = (1/R) √(L/C) = (1/10) · 100 = 100. Bandwidth Δf = f₀ / Q = 1592 / 100 = 15.9 Hz. So the −3 dB points are at f₀ ± 8 Hz, i.e. 1584 and 1600 Hz.

### Example 3: Voltage magnification

At resonance, V_L = I ω L = (V/R) ω L = V · (ω L / R) = V · Q. For V = 1 V, Q = 100, V_L = 100 V. This is the resonant-rise voltage; in a small lab inductor, the insulation can usually handle this, but it is wise to start with a low source voltage and increase.

### Example 4: Phase at off-resonance frequencies

For f = 0.5 f₀ = 800 Hz, ω = 2π · 800 = 5027 rad/s. ω L = 5027 · 0.010 = 50.27 Ω. 1/(ω C) = 1 / (5027 · 10⁻⁶) = 198.9 Ω. Net reactance = 50.27 − 198.9 = −148.6 Ω. Phase φ = arctan(−148.6 / 10) = arctan(−14.86) = −86.1° (the current lags, as expected for f < f₀ in this convention).

For f = 2 f₀ = 3184 Hz, ω = 2π · 3184 = 20000 rad/s. ω L = 200 Ω. 1/(ω C) = 50 Ω. Net reactance = 200 − 50 = 150 Ω. Phase φ = arctan(150/10) = arctan(15) = 86.2° (the current leads, as expected for f > f₀ — the inductor dominates).

## Common Misconceptions

- **"Resonance is when the impedance is maximum."** For a series RLC, resonance is when the impedance is **minimum** (and equal to R). For a parallel RLC, resonance is when the impedance is **maximum**. The two circuits are duals.
- **"At resonance, the current is zero because the inductor and capacitor cancel."** The inductor and capacitor voltages cancel (their sum is zero), but the current through them is not zero — it is at its maximum value, V/R.
- **"Q is a property of the inductor."** Q is a property of the **circuit**, including R. Doubling R halves Q.
- **"A high-Q resonance is good for a bandpass filter."** Depends on the application. For a narrow-band filter (e.g. a radio receiver selecting one station), high Q is good. For a broadband filter (e.g. a music speaker crossover), low Q is good.
- **"At resonance, there is no energy storage in L or C."** Wrong. At resonance, the energy oscillates between L and C at the resonant frequency; the source provides only the energy dissipated in R. The total stored energy is much larger than the energy dissipated per cycle; the ratio is exactly Q.

## Connections

- **Electricity and Magnetism (Sem 2 theory).** The RLC circuit is the canonical example of a second-order linear ODE with a sinusoidal drive. Its resonance is the prototype for every resonant system in physics.
- **Differential Equations (Sem 2).** The equation L d²Q/dt² + R dQ/dt + Q/C = V₀ cos(ω t) is a forced, damped harmonic oscillator. The resonance is the same phenomenon as the mechanical resonance of a mass on a spring with damping.
- **Optics (later).** Optical resonance in a Fabry-Perot cavity or a ring resonator is the same mathematics: a wave bouncing between two reflectors, with constructive interference at the resonant frequencies and destructive interference otherwise. The Q-factor of an optical cavity can exceed 10¹⁰.
- **Engineering.** Radio receivers, television tuners, NMR spectrometers, and atomic clocks all use resonant circuits (or resonant cavities) to select or measure specific frequencies. The Q-factor determines the selectivity.
- **Atomic physics (later).** The natural linewidth of an atomic transition is a resonance with a Q-factor of ~ 10⁷ to 10⁸. The Lorentzian lineshape is the same mathematics as the RLC resonance curve.

## Quick Check

1. What is the resonant frequency of a series RLC with L = 10 mH, C = 1 μF, R = 10 Ω?
2. What is the Q-factor? The bandwidth?
3. At resonance, what is the impedance? The current amplitude? The voltage across L?
4. Sketch the resonance curve V_R against f. What is the asymptotic behaviour far from f₀?
5. Why is the phase zero at resonance, positive below, and negative above?
6. You measure a resonance with f₀ = 1.6 kHz and bandwidth 16 Hz. What is Q?
7. A parallel RLC circuit has the same L, C, and R as the series circuit. What is its resonance frequency? Its Q-factor?
8. A student reports Q = 1000 for a 10 Ω, 10 mH, 1 μF circuit. What could explain this?
9. A function generator has 50 Ω output impedance and is set to 1 V peak. What voltage actually drives the series RLC?

## Takeaway

The RLC series resonance is the lab's introduction to frequency-domain behaviour of circuits. The resonant frequency, the bandwidth, and the Q-factor are the three numbers that characterise every resonant system, from a quartz oscillator to an atomic transition. The voltage magnification (Q times the source voltage) is the dramatic confirmation of the resonance — visible on the scope and the reason resonant circuits are used in radio transmitters. The phase behaviour (current leads below resonance, lags above) is the time-domain signature of the same physics. The mathematics — a second-order linear ODE with a sinusoidal drive — is the same as the mechanical resonance, and the same language will reappear in optics, atomic physics, and quantum mechanics.
