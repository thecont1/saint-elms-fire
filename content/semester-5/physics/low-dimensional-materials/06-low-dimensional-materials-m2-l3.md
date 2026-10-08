***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: low-dimensional-materials
courseName: Low-Dimensional Materials (Physics Option C)
moduleId: low-dimensional-materials-module-2
moduleName: Two-Dimensional Materials and Nanostructures
lessonId: low-dimensional-materials-m2-l3
lessonName: Fabrication and Characterisation of Nanostructures
lessonNumber: 6
moduleNumber: 2
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - low-dimensional-materials-m2-l2
  - solid-state-physics-m1-l3
  - waves-and-optics-m3-l2
learningObjectives:
  - Compare top-down and bottom-up fabrication and estimate lithographic resolution from the Rayleigh criterion $R = k_1\lambda/\mathrm{NA}$.
  - Describe molecular-beam epitaxy, chemical vapour deposition, vapour–liquid–solid growth, mechanical and liquid-phase exfoliation, and hot-injection colloidal synthesis, stating what each controls.
  - Interpret AFM step heights, the Raman G, 2D and D bands of graphene, TEM images and photoluminescence spectra of nanostructures.
  - Estimate quantum-dot size dispersion from a photoluminescence linewidth.
concepts:
  - Top-down lithography
  - Molecular-beam epitaxy
  - Chemical vapour deposition of graphene
  - Mechanical and liquid-phase exfoliation
  - Hot-injection colloidal synthesis
  - Raman G and 2D bands
  - Transmission electron microscopy
tags:
  - physics
  - low-dimensional-materials
  - nanofabrication
  - characterisation
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
  - computational
***

# Fabrication and Characterisation of Nanostructures

## Overview

The physics of Lessons m1-l1 to m2-l2 is only useful if structures with the right dimensions can be made reproducibly and verified. Fabrication routes divide into **top-down** methods, which carve a bulk material or film into small features using lithography and etching, and **bottom-up** methods, which assemble atoms and molecules into the desired structure by epitaxy, chemical vapour deposition or colloidal chemistry. Two-dimensional crystals add a third route, exfoliation, which peels layers off a van der Waals solid. Each route trades quality, size, cost and scalability differently. The second half of the lesson covers the characterisation toolkit used in the Low-Dimensional Materials Lab: atomic force microscopy for thickness, Raman spectroscopy for layer number and defects, transmission electron microscopy for size and crystal structure, and photoluminescence for band gap and size distribution.

## Learning Path

- **What you should already know**: the confinement energies, Brus equation and finite-well levels (Lessons m1-l1 and m1-l3); the materials of Lessons m2-l1 and m2-l2; diffraction and resolution limits (Waves and Optics, Lesson m3-l2); X-ray diffraction (Solid State Physics, Lesson m1-l3).
- **What this lesson adds**: lithography and its resolution; epitaxial growth and self-assembled dots; CVD, VLS and exfoliation of 2D and 1D materials; hot-injection synthesis; AFM, Raman, TEM and PL as quantitative probes.
- **What later lessons this will unlock**: split-gate point contacts and single-electron transistors defined by electron-beam lithography (Lessons m3-l1 and m3-l2); quantum-dot optics and devices (Lesson m3-l3); the experiments of the Low-Dimensional Materials Lab.

## Core Explanation

### Top-down: lithography and etching

In **photolithography** a light-sensitive resist on the wafer is exposed through a mask, developed to leave a pattern, and the pattern is transferred into the material by etching or, with **lift-off**, by depositing metal over the patterned resist and dissolving it. Diffraction limits the smallest printable feature, the Rayleigh-type criterion

$$R = k_1\frac{\lambda}{\mathrm{NA}},$$

where NA is the numerical aperture of the projection optics and $k_1$ (0.25–0.8) depends on resist and process tricks. Shorter wavelengths drove the industry from mercury lamps (365 nm) to ArF excimer lasers (193 nm, with water immersion giving NA = 1.35) and to extreme ultraviolet (13.5 nm). **Electron-beam lithography** writes patterns serially with a focused electron beam; the electron wavelength is picometres, so resolution of about 10 nm is limited by resist and electron scattering rather than diffraction. It is slow but flexible, and is how the split gates and tunnel barriers of Module 3 devices are defined. Wet etching is usually isotropic; **reactive-ion etching** uses a directional plasma to cut vertical sidewalls. Films for contacts and gates are deposited by thermal evaporation or sputtering, as in the Lab (Lesson m1-l1).

### Bottom-up: epitaxy and self-assembly

**Molecular-beam epitaxy (MBE)** directs thermal beams of Ga, Al, In and As onto a heated crystal in ultra-high vacuum (below $10^{-8}$ Pa). At about one monolayer (0.28 nm of GaAs) per second, shutters switch composition within a single atomic layer, and intensity oscillations in reflection high-energy electron diffraction (RHEED) count monolayers in real time. This monolayer control made the quantum wells of Module 1 possible. **Metal-organic CVD (MOCVD)** achieves similar control with gas-phase precursors and is used for industrial lasers and LEDs.

Lattice mismatch can be exploited. InAs on GaAs has a 7% larger lattice constant; after about 1.7 monolayers of flat **wetting layer**, strain energy makes it favourable to form coherent islands 10–30 nm wide. This **Stranski–Krastanov** growth produces self-assembled quantum dots, which, capped with GaAs, are used in quantum-dot lasers and single-photon sources.

### Bottom-up: CVD and VLS growth

**Chemical vapour deposition of graphene** decomposes methane on copper foil at about 1000 °C in hydrogen. Carbon is almost insoluble in copper, so growth occurs on the surface and largely stops once the foil is covered: the process is **self-limiting** to a monolayer. (On nickel, dissolved carbon precipitates on cooling and gives multilayers.) The film is transferred to an insulating substrate using a polymer support such as PMMA, which introduces wrinkles and residues. MoS$_2$ and WS$_2$ are grown similarly from MoO$_3$ or WO$_3$ and sulphur vapour, and carbon nanotubes from hydrocarbons on Fe or Co nanoparticles, whose size sets the tube diameter.

Nanowires grow by the **vapour–liquid–solid (VLS)** mechanism: a gold nanoparticle on the substrate forms a liquid Au–Si alloy (eutectic 363 °C) with silicon from a silane precursor; once supersaturated, the droplet precipitates crystalline Si at its base, and the wire grows upward with a diameter set by the droplet.

### Exfoliation

**Mechanical exfoliation** uses adhesive tape to cleave a layered crystal repeatedly and press flakes onto Si with 300 nm SiO$_2$, where thin-film interference makes even a monolayer visible in an optical microscope. It gave the first graphene in 2004 and still yields the highest-quality flakes, but only tens of micrometres across and at random positions. **Liquid-phase exfoliation** sonicates or shears graphite, MoS$_2$ or hBN powder in a solvent such as N-methyl-2-pyrrolidone or aqueous surfactant, whose surface energy is matched to the layer cohesion; centrifugation then selects flake size and thickness. It scales to litres of ink for printed electronics, composites and battery electrodes, at the cost of small, defective, polydisperse flakes.

### Colloidal quantum-dot synthesis

In **hot-injection** synthesis (Murray, Norris and Bawendi, 1993) a selenium precursor (TOP–Se) is injected rapidly into a cadmium precursor in a hot coordinating solvent at about 300 °C. The sudden supersaturation exceeds the nucleation threshold, producing a short burst of nuclei; the temperature drops and the remaining monomer feeds growth of existing nuclei without new nucleation, the **LaMer** separation of nucleation and growth. While monomer is abundant, small particles grow faster than large ones, which **focuses** the size distribution to about 5%. Long-chain ligands such as oleic acid or trioctylphosphine oxide bind to the surface, prevent aggregation and passivate dangling bonds. Size, and hence colour through the Brus relation, is set by growth time and temperature, monitored by the absorption peak of aliquots. A wider-gap shell (CdSe/ZnS) confines the exciton away from surface traps and raises the PL quantum yield above 80%; Cd-free InP/ZnSe/ZnS dots now dominate displays.

### Characterisation toolkit

| Technique | What it measures | Typical resolution | Low-dimensional use |
|---|---|---|---|
| AFM (tapping mode) | surface height | ~0.1 nm vertical, ~10 nm lateral | layer thickness, step heights |
| Raman | phonon frequencies | ~1 cm$^{-1}$, ~1 μm spot | layer number, defects, strain |
| TEM / HRTEM | projected structure | ~0.1 nm | dot size, lattice fringes |
| PL / UV-Vis | emission / absorption | ~1 meV | gap, size, size dispersion |

**AFM.** A monolayer of graphene is 0.335 nm thick (the graphite interlayer spacing) and MoS$_2$ 0.65 nm, but AFM step heights on SiO$_2$ are often 0.4–1 nm because of adsorbed water and tip–sample forces; steps between layers of the same flake are more reliable.

**Raman.** Graphene has three key bands. The **G band** near 1580 cm$^{-1}$ is the in-plane $E_{2g}$ optical phonon at $\Gamma$; its position shifts with doping and strain. The **2D band** near 2700 cm$^{-1}$ is a second-order process involving two phonons near $K$, made resonant by the Dirac cones; in a monolayer it is a single sharp Lorentzian (FWHM ≈ 30 cm$^{-1}$) about twice as intense as G, while in a bilayer it broadens into four components and $I_{2D}/I_G$ falls towards 1. The **D band** near 1350 cm$^{-1}$ needs a defect to conserve momentum, so $I_D/I_G$ measures disorder. For MoS$_2$, the $E^1_{2g}$–$A_{1g}$ separation counts layers (Lesson m2-l2).

**TEM.** Electrons accelerated through 200 kV have relativistic wavelength

$$\lambda = \frac{h}{\sqrt{2m_0eV\left(1 + \dfrac{eV}{2m_0c^2}\right)}} = 2.51\ \text{pm},$$

so resolution (about 0.1 nm with aberration correction) is set by lens aberrations, not wavelength. High-resolution TEM shows lattice fringes of individual dots; histograms of hundreds of particles give the mean size and dispersion used to calibrate sizing curves, and electron diffraction identifies the crystal phase.

**PL and absorption.** The peak energy gives the gap and, through a sizing curve, the mean dot size; the linewidth of an ensemble is dominated by the size distribution; the integrated intensity relative to a standard gives the quantum yield. For films, a Tauc plot of the UV-Vis absorption extracts the gap.

## Key Ideas

- **Top-down vs bottom-up**: carving with lithography and etching versus assembling by epitaxy, CVD or chemistry.
- **Resolution**: $R = k_1\lambda/\mathrm{NA}$; electron-beam lithography reaches about 10 nm.
- **Epitaxy**: MBE gives monolayer control; Stranski–Krastanov strain relief makes self-assembled InAs dots.
- **CVD and VLS**: self-limiting monolayer graphene on Cu; catalyst droplets set nanowire and nanotube diameters.
- **Exfoliation**: mechanical for quality, liquid-phase for quantity.
- **Hot injection**: burst nucleation, separated growth and size focusing give ~5% size dispersion.
- **Probes**: AFM for thickness, Raman G/2D/D for layer number and defects, TEM for size and structure, PL for gap and dispersion.

## Worked Examples

### Example 1 — Lithographic resolution

Estimate the minimum feature for ArF immersion lithography ($\lambda = 193$ nm, NA = 1.35, $k_1 = 0.3$) and for EUV ($\lambda = 13.5$ nm, NA = 0.33, $k_1 = 0.4$).

**Solution.** For ArF immersion, $R = 0.3 \times 193/1.35 = 43$ nm. For EUV, $R = 0.4 \times 13.5/0.33 = 16$ nm. Features below 40 nm with ArF need multiple patterning, which is why EUV was introduced. A 10 nm quantum point contact is still made by electron-beam lithography.

### Example 2 — Raman bands of graphene

With a 532 nm laser, at what wavelengths do the G (1580 cm$^{-1}$) and 2D (2700 cm$^{-1}$) bands appear? A flake shows $I_{2D}/I_G = 2.1$ with a single 2D Lorentzian and no D band. Interpret.

**Solution.** The laser wavenumber is $10^7/532 = 18\,797$ cm$^{-1}$. The G band is at $18\,797 - 1580 = 17\,217$ cm$^{-1}$, or 580.8 nm; the 2D band at $16\,097$ cm$^{-1}$, or 621.2 nm. A single narrow 2D peak twice as strong as G indicates a monolayer, and the absent D band near 1350 cm$^{-1}$ (573.2 nm) shows low defect density: a high-quality single layer.

### Example 3 — Size dispersion from a PL linewidth

CdSe dots emit at 2.228 eV, corresponding by the Brus equation (Lesson m1-l3) to $R = 2.5$ nm. The ensemble PL FWHM is 100 meV. Estimate the spread in radius, assuming inhomogeneous broadening dominates.

**Solution.** From $E = 1.74 + 3.728/R^2 - 0.271/R$,

$$\frac{dE}{dR} = -\frac{2 \times 3.728}{R^3} + \frac{0.271}{R^2} = -0.477 + 0.043 = -0.434\ \text{eV nm}^{-1}.$$

A 0.100 eV spread therefore corresponds to $\Delta R = 0.100/0.434 = 0.23$ nm, about 9% of the radius (FWHM). Narrowing the emission to the 25 nm FWHM wanted for displays requires better size focusing.

## Common Misconceptions

- **"Optical lithography cannot make features smaller than the wavelength."** With immersion, high NA and low $k_1$, 193 nm light prints features near 40 nm; the limit is $k_1\lambda/\mathrm{NA}$, not $\lambda$.
- **"An AFM step of 0.8 nm means a bilayer."** Adsorbates and tip–substrate forces inflate step heights; Raman or optical contrast should confirm layer number.
- **"Any D band means the sample is ruined."** It indicates defects or edges; a small $I_D/I_G$ is normal, and its value quantifies disorder.
- **"TEM resolution is set by the electron wavelength."** At 2.5 pm the wavelength is far below the 0.1 nm achieved; lens aberrations set the limit.
- **"CVD graphene is identical to exfoliated graphene."** CVD films are polycrystalline, with grain boundaries and transfer residues that lower mobility.

## Connections

- The Rayleigh resolution criterion is the diffraction limit of Waves and Optics (Lesson m3-l2), and the visibility of graphene on SiO$_2$ is thin-film interference (Lesson m3-l1).
- RHEED and electron diffraction use the Bragg condition and reciprocal lattice of Solid State Physics (Lesson m1-l3).
- Nucleation and growth in hot injection are controlled by the supersaturation and free-energy balance of Thermal Physics and Statistical Mechanics (Lesson m3-l3).
- Thermal evaporation, sputtering, Raman, AFM, SEM, PL and Tauc analysis are the experiments of the Low-Dimensional Materials Lab (Lessons m1-l1, m1-l2 and m1-l4).
- Semiconductor fabs, display quantum-dot factories and graphene ink producers apply these routes at industrial scale (Lesson m3-l3).

## Quick Check

1. Distinguish top-down and bottom-up fabrication with one example of each.
2. Why is CVD graphene growth on copper self-limiting to a monolayer?
3. Describe the roles of burst nucleation and size focusing in hot-injection synthesis.
4. How do the 2D band shape and $I_{2D}/I_G$ distinguish monolayer from bilayer graphene?
5. Compute the wavelength of 100 keV electrons, including the relativistic correction.

## Takeaway

- Top-down lithography offers placement and integration; bottom-up growth offers atomic precision and crystalline perfection.
- MBE monolayer control and Stranski–Krastanov self-assembly produce quantum wells and dots; CVD and VLS produce 2D films, nanotubes and nanowires.
- Mechanical exfoliation gives the best 2D flakes; liquid-phase exfoliation gives scalable inks.
- Hot-injection synthesis separates nucleation from growth to make monodisperse colloidal dots.
- AFM, Raman, TEM and PL together establish thickness, layer number, defects, size and size distribution.
