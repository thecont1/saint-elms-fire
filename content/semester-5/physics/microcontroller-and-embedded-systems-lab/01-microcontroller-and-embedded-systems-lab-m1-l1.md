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
lessonId: microcontroller-and-embedded-systems-lab-m1-l1
lessonName: Microcontroller Basics — GPIO, Digital I/O, and the First Sketch
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - astronomy-and-astrophysics-lab-m1-l6
learningObjectives:
  - Set up the microcontroller development environment (Arduino IDE or equivalent); load a "blink" sketch; verify the LED blinks.
  - Read a digital input (a pushbutton) and write a digital output (an LED); demonstrate debouncing and pull-up resistors.
  - Use millis() for non-blocking timing; understand the difference between delay() and millis()-based scheduling.
concepts:
  - Microcontroller
  - Arduino (or similar)
  - GPIO
  - Digital input and output
  - Pull-up and pull-down resistors
  - Debouncing
  - millis() and delay()
  - Non-blocking scheduling
tags:
  - physics
  - laboratory
  - embedded
  - microcontroller
  - arduino
  - gpio
sourceType: authored-courseware
assessmentHints:
  - digitalWrite(pin, HIGH) sets a pin to 5 V (or 3.3 V for some boards); digitalWrite(pin, LOW) sets it to 0 V.
  - digitalRead(pin) returns HIGH or LOW. The pin should be configured as INPUT or INPUT_PULLUP.
  - millis() returns the number of milliseconds since the program started; it overflows after ~ 50 days.
status: in-review
***

# Microcontroller Basics — GPIO, Digital I/O, and the First Sketch

## Overview

A microcontroller is a small computer on a single integrated circuit, with a processor, memory, and input/output (I/O) peripherals. The Arduino Uno is a popular microcontroller board based on the ATmega328P, with 14 digital I/O pins, 6 analog inputs, a 16 MHz clock, and 32 KB of flash memory. The Arduino Integrated Development Environment (IDE) provides a simple C/C++ programming environment, with a large library ecosystem (the "Arduino Library") that simplifies common tasks (digital I/O, analog I/O, serial communication, etc.).

This lesson covers the apparatus (an Arduino Uno or compatible board, a USB cable, a breadboard, an LED, a pushbutton, resistors, jumper wires), the procedure (install the Arduino IDE, connect the board, load the "blink" sketch, write a sketch that reads a button and controls an LED), the analysis (verify the LED blinks at the correct rate, verify the button control works, demonstrate debouncing and pull-up resistors), and the dominant sources of error (incorrect pin numbers, missing pull-up resistors, button bounce, blocking delay).

## Learning Path

1. **Install the Arduino IDE.** Download from https://www.arduino.cc/en/software. Install on the computer. Connect the Arduino Uno via USB. Verify the connection (Tools > Port should show the Arduino's serial port).
2. **Load the blink sketch.** File > Examples > 01.Basics > Blink. Upload to the Arduino. Verify the on-board LED blinks at 1 Hz.
3. **Build the button-LED circuit.** Connect an LED (with a 220 Ω current-limiting resistor) to pin 9; connect a pushbutton to pin 2 (with a 10 kΩ pull-down resistor, or use INPUT_PULLUP).
4. **Write a sketch** that reads the button and turns the LED on when the button is pressed. Verify the behavior.
5. **Add debouncing** and non-blocking timing. Verify the LED toggles correctly without flickering.

## Core Explanation

### Theory: Microcontroller

A microcontroller is a small computer on a single chip. The Arduino Uno uses the ATmega328P, which has:
- 8-bit AVR RISC processor at 16 MHz
- 32 KB flash memory (program storage)
- 2 KB SRAM (runtime data)
- 1 KB EEPROM (non-volatile data)
- 14 digital I/O pins (6 with PWM)
- 6 analog input pins (10-bit ADC)
- USB interface
- Power: 5 V from USB or 7-12 V from the barrel jack

The Arduino IDE provides a C/C++ development environment. The "sketch" is a C++ program with two required functions: setup() (called once at startup) and loop() (called repeatedly).

### Theory: Digital I/O

A digital I/O pin can be configured as INPUT or OUTPUT. When configured as OUTPUT, digitalWrite(pin, HIGH) sets the pin to 5 V; digitalWrite(pin, LOW) sets it to 0 V. The pin can source or sink up to 40 mA (per pin) or 200 mA (per port).

When configured as INPUT, digitalRead(pin) returns HIGH if the voltage is > 3.0 V (for a 5 V Arduino), LOW if < 1.5 V, or undefined in between. The pin has a high input impedance (> 100 MΩ) and does not draw significant current.

A pull-up resistor is a resistor connected between the pin and VCC; it ensures that the pin reads HIGH when no external signal is connected. A pull-down resistor is connected between the pin and GND; it ensures that the pin reads LOW when no external signal is connected. The ATmega328P has internal pull-up resistors (20-50 kΩ) that can be enabled with pinMode(pin, INPUT_PULLUP).

### Theory: Button Debouncing

A pushbutton is a mechanical switch; when pressed or released, the contacts bounce for a few milliseconds, producing multiple transitions. A digital input reads these transitions as multiple presses, which can cause unwanted behavior (e.g. an LED that should toggle once may toggle several times).

Debouncing is the process of removing the bounce. Hardware debouncing uses a low-pass filter (e.g. an RC circuit) to smooth the signal. Software debouncing waits for the signal to be stable for a few milliseconds before accepting it.

```c
const int buttonPin = 2;
const int ledPin = 9;
int buttonState = HIGH;
int lastButtonState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 50;

void setup() {
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
}

void loop() {
  int reading = digitalRead(buttonPin);
  if (reading != lastButtonState) {
    lastDebounceTime = millis();
  }
  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (reading != buttonState) {
      buttonState = reading;
      if (buttonState == LOW) {
        digitalWrite(ledPin, !digitalRead(ledPin));
      }
    }
  }
  lastButtonState = reading;
}
```

This is a standard Arduino debouncing sketch. The `millis()` function returns the time since the program started; the `lastDebounceTime` records the time of the last state change; the `debounceDelay` is the time the signal must be stable (50 ms is typical).

### Theory: Non-Blocking Timing

The delay() function blocks the program for a specified number of milliseconds. During the delay, the program cannot read inputs or write outputs. For simple sketches, this is fine; for more complex sketches, it can cause problems (e.g. a button press is missed because the program is in a delay).

Non-blocking timing uses millis() to check the elapsed time without blocking. The sketch records the time of the last action; in loop(), it checks if the elapsed time exceeds the desired interval. If so, it performs the action and updates the time.

```c
unsigned long previousMillis = 0;
const long interval = 1000;

void setup() {
  pinMode(ledPin, OUTPUT);
}

void loop() {
  unsigned long currentMillis = millis();
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    digitalWrite(ledPin, !digitalRead(ledPin));
  }
}
```

This blinks the LED at 1 Hz without blocking the program.

### Apparatus

- Arduino Uno (or compatible: Nano, Mega, ESP32).
- USB cable (Type A to Type B for Uno, Micro-USB for Nano, USB-C for ESP32).
- Breadboard.
- LED (any colour; red is typical).
- Current-limiting resistor for the LED (220 Ω for a red LED at 5 V).
- Pushbutton (tactile switch, normally open).
- Resistors: 10 kΩ (for pull-down) or use INPUT_PULLUP.
- Jumper wires.
- Computer with Arduino IDE installed.

### Procedure

1. **Install the Arduino IDE.** Download from https://www.arduino.cc/en/software. Install. Connect the Arduino via USB. Select the board (Tools > Board > Arduino Uno) and the port (Tools > Port).
2. **Load the blink sketch.** File > Examples > 01.Basics > Blink. Click Upload. The on-board LED (pin 13) should blink at 1 Hz (1 second on, 1 second off).
3. **Build the button-LED circuit.** Connect the LED (with a 220 Ω resistor) to pin 9: anode to pin 9, cathode to GND through the resistor. Connect the pushbutton to pin 2 and GND; use pinMode(pin, INPUT_PULLUP) to enable the internal pull-up resistor.
4. **Write a sketch** that reads the button and turns the LED on when the button is pressed. Upload. Verify the behavior.
5. **Add debouncing.** Modify the sketch to use the debounce algorithm above. Upload. Verify the LED toggles once per press, not multiple times.
6. **Add non-blocking timing.** Modify the sketch to blink the LED at 1 Hz using millis() instead of delay(). Verify the LED blinks at 1 Hz and the button still works.

### Analysis

#### LED Current

The current through the LED is

I_LED = (V_CC − V_LED) / R = (5 V − 2 V) / 220 Ω = 13.6 mA.

This is well within the 40 mA limit per pin. A higher current (lower resistor) gives a brighter LED but increases the current draw; a lower current (higher resistor) gives a dimmer LED.

#### Pull-Up Resistor

The internal pull-up resistor is 20-50 kΩ. When the button is open, the pin is pulled up to 5 V through the pull-up resistor; digitalRead returns HIGH. When the button is closed, the pin is connected to GND; digitalRead returns LOW.

The pull-up resistor should be small enough to overcome leakage currents (a few μA) but large enough to limit the current when the button is closed. The internal pull-up (20-50 kΩ) is a good compromise.

#### Debounce Time

A typical debounce time is 5-50 ms. Shorter times may not filter all the bounces; longer times may miss fast button presses. 50 ms is a good default.

#### Non-Blocking Timing

The millis() function returns the time since the program started as an unsigned long (32 bits). It overflows after ~ 4.29 × 10⁹ ms ≈ 49.7 days. The overflow is handled correctly by the subtraction (currentMillis - previousMillis is always positive, even if currentMillis has wrapped around).

### Sources of Error

- **Incorrect pin numbers.** A sketch that uses pin 9 will not work if the LED is connected to pin 10. Verify the pin numbers in the sketch and the circuit.
- **Missing pull-up resistor.** Without a pull-up, the input pin floats when the button is open; the digitalRead returns random values.
- **Button bounce.** Without debouncing, the LED may toggle multiple times per press.
- **Blocking delay.** A delay() in loop() blocks the program; a button press during the delay is missed. Use millis() for non-blocking timing.
- **Power supply.** A weak USB power supply may cause the Arduino to reset. Use a powered USB hub or an external power supply.

## Key Ideas

- Microcontroller: a small computer on a chip. Arduino Uno uses ATmega328P.
- Digital I/O: pinMode(pin, OUTPUT/INPUT/INPUT_PULLUP); digitalWrite(pin, HIGH/LOW); digitalRead(pin).
- Pull-up resistor: ensures a defined HIGH when no external signal. The ATmega328P has internal pull-ups (20-50 kΩ).
- Debouncing: removes the bounce from mechanical switches. Software debouncing uses millis() to wait for the signal to stabilise.
- Non-blocking timing: use millis() instead of delay() to avoid missing inputs.

## Worked Examples

#### Example 1: LED Current

A red LED (V_LED = 2 V) is connected to a 5 V Arduino through a 220 Ω resistor. The current is

I = (5 − 2) / 220 = 13.6 mA.

For a brighter LED, use a 100 Ω resistor: I = 30 mA. For a dimmer LED, use a 470 Ω resistor: I = 6.4 mA.

#### Example 2: Pull-Up Resistor

A button is connected to pin 2 with INPUT_PULLUP. The internal pull-up is ~ 30 kΩ. When the button is open, the pin voltage is 5 V. When the button is closed, the pin voltage is 0 V (the switch shorts the pin to GND).

The current through the pull-up when the button is closed is I = 5 V / 30 kΩ = 167 μA. This is small and does not damage the Arduino.

#### Example 3: Debouncing

A button press typically produces bounces for 5-20 ms. A debounce delay of 50 ms is sufficient to filter all the bounces. For a very bouncy button (a cheap switch), a longer delay (100 ms) may be needed.

## Common Misconceptions

- **"The Arduino has a 5 V output."** The Arduino Uno has a 5 V pin (for powering external circuits) and a 3.3 V pin (for low-voltage devices). The digital I/O pins are at 5 V (or 3.3 V for some boards).
- **"The internal pull-up is always enabled."** No, it is only enabled when pinMode(pin, INPUT_PULLUP) is called. By default, pinMode(pin, INPUT) disables the pull-up.
- **"digitalRead is fast."** digitalRead takes a few clock cycles (~ 0.25 μs at 16 MHz). For most applications, this is fast enough. For high-speed applications, use direct port manipulation.
- **"delay() is always bad."** delay() is fine for simple sketches. For more complex sketches, use millis() to avoid missing inputs. The choice depends on the application.
- **"A pushbutton is a perfect switch."** A pushbutton is a mechanical switch with bounce. The bounce must be filtered (by hardware or software) for reliable operation.

## Connections

- **Microcontroller and Embedded Systems (Sem 5 theory).** The Arduino is a representative microcontroller; the same concepts (GPIO, ADC, PWM, serial communication, timers, interrupts) apply to other microcontrollers (PIC, STM32, ESP32, Raspberry Pi Pico).
- **Digital electronics.** The digital I/O is the foundation of digital electronics. The same concepts (HIGH/LOW, input/output, pull-ups) apply to all digital circuits.
- **Sensors and actuators.** Microcontrollers interface with sensors (temperature, light, motion) and actuators (motors, LEDs, relays). The Arduino is the platform for many sensor and actuator projects.
- **Internet of Things (IoT).** The ESP32 (and the ESP8266) are WiFi-enabled microcontrollers, used for IoT applications. The same Arduino IDE and C/C++ programming environment is used.
- **Robotics.** Microcontrollers are the brain of robots. The Arduino is used in many educational and hobbyist robots; more advanced robots use the Raspberry Pi, the Jetson Nano, or specialised microcontrollers.

## Quick Check

1. What is the clock speed of the Arduino Uno? The flash memory? The SRAM?
2. What is the difference between digitalWrite(pin, HIGH) and digitalWrite(pin, LOW)?
3. What is the purpose of a pull-up resistor? An internal pull-up?
4. How long does a typical pushbutton bounce? How is it filtered?
5. What is the difference between delay() and millis()-based timing?
6. What is the current through a red LED connected to a 5 V Arduino through a 220 Ω resistor?
7. Why must pinMode be called before digitalWrite or digitalRead?
8. A student reports that the LED is always on, regardless of the button. What is wrong?

## Takeaway

The Arduino and similar microcontrollers are the lab's primary tool for embedded systems. GPIO, digital I/O, pull-up resistors, debouncing, and non-blocking timing are the five central concepts. The lab's discipline — careful wiring, correct pin numbers, proper debouncing, non-blocking code — is the same discipline that runs through every embedded system project. The same concepts (digital I/O, ADC, PWM, serial communication, timers, interrupts) apply to all microcontrollers, from the Arduino to the ESP32 to the Raspberry Pi Pico. The Arduino is the simplest and most accessible; the lessons learned here are directly transferable to more advanced platforms.
