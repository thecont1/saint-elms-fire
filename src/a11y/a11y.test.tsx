// @ts-nocheck -- Bun exposes bun:test at runtime; jsdom globals are assigned dynamically.
import { beforeAll, describe, expect, test } from 'bun:test';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { JSDOM } from 'jsdom';
import axe from 'axe-core';

import { HearthRail } from '@/components/HearthNav';
import { PersonaChatPanel } from '@/components/PersonaChatPanel';
import { HearthDeck } from '@/components/HearthDeck';
import { Navigation } from '@/components/Navigation';
import { QuizModal } from '@/components/QuizModal';
import { getPersonaConfig } from '@/components/hearth-personas';
import { DEMO_PERSONAS, getDemoPersona } from '@/lib/demo-session';
import type { ChatMessage, Lesson } from '@/lib/types';

beforeAll(() => {
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
});

async function axeScan(node: React.ReactElement) {
  document.body.innerHTML = renderToString(node);
  const results = await axe.run(document.body, {
    // jsdom has no layout engine; contrast and position checks report as
    // "incomplete" there and are covered by the Lighthouse pass instead.
    rules: {
      'color-contrast': { enabled: false },
      region: { enabled: false },
      'page-has-heading-one': { enabled: false },
      'landmark-one-main': { enabled: false },
    },
  });
  const blocking = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
  return { blocking, all: results.violations };
}

function mockChat(overrides: Record<string, unknown> = {}) {
  return {
    persona: 'guide',
    messages: [],
    phase: 'ready',
    sending: false,
    failedQuestion: null,
    unreleasedWarning: null,
    input: '',
    setInput: () => {},
    send: async () => {},
    retry: async () => {},
    ...overrides,
  };
}

const tutorMessage: ChatMessage = {
  id: 'm2',
  sender: 'tutor',
  persona: 'guide',
  content: '[course] Displacement is the straight-line change in position.',
  timestamp: '08:30:00',
  isGrounded: true,
  groundedSources: [{ lessonTitle: 'Mechanics I', lessonId: 'l1', concept: 'Kinematics' }],
  servedBy: { model: 'gemini-3.7-flash', role: 'primary', attemptCount: 1 },
};

const studentMessage: ChatMessage = {
  id: 'm1',
  sender: 'student',
  persona: 'guide',
  content: 'What is displacement?',
  timestamp: '08:29:58',
  isGrounded: false,
};

describe('Hearth accessibility (WCAG 2.2)', () => {
  test('empty panel state with sample prompts has no serious/critical violations', async () => {
    const { blocking, all } = await axeScan(
      <PersonaChatPanel config={getPersonaConfig('friend')} chat={mockChat({ persona: 'friend' })} />,
    );
    expect(blocking, JSON.stringify(all, null, 2)).toEqual([]);
  });

  test('thread state with servedBy chip and grounding has no serious/critical violations', async () => {
    const { blocking, all } = await axeScan(
      <PersonaChatPanel config={getPersonaConfig('guide')} chat={mockChat({ messages: [studentMessage, tutorMessage] })} />,
    );
    expect(blocking, JSON.stringify(all, null, 2)).toEqual([]);
  });

  test('storm states (load failure and failed send) have no serious/critical violations', async () => {
    const loadStorm = await axeScan(
      <PersonaChatPanel config={getPersonaConfig('philosopher')} chat={mockChat({ persona: 'philosopher', phase: 'storm' })} />,
    );
    expect(loadStorm.blocking, JSON.stringify(loadStorm.all, null, 2)).toEqual([]);

    const sendStorm = await axeScan(
      <PersonaChatPanel
        config={getPersonaConfig('guide')}
        chat={mockChat({ messages: [studentMessage], failedQuestion: 'What is displacement?' })}
      />,
    );
    expect(sendStorm.blocking, JSON.stringify(sendStorm.all, null, 2)).toEqual([]);
  });

  test('skeleton thread state has no serious/critical violations', async () => {
    const { blocking, all } = await axeScan(
      <PersonaChatPanel config={getPersonaConfig('guide')} chat={mockChat({ phase: 'loading' })} />,
    );
    expect(blocking, JSON.stringify(all, null, 2)).toEqual([]);
  });

  test('full Hearth deck shell (carousel ARIA, rail, mobile bar) has no serious/critical violations', async () => {
    const { blocking, all } = await axeScan(<HearthDeck studentId="student-ananya" />);
    expect(blocking, JSON.stringify(all, null, 2)).toEqual([]);
  });

  test('rail exposes roving tabindex, trident order, and 44px markup', async () => {
    document.body.innerHTML = renderToString(<HearthRail active="friend" onSelect={() => {}} />);
    const tabs = [...document.querySelectorAll('[role="tab"]')];
    expect(tabs).toHaveLength(3);
    expect(tabs.map((t) => t.getAttribute('tabindex'))).toEqual(['0', '-1', '-1']);
    expect(tabs.map((t) => t.getAttribute('data-persona'))).toEqual(['friend', 'philosopher', 'guide']);
    for (const tab of tabs) {
      expect(tab.className).toContain('min-h-[44px]');
      expect(tab.className).toContain('min-w-[44px]');
    }
  });
});

describe('Header and quiz surfaces', () => {
  test('student header with persona dropdown has no serious/critical violations', async () => {
    const { blocking, all } = await axeScan(
      <Navigation
        currentRole="student"
        currentPersona={getDemoPersona('brinda')}
        personas={DEMO_PERSONAS}
        onPersonaChange={() => {}}
        onSync={() => {}}
      />,
    );
    expect(blocking, JSON.stringify(all, null, 2)).toEqual([]);
  });

  test('admin header has no serious/critical violations', async () => {
    const { blocking, all } = await axeScan(
      <Navigation
        currentRole="admin"
        currentPersona={getDemoPersona('admin')}
        personas={DEMO_PERSONAS}
        onPersonaChange={() => {}}
        onSync={() => {}}
        onBoom={() => {}}
      />,
    );
    expect(blocking, JSON.stringify(all, null, 2)).toEqual([]);
  });

  test('quiz modal shell has no serious/critical violations', async () => {
    const lesson = {
      id: 'lesson-1',
      moduleId: 'module-1',
      title: 'Displacement and Distance',
      content: '…',
      order: 1,
      status: 'released',
    } as Lesson;
    const { blocking, all } = await axeScan(
      <QuizModal lesson={lesson} studentId="student-ananya" onClose={() => {}} />,
    );
    expect(blocking, JSON.stringify(all, null, 2)).toEqual([]);
  });
});
