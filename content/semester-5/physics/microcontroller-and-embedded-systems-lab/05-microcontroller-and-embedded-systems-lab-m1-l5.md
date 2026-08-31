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
lessonId: microcontroller-and-embedded-systems-lab-m1-l5
lessonName: Data Logging — SD Card, Real-Time Clock, and CSV Output
lessonNumber: 5
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 5
prerequisites:
  - microcontroller-and-embedded-systems-lab-m1-l4
learningObjectives:
  - Connect an SD card module to the Arduino using SPI; write data to a file on the SD card.
  - Connect a real-time clock (RTC) module (e.g. DS3231) to the Arduino using I2C; read the current time and date.
  - Build a data-logging sketch that records sensor readings with timestamps to a CSV file on the SD card.
concepts:
  - SD card
  - SPI interface
  - File system (FAT16, FAT32)
  - Real-time clock (RTC)
  - DS3231
  - I2C interface
  - CSV format
  - Data logging
  - Timestamp
tags:
  - physics
  - laboratory
  - embedded
  - sd-card
  - rtc
  - data-logging
sourceType: authored-courseware
assessmentHints:
  - The SD card library supports FAT16 and FAT32 file systems. The card must be formatted correctly.
  - The DS3231 RTC communicates over I2C at address 0x68. It has a battery backup that maintains the time when the Arduino is powered off.
  - CSV (comma-separated values) is a standard format for tabular data. Each line is a row; commas separate the columns.
status: in-review
***

# Data Logging — SD Card, Real-Time Clock, and CSV Output

## Overview

A data logger is a device that records measurements over time. The Arduino can be a data logger with the addition of an SD card module (for storage) and a real-time clock (RTC) module (for timestamps). The SD card is connected via SPI; the RTC is connected via I2C. The Arduino reads the sensor, gets the current time from the RTC, and writes the data to a file on the SD card in CSV format.

This lesson covers the apparatus (an Arduino Uno, an SD card module, a DS3231 RTC module, a sensor like the TMP36 temperature sensor, an SD card), the procedure (connect the SD card and the RTC, write a sketch that reads the sensor and logs the data with a timestamp), the analysis (verify the data on the SD card, plot the temperature vs time, characterise the logger's performance), and the dominant sources of error (SD card formatting, RTC drift, sensor noise, power management).

## Learning Path

1. **Connect the SD card module** to the Arduino's SPI pins (MOSI, MISO, SCK, SS). Insert an SD card formatted as FAT16 or FAT32.
2. **Test the SD card** by writing and reading a file. Verify the file appears on the SD card.
3. **Connect the RTC module** to the Arduino's I2C pins (SDA, SCL). Set the time on the RTC (using a sketch that sets the time from the computer).
4. **Test the RTC** by reading the time and printing it to the serial monitor.
5. **Build a data logger** that reads a sensor (e.g. a TMP36 temperature sensor) every second, gets the timestamp from the RTC, and writes the data to a CSV file on the SD card.
6. **Verify the data** by reading the CSV file on a computer. Plot the temperature vs time.

## Core Explanation

### Theory: SD Card

An SD card (Secure Digital card) is a non-volatile memory card used for storage. SD cards support the SPI interface, which is available on the Arduino. The SD card library (SdFat or the built-in SD library) provides a file system interface (FAT16 or FAT32).

The SD card is connected to the Arduino via SPI:
- MOSI (Arduino 11) → SD card DI (data in)
- MISO (Arduino 12) → SD card DO (data out)
- SCK (Arduino 13) → SD card CLK (clock)
- SS (Arduino 10) → SD card CS (chip select)
- VCC → 5 V (or 3.3 V for some modules)
- GND → GND

The SD card must be formatted as FAT16 or FAT32. The SD library supports cards up to 32 GB (FAT32) or 2 GB (FAT16).

### Theory: Real-Time Clock (RTC)

A real-time clock (RTC) is a chip that maintains the current time and date, even when the main system is powered off. The DS3231 is a popular RTC with a built-in temperature-compensated crystal oscillator (TCXO), giving an accuracy of ± 2 ppm (± 1 minute per year).

The DS3231 communicates via I2C at address 0x68. It has a battery backup (CR2032 coin cell) that maintains the time when the Arduino is powered off. The battery lasts ~ 5 years.

The RTClib library (or the built-in Wire library) provides the interface. The time is read as a Unix timestamp (seconds since 1 Jan 1970) or as a structured date/time (year, month, day, hour, minute, second).

### Theory: CSV Format

CSV (comma-separated values) is a standard text format for tabular data. Each line is a row; commas separate the columns. The first line is typically a header that names the columns.

Example:
```
timestamp,temperature,humidity
2024-01-15 10:00:00,23.5,45.2
2024-01-15 10:00:01,23.6,45.1
2024-01-15 10:00:02,23.5,45.3
```

CSV files can be opened in a spreadsheet (Excel, Google Sheets) or read by a script (Python with pandas). The data logger writes CSV files; the analysis is done offline.

### Apparatus

- Arduino Uno (from L1).
- USB cable.
- Breadboard.
- SD card module (SPI interface, with a level shifter if needed).
- SD card (formatted as FAT16 or FAT32).
- DS3231 RTC module (I2C interface).
- TMP36 temperature sensor.
- Resistors: 4.7 kΩ (for I2C pull-ups, if not on the module).
- Jumper wires.
- Computer with Arduino IDE.

### Procedure

1. **Connect the SD card module** to the Arduino's SPI pins. Insert the SD card (formatted as FAT16 or FAT32).
2. **Test the SD card** with the CardInfo example sketch (File > Examples > SD > CardInfo). Verify the card is detected and the file system is correct.
3. **Connect the RTC module** to the Arduino's I2C pins (SDA = A4, SCL = A5). Install the RTClib library (Sketch > Include Library > Manage Libraries > RTClib).
4. **Set the RTC time** with the SetSerial example sketch (File > Examples > RTClib > SetSerial). Uncomment the line `RTC.adjust(DateTime(F(__DATE__), F(__TIME__)));` to set the time to the compile time. Upload and run; the time is set.
5. **Read the RTC** with the ReadTest example sketch. Verify the time is correct.
6. **Build a data logger.** Write a sketch that:
   a. Initialises the SD card and the RTC.
   b. Opens a CSV file for append.
   c. Writes a header line.
   d. In loop(), reads the TMP36, gets the current time, formats the data as CSV, and writes to the file.
   e. Waits 1 second.
7. **Run the data logger** for a few minutes. Stop the logger. Remove the SD card and read the CSV file on a computer. Plot the data.

### Analysis

#### Data Logger Performance

The data logger's performance is characterised by:
- **Sampling rate**: the number of samples per second. For the Arduino with a TMP36 read and a CSV write, the sampling rate is ~ 10 Hz.
- **Timing accuracy**: the accuracy of the timestamps. The DS3231 has an accuracy of ± 2 ppm, or ~ 1 minute per year.
- **Storage**: the size of the data file. A CSV file with 1 timestamp and 1 measurement per row is ~ 30 bytes. For 1 hour of data at 1 Hz, the file is ~ 100 kB. A 8 GB SD card can store ~ 80,000 hours of data at this rate.
- **Power consumption**: the current draw of the data logger. The Arduino Uno draws ~ 50 mA; the SD card module ~ 50 mA; the RTC ~ 1 mA. Total ~ 100 mA. A 9 V battery (500 mAh) lasts ~ 5 hours.

#### Data Quality

The data should be inspected for:
- **Missing values**: the SD card write may fail if the card is full or if there is a wiring error.
- **Outliers**: the sensor may give spurious readings (e.g. noise, electromagnetic interference).
- **Drift**: the sensor may drift over time (e.g. the TMP36 has a temperature coefficient of ~ 0.5 °C over its operating range).

### Sources of Error

- **SD card formatting.** The SD card must be formatted as FAT16 or FAT32. Other formats (exFAT, NTFS) are not supported by the Arduino SD library.
- **RTC drift.** The DS3231 has a small drift (~ 1 minute per year). The drift can be corrected by setting the time periodically.
- **Sensor noise.** The TMP36 has a noise of ~ 0.5 °C. Averaging multiple readings reduces the noise.
- **Power management.** The Arduino's 5 V regulator may not provide enough current for the SD card. Use an external 5 V power supply if necessary.
- **File system errors.** The SD library may fail if the card is removed during a write. Use a flush after each write to minimise data loss.

## Key Ideas

- SD card: non-volatile storage, SPI interface, FAT16 or FAT32 file system.
- RTC: real-time clock with battery backup, I2C interface, ± 2 ppm accuracy (DS3231).
- CSV: a standard text format for tabular data. Each line is a row; commas separate the columns.
- Data logger: reads a sensor, gets a timestamp, writes the data to a file. The sampling rate is set by the loop time.
- Power management: the Arduino + SD card + RTC draw ~ 100 mA. A battery or USB power is needed.

## Worked Examples

#### Example 1: CSV File Format

A data logger records temperature every second. The CSV file is:

```
timestamp,temperature_C
2024-01-15 10:00:00,23.5
2024-01-15 10:00:01,23.6
2024-01-15 10:00:02,23.5
```

The file is 30 bytes per row. For 1 hour of data, the file is ~ 100 kB. For 1 day, ~ 2.5 MB. For 1 year, ~ 900 MB. An 8 GB SD card can store ~ 3000 days (8 years) of data.

#### Example 2: RTC Accuracy

The DS3231 has an accuracy of ± 2 ppm, or ± 0.0002 %. For a 1-year period (3.15 × 10⁷ s), the drift is ± 0.0002 % · 3.15 × 10⁷ s = ± 6300 s = ± 1.75 hours. Wait, that's much larger than the 1 minute per year I quoted earlier.

Let me recompute. ± 2 ppm means the fractional frequency error is ± 2 × 10⁻⁶. Over 1 year (3.15 × 10⁷ s), the time error is ± 2 × 10⁻⁶ · 3.15 × 10⁷ s = ± 63 s ≈ ± 1 minute. OK, so ± 1 minute per year is correct.

#### Example 3: Power Consumption

The Arduino Uno draws ~ 50 mA; the SD card module ~ 50 mA; the RTC ~ 1 μA (in standby). Total ~ 100 mA. A 9 V battery with 500 mAh capacity lasts 500 mAh / 100 mA = 5 hours.

A lithium-ion battery (3.7 V, 2000 mAh) can power the data logger through a boost converter for ~ 20 hours. A solar panel (5 V, 200 mA) can power the data logger indefinitely in sunlight.

## Common Misconceptions

- **"The SD card library supports all SD cards."** No. The library supports SD cards up to 32 GB (FAT32) or 2 GB (FAT16). SDXC cards (> 32 GB, exFAT) are not supported.
- **"The RTC is accurate to 1 second."** The DS3231 is accurate to ~ 1 minute per year. Other RTCs (e.g. the DS1307) are accurate to ~ 1 minute per day, requiring more frequent setting.
- **"The data logger can run forever on battery."** No. The Arduino + SD card draw ~ 100 mA. A 9 V battery (500 mAh) lasts ~ 5 hours. For long-term deployment, use a larger battery, a solar panel, or a low-power design.
- **"The CSV file is the same as a spreadsheet."** A CSV file can be opened in a spreadsheet, but it is a plain text file. The spreadsheet may interpret the data differently (e.g. dates, numbers with commas as decimal separators).
- **"The RTC battery lasts forever."** The CR2032 battery in the DS3231 lasts ~ 5 years. After that, the RTC loses the time when the Arduino is powered off.

## Connections

- **Microcontroller and Embedded Systems (Sem 5 theory).** Data logging is a fundamental application of microcontrollers. The same principles (sampling, timestamping, storage) apply to all data loggers, from the Arduino to the professional data acquisition system.
- **Data science.** The data logger produces a time series of measurements. The analysis is done offline with Python (pandas, NumPy, Matplotlib) or R. The same tools are used in every data science project.
- **Environmental monitoring.** Data loggers are used for environmental monitoring: temperature, humidity, air quality, water quality, soil moisture. The same architecture (sensor + RTC + storage) is used in every environmental data logger.
- **Industrial monitoring.** Data loggers are used for industrial monitoring: machine health, process variables, energy consumption. The same architecture is used, often with additional sensors and higher sampling rates.
- **Internet of Things (IoT).** Modern data loggers often transmit the data over a network (WiFi, cellular, LoRa) in addition to storing it locally. The Arduino + ESP32 combination is a common platform for IoT data loggers.

## Quick Check

1. What file system does the Arduino SD library support?
2. What is the I2C address of the DS3231 RTC?
3. What is the accuracy of the DS3231?
4. What is the format of a CSV file?
5. How long does a 9 V battery power the data logger?
6. What is the maximum SD card size supported by the Arduino SD library?
7. Why is the RTC battery needed?
8. A student reports that the SD card write fails. What might be wrong?

## Takeaway

Data logging is the lab's primary tool for recording measurements over time. The SD card provides non-volatile storage; the RTC provides accurate timestamps; the CSV format is the standard for tabular data. The lab's discipline — careful sensor selection, accurate timestamping, reliable storage, honest power management — is the same discipline that runs through every data logging application. The same architecture (sensor + RTC + storage) is used in every data logger, from the Arduino to the industrial system. The data you record today is the raw material for the analysis that follows.
