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
lessonId: microcontroller-and-embedded-systems-m1-l3
lessonName: Toolchain, Bootloaders and Register-Level Embedded C
lessonNumber: 3
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - microcontroller-and-embedded-systems-m1-l2
  - basic-electronics-m3-l1
learningObjectives:
  - Trace C source through preprocessor, compiler, assembler, linker and object-copy to a hex image, and interpret the size report.
  - Explain how a bootloader writes flash over a serial link and contrast it with ICSP and SWD.
  - Write register-level C using masks and shifts, and explain `volatile`, `const`, `PROGMEM` and fixed-width types.
  - Estimate a sketch's RAM budget and stay within it.
concepts:
  - Cross-compilation toolchain
  - Memory sections (.text, .data, .bss, stack, heap)
  - Bootloader
  - In-circuit programming and debugging
  - Bit masking and shifting
  - volatile qualifier
  - Arduino setup and loop framework
tags:
  - physics
  - microcontroller-and-embedded-systems
  - embedded-c
  - toolchain
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - computational
  - short-answer
  - problem-solving
***

# Toolchain, Bootloaders and Register-Level Embedded C

## Overview

Pressing "Upload" hides a chain of five programs and a small program already inside the chip. The C source is preprocessed, compiled, assembled, linked with start-up code and converted to a hex file, which a bootloader writes into flash over the serial port. The size report says whether the program fits, the memory sections explain why a sketch that compiles can crash when stack meets heap, and the bootloader explains failed uploads. The second half turns to embedded C: fixed-width types, bit masks, the `volatile` qualifier without which interrupt-shared variables silently break, and `PROGMEM` for keeping constants out of scarce RAM.

## Learning Path

- **What you should already know**: the memory map (Lesson m1-l1); cycle counts and hexadecimal (Lesson m1-l2); building and debugging a small circuit (basic-electronics-m3-l1).
- **What this lesson adds**: the compile–link–upload chain; sections and the SRAM budget; bootloaders, ICSP and SWD; bit-level C; `volatile`, `const`, `PROGMEM`.
- **What later lessons this will unlock**: GPIO and ISRs (Lesson m2-l1); timers (Lesson m2-l2); ADC drivers (Lesson m2-l3); Module 3 firmware.

## Core Explanation

### From source to hex image

A **cross-compilation toolchain** runs on one architecture (a laptop) and produces code for another (AVR); for the Uno it is the GNU `avr-gcc` collection.

| Stage | Tool | Input | Output | What happens |
|---|---|---|---|---|
| Preprocess | `avr-cpp` | `.c`, `.ino`, `.h` | expanded C | `#include` files pasted in, `#define` macros expanded |
| Compile | `avr-gcc` | expanded C | `.s` assembly | C translated to AVR instructions; optimisation (`-Os`) |
| Assemble | `avr-as` | `.s` | `.o` object | mnemonics encoded as 16- or 32-bit instruction words |
| Link | `avr-ld` | `.o` files, `libc.a`, `libm.a`, core library | `.elf` | symbols resolved, sections placed at absolute addresses |
| Convert | `avr-objcopy` | `.elf` | `.hex` | binary image written as Intel HEX text records |
| Upload | `avrdude` | `.hex` | flash contents | image sent to the bootloader or a programmer |

`-Os` minimises code size, right with 32 kB of flash.

### Sections and the SRAM budget

The linker arranges the program into **sections**:

- **`.text`**: machine code and constants placed in flash; its size is the "Sketch uses N bytes" line.
- **`.data`**: initialised globals (`int threshold = 512;`). Initial values sit in flash and are copied to SRAM before `main()`, so they cost both.
- **`.bss`**: zero-initialised globals, costing RAM only; start-up code zeroes the region.
- **Heap**: memory from `malloc()` or `new`, growing upward from the end of `.bss`.
- **Stack**: return addresses, saved registers and locals, growing downward from the top of SRAM (0x08FF).

"Global variables use N bytes" reports `.data + .bss`; stack and heap share the rest. They grow towards each other, so a deep call chain or large local array can overwrite heap data, and a heap allocation can overwrite the stack, with no error message: the controller behaves erratically or resets. The embedded rule: avoid dynamic allocation (including `String`), size arrays statically and leave several hundred bytes of stack margin.

### Start-up code and the Arduino framework

After reset, the vector at flash address 0x0000 jumps to start-up code that sets the stack pointer, copies `.data` from flash, zeroes `.bss` and calls `main()`. The Arduino `main()` is short:

```c
int main(void) {
    init();                 /* configure Timer0 for millis(), enable ADC, set up PWM timers */
    setup();                /* the user's one-time configuration */
    for (;;) {
        loop();             /* the user's repeated body */
        if (serialEventRun) serialEventRun();
    }
    return 0;
}
```

`init()` is why `millis()` works unconfigured and Timer0 is not free. The `for (;;)` loop is the **superloop**: one thread, with interrupts the only concurrency.

### Bootloaders and programming interfaces

Flash is programmed a page at a time (128 bytes, about 4.5 ms) by the `SPM` instruction, executable only from the **boot section** at the top of flash. A **bootloader** (Optiboot, 512 bytes) lives there and runs first after every reset. It listens on the USART for about one second for a programming command (STK500 protocol, 115,200 baud); if one arrives it writes the image page by page with `SPM`, otherwise it starts the application. The USB-to-serial bridge pulls DTR low when the host opens the port, and a 100 nF capacitor couples this edge to RESET, so uploading needs no button. Opening the serial monitor therefore resets the board.

**In-circuit serial programming (ICSP)** holds RESET low and drives the SPI pins from an external programmer, giving access to all flash, the EEPROM and the **fuse bytes** that select the clock, brown-out voltage and boot size. ARM Cortex-M parts use two-wire **Serial Wire Debug (SWD)**, which also lets a debugger halt the core and set breakpoints. On the ATmega328P, debugging means `Serial.print()` and an oscilloscope, so timing pins and diagnostic output are essential.

### Embedded C idioms

**Fixed-width types.** `int` is 16 bits on avr-gcc and 32 on ARM, so embedded code uses `<stdint.h>` types (`uint8_t`, `int16_t`, `uint32_t`), choosing the narrowest that holds the range.

**Bit manipulation.** Registers pack several control bits into one byte, so single bits must change without disturbing neighbours. With mask $M = 1 \ll b$:

| Operation | C expression | Effect |
|---|---|---|
| Set bit $b$ | `REG \|= (1 << b);` | bit becomes 1, others unchanged |
| Clear bit $b$ | `REG &= ~(1 << b);` | bit becomes 0, others unchanged |
| Toggle bit $b$ | `REG ^= (1 << b);` | bit inverted |
| Test bit $b$ | `if (REG & (1 << b))` | non-zero if set |
| Set several bits | `REG \|= (1 << a) \| (1 << b);` | both set |
| Write a field | `REG = (REG & ~0x07) \| (value & 0x07);` | low three bits replaced |

The AVR headers name bit positions (`PB5`, `CS01`, `ADEN`), so `PORTB |= (1 << PB5);` is the register-level `digitalWrite(13, HIGH);` and compiles to one 2-cycle `SBI`, against roughly 50 cycles for the library call.

**`volatile`.** The compiler assumes memory changes only when the program changes it, and may read a variable once into a register and reuse it. A variable modified by an interrupt, or a hardware register that changes by itself, must be `volatile` so every access is a real load or store; AVR register macros are `(*(volatile uint8_t *)0x25)`. A missing `volatile` on an interrupt flag is the commonest cause of a loop that "never sees" the event.

**`const` and `PROGMEM`.** On a Harvard machine a `const` array is still copied to SRAM, since ordinary loads cannot reach flash. `PROGMEM` keeps it in flash, read with `pgm_read_byte()`, and `F("...")` does the same for strings given to `Serial.print()`. With 2 kB of SRAM, moving a 300-byte table to flash can separate a working program from a crashing one.

**Register-level blink.** Without the Arduino library the canonical first program is

```c
#include <avr/io.h>
#include <util/delay.h>

int main(void) {
    DDRB |= (1 << DDB5);              /* PB5 (Uno pin 13) as output */
    for (;;) {
        PORTB ^= (1 << PORTB5);       /* toggle */
        _delay_ms(500);
    }
}
```

Compiled with `-Os`, it occupies under 200 bytes of flash; the registers are the subject of Lesson m2-l1.

## Key Ideas

- **Toolchain**: preprocess, compile, assemble, link, convert, upload.
- **Sections**: `.text` in flash; `.data` costs flash and RAM; `.bss` costs RAM; stack and heap can collide silently.
- **Start-up**: stack pointer set, `.data` copied, `.bss` zeroed, then `init()`, `setup()` and `loop()` for ever.
- **Bootloader**: a 512-byte resident program writing flash with `SPM`; ICSP and SWD bypass it.
- **Bit manipulation**: `|=` sets, `&= ~` clears, `^=` toggles, `&` tests.
- **`volatile`** for interrupt-shared variables and registers; **`PROGMEM`** keeps constants out of SRAM.

## Worked Examples

### Example 1 — Reading the size report

A data-logging sketch reports "Sketch uses 14,212 bytes (44%) of program storage space. Global variables use 1,436 bytes (70%) of dynamic memory, leaving 612 bytes for local variables." The globals include a 512-byte sample buffer, a 256-byte transmit buffer and 480 bytes of `Serial.print()` strings. The SD library needs a 512-byte block buffer on the stack when a file is opened. Is the sketch safe, and how can it be made so?

**Solution.** Free SRAM is $2048 - 1436 = 612$ bytes. Opening the SD file needs 512 bytes of stack for the block buffer plus 100–200 bytes for the call chain, plus any interrupt that fires meanwhile. The demand of roughly 650–700 bytes exceeds 612, so the stack will overrun `.bss` and corrupt the buffer or strings: the sketch is unsafe though it compiles.

Moving the strings to flash with `F()` removes them from `.data`, so globals fall to $1436 - 480 = 956$ bytes and free SRAM rises to $2048 - 956 = 1092$ bytes, a margin of about 400 bytes above the worst-case stack.

### Example 2 — Composing a register value

`PORTD` holds $0\text{xA1}$. Write C to (a) set bits 2 and 4, (b) then clear bit 7, giving the register after each step. (c) Explain when `PORTD |= ...` is not atomic.

**Solution.** (a) The mask is $0\text{x}04 | 0\text{x}10 = 0\text{x}14$, and `PORTD |= 0x14;` gives

$$0\text{xA1} \;|\; 0\text{x}14 = 1010\,0001_2 \;|\; 0001\,0100_2 = 1011\,0101_2 = 0\text{xB5}.$$

(b) `PORTD &= ~(1 << 7);` uses the mask $\sim 0\text{x}80 = 0\text{x}7\text{F}$:

$$0\text{xB5} \;\&\; 0\text{x}7\text{F} = 1011\,0101_2 \;\&\; 0111\,1111_2 = 0011\,0101_2 = 0\text{x}35.$$

(c) For a register in the lowest 32 I/O addresses with a single-bit constant mask, avr-gcc emits `SBI` or `CBI`, which are atomic. For a multi-bit mask, or a register in the extended I/O space above 0x5F, it emits a load, an OR and a store. If an interrupt modifies the register between the load and the store, its change is lost when the stale copy is stored. The remedy is to disable interrupts around the read-modify-write (`ATOMIC_BLOCK(ATOMIC_RESTORESTATE)` in `<util/atomic.h>`) or write the register from one context only.

### Example 3 — Estimating upload time through the bootloader

A 9,000-byte sketch is uploaded through Optiboot at 115,200 baud, 8N1. Pages are 128 bytes and each write takes 4.5 ms, during which nothing is received. Estimate the upload time, ignoring the verify pass.

**Solution.** Each byte is 1 start + 8 data + 1 stop = 10 bits, so

$$t_{\text{wire}} = \frac{9000 \times 10}{115{,}200} = 0.781\ \text{s}.$$

There are $\lceil 9000/128 \rceil = 71$ pages, so programming takes $71 \times 4.5\ \text{ms} = 0.320$ s. The STK500 protocol adds perhaps 10 bytes per page, about $0.06$ s. The total is

$$t \approx 0.78 + 0.32 + 0.06 \approx 1.2\ \text{s},$$

plus the one-second reset wait, matching the two to three seconds seen in practice. A 32 kB program at 9,600 baud would take over 30 s, which is why bootloader baud rates are high.

## Common Misconceptions

- **"If it compiles and the size report is under 100%, it will run."** The report counts only static data; stack and heap can exceed the remaining SRAM silently.
- **"`const` puts data in flash."** On the AVR the array is still copied to SRAM; only `PROGMEM` or `F()` keeps it in flash.
- **"The bootloader is part of my program."** It is a separate resident program; erasing it (ICSP without `-D`) disables serial uploads until reinstalled.
- **"Reading a hardware register twice gives the same value."** Registers change by themselves, hence `volatile`; otherwise a wait loop may spin for ever.
- **"`digitalWrite()` is as fast as writing the register."** It takes some 50 cycles against 2 for `SBI`: irrelevant for an LED, decisive for bit-banged protocols.

## Connections

- Compiled numerical libraries (numpy, scipy) go through the same compile–link process, but embedded images are linked at absolute addresses with no operating system.
- Flash page time and endurance (10,000 write cycles; 100,000 for EEPROM) follow from the floating-gate MOSFET physics of solid-state-physics: charge tunnels through a thin oxide that slowly degrades.
- The DTR auto-reset circuit is an RC differentiator (electricity-and-magnetism-m2-l3).
- Bit masking is Boolean algebra on bit vectors, the logic of communication-electronics.

## Quick Check

1. List the AVR toolchain tools in order with the file each produces.
2. A global `uint16_t samples[600];` grows `.bss` by how much, and how much SRAM remains for the stack if other globals total 300 bytes?
3. Explain what start-up code does between the reset vector and the first line of `setup()`.
4. Write C to set bits 0–2 of `TCCR1B` to 3 without touching bits 3–7, and say why it may need interrupt protection.
5. Why must a variable incremented in an interrupt and read in `loop()` be `volatile`?

## Takeaway

- A sketch becomes a hex image through preprocessor, compiler, assembler, linker and object-copy, and `avrdude` sends it to the bootloader.
- SRAM holds `.data`, `.bss`, heap and stack; the last two can collide silently, so avoid dynamic allocation and keep a margin.
- Register-level C uses fixed-width types, masks and shifts; single-bit operations on low I/O registers compile to atomic `SBI`/`CBI`.
- `volatile` is mandatory for anything an interrupt or hardware changes; `PROGMEM` and `F()` are the first remedy for a RAM shortage.
