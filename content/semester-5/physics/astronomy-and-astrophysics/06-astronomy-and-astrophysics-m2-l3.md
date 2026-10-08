***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: astronomy-and-astrophysics
courseName: Astronomy and Astrophysics (Physics Option A)
moduleId: astronomy-and-astrophysics-module-2
moduleName: Stellar Atmospheres and the Interstellar Medium
lessonId: astronomy-and-astrophysics-m2-l3
lessonName: Interstellar Dust, Molecular Clouds and the Onset of Star Formation
lessonNumber: 6
moduleNumber: 2
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 60
releaseOrder: 6
prerequisites:
  - astronomy-and-astrophysics-m2-l2
  - astrophysics-iii-m1-l1
  - thermal-physics-and-statistical-mechanics-m2-l1
learningObjectives:
  - Relate extinction to dust optical depth, $A_\lambda = 1.086\,\tau_\lambda$, and correct distance moduli and colours using $E(B-V)$ and $R_V = 3.1$.
  - Describe the interstellar extinction curve and explain its wavelength dependence from grain size.
  - Derive the virial theorem $2K + U = 0$ and use it to estimate cloud masses and boundedness from line widths.
  - Derive the Jeans mass and free-fall time and apply them to molecular clouds and dense cores.
concepts:
  - Interstellar extinction
  - Colour excess and reddening
  - Ratio of total to selective extinction
  - Interstellar extinction curve
  - Virial theorem
  - Jeans mass
  - Free-fall time
tags:
  - physics
  - astronomy-and-astrophysics
  - interstellar-dust
  - star-formation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
  - short-answer
***

# Interstellar Dust, Molecular Clouds and the Onset of Star Formation

## Overview

About 1% of the interstellar mass is in solid grains, yet this dust dims and reddens starlight across the Galactic plane, hides the Galactic centre at visible wavelengths and controls the chemistry and cooling of the coldest gas. This lesson first quantifies dust as an opacity source: extinction in magnitudes is a rescaled optical depth, reddening is its wavelength dependence, and the ratio $R_V$ links the two so that observed colours can correct distances. The extinction curve, from the infrared to the ultraviolet, reveals grain sizes and composition. The second half follows the densest, dust-shielded gas into molecular clouds, where hydrogen is molecular and temperatures fall to 10 K. The virial theorem tests whether a cloud is gravitationally bound, and the Jeans criterion gives the mass above which thermal pressure cannot prevent collapse. Together with the free-fall time, these set the scales for the onset of star formation.

## Learning Path

- **What you should already know**: optical depth and the slab solution (Lesson m1-l1); ISM phases and HI column densities (Lesson m2-l2); the distance modulus (astrophysics-iii-m1-l1); kinetic theory and equipartition (thermal-physics-and-statistical-mechanics-m2-l1).
- **What this lesson adds**: extinction, colour excess and $R_V$; the extinction curve and grain physics; the gas-to-dust ratio; molecular cloud properties; the virial theorem; the Jeans mass and free-fall time.
- **What later lessons this will unlock**: stellar populations and disc structure (Lesson m3-l1); extinction-corrected photometry and colour indices (Lesson m3-l2); fitting reddened photometry (Lesson m3-l3).

## Core Explanation

### Extinction as optical depth

Light from a star behind a dust layer of optical depth $\tau_\lambda$ is reduced to $F_\lambda = F_{\lambda,0}e^{-\tau_\lambda}$ (scattering out of the beam counts as extinction). In magnitudes,

$$A_\lambda = -2.5\log_{10}\frac{F_\lambda}{F_{\lambda,0}} = 2.5\log_{10}(e)\,\tau_\lambda = 1.086\,\tau_\lambda,$$

and the distance modulus becomes $m_\lambda - M_\lambda = 5\log_{10}(d/10\,{\rm pc}) + A_\lambda$. For grains of radius $a$ and column density $N_d$, $\tau_\lambda = N_d\,\pi a^2 Q_{\rm ext}(\lambda)$, where the efficiency $Q_{\rm ext}$ follows from Mie theory. For $2\pi a \gg \lambda$, $Q_{\rm ext} \to 2$ independent of wavelength (grey extinction); for $2\pi a \ll \lambda$, absorption scales as $Q_{\rm abs} \propto a/\lambda$ and scattering as $Q_{\rm sca} \propto (a/\lambda)^4$. Interstellar grains, with $a \approx 0.005$–$0.25\,\mu$m and a size distribution $dn/da \propto a^{-3.5}$, are comparable to optical wavelengths, so extinction falls with increasing wavelength, roughly as $\lambda^{-1}$ in the visible.

### Reddening and $R_V$

Because blue light is extinguished more than red, dust makes stars look redder. The **colour excess**

$$E(B-V) = (B-V)_{\rm obs} - (B-V)_0 = A_B - A_V$$

compares the observed colour with the intrinsic colour expected from the spectral type, which Lesson m1-l2's Saha–Boltzmann physics fixes. The **ratio of total to selective extinction**,

$$R_V = \frac{A_V}{E(B-V)} \approx 3.1$$

in the diffuse ISM, converts a measurable colour excess into the extinction needed for distances. Dense clouds, where grains grow, have greyer extinction and $R_V \approx 4$–$6$. For O and B stars the empirical ratio $E(U-B)/E(B-V) = 0.72$ defines the **reddening-free index** $Q = (U-B) - 0.72(B-V)$, from which spectral type and hence intrinsic colour can be read without knowing the reddening. Gas and dust are well mixed: ultraviolet absorption-line surveys give

$$\frac{N_H}{E(B-V)} = 5.8\times10^{21}\ {\rm cm^{-2}\,mag^{-1}}, \qquad \frac{A_V}{N_H} \approx 5.3\times10^{-22}\ {\rm mag\,cm^2},$$

consistent with a dust-to-gas mass ratio near 0.01. In the Galactic plane $A_V$ accumulates at roughly 1–2 mag kpc$^{-1}$.

### The extinction curve

Normalised to $A_V$, the mean diffuse-ISM extinction for $R_V = 3.1$ is:

| Band | $\lambda$ (μm) | $A_\lambda/A_V$ |
|---|---|---|
| B | 0.44 | 1.32 |
| V | 0.55 | 1.00 |
| R | 0.66 | 0.75 |
| I | 0.80 | 0.48 |
| J | 1.25 | 0.28 |
| H | 1.65 | 0.18 |
| K | 2.2 | 0.11 |

In the near infrared $A_\lambda \propto \lambda^{-1.7}$ approximately, so infrared surveys penetrate the plane: the Galactic centre, with $A_V \approx 30$ mag, has $A_K \approx 3$ mag. In the ultraviolet the curve shows a broad bump at 217.5 nm, attributed to small carbonaceous (graphitic or polycyclic aromatic) grains, and a steep far-ultraviolet rise from very small grains; at 9.7 μm a silicate absorption feature identifies the other main grain component. Aligned elongated grains also polarise starlight, tracing the Galactic magnetic field. Energy absorbed by dust is re-emitted thermally at $T_d \approx 15$–$20$ K, peaking near 160 μm ($B_\lambda$) in the far infrared.

### Molecular clouds

Where $A_V \gtrsim 1$ mag, dust shields molecules from dissociating ultraviolet light and grain surfaces catalyse H$_2$ formation. H$_2$ has no permanent dipole and its lowest transitions need $\sim500$ K, so cold clouds are traced by CO, whose $J = 1\to0$ line at 2.6 mm (115.27 GHz) is converted to H$_2$ column through $X_{\rm CO} = N({\rm H_2})/W_{\rm CO} \approx 2\times10^{20}$ cm$^{-2}$ (K km s$^{-1}$)$^{-1}$. Giant molecular clouds have masses $10^5$–$10^6\,M_\odot$, radii 10–50 pc, mean densities $10^8$–$10^9$ m$^{-3}$, temperatures 10–20 K and line widths $\sigma \approx 2$–$5$ km s$^{-1}$, far above the thermal sound speed of 0.2 km s$^{-1}$: their internal motions are supersonically turbulent. Dense cores within them reach $10^{10}$–$10^{11}$ m$^{-3}$ on 0.1 pc scales. The mean mass per particle in molecular gas is $\mu = 2.33\,m_H$.

### The virial theorem

For a system of particles define the moment of inertia $I = \sum m_i r_i^2$. Differentiating twice and using Newton's second law,

$$\frac{1}{2}\frac{d^2I}{dt^2} = \sum m_i v_i^2 + \sum \mathbf{F}_i\cdot\mathbf{r}_i = 2K + U,$$

where the second step uses the fact that the gravitational potential energy is homogeneous of degree $-1$ in the coordinates. In a steady state the left side averages to zero, giving the **virial theorem** $2K + U = 0$ (magnetic fields and external pressure add further terms). For a uniform sphere $U = -\frac{3}{5}GM^2/R$; for a one-dimensional velocity dispersion $\sigma$, $K = \frac{3}{2}M\sigma^2$. Equilibrium then requires

$$M_{\rm vir} = \frac{5\sigma^2 R}{G}, \qquad \alpha_{\rm vir} = \frac{5\sigma^2R}{GM}.$$

Clouds with $\alpha_{\rm vir} \lesssim 2$ are gravitationally bound; those with $\alpha_{\rm vir} \gg 2$ are dispersing unless confined by external pressure.

### The Jeans criterion

If thermal motion alone supports a cloud, $2K = 3NkT = 3MkT/\mu m_H$. Collapse requires $2K < |U|$:

$$\frac{3MkT}{\mu m_H} < \frac{3}{5}\frac{GM^2}{R}.$$

Eliminating $R = (3M/4\pi\rho)^{1/3}$ gives the **Jeans mass**

$$M_J = \left(\frac{5kT}{G\mu m_H}\right)^{3/2}\left(\frac{3}{4\pi\rho}\right)^{1/2},$$

and, at fixed density, the **Jeans radius** $R_J = (15kT/4\pi G\mu m_H\rho)^{1/2}$. Since $M_J \propto T^{3/2}\rho^{-1/2}$, cold dense gas is most unstable. A pressureless cloud collapses in the **free-fall time**

$$t_{\rm ff} = \left(\frac{3\pi}{32G\rho}\right)^{1/2},$$

independent of size. Because molecular gas radiates efficiently through dust and CO lines, collapse stays nearly isothermal; as $\rho$ rises $M_J$ falls, so a collapsing cloud fragments hierarchically until the fragments become opaque to their own cooling radiation, near $0.01\,M_\odot$. A GMC contains hundreds to thousands of Jeans masses and has $t_{\rm ff}$ of a few Myr, yet the Milky Way forms only about $2\,M_\odot$ yr$^{-1}$ of stars from $\sim10^9\,M_\odot$ of molecular gas: turbulence and magnetic fields keep the star-formation efficiency near 1% per free-fall time.

## Key Ideas

- **Extinction**: $A_\lambda = 1.086\,\tau_\lambda$ adds to the distance modulus.
- **Colour excess**: $E(B-V) = A_B - A_V$, and $A_V = R_V E(B-V)$ with $R_V \approx 3.1$ in diffuse gas.
- **Extinction curve**: roughly $\lambda^{-1}$ in the optical, $A_K/A_V \approx 0.11$, a 217.5 nm bump and a far-UV rise.
- **Gas-to-dust**: $N_H/E(B-V) = 5.8\times10^{21}$ cm$^{-2}$ mag$^{-1}$.
- **Virial theorem**: $2K + U = 0$ gives $M_{\rm vir} = 5\sigma^2R/G$ and the virial parameter.
- **Jeans mass**: $M_J \propto T^{3/2}\rho^{-1/2}$; a few solar masses for dense cores.
- **Free-fall time**: $t_{\rm ff} = (3\pi/32G\rho)^{1/2}$, about 0.3 Myr in dense cores.

## Worked Examples

### Example 1 — Distance to a reddened B star

A B0 V star ($M_V = -4.0$, $(B-V)_0 = -0.30$) has $V = 11.20$ and $B - V = 0.40$. Find its distance, the distance an observer ignoring dust would infer, and the hydrogen column.

**Solution.** $E(B-V) = 0.40 - (-0.30) = 0.70$, so $A_V = 3.1\times0.70 = 2.17$ mag. The true distance modulus is $11.20 + 4.0 - 2.17 = 13.03$, so

$$d = 10^{(13.03 + 5)/5}\ {\rm pc} = 10^{3.606} = 4.0\ {\rm kpc}.$$

Ignoring extinction gives $10^{(15.20 + 5)/5} = 11.0$ kpc, too far by a factor of 2.7. The hydrogen column is $5.8\times10^{21}\times0.70 = 4.1\times10^{21}$ cm$^{-2}$.

### Example 2 — Jeans mass of a dense core

A dense core has $T = 10$ K and particle density $n = 1.0\times10^{10}$ m$^{-3}$ ($\mu = 2.33$). Find $M_J$, $R_J$ and $t_{\rm ff}$.

**Solution.** $\rho = n\mu m_H = 10^{10}\times2.33\times1.674\times10^{-27} = 3.90\times10^{-17}$ kg m$^{-3}$. Then

$$\frac{5kT}{G\mu m_H} = \frac{5\times1.381\times10^{-23}\times10}{6.674\times10^{-11}\times3.90\times10^{-27}} = 2.65\times10^{15}\ {\rm kg\,m^{-1}},$$

whose $3/2$ power is $1.37\times10^{23}$, while $(3/4\pi\rho)^{1/2} = (6.12\times10^{15})^{1/2} = 7.82\times10^7$. So $M_J = 1.07\times10^{31}$ kg $= 5.4\,M_\odot$. $R_J = (15kT/4\pi G\mu m_H\rho)^{1/2} = 4.0\times10^{15}$ m $= 0.13$ pc, and $t_{\rm ff} = (3\pi/(32\times6.674\times10^{-11}\times3.90\times10^{-17}))^{1/2} = 1.06\times10^{13}$ s $= 0.34$ Myr. Dense cores are thus the natural sites of individual star formation.

### Example 3 — Is a giant molecular cloud bound?

CO observations give a cloud of radius 20 pc, one-dimensional velocity dispersion 3.0 km s$^{-1}$ and mass $1.0\times10^5\,M_\odot$. Find $M_{\rm vir}$, $\alpha_{\rm vir}$ and the free-fall and crossing times.

**Solution.** $M_{\rm vir} = 5\times(3.0\times10^3)^2\times20\times3.086\times10^{16}/6.674\times10^{-11} = 4.16\times10^{35}$ kg $= 2.1\times10^5\,M_\odot$, so $\alpha_{\rm vir} = 2.1$: marginally bound. The mean density is $\rho = M/(\frac{4}{3}\pi R^3) = 2.0\times10^{-19}$ kg m$^{-3}$ ($n = 5.2\times10^7$ m$^{-3}$), so $t_{\rm ff} = 4.7$ Myr, comparable to the crossing time $R/\sigma = 6.5$ Myr. Turbulent support and collapse compete on similar timescales.

## Common Misconceptions

- **"Interstellar reddening is like a red filter that adds red light."** Dust removes more blue than red light; nothing is added.
- **"Dust extinction is grey."** Diffuse-ISM extinction falls by an order of magnitude from B to K; only large grains in dense clouds approach grey behaviour.
- **"Any cloud above the Jeans mass collapses immediately."** Turbulence, magnetic fields and rotation provide additional support; the Jeans mass only measures thermal support.
- **"The free-fall time of a large cloud is longer than that of a small one."** $t_{\rm ff}$ depends only on density, not on size.
- **"Molecular hydrogen is observed directly in cold clouds."** H$_2$ barely radiates at 10 K; CO and dust emission are used as tracers.

## Connections

- The virial theorem generalises the energy relations of mechanics-m3-l2 and reappears for galaxy clusters and dark matter in astrophysics-iv-m2-l6.
- The Jeans criterion compares gravitational and thermal energies using the equipartition of thermal-physics-and-statistical-mechanics-m2-l1; Rayleigh and Mie scattering link to waves-and-optics-m3-l2.
- Extinction corrections are essential to the distance ladder of astrophysics-iv-m3-l9 and to the colour–magnitude diagrams of astrophysics-iii-m3-l9.
- Extinction coefficients for Earth's atmosphere, measured in the astronomy-and-astrophysics-lab photometry lesson, follow the same $A = 1.086\,\tau$ relation, as does aerosol optical depth in climate science.

## Quick Check

1. Show that $A_\lambda = 1.086\,\tau_\lambda$.
2. A star has $E(B-V) = 0.25$. Estimate $A_V$, $A_K$ and $N_H$.
3. Why do infrared observations reach the Galactic centre when optical observations cannot?
4. By what factor does the Jeans mass change if a core is compressed by a factor of 100 in density at constant temperature?
5. Derive $M_{\rm vir} = 5\sigma^2R/G$ from $2K + U = 0$ for a uniform sphere.

## Takeaway

- Extinction is optical depth in magnitudes; reddening and $R_V \approx 3.1$ let colours correct distances.
- The extinction curve reflects grain sizes comparable to optical wavelengths, with carbonaceous and silicate signatures.
- Molecular clouds are cold, dusty and turbulent; the virial theorem tests boundedness from line widths.
- The Jeans mass and free-fall time set the scales of collapse and fragmentation at the onset of star formation.
