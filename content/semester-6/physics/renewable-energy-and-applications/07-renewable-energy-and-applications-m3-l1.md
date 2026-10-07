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
lessonId: renewable-energy-and-applications-m3-l1
lessonName: Energy Storage: Batteries, Pumped Hydro and Hydrogen
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - renewable-energy-and-applications-m2-l3
  - thermal-physics-and-statistical-mechanics-m3-l3
  - basic-electronics-m1-l1
learningObjectives:
  - Relate the voltage and energy of an electrochemical cell to the Gibbs free energy and compute the capacity, C-rate and depth of discharge of a Li-ion pack.
  - Estimate battery lifetime throughput and the cost of each stored kilowatt-hour from cycle life.
  - Compute the water volume and round-trip efficiency of a pumped-hydro store.
  - Derive the reversible and thermoneutral voltages of water electrolysis and the round-trip efficiency of a hydrogen chain.
concepts:
  - Gibbs free energy and cell voltage
  - Li-ion capacity and C-rate
  - Depth of discharge and cycle life
  - Round-trip efficiency
  - Pumped-hydro storage
  - Electrolyser and fuel cell
  - Energy density
tags:
  - physics
  - renewable-energy-and-applications
  - energy-storage
  - batteries-hydrogen
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Energy Storage: Batteries, Pumped Hydro and Hydrogen

## Overview

Solar and wind deliver energy when the resource is present, not when the demand is. Storage is the bridge, and the choice among technologies is a choice among physical quantities: energy density, round-trip efficiency, power capability, lifetime and cost. This lesson develops three families that together cover time scales from minutes to seasons. Electrochemical batteries (here Li-ion, the Renewable Energy Lab's subject) are efficient and modular and serve hours; pumped hydro stores gravitational potential energy at grid scale for hours to a day; hydrogen, made by electrolysis and returned by fuel cells, is inefficient but can be stored for months. For each we derive the governing relation from first principles, define the engineering parameters (capacity, C-rate, depth of discharge, cycle life), and compute sizing and round-trip efficiency, preparing for the grid and design lessons that follow.

## Learning Path

- **What you should already know**: free energy and chemical equilibrium (Thermal Physics Lesson m3-l3); circuits, Ohm's law and Joule heating (Basic Electronics Lesson m1-l1); the hydro equation (Lesson m2-l3).
- **What this lesson adds**: the link from Gibbs energy to cell voltage, battery parameters and ageing, the pumped-hydro energy balance, electrolysis and fuel-cell thermodynamics, and a comparison of storage technologies.
- **What later lessons this will unlock**: curtailment, flexibility and the levelised cost of storage (Lesson m3-l2) and the battery sizing of the rooftop design case (Lesson m3-l3).

## Core Explanation

### Electrochemical cells and Li-ion batteries

In a cell the chemical reaction drives $n$ electrons through the external circuit per reaction event. The maximum electrical work equals the change in Gibbs free energy, $W_{max} = -\Delta G$, so the open-circuit voltage is

$$E = -\frac{\Delta G}{nF}, \qquad F = 96\,485\ \text{C mol}^{-1}.$$

In a Li-ion cell lithium ions shuttle between a graphite anode and a metal-oxide or phosphate cathode; the voltage is the difference in lithium's chemical potential between the electrodes divided by $e$. Lithium iron phosphate (LFP) cells have $3.2$ V nominal, nickel-manganese-cobalt (NMC) cells $3.6$–$3.7$ V. A cell's **capacity** $Q$ (in ampere-hours) is the charge it delivers between full and empty, and its energy is $E_{cell} = V_{nom}Q$. Packs connect $N_s$ cells in series for voltage and $N_p$ strings in parallel for capacity. The energy density is $90$–$160\ \text{Wh kg}^{-1}$ for LFP and up to $250\ \text{Wh kg}^{-1}$ for NMC, two to three times that of lead–acid at pack level.

The operating parameters are:

- **C-rate**: the current divided by the capacity in ampere-hours, so that $1\,C$ discharges the cell in one hour; the lab measures how capacity and efficiency fall at high C-rate.
- **State of charge** (SoC) is the remaining charge as a fraction of capacity, and **depth of discharge** (DoD) $= 1 - $ SoC is the fraction used in a cycle.
- **Internal resistance** $R_{int}$ lowers the terminal voltage to $V = E - IR_{int}$ and dissipates $I^2R_{int}$ as heat, so efficiency falls as $I^2$.
- **Round-trip efficiency** is energy out over energy in for a full cycle; it is $0.90$–$0.95$ for Li-ion at moderate rates.

Ageing sets the economics. **Cycle life** is the number of full cycles before capacity falls to $80\%$ of its initial value (the end-of-life criterion, giving the state of health); LFP survives $3000$–$6000$ cycles at $80\%$ DoD, and shallower cycling extends life. **Calendar ageing** continues without use and, because it is a thermally activated reaction, roughly doubles for each $10$ K rise in temperature, which matters for batteries in unconditioned Indian rooms. The lifetime energy throughput is $E_{life} = N_{cycles}\times\text{DoD}\times E_{nom}$ and the cost per kilowatt-hour stored is the purchase price divided by that throughput.

### Pumped-hydro storage

Pumped hydro (PHS) uses surplus electricity to lift water from a lower reservoir to an upper one and recovers it through turbines. A volume $V$ lifted through head $H$ stores $\rho gVH$. Pump and turbine efficiencies are each $0.85$–$0.90$, so

$$E_{out} = \eta_t\rho gVH, \qquad E_{in} = \frac{\rho gVH}{\eta_p}, \qquad \eta_{RT} = \eta_p\eta_t \approx 0.70\text{–}0.80.$$

The energy density is only $\rho gH = 0.82\ \text{kWh m}^{-3}$ at $H = 300$ m, three hundred times lower than a battery per unit volume, but reservoirs are enormous and cheap and last $50$ years. PHS provides most of the world's grid storage; India has plants such as Kadamparai in Tamil Nadu and many potential sites.

### Hydrogen: electrolysis and fuel cells

Electrolysis splits water, $\text{H}_2\text{O}\rightarrow\text{H}_2+\tfrac12\text{O}_2$, with $\Delta H = 285.8\ \text{kJ mol}^{-1}$ (higher heating value) and $\Delta G = 237.1\ \text{kJ mol}^{-1}$ at $25\ ^\circ\text{C}$, and $n=2$ electrons. The **reversible voltage** (the minimum, at which the electrical work equals $\Delta G$) and the **thermoneutral voltage** (at which the electrical energy alone supplies $\Delta H$) are

$$E_{rev} = \frac{237\,100}{2\times96\,485} = 1.229\ \text{V}, \qquad E_{tn} = \frac{285\,800}{2\times96\,485} = 1.481\ \text{V}.$$

Between the two, the $T\Delta S$ term is absorbed as heat from the surroundings. Real cells run at $1.8$–$2.0$ V because of overpotentials, so the efficiency on the higher heating value is $1.481/V_{cell}$. The energy to produce $1$ kg ($496$ mol) of hydrogen is $V_{cell}\cdot2F\times496\ \text{mol}$; the ideal value $\Delta H/M = 39.4\ \text{kWh kg}^{-1}$ (HHV; $33.3$ on the lower heating value, LHV) is reached at $1.481$ V and real systems need $50$–$55\ \text{kWh kg}^{-1}$.

A fuel cell reverses the process. Its efficiency on the LHV basis is $\eta_{FC} = V_{cell}/1.253$, where $1.253\ \text{V} = 241\,800/(2F)$; at a typical $0.69$ V this is $55\%$. Hydrogen can be stored as compressed gas ($700$ bar, $\sim40\ \text{kg m}^{-3}$, $1.3\ \text{kWh per litre}$ of LHV energy), in salt caverns or as ammonia. Its unique strength is seasonal duration; its weakness is the chain of losses.

### Comparison of storage technologies

| Property | Li-ion (LFP) | Pumped hydro | Hydrogen chain |
|---|---|---|---|
| Round-trip efficiency | $0.90$–$0.95$ | $0.70$–$0.80$ | $0.30$–$0.40$ |
| Typical duration | $1$–$4$ h | $6$–$24$ h | days to months |
| Energy density | $90$–$160\ \text{Wh kg}^{-1}$ | $0.8\ \text{kWh m}^{-3}$ (300 m) | $33\ \text{kWh kg}^{-1}$ |
| Lifetime | $3000$–$6000$ cycles | $50$ years | stack $10$–$20$ kh |
| Siting | anywhere | topography, water | anywhere, caverns |

## Key Ideas

- **Cell voltage**: $E = -\Delta G/(nF)$; Li-ion cells are $3.2$ V (LFP) or $3.6$–$3.7$ V (NMC).
- **C-rate and DoD**: $C\text{-rate} = I/Q$; usable energy is $\text{DoD}\times E_{nom}$; deeper cycling shortens life.
- **Internal resistance**: $V = E - IR_{int}$, loss $I^2R_{int}$.
- **Lifetime throughput**: $N_{cycles}\times\text{DoD}\times E_{nom}$ sets the cost per kWh stored.
- **Pumped hydro**: $E_{out} = \eta_t\rho gVH$; $\eta_{RT}\approx0.75$; $0.82\ \text{kWh m}^{-3}$ at $300$ m.
- **Electrolysis**: $E_{rev} = 1.229$ V, $E_{tn} = 1.481$ V; $39.4\ \text{kWh kg}^{-1}$ (HHV) ideal, $50$–$55$ real; the hydrogen chain returns about $35\%$.

## Worked Examples

### Example 1 — A LFP battery pack

A pack has $16$ LFP cells ($3.2$ V, $100$ Ah) in series with $R_{int} = 0.5\ \text{m}\Omega$ per cell. It supplies a $2.5$ kW load, is cycled to $80\%$ DoD, has a cycle life of $4000$ cycles and costs ₹22,000 per kWh. Find the pack voltage and energy, the C-rate, the heat loss, the run time and the cost per stored kWh.

**Solution.** The pack voltage is $16\times3.2 = 51.2$ V and the energy $51.2\times100 = 5.12$ kWh. The load current is $2500/51.2 = 48.8$ A, a C-rate of $48.8/100 = 0.49\,C$. The pack resistance is $16\times0.5 = 8\ \text{m}\Omega$, so the heat is $48.8^2\times0.008 = 19\ \text{W}$, or $0.76\%$ of the load. The usable energy is $0.8\times5.12 = 4.10$ kWh, giving a run time of $4.10/2.5 = 1.64$ h. The lifetime throughput is $4000\times4.10 = 16\,400$ kWh and the price is $5.12\times22\,000 = ₹112\,640$, so the cost per kilowatt-hour stored is $112\,640/16\,400 = ₹6.9$ per kWh, before interest and replacement.

### Example 2 — A pumped-hydro store

A pumped-hydro plant with $H = 300$ m has $\eta_p = 0.88$ and $\eta_t = 0.85$. Find the water volume that supplies $1$ MWh to the grid, the energy needed to pump it, the round-trip efficiency, and the drawdown of a $1\ \text{km}^2$ reservoir that stores $1$ GWh.

**Solution.** The volume follows from $E_{out} = \eta_t\rho gVH$:

$$V = \frac{3.6\times10^9}{0.85\times1000\times9.81\times300} = 1439\ \text{m}^3.$$

The pumping energy is $E_{in} = \rho gVH/\eta_p = (1439)(1000)(9.81)(300)/0.88 = 4.81\times10^9\ \text{J} = 1.34$ MWh, so $\eta_{RT} = 0.88\times0.85 = 0.75$. For $1$ GWh the volume is $1.44\times10^6\ \text{m}^3$, which is a drawdown of only $1.44$ m over $1\ \text{km}^2$. The small drawdown shows why a shallow reservoir on a hilltop suffices, and the head, not the volume, controls the cost.

### Example 3 — The round trip of hydrogen

An electrolyser operates at $1.95$ V per cell and a fuel cell at $0.69$ V. Find the electrical energy per kilogram of hydrogen, the electrolyser efficiency on the LHV, the fuel-cell output per kilogram and the round-trip efficiency.

**Solution.** The electrolyser energy is proportional to voltage, $39.4\times1.95/1.481 = 51.9\ \text{kWh kg}^{-1}$, an HHV efficiency of $1.481/1.95 = 76\%$ and an LHV efficiency of $33.3/51.9 = 64\%$. The fuel cell's efficiency is $0.69/1.253 = 55\%$, so $1$ kg of hydrogen returns $0.55\times33.3 = 18.3$ kWh. The round trip is

$$\eta_{RT} = \frac{18.3}{51.9} = 0.35.$$

Two thirds of the electricity is lost, so hydrogen only makes sense where the alternative is curtailment or seasonal shortage; a battery cycled daily returns $90\%$.

## Common Misconceptions

- **"A higher-capacity battery always delivers more energy."** Capacity in ampere-hours means nothing without the voltage; the energy is $VQ$, and a $12$ V, $100$ Ah battery stores $1.2$ kWh.
- **"A battery can be discharged to zero for full value."** Deep discharge accelerates ageing; the usable energy is DoD times nominal, and the lifetime throughput is what fixes the cost.
- **"Pumped hydro creates energy."** It is a lossy store: $25\%$ of the pumping energy is lost.
- **"Hydrogen is an energy source."** It is an energy carrier made from other energy; the chain loses about two thirds.
- **"Higher C-rate just means faster."** It also lowers capacity and efficiency through $I^2R_{int}$ and raises temperature.

## Connections

- The cell voltage and electrolysis thermodynamics use the Gibbs free energy of Thermal Physics and Statistical Mechanics (Lesson m3-l3); the electrical parameters follow from Ohm's law and Joule heating in Basic Electronics (Lesson m1-l1).
- The energy of lifted water is the potential energy of Mechanics (Lesson m3-l2), and the turbine and pump are the hydro machines of Lesson m2-l3.
- The Renewable Energy Lab (renewable-energy-lab, Lesson m1-l4) measures capacity, C-rate, round-trip efficiency and the Ragone plot of Li-ion cells and supercapacitors.
- Intercalation of lithium between electrode lattices depends on the electronic structure of Solid State Physics (Lessons m3-l1 and m3-l2), and fuel-cell kinetics are tunnelling and barrier-crossing problems related to Introduction to Quantum Mechanics (Lesson m2-l3).
- The sizing method here is applied to the household battery in Lesson m3-l3, and the cost per stored kilowatt-hour enters the levelised cost of storage in Lesson m3-l2.

## Quick Check

1. A $48$ V, $200$ Ah battery runs a $4$ kW load. Find the C-rate, the energy stored and the run time at $80\%$ DoD.
2. Derive $E = -\Delta G/(nF)$ for the reaction $\text{H}_2+\tfrac12\text{O}_2\to\text{H}_2\text{O}$ and evaluate it.
3. How much water must be raised $150$ m to store $500$ kWh of electricity delivered at $\eta_t = 0.85$?
4. Why does hydrogen electrolysis operate at $1.8$–$2.0$ V when $E_{rev} = 1.229$ V?
5. A battery with a $5000$ cycle life at $80\%$ DoD costs ₹20,000 per kWh. Find the cost per stored kWh before financing.

## Takeaway

- Cell voltage comes from the free energy of the reaction, $E = -\Delta G/(nF)$; pack energy is voltage times charge.
- C-rate, DoD, internal resistance and cycle life control what a battery delivers and what each stored kilowatt-hour costs.
- Pumped hydro stores $\rho gH$ per unit volume, about $0.8\ \text{kWh m}^{-3}$ at $300$ m, with a round trip near $75\%$.
- Water electrolysis needs at least $1.229$ V ($1.481$ V thermoneutral); the hydrogen chain returns about $35\%$ but stores energy for months.
- Choose a store by duration and efficiency: batteries for hours, pumped hydro for a day, hydrogen for seasons.
