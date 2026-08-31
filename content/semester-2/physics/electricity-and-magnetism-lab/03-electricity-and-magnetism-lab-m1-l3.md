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
lessonId: electricity-and-magnetism-lab-m1-l3
lessonName: Magnetic Force on a Current-Carrying Conductor
lessonNumber: 3
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - electricity-and-magnetism-lab-m1-l2
learningObjectives:
  - Measure the magnetic force on a current-carrying straight conductor placed in a uniform magnetic field.
  - Verify the relation F = B I L sin θ and extract the magnitude of the magnetic field B from the force measurement.
  - Map the magnetic field along the axis of a solenoid and verify the theoretical formula B = μ₀ n I at the centre.
concepts:
  - Lorentz force on a current
  - Magnetic flux density
  - Current balance
  - Solenoid field
  - Helmholtz coils
  - Right-hand rule
tags:
  - physics
  - laboratory
  - em
  - magnetic-force
  - current-balance
  - solenoid
sourceType: authored-courseware
assessmentHints:
  - The current balance is sensitive to alignment: the conductor must be perpendicular to B.
  - The solenoid field is uniform only in the central region; near the ends it falls off.
  - The Earth's magnetic field (~ 50 μT) is a small but non-zero background.
status: in-review
***

# Magnetic Force on a Current-Carrying Conductor

## Overview

A current-carrying wire in a magnetic field experiences a force. This is the Lorentz force on a moving charge, integrated over the current: F = ∫ I dL × B. For a straight wire of length L in a uniform field B perpendicular to the wire, the force has magnitude F = B I L. Measure F, I, and L, and you have measured B. This is the principle of the current balance, the lab's classic way to determine the strength of a magnetic field.

In this lesson you will set up a current balance: a straight horizontal conductor suspended between the poles of a strong permanent magnet (or a calibrated electromagnet), connected to a DC source through a current regulator. You will measure the force on the conductor as a function of current, length, and angle. You will also map the axial field of a solenoid using a Hall probe (or a search coil) and verify the theoretical formula B = μ₀ n I at the centre, where n is the turns per unit length.

## Learning Path

1. **Set the current balance** — align the conductor perpendicular to the magnetic field between the poles of the magnet; connect a DC source with a current regulator and an ammeter.
2. **Calibrate the balance** — without current, zero the balance; with a known mass on the conductor's pan, calibrate the displacement-vs-force response.
3. **Measure F vs I** — for fixed L, vary the current from 0 to the maximum rated value; record the force at each step.
4. **Measure F vs L** — for fixed I, vary the effective length of the conductor in the field (by sliding the conductor or by using conductors of different lengths).
5. **Measure F vs θ** — for fixed I and L, rotate the conductor relative to the field; verify F = B I L sin θ.
6. **Solenoid field map** — replace the magnet with a solenoid; use a Hall probe or a search coil to measure B along the axis; verify B = μ₀ n I at the centre.

## Core Explanation

### Theory: Force on a Current Element

A current element I dL in a magnetic field B experiences a force

dF = I dL × B.

For a straight conductor of length L in a uniform field B, the force on the conductor is

F = I L × B.

If the conductor is perpendicular to B, |F| = B I L. If the conductor makes an angle θ with the perpendicular to B, |F| = B I L sin θ.

The direction of F is given by the right-hand rule: point the fingers in the direction of I, curl them toward B, and the thumb points in the direction of F.

### Theory: Solenoid Field

A long solenoid with n turns per unit length carrying current I produces a magnetic field that is uniform inside and zero outside (in the idealised limit). The field inside is

B = μ₀ n I,

where μ₀ = 4π × 10⁻⁷ T·m/A is the permeability of free space. The direction is along the axis, given by the right-hand rule applied to the winding.

In a real solenoid of finite length, the field at the centre is close to μ₀ n I but reduced by a geometric factor that depends on the length-to-radius ratio. Near the ends, the field falls to roughly half the central value. The exact formula for a finite solenoid involves elliptic integrals; the lab uses the central-value formula as the benchmark and notes the fall-off near the ends.

### Apparatus: Current Balance

- Permanent magnet or electromagnet with flat pole pieces (field ~ 0.1–0.5 T, uniform in a 1–2 cm gap).
- Straight horizontal conductor (rigid copper rod or rectangular loop) suspended from a balance arm, with the section between the magnet poles being the "active length" L.
- Balance pan for adding small masses, or a linear displacement transducer.
- DC source (0–10 V) with current regulator (large series resistor + potentiometer) to set the current.
- Ammeter (0–5 A, ± 1 %).
- Connecting wires.
- Safety glasses.

The current balance is delicate. The conductor must be perpendicular to B, and the balance must be level. The Earth's magnetic field (B_Earth ≈ 50 μT) is a small background but not negligible compared to the magnet's 0.1 T at the 0.5 % level.

### Apparatus: Solenoid Field Mapping

- Solenoid (e.g. 1000 turns, length 30 cm, radius 2 cm, with axial mounting for a Hall probe or search coil).
- Hall probe or search coil + fluxmeter.
- DC source (0–5 A) and ammeter.
- Optical or mechanical rail to position the probe along the axis.
- Safety glasses.

### Procedure: Current Balance

1. Set the magnet on a stable bench; ensure the pole pieces are parallel and the gap is uniform.
2. Suspend the conductor from the balance arm. The active length L is the part of the conductor inside the gap.
3. Zero the balance. Add a known mass (e.g. 10 mg) to the pan; record the displacement of the balance arm. This calibrates displacement ↔ force: 10 mg corresponds to ~ 0.098 mN.
4. Connect the DC source to the conductor through the current regulator and ammeter. Set the current to zero. Confirm the balance is still zeroed.
5. Increase the current in 0.5 A steps from 0 to 5 A. Record the displacement at each step; convert to force.
6. Plot F (y) against I (x). The slope is B L, so B = slope / L.
7. Repeat for two other values of L (different conductors or different positions in the gap).
8. Repeat for at least three angles: θ = 90° (perpendicular), 60°, and 30°. Plot F / (B I L) against sin θ; the slope should be 1.

### Procedure: Solenoid Field Map

1. Set up the solenoid on the bench, with the Hall probe mounted on a sliding carriage along the axis.
2. Set the current to 2 A (or the rated maximum). Record the Hall probe reading at the centre of the solenoid.
3. Slide the probe along the axis in 2 cm steps from one end to the other. Record B at each position.
4. Compute n = N / L (total turns divided by length). Compute μ₀ n I. Compare with the measured B at the centre.
5. Plot B (y) against position (x). The curve should be flat in the middle and fall to roughly half at the ends.

### Analysis

#### From F vs I

A linear fit to F vs I gives slope = B L. With L measured directly (vernier calipers on the active length), B = slope / L.

#### From F vs L

For fixed I, plot F (y) against L (x). The slope is B I. With I measured, B = slope / I.

#### From F vs θ

Plot F / (B I L) (y) against sin θ (x). The slope should be 1.

#### From Solenoid Field Map

The central B should match μ₀ n I to within 5–10 % (depending on the solenoid's actual length-to-radius ratio). The fall-off near the ends should be visible.

### Error Sources

- **Calibration of the balance** is the dominant error. Use the largest mass that gives a reliable reading, and use the same balance for all measurements.
- **Conductor alignment.** If the conductor is not perpendicular to B, sin θ < 1, and the inferred B is too large. Verify alignment with a set square.
- **Field non-uniformity.** A real magnet has fringing at the edges; the field at the centre of the gap is not exactly equal to the field at the edges where the active length is. Use a small active length in a region of high uniformity.
- **Heating.** A current of 5 A in a thin conductor produces ohmic heating; the resistance drifts. Take readings quickly, and let the conductor cool between sweeps.
- **Earth's field.** The conductor is also subject to the Earth's magnetic field. The net force has a contribution ~ L I B_Earth, which is ~ 0.5 % of the force from a 0.1 T magnet. For a careful lab, rotate the apparatus to cancel the Earth's field component (this is a refinement, not usually required at Sem 2 level).

## Key Ideas

- F = I L × B for a straight conductor in a uniform field.
- |F| = B I L sin θ, with θ the angle between the conductor and the perpendicular to B.
- The direction of F is given by the right-hand rule.
- A solenoid produces a uniform axial field B = μ₀ n I in the central region (long-solenoid limit).
- The current balance is a direct mechanical measurement of the magnetic force.
- A Hall probe is the standard tool for mapping weak magnetic fields; a search coil + fluxmeter is used for stronger fields and AC fields.

## Worked Examples

### Example 1: Force vs current

You have a current balance with a conductor of active length L = 5.00 cm in a uniform field. You record the force at several currents:

| I (A) | F (mN) |
|------:|-------:|
| 0.0 | 0.0 |
| 1.0 | 4.9 |
| 2.0 | 9.8 |
| 3.0 | 14.8 |
| 4.0 | 19.7 |
| 5.0 | 24.6 |

- A linear fit gives slope = 4.92 mN/A.
- B = slope / L = 4.92 × 10⁻³ N/A / 0.05 m = 0.0984 T.
- Reported: B = 0.098 T, or ~ 0.1 T. This is consistent with a typical permanent-magnet lab magnet.

### Example 2: Field of a solenoid

A solenoid of length 30 cm has 1200 turns, carrying I = 2.0 A.

- n = 1200 / 0.30 m = 4000 turns/m.
- B_central = μ₀ n I = (4π × 10⁻⁷) · 4000 · 2.0 = (1.2566 × 10⁻⁶) · 8000 = 1.005 × 10⁻² T = 10.05 mT.
- A Hall probe at the centre reads 9.7 mT. The 3 % shortfall is consistent with the finite length-to-radius ratio (L/R = 30/2 = 15, which is at the boundary of the "long solenoid" approximation).
- At a position 5 cm from the centre, the Hall probe reads 9.5 mT — only 2 % below the central value, indicating that the uniform region extends well into the central third of the solenoid.
- At a position 2 cm from the end, the reading is 6.8 mT — about 68 % of the central value, as expected for the fall-off near the end.

### Example 3: Force vs angle

You measure the force on a conductor of L = 5 cm carrying I = 3 A in a field of B = 0.1 T, as a function of the angle θ between the conductor and the field direction:

| θ (degrees) | F (mN) | sin θ |
|------------:|-------:|------:|
| 90 | 15.0 | 1.000 |
| 60 | 13.0 | 0.866 |
| 45 | 10.6 | 0.707 |
| 30 | 7.5 | 0.500 |
| 0 | 0.0 | 0.000 |

- A plot of F (y) against sin θ (x) should be a straight line through the origin with slope B I L = 0.1 · 3 · 0.05 = 0.015 N = 15 mN. The data agree.

## Common Misconceptions

- **"The force on a stationary charge in a magnetic field is zero, and the force on a current is also zero unless the conductor moves."** The force on a current is non-zero even when the conductor is stationary. The force is on the moving charges inside the conductor, which are moving even when the conductor as a whole is at rest.
- **"F = B I L is the same as F = q v × B for a single charge."** It is the integrated form: a current I corresponds to a linear density of moving charges n q v_d, and the total force on a length L of conductor is (n q v_d A) L B = I L B (with appropriate signs and direction).
- **"A solenoid is just a coil of wire; its field is like that of a bar magnet."** The analogy is useful: a solenoid does have a north and south end, with field lines emerging from the north end and entering the south. But the field inside a long solenoid is uniform, while the field inside a bar magnet is not. The analogy works only for the external field far from the ends.
- **"Hall probes measure the field accurately even in small gaps."** Hall probes have a finite active area (~ 1 mm²) and average the field over that area. In a strongly non-uniform field (e.g. near the edge of a magnet), the reading is an average, not the field at a point.
- **"A current balance can measure the field of the Earth."** In principle yes; in practice, the Earth's field (~ 50 μT) produces a force of ~ 0.0025 mN per cm of conductor at 5 A, which is at the noise floor of a typical current balance. A more sensitive instrument (a torsion balance) is needed.

## Connections

- **Electricity and Magnetism (Sem 2 theory).** The Lorentz force F = q v × B and its current-element form F = I dL × B are the foundation of magnetostatics. The current balance measures the macroscopic consequence of this microscopic law.
- **Electronics.** The current balance is the operating principle of moving-coil galvanometers, loudspeakers (voice coil in a permanent-magnet gap), and the readout of analog panel meters. The same force law, scaled to engineering dimensions.
- **Astrophysics (Sem 5/6).** The magnetic force on a current is the basis of the magnetohydrodynamic force on a plasma in a stellar or planetary magnetic field. The solar wind's interaction with the Earth's magnetosphere is governed by the same F = I L × B form, integrated over the current systems in the magnetosphere.
- **Plasma physics and fusion.** The toroidal field in a tokamak is produced by external solenoids; the plasma current (driven by induction) interacts with this field to confine the plasma. The same μ₀ n I formula, scaled to MA-turns and T.

## Quick Check

1. State the relation between the force on a current element and the magnetic field. What is the direction of the force?
2. A 10 cm conductor carries 2 A in a 0.2 T field. What is the force when the conductor is perpendicular to B? At 30° to B?
3. Sketch the magnetic field lines inside and outside a long solenoid. What is B at the centre? At the end?
4. A solenoid of 500 turns over 25 cm carries 1.5 A. What is B at the centre?
5. You measure F = 9.8 mN for I = 2 A in a conductor of L = 5 cm. What is B?
6. Why does the current balance need to be level?
7. A Hall probe at the centre of a solenoid reads 8.0 mT for I = 2 A. The solenoid has 800 turns over 25 cm. Is this consistent with μ₀ n I? What is the discrepancy?
8. A student rotates the conductor in the field and finds that F is maximum when the conductor is parallel to B. What went wrong?

## Takeaway

The magnetic force on a current is the lab's window into magnetostatics. The current balance is the most direct mechanical measurement of F = I L × B you will do, and the solenoid-field map is the most direct measurement of B = μ₀ n I. Together, they span the two most important magnetostatic formulas. The right-hand rule is the one tool that ties the direction of every force and field in this lab; the magnitude comes from the formulas. The same physics, scaled up, governs motors, generators, transformers, and the plasma confinement in a fusion reactor.
