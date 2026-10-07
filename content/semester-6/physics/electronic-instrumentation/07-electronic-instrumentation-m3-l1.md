***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: electronic-instrumentation
courseName: Electronic Instrumentation (Physics Option B)
moduleId: electronic-instrumentation-module-3
moduleName: Digitisation, Noise and Calibration
lessonId: electronic-instrumentation-m3-l1
lessonName: ADC and DAC Specifications, Resolution and Architectures
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - electronic-instrumentation-m2-l2
  - communication-electronics-m3-l3
  - basic-electronics-m1-l1
learningObjectives:
  - Derive the quantisation noise of an ideal N-bit converter, the ideal SNR $6.02N + 1.76$ dB and the ENOB from a measured SINAD.
  - Define offset, gain, DNL and INL errors and compute them from a table of transition voltages.
  - Describe the R-2R DAC and compare flash, SAR, dual-slope and sigma-delta ADC architectures.
  - Calculate the resolution gained by oversampling and by first-order noise shaping.
concepts:
  - Quantisation noise
  - Effective number of bits
  - Differential and integral non-linearity
  - R-2R ladder DAC
  - Successive-approximation ADC
  - Oversampling
  - Sigma-delta modulation
tags:
  - physics
  - electronic-instrumentation
  - adc-dac
  - quantisation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# ADC and DAC Specifications, Resolution and Architectures

## Overview

Signal conditioning ends at the analogue-to-digital converter (ADC), which turns the voltage into a number that a computer can store, average and fit. Digitisation adds its own errors. The finite number of levels adds **quantisation noise**, the converter's real transfer function departs from the ideal staircase in offset, gain, **differential non-linearity** (DNL) and **integral non-linearity** (INL), and its dynamic performance is summarised by the **effective number of bits** (ENOB), which is always less than the nominal resolution. This lesson derives the ideal signal-to-noise ratio of an N-bit converter, defines the static and dynamic specifications, and surveys the **DAC** and the four common ADC architectures. It closes with oversampling and sigma-delta conversion, which trade speed for resolution. A reader of a data sheet needs these ideas to decide whether a 12-bit converter is really sufficient for a measurement.

## Learning Path

- **What you should already know**: the instrumentation amplifier and anti-aliasing filter that precede the converter (Lesson m2-l2); sampling and quantisation of a signal (Communication Electronics, Lesson m3-l3); resistor networks and dividers (Basic Electronics, Lesson m1-l1).
- **What this lesson adds**: the quantisation-noise derivation; ENOB; static errors; the R-2R DAC; SAR, flash, dual-slope and sigma-delta architectures; oversampling gain.
- **What later lessons this will unlock**: the noise budget and averaging of Lesson m3-l2; calibration of the converter in Lesson m3-l3; the Python data acquisition of Lesson m3-l3.

## Core Explanation

### Quantisation and the ideal SNR

An N-bit ADC with full-scale range $V_{FS}$ divides it into $2^N$ codes. The step, or **least significant bit**, is

$$\text{LSB} = \frac{V_{FS}}{2^N}.$$

The conversion error $e$ lies between $-\text{LSB}/2$ and $+\text{LSB}/2$. If the signal is large and busy enough that $e$ is uniformly distributed on this interval, the mean square error is

$$\langle e^2\rangle = \frac{1}{\text{LSB}}\int_{-\text{LSB}/2}^{\text{LSB}/2} e^2\,de = \frac{\text{LSB}^2}{12},\qquad e_{\text{rms}} = \frac{\text{LSB}}{\sqrt{12}} = 0.289\,\text{LSB}.$$

A full-scale sine wave has peak amplitude $V_{FS}/2$ and rms $V_{FS}/(2\sqrt2)$, so

$$\text{SNR} = 20\log_{10}\frac{V_{FS}/(2\sqrt2)}{V_{FS}/(2^N\sqrt{12})} = 20\log_{10}\left(2^N\sqrt{3/2}\right) = 6.02\,N + 1.76\ \text{dB}.$$

Each extra bit gives $6.02$ dB. This is the ideal figure; for a DC measurement the quantisation error is not random but a fixed offset, a point taken up in Lesson m3-l2.

### Static specifications

The ideal transfer function is a staircase of equal steps on a straight line. The real one has the following errors. The **offset error** is the shift of the line at zero input and the **gain error** the error in its slope at full scale; both are removed by two-point calibration. The **DNL** measures the deviation of each code width from the ideal $1$ LSB,

$$\text{DNL}_k = \frac{W_k - \text{LSB}}{\text{LSB}},$$

where $W_k$ is the width of code $k$, the distance between its two transition voltages. A DNL of $-1$ LSB means a code of zero width, a **missing code**; a converter is monotonic if DNL $> -1$ LSB. The **INL** measures the deviation of each transition from the ideal straight line (after offset and gain are removed), and is the running sum of the DNL:

$$\text{INL}_k = \sum_{j \le k}\text{DNL}_j.$$

Unlike the offset and gain, INL cannot be removed by two-point calibration, but can be mapped and corrected in software (Lesson m3-l3). A converter with an INL of $\pm 2$ LSB is accurate to roughly $11$ bits of linearity in a $13$-bit device.

### Dynamic specifications and ENOB

For a sine input the measured signal-to-noise-and-distortion ratio (SINAD) includes quantisation noise, thermal noise, harmonic distortion from INL and the effect of aperture jitter. The **effective number of bits** is the N whose ideal SNR equals the measured SINAD,

$$\text{ENOB} = \frac{\text{SINAD} - 1.76}{6.02}.$$

The aperture jitter $\sigma_t$ limits the SNR of a sine of frequency $f$ to $-20\log_{10}(2\pi f\sigma_t)$ dB, which is $44$ dB at $1$ MHz for $\sigma_t = 1$ ns. The **spurious-free dynamic range** (SFDR) is the ratio of the signal to the largest spur. Sampling a slowly varying measurand makes jitter irrelevant, but for fast signals it, not the bit count, limits the performance.

### The DAC and the R-2R ladder

A digital-to-analogue converter outputs $V_{\text{out}} = V_{\text{ref}}\,D/2^N$ for a code $D$. The **R-2R ladder** builds this with only two resistor values: each bit switches a $2R$ leg to $V_{\text{ref}}$ or to ground, and at each node of the ladder the resistance looking toward the end is $2R$, so that the current splits in half at every node and the bit of weight $2^{-k}$ contributes $V_{\text{ref}}2^{-k}$. Only the *ratio* of resistors matters, which thin-film technology controls well. For an 8-bit DAC with $V_{\text{ref}} = 2.56$ V the LSB is $10$ mV, so the code $90$ gives $0.900$ V. Practical DACs add a settling time of microseconds and glitches at major-code transitions, such as $01111111$ to $10000000$ where all bits change.

### ADC architectures

A **flash** converter compares the input with $2^N - 1$ reference levels in parallel and is the fastest, but the comparator count limits it to about $8$ bits. A **successive-approximation (SAR)** converter uses one comparator and an internal DAC for a binary search: for $V_{in} = 0.62\,V_{\text{ref}}$ and $N = 3$ the trial $0.5$ is kept (bit $1$), $0.75$ is rejected (bit $0$) and $0.625$ is rejected (bit $0$), giving code $100$ after exactly $N$ clock cycles. SAR devices cover $8$ to $18$ bits at up to a few MS/s and are the default in data acquisition boards. The **dual-slope** converter integrates the input for a fixed time $T_1$ and then discharges the integrator with $-V_{\text{ref}}$ in a time $T_2$, so $V_{in} = V_{\text{ref}}T_2/T_1$. With $T_1$ a multiple of $20$ ms it rejects $50$ Hz interference, which is why digital multimeters use it, but it is slow.

### Oversampling and sigma-delta conversion

Quantisation noise power $\text{LSB}^2/12$ spreads uniformly over $0$ to $f_s/2$. If the signal occupies only $0$ to $f_B$ and the converter samples at $f_s = 2\,\text{OSR}\,f_B$, a digital low-pass filter removes the noise outside the band and the in-band noise falls by a factor OSR:

$$\text{SNR} = 6.02\,N + 1.76 + 10\log_{10}\text{OSR}.$$

That is $3$ dB per doubling, so each extra bit needs $4\times$ oversampling. A **sigma-delta** modulator uses a 1-bit quantiser inside a feedback loop with an integrator, which pushes the quantisation noise to high frequency (**noise shaping**): the noise transfer function of an $L$-th order loop is $(1 - z^{-1})^L$. After digital filtering and decimation the ideal signal-to-quantisation-noise ratio is

$$\text{SQNR} = 6.02 + 1.76 - 10\log_{10}\frac{\pi^{2L}}{2L+1} + (20L + 10)\log_{10}\text{OSR}.$$

For $L = 1$ this is $2.6 + 30\log_{10}\text{OSR}$ dB, $9$ dB per octave. Because the loop needs only a 1-bit quantiser and a digital filter, no precision analogue components are needed, and 16 to 24-bit converters result, at the price of a low output rate.

```python
import numpy as np
N, M = 12, 2**16
x = 0.5 * np.sin(2 * np.pi * 1013 / M * np.arange(M))          # sine, full scale = 1
q = np.round((x + 0.5) * (2**N - 1)) / (2**N - 1) - 0.5        # ideal N-bit ADC
print(10 * np.log10(np.mean(x**2) / np.mean((q - x)**2)))      # close to 6.02*N + 1.76
```

The printed SNR is close to $74$ dB, which is the ideal limit for twelve bits.

## Key Ideas

- **LSB** $= V_{FS}/2^N$; quantisation noise $\text{LSB}/\sqrt{12}$ rms; ideal $\text{SNR} = 6.02N + 1.76$ dB.
- **ENOB** $= (\text{SINAD} - 1.76)/6.02$ is always below the nominal bit count.
- **DNL** is the width error of a code; $-1$ LSB is a missing code; **INL** is its running sum, the deviation from the ideal line.
- **R-2R DAC**: $V_{\text{out}} = V_{\text{ref}}D/2^N$ with matched ratios, not precise absolute resistors.
- **SAR** takes $N$ clocks; **flash** is fastest; **dual-slope** rejects mains; **sigma-delta** gives the highest resolution at low speed.
- **Oversampling** gains $10\log_{10}\text{OSR}$; first-order noise shaping gains $30\log_{10}\text{OSR}$.

## Worked Examples

### Example 1 — Resolving strain with a 12-bit ADC

The amplified strain signal of Lesson m2-l2 (full bridge, $V_s = 5.00$ V, $GF = 2.10$, $G = 1001$) goes to a 12-bit ADC with a $0$ to $5$ V range. Find the LSB, the quantisation noise, the ideal SNR and the strain corresponding to one LSB and to full scale.

**Solution.** The LSB is $5/4096 = 1.2207$ mV and the quantisation noise $1.2207/\sqrt{12} = 0.352$ mV rms; the ideal SNR is $6.02 \times 12 + 1.76 = 74.0$ dB. The output per unit strain is $1001 \times 5.00 \times 2.10 = 1.051 \times 10^{4}$ V, so one LSB is $1.2207 \times 10^{-3}/1.051 \times 10^{4} = 1.16 \times 10^{-7}$, that is $0.116\,\mu\varepsilon$. Full scale is $5/1.051 \times 10^{4} = 476\,\mu\varepsilon$, so the $167\,\mu\varepsilon$ of the cantilever uses a third of the range. If the ADC reference is the bridge excitation, the code is $4096 \times 1001 \times 2.10\,\varepsilon$, independent of $V_s$: the reading is ratiometric.

### Example 2 — Oversampling to gain four bits

A 12-bit ADC samples at $100$ kS/s. How much oversampling gives the performance of a 16-bit converter, and what is the resulting signal bandwidth? Compare first- and second-order sigma-delta modulators with $\text{OSR} = 256$.

**Solution.** The ideal SNRs are $74.0$ dB and $98.1$ dB, a difference of $24.1$ dB. Plain oversampling gives $10\log_{10}\text{OSR} = 24.1$ dB, so $\text{OSR} = 257 \approx 4^{4} = 256$. The bandwidth is $f_B = f_s/(2\,\text{OSR}) = 10^{5}/512 = 195$ Hz, and the output is decimated to $390$ S/s. This works only if the input noise exceeds about $1$ LSB, so that the errors average (dither). For the sigma-delta modulator with $\text{OSR} = 256$, $\log_{10}256 = 2.408$: first order, $\text{SQNR} = 2.6 + 30 \times 2.408 = 74.9$ dB, an ENOB of $12.1$; second order, $-5.1 + 50 \times 2.408 = 115.3$ dB, an ideal ENOB of $18.9$.

### Example 3 — DNL and INL from transition voltages

A 3-bit ADC has $V_{FS} = 8.00$ V, so $1$ LSB $= 1.00$ V and the ideal transitions lie at $0.5, 1.5, \ldots, 6.5$ V. The measured transitions are $0.55, 1.45, 2.60, 3.40, 4.70, 5.45, 6.60$ V. Find the DNL and INL.

**Solution.** The code widths are the differences of successive transitions: $0.90, 1.15, 0.80, 1.30, 0.75, 1.15$ V, so DNL $= -0.10, +0.15, -0.20, +0.30, -0.25, +0.15$ LSB. The INL at each transition is its deviation from the ideal position: $+0.05, -0.05, +0.10, -0.10, +0.20, -0.05, +0.10$ LSB. The change in INL between neighbouring transitions reproduces the DNL (for example, $-0.05 - 0.05 = -0.10$). The worst case is $|\text{DNL}| = 0.30$ LSB and $|\text{INL}| = 0.20$ LSB; there are no missing codes, since DNL stays above $-1$.

## Common Misconceptions

- **"A 16-bit converter gives 16 bits of accuracy."** Resolution is the number of codes; the accuracy and the ENOB are limited by noise, INL and the reference.
- **"Quantisation noise can be removed by averaging."** Averaging works only if there is noise of order $1$ LSB or more to randomise the error; a perfectly steady input produces the same code every time.
- **"DNL and INL are the same."** DNL is the error of a single step; INL is the accumulated error and describes the shape of the curve.
- **"A faster sampling rate always gives a worse converter."** For sigma-delta devices, the fast internal sampling is exactly what gives the resolution.
- **"A SAR converter resolves the input at the instant of sampling."** The input is held on a capacitor by a sample-and-hold during the $N$ cycles; its source resistance must allow the capacitor to charge.

## Connections

- The quantisation-noise derivation is the same uniform-distribution argument used for pulse-code modulation in Communication Electronics (Lesson m3-l3).
- The R-2R ladder is an application of the series-parallel analysis of Basic Electronics (Lesson m1-l1).
- The Electronic Instrumentation Lab (Analog-to-Digital Conversion and Data Acquisition) measures ENOB and shows aliasing and the effect of the anti-aliasing filter.
- Sigma-delta ADCs and high-resolution converters digitise the output of CCD and CMOS detectors in astronomy, where the dynamic range of a star field is large.

## Quick Check

1. Show that the rms quantisation noise of an ideal converter is $\text{LSB}/\sqrt{12}$.
2. A 10-bit converter has a $0$ to $3.3$ V range. Find the LSB and the ideal SNR.
3. A converter measures a SINAD of $68$ dB. Find the ENOB.
4. Explain the difference between a missing code and a large INL.
5. A first-order sigma-delta modulator has $\text{OSR} = 64$. Find its ideal SQNR.

## Takeaway

- An ideal N-bit converter has quantisation noise $\text{LSB}/\sqrt{12}$ and SNR $= 6.02N + 1.76$ dB.
- ENOB, DNL, INL and offset and gain errors describe how real converters fall short.
- The R-2R ladder gives a DAC from matched ratios; SAR, flash, dual-slope and sigma-delta trade speed for resolution.
- Oversampling gains $3$ dB per octave, and noise shaping gains much more.
- Choose the converter after computing the resolution that the whole measurement chain needs.
