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
lessonId: analog-and-digital-electronics-m2-l1
lessonName: The Ideal Op-Amp: Golden Rules and the Basic Amplifier Configurations
lessonNumber: 4
moduleNumber: 2
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 4
prerequisites:
  - analog-and-digital-electronics-m1-l3
  - basic-electronics-m1-l1
learningObjectives:
  - State the ideal op-amp model and the two golden rules, and justify them from the feedback equation of Lesson m1-l3.
  - Derive the gain, input resistance and finite-gain error of the inverting and non-inverting amplifiers.
  - Analyse the summing and difference amplifiers, including the resistor-matching condition and the common-mode rejection ratio.
concepts:
  - Ideal operational amplifier
  - Golden rules and virtual ground
  - Inverting amplifier
  - Non-inverting amplifier and voltage follower
  - Summing amplifier
  - Difference amplifier
  - Common-mode rejection ratio
tags:
  - physics
  - analog-and-digital-electronics
  - op-amp-circuits
  - feedback-amplifiers
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# The Ideal Op-Amp: Golden Rules and the Basic Amplifier Configurations

## Overview

The operational amplifier is negative feedback made into a component. A differential pair, a high-gain stage and an output buffer give a voltage gain of $10^5$ or more; the designer spends this gain, through two resistors, on accuracy, linearity and controlled impedances exactly as Lesson m1-l3 prescribed. Because the open-loop gain is so large, the analysis collapses to two **golden rules**, and a page of hybrid-$\pi$ algebra becomes a line of Kirchhoff's current law. This lesson derives the golden rules from the feedback equation and applies them to the four circuits found in almost every analogue instrument: the inverting, non-inverting, summing and difference amplifiers. At each step we check how much survives when the gain is finite or the resistors are mismatched.

## Learning Path

- **What you should already know**: Kirchhoff's laws and the potential divider (Basic Electronics m1-l1); the feedback equation $A_f = A/(1 + A\beta)$, desensitivity and the series–shunt and shunt–shunt topologies (Lesson m1-l3).
- **What this lesson adds**: the ideal op-amp model; the golden rules and virtual ground; the four basic amplifiers with their gains, input resistances and finite-gain errors; the matching condition and CMRR of the difference amplifier.
- **What later lessons this will unlock**: replacing the feedback resistor by a capacitor gives the integrator and differentiator, and removing feedback gives the comparator (Lesson m2-l2); the filters and instrumentation amplifier of Lesson m2-l3 are built from these blocks; the summing amplifier is the binary-weighted DAC of Lesson m3-l3.

## Core Explanation

### The ideal operational amplifier

An op-amp has two inputs, non-inverting ($+$) and inverting ($-$), and one output:

$$v_o = A_{OL}\,(v_+ - v_-),$$

with the **open-loop gain** $A_{OL}$ typically $2 \times 10^5$ for the classic 741. The **ideal op-amp** has $A_{OL} \to \infty$, infinite input resistance, zero output resistance, infinite bandwidth and zero output when $v_+ = v_-$. The output saturates about a volt short of the supply rails, typically $\pm 15$ V. Lesson m2-l3 relaxes each idealisation in turn.

### The golden rules

With negative feedback from output to the inverting input, the feedback equation gives $A_f \to 1/\beta$ as $A_{OL} \to \infty$. The output must then be finite while $A_{OL}$ is enormous, so the differential input $v_+ - v_- = v_o/A_{OL}$ tends to zero. Two rules follow:

1. **The output does whatever is necessary to make the voltage difference between the inputs zero** ($v_- = v_+$, a **virtual short**).
2. **The inputs draw no current.**

Rule 1 holds only with a negative-feedback path; without one, or with positive feedback, the op-amp saturates at a rail, which is the comparator of Lesson m2-l2. If the non-inverting input is grounded, rule 1 pins the inverting input at 0 V although it is not connected to ground: it is a **virtual ground**, a node that sits at ground potential but can absorb signal current through the feedback resistor.

### The inverting amplifier

The input is applied through $R_1$ to the inverting input, $R_f$ connects output to inverting input, and the non-inverting input is grounded. The inverting input is a virtual ground, so the input current is $i = v_{in}/R_1$. By rule 2 all of it flows through $R_f$, hence $v_o = 0 - iR_f$ and

$$A_v = \frac{v_o}{v_{in}} = -\frac{R_f}{R_1}, \qquad R_{in} = R_1.$$

The input resistance is just $R_1$, because the source drives a virtual ground. This is the shunt–shunt topology of Lesson m1-l3 with $\beta = R_1/(R_1 + R_f)$.

With finite $A_{OL}$ the inverting input sits at $v_- = -v_o/A_{OL}$ rather than zero. Kirchhoff's current law at that node, $(v_{in} - v_-)/R_1 = (v_- - v_o)/R_f$, gives after a few lines

$$A_v = -\frac{R_f/R_1}{1 + (1 + R_f/R_1)/A_{OL}}.$$

The **noise gain** $1 + R_f/R_1$ divided by $A_{OL}$ is the fractional gain error. For a gain of 100 and $A_{OL} = 2 \times 10^5$ the error is $101/(2 \times 10^5) = 0.05\%$.

### The non-inverting amplifier and the follower

Now the signal drives the non-inverting input and $R_1$ runs from the inverting input to ground, $R_f$ from output to inverting input. Rule 1 puts $v_- = v_{in}$; rule 2 makes $R_1$ and $R_f$ an unloaded divider, so $v_- = v_o R_1/(R_1 + R_f)$ and

$$A_v = 1 + \frac{R_f}{R_1}, \qquad R_{in} \to \infty.$$

The source sees the op-amp input directly, so even a megohm source is not loaded. This is the series–shunt topology with the same $\beta$; the finite-gain result is

$$A_v = \frac{1 + R_f/R_1}{1 + (1 + R_f/R_1)/A_{OL}}.$$

With $R_f = 0$ (or $R_1 \to \infty$) the circuit is the **voltage follower**: gain 1, infinite input resistance, near-zero output resistance. It is the universal buffer after a high-impedance sensor, the op-amp version of the source follower of Lesson m1-l3 but with gain $1 - 1/A_{OL}$ instead of $g_m R_S/(1 + g_m R_S)$.

### The summing amplifier

If several inputs $v_1, v_2, \dots$ feed the virtual ground through $R_1, R_2, \dots$, their currents add in $R_f$ without interacting, because each sees only ground:

$$v_o = -R_f\left(\frac{v_1}{R_1} + \frac{v_2}{R_2} + \cdots\right).$$

Equal resistors give the negative sum; unequal resistors give a weighted sum. With resistors in the ratio $1 : 2 : 4 : 8$ driven by logic levels the output is the binary value of the inputs: the **binary-weighted DAC** of Lesson m3-l3.

### The difference amplifier

Combine the two basic circuits. Input $v_1$ goes through $R_1$ to the inverting input, with $R_2$ as feedback; input $v_2$ goes through $R_3$ to the non-inverting input, which is returned to ground by $R_4$. By superposition,

$$v_o = -\frac{R_2}{R_1}\,v_1 + \left(1 + \frac{R_2}{R_1}\right)\frac{R_4}{R_3 + R_4}\,v_2.$$

If the resistors satisfy the **matching condition** $R_4/R_3 = R_2/R_1$ the bracket simplifies and

$$v_o = \frac{R_2}{R_1}\,(v_2 - v_1).$$

The circuit amplifies the **differential** signal $v_2 - v_1$ and rejects the **common-mode** signal $v_{cm} = (v_1 + v_2)/2$, as a thermocouple, strain-gauge bridge or ECG electrode pair requires.

Mismatch spoils the rejection. If $R_4$ is high by a fraction $\epsilon$, setting $v_1 = v_2 = v_{cm}$ in the superposition formula and expanding to first order gives a common-mode gain

$$A_{cm} \approx \frac{R_2}{R_1 + R_2}\,\epsilon, \qquad \text{CMRR} = \frac{A_d}{A_{cm}} = \frac{1 + R_2/R_1}{\epsilon}.$$

With 1% resistors and a differential gain of 10 the CMRR is only $11/0.01 = 1100$, about 61 dB; 0.01% resistors give 101 dB. Its input resistances are also low and unequal ($R_1$ against $R_3 + R_4$), which degrades CMRR further. The instrumentation amplifier of Lesson m2-l3 cures both defects.

### Choosing resistor values

Golden-rule formulas contain only ratios, but absolute values matter. Below about 1 kΩ the resistors load the output; above about 1 MΩ bias current (Lesson m2-l3), noise and stray capacitance intrude. The decade 10 kΩ–100 kΩ is the usual compromise. The snippet tabulates the finite-gain error of a non-inverting amplifier, which grows in proportion to the closed-loop gain.

```python
A_OL = 2e5
for G in (1, 10, 100, 1000):
    error = G / A_OL            # noise gain divided by open-loop gain
    print(f"gain {G:5d}: actual {G/(1+error):9.4f}, error {100*error:.3f} %")
```

## Key Ideas

- **Ideal op-amp**: $v_o = A_{OL}(v_+ - v_-)$ with $A_{OL} \to \infty$, infinite input resistance, zero output resistance.
- **Golden rules**: with negative feedback, $v_- = v_+$ and the inputs draw no current; a grounded non-inverting input makes the inverting input a virtual ground.
- **Inverting amplifier**: $A_v = -R_f/R_1$, $R_{in} = R_1$; **non-inverting**: $A_v = 1 + R_f/R_1$, $R_{in} \to \infty$.
- **Finite-gain error**: fractional error $(1 + R_f/R_1)/A_{OL}$, the noise gain over the open-loop gain.
- **Summing amplifier**: $v_o = -R_f\sum v_k/R_k$; the virtual ground isolates the inputs.
- **Difference amplifier**: $v_o = (R_2/R_1)(v_2 - v_1)$ when $R_4/R_3 = R_2/R_1$; CMRR $\approx (1 + R_2/R_1)/\epsilon$ for a resistor mismatch $\epsilon$.

## Worked Examples

### Example 1 — Inverting amplifier with finite gain and source resistance

An inverting amplifier uses $R_1 = 10$ kΩ and $R_f = 100$ kΩ. Find the gain for $A_{OL} = 2 \times 10^5$ and for $A_{OL} = 1000$, and the effect of a 1 kΩ source resistance.

**Solution.** The ideal gain is $-R_f/R_1 = -10$ and the noise gain is $1 + 10 = 11$. For $A_{OL} = 2 \times 10^5$ the error is $11/(2 \times 10^5) = 5.5 \times 10^{-5}$, so $A_v = -10/1.000055 = -9.9995$. For $A_{OL} = 1000$ the error is $11/1000 = 1.1\%$ and $A_v = -10/1.011 = -9.89$. A source resistance $R_s$ adds to $R_1$ because the source drives a virtual ground: with $R_s = 1$ kΩ,

$$A_v = -\frac{100}{10 + 1} = -9.09,$$

a 9% error that no better op-amp can remove; a follower in front would eliminate it.

### Example 2 — Summing amplifier as a 3-bit DAC

Three logic signals $b_2, b_1, b_0$ (0 V or 5 V) feed a summing amplifier through 10 kΩ, 20 kΩ and 40 kΩ with $R_f = 10$ kΩ. Tabulate the output.

**Solution.** The output is

$$v_o = -10\left(\frac{b_2}{10} + \frac{b_1}{20} + \frac{b_0}{40}\right) = -\left(b_2 + \frac{b_1}{2} + \frac{b_0}{4}\right),$$

so each step of the binary count changes $v_o$ by $-5/4 = -1.25$ V:

| $b_2 b_1 b_0$ | 000 | 001 | 010 | 011 | 100 | 101 | 110 | 111 |
|---|---|---|---|---|---|---|---|---|
| $v_o$ (V) | 0 | $-1.25$ | $-2.50$ | $-3.75$ | $-5.00$ | $-6.25$ | $-7.50$ | $-8.75$ |

The full-scale output is $-8.75$ V $= -(2^3 - 1) \times 1.25$ V. The accuracy rests on the resistor ratios and exact 5 V logic levels, which is why practical DACs use an R-2R ladder and a precision reference (Lesson m3-l3).

### Example 3 — Difference amplifier reading a bridge

A Wheatstone bridge delivers $v_2 - v_1 = 20$ mV on top of a common-mode level of 2.5 V. It drives a difference amplifier with $R_1 = R_3 = 10$ kΩ and $R_2 = R_4 = 100$ kΩ. Find the output, then the error if $R_4$ is 1% high.

**Solution.** With matched resistors $A_d = R_2/R_1 = 10$, so $v_o = 10 \times 0.020 = 0.200$ V and the 2.5 V common-mode level produces nothing. With $\epsilon = 0.01$,

$$A_{cm} \approx \frac{100}{110} \times 0.01 = 9.1 \times 10^{-3}, \qquad v_{o,cm} = 2.5 \times 9.1 \times 10^{-3} = 22.7\ \text{mV}.$$

This is an 11% error on the 200 mV signal, and CMRR $= 10/(9.1 \times 10^{-3}) = 1100 = 61$ dB. Reducing the error to 0.1% needs resistors matched to $10^{-4}$, or the instrumentation amplifier of Lesson m2-l3.

## Common Misconceptions

- **"The op-amp has a gain of $-R_f/R_1$."** The *circuit* has that gain; the closed-loop gain is accurate precisely because $A_{OL} \sim 10^5$ is huge and drops out.
- **"The virtual ground is connected to ground."** It is at ground potential but not connected to it; current into the node must leave through $R_f$.
- **"The golden rules always apply."** Rule 1 requires negative feedback and an unsaturated output. A comparator, an open-loop op-amp, or an amplifier driven beyond the rails has $v_+ \ne v_-$.
- **"The inverting amplifier has infinite input resistance like the non-inverting one."** Its input resistance is $R_1$, because the source drives a virtual ground; source resistance adds directly to $R_1$ and changes the gain.
- **"1% resistors give a 1% difference amplifier."** The differential gain is 1% accurate, but the common-mode rejection is only $(1 + R_2/R_1)/0.01$, and a large common-mode level can swamp a small signal.

## Connections

- The summing amplifier performs the superposition behind Fourier synthesis in Waves and Optics: weighted sums of inputs build any waveform, as in function generators and DACs.
- The difference amplifier provides the common-mode rejection needed by every bridge measurement in the Basic Electronics and Communication Electronics laboratories.
- The golden rules are fixed-point reasoning as in Numerical Methods: a high-loop-gain system settles where the error vanishes, as an iteration settles where the residual is zero.
- Photometer and CCD preamplifiers in Astrophysics use the transimpedance form of the inverting amplifier (a current source into a virtual ground), where $R_f$ alone converts photocurrent to voltage.
- The finite-gain error $(1 + R_f/R_1)/A_{OL}$ becomes frequency dependent once $A_{OL}(f)$ falls, which is the gain–bandwidth limit of Lesson m2-l3.

## Quick Check

1. Derive the gain of the non-inverting amplifier from the golden rules and explain its high input resistance.
2. An inverting amplifier with $R_1 = 2.2$ kΩ and $R_f = 47$ kΩ is driven by a source of 500 Ω. Find the actual gain.
3. Design a summing amplifier that outputs $-(2v_1 + 0.5 v_2)$ using $R_f = 20$ kΩ.
4. Why can a difference amplifier with $R_2/R_1 = R_4/R_3$ still show a common-mode output when connected to a real sensor?
5. State the two golden rules and the condition under which each fails.

## Takeaway

- The ideal op-amp has infinite gain and input resistance and zero output resistance; with negative feedback this gives the golden rules $v_- = v_+$ and zero input current.
- The inverting amplifier has gain $-R_f/R_1$ and input resistance $R_1$; the non-inverting amplifier has gain $1 + R_f/R_1$ and infinite input resistance.
- Finite open-loop gain introduces a fractional error equal to the noise gain divided by $A_{OL}$.
- The summing amplifier adds weighted inputs through a virtual ground; the difference amplifier gives $(R_2/R_1)(v_2 - v_1)$ when its resistors are matched.
- Resistor mismatch limits the CMRR to about $(1 + R_2/R_1)/\epsilon$, motivating the instrumentation amplifier.
