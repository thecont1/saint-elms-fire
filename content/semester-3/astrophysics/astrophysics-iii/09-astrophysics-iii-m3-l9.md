***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-3
semesterName: Semester 3
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-iii
courseName: Astrophysics III — Stars and Stellar Evolution
moduleId: astrophysics-iii-module-3
moduleName: Stellar Evolution and Distance Indicators
lessonId: astrophysics-iii-m3-l9
lessonName: Star Clusters, Isochrones and a Photometry Exercise
lessonNumber: 9
moduleNumber: 3
semesterNumber: 3
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 9
prerequisites:
  - astrophysics-iii-m3-l8
learningObjectives:
  - Distinguish open clusters, globular clusters, and associations by age, population, and location.
  - Explain why clusters are the cleanest laboratories for testing stellar evolution: coeval, co-distance, co-composition samples.
  - Fit theoretical isochrones to observed colour-magnitude diagrams and extract age, distance modulus, and reddening.
  - Carry out a simple photometric data exercise: convert magnitudes to a colour-magnitude diagram and interpret the turn-off.
concepts:
  - Open cluster
  - Globular cluster
  - Colour-magnitude diagram
  - Isochrone fitting
  - Turn-off age
  - Distance modulus
tags:
  - astrophysics
  - star-clusters
  - data-exercise
sourceType: authored-courseware
***

# Star Clusters, Isochrones and a Photometry Exercise

## Overview

Individual stars scatter across the HR diagram by mass, age, composition, and distance all at once — too many free variables to test any theory. Star clusters collapse those variables: hundreds to millions of stars born together from one cloud share a single age, a single distance, and (nearly) a single composition. Only mass varies. A cluster's colour-magnitude diagram is therefore a snapshot of stellar evolution theory at one age, and comparing it with theoretical **isochrones** (lines of constant age) is the sharpest test the theory has. This lesson builds the cluster taxonomy, explains isochrone fitting as the measurement of age, distance, and reddening simultaneously, and ends with a hands-on photometric exercise that turns a small table of magnitudes into a dated, measured star cluster.

## Learning Path

1. Classify clusters: open clusters, globular clusters, OB associations — ages, locations, populations.
2. Understand the control of variables clusters provide: one age, one distance, one composition.
3. Learn the isochrone: what model physics goes into it and what free parameters it carries.
4. Fit an isochrone to an observed colour-magnitude diagram: the turn-off fixes age; the vertical offset fixes distance modulus; the horizontal offset fixes reddening.
5. Do the data exercise: build a colour-magnitude diagram from tabulated B and V magnitudes, locate the turn-off, and estimate age and distance.
6. Connect cluster ages to galactic archaeology and cosmology.

## Core Explanation

### The cluster zoo

**Open clusters** (e.g. the Pleiades, Hyades) hold 10²–10⁴ stars, loosely bound, in the Galactic disc. Ages span 10⁶ years (still with nebulosity) to a few 10⁹ years; the Galaxy's tidal field eventually disperses them. Their metallicities are near-solar, and their HR diagrams show every evolutionary stage from pre-main-sequence to white dwarf.

**Globular clusters** (e.g. M13, 47 Tucanae) hold 10⁵–10⁶ stars in dense, spherical halos around the Galaxy. Ages ~10¹⁰ years — among the oldest objects anywhere — with low metallicity ([Fe/H] down to −2.5). Their colour-magnitude diagrams are the classic textbook image: a sharp turn-off near G type, a red giant branch, a horizontal branch.

**OB associations** are unbound groups of the most massive young stars, traceable only by their short-lived O and B members — newborn cohorts still near their nursery.

### Why clusters are laboratories

Three shared properties turn clusters into controlled experiments:

1. **Coeval:** all stars formed within ~10⁷ years of each other from the same cloud. Age is one number.
2. **Co-distance:** every member is at essentially the same distance, so apparent magnitudes differ from absolute magnitudes by one constant — the distance modulus (m − M)₀.
3. **Co-composition:** one initial chemical mixture for all members.

With age, distance, and composition fixed, the HR diagram of a cluster is a function of mass alone — precisely the prediction of stellar evolution theory. Any failure of isochrone fitting is therefore a failure of the physics, not of bookkeeping.

### Isochrones

An **isochrone** is the HR-diagram track of a population of fixed age and composition, spanning all masses. Models supply it by evolving many masses from ZAMS to the chosen age and plotting each survivor. Free parameters: age τ, distance modulus (m − M)₀, reddening E(B−V) (dust reddens colours and dims light), and metallicity [Fe/H].

Fitting works in a specific order because the parameters leave different signatures:

- **Turn-off point → age.** The most massive star still on the main sequence sets τ via t ∝ M^−2.5. It is the clock hand.
- **Vertical offset → distance.** Theoretical absolute magnitudes versus observed apparent magnitudes give (m − M)₀ once extinction is handled.
- **Horizontal offset → reddening.** Dust shifts the whole diagram redward by E(B−V); the fit also absorbs extinction A_V ≈ 3.1 E(B−V) into the distance modulus.
- **Giant-branch shape → metallicity.** Low metallicity makes giants bluer and hotter.

Modern fits use χ² minimisation or Bayesian inference over thousands of stars (Gaia parallaxes now anchor distances independently, cross-checking the fit).

### Data exercise: from magnitudes to a dated cluster

The exercise below uses a small synthetic photometric sample of a cluster. Work through each stage.

**Stage 1 — Build the colour-magnitude diagram.** For each star compute colour B−V and plot V against B−V (V vertical, decreasing upward; colour horizontal, bluer left).

| Star | B | V |
|------|-----|-----|
| 1 | 8.9 | 9.5 |
| 2 | 9.4 | 10.2 |
| 3 | 9.8 | 10.9 |
| 4 | 10.6 | 12.0 |
| 5 | 11.2 | 12.9 |
| 6 | 11.5 | 13.3 |
| 7 | 11.9 | 13.8 |
| 8 | 12.3 | 14.3 |
| 9 | 12.4 | 14.4 |
| 10 | 12.6 | 14.7 |

Colours: star 1 has B−V = −0.6 (hot B-type); the sequence reddens to B−V ≈ 2.1 for star 10. Stars 8–10 fall off the tight main-sequence line toward brighter V at redder colours — the giant branch.

**Stage 2 — Locate the turn-off.** The main-sequence sequence bends at star 4: B−V ≈ 1.4, V ≈ 12.0. Stars redder than this are leaving toward the giant branch; the turn-off sits near spectral type ~K0.

**Stage 3 — Age.** A K0 turn-off corresponds to M_TO ≈ 1.0 M_☉ (slightly evolved), giving

τ ≈ 10¹⁰ × (1.0)^−2.5 ≈ 10¹⁰ years, with turn-off physics and isochrone comparison refining this to ≈ (8–10) × 10⁹ years

— an old open-cluster or intermediate population.

**Stage 4 — Distance.** The isochrone at that age places the turn-off at M_V ≈ +5.5. Observed V_TO ≈ 12.0 with negligible reddening here:

(m − M)₀ = 12.0 − 5.5 = 6.5 → d = 10 × 10^(6.5/5) = 10 × 10^1.3 ≈ 200 pc

The cluster lies about 200 parsecs away.

**Stage 5 — Sanity checks.** Giant-branch stars should lie ~1.5–3 mag brighter than the turn-off at redder colours — they do (stars 8–10). Any star far off the fitted sequences is a likely non-member (field contamination), to be excluded before finalising the fit.

This five-stage pipeline — colour-magnitude diagram, turn-off, age, distance, membership — is exactly how professional surveys (Gaia-ESO, APOGEE, Gaia DR3 cluster catalogues) characterise thousands of clusters.

## Key Ideas

- Clusters are coeval, co-distance, co-composition samples: mass is the only varying parameter, making colour-magnitude diagrams clean tests of evolution theory.
- Open clusters (disc, young to intermediate), globulars (halo, ~10¹⁰ yr, metal-poor), and OB associations (unbound newborns) form the taxonomy.
- An isochrone is a fixed-age population track; fitting one measures age (turn-off), distance (vertical offset), reddening (horizontal offset), and metallicity (branch shape).
- The turn-off point is the population's clock hand via t ∝ M^−2.5.
- Photometry data reduction — B−V colours, extinction handling, membership selection — is the practical skill underlying all of it.
- Globular-cluster ages (~13 Gyr) provide a lower bound on the age of the Universe.

## Worked Examples

**Example 1 — Pleiades age.**
The Pleiades turn-off sits at B2 (~8 M_☉): τ ≈ 10¹⁰ × 8^−2.5 ≈ 5 × 10⁷ years, consistent with detailed isochrone fits of ~100 Myr (lithium depletion and pre-main-sequence contraction refine it).

**Example 2 — M92, an ancient globular.**
Turn-off at M_V ≈ +4, B−V ≈ 0.4 (near G type), with metallicity [Fe/H] ≈ −2.3. Isochrone fits give τ ≈ 12.5–13 × 10⁹ years — among the oldest objects in the Milky Way, and a constraint the cosmological age of the Universe must exceed.

**Example 3 — Distance with reddening.**
Suppose the exercise cluster had fitted E(B−V) = 0.2 mag. Then A_V ≈ 3.1 × 0.2 = 0.62 mag, and the true modulus is (m − M)₀ = 12.0 − 0.62 − 5.5 = 5.88 → d ≈ 150 pc, not 200 pc. Ignoring reddening would overestimate distance by ~30%.

**Example 4 — Field contamination.**
A star at B−V = 0.9, V = 17 lies far below the main-sequence line. It is either a distant unrelated field dwarf or a cluster white dwarf; parallax (Gaia) or proper-motion membership settles it. Cluster fits always include a membership step.

## Common Misconceptions

1. **"All stars in a cluster have the same luminosity."** They share distance, not luminosity; mass spreads them over the diagram.
2. **"The turn-off moves along the main sequence with time."** It moves *down* the main sequence as massive members die off — but each member evolves off individually; the turn-off is a population property.
3. **"Open clusters last forever."** Tidal stripping disperses most within ~10⁸–10⁹ years; only the densest survive, which is why old open clusters are rare.
4. **"Reddening just makes stars fainter."** It shifts colours too; fitting without E(B−V) biases both distance and age.
5. **"Globular ages conflict with the Big Bang."** The oldest globulars (~13 Gyr) fit inside the cosmological age (13.8 Gyr); they were key historical constraints on it.

## Connections

- **Modules 1–2:** Magnitudes, spectral types, and the mass–lifetime relation are the instruments this lesson calibrates on real populations.
- **Data skills:** Binning, outlier rejection, and χ² fitting from your computational coursework apply directly to isochrone fitting.
- **Astrophysics IV:** Globular-cluster ages anchor galactic formation history; the same isochrone machinery dates resolved stellar populations in nearby galaxies; Type Ia rates in clusters inform supernova channels.
- **Observational practice:** CCD photometry, standard-star calibration, and extinction maps are the measurement foundation beneath every number here.

## Quick Check

1. Why are clusters better than field stars for testing stellar evolution?
2. In isochrone fitting, which observed feature fixes age, which fixes distance, and which fixes reddening?
3. A cluster's turn-off lies at 3 M_☉. Estimate its age.
4. What is the difference between an open cluster and a globular cluster in age, location, and metallicity?
5. In the data exercise, why must membership be checked before finalising the fit?

**Answers:**
1. Members share age, distance, and composition, leaving mass as the only variable — isolating the physics from the bookkeeping.
2. Turn-off point → age; vertical offset between observed and theoretical magnitudes → distance modulus; horizontal colour offset → reddening E(B−V).
3. τ ≈ 10¹⁰ × 3^−2.5 ≈ 6 × 10⁸ years (~600 Myr).
4. Open: disc, 10⁶–10⁹ yr, near-solar metallicity, loosely bound. Globular: halo, ~10¹⁰ yr, metal-poor, dense and massive.
5. Field stars projected onto the cluster contaminate the diagram, biasing the turn-off, distance, and reddening; membership (parallax/proper motion) purges them.

## Takeaway

A cluster is a controlled experiment the Universe runs for us: fix everything but mass, then watch the HR diagram unfold with time. Isochrone fitting reads that unfolding back into numbers — an age to three significant figures, a distance, a dust column, a metallicity. This lesson closes Astrophysics III with the full toolkit assembled: magnitudes, spectra, the HR diagram, structure, fusion, evolution, remnants — and now, populations. Astrophysics IV points the same toolkit outward: the Milky Way, galaxies, and the Universe itself.
