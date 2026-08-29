import { describe, expect, test } from 'bun:test';
import { withDeadline } from './deadline';

describe('withDeadline', () => {
  test('resolves when work completes before the deadline', async () => {
    await expect(withDeadline(Promise.resolve('ok'), 50, 'work')).resolves.toBe('ok');
  });

  test('propagates work rejection before the deadline', async () => {
    await expect(
      withDeadline(Promise.reject(new Error('upstream 503')), 50, 'work'),
    ).rejects.toThrow('upstream 503');
  });

  test('rejects with bounded message when work outlives the deadline', async () => {
    const slow = new Promise((resolve) => setTimeout(() => resolve('late'), 200));
    await expect(withDeadline(slow, 20, 'format generation')).rejects.toThrow(
      'format generation timed out after 20ms',
    );
  });

  test('slow rejection after the deadline does not leak as unhandled', async () => {
    const slow = new Promise((_, reject) => setTimeout(() => reject(new Error('late boom')), 30));
    await expect(withDeadline(slow, 10, 'work')).rejects.toThrow('timed out');
    await new Promise((resolve) => setTimeout(resolve, 50));
  });

  test('aborts passed signal when deadline expires', async () => {
    let aborted = false;
    const slowFn = (signal: AbortSignal) => new Promise((resolve, reject) => {
      signal.addEventListener('abort', () => {
        aborted = true;
        reject(new Error('aborted from signal'));
      });
      setTimeout(() => {
        if (!aborted) resolve('late');
      }, 50);
    });
    
    await expect(withDeadline(slowFn, 10, 'cancellable work')).rejects.toThrow('cancellable work timed out after 10ms');
    expect(aborted).toBe(true);
  });
});
