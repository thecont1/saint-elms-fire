***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: analog-and-digital-electronics
courseName: Analog and Digital Electronics
moduleId: analog-and-digital-electronics-module-2
moduleName: Operational Amplifiers
lessonId: analog-and-digital-electronics-m2-l2
lessonName: Integrator, Differentiator, Comparators and the Schmitt Trigger
lessonNumber: 5
moduleNumber: 2
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - analog-and-digital-electronics-m2-l1
  - electricity-and-magnetism-m2-l3
learningObjectives:
  - Derive the output of the ideal integrator and differentiator from the golden rules and explain the practical modifications that make them stable.
  - Describe the open-loop comparator and the effect of noise on its output.
  - Derive the switching thresholds and hysteresis of the inverting Schmitt trigger and the period of the op-amp relaxation oscillator.
concepts:
  - Op-amp integrator
  - Op-amp differentiator
  - Zero-crossing comparator
  - Positive feedback
  - Schmitt trigger
  - Hysteresis
  - Relaxation oscillator
tags:
  - physics
  - analog-and-digital-electronics
  - op-amp-circuits
  - waveform-generation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# Integrator, Differentiator, Comparators and the Schmitt Trigger

## Overview

Lesson m2-l1 used resistors only, so every circuit was memoryless. Replace the feedback resistor by a capacitor and the circuit remembers: the output becomes the running integral of the input, and swapping the two components gives the derivative. Remove the negative feedback altogether and the golden rules fail in an instructive way: the op-amp becomes a **comparator**, a one-bit analogue-to-digital converter with a two-level output. Adding a little positive feedback gives the **Schmitt trigger**, which has memory of a different kind, hysteresis, and cleans up noisy signals; with an RC network it becomes a waveform generator. The comparator is also the bridge to Module 3, because its two-level output is the first logic signal in the signal chain.

## Learning Path

- **What you should already know**: the golden rules and virtual ground (Lesson m2-l1); the RC charging law and the time constant (Electricity and Magnetism m2-l3); feedback gain $A_f = A/(1 + A\beta)$ (Lesson m1-l3).
- **What this lesson adds**: the integrator and differentiator with their frequency responses and practical corrections; the comparator; positive feedback and hysteresis; the Schmitt trigger thresholds; the relaxation oscillator.
- **What later lessons this will unlock**: the filters and instrumentation amplifier of Lesson m2-l3 reuse the capacitor-in-feedback idea; the dual-slope ADC of Lesson m3-l3 is an integrator plus a comparator; the flip-flops of Lesson m3-l2 are the digital descendants of positive feedback.

## Core Explanation

### The integrator

Take the inverting amplifier and replace $R_f$ by a capacitor $C$. The inverting input is a virtual ground, so the input current is $i = v_{in}/R$ and, by rule 2, all of it charges $C$. The capacitor voltage is $q/C$, and the output sits at $0 - v_C$:

$$v_o(t) = -\frac{1}{C}\int_0^t \frac{v_{in}}{R}\,dt' + v_o(0) = -\frac{1}{RC}\int_0^t v_{in}\,dt' + v_o(0).$$

A constant input produces a linear ramp of slope $-v_{in}/RC$. Unlike a passive RC low-pass, which integrates only while $v_C \ll v_{in}$, the virtual ground holds the resistor voltage fixed, so the charging current is constant and the integral exact. In the frequency domain the gain is $-Z_f/Z_1$ with $Z_f = 1/j\omega C$:

$$H(j\omega) = -\frac{1}{j\omega RC}, \qquad |H| = \frac{1}{\omega RC}.$$

The magnitude falls at 20 dB per decade and equals unity at $f_u = 1/(2\pi RC)$; the phase of $H$ is $+90^\circ$, the sinusoidal face of integration.

The ideal integrator has infinite gain at DC. Any input offset voltage or bias current (Lesson m2-l3) acts as a small constant input and integrates until the output reaches a rail. The standard cure is a resistor $R_f$ across $C$, which limits the DC gain to $-R_f/R$ and gives a low-pass response with corner $f_c = 1/(2\pi R_f C)$.

### The differentiator

Swap the positions: capacitor $C$ at the input, resistor $R$ in feedback. The input current is $C\,dv_{in}/dt$ and it flows through $R$:

$$v_o = -RC\,\frac{dv_{in}}{dt}, \qquad H(j\omega) = -j\omega RC.$$

The gain rises at 20 dB per decade, so high-frequency noise is amplified without limit, and the capacitor together with the op-amp's own phase lag can make the circuit oscillate. The practical differentiator adds a series resistor $R_s$ with $C$ and a small capacitor $C_f$ across $R$. Differentiation then holds only below $f_1 = 1/(2\pi R_s C)$, above which the gain flattens at $-R/R_s$ and later rolls off from $1/(2\pi R C_f)$. A sine wave $V_m\sin\omega t$ produces $-\omega RC\,V_m\cos\omega t$, a cosine of amplitude proportional to frequency. Differentiators are therefore used sparingly, never on noisy data.

### The comparator

Remove the feedback path, apply $v_{in}$ to the non-inverting input and a reference $V_{ref}$ to the inverting input. With $A_{OL} \sim 10^5$, a difference of only 0.1 mV drives the output to a rail:

$$v_o = \begin{cases} +V_{sat} & v_{in} > V_{ref} \\ -V_{sat} & v_{in} < V_{ref}. \end{cases}$$

With $V_{ref} = 0$ the circuit is a **zero-crossing detector** that converts a sine wave into a square wave. Dedicated comparator ICs switch in tens of nanoseconds, against the microseconds an op-amp needs to recover from saturation, and have logic-compatible outputs.

If $v_{in}$ hovers near $V_{ref}$, noise of a few millivolts makes the output flip many times, a **chatter** that a digital counter would count as many events. The remedy is hysteresis.

### Positive feedback and the Schmitt trigger

Feed a fraction of the output back to the **non-inverting** input through a divider: $R_1$ from output to the $+$ input and $R_2$ from the $+$ input to ground, with $v_{in}$ on the inverting input. The fed-back fraction is

$$\beta = \frac{R_2}{R_1 + R_2}.$$

Because the feedback is positive, the golden rules do not apply and the output is always at $+V_{sat}$ or $-V_{sat}$. The voltage at the $+$ input depends on that state:

$$V_{UT} = +\beta V_{sat} \ (\text{output high}), \qquad V_{LT} = -\beta V_{sat} \ (\text{output low}).$$

Suppose the output is high. It stays high until $v_{in}$ rises above $V_{UT}$; then the output flips low, the threshold drops to $V_{LT}$, and the flip is reinforced, since the lower reference makes $v_{in} > V_{LT}$ even more true. The output returns high only when $v_{in}$ falls below $V_{LT}$. The two thresholds differ by the **hysteresis width**

$$V_H = V_{UT} - V_{LT} = 2\beta V_{sat}.$$

The input–output characteristic is a rectangular loop. Noise smaller than $V_H$ cannot cause chatter, because after a transition the signal must travel the full width of the loop before the output can flip back. If the bottom of $R_2$ is connected to a reference $V_R$ instead of ground, both thresholds shift by $(1-\beta)V_R$ and the loop is centred on that level; for $R_1 = R_2$ this is simply $V_R/2$.

Positive feedback gives two stable states and a regenerative transition, a **bistable**: the same mechanism that stores a bit in the flip-flops of Lesson m3-l2. The code passes a noisy sine wave through a bare comparator and a Schmitt trigger and counts output edges, showing many spurious edges from the comparator and exactly two per cycle from the Schmitt trigger.

```python
import math, random
random.seed(1)
vin = [math.sin(2*math.pi*k/200) + random.gauss(0, 0.05) for k in range(1000)]  # 5 cycles
bare = [1 if v > 0 else 0 for v in vin]
state, schmitt = 0, []
for v in vin:                                   # thresholds +/-0.2 V
    if state == 0 and v > 0.2:  state = 1
    if state == 1 and v < -0.2: state = 0
    schmitt.append(state)
edges = lambda s: sum(a != b for a, b in zip(s, s[1:]))
print("comparator edges:", edges(bare), " Schmitt edges:", edges(schmitt))
```

### The relaxation oscillator

Connect the Schmitt trigger's inverting input to a capacitor $C$ and charge it from the output through a resistor $R$, with no external input. If the output is high, $C$ charges toward $+V_{sat}$; when $v_C$ reaches $+\beta V_{sat}$ the output flips low, the threshold becomes $-\beta V_{sat}$, and $C$ discharges toward $-V_{sat}$ until $v_C$ reaches $-\beta V_{sat}$, when the output flips high again. During the high half-cycle, starting at $-\beta V_{sat}$,

$$v_C(t) = V_{sat} - (1 + \beta)V_{sat}\,e^{-t/RC}.$$

Setting $v_C = \beta V_{sat}$ gives $e^{-t/RC} = (1-\beta)/(1+\beta)$, so the half-period is $RC\ln[(1+\beta)/(1-\beta)]$ and the period is

$$T = 2RC\ln\frac{1+\beta}{1-\beta}.$$

The frequency is independent of $V_{sat}$, which is why the circuit makes a steady square-wave source from an unregulated supply. For $R_1 = R_2$, $\beta = \tfrac12$ and $T = 2RC\ln 3 \approx 2.2\,RC$.

## Key Ideas

- **Integrator**: $v_o = -\frac{1}{RC}\int v_{in}\,dt$; gain $-1/(j\omega RC)$; a parallel $R_f$ is needed to stop offset-driven drift.
- **Differentiator**: $v_o = -RC\,dv_{in}/dt$; gain rises with frequency, so a series $R_s$ and a parallel $C_f$ limit noise.
- **Comparator**: open-loop op-amp whose output is $\pm V_{sat}$ according to the sign of $v_+ - v_-$; the golden rules do not apply.
- **Schmitt trigger**: positive feedback fraction $\beta = R_2/(R_1+R_2)$ gives thresholds $\pm\beta V_{sat}$ and hysteresis $2\beta V_{sat}$.
- **Hysteresis**: a state-dependent threshold that prevents chatter and is the essence of bistable memory.
- **Relaxation oscillator**: $T = 2RC\ln[(1+\beta)/(1-\beta)]$, independent of the supply.

## Worked Examples

### Example 1 — Integrating a square wave

An integrator has $R = 10$ kΩ and $C = 10$ nF. Its input is a symmetric square wave of $\pm 1$ V and frequency 1 kHz. Find the output waveform and its peak-to-peak amplitude.

**Solution.** The time constant is $RC = 10^4 \times 10^{-8} = 10^{-4}$ s. In each half-period of 0.5 ms the input is constant, so the output ramps with slope $\mp v_{in}/RC = \mp 10^4$ V/s $= \mp 10$ V/ms. Over 0.5 ms the output changes by 5 V, falling during the $+1$ V half-period and rising during the $-1$ V half-period. The output is a triangle wave of 5 V peak-to-peak, centred on zero if the circuit is DC-stable ($\pm 2.5$ V). The unity-gain frequency is $f_u = 1/(2\pi RC) = 1.59$ kHz.

### Example 2 — Designing a noise-immune Schmitt trigger

A comparator output of $\pm 13$ V must switch a counter from a signal carrying 0.3 V peak-to-peak of noise, with symmetric thresholds $\pm 0.5$ V. Choose $R_1$ and $R_2$.

**Solution.** The hysteresis is $2\beta V_{sat} = 1.0$ V, which exceeds the 0.3 V noise, so we need $\beta = 0.5/13 = 0.03846$. From $\beta = R_2/(R_1 + R_2)$ we get $R_1/R_2 = 1/\beta - 1 = 25$. Choose $R_2 = 2$ kΩ and $R_1 = 50$ kΩ, giving $\beta = 2/52 = 0.03846$ and

$$V_{UT} = 0.03846 \times 13 = +0.50\ \text{V}, \qquad V_{LT} = -0.50\ \text{V}.$$

A signal must therefore swing by at least 1 V between transitions, more than three times the noise, so each real crossing produces exactly one output edge. The price is a small timing delay of $\arcsin(0.5/V_m)/\omega$ for a signal of amplitude $V_m$.

### Example 3 — A relaxation oscillator

In the relaxation oscillator take $R_1 = R_2 = 10$ kΩ, $R = 10$ kΩ, $C = 0.1$ µF and $V_{sat} = 13$ V. Find the frequency and the voltage swing across the capacitor.

**Solution.** Here $\beta = 10/(10+10) = 0.5$, so the capacitor oscillates between $\pm\beta V_{sat} = \pm 6.5$ V, a swing of 13 V peak-to-peak. The time constant is $RC = 10^4 \times 10^{-7} = 1$ ms. Then

$$T = 2RC\ln 3 = 2 \times 1\ \text{ms} \times 1.0986 = 2.197\ \text{ms}, \qquad f = \frac{1}{T} = 455\ \text{Hz}.$$

The output is a $\pm 13$ V square wave of 50% duty cycle and the capacitor voltage is an exponential triangle. Changing $V_{sat}$ (for example, by drooping supplies) leaves $f$ unchanged, while doubling $C$ halves it.

## Common Misconceptions

- **"The integrator output is always $-\frac{1}{RC}\int v_{in}\,dt$."** Offset and bias currents integrate too, and without a DC path or reset switch the output creeps into saturation.
- **"A differentiator is just an integrator in reverse, so it is equally well behaved."** Integration smooths noise; differentiation amplifies it in proportion to frequency.
- **"A comparator is an amplifier with a lot of gain."** It is a decision circuit whose output carries one bit.
- **"Hysteresis makes the Schmitt trigger slow or imprecise."** The hysteresis is a designed amount, and positive feedback makes the transition faster.
- **"The golden rules hold for the Schmitt trigger because there is a feedback resistor."** The feedback goes to the non-inverting input and is positive; $v_+ \ne v_-$ in both states.

## Connections

- Two integrators and a summing amplifier solve the oscillator equation $\ddot{y} + \omega_0^2 y = 0$ in real time, the analogue computing that Calculus using Python does numerically.
- The charge-balance idea in the dual-slope converter of Lesson m3-l3 is exactly the integrator ramp of Example 1, run up and then down.
- Hysteresis appears in magnetic materials (the B–H loop in Solid State Physics) and first-order phase transitions: a state-dependent threshold is memory.
- Photon-counting photometers pass amplifier output through a discriminator, a Schmitt trigger with its threshold above the noise.
- The relaxation oscillator is the prototype of every astable circuit and, with a quartz crystal replacing $RC$, of the clock that drives the flip-flops of Lesson m3-l2.

## Quick Check

1. Derive the output of the inverting integrator from the golden rules, and state the unity-gain frequency.
2. Why does an integrator saturate with its input grounded, and how does a resistor across $C$ prevent it?
3. A Schmitt trigger with $V_{sat} = \pm 12$ V has $R_1 = 22$ kΩ and $R_2 = 2.2$ kΩ. Find $V_{UT}$, $V_{LT}$ and $V_H$.
4. A zero-crossing detector is fed a sine wave with 20 mV of added noise. Explain the problem, and choose a hysteresis that solves it.
5. Find the oscillation frequency if $\beta = 0.1$ in the relaxation oscillator with $RC = 1$ ms.

## Takeaway

- A capacitor in the feedback path gives the integrator, $v_o = -\frac{1}{RC}\int v_{in}\,dt$; a capacitor at the input gives the differentiator, $v_o = -RC\,dv_{in}/dt$.
- Practical integrators need a parallel resistor to stop DC drift, and practical differentiators need a series resistor and parallel capacitor to limit noise.
- With no negative feedback the op-amp is a comparator: its output is $\pm V_{sat}$ according to the sign of the input difference.
- Positive feedback gives the Schmitt trigger thresholds $\pm\beta V_{sat}$ and hysteresis $2\beta V_{sat}$, which removes chatter.
- An RC network around a Schmitt trigger is a relaxation oscillator with period $2RC\ln[(1+\beta)/(1-\beta)]$.
