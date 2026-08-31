***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: solid-state-physics
courseName: Solid State Physics
moduleId: solid-state-physics-module-1
moduleName: Crystal Structure
lessonId: solid-state-physics-m1-l3
lessonName: X-ray Diffraction and Bragg's Law
lessonNumber: 3
moduleNumber: 1
semesterNumber: 3
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 3
prerequisites:
  - solid-state-physics-m1-l2
  - waves-and-optics-m3-l1
learningObjectives:
  - State Bragg's law and the Laue condition.
  - Derive the structure factor for a crystal basis.
  - Predict the systematic absences from a structure.
  - Use the Ewald construction to interpret diffraction patterns.
concepts:
  - Bragg's law
  - Laue condition
  - Structure factor
  - Form factor
  - Ewald sphere
  - Systematic absences
tags:
  - physics
  - solid-state
  - x-ray-diffraction
sourceType: authored-courseware
assessmentHints:
  - derivation
  - problem-solving
  - conceptual
***

# X-ray Diffraction and Bragg's Law

## Overview
X-ray diffraction is the most important tool for determining crystal structures. The Bragg condition $2 d \sin\theta = n \lambda$ describes the constructive interference of X-rays reflected from crystal planes; the Laue condition generalises it to three dimensions. The *structure factor* — the Fourier transform of the basis — determines the relative intensities of the diffraction peaks, and from these intensities the atomic positions within the unit cell are determined. The *Ewald construction* is a geometric interpretation of the diffraction condition. This lesson develops the theory and applies it to common crystal structures.

## Learning Path
- What you should already know: Miller indices, wave interference, the reciprocal lattice concept.
- What this lesson adds: the diffraction condition, the structure factor, the Ewald construction.
- What it unlocks: the determination of crystal structures, the measurement of strain, and the identification of phases.

## Core Explanation
**Bragg's law.** X-rays incident on crystal planes are reflected. Constructive interference occurs when the path difference between successive planes is an integer number of wavelengths:

$$2 d \sin\theta = n \lambda, \quad n = 1, 2, 3, \ldots$$

where $d$ is the interplanar spacing, $\theta$ is the angle of incidence (also the angle of reflection), and $\lambda$ is the wavelength. The integer $n$ is the order of the reflection.

**Bragg planes.** Each set of lattice planes $(hkl)$ has its own $d_{hkl}$ and can produce a Bragg reflection. Different orders $n$ of the same plane are not independent — they are equivalent to other planes: $n (hkl) = (nh, nk, nl)$.

**Laue condition.** A more general condition: constructive interference occurs when the scattering vector $\vec{k}_\text{out} - \vec{k}_\text{in}$ equals a reciprocal lattice vector $\vec{G}$:

$$\vec{k}_\text{out} - \vec{k}_\text{in} = \vec{G}.$$

This is equivalent to Bragg's law for the appropriate geometry, but applies to arbitrary directions of incidence and to non-cubic crystals.

**Ewald construction.** A geometric interpretation: draw a circle (sphere) of radius $k = 2\pi/\lambda$ centred at the sample; the origin of reciprocal space is on the sphere. A reflection occurs when any reciprocal lattice point lies on the sphere. Rotating the crystal (or the incident beam) sweeps the reciprocal lattice through the sphere, producing a diffraction pattern.

**Reciprocal lattice.** The set of vectors $\vec{G} = h \vec{b}_1 + k \vec{b}_2 + l \vec{b}_3$ where $\vec{a}_i \cdot \vec{b}_j = 2\pi \delta_{ij}$. The reciprocal of fcc is bcc, and vice versa (with a scale factor). The reciprocal lattice is the natural setting for diffraction theory.

**Structure factor.** The amplitude of the diffraction peak at a reciprocal lattice vector $\vec{G}$ is proportional to the structure factor:

$$F(\vec{G}) = \sum_{j=1}^{n} f_j e^{-i \vec{G} \cdot \vec{r}_j},$$

where $f_j$ is the *atomic form factor* of atom $j$ and $\vec{r}_j$ is the position of atom $j$ in the unit cell. The intensity of the peak is $|F(\vec{G})|^2$.

**Atomic form factor.** The Fourier transform of the electron density of a single atom: $f(\vec{G}) = \int \rho(\vec{r}) e^{-i \vec{G} \cdot \vec{r}} d^3 r$. Falls off with $|\vec{G}|$ (or $\sin\theta/\lambda$). The form factor for X-rays is the electron distribution; for neutrons, the nuclear scattering length.

**Systematic absences.** If the structure factor $F(\vec{G}) = 0$ for certain $\vec{G}$ by symmetry, those reflections are absent. Examples:
- fcc: $F = 0$ unless $h, k, l$ are all even or all odd. So $(100), (110), (210), \ldots$ are absent.
- bcc: $F = 0$ unless $h + k + l$ is even. So $(100), (111), (210), \ldots$ are absent.
- Diamond: $F = 0$ unless $h, k, l$ are all even with $h + k + l = 4 n$.

**X-ray sources.** Laboratory: Cu K$\alpha$ ($\lambda = 1.54$ Å), Mo K$\alpha$ ($\lambda = 0.71$ Å). Synchrotron: tunable, high intensity, polarised. The wavelength should be comparable to the lattice parameter for convenient diffraction angles.

**Powder diffraction.** For a polycrystalline sample, the reciprocal lattice points become spheres. The Ewald construction gives cones of diffraction (Debye–Scherrer cones). The diffraction pattern is a set of rings at angles satisfying Bragg's law.

**Powder Diffraction File (PDF).** A database of powder diffraction patterns for known materials. The standard tool for phase identification (e.g. "is this aluminium or aluminium oxide?").

**Rietveld refinement.** A technique to refine the crystal structure (atomic positions, thermal parameters, occupancies) by least-squares fitting of the calculated powder pattern to the observed one. Standard for modern powder diffraction.

**Laue diffraction.** Use a broad spectrum (white X-ray beam) and a stationary single crystal. Each set of planes picks out the wavelength that satisfies the Bragg condition. The pattern shows the symmetry of the crystal (used to orient single crystals).

**Single-crystal diffraction.** Rotate (or precess) a single crystal; record many Bragg reflections as they come into the diffracting condition. Determine the structure factor for each reflection; solve for the electron density by Fourier inversion:

$$\rho(\vec{r}) = \frac{1}{V} \sum_{\vec{G}} F(\vec{G}) e^{i \vec{G} \cdot \vec{r}}.$$

This is the *electron-density map*, which directly reveals atomic positions.

**Phase problem.** The structure factor $F(\vec{G}) = |F| e^{i \phi}$ has a magnitude (related to the intensity) but the phase $\phi$ is not directly measurable. Direct methods (Sayre's equation, multi-wavelength anomalous diffraction) recover the phases statistically or experimentally.

**Molecular replacement.** For proteins and other large molecules, place a known similar structure in the unit cell; compute the structure factors; refine against the data. Standard for protein crystallography.

**Neutron diffraction.** Uses neutrons (from reactors or spallation sources). Sensitive to light atoms (especially hydrogen, which is invisible to X-rays). Magnetic neutron scattering reveals magnetic structures.

**Electron diffraction.** In a transmission electron microscope. The wavelength is much smaller than for X-rays, giving very high spatial resolution. Sensitive to local structure; used for nanocrystals and amorphous materials.

**Synchrotron radiation.** High-intensity, tunable X-rays from relativistic electrons in storage rings. Enables time-resolved diffraction, high-pressure studies, and microdiffraction.

**Debye–Waller factor.** Thermal vibrations reduce the intensity of high-angle peaks. The correction is $e^{-2 M}$, where $M = B (\sin\theta/\lambda)^2$ and $B$ is the *Debye–Waller parameter* (proportional to the mean-square atomic displacement).

**Bragg–Williams order–disorder.** A simple model of order–disorder transitions on a lattice. The order parameter $\eta$ measures the difference between the occupancies of the two sublattices; $\eta = 1$ is fully ordered, $\eta = 0$ is fully disordered. The transition is at a critical temperature $T_c$.

**Applications of X-ray diffraction.**
- Structure determination: positions of atoms in the unit cell.
- Phase identification: comparing the pattern to the PDF.
- Strain measurement: shifts in peak positions.
- Crystallite size: Scherrer formula, peak broadening.
- Texture: orientation distribution in polycrystals.
- Time-resolved studies: dynamics of phase transitions and chemical reactions.

**Laue condition in 3D.** For arbitrary $\vec{k}_\text{in}$ and $\vec{k}_\text{out}$ (with $|\vec{k}_\text{in}| = |\vec{k}_\text{out}|$ for elastic scattering), the difference $\vec{k}_\text{out} - \vec{k}_\text{in}$ must equal a reciprocal lattice vector. For a single crystal with a monochromatic beam, this happens only for specific orientations (rotating-crystal method) or only in specific directions (Laue method with a polychromatic beam).

**Structure factor for bcc.** Atoms at $(0, 0, 0)$ and $(1/2, 1/2, 1/2)$: $F = f (1 + e^{-i \pi (h + k + l)})$. This is $0$ when $h + k + l$ is odd, $2 f$ when even. So bcc has systematic absences: $(100), (111), (210), (211), (300), \ldots$ are absent. Allowed: $(110), (200), (211)$ (wait, $2 + 1 + 1 = 4$ even, allowed), $(220)$, etc.

**Structure factor for fcc.** Atoms at $(0, 0, 0), (1/2, 1/2, 0), (1/2, 0, 1/2), (0, 1/2, 1/2)$: $F = f (1 + e^{-i \pi (h + k)} + e^{-i \pi (h + l)} + e^{-i \pi (k + l)})$. $F = 0$ when $h, k, l$ are mixed parity (some even, some odd). Allowed only when all even or all odd. So $(100), (110), (210), (211), (300), (221), \ldots$ are absent. Allowed: $(111), (200), (220), (311), (222), \ldots$

**Diamond structure factor.** Two interpenetrating fcc lattices, displaced by $(1/4, 1/4, 1/4)$. $F = F_\text{fcc} (1 + e^{-i \pi (h + k + l)/2})$. $F = 0$ unless $h + k + l$ is a multiple of $4$ (combined condition). So $(111), (220), (311), (400), (331), \ldots$ are allowed; $(200), (222), (420), \ldots$ are absent.

**Multiplicity.** A given set of planes $(hkl)$ can be equivalent to many others by symmetry. The number of equivalent planes is the *multiplicity*. For cubic, $(100)$ has multiplicity 6, $(110)$ has 12, $(111)$ has 8. Multiplicity affects the intensity of powder diffraction peaks.

**Lorentz-polarisation factor.** In powder diffraction, the observed intensity depends on the angle and the polarisation of the X-rays. The corrections are the Lorentz factor (depends on the Bragg angle) and the polarisation factor (depends on the monochromator). Standard corrections in the data-reduction step.

**Atomic thermal vibrations.** Atoms vibrate at finite temperature, smearing out the electron density. The Debye–Waller factor reduces the intensity of high-angle peaks. The thermal parameters are often reported in crystallographic databases.

**Bragg's law derivation.** Two adjacent crystal planes separated by $d$. Incident X-rays at angle $\theta$ reflect off each plane. The path difference is $2 d \sin\theta$ (one path is longer by this amount). For constructive interference, $2 d \sin\theta = n \lambda$. ✓

**Ewald sphere derivation.** For a reciprocal lattice point $\vec{G}$ on the sphere of radius $k = 2\pi/\lambda$ centred at the crystal, $|\vec{k}_\text{out} - \vec{k}_\text{in}| = |\vec{G}|$, and the direction of $\vec{G}$ is along $\vec{k}_\text{out} - \vec{k}_\text{in}$. So $\vec{k}_\text{out} = \vec{k}_\text{in} + \vec{G}$, which is the Laue condition. The reflected beam is in the direction of $\vec{k}_\text{out}$.

**Bragg planes in reciprocal space.** A set of lattice planes $(hkl)$ corresponds to a reciprocal lattice vector $\vec{G}_{hkl}$ of magnitude $2\pi/d_{hkl}$, perpendicular to the planes. The Bragg condition $|\vec{k}_\text{out} - \vec{k}_\text{in}| = 2\pi/d_{hkl}$ is the Laue condition with $\vec{G} = \vec{G}_{hkl}$.

**Forbidden reflections.** Reflections forbidden by the structure factor (e.g. fcc $(100)$) are called *forbidden* even though they would satisfy Bragg's law geometrically. They are forbidden by the *basis*, not by the lattice.

**Anomalous scattering.** Near an atomic absorption edge, the atomic form factor has a complex contribution: $f = f_0 + \Delta f' + i \Delta f''$. This breaks Friedel's law ($F(\vec{G}) = F^*(-\vec{G})$) and is used in multi-wavelength anomalous diffraction (MAD) to solve the phase problem.

**Texture and preferred orientation.** In a powder, the crystallites are usually randomly oriented. In a textured sample (e.g. a rolled metal sheet), the orientations are not random. The powder pattern shows different intensities or even missing peaks.

**Pair distribution function (PDF).** A total-scattering technique that gives the real-space distribution of interatomic distances, including disordered materials. Modern synchrotron-based technique.

**High-pressure diffraction.** Diamond anvil cells with X-ray windows allow diffraction at pressures up to millions of atmospheres. The structure of materials under extreme conditions (Earth's interior, planetary cores) can be studied.

**In-situ and time-resolved diffraction.** Using fast detectors and intense synchrotron beams, the evolution of structure during chemical reactions, phase transitions, or mechanical loading can be followed in real time.

**Bragg's law in neutron diffraction.** Same form, but the scattering is from nuclei (or magnetic moments) rather than electrons. Useful for hydrogen and magnetic structures.

**Precession photography.** A single-crystal diffraction technique that records a specific reciprocal lattice layer. Used for symmetry determination.

**Texture analysis.** A pole figure shows the distribution of grain orientations in a polycrystalline sample. Used in geology (rock textures) and metallurgy (rolled and recrystallised metals).

**Crystallography software.** SHELX (small-molecule structure solution), PHENIX (macromolecular), GSAS-II (general powder), Olex2 (small molecules). All modern crystallography relies on these tools.

**Laue equations.** The three Laue conditions are $\vec{a}_i \cdot \Delta \vec{k} = 2 \pi h_i$ for $i = 1, 2, 3$ (where $\Delta \vec{k} = \vec{k}_\text{out} - \vec{k}_\text{in}$). They are equivalent to the single vector condition $\Delta \vec{k} = \vec{G}$ (where $\vec{G} = h_1 \vec{b}_1 + h_2 \vec{b}_2 + h_3 \vec{b}_3$).

## Key Ideas
- Bragg: $2 d \sin\theta = n \lambda$.
- Laue: $\vec{k}_\text{out} - \vec{k}_\text{in} = \vec{G}$.
- Structure factor: $F(\vec{G}) = \sum_j f_j e^{-i \vec{G} \cdot \vec{r}_j}$.
- Systematic absences from the structure.
- Ewald construction: $\vec{G}$ on the sphere of radius $k = 2\pi/\lambda$.

## Worked Examples
**Example 1 — X-ray diffraction of NaCl.** NaCl is fcc (with two species). $\lambda = 1.54$ Å, $a = 5.64$ Å. $d_{200} = a/2 = 2.82$ Å. $\sin\theta_{200} = \lambda/(2 d_{200}) = 1.54/(2 \times 2.82) = 0.273$, so $\theta_{200} \approx 15.9°$. This is the first strong peak.

**Example 2 — Structure factor of bcc.** Atoms at $(0, 0, 0)$ and $(1/2, 1/2, 1/2)$. $F = f (1 + e^{-i \pi (h + k + l)})$. For $(110)$: $1 + 1 = 2 f$. For $(100)$: $1 + (-1) = 0$. ✓

**Example 3 — Number of allowed reflections in fcc.** Allowed: $h, k, l$ all even or all odd. Up to $\sin\theta/\lambda = 0.5$ Å$^{-1}$ (i.e. $h^2 + k^2 + l^2 \le 8$ for $a = 4$ Å, etc.): the allowed indices are $(111), (200), (220), (311)$, and so on. About half of the geometrically possible reflections are forbidden.

**Example 4 — Powder pattern of Cu.** Cu is fcc, $a = 3.61$ Å, $\lambda = 1.54$ Å. $d_{hkl} = a/\sqrt{h^2 + k^2 + l^2}$. Allowed reflections: $(111) d = 2.09$ Å, $\theta = 21.7°$; $(200) d = 1.81$ Å, $\theta = 25.2°$; $(220) d = 1.28$ Å, $\theta = 37.3°$; $(311) d = 1.09$ Å, $\theta = 45.0°$; $(222) d = 1.04$ Å, $\theta = 47.6°$. (Some of these are approximate.) The first four peaks are the characteristic Cu pattern.

**Example 5 — Ewald sphere.** $k = 2\pi/\lambda = 2\pi/(1.54) = 4.08$ Å$^{-1}$. The reciprocal lattice of Cu has $G_{hkl} = 2\pi \sqrt{h^2 + k^2 + l^2}/a$. For $(111)$: $G = 2\pi \sqrt{3}/3.61 = 3.01$ Å$^{-1}$. The $(111)$ point lies inside the Ewald sphere (radius $4.08 > 3.01$ Å$^{-1}$). To bring it on the sphere, rotate the crystal or use a longer wavelength.

## Common Misconceptions
- **"Bragg's law is the only diffraction condition."** The Laue condition is more general and equivalent in 3D.
- **"Higher-order reflections are different."** They are equivalent to reflections from planes $(nh, nk, nl)$ of a finer structure.
- **"All reflections satisfying Bragg's law appear."** No — the structure factor can be zero (systematic absences).
- **"The structure factor gives the atomic positions directly."** Only after solving the phase problem (by direct methods or experimental phasing).

## Connections
X-ray diffraction is the foundation of structural science. It determines the structure of everything from metals to proteins. The same theory, with different probes (electrons, neutrons), applies to materials that X-rays cannot probe. The reciprocal lattice is the basis of band theory and phonon theory in subsequent lessons.

## Quick Check
1. State Bragg's law.
2. State the Laue condition.
3. Define the structure factor.
4. What are the systematic absences for fcc?
5. Describe the Ewald construction.

## Takeaway
- Bragg: $2 d \sin\theta = n \lambda$.
- Laue: $\vec{k}_\text{out} - \vec{k}_\text{in} = \vec{G}$.
- Structure factor: $F(\vec{G}) = \sum_j f_j e^{-i \vec{G} \cdot \vec{r}_j}$.
- Systematic absences: $F = 0$ for certain $(hkl)$.
- Ewald construction: $\vec{G}$ on the sphere of radius $k = 2\pi/\lambda$.
