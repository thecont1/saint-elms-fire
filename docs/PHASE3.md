# Phase 3: Cloud Run Deployment

Phase 3 packages Saint Elms Fire for Cloud Run, binds Gemini through Secret Manager, and keeps Firestore on Application Default Credentials supplied by the runtime service account.

## Deployment contract

| Setting | Value |
| --- | --- |
| Project | `saint-elms-fire` |
| Region | `asia-south1` |
| Service | `saint-elms-fire` |
| Runtime identity | `saint-elms-fire-app@saint-elms-fire.iam.gserviceaccount.com` |
| Container port | `8080` |
| Process liveness | `/health/live` — shallow HTTP 200 while Next is responsive |
| Dependency readiness | `/health` — Firestore + Gemini, HTTP 200 or honest 503 |
| Gemini secret | Secret Manager secret `gemini-api-key` → `GEMINI_API_KEY` |
| Firestore auth | Attached service account via ADC; never a JSON key in the image |

Cloud Run injects `PORT`; the Dockerfile defaults it to `8080`, binds Next to `0.0.0.0`, and includes a container healthcheck against `/health/live`. The healthcheck deliberately does not call Gemini or Firestore: depleted credits or a dependency outage should make `/health` report degraded, not restart a responsive container in a loop.

## Runtime contract (Phase 8)

Artifact generation runs in-process: `POST /api/artifacts/generate` returns 202 and a timer-dispatched worker (`src/lib/job-queue.ts`) finishes the job after the HTTP response has been sent. Two Cloud Run defaults silently break this, so every production deploy must set:

| Flag | Value | Why |
| --- | --- | --- |
| `--min-instances=1` | `1` | Decouples container lifecycle from request traffic. Scale-to-zero would terminate the container between requests, destroying the in-memory queue dispatcher and any in-flight job. |
| `--no-cpu-throttling` | (disable throttling) | Cloud Run throttles CPU whenever no request is in flight. Without this flag the event loop starves the moment the 202 response returns and **background jobs hang in `pending` until the watchdog fails them**. |
| `--max-instances=1` | `1` | The job queue is an in-process singleton. More than one instance creates split-brain background workers (duplicate kicks, racing sweeps). Multi-instance requires migrating to Cloud Tasks / Pub-Sub first (Phase 8 non-goal). |

> **Warning:** omitting `--no-cpu-throttling` causes background artifact jobs to hang after the HTTP response, even with `--min-instances=1` — the container stays alive but its CPU is frozen. The two flags must be set together, and `--max-instances=1` keeps the queue single-writer. This is encoded in `scripts/deploy-cloud-run.sh`, which refuses to deploy a production service without `AUTH_MODE=trusted-proxy`, pre-flight-checks the proxy secret in Secret Manager, and verifies the contract on the live revision after deploy. Verification harness: `scripts/smoke-test-production.ts` (see `docs/PHASE8_VERIFICATION.md`); operations runbook: `docs/PHASE8_OPS.md`.

## One-time project setup

Run these as a project owner or an account allowed to manage APIs, IAM, service accounts, and secrets:

```bash
PROJECT_ID=saint-elms-fire
REGION=asia-south1
RUNTIME_SA=saint-elms-fire-app@${PROJECT_ID}.iam.gserviceaccount.com

gcloud config set project "$PROJECT_ID"

gcloud services enable \
  run.googleapis.com \
  cloudbuild.googleapis.com \
  artifactregistry.googleapis.com \
  firestore.googleapis.com \
  secretmanager.googleapis.com

gcloud iam service-accounts describe "$RUNTIME_SA" >/dev/null 2>&1 || \
  gcloud iam service-accounts create saint-elms-fire-app \
    --display-name='Saint Elms Fire Cloud Run runtime'

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:${RUNTIME_SA}" \
  --role='roles/datastore.user'
```

Create the Gemini secret without placing its value in shell history. The command reads from standard input:

```bash
gcloud secrets describe gemini-api-key >/dev/null 2>&1 || \
  gcloud secrets create gemini-api-key --replication-policy=automatic

read -s GEMINI_API_KEY_INPUT
printf '%s' "$GEMINI_API_KEY_INPUT" | \
  gcloud secrets versions add gemini-api-key --data-file=-
unset GEMINI_API_KEY_INPUT

gcloud secrets add-iam-policy-binding gemini-api-key \
  --member="serviceAccount:${RUNTIME_SA}" \
  --role='roles/secretmanager.secretAccessor'
```

## Firestore vector index

`ragChat` prefilters nearest-neighbour searches by `lessonId`, so create the composite 768-dimensional cosine-search index once:

```bash
gcloud firestore indexes composite create \
  --project=saint-elms-fire \
  --database='(default)' \
  --collection-group=courseware_chunks \
  --query-scope=COLLECTION \
  --field-config=field-path=lessonId,order=ASCENDING \
  --field-config=field-path=embedding,vector-config='{"dimension":"768","flat":"{}"}'
```

Wait until the index state is `READY`:

```bash
gcloud firestore indexes composite list \
  --project=saint-elms-fire \
  --database='(default)'
```

## Deploy

The canonical deploy path is `scripts/deploy-cloud-run.sh`, which enforces the runtime contract above, binds `AUTH_PROXY_SECRET` from Secret Manager, and verifies the live revision afterwards:

```bash
ENVIRONMENT=production AUTH_MODE=trusted-proxy scripts/deploy-cloud-run.sh           # deploy
ENVIRONMENT=production AUTH_MODE=trusted-proxy scripts/deploy-cloud-run.sh --dry-run # echo only
```

`gcloud run deploy --source=.` does NOT work in this project (Cloud Build's default compute SA lacks the run-sources bucket permission); the script uses the verified local-image path instead (`docker build --platform linux/amd64` → Artifact Registry → `gcloud run deploy --image=…`). For reference, the equivalent manual command — which MUST include the Phase 8 runtime flags — is:

```bash
PROJECT_ID=saint-elms-fire
REGION=asia-south1
SERVICE=saint-elms-fire
RUNTIME_SA=saint-elms-fire-app@${PROJECT_ID}.iam.gserviceaccount.com

gcloud run deploy "$SERVICE" \
  --project="$PROJECT_ID" \
  --region="$REGION" \
  --image="${REGION}-docker.pkg.dev/${PROJECT_ID}/cloud-run-source-deploy/${SERVICE}:TAG" \
  --service-account="$RUNTIME_SA" \
  --port=8080 \
  --no-allow-unauthenticated \
  --min-instances=1 \
  --max-instances=1 \
  --no-cpu-throttling \
  --update-env-vars="GOOGLE_CLOUD_PROJECT=${PROJECT_ID},AUTH_MODE=trusted-proxy" \
  --update-secrets='GEMINI_API_KEY=gemini-api-key:N,AUTH_PROXY_SECRET=saint-elms-auth-proxy-secret:N'
```

`--update-env-vars` and `--update-secrets` are non-destructive: repeatable deployments preserve any existing env vars and secret bindings (for example a future `AUTH_MODE` / `AUTH_PROXY_SECRET` pair). Pin numeric Secret Manager versions (e.g. `gemini-api-key:3`) instead of `latest` so rollbacks are deterministic; bump the version deliberately when rotating.

The service is deliberately private. Grant `roles/run.invoker` to the intended demo principal rather than opening it globally.

## Verify the deployed revision

```bash
SERVICE_URL=$(gcloud run services describe saint-elms-fire \
  --project=saint-elms-fire \
  --region=asia-south1 \
  --format='value(status.url)')

IDENTITY_TOKEN=$(gcloud auth print-identity-token)
curl --fail-with-body --show-error \
  -H "Authorization: Bearer ${IDENTITY_TOKEN}" \
  "${SERVICE_URL}/health"
```

A healthy response is HTTP 200 with both Firestore and Gemini marked healthy. HTTP 503 is an honest degraded result; inspect the dependency status in the JSON rather than treating it as an application crash.

## Backfill existing releases

Only courseware ingested after Phase 2 has vectors. Once the index is `READY` and Gemini credits are available, re-run ingestion for all already-released lessons. Retries are safe and idempotent: chunk documents use deterministic per-lesson IDs, graph nodes are reused by normalized concept, and graph edges are upserted by a stable key (see `saveKnowledgeNodesAndEdges`).

## Rollback

List revisions and direct all traffic to a known-good revision:

```bash
gcloud run revisions list \
  --service=saint-elms-fire \
  --project=saint-elms-fire \
  --region=asia-south1

gcloud run services update-traffic saint-elms-fire \
  --project=saint-elms-fire \
  --region=asia-south1 \
  --to-revisions=REVISION_NAME=100
```
