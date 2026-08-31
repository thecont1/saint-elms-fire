***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-4
semesterName: Semester 4
subjectId: computational-methods
subjectName: Computational Methods
courseId: numerical-methods
courseName: Numerical Methods
moduleId: numerical-methods-module-2
moduleName: Numerical Calculus
lessonId: numerical-methods-m2-l3
lessonName: Gaussian Quadrature and Composite Rules
lessonNumber: 6
moduleNumber: 2
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - numerical-methods-m2-l2
learningObjectives:
  - Describe the idea of Gaussian quadrature.
  - State the Gauss–Legendre nodes and weights.
  - Explain why Gaussian quadrature is more accurate than Newton–Cotes.
  - Apply Gaussian quadrature to compute integrals.
concepts:
  - Gaussian quadrature
  - Gauss–Legendre nodes
  - Orthogonal polynomials
  - Degree of precision
  - Error of Gaussian quadrature
  - Gauss–Hermite, Gauss–Laguerre, Gauss–Chebyshev
tags:
  - computational-methods
  - numerical-analysis
  - gaussian-quadrature
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# Gaussian Quadrature and Composite Rules

## Overview
Newton–Cotes rules (trapezoidal, Simpson's) use equally spaced nodes, which is convenient but not optimal. *Gaussian quadrature* chooses the nodes and weights to maximise the degree of precision — the rule is exact for all polynomials up to a certain degree. With $n$ nodes, Gauss–Legendre quadrature is exact for polynomials up to degree $2n - 1$, doubling the precision of Newton–Cotes for the same number of function evaluations. This lesson develops the theory, the construction, the standard variants (Gauss–Legendre, Gauss–Hermite, Gauss–Laguerre), and the practical use of Gaussian quadrature.

## Learning Path
- What you should already know: polynomial interpolation, the trapezoidal and Simpson's rules, the concept of degree of precision.
- What this lesson adds: the construction and use of optimal-accuracy quadrature rules.
- What it unlocks: efficient numerical integration in physics and engineering, with the same number of function evaluations giving far more accuracy.

## Core Explanation
**The problem.** Approximate $I = \int_a^b w(x) f(x)\, dx$ as $\sum_{i=1}^n w_i f(x_i)$, where $w(x)$ is a positive weight function on $[a, b]$. We want to choose the nodes $x_i$ and weights $w_i$ to maximise the degree of precision.

**Newton–Cotes rules.** Use equally spaced nodes. With $n$ nodes, exact for polynomials up to degree $n$ (composite trapezoidal $d = 1$, composite Simpson $d = 3$, etc., depending on the panel count). The degrees of precision grow linearly.

**Gaussian quadrature idea.** Choose both the nodes and the weights to maximise the degree of precision. With $n$ nodes, we have $2 n$ parameters (the $x_i$ and the $w_i$), so we can hope for degree of precision $2 n - 1$.

**Gauss–Legendre quadrature.** $w(x) = 1$ on $[-1, 1]$ (and extend to $[a, b]$ by change of variables). The nodes are the roots of the $n$-th Legendre polynomial $P_n(x)$, and the weights are determined by requiring the rule to be exact for polynomials up to degree $2n - 1$.

**Legendre polynomials.** $P_0 = 1$, $P_1 = x$, $P_2 = (3x^2 - 1)/2$, $P_3 = (5x^3 - 3x)/2$, $P_4 = (35 x^4 - 30 x^2 + 3)/8$, and so on. They are orthogonal on $[-1, 1]$ with weight $1$: $\int_{-1}^1 P_n(x) P_m(x) dx = 0$ for $n \ne m$.

**Construction.** The Gaussian nodes for $[-1, 1]$ are the zeros of $P_n$. They are in $(-1, 1)$, simple, and symmetric about $0$. The weights are

$$w_i = \frac{2}{[P_n'(x_i)]^2 (1 - x_i^2)} \quad \text{or} \quad w_i = \frac{2(1 - x_i^2)}{[n P_{n-1}(x_i)]^2}.$$

**Tabulated nodes and weights.** For small $n$, the nodes and weights are tabulated:
- $n = 1$: $x_1 = 0$, $w_1 = 2$.
- $n = 2$: $x = \pm 1/\sqrt{3}$, $w = 1$ each.
- $n = 3$: $x = 0, \pm\sqrt{3/5}$, $w = 8/9, 5/9, 5/9$.
- $n = 4$: $x = \pm\sqrt{(3/7) - (2/7)\sqrt{6/5}}, \pm\sqrt{(3/7) + (2/7)\sqrt{6/5}}$, with weights computed from the formula.
- $n = 5$: $x = 0, \pm\tfrac{1}{3}\sqrt{5 - 2\sqrt{10/7}}, \pm\tfrac{1}{3}\sqrt{5 + 2\sqrt{10/7}}$, with weights $128/225, \ldots$.

**General interval $[a, b]$.** Change of variable: $x = (b - a) t/2 + (a + b)/2$ transforms $[-1, 1]$ to $[a, b]$. The integral becomes

$$\int_a^b f(x) dx = \frac{b - a}{2} \int_{-1}^1 f\left(\frac{b - a}{2} t + \frac{a + b}{2}\right) dt \approx \frac{b - a}{2} \sum_{i=1}^n w_i f(x_i),$$

where $x_i = (b - a) t_i/2 + (a + b)/2$.

**Error of Gauss–Legendre.** For $f$ with $2n$ continuous derivatives, the error is

$$E_n = \frac{(b - a)^{2n+1} (n!)^4}{(2n + 1)[(2n)!]^3} f^{(2n)}(\xi),$$

for some $\xi \in (a, b)$. This is the smallest possible error for a rule with $n$ nodes, in the sense of the highest degree of precision.

**Gauss–Hermite quadrature.** Weight $w(x) = e^{-x^2}$ on $(-\infty, \infty)$. Nodes: roots of the Hermite polynomial $H_n(x)$. Used for integrals of the form $\int_{-\infty}^\infty e^{-x^2} f(x) dx$ (e.g. expectation values in the Gaussian distribution, harmonic oscillator wavefunctions).

**Gauss–Laguerre quadrature.** Weight $w(x) = e^{-x}$ on $[0, \infty)$. Nodes: roots of the Laguerre polynomial $L_n(x)$. Used for $\int_0^\infty e^{-x} f(x) dx$ (e.g. radial integrals in quantum mechanics).

**Gauss–Chebyshev quadrature.** Weight $w(x) = 1/\sqrt{1 - x^2}$ on $[-1, 1]$. Nodes: $x_i = \cos((2i - 1)\pi/(2 n))$ (the zeros of $T_n(x) = \cos(n \arccos x)$). Weights: $w_i = \pi/n$ (all equal). Used for special functions and FFTs.

**Gauss–Jacobi quadrature.** Weight $w(x) = (1 - x)^\alpha (1 + x)^\beta$ on $[-1, 1]$. Nodes: roots of the Jacobi polynomial $P_n^{(\alpha, \beta)}(x)$. Used for $\int_{-1}^1 (1 - x)^\alpha (1 + x)^\beta f(x) dx$.

**Golub–Welsch algorithm.** Computes Gauss–Legendre nodes and weights via the eigenvalue problem of the tridiagonal Jacobi matrix for the orthogonal polynomials. Efficient ($O(n^2)$) and numerically stable. Standard in libraries.

**Gauss–Radau and Gauss–Lobatto.** Variants where one or both endpoints are fixed as nodes. Useful when $f$ or $f'$ is known at the endpoints.

**Convergence.** For smooth $f$, Gaussian quadrature converges *very* fast. The error depends on the smoothness of $f$ via the derivatives; for analytic $f$, the error is exponentially small in $n$.

**Comparison with Newton–Cotes.** With $n = 4$ function evaluations:
- Composite trapezoidal: $O(h^2)$ with 3 panels = $O(1/9) \approx 0.11$.
- Composite Simpson's: $O(h^4)$ with 4 panels = $O(1/81) \approx 0.012$.
- Gauss–Legendre: $O(1/n^4)$ in some sense, exact for cubics, $\approx 10^{-4}$ or better.

Gaussian quadrature is much more efficient.

**Choice of $n$.** Increase $n$ until the change from $n$ to $n + 1$ is below the tolerance. Adaptive Gauss–Legendre implementations (e.g. in QUADPACK) refine $n$ automatically.

**Multidimensional Gaussian quadrature.** Tensor product of 1D rules. Cost grows as $n^d$ for $d$ dimensions. For moderate $d$, this is practical; for high $d$, use Monte Carlo (next lesson).

**Sparse grids.** A technique for high-dimensional integration: use a sparse subset of the tensor-product grid, with error comparable to the full grid but much cheaper. Smolyak's algorithm.

**Applications in physics.**
- Expectation values in quantum mechanics: $\int \psi^* A \psi$ over a non-separable region.
- Cross-sections: $\int |M|^2 d\Phi$ over multi-particle phase space.
- Field theory: vacuum expectation values, effective actions.
- Molecular integrals: $\int \phi_1(x) \phi_2(x) \phi_3(x) d^3 x$ (Hartree–Fock, etc.).
- Statistical mechanics: partition functions.

**Trapezoidal vs. Gaussian for periodic functions.** For periodic $f$ on $[0, 2\pi]$, the trapezoidal rule is *spectrally accurate* (it converges faster than any polynomial rate). This is the basis of many FFT-based methods. Gaussian quadrature is competitive but not better than trapezoidal for periodic functions.

**Computing the nodes and weights.** For small $n$, use tables. For large $n$, use the Golub–Welsch algorithm or a black-box routine in your numerical library.

**Adaptive Gauss–Legendre.** Apply Gauss–Legendre on subintervals; refine where the error estimate (using the difference between $n$ and $2n$ point rules) is large. The standard `quad` routine in QUADPACK does this.

**Stiffness and adaptive quadrature.** For integrands with sharp peaks, the adaptive algorithm concentrates the function evaluations where they are needed. For oscillatory integrands, special methods (Filon, Levin) are better.

**Orthogonal polynomials as a tool.** The nodes of Gaussian quadrature are zeros of orthogonal polynomials. The weights are computable from the polynomial values. The theory generalises: any positive weight function on an interval gives a Gaussian quadrature with respect to that weight.

**Moment problems.** Given moments $\mu_k = \int w(x) x^k dx$, the orthogonal polynomial theory gives a way to recover the quadrature. Used in stochastic computing, where the moments of a random variable determine a Gaussian quadrature approximation.

**Why Gaussian quadrature works.** The error for a polynomial of degree $2n - 1$ is zero (the rule is exact). For other functions, the error involves $f^{(2n)}$, which is bounded for smooth $f$. Higher smoothness (analytic functions) gives even faster convergence.

**Orthogonal polynomials.** The theory of orthogonal polynomials — Legendre, Hermite, Laguerre, Chebyshev, Jacobi — is the mathematical foundation of Gaussian quadrature. Each family has a three-term recurrence, orthogonality, and explicit formulas.

**Christoffel–Darboux formula.** A closed form for the sum of orthogonal polynomials, useful in error analysis and in the construction of Gaussian quadrature.

**Error estimation.** Compare Gauss–Legendre with $n$ and $2 n$ nodes. If $|I_n - I_{2n}|$ is below the tolerance, accept. Otherwise, refine.

**Asymptotic behaviour.** For smooth $f$, Gauss–Legendre error $\sim C \cdot e^{-c n}$ (exponential in $n$). The constant $c$ depends on the analyticity of $f$.

**For singular integrands.** Gaussian quadrature can handle integrable singularities by using Gauss–Jacobi with the singularity built into the weight. Or by change of variables to remove the singularity.

**Probability and statistics.** Expectation values with respect to a distribution are integrals with the PDF as the weight. Gaussian quadrature with the PDF's orthogonal polynomials gives the optimal approximation.

**Quantum chemistry.** Gaussian-orbital basis sets (the name is a coincidence) are used in electronic-structure calculations. Integrals over products of Gaussians are computed analytically, with high efficiency.

**Monte Carlo for high dimensions.** When $d$ is large (say $> 10$), the tensor product of 1D rules has too many points. Monte Carlo methods (next lesson) are the practical choice.

**Sparse quadrature.** For moderate $d$ (say $5$–$20$), sparse-grid Gaussian quadrature is more efficient than the tensor product. Implemented in many libraries.

## Key Ideas
- Gaussian quadrature optimises nodes and weights.
- Gauss–Legendre: nodes = roots of Legendre polynomial, exact for degree $2n - 1$.
- Gauss–Hermite, Gauss–Laguerre, Gauss–Chebyshev, Gauss–Jacobi for other weight functions.
- Errors decrease very fast (exponentially for analytic integrands).
- Best choice for smooth integrands in low dimensions.

## Worked Examples
**Example 1 — 2-point Gauss–Legendre.** $I = \int_{-1}^1 e^x dx = e - e^{-1} \approx 2.3504$. $I_2 = 1 \cdot e^{-1/\sqrt{3}} + 1 \cdot e^{1/\sqrt{3}} = 2 e^{1/\sqrt{3}} \approx 2.3427$. Error: $0.008$.

**Example 2 — 3-point Gauss–Legendre.** $I_3 = (5/9) e^{-\sqrt{3/5}} + (8/9) e^0 + (5/9) e^{\sqrt{3/5}} = (5/9)(0.6988) + (8/9)(1) + (5/9)(1.4311) = 0.3883 + 0.8889 + 0.7951 = 2.0723$. Wait, this is much less accurate than 2-point. Let me recompute: $e^{-\sqrt{3/5}} = e^{-0.7746} = 0.4610$, $e^{\sqrt{3/5}} = e^{0.7746} = 2.1696$. $I_3 = (5/9)(0.4610) + (8/9)(1) + (5/9)(2.1696) = 0.2561 + 0.8889 + 1.2053 = 2.3503$. Error: $0.0001$. Excellent! ✓ (I had a wrong value for $e^{-\sqrt{3/5}}$ earlier.)

**Example 3 — Gauss–Hermite.** $I = \int_{-\infty}^\infty e^{-x^2} dx = \sqrt{\pi}$. 2-point Gauss–Hermite: $I_2 = (1) e^{-(-\sqrt{1/2})^2} + (1) e^{-(\sqrt{1/2})^2}$... wait, the formula is $I \approx w_1 f(x_1) + w_2 f(x_2)$ with $x_1 = -1/\sqrt{2}$, $x_2 = 1/\sqrt{2}$, $w_1 = w_2 = \sqrt{\pi}/2$? Actually for Gauss–Hermite, the rule is $\int e^{-x^2} f(x) dx \approx \sum w_i f(x_i)$ with the standard $w_i$. For $n = 2$: $x = \pm 1/\sqrt{2}$, $w = \sqrt{\pi}/2$ each. So $I_2 = (\sqrt{\pi}/2)(2) = \sqrt{\pi}$. Exact! (Hermite quadrature with $n$ points is exact for polynomials of degree $2n - 1$.)

**Example 4 — Gauss–Laguerre.** $I = \int_0^\infty e^{-x} \cos x\, dx = 1/2$. 2-point Gauss–Laguerre: $x_1 \approx 0.5858$, $x_2 \approx 3.4142$, $w_1 \approx 0.8536$, $w_2 \approx 0.1464$. $I_2 = 0.8536 \cos(0.5858) + 0.1464 \cos(3.4142) = 0.8536 \times 0.8344 + 0.1464 \times (-0.9550) = 0.7123 - 0.1398 = 0.5725$. Hmm, expected $0.5$, error $0.07$. With more points, much more accurate.

## Common Misconceptions
- **"Gauss–Legendre is exact for all polynomials."** It is exact only for degree $\le 2n - 1$ (with $n$ nodes). For higher-degree polynomials, there is an error.
- **"More nodes is always better."** Yes for Gaussian quadrature, but the gain is rapid then saturates. Eventually round-off or lack of smoothness dominates.
- **"Gaussian quadrature is for $[-1, 1]$ only."** Change of variable extends it to any interval, and other variants handle different weights.
- **"The weights are easy to derive."** For $n > 2$, the weights are computed by the Golub–Welsch algorithm or looked up in tables.

## Connections
Gaussian quadrature is the foundation of efficient numerical integration. The orthogonal-polynomial theory is the basis of many approximation schemes (Chebyshev interpolation, spectral methods). Sparse grids and Smolyak's algorithm extend the ideas to moderate dimensions. Monte Carlo is the practical choice for high dimensions.

## Quick Check
1. State the Gauss–Legendre nodes and weights for $n = 2$.
2. What is the degree of precision of $n$-point Gaussian quadrature?
3. State the change of variable for Gauss–Legendre on $[a, b]$.
4. Give the weight function for Gauss–Hermite quadrature.
5. Why is Gaussian quadrature more efficient than Newton–Cotes?

## Takeaway
- Gaussian quadrature optimises nodes and weights.
- Gauss–Legendre: exact for degree $2n - 1$ with $n$ nodes.
- Nodes: roots of Legendre polynomial; weights: standard formulas.
- Gauss–Hermite, Gauss–Laguerre for different weights.
- Errors decrease exponentially for analytic integrands.
