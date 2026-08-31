import { describe, expect, test } from 'bun:test';
import { buildPersonaSeedPlans, readProgrammeManifest } from './persona-seed-plan';

const manifest = await readProgrammeManifest('content/programme-manifest.yaml');

describe('manifest-derived persona seed plans', () => {
  test('validates and uses the actual 71-row programme manifest', () => {
    expect(manifest.totalPdfRows).toBe(71);
    expect(manifest.rows).toHaveLength(71);
    expect(() => buildPersonaSeedPlans({ ...manifest, totalPdfRows: 70 })).toThrow('declares 70 rows but contains 71');
  });

  test('Ananya is an ongoing Semester I learner', () => {
    const plan = buildPersonaSeedPlans(manifest).ananya;
    expect(plan.releasedCourseIds).toEqual([
      'bridge-physics',
      'mechanics',
      'mechanics-lab',
      'differential-calculus',
    ]);
    expect(plan.completedSemester).toBe(0);
    expect(plan.breakMode).toBe(false);
  });

  test('Brinda uses every course currently released through Semester III', () => {
    const plan = buildPersonaSeedPlans(manifest).brinda;
    const semesterThree = plan.releasedCourses
      .filter((course) => course.semesterNumber === 3)
      .map((course) => course.courseId);
    expect(semesterThree).toEqual(['waves-and-optics', 'waves-and-optics-lab', 'real-analysis', 'astrophysics-iii']);
    expect(plan.releasedCourseIds).toContain('astrophysics-iii');
    expect(plan.seedComment).toContain('programme manifest');
  });

  test('Chetna has every released course through Semester V and break mode', () => {
    const plans = buildPersonaSeedPlans(manifest);
    const plan = plans.chetna;
    expect(Math.max(...plan.releasedCourses.map((course) => course.semesterNumber))).toBe(5);
    expect(plan.releasedCourses.every((course) => course.status === 'released')).toBe(true);
    expect(plan.releasedCourseIds.length).toBeGreaterThan(plans.brinda.releasedCourseIds.length);
    expect(plan.completedSemester).toBe(5);
    expect(plan.breakMode).toBe(true);
    expect(plan.recommendReadings).toBe(true);
  });
});
