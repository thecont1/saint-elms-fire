***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: communication-electronics
courseName: Communication Electronics
moduleId: communication-electronics-module-3
moduleName: Channels, Noise and Digital Communication
lessonId: communication-electronics-m3-l2
lessonName: Noise in Communication Systems
lessonNumber: 8
moduleNumber: 3
semesterNumber: 4
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 8
prerequisites:
  - communication-electronics-m3-l1
  - electricity-and-magnetism-m2-l1
  - basic-electronics-m2-l2
learningObjectives:
  - Calculate thermal noise $\overline{v_n^2} = 4kTRB$ and shot noise $\overline{i_n^2} = 2qIB$, and the noise-equivalent bandwidth of a filter.
  - Define signal-to-noise ratio, noise factor, noise figure and equivalent noise temperature, and convert between them.
  - Apply the Friis cascade formula $F = F_1 + (F_2 - 1)/G_1 + \cdots$ to multistage receivers and justify placing a low-noise amplifier first.
  - Compare the output signal-to-noise performance of AM, DSB-SC, SSB and FM using figures of merit.
concepts:
  - Thermal (Johnson–Nyquist) noise
  - Shot noise
  - Noise-equivalent bandwidth
  - Signal-to-noise ratio
  - Noise figure
  - Equivalent noise temperature
  - Friis cascade formula
tags:
  - physics
  - communication-electronics
  - noise
  - noise-figure
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Noise in Communication Systems

## Overview

Gain is cheap; what limits every communication system is **noise**, the random fluctuations that accompany every signal and cannot be removed once added. The satellite downlink of Lesson m3-l1 delivered 2.4 pW to the receiver; whether that is plenty or hopeless depends entirely on how much noise competes with it. This lesson classifies noise sources and derives the two fundamental internal ones, **thermal noise** in resistors and **shot noise** in junctions. It then introduces the measures used to specify noisy equipment, **signal-to-noise ratio**, **noise figure** and **noise temperature**, and the Friis formula for a chain of stages, which explains why the first amplifier dominates. It closes by comparing how AM and FM receivers convert input noise into output noise.

## Learning Path

- **What you should already know**: resistance and power dissipation (Electricity and Magnetism, Lesson m2-l1); transistor junction currents (Basic Electronics, Lesson m2-l2); the superheterodyne receiver (Lesson m2-l2); link budgets in dBm (Lesson m3-l1).
- **What this lesson adds**: thermal and shot noise; noise bandwidth; SNR, noise figure and noise temperature; the Friis cascade formula; receiver sensitivity; figures of merit for AM and FM.
- **What later lessons this will unlock**: bit-error rate and Shannon capacity (Lesson m3-l3); noise and calibration in electronic instrumentation (Electronic Instrumentation Lab).

## Core Explanation

### Sources of noise

**External noise** enters through the antenna: **atmospheric** noise from lightning, dominant below about 30 MHz; **galactic and solar** noise above that; and **man-made** noise from ignition systems, switching supplies and power lines. **Internal noise** is generated in the receiver itself; its main forms are thermal, shot and flicker noise. External noise is controlled by siting and antenna design; internal noise is the designer's responsibility and is treated quantitatively here.

### Thermal noise

The conduction electrons in a resistor at temperature $T$ move randomly, and their fluctuating current produces a random open-circuit voltage across its terminals. Johnson measured it and Nyquist derived it in 1928: in a bandwidth $B$ the mean-square noise voltage is

$$\overline{v_n^2} = 4kTRB,$$

where $k = 1.381\times10^{-23}$ J/K is Boltzmann's constant. The derivation is equipartition applied to the modes of a transmission line connecting two resistors: each mode holds $kT$ of energy, and in equilibrium each resistor delivers power $kT$ per unit bandwidth to the other. The noise source $v_n$ in series with $R$ delivers its maximum power to a matched load $R$, the **available noise power**

$$N = \frac{\overline{v_n^2}}{4R} = kTB,$$

independent of $R$. Thermal noise is **white**: its spectral density $kT$ is constant up to frequencies of order $kT/h \approx 6$ THz at room temperature. At the reference temperature $T_0 = 290$ K, $kT_0 = 4.00\times10^{-21}$ W/Hz, or **$-174$ dBm/Hz**, a number every RF engineer knows.

### Shot noise and flicker noise

Current crossing a potential barrier, as in a p–n junction or a vacuum diode, consists of discrete charges arriving at random times. The fluctuation about the mean current $I$ is **shot noise**, also white, with

$$\overline{i_n^2} = 2qIB,$$

where $q = 1.602\times10^{-19}$ C. It is the dominant noise in photodiodes and bipolar transistors. **Flicker** ($1/f$) **noise**, from trapping at surfaces and defects, rises at low frequency and matters below about 1 kHz; at radio frequencies thermal and shot noise dominate.

### Noise-equivalent bandwidth

The $B$ in these formulas is the bandwidth of an ideal rectangular filter that would pass the same noise power as the real one. For a filter of power response $|H(f)|^2$ and peak $|H|_{\max}$, the **noise-equivalent bandwidth** is

$$B_N = \frac{1}{|H|_{\max}^2}\int_0^\infty |H(f)|^2\,df.$$

For the first-order RC low-pass of Lesson m1-l2,

$$B_N = \int_0^\infty \frac{df}{1 + (f/f_c)^2} = \frac{\pi}{2}f_c = \frac{1}{4RC},$$

57% wider than the 3 dB bandwidth. Higher-order filters have $B_N$ much closer to their 3 dB bandwidth.

### Signal-to-noise ratio, noise factor and noise figure

The **signal-to-noise ratio** is $\text{SNR} = S/N$, a power ratio usually quoted in dB. Every real amplifier adds noise, so the SNR at its output is worse than at its input. The **noise factor** $F$ measures the degradation:

$$F = \frac{(S/N)_{\text{in}}}{(S/N)_{\text{out}}}, \qquad \text{NF} = 10\log_{10}F\ \text{dB},$$

with the input noise defined as that of a source at $T_0 = 290$ K. NF is the **noise figure**. If the amplifier has power gain $G$ and adds noise power $N_a$ referred to its output, then $(S/N)_{\text{out}} = GS/(GkT_0B + N_a)$ and

$$F = 1 + \frac{N_a}{GkT_0B}.$$

A noiseless amplifier has $F = 1$ (0 dB). A passive lossy component at $T_0$, such as a cable of loss $L$ (as a power ratio), has $F = L$: a 3 dB cable has a 3 dB noise figure.

### Equivalent noise temperature

Alternatively, the added noise may be described as if it came from a resistor at the input at temperature $T_e$: $N_a = GkT_eB$. Comparing with the expression for $F$,

$$T_e = (F - 1)T_0, \qquad F = 1 + \frac{T_e}{T_0}.$$

Noise temperature is preferred for very quiet systems: a noise figure of 0.5 dB is less informative than $T_e = 35$ K. A receiving system pointed at the sky has **system noise temperature** $T_{\text{sys}} = T_{\text{ant}} + T_e$, and its total noise is $N = kT_{\text{sys}}B$.

### Cascaded stages: the Friis formula

For stages with gains $G_1, G_2, \ldots$ and noise factors $F_1, F_2, \ldots$, refer every stage's added noise to the input of the chain. Stage 2's added noise is divided by $G_1$, stage 3's by $G_1G_2$, and so on. The overall noise factor is the **Friis cascade formula**:

$$F = F_1 + \frac{F_2 - 1}{G_1} + \frac{F_3 - 1}{G_1G_2} + \cdots, \qquad T_e = T_1 + \frac{T_2}{G_1} + \frac{T_3}{G_1G_2} + \cdots$$

The first stage contributes its full noise; later stages are suppressed by the gain ahead of them. Hence a receiver's noise performance is set by a **low-noise amplifier** (LNA) of high gain placed as close to the antenna as possible, and any loss before the LNA (a long cable, a filter) adds directly to the noise figure.

The function below evaluates the cascade from stage values in dB; it is checkable by hand against Example 2.

```python
import math

def cascade_nf(stages):
    """stages: list of (gain_dB, NF_dB) in signal order; returns overall NF in dB."""
    F_total, G_ahead = 0.0, 1.0
    for i, (g_db, nf_db) in enumerate(stages):
        F = 10**(nf_db/10)
        F_total += F if i == 0 else (F - 1) / G_ahead
        G_ahead *= 10**(g_db/10)
    return 10*math.log10(F_total)

print(cascade_nf([(15, 2), (-3, 3), (10, 10)]))   # LNA first: 3.39 dB
print(cascade_nf([(-3, 3), (15, 2), (10, 10)]))   # cable first: 5.72 dB
```

### Receiver sensitivity

The minimum detectable signal follows directly. If the demodulator needs an input SNR of $\text{SNR}_{\min}$,

$$S_{\min}\,(\text{dBm}) = -174 + 10\log_{10}B + \text{NF} + \text{SNR}_{\min}.$$

For an FM broadcast receiver with $B = 200$ kHz ($53.0$ dB-Hz), NF $= 3.4$ dB and a 12 dB requirement, $S_{\min} = -174 + 53.0 + 3.4 + 12 = -105.6$ dBm, about 1.2 µV across 50 Ω.

### Noise performance of AM and FM

To compare modulation schemes fairly, take the **reference SNR** $\gamma = S_R/(N_0W)$, where $S_R$ is the received signal power, $N_0$ the noise spectral density and $W$ the message bandwidth; this is the SNR of plain baseband transmission. The output SNR of each scheme, for a tone above any threshold, is $\text{FOM}\times\gamma$:

| Scheme | Figure of merit $(S/N)_o/\gamma$ | Remarks |
|---|---|---|
| DSB-FC with envelope detector | $m_a^2/(2 + m_a^2)$, at most $1/3$ | Carrier power wasted; threshold at low SNR |
| DSB-SC, synchronous | 1 | Same as baseband |
| SSB, synchronous | 1 | Same as baseband, half the bandwidth |
| FM, discriminator | $\tfrac{3}{2}\beta^2$ | Trades bandwidth for SNR; threshold near 10 dB carrier-to-noise |

FM with $\beta = 5$ achieves $\tfrac{3}{2}\times25 = 37.5$, a 15.7 dB advantage over baseband and 20.5 dB over fully modulated AM, which is why FM sounds quieter. The advantage holds only above the **FM threshold**: when the carrier-to-noise ratio falls below about 10 dB, noise spikes appear and the output SNR collapses.

## Key Ideas

- **Thermal noise**: $\overline{v_n^2} = 4kTRB$; available power $kTB$; $-174$ dBm/Hz at 290 K.
- **Shot noise**: $\overline{i_n^2} = 2qIB$ for current crossing a barrier.
- **Noise-equivalent bandwidth** of an RC low-pass is $(\pi/2)f_c$.
- **Noise factor** $F = (S/N)_{\text{in}}/(S/N)_{\text{out}}$; NF $= 10\log F$; $T_e = (F - 1)T_0$.
- **Friis cascade**: $F = F_1 + (F_2 - 1)/G_1 + \cdots$; the first stage dominates, so the LNA goes first.
- **Figures of merit**: AM at most 1/3, DSB-SC and SSB 1, FM $\tfrac{3}{2}\beta^2$ above threshold.

## Worked Examples

### Example 1 — Thermal and shot noise magnitudes

Find the rms thermal noise voltage of a 10 kΩ resistor at 290 K in a 10 kHz bandwidth, and the rms shot noise of a 1 mA diode current in 1 MHz.

**Solution.**

$$v_n = \sqrt{4 \times 1.381\times10^{-23} \times 290 \times 10^4 \times 10^4} = \sqrt{1.60\times10^{-12}} = 1.27\ \mu\text{V}.$$

$$i_n = \sqrt{2 \times 1.602\times10^{-19} \times 10^{-3} \times 10^6} = \sqrt{3.20\times10^{-16}} = 17.9\ \text{nA}.$$

A microphone signal of a few millivolts is far above 1.27 µV, but an antenna signal of 1 µV is comparable to it.

### Example 2 — Where to put the low-noise amplifier

A receiver chain contains an LNA ($G = 15$ dB, NF $= 2$ dB), a cable of 3 dB loss and a mixer (NF $= 10$ dB). Compare the overall noise figure with the LNA at the antenna and with it after the cable.

**Solution.** As ratios: LNA $G_1 = 31.6$, $F = 1.585$; cable $G = 0.501$, $F = 1.995$; mixer $F = 10$.

LNA first: $F = 1.585 + \dfrac{0.995}{31.6} + \dfrac{9}{31.6 \times 0.501} = 1.585 + 0.031 + 0.568 = 2.184$, NF $= 3.39$ dB, $T_e = 343$ K.

Cable first: $F = 1.995 + \dfrac{0.585}{0.501} + \dfrac{9}{0.501 \times 31.6} = 1.995 + 1.167 + 0.568 = 3.730$, NF $= 5.72$ dB, $T_e = 792$ K.

Moving the LNA to the antenna improves sensitivity by 2.3 dB; this is why satellite dishes mount the LNA at the feed.

### Example 3 — Carrier-to-noise ratio of the satellite downlink

The downlink of Lesson m3-l1 delivered $-86.2$ dBm. The ground station has $T_{\text{sys}} = 100$ K and a 36 MHz transponder bandwidth. Find the carrier-to-noise ratio.

**Solution.**

$$N = kT_{\text{sys}}B = 1.381\times10^{-23} \times 100 \times 36\times10^6 = 4.97\times10^{-14}\ \text{W} = -103.0\ \text{dBm}.$$

$$C/N = -86.2 - (-103.0) = 16.8\ \text{dB}.$$

This is comfortably above the FM threshold of about 10 dB and adequate for QPSK digital television. If a noisier front end raised $T_{\text{sys}}$ to 400 K, $C/N$ would fall by $10\log_{10}4 = 6.0$ dB to 10.8 dB, uncomfortably close to threshold.

## Common Misconceptions

- **"More gain improves the signal-to-noise ratio."** Gain amplifies signal and noise equally and adds its own noise; only the first stage's noise figure and the bandwidth set the SNR.
- **"Thermal noise depends on the resistor's value, so a smaller resistor is quieter."** The available noise power $kTB$ is independent of $R$; only the open-circuit voltage scales with $\sqrt{R}$.
- **"A passive cable adds no noise."** A lossy line at temperature $T_0$ has $F = L$; 3 dB of loss before the receiver degrades the noise figure by 3 dB.
- **"FM is always better than AM in noise."** Only above threshold; below a carrier-to-noise ratio of about 10 dB FM degrades abruptly.

## Connections

- Thermal noise is equipartition and the Boltzmann distribution (Thermal Physics and Statistical Mechanics, Lessons m2-l1 and m3-l1) applied to electrical modes; the $hf/kT$ cut-off is Planck's blackbody law (Introduction to Quantum Mechanics, Lesson m1-l1).
- Shot noise is Poisson counting statistics, the same $\sqrt{N}$ fluctuation met in the Geiger counter experiment of Nuclear Physics Lab, Lesson m1-l1.
- Radio astronomers quote signals as antenna temperatures; the cosmic microwave background was discovered as an unexplained 3 K excess in a receiver's system temperature (Astrophysics IV, Lesson m2-l5).
- Communication Electronics Lab, Lesson m1-l5, measures SNR and compares AM and FM noise performance and the capture effect.

## Quick Check

1. What is the available thermal noise power, in dBm, in a 1 MHz bandwidth at 290 K?
2. An amplifier has NF $= 1.2$ dB. Find its equivalent noise temperature.
3. Why is the noise-equivalent bandwidth of an RC filter larger than its 3 dB bandwidth?
4. Two stages have $G_1 = 20$ dB, $F_1 = 3$ dB and $F_2 = 12$ dB. Find the overall noise figure.
5. Explain why the figure of merit of DSB-FC with an envelope detector cannot exceed 1/3.

## Takeaway

- Thermal noise $kTB$ ($-174$ dBm/Hz) and shot noise $2qIB$ are unavoidable and white; bandwidth should be no wider than the signal needs.
- Noise figure and noise temperature specify how much a stage degrades the SNR.
- In a cascade the first stage dominates; a low-noise, high-gain amplifier at the antenna sets the system's sensitivity.
- FM trades bandwidth for output SNR, gaining $\tfrac{3}{2}\beta^2$ over baseband above threshold; AM wastes most of its power in the carrier.
