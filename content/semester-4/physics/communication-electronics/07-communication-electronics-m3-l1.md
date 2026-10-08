***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: communication-electronics
courseName: Communication Electronics
moduleId: communication-electronics-module-3
moduleName: Channels, Noise and Digital Communication
lessonId: communication-electronics-m3-l1
lessonName: Transmission Lines, Antennas and Propagation
lessonNumber: 7
moduleNumber: 3
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - communication-electronics-m2-l3
  - electricity-and-magnetism-m3-l3
  - waves-and-optics-m1-l2
learningObjectives:
  - Derive the characteristic impedance $Z_0 = \sqrt{L/C}$ and phase velocity of a lossless transmission line from its distributed parameters.
  - Calculate the reflection coefficient, VSWR, return loss and mismatch loss for a terminated line, and design a quarter-wave matching transformer.
  - State the radiation resistance, gain and effective aperture of dipole and dish antennas and apply the Friis transmission equation.
  - Distinguish ground-wave, sky-wave and space-wave propagation and compute a link budget in decibels.
concepts:
  - Characteristic impedance
  - Reflection coefficient and VSWR
  - Quarter-wave transformer
  - Half-wave dipole antenna
  - Friis transmission equation
  - Ground, sky and space wave propagation
  - Link budget
tags:
  - physics
  - communication-electronics
  - transmission-lines
  - antennas
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# Transmission Lines, Antennas and Propagation

## Overview

Module 2 built the transmitter and the receiver; this lesson examines what lies between them, the **channel**. The signal first travels along a **transmission line** from the transmitter to the antenna, and here a cable is no longer a simple pair of wires but a distributed system that carries waves, which reflect wherever the impedance changes. The **antenna** converts guided waves into radiated electromagnetic waves, and the radio wave then reaches the receiver by one of three **propagation** modes, ground, sky or space wave, depending chiefly on frequency. The lesson ends by assembling these pieces into a **link budget**, the decibel bookkeeping introduced in Lesson m1-l1 that predicts how much power reaches the receiver.

## Learning Path

- **What you should already know**: inductance, capacitance and Faraday's law (Electricity and Magnetism, Lesson m3-l3); the wave equation and wave speed (Waves and Optics, Lesson m1-l2); decibels, dBm and the radio bands (Lesson m1-l1).
- **What this lesson adds**: characteristic impedance, reflections and VSWR; impedance matching; dipole and dish antennas; Friis free-space loss; propagation modes; link budgets.
- **What later lessons this will unlock**: noise in the received signal and carrier-to-noise ratio (Lesson m3-l2); satellite, mobile and optical-fibre links (Lesson m3-l3).

## Core Explanation

### Lines as distributed circuits

When a line is longer than about a tenth of a wavelength, the voltage varies appreciably along it and it must be modelled as a chain of infinitesimal sections, each with series inductance $L$ and shunt capacitance $C$ per metre (and, for a lossy line, series resistance $R$ and shunt conductance $G$). For a lossless section of length $dz$, Kirchhoff's laws give the **telegrapher's equations**

$$\frac{\partial V}{\partial z} = -L\frac{\partial I}{\partial t}, \qquad \frac{\partial I}{\partial z} = -C\frac{\partial V}{\partial t}.$$

Differentiating the first with respect to $z$ and substituting the second gives the wave equation

$$\frac{\partial^2 V}{\partial z^2} = LC\,\frac{\partial^2 V}{\partial t^2},$$

so voltage and current travel as waves with **phase velocity** $v = 1/\sqrt{LC}$. For a forward wave $V^+ = f(t - z/v)$, the first equation gives $I^+ = V^+/\sqrt{L/C}$; the ratio of voltage to current in a single travelling wave is the **characteristic impedance**

$$Z_0 = \sqrt{\frac{L}{C}}, \qquad \text{or in general}\quad Z_0 = \sqrt{\frac{R + j\omega L}{G + j\omega C}}.$$

$Z_0$ is real for a lossless line and is fixed by geometry and dielectric. A coaxial cable with inner radius $a$, outer radius $b$ and dielectric constant $\varepsilon_r$ has

$$Z_0 = \frac{60}{\sqrt{\varepsilon_r}}\ln\frac{b}{a}\ \Omega, \qquad v = \frac{c}{\sqrt{\varepsilon_r}}.$$

Standard values are 50 Ω for RF and laboratory coaxial cable, 75 Ω for television and satellite feeds and 300 Ω for twin-lead.

### Reflections and standing waves

A line terminated in a load $Z_L$ forces $V/I = Z_L$ at the end. If $Z_L \ne Z_0$, a single forward wave cannot satisfy this, and a reflected wave is generated with amplitude ratio, the **reflection coefficient**,

$$\Gamma = \frac{V^-}{V^+} = \frac{Z_L - Z_0}{Z_L + Z_0}.$$

A matched load ($Z_L = Z_0$) gives $\Gamma = 0$; a short circuit gives $\Gamma = -1$ and an open circuit $\Gamma = +1$, total reflection. The forward and reflected waves interfere to form a **standing wave** whose maxima $V^+(1 + |\Gamma|)$ and minima $V^+(1 - |\Gamma|)$ lie a quarter-wavelength apart. Their ratio is the **voltage standing-wave ratio**

$$\text{VSWR} = \frac{V_{\max}}{V_{\min}} = \frac{1 + |\Gamma|}{1 - |\Gamma|},$$

ranging from 1 (matched) to infinity. The fraction $|\Gamma|^2$ of the incident power is reflected; the **return loss** is $-20\log_{10}|\Gamma|$ dB and the **mismatch loss** $-10\log_{10}(1 - |\Gamma|^2)$ dB. Reflected power reduces the power delivered, can damage transmitter output stages and, on long lines, produces echoes ("ghosts" in analogue television).

### Input impedance and matching

A line of length $l$ transforms the load impedance. With $\beta = 2\pi/\lambda$,

$$Z_{\text{in}} = Z_0\frac{Z_L + jZ_0\tan\beta l}{Z_0 + jZ_L\tan\beta l}.$$

For $l = \lambda/4$, $\tan\beta l \to \infty$ and $Z_{\text{in}} = Z_0^2/Z_L$. A **quarter-wave transformer** of impedance $Z_T = \sqrt{Z_1 Z_L}$ therefore matches a load $Z_L$ to a line $Z_1$ at one frequency. Short-circuited stubs, which present pure reactances, and baluns, which connect balanced antennas to unbalanced coaxial cable, are the other common matching tools.

### Antennas

An antenna radiates because accelerating charges radiate. A short **Hertzian dipole** of length $l \ll \lambda$ carrying a uniform current of amplitude $I_0$ radiates power $\tfrac{1}{2}I_0^2 R_{\text{rad}}$, where the **radiation resistance** is

$$R_{\text{rad}} = 80\pi^2\left(\frac{l}{\lambda}\right)^2\ \Omega.$$

A short antenna has a tiny $R_{\text{rad}}$ and radiates inefficiently; this is the quantitative reason for the antenna-size argument of Lesson m1-l1. The **half-wave dipole** has $R_{\text{rad}} \approx 73$ Ω, a convenient match to 75 Ω cable, and a doughnut-shaped pattern with maximum broadside and nulls along the wire. A **quarter-wave monopole** over a conducting ground plane uses its image to act as half a dipole, with $R_{\text{rad}} \approx 36.5$ Ω; medium-wave masts and car aerials are monopoles.

The **directivity** $D$ is the ratio of maximum radiation intensity to that of an isotropic radiator of the same total power; the **gain** $G = \eta D$ includes the radiation efficiency $\eta$. A half-wave dipole has $D = 1.64$, or 2.15 dBi (dB relative to isotropic). The product $P_t G_t$ is the **effective isotropic radiated power** (EIRP). By reciprocity an antenna's receiving properties mirror its transmitting ones: it collects power through an **effective aperture**

$$A_e = \frac{G\lambda^2}{4\pi}.$$

A parabolic dish of diameter $D_d$ and aperture efficiency $\eta_a$ (typically 0.55 – 0.7) has $A_e = \eta_a\pi D_d^2/4$ and hence $G = \eta_a(\pi D_d/\lambda)^2$.

### The Friis transmission equation

At distance $d$ in free space, the power density from the transmitter is $P_t G_t/(4\pi d^2)$, and the receiving antenna collects it over $A_e = G_r\lambda^2/4\pi$:

$$P_r = P_t G_t G_r\left(\frac{\lambda}{4\pi d}\right)^2.$$

The factor $(4\pi d/\lambda)^2$ is the **free-space path loss**; in decibels, with $d$ in km and $f$ in MHz,

$$L_{\text{fs}} = 20\log_{10}d_{\text{km}} + 20\log_{10}f_{\text{MHz}} + 32.44\ \text{dB}.$$

Path loss grows with frequency only because the effective aperture of an antenna of fixed gain shrinks as $\lambda^2$; a dish of fixed size gains back exactly this factor.

### Propagation modes

| Mode | Frequencies | Mechanism | Range and uses |
|---|---|---|---|
| Ground (surface) wave | VLF to MF, below about 3 MHz | Vertically polarised wave guided along the conducting earth, diffracting round its curvature; attenuation rises with frequency | Hundreds of km; MW broadcasting, navigation, submarine VLF |
| Sky wave | HF, 3 – 30 MHz | Refraction back to earth by ionospheric layers (E, F1, F2) | Thousands of km by multiple hops; short-wave broadcasting, amateur radio |
| Space wave | VHF and above | Direct line-of-sight path plus ground reflection; limited by the radio horizon | Tens of km; FM, TV, mobile, microwave links |
| Satellite | Above about 100 MHz | Line of sight to a satellite; penetrates the ionosphere | Global; broadcasting, GPS, communications |

The ionosphere refracts a wave as a plasma of electron density $N$. At vertical incidence, the highest frequency reflected is the **critical frequency** $f_c \approx 9\sqrt{N_{\max}}$ Hz ($N$ in m$^{-3}$); at an angle of incidence $\theta_i$ on the layer, the **maximum usable frequency** is $\text{MUF} = f_c\sec\theta_i$. Below a certain distance, the **skip distance**, a given frequency penetrates the layer instead of returning. Daytime absorption in the lower D layer is why distant medium-wave stations are heard mainly at night.

For space waves, atmospheric refraction bends rays slightly downwards, conventionally modelled by an earth of $4/3$ its true radius. The **radio horizon** for antennas of heights $h_t$ and $h_r$ in metres is

$$d \approx 4.12\left(\sqrt{h_t} + \sqrt{h_r}\right)\ \text{km}.$$

### The link budget

All the above combine in the **link budget**, written in dB:

$$P_r\,(\text{dBm}) = P_t\,(\text{dBm}) + G_t - L_t + G_r - L_r - L_{\text{fs}} - L_{\text{other}},$$

where $L_t$ and $L_r$ are feeder losses and $L_{\text{other}}$ covers atmospheric, rain and polarisation losses. The difference between $P_r$ and the receiver's required minimum is the **fade margin**.

## Key Ideas

- **Characteristic impedance** $Z_0 = \sqrt{L/C}$ and $v = 1/\sqrt{LC}$ follow from the telegrapher's equations.
- **Reflection coefficient** $\Gamma = (Z_L - Z_0)/(Z_L + Z_0)$; **VSWR** $= (1 + |\Gamma|)/(1 - |\Gamma|)$; reflected power fraction $|\Gamma|^2$.
- **Quarter-wave transformer**: $Z_{\text{in}} = Z_0^2/Z_L$, so $Z_T = \sqrt{Z_1 Z_L}$ matches.
- **Antennas**: half-wave dipole 73 Ω and 2.15 dBi; $A_e = G\lambda^2/4\pi$; dish gain $\eta_a(\pi D_d/\lambda)^2$.
- **Friis equation**: $P_r = P_t G_t G_r(\lambda/4\pi d)^2$; $L_{\text{fs}} = 20\log d_{\text{km}} + 20\log f_{\text{MHz}} + 32.44$ dB.
- **Propagation**: ground wave below 3 MHz, sky wave at HF via the ionosphere, space wave and satellite links at VHF and above.

## Worked Examples

### Example 1 — Parameters of a coaxial line

A cable has $L = 250$ nH/m and $C = 100$ pF/m. Find $Z_0$, the phase velocity and the length of a quarter-wave section at 100 MHz.

**Solution.**

$$Z_0 = \sqrt{\frac{250\times10^{-9}}{100\times10^{-12}}} = \sqrt{2500} = 50\ \Omega, \qquad v = \frac{1}{\sqrt{250\times10^{-9}\times100\times10^{-12}}} = 2.0\times10^8\ \text{m/s}.$$

The **velocity factor** is $v/c = 0.67$, typical of solid polyethylene ($\varepsilon_r = 2.25$). At 100 MHz, $\lambda = v/f = 2.0$ m in the cable, so a quarter-wave section is 0.50 m long, not the 0.75 m of free space.

### Example 2 — A mismatched load and its cure

A 100 Ω load terminates a 50 Ω line. Find $\Gamma$, the VSWR, the return loss and the mismatch loss, and design a quarter-wave matching section.

**Solution.** $\Gamma = (100 - 50)/(100 + 50) = 0.333$ and

$$\text{VSWR} = \frac{1.333}{0.667} = 2.0.$$

The reflected fraction is $0.333^2 = 0.111$, so the return loss is $-20\log_{10}0.333 = 9.5$ dB and the mismatch loss $-10\log_{10}(0.889) = 0.51$ dB. A quarter-wave section of $Z_T = \sqrt{50 \times 100} = 70.7$ Ω between line and load gives $Z_{\text{in}} = 70.7^2/100 = 50$ Ω, a perfect match at the design frequency.

### Example 3 — A satellite downlink budget

A geostationary satellite transmits 10 W at 4 GHz through an antenna of gain 30 dBi over a 36 000 km path. The ground station uses a 3 m dish of aperture efficiency 0.55. Find the received power.

**Solution.** $\lambda = 3\times10^8/4\times10^9 = 0.075$ m. The dish gain is

$$G_r = 0.55\left(\frac{\pi \times 3}{0.075}\right)^2 = 0.55 \times 15\,791 = 8685 \;\Rightarrow\; 39.4\ \text{dBi}.$$

The path loss is

$$L_{\text{fs}} = 20\log_{10}36\,000 + 20\log_{10}4000 + 32.44 = 91.13 + 72.04 + 32.44 = 195.6\ \text{dB}.$$

With $P_t = 10$ W $= 40$ dBm,

$$P_r = 40 + 30 + 39.4 - 195.6 = -86.2\ \text{dBm} \approx 2.4\ \text{pW}.$$

Whether 2.4 pW is enough depends on the noise accompanying it, the subject of Lesson m3-l2.

## Common Misconceptions

- **"A 50 Ω cable has a resistance of 50 Ω."** $Z_0$ is the ratio of voltage to current in a travelling wave, set by geometry; the DC resistance of the cable is a fraction of an ohm.
- **"Free-space path loss means energy is absorbed by space."** Nothing is absorbed; the power spreads over a sphere of area $4\pi d^2$, and the frequency dependence comes from the receiving aperture.
- **"High-gain antennas create power."** Gain concentrates the same power into a narrower beam; the EIRP rises only in the favoured direction.
- **"Sky waves reflect off a mirror-like layer."** The ionosphere refracts waves gradually; whether a wave returns depends on frequency, angle and electron density.

## Connections

- The telegrapher's equations lead to the same wave equation as a stretched string (Waves and Optics, Lesson m1-l2), and $\Gamma$ is the analogue of the amplitude reflection coefficient at a junction of two strings.
- Radiation from accelerating charges follows from Maxwell's equations; Faraday's law (Electricity and Magnetism, Lesson m3-l3) supplies the induction half of the story.
- Ionospheric refraction is plasma physics: the critical frequency is the electron plasma frequency, which also governs the dispersion of pulsar signals by interstellar electrons (Astrophysics IV, Lesson m3-l7).
- Radio telescopes extend the reflecting telescope of Astrophysics I, Lesson m3-l1, to radio wavelengths; their gain and effective aperture obey $A_e = G\lambda^2/4\pi$.

## Quick Check

1. A coaxial cable has $b/a = 3.5$ and $\varepsilon_r = 2.25$. Find $Z_0$.
2. A load gives a VSWR of 3 on a 50 Ω line. What fraction of the incident power is reflected?
3. Find the radio horizon between a 100 m tower and a 16 m tower.
4. Calculate the free-space path loss at 900 MHz over 5 km.
5. The F2 layer has $N_{\max} = 10^{12}$ m$^{-3}$. Find the critical frequency and the MUF for $\theta_i = 60^\circ$.

## Takeaway

- Long lines carry waves with $Z_0 = \sqrt{L/C}$; any mismatch reflects a fraction $|\Gamma|^2$ of the power and creates standing waves.
- Matching (quarter-wave transformers, stubs, baluns) delivers maximum power and protects the transmitter.
- Antennas are characterised by radiation resistance, gain and effective aperture; the Friis equation links them to path loss.
- Frequency decides propagation: ground wave below 3 MHz, sky wave at HF, line of sight above 30 MHz; a decibel link budget totals the result.
