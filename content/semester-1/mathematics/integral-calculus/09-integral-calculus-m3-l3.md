***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: mathematics
subjectName: Mathematics
courseId: integral-calculus
courseName: Integral Calculus
moduleId: integral-calculus-module-3
moduleName: Advanced Techniques and Improper Integrals
lessonId: integral-calculus-m3-l3
lessonName: Improper Integrals, Partial Fractions and Links to Physics
lessonNumber: 9
moduleNumber: 3
semesterNumber: 1
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - integral-calculus-m3-l2
learningObjectives:
  - Recognise improper integrals (infinite limits or integrand singularities) and evaluate them as limits.
  - Decompose rational functions by partial fractions and integrate each term.
  - Connect improper integrals to physical quantities: probability, energy, normalisation.
concepts:
  - Improper integral
  - Convergence and divergence
  - Partial fractions
  - Cover-up method
  - Probability density
  - Normalisation
tags:
  - mathematics
  - calculus
  - improper-integral
  - partial-fractions
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Improper Integrals, Partial Fractions and Links to Physics

## Overview

Improper integrals have either an infinite limit of integration or a singularity in the integrand. The standard way to evaluate them is to replace the offending limit with a finite parameter, evaluate the resulting proper integral, and take the limit. Convergence depends on the integrand's decay (for infinite limits) or the nature of the singularity (for divergent integrands). The lesson develops the two types of improper integrals, the comparison and ratio tests for convergence, and partial fractions — the technique for integrating rational functions by decomposing them into simpler pieces. The lesson closes with applications in physics: probability densities, normalisation, expected values, and the integrals that appear in statistical mechanics.

## Learning Path

- **What you should already know**: the definite integral and the fundamental theorem (Module 2); $u$-substitution; integration by parts; trigonometric integrals.
- **What this lesson adds**: the definition and evaluation of improper integrals; the partial-fraction decomposition of rational functions; the connection of these tools to probability, normalisation, and statistical mechanics.
- **What later lessons this will unlock**: the use of these techniques in Differential Equations (Sem 2), Real Analysis (Sem 3), and the physics applications throughout the programme.

## Core Explanation

### Improper integrals of the first kind

An **improper integral of the first kind** has an infinite limit of integration:

$$\int_a^\infty f(x)\, dx = \lim_{b \to \infty} \int_a^b f(x)\, dx.$$

If the limit exists and is finite, the integral **converges**; otherwise it **diverges**. The definition extends to the lower limit: $\int_{-\infty}^b f\, dx = \lim_{a \to -\infty} \int_a^b f\, dx$, and to both limits: $\int_{-\infty}^\infty f\, dx = \int_{-\infty}^0 f\, dx + \int_0^\infty f\, dx$, with convergence requiring both halves to converge.

**Examples.**

- $\int_1^\infty \frac{1}{x^2}\, dx = \lim_{b \to \infty} \int_1^b x^{-2}\, dx = \lim_{b \to \infty} (1 - 1/b) = 1$. Converges.
- $\int_1^\infty \frac{1}{x}\, dx = \lim_{b \to \infty} \ln b = \infty$. Diverges.
- $\int_0^\infty e^{-x}\, dx = \lim_{b \to \infty} (1 - e^{-b}) = 1$. Converges.
- $\int_0^\infty \sin x\, dx$ does not converge; the limit oscillates.

### Improper integrals of the second kind

An **improper integral of the second kind** has an integrand singularity within the interval. The standard fix is to split the integral at the singularity and take limits:

$$\int_a^b f(x)\, dx = \lim_{t \to c^-} \int_a^t f(x)\, dx + \lim_{s \to c^+} \int_s^b f(x)\, dx,$$

where $f$ is unbounded at $x = c$. Convergence requires both limits to exist and be finite.

**Examples.**

- $\int_0^1 \frac{1}{\sqrt{x}}\, dx = \lim_{t \to 0^+} \int_t^1 x^{-1/2}\, dx = \lim_{t \to 0^+} (2 - 2 \sqrt{t}) = 2$. Converges.
- $\int_0^1 \frac{1}{x}\, dx = \lim_{t \to 0^+} \int_t^1 x^{-1}\, dx = \lim_{t \to 0^+} \ln(1/t) = \infty$. Diverges.
- $\int_{-1}^1 \frac{1}{x}\, dx$ does not converge; the singularity at $x = 0$ is non-integrable.

### Tests for convergence

For infinite limits, the integrand must decay faster than $1/x$ (in the sense that $\int^\infty dx / x^p$ converges for $p > 1$ and diverges for $p \le 1$). More precise tests:

**Comparison test.** If $0 \le f(x) \le g(x)$ for $x \ge a$ and $\int_a^\infty g\, dx$ converges, then $\int_a^\infty f\, dx$ converges. If $\int_a^\infty f\, dx$ diverges and $0 \le f \le g$, then $\int_a^\infty g\, dx$ diverges.

**Limit comparison test.** If $f, g > 0$ and $\lim_{x \to \infty} f(x)/g(x) = L$ with $0 < L < \infty$, then $\int f$ and $\int g$ have the same convergence behaviour.

**Ratio test.** If $f > 0$ and $\lim_{x \to \infty} f(x + 1)/f(x) = r$, then $\int f$ converges if $r < 1$ and diverges if $r > 1$. (The test fails for $r = 1$.)

For integrand singularities, similar tests apply with the variable transformed to approach the singularity.

### Convergence of the Gaussian integral

The Gaussian integral $\int_{-\infty}^\infty e^{-x^2}\, dx = \sqrt{\pi}$ is a celebrated convergent improper integral. The proof uses a polar-coordinate trick: $I^2 = \int \int e^{-(x^2 + y^2)}\, dx\, dy = \int_0^{2\pi} \int_0^\infty e^{-r^2} r\, dr\, d\theta = 2 \pi \cdot 1/2 = \pi$, so $I = \sqrt{\pi}$. The integrand decays faster than any polynomial, so the integral converges very rapidly.

The Gaussian integral is the basis of the normal distribution in probability, the harmonic oscillator in quantum mechanics, and the heat kernel in partial differential equations.

### Improper integrals in physics

- **Total probability**: for a probability density $f(x)$, $\int_{-\infty}^\infty f(x)\, dx = 1$. The integral must converge; the density must be normalised.
- **Expected value**: $\langle X \rangle = \int_{-\infty}^\infty x f(x)\, dx$. Convergence depends on the decay of $f$ at infinity.
- **Total energy**: $E = \int_0^\infty \rho(\nu)\, d\nu$ for a spectral density $\rho$. Convergence requires $\rho$ to decay fast enough.
- **Total mass or charge**: $M = \int \rho(\vec{r})\, d^3 r$. Convergence is the requirement that the total is finite.
- **Electromagnetic self-energy**: $U = (1/8\pi\epsilon_0) \int \rho^2/r\, dV$ for a point charge diverges — the classical electron radius and the need for renormalisation.

### Partial fraction decomposition

A **partial fraction decomposition** expresses a rational function $P(x)/Q(x)$ as a sum of simpler rational functions (the "partial fractions"). The technique is the foundation of integrating rational functions: once the function is decomposed, each term integrates by elementary rules.

**Linear factors.** If $Q(x) = a (x - r_1) (x - r_2) \cdots (x - r_n)$ with distinct real roots, then

$$\frac{P(x)}{Q(x)} = \frac{A_1}{x - r_1} + \frac{A_2}{x - r_2} + \ldots + \frac{A_n}{x - r_n},$$

where the coefficients $A_i$ are determined by algebra (or by the cover-up method: $A_i = P(r_i) / Q'(r_i)$).

**Repeated linear factors.** If $(x - r)^k$ divides $Q(x)$, then the partial fraction has terms

$$\frac{A_1}{x - r} + \frac{A_2}{(x - r)^2} + \ldots + \frac{A_k}{(x - r)^k}.$$

**Irreducible quadratic factors.** If $x^2 + b x + c$ (with no real roots) divides $Q(x)$, the partial fraction has a term $(B x + C) / (x^2 + b x + c)$, integrated by completing the square and using the $\ln$ and $\arctan$ rules.

### The cover-up method

For a rational function with a single factor of $(x - r)$ (i.e. $r$ is a simple root), the coefficient of $1/(x - r)$ in the partial fraction is

$$A = \frac{P(r)}{Q'(r)}.$$

This is the **cover-up method**: multiply by $(x - r)$, evaluate at $x = r$ to "cover up" the factor, and divide by the derivative of the remaining factor. It is a fast way to compute the partial fractions without solving a linear system.

**Example.** $\frac{1}{(x - 1)(x - 2)} = \frac{A}{x - 1} + \frac{B}{x - 2}$. By cover-up: $A = 1/(1 - 2) = -1$, $B = 1/(2 - 1) = 1$. So $\frac{1}{(x - 1)(x - 2)} = \frac{-1}{x - 1} + \frac{1}{x - 2}$.

The cover-up method extends to repeated factors: multiply by $(x - r)^k$, expand around $x = r$, and equate coefficients of the powers of $(x - r)$.

### Integrating after partial fractions

Each partial fraction integrates by an elementary rule:

- $\int \frac{dx}{x - r} = \ln|x - r| + C$.
- $\int \frac{dx}{(x - r)^k} = \frac{(x - r)^{-(k-1)}}{-(k-1)} + C$ for $k > 1$.
- $\int \frac{B x + C}{x^2 + b x + c}\, dx$: complete the square; the integral splits into a logarithm (for the $x$ term) and an arctangent (for the constant term).

**Example.** $\int \frac{dx}{(x - 1)(x - 2)} = -\int \frac{dx}{x - 1} + \int \frac{dx}{x - 2} = -\ln|x - 1| + \ln|x - 2| + C = \ln\left|\frac{x - 2}{x - 1}\right| + C$.

**Example.** $\int \frac{dx}{x^2 + 4}$. Complete the square: $x^2 + 4 = (x)^2 + 2^2$. Use the rule $\int dx / (x^2 + a^2) = (1/a) \arctan(x/a) + C$: with $a = 2$, $\int dx / (x^2 + 4) = (1/2) \arctan(x/2) + C$.

### Long division for improper rational functions

If $\deg P \ge \deg Q$, perform polynomial long division to write $P/Q = S + R/Q$ where $\deg R < \deg Q$. Then integrate $S$ by the power rule and $R/Q$ by partial fractions.

**Example.** $\int \frac{x^2 + 1}{x + 1}\, dx$. Long division gives $x^2 + 1 = (x - 1)(x + 1) + 2$, so $\frac{x^2 + 1}{x + 1} = x - 1 + \frac{2}{x + 1}$. Integral: $\int (x - 1)\, dx + 2 \int \frac{dx}{x + 1} = x^2/2 - x + 2 \ln|x + 1| + C$.

### Probability and normalisation

The improper integral is the natural tool for probability densities. A probability density function $f(x) \ge 0$ on $\mathbb{R}$ must satisfy

$$\int_{-\infty}^\infty f(x)\, dx = 1,$$

the **normalisation condition**. Common densities:

- **Uniform on $[a, b]$**: $f(x) = 1/(b - a)$ for $a \le x \le b$, else $0$.
- **Exponential with rate $\lambda$**: $f(x) = \lambda e^{-\lambda x}$ for $x \ge 0$. Normalisation: $\int_0^\infty \lambda e^{-\lambda x}\, dx = 1$.
- **Normal (Gaussian)**: $f(x) = (1/\sqrt{2\pi}\sigma) e^{-(x - \mu)^2 / 2\sigma^2}$. The normalisation uses the Gaussian integral.
- **Maxwell–Boltzmann speed**: $f(v) = 4\pi (m/2\pi k T)^{3/2} v^2 e^{-m v^2 / 2 k T}$ for $v \ge 0$. The normalisation requires the integral of $v^2 e^{-a v^2}$, which evaluates to $\sqrt{\pi}/4 a^{3/2}$.

Each density is integrated over its domain to confirm the total is 1.

### Expected values

The **expected value** of a quantity $X$ with density $f$ is

$$\langle X \rangle = \int_{-\infty}^\infty x f(x)\, dx.$$

Convergence of the expected value requires $x f(x)$ to decay fast enough at infinity; the expectation is undefined if the integral diverges (e.g. for the Cauchy distribution $f(x) \propto 1/(1 + x^2)$ the expected value is undefined).

Higher moments: $\langle X^n \rangle = \int x^n f(x)\, dx$. The variance is $\text{Var}(X) = \langle X^2 \rangle - \langle X \rangle^2$.

### Improper integrals in statistical mechanics

The partition function $Z$ and the average energy $U$ of a system at temperature $T$ are

$$Z = \sum_i e^{-E_i / k T}, \quad U = \frac{1}{Z} \sum_i E_i e^{-E_i / k T}.$$

In the continuous limit, the sum becomes an integral, and the resulting expressions are improper (extending to $\infty$). Convergence requires the energy spectrum to grow fast enough; for ideal gases and harmonic oscillators, the integrals converge and give the standard thermodynamic relations.

### Improper integrals in electromagnetism

The potential of an infinite line charge is $\int_{-\infty}^\infty dq/(4\pi\epsilon_0 r) = (\lambda/4\pi\epsilon_0) \int_{-\infty}^\infty dz/\sqrt{z^2 + a^2}$, which diverges logarithmically. The result is a logarithmic potential, infinite in extent, characteristic of the two-dimensional Coulomb problem.

## Key Ideas

- Improper integral of the first kind: $\int_a^\infty f\, dx = \lim_{b \to \infty} \int_a^b f\, dx$.
- Improper integral of the second kind: integrand singularity split by limits.
- Convergence tests: comparison, limit comparison, ratio.
- Partial fractions: decompose $P/Q$ into simpler fractions; integrate term by term.
- Cover-up method: $A = P(r) / Q'(r)$ for a simple root $r$ of $Q$.
- Probability densities: normalisation $\int f = 1$; expected value $\int x f(x)\, dx$.
- Applications: Gaussian integral, Maxwell–Boltzmann, partition functions.

## Worked Examples

### Example 1 — Convergent improper integral

Evaluate $\int_1^\infty \frac{dx}{x (x^2 + 1)}$.

**Solution.** Decompose: $\frac{1}{x (x^2 + 1)} = \frac{A}{x} + \frac{B x + C}{x^2 + 1}$. Multiplying: $1 = A (x^2 + 1) + (B x + C) x = A x^2 + A + B x^2 + C x$. Equating: $A + B = 0$ (for $x^2$), $C = 0$ (for $x$), $A = 1$ (constant). So $A = 1$, $B = -1$, $C = 0$, and

$$\int \frac{dx}{x (x^2 + 1)} = \int \left(\frac{1}{x} - \frac{x}{x^2 + 1}\right) dx = \ln|x| - \frac{1}{2} \ln(x^2 + 1) + C = \ln \frac{|x|}{\sqrt{x^2 + 1}} + C.$$

Now the improper integral:

$$\int_1^\infty \frac{dx}{x (x^2 + 1)} = \lim_{b \to \infty} \left[\ln \frac{|x|}{\sqrt{x^2 + 1}}\right]_1^b = \lim_{b \to \infty} \left(\ln \frac{b}{\sqrt{b^2 + 1}} - \ln \frac{1}{\sqrt{2}}\right).$$

As $b \to \infty$, $b / \sqrt{b^2 + 1} \to 1$, so $\ln(b/\sqrt{b^2 + 1}) \to 0$. The integral converges to $0 - (-\frac{1}{2} \ln 2) = \frac{1}{2} \ln 2 \approx 0.347$.

### Example 2 — Divergent improper integral

Determine whether $\int_0^1 \frac{dx}{x^{1/3}}$ converges.

**Solution.** This is an improper integral of the second kind (singularity at $x = 0$). With the substitution:

$$\int_0^1 x^{-1/3}\, dx = \lim_{t \to 0^+} \int_t^1 x^{-1/3}\, dx = \lim_{t \to 0^+} \left[\frac{3}{2} x^{2/3}\right]_t^1 = \lim_{t \to 0^+} \left(\frac{3}{2} - \frac{3}{2} t^{2/3}\right) = \frac{3}{2}.$$

The integral converges to $3/2$. The exponent $-1/3$ is "gentle enough" that the integrand is integrable at the singularity.

Compare with $\int_0^1 x^{-1}\, dx$, which diverges logarithmically. The threshold for $\int_0^1 x^p\, dx$ is $p > -1$ (converges) versus $p \le -1$ (diverges).

### Example 3 — Normalisation of the exponential distribution

Show that $f(x) = \lambda e^{-\lambda x}$ on $[0, \infty)$ is normalised.

**Solution.** Compute:

$$\int_0^\infty \lambda e^{-\lambda x}\, dx = \lambda \lim_{b \to \infty} \int_0^b e^{-\lambda x}\, dx = \lambda \lim_{b \to \infty} \left[-\frac{1}{\lambda} e^{-\lambda x}\right]_0^b = \lim_{b \to \infty} (1 - e^{-\lambda b}) = 1.$$

The exponential distribution is normalised. ✓

## Common Misconceptions

- **"Improper integrals are exotic."** They are the standard tool for any integral over an infinite domain, including probability (total probability = 1), statistics (means and variances), and physics (partition functions, total energy, total charge).
- **"Partial fractions work for any rational function."** Only proper rational functions, where the degree of the numerator is less than the degree of the denominator. If the degree is too high, perform long division first.
- **"Convergence is always obvious."** Some improper integrals converge conditionally (e.g. $\int_1^\infty \sin(x^2)\, dx$ converges even though the integrand does not have a definite sign).
- **"A probability density must be bounded."** No. The Cauchy density $f(x) = 1/[\pi(1 + x^2)]$ is unbounded at $x = \pm \infty$ in a sense but is still a valid density.
- **"$\int f = 1$ for any density."** Only if the integral converges. Some densities (e.g. the Pareto distribution with shape parameter $\le 1$) are not normalisable.

## Connections

- Improper integrals are the natural setting for probability theory and statistics.
- Partial fractions connect rational functions to the elementary integrals.
- The Gaussian integral is the basis of the normal distribution, the heat kernel, and the ground state of the harmonic oscillator.
- The Maxwell–Boltzmann speed distribution and other statistical-mechanical distributions are evaluated by Gaussian integrals.
- The convergence of improper integrals is the gateway to the theory of Fourier transforms, Laplace transforms, and the special functions of mathematical physics.

## Quick Check

1. Determine whether $\int_1^\infty dx/x^2$ converges. Compute the value if it does.
2. Decompose $\frac{1}{x^2 - 1}$ into partial fractions.
3. Compute $\int \frac{dx}{x^2 - 1}$.
4. Show that $f(x) = (1/2) e^{-|x|}$ is a normalised probability density.
5. Determine whether $\int_0^\infty \sin(x^2)\, dx$ converges. (Hint: the Fresnel integral.)

## Takeaway

- Improper integrals are limits of proper integrals; convergence depends on the integrand's decay or the nature of its singularity.
- Comparison and ratio tests determine convergence in many cases.
- Partial fractions decompose rational functions into pieces that integrate by elementary rules.
- Probability densities require normalisation; the integral over the entire domain must equal 1.
- The Gaussian integral, the exponential integral, and the Fresnel integral are the canonical convergent improper integrals.
- Physics applications include partition functions, expected values, and total energy or charge.
