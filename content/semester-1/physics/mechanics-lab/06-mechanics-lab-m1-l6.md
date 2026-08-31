***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: physics
subjectName: Physics
courseId: mechanics-lab
courseName: Mechanics Lab
moduleId: mechanics-lab-module-1
moduleName: Measurement and Uncertainty
lessonId: mechanics-lab-m1-l6
lessonName: Friction on an Inclined Plane, Report Writing, and the Viva
lessonNumber: 6
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - mechanics-lab-m1-l5
learningObjectives:
  - Determine the coefficient of static and kinetic friction between two surfaces using an inclined plane.
  - Distinguish static and kinetic friction and explain why kinetic friction is usually smaller.
  - Write a complete lab report from raw data to conclusions, following the structure expected by the programme.
  - Anticipate and answer viva-style questions about any of the four experiments (force table, simple pendulum, spring, friction).
concepts:
  - Static friction
  - Kinetic friction
  - Coefficient of friction
  - Limiting angle of friction
  - Normal force
  - Free-body diagram
  - Lab report structure
  - Viva preparation
tags:
  - physics
  - laboratory
  - friction
  - inclined-plane
  - report-writing
  - viva
sourceType: authored-courseware
assessmentHints:
  - The limiting angle method is more reliable than the horizontal-pull method because it requires only an angle measurement, not a force measurement.
  - μ_k < μ_s in nearly every case; if the lab gives the opposite, suspect the apparatus.
  - Viva questions often test whether the student can read their own data, not just recite theory.
status: in-review
***

# Friction on an Inclined Plane, Report Writing, and the Viva

## Overview

Friction is the force every physicist learns to distrust and every engineer learns to live with. The inclined-plane experiment is the lab's classic window into it: tilt a flat board under a wooden block, increase the angle slowly, and the block begins to slide at a well-defined angle. The tangent of that angle is the coefficient of static friction between the block and the board. Once the block is sliding, the kinetic coefficient is smaller, by a factor that depends on the materials but typically 20–40 %.

This lesson does three things at once. First, it walks through the friction experiment, with the limiting-angle method and the force-balance method side by side. Second, it lays out the canonical lab report structure used in the programme (title, abstract, theory, apparatus, procedure, data, analysis, discussion, conclusion, references) and walks through a worked example using the inclined-plane data. Third, it collects the viva-style questions that examiners ask across the four Sem 1 experiments (force table, simple pendulum, helical spring, inclined plane), so that you can rehearse them before the practical exam.

## Learning Path

1. **Set the inclined plane** — clamp a flat board on a hinge at one end; place a wooden block on the board; raise the free end slowly with a screw jack.
2. **Limiting-angle method (static)** — increase the angle in 0.5° steps. The block begins to slip at a well-defined angle θ_s. Repeat five times, retapping the board between each trial, to get a reliable θ_s and its spread.
3. **Force-balance method (static)** — fix the angle at, say, 25°. Hang a string from the block over a pulley at the top of the plane; add slotted masses to a pan until the block just starts to slide. The static friction coefficient is μ_s = (m_pan · g) / (m_block · g · cos θ − m_pan · g · sin θ) — or, equivalently, μ_s = (m_pan) / (m_block · cos θ − m_pan · sin θ).
4. **Kinetic friction** — once the block is sliding, read the force needed to maintain slow, steady motion. The kinetic coefficient is smaller; the ratio μ_s / μ_k is typically 1.2–1.5.
5. **Write the report** — produce a complete lab report using the inclined-plane data. The structure is given below.
6. **Viva rehearsal** — work through the viva questions at the end of the lesson with a partner.

## Core Explanation

### Theory

Consider a block of mass m on a plane inclined at angle θ to the horizontal. The free-body diagram has three forces:

- Weight: m g downward.
- Normal force: N perpendicular to the plane.
- Friction: f parallel to the plane, opposing motion (or impending motion).

Resolving perpendicular and parallel to the plane:

- Perpendicular: N = m g cos θ.
- Parallel: m g sin θ − f = m a (along the plane).

#### Static Friction

When the block is not moving, the friction force adjusts to balance the applied force. The maximum static friction is

f_s,max = μ_s N = μ_s m g cos θ,

where μ_s is the coefficient of static friction. The block is on the verge of slipping when

m g sin θ = μ_s m g cos θ   ⇒   μ_s = tan θ_s,

where θ_s is the angle at which slipping just begins — the **limiting angle**. This is a remarkably clean result: a single angle measurement gives μ_s with no force gauge.

#### Kinetic Friction

Once the block is sliding at constant velocity (a = 0), the kinetic friction is

f_k = μ_k N = μ_k m g cos θ.

The applied force parallel to the plane (or the component of gravity along the plane, in the limiting-angle case) equals f_k. So

m g sin θ = μ_k m g cos θ   ⇒   μ_k = tan θ_k,

where θ_k is the angle at which the block slides at constant velocity. In practice θ_k is harder to identify than θ_s (you have to maintain slow steady motion, not just impending motion), so the lab usually extracts μ_k from a force-balance measurement at a fixed angle, not from an angle measurement.

#### Force-Balance Method (Both Coefficients)

Fix the plane at a moderate angle (e.g. 25°). Connect the block to a hanging mass m_pan via a string over a pulley at the top of the plane. The block is on the verge of sliding up when

T − m g sin θ − μ_s m g cos θ = 0, with T = (m_pan + m_eff) g,

and on the verge of sliding down (or stationary under gravity) when

m g sin θ − T − μ_s m g cos θ = 0.

By taking the two readings (m_pan_up and m_pan_down) at the verge of motion, you can solve for both μ_s and the small friction in the pulley:

μ_s = (m_pan_up − m_pan_down) / (2 m_block · cos θ).

And the kinetic coefficient is measured by finding the mass m_pan_kinetic that maintains slow, steady motion up the plane:

μ_k = (m_pan_kinetic − m_block sin θ) / (m_block cos θ).

### Procedure

#### Limiting-Angle Method (Recommended)

1. Place the plane on a horizontal table; check with a spirit level.
2. Place the block on the plane; raise the free end slowly by turning the screw jack.
3. The block may sit at a fixed angle without slipping because of static friction. To find the limiting angle, **tap the plane gently** at each step to dislodge any microscopic sticking. Note the angle at which the block just begins to slide.
4. Lower the plane, place the block at the same starting position, and repeat. Do five trials; record θ_s for each.
5. Compute the mean and standard deviation: μ_s = tan(θ̄_s) ± sec²(θ̄_s) · σ_θ.

The factor sec²(θ) is the propagation factor from θ to tan θ: d(tan θ)/dθ = sec² θ.

#### Force-Balance Method

1. Set the plane at θ = 25° (or another fixed angle).
2. Attach a string to the block; run it over a pulley at the top of the plane; hang a pan on the other end.
3. Add slotted masses to the pan in 5 g steps. Note the mass at which the block first begins to slide up the plane (m_pan_up). Repeat three times.
4. Note the mass at which the block, given a small push, just continues to slide down at constant velocity (m_pan_down, or use m_pan_kinetic for the kinetic coefficient).
5. Compute μ_s and μ_k using the formulas above.

### Apparatus and Safety

- Inclined plane with hinged end and screw-jack or screw-driven wedge for angle adjustment
- Wooden block (well-defined mass, with a hook for the string)
- Set of slotted masses (1 g to 1 kg)
- Light string
- Pulley (low-friction, clamped at top of plane)
- Protractor or angle scale on the inclined plane
- Spirit level
- Safety glasses

Safety: the block can slide off the plane and onto a foot. Stand clear when increasing the angle rapidly. Use masses within the recommended range to avoid snapping the string.

## Key Ideas

- Static friction adjusts to balance the applied force up to a maximum: f_s,max = μ_s N. Once the applied force exceeds μ_s N, the block slides.
- Kinetic friction is approximately constant: f_k = μ_k N, with μ_k < μ_s in nearly every case.
- The limiting-angle method gives μ_s = tan θ_s from a single angle measurement. It is the most reliable method in a first-year lab.
- The force-balance method gives both μ_s and μ_k from two mass readings at a fixed angle.
- The free-body diagram is the single most useful tool for any friction problem.
- Static friction is what makes the block stay put on a tilted board; without it, the block would slide at any non-zero angle.

## Worked Examples

### Example 1: Limiting-angle method

You record the following angles at which a wooden block begins to slide on a wooden plane:

| Trial | θ_s (degrees) |
|------:|--------------:|
| 1 | 27.5 |
| 2 | 28.0 |
| 3 | 27.0 |
| 4 | 28.5 |
| 5 | 27.5 |

- Mean: θ̄_s = 27.7°
- Standard deviation: σ_θ = 0.5°
- μ_s = tan(27.7°) = 0.525
- Uncertainty: σ_μ = sec²(27.7°) · σ_θ in radians = (1/cos² 27.7°) · (0.5° · π/180) = (1/0.785) · 0.0087 = 0.011

**Reported:** μ_s = 0.53 ± 0.01 for wood on wood. This is consistent with textbook values of 0.25–0.50 for clean dry wood on wood; the higher value here suggests the wood surfaces are slightly rough or the block has sandpaper attached (a common variant).

### Example 2: Force-balance method

You set the plane at θ = 25.0° and use a block of mass m_block = 500 g. You find m_pan_up = 360 g and m_pan_kinetic = 290 g (the pan mass at which the block slides up at constant velocity).

- μ_s = m_pan_up / (m_block cos θ) = 0.360 / (0.500 · 0.906) = 0.795 — wait, that is too high. The formula needs care. The applied force is the tension in the string; the tension is approximately (m_pan + m_pan_extra) g, but if we ignore the pulley friction and the pan mass on the verge of sliding up, the tension equals the weight of the hanging mass: T = m_pan g.
- At the verge of sliding up: T = m_block g sin θ + μ_s m_block g cos θ ⇒ m_pan g = m_block g (sin θ + μ_s cos θ) ⇒ μ_s = (m_pan / m_block − sin θ) / cos θ = (0.360 / 0.500 − 0.423) / 0.906 = (0.720 − 0.423) / 0.906 = 0.328.
- For kinetic: μ_k = (m_pan_kinetic / m_block − sin θ) / cos θ = (0.290 / 0.500 − 0.423) / 0.906 = (0.580 − 0.423) / 0.906 = 0.173.
- Reported: μ_s = 0.33, μ_k = 0.17. The ratio μ_s / μ_k = 1.9, on the high side but plausible for clean wood on wood.

### Example 3: Worked report (skeleton)

Below is a complete report outline, filled in with the inclined-plane data above.

**Title:** Determination of the coefficient of static and kinetic friction between wood and wood using an inclined plane.

**Abstract:** A wooden block was placed on a hinged plane; the angle of the plane was increased until the block just began to slide. The limiting angle θ̄_s = 27.7° ± 0.5° gives μ_s = tan θ̄_s = 0.53 ± 0.01. The force-balance method at θ = 25° gives μ_s = 0.33 and μ_k = 0.17. The discrepancy between the two μ_s values is attributed to a small calibration error in the angle scale of the inclined plane; the force-balance value is judged more reliable.

**Theory:** [Two paragraphs: free-body diagram, derivation of μ_s = tan θ_s, derivation of μ_k from the force balance.]

**Apparatus:** Inclined plane with protractor scale (resolution 0.5°); wooden block, mass (500 ± 1) g; slotted mass set (1 g resolution); pulley; light string; spirit level.

**Procedure:** [Step-by-step as in the lab manual; the limiting-angle method is described, then the force-balance method.]

**Data:**

| Trial | θ_s (°) | m_pan_up (g) | m_pan_kinetic (g) |
|------:|--------:|-------------:|------------------:|
| 1 | 27.5 | 365 | 295 |
| 2 | 28.0 | 358 | 290 |
| 3 | 27.0 | 360 | 285 |
| 4 | 28.5 | — | — |
| 5 | 27.5 | — | — |

**Analysis:** [Means, standard deviations, μ_s and μ_k with uncertainties.]

**Discussion:** The two methods give different μ_s values. The force-balance method requires a force measurement (the hanging mass), which is itself a derived quantity (the force is m_pan g, but the actual tension in the string is slightly less because the pulley has friction). The limiting-angle method requires only an angle, which is read directly from the protractor. The force-balance value (0.33) is closer to the textbook range for wood on wood (0.25–0.50) than the limiting-angle value (0.53); we judge the former more reliable. The kinetic coefficient is smaller than the static, as expected.

**Conclusion:** The coefficient of static friction between the wooden block and the wooden plane is μ_s = 0.33 ± 0.02; the coefficient of kinetic friction is μ_k = 0.17 ± 0.02. The ratio μ_s / μ_k = 1.9 is consistent with values for clean wood on wood.

**References:** [Lab manual; any textbook chapters on friction; any external sources.]

## Common Misconceptions

- **"Friction is always bad."** Friction is essential for walking, writing, braking, and most mechanical assemblies. The lab measures friction because it is a fundamental material property, not because it should be eliminated.
- **"μ_s > 1 is impossible."** It is not. Rubber on rubber can have μ_s > 1; some rubber-metal contacts reach μ_s = 1.5. Coefficients are not bounded by 1.
- **"μ_k > μ_s in some materials."** Almost never. Kinetic friction is usually 60–80 % of static. If your lab gives μ_k > μ_s, suspect the apparatus (perhaps the block is sticking on the plane rather than sliding smoothly).
- **"Tapping the plane to find θ_s is cheating."** It is not. Tapping dislodges microscopic sticking; without it, your measured θ_s is too high. The limiting angle is defined as the angle at which the block slips under any small perturbation; tapping is the standard way to apply that perturbation.
- **"The friction force depends on the area of contact."** For rigid macroscopic surfaces, kinetic and limiting static friction are independent of contact area. This is one of the empirical regularities of friction (the other two being the linear dependence on normal force and the small difference between static and kinetic). The microscopic origin of this is the real area of contact being much smaller than the apparent area and proportional to the normal force.

## Connections

- **Mechanics (Sem 1 theory).** Friction is the first non-conservative force most students meet. The work done against friction is dissipated as heat; the energy budget of any motion with friction is the kinetic energy minus the integral of the friction force.
- **Engineering.** The friction coefficient is the central parameter in any design involving gripping, braking, belting, or bolted joints. The lab value of μ_s is used directly in safety factors.
- **Materials science (later semesters).** The microscopic origin of friction (asperity deformation, adhesion) is the same physics that determines wear, lubrication, and surface finish.
- **Geophysics.** The angle of repose of a granular material is the angle at which a pile of sand or soil is on the verge of sliding under gravity; it is governed by the internal friction coefficient of the material, which is a friction coefficient between grains. The inclined-plane experiment is the bench-top analogue of a landslide.

## Quick Check

1. Define static and kinetic friction. Why is kinetic friction usually smaller?
2. Sketch the free-body diagram of a block on an inclined plane at angle θ. Resolve the forces parallel and perpendicular to the plane.
3. Derive μ_s = tan θ_s for the limiting-angle case.
4. In the force-balance method at angle θ, derive the formulas for μ_s and μ_k from the readings m_pan_up and m_pan_kinetic.
5. Why tap the inclined plane when finding the limiting angle?
6. Two blocks of equal mass are placed on the plane, one on top of the other. Does the limiting angle change? Why or why not?
7. The plane is at 30°, and μ_s = 0.50. Will the block slide? At what angle will it slide?
8. A student reports μ_k > μ_s. Identify at least two possible experimental errors.
9. Sketch a complete lab report structure. What goes in each section?
10. Viva question: "If your spring constant from the dynamic method is half the static value, what might be wrong?"

## Takeaway

The inclined-plane experiment is the lab's introduction to friction and to the discipline of writing a complete report. The limiting-angle method is a small piece of elegance: a single angle gives μ_s with no force measurement. The force-balance method is the workhorse: it gives both coefficients and is the form you will see in any engineering context. The report structure — title, abstract, theory, apparatus, procedure, data, analysis, discussion, conclusion, references — is the structure you will use for every lab report in the programme, from this one to the senior project. The viva questions are the examiner's way of testing whether you understand the experiment you have done, not just the experiment you have memorised. Read your own data; know what each formula does; anticipate where the systematic errors live.
