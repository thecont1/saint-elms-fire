***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: low-dimensional-materials
courseName: Low-Dimensional Materials (Physics Option C)
moduleId: low-dimensional-materials-module-3
moduleName: Transport, Optics and Applications
lessonId: low-dimensional-materials-m3-l3
lessonName: Optical Properties and Applications of Nanostructures
lessonNumber: 9
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - low-dimensional-materials-m3-l2
  - waves-and-optics-m1-l1
  - basic-electronics-m2-l2
learningObjectives:
  - Interpret quantum-dot absorption and photoluminescence spectra, including the first excitonic peak, the Stokes shift, linewidths and the quantum yield $\eta = k_r/(k_r + k_{nr})$.
  - Derive the localised surface plasmon resonance of a small metal sphere from the Drude permittivity and the quasi-static (Mie dipole) polarisability, $\omega_{sp} = \omega_p/\sqrt{\varepsilon_\infty + 2\varepsilon_m}$.
  - Explain why quantum dots improve displays and lasers and why atomically thin channels resist short-channel effects, using the scaling length $\lambda = \sqrt{(\varepsilon_s/\varepsilon_{ox})t_st_{ox}}$.
  - Relate surface area and diffusion length to the use of nanostructures in sensors, battery electrodes and catalysis.
concepts:
  - Quantum-dot photoluminescence
  - Stokes shift
  - Photoluminescence quantum yield
  - Localised surface plasmon resonance
  - Drude model of metals
  - Short-channel effects in 2D transistors
  - Nanostructured electrodes
tags:
  - physics
  - low-dimensional-materials
  - plasmonics
  - nanodevices
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Optical Properties and Applications of Nanostructures

## Overview

The final lesson brings together the confinement physics of Module 1, the materials of Module 2 and the transport ideas of Module 3 to explain why low-dimensional structures have become technologies. It begins with the optics of semiconductor quantum dots: discrete absorption peaks, narrow photoluminescence, the Stokes shift between absorption and emission, and the quantum yield that measures how much absorbed light is re-emitted. It then turns to metal nanoparticles, whose free electrons oscillate collectively in a localised surface plasmon whose colour follows from the Drude model and the quasi-static limit of Mie theory. The second half surveys applications: quantum-dot displays and lasers, two-dimensional transistors and the electrostatic argument for atomically thin channels, nanostructured sensors, and nanomaterial electrodes for batteries and catalysis.

## Learning Path

- **What you should already know**: the Brus equation and envelope selection rules (Lesson m1-l3); the step and delta-function densities of states (Lesson m1-l2); colloidal synthesis and PL characterisation (Lesson m2-l3); MOSFET operation (Basic Electronics, Lesson m2-l2); the driven, damped oscillator (Waves and Optics, Lesson m1-l1).
- **What this lesson adds**: quantum-dot absorption, emission, Stokes shift and quantum yield; Drude and Mie plasmonics; display, laser, transistor, sensor and electrode applications.
- **What later lessons this will unlock**: the mini-project of the Low-Dimensional Materials Lab (Lesson m1-l6); molecular spectroscopy in Atomic and Molecular Physics, where the same absorption–emission language recurs.

## Core Explanation

### Absorption and emission of quantum dots

The absorption spectrum of a colloidal dot ensemble shows a series of peaks rather than a smooth edge. The lowest, the **first excitonic peak**, is the $1S_e$–$1S_h$ transition whose energy the Brus equation estimates; higher peaks correspond to $1P_e$–$1P_h$ and transitions involving other hole levels, allowed by the envelope-overlap rule of Lesson m1-l3. Because the density of states is a set of delta functions, oscillator strength that is spread over a continuum in bulk is concentrated into a few lines.

After absorption the carriers relax within picoseconds to the band-edge exciton, which recombines radiatively with rate $k_r$ or non-radiatively, through surface traps or Auger processes, with rate $k_{nr}$. The measured PL lifetime and the **photoluminescence quantum yield** are

$$\tau_{PL} = \frac{1}{k_r + k_{nr}}, \qquad \eta = \frac{k_r}{k_r + k_{nr}},$$

so $k_r = \eta/\tau_{PL}$. Core/shell CdSe/ZnS or InP/ZnSe/ZnS dots reach $\eta > 80\%$ with $\tau_{PL} \approx 20$–30 ns.

The PL peak lies at lower energy than the first absorption peak. This **Stokes shift**, typically 10–30 meV in CdSe and larger for smaller dots, has two main origins. In a single dot the band-edge exciton is split by exchange and crystal-field effects into several fine-structure states; the lowest is optically "dark" and emits only weakly, so emission comes from a state below the bright absorbing one. In an ensemble, larger dots with smaller gaps also emit preferentially, partly by energy transfer from smaller neighbours. A large Stokes shift reduces re-absorption of emitted light, which matters in thick colour-conversion layers.

The ensemble linewidth is mostly **inhomogeneous**, set by the size distribution (Lesson m2-l3), while the **homogeneous** width of a single dot is set by phonon scattering and lifetime. Single dots also **blink**, switching between bright and dark states when a carrier is temporarily trapped at the surface; good shells suppress this.

### Plasmonics: the Drude permittivity

In a metal the conduction electrons respond to an optical field as a damped oscillator with no restoring force. Solving $m\ddot{x} = -m\gamma\dot{x} - eE_0e^{-i\omega t}$ for the polarisation gives the **Drude permittivity**

$$\varepsilon(\omega) = \varepsilon_\infty - \frac{\omega_p^2}{\omega^2 + i\gamma\omega}, \qquad \omega_p = \sqrt{\frac{ne^2}{\varepsilon_0 m_e}},$$

where $\varepsilon_\infty$ accounts for the bound (interband) electrons. For gold, $n = 5.9 \times 10^{28}$ m$^{-3}$ gives $\hbar\omega_p = 9.0$ eV, and $\varepsilon_\infty \approx 9.8$. Below $\omega_p/\sqrt{\varepsilon_\infty}$ the real part of $\varepsilon$ is negative, which is why bulk metals reflect visible light.

### The localised surface plasmon of a small sphere

For a sphere of radius $a \ll \lambda$ in a medium of permittivity $\varepsilon_m$, the field is nearly uniform across the particle, and the electrostatic solution (the dipole limit of Mie theory) gives an induced dipole $\mathbf{p} = \varepsilon_0\varepsilon_m\alpha\mathbf{E}_0$ with polarisability

$$\alpha = 4\pi a^3\,\frac{\varepsilon(\omega) - \varepsilon_m}{\varepsilon(\omega) + 2\varepsilon_m}.$$

The polarisability, and the field near the particle, is resonant when $\mathrm{Re}\,\varepsilon = -2\varepsilon_m$ (the **Fröhlich condition**). With the Drude form and small $\gamma$, $\varepsilon_\infty - \omega_p^2/\omega^2 = -2\varepsilon_m$ gives the **localised surface plasmon resonance (LSPR)**

$$\omega_{sp} = \frac{\omega_p}{\sqrt{\varepsilon_\infty + 2\varepsilon_m}}.$$

The absorption and scattering cross-sections are

$$\sigma_{abs} = k\,\mathrm{Im}\,\alpha, \qquad \sigma_{sca} = \frac{k^4}{6\pi}|\alpha|^2, \qquad k = \frac{2\pi n_m}{\lambda}.$$

Absorption scales as $a^3$ and scattering as $a^6$, so particles below about 20 nm mainly absorb while larger ones scatter strongly. Beyond about 50 nm the full Mie solution is needed, and retardation red-shifts and broadens the resonance. For particles below a few nanometres, surface scattering adds a damping $\sim v_F/a$ to $\gamma$. The script below plots the quasi-static Drude cross-sections of a 20 nm gold sphere in water; expect an absorption peak near 500 nm (measured: 520 nm, the extra shift coming from interband absorption ignored here), with scattering an order of magnitude smaller.

```python
import numpy as np
import matplotlib.pyplot as plt

hw_p, hgamma, eps_inf, n_m, a = 9.02, 0.07, 9.8, 1.33, 10e-9     # eV, eV, -, -, m
lam = np.linspace(400e-9, 700e-9, 600)
hw = 1239.84e-9 / lam                                              # photon energy (eV)
eps = eps_inf - hw_p**2 / (hw**2 + 1j * hgamma * hw)
eps_m = n_m**2
alpha = 4 * np.pi * a**3 * (eps - eps_m) / (eps + 2 * eps_m)
k = 2 * np.pi * n_m / lam
plt.plot(lam * 1e9, k * alpha.imag * 1e18, label='absorption')
plt.plot(lam * 1e9, k**4 * np.abs(alpha)**2 / (6 * np.pi) * 1e18, label='scattering')
plt.xlabel('wavelength (nm)'); plt.ylabel('cross-section (nm$^2$)'); plt.legend(); plt.show()
```

The resonance shifts with $\varepsilon_m$, so molecules binding to a particle change its colour, the basis of LSPR sensors; the strongly enhanced near field multiplies Raman signals by factors up to $10^6$–$10^8$ in **surface-enhanced Raman scattering (SERS)**. The ruby colour of colloidal gold in medieval stained glass is the same resonance.

### Applications: displays and lasers

In a **quantum-dot display**, a blue LED backlight excites red- and green-emitting dots whose sizes are chosen with the radius–colour relation of Lesson m1-l3. The narrow emission (FWHM 20–35 nm) produces purer primaries and a wider colour gamut than broad-band phosphors. Regulatory limits on cadmium have moved production to InP-based dots. In **quantum-dot lasers**, the delta-function density of states means fewer carriers are needed for inversion and the threshold depends only weakly on temperature; InAs/GaAs self-assembled dots emitting at 1.3 μm are used in data-centre optics and lasers grown on silicon, where their tolerance to defects is a further advantage.

### Applications: two-dimensional transistors

In a field-effect transistor the gate must control the channel potential more strongly than the drain does. For a thin-body device the potential decays from the drain over the **scaling length**

$$\lambda = \sqrt{\frac{\varepsilon_s}{\varepsilon_{ox}}\,t_s\,t_{ox}},$$

where $t_s$ and $t_{ox}$ are the channel and oxide thicknesses. A rule of thumb is that the channel length must exceed about $5\lambda$ to avoid **short-channel effects**: threshold roll-off, drain-induced barrier lowering and a degraded subthreshold swing, whose ideal room-temperature limit is $(k_BT/e)\ln 10 = 60$ mV per decade. Thinning a silicon body below about 5 nm reduces $\lambda$ but destroys mobility through thickness-fluctuation scattering, whereas a MoS$_2$ monolayer is 0.65 nm thick, has no dangling bonds and keeps a mobility of tens of cm$^2$ V$^{-1}$ s$^{-1}$. This is the **short-channel argument** for 2D semiconductors at the end of the silicon roadmap. Graphene, lacking a gap, cannot switch off, but its high mobility suits radio-frequency transistors.

### Applications: sensors, batteries and catalysis

When every atom is a surface atom, adsorbates change conduction strongly: graphene, nanotube and nanowire FETs detect gases such as NO$_2$ down to single molecules and biomolecules through their charge. In energy storage, nanostructuring shortens the solid-state diffusion time $t \sim L^2/D$ and raises surface area (graphene's theoretical value is 2630 m$^2$ g$^{-1}$). Silicon stores about ten times more lithium per gram than graphite but swells by about 300%; silicon nanowires accommodate the strain without cracking. In catalysis, MoS$_2$ is active for the hydrogen-evolution reaction at its edges, not its basal plane, so nanostructures with many edges are preferred, and graphene supports disperse platinum nanoparticles.

## Key Ideas

- **QD absorption**: discrete excitonic peaks; the first is $1S_e$–$1S_h$, estimated by the Brus equation.
- **Quantum yield**: $\eta = k_r/(k_r + k_{nr})$ and $\tau_{PL} = 1/(k_r + k_{nr})$; shells suppress surface traps.
- **Stokes shift**: emission below absorption by tens of meV, from dark-exciton fine structure and ensemble effects.
- **Drude plasmon**: $\omega_p = \sqrt{ne^2/\varepsilon_0m_e}$; LSPR at $\mathrm{Re}\,\varepsilon = -2\varepsilon_m$, giving $\omega_{sp} = \omega_p/\sqrt{\varepsilon_\infty + 2\varepsilon_m}$.
- **Cross-sections**: absorption $\propto a^3$, scattering $\propto a^6$.
- **2D FETs**: scaling length $\lambda = \sqrt{(\varepsilon_s/\varepsilon_{ox})t_st_{ox}}$ favours atomically thin channels.
- **Electrodes and sensors**: high surface area and short diffusion lengths.

## Worked Examples

### Example 1 — Stokes shift and quantum yield

CdSe/ZnS dots absorb at 600 nm and emit at 608 nm, with $\eta = 0.80$ and $\tau_{PL} = 25$ ns. Find the Stokes shift and the radiative and non-radiative rates.

**Solution.** The energies are $1239.84/600 = 2.066$ eV and $1239.84/608 = 2.039$ eV, a Stokes shift of 27 meV. Then

$$k_r = \frac{\eta}{\tau_{PL}} = \frac{0.80}{25\ \text{ns}} = 3.2 \times 10^7\ \text{s}^{-1}, \qquad k_{nr} = \frac{0.20}{25\ \text{ns}} = 8.0 \times 10^6\ \text{s}^{-1}.$$

The radiative lifetime is $1/k_r = 31$ ns. Halving $k_{nr}$ by a thicker shell raises $\eta$ to 0.89.

### Example 2 — Plasmon colour of gold nanoparticles

Estimate the LSPR wavelength of small gold spheres in water ($\varepsilon_m = 1.77$) and in glass ($\varepsilon_m = 2.25$), with $\hbar\omega_p = 9.02$ eV and $\varepsilon_\infty = 9.8$.

**Solution.** In water,

$$\hbar\omega_{sp} = \frac{9.02}{\sqrt{9.8 + 3.54}} = \frac{9.02}{3.652} = 2.47\ \text{eV}, \qquad \lambda = 502\ \text{nm}.$$

In glass, $\hbar\omega_{sp} = 9.02/\sqrt{14.3} = 2.385$ eV and $\lambda = 520$ nm. The measured resonance in water is 520 nm, so the simple model is within 4%. The shift of 18 nm for a refractive-index change of 0.17 gives a sensitivity of about 100 nm per refractive-index unit.

### Example 3 — Scaling length of Si and MoS$_2$ channels

Compare $\lambda$ for a 5 nm silicon body ($\varepsilon_s = 11.7$) and a MoS$_2$ monolayer ($t_s = 0.65$ nm, $\varepsilon_s \approx 7$), both with 1 nm of SiO$_2$ ($\varepsilon_{ox} = 3.9$).

**Solution.** For silicon, $\lambda = \sqrt{(11.7/3.9) \times 5 \times 1} = \sqrt{15} = 3.9$ nm, so $L \gtrsim 5\lambda \approx 19$ nm. For MoS$_2$, $\lambda = \sqrt{(7/3.9) \times 0.65 \times 1} = \sqrt{1.17} = 1.1$ nm, so $L \gtrsim 5.4$ nm. The atomically thin channel allows gate control at channel lengths about three times shorter.

## Common Misconceptions

- **"The Stokes shift is energy lost to heat in the dot's lattice only."** In quantum dots it arises mainly from dark–bright exciton fine structure and ensemble size selection.
- **"A high absorption coefficient means a high quantum yield."** Absorption is set by oscillator strength; quantum yield by the competition between $k_r$ and $k_{nr}$.
- **"Gold nanoparticles are red because gold is red."** Their colour is the plasmon resonance near 520 nm, which depends on size, shape and surroundings; bulk gold is yellow.
- **"Larger metal particles simply absorb more."** Scattering grows as $a^6$ and dominates above a few tens of nanometres; the resonance also red-shifts.
- **"Graphene will replace silicon in logic."** Without a gap it cannot switch off; gapped 2D semiconductors such as MoS$_2$ are the logic candidates.

## Connections

- The Drude oscillator is the driven, damped harmonic oscillator of Waves and Optics (Lesson m1-l1), and the plasma frequency also sets ionospheric radio reflection.
- The MOSFET of Basic Electronics (Lesson m2-l2) and the FET measurements of the Low-Dimensional Materials Lab (Lesson m1-l3) are the starting point for the short-channel argument.
- Absorption, emission and fine structure link to molecular spectroscopy in Atomic and Molecular Physics; plasmon scattering mirrors Rayleigh scattering in planetary atmospheres (Astrophysics II).
- UV-Vis, PL and Stokes-shift measurements of the Low-Dimensional Materials Lab (Lesson m1-l2) test the quantum-dot optics directly.
- Quantum-dot televisions, silicon-photonics lasers, SERS diagnostics and silicon-rich battery anodes are commercial outcomes of this course.

## Quick Check

1. Distinguish homogeneous from inhomogeneous linewidth in a quantum-dot ensemble.
2. A dot ensemble has $\eta = 0.5$ and $\tau_{PL} = 20$ ns. Find $k_r$ and $k_{nr}$.
3. Derive the Fröhlich condition $\mathrm{Re}\,\varepsilon = -2\varepsilon_m$ from the polarisability.
4. Why does scattering dominate absorption for large metal nanoparticles?
5. Explain the short-channel argument for monolayer semiconductors in one paragraph.

## Takeaway

- Quantum dots have discrete absorption peaks and narrow, size-tunable emission, characterised by the Stokes shift and quantum yield.
- Small metal particles show a localised surface plasmon at $\omega_p/\sqrt{\varepsilon_\infty + 2\varepsilon_m}$, sensitive to their surroundings.
- Quantum-dot colour converters and lasers exploit the sharp density of states of zero-dimensional systems.
- Atomically thin channels shorten the scaling length and resist short-channel effects, the key argument for 2D transistors.
- Large surface areas and short diffusion lengths make nanostructures powerful sensors, battery electrodes and catalysts.
