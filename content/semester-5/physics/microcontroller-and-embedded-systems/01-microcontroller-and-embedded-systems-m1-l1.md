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
lessonId: microcontroller-and-embedded-systems-m1-l1
lessonName: Microprocessors, Microcontrollers and Embedded Systems
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - basic-electronics-m2-l2
  - communication-electronics-lab-m1-l4
learningObjectives:
  - Distinguish a microprocessor from a microcontroller and identify the on-chip blocks that suit a device to an embedded system.
  - Contrast von Neumann and Harvard organisations and their effect on throughput.
  - Describe the CPU datapath and read a memory map such as that of the ATmega328P.
  - Compare the 8-bit AVR and 32-bit ARM Cortex-M and justify a controller for a physics instrument.
concepts:
  - Embedded system
  - Microcontroller versus microprocessor
  - Von Neumann architecture
  - Harvard architecture
  - Arithmetic logic unit and register file
  - Memory map
  - Address, data and control buses
tags:
  - physics
  - microcontroller-and-embedded-systems
  - computer-architecture
  - embedded-systems
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Microprocessors, Microcontrollers and Embedded Systems

## Overview

An embedded system is a computer hidden inside equipment and dedicated to one task: timing a pendulum, holding a water bath at a set temperature, reading a photodiode a thousand times a second. Its heart is almost always a microcontroller, one chip combining a processor, memory and peripherals. This lesson distinguishes the microcontroller from the microprocessor, introduces the von Neumann and Harvard organisations, opens the CPU, and explains the memory map and buses. Two reference architectures run through the course: the 8-bit AVR (the ATmega328P of the Arduino Uno) and the 32-bit ARM Cortex-M.

## Learning Path

- **What you should already know**: the transistor as a switch and its logic levels (basic-electronics-m2-l2); how an oscilloscope displays a digital waveform (communication-electronics-lab-m1-l4); binary notation.
- **What this lesson adds**: microprocessor versus microcontroller; von Neumann and Harvard; the CPU datapath; the ATmega328P memory map; the ARM Cortex-M.
- **What later lessons this will unlock**: clock and number representation (Lesson m1-l2); the toolchain (Lesson m1-l3); every Module 2 peripheral.

## Core Explanation

### What makes a system "embedded"

An **embedded system** is a computer designed into a product to perform one fixed function under hard constraints of cost, size, power and response time. The program is *firmware*, held in non-volatile memory. The system meets the physical world through sensors and actuators. And it must often respond within a guaranteed time: a timing instrument that occasionally records a pulse 10 ms late is useless, however fast it is on average. This is **real-time** behaviour, a theme of the lessons on interrupts and timers.

### Microprocessor versus microcontroller

A **microprocessor** contains only the central processing unit (CPU); a working computer needs external memory, an address decoder, input/output controllers and a clock generator, as with the Z80 and a laptop processor. A **microcontroller** integrates the CPU with flash, static RAM, EEPROM, a clock oscillator and peripherals (digital ports, timers, analogue-to-digital converter, serial interfaces) on one chip, needing only power and perhaps a crystal.

| Feature | Microprocessor | Microcontroller |
|---|---|---|
| CPU | On chip | On chip |
| Program and data memory | External | On chip (kB to MB) |
| Peripherals (GPIO, timers, ADC, UART) | External chips | On chip |
| Typical clock | 1–5 GHz | 1–200 MHz |
| Word size | 32 or 64 bit | 8, 16 or 32 bit |
| Power | Watts to hundreds of watts | Microwatts to hundreds of milliwatts |
| Operating system | Almost always | Often none ("bare metal") |
| Typical use | General computing | Dedicated control and measurement |
| Cost | Tens to hundreds of pounds | Pence to a few pounds |

Peripherals sit at fixed addresses in a documented memory map, so programming one means writing to the right address. And one shared clock lets every operation's timing be calculated exactly, making the microcontroller a precision timing instrument.

### Von Neumann and Harvard organisations

The **von Neumann architecture** puts instructions and data in one memory on one bus. It is flexible, but the **von Neumann bottleneck** follows: the bus carries an instruction or a data word each cycle, not both, so an instruction needing an operand takes at least two transactions.

The **Harvard architecture** uses separate memories and buses, so the CPU fetches the next instruction while accessing data, sustaining one instruction per cycle, and word widths may differ: the AVR has 16-bit instructions in flash but an 8-bit data path to SRAM. The cost is rigidity: a constant table in flash needs `LPM`, exposed in C as `PROGMEM` and `pgm_read_byte()`.

Most modern controllers are **modified Harvard**. The ATmega328P can read flash constants; the Cortex-M3 and M4 show one 4 GB address space over separate internal instruction and data buses; the Cortex-M0+ has one bus and is truly von Neumann.

### Inside the CPU

The **arithmetic logic unit (ALU)** performs arithmetic and logic. Its width defines "8-bit" or "32-bit": the AVR adds two 16-bit numbers in two instructions (`ADD`, then `ADC`, add with carry), a Cortex-M in one.

The **register file** is a small, very fast memory in the CPU. The AVR has 32 general-purpose 8-bit registers R0–R31, and only `LD`/`ST` move data to SRAM. The Cortex-M has R0–R12, a stack pointer (R13), a link register (R14) holding a return address, and the program counter (R15).

The **program counter (PC)** holds the address of the next instruction. On the ATmega328P it is 14 bits wide because flash holds $2^{14} = 16{,}384$ 16-bit words (32 kB).

The **stack pointer (SP)** addresses SRAM used last-in, first-out for return addresses and saved registers; on the AVR it grows downwards from 0x08FF.

The **status register (SREG)** holds the flags Zero (Z), Carry (C), Negative (N), two's-complement Overflow (V), Sign (S), Half-carry (H) and global Interrupt enable (I). Branches test them, so `if (a == b)` compiles to a subtraction and a branch on Z.

The **control unit** decodes instructions and routes operands; on a RISC (reduced instruction set) core it is a simple state machine.

### Buses and the memory map

Three sets of parallel wires link the blocks. The **address bus** selects the location: $n$ lines address $2^{n}$ locations. The **data bus** carries the value, usually of the word size. The **control bus** carries read/write strobes, clock and chip selects. Peripherals are **memory-mapped**: a timer or port is a set of registers at particular addresses, so the `LD` and `ST` that access SRAM also configure hardware. The ATmega328P data space shows this.

| Address range | Size | Contents |
|---|---|---|
| 0x0000–0x001F | 32 bytes | General-purpose registers R0–R31 (also visible in the data space) |
| 0x0020–0x005F | 64 bytes | I/O registers: PORTB, DDRB, PINB, SREG, SP, timer control, and so on |
| 0x0060–0x00FF | 160 bytes | Extended I/O registers: ADC, USART, TWI, Timer1 |
| 0x0100–0x08FF | 2048 bytes | Internal SRAM: `.data`, `.bss`, heap and stack |

Program memory is a separate 32 kB flash space (0x0000–0x3FFF in words) whose top 0.5 kB holds the bootloader; 1 kB of EEPROM holds constants that survive power-off. Lesson m2-l1 shows that writing 0x20 to address 0x25 (PORTB) raises the voltage on physical pin 19.

### The two reference architectures

The **ATmega328P** is an 8-bit modified Harvard RISC core with 131 instructions, most single-cycle, clocked at 16 MHz on the Uno. It has 32 kB flash, 2 kB SRAM, 1 kB EEPROM, 23 GPIO lines, three timers, a 10-bit six-channel ADC, a USART, SPI and an I2C-compatible interface, and draws about 10 mA at 5 V and 16 MHz. Its virtue is simplicity.

The **ARM Cortex-M** is a licensed 32-bit core (M0+, M3, M4, M7) wrapped by STMicroelectronics, NXP, Raspberry Pi and others. A teaching part (STM32F103 or RP2040) runs at 72–133 MHz, with 64–264 kB SRAM, 128 kB to 2 MB flash, a 12-bit ADC above 1 MHz, hardware multiply, a nested vectored interrupt controller and a 24-bit SysTick timer. The price is complexity.

The AVR is the primary reference; the Cortex-M enters where the AVR's limits (8-bit arithmetic, 10-bit ADC, 2 kB RAM) bind, as in Module 3.

## Key Ideas

- **Microcontroller**: CPU, memory and peripherals on one chip; a **microprocessor** is the CPU alone.
- **Von Neumann**: one memory and bus; **Harvard**: separate paths allowing simultaneous fetch and data access.
- **CPU datapath**: ALU, registers, program counter, stack pointer, status register, control unit.
- **Memory map**: every register and peripheral has an address, driven by ordinary loads and stores.
- **Reference architectures**: ATmega328P for exact reasoning; Cortex-M when speed, resolution or memory demand it.

## Worked Examples

### Example 1 — Address lines and the program counter

The ATmega328P has 2048 bytes of SRAM and 32 kB of flash organised as 16-bit words. How many address lines does each memory require, and what is the minimum width of the program counter?

**Solution.** For the SRAM, $2048 = 2^{11}$, so 11 lines select one byte. The full data space runs from 0x0000 to 0x08FF, which is $2304 = 0x0900$ locations and needs $\lceil \log_2 2304 \rceil = 12$ lines. The flash holds

$$\frac{32 \times 1024\ \text{bytes}}{2\ \text{bytes/word}} = 16{,}384 = 2^{14}\ \text{words},$$

so the program counter must be 14 bits wide, as the datasheet states. A `JMP` carries a 14-bit target; as the instruction word is only 16 bits, `JMP` and `CALL` are two-word instructions taking 3 and 4 cycles, whereas the relative `RJMP`, with a 12-bit signed offset in one word, takes 2.

### Example 2 — Does the data fit in SRAM?

A student plans to record a 10-bit ADC at 1 kHz for 5 s and then transmit the record to a PC. Can the ATmega328P buffer it in SRAM? What are the alternatives?

**Solution.** Each sample needs 2 bytes, so the record is

$$5\ \text{s} \times 1000\ \text{samples/s} \times 2\ \text{bytes} = 10{,}000\ \text{bytes},$$

almost five times the 2048 bytes of SRAM, of which perhaps 1800 are free. It cannot be buffered. Alternatives: (i) stream each sample as it is taken, 2000 bytes/s against the 11,520 bytes/s of a 115,200 baud link (Lesson m3-l1); (ii) pack six 10-bit samples into 8 bytes, giving about 8300 bytes, still too large; (iii) use a Cortex-M part with 20 kB or more of SRAM. Option (i) is usually right and is adopted in Module 3.

### Example 3 — Throughput of Harvard and von Neumann cores

A loop body is a load, an add, a store and a conditional branch. Estimate the cycles per iteration on (a) an idealised Harvard core that fetches one instruction per cycle in parallel with a data access, with loads, stores and a taken branch taking 2 cycles each; and (b) an idealised von Neumann core with the same execution times but one bus, so every data access delays the next fetch by one cycle. Both run at 16 MHz.

**Solution.** (a) Harvard: 2 + 1 + 2 + 2 = 7 cycles, since fetches overlap execution. (b) Von Neumann: the two data accesses each steal a bus cycle, adding 2 cycles, so 9. The iteration times are

$$t_H = \frac{7}{16 \times 10^{6}} = 437.5\ \text{ns}, \qquad t_{vN} = \frac{9}{16 \times 10^{6}} = 562.5\ \text{ns}.$$

The Harvard core is faster by $9/7 \approx 1.29$ for this memory-heavy loop. The gap closes for register-only arithmetic and widens for code that moves data continuously, which is why Harvard designs dominate in controllers.

## Common Misconceptions

- **"An 8-bit microcontroller handles only numbers up to 255."** Eight bits is the ALU and bus width; the compiler builds wider arithmetic from 8-bit operations with the carry flag. The penalty is time, not capability.
- **"Clock speed gives instructions per second."** Only if every instruction takes one cycle; the AVR needs 2 for loads, stores and taken branches.
- **"Harvard architecture means two memory chips."** The defining feature is separate address spaces and buses, usually on one die.
- **"Peripherals need special instructions."** They use the same loads and stores as RAM; the AVR's `IN` and `OUT` are an optimisation.
- **"A faster, 32-bit controller is always better."** Speed costs power, complexity and money. A pendulum timer needing a 1 µs timestamp once per second suits a 16 MHz AVR better than a 100 MHz Cortex-M idle 99.99% of the time.

## Connections

- The transistor switch of basic-electronics-m2-l2 builds every gate and bus driver; GPIO thresholds (Lesson m2-l1) follow from it.
- The oscilloscope and logic-analyser techniques of communication-electronics-lab-m1-l4 inspect these buses and clocks.
- Solid-state-physics explains the floating-gate MOSFET behind flash memory; the 100,000-cycle EEPROM endurance is a materials limit.
- The same vocabulary describes the data-acquisition computers of astrophysics laboratories, where embedded ARM processors read out CCD and CMOS detectors.
- Numerical methods (numerical-methods-m2-l1) analyses rounding error, whose origin on a microcontroller is the ALU's fixed word size (Lesson m1-l2).

## Quick Check

1. List four blocks a microcontroller integrates that a microprocessor does not, and say why this makes it a good timing instrument.
2. Explain the von Neumann bottleneck and how Harvard removes it. Why does the AVR need a special instruction to read a constant table in flash?
3. A controller has a 16-bit address bus and an 8-bit data bus. What is its maximum addressable memory, and the largest unsigned integer per bus cycle?
4. Which status flag does a compiler test for `if (x < 0)` with a signed 8-bit `x`, and which for `if (x == 0)`?
5. A student must log a 12-bit sensor at 50 kHz with on-board Fourier analysis. Argue for an AVR or a Cortex-M.

## Takeaway

- An embedded system is a dedicated computer under hard cost, power and timing constraints; the microcontroller suits it because everything shares one chip and one clock.
- Harvard machines separate instruction and data paths for one instruction per cycle; most controllers are modified Harvard.
- The CPU is an ALU, registers, program counter, stack pointer, status register and control unit.
- The memory map gives every register and peripheral an address, so controlling hardware means loads and stores.
- The 8-bit ATmega328P is the exact-reasoning reference; the Cortex-M is the step up when arithmetic, ADC resolution or memory limits.
