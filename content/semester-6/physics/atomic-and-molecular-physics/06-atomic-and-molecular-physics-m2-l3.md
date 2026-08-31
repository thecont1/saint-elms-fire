***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-6
semesterName: Semester 6
subjectId: physics
subjectName: Physics
courseId: atomic-and-molecular-physics
courseName: Atomic and Molecular Physics
moduleId: atomic-and-molecular-physics-module-2
moduleName: Lasers, Resonance and X-rays
lessonId: atomic-and-molecular-physics-m2-l3
lessonName: X-ray Production, Spectra and Moseley's Law
lessonNumber: 6
moduleNumber: 2
semesterNumber: 6
difficulty: intermediate
estimatedStudyMinutes: 55
releaseOrder: 6
prerequisites:
  - atomic-and-molecular-physics-m1-l2
  - solid-state-physics-m2-l2
learningObjectives:
  - Describe the production of X-rays by bremsstrahlung and characteristic line emission.
  - Explain the origin of K, L, M series lines in terms of inner-shell transitions.
  - State and apply Moseley's law to identify elements from their X-ray spectra.
concepts:
  - Bremsstrahlung
  - K-alpha and K-beta lines
  - Duane–Hunt law
  - Moseley's law
  - Siegbahn notation
  - Characteristic X-ray spectrum
tags:
  - physics
  - x-rays
  - spectroscopy
  - atomic-physics
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# X-ray Production, Spectra and Moseley's Law

## Overview

X-rays occupy the high-frequency end of the electromagnetic spectrum, with photon energies from about 100 eV to several hundred keV. They are produced when fast electrons decelerate in matter (bremsstrahlung, "braking radiation") or when inner-shell electrons are knocked out of atoms and replaced by electrons from higher shells, emitting characteristic X-ray lines that are fingerprints of the emitting element. This lesson derives the bremsstrahlung spectrum, the Duane–Hunt cut-off, and the energy levels of inner-shell electrons; explains the K, L, M series notation; and works through Moseley's law, the empirical relation that established atomic number rather than atomic mass as the fundamental ordering of the periodic table. The lesson ties together atomic structure, the previous treatment of multi-electron atoms, and the diagnostic use of X-rays in medicine, materials science, and astrophysics.

## Learning Path

- **What you should already know**: the structure of multi-electron atoms and the screening of nuclear charge by inner electrons (Lesson m1-l2); the basic operation of an X-ray tube and the use of Coolidge-type sources; the Bragg diffraction condition for X-rays (covered in waves and optics, Semester 3).
- **What this lesson adds**: a quantitative account of bremsstrahlung and characteristic X-ray production, the K/L/M series notation, Moseley's law and its historical importance, and an introduction to modern synchrotron and free-electron X-ray sources.
- **What later lessons this will unlock**: the use of X-ray spectroscopy in solid-state physics and crystallography (covered in Semester 5); the diagnostic use of X-ray emission lines in astrophysics; the role of X-ray fluorescence in materials analysis.

## Core Explanation

An X-ray tube is essentially a diode: a heated cathode emits electrons by thermionic emission, and a high voltage $V$ (typically 20–200 kV) accelerates them into a metal anode. The electrons strike the anode and either slow down in the Coulomb fields of the nuclei (producing a continuous bremsstrahlung spectrum) or eject inner-shell electrons (producing a discrete characteristic spectrum).

**Bremsstrahlung** is the radiation emitted by a charged particle when it is accelerated. For an electron of kinetic energy $E = eV$ passing near a nucleus of charge $Z e$, the classical Larmor formula gives the radiated power $P \propto Z^2 e^2 a^2 / c^3$, where $a$ is the acceleration. The result is a broad, continuous spectrum extending from zero up to a sharp cut-off at the photon energy $h\nu_{\max} = eV$ (the **Duane–Hunt limit**), corresponding to the case in which an electron loses all of its kinetic energy in a single photon emission. The spectrum is roughly flat in photon-number units but rises toward the low-energy end; in wavelength units it has the famous **Kramers law** form, $I(\lambda) d\lambda \propto (1/\lambda) d\lambda$ between zero and a short-wavelength limit $\lambda_{\min} = hc/(eV)$.

In bremsstrahlung, no discrete atomic level is involved — the electron starts and ends in unbound states in the continuum. The spectrum is therefore a featureless continuum, useful for radiography (where the broad bremsstrahlung is the imaging beam) but not directly informative about the element.

**Characteristic X-ray emission** is a discrete process. A high-energy electron collides with a tightly bound inner-shell electron and ejects it, leaving a vacancy in, say, the K shell (n = 1). An electron from a higher shell (L, M, N) then drops down to fill the vacancy, emitting an X-ray photon whose energy is the difference of the two inner-shell binding energies. The resulting lines are labelled by the shell that hosts the original vacancy (K, L, M) and the shell from which the replacement electron came ($\alpha, \beta, \gamma$ for L$\to$K, M$\to$K, N$\to$K respectively). The standard **Siegbahn notation** keeps the historical letter labels: K$\alpha_1$, K$\alpha_2$, K$\beta_1$, and so on.

The energies of inner-shell binding energies are large and roughly hydrogenic in form, with screening corrections. For a K-shell electron in an atom of atomic number $Z$,

$$E_K \approx -13.6\,\text{eV} \times (Z - \sigma_K)^2,$$

where $\sigma_K \approx 1$ is the screening constant that accounts for the other K electron (there is only one other, so $\sigma_K \approx 1$). The L-shell binding energy is smaller and depends on the sub-shell:

$$E_{L_i} \approx -13.6\,\text{eV} \times \frac{(Z - \sigma_{L_i})^2}{4},$$

with $\sigma_{L_{2,3}} \approx 3.5$ and $\sigma_{L_1} \approx 2$ reflecting the partial screening by the inner electrons.

The K$\alpha$ photon energy is then approximately

$$h\nu_{K\alpha} \approx 13.6\,\text{eV} \times (Z - 1)^2 \left(1 - \frac{1}{4}\right) = 13.6\,\text{eV} \times 0.75 \times (Z - 1)^2,$$

which gives the famous linear relation

$$\sqrt{\nu_{K\alpha}} \approx \sqrt{\frac{3 \times 13.6\,\text{eV}}{4 h}} (Z - 1).$$

This is **Moseley's law**, empirically discovered by Henry Moseley in 1913–1914 from a systematic study of X-ray spectra. Moseley's plot of $\sqrt{\nu}$ against $Z$ for the K$\alpha$ lines of the elements from calcium to zinc produced a strikingly linear graph, with small but systematic deviations that Bohr's theory later explained through the screening constant $\sigma$. The importance of Moseley's law is that it established atomic number as the fundamental ordering parameter of the periodic table, not atomic mass. Before Moseley, several elements were misordered or missing; the law predicted gaps that were soon filled (element 72, hafnium, was discovered in 1923) and resolved the controversies over the rare earths.

The K$\beta$ line is similarly related to $(Z - \sigma_K)^2 \times (1 - 1/9)$ with the same screening constant. The K$\alpha$ doublet (K$\alpha_1$ and K$\alpha_2$) arises from the spin-orbit splitting of the L shell into $L_3$ ($2p_{3/2}$) and $L_2$ ($2p_{1/2}$) sub-shells, with K$\alpha_1$ slightly higher in energy than K$\alpha_2$.

The relative intensities of the lines in a series are governed by the matrix elements and degeneracies. For the K series, the intensity ratios are approximately

$$I(K\alpha_1) : I(K\alpha_2) : I(K\beta_1) \approx 100 : 50 : 15,$$

roughly constant across a wide range of $Z$.

**Detection of X-rays** is most often done with semiconductor detectors (Si-Li, Ge, CdZnTe) or with gas-filled proportional counters. Energy-dispersive spectroscopy resolves the lines and provides a direct elemental analysis; wavelength-dispersive spectroscopy using a crystal spectrometer gives higher resolution. The detector efficiency falls above about 30 keV for silicon because the photoelectric cross-section decreases; high-energy X-rays are best detected with denser materials such as germanium or cadmium zinc telluride.

**Modern X-ray sources** go far beyond the laboratory tube. **Synchrotron radiation** from relativistic electrons circulating in a storage ring spans from infrared to hard X-rays, with a brilliance many orders of magnitude higher than a tube. **Free-electron lasers** (FELs) such as the Linac Coherent Light Source (LCLS) and SACLA produce coherent, ultra-bright X-ray pulses of femtosecond duration, enabling time-resolved studies of chemical reactions and structural dynamics. **X-ray astronomy** observes the emission from hot plasmas in stellar coronae, supernova remnants, active galactic nuclei, and galaxy clusters, with line diagnostics that give temperature, density, and ionisation state.

**X-ray fluorescence (XRF)** is a non-destructive analytical technique in which a sample is illuminated with X-rays and the characteristic lines of the constituent elements are detected. Handheld XRF devices are used in art conservation, archaeology, mining, and forensics; synchrotron XRF can detect trace elements at the parts-per-billion level.

## Key Ideas

- **Bremsstrahlung** is the continuous X-ray spectrum produced by electron deceleration; the short-wavelength cut-off is set by the Duane–Hunt law, $\lambda_{\min} = hc/(eV)$.
- **Characteristic X-rays** are produced when an inner-shell vacancy is filled by an electron from a higher shell; the lines are labelled K, L, M for the shell that hosted the vacancy and $\alpha, \beta, \gamma$ for the shell of the replacement electron.
- **Moseley's law**: $\sqrt{\nu_{K\alpha}} \propto (Z - \1)$ — the empirical relation that ordered the periodic table by atomic number.
- **Inner-shell binding energies** are approximately hydrogenic with screening; the K-shell energy of an atom with atomic number $Z$ is roughly $-13.6\,\text{eV} \times (Z - 1)^2$.
- **Siegbahn notation** is the standard naming convention for X-ray lines.
- **Detection** is performed with semiconductor detectors or gas counters; energy-dispersive and wavelength-dispersive spectrometers are the two main approaches.
- **Modern sources** (synchrotrons, free-electron lasers) provide brilliance and coherence far beyond laboratory tubes.

## Worked Examples

### Example 1 — Duane–Hunt cut-off and minimum wavelength

A Coolidge tube is operated at 50 kV. What is the shortest-wavelength X-ray photon it can produce?

**Solution.** The Duane–Hunt relation is

$$\lambda_{\min} = \frac{hc}{eV} = \frac{1240\,\text{eV·nm}}{5 \times 10^4\,\text{eV}} = 0.0248\,\text{nm} = 0.248\,\text{Å}.$$

This is in the hard-X-ray range, suitable for medical radiography and basic materials diffraction. The corresponding photon energy is 50 keV.

### Example 2 — Moseley's law for copper

The K$\alpha$ X-ray line of copper has wavelength $\lambda = 1.5418\,\text{Å}$, corresponding to $\nu = c/\lambda = 1.945 \times 10^{18}\,\text{Hz}$. Use Moseley's law to determine the screening constant $\sigma_K$ and the slope constant for the K$\alpha$ line of all elements.

**Solution.** Moseley's law for the K$\alpha$ line is

$$\nu_{K\alpha} = R c \left(\frac{1}{1^2} - \frac{1}{2^2}\right)(Z - \sigma_K)^2 = \frac{3}{4} R c (Z - \sigma_K)^2,$$

where $R$ is the Rydberg constant. For copper, $Z = 29$:

$$1.945 \times 10^{18} = \frac{3}{4} \times 3.29 \times 10^{15} \times (29 - \sigma_K)^2,$$

$$(29 - \sigma_K)^2 = \frac{1.945 \times 10^{18}}{2.47 \times 10^{15}} \approx 787,$$

$$29 - \sigma_K = 28.05, \quad \sigma_K \approx 0.95 \approx 1.$$

This matches the theoretical expectation: only one other K-shell electron provides screening, so $\sigma_K \approx 1$. The slope constant is

$$k_{K\alpha} = \sqrt{\frac{3 R c}{4}} \approx 1.57 \times 10^8\,\text{Hz}^{1/2}.$$

A quick check: for $Z = 26$ (iron), $\sqrt{\nu_{K\alpha}} \approx 1.57 \times 10^8 \times 25 = 3.93 \times 10^9\,\text{Hz}^{1/2}$, giving $\nu \approx 1.54 \times 10^{19}\,\text{Hz}$ and $\lambda \approx 1.94\,\text{Å}$, in good agreement with the measured value of about 1.94 Å.

### Example 3 — Energy-dispersive spectrum of a brass sample

A brass sample (Cu and Zn) is excited by a $^{241}$Am source, and the energy-dispersive spectrum shows peaks at 8.05 keV and 8.91 keV. Identify the elements and lines.

**Solution.** The Cu K$\alpha$ line is at 8.05 keV and the Zn K$\alpha$ line is at 8.91 keV. The difference of about 0.86 keV is consistent with the trend of Moseley's law: for $\Delta Z = 1$,

$$\Delta \nu \approx 2 k_{K\alpha} \Delta Z = 2 \times 1.57 \times 10^8 \times 1 = 3.14 \times 10^8\,\text{Hz}^{1/2},$$

and the corresponding $\Delta E$ in this energy range is approximately 1 keV. This is a standard application of XRF in alloy analysis.

## Common Misconceptions

- **"Bremsstrahlung is characteristic of the anode material."** No. Bremsstrahlung depends only on the electron energy and the average $Z$ of the anode (through $Z^2$ in the cross-section); it does not show discrete features tied to atomic levels. The characteristic lines are the discrete spectrum on top of the continuum.
- **"X-rays are produced by transitions of outer (valence) electrons."** No. X-ray characteristic lines involve inner-shell electrons, which have binding energies in the keV range. Valence transitions produce visible or ultraviolet photons.
- **"Higher voltage makes the K$\alpha$ line shift to higher energy."** The K$\alpha$ line is set by the atomic energy levels and is independent of the tube voltage, as long as the voltage exceeds the K-edge. Raising the voltage only increases the bremsstrahlung intensity and shifts the cut-off.
- **"Moseley's law is exact."** It is an excellent empirical and theoretical approximation but neglects fine structure, relativistic corrections, and chemical effects. For high-precision work, the screening constant is fitted rather than calculated.
- **"X-rays cannot be focused."** They can. Grazing-incidence mirrors focus soft X-rays; multilayer-coated mirrors and zone plates focus harder X-rays. Synchrotron beamlines routinely focus X-rays to sub-micrometre spots, and X-ray microscopes achieve 10 nm resolution.

## Connections

- The K- and L-shell binding energies derived here are the same inner-shell energies that determine the photoelectric cross-section used in medical X-ray imaging and in the attenuation of cosmic X-rays by interstellar gas.
- The Moseley plot is a direct predecessor of the modern understanding of the periodic table; the deviations from exact linearity at high $Z$ are explained by relativistic effects, which were later folded into the Dirac equation.
- The same K-, L-, M-shell structure underlies the X-ray emission spectra of ionised atoms in hot astrophysical plasmas, where the line ratios give electron temperature and density.
- Bragg diffraction of X-rays, treated in waves and optics, is the historical method of measuring crystal structure; modern X-ray sources and detectors have extended this to time-resolved and single-molecule regimes.
- Synchrotron radiation is an explicit demonstration of special relativity: the radiation pattern of a relativistic electron is beamed into a narrow forward cone, and the spectrum is shifted up by a factor of $\gamma^3$.

## Quick Check

1. State the Duane–Hunt law and explain its physical origin.
2. The K$\alpha$ line of iron has wavelength 1.94 Å. Use Moseley's law to estimate the K$\alpha$ wavelength of nickel ($Z = 28$).
3. Why is the bremsstrahlung spectrum continuous while the characteristic X-ray spectrum is discrete?
4. In Siegbahn notation, what is the K$\beta_1$ line, and which shells does it connect?
5. Why is the bremsstrahlung intensity proportional to $Z^2$ in the classical Larmor formula?

## Takeaway

- Bremsstrahlung produces a continuous X-ray spectrum with a sharp short-wavelength cut-off given by the Duane–Hunt law.
- Characteristic X-ray lines are produced by inner-shell transitions, with the K, L, M series naming the shell that hosts the original vacancy.
- Moseley's law, $\sqrt{\nu} \propto (Z - \sigma)$, established atomic number as the ordering of the periodic table.
- Modern X-ray sources — synchrotrons and free-electron lasers — provide brilliance and time resolution far beyond laboratory tubes, enabling new experiments in materials science, chemistry, and biology.
- X-ray spectroscopy is a powerful, non-destructive analytical tool for elemental analysis, from archaeology to astrophysics.
