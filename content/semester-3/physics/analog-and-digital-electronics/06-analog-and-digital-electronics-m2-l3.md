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
lessonId: analog-and-digital-electronics-m2-l3
lessonName: Active Filters, the Instrumentation Amplifier and Practical Op-Amp Limits
lessonNumber: 6
moduleNumber: 2
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - analog-and-digital-electronics-m2-l1
  - analog-and-digital-electronics-m2-l2
learningObjectives:
  - Derive the transfer function of a first-order active low-pass filter and of the unity-gain Sallen-Key stage, and design a Butterworth response.
  - Derive the gain of the three-op-amp instrumentation amplifier and explain why it has high CMRR and high input resistance.
  - Quantify the effects of input offset voltage, bias current, gain-bandwidth product and slew rate on a real op-amp circuit.
concepts:
  - Active low-pass filter
  - Sallen-Key second-order stage
  - Butterworth response and Q factor
  - Instrumentation amplifier
  - Input offset voltage and bias current
  - Gain-bandwidth product
  - Slew rate and full-power bandwidth
tags:
  - physics
  - analog-and-digital-electronics
  - active-filters
  - instrumentation-amplifier
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Active Filters, the Instrumentation Amplifier and Practical Op-Amp Limits

## Overview

This lesson completes Module 2 by moving from idealised to working op-amp circuits. Frequency-dependent feedback networks turn the op-amp into an **active filter**, which shapes a signal's spectrum without inductors and without loading from the next stage. Three op-amps combine into the **instrumentation amplifier**, the standard front end for bridges, thermocouples and biomedical electrodes, which cures the weaknesses of the difference amplifier of Lesson m2-l1. Finally we relax the idealisations that Lesson m2-l1 promised to revisit: offset voltage, bias current, finite gain-bandwidth product and limited slew rate. These decide how much accuracy a sensor chain delivers before it reaches the converters of Module 3.

## Learning Path

- **What you should already know**: the golden rules and the difference amplifier (Lesson m2-l1); the RC low-pass response (Electricity and Magnetism m2-l3); the integrator (Lesson m2-l2).
- **What this lesson adds**: first- and second-order active low-pass filters and the Butterworth condition; the instrumentation amplifier; offset, bias current, gain-bandwidth product and slew rate.
- **What later lessons this will unlock**: the anti-aliasing filter and instrumentation amplifier ahead of the ADC in the thermometer chain of Lesson m3-l3; the filters and oscillators of Communication Electronics in Semester 4.

## Core Explanation

### First-order active filters

A passive RC low-pass has gain at most one and changes response under load. An op-amp fixes both. In an inverting amplifier replace $R_f$ by $R_f$ in parallel with $C_f$; then $Z_f = R_f/(1 + j\omega R_f C_f)$ and

$$H(j\omega) = -\frac{Z_f}{R_1} = -\frac{R_f}{R_1}\,\frac{1}{1 + j\omega R_f C_f}.$$

The pass-band gain is $-R_f/R_1$ and the corner is $f_c = 1/(2\pi R_f C_f)$, with 20 dB per decade roll-off above it. This is the integrator of Lesson m2-l2 with its DC-stabilising resistor, viewed as a filter, and it can drive any load. Interchanging resistors and capacitors gives a high-pass response.

### The Sallen-Key second-order stage

The **Sallen-Key** low-pass uses a unity-gain follower: $R_1$ connects the input to node A, $R_2$ connects A to the non-inverting input (node B), capacitor $C_2$ connects B to ground and capacitor $C_1$ connects A to the output. Because the follower makes $v_o = v_B$, the current through $R_2$ equals the current in $C_2$:

$$\frac{v_A - v_o}{R_2} = j\omega C_2 v_o \ \Rightarrow \ v_A = v_o\,(1 + j\omega R_2 C_2).$$

Kirchhoff's current law at node A states $(v_{in} - v_A)/R_1 = (v_A - v_o)/R_2 + j\omega C_1(v_A - v_o)$. Substituting $v_A - v_o = j\omega R_2 C_2 v_o$,

$$H(j\omega) = \frac{1}{1 + j\omega C_2(R_1 + R_2) - \omega^2 R_1 R_2 C_1 C_2}.$$

Compare with the standard form $1/[1 + j\omega/(Q\omega_0) - \omega^2/\omega_0^2]$:

$$\omega_0 = \frac{1}{\sqrt{R_1R_2C_1C_2}}, \qquad Q = \frac{\sqrt{R_1R_2C_1C_2}}{C_2(R_1+R_2)}.$$

For $R_1 = R_2 = R$ this becomes $Q = \tfrac12\sqrt{C_1/C_2}$. The magnitude is

$$|H|^2 = \frac{1}{(1 - \omega^2/\omega_0^2)^2 + \omega^2/(Q^2\omega_0^2)}.$$

For $Q = 1/\sqrt{2} = 0.7071$ the $\omega^2$ term in the denominator cancels and $|H|^2 = 1/[1 + (\omega/\omega_0)^4]$: the **Butterworth** (maximally flat) response, down 3 dB at $f_0$ and falling at 40 dB per decade. It requires $C_1 = 2C_2$ when $R_1 = R_2$.A larger $Q$ gives a peak at $f_0$ and ringing in the step response; a smaller $Q$ rolls off earlier. The code prints the magnitude in decibels: approximately $0$, $-0.3$, $-3.0$, $-12.3$ and $-40$ dB at 100, 500, 1000, 2000 and 10 000 Hz, a flat pass-band, a $-3$ dB corner at 1 kHz and a 40 dB per decade slope.

```python
import math
R, C2, C1 = 10e3, 11.25e-9, 22.5e-9            # Butterworth: C1 = 2*C2
def H(f):
    s = 2j*math.pi*f
    return 1/(1 + s*C2*(2*R) + s*s*R*R*C1*C2)
for f in (100, 500, 1000, 2000, 10000):
    print(f"{f:6d} Hz  {20*math.log10(abs(H(f))):7.2f} dB")
```

### The instrumentation amplifier

The difference amplifier has low, unequal input resistances and a gain set only by matched resistor pairs. The **three-op-amp instrumentation amplifier** adds a buffering input stage. Inputs $v_1$ and $v_2$ drive the non-inverting inputs of A1 and A2. A resistor $R_G$ joins the two inverting inputs, and a resistor $R_F$ runs from each output to its own inverting input. By rule 1 the inverting inputs sit at $v_1$ and $v_2$, so $R_G$ carries the current $(v_2 - v_1)/R_G$, which by rule 2 flows through both $R_F$. The difference of the two outputs is

$$v_{o2} - v_{o1} = \frac{v_2 - v_1}{R_G}\,(R_F + R_G + R_F) = \left(1 + \frac{2R_F}{R_G}\right)(v_2 - v_1).$$

A difference amplifier of gain $A_2 = R_4/R_3$ then removes the common level:

$$v_o = A_2\left(1 + \frac{2R_F}{R_G}\right)(v_2 - v_1).$$

Three properties follow. Gain is set by the single resistor $R_G$; input resistance is that of two non-inverting inputs, enormous and balanced; and a common-mode input $v_{cm}$ appears at both ends of $R_G$, so no current flows in it: the first stage has **common-mode gain of exactly 1** while its differential gain is $G_1 = 1 + 2R_F/R_G$. The first stage raises the differential signal without raising the common-mode signal, so the overall rejection is

$$\text{CMRR} \approx G_1\,\text{CMRR}_2.$$

Integrated versions have laser-trimmed resistors and reach 100 dB or more at high gain.

### Offset voltage and bias current

A real op-amp has an **input offset voltage** $V_{os}$ (about 2 mV for a 741), modelled as a small source in series with an input. It is amplified by the noise gain, so the output offset is $V_{os}(1 + R_f/R_1)$. The inputs also draw **bias currents** $I_B$ (about 80 nA for a bipolar 741, picoamperes for FET-input parts). In the inverting amplifier the current into the inverting node flows through $R_f$ and produces an output error $I_B R_f$. A resistor $R_c = R_1 \parallel R_f$ in series with the non-inverting input equalises the drops of the two bias currents, leaving only the **offset current** $I_{os} = |I_{B+} - I_{B-}|$ (about 20 nA for the 741). FET-input op-amps suit high-impedance photodiode and electrometer circuits.

### Gain-bandwidth product

Op-amps are internally compensated to act as a single-pole system, $A(s) = A_0/(1 + s/\omega_p)$, with $A_0 = 2\times 10^5$ and a pole at $f_p \approx 5$ Hz for the 741. Above $f_p$ the gain falls at 20 dB per decade, so gain times frequency is constant: $\text{GBW} = A_0 f_p = 10^6$ Hz. With resistive feedback $\beta$, the closed-loop gain is

$$A_f = \frac{A}{1 + A\beta} = \frac{A_0/(1 + A_0\beta)}{1 + s/[\omega_p(1 + A_0\beta)]},$$

whose low-frequency value is $1/\beta$ and whose bandwidth is $f_p(1 + A_0\beta) \approx A_0\beta f_p$, that is,

$$f_{-3\,\text{dB}} = \frac{\text{GBW}}{1/\beta} = \frac{\text{GBW}}{\text{noise gain}}.$$

This is the trade of Lesson m1-l3 in numbers: gain 100 on a 741 gives only about 10 kHz.

### Slew rate

Large signals face a second limit: the output can change only at a finite **slew rate** SR (0.5 V/µs for the 741). A sine wave $V_p\sin\omega t$ has a maximum slope $\omega V_p$, so it is undistorted only if $\omega V_p \le \text{SR}$. The highest frequency at which full amplitude is possible is the **full-power bandwidth**

$$f_{FP} = \frac{\text{SR}}{2\pi V_p}.$$

Beyond $f_{FP}$ the output is a triangle wave of slope SR. Slew limiting is non-linear and distorts waveforms, unlike the gain-bandwidth limit, which merely reduces amplitude.

## Key Ideas

- **First-order active low-pass**: $H = -(R_f/R_1)/(1 + j\omega R_f C_f)$ with $f_c = 1/(2\pi R_f C_f)$.
- **Sallen-Key (unity gain)**: $\omega_0 = 1/\sqrt{R_1R_2C_1C_2}$ and $Q = \sqrt{R_1R_2C_1C_2}/[C_2(R_1+R_2)]$; Butterworth is $Q = 0.7071$, which needs $C_1 = 2C_2$ for equal resistors.
- **Instrumentation amplifier**: $v_o = A_2(1 + 2R_F/R_G)(v_2 - v_1)$; first-stage common-mode gain is 1, so CMRR $\approx G_1\,\text{CMRR}_2$.
- **Offset and bias**: output offset $= V_{os}(1 + R_f/R_1)$; bias error $I_BR_f$, reduced to $I_{os}R_f$ by $R_c = R_1\parallel R_f$.
- **GBW**: closed-loop bandwidth $=$ GBW/noise gain.
- **Slew rate**: $f_{FP} = \text{SR}/(2\pi V_p)$; slewing distorts large signals.

## Worked Examples

### Example 1 — A 1 kHz Butterworth low-pass filter

Design a unity-gain Sallen-Key low-pass with $f_0 = 1$ kHz and a Butterworth response, using $R_1 = R_2 = 10$ kΩ. Find the standard-value result for $C_1 = 22$ nF and $C_2 = 10$ nF.

**Solution.** Butterworth needs $Q = 0.7071 = \tfrac12\sqrt{C_1/C_2}$, so $C_1 = 2C_2$. Then $\omega_0 = 1/(R\sqrt{C_1C_2}) = 1/(R\sqrt{2}\,C_2)$, giving

$$C_2 = \frac{1}{2\pi f_0 R\sqrt{2}} = \frac{1}{2\pi \times 1000 \times 10^4 \times 1.4142} = 11.25\ \text{nF}, \qquad C_1 = 22.5\ \text{nF}.$$

With the standard values 22 nF and 10 nF, $\sqrt{C_1C_2} = 14.83$ nF, so $f_0 = 1/(2\pi \times 10^4 \times 14.83\times10^{-9}) = 1073$ Hz and $Q = \tfrac12\sqrt{2.2} = 0.742$, slightly above the ideal 0.707, which produces a peak of only about 0.03 dB. At $2f_0$ the attenuation is $-10\log_{10}17 = -12.3$ dB.

### Example 2 — An instrumentation amplifier for a strain-gauge bridge

A bridge gives a full-scale differential output of 10 mV on a common-mode level of 2.5 V. Build an instrumentation amplifier with $R_F = 10$ kΩ, $R_G = 100$ Ω and a unity-gain second stage with 0.1% resistors. Find the output at full scale and the common-mode error.

**Solution.** The first-stage gain is $G_1 = 1 + 2\times 10\,000/100 = 201$, so $v_o = 201 \times 10\ \text{mV} = 2.01$ V. The second stage has $A_2 = 1$ and mismatch $\epsilon = 0.001$, so $\text{CMRR}_2 = (1 + 1)/0.001 = 2000$ and the overall CMRR is $201 \times 2000 = 4.02\times10^5$, or $20\log_{10}(4.02\times10^5) = 112$ dB. The common-mode gain is $A_{cm} = 201/(4.02\times10^5) = 5\times 10^{-4}$, so the 2.5 V common-mode level leaks $2.5 \times 5\times10^{-4} = 1.25$ mV to the output. Referred to the input this is $1.25\ \text{mV}/201 = 6.2\ \mu$V, or 0.06% of the 10 mV signal. The second stage alone has CMRR 66 dB; the first-stage gain adds $20\log_{10}201 = 46$ dB.

### Example 3 — Limits of a 741 amplifier of gain 100

A 741 is wired as an inverting amplifier with $R_1 = 1$ kΩ and $R_f = 100$ kΩ ($V_{os} = 2$ mV, $I_B = 80$ nA, $I_{os} = 20$ nA, GBW = 1 MHz, SR = 0.5 V/µs). Find the output offset, the bias error, the bandwidth and the largest 5 kHz and 8 kHz sine amplitudes.

**Solution.** The noise gain is $1 + 100 = 101$. The offset gives $2\ \text{mV}\times 101 = 202$ mV at the output. The bias current gives $80\ \text{nA}\times 100\ \text{k}\Omega = 8$ mV; with $R_c = 1\parallel 100 = 0.99$ kΩ this falls to $I_{os}R_f = 20\ \text{nA}\times100\ \text{k}\Omega = 2$ mV. The bandwidth is $10^6/101 = 9.9$ kHz. The slew limit allows an amplitude $V_p = \text{SR}/(2\pi f)$, equal to $0.5\times 10^6/(2\pi\times5000) = 15.9$ V at 5 kHz, which exceeds the $\pm 15$ V supply, so there the rails are the limit; at 8 kHz it is $0.5\times10^6/(2\pi\times 8000) = 9.95$ V. A 10 V-peak output is therefore slew-limited above about 8 kHz. The gain limit bites first: at 8 kHz the closed-loop gain is already $1/\sqrt{1 + (8/9.9)^2} = 0.78$ of its low-frequency value. The offset needs trimming.

## Common Misconceptions

- **"An active filter has unity gain at the corner frequency."** The Butterworth stage is $-3$ dB at $f_0$; only $Q > 0.707$ peaks.
- **"Higher $Q$ means a better filter."** It sharpens the transition at the price of peaking and ringing.
- **"The instrumentation amplifier simply amplifies more."** Its point is high, balanced input resistance and common-mode rejection that improves with gain.
- **"Bias compensation removes all bias error."** The offset current $I_{os}$ remains.
- **"A wide-bandwidth op-amp needs no slew-rate check."** GBW governs small signals, slew rate large ones.

## Connections

- The filter response is the damped oscillator of Differential Equations and the driven RLC circuit of Electricity and Magnetism; $Q$ and $\omega_0$ are the same quantities.
- Anti-aliasing before sampling is the Nyquist condition of Lesson m3-l3: a Sallen-Key stage ahead of the ADC removes frequencies the converter cannot represent.
- Bridge measurements in the laboratory courses depend on the common-mode rejection of the instrumentation amplifier.
- CCD and photodiode readout in Astrophysics uses low-bias-current FET-input amplifiers and filters to push the noise floor to the shot-noise limit.
- Gain-bandwidth trade-offs recur in Communication Electronics, where amplifier and filter chains use the same finite-bandwidth devices.

## Quick Check

1. Derive the corner frequency and pass-band gain of an inverting amplifier with $R_1 = 10$ kΩ, $R_f = 47$ kΩ and $C_f = 3.3$ nF.
2. Find $C_1$ for a Butterworth response if $R_1 = R_2 = 22$ kΩ and $C_2 = 4.7$ nF.
3. Why is the common-mode gain of the first stage of an instrumentation amplifier exactly unity?
4. A 741 is used as a non-inverting amplifier of gain 50. Estimate the bandwidth and the full-power bandwidth for a 5 V peak output.
5. Which bias-current error does a compensating resistor $R_c$ remove, and which remains?

## Takeaway

- Capacitors in the feedback network make active filters; the Sallen-Key stage has $\omega_0 = 1/\sqrt{R_1R_2C_1C_2}$ and is Butterworth for $Q = 0.7071$.
- The instrumentation amplifier has gain $A_2(1 + 2R_F/R_G)$, balanced high input resistance and CMRR multiplied by the first-stage gain.
- Offset voltage is amplified by the noise gain; bias current produces $I_BR_f$, reduced to $I_{os}R_f$ by a compensating resistor.
- The closed-loop bandwidth is GBW divided by the noise gain.
- Slew rate limits large signals to $f_{FP} = \text{SR}/(2\pi V_p)$ and distorts them beyond it.
