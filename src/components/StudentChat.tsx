'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, AlertTriangle, BookOpen, User, HelpCircle, Loader2 } from 'lucide-react';
import { CoronaMark } from '@/components/Navigation';
import { InfoIcon } from '@/components/InfoIcon';
import type { ChatMessage } from '@/lib/types';

interface StudentChatProps {
  studentId: string;
  releasedLessonCount: number;
  initialQuery?: string;
}

export function StudentChat({
  studentId,
  releasedLessonCount,
  initialQuery = '',
}: StudentChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'tutor',
      content: `Welcome aboard! I am Socrates my Guide — your guide through these waters.\n\nI am grounded strictly in the **${releasedLessonCount} lesson(s)** unlocked on your chart so far. Ask me about system mechanics, consensus invariants, or conceptual proofs — and trust the light.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      isGrounded: true,
    },
  ]);
  const [input, setInput] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [unreleasedWarning, setUnreleasedWarning] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuery) {
      setInput(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            sender: 'tutor',
            content: `Welcome aboard! I am Socrates my Guide — your guide through these waters.\n\nI am grounded strictly in the **${releasedLessonCount} lesson(s)** unlocked on your chart so far. Ask me about system mechanics, consensus invariants, or conceptual proofs — and trust the light.`,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            isGrounded: true,
          },
        ];
      }
      return prev;
    });
  }, [releasedLessonCount]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = input.trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'student',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      isGrounded: false,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    setUnreleasedWarning(null);

    try {
      const history = messages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: (m.sender === 'student' ? 'student' : 'tutor') as 'student' | 'tutor',
          content: m.content,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId,
          question: query,
          history,
        }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.unreleasedTopicsWarning) {
        setUnreleasedWarning(data.unreleasedTopicsWarning);
      }

      const tutorMsg: ChatMessage = {
        id: `tutor-${Date.now()}`,
        sender: 'tutor',
        content: data.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        isGrounded: data.isGrounded,
        groundedSources: data.groundedSources,
      };

      setMessages((prev) => [...prev, tutorMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'system',
        content: `Error: ${err.message}. Please verify Gemini API key settings.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        isGrounded: false,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const samplePrompts = [
    'How does Raft leader election prevent split-brain?',
    'What is the difference between CFT and BFT?',
    'Explain HNSW layers and skip connections',
    'How do durable workflows handle checkpointing?',
  ];

  return (
    <div className="chart-card overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-beacon-100 bg-beacon-50/60">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-beacon-600 text-white flex items-center justify-center corona-glow shrink-0">
              <User className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-base font-semibold text-marine-900">
                Socrates my Friend
              </h3>
              <p className="text-xs text-marine-500 leading-snug">
                Personal chatbox
              </p>
            </div>
          </div>
          <InfoIcon text="Socrates my Friend is your personal chatbox. Ask Socrates my Guide anything grounded in your unlocked lessons." />
        </div>
      </div>

      {/* Unreleased Warning Banner if triggered */}
      {unreleasedWarning && (
        <div className="bg-beacon-100/70 border-b border-beacon-200 px-4 py-2.5 flex items-center gap-2 text-xs text-beacon-900 animate-in fade-in">
          <AlertTriangle className="w-4 h-4 text-beacon-600 shrink-0" />
          <span className="font-medium">{unreleasedWarning}</span>
        </div>
      )}

      {/* Messages Scroll Area */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4 min-h-[320px] bg-chart/60">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.sender === 'student' ? 'items-end' : 'items-start'
            }`}
          >
            <div className="flex items-center gap-1.5 mb-1 px-1">
              {msg.sender === 'student' ? (
                <>
                  <span className="text-xs font-bold text-beacon-700">Alex (You)</span>
                  <User className="w-3.5 h-3.5 text-beacon-500" />
                </>
              ) : msg.sender === 'tutor' ? (
                <>
                  <CoronaMark className="w-3.5 h-3.5 text-beacon-500" />
                </>
              ) : (
                <span className="text-xs font-bold text-rose-600">System</span>
              )}
              <span className="text-[10px] text-marine-400 font-mono" suppressHydrationWarning>{msg.timestamp}</span>
            </div>

            <div
              className={`p-4 rounded-2xl text-xs leading-relaxed max-w-[88%] ${
                msg.sender === 'student'
                  ? 'bg-beacon-600 text-white rounded-tr-none shadow-sm'
                  : msg.sender === 'tutor'
                  ? 'bg-white border border-beacon-100 text-marine-800 rounded-tl-none shadow-sm font-medium'
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>

              {/* Source Citations */}
              {msg.groundedSources && msg.groundedSources.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-beacon-50 space-y-1.5">
                  <span className="chart-annotation block">
                    Sighted in courseware:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.groundedSources.map((src, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-beacon-50 border border-beacon-200 text-[10px] text-beacon-900 font-semibold"
                      >
                        <BookOpen className="w-3 h-3 text-beacon-500" />
                        {src.lessonTitle || src.concept}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-2 text-beacon-700 text-xs p-2 font-medium">
            <Loader2 className="w-4 h-4 animate-spin text-beacon-500" />
            <span>Trimming the sails — consulting your unlocked curriculum...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested prompts */}
      {messages.length <= 2 && (
        <div className="px-4 py-2.5 border-t border-beacon-100 bg-beacon-50/50">
          <p className="chart-annotation mb-1.5 flex items-center gap-1">
            <HelpCircle className="w-3.5 h-3.5 text-beacon-500" /> Chart a line of inquiry:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {samplePrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => setInput(p)}
                className="text-xs px-3 py-1 rounded-full bg-white border border-beacon-200 text-marine-600 hover:text-beacon-700 hover:border-beacon-400 transition text-left font-medium"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Input Form */}
      <form onSubmit={handleSend} className="p-3.5 border-t border-beacon-100 bg-white flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Socrates my Guide about your unlocked courseware..."
          disabled={isLoading}
          className="flex-1 bg-chart border border-beacon-100 focus:border-beacon-500 focus:bg-white rounded-full px-4 py-2.5 text-xs text-marine-900 placeholder-marine-400 focus:outline-none focus:ring-2 focus:ring-beacon-200 disabled:opacity-50 transition"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="w-10 h-10 rounded-full bg-beacon-600 hover:bg-beacon-500 text-white flex items-center justify-center transition disabled:opacity-40 shadow-sm shrink-0"
          title="Send"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
