
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Send, AlertTriangle, BookOpen, User, HelpCircle, Loader2, Compass, Heart, Users } from 'lucide-react';
import { CoronaMark } from '@/components/Navigation';
import { InfoIcon } from '@/components/InfoIcon';
import type { ChatMessage } from '@/lib/types';

interface StudentChatProps {
  studentId: string;
  releasedLessonCount: number;
  initialQuery?: string;
}

type Persona = 'guide' | 'philosopher' | 'friend';

const PERSONAS: Record<Persona, { title: string, subtitle: string, icon: React.FC<any>, samples: string[], welcome: string }> = {
  guide: {
    title: 'Socrates my Guide',
    subtitle: 'ask within your charted course',
    icon: BookOpen,
    samples: ['Explain the key concepts of the latest module.', 'What does the reading say about this topic?'],
    welcome: 'Welcome aboard! I am Socrates my Guide. I am grounded strictly in your unlocked lessons. Ask me about concepts and course mechanics.',
  },
  philosopher: {
    title: 'Socrates my Philosopher',
    subtitle: 'push beyond it',
    icon: Compass,
    samples: ['How does this connect to real-world systems?', 'What is the broader impact of this theory?'],
    welcome: 'I am Socrates my Philosopher. I push you to explore beyond the syllabus. Where shall we wander today?',
  },
  friend: {
    title: 'Socrates my Friend',
    subtitle: 'everything around the course',
    icon: Heart,
    samples: ['When are office hours?', 'Where can I find the library?'],
    welcome: "I am your course-ops buddy! I help with university support, timetables, and policies.",
  }
};

export function StudentChat({
  studentId,
  releasedLessonCount,
  initialQuery = '',
}: StudentChatProps) {
  const [persona, setPersona] = useState<Persona>('guide');
  const [messagesByPersona, setMessagesByPersona] = useState<Record<Persona, ChatMessage[]>>({
    guide: [],
    philosopher: [],
    friend: []
  });
  
  const [input, setInput] = useState(initialQuery);
  const [isLoading, setIsLoading] = useState(false);
  const [unreleasedWarning, setUnreleasedWarning] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messages = messagesByPersona[persona];

  useEffect(() => {
    let cancelled = false;
    const fetchHistory = async (p: Persona) => {
      try {
        const res = await fetch(`/api/chat/history?studentId=${studentId}&persona=${p}`, { cache: 'no-store' });
        const data = await res.json();
        if (cancelled) return;
        const history: ChatMessage[] = data.messages ?? [];
        if (history.length > 0) {
          setMessagesByPersona(prev => ({ ...prev, [p]: history }));
        } else {
          setMessagesByPersona(prev => ({ 
            ...prev, 
            [p]: [{
              id: 'welcome',
              sender: 'tutor',
              content: PERSONAS[p].welcome,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
              isGrounded: true,
            }] 
          }));
        }
      } catch {
        if (!cancelled) {
          setMessagesByPersona(prev => ({ 
            ...prev, 
            [p]: [{
              id: 'welcome',
              sender: 'tutor',
              content: PERSONAS[p].welcome,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
              isGrounded: true,
            }] 
          }));
        }
      }
    };
    
    fetchHistory('guide');
    fetchHistory('philosopher');
    fetchHistory('friend');
    
    return () => { cancelled = true; };
  }, [studentId, releasedLessonCount]);

  useEffect(() => {
    if (initialQuery) {
      setInput(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'student',
      persona,
      content: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      isGrounded: false,
    };

    setMessagesByPersona(prev => ({ ...prev, [persona]: [...prev[persona], userMessage] }));
    setInput('');
    setIsLoading(true);
    setUnreleasedWarning(null);

    const historyForModel = messages
      .filter((m) => m.sender !== 'system')
      .map((m) => ({ role: m.sender === 'student' ? 'user' : 'model', content: m.content }));

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentId,
          persona,
          question: userMessage.content,
          history: historyForModel,
          topK: 6,
        }),
      });

      if (!res.ok) throw new Error('Generation failed');

      const data = await res.json();
      
      if (data.unreleasedTopicsWarning) {
        setUnreleasedWarning(data.unreleasedTopicsWarning);
      }

      const tutorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'tutor',
        persona,
        content: data.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        isGrounded: data.isGrounded,
        groundedSources: data.groundedSources,
      };

      setMessagesByPersona(prev => ({ ...prev, [persona]: [...prev[persona], tutorMessage] }));
    } catch (err) {
      console.error(err);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'system',
        persona,
        content: 'Lost contact with the model routing layer. The request could not be fulfilled.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        isGrounded: false,
      };
      setMessagesByPersona(prev => ({ ...prev, [persona]: [...prev[persona], errorMessage] }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
      <div className="p-4 bg-slate-50 border-b border-slate-200 shrink-0">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {(Object.keys(PERSONAS) as Persona[]).map((p) => {
            const P = PERSONAS[p];
            const Icon = P.icon;
            const isActive = persona === p;
            return (
              <button
                key={p}
                onClick={() => setPersona(p)}
                className={`flex items-center px-4 py-2 rounded-full border ${isActive ? 'bg-indigo-600 text-white border-indigo-700' : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'} transition-colors`}
              >
                <Icon className="w-4 h-4 mr-2" />
                <div className="text-left">
                  <div className="text-sm font-semibold">{P.title}</div>
                  <div className={`text-xs ${isActive ? 'text-indigo-200' : 'text-slate-500'}`}>{P.subtitle}</div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50">
        {messages.map((msg, index) => (
          <div key={msg.id || index} className={`flex ${msg.sender === 'student' ? 'justify-end' : 'justify-start'}`}>
            {msg.sender === 'tutor' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mr-3 mt-1 shadow-sm">
                <CoronaMark className="w-5 h-5 text-slate-600" />
              </div>
            )}
            {msg.sender === 'system' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-1 shadow-sm">
                <AlertTriangle className="w-5 h-5 text-red-600" />
              </div>
            )}
            
            <div className={`max-w-[85%] rounded-2xl p-4 ${
                msg.sender === 'student' 
                  ? 'bg-indigo-600 text-white rounded-tr-none shadow-md' 
                  : msg.sender === 'system'
                    ? 'bg-red-50 text-red-900 border border-red-200'
                    : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm'
              }`}
            >
              <div className="whitespace-pre-wrap leading-relaxed text-[15px]">{msg.content}</div>
              
              {msg.sender === 'tutor' && msg.isGrounded && (
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center text-xs font-medium text-emerald-600 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                    GROUNDED IN
                  </div>
                  <ul className="space-y-1">
                    {msg.groundedSources?.map((src, i) => (
                      <li key={i} className="text-xs text-slate-500 flex items-start">
                        <span className="mr-1.5 opacity-60">•</span>
                        <span className="line-clamp-1">{src.lessonTitle || src.concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {msg.sender === 'student' && (
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center ml-3 mt-1 shadow-sm">
                <User className="w-5 h-5 text-indigo-600" />
              </div>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
             <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center mr-3 mt-1 shadow-sm">
              <CoronaMark className="w-5 h-5 text-slate-600 animate-pulse" />
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-4 rounded-tl-none shadow-sm flex items-center">
              <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} className="h-4" />
      </div>

      <div className="p-4 bg-white border-t border-slate-200 shrink-0">
        {messages.length === 1 && (
          <div className="flex flex-wrap gap-2 mb-4 justify-center">
            {PERSONAS[persona].samples.map((sample, i) => (
              <button
                key={i}
                onClick={() => setInput(sample)}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-600 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-colors"
              >
                {sample}
              </button>
            ))}
          </div>
        )}
        {unreleasedWarning && (
          <div className="mb-3 px-3 py-2 bg-amber-50 border border-amber-200 rounded flex items-center text-xs text-amber-800">
            <InfoIcon text="This answer is constrained by your released courseware." className="w-4 h-4 mr-2 shrink-0 text-amber-600" />
            <span>{unreleasedWarning}</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
            placeholder={`Ask ${PERSONAS[persona].title}...`}
            className="w-full pl-5 pr-14 py-3.5 bg-slate-50 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 disabled:opacity-50 transition-shadow text-[15px]"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-2 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-indigo-600 transition-colors shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
