***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: astronomy-and-astrophysics
courseName: Astronomy and Astrophysics (Physics Option A)
moduleId: astronomy-and-astrophysics-module-2
moduleName: Stellar Atmospheres and the Interstellar Medium
lessonId: astronomy-and-astrophysics-m2-l2
lessonName: HII Regions, the Strömgren Sphere and the 21 cm Line
lessonNumber: 5
moduleNumber: 2
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - astronomy-and-astrophysics-m2-l1
  - astrophysics-iv-m1-l1
learningObjectives:
  - Describe the phases of the interstellar medium by temperature, density and ionisation state.
  - Derive the Strömgren radius $R_S = (3Q_*/4\pi n_H^2\alpha_B)^{1/3}$ from photoionisation equilibrium and estimate the neutral fraction and boundary thickness of an HII region.
  - Derive the 21 cm optical depth and the column-density relation $N_{\rm HI} = 1.823\times10^{18}\,{\rm cm^{-2}}\int T_b\,dv$ for optically thin gas.
  - Determine spin temperatures from emission–absorption pairs towards continuum sources.
concepts:
  - Phases of the interstellar medium
  - Photoionisation equilibrium
  - Case B recombination
  - Strömgren sphere
  - Emission measure
  - Spin temperature
  - HI column density
tags:
  - physics
  - astronomy-and-astrophysics
  - interstellar-medium
  - hii-regions
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# HII Regions, the Strömgren Sphere and the 21 cm Line

## Overview

The space between the stars holds about 10% of the Milky Way's baryonic mass, in phases ranging from $10^6$ K coronal gas to 10 K molecular clouds. This lesson treats the two phases most directly tied to the radiative processes of Module 1. Around hot O and B stars, ultraviolet photons ionise hydrogen out to a sharply bounded radius, the Strömgren sphere, set by balancing photoionisation against recombination; the resulting HII regions shine in recombination lines, forbidden lines and free-free radio continuum. Throughout the rest of the disc, neutral hydrogen is invisible optically but radiates the 21 cm hyperfine line, whose optical depth and brightness temperature follow from the slab solution of Lesson m1-l1. For optically thin gas the 21 cm line simply counts atoms, giving the HI column density independent of temperature, and its Doppler shifts supply the kinematic data for the Galactic rotation curve in Module 3.

## Learning Path

- **What you should already know**: the slab solution and brightness temperature (Lesson m1-l1); bound-free cross-sections and the Saha equation (Lesson m1-l2); free-free emission (Lesson m1-l3); the qualitative 21 cm mapping of spiral arms (astrophysics-iv-m1-l1).
- **What this lesson adds**: ISM phases; photoionisation balance; Case A and B recombination; the Strömgren radius; emission measure; the spin temperature; the 21 cm optical depth and column density.
- **What later lessons this will unlock**: dust extinction and molecular clouds (Lesson m2-l3); kinematic distances and the rotation curve (Lesson m3-l1).

## Core Explanation

### Phases of the interstellar medium

| Phase | $T$ (K) | $n$ (m$^{-3}$) | Main tracer |
|---|---|---|---|
| Molecular clouds | 10–20 | $10^8$–$10^{12}$ | CO lines, dust emission |
| Cold neutral medium | 50–100 | $\sim3\times10^7$ | 21 cm emission and absorption |
| Warm neutral medium | 6,000–10,000 | $\sim3\times10^5$ | 21 cm emission |
| Warm ionised medium | $\sim8,000$ | $\sim3\times10^5$ | faint H$\alpha$, pulsar dispersion |
| HII regions | $\sim10^4$ | $10^8$–$10^{10}$ | H$\alpha$, [O III], free-free radio |
| Hot ionised medium | $\sim10^6$ | $\sim3\times10^3$ | soft X-rays, O VI absorption |

The phases are roughly in pressure balance: $nT \sim 3\times10^9$ K m$^{-3}$ for the neutral phases.

### Photoionisation equilibrium

A star with effective temperature above about 30,000 K emits

$$Q_* = \int_{\nu_0}^{\infty}\frac{L_\nu}{h\nu}\,d\nu \sim 10^{48}\text{–}10^{50}\ {\rm s^{-1}}$$

photons with $h\nu > h\nu_0 = 13.6$ eV. At distance $r$ the photoionisation rate per atom is $\Gamma = Q_*\bar\sigma/4\pi r^2$ (ignoring attenuation), where $\bar\sigma \approx 3\times10^{-22}$ m$^2$ is the bound-free cross-section averaged over the stellar spectrum. Balancing ionisation against recombination,

$$n_{\rm HI}\,\Gamma = n_e n_p\,\alpha(T),$$

where $\alpha$ is the recombination coefficient. Recombinations directly to the ground state emit a photon that can itself ionise; in a dense nebula it is absorbed nearby ("on the spot"), so only recombinations to $n \geq 2$ count. This is **Case B**, with $\alpha_B = 2.6\times10^{-19}$ m$^3$ s$^{-1}$ at $10^4$ K (Case A, all levels, is $4.2\times10^{-19}$). Example 2 shows that the neutral fraction inside an HII region is only about $10^{-4}$.

### The Strömgren sphere

Since almost every ionising photon is eventually absorbed, in a steady state the total ionisation rate equals the total recombination rate within the ionised volume. For pure hydrogen of uniform density, $n_e = n_p = n_H$, and

$$Q_* = \frac{4\pi}{3}R_S^3\,n_H^2\,\alpha_B \quad\Longrightarrow\quad R_S = \left(\frac{3Q_*}{4\pi n_H^2\alpha_B}\right)^{1/3}.$$

This **Strömgren radius** scales as $Q_*^{1/3}n_H^{-2/3}$. The boundary is sharp: just outside $R_S$ the gas is neutral, and the photon mean free path there is $1/(n_H\sigma_0) \approx 1.6\times10^{13}$ m (about 100 AU) for $n_H = 10^8$ m$^{-3}$ and $\sigma_0 = 6.3\times10^{-22}$ m$^2$, some $10^{-4}$ of the radius. HII regions are therefore ionisation-bounded bubbles with well-defined edges.

Inside, photoelectrons carry the excess energy $h\nu - 13.6$ eV (a few eV) and share it by collisions, while collisional excitation of forbidden lines such as [O III] 500.7 nm, [O II] 372.7 nm and [N II] 658.4 nm radiates energy away. The balance acts as a thermostat at $T \approx 8,000$–$10,000$ K, almost independent of the star. At this temperature the HII region is at roughly 100 times the pressure of the surrounding cold gas, so after forming it expands supersonically and sweeps up a dense shell.

### Observing HII regions

Each Case B recombination ultimately cascades to $n = 2$, and about 0.45 H$\alpha$ photons are emitted per recombination, so the H$\alpha$ luminosity measures $Q_*$. Radio observations avoid dust extinction: the free-free continuum of Lesson m1-l3 has optical depth

$$\tau_{\rm ff} \approx 8.235\times10^{-2}\,T_e^{-1.35}\left(\frac{\nu}{\rm GHz}\right)^{-2.1}\left(\frac{\rm EM}{\rm pc\,cm^{-6}}\right),$$

where the **emission measure** ${\rm EM} = \int n_e^2\,dl$ is conventionally quoted in pc cm$^{-6}$. Below the turnover where $\tau_{\rm ff} = 1$ the spectrum rises as $\nu^2$ (Rayleigh–Jeans blackbody at $T_e$); above it the spectrum is almost flat.

### The 21 cm hyperfine line

The ground state of hydrogen is split by the interaction of the electron and proton magnetic moments into an upper level with parallel spins ($F = 1$, $g_1 = 3$) and a lower level with antiparallel spins ($F = 0$, $g_0 = 1$). The transition has $\nu_{10} = 1420.405751$ MHz ($\lambda = 21.1$ cm), $T_* = h\nu_{10}/k = 0.0682$ K and $A_{10} = 2.87\times10^{-15}$ s$^{-1}$, a radiative lifetime of 11 Myr. Collisions are far more frequent, so the populations are described by the **spin temperature** $T_s$:

$$\frac{n_1}{n_0} = \frac{g_1}{g_0}\,e^{-T_*/T_s} \approx 3\left(1 - \frac{T_*}{T_s}\right),$$

and since $T_s \gg T_*$, $n_1 \approx \frac{3}{4}n_{\rm HI}$ and $n_0 \approx \frac{1}{4}n_{\rm HI}$.

### Optical depth and column density

The absorption coefficient corrected for stimulated emission is $\alpha_\nu = (h\nu/4\pi)\,n_0 B_{01}(1 - e^{-T_*/T_s})\,\phi(\nu)$. Using $B_{01} = (g_1/g_0)B_{10} = 3c^2A_{10}/2h\nu^3$, $n_0 = n_{\rm HI}/4$ and $1 - e^{-T_*/T_s} \approx h\nu/kT_s$,

$$\alpha_\nu = \frac{3c^2 h A_{10}}{32\pi k\nu}\,\frac{n_{\rm HI}}{T_s}\,\phi(\nu).$$

The stimulated-emission factor puts $T_s$ in the denominator. Integrating along the line of sight and converting to velocity with $\phi(\nu)\,d\nu = \phi(v)\,dv$, $d\nu = \nu\,dv/c$,

$$\tau(v) = \frac{3hc^3A_{10}}{32\pi k\nu^2}\,\frac{N_{\rm HI}\,\phi(v)}{T_s} \quad\Longrightarrow\quad N_{\rm HI} = 1.823\times10^{18}\,{\rm cm^{-2}}\int T_s\,\tau(v)\,\frac{dv}{\rm km\,s^{-1}},$$

with $T_s$ in kelvin ($1.823\times10^{22}$ m$^{-2}$ in SI). The Lesson m1-l1 slab solution gives $T_b(v) = T_s(1 - e^{-\tau(v)})$ for negligible background. If the gas is optically thin, $T_b = T_s\tau$ and

$$N_{\rm HI} = 1.823\times10^{18}\,{\rm cm^{-2}}\int T_b\,\frac{dv}{\rm km\,s^{-1}},$$

independent of the spin temperature. Because $T_s$ cancels, 21 cm emission is a direct atom counter. When $\tau$ is not small, $T_b\,\tau/(1 - e^{-\tau})$ replaces $T_b$ in the integral.

### Spin temperature from absorption

Towards a background radio source of brightness temperature $T_c$, the spectrum on the source is $T_{\rm on} = T_c e^{-\tau} + T_s(1 - e^{-\tau})$, while an adjacent line of sight gives $T_{\rm off} = T_s(1 - e^{-\tau})$. Their difference $T_c e^{-\tau}$ yields $\tau(v)$, and then $T_{\rm off}$ yields $T_s$. Such measurements find $T_s \approx 50$–$100$ K for the cold neutral medium and several thousand kelvin for the warm phase, which is too thin to absorb noticeably. Doppler shifts of the line, $v = c(\nu_{10} - \nu)/\nu_{10}$, trace Galactic rotation (Lesson m3-l1).

## Key Ideas

- **ISM phases**: molecular, cold and warm neutral, warm and hot ionised, and HII regions, in rough pressure balance.
- **Case B recombination**: ground-state recombinations are reabsorbed on the spot, so $\alpha_B = 2.6\times10^{-19}$ m$^3$ s$^{-1}$ at $10^4$ K.
- **Strömgren radius**: $R_S = (3Q_*/4\pi n_H^2\alpha_B)^{1/3}$, with a boundary only $\sim10^{-4}R_S$ thick.
- **Thermostat**: forbidden-line cooling holds HII regions near $10^4$ K.
- **Emission measure**: ${\rm EM} = \int n_e^2\,dl$ sets the free-free optical depth and the radio turnover.
- **Spin temperature**: $n_1/n_0 = 3e^{-T_*/T_s}$ with $T_* = 0.068$ K.
- **HI column density**: $N_{\rm HI} = 1.823\times10^{18}\int T_b\,dv$ cm$^{-2}$ for thin gas, independent of $T_s$.

## Worked Examples

### Example 1 — Size of an HII region

An O7 star emits $Q_* = 1.0\times10^{49}$ s$^{-1}$ into uniform gas with $n_H = 1.0\times10^8$ m$^{-3}$. Find $R_S$, the ionised mass and the recombination time. Repeat $R_S$ for $n_H = 10^9$ m$^{-3}$.

**Solution.**

$$R_S = \left(\frac{3\times10^{49}}{4\pi\times10^{16}\times2.6\times10^{-19}}\right)^{1/3} = (9.18\times10^{50})^{1/3} = 9.72\times10^{16}\ {\rm m} = 3.15\ {\rm pc}.$$

The ionised mass is $\frac{4}{3}\pi R_S^3 n_H m_H = 4.19\times9.18\times10^{50}\times10^8\times1.674\times10^{-27} = 6.4\times10^{32}$ kg $\approx 320\,M_\odot$. The recombination time is $1/(n_e\alpha_B) = 1/(10^8\times2.6\times10^{-19}) = 3.8\times10^{10}$ s $\approx 1{,}200$ yr, so the region adjusts quickly to changes in the star. For $n_H = 10^9$ m$^{-3}$, $R_S$ shrinks by $10^{-2/3} = 0.215$, to 0.68 pc.

### Example 2 — Neutral fraction and radio turnover

For the region of Example 1, estimate the neutral fraction at $r = 1$ pc and the frequency at which free-free emission through the centre becomes optically thick ($T_e = 10^4$ K).

**Solution.** The photon flux is $Q_*/4\pi r^2 = 10^{49}/(4\pi\times(3.086\times10^{16})^2) = 8.4\times10^{14}$ m$^{-2}$ s$^{-1}$, so $\Gamma = 8.4\times10^{14}\times3\times10^{-22} = 2.5\times10^{-7}$ s$^{-1}$. With $n_e \approx n_p \approx n_H$, the balance gives $x_{\rm HI} = n_{\rm HI}/n_H \approx n_H\alpha_B/\Gamma = 2.6\times10^{-11}/2.5\times10^{-7} = 1.0\times10^{-4}$.

Through the centre, ${\rm EM} = n_e^2\times2R_S = (100\ {\rm cm^{-3}})^2\times6.3$ pc $= 6.3\times10^4$ pc cm$^{-6}$. At 1 GHz, $\tau_{\rm ff} = 8.235\times10^{-2}\times(10^4)^{-1.35}\times6.3\times10^4 = 3.28\times10^{-7}\times6.3\times10^4 = 0.021$. Setting $\tau_{\rm ff} = 1$ gives $\nu = (0.021)^{1/2.1}$ GHz $= 0.16$ GHz: the region is optically thin above about 160 MHz.

### Example 3 — HI column density from a 21 cm profile

A 21 cm emission line is Gaussian with peak $T_b = 10.0$ K and FWHM 10.0 km s$^{-1}$. Find $N_{\rm HI}$, and check the thin assumption if $T_s = 100$ K.

**Solution.** For a Gaussian, $\int T_b\,dv = 1.0645\times T_{\rm peak}\times{\rm FWHM} = 106.4$ K km s$^{-1}$, so

$$N_{\rm HI} = 1.823\times10^{18}\times106.4 = 1.94\times10^{20}\ {\rm cm^{-2}} = 1.94\times10^{24}\ {\rm m^{-2}}.$$

At line centre $1 - e^{-\tau} = 10/100$, so $\tau = 0.105$ and the correction factor $\tau/(1 - e^{-\tau}) = 1.05$: the thin estimate is 5% low at the peak and less in the wings.

## Common Misconceptions

- **"An HII region fades gradually into neutral gas."** The ionisation front is about $10^{-4}$ of the radius thick, because a neutral atom absorbs ionising photons within 100 AU.
- **"HII regions are hotter around hotter stars in proportion to $T_{\rm eff}$."** Forbidden-line cooling regulates the gas near $10^4$ K whatever the star.
- **"Each 21 cm transition is too slow to matter, so the line must be faint."** The $10^7$ yr lifetime is compensated by an enormous number of atoms along kiloparsec paths.
- **"21 cm brightness measures the gas temperature."** Only if the line is optically thick. For thin gas $T_b = T_s\tau$, and the integrated brightness measures the column density.

## Connections

- Photoionisation cross-sections and recombination are the inverse processes of introduction-to-quantum-mechanics-m3-l2 transitions; the hyperfine interaction is treated in atomic-and-molecular-physics-m1-l2.
- The Strömgren argument, a global balance of production and loss, mirrors secular equilibrium in nuclear-physics-m2-l2.
- The 21 cm maps of spiral arms in astrophysics-iv-m1-l1 rest on the column-density and kinematic relations derived here; Lesson m3-l1 turns them into a rotation curve.
- Forbidden-line ratios used as nebular thermometers and densitometers anticipate atomic-and-molecular-physics; India's Giant Metrewave Radio Telescope near Pune images redshifted 21 cm emission from distant galaxies.

## Quick Check

1. Show that $R_S \propto Q_*^{1/3}n_H^{-2/3}$ and find the change in $R_S$ if the density is halved.
2. Why is $\alpha_B$ rather than $\alpha_A$ used for the Strömgren radius of a dense nebula?
3. Why does the 21 cm optical depth vary as $1/T_s$?
4. An HI cloud has $T_{\rm on} = 40$ K towards a 100 K continuum source and $T_{\rm off} = 25$ K beside it. Find $\tau$ and $T_s$.
5. Estimate the free-free turnover frequency of an HII region with EM $= 10^7$ pc cm$^{-6}$ at $T_e = 10^4$ K.

## Takeaway

- HII regions are sharply bounded Strömgren spheres where photoionisation balances Case B recombination; forbidden lines hold them near $10^4$ K.
- Their recombination lines and free-free radio continuum measure the ionising output of embedded stars.
- The 21 cm hyperfine line has $\tau \propto N_{\rm HI}/T_s$, so optically thin emission counts atoms directly.
- Emission–absorption pairs give spin temperatures, and Doppler shifts of the line give Galactic kinematics.
