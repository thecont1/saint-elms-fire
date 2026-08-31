// @ts-nocheck -- Bun exposes bun:test at runtime.
import { beforeEach, describe, expect, test } from 'bun:test';
import {
  CircuitBreakerRegistry,
  ModelRoutingConfigStore,
  ModelRoutingWriteSchema,
  modelsForCapability,
  routeModelCall,
  type ModelRoutingConfig,
} from './model-routing';

const bootstrap: ModelRoutingConfig = {
  primary: 'gemini-primary',
  fallback: 'sarvam-fallback',
  overrides: {},
  updatedAt: '2026-08-31T00:00:00.000Z',
  updatedBy: 'bootstrap',
};

describe('ModelRoutingWriteSchema', () => {
  test('accepts primary, fallback, and sparse capability overrides', () => {
    expect(ModelRoutingWriteSchema.parse({
      primary: 'gemini-3.7-flash',
      fallback: 'sarvam-105b-conversations',
      overrides: { chat: 'gemini-chat', embed: 'gemini-embedding-001', tts: 'gemini-tts' },
    })).toEqual({
      primary: 'gemini-3.7-flash',
      fallback: 'sarvam-105b-conversations',
      overrides: { chat: 'gemini-chat', embed: 'gemini-embedding-001', tts: 'gemini-tts' },
    });
  });

  test('rejects blank ids, unknown override keys, and client metadata', () => {
    expect(ModelRoutingWriteSchema.safeParse({ primary: '', fallback: 'x', overrides: {} }).success).toBe(false);
    expect(ModelRoutingWriteSchema.safeParse({ primary: 'x', fallback: 'y', overrides: { vision: 'z' } }).success).toBe(false);
    expect(ModelRoutingWriteSchema.safeParse({
      primary: 'x', fallback: 'y', overrides: {}, updatedBy: 'forged-admin', updatedAt: 'forged',
    }).success).toBe(false);
  });
});

describe('capability routing', () => {
  test('uses the global primary/fallback only for chat', () => {
    expect(modelsForCapability(bootstrap, 'chat')).toEqual({
      primary: 'gemini-primary', fallback: 'sarvam-fallback',
    });
  });

  test('uses an embedding-compatible default and does not fake a chat fallback', () => {
    expect(modelsForCapability(bootstrap, 'embed')).toEqual({
      primary: 'gemini-embedding-001', fallback: 'gemini-embedding-001',
    });
    expect(modelsForCapability({ ...bootstrap, overrides: { embed: 'gemini-embedding-002' } }, 'embed')).toEqual({
      primary: 'gemini-embedding-002', fallback: 'gemini-embedding-002',
    });
  });

  test('uses only real TTS adapters and reverses the relief keeper for Sarvam', () => {
    expect(modelsForCapability(bootstrap, 'tts')).toEqual({
      primary: 'gemini-2.5-flash-preview-tts', fallback: 'sarvam-tts-bulbul-v3',
    });
    expect(modelsForCapability({ ...bootstrap, overrides: { tts: 'sarvam-tts-bulbul-v3' } }, 'tts')).toEqual({
      primary: 'sarvam-tts-bulbul-v3', fallback: 'gemini-2.5-flash-preview-tts',
    });
  });
});

describe('ModelRoutingConfigStore', () => {
  test('uses env/bootstrap only until a valid Firestore config exists', async () => {
    let remote: unknown = null;
    const store = new ModelRoutingConfigStore({
      bootstrap,
      read: async () => remote,
      write: async (value) => { remote = value; },
      ttlMs: 30_000,
      now: () => 0,
    });

    expect(await store.get()).toEqual(bootstrap);
    await store.put({ primary: 'gemini-new', fallback: 'sarvam-new', overrides: { chat: 'gemini-chat' } }, 'admin-1');
    expect(await store.get()).toMatchObject({ primary: 'gemini-new', fallback: 'sarvam-new', updatedBy: 'admin-1' });
  });

  test('refreshes after 30 seconds without restart', async () => {
    let now = 0;
    let reads = 0;
    let remote: unknown = { ...bootstrap, primary: 'model-a' };
    const store = new ModelRoutingConfigStore({
      bootstrap,
      read: async () => { reads += 1; return remote; },
      write: async () => {},
      ttlMs: 30_000,
      now: () => now,
    });

    expect((await store.get()).primary).toBe('model-a');
    remote = { ...bootstrap, primary: 'model-b' };
    now = 29_999;
    expect((await store.get()).primary).toBe('model-a');
    now = 30_000;
    expect((await store.get()).primary).toBe('model-b');
    expect(reads).toBe(2);
  });

  test('retains last-known-good when Firestore becomes invalid or unavailable', async () => {
    let remote: unknown = { ...bootstrap, primary: 'known-good' };
    const store = new ModelRoutingConfigStore({
      bootstrap,
      read: async () => {
        if (remote instanceof Error) throw remote;
        return remote;
      },
      write: async () => {},
      ttlMs: 0,
      now: () => Date.now(),
    });

    expect((await store.get()).primary).toBe('known-good');
    remote = { primary: '', fallback: '' };
    expect((await store.get()).primary).toBe('known-good');
    remote = new Error('Firestore unavailable');
    expect((await store.get()).primary).toBe('known-good');
  });
});

describe('CircuitBreakerRegistry', () => {
  test('opens after consecutive 429/503, permits one half-open probe, and recovers', () => {
    let now = 1_000;
    const breakers = new CircuitBreakerRegistry({ failureThreshold: 2, cooldownMs: 120_000, now: () => now });

    expect(breakers.tryAcquire('model-a')).toBe(true);
    breakers.recordFailure('model-a', new Error('429 rate limited'));
    expect(breakers.getState('model-a').state).toBe('closed');
    breakers.recordFailure('model-a', new Error('503 unavailable'));
    expect(breakers.getState('model-a').state).toBe('open');
    expect(breakers.tryAcquire('model-a')).toBe(false);

    now += 120_000;
    expect(breakers.tryAcquire('model-a')).toBe(true);
    expect(breakers.getState('model-a').state).toBe('half-open');
    expect(breakers.tryAcquire('model-a')).toBe(false);

    breakers.recordSuccess('model-a');
    expect(breakers.getState('model-a')).toMatchObject({ state: 'closed', consecutiveFailures: 0 });
    expect(breakers.tryAcquire('model-a')).toBe(true);
  });

  test('does not open for schema, authentication, or other non-429/503 failures', () => {
    const breakers = new CircuitBreakerRegistry({ failureThreshold: 1, cooldownMs: 120_000, now: () => 0 });
    breakers.recordFailure('model-a', new Error('schema invalid'));
    breakers.recordFailure('model-a', new Error('401 unauthenticated'));
    expect(breakers.getState('model-a').state).toBe('closed');
  });

  test('does not classify schema-invalid model output as provider unavailability', () => {
    const breakers = new CircuitBreakerRegistry({ failureThreshold: 1, cooldownMs: 120_000, now: () => 0 });
    breakers.recordFailure('model-a', new Error('Model returned schema-invalid output'));
    expect(breakers.getState('model-a').state).toBe('closed');
  });
});

describe('routeModelCall', () => {
  test('primary 429 opens breaker, fallback serves, and servedBy is exact', async () => {
    const breakers = new CircuitBreakerRegistry({ failureThreshold: 1, cooldownMs: 120_000, now: () => 0 });
    const calls: string[] = [];
    const result = await routeModelCall({
      primary: 'gemini-primary',
      fallback: 'sarvam-fallback',
      maxRetries: 0,
      breakers,
      call: async (model) => {
        calls.push(model);
        if (model === 'gemini-primary') throw new Error('429 RESOURCE_EXHAUSTED');
        return 'served';
      },
      sleep: async () => {},
      random: () => 0,
    });

    expect(result.value).toBe('served');
    expect(result.servedBy).toEqual({ model: 'sarvam-fallback', role: 'fallback', attemptCount: 2 });
    expect(calls).toEqual(['gemini-primary', 'sarvam-fallback']);
    expect(breakers.getState('gemini-primary').state).toBe('open');
  });

  test('bounds retry to at most two retries and counts attempts across fallback', async () => {
    const attempts: Record<string, number> = {};
    const result = await routeModelCall({
      primary: 'primary', fallback: 'fallback', maxRetries: 2,
      breakers: new CircuitBreakerRegistry({ failureThreshold: 99, cooldownMs: 120_000, now: () => 0 }),
      call: async (model) => {
        attempts[model] = (attempts[model] ?? 0) + 1;
        if (model === 'primary') throw new Error('503 unavailable');
        return 'ok';
      },
      sleep: async () => {}, random: () => 0,
    });
    expect(attempts).toEqual({ primary: 3, fallback: 1 });
    expect(result.servedBy.attemptCount).toBe(4);
  });

  test('skips an open primary and reports only the actual fallback attempt', async () => {
    const breakers = new CircuitBreakerRegistry({ failureThreshold: 1, cooldownMs: 120_000, now: () => 0 });
    breakers.recordFailure('primary', new Error('503'));
    const called: string[] = [];
    const result = await routeModelCall({
      primary: 'primary', fallback: 'fallback', maxRetries: 2, breakers,
      call: async (model) => { called.push(model); return 'ok'; },
      sleep: async () => {}, random: () => 0,
    });
    expect(called).toEqual(['fallback']);
    expect(result.servedBy).toEqual({ model: 'fallback', role: 'fallback', attemptCount: 1 });
  });
});
