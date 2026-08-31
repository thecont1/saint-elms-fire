***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: bridge-physics
courseName: Bridge Course for Physics
moduleId: bridge-physics-module-1
moduleName: Foundations and Mathematical Refresh
lessonId: bridge-physics-m1-l3
lessonName: Calculus Refresh and Laboratory Safety
lessonNumber: 3
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 35
releaseOrder: 3
prerequisites:
  - bridge-physics-m1-l1
  - bridge-physics-m1-l2
learningObjectives:
  - Compute derivatives and integrals of elementary functions; read the slope and area interpretations.
  - Apply the chain rule, product rule, and the fundamental theorem of calculus.
  - Identify the major categories of laboratory hazard and the standard safety practices.
concepts:
  - Derivative
  - Integral
  - Chain and product rules
  - Fundamental theorem of calculus
  - Lab PPE
  - Hazard categories
tags:
  - physics
  - foundations
  - calculus
  - lab-safety
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Calculus Refresh and Laboratory Safety

## Overview

This lesson is the final stop in the Bridge Course. It refreshes the two operations of calculus — the derivative and the integral — at the depth needed for Mechanics and beyond, and introduces the safety practices that you will use in every laboratory class. The calculus refresh is conceptual rather than rigorous: the goal is to give you a working command of the rules and a clear picture of what derivatives and integrals mean geometrically and physically. The safety section prepares you for the laboratory rotation that begins with Mechanics Lab in the first semester.

## Learning Path

- **What you should already know**: arithmetic, algebra, trigonometry, the Cartesian coordinate system, and the basics of functions and their graphs.
- **What this lesson adds**: the rules of differentiation and integration; the geometric and physical meaning of $dy/dx$ and $\int y\, dx$; the standard lab PPE and hazard categories.
- **What later lessons this will unlock**: the calculus in Mechanics (kinematics, work, energy), the rest of the physics sequence, and every laboratory class in the programme.

## Core Explanation

### The derivative

The derivative of a function $y = f(x)$ is defined as the limit of the slope of a secant as the two points coalesce:

$$\frac{dy}{dx} = f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}.$$

Geometrically, the derivative is the slope of the tangent line to the graph at the point $x$. Physically, the derivative is the instantaneous rate of change: $dx/dt$ is velocity, $dv/dt$ is acceleration, $dq/dt$ is current.

The derivative of the elementary functions:

| Function | Derivative |
|---|---|
| $x^n$ | $n x^{n-1}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $e^x$ | $e^x$ |
| $\ln x$ | $1/x$ |

The derivative is **linear**: $(a f + b g)' = a f' + b g'$. The **product rule** is $(f g)' = f' g + f g'$. The **quotient rule** is $(f/g)' = (f' g - f g')/g^2$. The **chain rule** is $(f(g(x)))' = f'(g(x)) g'(x)$.

### Common derivatives

- $\frac{d}{dx}(x^2) = 2x$
- $\frac{d}{dx}(x^3) = 3x^2$
- $\frac{d}{dx}(\sqrt{x}) = \frac{1}{2\sqrt{x}}$
- $\frac{d}{dx}(\sin x) = \cos x$
- $\frac{d}{dx}(\cos x) = -\sin x$
- $\frac{d}{dx}(e^x) = e^x$
- $\frac{d}{dx}(a^x) = a^x \ln a$
- $\frac{d}{dx}(\ln x) = 1/x$

### The integral

The integral of a function $y = f(x)$ is the area between the graph and the $x$-axis. The **indefinite integral** (or antiderivative) is the family of functions $F(x)$ with $F'(x) = f(x)$:

$$\int f(x)\, dx = F(x) + C,$$

where $C$ is the constant of integration. The **definite integral** from $a$ to $b$ is the signed area:

$$\int_a^b f(x)\, dx = F(b) - F(a).$$

The **fundamental theorem of calculus** connects the derivative and the integral: the derivative of an integral recovers the integrand (with sign changes at the limits), and the integral of a derivative recovers the original function.

### Common integrals

- $\int x^n dx = \frac{x^{n+1}}{n+1} + C$ (for $n \ne -1$)
- $\int \frac{1}{x} dx = \ln|x| + C$
- $\int e^x dx = e^x + C$
- $\int \sin x\, dx = -\cos x + C$
- $\int \cos x\, dx = \sin x + C$
- $\int \frac{1}{1 + x^2} dx = \arctan x + C$
- $\int \frac{1}{\sqrt{1 - x^2}} dx = \arcsin x + C$

### Geometric and physical meaning

The derivative and the integral are inverse operations. The integral of velocity over time gives the displacement; the derivative of displacement with respect to time gives the velocity. The integral of force over distance gives the work; the derivative of work with respect to distance gives the force. The integral of current over time gives the charge; the derivative of charge with respect to time gives the current.

In a position-time graph, the slope of the tangent at any point is the velocity at that instant. The area under the curve between two times is the displacement over that interval. The slope of the velocity-time graph is the acceleration. The area under the force-distance graph is the work.

### Chain rule in action

The chain rule is the workhorse of physics because most quantities are functions of other quantities. If $E = \frac{1}{2} m v^2$ and $v = v(t)$, then

$$\frac{dE}{dt} = m v \frac{dv}{dt} = m v a,$$

the rate of change of kinetic energy, which equals power in this special case.

If $V = \frac{4}{3} \pi r^3$ (volume of a sphere) and $r = r(t)$, then

$$\frac{dV}{dt} = 4 \pi r^2 \frac{dr}{dt},$$

the rate of change of volume equals the surface area times the radial velocity.

### Integration by parts

For products of functions, the integration-by-parts formula is

$$\int u\, dv = u v - \int v\, du.$$

A useful special case is the integral of $x e^x$, $\int x e^x dx = x e^x - \int e^x dx = (x - 1) e^x + C$.

### Numerical estimates

In physics, the integral is often estimated by Riemann sums. For data $y_i$ at points $x_i$, the left Riemann sum is $\sum y_i \Delta x$, the right Riemann sum is $\sum y_{i+1} \Delta x$, and the trapezoidal rule is the average of the two. These are useful when the function is known only at discrete points (e.g. a velocity-time graph from an experiment).

### Laboratory safety

The laboratory is the most safety-critical part of your education. The hazards are real and the consequences of carelessness are severe. The rules below are universal; specific labs add their own.

**Personal protective equipment (PPE):**
- Lab coat (or apron) for chemical and biological work.
- Safety goggles for any work involving projectiles, glassware under vacuum, chemicals, or lasers.
- Gloves when handling chemicals or biological samples; gloves are not a substitute for hand washing.
- Closed-toe shoes (no sandals, no open heels). Long hair must be tied back; loose clothing and dangling jewellery must be secured.

**Hazard categories:**
- **Mechanical**: rotating machinery, projectiles, glassware under stress. Respect guards; never defeat an interlock.
- **Electrical**: high voltage, even at low current, can be lethal. Inspect cables; do not touch high-voltage terminals; keep liquids away from electronics.
- **Chemical**: read labels, use fume hoods, know the location of the eyewash and safety shower. Treat every chemical as hazardous until you have read its safety data sheet.
- **Thermal**: hot plates, burners, cryogenic liquids. Use tongs; allow equipment to cool before handling.
- **Optical**: lasers (especially Class 3B and 4), UV sources, intense lamps. Never look into a laser beam; use appropriate laser safety eyewear.
- **Biological**: microbes, blood, tissue. Use biosafety cabinets where required; dispose of biohazardous waste in autoclave bags.
- **Radiological**: radioactive sources, X-ray generators. Use dosimetry badges; minimise exposure time; maximise distance.

**General rules:**
- No eating, drinking, smoking, or chewing gum in the lab.
- No running or roughhousing.
- No unauthorised experiments. Do only the experiment in the manual.
- Know the location of the fire extinguisher, the eyewash, the safety shower, the first-aid kit, the emergency exit, and the emergency stop.
- Report any incident (spill, breakage, near-miss, injury) to the lab instructor immediately, even if it seems minor.
- Clean up your workspace before leaving. Wash your hands thoroughly.

**Specific physics lab reminders:**
- When using optical benches, align components carefully and never look directly into a laser or a high-intensity lamp.
- When using electrical equipment, check the wiring before applying power. Use the right fuse rating. Keep high-voltage capacitors shorted before touching.
- When using radioactive sources (in the nuclear physics lab), follow the radiation safety protocol: minimise time, maximise distance, use shielding.

## Key Ideas

- The derivative is the slope of the tangent, the rate of change, the inverse of the integral.
- The integral is the area under the curve, the accumulated quantity, the inverse of the derivative.
- The chain rule handles nested functions; the product rule handles products; the fundamental theorem connects derivatives and integrals.
- Geometry: slope = derivative; area = integral.
- Lab PPE: lab coat, goggles, gloves, closed shoes.
- Lab hazards: mechanical, electrical, chemical, thermal, optical, biological, radiological.
- Universal lab rules: no food, no running, no unauthorised experiments, report all incidents.

## Worked Examples

### Example 1 — Derivative using the chain rule

Compute $\frac{d}{dx}[\sin(x^2)]$.

**Solution.** Let $u = x^2$, so $f(u) = \sin u$. Then $f'(u) = \cos u$ and $u'(x) = 2 x$. By the chain rule:

$$\frac{d}{dx}[\sin(x^2)] = \cos(x^2) \cdot 2 x = 2 x \cos(x^2).$$

### Example 2 — Definite integral by the fundamental theorem

Compute $\int_0^{\pi} \sin x\, dx$.

**Solution.** An antiderivative of $\sin x$ is $-\cos x$. By the fundamental theorem:

$$\int_0^{\pi} \sin x\, dx = [-\cos x]_0^{\pi} = -\cos \pi - (-\cos 0) = -(-1) - (-1) = 1 + 1 = 2.$$

Geometrically, the area under one arch of the sine curve is 2. ✓

### Example 3 — Velocity from a position function

The position of a particle is $x(t) = 3 t^2 + 2 t + 5$ (in metres). Find the velocity and acceleration at $t = 2$ s.

**Solution.** Velocity is the time derivative of position:

$$v(t) = \frac{dx}{dt} = 6 t + 2 \text{ m/s}.$$

At $t = 2$: $v(2) = 14$ m/s.

Acceleration is the time derivative of velocity:

$$a(t) = \frac{dv}{dt} = 6 \text{ m/s}^2.$$

The acceleration is constant, as expected for a quadratic position function.

## Common Misconceptions

- **"$\int 1/x\, dx = x/C$."** No. $\int 1/x\, dx = \ln|x| + C$. The reciprocal integrates to the logarithm, not to a reciprocal of an antiderivative.
- **"The constant of integration is unimportant."** It is fixed by initial or boundary conditions. The general solution of $dy/dx = 2x$ is $y = x^2 + C$, but a specific problem (e.g. $y(0) = 5$) determines $C = 5$.
- **"You can divide by zero in calculus."** You cannot. The derivative $\frac{dy}{dx}$ assumes a well-defined limit; $1/x$ has a singular behaviour at $x = 0$, which the logarithm accommodates via the absolute value.
- **"Lab safety is overcautious."** It is calibrated by people who have seen accidents. The PPE exists because accidents happen. Use it.
- **"PPE is enough on its own."** PPE is the last line of defence, not the first. Engineering controls (fume hoods, machine guards, interlocks) and administrative controls (procedures, training) are more important.

## Connections

- The derivative and integral are the foundation of all of physics. The refresh here is used immediately in Mechanics (velocity, acceleration, work, energy, momentum) and in every subsequent physics course.
- The chain rule is the workhorse of physics: energy as a function of position, force as a function of velocity, voltage as a function of charge.
- Numerical integration (Riemann sums, trapezoidal rule) is the basis of data analysis in the laboratory and the basis of the numerical methods course in Semester 4.
- Lab safety is the foundation of every laboratory course; the principles here are restated in every lab manual.

## Quick Check

1. Compute $\frac{d}{dx}(x^2 e^x)$.
2. Compute $\int_1^e \frac{1}{x}\, dx$.
3. The position of a particle is $x(t) = 5 \sin(2 t)$. Find the velocity at $t = \pi/4$.
4. List the standard lab PPE for a chemistry or physics lab.
5. What is the universal first response to any lab incident?

## Takeaway

- The derivative and integral are inverse operations; both are essential to physics.
- The chain rule, product rule, and fundamental theorem are the most-used tools.
- Geometric interpretation: derivative = slope, integral = area.
- Lab PPE: lab coat, goggles, gloves, closed shoes.
- Lab hazards are real; the safety culture is the first line of defence.
- This lesson is the gateway to Mechanics and to every laboratory class that follows.
