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
lessonId: electricity-and-magnetism-lab-m1-l1
lessonName: Mapping Electric Fields and Equipotentials
lessonNumber: 1
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - mechanics-lab-m1-l6
learningObjectives:
  - Draw equipotential lines for a current-carrying analogue of a 2D electrostatic configuration.
  - Construct electric field lines orthogonal to the equipotentials and verify that the field is the negative gradient of the potential.
  - Identify the configuration (parallel plates, dipole, point charges) from the equipotential pattern.
concepts:
  - Electric field
  - Electric potential
  - Equipotential surface
  - Field line
  - Gradient of potential
  - Conducting paper analogue
  - High-impedance voltmeter
  - Plotting equipotentials by interpolation
tags:
  - physics
  - laboratory
  - em
  - electrostatics
  - equipotential
  - field-mapping
sourceType: authored-courseware
assessmentHints:
  - Field lines must cross equipotentials at right angles.
  - The spacing between equipotentials is inversely related to the field strength: closer spacing ⇒ stronger field.
  - Common error: students use too low an input voltage and read noise; 5–10 V is typical.
status: in-review
***

# Mapping Electric Fields and Equipotentials

## Overview

You cannot see an electric field, but you can map it. The trick is to use a current-carrying analogue: a sheet of conducting paper with two electrodes painted on it, a low-voltage AC source driving a small current through the paper, and a high-impedance probe to trace lines of constant potential. Where the field is strongest the equipotentials bunch together; where the field is weak they spread out. The field lines are the perpendiculars to the equipotentials, and they terminate on the electrodes as expected.

This lesson walks through the apparatus (conducting paper with painted electrodes, AC source, high-impedance voltmeter or oscilloscope), the procedure for tracing one equipotential at a time, the plotting convention (every 1 V or every 0.5 V step), and the analysis that converts the equipotential map into a field map. You will also learn to recognise standard configurations (parallel plates, dipole, point charges) from the shape of the equipotentials alone.

## Learning Path

1. **Set the apparatus** — connect the conducting paper to the AC source through the painted electrodes; choose a convenient configuration (parallel plates, two point electrodes, or concentric circles).
2. **Calibrate** — set the source to 5–10 V at 1 kHz; confirm with a multimeter at the electrodes.
3. **Trace equipotentials** — for each target potential (e.g. every 1 V from 1 V to 9 V for a 10 V source), move the probe until the voltmeter reads that value; mark the position on the paper. Repeat until you have traced at least 5–7 equipotentials for each configuration.
4. **Plot** — connect the marked points into smooth curves.
5. **Field map** — draw field lines perpendicular to the equipotentials, originating and terminating on the electrodes.
6. **Analyse** — measure the spacing between adjacent equipotentials at several points; the local field magnitude is the potential difference divided by the perpendicular spacing.

## Core Explanation

### Theory: From Current to Electrostatics

A sheet of conducting paper with two painted electrodes and a small AC current flowing through it is a 2D analogue of a 3D electrostatic problem. The paper has a uniform surface resistance per square, so the current density J is uniform across the thickness, and the in-plane voltage V(x, y) obeys Laplace's equation

∇² V = 0.

This is exactly the equation that the electrostatic potential obeys in a region of space free of charge. The boundary conditions are also analogous: the painted electrodes are held at fixed potentials (like conductors in electrostatics). So the equipotential lines you trace on the paper are the equipotentials of the corresponding electrostatic problem.

The electric field (in the electrostatic analogue) is

E = −∇ V.

In the conducting-paper analogue, the current density is

J = −σ_s ∇ V,

where σ_s is the surface conductivity. So J is proportional to E, and the field lines you would draw in the electrostatic problem are the **current lines** in the conducting paper. They are perpendicular to the equipotentials.

### Apparatus

- Conducting paper sheet (resistance ~ 1 kΩ/square) with painted electrodes. Standard electrode configurations:
  - **Parallel plates** — two straight parallel strips, ~ 2 cm apart.
  - **Two point charges (dipole-like)** — two small circular electrodes, ~ 4 cm apart.
  - **Concentric circles** — one small disk in the centre of a large ring.
- Low-voltage AC source (1–10 V at 1 kHz). The AC is used to avoid polarisation at the electrodes, which would distort the field if DC were used.
- High-impedance voltmeter (10 MΩ input) or oscilloscope. **High input impedance is essential**: a low-impedance probe draws current and distorts the field.
- Probe: a stiff wire with a fine tip, mounted in a holder with a banana plug.
- Connecting wires, alligator clips.
- Sheet of plain paper taped behind the conducting paper, so the probe position can be marked through.
- Safety glasses.

### Procedure

1. Connect the electrodes to the AC source. Set the source to 5 V at 1 kHz (read the actual voltage with a multimeter; the source may not be exact).
2. Tape the conducting paper to the bench. Tape a sheet of plain paper behind it. Mark the electrode positions on the paper through the conducting paper with a pencil.
3. Choose a target equipotential, say V = 3 V if the source is 5 V (or 1 V steps from 1 V to 4 V for symmetry, since 5 V at one electrode and 0 V at the other is antisymmetric around 2.5 V). Calibrate the voltmeter.
4. Place the probe on the conducting paper. Move it until the voltmeter reads the target value. Mark the position on the paper underneath through a small hole in the probe holder, or by lifting the probe and pressing through.
5. Repeat at many positions, walking around the configuration. Each mark is a point on the equipotential.
6. Connect the marked points into a smooth curve. Use as many points as you can comfortably trace — at least 8–10 per equipotential.
7. Repeat for at least 5–7 equipotentials across the range.
8. When the field map is complete, draw the field lines: at each point on an equipotential, draw a short line perpendicular to the equipotential, pointing from the high-potential electrode to the low-potential electrode. Connect these short segments into smooth curves that begin and end on the electrodes.

### Analysis

For each configuration:

- **Parallel plates** in the middle of the plate region, the equipotentials should be parallel straight lines perpendicular to the line joining the plates. The field lines should be parallel straight lines joining the plates. The field magnitude is V / d, where d is the plate separation.
- **Two point charges** (one source, one sink) — the equipotentials are roughly circular near each electrode and more complex in between. The field lines emerge from one electrode and terminate on the other, with a clear "dipole" pattern.
- **Concentric circles** — the equipotentials are themselves nearly circular, and the field is radial. The field magnitude falls as 1/r, so the equipotentials bunch close to the inner electrode.

You can extract the local field magnitude at any point by measuring the perpendicular distance Δn between two adjacent equipotentials separated by ΔV. The magnitude is

|E| = ΔV / Δn.

Plot |E| as a function of position along a line connecting the electrodes, and check the expected functional form (constant for parallel plates; ~ 1/r for concentric circles).

### Sources of Error

- **Probe loading.** If the voltmeter has too low an input impedance, it draws current and distorts the field. The 10 MΩ input is a good practical compromise; an electrometer with 10¹⁴ Ω is better.
- **Electrode polarisation.** With DC, the electrodes polarise and the field drifts. AC at 1 kHz avoids this.
- **Contact resistance at the probe tip.** The probe must make a firm contact with the paper. A spring-loaded probe is best.
- **Edge effects.** Near the edges of the paper, the field is distorted by the boundary. Stay at least 1–2 cm from the edge.
- **Conducting paper non-uniformity.** Cheap paper has variations in surface resistance. Look for smooth equipotentials as a sanity check.

## Key Ideas

- A current-carrying sheet of conducting paper is a 2D analogue of a 3D electrostatic problem.
- Equipotentials are lines of constant potential. Field lines are perpendicular to equipotentials, pointing from high to low potential.
- Field magnitude is |E| = ΔV / Δn, where Δn is the perpendicular distance between two adjacent equipotentials.
- The shape of the equipotentials identifies the electrode configuration.
- High-impedance probes are essential. AC is used to avoid polarisation.

## Worked Examples

### Example 1: Parallel plates

You map equipotentials at 1 V intervals from 1 V to 4 V between two parallel plates 4 cm apart, with a 5 V source. In the central region, the equipotentials are straight parallel lines. Adjacent equipotentials are 0.8 cm apart.

- The expected field magnitude in the central region is V / d = 5 V / 0.04 m = 125 V/m.
- The measured field magnitude from the equipotential spacing is ΔV / Δn = 1 V / 0.008 m = 125 V/m.
- Agreement to three significant figures — confirming the parallel-plate capacitor model.

### Example 2: Two point charges

You map equipotentials between two point electrodes 6 cm apart. The 2.5 V equipotential (midway in potential) is approximately a straight line perpendicular to the line joining the electrodes, passing through the midpoint. The 1 V and 4 V equipotentials are more circular near their respective electrodes.

- This is the classic dipole pattern. The 2.5 V equipotential is a "saddle" — at the midpoint, the field is purely horizontal (from the + electrode to the − electrode), so the perpendicular to the equipotential is horizontal, and the equipotential is a vertical line.
- Far from the electrodes, the equipotentials approach circles centred on the midpoint — the far field of a dipole falls as 1/r³, but the equipotentials on a 2D analogue approach ellipses, and the field lines emerge radially in a near-dipole pattern.

### Example 3: Field magnitude from equipotential spacing

In a concentric-electrode configuration with inner radius 1 cm and outer radius 5 cm, you trace the 2 V and 3 V equipotentials at radii of 1.4 cm and 1.9 cm from the centre. Compute the field magnitude at r = 1.65 cm.

- |E| = ΔV / Δr = (3 − 2) V / (0.019 − 0.014) m = 1 V / 0.005 m = 200 V/m.
- For a 1/r dependence, E(r) = C / r, with C chosen so that the integral of E from inner to outer radius equals the total potential difference: ∫ E dr = C ln(r_out / r_in) = V. So C = V / ln(5) = 5 V / 1.609 = 3.11 V. At r = 1.65 cm, E = 3.11 / 0.0165 = 188 V/m. Close to the measured 200 V/m; the small discrepancy is within the measurement error of the radii.

## Common Misconceptions

- **"Field lines and equipotentials are the same thing."** They are perpendicular to each other. Field lines are the direction of E; equipotentials are the surfaces on which V is constant.
- **"The probe measures the field, not the potential."** The probe measures the potential. The field is the gradient of the potential, computed from how the potential varies with position.
- **"Equipotentials are 3D surfaces; we can only draw 2D lines on paper."** Correct. We draw the intersection of the 3D equipotential surfaces with the plane of the paper. In a 2D problem (no variation perpendicular to the paper), the equipotentials are themselves 2D curves.
- **"AC is used because it is safer than DC."** The primary reason is to avoid electrode polarisation. The AC frequency (1 kHz) is high enough that polarisation does not have time to build up, but low enough that the fields are essentially electrostatic (the wavelength at 1 kHz is 300 km, far larger than the apparatus).
- **"The current in the paper is the same as the displacement current in the corresponding 3D problem."** Not exactly. The conducting-paper current is a real conduction current, and the analogy to electrostatics works because both the paper and the free-space region obey Laplace's equation with the same boundary conditions.

## Connections

- **Electricity and Magnetism (Sem 2 theory).** This is the lab that gives the abstract theory of V and E a concrete image. The relation E = −∇ V is one of the central results of electrostatics; the lab lets you measure it directly.
- **Mathematics (Sem 2).** The mapping problem is a 2D boundary value problem; the method of images and separation of variables are the analytical counterparts.
- **Numerical methods (later semesters).** Any configuration more complex than a few electrodes is solved by finite differences or finite elements on a 2D grid, with Laplace's equation discretised. The lab is the experimental benchmark.
- **Engineering.** Field mapping is used in the design of electrodes for electrostatic precipitators, particle accelerators, electron microscopes, and lightning rods. The same equipotential-mapping technique is used in microwave engineering and in the design of microelectrode arrays.

## Quick Check

1. State the relation between E and V. Why are field lines perpendicular to equipotentials?
2. Why use AC instead of DC in the conducting-paper experiment?
3. Why does the voltmeter need high input impedance?
4. In a parallel-plate configuration, what shape are the equipotentials in the central region? What is the field magnitude there?
5. In a concentric-electrode configuration, the equipotentials are circles near the centre but become more complex far from the centre. Why?
6. Estimate the field magnitude at a point where two adjacent equipotentials (1 V apart) are 0.5 cm apart.
7. Sketch the field lines and equipotentials for two equal positive point charges (no sink). Where is the field zero?

## Takeaway

Mapping equipotentials is the lab's introduction to the structure of the electric field. The conducting-paper analogue turns an abstract boundary value problem into a tactile exercise: you push a probe around a sheet of paper, watch a voltmeter, and trace curves that, when connected, reveal the field. The shapes you see — straight parallel lines for a parallel-plate capacitor, circular contours for a point charge, saddle patterns for a dipole — are the same shapes you will meet in every electrostatics problem from this point on. The relation E = −∇ V, the perpendicularity of field and equipotential, and the inverse relation between field strength and equipotential spacing are the three facts to carry forward.
