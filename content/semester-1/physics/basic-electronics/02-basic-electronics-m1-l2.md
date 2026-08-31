***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: basic-electronics
courseName: Basic Electronics
moduleId: basic-electronics-module-1
moduleName: DC Circuits and Passive Components
lessonId: basic-electronics-m1-l2
lessonName: Passive Components — Resistors, Capacitors, Inductors
lessonNumber: 2
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - basic-electronics-m1-l1
learningObjectives:
  - Identify resistor, capacitor, and inductor packages and read their values.
  - Describe the I-V characteristics of resistors, capacitors, and inductors.
  - Analyse the transient response of RC and RL circuits to step inputs.
concepts:
  - Resistor types
  - Capacitor types
  - Inductor types
  - RC time constant
  - RL time constant
  - Frequency response
tags:
  - physics
  - electronics
  - passive-components
  - rc-circuit
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Passive Components — Resistors, Capacitors, Inductors

## Overview

Passive components are the building blocks of every electronic circuit: resistors dissipate energy, capacitors store energy in an electric field, and inductors store energy in a magnetic field. The lesson develops the physical principles of each, the practical types and packages, and the analysis of the transient response of RC and RL circuits to step inputs. The lesson closes with a preview of the frequency response, which is developed in detail in the next module. The lesson is the foundation of the AC analysis, the filter design, and the oscillator analysis that appear throughout the rest of electronics.

## Learning Path

- **What you should already know**: DC circuit analysis (Lesson m1-l1); the basic concepts of current, voltage, and resistance; the calculus of derivatives and integrals.
- **What this lesson adds**: the physical principles of capacitors and inductors; the practical types and packages; the analysis of RC and RL transients; a preview of the frequency response.
- **What later lessons this will unlock**: diodes in Lesson m2-l1; transistors in Lesson m2-l2; the measurement instruments in Lesson m2-l3; the build project in Lesson m3-l1; the AC analysis in the next module.

## Core Explanation

### Resistor types

Resistors come in many types, each with characteristic properties:

- **Carbon-film**: the most common through-hole resistor; tolerance $5\%$, power rating $1/4$ W or $1/2$ W. Cheap and reliable for general-purpose use.
- **Metal-film**: better tolerance ($0.1\%$ to $1\%$) and lower noise than carbon-film. Used in precision circuits.
- **Wirewound**: high power rating (up to several hundred watts), low resistance values. Used in power electronics.
- **Surface-mount (chip) resistors**: the standard for modern electronics; tiny packages (e.g. $0402$, $0603$, $0805$) with values encoded by numerical labels.
- **Variable resistors (potentiometers, trimmers)**: a wiper moves along a resistive element, providing a variable resistance. Used for volume controls, tuning, and calibration.
- **Special resistors**: thermistors (resistance depends on temperature), photoresistors (resistance depends on light), varistors (resistance depends on voltage).

For most purposes, a $1\%$ metal-film resistor or a $5\%$ carbon-film resistor is sufficient.

### Capacitors

A **capacitor** stores energy in an electric field between two conductors. The capacitance $C$ is the ratio of the charge $Q$ on the conductors to the voltage $V$ across them: $C = Q / V$, measured in farads (F). A capacitance of $1$ F corresponds to $1$ C of charge stored at $1$ V.

The energy stored in a capacitor is $U = \frac{1}{2} C V^2$. The energy is released when the capacitor discharges through a resistor.

The current through a capacitor is $I = C \cdot dV / dt$. The voltage across a capacitor cannot change instantaneously (a sudden change would require an infinite current).

Capacitor types:

- **Ceramic**: small values (pF to $\mu$F), non-polarised, low cost. Used for bypassing, decoupling, and high-frequency applications.
- **Film**: medium values (nF to $\mu$F), non-polarised, good stability. Used for filtering and timing.
- **Electrolytic (aluminium, tantalum)**: large values ($\mu$F to mF), polarised (must be connected with the correct polarity), high leakage. Used for power supply filtering and energy storage.
- **Supercapacitor (EDLC)**: very large values (F to kF), low voltage rating. Used for energy storage in applications where batteries are too slow or too heavy.

### Inductors

An **inductor** stores energy in a magnetic field around a coil. The inductance $L$ is the ratio of the magnetic flux $\Phi$ to the current $I$: $L = \Phi / I$, measured in henries (H). An inductance of $1$ H corresponds to $1$ Wb of flux at $1$ A.

The energy stored in an inductor is $U = \frac{1}{2} L I^2$. The energy is released when the current through the inductor is interrupted.

The voltage across an inductor is $V = L \cdot dI / dt$. The current through an inductor cannot change instantaneously (a sudden change would induce an infinite voltage).

Inductor types:

- **Air-core**: small values ($\mu$H), no magnetic core. Used in RF circuits.
- **Iron-core**: larger values (mH), ferromagnetic core. Used in power electronics and audio.
- **Ferrite-core**: intermediate values, ferrimagnetic core. Used in switching power supplies and RF.
- **Toroidal**: wound on a toroidal core; low stray field. Used in power electronics and EMI filters.

Inductors are less common than capacitors in modern electronics because they are bulky, lossy, and have parasitic capacitance. They are essential in power conversion (switching regulators, transformers) and in RF circuits (filters, impedance matching).

### RC transient response

The **RC circuit** is a resistor and a capacitor in series. When a step voltage $V_0$ is applied at $t = 0$, the capacitor charges through the resistor. The voltage across the capacitor is

$$V_C(t) = V_0 \left(1 - e^{-t / \tau}\right),$$

where $\tau = R C$ is the time constant. The current is $I(t) = I_0 e^{-t / \tau}$ with $I_0 = V_0 / R$.

When the source is removed and the capacitor discharges through the resistor, the voltage is

$$V_C(t) = V_0 e^{-t / \tau}.$$

The voltage approaches zero (or $V_0$) exponentially, with a characteristic time $\tau$. The energy stored in the capacitor is dissipated in the resistor.

### RL transient response

The **RL circuit** is a resistor and an inductor in series. When a step voltage $V_0$ is applied at $t = 0$, the current through the inductor builds up:

$$I(t) = I_\infty \left(1 - e^{-t / \tau}\right), \quad I_\infty = V_0 / R, \quad \tau = L / R.$$

The voltage across the inductor is $V_L(t) = V_0 e^{-t / \tau}$, an exponentially decaying spike at $t = 0$ followed by zero at $t \gg \tau$.

When the source is shorted, the current decays as $I(t) = I_0 e^{-t / \tau}$. The energy stored in the inductor is dissipated in the resistor.

### Time constants in nature

The RC and RL time constants appear throughout physics and engineering:

- **RC**: the charging time of a capacitor through a resistor; the relaxation time of a dipole in a polarisable medium; the time scale of a low-pass filter.
- **RL**: the rise time of a current in an inductor; the time scale of a high-pass filter; the time scale of an electromagnet.

The time constant is the natural time scale of the circuit; events on time scales much shorter than $\tau$ see the circuit as "frozen", and events on time scales much longer see the circuit as "in steady state".

### Frequency response (preview)

The behaviour of RC and RL circuits in the frequency domain is described by the impedance. For a capacitor, $Z_C = 1 / (j \omega C)$; for an inductor, $Z_L = j \omega L$. The impedance is a complex quantity: the real part is the resistance, the imaginary part is the reactance.

At low frequencies ($\omega \to 0$): $Z_C \to \infty$ (capacitor is an open circuit), $Z_L \to 0$ (inductor is a short circuit).
At high frequencies ($\omega \to \infty$): $Z_C \to 0$ (capacitor is a short circuit), $Z_L \to \infty$ (inductor is an open circuit).

The crossover frequency $\omega_0 = 1 / (R C)$ for an RC circuit and $\omega_0 = R / L$ for an RL circuit separates the low-frequency and high-frequency regimes. The detailed analysis of filters and frequency response is the subject of the next module.

### Energy in capacitors and inductors

The energy stored in a capacitor is $U_C = \frac{1}{2} C V^2$; the energy stored in an inductor is $U_L = \frac{1}{2} L I^2$. The energies are stored in the electric and magnetic fields, respectively. The total energy in an LC circuit is conserved, and the energy oscillates between the capacitor and the inductor at the resonant frequency $\omega_0 = 1 / \sqrt{L C}$. The LC oscillator is the basis of the radio transmitter, the quartz oscillator, and the resonant cavity.

### Worked examples

**Example 1 — RC charging.**

A $1\ \mu\text{F}$ capacitor is charged through a $10\ \text{k}\Omega$ resistor from a $10$ V source. Find the time constant and the voltage across the capacitor at $t = 5$ ms.

**Solution.** $\tau = R C = 10^4 \cdot 10^{-6} = 0.01$ s $= 10$ ms. At $t = 5$ ms: $V_C = 10 (1 - e^{-5/10}) = 10 (1 - 0.6065) = 3.93$ V.

**Example 2 — RL transient.**

A $100$ mH inductor in series with a $10\ \Omega$ resistor is connected to a $5$ V source. Find the time constant and the current at $t = 5$ ms.

**Solution.** $\tau = L / R = 0.1 / 10 = 0.01$ s $= 10$ ms. $I_\infty = 5 / 10 = 0.5$ A. At $t = 5$ ms: $I = 0.5 (1 - e^{-0.5}) = 0.5 \cdot 0.3935 = 0.197$ A.

**Example 3 — Energy in an LC oscillator.**

A $1$ mH inductor and a $1\ \mu$F capacitor form an LC oscillator with $10$ V across the capacitor. Find the total energy, the peak current, and the resonant frequency.

**Solution.** Energy in the capacitor: $U = \frac{1}{2} C V^2 = 0.5 \cdot 10^{-6} \cdot 100 = 5 \cdot 10^{-5}$ J $= 50\ \mu$J. Peak current: $I_\text{peak} = V \sqrt{C / L} = 10 \sqrt{10^{-6} / 10^{-3}} = 10 \cdot \sqrt{10^{-3}} = 0.316$ A. Resonant frequency: $\omega_0 = 1 / \sqrt{L C} = 1 / \sqrt{10^{-3} \cdot 10^{-6}} = 10^{4.5} \approx 31.6\ \text{krad/s}$, $f_0 = \omega_0 / 2\pi \approx 5.03\ \text{kHz}$.

### Common pitfalls

- **Connecting an electrolytic capacitor backwards**: the capacitor may explode. Always check the polarity.
- **Using an inductor at high frequency**: the parasitic capacitance dominates, and the inductor behaves like a capacitor.
- **Forgetting the time constant**: the transient behaviour is governed by $\tau$, not by the individual $R$ and $C$ or $L$.
- **Confusing the charging and discharging curves**: the charging curve is $1 - e^{-t/\tau}$; the discharging curve is $e^{-t/\tau}$. They are different functions of $t$.
- **Using the wrong time constant for LC**: the resonant frequency is $1 / \sqrt{LC}$, not $L C$ or $L / C$.

### Key Ideas

- Resistors: dissipate energy; obey Ohm's law.
- Capacitors: store energy in an electric field; current is $C dV/dt$.
- Inductors: store energy in a magnetic field; voltage is $L dI/dt$.
- RC time constant: $\tau = R C$. RL time constant: $\tau = L / R$.
- LC resonant frequency: $\omega_0 = 1 / \sqrt{L C}$.
- The frequency response is described by complex impedances; the crossover frequency separates the low- and high-frequency regimes.

## Worked Examples

### Example 1 — Capacitor in a flash circuit

A photoflash uses a $100\ \mu$F capacitor charged to $300$ V and discharged through a xenon flash tube. Find the energy stored, the peak current if the discharge is a $1$ ms pulse, and the average power.

**Solution.** $U = \frac{1}{2} C V^2 = 0.5 \cdot 10^{-4} \cdot 9 \cdot 10^4 = 4.5$ J. Average power: $P = U / t = 4.5 / 10^{-3} = 4500$ W $= 4.5$ kW. The flash is brief but bright.

### Example 2 — Inductor in a switching regulator

A switching regulator uses a $100\ \mu$H inductor switched at $100$ kHz. Find the time constant if the load is $10\ \Omega$ and the ripple current.

**Solution.** Time constant: $\tau = L / R = 10^{-4} / 10 = 10^{-5}$ s $= 10\ \mu$s. The switching period is $10\ \mu$s, so the time constant is comparable to the period. The ripple current is approximately $V \cdot t / L$, of order $0.1$ A for typical voltages.

### Example 3 — Low-pass filter

A low-pass RC filter has $R = 1\ \text{k}\Omega$ and $C = 1\ \mu$F. Find the cutoff frequency.

**Solution.** $f_c = 1 / (2 \pi R C) = 1 / (2 \pi \cdot 10^3 \cdot 10^{-6}) \approx 159$ Hz. Frequencies above $159$ Hz are attenuated; frequencies below are passed.

## Common Misconceptions

- **"A capacitor blocks DC."** A capacitor blocks DC at steady state (after the transient), but allows a brief current at the moment of connection. The current flows until the capacitor is charged.
- **"An inductor passes DC."** An inductor passes DC at steady state, but opposes a change in current. The current builds up over the time constant.
- **"Capacitors and inductors are opposites."** They are duals: $C \leftrightarrow L$, $V \leftrightarrow I$, $Q \leftrightarrow \Phi$. The duality is the basis of many elegant proofs in circuit theory.
- **"Bigger capacitors are always better."** Larger capacitors have lower impedance at a given frequency, but also larger leakage, larger ESR, and larger physical size. The right capacitor depends on the application.
- **"Energy is lost in a capacitor or inductor."** Ideal capacitors and inductors store energy without loss. Real components have parasitic resistance (ESR for capacitors, winding resistance for inductors) that dissipates some energy.

## Connections

- RC and RL transients are the basis of the timing circuits, the filters, and the relaxation oscillators.
- The LC oscillator is the basis of the radio transmitter, the quartz oscillator, and many other resonant systems.
- The frequency response of RC and RL circuits is the foundation of the filter design and the AC analysis of the next module.
- The energy storage in capacitors and inductors is the basis of the switched-mode power supply and the electric vehicle.
- The Wheatstone bridge (from Lesson m1-l1) is a null measurement; the impedance bridge is the AC analogue.

## Quick Check

1. State the time constants of an RC and an RL circuit.
2. A $10\ \mu$F capacitor is charged through a $1\ \text{k}\Omega$ resistor from a $5$ V source. Find the voltage at $t = 5$ ms.
3. A $100$ mH inductor is connected in series with a $10\ \Omega$ resistor to a $5$ V source. Find the current at $t = 5$ ms.
4. A $1$ mH inductor and a $1\ \mu$F capacitor form an LC circuit. Find the resonant frequency.
5. State the rule for the energy stored in a capacitor and an inductor.

## Takeaway

- Resistors dissipate energy; capacitors and inductors store it.
- RC and RL transients are governed by the time constant $\tau$.
- LC circuits resonate at $\omega_0 = 1 / \sqrt{LC}$.
- The frequency response is described by complex impedances.
- The energy storage is the basis of many practical applications, from photoflashes to power supplies.
