***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: electronic-instrumentation-lab
courseName: Electronic Instrumentation Lab (Option B)
moduleId: electronic-instrumentation-lab-module-1
moduleName: Sensor Calibration, Bridge Circuits, and Amplification
lessonId: electronic-instrumentation-lab-m1-l6
lessonName: Capstone — Complete Measurement Chain with Integrated Error Budget
lessonNumber: 6
moduleNumber: 1
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - electronic-instrumentation-lab-m1-l5
learningObjectives:
  - Assemble the complete measurement chain (sensor, bridge, instrumentation amplifier, filter, ADC) and calibrate it end-to-end against a reference.
  - Construct the integrated error budget combining every stage's contributions; identify the dominant error and improve it.
  - Validate the system against a known input; report measurement uncertainty with a stated confidence level.
concepts:
  - Measurement chain
  - End-to-end calibration
  - Integrated error budget
  - Uncertainty reporting
  - Validation against reference
  - Signal-to-noise ratio
tags:
  - physics
  - laboratory
  - instrumentation
  - measurement-chain
  - error-budget
  - capstone
sourceType: authored-courseware
assessmentHints:
  - Chain sensitivity: S_chain = S_sensor × G_amp × S_ADC (in counts per unit measurand).
  - Combined uncertainty: u_c = √(Σ u_i²); expanded uncertainty U = k u_c (k = 2 for ~95%).
  - Validation criterion: |measured − reference| ≤ U_combined, otherwise the budget is incomplete.
status: in-review
***

# Capstone — Complete Measurement Chain with Integrated Error Budget

## Overview

Five lessons have built the pieces: a calibrated sensor with its error budget, a Wheatstone bridge, an instrumentation amplifier, an active filter, and an ADC. This capstone assembles them into a single measurement system and subjects it to the discipline the whole course has practised: end-to-end calibration, a combined error budget across every stage, validation against an independent reference, and an honest statement of uncertainty. A measurement system is finished not when it produces numbers but when it can defend them.

## Learning Path

1. **Specify the system:** measurand, range, required uncertainty, bandwidth.
2. **Assemble the chain** and bring each stage up individually (verify against the earlier lessons' results).
3. **Calibrate end-to-end:** known inputs across the range → digital outputs → fit the chain sensitivity and offset.
4. **Build the integrated error budget:** propagate every stage's uncertainty to the final reading.
5. **Validate against a reference** at several points; apply the acceptance criterion.
6. **Find and fix the dominant error;** re-validate and report the final uncertainty.

## Core Explanation

### System specification

Worked target: measure static strain on a cantilever from 0 to 2000 µε, uncertainty ≤ 2% of reading, bandwidth DC-10 Hz. The chain from the previous lessons:

strain gauge quarter bridge (5 V excitation) → instrumentation amplifier (G = 100) → second-order low-pass (f_c = 100 Hz) → 12-bit ADC (0-3.3 V, logged to computer).

### Theory: Chain sensitivity

Each stage multiplies the signal by a known factor; the chain sensitivity is their product:

S_chain = (ΔV_bridge/ε) × G_amp × G_filter × (counts/V)_ADC

For the quarter bridge: ΔV/ε = (V_ex/4) × GF = 1.25 µV/µε. With G = 100: 125 µV/µε. The filter passes DC at unity. The ADC: 4096/3.3 V = 1241 counts/V. Product: S_chain ≈ 0.155 counts/µε, or ~310 counts at full scale — using only ~8% of the ADC range. **Range mismatch is visible immediately in the sensitivity calculation** — the fix (raise G to 500, or lower the ADC range) is a design decision made before any wiring.

### Theory: Integrated error budget

Uncertainties combine in quadrature at the output, then refer back to the measurand:

u_c(ε) = (1/S_chain) × √(Σ u_i,out²)

Contributions from the earlier lessons, each converted to output-referred volts:

| Stage | Error source | Output-referred |
|-------|--------------|----------------:|
| Sensor/bridge | Gauge factor tolerance (1%) | 1% of signal |
| Bridge | Excitation accuracy (0.5%) | 0.5% of signal |
| Amplifier | Gain tolerance (1%, resistor set) | 1% of signal |
| Amplifier | Offset (50 µV × G = 5 mV) | fixed 5 mV |
| Filter | Passband gain error (0.2%) | 0.2% of signal |
| ADC | Quantisation (0.23 mV) and gain (1 LSB) | ~0.9 mV fixed |
| Reference | Calibration reference uncertainty | 0.5% of signal |

Percentage-of-signal terms add as a relative budget: √(1² + 0.5² + 1² + 0.2² + 0.5²)% ≈ 1.6%. Fixed terms (offset, ADC) matter most at low signal: at half scale (1550 counts ≈ 1.29 V) the 5.9 mV of fixed error is 0.46%. Combined at half scale: √(1.6² + 0.46²)% ≈ 1.7% — inside the 2% requirement, with the gauge factor and amplifier gain as the largest terms.

### Apparatus

- All boards from lessons 1-5: sensor calibration rig, Wheatstone bridge with strain gauge on a cantilever, instrumentation amplifier, Sallen-Key filter, DAQ.
- Reference: calibrated dial gauge or micrometer-driven deflection (tip deflection δ converts to fixed-end strain via beam theory: ε = 3δh/(2L²), with h the beam thickness and L its length; or use a reference strain indicator if available).
- Precision decade resistor box (to simulate known bridge unbalances for electrical calibration).
- Computer with Python for fitting and plotting; safety glasses.

### Procedure

1. **Stage verification.** Power the chain; confirm each stage's measured behaviour matches its lesson (bridge balance, G ≈ 100, filter f_c, ADC counts).
2. **Electrical calibration.** Replace the gauge arm with the decade box; step the resistance to simulate 0, 500, 1000, 1500, 2000 µε; record ADC counts. Fit counts vs ε: slope = measured S_chain, intercept = offset. Compare with the design value.
3. **Mechanical calibration.** Load the cantilever in steps with known masses; convert to strain via beam theory; record counts; overlay on the electrical calibration (they should agree within the combined uncertainty — this cross-check is the point).
4. **Zero and offset handling.** Record the zero-load output; subtract it (or null the bridge) so offset error does not ride the measurement.
5. **Noise measurement.** Record 1000 samples at a fixed load; compute RMS noise; fold into the budget.
6. **Validation.** Apply three new loads (not used in calibration); predict the counts from the calibration line; compare with observation using |measured − predicted| ≤ U_combined.
7. **Dominant-error improvement.** Identify the largest budget term (typically gauge factor or amp gain); improve it (use the datasheet GF with its tolerance, or measure the gain with 0.1% resistors); rebuild the budget; re-validate.

### Analysis

#### Calibration fit

Electrical calibration example: counts = 0.1543 × ε + 12, residuals ≤ 4 counts (≈ 26 µε) across 0-2000 µε. Mechanical calibration slope 0.1528 ± 0.0015 counts/µε — agrees with electrical within 1%, confirming the gauge-factor assumption.

#### Validation table

| Load | Predicted counts | Measured counts | Deviation | Within U (= ±2.2% ≈ ±34 counts)? |
|------|------------------|------------------|-----------|----------------------------------|
| A | 1140 | 1128 | −1.1% | yes |
| B | 1872 | 1894 | +1.2% | yes |
| C | 2605 | 2561 | −1.7% | yes |

All points pass; the budget is supported by the data. If a point failed, the budget would be incomplete (an unlisted systematic — e.g. thermal drift, nonlinearity near full scale) and the hunt would continue until it closed.

#### Final uncertainty statement

Judging against the 2% requirement uses the **expanded** uncertainty U = k u_c with coverage factor k = 2 (~95%): U = 2 × 1.7% ≈ 3.4% — a fail. The dominant-error cycle then applies: 0.1% gain resistors and a measured gauge factor reduce the relative budget to 0.9%, giving U ≈ 1.8% — a pass. The final report states: "Strain = ε_measured ± 1.8% (expanded uncertainty, k = 2, ~95% confidence)."

### Sources of Error

- **Gauge factor assumption:** the single largest typical term; use the gauge's datasheet value and tolerance, or calibrate mechanically.
- **Thermal effects:** gauge and resistor drift with temperature; keep warm-up time, or add temperature compensation (lesson 2).
- **Lead resistance and contact potentials:** matter at low signal levels; four-wire bridge connections remove lead errors.
- **Nonlinearity near full scale:** bridge nonlinearity grows with ΔR/R; stay within the linear range or correct it.
- **Ground loops and pickup:** reappear when all stages share a bench; single-point grounding and shielding.

## Key Ideas

- Chain sensitivity is the product of stage sensitivities — and exposes range mismatches before wiring.
- The integrated error budget refers every stage's uncertainty to the output (or input) and combines in quadrature.
- Relative errors dominate at high signal; fixed errors (offset, quantisation) dominate at low signal.
- Electrical calibration (decade box) cross-checked against mechanical calibration (known loads) exposes hidden systematics.
- Validation against unused points with a quantitative acceptance criterion is what turns a reading into a measurement.
- The dominant-error cycle — budget, identify, fix, re-budget — is the working method of instrumentation engineering.

## Worked Examples

#### Example 1: Sensitivity mismatch caught early

Design gives 310 counts at full scale on a 4096-count ADC. Predicted quantisation contribution is small, but the analogue noise (2.5 mV ≈ 20 counts) sets the real floor at ~130 µε — 6.5% of full scale, failing a 2% requirement at low strain. Fix before building: raise G to 500 (full scale ~1550 counts, noise floor ~26 µε ≈ 1.3%).

#### Example 2: Quadrature across stages

Three 1% independent gain stages would seem to give 3% gain uncertainty; in quadrature: √(1² + 1² + 1²)% = 1.7%. Worst-case addition is conservative; quadrature is correct for independent sources — and the validation data decides which applies.

#### Example 3: Offset at low signal

The 5 mV output offset (referred: 5 mV/125 µV/µε = 40 µε) is 2% of a 2000 µε reading but 40% of a 100 µε reading. Zeroing the bridge removes it; the budget must state the offset-corrected residual, not the raw value.

#### Example 4: Validation failure diagnosis

Point C deviates −1.7% while A and B sit near ±1%. Pattern: deviation grows with load → suspect nonlinearity (ΔR/R no longer small) or amplifier headroom. Check: output near full scale is within 0.3 V of the rail — compression. Reduce G or raise the rail; re-measure; the systematic closes.

## Common Misconceptions

- **"Each stage works, so the chain works."** Stage interactions — loading, range, grounding — only exist in the assembled system; verify end-to-end.
- **"Calibration once is forever."** Gain, offset, and sensor characteristics drift with temperature and time; calibration is a practice, not an event.
- **"The error budget is pessimistic bookkeeping."** It is a design tool: it says where improvement buys the most, as the dominant-error cycle shows.
- **"Validation on the calibration points proves accuracy."** It proves interpolation; validation must use points not in the fit.
- **"Uncertainty is an apology."** A stated uncertainty is the strength of a measurement; a number without one is an anecdote.

## Connections

- **Lessons 1-5:** Every technique in this course is a stage of this system; the capstone's budget is their union.
- **Metrology:** The vocabulary (u_c, expanded uncertainty, coverage factor k) follows the GUM guide used across national standards laboratories.
- **Renewable Energy Lab (Sem 6):** The same chain discipline applies to solar-cell I-V and thermal measurements there.
- **Professional practice:** Calibration certificates, uncertainty statements, and validation records are the deliverables of measurement engineering.

## Quick Check

1. How is chain sensitivity computed, and what design flaw does a small full-scale count count reveal?
2. Why do fixed errors dominate at low signal and relative errors at high signal?
3. What is the acceptance criterion for validation against a reference?
4. Why cross-check electrical and mechanical calibration?
5. Write the form of a correct final uncertainty statement.

## Takeaway

A measurement system is a chain, and a chain's strength is a number: its combined uncertainty, stated honestly and defended with validation data. The budget identifies the weakest link, the fix strengthens it, and the cycle repeats until the requirement is met. That loop — specify, build, calibrate, budget, validate, improve — is the entire art of instrumentation, and it belongs now to every measurement you will ever defend.
