'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { Activity, AlertCircle, CheckCircle2, Gauge, Loader2, Play, Save } from 'lucide-react';

interface RoutingConfig {
  primary: string;
  fallback: string;
  overrides: { chat?: string; embed?: string; tts?: string };
  updatedAt: string;
  updatedBy: string;
}

interface BreakerState {
  model: string;
  state: 'closed' | 'open' | 'half-open';
  consecutiveFailures: number;
  retryAt?: number;
}

interface RecentRequest {
  id: string;
  completedAt: string;
  latencyMs: number;
  status: 'served' | 'failed';
  servedBy?: { model: string; role: 'primary' | 'fallback'; attemptCount: number };
  error?: string;
}

const BUILT_INS = [
  'gemini-3.7-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash',
  'sarvam-105b-conversations',
  'gemini-embedding-001',
  'gemini-2.5-flash-preview-tts',
  'sarvam-tts-bulbul-v3',
];

function ModelField({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-1.5 text-xs font-semibold text-marine-700">
      {label}
      <input
        list="model-helm-models"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 rounded-lg border border-beacon-200 bg-white px-3 text-sm text-marine-900 focus:border-beacon-500 focus:outline-none focus:ring-2 focus:ring-beacon-200"
      />
    </label>
  );
}

export function ModelHelmPanel() {
  const [config, setConfig] = useState<RoutingConfig | null>(null);
  const [breakers, setBreakers] = useState<BreakerState[]>([]);
  const [requests, setRequests] = useState<RecentRequest[]>([]);
  const [saving, setSaving] = useState(false);
  const [testing, setTesting] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<Record<string, { ok: boolean; latencyMs?: number; error?: string }>>({});
  const [notice, setNotice] = useState<string | null>(null);

  const load = async () => {
    const [routingResponse, activityResponse] = await Promise.all([
      fetch('/api/model-routing', { cache: 'no-store' }),
      fetch('/api/model-activity?limit=20', { cache: 'no-store' }),
    ]);
    if (!routingResponse.ok) throw new Error(`Routing state unavailable (${routingResponse.status})`);
    const routing = await routingResponse.json();
    const activity = activityResponse.ok ? await activityResponse.json() : {};
    setConfig(routing.config);
    setBreakers(routing.breakers ?? []);
    setRequests(activity.recentRequests ?? []);
  };

  useEffect(() => {
    void load().catch((error) => setNotice(error instanceof Error ? error.message : 'Model Helm unavailable'));
  }, []);

  const modelIds = useMemo(() => {
    const configured = config ? [config.primary, config.fallback, ...Object.values(config.overrides)] : [];
    return [...new Set([...BUILT_INS, ...configured.filter((value): value is string => Boolean(value))])];
  }, [config]);

  if (!config) {
    return (
      <section className="chart-card p-5" aria-busy="true">
        <div className="flex items-center gap-2 text-sm text-marine-600"><Loader2 className="h-4 w-4 animate-spin" /> Loading Model Helm…</div>
        {notice && <p className="mt-2 text-xs text-rose-700">{notice}</p>}
      </section>
    );
  }

  const patchOverride = (key: 'chat' | 'embed' | 'tts', value: string) => {
    setConfig((current) => current ? {
      ...current,
      overrides: { ...current.overrides, [key]: value.trim() || undefined },
    } : current);
  };

  const save = async () => {
    setSaving(true);
    setNotice(null);
    try {
      const response = await fetch('/api/model-routing', {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ primary: config.primary, fallback: config.fallback, overrides: config.overrides }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || `Save failed (${response.status})`);
      setConfig(data.config);
      setBreakers(data.breakers ?? []);
      setNotice('Runtime routing updated; new calls use it immediately.');
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const testFire = async (model: string) => {
    setTesting(model);
    try {
      const response = await fetch('/api/model-routing/test', {
        method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ model }),
      });
      const data = await response.json();
      setTestResults((current) => ({ ...current, [model]: { ok: response.ok, latencyMs: data.latencyMs, error: data.error } }));
      await load();
    } catch (error) {
      setTestResults((current) => ({ ...current, [model]: { ok: false, error: error instanceof Error ? error.message : 'Test failed' } }));
    } finally {
      setTesting(null);
    }
  };

  return (
    <section className="chart-card overflow-hidden" aria-labelledby="model-helm-title">
      <div className="border-b border-beacon-100 bg-beacon-50/60 p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="chart-annotation text-beacon-700">Runtime control plane</p>
            <h2 id="model-helm-title" className="font-display text-xl font-semibold text-marine-900">Model Helm</h2>
            <p className="mt-1 text-xs text-marine-500">30s read-through cache · 120s breaker cool-down · two bounded retries</p>
          </div>
          <button onClick={save} disabled={saving} className="min-h-11 rounded-full bg-beacon-600 px-4 text-xs font-bold text-white disabled:opacity-50">
            {saving ? <Loader2 className="mr-2 inline h-4 w-4 animate-spin" /> : <Save className="mr-2 inline h-4 w-4" />}Save routing
          </button>
        </div>
        {notice && <p role="status" className="mt-3 text-xs font-medium text-marine-700">{notice}</p>}
      </div>

      <datalist id="model-helm-models">{modelIds.map((model) => <option key={model} value={model} />)}</datalist>
      <div className="grid gap-5 p-5 xl:grid-cols-2">
        <div className="grid gap-3 sm:grid-cols-2">
          <ModelField label="Primary model" value={config.primary} onChange={(primary) => setConfig({ ...config, primary })} />
          <ModelField label="Fallback model" value={config.fallback} onChange={(fallback) => setConfig({ ...config, fallback })} />
          <ModelField label="Chat override (optional)" value={config.overrides.chat ?? ''} onChange={(value) => patchOverride('chat', value)} />
          <ModelField label="Embedding override (optional)" value={config.overrides.embed ?? ''} onChange={(value) => patchOverride('embed', value)} />
          <ModelField label="TTS override (optional)" value={config.overrides.tts ?? ''} onChange={(value) => patchOverride('tts', value)} />
          <div className="self-end text-[11px] text-marine-500">Updated {new Date(config.updatedAt).toLocaleString()} by {config.updatedBy}</div>
        </div>

        <div>
          <h3 className="mb-2 flex items-center gap-2 text-xs font-bold text-marine-800"><Gauge className="h-4 w-4 text-beacon-600" /> Test-fire & breakers</h3>
          <ul className="space-y-2">
            {[...new Set([config.primary, config.fallback, ...Object.values(config.overrides).filter((value): value is string => Boolean(value))])].map((model) => {
              const breaker = breakers.find((item) => item.model === model);
              const result = testResults[model];
              return (
                <li key={model} className="flex min-h-11 items-center gap-2 rounded-lg border border-beacon-100 px-3 text-xs">
                  <span className={`h-2.5 w-2.5 rounded-full ${result?.ok ? 'bg-emerald-500' : result && !result.ok ? 'bg-rose-500' : breaker?.state === 'open' ? 'bg-rose-500' : breaker?.state === 'half-open' ? 'bg-amber-500' : 'bg-slate-300'}`} aria-hidden="true" />
                  <span className="min-w-0 flex-1 truncate font-mono">{model}</span>
                  <span className="text-marine-500">{breaker?.state ?? 'closed'}{result?.latencyMs != null ? ` · ${result.latencyMs}ms` : ''}</span>
                  <button onClick={() => testFire(model)} disabled={testing === model} aria-label={`Test ${model}`} className="min-h-11 min-w-11 rounded-full border border-beacon-200 p-2 text-beacon-700">
                    {testing === model ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-beacon-100 p-5">
        <h3 className="mb-2 flex items-center gap-2 text-xs font-bold text-marine-800"><Activity className="h-4 w-4 text-beacon-600" /> Recent requests</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[620px] text-left text-xs">
            <thead className="text-marine-500"><tr><th className="py-2">Time</th><th>Model</th><th>Role</th><th>Attempts</th><th>Latency</th><th>Status</th></tr></thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-t border-beacon-100">
                  <td className="py-2">{new Date(request.completedAt).toLocaleTimeString()}</td>
                  <td className="font-mono">{request.servedBy?.model ?? '—'}</td><td>{request.servedBy?.role ?? '—'}</td><td>{request.servedBy?.attemptCount ?? '—'}</td><td>{request.latencyMs}ms</td>
                  <td>{request.status === 'served' ? <span className="text-emerald-700"><CheckCircle2 className="mr-1 inline h-3.5 w-3.5" />served</span> : <span title={request.error} className="text-rose-700"><AlertCircle className="mr-1 inline h-3.5 w-3.5" />failed</span>}</td>
                </tr>
              ))}
              {requests.length === 0 && <tr><td colSpan={6} className="py-6 text-center text-marine-500">No routed requests in this process yet.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
