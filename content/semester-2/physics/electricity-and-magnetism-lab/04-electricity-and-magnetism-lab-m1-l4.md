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
lessonId: electricity-and-magnetism-lab-m1-l4
lessonName: Electromagnetic Induction and Faraday's Law
lessonNumber: 4
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - electricity-and-magnetism-lab-m1-l3
learningObjectives:
  - Verify Faraday's law of induction by measuring the EMF produced by a changing magnetic flux.
  - Distinguish the motional EMF (a conductor moving in a field) from the transformer EMF (a stationary loop in a changing field).
  - Demonstrate Lenz's law by showing that the induced current opposes the change in flux.
concepts:
  - Magnetic flux
  - Faraday's law
  - Lenz's law
  - Motional EMF
  - Transformer EMF
  - Inductance
  - Self-induction
  - Mutual induction
tags:
  - physics
  - laboratory
  - em
  - induction
  - faraday
  - lenz
sourceType: authored-courseware
assessmentHints:
  - The induced EMF is proportional to dΦ/dt, not to Φ itself.
  - Lenz's law gives the sign: the induced current creates a B field that opposes the change in flux.
  - The motional EMF (vBL) and the transformer EMF (−dΦ/dt) are equivalent — they are the same physical law in different reference frames.
status: in-review
***

# Electromagnetic Induction and Faraday's Law

## Overview

In 1831, Michael Faraday discovered that a changing magnetic flux through a loop induces an EMF in the loop. The EMF is, in modern notation,

ε = − dΦ / dt,

where Φ = ∫ B · dA is the magnetic flux through the loop. The minus sign is Lenz's law: the induced current flows in the direction that opposes the change in flux. This is the operating principle of every generator, transformer, and induction motor on Earth.

This lesson walks through three experiments that together cover Faraday's law in its full form. First, the motional EMF: a straight conductor moving through a magnetic field generates an EMF ε = B L v. Second, the transformer EMF: a stationary loop in a changing field (produced by an AC-driven primary) generates an EMF ε = −N dΦ/dt. Third, self-induction: a coil with current changing in time produces a back-EMF that opposes the change. The same physical law underlies all three, in different geometries.

## Learning Path

1. **Motional EMF** — connect a straight conductor to a sensitive voltmeter; move it through a magnetic field; record the EMF as a function of velocity and field strength.
2. **Transformer EMF** — drive a primary coil with a function generator; measure the EMF induced in a nearby secondary coil; vary the frequency and amplitude.
3. **Lenz's law demonstration** — drop a magnet through a conducting tube; the falling magnet reaches a terminal velocity due to the induced current.
4. **Self-induction** — connect an inductor in series with a resistor; apply a square wave; measure the time constant of the LR circuit.
5. **Analyse** — compare the measured EMFs with the theoretical predictions; verify the proportionalities and signs.

## Core Explanation

### Theory: Faraday's Law

The magnetic flux through a loop is

Φ = ∫_A B · dA.

If the loop has N turns, the flux linkage is N Φ, and the induced EMF is

ε = − d(N Φ) / dt = − N dΦ / dt.

The minus sign is Lenz's law: the induced EMF drives a current whose magnetic field opposes the change in flux.

### Motional EMF

A straight conductor of length L moving with velocity v perpendicular to a uniform field B (and perpendicular to itself) contains charges that experience a magnetic force q v × B. This force pushes the charges along the conductor, generating an EMF

ε = B L v.

If the conductor is part of a closed circuit, the EMF drives a current. The power delivered to the circuit is P = ε I = B L v I, which is also F · v (the magnetic force on the current times the velocity of the conductor) — a satisfying energy-consistency check.

### Transformer EMF

A stationary loop in a changing magnetic field (produced by an AC-driven primary coil) experiences an EMF

ε = − N dΦ / dt.

If the primary produces a sinusoidal flux Φ(t) = Φ₀ cos(ω t), the secondary EMF is

ε(t) = N Φ₀ ω sin(ω t).

The amplitude is N Φ₀ ω, scaling linearly with frequency. The factor N Φ₀ is the mutual inductance M of the two coils: ε_secondary = M dI_primary / dt.

### Lenz's Law: A Qualitative Demonstration

Drop a small but strong magnet (a neodymium disk) through a vertical copper tube. The magnet falls slowly, reaching a terminal velocity of a few cm/s, instead of accelerating under gravity. The reason: as the magnet falls, the flux through any horizontal loop of the tube changes, inducing a current in the tube. By Lenz's law, this current produces a B field that opposes the change, i.e. it opposes the magnet's motion. The induced current dissipates energy as I²R heat in the tube; this energy comes from the gravitational PE of the falling magnet. The terminal velocity is set by the balance between gravity and the magnetic drag.

### Self-Induction and the LR Circuit

A coil of inductance L carrying a current I stores energy in its magnetic field. If the current changes, the coil generates a back-EMF ε = − L dI / dt that opposes the change. In a series LR circuit driven by a step voltage V₀, the equation is

V₀ = I R + L dI / dt,

with the solution

I(t) = (V₀ / R) (1 − e^(−t/τ_L)),   τ_L = L / R.

The time constant τ_L is the analogue of the RC time constant. A square wave from a function generator drives alternating up and down transients.

### Apparatus

- Permanent bar magnet or electromagnet (for the motional EMF)
- Straight conductor (rigid copper rod) mounted on a low-friction cart, with a way to push it at known velocity (e.g. attach to a falling mass via a string over a pulley)
- Sensitive voltmeter or amplifier (the motional EMF is small: ~ mV for v = 1 m/s in B = 0.1 T over L = 1 cm)
- Primary and secondary coils (for transformer EMF), with a soft-iron core to enhance coupling
- Function generator (1 Hz to 10 kHz)
- Oscilloscope
- Inductor (e.g. 100 mH) and resistor (1 kΩ) for the LR transient
- Copper tube (~ 50 cm long, 1.5 cm diameter) and a neodymium magnet for the Lenz's law demonstration
- Safety glasses

### Procedure: Motional EMF

1. Set up a uniform magnetic field between the poles of a magnet (or an electromagnet).
2. Mount a straight horizontal conductor of length L = 5 cm in the field, perpendicular to B. Connect the conductor to a sensitive voltmeter.
3. Move the conductor through the field at a known velocity v (e.g. by attaching it to a falling mass; the velocity is constant if the cart is on a horizontal low-friction track and the mass is hung over a pulley with a string).
4. Read the voltmeter. The reading is the motional EMF, ε = B L v.
5. Repeat for several velocities. Plot ε (y) against v (x); the slope is B L, giving B = slope / L.
6. Reverse the direction of motion; the sign of the EMF reverses. Reverse the direction of B; the sign reverses again.

### Procedure: Transformer EMF

1. Set up the primary and secondary coils on a common soft-iron core (a U-core with a closing bar).
2. Drive the primary with a function generator sine wave (1 V peak, 1 kHz).
3. Measure the secondary voltage with an oscilloscope.
4. Sweep the frequency from 100 Hz to 10 kHz. The secondary voltage should scale linearly with frequency.
5. Reverse the connections of one coil. The secondary voltage reverses sign.

### Procedure: Lenz's Law Demonstration

1. Hold the copper tube vertically.
2. Drop the neodymium magnet through the tube. Time its fall with a stopwatch.
3. Compare with a non-magnetic object (e.g. a steel ball of the same mass) — the magnet falls much more slowly.
4. Optional: cut a thin slit along the length of the tube. The magnet now falls almost as fast as a non-magnetic object, because the induced current cannot flow across the slit.

### Procedure: LR Transient

1. Build a series LR circuit on a breadboard: function generator (square wave, 0–5 V, 100 Hz) → L (100 mH) → R (1 kΩ) → ground. Scope probe across R.
2. Set the scope to normal triggering. The trace shows the current waveform (since V_R = I R, the voltage across R is proportional to the current).
3. Read off the time constant τ_L by finding the time for the current to reach 1 − 1/e ≈ 63 % of the asymptote on the rising edge.
4. Compute L = τ_L R. Compare with the rated value of the inductor.

### Analysis

#### Motional EMF

A linear fit to ε (y) against v (x) gives slope = B L. With L measured directly, B = slope / L. Compare with the value measured by the Hall probe (from L3) or with the rated value of the magnet.

#### Transformer EMF

A linear fit of secondary voltage amplitude (y) against frequency (x) gives slope = N Φ₀ / (peak primary current) · (primary current / V_primary) — the relevant quantity is the mutual inductance M. The slope divided by the primary voltage gives M / L_primary, or similar; the comparison with theory is best done by computing the expected mutual inductance from the geometry and turns.

#### LR Time Constant

τ_L = L / R. With R known, L = τ_L R. The inductor's rated value is typically within ± 10 %; the measured value should agree within that.

### Error Sources

- **Velocity measurement in the motional EMF.** A falling mass reaches terminal velocity quickly, but the cart may have friction. Use a low-friction cart and a light string.
- **Voltmeter loading.** A high-impedance voltmeter is essential for measuring small EMFs; an ordinary multimeter may draw enough current to load the circuit and reduce the EMF.
- **Coil coupling in the transformer.** The mutual inductance M depends on the geometry; if the secondary is not coaxial with the primary, M is reduced. Use a soft-iron core to channel the flux.
- **Residual inductance and resistance in the LR circuit.** The resistor has a small parasitic inductance; the inductor has a small parasitic resistance. At the frequencies used, these are usually negligible but check with the scope.

## Key Ideas

- Faraday's law: ε = − d(N Φ) / dt. The induced EMF is proportional to the rate of change of flux.
- Motional EMF: ε = B L v for a straight conductor moving perpendicular to B.
- Transformer EMF: ε = M dI / dt, where M is the mutual inductance.
- Lenz's law: the induced current flows in the direction that opposes the change in flux. The mechanical work done against this opposing force is the source of the electrical energy.
- Self-induction: a coil with changing current produces a back-EMF ε = − L dI / dt.
- LR circuit time constant: τ_L = L / R.

## Worked Examples

### Example 1: Motional EMF

You move a 5.0 cm conductor at 0.50 m/s through a uniform field of 0.10 T. The voltmeter reads 2.5 mV.

- Predicted: ε = B L v = 0.10 · 0.05 · 0.50 = 2.5 × 10⁻³ V = 2.5 mV.
- Agreement is exact in this idealised example. In a real lab, the reading is within 5–10 % of this.

### Example 2: Transformer EMF

The primary coil has 200 turns; the secondary has 400 turns. The primary is driven with 1 V peak at 1 kHz. The primary current is small; the flux in the core is approximately proportional to the primary voltage divided by the frequency: Φ₀ ∝ V_primary / (N_primary ω). The secondary voltage is

V_secondary = (N_secondary / N_primary) · V_primary · (some factor depending on coupling)

For an ideal transformer, V_secondary = (N_s / N_p) V_primary = (400/200) · 1 V = 2 V. The measured secondary voltage is 1.85 V, about 8 % below the ideal, indicating that the coupling is not perfect (some flux leaks out of the core).

### Example 3: Lenz's Law

A neodymium magnet (mass 5 g) falls through a 50 cm copper tube in 4.2 s. Its terminal velocity is roughly v_t ≈ 0.50 m / 4.2 s ≈ 0.12 m/s. The average downward force is mg = 0.005 · 9.8 = 0.049 N. The magnetic drag force is therefore ~ 0.049 N at v = 0.12 m/s. The power dissipated is F · v = 0.049 · 0.12 = 5.9 mW — a small but measurable amount of heat in the tube walls.

### Example 4: LR Transient

A 100 mH inductor in series with a 1 kΩ resistor is driven by a 5 V square wave. The measured time constant from the scope is τ_L = 0.10 ms. The inferred inductance is L = τ_L · R = 0.10 × 10⁻³ · 1000 = 0.10 H = 100 mH. Agreement with the rated value is exact in this idealised example.

## Common Misconceptions

- **"The induced EMF depends on the magnetic field, not on its rate of change."** It depends on the rate of change. A steady field through a steady loop produces zero EMF, regardless of how strong the field is.
- **"Lenz's law says the induced current opposes the magnetic field."** It opposes the **change** in flux, not the field itself. If the flux is increasing, the induced current creates a field opposing the increase; if the flux is decreasing, the induced current creates a field supporting the decrease.
- **"A transformer works because of motion."** No. A transformer is stationary; the EMF is induced by the changing flux, not by physical motion of the conductors. The same Faraday's law covers both.
- **"The faster the magnet falls, the larger the EMF, so the larger the current, so the larger the drag."** All three are true. The terminal velocity is reached when the increasing drag balances gravity. The terminal velocity depends on the magnet strength, the tube conductivity, and the geometry; it does not depend on the height of the fall.
- **"The motional EMF and the transformer EMF are different laws."** They are the same law (Faraday's law) in different reference frames. The motional EMF is the EMF seen by an observer in the lab frame; the transformer EMF is the EMF seen by an observer moving with the loop. The total EMF is Lorentz-invariant.

## Connections

- **Electricity and Magnetism (Sem 2 theory).** Faraday's law is the third of the four Maxwell equations (in integral form). Together with Ampère's law (with Maxwell's correction), Gauss's law, and the absence of magnetic monopoles, it gives the complete classical theory of electromagnetism.
- **Engineering.** Every electrical generator, motor, and transformer on Earth operates on Faraday's law. The motional EMF is the generator; the transformer EMF is the transformer; the Lorentz force on a current in a field is the motor.
- **Astrophysics (Sem 5/6).** The solar dynamo, which produces the Sun's magnetic field, is governed by induction: differential rotation in the Sun stretches and twists the field lines, generating new flux. The Earth's magnetic field, similarly, is maintained by fluid motion in the outer core.
- **Quantum mechanics (later).** The quantum Hall effect and the Aharonov-Bohm effect are quantum manifestations of electromagnetic induction; the classical Faraday's law is the low-temperature, large-system limit.

## Quick Check

1. State Faraday's law in words and in symbols. What does the minus sign mean?
2. A straight conductor of length 10 cm moves at 2 m/s through a field of 0.1 T perpendicular to itself. What is the motional EMF?
3. A 100-turn coil is in a magnetic field that increases at 0.05 T/s. The coil area is 10 cm². What is the induced EMF?
4. A transformer has 100 primary turns and 500 secondary turns. The primary is driven with 220 V at 50 Hz. What is the secondary voltage (ideal)?
5. Why does dropping a magnet through a copper tube produce a terminal velocity, but dropping a non-magnetic object does not?
6. A 50 mH inductor in series with a 100 Ω resistor is driven by a square wave. What is the time constant? What is the current 0.5 ms after the leading edge?
7. You observe that reversing the primary connections of a transformer reverses the secondary voltage. What law is this?
8. A student reports that an induced EMF is observed in a stationary loop in a steady magnetic field. Identify the error in the setup.

## Takeaway

Faraday's law is the bridge from electricity to magnetism. The motional EMF and the transformer EMF are the two faces of the same law, and Lenz's law tells you the sign. The lab's three experiments — moving conductor, transformer, LR transient — are the three classical ways to demonstrate the law, and they are the building blocks of every electrical machine you will ever use. From here, the programme moves into alternating-current circuits, where Faraday's law applied to inductors and transformers gives you the impedance, the resonance, and the power transfer that makes the modern grid work.
