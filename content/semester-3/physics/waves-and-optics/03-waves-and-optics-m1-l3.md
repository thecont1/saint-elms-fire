***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: physics
subjectName: Physics
courseId: waves-and-optics
courseName: Waves and Optics
moduleId: waves-and-optics-module-1
moduleName: Oscillations and Waves
lessonId: waves-and-optics-m1-l3
lessonName: Superposition, Standing Waves and Beats
lessonNumber: 3
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 3
prerequisites:
  - waves-and-optics-m1-l2
learningObjectives:
  - State the superposition principle for linear waves.
  - Construct standing waves from two counter-propagating waves.
  - Identify nodes and antinodes and the allowed frequencies for a string fixed at both ends.
  - Explain the phenomenon of beats for two waves of nearby frequencies.
concepts:
  - Superposition principle
  - Standing wave
  - Node and antinode
  - Resonance frequency
  - Beats
  - Beat frequency
tags:
  - physics
  - waves
  - standing-waves
  - beats
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Superposition, Standing Waves and Beats

## Overview
The superposition principle — that two waves can be added to give their sum — is the defining property of linear waves. From it flow two of the most important phenomena in wave physics: standing waves, produced by superposition of two waves travelling in opposite directions, and beats, produced by superposition of two waves of slightly different frequencies. This lesson develops both, with applications to musical instruments, lasers, and atomic spectroscopy.

## Learning Path
- What you should already know: the wave equation, sinusoidal waves, trigonometric identities.
- What this lesson adds: how to add waves, what standing waves look like, and what beats sound like.
- What it unlocks: interference and diffraction in *Waves and Optics* Module 3, resonance in *Mechanics* and *Differential Equations*, and the operation of musical instruments and lasers.

## Core Explanation
**Superposition principle.** When two or more waves overlap in space, the resulting disturbance is the algebraic sum of the individual waves: $y_\text{total} = y_1 + y_2 + \cdots$. This is a consequence of the linearity of the wave equation. It holds for waves on strings, sound waves, water waves, and (to an excellent approximation) light waves.

**Standing waves.** Superpose a right-travelling wave $y_1 = A \cos(k x - \omega t)$ and a left-travelling wave $y_2 = A \cos(k x + \omega t)$. Using $\cos\alpha + \cos\beta = 2 \cos[(\alpha - \beta)/2] \cos[(\alpha + \beta)/2]$:

$$y = 2 A \cos(k x) \cos(\omega t).$$

This is a *standing wave*: the spatial part $\cos(k x)$ and the temporal part $\cos(\omega t)$ are *separated*. The amplitude $2 A \cos(k x)$ varies with position; it is maximum at the *antinodes* (where $\cos(k x) = \pm 1$) and zero at the *nodes* (where $\cos(k x) = 0$).

**Nodes and antinodes.** Nodes are at $k x = \pi/2, 3\pi/2, \ldots$, i.e. $x = \lambda/4, 3\lambda/4, \ldots$. Antinodes are at $k x = 0, \pi, 2\pi, \ldots$, i.e. $x = 0, \lambda/2, \lambda, \ldots$. The nodes are fixed in space (the string is always at rest there); the antinodes oscillate with maximum amplitude.

**Resonance in a string fixed at both ends.** A string of length $L$ fixed at $x = 0$ and $x = L$ supports standing waves only if both ends are nodes: $\sin(k L) = 0$, so $k L = n \pi$ for $n = 1, 2, 3, \ldots$. The allowed wavelengths are $\lambda_n = 2L/n$, and the frequencies are

$$f_n = \frac{v}{\lambda_n} = \frac{n v}{2 L}, \quad n = 1, 2, 3, \ldots$$

These are the *normal modes* of the string. The lowest ($n = 1$, $f_1 = v/(2L)$) is the *fundamental*; the others ($n \ge 2$) are *harmonics* or *overtones*. The string of a guitar or piano vibrates in a superposition of these modes, with the relative amplitudes set by how it is plucked or struck.

**Other boundary conditions.** A string fixed at one end and free at the other: $k L = (2n - 1)\pi/2$, frequencies $f_n = (2n - 1) v / (4L)$. These are the *odd* harmonics only. An organ pipe open at both ends: same as a string fixed at both ends. Closed at one end: odd harmonics only.

**Sound in a pipe.** A column of air in a pipe supports longitudinal standing waves. Open at one end: pressure node, displacement antinode. Closed at one end: pressure antinode, displacement node. The frequency formulas are the same as for the corresponding string. A flute (open at both ends) has all harmonics; a clarinet (closed at one end) has only odd harmonics — the reason for the distinctive timbre.

**Beats.** Superpose two waves of equal amplitude $A$ but slightly different frequencies $\omega_1$ and $\omega_2$:

$$y = A \cos(\omega_1 t) + A \cos(\omega_2 t) = 2 A \cos[(\omega_1 - \omega_2) t/2] \cos[(\omega_1 + \omega_2) t/2].$$

The factor $\cos[(\omega_1 - \omega_2) t/2]$ is a slowly varying envelope; the factor $\cos[(\omega_1 + \omega_2) t/2]$ is a fast oscillation. The result is a high-frequency wave whose amplitude oscillates slowly. The *beat frequency* is

$$f_\text{beat} = |f_1 - f_2|.$$

If you listen to two slightly detuned tuning forks, you hear a tone that rises and falls in intensity at the beat frequency.

**Applications of beats.** Tuning a guitar: pluck a reference pitch and the string; listen for beats. As you tune, the beats slow down; when they disappear, the pitches match. Doppler radar: the beat frequency between transmitted and reflected microwaves gives the target's speed. Heterodyne radio: beat two RF signals to produce a lower-frequency (audio) signal.

**Group velocity revisited.** A wave packet (a localised disturbance) is a superposition of many frequencies. In a dispersive medium, the packet travels at the group velocity $v_g = d\omega/dk$, while the individual wave crests travel at the phase velocity $v_p = \omega/k$. The packet can travel slower or faster than the individual crests; the crests appear, move through the packet, and disappear at the back. For a non-dispersive medium, $v_g = v_p$.

**Normal modes in 2D and 3D.** A rectangular membrane fixed at the edges supports standing waves with $k_x = n_x \pi/L_x$ and $k_y = n_y \pi/L_y$. The frequencies are $f = (v/2)\sqrt{(n_x/L_x)^2 + (n_y/L_y)^2}$. A rectangular room (in acoustics) supports similar modes; the lowest modes are often problematic for sound reproduction.

## Key Ideas
- Superposition: $y = y_1 + y_2$ for linear waves.
- Standing wave: nodes (zero amplitude) and antinodes (maximum amplitude), separated by $\lambda/4$.
- String fixed at both ends: $f_n = n v/(2L)$, $n = 1, 2, 3, \ldots$.
- Beats: $f_\text{beat} = |f_1 - f_2|$ from two waves of close frequencies.
- Group velocity: $v_g = d\omega/dk$; phase velocity: $v_p = \omega/k$.

## Worked Examples
**Example 1 — String fixed at both ends.** A guitar string has $L = 0.65\text{ m}$, $v = 400\text{ m/s}$. Fundamental: $f_1 = 400/(2 \times 0.65) \approx 308\text{ Hz}$. Harmonics: $616, 924, 1232\text{ Hz}$, etc. Open A string is $440\text{ Hz}$ — this string is closer to a G.

**Example 2 — Beats.** Two tuning forks at $440\text{ Hz}$ and $442\text{ Hz}$. Beat frequency: $2\text{ Hz}$. You hear two beats per second.

**Example 3 — Pipe closed at one end.** A $0.5\text{ m}$ pipe closed at one end, with $v = 343\text{ m/s}$. Allowed frequencies: $f_n = (2n - 1) \times 343/(4 \times 0.5) = (2n - 1) \times 171.5\text{ Hz}$. $n = 1$: $171.5\text{ Hz}$. $n = 2$: $514.5\text{ Hz}$.

## Common Misconceptions
- **"Standing waves don't move."** They do — the antinodes oscillate, but the nodes are fixed. The wave *pattern* is stationary; the *medium* is not.
- **"All harmonics are present in every instrument."** No — fixed–fixed strings have all harmonics; closed pipes have only odd ones. The harmonic content is what gives an instrument its timbre.
- **"Beats produce a new frequency."** No — the average frequency is $(\omega_1 + \omega_2)/2$; the new frequency is the slow envelope, not a tone.
- **"Phase velocity is the speed of energy."** No — the group velocity is. In a non-dispersive medium, they coincide.

## Connections
Standing waves are the basis of *musical acoustics* (the timbre of instruments) and of *laser cavities* (the optical modes that determine the laser's frequency). Beats are used in *tuning*, *Doppler radar*, and *heterodyne detection*. The dispersion relation $\omega(k)$ is the basis of the *Fourier transform* and the uncertainty principle in *Quantum Mechanics*. The mode counting in 3D leads to blackbody radiation and the *Rayleigh–Jeans* and *Planck* laws in *Introduction to Quantum Mechanics*.

## Quick Check
1. State the superposition principle.
2. Find the frequencies of the first three modes of a string of length $1\text{ m}$ with $v = 200\text{ m/s}$ fixed at both ends.
3. Two waves at $400\text{ Hz}$ and $405\text{ Hz}$ superpose. What is the beat frequency?
4. Why does a closed pipe have only odd harmonics?
5. State the difference between phase and group velocity.

## Takeaway
- Superposition: $y = y_1 + y_2$ for linear waves.
- Standing wave: $y = 2 A \cos(k x) \cos(\omega t)$, with nodes and antinodes.
- String fixed at both ends: $f_n = n v/(2L)$, $n = 1, 2, 3, \ldots$.
- Beats: $f_\text{beat} = |f_1 - f_2|$ from close frequencies.
- Group velocity: $v_g = d\omega/dk$; phase velocity: $v_p = \omega/k$.
