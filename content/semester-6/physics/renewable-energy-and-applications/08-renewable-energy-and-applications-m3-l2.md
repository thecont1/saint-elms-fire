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
lessonId: renewable-energy-and-applications-m3-l2
lessonName: Grid Integration, Inverters, Net Metering and LCOE
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - renewable-energy-and-applications-m3-l1
  - basic-electronics-m2-l1
  - electricity-and-magnetism-m3-l3
learningObjectives:
  - Describe the variability of solar and wind generation, the net-load (duck) curve and the statistical benefit of aggregation.
  - Derive the output voltage of a PWM H-bridge inverter and explain grid synchronisation, anti-islanding and DC-to-AC ratio.
  - Distinguish net metering, net billing and gross metering for a rooftop system and compute the annual bill saving.
  - Derive the capital recovery factor and compute the levelised cost of energy, including its sensitivity to the discount rate.
concepts:
  - Net load and the duck curve
  - Aggregation and smoothing
  - PWM H-bridge inverter
  - Anti-islanding
  - Net metering and net billing
  - Capital recovery factor
  - Levelised cost of energy (LCOE)
tags:
  - physics
  - renewable-energy-and-applications
  - grid-integration
  - lcoe
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Grid Integration, Inverters, Net Metering and LCOE

## Overview

A solar module produces direct current when the sun shines; a wind turbine produces variable-frequency alternating current when the wind blows. The grid wants 50 Hz alternating current at fixed voltage, at the moment of demand, at a price. This lesson connects the sources of Modules 1 and 2 and the storage of Lesson m3-l1 to that grid. We start with variability and how aggregation, storage and flexible demand tame it; derive the voltage produced by a pulse-width-modulated inverter, the power electronic that every PV system and most wind turbines rely on; explain how a rooftop system is metered and credited; and finally derive the levelised cost of energy, the standard metric by which technologies are compared and which the design case of Lesson m3-l3 applies.

## Learning Path

- **What you should already know**: the diode and rectification (Basic Electronics Lesson m2-l1); electromagnetic induction and AC (Electricity and Magnetism Lesson m3-l3); the capacity factor (Lesson m1-l1); array and MPPT electronics (Lesson m1-l3); storage options (Lesson m3-l1).
- **What this lesson adds**: net-load variability, aggregation, the PWM inverter, grid interconnection requirements, metering schemes and the LCOE.
- **What later lessons this will unlock**: the lifecycle analysis and the rooftop design case with cost, payback and LCOE (Lesson m3-l3), and the system-design project of the Renewable Energy Lab (Lesson m1-l6).

## Core Explanation

### Variability and the net-load curve

Renewable output varies on four time scales: seconds to minutes (passing clouds, gusts), hours (the diurnal solar cycle), days (weather systems) and seasons (the monsoon dip in Lesson m1-l2). The grid operator balances **net load**, the demand minus wind and solar generation, with dispatchable plant. With solar penetration the net load shows a midday trough and a steep evening **ramp** as the Sun sets just as household demand peaks, the so-called duck curve.

```python
import numpy as np, matplotlib.pyplot as plt
t = np.linspace(0, 24, 241)
demand = 1.0 + 0.25*np.exp(-((t-20)/2.5)**2) + 0.15*np.exp(-((t-11)/3)**2)
solar = 0.45*np.clip(np.sin(np.pi*(t-6)/12), 0, None)**1.5
plt.plot(t, demand, label="demand"); plt.plot(t, demand - solar, label="net load")
plt.xlabel("hour"); plt.ylabel("per unit"); plt.legend(); plt.show()
```

The net-load curve falls to about $0.70$ per unit near noon and climbs to $1.25$ per unit by 20:00, a rise of $0.55$ per unit in eight hours that dispatchable plants must follow. Four tools provide **flexibility**: storage (Lesson m3-l1), demand response, interconnection over a wider area and flexible thermal plant. Concentrating solar plants with thermal storage are themselves dispatchable: molten salt cycled between $290$ and $565\ ^\circ\text{C}$ with $c = 1.5\ \text{kJ kg}^{-1}\text{K}^{-1}$ stores $c\Delta T = 413\ \text{kJ kg}^{-1} = 0.115\ \text{kWh}_{th}\ \text{kg}^{-1}$, so six hours of a $100\ \text{MW}_e$ turbine at $40\%$ efficiency ($1500\ \text{MWh}_{th}$) needs about $13\,000$ tonnes.

Variability falls with **aggregation**. For $N$ similar plants whose output fluctuations have standard deviation $\sigma$ each and pairwise correlation $\rho$, the variance of the sum per plant is $\sigma^2[1/N + \rho(1-1/N)]$, so

$$\sigma_{agg} = \sigma\sqrt{\frac1N + \rho\left(1-\frac1N\right)}.$$

Independent sources average as $1/\sqrt N$; correlated ones, like neighbouring PV plants under the same cloud, do not, which is why geographic spread across the country helps more than adding capacity at one site.

### The inverter

An inverter converts DC to AC. In a single-phase full-bridge (H-bridge), four switches connect the DC bus $\pm V_{dc}$ to the load. In **sinusoidal pulse-width modulation** the switching frequency (typically $10$–$20$ kHz) is much greater than $50$ Hz, and within each switching period the output is $+V_{dc}$ for a fraction $d$ of the time and $-V_{dc}$ for the remainder. The local average is $(2d-1)V_{dc}$. Setting $d(t) = \tfrac12(1 + m\sin\omega t)$ with modulation index $m \le 1$ gives

$$\langle v_{out}\rangle = mV_{dc}\sin\omega t,$$

a sine wave of rms value $mV_{dc}/\sqrt2$, after an LC filter removes the switching ripple. To produce $230\ \text{V}$ rms, $V_{dc} \ge 230\sqrt2 = 325\ \text{V}$, which is why strings of modules are wired to several hundred volts (Lesson m1-l3); a transformer or boost stage lowers the requirement. Inverter efficiency is $97$–$98.5\%$, peaking at $30$–$60\%$ of rated power.

A grid-tied inverter does more than convert. It locks its phase to the grid with a phase-locked loop and injects current in phase with the voltage (unity power factor) or with reactive power as requested; it keeps the current harmonic distortion low (of order $5\%$); and it must **disconnect within about two seconds** if the grid fails, since an energised island would endanger line workers (**anti-islanding**). Because modules rarely reach their rating, installers use a **DC-to-AC ratio** above 1: a $4.5\ \text{kW}_p$ array on a $3$ kW inverter ($1.5$) clips a few percent of energy at midday but raises inverter utilisation.

### Net metering and net billing

A rooftop generator can be metered in three ways. In **gross metering** all generation is exported and sold at a fixed tariff. In **net metering** a bidirectional meter records import and export, and exported units offset imported units one-for-one over a billing period, with any annual surplus paid at a lower rate. In **net billing** the export is credited at a separate (usually lower) tariff, with self-consumed energy valued at the retail tariff. Indian rules set a national framework (net metering for loads up to a size limit) but state commissions fix the details, so the value of an exported unit varies. Under net metering the grid acts as a free battery with 100% round-trip efficiency, which is why households with net metering rarely add batteries for savings.

### The levelised cost of energy

LCOE is the constant price per kWh at which the discounted revenue equals the discounted cost:

$$\text{LCOE} = \frac{\sum_{t=0}^{n}(I_t + M_t + F_t)(1+r)^{-t}}{\sum_{t=1}^{n}E_t(1+r)^{-t}},$$

with investment $I_t$, operation and maintenance $M_t$, fuel $F_t$, energy $E_t$ and discount rate $r$. For a single up-front investment $I$ and constant annual costs the investment is spread by the **capital recovery factor**. An annuity $A$ for $n$ years has present value $A\sum_{t=1}^n(1+r)^{-t} = A[1-(1+r)^{-n}]/r$; equating this to $I$,

$$A = I\cdot\text{CRF}, \qquad \text{CRF} = \frac{r(1+r)^n}{(1+r)^n-1},$$

and with constant $E$ the LCOE is $(I\cdot\text{CRF} + M)/E$. For $n = 25$ years CRF is $0.0937$ at $r = 8\%$ and $0.1275$ at $r = 12\%$: a higher cost of capital raises the cost of a capital-intensive renewable by a third but barely affects a fuel-intensive plant. LCOE is blind to *when* energy is delivered, to the grid services needed and to the cost of balancing, so a cheap solar kilowatt-hour at midday is not equivalent to a firm evening kilowatt-hour.

## Key Ideas

- **Net load** = demand − wind − solar; the evening ramp and midday trough define flexibility needs.
- **Aggregation**: $\sigma_{agg} = \sigma\sqrt{1/N + \rho(1-1/N)}$; correlation limits the benefit.
- **PWM inverter**: $d = \tfrac12(1+m\sin\omega t)$ gives $\langle v\rangle = mV_{dc}\sin\omega t$; $230$ V rms requires $V_{dc}\ge325$ V.
- **Grid-tie duties**: synchronisation, low harmonic distortion, anti-islanding within about 2 s.
- **Metering**: gross, net metering (one-for-one offset) or net billing (separate export tariff).
- **LCOE**: $(I\cdot\text{CRF}+M)/E$ with $\text{CRF} = r(1+r)^n/[(1+r)^n-1]$.

## Worked Examples

### Example 1 — LCOE of a utility solar plant

The $100$ MW plant of Lesson m1-l1 (Example 2) cost ₹450 crore, produces $180$ GWh per year and costs ₹4.5 crore per year to operate. Find the LCOE for $r = 9\%$ and $n = 25$, ignoring degradation, and for $r = 12\%$.

**Solution.** For $r = 9\%$, $1.09^{25} = 8.623$ and $\text{CRF} = 0.09\times8.623/7.623 = 0.1018$. The annualised capital is $450\times0.1018 = 45.8$ crore and the total annual cost is $45.8 + 4.5 = 50.3$ crore $= 5.03\times10^8$ rupees, so

$$\text{LCOE} = \frac{5.03\times10^8}{1.8\times10^8\ \text{kWh}} = ₹2.80\ \text{kWh}^{-1}.$$

At $r = 12\%$, $\text{CRF} = 0.1275$, the annual cost is $57.4 + 4.5 = 61.9$ crore and the LCOE is ₹3.44 per kWh, an increase of $23\%$. The investment, not the sunshine, is what the consumer pays for.

### Example 2 — Net metering for a household

A $3\ \text{kW}_p$ rooftop system at Bengaluru yields $4670$ kWh per year (Lesson m3-l3 shows the derivation) against household consumption of $3650$ kWh per year, of which $4.5$ kWh per day ($1642$ kWh per year) occurs during daylight. The retail tariff is ₹7.5 per kWh and exports are paid ₹3 per kWh. Compare the annual saving under net metering with banking and under net billing without banking.

**Solution.** Under net metering the $3650$ kWh consumed is fully offset, saving $3650\times7.5 = ₹27\,375$, and the surplus $4670 - 3650 = 1020$ kWh is paid at the export rate, $1020\times3 = ₹3060$; the total is ₹30 435. Under net billing the self-consumed $1642$ kWh saves $1642\times7.5 = ₹12\,315$ and the exported $4670 - 1642 = 3028$ kWh earns $₹9084$, a total of ₹21 399. Banking is worth ₹9036 per year, or ₹4.5 per kWh for the $2008$ kWh of evening load it serves, which equals the retail-export spread $7.5 - 3.0$. A system costing ₹1.65 lakh pays back in $5.4$ years under net metering and $7.7$ years under net billing.

### Example 3 — Smoothing by aggregation

Each of $25$ PV plants has a ten-minute output fluctuation of $\sigma = 30\%$ of its rating. Find the fluctuation of the sum for independent plants and for a pairwise correlation of $\rho = 0.2$.

**Solution.** For independent plants, $\sigma_{agg} = 30\%/\sqrt{25} = 6\%$. For $\rho = 0.2$,

$$\sigma_{agg} = 30\%\sqrt{\frac1{25} + 0.2\times0.96} = 30\%\sqrt{0.232} = 14.5\%.$$

Even weak correlation removes most of the benefit: as $N\to\infty$ the limit is $30\%\sqrt{0.2} = 13.4\%$, so the fluctuation can never fall below $\sigma\sqrt\rho$ however many plants are added.

## Common Misconceptions

- **"The grid can absorb any amount of solar."** Penetration is limited by the evening ramp and by minimum-load constraints of thermal plant; the surplus at midday is curtailed unless stored.
- **"An inverter simply flips the sign of the DC."** It synthesises a sine wave by modulating the duty cycle, and must synchronise with the grid.
- **"The panel can feed the house when the grid is off."** A standard grid-tied inverter shuts down within seconds of a grid outage; only a hybrid inverter with a battery can island the house.
- **"LCOE tells you which technology to build."** It ignores timing, balancing and transmission; it compares costs per kWh, not the value of each kWh.
- **"A lower discount rate does not matter."** For capital-intensive plants it matters more than any technology improvement in a given year.

## Connections

- The H-bridge and diode switching use the semiconductor devices of Basic Electronics (Lessons m2-l1 and m2-l2); filtering uses the LC circuits of Differential Equations (Lessons m2-l2 and m2-l3), and the grid's frequency and phase come from induction and AC theory in Electricity and Magnetism (Lesson m3-l3).
- Aggregation is the statistics of Thermal Physics and Statistical Mechanics (Lesson m3-l1): the variance of a sum of correlated variables.
- The capital recovery factor is the sum of a geometric series, and discounting is exponential decay in discrete time.
- The Renewable Energy Lab (renewable-energy-lab, Lesson m1-l6) computes a levelised cost and sizes an off-grid system with inverter and charge controller.
- The metering analysis feeds the payback and cost of the household design case in Lesson m3-l3.

## Quick Check

1. Define net load and explain why an evening ramp arises in a solar-rich grid.
2. Show that a PWM inverter with $d = \tfrac12(1+m\sin\omega t)$ has average output $mV_{dc}\sin\omega t$, and find the minimum DC voltage for $230$ V rms at $m = 0.9$.
3. Why must a grid-tied inverter disconnect when the grid goes down?
4. Compute the CRF for $r = 10\%$, $n = 20$ years, and the LCOE of a system of cost ₹60,000 per kW giving $1550$ kWh per kW per year with annual O&M of ₹800 per kW.
5. Sixteen wind farms each have $\sigma = 25\%$ and $\rho = 0.1$. Find the aggregate $\sigma$.

## Takeaway

- Renewable variability is managed by storage, flexible demand, wider interconnection and aggregation, and the benefit of aggregation is limited by correlation, $\sigma_{agg}\to\sigma\sqrt\rho$.
- A PWM H-bridge synthesises $mV_{dc}\sin\omega t$; grid-tied inverters add synchronisation, harmonic control and anti-islanding.
- Net metering offsets imports one-for-one and makes the grid a free battery; net billing values exports lower and favours self-consumption.
- LCOE is $(I\cdot\text{CRF}+M)/E$; capital-intensive renewables are very sensitive to the discount rate.
