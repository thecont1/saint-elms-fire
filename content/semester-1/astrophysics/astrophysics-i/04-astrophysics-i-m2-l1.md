***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-i
courseName: Astrophysics I — The Sky and Coordinates
moduleId: astrophysics-i-module-2
moduleName: Time and Coordinates
lessonId: astrophysics-i-m2-l1
lessonName: Coordinate Systems on the Sky
lessonNumber: 4
moduleNumber: 2
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 45
releaseOrder: 4
prerequisites:
  - astrophysics-i-m1-l1
learningObjectives:
  - Describe the horizon, equatorial, and ecliptic coordinate systems.
  - Convert between altitude/azimuth and right ascension/declination.
  - State the role of the vernal equinox in equatorial coordinates.
  - Choose the appropriate coordinate system for a given task.
concepts:
  - Altitude and azimuth
  - Right ascension and declination
  - Vernal equinox
  - Hour angle
  - Equatorial coordinate system
  - Horizon coordinate system
tags:
  - astrophysics
  - astronomy
  - coordinates
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - problem-solving
  - short-answer
***

# Coordinate Systems on the Sky

## Overview
Just as a point on the Earth is given by latitude and longitude, a point on the sky is given by two angular coordinates. Different coordinate systems are useful for different purposes: horizon coordinates for finding your way around tonight, equatorial coordinates for cataloguing objects across the year, and ecliptic coordinates for the Solar System. This lesson explains the three main systems and shows how to convert between the most commonly used pair, horizon and equatorial.

## Learning Path
- What you should already know: the celestial sphere, the celestial equator and poles, the ecliptic, the local vertical.
- What this lesson adds: three coordinate systems, their axes, and when to use each.
- What it unlocks: locating objects with a telescope, pre-computing observations, and reading star charts.

## Core Explanation
**Horizon coordinates (alt–az).** The most intuitive system. The two coordinates are:
- **Altitude** $h$ (or $a$): the angle above the horizon, from $0°$ at the horizon to $90°$ at the zenith.
- **Azimuth** $A$: the angle measured eastward from north along the horizon, from $0°$ to $360°$.

Horizon coordinates depend on the observer's location and on the time — both the diurnal motion and the observer's latitude change them. They are excellent for "where is the Moon right now" but bad for cataloguing.

**Equatorial coordinates (RA–Dec).** Anchored to the celestial sphere itself, not the observer.
- **Declination** $\delta$: the angle north or south of the celestial equator, from $-90°$ (south celestial pole) to $+90°$ (north celestial pole). Like latitude on Earth.
- **Right ascension** $\alpha$: the angle measured eastward along the celestial equator from the vernal equinox, from $0$ to $24$ hours (or $0$ to $360°$). RA is usually given in hours, minutes, and seconds because of the way it ties to sidereal time.

Right ascension and declination of a fixed star are (almost) constant — they change only slowly due to precession, proper motion, and the parallax effect of the Earth's orbit. The equatorial system is the standard for star catalogues.

**The vernal equinox.** This is the point where the Sun crosses the celestial equator moving northward. It defines the zero of right ascension. Because the Earth's axis precesses (next lesson), the vernal equinox itself moves slowly, and the date on which the Sun is at the vernal equinox shifts by about 20 minutes per year relative to the sidereal year. Astronomers always specify *which* equinox they mean (e.g. "J2000.0" or "IERS").

**Hour angle.** The hour angle $H$ of an object is the angle from the local meridian westward to the object. It is related to the right ascension by

$$H = \theta_L - \alpha,$$

where $\theta_L$ is the local sidereal time. When $H = 0$, the object is on the meridian (highest in the sky). Hour angle is the natural coordinate for telescope tracking.

**Ecliptic coordinates.** Used for Solar System objects.
- **Ecliptic longitude** $\lambda$: angle along the ecliptic from the vernal equinox, eastward, $0°$–$360°$.
- **Ecliptic latitude** $\beta$: angle perpendicular to the ecliptic.

The Sun always has $\beta = 0$ and $\lambda$ increasing by about $1°$ per day.

**Galactic coordinates.** Used for the Milky Way. The fundamental plane is the galactic plane, and the zero of longitude points toward the galactic centre (in Sagittarius). Useful for mapping the Galaxy.

**Conversion horizon ↔ equatorial.** A useful formula. For an object with declination $\delta$ at hour angle $H$, at observer latitude $\phi$:

$$\sin h = \sin\phi \sin\delta + \cos\phi \cos\delta \cos H,$$
$$\cos h \sin A = -\cos\delta \sin H,$$
$$\cos h \cos A = \cos\phi \sin\delta - \sin\phi \cos\delta \cos H.$$

The inverse is also standard. These are spherical-trigonometry identities: they convert between a local-tangent frame and a celestial-pole frame.

## Key Ideas
- Horizon coordinates (alt, az) are local and time-dependent; ideal for "where is it now".
- Equatorial coordinates (RA, dec) are global and time-independent; ideal for catalogues.
- The vernal equinox is the reference point for RA and ecliptic longitude.
- Hour angle $H = \theta_L - \alpha$ tracks an object across the sky.
- Ecliptic coordinates are best for Solar System bodies; galactic coordinates for the Milky Way.

## Worked Examples
**Example 1 — The celestial north pole.** The north celestial pole has $\delta = 90°$ and is at altitude $h = \phi$ for an observer at latitude $\phi$. The exact azimuth is undefined (the pole is a single point).

**Example 2 — Sunset azimuth.** The Sun sets when $h = 0$. From the formula, $0 = \sin\phi \sin\delta + \cos\phi \cos\delta \cos H$. Solve for $\cos H$ and then for azimuth. At the equinox ($\delta = 0$), $\cos H = 0 \Rightarrow H = \pm 90°$, and the Sun sets due west ($A = 270°$) at all latitudes. This is one of the few cases where the answer is simple.

**Example 3 — Star at upper culmination.** When a star transits the meridian ($H = 0$), its altitude is $h = 90° - |\phi - \delta|$ (assuming the star is on the same side of the equator as the observer). A star at the celestial equator transits at $h = 90° - \phi$.

## Common Misconceptions
- **"RA is measured in degrees."** Sometimes (in older texts) but the convention is hours, minutes, seconds, where $24\text{ h} = 360°$. This makes the time-keeping arithmetic easier.
- **"Azimuth is from the east."** No — azimuth is from the north, going east. (This differs from some surveying conventions.)
- **"A star's RA and Dec never change."** They change slowly because of precession, proper motion, and parallax. A catalogue entry must specify the equinox (e.g. J2000) and the epoch of observation.
- **"Ecliptic longitude is the same as right ascension."** Only at the equinoxes. In general, $\lambda \ne \alpha$ and the difference depends on the object's ecliptic latitude.

## Connections
Equatorial coordinates are the basis of every modern catalogue, from the Yale Bright Star Catalogue to Gaia. The conversion formulas use the same spherical trigonometry that appears in *Solid State Physics* (crystal directions) and in navigation. Ecliptic coordinates are the natural frame for the *Astrophysics II* discussion of planetary orbits.

## Quick Check
1. What are the two coordinates in the horizon system, and what do they measure?
2. What defines the zero of right ascension?
3. A star has $\delta = +20°$, RA $= 6\text{ h}$. At an observer at $\phi = 40°\text{ N}$ with local sidereal time $\theta_L = 12\text{ h}$, what is the hour angle? Is the star above or below the horizon?
4. Why are hour angles measured westward, but right ascensions eastward?
5. State one reason a star's RA and Dec are not strictly constant.

## Takeaway
- Three main systems: horizon (alt, az), equatorial (RA, dec), ecliptic (λ, β); each has a different purpose.
- Equatorial coordinates are anchored to the celestial sphere; horizon coordinates to the observer.
- The vernal equinox is the zero of RA and ecliptic longitude.
- Hour angle $H = \theta_L - \alpha$ measures the time since the object crossed the meridian.
- Conversion uses spherical-trigonometry formulas like $\sin h = \sin\phi \sin\delta + \cos\phi \cos\delta \cos H$.
