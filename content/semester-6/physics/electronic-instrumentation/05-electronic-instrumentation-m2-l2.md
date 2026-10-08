***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: electronic-instrumentation
courseName: Electronic Instrumentation (Physics Option B)
moduleId: electronic-instrumentation-module-2
moduleName: Signal Conditioning and Amplification
lessonId: electronic-instrumentation-m2-l2
lessonName: Instrumentation Amplifiers, CMRR, Isolation and Anti-aliasing Filters
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 5
prerequisites:
  - electronic-instrumentation-m2-l1
  - communication-electronics-m1-l2
  - communication-electronics-m3-l3
learningObjectives:
  - Derive the gain of the three-op-amp instrumentation amplifier and explain why its common-mode gain is unity in the first stage.
  - Define CMRR and calculate it from resistor mismatch, including the multiplying effect of first-stage gain.
  - Describe the isolation amplifier, the ground loop it breaks and the safety role of the barrier.
  - Design a Butterworth anti-aliasing filter of sufficient order for a given sampling rate and attenuation.
concepts:
  - Instrumentation amplifier
  - Common-mode rejection ratio
  - Resistor-mismatch CMRR
  - Gain-bandwidth limit
  - Isolation amplifier
  - Aliasing
  - Butterworth anti-aliasing filter
tags:
  - physics
  - electronic-instrumentation
  - instrumentation-amplifier
  - anti-aliasing
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Instrumentation Amplifiers, CMRR, Isolation and Anti-aliasing Filters

## Overview

The bridge of Lesson m2-l1 delivers a differential signal of a fraction of a millivolt sitting on a common-mode voltage of volts. The **instrumentation amplifier** extracts and amplifies the difference with three op-amps, a high balanced input resistance and a gain set by one resistor. Its quality is the **common-mode rejection ratio** (CMRR), which depends on resistor matching and, usefully, increases with gain. Where the sensor and the electronics must not share a ground, an **isolation amplifier** inserts a galvanic barrier. Finally, before a signal is sampled it must pass through an **anti-aliasing filter**, or noise and interference above half the sampling rate will fold into the band of interest. This lesson derives the gain and CMRR of the instrumentation amplifier, describes isolation, and designs the filter.

## Learning Path

- **What you should already know**: the bridge output and its common-mode level (Lesson m2-l1); op-amp active filters and Butterworth responses (Communication Electronics, Lesson m1-l2); sampling and the Nyquist criterion (Communication Electronics, Lesson m3-l3).
- **What this lesson adds**: the three-op-amp gain and CMRR; the gain-bandwidth limit; isolation and ground loops; filter order for a specified alias attenuation.
- **What later lessons this will unlock**: lock-in detection and shielding (Lesson m2-l3); ADC resolution and ENOB (Lesson m3-l1); amplifier noise (Lesson m3-l2).

## Core Explanation

### Why a single difference amplifier is not enough

A single op-amp difference stage with resistors $R_2$ and $R_3$ amplifies $V_2 - V_1$ by $R_3/R_2$, but its input resistance is only $R_2$, and the two inputs present different resistances to the sources. A source resistance in series with $R_2$ alters the ratio of the resistors, unbalancing the stage and degrading the rejection of common-mode voltage. The cure is to buffer each input with a non-inverting amplifier, which has a very high input resistance, and to combine the two buffers in a difference stage.

### The three-op-amp instrumentation amplifier

Let amplifier $A_1$ have its non-inverting input at $V_1$ and $A_2$ at $V_2$. Each has a feedback resistor $R_1$, and a single resistor $R_G$ joins their inverting inputs. Because the op-amps are ideal, the inverting inputs follow the non-inverting ones, so the voltage across $R_G$ is $V_2 - V_1$ and the current through it is $(V_2 - V_1)/R_G$. That current also flows through both feedback resistors, so the outputs are

$$V_{a} = V_1 - \frac{R_1}{R_G}(V_2 - V_1),\qquad V_{b} = V_2 + \frac{R_1}{R_G}(V_2 - V_1).$$

Subtracting,

$$V_b - V_a = \left(1 + \frac{2R_1}{R_G}\right)(V_2 - V_1).$$

A third op-amp with equal resistors $R_2$ at the inputs and $R_3$ in the feedback and ground legs gives $V_{\text{out}} = (R_3/R_2)(V_b - V_a)$. With $R_3 = R_2$ the total gain is

$$G = 1 + \frac{2R_1}{R_G}.$$

One resistor sets the gain from $1$ upward. For a common-mode input $V_1 = V_2 = V_{cm}$ no current flows through $R_G$, so $V_a = V_b = V_{cm}$: the first stage has *unity* common-mode gain but differential gain $G$. Common-mode signals do not grow in the first stage, so the output swings are not saturated by the $2.5$ V level of a bridge. The input resistance is that of the op-amp inputs, of order $10^{9}\,\Omega$ and higher for FET inputs. A DC path for the bias current is essential: a floating thermocouple needs a resistor to ground or the input drifts to a rail.

### Common-mode rejection ratio

Real amplifiers respond slightly to $V_{cm}$. With differential gain $A_d$ and common-mode gain $A_{cm}$,

$$\text{CMRR} = \frac{A_d}{A_{cm}},\qquad \text{CMRR}_{\text{dB}} = 20\log_{10}\frac{A_d}{A_{cm}}.$$

Referred to the input, a common-mode voltage $V_{cm}$ looks like a differential error $V_{cm}/\text{CMRR}$.

The dominant cause is resistor mismatch in the difference stage. Let $R_3 = R_2$ but let the ground-leg resistor be $R_2(1 + t)$ at the non-inverting input, with $t$ the fractional error. A common-mode input gives a non-inverting voltage $V_{cm}(1+t)/(2+t)$, so

$$V_{\text{out}} = 2\,V_{cm}\,\frac{1+t}{2+t} - V_{cm} = V_{cm}\,\frac{t}{2+t} \approx \frac{t}{2}V_{cm}.$$

With $A_d = 1$, $\text{CMRR} \approx 2/t$. If all four resistors have tolerance $t$, the worst case is four times worse, $\text{CMRR} \approx 1/(2t)$: $500$ ($54$ dB) for $0.1\%$ resistors and $5000$ ($74$ dB) for $0.01\%$.

The first stage helps. The differential signal is amplified by $G_1 = 1 + 2R_1/R_G$ before it reaches the difference stage, whereas the common-mode signal is not, so

$$\text{CMRR}_{\text{total}} \approx G_1\,\text{CMRR}_{\text{diff stage}}.$$

This is why integrated instrumentation amplifiers, which use laser-trimmed matched networks, quote CMRR rising from about $80$ dB at $G = 1$ to $110$ to $130$ dB at $G = 1000$. CMRR also falls with frequency, because of capacitance mismatch, and an *unbalanced* source resistance converts common-mode voltage into differential, so the two wires from a sensor should have equal impedance.

### Gain and bandwidth

The first-stage op-amps have a finite gain-bandwidth product $f_T$ and, as non-inverting amplifiers, a closed-loop bandwidth $f_T/G$. With $f_T = 2$ MHz, a gain of $G = 1001$ gives a bandwidth of $2$ kHz, which is adequate for strain or temperature signals but not for audio. Two stages are used when both gain and bandwidth are required.

### Isolation amplifiers

When a sensor is at a different ground potential from the electronics, a **ground loop** forms: the potential difference drives a current through the signal return and adds an error voltage. A very large difference, as with a sensor on a mains-powered machine, or a patient connected to an ECG, is a hazard. An **isolation amplifier** passes the signal across a barrier with no conducting path, by a small transformer, a capacitor pair (with modulation to carry DC) or an optical coupler, and the power is isolated by a DC-DC converter. Typical ratings are $1.5$ to $5$ kV with a barrier capacitance of a few picofarads. The **isolation-mode rejection ratio** (IMRR) is analogous to CMRR, but for the barrier voltage.

### Aliasing and the anti-aliasing filter

Sampling at $f_s$ cannot distinguish a tone of frequency $f$ from tones at $|f - kf_s|$ for integer $k$; a $700$ Hz tone sampled at $1000$ Hz appears at $300$ Hz. Everything between $f_s - f_B$ and $f_s + f_B$ lands in the signal band $0$ to $f_B$. Once aliased the error cannot be removed digitally, so a low-pass filter must attenuate everything above $f_s - f_B$ before the ADC. A Butterworth filter of order $n$ and cut-off $f_c$ has

$$|H(f)|^2 = \frac{1}{1 + (f/f_c)^{2n}},\qquad A_{\text{dB}}(f) = 10\log_{10}\!\left[1 + (f/f_c)^{2n}\right].$$

For attenuation $A$ at the frequency $f_{\text{stop}} = f_s - f_B$, the required order is

$$n \ge \frac{\log_{10}\!\left(10^{A/10} - 1\right)}{2\log_{10}(f_{\text{stop}}/f_c)}.$$

A realisable choice is to place $f_c$ a little above $f_B$ so that the droop at $f_B$ is small. Every order adds $20$ dB per decade and one pole; each pair is one Sallen-Key section. Raising $f_s$ relaxes the filter, a trade exploited by oversampling converters (Lesson m3-l1).

```python
import numpy as np
fc = 150.0
f = np.array([100.0, 500.0, 900.0])
for n in (2, 3, 4):
    print(n, np.round(10 * np.log10(1 + (f / fc) ** (2 * n)), 2))
```

The printed rows show how raising the order from $2$ to $4$ lifts the attenuation at $900$ Hz while leaving the passband at $100$ Hz almost untouched.

## Key Ideas

- **Instrumentation amplifier**: $G = 1 + 2R_1/R_G$, set by one resistor; unity common-mode gain in the first stage.
- **CMRR** $= A_d/A_{cm}$; a difference stage with mismatch $t$ has $\text{CMRR} \approx 2/t$, and four resistors of tolerance $t$ give $1/(2t)$ in the worst case.
- **First-stage gain multiplies CMRR**: $\text{CMRR}_{\text{total}} \approx G_1\,\text{CMRR}_{\text{diff}}$.
- **Bandwidth** is $f_T/G$; high gain costs bandwidth.
- **Isolation** removes ground loops and protects people, with IMRR the barrier analogue of CMRR.
- **Anti-aliasing**: filter order $n \ge \log_{10}(10^{A/10} - 1)/[2\log_{10}(f_{\text{stop}}/f_c)]$, applied *before* sampling.

## Worked Examples

### Example 1 — Gain design for a strain-gauge bridge

A full bridge on $350\,\Omega$ gauges at $V_s = 5.00$ V gives $1.75$ mV (Lesson m2-l1) on a $2.50$ V common-mode level. With $R_1 = 25.0$ k$\Omega$, choose $R_G$ for a gain near $1000$ and find the output and the first-stage output voltages.

**Solution.** With $R_G = 50.0\,\Omega$, $G = 1 + 2 \times 25\,000/50.0 = 1001$. The output is $1001 \times 1.75$ mV $= 1.752$ V. The first-stage outputs are $V_a = 2.5 - \tfrac12(1.752) = 1.62$ V and $V_b = 3.38$ V, both far from the rails, as the unity common-mode gain predicts. With $f_T = 2$ MHz the bandwidth is $2\times 10^{6}/1001 = 2.0$ kHz. The same circuit with the quarter bridge ($0.4375$ mV) gives $0.438$ V, which uses less than 10% of a 5 V ADC range; the half and full bridges use the range better.

### Example 2 — CMRR requirement for a quarter bridge

The quarter-bridge signal is $437.5\,\mu$V on $V_{cm} = 2.50$ V. Compare the common-mode error of (a) a single difference stage with $0.1\%$ resistors and (b) an instrumentation amplifier with $G_1 = 101$ and the same $0.1\%$ difference stage, and (c) the same with $0.01\%$ resistors.

**Solution.** (a) $\text{CMRR} \approx 1/(2 \times 0.001) = 500$, so the error referred to the input is $2.50/500 = 5.0$ mV, more than ten times the signal. (b) $\text{CMRR} \approx 101 \times 500 = 5.05 \times 10^{4}$ ($94$ dB), giving $2.50/5.05\times10^{4} = 49.5\,\mu$V, $11\%$ of the signal. (c) With $0.01\%$ resistors the diff-stage CMRR is $5000$, the total $5.05 \times 10^{5}$ ($114$ dB), and the error is $4.95\,\mu$V, $1.1\%$. Since $V_{cm}$ is constant, this error is mostly a fixed offset that zeroing removes; what remains is the *variation* of $V_{cm}$. A $1\%$ change in the supply moves $V_{cm}$ by $25$ mV and, at $100$ dB, the output by $0.25\,\mu$V, $0.057\%$ of the signal.

### Example 3 — An anti-aliasing filter

A signal of bandwidth $f_B = 100$ Hz is sampled at $f_s = 1000$ Hz by a 10-bit ADC. Aliases must be below one least-significant bit, about $62$ dB below full scale. Find the order of a Butterworth filter with $f_c = 150$ Hz and the droop at $100$ Hz.

**Solution.** The alias band begins at $f_{\text{stop}} = 1000 - 100 = 900$ Hz, so $f_{\text{stop}}/f_c = 6$. For $A = 62$ dB,

$$n \ge \frac{\log_{10}(10^{6.2} - 1)}{2\log_{10} 6} = \frac{6.20}{1.556} = 3.98,$$

so $n = 4$, two Sallen-Key sections. The attenuation at $900$ Hz is $10\log_{10}(1 + 6^{8}) = 62.25$ dB, meeting the requirement narrowly. At $100$ Hz the droop is $10\log_{10}[1 + (2/3)^{8}] = 0.17$ dB, acceptable. A second-order filter would give only $31$ dB, and a third-order one $47$ dB.

## Common Misconceptions

- **"An instrumentation amplifier is just an op-amp with a gain resistor."** It is three op-amps whose high, balanced input resistance and trimmed difference stage give CMRR that a single stage cannot.
- **"Common-mode rejection is lost if the gain is high."** The reverse holds: because the first stage amplifies only the difference, CMRR rises with gain.
- **"A software filter can remove aliasing after sampling."** Once sampled, an alias is indistinguishable from a real signal in the band; the filter must be analogue and before the ADC.
- **"Isolation is only for safety."** It also breaks ground loops, which are a major source of mains pickup.
- **"Source resistance does not matter because the input resistance is huge."** Unequal source resistances convert common-mode to differential voltage and add noise (Lesson m3-l2).

## Connections

- The first stage is the non-inverting amplifier and the difference stage the subtractor from the op-amp circuits of Communication Electronics (Lesson m1-l2); both are analysed with the virtual-short principle.
- Aliasing and the sampling theorem are developed for digital communication in Communication Electronics (Lesson m3-l3); the same fold-over produces the wagon-wheel effect in film.
- The Electronic Instrumentation Lab (Operational Amplifier Circuits and Instrumentation Amplifiers, and Active Filter Design) builds the circuit and measures CMRR and the Sallen-Key response.
- Differential signalling on twisted pairs, as in RS-485 and Ethernet links, rests on the same common-mode rejection.

## Quick Check

1. Derive $G = 1 + 2R_1/R_G$ for the three-op-amp amplifier.
2. Find $R_G$ for $G = 101$ with $R_1 = 10$ k$\Omega$.
3. An amplifier has $A_d = 1000$ and $A_{cm} = 0.02$. Find the CMRR in dB, and the input-referred error for $V_{cm} = 1$ V.
4. A signal of $f_B = 20$ Hz is sampled at $200$ Hz. Find the order of a Butterworth filter with $f_c = 30$ Hz that gives $40$ dB at the alias band.
5. What frequency does a $1.3$ kHz tone appear at when sampled at $1$ kHz?

## Takeaway

- The three-op-amp instrumentation amplifier has $G = 1 + 2R_1/R_G$ and unity common-mode gain in its first stage.
- CMRR is limited by resistor matching and multiplied by the first-stage gain.
- Gain costs bandwidth, $f_T/G$.
- Isolation breaks ground loops and protects against high voltages.
- An analogue anti-aliasing filter of the right order must precede every ADC.
