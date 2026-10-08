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
lessonId: low-dimensional-materials-m3-l1
lessonName: Ballistic Transport and the Landauer Formula
lessonNumber: 7
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - low-dimensional-materials-m2-l3
  - solid-state-physics-m2-l3
  - introduction-to-quantum-mechanics-m2-l3
learningObjectives:
  - Distinguish diffusive, ballistic and phase-coherent transport by comparing the device length with the mean free path $\ell_e$ and the phase-coherence length $\ell_\varphi$.
  - Derive the Landauer formula $G = (2e^2/h)\sum_n T_n$ from the current carried by one-dimensional subbands.
  - Evaluate the conductance quantum $G_0 = 2e^2/h = 77.5\ \mu$S and the contact resistance $h/2e^2 = 12.9$ k$\Omega$ of a ballistic conductor.
  - Predict the quantised conductance plateaus of a quantum point contact and of carbon nanotubes, and show how Ohm's law re-emerges for $L \gg \ell_e$.
concepts:
  - Mean free path
  - Ballistic transport
  - Landauer formula
  - Conductance quantum
  - Contact resistance
  - Quantum point contact
tags:
  - physics
  - low-dimensional-materials
  - quantum-transport
  - landauer-formula
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Ballistic Transport and the Landauer Formula

## Overview

Ohm's law, $G = \sigma W/L$, predicts that the conductance of a wire grows without limit as it is shortened. Experiments on high-mobility semiconductor heterostructures in 1988 showed something quite different: the conductance of a short, narrow constriction rises in steps of $2e^2/h$ as it is widened, independent of its length and material. The explanation, due to Landauer, is that a conductor much shorter than the electron mean free path is not a resistor in the usual sense but a waveguide for electrons, and each transverse mode contributes a universal conductance. This lesson sets out the length scales that separate diffusive from ballistic transport, derives the Landauer formula, explains the origin of the contact resistance of a perfect conductor, and applies the result to quantum point contacts, carbon nanotubes and graphene.

## Learning Path

- **What you should already know**: the Drude conductivity and mobility (Solid State Physics, Lesson m2-l3); transmission through barriers (Introduction to Quantum Mechanics, Lesson m2-l3); the 1D density of states and the 2DEG relations $k_F = \sqrt{2\pi n_s}$, $\lambda_F = \sqrt{2\pi/n_s}$ (Lesson m1-l2); nanotube and graphene band structures (Lessons m2-l1 and m2-l2).
- **What this lesson adds**: diffusive, ballistic and coherent regimes; the Landauer formula; the conductance quantum and contact resistance; quantised conductance in point contacts and nanotubes.
- **What later lessons this will unlock**: tunnelling transport and Coulomb blockade, and edge-channel conduction in the quantum Hall effect (Lesson m3-l2); short-channel 2D transistors (Lesson m3-l3).

## Core Explanation

### Length scales and transport regimes

The **elastic mean free path** $\ell_e = v_F\tau$ is the distance an electron at the Fermi level travels between momentum-randomising collisions. Using $\mu = e\tau/m^*$ and $v_F = \hbar k_F/m^*$,

$$\ell_e = \frac{\hbar k_F\,\mu}{e},$$

a formula that also holds for graphene. The **phase-coherence length** $\ell_\varphi$ is the distance over which the electron keeps a definite phase, limited by inelastic electron–electron and electron–phonon scattering; it grows at low temperature. Comparing the device length $L$ with these lengths defines three regimes:

| Regime | Condition | Behaviour |
|---|---|---|
| Diffusive | $L \gg \ell_e$ | Ohm's law, $G = \sigma W/L$ |
| Ballistic | $L \ll \ell_e$ | conductance set by number of modes |
| Phase-coherent | $L \lesssim \ell_\varphi$ | interference effects |

A modulation-doped GaAs/AlGaAs 2DEG at 4 K has $\mu \sim 10^6$ cm$^2$ V$^{-1}$ s$^{-1}$ and $\ell_e$ of about 10 μm, so lithographically defined structures of 1 μm are ballistic. A copper wire at room temperature has $\ell_e \approx 40$ nm; silicon inversion layers a few tens of nanometres.

### Current carried by a one-dimensional subband

Consider a narrow conductor with one transverse subband, joining a left reservoir at electrochemical potential $\mu_L$ to a right reservoir at $\mu_R = \mu_L - eV$. Right-moving electrons come from the left reservoir and are occupied according to $f_L(E)$. The current carried by right-movers in states $k$ per unit length is

$$I_{\rightarrow} = 2e\int_0^\infty \frac{dk}{2\pi}\,v(k)\,f_L(E),$$

where 2 is the spin degeneracy and $dk/2\pi$ is the number of states per unit length. The group velocity is $v = \hbar^{-1}dE/dk$, so $v\,dk = dE/\hbar$ and

$$I_{\rightarrow} = \frac{2e}{h}\int f_L(E)\,dE.$$

The velocity has cancelled against the one-dimensional density of states (Lesson m1-l2): a fast subband has few states per unit energy, a slow one many, and the current per unit energy is the same, $2e/h$. Subtracting the left-moving current from the right reservoir and allowing a transmission probability $T(E)$ through the conductor,

$$I = \frac{2e}{h}\int T(E)\left[f_L(E) - f_R(E)\right]dE \;\approx\; \frac{2e}{h}\,T\,(\mu_L - \mu_R) = \frac{2e^2}{h}\,T\,V$$

at low temperature and small bias.

### The Landauer formula

With $M$ transverse modes, each with transmission $T_n$,

$$G = \frac{2e^2}{h}\sum_{n=1}^{M} T_n.$$

This is the **Landauer formula**. For a perfect ballistic conductor, $T_n = 1$ and $G = MG_0$ with the **conductance quantum**

$$G_0 = \frac{2e^2}{h} = \frac{2(1.602\,177 \times 10^{-19})^2}{6.626\,070 \times 10^{-34}} = 7.748 \times 10^{-5}\ \text{S} = 77.5\ \mu\text{S},$$

and $1/G_0 = 12.906$ k$\Omega$. A conductor with no scattering at all still has a finite resistance $h/(2e^2M)$. This **contact resistance** arises where the many modes of a wide reservoir funnel into the few modes of the conductor; the corresponding power $IV$ is dissipated as electrons thermalise in the reservoirs, not inside the ballistic region.

### Recovering Ohm's law

Suppose scatterers distributed along a conductor give total transmission $T = \ell_e/(L + \ell_e)$ per mode (the result of adding incoherent scatterers in series). Then

$$R = \frac{h}{2e^2M}\cdot\frac{1}{T} = \frac{h}{2e^2M} + \frac{h}{2e^2M}\frac{L}{\ell_e}.$$

The first term is the contact resistance; the second grows linearly with $L$, which is Ohm's law. For a 2D strip of width $W$, $M \approx k_FW/\pi$, so the second term gives a sheet conductivity $\sigma \sim (2e^2/h)(k_F\ell_e/\pi)$, which agrees with the Drude result $(e^2/h)k_F\ell_e$ up to a factor of order one from averaging over angles. Ballistic and diffusive transport are two limits of one formula.

### Quantum point contacts

A **quantum point contact (QPC)** is made by depositing two split metal gates on a GaAs/AlGaAs heterostructure (Lesson m2-l3). A negative gate voltage depletes the 2DEG beneath the gates, leaving a constriction whose width $W$ shrinks as the voltage is made more negative. Treating the constriction as a hard-wall channel, a transverse mode $n$ propagates if $n\pi/W < k_F$, so the number of open modes is

$$M = \left\lfloor \frac{k_FW}{\pi} \right\rfloor = \left\lfloor \frac{2W}{\lambda_F} \right\rfloor.$$

As $W$ decreases, modes close one by one and the conductance falls in steps of $G_0$, with flat plateaus at $G = MG_0$. This quantisation, accurate to about 1%, was observed by van Wees et al. and Wharam et al. in 1988. The plateaus need the subband spacing to exceed $k_BT$ and the constriction to widen smoothly (adiabatically) into the reservoirs; a smooth saddle-shaped potential gives each mode a transmission

$$T_n(E) = \frac{1}{1 + \exp[-2\pi(E - E_n)/\hbar\omega_x]},$$

which rounds the steps. The script below sums such transmissions for a GaAs QPC at $n_s = 4 \times 10^{11}$ cm$^{-2}$; expect a staircase rising by one $G_0$ every 19.8 nm (half a Fermi wavelength) of width.

```python
import numpy as np
import matplotlib.pyplot as plt

hbar, me, e = 1.0546e-34, 9.109e-31, 1.602e-19
m, ns = 0.067 * me, 4e15
kF = np.sqrt(2 * np.pi * ns); EF = (hbar * kF)**2 / (2 * m)
W = np.linspace(5e-9, 150e-9, 600)
dE = 0.15e-3 * e                                         # step-rounding energy
G = sum(1 / (1 + np.exp(-(EF - (hbar * n * np.pi / W)**2 / (2 * m)) / dE)) for n in range(1, 12))
plt.plot(W * 1e9, G); plt.xlabel('constriction width W (nm)'); plt.ylabel('G / (2e$^2$/h)')
plt.grid(True); plt.show()
```

### Nanotubes and graphene

In a metallic carbon nanotube two subbands cross the Fermi level, one from each valley, each spin-degenerate, so an ideal tube with perfect contacts has $G = 2G_0 = 4e^2/h = 155\ \mu$S, or $R = 6.45$ k$\Omega$, however long it is within $\ell_e$. Suppressed backscattering (Lesson m2-l1) gives metallic tubes mean free paths of order a micrometre at room temperature, and Pd-contacted devices approach this limit. In ballistic graphene each transverse mode carries $4e^2/h$ because of spin and valley degeneracy.

## Key Ideas

- **Mean free path**: $\ell_e = \hbar k_F\mu/e$; diffusive for $L \gg \ell_e$, ballistic for $L \ll \ell_e$, coherent for $L \lesssim \ell_\varphi$.
- **Velocity–DOS cancellation**: each 1D subband carries $2e/h$ of current per unit energy, independent of its dispersion.
- **Landauer formula**: $G = (2e^2/h)\sum_n T_n$.
- **Conductance quantum**: $G_0 = 2e^2/h = 77.5\ \mu$S; $1/G_0 = 12.9$ k$\Omega$.
- **Contact resistance**: even a perfect conductor has $R = h/(2e^2M)$, dissipated in the reservoirs.
- **Ohm's law recovered**: $R = (h/2e^2M)(1 + L/\ell_e)$.
- **QPC plateaus**: $G = MG_0$ with $M = \lfloor 2W/\lambda_F\rfloor$; metallic nanotubes give $4e^2/h$.

## Worked Examples

### Example 1 — Resistance of ballistic channels

Find the resistance of an ideal single-mode spin-degenerate channel, of a QPC on its third plateau, and of an ideal metallic nanotube.

**Solution.** A single mode gives $R = 1/G_0 = h/2e^2 = 12.906$ k$\Omega$. On the third plateau, $G = 3 \times 77.48 = 232.4\ \mu$S and $R = 4.30$ k$\Omega$. An ideal metallic nanotube has $G = 4e^2/h = 155.0\ \mu$S and $R = 6.45$ k$\Omega$. None depends on the channel length.

### Example 2 — Ballistic or diffusive?

Compute $\ell_e$ for (a) a GaAs 2DEG with $n_s = 4 \times 10^{11}$ cm$^{-2}$ and $\mu = 10^6$ cm$^2$ V$^{-1}$ s$^{-1}$, and (b) graphene on SiO$_2$ with $n = 10^{12}$ cm$^{-2}$ and $\mu = 10^4$ cm$^2$ V$^{-1}$ s$^{-1}$. Is a 1 μm channel ballistic?

**Solution.** (a) $k_F = \sqrt{2\pi n_s} = 1.59 \times 10^8$ m$^{-1}$ and $\mu = 100$ m$^2$ V$^{-1}$ s$^{-1}$, so

$$\ell_e = \frac{1.055 \times 10^{-34} \times 1.59 \times 10^8 \times 100}{1.602 \times 10^{-19}} = 1.0 \times 10^{-5}\ \text{m} = 10\ \mu\text{m}.$$

A 1 μm channel is ballistic. (b) For graphene $k_F = \sqrt{\pi n} = 1.77 \times 10^8$ m$^{-1}$ and $\mu = 1$ m$^2$ V$^{-1}$ s$^{-1}$, giving $\ell_e = 117$ nm. A 1 μm channel is diffusive, with $L/\ell_e \approx 9$; encapsulation in hBN, raising $\mu$ to $10^5$ cm$^2$ V$^{-1}$ s$^{-1}$, makes it nearly ballistic.

### Example 3 — Modes in a quantum point contact

The 2DEG of Example 2(a) is squeezed into a constriction 100 nm wide. How many modes are open, and what is $G$?

**Solution.** $\lambda_F = 2\pi/k_F = 39.6$ nm, so $2W/\lambda_F = 200/39.6 = 5.05$ and $M = 5$. Then $G = 5G_0 = 387\ \mu$S, $R = 2.58$ k$\Omega$. As a check, the hard-wall levels are $E_n = n^2(0.376/0.067)/W^2 = 0.561n^2$ meV with $W$ in units of 100 nm: $E_5 = 14.0$ meV lies just below $E_F = 14.4$ meV and $E_6 = 20.2$ meV above it. The spacing $E_6 - E_5 = 6.2$ meV corresponds to 72 K, so the plateaus are sharp at 4 K.

## Common Misconceptions

- **"A perfect conductor has zero resistance."** A ballistic conductor has $h/(2e^2M)$, set by the number of modes; zero resistance requires superconductivity.
- **"The contact resistance comes from bad contacts."** It is intrinsic, arising from mode mismatch between reservoir and channel, and is present even with ideal interfaces.
- **"Conductance quantisation depends on the material."** The step height $2e^2/h$ contains only fundamental constants; the material sets the step positions through $\lambda_F$.
- **"Ballistic means no energy is dissipated."** Energy $IV$ is dissipated in the reservoirs where electrons relax.
- **"Ohm's law fails for all nanoscale wires."** It holds whenever $L \gg \ell_e$; nanometre copper interconnects remain diffusive.

## Connections

- The Drude conductivity and mobility of Solid State Physics (Lesson m2-l3) are the diffusive limit of the Landauer formula.
- Mode counting in a constriction is waveguide physics, as in Waves and Optics (Lesson m1-l3); an optical fibre's mode number is $\sim 2W/\lambda$ too.
- The transmission $T(E)$ is the barrier transmission coefficient of Introduction to Quantum Mechanics (Lesson m2-l3).
- Hall bars and FET channels measured in the Low-Dimensional Materials Lab (Lesson m1-l3) are usually diffusive; the mobility extracted there gives $\ell_e$ directly.
- Ballistic transport limits ultimate transistor scaling and underlies quantum point contacts used as charge detectors for spin qubits.

## Quick Check

1. Show that the current per unit energy carried by a 1D subband is independent of its dispersion.
2. Evaluate $2e^2/h$ in microsiemens and $h/2e^2$ in kilo-ohms.
3. Where is the energy dissipated in a ballistic conductor carrying current?
4. A QPC in a 2DEG with $\lambda_F = 50$ nm has width 140 nm. Predict $G$.
5. Explain how $R = (h/2e^2M)(1 + L/\ell_e)$ contains both the ballistic and Ohmic limits.

## Takeaway

- Transport is ballistic when the device is shorter than the mean free path $\ell_e = \hbar k_F\mu/e$.
- Each transverse mode carries conductance $2e^2/h = 77.5\ \mu$S because velocity cancels the 1D density of states.
- The Landauer formula $G = (2e^2/h)\sum T_n$ unifies ballistic and diffusive conduction.
- Ballistic conductors have an intrinsic contact resistance $h/(2e^2M)$, dissipated in the reservoirs.
- Quantum point contacts show conductance plateaus at integer multiples of $2e^2/h$; metallic nanotubes reach $4e^2/h$.
