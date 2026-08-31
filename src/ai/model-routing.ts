import { z } from 'zod';
import type { ModelRole, ServedBy } from '@/lib/ai-contracts';
export type { ModelRole, ServedBy } from '@/lib/ai-contracts';

export const MODEL_CAPABILITIES = ['chat', 'embed', 'tts'] as const;
export type ModelCapability = (typeof MODEL_CAPABILITIES)[number];


const ModelIdSchema = z.string().trim().min(1).max(200);

export const SUPPORTED_TTS_MODEL_IDS = [
  'gemini-2.5-flash-preview-tts',
  'sarvam-tts-bulbul-v3',
  'gemini-tts',
  'sarvam-tts',
] as const;
export const TtsModelIdSchema = z.enum(SUPPORTED_TTS_MODEL_IDS);

export const ModelRoutingWriteSchema = z.object({
  primary: ModelIdSchema,
  fallback: ModelIdSchema,
  overrides: z.object({
    chat: ModelIdSchema.optional(),
    embed: ModelIdSchema.optional(),
    tts: TtsModelIdSchema.optional(),
  }).strict(),
}).strict();

export const ModelRoutingConfigSchema = ModelRoutingWriteSchema.extend({
  updatedAt: z.string().datetime(),
  updatedBy: z.string().trim().min(1).max(200),
}).strict();

export type ModelRoutingWrite = z.infer<typeof ModelRoutingWriteSchema>;
export type ModelRoutingConfig = z.infer<typeof ModelRoutingConfigSchema>;


export function bootstrapModelRoutingConfig(env: NodeJS.ProcessEnv = process.env): ModelRoutingConfig {
  const overrides = {
    ...(env.MODEL_ROUTING_CHAT?.trim() ? { chat: env.MODEL_ROUTING_CHAT.trim() } : {}),
    ...(env.MODEL_ROUTING_EMBED?.trim() ? { embed: env.MODEL_ROUTING_EMBED.trim() } : {}),
    ...(env.MODEL_ROUTING_TTS?.trim() ? { tts: env.MODEL_ROUTING_TTS.trim() } : {}),
  };
  return ModelRoutingConfigSchema.parse({
    primary: env.MODEL_ROUTING_PRIMARY?.trim() || 'gemini-3.7-flash',
    fallback: env.MODEL_ROUTING_FALLBACK?.trim() || 'sarvam-105b-conversations',
    overrides,
    updatedAt: '1970-01-01T00:00:00.000Z',
    updatedBy: 'environment-bootstrap',
  });
}

export const DEFAULT_EMBED_MODEL = 'gemini-embedding-001';
export const DEFAULT_GEMINI_TTS_MODEL = 'gemini-2.5-flash-preview-tts';
export const DEFAULT_SARVAM_TTS_MODEL = 'sarvam-tts-bulbul-v3';

export function modelsForCapability(
  config: ModelRoutingConfig,
  capability: ModelCapability,
): { primary: string; fallback: string } {
  if (capability === 'chat') {
    return {
      primary: config.overrides.chat || config.primary,
      fallback: config.fallback,
    };
  }
  if (capability === 'embed') {
    const model = config.overrides.embed || DEFAULT_EMBED_MODEL;
    return { primary: model, fallback: model };
  }
  const primary = config.overrides.tts || DEFAULT_GEMINI_TTS_MODEL;
  return {
    primary,
    fallback: primary.toLowerCase().startsWith('sarvam-')
      ? DEFAULT_GEMINI_TTS_MODEL
      : DEFAULT_SARVAM_TTS_MODEL,
  };
}

export interface ModelRoutingPersistence {
  read(): Promise<unknown | null>;
  write(value: ModelRoutingConfig): Promise<void>;
}

export interface ModelRoutingConfigStoreOptions extends ModelRoutingPersistence {
  bootstrap: ModelRoutingConfig;
  ttlMs?: number;
  now?: () => number;
}

/** Read-through runtime config with a retained last-known-good value. */
export class ModelRoutingConfigStore {
  private readonly readRemote: ModelRoutingPersistence['read'];
  private readonly writeRemote: ModelRoutingPersistence['write'];
  private readonly bootstrap: ModelRoutingConfig;
  private readonly ttlMs: number;
  private readonly now: () => number;
  private lastKnownGood: ModelRoutingConfig;
  private cachedAt = 0;
  private loaded = false;
  private inFlight?: Promise<ModelRoutingConfig>;

  constructor(options: ModelRoutingConfigStoreOptions) {
    this.readRemote = options.read;
    this.writeRemote = options.write;
    this.bootstrap = ModelRoutingConfigSchema.parse(options.bootstrap);
    this.lastKnownGood = this.bootstrap;
    this.ttlMs = options.ttlMs ?? 30_000;
    this.now = options.now ?? Date.now;
  }

  async get(options: { force?: boolean } = {}): Promise<ModelRoutingConfig> {
    if (!options.force && this.loaded && this.now() - this.cachedAt < this.ttlMs) {
      return this.lastKnownGood;
    }
    if (this.inFlight) return this.inFlight;

    this.inFlight = (async () => {
      try {
        const remote = await this.readRemote();
        if (remote !== null && remote !== undefined) {
          const parsed = ModelRoutingConfigSchema.safeParse(remote);
          if (parsed.success) this.lastKnownGood = parsed.data;
          else console.warn('model_routing_invalid_remote_retaining_lkg');
        }
      } catch (error) {
        console.warn('model_routing_read_failed_retaining_lkg', {
          reason: error instanceof Error ? error.name : 'unknown',
        });
      } finally {
        this.loaded = true;
        this.cachedAt = this.now();
      }
      return this.lastKnownGood;
    })();

    try {
      return await this.inFlight;
    } finally {
      this.inFlight = undefined;
    }
  }

  async put(input: ModelRoutingWrite, updatedBy: string): Promise<ModelRoutingConfig> {
    const write = ModelRoutingWriteSchema.parse(input);
    const config = ModelRoutingConfigSchema.parse({
      ...write,
      updatedAt: new Date(this.now()).toISOString(),
      updatedBy,
    });
    // Do not update memory until the durable write succeeds.
    await this.writeRemote(config);
    this.lastKnownGood = config;
    this.loaded = true;
    this.cachedAt = this.now();
    return config;
  }

  peekLastKnownGood(): ModelRoutingConfig {
    return this.lastKnownGood;
  }

  invalidate(): void {
    this.loaded = false;
  }
}

export type BreakerPhase = 'closed' | 'open' | 'half-open';
export interface BreakerSnapshot {
  model: string;
  state: BreakerPhase;
  consecutiveFailures: number;
  openedAt?: number;
  retryAt?: number;
  probeInFlight: boolean;
}

interface MutableBreaker {
  state: BreakerPhase;
  consecutiveFailures: number;
  openedAt?: number;
  probeInFlight: boolean;
}

export interface CircuitBreakerOptions {
  failureThreshold?: number;
  cooldownMs?: number;
  now?: () => number;
}

export function isBreakerFailure(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error);
  return /(?:^|\D)(?:429|503)(?:\D|$)|RESOURCE_EXHAUSTED|UNAVAILABLE|high demand|overloaded/i.test(message);
}

export function isSchemaInvalidOutput(error: unknown): boolean {
  return error instanceof Error && error.message === 'Model returned schema-invalid output';
}

export class CircuitBreakerRegistry {
  private readonly failureThreshold: number;
  private readonly cooldownMs: number;
  private readonly now: () => number;
  private readonly states = new Map<string, MutableBreaker>();

  constructor(options: CircuitBreakerOptions = {}) {
    this.failureThreshold = Math.max(1, options.failureThreshold ?? 2);
    this.cooldownMs = Math.max(1, options.cooldownMs ?? 120_000);
    this.now = options.now ?? Date.now;
  }

  private mutable(model: string): MutableBreaker {
    let state = this.states.get(model);
    if (!state) {
      state = { state: 'closed', consecutiveFailures: 0, probeInFlight: false };
      this.states.set(model, state);
    }
    return state;
  }

  tryAcquire(model: string): boolean {
    const state = this.mutable(model);
    if (state.state === 'closed') return true;
    if (state.state === 'half-open') return false;
    if (state.openedAt === undefined || this.now() - state.openedAt < this.cooldownMs) return false;
    state.state = 'half-open';
    state.probeInFlight = true;
    return true;
  }

  recordSuccess(model: string): void {
    const state = this.mutable(model);
    state.state = 'closed';
    state.consecutiveFailures = 0;
    state.openedAt = undefined;
    state.probeInFlight = false;
  }

  recordFailure(model: string, error: unknown): void {
    const state = this.mutable(model);
    if (!isBreakerFailure(error)) {
      // A different outcome interrupts a run of consecutive 429/503 failures.
      state.consecutiveFailures = 0;
      if (state.state === 'half-open') {
        state.state = 'closed';
        state.probeInFlight = false;
        state.openedAt = undefined;
      }
      return;
    }

    state.consecutiveFailures += 1;
    if (state.state === 'half-open' || state.consecutiveFailures >= this.failureThreshold) {
      state.state = 'open';
      state.openedAt = this.now();
      state.probeInFlight = false;
    }
  }

  getState(model: string): BreakerSnapshot {
    const state = this.mutable(model);
    return {
      model,
      state: state.state,
      consecutiveFailures: state.consecutiveFailures,
      openedAt: state.openedAt,
      retryAt: state.openedAt === undefined ? undefined : state.openedAt + this.cooldownMs,
      probeInFlight: state.probeInFlight,
    };
  }

  listStates(models: Iterable<string> = this.states.keys()): BreakerSnapshot[] {
    return [...new Set(models)].map((model) => this.getState(model));
  }

  reset(): void {
    this.states.clear();
  }
}

export interface RouteModelCallOptions<T> {
  primary: string;
  fallback: string;
  call(model: string, context: { role: ModelRole; attempt: number }): Promise<T>;
  breakers?: CircuitBreakerRegistry;
  maxRetries?: number;
  sleep?: (ms: number) => Promise<void>;
  random?: () => number;
  baseDelayMs?: number;
}

export interface RoutedValue<T> {
  value: T;
  servedBy: ServedBy;
}

/** Routes one provider operation with de-duplicated models and bounded retries. */
export async function routeModelCall<T>(options: RouteModelCallOptions<T>): Promise<RoutedValue<T>> {
  const breakers = options.breakers ?? globalCircuitBreakers;
  const maxRetries = Math.min(2, Math.max(0, options.maxRetries ?? 2));
  const sleep = options.sleep ?? ((ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms)));
  const random = options.random ?? Math.random;
  const baseDelayMs = Math.max(0, options.baseDelayMs ?? 100);
  const candidates: Array<{ model: string; role: ModelRole }> = [
    { model: options.primary, role: 'primary' },
    ...(options.fallback !== options.primary ? [{ model: options.fallback, role: 'fallback' as const }] : []),
  ];
  let totalAttempts = 0;
  let lastError: unknown = new Error('No model is currently available');

  for (const candidate of candidates) {
    if (!breakers.tryAcquire(candidate.model)) continue;
    const halfOpenProbe = breakers.getState(candidate.model).state === 'half-open';
    const allowedAttempts = halfOpenProbe ? 1 : maxRetries + 1;

    for (let attempt = 1; attempt <= allowedAttempts; attempt++) {
      totalAttempts += 1;
      try {
        const value = await options.call(candidate.model, { role: candidate.role, attempt });
        breakers.recordSuccess(candidate.model);
        return {
          value,
          servedBy: { model: candidate.model, role: candidate.role, attemptCount: totalAttempts },
        };
      } catch (error) {
        lastError = error;
        breakers.recordFailure(candidate.model, error);
        if (isSchemaInvalidOutput(error)) break;
        if (!isBreakerFailure(error)) throw error;
        if (breakers.getState(candidate.model).state === 'open') break;
        if (attempt < allowedAttempts) {
          const jitter = 0.5 + Math.max(0, Math.min(1, random()));
          await sleep(Math.round(baseDelayMs * (2 ** (attempt - 1)) * jitter));
        }
      }
    }
  }

  throw lastError;
}

export const globalCircuitBreakers = new CircuitBreakerRegistry();
