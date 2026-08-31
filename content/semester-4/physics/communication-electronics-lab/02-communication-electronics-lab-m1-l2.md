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
lessonId: communication-electronics-lab-m1-l2
lessonName: Frequency Modulation and the FM Detector
lessonNumber: 2
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - communication-electronics-lab-m1-l1
learningObjectives:
  - Generate an FM signal by modulating the frequency of a carrier with a message signal and observe the modulated waveform on an oscilloscope.
  - Measure the frequency deviation and verify Carson's rule for the FM bandwidth.
  - Demodulate the FM signal with a frequency discriminator or a phase-locked loop and recover the message.
concepts:
  - Frequency modulation
  - Carrier frequency
  - Frequency deviation
  - Modulation index (FM)
  - Carson's rule
  - Frequency discriminator
  - Phase-locked loop
  - FM bandwidth
tags:
  - physics
  - laboratory
  - communication
  - fm
  - modulation
  - demodulation
sourceType: authored-courseware
assessmentHints:
  - FM signal: s(t) = A_c cos(2π f_c t + 2π k_f ∫ m(t) dt), where k_f is the frequency sensitivity.
  - Frequency deviation: Δf = k_f · A_m, where A_m is the message amplitude.
  - Carson's rule: BW = 2(Δf + f_m).
status: in-review
***

# Frequency Modulation and the FM Detector

## Overview

In frequency modulation (FM), the frequency of the carrier is varied in proportion to the message signal; the amplitude is held constant. The FM signal is

s(t) = A_c cos(2π f_c t + 2π k_f ∫ m(t) dt),

where A_c is the carrier amplitude, f_c is the carrier frequency, k_f is the frequency sensitivity (Hz per volt), and m(t) is the message signal. The instantaneous frequency is

f_i(t) = f_c + k_f m(t).

The frequency deviation Δf = k_f · A_m, where A_m is the peak message amplitude. The modulation index for FM is β = Δf / f_m, where f_m is the message frequency. The bandwidth of the FM signal is given by Carson's rule:

BW = 2 (Δf + f_m) = 2 f_m (β + 1).

For large β (wideband FM), the bandwidth is approximately 2 Δf. For small β (narrowband FM), the bandwidth is approximately 2 f_m (similar to AM).

This lesson covers the apparatus (a voltage-controlled oscillator, a function generator for the message, a frequency counter or oscilloscope, a frequency discriminator or PLL detector), the procedure (set up the FM signal, measure the frequency deviation, demodulate with the discriminator or PLL), the analysis (Carson's rule, Bessel-function sidebands), and the dominant sources of error (modulator linearity, detector bandwidth, noise).

## Learning Path

1. **Set up the FM modulator** — connect a function generator (message, e.g. 1 kHz sine) to the frequency-control input of a voltage-controlled oscillator (VCO); set the VCO's center frequency to the carrier (e.g. 100 kHz).
2. **Observe the FM signal on the oscilloscope.** The waveform should be a constant-amplitude sinusoid whose frequency varies with the message. You can verify this by watching the time between zero crossings.
3. **Measure the frequency deviation** — feed the FM signal to a frequency counter; observe the variation of the frequency with the message. The peak deviation is Δf.
4. **Demodulate with a frequency discriminator** — use a slope detector (an LC tank circuit tuned slightly off the carrier frequency) or a PLL. Observe the recovered message on the scope.
5. **Verify** that the recovered message has the same frequency as the original message.

## Core Explanation

### Theory: Frequency Modulation

The FM signal is

s(t) = A_c cos(2π f_c t + 2π k_f ∫ m(t) dt).

The argument of the cosine is the instantaneous phase; its time derivative is the instantaneous angular frequency:

ω_i(t) = 2π f_c + 2π k_f m(t)   ⇒   f_i(t) = f_c + k_f m(t).

The frequency deviation is

Δf = k_f · A_m,

where A_m is the peak message amplitude. The modulation index is

β = Δf / f_m.

For wideband FM (β ≫ 1), the bandwidth is approximately 2 Δf (Carson's rule). For narrowband FM (β ≪ 1), the bandwidth is approximately 2 f_m (similar to AM).

### Theory: Carson's Rule

The bandwidth of an FM signal is

BW = 2 (Δf + f_m) = 2 f_m (β + 1).

This is the width of the frequency band that contains ~ 98 % of the signal power. For β = 5 (a typical wideband FM broadcast), BW = 12 f_m. For f_m = 15 kHz (the maximum message frequency in FM broadcast), BW = 180 kHz.

### Theory: Bessel Function Sidebands

The spectrum of an FM signal (with a single-tone message) consists of a carrier and an infinite set of sidebands at f_c ± n f_m, with amplitudes given by Bessel functions J_n(β). The carrier amplitude is J_0(β); the first-order sidebands are J_1(β); the second-order sidebands are J_2(β); etc.

For small β, only J_0 and J_1 are significant; the spectrum looks like AM. For large β, many sidebands contribute, and the spectrum is wider.

A useful property: for β ≈ 2.4, J_0(β) = 0 (the carrier disappears). This is used in some FM demodulators.

### Theory: Frequency Discriminator

A frequency discriminator converts frequency variations into amplitude variations, which can then be detected by an envelope detector. The simplest discriminator is a slope detector: an LC tank circuit tuned slightly off the carrier frequency, so the carrier sits on the slope of the tank's frequency response. Frequency variations are converted to amplitude variations by the slope.

A more sophisticated discriminator is the phase-locked loop (PLL). A PLL has a voltage-controlled oscillator (VCO) that is locked to the incoming FM signal; the VCO control voltage is the demodulated message. PLLs are more linear and have wider bandwidth than slope detectors.

### Apparatus

- Voltage-controlled oscillator (VCO; e.g. an XR-2206 function generator IC, or a discrete VCO using a varactor diode).
- Function generator for the message.
- Oscilloscope (two channels).
- Frequency counter (or a scope with frequency measurement).
- FM discriminator: a slope detector (LC tank + envelope detector) or a PLL (e.g. an NE565 or CD4046).
- Power supply.
- Safety glasses.

### Procedure

1. **Set up the VCO** at a center frequency of 100 kHz. The frequency-control input is the modulating input.
2. **Connect the function generator** (1 kHz sine, 0.5 V peak) to the VCO's modulating input. The output is the FM signal.
3. **Observe the FM signal on the scope.** Set the time base to 0.5 ms/div. You should see a constant-amplitude sinusoid whose frequency varies with the message. The frequency variation is visible as a change in the spacing of the zero crossings.
4. **Measure the frequency deviation.** Use the scope's frequency measurement or a frequency counter. The peak frequency deviation is Δf = k_f · A_m, where k_f is the VCO sensitivity (Hz/V, typically specified for the VCO).
5. **Demodulate with the discriminator.** Feed the FM signal to the discriminator. The output should be a 1 kHz sine wave (the recovered message) with a small residual carrier.
6. **Observe the demodulated output on the second scope channel.** Verify that it has the same frequency as the message.

### Analysis

#### Frequency Deviation

The frequency deviation can be measured by:
- Observing the period variation on the scope (the period varies between T_max = 1/(f_c − Δf) and T_min = 1/(f_c + Δf)).
- Using a frequency counter with a gate time short enough to resolve the frequency variation.
- Using a spectrum analyser and identifying the Bessel-function sidebands.

For a 100 kHz carrier and Δf = 5 kHz, the period varies between 1/95 kHz ≈ 10.5 μs and 1/105 kHz ≈ 9.5 μs. On a scope with 0.5 ms/div, the period variation is visible but small.

#### Carson's Rule

BW = 2 (Δf + f_m) = 2 (5 + 1) kHz = 12 kHz.

The spectrum should occupy a 12 kHz band around the carrier.

#### Modulation Index

β = Δf / f_m = 5 / 1 = 5.

A wideband FM signal with many sidebands.

### Sources of Error

- **VCO linearity.** A real VCO may not be perfectly linear; the frequency deviation may not be proportional to the message amplitude. Check with several message amplitudes.
- **Modulating frequency response.** The VCO sensitivity k_f may vary with frequency. Check the VCO datasheet.
- **Discriminator linearity.** A slope detector is approximately linear over a small frequency range; outside this range, the demodulated message is distorted. A PLL is more linear.
- **Detector bandwidth.** The detector must have enough bandwidth to follow the message; if the detector bandwidth is too small, the message is attenuated at high frequencies.
- **Noise.** FM is more robust to amplitude noise than AM, but it is sensitive to phase noise. A noisy FM signal has a noisy demodulated output.

## Key Ideas

- FM signal: s(t) = A_c cos(2π f_c t + 2π k_f ∫ m(t) dt). Constant amplitude, varying frequency.
- Frequency deviation: Δf = k_f · A_m.
- Modulation index: β = Δf / f_m.
- Carson's rule: BW = 2 (Δf + f_m).
- FM spectrum: carrier and sidebands at f_c ± n f_m, with amplitudes J_n(β).
- FM demodulation: frequency discriminator (slope detector or PLL).

## Worked Examples

### Example 1: Frequency deviation

You have a VCO with k_f = 10 kHz/V. The message is 1 kHz, 0.5 V peak. The peak frequency deviation is

Δf = 10 · 0.5 = 5 kHz.

The period of the FM signal varies between 1/(100 − 5) kHz = 10.5 μs and 1/(100 + 5) kHz = 9.5 μs.

### Example 2: Carson's rule

For Δf = 5 kHz and f_m = 1 kHz,

BW = 2 (5 + 1) = 12 kHz.

The FM signal occupies a 12 kHz band around the 100 kHz carrier, i.e. from 94 to 106 kHz.

### Example 3: Modulation index

β = Δf / f_m = 5 / 1 = 5.

A wideband FM signal. The Bessel function values: J_0(5) = − 0.178, J_1(5) = − 0.328, J_2(5) = 0.047, J_3(5) = 0.365, J_4(5) = 0.391, J_5(5) = 0.261. The carrier has flipped sign (J_0 is negative), and there are many significant sidebands (up to n ≈ 7 or so).

### Example 4: FM broadcast

For FM broadcast, Δf = 75 kHz (the maximum frequency deviation), f_m = 15 kHz (the maximum message frequency).

β = 75 / 15 = 5.

BW = 2 (75 + 15) = 180 kHz.

The FM broadcast channel occupies a 200 kHz band (with guard bands).

## Common Misconceptions

- **"FM and AM have the same bandwidth."** No. For the same message, FM has a larger bandwidth (2 (Δf + f_m)) than AM (2 f_m). The trade-off is that FM is more robust to noise.
- **"The amplitude of an FM signal is constant."** For an ideal FM signal, yes. For a real FM signal, the amplitude may vary slightly due to imperfections in the modulator.
- **"FM is immune to noise."** FM is more robust to amplitude noise (which is the most common type of noise), but it is sensitive to phase noise. The improvement is the "FM capture effect": a strong FM signal can suppress a weaker one at the same frequency.
- **"The frequency deviation is the same as the carrier frequency."** No. The frequency deviation is the peak variation of the instantaneous frequency from the carrier. For FM broadcast, the carrier is ~ 100 MHz and the deviation is 75 kHz.
- **"A PLL is the same as a slope detector."** Both are FM discriminators, but they work differently. A slope detector uses the slope of an LC tank; a PLL uses a phase-locked loop. PLLs are more linear and have wider bandwidth.

## Connections

- **Communication Electronics (Sem 4 theory).** FM is the basis for high-fidelity broadcasting (88–108 MHz in India), television audio, two-way radio, and many other applications. The mathematics of FM (Bessel functions, Carson's rule) is central to communications theory.
- **Signal processing.** FM is a nonlinear modulation scheme; the spectrum is not simply a translation of the message spectrum. The Armstrong indirect FM modulator and the varactor direct FM modulator are the two main implementations.
- **History of technology.** Edwin Armstrong invented FM in 1933. The first FM broadcast was in 1941. The FM band (88–108 MHz) was allocated by the FCC in 1945. FM's superior noise performance made it the preferred broadcast method for music.
- **Astrophysics (Sem 5/6).** The signals from pulsars are essentially FM (the pulsar's rotation produces a periodic signal with frequency variation due to the orbital motion). The receivers use FM demodulators to extract the pulsar signal.
- **Radar.** Doppler radar uses FM (or PM) to measure the velocity of a target. The reflected signal is shifted in frequency by the Doppler effect; the shift is detected by an FM discriminator.

## Quick Check

1. State the FM signal equation. Define each symbol.
2. What is the frequency deviation? What is the modulation index for FM?
3. State Carson's rule. What is the bandwidth of an FM signal with Δf = 5 kHz and f_m = 1 kHz?
4. Why is the FM spectrum wider than the AM spectrum for the same message?
5. A VCO has k_f = 10 kHz/V. The message is 0.5 V peak, 1 kHz. What is Δf? What is β?
6. Sketch the frequency spectrum of an FM signal with β = 3.
7. Why is a PLL a better FM discriminator than a slope detector?
8. A student reports that the demodulated message has a large 100 kHz component. What is wrong?

## Takeaway

Frequency modulation is the lab's introduction to angle modulation. The FM signal equation, the frequency deviation, the modulation index, Carson's rule, and the Bessel function sidebands are the central concepts. The lab's discipline — careful measurement of the frequency deviation, proper demodulator design, attention to linearity and bandwidth — is the same discipline that runs through every FM system. The trade-off between bandwidth and noise performance is the central engineering decision in FM: more bandwidth gives better noise performance, but uses more spectrum. The same mathematics governs the operation of every wireless communication system, from FM radio to mobile phones to satellite communication.
