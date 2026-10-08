***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: computational-linear-algebra
courseName: Computational Linear Algebra (Math Elective II, A)
moduleId: computational-linear-algebra-module-2
moduleName: Orthogonality, Least Squares and the SVD
lessonId: computational-linear-algebra-m2-l2
lessonName: Linear Least Squares by Normal Equations and QR
lessonNumber: 5
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - computational-linear-algebra-m2-l1
  - linear-algebra-m2-l2
  - numerical-methods-m1-l2
learningObjectives:
  - Derive the normal equations $A^\mathsf{T}Ax = A^\mathsf{T}b$ from the orthogonality of the residual and solve them by Cholesky at $mn^2 + \tfrac{1}{3}n^3$ flops.
  - Solve the same problem through the thin QR factorisation and show that $\kappa_2(A^\mathsf{T}A) = \kappa_2(A)^2$ explains the accuracy gap between the two methods.
  - State the perturbation bound for least squares in terms of $\kappa_2(A)$ and the residual angle $\theta$, and use it to estimate correct digits.
  - Recognise ill-conditioned design matrices and improve them by centring and scaling the columns.
concepts:
  - Linear least squares
  - Normal equations
  - Orthogonal projection onto the column space
  - Least squares via QR
  - Squaring of the condition number
  - Column centring and scaling
tags:
  - mathematics
  - computational-linear-algebra
  - least-squares
  - regression
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - computational
  - conceptual
***

# Linear Least Squares by Normal Equations and QR

## Overview

Fitting a model to more observations than parameters is a linear algebra problem: minimise $\|Ax - b\|_2$ over $x$ for a tall matrix $A$. Calculus gives the normal equations $A^\mathsf{T}Ax = A^\mathsf{T}b$, a square symmetric positive definite system that Cholesky solves at once. The trouble, foreshadowed in Lesson m1-l1, is that forming $A^\mathsf{T}A$ squares the condition number, so the forward error is governed by $\kappa_2(A)^2$ rather than $\kappa_2(A)$, which routinely costs ten digits. The QR factorisation of Lesson m2-l1 solves the same problem without forming $A^\mathsf{T}A$, through a triangular solve with $R$, whose condition number equals that of $A$. This lesson derives both methods, states the perturbation theory, and shows that a better-scaled design matrix often beats a better algorithm.

## Learning Path

- **What you should already know**: orthogonal projection and the least-squares idea (Linear Algebra, Lesson m2-l2); Householder QR and loss of orthogonality (Lesson m2-l1); Cholesky (Lesson m1-l3); polynomial interpolation and the Vandermonde matrix (Numerical Methods, Lesson m1-l2).
- **What this lesson adds**: the normal equations and their geometry; least squares through QR; the cost and accuracy comparison; the perturbation bound with the residual angle; centring and scaling.
- **What later lessons this will unlock**: the SVD solution and the pseudoinverse for rank-deficient problems (Lesson m2-l3); regression on large data sets by iterative and randomised methods (Lessons m3-l1 and m3-l3).

## Core Explanation

### The problem and its geometry

Let $A \in \mathbb{R}^{m \times n}$ with $m > n$ and full column rank, and $b \in \mathbb{R}^m$. The system $Ax = b$ is overdetermined and generally has no solution; the **linear least-squares problem** asks for

$$x^\ast = \arg\min_x \|Ax - b\|_2^2 .$$

Geometrically $Ax$ ranges over the column space $\mathcal{R}(A)$, and the closest point to $b$ is its **orthogonal projection** onto $\mathcal{R}(A)$. The residual $r = b - Ax^\ast$ is therefore orthogonal to every column, $A^\mathsf{T}r = 0$, which gives the **normal equations**

$$A^\mathsf{T}A\,x = A^\mathsf{T}b.$$

Since $A$ has full rank, $A^\mathsf{T}A$ is symmetric positive definite ($x^\mathsf{T}A^\mathsf{T}Ax = \|Ax\|^2 > 0$), so the solution is unique, $x^\ast = (A^\mathsf{T}A)^{-1}A^\mathsf{T}b$. If $b = Ax + \text{noise}$ with independent errors of variance $\sigma^2$, the covariance of $x^\ast$ is $\sigma^2 (A^\mathsf{T}A)^{-1}$.

### Method 1: normal equations and Cholesky

Form $C = A^\mathsf{T}A$ (symmetric, so $mn^2$ flops for one triangle) and $d = A^\mathsf{T}b$ ($2mn$), factor $C = LL^\mathsf{T}$ ($\tfrac{1}{3}n^3$), and solve two triangular systems. Total about $mn^2 + \tfrac{1}{3}n^3$ flops, the cheapest route and natural for streaming data. The defect is conditioning. The singular values of $A^\mathsf{T}A$ are $\sigma_i(A)^2$, so

$$\kappa_2(A^\mathsf{T}A) = \kappa_2(A)^2 .$$

Cholesky is backward stable, but it is backward stable for the problem $Cx = d$, whose condition number is $\kappa^2$; the computed solution has relative error of order $\kappa_2(A)^2 u$. Worse, forming $A^\mathsf{T}A$ can destroy information: if $\varepsilon^2 < u$ then $1 + \varepsilon^2$ rounds to $1$ (Example 2). They are safe when $\kappa_2(A) \lesssim 10^4$.

### Method 2: QR factorisation

Let $A = \hat Q\hat R$ be the thin QR factorisation and complete $\hat Q$ to an orthogonal $Q = [\hat Q \ \ Q_\perp]$. Since $\|Qz\|_2 = \|z\|_2$,

$$\|Ax - b\|_2^2 = \|Q^\mathsf{T}(Ax - b)\|_2^2 = \|\hat R x - \hat Q^\mathsf{T}b\|_2^2 + \|Q_\perp^\mathsf{T}b\|_2^2 .$$

The second term does not depend on $x$; the first can be made zero. Hence

$$x^\ast = \hat R^{-1}\hat Q^\mathsf{T}b, \qquad \|r\|_2 = \|Q_\perp^\mathsf{T}b\|_2 .$$

The cost is $2mn^2 - \tfrac{2}{3}n^3$ flops, about twice the normal equations when $m \gg n$. In exchange, $\kappa_2(\hat R) = \kappa_2(A)$: nothing has been squared. Householder QR is backward stable for least squares, so the forward error is governed by the conditioning of the problem itself. The normal equations are also recovered from QR, $A^\mathsf{T}A = \hat R^\mathsf{T}\hat R$, so $\hat R$ is the Cholesky factor of $A^\mathsf{T}A$ computed without forming it.

### How well conditioned is least squares?

Let $\theta$ be the angle between $b$ and the column space, $\sin\theta = \|r\|_2/\|b\|_2$. If $A$ and $b$ are perturbed by relative amounts $\varepsilon$, the solution changes by

$$\frac{\|\delta x\|_2}{\|x\|_2} \lesssim \Big(\frac{\kappa_2(A)}{\cos\theta} + \kappa_2(A)^2 \tan\theta\Big)\varepsilon .$$

For a problem that fits well, $\theta$ is small and the sensitivity is essentially $\kappa_2(A)$; for a poor fit the $\kappa^2\tan\theta$ term appears for any algorithm, because a large residual rotated slightly moves the projection a lot. The normal equations lose $\kappa^2 u$ regardless of $\theta$; QR loses $\kappa u$ when the residual is small and only pays $\kappa^2$ when the problem itself does. The table summarises the comparison.

| | Normal equations | Householder QR |
|---|---|---|
| Flops ($m \gg n$) | $mn^2 + \tfrac{1}{3}n^3$ | $2mn^2 - \tfrac{2}{3}n^3$ |
| Forward error | $\sim \kappa^2 u$ always | $\sim (\kappa + \kappa^2\tan\theta)\,u$ |
| Fails when | $\kappa \gtrsim 10^8$ ($A^\mathsf{T}A$ singular in fl) | $\kappa \gtrsim 10^{16}$ |

### Conditioning is a modelling choice

The condition number of a design matrix depends on the basis chosen for the model. Fitting a straight line to measurements at years $t = 2000, \dots, 2010$ with columns $(1, t)$ gives two nearly parallel columns and $\kappa_2(A) \approx 10^6$ (Example 3); writing the model in $s = t - 2005$ makes the columns orthogonal and $\kappa_2 \approx 3$. Monomials on $[0, 1]$ give a Vandermonde matrix with $\kappa_2$ growing exponentially in the degree; Chebyshev polynomials on $[-1, 1]$ keep it small. The rules are: centre each column, scale columns to unit norm, and prefer orthogonal polynomials to monomials. They leave the fitted values untouched and cost nothing. Measurements of unequal variance are handled by scaling the rows of $A$ and $b$ by $W^{1/2}$ first.

```python
import numpy as np
from scipy.linalg import solve_triangular, cho_factor, cho_solve

t = np.linspace(2000, 2010, 11)
x_true = np.array([-4000.0, 2.0])                     # y = -4000 + 2 t exactly
for name, col in [("uncentred", t), ("centred", t - t.mean())]:
    A = np.column_stack([np.ones_like(t), col])
    x_exact = x_true if name == "uncentred" else np.array([10.0, 2.0])
    b = A @ x_exact                                   # zero residual, theta = 0
    Q, R = np.linalg.qr(A)                            # Householder, 2mn^2 flops
    x_qr = solve_triangular(R, Q.T @ b)
    x_ne = cho_solve(cho_factor(A.T @ A), A.T @ b)    # normal equations, mn^2 flops
    err = lambda x: np.linalg.norm(x - x_exact) / np.linalg.norm(x_exact)
    print(f"{name:10s} kappa={np.linalg.cond(A):.1e}  QR err={err(x_qr):.1e}  NE err={err(x_ne):.1e}")
# uncentred: kappa 1.3e6, QR err ~1e-11, NE err ~1e-5;  centred: kappa 3.2, both ~1e-16
```

## Key Ideas

- **Least squares is projection**: the residual is orthogonal to the column space, giving $A^\mathsf{T}Ax = A^\mathsf{T}b$ with $A^\mathsf{T}A$ SPD.
- **Normal equations**: cheapest at $mn^2 + \tfrac{1}{3}n^3$ flops, but $\kappa_2(A^\mathsf{T}A) = \kappa_2(A)^2$, so the error is $\kappa^2 u$ and $A^\mathsf{T}A$ can be numerically singular when $A$ is not.
- **QR**: $x = \hat R^{-1}\hat Q^\mathsf{T}b$ at $2mn^2 - \tfrac{2}{3}n^3$ flops with $\kappa_2(\hat R) = \kappa_2(A)$; Householder QR is backward stable for least squares.
- **Sensitivity**: $\|\delta x\|/\|x\| \lesssim (\kappa/\cos\theta + \kappa^2\tan\theta)\varepsilon$; a large residual brings in $\kappa^2$ for any method.
- **Fix the basis first**: centring, scaling and orthogonal polynomials reduce $\kappa$ by orders of magnitude at no cost.

## Worked Examples

### Example 1 — A straight-line fit by both methods

Fit $y = x_1 + x_2 t$ to the data $(t, y) = (0, 1), (1, 2), (2, 4), (3, 5)$ by the normal equations and by QR.

**Solution.** The design matrix has columns $a_1 = (1, 1, 1, 1)^\mathsf{T}$ and $a_2 = (0, 1, 2, 3)^\mathsf{T}$, and $b = (1, 2, 4, 5)^\mathsf{T}$. Normal equations: $A^\mathsf{T}A = \begin{pmatrix} 4 & 6 \\ 6 & 14 \end{pmatrix}$, $A^\mathsf{T}b = (12, 25)^\mathsf{T}$, determinant $56 - 36 = 20$, so

$$x = \frac{1}{20}\begin{pmatrix} 14 & -6 \\ -6 & 4 \end{pmatrix}\begin{pmatrix} 12 \\ 25 \end{pmatrix} = \frac{1}{20}\begin{pmatrix} 18 \\ 28 \end{pmatrix} = \begin{pmatrix} 0.9 \\ 1.4 \end{pmatrix}.$$

The residual is $r = (0.1, -0.3, 0.3, -0.1)^\mathsf{T}$, orthogonal to both columns, with $\|r\|_2^2 = 0.2$.

QR: $r_{11} = \|a_1\| = 2$, $q_1 = \tfrac{1}{2}(1, 1, 1, 1)^\mathsf{T}$, $r_{12} = q_1^\mathsf{T}a_2 = 3$, $v_2 = a_2 - 3q_1 = (-1.5, -0.5, 0.5, 1.5)^\mathsf{T}$, $r_{22} = \sqrt{5}$, $q_2 = v_2/\sqrt{5}$. Then $q_1^\mathsf{T}b = 6$ and $q_2^\mathsf{T}b = (-1.5 - 1 + 2 + 7.5)/\sqrt{5} = 7/\sqrt{5}$. Back substitution: $x_2 = (7/\sqrt{5})/\sqrt{5} = 1.4$, $x_1 = (6 - 3 \times 1.4)/2 = 0.9$.

### Example 2 — When the normal equations fail

Take the Läuchli matrix $A = \begin{pmatrix} 1 & 1 \\ \varepsilon & 0 \\ 0 & \varepsilon \end{pmatrix}$ and $b = (2, \varepsilon, \varepsilon)^\mathsf{T}$, so that $x^\ast = (1, 1)^\mathsf{T}$ exactly with zero residual. Analyse both methods in double precision for $\varepsilon = 10^{-8}$ and $\varepsilon = 10^{-5}$.

**Solution.** $A^\mathsf{T}A = \begin{pmatrix} 1 + \varepsilon^2 & 1 \\ 1 & 1 + \varepsilon^2 \end{pmatrix}$ has eigenvalues $2 + \varepsilon^2$ and $\varepsilon^2$, so $\kappa_2(A) = \sqrt{(2 + \varepsilon^2)/\varepsilon^2} \approx \sqrt{2}/\varepsilon$ and $\kappa_2(A^\mathsf{T}A) \approx 2/\varepsilon^2$.

For $\varepsilon = 10^{-8}$: $\varepsilon^2 = 10^{-16} < u$, so $\mathrm{fl}(1 + \varepsilon^2) = 1$ and the computed $A^\mathsf{T}A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ is exactly singular; Cholesky meets a zero pivot and the method fails outright. QR sees $\kappa_2(A) \approx 1.4 \times 10^8$ and $\theta = 0$, so its error is about $\kappa u \approx 1.6 \times 10^{-8}$: eight correct digits.

For $\varepsilon = 10^{-5}$: $1 + 10^{-10}$ is stored with absolute error about $10^{-16}$, a relative perturbation of $10^{-6}$ of the small eigenvalue $10^{-10}$; the normal-equation solution carries an error near $\kappa^2 u \approx 2 \times 10^{-6}$, six digits lost, while QR gives $\kappa u \approx 1.6 \times 10^{-11}$.

### Example 3 — Repairing conditioning by centring

Eleven measurements are taken at $t = 2000, 2001, \dots, 2010$ and a line $y = x_1 + x_2 t$ is fitted. Compute $\kappa_2(A)$ for the columns $(1, t)$ and for $(1, t - 2005)$, and estimate the digits lost by each method.

**Solution.** With $\bar t = 2005$ and $\sum (t - \bar t)^2 = 2(1 + 4 + 9 + 16 + 25) = 110$,

$$A^\mathsf{T}A = \begin{pmatrix} 11 & 22055 \\ 22055 & 44{,}220{,}385 \end{pmatrix}, \qquad \det = 11 \times 110 = 1210, \qquad \operatorname{tr} = 44{,}220{,}396 .$$

The eigenvalues are $\lambda_{\max} \approx \operatorname{tr} = 4.42 \times 10^7$ and $\lambda_{\min} \approx \det/\operatorname{tr} = 2.74 \times 10^{-5}$, so $\kappa_2(A) = \sqrt{\lambda_{\max}/\lambda_{\min}} = \sqrt{1.6 \times 10^{12}} \approx 1.3 \times 10^6$. The normal equations lose about twelve digits, QR about six. After centring, the columns $(1, s)$ with $s = t - 2005$ are orthogonal: $A^\mathsf{T}A = \operatorname{diag}(11, 110)$ and $\kappa_2(A) = \sqrt{10} = 3.2$. Both methods are now accurate to about fifteen digits; the intercept becomes $x_1 + 2005\,x_2$.

## Common Misconceptions

- **"The normal equations are the least-squares method."** They are one way to solve it, and they square the condition number; QR solves the same minimisation with error proportional to $\kappa$.
- **"Cholesky is backward stable, so solving the normal equations is stable."** Backward stability is relative to the problem being solved, and $A^\mathsf{T}Ax = A^\mathsf{T}b$ has condition number $\kappa^2$.
- **"A good fit means the parameters are accurate."** Accuracy of $x$ depends on $\kappa_2(A)$, which nearly parallel columns make huge however well the model fits.
- **"Ill-conditioning is a property of the data."** It is a property of the basis: centring, scaling or orthogonal polynomials change $\kappa$ by orders of magnitude without changing the fitted model.

## Connections

- Vandermonde interpolation in Numerical Methods (Lesson m1-l2) is the square case $m = n$; its conditioning is why polynomial fits should use Chebyshev or Legendre bases.
- The covariance $\sigma^2(A^\mathsf{T}A)^{-1}$ of the least-squares estimate is the basis of error bars on fitted parameters in every laboratory course.
- Orbit determination and photometric calibration in Astrophysics are least-squares problems with $\kappa \sim 10^6$ to $10^{8}$; the switch from normal equations to QR and SVD made modern astrometric catalogues possible.
- Fitting Gaussians to spectral lines in Waves and Optics is nonlinear least squares; Gauss–Newton solves a linear problem of this kind at every iteration.

## Quick Check

1. Derive the normal equations from the orthogonality of the residual, and show that $A^\mathsf{T}A$ is positive definite when $A$ has full column rank.
2. Prove $\kappa_2(A^\mathsf{T}A) = \kappa_2(A)^2$ from the singular values of $A$.
3. Fit $y = x_1 + x_2 t$ to $(0, 0), (1, 1), (2, 3)$ by QR and verify the result against the normal equations.
4. A least-squares problem has $\kappa_2(A) = 10^5$ and $\sin\theta = 0.5$. Estimate the relative error of the QR solution in double precision.
5. Explain why centring a time variable before fitting a line reduces $\kappa_2(A)$, and how the intercept transforms back.

## Takeaway

- Linear least squares is orthogonal projection onto the column space; the normal equations $A^\mathsf{T}Ax = A^\mathsf{T}b$ express that geometry.
- Solving the normal equations by Cholesky is cheap but squares the condition number, and forming $A^\mathsf{T}A$ can destroy information.
- QR solves the problem through $\hat R x = \hat Q^\mathsf{T}b$ with $\kappa_2(\hat R) = \kappa_2(A)$ and is backward stable for least squares.
- The sensitivity of the solution is $\kappa/\cos\theta + \kappa^2\tan\theta$; only a large residual brings $\kappa^2$ into a well-solved problem.
- Centring and scaling the columns is the cheapest and often the largest accuracy improvement.
