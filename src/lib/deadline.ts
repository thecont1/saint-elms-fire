/**
 * Bounded-deadline helper for external calls (Gemini generation, GCS writes,
 * TTS synthesis). Phase 7, Track A1: no generation path may hang unbounded.
 */
export function withDeadline<T>(work: Promise<T>, ms: number, label: string): Promise<T> {
  let handle: ReturnType<typeof setTimeout> | undefined;
  // Observe the slow path so a rejection arriving after the deadline does not
  // leak as an unhandled rejection.
  void work.catch(() => {});
  return Promise.race([
    work,
    new Promise<T>((_, reject) => {
      handle = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
    }),
  ]).finally(() => {
    if (handle !== undefined) clearTimeout(handle);
  });
}
