***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: advanced-numerical-methods
courseName: Advanced Numerical Methods (Math Elective I, A)
moduleId: advanced-numerical-methods-module-1
moduleName: Error, Stability and Nonlinear Systems
lessonId: advanced-numerical-methods-m1-l1
lessonName: Floating-Point Arithmetic, Conditioning and Backward Error
lessonNumber: 1
moduleNumber: 1
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 1
prerequisites:
  - numerical-methods-m2-l1
  - mathematics-lab-using-python-ii-m1-l1
learningObjectives:
  - Describe the IEEE 754 double-precision format and bound the relative rounding error of a single operation by the unit round-off $u = 2^{-53}$.
  - Compute the relative condition number $\kappa = |x f'(x)/f(x)|$ of a scalar problem and the condition number $\kappa(A) = \|A\|\,\|A^{-1}\|$ of a linear system.
  - Distinguish forward error from backward error and apply the rule of thumb forward error $\lesssim \kappa \times$ backward error.
  - Recognise catastrophic cancellation and rewrite an expression to avoid it.
concepts:
  - IEEE 754 double precision
  - Unit round-off
  - Catastrophic cancellation
  - Relative condition number
  - Backward error
  - Backward stability
  - Matrix condition number
tags:
  - mathematics
  - advanced-numerical-methods
  - floating-point
  - conditioning
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - computational
***

# Floating-Point Arithmetic, Conditioning and Backward Error

## Overview

Every method in this course runs on a machine that rounds after every operation. Numerical Methods treated truncation error; this lesson treats rounding error and separates the fault of the problem from that of the algorithm. We describe IEEE 754 double precision and the standard model, giving the unit round-off $u \approx 1.1 \times 10^{-16}$; define the condition number and show that subtracting nearly equal numbers is the archetypal ill-conditioned operation; and introduce backward error, with forward error bounded by condition number times backward error, the inequality that organises the rest of the course.

## Learning Path

- **What you should already know**: truncation error and the order of a finite-difference formula (Numerical Methods, Lesson m2-l1); the matrix condition number in NumPy (Mathematics Lab using Python II, Lesson m1-l1); Taylor's theorem with remainder (Real Analysis, Lesson m2-l3).
- **What this lesson adds**: the standard model $fl(x \circ y) = (x \circ y)(1 + \delta)$, $|\delta| \le u$; condition numbers; forward and backward error and stability; avoiding cancellation.
- **What later lessons this will unlock**: Newton stopping tests (Lesson m1-l2); ODE stability (Lesson m1-l3); stable Householder QR (Lesson m2-l2); least-squares conditioning (Lesson m3-l3).

## Core Explanation

### The floating-point number system

A normalised binary floating-point number has the form

$$x = \pm\,(1.b_1 b_2 \ldots b_{p-1})_2 \times 2^{e},$$

with **precision** $p$ (significand bits including the implicit 1) and bounded exponent $e$. IEEE 754 double precision (Python `float`, NumPy `float64`) uses 1 sign bit, 11 exponent bits and 52 fraction bits, so $p = 53$ and $-1022 \le e \le 1023$. The largest double is about $1.8 \times 10^{308}$, the smallest normalised one $2^{-1022} \approx 2.2 \times 10^{-308}$, with subnormals below.

The spacing of doubles in $[2^e, 2^{e+1})$ is $2^{e-52}$, proportional to magnitude. The **machine epsilon** is the spacing just above 1,

$$\varepsilon_{\text{mach}} = 2^{-52} \approx 2.22 \times 10^{-16},$$

and the **unit round-off** is half of it, $u = 2^{-53} \approx 1.11 \times 10^{-16}$, since rounding to nearest errs by at most half a spacing. Because the spacing is relative,

$$fl(x) = x(1 + \delta), \qquad |\delta| \le u.$$

Most decimal fractions are not representable: $0.1$ is stored as $0.1000000000000000055511\ldots$, so `0.1 + 0.2 == 0.3` is `False` after three roundings.

### The standard model of arithmetic

IEEE 754 requires the four basic operations and the square root to be **correctly rounded**, which gives the **standard model**

$$fl(x \circ y) = (x \circ y)(1 + \delta), \qquad |\delta| \le u, \qquad \circ \in \{+, -, \times, /\},$$

valid without overflow or underflow. Applying it repeatedly, the recursive sum $s_n = \sum_{i=1}^{n} x_i$ satisfies

$$\hat{s}_n = \sum_{i=1}^{n} x_i (1 + \theta_i), \qquad |\theta_i| \le (n - 1) u + O(u^2),$$

so a sum of positive terms has relative error at most about $(n-1)u$, while a mixed-sign sum can do far worse when the true sum is much smaller than its terms. It also explains why `(a + b) + c` and `a + (b + c)` can differ: addition is not associative.

### Catastrophic cancellation

Subtracting numbers within a factor of 2 is exact (Sterbenz's lemma), yet it is the most dangerous operation, because it exposes rounding errors already in the operands. If $\hat{a} = a(1 + \delta_a)$ and $\hat{b} = b(1 + \delta_b)$, then

$$\frac{(\hat{a} - \hat{b}) - (a - b)}{a - b} = \frac{a \delta_a - b \delta_b}{a - b},$$

and the denominator is small precisely when $a \approx b$. The correct leading digits cancel and the noise survives: **catastrophic cancellation**.

For $f(x) = (1 - \cos x)/x^2 \to 1/2$ at $x = 10^{-4}$, $\cos x = 1 - 5 \times 10^{-9}$ is stored to $u$, but $1 - \cos x$ keeps about eight digits and the quotient has relative error near $5 \times 10^{-9}$. The equivalent $2\sin^2(x/2)/x^2$ is accurate to the last bit. Likewise the root $(-b + \sqrt{b^2 - 4ac})/2a$ with $b > 0$ should be computed as $2c/(-b - \sqrt{b^2 - 4ac})$, and $e^x - 1$, $\ln(1 + x)$ and $\sqrt{x + 1} - \sqrt{x}$ each have a standard rewriting.

### Conditioning of a problem

Conditioning belongs to the problem, not the algorithm. The **relative condition number** of $f$ at $x$ is the ratio of relative output change to relative input change:

$$\kappa_f(x) = \lim_{\delta \to 0} \frac{|f(x + \delta x) - f(x)|/|f(x)|}{|\delta|} = \left| \frac{x f'(x)}{f(x)} \right|.$$

For $\sqrt{x}$, $\kappa = 1/2$; for $e^x$, $\kappa = |x|$; for $x - c$, $\kappa = |x|/|x - c|$, which blows up as $x \to c$: cancellation as ill-conditioning. Perturbing both inputs of $x - y$ in the worst direction gives

$$\kappa = \frac{|x| + |y|}{|x - y|}.$$

For $Ax = b$, perturbing $b$ gives $\delta x = A^{-1}\delta b$, and with $\|b\| \le \|A\|\,\|x\|$,

$$\frac{\|\delta x\|}{\|x\|} \le \|A\|\,\|A^{-1}\| \frac{\|\delta b\|}{\|b\|} = \kappa(A) \frac{\|\delta b\|}{\|b\|}.$$

The **matrix condition number** $\kappa(A) = \|A\|\,\|A^{-1}\| \ge 1$ equals $\sigma_{\max}/\sigma_{\min}$ in the 2-norm, and perturbing $A$ gives the same factor to first order. About $\log_{10}\kappa(A)$ digits are lost: with $\kappa = 10^{10}$ and data accurate to $10^{-16}$, six digits survive whatever the algorithm.

### Forward error, backward error and stability

For $y = f(x)$ and computed $\hat{y}$, the **forward error** is $|\hat{y} - y|$ and the **backward error** is the smallest relative data perturbation for which $\hat{y}$ is exact,

$$\eta(\hat{y}) = \min \{ |\Delta x|/|x| : f(x + \Delta x) = \hat{y} \}.$$

It asks "for which problem is this the right answer?". To first order the two satisfy the central inequality of this lesson:

$$\text{forward error} \lesssim \kappa \times \text{backward error}.$$

An algorithm is **backward stable** if its backward error is always a small multiple of $u$. On an ill-conditioned problem it still gives a large forward error, but the fault is the problem's. Gaussian elimination with partial pivoting, Householder QR and the standard eigenvalue algorithms are backward stable in practice.

For a linear system the natural backward error is the **normwise relative residual**

$$\eta(\hat{x}) = \frac{\|b - A\hat{x}\|}{\|A\|\,\|\hat{x}\|},$$

which by the Rigal–Gaches theorem is exactly the smallest relative perturbation of $A$ making $\hat{x}$ exact. A small residual guarantees small backward error, not small forward error; the iterative solvers of Module 3 stop on the residual, and results should be reported with $\kappa$.

The script shows the unit round-off, cancellation in $(1 - \cos x)/x^2$, and backward versus forward error for a Hilbert system. Expect the naive formula to lose about eight digits and the Hilbert forward error to approach $\kappa$ times a backward error of order $u$.

```python
import numpy as np
from scipy.linalg import hilbert

print("machine epsilon", np.finfo(float).eps, "unit round-off", np.finfo(float).eps / 2)
print("0.1 + 0.2 == 0.3 ?", 0.1 + 0.2 == 0.3, repr(0.1 + 0.2))

x = 1e-4
naive = (1 - np.cos(x)) / x**2            # catastrophic cancellation
stable = 2 * np.sin(x / 2)**2 / x**2      # algebraically identical, no cancellation
exact = 0.5 - x**2 / 24 + x**4 / 720      # Taylor series, accurate to O(x^6)
print("relative error, naive  :", abs(naive - exact) / exact)
print("relative error, stable :", abs(stable - exact) / exact)

n = 8
H = hilbert(n)                            # H[i, j] = 1 / (i + j + 1), notoriously ill-conditioned
x_true = np.ones(n)
b = H @ x_true
x_hat = np.linalg.solve(H, b)
residual = b - H @ x_hat
kappa = np.linalg.cond(H)
backward = np.linalg.norm(residual) / (np.linalg.norm(H) * np.linalg.norm(x_hat))
forward = np.linalg.norm(x_hat - x_true) / np.linalg.norm(x_true)
print(f"kappa(H) = {kappa:.2e}, backward error = {backward:.2e}, forward error = {forward:.2e}")
print(f"kappa * backward = {kappa * backward:.2e}  (an upper bound on the forward error)")
```

### Designing for accuracy

Three habits follow: rearrange to avoid subtracting nearly equal quantities; prefer backward stable algorithms, or estimate backward error from a residual; and know $\kappa$ before trusting digits, since a 16-digit printout from a $\kappa = 10^{12}$ problem has four good ones.

## Key Ideas

- **Double precision**: $p = 53$; $\varepsilon_{\text{mach}} = 2^{-52}$, $u = 2^{-53} \approx 1.1 \times 10^{-16}$.
- **Standard model**: $fl(x \circ y) = (x \circ y)(1 + \delta)$, $|\delta| \le u$; positive sums err by at most about $(n-1)u$.
- **Cancellation** exposes existing rounding errors; cure it by rewriting.
- **Condition numbers**: $\kappa_f(x) = |x f'(x)/f(x)|$; $\kappa(A) = \|A\|\,\|A^{-1}\| = \sigma_{\max}/\sigma_{\min}$; $\log_{10}\kappa$ digits are lost.
- **Backward error**: for $Ax = b$, $\|b - A\hat{x}\|/(\|A\|\,\|\hat{x}\|)$.
- **Fundamental inequality**: forward error $\lesssim \kappa \times$ backward error; backward stable means backward error $O(u)$.

## Worked Examples

### Example 1 — Digits lost to cancellation

Estimate the relative error of $(1 - \cos x)/x^2$ in double precision at $x = 10^{-4}$, and confirm that $2\sin^2(x/2)/x^2$ is accurate.

**Solution.** The stored $\cos x$ has absolute error about $u = 1.1 \times 10^{-16}$, and $1 - \cos x = x^2/2 - x^4/24 \approx 5.0 \times 10^{-9}$, so the difference has relative error about

$$\frac{1.1 \times 10^{-16}}{5 \times 10^{-9}} \approx 2 \times 10^{-8}.$$

Dividing by $x^2$ keeps it. The computed $0.49999999696\ldots$ against the true $0.49999999958\ldots$ has relative error $5.2 \times 10^{-9}$, consistent with the estimate: eight of sixteen digits lost. In the rewritten form, $\sin(x/2)$ has relative error $u$, squaring doubles it, and the quotient is good to about $3u$; observed, $1.1 \times 10^{-16}$.

### Example 2 — Condition number of a subtraction

Find the relative condition number of $f(x, y) = x - y$ at $x = 1.000001$, $y = 1$, and interpret it.

**Solution.** Perturbing both inputs, $f(x(1 + \delta_x), y(1 + \delta_y)) - f(x, y) = x\delta_x - y\delta_y$, of magnitude at most $(|x| + |y|)\max(|\delta_x|, |\delta_y|)$. Dividing by $|x - y|$,

$$\kappa = \frac{|x| + |y|}{|x - y|} = \frac{2.000001}{10^{-6}} \approx 2.0 \times 10^{6}.$$

With inputs exact to $u$, the result has relative error up to $2 \times 10^6 \times 1.1 \times 10^{-16} \approx 2.2 \times 10^{-10}$: six digits lost, ten left. With inputs measured to $10^{-7}$, $\kappa \times 10^{-7} = 0.2$ and the difference is meaningless.

### Example 3 — Backward and forward error for a Hilbert system

The $8 \times 8$ Hilbert matrix $H_{ij} = 1/(i + j - 1)$ has $\kappa_2(H) \approx 1.5 \times 10^{10}$. Solving $Hx = b$ with $b = H\mathbf{1}$ by LU with partial pivoting gives $\|b - H\hat{x}\|/(\|H\|\,\|\hat{x}\|) = 8.5 \times 10^{-17}$. Bound the forward error and compare with the observed $6.2 \times 10^{-8}$.

**Solution.** The scaled residual is the backward error and is below $u$: $\hat{x}$ solves $(H + \Delta H)x = b$ exactly with $\|\Delta H\|/\|H\| \le 8.5 \times 10^{-17}$. The fundamental inequality gives

$$\frac{\|\hat{x} - x\|}{\|x\|} \lesssim \kappa(H) \times \eta = 1.5 \times 10^{10} \times 8.5 \times 10^{-17} \approx 1.3 \times 10^{-6}.$$

The observed $6.2 \times 10^{-8}$ is about 20 times below the worst-case bound, as is typical. Seven or eight digits are correct, matching the $\log_{10}\kappa \approx 10$ rule to within an order of magnitude. The algorithm is blameless; the matrix is the culprit.

## Common Misconceptions

- **"Floating-point errors are random and average out."** They are deterministic and often correlated, and cancellation amplifies them systematically.
- **"If the residual is tiny, the solution is accurate."** The forward error can be $\kappa(A)$ times larger: with $\kappa \sim 10^{12}$, a $10^{-16}$ residual allows an error in the fourth digit.
- **"A better algorithm will fix ill-conditioning."** Conditioning belongs to the problem; the remedy is reformulation (rescaling, orthogonal bases) or better data.
- **"128-bit arithmetic removes cancellation problems."** It postpones them; the stable rewriting loses no digits and is cheaper.
- **"Machine epsilon is the smallest storable number."** It is the spacing near 1, about $2 \times 10^{-16}$; the smallest positive double is about $5 \times 10^{-324}$ (subnormal), three hundred orders of magnitude smaller.

## Connections

- The SVD of Linear Algebra (Lesson m3-l2) pictures ill-conditioning as the unit sphere's image collapsing towards a flat ellipsoid.
- Module 2's eigenvalue methods use Householder reflectors and Givens rotations, with $\kappa = 1$, which is why the QR algorithm is trusted for problems from Introduction to Quantum Mechanics.
- Numerical differentiation (Numerical Methods, Lesson m2-l1) trades truncation error $O(h)$ against rounding error $u/h$; the optimal forward-difference step $h \sim u^{1/2}$ follows from the standard model.
- In astrophysical $N$-body codes, cancellation in differences of nearby positions causes energy drift, so positions are stored relative to a local origin.
- In data fitting, a design matrix with $\kappa = 10^4$ gives $\kappa = 10^8$ in the normal equations, a point developed in Lesson m3-l3.

## Quick Check

1. State the standard model and the unit round-off of double precision.
2. Compute the relative condition number of $f(x) = \ln x$ and identify where it is ill-conditioned.
3. Rewrite $\sqrt{x + 1} - \sqrt{x}$ for large $x$ without cancellation.
4. A system with $\kappa(A) = 10^{8}$ is solved with backward error $3 \times 10^{-16}$. Bound the relative forward error and state how many correct digits to expect.
5. Distinguish an ill-conditioned problem from an unstable algorithm, with one example of each.

## Takeaway

- Double precision keeps about sixteen digits; each operation errs by at most $u = 2^{-53}$.
- Cancellation magnifies those errors; rewriting removes it.
- $\kappa$ measures the problem's sensitivity; $\log_{10}\kappa$ digits are lost.
- Backward error measures the algorithm; a backward stable algorithm has backward error of order $u$.
- Forward error $\lesssim \kappa \times$ backward error organises this course.
