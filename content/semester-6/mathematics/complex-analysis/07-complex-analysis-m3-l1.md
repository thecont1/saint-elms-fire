***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: mathematics
subjectName: Mathematics
courseId: complex-analysis
courseName: Complex Analysis
moduleId: complex-analysis-module-3
moduleName: Residues, Mappings and Applications
lessonId: complex-analysis-m3-l1
lessonName: The Residue Theorem and the Evaluation of Real Integrals
lessonNumber: 7
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 7
prerequisites:
  - complex-analysis-m2-l3
  - integral-calculus-m3-l3
  - waves-and-optics-m1-l3
learningObjectives:
  - State and prove the residue theorem and compute residues at simple poles, poles of order $m$ and from Laurent series.
  - Evaluate $\int_{-\infty}^\infty P(x)/Q(x)\,dx$ and $\int_0^{2\pi}F(\cos\theta,\sin\theta)\,d\theta$ by contour integration.
  - Prove Jordan's lemma and use it to evaluate Fourier-type integrals $\int f(x)e^{iax}\,dx$.
  - Handle poles on the real axis with indented contours and principal values.
concepts:
  - Residue theorem
  - Residue at a pole of order m
  - Improper integrals of rational functions
  - Trigonometric integrals
  - Jordan's lemma
  - Indented contour
  - Cauchy principal value
tags:
  - mathematics
  - complex-analysis
  - residue-theorem
  - real-integrals
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - derivation
  - computational
  - conceptual
***

# The Residue Theorem and the Evaluation of Real Integrals

## Overview

The residue theorem converts the problem of integrating around a closed contour into algebra: the integral equals $2\pi i$ times the sum of the residues at the enclosed singularities, and residues are found from local data. Its most celebrated application is the evaluation of definite integrals of real functions that have no elementary antiderivative, by embedding the real line in a closed contour. This lesson proves the theorem, develops efficient formulae for residues at poles, and applies it to four families of real integrals: improper integrals of rational functions, integrals over a period of trigonometric functions, Fourier-type integrals controlled by Jordan's lemma, and integrals whose integrands have simple poles on the real axis, handled with indented contours and principal values.

## Learning Path

- **What you should already know**: Laurent series, the residue $a_{-1}$ and the classification of singularities (Lesson m2-l3); deformation of contours and the $ML$-inequality (Lesson m2-l1); partial fractions and improper integrals (Integral Calculus Lesson m3-l3); Fourier superposition (Waves and Optics Lesson m1-l3).
- **What this lesson adds**: the residue theorem; residue formulae; real integrals of rational, trigonometric and Fourier type; Jordan's lemma; indented contours.
- **What later lessons this will unlock**: the Kramers–Kronig relations and the Bromwich inversion integral, both built from these closing-the-contour arguments (Lesson m3-l3).

## Core Explanation

### The residue theorem

**Theorem.** Let $C$ be a positively oriented simple closed contour and let $f$ be analytic on and inside $C$ except at finitely many isolated singularities $z_1, \dots, z_n$ inside $C$. Then

$$\oint_C f(z)\,dz = 2\pi i\sum_{k=1}^n\operatorname{Res}_{z=z_k}f.$$

*Proof.* Surround each $z_k$ by a small circle $C_k$ in the interior of $C$, pairwise disjoint. By deformation of contours (Lesson m2-l1), $\oint_Cf\,dz = \sum_k\oint_{C_k}f\,dz$. Each circle lies in the punctured disc of the Laurent expansion about $z_k$, so by Lesson m2-l3 $\oint_{C_k}f\,dz = 2\pi i\,a_{-1}^{(k)}$. $\blacksquare$

### Computing residues

- **Removable singularity**: residue $0$.
- **Simple pole** at $z_0$: $\operatorname{Res}_{z_0}f = \lim_{z\to z_0}(z-z_0)f(z)$. If $f = p/q$ with $p(z_0)\ne0$, $q(z_0) = 0$, $q'(z_0)\ne0$, then $\operatorname{Res}_{z_0}f = p(z_0)/q'(z_0)$.
- **Pole of order $m$**: multiply by $(z-z_0)^m$ to isolate the Laurent coefficient,
$$\operatorname{Res}_{z_0}f = \frac{1}{(m-1)!}\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\Big[(z-z_0)^mf(z)\Big].$$
- **Essential singularity**: expand and read off $a_{-1}$; for $e^{1/z}$ the residue at $0$ is $1$.

When $f(z)\sim c/z$ as $|z|\to\infty$, the integral around a large circle is $2\pi i c$, and this equals the sum of all finite residues; the quantity $-c$ is the **residue at infinity**, so all residues of a rational function, finite and infinite, sum to zero. This gives a check on any residue computation.

For $f = \dfrac{e^z}{z^2(z-2)}$: at the double pole $z=0$, $\frac{d}{dz}\frac{e^z}{z-2}\Big|_0 = \frac{e^z(z-2) - e^z}{(z-2)^2}\Big|_0 = -\frac34$; at the simple pole $z=2$ the residue is $e^2/4$. For $C: |z|=3$, $\oint_Cf\,dz = 2\pi i\,\frac{e^2-3}{4}\approx 6.89i$.

### Improper integrals of rational functions

Let $f(x) = P(x)/Q(x)$ with no real zeros of $Q$ and $\deg Q\ge\deg P+2$. Integrate $P(z)/Q(z)$ around the closed contour formed by $[-R,R]$ and the upper semicircle $C_R$, with $R$ large enough to enclose all poles in the upper half-plane. On $C_R$, $|f|\le K/R^2$, so the $ML$-inequality gives $|\int_{C_R}f\,dz|\le\pi K/R\to0$ (Lesson m2-l1, Example 2). Hence

$$\int_{-\infty}^\infty\frac{P(x)}{Q(x)}\,dx = 2\pi i\sum_{\operatorname{Im}z_k>0}\operatorname{Res}_{z=z_k}\frac{P}{Q}.$$

Closing in the lower half-plane gives the same value with $-2\pi i\sum_{\operatorname{Im}z_k<0}$. For even integrands, $\int_0^\infty = \frac12\int_{-\infty}^\infty$. As a minimal test, $f = 1/(z^2+1)$ has residue $\frac{1}{2i}$ at $z=i$, so $\int_{-\infty}^\infty\frac{dx}{1+x^2} = 2\pi i\cdot\frac{1}{2i} = \pi$, recovering the arctangent result. The lower-half-plane version gives the same value because the residue at $-i$ is $-\frac{1}{2i}$ and the prefactor is $-2\pi i$.

### Trigonometric integrals over a period

For $\int_0^{2\pi}F(\cos\theta,\sin\theta)\,d\theta$ with $F$ rational, set $z = e^{i\theta}$, so the interval becomes the unit circle with

$$d\theta = \frac{dz}{iz},\qquad \cos\theta = \frac12\left(z+\frac1z\right),\qquad \sin\theta = \frac{1}{2i}\left(z-\frac1z\right).$$

The integral becomes $\oint_{|z|=1}F\big(\tfrac12(z+z^{-1}),\tfrac1{2i}(z-z^{-1})\big)\frac{dz}{iz}$, evaluated by the residues inside the unit circle. Poles come from the denominator and from the factor $1/z$. For $\int_0^{2\pi}\frac{d\theta}{a+b\cos\theta}$ with $a>|b|$ the integrand becomes $\frac{2}{ib}\oint\frac{dz}{z^2+(2a/b)z+1}$; the roots have product $1$, so exactly one lies inside the circle, and the residue there gives $2\pi/\sqrt{a^2-b^2}$.

### Fourier-type integrals and Jordan's lemma

Integrals $\int_{-\infty}^\infty f(x)e^{iax}\,dx$ with $a>0$ arise in Fourier analysis. If $f$ is only $O(1/|z|)$, the $ML$-inequality does not make the arc vanish. The factor $e^{iaz}$ rescues the argument, since $|e^{iaz}| = e^{-a\operatorname{Im}z}$ decays in the upper half-plane.

**Jordan's lemma.** Let $f$ be analytic in the upper half-plane for $|z|>R_0$ with $M_R = \max_{C_R}|f|\to0$ as $R\to\infty$, and let $a>0$. Then $\int_{C_R}f(z)e^{iaz}\,dz\to0$.

*Proof.* On $C_R$, $z = Re^{i\theta}$, $|e^{iaz}| = e^{-aR\sin\theta}$ and $|dz| = R\,d\theta$, so
$$\left|\int_{C_R}f e^{iaz}\,dz\right|\le M_RR\int_0^\pi e^{-aR\sin\theta}\,d\theta = 2M_RR\int_0^{\pi/2}e^{-aR\sin\theta}\,d\theta.$$
Using $\sin\theta\ge2\theta/\pi$ on $[0,\pi/2]$, the integral is at most $\int_0^{\pi/2}e^{-2aR\theta/\pi}\,d\theta<\pi/(2aR)$. The bound is $\pi M_R/a\to0$. $\blacksquare$

Then $\int_{-\infty}^\infty f(x)e^{iax}\,dx = 2\pi i\sum_{\operatorname{Im}z_k>0}\operatorname{Res}[f(z)e^{iaz}]$, and cosine and sine integrals are its real and imaginary parts when $f$ is real on the axis. For $a<0$ close below, where $|e^{iaz}| = e^{a\operatorname{Im}z}$ decays, and the orientation reversal introduces the factor $-2\pi i$. The same lemma also controls the Fourier transform of a rational function, $\hat f(k) = \int f(x)e^{-ikx}\,dx$, by choosing the half-plane according to the sign of $k$.

### Poles on the real axis: indented contours

If $f$ has a simple pole at a real point $x_0$, the integral diverges at $x_0$ but the **Cauchy principal value**

$$\mathrm{PV}\!\int_{-\infty}^\infty f\,dx = \lim_{\varepsilon\to0^+}\left[\int_{-\infty}^{x_0-\varepsilon}+\int_{x_0+\varepsilon}^\infty\right]f\,dx$$

can exist because the divergences cancel symmetrically. To compute it, bypass the pole by a small semicircle $\gamma_\varepsilon$ of radius $\varepsilon$ in the upper half-plane, traversed clockwise. Writing $f = \frac{c}{z-x_0}+g$ with $g$ analytic, $c = \operatorname{Res}_{x_0}f$, the part $g$ contributes $O(\varepsilon)$ and $\int_{\gamma_\varepsilon}\frac{c\,dz}{z-x_0} = ic\int_\pi^0d\phi = -i\pi c$. So

$$\int_{\gamma_\varepsilon}f\,dz\to-i\pi\operatorname{Res}_{x_0}f,\qquad \mathrm{PV}\!\int_{-\infty}^\infty f\,dx = 2\pi i\sum_{\text{inside}}\operatorname{Res}+i\pi\sum_{\text{on axis}}\operatorname{Res}$$

once the large arc is dropped. Poles on the axis count "half".

The following code checks Example 1 below numerically and compares it with the residue value.

```python
import numpy as np
from scipy.integrate import quad
val, err = quad(lambda x: 1/(x**2 + 1)**2, -np.inf, np.inf)
print(val, np.pi/2)          # both 1.5707963...
```

## Key Ideas

- **Residue theorem**: $\oint_Cf\,dz = 2\pi i\sum\operatorname{Res}$ over the singularities inside $C$; the proof is deformation plus the Laurent coefficient $a_{-1}$.
- **Residue formulae**: for a pole of order $m$, differentiate $(z-z_0)^mf$ a total of $m-1$ times; for $p/q$ with a simple zero of $q$, use $p/q'$.
- **Rational integrals**: if $\deg Q\ge\deg P+2$, the arc contributes nothing and the real integral is $2\pi i$ times the sum of residues in the upper half-plane.
- **Trigonometric integrals**: $z = e^{i\theta}$ turns a period integral into a unit-circle contour integral.
- **Jordan's lemma**: the factor $e^{iaz}$ with $a>0$ makes the upper arc vanish when $f\to0$ uniformly; use the lower half-plane for $a<0$.
- **Indentation**: a simple pole on the axis contributes $i\pi\operatorname{Res}$ to the principal value.

## Worked Examples

### Example 1 — A rational integral with a double pole

Evaluate $I = \int_{-\infty}^\infty\dfrac{dx}{(x^2+1)^2}$.

**Solution.** The integrand has double poles at $\pm i$; only $z=i$ is in the upper half-plane. Writing $f = \dfrac{1}{(z-i)^2(z+i)^2}$,

$$\operatorname{Res}_{z=i}f = \frac{d}{dz}\frac{1}{(z+i)^2}\Big|_{z=i} = \frac{-2}{(z+i)^3}\Big|_{z=i} = \frac{-2}{(2i)^3} = \frac{-2}{-8i} = \frac{1}{4i}.$$

Since $\deg Q - \deg P = 4$, the arc vanishes ($|\int_{C_R}|\le\pi R/(R^2-1)^2\to0$), and $I = 2\pi i\cdot\frac{1}{4i} = \frac\pi2$. Check: the substitution $x=\tan t$ gives $\int_{-\pi/2}^{\pi/2}\cos^2t\,dt = \pi/2$.

### Example 2 — A Fourier-type integral needing Jordan's lemma

Show that $\int_{-\infty}^\infty\dfrac{x\sin ax}{x^2+b^2}\,dx = \pi e^{-ab}$ for $a,b>0$.

**Solution.** Consider $\int_{-\infty}^{\infty}\dfrac{xe^{iax}}{x^2+b^2}\,dx$. The function $f = z/(z^2+b^2)$ is $O(1/R)$, too weak for the $ML$ estimate but sufficient for Jordan's lemma since $M_R\le R/(R^2-b^2)\to0$. The only upper-half-plane pole is $z=ib$, with

$$\operatorname{Res}_{z=ib}\frac{ze^{iaz}}{z^2+b^2} = \frac{ze^{iaz}}{2z}\Big|_{z=ib} = \frac{e^{-ab}}{2}.$$

So the integral equals $2\pi i\cdot\frac{e^{-ab}}{2} = i\pi e^{-ab}$. Its imaginary part is the sine integral, $\pi e^{-ab}$; the real part, $\int x\cos ax/(x^2+b^2)\,dx$, vanishes since the integrand is odd. For $a=b=1$ the value is $\pi/e\approx1.156$.

### Example 3 — The sinc integral by indentation

Evaluate $\int_0^\infty\dfrac{\sin x}{x}\,dx$.

**Solution.** Take $f(z) = e^{iz}/z$, which has a simple pole at $0$ with residue $1$ and no singularities elsewhere. Integrate around the contour made of $[-R,-\varepsilon]$, the semicircle $\gamma_\varepsilon$ (clockwise), $[\varepsilon,R]$ and the arc $C_R$. It encloses no pole, so the total is $0$. By Jordan's lemma ($M_R = 1/R$) the arc contributes $0$, and $\int_{\gamma_\varepsilon}\to-i\pi$. Therefore $\mathrm{PV}\!\int_{-\infty}^\infty\frac{e^{ix}}{x}dx = i\pi$. The imaginary part gives $\int_{-\infty}^\infty\frac{\sin x}{x}dx = \pi$ (the integrand is regular at $0$), and evenness yields $\int_0^\infty\frac{\sin x}{x}dx = \frac\pi2$. The real part, $\mathrm{PV}\!\int\cos x/x\,dx = 0$, is consistent with the odd integrand.

## Common Misconceptions

- **"The residue theorem only works for simple poles."** The theorem holds for any isolated singularity, including essential ones; only the shortcut $\lim(z-z_0)f$ is limited to simple poles.
- **"I can close the contour in either half-plane."** The arc must vanish. For $e^{iaz}$ with $a>0$ the lower arc grows like $e^{aR}$; the closing direction follows the sign of $a$.
- **"If a pole lies on the real axis, include its full residue times $2\pi i$."** An indented contour sees only half a circuit around an axis pole, giving $i\pi\operatorname{Res}$, and what is computed is a principal value.
- **"The semicircular arc vanishes for every rational function."** The $ML$-argument needs $\deg Q\ge\deg P+2$; for $\int x/(x^2+1)\,dx$ the arc contributes $i\pi$, and the integral is not convergent as an ordinary improper integral.

## Connections

- The integral $\int_{-\infty}^\infty\frac{\cos kx}{x^2+b^2}dx = \frac{\pi}{b}e^{-b|k|}$ shows the Fourier transform of a Lorentzian is a decaying exponential; this pairing underlies spectral line shapes and damped oscillators in Waves and Optics Lesson m1-l3.
- The value $\int_{-\infty}^\infty\frac{\sin x}{x}dx = \pi$ normalises the single-slit diffraction pattern of Waves and Optics Lesson m3-l2, whose amplitude is a sinc function.
- Trigonometric integrals over a period are cycle averages, such as the mean power in a sinusoidally driven RC circuit (Electricity and Magnetism Lesson m2-l3), where rational functions of $\cos\theta$ arise.
- Principal values connect to the improper integrals of Real Analysis Lesson m3-l2 and to Sokhotski–Plemelj, which underlies the Kramers–Kronig relations of Lesson m3-l3.

## Quick Check

1. Find the residues of $\dfrac{z}{(z-1)^2(z+2)}$ at each pole.
2. Evaluate $\displaystyle\int_0^{2\pi}\frac{d\theta}{5+4\cos\theta}$ using $z=e^{i\theta}$.
3. Compute $\displaystyle\int_{-\infty}^\infty\frac{dx}{x^4+1}$ using the upper half-plane poles.
4. Explain why $\int_{-\infty}^\infty f(x)e^{iax}\,dx$ is evaluated in the upper half-plane for $a>0$, and describe how the closing contour and the sign of the result change for $a<0$.
5. Show that $\mathrm{PV}\!\int_{-\infty}^\infty\frac{e^{iax}}{x-x_0}dx = i\pi e^{iax_0}$ for $a>0$.

## Takeaway

- The residue theorem reduces closed-contour integrals to a sum of local residues times $2\pi i$.
- Residues are computed by limits at simple poles, derivatives at higher-order poles, or Laurent series.
- Rational real integrals close in a half-plane when the integrand decays like $R^{-2}$, and trigonometric integrals become unit-circle contours.
- Jordan's lemma justifies Fourier-type integrals, closing in the upper half-plane for $a>0$.
- Poles on the real axis are bypassed with indentations, each contributing $\pm i\pi\operatorname{Res}$ to the principal value.
