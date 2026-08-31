'use client';

import React, { useEffect, useRef } from 'react';
import { AlertTriangle, Info, Loader2, RotateCcw, Send, User } from 'lucide-react';
import { CoronaMark } from '@/components/Navigation';
import { ServedByChip } from '@/components/ServedByChip';
import type { ChatMessage } from '@/lib/types';
import type { HearthPersonaConfig } from './hearth-personas';
import type { PersonaChatState } from './usePersonaChat';

interface PersonaChatPanelProps {
  config: HearthPersonaConfig;
  chat: PersonaChatState;
}

function MessageBubble({ msg }: { msg: ChatMessage }) {
  const isStudent = msg.sender === 'student';
  return (
    <div className={`flex ${isStudent ? 'justify-end' : 'justify-start'}`}>
      {msg.sender === 'tutor' && (
        <div className="mr-2.5 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-beacon-200 bg-beacon-50 text-beacon-600">
          <CoronaMark className="h-4 w-4" />
        </div>
      )}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isStudent
            ? 'rounded-tr-none bg-beacon-600 text-white shadow-sm'
            : 'rounded-tl-none border border-beacon-100 bg-white text-marine-800 shadow-sm'
        }`}
      >
        <div className="whitespace-pre-wrap text-[15px] leading-relaxed">{msg.content}</div>
        <div className={`mt-1.5 flex flex-wrap items-center gap-2 ${isStudent ? 'justify-end' : ''}`}>
          <span
            suppressHydrationWarning
            className={`font-mono text-[10px] ${isStudent ? 'text-white/90' : 'text-marine-600'}`}
          >
            {msg.timestamp}
          </span>
          {msg.sender === 'tutor' && <ServedByChip servedBy={msg.servedBy} />}
        </div>
        {msg.sender === 'tutor' && msg.isGrounded && (msg.groundedSources?.length ?? 0) > 0 && (
          <div className="mt-2.5 border-t border-beacon-100 pt-2.5">
            <div className="mb-1.5 flex items-center text-[10px] font-semibold uppercase tracking-[0.14em] text-beacon-700">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-beacon-500" />
              Grounded in
            </div>
            <ul className="space-y-1">
              {msg.groundedSources!.map((src, i) => (
                <li key={i} className="flex items-start text-xs text-marine-700">
                  <span className="mr-1.5 opacity-60">•</span>
                  <span className="line-clamp-1">{src.lessonTitle || src.concept}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {isStudent && (
        <div className="ml-2.5 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-beacon-100 text-beacon-700">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  );
}

function SkeletonThread() {
  return (
    <div aria-hidden="true" className="space-y-4">
      <div className="flex justify-start">
        <div className="h-7 w-7 animate-pulse rounded-full bg-beacon-100" />
        <div className="ml-2.5 h-16 w-3/5 animate-pulse rounded-2xl rounded-tl-none bg-beacon-50" />
      </div>
      <div className="flex justify-end">
        <div className="h-10 w-2/5 animate-pulse rounded-2xl rounded-tr-none bg-beacon-100" />
      </div>
      <div className="flex justify-start">
        <div className="h-7 w-7 animate-pulse rounded-full bg-beacon-100" />
        <div className="ml-2.5 h-24 w-4/5 animate-pulse rounded-2xl rounded-tl-none bg-beacon-50" />
      </div>
      <span className="sr-only">Loading conversation…</span>
    </div>
  );
}

function StormCard({
  title,
  body,
  onRetry,
  retrying,
}: {
  title: string;
  body: string;
  onRetry: () => void;
  retrying: boolean;
}) {
  return (
    <div role="alert" className="rounded-xl border border-beacon-200 bg-beacon-50 p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-beacon-600">
          <AlertTriangle className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-semibold text-marine-900">{title}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-marine-600">{body}</p>
          <button
            type="button"
            onClick={onRetry}
            disabled={retrying}
            className="mt-3 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-beacon-300 bg-white px-4 py-2 text-xs font-semibold text-beacon-700 transition-colors hover:bg-beacon-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beacon-400 disabled:opacity-60"
          >
            {retrying ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <RotateCcw className="h-3.5 w-3.5" />}
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}

export function PersonaChatPanel({ config, chat }: PersonaChatPanelProps) {
  const { Icon } = config;
  const threadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [chat.messages, chat.sending, chat.failedQuestion]);

  const isEmpty = chat.phase === 'ready' && chat.messages.length === 0;

  return (
    <div className="flex h-full flex-col bg-transparent">
      {/* Panel header — persona identity by icon + type, not hue */}
      <div className="flex shrink-0 items-center gap-3 border-b border-beacon-100 px-4 py-3 sm:px-5">
        <div className="corona-glow flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-beacon-600 text-white">
          <Icon className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-display text-base font-semibold text-marine-900">{config.voice}</h3>
          <p className="chart-annotation mt-0.5 truncate">{config.stageLine}</p>
        </div>
      </div>

      {/* Thread */}
      <div
        ref={threadRef}
        role="log"
        className="flex-1 space-y-5 overflow-y-auto bg-chart/60 px-4 py-4 sm:px-5"
        tabIndex={0}
        aria-label={`${config.voice} conversation`}
      >
        {chat.phase === 'loading' && <SkeletonThread />}

        {chat.phase === 'storm' && (
          <StormCard
            title="A storm blew the signal down."
            body="The conversation could not be fetched from the chart-room. Your scrolls are safe — try again when the weather clears."
            onRetry={() => void chat.retry()}
            retrying={false}
          />
        )}

        {isEmpty && (
          <div className="flex h-full flex-col items-center justify-center px-2 text-center">
            <div className="corona-glow flex h-12 w-12 items-center justify-center rounded-full bg-beacon-600 text-white">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-4 font-display text-lg font-semibold text-marine-900">{config.emptyTitle}</p>
            <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-marine-600">{config.emptyBody}</p>
            <div className="mt-5 flex w-full max-w-md flex-col gap-2">
              {config.samplePrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => chat.setInput(prompt)}
                  className="chart-card min-h-[44px] px-4 py-2.5 text-left text-[13px] font-medium text-marine-700 transition-colors hover:border-beacon-300 hover:text-beacon-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beacon-400"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {chat.messages.map((msg, index) => (
          <MessageBubble key={msg.id || index} msg={msg} />
        ))}

        {chat.sending && (
          <div className="flex justify-start">
            <div className="mr-2.5 mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-beacon-200 bg-beacon-50 text-beacon-600">
              <CoronaMark className="h-4 w-4 animate-pulse" />
            </div>
            <div className="flex items-center rounded-2xl rounded-tl-none border border-beacon-100 bg-white px-4 py-3 shadow-sm">
              <Loader2 className="h-4 w-4 animate-spin text-beacon-400" />
              <span className="sr-only">{config.voice} is thinking…</span>
            </div>
          </div>
        )}

        {chat.failedQuestion && !chat.sending && (
          <StormCard
            title="Lost contact with the routing layer."
            body={`"${chat.failedQuestion}" is still on the thread, unanswered. The model did not respond — retry when ready.`}
            onRetry={() => void chat.retry()}
            retrying={false}
          />
        )}
      </div>

      {/* Composer */}
      <div className="shrink-0 border-t border-beacon-100 bg-white px-4 py-3 sm:px-5">
        {chat.unreleasedWarning && (
          <div className="mb-2.5 flex items-center rounded-lg border border-beacon-200 bg-beacon-50 px-3 py-2 text-xs text-beacon-800">
            <Info className="mr-2 h-3.5 w-3.5 shrink-0 text-beacon-500" />
            <span>{chat.unreleasedWarning}</span>
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void chat.send();
          }}
          className="relative flex items-center"
        >
          <label htmlFor={`hearth-composer-${config.id}`} className="sr-only">
            Ask {config.voice}
          </label>
          <input
            id={`hearth-composer-${config.id}`}
            type="text"
            value={chat.input}
            onChange={(e) => chat.setInput(e.target.value)}
            disabled={chat.sending || chat.phase !== 'ready'}
            placeholder={`Ask ${config.voice}…`}
            autoComplete="off"
            className="w-full rounded-full border border-beacon-200 bg-chart/70 py-3 pl-5 pr-14 text-[15px] text-marine-900 transition-shadow placeholder:text-marine-400 focus:border-beacon-400 focus:outline-none focus:ring-2 focus:ring-beacon-300/50 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={chat.sending || chat.phase !== 'ready' || !chat.input.trim()}
            aria-label={`Send to ${config.voice}`}
            className="absolute right-1.5 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-beacon-600 text-white shadow-sm transition-colors hover:bg-beacon-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beacon-400 focus-visible:ring-offset-1 disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
