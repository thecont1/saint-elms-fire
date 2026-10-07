***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: microcontroller-and-embedded-systems
courseName: Microcontroller and Embedded Systems (Physics Option B)
moduleId: microcontroller-and-embedded-systems-module-3
moduleName: Serial Buses, Data Logging and the Instrumentation Project
lessonId: microcontroller-and-embedded-systems-m3-l1
lessonName: Serial Communication with UART, SPI and I2C
lessonNumber: 7
moduleNumber: 3
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 7
prerequisites:
  - microcontroller-and-embedded-systems-m2-l3
  - communication-electronics-m3-l3
  - basic-electronics-m2-l3
learningObjectives:
  - Compute UART baud-rate register values, the resulting baud error and the tolerance of a frame, and work out byte times and throughput.
  - Describe SPI clock modes and divisors and compute transfer times for multi-byte exchanges.
  - Describe the I2C START, address, acknowledge and STOP sequence, set the TWBR value for a given clock, and size the pull-up resistors from rise-time and sink-current limits.
  - Choose between UART, SPI and I2C for a given sensor and data rate, and read sensor data into a Python host program.
concepts:
  - UART frame and baud rate
  - UBRR baud divisor
  - SPI modes CPOL and CPHA
  - I2C addressing and acknowledge
  - Open-drain bus and pull-up sizing
  - Transaction time
  - Serial host interface
tags:
  - physics
  - microcontroller-and-embedded-systems
  - serial-communication
  - buses
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - computational
  - conceptual
  - short-answer
***

# Serial Communication with UART, SPI and I2C

## Overview

A microcontroller reaches the outside world through serial links: one bit at a time over few wires, which saves pins and lets cables be long. Three protocols cover almost every laboratory device. The UART connects the chip to a computer, SPI links fast peripherals such as ADCs and SD cards, and I2C shares two wires among many slower sensors. This lesson derives the numbers that make each work: baud-rate divisors and their error, SPI clock divisors, I2C clock and pull-up resistor values. It tabulates the timing of each, so that the time to read a sensor can be computed before any wire is connected, and ends with the Python host side of a serial link.

## Learning Path

- **What you should already know**: bit rates and digital channels (communication-electronics-m3-l3); the oscilloscope as a decoder of digital waveforms (basic-electronics-m2-l3); the RC charging curve (basic-electronics-m1-l2); the ADC and its data rates (Lesson m2-l3).
- **What this lesson adds**: the UART frame and baud divisor; SPI modes and clocks; I2C addressing, clock and pull-up sizing; timing tables for all three.
- **What later lessons this will unlock**: writing to an SD card and reading a real-time clock (Lesson m3-l2); streaming the project data to Python (Lesson m3-l3).

## Core Explanation

### UART: asynchronous serial

A **UART** has no shared clock; each side runs at an agreed **baud rate**. A line idles high. A byte is sent as a **start bit** (low), eight data bits least-significant first, an optional parity bit and one **stop bit** (high), so the usual 8N1 frame is 10 bits for 8 data bits. The byte time is $10/\text{baud}$.

| Baud | Byte time | Max throughput |
|---|---|---|
| 9,600 | 1.042 ms | 960 B/s |
| 57,600 | 173.6 µs | 5,760 B/s |
| 115,200 | 86.8 µs | 11,520 B/s |
| 250,000 | 40 µs | 25,000 B/s |

The receiver detects the falling start edge, then samples each bit at its centre, using 16 samples per bit time. The ATmega328P generates the baud clock by dividing $f_{\text{clk}}$ with the 12-bit register `UBRR`:

$$\text{UBRR} = \frac{f_{\text{clk}}}{16\,\text{baud}} - 1,$$

or $f_{\text{clk}}/(8\,\text{baud}) - 1$ in double-speed mode (`U2X0`). The register is an integer, so the actual baud differs from the target.

| Target baud | UBRR | Actual baud | Error |
|---|---|---|---|
| 9,600 | 103 | 9,615 | +0.16% |
| 57,600 | 16 | 58,824 | +2.12% |
| 115,200 | 8 | 111,111 | -3.55% |
| 115,200 (U2X0) | 16 | 117,647 | +2.12% |
| 250,000 | 3 | 250,000 | 0 |

The tolerance follows from geometry. The sampling point of the last data or stop bit is 9.5 bit times after the start edge and must remain within half a bit of its centre, so the *total* mismatch between transmitter and receiver clock must be less than $0.5/9.5 = 5.3\%$; a practical budget is 2–3% per side. The 3.55% error of 115,200 baud without `U2X0` is therefore legal against an exact PC but leaves little for a 0.5% resonator, and is the usual reason for corrupted characters at that speed. UART signals at 0 and 5 V (TTL level); true RS-232 uses $\pm$3 to $\pm$15 V and needs a level converter. On the Uno a USB-to-serial chip links the UART to the computer.

### SPI: fast, synchronous, full duplex

**SPI** uses four wires: SCK (clock from the master), MOSI (master out), MISO (master in) and one chip-select line $\overline{\text{SS}}$ per slave, active low. The master and slave each contain an 8-bit shift register; every clock pulse shifts one bit out of one and into the other, so a byte is exchanged in 8 clocks and sending always means receiving. The data timing depends on two bits, **clock polarity** CPOL (idle level of SCK) and **clock phase** CPHA (which edge samples).

| Mode | CPOL | CPHA | SCK idles | Data sampled on |
|---|---|---|---|---|
| 0 | 0 | 0 | low | rising edge |
| 1 | 0 | 1 | low | falling edge |
| 2 | 1 | 0 | high | falling edge |
| 3 | 1 | 1 | high | rising edge |

The datasheet of the slave states its mode; a mismatch gives bytes shifted by one bit. The clock is $f_{\text{clk}}$ divided by 2, 4, 8, ... 128 through `SPR1:0` and `SPI2X`, and the transfer time of a byte is $8/f_{\text{SCK}}$.

| Divisor | 2 | 4 | 8 | 16 | 32 | 64 | 128 |
|---|---|---|---|---|---|---|---|
| $f_{\text{SCK}}$ | 8 MHz | 4 MHz | 2 MHz | 1 MHz | 500 kHz | 250 kHz | 125 kHz |
| Byte time | 1 µs | 2 µs | 4 µs | 8 µs | 16 µs | 32 µs | 64 µs |

The price of speed is one chip-select line per device.

### I2C: two wires, many devices

**I2C** (TWI) uses only SDA (data) and SCL (clock). Both lines are **open-drain**: any device can pull a line low but only pull-up resistors raise it, which is what allows several devices to share the wires without conflict. A transaction runs:

1. **START**: SDA falls while SCL is high.
2. Seven address bits (most significant first) and a read/write bit.
3. A ninth clock in which the addressed slave pulls SDA low: the **acknowledge** (ACK). No pull-down means NACK.
4. Data bytes, each followed by an ACK from the receiver.
5. **STOP**: SDA rises while SCL is high.

A **repeated START** allows a read after a write without releasing the bus. Seven-bit addresses give 112 usable devices (0x08–0x77); two devices with the same address cannot share a bus. A slow slave may hold SCL low (**clock stretching**). The clock frequency is set by `TWBR` and the prescaler (`TWPS`):

$$f_{\text{SCL}} = \frac{f_{\text{clk}}}{16 + 2\,\text{TWBR}\cdot 4^{\text{TWPS}}}.$$

With $\text{TWPS} = 0$: 100 kHz needs $\text{TWBR} = (160-16)/2 = 72$ and 400 kHz needs 12.

The pull-up sets two limits. The bus capacitance $C_b$ charges through $R_p$, and the standard specification defines the rise time from 30% to 70% of $V_{CC}$ as $t_r = 0.8473R_pC_b$, which must not exceed 1000 ns at 100 kHz and 300 ns at 400 kHz. Thus an upper limit $R_p \le t_r/(0.8473C_b)$. A lower limit comes from the 3 mA a device must sink while holding the line below 0.4 V: $R_p \ge (V_{CC} - 0.4)/3\ \text{mA}$, which is 1.53 kΩ at 5 V. The Arduino's internal pull-ups of 20–50 kΩ are too weak; external 4.7 kΩ is typical.

### Choosing a bus, and the host side

| Feature | UART | SPI | I2C |
|---|---|---|---|
| Wires | 2 (TX, RX) | 3 + one select per slave | 2 shared |
| Clock | none (baud) | master, to 8 MHz here | master, 100 or 400 kHz |
| Devices | point to point | one select each | up to 112 addresses |
| Typical use | PC link, GPS | ADC, SD, display | sensors, RTC |

On the computer, a UART appears as a serial port. In Python:

```python
import serial                                   # pyserial
with serial.Serial("/dev/cu.usbmodem1101", 115200, timeout=1) as port:
    for _ in range(100):
        t_ms, count = port.readline().decode().strip().split(",")
```

## Key Ideas

- **UART**: 8N1 frame is 10 bits; $\text{UBRR} = f_{\text{clk}}/(16\,\text{baud}) - 1$; total clock mismatch must stay below 5.3%.
- **SPI**: shift-register exchange, byte time $8/f_{\text{SCK}}$; modes set by CPOL and CPHA.
- **I2C**: open-drain, 7-bit address, ACK on every byte, $f_{\text{SCL}} = f_{\text{clk}}/(16 + 2\,\text{TWBR})$.
- **Pull-ups**: $R_p$ between $(V_{CC}-0.4)/3\ \text{mA}$ and $t_r/(0.8473C_b)$.
- **Timing tables** give transfer times before the hardware is built.

## Worked Examples

### Example 1 — A UART baud divisor

Calculate the register and the error for 57,600 baud at 16 MHz and decide whether it is safe against a PC.

**Solution.** $f_{\text{clk}}/(16 \times 57{,}600) = 17.36$, so $\text{UBRR} = 16.36 \to 16$. The actual baud is $16\ \text{MHz}/(16 \times 17) = 58{,}823.5$, an error of $+2.12\%$. The total allowed is 5.3%, so this is safe, with 3.2% to spare for resonator tolerance. The byte time is $10/57{,}600 = 173.6\ \mu$s and 100 samples per second of a 12-byte CSV line need $100 \times 12 = 1200$ B/s, 21% of the 5760 B/s capacity.

### Example 2 — I2C pull-up and transaction time

A bus at 5 V has capacitance 100 pF at 400 kHz. (a) Is 4.7 kΩ acceptable? (b) What is the largest resistor? (c) How long does a read of a 16-bit register take?

**Solution.** (a) $t_r = 0.8473 \times 4700 \times 100\ \text{pF} = 398$ ns, over the 300 ns limit for fast mode, so no (it passes for 100 kHz, which allows 1000 ns). (b) $R_p \le 300\ \text{ns}/(0.8473 \times 100\ \text{pF}) = 3.54$ kΩ; the lower limit is 1.53 kΩ, so 2.2 kΩ or 3.3 kΩ works. (c) A register read is START, address+W (9 clocks), register address (9), repeated START, address+R (9), two data bytes (18), STOP. That is 45 bit clocks plus roughly three clocks for START, repeated START and STOP: about 48 SCL periods, which is 120 µs at 400 kHz and 480 µs at 100 kHz. So even a 16-bit sensor on a 100 kHz bus cannot be polled faster than about 2 kHz.

### Example 3 — Reading an SPI ADC

An MCP3008 10-bit ADC is read by sending three bytes: `0x01`, `0x80 | (ch << 4)` and `0x00`; the result is `((rx[1] & 3) << 8) | rx[2]`. With $\text{SPI clock} = 2$ MHz, how long does a reading take and what is the maximum rate?

**Solution.** Three bytes are 24 clocks, so the transfer is $24/2\ \text{MHz} = 12\ \mu$s. Adding about 2 µs of software overhead gives about 14 µs, so the maximum rate is about 70 kS/s, seven times faster than the 9.6 kS/s of the on-chip ADC. The device itself needs at least 18 clocks per conversion, so 24 clocks is sufficient. In the code, the third byte is a dummy (`0x00`) that shifts the 8 low result bits into the master.

## Common Misconceptions

- **"Baud equals bits of data per second."** Baud counts line bits including start and stop, so 115,200 baud carries at most 11,520 data bytes per second.
- **"Any two serial devices at the same nominal baud will talk."** Rounding of the divisor gives differences of several per cent, and above about 5% the last bits are sampled in the wrong place.
- **"SPI has no addressing, so it cannot have many slaves."** Each slave has a select line; the cost is wires, not capability.
- **"I2C needs no resistors because the Arduino has pull-ups."** The internal 20–50 kΩ resistors fail the rise-time limit for any realistic bus capacitance; external pull-ups are required.

## Connections

- A UART frame is the simplest case of the framing and synchronisation of digital links in communication-electronics-m3-l3, and bit errors from clock mismatch correspond to the timing errors there.
- The rise time $0.8473RC$ is the exponential charging of basic-electronics-m1-l2; the bus capacitance is the parasitic capacitance of electricity-and-magnetism-m1-l3.
- The decoding of SPI and I2C waveforms on an oscilloscope or logic analyser is the practice of basic-electronics-m2-l3 and the lab course microcontroller-and-embedded-systems-lab-m1-l3.
- Long cables bring the reflections of communication-electronics-m3-l1 into play, which is why SPI is kept to short boards and RS-485 differential links are used for distances.

## Quick Check

1. Find UBRR and the error for 19,200 baud at 16 MHz.
2. How long does it take to send 1000 bytes at 115,200 baud 8N1?
3. A slave needs SPI mode 3. State CPOL, CPHA and the sampling edge, and the byte time at a 4 MHz clock.
4. Give the TWBR value for 200 kHz with TWPS = 0.
5. A 3.3 V bus has 200 pF capacitance at 100 kHz. Find the range of acceptable pull-ups.

## Takeaway

- A UART frame carries 8 data bits in 10 line bits; the divisor register rounds the baud, and the total clock mismatch must stay below about 5%.
- SPI exchanges bytes through shift registers at up to several MHz, with the mode fixed by the slave and one select line per device.
- I2C shares two open-drain wires among up to 112 addresses with an ACK per byte; pull-ups must satisfy both rise-time and sink-current limits.
- Transfer times follow directly from clock rate and bit counts, so the choice of bus can be made on paper.
