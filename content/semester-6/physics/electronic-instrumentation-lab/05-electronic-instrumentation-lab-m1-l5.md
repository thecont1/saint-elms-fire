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
lessonId: electronic-instrumentation-lab-m1-l5
lessonName: Analog-to-Digital Conversion and Data Acquisition
lessonNumber: 5
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - electronic-instrumentation-lab-m1-l4
learningObjectives:
  - Explain sampling, quantisation, and resolution; compute the quantisation step and the ideal SNR of an N-bit ADC.
  - Demonstrate aliasing by undersampling a sine wave and recover the correct interpretation using the Nyquist criterion.
  - Configure a data-acquisition system (microcontroller or USB DAQ) to digitise a conditioned sensor signal, and validate the digital readings against the analogue chain.
concepts:
  - Sampling theorem and Nyquist frequency
  - Aliasing
  - Quantisation
  - Resolution and effective number of bits
  - Anti-aliasing filter
  - Data acquisition
tags:
  - physics
  - laboratory
  - instrumentation
  - adc
  - data-acquisition
sourceType: authored-courseware
assessmentHints:
  - Quantisation step: q = V_FS / 2^N. Quantisation-noise RMS = q/√12.
  - Ideal SNR of an N-bit ADC: 6.02N + 1.76 dB.
  - Aliased frequency: f_alias = |f_signal − k f_sample| for the integer k that lands the result in 0..f_sample/2.
status: in-review
***

# Analog-to-Digital Conversion and Data Acquisition

## Overview

The analogue chain — sensor, bridge, amplifier, filter — ends at a boundary: the analog-to-digital converter, where continuous voltages become numbers. That boundary has its own physics. Sampling too slowly folds high frequencies irreversibly into low ones (aliasing); quantising to N bits sets an inescapable noise floor. In this lesson you measure both effects directly, compute the resolution limits of your acquisition hardware, and close the loop by digitising the conditioned strain signal and validating the digital numbers against everything built so far.

## Learning Path

1. **Review the ADC model:** sampling at f_s, quantisation into 2^N levels, the quantisation step.
2. **Compute the resolution budget:** quantisation step, quantisation-noise RMS, ideal SNR for the ADC you have.
3. **Observe aliasing:** sample a 9 kHz sine at 10 kHz and watch it masquerade as 1 kHz; predict and verify the alias frequency.
4. **Fix it with an anti-aliasing filter** (from the previous lesson) and re-measure.
5. **Set up the DAQ** (microcontroller ADC or USB DAQ): range, rate, and trigger configuration.
6. **Digitise the conditioned bridge signal** and validate against the analogue measurement; add the ADC to the chain's error budget.

## Core Explanation

### Theory: Sampling and the Nyquist Criterion

An ADC records the input at discrete times spaced by 1/f_s. The sampling theorem: a band-limited signal with no content above f_Nyquist = f_s/2 is perfectly recoverable from its samples. Content above f_Nyquist is not removed — it **aliases**, appearing as a false low frequency:

f_alias = |f_signal − k f_s| (k chosen so the result falls in 0..f_s/2)

Aliasing is irreversible after sampling: no post-processing separates a 9 kHz signal sampled at 10 kHz from a genuine 1 kHz one. The defence is analogue, before the sampler: an anti-aliasing low-pass with cutoff below f_s/2 (lesson 4).

### Theory: Quantisation

An N-bit ADC maps the full-scale range V_FS onto 2^N codes; one quantisation step is

q = V_FS / 2^N

The quantisation error is uniformly distributed over ±q/2, giving RMS noise q/√12. For a full-scale sine input the ideal signal-to-quantisation-noise ratio is

SNR = 6.02 N + 1.76 dB

so each bit buys ~6 dB (a factor of 2 in voltage SNR). A 12-bit ADC on a 5 V range: q = 1.22 mV; a 16-bit ADC: 76 µV. But real ADCs fall short of ideal — effective number of bits (ENOB) accounts for thermal noise, nonlinearity, and jitter; a 12-bit microcontroller ADC commonly delivers 9-10 effective bits.

### Apparatus

- Microcontroller with ADC (e.g. Arduino/ESP32 class) or USB DAQ (e.g. MCC/National Instruments class); alternatively an oscilloscope for the aliasing demo.
- Function generator (sine, up to 100 kHz).
- Anti-aliasing filter board from lesson 4 (second-order low-pass).
- Strain-gauge bridge + instrumentation amplifier chain from lessons 2-3.
- Computer with plotting (Python/matplotlib) or oscilloscope.

### Procedure

1. **Resolution calculation.** For your ADC (e.g. 12-bit, 0-3.3 V): q = 3.3/4096 ≈ 0.81 mV; RMS quantisation noise 0.23 mV; ideal SNR ≈ 74 dB.
2. **Aliasing demonstration.** Generate a 1 kHz sine; sample at f_s = 10 kHz; confirm correct reconstruction. Then set the generator to 9 kHz (with the anti-aliasing filter disconnected): the sampled data now shows a 1 kHz waveform. Predict aliases for 6, 11, and 14 kHz inputs and verify each.
3. **Anti-aliasing fix.** Insert the 1 kHz-cutoff low-pass before the sampler; repeat the 9 kHz test — the sampled amplitude collapses toward zero as it should.
4. **DAQ configuration.** Set input range to match the amplified signal span (use the full range for maximum resolution); set sample rate ≥ 10× the signal bandwidth; configure software scaling to physical units using the chain calibration.
5. **Digitise the strain chain.** Record 1000 samples under static load; compute mean and standard deviation; compare the mean with the multimeter reading of the analogue output.
6. **Error budget update.** Add the ADC terms — quantisation noise, gain error of the ADC, and sampling jitter — to the chain budget from lesson 1.

### Analysis

#### Alias prediction table

With f_s = 10 kHz (f_Nyq = 5 kHz):

| Input frequency | Predicted alias | Observed |
|-----------------|-----------------|----------|
| 6 kHz | |6 − 10| = 4 kHz | 4 kHz |
| 9 kHz | |9 − 10| = 1 kHz | 1 kHz |
| 11 kHz | |11 − 10| = 1 kHz | 1 kHz |
| 14 kHz | |14 − 10| = 4 kHz | 4 kHz |

The symmetry around multiples of f_s/2 is the signature: 6 kHz and 4 kHz are indistinguishable, 9 kHz and 1 kHz likewise.

#### Resolution validation

Static-load recording: mean digital value 2841 counts → 2841 × 0.81 mV = 2.30 V; multimeter reads 2.298 V — agreement within 1 count. Sample standard deviation 3.1 counts ≈ 2.5 mV, much larger than the 0.23 mV quantisation RMS: the chain's analogue noise dominates, so extra ADC bits would buy nothing until the analogue noise floor falls. **Resolution must be budgeted against the actual noise, not the datasheet.**

#### Error budget addition

| Source | Magnitude |
|--------|----------:|
| Quantisation noise (12-bit) | 0.23 mV |
| ADC gain error (±1 LSB) | 0.81 mV |
| Sampling jitter (1 µs at 1 kHz signal) | ~0.006 × signal slope ≈ negligible here |

The ADC adds ~0.8 mV — below the 2.5 mV analogue noise floor, confirming the 12-bit choice is adequate for this chain.

### Sources of Error

- **Aliasing:** the dominant sampling error; prevented only by analogue pre-filtering.
- **Range misuse:** a signal spanning 0.5 V on a 5 V range wastes (5/0.5 = 10× → ~3.3 bits of) resolution.
- **Reference noise:** the ADC's voltage reference drifts add gain error; ratiometric bridge excitation (using the same reference for bridge and ADC) cancels it.
- **Input impedance:** the ADC's sample-and-hold briefly loads the source; a low-impedance driver (the op-amp filter output) prevents droop.
- **Grounding:** digital return currents through analogue grounds inject spikes; keep analogue and digital grounds separate until one point.

## Key Ideas

- Sampling must satisfy f_s > 2 × signal bandwidth; violations alias irreversibly, with f_alias = |f_signal − k f_s|.
- Quantisation step q = V_FS/2^N; quantisation-noise RMS = q/√12; ideal SNR = 6.02N + 1.76 dB.
- Real ADCs deliver ENOB below nominal; each bit buys ~6 dB only if the analogue chain is that quiet.
- Anti-aliasing is an analogue job: filter before sampling, never after.
- Match the ADC input range to the signal span to use the codes you paid for.
- The ADC joins the error budget on equal footing with sensor, bridge, and amplifier errors.

## Worked Examples

#### Example 1: Bit budget

Required measurement resolution: 0.1% of a 5 V span = 5 mV. Quantisation step must be ≤ 5 mV → 2^N ≥ 5/0.005 = 1000 → N ≥ 10 bits. Choose 12 bits for margin; 16 bits adds nothing if the analogue noise is 2 mV.

#### Example 2: Alias arithmetic

A vibration sensor outputs content up to 8 kHz; the DAQ is set to f_s = 20 kHz (f_Nyq = 10 kHz). A 13 kHz resonance aliases to |13 − 20| = 7 kHz — appearing inside the band of interest and corrupting the spectrum. Fix: raise f_s to ≥ 40 kHz, or low-pass at 8 kHz before sampling.

#### Example 3: Effective resolution

A 16-bit ADC (q = 76 µV on a 5 V range) shows idle-code fluctuations of 300 µV RMS. For a full-scale sine input (amplitude V_FS/√2 = 3.54 V), SNR_measured = 20 log₁₀(3.54 / 3 × 10⁻⁴) ≈ 81.4 dB, giving ENOB = (81.4 − 1.76)/6.02 ≈ 13.2 bits. The datasheet's 16 bits are unreachable: the noise floor caps the real resolution at ~13 bits.

#### Example 4: Ratiometric cancellation

If the bridge excitation and the ADC reference share one supply, a 1% supply drift moves both the bridge output and the full-scale proportionally — the digital reading is unchanged. Ratiometric wiring turns a gain error into a non-error.

## Common Misconceptions

- **"Higher sample rate solves everything."** Rate above Nyquist prevents aliasing only of the intended band; noise above f_Nyq still aliases without pre-filtering.
- **"More bits = better measurement."** Bits below the analogue noise floor are wasted; ENOB and the chain's noise set the real resolution.
- **"Aliasing is a software bug."** It is a physical consequence of undersampling; no digital filter can undo it after the fact.
- **"The ADC reads the voltage at the pin."** It reads its sample-and-hold capacitor, charged briefly from the source — source impedance matters.
- **"Post-processing can resample to fix the rate."** Interpolation adds no information that sampling threw away.

## Connections

- **Previous lesson:** The anti-aliasing filter is the direct application of the active-filter design.
- **Calculus using Python / Numerical Methods:** Discrete sampling and the discrete Fourier transform formalise what is measured here.
- **Lesson 1:** The ADC's quantisation and gain errors enter the error budget with the same quadrature rules.
- **Capstone (next lesson):** The complete chain — sensor to numbers — is assembled and validated end-to-end.

## Quick Check

1. What is the quantisation step of a 12-bit ADC on a 3.3 V range?
2. A 7 kHz signal is sampled at 10 kHz. What frequency appears in the data?
3. Why must anti-aliasing filtering happen before sampling?
4. What ideal SNR does a 16-bit ADC provide?
5. Why might a 16-bit ADC deliver only 13 effective bits in practice?

## Takeaway

The digital boundary obeys two hard laws: Nyquist governs time, quantisation governs amplitude, and neither forgives shortcuts. Sampling and resolution are design choices made against the signal's bandwidth and the chain's noise — then verified with the same measure-and-budget discipline the whole course has used. One lesson remains: the complete measurement chain, assembled and judged.
