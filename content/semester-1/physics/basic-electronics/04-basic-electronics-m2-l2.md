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
lessonId: basic-electronics-m2-l2
lessonName: Transistor Basics — BJT and MOSFET
lessonNumber: 4
moduleNumber: 2
semesterNumber: 1
difficulty: advanced
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - basic-electronics-m2-l1
learningObjectives:
  - Describe the structure and operation of a bipolar junction transistor (BJT).
  - Describe the structure and operation of a metal-oxide-semiconductor field-effect transistor (MOSFET).
  - Analyse the three basic amplifier configurations: common-emitter, common-collector, common-base (BJT); common-source, common-drain, common-gate (MOSFET).
concepts:
  - BJT
  - MOSFET
  - Common-emitter
  - Common-source
  - Biasing
  - Small-signal model
tags:
  - physics
  - electronics
  - transistor
  - amplifier
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Transistor Basics — BJT and MOSFET

## Overview

The transistor is the active device at the heart of modern electronics. The lesson develops the structure, operation, and small-signal model of the two dominant families: the bipolar junction transistor (BJT) and the metal-oxide-semiconductor field-effect transistor (MOSFET). The lesson analyses the three basic amplifier configurations for each family and shows how the choice of configuration determines the input impedance, the output impedance, and the voltage gain. The lesson closes with practical guidance on biasing, heat sinking, and the use of transistors as switches. The lesson is the foundation of all subsequent topics: op-amps, oscillators, digital logic, and integrated circuits all build on the transistor.

## Learning Path

- **What you should already know**: the diode of Lesson m2-l1; the passive components of Lesson m1-l2; the DC circuit analysis of Lesson m1-l1; the basic concepts of semiconductors.
- **What this lesson adds**: the structure and operation of the BJT and MOSFET; the three amplifier configurations; the small-signal model; the bias networks; the use as a switch.
- **What later lessons this will unlock**: the measurement instruments of Lesson m2-l3; the build project of Lesson m3-l1; the AC analysis and op-amps in the next module.

## Core Explanation

### The bipolar junction transistor (BJT)

A **bipolar junction transistor** is a three-terminal device with two p-n junctions. The three terminals are the **base** (B), the **collector** (C), and the **emitter** (E). The two types are the **NPN** (a thin p-type base sandwiched between two n-type regions) and the **PNP** (the mirror image). The NPN is more common; the PNP is used where the polarity is reversed.

In the active region, the base-emitter junction is forward-biased and the base-collector junction is reverse-biased. The forward bias injects electrons (in an NPN) from the emitter into the base; most of these electrons diffuse across the thin base to the collector, where they are swept into the collector terminal by the reverse-bias field. A small fraction recombine with holes in the base and flow out of the base terminal. The ratio of collector current to base current is the **common-emitter current gain** $\beta$ (also written $h_{FE}$), typically $50$–$300$ for a small-signal BJT.

The Ebers–Moll model of the BJT gives $I_C = I_S e^{V_{BE} / V_T}$ and $I_B = I_C / \beta$, where $V_T$ is the thermal voltage. The transistor acts as a current amplifier: a small base current controls a large collector current.

### The metal-oxide-semiconductor field-effect transistor (MOSFET)

A **MOSFET** is a four-terminal device with a metal gate separated from the semiconductor channel by a thin oxide. The three terminals are the **gate** (G), the **drain** (D), and the **source** (S); the fourth terminal is the **body** (B), often tied to the source. The two types are the **n-channel** (NMOS, with electrons as the majority carriers) and the **p-channel** (PMOS, with holes as the majority carriers). The NMOS is more common; CMOS logic uses both.

In the active region, a positive gate-source voltage $V_{GS}$ (above the threshold $V_{th}$) creates an inversion layer of electrons at the oxide-semiconductor interface, forming a conducting channel between source and drain. The drain current is

$$I_D = \frac{1}{2} \mu C_\text{ox} \frac{W}{L} (V_{GS} - V_{th})^2$$

in saturation (long-channel, square-law model), where $\mu$ is the carrier mobility, $C_\text{ox}$ is the oxide capacitance per unit area, $W$ is the channel width, and $L$ is the channel length. The transconductance $g_m = d I_D / d V_{GS} = \mu C_\text{ox} (W/L) (V_{GS} - V_{th})$ is the figure of merit for the MOSFET as an amplifier.

The MOSFET is a **voltage-controlled** device: the gate current is essentially zero (the gate is insulated by the oxide), so the input impedance is very high ($10^{12}\ \Omega$ or more). This is a key advantage over the BJT, which is a current-controlled device with a finite base current.

### Common-emitter (CE) amplifier (BJT)

The **common-emitter** configuration has the emitter grounded (or at AC ground), the input at the base, and the output at the collector. The voltage gain is $A_v = -g_m R_C$, where $g_m = I_C / V_T$ is the transconductance and $R_C$ is the collector resistor. The negative sign indicates a 180° phase inversion. Typical voltage gains are $10$–$1000$.

The input impedance is approximately $r_\pi = \beta / g_m$, of order $1$–$10\ \text{k}\Omega$. The output impedance is approximately $R_C$ (in parallel with the Early effect resistance $r_O$, which is large). The CE amplifier is the workhorse of analogue electronics: high gain, moderate input impedance, moderate output impedance.

### Common-collector (CC) amplifier (BJT) — emitter follower

The **common-collector** (or **emitter follower**) has the collector at AC ground, the input at the base, and the output at the emitter. The voltage gain is approximately $1$ (the emitter "follows" the base, with a $V_{BE}$ offset of about $0.7$ V). The input impedance is approximately $r_\pi + (\beta + 1)(R_E \| R_L)$, which simplifies to $r_\pi + (\beta + 1) R_E$ without a load, of order $100\ \text{k}\Omega$–$1\ \text{M}\Omega$. The output impedance is approximately $R_E / \beta$, of order $10$–$100\ \Omega$.

The emitter follower is used as a **buffer**: a high-impedance source drives a low-impedance load without loss of signal. The unity voltage gain is offset by the high input impedance and the low output impedance.

### Common-base (CB) amplifier (BJT)

The **common-base** configuration has the base grounded (or at AC ground), the input at the emitter, and the output at the collector. The voltage gain is approximately $g_m R_C$, similar to the CE in magnitude but with no phase inversion. The input impedance is approximately $r_e = 1 / g_m$, of order $10$–$100\ \Omega$. The output impedance is approximately $R_C$.

The CB amplifier is used at high frequencies (its input impedance is low, but its bandwidth is high) and in some RF applications. It is less common than the CE or CC.

### Common-source (CS) amplifier (MOSFET)

The **common-source** configuration has the source grounded (or at AC ground), the input at the gate, and the output at the drain. The voltage gain is $A_v = -g_m R_D$, where $g_m$ is the transconductance and $R_D$ is the drain resistor. The negative sign indicates a 180° phase inversion. The input impedance is very high (limited by the bias network). The output impedance is approximately $R_D$ (in parallel with the channel-length modulation resistance $r_O$).

The CS amplifier is the MOSFET analogue of the CE amplifier. It is the basic building block of CMOS analogue circuits.

### Common-drain (CD) amplifier (MOSFET) — source follower

The **common-drain** (or **source follower**) has the drain at AC ground, the input at the gate, and the output at the source. The voltage gain is approximately $1$. The input impedance is very high; the output impedance is approximately $1 / g_m$, of order $100\ \Omega$–$1\ \text{k}\Omega$. The source follower is the MOSFET buffer.

### Common-gate (CG) amplifier (MOSFET)

The **common-gate** configuration has the gate at AC ground, the input at the source, and the output at the drain. The voltage gain is approximately $g_m R_D$. The input impedance is approximately $1 / g_m$, of order $100\ \Omega$–$1\ \text{k}\Omega$. The CG amplifier is used at high frequencies.

### Biasing

A transistor amplifier must be **biased** so that the operating point (the DC collector current and collector-emitter voltage) is in the active region, even in the absence of an input signal. The most common bias networks are:

- **Fixed bias** (BJT): a single resistor from the supply to the base. Sensitive to $\beta$ variation; rarely used alone.
- **Emitter bias** (BJT): a resistor in the emitter, bypassed by a capacitor. Stabilises the operating point against $\beta$ variation and temperature.
- **Voltage-divider bias** (BJT, MOSFET): two resistors set the base (or gate) voltage. The most common bias; stable and insensitive to $\beta$.
- **Self-bias** (MOSFET): a resistor in the source, bypassed by a capacitor. The standard MOSFET bias.

The bias network also affects the input and output impedances and the small-signal gain. The design is a balance between stability, linearity, and gain.

### The transistor as a switch

A transistor can be used as a **switch**: the ON state is saturation (BJT) or triode (MOSFET), and the OFF state is cutoff. The transition between the two states is fast (nanoseconds for small transistors), making the transistor the basis of digital logic.

For a BJT in saturation, $V_{CE} \approx 0.2$ V (the saturation voltage) and $I_C \approx I_B \beta_\text{sat}$, where $\beta_\text{sat} \approx 10$ (much less than the active-region $\beta$). The base current must be large enough to drive the transistor into saturation.

For a MOSFET in triode, $V_{DS} \approx R_{DS,\text{on}} I_D$, where $R_{DS,\text{on}}$ is the on-resistance (typically a few ohms for a power MOSFET). The gate voltage must be above $V_{th}$ by enough to ensure a low $R_{DS,\text{on}}$.

The transistor switch is the basis of the inverter, the logic gate, and the power switch. The switching losses (during the transition between ON and OFF) are an important consideration in power electronics.

### Heat sinking

A transistor dissipates power as heat: $P = V_{CE} I_C$ for a BJT in the active region, $P = V_{DS} I_D$ for a MOSFET. The heat must be removed to keep the junction temperature below the rated maximum (typically $150$°C for silicon, $200$°C for some power devices). The thermal resistance $\theta_{JA}$ (junction to ambient) is the figure of merit: $T_J = T_A + P \theta_{JA}$.

For high-power transistors, a heat sink is attached to the package. The heat sink reduces the thermal resistance by increasing the surface area for convection. The thermal interface material (TIM) between the package and the heat sink reduces the contact resistance. Forced-air cooling (a fan) or liquid cooling can further reduce the thermal resistance.

### Practical considerations

When selecting a transistor for an application, consider:

- **Current rating**: the maximum continuous collector or drain current.
- **Voltage rating**: the maximum collector-emitter or drain-source voltage.
- **Power rating**: the maximum power dissipation, with the heat sink considered.
- **Current gain** (BJT) or **transconductance** (MOSFET): the small-signal parameter.
- **Switching speed**: the transition frequency $f_T$ (the frequency at which the current gain drops to $1$).
- **Package**: through-hole, surface-mount, or specific form factor (e.g. TO-220 for power transistors).
- **Noise**: the input-referred voltage and current noise, important for low-noise amplifiers.

### Worked examples

**Example 1 — Common-emitter amplifier design.**

Design a CE amplifier with a $2$ N3904 NPN BJT ($\beta = 100$, $V_{BE} = 0.7$ V), $V_{CC} = 12$ V, and quiescent collector current $I_C = 1$ mA. Find $R_C$ and the voltage gain.

**Solution.** Quiescent $V_{CE}$ at the midpoint of the supply gives $V_{CE} \approx V_{CC} / 2 = 6$ V, so $R_C = (V_{CC} - V_{CE}) / I_C = (12 - 6) / 0.001 = 6\ \text{k}\Omega$. Transconductance: $g_m = I_C / V_T = 0.001 / 0.026 \approx 38.5$ mA/V. Voltage gain: $A_v = -g_m R_C = -38.5 \cdot 6 \approx -231$. The negative sign indicates a 180° phase inversion.

**Example 2 — Emitter follower buffer.**

Design an emitter follower with a $2$ N3904, $\beta = 100$, $V_{CC} = 12$ V, quiescent emitter current $I_E = 1$ mA. Find $R_E$ and the input impedance.

**Solution.** $R_E = (V_{CC} - V_{BE}) / I_E = (12 - 0.7) / 0.001 = 11.3\ \text{k}\Omega$. Input impedance: $Z_\text{in} \approx \beta R_E = 100 \cdot 11.3\ \text{k}\Omega = 1.13\ \text{M}\Omega$. The emitter follower presents a high impedance to the source.

**Example 3 — MOSFET switch.**

A logic-level MOSFET ($V_{th} = 1.5$ V, $R_{DS,\text{on}} = 0.05\ \Omega$) is used to switch a $10\ \Omega$ load from a $5$ V logic signal. Find the on-state current and the power dissipation.

**Solution.** With $V_{GS} = 5$ V (well above $V_{th}$), the MOSFET is fully on. $I_D = 5 / (0.05 + 10) \approx 0.5$ A. Power dissipation in the MOSFET: $P = I_D^2 R_{DS,\text{on}} = 0.5^2 \cdot 0.05 = 0.0125$ W $= 12.5$ mW. The MOSFET is well within its ratings.

### Common pitfalls

- **Exceeding the maximum ratings**: the collector-emitter voltage, the collector current, and the power dissipation must all be within the ratings.
- **Thermal runaway**: at high currents, the BJT's collector current increases with temperature, which can cause further heating. The bias network must be stable against thermal runaway.
- **Forgetting the base current**: the BJT requires a base current; a high-impedance source cannot drive a BJT directly.
- **Confusing BJT and MOSFET**: the BJT is current-controlled; the MOSFET is voltage-controlled. The two are not interchangeable without circuit modifications.
- **Using a transistor without a heat sink**: even a small power dissipation can overheat a small package.

### Key Ideas

- A transistor is an active device: it can amplify a signal.
- The BJT is a current-controlled device; the MOSFET is a voltage-controlled device.
- The three amplifier configurations (CE, CC, CB for BJT; CS, CD, CG for MOSFET) have different input and output impedances and different gains.
- The bias network sets the operating point; the most common is the voltage-divider bias.
- A transistor can be used as a switch: ON in saturation or triode, OFF in cutoff.
- Heat sinking is essential for high-power transistors.

## Worked Examples

### Example 1 — Two-stage amplifier

A two-stage amplifier consists of a CE stage (voltage gain $-50$) followed by an emitter follower (voltage gain $1$). The source has an output impedance of $10\ \text{k}\Omega$; the load is $1\ \text{k}\Omega$. Find the overall voltage gain from the source to the load.

**Solution.** The CE stage has input impedance $\approx 1\ \text{k}\Omega$ (for a typical BJT), which loads the source: $V_\text{in,CE} = V_\text{source} \cdot 1 / (10 + 1) = V_\text{source} / 11$. The CE output impedance is $R_C \approx 5\ \text{k}\Omega$, and the emitter-follower input impedance is $\beta R_E \approx 100\ \text{k}\Omega$: the CE drives the emitter follower with little loading. The CE output voltage is $V_\text{in,CE} \cdot (-50) = -50 V_\text{source} / 11$. The emitter follower gain is $\approx 1$, and the output drives the $1\ \text{k}\Omega$ load. Overall: $A_v = -50 / 11 \approx -4.5$. The two-stage amplifier has less gain than the CE alone, but the emitter follower provides a low output impedance for driving the load.

### Example 2 — Common-source MOSFET amplifier

Design a CS amplifier with a $2$N7000 NMOS ($V_{th} = 2$ V, $g_m = 50$ mA/V at the operating point), $V_{DD} = 12$ V, quiescent $I_D = 5$ mA, and quiescent $V_{DS} = 6$ V. Find $R_D$ and the voltage gain.

**Solution.** $R_D = (V_{DD} - V_{DS}) / I_D = (12 - 6) / 0.005 = 1.2\ \text{k}\Omega$. Voltage gain: $A_v = -g_m R_D = -0.05 \cdot 1200 = -60$. The CS amplifier has a voltage gain of $-60$ with a $180°$ phase inversion.

### Example 3 — Transistor as a temperature sensor

The base-emitter voltage of a BJT decreases by about $2$ mV per degree Celsius. Design a circuit that produces a voltage proportional to temperature, using a BJT and an op-amp.

**Solution.** Pass a constant current $I_E$ through the BJT (e.g. $I_E = 100\ \mu$A, set by a resistor from $V_{CC}$). The base-emitter voltage is $V_{BE} \approx 0.6$ V at room temperature, decreasing by $2$ mV/°C. Use the op-amp to subtract a reference voltage ($V_\text{ref} = 0.6$ V at $0$°C) and amplify the difference by $10$ (e.g. with $R_f = 9 R_i$). The output is $V_\text{out} = 10 (V_{BE} - V_\text{ref}) = 20$ mV/°C, a temperature-to-voltage converter.

## Common Misconceptions

- **"A transistor amplifies current."** A BJT amplifies current; a MOSFET amplifies voltage. Both deliver power gain.
- **"A transistor is a switch or an amplifier."** It is both; the same device can be used in either mode. The distinction is the operating point: linear (active) for amplification, saturated (or cutoff) for switching.
- **"The BJT and MOSFET are interchangeable."** They are different devices with different characteristics. The BJT is faster and has higher transconductance per unit area; the MOSFET has higher input impedance and lower power consumption. The choice depends on the application.
- **"The base current is negligible."** The base current is small but not zero; for a BJT, the base current is $I_C / \beta$, of order $1$–$10\ \mu$A. For high-impedance sources, a MOSFET is preferred.
- **"The transistor is a black box."** No, the transistor is a well-understood device with a well-defined small-signal model. The model is the basis of circuit analysis and design.

## Connections

- The transistor is the building block of all modern electronics: amplifiers, oscillators, digital logic, microprocessors, memory.
- The BJT and MOSFET are the basis of two complementary technologies: bipolar (TTL, ECL) and CMOS. Modern mixed-signal ICs use both.
- The op-amp (next module) is a multi-transistor amplifier with very high gain, high input impedance, and low output impedance.
- The transistor switch is the basis of digital logic; the inverter, the NAND, and the flip-flop are all built from transistors.
- The transistor as a sensor: the BJT's $V_{BE}$ is a temperature sensor; the phototransistor is an optical sensor; the MOSFET is a chemical sensor (in ISFET configurations).

## Quick Check

1. State the three terminals of a BJT and a MOSFET.
2. What is the difference between a BJT and a MOSFET in terms of control?
3. Sketch the common-emitter amplifier and identify the input, output, and ground.
4. What is the purpose of the bias network in a transistor amplifier?
5. A BJT has $\beta = 100$ and $I_B = 10\ \mu$A. Find $I_C$.

## Takeaway

- The BJT and MOSFET are the two dominant transistors; they differ in control (current vs. voltage).
- The three amplifier configurations (CE/CC/CB, CS/CD/CG) have different input/output impedances and gains.
- The bias network sets the operating point; voltage-divider bias is the most common.
- The transistor is used as a switch in saturation (BJT) or triode (MOSFET), and as an amplifier in the active region.
- Heat sinking is essential for high-power transistors.
- The transistor is the foundation of modern electronics.
