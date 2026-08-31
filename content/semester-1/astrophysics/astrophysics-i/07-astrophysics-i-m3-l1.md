***
programmeId: bsc-physics-mathematics-astrophysics
programmeName: B.Sc. Physics & Mathematics with minor in Astrophysics
semesterId: sem-1
semesterName: Semester 1
subjectId: astrophysics
subjectName: Astrophysics (minor)
courseId: astrophysics-i
courseName: Astrophysics I — The Sky and Coordinates
moduleId: astrophysics-i-module-3
moduleName: Instruments
lessonId: astrophysics-i-m3-l1
lessonName: Refracting and Reflecting Telescopes
lessonNumber: 7
moduleNumber: 3
semesterNumber: 1
difficulty: foundation
estimatedStudyMinutes: 50
releaseOrder: 7
prerequisites:
  - astrophysics-i-m1-l1
  - waves-and-optics-m2-l1
learningObjectives:
  - Compare refracting and reflecting telescopes.
  - Identify the components of each type and their optical role.
  - Define angular resolution and the Rayleigh criterion.
  - Explain the trade-off between aperture, focal length, and field of view.
concepts:
  - Refractor
  - Reflector
  - Objective lens
  - Primary mirror
  - Focal length
  - Angular resolution
  - Diffraction limit
tags:
  - astrophysics
  - astronomy
  - telescopes
sourceType: authored-courseware
assessmentHints:
  - conceptual
  - short-answer
***

# Refracting and Reflecting Telescopes

## Overview
A telescope is an instrument that gathers light and forms an image we can see, photograph, or feed into a detector. There are two main families: refracting telescopes, which use lenses, and reflecting telescopes, which use mirrors. Both are governed by the same physics — geometric optics for image formation, wave optics for the limits on resolution and magnification. This lesson covers the two families, their components, and the basic performance trade-offs.

## Learning Path
- What you should already know: refraction, lenses, mirrors, the wave equation.
- What this lesson adds: how telescopes work, their fundamental parameters, and the diffraction limit.
- What it unlocks: spectroscopy in *Atomic and Molecular Physics*, photometry, and the resolution discussion in *Waves and Optics*.

## Core Explanation
**The basic job of a telescope.** A telescope collects light over a large area and brings it to a focus. The light-gathering power scales as the square of the aperture $D$ — a $10$-cm telescope collects $D^2/D_0^2 = (100/7)^2 \approx 200$ times more light than the naked eye. The image is then magnified by an eyepiece, recorded by a detector, or fed into a spectrograph.

**Refractor.** A refracting telescope uses a converging **objective lens** at the front of the tube. The lens forms a real image at its focal plane, where the eyepiece is placed. The focal length of the objective $f_o$ sets the image scale: a star at angular distance $\theta$ from the optical axis lands at distance $f_o \theta$ from the axis in the focal plane. The focal ratio is $f_o/D$; smaller numbers (faster systems) give brighter images per unit time.

The largest refractor ever built is the Yerkes 40-inch (190 cm aperture), completed in 1897. Refractors suffer from chromatic aberration (different colours focus at different distances), and large lenses sag under their own weight. They are now mostly used for small specialised instruments.

**Reflector.** A reflecting telescope uses a curved **primary mirror** at the back of the tube. The light enters, reflects off the primary, and is redirected by a secondary mirror to a focal point. The classic Newton design puts a small flat secondary at $45°$ to send the light out the side of the tube. The Cassegrain design uses a curved secondary to send the light back through a hole in the primary. The Gregorian uses a secondary beyond the primary focus.

Reflectors avoid chromatic aberration (mirrors reflect all wavelengths equally) and can be made very large — the Gran Telescopio Canarias has a $10.4$-m segmented primary, and the upcoming Extremely Large Telescope will be $39$ m. The trade-off is sensitivity to thermal gradients and the need for active optics to keep the mirror in shape.

**Catadioptric telescopes** (Schmidt, Maksutov) combine lenses and mirrors, often to give a wide corrected field of view for astrophotography.

**Angular resolution.** A telescope cannot resolve features smaller than the diffraction limit set by its aperture. The Rayleigh criterion says the smallest resolvable angular separation is

$$\theta_R = 1.22 \frac{\lambda}{D},$$

where $\lambda$ is the wavelength. For visible light ($\lambda \approx 550\text{ nm}$) and a $10$-cm telescope, $\theta_R \approx 1.4$ arcseconds. For a $10$-m telescope, $\theta_R \approx 0.014$ arcseconds. Atmospheric turbulence ("seeing") limits ground-based resolution to about $0.5''$–$1''$ at the best sites; space telescopes avoid this entirely.

**Focal length and field of view.** A long focal length gives a large image scale (good for planets), but a small field of view (bad for wide-field surveys). A short focal length gives a wide field of view (good for surveys), but a small image scale. Fast systems (small focal ratio) are needed for faint extended objects; long focal ratios are better for bright compact sources.

**Mounts.** The optical tube is supported on a mount that lets it track the diurnal motion of the sky. An **equatorial mount** has one axis aligned with the celestial pole; a single motor at the polar axis tracks the sky. An **alt-azimuth mount** has two axes (altitude and azimuth) and is mechanically simpler, but tracking requires variable-speed motion on both axes plus a field-rotation correction.

## Key Ideas
- A refractor uses an objective lens; a reflector uses a primary mirror.
- Both form an image at the focal plane, where the eyepiece, detector, or instrument sits.
- Light-gathering power scales as $D^2$; angular resolution scales as $\lambda/D$ (Rayleigh criterion).
- Reflectors scale to much larger apertures because mirrors can be supported from behind.
- An equatorial mount tracks the sky with one motion; an alt-azimuth mount is simpler mechanically but requires coordinated motion on both axes.

## Worked Examples
**Example 1 — Resolving the separation of a binary star.** A binary star is separated by $1''$. What minimum aperture is needed to resolve it at $\lambda = 550\text{ nm}$?
$\theta_R = 1.22 \lambda/D \Rightarrow D = 1.22 \lambda/\theta_R$. With $\theta_R = 1'' = 4.85 \times 10^{-6}\text{ rad}$: $D = 1.22 \times 5.5 \times 10^{-7} / 4.85 \times 10^{-6} \approx 0.138\text{ m}$, or about $14\text{ cm}$. Under good seeing this works; in mediocre seeing, a larger aperture doesn't help.

**Example 2 — Light grasp.** A $20$-cm telescope versus the $7$-mm pupil: $D^2$ ratio $= (200/7)^2 \approx 816$. So the telescope collects about $816$ times more light, equivalent to a $5.7$-magnitude gain. The faintest object visible is $m \approx 6 + 5.7 \approx 11.7$.

**Example 3 — Field of view.** A telescope with focal length $f_o = 2\text{ m}$ and a detector that is $25\text{ mm}$ across: the image scale is $f_o/206265 \approx 9.7''$ per mm. The detector's field of view is $25 \times 9.7'' \approx 242'' \approx 4'$. Compare with a wide-field $f_o = 0.5\text{ m}$ system and the same detector: image scale is $2.4''$ per mm, field of view is $60'' \approx 1°$.

## Common Misconceptions
- **"Higher magnification is always better."** No. Magnification beyond the diffraction limit is *empty* — the image is just larger, not more detailed. Beyond the seeing limit, it is also worse.
- **"Reflectors are obsolete."** No. All the largest telescopes are reflectors, because lenses cannot be made in useful sizes larger than about $1$ m.
- **"Telescopes 'zoom in' on stars."** Stars are point sources at any reasonable magnification. A telescope's job is to collect light, not to magnify.
- **"Space telescopes have unlimited resolution."** They avoid atmospheric seeing, but the diffraction limit still applies, and the aperture determines it.

## Connections
The diffraction limit $\theta_R \propto \lambda/D$ is the wave-optics expression that reappears in *Waves and Optics* (Sem 3). The same formula governs the resolution of the eye, a microscope, and a radio telescope (with $\lambda$ in metres for radio, the apertures are correspondingly huge). The trade-off between field of view and image scale is the design choice behind every survey telescope (wide-field) versus every spectroscopic instrument (small-field, large image scale).

## Quick Check
1. State the Rayleigh criterion and explain each symbol.
2. Why are all the largest optical telescopes reflectors?
3. A telescope has $D = 0.5\text{ m}$. What is its diffraction-limited resolution at $\lambda = 500\text{ nm}$?
4. Why do astronomers prefer equatorial mounts for long-exposure imaging?
5. What is the purpose of an eyepiece? Is it needed for a CCD camera?

## Takeaway
- A telescope gathers light and forms an image; aperture determines both light grasp and resolution.
- Refractors use lenses; reflectors use mirrors. Mirrors scale to much larger apertures.
- Rayleigh criterion: $\theta_R = 1.22 \lambda/D$ is the diffraction-limited resolution.
- Focal length and focal ratio set image scale and field of view.
- Atmospheric seeing limits ground-based resolution; space telescopes avoid this.
