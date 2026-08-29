/**
 * Runs work with a maximum completion time.
 *
 * @param work - The operation to complete within the deadline
 * @param ms - The maximum duration in milliseconds
 * @param label - The label included in the timeout error
 * @returns The value produced by `work` when it completes before the deadline
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
