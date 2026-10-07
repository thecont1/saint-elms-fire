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
lessonId: electronic-instrumentation-m3-l2
lessonName: Noise Sources, Noise Figure, Averaging and Signal-to-Noise Ratio
lessonNumber: 8
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - electronic-instrumentation-m3-l1
  - communication-electronics-m3-l2
  - electronic-instrumentation-m1-l1
learningObjectives:
  - Calculate thermal, shot and flicker noise voltages and currents over a given bandwidth and combine independent sources in quadrature.
  - Use the amplifier noise model $e_n$, $i_n$ to find the optimum source resistance and the noise figure.
  - Show that averaging $N$ independent readings improves the signal-to-noise ratio by $\sqrt{N}$, and state when it fails.
  - Compare the noise of a sensor with the quantisation noise of the ADC to decide where the measurement is limited.
concepts:
  - Thermal noise
  - Shot noise
  - Flicker noise and corner frequency
  - Amplifier voltage and current noise
  - Optimum source resistance
  - Noise figure
  - Signal averaging
tags:
  - physics
  - electronic-instrumentation
  - noise
  - signal-averaging
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Noise Sources, Noise Figure, Averaging and Signal-to-Noise Ratio

## Overview

Lesson m1-l1 separated random from systematic error, and the lock-in of Lesson m2-l3 attacked random error by narrowing the bandwidth. This lesson explains where the random error comes from. Every resistor, junction and amplifier generates fluctuations of fundamental origin, and the smallest signal that an instrument can measure is the signal comparable to them. The lesson takes the noise sources of Communication Electronics (Lesson m3-l2) into the setting of a precision DC and low-frequency measurement: thermal, shot and flicker noise, the voltage-and-current noise model of an amplifier, the optimum source resistance, the noise figure, and finally the use of averaging to reduce noise, with its limits. It ends by comparing the noise of the sensor with the quantisation noise of the ADC, which tells the designer which stage to improve.

## Learning Path

- **What you should already know**: random errors and the standard error $s/\sqrt{n}$ (Lesson m1-l1); ADC quantisation noise (Lesson m3-l1); thermal and shot noise, noise figure and noise temperature (Communication Electronics, Lesson m3-l2).
- **What this lesson adds**: noise density and bandwidth; the $e_n$-$i_n$ amplifier model; optimum source resistance; averaging and its limits; the sensor-versus-ADC comparison.
- **What later lessons this will unlock**: the uncertainty budget (Lesson m3-l3); the noise floor of the capstone measurement chain in the Electronic Instrumentation Lab.

## Core Explanation

### Noise densities and bandwidth

Noise is described by a spectral density, mean-square voltage per hertz, so that a white source over bandwidth $B$ has mean square $e_n^2 B$ and rms $e_n\sqrt{B}$ where $e_n$ is in V/$\sqrt{\text{Hz}}$. Independent sources add in power, hence in quadrature:

$$e_{\text{tot}}^2 = e_1^2 + e_2^2 + \cdots$$

**Thermal (Johnson) noise** arises from the random thermal motion of carriers in any resistor. For resistance $R$ at temperature $T$,

$$\langle v^2\rangle = 4k_BTRB,\qquad e_n = \sqrt{4k_BTR}\ \text{V}/\sqrt{\text{Hz}}.$$

At $300$ K a $10\,\text{k}\Omega$ resistor has $e_n = 12.9\ \text{nV}/\sqrt{\text{Hz}}$ and, in $1$ kHz, $407$ nV rms. It is independent of current, falls only by cooling, and rises as $\sqrt{R}$, so a low-resistance sensor is a quieter source.

**Shot noise** arises because current is made of discrete charges crossing a barrier at random. For a mean current $I$, $\langle i^2\rangle = 2qIB$. For $1$ mA in $1$ kHz the rms is $0.57$ nA, which is $5.7 \times 10^{-7}$ of the current. Shot noise depends on the DC current through a junction and so appears in photodiodes (Lesson m1-l3) and transistor inputs, not in an ohmic resistor.

**Flicker, or $1/f$, noise** has a density whose square is inversely proportional to frequency, and it is caused by slow trapping and release of carriers and by resistance fluctuations. A source with white level $e_w$ and corner frequency $f_c$ has

$$e_n^2(f) = e_w^2\left(1 + \frac{f_c}{f}\right).$$

Integrating from $f_1$ to $f_2$ gives $e_w^2\left[(f_2 - f_1) + f_c\ln(f_2/f_1)\right]$. The flicker part depends only on the *ratio* $f_2/f_1$, so every decade contributes the same noise: the noise in $0.01$ to $0.1$ Hz equals that in $10$ to $100$ Hz, and waiting longer does not average it away. For $e_w = 10\ \text{nV}/\sqrt{\text{Hz}}$ and $f_c = 10$ Hz, the band $0.1$ to $10$ Hz holds $e_w\sqrt{9.9 + 10\ln 100} = 7.48\,e_w = 75$ nV rms, of which the flicker part dominates. This is why DC precision is hard and why modulation (Lesson m2-l3) moves the measurement above $f_c$.

### The amplifier noise model

An amplifier is modelled as a noiseless one with a voltage noise source $e_n$ in series with its input and a current noise source $i_n$ in parallel. A source of resistance $R_s$ contributes its thermal noise $4k_BTR_s$, and the current noise flows through $R_s$ to give $i_n^2R_s^2$. The total input-referred noise density squared is

$$e_{\text{tot}}^2 = 4k_BTR_s + e_n^2 + i_n^2R_s^2.$$

The amplifier terms $e_n^2 + i_n^2R_s^2$ are smallest, relative to the thermal term, when the two are equal. Setting the derivative of the noise factor to zero gives the **optimum source resistance**

$$R_{\text{opt}} = \frac{e_n}{i_n}.$$

For $R_s \ll R_{\text{opt}}$ the voltage noise dominates (use a low-noise bipolar input), and for $R_s \gg R_{\text{opt}}$ the current noise dominates (use a FET input). The **noise factor** and **noise figure** (Communication Electronics, Lesson m3-l2) follow with $T_0 = 290$ K:

$$F = 1 + \frac{e_n^2 + i_n^2R_s^2}{4k_BT_0R_s},\qquad \text{NF} = 10\log_{10}F,$$

with the equivalent noise temperature $T_e = (F - 1)T_0$. At $R_s = R_{\text{opt}}$ the factor is minimal, $F_{\min} = 1 + 2e_ni_n/(4k_BT_0)$. In a cascade the Friis formula holds: the first stage dominates, so the instrumentation amplifier of Lesson m2-l2 must be the quietest part of the chain, with enough gain that the ADC noise, referred to the input, is smaller still.

### Signal averaging

Take $N$ independent readings of a constant $V$ with random noise of rms $\sigma$. The mean has standard deviation $\sigma/\sqrt{N}$, because the variances of independent terms add to $N\sigma^2$ while the sum is divided by $N$:

$$\sigma_{\bar{x}}^2 = \frac{1}{N^2}\,N\sigma^2 = \frac{\sigma^2}{N}.$$

The signal-to-noise ratio in voltage improves by $\sqrt{N}$, or $10\log_{10}N$ dB. Averaging $N$ samples taken at rate $f_s$ is a low-pass filter of equivalent noise bandwidth $f_s/(2N)$, the same trade of time against bandwidth as the lock-in's time constant. For repetitive waveforms, **ensemble averaging** of $N$ sweeps, synchronised to a trigger, shows a signal buried in noise: the pulse signal grows as $N$ while noise grows as $\sqrt{N}$.

Averaging has three limits. First, it removes only noise that is *independent* from sample to sample: systematic error, drift and $1/f$ noise are correlated and survive. Beyond a few correlation times the standard error stops decreasing, and the **Allan deviation**, which shows the averaging time at which the error is a minimum, tells the experimenter when to stop. Second, it cannot beat the converter's quantisation unless the noise is at least of order $1$ LSB, in which case the noise acts as **dither** and the mean of the codes converges to the true value; for a noise-free input every sample is the same code. Third, it costs time, since halving the error costs four times the readings.

```python
import numpy as np
rng = np.random.default_rng(0)
lsb, true = 5 / 4096, 1.00005
for sigma in (0.0, 3e-3):
    for N in (1, 100, 900):
        m = [np.mean(np.round((true + sigma * rng.standard_normal(N)) / lsb) * lsb) for _ in range(500)]
        print(sigma, N, round(np.mean(m) - true, 5), round(np.std(m), 5))
```

With no noise the mean is stuck at a bias of $-0.3$ mV whatever $N$; with $3$ mV of noise the bias disappears and the scatter falls as $3/\sqrt{N}$ mV, reaching about $0.1$ mV at $N = 900$.

## Key Ideas

- **Thermal noise** $e_n = \sqrt{4k_BTR}$; **shot noise** $i_n = \sqrt{2qI}$; **flicker noise** with $e_n^2 \propto 1/f$ below the corner $f_c$.
- Independent sources add in **quadrature**; white noise grows as $\sqrt{B}$.
- Flicker noise is **equal in every decade**, so averaging over longer times does not remove it.
- **Optimum source resistance** $R_{\text{opt}} = e_n/i_n$; the noise figure is $F = 1 + (e_n^2 + i_n^2R_s^2)/(4k_BT_0R_s)$.
- **Averaging** $N$ readings gives $\sigma/\sqrt{N}$, valid only for independent noise at least about $1$ LSB.
- The **first stage dominates** the noise of a cascade.

## Worked Examples

### Example 1 — Thermal noise of the strain-gauge bridge

The quarter bridge of Lesson m2-l1 has an output resistance of $350\,\Omega$ and a signal of $0.4375$ mV. Find its thermal noise at $300$ K in a bandwidth of $100$ Hz, the SNR, the noise-limited strain resolution, and compare with the ADC of Lesson m3-l1 at $G = 1001$.

**Solution.** The noise density is $\sqrt{4 \times 1.381 \times 10^{-23} \times 300 \times 350} = 2.41\ \text{nV}/\sqrt{\text{Hz}}$, so over $100$ Hz the noise is $24.1$ nV rms. The SNR is $437.5\,\mu\text{V}/24.1\,\text{nV} = 1.8 \times 10^{4}$, that is $85$ dB. The sensitivity is $(V_s/4)\,GF = 1.25 \times 2.10 = 2.625$ V per unit strain, so the thermal floor is $24.1\ \text{nV}/2.625 = 9.2 \times 10^{-9}$, about $9$ n$\varepsilon$. The ADC, however, has an LSB of $1.22$ mV, which is $1.22\ \mu$V at the amplifier input ($1.22\ \text{mV}/1001$), fifty times the thermal noise. The chain is limited by the *converter*, not the sensor; either raise the gain or let noise dither the ADC and average.

### Example 2 — Noise figure of an amplifier with a $20\ \text{k}\Omega$ source

An amplifier has $e_n = 10\ \text{nV}/\sqrt{\text{Hz}}$ and $i_n = 0.5\ \text{pA}/\sqrt{\text{Hz}}$ and is driven from $R_s = 20\ \text{k}\Omega$ at $T_0 = 290$ K. Find $R_{\text{opt}}$, the noise factor, the total input noise in $10$ kHz, and the noise figure for $2\ \text{k}\Omega$ and $200\ \text{k}\Omega$.

**Solution.** $R_{\text{opt}} = 10\ \text{nV}/0.5\ \text{pA} = 20\ \text{k}\Omega$, so this source is matched. The source thermal noise is $4k_BT_0R_s = 3.20 \times 10^{-16}\ \text{V}^2/\text{Hz}$ ($17.9\ \text{nV}/\sqrt{\text{Hz}}$); the amplifier adds $e_n^2 = 10^{-16}$ and $(i_nR_s)^2 = (10\ \text{nV})^2 = 10^{-16}$. Hence $F = 1 + 2 \times 10^{-16}/3.20 \times 10^{-16} = 1.62$ and $\text{NF} = 2.11$ dB. The total density is $\sqrt{5.20 \times 10^{-16}} = 22.8\ \text{nV}/\sqrt{\text{Hz}}$, so in $10$ kHz the input noise is $2.28\,\mu$V rms. For $R_s = 2\ \text{k}\Omega$ the factor is $4.15$ (NF $6.18$ dB); for $200\ \text{k}\Omega$ it is also $4.15$, symmetrical about $R_{\text{opt}}$ on a logarithmic scale.

### Example 3 — How many readings to average?

A 12-bit, $0$ to $5$ V ADC reads a steady voltage with $3.0$ mV rms noise at $1$ kS/s. How many readings give a standard error of $0.10$ mV, how long does it take, and what is the SNR gain?

**Solution.** The noise is $3.0/1.2207 = 2.5$ LSB, comfortably above $1$ LSB, so the codes are dithered and averaging is effective. The standard error $\sigma/\sqrt{N} = 0.10$ mV requires $N = (3.0/0.10)^2 = 900$ readings, i.e. $0.9$ s at $1$ kS/s. The SNR improves by $10\log_{10}900 = 29.5$ dB, a factor of $30$. The equivalent noise bandwidth of the average is $f_s/(2N) = 1000/1800 = 0.56$ Hz. If a drift of the source were present on a time scale of seconds, going to $N = 9000$ would not reduce the error further.

## Common Misconceptions

- **"More gain gives a better signal-to-noise ratio."** Gain amplifies signal and noise equally and adds its own; only the noise of the first stage and the bandwidth matter.
- **"Averaging always gives $1/\sqrt{N}$."** Only for independent noise. Drift, $1/f$ noise and systematic error are correlated and do not average.
- **"A thermal-noise-limited resistor can be quieter if less current flows."** Johnson noise is present at zero current; it falls only with lower $R$, $T$ or $B$.
- **"The lowest-noise amplifier is the one with the lowest $e_n$."** It depends on the source resistance: a high-resistance source makes $i_nR_s$ dominate.
- **"Averaging can recover resolution below the LSB of a noise-free signal."** Without noise of about an LSB there is nothing to randomise the rounding error.

## Connections

- Noise figure, noise temperature and the Friis formula were derived for receivers in Communication Electronics (Lesson m3-l2); here they apply to the first stage of a precision DC chain.
- Thermal noise is the fluctuation-dissipation theorem of Thermal Physics and Statistical Mechanics: equipartition fixes $\langle v^2\rangle$ on a capacitor at $k_BT/C$.
- The Poisson statistics of Nuclear Physics (Lesson m2-l2) give the same $\sqrt{N}$ fluctuation as shot noise and the same $1/\sqrt{N}$ improvement with counts.
- The Electronic Instrumentation Lab (Capstone) requires the noise floor of the entire measurement chain, and in astronomy photon shot noise and detector read noise set the limiting magnitude of a telescope.

## Quick Check

1. Calculate the thermal noise voltage of a $1\ \text{M}\Omega$ resistor at $300$ K in $10$ kHz.
2. Find the shot noise current of a photodiode carrying $4.2\ \mu$A in $1$ kHz.
3. An amplifier has $e_n = 4\ \text{nV}/\sqrt{\text{Hz}}$ and $i_n = 2\ \text{pA}/\sqrt{\text{Hz}}$. Find $R_{\text{opt}}$.
4. A single reading has $0.8$ mV rms noise. How many readings give a standard error of $0.1$ mV?
5. Why does averaging fail for $1/f$ noise?

## Takeaway

- Thermal noise $\sqrt{4k_BTRB}$ and shot noise $\sqrt{2qIB}$ are white; flicker noise is equal per decade.
- An amplifier's noise is $e_n$ and $i_n$; the best source resistance is $e_n/i_n$, and the noise figure measures the degradation.
- Averaging $N$ independent readings improves SNR by $\sqrt{N}$ but not drift or $1/f$ noise.
- Compare the sensor noise with the ADC's LSB to find the dominant stage.
