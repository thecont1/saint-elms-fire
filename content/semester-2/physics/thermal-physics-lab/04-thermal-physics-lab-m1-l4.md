***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: thermal-physics-lab
courseName: Thermal Physics and Statistical Mechanics Lab
moduleId: thermal-physics-lab-module-1
moduleName: Thermometry, Calorimetry, and Heat Transfer
lessonId: thermal-physics-lab-m1-l4
lessonName: Thermal Conductivity and Lee's Disc
lessonNumber: 4
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - thermal-physics-lab-m1-l3
learningObjectives:
  - Measure the thermal conductivity of a bad conductor (cardboard, felt, or cork) using Lee's disc apparatus.
  - Apply the steady-state heat-flow equation Q = κ A ΔT / d to extract κ from a measured heat current.
  - Identify the dominant sources of error in thermal-conductivity measurements.
concepts:
  - Heat conduction
  - Fourier's law
  - Thermal conductivity
  - Steady-state heat flow
  - Lee's disc apparatus
  - Bad conductor vs good conductor
  - Thermal resistance
tags:
  - physics
  - laboratory
  - thermal
  - conductivity
  - fourier
  - lees-disc
sourceType: authored-courseware
assessmentHints:
  - The thermal conductivity of a bad conductor (cardboard) is ~ 0.2 W/(m·K); of a metal (copper) is ~ 400 W/(m·K) — a 2000× difference.
  - The Lee's disc method assumes 1D heat flow; edge losses are the dominant error source.
  - The steady-state temperature gradient takes 30–60 minutes to establish; patience is part of the lab.
status: in-review
***

# Thermal Conductivity and Lee's Disc

## Overview

Fourier's law of heat conduction states that the heat current Q (in watts) through a slab of area A and thickness d, with a temperature difference ΔT across it, is

Q = κ A ΔT / d,

where κ is the thermal conductivity of the material. For metals, κ is large (copper ~ 400 W/(m·K)); for insulators, κ is small (cardboard ~ 0.2 W/(m·K), air ~ 0.026 W/(m·K)). The measurement of κ for a bad conductor is the lab's introduction to heat transfer.

Lee's disc apparatus is the classical method: a slab of the material is placed between a hot plate (steam-heated) and a cold metal disc; in steady state, the heat flowing through the slab equals the heat lost from the cold disc to the surroundings by radiation and convection. By measuring the steady-state temperatures and the cooling rate of the cold disc (with the slab removed), the thermal conductivity is extracted.

## Learning Path

1. **Set up Lee's disc apparatus** — assemble the stack: heater plate, sample slab, cold metal disc, insulating ring around the slab.
2. **Pass steam** — heat the heater plate to ~ 100 °C with steam; wait 30–60 minutes for steady state.
3. **Record steady-state temperatures** — T₁ (top of sample, on heater side) and T₂ (top of cold disc, on the air side).
4. **Measure cooling rate** — remove the sample and the heater; allow the cold disc to cool; record T(t) for the disc; fit Newton's law of cooling to extract dT/dt at T = T₂.
5. **Compute the heat loss rate** — Q = m c dT/dt + (radiation and convection corrections).
6. **Compute κ** — κ = Q d / (A (T₁ − T₂)).

## Core Explanation

### Theory: Fourier's Law

For a slab of area A, thickness d, with faces at temperatures T₁ (hot) and T₂ (cold), the heat current in steady state is

Q = κ A (T₁ − T₂) / d.

The thermal conductivity κ is a material property; it depends weakly on temperature. The thermal resistance R_th = d / (κ A) is the engineering analogue of electrical resistance.

### Theory: Lee's Disc

In Lee's apparatus, the heat flowing through the sample equals the heat lost by the cold disc to the surroundings. The heat loss is by radiation and convection from the top and edges of the disc. The total heat loss rate at temperature T (above ambient) is

Q_loss(T) = m c (dT/dt),

where m and c are the mass and specific heat of the cold disc, and dT/dt is the cooling rate at temperature T.

In the modified Lee's method, the dominant heat loss is from the top surface of the disc, which loses heat by:

- **Conduction-convection** to the air above. For a horizontal plate in still air, the heat loss coefficient is roughly h_conv ~ 10 W/(m²·K) for a ΔT of ~ 30 K above ambient.
- **Radiation** to the surroundings. For a body at temperature T (in K) in surroundings at T_room, the radiative heat loss is σ ε (T⁴ − T_room⁴), where σ is the Stefan-Boltzmann constant and ε is the emissivity.

For the lab, the total heat loss is measured directly by observing the cooling rate of the disc (with the sample and heater removed) at the steady-state temperature T₂. The cooling rate at T₂, multiplied by the heat capacity of the disc, gives the heat loss rate Q_loss at T₂. In steady state, this equals the heat flow through the sample:

Q_through = m c (dT/dt) |_{T = T₂}.

Hence

κ = Q d / (A (T₁ − T₂)) = m c (dT/dt) d / (A (T₁ − T₂)).

### Apparatus

- Lee's disc apparatus: a heater plate (with a steam channel), a sample slab (cardboard, cork, or felt), a cold metal disc (brass, with a hole for a thermometer), an insulating ring around the slab to prevent edge losses.
- Steam generator (a 1 L flask of water with a delivery tube).
- Two thermometers (or thermocouples), 0–110 °C, 0.5 °C divisions.
- Stopwatch.
- Balance (0.1 g resolution).
- Vernier calipers (to measure the diameter of the disc and the thickness of the slab).
- Safety glasses, heat-resistant gloves.

### Procedure

1. **Measure the geometry** — diameter of the cold disc D, thickness of the sample d, mass of the cold disc m.
2. **Assemble the stack** — place the sample on the heater plate; place the cold disc on top of the sample; surround with the insulating ring. Insert thermometers into the heater plate and the cold disc.
3. **Pass steam** through the heater plate. Allow 30–60 minutes for the system to reach steady state. The thermometer in the cold disc will rise gradually and then level off.
4. **Record steady-state temperatures** — T₁ (heater) and T₂ (cold disc). Steady state is when both temperatures are constant to within ± 0.5 °C over 5 minutes.
5. **Measure the cooling rate** — turn off the steam; carefully remove the sample and the heater. Keep the thermometer in the cold disc. Record T(t) for the disc as it cools, every 30 seconds, from T₂ down to near room temperature. Continue for 10–15 minutes.
6. **Fit Newton's law of cooling** — T(t) = T_room + (T_2_initial − T_room) e^(−k t). From the fit, compute dT/dt at T = T₂. (Note: dT/dt = − k (T − T_room) at any T; the rate is larger when the disc is hotter.)

### Analysis

#### Heat Loss Rate

At T = T₂, the heat loss rate is

Q_loss = m c (dT/dt) |_{T = T₂}.

Using dT/dt = − k (T₂ − T_room):

Q_loss = m c k (T₂ − T_room).

The cooling constant k is the fit parameter from the cooling curve.

#### Thermal Conductivity

κ = Q_loss d / (A (T₁ − T₂)),

with A = π D² / 4.

For typical values: m = 0.5 kg, c = 380 J/(kg·K) (brass), k = 0.001 s⁻¹, T₂ − T_room = 30 K, d = 0.005 m, D = 0.1 m, T₁ − T₂ = 30 K:

Q_loss = 0.5 · 380 · 0.001 · 30 = 5.7 W.
A = π · 0.01 / 4 = 0.00785 m².
κ = 5.7 · 0.005 / (0.00785 · 30) = 0.0285 / 0.236 = 0.121 W/(m·K).

This is in the right ballpark for cardboard (~ 0.2 W/(m·K)); the lab value is somewhat low, suggesting edge heat losses are significant.

### Sources of Error

- **Edge losses.** Heat is lost from the edges of the sample, not just through the disc. The insulating ring reduces this but does not eliminate it.
- **Contact resistance.** The thermal contact between the sample and the heater (and between the sample and the disc) is not perfect. A thin layer of air or surface roughness adds a thermal resistance. Apply a thin layer of heat-conducting paste (silicone grease) to improve contact.
- **Temperature measurement.** The thermometers measure the temperature at a point, not the average over the disc. Place the thermometers at representative positions.
- **Steady state.** A full steady state takes 30–60 minutes to establish. The lab often has to compromise between time and accuracy.
- **Newton's law fit.** The cooling rate is fitted from a finite data set; the fit uncertainty propagates into κ.

## Key Ideas

- Fourier's law: Q = κ A ΔT / d.
- The thermal resistance is R_th = d / (κ A).
- In Lee's disc, the heat flow through the sample equals the heat loss from the cold disc at steady state.
- The cooling rate of the disc is measured after removing the sample, and converted to a heat loss rate.
- Edge losses and contact resistance are the dominant sources of error.
- Bad conductors (κ ~ 0.1 W/(m·K)) and good conductors (κ ~ 100 W/(m·K)) differ by a factor of 1000.

## Worked Examples

### Example 1: κ for cardboard

You measure: m = 0.500 kg (cold disc), c = 380 J/(kg·K) (brass), D = 0.100 m, d = 0.005 m. Cooling curve gives k = 0.0012 s⁻¹ and T_room = 25.0 °C. Steady-state T₁ = 95.0 °C, T₂ = 55.0 °C.

- Q_loss = 0.500 · 380 · 0.0012 · 30 = 6.84 W.
- A = π (0.100)² / 4 = 0.00785 m².
- T₁ − T₂ = 40 K.
- κ = 6.84 · 0.005 / (0.00785 · 40) = 0.0342 / 0.314 = 0.109 W/(m·K).

Compare with literature: cardboard ~ 0.2 W/(m·K). The lab value is 0.11, about 45 % low. The likely cause is edge losses — heat is lost from the edges of the sample, so the heat flow through the disc (and the cooling rate) is less than the heat flow through the slab.

### Example 2: κ for cork

A similar measurement with a cork sample (d = 0.010 m) gives κ = 0.040 W/(m·K). Literature for cork: 0.04–0.05 W/(m·K). The agreement is excellent.

### Example 3: Steady-state time

Estimate the time to reach steady state. The thermal diffusivity of the cold disc (brass) is α = κ / (ρ c) = 100 / (8500 · 380) = 3.1 × 10⁻⁵ m²/s. The characteristic time for the disc to reach thermal equilibrium is t ~ L² / α = (0.05)² / 3.1 × 10⁻⁵ = 80 s — about 1 minute. But the system as a whole (heater + sample + disc) takes longer because the sample has a much lower diffusivity. A reasonable estimate is 30–60 minutes for the full system to settle to within 1 % of the steady state.

## Common Misconceptions

- **"κ is independent of temperature."** It depends on temperature, weakly for metals and more strongly for insulators. For high-precision work, use κ(T) at the average temperature of the slab.
- **"A thicker sample gives a more accurate κ."** A thicker sample reduces the relative error in d, but it also increases the time to reach steady state and the temperature drop across the sample. A thickness of 5–10 mm is a good compromise.
- **"The cooling rate of the disc is the same as the heat-flow rate through the sample."** Only at steady state, and only if the disc is the only path for heat to leave the sample. The insulating ring and the contact resistance must be carefully controlled.
- **"Fourier's law is exact."** It is exact for steady-state, 1D, homogeneous heat conduction. For transient, 2D, or inhomogeneous cases, the heat equation ∂T/∂t = α ∇²T is the governing equation.
- **"κ is a property of the material only."** It depends on the material's structure, density, moisture content, and temperature. The lab value is a property of the specific sample, not just the material.

## Connections

- **Thermal Physics and Statistical Mechanics (Sem 2 theory).** Fourier's law is the constitutive relation for heat conduction. Combined with energy conservation, it gives the heat equation ∂T/∂t = α ∇²T, one of the three fundamental partial differential equations of classical physics (along with the wave equation and Laplace's equation).
- **Engineering.** Insulation design (building walls, refrigerator walls, spacecraft thermal protection) is governed by Fourier's law. The R-value of building insulation is the thermal resistance per unit area; the U-value is its reciprocal. Doubling the insulation thickness doubles the R-value.
- **Geophysics.** The geothermal gradient (~ 25 K/km in the Earth's crust) and the heat flow through the Earth's surface (~ 0.06 W/m²) are related by Fourier's law to the thermal conductivity of rock (~ 2–3 W/(m·K)). The same physics governs the cooling of the oceanic lithosphere and the thermal evolution of the Earth's interior.
- **Astrophysics (Sem 5/6).** The thermal conductivity of stellar matter (mostly ionised hydrogen) is dominated by electron conduction; the heat flow from the core to the surface is limited by this conductivity. The same Fourier's law in spherical coordinates gives the temperature profile of a star.
- **Materials science.** The thermal conductivity of a material is related to its electrical conductivity through the Wiedemann-Franz law (for metals). Diamond has the highest thermal conductivity of any natural material (~ 2000 W/(m·K)) because of its stiff lattice.

## Quick Check

1. State Fourier's law. Define thermal conductivity. What are its SI units?
2. What is the thermal resistance? How is it analogous to electrical resistance?
3. In Lee's disc, what heat-flow rate is measured? How is it related to the heat loss rate of the cold disc?
4. A slab of area 100 cm² and thickness 5 mm has a temperature difference of 30 K across it. If the heat flow is 5 W, what is κ?
5. Why does the apparatus need 30–60 minutes to reach steady state?
6. What is the dominant source of error in the Lee's disc method?
7. Why is κ for cardboard much smaller than κ for copper? What is the microscopic origin?
8. A student measures κ for cardboard and gets 0.05 W/(m·K), much lower than the literature value. What might be wrong?

## Takeaway

Fourier's law is the lab's introduction to heat transfer. The Lee's disc method gives κ for a bad conductor to within a factor of 2, with the dominant errors being edge losses and contact resistance. The same Fourier's law, applied to the Earth's crust, to building walls, to spacecraft, and to stellar interiors, is one of the most widely used equations in physics and engineering. The thermal conductivity is the material property that determines how fast heat flows; the thermal resistance is the engineering quantity that determines the temperature drop for a given heat flow. Master the measurement here, and the rest of the programme's heat-transfer work is on solid ground.
