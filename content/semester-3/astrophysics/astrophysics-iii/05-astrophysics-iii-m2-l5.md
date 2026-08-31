***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-iii
courseName: Astrophysics III — Stars and Stellar Evolution
moduleId: astrophysics-iii-module-2
moduleName: Stellar Structure and Energy
lessonId: astrophysics-iii-m2-l5
lessonName: Nuclear Burning — the pp Chain and the CNO Cycle
lessonNumber: 5
moduleNumber: 2
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - astrophysics-iii-m2-l4
learningObjectives:
  - Explain why fusion requires tunnelling through the Coulomb barrier and why reaction rates are extraordinarily temperature-sensitive.
  - Write the net reaction of hydrogen burning and compute the energy released from the mass deficit.
  - Trace the pp chain and the CNO cycle step by step, and state which dominates in which mass range.
  - Derive the temperature exponents (~T⁴ for pp, ~T¹⁷ for CNO near solar conditions) and connect them to stellar structure.
concepts:
  - Nuclear fusion
  - Coulomb barrier and tunnelling
  - Mass–energy equivalence
  - pp chain
  - CNO cycle
  - Temperature sensitivity of reaction rates
tags:
  - astrophysics
  - nuclear-astrophysics
  - stellar-energy
sourceType: authored-courseware
***

# Nuclear Burning — the pp Chain and the CNO Cycle

## Overview

The structure equations of the last lesson had one term whose origin they could not supply: ε, the energy generation rate per unit mass. This lesson supplies it. Stars shine because their cores fuse hydrogen into helium, converting about 0.7% of the fused mass directly into energy via E = mc². The physics is nuclear, but the reason it happens at all in a 10⁷ K plasma — rather than requiring the 10¹⁰ K that classical electrostatics would demand — is quantum mechanics: protons tunnel through the Coulomb barrier.

Two routes accomplish hydrogen burning. The proton–proton (pp) chain builds helium directly from protons and powers the Sun and every star below roughly 1.3 M_☉. The CNO cycle uses carbon, nitrogen, and oxygen as catalysts and dominates in more massive stars, with a temperature sensitivity so fierce that it restructures the stellar interior (as we saw: convective cores). By the end of the lesson you will be able to compute the Sun's fuel consumption, explain why fusion rates scale as steep powers of temperature, and connect that scaling to the mass–luminosity relation.

## Learning Path

1. Compute the energy available from fusing four protons into helium-4 using the mass deficit and E = mc².
2. Confront the Coulomb barrier, see why classical physics forbids fusion at 10⁷ K, and resolve the paradox with quantum tunnelling and the Gamow peak.
3. Walk through the pp chain branches step by step, noting neutrinos as a direct probe of the core.
4. Walk through the CNO cycle, identify its catalytic structure, and see why it requires pre-existing C, N, O.
5. Compare temperature dependences (~T⁴ pp versus ~T¹⁷ CNO near solar temperatures) and their structural consequences.
6. Estimate solar fuel consumption and lifetime from the luminosity.

## Core Explanation

### The energy source: mass deficit

The net reaction of hydrogen burning:

4 ¹H → ⁴He + 2 e⁺ + 2 ν_e + energy

Masses: four protons 4 × 1.007825 u = 4.03130 u; helium-4 nucleus plus its two electrons (atomic mass bookkeeping) 4.00260 u. The deficit:

Δm = 0.02870 u → fraction 0.02870/4.03130 ≈ 0.0071 ≈ 0.7%

Energy per reaction: Δm c² = 0.02870 × 931.5 MeV ≈ 26.73 MeV, of which about 0.5 MeV escapes as neutrino energy (carrying away energy that does not heat the star; the "useful" output is ~26.2 MeV per helium nucleus).

Per kilogram of hydrogen fused: ~6.4 × 10¹⁴ J. For the Sun at L = 3.8 × 10²⁶ W, this means fusing about 6 × 10¹¹ kg of hydrogen every second — 600 million tonnes — of which ~4 million tonnes becomes pure energy. The Sun has been doing this for 4.6 billion years and has converted a mass roughly equal to Earth's into light.

### The Coulomb barrier and the Gamow peak

Two protons approaching each other face electrostatic repulsion V(r) = e²/(4πε₀r). At contact (~10⁻¹⁵ m) the barrier is ~1 MeV. A proton at T = 1.5 × 10⁷ K has thermal energy kT ≈ 1.3 keV — three orders of magnitude too small. Classically, no fusion should occur.

Quantum mechanics resolves this: protons can **tunnel** through the barrier. The tunnelling probability rises steeply with energy, while the Maxwell–Boltzmann population falls steeply with energy. Their product peaks at the **Gamow energy**, well above kT: fusion is done overwhelmingly by the rare fast particles in the tail. The net rate per pair is

⟨σv⟩ ∝ T⁻²ᐟ³ exp(−3E₀/kT), E₀ ∝ T²ᐟ³ (weakly varying)

which over limited temperature ranges behaves like a power law Tⁿ with large n.

An additional slowness: the very first step of the pp chain converts a proton to a neutron via the weak interaction (p + p → ²H + e⁺ + ν_e), an intrinsically rare process. The pp chain is therefore slow, which is exactly why the Sun lives ten billion years.

### The pp chain

The dominant branch (pp I, ~86% of solar reactions):

1. p + p → ²H + e⁺ + ν_e (twice)
2. ²H + p → ³He + γ (twice)
3. ³He + ³He → ⁴He + 2p

Net: 4p → ⁴He + 2e⁺ + 2ν_e + γ-rays, Q ≈ 26.7 MeV.

Minor branches (pp II, pp III) involve ⁷Be and ⁸B intermediates and produce higher-energy neutrinos. The pp chain needs only protons, so it works in any star with hydrogen, and its weak interaction step makes it gentle: near 1.5 × 10⁷ K the rate scales roughly as **T⁴**.

The positrons annihilate immediately (e⁺ + e⁻ → 2γ), the gamma rays thermalise through the star (recall the ~10⁵-year random walk), and the neutrinos stream out unimpeded — reaching Earth in 8 minutes carrying a direct image of the core as it was 8 minutes ago. Solar neutrino detection (Homestake, Super-Kamiokande, SNO, Borexino) confirmed solar fusion models and revealed neutrino oscillations along the way.

### The CNO cycle

At higher core temperatures, hydrogen burns via a catalytic cycle using C, N, O nuclei:

1. ¹²C + p → ¹³N + γ
2. ¹³N → ¹³C + e⁺ + ν_e
3. ¹³C + p → ¹⁴N + γ
4. ¹⁴N + p → ¹⁵O + γ (slowest, rate-limiting)
5. ¹⁵O → ¹⁵N + e⁺ + ν_e
6. ¹⁵N + p → ¹²C + ⁴He

Net: again 4p → ⁴He + 2e⁺ + 2ν_e. The ¹²C is regenerated — carbon, nitrogen, and oxygen act as **catalysts**. But the cycle converts C and O into ¹⁴N while it runs, which is why CNO-processed material is nitrogen-rich — an observable signature of mixing.

Because the reacting nuclei carry charges up to Z = 7, their Coulomb barriers are much higher, so the CNO cycle ignites only above ~1.7 × 10⁷ K and its rate near solar temperatures scales roughly as **T¹⁷** — extraordinarily steep. A 5% rise in core temperature multiplies the CNO rate by ~2.3.

### Which dominates, and why it matters

The two rates cross near 1.7–1.8 × 10⁷ K, corresponding to stellar masses of ~1.3 M_☉:

- **M ≲ 1.3 M_☉**: pp chain dominates. Gentle T⁴ dependence → mildly centrally concentrated energy generation → radiative core (the Sun).
- **M ≳ 1.3 M_☉**: CNO dominates. Ferocious T¹⁷ dependence → energy generation crammed into the innermost core → radiative gradient exceeds adiabatic → **convective core**.

The same nuclear physics also drives the mass–luminosity relation: more massive stars have hotter cores, where CNO rates explode with temperature, so luminosity rises ~M^3.5. Nuclear microphysics set the HR diagram's main sequence.

## Key Ideas

- Hydrogen burning converts 0.7% of mass to energy: 4p → ⁴He releases ~26.7 MeV, ~6.4 × 10¹⁴ J per kg.
- Fusion at 10⁷ K is possible only by **quantum tunnelling** through the Coulomb barrier; reactions occur at the Gamow peak, far above kT.
- The **pp chain** needs only protons, is throttled by a weak-interaction first step, scales ~T⁴, and powers stars ≲ 1.3 M_☉.
- The **CNO cycle** uses C/N/O as catalysts (regenerating ¹²C), scales ~T¹⁷ near solar temperatures, and powers more massive stars.
- The steep CNO temperature dependence concentrates energy generation, forcing convective cores in massive stars.
- Neutrinos escape the core directly; detecting them is observing fusion in real time.

## Worked Examples

**Example 1 — Solar fuel consumption.**
With useful energy 26.2 MeV = 4.2 × 10⁻¹² J per 4 protons (mass 6.69 × 10⁻²⁷ kg), energy per kg ≈ 6.3 × 10¹⁴ J/kg. At L = 3.8 × 10²⁶ W:

ṁ = 3.8 × 10²⁶ / 6.3 × 10¹⁴ ≈ 6 × 10¹¹ kg/s

The equivalent mass radiated away is L/c² ≈ 4.2 × 10⁹ kg/s — 4 million tonnes per second of pure mass-to-energy conversion.

**Example 2 — Solar lifetime from the core's fuel.**
Only the inner ~10% of the Sun's mass is hot enough to burn, and only hydrogen (mass fraction X ≈ 0.7) is fuel:

E = 0.1 × 0.7 × 2 × 10³⁰ kg × 6.3 × 10¹⁴ J/kg ≈ 8.8 × 10⁴³ J
t = E/L = 8.8 × 10⁴³ / 3.8 × 10²⁶ ≈ 2.3 × 10¹⁷ s ≈ 7 × 10⁹ yr

A ~10-billion-year main-sequence lifetime, consistent with the Sun's 4.6-billion-year age being mid-life.

**Example 3 — CNO temperature sensitivity.**
Rate ∝ T¹⁷. If the core temperature rises from 2.0 to 2.1 × 10⁷ K (a 5% increase):

(1.05)¹⁷ ≈ 2.3

The CNO rate more than doubles. In equilibrium this is self-regulating — the star's structure adjusts — but it explains both the convective core and the steep mass–luminosity relation.

**Example 4 — Why the pp chain ignores pre-existing metals.**
The pp chain's first step is p + p, requiring only hydrogen; its slowness comes from the weak conversion p → n. The CNO cycle, by contrast, cannot run without seed C/N/O — which is why first-generation stars (metal-free) could initially burn only via the pp chain until they forged their own carbon via the triple-alpha process.

## Common Misconceptions

1. **"Stars burn like fires."** Chemical burning is electron rearrangement at ~eV scales; fusion is nuclear restructuring at MeV scales, ~10⁶ times more energetic per kg. The word "burning" is analogy, not mechanism.
2. **"Fusion happens because the core is classically hot enough."** kT is ~1000× below the Coulomb barrier; tunnelling, not brute thermal energy, enables fusion.
3. **"The CNO cycle consumes carbon."** It catalytically regenerates it. What changes over time is the C:N:O ratio — CNO processing enriches nitrogen.
4. **"Neutrinos carry most of the Sun's power."** They carry only ~2% of it; photons carry the rest. But neutrinos are the only direct probe of the present-day core.
5. **"The Sun's lifetime equals its total hydrogen supply divided by luminosity."** Only the core fuses (the envelope never reaches fusion temperatures), cutting usable fuel to ~10% of the star's mass.

## Connections

- **Nuclear and Modern Physics:** Mass–energy equivalence, the weak interaction (beta processes in both chains), and quantum tunnelling are all first-year physics operating at stellar scales.
- **Previous lesson:** ε from this lesson closes the stellar structure equations; the T¹⁷ CNO scaling is what drove the convective-core conclusion.
- **Next lesson:** Mass–luminosity and main-sequence lifetimes derive directly from these reaction rates.
- **Module 3:** Later burning stages (helium and beyond) reuse the same tunnelling logic at higher charges and temperatures, and the CNO abundance signature (nitrogen enrichment) becomes a mixing diagnostic.

## Quick Check

1. Compute the fractional mass converted to energy when four protons fuse to helium-4.
2. Why can fusion occur at 10⁷ K despite a ~1 MeV Coulomb barrier?
3. Which step of the pp chain limits its overall rate, and why does that matter for stellar lifetimes?
4. In what precise sense are carbon and nitrogen "catalysts" in the CNO cycle?
5. A 2 M_☉ star and the Sun both fuse hydrogen. Which uses the CNO cycle, and what structural difference follows?

**Answers:**
1. Δm/m = 0.02870/4.0313 ≈ 0.0071, about 0.7%.
2. Quantum tunnelling: rare particles in the high-energy tail of the Maxwell–Boltzmann distribution penetrate the barrier at the Gamow peak.
3. The first step p + p → ²H + e⁺ + ν_e, which requires the weak interaction and is intrinsically improbable — throttling the whole chain and stretching solar-type lifetimes to billions of years.
4. ¹²C is consumed in step 1 and regenerated in step 6; the net reaction is 4p → ⁴He with the CNO nuclei unchanged in total number, though the cycle converts C/O into ¹⁴N over time.
5. The 2 M_☉ star (core ≳ 1.7 × 10⁷ K) burns via the CNO cycle; its T¹⁷ energy generation is so centrally concentrated that the core becomes convective, unlike the Sun's radiative core.

## Takeaway

Stars are quantum engines. Tunnelling opens a door that classical physics seals shut; the weak interaction throttles the pp chain into a ten-billion-year fuse; and the CNO cycle's catalytic ferocity restructures every star massive enough to run it. The 26.7 MeV per helium nucleus, multiplied by gravity's confinement, is everything we see when we look up at night.
