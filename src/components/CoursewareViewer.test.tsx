// @ts-nocheck
import { beforeAll, beforeEach, afterEach, describe, expect, test } from 'bun:test';
import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { JSDOM } from 'jsdom';
import { CoursewareViewer } from './CoursewareViewer';
import type { ProgrammeOutline } from '@/lib/types';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

const STORAGE_KEY_EXPANSION = 'sef-courseware-expansion';

let container: HTMLDivElement | null = null;
let root: any = null;

const sampleOutline: ProgrammeOutline = {
  programme: null,
  semesters: [
    {
      id: 'sem-1',
      title: 'Semester I',
      semesterNumber: 1,
      order: 1,
      synthesized: false,
      courses: [
        {
          course: {
            id: 'course-1',
            code: 'PHY101',
            title: 'Bridge Physics',
            description: 'Introductory physics',
            semesterId: 'sem-1',
            createdAt: '2026-01-01',
          },
          modules: [
            {
              id: 'mod-1',
              courseId: 'course-1',
              title: 'Classical Mechanics',
              order: 1,
              lessons: [
                {
                  id: 'les-1',
                  courseId: 'course-1',
                  moduleId: 'mod-1',
                  title: 'Harmonic Motion',
                  order: 1,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sem-2',
      title: 'Semester II',
      semesterNumber: 2,
      order: 2,
      synthesized: false,
      courses: [
        {
          course: {
            id: 'course-2',
            code: 'PHY201',
            title: 'Electromagnetism',
            description: 'Introductory electromagnetism',
            semesterId: 'sem-2',
            createdAt: '2026-01-01',
          },
          modules: [
            {
              id: 'mod-2',
              courseId: 'course-2',
              title: 'Electrostatics',
              order: 1,
              lessons: [
                {
                  id: 'les-2',
                  courseId: 'course-2',
                  moduleId: 'mod-2',
                  title: 'Coulombs Law',
                  order: 1,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  orphanCourses: [],
};

beforeAll(() => {
  if (!globalThis.window) {
    const dom = new JSDOM('<!doctype html><html><body></body></html>', {
      url: 'http://localhost/',
      pretendToBeVisual: true,
    });
    globalThis.window = dom.window;
    globalThis.document = dom.window.document;
    for (const key of [
      'Node', 'NodeList', 'Element', 'HTMLElement', 'HTMLInputElement', 'HTMLTextAreaElement',
      'SVGElement', 'DocumentFragment', 'MutationObserver', 'CustomEvent', 'Event',
      'KeyboardEvent', 'MouseEvent', 'getComputedStyle', 'CSS',
    ]) {
      if (dom.window[key] !== undefined) globalThis[key] = dom.window[key];
    }
  }

  if (!globalThis.window.localStorage) {
    let store: Record<string, string> = {};
    const mockStorage = {
      getItem: (k: string) => store[k] ?? null,
      setItem: (k: string, v: string) => { store[k] = String(v); },
      removeItem: (k: string) => { delete store[k]; },
      clear: () => { store = {}; },
      key: (i: number) => Object.keys(store)[i] ?? null,
      get length() { return Object.keys(store).length; },
    };
    globalThis.window.localStorage = mockStorage;
    globalThis.localStorage = mockStorage;
  }
});

beforeEach(() => {
  window.localStorage.clear();
  if (root) {
    act(() => {
      root.unmount();
    });
    root = null;
  }
  if (container && container.parentNode) {
    container.parentNode.removeChild(container);
  }
  container = document.createElement('div');
  container.id = 'root';
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  if (root) {
    act(() => {
      root.unmount();
    });
    root = null;
  }
  if (container && container.parentNode) {
    container.parentNode.removeChild(container);
    container = null;
  }
});

describe('CoursewareViewer expansion persistence', () => {
  test('restores saved expansion choices from localStorage without overwriting on mount', async () => {
    // Simulate pre-existing saved state (e.g. sem-1 and course-1 expanded, sem-2 collapsed)
    const savedState = {
      semesters: { 'sem-1': true, 'sem-2': false },
      courses: { 'course-1': true, 'course-2': false },
    };
    window.localStorage.setItem(STORAGE_KEY_EXPANSION, JSON.stringify(savedState));

    await act(async () => {
      root.render(
        <CoursewareViewer
          modules={[]}
          lessons={[]}
          releasedLessons={[]}
          programmeOutline={sampleOutline}
          releasedLessonIds={new Set(['les-1'])}
          releasedModuleIds={new Set(['mod-1'])}
          selectedLessonId={null}
          onSelectLesson={() => {}}
        />,
      );
    });

    // Check that localStorage was NOT overwritten with default initial state
    const rawInStorage = window.localStorage.getItem(STORAGE_KEY_EXPANSION);
    expect(rawInStorage).not.toBeNull();
    const parsedInStorage = JSON.parse(rawInStorage!);
    expect(parsedInStorage.semesters['sem-1']).toBe(true);
    expect(parsedInStorage.courses['course-1']).toBe(true);

    // Verify the DOM reflects the expanded state
    const buttons = Array.from(container!.querySelectorAll('button'));
    const sem1Button = buttons.find((b) => b.textContent?.includes('Semester I'));
    expect(sem1Button).toBeDefined();
    expect(sem1Button?.getAttribute('aria-expanded')).toBe('true');

    const course1Button = buttons.find((b) => b.textContent?.includes('Bridge Physics'));
    expect(course1Button).toBeDefined();
    expect(course1Button?.getAttribute('aria-expanded')).toBe('true');
  });

  test('saves state to localStorage when user toggles a section', async () => {
    await act(async () => {
      root.render(
        <CoursewareViewer
          modules={[]}
          lessons={[]}
          releasedLessons={[]}
          programmeOutline={sampleOutline}
          releasedLessonIds={new Set(['les-1'])}
          releasedModuleIds={new Set(['mod-1'])}
          selectedLessonId={null}
          onSelectLesson={() => {}}
        />,
      );
    });

    // Toggle Semester II
    const buttons = Array.from(container!.querySelectorAll('button'));
    const sem2Button = buttons.find((b) => b.textContent?.includes('Semester II')) as HTMLButtonElement;
    expect(sem2Button).toBeDefined();

    await act(async () => {
      sem2Button.click();
    });

    const rawInStorage = window.localStorage.getItem(STORAGE_KEY_EXPANSION);
    expect(rawInStorage).not.toBeNull();
    const parsedInStorage = JSON.parse(rawInStorage!);
    expect(parsedInStorage.semesters['sem-2']).toBe(true);
  });
});
