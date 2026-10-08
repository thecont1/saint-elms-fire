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
lessonId: communication-electronics-m2-l1
lessonName: Amplitude Modulation, DSB-SC and SSB
lessonNumber: 4
moduleNumber: 2
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - communication-electronics-m1-l3
  - basic-electronics-m2-l1
learningObjectives:
  - Write the time-domain and frequency-domain forms of a DSB-FC AM signal and measure the modulation index $m_a$ from its envelope.
  - Derive the power distribution $P_t = P_c(1 + m_a^2/2)$ and the transmission efficiency, and compare the power and bandwidth of DSB-FC, DSB-SC and SSB.
  - Explain the square-law, balanced and high-level methods of AM generation and the filter and phasing methods of SSB generation.
  - Analyse envelope and synchronous detection, including the time-constant conditions for the envelope detector and the effect of carrier phase error.
concepts:
  - Amplitude modulation index
  - Sideband power and transmission efficiency
  - Double-sideband suppressed carrier
  - Single-sideband modulation
  - Balanced modulator
  - Envelope detector
  - Synchronous detection
tags:
  - physics
  - communication-electronics
  - amplitude-modulation
  - demodulation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Amplitude Modulation, DSB-SC and SSB

## Overview

Amplitude modulation (AM) is the oldest and simplest way of impressing a message on a carrier: the carrier's amplitude is made to follow the message. It remains in use for medium-wave and short-wave broadcasting, aircraft VHF voice and, in its suppressed-carrier and single-sideband forms, in point-to-point radio and as the building block of QAM. This lesson applies the frequency-shift property of Lesson m1-l1 to derive the AM spectrum, introduces the modulation index, and accounts for where the transmitted power goes. It then examines the variants that save power or bandwidth, DSB-SC and SSB, the circuits that generate them, and the two ways of recovering the message: the envelope detector and synchronous detection.

## Learning Path

- **What you should already know**: the frequency-shift property and sidebands (Lesson m1-l1); RC filters and tuned circuits (Lesson m1-l2); oscillators as carrier sources (Lesson m1-l3); diode rectification (Basic Electronics, Lesson m2-l1).
- **What this lesson adds**: DSB-FC, DSB-SC and SSB signals, their spectra and powers; AM generation; envelope and synchronous detection.
- **What later lessons this will unlock**: the AM superheterodyne receiver (Lesson m2-l2); comparison with FM (Lesson m2-l3); noise performance of AM (Lesson m3-l2); ASK and QAM (Lesson m3-l3).

## Core Explanation

### The DSB-FC (conventional AM) signal

Let the carrier be $A_c\cos 2\pi f_c t$ and the message $m(t)$, with $|m(t)| \le 1$ after normalisation. Conventional AM, or **double-sideband full-carrier (DSB-FC)**, is

$$s(t) = A_c[1 + m_a\, m(t)]\cos 2\pi f_c t,$$

where $m_a$ is the **modulation index** (written $m$ in the laboratory manual). The **envelope** $A_c[1 + m_a m(t)]$ traces the message provided $1 + m_a m(t) \ge 0$; if $m_a > 1$ the envelope crosses zero, the carrier phase reverses and the signal is **over-modulated**, which distorts the recovered message and spreads the spectrum.

For a single tone, $m(t) = \cos 2\pi f_m t$. Using $\cos A\cos B = \tfrac{1}{2}[\cos(A-B) + \cos(A+B)]$,

$$s(t) = A_c\cos 2\pi f_c t + \frac{m_a A_c}{2}\cos 2\pi(f_c - f_m)t + \frac{m_a A_c}{2}\cos 2\pi(f_c + f_m)t.$$

The spectrum has three lines: the carrier at $f_c$ and the **lower** and **upper side frequencies** at $f_c \mp f_m$, each of amplitude $m_a A_c/2$. For a message band from 0 to $W$, these lines become the lower and upper sidebands and the **bandwidth** is $B = 2W$, exactly as the modulation property predicts.

The modulation index is read directly from an oscilloscope. The envelope swings between $A_{\max} = A_c(1 + m_a)$ and $A_{\min} = A_c(1 - m_a)$, so

$$m_a = \frac{A_{\max} - A_{\min}}{A_{\max} + A_{\min}}.$$

The snippet below builds a tone-modulated AM wave and its FFT; expect a carrier line at 100 kHz flanked by two lines at 95 and 105 kHz, each of height $m_a/2 = 0.25$ relative to the carrier.

```python
import numpy as np
import matplotlib.pyplot as plt

fs, fc, fm, ma = 2e6, 100e3, 5e3, 0.5
t = np.arange(0, 2e-3, 1/fs)                      # 2 ms: whole cycles of fm
s = (1 + ma*np.cos(2*np.pi*fm*t)) * np.cos(2*np.pi*fc*t)
S = np.abs(np.fft.rfft(s)) * 2/len(t)             # single-sided amplitudes
f = np.fft.rfftfreq(len(t), 1/fs)
fig, (a1, a2) = plt.subplots(2, 1)
a1.plot(t*1e3, s); a1.set_xlabel("t (ms)")
a2.stem(f/1e3, S); a2.set_xlim(90, 110); a2.set_xlabel("f (kHz)")
plt.tight_layout(); plt.show()
```

### Power in an AM wave

Into a resistance $R$, the carrier power is $P_c = A_c^2/2R$ and each side frequency carries $(m_a A_c/2)^2/2R = m_a^2 P_c/4$. The total is

$$P_t = P_c\left(1 + \frac{m_a^2}{2}\right), \qquad P_{\text{SB}} = \frac{m_a^2}{2}P_c.$$

Correspondingly, the antenna current rises from $I_c$ to $I_t = I_c\sqrt{1 + m_a^2/2}$, a convenient way to measure $m_a$. The **transmission efficiency**, the fraction of power in the information-bearing sidebands, is

$$\eta = \frac{P_{\text{SB}}}{P_t} = \frac{m_a^2}{2 + m_a^2}.$$

Even at $m_a = 1$, $\eta = 1/3$: two-thirds of the power is spent on a carrier that carries no information. With programme material the average index is nearer 0.3, so $\eta$ is only about 4%. For several tones modulated simultaneously the sideband powers add, giving an effective index $m_t = \sqrt{m_1^2 + m_2^2 + \cdots}$.

### DSB-SC and SSB

Suppressing the carrier gives **double-sideband suppressed-carrier (DSB-SC)** modulation:

$$s(t) = A_c\,m(t)\cos 2\pi f_c t \;\leftrightarrow\; \tfrac{1}{2}A_c[M(f - f_c) + M(f + f_c)].$$

All the power is in the sidebands and the bandwidth is still $2W$, but the envelope is $|m(t)|$, not $m(t)$, so the message can no longer be recovered with a simple envelope detector.

The two sidebands are mirror images and carry identical information, so one can be removed. **Single-sideband (SSB)** modulation transmits only the upper or lower sideband, halving the bandwidth to $W$ and saving further power. For a tone, the upper-sideband signal is just $\tfrac{1}{2}A_c\cos 2\pi(f_c + f_m)t$. In general,

$$s_{\text{SSB}}(t) = \tfrac{1}{2}A_c\left[m(t)\cos 2\pi f_c t \mp \hat m(t)\sin 2\pi f_c t\right],$$

where $\hat m(t)$ is the **Hilbert transform** of $m(t)$, every frequency component shifted by $-90^\circ$; the minus sign gives the upper sideband. **Vestigial sideband (VSB)**, which keeps one sideband and a trace of the other, was used for analogue television video, whose content extends almost to 0 Hz.

| Scheme | Bandwidth | Sideband power fraction (tone, $m_a = 1$) | Detection |
|---|---|---|---|
| DSB-FC | $2W$ | 33% | Envelope detector |
| DSB-SC | $2W$ | 100% | Synchronous |
| SSB | $W$ | 100% (one sideband) | Synchronous |
| VSB | $W$ to $2W$ | Close to 100% | Synchronous or envelope with carrier |

### Generating AM

A **square-law modulator** applies $v = \cos\omega_c t + k\,m(t)$ to a non-linear device with $i = a_1 v + a_2 v^2$. The output contains the term $2a_2 k\, m(t)\cos\omega_c t$ alongside the carrier term $a_1\cos\omega_c t$ and unwanted components at baseband and $2f_c$; a band-pass filter centred on $f_c$ leaves $a_1[1 + (2a_2 k/a_1)m(t)]\cos\omega_c t$, an AM wave.

A **balanced modulator** feeds two matched square-law devices with $\cos\omega_c t \pm k\,m(t)$ and subtracts their outputs; the carrier terms cancel and the output is $4a_2 k\,m(t)\cos\omega_c t$, a DSB-SC signal. Diode ring modulators and the Gilbert-cell multiplier IC used in the companion laboratory are practical balanced modulators.

In a **high-level** broadcast transmitter, the modulating signal varies the collector supply of a class-C RF power amplifier, so the output amplitude follows $V_{CC} + v_m(t)$; the modulator must supply the sideband power $m_a^2 P_c/2$. **Low-level** modulation is performed at small signal and followed by linear amplification.

SSB is generated by the **filter method**, in which a DSB-SC signal passes a sharp sideband filter (a crystal or mechanical filter at a fixed low frequency, after which the signal is translated upward), or by the **phasing method**, which forms the two terms of the SSB equation with a $90^\circ$ carrier shift and a wideband $90^\circ$ audio network and adds or subtracts them. Speech has no content below about 300 Hz, so the sideband filter must have its transition within a 600 Hz gap.

### Detecting AM

The **envelope detector** is a diode feeding a parallel RC load. On each positive carrier peak the diode conducts and charges $C$; between peaks $C$ discharges through $R$. The output follows the envelope if the time constant is long compared with the carrier period yet short enough to follow the fastest fall of the envelope:

$$\frac{1}{f_c} \ll RC \ll \frac{1}{f_m}.$$

A sharper criterion for avoiding **diagonal clipping**, where the capacitor voltage cannot fall as fast as the envelope, is

$$RC \le \frac{\sqrt{1 - m_a^2}}{2\pi f_m m_a}.$$

The detector is cheap and needs no carrier reference, but works only for DSB-FC with $m_a \le 1$.

**Synchronous (coherent) detection** multiplies the received signal by a locally generated carrier and low-pass filters. For DSB-SC with a local carrier of phase error $\phi$,

$$A_c m(t)\cos\omega_c t \cdot \cos(\omega_c t + \phi) = \tfrac{1}{2}A_c m(t)[\cos\phi + \cos(2\omega_c t + \phi)],$$

and the low-pass filter leaves $\tfrac{1}{2}A_c m(t)\cos\phi$. A phase error merely scales the output, but at $\phi = 90^\circ$ the output vanishes (the **quadrature null effect**), and a frequency error $\Delta f$ multiplies the message by a slow $\cos 2\pi\Delta f t$. For SSB, a frequency error shifts every audio component by $\Delta f$. The local carrier must therefore be locked to the transmitter, by a transmitted pilot carrier or a Costas phase-locked loop.

## Key Ideas

- **DSB-FC**: $s(t) = A_c[1 + m_a m(t)]\cos\omega_c t$; carrier plus two sidebands; bandwidth $2W$; $m_a = (A_{\max} - A_{\min})/(A_{\max} + A_{\min}) \le 1$.
- **Power**: $P_t = P_c(1 + m_a^2/2)$; efficiency $\eta = m_a^2/(2 + m_a^2) \le 1/3$.
- **DSB-SC** removes the carrier; **SSB** also removes one sideband, halving the bandwidth to $W$.
- **Generation**: square-law and high-level modulators give AM; balanced modulators give DSB-SC; filter and phasing methods give SSB.
- **Envelope detection** needs $1/f_c \ll RC \ll 1/f_m$ and works only for DSB-FC.
- **Synchronous detection** recovers any AM form but needs a carrier locked in frequency and phase.

## Worked Examples

### Example 1 — Power budget of a broadcast transmitter

A transmitter radiates an unmodulated carrier of 10 kW. Find the total power, the power per sideband and the efficiency at $m_a = 0.8$, and the power needed to send the same sidebands as DSB-SC and SSB.

**Solution.**

$$P_t = 10\left(1 + \frac{0.8^2}{2}\right) = 10 \times 1.32 = 13.2\ \text{kW}.$$

The two sidebands share $0.32 \times 10 = 3.2$ kW, i.e. 1.6 kW each, and $\eta = 0.64/2.64 = 24.2\%$. DSB-SC carrying the same sidebands needs 3.2 kW, a 76% saving; SSB needs 1.6 kW, an 88% saving, with half the bandwidth.

### Example 2 — Reading an AM display

On an oscilloscope the envelope of a 1 MHz AM signal has peak values $A_{\max} = 7.5$ V and $A_{\min} = 2.5$ V, and repeats every 0.2 ms. Find $m_a$, the carrier amplitude and the spectrum.

**Solution.** $m_a = (7.5 - 2.5)/(7.5 + 2.5) = 0.50$, $A_c = (A_{\max} + A_{\min})/2 = 5.0$ V and $f_m = 1/0.2\ \text{ms} = 5$ kHz. The spectrum has a 5.0 V line at 1000 kHz and two lines of $m_a A_c/2 = 1.25$ V at 995 kHz and 1005 kHz; the bandwidth is 10 kHz. The sidebands carry $m_a^2/2 = 12.5\%$ of the carrier power.

### Example 3 — Envelope detector design

An envelope detector follows a 455 kHz intermediate frequency carrying audio up to 5 kHz at $m_a = 0.8$. Choose $R$ and $C$.

**Solution.** The diagonal-clipping limit is

$$RC \le \frac{\sqrt{1 - 0.64}}{2\pi \times 5000 \times 0.8} = \frac{0.6}{25\,130} = 23.9\ \mu\text{s},$$

while $RC$ must greatly exceed $1/f_c = 2.2$ µs. Choosing $R = 10$ kΩ and $C = 2.2$ nF gives $RC = 22$ µs, ten carrier periods yet below the clipping limit. A small RC low-pass filter after the detector removes the residual 455 kHz ripple.

## Common Misconceptions

- **"The carrier carries the information."** The carrier is unchanged by modulation; all the information is in the sidebands.
- **"Increasing $m_a$ above 1 makes the signal louder."** Over-modulation distorts the envelope, generates splatter in adjacent channels and cannot be undone by an envelope detector.
- **"SSB is simply AM with half the bandwidth."** SSB has no carrier and its envelope is not the message; it needs a synchronous detector with an accurate local carrier.
- **"A larger detector capacitor always gives a smoother output."** Too large an $RC$ causes diagonal clipping on rapidly falling envelopes; the time constant must also satisfy $RC \ll 1/f_m$.

## Connections

- The AM spectrum is the frequency-shift property of Lesson m1-l1 applied to a tone; the same three-line structure appears as beats between nearby frequencies in Waves and Optics (Lesson m1-l3).
- Communication Electronics Lab, Lessons m1-l1 and m1-l5, measures $m_a$ from the envelope and the sideband powers on the FFT display.
- The diode detector's charge–discharge cycle is the RC transient of Electricity and Magnetism, Lesson m2-l3.
- Quadrature (I/Q) modulation, the two terms of the SSB equation, underlies the QAM used by Wi-Fi and 4G/5G (Lesson m3-l3).

## Quick Check

1. Sketch the spectrum of a 600 kHz carrier modulated to $m_a = 0.6$ by tones of 1 kHz and 3 kHz.
2. Show that the efficiency of tone-modulated DSB-FC cannot exceed 33.3%.
3. An AM transmitter's antenna current rises from 8.0 A to 8.9 A on modulation. Find $m_a$.
4. Why can an envelope detector not demodulate DSB-SC? What does it output instead?
5. In synchronous detection, what happens to the output if the local carrier is $90^\circ$ out of phase?

## Takeaway

- AM multiplies the carrier by $1 + m_a m(t)$, producing a carrier and two sidebands of total bandwidth $2W$.
- Two-thirds or more of a DSB-FC signal's power is in the carrier; DSB-SC and SSB put all the power in the sidebands.
- Balanced modulators remove the carrier; sideband filters or phasing networks remove one sideband.
- Envelope detection is simple but needs a large carrier; synchronous detection works for every form but needs a locked carrier.
