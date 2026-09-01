# saint-elms-demo-proxy

Public front door for the hackathon demo. The main `saint-elms-fire` Cloud Run
service stays **private** (`--no-allow-unauthenticated`) with its production
`AUTH_MODE=trusted-proxy` contract untouched; this tiny stateless proxy is the
only public entry point. It forwards every request to the private service and
injects the trusted-proxy identity headers for one fixed demo student:

- `X-Saint-Elms-Auth-Secret` — from `saint-elms-auth-proxy-secret` (Secret Manager)
- `X-Saint-Elms-User-Id` — `student-chetna` (seeded student with a released lesson)
- `X-Saint-Elms-Role` — `student` (never `admin`)

Incoming `X-Saint-Elms-*` headers from visitors are stripped, so nobody can
spoof a role or another student's identity through the proxy.

## Deploy

```bash
PROJECT_ID=saint-elms-fire
REGION=asia-south1
REGISTRY=${REGION}-docker.pkg.dev
IMAGE=${REGISTRY}/${PROJECT_ID}/cloud-run-source-deploy/saint-elms-demo-proxy:latest

docker build --platform linux/amd64 -t "$IMAGE" infra/demo-proxy
gcloud auth configure-docker "$REGISTRY" --quiet
docker push "$IMAGE"

gcloud run deploy saint-elms-demo-proxy \
  --project="$PROJECT_ID" --region="$REGION" \
  --image="$IMAGE" \
  --service-account=saint-elms-fire-app@${PROJECT_ID}.iam.gserviceaccount.com \
  --allow-unauthenticated \
  --set-env-vars="TARGET_URL=https://saint-elms-fire-543329415341.asia-south1.run.app,DEMO_USER_ID=student-chetna" \
  --set-secrets="AUTH_PROXY_SECRET=saint-elms-auth-proxy-secret:3"
```

Prerequisite (one-time): the proxy's service account must be able to invoke the
private service:

```bash
gcloud run services add-iam-policy-binding saint-elms-fire \
  --project="$PROJECT_ID" --region="$REGION" \
  --member=serviceAccount:saint-elms-fire-app@${PROJECT_ID}.iam.gserviceaccount.com \
  --role=roles/run.invoker
```

## Verify

```bash
PROXY_URL=$(gcloud run services describe saint-elms-demo-proxy \
  --project=saint-elms-fire --region=asia-south1 --format='value(status.url)')

curl -s -o /dev/null -w '%{http_code}\n' "$PROXY_URL/"                                   # 200 (homepage)
curl -s "$PROXY_URL/api/releases?studentId=student-chetna"                              # 200 + released lesson
curl -s -o /dev/null -w '%{http_code}\n' -X POST -H 'X-Saint-Elms-Role: admin' \
  "$PROXY_URL/api/jobs/sweep"                                                            # 403 (spoofed role stripped)
```

## Teardown (after judging)

```bash
gcloud run services delete saint-elms-demo-proxy \
  --project=saint-elms-fire --region=asia-south1
```

The main service becomes unreachable for the public again; nothing else to undo.

## Notes

- All visitors share the `student-chetna` identity. That is intentional: the
  demo shows a known-good student with a released lesson, and
  `resolveStudentScope` keeps cross-student data inaccessible.
- The proxy is stateless and scales to zero — no runtime-contract flags needed
  (the `--min-instances/--no-cpu-throttling` contract is about the main
  service's in-process job queue, not this proxy). Cold start adds ~1-2s to
  the first request after idle.
- Anyone can trigger Gemini-backed features (chat, artifact generation)
  through the public URL; keep an eye on quota during the judging window.
