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
lessonId: communication-electronics-lab-m1-l4
lessonName: Oscilloscope Measurements — Time Domain, Frequency Domain, FFT
lessonNumber: 4
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - communication-electronics-lab-m1-l3
learningObjectives:
  - Use an oscilloscope to measure the amplitude, period, frequency, and phase of a periodic signal in the time domain.
  - Use the Fast Fourier Transform (FFT) function of a digital oscilloscope to view the frequency spectrum of a signal.
  - Use the scope to characterise an AM signal: measure the carrier amplitude, the modulation envelope, and the sideband frequencies.
concepts:
  - Oscilloscope
  - Time domain
  - Frequency domain
  - Fast Fourier Transform (FFT)
  - Amplitude measurement
  - Period measurement
  - Phase measurement
  - Trigger
  - Bandwidth limit
tags:
  - physics
  - laboratory
  - communication
  - oscilloscope
  - fft
  - time-frequency
sourceType: authored-courseware
assessmentHints:
  - Time domain: measure V_pp (peak-to-peak), period T, and rise time on the scope.
  - Frequency domain: use FFT to view the spectrum; the FFT is the discretised Fourier transform of the time-domain signal.
  - The scope's bandwidth limits the highest frequency that can be measured; for a 100 MHz scope, signals up to 100 MHz are accurate.
status: in-review
***

# Oscilloscope Measurements — Time Domain, Frequency Domain, FFT

## Overview

The oscilloscope is the workhorse instrument of any electronics lab. It displays a voltage as a function of time (the time domain) and, in modern digital scopes, also the voltage as a function of frequency (the frequency domain, via the Fast Fourier Transform). The two views are complementary: the time domain shows the waveform shape (sine, square, pulse, modulated), the frequency domain shows the spectral content (single frequency, harmonics, sidebands, noise).

This lesson covers the apparatus (a digital oscilloscope with FFT, function generators, BNC cables, a calibration probe), the procedure (set up the scope, measure the amplitude and period of a sine wave, then a square wave; use the FFT to view the spectrum), the analysis (compare time-domain and frequency-domain measurements), and the dominant sources of error (scope bandwidth, probe compensation, sampling rate, FFT resolution).

## Learning Path

1. **Compensate the scope probe** — connect the probe to the scope's calibration terminal; adjust the trimmer until the square wave is flat-topped.
2. **Set up the time domain** — connect a 1 kHz sine wave from the function generator; adjust the vertical scale and time base to display several cycles; measure the peak-to-peak voltage and the period.
3. **Set up the frequency domain** — activate the FFT function; observe the spectrum; identify the peak at 1 kHz and any harmonics.
4. **Measure an AM signal** — connect the AM signal from L1; observe the modulated waveform in the time domain; observe the carrier and sidebands in the frequency domain.
5. **Measure a square wave** — connect a 1 kHz square wave; observe the time-domain waveform (with the fast edges) and the frequency-domain spectrum (with the odd harmonics at 3, 5, 7, ... kHz).

## Core Explanation

### Theory: Time-Domain Measurements

A periodic signal in the time domain is characterised by:
- **Amplitude:** peak-to-peak (V_pp), peak (V_p), or RMS (V_rms). For a sine wave, V_rms = V_p / √2.
- **Period:** T, the time for one cycle. Frequency f = 1/T.
- **Phase:** φ, the offset of the waveform relative to a reference. Measured by the time difference Δt between a zero crossing of the signal and a zero crossing of the reference; φ = 2π f Δt.
- **Rise time:** t_r, the time for the signal to go from 10 % to 90 % of its final value. For a square wave, t_r is set by the bandwidth of the source and the scope.

The scope displays the voltage as a function of time. The vertical scale (V/div) and the time base (s/div) are adjusted to fit the signal. The trigger (level, slope, source) synchronises the display to the signal.

### Theory: Frequency-Domain Measurements (FFT)

The Fast Fourier Transform (FFT) converts a time-domain signal to its frequency-domain representation. For a sampled signal of N points sampled at f_s, the FFT returns N frequency bins spaced by Δf = f_s / N. The frequency range is from − f_s / 2 to f_s / 2 (or 0 to f_s / 2 for a real signal, by the symmetry of the FFT of a real signal).

The FFT of a sine wave at frequency f_0 is a single peak at f = f_0 (and a symmetric peak at f = − f_0 for a real signal). The peak height is proportional to the amplitude of the sine wave.

The FFT of a square wave is a series of peaks at f_0, 3 f_0, 5 f_0, ... (the odd harmonics), with amplitudes 1/n (where n is the harmonic number).

The FFT of an AM signal is three peaks: the carrier at f_c and the sidebands at f_c ± f_m.

### Theory: Bandwidth and Sampling

The scope's bandwidth is the highest frequency at which the scope can accurately measure a signal. For a 100 MHz scope, signals up to 100 MHz are accurate (within 3 dB). Above the bandwidth, the signal is attenuated.

The sampling rate is the rate at which the scope's ADC samples the input signal. For accurate FFT, the sampling rate must be at least twice the highest frequency in the signal (Nyquist criterion). For a 100 MHz signal, the sampling rate must be > 200 MSa/s.

The FFT resolution is set by the number of points: Δf = f_s / N. For f_s = 1 GSa/s and N = 1000 points, Δf = 1 MHz. For finer resolution, increase N (or decrease f_s if the signal allows).

### Apparatus

- Digital oscilloscope (bandwidth 100 MHz or more, sampling rate 1 GSa/s or more, with FFT function).
- Function generator (sine, square, AM output).
- Scope probes (×1, ×10).
- BNC cables, BNC-to-banana adapters.
- Safety glasses.

### Procedure

1. **Compensate the scope probe.** Connect the probe to the scope's calibration terminal (a 1 kHz square wave, typically 1 V or 5 V). Adjust the probe's trimmer capacitor until the displayed square wave is flat-topped.
2. **Set up the time domain.** Connect a 1 kHz sine wave (1 V peak) from the function generator to channel 1 of the scope. Adjust the vertical scale to 0.5 V/div and the time base to 0.2 ms/div. The display should show 5 cycles of the sine wave. Measure V_pp (should be 2 V) and T (should be 1 ms).
3. **Set up the frequency domain.** Activate the FFT function. Choose a center frequency of 5 kHz and a span of 10 kHz (so the display covers 0–10 kHz). The FFT should show a single peak at 1 kHz. Measure the peak height (in dBV or V_rms).
4. **Measure an AM signal.** Connect the AM signal from L1 (carrier 100 kHz, message 1 kHz, modulation index 0.5). Set the time base to 0.2 ms/div to display the modulated waveform. Activate the FFT; set the center frequency to 100 kHz and the span to 5 kHz. The FFT should show three peaks: the carrier at 100 kHz and the sidebands at 99 and 101 kHz.
5. **Measure a square wave.** Connect a 1 kHz square wave (1 V peak). Set the time base to 0.2 ms/div. The display should show the square wave with fast edges. Activate the FFT; set the span to 10 kHz. The FFT should show peaks at 1, 3, 5, 7, 9 kHz with decreasing amplitudes.

### Analysis

#### Time-Domain Measurements

Compare the measured V_pp, T, and phase with the function generator's settings. The amplitude should be within 3 % of the setting; the period should be within 0.1 %.

#### Frequency-Domain Measurements

The FFT peak height for a sine wave of amplitude A is A / √2 in V_rms (for a single-sided FFT) or A / (2 √2) (for a double-sided FFT). The frequency of the peak should match the function generator's setting.

For a square wave with amplitude A, the FFT peaks are at f_0, 3 f_0, 5 f_0, ... with amplitudes A / (n π) (for an ideal square wave, ignoring the scope's bandwidth limit).

For an AM signal with carrier amplitude A_c and modulation index m, the carrier peak is at A_c / √2, and each sideband is at (m A_c) / (2 √2).

#### Resolution and Windowing

The FFT assumes the signal is periodic within the captured window. If the window does not contain an integer number of cycles, the FFT has spectral leakage: the peak is broadened and the amplitude is reduced. The remedy is to use a window function (Hann, Hamming, Blackman) that tapers the edges of the window, reducing the leakage at the cost of slightly broader peaks.

### Sources of Error

- **Scope bandwidth.** A signal with frequency content above the scope's bandwidth is attenuated. For a 100 MHz scope, a 100 MHz sine wave is accurate to 3 dB; a 200 MHz sine wave is attenuated to ~ 30 %.
- **Probe compensation.** An uncompensated probe distorts the waveform. Re-check the compensation before each measurement.
- **Sampling rate.** An insufficient sampling rate causes aliasing: high-frequency components are folded back to lower frequencies. Use a sampling rate at least 2× the highest frequency.
- **FFT resolution.** A low-resolution FFT (few points, low sampling rate) cannot resolve closely-spaced frequencies. Increase N or use a smaller span.
- **Triggering.** An improperly triggered scope shows a jittery or unstable waveform. Adjust the trigger level and slope for a stable display.
- **Loading.** The scope probe (1 MΩ || 20 pF) loads the circuit. Use a ×10 probe for high-impedance circuits; use a ×1 probe for low-impedance signals where the loading is negligible.

## Key Ideas

- Time domain: voltage vs time; measure V_pp, T, φ, t_r.
- Frequency domain: voltage vs frequency; measure amplitude, frequency, harmonics, sidebands.
- FFT: the bridge between time domain and frequency domain.
- Scope bandwidth: the highest frequency that can be accurately measured.
- Sampling rate: must be at least 2× the highest frequency (Nyquist).
- Windowing: reduces spectral leakage in the FFT.

## Worked Examples

### Example 1: Sine wave measurement

A 1 kHz sine wave with V_pp = 2 V. The scope displays 5 cycles at 0.2 ms/div (1 ms per cycle = 1 kHz). The V_pp is 4 divisions at 0.5 V/div = 2 V. The period is 5 divisions at 0.2 ms/div = 1 ms. The frequency is 1 / 1 ms = 1 kHz. All consistent with the function generator.

### Example 2: AM signal in time and frequency domain

An AM signal with carrier 100 kHz, message 1 kHz, modulation index 0.5. In the time domain, the scope shows the modulated waveform with envelope. In the frequency domain (FFT), the scope shows three peaks: carrier at 100 kHz with amplitude A_c / √2 = 1 / √2 = 0.707 V_rms (for A_c = 1 V peak), and sidebands at 99 and 101 kHz with amplitude (m A_c) / (2 √2) = (0.5 · 1) / (2 √2) = 0.177 V_rms.

### Example 3: Square wave FFT

A 1 kHz square wave with V_pp = 2 V (so V_p = 1 V). The ideal FFT has peaks at 1, 3, 5, 7, ... kHz with amplitudes 1 / (n π) V_p = 1 / (n π) · 1 = 0.318 / n V_rms. So:
- 1 kHz: 0.318 / 1 = 0.318 V_rms.
- 3 kHz: 0.318 / 3 = 0.106 V_rms.
- 5 kHz: 0.318 / 5 = 0.064 V_rms.
- 7 kHz: 0.318 / 7 = 0.045 V_rms.

The amplitudes decrease as 1/n, and only odd harmonics are present. A real square wave (with finite rise time) has reduced high-frequency content.

## Common Misconceptions

- **"The scope measures the true signal."** The scope measures the signal as seen through its probe, bandwidth, and sampling system. A scope with insufficient bandwidth or sampling rate distorts the signal.
- **"The FFT and the spectrum analyser are the same."** The FFT is a mathematical operation; the spectrum analyser is an instrument. A digital scope with FFT is a poor man's spectrum analyser; a dedicated spectrum analyser has better dynamic range, lower noise, and more flexible resolution.
- **"The FFT gives the exact spectrum."** The FFT gives an approximation; the resolution is set by the sampling rate and the number of points. For a finite signal, the FFT is exact up to the resolution.
- **"All scopes have the same bandwidth."** Scopes have bandwidths from 10 MHz to 100 GHz. The right scope for a measurement depends on the signal's frequency content.
- **"The trigger level must be at the zero crossing."** The trigger level can be at any value within the signal's range. The slope (rising or falling) determines whether the scope triggers on the rising or falling edge.

## Connections

- **Communication Electronics (Sem 4 theory).** The scope is the primary tool for characterising communication signals: AM, FM, pulse, digital. The FFT is the primary tool for frequency-domain analysis.
- **Signal processing.** The FFT is the foundation of digital signal processing: filtering, convolution, spectral estimation, modulation/demodulation. The same FFT, applied to different signals, gives different information.
- **Engineering.** Every electronic design is tested with a scope. The scope is the engineer's stethoscope: it shows the heartbeat of the circuit.
- **Physics.** The scope is used in every physics lab: time-domain measurements of pulses, frequency-domain analysis of spectra, transient capture. The same instrument, applied to different signals, gives different information.
- **Data acquisition.** Modern scopes are essentially fast data acquisition systems. The captured waveform can be transferred to a computer for further analysis (filtering, FFT, parameter extraction).

## Quick Check

1. What is the difference between the time domain and the frequency domain?
2. What does the FFT do? What is its input? Its output?
3. What is the Nyquist criterion? Why is it important?
4. The scope bandwidth is 100 MHz. A 200 MHz sine wave is input. What is observed?
5. A scope samples at 1 GSa/s. The signal has a 600 MHz component. What happens?
6. A square wave has a 1 ns rise time. What is the approximate bandwidth of the signal?
7. Why is windowing used in FFT?
8. The FFT shows a peak at 50 kHz, but the scope's time base shows a period of 25 μs. Is this consistent?

## Takeaway

The oscilloscope is the lab's primary instrument. The time-domain view shows the waveform shape; the frequency-domain view (via FFT) shows the spectral content. The two are complementary: the time domain is best for pulse and transient measurements; the frequency domain is best for spectral and modulation measurements. The scope's bandwidth, sampling rate, and probe compensation are the three main considerations for accurate measurement. The FFT is the bridge between the two domains; the same FFT, applied to different signals, reveals the structure of the signal in the frequency domain. The lab's discipline — proper probe compensation, correct bandwidth, adequate sampling rate, careful triggering — is the same discipline that runs through every electronic measurement.
