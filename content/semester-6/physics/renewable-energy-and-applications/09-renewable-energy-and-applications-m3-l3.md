***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: renewable-energy-and-applications
courseName: Renewable Energy and Applications (Physics Option A)
moduleId: renewable-energy-and-applications-module-3
moduleName: Storage, Grid Integration and System Design
lessonId: renewable-energy-and-applications-m3-l3
lessonName: Lifecycle Analysis, Energy Payback and a Rooftop Design Case
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - renewable-energy-and-applications-m3-l2
  - renewable-energy-and-applications-m3-l1
  - renewable-energy-and-applications-m1-l3
learningObjectives:
  - Compute energy payback time, energy return on investment and lifecycle carbon intensity for a photovoltaic system.
  - Size a rooftop PV array and battery for a household load from monthly insolation, performance ratio and depth of discharge.
  - Compute the levelised cost of the PV system and of stored energy, and the simple payback, for the design case.
  - Judge when a battery is justified by economics and when by resilience.
concepts:
  - Lifecycle assessment
  - Energy payback time
  - Energy return on investment
  - Lifecycle carbon intensity
  - Peak sun hours and performance ratio
  - Array and battery sizing
  - Levelised cost of storage
tags:
  - physics
  - renewable-energy-and-applications
  - lifecycle-analysis
  - design-case
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - computational
  - conceptual
  - short-answer
***

# Lifecycle Analysis, Energy Payback and a Rooftop Design Case

## Overview

Every technology in this course has been judged so far by what it produces. This lesson asks what it costs in energy and carbon to make, and then brings the whole course together in one worked design: a rooftop PV and battery system for a household in Bengaluru with a 3 kW sanctioned load. Lifecycle assessment adds up the energy and emissions of manufacture, transport, installation, operation and disposal, and expresses the result as an energy payback time, an energy return on investment and grams of carbon dioxide per kilowatt-hour. The design case then uses the insolation data of Lesson m1-l2, the module behaviour of Lesson m1-l3, the battery parameters of Lesson m3-l1 and the cost and LCOE method of Lesson m3-l2 to size, price and evaluate a real system, and draws an honest conclusion about the role of the battery.

## Learning Path

- **What you should already know**: the monthly insolation table and peak sun hours (Lesson m1-l2); module temperature and performance ratio (Lesson m1-l3); battery sizing (Lesson m3-l1); CRF, LCOE and metering (Lesson m3-l2).
- **What this lesson adds**: lifecycle accounting, EPBT and EROI, carbon payback, and a complete numerical design with cost, payback and levelised cost.
- **What later lessons this will unlock**: this is the closing lesson of the course; the method carries to the off-grid design project of the Renewable Energy Lab (Lesson m1-l6).

## Core Explanation

### Lifecycle assessment, EPBT and EROI

A lifecycle assessment (ISO 14040) fixes a functional unit (here, one kilowatt-hour delivered), inventories all energy and material inputs from mining to disposal, and converts them into impacts. For energy systems two ratios summarise it. The **energy payback time** is the time the system takes to deliver the primary energy that went into making it:

$$\text{EPBT} = \frac{E_{emb}}{E_{yr}\,f_p}, \qquad f_p \approx 2.6,$$

where $E_{emb}$ is the embodied primary energy, $E_{yr}$ the annual electrical output and $f_p$ the primary-energy factor of Lesson m1-l1 that converts electricity to the fossil fuel it displaces. The **energy return on investment** is the lifetime output (primary equivalent) over the embodied energy, $\text{EROI} = T_{life}/\text{EPBT}$ when output is constant. With annual degradation $d$ the lifetime yield is $Y_{life} = Y_1[1-(1-d)^n]/d$, and the **carbon intensity** is $E_{CO_2,emb}/Y_{life}$. The **carbon payback** is the time to avoid the embodied carbon at the grid's emission factor.

Typical lifecycle intensities are $25$–$45\ \text{g kWh}^{-1}$ for PV and $10$–$15$ for wind, against $350$–$450$ for gas and $900$–$1000$ for coal (Lesson m1-l1). The dominant PV input is the refining of polysilicon and the growth of crystals, which are electricity-intensive, so a module made with a coal-heavy grid carries more carbon than one made with hydropower. Boundaries must be stated, since inclusion of batteries, recycling and transmission changes the result.

### The household and its resource

The household in the design case has a sanctioned load of $3$ kW and uses $10$ kWh per day ($300$ kWh per month, $3650$ kWh per year). Of this, $4.5$ kWh falls in daylight (6:00 to 18:00) and $5.5$ kWh in the evening and night. The array is south-facing at a $13^\circ$ tilt, so the insolation is the GHI of the Lesson m1-l2 table times $5.5/5.2 = 1.058$, and the system performance ratio is $0.78$ (Lesson m1-l3). The daily output of a $3\ \text{kW}_p$ array is $3\times\text{GHI}\times1.058\times0.78$:

| Month | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| kWh/day | 12.9 | 14.9 | 16.1 | 15.8 | 14.4 | 11.4 | 10.4 | 10.9 | 12.1 | 11.6 | 11.4 | 11.9 |

The annual sum is $4669$ kWh, or $1556\ \text{kWh per kW}_p$ and $12.8$ kWh per day; July, the worst month, gives $10.4$.

### Sizing and cost rules

Three rules turn the load and the resource into a design. The **array** must deliver the daytime load plus the evening load routed through the battery, divided by the worst-month yield per kilowatt: $P_{PV} = [L_d + L_e/\eta_{path}]/(\text{PSH}_{min}\,\text{PR})$. The **battery** must supply the evening load at DC and respect the depth of discharge: $E_{bat} = L_e/(\eta_{inv}\,\text{DoD})$. The **cost** of each is its present cost, including replacements and O&M, divided by the discounted energy it delivers, with the annuity factor $[1-(1+r)^{-n}]/r$ of Lesson m3-l2; the same ratio applied to the battery alone is the **levelised cost of storage** (LCOS).

## Key Ideas

- **EPBT** $= E_{emb}/(E_{yr}f_p)$; rooftop PV in India repays its energy in $1$–$2$ years of a $25$-year life.
- **EROI** $\approx T_{life}/\text{EPBT}$; lifecycle carbon is embodied CO$_2$ over lifetime yield.
- **Sizing**: array $= $ daily need $/$ (worst-month PSH $\times$ PR); battery $=$ evening load $/(\eta_{inv}\,\text{DoD})$.
- **LCOE and LCOS**: PV costs about ₹4 per kWh; stored energy about ₹14 per kWh.
- **Battery economics**: under net metering or a small export spread, a battery does not pay for itself; it buys resilience.

## Worked Examples

### Example 1 — Energy payback, EROI and carbon payback

A $1\ \text{kW}_p$ rooftop system uses $5\ \text{m}^2$ of modules (20% efficiency) with an embodied energy of $3500\ \text{MJ m}^{-2}$ primary energy, plus $3500$ MJ for mounting, inverter and wiring, and $1300$ kg CO$_2$ of embodied emissions. It yields $1556$ kWh in year one, degrades at $0.5\%$ per year and lasts $25$ years. The Indian grid emits $0.71\ \text{kg kWh}^{-1}$. Find EPBT, EROI, lifecycle carbon intensity and carbon payback.

**Solution.** The embodied energy is $5\times3500+3500 = 21\,000$ MJ $= 5833$ kWh of primary energy. The annual primary-equivalent output is $1556\times2.6 = 4046$ kWh, so

$$\text{EPBT} = \frac{5833}{4046} = 1.44\ \text{years}.$$

The lifetime yield is $1556\,[1 - 0.995^{25}]/0.005 = 36\,660$ kWh, so $\text{EROI} = 36\,660\times2.6/5833 = 16$. The carbon intensity is $1300/36\,660 = 35\ \text{g kWh}^{-1}$, inside the $25$–$45$ range, and the carbon payback is $1300/(1556\times0.71) = 1.18$ years. Over its life the system avoids $36\,660\times0.71 = 26$ tonnes of CO$_2$ per kW$_p$.

### Example 2 — Sizing the array and the battery

Size the PV array so that the house can run entirely on solar in the worst month, and size the LFP battery for the evening load, with $\text{DoD} = 0.8$, inverter efficiency $0.96$ and a battery-path efficiency (PV to AC load via the battery) of $0.90$. Then find the daily energy flows in an average month.

**Solution.** In July the output of $1\ \text{kW}_p$ is $4.2\times1.058\times0.78 = 3.47$ kWh. The daily need is the direct daytime load plus the PV energy needed to deliver the evening load through the battery, $4.5 + 5.5/0.90 = 10.61$ kWh, so the array is $10.61/3.47 = 3.06\ \text{kW}_p$, i.e. $3\ \text{kW}_p$ (July's shortfall is $0.2$ kWh per day, met from the grid). The battery must deliver $5.5/0.96 = 5.73$ kWh at DC, so the nominal capacity is $5.73/0.8 = 7.16$ kWh; a $51.2$ V, $140$ Ah LFP pack ($7.17$ kWh) fits. At the $3$ kW peak the discharge current is $58.6$ A, or $0.42\,C$. In an average month ($12.8$ kWh per day): $4.5$ kWh is used directly, $6.11$ kWh charges the battery and $12.8 - 4.5 - 6.11 = 2.2$ kWh per day ($800$ kWh per year) is exported. The self-consumption is $(4.5+6.11)/12.8 = 83\%$.

### Example 3 — Cost, LCOE and payback

The installed cost of the $3\ \text{kW}_p$ PV system is ₹55,000 per kW$_p$ ($₹1{,}65{,}000$), with ₹2000 per year of O&M and a ₹20,000 inverter replacement in year $12$. The hybrid inverter premium is ₹30,000 and the battery costs ₹22,000 per kWh, replaced in years $10$ and $20$ at the same price. Use $r = 8\%$, $n = 25$, a retail tariff of ₹7.5 per kWh, an export rate of ₹3 and net billing. Find the LCOE of the PV and the levelised cost of the battery energy, and judge the battery.

**Solution.** The annuity factor is $(1 - 1.08^{-25})/0.08 = 10.675$. The present cost of the PV system is $165\,000 + 20\,000\times1.08^{-12} + 2000\times10.675 = 165\,000 + 7942 + 21\,350 = ₹1{,}94{,}292$. The discounted energy with $0.5\%$ degradation is $4669\sum_t0.995^{t-1}1.08^{-t} = 4669\times10.25 = 47\,860$ kWh, so

$$\text{LCOE}_{PV} = \frac{194\,292}{47\,860} = ₹4.06\ \text{kWh}^{-1},$$

well below the retail tariff. For the battery, the capital is $7.17\times22\,000 = ₹1{,}57{,}740$ plus the inverter premium, so the present cost is $187\,740 + 157\,740\,(1.08^{-10} + 1.08^{-20}) = 187\,740 + 106\,907 = ₹2{,}94{,}647$. It delivers $5.5\times365 = 2008$ kWh per year, a discounted $21\,430$ kWh, giving

$$\text{LCOS} = \frac{294\,647}{21\,430} = ₹13.75\ \text{kWh}^{-1}.$$

Each shifted kilowatt-hour gains only the retail-export spread of $7.5 - 3.0 = ₹4.5$. The annual saving is $3650\times7.5 + 800\times3 = ₹29\,763$ for PV and battery against ₹21 399 for PV alone, so the battery adds ₹8364 per year but costs ₹27 600 per year to annualise. Simple payback is $352\,740/29\,763 = 11.9$ years for the complete system and $165\,000/21\,399 = 7.7$ years for PV alone ($5.4$ years under net metering). The battery is justified by resilience during outages, by time-of-day tariffs or by a future price fall, not by arbitrage.

## Common Misconceptions

- **"Solar panels take more energy to make than they ever produce."** A rooftop system repays its energy in $1$–$2$ years and returns about sixteen times its embodied energy in $25$.
- **"Zero emissions means zero lifecycle emissions."** Manufacture, mostly of silicon, emits $25$–$45\ \text{g kWh}^{-1}$; the grid used in manufacture matters.
- **"Size the array for the annual average."** Sizing for the average leaves the worst month short; use the worst-month insolation.
- **"A bigger battery always improves the economics."** Each kilowatt-hour of capacity adds cost whether or not it is cycled; the LCOS is higher if the battery is used less than once daily.
- **"The cheapest LCOE is the best system."** The PV LCOE of ₹4 ignores that only part of the energy is delivered when needed.

## Connections

- The insolation table and tilt factor come from Lesson m1-l2, and the module temperature behaviour from Lesson m1-l3; the grid carbon intensity is from Lesson m1-l1.
- The sizing method is the off-grid system design of the Renewable Energy Lab (renewable-energy-lab, Lesson m1-l6), including battery autonomy, charge controller and inverter.
- Lifecycle accounting of energy is an application of the first law and of the exergy concepts in Thermal Physics and Statistical Mechanics (Lessons m1-l3 and m3-l3).
- The semiconductor material chain behind embodied energy is the silicon of Solid State Physics (Lesson m3-l3); annual degradation compounds like radioactive decay (Nuclear Physics, Lesson m2-l2), since $(1-d)^n\approx e^{-dn}$.
- Discounting and degradation sums are geometric series, and the exponential models of Differential Equations (Lesson m3-l3) describe the same compounding.

## Quick Check

1. Define EPBT and EROI, and say why a primary-energy factor appears in the EPBT of an electricity source.
2. A module has $4000\ \text{MJ m}^{-2}$ embodied energy and a $21\%$ efficiency. Find the embodied energy per kW$_p$ and its EPBT if yield is $1500\ \text{kWh kW}_p^{-1}\text{yr}^{-1}$ with $f_p = 2.6$ (ignore BOS).
3. For the household design, recompute the array size if the worst-month insolation falls to $4.0\ \text{kWh m}^{-2}\text{day}^{-1}$ GHI.
4. Why does a battery that is cycled only half the days double the LCOS?
5. Using Example 3, what retail-export spread would make the battery break even in energy economics?

## Takeaway

- Lifecycle analysis puts numbers on embodied energy and carbon: rooftop PV in Bengaluru repays energy in about $1.4$ years and carbon in about $1.2$, with a lifecycle intensity near $35\ \text{g kWh}^{-1}$.
- A design starts from the load and the worst-month resource: $10$ kWh per day and $4.2$ GHI give $3\ \text{kW}_p$ and a $7.2$ kWh battery.
- The PV system produces energy at about ₹4 per kWh; stored energy costs about ₹14 per kWh.
- A battery in a net-metered or small-spread market buys resilience, not savings; payback is $5$–$8$ years without it and $12$ years with it.
