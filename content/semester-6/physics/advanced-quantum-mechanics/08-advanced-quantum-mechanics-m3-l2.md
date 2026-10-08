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
lessonId: advanced-quantum-mechanics-m3-l2
lessonName: WKB Approximation, Time-Dependent Perturbation Theory and Fermi's Golden Rule
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - advanced-quantum-mechanics-m3-l1
  - introduction-to-quantum-mechanics-m2-l3
  - atomic-and-molecular-physics-m1-l3
learningObjectives:
  - Derive the WKB wavefunction, state its validity condition, and apply the quantisation rule $\int p\,dx = (n + \tfrac12)\pi\hbar$ and the tunnelling factor $e^{-2\gamma}$.
  - Estimate alpha-decay lifetimes with the Gamow model and explain the Geiger–Nuttall law.
  - Derive the first-order transition amplitude from the interaction picture and obtain Fermi's golden rule $\Gamma = (2\pi/\hbar)|V_{fi}|^2\rho(E_f)$.
  - Derive the electric-dipole selection rules $\Delta l = \pm1$, $\Delta m = 0, \pm1$, $\Delta S = 0$ and compute the $2p\to1s$ lifetime of hydrogen.
concepts:
  - WKB approximation
  - Bohr–Sommerfeld quantisation
  - Gamow factor
  - First-order transition amplitude
  - Fermi's golden rule
  - Electric-dipole selection rules
  - Spontaneous emission rate
tags:
  - physics
  - advanced-quantum-mechanics
  - time-dependent-perturbation-theory
  - wkb-approximation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# WKB Approximation, Time-Dependent Perturbation Theory and Fermi's Golden Rule

## Overview

This lesson develops the two approximation methods that turn quantum mechanics into rates. The WKB (Wentzel–Kramers–Brillouin) method treats potentials that vary slowly on the scale of the de Broglie wavelength. It recovers the old Bohr–Sommerfeld quantisation rule with the correct half-integer offset, and it gives the exponential tunnelling factor that Gamow used in 1928 to explain why alpha-decay lifetimes span more than twenty orders of magnitude. Time-dependent perturbation theory, built on the interaction picture of Lesson m1-l2, gives the probability that a perturbation drives a transition between stationary states. For transitions into a continuum it yields a constant rate, Fermi's golden rule, the most widely used formula in quantum physics. Applied to atoms interacting with light, it produces the electric-dipole selection rules seen in atomic spectra and the radiative lifetimes of excited states.

## Learning Path

- **What you should already know**: barrier tunnelling with rectangular barriers (introduction-to-quantum-mechanics Lesson m2-l3); the interaction picture and Dyson series (Lesson m1-l2); oscillator and angular-momentum matrix elements (Lessons m1-l3 and m2-l2); spectral series and selection rules as empirical facts (atomic-and-molecular-physics Lesson m1-l3).
- **What this lesson adds**: the WKB wavefunction and quantisation rule, the Gamow theory of alpha decay, the first-order transition amplitude, the golden rule, and the derivation of the dipole selection rules and spontaneous emission rate.
- **What later lessons this will unlock**: the Born approximation, which is the golden rule applied to scattering into a continuum of plane waves, and the phase-shift analysis of scattering (Lesson m3-l3).

## Core Explanation

### The WKB wavefunction

For $E > V(x)$ define the local momentum $p(x) = \sqrt{2m[E - V(x)]}$. If $V$ were constant the solution would be $e^{\pm ipx/\hbar}$. Writing $\psi = A(x)e^{iS(x)/\hbar}$ and expanding in powers of $\hbar$, the leading order gives $S' = \pm p$ and the next order gives $(A^2S')' = 0$, so $A \propto p^{-1/2}$:

$$\psi(x) \approx \frac{C_\pm}{\sqrt{p(x)}}\exp\left(\pm\frac i\hbar\int^xp(x')\,dx'\right).$$

The amplitude factor means $|\psi|^2 \propto 1/p \propto 1/v$: the particle is most likely found where it moves slowly, as classically. In a forbidden region ($E < V$), $p \to i|p|$ and the solutions grow or decay as $|p|^{-1/2}\exp(\pm\int|p|\,dx/\hbar)$. The approximation is valid when the wavelength changes little over one wavelength, $|d\lambda/dx| \ll 1$, equivalently $\hbar|p'|/p^2 \ll 1$. It fails near **turning points**, where $p = 0$. There one solves the Schrödinger equation exactly in a linearised potential (Airy functions) and matches; the result, the connection formulas, is that each smooth turning point contributes a phase of $\pi/4$.

### Bound states and quantisation

For a particle trapped between turning points $x_1$ and $x_2$, demanding that the WKB solutions from both sides agree gives

$$\int_{x_1}^{x_2}p(x)\,dx = \left(n + \tfrac12\right)\pi\hbar, \qquad n = 0, 1, 2, \ldots,$$

the Bohr–Sommerfeld rule $\oint p\,dx = (n + \tfrac12)h$ with the half-integer supplied by the two turning-point phases. For the oscillator the integral is half the area of the phase-space ellipse, $\pi E/\omega$, giving $E_n = (n + \tfrac12)\hbar\omega$ exactly. With an infinite wall the phase at that wall is $\pi/2$ instead and the offset changes; for two walls $\int p\,dx = n\pi\hbar$ reproduces the infinite well.

### Tunnelling and alpha decay

For a barrier between turning points $a$ and $b$, matching the decaying solution across it gives the transmission probability

$$T \approx e^{-2\gamma}, \qquad \gamma = \frac1\hbar\int_a^b\sqrt{2m[V(x) - E]}\,dx,$$

which reduces to the rectangular-barrier result $e^{-2\kappa L}$ for a thick barrier. Gamow modelled an alpha particle of energy $E$ as bouncing inside the nucleus of radius $R$ and tunnelling through the Coulomb barrier $V = 2Z_de^2/4\pi\varepsilon_0r$ of the daughter nucleus (charge $Z_d$). The outer turning point is $r_c = 2Z_de^2/(4\pi\varepsilon_0E)$, and the integral is elementary:

$$\gamma = kr_c\left[\arccos\sqrt{\frac R{r_c}} - \sqrt{\frac R{r_c}\left(1 - \frac R{r_c}\right)}\right], \qquad k = \frac{\sqrt{2mE}}\hbar.$$

For $R \ll r_c$, $2\gamma \approx \pi kr_c \propto Z_d/\sqrt E$. The alpha strikes the barrier at a rate $v/2R$, so the lifetime is $\tau = (2R/v)e^{2\gamma}$, and $\ln\tau$ is linear in $Z_d/\sqrt E$: the empirical **Geiger–Nuttall law**. Because $E$ sits in an exponent, a factor of two in energy changes $\tau$ by more than twenty orders of magnitude (Example 1).

### First-order transition amplitudes

Let $\hat H = \hat H_0 + \hat V(t)$, and expand the interaction-picture state as $|\psi_I(t)\rangle = \sum_nc_n(t)|n\rangle$. The equation $i\hbar\,\partial_t|\psi_I\rangle = \hat V_I|\psi_I\rangle$ of Lesson m1-l2 becomes $i\hbar\dot c_f = \sum_nV_{fn}(t)e^{i\omega_{fn}t}c_n$, exact so far. Starting in $|i\rangle$ and keeping the first term of the Dyson series ($c_n \approx \delta_{ni}$ on the right),

$$c_f(t) \approx -\frac i\hbar\int_0^tV_{fi}(t')\,e^{i\omega_{fi}t'}\,dt', \qquad P_{i\to f}(t) = |c_f(t)|^2, \qquad \omega_{fi} = \frac{E_f - E_i}\hbar.$$

The amplitude is the Fourier component of the perturbation at the Bohr frequency, and the result is valid while $P_{i\to f} \ll 1$. A perturbation slow compared with $1/\omega_{fi}$ has a negligible Fourier component and causes no transitions (the adiabatic limit); a sudden one has all frequencies.

### Harmonic perturbations and the golden rule

For $\hat V(t) = \hat Ve^{-i\omega t} + \hat V^\dagger e^{i\omega t}$ switched on at $t = 0$, the first term gives

$$P_{i\to f}(t) = \frac{|V_{fi}|^2}{\hbar^2}\,\frac{\sin^2(\Delta t/2)}{(\Delta/2)^2}, \qquad \Delta = \omega_{fi} - \omega,$$

and the second gives the same with $\omega\to-\omega$. The first describes **absorption** ($E_f = E_i + \hbar\omega$), the second **stimulated emission** ($E_f = E_i - \hbar\omega$), with equal rates because $|V^\dagger_{if}| = |V_{fi}|$. The function of $\Delta$ has a peak of height $t^2$ and width about $2\pi/t$, and its integral over $\Delta$ is $2\pi t$. For large $t$ it therefore behaves as $2\pi t\,\delta(\Delta)$, and $P = (2\pi/\hbar)|V_{fi}|^2\,t\,\delta(E_f - E_i - \hbar\omega)$ grows linearly in time. When the final states form a continuum with density $\rho(E_f)$ per unit energy, integrating over them gives a constant transition rate:

$$\Gamma_{i\to f} = \frac{2\pi}\hbar|V_{fi}|^2\,\rho(E_f)\Big|_{E_f = E_i + \hbar\omega}.$$

This is **Fermi's golden rule**. Setting $\omega = 0$ covers a constant perturbation (elastic transitions, $E_f = E_i$), which is how the Born approximation will be derived in Lesson m3-l3.

### Electric-dipole selection rules

For an atom in a light wave of wavelength much larger than the atom, the electron feels $\hat V(t) = e\boldsymbol{\mathcal E}_0\cdot\hat{\mathbf r}\cos\omega t$, so transition rates are proportional to $|\langle f|\hat{\mathbf r}|i\rangle|^2$. Three symmetry arguments fix when this vanishes:

- **Parity**: $\hat{\mathbf r}$ is odd and $|nlm\rangle$ has parity $(-1)^l$, so $l_f - l_i$ must be odd.
- **Angular momentum**: the components of $\hat{\mathbf r}$ behave as an $l = 1$ object; $\hat z \propto rY_1^0$ and $\hat x \pm i\hat y \propto rY_1^{\pm1}$. Coupling $l_i\otimes1$ (Lesson m2-l2) allows $l_f = l_i, l_i\pm1$ and $m_f = m_i + q$, $q = 0, \pm1$. Combined with parity, $\Delta l = \pm1$ and $\Delta m = 0$ ($\pi$, light polarised along $z$) or $\pm1$ ($\sigma^\pm$).
- **Spin**: $\hat{\mathbf r}$ does not act on spin, so $\Delta S = 0$. In helium, singlet–triplet transitions are forbidden (Lesson m2-l3).

For the oscillator, $\hat x \propto \hat a + \hat a^\dagger$ gives $\Delta n = \pm1$ (Lesson m1-l3). "Forbidden" transitions occur through weaker magnetic-dipole or electric-quadrupole couplings, or by two-photon emission: hydrogen $2s$ cannot decay to $1s$ by one photon and lives 0.12 s instead of nanoseconds.

### Spontaneous emission

An excited atom decays even with no applied field because it couples to the vacuum modes of the electromagnetic field. Applying the golden rule with the photon density of states, or equivalently Einstein's $A$/$B$ argument, gives the spontaneous rate

$$A_{i\to f} = \frac{\omega_{if}^3\,e^2|\langle f|\hat{\mathbf r}|i\rangle|^2}{3\pi\varepsilon_0\hbar c^3}.$$

The $\omega^3$ factor explains why ultraviolet transitions decay in nanoseconds while radio transitions such as the 21 cm line take millions of years.

## Key Ideas

- **WKB wavefunction** $\psi \approx p^{-1/2}e^{\pm i\int p\,dx/\hbar}$ is valid where $|d\lambda/dx| \ll 1$; turning points need connection formulas.
- **Quantisation**: $\int p\,dx = (n + \tfrac12)\pi\hbar$ between smooth turning points; exact for the oscillator.
- **Tunnelling**: $T \approx e^{-2\gamma}$; alpha decay gives $\tau = (2R/v)e^{2\gamma}$ and the Geiger–Nuttall law.
- **First-order amplitude** $c_f = -(i/\hbar)\int V_{fi}e^{i\omega_{fi}t}dt$ is the Fourier transform of the perturbation at the Bohr frequency.
- **Golden rule**: $\Gamma = (2\pi/\hbar)|V_{fi}|^2\rho(E_f)$ for transitions into a continuum.
- **Dipole selection rules** $\Delta l = \pm1$, $\Delta m = 0, \pm1$, $\Delta S = 0$ follow from parity and angular-momentum coupling.

## Worked Examples

### Example 1 — Gamow estimate for $^{238}$U and $^{212}$Po

Estimate the alpha-decay lifetimes of $^{238}$U ($E = 4.27$ MeV, $Z_d = 90$, $A_d = 234$) and $^{212}$Po ($E = 8.95$ MeV, $Z_d = 82$, $A_d = 208$), taking $R = 1.2(A_d^{1/3} + 4^{1/3})$ fm, $m_\alpha c^2 = 3727$ MeV and $e^2/4\pi\varepsilon_0 = 1.44$ MeV fm.

**Solution.** For uranium, $R = 1.2(6.162 + 1.587) = 9.30$ fm and $r_c = 2\times90\times1.44/4.27 = 60.7$ fm, so $R/r_c = 0.153$. Next $k = \sqrt{2\times3727\times4.27}/197.3 = 0.904$ fm$^{-1}$, and

$$\gamma = 0.904\times60.7\times[\arccos(0.391) - \sqrt{0.153\times0.847}] = 54.9\times(1.169 - 0.360) = 44.4.$$

The speed is $v = c\sqrt{2E/m_\alpha c^2} = 0.0479c = 1.44\times10^7$ m s$^{-1}$, so $2R/v = 1.30\times10^{-21}$ s and $\tau = 1.30\times10^{-21}\times e^{88.7} \approx 4.5\times10^{17}$ s $= 1.4\times10^{10}$ yr. The same steps for polonium give $R = 9.01$ fm, $r_c = 26.4$ fm, $\gamma = 16.3$ and $\tau \approx 1.3\times10^{-7}$ s. The measured mean lives are $6.4\times10^9$ yr and $4.3\times10^{-7}$ s. A crude model reproduces a range of 24 orders of magnitude to within a factor of about three, a striking success of tunnelling theory (see nuclear-physics Lesson m2-l1).

### Example 2 — A charged oscillator kicked by a pulse

An electron bound harmonically with $\hbar\omega = 1.00$ eV, initially in $|0\rangle$, is exposed to the field pulse $\mathcal E(t) = \mathcal E_0e^{-t^2/\tau^2}$ with $\mathcal E_0 = 1.0\times10^8$ V m$^{-1}$ and $\tau = 1.0$ fs. Find the first-order probability of excitation.

**Solution.** The perturbation is $\hat V = e\mathcal E(t)\hat x$, and $\langle n|\hat x|0\rangle$ is non-zero only for $n = 1$, so only $|1\rangle$ is reached at first order. With $\langle1|\hat x|0\rangle = \sqrt{\hbar/2m\omega}$ and $\int_{-\infty}^\infty e^{-t^2/\tau^2}e^{i\omega t}dt = \sqrt\pi\,\tau e^{-\omega^2\tau^2/4}$,

$$P_{0\to1} = \frac{e^2\mathcal E_0^2\pi\tau^2}{2m\hbar\omega}\,e^{-\omega^2\tau^2/2}.$$

Here $\omega = 1.519\times10^{15}$ s$^{-1}$ and $\omega\tau = 1.52$. The prefactor is $(1.602\times10^{-11})^2\pi(10^{-15})^2/(2\times9.109\times10^{-31}\times1.602\times10^{-19}) = 2.76\times10^{-3}$, and $e^{-1.154} = 0.315$, so $P_{0\to1} = 8.7\times10^{-4}$. Small, so first order is justified. For a pulse ten times longer the exponential factor falls to $e^{-115}$: the adiabatic limit.

### Example 3 — Lifetime of hydrogen $2p$

Using $\langle100|\hat z|210\rangle = (128\sqrt2/243)a_0 = 0.745a_0$, compute the $2p\to1s$ spontaneous rate and lifetime.

**Solution.** The transition energy is 10.20 eV, so $\omega = 1.550\times10^{16}$ s$^{-1}$. For $m = 0$, $|\langle\hat{\mathbf r}\rangle|^2 = 0.5549a_0^2$ (the $m = \pm1$ states give the same rate). Then

$$A = \frac{(1.550\times10^{16})^3(1.602\times10^{-19})^2(0.5549)(5.292\times10^{-11})^2}{3\pi(8.854\times10^{-12})(1.055\times10^{-34})(2.998\times10^8)^3} = 6.27\times10^8\ \text{s}^{-1}.$$

The lifetime is $\tau = 1/A = 1.60$ ns, in agreement with experiment. The natural linewidth of Lyman-$\alpha$ is $\hbar/\tau = 4.1\times10^{-7}$ eV.

## Common Misconceptions

- **"WKB is a high-energy approximation."** It requires a slowly varying wavelength, not high energy; it is exact for the oscillator levels yet fails near every turning point.
- **"Tunnelling probability depends mainly on barrier height."** It depends exponentially on the action $\int\sqrt{2m(V - E)}\,dx$, so width and mass matter as much as height.
- **"The golden rule probability grows as $t^2$."** That is true only for a discrete final state at exact resonance; summing over a continuum makes the probability grow linearly, giving a constant rate.
- **"Forbidden transitions never happen."** They are forbidden only in the dipole approximation; they proceed through higher multipoles or two-photon processes, which is why the $2s$ level lives 0.12 s.
- **"Spontaneous emission needs no explanation in perturbation theory."** It requires the quantised field; the semiclassical field gives absorption and stimulated emission only.

## Connections

- Gamow tunnelling explains alpha decay and Geiger–Nuttall systematics in nuclear-physics Lesson m2-l1, and the same factor controls the pp chain in stellar cores (astrophysics-iii Lesson m2-l5).
- The golden rule underlies Einstein coefficients, spontaneous and stimulated emission and laser gain in atomic-and-molecular-physics Lessons m2-l1 and m2-l2.
- The resonance function $\sin^2(\Delta t/2)/(\Delta/2)^2$ is the single-slit diffraction pattern of waves-and-optics; transitions select frequencies as a slit selects angles.
- Driven two-level dynamics beyond first order, Rabi oscillations, are simulated in advanced-quantum-mechanics-lab Lesson m1-l4, and WKB transmission can be checked against exact barrier transmission in Lesson m1-l5.
- Selection rules govern the rotational and vibrational spectra of diatomics (atomic-and-molecular-physics Lesson m3-l2) and the scanning tunnelling microscope uses the exponential WKB factor.

## Quick Check

1. Use WKB to find the energy levels of $V = F|x|$ and state the dependence on $n$.
2. Show that $2\gamma \approx \pi kr_c$ for $R \ll r_c$ and that it is proportional to $Z_d/\sqrt E$.
3. A perturbation $\hat V$ is switched on suddenly and left on. Derive $P_{i\to f}(t)$ to first order.
4. Which of $3d\to2p$, $3d\to1s$, $3s\to2s$ and $3p\to1s$ are electric-dipole allowed?
5. Why does the $\omega^3$ factor make spontaneous emission negligible for microwave transitions?

## Takeaway

- The WKB approximation gives semiclassical quantisation and the exponential tunnelling factor.
- Gamow's theory explains alpha-decay lifetimes across 24 orders of magnitude.
- First-order time-dependent perturbation theory gives transition amplitudes as Fourier transforms of the perturbation.
- Fermi's golden rule gives constant rates into a continuum and underlies spectroscopy and scattering.
- Dipole selection rules follow from parity and angular-momentum coupling; Lesson m3-l3 applies the golden rule to scattering.
