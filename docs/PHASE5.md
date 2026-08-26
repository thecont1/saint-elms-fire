# Phase 5: Deployment and Submission Readiness — Operational Runbook

This document is the operational companion to the Phase 5 plan. It covers the live Cloud Run deployment, identity boundary configuration, demo seeding, and buildathon submission status.

## Deployment summary

| Setting | Value |
| --- | --- |
| Platform | Google Cloud Run (private) |
| Region | `asia-south1` |
| Service name | `saint-elms-fire` |
| Container port | `8080` |
| Auth mode | `trusted-proxy` |
| Identity boundary | Identity-Aware Proxy (or signed-header edge function) |
| Runtime service account | `saint-elms-fire-app@saint-elms-fire.iam.gserviceaccount.com` |
| Liveness probe | `/health` (HTTP 200 while Next is responsive) |
| Dependency readiness | `/health?deep=true` (Firestore + Gemini + Sarvam) |

## Secrets

All secrets live in Google Secret Manager. No API keys or proxy secrets are stored in `.env` files committed to the repository.

| Secret | Env var | Purpose |
| --- | --- | --- |
| `gemini-api-key` | `GEMINI_API_KEY` | Gemini 3.7 Flash generation |
| `saint-elms-auth-proxy-secret` | `AUTH_PROXY_SECRET` | Trusted-proxy header validation |

Bind secrets at deploy time:

```bash
gcloud run deploy saint-elms-fire \
  --source=. \
  --region=asia-south1 \
  --no-allow-unauthenticated \
  --service-account=saint-elms-fire-app@saint-elms-fire.iam.gserviceaccount.com \
  --update-env-vars="GOOGLE_CLOUD_PROJECT=saint-elms-fire,AUTH_MODE=trusted-proxy" \
  --update-secrets="GEMINI_API_KEY=gemini-api-key:latest,AUTH_PROXY_SECRET=saint-elms-auth-proxy-secret:latest" \
  --port=8080
```

## Identity boundary

The service runs behind `AUTH_MODE=trusted-proxy`. Direct access to the Cloud Run URL is rejected by `--no-allow-unauthenticated`. Application-level identity is injected by the upstream proxy via headers:

| Header | Purpose |
| --- | --- |
| `X-Saint-Elms-Auth-Secret` | Shared secret matching `AUTH_PROXY_SECRET` |
| `X-Saint-Elms-User-Id` | Authenticated user identity |
| `X-Saint-Elms-Role` | `admin` or `student` |

The proxy secret is compared in constant time using `node:crypto.timingSafeEqual`. Missing or mismatched secrets return HTTP 401.

## Demo seeding

Demo content is seeded via `POST /api/seed` with `ALLOW_PRODUCTION_SEED=true` and admin identity. The flag must be reverted immediately after seeding:

```bash
# Enable seeding
gcloud run services update saint-elms-fire \
  --region=asia-south1 \
  --update-env-vars="ALLOW_PRODUCTION_SEED=true"

# Trigger seed (with admin proxy headers)
curl -X POST https://saint-elms-fire-xxx.run.app/api/seed \
  -H "X-Saint-Elms-Auth-Secret: $PROXY_SECRET" \
  -H "X-Saint-Elms-User-Id: admin" \
  -H "X-Saint-Elms-Role: admin"

# Disable seeding immediately
gcloud run services update saint-elms-fire \
  --region=asia-south1 \
  --update-env-vars="ALLOW_PRODUCTION_SEED=false"
```

## Health endpoints

| Endpoint | Auth | Purpose |
| --- | --- | --- |
| `/health` | Cloud Run/IAP service access | Shallow liveness — HTTP 200 if Next is responsive |
| `/health?deep=true` | Cloud Run/IAP service access | Full dependency probe — Firestore + Gemini + Sarvam |
| `/api/health` | Cloud Run/IAP service access | Same as `/health` (API-namespaced alias) |

The Dockerfile healthcheck calls `/health` (not a separate `/health/live` route). A degraded dependency (e.g. Gemini quota exhausted) returns HTTP 503 but does not restart the container — the healthcheck only fails if Next itself is unresponsive.

## Verification checklist

### Container probes (Phase 4 role matrix)

1. `AUTH_MODE=demo`, student role: student APIs work; admin mutations return 403
2. `AUTH_MODE=demo`, admin role: admin release flow works
3. `AUTH_MODE=trusted-proxy`, missing/invalid secret: 401
4. Trusted headers + valid secret: role policy enforced
5. `/health`: 200 independent of Firestore/Gemini
6. `/health?deep=true`: honest 200/503 dependency status

### Security scan

- No literal API keys, proxy secrets, or service-account keys in the repo
- No raw upstream errors returned to clients (bounded error categories only)
- No route defaults student-scoped operations to caller-controlled `studentId`
- No admin mutation relies on UI state

### Build verification

```bash
bun install
bun run typecheck
bun run build
docker build -t saint-elms-fire .
```

All must pass from a clean clone using only `README.md` instructions and `.env.example`.

## Rollback

```bash
# List revisions
gcloud run revisions list --service=saint-elms-fire --region=asia-south1

# Roll traffic back to a known-good revision
gcloud run services update-traffic saint-elms-fire \
  --region=asia-south1 \
  --to-revisions=REVISION_NAME=100
```

Firestore release records are additive and safe to leave in place during rollback. If Gemini/Vertex quota is exhausted during a live demo, fall back to the pre-recorded demo video.

## Cost controls

- Cloud Run min instances = 0 (pay-per-request) for normal operation
- Optionally set min instances = 1 during the judging window for cold-start elimination
- Cloud Billing budget alert configured on the project to catch runaway Gemini/Firestore usage

```bash
gcloud billing budgets list
gcloud run services describe saint-elms-fire \
  --region=asia-south1 \
  --format="value(spec.template.spec.containerConcurrency)"
```

## Known gaps

### Trusted-proxy identity layer — implemented

The Phase 4 `src/lib/request-identity.ts` module is now implemented with:
- `resolveRequestIdentity(req)` — resolves identity from `AUTH_MODE=demo` env vars or `AUTH_MODE=trusted-proxy` headers
- `resolveStudentScope(identity, requestedStudentId?)` — prevents cross-student access
- `requireAdmin(identity)` — throws 403 for non-admin callers
- `authorizationResponse(error)` — converts auth errors to HTTP responses
- Constant-time secret comparison via `node:crypto.timingSafeEqual`
- Production fails closed: missing/unknown `AUTH_MODE` or `AUTH_MODE=demo` in production → 401

All API routes now use the identity layer:
- Student-scoped routes (chat, graph, quiz, generate-format, socratic-tutor, releases GET) use `resolveStudentScope`
- Admin mutation routes (courses, modules, lessons, releases POST, retry, seed) use `requireAdmin`
- Course detail GET filters unreleased lesson markdown for students
- Socratic tutor POST verifies session ownership before evaluation
- Seed route checks `ALLOW_PRODUCTION_SEED` in production
