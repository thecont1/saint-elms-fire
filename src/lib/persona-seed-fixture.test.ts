// @ts-nocheck -- Bun exposes bun:test at runtime.
import { describe, expect, test } from 'bun:test';
import { buildPersonaSeedFixture } from './persona-seed-fixture';
import { buildPersonaSeedPlans, readProgrammeManifest } from './persona-seed-plan';
import type { Course, CourseModule, Lesson } from './types';

const plans = buildPersonaSeedPlans(await readProgrammeManifest('content/programme-manifest.yaml'));

function corpusFor(plan: (typeof plans)[keyof typeof plans]) {
  const courses: Course[] = plan.releasedCourses.map((row) => ({
    id: `course-${row.courseId}`, code: row.courseId, title: row.courseName, description: '', createdAt: '2026-01-01T00:00:00.000Z',
  }));
  const modules: CourseModule[] = courses.map((course) => ({
    id: `module-${course.code}`, courseId: course.id, title: `${course.title} module`, description: '', order: 1, createdAt: '2026-01-01T00:00:00.000Z',
  }));
  const lessons: Lesson[] = modules.map((module) => ({
    id: `lesson-${module.id}`, courseId: module.courseId, moduleId: module.id, title: module.title, order: 1,
    markdownContent: '# Seed lesson', createdAt: '2026-01-01T00:00:00.000Z',
  }));
  return { courses, modules, lessons };
}

describe('deterministic persona fixtures', () => {
  test('is logically byte-stable across repeated builds', () => {
    const first = buildPersonaSeedFixture(plans.brinda, corpusFor(plans.brinda));
    const second = buildPersonaSeedFixture(plans.brinda, corpusFor(plans.brinda));
    expect(JSON.stringify(first)).toBe(JSON.stringify(second));
  });

  test('creates valid released records with complete ingestion steps', () => {
    const fixture = buildPersonaSeedFixture(plans.ananya, corpusFor(plans.ananya));
    expect(fixture.releases.length).toBeGreaterThan(0);
    expect(fixture.releases.every((release) => release.status === 'released' && release.overallStatus === 'released')).toBe(true);
    expect(fixture.releases.every((release) => release.steps?.every((step) => step.status === 'complete'))).toBe(true);
  });

  test('makes states materially distinct and gives only Chetna break readings', () => {
    const ananya = buildPersonaSeedFixture(plans.ananya, corpusFor(plans.ananya));
    const brinda = buildPersonaSeedFixture(plans.brinda, corpusFor(plans.brinda));
    const chetna = buildPersonaSeedFixture(plans.chetna, corpusFor(plans.chetna));
    expect(ananya.nodes).toHaveLength(8);
    expect(brinda.nodes).toHaveLength(20);
    expect(chetna.nodes).toHaveLength(36);
    expect(ananya.recommendations).toHaveLength(0);
    expect(brinda.recommendations).toHaveLength(0);
    expect(chetna.recommendations.length).toBeGreaterThan(0);
    expect(chetna.socraticSessions[0].triggerReason).toContain('Spaced revisitation');
  });

  test('fails instead of inventing missing manifest courseware', () => {
    expect(() => buildPersonaSeedFixture(plans.ananya, { courses: [], modules: [], lessons: [] }))
      .toThrow('Corpus is missing manifest courses');
  });
});
