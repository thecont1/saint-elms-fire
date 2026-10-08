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
lessonId: astronomy-and-astrophysics-m1-l3
lessonName: Line Broadening, the Curve of Growth and Non-thermal Emission
lessonNumber: 3
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 3
prerequisites:
  - astronomy-and-astrophysics-m1-l2
  - thermal-physics-and-statistical-mechanics-m2-l1
  - electricity-and-magnetism-m3-l1
learningObjectives:
  - Derive the Lorentzian and Gaussian line profiles from natural, pressure and Doppler broadening and describe their combination in the Voigt profile.
  - Explain the linear, flat and damping regimes of the curve of growth and compute equivalent widths in each.
  - Derive the synchrotron spectral index $\alpha = (p-1)/2$ for a power-law electron distribution and compute synchrotron cooling times.
  - Compare thermal bremsstrahlung, synchrotron and inverse Compton emission and identify where each dominates.
concepts:
  - Lorentzian natural and pressure broadening
  - Doppler broadening
  - Voigt profile
  - Curve of growth
  - Thermal bremsstrahlung
  - Synchrotron radiation
  - Inverse Compton scattering
tags:
  - physics
  - astronomy-and-astrophysics
  - spectral-lines
  - non-thermal-emission
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - computational
***

# Line Broadening, the Curve of Growth and Non-thermal Emission

## Overview

Lesson m1-l2 related the equivalent width of a weak line to the number of absorbers without asking about the line's shape. Real lines have a profile set by three physical mechanisms: the finite lifetime of atomic states, collisions with neighbouring particles, and the thermal and turbulent motions of the absorbers. The first two give Lorentzian profiles and the third a Gaussian; their convolution is the Voigt profile. Once a line saturates, its equivalent width depends on that shape, and the curve of growth relates the two. The second half of the lesson leaves bound electrons behind for three continuum processes from free electrons — thermal bremsstrahlung, synchrotron radiation and inverse Compton scattering — which dominate the X-ray and radio sky and diagnose temperatures, magnetic fields and relativistic particles.

## Learning Path

- **What you should already know**: oscillator strength and weak-line equivalent width (Lesson m1-l2); the Maxwell velocity distribution (thermal-physics-and-statistical-mechanics-m2-l1); the Lorentz force on a moving charge (electricity-and-magnetism-m3-l1).
- **What this lesson adds**: natural, pressure and Doppler broadening; the Voigt function; the three regimes of the curve of growth; bremsstrahlung, synchrotron and inverse Compton spectra and cooling.
- **What later lessons this will unlock**: the 21 cm line profile and HII-region free-free emission (Lesson m2-l2); molecular-cloud line widths in the virial theorem (Lesson m2-l3); spectroscopic radial velocities (Lesson m3-l2).

## Core Explanation

### Line profiles

Write the absorption cross-section as $\sigma_\nu = \pi r_e c f\,\phi(\nu)$, where the **profile** $\phi(\nu)$ satisfies $\int\phi\,d\nu = 1$. All of Lesson m1-l2's line strength sits in $\pi r_e c f$; the broadening physics sits in $\phi$.

**Natural broadening.** An excited state decaying at total rate $\Gamma$ radiates a damped wave $e^{-\Gamma t/2}\cos 2\pi\nu_0 t$, whose Fourier transform is the **Lorentzian**

$$\phi_L(\nu) = \frac{\Gamma/4\pi^2}{(\nu-\nu_0)^2 + (\Gamma/4\pi)^2},$$

with full width at half maximum $\Delta\nu_{1/2} = \Gamma/2\pi$. Here $\Gamma$ is the sum of the decay rates of the upper and lower levels. For Ly$\alpha$, $\Gamma = A_{21} = 6.27\times10^8$ s$^{-1}$, so $\Delta\nu_{1/2} = 1.0\times10^8$ Hz and $\Delta\lambda_{1/2} = \lambda^2\Delta\nu/c = 4.9\times10^{-6}$ nm: tiny in the core, but the Lorentzian falls only as $(\nu-\nu_0)^{-2}$.

**Pressure broadening.** Collisions interrupt the emitted wave train or perturb the levels. If phase-destroying collisions occur at rate $\nu_{\rm col}$, the profile is again Lorentzian with $\Gamma = \Gamma_{\rm rad} + 2\nu_{\rm col}$, and since $\nu_{\rm col} \propto n\sigma v$ the width grows with density. The perturbation depends on the interaction: linear Stark effect ($\Delta E \propto r^{-2}$, hydrogen lines in hot stars), quadratic Stark effect ($r^{-4}$, metals) and van der Waals interaction ($r^{-6}$, cool stars). Low-density giant atmospheres show narrower wings than dwarfs, which is the physical basis of the MK luminosity classes.

**Doppler broadening.** An absorber with line-of-sight velocity $v$ absorbs at $\nu_0(1 - v/c)$. A Maxwellian velocity distribution, optionally augmented by Gaussian **microturbulence** $\xi$, gives the Gaussian

$$\phi_D(\nu) = \frac{1}{\sqrt{\pi}\,\Delta\nu_D}\exp\!\left[-\frac{(\nu-\nu_0)^2}{\Delta\nu_D^2}\right], \qquad \Delta\nu_D = \frac{\nu_0 b}{c}, \quad b = \sqrt{\frac{2kT}{m} + \xi^2},$$

with FWHM $2\sqrt{\ln 2}\,\Delta\nu_D = 1.665\,\Delta\nu_D$. For hydrogen at $10^4$ K, $b = 12.8$ km s$^{-1}$ and the H$\alpha$ FWHM is 0.047 nm; for iron in the Sun the thermal part is only 1.3 km s$^{-1}$, so microturbulence ($\xi \approx 1.5$ km s$^{-1}$) matters.

### The Voigt profile

Independent broadening mechanisms convolve. A Lorentzian convolved with a Gaussian is the **Voigt profile**,

$$\phi_V(\nu) = \frac{H(a,u)}{\sqrt{\pi}\,\Delta\nu_D}, \qquad H(a,u) = \frac{a}{\pi}\int_{-\infty}^{\infty}\frac{e^{-y^2}\,dy}{(u-y)^2 + a^2},$$

with $u = (\nu-\nu_0)/\Delta\nu_D$ and damping parameter $a = \Gamma/(4\pi\Delta\nu_D)$, typically $10^{-3}$–$10^{-1}$. For small $u$, $H \approx e^{-u^2}$ (Doppler core); for large $u$, $H \approx a/(\sqrt{\pi}u^2)$ (damping wings). The snippet below plots both limits and the exact Voigt function, computed as the real part of the Faddeeva function; on a log axis expect the Voigt curve to follow the Gaussian to $u \approx 3$ and then switch to the much broader Lorentzian wings.

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.special import wofz

u = np.linspace(-10, 10, 2001)          # (nu - nu0) / Delta nu_D
a = 0.01                                # damping parameter
plt.semilogy(u, np.exp(-u**2), label="Gaussian core")
plt.semilogy(u, a/(np.sqrt(np.pi)*(u**2 + a**2)), label="Lorentzian wings")
plt.semilogy(u, wofz(u + 1j*a).real, "k", label="Voigt H(a,u)")
plt.ylim(1e-6, 2); plt.xlabel("u"); plt.legend(); plt.show()
```

### The curve of growth

The line-centre optical depth of a Doppler-dominated line is

$$\tau_0 = \frac{\pi r_e c f N}{\sqrt{\pi}\,\Delta\nu_D} = \frac{\sqrt{\pi}\,r_e c\,f N\lambda}{b} = 1.497\times10^{-6}\,\frac{N f\lambda}{b}\quad({\rm SI}).$$

As $N$ grows, $W_\lambda = \int(1 - e^{-\tau_\lambda})\,d\lambda$ passes through three regimes, together called the **curve of growth**:

| Regime | Condition | $W_\lambda$ |
|---|---|---|
| Linear | $\tau_0 \lesssim 1$ | $\pi r_e\lambda^2 N f$ |
| Flat (saturated) | $10 \lesssim \tau_0 \lesssim 10^4$ | $\dfrac{2b\lambda}{c}\sqrt{\ln\tau_0}$ |
| Damping (square-root) | wings opaque | $\lambda^2\sqrt{r_e N f\Gamma/c}$ |

On the flat part the core is black and $W_\lambda$ grows only logarithmically, while depending strongly on $b$. On the damping part the Lorentzian wings, with $\tau = C/(\nu-\nu_0)^2$ and $C = r_e c fN\Gamma/4\pi$, become opaque; using $\int_{-\infty}^{\infty}(1 - e^{-C/x^2})\,dx = 2\sqrt{\pi C}$ gives $W_\nu = \sqrt{r_e c N f\Gamma}$ and the tabulated $W_\lambda$. Plotting $\log(W_\lambda/\lambda)$ against $\log(Nf\lambda)$ for many lines of one ion, with $N$ for each level from the Boltzmann equation, yields both the abundance and $b$: the classical **empirical curve of growth**.

### Thermal bremsstrahlung

An electron accelerated in the Coulomb field of an ion radiates. Averaging over a Maxwellian gives the emissivity

$$4\pi j_\nu \propto Z^2 n_e n_i T^{-1/2} e^{-h\nu/kT} g_{\rm ff},$$

flat up to $h\nu \approx kT$ and then exponentially cut off, so the cutoff measures $T$ directly. The frequency-integrated power is

$$\varepsilon_{\rm ff} = 1.4\times10^{-40}\, Z^2 g_B\, T^{1/2} n_e n_i\ {\rm W\,m^{-3}}\quad(n\ {\rm in\ m^{-3}}),$$

with $g_B \approx 1.2$. Bremsstrahlung dominates the X-ray emission of galaxy-cluster gas ($kT$ = 2–10 keV) and the radio continuum of HII regions, which by Kirchhoff's law is optically thick ($I_\nu \propto \nu^2$) at low frequency and thin ($\propto \nu^{-0.1}$) above the turnover.

### Synchrotron radiation

A relativistic electron of Lorentz factor $\gamma$ spirals in a magnetic field $B$, radiating

$$P = \frac{4}{3}\sigma_T c\,\beta^2\gamma^2 U_B, \qquad U_B = \frac{B^2}{2\mu_0}.$$

Relativistic beaming concentrates the emission into a cone of half-angle $1/\gamma$, so the observer sees short pulses whose spectrum peaks near the **critical frequency**

$$\nu_c = \frac{3}{2}\gamma^2\nu_g\sin\alpha, \qquad \nu_g = \frac{eB}{2\pi m_e} = 28\ {\rm GHz\,T^{-1}}\times B,$$

where $\alpha$ is the pitch angle. For a power law $N(E)\,dE \propto E^{-p}\,dE$, take each electron to radiate at $\nu \approx \gamma^2\nu_g$, so $E \propto \nu^{1/2}$ and $dE/d\nu \propto \nu^{-1/2}$. Then $j_\nu\,d\nu = P(E)N(E)\,dE$ gives

$$j_\nu \propto E^2 E^{-p}\,\frac{dE}{d\nu} \propto \nu^{(2-p)/2}\nu^{-1/2} = \nu^{-(p-1)/2}.$$

The typical $p \approx 2.4$ gives the spectral index $\alpha \approx 0.7$ ($F_\nu \propto \nu^{-\alpha}$). Below a turnover the source self-absorbs, giving $F_\nu \propto \nu^{5/2}$; the emission is linearly polarised up to about 70%. The cooling time

$$t_{\rm sync} = \frac{\gamma m_e c^2}{P} = \frac{3m_e c}{4\sigma_T U_B\gamma}$$

falls with $\gamma$, so the most energetic electrons die first and an ageing population steepens by 0.5 in $\alpha$ above a break frequency.

### Inverse Compton scattering

A relativistic electron scattering a photon of energy $\varepsilon_0$ boosts it to an average of $\langle\varepsilon_1\rangle = \frac{4}{3}\gamma^2\varepsilon_0$ (Thomson regime, $\gamma\varepsilon_0 \ll m_e c^2$), with power $P_{\rm IC} = \frac{4}{3}\sigma_T c\beta^2\gamma^2 U_{\rm rad}$. Hence

$$\frac{P_{\rm sync}}{P_{\rm IC}} = \frac{U_B}{U_{\rm rad}}.$$

The CMB ($U = 4.17\times10^{-14}$ J m$^{-3}$) acts like a field of $3.2\times10^{-10}$ T. In clusters, hot thermal electrons scatter CMB photons to higher frequencies, producing the **Sunyaev–Zel'dovich** decrement in the Rayleigh–Jeans part of the CMB spectrum.

| Process | Emitters | Spectrum | Where it dominates |
|---|---|---|---|
| Bremsstrahlung | thermal $e^-$ on ions | flat, cutoff at $kT$ | cluster X-rays, HII radio continuum |
| Synchrotron | relativistic $e^-$ in $B$ | $\nu^{-(p-1)/2}$, polarised | supernova remnants, radio galaxies, Galactic background |
| Inverse Compton | relativistic $e^-$ on photons | $\varepsilon_0 \to \frac{4}{3}\gamma^2\varepsilon_0$ | blazar $\gamma$-rays, SZ effect |

## Key Ideas

- **Lorentzian broadening**: natural and pressure broadening give FWHM $\Gamma/2\pi$ with $\Gamma = \Gamma_{\rm rad} + 2\nu_{\rm col}$; wings fall as $\Delta\nu^{-2}$.
- **Doppler broadening**: a Gaussian with $\Delta\nu_D = \nu_0 b/c$, $b = \sqrt{2kT/m + \xi^2}$.
- **Voigt profile**: Doppler core and Lorentzian wings, set by $a = \Gamma/4\pi\Delta\nu_D$.
- **Curve of growth**: $W \propto N$ (linear), $\propto b\sqrt{\ln\tau_0}$ (flat), $\propto\sqrt{N\Gamma}$ (damping).
- **Bremsstrahlung**: flat spectrum to $h\nu \approx kT$; power $\propto n_e n_i T^{1/2}$.
- **Synchrotron**: $\nu_c \propto \gamma^2 B$, $\alpha = (p-1)/2$, cooling time $\propto 1/(\gamma B^2)$.
- **Inverse Compton**: photon energies boosted by $\frac{4}{3}\gamma^2$; $P_{\rm sync}/P_{\rm IC} = U_B/U_{\rm rad}$.

## Worked Examples

### Example 1 — Core and wings of Ly$\alpha$

For Ly$\alpha$ ($\lambda = 121.567$ nm) in gas at $10^4$ K with $b = 12.8$ km s$^{-1}$, find $\Delta\nu_D$, the damping parameter, and the velocity at which the wings take over.

**Solution.** $\Delta\nu_D = b/\lambda = 1.28\times10^4/1.21567\times10^{-7} = 1.06\times10^{11}$ Hz, and $a = 6.27\times10^8/(4\pi\times1.06\times10^{11}) = 4.7\times10^{-4}$. The Doppler FWHM, $1.76\times10^{11}$ Hz, is 1,760 times the natural width. The wings take over where $e^{-u^2} = a/(\sqrt{\pi}u^2)$; at $u = 3.25$ both sides are $2.5\times10^{-5}$. This is $3.25\times12.8 = 42$ km s$^{-1}$ from line centre: the natural width is invisible in the core yet controls everything beyond about 40 km s$^{-1}$.

### Example 2 — Ly$\alpha$ along the curve of growth

Take $b = 10$ km s$^{-1}$, $f = 0.416$ and $\Gamma = 6.27\times10^8$ s$^{-1}$. Find $W_\lambda$ for $N = 10^{19}$ m$^{-2}$ and $N = 10^{24}$ m$^{-2}$.

**Solution.** For $N = 10^{19}$, $\tau_0 = 1.497\times10^{-6}\times10^{19}\times0.416\times1.21567\times10^{-7}/10^4 = 76$: the flat part. Then

$$W_\lambda = \frac{2\times10^4\times1.21567\times10^{-7}}{2.998\times10^8}\sqrt{\ln 76} = 8.11\times10^{-12}\times2.08 = 1.69\times10^{-11}\ {\rm m} = 0.17\ \text{Å}.$$

The linear formula would have given 5.4 Å, so saturation has cut the width by a factor of 30. For $N = 10^{24}$ m$^{-2}$, a damped Ly$\alpha$ absorber,

$$W_\lambda = \lambda^2\sqrt{\frac{r_e N f\Gamma}{c}} = 1.478\times10^{-14}\sqrt{\frac{2.818\times10^{-15}\times10^{24}\times0.416\times6.27\times10^8}{2.998\times10^8}} = 7.3\times10^{-10}\ {\rm m},$$

i.e. 7.3 Å, independent of $b$ and far larger than the flat-part value of 0.17 Å.

### Example 3 — Synchrotron electrons in a radio lobe

A radio lobe with $B = 1.0$ nT (10 μG) is observed at 1.4 GHz. Find $\gamma$ of the radiating electrons, their synchrotron lifetime, and the importance of inverse Compton losses on the CMB.

**Solution.** $\nu_g = 2.80\times10^{10}\times10^{-9} = 28.0$ Hz. With $\nu_c = 1.5\gamma^2\nu_g$ (taking $\sin\alpha = 1$), $\gamma^2 = 1.4\times10^9/42.0 = 3.33\times10^7$ and $\gamma = 5.8\times10^3$, an energy of 2.95 GeV. $U_B = (10^{-9})^2/(2\times4\pi\times10^{-7}) = 3.98\times10^{-13}$ J m$^{-3}$, so

$$t_{\rm sync} = \frac{3\times9.109\times10^{-31}\times2.998\times10^8}{4\times6.652\times10^{-29}\times3.98\times10^{-13}\times5.8\times10^3} = 1.34\times10^{15}\ {\rm s} = 4.2\times10^7\ {\rm yr}.$$

$U_B/U_{\rm CMB} = 3.98\times10^{-13}/4.17\times10^{-14} = 9.5$, so inverse Compton adds about 10% to the losses (lifetime $3.8\times10^7$ yr) and upscatters CMB photons ($\varepsilon_0 = 6.3\times10^{-4}$ eV) to $\frac{4}{3}\gamma^2\varepsilon_0 = 28$ keV hard X-rays.

## Common Misconceptions

- **"Natural broadening is negligible because the natural width is tiny."** It is tiny in the core, but the Lorentzian wings dominate beyond a few Doppler widths and set the equivalent width of every strong line.
- **"Doubling the absorbers doubles the equivalent width."** Only on the linear part. On the flat part $W$ grows logarithmically, and on the damping part as $\sqrt{N}$.
- **"A synchrotron spectrum tells us the source temperature."** Synchrotron electrons follow a power law, not a Maxwellian; the spectrum measures $p$, and brightness temperatures have no thermal meaning.
- **"Inverse Compton scattering is a separate kind of electron from synchrotron."** The same relativistic electrons do both; the ratio of losses is just $U_B/U_{\rm rad}$.

## Connections

- The Lorentzian is the resonance curve of the damped driven oscillator in differential-equations-m2-l3; natural width is the energy–time uncertainty relation of introduction-to-quantum-mechanics.
- Doppler widths use the Maxwell distribution of thermal-physics-and-statistical-mechanics-m2-l1; spectrograph resolution limits on line widths appear in waves-and-optics-m3-l2 and the astronomy-and-astrophysics-lab slit spectrograph.
- Synchrotron and inverse Compton emission explain the pulsar wind nebulae of astrophysics-iv-m3-l7 and the jets of astrophysics-iv-m1-l3; the gyrofrequency is the cyclotron frequency of electricity-and-magnetism-m3-l1.
- Synchrotron light sources exploit the same $\gamma^2$ beaming to produce intense X-rays for crystallography, linking to solid-state-physics-m1-l3.

## Quick Check

1. Show that the FWHM of the Lorentzian $\phi_L$ is $\Gamma/2\pi$.
2. Compute the thermal Doppler parameter of Fe at 5772 K and explain why microturbulence matters for solar iron lines.
3. Why does the flat part of the curve of growth depend on $b$ while the damping part does not?
4. A synchrotron source has $\alpha = 0.6$. What is $p$? How does the spectrum change after the electrons have aged?
5. In what environment would inverse Compton losses exceed synchrotron losses for the same electrons?

## Takeaway

- Line profiles combine Lorentzian (natural and pressure) and Gaussian (Doppler) broadening into the Voigt profile.
- The curve of growth links equivalent width to column density through linear, flat and damping regimes.
- Thermal bremsstrahlung measures hot-gas temperatures; synchrotron measures relativistic electrons and magnetic fields.
- Inverse Compton scattering by the same electrons boosts photons by $\gamma^2$ and competes with synchrotron as $U_{\rm rad}/U_B$.
