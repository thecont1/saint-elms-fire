***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: basic-electronics
courseName: Basic Electronics
moduleId: basic-electronics-module-3
moduleName: Build, Troubleshooting, and Project
lessonId: basic-electronics-m3-l1
lessonName: Build Project and Troubleshooting
lessonNumber: 6
moduleNumber: 3
semesterNumber: 1
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - basic-electronics-m2-l3
learningObjectives:
  - Build a complete electronic circuit on a breadboard, following a schematic.
  - Use a multimeter, oscilloscope, and function generator to test and debug the circuit.
  - Apply systematic troubleshooting techniques to find and fix faults.
concepts:
  - Breadboard
  - Schematic reading
  - Soldering (optional)
  - Systematic debugging
  - Half-splitting
  - Documentation
tags:
  - physics
  - electronics
  - build
  - troubleshooting
sourceType: authored-courseware
assessmentHints:
  - short-answer
  - problem-solving
  - scenario
  - practical
***

# Build Project and Troubleshooting

## Overview

The capstone of the Basic Electronics sequence is a build-and-test project. The lesson guides the student through building a small electronic circuit on a breadboard, using the components and instruments introduced in the previous lessons. The lesson covers reading schematics, using a breadboard, soldering (optional), and systematic troubleshooting. The lesson is the foundation of the laboratory work in every subsequent electronics course; without the ability to build and debug, the theory is incomplete. The lesson closes with a discussion of the importance of documentation and the safety considerations of working with mains voltage.

## Learning Path

- **What you should already know**: the DC circuit analysis of Lesson m1-l1; the passive components of Lesson m1-l2; the diode of Lesson m2-l1; the transistor of Lesson m2-l2; the measurement instruments of Lesson m2-l3.
- **What this lesson adds**: reading schematics; using a breadboard; systematic troubleshooting; the safety considerations; the documentation practices.
- **What later lessons this will unlock**: the laboratory work in every subsequent course; the build project of the next courses; the practical application of electronic design.

## Core Explanation

### Reading schematics

A **schematic** is a symbolic representation of a circuit. The standard symbols:

- **Resistor**: a rectangle (American) or a zig-zag (European). The value is written next to the symbol (e.g. "1 k$\Omega$").
- **Capacitor**: two parallel lines (non-polarised) or a line and a curved line (polarised). The value is written next to the symbol (e.g. "100 nF" or "10 $\mu$F").
- **Inductor**: a series of loops. The value is written next to the symbol (e.g. "10 mH").
- **Diode**: a triangle with a line at the cathode. The cathode is the line; the anode is the triangle. The part number is written next to the symbol (e.g. "1N4148").
- **Transistor** (BJT): a circle with three leads (base, collector, emitter). The part number is written next to the symbol (e.g. "2N3904").
- **Transistor** (MOSFET): a rectangle with three leads (gate, drain, source). The part number is written next to the symbol (e.g. "2N7000").
- **Ground**: a triangle (chassis ground) or three horizontal lines (earth ground). The ground symbol is the reference for all voltages in the circuit.
- **Supply**: a circle with "+" and "-" or an arrow pointing up. The supply voltage is written next to the symbol (e.g. "+12 V").
- **Source** (signal): a circle with a sine wave or a label. The source type is written next to the symbol (e.g. "1 kHz, 1 V").
- **Output**: a circle or a line with an arrow. The output is the signal extracted from the circuit.

Schematics are read from left to right (input on the left, output on the right) and from top to bottom (positive supply at the top, ground at the bottom). The connections are shown by lines; dots indicate a connection, and uncrossed lines indicate no connection.

### The breadboard

A **breadboard** (or protoboard) is a reusable platform for prototyping electronic circuits. It consists of a plastic block with holes that are connected internally in a specific pattern:

- The top and bottom rows (usually marked with red and blue lines) are connected horizontally and are used for power and ground.
- The central area has two columns of holes on each side of a central gap; each column is connected vertically in groups of $5$ holes. The central gap is for inserting integrated circuits (ICs), which have pins on both sides.

The connections are made by inserting component leads into the holes and using jumper wires to connect the rows. The breadboard allows rapid prototyping without soldering; the components can be inserted and removed easily.

The internal connections of a typical breadboard:

```
+ - - - - - - - - - - - - - - +    (red, + supply)
. a b c d e   f g h i j k l m n o .    (top rows, vertical groups of 5)
. a b c d e   f g h i j k l m n o .    (bottom rows, vertical groups of 5)
- - - - - - - - - - - - - - -    (blue, ground)
```

### Common breadboard mistakes

- **Inserting components in the wrong rows**: a component in row $a$–$e$ is connected to other components in the same column on the same side of the central gap. A component in row $f$–$j$ is connected to other components in the same column on the other side. The central gap separates the two sides.
- **Connecting power and ground incorrectly**: the red and blue rows are the power and ground rails. Connecting them with a wire creates a short circuit.
- **Forgetting the central gap**: the central gap is for ICs. A component placed across the gap is not connected to anything else on either side.
- **Loose connections**: a loose lead can give a flaky or intermittent connection. Push the leads firmly into the breadboard.

### Soldering (optional)

For permanent circuits, the components are **soldered** to a printed circuit board (PCB) or a perfboard. Soldering uses a heated iron to melt a lead-tin alloy (solder) around the joint between the component lead and the board. A good solder joint is shiny and smooth; a cold joint (insufficient heat) is dull and brittle.

Soldering safety:

- **Ventilation**: solder fumes contain lead (in leaded solder) and rosin (in the flux); use a fume extractor or work in a well-ventilated area.
- **Hot iron**: the iron tip is at $300$–$400$°C; do not touch the tip or the molten solder.
- **Eye protection**: wear safety glasses to protect against solder splashes.
- **Lead-free solder**: lead-free solder (e.g. SAC305) is preferred for new designs to avoid lead exposure.

### The build project

The build project is a small electronic circuit that the student builds on a breadboard, tests with the instruments, and demonstrates. The project should be:

- **Substantive but tractable**: a few hours of work, not a week.
- **Functional**: the circuit should do something measurable (light an LED, amplify a signal, generate a tone).
- **Documented**: the schematic, the bill of materials, the test procedure, and the test results are recorded.
- **Verified**: the test results are compared to the expected behaviour.

A suggested project: a **transistor audio amplifier**. The circuit consists of:

- A signal source (e.g. a function generator or a microphone with a pre-amplifier).
- A coupling capacitor to remove the DC bias.
- A common-emitter amplifier stage with a BJT.
- A bias network (voltage-divider bias).
- A coupling capacitor to the output.
- A load (a speaker or a resistive load for testing).

The student builds the circuit on a breadboard, tests it with the function generator and oscilloscope, and measures the voltage gain, the frequency response, and the distortion.

### Systematic troubleshooting

When the circuit does not work, **systematic troubleshooting** is the key to finding the fault quickly. The approach:

1. **Check the power supply**: is the supply on? Is the voltage correct? Is the current limit set correctly?
2. **Check the connections**: are all the connections correct? Are any wires loose or shorted?
3. **Check the components**: are all the components in the correct orientation? Are any components damaged?
4. **Check the signal**: is the input signal present? Is the output signal what you expect?
5. **Half-splitting**: divide the circuit in half and test each half. If the first half works, the fault is in the second half; if the first half does not work, narrow further.

### The half-splitting technique

**Half-splitting** is the most efficient troubleshooting technique. The idea: divide the circuit in half and test each half. If the first half works, the fault is in the second half; if the first half does not work, narrow further.

For example, in a two-stage amplifier, measure the signal at the output of the first stage. If the signal is correct, the fault is in the second stage; if the signal is incorrect, the fault is in the first stage. Then narrow further by testing the input and output of the first stage.

The technique can be applied to any circuit: identify a midpoint, test the signal at the midpoint, and narrow down the fault.

### Common faults

- **Open circuit**: a wire is broken or a component is not connected. The signal is interrupted.
- **Short circuit**: a wire is connected to the wrong place, or a component is shorted. The signal is bypassed.
- **Wrong component**: a component of the wrong value is used, or a component is inserted backwards. The circuit does not behave as expected.
- **Damaged component**: a component is damaged by overcurrent, overvoltage, or static. The circuit does not work, and the component may be hot or smell burnt.
- **Loose connection**: a wire is not firmly inserted in the breadboard, or a solder joint is cold. The circuit is intermittent.

### Test equipment for troubleshooting

The instruments of the previous lesson are the tools for troubleshooting:

- **DMM**: check DC voltages, currents, and resistances. The most versatile tool for finding opens, shorts, and wrong values.
- **Oscilloscope**: check AC and transient signals. The most useful tool for finding signal problems (no signal, distorted signal, wrong frequency).
- **Function generator**: inject a test signal at various points in the circuit. The most useful tool for tracing the signal through the circuit.

### Documentation

The build project should be documented:

- **Schematic**: the schematic of the circuit, drawn neatly.
- **Bill of materials**: the list of components, with values and part numbers.
- **Test procedure**: the steps to test the circuit, with the expected results.
- **Test results**: the actual results, with the discrepancy from the expected.
- **Analysis**: the analysis of the discrepancy, with the proposed fix.

The documentation is the record of the work, not the work itself. A well-documented project is a candidate for a senior thesis, a paper, or a portfolio.

### Safety considerations

The build project may involve mains voltage (110 V or 220 V AC). The mains is dangerous: it can cause electrical shock, burns, and death. The safety practices:

- **Never work on a live circuit**: disconnect the power before making or breaking connections.
- **Use an isolation transformer**: an isolation transformer separates the circuit from the mains ground, reducing the risk of shock.
- **Use a GFCI**: a ground-fault circuit interrupter (GFCI) cuts the power if a current imbalance is detected, reducing the risk of shock.
- **Check the wiring**: use a multimeter to check the wiring before applying power.
- **Don't work alone**: have someone nearby in case of an accident.
- **Know the emergency procedures**: know how to disconnect the power, how to perform CPR, and how to call for help.

### Worked examples

**Example 1 — Systematic troubleshooting of a non-working amplifier.**

A common-emitter amplifier does not produce an output signal. The supply is on, the input signal is present, and the connections look correct. Apply half-splitting.

**Solution.** Measure the DC voltage at the collector. If it is approximately $V_{CC}/2$ (the expected quiescent point), the bias is correct; the fault is downstream. Check the output coupling capacitor and the load. If the collector voltage is $V_{CC}$ or $0$ V, the transistor is not in the active region. Check the base voltage; it should be approximately $V_{BE} = 0.7$ V above the emitter voltage. If the base voltage is wrong, check the bias network. If the emitter voltage is wrong, check the emitter resistor.

**Example 2 — Identification of a faulty component.**

An LED is dim. The supply is $5$ V, the current-limiting resistor is $330\ \Omega$, and the LED forward voltage is supposed to be $2$ V.

**Solution.** The expected current is $I = (5 - 2) / 330 = 9$ mA. Measure the voltage across the LED with a DMM. If it is much less than $2$ V, the LED is faulty (high resistance). If it is much more than $2$ V, the LED is open (no current flow). If the LED is dim but the voltage is correct, the LED is at the end of its life (reduced efficiency).

**Example 3 — Grounding problem.**

An amplifier has a $50$ Hz hum on the output. The signal source is connected to the input; the supply is clean. Apply the troubleshooting steps.

**Solution.** The $50$ Hz hum is the mains frequency, picked up by a ground loop. Check the ground connections: the scope's ground clip should be at a single point (typically the circuit's ground), not at multiple points. If the hum persists, use a differential probe to measure the hum; the source of the hum is the point with the largest hum voltage.

### Common pitfalls

- **No plan**: dive into building without a schematic or a parts list. Result: a tangled mess that does not work.
- **No testing**: build the entire circuit and then turn it on. Result: a fault that is hard to find because the circuit is complex.
- **No documentation**: build the circuit, demonstrate it, and forget it. Result: a circuit that cannot be reproduced or repaired.
- **Working in unsafe conditions**: working with mains voltage without proper precautions. Result: a serious accident.

### Key Ideas

- A schematic is a symbolic representation of a circuit; learn to read it.
- A breadboard is a reusable platform for prototyping; learn to use it.
- Systematic troubleshooting: check the power, the connections, the components, the signal. Use half-splitting to narrow the fault.
- Documentation: schematic, bill of materials, test procedure, test results, analysis.
- Safety: disconnect the power before connecting, use an isolation transformer, don't work alone.

## Worked Examples

### Example 1 — Build a voltage divider on a breadboard.

Build a $5$ V-to-$3.3$ V voltage divider using a $1\ \text{k}\Omega$ and a $2\ \text{k}\Omega$ resistor. Test with a DMM.

**Solution.** Connect the $1\ \text{k}\Omega$ resistor between $+5$ V and the output; connect the $2\ \text{k}\Omega$ resistor between the output and ground. The expected output voltage is $V_\text{out} = 5 \cdot 2 / (1 + 2) = 3.33$ V. Measure with the DMM; the reading should be within $5\%$ (the tolerance of typical resistors).

### Example 2 — Test a diode with a DMM.

Test a silicon diode (e.g. 1N4148) using the DMM's diode test mode.

**Solution.** Set the DMM to diode test mode. Connect the red lead to the anode and the black lead to the cathode. The reading should be $0.5$–$0.7$ V (the forward voltage drop). Reverse the leads; the reading should be overload (the diode is reverse-biased). If the readings are different, the diode is faulty.

### Example 3 — Measure the bandwidth of an RC filter.

Measure the $-3$ dB frequency of an RC low-pass filter with $R = 1\ \text{k}\Omega$ and $C = 100$ nF.

**Solution.** The theoretical $-3$ dB frequency is $f_c = 1 / (2 \pi R C) \approx 1.59$ kHz. Set the function generator to a sine wave with $V_{pp} = 1$ V. Connect the output to the filter input; connect the filter output to the oscilloscope. Vary the frequency and measure the output amplitude. The $-3$ dB frequency is where the output amplitude is $0.707$ of the low-frequency amplitude. Compare to the theoretical value.

## Common Misconceptions

- **"A schematic is optional."** No, a schematic is the contract between the designer and the builder. Build from a schematic, not from memory.
- **"A breadboard is a permanent solution."** No, a breadboard is for prototyping only. For a permanent circuit, solder the components to a PCB.
- **"If the circuit does not work, the components are bad."** Often the fault is a wiring error, not a component failure. Check the wiring first.
- **"Documentation is for engineers."** Documentation is for everyone: for the next person to build the circuit, for the grader, and for yourself when you come back to the project in a year.
- **"Mains voltage is safe."** Mains voltage is dangerous. Always disconnect the power before making or breaking connections.

## Connections

- The build project is the bridge from theory to practice; without it, the theory is incomplete.
- The breadboard is the prototype; the PCB is the product. Both are part of the design process.
- The troubleshooting techniques apply to every electronic system, from a simple amplifier to a complex digital circuit.
- The documentation practices are part of every engineering discipline, not just electronics.
- The safety considerations are the foundation of every laboratory practice.

## Quick Check

1. Read a simple schematic with a resistor, a capacitor, a diode, and a transistor.
2. Build a voltage divider on a breadboard.
3. Test a transistor with a DMM.
4. Apply half-splitting to find a fault in a non-working circuit.
5. State the safety considerations for working with mains voltage.

## Takeaway

- A schematic is the contract between the designer and the builder; read it.
- A breadboard is for prototyping; solder for permanent circuits.
- Systematic troubleshooting: check the power, the connections, the components, the signal. Use half-splitting.
- Documentation is essential; record the schematic, the bill of materials, the test procedure, the test results.
- Safety: disconnect the power before connecting, use an isolation transformer, don't work alone.
