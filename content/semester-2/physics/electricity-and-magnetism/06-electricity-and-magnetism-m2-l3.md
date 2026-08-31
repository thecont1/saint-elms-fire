***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: electricity-and-magnetism
courseName: Electricity and Magnetism
moduleId: electricity-and-magnetism-module-2
moduleName: Current and Circuits
lessonId: electricity-and-magnetism-m2-l3
lessonName: RC Circuits and Transient Response
lessonNumber: 6
moduleNumber: 2
semesterNumber: 2
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 6
prerequisites:
  - electricity-and-magnetism-m2-l1
  - differential-equations-m1-l1
learningObjectives:
  - Write and solve the differential equation for an RC circuit.
  - Identify the time constant $\tau = RC$ and its physical meaning.
  - Describe charging and discharging transients.
  - Use the solution to analyse practical RC circuits.
concepts:
  - RC circuit
  - Time constant
  - Charging transient
  - Discharging transient
  - Steady state
  - Differential equation of a circuit
tags:
  - physics
  - electromagnetism
  - rc-circuits
  - transients
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# RC Circuits and Transient Response

## Overview
Resistors and capacitors together make a circuit whose current and voltage change in time. When a switch closes or a step voltage is applied, the system does not respond instantly — it approaches its new equilibrium with an exponential time constant $\tau = RC$. This lesson is the first time-dependent circuit analysis in the course, and it is also the first concrete example of an *exponential relaxation* process, which appears in thermal cooling, radioactive decay, and first-order chemical kinetics.

## Learning Path
- What you should already know: capacitor behaviour $Q = CV$, Ohm's law, basic first-order ODEs.
- What this lesson adds: the differential equation for an RC circuit, its solution, and the concept of a time constant.
- What it unlocks: RL circuits, RLC circuits (oscillations and resonance), and the broader theory of linear systems in *Differential Equations*.

## Core Explanation
**The basic RC circuit.** A resistor $R$ in series with a capacitor $C$, connected to a DC voltage source $V_s$ through a switch that closes at $t = 0$. The capacitor is initially uncharged.

At $t = 0$, the switch closes. Kirchhoff's voltage law around the loop gives

$$V_s = I R + V_C,$$

where $V_C$ is the voltage across the capacitor. The current charges the capacitor: $I = dQ/dt = C \, dV_C/dt$. Substituting:

$$V_s = RC \frac{dV_C}{dt} + V_C.$$

This is a first-order linear ODE for $V_C(t)$.

**Charging solution.** The general solution is

$$V_C(t) = V_s + A e^{-t/RC}.$$

The constant $A$ is set by the initial condition $V_C(0) = 0$ (uncharged), giving $A = -V_s$. So

$$V_C(t) = V_s (1 - e^{-t/\tau}), \quad \tau = RC.$$

The current is $I(t) = (V_s/R) e^{-t/\tau}$, peaking at $V_s/R$ when the switch closes and decaying exponentially.

**Discharging.** Now disconnect the source and let the capacitor discharge through $R$. The KVL equation becomes $0 = IR + V_C$, so $RC \, dV_C/dt = -V_C$, with solution

$$V_C(t) = V_0 e^{-t/\tau}, \quad I(t) = -(V_0/R) e^{-t/\tau}.$$

The negative sign means the current flows in the opposite direction (the capacitor is the source).

**Time constant.** $\tau = RC$ is the time for the capacitor to reach $1 - 1/e \approx 63.2\%$ of its final value (during charging) or to fall to $1/e \approx 36.8\%$ of its initial value (during discharging). After $5\tau$, the transient is essentially complete ($<1\%$ remaining).

**Physical meaning of the time constant.** During the first time interval $\tau$, the charge that flows is enough to fill the capacitor to about $63\%$. Intuitively, a larger $R$ slows the current (less charge per second) and a larger $C$ requires more charge to fill (more time to charge up).

**Energy considerations.** During charging, the source supplies energy $W_s = V_s Q = V_s^2 C$. The energy stored in the capacitor is $\tfrac{1}{2} C V_s^2$. Half the supplied energy is stored; the other half is dissipated in the resistor, regardless of $R$. This is independent of $R$ because a larger $R$ means a smaller current but a longer time — the product $I^2 R \cdot t$ comes out the same.

**Step response of an RC filter.** A series RC circuit driven by a time-varying source $V_{\text{in}}(t)$ has the transfer function (in the frequency domain)

$$H(\omega) = \frac{V_C}{V_{\text{in}}} = \frac{1}{1 + i \omega RC}.$$

The magnitude $|H|$ rolls off as $1/\omega$ for $\omega \gg 1/RC$. This is the **low-pass filter** behaviour: low frequencies pass, high frequencies are attenuated. The cutoff frequency is $f_c = 1/(2\pi RC)$.

**Square-wave response.** If the input is a square wave, the output across the capacitor is a series of exponential charging and discharging transients. The output looks like a triangle wave if $T \gg \tau$ (long period), and a saw-tooth-like wave if $T \approx \tau$.

**Higher-order circuits.** Adding an inductor $L$ makes an RLC circuit, governed by a second-order ODE. The transient response is exponential decay (overdamped), exponential decay with oscillation (underdamped), or pure oscillation (undamped, no $R$). The natural frequency is $\omega_0 = 1/\sqrt{LC}$ and the quality factor is $Q = \omega_0 L / R$.

## Key Ideas
- KVL for an RC circuit: $V_s = RC \, dV_C/dt + V_C$.
- Charging: $V_C(t) = V_s(1 - e^{-t/RC})$.
- Discharging: $V_C(t) = V_0 e^{-t/RC}$.
- Time constant $\tau = RC$ sets the timescale of the transient.
- A series RC circuit is a low-pass filter with cutoff $f_c = 1/(2\pi RC)$.

## Worked Examples
**Example 1 — Time constant of a real capacitor.** A $100\ \mu\text{F}$ capacitor in series with a $10\text{ k}\Omega$ resistor: $\tau = 10^4 \times 10^{-4} = 1\text{ s}$. After $5\text{ s}$, the transient is essentially done.

**Example 2 — Energy balance.** A $1000\ \mu\text{F}$ capacitor is charged to $100\text{ V}$ through a $10\ \Omega$ resistor. Find the energy supplied by the source, the energy stored in the capacitor, and the energy dissipated in the resistor.
Energy supplied: $W_s = V Q = V_s \cdot C V_s = C V_s^2 = 10^{-3} \times 10^4 = 10\text{ J}$.
Energy stored: $\tfrac{1}{2} C V_s^2 = 5\text{ J}$.
Energy dissipated: $10 - 5 = 5\text{ J}$. As predicted, half the energy is dissipated in the resistor.

**Example 3 — Low-pass filter.** A series RC circuit with $R = 1\text{ k}\Omega$ and $C = 100\text{ nF}$ has cutoff frequency $f_c = 1/(2 \pi R C) = 1/(2 \pi \times 10^3 \times 10^{-7}) \approx 1592\text{ Hz}$. A $100\text{ Hz}$ audio signal passes with little attenuation; a $100\text{ kHz}$ signal is attenuated by about $100000/1592 \approx 63\times$ in voltage ($-36\text{ dB}$).

## Common Misconceptions
- **"The capacitor charges instantaneously through a wire."** No — even with no resistor in series, there is always some resistance, and the RC time constant determines how fast. An "instantaneous" charge requires $\tau = 0$, which needs $R = 0$ and is unphysical.
- **"The time constant is the time to fully charge."** The capacitor charges asymptotically. After $\tau$, it is $63\%$ charged; after $5\tau$, it is $>99\%$ charged. Full charge takes infinite time.
- **"Half the energy is always lost in the resistor."** This is true for a single capacitor charged through a resistor from a fixed voltage source. The same energy is dissipated regardless of $R$ — counterintuitive but true.
- **"RC filters are DC blockers."** The series RC passes DC and blocks high frequencies. The parallel RC (output across the resistor) blocks DC and passes high frequencies — a high-pass filter.

## Connections
The first-order linear ODE for an RC circuit is the same as for a cooling body (Newton's law of cooling), for radioactive decay, and for a first-order chemical reaction. The exponential time dependence is universal for "one-step" relaxation. The frequency-domain description of the filter is the same Fourier-transform language used in *Differential Equations* and in signal processing. The RLC extension is the basis for tuned circuits in radios and for mechanical resonance in *Waves and Optics*.

## Quick Check
1. Write the differential equation for the charge on a capacitor in a series RC circuit driven by a step voltage.
2. What is the time constant of a circuit with $R = 4.7\text{ k}\Omega$ and $C = 220\ \mu\text{F}$?
3. After how many time constants is a discharging capacitor at $1\%$ of its initial voltage?
4. Why is half the energy dissipated in the resistor during charging, regardless of $R$?
5. A series RC circuit with $R = 1\text{ k}\Omega$ and $C = 1\ \mu\text{F}$ is driven by a $1\text{ kHz}$ square wave of amplitude $5\text{ V}$. Estimate the shape of the output across the capacitor.

## Takeaway
- The RC circuit obeys $V_s = RC \, dV_C/dt + V_C$.
- Charging: $V_C(t) = V_s(1 - e^{-t/RC})$; discharging: $V_C(t) = V_0 e^{-t/RC}$.
- The time constant $\tau = RC$ sets the transient timescale.
- A series RC is a low-pass filter with cutoff $f_c = 1/(2\pi RC)$.
- Half the supplied energy is always dissipated in the resistor during charging.
