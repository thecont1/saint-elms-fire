#!/usr/bin/env bash
#
# deploy-cloud-run-demo.sh — deploy the public Saint Elms Fire demo service.
#
# This is deliberately separate from deploy-cloud-run.sh. Production remains
# private and trusted-proxy authenticated; only this staging/demo service is
# public and uses AUTH_MODE=demo.
#
# Usage:
#   scripts/deploy-cloud-run-demo.sh [--dry-run]
#
# Environment overrides:
#   PROJECT_ID, REGION, SERVICE, RUNTIME_SA, GEMINI_SECRET_NAME, AR_REPO,
#   IMAGE_TAG, DEPLOY_IMAGE (skip build/push and deploy this existing image)

set -euo pipefail

PROJECT_ID="${PROJECT_ID:-saint-elms-fire}"
REGION="${REGION:-asia-south1}"
SERVICE="${SERVICE:-saint-elms-fire-demo}"
RUNTIME_SA="${RUNTIME_SA:-saint-elms-fire-app@${PROJECT_ID}.iam.gserviceaccount.com}"
GEMINI_SECRET_NAME="${GEMINI_SECRET_NAME:-gemini-api-key}"
AR_REPO="${AR_REPO:-cloud-run-source-deploy}"
REGISTRY="${REGION}-docker.pkg.dev"

DRY_RUN=false
for arg in "$@"; do
  case "$arg" in
    --dry-run) DRY_RUN=true ;;
    --help|-h)
      sed -n '2,15p' "$0" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *)
      printf '[demo-deploy] ERROR: unknown argument: %s\n' "$arg" >&2
      exit 2
      ;;
  esac
done

info() { printf '[demo-deploy] %s\n' "$*"; }
warn() { printf '[demo-deploy] WARNING: %s\n' "$*" >&2; }
fail() { printf '[demo-deploy] ERROR: %s\n' "$*" >&2; exit 2; }
dry() { printf '[dry-run] %s\n' "$*"; }

# Guard the public/demo boundary. A caller must not accidentally point this
# script at the private production service.
[[ "$SERVICE" != "saint-elms-fire" ]] || fail "Refusing to deploy demo auth to the private production service 'saint-elms-fire'."

if $DRY_RUN; then
  dry "would verify tooling: gcloud${DEPLOY_IMAGE:+ (existing image supplied)}"
  dry "would verify secret exists: ${GEMINI_SECRET_NAME}"
else
  command -v gcloud >/dev/null 2>&1 || fail "gcloud is not installed or not on PATH."
  if [[ -z "${DEPLOY_IMAGE:-}" ]]; then
    command -v docker >/dev/null 2>&1 || fail "docker is not installed or not on PATH."
    docker info >/dev/null 2>&1 || fail "docker daemon is not running."
  fi
  gcloud secrets describe "$GEMINI_SECRET_NAME" --project="$PROJECT_ID" >/dev/null 2>&1 \
    || fail "Secret Manager secret '${GEMINI_SECRET_NAME}' not found in project '${PROJECT_ID}'."
fi

latest_secret_version() {
  gcloud secrets versions list "$1" \
    --project="$PROJECT_ID" \
    --filter='state=ENABLED' \
    --format='value(name)' | sort -n | tail -1
}

if $DRY_RUN; then
  GEMINI_SECRET_VERSION='<N>'
else
  GEMINI_SECRET_VERSION="$(latest_secret_version "$GEMINI_SECRET_NAME")"
  [[ -n "$GEMINI_SECRET_VERSION" ]] || fail "No ENABLED version of secret ${GEMINI_SECRET_NAME}."
fi

GIT_SHA="$(git rev-parse --short HEAD 2>/dev/null || echo nogit)"
IMAGE_TAG="${IMAGE_TAG:-$(date +%Y%m%d-%H%M%S)-${GIT_SHA}-demo}"
IMAGE="${DEPLOY_IMAGE:-${REGISTRY}/${PROJECT_ID}/${AR_REPO}/saint-elms-fire:${IMAGE_TAG}}"

if [[ -n "${DEPLOY_IMAGE:-}" ]]; then
  info "skipping build: deploying existing image ${IMAGE}"
elif $DRY_RUN; then
  dry "docker build --platform linux/amd64 --build-arg NEXT_PUBLIC_GIT_COMMIT_SHA=${GIT_SHA} -t ${IMAGE} ."
  dry "gcloud auth configure-docker ${REGISTRY} --quiet"
  dry "docker push ${IMAGE}"
else
  info "building amd64 image ${IMAGE}"
  docker build --platform linux/amd64 --build-arg "NEXT_PUBLIC_GIT_COMMIT_SHA=${GIT_SHA}" -t "$IMAGE" .
  gcloud auth configure-docker "$REGISTRY" --quiet
  docker push "$IMAGE"
fi

DEPLOY_CMD=(gcloud run deploy "$SERVICE"
  --project="$PROJECT_ID"
  --region="$REGION"
  --image="$IMAGE"
  --service-account="$RUNTIME_SA"
  --platform=managed
  --port=8080
  --allow-unauthenticated
  --min-instances=1
  --max-instances=1
  --no-cpu-throttling
  --cpu=1
  --memory=512Mi
  --update-env-vars="GOOGLE_CLOUD_PROJECT=${PROJECT_ID},AUTH_MODE=demo,SAINT_ELMS_ENV=staging"
  --update-secrets="GEMINI_API_KEY=${GEMINI_SECRET_NAME}:${GEMINI_SECRET_VERSION}")

if $DRY_RUN; then
  dry "would execute:"
  dry "  ${DEPLOY_CMD[*]}"
  dry "would verify: public IAM, AUTH_MODE=demo, SAINT_ELMS_ENV=staging, cpu-throttling=false, minScale=1, maxScale=1"
  exit 0
fi

info "deploying ${IMAGE}"
"${DEPLOY_CMD[@]}"

DESCRIBE=(gcloud run services describe "$SERVICE" --project="$PROJECT_ID" --region="$REGION")
THROTTLING="$("${DESCRIBE[@]}" --format='value(spec.template.metadata.annotations["run.googleapis.com/cpu-throttling"])')"
MIN_SCALE="$("${DESCRIBE[@]}" --format='value(spec.template.metadata.annotations["autoscaling.knative.dev/minScale"])')"
MAX_SCALE="$("${DESCRIBE[@]}" --format='value(spec.template.metadata.annotations["autoscaling.knative.dev/maxScale"])')"
AUTH_MODE_LIVE="$("${DESCRIBE[@]}" --format='value(spec.template.spec.containers[0].env[?name="AUTH_MODE"].value)')"
DEPLOY_ENV_LIVE="$("${DESCRIBE[@]}" --format='value(spec.template.spec.containers[0].env[?name="SAINT_ELMS_ENV"].value)')"
SERVICE_URL="$("${DESCRIBE[@]}" --format='value(status.url)')"

CONTRACT_OK=true
[[ "$THROTTLING" == "false" ]] || { warn "cpu-throttling is ${THROTTLING:-<unset>}, expected false"; CONTRACT_OK=false; }
[[ "$MIN_SCALE" == "1" ]] || { warn "minScale is ${MIN_SCALE:-<unset>}, expected 1"; CONTRACT_OK=false; }
[[ "$MAX_SCALE" == "1" ]] || { warn "maxScale is ${MAX_SCALE:-<unset>}, expected 1"; CONTRACT_OK=false; }
[[ "$AUTH_MODE_LIVE" == "demo" ]] || { warn "AUTH_MODE is ${AUTH_MODE_LIVE:-<unset>}, expected demo"; CONTRACT_OK=false; }
[[ "$DEPLOY_ENV_LIVE" == "staging" ]] || { warn "SAINT_ELMS_ENV is ${DEPLOY_ENV_LIVE:-<unset>}, expected staging"; CONTRACT_OK=false; }
$CONTRACT_OK || fail "Live demo runtime contract verification failed."

curl --fail --silent --show-error --retry 6 --retry-delay 2 --retry-all-errors \
  "${SERVICE_URL}/health/live" >/dev/null
info "deployed and healthy: ${SERVICE_URL}"
