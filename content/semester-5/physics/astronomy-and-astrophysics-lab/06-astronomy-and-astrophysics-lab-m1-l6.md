***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: astronomy-and-astrophysics-lab
courseName: Astronomy and Astrophysics Lab (Option A)
moduleId: astronomy-and-astrophysics-lab-module-1
moduleName: Observational Techniques, Photometry, and Data Reduction
lessonId: astronomy-and-astrophysics-lab-m1-l6
lessonName: Mini Research Project, Report Writing, and the Viva
lessonNumber: 6
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - astronomy-and-astrophysics-lab-m1-l5
learningObjectives:
  - Design and execute a small astronomical observing project: choose a target, plan the observations, take the data, reduce and analyse it, and write a report.
  - Apply the techniques from L1-L5: telescope/CCD imaging, photometry, calibration, spectroscopy, catalog queries.
  - Write a research-style report that includes a literature review, observations, data reduction, analysis, and conclusions.
  - Anticipate and answer viva-style questions about the project.
concepts:
  - Research project design
  - Target selection
  - Observation planning
  - Data reduction pipeline
  - Literature review
  - Research-style report
  - Viva preparation
tags:
  - physics
  - laboratory
  - astronomy
  - research-project
  - report-writing
  - viva
sourceType: authored-courseware
assessmentHints:
  - Choose a target that is observable in the available time and from the available site.
  - Plan the observations to maximise the SNR and to include calibration data.
  - The report should be self-contained: a reader should be able to understand the project without external references.
  - The viva should test the student's understanding of the project, the observations, and the analysis.
status: in-review
***

# Mini Research Project, Report Writing, and the Viva

## Overview

This lesson is the capstone of the Astronomy and Astrophysics Lab. The student designs and executes a small astronomical observing project, using the techniques from L1-L5. The project can be observational (taking new data) or archival (using existing data from a public archive). The deliverable is a research-style report and a viva.

The project is an opportunity to integrate the techniques learned in the lab and to demonstrate the ability to design, execute, and report a scientific investigation. The project should be small enough to be completed in the available time but substantial enough to require a real research effort.

## Learning Path

1. **Choose a target and a project.** Possible projects include:
   - Photometric monitoring of a variable star (e.g. a Cepheid, an eclipsing binary, a transiting exoplanet).
   - Photometric measurement of a standard star field (calibration of the photometric system).
   - Spectroscopic measurement of a bright star (radial velocity, spectral classification).
   - Astrometric measurement of a star cluster (proper motion, parallax).
   - Light curve of a supernova or a nova.
   - Search for variability in a field of stars.
2. **Plan the observations.** Determine the optimal time, the required exposure, the filter set, the comparison stars. Verify the target is observable from the site.
3. **Take the data.** Acquire the science images and the calibration frames (bias, dark, flat).
4. **Reduce the data.** Apply the calibration pipeline; extract the photometry or the spectra.
5. **Analyse the data.** Fit the model to the data; compute the parameters with uncertainties.
6. **Write a report.** Use the research-style structure: title, abstract, introduction, observations, data reduction, analysis, results, discussion, conclusions, references.
7. **Viva rehearsal.** Prepare for the viva; review the project, the observations, the analysis, and the conclusions.

## Core Explanation

### Project Design

A good project has the following characteristics:
- **Clear scientific goal.** What question are you trying to answer? What measurement will answer it?
- **Observable target.** The target must be observable from the site at the time of the project. Use the observatory's visibility tool (e.g. Stellarium) to check.
- **Feasible precision.** The required precision must be achievable with the available telescope and detector. Estimate the SNR and the uncertainty before taking data.
- **Comparison with literature.** Compare the result with the literature; if the result is new, explain why it is interesting.

### Project Categories

#### Photometric Monitoring of a Variable Star

A bright variable star (e.g. δ Cephei, with V = 3.5-4.4, period 5.4 d) is monitored over several nights. The observations are calibrated with standard stars in the same field. The light curve is fitted with a model (e.g. a Fourier series for a Cepheid, a cosine for an eclipsing binary). The period, the amplitude, and the phase are measured.

#### Photometric Calibration of a Standard Field

A standard star field (e.g. SA 92, SA 95) is observed in the B, V, R, I filters. The photometric zero point and the extinction coefficient are determined. The result is compared with the catalog values.

#### Spectroscopic Measurement of a Bright Star

A bright star (e.g. Vega, Arcturus) is observed with the slit spectrograph. The spectrum is reduced, the wavelength is calibrated, and the radial velocity is measured. The spectral type is determined by comparison with a spectral library.

#### Astrometric Measurement of a Star Cluster

A star cluster (e.g. the Pleiades, the Hyades) is observed with the CCD. The positions of the stars are measured. The proper motion and the parallax are obtained from the Gaia catalog. The distance and the age of the cluster are estimated.

### Observation Planning

The observation plan specifies:
- **Target**: name, coordinates (RA, Dec), magnitude, spectral type.
- **Telescope and instrument**: aperture, focal length, CCD, filter set.
- **Date and time**: the time of the observation; the airmass.
- **Exposure time**: the exposure for each image, sufficient for the required SNR.
- **Calibration**: bias, dark, flat field, standard stars.

The plan should include a backup plan in case the weather is bad or the target is not observable.

### Data Reduction

The data reduction follows the pipeline from L3 (calibration) and L2 (photometry) or L4 (spectroscopy):
- Bias subtraction.
- Dark subtraction.
- Flat field division.
- Source extraction (for photometry) or spectrum extraction (for spectroscopy).
- Wavelength calibration (for spectroscopy).
- Photometric calibration (for photometry).

### Analysis

The analysis depends on the project:
- For a variable star: fit the light curve, measure the period and the amplitude.
- For a standard field: measure the photometric zero point and the extinction coefficient.
- For a spectroscopic measurement: measure the radial velocity and the spectral type.
- For an astrometric measurement: measure the proper motion and the parallax, estimate the distance.

The uncertainty in the measurement is computed from the SNR, the calibration uncertainty, and any systematic effects.

### Report

The report follows the research-style structure:

#### Title

A descriptive title that includes the target, the observation, and the result.

#### Abstract

A 100-200 word summary of the project: the goal, the method, the result, and the conclusion.

#### Introduction

A 1-2 page review of the relevant literature: what is known about the target, what question is being addressed, why is it interesting.

#### Observations

A description of the observations: the target, the telescope, the instrument, the date, the exposure, the conditions.

#### Data Reduction

A description of the data reduction: the calibration pipeline, the source extraction, the photometric or spectroscopic calibration.

#### Analysis

A description of the analysis: the model, the fit, the parameters, the uncertainties.

#### Results

A summary of the results: the measured values, the comparison with the literature.

#### Discussion

A discussion of the results: what they mean, how they compare with the literature, what the limitations are, what could be improved.

#### Conclusions

A 1-2 paragraph summary of the main conclusions.

#### References

A list of the references cited in the report, in a standard format (e.g. AAS, APS, or journal-specific).

### Viva

The viva is a 15-30 minute oral examination. The examiner asks questions about:
- The target: what is it, why is it interesting, what is known about it.
- The observations: how were they taken, what were the conditions, what was the SNR.
- The data reduction: what was the pipeline, what were the calibration frames, what were the systematic effects.
- The analysis: what model was used, how was it fit, what were the uncertainties.
- The results: what was measured, how does it compare with the literature, what are the implications.
- The conclusions: what was learned, what could be done better, what would be the next step.

The student should be able to answer these questions without referring to the report. The viva tests the understanding, not the memory.

## Key Ideas

- Project design: clear goal, observable target, feasible precision, comparison with literature.
- Observation planning: target, instrument, date, exposure, calibration.
- Data reduction: calibration pipeline, source extraction, photometric or spectroscopic calibration.
- Analysis: model, fit, parameters, uncertainties.
- Report: title, abstract, introduction, observations, data reduction, analysis, results, discussion, conclusions, references.
- Viva: oral examination that tests understanding.

## Common Misconceptions

- **"The project is just a routine observation."** A good project is a research-style investigation with a clear question, a careful method, and a thoughtful analysis. Routine observations do not teach research skills.
- **"The data will speak for themselves."** Data must be interpreted in the context of a model and a literature. Without interpretation, the data are just numbers.
- **"The report is a record of what was done."** The report is a scientific document that presents the question, the method, the results, and the conclusions. It should be self-contained and readable.
- **"The viva is a test of memory."** The viva is a test of understanding. The student should be able to explain the project, the observations, the analysis, and the conclusions in their own words.
- **"A small project is less valuable than a large project."** A small, well-executed project is more valuable than a large, poorly-executed project. The discipline of doing a small project well is the foundation of doing a large project well.

## Connections

- **Astronomy and Astrophysics (Sem 5/6 theory).** The mini research project is the closest a B.Sc. student can get to the actual research process. The techniques learned here are the same as those used in professional research.
- **Scientific method.** The project demonstrates the scientific method: observation, hypothesis, experiment, analysis, conclusion. The report is a formal record of the process.
- **Data science.** The data reduction and analysis use the same tools (Python, astroquery, TOPCAT) as the professional astronomer. The skills learned here are directly transferable.
- **Communication.** The report and the viva develop scientific communication skills: writing clearly, presenting data, defending conclusions. These skills are essential in any scientific career.
- **Career preparation.** The project is a sample of the kind of work that a researcher does. It demonstrates the ability to design and execute a scientific investigation, which is the core skill of any research career.

## Quick Check

1. What are the four characteristics of a good project?
2. What is the structure of a research-style report?
3. What is the difference between the report and the viva?
4. What is the role of the literature review in the introduction?
5. What is the role of the discussion section?
6. How do you estimate the required exposure time for a photometric observation?
7. What is a backup plan, and why is it important?
8. How do you compute the uncertainty in a measured quantity?

## Takeaway

The mini research project is the capstone of the Astronomy and Astrophysics Lab. It is an opportunity to integrate the techniques learned in L1-L5 and to demonstrate the ability to design, execute, and report a scientific investigation. The lab's discipline — careful planning, accurate observations, honest analysis, clear reporting — is the same discipline that runs through every scientific research project. The report is the formal record; the viva is the test of understanding. The project is a sample of the work that a professional astronomer does; the skills learned here are directly transferable to a research career.
