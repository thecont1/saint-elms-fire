'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { ChatMessage } from '@/lib/types';
import type { HearthPersona } from './hearth-personas';

export type PersonaChatPhase = 'loading' | 'ready' | 'storm';

export interface PersonaChatState {
  persona: HearthPersona;
  messages: ChatMessage[];
  phase: PersonaChatPhase;
  sending: boolean;
  /** The question whose send failed; shown as a storm card with manual retry. */
  failedQuestion: string | null;
  unreleasedWarning: string | null;
  input: string;
  setInput: (value: string) => void;
  send: (question?: string) => Promise<void>;
  /** Manual recovery: retry the failed send, or reload history after a load storm. */
  retry: () => Promise<void>;
}

function timestampNow(): string {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

export function usePersonaChat(studentId: string, persona: HearthPersona): PersonaChatState {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [phase, setPhase] = useState<PersonaChatPhase>('loading');
  const [sending, setSending] = useState(false);
  const [failedQuestion, setFailedQuestion] = useState<string | null>(null);
  const [unreleasedWarning, setUnreleasedWarning] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const load = useCallback(async () => {
    setPhase('loading');
    try {
      const res = await fetch(`/api/chat/history?studentId=${studentId}&persona=${persona}`, { cache: 'no-store' });
      if (!res.ok) throw new Error(`history ${res.status}`);
      const data = await res.json();
      if (!mountedRef.current) return;
      setMessages(data.messages ?? []);
      setPhase('ready');
    } catch {
      if (mountedRef.current) setPhase('storm');
    }
  }, [studentId, persona]);

  useEffect(() => {
    setMessages([]);
    setFailedQuestion(null);
    setUnreleasedWarning(null);
    load();
  }, [load]);

  /** Calls /api/chat for a question already present on the thread. */
  const requestAnswer = useCallback(
    async (content: string, historySource: ChatMessage[], messageId: string) => {
      const historyForModel = historySource
        .filter((m) => m.sender !== 'system')
        .map((m) => ({ role: m.sender === 'student' ? 'user' : 'model', content: m.content }));

      setSending(true);
      setFailedQuestion(null);
      setUnreleasedWarning(null);
      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ studentId, persona, question: content, messageId, history: historyForModel, topK: 6 }),
        });
        if (!res.ok) throw new Error(`chat ${res.status}`);
        const data = await res.json();
        if (!mountedRef.current) return;
        if (data.unreleasedTopicsWarning) setUnreleasedWarning(data.unreleasedTopicsWarning);
        const tutorMessage: ChatMessage = {
          id: `${Date.now()}-t`,
          sender: 'tutor',
          persona,
          content: data.answer,
          timestamp: timestampNow(),
          isGrounded: data.isGrounded,
          groundedSources: data.groundedSources,
          servedBy: data.servedBy,
        };
        setMessages((prev) => [...prev, tutorMessage]);
      } catch {
        if (!mountedRef.current) return;
        // Storm state: the student's turn stays on the thread, the failed
        // question is held for manual retry — never an infinite spinner.
        setFailedQuestion(content);
      } finally {
        if (mountedRef.current) setSending(false);
      }
    },
    [studentId, persona],
  );

  const send = useCallback(
    async (question?: string) => {
      const content = (question ?? input).trim();
      if (!content || sending) return;

      const userMessage: ChatMessage = {
        id: `${Date.now()}`,
        sender: 'student',
        persona,
        content,
        timestamp: timestampNow(),
        isGrounded: false,
      };
      setInput('');
      const next = [...messages, userMessage];
      setMessages(next);
      void requestAnswer(content, next, userMessage.id);
    },
    [input, sending, messages, requestAnswer],
  );

  const retry = useCallback(async () => {
    if (phase === 'storm') {
      await load();
      return;
    }
    if (failedQuestion && !sending) {
      // The failed question is already on the thread — re-request only the answer.
      const failedMessage = [...messages].reverse().find((message) => message.sender === 'student' && message.content === failedQuestion);
      await requestAnswer(failedQuestion, messages, failedMessage?.id ?? crypto.randomUUID());
    }
  }, [phase, failedQuestion, sending, load, requestAnswer, messages]);

  return { persona, messages, phase, sending, failedQuestion, unreleasedWarning, input, setInput, send, retry };
}
