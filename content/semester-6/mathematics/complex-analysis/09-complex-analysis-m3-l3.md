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
lessonId: complex-analysis-m3-l3
lessonName: Physics Applications – Potential Flow, Electrostatics, Kramers–Kronig and Bromwich
lessonNumber: 9
moduleNumber: 3
semesterNumber: 6
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 9
prerequisites:
  - complex-analysis-m3-l2
  - differential-equations-m3-l2
  - electricity-and-magnetism-m1-l3
learningObjectives:
  - Construct complex potentials for two-dimensional electrostatics and ideal fluid flow, and extract fields, velocities and pressures from them.
  - Solve a two-dimensional Dirichlet problem by conformal mapping to the half-plane.
  - Derive the Kramers–Kronig relations from analyticity of a causal response function.
  - Invert a Laplace transform with the Bromwich integral by closing the contour and summing residues.
concepts:
  - Complex potential
  - Two-dimensional potential flow
  - Flow past a cylinder
  - Dirichlet problem by conformal mapping
  - Kramers–Kronig relations
  - Causality and analyticity
  - Bromwich inversion integral
tags:
  - mathematics
  - complex-analysis
  - potential-theory
  - kramers-kronig
sourceType: authored-courseware
status: in-review
assessmentHints:
  - problem-solving
  - derivation
  - conceptual
  - computational
***

# Physics Applications – Potential Flow, Electrostatics, Kramers–Kronig and Bromwich

## Overview

Complex analysis earns its place in physics through four recurring ideas. Laplace's equation in two dimensions is solved by real parts of analytic functions, so electrostatics and ideal-fluid flow reduce to choosing an analytic complex potential. Conformal maps carry boundary-value problems to simple geometries. Causality, the statement that an effect cannot precede its cause, is equivalent to analyticity of the response function in a half-plane, which ties the real and imaginary parts of a susceptibility together through the Kramers–Kronig relations. Finally, the inverse Laplace transform is a contour integral, the Bromwich integral, evaluated by residues. This lesson develops each application using the Cauchy–Riemann equations of Lesson m1-l2, conformal mapping from Lesson m3-l2 and the closing-the-contour technique of Lesson m3-l1.

## Learning Path

- **What you should already know**: harmonic conjugates and orthogonal level curves (Lesson m1-l2); Möbius maps of the disc to the half-plane (Lesson m3-l2); residues, Jordan's lemma and principal values (Lesson m3-l1); the Laplace transform (Differential Equations Lesson m3-l2); electrostatic potential (Electricity and Magnetism Lesson m1-l3).
- **What this lesson adds**: complex potentials; flow past a cylinder; the Dirichlet problem via conformal maps; the Kramers–Kronig relations; the Bromwich inversion integral.
- **What later lessons this will unlock**: this lesson completes the course; its methods reappear in Fourier and Laplace analysis, quantum scattering and wave propagation in later physics courses.

## Core Explanation

### Complex potentials in electrostatics

In a charge-free region of a two-dimensional configuration, the potential satisfies $\phi_{xx}+\phi_{yy}=0$ with $\mathbf E=-\nabla\phi$. By Lesson m1-l2, $\phi$ is the real part of an analytic **complex potential** $\Omega(z)=\phi+i\psi$, where $\psi$ is the harmonic conjugate. The curves $\phi=\text{const}$ are equipotentials, the curves $\psi=\text{const}$ are field lines, and they are orthogonal. Because $\Omega' = \phi_x+i\psi_x = \phi_x-i\phi_y$ by Cauchy–Riemann,

$$E_x - iE_y = -\Omega'(z), \qquad |\mathbf E| = |\Omega'(z)|.$$

A uniform field $E_0\hat x$ has $\Omega=-E_0z$. An infinite line charge $\lambda$ per unit length at the origin has $\Omega = -\dfrac{\lambda}{2\pi\varepsilon_0}\log z$, so $\phi=-\frac{\lambda}{2\pi\varepsilon_0}\ln r$ and the field lines $\psi\propto\theta$ are rays. The multivaluedness of $\log z$ (Lesson m1-l3) records the flux through a circuit of the charge.

Boundary-value problems use Lesson m3-l2. Let $\phi_0=\operatorname{Re}\Omega_0$ solve a Dirichlet problem in a simple domain $G$, and let $w=T(z)$ map the physical domain conformally onto $G$ with boundary arcs corresponding. Then $\phi(z)=\phi_0(T(z))$ is harmonic with the same boundary values. The basic solution in the upper half-plane with $\phi=V_0$ on $x>0$ and $\phi=0$ on $x<0$ is

$$\phi = V_0\left(1-\frac{\theta}{\pi}\right),\qquad \Omega = V_0+\frac{iV_0}{\pi}\operatorname{Log}z,$$

since $\operatorname{Re}[\frac{iV_0}{\pi}\operatorname{Log}z] = -\frac{V_0}{\pi}\theta$. The field has magnitude $|\Omega'| = V_0/(\pi r)$ and circulates in semicircular field lines $\psi=\frac{V_0}{\pi}\ln r$.

### Ideal fluid flow

An incompressible, irrotational flow has velocity $\mathbf v=\nabla\Phi$ with $\nabla\cdot\mathbf v=0$, so $\Phi$ is harmonic. The stream function $\Psi$ with $v_x=\Phi_x=\Psi_y$, $v_y=\Phi_y=-\Psi_x$ is its harmonic conjugate, and $W=\Phi+i\Psi$ is the **complex potential**, with

$$W'(z) = v_x - iv_y, \qquad |\mathbf v| = |W'(z)|.$$

Streamlines $\Psi=\text{const}$ and equipotentials are orthogonal, and a solid wall is a streamline, since the normal velocity vanishes there. Basic flows are: uniform flow $W=Uz$; a source of strength $m$ (volume flow per unit length) $W=\frac{m}{2\pi}\log z$; and a vortex of circulation $\Gamma$ (anticlockwise) $W=-\frac{i\Gamma}{2\pi}\log z$. Because Laplace's equation is linear, flows superpose. The pressure follows from Bernoulli's equation, $p+\frac12\rho|\mathbf v|^2=\text{const}$.

**Flow past a circular cylinder.** Superposing a uniform flow and a doublet gives $W(z)=U\left(z+\dfrac{a^2}{z}\right)$. On $|z|=a$, $z=ae^{i\theta}$ and $a^2/z=ae^{-i\theta}$, so $W=2Ua\cos\theta$ is real: $\Psi=0$ on the circle, which is a streamline and may be taken as a solid boundary. Far away, $W\to Uz$. The velocity is $W'=U(1-a^2/z^2)$, with surface speed $|\mathbf v|=U|1-e^{-2i\theta}|=2U|\sin\theta|$. Adding a vortex gives $W=U(z+a^2/z)-\frac{i\Gamma}{2\pi}\log z$, which keeps the circle a streamline and produces a lift per unit length $L=\rho U\Gamma$ (Kutta–Joukowski theorem). Applying the Joukowski map of Lesson m3-l2 turns the circle into an aerofoil with the same circulation.

The code below draws the streamlines; expect them to bend around the cylinder, closing on its surface, with a symmetric pattern about both axes.

```python
import numpy as np, matplotlib.pyplot as plt
x, y = np.meshgrid(np.linspace(-3, 3, 400), np.linspace(-2, 2, 300))
z = x + 1j*y; psi = np.imag(z + 1/z); psi[abs(z) < 1] = np.nan   # U = a = 1
plt.contour(x, y, psi, levels=np.linspace(-2, 2, 21), colors="k")
plt.gca().add_patch(plt.Circle((0, 0), 1, color="grey")); plt.axis("equal"); plt.show()
```

### Causality and the Kramers–Kronig relations

A linear, time-invariant system responds to a stimulus $F(t)$ with $P(t)=\int_{-\infty}^{\infty}g(t-t')F(t')\,dt'$. **Causality** requires $g(\tau)=0$ for $\tau<0$. The frequency response

$$\chi(\omega)=\int_0^\infty g(\tau)e^{i\omega\tau}\,d\tau$$

is therefore well defined for complex $\omega$ with $\operatorname{Im}\omega>0$, where $|e^{i\omega\tau}|=e^{-\tau\operatorname{Im}\omega}$ decays, and it is **analytic in the upper half-plane**. Moreover $\chi(-\omega)=\chi^*(\omega)$ for real $g$. Assume $\chi(\omega)\to0$ as $|\omega|\to\infty$. For real $\omega_0$ integrate $\chi(\omega)/(\omega-\omega_0)$ around the closed upper semicircle, indented above $\omega_0$ as in Lesson m3-l1. No pole lies inside, the large arc vanishes, and the indentation contributes $-i\pi\chi(\omega_0)$:

$$\mathrm{PV}\!\int_{-\infty}^\infty\frac{\chi(\omega)}{\omega-\omega_0}\,d\omega-i\pi\chi(\omega_0)=0 \;\Longrightarrow\; \chi(\omega_0)=\frac{1}{i\pi}\,\mathrm{PV}\!\int_{-\infty}^\infty\frac{\chi(\omega)}{\omega-\omega_0}\,d\omega.$$

Writing $\chi=\chi'+i\chi''$ and equating real and imaginary parts gives the **Kramers–Kronig relations**

$$\chi'(\omega_0)=\frac1\pi\mathrm{PV}\!\int_{-\infty}^\infty\frac{\chi''(\omega)}{\omega-\omega_0}\,d\omega,\qquad \chi''(\omega_0)=-\frac1\pi\mathrm{PV}\!\int_{-\infty}^\infty\frac{\chi'(\omega)}{\omega-\omega_0}\,d\omega.$$

Because $\chi'$ is even and $\chi''$ odd, the first becomes $\chi'(\omega_0)=\frac2\pi\mathrm{PV}\!\int_0^\infty\frac{\omega\,\chi''(\omega)}{\omega^2-\omega_0^2}\,d\omega$. Dispersion ($\chi'$, giving the refractive index) and absorption ($\chi''$) are not independent: measuring one at all frequencies determines the other. At $\omega_0=0$, $\chi'(0)=\frac2\pi\int_0^\infty\frac{\chi''(\omega)}{\omega}\,d\omega$.

### Inverse Laplace transforms and the Bromwich integral

The Laplace transform $F(s)=\int_0^\infty f(t)e^{-st}\,dt$ (Differential Equations Lesson m3-l2) is analytic for $\operatorname{Re}s>c_0$, the abscissa of convergence. The **Bromwich inversion integral** recovers $f$:

$$f(t)=\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}F(s)e^{st}\,ds,\qquad c>c_0,$$

along a vertical line to the right of every singularity of $F$. For $t>0$, close the contour with a large semicircle in the left half-plane, where $|e^{st}|=e^{t\operatorname{Re}s}$ decays. If $F(s)\to0$ uniformly, Jordan's lemma (rotated by $90^\circ$) shows the arc vanishes, and the closed contour is positively oriented, so

$$f(t)=\sum_{\text{all poles of }F}\operatorname{Res}\big[F(s)e^{st}\big],\qquad t>0.$$

For $t<0$ closing to the right encloses no singularity and gives $f=0$, consistent with causality. Poles at $s=-a\pm i\omega$ yield damped oscillations $e^{-at}\cos\omega t$ or $\sin\omega t$. Branch cuts in $F$ require keyhole contours and give non-exponential tails.

## Key Ideas

- **Complex potential**: in two dimensions $\Omega=\phi+i\psi$ is analytic, with $|\mathbf E|=|\Omega'|$ (or $|\mathbf v|=|W'|$) and orthogonal equipotentials and field or stream lines.
- **Standard flows**: uniform, source, vortex and doublet potentials superpose; $W=U(z+a^2/z)$ is flow past a cylinder with surface speed $2U|\sin\theta|$.
- **Conformal solution of the Dirichlet problem**: map the domain to a half-plane or disc, use $\phi=V_0(1-\theta/\pi)$-type solutions, and pull back.
- **Causality implies analyticity**: $\chi(\omega)$ is analytic in the upper half-plane, and Cauchy's formula with indentation links $\chi'$ and $\chi''$.
- **Kramers–Kronig**: $\chi'(\omega_0)=\frac2\pi\mathrm{PV}\!\int_0^\infty\omega\chi''(\omega)/(\omega^2-\omega_0^2)\,d\omega$; dispersion is fixed by absorption.
- **Bromwich integral**: $f(t)=\sum\operatorname{Res}[F(s)e^{st}]$ over the poles of $F$ for $t>0$.

## Worked Examples

### Example 1 — Potential in a disc with split boundary

The unit disc has $\phi=V_0$ on the upper semicircle and $\phi=0$ on the lower. Find $\phi$ at the centre and at $z=i/2$.

**Solution.** The map $T(z)=i\frac{1-z}{1+z}$ (Lesson m3-l2, Example 2) sends the unit circle to the real axis, with $T(1)=0$, $T(i)=1$, $T(-1)=\infty$, $T(-i)=-1$. The upper semicircle goes to the positive real axis and the lower semicircle to the negative real axis, and the disc goes to the upper half-plane. By the half-plane solution,

$$\phi(z)=V_0\left(1-\frac{\arg T(z)}{\pi}\right).$$

At the centre $T(0)=i$, $\arg=\pi/2$, so $\phi=V_0/2$, as symmetry demands. At $z=i/2$, $T=i\frac{1-i/2}{1+i/2}=i\frac{(2-i)^2}{5}=\frac{4+3i}{5}$, so $\arg T=\arctan\tfrac34=0.6435$ and $\phi=V_0(1-0.2048)=0.795\,V_0$, closer to the hot arc, as expected.

### Example 2 — Pressure on a cylinder in flow

Water ($\rho=1000\ \mathrm{kg\,m^{-3}}$) flows at $U=2\ \mathrm{m\,s^{-1}}$ past a long cylinder. Find the gauge pressure $p-p_\infty$ at the stagnation point and at the top.

**Solution.** From $W=U(z+a^2/z)$ the surface speed is $2U|\sin\theta|$. Bernoulli gives

$$p-p_\infty=\tfrac12\rho U^2\left(1-4\sin^2\theta\right).$$

At the stagnation point $\theta=0$ the speed is zero and $p-p_\infty=\tfrac12\rho U^2=\tfrac12(1000)(4)=2000\ \mathrm{Pa}$. At the top $\theta=\pi/2$ the speed is $2U=4\ \mathrm{m\,s^{-1}}$ and $p-p_\infty=2000(1-4)=-6000\ \mathrm{Pa}$. By symmetry the pressure on the rear half equals that on the front, so the net force vanishes (d'Alembert's paradox), a signature of the missing viscosity and circulation in the model.

### Example 3 — A Bromwich inversion with a double pole

Find $f(t)$ for $F(s)=\dfrac{1}{s^2(s+1)}$.

**Solution.** The poles are $s=0$ (double) and $s=-1$ (simple), all to the left of the Bromwich line $c>0$. For $t>0$,

$$\operatorname{Res}_{s=0}\frac{e^{st}}{s^2(s+1)}=\frac{d}{ds}\frac{e^{st}}{s+1}\Big|_{s=0}=\left[\frac{te^{st}}{s+1}-\frac{e^{st}}{(s+1)^2}\right]_{s=0}=t-1,\qquad \operatorname{Res}_{s=-1}=e^{-t}.$$

Thus $f(t)=t-1+e^{-t}$. Check by partial fractions: $\frac{1}{s^2(s+1)}=\frac1{s^2}-\frac1s+\frac1{s+1}$, whose inverse is $t-1+e^{-t}$. It satisfies $f(0)=0$ and $f'(0)=0$, as a function with $F\sim s^{-3}$ at infinity must.

## Common Misconceptions

- **"Every harmonic function in two dimensions is a physical potential."** The complex potential describes only source-free, curl-free regions; charges or vortices appear as singularities (logarithms or poles) of $\Omega$ or $W$.
- **"Kramers–Kronig relations hold for any function."** They require analyticity in the upper half-plane (causality) and sufficient decay at infinity; a response with a pole in the upper half-plane or one that does not decay violates them.
- **"The principal value integral is just the ordinary integral."** The singular denominator $\omega-\omega_0$ makes the ordinary integral divergent; the symmetric limit gives a finite result.
- **"The Bromwich line may be placed anywhere."** It must lie to the right of every singularity of $F$; placing it between poles inverts a different, non-causal function.
- **"Potential flow predicts drag on a cylinder."** The circle with circulation gives lift $\rho U\Gamma$ but zero drag; viscous effects are outside the model.

## Connections

- Equipotentials and field lines in Electricity and Magnetism Lesson m1-l3 form orthogonal families, and the complex potential combines them in one analytic function, so the images of Lesson m3-l2 deform fields without altering orthogonality.
- The refractive index in Waves and Optics Lesson m2-l1 is frequency-dependent; its real part (dispersion) and its imaginary part (absorption) are linked by the Kramers–Kronig relations, which let absorption spectra predict refractive index.
- The forced damped oscillator of Differential Equations Lesson m2-l3 has response $\chi(\omega)=\omega_p^2/(\omega_0^2-\omega^2-i\gamma\omega)$ with both poles in the lower half-plane, so causal; the static value $\chi(0)=\omega_p^2/\omega_0^2$ equals $\frac2\pi\int_0^\infty\chi''/\omega\,d\omega$, since $\int_{-\infty}^\infty\frac{d\omega}{(\omega_0^2-\omega^2)^2+\gamma^2\omega^2}=\frac{\pi}{\gamma\omega_0^2}$.
- In Introduction to Quantum Mechanics Lesson m3-l1 the time evolution of a state is a sum over energy eigenvalues; the Bromwich integral of the resolvent $1/(s+iH/\hbar)$ expresses it as a sum of residues at the eigenvalues, and resonances appear as poles off the real axis.

## Quick Check

1. Show that $\Omega(z)=-E_0(z-a^2/z)$ describes a grounded conducting cylinder of radius $a$ in a uniform field $E_0\hat x$, and find the surface field $|\mathbf E|$ on $|z|=a$.
2. Find $\phi$ in the upper half-plane with $\phi=V_0$ on $0<x<1$ and $\phi=0$ elsewhere on the axis (hint: superpose two $\theta$-type solutions).
3. Derive the Kramers–Kronig form $\chi'(\omega_0)=\frac2\pi\mathrm{PV}\!\int_0^\infty\omega\chi''/(\omega^2-\omega_0^2)\,d\omega$ from the unsymmetrised relation.
4. Invert $F(s)=\dfrac{1}{s^2+4}$ using the Bromwich integral and verify with a table.
5. Explain why a response function with a pole at $\omega=i\kappa$ ($\kappa>0$) corresponds to a non-causal or unstable system.

## Takeaway

- Two-dimensional electrostatics and ideal flow are governed by analytic complex potentials with $|\mathbf E|=|\Omega'|$ and $|\mathbf v|=|W'|$.
- Conformal mapping converts a Dirichlet problem on a complicated domain into the half-plane solution $\phi=V_0(1-\theta/\pi)$.
- Flow past a cylinder, $W=U(z+a^2/z)$, has surface speed $2U|\sin\theta|$, and circulation produces lift $\rho U\Gamma$.
- Causality implies analyticity in the upper half-plane, hence the Kramers–Kronig relations between dispersion and absorption.
- The Bromwich integral inverts Laplace transforms by residues: $f(t)=\sum\operatorname{Res}[F(s)e^{st}]$ for $t>0$.
