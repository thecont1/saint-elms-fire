***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: renewable-energy-lab
courseName: Renewable Energy and Applications Lab (Option A)
moduleId: renewable-energy-lab-module-1
moduleName: Solar Cells, Energy Conversion, and Storage
lessonId: renewable-energy-lab-m1-l4
lessonName: Batteries, Supercapacitors, and Energy Storage
lessonNumber: 4
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - renewable-energy-lab-m1-l3
learningObjectives:
  - Measure the capacity, the energy density, and the power density of a Li-ion battery and a supercapacitor.
  - Determine the round-trip efficiency of a battery cycle.
  - Compare the Ragone plot of batteries and supercapacitors; identify the application space of each.
concepts:
  - Battery capacity
  - Energy density
  - Power density
  - Ragone plot
  - Round-trip efficiency
  - State of charge (SoC)
  - State of health (SoH)
  - C-rate
  - Li-ion chemistry
  - Supercapacitor (EDLC)
tags:
  - physics
  - laboratory
  - storage
  - battery
  - supercapacitor
  - ragone
sourceType: authored-courseware
assessmentHints:
  - Capacity: C (Ah) = I (A) x t (h). Energy: E (Wh) = V x C.
  - C-rate: I / C (per hour).
  - Energy density: 100-250 Wh/kg for Li-ion, 5-10 Wh/kg for supercapacitors.
status: in-review
***

# Batteries, Supercapacitors, and Energy Storage

## Overview

Energy storage is essential for renewable energy systems. Solar and wind power are intermittent; the energy must be stored for use when the sun is not shining or the wind is not blowing. The two main storage technologies are batteries (electrochemical) and supercapacitors (electrostatic). Batteries have high energy density but moderate power density; supercapacitors have high power density but low energy density. The Ragone plot (energy density vs power density) is the standard way to compare storage technologies.

This lesson covers the apparatus (a Li-ion battery, a supercapacitor, a battery tester, a multimeter, a load), the procedure (measure the capacity, the energy, the power, the round-trip efficiency), the analysis (construct the Ragone plot, compare with literature), and the dominant sources of error (internal resistance, temperature, ageing).

## Learning Path

1. **Set up the battery tester.** Connect the Li-ion battery to the tester. Set the charge/discharge profile.
2. **Measure the capacity.** Discharge the battery at a constant current (e.g. 1 C) to the cutoff voltage (e.g. 3.0 V). Record the time; compute the capacity.
3. **Measure the energy.** Compute the energy as the integral of V · I dt over the discharge.
4. **Measure the round-trip efficiency.** Charge the battery at a constant current; discharge at the same current. Compute the ratio of discharge energy to charge energy.
5. **Measure the power.** Discharge the battery at a high current (e.g. 5 C). Record the voltage sag; compute the internal resistance.
6. **Repeat for the supercapacitor.** Compare the capacity, the energy, the power, the round-trip efficiency.
7. **Construct the Ragone plot.** Plot the energy density (Wh/kg) vs the power density (W/kg) for both devices.

## Core Explanation

### Battery Capacity and Energy

The capacity C of a battery is the total charge it can deliver: C (in Ah) = I · t, where I is the discharge current and t is the discharge time. The energy is E = ∫ V · I dt ≈ V_avg · C. The energy density is the energy per unit mass (Wh/kg) or per unit volume (Wh/L).

For a Li-ion battery: V_nom = 3.7 V, C = 2-3 Ah, E = 7-11 Wh, energy density = 150-250 Wh/kg. For a lead-acid battery: V = 2 V per cell, energy density = 30-50 Wh/kg. For a supercapacitor: V = 2.7 V per cell, C = 1-100 F, energy density = 5-10 Wh/kg.

### Ragone Plot

The Ragone plot is a log-log plot of the energy density (Wh/kg) vs the power density (W/kg). Different storage technologies occupy different regions:
- Supercapacitors: high power (10⁴ W/kg) but low energy (10 Wh/kg).
- Li-ion batteries: high energy (200 Wh/kg) but moderate power (1 kW/kg).
- Lead-acid batteries: moderate energy (40 Wh/kg) and low power (200 W/kg).
- Fuel cells: high energy (500 Wh/kg) but low power (100 W/kg).
- Thermal storage: very high energy but very low power.

### C-Rate

The C-rate is the discharge current divided by the capacity: C-rate = I / C. A 1 C discharge of a 2 Ah battery is 2 A. A 2 C discharge is 4 A. A 0.5 C discharge is 1 A.

Higher C-rates lead to lower capacity (due to the voltage sag from the internal resistance) and lower round-trip efficiency (due to the I²R losses).

### Round-Trip Efficiency

The round-trip efficiency is the ratio of the discharge energy to the charge energy:

η = E_discharge / E_charge.

For a Li-ion battery, η = 90-95 % at low C-rate; lower at high C-rate. For a supercapacitor, η = 95-98 % (very high, because the charge storage is electrostatic, not electrochemical).

### Apparatus

- Li-ion battery (e.g. 18650 cell, 3.7 V, 2-3 Ah).
- Supercapacitor (e.g. 2.7 V, 10-100 F).
- Battery tester (with constant-current charge/discharge, voltage and current monitoring, data logging).
- Multimeter, load.
- Balance (0.1 g resolution).
- Safety equipment: fire extinguisher, safety glasses, gloves.
- Computer for data acquisition.

### Procedure

1. **Set up the battery tester.** Connect the Li-ion battery; set the cutoff voltage to 3.0 V; set the charge voltage to 4.2 V.
2. **Charge the battery** at 0.5 C to 4.2 V; hold at 4.2 V until the current drops to 0.05 C.
3. **Discharge the battery** at 0.5 C to 3.0 V. Record V(t) and I(t).
4. **Repeat at 1 C, 2 C, 5 C** to measure the rate capability.
5. **Compute the capacity, energy, power, round-trip efficiency** for each C-rate.
6. **Repeat for the supercapacitor** (charge to 2.7 V, discharge to 0 V).
7. **Construct the Ragone plot.**

### Analysis

#### Li-ion Battery

At 0.5 C discharge of a 2 Ah battery: I = 1 A, time = 2 h, capacity = 2 Ah, energy = 3.7 V · 2 Ah = 7.4 Wh, energy density = 7.4 Wh / 0.045 kg = 165 Wh/kg.

At 2 C: capacity = 1.9 Ah (slight loss), energy = 7.0 Wh, energy density = 156 Wh/kg. Internal resistance ~ 0.05 Ω; voltage sag at 2 C = 4 A · 0.05 Ω = 0.2 V.

Round-trip efficiency at 0.5 C: 95 %. At 2 C: 90 %.

#### Supercapacitor

At 1 A discharge of a 100 F supercapacitor: time = 100 s, energy = 0.5 · 2.7² · 100 = 365 J = 0.10 Wh. For a 0.02 kg cell, energy density = 5 Wh/kg.

At 10 A discharge: time = 10 s, energy = 36 J. Power = 2.7 V · 10 A = 27 W. Power density = 27 / 0.02 = 1350 W/kg.

Round-trip efficiency: 98 %.

#### Ragone Plot

Plot the energy density (y) vs the power density (x) for both devices. The supercapacitor occupies the high-power / low-energy region; the Li-ion battery occupies the high-energy / moderate-power region.

### Sources of Error

- **Internal resistance.** A high internal resistance reduces the voltage sag and the round-trip efficiency.
- **Temperature.** The capacity and the internal resistance depend on the temperature. Measure at a known temperature.
- **Ageing.** The capacity decreases with cycle number. A fresh battery gives the best results.
- **Self-discharge.** The self-discharge current (~ 1-5 %/month for Li-ion) reduces the stored charge over time.
- **Cutoff voltage.** A higher cutoff voltage gives a higher capacity but a lower cycle life. Use the manufacturer's recommended cutoff.

## Key Ideas

- Capacity: C = I · t. Energy: E = V · C.
- Ragone plot: energy density vs power density.
- C-rate: I / C.
- Round-trip efficiency: E_discharge / E_charge.
- Li-ion: 150-250 Wh/kg. Supercapacitor: 5-10 Wh/kg, 10⁴ W/kg.

## Worked Examples

#### Example 1: Li-ion Battery

A 2 Ah Li-ion battery is discharged at 1 C (2 A). The voltage drops from 4.2 V to 3.0 V in 1.0 h. The average voltage is 3.6 V. The energy is 3.6 V · 2 Ah = 7.2 Wh. For a 45 g cell, the energy density is 7.2 / 0.045 = 160 Wh/kg.

The power is 3.6 V · 2 A = 7.2 W. The power density is 7.2 / 0.045 = 160 W/kg.

#### Example 2: Supercapacitor

A 100 F supercapacitor is charged to 2.7 V and discharged at 1 A. The discharge time is 100 s. The energy is 0.5 · 2.7² · 100 = 365 J = 0.10 Wh. For a 20 g cell, the energy density is 0.10 / 0.02 = 5 Wh/kg.

The power is 2.7 V · 1 A = 2.7 W. The power density is 2.7 / 0.02 = 135 W/kg.

At a higher current (10 A), the power density is 27 W / 0.02 kg = 1350 W/kg, but the energy density is lower (due to the internal resistance).

## Common Misconceptions

- **"Higher C-rate gives more energy."** No. Higher C-rate gives less energy (lower capacity) and less round-trip efficiency.
- **"A supercapacitor is a battery with high power."** No. A supercapacitor stores energy electrostatically (in the electric double layer); a battery stores energy electrochemically. The Ragone plots are different.
- **"The round-trip efficiency is 100 %."** No. The round-trip efficiency is 90-98 % for Li-ion and supercapacitors; lower for other chemistries.
- **"Higher energy density is always better."** Not necessarily. For some applications (e.g. power tools, electric vehicles), high power density is also important. The Ragone plot shows both.

## Connections

- **Renewable Energy (Sem 6 theory).** Energy storage is essential for renewable energy systems. The choice of storage technology depends on the application: batteries for daily cycling, supercapacitors for peak power, pumped hydro for long-duration storage.
- **Materials science.** Battery materials (cathode, anode, electrolyte) determine the energy density, the power density, and the cycle life. Supercapacitor materials (activated carbon, carbon nanotubes) determine the capacitance and the power.
- **Engineering.** Battery management systems (BMS) monitor the state of charge, the state of health, and the temperature. The BMS is critical for the safety and the longevity of the battery pack.
- **Electric vehicles.** The battery pack is the most expensive component of an electric vehicle. The energy density, the power density, and the cycle life determine the vehicle's range, acceleration, and lifetime.
- **Grid storage.** Grid-scale storage is needed to balance the variable supply of renewable energy. Pumped hydro, compressed air, and batteries are the main technologies.

## Quick Check

1. What is the energy density of a Li-ion battery? A supercapacitor?
2. What is the C-rate?
3. What is the round-trip efficiency?
4. What is the Ragone plot?
5. What is the difference between a battery and a supercapacitor?
6. Why does a higher C-rate give a lower capacity?
7. What is the state of charge (SoC)? The state of health (SoH)?
8. What is the dominant loss mechanism in a battery?

## Takeaway

The energy storage technologies are central to the deployment of renewable energy. The lab's discipline — careful measurement of capacity, energy, power, and round-trip efficiency, proper construction of the Ragone plot, honest comparison with literature — is the same discipline that runs through every storage measurement. The same principles (electrochemistry, thermodynamics, transport) apply to all storage technologies, from the lead-acid battery to the supercapacitor to the fuel cell. The data you collect today is the raw material for the design of the energy system.
