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
lessonId: basic-electronics-m2-l3
lessonName: Measurement Instruments — Multimeter, Oscilloscope, Function Generator
lessonNumber: 5
moduleNumber: 2
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 45
releaseOrder: 5
prerequisites:
  - basic-electronics-m2-l2
learningObjectives:
  - Use a digital multimeter to measure voltage, current, and resistance.
  - Use an oscilloscope to display and analyse time-varying signals.
  - Use a function generator to produce test signals of controlled frequency and amplitude.
concepts:
  - Multimeter
  - Oscilloscope
  - Function generator
  - Time base
  - Trigger
  - AC/DC coupling
tags:
  - physics
  - electronics
  - measurement
  - oscilloscope
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
  - scenario
***

# Measurement Instruments — Multimeter, Oscilloscope, Function Generator

## Overview

Three instruments are the workhorses of every electronics laboratory: the digital multimeter (DMM) for DC and low-frequency AC measurements, the oscilloscope for time-varying signals, and the function generator for test signals. The lesson develops the operation of each, the typical measurements, the pitfalls, and the practical guidance for accurate readings. The lesson is the foundation of the laboratory work in every subsequent physics and electronics course; without these instruments, the work is guesswork. The lesson closes with a discussion of instrument calibration, ground loops, and the safe handling of measurement equipment.

## Learning Path

- **What you should already know**: the DC circuit analysis of Lesson m1-l1; the passive components of Lesson m1-l2; the diode of Lesson m2-l1; the transistor of Lesson m2-l2; the basic concepts of AC circuits.
- **What this lesson adds**: the operation of the DMM, the oscilloscope, and the function generator; the typical measurements; the pitfalls; the safe handling.
- **What later lessons this will unlock**: the build project of Lesson m3-1; the laboratory work in every subsequent course; the application of measurement techniques in research.

## Core Explanation

### The digital multimeter (DMM)

A **digital multimeter** is a hand-held instrument that measures voltage, current, and resistance (and often additional quantities: capacitance, frequency, diode forward voltage, continuity). Modern DMMs have a digital display with $3.5$ to $8.5$ digits of resolution and a basic accuracy of $0.1\%$ to $0.01\%$.

The DMM has four input jacks: a common (COM) jack, a voltage/resistance jack (V$\Omega$), a current jack (A or mA), and a high-current jack (10 A or 20 A). The leads are inserted into the appropriate jacks, and the dial is set to the desired quantity and range. The display shows the reading; the polarity is indicated automatically (negative readings are displayed with a minus sign).

**Voltage measurement**: connect the leads across the component; the DMM measures the potential difference. The input impedance is $10\ \text{M}\Omega$ or more, so the DMM does not load the circuit. AC voltage measurements use a true-RMS converter for accurate readings of non-sinusoidal waveforms.

**Current measurement**: break the circuit and connect the DMM in series. The DMM has a low input impedance (a shunt resistor) and drops a small voltage (the burden voltage, typically $100$ mV at full scale). Choose the range carefully: starting at the highest range and decreasing protects the DMM from overcurrent.

**Resistance measurement**: disconnect the component from the circuit (to avoid measuring the rest of the circuit in parallel). The DMM sources a small current and measures the voltage; the resistance is $V / I$. The test current is small (typically $1$ mA) to avoid heating the component.

**Continuity test**: a special mode that beeps when the resistance is below a threshold (typically $50\ \Omega$). Used to check for shorts and opens in cables and printed circuit boards.

**Diode test**: a special mode that sources a small current (typically $1$ mA) and measures the forward voltage. A silicon diode shows $0.5$–$0.7$ V; a germanium diode shows $0.2$–$0.3$ V; an open diode shows $0$ V (or overload); a shorted diode shows $0$ V.

### DMM pitfalls

- **Range selection**: choose the lowest range that does not overflow. The accuracy is best at full scale.
- **AC vs DC**: set the DMM to the correct mode. DC measurements of AC signals give the average, which is zero for symmetric AC; AC measurements of DC signals give zero.
- **True RMS**: for non-sinusoidal waveforms, a "true RMS" DMM is more accurate than an "average-responding" DMM (which assumes a sine wave and applies a correction factor).
- **Input protection**: the DMM has input protection (fuses, varistors) but is not indestructible. Exceeding the maximum input voltage or current can damage the DMM.
- **Loose connections**: a loose lead can give a fluctuating or incorrect reading. Make sure the leads are firmly connected.

### The oscilloscope

An **oscilloscope** (or "scope") is an instrument that displays a time-varying voltage on a screen. The horizontal axis is time; the vertical axis is voltage. Modern oscilloscopes are digital; they sample the input signal at a high rate (gigahertz in high-end models), convert to digital, and display the waveform on an LCD.

The basic controls of an oscilloscope:

- **Vertical scale** (volts/div): the voltage represented by each vertical division on the screen. Adjust to fit the signal.
- **Horizontal scale** (time/div): the time represented by each horizontal division. Adjust to fit the signal or zoom in on a feature.
- **Trigger**: the condition that starts a new sweep. The most common trigger is edge triggering: the scope triggers when the signal crosses a threshold (rising or falling edge). The trigger level is set by the user.
- **Coupling**: AC or DC. AC coupling blocks the DC component; DC coupling passes the entire signal. Use AC coupling to see small AC variations on a large DC offset.
- **Channels**: most oscilloscopes have $2$ or $4$ channels. Each channel can be displayed simultaneously, allowing the comparison of multiple signals.
- **Probe**: the connection from the circuit to the scope. Most scopes have $1\ \text{M}\Omega$ / $10$–$25$ pF inputs, and the probes are designed to match this impedance. A $10\times$ probe attenuates the signal by $10\times$ but increases the input impedance to $10\ \text{M}\Omega$, reducing the loading on the circuit.

### Oscilloscope measurements

The oscilloscope displays the waveform; the user extracts numerical information from the display.

- **Amplitude**: read the peak-to-peak or RMS voltage from the vertical scale.
- **Period**: read the period from the horizontal scale. The frequency is $f = 1 / T$.
- **Rise time**: the time for the signal to rise from $10\%$ to $90\%$ of its final value. The bandwidth of the scope must be sufficient: $f_\text{3dB} \approx 0.35 / t_\text{rise}$.
- **Phase**: the time difference between two channels, divided by the period, multiplied by $360°$. Used to measure the phase shift of a filter or amplifier.
- **Spectrum**: the Fourier transform of the waveform, displayed in the frequency domain. Most digital scopes have a built-in FFT.

### Oscilloscope pitfalls

- **Probe compensation**: a $10\times$ probe must be compensated to match the scope input. Use the probe's compensation adjustment (a small screw on the probe) to flatten the square wave displayed on the calibration terminal.
- **Bandwidth**: the scope's bandwidth must be at least $5\times$ the highest frequency in the signal; otherwise, the displayed waveform is distorted.
- **Aliasing**: if the sample rate is too low (less than $2\times$ the highest frequency, per the Nyquist criterion), the displayed waveform shows a false low-frequency component. Modern scopes have anti-aliasing filters.
- **Loading**: the scope's input impedance ($1\ \text{M}\Omega$ / $10$–$25$ pF) loads the circuit, especially at high frequencies. Use a $10\times$ probe to reduce the loading.
- **Ground loops**: connecting the scope's ground clip to a point in the circuit that is not at the same potential as the scope's ground can create a ground loop, which appears as noise or a DC offset on the display. Use the ground clip at a single point (typically the circuit's ground) and avoid using multiple grounds.

### The function generator

A **function generator** is an instrument that produces a periodic waveform of controllable frequency, amplitude, and shape. The common waveforms are sine, square, triangle, and ramp; some generators also produce pulse, arbitrary, and noise.

The basic controls:

- **Frequency**: the repetition rate of the waveform, in Hz, kHz, or MHz. Set by a numeric keypad or a rotary knob.
- **Amplitude**: the peak-to-peak or RMS voltage of the waveform. Some generators have separate controls for high and low impedance loads.
- **DC offset**: a DC voltage added to the waveform. Used to bias the output around a non-zero value.
- **Duty cycle** (for square and pulse): the fraction of the period during which the signal is high. Used to generate pulse-width-modulated signals.
- **Sweep**: a mode in which the frequency changes over time (linear or logarithmic). Used to measure the frequency response of a circuit.
- **Modulation**: a mode in which the output is modulated by an external signal (AM, FM, PM). Used in communication systems.

### Function generator output

The output of a function generator is typically a $50\ \Omega$ BNC connector. The output impedance is $50\ \Omega$; the amplitude is specified for a $50\ \Omega$ load. If the load is high impedance (e.g. an oscilloscope input), the amplitude is twice the specified value (because the $50\ \Omega$ output forms a voltage divider with the $50\ \Omega$ input). To get the specified amplitude into a high-impedance load, use a $50\ \Omega$ terminator at the function generator output.

### Function generator pitfalls

- **Output impedance**: the function generator has a $50\ \Omega$ output impedance; the amplitude is specified for a $50\ \Omega$ load. Mismatch affects the amplitude.
- **DC offset**: many function generators allow the DC offset to exceed the peak voltage, resulting in a clipped waveform. Keep the DC offset within the rated range.
- **Slew rate**: the function generator has a finite slew rate (the maximum rate of change of the output). At high frequencies or with fast edges, the slew rate limits the output.
- **Frequency accuracy**: the frequency accuracy is typically $0.1\%$ to $1\%$, sufficient for most purposes but not for precision measurements.
- **Distortion**: the function generator introduces some distortion (typically $0.1\%$ to $1\%$), especially at high frequencies or low amplitudes. For precision measurements, use a low-distortion source.

### Calibration

Instruments are calibrated to ensure accuracy. The calibration is performed by the manufacturer or by a calibration lab, and the certificate is valid for a specified period (typically $1$ year). The DMM, oscilloscope, and function generator are calibrated against traceable standards (e.g. a Josephson voltage standard for DC voltage, a rubidium frequency standard for time).

For the laboratory, the calibration of the instruments is usually verified at the start of the term by measuring known standards (a precision voltage reference, a precision resistor, a calibrated frequency source). Any deviation outside the rated accuracy is reported to the instructor.

### Safe handling

The instruments are expensive and the circuits are sensitive. Safe handling practices:

- **Power off before connecting**: disconnect the power before making or breaking connections.
- **Check the polarity**: reverse polarity can damage components and instruments.
- **Limit the current**: use current-limiting resistors or fuses to protect the circuit and the instrument.
- **Avoid static discharge**: integrated circuits are sensitive to static; use an antistatic wrist strap when handling them.
- **Use the correct range**: set the instrument to the highest range before connecting, then decrease to the appropriate range.
- **Don't exceed the input limits**: each instrument has maximum voltage and current ratings; exceeding them can damage the instrument.
- **Keep the work area clean**: a clean work area reduces the risk of shorts and other accidents.

### Worked examples

**Example 1 — DMM voltage measurement.**

A $5\ \text{V}$ source is connected to a DMM. The DMM reads $4.98$ V on the $10$ V range. What is the accuracy of the reading?

**Solution.** Typical DMM accuracy on the DC voltage range is $\pm(0.1\% \text{ of reading} + 2 \text{ digits})$. The reading is $4.98$ V, so the accuracy is $\pm(0.001 \cdot 4.98 + 0.02) = \pm 0.025$ V. The true value is $4.98 \pm 0.025$ V $= 4.955$ to $5.005$ V.

**Example 2 — Oscilloscope measurement of a sine wave.**

A $1$ kHz sine wave is displayed on the oscilloscope. The vertical scale is $1$ V/div; the waveform has $2.4$ divisions peak-to-peak. The horizontal scale is $0.2$ ms/div; one cycle has $5$ divisions. Find the amplitude, peak-to-peak voltage, and frequency.

**Solution.** Peak-to-peak voltage: $V_{pp} = 2.4 \cdot 1 = 2.4$ V. Amplitude: $V_p = V_{pp} / 2 = 1.2$ V. RMS voltage: $V_\text{rms} = V_p / \sqrt{2} = 0.85$ V. Period: $T = 5 \cdot 0.2 = 1$ ms. Frequency: $f = 1 / T = 1$ kHz. ✓

**Example 3 — Function generator with a $50\ \Omega$ load.**

A function generator is set to a $1$ kHz sine wave, $1$ V amplitude, $50\ \Omega$ output impedance. The load is a $50\ \Omega$ resistor. Find the voltage across the load.

**Solution.** The output is a Thevenin equivalent with $V_\text{th} = 1$ V (specified amplitude) and $R_\text{th} = 50\ \Omega$. The load voltage is $V_\text{load} = V_\text{th} \cdot R_L / (R_\text{th} + R_L) = 1 \cdot 50 / 100 = 0.5$ V. (The function generator specifies the open-circuit voltage; the loaded voltage is half.) If the load is high impedance (e.g. $1\ \text{M}\Omega$), $V_\text{load} \approx 1$ V. To get $1$ V into a $50\ \Omega$ load, set the function generator to $2$ V (open-circuit); the loaded voltage is then $1$ V.

### Common pitfalls

- **Wrong range**: an incorrect range can give an inaccurate reading or damage the instrument.
- **Wrong mode**: AC vs DC, voltage vs current, resistance vs continuity. Set the instrument correctly.
- **Bad connections**: a loose lead or a dirty contact can give a fluctuating or incorrect reading.
- **Probe compensation**: an uncompensated probe distorts the waveform.
- **Ground loops**: multiple grounds can introduce noise.
- **Static discharge**: ESD can damage sensitive components; use an antistatic wrist strap.

### Key Ideas

- The DMM measures DC and low-frequency AC voltage, current, and resistance.
- The oscilloscope displays time-varying voltages; the user extracts amplitude, period, and other parameters from the display.
- The function generator produces test signals of controllable frequency, amplitude, and shape.
- The instruments are calibrated against traceable standards; the calibration is valid for a specified period.
- Safe handling: power off before connecting, check polarity, limit current, avoid static, use the correct range.

## Worked Examples

### Example 1 — Frequency measurement

A waveform on the oscilloscope has $2.5$ cycles in $5$ horizontal divisions at $0.1$ ms/div. Find the frequency.

**Solution.** Period: $T = 5 / 2.5 \cdot 0.1 = 0.2$ ms. Frequency: $f = 1 / T = 5$ kHz.

### Example 2 — RMS voltage of a square wave

A square wave has peak-to-peak voltage $2$ V (i.e. $\pm 1$ V) and frequency $1$ kHz. Find the RMS voltage.

**Solution.** The RMS voltage of a square wave is the peak voltage: $V_\text{rms} = V_p = 1$ V. (For a sine wave, $V_\text{rms} = V_p / \sqrt{2}$.)

### Example 3 — Burden voltage of a DMM

A DMM in the $10$ mA current range has a burden voltage of $100$ mV at full scale. Find the burden voltage at $5$ mA.

**Solution.** The burden voltage is proportional to the current (the burden is a fixed resistor). At full scale ($10$ mA), the burden is $100$ mV; the burden resistance is $R = 100 \text{ mV} / 10 \text{ mA} = 10\ \Omega$. At $5$ mA, the burden is $V = 5 \text{ mA} \cdot 10\ \Omega = 50$ mV.

## Common Misconceptions

- **"The DMM measures everything."** The DMM measures voltage, current, and resistance, with limited bandwidth and accuracy. For high-frequency signals, use an oscilloscope.
- **"The oscilloscope shows the true signal."** The oscilloscope has finite bandwidth, sample rate, and input impedance. The displayed signal is a faithful representation only if the scope is appropriate for the signal.
- **"The function generator has zero output impedance."** The output impedance is typically $50\ \Omega$; the amplitude is specified for a $50\ \Omega$ load.
- **"Calibration is permanent."** Calibration expires (typically after $1$ year) and must be repeated. Out-of-calibration instruments give inaccurate readings.
- **"The instruments are foolproof."** They are not. Exceeding the input ratings can damage the instrument.

## Connections

- The instruments are the foundation of every laboratory course in the programme: physics, electronics, optics, control systems, communications.
- The DMM is the basic tool for DC measurements; the oscilloscope is the basic tool for AC and transient measurements; the function generator is the basic tool for testing circuits.
- The instruments are calibrated against national standards; the calibration chain links the laboratory to the SI.
- The instruments are used in research and industry; the same principles apply to high-end instruments (spectrum analysers, network analysers, digitizers).

## Quick Check

1. State the three quantities a DMM measures.
2. What is the input impedance of a typical oscilloscope? Of a $10\times$ probe?
3. How do you set a function generator to produce a $1$ kHz sine wave with a $1$ V amplitude into a $50\ \Omega$ load?
4. What is a "burden voltage" and why does it matter?
5. Why is probe compensation important?

## Takeaway

- The DMM, oscilloscope, and function generator are the workhorses of every electronics laboratory.
- The DMM measures DC and low-frequency AC quantities; the oscilloscope displays time-varying signals; the function generator produces test signals.
- The instruments have limits (bandwidth, accuracy, input impedance); use them within the limits.
- Calibration is essential; out-of-calibration instruments give inaccurate readings.
- Safe handling: power off before connecting, check polarity, limit current, avoid static, use the correct range.
