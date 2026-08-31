***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: nuclear-physics-lab
courseName: Nuclear Physics Lab
moduleId: nuclear-physics-lab-module-1
moduleName: Radioactivity, Counting, and Nuclear Spectra
lessonId: nuclear-physics-lab-m1-l4
lessonName: Half-Life Measurement and the Decay Curve
lessonNumber: 4
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - nuclear-physics-lab-m1-l3
learningObjectives:
  - Measure the half-life of a short-lived isotope (e.g. ²⁰⁶Bi, ⁸⁵ᵐKr, ¹³⁷Cs) by following the decay curve over several half-lives.
  - Verify the exponential decay law: N(t) = N_0 exp(−λ t).
  - Use the chi-squared test to assess the goodness of fit.
concepts:
  - Exponential decay
  - Half-life
  - Decay constant
  - Mean lifetime
  - Decay curve
  - Chi-squared test
  - Background subtraction
  - Dead time
tags:
  - physics
  - laboratory
  - nuclear
  - half-life
  - decay
  - statistics
sourceType: authored-courseware
assessmentHints:
  - Half-life: t_{1/2} = ln 2 / λ.
  - Mean lifetime: τ = 1/λ = t_{1/2} / ln 2 = 1.44 t_{1/2}.
  - For short-lived isotopes, follow the decay for several half-lives; for long-lived, use the activity and the decay constant.
status: in-review
***

# Half-Life Measurement and the Decay Curve

## Overview

The half-life of a radioactive isotope is the time for half the nuclei to decay. The decay is exponential:

N(t) = N_0 exp(−λ t),

where λ = ln 2 / t_{1/2} is the decay constant. The mean lifetime is τ = 1/λ = t_{1/2} / ln 2 = 1.44 t_{1/2}.

The half-life is measured by following the decay curve (the count rate as a function of time) for several half-lives. For long-lived isotopes, the half-life is determined from the activity and the known number of nuclei. For short-lived isotopes, the half-life is determined from the decay curve.

This lesson covers the apparatus (a GM counter or a scintillation counter, a short-lived isotope, a stopwatch, a data acquisition system), the procedure (record the count rate as a function of time, fit the decay curve), the analysis (verify the exponential decay, determine the half-life, assess the goodness of fit), and the dominant sources of error (counting statistics, background, dead time, daughter activity).

## Learning Path

1. **Set up the apparatus.** Place the short-lived isotope at a fixed distance from the detector. Connect the detector to a counter or a data acquisition system.
2. **Measure the decay curve.** Record the count rate as a function of time for several half-lives. Use a counting time that is short compared to the half-life (e.g. 10 s for a 60 s half-life).
3. **Fit the decay curve.** Subtract the background. Fit the data to N(t) = N_0 exp(−λ t) + B. Extract N_0, λ, and B.
4. **Compute the half-life.** t_{1/2} = ln 2 / λ.
5. **Assess the goodness of fit.** Compute the chi-squared statistic. Verify that the reduced chi-squared is ~ 1.

## Core Explanation

### Theory: Exponential Decay

The decay of a radioactive isotope is described by

N(t) = N_0 exp(−λ t),

where N(t) is the number of nuclei at time t, N_0 is the initial number, and λ is the decay constant. The activity is A(t) = λ N(t).

The half-life is the time for the activity (or the number of nuclei) to fall to half:

t_{1/2} = ln 2 / λ.

The mean lifetime is

τ = ∫ t A(t) dt / ∫ A(t) dt = 1/λ = t_{1/2} / ln 2 = 1.44 t_{1/2}.

For ²⁰⁶Bi, t_{1/2} = 6.243 days. For ⁸⁵ᵐKr, t_{1/2} = 4.48 hours. For ¹³⁷Cs, t_{1/2} = 30.2 years. For ⁶⁰Co, t_{1/2} = 5.27 years.

### Theory: Counting Statistics

The count rate at time t is the number of decays per unit time, multiplied by the detection efficiency. The number of counts in a fixed time Δt follows the Poisson distribution. The standard deviation is √N, where N is the number of counts.

The fractional uncertainty in the count rate is

σ / N = 1/√N.

For N = 100 counts, σ = 10 (10 %). For N = 10000 counts, σ = 100 (1 %).

### Theory: Chi-Squared Test

The chi-squared statistic is

χ² = Σ (y_i − y_fit)² / σ_i²,

where y_i is the measured value, y_fit is the fitted value, and σ_i is the uncertainty. The reduced chi-squared is

χ²_red = χ² / (N − p),

where N is the number of data points and p is the number of parameters. A value of χ²_red ≈ 1 indicates a good fit. A value significantly greater than 1 indicates a poor fit; a value significantly less than 1 indicates over-fitting.

### Theory: Background Subtraction

The background count rate (from cosmic rays, natural radioactivity, etc.) must be subtracted from the measured count rate. The background is measured separately (with no source in the vicinity) and subtracted from the data.

The net count rate is

N_net(t) = N_total(t) − N_background.

The uncertainty in the net count rate is

σ_net = √(σ_total² + σ_background²) = √(N_total + N_background) / Δt.

### Apparatus

- Short-lived isotope: ²⁰⁶Bi (6.243 d), ⁸⁵ᵐKr (4.48 h), ¹³¹I (8.025 d), ⁹⁹ᵐTc (6.01 h), or ¹³⁷Cs (30.2 y).
- Detector: GM counter or NaI(Tl) scintillation counter.
- Data acquisition system: counter with a timer, or a multichannel analyser in the MCS (multichannel scaling) mode.
- Stopwatch.
- Safety equipment: lab coat, gloves, dosimeter, survey meter.
- Safety glasses.

### Procedure

1. **Set up the apparatus.** Place the short-lived isotope at a fixed distance from the detector. Use a lead shield to reduce the background.
2. **Measure the background.** Count for 10 minutes with no source. Compute the background count rate.
3. **Measure the decay curve.** Place the source in front of the detector. Record the count rate as a function of time. Use a counting time Δt that is short compared to the half-life (e.g. Δt = t_{1/2} / 10). Record for at least 5 half-lives.
4. **Repeat** for a second isotope (to verify the measurement technique).
5. **Fit the decay curve.** Subtract the background. Fit the data to N(t) = N_0 exp(−λ t). Extract N_0 and λ.
6. **Compute the half-life.** t_{1/2} = ln 2 / λ.

### Analysis

#### Decay Curve of ⁸⁵ᵐKr

The decay curve of ⁸⁵ᵐKr (t_{1/2} = 4.48 h) is measured for 24 hours. The count rate is recorded every 30 minutes. The data (after background subtraction) is:

| t (h) | N (cpm) |
|------:|--------:|
| 0 | 10000 |
| 1 | 8560 |
| 2 | 7330 |
| 4 | 5370 |
| 8 | 2880 |
| 12 | 1550 |
| 16 | 830 |
| 20 | 450 |
| 24 | 240 |

A semi-log plot of ln(N) vs t is a straight line. The slope is −λ = − ln 2 / t_{1/2}. The fit returns t_{1/2} = 4.5 ± 0.1 h, in agreement with the literature value (4.48 h).

#### Decay Curve of ²⁰⁶Bi

The decay curve of ²⁰⁶Bi (t_{1/2} = 6.243 d) is measured for 30 days. The count rate is recorded every 6 hours. The fit returns t_{1/2} = 6.3 ± 0.2 d, in agreement with the literature value.

### Sources of Error

- **Counting statistics.** The dominant uncertainty in any counting measurement is the Poisson statistics. To reduce the uncertainty, count for longer times.
- **Background.** The background must be subtracted. The background uncertainty is the Poisson uncertainty of the background count.
- **Dead time.** The dead time correction is important for high count rates. Use the two-source method to measure the dead time.
- **Daughter activity.** The daughter nucleus may also be radioactive, contributing to the count rate. Use a chemical separation to remove the daughter, or use a short counting time compared to the daughter's half-life.
- **Geometry.** The source-detector geometry may change over time (e.g. the source holder may move). Use a fixed geometry.

## Key Ideas

- Exponential decay: N(t) = N_0 exp(−λ t). Half-life: t_{1/2} = ln 2 / λ.
- Mean lifetime: τ = 1/λ = t_{1/2} / ln 2 = 1.44 t_{1/2}.
- Chi-squared test: reduced chi-squared ~ 1 indicates a good fit.
- Background subtraction: net count rate = total − background.

## Worked Examples

#### Example 1: Half-Life of ¹³¹I

The decay curve of ¹³¹I (literature t_{1/2} = 8.025 d) is measured. The count rate is recorded every 12 hours. The data:

| t (h) | N (cpm) |
|------:|--------:|
| 0 | 1000 |
| 12 | 956 |
| 24 | 914 |
| 48 | 835 |
| 96 | 698 |
| 144 | 583 |
| 192 | 488 |
| 240 | 408 |
| 288 | 341 |

A semi-log plot of ln(N) vs t is a straight line. The fit returns λ = 0.0036 h⁻¹, t_{1/2} = ln 2 / 0.0036 = 192 h = 8.0 d, in agreement with the literature value.

#### Example 2: Chi-Squared Test

For the ¹³¹I data, the reduced chi-squared is 1.2, indicating a good fit. The probability of obtaining a chi-squared at least as large is 0.25, consistent with the model.

For a poor fit, the reduced chi-squared would be > 2, and the p-value would be < 0.05, suggesting the model is not correct.

## Common Misconceptions

- **"The half-life is the lifetime."** No. The half-life is the time for half the nuclei to decay. The mean lifetime is ~ 1.44 times the half-life.
- **"The decay is deterministic."** No. The decay of each nucleus is random. The half-life is a statistical quantity.
- **"The daughter nucleus is stable."** Not always. The daughter may be radioactive, contributing to the count rate. Use a chemical separation or a short counting time.
- **"The background is constant."** No. The background varies with the location, the building materials, and the time. Measure the background periodically.
- **"A long counting time is always better."** A long counting time reduces the statistical uncertainty, but it may miss short-term variations. Use a counting time that is short compared to the half-life.

## Connections

- **Nuclear Physics (Sem 6 theory).** The half-life is the central parameter of radioactive decay. The decay constant, the mean lifetime, and the half-life are the standard tools.
- **Geology.** Radioactive dating (¹⁴C, K-Ar, U-Pb) is used to determine the age of rocks and fossils. The half-lives of ¹⁴C (5730 y) and ⁴⁰K (1.25 × 10⁹ y) are the basis of the dating methods.
- **Medical physics.** The half-lives of medical isotopes (⁹⁹ᵐTc, ¹³¹I, ⁶⁰Co, ¹⁸F) are chosen to match the time scale of the imaging or therapy procedure.
- **Astronomy (Sem 5/6).** The decay of radioactive isotopes in supernovae and stellar explosions produces gamma-ray lines that are detected by gamma-ray telescopes.
- **Environmental science.** The half-lives of radioactive contaminants (e.g. ¹³⁷Cs from Chernobyl, ⁹⁰Sr from fallout) determine the time scale of the environmental impact.

## Quick Check

1. What is the half-life? How is it related to the decay constant?
2. What is the mean lifetime? How is it related to the half-life?
3. What is the shape of the decay curve?
4. How is the half-life measured?
5. What is the chi-squared test?
6. What is the reduced chi-squared? What does a value of 1.5 indicate?
7. Why must the background be subtracted?
8. What is the daughter activity? How is it handled?

## Takeaway

The half-life measurement is the lab's primary tool for characterising radioactive decay. The exponential decay law, the chi-squared test, the background subtraction, and the dead time correction are the central concepts. The lab's discipline — careful source handling, accurate counting, proper background subtraction, honest uncertainty estimation — is the same discipline that runs through every half-life measurement. The same principles (exponential decay, Poisson statistics, chi-squared test) apply to all radioactive decay measurements, from the laboratory source to the natural background. The data you collect today is the raw material for the analysis that follows.
