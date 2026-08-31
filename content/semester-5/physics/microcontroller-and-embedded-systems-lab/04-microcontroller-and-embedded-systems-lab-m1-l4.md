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
lessonId: microcontroller-and-embedded-systems-lab-m1-l4
lessonName: Control Loops — PWM, PID, and Motor Control
lessonNumber: 4
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 4
prerequisites:
  - microcontroller-and-embedded-systems-lab-m1-l3
learningObjectives:
  - Generate a PWM signal on an Arduino pin; use it to control the brightness of an LED and the speed of a DC motor.
  - Implement a proportional (P) controller to maintain a sensor reading at a setpoint; observe the steady-state error.
  - Implement a proportional-integral-derivative (PID) controller; tune the gains (K_p, K_i, K_d) for stable, fast response.
concepts:
  - PWM (Pulse Width Modulation)
  - Duty cycle
  - Frequency
  - Open-loop control
  - Closed-loop control
  - Proportional (P) controller
  - Integral (I) controller
  - Derivative (D) controller
  - PID controller
  - Tuning
  - Stability
  - Setpoint
  - Error
  - Steady-state error
tags:
  - physics
  - laboratory
  - embedded
  - pwm
  - pid
  - control
sourceType: authored-courseware
assessmentHints:
  - analogWrite(pin, value) sets the duty cycle to value/255 (8-bit PWM).
  - The PWM frequency on most Arduino pins is ~ 490 Hz (or 980 Hz on pins 5 and 6).
  - The PID output is u = K_p e + K_i ∫ e dt + K_d de/dt.
status: in-review
***

# Control Loops — PWM, PID, and Motor Control

## Overview

A control loop is a system that maintains a process variable at a desired setpoint. The simplest control loop is the on-off controller (a thermostat), which switches the process fully on or fully off. More sophisticated controllers use proportional (P), integral (I), and derivative (D) terms. The PID controller is the workhorse of industrial control: it is used in 90 % of practical control applications.

The Arduino can implement a PID controller with a few lines of code. The PID library (or a hand-written implementation) takes a setpoint and a process variable as inputs, computes the error, and produces an output. The output is typically a PWM signal that drives an actuator (a motor, a heater, a valve).

This lesson covers the apparatus (an Arduino Uno, a DC motor with an H-bridge driver, a position sensor like a potentiometer or an encoder), the procedure (implement a P controller and a PID controller; tune the gains; observe the response), the analysis (measure the rise time, the overshoot, the steady-state error, the stability), and the dominant sources of error (incorrect tuning, sensor noise, actuator nonlinearity).

## Learning Path

1. **PWM output.** Use analogWrite() to generate a PWM signal on a pin. Connect an LED (with a current-limiting resistor) to the pin. Vary the duty cycle from 0 to 255; observe the LED brightness.
2. **PWM motor control.** Connect a DC motor to the Arduino via an H-bridge driver (e.g. the L298N). Use the PWM signal to control the motor speed.
3. **P controller.** Implement a proportional controller that maintains a sensor reading (e.g. a potentiometer position) at a setpoint. Use the PWM signal to drive the motor. Observe the steady-state error.
4. **PID controller.** Add integral and derivative terms. Tune the gains (K_p, K_i, K_d) for stable, fast response. Use the Ziegler-Nichols method or manual tuning.
5. **Measure the response.** Record the process variable vs time; measure the rise time, the overshoot, the settling time, the steady-state error.

## Core Explanation

### Theory: PWM

Pulse Width Modulation (PWM) is a technique for generating an analog signal from a digital output. The digital output is switched between HIGH and LOW at a fixed frequency; the fraction of time that the output is HIGH is the duty cycle. The average voltage is V_avg = D · V_CC, where D is the duty cycle (0 to 1).

On the Arduino, analogWrite(pin, value) sets the duty cycle to value / 255 (for 8-bit PWM, value 0-255). The PWM frequency is ~ 490 Hz on most pins (or 980 Hz on pins 5 and 6 of the Uno). The default frequency is suitable for motor control and LED dimming; for audio or other high-frequency applications, the timer settings must be changed.

### Theory: Open-Loop vs Closed-Loop Control

In an open-loop control, the output is set by the input, with no feedback. A simple example is a light switch: turn it on, the light goes on; turn it off, the light goes off. The brightness is not measured or controlled.

In a closed-loop control, the output is measured and compared with the desired value; the input is adjusted to reduce the error. A simple example is a thermostat: the temperature is measured; if it is below the setpoint, the heater is turned on; if it is above, the heater is turned off.

Closed-loop control is more accurate and robust than open-loop control. It compensates for disturbances, modelling errors, and parameter variations.

### Theory: PID Controller

A PID controller has three terms:

- **Proportional (P)**: u_P = K_p · e(t), where e(t) = setpoint − process variable. The proportional term produces an output proportional to the error. A larger K_p gives a faster response but more overshoot.
- **Integral (I)**: u_I = K_i · ∫ e(t) dt. The integral term accumulates the error over time; it eliminates the steady-state error. A larger K_i gives faster elimination of the steady-state error but more overshoot.
- **Derivative (D)**: u_D = K_d · de/dt. The derivative term damps the response; it reduces the overshoot. A larger K_d gives less overshoot but more sensitivity to noise.

The total output is

u(t) = K_p · e(t) + K_i · ∫ e(t) dt + K_d · de/dt.

The gains K_p, K_i, K_d are tuned to give the desired response. Common tuning methods include:
- **Manual tuning**: adjust the gains by trial and error.
- **Ziegler-Nichols method**: set K_i = K_d = 0; increase K_p until the system oscillates; use the critical K_p and the oscillation period to compute K_i and K_d.
- **Software tuning**: use a software tool (e.g. the Arduino PID Library's auto-tuning feature) to find the optimal gains.

### Theory: Stability

A control system is stable if the process variable converges to the setpoint after a disturbance. An unstable system oscillates with increasing amplitude.

The stability of a PID controller depends on the gains. Too high K_p causes overshoot and oscillation; too low K_p gives a slow response. Too high K_i causes oscillation; too low K_i gives a slow elimination of the steady-state error. Too high K_d amplifies noise; too low K_d gives more overshoot.

A common diagnostic is the step response: apply a step change to the setpoint and observe the process variable. The response is characterised by:
- **Rise time**: the time to go from 10 % to 90 % of the setpoint.
- **Overshoot**: the maximum value minus the setpoint, as a fraction of the setpoint.
- **Settling time**: the time to settle within 2 % (or 5 %) of the setpoint.
- **Steady-state error**: the difference between the process variable and the setpoint after the transients have died out.

A well-tuned PID controller has a short rise time, a small overshoot, a short settling time, and a small steady-state error.

### Apparatus

- Arduino Uno (from L1).
- USB cable.
- Breadboard.
- DC motor (e.g. 6 V, 200 mA).
- H-bridge driver (e.g. L298N, DRV8871, or similar).
- Position sensor: potentiometer (rotary) or rotary encoder.
- LED with 220 Ω resistor.
- Jumper wires.
- External power supply for the motor (e.g. 9 V battery or DC adapter).
- Computer with Arduino IDE.

### Procedure

1. **PWM with an LED.** Connect an LED (with a 220 Ω resistor) to pin 9. Upload a sketch that sets the duty cycle from 0 to 255 in a loop. Observe the LED brightness.
2. **PWM with a motor.** Connect the DC motor to the Arduino via the H-bridge. Connect the H-bridge inputs to the Arduino's PWM pins. Upload a sketch that varies the motor speed.
3. **P controller.** Connect the potentiometer to A0 (wiper), 5 V (one end), GND (other end). Connect the motor to the H-bridge. Upload a sketch that reads the potentiometer, computes the error, and outputs a PWM signal to the motor. The setpoint is 512 (mid-scale). Observe the motor position.
4. **PID controller.** Modify the sketch to include the integral and derivative terms. Tune the gains for stable, fast response. Use the Ziegler-Nichols method.
5. **Measure the step response.** Apply a step change to the setpoint (e.g. from 512 to 700). Record the process variable vs time. Measure the rise time, the overshoot, the settling time, the steady-state error.

### Analysis

#### P Controller Step Response

For a P controller, the steady-state error is

e_ss = 1 / (1 + K_p · K_process),

where K_process is the gain of the process (e.g. the motor speed per PWM duty cycle). For K_p · K_process = 1, the steady-state error is 50 %; for K_p · K_process = 9, the steady-state error is 10 %.

The P controller cannot eliminate the steady-state error. The integral term is required.

#### PID Controller Step Response

For a well-tuned PID controller, the step response is:
- Short rise time (typically 10-30 % of the time constant of the process).
- Small overshoot (typically < 10 %).
- Short settling time (typically 2-3 time constants).
- Zero steady-state error (the integral term eliminates it).

#### Tuning

The Ziegler-Nichols method:
1. Set K_i = K_d = 0.
2. Increase K_p until the system oscillates with constant amplitude. Record the critical gain K_c and the oscillation period T_c.
3. Set K_p = 0.6 K_c, K_i = 2 K_p / T_c, K_d = K_p · T_c / 8.

These values give a quarter-amplitude decay response (the overshoot decays by a factor of 4 each cycle). They are a good starting point for further tuning.

### Sources of Error

- **Sensor noise.** A noisy sensor gives a noisy error signal; the derivative term amplifies the noise. Use a low-pass filter on the sensor reading.
- **Actuator nonlinearity.** A nonlinear actuator (e.g. a motor with a dead zone) makes the controller difficult to tune. Compensate for the nonlinearity in software or use a more linear actuator.
- **Incorrect tuning.** The gains must be tuned for the specific process. The Ziegler-Nichols values are a starting point, not a final answer.
- **Saturation.** The actuator output is bounded (e.g. 0-255 for PWM). When the output saturates, the integral term continues to accumulate (integral windup). Use anti-windup to prevent this.
- **Time delay.** A time delay in the process (e.g. a thermal process with a long time constant) makes the controller less stable. Reduce the gains or use a Smith predictor.

## Key Ideas

- PWM: a digital technique for generating an analog signal. The duty cycle is the fraction of time the output is HIGH.
- Closed-loop control: the output is measured and compared with the setpoint; the input is adjusted to reduce the error.
- PID controller: P (proportional), I (integral), D (derivative). The integral term eliminates the steady-state error; the derivative term damps the response.
- Tuning: the gains are adjusted to give the desired response. Ziegler-Nichols is a common method.
- Stability: a stable controller converges to the setpoint after a disturbance. An unstable controller oscillates with increasing amplitude.

## Worked Examples

#### Example 1: PWM Frequency

The Arduino's analogWrite uses a PWM frequency of ~ 490 Hz (or 980 Hz on pins 5 and 6). The period is ~ 2 ms (or 1 ms). For a duty cycle of 128 (50 %), the output is HIGH for 1 ms and LOW for 1 ms.

For a DC motor, the PWM frequency should be high enough to avoid audible noise (> 20 kHz) but low enough to avoid switching losses. The Arduino's default frequency (490 Hz) is in the audible range and may produce a whine; a higher frequency (e.g. 20 kHz) is preferable for motor control.

#### Example 2: P Controller

A motor is connected to a position sensor (potentiometer). The setpoint is 512. The error is e = setpoint − position. The output is PWM = K_p · e. For K_p = 1, the output is 1 × e. For e = 100, the output is 100. The motor moves until the position is 512, but with a steady-state error of 0 (if the motor can hold the position).

Wait, the P controller has a steady-state error only if the process has a non-unity gain or if there is a disturbance. For a position control with no disturbance, the P controller drives the position to the setpoint exactly. The steady-state error is non-zero only for processes with integration (e.g. velocity control).

#### Example 3: PID Controller

For a well-tuned PID controller on a position control:
- K_p = 1, K_i = 0.1, K_d = 0.01.
- The rise time is ~ 100 ms.
- The overshoot is ~ 5 %.
- The settling time is ~ 300 ms.
- The steady-state error is 0.

The integral term eliminates the steady-state error; the derivative term reduces the overshoot. The proportional term provides the immediate response.

## Common Misconceptions

- **"Higher K_p is always better."** Higher K_p gives a faster response but more overshoot and oscillation. The optimal K_p is a balance between speed and stability.
- **"The integral term is always needed."** For some processes (e.g. position control with no disturbance), the proportional term alone is sufficient. The integral term is needed when there is a steady-state error (e.g. with a constant disturbance).
- **"The derivative term amplifies noise."** Yes, the derivative term amplifies high-frequency noise. Use a low-pass filter on the derivative term (or on the error signal) to reduce the noise.
- **"The PID controller is the best for all applications."** The PID controller is good for many applications, but for some (e.g. very fast systems, very nonlinear systems), other controllers (e.g. state-space, adaptive, fuzzy) may be better.
- **"Tuning is a one-time task."** Tuning is an iterative process. The gains may need to be adjusted as the process changes (e.g. as the motor wears, as the load changes).

## Connections

- **Microcontroller and Embedded Systems (Sem 5 theory).** The PID controller is the workhorse of embedded control. The same algorithm is used in industrial control, robotics, aerospace, and automotive systems.
- **Control theory.** The PID controller is the introductory example in any control theory course. The same concepts (transfer function, Bode plot, stability, tuning) apply to all controllers.
- **Robotics.** The PID controller is used in every joint of a robot arm, in every wheel of a mobile robot, and in every drone. The same code is used for position, velocity, and torque control.
- **Aerospace.** The PID controller is used in aircraft autopilots, in spacecraft attitude control, and in rocket guidance. The same code is used with appropriate tuning.
- **Process control.** The PID controller is used in chemical plants, oil refineries, power plants, and water treatment plants. The same code is used with appropriate tuning.

## Quick Check

1. What is the duty cycle of a PWM signal with value 128 on the Arduino?
2. What is the difference between open-loop and closed-loop control?
3. State the PID controller formula.
4. What does the proportional term do? The integral? The derivative?
5. How do you tune a PID controller using the Ziegler-Nichols method?
6. What is the steady-state error of a P controller?
7. What is integral windup? How do you prevent it?
8. A student reports that the motor oscillates. What is wrong?

## Takeaway

PWM, PID, and motor control are the lab's primary tools for controlling the physical world. PWM generates an analog signal from a digital output; the PID controller maintains a process variable at a setpoint. The lab's discipline — careful tuning, accurate measurement, proper anti-windup, stable response — is the same discipline that runs through every control system. The same principles (P, I, D, tuning, stability) apply to all controllers, from the Arduino to the industrial PLC. The PID controller is the workhorse; the same code, with appropriate tuning, controls motors, heaters, valves, and robots.
