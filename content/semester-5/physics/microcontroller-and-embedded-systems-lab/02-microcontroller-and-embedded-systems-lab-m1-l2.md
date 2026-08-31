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
lessonId: microcontroller-and-embedded-systems-lab-m1-l2
lessonName: Sensor Interfacing and the Analog-to-Digital Converter
lessonNumber: 2
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 2
prerequisites:
  - microcontroller-and-embedded-systems-lab-m1-l1
learningObjectives:
  - Read an analog sensor (a temperature sensor, a photoresistor, or a potentiometer) using the Arduino's analog-to-digital converter.
  - Convert the ADC reading to a physical quantity (e.g. temperature in °C, light intensity in lux) using the sensor's calibration.
  - Average multiple ADC readings to reduce noise; characterise the noise as a function of the number of averages.
concepts:
  - Analog-to-digital converter (ADC)
  - ADC resolution
  - ADC reference voltage
  - Sensor calibration
  - Linear and non-linear sensors
  - Oversampling
  - Averaging
  - Noise
tags:
  - physics
  - laboratory
  - embedded
  - adc
  - sensors
  - calibration
sourceType: authored-courseware
assessmentHints:
  - analogRead(pin) returns a value 0-1023, corresponding to 0-5 V on a 5 V Arduino.
  - The resolution is 5 V / 1024 ≈ 4.88 mV. For a more precise reading, use the internal 1.1 V reference.
  - The ADC noise is ~ 1-2 LSB; averaging N readings reduces the noise by √N.
status: in-review
***

# Sensor Interfacing and the Analog-to-Digital Converter

## Overview

An analog-to-digital converter (ADC) converts a continuous voltage into a discrete digital value. The Arduino Uno has a 10-bit ADC, which returns values from 0 to 1023 corresponding to voltages from 0 V to V_REF (default 5 V, or 1.1 V with the internal reference). The resolution is V_REF / 1024 ≈ 4.88 mV (with 5 V reference) or 1.07 mV (with 1.1 V reference). The ADC is a successive-approximation type, with a conversion time of ~ 100 μs.

This lesson covers the apparatus (an Arduino Uno, an analog sensor — a temperature sensor like the TMP36, a photoresistor, or a potentiometer), the procedure (connect the sensor, write a sketch to read the ADC, calibrate the reading to a physical quantity, average multiple readings to reduce noise), the analysis (verify the linearity, measure the noise, plot the calibration curve), and the dominant sources of error (ADC noise, reference voltage drift, sensor nonlinearity, temperature effects).

## Learning Path

1. **Connect a potentiometer** to an analog input (A0). The wiper goes to A0; one end goes to 5 V; the other end goes to GND.
2. **Write a sketch** that reads analogRead(A0) and prints the value to the serial monitor. Verify the value changes from 0 to 1023 as the potentiometer is turned.
3. **Connect a TMP36 temperature sensor.** The TMP36 has three pins: VCC (5 V), VOUT (analog output), GND. Connect VOUT to A0.
4. **Calibrate the TMP36.** The TMP36 outputs 10 mV/°C with a 500 mV offset at 0 °C. Convert the ADC reading to temperature: T = (ADC / 1024) · 5 V · 100 °C/V − 50 °C.
5. **Average multiple readings.** Take 10, 100, 1000 readings and average them. Verify the noise decreases as √N.

## Core Explanation

### Theory: ADC

The Arduino Uno's ADC is a 10-bit successive-approximation converter. It compares the input voltage to a reference voltage using a binary search. The conversion time is ~ 100 μs (15 ADC clock cycles at 16 MHz / 128 prescaler).

The output is a value from 0 to 1023, corresponding to 0 V to V_REF. The default reference is V_CC = 5 V, giving a resolution of 4.88 mV. The internal 1.1 V reference gives a resolution of 1.07 mV, useful for low-voltage signals.

analogRead(pin) returns the ADC value. To convert to voltage:

V = (ADC / 1024.0) · V_REF.

### Theory: Sensor Calibration

A sensor converts a physical quantity (temperature, light, pressure) into a voltage (or a resistance, or a current). The relationship between the physical quantity and the output is given by the sensor's calibration curve. For a linear sensor,

V = a · Q + b,

where Q is the physical quantity, a is the sensitivity, and b is the offset. The constants a and b are determined by calibration: measure V at two known values of Q and solve for a and b.

For the TMP36 temperature sensor:

V = 0.010 V/°C · T + 0.500 V.

T = (V − 0.500) / 0.010 = 100 · V − 50 (in °C, with V in volts).

For the photoresistor, the relationship is non-linear. A common model is the LDR (light-dependent resistor) calibration:

R = R_0 · (L_0 / L)^γ,

where R_0 and L_0 are reference values, L is the light intensity (in lux), and γ is a constant (~ 0.7-0.9 for typical CdS photoresistors). The voltage across a voltage divider is

V = V_CC · R_LDR / (R + R_LDR).

### Theory: Oversampling and Averaging

The ADC has a noise of ~ 1-2 LSB (least significant bit), corresponding to ~ 5-10 mV with the 5 V reference. To reduce the noise, multiple readings can be averaged:

V_avg = (1 / N) · Σ V_i.

The noise in V_avg is reduced by a factor of √N compared to a single reading. For N = 100, the noise is reduced by a factor of 10; for N = 10000, by a factor of 100.

Oversampling can also increase the effective resolution. Averaging 4 readings gives 1 extra bit of resolution; averaging 4^n readings gives n extra bits. For example, averaging 4^4 = 256 readings of a 10-bit ADC gives an effective 12-bit resolution (with the same noise as a 12-bit ADC).

### Apparatus

- Arduino Uno (from L1).
- USB cable.
- Breadboard.
- Potentiometer (10 kΩ).
- TMP36 temperature sensor (or similar).
- Photoresistor (CdS, e.g. GL5537).
- Resistors: 10 kΩ (for the photoresistor voltage divider).
- Jumper wires.
- Computer with Arduino IDE.

### Procedure

1. **Connect a potentiometer to A0.** VCC to 5 V, GND to GND, wiper to A0.
2. **Write a sketch** that reads analogRead(A0) and prints to the serial monitor. Upload. Open the serial monitor (Tools > Serial Monitor, or Ctrl+Shift+M). Set the baud rate to 9600. Verify the value changes from 0 to 1023 as the potentiometer is turned.
3. **Connect a TMP36 to A0.** VCC to 5 V, GND to GND, VOUT to A0. Use the same sketch; the ADC value should change with temperature. Compute the temperature in °C.
4. **Connect a photoresistor voltage divider.** The photoresistor and a 10 kΩ resistor form a voltage divider. Connect the junction to A0. The voltage at A0 depends on the light intensity.
5. **Average multiple readings.** Modify the sketch to take N readings, average them, and print the result. Try N = 1, 10, 100, 1000. Observe the noise reduction.

### Analysis

#### ADC Calibration

The ADC reading for a known voltage can be used to verify the reference. For example, the Arduino's 3.3 V pin can be measured with a multimeter (e.g. 3.28 V). The ADC reading on the 5 V reference should be

ADC_3.3V = (3.28 / 5.00) · 1024 = 672.

If the ADC reading is significantly different, the reference voltage may be off. The Arduino's 5 V reference is the USB voltage, which can vary from 4.5 V to 5.2 V.

For high-precision measurements, use the internal 1.1 V reference:

analogReference(INTERNAL);

The actual internal reference is 1.05-1.15 V, with a typical value of 1.10 V. The exact value is printed on the ATmega328P's signature row; it can be read with a calibration sketch.

#### TMP36 Calibration

The TMP36 has a typical accuracy of ± 2 °C (after calibration) and a linearity of ± 0.5 °C. The output is 10 mV/°C with a 500 mV offset at 0 °C.

For an ADC reading of 250, the voltage is V = (250 / 1024) · 5 = 1.221 V. The temperature is T = (1.221 − 0.500) / 0.010 = 72.1 °C.

For an ADC reading of 100, V = 0.488 V. The temperature is T = (0.488 − 0.500) / 0.010 = − 1.2 °C.

#### Photoresistor Calibration

The photoresistor's resistance depends on the light intensity. For a typical CdS photoresistor:

R = R_0 · (L_0 / L)^γ,

with R_0 = 10 kΩ at L_0 = 10 lux, γ = 0.8.

The voltage at the divider (with a 10 kΩ fixed resistor) is

V = 5 · R / (R + 10 kΩ).

For L = 100 lux, R = 10 · (10/100)^0.8 = 2.0 kΩ. V = 5 · 2 / 12 = 0.83 V. ADC = 0.83 / 5 · 1024 = 170.

For L = 1 lux, R = 10 · 10^0.8 = 63 kΩ. V = 5 · 63 / 73 = 4.32 V. ADC = 884.

The relationship between ADC and L is non-linear. A log-amp or a lookup table is used to linearise the reading.

#### Noise Reduction by Averaging

For a single reading, the noise is ~ 1-2 LSB. For N = 100 readings, the noise is reduced to ~ 0.1-0.2 LSB. The SNR is increased by a factor of √100 = 10.

For a 10-bit ADC, averaging 4^4 = 256 readings gives a 12-bit equivalent resolution (with the same noise as a true 12-bit ADC).

### Sources of Error

- **ADC noise.** The ADC has a noise of ~ 1-2 LSB. Averaging reduces the noise.
- **Reference voltage drift.** The 5 V reference is the USB voltage, which can vary. The internal 1.1 V reference is more stable but has a ± 5 % tolerance.
- **Sensor nonlinearity.** Most sensors are approximately linear over a limited range. Outside this range, the calibration is not valid.
- **Temperature effects.** The sensor's output depends on the temperature (the "self-heating" of the sensor, the temperature coefficient of the reference, etc.). Calibrate at the operating temperature.
- **Input protection.** The analog input pins can be damaged by voltages > 5 V or < 0 V. Use a voltage divider or a protection circuit (e.g. a Zener diode) for signals outside the 0-5 V range.

## Key Ideas

- ADC: converts an analog voltage to a digital value. The Arduino's 10-bit ADC has a resolution of ~ 5 mV.
- analogRead(pin) returns 0-1023, corresponding to 0 V to V_REF.
- Sensor calibration: the relationship between the physical quantity and the ADC reading. May be linear or non-linear.
- Oversampling: averaging N readings reduces the noise by √N. Averaging 4^N readings gives N extra bits of resolution.
- Reference voltage: the 5 V reference is the USB voltage; the 1.1 V internal reference is more stable.

## Worked Examples

#### Example 1: TMP36 Temperature

An ADC reading of 300 corresponds to V = 300 / 1024 · 5 = 1.465 V. The temperature is T = (1.465 − 0.500) / 0.010 = 96.5 °C.

For an ADC reading of 150: V = 0.732 V. T = (0.732 − 0.500) / 0.010 = 23.2 °C.

#### Example 2: Photoresistor Light Intensity

For a CdS photoresistor with R_0 = 10 kΩ at 10 lux and γ = 0.8, the resistance at L lux is R = 10 · (10/L)^0.8 kΩ.

For L = 1 lux: R = 63 kΩ. With a 10 kΩ fixed resistor, V = 5 · 63 / 73 = 4.32 V. ADC = 884.
For L = 10 lux: R = 10 kΩ. V = 2.5 V. ADC = 512.
For L = 100 lux: R = 2.0 kΩ. V = 0.83 V. ADC = 170.

The log of the light intensity is approximately linear in the ADC reading (over a limited range).

#### Example 3: Noise Reduction

The ADC noise (standard deviation) for a single reading is ~ 1.5 LSB. For N = 100 readings averaged, the noise is 1.5 / √100 = 0.15 LSB. For N = 10000 readings, the noise is 0.015 LSB.

The averaging also increases the effective resolution. Averaging 4^2 = 16 readings of a 10-bit ADC gives a 12-bit equivalent resolution (with the noise of a 12-bit ADC).

## Common Misconceptions

- **"The ADC is exact."** The ADC has a finite resolution (10 bits for the Arduino Uno) and noise (~ 1-2 LSB). The reading is an approximation of the input voltage.
- **"The 5 V reference is exact."** The 5 V reference is the USB voltage, which can vary from 4.5 V to 5.2 V. For high-precision measurements, use the internal 1.1 V reference or an external reference.
- **"analogRead is slow."** analogRead takes ~ 100 μs. For most applications, this is fast enough. For high-speed applications, use a faster ADC (e.g. the Arduino Due has a 12-bit ADC with a 1 MHz conversion rate).
- **"All sensors are linear."** Many sensors are non-linear (e.g. thermistors, photoresistors). A linear approximation is valid only over a limited range.
- **"The ADC is the same as a digital-to-analog converter (DAC)."** An ADC converts analog to digital; a DAC converts digital to analog. The Arduino Uno does not have a built-in DAC; PWM is used as a poor man's DAC.

## Connections

- **Microcontroller and Embedded Systems (Sem 5 theory).** The ADC is the interface between the analog world (sensors, signals) and the digital world (microcontrollers, computers). It is one of the most important peripherals of any microcontroller.
- **Data acquisition.** The Arduino with an ADC is a simple data acquisition system. More sophisticated systems (National Instruments, LabVIEW) use higher-precision ADCs and more channels.
- **Sensors.** Many sensors output an analog voltage (or current). The ADC is used to read the voltage and convert it to a digital value.
- **Signal processing.** The ADC is the input to digital signal processing (DSP). The samples are processed in the digital domain (filtering, FFT, etc.) and output as digital values.
- **Instrumentation.** The ADC is at the heart of every digital instrument: oscilloscopes, multimeters, spectrum analysers, etc. The precision of the ADC sets the precision of the instrument.

## Quick Check

1. What is the resolution of the Arduino's 10-bit ADC on the 5 V reference? On the 1.1 V reference?
2. What is the relationship between the ADC reading and the voltage?
3. A TMP36 outputs 0.75 V. What is the temperature?
4. Why is averaging N ADC readings useful?
5. By what factor does the noise decrease when averaging 100 readings?
6. By what factor does the effective resolution increase when averaging 16 readings?
7. Why is the 1.1 V reference more stable than the 5 V reference?
8. A student reports that the ADC reading is always 0. What might be wrong?

## Takeaway

The ADC and sensor interfacing are the lab's primary tools for reading the physical world. The Arduino's 10-bit ADC has a resolution of ~ 5 mV; the 1.1 V internal reference is more stable. Sensor calibration, oversampling, and averaging are the techniques for improving the precision. The lab's discipline — careful sensor selection, proper calibration, accurate averaging, honest uncertainty estimation — is the same discipline that runs through every data acquisition system. The same principles (resolution, noise, calibration, averaging) apply to all ADCs, from the Arduino to the professional data acquisition system.
