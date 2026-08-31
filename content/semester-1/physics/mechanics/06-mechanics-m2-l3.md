***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: mechanics
courseName: Mechanics
moduleId: mechanics-module-2
moduleName: Kinematics and Dynamics
lessonId: mechanics-m2-l3
lessonName: Non-inertial Frames and Pseudo Forces
lessonNumber: 6
moduleNumber: 2
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 6
prerequisites:
  - mechanics-m2-l2
  - mechanics-m1-l1
learningObjectives:
  - Identify an inertial and a non-inertial reference frame.
  - Write Newton's second law in a non-inertial frame using pseudo forces.
  - Solve simple problems in linearly and rotating non-inertial frames.
  - Recognise the Coriolis and centrifugal pseudo forces and when each matters.
concepts:
  - Non-inertial frame
  - Pseudo force
  - Centrifugal force
  - Coriolis force
  - Linearly accelerating frame
  - Rotating reference frame
tags:
  - physics
  - mechanics
  - reference-frames
  - pseudo-force
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
***

# Non-inertial Frames and Pseudo Forces

## Overview
Most of the time we solve mechanics problems from the ground. The ground is not exactly inertial — the Earth rotates and orbits the Sun — but for everyday problems the approximation is good. There are cases where the non-inertial nature of a frame matters, from a lift accelerating upward to the path of a long-range artillery shell on a rotating Earth. This lesson gives you the rule for handling non-inertial frames: include a pseudo force for each acceleration of the frame.

## Learning Path
- What you should already know: Newton's second law, inertial frames, uniform circular motion, vectors.
- What this lesson adds: how to apply $\vec{F} = m \vec{a}$ in an accelerating or rotating frame using pseudo forces.
- What it unlocks: the Coriolis-deflected weather and ocean currents, apparent weight in lifts, rotating machinery, and the foundations of inertial navigation.

## Core Explanation
A **non-inertial reference frame** is one that is accelerating (translational acceleration) or rotating relative to an inertial frame. Newton's second law in its bare form $\vec{F} = m \vec{a}$ does not hold in such a frame, because the frame itself is changing the way it measures acceleration.

The fix is to add **pseudo forces** (sometimes called inertial forces) that depend on the frame's motion. In a frame that is accelerating with $\vec{a}_{\text{frame}}$ relative to an inertial frame, the effective equation of motion for a body is

$$m \vec{a}_{\text{body, frame}} = \vec{F}_{\text{real}} - m \vec{a}_{\text{frame}}.$$

The term $-m \vec{a}_{\text{frame}}$ is the pseudo force. It has no physical source — it is an artefact of using an accelerated coordinate system. The "real" forces on the body (gravity, tension, normal, friction, electric, magnetic) are unchanged.

**Linearly accelerating frame.** Consider a lift accelerating upward at $a$. A passenger of mass $m$ inside feels heavier. In the lift frame, the passenger is at rest, so the net "force" must be zero. Gravity pulls down with $m g$; the floor pushes up with the normal $N$. For zero net: $N - m g - m a = 0$ (the $-m a$ is the pseudo force, downward in the lift frame when $a$ is upward). Hence $N = m(g + a)$. This is the apparent weight.

**Rotating frame.** For a frame rotating with angular velocity $\vec{\omega}$ relative to an inertial frame, the acceleration of a body has three contributions: the real acceleration in the inertial frame, a **centrifugal** pseudo acceleration $\vec{\omega} \times (\vec{\omega} \times \vec{r})$ pointing outward from the rotation axis, and a **Coriolis** pseudo acceleration $2 \vec{v}_{\text{body, frame}} \times \vec{\omega}$ that depends on the body's velocity in the rotating frame. The Euler term (for $\vec{\omega}$ changing with time) is the third piece but is zero for steady rotation.

The full equation in the rotating frame is

$$m \vec{a}_{\text{body, rot}} = \vec{F}_{\text{real}} - m \vec{\omega} \times (\vec{\omega} \times \vec{r}) - 2 m \vec{\omega} \times \vec{v}_{\text{body, rot}} - m \dot{\vec{\omega}} \times \vec{r}.$$

**Earth as a rotating frame.** The Earth rotates with $\omega \approx 7.29 \times 10^{-5}\text{ rad/s}$. The centrifugal pseudo force slightly reduces effective gravity at the equator, and the Coriolis force deflects moving bodies — to the right in the Northern Hemisphere, to the left in the Southern. This is why trade winds and ocean gyres have the patterns they do.

**Fictitious does not mean "imaginary" in a useless sense.** Pseudo forces have real, measurable consequences. A scale in an accelerating lift reads a different weight; artillery shells deviate from parabolic trajectories over long ranges; the shape of the Earth itself is an equilibrium between gravity and centrifugal pseudo force (the planet is an oblate spheroid).

## Key Ideas
- An inertial frame has zero acceleration; Newton's laws hold in the form $\vec{F} = m\vec{a}$.
- A non-inertial frame requires pseudo forces: $-m \vec{a}_{\text{frame}}$ for linear acceleration.
- For a rotating frame: centrifugal $m \omega^2 r$ outward, Coriolis $2 m \vec{v} \times \vec{\omega}$.
- Pseudo forces have no source; they are artefacts of the accelerating coordinate system.
- Yet they are physically observable through weight measurements, deflection, and equilibrium shape.

## Worked Examples
**Example 1 — Apparent weight in a lift.** A $70\text{ kg}$ person stands on a scale in a lift accelerating upward at $2\text{ m/s}^2$. What does the scale read?
In the lift frame, the pseudo force is $m a$ downward. Net effective force: $N - m g - m a = 0 \Rightarrow N = m(g + a) = 70 \times 11.8 = 826\text{ N}$. The scale reads $\approx 84.3\text{ kg}$ equivalent (dividing by $g$).

**Example 2 — Coriolis deflection on Earth.** A projectile is fired horizontally due north at $v = 500\text{ m/s}$ from latitude $45°\text{ N}$. Estimate the Coriolis deflection during $10\text{ s}$ of flight.
The Coriolis acceleration is $2 \vec{v} \times \vec{\omega}$. At $45°\text{ N}$, $\vec{\omega}$ is vertical to the local north, so the cross product with northward $\vec{v}$ gives a horizontal eastward acceleration of magnitude $2 v \omega \sin 45° = 2 \times 500 \times 7.29 \times 10^{-5} \times 0.707 \approx 0.0516\text{ m/s}^2$. Over $10\text{ s}$, the eastward displacement is $\tfrac{1}{2} a t^2 \approx 0.5 \times 0.0516 \times 100 \approx 2.6\text{ m}$ east.

## Common Misconceptions
- **"Pseudo forces are not real, so they don't matter."** They are not forces in the Newtonian sense (no agent exerts them), but they have real, measurable consequences: scale readings, drift, planetary shape.
- **"Centrifugal force points away from the centre in the inertial frame too."** No. In the inertial frame, the net *real* force on a body moving in a circle points *toward* the centre. Centrifugal is a pseudo force that appears only in the rotating frame.
- **"The Coriolis force only affects very fast things."** It affects everything in motion, but for slow motion or short time scales, the displacement is negligible. Weather systems have hours; the effect is enormous.
- **"The Earth is inertial enough."** For pendulum clocks, artillery, gyroscopes, and weather prediction, the Earth's rotation matters. For a brick falling off a table, it does not.

## Connections
Non-inertial frames are the gateway to general relativity: Einstein's insight was that gravity and pseudo acceleration are locally indistinguishable, which is why the same geometric language describes both. In *Astrophysics II*, the rotating frame is implicit when we describe the Coriolis-stabilised cloud bands of Jupiter. In *Waves and Optics* (Sem 3), the same Coriolis principle affects the propagation of inertial waves in rotating fluids.

## Quick Check
1. A ball hangs from the ceiling of a train accelerating at $1.5\text{ m/s}^2$ to the right. In the train frame, which way does the string tilt? Why?
2. A person stands on a scale in a stationary lift. The scale reads $686\text{ N}$. The lift now descends with acceleration $a$ downward. Will the scale reading increase, decrease, or stay the same?
3. Why is the Coriolis force zero at the equator and maximum at the poles?
4. The Earth is an oblate spheroid (equatorial radius greater than polar). Which pseudo force is mainly responsible for this shape?
5. In the inertial frame, a stone attached to a string whirled in a horizontal circle feels an inward force. What is the corresponding description in the rotating frame of the stone?

## Takeaway
- Newton's second law holds in inertial frames without modification.
- In non-inertial frames, add pseudo forces: $-m \vec{a}_{\text{frame}}$ for translation, $-m \vec{\omega} \times (\vec{\omega} \times \vec{r}) - 2 m \vec{\omega} \times \vec{v}$ for rotation.
- Pseudo forces are diagnostic tools — they tell you which frame you are in.
- The Earth's rotation produces small but important centrifugal and Coriolis effects.
- The distinction between inertial and non-inertial frames is a deep principle reused in electromagnetism and relativity.
