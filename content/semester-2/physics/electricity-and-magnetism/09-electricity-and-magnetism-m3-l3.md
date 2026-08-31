***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-2
semesterName: Semester 2
subjectId: physics
subjectName: Physics
courseId: electricity-and-magnetism
courseName: Electricity and Magnetism
moduleId: electricity-and-magnetism-module-3
moduleName: Magnetism and Induction
lessonId: electricity-and-magnetism-m3-l3
lessonName: Faraday's Law and Electromagnetic Induction
lessonNumber: 9
moduleNumber: 3
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - electricity-and-magnetism-m3-l1
  - electricity-and-magnetism-m3-l2
learningObjectives:
  - State Faraday's law of induction.
  - Explain Lenz's law and the sign of the induced EMF.
  - Compute the EMF for a moving conductor or a changing magnetic flux.
  - Describe the working of a transformer and an AC generator.
concepts:
  - Faraday's law
  - Induced EMF
  - Magnetic flux
  - Lenz's law
  - Motional EMF
  - Transformer
tags:
  - physics
  - electromagnetism
  - induction
  - faraday
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
***

# Faraday's Law and Electromagnetic Induction

## Overview
A changing magnetic field produces an electric field. This is Faraday's law, the third of the four Maxwell equations (in their static forms) and the basis of generators, transformers, and induction heating. The lesson introduces magnetic flux, states Faraday's law and Lenz's law, and shows how to compute the induced EMF in moving conductors and stationary loops. Together with Ampère's law (with Maxwell's correction), Faraday's law unifies electricity and magnetism into the electromagnetic field.

## Learning Path
- What you should already know: the Lorentz force, magnetic flux, line integrals.
- What this lesson adds: a new way to generate an EMF, and the symmetry between electric and magnetic fields.
- What it unlocks: Maxwell's displacement current, electromagnetic waves (in *Waves and Optics*), and the design of electrical machines.

## Core Explanation
**Magnetic flux.** The flux of $\vec{B}$ through a surface is

$$\Phi_B = \int_S \vec{B} \cdot d\vec{A}.$$

Units: weber (Wb), where $1\text{ Wb} = 1\text{ T·m}^2$. The flux depends on the surface; the sign depends on the choice of normal direction (right-hand rule relative to the loop orientation).

**Faraday's law of induction.** The EMF induced in a closed loop equals the negative rate of change of magnetic flux through the loop:

$$\mathcal{E} = -\frac{d\Phi_B}{dt}.$$

The minus sign is Lenz's law: the induced EMF drives a current whose magnetic field *opposes* the change in flux. If the flux is increasing, the induced current creates a field that points the opposite way; if the flux is decreasing, the induced current creates a field that reinforces it.

**Why Lenz's law?** Lenz's law is required by energy conservation. If the induced current reinforced the change, the system would gain energy without any input — a perpetual-motion machine. The opposition means you must do work to change the flux, and that work is converted to electrical energy.

**Motional EMF.** When a conductor moves through a magnetic field, the charges in the conductor experience a magnetic force $\vec{F} = q \vec{v} \times \vec{B}$, which is equivalent to an electric field $\vec{v} \times \vec{B}$ in the conductor's frame. The motional EMF is

$$\mathcal{E} = \int (\vec{v} \times \vec{B}) \cdot d\vec{l}.$$

A rod of length $L$ moving with velocity $v$ perpendicular to itself and to $\vec{B}$ has $\mathcal{E} = B L v$. This is the principle of the homopolar generator and of the rotating-armature generator.

**The AC generator.** A coil rotating in a uniform magnetic field. The flux is $\Phi_B = B A \cos\omega t$ (where $\omega$ is the angular frequency of rotation). The induced EMF is $\mathcal{E} = -\omega B A \sin\omega t = \mathcal{E}_0 \sin\omega t$, a sinusoidal AC voltage. This is the workhorse of power generation worldwide.

**Eddy currents.** In a bulk conductor moving in a magnetic field (or in a changing magnetic field), the induced currents can flow in closed loops within the material. These *eddy currents* dissipate energy as heat and are responsible for the braking force in electromagnetic brakes and the heating in induction cooktops.

**Self-inductance.** A current-carrying loop produces a magnetic flux through itself. The flux is proportional to the current: $\Phi_B = L I$, where $L$ is the self-inductance (in henries, H). A changing current induces an EMF in the loop itself: $\mathcal{E} = -L dI/dt$. This is the basis of the inductor as a circuit element, the analog of a capacitor.

**Mutual inductance.** Two nearby loops share flux. A changing current in one induces an EMF in the other: $\mathcal{E}_2 = -M dI_1/dt$, where $M$ is the mutual inductance. This is the basis of the transformer.

**The transformer.** Two coils wound on a common iron core. The primary has $N_1$ turns, the secondary $N_2$. An AC current in the primary creates a changing flux in the core; the flux is also through the secondary, inducing an EMF $\mathcal{E}_2 = (N_2/N_1) \mathcal{E}_1$. Step-up transformers increase voltage (and decrease current); step-down transformers do the opposite. Power is conserved (minus losses).

**Faraday's law in differential form.** The local form is $\nabla \times \vec{E} = -\partial \vec{B}/\partial t$. This says that a time-varying magnetic field produces a curling electric field — even in empty space with no charges present. This is the source of electromagnetic waves.

## Key Ideas
- Faraday's law: $\mathcal{E} = -d\Phi_B/dt$.
- Lenz's law: the induced current opposes the change in flux.
- Motional EMF: $\mathcal{E} = \int (\vec{v} \times \vec{B}) \cdot d\vec{l}$.
- Self-inductance: $\mathcal{E} = -L dI/dt$; mutual inductance couples two loops.
- The transformer is two coupled inductors on a shared core.

## Worked Examples
**Example 1 — AC generator.** A coil of area $0.05\text{ m}^2$ with $100$ turns rotates at $50\text{ Hz}$ in a $0.4\text{ T}$ field. Peak EMF: $\mathcal{E}_0 = N B A \omega = 100 \times 0.4 \times 0.05 \times 2\pi \times 50 \approx 628\text{ V}$. This is a typical small generator peak voltage.

**Example 2 — Motional EMF on a rod.** A $50\text{ cm}$ rod moves at $10\text{ m/s}$ perpendicular to a $0.5\text{ T}$ field. $\mathcal{E} = B L v = 0.5 \times 0.5 \times 10 = 2.5\text{ V}$.

**Example 3 — Transformer.** A step-down transformer has $N_1 = 1000$, $N_2 = 100$, primary voltage $230\text{ V}$. Secondary voltage: $V_2 = V_1 \cdot N_2/N_1 = 23\text{ V}$. If the secondary delivers $1\text{ A}$, the primary current is $V_2 I_2 / V_1 = 23/230 = 0.1\text{ A}$, consistent with power conservation.

## Common Misconceptions
- **"Faraday's law is just the Lorentz force in disguise."** Partly true for motional EMF, but Faraday's law is more general: a changing field produces an EMF even when nothing moves. The induced electric field is non-conservative and exists in empty space.
- **"The induced current flows because of the magnetic field."** It flows because of the *induced electric field* (or the motional EMF). The magnetic field itself does not push charges around a loop.
- **"Transformers work with DC."** No — transformers require *changing* flux. DC produces constant flux, hence no induced EMF in the secondary.
- **"Lenz's law is a separate principle."** Lenz's law is the sign convention in Faraday's law. The minus sign is Lenz's law.

## Connections
Faraday's law + Ampère's law (with Maxwell's correction) gives Maxwell's equations, the foundation of electromagnetic waves. The transformer is the basis of the AC power grid. Induction is the basis of electric generators, motors, induction heating, and many sensors. The same physics underlies electromagnetic induction in *Waves and Optics* (electromagnetic waves) and the betatron in *Nuclear Physics*.

## Quick Check
1. State Faraday's law and define each symbol.
2. State Lenz's law and explain why it is needed.
3. A $20\text{ cm}$ rod moves at $5\text{ m/s}$ in a $0.2\text{ T}$ field perpendicular to its motion. What is the motional EMF?
4. A coil of $200$ turns, area $0.02\text{ m}^2$, is in a field $B = 0.5 \sin(100 t)\text{ T}$. What is the induced EMF?
5. A transformer has $N_1 = 500$ and $N_2 = 1500$. If the primary is connected to $110\text{ V}$ AC, what is the secondary voltage?

## Takeaway
- Faraday's law: $\mathcal{E} = -d\Phi_B/dt$.
- Lenz's law: the induced current opposes the flux change.
- Motional EMF: $\mathcal{E} = \int (\vec{v} \times \vec{B}) \cdot d\vec{l} = BLv$ for a rod.
- Self-inductance $\mathcal{E} = -L dI/dt$; mutual inductance couples coils.
- A transformer steps voltage up or down by the turns ratio, conserving power.
