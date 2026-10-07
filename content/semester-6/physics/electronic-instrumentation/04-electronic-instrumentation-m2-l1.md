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
lessonId: electronic-instrumentation-m2-l1
lessonName: The Wheatstone Bridge and AC Bridges
lessonNumber: 4
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - electronic-instrumentation-m1-l3
  - basic-electronics-m1-l1
  - basic-electronics-m1-l2
learningObjectives:
  - Derive the balance condition and the output voltage of the Wheatstone bridge for one, two and four active arms.
  - Quantify the non-linearity of the quarter bridge and the benefit of half- and full-bridge configurations.
  - Explain temperature compensation with a dummy gauge and lead-resistance cancellation in three-wire sensors.
  - Derive the balance equations of the Maxwell AC bridge and apply them to an inductor.
concepts:
  - Wheatstone bridge balance
  - Bridge sensitivity
  - Quarter, half and full bridge
  - Bridge non-linearity
  - Dummy-gauge compensation
  - Three-wire connection
  - Maxwell bridge
tags:
  - physics
  - electronic-instrumentation
  - wheatstone-bridge
  - ac-bridge
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# The Wheatstone Bridge and AC Bridges

## Overview

The resistive sensors of Lessons m1-l2 and m1-l3 change by tiny fractions: a strain gauge by $3.5 \times 10^{-4}$ of its resistance, a Pt100 by $0.385\,\Omega$ per kelvin on $100\,\Omega$. Measuring such a change directly would demand a meter resolving one part in $10^{6}$. The **Wheatstone bridge** compares the sensor with three other resistors and presents only the *difference*, centred on zero, as a voltage proportional to the excitation. It cancels disturbances that affect all four arms equally and, with several active arms, multiplies the sensitivity. Replacing resistors by impedances gives **AC bridges** that measure inductance, capacitance and loss. This lesson derives the balance condition, the output of the quarter, half and full bridge, and the cancellation of temperature and lead resistance, and ends with the Maxwell bridge.

## Learning Path

- **What you should already know**: strain gauges and Pt100 sensors (Lessons m1-l2 and m1-l3); series and parallel resistors and the voltage divider (Basic Electronics, Lesson m1-l1); capacitor and inductor impedance (Basic Electronics, Lesson m1-l2).
- **What this lesson adds**: the bridge balance condition and output; non-linearity and bridge configurations; compensation of temperature and lead resistance; the Maxwell AC bridge.
- **What later lessons this will unlock**: the instrumentation amplifier that reads the bridge output (Lesson m2-l2); shielding and lock-in detection of AC bridges (Lesson m2-l3); ratiometric conversion by an ADC (Lesson m3-l1).

## Core Explanation

### Balance condition and output voltage

Four resistances form two voltage dividers across the excitation $V_s$. Let $R_1$ and $R_2$ be in series on the left, with $V_a$ taken at their junction across $R_2$, and $R_3$, $R_4$ on the right, with $V_b$ across $R_4$:

$$V_a = V_s\,\frac{R_2}{R_1 + R_2},\qquad V_b = V_s\,\frac{R_4}{R_3 + R_4},\qquad V_o = V_b - V_a.$$

The bridge is **balanced** when $V_o = 0$, that is when $R_2/(R_1+R_2) = R_4/(R_3+R_4)$. Cross-multiplying, $R_2R_3 + R_2R_4 = R_1R_4 + R_2R_4$, so $R_2R_3 = R_1R_4$, or

$$\frac{R_1}{R_2} = \frac{R_3}{R_4}.$$

The balance depends only on the *ratio* of resistances, not on $V_s$. The original null method adjusted one resistor to bring $V_o$ to zero and read the unknown from the ratio, so that the accuracy depends on the resistors and not on the detector or supply. Modern instruments instead use the bridge in **deflection mode**, balanced at the rest value of the measurand, and read $V_o$.

### Sensitivity: quarter, half and full bridge

Take all four arms equal to $R$ at rest and let $x = \Delta R/R$. In a **quarter bridge** only $R_4 = R(1 + x)$ is active:

$$V_o = V_s\left[\frac{R(1+x)}{R(2 + x)} - \frac{1}{2}\right] = \frac{V_s}{4}\,\frac{x}{1 + x/2}.$$

For small $x$ the sensitivity is $V_s/4$ per unit $x$, with a correction $1/(1 + x/2) \approx 1 - x/2$, so the relative non-linearity is $x/2$. This is negligible for a strain gauge ($x \sim 10^{-3}$) but large for a Pt100 where $x$ reaches $0.38$ at $100\,^\circ$C.

In a **half bridge** two elements in the same divider change oppositely, $R_3 = R(1 - x)$ and $R_4 = R(1 + x)$; the divider sum is constant and

$$V_o = V_s\left[\frac{R(1+x)}{2R} - \frac12\right] = \frac{V_s}{2}\,x,$$

exactly linear. In a **full bridge**, $R_1$ and $R_4$ increase while $R_2$ and $R_3$ decrease, so $V_a = V_s(1-x)/2$, $V_b = V_s(1+x)/2$ and

$$V_o = V_s\,x.$$

The sensitivities are therefore $V_s/4$, $V_s/2$ and $V_s$ per unit $x$, in the ratio $1:2:4$, and the half and full bridges are linear. A cantilever supplies exactly the opposite strains needed: gauges on the top surface are stretched while those on the bottom are compressed. Since $V_o \propto V_s$, a reading proportional to the excitation can be made **ratiometric** by using $V_s$ as the ADC reference, which cancels drift of the supply (Lesson m3-l1). The excitation is limited by self-heating of the gauges, typically to $2$ to $10$ V.

### Temperature compensation and lead resistance

If all four arms are the same material at the same temperature, a temperature change multiplies every resistance by the same factor and the ratios in the balance condition are unchanged. Compensation relies on this. In a quarter bridge a **dummy gauge**, mounted on an unstrained piece of the same material, replaces $R_3$. With a thermal fractional change $x_T$ in both gauges and strain signal $x$ in the active one,

$$V_o = V_s\left[\frac{1 + x_T + x}{2(1 + x_T) + x} - \frac12\right] = \frac{V_s}{2}\,\frac{x}{2(1+x_T) + x},$$

so $x_T$ reduces the output only through the factor $1/(1 + x_T)$, negligible compared with the uncompensated additive error of $V_s x_T/4$. In half and full bridges the gauges of opposite sign cancel temperature inherently.

For a remote Pt100 the lead resistance $r$ adds to the sensor. In the **three-wire** connection the sensor is placed in one arm with one lead in series, and a second lead of equal resistance is placed in the adjacent arm; the third lead carries the sense current to the detector, which draws none. Balancing $R_t + r$ against $R_3 + r$ cancels $r$ at balance when $R_1 = R_2$ (Lesson m1-l2 gave the two-wire error of $2.6$ K per ohm).

### Bridge output impedance and loading

Seen from the output, the equal-arm bridge is a Thévenin source of resistance $R_{\text{th}} = (R_1\parallel R_2) + (R_3\parallel R_4) = R/2 + R/2 = R$, so a load $R_L$ reduces the voltage by $R_L/(R_L + R)$. The following amplifier must have an input resistance much greater than $R$, and a **differential** input, because neither output node is grounded: each sits at $V_s/2$, a common-mode voltage far larger than the signal. This is the reason for the instrumentation amplifier in Lesson m2-l2.

The code below plots the three bridge outputs; the quarter-bridge curve bends below the straight lines of the half and full bridges at large $x$.

```python
import numpy as np, matplotlib.pyplot as plt
x = np.linspace(0, 0.4, 100)
plt.plot(x, 0.25 * x / (1 + x / 2), label="quarter")   # Vo/Vs
plt.plot(x, 0.5 * x, label="half"); plt.plot(x, x, label="full")
plt.legend(); plt.xlabel("dR/R"); plt.ylabel("Vo/Vs"); plt.show()
```

### AC bridges and the Maxwell bridge

Replacing the resistors by impedances $Z_1, \ldots, Z_4$, the bridge is balanced when $V_o = 0$ for the complex impedances, that is when the products of opposite arms are equal, $Z_1Z_4 = Z_2Z_3$. The complex equation gives *two* real equations (magnitude and phase, or real and imaginary parts), so two adjustable components are needed. AC excitation is also used to avoid thermal EMFs and amplifier drift, and for reactive sensors such as the differential capacitor of Lesson m1-l3.

The **Maxwell bridge** measures an inductor $(L_x, R_x)$ against a capacitor. Place $Z_x = R_x + j\omega L_x$ opposite the arm $Z_A = R_1 \parallel C_1 = R_1/(1 + j\omega R_1C_1)$, with resistors $R_2$ and $R_3$ as the other opposite pair. Balance requires $Z_x Z_A = R_2R_3$, hence

$$R_x + j\omega L_x = \frac{R_2R_3}{R_1}\,(1 + j\omega R_1C_1).$$

Equating real and imaginary parts,

$$R_x = \frac{R_2R_3}{R_1},\qquad L_x = R_2R_3C_1.$$

Neither result contains $\omega$, so the balance is independent of frequency and the two adjustments, $R_1$ and $R_2$ or $C_1$, do not interact in a simple way. The quality factor of the inductor is $Q = \omega L_x/R_x = \omega R_1C_1$. The bridge suits coils with $Q < 10$; a high-$Q$ coil needs an impractically large $R_1$.

## Key Ideas

- **Balance**: $R_1/R_2 = R_3/R_4$, independent of the excitation.
- **Output**: $V_s/4$, $V_s/2$ and $V_s$ per unit $\Delta R/R$ for the quarter, half and full bridge; the last two are exactly linear.
- **Quarter-bridge non-linearity** is $x/2$ in relative terms, harmless for strain gauges and severe for a Pt100.
- **Temperature compensation** uses a dummy gauge or opposite-sign gauges; **lead resistance** is cancelled by the three-wire connection.
- The bridge output is **differential** with a large common-mode voltage $V_s/2$.
- **Maxwell bridge**: $R_x = R_2R_3/R_1$ and $L_x = R_2R_3C_1$, independent of frequency.

## Worked Examples

### Example 1 — Strain-gauge bridge outputs

The cantilever of Lesson m1-l3 gives $x = GF\,\varepsilon = 2.10 \times 167 \times 10^{-6} = 3.5 \times 10^{-4}$ on $350\,\Omega$ gauges. Find the output for the three configurations at $V_s = 5.00$ V, and the current drawn.

**Solution.** The quarter bridge gives $V_o = \tfrac14 \times 5.00 \times 3.5 \times 10^{-4}/(1 + 1.75 \times 10^{-4}) = 0.4374$ mV; the half bridge gives $\tfrac12 \times 5.00 \times 3.5 \times 10^{-4} = 0.875$ mV, and the full bridge $1.75$ mV. The non-linearity of the quarter bridge is $x/2 = 0.018\%$. The bridge resistance seen by the supply is $350\,\Omega$ (two $700\,\Omega$ branches in parallel), so the current is $5.00/350 = 14.3$ mA. A signal of $0.44$ mV, riding on a common-mode level of $2.5$ V, is why the amplifier of Lesson m2-l2 is needed.

### Example 2 — Pt1000 quarter bridge

A Pt1000 ($R_0 = 1000\,\Omega$) is in one arm of a bridge with three $1.000$ k$\Omega$ resistors and $V_s = 1.000$ V. At $100\,^\circ$C the sensor is $1385.1\,\Omega$. Find $V_o$, compare with the linear formula, and find the self-heating error for $0.4$ K/mW.

**Solution.** Exactly,

$$V_o = 1.000\left[\frac{1385.1}{2385.1} - \frac12\right] = 0.58073 - 0.50000 = 80.73\ \text{mV}.$$

With $x = 0.3851$ the linear formula $V_s x/4 = 96.28$ mV overstates the output by $15.5$ mV ($19\%$), as the factor $1/(1 + x/2) = 0.839$ predicts. The current is $1.000/2385.1 = 0.419$ mA and the dissipation in the sensor is $(0.419 \times 10^{-3})^2 \times 1385.1 = 0.243$ mW, a self-heating error of $0.097$ K. The non-linearity is removed by calibration or software (Lesson m3-l3), not by the bridge.

### Example 3 — Maxwell bridge balance

A Maxwell bridge is balanced with $R_1 = 10.0$ k$\Omega$, $C_1 = 0.100\,\mu$F, $R_2 = 1.00$ k$\Omega$ and $R_3 = 5.00$ k$\Omega$ at $1.00$ kHz. Find $L_x$, $R_x$ and $Q$.

**Solution.** $R_x = R_2R_3/R_1 = (1.00 \times 10^{3})(5.00 \times 10^{3})/(10.0 \times 10^{3}) = 500\,\Omega$ and $L_x = R_2R_3C_1 = (5.00 \times 10^{6})(1.00 \times 10^{-7}) = 0.500$ H. The quality factor is

$$Q = \omega R_1C_1 = 2\pi \times 1000 \times 10^{4} \times 10^{-7} = 6.28,$$

which agrees with $\omega L_x/R_x = 6283 \times 0.500/500 = 6.28$. The result does not depend on the frequency, so a small drift in the oscillator does not shift the null.

## Common Misconceptions

- **"Balancing a bridge needs a calibrated detector."** In the null method only the zero indication matters; the accuracy comes from the resistor ratio.
- **"The output of any bridge is linear in $\Delta R/R$."** Only the half and full bridges with opposite changes are exactly linear; the quarter bridge is non-linear by $x/2$.
- **"A dummy gauge doubles the sensitivity."** It does not strain, so it cancels temperature but adds nothing to the signal; two *active* gauges double it.
- **"The output is small, so a single-ended amplifier will do."** Each output node sits near $V_s/2$; only the *difference* is small, which demands a differential amplifier with high CMRR.
- **"The balance of an AC bridge needs one adjustment."** The complex balance equation fixes both magnitude and phase, so two independent components must be adjusted.

## Connections

- The voltage divider and Kirchhoff analysis of Electricity and Magnetism (Lessons m2-l1 and m2-l2) are all that is needed to derive every result here; the bridge is the first circuit in which a difference of two dividers is the object of interest.
- The balance method is the same null principle used in the potentiometer and in Kelvin's double bridge, and underlies the Wien bridge oscillator of Communication Electronics (Lesson m1-l3).
- The Electronic Instrumentation Lab (Wheatstone Bridge and Strain Gauge Measurement) builds the quarter, half and full bridges analysed here and measures their CMRR.
- Bolometer and photoconductor detectors in astronomy are read in bridge circuits, and the AC bridge excitation moves the signal away from the $1/f$ noise region.

## Quick Check

1. Derive the balance condition $R_1R_4 = R_2R_3$ from $V_a = V_b$.
2. A full bridge of four $120\,\Omega$ gauges with $GF = 2.0$ is excited at $10$ V and strained by $500\,\mu\varepsilon$. Find $V_o$.
3. Show that a half bridge with $R_3 = R(1 - x)$ and $R_4 = R(1 + x)$ gives $V_o = V_s x/2$ exactly.
4. A Pt100 quarter bridge uses three $100\,\Omega$ resistors. What percentage error does the linear formula make when the sensor is $119.4\,\Omega$ ($x = 0.194$)?
5. Why is the Maxwell balance independent of frequency, and why is it unsuitable for high-$Q$ coils?

## Takeaway

- The bridge converts a small resistance change into a differential voltage that is zero at rest.
- Output is $V_s/4$, $V_s/2$ or $V_s$ per unit $\Delta R/R$ for one, two or four active arms; two or four arms also linearise.
- Dummy or opposing gauges cancel temperature; three wires cancel lead resistance.
- The bridge output has a large common-mode level and needs a differential amplifier.
- AC bridges balance in magnitude and phase; the Maxwell bridge gives $R_x = R_2R_3/R_1$ and $L_x = R_2R_3C_1$.
