***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: communication-electronics-lab
courseName: Communication Electronics Lab
moduleId: communication-electronics-lab-module-1
moduleName: Modulation, Filters, and Signal Analysis
lessonId: communication-electronics-lab-m1-l5
lessonName: Modulation Measurements — Index, Bandwidth, and Signal-to-Noise Ratio
lessonNumber: 5
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - communication-electronics-lab-m1-l4
learningObjectives:
  - Measure the modulation index of an AM signal and verify the relationship with the sideband-to-carrier power ratio.
  - Measure the bandwidth of an FM signal and verify Carson's rule.
  - Measure the signal-to-noise ratio of a demodulated signal and compare AM and FM performance.
concepts:
  - Modulation index
  - Sideband power
  - Carson's rule
  - Signal-to-noise ratio
  - Noise figure
  - AM noise performance
  - FM noise performance
  - Capture effect
tags:
  - physics
  - laboratory
  - communication
  - modulation
  - snr
  - bandwidth
sourceType: authored-courseware
assessmentHints:
  - AM sideband power ratio: P_sideband / P_carrier = m² / 4.
  - FM bandwidth (Carson's rule): BW = 2 (Δf + f_m).
  - FM is more robust to noise than AM by approximately 3β² (for large β).
status: in-review
***

# Modulation Measurements — Index, Bandwidth, and Signal-to-Noise Ratio

## Overview

A communication system is characterised by its modulation scheme (AM, FM, PM, digital), its bandwidth, and its signal-to-noise ratio (SNR). The modulation index (m for AM, β for FM) is the key parameter that determines the bandwidth and the SNR. The bandwidth is the range of frequencies occupied by the modulated signal; the SNR is the ratio of the signal power to the noise power, measured at the demodulator output.

This lesson covers the apparatus (an AM modulator, an FM modulator, a signal generator with noise output, a spectrum analyser, a demodulator), the procedure (measure the modulation index, the bandwidth, the SNR), the analysis (compare AM and FM performance), and the dominant sources of error (modulator nonlinearity, noise calibration, demodulator threshold).

## Learning Path

1. **Measure the AM modulation index** — use the scope to measure A_max and A_min of the modulated envelope; compute m = (A_max − A_min) / (A_max + A_min). Verify with the spectrum analyser: m² = 4 · (P_sideband / P_carrier).
2. **Measure the FM bandwidth** — sweep the spectrum analyser across the carrier; identify the − 40 dB points; the bandwidth is the difference. Compare with Carson's rule: BW = 2 (Δf + f_m).
3. **Measure the SNR** — connect a known noise source to the modulator input; demodulate the signal; measure the signal power and the noise power at the demodulator output. Compute the SNR.
4. **Compare AM and FM** — for the same message and the same noise, the FM SNR is approximately 3β² times the AM SNR (for large β).

## Core Explanation

### Theory: AM Modulation Index

The AM signal is

s(t) = A_c [1 + m cos(2π f_m t)] cos(2π f_c t).

The total power is

P_AM = (1/2) A_c² (1 + m² / 2).

The carrier power is P_carrier = (1/2) A_c². The total sideband power is P_sideband = (1/2) A_c² · m² / 2 = (1/4) A_c² m². The ratio is

P_sideband / P_carrier = m² / 2.

Hmm wait, let me recompute. The total power of the AM signal is

P_total = (1/2) A_c² + 2 · (1/2) (m A_c / 2)² = (1/2) A_c² + (1/4) m² A_c² = (1/2) A_c² (1 + m² / 2).

The carrier power is (1/2) A_c². The two sidebands each contribute (1/2) (m A_c / 2)² = (1/8) m² A_c², so total sideband power is (1/4) m² A_c².

The ratio P_sideband / P_carrier = m² / 2.

Equivalently, m² = 2 · P_sideband / P_carrier. So the modulation index can be measured from the spectrum.

### Theory: FM Bandwidth (Carson's Rule)

The bandwidth of an FM signal is BW = 2 (Δf + f_m) (Carson's rule). For an FM broadcast signal with Δf = 75 kHz and f_m = 15 kHz, BW = 180 kHz.

The bandwidth is measured on a spectrum analyser as the width of the spectrum at the − 40 dB points (or at any other specified level; Carson's rule corresponds to ~ 98 % of the power, which is roughly the − 40 dB level for a clean FM signal).

### Theory: Signal-to-Noise Ratio

The SNR is the ratio of the signal power to the noise power, measured at the demodulator output. For a message of bandwidth B (in Hz), the noise power at the demodulator input is

N_input = N_0 · BW,

where N_0 is the noise power spectral density (in W/Hz) and BW is the receiver bandwidth. For a matched filter, the signal power at the demodulator input is

S_input = (1/2) A_c² (for AM) or S_input = (1/2) A_c² (for FM, since the amplitude is constant).

The output SNR depends on the modulation scheme. For AM with envelope detection:

(SNR)_out,AM = (m² / (1 + m² / 2)) · (S_input / N_input) = η · (S_input / N_input),

where η = m² / (1 + m² / 2) is the modulation efficiency. For m = 1, η = 1/1.5 = 0.67 (i.e. 2/3 of the transmitter power is in the carrier, which carries no information).

For FM with discriminator detection:

(SNR)_out,FM = 3 β² (β + 1) · (S_input / N_input),

approximately. For large β, this is approximately 3 β² · (S_input / N_input). The improvement over AM is 3 β² (β + 1) / η. For β = 5 (FM broadcast), the improvement is 3 · 25 · 6 / 0.67 = 675 — about 28 dB.

The "FM improvement factor" is the reason FM is more robust to noise than AM: the wider bandwidth of FM is traded for noise immunity.

### Theory: Capture Effect

FM has a "capture effect": if two FM signals are present at the same frequency, the stronger one captures the demodulator; the weaker one is suppressed. The capture ratio is typically a few dB (e.g. 1–6 dB). This is why FM is more robust to interference than AM.

### Apparatus

- AM modulator (from L1).
- FM modulator (from L2).
- Noise generator (or a noise diode with a known noise power).
- Spectrum analyser (or a scope with FFT).
- AM demodulator (envelope detector).
- FM demodulator (discriminator or PLL).
- Power meter (for power measurements).
- Function generator.
- Safety glasses.

### Procedure

1. **AM modulation index from the spectrum.** Set up an AM signal with carrier 100 kHz, message 1 kHz, m = 0.5. Use the spectrum analyser to measure the carrier power P_carrier and the sideband power P_sideband (sum of the two sidebands). Compute m = √(2 P_sideband / P_carrier).
2. **FM bandwidth.** Set up an FM signal with carrier 100 kHz, message 1 kHz, Δf = 5 kHz. Use the spectrum analyser to measure the bandwidth at the − 40 dB points. Compare with Carson's rule: BW = 12 kHz.
3. **AM SNR.** Add a known amount of noise to the AM signal (e.g. set the noise generator to − 40 dBm). Demodulate with the envelope detector. Measure the signal power and the noise power at the demodulator output (using a power meter or by computing the variance of the output in a quiet interval and a signal interval). Compute the SNR.
4. **FM SNR.** Repeat with the FM signal. The FM SNR should be higher by ~ 3 β² / η, where β = Δf / f_m and η is the AM modulation efficiency.

### Analysis

#### AM Modulation Index from the Spectrum

For a clean AM signal, the spectrum has three lines: carrier at f_c, USB at f_c + f_m, LSB at f_c − f_m. The power of the carrier is P_c = (1/2) A_c². The power of each sideband is P_s = (1/2) (m A_c / 2)² = (1/8) m² A_c².

P_s / P_c = m² / 4.

Wait, that contradicts what I said earlier. Let me recompute.

P_carrier = (1/2) A_c² (this is the carrier alone).
P_sideband (each) = (1/2) (m A_c / 2)² = (1/2) · (m² A_c² / 4) = m² A_c² / 8.

P_sideband / P_carrier = (m² A_c² / 8) / (A_c² / 2) = m² / 4.

So m² = 4 · P_sideband / P_carrier (where P_sideband is the power in one sideband).

For the total sideband power (sum of both): P_sideband_total = 2 · m² A_c² / 8 = m² A_c² / 4. P_sideband_total / P_carrier = m² / 2.

So:
- For one sideband: m = 2 · √(P_s / P_c).
- For both sidebands: m = √(2 · P_sideband_total / P_c).

For a spectrum analyser reading of P_c = − 10 dBm and P_s = − 22 dBm (each sideband), the power ratio is 10^((-10 - (-22))/10) = 10^1.2 = 15.85. Then m = 2 · √15.85 = 7.97, which is way too high.

Let me reconsider. dBm is a logarithmic power scale. The power ratio is 10^(ΔdB/10). For ΔdB = 12 dB (sideband 12 dB below carrier), the power ratio is 10^1.2 = 15.85. That can't be right because m would be > 1.

Let me check: for m = 0.5, P_s / P_c = 0.0625 (i.e. − 12 dB). So the sideband should be 12 dB below the carrier for m = 0.5. And m = 2 · √0.0625 = 2 · 0.25 = 0.5. 

I made an error above. Let me redo: m = 0.5, m² = 0.25, m² / 4 = 0.0625, so 10 log_10 (0.0625) = − 12 dB. So for m = 0.5, the sideband is 12 dB below the carrier.

OK so the formula is correct: m = 2 · √(P_s / P_c), where P_s is the power in one sideband and P_c is the carrier power.

For a reading of P_c = − 10 dBm and P_s = − 22 dBm: power ratio = 10^((−10 − (−22))/10) = 10^1.2 = 15.85. m = 2 · √15.85 = 7.97. This is wrong.

Wait, the issue is the sign. P_s = − 22 dBm and P_c = − 10 dBm means P_s is 12 dB below P_c. The power ratio is 10^(12/10) · ... no wait. P_s/P_c = 10^((P_s_dBm - P_c_dBm)/10) = 10^((−22 − (−10))/10) = 10^(−12/10) = 10^(−1.2) = 0.063. So m = 2 · √0.063 = 2 · 0.251 = 0.502. 

So m = 0.5, consistent with the assumed modulation index.

I had a sign error above. The formula is correct: m = 2 · √(P_s / P_c), and P_s / P_c is a number less than 1 for a properly modulated AM signal.

### Sources of Error

- **Modulator nonlinearity.** A real AM modulator may not be perfectly linear; the modulation index may vary with the message amplitude. The measured m may differ from the nominal m.
- **Noise calibration.** The noise power from a noise diode is usually specified in dBm/Hz; the total noise power depends on the bandwidth. An inaccurate noise calibration biases the SNR measurement.
- **Demodulator threshold.** At low SNR, the demodulator may not recover the message correctly. The AM envelope detector has a threshold at SNR ~ 10 dB; below this, the output is dominated by noise. FM has a threshold at SNR ~ 4 dB (the "FM threshold effect").
- **Spectrum analyser resolution.** A narrow resolution bandwidth is needed to resolve the carrier and sidebands; a wide resolution bandwidth smears them together.

## Key Ideas

- Modulation index: m for AM, β for FM.
- AM modulation efficiency: η = m² / (1 + m² / 2). For m = 1, η = 2/3.
- FM bandwidth (Carson's rule): BW = 2 (Δf + f_m).
- AM SNR at output: η · (S/N)_input.
- FM SNR at output: 3 β² (β + 1) · (S/N)_input (approximate, for large β).
- FM is more robust to noise than AM by a factor of approximately 3 β² (β + 1) / η.
- FM has a capture effect that suppresses weaker co-channel signals.

## Worked Examples

### Example 1: AM modulation index

The carrier power is P_c = − 10 dBm. The sideband power (each) is P_s = − 22 dBm.

P_s / P_c = 10^((−22 − (−10))/10) = 10^(−1.2) = 0.0631.

m = 2 · √0.0631 = 0.502.

So m = 0.5.

### Example 2: FM bandwidth

Δf = 5 kHz, f_m = 1 kHz.

BW = 2 (5 + 1) = 12 kHz.

The spectrum analyser at the − 40 dB level should show a 12 kHz bandwidth.

### Example 3: SNR comparison

AM with m = 1: (SNR)_out,AM = (1/1.5) · (S/N)_input = 0.67 · (S/N)_input.

FM with β = 5: (SNR)_out,FM = 3 · 25 · 6 · (S/N)_input = 450 · (S/N)_input.

FM is 450 / 0.67 = 672 times better than AM — about 28 dB.

For (S/N)_input = 30 dB (1000): (SNR)_out,AM = 30 dB + 10 log_10 0.67 = 30 − 1.76 = 28.2 dB. (SNR)_out,FM = 30 + 10 log_10 450 = 30 + 26.5 = 56.5 dB.

## Common Misconceptions

- **"Higher modulation index is always better."** For AM, higher m gives more sideband power (more information-bearing) but also more distortion (envelope reversal at m > 1). For FM, higher β gives more noise immunity but more bandwidth.
- **"FM is always better than AM."** FM has a wider bandwidth and a higher complexity. For low-power, narrowband applications, AM may be preferable.
- **"The SNR at the demodulator output is the same as the input."** For an ideal demodulator, the output SNR equals the input SNR times a factor (η for AM, 3 β² (β + 1) for FM). A real demodulator adds noise and has a threshold below which it fails.
- **"Carson's rule gives the exact bandwidth."** It gives the bandwidth containing ~ 98 % of the power. The actual bandwidth (to any specified level) is larger for a clean FM signal.
- **"The capture effect is unique to FM."** It is a property of FM's discriminator. AM does not have a capture effect; a weak AM signal is just additive noise on a strong AM signal.

## Connections

- **Communication Electronics (Sem 4 theory).** The trade-off between bandwidth and noise performance is the central engineering decision in communication system design. The Shannon-Hartley theorem gives the fundamental limit: C = B log_2 (1 + S/N), where C is the channel capacity, B is the bandwidth, and S/N is the signal-to-noise ratio.
- **Information theory.** Shannon's theorem says that any communication at rate R < C is possible with arbitrarily low error probability, by using a sufficiently sophisticated code. The trade-off between bandwidth and power is the central engineering problem.
- **Engineering.** Real communication systems (radio, TV, mobile phones, satellite) use a variety of modulation schemes, each chosen for its particular application. AM is used for AM broadcast and aircraft VHF; FM is used for FM broadcast, TV audio, and two-way radio; PSK and QAM are used for digital communication.
- **Radar.** Radar uses pulsed modulation (the carrier is on for a short time, off for a long time). The range resolution is set by the pulse width; the velocity resolution is set by the Doppler shift (FM-like).
- **Astrophysics (Sem 5/6).** The signals from cosmic sources (pulsars, quasars, the cosmic microwave background) are extremely weak. Communication engineers design receivers with the lowest possible noise figure; the same principles (low-noise amplifiers, matched filters, optimal detection) apply to radio astronomy.

## Quick Check

1. Define the modulation index for AM. For FM.
2. State the AM modulation efficiency. What is it for m = 1?
3. State Carson's rule. What is the bandwidth of an FM signal with Δf = 5 kHz and f_m = 1 kHz?
4. What is the FM improvement factor over AM, for β = 5?
5. The carrier power is 10 mW. The sideband power is 0.5 mW (each). What is the modulation index?
6. Why does FM have a capture effect but AM does not?
7. What is the FM threshold effect?
8. An AM signal has m = 0.8. What is the modulation efficiency?

## Takeaway

The modulation index, the bandwidth, and the signal-to-noise ratio are the three central parameters of any communication system. The trade-off between bandwidth and noise performance is the engineering heart of communication theory. The lab's discipline — careful measurement of the modulation index, accurate calibration of the noise, proper demodulator design — is the same discipline that runs through every communication system design. The Shannon-Hartley theorem gives the fundamental limit: C = B log_2 (1 + S/N). The choice of modulation scheme (AM, FM, PSK, QAM) is the choice of where to operate on the B-S/N plane. The same mathematics governs every communication system, from AM radio to deep-space communication.
