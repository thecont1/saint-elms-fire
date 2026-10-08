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
lessonId: microcontroller-and-embedded-systems-m3-l2
lessonName: Data Logging, Timestamps, Power and Noise
lessonNumber: 8
moduleNumber: 3
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 8
prerequisites:
  - microcontroller-and-embedded-systems-m3-l1
  - microcontroller-and-embedded-systems-m2-l3
  - communication-electronics-m3-l2
learningObjectives:
  - Design a drift-free sampling loop with accurate timestamps from millis() or a real-time clock, and estimate the clock drift of a given oscillator.
  - Size record formats, ring buffers and serial or SD bandwidth for a multi-channel logger.
  - Compute the average current and battery life of a duty-cycled logger using sleep modes.
  - Identify noise sources in a mixed-signal board and choose decoupling, filtering and averaging to suppress them, including mains pickup.
concepts:
  - Timestamping
  - Real-time clock drift
  - CSV and binary records
  - Ring buffer and SD write latency
  - Sleep modes and duty cycling
  - Supply decoupling
  - Mains rejection by averaging
tags:
  - physics
  - microcontroller-and-embedded-systems
  - data-logging
  - noise
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - computational
  - conceptual
  - short-answer
***

# Data Logging, Timestamps, Power and Noise

## Overview

An instrument is only as good as the record it leaves behind. A logger must sample at a known rate, attach each reading to a trustworthy time, store the result so that it survives power loss and keep working for weeks on a battery. This lesson treats those requirements as design calculations: how fast clocks drift, how text and binary records compare, how a ring buffer hides the irregular write time of an SD card, how sleep modes extend battery life by orders of magnitude, and how noise on the supply, ground and mains line limits the data. Python on the host tests whether the log has the timing it was designed to have.

## Learning Path

- **What you should already know**: SPI and I2C transactions (Lesson m3-l1); ADC counts and resolution (Lesson m2-l3); unsigned time subtraction (Lesson m1-l2); thermal noise and signal-to-noise ratio (communication-electronics-m3-l2).
- **What this lesson adds**: timestamps and clock drift; record formats and buffering; SD logging; sleep modes and power budgets; supply, ground and mains noise.
- **What later lessons this will unlock**: the data-acquisition firmware and host analysis of the instrumentation project (Lesson m3-l3).

## Core Explanation

### Timestamps and drift

Every record needs a time. `millis()` gives milliseconds since reset from the timer driven by the board's clock, so its accuracy is the clock's: a ceramic resonator at $\pm0.5\%$ drifts by $0.005 \times 86{,}400 = 432$ s per day, a 50 ppm crystal by 4.3 s, and a temperature-compensated DS3231 real-time clock (RTC, I2C address 0x68), rated $\pm2$ ppm, by $2\times10^{-6} \times 3.156\times10^{7}\ \text{s} = 63$ s per year. An RTC supplies absolute time, set once from the host; `millis()` suffices for intervals if its clock is calibrated against an RTC (Lesson m3-l3).

Two timing errors lie in the code. Read the time when the sample is *taken*, not when the line is printed, since a slow write may delay printing by tens of milliseconds. And schedule against a running target, not the last wake-up:

```c
const uint32_t PERIOD_MS = 10;                       /* 100 Hz */
uint32_t last;                                       /* set in setup() */
void loop(void) {
    if ((uint32_t)(millis() - last) >= PERIOD_MS) {
        last += PERIOD_MS;                           /* no accumulated drift */
        uint32_t t = millis();                       /* timestamp at sampling */
        /* read ADCs, put (t, data) into the ring buffer */
    }
    /* drain the ring buffer to the SD card here */
}
```

Using `delay(10)` instead would lengthen every period by the loop's own time and the logged time would drift without limit.

### Records and bandwidth

A record is a timestamp plus the channel values. In **CSV** text each value is a human-readable decimal followed by a comma, which any spreadsheet or Python can read, at the cost of size; **binary** packs the same values into fixed-width integers, smaller and faster to write, but requiring a reader program.

| Format | 4 channels, 10-bit | Bytes per record | At 100 Hz | Per hour |
|---|---|---|---|---|
| Binary | 4 B timestamp + 4 × 2 B | 12 | 1,200 B/s | 4.32 MB |
| CSV | 10-digit time + 4 × 3 digits + 4 commas + newline | 27 | 2,700 B/s | 9.72 MB |

To log by serial the link must carry the data rate: 2,700 B/s is 23% of the 11,520 B/s of a 115,200 baud link (Lesson m3-l1) but nearly three times the 960 B/s of 9,600 baud.

### SD logging and buffering

An SD card is read and written in 512-byte blocks over SPI (Lesson m3-l1), and the library keeps one block buffer in RAM (Lesson m1-l3). A write usually takes a few milliseconds, but when the card erases a flash block or updates its file-allocation table, one write may stall for 100–200 ms. During the stall the sampler keeps running, so the data must be held in a **ring buffer** (circular FIFO) written by the sampling code and drained by the SD code. The minimum buffer is

$$B \ge r_{\text{rec}}\,R\,t_{\text{stall}},$$

where $R$ is the record rate, $r_{\text{rec}}$ the record size and $t_{\text{stall}}$ the worst stall, plus margin. A second policy question is when to call `flush()`, which writes the pending block and updates the directory entry. Each flush costs time and card wear, but data between flushes is lost at power failure; a flush every few seconds, or on each of the rare events, is a typical compromise.

### Power and sleep

CMOS power is approximately $CV^{2}f$, so current falls with clock rate and voltage. The ATmega328P draws about 10 mA at 5 V and 16 MHz (Lesson m1-l1), but in **power-down sleep** it stops the clocks and draws about 1 µA, waking on an external interrupt (such as the RTC alarm on INT0, Lesson m2-l1) or the watchdog timer, whose maximum period is 8 s. A complete Uno board, with its regulator, LED and USB chip, uses about 45 mA even when idle, so battery work uses a bare chip or a low-power board. The key idea is **duty cycling**. If the logger is awake for time $t_a$ at current $I_a$ out of every period $T$, and sleeps at $I_s$, the average current is

$$\bar I = \frac{I_a t_a + I_s (T - t_a)}{T}.$$

### Noise in a mixed-signal board

The ADC resolves 4.9 mV, but the noise on a typical board is several millivolts. The thermal (Johnson) noise voltage of a resistor, $v_n = \sqrt{4k_BTR\,\Delta f}$ (communication-electronics-m3-l2), is negligible in comparison; the real sources are digital. Each switching edge draws a current spike from the supply, and the inductance of the wires turns this into a voltage glitch seen by the ADC through its supply and reference. The remedies, in order of effectiveness, are:

- A **100 nF ceramic capacitor** from each supply pin to ground, as close to the chip as possible, to supply the spikes locally.
- **Separate analogue and digital grounds** joined at one point, and the AVcc pin fed through a ferrite or 10 µH inductor with its own 100 nF capacitor.
- **ADC noise-reduction sleep mode**, which halts the CPU during the conversion.
- **Short, twisted or shielded** sensor leads and an RC filter at the input.
- **Averaging**, which reduces random noise by $\sqrt{M}$ (Lesson m2-l3).

**Mains pickup** at 50 Hz is the dominant interference in Indian laboratories, picked up by long leads. An average of $M$ samples at rate $f_s$ is a boxcar filter with its first null at $f_s/M$ and at every multiple of it. Choosing $M = f_s/50$ places nulls at 50 Hz and its harmonics.

### Checking the log

The designed rate must be verified on the host from the log itself:

```python
import csv, statistics
t  = [int(row[0]) for row in csv.reader(open("log.csv"))]
dt = [b - a for a, b in zip(t, t[1:])]
print(statistics.mean(dt), statistics.stdev(dt), max(dt))
```

A mean of 10.000 ms with a maximum of 11 ms is healthy; a maximum of 150 ms reveals an SD stall.

## Key Ideas

- **Timestamps**: read at sampling time; schedule with `last += PERIOD`; clock error equals drift (4.3 s/day for 50 ppm).
- **Formats**: CSV is readable and about twice the size of binary.
- **Ring buffer**: size $\ge r_{\text{rec}}Rt_{\text{stall}}$, with the SD stall up to 200 ms.
- **Duty cycling**: average current $\bar I = [I_at_a + I_s(T - t_a)]/T$; sleep dominates battery life.
- **Noise**: decoupling and grounding come before averaging; averaging over $f_s/50$ samples nulls mains pickup.

## Worked Examples

### Example 1 — Sizing the buffer

The 4-channel binary logger of the table samples at 100 Hz, and the SD card may stall for 150 ms. How large must the ring buffer be, and does it fit in the SRAM of Example 1 of Lesson m1-l3?

**Solution.** During the stall the logger produces $0.15 \times 100 = 15$ records of 12 bytes, which is 180 bytes. Rounding up to a power of two for cheap index arithmetic and adding a factor of 1.4 for margin gives a 256-byte buffer, which holds 21 records, or 210 ms. The SD library needs its own 512-byte block buffer, so the total is $512 + 256 = 768$ bytes, within the 1092 bytes of free SRAM that Example 1 of Lesson m1-l3 arrived at after moving strings to flash. The stack margin remaining is 324 bytes, adequate if no large local arrays are used. In CSV the buffer would be $0.15 \times 100 \times 27 = 405$ bytes, leaving only 175 bytes of margin: a reason to log binary.

### Example 2 — Battery life

A 3.3 V logger sleeps at 5 µA (chip, RTC and sensor), and wakes every 60 s for 150 ms at 40 mA to sample and write to the SD card. How long will a 2000 mAh battery last? Compare with an Uno board running continuously.

**Solution.** The charge per cycle awake is $40\ \text{mA} \times 0.150\ \text{s} = 6.0$ mA s, equal to an average of $6.0/60 = 0.100$ mA. The sleep contribution is $5\ \mu\text{A} \times 59.85/60 = 4.99\ \mu$A, so $\bar I = 0.105$ mA. The lifetime is $2000/0.105 = 19{,}050$ h $= 794$ days; derating the battery to 70% usable capacity gives 556 days. The sleeping chip is only 5% of the budget; the SD write dominates, so writing several samples at once pays more than lowering the sleep current. A continuously running Uno at 45 mA drains the same battery in $2000/45 = 44$ h, under two days.

### Example 3 — Taming mains pickup by averaging

A thermocouple amplifier output has a white-noise rms of 2.0 ADC counts plus 50 Hz pickup. The ADC is triggered at $f_s = 1$ kHz. Choose $M$ and find the noise after averaging.

**Solution.** The mean of $M$ samples is a boxcar filter with transfer function $H(f) = \sin(\pi f M/f_s)/[M\sin(\pi f/f_s)]$, which is zero at $f = kf_s/M$. For a null at 50 Hz we need $f_s/M = 50$ Hz, so $M = 1000/50 = 20$ samples, covering exactly one mains period of 20 ms, and the 100, 150, 200 Hz harmonics vanish too. The white noise falls to $2.0/\sqrt{20} = 0.45$ counts rms. For comparison, the thermal noise of the 10 kΩ source resistance over a 10 kHz bandwidth is $\sqrt{4 \times 1.38\times10^{-23} \times 300 \times 10^{4} \times 10^{4}} = 1.29\ \mu$V, 3800 times below one count of 4.88 mV: the noise is not thermal, but picked up.

## Common Misconceptions

- **"`delay(10)` in the loop gives a 100 Hz log."** It adds the loop's execution time to every period, so the rate is lower and drifts.
- **"A bigger SD card means more reliable logging."** Capacity is irrelevant; the card's write stalls and the flush policy determine data loss.
- **"A sleeping microcontroller draws nothing."** It draws about 1 µA, and the rest of the board often draws far more: LEDs, regulator and USB chip dominate the sleep current of an Uno.
- **"More averaging always reduces noise."** It reduces only random noise; mains pickup is a deterministic periodic signal that averages away only if the window is synchronised with it, and slow drift passes straight through.

## Connections

- The clock accuracy and drift here is the frequency stability of the quartz oscillators in communication-electronics-m1-l3.
- Thermal noise, signal-to-noise ratio and noise bandwidth come directly from communication-electronics-m3-l2; the 10 kΩ example uses its formula.
- The boxcar response $\sin(Mx)/[M\sin x]$ is the $N$-slit interference factor of waves-and-optics-m3-l2, with nulls where the phasors close.
- The exponential approach of a capacitor to its supply (electricity-and-magnetism-m2-l3) governs the decoupling capacitor's recovery after a current spike.
- microcontroller-and-embedded-systems-lab-m1-l5 builds an SD-card and RTC logger; the buffer and power budgets here are the calculations it leaves implicit.

## Quick Check

1. By how many seconds per day does a 20 ppm clock drift?
2. A 6-channel binary record has a 4-byte timestamp and 2 bytes per channel. What is the buffer for a 200 ms stall at 50 Hz?
3. A logger draws 20 mA for 100 ms every 30 s and 2 µA otherwise. What is the average current?
4. Pick the averaging number for an ADC sampled at 800 Hz that rejects 50 Hz pickup, and give the rms noise reduction.
5. Why must the timestamp be read before, not after, the SD write?

## Takeaway

- Timestamps are read at the moment of sampling, scheduled with a running target to avoid drift, and have the accuracy of the clock source.
- CSV is convenient and bulky; binary is compact; a ring buffer sized from stall time, rate and record size protects against SD write delays.
- Duty cycling dominates battery life: average current is the time-weighted mean of awake and sleep currents.
- Noise on a board is mostly digital pickup and mains; decoupling, grounding and averaging over a whole number of mains periods are the effective remedies.
