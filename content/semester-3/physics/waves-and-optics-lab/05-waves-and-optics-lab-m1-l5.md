***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: waves-and-optics-lab
courseName: Waves and Optics Lab
moduleId: waves-and-optics-lab-module-1
moduleName: Oscillations, Geometrical Optics, and Wave Optics
lessonId: waves-and-optics-lab-m1-l5
lessonName: Polarisation, Malus's Law, and Brewster's Angle
lessonNumber: 5
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - waves-and-optics-lab-m1-l4
learningObjectives:
  - Verify Malus's law for the transmission of polarised light through a polariser.
  - Measure Brewster's angle for a glass surface and verify the relation tan θ_B = n.
  - Distinguish polarised, partially polarised, and unpolarised light.
concepts:
  - Polarisation
  - Linear polarisation
  - Circular polarisation
  - Malus's law
  - Brewster's angle
  - Polariser
  - Analyser
  - Reflectance
  - Optical activity
tags:
  - physics
  - laboratory
  - optics
  - polarisation
  - malus
  - brewster
sourceType: authored-courseware
assessmentHints:
  - Malus's law: I = I_0 cos² θ, where θ is the angle between the polariser and analyser axes.
  - Brewster's angle: tan θ_B = n, where n is the refractive index of the reflecting medium.
  - Reflected light from a non-metallic surface at Brewster's angle is completely polarised perpendicular to the plane of incidence.
status: in-review
***

# Polarisation, Malus's Law, and Brewster's Angle

## Overview

Light is a transverse electromagnetic wave. The electric field oscillates perpendicular to the direction of propagation, but the orientation of the oscillation in the plane perpendicular to propagation is unrestricted for unpolarised light (e.g. sunlight, incandescent light). A polariser selects one orientation; the transmitted light is linearly polarised. A second polariser (the analyser) at angle θ to the first transmits a fraction cos² θ of the intensity (Malus's law). Rotate the analyser, and the intensity varies from maximum to zero.

Polarisation can also be produced by reflection at a dielectric surface. At Brewster's angle (tan θ_B = n, where n is the refractive index of the surface), the reflected light is completely polarised perpendicular to the plane of incidence. The refracted light is partially polarised in the plane of incidence.

This lesson covers Malus's law (verified by rotating an analyser and measuring the transmitted intensity), Brewster's angle (measured by finding the angle of incidence at which the reflected light is completely polarised), the distinction between linear, circular, and elliptical polarisation, and the dominant sources of error.

## Learning Path

1. **Set up the polariser-analyzer pair** — a light source (e.g. a sodium lamp or a white-light source with a filter), a polariser, an analyser, and a photodetector (or a screen + photometer).
2. **Verify Malus's law** — fix the polariser; rotate the analyser in 10° steps from 0° to 360°; record the transmitted intensity at each step. Plot I/I_0 against θ; fit cos² θ.
3. **Measure Brewster's angle** — use a glass plate (or a hemicylindrical lens) on a rotating table; illuminate with unpolarised light at varying angles of incidence; observe the reflected light through an analyser; find the angle at which the reflected light is completely extinguished (with the analyser oriented perpendicular to the plane of incidence). This is Brewster's angle; verify tan θ_B = n.
4. **Determine n** — from the measured θ_B, compute n = tan θ_B. Compare with the catalog value for the glass.

## Core Explanation

### Theory: Linear Polarisation

Unpolarised light can be modelled as a superposition of linearly polarised components in all directions perpendicular to the propagation. A polariser (e.g. a Polaroid filter) transmits only the component along its transmission axis. The transmitted intensity is half the incident intensity:

I_transmitted = I_0 / 2  (for unpolarised incident light).

A second polariser (the analyser) at angle θ to the first transmits a fraction cos² θ of the intensity it receives:

I = (I_0 / 2) cos² θ.

This is Malus's law. Maximum transmission (I_0 / 2) is at θ = 0° (axes parallel); zero transmission is at θ = 90° (axes crossed).

### Theory: Brewster's Angle

When light reflects off a dielectric surface (e.g. glass, water), the reflected light is partially polarised. The degree of polarisation depends on the angle of incidence. At a specific angle, Brewster's angle, the reflected light is completely polarised perpendicular to the plane of incidence. The relation is

tan θ_B = n,

where n is the refractive index of the reflecting medium. For glass (n ≈ 1.5), θ_B ≈ 56.3°; for water (n ≈ 1.33), θ_B ≈ 53.1°.

The physical origin: at Brewster's angle, the reflected and refracted rays are perpendicular. The dipoles in the dielectric, oscillating in response to the incident wave, cannot radiate along their own oscillation direction; the reflected ray is therefore perpendicular to the oscillation direction of the refracted-ray dipoles, which is the plane of incidence. So the reflected light is polarised perpendicular to the plane of incidence.

### Theory: Circular and Elliptical Polarisation

If two linearly polarised waves of equal amplitude, with a 90° phase difference, are superposed with perpendicular polarisation directions, the result is a circularly polarised wave: the electric field vector rotates at the optical frequency, with constant magnitude. Elliptical polarisation is the general case: two perpendicular components with arbitrary amplitudes and phase difference. Quarter-wave plates and half-wave plates (made of birefringent materials like calcite or quartz) are used to convert linear polarisation to circular or elliptical, and vice versa.

### Apparatus

- Light source: sodium lamp (monochromatic) or white-light source + filter.
- Two polarisers (Polaroid filters in rotating mounts).
- Photodetector (silicon photodiode with an amplifier) or a photometer.
- Glass plate on a rotating table (for Brewster's angle), with a protractor scale.
- Hemicylindrical glass lens (optional; easier to measure θ_B because the refraction is well-defined).
- Safety glasses.

### Procedure: Malus's Law

1. Set up the polariser-analyzer pair between the source and the photodetector. The source should be a stable, monochromatic source.
2. Set the polariser at 0° (its transmission axis vertical, by convention).
3. Set the analyser at 0° (parallel to the polariser). Record the photodetector reading I_max.
4. Rotate the analyser in 10° steps from 0° to 360°; record the intensity at each step.
5. Plot I / I_max (y) against θ (x). The data should follow cos² θ.

### Procedure: Brewster's Angle

1. Place the glass plate on a rotating table; the plate should be horizontal, with the protractor scale measuring the angle of incidence.
2. Illuminate the plate with unpolarised light from a fixed source. Observe the reflected light through the analyser.
3. Rotate the table to vary the angle of incidence. At each angle, rotate the analyser to find the orientation that gives minimum transmitted intensity. If the reflected light is completely polarised, the minimum should be zero (or very small, given the limitations of the eye/photometer).
4. Find the angle of incidence at which the reflected light is most completely polarised — this is Brewster's angle. Record θ_B.
5. Compute n = tan θ_B. Compare with the catalog value for the glass (typically 1.5 for crown glass, 1.6 for flint glass).

### Analysis

#### Malus's Law

A plot of I / I_max (y) against θ (x) should follow cos² θ. A fit of the form y = a cos²(θ − θ_0) returns a (should be 1, within the calibration of the photodetector) and θ_0 (should be 0, indicating the analyser scale is correctly zeroed).

A common check: at θ = 45°, I / I_max = 0.5. At θ = 60°, I / I_max = 0.25. At θ = 90°, I / I_max = 0.

#### Brewster's Angle

n_measured = tan θ_B. For glass (catalog n = 1.50), θ_B = arctan(1.50) = 56.3°. The measurement should give θ_B within 1° of this.

### Sources of Error

- **Polariser quality.** A real Polaroid is not a perfect polariser; some of the "wrong" component is transmitted. The extinction ratio (I_min / I_max) for a good Polaroid is ~ 10⁻³; for a poor one, it can be 10⁻¹.
- **Source stability.** The lamp intensity must be stable over the measurement time. Use a regulated power supply; allow the lamp to warm up for 10 minutes.
- **Angle reading.** The analyser and the table rotation have finite resolution. A 1° error in θ corresponds to ~ 3 % error in cos² θ.
- **Background light.** Stray light in the lab contributes to the photodetector reading. Shield the detector and work in a darkened area.
- **Glass plate alignment.** For Brewster's angle, the glass plate must be flat and the rotation axis must be in the plane of the plate. Any tilt introduces a systematic error in θ_B.

## Key Ideas

- Polarisation: the orientation of the electric field in a light wave.
- A polariser transmits the component along its transmission axis.
- Malus's law: I = I_0 cos² θ (where θ is the angle between the polariser and analyser axes).
- Brewster's angle: tan θ_B = n. Reflected light is completely polarised at this angle.
- Circular and elliptical polarisation: superpositions of two perpendicular linearly polarised waves with a phase difference.

## Worked Examples

### Example 1: Malus's law fit

You record the following (θ, I) data with a photodetector:

| θ (°) | I (a.u.) |
|------:|---------:|
| 0 | 1.00 |
| 15 | 0.93 |
| 30 | 0.75 |
| 45 | 0.50 |
| 60 | 0.25 |
| 75 | 0.07 |
| 90 | 0.00 |
| 105 | 0.07 |
| 120 | 0.25 |
| 135 | 0.50 |

A fit to I = I_0 cos²(θ − θ_0) gives I_0 = 1.00 (consistent) and θ_0 = 0° (the analyser is correctly zeroed).

### Example 2: Brewster's angle for glass

You measure θ_B = 56.5° for a glass plate. Then

n_measured = tan(56.5°) = 1.514.

This is consistent with crown glass (n ≈ 1.50–1.52).

### Example 3: Brewster's angle for water

You measure θ_B = 53.0° for a water surface. Then

n_measured = tan(53.0°) = 1.327.

This is consistent with water (n ≈ 1.33).

### Example 4: Polarisation by reflection

Unpolarised light is incident on a glass surface at Brewster's angle. The reflected light is completely polarised; the refracted light is partially polarised in the plane of incidence. The intensity of the reflected light at Brewster's angle is

R_B = (1/2) sin²(θ_B − θ_r) / sin²(θ_B + θ_r),

where θ_r is the refraction angle. At Brewster's angle, θ_B + θ_r = 90°, so the denominator becomes sin²(90°) = 1. The numerator is sin²(θ_B − (90° − θ_B)) = sin²(2 θ_B − 90°) = cos²(2 θ_B). For θ_B = 56.3° (glass), 2 θ_B = 112.6°, cos(112.6°) = −0.384, cos²(112.6°) = 0.148. So R_B ≈ 0.074, or 7.4 %. This is a small but non-zero fraction of the incident light reflected as fully polarised light.

## Common Misconceptions

- **"Polarised light is a special kind of light."** Most natural light is partially polarised. Direct sunlight is unpolarised, but skylight is partially polarised (by Rayleigh scattering); reflected light (from water, glass, roads) is partially polarised. Polarised light is the rule, not the exception.
- **"Malus's law applies to unpolarised light."** Malus's law applies to already-polarised light passing through a polariser. For unpolarised light, the transmitted intensity through a single polariser is I_0 / 2, independent of the polariser's orientation.
- **"Brewster's angle is when the reflected light disappears."** Brewster's angle is when the reflected light is completely polarised. A small fraction of the light is still reflected; the rest is refracted. The reflected intensity at Brewster's angle is a few per cent.
- **"Polaroid sunglasses are polarised."** Yes — they have a preferred transmission axis, usually vertical, to block horizontally-polarised glare from horizontal surfaces (water, roads).
- **"Circular polarisation is rare in nature."** It is produced by reflection from some beetle shells and bird feathers, by scattering in some atmospheric phenomena, and by certain optical components (sugar solutions, when viewed through a polariser, can rotate the plane of polarisation — this is optical activity, related to the chirality of the molecules).

## Connections

- **Waves and Optics (Sem 3 theory).** Polarisation is one of the four properties of a light wave (along with frequency, phase, and amplitude). It is the property that most clearly distinguishes light from a scalar wave.
- **Photography.** A polarising filter is a standard photographic accessory. It darkens blue skies (by blocking the partially polarised skylight), reduces reflections from water and glass, and increases colour saturation in foliage.
- **Liquid crystal displays (LCDs).** LCDs use two polarisers with a liquid crystal layer between them. The liquid crystal rotates the polarisation direction by 90° (in the "off" state) or leaves it unchanged (in the "on" state), controlling the transmission of light.
- **Astronomy (Sem 5/6).** Polarisation of starlight reveals the geometry of scattering (interstellar dust) and the presence of magnetic fields (via the Zeeman effect or dust alignment). The polarisation of the cosmic microwave background is a key observable for inflation.
- **Chemistry.** Optical activity (rotation of the plane of polarisation by a chiral molecule) is the classical method for measuring the concentration of sugar in solution; it is also used to identify chiral compounds and to monitor enzyme reactions.
- **Stress analysis.** Photoelasticity uses polarised light to visualise stress patterns in transparent plastics; the birefringence induced by stress rotates the polarisation, producing coloured fringes.

## Quick Check

1. State Malus's law. What is the transmitted intensity at θ = 0°, 45°, 90°?
2. State Brewster's law. What is Brewster's angle for glass (n = 1.5)?
3. Why is the reflected light at Brewster's angle completely polarised?
4. A polariser and an analyser are crossed. What is the transmitted intensity? What if a third polariser is inserted between them at 45°?
5. Unpolarised light of intensity I_0 is incident on a polariser. What is the transmitted intensity? On a second polariser at 45°? On a third at 90°?
6. Why do Polaroid sunglasses reduce glare from horizontal surfaces?
7. A glass plate (n = 1.6) reflects light at 58° incidence. Is the reflected light completely polarised?
8. A sugar solution rotates the plane of polarisation by 1° per cm. A 10 cm tube is used. What is the observed rotation?

## Takeaway

Polarisation is the lab's introduction to the vector nature of light. Malus's law and Brewster's law are the two central results. The lab's discipline — careful alignment of the polarisers, accurate angle reading, stable light source — is the same discipline that runs through every polarimetric measurement in physics, chemistry, and astronomy. The polarisation of light is a powerful tool: it reveals the orientation of molecules, the strength of magnetic fields, the geometry of scattering, and the chirality of biological molecules. The same physics, scaled up, governs the polarisation of the cosmic microwave background and the alignment of interstellar dust grains in the Galaxy.
