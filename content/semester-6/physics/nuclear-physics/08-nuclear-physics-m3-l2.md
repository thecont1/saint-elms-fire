***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: nuclear-physics
courseName: Nuclear Physics
moduleId: nuclear-physics-module-3
moduleName: Particles and Applications
lessonId: nuclear-physics-m3-l2
lessonName: Detectors, Accelerators and Reactors
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - nuclear-physics-m1-l1
  - nuclear-physics-m2-l3
learningObjectives:
  - Describe the operating principles of common nuclear and particle detectors.
  - Explain the operation of electrostatic and cyclic accelerators, including the synchrotron.
  - Sketch the design of a thermal-neutron fission reactor and identify its main components.
concepts:
  - Geiger counter
  - Scintillation detector
  - Semiconductor detector
  - Cyclotron
  - Synchrotron
  - Fission reactor
tags:
  - physics
  - nuclear-physics
  - detectors
  - accelerators
  - reactors
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Detectors, Accelerators and Reactors

## Overview

Nuclear and particle physics rely on three classes of instruments: detectors that record the passage of ionising radiation, accelerators that produce high-energy particles, and reactors that sustain controlled chain reactions. This lesson surveys the most important technologies in each class, working from the basic physics of each. We start with the detection of ionising radiation — Geiger counters, scintillators, semiconductor detectors, and cloud chambers — then move to accelerators — Van de Graaff, cyclotron, and synchrotron — and finish with the operating principles of a thermal-neutron fission reactor. The lesson provides the engineering counterpart to the nuclear-physics principles developed in earlier lessons and prepares for the applications survey in the next lesson.

## Learning Path

- **What you should already know**: the interaction of charged particles with matter (covered in introductory physics); the chain reaction in fission (Lesson m2-l3); the structure of nuclei and the cross-sections for nuclear reactions (Module 2).
- **What this lesson adds**: the working principles of common detectors, accelerators, and reactors; the design choices and limitations of each technology.
- **What later lessons this will unlock**: the applications of nuclear techniques in medicine, energy, and dating (Lesson m3-l3); the operation of large particle-physics experiments at CERN and elsewhere.

## Core Explanation

### Detection of ionising radiation

Ionising radiation — charged particles, photons, neutrons — deposits energy in matter by ionisation and excitation. The three main classes of detector convert this deposited energy into a measurable signal.

**Gas-filled detectors** operate by collecting the electron–ion pairs produced by ionisation in a gas. The simplest is the **Geiger–Müller (GM) tube**: a thin-wire anode at high positive voltage (typically 400–1000 V) along the axis of a cylindrical cathode filled with argon or neon plus a quenching gas. A single ionising event triggers an avalanche that gives a large, easily detected pulse. The GM tube is sensitive to all ionising radiation but cannot distinguish energies; it is used for surveying and contamination monitoring.

A **proportional counter** operates at a lower voltage, where the pulse height is proportional to the deposited energy. Proportional counters are used for alpha and beta spectroscopy with energy resolution of about 10–20%.

A **multi-wire proportional chamber (MWPC)** uses an array of anode wires in a gas volume; each wire acts as an independent proportional counter. The position of the ionisation event can be reconstructed from the wires that fire. MWPCs are the workhorses of tracking detectors in particle-physics experiments.

**Scintillation detectors** use a material (organic liquid, plastic, or inorganic crystal) that emits visible light when ionising radiation passes through. The light is collected by a photomultiplier tube and converted to an electrical pulse. Sodium iodide doped with thallium, NaI(Tl), is a common inorganic scintillator with high density and good energy resolution; it is widely used in gamma-ray spectroscopy. Organic scintillators (plastic, liquid) are fast and inexpensive, suitable for timing measurements.

**Semiconductor detectors** use a reverse-biased p–n junction; ionising radiation creates electron–hole pairs that are collected at the electrodes. The energy required to create an electron–hole pair in silicon is about 3.6 eV, much less than the 30 eV required to create an ion pair in a gas, so semiconductor detectors have excellent energy resolution. High-purity germanium (HPGe) detectors cooled to liquid-nitrogen temperature have resolutions of about 0.1% at 1 MeV, the standard for precision gamma-ray spectroscopy. Silicon strip and pixel detectors are the standard tracking detectors in modern particle-physics experiments.

**Cloud chambers**, **bubble chambers**, and **wire chambers** are visual detectors that record the tracks of charged particles. The cloud chamber uses supersaturated vapour; ions created by charged particles nucleate droplets, making the track visible. The bubble chamber uses superheated liquid; ions nucleate bubbles. Both are now mostly historical, replaced by electronic tracking detectors, but they were instrumental in the discovery of the positron, the muon, the strange particles, and many resonances.

**Cherenkov detectors** use the fact that a charged particle moving through a medium faster than the speed of light in that medium emits a cone of light (the Cherenkov effect). The angle of the cone is $\cos\theta = c/(nv) = 1/(\beta n)$, where $n$ is the refractive index and $\beta = v/c$. Cherenkov detectors are used for particle identification (different masses at the same momentum give different Cherenkov angles) and for timing.

**Calorimeters** measure the total energy of a particle by absorbing it completely. Electromagnetic calorimeters (using high-Z materials like lead) absorb electrons and photons via electromagnetic showers; hadronic calorimeters (using iron or uranium absorbers with plastic scintillator or other active material) absorb hadrons via hadronic showers. Calorimeters are the standard way to measure the energy of high-energy particles in collider experiments.

### Neutron detection

Neutrons are uncharged, so they do not ionise directly. They are detected through nuclear reactions that produce charged particles, most commonly:

- $^3$He + $n \to ^3$H + $p$ (used in $^3$He proportional counters).
- $^6$Li + $n \to ^4$He + $^3$H (used in lithium-glass scintillators).
- $^{10}$B + $n \to ^7$Li + $\alpha$ (used in BF$_3$ counters and boron-lined proportional counters).

The cross-sections for these reactions are large for thermal neutrons (about 0.025 eV) and fall off roughly as $1/v$ at higher energies, where $v$ is the neutron velocity. To detect fast neutrons, one surrounds the detector with a moderator (typically polyethylene) that thermalises the neutrons before they reach the reactive material.

### Accelerators

A particle accelerator produces a beam of high-energy particles for nuclear and particle physics experiments. The two main classes are electrostatic accelerators and cyclic accelerators.

**Electrostatic accelerators** use a high voltage to accelerate charged particles through a single potential drop. The **Van de Graaff accelerator** uses a moving belt to charge a high-voltage terminal; energies up to about 10 MeV are achievable. The **tandem Van de Graaff** accelerates negative ions to a positive terminal, strips electrons to produce positive ions, and accelerates them again; energies up to about 30 MeV are possible. The **Cockcroft–Walton** voltage multiplier is a similar concept at lower energies, used for the first artificial nuclear disintegration (1932).

**Cyclic accelerators** use repeated crossings of a moderate potential difference to reach high energies. The **cyclotron** has two D-shaped electrodes (dees) in a uniform magnetic field; the particles spiral outward, gaining energy on each crossing. The cyclotron frequency is

$$\omega = \frac{qB}{m},$$

independent of the particle's energy (in the non-relativistic limit). Cyclotrons can reach energies of about 25 MeV per nucleon before the relativistic increase in mass becomes significant; medical cyclotrons for producing PET isotopes operate at about 10–20 MeV.

The **synchrocyclotron** varies the frequency to track the relativistic mass increase, reaching energies of several hundred MeV. The **synchrotron** combines frequency modulation with a varying magnetic field, keeping the particles on a fixed circular orbit. Modern synchrotrons reach energies of several TeV; the Large Hadron Collider at CERN accelerates protons to 7 TeV in a 27 km circumference ring.

**Linear accelerators (linacs)** accelerate particles in a straight line, using either electrostatic fields (for low energies) or radio-frequency cavities (for high energies). Linacs avoid the energy loss due to synchrotron radiation that affects circular accelerators of electrons. The Stanford Linear Accelerator Center (SLAC) operates a 3 km linac that accelerates electrons to 50 GeV; the proposed International Linear Collider would reach 500 GeV to 1 TeV.

### Reactors

A **fission reactor** is a device that sustains a controlled chain reaction of nuclear fission. The basic components are:

- **Fuel**: typically enriched uranium (3–5% $^{235}$U in $^{238}$U) or, in some designs, plutonium. The fuel is fabricated as uranium dioxide pellets, stacked in zirconium alloy cladding to form fuel rods.

- **Moderator**: a material that slows the fast fission neutrons to thermal energies, where the fission cross-section of $^{235}$U is large. Common moderators are light water (H$_2$O), heavy water (D$_2$O), and graphite. Light-water reactors are the most common type worldwide.

- **Control rods**: rods of neutron-absorbing material (boron, cadmium, or hafnium) that can be inserted or withdrawn to control the chain reaction. The control rods absorb neutrons and reduce the multiplication factor $k$.

- **Coolant**: a fluid that removes heat from the fuel and transports it to a heat exchanger. Light water, heavy water, gas (CO$_2$ or helium), and liquid sodium are all used in different reactor designs.

- **Containment**: a robust structure that contains the fuel, moderator, coolant, and control rods, and prevents the release of radioactive material in normal operation and in accidents.

The basic operating principle is that the chain reaction is controlled by balancing the neutron production against the losses. The four-factor formula gives the infinite-medium multiplication factor

$$k_\infty = \eta f p \epsilon,$$

where $\eta$ is the neutron yield per absorption, $f$ is the thermal utilisation factor, $p$ is the resonance escape probability, and $\epsilon$ is the fast fission factor. The effective multiplication factor in a finite reactor is

$$k_{\text{eff}} = k_\infty \times P_{\text{NL}},$$

where $P_{\text{NL}}$ is the non-leakage probability. A critical reactor has $k_{\text{eff}} = 1$; the chain reaction is self-sustaining at a steady power.

Common reactor types:

- **Pressurised water reactor (PWR)**: light water as moderator and coolant, kept under high pressure to prevent boiling. The most common reactor type worldwide.

- **Boiling water reactor (BWR)**: light water as moderator and coolant; the water boils in the core, and the steam is used directly to drive the turbine.

- **Pressurised heavy water reactor (PHWR)**: heavy water as moderator, light water or heavy water as coolant. Used in India and Canada; allows the use of natural uranium as fuel.

- **Gas-cooled reactor**: graphite moderator, CO$_2$ or helium coolant. Used in the UK (Magnox, AGR).

- **Fast breeder reactor**: no moderator, with a core of plutonium surrounded by a blanket of $^{238}$U. The fast neutrons convert $^{238}$U to $^{239}$Pu, breeding more fuel than they consume.

The thermal power of a typical large reactor is 3,000 MW(th), producing about 1,000 MW(e) of electricity. The thermal efficiency is about 33%, limited by the second law of thermodynamics at the temperature difference between the core and the condenser.

## Key Ideas

- **Gas-filled detectors**: GM tube (counting), proportional counter (energy), MWPC (tracking).
- **Scintillation detectors**: NaI(Tl) for gamma spectroscopy, plastic for timing.
- **Semiconductor detectors**: HPGe for high-resolution gamma spectroscopy; Si strip and pixel for tracking.
- **Cloud and bubble chambers**: visual tracking detectors, mostly historical.
- **Cherenkov detectors**: particle identification via the cone of light emitted when $v > c/n$.
- **Calorimeters**: total energy measurement via absorption.
- **Electrostatic accelerators**: Van de Graaff, tandem, Cockcroft–Walton; energies up to 30 MeV.
- **Cyclic accelerators**: cyclotron, synchrocyclotron, synchrotron; energies up to several TeV.
- **Linear accelerators**: linacs, useful for electrons; no synchrotron radiation loss.
- **Fission reactor**: fuel, moderator, control rods, coolant, containment; $k_{\text{eff}} = 1$ for critical operation.

## Worked Examples

### Example 1 — Energy resolution of a NaI detector

A NaI(Tl) scintillation detector has an energy resolution of about 7% at 662 keV. Estimate the number of photoelectrons produced per MeV of deposited energy.

**Solution.** A resolution of 7% at 662 keV means a FWHM of about 46 keV. For a Poisson-distributed number of photoelectrons, $\Delta E / E = 1/\sqrt{N}$, so $N = (1/0.07)^2 = 204$ photoelectrons. At 1 MeV, the number would be $204 \times 1000/662 = 308$ photoelectrons. The energy required per photoelectron is therefore about 3.2 keV, consistent with the scintillation efficiency of NaI(Tl).

### Example 2 — Cyclotron frequency for protons

A medical cyclotron has a magnetic field of 1.5 T. Compute the cyclotron frequency for protons and the maximum kinetic energy for a dee radius of 0.5 m.

**Solution.** The cyclotron frequency is

$$f = \frac{qB}{2\pi m} = \frac{1.602 \times 10^{-19} \times 1.5}{2\pi \times 1.673 \times 10^{-27}} \approx 2.29 \times 10^7\,\text{Hz} = 22.9\,\text{MHz}.$$

The maximum kinetic energy is reached at the outer radius, where the orbital radius is $r = 0.5$ m:

$$T_{\max} = \frac{(qBr)^2}{2m} = \frac{(1.602 \times 10^{-19} \times 1.5 \times 0.5)^2}{2 \times 1.673 \times 10^{-27}} \approx 1.3 \times 10^{-12}\,\text{J} \approx 8.1\,\text{MeV}.$$

This is in the right range for producing PET isotopes like $^{18}$F.

### Example 3 — Multiplication factor in a thermal reactor

A thermal reactor has $\eta = 2.07$, $f = 0.71$, $p = 0.87$, and $\epsilon = 1.03$. Estimate $k_\infty$.

**Solution.** $k_\infty = \eta f p \epsilon = 2.07 \times 0.71 \times 0.87 \times 1.03 = 1.35$. This is the infinite-medium multiplication factor. The actual $k_{\text{eff}}$ is smaller because of neutron leakage, typically by a factor of 0.7–0.8. The reactor is designed with control rods to bring $k_{\text{eff}}$ to exactly 1 for critical operation.

## Common Misconceptions

- **"All radiation detectors are Geiger counters."** No. The Geiger counter is the simplest and cheapest, but proportional counters, scintillation detectors, and semiconductor detectors all have important roles.
- **"Accelerators are all huge."** No. Medical cyclotrons are room-sized. Electrostatic accelerators can be bench-top. The size depends on the energy required.
- **"A reactor cannot explode like a bomb."** A nuclear reactor cannot explode like a nuclear weapon because the fuel is not assembled in the critical configuration of a bomb. But a reactor can suffer a steam explosion, a meltdown, or a chemical explosion under accident conditions (as in Chernobyl and Fukushima).
- **"Reactors produce only electricity."** They also produce medical isotopes, neutron beams for research, and (in breeder reactors) more fissile material than they consume.
- **"Synchrotron radiation is a loss."** For circular electron accelerators, yes. But synchrotron radiation is also a useful source of intense X-rays for research, exploited in synchrotron light sources around the world.

## Connections

- Detectors, accelerators, and reactors are the experimental tools of nuclear and particle physics; the science developed in earlier lessons is the physics that these tools exploit.
- The same physics underlies the operation of detectors in medical imaging (PET, SPECT, CT), in security scanning, and in environmental monitoring.
- Reactor physics connects to the binding-energy curve of nuclear physics and to the neutron-capture cross-sections of nuclear data libraries.
- Accelerator technology is the basis of medical isotope production, proton therapy for cancer, and industrial radiography.
- The same synchrotron radiation that limits circular electron accelerators is the basis of powerful X-ray sources used in materials science, chemistry, and biology.

## Quick Check

1. Explain the operating principle of a Geiger–Müller tube and identify the gas typically used.
2. Distinguish a proportional counter from a Geiger counter in terms of operating voltage and pulse height.
3. Why is high-purity germanium cooled to liquid-nitrogen temperature for gamma spectroscopy?
4. The LHC at CERN has a circumference of 27 km and accelerates protons to 7 TeV. Estimate the magnetic field required to keep the protons on the circular orbit.
5. List the five main components of a fission reactor and explain the role of each.

## Takeaway

- Detectors convert ionising radiation into measurable signals; the most important types are gas-filled, scintillation, semiconductor, Cherenkov, and calorimeter.
- Accelerators produce high-energy particle beams; electrostatic, cyclotron, synchrocyclotron, synchrotron, and linac designs cover the range from keV to TeV.
- A fission reactor sustains a controlled chain reaction with $k_{\text{eff}} = 1$; common types include PWR, BWR, PHWR, and fast breeders.
- These instruments are the engineering counterpart of the nuclear physics developed in earlier lessons.
- The same technologies underpin medical imaging, cancer therapy, isotope production, materials science, and basic research.
