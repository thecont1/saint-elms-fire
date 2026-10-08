***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: analog-and-digital-electronics
courseName: Analog and Digital Electronics
moduleId: analog-and-digital-electronics-module-1
moduleName: Diode and Transistor Amplifiers
lessonId: analog-and-digital-electronics-m1-l2
lessonName: BJT Biasing and the Common-Emitter Amplifier
lessonNumber: 2
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - analog-and-digital-electronics-m1-l1
  - basic-electronics-m2-l2
learningObjectives:
  - Design a voltage-divider bias network for a specified collector current and quiescent point, and evaluate its sensitivity to $\beta$.
  - Derive the hybrid-$\pi$ parameters $g_m = I_C/V_T$ and $r_\pi = \beta/g_m$ and compute the gain, input resistance and output resistance of a common-emitter stage.
  - Determine the low-frequency corners set by coupling and bypass capacitors and the upper cut-off set by the Miller-multiplied collector–base capacitance.
concepts:
  - Load line and quiescent point
  - Voltage-divider bias
  - Bias stability factor
  - Hybrid-pi small-signal model
  - Transconductance
  - Common-emitter voltage gain
  - Miller effect
tags:
  - physics
  - analog-and-digital-electronics
  - bjt-amplifier
  - frequency-response
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# BJT Biasing and the Common-Emitter Amplifier

## Overview

An amplifier is a non-linear device persuaded to behave linearly. The bipolar junction transistor obeys an exponential law between base–emitter voltage and collector current, yet a well-designed common-emitter stage multiplies a millivolt signal by a hundred with little distortion. DC biasing first places the transistor at a quiescent point in the middle of its active region and holds it there against temperature and the poorly controlled current gain $\beta$. Small-signal analysis then linearises the exponential about that point, replacing the transistor with a transconductance $g_m$ and resistances $r_\pi$ and $r_o$, from which gain and impedances follow in a few lines. Finally, coupling and bypass capacitors remove the gain at low frequency, and the junction capacitances, magnified by the Miller effect, remove it at high frequency.

## Learning Path

- **What you should already know**: BJT structure, $I_C = \beta I_B$, and the cut-off, active and saturation regions (Basic Electronics m2-l2); the dynamic resistance of a forward-biased junction (Lesson m1-l1).
- **What this lesson adds**: the load line and Q-point; fixed and voltage-divider bias with the stability factor; the hybrid-$\pi$ model; gain, $R_{in}$ and $R_{out}$ of the common-emitter amplifier; capacitor corner frequencies; the Miller effect.
- **What later lessons this will unlock**: the unbypassed emitter resistor is the first example of negative feedback (Lesson m1-l3); the op-amp of Lesson m2-l1 is built from differential pairs of such stages; the gain–bandwidth and slew-rate limits of Lesson m2-l3 are Miller-effect phenomena inside the IC.

## Core Explanation

### The active region and the load line

In the forward-active region an npn transistor obeys

$$I_C = I_S\,e^{V_{BE}/V_T}, \qquad I_B = \frac{I_C}{\beta}, \qquad I_E = \frac{\beta + 1}{\beta}\,I_C,$$

with $V_T \approx 25.9$ mV at 300 K. For hand analysis $V_{BE} \approx 0.7$ V, and the device stays active while $V_{CE} \gtrsim 0.2$ V; below this it saturates.

With a collector resistor $R_C$ from the supply $V_{CC}$ and an emitter resistor $R_E$ to ground, Kirchhoff's voltage law gives the **DC load line**

$$V_{CE} \approx V_{CC} - I_C (R_C + R_E),$$

on which the bias network selects one point, the **quiescent point** (Q-point), placed near the middle so the collector can swing equally towards saturation and cut-off.

### Fixed bias and its failure

The simplest bias is a single resistor $R_B$ from $V_{CC}$ to the base: $I_B = (V_{CC} - V_{BE})/R_B$ and $I_C = \beta I_B$. The collector current is proportional to $\beta$, which varies two- or three-fold between devices and rises with temperature. The collector leakage $I_{CO}$ doubles every 10 K, and the **stability factor** $S = \partial I_C/\partial I_{CO}$ equals $\beta + 1$ for fixed bias: leakage is amplified.

### Voltage-divider (self) bias

The remedy is a potential divider $R_1$, $R_2$ to hold the base voltage and an emitter resistor $R_E$ to convert it into emitter current. With the Thévenin equivalent

$$V_{BB} = V_{CC}\,\frac{R_2}{R_1 + R_2}, \qquad R_B = R_1 \parallel R_2,$$

the base loop $V_{BB} = I_B R_B + V_{BE} + I_E R_E$ with $I_B = I_E/(\beta + 1)$ gives

$$I_E = \frac{V_{BB} - V_{BE}}{R_E + R_B/(\beta + 1)}.$$

If $R_B \ll (\beta + 1) R_E$ the current is set by resistors alone; the usual rule $R_B \le (\beta_{\min} + 1) R_E/10$ balances this against input resistance and divider current. The emitter resistor also provides thermal feedback: if $I_C$ rises, $V_E$ rises, $V_{BE}$ falls and $I_C$ is pulled back. The stability factor becomes $S \approx 1 + R_B/R_E$, typically 2 to 10. Practical designs set $V_E \approx 0.1\,V_{CC}$ as a margin against the $-2$ mV/K drift of $V_{BE}$.

### The hybrid-pi small-signal model

Superimpose a small $v_{be}$ on the bias and expand the exponential to first order:

$$i_c = g_m v_{be}, \qquad g_m = \frac{\partial I_C}{\partial V_{BE}} = \frac{I_C}{V_T}.$$

The **transconductance** depends only on bias current: 38.6 mA/V at 1 mA. The base sees

$$r_\pi = \frac{v_{be}}{i_b} = \frac{\beta}{g_m} = \frac{V_T}{I_B},$$

about 2.6 kΩ at $I_B = 10$ µA, while from the emitter the same junction has the much smaller $r_e = V_T/I_E \approx 1/g_m$, about 26 Ω at 1 mA. The Early effect, the slight dependence of $I_C$ on $V_{CE}$, appears as an output resistance $r_o = V_A/I_C$ with Early voltage $V_A \sim 100$ V, so $r_o \sim 100$ kΩ at 1 mA. The **hybrid-$\pi$ model** is $r_\pi$ between base and emitter, a controlled source $g_m v_{be}$ from collector to emitter, and $r_o$ across it.

### Common-emitter gain and impedances

In the **common-emitter (CE) amplifier** the signal enters the base through a coupling capacitor $C_1$ from a source $v_s$ of resistance $R_s$; the emitter resistor is bypassed to ground by a large $C_E$; the collector drives a load $R_L$ through $C_2$. In the mid-band the emitter is at signal ground and the collector current flows through $R_C' = R_C \parallel R_L \parallel r_o$:

$$A_v = \frac{v_o}{v_{be}} = -g_m R_C', \qquad R_{in} = R_B \parallel r_\pi, \qquad R_{out} = R_C \parallel r_o \approx R_C.$$

The minus sign is the 180° phase inversion, and the source divider gives $v_o/v_s = A_v\,R_{in}/(R_{in} + R_s)$. Since $g_m = I_C/V_T$, the gain is bounded by $|A_v| \le I_C R_C/V_T$, roughly 40 per volt of DC drop across $R_C$.

If part of the emitter resistance, $R_{E1}$, is left **unbypassed**, the base current must drive $r_\pi + (\beta + 1)R_{E1}$ and

$$A_v \approx -\frac{R_C'}{R_{E1} + 1/g_m}, \qquad R_{in} = R_B \parallel [r_\pi + (\beta + 1) R_{E1}].$$

The gain falls but now depends on resistor ratios rather than $g_m$, and distortion drops: this is negative feedback, treated systematically in Lesson m1-l3.

### Low-frequency response

Each coupling or bypass capacitor $C$, with the resistance $R$ it sees when the others are shorted, forms a high-pass section of corner $f = 1/(2\pi RC)$:

- $C_1$ sees $R_s + R_{in}$;
- $C_2$ sees $R_C + R_L$;
- $C_E$ sees $R_E \parallel [r_e + (R_s \parallel R_B)/(\beta + 1)]$, a few tens of ohms, so $C_E$ usually sets the **lower cut-off** $f_L$.

Below each corner the gain falls at 20 dB per decade.

### High-frequency response and the Miller effect

At high frequency the junction capacitances take over: $C_\pi$ (base–emitter, 10–50 pF, mostly diffusion capacitance proportional to $I_C$) and $C_\mu$ (collector–base, 1–5 pF). The device limit is the **transition frequency** $f_T = g_m/[2\pi(C_\pi + C_\mu)]$, where the short-circuit current gain reaches unity.

In the CE stage $C_\mu$ bridges the inverting input and output. **Miller's theorem**: an impedance $Z$ between the input and output of an amplifier of gain $A$ is equivalent to $Z/(1 - A)$ at the input and $Z/(1 - 1/A)$ at the output. For a capacitance and $A = -g_m R_C'$,

$$C_{in} = C_\pi + C_\mu (1 + g_m R_C').$$

Driven through $R_s' = R_s \parallel R_B \parallel r_\pi$ it gives the **upper cut-off**

$$f_H \approx \frac{1}{2\pi R_s' C_{in}}.$$

High gain therefore costs bandwidth, and the gain–bandwidth product $|A_v| f_H$ is roughly constant for a given transistor and source. Cascode and common-base stages avoid the Miller effect by holding the base at signal ground.

The snippet plots the magnitude response of Example 3; expect a flat mid-band near 40 dB between corners at 52 Hz and 670 kHz with 20 dB per decade skirts.

```python
import numpy as np, matplotlib.pyplot as plt
A0, fL, fH = 94, 52, 6.7e5
f = np.logspace(0, 8, 600)
H = A0 * (1j*f/fL) / (1 + 1j*f/fL) / (1 + 1j*f/fH)
plt.semilogx(f, 20*np.log10(abs(H)))
plt.xlabel("f (Hz)"); plt.ylabel("|A| (dB)"); plt.grid(True, which="both"); plt.show()
```

## Key Ideas

- **Load line and Q-point**: $V_{CE} = V_{CC} - I_C(R_C + R_E)$; bias near mid-line for maximum swing.
- **Voltage-divider bias**: $I_E = (V_{BB} - V_{BE})/[R_E + R_B/(\beta + 1)]$ with $R_B \le (\beta + 1)R_E/10$.
- **Hybrid-$\pi$ parameters**: $g_m = I_C/V_T$, $r_\pi = \beta/g_m$, $r_o = V_A/I_C$.
- **CE gain**: $A_v = -g_m R_C'$, $R_{in} = R_B \parallel r_\pi$, $R_{out} \approx R_C$; an unbypassed $R_{E1}$ gives $A_v \approx -R_C'/R_{E1}$.
- **Miller effect**: $C_\mu$ appears at the input multiplied by $(1 + g_m R_C')$, so gain trades against bandwidth.

## Worked Examples

### Example 1 — Designing the bias network

Design a divider-biased CE stage with $V_{CC} = 12$ V, $I_C \approx 1$ mA, $R_C = 4.7$ kΩ, $\beta_{\min} = 100$, and find the change in $I_E$ if $\beta$ is actually 200.

**Solution.** Take $V_E = 1.2$ V, so $R_E = 1.2$ kΩ and $V_B = 1.9$ V. The rule gives $R_B \le 0.1 \times 101 \times 1.2 = 12.1$ kΩ. A divider with $R_B = 12$ kΩ and $V_{BB} = 1.9$ V needs $R_1 = R_B V_{CC}/V_{BB} = 75.8$ kΩ and $R_2 = R_B/(1 - V_{BB}/V_{CC}) = 14.3$ kΩ. Choose $R_1 = 75$ kΩ, $R_2 = 15$ kΩ, so $V_{BB} = 12 \times 15/90 = 2.00$ V and $R_B = 75 \times 15/90 = 12.5$ kΩ. For $\beta = 100$,

$$I_E = \frac{2.00 - 0.7}{1200 + 12500/101} = \frac{1.30}{1323.8} = 0.982\ \text{mA}, \qquad I_C = 0.972\ \text{mA},$$

giving $V_C = 12 - 0.972 \times 4.7 = 7.43$ V, $V_E = 1.18$ V and $V_{CE} = 6.25$ V. For $\beta = 200$, $I_E = 1.30/(1200 + 62.2) = 1.030$ mA, a rise of only 4.9% for a doubling of $\beta$.

### Example 2 — Mid-band gain and impedances

The stage of Example 1 ($I_C = 1.0$ mA, $\beta = 100$, $V_A = 100$ V), fully bypassed, is driven from $R_s = 600$ Ω and drives $R_L = 10$ kΩ. Find $A_v$, $R_{in}$, $R_{out}$ and $v_o/v_s$.

**Solution.** $g_m = 1.0/25.9 = 38.6$ mA/V, $r_\pi = 100/0.0386 = 2.59$ kΩ, $r_o = 100$ kΩ. The effective load is $R_C' = 4.7 \parallel 10 \parallel 100 = 3.10$ kΩ, so

$$A_v = -38.6 \times 3.10 = -120.$$

Then $R_{in} = 12.5 \parallel 2.59 = 2.15$ kΩ, $R_{out} = 4.7 \parallel 100 = 4.49$ kΩ, and the source divider $2.15/2.75 = 0.781$ gives $v_o/v_s = -94$. With the 1.2 kΩ emitter resistor unbypassed the gain would fall to about $-3.10/1.226 = -2.5$.

### Example 3 — Bandwidth

For the amplifier of Example 2, $C_1 = C_2 = 10$ µF, $C_E = 100$ µF, $C_\pi = 20$ pF and $C_\mu = 4$ pF. Find the lower and upper cut-off frequencies.

**Solution.** One capacitor at a time:

- $C_1$ sees $600 + 2150 = 2750$ Ω: $f_1 = 1/(2\pi \times 2750 \times 10^{-5}) = 5.8$ Hz.
- $C_2$ sees $14.7$ kΩ: $f_2 = 1/(2\pi \times 14700 \times 10^{-5}) = 1.1$ Hz.
- $C_E$ sees $1200 \parallel [25.9 + 573/101] = 1200 \parallel 31.6 = 30.8$ Ω: $f_E = 1/(2\pi \times 30.8 \times 10^{-4}) = 52$ Hz.

The lower cut-off is $f_L \approx 52$ Hz, set by the bypass capacitor. At high frequency $C_{in} = 20 + 4 \times 121 = 504$ pF and $R_s' = 600 \parallel 12500 \parallel 2590 = 469$ Ω, so

$$f_H = \frac{1}{2\pi \times 469 \times 504 \times 10^{-12}} = 673\ \text{kHz}.$$

The transistor's own $f_T$ is 256 MHz; the stage uses under 0.3% of it because of the Miller effect.

## Common Misconceptions

- **"$\beta$ is the gain of the amplifier."** $\beta$ is the DC current gain of the device and is deliberately designed out of a good circuit. The voltage gain is $-g_m R_C'$; $\beta$ enters only through $r_\pi$ and $R_{in}$.
- **"The bypass capacitor just filters noise."** $C_E$ holds the emitter at signal ground so that the full $v_{be}$ appears across the junction; without it the gain drops forty-fold in Example 2.
- **"A larger collector resistor always gives more gain."** Only until the DC drop $I_C R_C$ pushes the Q-point towards saturation; higher gain also shrinks the bandwidth.
- **"4 pF cannot matter at 1 MHz."** Multiplied by $(1 + |A_v|)$ it becomes hundreds of picofarads at the input.

## Connections

- The linearisation $i_c = g_m v_{be}$ is the Taylor-expansion step that turns the pendulum into a harmonic oscillator in Mechanics.
- The corner frequency $1/(2\pi RC)$ is the frequency-domain view of the RC transient in Electricity and Magnetism and of the filter experiment in the Communication Electronics Lab.
- $g_m = I_C/V_T$ follows from Boltzmann statistics of carriers across the junction, linking the amplifier to Thermal Physics and Solid State Physics.
- Photodiode preamplifiers in Astrophysics instrumentation are CE or cascode stages designed exactly as here, with the Miller effect governing bandwidth.

## Quick Check

1. Why does fixed bias amplify leakage by $\beta + 1$, and how does an emitter resistor reduce the stability factor?
2. A CE stage is biased at $I_C = 2$ mA with $R_C = R_L = 2.2$ kΩ. Estimate $g_m$ and $A_v$, ignoring $r_o$.
3. State Miller's theorem and explain why a cascode has wider bandwidth than a CE stage of equal gain.
4. In Example 3, which capacitor would you enlarge to lower $f_L$ to 20 Hz, and by what factor?
5. Why does the input resistance of a bypassed CE stage rarely exceed a few kilohms at milliampere bias?

## Takeaway

- Biasing fixes the Q-point on the load line; divider bias with an emitter resistor makes $I_C$ nearly independent of $\beta$ and temperature.
- The hybrid-$\pi$ model linearises the transistor: $g_m = I_C/V_T$, $r_\pi = \beta/g_m$, $r_o = V_A/I_C$.
- The CE amplifier has $A_v = -g_m R_C'$, $R_{in} = R_B \parallel r_\pi$ and $R_{out} \approx R_C$.
- The Miller effect multiplies $C_\mu$ by $1 + g_m R_C'$, so gain and bandwidth are traded against each other.
