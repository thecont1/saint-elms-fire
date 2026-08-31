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
lessonId: thermal-physics-lab-m1-l3
lessonName: Latent Heat of Fusion and Vaporisation
lessonNumber: 3
moduleNumber: 1
semesterNumber: 2
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - thermal-physics-lab-m1-l2
learningObjectives:
  - Measure the latent heat of fusion of ice by dropping ice into a calorimeter and observing the temperature drop.
  - Measure the latent heat of vaporisation of water by condensing steam into a calorimeter and observing the temperature rise.
  - Identify the dominant sources of error in latent-heat measurements and apply Newton's law of cooling correction.
concepts:
  - Latent heat
  - Phase transition
  - First-order transition
  - Heat of fusion
  - Heat of vaporisation
  - Clausius-Clapeyron relation
  - Steam distillation
tags:
  - physics
  - laboratory
  - thermal
  - latent-heat
  - phase-transition
  - calorimetry
sourceType: authored-courseware
assessmentHints:
  - The latent heat of fusion of ice is 334 J/g; the latent heat of vaporisation of water is 2260 J/g.
  - Dry the ice before adding it; water on the ice biases the measurement.
  - The steam must be dry (superheated) before it enters the calorimeter; carry-over water droplets bias the result.
status: in-review
***

# Latent Heat of Fusion and Vaporisation

## Overview

When a substance changes phase, it absorbs or releases heat without changing temperature. The latent heat of fusion L_f is the heat required to melt unit mass of a solid at its melting point; the latent heat of vaporisation L_v is the heat required to vaporise unit mass of a liquid at its boiling point. For water, L_f = 334 J/g and L_v = 2260 J/g — both are large, reflecting the strength of the hydrogen bond.

This lesson covers two classic calorimetry experiments: measuring L_f of ice by adding ice to warm water in a calorimeter, and measuring L_v of water by condensing steam into cold water in a calorimeter. Both are method-of-mixtures problems with a phase transition in the middle.

## Learning Path

1. **Measure W** (water equivalent of calorimeter) — as in L2.
2. **Latent heat of fusion of ice** — fill calorimeter with warm water (above room temperature, e.g. 35 °C); record mass and temperature; add dry ice at 0 °C; observe the equilibrium temperature; compute L_f.
3. **Latent heat of vaporisation of water** — fill calorimeter with cold water (below room temperature, e.g. 15 °C); pass dry steam through a delivery tube into the water; observe the temperature rise; record the mass of steam condensed; compute L_v.
4. **Apply Newton's law of cooling** — observe the temperature vs time after each experiment; extrapolate to t = 0.
5. **Compare with literature** — L_f = 334 J/g, L_v = 2260 J/g (at 100 °C and 1 atm).

## Core Explanation

### Theory: Latent Heat of Fusion

A mass m_ice of ice at 0 °C, dropped into a calorimeter containing (m_w + W) of water-equivalent at temperature T_w, melts and warms to the equilibrium temperature T_eq. The heat balance is

m_ice L_f + m_ice c_w (T_eq − 0) = (m_w + W) c_w (T_w − T_eq).

Solving for L_f:

L_f = [(m_w + W) c_w (T_w − T_eq) − m_ice c_w T_eq] / m_ice
    = c_w (T_w − T_eq) (m_w + W) / m_ice − c_w T_eq.

The first term is the heat released by the warm water; the second is the heat required to warm the melted ice from 0 °C to T_eq.

### Theory: Latent Heat of Vaporisation

A mass m_steam of dry steam at 100 °C, bubbled into a calorimeter containing (m_w + W) of water-equivalent at temperature T_w, condenses to water at 100 °C, cools to T_eq, and the system reaches equilibrium. The heat balance is

m_steam L_v + m_steam c_w (100 − T_eq) = (m_w + W) c_w (T_eq − T_w).

Solving for L_v:

L_v = c_w (T_eq − T_w) (m_w + W) / m_steam − c_w (100 − T_eq).

The first term is the heat gained by the cold water; the second is the heat released by the condensed steam as it cools from 100 °C to T_eq.

### Steam Distillation and Dry Steam

The steam delivered to the calorimeter must be **dry** (no liquid water droplets). Saturated steam at 100 °C that has not been superheated contains liquid water droplets ("wet steam"); these carry heat into the calorimeter as liquid water, not as latent heat, biasing the L_v measurement low. To get dry steam:

- Use a steam generator with a long, well-insulated delivery tube.
- Include a water trap (a small upside-down funnel or a steam dome) that catches droplets but lets vapour through.
- Superheat the steam slightly (to ~ 105 °C) by passing it through a heated section.

A simpler check: the temperature inside the steam generator (above the water line) should be 100 °C; if the delivery tube is much cooler, steam is condensing inside it.

### Apparatus

- Calorimeter (as in L2).
- Steam generator (a 1 L flask of water with a delivery tube) and Bunsen burner or hot plate.
- Ice (crushed, pre-cooled to 0 °C in an ice bath).
- Thermometer (0–50 °C for the ice experiment; 0–110 °C for the steam experiment — or two thermometers).
- Balance (0.1 g resolution).
- Stopwatch.
- Tongs, safety glasses, heat-resistant gloves.
- Steam trap or splash guard.

### Procedure: Latent Heat of Fusion

1. Measure W as in L2.
2. Fill the calorimeter about two-thirds full with warm water (~ 35 °C). Record m_w and T_w.
3. Prepare the ice: place crushed ice in a beaker of ice water; allow 5 minutes for the ice to reach 0 °C. The ice is at 0 °C as long as it is in equilibrium with the ice water.
4. Quickly dry a piece of ice with a cloth or paper towel (to remove surface water — this water would otherwise count as ice and bias the result). Drop the ice into the calorimeter.
5. Stir gently. Record the minimum temperature T_eq, observed.
6. Continue recording the temperature vs time for 5 minutes. Fit Newton's law of cooling to extrapolate to t = 0.
7. Weigh the calorimeter + water + melted ice. The mass of ice is m_ice = (final mass) − (initial mass of calorimeter + water).

### Procedure: Latent Heat of Vaporisation

1. Measure W as in L2.
2. Fill the calorimeter about two-thirds full with cold water (~ 15 °C, well below room temperature to compensate for heat gain from the steam). Record m_w and T_w.
3. Set up the steam generator: a flask of water with a delivery tube; bring to a vigorous boil.
4. Pass dry steam into the calorimeter through a delivery tube inserted through a hole in the lid. The steam condenses in the water; the temperature rises.
5. Continue passing steam until the temperature reaches ~ 50 °C (well above the initial T_w). This ensures a measurable ΔT.
6. Remove the delivery tube. Record the final temperature T_eq, observed.
7. Weigh the calorimeter + water + condensed steam. The mass of steam is m_steam = (final mass) − (initial mass of calorimeter + water).
8. Continue recording temperature vs time for 5 minutes. Fit Newton's law of cooling to extrapolate to t = 0.

### Analysis

#### Latent Heat of Fusion

L_f = c_w (T_w − T_eq) (m_w + W) / m_ice − c_w T_eq.

For c_w = 4186 J/(kg·K), m_w = 300 g, W = 10 g, T_w = 35 °C, T_eq = 18 °C, m_ice = 50 g:

L_f = 4186 · (35 − 18) · 0.310 / 0.050 − 4186 · 18
    = 4186 · 17 · 6.2 − 75,348
    = 441,247 − 75,348
    = 365,899 J/kg
    = 366 J/g.

Literature: 334 J/g. Discrepancy: 10 %. The likely cause is incomplete drying of the ice, which biases T_w low (because the ice's water content cools more than the ice itself).

#### Latent Heat of Vaporisation

L_v = c_w (T_eq − T_w) (m_w + W) / m_steam − c_w (100 − T_eq).

For c_w = 4186, m_w = 300 g, W = 10 g, T_w = 15 °C, T_eq = 45 °C, m_steam = 15 g:

L_v = 4186 · (45 − 15) · 0.310 / 0.015 − 4186 · (100 − 45)
    = 4186 · 30 · 20.67 − 230,230
    = 2,595,210 − 230,230
    = 2,364,980 J/kg
    = 2365 J/g.

Literature: 2260 J/g. Discrepancy: 4.6 %. The likely cause is wet steam — the steam contained some liquid water droplets that released heat without contributing to m_steam.

### Error Sources

- **Wet ice.** Water on the ice surface is at 0 °C, but it dilutes the ice's effective mass and biases the heat balance. Wipe the ice dry before adding it.
- **Ice not at 0 °C.** If the ice is colder than 0 °C (e.g. dry ice, or ice in a freezer at − 20 °C), the heat balance must include the warming of the ice to 0 °C.
- **Wet steam.** Steam with liquid droplets biases L_v low (the droplets release heat as liquid, not as latent heat).
- **Heat loss during steam delivery.** The delivery tube is hot; it loses heat to the surroundings. The steam cools slightly between the generator and the calorimeter. Use a short, well-insulated tube.
- **Incomplete condensation.** If some steam escapes the calorimeter without condensing, m_steam is overestimated (some of the mass attributed to steam is actually mass that left). Use a lid with a small hole for the delivery tube.
- **Initial water not cold enough.** If T_w is close to T_eq, the ΔT is small and the relative error in T_eq − T_w is large. Aim for ΔT ~ 30 K.

## Key Ideas

- Latent heat of fusion L_f: heat required to melt unit mass of solid at its melting point (no temperature change).
- Latent heat of vaporisation L_v: heat required to vaporise unit mass of liquid at its boiling point.
- L_v > L_f for most substances, because vaporisation requires breaking all intermolecular bonds, while fusion only requires loosening them.
- For water: L_f = 334 J/g, L_v = 2260 J/g (at 100 °C, 1 atm).
- Dry ice and dry steam are essential; water on ice or droplets in steam bias the measurement.

## Worked Examples

### Example 1: Latent heat of fusion of ice

Data: m_ice = (62.0 − 50.0) = 12.0 g. T_w = 35.0 °C. m_w = 300 g. W = 10 g. T_eq = 32.0 °C.

- m_w + W = 310 g = 0.310 kg.
- T_w − T_eq = 3.0 K.
- L_f = 4186 · 3.0 · 0.310 / 0.012 − 4186 · 32.0 = 324,425 − 133,952 = 190,473 J/kg = 190 J/g.

This is too low (literature 334 J/g). The discrepancy suggests that the ice had significant water on it, or that some ice was lost. A recheck: m_ice was measured by difference, and the calorimeter was weighed after mixing; if the weighing was delayed and some water evaporated, m_ice is overestimated.

### Example 2: Latent heat of vaporisation of water

Data: m_steam = (348 − 332) = 16.0 g. T_w = 18.0 °C. m_w = 300 g. W = 10 g. T_eq = 50.0 °C.

- m_w + W = 0.310 kg.
- T_eq − T_w = 32 K.
- L_v = 4186 · 32 · 0.310 / 0.016 − 4186 · 50 = 2,595,210 − 209,300 = 2,385,910 J/kg = 2386 J/g.

This is 6 % above the literature value of 2260 J/g. The likely cause is heat gain from the surroundings (cold water warmed by the room while the steam was being delivered). For a careful lab, the experiment should be done in an air-conditioned room or the initial water temperature should be even lower.

### Example 3: Clausius-Clapeyron slope

The Clausius-Clapeyron relation gives dP/dT = L / (T ΔV), where ΔV is the volume change on phase transition. For water at 100 °C, L_v = 2260 J/g, T = 373 K, ΔV = V_steam − V_liquid ≈ V_steam = RT/P (for ideal gas) = 30.6 L/mol (at 1 atm).

dP/dT = L_v / (T ΔV) = (2260 · 18) / (373 · 30.6) = 40,680 / 11,414 = 3.56 kPa/K = 27 mmHg/K.

This means the boiling point of water shifts by about 0.28 K per kPa of pressure change. At a higher-altitude lab (lower atmospheric pressure), water boils below 100 °C; the steam temperature in the steam generator is correspondingly lower.

## Common Misconceptions

- **"Latent heat is a small correction to the heat balance."** It is the dominant term in both experiments. For the ice experiment, the latent heat absorbed by the ice is comparable to the heat lost by the warm water; the warming of the melted ice from 0 °C to T_eq is a smaller correction.
- **"Boiling water is at 100 °C."** At standard pressure. At higher altitudes, the boiling point is lower; the steam temperature in the steam generator is correspondingly lower, and L_v at that temperature is slightly different. The Clausius-Clapeyron relation gives the correction.
- **"Steam is hot."** It is at the same temperature as the boiling water (100 °C at 1 atm). The reason steam burns more severely than boiling water is the latent heat released on condensation, plus the larger heat capacity of the steam-water film on the skin.
- **"The latent heat of fusion is half the latent heat of vaporisation."** It depends on the substance. For water, L_v / L_f ≈ 7; for many metals, the ratio is closer to 3–4. The ratio is governed by the ratio of the energy required to break all intermolecular bonds (vaporisation) to that required only to loosen them (fusion).
- **"The heat-loss correction is unnecessary if the calorimeter is well insulated."** It is necessary. Even a Dewar has a small heat loss; the correction is just smaller.

## Connections

- **Thermal Physics and Statistical Mechanics (Sem 2 theory).** Phase transitions are first-order transitions with a latent heat; the Clausius-Clapeyron relation connects the slope of the phase boundary to the latent heat and the volume change. The same theory covers melting, boiling, sublimation, and the solid-solid transitions of crystalline materials.
- **Chemistry.** Heats of fusion and vaporisation are fundamental thermodynamic properties; they are tabulated for every substance and used in chemical engineering design (distillation columns, refrigeration cycles, etc.).
- **Engineering.** Refrigeration and air conditioning rely on the latent heat of vaporisation of refrigerants (R134a, ammonia, CO₂); the heat of fusion of water is what makes ice an effective thermal storage medium.
- **Meteorology.** The latent heat of vaporisation of water is the central quantity in the atmospheric water cycle: evaporation from the ocean, condensation into clouds, precipitation. The release of L_v in condensation drives the updrafts in thunderstorms; the release of L_f in freezing is the energy source for hail formation.
- **Astrophysics (Sem 5/6).** The latent heat of fusion of hydrogen (~ 60 J/g) and helium (~ 0 J/g for He, since it does not solidify at standard pressure) is important in stellar structure; the boundary between the liquid and solid hydrogen in the interiors of gas giants (Jupiter, Saturn) is governed by the same Clausius-Clapeyron relation.

## Quick Check

1. Define latent heat of fusion. Define latent heat of vaporisation.
2. State the values of L_f and L_v for water at 1 atm.
3. Why must the ice be dry before adding it to the calorimeter? Why must the steam be dry?
4. A 20 g piece of ice at 0 °C is dropped into 200 g of water at 30 °C in a calorimeter with W = 10 g. Predict the equilibrium temperature.
5. 10 g of dry steam at 100 °C is bubbled into 300 g of water at 20 °C in a calorimeter with W = 10 g. Predict the equilibrium temperature.
6. What is the Clausius-Clapeyron relation? What does it predict for the boiling point of water at 0.8 atm (typical cabin pressure in an aircraft)?
7. Why is the heat-loss correction more important in the steam experiment than in the ice experiment?
8. A student reports L_v for water as 1800 J/g, much lower than the literature value. Identify two possible experimental errors.

## Takeaway

The latent heats of fusion and vaporisation are macroscopic quantities with a microscopic origin: the energy required to break the hydrogen bonds in water. The method of mixtures, applied to a phase transition, gives L_f and L_v to within a few per cent, with the dominant errors being wet ice, wet steam, and heat loss to the surroundings. Newton's law of cooling is the standard correction; the Clausius-Clapeyron relation is the theoretical connection to the phase diagram. The lab's discipline — careful drying, fast transfer, accurate weighing, time-resolved temperature reading — is the same discipline you will use in any calorimetric measurement in chemistry, biology, or engineering.
