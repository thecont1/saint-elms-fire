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

export function checkArtifactQuota(generatedToday: number, cap = ARTIFACTS_PER_DAY): void {
  if (generatedToday >= cap) {
    throw new ArtifactQuotaError(`Daily artifact generation limit reached (${cap}/day)`);
  }
}
