***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: physics
subjectName: Physics
courseId: communication-electronics-lab
courseName: Communication Electronics Lab
moduleId: communication-electronics-lab-module-1
moduleName: Modulation, Filters, and Signal Analysis
lessonId: communication-electronics-lab-m1-l6
lessonName: Fault Diagnosis, Report Writing, and the Viva
lessonNumber: 6
moduleNumber: 1
semesterNumber: 4
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - communication-electronics-lab-m1-l5
learningObjectives:
  - Diagnose common faults in communication electronics circuits (open circuits, short circuits, incorrect component values, power supply issues).
  - Use a systematic approach to fault diagnosis: divide and conquer, signal injection, signal tracing.
  - Write a complete lab report for a communication electronics experiment using the canonical structure.
  - Anticipate and answer viva-style questions about the five communication electronics experiments.
concepts:
  - Fault diagnosis
  - Open circuit
  - Short circuit
  - Signal injection
  - Signal tracing
  - Half-splitting method
  - Lab report structure
  - Viva preparation
tags:
  - physics
  - laboratory
  - communication
  - fault-diagnosis
  - report-writing
  - viva
sourceType: authored-courseware
assessmentHints:
  - Open circuit: a broken connection; the signal cannot pass.
  - Short circuit: an unintended connection; the signal is diverted to ground.
  - Half-splitting: divide the circuit in half; determine which half has the fault; repeat.
status: in-review
***

# Fault Diagnosis, Report Writing, and the Viva

## Overview

A communication electronics circuit is a chain of functional blocks: modulator, amplifier, filter, demodulator, power supply. A fault in any block can disrupt the entire system. Fault diagnosis is the art of locating the fault efficiently: starting from the symptoms, narrowing down the possibilities, and identifying the root cause. The standard approach is "half-splitting": divide the system in half, determine which half has the fault, and repeat.

This lesson covers the common faults in communication electronics circuits, the systematic approach to fault diagnosis (half-splitting, signal injection, signal tracing), a worked example of a complete lab report, and the viva questions an examiner is likely to ask across the five communication electronics experiments.

## Learning Path

1. **Identify the symptoms** — what is the observed behaviour? (No output, distorted output, low amplitude, high noise, etc.)
2. **Apply half-splitting** — measure at the midpoint of the system; determine whether the fault is in the first half or the second half.
3. **Use signal injection and tracing** — inject a test signal at various points; trace the signal through the system; identify where it disappears or distorts.
4. **Identify the root cause** — open circuit, short circuit, incorrect component value, power supply issue, etc.
5. **Write a complete report** — for one of the communication electronics experiments (e.g. the AM signal), produce a full lab report.
6. **Viva rehearsal** — work through the viva questions with a partner.

## Core Explanation

### Common Faults

#### Open Circuit

A break in a connection — a wire not soldered, a broken trace, a faulty switch, a damaged connector. The signal cannot pass; the output is zero or severely attenuated.

Symptoms:
- Zero output at a point where there should be a signal.
- Power supply voltage present at one end of a wire but not the other.
- A resistor or capacitor in the circuit is not carrying the expected current.

#### Short Circuit

An unintended connection — a solder bridge, a damaged insulation, a faulty component. The signal is diverted to ground or to another part of the circuit.

Symptoms:
- Output is zero, or much smaller than expected, even though the input is correct.
- A power supply is overloaded (the current is higher than expected).
- A resistor is hot to the touch (carrying more current than its rating).

#### Incorrect Component Value

A component is the wrong value — a 1 kΩ resistor instead of a 10 kΩ, a 100 nF capacitor instead of a 10 nF, an inductor with the wrong inductance. The circuit may still work but with the wrong parameters.

Symptoms:
- The circuit works but with the wrong gain, the wrong frequency response, the wrong modulation index.
- A measurement gives a value that is consistently off by a known factor.

#### Power Supply Issue

A power supply is missing, the wrong voltage, or the wrong polarity.

Symptoms:
- The circuit does not work at all.
- A component is hot (over-voltage or wrong polarity).
- A reference voltage is incorrect.

### Half-Splitting Method

The half-splitting method is the most efficient way to locate a fault in a system with a chain of blocks. The procedure is:

1. **Identify the chain of blocks** — e.g. input → modulator → amplifier → filter → demodulator → output.
2. **Measure at the midpoint** — e.g. between the modulator and the amplifier. Is the signal correct at this point?
3. **If correct, the fault is in the second half.** Move to the midpoint of the second half and repeat.
4. **If incorrect, the fault is in the first half.** Move to the midpoint of the first half and repeat.
5. **Continue until the fault is localised to a single block.**

For a chain of N blocks, the half-splitting method requires at most log_2 N measurements to localise the fault to a single block.

### Signal Injection and Tracing

**Signal injection:** apply a test signal at various points in the circuit; observe the output. If the output is correct when the signal is injected at point X, the fault is upstream of X.

**Signal tracing:** apply a known input; measure the signal at various points; identify where the signal becomes incorrect.

Both methods are useful; signal injection is faster for digital circuits, signal tracing is faster for analog circuits.

### Common Diagnostic Instruments

- **Multimeter:** measure voltage, current, resistance. Essential for power supply and basic continuity checks.
- **Oscilloscope:** measure waveforms in the time and frequency domains. Essential for analog signal tracing.
- **Signal generator:** inject a known signal. Useful for signal injection and for testing individual blocks.
- **Spectrum analyser:** measure the frequency spectrum. Essential for modulated signals and for noise measurements.
- **Logic analyser:** measure digital signals. Useful for digital circuits.

### Worked Example: Fault Diagnosis

A communication electronics system consists of: input → AM modulator → RF amplifier → envelope detector → audio amplifier → output. The output is zero, although the input is correct.

1. **Check the power supplies** — measure the supply voltages at each block. All correct.
2. **Half-split at the audio amplifier input.** Is there an audio signal at the input of the audio amplifier?
   - If yes, the fault is in the audio amplifier. Check the audio amplifier's gain, the speaker, the connections.
   - If no, the fault is upstream. Continue.
3. **Half-split at the envelope detector input.** Is there a modulated RF signal at the input of the envelope detector?
   - If yes, the fault is in the envelope detector. Check the diode, the RC time constant, the connections.
   - If no, the fault is upstream. Continue.
4. **Half-split at the RF amplifier input.** Is there a modulated RF signal at the input of the RF amplifier?
   - If yes, the fault is in the RF amplifier. Check the transistor, the bias, the gain.
   - If no, the fault is in the modulator. Check the modulator's input, the carrier, the connections.
5. **Identify the root cause and fix it.**

In this example, three measurements localise the fault to a single block. The time taken is ~ 10–15 minutes, much faster than checking every component.

### Worked Example: Lab Report for AM Modulation

**Title:** Amplitude modulation: generation, modulation index measurement, and demodulation.

**Abstract:** An AM signal was generated by modulating a 100 kHz carrier with a 1 kHz message. The modulation index was measured from the envelope (m = 0.50 ± 0.02) and from the spectrum (m = 0.51 ± 0.02); the two methods agree. The signal was demodulated with an envelope detector; the recovered message had a frequency of 1.00 ± 0.01 kHz and an amplitude of 0.50 ± 0.02 V, in agreement with the original message.

**Theory:** [AM signal equation: s(t) = A_c [1 + m cos(2π f_m t)] cos(2π f_c t). Modulation index from the envelope: m = (A_max − A_min) / (A_max + A_min). Modulation index from the spectrum: m = 2 √(P_s / P_c). Envelope detector: diode + RC low-pass filter; τ = RC; must satisfy 1/f_c ≪ τ ≪ 1/f_m.]

**Apparatus:** AM modulator (MC1496); function generators (1 kHz message, 100 kHz carrier); oscilloscope (100 MHz, with FFT); envelope detector (1N4148 diode, 10 kΩ resistor, 1 nF capacitor); power supply (±12 V).

**Procedure:** [As in the lab manual. The AM signal was generated with the modulator; the modulation index was measured by both methods; the signal was demodulated; the recovered message was observed on the scope.]

**Data:**

| Quantity | Value |
|----------|------:|
| A_max (scope) | 1.50 V |
| A_min (scope) | 0.50 V |
| m (envelope) | 0.50 |
| P_c (spectrum) | − 10.0 dBm |
| P_s (spectrum, each) | − 22.0 dBm |
| m (spectrum) | 0.50 |
| f_m (recovered) | 1.00 kHz |
| V_m (recovered) | 0.50 V |

**Analysis:** [Comparison of the two methods of measuring m; verification of the recovered message.]

**Discussion:** The two methods of measuring m agree to within the experimental uncertainty. The dominant uncertainty in the envelope method is the reading of A_max and A_min on the scope (~ 0.05 V each); the uncertainty in m is ~ 0.02. The dominant uncertainty in the spectrum method is the noise floor of the spectrum analyser (~ 1 dB); the uncertainty in m is ~ 0.02.

The envelope detector recovered the message with a small carrier ripple (~ 5 % of the message amplitude). The ripple could be reduced by increasing the time constant, but at the cost of reduced bandwidth. A compromise is τ = 10 μs, which gives a carrier ripple of ~ 1 %.

**Conclusion:** The AM signal was generated, the modulation index was measured by two methods, and the signal was successfully demodulated. The two methods give m = 0.50 ± 0.02, in agreement.

**References:** [Lab manual; any textbook chapters on AM; any external sources.]

## Key Ideas

- Fault diagnosis: locate the fault efficiently using half-splitting, signal injection, and signal tracing.
- Common faults: open circuit, short circuit, incorrect component value, power supply issue.
- Half-splitting: requires at most log_2 N measurements to localise the fault to a single block in a chain of N blocks.
- The lab report is the formal record of the measurement, the analysis, the uncertainty, and the conclusion.
- The viva is the test of understanding of the experiment, not just the formulas.

## Common Misconceptions

- **"The fault is always the most obvious component."** Not necessarily. The most obvious component (e.g. the one that looks burnt) may be the victim, not the cause. A short circuit elsewhere can cause a component to overheat.
- **"Half-splitting requires disconnecting parts of the circuit."** No, it requires measuring at the midpoint with a scope or multimeter. The circuit is left intact.
- **"Signal injection is the same as signal tracing."** Signal injection applies a test signal at a point; signal tracing measures the signal at various points with a normal input. The two are complementary.
- **"The oscilloscope is the only diagnostic tool."** A multimeter (for voltage and continuity), a signal generator (for signal injection), and a spectrum analyser (for frequency-domain measurements) are also essential.
- **"Once the fault is found, the repair is trivial."** Sometimes yes, sometimes no. A short circuit may be a solder bridge that is easy to fix, or it may be a damaged component that requires replacement. A systematic approach to the repair is also important.

## Connections

- **Communication Electronics (Sem 4 theory).** Fault diagnosis is the practical skill that complements the theoretical understanding. The same systematic approach is used in any electronic system.
- **Engineering.** Every electronic product is designed for diagnosability: test points, status indicators, built-in self-test (BIST). The principles of half-splitting, signal injection, and signal tracing are universal.
- **Computer science.** Fault diagnosis in software uses the same principles: divide and conquer, binary search, logging, tracing. The same mathematical framework (information theory) governs the efficiency of fault diagnosis.
- **Medicine.** Medical diagnosis uses the same approach: identify the symptoms, narrow down the possibilities, locate the cause. The "differential diagnosis" is the medical equivalent of half-splitting.
- **Quality control.** Fault diagnosis is at the heart of quality control: every manufactured product is tested, and the faults are analysed to identify the root cause. The same techniques (Pareto charts, fishbone diagrams, 5-Whys) are used in both electronics manufacturing and software development.

## Quick Check

1. What are the four common types of faults in electronic circuits?
2. Describe the half-splitting method. How many measurements does it require for a chain of N blocks?
3. What is the difference between signal injection and signal tracing?
4. A circuit has input → A → B → C → output. The output is zero. You measure at B's output and see a correct signal. Where is the fault?
5. You measure at A's output and see a zero signal. The input is correct. Where is the fault?
6. A resistor is hot to the touch. What does this suggest?
7. A circuit works but the gain is 10× too high. What is the likely fault?
8. A circuit works but the frequency response is wrong (the cutoff frequency is 10× too low). What is the likely fault?

## Takeaway

Fault diagnosis is the practical skill that complements the theoretical understanding of communication electronics. The half-splitting method, signal injection, and signal tracing are the three main techniques. The lab's discipline — systematic approach, careful measurement, hypothesis testing, repair verification — is the same discipline that runs through every engineering discipline. The lab report is the formal record; the viva is the test of understanding. The same systematic approach to fault diagnosis is used in every electronic system, from a simple AM receiver to a complex digital communication system. The principles are universal; the specific tools vary.
