***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: mathematics
subjectName: Mathematics
courseId: mathematics-lab-using-python-ii
courseName: Mathematics Lab using Python II
moduleId: mathematics-lab-using-python-ii-module-1
moduleName: Scientific Computing in Python — Linear Algebra, ODEs and Integration
lessonId: mathematics-lab-using-python-ii-m1-l3
lessonName: Initial-Value Problems — Euler, Runge–Kutta and the Order of Accuracy
lessonNumber: 3
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - mathematics-lab-using-python-ii-m1-l2
learningObjectives:
  - Implement explicit Euler and classical fourth-order Runge–Kutta for first-order systems and measure their convergence orders (1 and 4) by step-halving.
  - Diagnose stability failure on a fast-decay equation and confirm the Euler stability limit h < 2/λ.
  - Use conserved quantities (oscillator energy, Lotka–Volterra invariant) as long-time diagnostics of integrator quality.
concepts:
  - Initial-value problem
  - Explicit Euler method
  - Runge–Kutta methods
  - Order of accuracy
  - Stability limit
  - Phase portraits
tags:
  - mathematics
  - laboratory
  - python
  - ordinary-differential-equations
  - numerical-methods
sourceType: authored-courseware
assessmentHints:
  - Global error scales as h^p; halve h and the error should drop by 2^p (p = 1 for Euler, p = 4 for RK4).
  - Euler applied to y' = −λy is stable only for h < 2/λ; beyond that the "decaying" solution grows.
  - Conserved quantities are free diagnostics: energy drift for oscillators, invariant drift for predator–prey.
status: in-review
***

# Initial-Value Problems — Euler, Runge–Kutta and the Order of Accuracy

## Overview

An initial-value problem asks: given the state now and the law of change, what happens next? Numerically, the answer is a step-by-step construction, and the construction comes with two questions that never go away: how wrong is each step (accuracy), and does the wrongness stay bounded (stability)? This lesson builds the two textbook integrators — explicit Euler and classical RK4 — measures their convergence orders by the only honest method (step-halving against an exact solution), watches Euler blow up on a stiff decay exactly where theory predicts, and then uses conserved quantities as long-time lie detectors on systems with no closed-form trajectory.

## Learning Path

1. **Set up first-order systems** (higher-order ODEs reduced to first order).
2. **Implement explicit Euler and RK4;** run both on the harmonic oscillator, whose exact solution is known.
3. **Convergence study:** halve h repeatedly; extract the order p from the error ratios.
4. **Stability experiment:** fast exponential decay; find Euler's blow-up threshold and compare with h = 2/λ.
5. **Long-time diagnostics:** energy drift of Euler vs RK4 on the oscillator over hundreds of periods.
6. **Application:** Lotka–Volterra predator–prey — phase portrait, closed orbits, invariant drift.

## Core Explanation

### Theory: Two integrators

For y' = f(t, y), y(t_0) = y_0:

- Explicit Euler: y_{n+1} = y_n + h f(t_n, y_n). One function evaluation per step; local error O(h²), global O(h) — first order.
- Classical RK4: with k_1 = f(t_n, y_n), k_2 = f(t_n + h/2, y_n + hk_1/2), k_3 = f(t_n + h/2, y_n + hk_2/2), k_4 = f(t_n + h, y_n + hk_3): y_{n+1} = y_n + (h/6)(k_1 + 2k_2 + 2k_3 + k_4). Four evaluations per step; global error O(h⁴) — fourth order.

Order is measured, not assumed: integrate to a fixed T at h, h/2, h/4...; if the error against the exact solution drops by 2^p each time, the observed order is p. One caution: once the error nears machine precision (or the problem's own rounding floor), the ratios collapse — record where that happens and stop claiming digits.

### Theory: Stability of the model equation

The test equation y' = −λy (λ > 0) has the decaying exact solution e^{−λt}. Euler gives y_{n+1} = (1 − λh) y_n: bounded decay requires |1 − λh| ≤ 1, i.e. h ≤ 2/λ. Beyond that, the factor's modulus exceeds one and the numerical solution grows while the true one vanishes — and oscillates in sign for λh > 2. RK4's stability region extends to λh ≈ 2.785 on the negative real axis — wider, not unlimited. The lesson generalises: every explicit method has a stability boundary, and "accurate per step" does not imply "stable over time".

### Theory: Conserved quantities as diagnostics

The oscillator y'' = −ω²y conserves E = ½(y'² + ω²y²); Lotka–Volterra (x' = αx − βxy, y' = δxy − γy) conserves H = δx − γ ln x + βy − α ln y. Neither integrator conserves these exactly: Euler's energy grows systematically (its amplitude gain per step is √(1 + (ωh)²)); RK4 drifts far more slowly and without a fixed sign. Tracking E(t) or H(t) over long runs turns qualitative "does it look right?" into a measured drift rate.

### Numerical Setup (Apparatus)

- Python: numpy, matplotlib; own implementations of Euler and RK4 (vectorised over the state).
- Oscillator: y'' = −y, y(0) = 1, y'(0) = 0 → y = cos t; run to T = 20; h = 0.2, 0.1, 0.05, 0.025.
- Stiff decay: y' = −50y, y(0) = 1, t ∈ [0, 2]; Euler with h = 0.05, 0.04, 0.03; RK4 for comparison.
- Lotka–Volterra: α = 2/3, β = 4/3, δ = 1, γ = 1, x(0) = 0.5, y(0) = 0.5; RK4 with h = 0.01 to T = 60; phase portrait and H(t).
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Reduce the oscillator** to a first-order system; implement Euler and RK4; verify against cos t at T = 20.
2. **Convergence table:** error |y_num(T) − cos T| at the four step sizes; compute successive ratios and the observed order p = log₂(ratio).
3. **Stability sweep:** Euler on y' = −50y at h = 0.05 (above 2/λ = 0.04), 0.04 (borderline), 0.03 (inside); plot the three trajectories with the exact decay.
4. **Long-time energy:** run both integrators on the oscillator to T = 200 with h = 0.05; plot E(t)/E(0) for each.
5. **Predator–prey:** integrate and plot the phase portrait; overlay several initial conditions to show the family of closed orbits; plot the drift of H(t).
6. **Cross-check with scipy.integrate.solve_ivp** (RK45, tight tolerance) on the predator–prey run; quantify agreement.

### Analysis

#### Measured orders

Oscillator at T = 20, RK4: errors 1.6 × 10⁻⁵ (h = 0.2), 1.0 × 10⁻⁶ (h = 0.1), 6.3 × 10⁻⁸ (h = 0.05) — ratios 16.0 and 15.9, observed order 4.0 to the quoted digits. Euler at smaller steps (h = 0.01, 0.005): amplitude errors 0.105 and 0.051 — ratio 2.05, order 1, and the absolute size explains why nobody runs Euler on oscillators: at h = 0.01 the amplitude is already 10% wrong at T = 20.

#### Stability, observed

With λ = 50, the Euler stability limit is h = 0.04. At h = 0.05 the computed solution oscillates with growing amplitude — |y(2)| ≈ 10⁷ against the true e^{−100} ≈ 0 — a catastrophe produced by a 25% step-size error. At h = 0.03 it decays properly. RK4 handles h = 0.05 without drama (λh = 2.5 < 2.785). The threshold is not a grey area: the theory's 2/λ is the exact boundary of boundedness for this method.

#### Long-time drift

At h = 0.05 over 200 time units (~32 periods), Euler's energy ratio E(T)/E(0) reaches about e^{Th} = e^{10} ≈ 2 × 10⁴ (an amplitude growth of e^5 ≈ 150) — the orbit is a growing spiral. RK4 at the same h stays within a few parts in 10⁴ of E(0), with no systematic trend visible. For qualitative phase portraits Euler is unusable; for quantitative long-time work even RK4's slow drift matters (symplectic methods are the proper tool — noted, not built, here).

#### Predator–prey

The orbits close in the phase plane, nested around the fixed point (γ/δ, α/β) = (1, 2/3); RK4 with h = 0.01 keeps H(t) within ~10⁻⁴ relative over T = 60, and the solve_ivp cross-check lands on the same trajectory to plotting precision. The closed orbits visualise the theory's conserved quantity; the drift plot quantifies the integrator's honesty.

### Sources of Error

- **Order misclaim:** computing the ratio only once (two step sizes) can land on a coincidental number; use three or more refinements and quote the plateau.
- **Comparing at different T:** convergence orders hold at fixed final time; comparing h = 0.1 at T = 10 with h = 0.05 at T = 20 measures the wrong thing.
- **Stability masquerading as inaccuracy:** a blow-up beyond the stability limit is not improved by tighter rounding or better coding; it demands a smaller h or a better method.
- **Roundoff floor:** for p = 4 at h = 0.025 the error approaches 10⁻⁹ and below; further halving can *increase* total error. Record the floor; don't force the trend.
- **Invariant misuse:** H(t) for Lotka–Volterra requires positive x, y; a bad step that pushes a population negative corrupts the logarithms before the trajectory visibly fails.

## Key Ideas

- Order is an empirical claim: halve h, watch the error drop by 2^p, quote the measured p.
- Euler is first order and conditionally stable (h < 2/λ on the decay equation); RK4 is fourth order with a wider but finite stability region.
- The exact-solution comparison, the convergence table, and the conserved-quantity drift are three independent instruments; a trustworthy result survives all three.
- Long-time behaviour is its own regime: methods that are accurate per step can still distort orbits qualitatively over many periods.
- Stability boundaries are sharp and method-specific; crossing them produces growth, not just error.

## Worked Examples

#### Example 1: Reading a convergence table

RK4 errors at T = 20: 1.6 × 10⁻⁵, 1.0 × 10⁻⁶, 6.3 × 10⁻⁸ for h = 0.2, 0.1, 0.05. Ratios 16.0, 15.9 → p = log₂(16) = 4.0. The next halving would reach ~4 × 10⁻⁹, still above the roundoff floor — one more point is legitimate; the one after it is not.

#### Example 2: Predicting the blow-up

y' = −50y with Euler at h = 0.05: amplification factor |1 − 2.5| = 1.5 per step, so after 40 steps |y| ≈ 1.5⁴⁰ ≈ 1.1 × 10⁷, alternating in sign, while the truth is e^{−100}. The computation "worked" — every step executed exactly as specified; the method was outside its stability region. Theory located the boundary at h = 0.04 before the experiment ran.

#### Example 3: Energy drift arithmetic

Euler on the unit oscillator: the step matrix has eigenvalues 1 ± ih, each of modulus √(1 + h²), so after N = T/h steps the energy scales as (1 + h²)^{T/h} ≈ e^{Th}. At T = 200, h = 0.05: e^{10} ≈ 2.2 × 10⁴ — and the amplitude as its square root, e^5 ≈ 150. The closed form predicts the drift before the run; the simulation's measured ratio agrees to within the discretisation corrections.

## Common Misconceptions

- **"Smaller h always means better."** Past the roundoff floor, more steps add rounding faster than they remove truncation; the error curve has a minimum.
- **"RK4 is exact for small enough h."** It is fourth order — errors shrink as h⁴, never to zero at finite h; long-time drift remains.
- **"An unstable run is a coding bug."** Instability is a property of method plus step size plus equation; the code can be perfect.
- **"Euler is fine if the solution is smooth."** The oscillator's solution is perfectly smooth; Euler's spiral is purely a method artifact.
- **"Phase portraits only need qualitative accuracy."** A method that spirals outward changes closed orbits into growing ones — a topological lie, not a small error.

## Connections

- **Numerical Methods theory:** Taylor-series derivations of the order estimates and stability regions appear here as measured slopes and observed thresholds.
- **Lesson 2:** the oscillator's exact solution is sinusoidal — the chain's normal modes each obey this same equation, so this integrator simulates them.
- **Lesson 4 (PDEs):** the heat equation's time stepping reuses the stability logic, with a mesh-dependent limit.
- **Physics labs:** every damped oscillator and orbit integration in the physics curriculum is this lesson with different f.

## Quick Check

1. Write the classical RK4 update and state its order of accuracy.
2. How do you measure convergence order empirically, and what ratios do Euler and RK4 give?
3. What is Euler's stability limit for y' = −λy, and what does violation look like?
4. Why is conserved-quantity drift a better long-time diagnostic than pointwise error?
5. Where does the error-vs-h curve bottom out, and why?

## Takeaway

Step-by-step integration converts existence theorems into numbers, and the conversion has a price list: order tells you what accuracy costs in step size, stability tells you when the price becomes infinite, and conserved quantities audit the whole transaction over long horizons. Measure all three, quote what you measured, and the integrators become instruments instead of incantations.
