***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: low-dimensional-materials-lab
courseName: Low-Dimensional Materials Lab (Option C)
moduleId: low-dimensional-materials-lab-module-1
moduleName: Thin Films, Nanomaterials, and Characterisation
lessonId: low-dimensional-materials-lab-m1-l1
lessonName: Thin-Film Deposition — Thermal Evaporation and Sputtering
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - microcontroller-and-embedded-systems-lab-m1-l6
learningObjectives:
  - Deposit a thin metal film (e.g. aluminium, gold, or silver) on a glass or silicon substrate using thermal evaporation; measure the film thickness.
  - Describe the sputtering process for thin-film deposition; identify the advantages over thermal evaporation.
  - Characterise the film by visual inspection, optical microscopy, and electrical resistivity measurement.
concepts:
  - Thin film
  - Thermal evaporation
  - Sputtering
  - Vacuum
  - Deposition rate
  - Film thickness
  - Quartz crystal microbalance
  - Adhesion
  - Grain size
tags:
  - physics
  - laboratory
  - thin-film
  - evaporation
  - sputtering
  - deposition
sourceType: authored-courseware
assessmentHints:
  - Thermal evaporation: heat the source material to its melting point; the vapour deposits on the substrate. Typical pressure: 10⁻⁵ to 10⁻⁶ Torr.
  - Sputtering: bombard the target with ions; the ejected atoms deposit on the substrate. Typical pressure: 10⁻² to 10⁻³ Torr (with a working gas, usually Ar).
  - Film thickness: measured with a quartz crystal microbalance (QCM) during deposition, or with a profilometer or ellipsometer after deposition.
status: in-review
***

# Thin-Film Deposition — Thermal Evaporation and Sputtering

## Overview

A thin film is a layer of material with a thickness of less than ~ 1 μm. Thin films are used in a wide range of applications: anti-reflective coatings on lenses, electrical contacts on semiconductor devices, magnetic layers on hard disks, optical coatings on mirrors, and protective coatings on tools. The deposition of a thin film is the central technique of thin-film science and engineering.

The two most common physical vapour deposition (PVD) methods are thermal evaporation and sputtering. In thermal evaporation, the source material is heated to its melting point in a vacuum; the vapour condenses on the substrate. In sputtering, the source material (the target) is bombarded with energetic ions; the ejected atoms (sputtered atoms) deposit on the substrate. Each method has its advantages and limitations.

This lesson covers the apparatus (a vacuum chamber, a thermal evaporator or a sputter coater, a substrate, a film thickness monitor), the procedure (clean the substrate, load the source material, evacuate the chamber, deposit the film, measure the thickness), the analysis (verify the thickness, measure the resistivity, inspect the surface), and the dominant sources of error (contamination, non-uniform deposition, oxidation).

## Learning Path

1. **Prepare the substrate.** Clean a glass slide or a silicon wafer with acetone, isopropanol, and deionised water. Dry with nitrogen.
2. **Load the source material.** Place a small amount of the source material (e.g. aluminium wire) in the thermal evaporator's boat, or in the sputter coater's target holder.
3. **Mount the substrate** in the chamber, facing the source. The distance from the source to the substrate is typically 10-30 cm.
4. **Evacuate the chamber** to ~ 10⁻⁵ Torr (for evaporation) or ~ 10⁻² Torr (for sputtering).
5. **Deposit the film.** For thermal evaporation, heat the source to the melting point. For sputtering, apply a high voltage (e.g. 1-5 kV) to the target.
6. **Measure the film thickness** using a quartz crystal microbalance (QCM) during deposition, or a profilometer or ellipsometer after deposition.
7. **Characterise the film** by visual inspection, optical microscopy, and electrical resistivity.

## Core Explanation

### Theory: Thermal Evaporation

In thermal evaporation, the source material is placed in a boat or filament (typically tungsten, molybdenum, or tantalum) and heated to its melting point by passing a large current through the boat. The vapour pressure of the source material increases with temperature; at the evaporation temperature, the vapour pressure is ~ 10⁻² Torr, sufficient for a measurable deposition rate.

The vapour travels in straight lines from the source to the substrate (mean free path > chamber dimensions at 10⁻⁵ Torr). The deposition rate depends on the vapour pressure and the geometry:

R = (p / √(2 π m k_B T)) · (1 / r²) · cos(θ),

where p is the vapour pressure, m is the molecular mass, T is the source temperature, r is the distance from the source to the substrate, and θ is the angle of incidence. For a small source and a flat substrate, the rate is highest at the centre and falls off as cos(θ) / r².

The typical evaporation rate is 1-10 nm/s. A 100 nm film is deposited in 10-100 s.

### Theory: Sputtering

In sputtering, the target is the source material. The chamber is filled with a working gas (typically argon) at a pressure of ~ 10⁻² Torr. A high voltage (1-5 kV) is applied between the target (cathode) and the substrate (anode). The voltage ionises the argon, creating a plasma. The positive argon ions are accelerated towards the target, where they eject (sputter) target atoms. The sputtered atoms travel through the plasma and deposit on the substrate.

The sputtering yield (atoms ejected per incident ion) depends on the ion energy, the ion mass, and the target material. For argon ions at 500 eV on aluminium, the yield is ~ 1 atom/ion. For gold, the yield is ~ 2.5 atoms/ion.

The typical sputtering rate is 0.1-1 nm/s. A 100 nm film is deposited in 100-1000 s.

### Theory: Film Thickness Measurement

The film thickness is measured with:
- **Quartz crystal microbalance (QCM)**: a quartz crystal oscillates at a resonant frequency; the frequency decreases as mass is deposited on the crystal. The frequency change is proportional to the mass, and the thickness is computed from the mass, the density, and the area.
- **Profilometer**: a stylus is dragged across the film; the step height is the thickness. Requires a step in the film (e.g. a masked edge).
- **Ellipsometer**: measures the change in polarisation of light reflected from the film. The thickness is computed from the optical constants. Non-contact, no step required.
- **X-ray reflectometry**: measures the X-ray interference pattern; the thickness is computed from the fringe spacing. Requires a smooth film.

### Theory: Film Properties

The properties of a thin film depend on the deposition method, the substrate temperature, the deposition rate, and the film thickness. A film deposited at low temperature is typically amorphous or nanocrystalline; a film deposited at high temperature is typically polycrystalline with larger grains. The resistivity of a thin film is typically higher than the bulk value (due to grain boundary scattering and surface scattering); the resistivity increases as the film thickness decreases (the "size effect").

A film deposited by thermal evaporation is typically less dense and has smaller grains than a film deposited by sputtering. Sputtered films adhere better to the substrate.

### Apparatus

- Vacuum chamber (a bell jar or a stainless-steel chamber).
- Pump: a rotary vane pump (for low vacuum, 10⁻³ Torr) and a diffusion pump or a turbomolecular pump (for high vacuum, 10⁻⁵ to 10⁻⁷ Torr).
- Thermal evaporator: a boat or filament, a current source (10-100 A), a shutter.
- Sputter coater: a target holder, a magnet (for magnetron sputtering), a high-voltage power supply (1-5 kV), a gas inlet, a mass flow controller.
- Substrate holder, shutter.
- Quartz crystal microbalance (QCM) or other thickness monitor.
- Pressure gauge: Pirani gauge (for 10⁻³ to 10⁻¹ Torr), ion gauge (for 10⁻⁷ to 10⁻³ Torr).
- Substrates: glass slides, silicon wafers, or other suitable materials.
- Source materials: aluminium, gold, silver, chromium, etc.
- Cleaning supplies: acetone, isopropanol, deionised water, nitrogen gun.
- Optical microscope, profilometer, or ellipsometer (for characterisation).
- Multimeter or four-probe station (for resistivity measurement).
- Safety glasses; high-voltage interlocks; the chamber should be in a shielded enclosure.

### Procedure

1. **Clean the substrate.** Rinse the substrate with acetone, then isopropanol, then deionised water. Dry with a nitrogen gun. Handle the substrate with tweezers or clean gloves to avoid contamination.
2. **Load the source material** into the evaporator or sputter coater. For thermal evaporation, place a small amount of the source material in the boat. For sputtering, place the target in the target holder.
3. **Mount the substrate** in the chamber, facing the source. The distance from the source to the substrate is typically 10-30 cm.
4. **Evacuate the chamber.** First with the rotary pump to ~ 10⁻³ Torr; then with the diffusion pump or turbomolecular pump to ~ 10⁻⁵ Torr (for evaporation) or fill with argon to ~ 10⁻² Torr (for sputtering).
5. **Deposit the film.** For thermal evaporation, slowly increase the current until the source melts and evaporates. Open the shutter when the rate is stable. For sputtering, apply the high voltage; strike the plasma; open the shutter.
6. **Measure the thickness** with the QCM during deposition, or with a profilometer or ellipsometer after deposition.
7. **Vent the chamber** and remove the substrate.
8. **Characterise the film.** Visual inspection, optical microscopy, four-probe resistivity.

### Analysis

#### Film Thickness

For a QCM with a resonant frequency f_0 and a frequency change Δf due to the deposited mass, the thickness is

t = (Δf / f_0) · (ρ_q · v_q · ρ_f) / (π · f_0 · ρ_q · ρ_f) · ... 

OK let me just use a simpler form. The Sauerbrey equation gives the mass per unit area:

Δm = (ρ_q · v_q / 2) · (Δf / f_0²),

where ρ_q is the density of quartz (2.65 g/cm³), v_q is the speed of sound in quartz (3340 m/s), and f_0 is the resonant frequency (e.g. 6 MHz). The thickness is t = Δm / ρ_f, where ρ_f is the density of the film.

For a 6 MHz crystal with Δf = 1000 Hz, Δm = (2.65 · 3340 / 2) · (1000 / 6 × 10⁶)² = 4425.5 · 2.78 × 10⁻¹⁰ = 1.23 × 10⁻⁶ g/cm². For an aluminium film (ρ = 2.7 g/cm³), t = 1.23 × 10⁻⁶ / 2.7 = 4.56 × 10⁻⁷ cm = 4.56 nm.

#### Resistivity

For a thin film of length L, width w, and thickness t, the resistance is R = ρ · L / (w · t). The resistivity is ρ = R · w · t / L.

For a film with R = 10 Ω, L = 10 mm, w = 5 mm, t = 100 nm, the resistivity is ρ = 10 · 5 × 10⁻³ · 100 × 10⁻⁹ / 10 × 10⁻³ = 5 × 10⁻⁷ Ω·m = 50 μΩ·cm. The bulk resistivity of aluminium is 2.7 μΩ·cm; the film resistivity is ~ 20× higher, consistent with the size effect.

### Sources of Error

- **Contamination.** Oil, dust, and water vapour on the substrate or in the chamber contaminate the film. Clean the substrate; bake the chamber; use a high vacuum.
- **Non-uniform deposition.** The deposition rate is not uniform across the substrate (it falls off as cos(θ) / r²). Rotate the substrate to improve uniformity.
- **Oxidation.** Reactive metals (e.g. aluminium) oxidise in air. The oxide layer has a higher resistivity than the metal. Deposit a protective layer (e.g. gold) on top.
- **Grain size.** The grain size of the film depends on the deposition conditions. Smaller grains give higher resistivity (more grain boundary scattering).
- **Substrate temperature.** The substrate temperature affects the film morphology. A hot substrate gives larger grains and better crystallinity.

## Key Ideas

- Thermal evaporation: heat the source to its melting point in vacuum; the vapour deposits on the substrate.
- Sputtering: bombard the target with ions; the ejected atoms deposit on the substrate.
- Film thickness: measured with a QCM (during deposition), a profilometer, an ellipsometer, or X-ray reflectometry (after deposition).
- Film resistivity: typically higher than the bulk value, due to grain boundary scattering and surface scattering.

## Worked Examples

#### Example 1: Thermal Evaporation of Aluminium

You deposit an aluminium film on a glass substrate by thermal evaporation. The source is 20 cm from the substrate. The deposition rate is 2 nm/s. The deposition time is 60 s.

The film thickness is t = 2 · 60 = 120 nm.

The film resistivity is measured with a four-probe station: R = 5 Ω, L = 10 mm, w = 5 mm. t = 120 nm.

ρ = R · w · t / L = 5 · 5 × 10⁻³ · 120 × 10⁻⁹ / 10 × 10⁻³ = 3 × 10⁻⁷ Ω·m = 30 μΩ·cm.

The bulk resistivity of aluminium is 2.7 μΩ·cm. The film is ~ 10× more resistive, consistent with a nanocrystalline film.

#### Example 2: Sputtering of Gold

You deposit a gold film on a silicon substrate by DC magnetron sputtering. The target is 15 cm from the substrate. The sputtering rate is 0.5 nm/s. The deposition time is 200 s.

The film thickness is t = 0.5 · 200 = 100 nm.

The film resistivity is measured with a four-probe station: R = 2 Ω, L = 10 mm, w = 5 mm. t = 100 nm.

ρ = 2 · 5 × 10⁻³ · 100 × 10⁻⁹ / 10 × 10⁻³ = 1 × 10⁻⁷ Ω·m = 10 μΩ·cm.

The bulk resistivity of gold is 2.2 μΩ·cm. The film is ~ 5× more resistive, consistent with a nanocrystalline film with smaller grains (sputtering gives smaller grains than evaporation).

#### Example 3: QCM Calibration

A QCM has a resonant frequency of 6 MHz. After deposition, the frequency has dropped by 500 Hz. The film is aluminium (ρ = 2.7 g/cm³).

Δm = (2.65 · 3340 / 2) · (500 / 6 × 10⁶)² = 4425.5 · 6.94 × 10⁻¹¹ = 3.07 × 10⁻⁷ g/cm².

t = Δm / ρ = 3.07 × 10⁻⁷ / 2.7 = 1.14 × 10⁻⁷ cm = 1.14 nm.

This is a very thin film. For thicker films, the QCM frequency change is larger.

## Common Misconceptions

- **"The film thickness is uniform across the substrate."** No. The thickness varies as cos(θ) / r², where θ is the angle from the source normal and r is the distance from the source. Rotate the substrate to improve uniformity.
- **"Thermal evaporation and sputtering give the same film."** No. The two methods give different film morphologies, densities, and resistivities. Sputtered films are typically denser and have better adhesion.
- **"The film thickness from the QCM is exact."** The QCM measures the mass per unit area on the crystal, not the film thickness on the substrate. The tool factor (the ratio of the deposition rate on the substrate to the deposition rate on the crystal) is typically 0.8-1.2; the actual film thickness may differ from the QCM reading by 10-20 %.
- **"A thin film is always crystalline."** No. A thin film can be amorphous, polycrystalline, or single-crystal, depending on the substrate, the deposition conditions, and the material. A film deposited at low temperature is typically amorphous or nanocrystalline.
- **"A high vacuum is required for thermal evaporation."** A pressure of 10⁻⁵ Torr is typical; a pressure of 10⁻⁶ Torr gives a longer mean free path and a more uniform film. A pressure above 10⁻⁴ Torr gives a short mean free path and a contaminated film.

## Connections

- **Low-Dimensional Materials (Sem 5 theory).** Thin films are the prototypical low-dimensional system. The properties of a thin film differ from the bulk because of the reduced dimensionality (confinement in one direction) and the increased surface-to-volume ratio.
- **Materials science.** Thin films are used in microelectronics (transistors, interconnects), optoelectronics (LEDs, lasers, solar cells), data storage (magnetic disks), and protective coatings. The deposition method is critical to the film properties.
- **Engineering.** Thin-film deposition is the workhorse of the semiconductor industry. Every chip has hundreds of thin films deposited by evaporation, sputtering, chemical vapour deposition (CVD), and atomic layer deposition (ALD).
- **Optics.** Anti-reflective coatings, high-reflectance mirrors, optical filters, and beam splitters are all thin films. The design of the film stack is a calculation of the interference pattern.
- **Solar energy.** Thin-film solar cells (CdTe, CIGS, perovskite) are an alternative to crystalline silicon. The deposition method is critical to the cell efficiency.

## Quick Check

1. What is the typical pressure for thermal evaporation? For sputtering?
2. What is the deposition rate for thermal evaporation? For sputtering?
3. What is the typical grain size of a thermally evaporated film? Of a sputtered film?
4. Why is the resistivity of a thin film higher than the bulk resistivity?
5. What is the role of the QCM in thin-film deposition?
6. What is the role of the substrate rotation?
7. Why is a high vacuum required for thermal evaporation?
8. A film has a QCM frequency change of 1000 Hz. What is the thickness (for aluminium)?

## Takeaway

Thin-film deposition is the lab's primary tool for making low-dimensional materials. Thermal evaporation and sputtering are the two most common PVD methods; each has its advantages and limitations. The lab's discipline — clean substrate, high vacuum, accurate thickness monitoring, proper characterisation — is the same discipline that runs through every thin-film deposition. The same principles (vapour pressure, sputtering yield, film thickness) apply to all PVD methods, from the simple evaporator to the industrial sputtering system. The film you deposit today is the foundation of the device you build tomorrow.
