***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-5
semesterName: Semester 5
subjectId: physics
subjectName: Physics
courseId: astronomy-and-astrophysics-lab
courseName: Astronomy and Astrophysics Lab (Option A)
moduleId: astronomy-and-astrophysics-lab-module-1
moduleName: Observational Techniques, Photometry, and Data Reduction
lessonId: astronomy-and-astrophysics-lab-m1-l5
lessonName: Catalog Queries — VizieR, SIMBAD, and Gaia
lessonNumber: 5
moduleNumber: 1
semesterNumber: 5
difficulty: advanced
estimatedStudyMinutes: 55
releaseOrder: 5
prerequisites:
  - astronomy-and-astrophysics-lab-m1-l4
learningObjectives:
  - Query the SIMBAD astronomical database for information about a specific object (coordinates, spectral type, magnitude, parallax, proper motion).
  - Query the VizieR catalog service for photometric or astrometric data on a list of objects.
  - Cross-match the Gaia catalog with a target list to obtain precise coordinates, parallaxes, and proper motions.
concepts:
  - SIMBAD
  - VizieR
  - Gaia
  - Astronomical databases
  - Cone search
  - Cross-matching
  - ADQL
  - Virtual Observatory
tags:
  - physics
  - laboratory
  - astronomy
  - catalogs
  - simbad
  - vizier
  - gaia
sourceType: authored-courseware
assessmentHints:
  - SIMBAD: object identifier → basic data (coordinates, spectral type, magnitude).
  - VizieR: cone search by coordinates → catalog data (photometry, astrometry, etc.).
  - Gaia: position + magnitude → parallax, proper motion, BP/RP spectra.
status: in-review
***

# Catalog Queries — VizieR, SIMBAD, and Gaia

## Overview

Modern astronomy relies on large catalogs of astronomical objects, with multi-wavelength photometry, spectroscopy, and astrometry. The major catalogs are:

- **SIMBAD**: a database of astronomical objects, with basic identifiers, coordinates, spectral types, magnitudes, and references to the literature. Maintained by CDS (Strasbourg).
- **VizieR**: a catalog service, with access to thousands of published astronomical catalogs (photometry, astrometry, spectroscopy, variability, etc.). Maintained by CDS.
- **Gaia**: the European Space Agency's astrometry mission, providing precise positions, parallaxes, proper motions, and BP/RP spectra for over 1.5 billion sources. Maintained by ESA.

The Virtual Observatory (VO) is a framework that allows astronomers to query these catalogs in a standard way, using the Astronomical Data Query Language (ADQL) and standard protocols (Cone Search, Simple Image Access, etc.).

This lesson covers the procedure for querying SIMBAD, VizieR, and Gaia for a specific object or a list of objects, the analysis of the returned data, and the dominant sources of error (catalog matching, proper motion, parallax zero point).

## Learning Path

1. **Query SIMBAD for a bright star.** Use the web interface or the astroquery.simbad Python module to retrieve the basic data for a star (e.g. Vega, Sirius, Betelgeuse).
2. **Query VizieR for a catalog.** Choose a catalog (e.g. the Landolt standard stars, the 2MASS point source catalog) and query for objects in a specific field.
3. **Cross-match with Gaia.** Use the Gaia archive to obtain precise coordinates, parallaxes, and proper motions for a list of objects.

## Core Explanation

### Theory: SIMBAD

SIMBAD (Set of Identifications, Measurements, and Bibliography for Astronomical Data) is a database of astronomical objects, maintained by CDS (Strasbourg). It contains identifiers (e.g. HD 209458, HR 8726, GJ 411), coordinates (J2000), spectral types, magnitudes (in various bands), parallaxes, proper motions, radial velocities, and references to the literature.

SIMBAD can be queried via:
- The web interface: https://simbad.u-strasbg.fr/simbad/
- The astroquery.simbad Python module
- The TAP (Table Access Protocol) service

Example query (Python):
```python
from astroquery.simbad import Simbad
result = Simbad.query_object("Vega")
print(result)
```

### Theory: VizieR

VizieR is a catalog service, maintained by CDS, that provides access to thousands of published astronomical catalogs. Each catalog has a unique identifier (e.g. II/246, the 2MASS point source catalog; J/A+A/.../table1, a specific table from a journal article).

VizieR can be queried via:
- The web interface: https://vizier.u-strasbg.fr/viz-bin/VizieR
- The astroquery.vizier Python module
- The TAP service

Example query (Python):
```python
from astroquery.vizier import Vizier
result = Vizier.query_region("05 35 17.3 -05 23 28", radius="0.1 deg", catalog="II/246")
print(result)
```

This queries the 2MASS catalog for objects within 0.1 degree of the Orion Nebula (M42).

### Theory: Gaia

Gaia is the European Space Agency's astrometry mission, launched in 2013. It provides:
- **Astrometry**: positions, parallaxes, and proper motions for over 1.5 billion sources, with a precision of ~ 20 microarcsec for the brightest sources (G < 14).
- **Photometry**: magnitudes in the G, BP, and RP bands.
- **Spectroscopy**: radial velocities for ~ 7 million sources (the Radial Velocity Spectrometer, RVS).

The Gaia data releases (DR1, DR2, DR3, EDR3) provide increasingly precise data. The latest is DR3 (2022).

Gaia can be queried via:
- The web interface: https://gea.esac.esa.int/archive/
- The astroquery.gaia Python module
- The TAP service

Example query (Python):
```python
from astroquery.gaia import Gaia
query = """
SELECT TOP 10 source_id, ra, dec, parallax, pmra, pmdec, phot_g_mean_mag
FROM gaiadr3.gaia_source
WHERE CONTAINS(POINT('ICRS', ra, dec), CIRCLE('ICRS', 83.0, -5.0, 0.5)) = 1
AND phot_g_mean_mag < 14
"""
job = Gaia.launch_job(query)
result = job.get_results()
print(result)
```

This queries the Gaia DR3 catalog for sources within 0.5 degree of M42 with G < 14.

### Theory: Cone Search and ADQL

The Virtual Observatory (VO) provides standard protocols for querying astronomical databases:
- **Cone Search**: given a position and a radius, return all sources within the cone.
- **Simple Image Access (SIA)**: given a position and a size, return all images covering that region.
- **Simple Spectral Access (SSA)**: given a position and a size, return all spectra in that region.

These protocols are accessed via HTTP GET requests or via the TAP (Table Access Protocol) service. The query language is ADQL (Astronomical Data Query Language), which is a SQL-like language with extensions for astronomical coordinates.

### Theory: Cross-Matching

Cross-matching is the process of identifying the same object in two or more catalogs. The matching is based on the position; sources within a small radius (typically 1-5 arcsec) are assumed to be the same object.

The Gaia cross-match is the standard reference for many other catalogs. The Gaia DR3 catalog includes cross-matches with 2MASS, AllWISE, and other surveys.

### Apparatus

- Computer with Python and astroquery installed.
- Internet connection.
- Web browser (for the SIMBAD and VizieR web interfaces).

### Procedure

1. **Query SIMBAD for a bright star.** Use the web interface or astroquery to retrieve the basic data for Vega (HR 7001, HD 172167, GJ 721).
2. **Query VizieR for a standard star catalog.** Choose the Landolt catalog (J/A+A/258/421) or the Stetson catalog (J/PASP/112/925); query for stars in a specific field (e.g. SA 92, SA 95, SA 110).
3. **Query Gaia for a star cluster.** Choose a star cluster (e.g. the Pleiades, M45); query Gaia DR3 for sources within 1 degree of the cluster centre with G < 18.
4. **Cross-match the Gaia query with a 2MASS query.** Use the astroquery.xmatch module to identify Gaia sources that are also in 2MASS.

### Analysis

#### SIMBAD Query for Vega

The SIMBAD query for Vega returns:
- Identifier: HR 7001, HD 172167, GJ 721, HIP 91262, SAO 67174, ...
- Coordinates (J2000): RA = 18 36 56.34, Dec = +38 47 01.3
- Spectral type: A0V
- Magnitude: V = 0.03, B = 0.03, J = 0.02, K = 0.00
- Parallax: 130.23 mas (distance: 7.68 pc)
- Proper motion: pmRA = 200.94 mas/yr, pmDec = 286.23 mas/yr
- Radial velocity: − 13.9 km/s

#### VizieR Query for a Standard Field

The VizieR query for the SA 95 field returns ~ 50 standard stars with photometric data in the Johnson-Cousins bands. The data include the star name, the coordinates, and the magnitudes in B, V, R, I.

#### Gaia Query for the Pleiades

The Gaia query for the Pleiades returns ~ 1000 sources within 1 degree of the cluster centre, with G < 18. The data include the source ID, the coordinates, the parallax, the proper motion, and the G magnitude.

The cluster members are identified by their proper motion and parallax. The Pleiades has a mean parallax of ~ 7.4 mas (distance ~ 135 pc) and a mean proper motion of ~ 50 mas/yr.

### Sources of Error

- **Catalog matching.** The matching radius is a compromise between false positives (matching two different objects) and false negatives (missing a match). A 1 arcsec radius is typical for Gaia matches.
- **Proper motion.** The positions in catalogs are for a specific epoch (J2000 for SIMBAD, J2016 for Gaia DR3). The current positions are computed by extrapolating the proper motion. The error is small for nearby objects but significant for high-proper-motion stars.
- **Parallax zero point.** The Gaia parallax has a small zero-point offset (~ 0.02 mas for DR3). The corrected parallax is parallax − 0.02 mas. The correction is important for distant objects.
- **Magnitude limits.** Catalogs have magnitude limits. Gaia DR3 is complete to G ~ 17; the photometry is accurate to ~ 1 mmag for G < 14, ~ 10 mmag for G ~ 17, and ~ 100 mmag for G ~ 20.
- **Crowding.** In crowded fields (e.g. star clusters, galaxies), the photometry and astrometry are biased by blending.

## Key Ideas

- SIMBAD: object identifier → basic data (coordinates, spectral type, magnitude).
- VizieR: cone search by coordinates → catalog data.
- Gaia: precise astrometry (positions, parallaxes, proper motions) for > 1.5 billion sources.
- Virtual Observatory: standard protocols (Cone Search, SIA, SSA) and query language (ADQL).
- Cross-matching: identify the same object in two or more catalogs based on position.

## Worked Examples

#### Example 1: Distance from Parallax

A star has a parallax of 50 mas. The distance is

d = 1000 / 50 = 20 pc.

For a star with a parallax of 130 mas (Vega), the distance is

d = 1000 / 130 = 7.7 pc.

#### Example 2: Tangential Velocity

A star has a proper motion of 200 mas/yr and a parallax of 100 mas. The tangential velocity is

v_t = 4.74 · μ / π = 4.74 · 200 / 100 = 9.48 km/s,

where 4.74 is the factor to convert from km/s to (km/s) · (pc · yr / mas · mas). This is the projection of the star's velocity onto the plane of the sky.

#### Example 3: Cross-Match

Gaia DR3 has a source at (RA, Dec) = (18 36 56.34, +38 47 01.3) with G = 0.03. A 2MASS query within 1 arcsec returns the source 2MASS J18365634+3847012 with J = 0.02 and K = 0.00. The match is confirmed by the small position difference (0.05 arcsec) and the similar magnitudes.

## Common Misconceptions

- **"All astronomical catalogs are equivalent."** No. SIMBAD is a database of objects; VizieR is a catalog of catalogs; Gaia is a specific survey with specific data products. Each has its strengths and limitations.
- **"The Gaia parallax is exact."** The Gaia parallax has an uncertainty (typically ~ 0.02-0.05 mas for the brightest sources). For a star at 100 pc, the distance uncertainty is ~ 0.4-1.0 pc.
- **"The proper motion is the same as the radial velocity."** No. The proper motion is the angular motion on the sky (perpendicular to the line of sight); the radial velocity is the motion along the line of sight. The two combined give the full space velocity.
- **"Cross-matching is trivial."** It is non-trivial in crowded fields, where the matching radius is set by the source density, not the astrometric precision. In the Galactic centre, the source density is so high that even Gaia struggles to resolve individual stars.
- **"The magnitude system is the same in all catalogs."** No. Different catalogs use different photometric systems (Johnson, Sloan, Gaia, etc.). Transformations are needed to compare magnitudes across systems.

## Connections

- **Astronomy and Astrophysics (Sem 5/6 theory).** The Virtual Observatory is the modern tool for accessing astronomical data. SIMBAD, VizieR, and Gaia are the three most important databases; they are used in every modern astronomy research project.
- **Data science.** The Virtual Observatory is a large-scale data science project: petabytes of data, thousands of catalogs, millions of users. The tools (ADQL, astroquery, TOPCAT) are the standard for astronomical data access.
- **Statistics.** The cross-matching is a statistical problem: given two catalogs, identify the same object with a given false-positive and false-negative rate. The optimal matching radius depends on the source density and the astrometric precision.
- **Cosmology.** The Gaia catalog is the basis of many cosmological studies: the structure of the Milky Way, the local group, the cosmic distance scale. The data are used to test the standard cosmological model.
- **History of astronomy.** The major catalogs (Hipparcos, Tycho-2, 2MASS, SDSS, Gaia) represent centuries of work. Each generation of catalogs has provided more precise data, more sources, and more parameters.

## Quick Check

1. What is SIMBAD? VizieR? Gaia?
2. How do you query SIMBAD for a specific object? For a cone search?
3. What is ADQL? What is it used for?
4. How do you compute the distance from the parallax?
5. How do you compute the tangential velocity from the proper motion and the parallax?
6. What is the Gaia DR3 parallax zero-point offset? Why is it important?
7. What is the matching radius for a cross-match? What sets it?
8. A star has a parallax of 10 mas and a proper motion of 50 mas/yr. What is the distance? The tangential velocity?

## Takeaway

Catalog queries are the lab's primary tool for accessing astronomical data. SIMBAD, VizieR, and Gaia are the three most important databases; the Virtual Observatory is the framework for accessing them. The lab's discipline — careful query construction, accurate cross-matching, honest uncertainty estimation — is the same discipline that runs through every modern astronomy research project. The same tools (astroquery, ADQL, TOPCAT) are used in every observatory and every research group. The data you query today are the raw material for the photometric, astrometric, and spectroscopic studies that follow.
