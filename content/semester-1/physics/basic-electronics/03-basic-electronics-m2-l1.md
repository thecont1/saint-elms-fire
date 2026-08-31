***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: basic-electronics
courseName: Basic Electronics
moduleId: basic-electronics-module-2
moduleName: Diodes, Transistors, and Measurement
lessonId: basic-electronics-m2-l1
lessonName: Diodes — Rectifier, Zener, LED
lessonNumber: 3
moduleNumber: 2
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 45
releaseOrder: 3
prerequisites:
  - basic-electronics-m1-l2
learningObjectives:
  - Describe the I-V characteristic of a semiconductor diode.
  - Design half-wave and full-wave rectifier circuits.
  - Use Zener diodes as voltage regulators and LEDs as indicators.
concepts:
  - Diode
  - p-n junction
  - Half-wave rectifier
  - Full-wave rectifier
  - Zener diode
  - Light-emitting diode
tags:
  - physics
  - electronics
  - diode
  - rectifier
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Diodes — Rectifier, Zener, LED

## Overview

The semiconductor diode is the simplest non-linear device in electronics: it conducts current in one direction and blocks it in the other. The lesson develops the I-V characteristic of the diode, the physical origin in the p-n junction, and the principal applications: rectification (converting AC to DC), voltage regulation (with Zener diodes), and indication (with light-emitting diodes). The lesson is the gateway to all the non-linear devices that follow: transistors, op-amps, and integrated circuits all build on the diode. The lesson closes with practical guidance on diode selection, heat sinking, and protection.

## Learning Path

- **What you should already know**: the DC circuit analysis of Lesson m1-l1; the capacitor and inductor of Lesson m1-l2; the basic concepts of semiconductors (optional).
- **What this lesson adds**: the I-V characteristic of a diode; the half-wave and full-wave rectifier circuits; the Zener diode as a voltage regulator; the LED as an indicator; practical guidance on diode selection.
- **What later lessons this will unlock**: transistors in Lesson m2-l2; measurement instruments in Lesson m2-l3; the build project in Lesson m3-1; the AC analysis in the next module.

## Core Explanation

### The semiconductor diode

A **semiconductor diode** is a two-terminal device with a p-n junction: a region of p-type semiconductor (with excess holes) in contact with a region of n-type semiconductor (with excess electrons). At the junction, the carriers recombine, leaving a depletion region with a built-in electric field. The diode conducts current readily in the forward direction (p to n) and blocks current in the reverse direction (n to p).

The I-V characteristic of a diode is given by the **Shockley diode equation**:

$$I = I_S \left(e^{V / (n V_T)} - 1\right),$$

where $I_S$ is the reverse saturation current (typically $10^{-15}$ to $10^{-9}$ A), $V_T = k_B T / q$ is the thermal voltage (about $26$ mV at room temperature), and $n$ is the ideality factor (between $1$ and $2$). For $V$ much greater than $V_T$, the exponential dominates; for $V$ negative, the current is approximately $-I_S$.

In the forward direction, the diode has a "knee voltage" (about $0.6$ V for silicon, $0.3$ V for germanium, $1.5$–$3$ V for LEDs depending on the colour) below which the current is negligible. Above the knee, the current increases rapidly with voltage.

In the reverse direction, the diode blocks current (only the small reverse saturation current flows) until the **breakdown voltage** is reached. Beyond the breakdown, the current increases rapidly and the diode is destroyed unless the current is limited (this is the operating regime of the Zener diode).

### Diode types

Several specialised diode types are in common use:

- **Rectifier diode**: optimised for high forward current and high reverse voltage. Used in power supplies. Examples: 1N4001 ($1$ A, $50$ V), 1N5408 ($3$ A, $1000$ V).
- **Signal diode**: optimised for fast switching at low currents. Used in logic and high-frequency circuits. Example: 1N4148 ($200$ mA, $100$ V, $4$ ns switching).
- **Zener diode**: optimised for operation in reverse breakdown. Used as a voltage regulator. Available in standard voltages from $2$ V to $200$ V.
- **Schottky diode**: a metal-semiconductor junction with a low forward voltage drop ($0.2$–$0.3$ V) and very fast switching. Used in high-frequency and low-voltage applications.
- **Light-emitting diode (LED)**: a p-n junction that emits light when forward-biased. The colour depends on the semiconductor: red (GaAs), green (GaP), blue (GaN), etc.
- **Photodiode**: a p-n junction that generates a current when exposed to light. Used in optical communication and in cameras.
- **Zener diode**: a diode designed to operate in reverse breakdown at a precise voltage. Used as a voltage regulator.

### Half-wave rectifier

The **half-wave rectifier** uses a single diode to convert AC to pulsating DC. The diode conducts during the positive half-cycle of the input and blocks during the negative half-cycle. The output is a series of positive half-cycles, separated by gaps.

The peak output voltage is $V_\text{out,peak} = V_\text{in,peak} - V_D$, where $V_D \approx 0.7$ V is the diode forward voltage drop. The average output voltage is $V_\text{out,avg} = V_\text{out,peak} / \pi$. The ripple factor is $r = \sqrt{(\pi^2 / 8) - 1} \approx 1.21$, indicating large ripple.

A smoothing capacitor across the output reduces the ripple. The capacitor charges to the peak voltage during the diode's conduction and discharges through the load between the conduction intervals. The ripple voltage is approximately $V_\text{ripple} = I_\text{load} / (f C)$, where $f$ is the frequency of the input.

### Full-wave rectifier

The **full-wave rectifier** uses four diodes in a bridge configuration to convert both halves of the AC cycle to positive output. The output is a series of positive half-cycles at twice the input frequency.

The peak output voltage is $V_\text{out,peak} = V_\text{in,peak} - 2 V_D$ (two diodes in series during each half-cycle). The average output voltage is $V_\text{out,avg} = 2 V_\text{out,peak} / \pi$. The ripple factor is $r = \sqrt{(\pi^2 / 8) - 1} / 2 \approx 0.48$, half that of the half-wave rectifier (because the ripple frequency is twice as high).

A centre-tapped transformer with two diodes can also produce full-wave rectification; the peak output is $V_\text{out,peak} = V_\text{in,peak} - V_D$ (only one diode in series), but the transformer is more complex.

### Zener diode as voltage regulator

A **Zener diode** is designed to operate in reverse breakdown at a precise voltage $V_Z$. When reverse-biased with a current above the holding current $I_{ZK}$ but below the maximum current $I_{ZM}$, the Zener maintains a constant voltage $V_Z$ across its terminals.

A simple Zener regulator consists of a Zener diode in series with a resistor $R$. The input voltage $V_\text{in}$ is higher than $V_Z$; the resistor $R$ drops the excess voltage; the Zener clamps the output to $V_Z$. The current through the Zener is $I_Z = (V_\text{in} - V_Z) / R - I_\text{load}$. For the regulation to work, $I_Z$ must be between $I_{ZK}$ and $I_{ZM}$, and the load current $I_\text{load}$ must be small enough that $I_Z$ does not exceed $I_{ZM}$ at the maximum load.

The regulation is imperfect: the output voltage depends on the input voltage, the load current, and the temperature. The line regulation is the change in output voltage for a change in input voltage; the load regulation is the change in output voltage for a change in load current. Both are small for a well-designed Zener regulator.

### Light-emitting diode (LED)

An **LED** is a p-n junction that emits light when forward-biased. The colour of the light depends on the band gap of the semiconductor: gallium arsenide (GaAs) emits infrared, gallium arsenide phosphide (GaAsP) emits red, gallium phosphide (GaP) emits green, and gallium nitride (GaN) emits blue and white. White LEDs are typically blue LEDs with a phosphor coating that converts some of the blue light to yellow; the combination appears white.

The forward voltage of an LED depends on the colour: red $\approx 1.8$ V, yellow $\approx 2.0$ V, green $\approx 2.2$ V, blue and white $\approx 3.0$–$3.5$ V. The current rating is typically $20$ mA for indicator LEDs, up to several amperes for high-power LEDs.

To use an LED, connect it in series with a current-limiting resistor: $R = (V_\text{supply} - V_F) / I_F$, where $V_F$ is the LED forward voltage and $I_F$ is the desired forward current. Without the resistor, the LED would draw excessive current and burn out.

### Photodiode and solar cell

A **photodiode** is a p-n junction that generates a current proportional to the incident light. The current is in the reverse direction; the diode is reverse-biased, and the photocurrent adds to the small reverse saturation current. Photodiodes are used in optical communication, in cameras, and in scientific instruments.

A **solar cell** is a large-area photodiode optimised for the conversion of sunlight to electricity. The conversion efficiency is typically $15\%$–$25\%$ for commercial silicon solar cells and up to $40\%$ for multi-junction cells. The open-circuit voltage is about $0.6$ V per cell; cells are connected in series for higher voltages.

### Practical considerations

When selecting a diode for an application, consider:

- **Forward current rating**: the diode must handle the maximum forward current without overheating.
- **Reverse voltage rating**: the diode must withstand the maximum reverse voltage (with a safety factor of $2$ or more).
- **Forward voltage drop**: lower for Schottky diodes, higher for LEDs. Affects the power dissipation.
- **Reverse leakage current**: important for high-impedance or precision circuits.
- **Switching speed**: important for high-frequency applications.
- **Package**: through-hole, surface-mount, or specific form factor (e.g. TO-220 for power diodes).
- **Heat sinking**: high-current diodes need a heat sink to dissipate the heat. The thermal resistance of the package and the heat sink must be low enough to keep the junction temperature within the rated limits.

### Worked examples

**Example 1 — Half-wave rectifier with smoothing.**

A $12$ V RMS AC input is rectified by a half-wave rectifier with a $1000\ \mu$F smoothing capacitor and a $100\ \Omega$ load. Find the peak output voltage, the ripple voltage, and the average output voltage.

**Solution.** Peak input: $V_\text{peak} = 12 \cdot \sqrt{2} = 16.97$ V. Peak output: $V_\text{out,peak} = 16.97 - 0.7 = 16.27$ V. Load current: $I_\text{load} = V_\text{out} / R \approx 16.27 / 100 = 163$ mA. Ripple voltage: $V_\text{ripple} = I_\text{load} / (f C) = 0.163 / (50 \cdot 10^{-3}) = 3.26$ V (assuming $f = 50$ Hz). The ripple is significant; a larger capacitor or a full-wave rectifier would reduce it.

**Example 2 — Zener regulator.**

A $5.1$ V Zener diode is used to regulate the output of a $9$ V supply through a $100\ \Omega$ resistor. The load draws $20$ mA. Find the Zener current and the power dissipation.

**Solution.** Voltage across the resistor: $V_R = 9 - 5.1 = 3.9$ V. Current through the resistor: $I_R = 3.9 / 100 = 39$ mA. Load current: $I_\text{load} = 20$ mA. Zener current: $I_Z = I_R - I_\text{load} = 19$ mA. Zener power: $P_Z = 5.1 \cdot 0.019 = 0.097$ W $= 97$ mW. The Zener is operating within its ratings.

**Example 3 — LED indicator.**

A red LED ($V_F = 1.8$ V, $I_F = 20$ mA) is connected to a $5$ V supply through a current-limiting resistor. Find the resistor value.

**Solution.** $R = (V_\text{supply} - V_F) / I_F = (5 - 1.8) / 0.02 = 160\ \Omega$. The standard value is $150\ \Omega$ or $180\ \Omega$.

### Common pitfalls

- **Reverse voltage rating**: exceeding the reverse voltage destroys the diode (unless it is a Zener operating in breakdown).
- **Forward current rating**: exceeding the forward current destroys the diode.
- **Power dissipation**: the diode's power dissipation ($P = V_F I_F$ for a forward-biased diode, $P = V_Z I_Z$ for a Zener) must be within the package's rating.
- **Polarity**: electrolytic capacitors and most diodes are polarised; reversing the polarity can destroy the component.
- **Switching speed**: a slow diode in a high-frequency circuit causes excessive switching losses; use a fast diode (e.g. Schottky or signal diode).

### Key Ideas

- A diode conducts in the forward direction and blocks in the reverse direction.
- The I-V characteristic is exponential in the forward direction (Shockley equation) and small but non-zero in the reverse direction (reverse saturation).
- A half-wave rectifier converts AC to pulsating DC using one diode; a full-wave rectifier uses four diodes in a bridge.
- A Zener diode operates in reverse breakdown at a precise voltage; used as a voltage regulator.
- An LED emits light when forward-biased; the colour depends on the semiconductor.
- A photodiode generates a current when exposed to light; a solar cell is a large-area photodiode optimised for power generation.

## Worked Examples

### Example 1 — Bridge rectifier design

Design a full-wave bridge rectifier for a $12$ V RMS, $50$ Hz input, delivering $1$ A to a load.

**Solution.** Peak input: $V_\text{peak} = 12 \cdot \sqrt{2} = 16.97$ V. Peak output: $V_\text{out,peak} = 16.97 - 1.4 = 15.57$ V (two diode drops). Smoothing capacitor: choose $C$ such that the ripple is small. For a ripple of $1$ V at $1$ A and $100$ Hz (twice the line frequency), $C = I / (f V_\text{ripple}) = 1 / (100 \cdot 1) = 0.01$ F $= 10000\ \mu$F. Diode rating: each diode sees the peak inverse voltage of $V_\text{peak} = 16.97$ V; a diode rated at $50$ V or more is sufficient.

### Example 2 — Zener regulator with load variation

A $5.1$ V Zener regulator has a $9$ V input and a $100\ \Omega$ series resistor. The load current varies from $5$ mA to $30$ mA. Find the Zener current at both extremes.

**Solution.** At $I_\text{load} = 5$ mA: $I_R = 39$ mA (constant), $I_Z = 39 - 5 = 34$ mA. At $I_\text{load} = 30$ mA: $I_Z = 39 - 30 = 9$ mA. The Zener current varies from $9$ mA to $34$ mA; the Zener must have $I_{ZK} < 9$ mA and $I_{ZM} > 34$ mA.

### Example 3 — LED with PWM dimming

A blue LED ($V_F = 3.0$ V, $I_F = 20$ mA) is driven by a $5$ V supply through a $100\ \Omega$ resistor and a MOSFET switch. The MOSFET is driven by a $1$ kHz PWM signal with $50\%$ duty cycle. Find the average current.

**Solution.** When the MOSFET is on, $I = (5 - 3) / 100 = 20$ mA. When the MOSFET is off, $I = 0$. The average current is $0.5 \cdot 20 = 10$ mA. The LED appears dimmer; the perceived brightness is approximately proportional to the average current.

## Common Misconceptions

- **"A diode passes current in one direction only."** It conducts in one direction and blocks in the other, but a small reverse current (the reverse saturation current) always flows.
- **"A diode drops $0.7$ V."** The forward voltage drop depends on the diode type (silicon $\approx 0.7$ V, germanium $\approx 0.3$ V, Schottky $\approx 0.2$–$0.3$ V, LED $1.5$–$3.5$ V) and on the current.
- **"A Zener diode is a regular diode used in reverse."** A Zener diode is designed for operation in reverse breakdown; the breakdown voltage is precise and stable. A regular diode in reverse breakdown is usually destroyed.
- **"An LED can be connected directly to a battery."** An LED needs a current-limiting resistor; without it, the LED draws excessive current and burns out.
- **"Higher reverse voltage rating is always better."** Higher reverse voltage ratings typically come with higher forward voltage drops and slower switching. Choose the diode for the application.

## Connections

- The diode is the simplest non-linear device; transistors, op-amps, and integrated circuits all build on the diode.
- Rectifiers are the first stage of every DC power supply; regulators (linear or switching) follow.
- Zener diodes are the basis of simple voltage references; more precise references use bandgap or buried-Zener designs.
- LEDs are the basis of displays, indicators, lighting, and optical communication.
- Photodiodes and solar cells convert light to electricity; the same physics underlies the operation of CCDs and CMOS image sensors.

## Quick Check

1. State the Shockley diode equation and identify its parameters.
2. A half-wave rectifier has a $12$ V RMS input and a silicon diode. Find the peak output voltage.
3. A Zener diode is used to regulate a $9$ V supply to $5.1$ V. Find the series resistor for a $20$ mA load.
4. A red LED ($V_F = 1.8$ V) is connected to a $5$ V supply through a $150\ \Omega$ resistor. Find the current.
5. Distinguish a rectifier diode, a Zener diode, and an LED by their I-V characteristics.

## Takeaway

- A diode is a non-linear device that conducts in one direction and blocks in the other.
- The Shockley diode equation describes the exponential I-V characteristic.
- Rectifiers convert AC to DC; Zener diodes regulate voltage; LEDs emit light.
- The selection of a diode depends on the application: forward current, reverse voltage, switching speed, and power dissipation.
- The diode is the foundation of all non-linear electronics.
