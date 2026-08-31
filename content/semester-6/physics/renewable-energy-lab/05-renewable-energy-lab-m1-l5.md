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
lessonId: renewable-energy-lab-m1-l5
lessonName: Wind Turbine, Heat Engine, and Energy Conversion Efficiency
lessonNumber: 5
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - renewable-energy-lab-m1-l4
learningObjectives:
  - Measure the power output of a small wind turbine as a function of wind speed; determine the Betz limit and the power coefficient.
  - Measure the efficiency of a thermoelectric generator (TEG) or a small heat engine.
  - Compare the energy conversion efficiencies of different renewable technologies.
concepts:
  - Wind turbine power
  - Betz limit
  - Power coefficient C_p
  - Tip-speed ratio
  - Thermoelectric effect
  - Seebeck coefficient
  - Figure of merit ZT
  - Carnot efficiency
  - Heat engine
tags:
  - physics
  - laboratory
  - renewable
  - wind
  - turbine
  - thermoelectric
  - carnot
sourceType: authored-courseware
assessmentHints:
  - Wind power in the wind: P = 0.5 rho A v^3.
  - Betz limit: C_p_max = 16/27 = 0.593. A turbine cannot extract more than 59.3% of the wind power.
  - Thermoelectric: V = S * delta T, where S is the Seebeck coefficient.
  - Carnot efficiency: eta = 1 - T_c / T_h.
status: in-review
***

# Wind Turbine, Heat Engine, and Energy Conversion Efficiency

## Overview

Renewable energy technologies convert natural energy flows (sunlight, wind, heat, biomass) into useful energy (electricity, mechanical work, heat). Each technology has a characteristic efficiency. Solar cells convert sunlight to electricity with an efficiency of 15-22 % (silicon), 25-30 % (GaAs), or 40+ % (multi-junction). Wind turbines convert wind kinetic energy to mechanical work with a power coefficient of 0.35-0.45 (theoretical maximum: 0.593, the Betz limit). Thermoelectric generators convert heat to electricity with an efficiency of 5-10 %.

This lesson covers the apparatus (a small wind turbine with an anemometer, a thermoelectric generator with a heat source, a multimeter, a load), the procedure (measure the power output vs wind speed; measure the TEG voltage vs temperature difference), the analysis (compute the power coefficient; compute the Seebeck coefficient; compare with the Carnot efficiency), and the dominant sources of error (wind speed fluctuations, temperature measurement, contact resistance).

## Learning Path

1. **Set up the wind turbine** in front of a fan (variable speed). Connect a variable load to the turbine output. Measure the wind speed with the anemometer.
2. **Measure the power output** for several wind speeds (e.g. 2, 3, 4, 5, 6 m/s). Compute the power P = V · I (or V² / R for a resistive load).
3. **Compute the power coefficient C_p** = P_output / P_wind = 2 P / (ρ A v³). Plot C_p vs tip-speed ratio λ = ω R / v.
4. **Set up the thermoelectric generator** with a heat source (e.g. a hot plate) and a cold side (e.g. a water-cooled block). Measure the temperature difference with two thermocouples.
5. **Measure the TEG voltage and power** for several temperature differences. Compute the Seebeck coefficient S = V / ΔT.
6. **Compute the Carnot efficiency** η_C = 1 − T_c / T_h. Compare with the measured efficiency.

## Core Explanation

### Wind Turbine Power

The power in the wind is the kinetic energy flux through the turbine's swept area:

P_wind = 0.5 · ρ · A · v³,

where ρ is the air density (~ 1.2 kg/m³ at sea level), A is the swept area (π R² for a horizontal-axis turbine), and v is the wind speed.

The turbine extracts a fraction of this power:

P_turbine = C_p · P_wind = 0.5 · C_p · ρ · A · v³.

The power coefficient C_p is bounded by the Betz limit: C_p ≤ 16/27 ≈ 0.593. A real turbine has C_p = 0.35-0.45 at the optimal tip-speed ratio λ_opt = ω R / v ≈ 7-8.

### Thermoelectric Generator

A thermoelectric generator (TEG) converts a temperature difference directly into electricity via the Seebeck effect. The voltage is

V = S · ΔT,

where S is the Seebeck coefficient (in V/K). For bismuth telluride (Bi₂Te₃), S ≈ 200 μV/K. The power is P = V · I = V² / R, where R is the load resistance.

The maximum efficiency of a TEG is

η_max = (T_h − T_c) / T_h · √(1 + ZT_avg) − 1) / (√(1 + ZT_avg) + T_c / T_h),

where ZT is the figure of merit. For Bi₂Te₃ at room temperature, ZT ≈ 1, giving η_max ≈ 5-10 % for ΔT = 200-300 K.

### Carnot Efficiency

The Carnot efficiency is the maximum efficiency of any heat engine operating between two thermal reservoirs:

η_Carnot = 1 − T_c / T_h.

For T_h = 500 K and T_c = 300 K, η_Carnot = 0.4 (40 %). Real heat engines (steam, internal combustion, gas turbine) achieve 30-40 %.

### Apparatus

- Small horizontal-axis wind turbine (e.g. 12 V, 5 W, with a built-in three-phase rectifier and a DC output).
- Variable-speed fan (0-10 m/s).
- Anemometer (for the wind speed).
- Variable load (a decade resistor or a variable resistor).
- Voltmeter, ammeter.
- Thermoelectric generator (e.g. a Bi₂Te₃ module, 40 × 40 mm, with a maximum power of ~ 5 W at ΔT = 200 K).
- Heat source (a hot plate, ~ 200-300 °C).
- Cold side (a water-cooled aluminium block).
- Two thermocouples (for the hot-side and cold-side temperatures).
- Multimeter, load.
- Safety glasses, heat-resistant gloves.

### Procedure

1. **Set up the wind turbine.** Mount the turbine in front of the fan. Connect the variable load to the DC output. Place the anemometer at the turbine location.
2. **Measure the open-circuit voltage** of the turbine (no load). Verify the voltage is proportional to the wind speed.
3. **Measure the power output** for several wind speeds. For each wind speed, vary the load; record the voltage and the current. Find the maximum power point.
4. **Plot P_turbine vs v³.** Fit a straight line; extract the power coefficient.
5. **Set up the TEG.** Mount the TEG between the heat source and the cold side. Place the thermocouples on the hot and cold sides.
6. **Measure the TEG voltage and power** for several ΔT (e.g. 50, 100, 150, 200, 250 K). For each ΔT, vary the load; find the maximum power point.
7. **Compute the Seebeck coefficient, the maximum power, and the efficiency.**

### Analysis

#### Wind Turbine

For a 12 V, 5 W turbine with a rotor diameter of 0.5 m (A = 0.196 m²) at v = 5 m/s:

P_wind = 0.5 · 1.2 · 0.196 · 5³ = 14.7 W.

P_turbine (at maximum power point) = 2.5 W.

C_p = 2.5 / 14.7 = 0.17 (17 %).

This is well below the Betz limit (59 %), but typical for a small, low-cost turbine.

#### Thermoelectric Generator

For a Bi₂Te₃ TEG at ΔT = 200 K, V_open = 200 × 10⁻⁶ · 200 = 0.040 V = 40 mV. At the maximum power point (matched load), V = V_open / 2 = 20 mV, I = 0.2 A, P = 4 mW.

η = P / Q, where Q is the heat flow through the TEG. For a Bi₂Te₃ module with thermal conductivity κ = 1.5 W/(m·K), area A = 16 cm² = 0.0016 m², thickness d = 3 mm = 0.003 m:

Q = κ · A · ΔT / d = 1.5 · 0.0016 · 200 / 0.003 = 160 W.

η = 0.004 / 160 = 2.5 × 10⁻⁵ = 0.0025 %.

This is very low, because the thermal conductivity of the TEG is too high; most of the heat flows through without being converted to electricity. To improve the efficiency, the thermal conductivity must be reduced (e.g. by using a higher-ZT material like nanostructured Bi₂Te₃ or by using a segmented TEG).

The Carnot efficiency for ΔT = 200 K and T_avg = 400 K is η_C = 200 / 400 = 50 %. The TEG efficiency is 2.5 × 10⁻⁵ / 0.5 = 5 × 10⁻⁵ % of the Carnot. The ZT = 1 gives η = 0.5 · (√2 − 1) / (√2 + 1) · 200 / 400 = 0.5 · 0.172 = 0.086, or 8.6 % of Carnot.

Hmm, that's higher than my back-of-envelope. Let me redo.

η_max for a TEG with ZT_avg = 1:

η_max = (ΔT / T_h) · (√(1 + ZT) − 1) / (√(1 + ZT) + T_c / T_h).

For ΔT = 200 K, T_h = 500 K, T_c = 300 K, ZT = 1:

η_max = (200/500) · (√2 − 1) / (√2 + 300/500) = 0.4 · 0.414 / (1.414 + 0.6) = 0.4 · 0.414 / 2.014 = 0.082 = 8.2 %.

Carnot efficiency = ΔT / T_h = 0.4 = 40 %.

So the TEG efficiency is 8.2 % / 40 % = 20.5 % of Carnot. Reasonable.

For a practical TEG with heat losses and contact resistances, the actual efficiency is ~ 50 % of the maximum, so 4-5 %.

### Sources of Error

- **Wind speed fluctuations.** The wind speed from a fan is not constant. Use a long averaging time.
- **Anemometer calibration.** The anemometer must be calibrated. Use a Pitot tube or a hot-wire anemometer for high accuracy.
- **TEG contact resistance.** The contact between the TEG and the heat source/cold side adds thermal resistance. Use thermal paste and adequate clamping force.
- **TEG Peltier effect.** The current through the TEG causes a Peltier cooling at the hot side and Peltier heating at the cold side, reducing the effective ΔT.
- **Heat losses.** The heat source and the cold side may have parasitic heat losses (conduction, convection, radiation). Insulate the heat source and the cold side.

## Key Ideas

- Wind power: P = 0.5 ρ A v³. Power coefficient C_p ≤ 16/27 (Betz limit).
- TEG: V = S · ΔT. Seebeck coefficient S ≈ 200 μV/K for Bi₂Te₃. Figure of merit ZT ~ 1.
- Carnot efficiency: η_C = 1 − T_c / T_h.

## Worked Examples

#### Example 1: Wind Turbine

A 1 m diameter wind turbine at v = 10 m/s: A = π/4 = 0.785 m². P_wind = 0.5 · 1.2 · 0.785 · 10³ = 471 W. At C_p = 0.4, P_turbine = 188 W. At C_p = 0.59 (Betz limit), P_turbine = 278 W.

#### Example 2: TEG with Heat Source

A TEG with ΔT = 100 K (T_h = 400 K, T_c = 300 K) and ZT = 1: η_max = 0.25 · (√2 − 1) / (√2 + 0.75) = 0.25 · 0.414 / 2.164 = 0.048 = 4.8 %. Carnot = 25 %. So the TEG is 19 % of Carnot.

## Common Misconceptions

- **"The Betz limit is the maximum efficiency of any wind turbine."** The Betz limit is the maximum efficiency of an ideal turbine that extracts kinetic energy from the wind. Real turbines are less efficient due to mechanical losses, electrical losses, and wake effects.
- **"A TEG can convert waste heat to electricity with high efficiency."** No. A TEG has a low efficiency (5-10 %) because of the low ZT of available materials. The efficiency is much less than the Carnot efficiency.
- **"The Carnot efficiency is achievable."** The Carnot efficiency is the theoretical maximum. Real heat engines are less efficient due to friction, heat loss, and finite-rate heat transfer.
- **"Higher wind speed is always better."** No. The power is proportional to v³, but the turbine must be designed for the typical wind speed. A turbine designed for 10 m/s is not optimal for 5 m/s.
- **"All renewable technologies are equally efficient."** No. The efficiency depends on the technology, the operating conditions, and the design. Solar PV: 15-25 %. Wind: 35-45 % (Betz). TEG: 5-10 %.

## Connections

- **Renewable Energy (Sem 6 theory).** The wind turbine, the TEG, and the Carnot efficiency are central to the design of renewable energy systems. The choice of technology depends on the application, the cost, and the resource.
- **Engineering.** The design of a wind turbine or a TEG requires a detailed understanding of the fluid dynamics, the heat transfer, and the materials. The optimisation is a complex, multi-parameter problem.
- **Energy systems.** The integration of multiple renewable sources (solar, wind, hydro) and storage (battery, supercapacitor, pumped hydro) is the central challenge of the energy transition.
- **Materials science.** The materials for solar cells (silicon, GaAs, perovskite), wind turbine blades (carbon fibre, glass fibre), and TEGs (Bi₂Te₃, PbTe, SiGe) determine the performance and the cost.
- **Thermodynamics.** The Carnot efficiency is the fundamental limit of any heat engine. The TEG is limited by the Carnot efficiency; the wind turbine is limited by the Betz limit; the solar cell is limited by the Shockley-Queisser limit.

## Quick Check

1. What is the Betz limit?
2. What is the Seebeck coefficient of Bi₂Te₃?
3. What is the Carnot efficiency?
4. What is the figure of merit ZT?
5. What is the maximum power coefficient of a wind turbine?
6. What is the maximum efficiency of a TEG with ZT = 1 and ΔT = 200 K?
7. Why is the TEG efficiency much less than the Carnot efficiency?
8. What is the dominant loss mechanism in a wind turbine?

## Takeaway

The energy conversion technologies are central to the deployment of renewable energy. The lab's discipline — careful measurement of the power, the voltage, the current, the temperature; proper construction of the power coefficient and the Seebeck coefficient; honest comparison with the theoretical limits — is the same discipline that runs through every energy conversion measurement. The same principles (Betz limit, Carnot efficiency, ZT figure of merit) apply to all renewable technologies, from the wind turbine to the TEG to the solar cell. The data you collect today is the raw material for the design of the next-generation energy system.
