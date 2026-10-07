***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: advanced-quantum-mechanics
courseName: Advanced Quantum Mechanics (Physics Option C)
moduleId: advanced-quantum-mechanics-module-3
moduleName: Approximation Methods and Scattering
lessonId: advanced-quantum-mechanics-m3-l3
lessonName: Scattering Theory, Born Approximation and Partial Waves
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - advanced-quantum-mechanics-m3-l2
  - introduction-to-quantum-mechanics-m2-l3
learningObjectives:
  - Define the differential and total cross sections and relate $d\sigma/d\Omega$ to the scattering amplitude $f(\theta)$.
  - Derive the first Born approximation from Fermi's golden rule and apply it to the Yukawa potential and, in the limit, to Rutherford scattering.
  - Expand the scattering amplitude in partial waves, define phase shifts and derive $\sigma = (4\pi/k^2)\sum_l(2l + 1)\sin^2\delta_l$ and the optical theorem.
  - Compute the phase shifts and cross section for hard-sphere scattering in the low- and high-energy limits.
concepts:
  - Differential cross section
  - Scattering amplitude
  - Born approximation
  - Yukawa potential
  - Rutherford cross section
  - Partial-wave phase shift
  - Optical theorem
tags:
  - physics
  - advanced-quantum-mechanics
  - scattering-theory
  - born-approximation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Scattering Theory, Born Approximation and Partial Waves

## Overview

Most of what is known about atoms, nuclei and elementary particles was learned by scattering: firing a beam at a target and counting what comes out at each angle. Rutherford discovered the nucleus this way, Hofstadter measured nuclear charge radii, and every modern collider is a scattering experiment. This lesson develops the quantum theory of elastic scattering from a fixed potential. The observable is the differential cross section, which equals the squared modulus of the scattering amplitude $f(\theta)$ appearing in the asymptotic wavefunction. Two complementary methods compute $f$. The Born approximation, obtained directly from Fermi's golden rule of Lesson m3-l2, makes $f$ proportional to the Fourier transform of the potential and works best at high energy. The partial-wave method decomposes the incident wave into angular-momentum components, each characterised by a single phase shift $\delta_l$, and works best at low energy where only a few $l$ contribute. Yukawa, Coulomb and hard-sphere potentials illustrate both.

## Learning Path

- **What you should already know**: one-dimensional transmission and reflection (introduction-to-quantum-mechanics Lesson m2-l3); Fermi's golden rule (Lesson m3-l2); spherical harmonics and $\hat L^2$ eigenvalues (Lesson m2-l1); exchange symmetry (Lesson m2-l3).
- **What this lesson adds**: cross sections and the scattering amplitude, the first Born approximation, Yukawa and Rutherford cross sections, partial waves, phase shifts, the optical theorem, hard-sphere scattering, and identical-particle scattering.
- **What later lessons this will unlock**: this lesson completes the course; it prepares the numerical scattering and resonance studies of advanced-quantum-mechanics-lab Lesson m1-l5 and nuclear-reaction and particle-physics cross sections in nuclear-physics.

## Core Explanation

### Cross sections and the scattering amplitude

A beam of flux $J_{\rm inc}$ (particles per unit area per unit time) strikes a target, and $dN/dt$ particles per unit time emerge into solid angle $d\Omega$ at angles $(\theta,\phi)$. The **differential cross section** is

$$\frac{d\sigma}{d\Omega} = \frac{1}{J_{\rm inc}}\frac{dN}{dt\,d\Omega}, \qquad \sigma = \int\frac{d\sigma}{d\Omega}\,d\Omega,$$

an effective target area, measured in barns (1 b $= 10^{-28}$ m$^2$). For a potential of finite range, the stationary scattering state with energy $E = \hbar^2k^2/2m$ has the asymptotic form

$$\psi(\mathbf r) \xrightarrow{r\to\infty} e^{ikz} + f(\theta,\phi)\,\frac{e^{ikr}}{r}.$$

The incident plane wave carries flux $\hbar k/m$; the outgoing spherical wave carries flux $|f|^2\hbar k/mr^2$ through area $r^2d\Omega$. Hence

$$\frac{d\sigma}{d\Omega} = |f(\theta,\phi)|^2.$$

### The first Born approximation from the golden rule

Treat $V(\mathbf r)$ as a constant perturbation causing transitions from the plane wave $|\mathbf k_i\rangle$ to $|\mathbf k_f\rangle$, both normalised in a box of volume $\mathcal V$, so $\langle\mathbf k_f|V|\mathbf k_i\rangle = \tilde V(\mathbf q)/\mathcal V$, where $\tilde V(\mathbf q) = \int e^{-i\mathbf q\cdot\mathbf r}V(\mathbf r)\,d^3r$ and $\mathbf q = \mathbf k_f - \mathbf k_i$ is the momentum transfer divided by $\hbar$. The density of final states in $d\Omega$ is $\rho = \mathcal Vmk\,d\Omega/(2\pi)^3\hbar^2$, and the incident flux is $\hbar k/m\mathcal V$. The golden rule rate divided by the flux gives

$$\frac{d\sigma}{d\Omega} = \left(\frac{m}{2\pi\hbar^2}\right)^2|\tilde V(\mathbf q)|^2, \qquad f_{\rm B}(\mathbf q) = -\frac{m}{2\pi\hbar^2}\int e^{-i\mathbf q\cdot\mathbf r}V(\mathbf r)\,d^3r,$$

with the box volume cancelling, as it must. The sign of $f$ follows from the integral (Lippmann–Schwinger) form of the Schrödinger equation, of which this is the first iterate. For elastic scattering $|\mathbf q| = 2k\sin(\theta/2)$, and for a central potential the angular integral can be done:

$$f_{\rm B}(\theta) = -\frac{2m}{\hbar^2q}\int_0^\infty rV(r)\sin(qr)\,dr.$$

The Born approximation is valid when the potential barely distorts the incident wave: roughly $|V_0|a/\hbar v \ll 1$ for a potential of strength $V_0$ and range $a$ at speed $v$. It therefore improves with energy.

### Yukawa and Coulomb potentials

For the **Yukawa potential** $V(r) = \beta e^{-\mu r}/r$, which describes nuclear forces mediated by a meson of mass $\hbar\mu/c$ and also screened Coulomb interactions, $\int_0^\infty e^{-\mu r}\sin(qr)\,dr = q/(\mu^2 + q^2)$, so

$$f_{\rm B}(\theta) = -\frac{2m\beta}{\hbar^2(\mu^2 + q^2)}, \qquad \frac{d\sigma}{d\Omega} = \frac{4m^2\beta^2}{\hbar^4\left[\mu^2 + 4k^2\sin^2(\theta/2)\right]^2}.$$

Integrating over angles with $d(q^2) = -2k^2\,d(\cos\theta)$ gives $\sigma = 16\pi m^2\beta^2/[\hbar^4\mu^2(\mu^2 + 4k^2)]$. Letting $\mu\to0$ with $\beta = Z_1Z_2e^2/4\pi\varepsilon_0$ gives the Coulomb result,

$$\frac{d\sigma}{d\Omega} = \left(\frac{Z_1Z_2e^2}{4\pi\varepsilon_0}\right)^2\frac{1}{16E^2\sin^4(\theta/2)},$$

the **Rutherford formula**, after using $\hbar^2k^2 = 2mE$. By a coincidence peculiar to $1/r$, the first Born approximation, the exact quantum result and classical mechanics all agree. The total Coulomb cross section is infinite because the long-range potential deflects particles at any impact parameter; screening ($\mu \neq 0$) makes it finite.

### Partial waves and phase shifts

For a central potential $\hat L^2$ and $\hat L_z$ commute with $\hat H$, so the problem separates into independent angular-momentum channels. The incident wave expands as $e^{ikz} = \sum_l(2l + 1)\,i^l j_l(kr)P_l(\cos\theta)$, where the spherical Bessel functions behave as $j_l(kr) \to \sin(kr - l\pi/2)/kr$. Outside the range of the potential, the radial solution in channel $l$ is a combination of $j_l$ and the spherical Neumann function $n_l \to -\cos(kr - l\pi/2)/kr$; its asymptotic form must be $\sin(kr - l\pi/2 + \delta_l)/kr$. The potential can only shift the phase of each partial wave by the **phase shift** $\delta_l$, because conservation of probability in each channel forbids changing its amplitude. Matching to the asymptotic form of the full wavefunction gives

$$f(\theta) = \frac1k\sum_{l=0}^\infty(2l + 1)\,e^{i\delta_l}\sin\delta_l\,P_l(\cos\theta), \qquad \sigma = \frac{4\pi}{k^2}\sum_{l=0}^\infty(2l + 1)\sin^2\delta_l,$$

the second following from the orthogonality of the Legendre polynomials. Since $P_l(1) = 1$, $\operatorname{Im}f(0) = (1/k)\sum(2l + 1)\sin^2\delta_l$, which gives the **optical theorem**

$$\sigma = \frac{4\pi}{k}\operatorname{Im}f(0).$$

The forward amplitude measures what is removed from the beam. Each channel contributes at most $4\pi(2l + 1)/k^2$, the unitarity limit, reached at a resonance where $\delta_l = \pi/2$. Semiclassically a particle with angular momentum $l\hbar$ passes at impact parameter $b \approx l/k$, so for a potential of range $a$ only $l \lesssim ka$ are appreciably shifted. At low energy ($ka \ll 1$) only s-waves scatter, and the scattering is isotropic.

### Hard-sphere scattering

For $V = \infty$ at $r < a$ and $0$ outside, the radial function $j_l(kr)\cos\delta_l - n_l(kr)\sin\delta_l$ must vanish at $r = a$:

$$\tan\delta_l = \frac{j_l(ka)}{n_l(ka)}.$$

For $l = 0$, $j_0 = \sin x/x$ and $n_0 = -\cos x/x$, so $\delta_0 = -ka$: the repulsive sphere pushes the wave out by exactly $a$. For $ka \ll 1$, $\tan\delta_l \approx -(ka)^{2l+1}/[(2l + 1)!!(2l - 1)!!]$ falls rapidly with $l$, and

$$\sigma \approx \frac{4\pi}{k^2}\sin^2(ka) \to 4\pi a^2,$$

four times the geometric cross section, because a long wave diffracts around the whole sphere. At high energy, $\sigma \to 2\pi a^2$: $\pi a^2$ from particles striking the sphere, plus an equal forward diffraction peak needed to cast the shadow. The script below sums the partial waves numerically.

```python
import numpy as np
from scipy.special import spherical_jn, spherical_yn
def sigma_hard_sphere(ka):                     # returns sigma / (pi a^2)
    l = np.arange(int(ka) + 15)
    delta = np.arctan(spherical_jn(l, ka)/spherical_yn(l, ka))
    return 4/ka**2*np.sum((2*l + 1)*np.sin(delta)**2)
for ka in (0.01, 1.0, 10.0, 100.0):
    print(ka, round(sigma_hard_sphere(ka), 3))  # 4.0 at low ka, about 3.4 at ka = 1, tending to 2
```

### Identical particles

When the projectile and target are identical, scattering through $\theta$ and through $\pi - \theta$ cannot be distinguished, and amplitudes rather than probabilities must be added (Lesson m2-l3). For spinless bosons $d\sigma/d\Omega = |f(\theta) + f(\pi - \theta)|^2$. For unpolarised spin-1/2 fermions the singlet (symmetric spatial) and triplet (antisymmetric spatial) channels add with weights $\tfrac14$ and $\tfrac34$: $d\sigma/d\Omega = \tfrac14|f(\theta) + f(\pi - \theta)|^2 + \tfrac34|f(\theta) - f(\pi - \theta)|^2$. Interference at $90°$ in electron–electron (Mott) and $\alpha$–$\alpha$ scattering is a direct test of exchange symmetry.

## Key Ideas

- **Cross section** $d\sigma/d\Omega = |f(\theta)|^2$, with $f$ the amplitude of the outgoing spherical wave.
- **Born approximation**: $f_{\rm B} = -(m/2\pi\hbar^2)\tilde V(\mathbf q)$, the Fourier transform of the potential at momentum transfer $\hbar q = 2\hbar k\sin(\theta/2)$; valid at high energy.
- **Yukawa to Rutherford**: $f_{\rm B} = -2m\beta/\hbar^2(\mu^2 + q^2)$; $\mu\to0$ gives the exact Rutherford formula.
- **Partial waves**: each $l$ contributes through one phase shift; $\sigma = (4\pi/k^2)\sum(2l + 1)\sin^2\delta_l$.
- **Optical theorem** $\sigma = (4\pi/k)\operatorname{Im}f(0)$ expresses probability conservation.
- **Hard sphere**: $\delta_0 = -ka$; $\sigma \to 4\pi a^2$ at low energy and $2\pi a^2$ at high energy.

## Worked Examples

### Example 1 — Rutherford scattering from gold

Alpha particles of kinetic energy 5.00 MeV scatter from gold ($Z = 79$). Find $d\sigma/d\Omega$ at $\theta = 90°$.

**Solution.** $Z_1Z_2e^2/4\pi\varepsilon_0 = 2\times79\times1.440$ MeV fm $= 227.5$ MeV fm. Then

$$\frac{d\sigma}{d\Omega} = \left(\frac{227.5}{4\times5.00}\right)^2\frac{1}{\sin^4 45°}\ \text{fm}^2 = \frac{(11.38)^2}{0.25}\ \text{fm}^2 = 518\ \text{fm}^2 = 5.18\ \text{b sr}^{-1}.$$

The distance of closest approach in a head-on collision is $227.5/5.00 = 45.5$ fm, well outside the gold nucleus ($\approx7$ fm), so the pure Coulomb formula holds; deviations at higher energy revealed the nuclear size.

### Example 2 — Electron scattering from a screened proton

A 100 eV electron scatters from the potential $V = -(e^2/4\pi\varepsilon_0)e^{-r/a_0}/r$, a crude model of a hydrogen atom. Find $f(0)$ and the total Born cross section.

**Solution.** Here $\beta = -e^2/4\pi\varepsilon_0$ and $\mu = 1/a_0$, so $2m\beta/\hbar^2 = -2/a_0$ and $f_{\rm B}(\theta) = 2a_0/(1 + q^2a_0^2)$. Forward, $f(0) = 2a_0$ and $d\sigma/d\Omega = 4a_0^2$. Since $\hbar^2k^2/2m = E$ and $\hbar^2/2ma_0^2 = 13.61$ eV, $ka_0 = \sqrt{100/13.61} = 2.711$. Then

$$\sigma = \frac{16\pi a_0^2}{1 + 4k^2a_0^2} = \frac{50.27a_0^2}{30.40} = 1.654a_0^2 = 4.63\times10^{-21}\ \text{m}^2.$$

The cross section is concentrated within $qa_0 \lesssim 1$, that is $\theta \lesssim 2\arcsin(1/2ka_0) = 21°$: fast particles scatter mainly forward.

### Example 3 — Low-energy neutron scattering from a hard sphere

Neutrons of energy 10.0 keV scatter from a hard sphere of radius $a = 5.0$ fm. Find $ka$, the s- and p-wave phase shifts and the cross section.

**Solution.** $\hbar kc = \sqrt{2\times939.6\times0.0100}$ MeV $= 4.335$ MeV, so $k = 4.335/197.3 = 0.02197$ fm$^{-1}$ and $ka = 0.110$. The s-wave phase shift is $\delta_0 = -0.110$ rad $= -6.3°$, and $\delta_1 \approx -(ka)^3/3 = -4.4\times10^{-4}$ rad. The p-wave contributes $3\sin^2\delta_1 = 5.9\times10^{-7}$, against $\sin^2\delta_0 = 0.0120$ for s-wave: negligible. Hence

$$\sigma = \frac{4\pi}{k^2}\sin^2(ka) = 4\pi a^2\left(\frac{\sin0.110}{0.110}\right)^2 = 314.2\times0.996\ \text{fm}^2 = 3.13\ \text{b}.$$

The scattering is isotropic and the cross section is four times the geometric area $\pi a^2 = 0.785$ b.

## Common Misconceptions

- **"The cross section is the geometric size of the target."** It is an effective area that depends on energy and interaction; a hard sphere has $4\pi a^2$ at low energy, and Coulomb scattering has an infinite total cross section.
- **"The Born approximation is exact for Rutherford scattering, so it is generally reliable."** The Coulomb agreement is a coincidence; for strong or low-energy potentials, Born can fail badly, and partial waves are needed.
- **"Phase shifts change the amplitude of each partial wave."** For elastic scattering they change only its phase; absorption would be needed to reduce the amplitude.
- **"At high energy a hard sphere has cross section $\pi a^2$."** It is $2\pi a^2$, including the forward diffraction peak required by the optical theorem.
- **"Identical-particle scattering just doubles the classical cross section."** Amplitudes interfere, giving spin-dependent structure at $90°$ that classical counting cannot produce.

## Connections

- Rutherford scattering and nuclear charge radii from electron scattering are the foundation of nuclear-physics Lesson m1-l1; the Yukawa range $1/\mu$ relates the nuclear force to pion exchange in nuclear-physics Lesson m3-l1.
- The Born amplitude as a Fourier transform is the quantum version of Fraunhofer diffraction in waves-and-optics and of the structure factor in X-ray diffraction (solid-state-physics Lesson m1-l3).
- Partial-wave expansions use the Legendre polynomials and spherical Bessel functions arising from separation of variables in differential-equations and electricity-and-magnetism.
- Scattering of radiation by electrons (Thomson, Compton) and of neutrinos sets opacities in stellar interiors (astrophysics-iii Lesson m2-l4).
- One-dimensional transmission, reflection and resonances are computed numerically in advanced-quantum-mechanics-lab Lesson m1-l5.

## Quick Check

1. Show that $d\sigma/d\Omega = |f|^2$ follows from comparing incident and scattered fluxes.
2. Compute the Born amplitude for a spherical square well of depth $V_0$ and radius $a$.
3. Verify the optical theorem for s-wave scattering from a hard sphere.
4. Why do only s-waves contribute when $ka \ll 1$?
5. For $\alpha$–$\alpha$ scattering (spin-zero bosons), how does the cross section at $90°$ compare with the classical sum of $\theta$ and $\pi - \theta$ contributions?

## Takeaway

- Scattering experiments measure $d\sigma/d\Omega = |f(\theta)|^2$.
- The Born approximation, the golden rule for scattering, makes $f$ the Fourier transform of the potential and reproduces Rutherford's formula.
- Partial waves reduce scattering by a central potential to phase shifts, with the optical theorem guaranteeing probability conservation.
- Hard-sphere scattering illustrates the low-energy s-wave limit and the high-energy diffraction limit.
- Identical-particle interference completes the link between scattering and exchange symmetry, closing the course.
