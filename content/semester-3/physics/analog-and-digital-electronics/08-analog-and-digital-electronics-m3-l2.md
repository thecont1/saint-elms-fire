***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: analog-and-digital-electronics
courseName: Analog and Digital Electronics
moduleId: analog-and-digital-electronics-module-3
moduleName: Digital Logic and Data Conversion
lessonId: analog-and-digital-electronics-m3-l2
lessonName: Latches, Flip-Flops, Counters and Shift Registers
lessonNumber: 8
moduleNumber: 3
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - analog-and-digital-electronics-m3-l1
  - analog-and-digital-electronics-m2-l2
learningObjectives:
  - Explain how cross-coupled gates store a bit and derive the behaviour of the SR latch.
  - Write the characteristic tables and equations of the SR, D, JK and T flip-flops and trace their outputs through a clock sequence.
  - Design and analyse asynchronous and synchronous counters, frequency dividers and shift registers.
concepts:
  - SR latch
  - Edge-triggered D flip-flop
  - JK and T flip-flops
  - Setup and hold time
  - Ripple counter and modulus
  - Shift register
  - Ring and Johnson counters
tags:
  - physics
  - analog-and-digital-electronics
  - flip-flops
  - sequential-logic
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - conceptual
  - derivation
  - computational
***

# Latches, Flip-Flops, Counters and Shift Registers

## Overview

The gates of Lesson m3-l1 have no memory: change the inputs and the output changes. Almost every useful digital system must remember. The key idea is the one met in the Schmitt trigger of Lesson m2-l2: positive feedback creates two stable states. Two cross-coupled gates form a **latch**, which stores one bit. Adding a clock so that the bit changes only at a precise instant gives the **flip-flop**, the building block of **sequential logic**, whose outputs depend on past inputs as well as present ones. Chains of flip-flops form counters, which divide frequency and count events, and shift registers, which move words and convert between serial and parallel data. They supply the counting in the dual-slope converter of Lesson m3-l3.

## Learning Path

- **What you should already know**: truth tables and gates (Lesson m3-l1); positive feedback and bistability (Lesson m2-l2); binary counting.
- **What this lesson adds**: the SR latch; the D, JK and T flip-flops; setup and hold times; ripple and synchronous counters; shift registers and ring and Johnson counters.
- **What later lessons this will unlock**: the successive-approximation register and dual-slope counter of Lesson m3-l3; the microcontroller systems of later semesters.

## Core Explanation

### The SR latch

Cross-couple two NOR gates, so that the output of each feeds one input of the other: $Q = \overline{R + \bar{Q}}$ and $\bar{Q} = \overline{S + Q}$. Because of the feedback, the output depends on its own previous value:

| $S$ | $R$ | $Q_{next}$ | Action |
|---|---|---|---|
| 0 | 0 | $Q$ | hold |
| 0 | 1 | 0 | reset |
| 1 | 0 | 1 | set |
| 1 | 1 | 0 (with $\bar Q = 0$) | forbidden |

To verify the hold state, suppose $Q = 1$, $\bar{Q} = 0$ and $S = R = 0$: the first gate gives $\overline{0 + 0} = 1$ and the second gives $\overline{0 + 1} = 0$, which reproduces the state. Setting $S = 1$ forces $\bar{Q} = 0$ and then $Q = 1$. With $S = R = 1$ both outputs are forced to 0, so $Q$ and $\bar Q$ are no longer complements, and releasing both inputs together leaves the final state undetermined. A NAND version has active-low inputs and is the standard **switch debouncer**: a mechanical contact bounces for milliseconds, but a latch driven by a double-throw switch changes state at the first contact and ignores later bounces.

### Clocked latches and the D flip-flop

A **gated SR latch** passes $S$ and $R$ only while a clock or enable is high. The **D latch** removes the forbidden state by driving $R = \bar{S}$ from a single data input $D$: while the enable is high $Q$ follows $D$ (the latch is **transparent**), and when it falls $Q$ holds. Transparency lets signals race around loops, so synchronous systems use the **edge-triggered flip-flop**, two latches in master-slave arrangement. The D flip-flop samples $D$ at the active clock edge and holds it for the whole cycle:

$$Q_{next} = D.$$

The input must be stable for a **setup time** $t_{su}$ before the clock edge and for a **hold time** $t_h$ after it; violating either can leave the output at an intermediate voltage for an unpredictable time, a state called **metastability**.

### The JK and T flip-flops

The **JK flip-flop** is a clocked SR flip-flop with the forbidden case turned into useful behaviour: with $J = K = 1$ it toggles. Its characteristic table and equation are

| $J$ | $K$ | $Q_{next}$ |
|---|---|---|
| 0 | 0 | $Q$ |
| 0 | 1 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | $\bar{Q}$ |

$$Q_{next} = J\bar{Q} + \bar{K}Q.$$

The equation reproduces the table: $J = K = 1$ gives $\bar{Q}$; $J = 1$, $K = 0$ gives $\bar{Q} + Q = 1$; $J = 0$, $K = 1$ gives 0. Tying $J$ and $K$ together gives the **T (toggle) flip-flop**, $Q_{next} = T \oplus Q$, which toggles at each clock edge when $T = 1$ and holds when $T = 0$. With $T = 1$ it divides the clock frequency by 2.

### Asynchronous (ripple) counters

Cascade $n$ toggle flip-flops, each clocked by the output of the one before, which changes on its falling edge. The first flip-flop toggles on every pulse, so its output has half the clock frequency, the second sees half-rate pulses, and so on. After $k$ stages the frequency is $f/2^k$, and the outputs $Q_{n-1}\cdots Q_0$ read the number of pulses counted in binary, modulo $2^n$. An $n$-bit counter has **modulus** $2^n$.

To obtain a modulus $N$ that is not a power of two, decode the first state outside the sequence and use it to clear the counter. For a decade (modulus-10) counter four flip-flops are needed, since $2^3 < 10 \le 2^4$; the counter would reach $1010_2$ on the tenth pulse, so a NAND gate on $Q_3$ and $Q_1$ (the first state in which both are 1) drives the asynchronous clear and resets the counter to 0000.

The weakness is accumulated delay: each stage waits for the previous one, so the last output settles only after $n\,t_{pd}$, and intermediate states cause glitches if the outputs are decoded.

### Synchronous counters

In a **synchronous counter** all flip-flops share the same clock and their $J$ and $K$ (or $T$) inputs are set by logic so that each toggles at the right moment. A binary counter bit toggles exactly when all lower bits are 1, so $T_0 = 1$, $T_1 = Q_0$, $T_2 = Q_1Q_0$, $T_3 = Q_2Q_1Q_0$. All outputs change together, within one flip-flop delay, and the maximum clock frequency is limited by

$$f_{max} = \frac{1}{t_{cq} + t_{logic} + t_{su}},$$

where $t_{cq}$ is the clock-to-output delay. Synchronous counters cost more gates but are glitch-free.

### Shift registers

A chain of D flip-flops with the output of each feeding the next input, and a common clock, is a **shift register**: at every clock edge the stored word moves one place. Serial-in parallel-out (SIPO) registers convert a serial stream to a word; parallel-in serial-out (PISO) registers do the reverse. Feeding the last output back to the first makes a **ring counter**, in which a single 1 circulates: $n$ states. Feeding back the *complement* of the last output makes a **Johnson counter** with $2n$ states, using the same flip-flops. Neighbouring Johnson states differ by one bit, so decoding is glitch-free. The code simulates a 4-bit ripple counter; the printed value counts from 0 to 15 and wraps, bit $k$ changing every $2^k$ pulses.

```python
q = [0, 0, 0, 0]                       # Q0..Q3
for pulse in range(1, 21):
    i = 0
    while i < 4:
        q[i] ^= 1                      # toggle this stage
        if q[i] == 1: break            # a 0->1 change does not clock the next stage
        i += 1                         # a 1->0 (falling) edge ripples on
    print(pulse, q[::-1], sum(b << k for k, b in enumerate(q)))
```

## Key Ideas

- **Latch**: two cross-coupled gates give two stable states; the SR input $S = R = 1$ is forbidden for NOR latches.
- **D flip-flop**: $Q_{next} = D$ at the clock edge, subject to setup and hold times.
- **JK flip-flop**: $Q_{next} = J\bar Q + \bar K Q$; with $J = K = 1$ it toggles, and the T flip-flop is the special case $J = K = T$.
- **Ripple counter**: $n$ toggling stages divide the clock by $2^n$; delay accumulates as $n\,t_{pd}$.
- **Modulus $N$**: decode state $N$ and clear; $n = \lceil\log_2 N\rceil$ flip-flops are needed.
- **Synchronous counter**: common clock with $T_k = Q_{k-1}\cdots Q_0$; faster and glitch-free.
- **Shift registers**: ring counter has $n$ states, Johnson counter $2n$.

## Worked Examples

### Example 1 — Tracing a JK flip-flop

A JK flip-flop starts with $Q = 0$ and receives, at five successive rising edges, $(J,K) = (1,0), (0,0), (1,1), (1,1), (0,1)$. Find $Q$ after each edge.

**Solution.** Apply the characteristic table at each edge in turn:

| Edge | $J$ | $K$ | $Q$ before | $Q$ after | Action |
|---|---|---|---|---|---|
| 1 | 1 | 0 | 0 | 1 | set |
| 2 | 0 | 0 | 1 | 1 | hold |
| 3 | 1 | 1 | 1 | 0 | toggle |
| 4 | 1 | 1 | 0 | 1 | toggle |
| 5 | 0 | 1 | 1 | 0 | reset |

The output sequence is $1, 1, 0, 1, 0$. The equation $Q_{next} = J\bar{Q} + \bar{K}Q$ agrees: edge 3 gives $1\cdot\bar{1} + 0\cdot 1 = 0$.

### Example 2 — Frequency division and a decade counter

A 1 MHz clock drives a 4-bit ripple counter. Find the output frequencies. Then find the frequency and duty cycle of $Q_3$ of a decade counter, and the number of stages needed to divide a 32.768 kHz watch crystal down to 1 Hz.

**Solution.** The stages give $Q_0 = 500$ kHz, $Q_1 = 250$ kHz, $Q_2 = 125$ kHz and $Q_3 = 62.5$ kHz. With 15 ns per stage the last bit settles within $4\times15 = 60$ ns, inside the 1 µs period. In the decade counter $Q_3$ is high for counts 8 and 9 only, that is 2 out of 10 clocks: it produces one pulse per ten clock cycles, so $f = 1\ \text{MHz}/10 = 100$ kHz with a 20% duty cycle. For the watch crystal, $32\,768 = 2^{15}$, so 15 toggle stages divide to exactly 1 Hz.

### Example 3 — A shift register and the Johnson counter

A 4-bit SIPO register (stages $Q_0$ to $Q_3$, shifting from $Q_0$ toward $Q_3$) starts at 0000 and receives the serial stream 1, 0, 1, 1 (first bit first). Show the contents, then list the Johnson-counter sequence.

**Solution.** After each clock edge the new bit enters $Q_0$ and every other bit moves one place on:

| Clock | Input | $Q_0Q_1Q_2Q_3$ |
|---|---|---|
| 0 | | 0000 |
| 1 | 1 | 1000 |
| 2 | 0 | 0100 |
| 3 | 1 | 1010 |
| 4 | 1 | 1101 |

The first bit has arrived at $Q_3$, so reading $Q_3Q_2Q_1Q_0$ gives $1011$, the original word. If $\bar{Q}_3$ is fed back into $Q_0$ the register becomes a Johnson counter with the eight states $0000 \to 1000 \to 1100 \to 1110 \to 1111 \to 0111 \to 0011 \to 0001 \to 0000$: eight states from four flip-flops, against four for the ring counter.

## Common Misconceptions

- **"A latch and a flip-flop are the same thing."** A latch is transparent while enabled; a flip-flop samples only at a clock edge.
- **"The SR latch with $S = R = 1$ is simply another state."** Both outputs go to 0, and releasing both inputs together gives an unpredictable result.
- **"Setup and hold times only matter at high speed."** They apply at any speed when an input changes near the clock edge, for example when a switch is read.
- **"A ripple counter and a synchronous counter count differently."** The sequence is the same, but the ripple outputs change in a delayed cascade that can show false intermediate counts.
- **"A decade counter needs ten flip-flops."** Only $\lceil\log_2 10\rceil = 4$ are needed, because the states are encoded in binary.

## Connections

- Positive feedback with a state-dependent threshold in the Schmitt trigger is the analogue ancestor of the latch: the same two-state regenerative loop, built from gates instead of an op-amp.
- Frequency division by repeated halving underlies every digital clock, including the crystal-based timekeeping of observatories.
- The Poisson counting statistics of Nuclear Physics (uncertainty $1/\sqrt N$) are measured with these counters, gated by a divider-based timer.
- The ripple delay $n\,t_{pd}$ is the cascade problem of the ripple-carry adder of Lesson m3-l1.
- Shift registers are the hardware behind serial interfaces to sensors and ADCs, such as the SPI link used in the microcontroller laboratories.

## Quick Check

1. Show with the NOR-latch equations that $S = 1$, $R = 0$ sets $Q = 1$ whatever the previous state.
2. Complete the sequence of a T flip-flop with $T = 1, 0, 1, 1$ starting from $Q = 0$.
3. How many flip-flops are needed for a modulus-60 counter, and what state do you decode to clear it?
4. A 32 MHz clock feeds a 5-stage ripple counter. Give the output frequency of the last stage.
5. What is the difference between the output sequences of a 3-bit ring counter and a 3-bit Johnson counter?

## Takeaway

- Cross-coupled gates give a latch that stores one bit; gating with a clock and using master-slave construction gives the edge-triggered flip-flop.
- The D flip-flop gives $Q_{next} = D$; the JK flip-flop gives $Q_{next} = J\bar Q + \bar K Q$ and toggles for $J = K = 1$.
- $n$ toggle flip-flops divide a clock by $2^n$ as a ripple counter, with accumulated delay; synchronous counters share a clock and are glitch-free.
- Modulus $N$ needs $\lceil\log_2 N\rceil$ flip-flops and a decoded reset.
- Shift registers move and convert data; the ring counter has $n$ states and the Johnson counter $2n$.
