***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: mathematics
subjectName: Mathematics
courseId: integral-transforms
courseName: Integral Transforms (Mathematics Elective I)
moduleId: integral-transforms-module-2
moduleName: The Laplace Transform
lessonId: integral-transforms-m2-l3
lessonName: Heaviside Step, Dirac Delta, Periodic Functions and the Limit Theorems
lessonNumber: 6
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - integral-transforms-m2-l2
  - differential-equations-m3-l2
learningObjectives:
  - Write piecewise-defined inputs with Heaviside steps and transform them using the second shifting theorem $\mathcal{L}\{f(t-a)u(t-a)\} = e^{-as}F(s)$.
  - Obtain $\mathcal{L}\{\delta(t - a)\} = e^{-as}$ as the limit of unit-area pulses and interpret impulses physically.
  - Derive $\mathcal{L}\{f\} = \frac{1}{1 - e^{-sT}}\int_0^T f(t)e^{-st}dt$ for a $T$-periodic function and apply it to square, rectified and sawtooth waves.
  - Prove the initial and final value theorems and identify when the final value theorem fails.
concepts:
  - Heaviside step function
  - Second shifting theorem
  - Dirac delta impulse
  - Laplace transform of periodic functions
  - Initial value theorem
  - Final value theorem
tags:
  - mathematics
  - integral-transforms
  - heaviside-step
  - limit-theorems
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
  - short-answer
***

# Heaviside Step, Dirac Delta, Periodic Functions and the Limit Theorems

## Overview

Real inputs are switched on and off, struck, and repeated. A voltage source connected at $t = 2$ s, a hammer blow on a beam, and the square wave from a function generator are awkward to handle with classical methods, which must solve piecewise and match conditions at every switching time. The Laplace transform absorbs all of this. The Heaviside step encodes switching and the second shifting theorem converts a delay into the factor $e^{-as}$; the Dirac delta, met in Fourier form in Lesson m1-l3, becomes the impulse with transform $e^{-as}$; and a periodic input has a transform equal to that of one period divided by $1 - e^{-sT}$. The lesson ends with two theorems that read the start and the end of a signal directly from $F(s)$, without inverting: the initial and final value theorems, together with the conditions under which the second may be trusted.

## Learning Path

- **What you should already know**: transform properties including the $t$-shift (Lesson m2-l1); partial-fraction inversion (Lesson m2-l2); the sifting property of $\delta$ (Lesson m1-l3); the step and delta as first met in Differential Equations (Lesson m3-l2).
- **What this lesson adds**: piecewise functions via steps, a proof of the second shifting theorem, impulses as limits, transforms of periodic functions, and the initial and final value theorems.
- **What later lessons this will unlock**: ODEs and systems with discontinuous or impulsive forcing, impulse responses and steady states of circuits and oscillators (Lesson m3-l1); boundary data switched on at $t = 0$ in the heat equation (Lesson m3-l2).

## Core Explanation

### The Heaviside step and piecewise functions

The **Heaviside unit step** is $u(t - a) = 0$ for $t < a$ and $1$ for $t > a$, with $a \geq 0$. Its transform is

$$\mathcal{L}\{u(t - a)\} = \int_a^\infty e^{-st}dt = \frac{e^{-as}}{s}.$$

Steps build any piecewise function. A function equal to $f_1$ on $[0, a)$ and $f_2$ on $[a, \infty)$ is

$$f(t) = f_1(t) + \big[f_2(t) - f_1(t)\big]u(t - a),$$

and a rectangular window of $[a, b)$ is $u(t - a) - u(t - b)$. Each switching time contributes one step, carrying the *change* of formula at that time.

### The second shifting theorem

For $a > 0$,

$$\mathcal{L}\{f(t - a)u(t - a)\} = \int_a^\infty f(t - a)e^{-st}dt = \int_0^\infty f(\tau)e^{-s(\tau + a)}d\tau = e^{-as}F(s),$$

using $\tau = t - a$. A delay of $a$ multiplies the transform by $e^{-as}$. To transform $g(t)u(t - a)$, where $g$ is not written as a function of $t - a$, use the equivalent form

$$\mathcal{L}\{g(t)u(t - a)\} = e^{-as}\,\mathcal{L}\{g(t + a)\}.$$

Read backwards, $\mathcal{L}^{-1}\{e^{-as}F(s)\} = f(t - a)u(t - a)$: invert $F$ ignoring the exponential, replace $t$ by $t - a$, and multiply by the step.

### The Dirac delta as an impulse

An impulse of unit strength at $t = a$ is the limit of the pulses $\delta_\varepsilon(t - a) = [u(t - a) - u(t - a - \varepsilon)]/\varepsilon$, of height $1/\varepsilon$ and area $1$. Their transforms are

$$\mathcal{L}\{\delta_\varepsilon(t - a)\} = e^{-as}\,\frac{1 - e^{-\varepsilon s}}{\varepsilon s} \;\xrightarrow{\ \varepsilon\to0\ }\; e^{-as},$$

since $(1 - e^{-\varepsilon s})/(\varepsilon s) \to 1$. So $\mathcal{L}\{\delta(t - a)\} = e^{-as}$, in agreement with sifting: $\int_0^\infty\delta(t - a)e^{-st}dt = e^{-as}$. For an impulse at $t = 0$ we take the lower limit as $0^-$, so that $\mathcal{L}\{\delta(t)\} = 1$; with this convention the derivative rule reads $\mathcal{L}\{f'\} = sF - f(0^-)$ and automatically includes the delta from any jump at the origin. Applying it to $\delta$ itself gives $\mathcal{L}\{\delta'(t)\} = s$, which is how improper rational functions such as $s/(s+1) = 1 - 1/(s+1)$ invert: $\delta(t) - e^{-t}$.

Physically, a force $F(t)$ acting briefly delivers impulse $J = \int F\,dt$; if the duration is short compared with the system's own time scales, only $J$ matters and the force is modelled as $J\,\delta(t - a)$. Since $u'(t - a) = \delta(t - a)$, the transform of a step, $e^{-as}/s$, is that of an impulse divided by $s$, consistent with the integral rule.

### Periodic functions

If $f(t + T) = f(t)$ for $t \geq 0$, split the integral into periods and substitute $t = \tau + nT$:

$$F(s) = \sum_{n=0}^{\infty}\int_{nT}^{(n+1)T}f(t)e^{-st}dt = \sum_{n=0}^{\infty}e^{-nsT}\int_0^T f(\tau)e^{-s\tau}d\tau = \frac{1}{1 - e^{-sT}}\int_0^T f(t)e^{-st}dt,$$

summing the geometric series for $\operatorname{Re}s > 0$. Only one period need be integrated. For the **full-wave rectified sine** $|\sin\omega t|$, with $T = \pi/\omega$,

$$\int_0^{\pi/\omega}\sin\omega t\,e^{-st}dt = \frac{\omega(1 + e^{-\pi s/\omega})}{s^2 + \omega^2} \quad\Longrightarrow\quad \mathcal{L}\{|\sin\omega t|\} = \frac{\omega}{s^2 + \omega^2}\coth\frac{\pi s}{2\omega}.$$

For the **sawtooth** $f(t) = t/T$ on $[0, T)$, $\int_0^T\frac tTe^{-st}dt = \frac{1 - e^{-sT}(1 + sT)}{Ts^2}$, so

$$\mathcal{L}\{f\} = \frac{1}{Ts^2} - \frac{e^{-sT}}{s(1 - e^{-sT})}.$$

The factor $1/(1 - e^{-sT})$ has poles at $s = 2\pi in/T$ on the imaginary axis, the harmonic frequencies $n\omega_0$ of Lesson m1-l1: the Laplace transform of a periodic function carries its Fourier series in its poles.

### Initial and final value theorems

**Initial value theorem.** If $f$ and $f'$ are piecewise continuous and of exponential order, then

$$f(0^+) = \lim_{s\to\infty}sF(s).$$

*Proof.* $\mathcal{L}\{f'\} = sF(s) - f(0^+)$, and the transform of the admissible function $f'$ tends to zero as $s \to \infty$ (Lesson m2-l1). $\square$ Applying the theorem to $f'$ gives $f'(0^+) = \lim_{s\to\infty}[s^2F(s) - sf(0^+)]$.

**Final value theorem.** If $f(t)$ tends to a limit as $t \to \infty$, which is guaranteed when every pole of $sF(s)$ lies in the open left half-plane, then

$$\lim_{t\to\infty}f(t) = \lim_{s\to0}sF(s).$$

*Proof.* Let $s \to 0$ in $\int_0^\infty f'(t)e^{-st}dt = sF(s) - f(0^+)$; the left side tends to $\int_0^\infty f'dt = f(\infty) - f(0^+)$. $\square$

The hypothesis is essential. For $f = \sin\omega t$, $sF = \omega s/(s^2 + \omega^2) \to 0$ as $s \to 0$, yet $\sin\omega t$ has no limit, because $sF$ has poles at $\pm i\omega$. For $f = e^{t}$, $sF = s/(s - 1) \to 0$, yet $f \to \infty$, because the pole at $s = 1$ is in the right half-plane. Always locate the poles first.

## Key Ideas

- **Steps build piecewise functions**: $f = f_1 + (f_2 - f_1)u(t - a)$; $\mathcal{L}\{u(t-a)\} = e^{-as}/s$.
- **Second shifting theorem**: $f(t - a)u(t - a) \leftrightarrow e^{-as}F(s)$, equivalently $g(t)u(t - a) \leftrightarrow e^{-as}\mathcal{L}\{g(t + a)\}$.
- **Impulse**: $\delta(t - a) \leftrightarrow e^{-as}$; a short force of impulse $J$ is modelled as $J\delta(t - a)$.
- **Periodic functions**: $F(s) = \frac{1}{1 - e^{-sT}}\int_0^Tfe^{-st}dt$; the poles $2\pi in/T$ are the Fourier harmonics.
- **Initial value theorem**: $f(0^+) = \lim_{s\to\infty}sF(s)$.
- **Final value theorem**: $f(\infty) = \lim_{s\to0}sF(s)$, valid only if all poles of $sF$ lie in $\operatorname{Re}s < 0$.

## Worked Examples

### Example 1 — A single half-sine pulse

Transform $g(t) = \sin t$ for $0 < t < \pi$ and $g(t) = 0$ for $t > \pi$, and check by inverting.

**Solution.** Write $g = \sin t - \sin t\,u(t - \pi)$. Since $\sin t = -\sin(t - \pi)$,

$$g(t) = \sin t + \sin(t - \pi)\,u(t - \pi) \quad\Longrightarrow\quad G(s) = \frac{1}{s^2 + 1} + \frac{e^{-\pi s}}{s^2 + 1} = \frac{1 + e^{-\pi s}}{s^2 + 1}.$$

Alternatively, $\mathcal{L}\{\sin t\,u(t - \pi)\} = e^{-\pi s}\mathcal{L}\{\sin(t + \pi)\} = -\frac{e^{-\pi s}}{s^2 + 1}$, which gives the same result. Inverting, $\mathcal{L}^{-1}\{e^{-\pi s}/(s^2 + 1)\} = \sin(t - \pi)u(t - \pi) = -\sin t\,u(t - \pi)$, so for $t > \pi$ the two terms cancel and $g = 0$, as required. Comparing with the periodic formula, this pulse is one period of the half-wave rectified sine of Lesson m1-l1, whose transform is therefore $\frac{1}{(s^2 + 1)(1 - e^{-\pi s})}$ (period $2\pi$, using $1 - e^{-2\pi s} = (1 - e^{-\pi s})(1 + e^{-\pi s})$).

### Example 2 — The square wave and a failed final value

Find the transform of the square wave $f = 1$ on $[0, a)$, $f = -1$ on $[a, 2a)$, period $2a$, and test the two limit theorems on it.

**Solution.** Over one period,

$$\int_0^{2a}fe^{-st}dt = \frac{1 - e^{-as}}{s} - \frac{e^{-as} - e^{-2as}}{s} = \frac{(1 - e^{-as})^2}{s}.$$

Dividing by $1 - e^{-2as} = (1 - e^{-as})(1 + e^{-as})$,

$$F(s) = \frac{1 - e^{-as}}{s(1 + e^{-as})} = \frac1s\tanh\frac{as}{2}.$$

Initial value: $sF = \tanh(as/2) \to 1$ as $s \to \infty$, matching $f(0^+) = 1$. Final value: $sF \to 0$ as $s \to 0$, but the square wave has no limit. The theorem does not apply, because $sF(s)$ has poles where $1 + e^{-as} = 0$, i.e. at $s = i(2n + 1)\pi/a$, on the imaginary axis; these are exactly the odd harmonics of the square wave's Fourier series. The value $0$ is merely the mean.

### Example 3 — Reading the start and end of a response

Without inverting, find $f(0^+)$, $f'(0^+)$ and $f(\infty)$ for $F(s) = \dfrac{3s + 2}{s(s^2 + 2s + 5)}$, then verify by inversion.

**Solution.** $sF = \frac{3s + 2}{s^2 + 2s + 5} \to 0$ as $s \to \infty$, so $f(0^+) = 0$. Next, $f'(0^+) = \lim s^2F = \lim\frac{s(3s + 2)}{s^2 + 2s + 5} = 3$. The poles of $sF$ are $s = -1 \pm 2i$, in the left half-plane, so the final value theorem applies: $f(\infty) = \lim_{s\to0}sF = \frac25$.

Verification: $F = \frac{A}{s} + \frac{Bs + C}{s^2 + 2s + 5}$ with $A = \frac25$, $B = -\frac25$ (from the $s^2$ terms) and $C = 3 - 2A = \frac{11}{5}$ (from the $s$ terms); the constants check, $5A = 2$. Writing $Bs + C = -\frac25(s + 1) + \frac{13}{5}$ and completing the square,

$$f(t) = \frac25 - \frac25e^{-t}\cos 2t + \frac{13}{10}e^{-t}\sin 2t .$$

Then $f(0) = 0$, $f'(0) = \frac25 + \frac{13}{10}\cdot 2 = 3$ and $f \to \frac25$, all as predicted.

## Common Misconceptions

- **"$\mathcal{L}\{f(t)u(t - a)\} = e^{-as}F(s)$."** The theorem requires the function to be delayed as a whole, $f(t - a)u(t - a)$. For $f(t)u(t - a)$ use $e^{-as}\mathcal{L}\{f(t + a)\}$.
- **"The delta function has transform $0$ because it is zero almost everywhere."** Its transform is $e^{-as}$; the delta is defined by its integral, which is $1$.
- **"The final value theorem always gives the long-time value."** It gives a meaningless number when $f$ oscillates or grows; check that every pole of $sF$ is in the open left half-plane.
- **"A periodic function has a periodic transform."** $F(s)$ is not periodic; periodicity of $f$ appears as the factor $1/(1 - e^{-sT})$ and its poles on the imaginary axis.
- **"Using $0^+$ or $0^-$ makes no difference."** It matters whenever an impulse acts at $t = 0$ or $f$ jumps there; the $0^-$ convention keeps the impulse inside the integral.

## Connections

- Switching a DC source into an RC or RL circuit at a given time (Electricity and Magnetism, Lesson m2-l3) is a step input; the second shifting theorem delays the familiar exponential response.
- The full-wave rectified sine of this lesson is the output of the bridge rectifier in Basic Electronics (Lesson m2-l1); its transform feeds directly into the circuit analysis of Lesson m3-l1.
- Impulses model a bat striking a ball or a hammer exciting a beam in Mechanics; the impulse $J$ equals the change of momentum.
- The final value theorem gives steady-state errors in feedback control and the settled voltage of measurement circuits in Electronic Instrumentation.
- The poles of a periodic signal's transform on the imaginary axis are the spectral lines seen on the FFT display of the Communication Electronics Lab (Lesson m1-l4) and computed in Lesson m3-l3.

## Quick Check

1. Write $f(t) = 2$ for $0 \leq t < 3$, $f(t) = t - 1$ for $t \geq 3$ using steps and find $F(s)$.
2. Invert $\dfrac{e^{-2s}}{s^2 + 4s + 13}$.
3. Find the transform of the train of impulses $\sum_{n=0}^{\infty}\delta(t - nT)$.
4. Use the periodic formula to find the transform of $f(t) = e^{-t}$ on $[0, 1)$, repeated with period $1$.
5. Can the final value theorem be applied to $F(s) = \dfrac{1}{s(s^2 + 1)}$? Explain.

## Takeaway

- Switching is written with Heaviside steps; each switching time adds one step carrying the change of formula.
- A delay by $a$ multiplies the transform by $e^{-as}$, and a unit impulse at $t = a$ has transform $e^{-as}$.
- Periodic functions need only one period of integration, divided by $1 - e^{-sT}$.
- The initial value theorem reads $f(0^+)$ from $sF$ as $s \to \infty$; the final value theorem reads $f(\infty)$ from $sF$ as $s \to 0$.
- The final value theorem is valid only if every pole of $sF$ lies in the open left half-plane; oscillating and growing signals violate it.
