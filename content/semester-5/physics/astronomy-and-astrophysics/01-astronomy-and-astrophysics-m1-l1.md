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
lessonId: astronomy-and-astrophysics-m1-l1
lessonName: Specific Intensity, Radiative Transfer and the Planck Function
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - astrophysics-iii-m1-l2
  - thermal-physics-and-statistical-mechanics-m3-l1
  - introduction-to-quantum-mechanics-m1-l1
learningObjectives:
  - Define specific intensity, mean intensity, flux and radiation pressure, and show that $F = \pi I$ for an isotropically emitting surface.
  - Derive the equation of radiative transfer $dI_\nu/d\tau_\nu = -I_\nu + S_\nu$ and solve it for a slab with constant source function.
  - Apply the Planck function, its Rayleigh–Jeans and Wien limits, and Kirchhoff's law $j_\nu = \alpha_\nu B_\nu(T)$ to astrophysical sources.
  - Compute brightness temperatures and effective temperatures from measured intensities and luminosities.
concepts:
  - Specific intensity
  - Optical depth
  - Source function
  - Radiative transfer equation
  - Planck function
  - Kirchhoff's law of thermal emission
  - Brightness temperature
tags:
  - physics
  - astronomy-and-astrophysics
  - radiative-transfer
  - blackbody-radiation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Specific Intensity, Radiative Transfer and the Planck Function

## Overview

Almost all our knowledge of the universe beyond the solar system arrives as radiation, so how radiation is emitted, absorbed and transported through matter underlies quantitative astrophysics. This lesson defines the radiation field and derives the equation of radiative transfer, with optical depth, the source function and the thin and thick limits. It then recalls the Planck function, establishes Kirchhoff's law and introduces brightness temperature. Blackbody spectra, used descriptively in Astrophysics III, become the source function of a transfer problem, as needed for the atmospheres and interstellar medium of Module 2.

## Learning Path

- **What you should already know**: the Planck spectrum (introduction-to-quantum-mechanics-m1-l1); the Boltzmann factor (thermal-physics-and-statistical-mechanics-m3-l1); magnitudes and stellar spectra (astrophysics-iii-m1-l2).
- **What this lesson adds**: moments of the radiation field; optical depth and the source function; the formal solution of the transfer equation; Kirchhoff's law and LTE; brightness and effective temperatures.
- **What later lessons this will unlock**: opacities and the Boltzmann and Saha equations (Lesson m1-l2); line broadening and non-thermal emission (Lesson m1-l3); the grey atmosphere and limb darkening (Lesson m2-l1); the 21 cm line and HII regions (Lesson m2-l2), which use the slab solution derived here.

## Core Explanation

### Specific intensity and its moments

Radiation crossing area $dA$, whose normal makes angle $\theta$ with the propagation direction, within solid angle $d\Omega$, frequency interval $d\nu$ and time $dt$, carries energy

$$dE_\nu = I_\nu \cos\theta \, dA \, d\Omega \, d\nu \, dt.$$

The **specific intensity** $I_\nu$ (W m$^{-2}$ Hz$^{-1}$ sr$^{-1}$) keeps full directional information. In empty space it is constant along a ray, since the growing area of a bundle of rays exactly offsets its shrinking solid angle; the surface brightness of a resolved nebula is therefore independent of distance, while the flux of an unresolved star falls as $1/d^2$.

Integrating over direction gives the angular moments. The **mean intensity** is

$$J_\nu = \frac{1}{4\pi}\oint I_\nu \, d\Omega,$$

the **flux** (net energy per unit area, time and frequency) is

$$F_\nu = \oint I_\nu \cos\theta \, d\Omega,$$

and the **radiation pressure** is $P_\nu = \frac{1}{c}\oint I_\nu \cos^2\theta \, d\Omega$, with energy density $u_\nu = (4\pi/c) J_\nu$. For an isotropic field $F_\nu = 0$ and $P_\nu = u_\nu/3$, the photon-gas equation of state.

For a surface emitting isotropically into the outward hemisphere,

$$F_\nu = \int_0^{2\pi}\!\!d\phi\int_0^{\pi/2} I_\nu \cos\theta \sin\theta \, d\theta = \pi I_\nu.$$

The $\cos\theta$ projection halves the hemispherical solid angle. A blackbody star of radius $R$ therefore has surface flux $F = \pi B = \sigma T^4$ and luminosity $L = 4\pi R^2 \sigma T_{\rm eff}^4$, which defines the **effective temperature**.

### Emission, absorption and the transfer equation

Over a path $ds$ through matter, the **emission coefficient** $j_\nu$ (W m$^{-3}$ Hz$^{-1}$ sr$^{-1}$) adds intensity, $dI_\nu = j_\nu \, ds$, and the **absorption coefficient** $\alpha_\nu$ (m$^{-1}$) removes it in proportion to what is present, $dI_\nu = -\alpha_\nu I_\nu \, ds$. For $n$ absorbers per unit volume with cross-section $\sigma_\nu$, $\alpha_\nu = n\sigma_\nu$; in stellar notation $\alpha_\nu = \kappa_\nu \rho$, with **opacity** $\kappa_\nu$ (m$^2$ kg$^{-1}$). Scattering out of and into the beam is folded into $\alpha_\nu$ and $j_\nu$. Combining,

$$\frac{dI_\nu}{ds} = -\alpha_\nu I_\nu + j_\nu.$$

Define the **optical depth** $d\tau_\nu = \alpha_\nu \, ds$, the path in units of the photon mean free path $\ell_\nu = 1/\alpha_\nu$, and the **source function** $S_\nu = j_\nu/\alpha_\nu$, which has units of intensity. Then

$$\frac{dI_\nu}{d\tau_\nu} = -I_\nu + S_\nu.$$

The intensity relaxes towards the source function over an optical depth of about one. Media with $\tau_\nu \ll 1$ are **optically thin**; with $\tau_\nu \gg 1$, **optically thick**, and the emergent intensity reflects only the last optical depth.

### The formal solution

With the integrating factor $e^{\tau_\nu}$, $d(I_\nu e^{\tau_\nu})/d\tau_\nu = S_\nu e^{\tau_\nu}$; integrating from $0$ to $\tau_\nu$,

$$I_\nu(\tau_\nu) = I_\nu(0)\, e^{-\tau_\nu} + \int_0^{\tau_\nu} S_\nu(\tau')\, e^{-(\tau_\nu - \tau')}\, d\tau'.$$

The terms are the attenuated background and the attenuated emission of each layer. For constant $S_\nu$,

$$I_\nu(\tau_\nu) = I_\nu(0)\, e^{-\tau_\nu} + S_\nu \left(1 - e^{-\tau_\nu}\right).$$

For $\tau_\nu \ll 1$, $I_\nu \approx I_\nu(0)(1-\tau_\nu) + S_\nu \tau_\nu$; with no background the emergent intensity $S_\nu\tau_\nu = j_\nu L$ is proportional to the amount of material. For $\tau_\nu \gg 1$, $I_\nu \to S_\nu$ whatever the background, and the brightness says nothing about the column. A spectral line spans both regimes between its centre and wings.

### The Planck function and its limits

Radiation in thermal equilibrium at temperature $T$ is isotropic with intensity

$$B_\nu(T) = \frac{2h\nu^3}{c^2}\,\frac{1}{e^{h\nu/kT} - 1}, \qquad B_\lambda(T) = \frac{2hc^2}{\lambda^5}\,\frac{1}{e^{hc/\lambda kT} - 1},$$

with $B_\lambda \, d\lambda = B_\nu \, d\nu$. Their peaks differ: Wien's law gives $\lambda_{\max} T = 2.898 \times 10^{-3}$ m K for $B_\lambda$, while $B_\nu$ peaks at $\nu_{\max} = 5.879 \times 10^{10}\,{\rm Hz\,K^{-1}}\times T$, a wavelength 1.76 times longer. Integrating, $\int_0^\infty B_\nu \, d\nu = \sigma T^4/\pi$ with $\sigma = 5.670 \times 10^{-8}$ W m$^{-2}$ K$^{-4}$; the energy density is $u = aT^4$ with $a = 4\sigma/c = 7.566 \times 10^{-16}$ J m$^{-3}$ K$^{-4}$, and the photon number density is $n_\gamma = 2.03 \times 10^7\, T^3$ m$^{-3}$.

In the **Rayleigh–Jeans** limit $h\nu \ll kT$,

$$B_\nu(T) \approx \frac{2\nu^2 kT}{c^2},$$

linear in $T$, the regime of radio astronomy. In the **Wien** limit $h\nu \gg kT$,

$$B_\nu(T) \approx \frac{2h\nu^3}{c^2}\, e^{-h\nu/kT},$$

so stellar ultraviolet flux is a sharp thermometer. The boundary $h\nu = kT$ lies at $\lambda = hc/kT = 1.44\,{\rm cm\,K}/T$, or $2.5\,\mu$m for the solar photosphere.

The snippet below plots $B_\lambda$ for three temperatures on logarithmic axes; expect three humps of identical shape whose peaks lie on a line of slope $-5$.

```python
import numpy as np
import matplotlib.pyplot as plt

h, c, k = 6.626e-34, 2.998e8, 1.381e-23
lam = np.logspace(-7.5, -4.5, 400)          # 30 nm to 30 micron

def B_lambda(lam, T):
    return 2*h*c**2/lam**5 / (np.exp(h*c/(lam*k*T)) - 1)

for T in (3000, 5772, 10000):
    plt.loglog(lam*1e9, B_lambda(lam, T), label=f"T = {T} K")
plt.xlabel("wavelength (nm)"); plt.ylabel("B_lambda (SI)")
plt.ylim(1e8, 1e15); plt.legend(); plt.show()
```

### Kirchhoff's law and local thermodynamic equilibrium

In a cavity in strict thermodynamic equilibrium $I_\nu = B_\nu(T)$ everywhere and cannot change along any path, so the transfer equation requires $j_\nu = \alpha_\nu B_\nu(T)$, that is

$$S_\nu = B_\nu(T).$$

This is **Kirchhoff's law**: good absorbers are good emitters, with the ratio fixed by the Planck function. A hot thin gas, with large $\alpha_\nu$ only at line frequencies, shows emission lines; in front of a hotter continuum it produces absorption lines at the same frequencies. An optically thick body radiates $B_\nu(T)$ at every frequency, which is why the solar continuum is nearly Planckian.

Real atmospheres carry a net outward flux and have temperature gradients. **Local thermodynamic equilibrium (LTE)** assumes collisions give the matter at each point Maxwellian velocities and Boltzmann–Saha populations at the local temperature, so that $S_\nu = B_\nu(T(\tau))$ even though $I_\nu \neq B_\nu$. LTE holds in dense photospheres but fails in chromospheres, coronae and the interstellar medium.

### Brightness temperature

Because $B_\nu(T)$ increases monotonically with $T$, any measured intensity defines a **brightness temperature** $T_b$ through $I_\nu = B_\nu(T_b)$. In the Rayleigh–Jeans regime

$$T_b = \frac{c^2 I_\nu}{2k\nu^2},$$

and the transfer equation becomes linear in temperature. For an LTE cloud of kinetic temperature $T$ in front of a background of brightness temperature $T_{\rm bg}$,

$$T_b = T_{\rm bg}\, e^{-\tau_\nu} + T\left(1 - e^{-\tau_\nu}\right).$$

The cloud appears in emission if $T > T_{\rm bg}$ and in absorption if $T < T_{\rm bg}$. Radio astronomers quote all intensities this way, even for non-thermal sources (compact synchrotron sources reach $T_b \sim 10^{10}$ K); $T_b$ equals the kinetic temperature only for an optically thick LTE source.

## Key Ideas

- **Specific intensity** is constant along rays in vacuum.
- **Moments**: an isotropic surface has $F_\nu = \pi I_\nu$, so $L = 4\pi R^2\sigma T_{\rm eff}^4$.
- **Transfer equation**: $dI_\nu/d\tau_\nu = -I_\nu + S_\nu$ with $d\tau_\nu = \alpha_\nu ds$ and $S_\nu = j_\nu/\alpha_\nu$.
- **Slab solution**: $I_\nu = I_\nu(0)e^{-\tau_\nu} + S_\nu(1 - e^{-\tau_\nu})$; thin media give $I \propto \tau$, thick media $I \to S$.
- **Planck limits**: Rayleigh–Jeans $2\nu^2 kT/c^2$ (radio) and Wien $\propto \nu^3 e^{-h\nu/kT}$ (ultraviolet).
- **Kirchhoff's law**: $j_\nu = \alpha_\nu B_\nu(T)$, applied locally in LTE.
- **Brightness temperature**: $I_\nu = B_\nu(T_b)$; in the radio $T_b = T_{\rm bg}e^{-\tau} + T(1-e^{-\tau})$.

## Worked Examples

### Example 1 — Effective temperature and peak wavelength of the Sun

The Sun has $L_\odot = 3.828 \times 10^{26}$ W and $R_\odot = 6.957 \times 10^8$ m. Find $T_{\rm eff}$ and the wavelength at which $B_\lambda$ peaks.

**Solution.** From $L = 4\pi R^2 \sigma T_{\rm eff}^4$,

$$T_{\rm eff}^4 = \frac{3.828 \times 10^{26}}{4\pi (6.957 \times 10^8)^2 (5.670 \times 10^{-8})} = \frac{3.828 \times 10^{26}}{3.449 \times 10^{11}} = 1.110 \times 10^{15}\ {\rm K^4},$$

so $T_{\rm eff} = 5772$ K. Wien's law gives $\lambda_{\max} = 2.898 \times 10^{-3}/5772 = 502$ nm, in the green. $B_\nu$ instead peaks at $\nu_{\max} = 5.879 \times 10^{10} \times 5772 = 3.39 \times 10^{14}$ Hz, i.e. 884 nm.

### Example 2 — A cold cloud against the microwave background

A molecular cloud with $T = 20$ K lies in front of the cosmic microwave background ($T_{\rm bg} = 2.73$ K). Find the brightness temperature for $\tau = 0.5$, $0.05$ and $5$.

**Solution.** Using $T_b = T_{\rm bg}e^{-\tau} + T(1 - e^{-\tau})$:

For $\tau = 0.5$: $e^{-0.5} = 0.6065$, so $T_b = 2.73 \times 0.6065 + 20 \times 0.3935 = 1.66 + 7.87 = 9.5$ K.

For $\tau = 0.05$: $e^{-0.05} = 0.9512$, so $T_b = 2.60 + 0.98 = 3.6$ K; the excess of 0.85 K matches the optically thin result $(T - T_{\rm bg})\tau = 0.86$ K.

For $\tau = 5$: $e^{-5} = 0.0067$, so $T_b = 0.02 + 19.87 = 19.9$ K, essentially the kinetic temperature; only here does $T_b$ measure $T$.

### Example 3 — Energy and photon density of the cosmic microwave background

The CMB is a blackbody at $T = 2.725$ K. Find its energy and photon number densities, and check the Rayleigh–Jeans approximation at 21 cm for a 100 K cloud.

**Solution.** $u = aT^4 = 7.566 \times 10^{-16} \times 55.14 = 4.17 \times 10^{-14}$ J m$^{-3}$, about 0.26 eV cm$^{-3}$. The photon density is $n_\gamma = 2.03 \times 10^7 \times 20.24 = 4.1 \times 10^8$ m$^{-3}$, with mean energy $u/n_\gamma = 1.0 \times 10^{-22}$ J $= 6.3 \times 10^{-4}$ eV.

At $\nu = 1420$ MHz and $T = 100$ K, $h\nu/kT = 9.41 \times 10^{-25}/1.381 \times 10^{-21} = 6.8 \times 10^{-4} \ll 1$. The Rayleigh–Jeans form is accurate to better than 0.1%.

## Common Misconceptions

- **"Flux from an isotropic surface is $2\pi I$ because the hemisphere subtends $2\pi$."** The $\cos\theta$ weighting gives $\int_0^{\pi/2}\cos\theta\sin\theta \, d\theta = 1/2$, so $F = \pi I$.
- **"The specific intensity of a star decreases with distance."** Intensity is constant along a ray; the flux falls because the star's solid angle shrinks as $1/d^2$.
- **"An optically thick cloud is bright because it contains a lot of material."** For $\tau \gg 1$ the intensity saturates at $S_\nu$.
- **"A blackbody spectrum peaks at a definite wavelength."** The peak depends on whether one plots per unit wavelength or per unit frequency; they differ by a factor of 1.76.
- **"Brightness temperature is the temperature of the gas."** It is the temperature of a blackbody of equal intensity.

## Connections

- The Planck function of introduction-to-quantum-mechanics-m1-l1 reappears as the LTE source function; the Boltzmann factor of thermal-physics-and-statistical-mechanics-m3-l1 is why $S_\nu = B_\nu$ when collisions dominate.
- Constancy of intensity along a ray is the radiometric form of Liouville's theorem, which also underlies the stellar dynamics of Lesson m3-l1 and étendue conservation in telescopes (waves-and-optics-m2-l3).
- The attenuation $e^{-\tau}$ is Beer's law, with the form of radioactive decay in nuclear-physics.
- Brightness temperature and the slab solution are the tools of the 21 cm observations in astrophysics-iv-m1-l1 and the slit spectrograph exercise of the astronomy-and-astrophysics-lab; Lesson m2-l2 applies them to HI columns.
- A 300 K planet emits most strongly near 10 μm, so Earth-observing satellites image in the thermal infrared using the same Planck limits.

## Quick Check

1. Show that the flux from a uniformly bright hemisphere is $\pi I$, and hence that $L = 4\pi R^2\sigma T_{\rm eff}^4$.
2. A slab with constant source function has $\tau_\nu = 2$ and no background. What fraction of the thick limit does its intensity reach?
3. At what wavelength does $h\nu = kT$ for a 300 K planetary surface? Is the Rayleigh–Jeans approximation valid at 1 mm for such a surface?
4. A radio cloud at 80 K with $\tau = 0.2$ is observed against the 2.73 K CMB. What brightness temperature is measured, and what would it be against a 200 K background source?
5. Use Kirchhoff's law to explain how one gas can give emission or absorption lines.

## Takeaway

- Specific intensity describes radiation fully; its moments give flux and pressure, with $F = \pi I$ for an isotropic emitter.
- The transfer equation $dI_\nu/d\tau_\nu = -I_\nu + S_\nu$ makes intensity relax to the source function over one optical depth.
- Thin emission scales with column; thick emission saturates at $S_\nu$. In LTE the source function is the Planck function, whose Rayleigh–Jeans and Wien limits define the radio and ultraviolet regimes.
- Brightness temperature equals the kinetic temperature only for optically thick LTE sources.
