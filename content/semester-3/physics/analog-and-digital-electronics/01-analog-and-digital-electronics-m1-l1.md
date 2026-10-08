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
lessonId: analog-and-digital-electronics-m1-l1
lessonName: Diode Circuits Revisited: Clippers, Clampers and Regulated Supplies
lessonNumber: 1
moduleNumber: 1
semesterNumber: 3
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - basic-electronics-m2-l1
  - basic-electronics-m1-l2
learningObjectives:
  - Analyse series and shunt clipper circuits using the piecewise-linear diode model and sketch their transfer characteristics.
  - Explain the operation of a clamper and state the condition $RC \gg T$ for a faithful DC shift.
  - Estimate the ripple $V_r \approx I_L/(2fC)$ of a capacitor-filtered full-wave rectifier and compute the ripple factor.
  - Design a Zener shunt regulator for given input and load ranges and evaluate its line and load regulation.
concepts:
  - Piecewise-linear diode model
  - Clipper (limiter) circuit
  - Clamper (DC restorer)
  - Capacitor filter ripple
  - Zener shunt regulator
  - Line and load regulation
tags:
  - physics
  - analog-and-digital-electronics
  - diode-circuits
  - power-supplies
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Diode Circuits Revisited: Clippers, Clampers and Regulated Supplies

## Overview

The diode is the simplest non-linear circuit element, and almost every analogue system uses several to shape waveforms, protect inputs, restore DC levels and turn the mains into a steady low-voltage supply. This lesson returns to the rectifier and Zener of Basic Electronics with a sharper toolkit. We set up the piecewise-linear model, analyse clippers (which remove part of a waveform) and clampers (which shift a waveform without changing its shape), and then assemble a regulated supply: transformer, bridge rectifier, capacitor filter and Zener regulator. The emphasis is quantitative: how large a capacitor, what series resistance, what Zener power rating.

## Learning Path

- **What you should already know**: the diode I–V curve, the 0.7 V silicon forward drop, Zener breakdown and the half-wave and full-wave rectifier (Basic Electronics m2-l1); RC charging and discharging (Basic Electronics m1-l2).
- **What this lesson adds**: the piecewise-linear and small-signal diode models; biased clippers and clampers; the ripple estimate for filtered rectifiers; the design equations of a Zener shunt regulator; line and load regulation.
- **What later lessons this will unlock**: the bias design of the common-emitter amplifier (Lesson m1-l2) assumes a regulated supply; the comparator and Schmitt trigger (Lesson m2-l2) reuse the idea of a transfer characteristic with break points; the ADC references of Lesson m3-l3 depend on precise regulation.

## Core Explanation

### Diode models for circuit analysis

The Shockley relation describes a p–n junction,

$$I_D = I_S\left(e^{V_D/(nV_T)} - 1\right), \qquad V_T = \frac{k_B T}{e} \approx 25.9\ \text{mV at } 300\ \text{K},$$

where $I_S$ is the saturation current and $n$ lies between 1 and 2. For hand analysis we replace the exponential by the **piecewise-linear model**: the diode is an open circuit for $V_D < V_\gamma$ and, for $V_D \ge V_\gamma$, a battery $V_\gamma$ (about 0.7 V for silicon, 0.3 V for germanium, 1.8–3.3 V for LEDs) in series with a small forward resistance $r_f$. Dropping $r_f$ gives the **constant-voltage-drop model**.

Around a DC operating point the diode has a **dynamic (small-signal) resistance**, obtained by differentiating the Shockley equation:

$$r_d = \left(\frac{dI_D}{dV_D}\right)^{-1} \approx \frac{nV_T}{I_D}.$$

At 1 mA this is about 26 Ω.

### Clippers (limiters)

A **clipper** passes one portion of a waveform and removes the rest. In a **series clipper** the diode sits in the signal path; a DC source $V_B$ in series moves the break point to $V_B + V_\gamma$.

The **shunt clipper** places $R$ in series with the signal and the diode (with optional bias $V_B$) across the output. With the anode at the output and the cathode held at $+V_B$, the diode is off for $v_{in} < V_B + V_\gamma$ and $v_{out} = v_{in}$. Above the break point the diode conducts and

$$v_{out} = V_B + V_\gamma + \frac{r_f}{R + r_f}\,(v_{in} - V_B - V_\gamma) \approx V_B + V_\gamma \quad (r_f \ll R).$$

The **transfer characteristic** $v_{out}(v_{in})$ is a line of slope 1 that bends to slope $r_f/(R + r_f)$ at the break point. Two oppositely biased shunt diodes form a **double-ended clipper**; two back-to-back Zeners do the same without batteries, clipping at $\pm(V_Z + V_\gamma)$, the standard protection for an op-amp or ADC input.

The plot shows a sine wave with both peaks sliced flat at $\pm 3.7$ V.

```python
import numpy as np, matplotlib.pyplot as plt
Vg, VB = 0.7, 3.0                      # diode drop and bias battery
t = np.linspace(0, 2e-3, 2000)
vin = 10*np.sin(2*np.pi*1e3*t)
vout = np.clip(vin, -(VB+Vg), VB+Vg)   # ideal shunt clipper, r_f = 0
plt.plot(t*1e3, vin, '--', label="input"); plt.plot(t*1e3, vout, label="clipped")
plt.xlabel("t (ms)"); plt.ylabel("V"); plt.legend(); plt.show()
```

### Clampers (DC restorers)

A **clamper** shifts a whole waveform so that one peak sits at a chosen DC level: a capacitor $C$ in series with the signal, a diode across the output, and a large resistor $R$ in parallel with it.

Take the diode with cathode at the output and anode grounded, so that it conducts when the output tries to go below $-V_\gamma$. On the first negative excursion of a square wave of amplitude $\pm V_m$ the output is pulled to $-V_\gamma$ and the capacitor charges to $V_C = V_m - V_\gamma$. On the following positive half-cycle the diode is off and $v_{out} = v_{in} + V_C = 2V_m - V_\gamma$. The output swings between $-V_\gamma$ and $2V_m - V_\gamma$, its negative peak clamped at $-V_\gamma$. Reversing the diode clamps the positive peak; a series bias battery shifts the level to $V_B \pm V_\gamma$.

The capacitor must not discharge appreciably through $R$ while the diode is off:

$$\tau = RC \gg T, \qquad \text{typically } RC \ge 10\,T.$$

If $RC$ is too small the flat top droops exponentially.

### Rectification and the capacitor filter

The full-wave **bridge rectifier** uses four diodes, two conducting in series on each half-cycle, so the peak output is $V_p - 2V_\gamma$ with $V_p = \sqrt{2}\,V_{rms}$; each diode must withstand a peak inverse voltage (PIV) of $V_p$.

A **capacitor filter** $C$ across the load charges to the peak and discharges through $R_L$ between peaks. For small ripple the discharge is nearly linear, so the charge lost in the time $T'$ between recharges is $I_L T'$ and the peak-to-peak **ripple voltage** is

$$V_r = \frac{I_L T'}{C} = \begin{cases} I_L/(fC) & \text{half-wave} \\[4pt] I_L/(2fC) & \text{full-wave,} \end{cases}$$

with $f$ the mains frequency (50 Hz in India). Hence $V_{dc} \approx V_p - 2V_\gamma - V_r/2$. The ripple is roughly a sawtooth of rms value $V_r/(2\sqrt{3})$, so the **ripple factor** is

$$r = \frac{V_{r,\text{rms}}}{V_{dc}} = \frac{V_r}{2\sqrt{3}\,V_{dc}}.$$

### The Zener shunt regulator

The filtered output still varies with the mains (**line variation**) and the load current (**load variation**). In a **Zener shunt regulator** a series resistor $R_S$ connects the unregulated input $V_i$ to the node where the reverse-biased Zener ($V_Z$) and the load sit in parallel. Kirchhoff's current law gives

$$I_S = \frac{V_i - V_Z}{R_S} = I_Z + I_L.$$

The Zener regulates provided $I_Z \ge I_{Z,\min}$ (the knee current) and $V_Z I_Z$ stays within rating. Two worst cases fix the design:

- **Minimum input, maximum load**: $I_Z$ is smallest, so
$$R_{S,\max} = \frac{V_{i,\min} - V_Z}{I_{L,\max} + I_{Z,\min}}.$$
- **Maximum input, minimum load**: $I_{Z,\max} = (V_{i,\max} - V_Z)/R_S - I_{L,\min}$ sets the Zener rating $P_Z \ge V_Z I_{Z,\max}$ and the resistor rating $(V_{i,\max} - V_Z)^2/R_S$.

A real Zener has a **dynamic resistance** $r_z$ of a few to tens of ohms. Modelling it as $V_{Z0}$ in series with $r_z$ and using superposition,

$$\Delta V_o = \Delta V_i\,\frac{r_z \parallel R_L}{R_S + r_z \parallel R_L} - \Delta I_L\,(r_z \parallel R_S).$$

The first coefficient is the **line regulation**, the second the **load regulation** (an output resistance). Both improve as $R_S$ grows, which conflicts with the need for a small $R_S$ at minimum input. This conflict, and the power wasted in $R_S$, confine the shunt regulator to low currents or to use as the reference of a **series-pass regulator**: an emitter follower whose base is held at $V_Z$ delivers $V_Z - V_{BE}$ with current gain $\beta$, so the Zener supplies only base current. IC regulators (78xx) add an error amplifier.

## Key Ideas

- **Piecewise-linear model**: open below $V_\gamma \approx 0.7$ V, a battery $V_\gamma$ plus $r_f$ above; $r_d \approx nV_T/I_D$.
- **Clipper**: removes the waveform beyond $V_B + V_\gamma$; slope 1 then $r_f/(R + r_f)$.
- **Clamper**: shifts a peak to a chosen level; requires $RC \gg T$.
- **Bridge rectifier**: peak output $V_p - 2V_\gamma$, PIV $= V_p$ per diode.
- **Capacitor filter ripple**: $V_r \approx I_L/(2fC)$ for full-wave; ripple factor $V_r/(2\sqrt{3} V_{dc})$.
- **Zener design**: $R_S$ from minimum input and maximum load; power rating from maximum input and minimum load.
- **Regulation**: line regulation $\approx r_z/(R_S + r_z)$, load regulation $\approx r_z \parallel R_S$.

## Worked Examples

### Example 1 — Biased shunt clipper

A 10 V peak, 1 kHz sine wave drives a shunt clipper with $R = 1$ kΩ and a silicon diode ($V_\gamma = 0.7$ V, $r_f = 10$ Ω) whose cathode is held at $+3$ V. Find the output and the maximum diode current.

**Solution.** The diode conducts when $v_{in} > 3.7$ V; below this the output equals the input. Above the break point,

$$v_{out} = 3.7 + \frac{10}{1010}(v_{in} - 3.7).$$

At the input peak $v_{out} = 3.7 + 0.0099 \times 6.3 = 3.76$ V: the top is sliced at essentially 3.7 V. The peak diode current is $6.3/1010 = 6.24$ mA.

### Example 2 — Bridge rectifier with capacitor filter

A 12 V rms, 50 Hz secondary feeds a silicon bridge, a 1000 µF capacitor and a 100 Ω load. Estimate the DC output, the ripple and the ripple factor.

**Solution.** The peak is $V_p = \sqrt{2} \times 12 = 16.97$ V, and after two diode drops the capacitor charges to 15.57 V. With $I_L \approx 15.5/100 = 0.155$ A,

$$V_r = \frac{I_L}{2fC} = \frac{0.155}{2 \times 50 \times 10^{-3}} = 1.55\ \text{V}.$$

Then $V_{dc} \approx 15.57 - 0.78 = 14.8$ V, giving $I_L = 0.148$ A and a corrected ripple of 1.48 V. The ripple factor is

$$r = \frac{1.48}{2\sqrt{3} \times 14.8} = 0.029 \approx 3\%.$$

Each diode needs PIV $> 17$ V.

### Example 3 — Designing a Zener regulator

An input varying between 10 V and 14 V must supply a 5.1 V load drawing 0 to 50 mA. Given $I_{Z,\min} = 5$ mA and $r_z = 10$ Ω, specify $R_S$, the power ratings and the output variation.

**Solution.** Minimum input with full load gives

$$R_{S,\max} = \frac{10 - 5.1}{0.050 + 0.005} = 89\ \Omega; \quad \text{choose } R_S = 82\ \Omega.$$

Maximum input with no load gives

$$I_{Z,\max} = \frac{14 - 5.1}{82} = 108.5\ \text{mA}, \qquad P_Z = 5.1 \times 0.1085 = 0.55\ \text{W},$$

so a 1 W Zener is required; the resistor dissipates $8.9^2/82 = 0.97$ W, so a 2 W part is specified. The line regulation with no load is $10/92 = 0.109$, so the 4 V input swing moves the output by 0.43 V; the load regulation is $r_z \parallel R_S = 8.9$ Ω, so the 50 mA load step moves it by 0.45 V. These errors explain why a series-pass or IC regulator follows the Zener in a precision supply.

## Common Misconceptions

- **"A diode turns on at exactly 0.7 V."** The current rises a decade for every 60 mV or so; the apparent turn-on voltage depends on current, temperature (about $-2$ mV/K) and device size.
- **"A clamper charges the capacitor through the diode on every cycle."** Once charged, the capacitor holds its voltage; the diode conducts only briefly at the clamped peak to replace the small charge lost through $R$.
- **"A bigger filter capacitor is always better."** Larger $C$ reduces ripple but concentrates recharging into shorter, higher-current pulses that stress the diodes and transformer.
- **"The Zener holds the output exactly at $V_Z$."** The output moves with current through $r_z$ and drifts with temperature; a few per cent is typical.
- **"A bridge rectifier loses 0.7 V."** Two diodes conduct in series on each half-cycle, so the loss is about 1.4 V, approaching 2 V at high current.

## Connections

- The exponential diode law is the Boltzmann factor $e^{-E/k_BT}$ in disguise; $V_T = k_BT/e$ links this lesson to Thermal Physics and Solid State Physics.
- The filter analysis is the RC discharge problem of Electricity and Magnetism (RC Circuits and Transient Response) applied piecewise.
- Clipping and clamping appear in oscilloscope inputs and in the protection networks of CCD readout electronics.
- Regulation and output resistance return, with far better numbers, under negative feedback in Lesson m1-l3.
- References from this chain set the full scale of every ADC and DAC in Module 3; a 1% reference error is a 1% gain error.

## Quick Check

1. Sketch the transfer characteristic of a shunt clipper with the diode anode at the output and cathode at $-2$ V.
2. A clamper with $C = 1$ µF and $R = 100$ kΩ is driven by a 1 kHz square wave. Is $RC \gg T$ satisfied? What happens to the waveform if $R$ is reduced to 1 kΩ?
3. A half-wave rectifier with a capacitor filter delivers 20 mA from a 50 Hz supply. What capacitance keeps the ripple below 0.5 V peak-to-peak, and how does a bridge rectifier change this?
4. In a Zener regulator the input rises while the load current stays fixed. Does the Zener current rise or fall, and which component rating does this case determine?
5. Why can a Zener regulator with $R_S = 82$ Ω and $r_z = 10$ Ω not achieve line regulation better than about 11%? Name two improvements.

## Takeaway

- The piecewise-linear model turns diode circuits into linear problems separated by break points.
- Clippers remove the part of a waveform beyond $V_B + V_\gamma$; clampers shift a waveform so that a peak sits at a chosen level, provided $RC \gg T$.
- A capacitor-filtered bridge rectifier delivers $V_{dc} \approx V_p - 2V_\gamma - V_r/2$ with ripple $V_r \approx I_L/(2fC)$.
- A Zener shunt regulator is designed from two worst cases: the series resistor from minimum input and maximum load, the Zener rating from maximum input and minimum load.
- Line and load regulation are set by $r_z$ relative to $R_S$; precision supplies add a series-pass transistor or feedback.
