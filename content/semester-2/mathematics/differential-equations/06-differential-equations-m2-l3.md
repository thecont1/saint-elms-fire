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
lessonId: differential-equations-m2-l3
lessonName: Forced Oscillations and Resonance
lessonNumber: 6
moduleNumber: 2
semesterNumber: 2
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - differential-equations-m2-l2
learningObjectives:
  - Solve the forced-damped harmonic oscillator for arbitrary forcing.
  - Use the method of undetermined coefficients for polynomial and sinusoidal forcing.
  - Use variation of parameters for general forcing.
  - Identify the transient and steady-state parts of the response.
concepts:
  - Forced oscillator
  - Method of undetermined coefficients
  - Variation of parameters
  - Green's function
  - Transient and steady state
  - Resonant driving
tags:
  - mathematics
  - differential-equations
  - resonance
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Forced Oscillations and Resonance

## Overview
A free oscillator decays (or oscillates) on its own; a forced oscillator is driven by an external agent. The mathematics of forced second-order linear ODEs is built by adding a particular solution to the homogeneous solution. The method of undetermined coefficients handles polynomial, exponential, and sinusoidal forcing. Variation of parameters handles arbitrary forcing and gives the Green's function of the system. This is the language of response functions across physics.

## Learning Path
- What you should already know: the characteristic equation, superposition, complex exponentials, integration by parts.
- What this lesson adds: a systematic way to handle the right-hand side of a linear ODE and the concept of the response function.
- What it unlocks: Laplace transforms (next lesson), Green's functions in *Quantum Mechanics*, and the response theory used in every branch of physics.

## Core Explanation
**General solution structure.** For the linear non-homogeneous ODE $L y = f(t)$ (where $L$ is a linear differential operator), the general solution is

$$y(t) = y_h(t) + y_p(t),$$

where $y_h$ solves $L y_h = 0$ (the homogeneous solution) and $y_p$ is any particular solution of the full equation. The homogeneous solution carries the initial-condition dependence and, in the damped case, the transient. The particular solution carries the steady-state forced response.

**Method of undetermined coefficients.** Try a particular solution of the same "form" as the forcing, with unknown coefficients. Examples:
- If $f(t) = P_n(t)$ (polynomial of degree $n$), try $y_p = Q_n(t)$, a polynomial of degree $n$ with unknown coefficients.
- If $f(t) = e^{k t}$, try $y_p = A e^{k t}$ (provided $k$ is not a root of the characteristic equation).
- If $f(t) = \cos \omega t$ or $\sin \omega t$, try $y_p = A \cos \omega t + B \sin \omega t$ (provided $\pm i \omega$ is not a root).
- For products, multiply the trial forms: e.g. $f = t e^{k t}$ suggests $y_p = (A + B t) e^{k t}$.

**Resonance.** When the forcing frequency matches a root of the characteristic equation, the trial $y_p$ overlaps with $y_h$, and you must multiply by $t$. For an undamped oscillator driven at the natural frequency, the trial is $y_p = t (A \cos \omega_0 t + B \sin \omega_0 t)$, giving an *unbounded* response: amplitude grows linearly in time. This is the resonance catastrophe.

**Variation of parameters.** Given two independent solutions $y_1, y_2$ of the homogeneous equation, look for a particular solution of the form $y_p = u_1(t) y_1(t) + u_2(t) y_2(t)$, with the constraint $u_1' y_1 + u_2' y_2 = 0$ (to simplify the equations). Then

$$u_1' y_1' + u_2' y_2' = f(t).$$

Solving the 2×2 system (using the Wronskian):

$$u_1'(t) = -\frac{y_2(t) f(t)}{W(t)}, \quad u_2'(t) = \frac{y_1(t) f(t)}{W(t)},$$

where $W = y_1 y_2' - y_1' y_2$. Integrate to get $u_1, u_2$, then form $y_p$.

**The Green's function.** The particular solution for forcing by a delta function at $t = t'$ is the *Green's function* $G(t, t')$. For a linear ODE, the response to an arbitrary forcing is the convolution

$$y_p(t) = \int G(t, t') f(t')\, dt'.$$

Green's functions are the workhorse of linear response theory in *Electricity and Magnetism*, *Quantum Mechanics*, and *Waves and Optics*.

**Driven damped oscillator revisited.** The forced equation $\ddot{x} + 2 \gamma \dot{x} + \omega_0^2 x = (F_0/m) \cos \omega t$ has a particular solution $x_p = A(\omega) \cos(\omega t - \delta)$. We derived the amplitude in the previous lesson. The total response is $x(t) = x_h(t) + x_p(t)$, where $x_h$ is the transient that decays at rate $\gamma$.

**Steady state.** After a few time constants $1/\gamma$, the transient is negligible and the oscillator oscillates at the driving frequency with constant amplitude — the steady state. The steady state is the same as if the oscillator had been running for a long time.

**Resonance and bandwidth.** The resonance peak has a width $\Delta \omega = 2 \gamma$ (FWHM). The fractional width $\Delta \omega/\omega_0 = 1/Q$ is the reciprocal of the quality factor. High-Q systems have narrow resonances.

**Initial value problem for forced systems.** Two initial conditions fix the constants in $y_h$. The particular solution $y_p$ has no free constants. Together, the initial conditions are absorbed by adjusting $y_h$.

## Key Ideas
- General solution: homogeneous $+$ particular.
- Undetermined coefficients: try the same form as the forcing, with unknown constants.
- Multiply the trial by $t$ if it overlaps with the homogeneous solution (resonance).
- Variation of parameters: $y_p = u_1 y_1 + u_2 y_2$ with $u_1', u_2'$ given by Wronskian formulas.
- Green's function: the response to a delta-function forcing; the convolution gives arbitrary-forcing response.

## Worked Examples
**Example 1 — Polynomial forcing.** $y'' - 3 y' + 2 y = 4 x$. Homogeneous solution: $y_h = C_1 e^x + C_2 e^{2 x}$. Try $y_p = A x + B$ (polynomial of degree 1). $y_p' = A$, $y_p'' = 0$. Substitute: $0 - 3 A + 2(A x + B) = 4 x \Rightarrow 2 A x + (2 B - 3 A) = 4 x$. Equate coefficients: $2 A = 4 \Rightarrow A = 2$; $2 B - 3 A = 0 \Rightarrow B = 3$. So $y_p = 2 x + 3$.

**Example 2 — Resonance.** $y'' + \omega_0^2 y = \cos \omega_0 t$. Homogeneous: $y_h = C_1 \cos \omega_0 t + C_2 \sin \omega_0 t$. Since $\cos \omega_0 t$ is part of $y_h$, multiply by $t$: $y_p = t (A \cos \omega_0 t + B \sin \omega_0 t)$. Substituting gives $A = 0$, $B = 1/(2 \omega_0)$. So $y_p = (t/(2 \omega_0)) \sin \omega_0 t$. The amplitude grows linearly in time — the resonance catastrophe.

**Example 3 — Forced damped oscillator.** $\ddot{x} + \dot{x} + x = \cos 2 t$. The homogeneous solution is $x_h = e^{-t/2} (C_1 \cos(\sqrt{3}/2 t) + C_2 \sin(\sqrt{3}/2 t))$. For $x_p$, try $A \cos 2 t + B \sin 2 t$. Substituting: $-3 A \cos 2 t - 3 B \sin 2 t = \cos 2 t \Rightarrow A = -1/3, B = 0$. So $x_p = -(1/3) \cos 2 t$. The amplitude is small because $2$ is far from the natural frequency $\omega_0 = 1$.

## Common Misconceptions
- **"Resonance makes the amplitude infinite."** Only for an undamped driven oscillator. With damping, the amplitude is finite at resonance, growing as $1/\gamma$.
- **"The particular solution satisfies the initial conditions."** No — the particular solution has no free constants. The initial conditions are absorbed by the homogeneous part.
- **"Green's function is the same as the impulse response."** Yes — the Green's function of a linear time-invariant system is the impulse response, and the response to an arbitrary input is their convolution.
- **"Transient is always negligible."** The transient matters whenever you care about the early-time response or when the damping is weak (the transient takes a long time to die out).

## Connections
The Green's function of a linear ODE is the basis of the response theory used in *Electricity and Magnetism* (Green's function for Poisson's equation), *Waves and Optics* (Green's function of the wave equation), and *Quantum Mechanics* (the propagator). The method of undetermined coefficients is the prototype for solving linear differential equations in every field. The resonance phenomenon is the basis of NMR, lasers, and acoustic instruments.

## Quick Check
1. State the method of undetermined coefficients for a polynomial forcing term.
2. Find a particular solution of $y'' - 4 y = e^{2 x}$.
3. Solve $y'' + y = \sin x$. (Hint: the trial overlaps with the homogeneous solution.)
4. What is a Green's function?
5. State the form of the resonance catastrophe in an undamped driven oscillator.

## Takeaway
- General solution: $y = y_h + y_p$.
- Undetermined coefficients: try a particular form matching the forcing.
- Multiply by $t$ if the trial overlaps with $y_h$ (resonance case).
- Variation of parameters handles arbitrary forcing via the Wronskian.
- Green's function: impulse response, convolved with forcing to get the response.
