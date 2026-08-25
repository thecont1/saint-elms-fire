'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, ShieldCheck, AlertTriangle, BookOpen, User, Bot, HelpCircle, Loader2, Compass } from 'lucide-react';
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
      content: `Welcome to the Socratic Beacon! I am your AI Academic Guide.\n\nI am grounded strictly in the **${releasedLessonCount} lesson(s)** unlocked in your Second Brain so far. Ask me about system mechanics, consensus invariants, or conceptual proofs!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
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
            content: `Welcome to the Socratic Beacon! I am your AI Academic Guide.\n\nI am grounded strictly in the **${releasedLessonCount} lesson(s)** unlocked in your Second Brain so far. Ask me about system mechanics, consensus invariants, or conceptual proofs!`,
            timestamp: prev[0].timestamp,
            isGrounded: true,
          },
        ];
      }
      return prev;
    });
  }, [releasedLessonCount]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = input.trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'student',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
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
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isGrounded: data.isGrounded,
        groundedSources: data.groundedSources,
      };

      setMessages((prev) => [...prev, tutorMsg]);
    } catch (err: any) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'system',
        content: `Error: ${err.message}. Please verify Gemini API key settings.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
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
    <div className="bg-white rounded-2xl border border-sky-100 shadow-xl shadow-sky-500/5 overflow-hidden flex flex-col h-full">
      {/* Header with Grounding Indicator */}
      <div className="p-4 border-b border-sky-100 bg-gradient-to-r from-sky-50/80 via-white to-blue-50/40 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-xl bg-emerald-100 border border-emerald-200 text-emerald-700 shadow-2xs">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              Academic Beacon Chat
              <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 font-bold">
                Release-Gated
              </span>
            </h3>
            <p className="text-xs text-slate-500">
              Grounded exclusively in your {releasedLessonCount} unlocked lesson(s)
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1.5 text-xs text-sky-800 font-semibold bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
          <Sparkles className="w-3.5 h-3.5 text-sky-600" />
          <span>Gemini 3.7 Flash</span>
        </div>
      </div>

      {/* Unreleased Warning Banner if triggered */}
      {unreleasedWarning && (
        <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 flex items-center space-x-2 text-xs text-amber-900 animate-in fade-in">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="font-medium">{unreleasedWarning}</span>
        </div>
      )}

      {/* Messages Scroll Area */}
      <div className="flex-1 p-5 overflow-y-auto space-y-4 min-h-[320px] bg-slate-50/40">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.sender === 'student' ? 'items-end' : 'items-start'
            }`}
          >
            <div className="flex items-center space-x-1.5 mb-1 px-1">
              {msg.sender === 'student' ? (
                <>
                  <span className="text-xs font-bold text-sky-800">Alex (You)</span>
                  <User className="w-3.5 h-3.5 text-sky-600" />
                </>
              ) : msg.sender === 'tutor' ? (
                <>
                  <Bot className="w-3.5 h-3.5 text-sky-600" />
                  <span className="text-xs font-bold text-sky-900">Socratic Guide</span>
                  {msg.isGrounded && (
                    <span className="text-[9px] px-2 py-0.2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold">
                      Grounded
                    </span>
                  )}
                </>
              ) : (
                <span className="text-xs font-bold text-rose-600">System</span>
              )}
              <span className="text-[10px] text-slate-400 font-mono">{msg.timestamp}</span>
            </div>

            <div
              className={`p-4 rounded-2xl text-xs leading-relaxed max-w-[88%] ${
                msg.sender === 'student'
                  ? 'bg-sky-600 text-white rounded-tr-none shadow-md shadow-sky-600/10'
                  : msg.sender === 'tutor'
                  ? 'bg-white border border-sky-100 text-slate-800 rounded-tl-none shadow-xs font-medium'
                  : 'bg-rose-50 border border-rose-200 text-rose-800'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>

              {/* Source Citations */}
              {msg.groundedSources && msg.groundedSources.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Verified Courseware Sources:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.groundedSources.map((src, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200 text-[10px] text-sky-900 font-semibold"
                      >
                        <BookOpen className="w-3 h-3 text-sky-600" />
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
          <div className="flex items-center space-x-2 text-sky-800 text-xs p-2 font-medium">
            <Loader2 className="w-4 h-4 animate-spin text-sky-600" />
            <span>Consulting your unlocked curriculum with Gemini 3.7 Flash...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested prompts */}
      {messages.length <= 2 && (
        <div className="px-4 py-2.5 border-t border-slate-100 bg-sky-50/40">
          <p className="text-[11px] text-slate-500 mb-1.5 flex items-center gap-1 font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" /> Suggested Navigational Inquiries:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {samplePrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => setInput(p)}
                className="text-xs px-3 py-1 rounded-lg bg-white border border-sky-200 text-slate-700 hover:text-sky-800 hover:border-sky-400 transition text-left shadow-2xs font-medium"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Input Form */}
      <form onSubmit={handleSend} className="p-3.5 border-t border-sky-100 bg-white flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about your unlocked courseware..."
          disabled={isLoading}
          className="flex-1 bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl px-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-200 disabled:opacity-50 transition"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold flex items-center gap-1.5 transition disabled:opacity-40 shadow-md shadow-sky-600/20"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>
    </div>
  );
}
