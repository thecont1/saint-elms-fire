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
lessonId: communication-electronics-lab-m1-l1
lessonName: Amplitude Modulation and Demodulation
lessonNumber: 1
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - quantum-mechanics-lab-m1-l6
learningObjectives:
  - Generate an AM signal by modulating a carrier with a message signal and observe the modulated waveform on an oscilloscope.
  - Measure the modulation index and verify the AM signal structure: carrier plus two sidebands.
  - Demodulate the AM signal with an envelope detector and recover the message signal.
concepts:
  - Amplitude modulation
  - Carrier signal
  - Modulating signal
  - Modulation index
  - Sidebands
  - Envelope detector
  - Diode detector
  - Time domain and frequency domain
tags:
  - physics
  - laboratory
  - communication
  - am
  - modulation
  - demodulation
sourceType: authored-courseware
assessmentHints:
  - AM signal: s(t) = A_c [1 + m cos(2π f_m t)] cos(2π f_c t), where m is the modulation index and f_m, f_c are the message and carrier frequencies.
  - The modulation index must be ≤ 1 to avoid overmodulation (which distorts the envelope).
  - The envelope detector is a diode rectifier followed by a low-pass RC filter.
status: in-review
***

# Amplitude Modulation and Demodulation

## Overview

Amplitude modulation (AM) is the simplest form of analog modulation: the amplitude of a high-frequency carrier is varied in proportion to a lower-frequency message signal. The AM signal is

s(t) = A_c [1 + m cos(2π f_m t)] cos(2π f_c t),

where A_c is the carrier amplitude, m is the modulation index (0 ≤ m ≤ 1 for undistorted modulation), f_m is the message frequency, and f_c is the carrier frequency (f_c ≫ f_m). The signal has three frequency components: the carrier at f_c, the upper sideband (USB) at f_c + f_m, and the lower sideband (LSB) at f_c − f_m. The total bandwidth is 2 f_m.

This lesson covers the apparatus (a function generator, an AM modulator circuit or a multiplier IC, an oscilloscope, an envelope detector), the procedure (set up the AM signal, observe on the scope, measure the modulation index, demodulate with the envelope detector), the analysis (verify the AM signal structure, the modulation index, and the recovered message), and the dominant sources of error (overmodulation, distortion, time constant of the detector).

## Learning Path

1. **Set up the AM modulator** — connect a function generator (message signal, e.g. 1 kHz sine) to the message input of an AM modulator; connect a second function generator (carrier, e.g. 100 kHz) to the carrier input.
2. **Observe the modulated signal** on the oscilloscope. Set the time base to display several cycles of the message; you should see the carrier waveform with an envelope that follows the message.
3. **Measure the modulation index** — read the maximum (A_max) and minimum (A_min) of the envelope from the scope. The modulation index is m = (A_max − A_min) / (A_max + A_min).
4. **Demodulate with the envelope detector** — feed the modulated signal to a diode detector (a diode in series with a resistor-capacitor low-pass filter); observe the recovered message on the scope.
5. **Verify** that the recovered message has the same frequency as the original message and the same amplitude (within the gain of the detector).

## Core Explanation

### Theory: Amplitude Modulation

The AM signal is

s(t) = A_c [1 + m cos(2π f_m t)] cos(2π f_c t).

Expanding using the product-to-sum identity:

s(t) = A_c cos(2π f_c t) + (m A_c / 2) cos[2π (f_c + f_m) t] + (m A_c / 2) cos[2π (f_c − f_m) t].

The three terms are:
- Carrier: A_c cos(2π f_c t), at frequency f_c, amplitude A_c.
- USB: (m A_c / 2) cos[2π (f_c + f_m) t], at frequency f_c + f_m, amplitude m A_c / 2.
- LSB: (m A_c / 2) cos[2π (f_c − f_m) t], at frequency f_c − f_m, amplitude m A_c / 2.

In the frequency domain, the AM signal has three lines (for a single-tone message). The carrier is at f_c; the sidebands are at f_c ± f_m. The total bandwidth is 2 f_m (from f_c − f_m to f_c + f_m).

### Theory: Modulation Index

The modulation index m is the ratio of the message amplitude to the carrier amplitude (in the AM definition). For 0 ≤ m ≤ 1, the envelope of the modulated signal is a faithful copy of the message. For m > 1 (overmodulation), the envelope is distorted; the message cannot be recovered by a simple envelope detector.

The modulation index can be measured from the envelope: m = (A_max − A_min) / (A_max + A_min), where A_max and A_min are the maximum and minimum amplitudes of the envelope.

### Theory: Envelope Detector

The envelope detector is a diode rectifier followed by a low-pass RC filter. The diode conducts when the modulated signal is positive, charging the capacitor to the peak voltage. When the modulated signal drops below the capacitor voltage, the diode is reverse-biased and the capacitor discharges through the resistor. The result is a signal that follows the envelope of the modulated wave.

For the detector to follow the envelope faithfully, the time constant τ = R C must satisfy

1 / f_c ≪ τ ≪ 1 / f_m.

The first condition ensures that the capacitor charges quickly to the carrier peak; the second ensures that the capacitor can follow the envelope (which varies at f_m). A typical choice for AM broadcast (f_c ~ 1 MHz, f_m ~ 5 kHz) is τ ~ 10–100 μs.

### Apparatus

- Two function generators (one for the carrier, one for the message; or a single generator with two outputs).
- AM modulator (e.g. an MC1496 balanced modulator, or a discrete transistor modulator).
- Oscilloscope (two channels).
- Envelope detector: a diode (1N4148 or similar), a resistor (10 kΩ), a capacitor (1 nF to 1 μF, depending on the carrier and message frequencies).
- Power supply (±12 V or ±15 V for the modulator).
- Spectrum analyser (optional; for frequency-domain measurements).
- Safety glasses.

### Procedure

1. **Set up the function generators.** Carrier: 100 kHz sine, 1 V peak. Message: 1 kHz sine, 0.5 V peak.
2. **Connect the carrier to the carrier input of the modulator**; the message to the message input. The output is the AM signal.
3. **Observe the AM signal on the oscilloscope.** Set the time base to 0.5 ms/div to display several cycles of the message. You should see the carrier waveform (fast oscillations) with an envelope that follows the 1 kHz message.
4. **Measure the envelope.** Read A_max and A_min from the scope. Compute m.
5. **Connect the AM signal to the envelope detector.** The detector output should be a 1 kHz sine wave (the recovered message) with a small carrier ripple.
6. **Observe the detector output on the second scope channel.** Verify that the recovered message has the same frequency as the original message.

### Analysis

#### Modulation Index

m = (A_max − A_min) / (A_max + A_min).

For example, if A_max = 1.5 V and A_min = 0.5 V, then m = (1.5 − 0.5) / (1.5 + 0.5) = 0.5. This is a 50 % modulation, well within the undistorted range.

#### Frequency Spectrum

A spectrum analyser (or an FFT on a digital scope) shows three lines:
- Carrier at 100 kHz, amplitude A_c.
- USB at 101 kHz, amplitude m A_c / 2.
- LSB at 99 kHz, amplitude m A_c / 2.

The ratio of sideband amplitude to carrier amplitude is m / 2. For m = 0.5, the sidebands are 1/4 of the carrier amplitude, i.e. −12 dB relative to the carrier.

#### Distortion

If m > 1, the envelope has a "notch" at the negative peaks of the message; the signal is overmodulated. The envelope detector will distort the recovered message.

### Sources of Error

- **Modulator linearity.** A real AM modulator may not be perfectly linear; the modulation index may vary with the message amplitude. Check with several message amplitudes.
- **Carrier feedthrough.** Some of the carrier leaks through the modulator even with no message signal. This adds a DC offset to the modulated signal.
- **Envelope detector time constant.** If τ is too small, the detector output has carrier ripple; if τ is too large, the detector cannot follow the envelope. Choose τ carefully.
- **Diode voltage drop.** A silicon diode has a forward voltage drop of ~ 0.6 V. The detector cannot follow signals with envelopes below this voltage. Use a Schottky diode (drop ~ 0.3 V) or an op-amp precision rectifier for small signals.
- **Loading.** The detector loads the modulator output, reducing the modulated amplitude. Use a buffer (op-amp voltage follower) if necessary.

## Key Ideas

- AM signal: s(t) = A_c [1 + m cos(2π f_m t)] cos(2π f_c t).
- The modulation index m must be ≤ 1 for undistorted envelope.
- The AM signal has three frequency components: carrier, USB, LSB. Bandwidth = 2 f_m.
- The envelope detector is a diode rectifier + RC low-pass filter.
- The detector time constant must satisfy 1 / f_c ≪ τ ≪ 1 / f_m.

## Worked Examples

### Example 1: Modulation index from the scope

You observe an AM signal on the scope. The envelope has A_max = 1.5 V and A_min = 0.5 V.

m = (1.5 − 0.5) / (1.5 + 0.5) = 0.5.

This is 50 % modulation.

### Example 2: Spectrum

A spectrum analyser shows the carrier at 100 kHz with amplitude 1 V (peak). The sidebands at 99 and 101 kHz have amplitude 0.25 V (peak).

m = 2 · 0.25 / 1 = 0.5.

Consistent with the scope measurement.

### Example 3: Envelope detector output

The AM signal with m = 0.5 is fed to an envelope detector. The detector output is a 1 kHz sine wave with amplitude 0.5 V (peak) and a small carrier ripple at 100 kHz. The ripple amplitude depends on the time constant; for τ = 10 μs and a 100 kHz carrier, the ripple is ~ 1 % of the peak voltage.

The DC offset of the detector output is the average of the envelope, which is the carrier amplitude A_c. For A_c = 1 V, the DC offset is 1 V; the message is the AC component (0.5 V peak, 1 kHz).

## Common Misconceptions

- **"AM is the same as FM."** AM varies the amplitude of the carrier; FM varies the frequency. AM is more sensitive to noise (which adds amplitude variations); FM is more robust.
- **"The modulation index is the ratio of the message amplitude to the carrier frequency."** It is the ratio of the message amplitude to the carrier amplitude (both in the same units).
- **"Overmodulation is always bad."** Overmodulation distorts the envelope and prevents envelope detection. For double-sideband suppressed carrier (DSB-SC) modulation, the modulation index can be > 1 because there is no carrier to distort; a coherent detector is used.
- **"The envelope detector recovers the message exactly."** It recovers the envelope, which is the absolute value of the message (for a single-tone message). The sign of the message is lost; this is the well-known "phase reversal" of envelope detection.
- **"AM broadcast uses double-sideband full carrier (DSB-FC)."** Yes — the AM broadcast band (530–1700 kHz) uses DSB-FC with m ≤ 1. The carrier is transmitted for envelope detection; the sidebands carry the information. About 2/3 of the transmitted power is in the carrier (which carries no information).

## Connections

- **Communication Electronics (Sem 4 theory).** AM is the simplest modulation scheme and the basis for understanding more complex schemes (DSB-SC, SSB, QAM, FM). The frequency-domain representation (carrier + sidebands) is central to all modulation theory.
- **Signal processing.** The Fourier transform of an AM signal is three delta functions. The modulator and demodulator are linear time-invariant (LTI) systems; the modulator multiplies the message by the carrier, the demodulator multiplies the AM signal by a local carrier and low-pass filters.
- **History of technology.** AM broadcast was the first practical radio broadcasting method (1920s). The AM band (530–1700 kHz) is still in use today, although FM and digital modulation have largely replaced it for high-fidelity applications.
- **Astrophysics (Sem 5/6).** Radio astronomy uses both AM-like (DSB) and FM-like modulation; the signals from cosmic sources are processed by similar electronics. Pulsars are observed by their periodic pulses, and the receivers are essentially AM/FM demodulators.
- **Engineering.** AM is used in aircraft VHF communication (118–137 MHz, AM), citizen's band radio (27 MHz, AM), and shortwave broadcasting. The simplicity of the envelope detector is the main advantage.

## Quick Check

1. State the AM signal equation. Define each symbol.
2. What is the modulation index? What does it mean physically?
3. Why must the modulation index be ≤ 1 for envelope detection?
4. An AM signal has A_max = 2 V and A_min = 0.5 V. What is m?
5. Sketch the frequency spectrum of an AM signal with f_c = 1 MHz and f_m = 5 kHz.
6. Why must the envelope detector's time constant satisfy 1 / f_c ≪ τ ≪ 1 / f_m?
7. What is overmodulation? What does the envelope look like?
8. A student observes that the envelope detector output has a large carrier ripple. What is wrong?

## Takeaway

Amplitude modulation is the lab's introduction to communication electronics. The AM signal equation, the modulation index, the frequency spectrum, and the envelope detector are the four central concepts. The lab's discipline — careful observation of the modulated waveform, accurate measurement of the envelope, proper choice of detector time constant, attention to overmodulation — is the same discipline that runs through every modulation experiment in communications. AM is the simplest modulation scheme, but it is the basis for understanding more complex schemes (DSB-SC, SSB, QAM, FM). The same mathematics governs the demodulation of radio signals, the processing of radar returns, and the operation of every wireless communication system.
