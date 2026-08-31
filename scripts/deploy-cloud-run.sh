#!/usr/bin/env bash
#
# deploy-cloud-run.sh — deploy Saint Elms Fire to Cloud Run under the
# Phase 8 runtime contract.
#
# THE RUNTIME CONTRACT (why these flags are not optional)
# =======================================================
# Artifact generation (PDF notes, podcast audio) runs in-process: POST
# /api/artifacts/generate returns 202 immediately and a timer-dispatched
# worker finishes the job after the HTTP response has been sent
# (see src/lib/job-queue.ts). Two Cloud Run defaults silently break this:
#
#   1. CPU throttling (default ON): Cloud Run throttles the container's CPU
#      whenever no request is in flight. The moment the 202 response returns,
#      the event loop is starved and the background worker never runs — the
#      artifact hangs in `pending` until the watchdog fails it.
#      => --no-cpu-throttling keeps CPU allocated between requests so the
#         worker continues after the response.
#
#   2. Scale-to-zero (default): with no traffic Cloud Run terminates the
#      container, destroying the in-memory queue dispatcher and any in-flight
#      job with it.
#      => --min-instances=1 keeps exactly one warm container alive at all
#         times, decoupling container lifecycle from request traffic.
#
# The two flags must be set TOGETHER: min-instances without
# no-cpu-throttling keeps a container alive but frozen; no-cpu-throttling
# without min-instances never applies because there is no warm instance
# between requests.
#
#   --max-instances=1 is also part of the contract: the job queue is an
#   in-process singleton. More than one instance means split-brain background
#   workers (duplicate kicks, racing sweeps). Multi-instance scaling requires
#   migrating to Cloud Tasks / Pub-Sub first (explicit Phase 8 non-goal).
#
# AUTH CONTRACT
# =============
# Production requires AUTH_MODE=trusted-proxy with AUTH_PROXY_SECRET bound
# from Secret Manager (never baked into the image). This script fails closed
# if the auth contract is not met, and pre-flight-checks that the proxy
# secret exists in Secret Manager before deploying.
#
# Usage:
#   ENVIRONMENT=production AUTH_MODE=trusted-proxy scripts/deploy-cloud-run.sh [--dry-run]
#
# Options:
#   --dry-run   Print every step and the final `gcloud run deploy` command
#               without building, pushing, or deploying anything.
#   --help      Show this usage.
#
# Environment overrides:
#   PROJECT_ID, REGION, SERVICE, RUNTIME_SA, ENVIRONMENT, AUTH_MODE,
#   GEMINI_SECRET_NAME, AUTH_PROXY_SECRET_NAME, AR_REPO, IMAGE_TAG,
#   DEPLOY_IMAGE (skip local build and deploy this image instead)

set -euo pipefail

PROJECT_ID="${PROJECT_ID:-saint-elms-fire}"
REGION="${REGION:-asia-south1}"
SERVICE="${SERVICE:-saint-elms-fire}"
RUNTIME_SA="${RUNTIME_SA:-saint-elms-fire-app@${PROJECT_ID}.iam.gserviceaccount.com}"
ENVIRONMENT="${ENVIRONMENT:-production}"
GEMINI_SECRET_NAME="${GEMINI_SECRET_NAME:-gemini-api-key}"
AUTH_PROXY_SECRET_NAME="${AUTH_PROXY_SECRET_NAME:-saint-elms-auth-proxy-secret}"
AR_REPO="${AR_REPO:-cloud-run-source-deploy}"
REGISTRY="${REGION}-docker.pkg.dev"

DRY_RUN=false
for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    --help|-h)
      sed -n '2,50p' "$0" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *)
      echo "ERROR: unknown argument: $arg (expected --dry-run or --help)" >&2
      exit 2
      ;;
  esac
done

info() { printf '[deploy] %s\n' "$*"; }
warn() { printf '[deploy] WARNING: %s\n' "$*" >&2; }
fail() { printf '[deploy] ERROR: %s\n' "$*" >&2; exit 2; }
dry() { printf '[dry-run] %s\n' "$*"; }

# ---------------------------------------------------------------------------
# 1. Auth contract gate (fail closed)
# ---------------------------------------------------------------------------
if [[ "$ENVIRONMENT" == "production" ]]; then
  if [[ "${AUTH_MODE:-}" == "demo" ]]; then
    warn "AUTH_MODE=demo detected in production context."
    fail "Refusing to deploy: production requires AUTH_MODE=trusted-proxy (demo auth trusts env-var identity and would expose admin access to anyone who can reach the service)."
  elif [[ "${AUTH_MODE:-}" != "trusted-proxy" ]]; then
    fail "AUTH_MODE must be 'trusted-proxy' when ENVIRONMENT=production (got: '${AUTH_MODE:-<unset>}'). Set AUTH_MODE=trusted-proxy and ensure ${AUTH_PROXY_SECRET_NAME} exists in Secret Manager."
  fi
else
  AUTH_MODE="${AUTH_MODE:-demo}"
  if [[ "$AUTH_MODE" == "demo" ]]; then
    warn "AUTH_MODE=demo on a deployed service (ENVIRONMENT=${ENVIRONMENT}): identity comes from env vars, headers are ignored. Never point real users at this."
  fi
fi
info "auth contract: ENVIRONMENT=${ENVIRONMENT} AUTH_MODE=${AUTH_MODE}"

# ---------------------------------------------------------------------------
# 2. Pre-flight checks
# ---------------------------------------------------------------------------
if $DRY_RUN; then
  dry "would verify tooling: gcloud, docker"
  dry "would verify secret exists: gcloud secrets describe ${AUTH_PROXY_SECRET_NAME} --project=${PROJECT_ID}"
  dry "would resolve latest enabled version of ${GEMINI_SECRET_NAME} and ${AUTH_PROXY_SECRET_NAME} (pinned numeric versions keep rollbacks deterministic)"
else
  command -v gcloud >/dev/null 2>&1 || fail "gcloud is not installed or not on PATH."
  if [[ -z "${DEPLOY_IMAGE:-}" ]]; then
    command -v docker >/dev/null 2>&1 || fail "docker is not installed or not on PATH."
    docker info >/dev/null 2>&1 || fail "docker daemon is not running."
  fi

  # The proxy secret MUST exist before we deploy: a revision that boots with
  # AUTH_MODE=trusted-proxy but no AUTH_PROXY_SECRET fails every request with
  # 500 'Proxy secret not configured' (src/lib/request-identity.ts).
  if [[ "$AUTH_MODE" == "trusted-proxy" ]]; then
    if ! gcloud secrets describe "$AUTH_PROXY_SECRET_NAME" --project="$PROJECT_ID" >/dev/null 2>&1; then
      fail "Secret Manager secret '${AUTH_PROXY_SECRET_NAME}' not found in project '${PROJECT_ID}'. Create it first: gcloud secrets create ${AUTH_PROXY_SECRET_NAME} --replication-policy=automatic && add a version, then grant roles/secretmanager.secretAccessor to ${RUNTIME_SA}."
    fi
    info "pre-flight: secret ${AUTH_PROXY_SECRET_NAME} exists"
  fi
fi

# Resolve the newest ENABLED numeric version of a secret. Versions are
# numeric strings; sort -n avoids the lexicographic 10-vs-9 trap.
latest_secret_version() {
  gcloud secrets versions list "$1" \
    --project="$PROJECT_ID" \
    --filter='state=ENABLED' \
    --format='value(name)' | sort -n | tail -1
}

if $DRY_RUN; then
  GEMINI_SECRET_VERSION='<N>'
  PROXY_SECRET_VERSION='<N>'
else
  GEMINI_SECRET_VERSION="$(latest_secret_version "$GEMINI_SECRET_NAME")"
  [[ -n "$GEMINI_SECRET_VERSION" ]] || fail "No ENABLED version of secret ${GEMINI_SECRET_NAME}."
  if [[ "$AUTH_MODE" == "trusted-proxy" ]]; then
    PROXY_SECRET_VERSION="$(latest_secret_version "$AUTH_PROXY_SECRET_NAME")"
    [[ -n "$PROXY_SECRET_VERSION" ]] || fail "No ENABLED version of secret ${AUTH_PROXY_SECRET_NAME}."
  else
    PROXY_SECRET_VERSION=""
  fi
fi
info "secret pins: ${GEMINI_SECRET_NAME}:${GEMINI_SECRET_VERSION}${PROXY_SECRET_VERSION:+, ${AUTH_PROXY_SECRET_NAME}:${PROXY_SECRET_VERSION}}"

# ---------------------------------------------------------------------------
# 3. Build + push (amd64 image path)
# ---------------------------------------------------------------------------
# NOTE: `gcloud run deploy --source=.` fails in this project — Cloud Build's
# default compute SA lacks the run-sources bucket permission. The working
# path (verified 2026-08-30) is a local amd64 build pushed to Artifact
# Registry: Cloud Run rejects the arm64 manifest an Apple-silicon build
# produces, so --platform linux/amd64 is mandatory.
GIT_SHA="$(git rev-parse --short HEAD 2>/dev/null || echo nogit)"
IMAGE_TAG="${IMAGE_TAG:-$(date +%Y%m%d-%H%M%S)-${GIT_SHA}}"
IMAGE="${DEPLOY_IMAGE:-${REGISTRY}/${PROJECT_ID}/${AR_REPO}/${SERVICE}:${IMAGE_TAG}}"

if [[ -n "${DEPLOY_IMAGE:-}" ]]; then
  info "skipping build: deploying existing image ${IMAGE}"
elif $DRY_RUN; then
  dry "docker build --platform linux/amd64 -t ${IMAGE} ."
  dry "gcloud auth configure-docker ${REGISTRY} --quiet"
  dry "docker push ${IMAGE}"
else
  info "building amd64 image ${IMAGE}"
  docker build --platform linux/amd64 -t "$IMAGE" .
  gcloud auth configure-docker "$REGISTRY" --quiet
  docker push "$IMAGE"
fi

# ---------------------------------------------------------------------------
# 4. Deploy with the runtime contract
# ---------------------------------------------------------------------------
SECRET_BINDINGS="GEMINI_API_KEY=${GEMINI_SECRET_NAME}:${GEMINI_SECRET_VERSION}"
if [[ "$AUTH_MODE" == "trusted-proxy" ]]; then
  SECRET_BINDINGS="${SECRET_BINDINGS},AUTH_PROXY_SECRET=${AUTH_PROXY_SECRET_NAME}:${PROXY_SECRET_VERSION}"
fi

DEPLOY_CMD=(gcloud run deploy "$SERVICE"
  --project="$PROJECT_ID"
  --region="$REGION"
  --image="$IMAGE"
  --service-account="$RUNTIME_SA"
  --platform=managed
  --port=8080
  --no-allow-unauthenticated
  # --- Phase 8 runtime contract: keep the in-process job queue alive -------
  # --min-instances=1 decouples container lifecycle from request traffic so
  #   the container (and its in-memory queue state) survives between requests.
  # --no-cpu-throttling keeps the event loop running after the 202 response
  #   so the background worker actually executes.
  # --max-instances=1 preserves single-writer semantics for the in-process
  #   queue (no split-brain background workers).
  --min-instances=1
  --max-instances=1
  --no-cpu-throttling
  # -------------------------------------------------------------------------
  --update-env-vars="GOOGLE_CLOUD_PROJECT=${PROJECT_ID},AUTH_MODE=${AUTH_MODE}"
  --update-secrets="$SECRET_BINDINGS")

if $DRY_RUN; then
  dry "would execute:"
  dry "  ${DEPLOY_CMD[*]}"
  dry "would verify: cpu-throttling annotation == false, minScale == 1, maxScale == 1"
  info "dry run complete — nothing was built, pushed, or deployed."
  exit 0
fi

info "deploying ${IMAGE}"
"${DEPLOY_CMD[@]}"

# ---------------------------------------------------------------------------
# 5. Post-deploy contract verification
# ---------------------------------------------------------------------------
DESCRIBE=(gcloud run services describe "$SERVICE" --project="$PROJECT_ID" --region="$REGION")

THROTTLING="$("${DESCRIBE[@]}" --format='value(spec.template.metadata.annotations["run.googleapis.com/cpu-throttling"])')"
MIN_SCALE="$("${DESCRIBE[@]}" --format='value(spec.template.metadata.annotations["autoscaling.knative.dev/minScale"])')"
MAX_SCALE="$("${DESCRIBE[@]}" --format='value(spec.template.metadata.annotations["autoscaling.knative.dev/maxScale"])')"

info "contract check: cpu-throttling=${THROTTLING:-<unset>} minScale=${MIN_SCALE:-<unset>} maxScale=${MAX_SCALE:-<unset>}"

CONTRACT_OK=true
if [[ "${THROTTLING:-true}" != "false" ]]; then
  warn "CPU throttling is NOT disabled on the live revision — background artifact jobs will hang after the 202 response."
  CONTRACT_OK=false
fi
if [[ "${MIN_SCALE:-0}" != "1" ]]; then
  warn "min-instances is not 1 — the container scales to zero and loses in-memory queue state between requests."
  CONTRACT_OK=false
fi
if [[ "${MAX_SCALE:-}" != "1" ]]; then
  warn "max-instances is not 1 — multiple instances create split-brain background workers."
  CONTRACT_OK=false
fi
$CONTRACT_OK || fail "Runtime contract verification failed; see warnings above. Rollback: docs/PHASE8_OPS.md"

SERVICE_URL="$("${DESCRIBE[@]}" --format='value(status.url)')"
info "deployed: ${SERVICE_URL}"
info "next: bun run scripts/smoke-test-production.ts ${SERVICE_URL}"
