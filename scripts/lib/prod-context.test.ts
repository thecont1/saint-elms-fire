import { describe, expect, test, beforeEach, afterEach } from 'bun:test';
import {
  parseBaseUrlArg,
  resolveProdContext,
  assertApprovedUrl,
  DEFAULT_SERVICE_URL,
} from './prod-context';

describe('prod-context security & URL validation', () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env = { ...originalEnv };
    delete process.env.SERVICE_URL;
    delete process.env.IDENTITY_TOKEN;
    delete process.env.AUTH_PROXY_SECRET;
  });

  afterEach(() => {
    process.env = { ...originalEnv };
  });

  describe('assertApprovedUrl', () => {
    test('accepts approved https origin', () => {
      expect(assertApprovedUrl(DEFAULT_SERVICE_URL)).toBe(DEFAULT_SERVICE_URL);
    });

    test('rejects non-https protocol', () => {
      expect(() =>
        assertApprovedUrl('http://saint-elms-fire-ldyuznepoq-el.a.run.app'),
      ).toThrow(/Refusing to send credentials to non-approved origin/);
    });

    test('rejects unapproved origin', () => {
      expect(() =>
        assertApprovedUrl('https://attacker.invalid'),
      ).toThrow(/Refusing to send credentials to non-approved origin: https:\/\/attacker\.invalid/);
    });

    test('rejects malformed URLs', () => {
      expect(() => assertApprovedUrl('not-a-valid-url')).toThrow(/Invalid target URL/);
    });
  });

  describe('parseBaseUrlArg', () => {
    test('returns undefined when no positional argument is provided', () => {
      expect(parseBaseUrlArg(['--quick', '--student=chetna'])).toBeUndefined();
    });

    test('validates and returns approved positional argument', () => {
      expect(parseBaseUrlArg(['--quick', DEFAULT_SERVICE_URL])).toBe(DEFAULT_SERVICE_URL);
    });

    test('rejects unapproved positional argument', () => {
      expect(() =>
        parseBaseUrlArg(['https://attacker.invalid', '--quick']),
      ).toThrow(/Refusing to send credentials/);
    });

    test('rejects malformed positional argument', () => {
      expect(() => parseBaseUrlArg(['malformed-target', '--quick'])).toThrow(/Invalid target URL/);
    });
  });

  describe('resolveProdContext', () => {
    test('rejects unapproved SERVICE_URL before credential resolution', () => {
      process.env.SERVICE_URL = 'https://attacker.invalid';

      expect(() => resolveProdContext()).toThrow(
        /Refusing to send credentials to non-approved origin: https:\/\/attacker\.invalid/,
      );
    });

    test('rejects unapproved argvBaseUrl before credential resolution', () => {
      expect(() => resolveProdContext('https://attacker.invalid')).toThrow(
        /Refusing to send credentials to non-approved origin: https:\/\/attacker\.invalid/,
      );
    });

    test('resolves context successfully with default service URL when approved', () => {
      process.env.IDENTITY_TOKEN = 'test-token';
      process.env.AUTH_PROXY_SECRET = 'test-secret';

      const ctx = resolveProdContext();
      expect(ctx.baseUrl).toBe(DEFAULT_SERVICE_URL);
      expect(ctx.headers('student-alex', 'student')).toEqual({
        Authorization: 'Bearer test-token',
        'X-Saint-Elms-Auth-Secret': 'test-secret',
        'X-Saint-Elms-User-Id': 'student-alex',
        'X-Saint-Elms-Role': 'student',
        'Content-Type': 'application/json',
      });
      expect(ctx.invokerOnlyHeaders()).toEqual({
        Authorization: 'Bearer test-token',
        'Content-Type': 'application/json',
      });
    });

    test('resolves context successfully with explicit approved SERVICE_URL', () => {
      process.env.SERVICE_URL = `${DEFAULT_SERVICE_URL}/`;
      process.env.IDENTITY_TOKEN = 'test-token';
      process.env.AUTH_PROXY_SECRET = 'test-secret';

      const ctx = resolveProdContext();
      expect(ctx.baseUrl).toBe(DEFAULT_SERVICE_URL);
    });
  });
});
