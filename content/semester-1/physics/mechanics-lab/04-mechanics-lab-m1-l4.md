***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: mechanics-lab
courseName: Mechanics Lab
moduleId: mechanics-lab-module-1
moduleName: Measurement and Uncertainty
lessonId: mechanics-lab-m1-l4
lessonName: The Simple Pendulum and the Measurement of g
lessonNumber: 4
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - mechanics-lab-m1-l3
learningObjectives:
  - Determine the acceleration due to gravity g at the laboratory location using a simple pendulum.
  - Verify the small-angle period law T = 2π√(L/g) by varying length and amplitude systematically.
  - Quantify the random and systematic uncertainties in T, L, and the derived value of g.
concepts:
  - Simple pendulum
  - Period and frequency
  - Small-angle approximation
  - Sin(θ) ≈ θ
  - Acceleration due to gravity
  - Length measurement with vernier scale
  - Counting oscillations with a stopwatch
  - Error propagation
tags:
  - physics
  - laboratory
  - pendulum
  - gravity
  - period
  - small-angle
sourceType: authored-courseware
assessmentHints:
  - Expect a graph of T² against L producing a straight line through the origin.
  - Common exam-style error: students forget to use effective length (top of suspension to centre of bob).
  - Watch for the systematic error introduced by the finite amplitude when θ is not small.
status: in-review
***

# The Simple Pendulum and the Measurement of g

## Overview

The simple pendulum is a child of Archimedes and Galileo, and yet it remains the cleanest first-year experiment for measuring the local acceleration due to gravity. A small metal bob on a thin inextensible string swings in a plane; its period depends only on its effective length and on g, not on the mass of the bob or (to first order) on the amplitude. By measuring the period for several lengths and fitting a straight line to T² against L, you extract g with relative ease and with an uncertainty small enough to be instructive.

This lesson walks through the apparatus, the small-angle theory, the procedure (counting many oscillations to reduce timing error), the data analysis (linear fit with uncertainties), and the discussion that separates random error from systematic error. It also flags the limits of the small-angle approximation, so you know when the simple formula is no longer trustworthy and how to correct for it.

## Learning Path

1. **Set the apparatus** — clamp a retort stand, hang a ~1 m string with a small dense bob, measure the effective length with a metre scale, choose a small amplitude (~5°).
2. **Time the oscillations** — for each length, release the bob gently and time at least 50 complete oscillations with a digital stopwatch (or photogate if available). Repeat three times to estimate the random error in T.
3. **Vary the length** — repeat for 6–8 different lengths between 30 cm and 120 cm, keeping the amplitude small.
4. **Process the data** — compute T, T², the mean T for each length, and the standard deviation across repeats.
5. **Fit and report** — plot T² against L, fit a straight line through (approximately) the origin, extract g from the slope, and propagate the fit uncertainty into a final value g = (9.7 ± 0.1) m/s² or similar.

## Core Explanation

### Theory

A simple pendulum of effective length L and bob mass m swinging through a small angle θ (in radians) obeys the equation of motion

m L θ̈ = −m g sin θ ≈ −m g θ  for |θ| ≪ 1,

which has the simple-harmonic solution

θ(t) = θ₀ cos(2π t / T)   with   T = 2π √(L / g).

Two predictions are immediate and testable in the lab:

- The period T does **not** depend on the bob mass m. Doubling the mass should not change T (within experimental error).
- T² is **linear in L** with slope 4π²/g. A graph of T² on the y-axis against L on the x-axis is a straight line through the origin; the slope gives g.

The small-angle approximation sin θ ≈ θ has relative error of order θ²/6. At θ = 5° = 0.087 rad, the relative error is ~0.13 % — negligible. At θ = 15° = 0.262 rad, the relative error is ~1.14 % — visible in careful work. So the rule of thumb is: **keep the amplitude below ~10°** unless you plan to apply a finite-amplitude correction (see Common Misconceptions).

### Procedure

For each length L, do the following:

1. **Measure the effective length** L as the distance from the suspension point (top edge of the clamp) to the centre of the bob. Use a metre scale laid alongside the string. Read to the nearest mm.
2. **Set the amplitude** by displacing the bob sideways so that the string makes a small angle (≤ 10°) with the vertical. A simple way to calibrate the angle: the bob's horizontal displacement is approximately L sin θ ≈ L θ. For L = 1 m and θ = 5°, the displacement is ~8.7 cm.
3. **Release gently** from rest (no push) and let the pendulum settle for a few swings.
4. **Time N complete oscillations** with a stopwatch. Start the watch when the bob passes through the bottom of its swing moving in one direction; stop when it next returns to that point after N full cycles. N should be 50 or 100 for the length range used here; smaller N gives worse statistical precision.
5. **Repeat three times** for the same L to get an estimate of the random timing error.
6. **Record ambient conditions** — temperature, barometric pressure (the local value of g also depends weakly on latitude, altitude, and local geology; you do not need to correct for these, but mention them in the report).

### Data Reduction

For each L:
- Compute the mean time per N oscillations: t̄ = (t₁ + t₂ + t₃) / 3.
- Compute the period: T = t̄ / N.
- Compute the standard deviation σ_t and hence the standard error in T: σ_T = σ_t / (N √3) for three repeats (more carefully: σ_T = (1/N) · σ_t / √(n − 1) where n is the number of repeats).
- Compute T² and propagate the uncertainty: σ_{T²} = 2 T σ_T.

### Linear Fit and g

Plot T² (y, with error bars) against L (x). The expected linear relation

T² = (4π² / g) L

suggests a fit of the form y = m x with intercept fixed at zero (since the line should pass through the origin within experimental error; if it does not, that is a sign of a systematic error — see Common Misconceptions). The slope m = 4π² / g gives

g = 4π² / m.

The uncertainty in m can be estimated from the scatter of the data points, or computed formally from a least-squares fit that returns the standard error of the slope. The Christ University lab manual uses a simplified estimate based on the extreme slopes that fit the data; the formal weighted fit is preferred where a calculator or spreadsheet is available.

### Apparatus and Safety

- Retort stand, clamp, boss head
- ~1.2 m of inextensible string (nylon, no stretch)
- Metal bob (50–100 g, dense, compact)
- Metre scale (1 mm divisions)
- Vernier callipers (for bob diameter, so you can locate the centre)
- Digital stopwatch (resolution 0.01 s)
- Spirit level (to check the stand is vertical; a tilted suspension plane causes the period to vary with starting azimuth)
- Safety glasses (mandatory; the metal bob can hurt if it hits a finger)

## Key Ideas

- T = 2π √(L/g) is the small-angle period of a simple pendulum. The mass drops out.
- T² is linear in L; the slope is 4π² / g.
- Timing many oscillations (N = 50 or more) and repeating the timing several times drives down the random error in T.
- The small-angle approximation sin θ ≈ θ has a fractional error of order θ²/6. For θ ≤ 5° the error is below 0.2 %; for θ ≤ 10° it is below 0.5 %.
- Length is measured from the suspension point to the centre of the bob. Anything else (top of string, bottom of string, top of bob) is a systematic error source.
- Air drag, finite string mass, and a non-rigid clamp are all small but non-zero systematic effects.

## Worked Examples

### Example 1: Single-length quick estimate

A pendulum of effective length 1.000 m is timed for 50 complete oscillations. Three repeats give t = 100.42 s, 100.55 s, 100.39 s. Compute T, the random error in T, and the resulting g.

- Mean t̄ = (100.42 + 100.55 + 100.39) / 3 = 100.453 s
- Period T = t̄ / N = 100.453 / 50 = 2.0091 s
- Standard deviation of t: σ_t = √(Σ(t_i − t̄)² / (n − 1)) = √(((0.033)² + (−0.097)² + (0.063)²) / 2) = √(0.0174 / 2) = 0.093 s
- Standard error in T: σ_T = σ_t / (N √n) = 0.093 / (50 · √3) = 0.00107 s
- Relative error: σ_T / T = 0.05 %
- g = 4π² L / T² = 4π² · 1.000 / (2.0091)² = 39.4784 / 4.0365 = 9.779 m/s²
- Uncertainty in g: σ_g / g = 2 σ_T / T = 0.10 % ⇒ σ_g = 0.010 m/s²
- Reported: **g = (9.78 ± 0.01) m/s²**

This is about 0.3 % low compared to the accepted value for Bangalore (≈ 9.78 m/s²) — well within experimental error, and likely because Bangalore's elevation and latitude produce g slightly below 9.81.

### Example 2: Linear fit to a small data set

You collect the following (L in m, T in s):

| L (m) | T (s) | σ_T (s) |
|------:|------:|--------:|
| 0.300 | 1.110 | 0.005 |
| 0.500 | 1.421 | 0.005 |
| 0.700 | 1.681 | 0.005 |
| 0.900 | 1.904 | 0.005 |
| 1.100 | 2.106 | 0.005 |

Compute T², plot against L, and fit a straight line through the origin.

- T² values: 1.232, 2.019, 2.826, 3.625, 4.435 (s²)
- A fit constrained to pass through the origin gives slope

m = Σ(xᵢ yᵢ) / Σ(xᵢ²) = (0.300·1.232 + 0.500·2.019 + 0.700·2.826 + 0.900·3.625 + 1.100·4.435) / (0.09 + 0.25 + 0.49 + 0.81 + 1.21)
= (0.3696 + 1.0095 + 1.9782 + 3.2625 + 4.8785) / 2.85
= 11.4983 / 2.85 = 4.0345 s²/m

- Hence g = 4π² / m = 39.4784 / 4.0345 = 9.785 m/s²
- g ≈ 9.79 m/s²

The fit is clean; the points fall close to a straight line through the origin. (A real lab would also show small but non-zero scatter; in the worked example the data are too clean to be realistic — this is intentional, so that the mechanics of the fit are visible.)

### Example 3: Finite-amplitude correction

Suppose you accidentally used an amplitude of 20° = 0.349 rad. The exact period of a simple pendulum is

T_exact = T_small · (1 + θ₀²/16 + 11 θ₀⁴/3072 + …).

For θ₀ = 20° = 0.349 rad, the first correction is θ₀²/16 = 0.0076 — a 0.76 % increase. If you used T_small = 2.009 s, the true period is 2.024 s, and the g you would infer is **lower** than the true g by 1.5 % (because g ∝ 1/T², and (1/1.0076)² ≈ 1/1.0153). This is the kind of systematic error that a careful lab report catches and corrects.

## Common Misconceptions

- **"T depends on the mass of the bob."** It does not. The gravitational force on the bob is mg; the restoring torque is −mgL sin θ. The mass cancels in the equation of motion. Test this in the lab: change the bob and time again. The period should not change within timing error.
- **"The length is from the top of the string to the bottom of the bob."** The effective length is from the suspension point to the centre of mass of the bob. For a compact spherical bob, that's the centre. For an extended bob (a long cylinder, for example), it's the centre of the cylinder, not the bottom.
- **"A larger amplitude gives a longer period, so larger amplitude always reduces the inferred g."** The finite-amplitude correction always **increases** the period, so it always **decreases** the inferred g (since g ∝ 1/T²). But the effect is small below 10°.
- **"Stopwatch reaction time cancels when I time N oscillations."** It does not cancel exactly. A typical human reaction time is 0.2 ± 0.1 s. For N = 50 oscillations, the relative error from reaction time is ~0.4 % / 50 = 0.008 % — small but not zero. The remedy is to time N as large as possible, and where available, use a photogate timer.
- **"T is independent of amplitude, period squared is independent of amplitude."** Both are independent of amplitude **only in the small-angle limit**. As amplitude grows, the period grows slowly, and the simple relation breaks down.

## Connections

- **Mechanics (Sem 1 theory).** The pendulum is the canonical simple harmonic oscillator: it is a rotational analogue of a mass on a spring, and the algebra of its small oscillations is the algebra of the SHO in disguise.
- **Differential Equations (Sem 2).** The pendulum equation θ̈ = −(g/L) sin θ is a nonlinear second-order ODE; the small-angle limit is the linear ODE θ̈ = −(g/L) θ, whose solutions are the sine and cosine.
- **Astrophysics minor (Sem 1/2).** Pendulum clocks and the local value of g set the cadence of every ground-based observation; a 0.1 % error in g propagates into a 0.1 % error in any pendulum-based timing.
- **Numerical methods.** The full nonlinear pendulum θ̈ = −(g/L) sin θ has no closed-form solution; numerical methods (Runge-Kutta, symplectic integrators) become essential when the amplitude is large. This sets up the computational methods courses in later semesters.
- **History of physics.** The pendulum was the first precision timekeeper. Huygens built the first pendulum clock in 1656, reducing the daily drift of mechanical clocks from ~15 minutes to ~15 seconds — the precision that made the first accurate maps of the world possible.

## Quick Check

1. Why is T independent of bob mass?
2. What does a plot of T² against L look like, and what is its slope in terms of g?
3. How does the small-angle approximation enter the theory, and at what amplitude does it start to fail?
4. Why time 50 oscillations rather than just one?
5. What is the effective length of a pendulum, and what error do you introduce if you measure from the wrong point?
6. Estimate g for L = 0.800 m and T = 1.795 s (timed over 50 cycles). Is your result consistent with 9.81 m/s²?
7. A student reports g = 12.4 m/s². Identify at least two systematic errors that could produce such an outlier.

## Takeaway

The simple pendulum is the lab's gift to the first-year student: an apparatus that is easy to build, a theory that is easy to derive, and a result (g) that is easy to compare with a known value. The discipline of the lab is in the measurement — using the effective length, controlling the amplitude, timing many oscillations, and propagating the uncertainty honestly. Do this well and you will have measured g to better than 1 %; do it carelessly and the data will tell on you. The same discipline — controlled conditions, careful measurement, honest error bars — will serve you in every lab that follows.
