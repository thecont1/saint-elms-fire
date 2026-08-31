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
lessonId: waves-and-optics-m1-l2
lessonName: Wave Motion and the Wave Equation
lessonNumber: 2
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 2
prerequisites:
  - waves-and-optics-m1-l1
  - differential-equations-m2-l1
learningObjectives:
  - Derive the one-dimensional wave equation for a stretched string.
  - State its general solution and identify the travelling and standing wave forms.
  - Define wave speed, frequency, wavelength, and wavenumber and relate them.
  - Recognise transverse and longitudinal waves and their physical examples.
concepts:
  - Wave equation
  - Transverse wave
  - Longitudinal wave
  - Wavelength and wavenumber
  - Travelling wave
  - Phase velocity
tags:
  - physics
  - waves
  - wave-equation
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Wave Motion and the Wave Equation

## Overview
A wave is a disturbance that propagates through space, transporting energy without transporting matter. The simplest wave equation is the one-dimensional equation for a stretched string, but the same structure appears in sound, water, light, and quantum-mechanical wavefunctions. This lesson derives the wave equation, identifies the travelling-wave and standing-wave solutions, and establishes the basic vocabulary of wave physics.

## Learning Path
- What you should already know: Newton's second law, the SHM equation, partial derivatives.
- What this lesson adds: a derivation of the wave equation, the meaning of wave speed, and the travelling-wave solution.
- What it unlocks: standing waves and resonance, interference and diffraction, the electromagnetic wave equation, and the Schrödinger equation.

## Core Explanation
**The wave equation in 1D.** Consider a stretched string with linear mass density $\mu$ under tension $T$. A small transverse displacement $y(x, t)$ obeys (after Newton's second law applied to a small element):

$$\frac{\partial^2 y}{\partial t^2} = v^2 \frac{\partial^2 y}{\partial x^2},$$

where the wave speed is $v = \sqrt{T/\mu}$. This is the *one-dimensional wave equation*.

**The general solution.** Any function of the form

$$y(x, t) = f(x - v t) + g(x + v t)$$

solves the wave equation, where $f$ and $g$ are arbitrary twice-differentiable functions. $f(x - v t)$ is a wave travelling in the $+x$ direction; $g(x + v t)$ is a wave travelling in the $-x$ direction. The argument $x \pm v t$ is called the *phase*.

**Verification.** Let $\xi = x - vt$, $\eta = x + vt$. Then $\partial f/\partial x = f'$, $\partial f/\partial t = -v f'$. $\partial^2 f/\partial t^2 = v^2 f'' = v^2 \partial^2 f/\partial x^2$. ✓ Same for $g$ (with a sign flip in the time derivative that cancels with the sign flip in the spatial derivative).

**Sinusoidal travelling wave.** A special case: $y(x, t) = A \cos(k x - \omega t + \phi)$, where $k$ is the *wave number* ($k = 2\pi/\lambda$), $\omega$ is the angular frequency, and $\phi$ is a phase. The wave speed is $v = \omega/k$. The wavelength $\lambda$ is the distance between successive crests; the period $T = 2\pi/\omega$ is the time between crests at a fixed point.

**Wave terminology.**
- $A$: amplitude.
- $\omega = 2\pi f$: angular frequency, where $f$ is the frequency in Hz.
- $k = 2\pi/\lambda$: wavenumber.
- $v = \lambda f = \omega/k$: phase velocity.
- $k x - \omega t + \phi$: phase.

**Longitudinal vs. transverse.** A *transverse* wave has displacement perpendicular to the propagation direction (waves on a string, light, water waves). A *longitudinal* wave has displacement parallel to propagation (sound, spring compression). Both obey the same wave equation.

**The wave equation in 3D.** $\nabla^2 y = (1/v^2) \partial^2 y/\partial t^2$. In Cartesian coordinates, $\nabla^2 y = \partial^2 y/\partial x^2 + \partial^2 y/\partial y^2 + \partial^2 y/\partial z^2$. The 3D plane wave is $y(\vec{r}, t) = A e^{i(\vec{k} \cdot \vec{r} - \omega t)}$, where $\vec{k}$ is the wave vector with $|\vec{k}| = \omega/v$.

**Spherical waves.** For a point source radiating isotropically, the wavefronts are spheres and the amplitude falls as $1/r$: $y(r, t) = (A/r) e^{i(k r - \omega t)}$. The $1/r$ factor is required by energy conservation (the energy flux through each sphere is the same).

**Cylindrical waves.** For a line source, $y \propto 1/\sqrt{r}$.

**Phase and group velocity.** For a *non-dispersive* medium (where $v$ is independent of $\omega$), the wave shape is preserved as it propagates. For a *dispersive* medium, different frequencies travel at different speeds, and a wave packet spreads. The *phase velocity* is $v_p = \omega/k$; the *group velocity* is $v_g = d\omega/dk$. In a non-dispersive medium, $v_p = v_g$. In a dispersive medium, they differ.

**Energy in a wave.** The energy per unit length of a stretched string is $\mu \omega^2 A^2/2$ (sum of kinetic and potential, time-averaged). The power transmitted is $P = \mu \omega^2 A^2 v / 2$, the energy per unit length times the wave speed. The intensity (power per unit area) is similarly proportional to $A^2$.

**Boundary conditions.** Real waves have boundaries that reflect, transmit, or absorb. A string fixed at one end has $y = 0$ there; a string free at one end has $\partial y/\partial x = 0$ there. These boundary conditions restrict the allowed modes (next module).

**The wave equation from a chain of coupled oscillators.** A row of masses $m$ connected by springs of constant $k$ and equilibrium spacing $a$ is a discrete model of a string. The continuum limit ($a \to 0$, with $\mu = m/a$ and $Y = k a$ fixed) gives the wave equation with $v = \sqrt{Y/\mu} = a\sqrt{k/m}$. This is the prototype for understanding phonons in *Solid State Physics* and the dispersion relation in *Waves and Optics*.

## Key Ideas
- 1D wave equation: $\partial^2 y/\partial t^2 = v^2 \partial^2 y/\partial x^2$.
- General solution: $y = f(x - vt) + g(x + vt)$ (right + left travelling).
- Sinusoidal: $y = A \cos(k x - \omega t + \phi)$, $v = \omega/k$, $k = 2\pi/\lambda$.
- Transverse: displacement ⊥ propagation; longitudinal: displacement ∥ propagation.
- Intensity $\propto A^2$ for waves.

## Worked Examples
**Example 1 — Wave on a string.** A string of linear density $\mu = 0.5\text{ g/m}$ is under tension $T = 50\text{ N}$. Wave speed: $v = \sqrt{T/\mu} = \sqrt{50/0.5 \times 10^{-3}} = \sqrt{10^5} \approx 316\text{ m/s}$.

**Example 2 — Frequency of a sound wave.** Sound in air at $20°\text{C}$ has $v \approx 343\text{ m/s}$. Middle C is $f = 261.6\text{ Hz}$. Wavelength: $\lambda = v/f = 343/261.6 \approx 1.31\text{ m}$.

**Example 3 — Energy transmitted.** A wave with $A = 0.01\text{ m}$, $\omega = 100\text{ rad/s}$, $\mu = 0.001\text{ kg/m}$, $v = 300\text{ m/s}$. Power: $P = \mu \omega^2 A^2 v/2 = 0.001 \times 10^4 \times 10^{-4} \times 300/2 = 0.15\text{ W}$.

## Common Misconceptions
- **"Waves transport matter."** No — they transport energy and momentum, not matter. A wave on a string: the string segments oscillate but do not travel with the wave.
- **"Higher frequency means faster wave."** No — wave speed is determined by the medium (for mechanical waves) or by the wave equation. Higher frequency means shorter wavelength, not higher speed (in a non-dispersive medium).
- **"The wave equation is unique to strings."** No — it applies to sound, water waves, light, and (with a different coefficient) quantum-mechanical wavefunctions.
- **"Energy is constant along a wave."** The total energy is, but the local energy density oscillates between kinetic and potential.

## Connections
The wave equation is the foundation of *Waves and Optics* and reappears throughout physics. Light obeys the same wave equation with $v = c$. Sound in air, water, and solids obeys the wave equation. The Schrödinger equation in *Quantum Mechanics* is a wave equation with an imaginary unit. The same mathematics describes water waves, seismic waves, and ocean waves.

## Quick Check
1. State the 1D wave equation and identify the wave speed for a string.
2. State the general solution of the 1D wave equation.
3. A wave has frequency $440\text{ Hz}$ and wavelength $0.78\text{ m}$. Find the speed.
4. What is the difference between a transverse and a longitudinal wave? Give an example of each.
5. State the relation between intensity and amplitude for a wave.

## Takeaway
- 1D wave equation: $\partial^2 y/\partial t^2 = v^2 \partial^2 y/\partial x^2$.
- General solution: $f(x - vt) + g(x + vt)$.
- Sinusoidal: $A \cos(k x - \omega t + \phi)$, $v = \omega/k$, $k = 2\pi/\lambda$.
- Transverse vs. longitudinal depends on displacement direction.
- Intensity $\propto A^2$ for waves.
