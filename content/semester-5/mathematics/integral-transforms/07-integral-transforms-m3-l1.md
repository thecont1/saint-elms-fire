***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: integral-transforms
courseName: Integral Transforms (Mathematics Elective I)
moduleId: integral-transforms-module-3
moduleName: Transform Methods for ODEs, PDEs and Signals
lessonId: integral-transforms-m3-l1
lessonName: Transform Solution of ODEs, Systems and Transfer Functions
lessonNumber: 7
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 7
prerequisites:
  - integral-transforms-m2-l3
  - differential-equations-m2-l3
  - differential-equations-m3-l3
learningObjectives:
  - Solve linear constant-coefficient ODEs and first-order systems with step, pulse and impulse forcing by the Laplace transform.
  - Define the transfer function $H(s)$ and impulse response $h(t)$, and express any zero-state response as the convolution $y = h * f$.
  - Analyse the driven damped oscillator and the series RLC circuit through their transfer functions, obtaining resonance frequency, phase and quality factor from $H(i\omega)$.
  - Relate the poles of $H(s)$ to natural modes and to stability.
concepts:
  - Transfer function
  - Impulse response
  - Duhamel's integral
  - Zero-state and zero-input response
  - Frequency response
  - Driven damped oscillator
  - Series RLC circuit
tags:
  - mathematics
  - integral-transforms
  - transfer-functions
  - rlc-circuits
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
  - computational
***

# Transform Solution of ODEs, Systems and Transfer Functions

## Overview

Module 2 built the Laplace transform; this lesson puts it to work on the problems that motivated it. A linear ODE with constant coefficients becomes an algebraic equation in $s$, the initial conditions enter automatically through the derivative rule, and switched or impulsive inputs are handled by the step and delta of Lesson m2-l3 without piecewise matching. Solving the algebra separates the response into a part due to the initial state and a part due to the input, and the second is always the input multiplied by one fixed function, the transfer function $H(s)$. Its inverse, the impulse response, convolved with any input gives the output. The same ideas solve first-order systems via $(sI - A)^{-1}$. The lesson then reads the driven damped oscillator and the series RLC circuit as transfer functions, recovering resonance, phase lag and quality factor from $H(i\omega)$ in a few lines.

## Learning Path

- **What you should already know**: forced oscillations and resonance (Differential Equations, Lesson m2-l3); RC and RL modelling (Differential Equations, Lesson m3-l3); partial fractions and convolution (Lesson m2-l2); steps, impulses and the limit theorems (Lesson m2-l3).
- **What this lesson adds**: the transform method for ODEs and systems, zero-input and zero-state responses, transfer functions, impulse response, Duhamel's integral, stability from poles, and frequency response of oscillators and circuits.
- **What later lessons this will unlock**: transforms applied to PDEs, where each spatial mode obeys an ODE of this kind (Lesson m3-l2); frequency response measured from sampled data with the FFT (Lesson m3-l3).

## Core Explanation

### The transform method

Consider $ay'' + by' + cy = f(t)$ with $y(0) = y_0$, $y'(0) = v_0$. Transforming with $\mathcal{L}\{y''\} = s^2Y - sy_0 - v_0$ and $\mathcal{L}\{y'\} = sY - y_0$,

$$(as^2 + bs + c)\,Y(s) = F(s) + a(sy_0 + v_0) + by_0,$$

$$Y(s) = \underbrace{\frac{a(sy_0 + v_0) + by_0}{as^2 + bs + c}}_{\text{zero-input response}} + \underbrace{\frac{F(s)}{as^2 + bs + c}}_{\text{zero-state response}} .$$

The **zero-input response** is the free motion from the initial state; the **zero-state response** is the motion forced from rest. Both share the denominator $as^2 + bs + c$, the characteristic polynomial of the ODE; its roots are the poles of $Y$ that generate the natural modes.

### Transfer function, impulse response and Duhamel's integral

The **transfer function** is the ratio of output to input transforms with zero initial conditions:

$$H(s) = \frac{Y(s)}{F(s)} = \frac{1}{as^2 + bs + c}.$$

If $f = \delta(t)$, then $F = 1$ and $Y = H$: the **impulse response** is $h(t) = \mathcal{L}^{-1}\{H\}$. For any input the convolution theorem gives **Duhamel's integral**

$$y(t) = (h * f)(t) = \int_0^t h(t - \tau)f(\tau)\,d\tau ,$$

which says that the input is a succession of impulses $f(\tau)\,d\tau$, each producing a delayed copy of $h$. The system is **stable** (bounded inputs give bounded outputs) when every pole of $H$ lies in $\operatorname{Re}s < 0$, so that $h$ decays.

For a stable system, setting $s = i\omega$ gives the **frequency response** $H(i\omega)$, which by Lesson m2-l1 is the Fourier transform of $h$. A steady sinusoidal input $e^{i\omega t}$ produces the output $H(i\omega)e^{i\omega t}$ once transients have decayed, so $|H(i\omega)|$ is the gain and $\arg H(i\omega)$ the phase shift. In Fourier language $Y(\omega) = H(i\omega)F(\omega)$, the convolution theorem of Lesson m1-l3.

### Discontinuous and impulsive forcing

With a step or pulse input, $F(s)$ contains factors $e^{-as}$ and the second shifting theorem inverts them; for a second-order equation $y$ and $y'$ remain continuous at the switching times, because a finite jump in $f$ produces only a jump in $y''$. An impulse $J\delta(t - t_0)$ is different. Integrating $ay'' + by' + cy = J\delta(t - t_0)$ across $[t_0^-, t_0^+]$, the terms in $y$ and $y'$ contribute nothing in the limit while $ay''$ integrates to $a\,\Delta y'$, so

$$\Delta y'(t_0) = \frac{J}{a}, \qquad \Delta y(t_0) = 0 .$$

A hammer blow changes velocity instantly and position not at all, exactly as the impulse–momentum theorem demands.

### First-order systems

For $\mathbf{x}' = A\mathbf{x} + \mathbf{f}(t)$, transforming gives $s\mathbf{X} - \mathbf{x}(0) = A\mathbf{X} + \mathbf{F}$, so

$$\mathbf{X}(s) = (sI - A)^{-1}\big[\mathbf{x}(0) + \mathbf{F}(s)\big].$$

The matrix $(sI - A)^{-1}$, the **resolvent**, is the transform of the matrix exponential, $e^{At} = \mathcal{L}^{-1}\{(sI - A)^{-1}\}$. Its entries have denominator $\det(sI - A)$, so the poles are the eigenvalues of $A$, the same eigenvalues whose real parts decide stability in Linear Algebra (Lesson m3-l1). In practice, for small systems one solves the transformed linear equations by elimination, as in Example 2.

### The driven damped oscillator

A mass $m$ on a spring of constant $k$ with damping force $-b\dot x$ and drive $F(t)$ obeys $m\ddot x + b\dot x + kx = F(t)$. With $\beta = b/2m$ and $\omega_0 = \sqrt{k/m}$,

$$H(s) = \frac{X(s)}{F(s)} = \frac{1}{m(s^2 + 2\beta s + \omega_0^2)}, \qquad \text{poles } s = -\beta \pm \sqrt{\beta^2 - \omega_0^2}.$$

For $\beta < \omega_0$ (underdamped) the poles are $-\beta \pm i\omega_d$ with $\omega_d = \sqrt{\omega_0^2 - \beta^2}$, and

$$h(t) = \frac{e^{-\beta t}\sin\omega_dt}{m\omega_d}.$$

The frequency response is

$$H(i\omega) = \frac{1}{m(\omega_0^2 - \omega^2 + 2i\beta\omega)}, \qquad |H| = \frac{1}{m\sqrt{(\omega_0^2 - \omega^2)^2 + 4\beta^2\omega^2}}, \qquad \tan\delta = \frac{2\beta\omega}{\omega_0^2 - \omega^2},$$

so a drive $F_0\cos\omega t$ gives the steady state $x = F_0|H|\cos(\omega t - \delta)$, lagging by $\delta$. Minimising $(\omega_0^2 - \omega^2)^2 + 4\beta^2\omega^2$ over $\omega^2$ gives the amplitude resonance $\omega_r = \sqrt{\omega_0^2 - 2\beta^2}$, and the sharpness is measured by the **quality factor** $Q = \omega_0/2\beta$. These are the results of Differential Equations (Lesson m2-l3), obtained here from one formula.

### The series RLC circuit

Kirchhoff's voltage law for a series circuit driven by $v(t)$, with charge $q$ and current $i = \dot q$, is $L\ddot q + R\dot q + q/C = v(t)$. Transforming with zero initial charge and current, $I(s) = V(s)/Z(s)$ with the **impedance**

$$Z(s) = Ls + R + \frac{1}{Cs},$$

which at $s = i\omega$ is the familiar AC impedance $R + i(\omega L - 1/\omega C)$. The capacitor voltage has transfer function $V_C/V = 1/(LCs^2 + RCs + 1)$.

| Oscillator | RLC circuit |
|---|---|
| displacement $x$ | charge $q$ |
| mass $m$ | inductance $L$ |
| damping $b$ | resistance $R$ |
| stiffness $k$ | elastance $1/C$ |
| $\beta = b/2m$, $\omega_0 = \sqrt{k/m}$ | $\beta = R/2L$, $\omega_0 = 1/\sqrt{LC}$ |
| $Q = \omega_0/2\beta$ | $Q = \frac1R\sqrt{L/C}$ |

## Key Ideas

- **Transform method**: an ODE becomes algebra; initial conditions enter through $sY - y(0)$ and $s^2Y - sy(0) - y'(0)$.
- **Two responses**: total response is zero-input (initial state) plus zero-state (input), with a common characteristic denominator.
- **Transfer function**: $H = Y/F$ with zero initial conditions; its inverse $h$ is the impulse response and $y = h * f$ for any input.
- **Stability and frequency response**: poles of $H$ in $\operatorname{Re}s < 0$ mean stability; $H(i\omega)$ gives gain and phase.
- **Impulses**: $J\delta(t - t_0)$ makes $y'$ jump by $J/a$ while $y$ stays continuous.
- **Systems**: $\mathbf{X} = (sI - A)^{-1}[\mathbf{x}(0) + \mathbf{F}]$; the poles are the eigenvalues of $A$.

## Worked Examples

### Example 1 — An oscillator driven by a rectangular pulse

Solve $y'' + y = f(t)$, $y(0) = y'(0) = 0$, where $f = 1$ for $0 \leq t < \pi$ and $f = 0$ for $t \geq \pi$.

**Solution.** $f = 1 - u(t - \pi)$, so $F = (1 - e^{-\pi s})/s$ and

$$Y = \frac{1 - e^{-\pi s}}{s(s^2 + 1)}, \qquad \frac{1}{s(s^2 + 1)} = \frac1s - \frac{s}{s^2 + 1} \;\leftrightarrow\; 1 - \cos t .$$

By the second shifting theorem,

$$y(t) = (1 - \cos t) - \big[1 - \cos(t - \pi)\big]u(t - \pi) = (1 - \cos t) - (1 + \cos t)\,u(t - \pi).$$

For $t > \pi$, $y = -2\cos t$. At $t = \pi$ both formulas give $y = 2$ and $y' = 0$, so position and velocity are continuous, as expected for a finite jump in forcing. The pulse lasting exactly half a natural period leaves the oscillator swinging with amplitude $2$, twice the static deflection.

### Example 2 — A coupled first-order system

Solve $x' = -2x + y$, $y' = x - 2y$ with $x(0) = 1$, $y(0) = 0$, a model of two bodies exchanging heat with each other and with surroundings.

**Solution.** Transforming, $(s + 2)X - Y = 1$ and $-X + (s + 2)Y = 0$. The second gives $X = (s + 2)Y$; substituting, $[(s + 2)^2 - 1]Y = 1$, so

$$Y = \frac{1}{(s + 1)(s + 3)} = \frac12\left[\frac{1}{s + 1} - \frac{1}{s + 3}\right], \qquad X = \frac{s + 2}{(s + 1)(s + 3)} = \frac12\left[\frac{1}{s + 1} + \frac{1}{s + 3}\right].$$

Hence $x = \tfrac12(e^{-t} + e^{-3t})$ and $y = \tfrac12(e^{-t} - e^{-3t})$. The poles $-1$ and $-3$ are the eigenvalues of $A = \begin{pmatrix}-2 & 1\\ 1 & -2\end{pmatrix}$. Check: $x' = \tfrac12(-e^{-t} - 3e^{-3t})$ and $-2x + y = -(e^{-t} + e^{-3t}) + \tfrac12(e^{-t} - e^{-3t}) = \tfrac12(-e^{-t} - 3e^{-3t})$. The slow mode $e^{-t}$ has the two bodies at equal temperature; the fast mode $e^{-3t}$ equalises their difference.

### Example 3 — Step response of a series RLC circuit

A series circuit with $L = 0.10$ H, $R = 20\ \Omega$ and $C = 100\ \mu$F, initially at rest, is connected to $V_0 = 10$ V at $t = 0$. Find $i(t)$, its peak value, $Q$ and the final capacitor voltage.

**Solution.** With $V(s) = V_0/s$,

$$I(s) = \frac{V_0/s}{Ls + R + 1/(Cs)} = \frac{V_0/L}{s^2 + (R/L)s + 1/(LC)} = \frac{100}{s^2 + 200s + 10^5}.$$

Completing the square, $s^2 + 200s + 10^5 = (s + 100)^2 + 300^2$, so

$$i(t) = \frac{100}{300}e^{-100t}\sin 300t = \frac13e^{-100t}\sin 300t\ \text{A}.$$

The maximum occurs where $\tan 300t = 300/100 = 3$, at $t = \arctan(3)/300 = 1.249/300 = 4.16$ ms, where $i = \frac13e^{-0.416}\cdot\frac{3}{\sqrt{10}} = \frac13(0.659)(0.949) = 0.209$ A. The quality factor is $Q = \frac{1}{20}\sqrt{0.10/10^{-4}} = 1.58$, so the circuit is underdamped and rings briefly. The capacitor voltage is $V_C(s) = I(s)/(Cs)$, and the poles of $sV_C = I/C$ lie in the left half-plane, so the final value theorem gives $V_C(\infty) = I(0)/C = (100/10^5)/10^{-4} = 10$ V $= V_0$, as it must.

## Common Misconceptions

- **"The transfer function depends on the input."** $H(s)$ is a property of the system alone; the input enters only through $F(s)$ in $Y = HF$.
- **"Initial conditions are included in $H(s)$."** The transfer function assumes a system at rest; initial conditions produce the separate zero-input response.
- **"An impulse makes the displacement jump."** For a second-order system the impulse changes $y'$ by $J/a$; the displacement is continuous.
- **"Resonance occurs exactly at $\omega_0$."** The amplitude peak is at $\sqrt{\omega_0^2 - 2\beta^2}$; only the velocity amplitude (or RLC current) peaks at $\omega_0$, where the phase lag is $90^\circ$.
- **"$H(i\omega)$ is meaningful for any system."** It describes a steady state only when $H$ is stable; with a pole in the right half-plane the transient grows and no steady state exists.

## Connections

- The underdamped, critically damped and overdamped regimes of Waves and Optics (Lesson m1-l1) correspond to complex, repeated and real poles of $H(s)$.
- The RLC resonance and $Q$-factor measured in the Electricity and Magnetism Lab (Lesson m1-l5) are the peak and width of $|1/Z(i\omega)|$.
- Filters in the Communication Electronics Lab (Lesson m1-l3) are designed by placing the poles and zeros of $H(s)$.
- Seismometers and accelerometers are damped oscillators; their transfer function converts recorded motion to ground acceleration in geophysics and gravitational-wave instrumentation (Astrophysics IV, Lesson m3-l8).
- Linear time-invariant systems and Duhamel's integral reappear for every normal mode of a PDE in Lesson m3-l2.

## Quick Check

1. Solve $y' + 3y = 6u(t - 1)$, $y(0) = 2$, and sketch $y$.
2. Find the impulse response of $y'' + 4y' + 13y = f$ and state whether the system is stable.
3. A mass of $0.5$ kg on a spring with $k = 50$ N m$^{-1}$ is struck by an impulse of $0.2$ N s while at rest. Find the initial velocity and the undamped motion.
4. For $\omega_0 = 10$ rad s$^{-1}$ and $\beta = 1$ s$^{-1}$, find $\omega_r$, $Q$ and the phase lag at $\omega = \omega_0$.
5. Write the transfer function from source voltage to inductor voltage in a series RLC circuit.

## Takeaway

- The Laplace transform turns linear ODEs and systems with arbitrary switched or impulsive forcing into algebra.
- Every response is zero-input plus zero-state, and the zero-state part is $H(s)F(s)$, i.e. $h * f$ in time.
- Poles of $H$ are natural modes; their real parts decide stability and their imaginary parts the ringing frequency.
- The driven damped oscillator and the series RLC circuit share one transfer function, with $m \leftrightarrow L$, $b \leftrightarrow R$, $k \leftrightarrow 1/C$.
- Gain, phase, resonance frequency and $Q$ are all read from $H(i\omega)$.
