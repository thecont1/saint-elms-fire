***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: renewable-energy-and-applications
courseName: Renewable Energy and Applications (Physics Option A)
moduleId: renewable-energy-and-applications-module-1
moduleName: Energy Fundamentals and Solar Energy
lessonId: renewable-energy-and-applications-m1-l1
lessonName: Global and Indian Energy Context, Units and Energy Flows
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - thermal-physics-and-statistical-mechanics-m1-l3
  - thermal-physics-and-statistical-mechanics-m2-l2
learningObjectives:
  - Convert fluently between energy and power units (J, kWh, TWh, toe, EJ) and between primary, final and useful energy.
  - Describe the global and Indian energy mix in order-of-magnitude terms and state the physical size of the solar, wind and fossil resources.
  - Compute capacity factor, conversion-chain efficiency and the carbon intensity of a kilowatt-hour from first principles.
  - Explain why the second law limits every thermal conversion step and locate renewables within the Earth's energy budget.
concepts:
  - Primary, final and useful energy
  - Kilowatt-hour and tonne of oil equivalent
  - Capacity factor
  - Conversion-chain efficiency
  - Carbon intensity of electricity
  - Earth's energy budget
  - Indian energy mix
tags:
  - physics
  - renewable-energy-and-applications
  - energy-context
  - energy-units
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
  - computational
***

# Global and Indian Energy Context, Units and Energy Flows

## Overview

Renewable energy is applied physics, but the applications only make sense against the scale of the problem. This lesson fixes the units of energy systems, distinguishes primary, final and useful energy, and traces the conversion losses between a lump of coal and the light in a room. We survey the global and Indian energy mix, introduce the capacity factor, derive the carbon intensity of a coal-fired kilowatt-hour, and show that the solar resource exceeds demand by four orders of magnitude, which is why the course concentrates on solar and wind.

## Learning Path

- **What you should already know**: the first law (Thermal Physics Lesson m1-l3); the Carnot limit (Thermal Physics Lesson m2-l2); unit conversion.
- **What this lesson adds**: energy accounting, practical units, the capacity factor, chain efficiency, carbon intensity and the size of the renewable resource.
- **What later lessons this will unlock**: insolation (Lesson m1-l2), photovoltaics (Lesson m1-l3), the Betz and Carnot limits (Lessons m2-l1 and m2-l3), levelised cost (Lesson m3-l2) and lifecycle analysis with the design case (Lesson m3-l3).

## Core Explanation

### Energy and power units

The SI unit of energy is the joule and of power the watt, $1\ \text{W} = 1\ \text{J s}^{-1}$. The **kilowatt-hour** is the energy delivered by one kilowatt in one hour:

$$1\ \text{kWh} = 10^3\ \text{W} \times 3600\ \text{s} = 3.6 \times 10^6\ \text{J} = 3.6\ \text{MJ}.$$

Its multiples are the MWh ($3.6\ \text{GJ}$), GWh and TWh ($3.6\ \text{PJ}$). In Indian usage 1 unit = 1 kWh, so 1 billion units = 1 TWh. The **tonne of oil equivalent** is defined as $41.868\ \text{GJ}$, so

$$1\ \text{toe} = 41.868\ \text{GJ} = 11.63\ \text{MWh}, \qquad 1\ \text{Mtoe} = 11.63\ \text{TWh}.$$

Global totals use exajoules, $1\ \text{EJ} = 10^{18}\ \text{J} = 23.9\ \text{Mtoe} = 278\ \text{TWh}$. Dividing annual energy by $8760\ \text{h}$ gives average power: $1\ \text{TWh}$ per year is $114\ \text{MW}$.

### Primary, final and useful energy

**Primary energy** is the energy content of the resource as extracted (coal, oil, gas, biomass, fission heat, wind, sunlight, reservoir water). **Final energy** is what is sold to the consumer, such as electricity at the meter; between them lie power-station and refinery losses and transmission and distribution (T&D) losses. **Useful energy** is the service wanted: light, motion, heat. Between final and useful lie end-use losses: an incandescent lamp converts about 5% of its input to visible light, an LED 30–40%, a petrol engine 25–30% to shaft work.

The efficiency of a chain of $n$ steps is the product of the step efficiencies,

$$\eta_{\text{chain}} = \prod_{i=1}^{n} \eta_i,$$

and the primary energy needed per unit of useful energy is $1/\eta_{\text{chain}}$. For a 38% coal station, 20% T&D losses and an incandescent lamp of 5%, $\eta_{\text{chain}} = 0.38 \times 0.80 \times 0.05 = 1.5\%$; a 35% LED lifts it to 10.6%, a sevenfold gain obtained at the end of the chain. The second law, which caps the thermal step at $\eta_{\text{Carnot}} = 1 - T_c/T_h$, dominates every fuel-burning route.

Non-thermal renewables deliver electricity directly. In the "direct equivalent" convention their primary energy is their electrical output; in the "substitution" convention it is multiplied by $1/0.38 \approx 2.6$ to represent the displaced fuel, so the apparent renewable share differs by 2.6 between conventions.

### The global and Indian energy picture

| Quantity (approximate, early 2020s) | World | India |
|---|---|---|
| Primary energy supply | $\sim 620\ \text{EJ yr}^{-1}$ ($\sim 20\ \text{TW}$) | $\sim 40\ \text{EJ yr}^{-1}$ ($\sim 1.3\ \text{TW}$) |
| Electricity generation | $\sim 30{,}000\ \text{TWh yr}^{-1}$ | $\sim 1{,}700\ \text{TWh yr}^{-1}$ |
| Electricity per capita | $\sim 3{,}500\ \text{kWh yr}^{-1}$ | $\sim 1{,}300\ \text{kWh yr}^{-1}$ |
| Fossil share of primary energy | $\sim 80\%$ | $\sim 85\%$ |
| Coal share of electricity | $\sim 35\%$ | $\sim 70\%$ |
| Installed generating capacity | $\sim 9{,}000\ \text{GW}$ | $\sim 450\ \text{GW}$ |
| Solar PV capacity installed | $\sim 1{,}500\ \text{GW}$ | $\sim 90\ \text{GW}$ |
| Wind capacity installed | $\sim 1{,}000\ \text{GW}$ | $\sim 47\ \text{GW}$ |
| Average grid carbon intensity | $\sim 480\ \text{g CO}_2\ \text{kWh}^{-1}$ | $\sim 710\ \text{g CO}_2\ \text{kWh}^{-1}$ |

In India demand grows at 5–7% per year, the system is coal-dominated (so each renewable kilowatt-hour displaces a high-carbon one), and the solar resource is excellent: $4.5$–$6.5\ \text{kWh m}^{-2}\ \text{day}^{-1}$ nationally, $5.2$–$5.6$ around Bengaluru (Lesson m1-l2). Wind concentrates in Tamil Nadu, Gujarat, Karnataka, Maharashtra and Rajasthan, with mean speeds of $7$–$8\ \text{m s}^{-1}$ at the best hub heights.

### Capacity factor

Installed capacity is a power; delivered energy is what the consumer pays for. The **capacity factor** connects them:

$$CF = \frac{E_{\text{annual}}}{P_{\text{rated}} \times 8760\ \text{h}}.$$

Typical values: 0.60–0.75 coal, 0.80–0.90 nuclear, 0.35–0.45 Indian hydro, 0.25–0.35 good onshore wind, 0.17–0.22 fixed-tilt PV in India. A low value reflects the resource, not a defect, but $1\ \text{GW}$ of PV delivers about one third of the energy of $1\ \text{GW}$ of coal, so convert capacity to energy before comparing technologies.

### Carbon intensity from combustion chemistry

Coal is approximately carbon, with a calorific value of $20$–$25\ \text{MJ kg}^{-1}$ for Indian coal. Burning $1\ \text{kg}$ of carbon yields $44/12 = 3.67\ \text{kg}$ of $\text{CO}_2$. Methane ($55\ \text{MJ kg}^{-1}$) yields $44/16 = 2.75\ \text{kg}$ per kilogram, or $50\ \text{g CO}_2\ \text{MJ}^{-1}$ against about $95$ for coal. With plant efficiency (38% coal, 55–60% combined-cycle gas) this gives $900$–$1000\ \text{g CO}_2\ \text{kWh}^{-1}$ for coal and $350$–$450$ for gas. Lifecycle values (Lesson m3-l3) are $10$–$15\ \text{g kWh}^{-1}$ for wind and $25$–$45$ for PV, almost all from manufacturing.

### The Earth's energy budget and the renewable resource

Above the atmosphere the Sun delivers $G_{sc} = 1361\ \text{W m}^{-2}$ (Lesson m1-l2). Intercepted by the Earth's disc of radius $R_E = 6371\ \text{km}$,

$$P_{\odot} = G_{sc}\,\pi R_E^2 = 1361 \times \pi \times (6.371 \times 10^6)^2 \approx 1.74 \times 10^{17}\ \text{W} = 174{,}000\ \text{TW}.$$

About 30% is reflected (the albedo), leaving $\sim 120{,}000\ \text{TW}$ absorbed; about $1\%$ drives the winds and $40\ \text{TW}$ is captured by photosynthesis. Geothermal heat flows out at $47\ \text{TW}$ and tidal dissipation is $3.7\ \text{TW}$.

Human primary energy use is about $20\ \text{TW}$, so solar input exceeds demand by nearly $10^4$ and wind by a few tens. Solar and wind scale; hydro, tidal, biomass and geothermal (Lesson m2-l3) are valuable but bounded; storage and grid integration (Module 3) are needed because solar and wind vary in time.

| Resource | Natural flow | Ratio to human demand ($20\ \text{TW}$) |
|---|---|---|
| Solar at top of atmosphere | $174{,}000\ \text{TW}$ | $8{,}700$ |
| Solar absorbed at surface | $\sim 90{,}000\ \text{TW}$ | $4{,}500$ |
| Wind (total dissipation) | $\sim 1{,}000\ \text{TW}$ | $50$ |
| Photosynthesis (net primary production) | $\sim 40\ \text{TW}$ | $2$ |
| Geothermal heat flow | $47\ \text{TW}$ | $2.3$ |
| Tidal dissipation | $3.7\ \text{TW}$ | $0.2$ |

### Energy flow diagrams

In a Sankey diagram arrow widths show energy flow. For India roughly two thirds of the primary energy entering the electricity sector leaves as waste heat, a consequence of the Carnot limit for steam at $540\ ^\circ\text{C}$ ($813\ \text{K}$) against cooling water at $300\ \text{K}$: $\eta_{\text{Carnot}} = 1 - 300/813 = 63\%$, and real plants achieve 35–40%. PV, wind and hydro remove this loss, which is why renewable electricity displaces about 2.6 times as much primary fossil energy.

## Key Ideas

- **Units**: $1\ \text{kWh} = 3.6\ \text{MJ}$; $1\ \text{toe} = 11.63\ \text{MWh}$; $1\ \text{EJ} = 278\ \text{TWh}$.
- **Primary, final, useful**: chain efficiency is the product of step efficiencies.
- **Capacity factor**: 0.2 for Indian PV, 0.3 wind, 0.65 coal.
- **Carbon intensity**: $3.67\ \text{kg CO}_2$ per kg carbon over plant efficiency; $900$–$1000\ \text{g kWh}^{-1}$ for coal.
- **Second law**: thermal conversion is capped by $1 - T_c/T_h$; PV, wind and hydro bypass it.
- **Scale**: solar input is $1.74 \times 10^{17}\ \text{W}$, about $10^4$ times demand; wind about 50 times.

## Worked Examples

### Example 1 — India's electricity as an average power and per capita

India generated about $1{,}740\ \text{TWh}$ of electricity for a population of $1.43 \times 10^9$. Express this as an average power and as per-capita consumption.

**Solution.** The average power is

$$\bar{P} = \frac{1.74 \times 10^{12}\ \text{kWh}}{8760\ \text{h}} = 1.99 \times 10^8\ \text{kW} \approx 199\ \text{GW}.$$

Per capita, $1.74 \times 10^{12}/1.43 \times 10^9 \approx 1{,}220\ \text{kWh}$ per year, an average draw of $1220/8760 = 139\ \text{W}$, about one incandescent lamp left on all year (the world average of $3{,}500\ \text{kWh}$ is $400\ \text{W}$). Installed capacity of $450\ \text{GW}$ exceeds average generation by 2.3, an aggregate capacity factor of about 0.44.

### Example 2 — Capacity factor of a solar plant

A $100\ \text{MW}$ (AC) PV plant in Karnataka generated $180\ \text{GWh}$ in a year. Find its capacity factor and full-power hours per day.

**Solution.** The energy at continuous rated power would be $100 \times 10^6\ \text{W} \times 8760\ \text{h} = 876\ \text{GWh}$, so

$$CF = \frac{180}{876} = 0.205.$$

The full-power equivalent is $0.205 \times 24\ \text{h} = 4.9\ \text{h}$ per day, consistent with $5.5\ \text{kWh m}^{-2}\ \text{day}^{-1}$ and a performance ratio near $0.8$ (Lesson m3-l3). A coal plant of the same rating with $CF = 0.65$ delivers $569\ \text{GWh}$, so replacing it takes $3.2\ \text{MW}$ of PV per MW, plus storage.

### Example 3 — Coal, primary energy and carbon per delivered kilowatt-hour

A coal station has efficiency 38% and T&D losses of 20%. The coal has calorific value $20\ \text{MJ kg}^{-1}$ and 50% carbon by mass. Find the primary energy, coal mass and $\text{CO}_2$ per kilowatt-hour delivered.

**Solution.** The chain efficiency is $0.38 \times 0.80 = 0.304$. One delivered kilowatt-hour is $3.6\ \text{MJ}$, so $E_{\text{prim}} = 3.6/0.304 = 11.8\ \text{MJ}$. The coal mass is $11.8/20 = 0.59\ \text{kg}$, with $0.296\ \text{kg}$ of carbon, so

$$m_{\text{CO}_2} = 0.296 \times \frac{44}{12} = 1.09\ \text{kg CO}_2\ \text{per kWh delivered}.$$

At the generator terminals the figure is $1.09 \times 0.8 = 0.87\ \text{kg kWh}^{-1}$, in line with the quoted range for coal. A Bengaluru rooftop system generating $1{,}500\ \text{kWh}$ per kWp per year avoids about $1.6$ tonnes of $\text{CO}_2$ per kWp per year.

## Common Misconceptions

- **"A 1 GW solar farm replaces a 1 GW coal plant."** At capacity factors of 0.2 and 0.65, 1 GW of PV produces one third of the annual energy of 1 GW of coal, and only in daylight.
- **"Renewables are a small share of primary energy, so they hardly matter."** The direct-equivalent convention understates them by 2.6.
- **"Power-station efficiency matters more than appliance efficiency."** Equal fractional gains are worth the same, but appliance gains are often larger (5% to 35% for lighting) and avoid upstream losses.
- **"A low wind capacity factor means unreliable turbines."** Availability exceeds 97%; the 0.25–0.35 reflects wind statistics (Lesson m2-l2).
- **"Natural gas is clean."** Gas emits half the $\text{CO}_2$ of coal, but $400\ \text{g kWh}^{-1}$ is ten times the lifecycle intensity of PV, before methane leakage.

## Connections

- Chain efficiency and the Carnot cap come from Thermal Physics and Statistical Mechanics (Lessons m1-l3 and m2-l2); exergy (Lesson m3-l3) quantifies the quality of heat.
- The solar constant connects to blackbody radiation (Introduction to Quantum Mechanics, Lesson m1-l1) and stellar luminosity in the Astrophysics minor: $3.83 \times 10^{26}\ \text{W}$ over a sphere of radius $1\ \text{AU}$ gives $1361\ \text{W m}^{-2}$.
- The Renewable Energy Lab (renewable-energy-lab, Lesson m1-l6) uses these units to size an off-grid system and compute its levelised cost.
- The $47\ \text{TW}$ geothermal flow is largely radiogenic heat from the decay chains of Nuclear Physics (Lesson m2-l2).
- Capacity factors feed the levelised cost of Lesson m3-l2.

## Quick Check

1. Convert $250\ \text{Mtoe}$ to TWh and to EJ, and express it as an average power in GW.
2. A household uses $8\ \text{kWh}$ per day. What is its average power, and how many such households could a $1\ \text{MW}$ PV plant with $CF = 0.20$ supply?
3. Explain primary versus final energy, and why the renewable share depends on the accounting convention.
4. A combined-cycle gas plant has efficiency 58% and burns methane of calorific value $55\ \text{MJ kg}^{-1}$. Estimate its carbon intensity in $\text{g CO}_2\ \text{kWh}^{-1}$ at the generator terminals.
5. The Sun delivers $1.74 \times 10^{17}\ \text{W}$ to the Earth. If PV at 20% efficiency with capacity factor 0.2 supplied the whole $20\ \text{TW}$ of human primary demand, what module area would be needed, and what fraction of India's land area ($3.3 \times 10^6\ \text{km}^2$) is this? (Take $1000\ \text{W m}^{-2}$ as the rating irradiance.)

## Takeaway

- Energy systems use kWh, toe and EJ; annual energy over 8760 h gives average power.
- Losses multiply along the chain; the Carnot-limited thermal step is absent for PV, wind and hydro.
- The capacity factor links installed power to delivered energy; check it first when comparing technologies.
- Coal electricity emits about $1\ \text{kg CO}_2\ \text{kWh}^{-1}$; the Indian grid $0.7$.
- Solar input exceeds human demand by about $10^4$ and wind by about $50$, which is why the course centres on them.
