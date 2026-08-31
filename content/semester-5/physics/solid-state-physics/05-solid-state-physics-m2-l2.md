***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: solid-state-physics
courseName: Solid State Physics
moduleId: solid-state-physics-module-2
moduleName: Phonons and Thermal Properties
lessonId: solid-state-physics-m2-l2
lessonName: Specific Heat — Einstein and Debye Models
lessonNumber: 5
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - solid-state-physics-m2-l1
learningObjectives:
  - State the Einstein model of specific heat and its predictions.
  - State the Debye model and explain why it works at low temperature.
  - Compute the Debye temperature and compare with experiment.
  - Distinguish between acoustic and optical contributions in insulators and metals.
concepts:
  - Specific heat
  - Einstein model
  - Debye model
  - Debye temperature
  - Dulong–Petit law
  - Density of states
tags:
  - physics
  - solid-state
  - specific-heat
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Specific Heat — Einstein and Debye Models

## Overview
The specific heat of a solid is the thermal energy stored per unit temperature change. The classical Dulong–Petit law ($C_V = 3 N k_B$) fails at low temperatures; the heat capacity falls to zero. Einstein's model (1907) explained the fall by quantising the atomic vibrations, but it predicted an exponential drop. Debye's model (1912) fixed this by accounting for the low-frequency acoustic phonons, predicting the famous $T^3$ law at low temperature. This lesson develops both models, their predictions, and the extensions for metals and for optical phonons.

## Learning Path
- What you should already know: phonons, Bose–Einstein distribution, density of states.
- What this lesson adds: the Einstein and Debye models, the Debye $T^3$ law, the role of free electrons in metals.
- What it unlocks: thermal conductivity, specific-heat measurements as probes of phase transitions, low-temperature physics.

## Core Explanation
**Specific heat at constant volume.** $C_V = (\partial U / \partial T)_V$, the heat capacity per unit mass or per mole at constant volume. Often given per mole in physics, with units J/(mol·K).

**Classical prediction (Dulong–Petit).** Each atom is a 3D harmonic oscillator with $k_B T$ of energy per quadratic degree of freedom (equipartition). With 3 kinetic + 3 potential = 6 quadratic terms, the energy per atom is $3 k_B T$. The specific heat is $C_V = 3 N_A k_B = 3 R \approx 24.94\text{ J/(mol·K)}$.

**Failure at low temperature.** Experiments (e.g. on diamond) show that $C_V$ falls to zero at low $T$, contradicting the equipartition theorem. The discrepancy is the second failure of classical physics (after blackbody radiation) and was resolved by quantum theory.

**Einstein model (1907).** Each atom is an independent 3D quantum harmonic oscillator with the *same* frequency $\omega_E$ (the Einstein frequency). The energy of one oscillator is

$$U_\text{osc} = \hbar \omega_E \left(\frac{1}{e^{\hbar \omega_E/(k_B T)} - 1} + \frac{1}{2}\right).$$

For $N$ oscillators (3 per atom in 3D, but treated as 3 independent oscillators), the total internal energy is $3 N$ times this. The specific heat is

$$C_V = 3 N k_B \left(\frac{\theta_E}{T}\right)^2 \frac{e^{\theta_E/T}}{(e^{\theta_E/T} - 1)^2},$$

where $\theta_E = \hbar \omega_E/k_B$ is the Einstein temperature. At high $T$, $C_V \to 3 N k_B$ (Dulong–Petit). At low $T$, $C_V \propto (\theta_E/T)^2 e^{-\theta_E/T}$ — exponential suppression.

**Einstein model: success and failure.** The Einstein model correctly predicts the qualitative fall of $C_V$ to zero at low $T$, and the high-$T$ Dulong–Petit value. But the predicted exponential drop is too fast; the experimental $C_V \propto T^3$ at low $T$ is not captured.

**Debye model (1912).** Replace the single frequency with a spectrum of acoustic phonons up to a cutoff frequency $\omega_D$. The density of states (number of modes per unit frequency) is $g(\omega) = 9 N \omega^2 / \omega_D^3$ for $\omega \le \omega_D$, normalised so that $\int_0^{\omega_D} g(\omega) d\omega = 3 N$. The Debye cutoff frequency is set by the condition that the total number of modes equals $3 N$.

**Debye temperature.** $\theta_D = \hbar \omega_D / k_B$. Typical values: $1860\text{ K}$ for diamond (very stiff, high-frequency phonons), $90\text{ K}$ for lead (soft, low-frequency phonons), $343\text{ K}$ for copper, $428\text{ K}$ for aluminium. The Debye temperature is the natural temperature scale for phonons in a solid.

**Debye model: specific heat.** The internal energy is

$$U = \int_0^{\omega_D} \hbar \omega \left(\frac{1}{e^{\hbar \omega/(k_B T)} - 1} + \frac{1}{2}\right) g(\omega) d\omega = 9 N k_B T \left(\frac{T}{\theta_D}\right)^3 \int_0^{\theta_D/T} \frac{x^3}{e^x - 1} dx + \text{const},$$

where $x = \hbar \omega/(k_B T)$. The specific heat is

$$C_V = 9 N k_B \left(\frac{T}{\theta_D}\right)^3 \int_0^{\theta_D/T} \frac{x^4 e^x}{(e^x - 1)^2} dx.$$

**Low-$T$ limit.** $T \ll \theta_D$: the upper limit of the integral is $\to \infty$, and $\int_0^\infty x^4 e^x/(e^x - 1)^2 dx = 4\pi^4/15$. So

$$C_V \approx 9 N k_B (T/\theta_D)^3 \cdot (4\pi^4/15) = \frac{12 \pi^4}{5} N k_B (T/\theta_D)^3.$$

The **Debye $T^3$ law**: $C_V \propto T^3$ at low temperature. Confirmed experimentally for insulators.

**High-$T$ limit.** $T \gg \theta_D$: the integrand becomes small except near $x = 0$, where $x^4 e^x/(e^x - 1)^2 \approx x^2$. The integral $\to \int_0^{x_D} x^2 dx = x_D^3/3 = (\theta_D/T)^3/3$. So $C_V \to 3 N k_B$ — Dulong–Petit. ✓

**The Debye function.** $D(x) = 3/x^3 \int_0^x t^3/(e^t - 1) dt$. $C_V = 3 N k_B D(\theta_D/T)$. Limits: $D(0) = 1$ (Dulong–Petit), $D(\infty) = 4 \pi^4/(5 x^3) \to 0$ ($T^3$ law at low $T$).

**Why the Debye model works at low $T$.** The low-$T$ specific heat is dominated by the low-frequency (long-wavelength) phonons, which are the acoustic modes with $\omega = v q$. The number of such modes with $\omega < \omega_\text{max}$ scales as $\omega_\text{max}^3$, leading to the $T^3$ law. The Einstein model assumed a single frequency and missed this contribution.

**Why the Debye model fails at intermediate $T$.** It assumes a linear dispersion $\omega = v q$ and a sharp cutoff. Real solids have anisotropic elastic constants, multiple branches, and optical phonons. The Debye model captures the right limits but the intermediate $T$ is only approximate.

**Comparison with experiment.** For most insulators, the Debye model fits $C_V(T)$ within $\sim 10\%$ over the full range. The fit is best at low and high $T$; intermediate $T$ has the largest deviations.

**Specific heat of metals.** The free electrons contribute an additional $C_V^\text{el} = \gamma T$, where $\gamma$ is the Sommerfeld parameter (proportional to the density of states at the Fermi level). At low $T$, $C_V = \gamma T + a T^3$; the linear term dominates for $T \ll \theta_D$. This is the basis of experimental determinations of $\gamma$ and the density of states at the Fermi level.

**Density of states at the Fermi level.** $\gamma = (\pi^2/3) k_B^2 g(E_F)$, where $g(E_F)$ is the density of states per unit volume at the Fermi level. Measuring $\gamma$ experimentally gives $g(E_F)$ directly. Heavy-fermion materials have anomalously large $\gamma$ (hundreds of times larger than copper).

**Fermi energy and Sommerfeld expansion.** The electronic specific heat is derived from the Fermi–Dirac distribution using the Sommerfeld expansion: $C_V = (\pi^2/3) k_B^2 T \cdot g(E_F)$. The result is linear in $T$ at low temperature, with coefficient $\gamma \propto g(E_F)$.

**Einstein vs. Debye temperatures.** The Einstein temperature $\theta_E$ is related to a single optical frequency; the Debye temperature $\theta_D$ is an average over acoustic branches. Typically $\theta_D \approx 0.7 \theta_E$ for the same solid. The Debye temperature is the more useful concept for low-$T$ specific heat.

**Specific heat of optical phonons.** Optical phonons have a narrow frequency range, and their specific heat is well described by the Einstein model: an Einstein function peaked near $\hbar \omega / k_B$. The total $C_V$ at high $T$ is the sum of acoustic (Debye) and optical (Einstein) contributions.

**Boson peak.** In glasses, the vibrational density of states shows a "boson peak" — an excess over the Debye $T^3$ prediction at THz frequencies. The origin is debated; it is related to the disordered structure.

**Two-level systems in glasses.** At very low $T$, glasses have a specific heat much larger than the Debye $T^3$ prediction. This is attributed to tunnelling two-level systems — atoms in disordered sites with two nearly-degenerate configurations.

**Phase transitions and specific heat.** A phase transition at temperature $T_c$ shows a specific-heat anomaly: a discontinuity (first-order), a divergence (second-order, with a critical exponent), or a $\lambda$-point (lambda transition, e.g. superfluid helium).

**Specific heat near $T_c$.** For a second-order transition, $C_V \sim |T - T_c|^{-\alpha}$ with $\alpha$ a critical exponent (typically $0 < \alpha < 0.2$ for 3D systems). The mean-field value is $\alpha = 0$ (a jump). Specific-heat measurements determine $\alpha$ and provide strong tests of renormalisation-group predictions.

**Schottky anomaly.** For a system with a few discrete energy levels (e.g. paramagnetic spins in a magnetic field), the specific heat shows a peak (the Schottky anomaly) at a temperature comparable to the level spacing. Distinct from the Debye behaviour.

**Negative thermal expansion.** Most solids expand on heating, but some contract (water ice, Invar alloy, zirconium tungstate). The anharmonicity of the interatomic potential can have either sign of the Grüneisen parameter.

**Thermal expansion coefficient.** $\alpha = (1/L) dL/dT$. For phonons, $\alpha \propto \gamma C_V / (K V)$, where $\gamma$ is the Grüneisen parameter and $K$ is the bulk modulus. Phonons with $\gamma > 0$ give expansion; $\gamma < 0$ gives contraction.

**Heat capacity and phase transitions.** The specific heat is a sensitive probe of phase transitions: structural (e.g. ferroelectric), magnetic (Curie point), superconducting (jump at $T_c$). Calorimetry is a standard tool.

**Calorimetry techniques.** Adiabatic calorimetry, differential scanning calorimetry (DSC), AC calorimetry. Modern instruments can resolve microkelvin changes.

**Microcalorimetry.** For small samples, microcalorimeters with nanokelvin sensitivity. Used in nanoparticle and quantum-dot studies.

**Specific heat of glasses vs. crystals.** Glasses have higher $C_V$ than crystals at low $T$ (the two-level systems). At high $T$, the difference is small. The low-$T$ excess is a hallmark of the disordered state.

**Heat capacity in superconductors.** Below the superconducting transition, $C_V$ is suppressed exponentially as $C_V \sim e^{-\Delta/(k_B T)}$ (BCS theory), where $\Delta$ is the gap. The ratio $C_\text{super}/C_\text{normal} \to 0$ as $T \to 0$. A direct measurement of the energy gap.

**Specific heat of the electron gas in semiconductors.** For doped semiconductors, the electronic contribution is $C_V = \gamma T$ at low $T$, with $\gamma$ proportional to the effective density of states at the Fermi level. The effective mass enters.

**Phonon drag.** In metals at low $T$, the electrons drag the phonons, giving a peak in the thermopower (the phonon-drag peak). Indirect evidence of electron–phonon coupling.

**Thermal conductivity.** Heat is carried by phonons (in insulators) or by electrons (in metals). The thermal conductivity $\kappa = (1/3) C v \ell$, where $C$ is the specific heat, $v$ the velocity, and $\ell$ the mean free path. The mean free path is limited by phonon–phonon scattering (Umklapp) and by impurity scattering.

**Lattice thermal conductivity.** $\kappa_\text{lat} = (1/3) C_V v_s \ell$, where $C_V$ is the phonon specific heat, $v_s$ the sound speed, and $\ell$ the mean free path. At high $T$, $\ell \propto 1/T$ (Umklapp) and $\kappa \propto 1/T$. At low $T$, $\ell$ is limited by impurities and boundaries; $\kappa$ plateaus then drops.

**Tunable Debye temperature.** In low-dimensional materials and nanostructures, the cutoff is determined by the system size, not the bulk. The effective Debye temperature is reduced, and the $T^3$ law persists to higher temperatures.

**Specific heat of the Earth's core.** The Earth's core is iron at high pressure. Specific-heat measurements at high pressure and temperature constrain the geothermal gradient and the dynamics of the core.

**Specific heat of helium-4.** Superfluid helium-4 has a $\lambda$-transition at $T_\lambda = 2.17\text{ K}$ with a logarithmic divergence of the specific heat. The most famous specific-heat anomaly.

**Specific heat of the cosmic microwave background.** A blackbody at $2.725\text{ K}$ has specific heat $\propto T^3$ in its photon bath. The CMB photons behave as a relativistic gas.

**Thermodynamic identities.** $C_V = T (\partial S/\partial T)_V$, $C_P - C_V = 9 \alpha^2 V T / \kappa_T$. The latter is the relation between the two specific heats, important for real solids at high $T$.

**The Dulong–Petit limit.** At high $T$ ($T \gg \theta_D$), $C_V \to 3 N k_B$ — the classical limit. This is a useful sanity check: the quantum theory must reproduce the classical answer at high $T$.

**The Debye temperature and elastic constants.** $\theta_D = \hbar v_s (6 \pi^2 n)^{1/3}/k_B$, where $v_s$ is the average sound speed and $n$ the number density. The Debye temperature can be estimated from elastic constants. For materials with stiff bonds (diamond), $\theta_D$ is high; for soft materials (lead), $\theta_D$ is low.

**Practical importance of the Debye temperature.** $\theta_D$ determines the temperature scale for many thermal and electronic properties: low-$T$ specific heat, thermal conductivity, electrical resistivity, superconductor $T_c$. The Debye temperature is one of the most-quoted numbers for a solid.

## Key Ideas
- Dulong–Petit: $C_V = 3 R$ at high $T$.
- Einstein model: $C_V \propto e^{-\theta_E/T}$ at low $T$ (too fast).
- Debye model: $C_V \propto T^3$ at low $T$ (correct).
- Debye temperature $\theta_D = \hbar \omega_D / k_B$ is the natural temperature scale.
- Metals have an additional $C_V^\text{el} = \gamma T$ from free electrons.

## Worked Examples
**Example 1 — Debye model for diamond.** $\theta_D = 1860\text{ K}$. At $T = 300\text{ K}$: $T/\theta_D = 0.16$. The Debye function $D(0.16) \approx 0.95$, so $C_V \approx 0.95 \times 3 R \approx 23.7\text{ J/(mol·K)}$. Close to Dulong–Petit but slightly below. At $T = 30\text{ K}$: $T/\theta_D = 0.016$, $C_V \approx (12 \pi^4/5) R (0.016)^3 \approx 0.039\text{ J/(mol·K)}$. Diamond's $C_V$ is very small at low $T$, consistent with its high Debye temperature.

**Example 2 — Einstein model for diamond.** $\theta_E \sim 1450\text{ K}$. At $T = 300\text{ K}$: $C_V = 3 R (\theta_E/T)^2 e^{-\theta_E/T}/(1 - e^{-\theta_E/T})^2 \approx 3 R \times 23 \times 0.008 \times (1 - 0.008)^{-2} \approx 5.6\text{ J/(mol·K)}$. Lower than the Debye value — the Einstein model is less accurate at intermediate $T$.

**Example 3 — Electronic specific heat of copper.** $\gamma = 0.695\text{ mJ/(mol·K}^2)$. At $T = 1\text{ K}$: $C_V^\text{el} = 0.695\text{ mJ/(mol·K)}$. Lattice contribution: $C_V^\text{lat} = (12 \pi^4/5) R (1/343)^3 \approx 4 \times 10^{-5}\text{ J/(mol·K)}$. So $C_V^\text{el}$ dominates by a factor of $\sim 20$. At $T = 10\text{ K}$: $C_V^\text{el} = 6.95\text{ mJ/(mol·K)}$, $C_V^\text{lat} \approx 40\text{ mJ/(mol·K)}$. Lattice dominates. This crossover is the basis of the experimental determination of $\gamma$.

**Example 4 — Heat capacity of NaCl.** $\theta_D \approx 320\text{ K}$. At $T = 100\text{ K}$: $C_V \approx 12\text{ J/(mol·K)}$. At $T = 10\text{ K}$: $C_V \approx 0.012\text{ J/(mol·K)}$. $T^3$ scaling: factor of $1000$ in $T$, factor of $10^9$ in $C_V$. ✓

## Common Misconceptions
- **"$C_V = 3R$ for all solids."** Only at high $T$ ($T \gg \theta_D$).
- **"Specific heat is a constant."** It depends strongly on $T$, especially at low $T$.
- **"Einstein and Debye are the same."** Einstein assumed a single frequency; Debye included the full acoustic spectrum.
- **"Phonons don't contribute to $C_V$ in metals."** They do, but at low $T$ the electronic $C_V = \gamma T$ dominates.

## Connections
The Debye model is the foundation of low-$T$ solid-state physics, including the electron–phonon coupling in superconductors (next module on band theory) and the thermal conductivity of insulators. The $T^3$ law is one of the most-quoted results in physics, with direct applications in low-temperature physics, geophysics (Earth's core), and astrophysics (cooling of neutron stars).

## Quick Check
1. State the Dulong–Petit law.
2. Why does the Einstein model fail at low $T$?
3. State the Debye $T^3$ law.
4. What is the Debye temperature?
5. Why do metals have a linear term in $C_V$ at low $T$?

## Takeaway
- Dulong–Petit: $C_V = 3R$ at high $T$.
- Einstein: single frequency, exponential drop at low $T$.
- Debye: acoustic spectrum, $C_V \propto T^3$ at low $T$.
- Debye temperature $\theta_D$ is the natural scale.
- Metals: electronic $C_V = \gamma T$ dominates at very low $T$.
