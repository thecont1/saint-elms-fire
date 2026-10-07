***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: low-dimensional-materials
courseName: Low-Dimensional Materials (Physics Option C)
moduleId: low-dimensional-materials-module-1
moduleName: Quantum Confinement
lessonId: low-dimensional-materials-m1-l1
lessonName: Length Scales and Quantum Confinement
lessonNumber: 1
moduleNumber: 1
semesterNumber: 5
difficulty: intermediate
estimatedStudyMinutes: 50
releaseOrder: 1
prerequisites:
  - solid-state-physics-m3-l1
  - introduction-to-quantum-mechanics-m2-l2
learningObjectives:
  - Identify the de Broglie wavelength, the exciton Bohr radius and the mean free path as the length scales that decide when a structure is "low-dimensional".
  - Compute particle-in-a-box confinement energies $E_n = n^2\pi^2\hbar^2/(2m^*L^2)$ for electrons and holes in semiconductor structures and compare them with $k_BT$.
  - Classify quantum wells, quantum wires and quantum dots by the number of confined directions and the number of free directions.
  - Distinguish the weak and strong confinement regimes using the ratio of the structure size to the exciton Bohr radius.
concepts:
  - Quantum confinement
  - de Broglie wavelength
  - Effective mass
  - Particle-in-a-box energy scale
  - Exciton Bohr radius
  - Dimensionality of nanostructures
tags:
  - physics
  - low-dimensional-materials
  - quantum-confinement
  - nanostructures
sourceType: authored-courseware
status: in-review
assessmentHints:
  - conceptual
  - derivation
  - problem-solving
  - short-answer
***

# Length Scales and Quantum Confinement

## Overview

A crystal becomes "low-dimensional" not when it is small in absolute terms but when one or more of its dimensions is comparable to the de Broglie wavelength of its carriers, tens of nanometres for a semiconductor conduction electron at room temperature but under a nanometre in a metal. In a layer, wire or particle thinner than this wavelength, the wavefunction forms a standing wave and the corresponding kinetic energy is quantised. This lesson sets up the course vocabulary: the effective mass, the particle-in-a-box energy scale, the comparison with $k_BT$ that decides whether quantisation is observable, and the exciton Bohr radius that separates weak from strong confinement. It then classifies nanostructures by the number of confined directions, from quantum wells through wires to dots.

## Learning Path

- **What you should already know**: the free-electron model and Fermi wavelength (Solid State Physics, Lesson m3-l1); the infinite and finite square wells (Introduction to Quantum Mechanics, Lesson m2-l2); the effective mass near a band edge.
- **What this lesson adds**: the criterion $L \lesssim \lambda_{\text{dB}}$; confinement energies for real semiconductors; the well, wire and dot hierarchy; weak and strong confinement.
- **What later lessons this will unlock**: the density of states in each dimensionality (Lesson m1-l2); excitons and the size-dependent gap of quantum dots (Lesson m1-l3); graphene and nanotube band structure (Lessons m2-l1 and m2-l2); quantised transport in Module 3.

## Core Explanation

### Why size matters: the de Broglie wavelength

A particle of momentum $p$ has de Broglie wavelength $\lambda = h/p$. Near a band minimum a crystal electron has dispersion $E = \hbar^2 k^2/2m^*$, where the **effective mass** $m^*$ summarises the periodic potential (Solid State Physics, Lesson m3-l2). For a thermal electron with kinetic energy of order $k_BT$ the relevant length is the **thermal de Broglie wavelength**

$$\lambda_{\text{th}} = \frac{h}{\sqrt{2 m^* k_B T}}.$$

At 300 K this is about 7.6 nm for a free electron, 29 nm in GaAs ($m^* = 0.067\,m_e$) and 64 nm in InSb ($m^* = 0.014\,m_e$). In a metal the relevant electrons sit at a Fermi energy of several electron-volts; copper has $k_F = 1.36\ \text{Å}^{-1}$ and $\lambda_F = 2\pi/k_F \approx 0.46$ nm, about one interatomic spacing. Confinement is therefore in practice a semiconductor phenomenon: a 10 nm GaAs layer is "thin" for its electrons, while a 10 nm copper film holds twenty wavelengths and behaves almost like bulk.

Two further lengths recur: the **mean free path** $\ell_e = v\tau$, which decides whether transport is diffusive or ballistic (Module 3), and the **exciton Bohr radius** $a_B^*$, the size of a bound electron–hole pair, which decides how strongly a nanocrystal's spectrum shifts with size.

### Particle in a box with an effective mass

For an electron between infinite barriers a distance $L$ apart along $z$, free in the $x$–$y$ plane, the envelope wavefunction separates, $\psi = e^{i(k_x x + k_y y)}\,\chi(z)$, with $\chi(0) = \chi(L) = 0$, giving $\chi_n(z) = \sqrt{2/L}\sin(n\pi z/L)$ and energies

$$E_n = \frac{n^2 \pi^2 \hbar^2}{2 m^* L^2}, \qquad n = 1, 2, 3, \ldots$$

and the total energy is

$$E(n, k_x, k_y) = E_n + \frac{\hbar^2 (k_x^2 + k_y^2)}{2m^*}.$$

Each $n$ labels a **subband**, a 2D free-electron band lifted above the bulk band edge by $E_n$. A useful constant is

$$\frac{\hbar^2}{2 m_e} = 0.0381\ \text{eV nm}^2,$$

so that for an electron of effective mass $m^* = m_r m_e$ in a well of width $L$ (in nanometres),

$$E_1 = \frac{\pi^2 \times 0.0381}{m_r L^2}\ \text{eV} = \frac{0.376}{m_r L^2}\ \text{eV}.$$

For GaAs ($m_r = 0.067$) and $L = 10$ nm, $E_1 \approx 56$ meV, against 3.8 meV for a free electron. Every "blue shift with decreasing size" in the course traces back to this $1/L^2$ scaling.

### Confinement versus thermal energy

Quantisation is *observable* only if the level spacing exceeds the energies that smear it, most universally $k_BT$, 25.9 meV at 300 K and 0.36 meV at 4.2 K. The condition $E_2 - E_1 = 3E_1 \gg k_BT$ requires

$$L \ll \pi\hbar\sqrt{\frac{3}{2 m^* k_B T}}.$$

For GaAs this bound is about 25 nm at room temperature and 200 nm at liquid-helium temperature. Room-temperature confinement therefore needs structures of order 10 nm, made possible by epitaxial growth with monolayer control (Lesson m2-l3), whereas at cryogenic temperatures much larger lithographic structures become quantum, which is why the first quantised-conductance and Coulomb-blockade experiments (Module 3) were done in millikelvin refrigerators. Scattering broadening $\hbar/\tau$ (0.66 meV for $\tau = 1$ ps) and size fluctuations, which give $\delta E_1/E_1 = 2\,\delta L/L$, also smear the levels.

### Wells, wires and dots

Dimensionality counts the directions in which carriers remain *free*:

| Structure | Confined | Free | Energy spectrum | Example |
|---|---|---|---|---|
| Bulk | 0 | 3 | $\hbar^2 k^2/2m^*$, continuous | GaAs crystal |
| Quantum well (2D) | 1 | 2 | $E_n + \hbar^2 k_\parallel^2/2m^*$ | GaAs/AlGaAs layer, MoS$_2$ monolayer |
| Quantum wire (1D) | 2 | 1 | $E_{n,m} + \hbar^2 k_z^2/2m^*$ | Si nanowire, carbon nanotube |
| Quantum dot (0D) | 3 | 0 | $E_{n,m,l}$, discrete | CdSe nanocrystal, InAs island |

A **quantum well** is a thin narrow-gap layer between wider-gap barriers; with only the lowest subband populated its carriers form a two-dimensional electron gas (2DEG). A **quantum wire** confines two directions; for a rectangular cross-section $L_x \times L_y$ with infinite barriers the subband edges are $E_{n,m} = (\pi^2\hbar^2/2m^*)(n^2/L_x^2 + m^2/L_y^2)$. A **quantum dot** confines all three and has a discrete, atom-like spectrum; for a cube of side $L$, $E_{n,m,l} = E_1(n^2 + m^2 + l^2)$, and for a sphere of radius $R$ the ground state is $\pi^2\hbar^2/(2m^*R^2)$. The density of states goes as $\sqrt{E}$ in 3D, is a staircase in 2D, diverges as $1/\sqrt{E}$ at each 1D subband edge and is a set of delta functions in 0D (Lesson m1-l2).

### Holes, band gaps and the first optical consequence

Holes quantise too: a hole of mass $m_h^*$ has levels $E_{h,n} = n^2\pi^2\hbar^2/(2m_h^*L^2)$ below the valence band edge, more closely spaced because $m_h^* > m_e^*$. The lowest interband transition of a quantum well is therefore

$$E_{11} = E_g + E_{e,1} + E_{h,1},$$

which exceeds $E_g$ and grows as the well narrows: the **size-dependent band gap** that makes emission colour tunable by geometry alone. Lesson m1-l3 refines it with finite barriers and the electron–hole Coulomb attraction.

### Excitons and the weak and strong confinement regimes

A conduction electron and a valence hole can form a hydrogen-like bound state, the **exciton**. Scaling the hydrogen atom (Introduction to Quantum Mechanics, Lesson m3-l2) with the reduced mass $\mu = m_e^* m_h^*/(m_e^* + m_h^*)$ and permittivity $\varepsilon_r$ gives

$$a_B^* = \varepsilon_r \frac{m_e}{\mu}\, a_0, \qquad E_X = \frac{\mu}{m_e}\frac{1}{\varepsilon_r^2}\,(13.6\ \text{eV}),$$

with $a_0 = 0.0529$ nm. For GaAs ($\varepsilon_r = 12.9$, $m_e^* = 0.067$, $m_h^* = 0.45$, $\mu = 0.058\,m_e$) this gives $a_B^* \approx 12$ nm and $E_X \approx 4.8$ meV (measured: 4.2 meV); for CdSe ($\varepsilon_r \approx 9.5$, $m_e^* = 0.13$, $m_h^* = 0.45$) $a_B^* \approx 5$ nm.

For a nanocrystal of radius $R$ the exciton Bohr radius is the yardstick:

- **Weak confinement**, $R \gg a_B^*$: the exciton forms first and its centre-of-mass motion is quantised; the gap shift is small, of order $\pi^2\hbar^2/(2MR^2)$ with $M = m_e^* + m_h^*$.
- **Strong confinement**, $R \ll a_B^*$: electron and hole are quantised independently and the Coulomb attraction is a correction; the shift is of order $\pi^2\hbar^2/(2\mu R^2)$ and can reach an electron-volt in sub-2-nm CdSe dots.

Display-grade colloidal dots are strongly confined: radii of about 1–4 nm span the visible spectrum.


## Key Ideas

- **Confinement criterion**: a direction is quantised when its extent is comparable to the carrier de Broglie wavelength.
- **Effective mass**: near a band edge the electron is a free particle of mass $m^*$; small $m^*$ means strong confinement.
- **Energy scale**: $E_n = n^2\pi^2\hbar^2/(2m^*L^2)$, conveniently $E_1 = 0.376/(m_r L^2)$ eV with $L$ in nm.
- **Observability**: level spacing must exceed $k_BT$ and $\hbar/\tau$.
- **Dimensionality**: wells, wires and dots confine one, two and three directions.
- **Size-dependent gap**: the lowest transition energy $E_g + E_{e,1} + E_{h,1}$ blue-shifts as the structure shrinks.
- **Exciton Bohr radius**: $a_B^* = \varepsilon_r (m_e/\mu) a_0$ separates the weak ($R \gg a_B^*$) and strong ($R \ll a_B^*$) confinement regimes.

## Worked Examples

### Example 1 — Subband energies of a GaAs quantum well

A GaAs quantum well is 10 nm wide. Taking $m_e^* = 0.067\,m_e$ and infinite barriers, find the first three electron levels and decide which are resolvable at room temperature.

**Solution.** Using $E_1 = 0.376/(m_r L^2)$ eV,

$$E_1 = \frac{0.376}{0.067 \times 100} = 0.0561\ \text{eV} = 56\ \text{meV}.$$

Then $E_2 = 4E_1 = 224$ meV and $E_3 = 9E_1 = 505$ meV. The spacing $E_2 - E_1 = 168$ meV is about $6.5\,k_BT$ at 300 K, so the subbands are well resolved. In a real GaAs/Al$_{0.3}$Ga$_{0.7}$As well the barrier is only about 0.23 eV high, so the infinite-well $E_3$ lies far above it; the finite-well treatment of Lesson m1-l3 lowers all the levels.

### Example 2 — Thermal de Broglie wavelength

Compute $\lambda_{\text{th}}$ at 300 K for a GaAs conduction electron and compare it with the Fermi wavelength of copper, 0.46 nm.

**Solution.** With $m^* = 0.067 \times 9.109 \times 10^{-31} = 6.10 \times 10^{-32}$ kg and $k_BT = 4.14 \times 10^{-21}$ J,

$$\sqrt{2 m^* k_B T} = \sqrt{2 \times 6.10 \times 10^{-32} \times 4.14 \times 10^{-21}} = 2.25 \times 10^{-26}\ \text{kg m s}^{-1},$$

$$\lambda_{\text{th}} = \frac{6.626 \times 10^{-34}}{2.25 \times 10^{-26}} = 2.9 \times 10^{-8}\ \text{m} = 29\ \text{nm}.$$

This is about sixty times the copper Fermi wavelength: a 10 nm GaAs layer is a third of a wavelength thick and strongly quantised.

### Example 3 — Effective band gap and emission wavelength

For the 10 nm GaAs well of Example 1, include the heavy hole ($m_h^* = 0.45\,m_e$) and estimate the lowest interband transition energy and wavelength. The bulk gap is $E_g = 1.424$ eV.

**Solution.** The hole ground level is

$$E_{h,1} = \frac{0.376}{0.45 \times 100} = 0.0084\ \text{eV} = 8.4\ \text{meV}.$$

Hence $E_{11} = 1.424 + 0.056 + 0.008 = 1.488$ eV and, with $\lambda = 1240\ \text{eV nm}/E$, the emission is at $1240/1.488 = 833$ nm against $871$ nm for bulk GaAs, a blue shift of about 38 nm; exciton binding red-shifts it back by a few nanometres.

## Common Misconceptions

- **"Quantum confinement happens whenever something is nanometre-sized."** The criterion is relative to the carrier wavelength: a 5 nm gold particle is barely quantised because its Fermi wavelength is 0.5 nm, whereas a 5 nm CdSe particle is strongly quantised.
- **"A quantum well has no free motion."** A well confines one direction only; carriers move freely in the plane and form subbands. Only a quantum dot has a fully discrete spectrum.
- **"The effective mass is just a fudge factor."** It is the band curvature, $1/m^* = \hbar^{-2}\,d^2E/dk^2$, measured by cyclotron resonance; using $m_e$ for GaAs underestimates confinement energies fifteen-fold.
- **"Smaller structures always show sharper quantum effects."** Level spacings grow, but so do relative size fluctuations and surface scattering, which broaden the levels.
- **"The exciton Bohr radius is the same for all semiconductors."** It scales as $\varepsilon_r/\mu$ and ranges from about 2 nm in wide-gap oxides to over 60 nm in InSb.

## Connections

- The square wells of Introduction to Quantum Mechanics (Lesson m2-l2) reappear with $m_e \to m^*$; the hydrogen atom (Lesson m3-l2) becomes the exciton with $e^2 \to e^2/\varepsilon_r$.
- The effective mass and Fermi wavelength come from Solid State Physics (Lessons m3-l1 and m3-l2); the band gaps of Lesson m3-l3 fix the $E_g$ to which confinement energies are added.
- The thermal energy $k_BT$ (Thermal Physics and Statistical Mechanics, Lesson m3-l1) decides whether a quantised spectrum is observable.
- The 1240 eV nm conversion (Introduction to Quantum Mechanics, Lesson m1-l2) links confinement energies to the photoluminescence colours of the Low-Dimensional Materials Lab (Lesson m1-l2).
- Confinement energies set the wavelengths of quantum-well lasers and quantum-dot display converters (Lesson m3-l3).

## Quick Check

1. Why is quantum confinement readily seen in a 10 nm GaAs layer but not in a 10 nm copper film?
2. Write the levels of a particle of mass $m^*$ in an infinite well of width $L$. By what factor does $E_1$ change if $L$ is halved?
3. An InAs quantum well has $m_e^* = 0.023\,m_e$ and $L = 10$ nm. Estimate $E_1$.
4. State the condition on $L$ for the subband spacing to exceed $k_BT$ and evaluate it for GaAs at 77 K.
5. CdSe has $a_B^* \approx 5$ nm. Is a CdSe nanocrystal of radius 2 nm weakly or strongly confined? What about radius 20 nm?

## Takeaway

- Low dimensionality is defined relative to the carrier de Broglie wavelength, tens of nanometres in semiconductors.
- $E_n = n^2\pi^2\hbar^2/(2m^*L^2)$, with $\hbar^2/2m_e = 0.0381$ eV nm$^2$, sets the confinement scale, which must exceed $k_BT$ and $\hbar/\tau$.
- Wells, wires and dots confine one, two and three directions and have progressively more singular densities of states.
- The lowest optical transition is $E_g + E_{e,1} + E_{h,1}$ and blue-shifts as $1/L^2$ as the structure shrinks.
- The exciton Bohr radius $a_B^* = \varepsilon_r (m_e/\mu) a_0$ divides weak from strong confinement; display-grade quantum dots are strongly confined.
