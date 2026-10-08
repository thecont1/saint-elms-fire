***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: astronomy-and-astrophysics
courseName: Astronomy and Astrophysics (Physics Option A)
moduleId: astronomy-and-astrophysics-module-3
moduleName: Galactic Structure and Observational Methods
lessonId: astronomy-and-astrophysics-m3-l1
lessonName: The Galactic Rotation Curve, Oort Constants and Stellar Populations
lessonNumber: 7
moduleNumber: 3
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 7
prerequisites:
  - astronomy-and-astrophysics-m2-l3
  - astrophysics-iv-m1-l1
  - astrophysics-ii-m1-l1
learningObjectives:
  - Derive $v_r = R_0(\Omega - \Omega_0)\sin l$ for circular Galactic rotation and its local form $v_r = Ad\sin 2l$, $v_t = Ad\cos 2l + Bd$.
  - Use the Oort constants to obtain $\Omega_0 = A - B$ and the local slope of the rotation curve, and measure the inner rotation curve by the tangent-point method.
  - Infer the enclosed mass $M(<R) = V^2R/G$ and argue quantitatively for a dark matter halo from a flat rotation curve.
  - Distinguish thin disc, thick disc and halo populations by age, metallicity and kinematics, and relate scale height to velocity dispersion.
concepts:
  - Differential Galactic rotation
  - Oort constants
  - Tangent-point method
  - Kinematic distance
  - Dark matter halo
  - Stellar populations
  - Thin and thick disc
tags:
  - physics
  - astronomy-and-astrophysics
  - galactic-structure
  - dark-matter
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - computational
***

# The Galactic Rotation Curve, Oort Constants and Stellar Populations

## Overview

Astrophysics IV described the Milky Way as a barred spiral with a flat rotation curve and a dark halo. This lesson derives those statements from measurements made inside the disc. Assuming circular orbits, the radial velocity of any star or gas cloud depends only on its Galactic longitude and the angular speed at its radius; expanding near the Sun gives the two Oort constants, which yield the Sun's angular speed and the local slope of the rotation curve from velocities and proper motions alone. The 21 cm (Lesson m2-l2) and CO (Lesson m2-l3) terminal velocities then give the inner rotation curve by the tangent-point method, and the enclosed mass $V^2R/G$ shows that mass keeps growing where light has run out. The lesson ends with the Galaxy's stellar populations — thin disc, thick disc and halo — distinguished by age, metallicity and velocity dispersion, with the vertical thickness of each disc tied to its dispersion through the same balance that set the atmospheric scale height in Lesson m2-l1.

## Learning Path

- **What you should already know**: 21 cm Doppler velocities and column densities (Lesson m2-l2); circular orbits and Kepler's laws (astrophysics-ii-m1-l1); the components of the Milky Way (astrophysics-iv-m1-l1).
- **What this lesson adds**: the radial and transverse velocity equations for differential rotation; Oort constants; tangent points and kinematic distances; the mass and dark matter inference; stellar populations and the isothermal-sheet model of disc thickness.
- **What later lessons this will unlock**: colour indices and spectroscopic radial velocities (Lesson m3-l2); fitting, period finding and error propagation (Lesson m3-l3).

## Core Explanation

### Velocities in a rotating disc

Place the Sun at distance $R_0 \approx 8.2$ kpc from the Galactic centre, moving on a circular orbit at $V_0 = \Omega_0 R_0$. A star at distance $d$ and Galactic longitude $l$ in the plane orbits at radius $R$ with angular speed $\Omega(R)$. For a velocity field $\mathbf{v} = \Omega\,\hat{\mathbf{z}}\times\mathbf{r}$, the component along a unit vector $\hat{\mathbf{n}}$ is $\Omega\,\hat{\mathbf{z}}\cdot(\mathbf{r}\times\hat{\mathbf{n}})$, that is $\Omega$ times the perpendicular distance from the Galactic centre to the line of sight. That distance is $R_0\sin l$ for every point on the line, so after subtracting the Sun's motion,

$$v_r = R_0\left[\Omega(R) - \Omega_0\right]\sin l.$$

The corresponding transverse velocity is $v_t = R_0(\Omega - \Omega_0)\cos l - \Omega d$. These relations are exact for circular orbits; the geometry gives $R^2 = R_0^2 + d^2 - 2R_0 d\cos l$.

### The Oort constants

For nearby stars, $d \ll R_0$, expand $\Omega(R) - \Omega_0 \approx (d\Omega/dR)_0(R - R_0)$ with $R - R_0 \approx -d\cos l$:

$$v_r \approx -R_0\left(\frac{d\Omega}{dR}\right)_0 d\sin l\cos l = A\,d\sin 2l,$$

$$v_t \approx -R_0\left(\frac{d\Omega}{dR}\right)_0 d\cos^2 l - \Omega_0 d = A\,d\cos 2l + B\,d,$$

where, using $\Omega = V/R$,

$$A = \frac{1}{2}\left(\frac{V_0}{R_0} - \frac{dV}{dR}\Big|_{R_0}\right), \qquad B = -\frac{1}{2}\left(\frac{V_0}{R_0} + \frac{dV}{dR}\Big|_{R_0}\right).$$

$A$ measures shear and $B$ local vorticity. Their combinations give

$$A - B = \Omega_0 = \frac{V_0}{R_0}, \qquad A + B = -\frac{dV}{dR}\Big|_{R_0}.$$

The radial velocities of nearby stars show a double wave in $l$ of amplitude $Ad$. The proper motion in longitude is

$$\mu_l = \frac{v_t}{4.74\,d} = \frac{A\cos 2l + B}{4.74}\ {\rm mas\,yr^{-1}}$$

for $A$ and $B$ in km s$^{-1}$ kpc$^{-1}$; it is independent of distance, so Gaia proper motions alone determine both constants. Recent values are $A = 15.3$ and $B = -11.9$ km s$^{-1}$ kpc$^{-1}$, giving $\Omega_0 = 27.2$ km s$^{-1}$ kpc$^{-1}$ and $dV/dR = -3.4$ km s$^{-1}$ kpc$^{-1}$: the local rotation curve is almost flat. For solid-body rotation $A = 0$; for a Keplerian curve $A = -3B$.

### Measuring the rotation curve

Inside the solar circle ($|l| < 90^\circ$), a line of sight passes closest to the centre at the **tangent point**, $R_{\min} = R_0\sin l$. If $\Omega$ decreases outward, the largest $|v_r|$ along that line comes from the tangent point, where the orbital velocity is parallel to the line of sight. The terminal velocity of 21 cm or CO emission therefore gives, for $0 < l < 90^\circ$,

$$V(R_0\sin l) = v_{r,\max} + V_0\sin l.$$

Scanning in longitude maps $V(R)$ from about 3 kpc to $R_0$. Outside the solar circle there are no tangent points, so independent distances are needed: Cepheids, young clusters, HII regions with spectrophotometric distances, and Gaia parallaxes.

Once $V(R)$ is known, it can be inverted to give a **kinematic distance**: a measured $v_r$ fixes $\Omega(R)$, hence $R$, and then $d = R_0\cos l \pm\sqrt{R^2 - R_0^2\sin^2 l}$. Inside the solar circle the two roots are the near and far distances, an ambiguity resolved by latitude extent or HI absorption.

### Enclosed mass and dark matter

For a roughly spherical mass distribution, a circular orbit requires $V^2/R = GM(<R)/R^2$, so

$$M(<R) = \frac{V^2R}{G}.$$

With $V_0 = 223$ km s$^{-1}$ at $R_0 = 8.2$ kpc this gives $9.5\times10^{10}\,M_\odot$. If that were nearly all the mass, beyond the visible disc $V$ would fall as $R^{-1/2}$, reaching 143 km s$^{-1}$ at 20 kpc. Instead $V$ remains near 220 km s$^{-1}$, so $M(<R) \propto R$ and $M(<20\,{\rm kpc}) \approx 2.3\times10^{11}\,M_\odot$, while the stars and gas total about $6\times10^{10}\,M_\odot$. A flat curve corresponds to a density $\rho(r) = V^2/4\pi Gr^2$, the singular isothermal sphere; at $R_0$ this gives $0.013\,M_\odot$ pc$^{-3}$, close to the measured local dark matter density of about $0.01\,M_\odot$ pc$^{-3}$ (0.4 GeV cm$^{-3}$). The rotation curve is thus a quantitative dark matter measurement, not just a qualitative hint.

### Stellar populations

Baade's division into Population I (young, metal-rich, disc) and Population II (old, metal-poor, halo) has been refined into kinematic and chemical components. Metallicity is quoted as $[{\rm Fe/H}] = \log_{10}(N_{\rm Fe}/N_{\rm H})_* - \log_{10}(N_{\rm Fe}/N_{\rm H})_\odot$.

| Component | Scale height | Age (Gyr) | $[{\rm Fe/H}]$ | $\sigma_z$ (km s$^{-1}$) | Rotation |
|---|---|---|---|---|---|
| Thin disc | ~300 pc | 0–10 | $-0.5$ to $+0.3$ | 10–25 | $\approx V_0$ |
| Thick disc | ~900 pc | 8–12 | $-1.0$ to $-0.3$, $\alpha$-enhanced | ~40 | lags by 30–50 km s$^{-1}$ |
| Stellar halo | $\rho \propto r^{-3.5}$ | >10 | $< -1$ | ~100 | little net rotation |
| Bulge/bar | ~kpc | mostly >8 | broad | ~100 | bar rotation |

Older populations are kinematically hotter and lag further behind circular rotation (**asymmetric drift**), because their random motions support them partly against gravity. The thick disc's high [$\alpha$/Fe] shows it formed quickly, before Type Ia supernovae enriched the gas in iron.

### Vertical structure: the isothermal sheet

A disc population with vertical dispersion $\sigma_z$ in a self-gravitating sheet obeys Poisson's equation $d^2\Phi/dz^2 = 4\pi G\rho$ and the Boltzmann-like distribution $\rho = \rho_0 e^{-\Phi/\sigma_z^2}$ — the same physics as an isothermal atmosphere with $kT/m$ replaced by $\sigma_z^2$. The solution is

$$\rho(z) = \rho_0\,{\rm sech}^2(z/z_0), \qquad z_0 = \frac{\sigma_z^2}{\pi G\Sigma},$$

with total surface density $\Sigma = 2\rho_0 z_0$. Far from the plane ${\rm sech}^2(z/z_0) \approx 4e^{-2z/z_0}$, an exponential with scale height $z_0/2$. Thickness grows as $\sigma_z^2$, which is why older, hotter populations form thicker discs.

## Key Ideas

- **Differential rotation**: $v_r = R_0(\Omega - \Omega_0)\sin l$ exactly for circular orbits.
- **Oort constants**: $v_r = Ad\sin 2l$, $v_t = Ad\cos 2l + Bd$; $A - B = \Omega_0$, $A + B = -dV/dR$.
- **Local values**: $A = 15.3$, $B = -11.9$ km s$^{-1}$ kpc$^{-1}$; the local rotation curve is nearly flat.
- **Tangent-point method**: $V(R_0\sin l) = v_{r,\max} + V_0\sin l$ inside the solar circle.
- **Dark matter**: $M(<R) = V^2R/G$ grows linearly where light fades; flat curves imply $\rho \propto r^{-2}$.
- **Populations**: thin disc, thick disc and halo differ in age, [Fe/H] and $\sigma_z$.
- **Isothermal sheet**: $z_0 = \sigma_z^2/\pi G\Sigma$; hotter populations are thicker.

## Worked Examples

### Example 1 — Galactic parameters from the Oort constants

With $A = 15.3$ and $B = -11.9$ km s$^{-1}$ kpc$^{-1}$ and $R_0 = 8.2$ kpc, find $\Omega_0$, $V_0$, $dV/dR$, the Sun's orbital period and $M(<R_0)$.

**Solution.** $\Omega_0 = A - B = 27.2$ km s$^{-1}$ kpc$^{-1}$, so $V_0 = 27.2\times8.2 = 223$ km s$^{-1}$, and $dV/dR = -(A + B) = -3.4$ km s$^{-1}$ kpc$^{-1}$. The period is

$$P = \frac{2\pi R_0}{V_0} = \frac{2\pi\times8.2\times3.086\times10^{16}\ {\rm km}}{223\ {\rm km\,s^{-1}}} = 7.13\times10^{15}\ {\rm s} = 226\ {\rm Myr}.$$

The enclosed mass is $M = V_0^2R_0/G = (2.23\times10^5)^2\times2.53\times10^{20}/6.674\times10^{-11} = 1.89\times10^{41}$ kg $= 9.5\times10^{10}\,M_\odot$.

### Example 2 — Tangent point and kinematic distance

At $l = 30^\circ$ the 21 cm terminal velocity is 108 km s$^{-1}$. Find $V$ at the tangent point. A molecular cloud on the same line of sight has $v_r = 60$ km s$^{-1}$; assuming a flat curve with $V = V_0 = 223$ km s$^{-1}$, find its possible distances.

**Solution.** $R = 8.2\sin30^\circ = 4.1$ kpc and $V = 108 + 223\times0.5 = 220$ km s$^{-1}$, consistent with a flat curve. For the cloud, $v_r = V_0\sin l\,(R_0/R - 1)$, so $R_0/R = 1 + 60/111.5 = 1.538$ and $R = 5.33$ kpc. Then

$$d = 8.2\cos30^\circ \pm\sqrt{5.33^2 - (8.2\times0.5)^2} = 7.10 \pm 3.41\ {\rm kpc},$$

giving 3.7 kpc (near) or 10.5 kpc (far).

### Example 3 — Thickness of the thin and thick discs

Take $\Sigma = 70\,M_\odot$ pc$^{-2}$ and $G = 4.301\times10^{-3}$ pc $M_\odot^{-1}$ (km s$^{-1}$)$^2$. Find the exponential scale heights for $\sigma_z = 20$ and 40 km s$^{-1}$.

**Solution.** For 20 km s$^{-1}$, $z_0 = 400/(\pi\times4.301\times10^{-3}\times70) = 400/0.946 = 423$ pc, so the scale height is $z_0/2 = 211$ pc. Doubling $\sigma_z$ quadruples it to 846 pc. These bracket the observed 300 pc thin disc and 900 pc thick disc; the simple model ignores the dark halo's contribution and the gas layer, but captures the $\sigma_z^2$ scaling.

## Common Misconceptions

- **"The Galaxy rotates like a solid wheel."** Solid-body rotation would give $A = 0$; the measured $A = 15.3$ km s$^{-1}$ kpc$^{-1}$ shows strong shear.
- **"A flat rotation curve means the angular speed is constant."** Flat means $V$ is constant, so $\Omega = V/R$ falls as $1/R$.
- **"Kinematic distances are unique."** Inside the solar circle each velocity corresponds to near and far distances.
- **"The dark matter evidence depends on the outer curve only."** The local density inferred from the curve and from vertical dynamics already exceeds the visible matter near the Sun's radius.

## Connections

- Circular orbits and $M = V^2R/G$ follow from Kepler's laws in astrophysics-ii-m1-l1; the rotating-frame description of $A$ and $B$ uses the non-inertial frames of mechanics-m2-l3.
- The isothermal sheet is the Galactic analogue of the atmospheric scale height of Lesson m2-l1 with $\rho \propto e^{-\Phi/\sigma_z^2}$ the Boltzmann distribution of thermal-physics-and-statistical-mechanics-m3-l1.
- The dark matter inference continues in astrophysics-iv-m2-l6; tangent-point and kinematic distances rely on the 21 cm methods of Lesson m2-l2 and astrophysics-iv-m1-l1.
- Gaia astrometry, queried in the astronomy-and-astrophysics-lab catalogue lesson, now measures Oort constants and population kinematics for billions of stars.

## Quick Check

1. Show that $A - B = \Omega_0$ and $A + B = -dV/dR$.
2. What proper motion in longitude do stars show towards $l = 90^\circ$?
3. At $l = 45^\circ$ the terminal velocity is 75 km s$^{-1}$. Find $R$ and $V$ at the tangent point.
4. Why is there no tangent point for $90^\circ < l < 270^\circ$?
5. A population has $\sigma_z = 10$ km s$^{-1}$. Estimate its scale height in the isothermal-sheet model.

## Takeaway

- Circular rotation gives $v_r = R_0(\Omega - \Omega_0)\sin l$; near the Sun this reduces to the Oort constants $A$ and $B$.
- $A - B$ gives the Sun's angular speed and $A + B$ the slope of the rotation curve, which is nearly flat.
- Tangent points map the inner rotation curve, and $M = V^2R/G$ then reveals a dark halo with $\rho \propto r^{-2}$.
- Thin disc, thick disc and halo differ systematically in age, metallicity and velocity dispersion, and $z_0 = \sigma_z^2/\pi G\Sigma$ links thickness to kinematics.
