***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: microcontroller-and-embedded-systems
courseName: Microcontroller and Embedded Systems (Physics Option B)
moduleId: microcontroller-and-embedded-systems-module-2
moduleName: Digital I/O, Timing and Analogue Interfacing
lessonId: microcontroller-and-embedded-systems-m2-l2
lessonName: Timers, Counters and PWM
lessonNumber: 5
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - microcontroller-and-embedded-systems-m2-l1
  - communication-electronics-m1-l3
  - basic-electronics-m1-l2
learningObjectives:
  - Derive overflow, compare-match and PWM frequencies from the clock, prescaler and register values, and choose a prescaler and compare value for a target frequency.
  - Configure Timer1 in normal, CTC and fast PWM modes and write the matching interrupt service routines.
  - Use input capture to time external edges to the resolution of the timer clock and extend the 16-bit range with an overflow count.
  - Design a PWM plus RC filter as a crude DAC and estimate its ripple.
concepts:
  - Prescaler
  - Overflow and compare match
  - CTC mode
  - Fast PWM and duty cycle
  - Input capture
  - Event counting
  - RC-filtered PWM
tags:
  - physics
  - microcontroller-and-embedded-systems
  - timers
  - pwm
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - computational
  - derivation
  - conceptual
***

# Timers, Counters and PWM

## Overview

A hardware timer is a binary counter that advances on every tick of a divided clock and runs independently of the CPU. Because it needs no instructions, it measures and generates time with a precision that software loops cannot match, and it is the heart of every physics instrument that records when something happened or drives something at a set rate. This lesson derives the frequency formulas for the ATmega328P timers, configures the 16-bit Timer1 in its three most useful modes, and applies it to periodic interrupts, pulse-width modulation (PWM), event counting and input capture. A worked PWM-plus-RC example shows how a digital pin can produce an analogue voltage, which anticipates the converters of Lesson m2-l3.

## Learning Path

- **What you should already know**: interrupts and ISRs (Lesson m2-l1); clock period and cycle counting (Lesson m1-l2); the RC low-pass filter (basic-electronics-m1-l2); crystal frequency stability (communication-electronics-m1-l3).
- **What this lesson adds**: prescalers, overflow, compare match, CTC and fast PWM, input capture, duty cycle and ripple.
- **What later lessons this will unlock**: fixed-rate ADC sampling (Lesson m2-l3); timestamps for logging (Lesson m3-l2); the input-capture photogate of the project (Lesson m3-l3).

## Core Explanation

### Timer structure and prescaler

The ATmega328P has Timer0 and Timer2 (8-bit) and Timer1 (16-bit). Each has a counter register `TCNTn`, one or two compare registers `OCRnA`, `OCRnB`, control registers `TCCRnA`, `TCCRnB`, and interrupt flags enabled through `TIMSKn`. The counter advances at $f_{\text{clk}}/N$, where the **prescaler** $N$ is 1, 8, 64, 256 or 1024, selected by the clock-select bits `CS12:0` (001, 010, 011, 100, 101 for Timer1; 000 stops the timer). The tick period is $N/f_{\text{clk}}$ and the full 16-bit range lasts $65{,}536N/f_{\text{clk}}$.

| Prescaler $N$ | Tick (16 MHz) | Timer1 overflow period |
|---|---|---|
| 1 | 62.5 ns | 4.096 ms |
| 8 | 0.5 µs | 32.768 ms |
| 64 | 4 µs | 262.144 ms |
| 256 | 16 µs | 1.0486 s |
| 1024 | 64 µs | 4.194 s |

A coarse prescaler gives a long range and poor resolution, a fine one the reverse. In normal mode the counter counts to 0xFFFF and wraps, setting the overflow flag `TOV1`, which raises `ISR(TIMER1_OVF_vect)` if `TOIE1` is set. Timer0 is used by the Arduino core: with $N = 64$ it overflows every $64 \times 256/16\ \text{MHz} = 1.024$ ms, and each overflow advances `millis()`.

### Compare match and CTC mode

When `TCNT1` equals `OCR1A` the compare flag is set. In **CTC mode** (clear timer on compare match, `WGM12 = 1`) the counter also returns to zero, so the counter runs from 0 to $\text{OCR1A}$ and has $\text{OCR1A} + 1$ states. The interrupt frequency is

$$f = \frac{f_{\text{clk}}}{N\,(1 + \text{OCR1A})}, \qquad \text{OCR1A} = \frac{f_{\text{clk}}}{N f} - 1.$$

If the output-compare pin is set to toggle, the pin frequency is $f/2$, i.e. $f_{\text{clk}}/[2N(1+\text{OCR1A})]$. The design rule is to choose the smallest prescaler for which $\text{OCR1A} \le 65{,}535$, since that gives the finest step in frequency, and then check that the result is an integer. The "$-1$" is the commonest source of off-by-one error. An interrupt from CTC is exact and jitter-free in time because the CPU only reacts to the hardware's regular pulse; the ISR's own latency delays the response but not the next period.

```c
ISR(TIMER1_COMPA_vect) { tick++; }
void timer1_1kHz(void) {
    TCCR1A = 0;
    TCCR1B = (1 << WGM12) | (1 << CS11) | (1 << CS10);   /* CTC, N = 64 */
    OCR1A  = 249;                                         /* 16e6/(64*1000) - 1 */
    TIMSK1 = (1 << OCIE1A);
    sei();
}
```

### Fast PWM and duty cycle

In **fast PWM** the counter counts from 0 to TOP, the output pin is set at zero and cleared at the compare match (non-inverting). The pin is high for $\text{OCR}+1$ of the $\text{TOP}+1$ counts, so

$$D = \frac{\text{OCR}+1}{\text{TOP}+1}, \qquad f_{\text{PWM}} = \frac{f_{\text{clk}}}{N(\text{TOP}+1)}.$$

For 8-bit operation TOP $= 255$. With $N = 64$, $f_{\text{PWM}} = 16\ \text{MHz}/(64 \times 256) = 976.56$ Hz, the rate Arduino's `analogWrite()` gives on pins 5 and 6. Pins 9, 10, 3 and 11 use **phase-correct** PWM, which counts up to 255 and back down, so $f = f_{\text{clk}}/(N \times 510) = 490.2$ Hz at $N = 64$. Fast PWM with Timer1's `ICR1` as TOP lets one choose any TOP, hence any frequency and resolution; a hobby servo needs a 50 Hz period with pulses of 1–2 ms, so with $N = 8$ and $\text{TOP} = 16{,}000{,}000/(8 \times 50) - 1 = 39{,}999$, a 1.5 ms pulse is $\text{OCR} = 1.5\ \text{ms} \times 2\ \text{MHz} = 3000$ counts.

The average voltage is $\langle V \rangle = D\,V_{CC}$, and a series resistor and capacitor reduce the ripple, giving a crude **digital-to-analogue converter**. The peak-to-peak ripple of a first-order $RC$ filter, valid when the PWM period $T \ll RC$, is

$$\Delta V \approx \frac{V_{CC}\,D(1-D)}{f_{\text{PWM}}RC},$$

so the ripple falls as the time constant grows, but so does the settling time (about $5RC$ to settle to 1%).

### Counting events and input capture

Set `CS12:0` to 111 and Timer1 counts rising edges on pin T1 (PD5) directly, with no prescaler and no CPU load. Counting for a gate time $t_g$ measures frequency with a resolution of $\pm1/t_g$; for 1 Hz resolution one needs 1 s, which is poor for slow signals. **Reciprocal counting** is better: time a whole period with the fast internal clock. This is **input capture**: when the edge arrives at ICP1 (PB0, pin 8), the hardware copies `TCNT1` into `ICR1` in the same cycle, so the timestamp is independent of interrupt latency, and an interrupt (`ICIE1`) then lets software read it. The edge polarity is chosen by `ICES1`. A period is the difference of two captures, and the 16-bit range is extended by counting overflows in an ISR to give a 32-bit time. Using unsigned modular subtraction (Lesson m1-l2) the difference is correct across one overflow without extra code.

## Key Ideas

- **Prescaler** $N$ trades range for resolution: tick $= N/f_{\text{clk}}$.
- **CTC**: $f = f_{\text{clk}}/[N(1+\text{OCR})]$; always subtract 1 when computing OCR.
- **Fast PWM**: $D = (\text{OCR}+1)/(\text{TOP}+1)$ and $f = f_{\text{clk}}/[N(\text{TOP}+1)]$; phase-correct halves the rate.
- **RC-filtered PWM** gives $\langle V\rangle = DV_{CC}$ with ripple $V_{CC}D(1-D)/(fRC)$.
- **Input capture** timestamps an edge in hardware, so latency does not matter.
- **Reciprocal counting** beats gated counting for low frequencies.

## Worked Examples

### Example 1 — Choosing a prescaler and compare value

(a) Generate a 1 Hz interrupt. (b) Toggle a pin at 440 Hz, the note A.

**Solution.** (a) We need $N(1+\text{OCR}) = 16\times10^{6}$. For $N = 64$, $\text{OCR} = 249{,}999$ exceeds 16 bits; for $N = 256$, $1 + \text{OCR} = 62{,}500$, so $\text{OCR1A} = 62{,}499$, an exact integer with `CS12` set. (b) The toggling pin needs $f_{\text{int}} = 880$ Hz. For $N = 8$: $1+\text{OCR} = 16\times10^{6}/(8 \times 880) = 2272.7$, so $\text{OCR1A} = 2272$ (2273 states), giving $f = 16\times10^{6}/(2 \times 8 \times 2273) = 439.95$ Hz, an error of $-0.012\%$. The rule of the previous section picks $N = 1$, which also fits: $\text{OCR1A} = 18{,}181$ gives 439.996 Hz, an error of $-0.001\%$.

### Example 2 — PWM as a DAC

An 8-bit fast PWM at 976.56 Hz drives a 10 kΩ and 1 µF filter at $V_{CC} = 5$ V. Choose OCR for 30% duty, and find the mean and ripple.

**Solution.** $D = (\text{OCR}+1)/256 = 0.30$ gives $\text{OCR} = 75.8 \to 76$, so $D = 77/256 = 30.08\%$ and $\langle V\rangle = 1.504$ V. (`analogWrite(pin, 76)` produces this.) The time constant is $RC = 10$ ms, so $f_{\text{PWM}}RC = 9.77$ and

$$\Delta V \approx \frac{5 \times 0.3 \times 0.7}{9.77} = 0.108\ \text{V},$$

confirmed by the exact exponential expression, which also gives 0.1075 V. The filter corner is $1/(2\pi RC) = 15.9$ Hz, so the output settles in about $5RC = 50$ ms. A 0.1 V ripple is 22 ADC counts of 4.88 mV, so a good DAC needs a higher PWM frequency or a second filter stage; an op-amp buffer is needed before loading the node, since the 10 kΩ source impedance would sag under any current.

### Example 3 — Timing an edge interval with input capture

With $N = 8$ (0.5 µs per tick), the captured values for two successive rising edges are `ICR1` $= 52{,}100$ and $9{,}400$, with one overflow between them. Find the interval, its quantisation uncertainty and the frequency.

**Solution.** The raw count is $65{,}536 + 9{,}400 - 52{,}100 = 22{,}836$ ticks, which unsigned 16-bit subtraction gives directly as $9400 - 52100 \bmod 65{,}536 = 22{,}836$. The interval is $22{,}836 \times 0.5\ \mu\text{s} = 11{,}418\ \mu$s $= 11.418$ ms and the frequency is $1/11.418\ \text{ms} = 87.58$ Hz. The quantisation uncertainty is $\pm 1$ tick $= \pm0.5\ \mu$s, a fractional error of $4.4\times10^{-5}$. A 1 s gated count of the same signal would give $88 \pm 1$ Hz, i.e. 1.1%, about 26,000 times worse.

## Common Misconceptions

- **"OCR1A = 249 means 249 counts per period."** The counter visits 0 to 249 inclusive, so there are 250 counts per period.
- **"`analogWrite()` gives a true analogue voltage."** It gives a pulse train; the average is $DV_{CC}$ only after filtering, and a load responding quickly sees the pulses.
- **"The timer needs the CPU to keep counting."** The timer runs on its own; the CPU only reads or reacts to it. Even `delay()` does not stop the timers.
- **"Higher PWM frequency is always better."** It lowers ripple but raises switching losses and, in 8-bit PWM, it cannot exceed $f_{\text{clk}}/(256N)$.

## Connections

- The prescaler is a frequency divider chain from digital electronics, and the timer's accuracy is the crystal's: a 50 ppm clock gives a 50 ppm error (communication-electronics-m1-l3).
- The ripple formula is the RC transient of basic-electronics-m1-l2, with the PWM spectrum filtered like the low-pass filters of communication-electronics-m1-l2.
- Averaging a pulse train to recover a level is the low-pass reconstruction used after sampling in communication-electronics-m3-l3.
- microcontroller-and-embedded-systems-lab-m1-l4 uses PWM for motor and heater control; here the register-level origin of its duty-cycle numbers is explained.
- Input capture times the period of an oscillator (waves-and-optics-m1-l1), yielding $g$ from a pendulum in Lesson m3-l3.

## Quick Check

1. A CTC timer with $N = 256$ and $\text{OCR1A} = 12{,}499$ runs at 16 MHz. What is the interrupt frequency?
2. Calculate the fast-PWM frequency and the OCR for 25% duty with $N = 8$ and TOP $= 255$.
3. An RC filter has $R = 4.7$ kΩ and $C = 2.2$ µF. What is its time constant, and what is the ripple at $D = 0.5$ and $f = 490$ Hz, $V_{CC} = 5$ V?
4. Explain why input capture is more accurate than reading `TCNT1` in an INT0 ISR.
5. Which prescaler gives the longest interval you can time without an overflow ISR, and what resolution results?

## Takeaway

- Timers count a prescaled clock independently of the CPU, so they time and generate signals with the clock's own accuracy.
- CTC gives interrupt rates of $f_{\text{clk}}/[N(1+\text{OCR})]$; fast PWM gives $D = (\text{OCR}+1)/(\text{TOP}+1)$.
- An RC filter turns PWM into an analogue level with a computable ripple and settling time.
- Input capture timestamps edges in hardware, and an overflow count extends the 16-bit range to 32 bits.
