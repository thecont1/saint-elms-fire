***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: microcontroller-and-embedded-systems-lab
courseName: Microcontroller and Embedded Systems Lab (Option B)
moduleId: microcontroller-and-embedded-systems-lab-module-1
moduleName: Embedded Programming, Sensors, and Control
lessonId: microcontroller-and-embedded-systems-lab-m1-l3
lessonName: Serial Communication — UART, I2C, and SPI
lessonNumber: 3
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - microcontroller-and-embedded-systems-lab-m1-l2
learningObjectives:
  - Use UART serial communication to send data from the Arduino to a computer (over USB) and to another Arduino.
  - Use the I2C (Wire) protocol to communicate with a peripheral device (e.g. a temperature sensor, an OLED display).
  - Use the SPI protocol for high-speed communication with a peripheral (e.g. an SD card, a digital potentiometer).
concepts:
  - Serial communication
  - UART
  - I2C (TWI)
  - SPI
  - Baud rate
  - Master and slave
  - Address
  - Register
  - Clock stretching
tags:
  - physics
  - laboratory
  - embedded
  - uart
  - i2c
  - spi
sourceType: authored-courseware
assessmentHints:
  - UART: asynchronous, point-to-point, two wires (TX, RX) plus GND. Baud rates: 9600, 115200.
  - I2C: synchronous, multi-master, multi-slave, two wires (SDA, SCL) plus GND. Speeds: 100 kHz (standard), 400 kHz (fast), 1 MHz (fast-plus).
  - SPI: synchronous, single-master, multi-slave, four wires (MOSI, MISO, SCK, SS) plus GND. Speeds: up to 10 MHz or more.
status: in-review
***

# Serial Communication — UART, I2C, and SPI

## Overview

Serial communication is the transmission of data one bit at a time over a single wire (or a few wires). The three most common serial protocols are UART (Universal Asynchronous Receiver-Transmitter), I2C (Inter-Integrated Circuit), and SPI (Serial Peripheral Interface). UART is asynchronous and point-to-point; I2C is synchronous and multi-drop; SPI is synchronous and supports multiple slaves with separate select lines.

The Arduino Uno supports all three protocols. UART is used for communication with a computer (over USB) and with other Arduinos. I2C is used for communication with low-speed peripherals (sensors, displays, real-time clocks). SPI is used for high-speed communication with peripherals that require high bandwidth (SD cards, displays, digital-to-analog converters).

This lesson covers the apparatus (two Arduinos, a USB cable, a breadboard, an I2C peripheral like the BMP280 temperature/pressure sensor, an SPI peripheral like an SD card module or a digital potentiometer), the procedure (write sketches for UART communication, I2C communication, and SPI communication; verify the data transfer), the analysis (verify the data integrity, measure the throughput, debug any communication errors), and the dominant sources of error (baud rate mismatch, address conflicts, wiring errors, signal integrity).

## Learning Path

1. **UART communication between two Arduinos.** Connect the TX of one Arduino to the RX of the other, and vice versa. Connect GND. Write sketches that send and receive data over UART.
2. **I2C communication with a peripheral.** Connect an I2C peripheral (e.g. a BMP280, an OLED display) to the Arduino's SDA (A4) and SCL (A5) pins. Use the Wire library to communicate with the peripheral.
3. **SPI communication with a peripheral.** Connect an SPI peripheral (e.g. a digital potentiometer, an SD card module) to the Arduino's MOSI (11), MISO (12), SCK (13), and SS (10) pins. Use the SPI library to communicate with the peripheral.

## Core Explanation

### Theory: UART

UART (Universal Asynchronous Receiver-Transmitter) is an asynchronous serial protocol. The transmitter and receiver agree on a baud rate (e.g. 9600 bits/s, 115200 bits/s) but do not share a clock. Each byte is framed by a start bit (LOW), 8 data bits (LSB first), and one or more stop bits (HIGH).

On the Arduino, Serial.begin(baud) initializes the UART; Serial.print(data) sends data; Serial.available() returns the number of bytes available; Serial.read() reads a byte.

The Arduino Uno has one UART (on pins 0 and 1). The Arduino Mega has four UARTs. The Arduino Nano has one UART. The ESP32 has three UARTs.

The UART is used for communication with a computer over USB. The Arduino's USB-to-serial converter (typically the ATmega16U2 on the Uno) bridges the USB and the UART.

### Theory: I2C

I2C (Inter-Integrated Circuit, also called TWI for Two-Wire Interface) is a synchronous serial protocol with two wires: SDA (data) and SCL (clock). The bus is multi-drop: multiple masters and multiple slaves can share the bus. Each slave has a unique 7-bit address (or 10-bit address for larger systems).

The bus is pulled up to VCC with pull-up resistors (typically 4.7 kΩ). The master initiates a transfer by sending a start condition, followed by the slave address and a read/write bit, then the data, then a stop condition. The slave acknowledges each byte.

On the Arduino, the Wire library provides the I2C interface. Wire.begin() initializes the I2C bus as a master; Wire.beginTransmission(address) starts a transfer; Wire.write(data) sends a byte; Wire.endTransmission() ends the transfer; Wire.requestFrom(address, count) requests data from a slave; Wire.available() returns the number of bytes available; Wire.read() reads a byte.

The Arduino Uno has one I2C bus (on pins A4 = SDA, A5 = SCL). The Arduino Mega has two I2C buses.

### Theory: SPI

SPI (Serial Peripheral Interface) is a synchronous serial protocol with four wires: MOSI (master out, slave in), MISO (master in, slave out), SCK (clock), and SS (slave select). The master drives the clock and the MOSI line; the slave drives the MISO line. The master selects a slave by pulling the SS line LOW.

The bus supports one master and multiple slaves, each with its own SS line. The master initiates a transfer by pulling the SS line LOW, then sending data on MOSI and receiving data on MISO simultaneously. The clock rate is set by the master (typically 1-10 MHz, but can be higher).

On the Arduino, the SPI library provides the SPI interface. SPI.begin() initializes the SPI bus; SPI.beginTransaction(SPISettings(clock, MSBFIRST, SPI_MODE0)) starts a transaction; SPI.transfer(data) sends and receives a byte; SPI.endTransaction() ends the transaction.

The Arduino Uno has one SPI bus (on pins 11 = MOSI, 12 = MISO, 13 = SCK, 10 = SS). The Arduino Mega has two SPI buses.

### Apparatus

- Two Arduino Uno boards (or one Arduino and one other microcontroller).
- USB cables.
- Breadboard.
- I2C peripheral: BMP280 (temperature/pressure sensor), SSD1306 (OLED display), DS3231 (real-time clock), or similar.
- SPI peripheral: MCP4131 (digital potentiometer), SD card module, or similar.
- Resistors: 4.7 kΩ (for I2C pull-ups).
- Jumper wires.
- Computer with Arduino IDE.

### Procedure

1. **UART communication.** Connect Arduino 1's TX (pin 1) to Arduino 2's RX (pin 0), and vice versa. Connect GND. Write a sketch for Arduino 1 that sends "Hello" every second; write a sketch for Arduino 2 that reads and prints the received data. Upload and verify the communication.
2. **I2C communication.** Connect an I2C peripheral to the Arduino. The SDA pin (A4 on Uno) goes to the peripheral's SDA; the SCL pin (A5 on Uno) goes to the peripheral's SCL; VCC to 5 V; GND to GND. Add 4.7 kΩ pull-up resistors from SDA and SCL to 5 V. Write a sketch that reads data from the peripheral (e.g. the temperature from the BMP280). Upload and verify.
3. **SPI communication.** Connect an SPI peripheral to the Arduino. The MOSI pin (11 on Uno) goes to the peripheral's MOSI (or SDI); the MISO pin (12 on Uno) goes to the peripheral's MISO (or SDO); the SCK pin (13 on Uno) goes to the peripheral's SCK; the SS pin (10 on Uno) goes to the peripheral's SS (or CS). Write a sketch that communicates with the peripheral. Upload and verify.

### Analysis

#### UART Analysis

The UART transmits at the configured baud rate. For 9600 baud, each bit is 1/9600 ≈ 104 μs. A byte (10 bits including start and stop) is ~ 1.04 ms. For a 1 kB message, the transmission time is ~ 1 ms.

Common errors:
- Baud rate mismatch: the receiver and transmitter must use the same baud rate.
- TX/RX crossover: TX must connect to RX, not TX to TX.
- Voltage mismatch: a 5 V Arduino's TX connected to a 3.3 V device's RX can damage the device. Use a level shifter.

#### I2C Analysis

The I2C bus has a maximum capacitance of ~ 400 pF, which limits the number of devices and the cable length. The pull-up resistors must be small enough to overcome the capacitance but large enough to limit the current.

For a 100 kHz bus with 4.7 kΩ pull-ups, the rise time is ~ 2.2 · R · C = 2.2 · 4700 · 100e-12 = 1.03 μs. This is well within the I2C specification (rise time < 1 μs at 100 kHz, but the spec allows up to 1 μs for the standard mode).

Common errors:
- Missing pull-up resistors: the SDA and SCL lines float when no device is driving them.
- Address conflict: two devices with the same address on the same bus.
- Wiring errors: SDA and SCL swapped.

#### SPI Analysis

SPI is faster than I2C (up to 10 MHz vs 1 MHz for fast-mode I2C). The throughput is limited by the clock rate and the slave's response time.

Common errors:
- SS not pulled LOW: the slave does not respond.
- MISO/MOSI swapped: the master receives the wrong data.
- Clock mode mismatch: the master and slave must agree on the clock polarity (CPOL) and phase (CPHA).

### Sources of Error

- **Baud rate mismatch (UART).** The transmitter and receiver must use the same baud rate. A mismatch of 1 % can cause errors in some bytes.
- **Missing pull-up resistors (I2C).** Without pull-ups, the bus floats and the communication fails.
- **Address conflict (I2C).** Each slave must have a unique address. The I2C address scanner sketch can identify the addresses of all devices on the bus.
- **Wiring errors (SPI).** SS, MOSI, MISO, SCK must be correctly connected. A swap of MOSI and MISO is a common error.
- **Signal integrity.** Long wires, high baud rates, and many devices can degrade the signal. Use shorter wires, lower baud rates, or buffers.

## Key Ideas

- UART: asynchronous, point-to-point, two wires (TX, RX) plus GND. Baud rate 9600 or 115200.
- I2C: synchronous, multi-drop, two wires (SDA, SCL) plus GND. 7-bit address, speeds up to 1 MHz.
- SPI: synchronous, multi-slave, four wires (MOSI, MISO, SCK, SS) plus GND. Speeds up to 10 MHz or more.
- Master initiates the transfer; slave responds.
- The Wire library (I2C) and the SPI library (SPI) provide the Arduino interface.

## Worked Examples

#### Example 1: UART Baud Rate

A 115200 baud UART transmits 11520 bytes/s (115200 / 10 bits per byte). For a 1 kB message, the transmission time is ~ 87 μs.

For a 9600 baud UART, the transmission time for 1 kB is ~ 1 ms. The lower baud rate is more reliable but slower.

#### Example 2: I2C Address

The BMP280 has a default I2C address of 0x76 or 0x77 (depending on the SDO pin). The I2C address scanner sketch can identify the address:

```c
#include <Wire.h>
void setup() {
  Wire.begin();
  Serial.begin(9600);
  for (int address = 1; address < 127; address++) {
    Wire.beginTransmission(address);
    if (Wire.endTransmission() == 0) {
      Serial.print("Device found at 0x");
      Serial.println(address, HEX);
    }
  }
}
void loop() {}
```

#### Example 3: SPI Throughput

For an SPI clock of 4 MHz, the throughput is 4 Mbit/s = 500 kB/s. For an SPI clock of 10 MHz, the throughput is 10 Mbit/s = 1.25 MB/s.

The actual throughput may be lower due to overhead (SS toggling, inter-byte delays, slave response time).

## Common Misconceptions

- **"UART is the same as RS-232."** UART is the hardware that transmits and receives serial data; RS-232 is a voltage standard (± 12 V). The Arduino's UART uses TTL voltage levels (0 V / 5 V); RS-232 uses ± 12 V. A converter is needed to connect the Arduino's UART to an RS-232 device.
- **"I2C and SPI are interchangeable."** I2C is slower but uses fewer wires (2 vs 4); SPI is faster but requires a separate SS line for each slave. Choose based on the requirements.
- **"The Wire library is the same as the I2C library."** The Wire library is the Arduino's name for the I2C library. The functions are Wire.begin(), Wire.beginTransmission(), etc.
- **"SPI is full-duplex."** Yes, SPI is full-duplex: data is sent and received simultaneously on the MOSI and MISO lines. I2C is half-duplex.
- **"The slave can initiate a transfer."** In SPI, the slave cannot initiate a transfer; only the master can. In I2C, the slave can request a transfer by clocking the SCL line (clock stretching) or by sending a start condition in multi-master mode.

## Connections

- **Microcontroller and Embedded Systems (Sem 5 theory).** UART, I2C, and SPI are the three most common serial protocols. The same protocols are used in all microcontrollers, from the Arduino to the Raspberry Pi.
- **Digital electronics.** Serial communication is the foundation of digital data transmission. The same principles (synchronous vs asynchronous, master-slave, address) apply to all serial protocols.
- **Networking.** UART is similar to RS-232 and RS-485. I2C is similar to SMBus. SPI is similar to Microwire. The same physical layer principles apply.
- **Sensors and actuators.** Many sensors and actuators use I2C or SPI for communication. The Arduino is the platform for interfacing with these devices.
- **Embedded systems.** Serial communication is the primary way to interface microcontrollers with sensors, actuators, displays, and other peripherals.

## Quick Check

1. What is the difference between UART, I2C, and SPI?
2. How many wires does each protocol use?
3. What is the maximum speed of each protocol?
4. What is the I2C address of the BMP280?
5. What is the SPI clock polarity and phase?
6. Why must SDA and SCL be pulled up?
7. What is the difference between full-duplex and half-duplex?
8. A student reports that the I2C communication fails. What are the likely causes?

## Takeaway

UART, I2C, and SPI are the three most common serial communication protocols. UART is asynchronous and point-to-point; I2C is synchronous and multi-drop; SPI is synchronous and multi-slave. The lab's discipline — correct wiring, proper protocol configuration, careful debugging — is the same discipline that runs through every embedded system. The Wire and SPI libraries provide the Arduino interface; the same libraries are available for other microcontrollers. The principles (master-slave, address, clock, data) are universal; the specific implementation depends on the platform.
