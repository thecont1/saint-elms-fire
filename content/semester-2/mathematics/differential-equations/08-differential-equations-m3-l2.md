***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: mathematics
subjectName: Mathematics
courseId: differential-equations
courseName: Differential Equations
moduleId: differential-equations-module-3
moduleName: Systems and Applications
lessonId: differential-equations-m3-l2
lessonName: Laplace Transforms — Idea and First Examples
lessonNumber: 8
moduleNumber: 3
semesterNumber: 2
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - differential-equations-m1-l2
  - differential-equations-m2-l1
learningObjectives:
  - Define the Laplace transform and its inverse.
  - State the main properties: linearity, derivative rule, integration rule.
  - Use the transform to solve linear ODEs with constant coefficients.
  - Use the Heaviside step function and Dirac delta to model switches and impulses.
concepts:
  - Laplace transform
  - Inverse Laplace transform
  - Transform of a derivative
  - Transfer function
  - Heaviside step function
  - Dirac delta
tags:
  - mathematics
  - differential-equations
  - laplace-transform
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Laplace Transforms — Idea and First Examples

## Overview
The Laplace transform converts a function of time $f(t)$ to a function of a complex variable $F(s) = \int_0^\infty f(t) e^{-s t}\, dt$. Differentiation in $t$ becomes multiplication by $s$ in $s$, so an ODE in $t$ becomes an algebraic equation in $s$. This is the method of choice for linear ODEs with constant coefficients, especially when the forcing is a step or an impulse. This lesson develops the transform, the main rules, and a few worked examples.

## Learning Path
- What you should already know: improper integrals, partial fractions, complex numbers.
- What this lesson adds: a transform method that turns calculus into algebra, and the workhorse tool for control theory and signal processing.
- What it unlocks: the transfer-function language of engineering, the impulse response of a system, and the convolution theorem.

## Core Explanation
**Definition.** The Laplace transform of $f(t)$ (defined for $t \ge 0$) is

$$F(s) = \mathcal{L}\{f(t)\} = \int_0^\infty f(t) e^{-s t}\, dt,$$

where $s$ is a complex number with sufficiently large real part (so the integral converges). The *inverse* Laplace transform recovers $f(t)$ from $F(s)$ by a contour integral; in practice, you use a table of standard pairs.

**Standard pairs.** A short list:

| $f(t)$ | $F(s)$ |
|--------|--------|
| $1$ | $1/s$ |
| $e^{a t}$ | $1/(s - a)$ |
| $t^n$ | $n!/s^{n+1}$ |
| $\sin \omega t$ | $\omega/(s^2 + \omega^2)$ |
| $\cos \omega t$ | $s/(s^2 + \omega^2)$ |
| $u(t - a)$ (Heaviside step) | $e^{-a s}/s$ |
| $\delta(t - a)$ (Dirac delta) | $e^{-a s}$ |

**Linearity.** $\mathcal{L}\{a f + b g\} = a F + b G$.

**Derivative rule.** $\mathcal{L}\{f'(t)\} = s F(s) - f(0)$. For the second derivative: $\mathcal{L}\{f''(t)\} = s^2 F(s) - s f(0) - f'(0)$. This is the key property: differentiation in $t$ becomes multiplication by $s$ (plus terms involving the initial conditions). An $n$-th order ODE in $t$ becomes an $n$-th degree algebraic equation in $s$.

**Integration rule.** $\mathcal{L}\{\int_0^t f(\tau) d\tau\} = F(s)/s$.

**Convolution.** $\mathcal{L}\{f * g\} = F(s) G(s)$, where $f * g = \int_0^t f(\tau) g(t - \tau) d\tau$. This is the dual property to the derivative rule: convolution in $t$ becomes multiplication in $s$.

**Heaviside step function.** $u(t - a) = 0$ for $t < a$, $1$ for $t \ge a$. Models a switch that closes at $t = a$. Its transform $e^{-a s}/s$ multiplies any $F(s)$ by $e^{-a s}$, which corresponds to a delay in time.

**Dirac delta.** $\delta(t - a)$ is a "spike" of unit area at $t = a$. Its transform is $e^{-a s}$. The response of a linear system to a delta is the *impulse response*, which is the system's Green's function.

**Solving an ODE by Laplace transform.** The procedure:
1. Take the Laplace transform of both sides of the ODE, using the derivative rule to handle $f', f''$, etc.
2. Substitute the initial conditions.
3. Solve the resulting algebraic equation for $F(s)$.
4. Take the inverse Laplace transform (often using partial fractions) to get $f(t)$.

**Example: RC circuit.** $RC V_C' + V_C = V_s u(t)$, $V_C(0) = 0$. Transform: $RC (s F - 0) + F = V_s / s$, so $F(RCs + 1) = V_s / s$, $F = V_s / (s(RCs + 1)) = (V_s/RC) \cdot 1/(s(s + 1/RC))$. Partial fractions: $F = V_s [1/s - 1/(s + 1/RC)]/RC$... actually let me redo. $F = V_s/(s \cdot RC) \cdot 1/(s + 1/RC)$. Write as $A/s + B/(s + 1/RC)$: $V_s/(s(RCs+1)) = A/s + B/(s+1/RC) \Rightarrow V_s = A(RCs+1) + B s$. At $s = 0$: $V_s = A$. At $s = -1/RC$: $V_s = -B/(RC) \Rightarrow B = -RC V_s$. So $F = V_s/s - V_s/(s + 1/RC)$. Inverse: $V_C(t) = V_s (1 - e^{-t/RC})$.

**Example: damped oscillator.** $\ddot{x} + 2 \gamma \dot{x} + \omega_0^2 x = 0$, $x(0) = x_0$, $\dot{x}(0) = 0$. Transform: $s^2 X - s x_0 + 2 \gamma (s X - x_0) + \omega_0^2 X = 0$. Solve: $X(s) = (s x_0 + 2 \gamma x_0)/(s^2 + 2 \gamma s + \omega_0^2)$. Inverse: underdamped case, $x(t) = e^{-\gamma t}(x_0 \cos \omega_d t + (x_0 \gamma/\omega_d) \sin \omega_d t)$.

**The transfer function.** For a linear ODE with input $u(t)$ and output $y(t)$, the transfer function is $H(s) = Y(s)/U(s)$ (with zero initial conditions). The transfer function encodes the system's response: $Y(s) = H(s) U(s)$. The impulse response is the inverse Laplace of $H(s)$. The frequency response is $H(i \omega)$.

**Why Laplace is so useful.** Initial conditions are built in (no need to find homogeneous + particular separately). Discontinuous forcing (steps, impulses) is handled cleanly. The algebraic equation in $s$ can be solved by standard methods (partial fractions), and the inverse is read off a table.

## Key Ideas
- Laplace transform: $F(s) = \int_0^\infty f(t) e^{-s t} dt$.
- Derivative rule: $\mathcal{L}\{f'\} = s F - f(0)$.
- Convolution theorem: $\mathcal{L}\{f * g\} = F(s) G(s)$.
- Heaviside step $u(t-a)$ corresponds to $e^{-as}/s$ in $s$.
- Solving an ODE: transform, solve algebraically, invert.

## Worked Examples
**Example 1 — $y' + 3 y = 6$, $y(0) = 0$.** Transform: $s Y - 0 + 3 Y = 6/s$, so $Y(s + 3) = 6/s$, $Y = 6/(s(s+3)) = 2/s - 2/(s+3)$. Inverse: $y(t) = 2(1 - e^{-3 t})$.

**Example 2 — $y'' + 4 y = \sin 2 t$, $y(0) = y'(0) = 0$.** Transform: $s^2 Y + 4 Y = 2/(s^2 + 4)$, so $Y = 2/((s^2 + 4)^2)$. Inverse: this is a known transform — $\mathcal{L}^{-1}\{2/(s^2+4)^2\} = (1/4)(\sin 2 t - 2 t \cos 2 t)$. (Or use a more detailed table.)

**Example 3 — Step response of first-order system.** $y' + 2 y = 5 u(t - 1)$, $y(0) = 0$. Transform: $s Y + 2 Y = 5 e^{-s}/s$. So $Y = 5 e^{-s}/(s(s+2)) = (5/2) e^{-s} [1/s - 1/(s+2)]$. Inverse: $y(t) = (5/2)[1 - e^{-2(t-1)}] u(t-1)$. The response kicks in at $t = 1$ and rises exponentially.

## Common Misconceptions
- **"Laplace transform works for all $f(t)$."** No — $f$ must be of exponential order (not grow faster than $e^{a t}$ for some $a$) for the integral to converge. Most physical signals are fine.
- **"Laplace replaces the ODE method."** It is a complementary method. It is best for constant-coefficient ODEs with step or impulse forcing; it is less useful for variable-coefficient equations.
- **"The inverse Laplace is a real integral."** It is a contour integral in the complex $s$-plane. In practice, you use partial fractions and a table.
- **"$f(0^-)$ and $f(0^+)$ are the same."** Not necessarily, if the forcing is discontinuous. The Laplace transform uses $f(0^-)$ (the value just before $t = 0$).

## Connections
Laplace transforms are the language of control theory, signal processing, and circuit analysis. The transfer function $H(s)$ generalises to frequency response $H(i \omega)$ in *Waves and Optics* (Fourier transform) and to the propagator in *Quantum Mechanics*. The convolution theorem is the basis of linear systems theory. The Dirac delta appears as the impulse response and is generalised to distributions in *Real Analysis*.

## Quick Check
1. State the derivative rule for the Laplace transform.
2. Find $\mathcal{L}\{t^2\}$.
3. Use Laplace to solve $y' + y = 1$, $y(0) = 0$.
4. What is the transfer function of a system $y' + a y = b u$?
5. Why is the Heaviside step function useful in circuit analysis?

## Takeaway
- Laplace transform: $F(s) = \int_0^\infty f(t) e^{-s t} dt$.
- Derivative rule: $\mathcal{L}\{f'\} = s F - f(0)$ — turns ODEs into algebra.
- Heaviside step and Dirac delta handle discontinuous forcing.
- Convolution theorem: $\mathcal{L}\{f * g\} = F G$.
- Inverse Laplace is read off a table, often via partial fractions.
