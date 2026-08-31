***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: waves-and-optics
courseName: Waves and Optics
moduleId: waves-and-optics-module-3
moduleName: Wave Optics
lessonId: waves-and-optics-m3-l3
lessonName: Polarisation and Malus's Law
lessonNumber: 9
moduleNumber: 3
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 9
prerequisites:
  - waves-and-optics-m3-l1
learningObjectives:
  - Describe polarisation of transverse waves.
  - Apply Malus's law to compute transmitted intensity through polarisers.
  - Distinguish polarisation by reflection, scattering, and dichroism.
  - Recognise birefringence and optical activity.
concepts:
  - Polarisation
  - Linear, circular, and elliptical polarisation
  - Malus's law
  - Brewster's angle
  - Birefringence
  - Optical activity
tags:
  - physics
  - wave-optics
  - polarisation
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Polarisation and Malus's Law

## Overview
Polarisation is a property of transverse waves that distinguishes them from longitudinal waves. The electric field of a light wave can oscillate in a particular direction (linearly polarised), rotate uniformly (circularly polarised), or trace an ellipse. Polarisation provides extra information about light sources, surfaces, and magnetic fields, and is the basis of many optical technologies. This lesson develops the polarisation formalism, Malus's law, and the main polarisation phenomena.

## Learning Path
- What you should already know: transverse waves, superposition, the dot product.
- What this lesson adds: a new property of light (polarisation), the laws governing it, and the rich physical phenomena it reveals.
- What it unlocks: the analysis of reflection and scattering, the design of optical instruments, the measurement of magnetic fields via Faraday rotation, and the spin of the photon in *Quantum Mechanics*.

## Core Explanation
**Transverse vs. longitudinal.** A longitudinal wave (sound, say) has displacement along the direction of propagation. A transverse wave has displacement perpendicular; the displacement can be in any direction in the transverse plane. The orientation of the displacement is the polarisation.

**Light as a transverse wave.** Light is a transverse electromagnetic wave, with $\vec{E}$ and $\vec{B}$ perpendicular to the propagation direction. The polarisation is conventionally described by the direction of $\vec{E}$.

**Linear polarisation.** A wave with $\vec{E}$ oscillating in a fixed direction. Mathematically, $\vec{E}(z, t) = E_0 \cos(k z - \omega t) \hat{x}$ is linearly polarised along $\hat{x}$.

**Circular polarisation.** $\vec{E}$ rotates uniformly in the transverse plane. Two orthogonal linear polarisations of equal amplitude, $90°$ out of phase, give a circularly polarised wave:

$$\vec{E}(z, t) = E_0 [\cos(k z - \omega t) \hat{x} + \sin(k z - \omega t) \hat{y}].$$

The $\vec{E}$ vector rotates once per optical cycle. Right-circular: rotation in the sense of the fingers of the right hand around the propagation direction. Left-circular: opposite.

**Elliptical polarisation.** A general state: $\vec{E}$ traces an ellipse in the transverse plane. Linear and circular are special cases.

**Unpolarised light.** A superposition of many waves with random polarisations. Natural sunlight, incandescent light, and thermal emission are unpolarised. A single atom can emit polarised light; an ensemble emits a mixture.

**Malus's law.** When unpolarised light passes through a *polariser* (a material that transmits one polarisation and absorbs the orthogonal one), the transmitted intensity is half the incident intensity (one polarisation is kept, the other is removed). When polarised light passes through a polariser whose transmission axis makes an angle $\theta$ with the polarisation direction, the transmitted intensity is

$$I = I_0 \cos^2\theta.$$

This is Malus's law. The transmitted $\vec{E}$ is the component of the incident $\vec{E}$ along the polariser's axis.

**Polarisation by reflection.** When light reflects off a non-metallic surface, the reflected light is partially polarised. The degree of polarisation depends on the angle of incidence. At Brewster's angle $\theta_B$ (with $\tan\theta_B = n_2/n_1$), the reflected light is *completely* polarised, with the polarisation perpendicular to the plane of incidence.

**Polarisation by scattering.** Light scattered by molecules (Rayleigh scattering, as in the blue sky) is polarised perpendicular to the scattering plane. The blue sky is partially polarised, with maximum polarisation $90°$ from the Sun. This is why polarised sunglasses can block some of the scattered light.

**Polarisation by dichroism.** Certain materials (Polaroid, tourmaline) preferentially absorb one polarisation. The transmitted light is polarised along the unabsorbed direction. Polaroid sheets are made of aligned long-chain molecules; the electric field along the chains drives electrons and is absorbed; the perpendicular component passes.

**Birefringence.** Some crystals (calcite, quartz) have different refractive indices for different polarisations. A ray entering such a crystal is split into two (the *ordinary* and *extraordinary* rays), polarised perpendicular to each other. Birefringence is the basis of many optical components (wave plates, polarising beam splitters).

**Quarter-wave plate.** A birefringent crystal of a thickness that introduces a $\lambda/4$ optical path difference between the two polarisations. It converts linear polarisation to circular (and vice versa).

**Half-wave plate.** Introduces a $\lambda/2$ path difference; it rotates the polarisation direction of linearly polarised light by twice the angle between the input polarisation and the crystal axis.

**Optical activity.** Some materials (sugar solution, quartz) rotate the polarisation direction of linearly polarised light as it propagates. The rotation angle is $\alpha = [\alpha] \cdot c \cdot L$, where $[\alpha]$ is the specific rotation, $c$ the concentration, and $L$ the path length. This is the basis of polarimetry, used to measure sugar concentration.

**Faraday rotation.** A magnetic field along the direction of propagation rotates the polarisation. The rotation is $\beta = V B L$, where $V$ is the Verdet constant. This effect is used to measure magnetic fields in plasmas (including the solar corona and interstellar space) and is the basis of optical isolators in lasers.

**Liquid crystal displays.** A liquid crystal has birefringence that can be switched on and off by an applied voltage. Combined with polarisers, this produces the on/off pixels of an LCD.

**Strain and stress.** Stressed glass and many plastics are birefringent. The polarisation pattern reveals the stress — photoelasticity is a powerful engineering tool.

**Polarisation of the cosmic microwave background.** The CMB is partially polarised; the pattern of polarisation (E-modes, B-modes) carries information about the early universe. B-mode polarisation would be evidence for gravitational waves from inflation.

## Key Ideas
- Linear, circular, and elliptical polarisation are the three main states.
- Malus's law: $I = I_0 \cos^2 \theta$ for polarised light through a polariser.
- Brewster's angle: $\tan\theta_B = n_2/n_1$; reflected light is fully polarised.
- Birefringence: different $n$ for different polarisations.
- Optical activity and Faraday rotation are used to measure concentration and magnetic fields.

## Worked Examples
**Example 1 — Malus's law.** Unpolarised light of intensity $I_0$ passes through two polarisers with axes at $30°$. First polariser: $I_1 = I_0/2$. Second: $I_2 = I_1 \cos^2 30° = I_0/2 \times 3/4 = 3 I_0/8 \approx 0.375 I_0$.

**Example 2 — Brewster's angle.** Light goes from air ($n_1 = 1$) to glass ($n_2 = 1.5$). $\tan\theta_B = 1.5$, so $\theta_B = 56.3°$. At this angle, the reflected light is completely polarised.

**Example 3 — Faraday rotation.** A $1\text{ m}$ path through a glass with Verdet constant $V = 30\text{ rad/(T·m)}$ in a $0.1\text{ T}$ field: $\beta = 30 \times 0.1 \times 1 = 3\text{ rad} \approx 172°$. The polarisation rotates by $172°$.

**Example 4 — Sugar concentration.** A $10\text{ cm}$ tube of sugar solution with specific rotation $[\alpha] = 0.5° \text{ mL/(g·dm)}$ produces a rotation of $10°$. Concentration: $c = \alpha / ([\alpha] \cdot L) = 10° / (0.5 \times 1) = 20\text{ g/100 mL} = 0.2\text{ g/mL}$.

## Common Misconceptions
- **"Polarised sunglasses block UV light."** No — they block horizontally polarised light, reducing glare from horizontal surfaces. UV blocking is a separate coating.
- **"All laser light is polarised."** No — only some lasers. The output of a typical HeNe laser is polarised; many diode lasers are not (though they can be made so with a polariser inside the cavity).
- **"Circular polarisation is rare."** It is common in nature and in engineered light. Many beetles (e.g. scarabs) reflect circularly polarised light, and LCDs use it.
- **"Polarisation and colour are independent."** Mostly yes, but dichroic polarisers can also depend on wavelength, giving coloured polarisation.

## Connections
Polarisation is the basis of the study of anisotropic materials, including liquid crystals and biological structures. It is the tool of choice for measuring magnetic fields in astrophysics (Faraday rotation of pulsars, the CMB). In *Quantum Mechanics*, the spin of the photon is the connection between classical polarisation and quantum states. The mathematics of polarisation (Jones vectors, Stokes parameters, Mueller matrices) is a complete formalism with applications in every branch of optics.

## Quick Check
1. State Malus's law.
2. Unpolarised light passes through two polarisers at $45°$. What fraction of the intensity is transmitted?
3. What is Brewster's angle, and what is special about light reflected at this angle?
4. What is birefringence?
5. How does Faraday rotation depend on the magnetic field?

## Takeaway
- Three polarisation states: linear, circular, elliptical.
- Malus's law: $I = I_0 \cos^2 \theta$ for polarised light through a polariser.
- Brewster's angle: $\tan\theta_B = n_2/n_1$.
- Birefringence: different $n$ for different polarisations.
- Faraday rotation measures magnetic fields; optical activity measures concentration.
