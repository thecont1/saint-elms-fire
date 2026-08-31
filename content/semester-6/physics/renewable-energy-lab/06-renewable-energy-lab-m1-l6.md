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
lessonId: renewable-energy-lab-m1-l6
lessonName: Energy System Design, Project, and the Viva
lessonNumber: 6
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 6
prerequisites:
  - renewable-energy-lab-m1-l5
learningObjectives:
  - Design a small off-grid solar energy system: solar panel, battery, charge controller, inverter, load.
  - Estimate the energy yield, the battery autonomy, and the cost of the system.
  - Write a complete lab report for a renewable energy experiment.
  - Anticipate and answer viva-style questions about the five renewable energy experiments.
concepts:
  - Off-grid solar system
  - Energy yield
  - Battery autonomy
  - Charge controller
  - Inverter
  - System sizing
  - Levelised cost of energy (LCOE)
  - Capacity factor
  - System report
  - Viva preparation
tags:
  - physics
  - laboratory
  - renewable
  - system-design
  - solar
  - off-grid
  - lcoe
sourceType: authored-courseware
assessmentHints:
  - Daily energy consumption E_d = sum of (power x time) for all loads.
  - Battery autonomy: days = battery capacity (Wh) / daily consumption (Wh).
  - LCOE = total lifetime cost / total lifetime energy.
status: in-review
***

# Energy System Design, Project, and the Viva

## Overview

An off-grid solar energy system consists of a solar panel, a charge controller, a battery, an inverter, and a load. The system must be sized to meet the energy demand with a margin for weather variability. The levelised cost of energy (LCOE) is the total lifetime cost divided by the total lifetime energy produced; it is the standard metric for comparing energy technologies.

This lesson covers the design of an off-grid solar system (sizing the panel, the battery, the charge controller, the inverter), the estimation of the energy yield and the battery autonomy, the calculation of the LCOE, a worked example of a complete lab report, and the viva questions an examiner is likely to ask.

## Learning Path

1. **Estimate the energy demand.** List all the loads; estimate the daily energy consumption.
2. **Estimate the solar resource.** Use the daily solar insolation for the location (kWh/m²/day).
3. **Size the solar panel.** Panel area = daily energy / (insolation × panel efficiency).
4. **Size the battery.** Battery capacity = daily energy × autonomy days / (DoD × inverter efficiency).
5. **Size the charge controller and the inverter.** Based on the panel and the load.
6. **Calculate the LCOE.** Total cost / total energy.
7. **Write a complete lab report** for a renewable energy experiment.
8. **Viva rehearsal** — work through the viva questions with a partner.

## Core Explanation

### Off-Grid Solar System

An off-grid solar system consists of:
- **Solar panel**: converts sunlight to DC electricity. Power depends on the insolation and the panel area.
- **Charge controller**: regulates the charging of the battery; prevents overcharging and deep discharging. Types: PWM (pulse-width modulation) and MPPT (maximum power point tracking). MPPT is more efficient.
- **Battery**: stores energy. Types: lead-acid, Li-ion, saltwater. Capacity is measured in Wh or Ah.
- **Inverter**: converts DC to AC. Efficiency 90-95 % for a pure sine wave inverter.
- **Load**: the device or system being powered. AC or DC.

### System Sizing

The daily energy consumption is

E_d = Σ (P_i × t_i),

where P_i is the power of load i and t_i is the daily operating time. The total daily energy is the sum over all loads.

The daily solar energy is

E_solar = G × A × η_panel,

where G is the daily insolation (kWh/m²/day), A is the panel area, and η_panel is the panel efficiency. The panel area needed is

A = E_d / (G × η_panel).

The battery capacity is

C_battery = E_d × N_autonomy / (DoD × η_inverter),

where N_autonomy is the number of days of autonomy (typically 2-3), DoD is the depth of discharge (typically 50 % for lead-acid, 80 % for Li-ion), and η_inverter is the inverter efficiency (~ 0.9).

### LCOE

The levelised cost of energy is

LCOE = (C_capital + C_O&M × N) / (E_annual × N),

where C_capital is the capital cost, C_O&M is the annual operation and maintenance cost, N is the lifetime in years, and E_annual is the annual energy production. The LCOE is in $/kWh or ₹/kWh.

For a residential solar system in India:
- Capital cost: ₹ 50,000 for a 1 kW system.
- O&M cost: ₹ 1,000/year.
- Lifetime: 25 years.
- Annual energy: 1500 kWh/year (1500 kWh/kW × 1 kW, in Bangalore).
- LCOE: (50000 + 1000 × 25) / (1500 × 25) = 75000 / 37500 = ₹ 2/kWh.

For a wind turbine:
- Capital cost: ₹ 5,00,000 for a 10 kW turbine.
- O&M cost: ₹ 10,000/year.
- Lifetime: 20 years.
- Annual energy: 20,000 kWh/year (capacity factor 0.23 × 10 kW × 8760 h/y).
- LCOE: (500000 + 10000 × 20) / (20000 × 20) = 700000 / 400000 = ₹ 1.75/kWh.

For grid electricity in India: ₹ 7-8/kWh. So solar and wind are competitive in some regions.

### Capacity Factor

The capacity factor is the ratio of the actual energy produced to the maximum possible:

CF = E_annual / (P_rated × 8760 h/y).

For solar PV in India: CF = 0.15-0.20. For wind: CF = 0.20-0.35 (varies with the wind regime). For coal: CF = 0.50-0.80. For nuclear: CF = 0.85-0.95.

### Apparatus

- Computer with the design software (e.g. PVsyst, Homer, RETScreen).
- Solar resource data for the location (e.g. from NASA SSE, NREL, IMD).
- Load profile (daily energy consumption by hour).
- Component datasheets (solar panel, battery, inverter).
- Safety glasses.

### Procedure

1. **Estimate the energy demand.** List the loads and the daily operating time. Compute the daily energy consumption.
2. **Estimate the solar resource.** Look up the daily insolation for the location (e.g. Bangalore: ~ 5 kWh/m²/day).
3. **Size the system.** Use the formulas above. Iterate to find the optimal sizes.
4. **Simulate the system.** Use PVsyst or Homer to simulate the hourly performance over a year. Compute the energy yield, the battery state of charge, and the unmet load.
5. **Optimise the system.** Adjust the panel area, the battery capacity, the tilt angle to minimise the LCOE.
6. **Write a complete lab report** for a renewable energy experiment.
7. **Viva rehearsal.**

### Analysis

#### System Design for a Small House

Loads:
- 5 LED bulbs, 10 W each, 5 h/day = 250 Wh/day.
- 1 refrigerator, 100 W, 24 h/day (with duty cycle 0.3) = 720 Wh/day.
- 1 fan, 50 W, 8 h/day = 400 Wh/day.
- 1 laptop, 50 W, 4 h/day = 200 Wh/day.
- Other: 100 Wh/day.
- Total: ~ 1700 Wh/day.

For Bangalore (G = 5 kWh/m²/day) and a 18 % efficient panel:

A = 1700 / (5 × 0.18) = 1.89 m² ≈ 2 m².

For 2 days of autonomy and a Li-ion battery (DoD = 0.8, η_inverter = 0.9):

C_battery = 1700 × 2 / (0.8 × 0.9) = 4722 Wh ≈ 4.7 kWh.

At 12 V (battery voltage): C_battery = 4722 / 12 = 393 Ah ≈ 400 Ah.

Charge controller: MPPT, 12 V, 30 A (for a 360 W panel).
Inverter: 1 kW, 12 V DC to 230 V AC.

Total cost (rough estimate):
- Solar panel: 360 W × ₹ 25/W = ₹ 9,000.
- Battery: 4.7 kWh × ₹ 15/Wh = ₹ 70,000 (Li-ion).
- Charge controller: ₹ 5,000.
- Inverter: ₹ 5,000.
- Wiring, mounting: ₹ 10,000.
- Total: ~ ₹ 1,00,000.

LCOE (25 years, 1700 × 365 = 620 kWh/year):
- Annual energy: 620 kWh.
- Annual O&M: ₹ 1,000.
- LCOE: (100000 + 1000 × 25) / (620 × 25) = 125000 / 15500 = ₹ 8/kWh.

This is higher than the grid electricity in Bangalore (~ ₹ 7/kWh). The system is not economically competitive without subsidies.

For a larger system (5 kW panel, 10 kWh battery), the LCOE drops to ~ ₹ 4/kWh, competitive with the grid.

### Sources of Error

- **Solar resource data.** The solar resource is variable from year to year. Use multi-year data.
- **Load profile.** The load profile may change. Use a conservative estimate.
- **Component efficiency.** The component efficiency may vary with operating conditions.
- **Battery degradation.** The battery capacity decreases with cycle number. Use a conservative estimate.
- **Inverter efficiency.** The inverter efficiency depends on the load. Use the average efficiency.

## Key Ideas

- Daily energy consumption: E_d = Σ (P_i × t_i).
- Solar panel area: A = E_d / (G × η_panel).
- Battery capacity: C_battery = E_d × N_autonomy / (DoD × η_inverter).
- LCOE: (C_capital + C_O&M × N) / (E_annual × N).
- Capacity factor: CF = E_annual / (P_rated × 8760).

## Worked Examples

#### Example 1: Daily Energy Consumption

A house has the following loads:
- 4 LED bulbs, 12 W each, 6 h/day = 288 Wh/day.
- 1 refrigerator, 80 W, 24 h/day (duty cycle 0.3) = 576 Wh/day.
- 1 fan, 60 W, 10 h/day = 600 Wh/day.
- 1 TV, 80 W, 4 h/day = 320 Wh/day.
- Total: 1784 Wh/day ≈ 1.8 kWh/day.

Annual energy: 650 kWh/year.

#### Example 2: System Sizing

For Bangalore (G = 5 kWh/m²/day) and a 18 % panel:

A = 1800 / (5 × 0.18) = 2 m².

For 2 days of autonomy (Li-ion, DoD = 0.8, η_inverter = 0.9):

C_battery = 1800 × 2 / (0.8 × 0.9) = 5000 Wh = 5 kWh.

At 12 V: 417 Ah.

#### Example 3: LCOE

Capital: ₹ 1,20,000. O&M: ₹ 1,500/year. Lifetime: 25 years. Annual energy: 650 kWh.

LCOE = (120000 + 1500 × 25) / (650 × 25) = 157500 / 16250 = ₹ 9.7/kWh.

## Common Misconceptions

- **"The solar panel produces its rated power at all times."** No. The rated power is the STC power; the actual power depends on the irradiance, the temperature, and the angle of incidence. The capacity factor is 0.15-0.20 in India.
- **"The battery can be fully discharged."** No. The depth of discharge (DoD) is limited: 50 % for lead-acid, 80 % for Li-ion. Deep discharge reduces the cycle life.
- **"The LCOE includes all costs."** No. The LCOE includes the capital and the O&M costs. It does not include the environmental costs (externalities).
- **"A larger system is always more efficient."** No. A larger system has higher absolute losses. The relative efficiency (kWh produced / kWh potential) decreases with size. The optimum size depends on the load and the resource.
- **"Renewable energy is free."** No. The capital cost is high; the LCOE is competitive in some regions but not all. The system must be designed and operated efficiently.

## Connections

- **Renewable Energy (Sem 6 theory).** System design is the practical application of solar cell, battery, and inverter technologies. The LCOE is the standard metric for comparing technologies.
- **Energy policy.** Government policies (subsidies, taxes, renewable portfolio standards) shape the deployment of renewable energy. The LCOE is a key input to policy decisions.
- **Climate change.** Renewable energy is essential for mitigating climate change. The transition from fossil fuels to renewables requires a massive deployment of solar, wind, and storage systems.
- **Economics.** The LCOE of solar and wind has decreased by 90 % in the last decade, making them competitive with fossil fuels in many regions. The economics drives the deployment.

## Quick Check

1. What is the daily energy consumption?
2. What is the solar panel area needed?
3. What is the battery capacity for 2 days of autonomy?
4. What is the LCOE?
5. What is the capacity factor of a solar PV system in India?
6. What is the difference between PWM and MPPT charge controllers?
7. What is the depth of discharge?
8. What is the round-trip efficiency?

## Takeaway

The energy system design is the capstone of the Renewable Energy Lab. The lab's discipline — careful load estimation, accurate solar resource data, proper system sizing, honest LCOE calculation — is the same discipline that runs through every renewable energy project. The same principles (energy balance, component efficiency, LCOE) apply to all renewable technologies, from the small off-grid system to the large utility-scale plant. The system you design today is a sample of the work that a renewable energy engineer does; the skills learned here are directly transferable to a career in the renewable energy industry.
