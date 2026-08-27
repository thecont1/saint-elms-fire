/**
 * Cost guardrails (Phase 6, Track C2): per-student daily generation quotas,
 * enforced server-side with bounded 429 messages.
 */

export const ARTIFACTS_PER_DAY = 12;

export class ArtifactQuotaError extends Error {
  readonly status = 429;
  constructor(message: string) {
    super(message);
    this.name = 'ArtifactQuotaError';
  }
}
