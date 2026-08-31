***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: mathematics-lab-using-python-iii
courseName: Mathematics Lab using Python III
moduleId: mathematics-lab-using-python-iii-module-1
moduleName: Advanced Scientific Computing in Python — SVD, Transforms and Optimisation
lessonId: mathematics-lab-using-python-iii-m1-l5
lessonName: Visualisation as Measurement — Fields, Diagnostics and Motion
lessonNumber: 5
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - mathematics-lab-using-python-iii-m1-l4
learningObjectives:
  - Render scalar and vector fields (pcolormesh, contour, streamplot) and defend colormap choices on perceptual grounds.
  - Extract convergence orders from log-log line fits and read iterative-solver health from semi-log residual histories, windowing fits to the asymptotic tail.
  - Build animated views of time-dependent solutions within a frame budget, and assemble multi-panel diagnostic figures that stand alone.
concepts:
  - Scalar and vector field visualisation
  - Perceptually uniform colormaps
  - Log-log order extraction
  - Residual histories
  - Animation (FuncAnimation)
  - Diagnostic figures
tags:
  - mathematics
  - laboratory
  - python
  - visualisation
  - diagnostics
sourceType: authored-courseware
assessmentHints:
  - A log-log fit of error vs step size recovers the method's order — slope 2 for trapezoidal and 4 for Simpson from your own Python II quadrature tables.
  - Colormap choice is a claim about the data: perceptually uniform maps (viridis) for scalar fields; jet's non-monotone luminance fabricates edges.
  - Every figure must carry the parameters that made it (seed, grid size, tolerances) and the window used for any fit.
status: in-review
***

# Visualisation as Measurement — Fields, Diagnostics and Motion

## Overview

A figure is not the packaging of a result — it is an instrument with its own error budget. The colormap decides what the eye reads as structure; the axis scale decides what the eye reads as trend; the renderer decides whether you are looking at your solution or at an interpolation of it. This lesson treats visualisation the way the earlier lessons treated solvers: as instruments to be calibrated. You will render a two-dimensional field honestly, audit colormaps by their luminance, overlay optimisation trajectories on their landscapes, extract convergence orders by line fitting, read solver health from residual histories, and animate a wave equation — always asking what the picture claims, and whether the claim survives scrutiny. The honest-figure basics (labelled axes, captions with parameters, no truncated axes) were settled in the Python II capstone; here the standards go deeper, into perception and dynamics.

## Learning Path

1. **Render a scalar field:** solve the 2D Poisson equation on a 64 × 64 grid; display it with pcolormesh and contour overlays.
2. **Audit colormaps:** compare viridis and jet on the same data via their luminance profiles; locate the fabricated edges.
3. **Render a vector field:** streamplot of the Rosenbrock gradient (Lesson 4) with a descent trajectory overlaid.
4. **Extract orders:** log-log line fits on your Python II quadrature error tables; recover the theoretical orders and watch a contaminated fit fail.
5. **Read solver health:** semi-log residual histories — CG's straight descent and superlinear endgame versus Jacobi's near-flat crawl.
6. **Animate:** leapfrog wave propagation within a frame budget; assemble the multi-panel diagnostic figure.

## Core Explanation

### Theory: Perception is part of the error budget

A colormap maps numbers to colours, and the eye reads luminance before hue. A perceptually uniform map (viridis) raises luminance monotonically and nearly linearly with value, so equal value steps look equal and the colourbar is a faithful ruler. Jet is not uniform: its luminance climbs to a broad peak in the cyan-green around three-quarters of the way through the range, then falls — the bright band reads as a contour whether the data has one or not, while dark-blue and dark-red values far apart in magnitude can look nearly identical. On quantitative fields the rule is flat: perceptually uniform map, colourbar labelled with the quantity and its units. Vector fields have their own honesty issue — arrow density and streamplot seeding can invent or hide structure; state the settings you used.

The renderer matters too. pcolormesh draws each data cell flat: what you see is exactly what the solver produced on its grid. Smooth interpolated surfaces are display choices that can make an under-resolved grid look converged — a rendering decision silently promoted to a numerical claim.

### Theory: Reading orders and histories on log axes

If error(h) = C·h^p, then log(error) = log C + p·log h: a straight-line fit to an error-vs-step-size table on log-log axes returns the order p as its slope. Two failure modes police the fit: pre-asymptotic coarse points that have not yet entered the power law, and the roundoff floor where errors stop decreasing. Fit the straight tail, and report the window used — the slope of an unwindowed fit is a number, not an order.

Semi-log residual plots read solvers the same way. A straight descent means linear convergence, its slope per iteration the log of the rate; a downward bend at the end is conjugate-gradient superlinearity kicking in; a near-flat line is stagnation. Because the axis compresses by decades, the difference between 760 iterations and 50,000 is visible at a glance — which is exactly the comparison an iterative-solver report must make.

### Numerical Setup (Apparatus)

- Python: numpy, scipy (spsolve for the direct solve), matplotlib (pcolormesh, contour, streamplot, FuncAnimation with blitting); seeded randomness.
- 2D Poisson: unit square, zero boundary, 5-point stencil on a 64 × 64 interior grid (4096 unknowns); source a Gaussian blob centred at (0.4, 0.6) with width 0.1. Direct sparse solve here — κ ≈ 4(n + 1)²/π² ≈ 1.7 × 10³ on this grid, where Lesson 2's CG machinery would need roughly 390 iterations by the √κ scaling.
- Rosenbrock gradient: ∇f = (−2(1 − x) − 400x(y − x²), 200(y − x²)) on [−1.5, 1.5] × [−0.5, 2.1]; streamplot over log₁₀ f contours with Lesson 4's descent path overlaid.
- Order tables: the trapezoidal and Simpson error sequences from your Python II integration lesson (6.13 × 10⁻⁴, 1.53 × 10⁻⁴, 3.83 × 10⁻⁵ at N = 10, 20, 40; Simpson 8.2 × 10⁻⁷, 5.1 × 10⁻⁸ at N = 10, 20) plus one more halving each.
- Animation: u_tt = u_xx by leapfrog, n = 200 grid points (Δx = 1/201), CFL = 0.8 so Δt = 0.8Δx ≈ 0.00398; centred Gaussian pulse run to the round-trip time t = 2 (≈ 503 steps), saving every fifth step (≈ 100 frames).
- Record all parameters alongside outputs (reproducibility).

### Procedure

1. **Solve and render:** direct solve of the Poisson system; pcolormesh with equal axes, labelled colourbar, ten evenly spaced contour levels overlaid. Inspect before claiming anything quantitative.
2. **Colormap audit:** render the same array in viridis and jet; convert each map's 256 samples to luminance and plot luminance against value for both.
3. **Vector field:** streamplot the Rosenbrock gradient; overlay the Lesson 4 gradient-descent trajectory on log-spaced contours; tune streamplot density until the valley structure, not the seeding, is what you see.
4. **Order extraction:** np.polyfit(log h, log error, 1) on each table; compare slopes with theory. Then repeat with a deliberately contaminated table (a point past the roundoff floor included) and watch the slope drift.
5. **Solver histories:** rerun Lesson 2's CG at n = 128 alongside Jacobi; plot relative residual vs iteration on a semi-log axis; annotate the 10⁻⁶ crossing.
6. **Animation:** FuncAnimation with blitting; measure the per-frame draw cost; save to mp4 at 30 fps. Assemble the multi-panel figure: field, centre-line cut, residual history, and parameters in the caption.

### Analysis

#### The field, honestly rendered

pcolormesh draws 4096 flat cells — no interpolation, so the picture is the solution on its actual grid; the contour overlay carries the readable level values. The physics checks qualitatively before any number is quoted: the peak sits at the source centre, level sets close around it, and the field decays to zero at the grounded boundary. The direct solve finishes well under a second at this size; rendering dominates the wall time, which is the correct order of things for a visualisation lesson. At 64 × 64 the cell size is visible — good: visible cells are an honest statement of resolution, where a smooth interpolated surface would have been a silent lie.

#### The colormap audit

The luminance profile of viridis rises monotonically — roughly linearly from a dark start to a bright end — across all 256 samples; converting the Poisson figure to greyscale leaves its level structure intact. Jet's profile climbs to its cyan-green peak and then falls: the same Poisson field rendered in jet shows a bright band near the peak that reads as a contour, and the dark-blue and dark-red extremes of the colourbar sit at similar luminance, compressing genuinely different values into similar-looking ink. The audit takes ten lines of code and is worth doing on every quantitative field you publish — the printer test (greyscale conversion) is the fastest version.

#### Orders from line fits

polyfit on the trapezoidal table returns slope 2.00 to within 0.01 — the order recovered as a fit, not read off ratios one pair at a time. Simpson's two-point secant gives 4.01; the additional halving lands near 3.2 × 10⁻⁹ (ratio ≈ 16 again) and the three-point fit holds 4.00. The contamination test is the lesson: include a point past the roundoff floor, where the error has stopped decreasing, and the unwindowed fit sags toward flat — ~1.7 instead of 2.0. The flat tail is not a measured order of zero; it is floating point. Refit on the straight tail and state the window: 2.00 again.

#### Solver health on a semi-log axis

CG on Lesson 2's n = 128 problem descends nearly straight on the semi-log plot, bends down sharply in the last few dozen iterations — the superlinear endgame — and crosses 10⁻⁶ at iteration ≈ 760, matching Lesson 2's count. Jacobi on the same grid is a different species: its slowest mode decays by the factor cos(π/(n + 1)) ≈ 1 − 3 × 10⁻⁴ per iteration, so six digits cost roughly 5 × 10⁴ iterations — a near-flat line on the same axis. One figure communicates what a table of iteration counts asserts: both methods converge, and they are not remotely comparable.

#### Motion, budgeted

The leapfrog animation shows the pulse cross the domain, reflect sign-inverted at the fixed ends, and return to its start by t = 2 — the round trip, 503 steps, in ≈ 100 saved frames and a 3.3-second clip at 30 fps. Per-frame drawing of a 200-point line is millisecond-scale, so blitted playback runs at interactive rates; saving, not computing, is the bottleneck. The stability audit rides along: rerun at CFL = 1.05 and the same animation shows exponential blow-up within a couple of crossings — instability is visible in motion long before it is visible in a table of norms.

### Sources of Error

- **Interpolated smoothness masking under-resolution:** pcolormesh cells are honest; smooth interpolation is a display choice that must be declared, and never used to make a coarse grid look converged.
- **Colormap features mistaken for data features:** run the luminance audit and the greyscale test before trusting structure in a non-uniform map.
- **Unwindowed order fits:** pre-asymptotic or roundoff-floored points drag the slope; fit the tail and report the window.
- **Absolute residuals on the history plot:** a solver can look slow or fast depending on the scale of b; always plot the relative residual.
- **Animation as decoration:** frames without a time axis, a parameter caption, and a stated frame cadence are pictures, not results.

## Key Ideas

- Figures are instruments: colormap, axis scale and renderer choices are part of the error budget, not the presentation.
- Perceptually uniform colormaps make equal steps look equal; jet's luminance bumps fabricate contours.
- Orders come from line fits on log-log halving sequences, windowed to the asymptotic tail.
- Semi-log residual histories separate linear convergence, superlinear endgames and stagnation at a glance.
- Animation buys temporal intuition on a frame budget — and exposes instability faster than any table.

## Worked Examples

#### Example 1: The fit that convicts

A colleague reports "order 1.7" for a second-order method. The error table contains six halving steps; the last two sit on the roundoff floor. Refitting on the first four points returns 2.00 ± 0.01 — the method was never in doubt; the window was. The corrected report quotes the order with its window ("N = 10 to N = 160") and the floor value separately.

#### Example 2: Greyscale audit in ten lines

Convert each colormap to its 256 luminance values and plot them against sample index: viridis is strictly increasing; jet rises, peaks around index 170–190 of 256 (past the middle, in the cyan-green), and falls — its derivative changes sign several times where viridis never does. That single monotonicity check predicts every artefact the jet rendering will show, before looking at any data.

#### Example 3: The frame budget

Requirement: show two round trips (t = 4, ≈ 1006 steps at Δt ≈ 0.00398) in a 10-second clip at 30 fps — 300 frames. Save every third step: ≈ 335 frames, an 11-second clip, close enough to trim. The arithmetic fixes the cadence before any rendering happens; deciding it afterwards is how animations end up showing half the physics.

## Common Misconceptions

- **"Jet shows more detail."** It shows luminance edges the data may not have, while compressing real differences at its dark ends — detail manufactured and detail destroyed by the same map.
- **"A smooth plot means a converged solution."** Interpolation is display; resolution is the grid. The two must be stated separately.
- **"Animation is presentation, not analysis."** Reflection, dispersion and instability are seen in motion first; the frame budget is analysis, the polish is optional.
- **"The fit returns the order."** The fit returns the slope of whatever points you hand it; the window selection is the analyst's claim and must be reported.
- **"Default figures are publication-ready."** Defaults are defaults — default size, default colormap, no parameter captions. Every one needs review against the figure's claim.

## Connections

- **Lesson 2:** CG and Jacobi residual histories are this lesson's diagnostic objects; the 760-iteration count reappears as an annotated crossing.
- **Lesson 4:** the Rosenbrock trajectory becomes a field-plus-path figure; the zigzag reads differently from inside the valley.
- **Python II capstone:** honest-figure basics (axes, labels, captions, no truncation) are assumed here; this lesson adds perception, fits and dynamics on top.
- **Physics labs:** the same instruments render potential fields, spectra and time series — visualisation transfers whole.

## Quick Check

1. Why is colormap choice a correctness issue rather than a style issue?
2. What honesty advantage does pcolormesh have over a smoothly interpolated surface?
3. How do you extract a convergence order from an error table, and which points must be excluded from the fit?
4. What shapes on a semi-log residual plot distinguish linear convergence, a superlinear endgame, and stagnation?
5. What turns an animation from a picture into a result?

## Takeaway

Visualisation is the last instrument in the computational chain, and it obeys the same discipline as the rest: know what your instrument manufactures, calibrate it against cases where the truth is known, and state its settings alongside its output. Render honestly, fit on the tail, plot the residual, budget the frames — and every figure you publish is a measurement you can defend.
