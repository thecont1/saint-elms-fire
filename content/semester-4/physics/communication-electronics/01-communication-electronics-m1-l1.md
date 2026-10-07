***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: communication-electronics
courseName: Communication Electronics
moduleId: communication-electronics-module-1
moduleName: Signals, Filters and Oscillators
lessonId: communication-electronics-m1-l1
lessonName: The Communication System and Signal Spectra
lessonNumber: 1
moduleNumber: 1
semesterNumber: 4
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - basic-electronics-m1-l2
  - electricity-and-magnetism-m2-l3
  - waves-and-optics-m1-l3
learningObjectives:
  - Draw and explain the block diagram of a general electronic communication system and state the function of each block.
  - Represent periodic and aperiodic signals in the frequency domain using the Fourier series and Fourier transform, and apply the modulation property $x(t)\cos 2\pi f_c t \leftrightarrow \tfrac{1}{2}[X(f-f_c)+X(f+f_c)]$.
  - Define and estimate the bandwidth of common baseband signals and explain why modulation is necessary before transmission.
  - Convert between power ratios and decibels (dB, dBm, dBW) and use them in gain and loss calculations.
concepts:
  - Communication system block diagram
  - Fourier series and line spectrum
  - Fourier transform and continuous spectrum
  - Frequency-shift (modulation) property
  - Signal bandwidth
  - Baseband and passband signals
  - Decibel scale
tags:
  - physics
  - communication-electronics
  - signal-spectra
  - fourier-analysis
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# The Communication System and Signal Spectra

## Overview

Every communication system, from a telegraph key to a 5G handset, converts information into an electrical signal, carries it through a channel and recovers it despite noise and distortion. This lesson sets out the course's vocabulary: the block diagram of a communication system and the frequency-domain description of a signal, in which the Fourier series turns a periodic waveform into spectral lines and the Fourier transform turns an aperiodic signal into a continuous spectrum. The frequency-shift property explains in one line what every modulator does, and bandwidth determines how many signals share a channel and how much noise a receiver admits. The lesson closes with the decibel scale.

## Learning Path

- **What you should already know**: passive components under sinusoidal excitation (Basic Electronics, Lesson m1-l2); the RC transient response (Electricity and Magnetism, Lesson m2-l3); superposition of sinusoids and beats (Waves and Optics, Lesson m1-l3).
- **What this lesson adds**: the communication-system block diagram; Fourier spectra and the frequency-shift property; bandwidth; decibels.
- **What later lessons this will unlock**: filter frequency response (Lesson m1-l2); AM and FM sidebands (Lessons m2-l1 and m2-l3); noise bandwidth and Shannon capacity (Lessons m3-l2 and m3-l3).

## Core Explanation

### The block diagram of a communication system

A **communication system** carries information from a source through a channel to a destination, in five stages.

| Block | Function | Example |
|---|---|---|
| Source and input transducer | Converts the message into an electrical **baseband signal** $m(t)$ | Microphone, camera sensor |
| Transmitter | Amplifies, filters and above all **modulates**: impresses $m(t)$ on a high-frequency **carrier** | AM/FM transmitter, mobile RF front end |
| Channel | The physical medium; it attenuates, distorts and adds **noise** | Free space, 50 Ω coaxial cable, optical fibre |
| Receiver | Selects the wanted signal, amplifies it and **demodulates** it to recover $\hat m(t)$ | Superheterodyne radio |
| Output transducer and destination | Converts $\hat m(t)$ into a usable form | Loudspeaker, display |

The channel has finite bandwidth, attenuates the signal and adds unavoidable noise (Lesson m3-l2); the transmitter and receiver, above all the modulator and demodulator, are designed so that the message survives it.

### Why modulate?

Radiating speech (300 Hz to 3.4 kHz) directly is impractical: an efficient antenna is typically $\lambda/4$ long, and at 3 kHz $\lambda = 100$ km. Baseband transmissions would also all overlap; shifting messages to different carrier frequencies (**frequency-division multiplexing**) separates them. And since propagation depends strongly on frequency, the carrier can be chosen where the channel behaves well. Modulation shifts the spectrum of $m(t)$ from baseband to a **passband** centred on the carrier frequency $f_c$; making this precise needs the frequency domain.

### Fourier series: periodic signals and line spectra

A periodic signal $x(t)$ with period $T_0 = 1/f_0$ is a sum of harmonics of the fundamental $f_0$. In complex exponential form,

$$x(t) = \sum_{n=-\infty}^{\infty} c_n e^{j 2\pi n f_0 t}, \qquad c_n = \frac{1}{T_0}\int_{-T_0/2}^{T_0/2} x(t)\, e^{-j 2\pi n f_0 t}\, dt.$$

$c_n$ is the complex amplitude at frequency $n f_0$; a plot of $|c_n|$ against $n f_0$ is the **line spectrum**. For a real signal $c_{-n} = c_n^*$, so negative-frequency lines mirror positive ones; the sine–cosine series is the real form of the same expansion.

The average power is distributed among the harmonics according to **Parseval's theorem**,

$$P = \frac{1}{T_0}\int_{-T_0/2}^{T_0/2} |x(t)|^2\, dt = \sum_{n=-\infty}^{\infty} |c_n|^2.$$

A square wave of amplitude $\pm A$ has only odd harmonics with $|c_n| = 2A/(n\pi)$, falling as $1/n$; a triangular wave's fall as $1/n^2$. Smoother waveforms have faster-decaying spectra and need less bandwidth.

### Fourier transform: aperiodic signals and continuous spectra

For an aperiodic signal such as a pulse or speech, letting $T_0 \to \infty$ turns the sum into an integral, the **Fourier transform**:

$$X(f) = \int_{-\infty}^{\infty} x(t)\, e^{-j 2\pi f t}\, dt, \qquad x(t) = \int_{-\infty}^{\infty} X(f)\, e^{j 2\pi f t}\, df.$$

$|X(f)|$ is the **amplitude spectrum**, $\arg X(f)$ the **phase spectrum**, and by Parseval's theorem $|X(f)|^2$ is the **energy spectral density**.

The key example is the rectangular pulse, $x(t) = A$ for $|t| < \tau/2$ and zero otherwise:

$$X(f) = \int_{-\tau/2}^{\tau/2} A e^{-j2\pi f t}\, dt = A\tau\,\frac{\sin(\pi f \tau)}{\pi f \tau} = A\tau\, \mathrm{sinc}(f\tau).$$

The main lobe lies between nulls at $f = \pm 1/\tau$ and the side lobes decay as $1/f$. This **time–bandwidth reciprocity** between duration $\tau$ and spectral width $1/\tau$ is why a 1 Gbit/s stream of 1 ns pulses needs a channel about 1 GHz wide.

The snippet below computes the amplitude spectrum of a 1 ms rectangular pulse with the FFT; expect a sinc-shaped main lobe with nulls at multiples of 1 kHz.

```python
import numpy as np
import matplotlib.pyplot as plt

fs, tau = 1e6, 1e-3                       # sample rate (Hz), pulse width (s)
t = np.arange(-0.01, 0.01, 1/fs)
x = np.where(np.abs(t) < tau/2, 1.0, 0.0)
X = np.fft.fftshift(np.fft.fft(x)) / fs   # approximates X(f)
f = np.fft.fftshift(np.fft.fftfreq(len(t), 1/fs))
plt.plot(f/1e3, np.abs(X)/tau); plt.xlim(-5, 5)
plt.xlabel("f (kHz)"); plt.ylabel("|X(f)|/(A tau)"); plt.grid(True); plt.show()
```

### Properties that matter for communication

**Linearity**: the spectrum of a sum is the sum of the spectra, so multi-tone AM sidebands can be found one tone at a time.

**Time shift**: $x(t - t_0) \leftrightarrow X(f) e^{-j 2\pi f t_0}$; a delay changes only the phase, so a distortionless channel needs a phase shift linear in frequency.

**Frequency shift (modulation property)**: multiplying by a complex exponential shifts the spectrum, $x(t) e^{j 2\pi f_c t} \leftrightarrow X(f - f_c)$, and because $\cos 2\pi f_c t = \tfrac{1}{2}(e^{j2\pi f_c t} + e^{-j 2\pi f_c t})$,

$$x(t)\cos 2\pi f_c t \;\leftrightarrow\; \tfrac{1}{2}\left[X(f - f_c) + X(f + f_c)\right].$$

This is the mathematical content of amplitude modulation: multiplying by a carrier produces two copies of the baseband spectrum, centred at $\pm f_c$. If $m(t)$ occupies $0$ to $W$, the modulated signal occupies $f_c - W$ to $f_c + W$, a **transmission bandwidth** of $2W$. The part above $f_c$ is the **upper sideband** and the part below the **lower sideband**.

### Bandwidth

The **bandwidth** of a signal is the range of frequencies holding significant spectral content. Since real spectra rarely reach exactly zero, several definitions are used: **absolute bandwidth** (spectrum identically zero outside), **3 dB bandwidth** (spectral power above half its peak) and **null-to-null bandwidth** (the main lobe, $2/\tau$ for a rectangular pulse). Telephone speech needs 300 Hz to 3.4 kHz, broadcast audio 50 Hz to 15 kHz, analogue television video about 5 MHz, and binary data at rate $R_b$ roughly $R_b/2$ to $R_b$.

Bandwidth is a regulated resource: the radio spectrum is divided into bands (MF for AM broadcasting at 526 – 1606 kHz, HF for sky-wave links, VHF for FM broadcasting at 88 – 108 MHz, UHF for mobile telephony, SHF for satellites and radar) whose propagation behaviour is the subject of Lesson m3-l1.

### Decibels

Power ratios span many orders of magnitude, so they are described logarithmically, and cascaded gains and losses then add. A power ratio is expressed in **decibels** as

$$G_{\text{dB}} = 10 \log_{10}\frac{P_2}{P_1},$$

and since power is proportional to voltage squared in a fixed resistance, the voltage form is $20 \log_{10}(V_2/V_1)$. A factor of 2 in power is 3.01 dB. Absolute levels need a reference: **dBm** is relative to 1 mW and **dBW** to 1 W, so a 1 kW transmitter delivers $+60$ dBm $= +30$ dBW. In a chain of amplifiers, cables and antennas the output level in dBm is the input level plus gains minus losses in dB: the **link budget** of Lesson m3-l1.

## Key Ideas

- **Block diagram**: source, transmitter (modulator), channel (attenuation plus noise), receiver (demodulator), destination.
- **Fourier series**: a periodic signal is a sum of harmonics $n f_0$ with amplitudes $c_n$; Parseval's theorem gives the power as $\sum |c_n|^2$.
- **Fourier transform**: an aperiodic signal has a continuous spectrum; a pulse of duration $\tau$ has a sinc spectrum with nulls at $\pm 1/\tau$.
- **Modulation property**: $x(t)\cos 2\pi f_c t$ has spectrum $\tfrac{1}{2}[X(f-f_c)+X(f+f_c)]$; a baseband signal of width $W$ becomes a passband signal of width $2W$ with two sidebands.
- **Bandwidth** is a regulated resource with absolute, 3 dB and null-to-null definitions.
- **Decibels**: $10\log_{10}(P_2/P_1)$ for power, $20\log_{10}(V_2/V_1)$ for voltage; dBm and dBW are absolute levels.

## Worked Examples

### Example 1 — Harmonic content of a square wave

A ±5 V square wave has a period of 1 ms. Find the first three non-zero harmonic amplitudes and the fraction of the power in the fundamental.

**Solution.** For an odd square wave of amplitude $A$,

$$x(t) = \frac{4A}{\pi}\left(\sin \omega_0 t + \frac{1}{3}\sin 3\omega_0 t + \frac{1}{5}\sin 5 \omega_0 t + \cdots\right), \qquad f_0 = 1\ \text{kHz}.$$

With $A = 5$ V the fundamental amplitude is $4 \times 5/\pi = 6.37$ V at 1 kHz, the third harmonic is $2.12$ V at 3 kHz and the fifth is $1.27$ V at 5 kHz. The mean-square value is $A^2 = 25$ V$^2$; the fundamental contributes $(6.37)^2/2 = 20.3$ V$^2$, i.e. $81.1\%$ of the power. Passing only these three harmonics still visibly rounds the edges.

### Example 2 — Antenna size and the need for modulation

Compare quarter-wave antenna lengths for a 3 kHz tone, a 1 MHz AM carrier and a 100 MHz FM carrier.

**Solution.** With $\lambda = c/f$: at 3 kHz, $\lambda = 10^5$ m and $\lambda/4 = 25$ km, impossible; at 1 MHz, $\lambda = 300$ m and $\lambda/4 = 75$ m, a medium-wave broadcast mast; at 100 MHz, $\lambda = 3$ m and $\lambda/4 = 0.75$ m, a car aerial. The information is identical; modulation moves it to a frequency a practical antenna can radiate. The AM signal occupies 6 kHz around 1 MHz, a fractional bandwidth of 0.6%, so the antenna need be efficient only over a narrow band.

### Example 3 — A link budget in decibels

A transmitter delivers 20 W into a cable with 3 dB loss feeding an antenna of gain 6 dB. The path loss is 110 dB; the receiving antenna has gain 2 dB and its cable 1 dB loss. Find the received power in dBm and in watts.

**Solution.** The transmitter power is $P_t = 10\log_{10}(20 / 10^{-3}) = 43.0$ dBm. Adding gains and subtracting losses,

$$P_r = 43.0 - 3 + 6 - 110 + 2 - 1 = -63.0\ \text{dBm}.$$

In watts, $P_r = 10^{-6.3}\ \text{mW} = 5.0 \times 10^{-10}$ W, i.e. 0.5 nW. The overall ratio is $-106$ dB, that is $P_r / P_t = 2.5 \times 10^{-11}$.

## Common Misconceptions

- **"A signal has a single frequency, the one you read off the oscilloscope."** Only a pure sinusoid does. Any other waveform is a superposition of many frequencies, all of which must pass through the channel.
- **"Negative frequencies are a mathematical fiction."** They come from representing real signals with complex exponentials; the pair $\pm f$ makes one real cosine, and after shifting by $f_c$ the negative-frequency copy becomes the entirely physical lower sideband.
- **"Bandwidth is the highest frequency in the signal."** Only at baseband; a 200 kHz-wide signal centred at 100 MHz reaches 100.1 MHz. Bandwidth is a width, not a maximum.
- **"Decibels are a unit of power."** A decibel expresses a dimensionless ratio; only with a reference (dBm, dBW) does it denote an absolute level.

## Connections

- The same Fourier tools decompose a vibrating string into normal modes and a diffraction pattern into spatial frequencies (Waves and Optics, Lessons m1-l3 and m3-l2); the single-slit pattern is the sinc spectrum of a rectangular aperture.
- Time–bandwidth reciprocity is the classical ancestor of the energy–time uncertainty relation of Introduction to Quantum Mechanics (Lesson m1-l3): a wave packet of duration $\Delta t$ has frequency spread $\Delta f \gtrsim 1/\Delta t$ for the same mathematical reason.
- Linearity and time-shift invariance reflect the linear differential equations of RLC networks (Differential Equations, Lessons m2-l1 to m2-l3); the Laplace transform of Lesson m3-l2 there is the Fourier transform's close relative.
- The oscilloscope FFT display used to measure modulation spectra in Communication Electronics Lab, Lesson m1-l4, implements the discrete form of this transform.

## Quick Check

1. Name the five blocks of a general communication system and state which two the course concentrates on.
2. A rectangular pulse lasts 2 µs. Where are the first nulls of its spectrum, and what is its null-to-null bandwidth?
3. State the frequency-shift property and use it to explain why an AM signal occupies twice the baseband bandwidth.
4. Express 50 mW in dBm and 4 kW in dBW. What is the voltage gain in dB of an amplifier that raises 10 mV to 2 V?
5. Why does a triangular wave need less channel bandwidth than a square wave of the same fundamental?

## Takeaway

- A communication system is source, transmitter, channel, receiver and destination; modulation and demodulation are its core.
- Periodic signals have line spectra (Fourier series); aperiodic signals have continuous spectra (Fourier transform); a pulse of duration $\tau$ has spectral width of order $1/\tau$.
- Multiplying by a carrier shifts the baseband spectrum to $\pm f_c$ and doubles its width into two sidebands.
- Decibels make gains and losses additive; dBm and dBW give absolute levels.
