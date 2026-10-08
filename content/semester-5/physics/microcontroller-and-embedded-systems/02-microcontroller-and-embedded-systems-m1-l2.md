***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: microcontroller-and-embedded-systems
courseName: Microcontroller and Embedded Systems (Physics Option B)
moduleId: microcontroller-and-embedded-systems-module-1
moduleName: Microcontroller Architecture and the Programming Model
lessonId: microcontroller-and-embedded-systems-m1-l2
lessonName: Clock, Instruction Cycle and Number Representation
lessonNumber: 2
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - microcontroller-and-embedded-systems-m1-l1
  - numerical-methods-m2-l1
learningObjectives:
  - Relate clock frequency, cycles per instruction and pipelining to execution time, and compute loop timings to the nearest cycle.
  - Convert between binary, hexadecimal and decimal and use two's complement, identifying overflow and wrap-around.
  - Use fixed-point $Q_{m.n}$ format, rescale products correctly and bound the quantisation error.
  - Decide when software floating point is acceptable and when fixed point is required.
concepts:
  - Clock source and clock period
  - Instruction cycle and pipelining
  - Cycles per instruction
  - Two's complement representation
  - Unsigned wrap-around (modular arithmetic)
  - Fixed-point Q format
  - IEEE 754 single precision
tags:
  - physics
  - microcontroller-and-embedded-systems
  - number-systems
  - timing
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - computational
  - short-answer
  - conceptual
***

# Clock, Instruction Cycle and Number Representation

## Overview

Two things make a microcontroller a precision instrument: every operation is tied to a known clock, and every quantity is an integer of known width. The first half of this lesson follows the instruction cycle, showing how fetch, decode and execute overlap in a pipeline and how execution time follows from cycle counts. The second covers hexadecimal, two's complement, the unsigned wrap-around that keeps `millis()` safe across its 49-day overflow, and fixed-point formats that let an 8-bit controller compute a temperature in a few dozen cycles, compared at the end with IEEE 754 floating point.

## Learning Path

- **What you should already know**: the CPU datapath and status flags (Lesson m1-l1); rounding and truncation error (numerical-methods-m2-l1); decimal-to-binary conversion.
- **What this lesson adds**: clock accuracy; pipeline and cycle counting; two's complement; modular arithmetic; fixed-point Q formats; the cost of floating point.
- **What later lessons this will unlock**: the toolchain (Lesson m1-l3); interrupt latency (Lesson m2-l1); timers (Lesson m2-l2); ADC scaling (Lesson m2-l3); timestamps (Lesson m3-l2).

## Core Explanation

### Clock sources

A synchronous circuit advances on the edges of a **clock** of frequency $f_{\text{clk}}$ and period $T_{\text{clk}} = 1/f_{\text{clk}}$; for the Uno, 16 MHz and 62.5 ns. A **quartz crystal** exploits piezoelectric resonance and is stable to about ±50 parts per million (ppm) over temperature. A **ceramic resonator** is accurate to roughly ±0.5%, or ±5000 ppm. The ATmega328P's **internal RC oscillator** runs at a nominal 8 MHz, factory-calibrated to ±10%, user-calibrated to about ±1%, and drifts with temperature and supply.

A fractional frequency error $\delta f/f$ gives the same fractional error in any measured interval, so a ±0.5% resonator misjudges a 2 s pendulum period by up to ±10 ms, a ±50 ppm crystal by ±100 µs. Serious timing needs a crystal, serious timekeeping a temperature-compensated oscillator (Lesson m3-l2).

### The instruction cycle

An instruction is **fetched**, **decoded**, **executed** in the ALU and its result **written back**. A **pipeline** overlaps these steps for consecutive instructions. The AVR has two stages: while instruction $n$ executes, $n+1$ is fetched from flash (possible because the Harvard flash bus is free). Most register instructions then complete at one per clock, 16 million instructions per second (MIPS) at 16 MHz.

Some instructions need more cycles. The ATmega328P counts, to be used from a table, are:

| Instruction class | Examples | Cycles |
|---|---|---|
| Register arithmetic and logic | `ADD`, `SUB`, `AND`, `EOR`, `LSL` | 1 |
| Immediate operations | `LDI`, `SUBI`, `ANDI` | 1 |
| Load/store to SRAM | `LD`, `ST`, `LDS`, `STS` | 2 |
| Load from program memory | `LPM` | 3 |
| Hardware multiply (8×8) | `MUL`, `MULS` | 2 |
| Branch not taken | `BRNE`, `BREQ` | 1 |
| Branch taken | `BRNE`, `BREQ` | 2 |
| Relative jump / call | `RJMP`, `RCALL` | 2 / 3 |
| Return | `RET`, `RETI` | 4 |
| No operation | `NOP` | 1 |

The execution time of a fragment is

$$t = \frac{\sum_i c_i}{f_{\text{clk}}},$$

where $c_i$ is the cycle count of the $i$th instruction executed, counting each pass through a loop. The average cycles per instruction (**CPI**) is $\sum c_i / N$, typically 1.3–1.6 on the AVR.

Above about 24 MHz the Cortex-M3's flash cannot deliver an instruction every cycle, so the core inserts **wait states** and throughput stops scaling with the clock.

### Binary and hexadecimal

An $n$-bit **unsigned** integer spans $0$ to $2^{n} - 1$: a byte 0–255, a 16-bit word 0–65,535, a 32-bit word 0–4,294,967,295. Hexadecimal groups bits in fours (`0x` in C). Thus $0\text{xB5} = 11 \times 16 + 5 = 181 = 0\text{b}1011\,0101$. Hex suits addresses and register masks.

### Two's complement

Signed integers almost always use **two's complement**: in $n$ bits the most significant bit has weight $-2^{n-1}$, so

$$v = -b_{n-1} 2^{n-1} + \sum_{k=0}^{n-2} b_k 2^{k}.$$

The range is $-2^{n-1}$ to $2^{n-1} - 1$: $-128$ to $+127$ for 8 bits, $-32{,}768$ to $+32{,}767$ for 16. To negate, invert every bit and add 1. One adder serves both; only the flags differ. Unsigned overflow sets Carry; signed overflow sets V, when operands of the same sign give a result of the opposite sign.

### Wrap-around and modular arithmetic

In C, unsigned arithmetic is modulo $2^{n}$: incrementing a `uint8_t` holding 255 gives 0, and subtracting a larger from a smaller `uint32_t` gives a large positive number. `millis()` returns a `uint32_t` of milliseconds since reset, which overflows after

$$\frac{2^{32}\ \text{ms}}{86{,}400{,}000\ \text{ms/day}} = 49.71\ \text{days}.$$

The idiom

```c
uint32_t start = millis();
/* ... later ... */
if ((uint32_t)(millis() - start) >= interval) { /* act */ }
```

stays correct across the overflow: the subtraction is modulo $2^{32}$ and gives the true elapsed time for any interval below $2^{32}$ ms. The alternative `if (millis() >= start + interval)` fails when the sum wraps.

### Fixed-point arithmetic

The ATmega328P has no floating-point hardware; `float` operations are library routines taking roughly 100 cycles for a multiply and several hundred for a division or logarithm, too slow for many loops and interrupt handlers. The remedy is **fixed point**: an integer scaled by a power of two. In **$Q_{m.n}$ format** the integer $I$ represents

$$x = \frac{I}{2^{n}},$$

with $m$ integer bits (including sign) and $n$ fractional bits. A signed $Q_{7.8}$ number in 16 bits spans $-128$ to $+127.996$ with resolution $2^{-8} = 0.0039$. Addition in the same format is ordinary integer addition. A product of $Q_{a.n}$ and $Q_{b.n}$ has $2n$ fractional bits and must be shifted right by $n$, computed in a wider type to avoid overflow:

```c
int16_t a_q = 0x0280;   /* 2.5 in Q7.8  (2.5 * 256 = 640) */
int16_t b_q = 0x0180;   /* 1.5 in Q7.8  (1.5 * 256 = 384) */
int16_t p_q = (int16_t)(((int32_t)a_q * b_q) >> 8);  /* 3.75 -> 960 = 0x03C0 */
```

The **quantisation error** is at most $\pm 2^{-(n+1)}$, with rms value $2^{-n}/\sqrt{12}$. The absolute error is constant across the range, ideal for quantities of known range (an ADC reading, a duty cycle) and poor for those spanning many orders of magnitude.

### Floating point in brief

An IEEE 754 single-precision `float` has 1 sign bit, 8 exponent bits and 23 stored mantissa bits (24 with the implicit leading 1), a relative precision of $2^{-24} \approx 6 \times 10^{-8}$, about 7 decimal digits, over roughly $10^{\pm 38}$. On the AVR, `double` is the same 32-bit type. Because the error is relative, adding a small increment to a large accumulator loses precision: a `float` seconds counter incremented by 1 ms degrades above $2^{14} = 16{,}384$ s, where the unit in the last place is $2^{-9} \approx 0.00195$ s, and fails above $2^{15} = 32{,}768$ s (about 9 hours), where the increment is rounded away. Integer `millis()` has no such failure.

## Key Ideas

- **Clock accuracy sets timing accuracy**: use a crystal (±50 ppm), not a resonator (±0.5%) or internal RC.
- **Pipelining** gives about one cycle for register operations, two for memory access and taken branches.
- **Execution time** is summed cycles divided by $f_{\text{clk}}$.
- **Two's complement** negates by invert-and-add-one and spans $-2^{n-1}$ to $2^{n-1}-1$.
- **Unsigned wrap-around** is modulo $2^{n}$, making `millis() - start` correct across the 49.7-day overflow.
- **Fixed-point $Q_{m.n}$**: multiply in a wider type, shift right by $n$; error is a constant $\pm 2^{-(n+1)}$.
- **Software floating point** costs ~100 cycles per multiply.

## Worked Examples

### Example 1 — Timing a delay loop

This AVR fragment is a crude delay. `R24` is loaded with 200 and decremented until zero. `DEC` takes 1 cycle; `BRNE` takes 2 when taken and 1 when not. Compute the delay at 16 MHz.

```
    LDI  R24, 200     ; 1 cycle
L1: DEC  R24          ; 1 cycle
    BRNE L1           ; 2 cycles taken, 1 not taken
```

**Solution.** The body executes 200 times. For the first 199 passes the branch is taken: $199 \times (1 + 2) = 597$ cycles. On the 200th, `DEC` brings R24 to zero and `BRNE` falls through: $1 + 1 = 2$ cycles. With the initial `LDI`:

$$c = 1 + 597 + 2 = 600\ \text{cycles}, \qquad t = \frac{600}{16 \times 10^{6}} = 37.5\ \mu\text{s}.$$

An 8-bit counter cannot exceed 255 passes, so longer delays nest loops, as `delayMicroseconds()` does. An interrupt adds its own cycles, so busy-waits are accurate only with interrupts disabled.

### Example 2 — Two's complement and the flags

(a) Write $-37$ as 8-bit two's complement in binary and hexadecimal. (b) An 8-bit signed addition computes $100 + 50$. What is stored, and which flags are set?

**Solution.** (a) $37 = 32 + 4 + 1 = 0\text{b}0010\,0101$. Inverting gives $0\text{b}1101\,1010$; adding 1 gives $0\text{b}1101\,1011 = 0\text{xDB}$. Check: $-128 + 64 + 16 + 8 + 2 + 1 = -37$; unsigned, $0\text{xDB} = 256 - 37$.

(b) $100 + 50 = 150$ exceeds 127. The adder gives $150 = 0\text{b}1001\,0110 = 0\text{x}96$, which as a signed byte is $150 - 256 = -106$. Two positives have produced a negative, so V and N are set. There is no carry out of bit 7 ($150 < 256$), so C and Z are clear. A C `int8_t` would silently store $-106$, the classic sign of an accumulator declared too narrow; use `int16_t` or wider.

### Example 3 — Fixed-point conversion of an ADC reading

An LM35 gives 10 mV per °C and is read by the 10-bit ADC with a 5.000 V reference, returning 61. Compute the temperature in tenths of a degree with integers only, and estimate the error.

**Solution.** The voltage is $V = 61 \times 5000/1024 = 297.85$ mV, so the exact temperature is $29.785\ ^\circ$C. In integers, $61 \times 5000 = 305{,}000$ exceeds 16 bits, so a 32-bit intermediate is needed:

```c
uint16_t count = 61;
uint32_t mv = ((uint32_t)count * 5000UL) >> 10;    /* 305000 / 1024 = 297 (truncated) */
uint16_t t_tenths = mv;                              /* 10 mV/degC -> 1 mV = 0.1 degC */
```

This gives `mv = 297`, hence $29.7\ ^\circ$C, a truncation error of $0.085\ ^\circ$C. Rounding by adding half the divisor, `(count * 5000UL + 512) >> 10`, gives $\lfloor 305{,}512/1024 \rfloor = 298$ and $29.8\ ^\circ$C, an error of $0.015\ ^\circ$C. The ADC's own step of $4.88\ \text{mV} = 0.49\ ^\circ$C dominates, so the integer method loses nothing, at the cost of a multiply and a shift against several hundred cycles for `float`.

## Common Misconceptions

- **"A 16 MHz processor executes 16 million instructions per second."** Only for single-cycle instructions; loads, stores, branches and calls take 2–4, so realistic AVR code runs at 10–12 MIPS.
- **"Overflow is always a bug."** Unsigned overflow is defined modular arithmetic, relied on in `millis() - start`; signed overflow is undefined behaviour and genuinely a bug.
- **"Fixed point is less accurate than floating point."** For a known range, 32-bit fixed point with 16 fractional bits resolves $1.5 \times 10^{-5}$ everywhere, better than a `float` above about 256.
- **"The sign bit just flips the sign."** That is sign-magnitude, which modern processors do not use. In two's complement the top bit has weight $-2^{n-1}$, so $0\text{xFF}$ is $-1$, not $-127$.
- **"`delay()` is as accurate as the clock."** It counts `millis()` ticks, accurate to about 1 ms. Exact timing comes from hardware timers (Lesson m2-l2).

## Connections

- A 50 ppm crystal adds 100 ppm to $g$ from a pendulum period (Lesson m3-l3), negligible against a 0.1% length error.
- Fixed-point quantisation has rms $2^{-n}/\sqrt{12}$, the formula for ADC noise in Lesson m2-l3; numerical-methods-m2-l1 treats floating-point rounding.
- Unsigned arithmetic is the cyclic group $\mathbb{Z}/2^{n}\mathbb{Z}$ of algebra; the correctness of `millis() - start` is a statement about subtraction in that group.
- The quartz resonator is a driven damped oscillator (waves-and-optics-m1-l1) with quality factor $10^{4}$–$10^{6}$; its high Q gives its stability.

## Quick Check

1. A ±0.5% ceramic resonator times a 10 s interval. What is the worst error in ms? Repeat for a ±20 ppm crystal.
2. A loop of 6 single-cycle instructions plus a taken 2-cycle branch runs 1000 times at 16 MHz. How long does it take?
3. Write $-100$ and $+100$ as 8-bit two's complement hexadecimal, compute their sum and state the flags.
4. A `uint16_t` timer reads 65,500 at one event and 300 at the next. How many ticks elapsed, and why does simple subtraction give the right answer?
5. Represent 3.1416 in $Q_{3.12}$ (16-bit signed) and state the maximum error.

## Takeaway

- The 16 MHz clock period is 62.5 ns, and its fractional accuracy is inherited by every timing measurement.
- Most AVR register instructions take one cycle, memory accesses and taken branches two; execution time is total cycles over $f_{\text{clk}}$.
- Unsigned integers wrap modulo $2^{n}$, making elapsed-time subtraction safe; signed overflow is undefined and prevented by widening the type.
- Two's complement gives the top bit weight $-2^{n-1}$; the V flag detects signed overflow and C unsigned overflow.
- Fixed-point $Q_{m.n}$ turns sensor scaling into a multiply and a shift with constant absolute error, the right choice for fast loops without a floating-point unit.
