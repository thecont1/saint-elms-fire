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
lessonId: microcontroller-and-embedded-systems-lab-m1-l6
lessonName: Capstone Project, Debugging, and the Viva
lessonNumber: 6
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - microcontroller-and-embedded-systems-lab-m1-l5
learningObjectives:
  - Design and build a capstone device that integrates sensors, actuators, and communication.
  - Apply debugging techniques: Serial.print, LED indicators, oscilloscope, logic analyser.
  - Write a complete report for the capstone project.
  - Anticipate and answer viva-style questions about the project.
concepts:
  - Capstone project design
  - Sensor integration
  - Actuator control
  - Debugging techniques
  - Serial.print debugging
  - LED indicators
  - Oscilloscope debugging
  - Logic analyser
  - Report writing
  - Viva preparation
tags:
  - physics
  - laboratory
  - embedded
  - capstone
  - debugging
  - report-writing
  - viva
sourceType: authored-courseware
assessmentHints:
  - Common bugs: incorrect pin numbers, missing pull-up resistors, debouncing, blocking delay, baud rate mismatch.
  - Debugging tools: Serial.print, LED, oscilloscope, logic analyser.
  - The report should include a circuit diagram, the code, the test results, and the conclusions.
  - The viva should test the student's understanding of the project, the code, and the debugging process.
status: in-review
***

# Capstone Project, Debugging, and the Viva

## Overview

This lesson is the capstone of the Microcontroller and Embedded Systems Lab. The student designs and builds a small device that integrates sensors, actuators, and communication. The project should be small enough to be completed in the available time but substantial enough to require a real engineering effort.

The deliverable is a working device, a complete report, and a viva. The device should be demonstrated to work; the report should describe the design, the implementation, and the testing; the viva should test the student's understanding of the project.

## Learning Path

1. **Choose a project.** Possible projects include:
   - Temperature data logger with an OLED display.
   - Motion detector with a PIR sensor and a buzzer.
   - Light-controlled LED with a photoresistor and a PWM LED.
   - Soil moisture monitor with a soil sensor and a pump.
   - Distance meter with an ultrasonic sensor and an LCD.
   - Wireless weather station with a temperature/humidity sensor and a Bluetooth or WiFi module.
2. **Design the hardware.** Choose the sensors, the actuators, the power supply, the enclosure. Draw a circuit diagram.
3. **Write the code.** Use the techniques from L1-L5: digital I/O, ADC, serial communication, PWM, data logging.
4. **Test the device.** Verify each subsystem (sensor reading, actuator control, communication). Test the integrated device.
5. **Debug.** Use Serial.print, LED indicators, oscilloscope, logic analyser to find and fix bugs.
6. **Write a report.** Use the project-style structure: title, abstract, introduction, design, implementation, testing, conclusions, references.
7. **Viva rehearsal.** Prepare for the viva; review the project, the code, the testing, the debugging.

## Core Explanation

### Project Design

A good project has the following characteristics:
- **Clear goal.** What does the device do? What problem does it solve?
- **Feasible scope.** The device can be built in the available time with the available parts.
- **Demonstrable.** The device can be shown to work in the viva.
- **Integrated.** The device uses multiple techniques from the lab (digital I/O, ADC, PWM, serial communication, data logging).

### Project Categories

#### Temperature Data Logger

A temperature sensor (TMP36) is read every second. The data is stored on an SD card with a timestamp from a DS3231 RTC. The current temperature is displayed on an OLED or LCD.

#### Motion Detector

A PIR (passive infrared) motion sensor is connected to a digital input. When motion is detected, a buzzer is activated and an LED is turned on. The event is logged to the SD card with a timestamp.

#### Light-Controlled LED

A photoresistor is connected to an analog input. The Arduino reads the light level and adjusts the brightness of a PWM LED to maintain a constant light level. The setpoint is set by a potentiometer.

#### Soil Moisture Monitor

A soil moisture sensor (a resistive or capacitive sensor) is connected to an analog input. When the moisture is below a threshold, a water pump is activated (via a relay or a motor driver). The moisture level and the pump activity are logged to the SD card.

#### Distance Meter

An ultrasonic sensor (HC-SR04) is connected to two digital pins (trigger and echo). The Arduino measures the time between the trigger and the echo, computes the distance, and displays it on an LCD or sends it over serial.

#### Wireless Weather Station

A temperature/humidity sensor (DHT11 or DHT22) is connected to a digital pin. The Arduino reads the data and transmits it over Bluetooth (HC-05) or WiFi (ESP8266) to a computer or a smartphone. The data is logged on the computer.

### Design Document

The design document specifies:
- **Goal**: what the device does, what problem it solves.
- **Hardware**: list of components, circuit diagram, power budget.
- **Software**: list of features, state diagram, pseudocode.
- **Testing**: test plan for each subsystem and for the integrated device.
- **Schedule**: timeline for the project.

### Circuit Diagram

The circuit diagram is a schematic showing all components, their connections, and the pin assignments. Tools for drawing circuit diagrams: Fritzing, KiCad, or paper-and-pencil.

### Code

The code is the Arduino sketch. The code should be well-organised, well-commented, and tested. Use functions for each subsystem; use Serial.print for debugging; use non-blocking timing (millis()) for responsive behavior.

### Testing

The testing is the process of verifying that the device works. Test each subsystem individually; then test the integrated device. Document the test results (screenshots, oscilloscope traces, data logs).

### Debugging

Debugging is the process of finding and fixing bugs. Common debugging techniques:
- **Serial.print**: print the values of variables, the state of the program, the output of sensors. This is the most common debugging technique for Arduino.
- **LED indicators**: use LEDs to indicate the state of the program (e.g. a heartbeat LED that blinks every second, a fault LED that turns on when an error is detected).
- **Oscilloscope**: observe the waveforms of digital and analog signals. Useful for debugging SPI, I2C, PWM, and ADC.
- **Logic analyser**: capture the digital signals on multiple channels simultaneously. Useful for debugging complex protocols.
- **Code review**: read the code carefully, looking for typos, off-by-one errors, missing semicolons, etc.
- **Rubber duck debugging**: explain the code to an inanimate object (a rubber duck). The act of explaining often reveals the bug.

### Common Bugs

- **Incorrect pin numbers.** A sketch that uses pin 9 will not work if the LED is connected to pin 10. Verify the pin numbers in the sketch and the circuit.
- **Missing pull-up resistors.** Without pull-up, the input pin floats when the button is open. Use INPUT_PULLUP or external pull-up resistors.
- **Debouncing.** A pushbutton without debouncing toggles multiple times per press. Use software debouncing (millis()-based).
- **Blocking delay.** A delay() in loop() blocks the program. Use millis()-based timing.
- **Baud rate mismatch.** The transmitter and receiver must use the same baud rate.
- **Address conflict (I2C).** Each slave must have a unique address. Use the I2C address scanner to identify the addresses.
- **Wiring errors (SPI).** SS, MOSI, MISO, SCK must be correctly connected. A swap of MOSI and MISO is a common error.
- **Power issues.** A weak USB power supply may cause the Arduino to reset. Use a powered USB hub or an external power supply.
- **Memory issues.** The Arduino Uno has 2 KB of SRAM. Large arrays or strings can exhaust the memory, causing crashes. Use F() macro for strings; use PROGMEM for constant data.

### Report

The report follows the project-style structure:

#### Title

A descriptive title that includes the device name and the function.

#### Abstract

A 100-200 word summary of the project: the goal, the design, the implementation, the result.

#### Introduction

A 1-2 page review of the relevant background: what is the problem, what are the existing solutions, what is the new contribution of this project.

#### Design

A description of the design: the hardware (components, circuit diagram, power budget), the software (features, state diagram, pseudocode).

#### Implementation

A description of the implementation: the code, the testing, the debugging. Include the final code as an appendix.

#### Testing

A description of the testing: the test plan, the test results, the issues found and how they were fixed.

#### Conclusions

A 1-2 paragraph summary of the main conclusions: what was learned, what could be improved, what would be the next step.

#### References

A list of the references cited in the report, in a standard format.

### Viva

The viva is a 15-30 minute oral examination. The examiner asks questions about:
- The project: what does it do, how does it work, what was the design process.
- The hardware: why were the components chosen, what are the alternatives, what are the limitations.
- The software: what is the algorithm, how is the code organised, what are the libraries.
- The testing: what was tested, what were the results, what was the debugging process.
- The conclusions: what was learned, what could be improved, what would be the next step.

The student should be able to demonstrate the device, answer the questions, and defend the design.

## Key Ideas

- Capstone project: integrates sensors, actuators, and communication.
- Debugging: Serial.print, LED, oscilloscope, logic analyser, code review.
- Common bugs: incorrect pin numbers, missing pull-up, debouncing, blocking delay, baud rate, address, wiring, power, memory.
- Report: title, abstract, introduction, design, implementation, testing, conclusions, references.
- Viva: oral examination that tests understanding.

## Common Misconceptions

- **"The project is just a series of labs."** The project integrates the techniques from the labs into a single device. The integration is the challenge.
- **"Debugging is a waste of time."** Debugging is an essential part of engineering. The skill of finding and fixing bugs is as important as the skill of designing the device.
- **"The code is done when it compiles."** The code is done when it works correctly. Compilation is a necessary but not sufficient condition.
- **"The report is a record of what was done."** The report is a formal document that describes the design, the implementation, the testing, and the conclusions. It should be self-contained and readable.
- **"The viva is a test of memory."** The viva is a test of understanding. The student should be able to explain the project in their own words.

## Connections

- **Microcontroller and Embedded Systems (Sem 5 theory).** The capstone project is the closest a B.Sc. student can get to the actual engineering process. The techniques learned here are the same as those used in professional embedded systems development.
- **Engineering design.** The project demonstrates the engineering design process: requirements, design, implementation, testing, debugging. The same process is used in every engineering discipline.
- **Project management.** The project demonstrates project management: planning, scheduling, execution, delivery. The same skills are essential in any professional project.
- **Communication.** The report and the viva develop communication skills: writing clearly, presenting data, defending conclusions. These skills are essential in any professional career.
- **Career preparation.** The project is a sample of the work that an embedded systems engineer does. The skills learned here are directly transferable to a professional career.

## Quick Check

1. What are the four characteristics of a good project?
2. What are the four main debugging techniques for Arduino?
3. What are the common bugs in Arduino projects?
4. What is the structure of a project report?
5. What is the difference between the report and the viva?
6. What is the role of the circuit diagram in the design?
7. What is the role of the testing in the project?
8. How do you debug a project that "doesn't work"?

## Takeaway

The capstone project is the capstone of the Microcontroller and Embedded Systems Lab. It is an opportunity to integrate the techniques learned in L1-L5 and to demonstrate the ability to design, build, test, and debug a real device. The lab's discipline — careful design, accurate implementation, thorough testing, systematic debugging — is the same discipline that runs through every embedded system project. The report is the formal record; the viva is the test of understanding. The project is a sample of the work that a professional embedded systems engineer does; the skills learned here are directly transferable to a professional career.
