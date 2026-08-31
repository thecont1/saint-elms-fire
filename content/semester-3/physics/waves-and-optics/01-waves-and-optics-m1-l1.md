***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: waves-and-optics
courseName: Waves and Optics
moduleId: waves-and-optics-module-1
moduleName: Oscillations and Waves
lessonId: waves-and-optics-m1-l1
lessonName: Simple Harmonic Motion in Detail
lessonNumber: 1
moduleNumber: 1
semesterNumber: 3
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - differential-equations-m2-l2
learningObjectives:
  - State the defining equation of SHM and identify its solutions.
  - Use phasors to represent SHM and add oscillations.
  - Compute the energy of a SHM and its time-averaged value.
  - Recognise small-oscillation approximations of pendulum and other systems.
concepts:
  - Simple harmonic motion
  - Amplitude and phase
  - Phasor representation
  - Energy in SHM
  - Small-angle approximation
  - Angular frequency
tags:
  - physics
  - waves
  - oscillations
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - conceptual
  - short-answer
***

# Simple Harmonic Motion in Detail

## Overview
Simple harmonic motion (SHM) is the most important kind of oscillation in physics. Any system near a stable equilibrium, with a small displacement, executes SHM to first approximation. This lesson gives the full mathematical description: the ODE, its solutions in real and complex form, the phasor representation, the energy, and the small-angle limits of common systems like the pendulum.

## Learning Path
- What you should already know: the harmonic oscillator ODE, the constant-coefficient method, complex exponentials.
- What this lesson adds: a polished working vocabulary for SHM, including phasors, energy averaging, and small-oscillation limits.
- What it unlocks: damped and driven oscillations, coupled oscillators, and the wave equation (built from chains of coupled SHMs).

## Core Explanation
**The defining equation.** SHM is the motion of a system whose displacement $x$ from equilibrium satisfies

$$\ddot{x} + \omega^2 x = 0,$$

where $\omega$ is the angular frequency. The general solution is

$$x(t) = A \cos(\omega t + \phi),$$

or equivalently $x(t) = B \cos\omega t + C \sin\omega t$. $A$ is the amplitude (maximum displacement), $\phi$ the phase, and $T = 2\pi/\omega$ the period.

**Initial conditions.** With $x(0) = x_0$ and $\dot{x}(0) = v_0$, the constants are $A = \sqrt{x_0^2 + (v_0/\omega)^2}$ and $\phi = -\arctan(v_0/(\omega x_0))$ (with appropriate quadrant adjustment).

**Phasor representation.** A SHM can be represented as the real part of a complex exponential:

$$x(t) = \text{Re}[A e^{i(\omega t + \phi)}] = \text{Re}[\tilde{A} e^{i \omega t}],$$

where $\tilde{A} = A e^{i \phi}$ is the *complex amplitude* or *phasor*. In a phasor diagram, $\tilde{A}$ is a vector in the complex plane; it rotates with angular velocity $\omega$, and the projection onto the real axis gives $x(t)$. Phasors are extremely useful for adding oscillations: the resultant of two phasors is the phasor sum.

**Adding SHMs of the same frequency.** Two SHMs $x_1 = A_1 \cos(\omega t + \phi_1)$ and $x_2 = A_2 \cos(\omega t + \phi_2)$ add to a single SHM with the same frequency:

$$x_1 + x_2 = A \cos(\omega t + \phi),$$

where the phasor sum $\tilde{A} = A_1 e^{i\phi_1} + A_2 e^{i\phi_2}$ has magnitude $A = \sqrt{A_1^2 + A_2^2 + 2 A_1 A_2 \cos(\phi_2 - \phi_1)}$ and phase $\phi = \arctan((A_1 \sin\phi_1 + A_2 \sin\phi_2)/(A_1 \cos\phi_1 + A_2 \cos\phi_2))$.

**Adding SHMs of different frequencies.** The result is not a SHM (unless the frequencies are commensurate). The general form is more complex. Two SHMs of nearby frequencies produce *beats* (next module).

**Energy in SHM.** The kinetic energy is $K = \tfrac{1}{2} m \dot{x}^2 = \tfrac{1}{2} m \omega^2 A^2 \sin^2(\omega t + \phi)$. The potential energy is $U = \tfrac{1}{2} m \omega^2 x^2 = \tfrac{1}{2} m \omega^2 A^2 \cos^2(\omega t + \phi)$. The total energy $E = K + U = \tfrac{1}{2} m \omega^2 A^2$ is constant. The average kinetic and potential energies are each $E/4$ in time, but $E/2$ each if averaged differently — careful with which average you compute.

**Time average of $\sin^2$ and $\cos^2$.** $\langle \sin^2 \rangle = \langle \cos^2 \rangle = 1/2$ over a full period. So $\langle K \rangle = \langle U \rangle = E/2$. This is the equipartition result for one degree of freedom: each quadratic term in the energy contributes $k_B T / 2$ at temperature $T$.

**The simple pendulum.** A mass $m$ on a string of length $L$. The equation of motion is $\ddot{\theta} = -(g/L) \sin\theta$. For small angles, $\sin\theta \approx \theta$, giving $\ddot{\theta} + (g/L) \theta = 0$ — SHM with $\omega = \sqrt{g/L}$ and period $T = 2\pi\sqrt{L/g}$. For larger angles, the motion is still periodic but not sinusoidal; the period increases with amplitude.

**Small-oscillation approximation.** Any system with a stable equilibrium has, near the equilibrium, a quadratic potential $U \approx \tfrac{1}{2} k (x - x_0)^2$. The dynamics is SHM with $\omega = \sqrt{U''(x_0)/m}$ (or its multi-dimensional generalisation). The anharmonic corrections are the small corrections to SHM that become important at larger amplitudes.

**Generalised coordinates.** For a system with $n$ degrees of freedom, the small-oscillation analysis leads to a set of *normal modes* with frequencies $\omega_i$. Each normal mode is an independent SHM in a particular collective coordinate. The original coordinates are linear combinations of the normal-mode coordinates. (This is the basis of molecular vibrations and lattice dynamics in *Solid State Physics*.)

**Damped and driven SHM.** The real-world SHM is rarely ideal. Damping ($\ddot{x} + 2\gamma \dot{x} + \omega_0^2 x = 0$) and driving ($\ddot{x} + 2\gamma \dot{x} + \omega_0^2 x = F_0/m \cos\omega t$) modify the motion. These are covered in detail in *Differential Equations* Module 2 and applied to AC circuits in *Electricity and Magnetism*.

## Key Ideas
- SHM: $\ddot{x} + \omega^2 x = 0$, with $x(t) = A \cos(\omega t + \phi)$.
- Phasor: complex amplitude $\tilde{A} = A e^{i \phi}$; addition is vector addition.
- Energy: $E = \tfrac{1}{2} m \omega^2 A^2$, with $\langle K \rangle = \langle U \rangle = E/2$.
- Simple pendulum: $\omega = \sqrt{g/L}$ in the small-angle limit.
- Near a stable equilibrium, every system looks like SHM.

## Worked Examples
**Example 1 — Phasor sum.** $x_1 = 3 \cos(\omega t)$, $x_2 = 4 \cos(\omega t + \pi/2)$. Phasors: $3 e^{i 0} = 3$ and $4 e^{i \pi/2} = 4 i$. Sum: $3 + 4 i$, magnitude $5$, phase $\arctan(4/3) \approx 53°$. So $x_1 + x_2 = 5 \cos(\omega t + 53°)$.

**Example 2 — Energy in SHM.** A $0.5\text{ kg}$ mass oscillates with amplitude $0.1\text{ m}$ at $\omega = 5\text{ rad/s}$. Total energy: $E = \tfrac{1}{2} \times 0.5 \times 25 \times 0.01 = 0.0625\text{ J}$. Maximum speed: $v_\text{max} = \omega A = 0.5\text{ m/s}$. Average kinetic energy: $E/2 = 0.03125\text{ J}$.

**Example 3 — Pendulum on Earth and Moon.** A $1\text{ m}$ pendulum on Earth ($g = 9.8$): $T = 2\pi\sqrt{1/9.8} \approx 2.0\text{ s}$. On the Moon ($g = 1.6$): $T = 2\pi\sqrt{1/1.6} \approx 5.0\text{ s}$. The same pendulum ticks more slowly on the Moon — a fact about to be relevant to long-lunar-stay astronauts.

## Common Misconceptions
- **"A pendulum oscillates sinusoidally for all amplitudes."** Only in the small-angle limit. For larger amplitudes, the period lengthens and the motion is anharmonic.
- **"Phasors are real."** They are complex. The physical displacement is the real part.
- **"Energy is conserved only on average."** No — it is conserved instantaneously. The average is just a way to compute other averages.
- **"Any periodic motion is SHM."** No — only sinusoidal motion. Other periodic motions (square, triangle, sawtooth) have many frequency components (Fourier series).

## Connections
SHM is the basis of *Waves and Optics* (next lessons), built from chains of coupled SHMs. The small-oscillation approximation is the prototype of perturbative methods used in *Quantum Mechanics*. The phasor representation is the time-domain precursor of Fourier methods in *Waves and Optics* and the *Fourier transform*. The same SHM equation appears in AC circuit theory (inductance and capacitance), quantum mechanics (the infinite square well and harmonic oscillator), and molecular vibrations.

## Quick Check
1. State the SHM equation and its general solution.
2. Two SHMs of the same frequency and amplitude $\pi/2$ out of phase add to what?
3. The maximum speed of a SHM with $A = 0.05\text{ m}$ and $\omega = 10\text{ rad/s}$ is what?
4. State the time-averaged kinetic and potential energies of a SHM.
5. A simple pendulum has length $0.5\text{ m}$ on Earth. What is its period?

## Takeaway
- SHM: $\ddot{x} + \omega^2 x = 0$, solution $A \cos(\omega t + \phi)$.
- Phasor representation: complex amplitude $\tilde{A} = A e^{i\phi}$.
- Energy: $E = \tfrac{1}{2} m \omega^2 A^2$, equipartition $\langle K \rangle = \langle U \rangle = E/2$.
- Small-oscillation: $\omega = \sqrt{U''(x_0)/m}$ near a stable equilibrium.
- Phasors simplify addition of SHMs of the same frequency.
