***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: communication-electronics
courseName: Communication Electronics
moduleId: communication-electronics-module-2
moduleName: Analogue Modulation and Reception
lessonId: communication-electronics-m2-l3
lessonName: Frequency and Phase Modulation
lessonNumber: 6
moduleNumber: 2
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - communication-electronics-m2-l2
  - basic-electronics-m2-l1
learningObjectives:
  - Define instantaneous frequency, frequency deviation and modulation index $\beta = \Delta f/f_m$, and distinguish FM from PM.
  - Expand a tone-modulated FM signal in Bessel functions and use $J_n(\beta)$ to find sideband amplitudes and power.
  - Estimate FM bandwidth with Carson's rule $B \approx 2(\Delta f + f_m)$ and explain pre-emphasis and de-emphasis.
  - Describe FM generation by a VCO and the Armstrong method, and FM detection by discriminators and the phase-locked loop.
concepts:
  - Instantaneous frequency and frequency deviation
  - FM modulation index
  - Bessel function sidebands
  - Carson's rule
  - Pre-emphasis and de-emphasis
  - Frequency discriminator
  - Phase-locked loop
tags:
  - physics
  - communication-electronics
  - frequency-modulation
  - phase-locked-loop
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Frequency and Phase Modulation

## Overview

In **angle modulation** the message varies the phase angle of the carrier while its amplitude stays constant. If the instantaneous frequency follows the message, the result is **frequency modulation** (FM); if the phase follows it, **phase modulation** (PM). Angle modulation is non-linear in the message, so even a single tone generates an infinite set of sidebands with Bessel-function amplitudes. For this extra bandwidth FM buys immunity to amplitude noise and interference, which is why it carries VHF broadcasting and two-way radio. This lesson derives the FM spectrum, Carson's rule and pre-emphasis, then the circuits that generate FM (the VCO and Armstrong modulator) and recover it (discriminators and the phase-locked loop).

## Learning Path

- **What you should already know**: AM spectra and sidebands (Lesson m2-l1); the superheterodyne receiver and its IF stage (Lesson m2-l2); the LC oscillator (Lesson m1-l3); diode circuits (Basic Electronics, Lesson m2-l1).
- **What this lesson adds**: instantaneous frequency, FM and PM, the Bessel spectrum, Carson's rule, pre-emphasis, VCO and Armstrong generation, discriminator and PLL detection.
- **What later lessons this will unlock**: the FM noise advantage and threshold (Lesson m3-l2); FSK and PSK digital modulation (Lesson m3-l3).

## Core Explanation

### Instantaneous frequency, FM and PM

Write an angle-modulated wave as $s(t) = A_c\cos\theta(t)$. For an unmodulated carrier $\theta = 2\pi f_c t$, and the frequency is the rate of change of phase. In general the **instantaneous frequency** is

$$f_i(t) = \frac{1}{2\pi}\frac{d\theta}{dt}.$$

In **FM**, $f_i(t) = f_c + k_f m(t)$, where $k_f$ (Hz per volt) is the frequency sensitivity. Integrating,

$$s_{\text{FM}}(t) = A_c\cos\left[2\pi f_c t + 2\pi k_f\int_0^t m(\tau)\,d\tau\right].$$

In **PM**, the phase itself is proportional to the message, $\theta(t) = 2\pi f_c t + k_p m(t)$. The two are closely related: FM by $m(t)$ is PM by $\int m\,dt$, and PM by $m(t)$ is FM by $dm/dt$.

For a tone $m(t) = A_m\cos 2\pi f_m t$, FM gives a peak **frequency deviation** $\Delta f = k_f A_m$ and

$$s_{\text{FM}}(t) = A_c\cos(2\pi f_c t + \beta\sin 2\pi f_m t), \qquad \beta = \frac{\Delta f}{f_m}.$$

The **modulation index** $\beta$ is the peak phase deviation in radians. In FM, $\Delta f$ depends only on the message amplitude, so $\beta$ falls as $f_m$ rises; in PM, $\beta = k_p A_m$ is independent of $f_m$, so $\Delta f = \beta f_m$ rises with modulating frequency.

### The Bessel spectrum

The function $e^{j\beta\sin x}$ is periodic in $x$ and has the Fourier series $\sum_n J_n(\beta)e^{jnx}$, where $J_n$ is the Bessel function of the first kind of order $n$. Taking the real part of $A_c e^{j2\pi f_c t}e^{j\beta\sin 2\pi f_m t}$ gives

$$s_{\text{FM}}(t) = A_c\sum_{n=-\infty}^{\infty} J_n(\beta)\cos 2\pi(f_c + nf_m)t.$$

The spectrum is a carrier of amplitude $A_c J_0(\beta)$ and an infinite set of side frequencies at $f_c \pm nf_m$ with amplitudes $A_c|J_n(\beta)|$; since $J_{-n} = (-1)^n J_n$, the lower side frequencies of odd order are inverted. Three consequences follow.

1. **The total power is constant.** Since $\sum_n J_n^2(\beta) = 1$, the power is $A_c^2/2R$ for any $\beta$; modulation only redistributes it from carrier to sidebands.
2. **The carrier can vanish.** $J_0(\beta) = 0$ at $\beta = 2.405, 5.520, \ldots$; these carrier nulls give a precise way to calibrate deviation.
3. **The sidebands die out beyond $n \approx \beta + 1$.** $J_n(\beta)$ becomes very small once $n$ exceeds $\beta$.

| $\beta$ | $J_0$ | $J_1$ | $J_2$ | $J_3$ | $J_4$ | $J_5$ | $J_6$ |
|---|---|---|---|---|---|---|---|
| 0.5 | 0.938 | 0.242 | 0.031 | 0.003 | | | |
| 1.0 | 0.765 | 0.440 | 0.115 | 0.020 | 0.002 | | |
| 2.0 | 0.224 | 0.577 | 0.353 | 0.129 | 0.034 | 0.007 | 0.001 |
| 5.0 | −0.178 | −0.328 | 0.047 | 0.365 | 0.391 | 0.261 | 0.131 |

For $\beta \ll 1$, **narrowband FM**, $s \approx A_c\cos 2\pi f_c t - \beta A_c\sin 2\pi f_m t\,\sin 2\pi f_c t$: a carrier and one pair of side frequencies of amplitude $\beta A_c/2$, occupying $2f_m$ like AM but with the sidebands in quadrature with the carrier.

The snippet below synthesises a tone-modulated FM wave with $\beta = 2$ and compares its FFT line heights with $|J_n(2)|$; expect a weak carrier (0.22) and strongest lines at $f_c \pm f_m$ (0.58), with lines beyond $\pm 4f_m$ negligible.

```python
import numpy as np
from scipy.special import jv
import matplotlib.pyplot as plt

fs, fc, fm, beta = 1e6, 100e3, 5e3, 2.0
t = np.arange(0, 2e-3, 1/fs)
s = np.cos(2*np.pi*fc*t + beta*np.sin(2*np.pi*fm*t))
S = np.abs(np.fft.rfft(s)) * 2/len(t)
f = np.fft.rfftfreq(len(t), 1/fs)
plt.stem(f/1e3, S); plt.xlim(65, 135)
n = np.arange(-7, 8)
plt.plot((fc + n*fm)/1e3, np.abs(jv(n, beta)), "rx")   # Bessel prediction
plt.xlabel("f (kHz)"); plt.ylabel("amplitude / A_c"); plt.show()
```

### Bandwidth: Carson's rule

Strictly, FM has infinite bandwidth, but counting side frequencies up to $n = \beta + 1$ captures about 98% of the power. This gives **Carson's rule**:

$$B \approx 2(\Delta f + f_m) = 2f_m(\beta + 1).$$

For an arbitrary message of bandwidth $W$ and peak deviation $\Delta f$, the rule becomes $B \approx 2(\Delta f + W) = 2W(D + 1)$, where $D = \Delta f/W$ is the **deviation ratio**. For narrowband FM ($\beta \ll 1$), $B \approx 2f_m$, the AM bandwidth; for wideband FM ($\beta \gg 1$), $B \approx 2\Delta f$. Commercial FM broadcasting uses $\Delta f = 75$ kHz and $W = 15$ kHz, so $D = 5$ and $B = 180$ kHz within 200 kHz channels.

### Noise, pre-emphasis and de-emphasis

Because the information is in the zero crossings, a **limiter** can strip amplitude noise before detection. Noise that remains appears as phase jitter; after the discriminator differentiates phase into frequency, the output noise amplitude grows in proportion to the audio frequency, so the noise power spectral density rises as $f^2$. Yet in speech and music the high frequencies carry the least energy. **Pre-emphasis** boosts the high audio frequencies at the transmitter with a network of response $1 + j2\pi f\tau$; **de-emphasis** at the receiver applies the inverse RC low-pass, $1/(1 + j2\pi f\tau)$, restoring the original balance while cutting the high-frequency noise. The standard time constant is $\tau = 50$ µs in most of the world, including India (corner at $1/(2\pi\tau) = 3.18$ kHz), and 75 µs in the Americas (2.12 kHz). For a 15 kHz audio band the noise improvement is about 10 dB with 50 µs and 13 dB with 75 µs.

### Generating FM

**Direct FM** varies the frequency of an oscillator. In a **voltage-controlled oscillator** (VCO) a reverse-biased **varactor diode**, whose junction capacitance falls as reverse voltage rises, forms part of the tank of a Colpitts oscillator. For small changes, $\Delta f/f_c \approx -\Delta C/2C$, so the deviation is proportional to the message voltage. Direct FM gives large deviation easily, but the LC oscillator drifts and must be stabilised by automatic frequency control or a phase-locked loop referenced to a crystal.

**Indirect (Armstrong) FM** starts from a crystal oscillator for stability. The message is integrated and applied to a balanced modulator fed with a $90^\circ$-shifted carrier; adding the carrier back gives narrowband FM, exactly the form shown above. Frequency multipliers then multiply the instantaneous frequency, raising both $f_c$ and $\Delta f$ (hence $\beta$) by the same factor, and a mixer translates the carrier to the final frequency without changing $\Delta f$.

### Detecting FM

An FM detector must produce an output proportional to $f_i - f_c$. The **slope detector** uses the sloping skirt of an off-tuned circuit to convert frequency variations into amplitude variations for an envelope detector; it is simple but non-linear. The **balanced discriminator** (Foster–Seeley), with two circuits tuned above and below $f_c$ and their detector outputs subtracted, produces the characteristic **S-curve**, linear over the deviation range and zero at $f_c$. The **ratio detector** is a variant with built-in amplitude limiting.

The **phase-locked loop** (PLL) is the modern detector. A phase detector compares the input with the output of a VCO; its error voltage, low-pass filtered by the loop filter, drives the VCO so as to reduce the phase difference. Once **locked**, the VCO frequency follows the input frequency exactly. If the VCO has free-running frequency $f_0 = f_c$ and gain $K_v$ (Hz per volt), its control voltage must be

$$v_c(t) = \frac{f_i(t) - f_c}{K_v} = \frac{k_f}{K_v}\,m(t),$$

which is the demodulated message. PLLs are cheap ICs, need no tuned coils and track drifting carriers within their **lock range**. A related property of all FM receivers is the **capture effect**: when two signals share a channel, the stronger, even by a few dB, suppresses the weaker almost completely.

## Key Ideas

- **Instantaneous frequency** $f_i = (1/2\pi)\,d\theta/dt$; FM makes $f_i - f_c \propto m(t)$, PM makes $\theta - 2\pi f_c t \propto m(t)$.
- **Modulation index** $\beta = \Delta f/f_m$ for FM, independent of $f_m$ for PM.
- **Bessel spectrum**: lines at $f_c \pm nf_m$ of amplitude $A_c|J_n(\beta)|$; total power constant; carrier nulls at $\beta = 2.405, 5.52, \ldots$
- **Carson's rule**: $B \approx 2(\Delta f + f_m)$; 180 kHz for broadcast FM.
- **Pre-emphasis and de-emphasis** with $\tau = 50$ µs or 75 µs counter the $f^2$ rise of output noise.
- **Generation and detection**: varactor VCO or Armstrong method; slope, balanced discriminator or PLL detectors, preceded by a limiter.

## Worked Examples

### Example 1 — Bandwidth of broadcast FM

An FM station has $\Delta f = 75$ kHz and audio up to 15 kHz. Find the deviation ratio and Carson bandwidth, and compare with the AM bandwidth for the same audio.

**Solution.** $D = 75/15 = 5$ and

$$B = 2(75 + 15) = 180\ \text{kHz}.$$

AM would need 30 kHz; FM's sixfold bandwidth is affordable only at VHF (88 – 108 MHz, 200 kHz channels).

### Example 2 — Line spectrum of a tone-modulated wave

A 10 V carrier is frequency modulated by a 5 kHz tone with $\Delta f = 10$ kHz. Find $\beta$, the amplitudes of the significant spectral lines, the Carson bandwidth and the fraction of power inside it.

**Solution.** $\beta = 10/5 = 2$. Using the table, the line amplitudes are $10J_n(2)$: carrier 2.24 V; first pair 5.77 V at $f_c \pm 5$ kHz; second pair 3.53 V at $\pm 10$ kHz; third pair 1.29 V at $\pm 15$ kHz; fourth pair 0.34 V at $\pm 20$ kHz; fifth pair 0.07 V. Carson's rule gives $B = 2(10 + 5) = 30$ kHz, covering three pairs. The power fraction inside is

$$J_0^2 + 2(J_1^2 + J_2^2 + J_3^2) = 0.0501 + 2(0.3326 + 0.1245 + 0.0166) = 0.9975,$$

i.e. 99.8%. Counting every line above 1% of $A_c$ (four pairs) gives 40 kHz.

### Example 3 — Pre-emphasis boost

Find the boost a 50 µs pre-emphasis network gives to a 15 kHz tone relative to a low-frequency tone, and the corner frequency.

**Solution.** The corner is $f_1 = 1/(2\pi \times 50\times10^{-6}) = 3.18$ kHz. At 15 kHz,

$$|H| = \sqrt{1 + (15/3.18)^2} = \sqrt{1 + 22.2} = 4.82 \;\Rightarrow\; 20\log_{10}4.82 = 13.7\ \text{dB}.$$

De-emphasis cuts the 15 kHz signal and the noise near it by the same 13.7 dB, restoring a flat response while lowering hiss; strong treble must be limited to avoid over-deviation.

## Common Misconceptions

- **"FM bandwidth is just twice the deviation."** That is only the wideband limit; Carson's rule adds $2f_m$, which dominates when $\beta$ is small.
- **"Modulation adds power to an FM signal."** The total power is fixed at $A_c^2/2R$; modulation moves power from the carrier into the sidebands.
- **"FM and PM are unrelated."** Each is the other applied to the integral or derivative of the message.
- **"A PLL demodulates by filtering the signal."** It tracks: the VCO control voltage needed to follow the input is the message.

## Connections

- The Bessel functions arise from the Fourier series of $e^{j\beta\sin x}$ (Lesson m1-l1); they also give the modes of a circular drumhead, a solution of the two-dimensional wave equation of Waves and Optics, Lesson m1-l2.
- Communication Electronics Lab, Lessons m1-l2 and m1-l5, measures deviation, verifies Carson's rule, locates carrier nulls and demonstrates the capture effect.
- Doppler shifts are a natural frequency modulation: the orbital motion of a spectroscopic binary periodically shifts the stellar lines studied in Astrophysics III, Lesson m1-l2.
- The PLL is the core of frequency synthesisers in every phone and of carrier and clock recovery in digital receivers (Lesson m3-l3).

## Quick Check

1. A 2 kHz tone produces a deviation of 6 kHz. Find $\beta$ and the Carson bandwidth.
2. Why does the FM carrier amplitude vanish at $\beta = 2.405$, and where has its power gone?
3. In PM the deviation doubles when $f_m$ doubles at fixed amplitude. Explain why.
4. Explain the role of the limiter in an FM receiver.
5. A PLL detector has $K_v = 50$ kHz/V. What peak control voltage appears for a broadcast signal with 75 kHz deviation?

## Takeaway

- FM and PM vary the carrier phase; FM makes the instantaneous frequency follow the message.
- A tone produces side frequencies at $f_c \pm nf_m$ with Bessel-function amplitudes and constant total power.
- Carson's rule $B \approx 2(\Delta f + f_m)$ captures about 98% of the power; pre-emphasis counters FM's rising noise spectrum.
- VCOs and Armstrong modulators generate FM; limiters with discriminators or PLLs detect it.
