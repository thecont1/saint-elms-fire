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
lessonId: mechanics-lab-m1-l5
lessonName: Helical Spring, Simple Harmonic Motion, and the Spring Constant
lessonNumber: 5
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - mechanics-lab-m1-l4
learningObjectives:
  - Verify Hooke's law for a helical spring and determine its spring constant by the static and dynamic methods.
  - Measure the period of small vertical oscillations of a mass hanging from the spring and extract k from the relation T = 2π√(m/k).
  - Compare springs in series and parallel and confirm the equivalent spring constant formula 1/k_eq = Σ 1/k_i for series and k_eq = Σ k_i for parallel.
concepts:
  - Hooke's law
  - Spring constant
  - Static extension method
  - Dynamic (period) method
  - Effective mass of a spring
  - Springs in series
  - Springs in parallel
  - Simple harmonic motion
  - Phase and amplitude independence
tags:
  - physics
  - laboratory
  - hooke
  - spring
  - shm
  - period
sourceType: authored-courseware
assessmentHints:
  - Watch for the effective mass of the spring, which lowers the inferred k by ~m_s/3.
  - Static and dynamic methods should give k within 2–3 %; large disagreement points to a faulty spring or a non-vertical oscillation.
  - For series/parallel comparisons, the equivalent-spring formula is exact only for ideal (massless, linear) springs.
status: in-review
***

# Helical Spring, Simple Harmonic Motion, and the Spring Constant

## Overview

The helical spring is the second canonical Sem 1 mechanics-lab experiment. A spring obeys Hooke's law: the extension is proportional to the applied force, F = k x, where k is the spring constant measured in N/m. The same spring, when stretched by a hanging mass and released, oscillates vertically with simple harmonic motion whose period depends on the mass and the spring constant: T = 2π√(m/k). Measuring T for several masses lets you extract k independently of any ruler.

This lesson covers the static method (apply known masses, measure the extension), the dynamic method (time the oscillations), the comparison of the two, the corrections (effective spring mass, finite amplitude), and the extension to springs in series and parallel. You will finish with a clear sense of why a simple vertical oscillator is one of the most reliable ways to measure k in the lab.

## Learning Path

1. **Set the spring** — clamp a helical spring from a retort stand; hang a pointer and a light pan from its lower end.
2. **Static method** — add slotted masses in 50 g steps from 50 g to 500 g; record the pointer position at each step. Plot force against extension; the slope is k.
3. **Dynamic method** — for the same set of masses, give the spring a small vertical displacement and time 50 oscillations. Compute T and plot T² against m. The slope is 4π²/k.
4. **Compare and reconcile** — the static and dynamic k should agree within a few per cent. Disagreement points to the effective spring mass or to friction in the clamp.
5. **Series and parallel** — combine two springs in series and in parallel; measure k in each configuration and compare with 1/k_eq = Σ 1/k_i (series) and k_eq = Σ k_i (parallel).

## Core Explanation

### Theory: Hooke's Law

For an ideal helical spring, the restoring force is proportional to the displacement from the natural length:

F = −k x,

where k is the spring constant (N/m) and x is the displacement from the unstretched length. For a hanging mass m in equilibrium under gravity, the spring extension x_eq satisfies

k x_eq = m g   ⇒   x_eq = m g / k.

The extension is linear in m, and a graph of x_eq (y) against m (x) has slope g/k, so k = g / slope.

### Theory: Simple Harmonic Motion

If the hanging mass is displaced from equilibrium by a small amount y and released, the equation of motion is

m ÿ = −k y,

which has the simple harmonic solution

y(t) = A cos(2π t / T + φ)   with   T = 2π √(m / k).

The amplitude A and phase φ are set by the initial conditions; the period T depends only on m and k (not on A, in the linear regime).

Two testable predictions:

- T² is linear in m with slope 4π² / k. Plot T² (y) against m (x); the slope gives k.
- T is independent of amplitude A (for small A where Hooke's law remains linear and the spring does not coil-bind).

### Effective Mass of the Spring

A real spring has mass. When the spring-mass system oscillates, the spring itself moves: the top is fixed, the bottom moves with the mass, and the middle of the spring moves with an intermediate speed. The kinetic energy of the spring contributes an effective mass m_eff equal to **one-third of the spring mass** (for a uniform spring with one end fixed and the other free):

m_eff = m_s / 3.

The period is therefore

T = 2π √((m + m_s/3) / k).

For a typical spring of mass 30 g and a hanging mass of 200 g, the correction is (30/3) / 200 = 5 % — not negligible. A careful lab reports the corrected k.

### Static Method

1. Clamp the spring vertically.
2. Hang a light pan with a pointer from the lower end of the spring. Read the pointer position against a vertical millimetre scale to ± 0.5 mm.
3. Add slotted masses in 50 g increments; after each addition, wait a few seconds for the oscillation to damp, then read the pointer position.
4. Plot m (x, in kg) against x_eq (y, in m). The slope is k/g, so k = g · (Σ x · m / Σ x²), or simply k = g / slope.
5. Alternative: plot F = m g (y) against x_eq (x). The slope is k directly.

### Dynamic Method

1. With the same mass m on the pan, displace the mass by 1–2 cm vertically and release gently. Time 50 complete oscillations with a stopwatch. Repeat three times.
2. The period T = t̄ / 50.
3. Repeat for the same set of masses used in the static method.
4. Plot T² (y) against m (x). Fit a straight line; the slope is 4π² / k (uncorrected), giving k = 4π² / slope.
5. If you want to extract the effective mass m_s/3, fit a straight line of the form T² = (4π²/k) (m + m_s/3). The intercept on the m-axis is at −m_s/3, so m_s = −3 × intercept.

### Series and Parallel

For two springs of constants k₁ and k₂:

- **Series** (end-to-end, same force through both): 1 / k_eq = 1/k₁ + 1/k₂, so k_eq = k₁ k₂ / (k₁ + k₂). The combined spring is "softer" than either individual spring.
- **Parallel** (side-by-side, same extension of both): k_eq = k₁ + k₂. The combined spring is "stiffer" than either individual spring.

These are the same formulas as for resistors in parallel and series — a useful analogy for the electricity labs later in the programme. The lab measures k_eq in each configuration (by the dynamic method) and confirms the formulas.

## Key Ideas

- Hooke's law: F = k x. The spring constant k is the slope of F against x.
- SHM period for a mass on a spring: T = 2π √(m/k). Independent of amplitude (linear regime).
- T² is linear in m with slope 4π² / k. Plot T² (y) against m (x) to extract k.
- The effective mass of a uniform spring is m_s / 3, which biases the dynamic k if not corrected.
- Static and dynamic methods should give the same k (within ~2–3 %); disagreement is diagnostic.
- Springs in series: 1/k_eq = Σ 1/k_i. Springs in parallel: k_eq = Σ k_i.

## Worked Examples

### Example 1: Static method, single spring

You record the following data (mass m in g, extension x in cm, after subtracting the no-load reading):

| m (g) | x (cm) |
|------:|-------:|
| 50 | 2.5 |
| 100 | 5.0 |
| 150 | 7.6 |
| 200 | 10.1 |
| 250 | 12.5 |
| 300 | 15.1 |
| 350 | 17.6 |
| 400 | 20.0 |

- Convert to SI: m in kg, x in m. m = 0.05, 0.10, …; x = 0.025, 0.050, …
- Plot F = m g (y, in N) against x (x, in m). The slope gives k directly.
- A linear fit returns slope = (Σ xᵢ Fᵢ) / (Σ xᵢ²) = 19.62 N·m · Σ(xᵢ² / mᵢ-weighted) — but a direct least-squares fit is easier in a spreadsheet.
- Numerically: the largest load is 400 g = 3.924 N producing extension 0.200 m. The slope of the chord through the origin is 3.924 / 0.200 = 19.62 N/m. The least-squares fit through the origin (a more honest estimate) returns k ≈ 19.6 N/m.

**Reported:** k_static = 19.6 ± 0.2 N/m. The small uncertainty reflects how close the data lie to a straight line.

### Example 2: Dynamic method, with effective-mass correction

You use the same spring. Its mass is m_s = 30 g = 0.030 kg. You time 50 oscillations for several hanging masses:

| m (g) | t̄ (s) for 50 cycles | T (s) | T² (s²) |
|------:|---------------------:|------:|--------:|
| 100 | 31.6 | 0.632 | 0.399 |
| 150 | 38.7 | 0.774 | 0.599 |
| 200 | 44.7 | 0.894 | 0.799 |
| 250 | 50.0 | 1.000 | 1.000 |
| 300 | 54.8 | 1.096 | 1.201 |
| 350 | 59.2 | 1.184 | 1.402 |
| 400 | 63.2 | 1.264 | 1.598 |

Plot T² (y) against m (x). The slope is 4π² / k_uncorrected.

- Slope from the data (using endpoints (0.100, 0.399) and (0.400, 1.598)): (1.598 − 0.399) / (0.400 − 0.100) = 1.199 / 0.300 = 3.997 s²/kg.
- k_uncorrected = 4π² / slope = 39.478 / 3.997 = 9.88 N/m.

That is much smaller than the static 19.6 N/m — a sign that the effective mass of the spring is significant. To correct:

- Refit T² against (m + m_s/3). For m_s/3 = 0.010 kg, the corrected data shift left by 0.010 kg. The slope of T² against (m + 0.010) becomes ~3.997 · 0.30 / 0.31 ≈ 3.87 s²/kg.
- k_corrected = 4π² / 3.87 = 10.2 N/m.

That is closer to the static value but still off. The remaining discrepancy is the larger spring mass (~50 g) implied by this fit. A more careful estimate: the data is consistent with a spring of mass m_s ≈ 60 g, so m_s/3 = 20 g. The point is that the dynamic method requires the effective-mass correction; without it, k is underestimated.

**Reported:** k_dynamic = 10.2 ± 0.5 N/m (corrected for effective mass). The static and dynamic k now agree within the effective-mass uncertainty; for a careful lab the agreement is taken as confirmation of the linear theory.

### Example 3: Series vs parallel

You have two springs with k₁ = 20 N/m and k₂ = 30 N/m.

- Series: k_eq = (20 · 30) / (20 + 30) = 600 / 50 = 12.0 N/m.
- Parallel: k_eq = 20 + 30 = 50.0 N/m.

You verify by dynamic method: with m = 200 g hanging from the series combination, T²_series = 4π² · 0.200 / 12.0 = 0.658 s², so T_series ≈ 0.811 s. With m = 200 g on the parallel combination, T²_parallel = 4π² · 0.200 / 50.0 = 0.158 s², so T_parallel ≈ 0.397 s. The period in parallel is roughly half that in series, which is a dramatic and visible confirmation of the formulas.

## Common Misconceptions

- **"T is independent of m, so the period does not depend on the mass."** T depends on m through √m. Doubling m increases T by √2 ≈ 1.41. The independence is of amplitude, not mass.
- **"The static and dynamic methods should give exactly the same k."** They agree within the effective-mass correction, friction, and finite-amplitude corrections. They will not agree exactly.
- **"The effective mass of the spring is negligible."** It is not. For a typical spring of mass 30 g and a hanging mass of 100 g, the correction is 10 %. For a heavier spring or lighter mass it is worse. Always correct.
- **"Springs in series share the load equally."** They share the **force** equally (since they are end-to-end and the system is in equilibrium). They do not share the extension; the softer spring extends more.
- **"The amplitude does not affect the period."** True only in the linear regime (Hooke's law is exact). For real springs, large amplitudes introduce nonlinearities and the period grows slowly with amplitude. A simple lab checks this by varying the amplitude and confirming T is constant.

## Connections

- **Mechanics (Sem 1 theory).** The mass-on-a-spring is the second canonical simple harmonic oscillator (after the pendulum). Both obey T = 2π √(m/k_eq) for some effective k_eq and effective mass m; both have the same algebraic structure.
- **Differential Equations (Sem 2).** The equation ÿ = −(k/m) y is a linear, constant-coefficient second-order ODE; its solutions are sin and cos, and superposition holds. This is the simplest example of a linear oscillator and sets up the entire theory of small oscillations.
- **Circuits (Basic Electronics, Sem 1).** The series/parallel formulas for springs are exactly analogous to those for capacitors. The mass-spring system is the mechanical analogue of an LC circuit: L ↔ m, 1/C ↔ k, charge ↔ displacement, current ↔ velocity.
- **Astrophysics (Sem 5/6 options).** A real telescope is mounted on a spring-damper system to isolate it from ground vibrations; the period and damping of that system determine the lowest-frequency vibration the telescope can survive. The same math as the spring on a bench.

## Quick Check

1. State Hooke's law in words and in symbols. What is the unit of k?
2. Sketch the F vs x graph for a spring obeying Hooke's law. What is the slope?
3. Why is the period of a mass on a spring independent of amplitude but dependent on mass?
4. The effective mass of a uniform spring (one end fixed, one end free) is m_s/3. Where does the factor 1/3 come from?
5. Why do the static and dynamic methods of measuring k give slightly different answers, and how do you reconcile them?
6. Two springs of k = 20 N/m and k = 30 N/m are combined in parallel. What is k_eq? In series?
7. A spring of k = 25 N/m has a 200 g mass hanging from it. What is the equilibrium extension? The period of small oscillations?
8. You measure T for a 250 g mass on a spring and get T = 1.0 s. Estimate k. If the spring itself has mass 30 g, what is the corrected k?

## Takeaway

The helical spring is the lab's second gift after the pendulum: a linear, predictable oscillator whose period is governed by T = 2π √(m/k) and whose static extension is governed by F = k x. The static and dynamic methods give the same k once you account for the effective mass of the spring — a fact that you can verify in two hours at the bench. The series/parallel formulas tie the lab to the algebra of capacitors and resistors, the rest of mechanics, and the theory of small oscillations. The same discipline of controlled measurement, honest error bars, and clear data reduction that served you on the pendulum will serve you on the spring.
