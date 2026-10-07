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
lessonId: microcontroller-and-embedded-systems-m2-l1
lessonName: GPIO Registers, Pull-ups, Debouncing and Interrupts
lessonNumber: 4
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - microcontroller-and-embedded-systems-m1-l3
  - basic-electronics-m1-l2
  - basic-electronics-m2-l2
learningObjectives:
  - Configure a GPIO pin as output, input or input with pull-up using the DDR, PORT and PIN registers, and choose a series resistor for an LED from the pin's current limits.
  - Explain floating inputs, logic thresholds and pull-up resistors, and design a hardware RC and software debounce for a mechanical switch.
  - Configure external interrupts through EICRA, EIMSK and the I flag, and write a correct interrupt service routine using volatile variables.
  - Compute interrupt latency, execution time and processor load in clock cycles for an event of known rate.
concepts:
  - Data direction register
  - PORT and PIN registers
  - Pull-up resistor
  - Switch bounce
  - Schmitt trigger debounce
  - External interrupt INT0
  - Interrupt service routine and latency
tags:
  - physics
  - microcontroller-and-embedded-systems
  - gpio
  - interrupts
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - computational
  - conceptual
  - short-answer
***

# GPIO Registers, Pull-ups, Debouncing and Interrupts

## Overview

A general-purpose input/output (GPIO) pin is the simplest peripheral a microcontroller has, and the one through which sensors, switches and indicators are first connected. This lesson shows how three registers control a pin, what its electrical limits are, why a floating input reads nonsense and how a pull-up fixes that. It then treats contact bounce and introduces interrupts, by which hardware forces the CPU to run a short service routine. Counting cycles gives the latency and processor load, which decide whether a photogate timer can be built on an 8-bit controller.

## Learning Path

- **What you should already know**: bit masking and `volatile` (Lesson m1-l3); cycle counting at 16 MHz (Lesson m1-l2); the RC charging curve (basic-electronics-m1-l2); the MOSFET as a switch (basic-electronics-m2-l2).
- **What this lesson adds**: the DDR, PORT and PIN registers; pin limits; pull-ups; switch bounce and its cures; external interrupts, latency and ISR design rules.
- **What later lessons this will unlock**: timer interrupts (Lesson m2-l2); ADC interrupts (Lesson m2-l3); UART interrupts (Lesson m3-l1); the photogate project (Lesson m3-l3).

## Core Explanation

### Three registers per port

The ATmega328P groups pins into ports B, C and D, each with three 8-bit registers named after the port letter $x$.

| Register | I/O address (data address) | Function |
|---|---|---|
| `DDRx` | 0x04, 0x07, 0x0A (0x24, 0x27, 0x2A) | Data direction: bit = 1 makes the pin an output |
| `PORTx` | 0x05, 0x08, 0x0B (0x25, 0x28, 0x2B) | Output level, or pull-up enable if the pin is an input |
| `PINx` | 0x03, 0x06, 0x09 (0x23, 0x26, 0x29) | Reads the actual voltage on the pin; writing 1 toggles `PORTx` |

For a given pin the two bits `DDRx`, `PORTx` select one of four states.

| DDR | PORT | Pin state |
|---|---|---|
| 0 | 0 | Input, high impedance (tri-state) |
| 0 | 1 | Input with internal pull-up of 20–50 kΩ |
| 1 | 0 | Output driving low |
| 1 | 1 | Output driving high |

On the Uno, pins 8–13 are PB0–PB5, pins 0–7 are PD0–PD7 and A0–A5 are PC0–PC5. Read `PINx`, never `PORTx`: for an input, `PORTx` holds only the pull-up setting. After enabling a pull-up, insert a `NOP` before reading, since an input synchroniser delays the value by up to 1.5 cycles.

### Electrical limits of a pin

An output pin is a complementary MOSFET pair (basic-electronics-m2-l2) joining the pin to $V_{CC}$ or ground. The datasheet allows 20 mA per pin in normal use, 40 mA absolute maximum, and about 200 mA for the package. An LED of forward voltage $V_F$ driven at current $I$ needs a series resistor

$$R = \frac{V_{CC} - V_F}{I},$$

because its current rises exponentially with voltage. Loads above 20 mA, such as motors, need a transistor.

An input compares the pin voltage with two thresholds: at $V_{CC} = 5$ V a voltage below $V_{IL} = 0.3\,V_{CC} = 1.5$ V reads as 0 and above $V_{IH} = 0.6\,V_{CC} = 3.0$ V reads as 1. Between these the result is undefined, and a **floating** input, connected to nothing, drifts through this region under capacitive pickup of mains hum, returning random bits.

### Pull-up resistors

A switch grounds the pin when pressed but leaves it floating when open. A **pull-up resistor** $R_p$ to $V_{CC}$ supplies the missing level: open, the pin sits at $V_{CC}$; closed, it is at 0 V and the resistor carries $V_{CC}/R_p$, which is $5/30{,}000 = 167\ \mu\text{A}$ for the internal 30 kΩ and 0.5 mA for an external 10 kΩ. A larger resistor saves current but slows the node, since pin capacitance $C$ charges with $\tau = R_pC$. For $C = 50$ pF and 30 kΩ the pin reaches 3.0 V after $\tau\ln(5/2) = 0.916\tau = 1.4\ \mu$s. Pressed therefore reads **0**: the logic is inverted.

### Switch bounce and its cures

Metal contacts rebound elastically, closing and opening several times before settling. An oscilloscope (basic-electronics-m2-l3) shows a burst lasting typically 1–10 ms, up to 20 ms for large switches, and a fast microcontroller reads each pulse as a separate press.

**Hardware debounce.** A capacitor $C$ across the switch, with the pull-up $R$, forms a low-pass filter (communication-electronics-m1-l2) of time constant $RC$. A Schmitt trigger buffer such as the 74HC14, with distinct rising and falling thresholds $V_{T+}$ and $V_{T-}$, squares the slow exponential into a clean edge. After the switch opens the output changes only when the capacitor reaches $V_{T+}$:

$$t = RC\ln\frac{V_{CC}}{V_{CC} - V_{T+}}.$$

Open intervals shorter than this are ignored.

**Software debounce.** Sample at a fixed interval and accept a new state only when it persists. Shifting samples into a byte,

```c
volatile uint8_t hist = 0xFF;          /* 1 = released (pull-up) */
void sample(void) {                    /* called every 2 ms from a timer */
    hist = (uint8_t)((hist << 1) | ((PINB >> PB0) & 1));
    if (hist == 0x00)      pressed = 1;   /* 8 consecutive lows  = 16 ms */
    else if (hist == 0xFF) pressed = 0;   /* 8 consecutive highs */
}
```

accepts a change after 8 agreeing samples, 16 ms. Run from a timer or `millis()` it never blocks, unlike `delay(20)`.

### Interrupts

With an **interrupt**, the CPU finishes its current instruction, pushes the program counter, clears the global enable bit I in SREG and jumps to the **interrupt vector**, a fixed flash slot holding a `JMP` to the **interrupt service routine** (ISR). `RETI` restores the program counter and sets I. A lower vector number means higher priority (reset 0, INT0 1, INT1 2).

The ATmega328P has two external interrupt pins, INT0 (PD2, Uno pin 2) and INT1 (PD3, pin 3), with a configurable trigger.

| ISC01 | ISC00 | INT0 triggers on |
|---|---|---|
| 0 | 0 | Low level |
| 0 | 1 | Any logical change |
| 1 | 0 | Falling edge |
| 1 | 1 | Rising edge |

These bits lie in `EICRA`, `EIMSK` bit 0 enables INT0, and `sei()` sets I. Any pin can raise a **pin-change interrupt** via `PCICR` and `PCMSK0..2`, but a port shares one vector, so the ISR must read the port to find the pin.

```c
volatile uint8_t event = 0;
ISR(INT0_vect) { event = 1; }          /* keep it short */

void setup(void) {
    DDRD  &= ~(1 << PD2);              /* input */
    PORTD |=  (1 << PD2);              /* pull-up */
    EICRA  = (1 << ISC01);             /* falling edge */
    EIMSK  = (1 << INT0);              /* enable INT0 */
    sei();                             /* global enable */
}
```

### Latency, cost and rules for ISRs

Hardware response takes 4 cycles, the vector `JMP` 3, and the compiler's prologue saves the registers used. A multi-cycle instruction in progress adds up to 3–4 cycles. The **interrupt latency** is the time from event to the first useful ISR instruction. The **processor load** for event rate $f$ and ISR cost $c$ cycles is $f\,c/f_{\text{clk}}$.

Five rules keep ISRs correct. Keep them short, since other interrupts wait. Declare shared variables `volatile`. Never call `delay()` or `Serial.print()`. Read multi-byte shared variables in an atomic block, since an interrupt may change a 32-bit value halfway through the several instructions needed to read it. And for a switch, add a 20 ms lockout, otherwise every bounce fires the ISR.

## Key Ideas

- **Registers**: `DDRx` sets direction, `PORTx` sets output level or pull-up, `PINx` reads the pin.
- **Limits**: 20 mA per pin; below $0.3V_{CC}$ reads 0, above $0.6V_{CC}$ reads 1; a floating input reads random.
- **Pull-up**: defines the open-switch level; pressed reads 0.
- **Bounce**: contacts chatter for 1–20 ms; RC plus Schmitt trigger or consecutive-sample logic removes it.
- **Interrupt**: latency is 7 cycles plus prologue plus any instruction in progress; load is $f\,c/f_{\text{clk}}$.
- **ISR rules**: short, `volatile`, atomic multi-byte reads, no blocking calls.

## Worked Examples

### Example 1 — An LED and a button on port B

An LED with $V_F = 2.0$ V is wired from PB5 through a resistor to ground, and a button joins PB0 to ground. Choose the resistor, give the register settings and the toggle cost.

**Solution.** For about 10 mA, $R = (5.0 - 2.0)/0.010 = 300\ \Omega$. The standard 330 Ω gives $I = 3.0/330 = 9.1$ mA and dissipates $I^{2}R = 27$ mW. PB5 is an output, so bit 5 of `DDRB` is set: $\text{DDRB} = 1 \ll 5 = 0\text{x}20$. PB0 is an input with pull-up: its `DDRB` bit stays 0 and bit 0 of `PORTB` is set, so $\text{PORTB} = 0\text{x}01$ with the LED initially low. The button is pressed when `!(PINB & (1 << PB0))` is true. `PINB = (1 << PB5);` toggles the LED as one `SBI` of 2 cycles, 125 ns; `digitalWrite()` takes about 25 times longer.

### Example 2 — Designing an RC debounce

A switch bounces for up to 5 ms. A 10 kΩ pull-up and a capacitor across the switch drive a Schmitt trigger with $V_{T+} = 3.0$ V and $V_{T-} = 1.8$ V at $V_{CC} = 5$ V. Choose $C$ so that 5 ms bounces are ignored, and find the delay.

**Solution.** On release the capacitor charges through $R = 10\ \text{k}\Omega$ from nearly 0 V and reaches $V_{T+}$ after $t = RC\ln(5/2) = 0.916\,RC$. Ignoring 5 ms open intervals needs $0.916RC \ge 5$ ms, so $RC \ge 5.46$ ms. Choosing $C = 1\ \mu$F gives $RC = 10$ ms and $t_{\text{rise}} = 9.16$ ms, a safety factor of 1.8. On pressing, the switch discharges the capacitor in microseconds, so the 9.16 ms delay applies only to release. A larger time constant rejects more but responds more slowly.

### Example 3 — Latency and load of a 10 kHz interrupt

An ISR for INT0 consists of `event = 1;` (`LDI`, `STS`: 3 cycles). The compiler's prologue is `push r1; push r0; in r0,SREG; push r0; eor r1,r1; push r24`, and the epilogue is `pop r24; pop r0; out SREG,r0; pop r0; pop r1; reti`. Find the latency, the total ISR time and the load at 10 kHz.

**Solution.** The prologue costs $2 + 2 + 1 + 2 + 1 + 2 = 10$ cycles. The hardware response is 4 cycles and the vector `JMP` 3, so the first useful instruction runs after $4 + 3 + 10 = 17$ cycles, a latency of $17/16\ \text{MHz} = 1.06\ \mu$s (plus up to 4 cycles if a long instruction was in progress). The epilogue costs $2 + 2 + 1 + 2 + 2 + 4 = 13$ cycles, so the ISR occupies $7 + 10 + 3 + 13 = 33$ cycles $= 2.06\ \mu$s. At 10 kHz the load is

$$\frac{10^{4} \times 33}{16 \times 10^{6}} = 0.0206 = 2.06\%.$$

A 10 kHz train is easy, while a 500 kHz one must be counted by a hardware timer (Lesson m2-l2).

## Common Misconceptions

- **"An unconnected input reads 0."** It reads stray pickup and may oscillate. Set unused pins as outputs or pull-up inputs.
- **"`PORTx` shows the state of an input pin."** For an input it records only the pull-up setting; the voltage is in `PINx`.
- **"Debouncing is only needed for old switches."** Every mechanical contact bounces, including new tactile buttons; only optical gates do not.
- **"An interrupt is instantaneous."** There are at least 7 cycles of latency plus the prologue, and the ISR blocks other interrupts.

## Connections

- The debounce time constant is the RC transient of basic-electronics-m1-l2 and electricity-and-magnetism-m2-l3, and the filter is the first-order low-pass of communication-electronics-m1-l2.
- microcontroller-and-embedded-systems-lab-m1-l1 practises pull-up and debounce wiring; this lesson explains the registers behind its `pinMode` and `attachInterrupt` calls.
- Schmitt hysteresis resists noise chatter (communication-electronics-m3-l2).
- The output stage is the MOSFET pair of basic-electronics-m2-l2.
- Interrupt latency in cycles is the first term of the timing budget of the photogate project (Lesson m3-l3).

## Quick Check

1. Give `DDRB` and `PORTB` for PB2 an input with pull-up and PB3 an output driven high, other pins plain inputs.
2. A floating input sits at 2.2 V with $V_{CC} = 5$ V. What is read, and why is this a design error?
3. A 4.7 kΩ pull-up and 100 nF capacitor debounce a switch with $V_{T+} = 3.0$ V. How long is the rise after release?
4. Give the `EICRA` value to make INT0 respond to a rising edge, and say why the ISR declares its flag `volatile`.
5. An ISR costs 40 cycles at 16 MHz. What is the load for 25,000 events per second?

## Takeaway

- Each pin is governed by one bit in `DDRx`, `PORTx` and `PINx`; the four combinations give tri-state input, pull-up input, low output and high output.
- Respect the pin limits, never leave an input floating, and expect inverted logic with a pull-up.
- Remove switch bounce with an RC plus Schmitt trigger or consecutive-sample logic, never with blocking delays.
- An interrupt costs at least 7 cycles plus the prologue; ISRs must be short and use `volatile`.
