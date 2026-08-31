***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: differential-equations
courseName: Differential Equations
moduleId: differential-equations-module-2
moduleName: Second-Order ODEs
lessonId: differential-equations-m2-l2
lessonName: The Harmonic Oscillator
lessonNumber: 5
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - differential-equations-m2-l1
  - mechanics-m3-l3
learningObjectives:
  - Derive the equation of motion for a mass-spring system.
  - Solve the undamped, damped, and forced harmonic oscillator.
  - Identify the natural frequency, decay rate, and resonance condition.
  - Compute the period, amplitude, and phase of the motion.
concepts:
  - Simple harmonic motion
  - Damped harmonic oscillator
  - Quality factor (Q)
  - Energy in an oscillator
  - Natural frequency
  - Decay envelope
tags:
  - mathematics
  - differential-equations
  - oscillator
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# The Harmonic Oscillator

## Overview
The harmonic oscillator is the single most important ODE in physics. It models a mass on a spring, an LC circuit, a pendulum (for small angles), molecular vibrations, and — in the quantum version — the energy levels of a wide range of systems. This lesson treats the undamped, damped, and forced cases using the constant-coefficient methods of the previous lesson, and ties the mathematics to the energy language introduced in *Mechanics*.

## Learning Path
- What you should already know: Newton's second law, Hooke's law, the characteristic equation, complex exponentials.
- What this lesson adds: a complete mathematical picture of the harmonic oscillator and its physical parameters.
- What it unlocks: forced oscillations and resonance, the wave equation (built from coupled oscillators), and the quantum harmonic oscillator.

## Core Explanation
**The undamped oscillator.** A mass $m$ attached to a spring of constant $k$ on a frictionless surface. Newton's second law: $m \ddot{x} = -k x$. The equation of motion is

$$\ddot{x} + \omega_0^2 x = 0, \quad \omega_0 = \sqrt{k/m}.$$

The solution is $x(t) = A \cos(\omega_0 t + \phi)$, where $A$ is the amplitude and $\phi$ the phase. The angular frequency $\omega_0$ is the *natural frequency*. The period is $T = 2\pi/\omega_0$.

The energy $E = \tfrac{1}{2} k A^2$ is constant: the oscillator exchanges kinetic energy $\tfrac{1}{2} m \dot{x}^2$ and potential energy $\tfrac{1}{2} k x^2$ but the sum is conserved.

**Damping.** Add a damping force $-b \dot{x}$ (viscous damping, proportional to velocity). The equation becomes

$$\ddot{x} + 2 \gamma \dot{x} + \omega_0^2 x = 0, \quad \gamma = b/(2 m).$$

The solution depends on the discriminant $\gamma^2 - \omega_0^2$:
- *Underdamped* ($\gamma < \omega_0$): $x(t) = A e^{-\gamma t} \cos(\omega_d t + \phi)$, where $\omega_d = \sqrt{\omega_0^2 - \gamma^2}$.
- *Critically damped* ($\gamma = \omega_0$): $x(t) = (A + B t) e^{-\omega_0 t}$. Fastest non-oscillatory decay.
- *Overdamped* ($\gamma > \omega_0$): $x(t) = A e^{(-\gamma + \sqrt{\gamma^2 - \omega_0^2}) t} + B e^{(-\gamma - \sqrt{\gamma^2 - \omega_0^2}) t}$. Slow non-oscillatory decay.

**Quality factor.** A measure of how "sharp" an oscillator is. Defined as $Q = \omega_0/(2 \gamma)$ (for lightly damped systems). $Q$ is the number of radians of oscillation for the amplitude to decay by a factor of $e^{2\pi} \approx 535$. A tuning fork has $Q \approx 1000$; a quartz crystal $10^4$–$10^6$; an atom $10^7$–$10^9$.

**Energy decay.** For a damped oscillator, $E(t) = E_0 e^{-2 \gamma t} = E_0 e^{-t/\tau_e}$, where $\tau_e = 1/(2 \gamma)$. The energy decays twice as fast as the amplitude because $E \propto A^2$.

**Forced oscillator.** Add a driving force $F_0 \cos \omega t$:

$$\ddot{x} + 2 \gamma \dot{x} + \omega_0^2 x = (F_0/m) \cos \omega t.$$

The general solution is the sum of the homogeneous solution (transient) and a particular solution (steady state). For a sinusoidally driven damped oscillator, the steady-state solution is

$$x(t) = A(\omega) \cos(\omega t - \delta),$$

with amplitude

$$A(\omega) = \frac{F_0/m}{\sqrt{(\omega_0^2 - \omega^2)^2 + (2 \gamma \omega)^2}}$$

and phase lag $\delta$ given by $\tan \delta = 2 \gamma \omega / (\omega_0^2 - \omega^2)$.

**Resonance.** The amplitude $A(\omega)$ is maximised at the *resonance frequency*

$$\omega_r = \sqrt{\omega_0^2 - 2 \gamma^2}.$$

For light damping, $\omega_r \approx \omega_0$. The peak amplitude is $A_{\max} = (F_0/m)/(2 \gamma \sqrt{\omega_0^2 - \gamma^2})$. The full width at half maximum (FWHM) of the resonance is $2 \gamma$, giving $Q = \omega_0/(2 \gamma) = \omega_0/\text{FWHM}$.

**Power absorbed.** A driven oscillator absorbs power on average $P = \tfrac{1}{2} b \omega^2 A(\omega)^2 = \gamma m \omega^2 A(\omega)^2$. Maximum at resonance, again with FWHM $2 \gamma$.

**Initial value problem.** Two initial conditions $x(0) = x_0$, $\dot{x}(0) = v_0$ determine the constants. For the undamped case, $A = \sqrt{x_0^2 + (v_0/\omega_0)^2}$ and $\phi = -\arctan(v_0/(\omega_0 x_0))$.

## Key Ideas
- Undamped: $\ddot{x} + \omega_0^2 x = 0$; solution $A \cos(\omega_0 t + \phi)$.
- Damped: $\ddot{x} + 2 \gamma \dot{x} + \omega_0^2 x = 0$; underdamped, critically damped, or overdamped.
- Quality factor $Q = \omega_0/(2 \gamma)$ measures the sharpness of resonance.
- Forced steady-state: amplitude $A(\omega) = F_0/[m \sqrt{(\omega_0^2 - \omega^2)^2 + (2 \gamma \omega)^2}]$.
- Resonance occurs at $\omega_r \approx \omega_0$ for light damping.

## Worked Examples
**Example 1 — Period of a mass on a spring.** A $0.5\text{ kg}$ mass on a spring of constant $200\text{ N/m}$: $\omega_0 = \sqrt{200/0.5} = 20\text{ rad/s}$, $T = 2\pi/20 \approx 0.314\text{ s}$.

**Example 2 — Q of a tuning fork.** A tuning fork at $440\text{ Hz}$ decays from amplitude $1\text{ mm}$ to $0.5\text{ mm}$ in $4\text{ s}$. The decay envelope is $e^{-\gamma t}$, so $e^{-\gamma \cdot 4} = 0.5 \Rightarrow \gamma = \ln 2/4 \approx 0.173\text{ s}^{-1}$. $Q = \omega_0/(2 \gamma) = 2\pi \times 440/(0.347) \approx 7970$. That is a high Q — typical for tuning forks.

**Example 3 — Resonance.** A driven oscillator with $\omega_0 = 10$, $\gamma = 0.5$, $F_0/m = 1$. Peak amplitude at $\omega_r = \sqrt{100 - 0.5} \approx 9.99 \approx \omega_0$. $A_{\max} = 1/(2 \cdot 0.5 \cdot \sqrt{100 - 0.25}) = 1/9.99 \approx 0.1$. Off resonance at $\omega = 12$: $A = 1/\sqrt{(100 - 144)^2 + 144} = 1/\sqrt{1936 + 144} = 1/\sqrt{2080} \approx 0.022$. The on-resonance amplitude is about $4.5\times$ the off-resonance amplitude.

## Common Misconceptions
- **"A damped oscillator has no frequency."** It has a *damped* frequency $\omega_d = \sqrt{\omega_0^2 - \gamma^2}$, slightly less than the natural frequency.
- **"Resonance happens at $\omega_0$."** Exactly at $\omega_0$ for the undamped case; very close to $\omega_0$ for light damping.
- **"Higher Q means a stronger oscillator."** Higher Q means a *narrower* resonance, not a stronger one. The peak amplitude is set by the drive force and the damping.
- **"An undamped oscillator is realistic."** No real oscillator is undamped; the undamped case is an idealisation. Real oscillators always have some loss.

## Connections
The harmonic oscillator is the bridge from *Mechanics* to *Waves and Optics* — a continuous wave is a chain of coupled harmonic oscillators, and the wave equation is the limit. In *Electricity and Magnetism*, the LC circuit is an electrical harmonic oscillator. In *Introduction to Quantum Mechanics*, the quantum harmonic oscillator is the model for molecular vibrations and is the basis of the quantised electromagnetic field.

## Quick Check
1. State the equation of motion of a mass-spring system and identify the natural frequency.
2. Find the period of a $0.2\text{ kg}$ mass on a spring of $80\text{ N/m}$.
3. A damped oscillator has $\omega_0 = 5$, $\gamma = 0.2$. Classify the damping and write the general solution.
4. What is the quality factor of a damped oscillator with $\omega_0 = 100$ and $\gamma = 0.5$?
5. State the resonance condition for a driven damped oscillator.

## Takeaway
- Undamped: $\ddot{x} + \omega_0^2 x = 0$ with $\omega_0 = \sqrt{k/m}$; period $T = 2\pi/\omega_0$.
- Damped: $\ddot{x} + 2 \gamma \dot{x} + \omega_0^2 x = 0$; underdamped, critical, or overdamped.
- Quality factor $Q = \omega_0/(2 \gamma)$ measures resonance sharpness.
- Forced steady-state amplitude peaks at $\omega_r \approx \omega_0$ for light damping.
- The harmonic oscillator is the prototype for oscillators across physics.
