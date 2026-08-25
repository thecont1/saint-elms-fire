'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, ShieldCheck, AlertTriangle, BookOpen, User, Bot, HelpCircle, Loader2 } from 'lucide-react';
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
      content: `Hello! I am your AI Academic Tutor. I am grounded strictly in the **${releasedLessonCount} lesson(s)** released to your Second Brain so far.\n\nAsk me anything about your released courseware, architecture tradeoffs, or conceptual proofs!`,
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
        content: `Error generating response: ${err.message}. Please verify Gemini API key configuration.`,
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
    <div className="bg-slate-900/90 rounded-xl border border-slate-800 shadow-xl overflow-hidden flex flex-col h-full">
      {/* Header with Grounding Indicator */}
      <div className="p-4 border-b border-slate-800 bg-slate-950/40 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2">
              Grounded Academic Tutor
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800/60">
                Release-Gated
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Grounded exclusively in your {releasedLessonCount} released lesson(s)
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Gemini 3.7 Flash</span>
        </div>
      </div>

      {/* Unreleased Warning Banner if triggered */}
      {unreleasedWarning && (
        <div className="bg-amber-950/50 border-b border-amber-800/50 px-4 py-2 flex items-center space-x-2 text-xs text-amber-200 animate-in fade-in">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{unreleasedWarning}</span>
        </div>
      )}

      {/* Messages Scroll Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[350px] max-h-[480px]">
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
                  <span className="text-[11px] font-medium text-indigo-300">Alex (You)</span>
                  <User className="w-3 h-3 text-indigo-400" />
                </>
              ) : msg.sender === 'tutor' ? (
                <>
                  <Bot className="w-3 h-3 text-emerald-400" />
                  <span className="text-[11px] font-medium text-emerald-300">Socratic Tutor</span>
                  {msg.isGrounded && (
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                      Grounded
                    </span>
                  )}
                </>
              ) : (
                <span className="text-[11px] font-medium text-rose-400">System</span>
              )}
              <span className="text-[10px] text-slate-500 font-mono">{msg.timestamp}</span>
            </div>

            <div
              className={`p-3.5 rounded-xl text-xs leading-relaxed max-w-[88%] ${
                msg.sender === 'student'
                  ? 'bg-indigo-600 text-white rounded-tr-none shadow-md'
                  : msg.sender === 'tutor'
                  ? 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none shadow-md'
                  : 'bg-rose-950/40 border border-rose-800/50 text-rose-200'
              }`}
            >
              <div className="whitespace-pre-wrap">{msg.content}</div>

              {/* Source Citations */}
              {msg.groundedSources && msg.groundedSources.length > 0 && (
                <div className="mt-3 pt-2.5 border-t border-slate-800/80 space-y-1">
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Grounded Courseware Citations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {msg.groundedSources.map((src, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-900 border border-slate-700/80 text-[10px] text-indigo-300 font-mono"
                      >
                        <BookOpen className="w-2.5 h-2.5 text-indigo-400" />
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
          <div className="flex items-center space-x-2 text-slate-400 text-xs p-2">
            <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
            <span className="font-mono text-[11px]">Grounded synthesis via Gemini 3.7 Flash...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested prompts if few messages */}
      {messages.length <= 2 && (
        <div className="px-4 py-2 border-t border-slate-800/60 bg-slate-950/30">
          <p className="text-[10px] text-slate-500 mb-1.5 flex items-center gap-1">
            <HelpCircle className="w-3 h-3 text-slate-400" /> Try asking:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {samplePrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  setInput(p);
                }}
                className="text-[11px] px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition text-left"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Input Form */}
      <form onSubmit={handleSend} className="p-3 border-t border-slate-800 bg-slate-950/60 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about your released courseware..."
          disabled={isLoading}
          className="flex-1 bg-slate-900 border border-slate-700/80 rounded-lg px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1.5 transition disabled:opacity-40 disabled:hover:bg-indigo-600 shadow-md shadow-indigo-600/20"
        >
          <Send className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Send</span>
        </button>
      </form>
    </div>
  );
}
