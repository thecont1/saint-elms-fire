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
lessonId: analog-and-digital-electronics-m1-l3
lessonName: FET Amplifiers and Negative Feedback
lessonNumber: 3
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - analog-and-digital-electronics-m1-l2
  - basic-electronics-m2-l2
learningObjectives:
  - Bias a JFET or MOSFET from its square-law characteristic, compute $g_m$, and find the gain and impedances of common-source and source-follower stages.
  - Derive the closed-loop gain $A_f = A/(1 + A\beta)$ and show that negative feedback reduces gain sensitivity, distortion and bandwidth limitations by the factor $1 + A\beta$.
  - Identify the four feedback topologies and predict their effect on input and output resistance.
concepts:
  - Square-law FET characteristic
  - JFET self-bias
  - Common-source amplifier
  - Source follower
  - Closed-loop gain
  - Loop gain and desensitivity
  - Feedback topologies
tags:
  - physics
  - analog-and-digital-electronics
  - fet-amplifier
  - negative-feedback
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# FET Amplifiers and Negative Feedback

## Overview

Field-effect transistors control a channel current with a gate voltage across an insulator or a reverse-biased junction, so they draw essentially no input current and are the natural first stage for high-impedance sources. This lesson develops the square-law model of the JFET and MOSFET, biases them, and analyses the common-source amplifier and the source follower. The second half generalises an observation from Lesson m1-l2: an unbypassed source or emitter resistor lowers the gain but makes it depend on resistor ratios instead of device parameters. This is negative feedback. We derive the closed-loop gain $A/(1 + A\beta)$ and show that the factor $1 + A\beta$ that reduces the gain also reduces its sensitivity, distortion and frequency dependence, while transforming the input and output impedances in a direction chosen by the feedback topology.

## Learning Path

- **What you should already know**: MOSFET structure and threshold voltage (Basic Electronics m2-l2); the small-signal method, $A_v = -g_m R_C'$ and the gain–bandwidth trade-off of the CE amplifier (Lesson m1-l2).
- **What this lesson adds**: the square law and $g_m$ for JFETs and MOSFETs; FET biasing; common-source and source-follower stages; the feedback equation; desensitivity, bandwidth extension and distortion reduction; the four feedback topologies.
- **What later lessons this will unlock**: every op-amp circuit in Module 2 is a feedback amplifier with $A\beta \gg 1$, and the golden rules of Lesson m2-l1 are the limit of this lesson's equations; positive feedback gives the Schmitt trigger (Lesson m2-l2) and the gain–bandwidth product returns in Lesson m2-l3.

## Core Explanation

### The square-law FET

In the **saturation (pinch-off) region**, where $V_{DS} \ge V_{GS} - V_P$, the drain current of an n-channel JFET depends on the gate–source voltage alone:

$$I_D = I_{DSS}\left(1 - \frac{V_{GS}}{V_P}\right)^2, \qquad V_P \le V_{GS} \le 0,$$

with $I_{DSS}$ the current at $V_{GS} = 0$ and $V_P < 0$ the pinch-off voltage. The enhancement MOSFET obeys the same parabola measured from its threshold $V_{th}$:

$$I_D = \tfrac{1}{2}k_n (V_{GS} - V_{th})^2, \qquad k_n = \mu_n C_{ox}\frac{W}{L}.$$

Differentiating gives the **transconductance**

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \frac{2 I_{DSS}}{|V_P|}\left(1 - \frac{V_{GS}}{V_P}\right) = \frac{2\sqrt{I_{DSS} I_D}}{|V_P|} \quad \text{(JFET)}, \qquad g_m = \sqrt{2 k_n I_D} \quad \text{(MOSFET)}.$$

Two differences from the BJT follow. The FET $g_m$ grows only as $\sqrt{I_D}$ and is typically 1–5 mA/V at a milliampere, ten times smaller than the bipolar $I_C/V_T$, so FET stages have lower gain. But the gate current is picoamperes for a JFET and femtoamperes for a MOSFET, so the input resistance is set by the external gate resistor $R_G$, which may be megohms. The small-signal model is a controlled source $g_m v_{gs}$ from drain to source, an output resistance $r_o$ from channel-length modulation, and an open circuit at the gate.

### Biasing

A JFET needs $V_{GS} < 0$, which **self-bias** supplies without a second source: the gate is held at ground through $R_G$ and the source is raised by $R_S$, so $V_{GS} = -I_D R_S$. Graphically, the bias line $I_D = -V_{GS}/R_S$ intersects the transfer parabola at the Q-point. Because $I_{DSS}$ and $V_P$ vary by a factor of two or more between devices, a larger $R_S$ with a positive gate bias from a divider (**voltage-divider bias**) flattens the bias line and stabilises $I_D$. Enhancement MOSFETs need $V_{GS} > V_{th}$ and are biased with a divider and source resistor in the same way; in every case one checks that the device is in saturation.

### Common-source and source-follower stages

The **common-source (CS) amplifier** is the FET analogue of the CE stage: gate input, drain output through $R_D$, source bypassed. With $R_D' = R_D \parallel R_L \parallel r_o$,

$$A_v = -g_m R_D', \qquad R_{in} = R_G, \qquad R_{out} = R_D \parallel r_o.$$

With an unbypassed source resistor $R_S$ the gate–source voltage is only part of the input, $v_{gs} = v_{in} - g_m v_{gs} R_S$, so

$$A_v = -\frac{g_m R_D'}{1 + g_m R_S} \approx -\frac{R_D'}{R_S} \quad (g_m R_S \gg 1).$$

The **source follower (common-drain)** takes the output from the source with no drain resistor:

$$A_v = \frac{g_m R_S'}{1 + g_m R_S'} < 1, \qquad R_{out} = \frac{1}{g_m} \parallel R_S,$$

with $R_S' = R_S \parallel R_L$: a buffer with enormous input resistance and an output resistance of a few hundred ohms.

### The feedback equation

Both unbypassed-resistor results have the shape $A/(1 + A\beta)$. Consider a **basic amplifier** of gain $A$ whose output $x_o$ is sampled by a **feedback network** returning $x_f = \beta x_o$, subtracted from the source signal $x_s$ at the input: $x_i = x_s - \beta x_o$. Since $x_o = A x_i$,

$$A_f = \frac{x_o}{x_s} = \frac{A}{1 + A\beta}.$$

$A\beta$ is the **loop gain** and $1 + A\beta$ the **amount of feedback** or **desensitivity**. For $A\beta \gg 1$,

$$A_f \approx \frac{1}{\beta},$$

independent of the amplifier: the gain is set by the feedback network. In the CS stage with $R_S$, $A = g_m R_D'$ and the source resistor returns $\beta = R_S/R_D'$ of the output in series with the input; the follower is the special case $\beta = 1$.

### What the factor $1 + A\beta$ buys

**Gain stabilisation.** Differentiating,

$$\frac{dA_f}{A_f} = \frac{1}{1 + A\beta}\,\frac{dA}{A}.$$

A 20% change in $A$ becomes a 0.2% change in $A_f$ when $1 + A\beta = 100$.

**Bandwidth extension.** If the amplifier has a single high-frequency pole, $A(f) = A_0/(1 + jf/f_H)$, substitution gives

$$A_f(f) = \frac{A_0/(1 + A_0\beta)}{1 + jf/[f_H(1 + A_0\beta)]},$$

so the closed-loop corner is $f_{Hf} = (1 + A_0\beta)f_H$ and the **gain–bandwidth product** $A_0 f_H$ is conserved.

**Distortion and noise.** Non-linearity in the output stage adds a distortion component $x_d$ at the output; fed back and inverted around the loop, it is reduced to $x_d/(1 + A\beta)$. Noise generated after the input stage is reduced in the same way; noise at the input is not, because the loop cannot distinguish it from signal.

**Impedance transformation.** The network may sample the output **voltage** (shunt) or **current** (series), and return the signal as a **series voltage** or a **shunt current** at the input.

| Topology | Samples | Returns | $R_{in}$ | $R_{out}$ | Realises |
|---|---|---|---|---|---|
| Series–shunt | voltage | series voltage | $\times (1 + A\beta)$ | $\div (1 + A\beta)$ | voltage amplifier |
| Shunt–shunt | voltage | shunt current | $\div (1 + A\beta)$ | $\div (1 + A\beta)$ | transresistance amplifier |
| Series–series | current | series voltage | $\times (1 + A\beta)$ | $\times (1 + A\beta)$ | transconductance amplifier |
| Shunt–series | current | shunt current | $\div (1 + A\beta)$ | $\times (1 + A\beta)$ | current amplifier |

The non-inverting op-amp of Lesson m2-l1 is series–shunt; the inverting amplifier is shunt–shunt.

### The price: stability

Each pole adds up to 90° of phase lag, so if $|A\beta| \ge 1$ at the frequency where the loop shift reaches 180°, the fed-back signal adds instead of subtracting and the amplifier oscillates. Designers keep a **phase margin** of 45° or more by making one pole dominant; op-amps are internally compensated for this reason (Lesson m2-l3).

The snippet plots open- and closed-loop Bode magnitudes for Example 2; expect flat lines at 60 dB and 20 dB meeting the same $-20$ dB per decade asymptote, with the closed-loop corner at 1 MHz.

```python
import numpy as np, matplotlib.pyplot as plt
A0, fH, beta = 1000, 1e4, 0.099
f = np.logspace(2, 8, 500)
A = A0/(1 + 1j*f/fH)
Af = A/(1 + A*beta)
plt.semilogx(f, 20*np.log10(abs(A)), label="open loop")
plt.semilogx(f, 20*np.log10(abs(Af)), label="closed loop")
plt.xlabel("f (Hz)"); plt.ylabel("gain (dB)"); plt.legend(); plt.grid(True, which="both"); plt.show()
```

## Key Ideas

- **Square law**: $I_D = I_{DSS}(1 - V_{GS}/V_P)^2$ or $\tfrac12 k_n(V_{GS} - V_{th})^2$; $g_m$ grows as $\sqrt{I_D}$.
- **FET stages**: CS gain $-g_m R_D'$ with $R_{in} = R_G$; source follower gain $g_m R_S'/(1 + g_m R_S')$ with $R_{out} = 1/g_m \parallel R_S$.
- **Feedback equation**: $A_f = A/(1 + A\beta) \to 1/\beta$ for large loop gain.
- **Desensitivity**: gain variations, distortion and output-stage noise all fall by $1 + A\beta$.
- **Bandwidth**: a single-pole amplifier's corner rises by $1 + A\beta$; gain–bandwidth product is conserved.
- **Topologies**: series mixing raises $R_{in}$, shunt mixing lowers it; voltage sampling lowers $R_{out}$, current sampling raises it.

## Worked Examples

### Example 1 — Self-biased JFET common-source stage

A JFET with $I_{DSS} = 8$ mA and $V_P = -4$ V is to run at $I_D = 2$ mA from $V_{DD} = 15$ V with $R_D = 2.2$ kΩ and $R_G = 1$ MΩ. Find $R_S$, $g_m$, the Q-point and the gain into $R_L = 10$ kΩ with the source bypassed and unbypassed.

**Solution.** From the square law, $(1 - V_{GS}/V_P)^2 = 2/8 = 0.25$, so $1 - V_{GS}/V_P = 0.5$ and $V_{GS} = 0.5\,V_P = -2$ V. Self-bias then needs

$$R_S = \frac{-V_{GS}}{I_D} = \frac{2}{2 \times 10^{-3}} = 1\ \text{k}\Omega.$$

The transconductance is $g_m = 2\sqrt{8 \times 2}/4 = 2$ mA/V. The Q-point: $V_S = 2$ V, $V_D = 15 - 2 \times 2.2 = 10.6$ V, $V_{DS} = 8.6$ V, well above $V_{GS} - V_P = 2$ V, confirming saturation. With $R_D' = 2.2 \parallel 10 = 1.80$ kΩ,

$$A_v = -g_m R_D' = -2 \times 1.80 = -3.6 \quad \text{(bypassed)}, \qquad A_v = \frac{-3.6}{1 + 2 \times 1} = -1.2 \quad \text{(unbypassed)}.$$

The gain is modest, but $R_{in} = 1$ MΩ.

### Example 2 — Desensitivity and bandwidth

An amplifier has $A_0 = 1000$, varying by $\pm 20\%$ between units, and $f_H = 10$ kHz. Feedback with $\beta = 0.099$ is applied. Find the closed-loop gain, its spread and its bandwidth.

**Solution.** The desensitivity is $1 + A_0\beta = 1 + 99 = 100$, so

$$A_f = \frac{1000}{100} = 10.0.$$

For $A_0 = 800$: $A_f = 800/(1 + 79.2) = 9.98$; for $A_0 = 1200$: $A_f = 1200/(1 + 118.8) = 10.02$. The $\pm 20\%$ spread has become $\pm 0.2\%$. The closed-loop corner is $f_{Hf} = 100 \times 10$ kHz $= 1.0$ MHz, and the gain–bandwidth product is unchanged at $10 \times 10^6 = 10$ MHz.

### Example 3 — MOSFET source follower as a feedback amplifier

An enhancement MOSFET with $k_n = 4$ mA/V$^2$ is biased at $I_D = 2$ mA with $R_S = 2$ kΩ and drives a high-impedance load. Find $g_m$, the gain and the output resistance, and interpret the result in feedback terms.

**Solution.** $g_m = \sqrt{2 k_n I_D} = \sqrt{2 \times 4 \times 2} = 4$ mA/V. The follower gain is

$$A_v = \frac{g_m R_S}{1 + g_m R_S} = \frac{4 \times 2}{1 + 8} = \frac{8}{9} = 0.889,$$

and the output resistance is $R_{out} = (1/g_m) \parallel R_S = 250 \parallel 2000 = 222$ Ω. In feedback language the open-loop gain is $A = g_m R_S = 8$, the whole output is returned in series with the input ($\beta = 1$), and $A_f = 8/9$. The series–shunt topology divides the open-loop output resistance $R_S = 2$ kΩ by $1 + A\beta = 9$, giving the same 222 Ω.

## Common Misconceptions

- **"FETs are better than BJTs because they have no input current."** They are better *for high-impedance sources*. At the same current a BJT has roughly ten times the transconductance and lower voltage noise.
- **"Negative feedback is just a way of reducing gain."** Gain is cheap; feedback spends it on accuracy, linearity, bandwidth and controlled impedances.
- **"Feedback removes all noise."** Only noise and distortion generated after the summing point are reduced by $1 + A\beta$; input-stage noise passes at full strength.
- **"More feedback is always better."** Loop gain above unity where the phase lag reaches 180° makes an oscillator.
- **"Feedback raises the gain–bandwidth product."** It only redistributes $A_0 f_H$ between gain and bandwidth; the product belongs to the open-loop amplifier.

## Connections

- The feedback equation is the closed-loop transfer function of control theory, met in Differential Equations; a thermostat or a governor holds a variable constant by the same algebra.
- The JFET gate is a reverse-biased p–n junction and the MOSFET gate an insulated capacitor; both are treated in Solid State Physics.
- Photodiode preamplifiers and CCD readout electronics in Astrophysics use FET input stages for their picoampere gate currents.
- The loop-phase stability condition is the Barkhausen criterion of the oscillators in Communication Electronics: feedback and oscillation are one equation with opposite signs.

## Quick Check

1. A JFET has $I_{DSS} = 10$ mA and $V_P = -5$ V. Find $V_{GS}$ and $g_m$ at $I_D = 2.5$ mA.
2. Why is $R_{in}$ of a CS amplifier set by $R_G$ rather than by the transistor?
3. An amplifier with $A = 5000$ has $\beta = 0.02$. Find $A_f$, the desensitivity and the percentage change in $A_f$ if $A$ halves.
4. Which topology suits a photodiode current-to-voltage converter, and what happens to its input resistance?
5. State the condition under which a negative-feedback loop becomes an oscillator.

## Takeaway

- FETs follow a square law; their transconductance is lower than a BJT's but their gate current is negligible, giving megohm input resistance.
- The common-source stage has gain $-g_m R_D'$; the source follower is a near-unity buffer with $R_{out} \approx 1/g_m$.
- Negative feedback gives $A_f = A/(1 + A\beta) \approx 1/\beta$, trading gain for accuracy.
- The factor $1 + A\beta$ reduces gain sensitivity, distortion and output-stage noise and extends bandwidth, conserving the gain–bandwidth product.
- Topology sets the impedances: series mixing raises $R_{in}$, voltage sampling lowers $R_{out}$; excess loop phase lag causes oscillation.
