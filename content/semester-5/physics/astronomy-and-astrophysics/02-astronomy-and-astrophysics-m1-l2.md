***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: astronomy-and-astrophysics
courseName: Astronomy and Astrophysics (Physics Option A)
moduleId: astronomy-and-astrophysics-module-1
moduleName: Radiative Processes
lessonId: astronomy-and-astrophysics-m1-l2
lessonName: Opacity Sources and the Boltzmann and Saha Equations
lessonNumber: 2
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - astronomy-and-astrophysics-m1-l1
  - thermal-physics-and-statistical-mechanics-m3-l2
  - introduction-to-quantum-mechanics-m3-l2
learningObjectives:
  - Identify the bound-bound, bound-free, free-free, H$^-$ and electron-scattering contributions to stellar opacity and state the frequency and temperature dependence of each.
  - Apply the Boltzmann equation $N_b/N_a = (g_b/g_a)e^{-(E_b-E_a)/kT}$ and the Saha equation to compute excitation and ionisation fractions.
  - Combine the Boltzmann and Saha equations to explain quantitatively why Balmer lines peak near 10,000 K.
  - Relate the equivalent width of a weak line to the column density of absorbers through $W_\lambda = \pi r_e \lambda^2 N f$.
concepts:
  - Bound-free and free-free opacity
  - H-minus opacity
  - Rosseland mean opacity
  - Boltzmann excitation equation
  - Saha ionisation equation
  - Equivalent width
  - Oscillator strength
tags:
  - physics
  - astronomy-and-astrophysics
  - opacity
  - saha-equation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Opacity Sources and the Boltzmann and Saha Equations

## Overview

Lesson m1-l1 left the absorption coefficient $\alpha_\nu = \kappa_\nu\rho$ as an unspecified input to the transfer equation; this lesson supplies it. Stellar and interstellar opacity comes from bound-bound, bound-free, free-free and scattering processes, plus the negative hydrogen ion that dominates the solar photosphere. Every process needs absorbers in a particular state of excitation and ionisation, and in LTE those populations follow the Boltzmann and Saha equations. Combining them turns the qualitative spectral sequence of the minor course into a calculation: it explains why hydrogen lines peak in A stars and why the Sun's strongest lines belong to calcium. The lesson ends with the equivalent width of a weak line and its column density, which sets up the curve of growth in Lesson m1-l3.

## Learning Path

- **What you should already know**: the transfer equation, optical depth and LTE (Lesson m1-l1); the Boltzmann distribution and partition functions (thermal-physics-and-statistical-mechanics-m3-l2); hydrogen energy levels $E_n = -13.6\,{\rm eV}/n^2$ with degeneracy $2n^2$ (introduction-to-quantum-mechanics-m3-l2).
- **What this lesson adds**: the four opacity sources and their scalings; H$^-$ opacity; the Rosseland mean; the Boltzmann and Saha equations and their combination; equivalent width and oscillator strength.
- **What later lessons this will unlock**: line broadening and the curve of growth (Lesson m1-l3); the grey atmosphere, which replaces $\kappa_\nu$ by a mean (Lesson m2-l1); photoionisation balance in HII regions (Lesson m2-l2).

## Core Explanation

### The four opacity sources

**Bound-bound absorption** occurs when a photon of exactly the right frequency raises an electron between two bound levels. It is confined to narrow line frequencies, although in cool stars millions of overlapping lines ("line blanketing") matter overall.

**Bound-free absorption** (photoionisation) removes an electron from level $n$ when $h\nu$ exceeds the ionisation energy $\chi_n$ of that level. For a hydrogenic ion the Kramers cross-section is

$$\sigma_{\rm bf}(\nu) \approx 7.9\times10^{-22}\,\frac{n}{Z^2}\, g_{\rm bf}\left(\frac{\nu_n}{\nu}\right)^3\ {\rm m^2}, \qquad \nu \geq \nu_n,$$

with the Gaunt factor $g_{\rm bf}$ of order unity ($6.3\times10^{-22}$ m$^2$ exactly at the hydrogen Lyman edge). It jumps at the Lyman (91.2 nm), Balmer (364.6 nm) and Paschen (820.4 nm) edges and falls as $\nu^{-3}$ above each.

**Free-free absorption** (inverse bremsstrahlung) occurs when a free electron absorbs a photon while passing an ion:

$$\alpha_\nu^{\rm ff} \propto Z^2 n_e n_i\, T^{-1/2}\, \nu^{-3}\left(1 - e^{-h\nu/kT}\right) g_{\rm ff},$$

which in the radio limit $h\nu \ll kT$ becomes $\propto n_e n_i T^{-3/2}\nu^{-2}$, so HII regions turn optically thick at low radio frequencies (Lesson m2-l2).

**Electron scattering** redirects photons without destroying them. The Thomson cross-section $\sigma_T = (8\pi/3)r_e^2 = 6.652\times10^{-29}$ m$^2$ is independent of frequency, where $r_e = e^2/(4\pi\varepsilon_0 m_e c^2) = 2.818\times10^{-15}$ m. For fully ionised gas of hydrogen mass fraction $X$, $n_e = (1+X)\rho/(2m_H)$, so

$$\kappa_{\rm es} = \frac{\sigma_T(1+X)}{2m_H} = 0.020\,(1+X)\ {\rm m^2\,kg^{-1}},$$

or $0.034$ m$^2$ kg$^{-1}$ for $X = 0.7$; it dominates in hot stars.

### The negative hydrogen ion

A neutral hydrogen atom binds a second electron by only $0.754$ eV, so H$^-$ is photoionised by any photon with $\lambda < 1.64\,\mu$m, the whole visible spectrum, and absorbs by free-free transitions beyond. The electrons come from easily ionised metals (Na, K, Ca, Fe; $\chi$ = 5–8 eV), and the Saha equation below with $\chi = 0.754$ eV gives $n({\rm H}^-)/n({\rm H}) \approx 2\times10^{-8}$ in the solar photosphere. The competing visible absorbers, hydrogen atoms in $n = 3$, have $N_3/N_1 = 9e^{-12.1\,{\rm eV}/kT} = 2.5\times10^{-10}$, so H$^-$ is nearly a hundred times more abundant. Its smooth, nearly grey opacity is why the grey atmosphere of Lesson m2-l1 suits the Sun.

### Mean opacities

For diffusive energy transport the correct single opacity is the **Rosseland mean**,

$$\frac{1}{\kappa_R} = \frac{\displaystyle\int_0^\infty \frac{1}{\kappa_\nu}\frac{\partial B_\nu}{\partial T}\,d\nu}{\displaystyle\int_0^\infty \frac{\partial B_\nu}{\partial T}\,d\nu},$$

a harmonic mean dominated by low-opacity windows, as current flows mainly through the smallest of parallel resistances. Bound-free and free-free processes give **Kramers' law**, $\bar\kappa \propto \rho\, T^{-3.5}$.

### Excitation: the Boltzmann equation

In LTE the ratio of populations of two levels $a$ and $b$ of the same ion is

$$\frac{N_b}{N_a} = \frac{g_b}{g_a}\, e^{-(E_b - E_a)/kT},$$

and the fraction of the ion in level $a$ is $N_a/N = (g_a/U)\,e^{-E_a/kT}$, where the **partition function** $U(T) = \sum_i g_i e^{-E_i/kT}$ is measured from the ground state. For hydrogen, $g_n = 2n^2$ and $E_2 - E_1 = 10.2$ eV, so $N_2/N_1 = 4e^{-10.2\,{\rm eV}/kT}$. The hydrogen sum formally diverges, but neighbouring particles destroy high-$n$ orbits, and below about $10^4$ K $U_{\rm HI} = 2$.

### Ionisation: the Saha equation

Treating ionisation $X_i \rightleftharpoons X_{i+1} + e^-$ as a reaction and counting states — the free electron brings two spin states and a phase-space factor $(2\pi m_e kT/h^2)^{3/2}$ per unit volume, shared among $n_e$ electrons — gives the **Saha equation**,

$$\frac{N_{i+1}}{N_i} = \frac{2U_{i+1}}{n_e U_i}\left(\frac{2\pi m_e k T}{h^2}\right)^{3/2} e^{-\chi_i/kT},$$

where $\chi_i$ is the ionisation energy from the ground state of stage $i$. Numerically $(2\pi m_e k/h^2)^{3/2} = 2.415\times10^{21}$ m$^{-3}$ K$^{-3/2}$. With $P_e = n_e kT$ one may replace $n_e$ by $P_e/kT$. For hydrogen $U_{\rm II} = 1$ (a bare proton) and $U_{\rm I} = 2$, so the prefactor $2U_{\rm II}/U_{\rm I}$ is unity:

$$\frac{N_{\rm II}}{N_{\rm I}} = \frac{2.415\times10^{21}\,T^{3/2}}{n_e}\, e^{-13.6\,{\rm eV}/kT}.$$

The exponential makes the transition sharp: at fixed $P_e$ ionisation goes from 1% to 99% over a factor of 1.6 in temperature. And because the phase-space factor ($\sim10^{27}$ m$^{-3}$) greatly exceeds photospheric electron densities ($10^{19}$–$10^{21}$ m$^{-3}$), ionisation occurs at $kT \approx \chi/15$: hydrogen is half ionised near 9,600 K, where $kT = 0.83$ eV. Low density favours ionisation because recombination needs an electron to be found.

### Why Balmer lines peak at A0

Balmer absorption requires neutral hydrogen in $n = 2$. Neglecting $n \geq 3$, the fraction of all hydrogen able to absorb is

$$\frac{N_2}{N_{\rm total}} = \frac{N_2}{N_1 + N_2}\cdot\frac{N_{\rm I}}{N_{\rm I} + N_{\rm II}} = \frac{4e^{-10.2\,{\rm eV}/kT}}{1 + 4e^{-10.2\,{\rm eV}/kT}}\cdot\frac{1}{1 + N_{\rm II}/N_{\rm I}}.$$

Excitation rises with $T$ until ionisation removes the absorbers. For $P_e = 20$ Pa:

| $T$ (K) | $N_{\rm II}/N_{\rm I}$ | $N_2/N_{\rm total}$ |
|---|---|---|
| 5,772 | $5.6\times10^{-6}$ | $5.0\times10^{-9}$ |
| 8,000 | 0.026 | $1.5\times10^{-6}$ |
| 9,600 | 1.09 | $8.5\times10^{-6}$ |
| 12,000 | 51 | $4.0\times10^{-6}$ |
| 15,000 | $1.2\times10^{3}$ | $1.2\times10^{-6}$ |

The maximum lies at 9,900 K, the temperature of A0 stars. Even there fewer than one hydrogen atom in $10^5$ can absorb a Balmer photon; the lines are strong only because hydrogen is so abundant. This argument, made by Cecilia Payne in 1925, showed that spectral types form a temperature sequence and that stars are mostly hydrogen.

### Equivalent width and oscillator strength

The total strength of an absorption line, independent of spectral resolution, is the **equivalent width**,

$$W_\lambda = \int \frac{F_c - F_\lambda}{F_c}\, d\lambda,$$

the width of a black rectangle removing the same flux. For a cloud of column density $N_a$ (absorbers per m$^2$ in the lower level) in front of a continuum, $F_\lambda/F_c = e^{-\tau_\lambda}$, and the frequency-integrated cross-section of a transition is

$$\int \sigma_\nu\, d\nu = \frac{\pi e^2}{4\pi\varepsilon_0 m_e c}\, f = \pi r_e c\, f = 2.654\times10^{-6} f\ {\rm m^2\,Hz},$$

where the **oscillator strength** $f$ compares the transition with a classical electron oscillator (0.416 for Ly$\alpha$, 0.641 for Na I D$_2$). For a weak line, $\tau \ll 1$ at all frequencies, $1 - e^{-\tau} \approx \tau$, and $W_\nu = N_a\int\sigma_\nu\,d\nu$. Converting with $W_\lambda = \lambda^2 W_\nu/c$,

$$W_\lambda = \pi r_e\, \lambda^2 N_a f = 8.853\times10^{-15}\,{\rm m}\times\lambda^2 N_a f.$$

A weak line's equivalent width is proportional to the number of absorbers and independent of line shape; with the Boltzmann and Saha fractions it yields abundances. Stronger lines saturate and depend on the broadening of Lesson m1-l3.

## Key Ideas

- **Opacity sources**: bound-bound (lines), bound-free ($\propto \nu^{-3}$ above edges), free-free ($\nu^{-2}T^{-3/2}$ in the radio) and electron scattering ($0.020(1+X)$ m$^2$ kg$^{-1}$).
- **H$^-$ opacity**: a 0.754 eV bound state dominates the solar visible continuum at an abundance of $2\times10^{-8}$.
- **Rosseland mean**: a harmonic average dominated by transparent windows; Kramers' law $\bar\kappa \propto \rho T^{-3.5}$.
- **Boltzmann equation**: $N_b/N_a = (g_b/g_a)e^{-\Delta E/kT}$; for hydrogen $N_2/N_1 = 4e^{-10.2\,{\rm eV}/kT}$.
- **Saha equation**: ionisation occurs at $kT \approx \chi/15$ because the free-electron phase space is so large.
- **Balmer maximum**: excitation times neutral fraction peaks near 9,900 K.
- **Weak-line equivalent width**: $W_\lambda = \pi r_e\lambda^2 N f$, linear in column density.

## Worked Examples

### Example 1 — Hydrogen excitation in the Sun and in Vega

Find $N_2/N_1$ for hydrogen at 5772 K and 10,000 K, and the temperature at which the two levels would be equally populated.

**Solution.** At 5772 K, $kT = 8.617\times10^{-5}\times5772 = 0.4974$ eV, so $10.2/0.4974 = 20.51$ and

$$\frac{N_2}{N_1} = 4e^{-20.51} = 4\times1.24\times10^{-9} = 5.0\times10^{-9}.$$

At 10,000 K, $kT = 0.8617$ eV, $10.2/0.8617 = 11.84$, and $N_2/N_1 = 4\times7.23\times10^{-6} = 2.9\times10^{-5}$. Setting $4e^{-10.2\,{\rm eV}/kT} = 1$ gives $kT = 10.2/\ln 4 = 7.36$ eV, i.e. $T = 85{,}400$ K. Saha ionisation removes neutral hydrogen long before that.

### Example 2 — Why calcium lines dominate the solar spectrum

The Sun has Ca/H $= 2.2\times10^{-6}$ by number, yet the Ca II H and K lines are far stronger than H$\alpha$ or H$\beta$. Using $T = 5772$ K, $P_e = 1.5$ Pa, $\chi_{\rm Ca\,I} = 6.11$ eV, $U_{\rm I} = 1.32$ and $U_{\rm II} = 2.30$, compare the number of Ca II ions in the ground state with the number of H atoms in $n = 2$.

**Solution.** $n_e = P_e/kT = 1.5/(1.381\times10^{-23}\times5772) = 1.88\times10^{19}$ m$^{-3}$. With $T^{3/2} = 4.385\times10^5$ and $\chi/kT = 6.11/0.4974 = 12.28$, so $e^{-12.28} = 4.64\times10^{-6}$:

$$\frac{N_{\rm II}}{N_{\rm I}} = \frac{2\times2.30}{1.32}\cdot\frac{2.415\times10^{21}\times4.385\times10^5}{1.88\times10^{19}}\times4.64\times10^{-6} = 3.48\times5.63\times10^7\times4.64\times10^{-6} \approx 9.1\times10^2.$$

Calcium is 99.9% singly ionised, and a fraction $g/U_{\rm II} = 2/2.30 = 0.87$ of Ca II is in the ground level. Hydrogen has $N_{\rm II}/N_{\rm I} = 7.5\times10^{-5}$ (neutral) and an $n = 2$ fraction of $5.0\times10^{-9}$ (Example 1). Therefore

$$\frac{N({\rm Ca\,II},\ {\rm ground})}{N({\rm H},\ n=2)} = \frac{2.2\times10^{-6}\times0.999\times0.87}{5.0\times10^{-9}} \approx 3.8\times10^{2}.$$

About 400 times more calcium ions than hydrogen atoms are ready to absorb.

### Example 3 — Column density from a weak interstellar line

An interstellar Na I D$_2$ line ($\lambda = 589.0$ nm, $f = 0.641$) towards a nearby star has $W_\lambda = 10.0$ mÅ $= 1.00\times10^{-12}$ m. Assuming the line is optically thin, find the column density of Na I.

**Solution.** From $W_\lambda = \pi r_e\lambda^2 N f$,

$$N = \frac{W_\lambda}{\pi r_e\lambda^2 f} = \frac{1.00\times10^{-12}}{8.853\times10^{-15}\times(5.890\times10^{-7})^2\times0.641} = \frac{1.00\times10^{-12}}{1.969\times10^{-27}} = 5.1\times10^{14}\ {\rm m^{-2}},$$

or $5.1\times10^{10}$ cm$^{-2}$. The line-centre formula of Lesson m1-l3 shows that for a Doppler parameter $b = 1$ km s$^{-1}$ this column gives a line-centre optical depth of 0.29, so the thin assumption is good to about 10%.

## Common Misconceptions

- **"Strong lines mean high abundance."** Line strength depends on the fraction in the right ionisation stage and level; calcium beats hydrogen in the Sun despite a $4.5\times10^5$ abundance deficit.
- **"Hydrogen ionises when $kT$ reaches 13.6 eV."** That is $1.6\times10^5$ K. The free-electron phase space makes ionisation occur near $10^4$ K at photospheric densities.
- **"Opacity in the Sun comes from hydrogen atoms."** The visible continuum is dominated by H$^-$, supplied with electrons by metals.
- **"The Rosseland mean is an ordinary average of $\kappa_\nu$."** It is harmonic, so strong lines raise it far less than an arithmetic mean would.
- **"Equivalent width depends on spectral resolution."** Smearing conserves the area removed, so $W_\lambda$ is unchanged if the continuum is set correctly.

## Connections

- The Saha equation is the law of mass action of thermal-physics-and-statistical-mechanics-m3-l2 applied to ionisation; oscillator strengths and selection rules are developed in atomic-and-molecular-physics-m1-l3.
- The qualitative spectral sequence of astrophysics-iii-m1-l2 becomes quantitative here, underpinning the spectral classification in the astronomy-and-astrophysics-lab spectroscopy exercise.
- Kramers opacity and electron scattering feed the energy transport of astrophysics-iii-m2-l4; Saha balance reappears as cosmological recombination at $z \approx 1100$ (astrophysics-iv-m2-l5).
- Saha ionisation balance underlies plasma diagnostics in fusion devices and laser-induced breakdown spectroscopy for industrial elemental analysis.

## Quick Check

1. Explain why H$^-$ opacity is nearly grey across the visible spectrum and why it requires metals to be present.
2. Using the Saha equation, show that lowering the electron density at fixed temperature increases the ionisation fraction, and explain the result physically.
3. Compute $N_3/N_2$ for hydrogen at 10,000 K ($E_3 - E_2 = 1.89$ eV).
4. Why does the Rosseland mean weight frequencies by $\partial B_\nu/\partial T$ and use $1/\kappa_\nu$ rather than $\kappa_\nu$?
5. A weak line with $f = 0.1$ at 400 nm has $W_\lambda = 5$ mÅ. Find the column density of absorbers in the lower level.

## Takeaway

- Opacity comes from bound-bound, bound-free, free-free and scattering processes; H$^-$ dominates cool photospheres and electron scattering hot stars.
- The Boltzmann and Saha equations give LTE populations; ionisation happens far below $\chi/k$.
- Together they explain the Balmer maximum near 9,900 K and the strength of Ca II in the Sun.
- For weak lines $W_\lambda = \pi r_e\lambda^2 Nf$ converts equivalent width directly into column density.
