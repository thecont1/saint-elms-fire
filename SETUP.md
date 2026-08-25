# Saint Elms Fire — Genkit + Firestore wiring

## Files

| Path | Purpose |
| --- | --- |
| `src/ai/genkit.ts` | Genkit instance, `googleAI` plugin, default model `gemini-3.7-flash` |
| `src/lib/firestore.ts` | Firestore client (ADC / service account), `db` export |
| `src/ai/dev.ts` | Entry point for the Genkit dev UI; production flows only |
| `scripts/smoke-test.ts` | Verifies Gemini + Firestore are live |
| `.env.example` | Config template — copy to `.env` (gitignored) |

## Install

```bash
bun add genkit @genkit-ai/google-genai @google-cloud/firestore
bun add -d genkit-cli
```

Verified current versions: `genkit@1.41.0`, `@genkit-ai/google-genai@1.41.0`,
`@google-cloud/firestore@9.0.0`.

Note the plugin package is `@genkit-ai/google-genai`. The older
`@genkit-ai/googleai` (last at 1.28.0) is the superseded name.

## Verify

```bash
bun run scripts/smoke-test.ts
```

Expected:

```
gemini     : GEMINI OK
firestore  : write+read ok (...)
firestore  : cleanup ok
```

## Genkit dev UI

```bash
bun run genkit:dev
```

The dev entrypoint intentionally registers only the six production flows used
by the application. Scaffold examples remain in source for reference but are
not presented in the Developer UI.

## Auth model

Two independent credentials — this trips people up:

- **Gemini** uses `GEMINI_API_KEY`. The Genkit `googleAI` plugin ignores ADC.
- **Firestore** uses ADC (locally, your `gcloud auth application-default login`
  session) or an attached service account in production. It ignores the API key.

For deployment, attach
`saint-elms-fire-app@saint-elms-fire.iam.gserviceaccount.com`
(role: Cloud Datastore User) rather than shipping a JSON key.

The complete Cloud Run and Secret Manager procedure is in
[`docs/PHASE3.md`](docs/PHASE3.md).

## Firestore security rules

The database was created with **Restrictive** rules: all client SDK reads and
writes are denied. Server-side access (the code above, via ADC or the service
account) bypasses rules and works fine. If the browser talks to Firestore
directly, you'll need to author rules under Firestore > Security.

## Project facts

- Project ID: `saint-elms-fire` (number `543329415341`)
- Firestore: `(default)`, Native mode, Standard edition, `asia-south1` (Mumbai)
- Model: `gemini-3.7-flash`, version `3.7-flash-08-2026`, 1,048,576 input /
  65,536 output tokens, thinking enabled
