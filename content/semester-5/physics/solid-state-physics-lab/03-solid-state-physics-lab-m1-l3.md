***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: solid-state-physics-lab
courseName: Solid State Physics Lab
moduleId: solid-state-physics-lab-module-1
moduleName: Crystal Structure, Conductivity, and Semiconductors
lessonId: solid-state-physics-lab-m1-l3
lessonName: Hall Effect, Carrier Density, and Mobility
lessonNumber: 3
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - solid-state-physics-lab-m1-l2
learningObjectives:
  - Measure the Hall voltage in a semiconductor sample and determine the sign of the charge carriers.
  - Compute the carrier density and the Hall mobility from the Hall voltage and the resistivity.
  - Distinguish n-type and p-type semiconductors from the sign of the Hall voltage.
concepts:
  - Hall effect
  - Hall voltage
  - Hall coefficient
  - Carrier density
  - Mobility
  - n-type and p-type semiconductors
  - Hall bar geometry
  - van der Pauw method
tags:
  - physics
  - laboratory
  - solid-state
  - hall-effect
  - semiconductor
  - mobility
sourceType: authored-courseware
assessmentHints:
  - Hall voltage: V_H = I B / (n q t), where n is the carrier density, q is the carrier charge, t is the sample thickness.
  - Hall coefficient: R_H = 1 / (n q) (sign of q determines sign of R_H).
  - Mobility: μ = σ / (n q) = R_H / ρ.
status: in-review
***

# Hall Effect, Carrier Density, and Mobility

## Overview

The Hall effect is the generation of a transverse voltage across a current-carrying conductor in a magnetic field. The Lorentz force pushes the charge carriers to one side of the conductor; the resulting charge separation creates a transverse electric field (the Hall field) that balances the magnetic force. The Hall voltage V_H is proportional to the magnetic field B and the current I; the proportionality constant (the Hall coefficient R_H) is related to the carrier density n by R_H = 1 / (n q), where q is the carrier charge.

This lesson covers the apparatus (a Hall bar sample, an electromagnet or a permanent magnet, a constant current source, a voltmeter with high input impedance), the procedure (apply a current, apply a magnetic field, measure the Hall voltage), the analysis (compute the carrier density, the Hall coefficient, and the mobility), and the dominant sources of error (offset voltage, thermomagnetic effects, contact misalignment).

## Learning Path

1. **Set up the Hall bar sample** — a rectangular bar of semiconductor (e.g. Si, Ge, or a III-V compound) with four contacts: two for the current (at the ends) and two for the Hall voltage (on the sides).
2. **Apply a current** (e.g. 1 mA) through the current contacts. Measure the voltage across the current contacts to verify the resistance.
3. **Apply a magnetic field** (e.g. 0.5 T) perpendicular to the sample, using an electromagnet.
4. **Measure the Hall voltage** across the Hall contacts. Reverse the magnetic field and the current to verify the sign and to eliminate offset voltages.
5. **Compute the carrier density, the Hall coefficient, and the mobility.**

## Core Explanation

### Theory: The Hall Effect

A current I flows along a semiconductor bar in the x direction. A magnetic field B is applied in the z direction. The Lorentz force on a charge carrier of charge q and velocity v is

F = q v × B = q v_x B ẑ × ... = q v B ŷ.

The carriers are pushed in the y direction; they accumulate on one side of the bar, creating a transverse electric field E_y. In equilibrium, the electric force balances the magnetic force:

q E_y = q v B   ⇒   E_y = v B.

The current density is J = n q v, so v = J / (n q). The transverse electric field is

E_y = J B / (n q) = R_H J B,

where R_H = 1 / (n q) is the Hall coefficient. The Hall voltage across the bar is

V_H = E_y w = R_H J B w = R_H (I / (w t)) B w = R_H I B / t.

Solving for R_H:

R_H = V_H t / (I B).

The sign of R_H is the sign of q. For electrons (q = − e), R_H is negative; for holes (q = + e), R_H is positive. The sign of the Hall voltage tells you the sign of the charge carriers.

### Theory: Carrier Density and Mobility

From the Hall coefficient, the carrier density is

n = 1 / (|R_H| q).

For n-type silicon with n = 10²¹ m⁻³ (lightly doped), R_H = 1 / (10²¹ · 1.6 × 10⁻¹⁹) = 6.25 × 10⁻³ m³/C. For p-type silicon with p = 10²¹ m⁻³, R_H = + 6.25 × 10⁻³ m³/C.

The mobility is

μ = σ / (n q) = σ · R_H,

where σ is the conductivity. For silicon: μ_n ≈ 0.135 m²/(V·s) (electrons), μ_p ≈ 0.048 m²/(V·s) (holes). The Hall mobility may differ slightly from the drift mobility due to the energy distribution of the carriers, but the difference is small for non-degenerate semiconductors.

### Apparatus

- Hall bar sample: a rectangular bar of semiconductor with four ohmic contacts. Standard geometry: length 10 mm, width 2 mm, thickness 0.5 mm.
- Electromagnet (or permanent magnet) with field up to ~ 1 T, with a pole gap that accommodates the sample.
- Constant current source (0–10 mA, with current reversal switch).
- Voltmeter or nanovoltmeter (high input impedance, 0.1 μV resolution).
- Hall effect switch box (for reversing the current and the field to eliminate offsets).
- Safety glasses.

### Procedure

1. **Mount the Hall bar sample** in the electromagnet. The sample should be centred in the pole gap; the magnetic field is perpendicular to the broad face of the bar.
2. **Connect the current source** to the current contacts. Set the current to 1 mA. Verify the resistance by measuring the voltage across the current contacts.
3. **Connect the voltmeter** to the Hall contacts.
4. **Apply the magnetic field.** Ramp the field to 0.5 T.
5. **Measure the Hall voltage.** For a clean measurement, reverse the current and the field to eliminate offset voltages (the Ettingshausen effect, the Nernst effect, and contact misalignments all contribute to offsets). The average of the four measurements (B+ I+, B+ I−, B− I+, B− I−) is the true Hall voltage.
6. **Repeat** for several values of B (e.g. 0.1, 0.2, 0.3, 0.4, 0.5 T). Verify the linear V_H vs B relation.
7. **Compute** R_H, n, and μ from the measurements.

### Analysis

#### Hall Coefficient

R_H = V_H t / (I B).

For V_H = 1.0 mV, t = 0.5 mm = 5 × 10⁻⁴ m, I = 1 mA = 10⁻³ A, B = 0.5 T:

R_H = 10⁻³ · 5 × 10⁻⁴ / (10⁻³ · 0.5) = 5 × 10⁻⁷ / 5 × 10⁻⁴ = 10⁻³ m³/C.

#### Carrier Density

n = 1 / (|R_H| q) = 1 / (10⁻³ · 1.6 × 10⁻¹⁹) = 6.25 × 10²¹ m⁻³.

This is a heavily-doped semiconductor (10²¹ m⁻³ is about 1 ppm of the atomic density of silicon).

#### Mobility

σ = 1 / ρ. For a Hall bar with R = 100 Ω, length 10 mm, cross-section 1 mm²:

ρ = R · A / L = 100 · 10⁻⁶ / 0.01 = 0.01 Ω·m.

σ = 100 S/m.

μ = σ · |R_H| = 100 · 10⁻³ = 0.1 m²/(V·s).

This is consistent with n-type silicon with a moderate doping level.

### Sources of Error

- **Offset voltage.** A voltage offset at the Hall contacts (from contact misalignment, the Ettingshausen effect, the Nernst effect) can dominate the signal. The offset is eliminated by averaging over four measurements with B and I reversed.
- **Contact resistance.** The contacts must be ohmic (linear I-V); a non-ohmic contact has a rectifying behaviour that adds to the offset. Use alloyed or implanted contacts for ohmic behaviour.
- **Sample geometry.** The Hall bar geometry must be such that the Hall contacts are exactly on the sides (perpendicular to the current). A misalignment reduces the Hall voltage by a geometric factor.
- **Temperature.** The Hall voltage depends on the temperature (through the carrier density and mobility). Measure at a known temperature, or in a temperature-controlled environment.
- **Self-heating.** The current through the sample heats it, changing the carrier density. Use a small current and a pulsed measurement if necessary.

## Key Ideas

- Hall voltage: V_H = I B / (n q t). Linear in B and I.
- Hall coefficient: R_H = 1 / (n q). Sign indicates sign of charge carriers.
- n-type: R_H < 0 (electrons). p-type: R_H > 0 (holes).
- Mobility: μ = σ / (n q) = R_H / ρ.
- The Hall effect is the standard way to measure carrier density and mobility in semiconductors.

## Worked Examples

### Example 1: n-type silicon

An n-type silicon Hall bar (t = 0.5 mm) is measured with I = 1 mA and B = 0.5 T. The Hall voltage is V_H = − 1.0 mV (negative sign: electrons).

R_H = V_H t / (I B) = − 10⁻³ · 5 × 10⁻⁴ / (10⁻³ · 0.5) = − 10⁻³ m³/C.

n = 1 / (|R_H| e) = 1 / (10⁻³ · 1.6 × 10⁻¹⁹) = 6.25 × 10²¹ m⁻³.

For comparison, the atomic density of silicon is 5 × 10²⁸ m⁻³. The doping level is 6.25 × 10²¹ / 5 × 10²⁸ = 1.25 × 10⁻⁷ = 0.125 ppm. A lightly-doped n-type silicon.

The resistivity (from a four-probe measurement) is ρ = 0.01 Ω·m.

μ = R_H / ρ = 10⁻³ / 10⁻² = 0.1 m²/(V·s) = 1000 cm²/(V·s).

This is a typical mobility for n-type silicon (1350 cm²/(V·s) for pure silicon, less for doped silicon).

### Example 2: p-type germanium

A p-type germanium Hall bar (t = 1.0 mm) is measured with I = 5 mA and B = 0.3 T. The Hall voltage is V_H = + 0.5 mV (positive sign: holes).

R_H = 0.5 × 10⁻³ · 10⁻³ / (5 × 10⁻³ · 0.3) = 5 × 10⁻⁷ / 1.5 × 10⁻³ = 3.33 × 10⁻⁴ m³/C.

p = 1 / (R_H e) = 1 / (3.33 × 10⁻⁴ · 1.6 × 10⁻¹⁹) = 1.88 × 10²² m⁻³.

This is a heavily-doped p-type germanium.

### Example 3: Two-carrier semiconductor

For a semiconductor with both electrons and holes (e.g. an intrinsic semiconductor near room temperature), the Hall coefficient is

R_H = (p μ_h² − n μ_e²) / (e (p μ_h + n μ_e)²).

For an intrinsic semiconductor (n = p = n_i), the sign of R_H is the sign of (μ_h² − μ_e²), which is positive if μ_h > μ_e (i.e. holes more mobile than electrons) and negative if μ_e > μ_h. For most semiconductors, μ_e > μ_h, so R_H is negative even though both carriers are present.

## Common Misconceptions

- **"The Hall effect is only for semiconductors."** It works for any conductor: metals, semiconductors, semimetals, even some conducting polymers. The Hall voltage is small for metals (because n is large), but it is measurable.
- **"The sign of the Hall voltage is the sign of the charge."** The sign of the Hall voltage is the sign of the majority carrier. For n-type, the sign is negative (electrons); for p-type, the sign is positive (holes).
- **"The Hall coefficient is always 1 / (n q)."** This is the simple Drude formula. For real materials, the Hall coefficient can differ by a factor (the Hall factor r_H, which is between 1 and 2 for most semiconductors) due to the energy distribution of the carriers.
- **"The mobility is independent of the magnetic field."** At high magnetic fields (when ω_c τ ≫ 1, where ω_c is the cyclotron frequency and τ is the scattering time), the Hall coefficient and the mobility depend on B. This is the regime of quantum Hall effect and Shubnikov-de Haas oscillations.
- **"The Hall effect is the same as the magnetoresistance."** The Hall effect is a transverse voltage (perpendicular to the current); the magnetoresistance is a change in the longitudinal voltage (parallel to the current). Both are caused by the magnetic field, but they are different effects.

## Connections

- **Solid State Physics (Sem 5 theory).** The Hall effect is one of the most important experimental tools in solid-state physics. It gives the carrier density, the carrier sign, and the mobility — three of the central parameters of any semiconductor.
- **Semiconductor physics.** The Hall effect is the standard way to characterise a semiconductor sample. Combined with a four-probe resistivity measurement, it gives the complete picture: n (or p), μ, σ.
- **Engineering.** Hall effect sensors are used as magnetic field sensors, position sensors, current sensors, and speed sensors. The same physical effect, applied in a different geometry, gives a practical device.
- **Astronomy (Sem 5/6).** The Hall effect is used in plasma diagnostics. The Hall voltage in a plasma gives the magnetic field strength; the Hall current is the basis of the Hall thruster, a type of electric propulsion used in spacecraft.
- **Quantum Hall effect.** At low temperatures and high magnetic fields, the Hall resistance is quantised: R_xy = h / (n e²), where n is an integer (integer quantum Hall effect) or a fraction (fractional quantum Hall effect). This is the basis of the modern resistance standard.

## Quick Check

1. State the Hall voltage formula. Define each symbol.
2. What is the sign of the Hall voltage for an n-type semiconductor? For a p-type?
3. A Hall bar has t = 1 mm, I = 5 mA, B = 0.5 T. The Hall voltage is 1 mV. What is R_H? n?
4. What is the mobility? How is it related to R_H?
5. Why is the Hall voltage measured with the current and field reversed?
6. What is the Ettingshausen effect?
7. A student reports R_H = + 10⁻⁴ m³/C for an n-type sample. What is wrong?
8. At what magnetic field does the Hall measurement become non-trivial? (Hint: ω_c τ.)

## Takeaway

The Hall effect is the lab's standard for measuring carrier density and mobility in semiconductors. The Hall voltage, the Hall coefficient, and the mobility are the three central concepts. The lab's discipline — careful sample preparation, accurate current and field measurements, proper offset elimination — is the same discipline that runs through every Hall effect measurement in solid-state physics. The sign of the Hall voltage tells you the sign of the charge carriers; the magnitude gives the carrier density; the ratio to the resistivity gives the mobility. The same physics, applied to a different geometry, gives the Hall effect sensor — a ubiquitous device in modern electronics. At low temperatures and high fields, the Hall effect becomes quantised, giving the most precise resistance standard known.
