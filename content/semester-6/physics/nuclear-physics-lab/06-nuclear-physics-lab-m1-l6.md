***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: nuclear-physics-lab
courseName: Nuclear Physics Lab
moduleId: nuclear-physics-lab-module-1
moduleName: Radioactivity, Counting, and Nuclear Spectra
lessonId: nuclear-physics-lab-m1-l6
lessonName: Radiation Safety, Report Writing, and the Viva
lessonNumber: 6
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - nuclear-physics-lab-m1-l5
learningObjectives:
  - Understand the principles of radiation safety: time, distance, shielding, monitoring, and contamination control.
  - Compute the dose rate from a radioactive source and the required shielding.
  - Write a complete lab report for a nuclear physics experiment.
  - Anticipate and answer viva-style questions about the five nuclear physics experiments.
concepts:
  - Radiation safety
  - ALARA principle
  - Time, distance, shielding
  - Dosimetry
  - Absorbed dose
  - Equivalent dose
  - Effective dose
  - Contamination control
  - Lab report
  - Viva preparation
tags:
  - physics
  - laboratory
  - nuclear
  - safety
  - radiation-protection
  - report-writing
  - viva
sourceType: authored-courseware
assessmentHints:
  - Dose rate from a point source: D = A · Γ / r², where Γ is the gamma-ray dose constant.
  - For ⁶⁰Co, Γ ≈ 0.35 mSv·m²/(GBq·h).
  - The annual dose limit for a radiation worker is 20 mSv (averaged over 5 years).
status: in-review
***

# Radiation Safety, Report Writing, and the Viva

## Overview

Radiation safety is the discipline of protecting people from the harmful effects of ionising radiation. The principles are time, distance, and shielding: minimise the time of exposure, maximise the distance from the source, and use shielding to attenuate the radiation. The dose limit for a radiation worker is 20 mSv/year (averaged over 5 years), and the dose limit for the public is 1 mSv/year. The ALARA principle (As Low As Reasonably Achievable) requires that the dose be kept as low as practicable, taking into account the social and economic factors.

This lesson covers the principles of radiation safety (time, distance, shielding, monitoring, contamination control), the calculation of the dose rate and the required shielding, the design of a nuclear physics lab (ventilation, shielding, waste disposal, emergency procedures), a worked example of a complete lab report, and the viva questions an examiner is likely to ask.

## Learning Path

1. **Understand the principles of radiation safety.** Study the ALARA principle; the time, distance, and shielding rules; the dose limits.
2. **Compute the dose rate** from a radioactive source at a given distance. Verify with a survey meter.
3. **Design the shielding** for a radioactive source. Verify with a survey meter.
4. **Wear a dosimeter** during the lab. Record the dose at the end of the lab.
5. **Follow the contamination control procedures** (gloves, lab coat, no eating or drinking, etc.).
6. **Write a complete lab report** for a nuclear physics experiment.
7. **Viva rehearsal** — work through the viva questions with a partner.

## Core Explanation

### Theory: Dose

The absorbed dose D is the energy deposited per unit mass:

D = E / m,

with units J/kg = Gy (gray). The equivalent dose H is the absorbed dose weighted by the radiation weighting factor w_R:

H = w_R · D,

with units Sv (sievert). The effective dose E is the equivalent dose weighted by the tissue weighting factor w_T:

E = Σ w_T · H_T,

with units Sv. The effective dose is the dose equivalent that the whole body would receive if the dose were uniformly distributed.

For gamma rays and beta particles, w_R = 1, so D (in Gy) and H (in Sv) are numerically equal. For alpha particles, w_R = 20, so the equivalent dose is 20 times the absorbed dose.

For the public, the dose limit is 1 mSv/year (averaged over 5 years). For a radiation worker, the dose limit is 20 mSv/year (averaged over 5 years), with a maximum of 50 mSv in any single year. For the embryo/fetus, the dose limit is 1 mSv.

### Theory: Dose Rate from a Point Source

The dose rate from a point source of activity A at a distance r is

D = A · Γ / r²,

where Γ is the gamma-ray dose constant (in mSv·m²/(GBq·h)). For ⁶⁰Co, Γ ≈ 0.35 mSv·m²/(GBq·h). For ¹³⁷Cs, Γ ≈ 0.092 mSv·m²/(GBq·h). For ²⁴¹Am, Γ ≈ 0.0013 mSv·m²/(GBq·h) (low because ²⁴¹Am is primarily an alpha emitter, with weak gamma emission).

For a 1 GBq ⁶⁰Co source at 1 m, the dose rate is 0.35 mSv/h. At 0.1 m, the dose rate is 35 mSv/h. The annual dose limit for a radiation worker is 20 mSv; the 1 m dose rate gives 0.35 × 2000 = 700 mSv per year if the worker is at 1 m for 2000 hours per year. This is far above the limit; the worker must either be further from the source or use shielding.

### Theory: Shielding

The attenuation of gamma rays in matter is exponential: I = I_0 exp(−μ x). The required shielding thickness for a dose rate reduction factor of R is

x = ln(R) / μ,

where μ is the linear attenuation coefficient. For lead (ρ = 11.3 g/cm³) and ⁶⁰Co gamma rays (1.25 MeV average), μ ≈ 0.65 cm⁻¹. For a reduction factor of R = 10, x = ln(10) / 0.65 = 3.5 cm of lead. For R = 100, x = 7.0 cm. For R = 1000, x = 10.6 cm.

For concrete (ρ = 2.3 g/cm³), μ ≈ 0.20 cm⁻¹. For R = 10, x = 11.5 cm of concrete. For R = 100, x = 23 cm. For R = 1000, x = 34.5 cm.

### Theory: ALARA

The ALARA principle (As Low As Reasonably Achievable) requires that the dose be kept as low as practicable, taking into account the social and economic factors. The implementation of ALARA includes:
- Minimising the time of exposure.
- Maximising the distance from the source.
- Using shielding (lead, concrete, water, etc.).
- Monitoring the dose with a dosimeter.
- Contamination control (gloves, lab coat, no eating or drinking, etc.).
- Training and education.

### Theory: Contamination Control

Contamination control is the prevention of the spread of radioactive material. The procedures include:
- Wear gloves and a lab coat when handling radioactive material.
- Do not eat, drink, or smoke in the lab.
- Use a fume hood for volatile radioactive material.
- Survey the work area before and after the experiment.
- Dispose of radioactive waste in the designated containers.
- Wash hands and survey yourself before leaving the lab.

### Theory: Emergency Procedures

In case of a spill or exposure:
- Alert the radiation safety officer.
- Contain the spill (use absorbent pads, etc.).
- Survey the area and the personnel.
- Decontaminate if necessary.
- Document the incident.

### Apparatus

- Survey meter (Geiger counter or scintillation counter).
- Dosimeter (thermoluminescent dosimeter, TLD; or electronic personal dosimeter, EPD).
- Radioactive sources (⁶⁰Co, ¹³⁷Cs, ²⁴¹Am, ²²⁶Ra, ⁹⁰Sr).
- Shielding (lead bricks, lead sheets, concrete blocks).
- Contamination control supplies (gloves, lab coat, absorbent pads, waste containers).
- Lab notebook for recording doses and procedures.

### Procedure

1. **Before the lab.** Read the safety procedures; check the survey meter; put on the dosimeter.
2. **During the lab.** Wear the dosimeter at all times. Use the survey meter to check the dose rate at the work area. Use shielding as needed. Follow the contamination control procedures.
3. **After the lab.** Survey the work area. Remove the dosimeter. Record the dose in the lab notebook.
4. **Compute the dose rate** from a radioactive source at a given distance. Verify with the survey meter.
5. **Design the shielding** for a radioactive source. Verify with the survey meter.
6. **Write a complete lab report** for a nuclear physics experiment.
7. **Viva rehearsal** — work through the viva questions with a partner.

### Analysis

#### Dose Rate Calculation

For a 1 GBq ⁶⁰Co source at 1 m, the dose rate is 0.35 mSv/h (from the formula). The survey meter reads 0.36 mSv/h, in agreement.

For a 1 MBq ²⁴¹Am source at 0.1 m, the dose rate is 0.0013 × 1 × 10⁻³ × 100 / 1 = 0.00013 mSv/h, very small (because ²⁴¹Am is primarily an alpha emitter with weak gamma emission).

#### Shielding Calculation

For a 1 GBq ⁶⁰Co source, the dose rate at 1 m is 0.35 mSv/h. The annual dose limit for a radiation worker is 20 mSv. If the worker is at 1 m for 2000 h/y, the annual dose is 700 mSv — far above the limit.

To reduce the dose to 20 mSv/y, the dose rate at the work area must be 20 / 2000 = 0.01 mSv/h. The reduction factor is 0.35 / 0.01 = 35. The required lead shielding is x = ln(35) / 0.65 = 5.5 cm.

Alternatively, increase the distance. The dose rate at 10 m is 0.35 / 100 = 0.0035 mSv/h, well below the limit. The worker can be at 10 m without shielding.

### Sources of Error

- **Dose constant.** The dose constant Γ is a theoretical value. The actual dose rate depends on the source geometry, the shielding, and the scatter.
- **Shielding.** The shielding calculation assumes a broad beam. A narrow beam gives a higher attenuation.
- **Scatter.** Scattered radiation from the walls, the floor, and the ceiling can add to the dose. Use directional shielding.
- **Source geometry.** A point source gives a 1/r² dependence. A distributed source gives a different dependence.
- **Survey meter calibration.** The survey meter must be calibrated. Check with a calibration source.

## Key Ideas

- Dose: absorbed dose D (Gy), equivalent dose H (Sv), effective dose E (Sv).
- Dose rate: D = A · Γ / r² for a point source.
- Shielding: x = ln(R) / μ.
- ALARA: As Low As Reasonably Achievable.
- Contamination control: gloves, lab coat, no eating, monitoring.
- Dose limits: 20 mSv/y for a worker, 1 mSv/y for the public.

## Worked Examples

#### Example 1: Dose Rate from a ¹³⁷Cs Source

A 100 MBq ¹³⁷Cs source is used in a lab. The gamma-ray dose constant is Γ = 0.092 mSv·m²/(GBq·h). The dose rate at 0.5 m is

D = 100 × 10⁻³ GBq · 0.092 mSv·m²/(GBq·h) / (0.5)² m² = 0.0092 / 0.25 = 0.037 mSv/h.

The annual dose for a worker at 0.5 m for 100 h/y is 0.037 · 100 = 3.7 mSv, well below the limit of 20 mSv/y.

#### Example 2: Required Shielding

A 1 GBq ⁶⁰Co source must be shielded so that the dose rate at 1 m is below 0.01 mSv/h. The unshielded dose rate is 0.35 mSv/h. The reduction factor is 0.35 / 0.01 = 35.

For lead (μ = 0.65 cm⁻¹), the required thickness is x = ln(35) / 0.65 = 5.5 cm.

For concrete (μ = 0.20 cm⁻¹), the required thickness is x = ln(35) / 0.20 = 17.9 cm.

Lead is more effective per unit thickness, but more expensive. The choice depends on the application.

#### Example 3: Distance vs Shielding

A 1 GBq ⁶⁰Co source is in use. The dose limit is 0.01 mSv/h at the work area.

Without shielding, the dose rate is 0.35 mSv/h at 1 m. The dose rate is 0.01 mSv/h at 6 m (since D ∝ 1/r²: r = √(0.35/0.01) = 5.9 m).

The worker can be at 6 m without shielding (no need for lead or concrete).

If the worker must be at 1 m, the required lead shielding is 5.5 cm.

## Common Misconceptions

- **"The dose is the energy of the radiation."** No. The dose is the energy deposited per unit mass. The same radiation can give different doses depending on the exposure time, the distance, and the shielding.
- **"Alpha particles are more dangerous than gamma rays."** No. Alpha particles are more biologically effective (w_R = 20), but they have a short range (a few cm in air) and cannot penetrate the skin. Gamma rays have a long range and can penetrate the body, causing dose to internal organs.
- **"The dose limit is a safe level."** The dose limit is the maximum allowed dose, not a safe level. The ALARA principle requires the dose to be as low as practicable.
- **"Shielding eliminates the dose."** Shielding reduces the dose, not eliminates it. A factor of 10 reduction still leaves 10 % of the dose.
- **"The dosimeter measures the dose."** The dosimeter measures the dose equivalent H (in Sv), not the absorbed dose D (in Gy). For gamma rays, the two are numerically equal (w_R = 1).

## Connections

- **Nuclear Physics (Sem 6 theory).** Radiation safety is the practical application of nuclear physics. The same principles (decay constant, attenuation, dose) govern the safety procedures.
- **Medical physics.** Radiation safety is critical in medical imaging (X-ray, CT, PET) and radiation therapy (cobalt-60, linear accelerators). The principles of time, distance, and shielding are the same.
- **Nuclear industry.** Radiation safety is central to the nuclear power industry. The ALARA principle is the foundation of the safety culture.
- **Space science.** Cosmic rays are a major radiation hazard for astronauts. The dose rate in space is ~ 1 mSv/day, much higher than on Earth. Shielding is critical for long-duration missions.
- **Environmental science.** The dose from natural background radiation is ~ 2-3 mSv/y (cosmic rays, radon, internal radioactivity). The dose from medical procedures is ~ 3 mSv/y. The dose from the nuclear industry is < 0.01 mSv/y.

## Quick Check

1. What is the dose limit for a radiation worker? For the public?
2. What is the ALARA principle?
3. What is the dose rate from a 1 GBq ⁶⁰Co source at 1 m?
4. What is the required lead shielding for a factor of 10 reduction for ⁶⁰Co?
5. What is the difference between absorbed dose, equivalent dose, and effective dose?
6. What is the radiation weighting factor for alpha particles? For gamma rays?
7. What are the three principles of radiation safety?
8. What is the procedure in case of a spill?

## Takeaway

Radiation safety is the lab's primary responsibility when working with radioactive sources. The ALARA principle, the time-distance-shielding rules, the dose limits, the contamination control, and the emergency procedures are the central concepts. The lab's discipline — careful source handling, proper shielding, accurate dosimetry, honest record-keeping — is the same discipline that runs through every nuclear physics experiment. The same principles (dose rate, attenuation, ALARA) apply to all radioactive sources, from the laboratory source to the medical isotope to the natural background. The data you collect today is the raw material for the analysis that follows, and the safety procedures you follow are the foundation of the lab's safety culture.

This is the last lesson of the Nuclear Physics Lab. The report is the formal record; the viva is the test of understanding. The lab's discipline — careful source handling, accurate counting, proper data analysis, clear reporting — is the same discipline that runs through every nuclear physics experiment. The same physics (decay, attenuation, coincidence, angular correlation) governs every radioactive decay, every nuclear reaction, and every medical imaging technique that uses radioactivity. The data you collect today is the raw material for the analysis that follows.
