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
lessonId: bridge-physics-m1-l1
lessonName: Units, Dimensions and Scientific Notation
lessonNumber: 1
moduleNumber: 1
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 30
releaseOrder: 1
prerequisites: []
learningObjectives:
  - State the SI base units and identify derived units.
  - Convert between units using dimensional analysis.
  - Use scientific notation and significant figures correctly in physics calculations.
concepts:
  - SI base units
  - Derived units
  - Dimensional analysis
  - Significant figures
  - Unit conversion
  - Order of magnitude
tags:
  - physics
  - foundations
  - units
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
  - problem-solving
***

# Units, Dimensions and Scientific Notation

## Overview

Every physical quantity has both a numerical value and a unit. The unit is not an afterthought — it carries information about what is being measured and constrains the algebra of physics. This lesson establishes the SI system, walks through the most common derived units in physics, and gives practical tools for unit conversion, dimensional analysis, and the use of significant figures. The lesson is the first stop in the bridge course that prepares incoming B.Sc. students for Mechanics, Mechanics Lab, and the rest of the programme.

## Learning Path

- **What you should already know**: the decimal number system; the four basic arithmetic operations.
- **What this lesson adds**: confident handling of SI units, the ability to check equations by dimensional analysis, and fluency with scientific notation.
- **What later lessons this will unlock**: the algebraic and vector refresh in Lesson m1-l2, the calculus refresh in Lesson m1-l3, and every subsequent physics course.

## Core Explanation

### The SI system

The International System of Units (SI, from the French Système International) defines seven base units. Every other unit is derived from these by multiplication and division, never by an arbitrary numerical factor.

| Quantity | Symbol | SI base unit | Symbol |
|---|---|---|---|
| Length | $l$ | metre | m |
| Mass | $m$ | kilogram | kg |
| Time | $t$ | second | s |
| Electric current | $I$ | ampere | A |
| Temperature | $T$ | kelvin | K |
| Amount of substance | $n$ | mole | mol |
| Luminous intensity | $I_v$ | candela | cd |

All other units in physics — the newton, the joule, the watt, the volt, the tesla — are derived. For example, force has units of $\text{kg} \cdot \text{m} / \text{s}^2$, defined as the newton (N). Energy has units of $\text{kg} \cdot \text{m}^2 / \text{s}^2$, defined as the joule (J).

### Prefixes

SI prefixes scale a unit by powers of ten. The most common:

- $10^{12}$ tera (T), $10^9$ giga (G), $10^6$ mega (M), $10^3$ kilo (k)
- $10^{-3}$ milli (m), $10^{-6}$ micro ($\mu$), $10^{-9}$ nano (n), $10^{-12}$ pico (p)

A 1.5 GHz processor has a clock at $1.5 \times 10^9$ Hz. A 50 nm transistor has a feature size of $50 \times 10^{-9}$ m. Prefix conversions are the most common source of factor-of-$10^3$ mistakes; always write the unit explicitly.

### Dimensional analysis

Every physical equation must be **dimensionally homogeneous**: both sides must reduce to the same combination of base units. You can use this as a sanity check on any equation.

**Worked example.** The kinetic energy of a particle is $E = \frac{1}{2} m v^2$. The dimensions on the right are $\text{kg} \cdot (\text{m}/\text{s})^2 = \text{kg} \cdot \text{m}^2 / \text{s}^2$, which is the same as the joule. ✓

**Reverse use.** If you don't remember the formula for the period of a pendulum but you know it depends on length $L$ and gravity $g$, you can write $T = k L^a g^b$ and solve for $a, b$ from the requirement that the dimensions match. The only solution is $a = 1/2, b = -1/2$, giving $T = 2\pi \sqrt{L/g}$ (the constant $2\pi$ cannot be found by dimensional analysis).

### Scientific notation

Physics numbers range from subatomic scales ($10^{-18}$ m) to cosmological scales ($10^{26}$ m). Scientific notation expresses a number as $a \times 10^n$ with $1 \le a < 10$. For example, the mass of an electron is $9.11 \times 10^{-31}$ kg, not $0.000000000000000000000000000000911$ kg.

In computation, the number is split into a **mantissa** $a$ and an **exponent** $n$. In Python, this is `9.11e-31`; in scientific calculators, the `EE` or `EXP` key enters the exponent. Errors in the exponent are the most common source of "wrong by many orders of magnitude" mistakes.

### Significant figures

The number of significant figures in a quoted value reflects its precision. The length $1.234$ m has four significant figures; $1.2340$ m has five; $0.0012$ m has two. The trailing zeros after a decimal point are significant; the leading zeros are not.

When multiplying or dividing, the result has the number of significant figures of the least precise input. $1.23 \times 4.5 = 5.535$, but the answer should be reported as $5.5$ (two significant figures, the precision of $4.5$).

When adding or subtracting, the result has the number of decimal places of the least precise input. $1.234 + 0.05 = 1.284$, but the second input has only two decimal places, so the answer is $1.28$.

### Order of magnitude

A common physics habit is to estimate the **order of magnitude** of a quantity: the nearest power of 10. The mass of a person is $\sim 10^2$ kg (50–100 kg range), the mass of an elephant is $\sim 10^3$ kg, the mass of a blue whale is $\sim 10^5$ kg. Order-of-magnitude reasoning ("Fermi estimates") is useful for sanity-checking any calculation: if you compute the speed of light and get $10^3$ m/s, you have made a unit-conversion error.

### Common pitfalls

- **Mixing units**: an equation is homogeneous only if all quantities are in consistent units. Mixing metres and centimetres, or seconds and hours, gives nonsense.
- **Prefix confusion**: the kilogram is the only SI base unit with a prefix. Prefixes apply to grams: $1$ kg = $10^3$ g, $1$ km = $10^3$ m, but you would not say "$1$ kmetre" or "$1$ ksecond". The convention exists for historical reasons (the original kilogram prototype).
- **Order of magnitude vs. factor**: $10^3$ and $3 \times 10^3$ are the same order of magnitude, but $3 \times 10^3$ is three times $10^3$. Always report the numerical factor when possible.

## Key Ideas

- SI has seven base units; all other units are derived.
- Prefixes scale units by powers of ten.
- Equations must be dimensionally homogeneous; dimensional analysis is a powerful check.
- Scientific notation splits a number into mantissa and exponent.
- Significant figures reflect precision; the result of a calculation is no more precise than the least precise input.
- Order-of-magnitude estimates are essential sanity checks.

## Worked Examples

### Example 1 — Convert 72 km/h to m/s

A car's speedometer reads 72 km/h. What is this in m/s?

**Solution.**

$$72\,\frac{\text{km}}{\text{h}} = 72 \times \frac{10^3\,\text{m}}{3600\,\text{s}} = 72 \times \frac{1}{3.6}\,\frac{\text{m}}{\text{s}} = 20\,\frac{\text{m}}{\text{s}}.$$

(Quick check: 72 km/h is 72/3.6 = 20 m/s. ✓)

### Example 2 — Dimensional check on $F = ma$

Newton's second law states $F = m a$. Does the unit newton match $\text{kg} \cdot \text{m} / \text{s}^2$?

**Solution.** $[m] = \text{kg}$, $[a] = \text{m}/\text{s}^2$, so $[m a] = \text{kg} \cdot \text{m}/\text{s}^2$. The newton is defined as exactly this combination. ✓

### Example 3 — Pendulum period by dimensional analysis

The period of a pendulum depends on the length $L$ and the gravitational acceleration $g$ but not on the mass. Find the form of the period.

**Solution.** Write $T = k L^a g^b$. The dimensions are $[T] = \text{s}$, $[L] = \text{m}$, $[g] = \text{m}/\text{s}^2$. So $\text{s} = \text{m}^a \cdot (\text{m}/\text{s}^2)^b = \text{m}^{a+b} \cdot \text{s}^{-2b}$. Equating exponents: $-2b = 1 \Rightarrow b = -1/2$, and $a + b = 0 \Rightarrow a = 1/2$. So $T = k \sqrt{L/g}$. The constant $k = 2\pi \approx 6.28$ is found by experiment (or by solving the differential equation), not by dimensional analysis.

## Common Misconceptions

- **"Units are a formality."** They are part of the answer. A speed of 20 is meaningless without a unit; 20 m/s and 20 km/h are very different.
- **"Dimensional analysis gives the answer."** It gives the form of the answer up to a dimensionless constant. The constant must be found by experiment or by solving the underlying equation.
- **"Significant figures are about being precise."** They are about honestly reporting precision. Quoting too many figures overstates your knowledge; quoting too few throws away information.
- **"The kilogram has the prefix 'kilo'."** Technically yes, but it is the SI base unit. The gram is a derived unit ($1$ g = $10^{-3}$ kg). Prefixes normally attach to base units, except for the kilogram by historical convention.
- **"Scientific notation is only for very large or very small numbers."** It is also a clean way to keep track of significant figures and to do arithmetic without losing track of decimal points.

## Connections

- Unit conversion is the first step of every physics problem; a wrong conversion factor is the most common source of errors.
- Dimensional analysis is the foundation of scaling laws in mechanics (Lesson m2-l1 of the Mechanics course), fluid dynamics, electromagnetism, and quantum mechanics.
- Significant-figure discipline matters in laboratory work, where you report measurements with the precision of your instrument.
- Order-of-magnitude reasoning is the foundation of Fermi-estimate problems and is a hallmark of a working physicist.

## Quick Check

1. State the seven SI base units and their symbols.
2. Convert 250 mA to amperes.
3. Check the dimensions of $E = mc^2$.
4. Report the answer to $1.23 \times 4.5$ with the correct number of significant figures.
5. Estimate the order of magnitude of the mass of a typical car in kilograms.

## Takeaway

- SI has seven base units; all other units are derived.
- Unit conversion and dimensional analysis are foundational tools.
- Scientific notation and significant figures are about clean, honest reporting of numbers.
- Order-of-magnitude estimates are a habit of mind, not a separate skill.
- Every physics calculation starts with units and ends with units.
