***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: renewable-energy-and-applications
courseName: Renewable Energy and Applications (Physics Option A)
moduleId: renewable-energy-and-applications-module-2
moduleName: Wind Power and Other Renewable Sources
lessonId: renewable-energy-and-applications-m2-l3
lessonName: Hydro, Tidal, Biomass and Geothermal Energy and the Carnot Bound
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - renewable-energy-and-applications-m2-l2
  - thermal-physics-and-statistical-mechanics-m2-l2
  - mechanics-m3-l1
learningObjectives:
  - Derive the hydroelectric power equation and apply it to a small run-of-river site.
  - Derive the energy of a tidal barrage and compare tidal-stream power density with wind.
  - Estimate the efficiency of photosynthesis and the land requirement of biomass electricity.
  - Apply the Carnot and exergy bounds to heat-driven sources such as geothermal and biomass plants, and compare all sources by their physical limits.
concepts:
  - Hydroelectric power equation
  - Net head
  - Tidal barrage energy
  - Tidal stream power density
  - Photosynthetic efficiency
  - Geothermal binary cycle
  - Carnot and exergy bounds
tags:
  - physics
  - renewable-energy-and-applications
  - hydro-tidal-biomass-geothermal
  - carnot-bound
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# Hydro, Tidal, Biomass and Geothermal Energy and the Carnot Bound

## Overview

Lesson m1-l1 showed that solar and wind are the resources that can scale to human demand, and that hydro, tidal, biomass and geothermal energy are of the order of demand or less. They matter nonetheless: hydropower is the oldest and most dispatchable renewable, biomass supplies cooking and process heat to hundreds of millions, and geothermal and tidal power are firm in a way that wind and solar are not. For each we give the formula for the power, the physical bound on conversion efficiency and a worked number. Mechanical sources (hydro, tidal) are limited by friction and, for free streams, by a Betz-type argument; heat-driven sources (biomass, geothermal, solar thermal) are limited by the second law. We close by comparing the limits that govern every technology in the course.

## Learning Path

- **What you should already know**: mechanical energy and power (Mechanics Lesson m3-l1); heat engines and the Carnot limit (Thermal Physics Lesson m2-l2); the resource sizes of Lesson m1-l1 and the Betz analysis of Lesson m2-l1.
- **What this lesson adds**: the hydropower equation, tidal barrage and stream energy, the efficiency of photosynthesis, the geothermal binary cycle and the exergy bound.
- **What later lessons this will unlock**: pumped-hydro and thermal storage (Lesson m3-l1), the dispatchability of these sources in the grid (Lesson m3-l2) and the lifecycle and cost comparison (Lesson m3-l3).

## Core Explanation

### Hydropower

Water of density $\rho$ falling through a net height $H$ releases $\rho gH$ of energy per unit volume. A volumetric flow $Q$ therefore carries power $\rho gQH$, and the electrical output of a plant of overall efficiency $\eta$ is

$$P = \eta\rho g Q H.$$

The **net head** is the gross height between intake and tailwater minus the friction losses $h_f$ in the penstock. Overall efficiency $\eta = \eta_{turbine}\eta_{generator}\eta_{mechanical}$ is $0.80$–$0.92$ for modern machines, the highest of any energy converter in this course, because the conversion is mechanical to mechanical and no Carnot limit arises. The turbine is chosen by head: Pelton wheels (impulse) above about $300$ m, Francis turbines from about $30$ to $300$ m, Kaplan or propeller turbines below about $30$ m. India classes plants up to $25$ MW as **small hydro**, mostly run-of-river schemes in the Western Ghats and Himalaya with a capacity factor of $0.3$–$0.5$ set by the monsoon.

### Tidal energy

The tides are the response of the oceans to the Moon's and Sun's differential gravity (Astrophysics II, Lesson m1-l3), dissipating $3.7$ TW in total. A **tidal barrage** closes an estuary of area $A$. At high water the basin is full; at low water the sea level has dropped by the tidal range $R$ and the basin water can be released through turbines. The mass above sea level is $\rho AR$ and its centre of mass falls $R/2$, so the energy per tidal cycle is

$$E = \rho AR\cdot g\cdot\frac R2 = \tfrac12\rho gAR^2.$$

The semidiurnal cycle has period $12.42$ h, so the mean power is $E/(12.42\ \text{h})$. The quadratic dependence on $R$ means that only sites with ranges above about $5$ m are attractive; the Gulfs of Khambhat and Kutch on the Gujarat coast are the best Indian candidates. The head falls as the basin empties, so real plants capture only $25$–$40\%$ of $E$. **Tidal streams** are exploited like wind with rotors in the flowing water: the power density $\tfrac12\rho v^3$ uses $\rho = 1025\ \text{kg m}^{-3}$, about $850$ times that of sea-level air, so a $2.5\ \text{m s}^{-1}$ current carries $8.0\ \text{kW m}^{-2}$, fifteen times a $10\ \text{m s}^{-1}$ wind at Bengaluru ($0.53\ \text{kW m}^{-2}$), and is predictable years ahead, but the Betz limit applies to the rotor as before.

### Biomass and photosynthesis

Plants capture sunlight with an efficiency fixed by photosynthesis: only photons of $400$–$700$ nm are used ($47\%$ of the spectrum), a fraction is reflected, and the quantum requirement of fixing a $\text{CO}_2$ molecule sets a theoretical maximum of about $4.6\%$ for C3 and $6\%$ for C4 plants. In the field the annual mean is $0.5$–$1\%$. For a high-yield energy grass such as Napier grass producing $40$ tonnes of dry matter per hectare per year at $17\ \text{MJ kg}^{-1}$, the stored energy is $40\,000\times17 = 680\ \text{GJ ha}^{-1}\text{yr}^{-1}$, or $68\ \text{MJ m}^{-2}$. Bengaluru receives $5.3\times365\times3.6 = 6964\ \text{MJ m}^{-2}\text{yr}^{-1}$ of insolation, so the efficiency is $68/6964 = 0.98\%$.

Burning the biomass to raise steam subjects it to the Carnot limit of its cycle. A boiler at $500\ ^\circ\text{C}$ ($773$ K) rejecting heat at $30\ ^\circ\text{C}$ ($303$ K) has $\eta_C = 1 - 303/773 = 61\%$, but real steam plants of a few MW reach $25$–$30\%$. Anaerobic digestion (biogas from dung and crop residue) avoids the steam cycle for cooking. The land demand is the real limit: electricity per hectare is $680\ \text{GJ}\times0.27 = 184\ \text{GJ} = 51\ \text{MWh}$ per year, against roughly $860\ \text{MWh}$ for PV on a hectare, a factor of seventeen.

### Geothermal energy and the exergy bound

Heat flows from the Earth at $65\ \text{mW m}^{-2}$ on continents, and the temperature rises $25$–$30\ \text{K}$ per kilometre. Where hot water or steam lies near the surface, the heat is extracted by wells. Indian resources (Puga in Ladakh, Tattapani in Chhattisgarh) are low-enthalpy, with reservoir temperatures $80$–$150\ ^\circ\text{C}$, suited to **binary-cycle** plants in which the geofluid heats a low-boiling working fluid (an organic Rankine cycle).

The Carnot formula $\eta_C = 1 - T_c/T_h$ applies at a fixed hot temperature, but a geofluid cools as it gives up heat. The maximum work from a stream of mass flow $\dot m$ and specific heat $c$ cooled from $T_1$ to $T_2$ with environment $T_0$ comes from a reversible engine on each slice, with efficiency $1 - T_0/T$:

$$W_{max} = \int_{T_2}^{T_1}\left(1 - \frac{T_0}{T}\right)\dot mc\,dT = \dot mc\left[(T_1-T_2) - T_0\ln\frac{T_1}{T_2}\right].$$

This **exergy** bound is lower than the Carnot value at $T_1$. A further correction applies to engines producing finite power: with finite-rate heat transfer, the efficiency at maximum power is the Curzon–Ahlborn value $1-\sqrt{T_c/T_h}$, which describes real plants better than Carnot.

### A unified comparison of limits

| Source | Governing bound | Value | Typical real value |
|---|---|---|---|
| Hydro | friction only | none | $0.85$–$0.92$ |
| Wind, tidal stream | Betz | $0.593$ | $0.45$–$0.50$ |
| Single-junction PV | Shockley–Queisser | $0.33$ | $0.20$–$0.23$ |
| Tower solar thermal ($565\ ^\circ\text{C}$) | Carnot | $0.64$ | $0.40$ (cycle) |
| Biomass steam ($500\ ^\circ\text{C}$) | Carnot | $0.61$ | $0.25$–$0.30$ |
| Geothermal binary ($150\ ^\circ\text{C}$) | Carnot | $0.28$ | $0.10$–$0.12$ |

The lower the source temperature, the lower the ceiling: geothermal heat is free but converts poorly, while mechanical sources convert well but the resource is limited.

## Key Ideas

- **Hydropower**: $P = \eta\rho gQH$ with net head after friction; mechanical conversion reaches $0.85$–$0.92$.
- **Tidal barrage**: $E = \tfrac12\rho gAR^2$ per cycle; only ranges above about $5$ m are practical.
- **Tidal stream**: $\tfrac12\rho v^3$ with seawater density, subject to the Betz limit.
- **Photosynthesis**: field efficiency about $1\%$; biomass electricity needs about seventeen times the land of PV.
- **Carnot and exergy**: $\eta_C = 1-T_c/T_h$; for a cooling stream $W_{max} = \dot mc[\Delta T - T_0\ln(T_1/T_2)]$.
- **Limits differ by source type**: friction (hydro), Betz (wind, tidal stream), Shockley–Queisser (PV), Carnot (all heat-driven).

## Worked Examples

### Example 1 — A small run-of-river plant

A stream in the Western Ghats provides a gross head of $44$ m with a penstock loss of $4$ m, and a design flow of $1.5\ \text{m}^3\text{s}^{-1}$. The overall efficiency is $0.85$ and the capacity factor $0.5$. Find the rated power, the annual energy and the number of people supplied at $1220\ \text{kWh}$ per person per year.

**Solution.** The net head is $H = 44 - 4 = 40$ m, so

$$P = 0.85\times1000\times9.81\times1.5\times40 = 500\ \text{kW}.$$

The annual energy is $E = 500\times8760\times0.5 = 2.19\ \text{GWh}$. At $1220\ \text{kWh}$ per person this supplies $2.19\times10^6/1220 = 1800$ people. The head suggests a Francis or a Kaplan turbine.

### Example 2 — A tidal barrage

A barrage encloses a basin of $100\ \text{km}^2$ in a gulf with a mean range $R = 6$ m. Seawater has $\rho = 1025\ \text{kg m}^{-3}$. Find the energy per tide, the ideal mean power and the annual energy at a capture efficiency of $0.30$.

**Solution.** With $A = 10^8\ \text{m}^2$,

$$E = \tfrac12(1025)(9.81)(10^8)(6)^2 = 1.81\times10^{13}\ \text{J} = 5030\ \text{MWh}.$$

Dividing by the cycle $12.42\times3600 = 44\,712$ s gives a mean power of $405$ MW. With a capture efficiency of $0.30$, the mean output is $121$ MW and the annual energy is $121\times8760 = 1.06\ \text{TWh}$. Unlike wind the output is predictable, but it peaks twice daily and ignores demand. Because $E\propto R^2$, a site with $R = 3$ m and the same area would give a quarter of this.

### Example 3 — Geothermal binary plant and the exergy bound

A well delivers brine at $100\ \text{kg s}^{-1}$ at $150\ ^\circ\text{C}$, cooled to $80\ ^\circ\text{C}$ ($c = 4.19\ \text{kJ kg}^{-1}\text{K}^{-1}$) in a binary plant with a $30\ ^\circ\text{C}$ environment. Compare the thermal power with the Carnot, exergy and real electrical outputs, taking the real plant to convert $12\%$ of the heat.

**Solution.** The heat taken is $Q = 100\times4.19\times70 = 29.3$ MW. The Carnot efficiency at the inlet is $1 - 303.15/423.15 = 0.284$, which would give $8.3$ MW, but this overstates the limit because the brine cools. The exergy bound is

$$W_{max} = 100\times4.19\times\left[70 - 303.15\ln\frac{423.15}{353.15}\right] = 419\times(70 - 55.0) = 6.28\ \text{MW},$$

i.e. $21\%$ of the heat. A real plant converting $12\%$ gives $3.5$ MW, which is $56\%$ of the exergy bound. The remaining $25.8$ MW is rejected to the cooling system.

## Common Misconceptions

- **"Hydropower is free of limits."** It is limited by the water supply, the head and the monsoon cycle; run-of-river plants in India deliver less than half of their rated energy.
- **"Tidal energy is like wave energy."** Tides arise from the Moon and Sun and are periodic and predictable; waves come from wind and are variable.
- **"Biomass is automatically carbon-neutral."** Regrowth takes years and fertiliser and transport add emissions.
- **"Geothermal heat is limited by Carnot at the well temperature."** The relevant bound is the exergy of the cooling stream; real plants reach about half of it.
- **"Higher efficiency means a better source."** A $12\%$ efficient geothermal plant at $CF \approx 0.9$ delivers more energy per installed megawatt than many intermittent sources.

## Connections

- The hydro equation is the work–energy theorem of Mechanics (Lesson m3-l1) applied to a flowing mass; Bernoulli's theorem accounts for the pressure head in the penstock.
- The Carnot cycle, entropy and exergy arguments are those of Thermal Physics and Statistical Mechanics (Lessons m2-l2, m2-l3 and m3-l3).
- Tides arise from differential gravity treated in Astrophysics II (Lesson m1-l3, tidal forces), and the $3.7$ TW dissipation is a tidal-friction effect in the Earth–Moon system.
- The geothermal heat flow of $47$ TW is largely radiogenic, from the decay chains of Nuclear Physics (Lesson m2-l2), and the Earth's temperature gradient is a conduction problem from Thermal Physics (Lesson m1-l1).
- Photosynthetic efficiency links the solar spectrum of Lesson m1-l2 to the chemistry of fuels, and the comparison table is taken up again in the lifecycle analysis of Lesson m3-l3.

## Quick Check

1. A plant has a net head of $120$ m, a flow of $0.8\ \text{m}^3\text{s}^{-1}$ and $\eta = 0.88$. Find the power and say which turbine type is appropriate.
2. Derive the energy of a tidal barrage per cycle and find it for $A = 25\ \text{km}^2$, $R = 8$ m.
3. Estimate the photosynthetic efficiency for a crop yielding $20$ t dry matter per hectare per year at $16\ \text{MJ kg}^{-1}$ under $6000\ \text{MJ m}^{-2}\text{yr}^{-1}$.
4. Compute the Carnot efficiency of a geothermal source at $120\ ^\circ\text{C}$ with a $25\ ^\circ\text{C}$ sink, and explain why a real plant achieves less.
5. Why do hydro and wind have such different ceilings, and which law sets each?

## Takeaway

- Hydropower $P = \eta\rho gQH$ is limited by flow and head, with efficiency up to $0.9$ because no heat engine is involved.
- A tidal barrage yields $\tfrac12\rho gAR^2$ per cycle; tidal streams have fifteen times the power density of a good wind but obey the same Betz limit.
- Biomass converts about $1\%$ of insolation to chemical energy, so electricity from biomass uses seventeen times more land than PV.
- Heat-driven sources are bounded by Carnot, and more tightly by the exergy of the cooling stream; geothermal binary plants reach $10$–$12\%$.
- Each technology has its own physical ceiling: friction, Betz, Shockley–Queisser or Carnot.
