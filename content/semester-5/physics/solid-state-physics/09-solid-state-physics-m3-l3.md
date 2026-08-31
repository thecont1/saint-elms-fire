***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: solid-state-physics
courseName: Solid State Physics
moduleId: solid-state-physics-module-3
moduleName: Band Theory
lessonId: solid-state-physics-m3-l3
lessonName: Semiconductors, Insulators and Doping
lessonNumber: 9
moduleNumber: 3
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - solid-state-physics-m3-l2
learningObjectives:
  - Distinguish insulators, semiconductors, and metals by band structure.
  - Compute carrier concentrations in doped semiconductors.
  - Describe the p–n junction and its rectification.
  - State the Hall effect and its use in measuring carrier density.
concepts:
  - Insulator vs. semiconductor
  - Intrinsic semiconductor
  - Doping (n-type and p-type)
  - p–n junction
  - Hall effect
  - Carrier concentration
tags:
  - physics
  - solid-state
  - semiconductors
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Semiconductors, Insulators and Doping

## Overview
Semiconductors are the foundation of modern electronics. Their band gap (typically $0.1$–$3\text{ eV}$) gives them a small but non-zero conductivity at room temperature; doping with donor or acceptor impurities controls the carrier type and concentration; the p–n junction is the basis of diodes, transistors, and solar cells. This lesson develops the semiconductor picture: intrinsic and extrinsic carriers, doping statistics, the p–n junction, and the Hall effect as a diagnostic.

## Learning Path
- What you should already know: band theory, Fermi–Dirac statistics, electrostatics.
- What this lesson adds: semiconductor physics, doping, p–n junctions, the Hall effect.
- What it unlocks: semiconductor devices, optoelectronics, integrated circuits.

## Core Explanation
**Insulator vs. semiconductor.** Both have a filled valence band and an empty conduction band. The distinction is the size of the gap: insulators $E_g > 3$–$4\text{ eV}$ (essentially no carriers at room $T$); semiconductors $E_g \sim 0.1$–$3\text{ eV}$ (small but non-zero carrier density). Examples: Si $1.1\text{ eV}$, Ge $0.67\text{ eV}$, GaAs $1.42\text{ eV}$, InP $1.35\text{ eV}$, diamond $5.5\text{ eV}$, GaN $3.4\text{ eV}$.

**Intrinsic carrier concentration.** $n_i = \sqrt{N_c N_v} e^{-E_g/(2 k_B T)}$, where $N_c = 2 (m_e^* k_B T/(2\pi \hbar^2))^{3/2}$ is the effective DOS in the conduction band (and similarly $N_v$ for the valence band). For Si at $300\text{ K}$: $n_i \approx 1.5 \times 10^{10}\text{ cm}^{-3}$.

**Electron and hole densities.** $n$ = number of electrons in the conduction band per unit volume. $p$ = number of holes (missing electrons) in the valence band per unit volume. The mass action law: $n p = n_i^2$, independent of doping.

**Fermi level.** In an intrinsic semiconductor, the Fermi level is at the middle of the gap: $E_F \approx E_g/2$ (more precisely, $\frac{1}{2} E_g + \frac{3}{4} k_B T \ln(m_v^*/m_e^*)$). In doped semiconductors, $E_F$ shifts toward the band that is being populated.

**Doping.** Adding impurities to control the carrier type:
- *Donors* (e.g. P in Si): add electrons to the conduction band, giving *n-type* material. Donor energy just below the conduction band ($\sim 0.05\text{ eV}$ for P in Si).
- *Acceptors* (e.g. B in Si): add holes to the valence band, giving *p-type* material. Acceptor energy just above the valence band.

**Ionisation of dopants.** At room $T$, most donors and acceptors are ionised: their electrons (or holes) are released to the conduction (or valence) band. The ionisation energy is small ($\sim 0.05\text{ eV}$), so $k_B T \approx 0.026\text{ eV}$ is enough.

**Carrier concentrations in doped semiconductors.** $n \approx N_D$ (donor concentration) for n-type, $p \approx N_A$ (acceptor concentration) for p-type. The minority carriers are determined by the mass action: for n-type, $p = n_i^2/n = n_i^2/N_D$.

**Temperature dependence.** Three regimes:
- *Low $T$* (freeze-out): carriers frozen on dopants, $n \propto e^{-E_D/(k_B T)}$.
- *Mid $T$* (extrinsic): all dopants ionised, $n \approx N_D$, $T$-independent.
- *High $T$* (intrinsic): thermal excitation across the gap dominates, $n \approx n_i \propto e^{-E_g/(2 k_B T)}$.

**Fermi level in doped material.** For n-type with $N_D \gg n_i$: $E_F = E_c - k_B T \ln(N_c/N_D)$. For $N_D = 10^{15}\text{ cm}^{-3}$ in Si: $E_c - E_F \approx 0.25\text{ eV}$ (Fermi level is in the gap, closer to the conduction band).

**Built-in potential of a p–n junction.** A junction of p-type and n-type has a depletion region with a built-in potential $V_\text{bi} = (k_B T/e) \ln(N_A N_D / n_i^2)$. For Si with $N_A = N_D = 10^{16}\text{ cm}^{-3}$: $V_\text{bi} \approx 0.7\text{ V}$.

**Depletion width.** $W = \sqrt{2 \epsilon V_\text{bi}/e (N_A + N_D)/(N_A N_D)}$. For Si, $W \approx 1\ \mu\text{m}$ at typical doping.

**Rectification by a p–n junction.** In forward bias (positive on p-side), the built-in potential is reduced and current flows easily. In reverse bias, the depletion region widens and current is small. The current–voltage characteristic is the *Shockley diode equation*:

$$I = I_s \left(e^{eV/(k_B T)} - 1\right),$$

where $I_s$ is the reverse saturation current (small). Rectification ratio of $10^6$ or more.

**Capacitance of a p–n junction.** The depletion region acts as a capacitor. $C = \epsilon A / W$, where $A$ is the area. The Mott–Schottky relation: $1/C^2 \propto V_\text{bi} - V$ allows measurement of doping profiles.

**Bipolar junction transistor (BJT).** Two p–n junctions in series (pnp or npn). The middle region is the *base*; the ends are the *emitter* and *collector*. The transistor amplifies by using a small base current to control a large collector current. The basis of analog electronics.

**Field-effect transistor (FET).** A semiconductor channel whose conductivity is controlled by an electric field from a gate. The MOSFET (metal–oxide–semiconductor FET) is the basis of digital electronics. The gate oxide (typically SiO$_2$ or HfO$_2$) insulates the gate from the channel.

**CMOS (complementary MOS).** An n-MOS and p-MOS transistor in series. The basic digital logic gate. The dominant technology of integrated circuits.

**Moore's law.** The number of transistors on a chip doubles every $\sim 2$ years. Held for $\sim 50$ years, now slowing as feature sizes approach atomic scales.

**Photodiodes and solar cells.** A p–n junction under illumination: photons with $h\nu > E_g$ create electron–hole pairs, which are separated by the built-in field and produce a photocurrent. The open-circuit voltage is $\sim E_g/e$. The efficiency is limited by the Shockley–Queisser limit ($\sim 33\%$ for a single junction).

**Light-emitting diodes (LEDs).** Recombination of electrons and holes at a p–n junction produces photons. The energy is $\sim E_g$ (direct-gap semiconductors are most efficient). GaAs, InGaN, AlGaInP are the basis of modern LEDs.

**Laser diodes.** A p–n junction under high injection, with an optical cavity. Stimulated emission produces coherent light. The basis of fibre-optic communication, laser pointers, and CD/DVD players.

**Heterostructures.** Junctions of different semiconductors (e.g. GaAs/AlGaAs). The band offsets create quantum wells, which confine electrons and holes in 2D. The basis of the quantum cascade laser, the high-electron-mobility transistor (HEMT), and many other devices.

**Modulation doping.** Dopants are placed in a wider-bandgap material away from the quantum well. Electrons fall into the well but the ionised donors are physically separated, reducing scattering. Very high mobilities (HEMTs reach $10^7\text{ cm}^2/(\text{V·s})$ at low $T$).

**Quantum Hall effect.** In a 2D electron gas at high $B$ and low $T$, the Hall conductivity is quantised: $\sigma_{xy} = \nu e^2/h$, with $\nu$ integer (IQHE) or fractional (FQHE). The longitudinal resistance vanishes at the plateaus. Topologically protected.

**Hall effect as a measurement tool.** Measure the Hall voltage in a known $B$; the Hall coefficient $R_H = V_H t/(I B)$ gives the carrier density $n = 1/(e R_H)$ (for a single carrier type). The sign of $R_H$ gives the carrier sign. Standard for characterising semiconductors.

**Mobility.** $\mu = \sigma/(n e)$ — the drift velocity per unit electric field. Limited by phonon scattering (at high $T$, $\mu \propto T^{-3/2}$) and impurity scattering (at low $T$, $\mu \propto T^{3/2}$). Si electron mobility $\sim 1400\text{ cm}^2/(\text{V·s)}$; GaAs $\sim 8500$.

**Hall effect in two-carrier systems.** Both electrons and holes contribute; the simple $R_H = 1/(n e)$ does not hold. The analysis is more complex.

**2D electron gas.** At a MOSFET interface, at a heterojunction (e.g. GaAs/AlGaAs), or in graphene. The density of states is constant (2D), not $\propto \sqrt{E}$ (3D). Different physics from 3D.

**Optical properties.** The dielectric function $\epsilon(\omega)$ has a strong absorption edge at $E_g$ (direct transitions) and additional structure from indirect transitions and excitons. The refractive index $n = \sqrt{\epsilon}$. Used in optical coatings, photodetectors, solar cells.

**Excitons.** Bound electron–hole pairs, like hydrogen atoms in the semiconductor. Binding energy $\sim 0.01\text{ eV}$ (Wannier excitons) or larger (Frenkel excitons). Important for optical properties near the band edge.

**Effective mass and the cyclotron mass.** For a parabolic band, both are the same. For non-parabolic bands, they differ. The cyclotron mass is measured by cyclotron resonance or de Haas–van Alphen oscillations; the effective mass is from band-structure calculations.

**Band structure of common semiconductors.** Si: indirect gap $1.1\text{ eV}$ (at $\Delta$, near $X$); six conduction band valleys. Ge: indirect gap $0.67\text{ eV}$ at $L$; eight conduction band valleys. GaAs: direct gap $1.42\text{ eV}$ at $\Gamma$. InP: direct gap $1.35\text{ eV}$ at $\Gamma$. GaN: direct gap $3.4\text{ eV}$ at $\Gamma$ (blue LED).

**Why GaAs is preferred for high-speed devices.** Higher electron mobility (8500 vs 1400), direct gap (efficient optical), and the ability to make heterostructures with AlGaAs.

**2D materials in semiconductor physics.** Graphene: zero gap, very high mobility, used in RF transistors. MoS$_2$: direct gap in monolayer (used in transistors). Black phosphorus: tunable gap, used in IR detectors. TMDCs: tunable band gaps.

**Amorphous semiconductors.** Used in thin-film transistors (TFTs), solar cells (a-Si), and X-ray detectors. No long-range order; band edges are smeared out; carrier transport by hopping.

**Organic semiconductors.** Used in OLED displays, organic solar cells, organic TFTs. Conducting polymers, small molecules. Charge transport by hopping between localised states.

**Topological insulator devices.** Bi$_2$Se$_3$, Bi$_2$Te$_3$. The surface states are conducting; the bulk is insulating. Used in spintronic devices and in the search for Majorana fermions (topological quantum computing).

**Wide-bandgap semiconductors.** GaN, SiC, diamond, AlN. For high-power, high-frequency, and high-temperature electronics. GaN LEDs are the basis of efficient lighting (blue, white).

**Power electronics.** SiC and GaN are replacing Si in high-voltage, high-frequency applications. Faster switching, lower losses, smaller devices.

**Solar cell physics.** A p–n junction under illumination. Photocurrent $\propto$ light intensity; open-circuit voltage $\sim E_g/e$. The Shockley–Queisser limit: $\sim 33\%$ for a single-junction cell. Multi-junction cells (tandem) reach $> 40\%$.

**Light absorption in semiconductors.** $\alpha(E) \propto \sqrt{E - E_g}$ for direct transitions (3D). Indirect transitions are much weaker (need phonon assistance). The absorption edge gives a direct measurement of $E_g$.

**Optical processes.** Absorption, stimulated emission, spontaneous emission, recombination. The rate equations (Einstein $A$ and $B$ coefficients) describe the laser and LED.

**Carrier recombination.** Band-to-band (radiative, in direct-gap), Auger (three-particle, dominant at high doping), Shockley–Read–Hall (through defect states, dominant in indirect-gap). The minority carrier lifetime is a key parameter.

**Quantum wells.** Thin layers (5–20 nm) of a narrow-gap semiconductor between wider-gap barriers. Electrons and holes are confined in 2D, with quantised energy levels. The basis of many modern devices.

**Quantum dots.** Tiny semiconductor particles ($\sim 5$–$50\text{ nm}$), where carriers are confined in 3D. Discrete energy levels; size-tunable band gap. Used in displays (QLED), solar cells, single-photon sources, and quantum computing.

**2D heterostructures.** Stacks of 2D materials (graphene, hBN, MoS$_2$, etc.) with atomically sharp interfaces. Used in research on twistronics (magic-angle graphene), exciton condensates, and topological materials.

**Hot-electron transistors.** Use ballistic electrons injected at high energy. Faster than conventional transistors. The basis of the work of the Nobel laureate Herbert Kroemer.

**Tunnelling devices.** Tunnel diodes (Esaki diodes), resonant tunnelling diodes, single-electron transistors. Based on quantum-mechanical tunnelling through thin barriers. Used in high-frequency oscillators and in quantum computing.

**Why Si dominates electronics.** Abundant, easy to purify, native oxide (SiO$_2$) is an excellent insulator. The integrated-circuit industry is built on Si. Ge, GaAs, InP, GaN are used where Si is inadequate (high speed, optical, high power).

**The pn-junction in equilibrium.** The Fermi level must be constant throughout the sample at equilibrium. This requires band bending: the bands on the p-side are higher than on the n-side. The built-in potential $V_\text{bi}$ is the difference.

**Depletion approximation.** The depletion region is fully depleted of mobile carriers; the charge is from ionised dopants. The electric field is linear in $x$ (in 1D), and the potential is quadratic. The total depletion width is $W$.

**Capacitance–voltage profiling.** Measure $C$ vs. $V$; plot $1/C^2$ vs. $V$; the slope gives the doping concentration at the edge of the depletion region. Used to characterise doping profiles.

**Bipolar transistor action.** Forward bias the base–emitter junction (electrons flow into the base); reverse bias the base–collector (electrons flow out into the collector). The base current controls the collector current. Current gain $\beta = I_C/I_B$ can be $100$ or more.

**MOSFET action.** The gate voltage controls the charge density in the channel (a thin layer of electrons or holes under the oxide). Above threshold, the channel conducts; below, it does not. The basis of digital logic.

**CMOS inverter.** An n-MOS and p-MOS transistor in series. Input low → p-MOS on, n-MOS off → output high. Input high → opposite. The basic digital gate. Power dissipation only during switching.

**Scaling and Moore's law.** As features shrink, more transistors fit on a chip. The end of Moore's law (around $3$–$5\text{ nm}$ features) is approaching; new architectures (3D stacking, quantum computing) are being explored.

**Why semiconductor physics matters.** Every modern electronic device — phone, computer, TV, car — relies on semiconductor physics. The economic value is in the trillions of dollars. The science is mature but still evolving (topological insulators, 2D materials, quantum computing).

**Quantum information with semiconductors.** Quantum dots as qubits, donor spins (e.g. P in Si) as qubits, topological qubits (Majorana zero modes in semiconductor nanowires). Active research area.

## Key Ideas
- Semiconductor: gap $E_g \sim 0.1$–$3\text{ eV}$, intrinsic carriers $\propto e^{-E_g/(2 k_B T)}$.
- Doping: donors (n-type) or acceptors (p-type).
- Mass action: $n p = n_i^2$.
- p–n junction: built-in potential, rectification, Shockley diode equation.
- Hall effect: $R_H = 1/(n e)$.

## Worked Examples
**Example 1 — Intrinsic Si at $300\text{ K}$.** $E_g = 1.1\text{ eV}$, $N_c \approx 2.8 \times 10^{19}\text{ cm}^{-3}$, $N_v \approx 1.04 \times 10^{19}\text{ cm}^{-3}$. $n_i = \sqrt{N_c N_v} e^{-E_g/(2 k_B T)} = \sqrt{2.8 \times 10^{19} \times 1.04 \times 10^{19}} \times e^{-1.1/(2 \times 0.0259)} \approx 1.7 \times 10^{10} \times 4.7 \times 10^{-10} \approx 1.4 \times 10^{10}\text{ cm}^{-3}$. Matches the observed $1.5 \times 10^{10}\text{ cm}^{-3}$.

**Example 2 — Doped Si.** $N_D = 10^{16}\text{ cm}^{-3}$ phosphorus in Si. At $300\text{ K}$, all donors ionised. $n \approx 10^{16}\text{ cm}^{-3}$. Minority $p = n_i^2/n = (1.5 \times 10^{10})^2/(10^{16}) \approx 2.25 \times 10^4\text{ cm}^{-3}$. $\sigma = n e \mu_e + p e \mu_h \approx 10^{16} \times 1.6 \times 10^{-19} \times 1400 = 2.24\text{ S/cm}$.

**Example 3 — Hall measurement.** Si sample, $B = 0.5\text{ T}$, $I = 1\text{ mA}$, $t = 0.5\text{ mm}$. For $n = 10^{16}\text{ cm}^{-3}$: $V_H = I B/(n e t) = 10^{-3} \times 0.5/(10^{22} \times 1.6 \times 10^{-19} \times 5 \times 10^{-4}) = 6.25 \times 10^{-4}\text{ V} = 0.625\text{ mV}$. Easily measurable.

**Example 4 — Built-in potential of Si p–n junction.** $N_A = 10^{18}$, $N_D = 10^{18}$. $V_\text{bi} = (k_B T/e) \ln(N_A N_D / n_i^2) = 0.0259 \ln(10^{36}/(1.5 \times 10^{10})^2) = 0.0259 \ln(4.4 \times 10^{15}) \approx 0.0259 \times 36.1 \approx 0.93\text{ V}$.

**Example 5 — LED photon energy.** GaAs LED: $E_g = 1.42\text{ eV}$. Photon wavelength: $\lambda = h c / E_g = 1240 / 1.42 = 873\text{ nm}$ — near IR. GaAs LEDs are IR. For visible (red) LEDs, use AlGaAs with lower Al content (higher gap, lower wavelength). For green/blue, use GaN-based materials (InGaN, $E_g \sim 2.5$–$3.5\text{ eV}$).

## Common Misconceptions
- **"Doping creates carriers."** Not exactly — doping creates *levels* in the gap. At room $T$, the carriers are thermally excited from these levels into the bands.
- **"The Fermi level is in the gap in semiconductors."** Sometimes yes, sometimes no — it depends on the doping. In intrinsic, near the middle; in n-type, near the conduction band; in p-type, near the valence band.
- **"Holes are positive electrons."** Holes are *missing* electrons in an otherwise filled band. They behave as positive particles with positive charge and (in general) positive effective mass.
- **"Si is the best semiconductor."** For many applications, yes; for others (high speed, optical, high power), GaAs, InP, GaN, SiC are better.

## Connections
Semiconductor physics is the basis of the trillion-dollar electronics industry. The p–n junction is the building block of every diode, transistor, LED, and laser diode. Quantum wells, quantum dots, and 2D materials are the modern frontier. The Hall effect is a fundamental diagnostic and the basis of the quantum Hall effect.

## Quick Check
1. Distinguish insulators and semiconductors by gap size.
2. State the mass action law.
3. What is the built-in potential of a p–n junction?
4. State the Shockley diode equation.
5. What does the Hall effect measure?

## Takeaway
- Semiconductor: $E_g \sim 0.1$–$3\text{ eV}$.
- Doping: n-type (donors) and p-type (acceptors).
- $n p = n_i^2$; intrinsic $n_i \propto e^{-E_g/(2 k_B T)}$.
- p–n junction: $V_\text{bi} = (k_B T/e) \ln(N_A N_D / n_i^2)$; rectification.
- Hall effect: $R_H = 1/(n e)$.
