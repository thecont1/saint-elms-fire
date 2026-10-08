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
lessonId: astronomy-and-astrophysics-m2-l1
lessonName: The Grey Atmosphere, Limb Darkening and Hydrostatic Structure
lessonNumber: 4
moduleNumber: 2
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - astronomy-and-astrophysics-m1-l3
  - astrophysics-iii-m2-l4
learningObjectives:
  - Take angular moments of the plane-parallel transfer equation and use radiative equilibrium to show that the flux is constant in a grey atmosphere.
  - Derive $T^4(\tau) = \frac{3}{4}T_{\rm eff}^4(\tau + \frac{2}{3})$ in the Eddington approximation and interpret the photosphere as the layer $\tau = 2/3$.
  - Apply the Eddington–Barbier relation to predict the limb-darkening law $I(\mu)/I(1) = (2 + 3\mu)/5$.
  - Compute the pressure scale height and photospheric pressure from hydrostatic equilibrium $dP/d\tau = g/\bar\kappa$.
concepts:
  - Plane-parallel atmosphere
  - Radiative equilibrium
  - Eddington approximation
  - Grey atmosphere temperature structure
  - Eddington–Barbier relation
  - Limb darkening
  - Pressure scale height
tags:
  - physics
  - astronomy-and-astrophysics
  - stellar-atmospheres
  - limb-darkening
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# The Grey Atmosphere, Limb Darkening and Hydrostatic Structure

## Overview

A stellar atmosphere is the thin layer from which photons escape, and its temperature and pressure structure decide the emergent spectrum. Module 1 supplied the tools: the transfer equation, LTE source functions and opacities. This lesson applies them to the simplest self-consistent model, the grey atmosphere, in which the opacity is independent of frequency. Taking angular moments of the transfer equation, imposing radiative equilibrium and closing the system with the Eddington approximation gives the temperature as a function of optical depth in closed form. Two observable predictions follow: the photosphere sits where $\tau = 2/3$, and the solar disc is darker at the limb by an amount the model gets almost exactly right. Hydrostatic equilibrium then fixes the pressure and the scale height, explaining why stars have sharp edges and how surface gravity is read from spectra.

## Learning Path

- **What you should already know**: the transfer equation and its formal solution (Lesson m1-l1); H$^-$ and mean opacities (Lesson m1-l2); pressure broadening (Lesson m1-l3); hydrostatic equilibrium in stellar interiors (astrophysics-iii-m2-l4).
- **What this lesson adds**: the plane-parallel transfer equation; the moments $J$, $H$, $K$; radiative equilibrium; the Eddington approximation and grey $T(\tau)$; the Eddington–Barbier relation; limb darkening; atmospheric scale height and pressure.
- **What later lessons this will unlock**: the scale height of the Galactic disc (Lesson m3-l1); the stellar flux $\pi\theta^2 B_\nu$ used in the blackbody fits of Lesson m3-l3.

## Core Explanation

### Plane-parallel geometry

The solar photosphere is a few hundred kilometres thick, while $R_\odot = 6.96\times10^5$ km; curvature is negligible and the atmosphere can be treated as a stack of horizontal layers. Measure optical depth vertically inward, $d\tau = -\bar\kappa\rho\,dz$, and let $\mu = \cos\theta$ for a ray at angle $\theta$ to the outward normal. The path along the ray is $dz/\mu$, so the transfer equation becomes

$$\mu\frac{dI_\nu}{d\tau_\nu} = I_\nu - S_\nu.$$

Integrating from deep layers outward, the intensity emerging at the surface is

$$I_\nu(0,\mu) = \int_0^\infty S_\nu(\tau)\, e^{-\tau/\mu}\,\frac{d\tau}{\mu}.$$

If the source function is linear, $S = a + b\tau$, then $\int_0^\infty (a + b\tau)e^{-\tau/\mu}\,d\tau/\mu = a + b\mu$ exactly. This is the **Eddington–Barbier relation**,

$$I_\nu(0,\mu) \approx S_\nu(\tau_\nu = \mu),$$

which says that looking along direction $\mu$ we see the source function at unit optical depth measured along the ray. The emergent flux $F = 2\pi\int_0^1 I\mu\,d\mu = \pi(a + 2b/3) = \pi S(\tau = 2/3)$.

### Moments and radiative equilibrium

Define the angular moments

$$J = \frac{1}{2}\int_{-1}^{1} I\,d\mu, \qquad H = \frac{1}{2}\int_{-1}^{1} I\mu\,d\mu, \qquad K = \frac{1}{2}\int_{-1}^{1} I\mu^2\,d\mu,$$

so that $J$ is the mean intensity, $F = 4\pi H$ and $P_{\rm rad} = 4\pi K/c$. Integrating the transfer equation over $\mu$, once as it stands and once after multiplying by $\mu$, gives

$$\frac{dH}{d\tau} = J - S, \qquad \frac{dK}{d\tau} = H.$$

An atmosphere generates no energy, so every layer must emit as much as it absorbs. This **radiative equilibrium** condition reads $\int\kappa_\nu(J_\nu - S_\nu)\,d\nu = 0$. In a **grey** atmosphere $\kappa_\nu = \bar\kappa$, so the integrated quantities satisfy $J = S$, and the first moment equation gives $dH/d\tau = 0$:

$$H = \frac{F}{4\pi} = \frac{\sigma T_{\rm eff}^4}{4\pi} = {\rm constant}.$$

The second equation then integrates to $K = H\tau + {\rm const}$. We have two equations and three unknowns; a closure relation between $K$ and $J$ is needed.

### The Eddington approximation

At depth the radiation field is nearly isotropic, and for isotropic $I$, $K = J/3$. **Eddington's approximation** assumes $K = J/3$ everywhere (it is also exact whenever $I$ is linear in $\mu$). Then

$$J(\tau) = 3H(\tau + q).$$

To fix $q$, suppose that at the surface the outward intensity is isotropic and the inward intensity zero. Then $J(0) = I/2$ and $H(0) = I/4$, so $J(0) = 2H$ and $q = 2/3$. With $J = S = B = \sigma T^4/\pi$ in LTE,

$$\frac{\sigma T^4}{\pi} = \frac{3\sigma T_{\rm eff}^4}{4\pi}\left(\tau + \frac{2}{3}\right) \quad\Longrightarrow\quad T^4(\tau) = \frac{3}{4}T_{\rm eff}^4\left(\tau + \frac{2}{3}\right).$$

The exact solution (Hopf) replaces $2/3$ by a function $q(\tau)$ rising from 0.577 at the surface to 0.710 at depth; the Eddington result is accurate to a few per cent. Two consequences stand out:

- $T = T_{\rm eff}$ exactly at $\tau = 2/3$. The **photosphere**, the layer whose temperature equals the effective temperature, lies at optical depth $2/3$, as the flux relation $F = \pi S(2/3)$ already suggested.
- The surface temperature is $T(0) = (1/2)^{1/4}T_{\rm eff} = 0.841\,T_{\rm eff}$, about 4,850 K for the Sun. The observed solar temperature minimum (about 4,400 K) is lower because real opacity is not grey, and above it the chromosphere is heated non-radiatively.

### Limb darkening

Because the grey source function $S = (3\sigma T_{\rm eff}^4/4\pi)(\tau + 2/3)$ is exactly linear in $\tau$, the Eddington–Barbier relation is exact for the frequency-integrated intensity:

$$\frac{I(0,\mu)}{I(0,1)} = \frac{\mu + 2/3}{1 + 2/3} = \frac{2 + 3\mu}{5} = 0.4 + 0.6\mu.$$

At the centre of the disc ($\mu = 1$) we see down to $\tau = 1$, where it is hot; at the limb ($\mu \to 0$) we see only the cooler surface layers, so the limb is 40% as bright as the centre. A point at projected radius $r$ on a disc of radius $R$ has $\mu = \sqrt{1 - (r/R)^2}$. Observations of the Sun near 500 nm fit the linear law $I(\mu)/I(1) = 1 - u(1-\mu)$ with $u \approx 0.6$, matching the grey prediction, and the darkening is stronger in the blue because the Planck function is more temperature-sensitive in the Wien regime. The snippet below applies Eddington–Barbier at each wavelength (approximately, since $B_\lambda$ is not linear in $\tau$); expect the 400 nm curve to fall most steeply towards $r/R = 1$ and the 1 μm curve least.

```python
import numpy as np
import matplotlib.pyplot as plt

h, c, k, Teff = 6.626e-34, 2.998e8, 1.381e-23, 5772.0
r = np.linspace(0, 0.999, 300)                 # r/R across the disc
mu = np.sqrt(1 - r**2)
T = Teff * (0.75*(mu + 2/3))**0.25             # T at tau = mu
T1 = Teff * (0.75*(1 + 2/3))**0.25             # T at tau = 1 (disc centre)
for lam in (400e-9, 600e-9, 1000e-9):
    ratio = np.expm1(h*c/(lam*k*T1)) / np.expm1(h*c/(lam*k*T))
    plt.plot(r, ratio, label=f"{lam*1e9:.0f} nm")
plt.plot(r, 0.4 + 0.6*mu, "k--", label="grey, bolometric")
plt.xlabel("r/R"); plt.ylabel("I(mu)/I(1)"); plt.legend(); plt.show()
```

Limb darkening shapes the light curves of transiting exoplanets and eclipsing binaries and must be corrected when stellar diameters are measured interferometrically.

### Hydrostatic equilibrium and the scale height

The atmosphere is supported by its pressure gradient, $dP/dz = -\rho g$. Dividing by $d\tau = -\bar\kappa\rho\,dz$,

$$\frac{dP}{d\tau} = \frac{g}{\bar\kappa},$$

so for roughly constant $\bar\kappa$ the pressure at the photosphere is $P(2/3) \approx \frac{2}{3}g/\bar\kappa$. For an isothermal ideal gas, $P = \rho kT/\mu_m m_H$ with mean molecular weight $\mu_m$, and $dP/dz = -\rho g$ integrates to $P \propto e^{-z/H}$ with the **pressure scale height**

$$H = \frac{kT}{\mu_m m_H g}.$$

For the Sun, $g = GM_\odot/R_\odot^2 = 274$ m s$^{-2}$, and the neutral photosphere has $\mu_m \approx 1.3$, giving $H \approx 134$ km and $H/R_\odot = 1.9\times10^{-4}$. The opacity rises steeply with depth (H$^-$ needs electrons, which need heat), so the transition from $\tau = 0.1$ to $\tau = 10$ occupies only a few scale heights, under 1 arcsecond at the Sun's distance: the solar limb looks sharp. Because $P \propto g$, lines in low-gravity giants suffer less pressure broadening (Lesson m1-l3), which is how spectroscopists measure $\log g$.

## Key Ideas

- **Plane-parallel transfer**: $\mu\,dI/d\tau = I - S$, valid because $H/R \sim 10^{-4}$.
- **Eddington–Barbier relation**: $I(0,\mu) \approx S(\tau = \mu)$, exact for linear $S$; flux is $\pi S(2/3)$.
- **Radiative equilibrium**: $\int\kappa_\nu(J_\nu - S_\nu)\,d\nu = 0$; grey opacity gives $J = S$ and constant $H$.
- **Eddington approximation**: $K = J/3$ with surface condition $J(0) = 2H$ gives $T^4 = \frac{3}{4}T_{\rm eff}^4(\tau + \frac{2}{3})$.
- **Photosphere**: $T = T_{\rm eff}$ at $\tau = 2/3$; surface temperature $0.841\,T_{\rm eff}$.
- **Limb darkening**: grey prediction $I(\mu)/I(1) = 0.4 + 0.6\mu$, stronger at short wavelengths.
- **Scale height**: $H = kT/\mu_m m_H g$; photospheric pressure $\approx \frac{2}{3}g/\bar\kappa$.

## Worked Examples

### Example 1 — Temperature structure of a grey Sun

Using $T_{\rm eff} = 5772$ K, find $T$ at $\tau = 0$, $2/3$, $1$ and $2$.

**Solution.** $T(\tau) = T_{\rm eff}\left[\frac{3}{4}(\tau + \frac{2}{3})\right]^{1/4}$.

| $\tau$ | $\frac{3}{4}(\tau + \frac{2}{3})$ | $T$ (K) |
|---|---|---|
| 0 | 0.500 | 4,854 |
| 2/3 | 1.000 | 5,772 |
| 1 | 1.250 | 6,103 |
| 2 | 2.000 | 6,864 |

The temperature rises by about 1,100 K between the surface and $\tau = 1$, and the disc-centre continuum forms near 6,100 K.

### Example 2 — Limb darkening on the solar disc

Find the grey-atmosphere intensity, relative to disc centre, at $r = 0.9R_\odot$, and the ratio of the disc-averaged intensity to the central intensity.

**Solution.** $\mu = \sqrt{1 - 0.81} = 0.436$, so $I/I(1) = 0.4 + 0.6\times0.436 = 0.662$. The flux is $F = 2\pi\int_0^1 I(1)(0.4 + 0.6\mu)\mu\,d\mu = 2\pi I(1)(0.2 + 0.2) = 0.8\pi I(1)$. A uniform disc of intensity $\bar I$ gives $F = \pi\bar I$, so $\bar I = 0.8\,I(1)$: the average is 20% below the central intensity.

### Example 3 — Photospheric pressure in a dwarf and a giant

Take $\bar\kappa = 0.026$ m$^2$ kg$^{-1}$ and $\mu_m = 1.3$. Find the scale height, pressure and density at $\tau = 2/3$ in the Sun, and the scale height of a 1.2 $M_\odot$ K giant with $T = 4000$ K and $\log g = 1.5$ (cgs).

**Solution.** Sun: $H = (1.381\times10^{-23}\times5772)/(1.3\times1.674\times10^{-27}\times274) = 1.34\times10^5$ m. $P = \frac{2}{3}\times274/0.026 = 7.0\times10^3$ Pa, about 0.07 atm, and $\rho = P\mu_m m_H/kT = 1.9\times10^{-4}$ kg m$^{-3}$. As a check, $\bar\kappa\rho H = 0.026\times1.9\times10^{-4}\times1.34\times10^5 = 0.67$, consistent with $\tau = 2/3$.

Giant: $g = 10^{1.5}$ cm s$^{-2}$ $= 0.316$ m s$^{-2}$, so $H = (1.381\times10^{-23}\times4000)/(1.3\times1.674\times10^{-27}\times0.316) = 8.0\times10^7$ m. Its radius is $\sqrt{GM/g} = 2.2\times10^{10}$ m $= 32\,R_\odot$, so $H/R = 3.6\times10^{-3}$: still thin, though less so. At equal opacity its photospheric pressure is $274/0.316 = 870$ times lower, so its lines show much weaker pressure wings.

## Common Misconceptions

- **"The photosphere is where $\tau = 1$."** In the Eddington grey atmosphere $T = T_{\rm eff}$ at $\tau = 2/3$, and the emergent flux equals $\pi S(2/3)$. At disc centre we see to $\tau \approx 1$.
- **"Limb darkening means the outer layers absorb light from the centre."** It is a geometric effect: oblique sightlines reach unit optical depth in higher, cooler layers.
- **"A grey atmosphere is unrealistic, so its predictions are useless."** H$^-$ makes the solar continuum nearly grey, and the model reproduces the solar limb darkening and $T(\tau)$ to a few per cent.
- **"Radiative equilibrium means $I_\nu = B_\nu$."** It means absorbed and emitted energy balance at each layer; the field remains anisotropic, with a net outward flux.

## Connections

- The moment equations reduce transfer to first-order linear ODEs (differential-equations-m1-l2) closed by the Eddington relation; full model atmospheres replace that closure by Gaussian quadrature in $\mu$ (numerical-methods-m2-l3).
- Hydrostatic equilibrium and the scale height extend the interior treatment of astrophysics-iii-m2-l4 to the photosphere; the same $H = kT/\mu_m m_H g$ gives the 8 km scale height of Earth's atmosphere.
- Limb darkening shapes transit light curves (astrophysics-ii-m3-l2) and enters the photometry projects of the astronomy-and-astrophysics-lab.
- The grey temperature law is used in planetary science for radiative atmospheres and in engineering for radiative heat transfer through furnaces and insulating layers.

## Quick Check

1. Show that $\int_0^\infty(a + b\tau)e^{-\tau/\mu}\,d\tau/\mu = a + b\mu$.
2. Why does radiative equilibrium imply $J = S$ only for grey opacity?
3. What is the grey-atmosphere temperature at $\tau = 4$ for a star with $T_{\rm eff} = 10{,}000$ K?
4. At what projected radius on the solar disc is the grey intensity half the central intensity?
5. A white dwarf has $T = 10^4$ K, $\log g = 8$ (cgs) and $\mu_m = 0.6$. Estimate its photospheric scale height.

## Takeaway

- The grey atmosphere with the Eddington approximation gives $T^4 = \frac{3}{4}T_{\rm eff}^4(\tau + \frac{2}{3})$ in closed form.
- The photosphere lies at $\tau = 2/3$, and the surface temperature is $0.841\,T_{\rm eff}$.
- The Eddington–Barbier relation explains limb darkening and predicts $I(\mu)/I(1) = 0.4 + 0.6\mu$.
- Hydrostatic equilibrium gives $dP/d\tau = g/\bar\kappa$ and scale heights $\sim10^{-4}R$, so stellar limbs are sharp and pressure-sensitive lines measure gravity.
