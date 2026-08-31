***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-iv
courseName: Astrophysics IV — Galaxies, Cosmology and Compact Objects
moduleId: astrophysics-iv-module-3
moduleName: Compact Objects and the Evolving Universe
lessonId: astrophysics-iv-m3-l7
lessonName: Neutron Stars and Pulsars
lessonNumber: 7
moduleNumber: 3
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - astrophysics-iv-m2-l6
learningObjectives:
  - Describe how core-collapse supernovae form neutron stars and why neutron degeneracy pressure supports them.
  - Compute the characteristic scales of neutron stars: radius, density, surface gravity, and escape velocity.
  - Explain the lighthouse model of pulsars and derive the spin-down age and magnetic field from timing observables.
  - Distinguish the pulsar subclasses: rotation-powered, millisecond (recycled), magnetars, and binary pulsars.
concepts:
  - Core-collapse supernova
  - Neutron star
  - Neutron degeneracy pressure
  - Pulsar
  - Lighthouse model
  - Magnetar
tags:
  - astrophysics
  - compact-objects
  - pulsars
sourceType: authored-courseware
***

# Neutron Stars and Pulsars

## Overview

When a massive star's iron core collapses, no nuclear reaction can save it: the core implodes to nuclear density, and one of two things happens — a black hole, or a neutron star. A neutron star is ~1.4 solar masses squeezed into a ~10 km radius: nuclear matter in bulk, densities of ~10¹⁷ kg m⁻³, surface gravity ~10¹¹ times Earth's, and magnetic fields up to a trillion times the strongest laboratory fields. Their rotating, magnetised form — the pulsar — flashes like a cosmic lighthouse with clock-like regularity, and has delivered some of physics' sharpest results: the first exoplanets ever found, the first confirmation of gravitational-wave energy loss, and a laboratory for matter at densities no accelerator can reach.

## Learning Path

1. Trace core collapse: iron core, electron capture, bounce, neutrino-driven explosion.
2. Build the neutron star: neutron degeneracy pressure, composition layers, and the mass limit.
3. Compute the extreme scales: density, gravity, escape velocity, spin.
4. Learn the lighthouse model and why the beam sweeps past us as pulses.
5. Use timing: spin-down luminosity, characteristic age, magnetic field estimates.
6. Tour the subclasses — recycled millisecond pulsars, magnetars, binary pulsars — and their physics dividends.

## Core Explanation

### From iron core to neutron star

Massive stars (≳ 8 M_☉) fuse progressively heavier fuels until they build an iron core: iron-group nuclei are the binding-energy peak, so fusion beyond iron consumes rather than releases energy. When the core exceeds the effective Chandrasekhar mass (~1.4 M_☉), electron degeneracy can no longer hold it; electrons are captured into protons (p + e⁻ → n + ν_e), pressure collapses, and the core free-falls at ~0.25c.

Collapse halts when nuclear density (~3 × 10¹⁷ kg m⁻³) is reached and neutron degeneracy plus nuclear forces stiffen the core. The infalling outer material bounces off the rigid core, and the shock — revived by intense neutrino heating — blows the star apart: a **core-collapse (Type II) supernova**, briefly outshining a galaxy, ejecting the elements forged by the star (and by explosive nucleosynthesis). What remains is the neutron star (or, if massive enough, a black hole). The Crab Nebula is the remnant of the supernova of 1054 CE; its pulsar spins 30 times per second.

### Structure and support

A neutron star is supported mainly by neutron degeneracy pressure and the strong nuclear force's short-range repulsion, with an upper mass limit of ~2–2.2 M_☉ (the Tolman–Oppenheimer–Volkoff limit, the neutron-star analogue of Chandrasekhar's). Layers from surface inward:

1. **Crust:** a lattice of neutron-rich nuclei with free electrons (~100 m thick, the strongest material in the Universe).
2. **Inner crust:** neutron-rich nuclei immersed in a neutron superfluid.
3. **Core:** mostly superfluid neutrons with superconducting protons and degenerate electrons; the very centre may hold exotic phases (hyperons, quark matter) — an open question.

### Extreme scales

For M = 1.4 M_☉ = 2.8 × 10³⁰ kg and R = 10 km:

- **Density:** ρ ≈ 3M/(4πR³) ≈ 6.7 × 10¹⁷ kg m⁻³ — exceeding nuclear density; a sugar-cube of neutron-star matter outweighs every mountain on Earth.
- **Surface gravity:** g = GM/R² ≈ 1.9 × 10¹² m s⁻² — 2 × 10¹¹ g_earth.
- **Escape velocity:** v_esc = √(2GM/R) ≈ 0.6c — gravity this strong requires general-relativistic treatment.
- **Spin:** angular momentum conservation spins the collapsed core up: periods from ~milliseconds to seconds.

### Pulsars: the lighthouse model

The core's magnetic field, compressed by collapse, reaches ~10⁸ T; rapid rotation swings it around. Charged particles accelerated along the magnetic axis emit beamed radiation, and if that beam crosses our line of sight each rotation, we observe a pulse — a lighthouse. The periods (down to 1.4 ms) and their stability (millisecond pulsars rival atomic clocks over years) prove the emitter is compact and rigid: only a neutron star fits.

### Timing physics

Pulsars spin down as magnetic braking drains rotational energy. Two observables — period P and its derivative Ṗ — yield estimates:

- **Spin-down luminosity:** Ė = 4π²I Ṗ/P³ (I ≈ 10³⁸ kg m²) — the power budget of the emission.
- **Characteristic age:** τ = P/(2Ṗ) — the age if braking has been constant (Crab pulsar: P = 0.033 s, Ṗ = 4.2 × 10⁻¹³ → τ ≈ 1240 yr, consistent with the 1054 CE supernova).
- **Surface magnetic field:** B ≈ 3.2 × 10¹⁵ √(P Ṗ) T (dipole model).

### The subclasses

- **Millisecond pulsars:** old pulsars spun back up by accretion from a binary companion ("recycled"), spinning at hundreds of Hz — the most stable clocks known, used in pulsar timing arrays hunting nanohertz gravitational waves.
- **Magnetars:** B ~ 10¹⁰–10¹¹ T; magnetic-field decay powers X-ray/gamma outbursts and giant flares — the strongest magnets in the Universe.
- **Binary pulsars:** the Hulse–Taylor pulsar (1974) orbits a companion; its orbital period decays exactly as gravitational-wave emission predicts (Nobel 1993) — the first indirect detection of gravitational waves, previewing lesson 8's direct ones.
- **Pulsar planets:** timing residuals around PSR B1257+12 revealed the first exoplanets ever discovered (1992) — worlds forged in supernova fallout.

## Key Ideas

- Neutron stars form when collapsing iron cores halt at nuclear density; neutron degeneracy and nuclear repulsion hold them up, limited by the ~2.2 M_☉ TOV limit.
- Scales: ~10 km radius, ~10¹⁸ kg m⁻³ density, g ~ 10¹¹ g_earth, v_esc ~ 0.6c.
- Core-collapse supernovae eject the elements of the periodic table and leave neutron stars or black holes; the Crab is the template.
- Pulsars are rotating magnetised neutron stars; the lighthouse beam produces clock-like pulses.
- P and Ṗ determine spin-down power, characteristic age, and magnetic field.
- Millisecond pulsars, magnetars, and binary pulsars are specialised laboratories: clocks, magnets, and gravitational-wave tests respectively.

## Worked Examples

**Example 1 — Sugar-cube mass.**
At ρ = 6.7 × 10¹⁷ kg m⁻³, a 1 cm³ cube has mass 6.7 × 10¹¹ kg — ~700 billion kilograms per cubic centimetre, comparable to a mountain.

**Example 2 — Crab pulsar age.**
τ = P/(2Ṗ) = 0.033/(2 × 4.2 × 10⁻¹³) ≈ 3.9 × 10¹⁰ s ≈ 1240 yr. The supernova was observed in 1054 CE (~970 years ago); the difference reflects braking-index evolution away from the simple dipole assumption.

**Example 3 — Spin-up by collapse.**
A 1 M_☉ core of radius 10⁶ m rotating with period 10 days collapses to 10 km: angular momentum conservation gives P_final = P_initial (R_final/R_initial)² = 8.6 × 10⁵ × (10⁻²)² s ≈ 86 s before mass-structure corrections; realistic cores spin faster and shed angular momentum, landing at millisecond-to-second periods.

**Example 4 — Magnetic field estimate.**
A millisecond pulsar with P = 3 ms, Ṗ = 10⁻²⁰: B ≈ 3.2 × 10¹⁵ √(3 × 10⁻³ × 10⁻²⁰) ≈ 5 × 10⁶ T — recycled fields are a billion times weaker than young pulsars', consistent with accretion burying and ohmic decay.

## Common Misconceptions

1. **"Neutron stars are giant atomic nuclei."** They are held by gravity in addition to nuclear forces and have layered structure including a crystalline crust — the analogy helps but breaks quickly.
2. **"Pulsars pulse because the star itself expands and contracts."** The star is steady; the pulses are a rotating beam geometry — lighthouse, not heartbeat.
3. **"All supernovae leave neutron stars."** Only core-collapse ones; Type Ia disrupt completely. And heavy enough cores collapse to black holes instead.
4. **"The Crab pulsar will spin forever."** Spin-down drains its energy; in ~10⁴ years it will fade as a radio pulsar, though the neutron star itself persists for billions of years as a cooling ember.
5. **"Magnetar fields violate physics."** They are extreme but allowed; quantum electrodynamics in such fields (vacuum birefringence) is itself being tested with them.

## Connections

- **Astrophysics III:** White dwarfs were the first compact object; the TOV limit is the Chandrasekhar argument applied to neutrons; massive-star evolution (fuel staircase) supplies the progenitors.
- **Quantum and nuclear physics:** Degeneracy pressure, superfluidity, and beta processes all operate at bulk scale.
- **Next lesson:** Binary neutron-star mergers are both gravitational-wave sources and heavy-element factories.
- **Observational astronomy:** Radio timing, X-ray bursts, and gamma-ray flashes make pulsars a multi-wavelength discipline.

## Quick Check

1. Why does fusion stop at iron, and what does that imply for the core?
2. What holds up a neutron star, and what limits its mass?
3. Estimate the surface gravity of a 1.4 M_☉, 10 km neutron star.
4. How does the lighthouse model explain pulses from a steady star?
5. What did the Hulse–Taylor binary pulsar demonstrate?

**Answers:**
1. Iron-group nuclei sit at the binding-energy maximum; fusing them absorbs energy, so no fusion can support the core — collapse is inevitable once it exceeds the degeneracy-supported mass.
2. Neutron degeneracy pressure plus the short-range repulsive nuclear force; the Tolman–Oppenheimer–Volkoff limit (~2–2.2 M_☉) bounds the mass.
3. g = GM/R² ≈ 6.67 × 10⁻¹¹ × 2.8 × 10³⁰ / 10⁸ ≈ 1.9 × 10¹² m s⁻² ≈ 2 × 10¹¹ g_earth.
4. Radiation is beamed along the (tilted) magnetic axis; rotation sweeps the beam across space, so observers in its path see a flash each rotation.
5. Its orbital period shrinks exactly as general relativity predicts for energy carried away by gravitational waves — the first indirect detection (Nobel 1993).

## Takeaway

A neutron star is matter pushed to its limit and surviving: nuclear density, quantum pressure, and billion-tesla fields packaged into a city-sized sphere that ticks like a clock. They are supernova ashes, gravitational-wave prototypes, and the densest matter we can observe. Next lesson takes the collapse one step further — past the last pressure that matter can muster — to black holes.
