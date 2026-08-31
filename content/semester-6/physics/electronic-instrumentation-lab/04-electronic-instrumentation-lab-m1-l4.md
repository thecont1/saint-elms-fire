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
lessonId: electronic-instrumentation-lab-m1-l4
lessonName: Active Filter Design and Frequency Response Measurement
lessonNumber: 4
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - electronic-instrumentation-lab-m1-l3
learningObjectives:
  - Design and build first- and second-order active low-pass and high-pass filters (Sallen-Key topology) for a specified cutoff frequency.
  - Measure the full frequency response (Bode magnitude plot) and extract the cutoff frequency, roll-off slope, and passband gain.
  - Use filtering to remove noise (50/60 Hz mains hum, high-frequency interference) from a real sensor signal and quantify the signal-to-noise improvement.
concepts:
  - Active filter
  - Sallen-Key topology
  - Cutoff frequency
  - Bode plot
  - Roll-off slope
  - Quality factor and damping
  - Signal-to-noise ratio
tags:
  - physics
  - laboratory
  - instrumentation
  - filter
  - bode-plot
sourceType: authored-courseware
assessmentHints:
  - Sallen-Key low-pass: f_c = 1/(2π√(R_1 R_2 C_1 C_2)).
  - First-order roll-off: −20 dB/decade; second-order: −40 dB/decade.
  - SNR improvement (dB) = 20 log10(noise_before/noise_after) when the signal is unaffected.
status: in-review
***

# Active Filter Design and Frequency Response Measurement

## Overview

The amplified bridge signal from the previous lesson rarely travels alone: it shares the wires with mains hum at 50 Hz, switch-mode noise in the tens of kHz, and broadband thermal noise everywhere. Filtering is how a measurement system keeps the signal and throws away the rest — and an active filter, built around an op-amp, does it with gain, sharpness, and low output impedance that passive RC networks cannot match. In this lesson you design Sallen-Key filters to specification, measure their Bode plots, and use one to clean a noisy sensor signal — quantifying the improvement rather than merely asserting it.

## Learning Path

1. **Review filter specifications:** cutoff frequency, order, passband gain, roll-off.
2. **Design a second-order Sallen-Key low-pass** at 1 kHz with unity gain; choose component values.
3. **Build it and measure the Bode magnitude plot** from 100 Hz to 100 kHz; extract f_c, roll-off, and passband gain.
4. **Compare with a first-order RC stage** cascaded to the same nominal cutoff: measure the difference in roll-off (−20 vs −40 dB/decade).
5. **Build a notch/stop-band response against 50 Hz hum** (twin-T or a high-Q band-stop) or alternatively a high-pass to remove drift.
6. **Apply the filter to a noisy strain signal** and quantify SNR improvement.

## Core Explanation

### Theory: Filter Order, Cutoff, and Roll-off

A low-pass filter passes frequencies below its cutoff f_c and attenuates above it. The magnitude response of an n-th order Butterworth filter is

|H(f)| = 1 / √(1 + (f/f_c)^{2n})

so at f = f_c the response is −3 dB regardless of order, and far above cutoff it rolls off at 20n dB/decade. First order: −20 dB/decade; second order: −40. Each decade of frequency above f_c loses that many more decibels of noise — order is the currency of rejection.

### Theory: The Sallen-Key Topology

The unity-gain Sallen-Key low-pass uses two resistors, two capacitors, and one op-amp (voltage follower):

f_c = 1 / (2π √(R_1 R_2 C_1 C_2))

For equal components (R_1 = R_2 = R, C_1 = C_2 = C): f_c = 1/(2πRC). The damping (quality factor Q) is set by the component ratios and any gain in the feedback; Q = 1/√2 ≈ 0.707 gives the maximally flat Butterworth response. Q > 0.707 introduces peaking near f_c — sometimes wanted (band-pass), usually a design error in anti-aliasing.

The same topology with R and C swapped becomes a high-pass filter — useful for removing DC drift and low-frequency 1/f noise from bridge signals.

### Apparatus

- Op-amp (general-purpose, GBP ≥ 1 MHz), resistors 1-100 kΩ (1%), capacitors 1-100 nF (film or C0G ceramic preferred).
- Function generator (sine sweep), oscilloscope (2 channels) or network analyser if available.
- Strain-gauge bridge + instrumentation amplifier chain from the previous lesson.
- Noise sources: 50 Hz mains pickup (unshielded cable loop), function-generator interference injected in series.
- Breadboard, shielded cables, safety glasses.

### Procedure

1. **Design.** Target: second-order low-pass, f_c = 1 kHz, Butterworth. Equal-component choice: R = 15.8 kΩ (16 kΩ), C = 10 nF → f_c = 1/(2π × 16 × 10³ × 10 × 10⁻⁹) ≈ 995 Hz.
2. **Build the Sallen-Key low-pass** with a voltage-follower op-amp.
3. **Bode measurement.** Apply 1 V peak sine; sweep 100 Hz → 100 kHz with points every ~0.2 decade (denser near f_c). Record V_out/V_in at each frequency; plot 20 log₁₀|H| vs log₁₀ f.
4. **Extract parameters:** passband gain (should be ≈ 0 dB), f_−3dB, and the asymptotic slope (fit two points a decade apart in the stopband).
5. **First-order comparison.** Build a simple RC low-pass at 1 kHz; measure its response; overlay both plots and confirm −20 vs −40 dB/decade.
6. **Noise removal.** With the bridge/IA chain measuring a static load:
   a. Record the noise spectrum without filtering (note the 50 Hz hum spike and broadband floor).
   b. Insert the low-pass (if the signal is DC/near-DC) or a 50 Hz notch; record again.
   c. Compute RMS noise before and after; quantify SNR improvement in dB.

### Analysis

#### Bode plot verification

Measured example: passband gain 0.02 dB; −3 dB point at 1.02 kHz (design 995 Hz, +2.5% — within component tolerance); stopband points at 10 kHz and 100 kHz give −41.2 dB and −80.5 dB → slope ≈ 39.3 dB/decade, confirming second-order behaviour within 2%.

#### Component tolerance effect

With 5% resistors and 10% capacitors, the measured f_c spread across rebuilds is ±8%; with 1% resistors and 5% C0G capacitors it falls to ±3%. For precision filtering, measure the actual R and C values and predict f_c from them before comparing.

#### SNR improvement

Example: static strain signal at 12.4 mV output; unfiltered RMS noise 0.42 mV dominated by 50 Hz pickup (0.35 mV) plus broadband (0.23 mV). With the low-pass at 1 kHz the 50 Hz component is unaffected (it is in-band!) — the correct fix for 50 Hz on a DC signal is either a notch, shielding, or averaging; with a 50 Hz notch: noise falls to 0.24 mV → SNR improves by 20 log₁₀(0.42/0.24) ≈ 4.9 dB. The lesson of the data: **match the filter to the noise spectrum**; a low-pass cannot remove in-band interference.

### Sources of Error

- **Component tolerance:** sets f_c accuracy; measure components, not labels.
- **Op-amp bandwidth:** GBP must exceed the operating range or the response distorts near f_c.
- **Peaking from wrong Q:** component-ratio errors push Q above 0.707; visible as a bump near f_c.
- **Loading and grounding:** scope-probe capacitance (~10-15 pF) shifts high-frequency response; use ×10 probes.
- **Ground loops:** create hum that masquerades as filter failure; use single-point grounding.

## Key Ideas

- Filter order n sets the roll-off: 20n dB/decade; the −3 dB point defines f_c for all orders.
- The Sallen-Key topology implements second-order responses with one op-amp; f_c = 1/(2π√(R_1R_2C_1C_2)).
- Butterworth (Q = 0.707) is maximally flat; higher Q peaks near cutoff.
- Bode measurement — swept sine, gain vs log frequency — fully characterises a filter.
- Filtering must be matched to the noise spectrum: low-pass removes out-of-band noise only; in-band hum needs notches, shielding, or averaging.
- SNR improvement is quantified in dB from RMS noise before/after.

## Worked Examples

#### Example 1: Design calculation

Target f_c = 500 Hz second-order Butterworth, equal components: R = 1/(2π f_c C). Choose C = 22 nF → R = 1/(2π × 500 × 22 × 10⁻⁹) ≈ 14.5 kΩ → use 14.7 kΩ (1%) → f_c ≈ 493 Hz.

#### Example 2: Roll-off arithmetic

At f = 10 f_c, a second-order filter attenuates by ≈ 20 log₁₀(10²) = 40 dB, i.e. the noise voltage is reduced 100×. At 100 f_c: 80 dB → 10⁴×. Each order buys one factor of ten of attenuation per decade.

#### Example 3: Anti-aliasing budget

An ADC sampling at 10 kHz (lesson 5) must reject noise above the 5 kHz Nyquist frequency. A second-order low-pass at f_c = 2 kHz gives 20 log₁₀((5/2)²) ≈ 15.9 dB attenuation at Nyquist — marginal; a fourth-order design (two cascaded stages) gives ≈ 32 dB, the usual minimum for measurement-grade acquisition.

#### Example 4: High-pass for drift

A bridge signal drifts at 0.01 Hz with 10 mV amplitude while the wanted signal is at 5 Hz. A first-order high-pass at f_c = 0.5 Hz attenuates the drift by |H| ≈ f/f_c = 0.01/0.5 = 0.02 → drift reduced 50× to 0.2 mV, while the 5 Hz signal passes at |H| = 5/√(5² + 0.5²) ≈ 0.995 — essentially untouched.

## Common Misconceptions

- **"A low-pass always cleans a signal."** Only noise above f_c; in-band interference passes straight through.
- **"Higher order is always better."** More order means more components, more tolerance sensitivity, more phase distortion; match order to the rejection requirement.
- **"The cutoff is a brick wall."** The response crosses −3 dB at f_c and rolls off gradually; signals near f_c are partially attenuated.
- **"Simulated response equals built response."** Component tolerances, op-amp limits, and layout parasitics shift the real response; always measure.
- **"Notch filters are free."** A deep notch has a narrow capture range and phase distortion near the notch; tune it to the actual hum frequency, not the nominal one.

## Connections

- **Previous lesson:** Filters follow the amplifier in the analogue chain; together they define the front end.
- **Waves and Optics / Signals:** Frequency-response thinking (Fourier decomposition, transfer functions) is the same language used there.
- **Next lesson:** The filtered signal is sampled by an ADC — where the anti-aliasing requirement meets filter design directly.
- **Communication Electronics Lab (Sem 4):** Band-pass filtering and Q measurement appear in the radio-frequency context there.

## Quick Check

1. What roll-off does a second-order low-pass provide above cutoff?
2. Write the cutoff frequency of the equal-component Sallen-Key low-pass.
3. What Q gives a maximally flat Butterworth response, and what does Q above it do?
4. How is the −3 dB frequency identified on a measured Bode plot?
5. Why can a low-pass filter not remove 50 Hz hum from a DC strain measurement?

## Takeaway

A filter is a specification turned into a circuit: cutoff, order, and flatness chosen from the noise spectrum, then verified point by point on a Bode plot. The discipline — design, build, measure, quantify — is the same as every other stage of the chain, and the payoff is visible in the noise floor: decibels recovered by one well-placed network. Next, the chain meets the digital world.
