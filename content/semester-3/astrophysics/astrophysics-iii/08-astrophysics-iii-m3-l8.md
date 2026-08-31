***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-iii
courseName: Astrophysics III — Stars and Stellar Evolution
moduleId: astrophysics-iii-module-3
moduleName: Stellar Evolution and Distance Indicators
lessonId: astrophysics-iii-m3-l8
lessonName: Stellar Remnants — White Dwarfs, the Chandrasekhar Limit and Type Ia Supernovae
lessonNumber: 8
moduleNumber: 3
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - astrophysics-iii-m3-l7
learningObjectives:
  - Explain how electron degeneracy pressure supports white dwarfs and derive the mass–radius trend R ∝ M^−1/3.
  - State the Chandrasekhar limit (~1.4 M_☉) and the relativistic physics behind it.
  - Describe white dwarf cooling and the initial–final mass relation.
  - Explain both channels to Type Ia supernovae and why their near-standard peak luminosity makes them cosmic distance indicators.
concepts:
  - White dwarf
  - Electron degeneracy pressure
  - Chandrasekhar limit
  - Initial–final mass relation
  - Type Ia supernova
  - Standard candle
tags:
  - astrophysics
  - compact-objects
  - supernovae
sourceType: authored-courseware
***

# Stellar Remnants — White Dwarfs, the Chandrasekhar Limit and Type Ia Supernovae

## Overview

For stars below ~8 M_☉, the post-main-sequence staircase ends in a carbon-oxygen core that can never ignite its next fuel. What remains — a white dwarf — is matter in a state no terrestrial laboratory can reproduce: densities of 10⁹ kg m⁻³, electrons packed so tightly that the Pauli exclusion principle alone holds up the star. Degeneracy pressure defines the object, imposes a mass–radius relation stranger than anything in ordinary matter, and sets an absolute mass limit — the Chandrasekhar limit — whose breach triggers the most important explosion in observational cosmology: the Type Ia supernova.

This lesson covers the physics of white dwarfs (support, structure, cooling) and the supernova channel that turns them into standard candles. White dwarfs are also the first of the compact objects; neutron stars and black holes will follow in Astrophysics IV.

## Learning Path

1. Define a white dwarf: an exposed degenerate CO core, Earth-sized, with no fusion.
2. Derive electron degeneracy pressure qualitatively from the uncertainty principle and Pauli exclusion, and obtain the mass–radius relation R ∝ M^−1/3.
3. Understand why the relativistic limit on electron momenta produces a maximum mass: the Chandrasekhar limit of 1.4 M_☉.
4. Follow white dwarf cooling along the diagram and use the initial–final mass relation to connect progenitors to remnants.
5. Examine the two channels to Type Ia supernovae (single-degenerate accretion, double-degenerate merger).
6. See why Type Ia light curves standardise into cosmic yardsticks.

## Core Explanation

### What a white dwarf is

After the AGB superwind strips the envelope, the remaining core is ~0.5–0.6 M_☉ (for Sun-like progenitors) of carbon and oxygen, too low-mass to reach carbon ignition (~6 × 10⁸ K). It has radius ~0.01 R_☉ (Earth-sized) yet surface temperatures of ~10⁵ K — the lower-left corner of the HR diagram. With no fusion, it shines only by radiating its stored thermal energy, cooling over billions of years.

### Degeneracy pressure from quantum mechanics

Pack N electrons into volume V, and the Pauli principle forces them into distinct quantum states. Heisenberg confinement gives each electron momentum at least p ~ h n_e^{1/3}, where n_e = N/V is the electron number density. The resulting pressure, in the non-relativistic regime:

P_deg ∝ n_e^{5/3} ∝ ρ^{5/3}

Key point: this pressure depends only on density, not temperature. A white dwarf does not cool by contracting; it has no thermostat and no fuel. Adding mass *increases* gravity faster than degeneracy pressure responds — leading to the counter-intuitive **mass–radius relation**:

R ∝ M^−1/3

More massive white dwarfs are *smaller*. Double the mass and the radius shrinks by 2^(−1/3) ≈ 0.79.

### The Chandrasekhar limit

As mass grows, density rises, and the electrons' Fermi momentum approaches relativistic values. In the relativistic limit the pressure softens to P ∝ ρ^{4/3}, which can no longer beat gravity for arbitrary mass. The equilibrium equations then admit a maximum mass:

M_Ch ≈ 1.4 M_☉ (precisely 5.76 μ_e^−2 M_☉; μ_e ≈ 2 for CO material)

Subrahmanyan Chandrasekhar derived this at nineteen, en route to Cambridge in 1930. Its implication — most stars cannot end as white dwarfs above this mass — was resisted by Eddington for decades but was vindicated completely: stars above the limit must collapse further (to neutron stars or black holes, next course).

### Cooling and the initial–final mass relation

White dwarf cooling is slow: thermal ions leak energy through a degenerate, highly conductive electron blanket. A 0.6 M_☉ white dwarf takes ~10⁹ years to reach 6000 K and far longer to fade below detectability — the oldest white dwarfs set a lower bound on the Galaxy's age. Crystallisation of the CO interior at ~10⁷ K releases latent heat, delaying cooling, an effect Gaia data now observe directly.

The **initial–final mass relation** connects progenitor to remnant: a 1 M_☉ star leaves ~0.53 M_☉; a 6–8 M_☉ star leaves ~1.1 M_☉. Most of every star's mass returns to the interstellar medium; only the core survives.

### Type Ia supernovae: breaching the limit

A carbon-oxygen white dwarf pushed toward M_Ch reignites carbon under degenerate conditions — the thermostat broken, as in the helium flash but at far greater mass. Carbon fusion runs away in a **deflagration-to-detonation** that unbinds the entire star: no remnant, ~10⁴⁴ J released, nickel-56 synthesised whose radioactive decay (⁵⁶Ni → ⁵⁶Co → ⁵⁶Fe) powers the light curve. Two channels supply the mass:

1. **Single-degenerate:** accretion from a companion (often a red giant), the white dwarf growing toward M_Ch.
2. **Double-degenerate:** merger of two white dwarfs whose combined mass exceeds the limit.

Because the explosion occurs near a fixed mass, the peak luminosity is nearly standard (~−19.3 absolute magnitude, outshining whole galaxies). A tight empirical correlation — brighter Type Ia decline more slowly (the Phillips relation) — lets observers standardise each event to ~5–10% precision. These standardisable candles revealed the accelerating expansion of the Universe (1998, Nobel 2011) and remain the backbone of the cosmic distance ladder (Astrophysics IV revisits them in cosmology).

## Key Ideas

- White dwarfs are Earth-sized, fusion-less degenerate CO cores — the final state of stars up to ~8 M_☉.
- Electron degeneracy pressure (Pauli + uncertainty principle) supports them; P ∝ ρ^{5/3} non-relativistically, independent of temperature.
- The mass–radius relation R ∝ M^−1/3 means heavier white dwarfs are smaller.
- Relativistic degeneracy softens pressure to ρ^{4/3}, producing the Chandrasekhar limit ≈ 1.4 M_☉ — no white dwarf can exceed it.
- Type Ia supernovae are thermonuclear disruptions of white dwarfs reaching the limit, via accretion or merger.
- Near-standard peak luminosity plus the Phillips relation makes Type Ia events standardisable candles for cosmology.

## Worked Examples

**Example 1 — Density of a white dwarf.**
M = 0.6 M_☉ = 1.2 × 10³⁰ kg, R = 0.01 R_☉ = 7 × 10⁶ m:

ρ = 3M/(4πR³) = 3.6 × 10³⁰ / (1.44 × 10²¹) ≈ 2.5 × 10⁹ kg m⁻³

One cubic centimetre weighs about 2.5 tonnes.

**Example 2 — Radius from the mass–radius relation.**
If a 0.6 M_☉ white dwarf has R = 0.012 R_☉, a 1.2 M_☉ white dwarf has

R = 0.012 × (0.6/1.2)^{1/3} = 0.012 × 0.794 ≈ 0.0095 R_☉

Heavier yet ~20% smaller.

**Example 3 — Energy of a Type Ia.**
Fusing ~1.4 M_☉ of CO to iron-group releases ≈ 0.1% of rest mass... more precisely the nuclear yield is ~1.5 × 10⁴⁴ J, of which ~10⁴⁴ J emerges as radiation and kinetic energy. Peak luminosity ~10³⁶ W (≈ 4 × 10⁹ L_☉) sustained for weeks: a single stellar corpse outshines its host galaxy of 10¹¹ stars.

**Example 4 — Distance from a Type Ia.**
A Type Ia at peak has standardised M_V = −19.3. Observed m_V = 15.7 (extinction-corrected):

m − M = 35.0 = 5 log₁₀(d/10 pc) → d = 10 × 10⁷ pc = 100 Mpc

One explosion places its host galaxy 300 million light-years away — the lever that moved cosmology.

## Common Misconceptions

1. **"White dwarfs are dead stars cooling toward nothing."** They are slowly cooling, yes — but crystallising, neutrino-cooling, and potentially exploding if fed mass; they are dynamic objects over cosmic time.
2. **"The Chandrasekhar limit is about size."** It is a mass limit arising from relativistic quantum mechanics; radius is a consequence.
3. **"Type Ia supernovae are core-collapse events."** They are thermonuclear disruptions with no remnant and no hydrogen lines — a different mechanism from massive-star supernovae (Astrophysics IV).
4. **"All supernovae are standard candles."** Only Type Ia, and only after light-curve standardisation; core-collapse events vary widely.
5. **"Accretion always detonates a white dwarf."** Accreted hydrogen usually burns in novae eruptions first; reaching the Chandrasekhar mass is a slow, rare accumulation.

## Connections

- **Module 3 so far:** The white dwarf is the exposed core of the AGB story; degeneracy first appeared as the helium-flash precondition.
- **Quantum mechanics:** Pauli exclusion and the uncertainty principle are doing all the structural work — a first-year quantum course applied to stellar corpses.
- **Astrophysics IV:** Neutron stars (neutron degeneracy, larger limits) and black holes continue the compact-object sequence; Type Ia candles anchor the cosmological distance ladder and dark-energy discovery.
- **Observational cosmology:** The same standardisable candles that revealed accelerating expansion continue to constrain dark energy.

## Quick Check

1. Why does adding mass to a white dwarf make it smaller?
2. What physics sets the Chandrasekhar limit at ~1.4 M_☉?
3. What distinguishes a nova from a Type Ia supernova?
4. Why are Type Ia supernovae standardisable, and what empirical relation is used?
5. How do the oldest white dwarfs constrain the age of the Galaxy?

**Answers:**
1. Gravity compresses degenerate matter; since P_deg ∝ ρ^{5/3} rises slower than gravity's M² scaling, higher mass demands higher density — smaller radius, R ∝ M^−1/3.
2. At high mass the electrons become relativistic, pressure softens to ∝ ρ^{4/3}, and hydrostatic equilibrium admits no solution above M_Ch ≈ 1.4 M_☉.
3. A nova is a surface hydrogen explosion on an accreting white dwarf — the star survives; a Type Ia is the complete thermonuclear disruption of the white dwarf — no remnant.
4. The explosion occurs near a fixed mass (M_Ch), giving a near-standard nickel yield and peak luminosity; the Phillips relation (brighter ⇔ slower decline) standardises individual events.
5. White dwarfs cool monotonically and slowly; the faintest observed dwarfs in a population imply a minimum time since the first stars formed — a cooling-clock lower bound on galactic age.

## Takeaway

White dwarfs are quantum matter at stellar scale: supported by the exclusion principle, limited by relativity, and explosive when pushed past the limit. The Chandrasekhar mass turns a stellar grave into a precision instrument — a standardisable candle whose light, measured across hundreds of millions of light-years, revealed that the Universe's expansion is accelerating. From Pauli's principle to dark energy in one causal chain.
