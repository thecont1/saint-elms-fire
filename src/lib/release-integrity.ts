import type {
  IngestionErrorCategory,
  IngestionStage,
  IngestionStageStatus,
  IngestionStepRecord,
  ReleaseEvent,
} from './types';

export const INGESTION_STAGES: readonly IngestionStage[] = [
  'parsing',
  'chunking',
  'embedding',
  'vector_write',
  'graph_write',
];

export interface BuildPendingReleaseInput {
  id: string;
  courseId: string;
  moduleId: string;
  lessonId?: string;
  studentId: string;
  cohortId?: string;
  targetLessonIds: string[];
  requestedAt: string;
}

/**
 * Build a new pending release event with initialized ingestion steps.
 * @param input Release configuration including target lessons and identifiers.
 * @returns A new ReleaseEvent with pending status and initialized steps.
 * @throws Error if no target lessons are provided.
 */
export function buildPendingRelease(input: BuildPendingReleaseInput): ReleaseEvent {
  const targetLessonIds = [...new Set(input.targetLessonIds.filter(Boolean))];
  if (targetLessonIds.length === 0) throw new Error('At least one target lesson is required');
  const steps: IngestionStepRecord[] = targetLessonIds.flatMap((lessonId) =>
    INGESTION_STAGES.map((stage) => ({ lessonId, stage, status: 'pending' as const }))
  );
  return {
    id: input.id,
    courseId: input.courseId,
    moduleId: input.moduleId,
    lessonId: input.lessonId,
    studentId: input.studentId,
    cohortId: input.cohortId,
    targetLessonIds,
    status: 'pending',
    overallStatus: 'pending',
    steps,
    requestedAt: input.requestedAt,
    lastAttemptAt: input.requestedAt,
    attemptCount: 1,
    releasedAt: input.requestedAt,
  };
}

/**
 * Check if a release event is from the legacy format (pre-ingestion pipeline).
 * @param release Release event to check.
 * @returns True if the release is a legacy release without ingestion tracking.
 */
export function isLegacyRelease(
  release: Pick<ReleaseEvent, 'status' | 'overallStatus' | 'steps'>
): boolean {
  return release.status === 'released' && release.overallStatus === undefined && release.steps === undefined;
}

/**
 * Check if all ingestion steps for all target lessons are complete.
 * @param release Release event with steps and target lessons.
 * @returns True if every lesson has completed all ingestion stages.
 */
export function releaseHasAllStepsComplete(
  release: Pick<ReleaseEvent, 'steps' | 'targetLessonIds'>
): boolean {
  if (!release.steps?.length) return false;
  const targets = release.targetLessonIds?.length
    ? release.targetLessonIds
    : [...new Set(release.steps.map((step) => step.lessonId))];
  if (targets.length === 0) return false;
  return targets.every((lessonId) =>
    INGESTION_STAGES.every((stage) =>
      release.steps!.some((step) => step.lessonId === lessonId && step.stage === stage && step.status === 'complete')
    )
  );
}

/**
 * Mark a release as completed after all ingestion steps succeed.
 * @param release Release event to finalize.
 * @param completedAt ISO timestamp of completion.
 * @returns Updated release event with released status.
 * @throws Error if not all ingestion steps are complete.
 */
export function completeRelease(release: ReleaseEvent, completedAt: string): ReleaseEvent {
  if (!releaseHasAllStepsComplete(release)) {
    throw new Error('Release ingestion is not complete');
  }
  return {
    ...release,
    status: 'released',
    overallStatus: 'released',
    failureCategory: undefined,
    releasedAt: completedAt,
  };
}

/**
 * Mark a release as failed with a specific error category.
 * @param release Release event to mark as failed.
 * @param category Categorization of the failure cause.
 * @returns Updated release event with failed status.
 */
export function failRelease(
  release: ReleaseEvent,
  category: IngestionErrorCategory,
): ReleaseEvent {
  return {
    ...release,
    status: 'failed',
    overallStatus: 'failed',
    failureCategory: category,
  };
}

/**
 * Determine if a release should be visible to students.
 * A release is visible if it's released, timestamp has passed, and all steps are complete.
 * Legacy releases without ingestion tracking are always visible.
 * @param release Release event to check.
 * @param now Current date for comparison (defaults to now).
 * @returns True if the release should be visible to students.
 */
export function isReleaseVisible(release: ReleaseEvent, now = new Date()): boolean {
  const releasedAt = Date.parse(release.releasedAt);
  if (!Number.isFinite(releasedAt) || releasedAt > now.getTime()) return false;
  if (isLegacyRelease(release)) return true;
  return release.status === 'released'
    && release.overallStatus === 'released'
    && releaseHasAllStepsComplete(release);
}

/**
 * Find the current ingestion step that needs attention.
 * @param release Release event with ingestion steps.
 * @returns The first in-progress, failed, or pending step, or undefined if all complete.
 */
function currentStep(release: ReleaseEvent): IngestionStepRecord | undefined {
  return release.steps?.find((step) => step.status === 'in_progress')
    ?? release.steps?.find((step) => step.status === 'failed')
    ?? release.steps?.find((step) => step.status === 'pending');
}

export interface ReleaseDisplayState {
  tone: 'grey' | 'blue' | 'green' | 'red';
  label: string;
  detail?: string;
  stage?: IngestionStage;
  status?: IngestionStageStatus;
}

/**
 * Compute UI display state for a release based on its current status and steps.
 * @param release Release event to analyze.
 * @returns Display state with tone, label, and optional details for rendering.
 */
export function getReleaseDisplayState(release: ReleaseEvent): ReleaseDisplayState {
  if (isLegacyRelease(release)) return { tone: 'green', label: 'Synced (legacy)' };
  if (release.overallStatus === 'released' && releaseHasAllStepsComplete(release)) {
    return { tone: 'green', label: 'Released / Synced' };
  }
  const step = currentStep(release);
  if (release.overallStatus === 'failed' || step?.status === 'failed') {
    return {
      tone: 'red',
      label: 'Failed',
      stage: step?.stage,
      status: step?.status,
      detail: step ? `${step.stage}: ${step.error?.category ?? release.failureCategory ?? 'unknown'}` : release.failureCategory,
    };
  }
  if (step?.status === 'in_progress') {
    const progress = step.itemsTotal !== undefined
      ? ` ${step.itemsProcessed ?? 0}/${step.itemsTotal}`
      : '';
    return {
      tone: 'blue',
      label: 'In Progress',
      stage: step.stage,
      status: step.status,
      detail: `${step.stage}${progress}`,
    };
  }
  return { tone: 'grey', label: 'Pending', stage: step?.stage, status: step?.status };
}
