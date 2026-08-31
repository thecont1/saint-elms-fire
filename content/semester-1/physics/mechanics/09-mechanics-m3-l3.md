***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: mechanics
courseName: Mechanics
moduleId: mechanics-module-3
moduleName: Work, Energy and Rotation
lessonId: mechanics-m3-l3
lessonName: Rigid Body Rotation and Moment of Inertia
lessonNumber: 9
moduleNumber: 3
semesterNumber: 1
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - mechanics-m2-l2
  - mechanics-m3-l1
learningObjectives:
  - Define angular position, velocity, and acceleration for rigid body rotation.
  - Define moment of inertia and compute it for simple shapes.
  - Apply Newton's second law for rotation, $\tau = I \alpha$.
  - Relate rotational and translational kinetic energy for rolling motion.
concepts:
  - Angular kinematics
  - Torque
  - Moment of inertia
  - Rotational kinetic energy
  - Parallel axis theorem
  - Rolling without slipping
tags:
  - physics
  - mechanics
  - rotation
  - rigid-body
sourceType: authored-courseware
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
***

# Rigid Body Rotation and Moment of Inertia

## Overview
Up to this point we have treated bodies as point particles. Real objects have size, and when they rotate, different parts of them move with different speeds. The right scalar quantity to characterise a body's resistance to rotation is the **moment of inertia**. This lesson builds rotational kinematics, defines torque, derives the rotational form of Newton's second law, and shows how to compute the moment of inertia of common shapes.

## Learning Path
- What you should already know: 1D kinematics, work and kinetic energy, basic integration in 1D.
- What this lesson adds: a parallel set of tools for rotation, plus the moment-of-inertia integrals.
- What it unlocks: angular momentum, gyroscopes, satellite attitude, and most of *Solid State Physics* (lattice vibrations).

## Core Explanation
**Angular kinematics.** For a rigid body rotating about a fixed axis, every point traces a circle. Define the angular position $\theta(t)$ in radians, the angular velocity $\omega = d\theta/dt$, and the angular acceleration $\alpha = d\omega/dt$. The relations among them are exactly analogous to the 1D kinematics:

$$\omega = \omega_0 + \alpha t, \qquad \theta = \theta_0 + \omega_0 t + \tfrac{1}{2} \alpha t^2, \qquad \omega^2 = \omega_0^2 + 2 \alpha (\theta - \theta_0).$$

A point at distance $r$ from the axis has linear speed $v = r \omega$ and tangential acceleration $a_t = r \alpha$, plus a centripetal acceleration $a_c = r \omega^2$ toward the axis.

**Torque.** Torque is the rotational analogue of force. For a force $\vec{F}$ applied at position $\vec{r}$ relative to the axis,

$$\vec{\tau} = \vec{r} \times \vec{F},$$

with magnitude $\tau = r F \sin\phi$ where $\phi$ is the angle between $\vec{r}$ and $\vec{F}$. Torque is measured in N·m. Only the component of $\vec{F}$ perpendicular to $\vec{r}$ contributes to the torque about the axis.

**Moment of inertia.** For a collection of point masses, define the moment of inertia about an axis as

$$I = \sum_i m_i r_i^2,$$

where $r_i$ is the perpendicular distance from mass $m_i$ to the axis. For a continuous body, replace the sum with an integral over the body's volume:

$$I = \int r^2\, dm = \int r^2 \rho\, dV.$$

The moment of inertia depends on the body's mass distribution *and* on the chosen axis. Same body, different axis → different $I$.

**Newton's second law for rotation.** For a rigid body rotating about a fixed axis, the net torque equals the moment of inertia times the angular acceleration:

$$\tau_{\text{net}} = I \alpha.$$

This is the rotational analogue of $F = m a$. It is a scalar equation about the chosen axis.

**Rotational kinetic energy.** Each mass element of a rotating body has kinetic energy $\tfrac{1}{2} m_i v_i^2 = \tfrac{1}{2} m_i r_i^2 \omega^2$. Summing gives the rotational kinetic energy:

$$K_{\text{rot}} = \tfrac{1}{2} I \omega^2.$$

Compare to $K_{\text{trans}} = \tfrac{1}{2} m v^2$: replace $m \to I$ and $v \to \omega$.

**Parallel axis theorem.** If $I_{\text{cm}}$ is the moment of inertia about an axis through the centre of mass, then the moment of inertia about a parallel axis at distance $d$ is

$$I = I_{\text{cm}} + m d^2.$$

**Perpendicular axis theorem** (for planar laminas only): $I_z = I_x + I_y$ where the $x, y$ axes lie in the plane and the $z$ axis is perpendicular.

**Rolling without slipping.** A wheel of radius $R$ rolling without slipping has $v_{\text{cm}} = R \omega$. Its total kinetic energy is the sum of translation and rotation: $K = \tfrac{1}{2} m v^2 + \tfrac{1}{2} I \omega^2$. For a solid cylinder, $I = \tfrac{1}{2} m R^2$, so $K = \tfrac{3}{4} m v^2$.

## Key Ideas
- Angular quantities $\theta, \omega, \alpha$ are connected by the same formulas as linear kinematics, with $r$ as the conversion factor.
- Torque is the rotational analogue of force: $\vec{\tau} = \vec{r} \times \vec{F}$.
- Moment of inertia $I$ is the rotational analogue of mass: $I = \int r^2\, dm$.
- Newton's second law for rotation: $\tau_{\text{net}} = I \alpha$.
- Rotational kinetic energy: $K = \tfrac{1}{2} I \omega^2$.
- Parallel axis theorem: $I = I_{\text{cm}} + m d^2$.

## Worked Examples
**Example 1 — Falling mass on a pulley.** A solid cylinder of mass $m$ and radius $R$ is a pulley. A string wrapped around it supports a hanging mass $m_h$. Find the acceleration of the hanging mass.
The moment of inertia of a solid cylinder is $I = \tfrac{1}{2} m R^2$. For the hanging mass: $m_h g - T = m_h a$. For the pulley: $\tau = T R = I \alpha = \tfrac{1}{2} m R^2 \cdot (a/R)$, so $T = \tfrac{1}{2} m a$. Combine: $m_h g - \tfrac{1}{2} m a = m_h a$, giving $a = m_h g / (m_h + m/2)$.

**Example 2 — Rolling down an incline.** A solid sphere and a hollow sphere, both of mass $m$ and radius $R$, roll without slipping from rest down the same incline. Which reaches the bottom first, and what are their speeds?
Energy conservation: $m g h = \tfrac{1}{2} m v^2 + \tfrac{1}{2} I \omega^2 = \tfrac{1}{2} m v^2 (1 + I / (m R^2))$. For a solid sphere, $I = \tfrac{2}{5} m R^2$, so $v^2 = 10 g h / 7$. For a hollow sphere, $I = \tfrac{2}{3} m R^2$, so $v^2 = 10 g h / (5/3 \cdot 2) = 6 g h / 5$. The solid sphere is faster because more of the gravitational energy goes into translation rather than rotation.

## Common Misconceptions
- **"Torque and work are the same."** They have the same units (N·m) but mean different things. Torque is a vector (or a scalar about a chosen axis) measured at a point; work is a scalar measured along a path.
- **"Moment of inertia is a fixed property of the body."** It depends on the chosen axis. The same hoop has $I = m R^2$ about its central axis and a different $I$ about a diameter.
- **"A solid and a hollow cylinder of the same mass and radius behave the same way in rotation."** No — the hollow cylinder has a much larger moment of inertia (mass is concentrated farther from the axis), so it accelerates more slowly under the same torque.
- **"Rolling without slipping means no friction."** Quite the opposite: the friction force is what enforces the no-slip condition. Without friction, a wheel on a slope would slide while spinning.

## Connections
The integral $I = \int r^2\, dm$ is a *second moment* of mass, structurally identical to the moment of inertia of a probability distribution in statistics and to the second moment of area in beam theory. The same formula reappears in *Linear Algebra* (Sem 5) as the inertia tensor of a rigid body in three dimensions, and in *Solid State Physics* (Sem 5) when computing the moment of inertia of a crystal lattice for phonon modes.

## Quick Check
1. A disc of mass $2\text{ kg}$ and radius $0.2\text{ m}$ rotates at $5\text{ rad/s}$. Find its rotational kinetic energy. ($I_{\text{disc}} = \tfrac{1}{2} m R^2$.)
2. A force of $10\text{ N}$ is applied tangentially to a wheel of radius $0.3\text{ m}$. What is the torque about the centre?
3. A thin ring of mass $m$ and radius $R$ rolls down an incline from height $h$. Find its speed at the bottom.
4. A solid sphere rolls without slipping. What fraction of its total kinetic energy is rotational?
5. State the parallel axis theorem and explain when it is useful.

## Takeaway
- Rotational kinematics is a structural copy of linear kinematics with the substitution $r \to \theta$, $v \to \omega$, $a \to \alpha$.
- Moment of inertia is the rotational analogue of mass, defined as $I = \int r^2\, dm$.
- Newton's second law for rotation: $\tau = I \alpha$.
- Rotational kinetic energy: $K = \tfrac{1}{2} I \omega^2$.
- Rolling combines translation and rotation; the no-slip condition is $v = R \omega$.
