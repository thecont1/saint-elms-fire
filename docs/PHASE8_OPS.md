# Phase 8 Operations Runbook

Secret rotation, rollback, and cost guardrails for the Cloud Run runtime
contract (`docs/PHASE3.md` → Runtime contract). Deployments go through
`scripts/deploy-cloud-run.sh`; this runbook covers what to do around it.

Constants used below:

```bash
PROJECT_ID=saint-elms-fire
REGION=asia-south1
SERVICE=saint-elms-fire
RUNTIME_SA=saint-elms-fire-app@${PROJECT_ID}.iam.gserviceaccount.com
PROXY_SECRET=saint-elms-auth-proxy-secret
```

## First check when artifact generation hangs in production

If an artifact job stays `pending`/`running` on the deployed service, check
CPU throttling on the live revision FIRST:

```bash
gcloud run services describe "$SERVICE" \
  --project="$PROJECT_ID" --region="$REGION" \
  --format='value(spec.template.metadata.annotations["run.googleapis.com/cpu-throttling"])'
```

**Must print `false`.** If it prints `true` (or anything else), the revision
was deployed without `--no-cpu-throttling`: Cloud Run freezes the container's
CPU between requests, so the in-process worker never runs after the 202
response and every artifact hangs until the watchdog fails it. Redeploy with
the contract:

```bash
ENVIRONMENT=production AUTH_MODE=trusted-proxy scripts/deploy-cloud-run.sh
```

While diagnosing, the admin sweep endpoint recovers stranded work:

```bash
curl -X POST "${SERVICE_URL}/api/jobs/sweep" \
  -H "Authorization: Bearer $(gcloud auth print-identity-token --audiences=${SERVICE_URL})" \
  -H "X-Saint-Elms-Auth-Secret: ${SECRET_VALUE}" \
  -H "X-Saint-Elms-User-Id: ops" -H "X-Saint-Elms-Role: admin"
```

## Secret rotation (`saint-elms-auth-proxy-secret`)

Rotation is zero-downtime: add a new version, deploy a new revision pinned to
it, verify, then disable the old version. The old revision keeps its old
pinned binding until traffic moves, so nothing breaks mid-rotation.

1. Add the new version (value from stdin — never shell history). The payload
   must contain NO trailing newline: the app compares the header to the env
   value with a constant-time byte comparison (`timingSafeEqual`), so an extra
   `\n` makes every request fail 401. `openssl rand` prints a trailing
   newline; strip it with `printf '%s' "$(...)"`:

   ```bash
   printf '%s' "$(openssl rand -hex 32)" | \
     gcloud secrets versions add "$PROXY_SECRET" --data-file=-
   ```

   (Or `read -s` a manually-chosen value and pipe it through `printf '%s'`.)
   Verify the payload length before deploying:

   ```bash
   gcloud secrets versions access latest --secret="$PROXY_SECRET" | wc -c   # expect 64 for hex 32
   ```

2. Update the upstream proxy with the new value FIRST (it sends
   `X-Saint-Elms-Auth-Secret`; the proxy and the service must overlap on a
   value they both accept). Coordinate the cutover in this order:

   a. Deploy the new revision pinned to the new version:

   ```bash
   ENVIRONMENT=production AUTH_MODE=trusted-proxy scripts/deploy-cloud-run.sh
   ```

   The script resolves the newest ENABLED version automatically, so it picks
   up the version added in step 1.

   b. Switch the upstream proxy to send the new value.
   c. Verify end-to-end:

   ```bash
   bun run scripts/smoke-test-production.ts   # T2 proves the new secret is accepted
   ```

3. Disable old versions once both sides are confirmed on the new value:

   ```bash
   gcloud secrets versions list "$PROXY_SECRET" --project="$PROJECT_ID"
   gcloud secrets versions disable OLD_VERSION --secret="$PROXY_SECRET" --project="$PROJECT_ID"
   ```

   Keep at least the previous version ENABLED until you are sure, so a
   rollback (below) still has a valid binding.

Same procedure applies to `gemini-api-key`.

## Rollback

A bad revision never needs re-pushing an old image: Cloud Run keeps prior
revisions, and traffic moves instantly.

1. List revisions and pick the last known-good one:

   ```bash
   gcloud run revisions list --service="$SERVICE" \
     --project="$PROJECT_ID" --region="$REGION"
   ```

2. Send 100% traffic to it:

   ```bash
   gcloud run services update-traffic "$SERVICE" \
     --project="$PROJECT_ID" --region="$REGION" \
     --to-revisions=REVISION_NAME=100
   ```

3. The service stays **private** through all of this — `--no-allow-unauthenticated`
   is revision-template state inherited from the original deploy, and traffic
   moves do not change IAM. Verify:

   ```bash
   gcloud run services get-iam-policy "$SERVICE" \
     --project="$PROJECT_ID" --region="$REGION"
   # Expect only the explicit run.invoker binding(s); no allUsers.
   ```

Notes:

- Rollback to a pre-contract revision re-enables CPU throttling (that was the
  default when it was deployed). Background artifacts will hang again — treat
  rollback as a temporary stability measure, then redeploy the fixed tree via
  the contract script.
- To abandon a revision entirely rather than route traffic to it, delete it:
  `gcloud run revisions delete REVISION_NAME --project=… --region=…`.
- `--min-instances=1` is revision-template state too: a rollback revision
  deployed without it scales to zero (see cost guardrails).

## Cost guardrails (`--min-instances=1`)

`--min-instances=1` keeps one container warm 24/7, so it bills for reserved
CPU + memory continuously instead of per-request. For this service (1 vCPU /
2 GiB, `asia-south1`):

| Item | Scale-to-zero | min-instances=1 |
| --- | --- | --- |
| Idle cost | $0 | ~$10–15/month (reserved vCPU-h + GiB-h rates) |
| Cold starts | Yes (seconds, first request after idle) | None |
| Background jobs | **Break** (container dies between requests) | Work |
| CPU throttling risk | N/A (no CPU between requests anyway) | Only if `--no-cpu-throttling` omitted |

This is acceptable for the hackathon demo window (submission 2026-09-01 and
judging). Post-demo, revert to scale-to-zero if the always-on cost matters:

```bash
gcloud run services update "$SERVICE" \
  --project="$PROJECT_ID" --region="$REGION" \
  --min-instances=0 --cpu-throttling
```

…and accept that background artifact generation is unavailable until a
Cloud Tasks / Pub-Sub queue replaces the in-process one (documented upgrade
path in `src/lib/job-queue.ts`). Do NOT revert only one of the two flags:
`--min-instances=0` + `--no-cpu-throttling` is a configuration error Cloud
Run rejects at deploy time, and `--min-instances=1` + throttling silently
hangs every background job.

## Drills performed

| Date | Drill | Result |
| --- | --- | --- |
| 2026-08-31 | Secret rotation (steps 1–3) | Executed for real, with one incident: the first rotated version (v2) was piped from `openssl rand` with its trailing newline, so revision `00009-c67` rejected every request with 401 (`timingSafeEqual` length mismatch). Caught by the smoke test (sweep/release endpoints 401'd); a T2 positive control (correct secret must be accepted) was added so this class of failure now fails fast at the auth check itself. Fixed by adding a clean v3 (64 bytes), redeploying (revision `saint-elms-fire-00010-l2p` pinned to v3), and disabling the dirty v2. Zero-downtime order confirmed: old revision served until the new one took 100%; v1 left ENABLED as the rollback binding. Rotation section now warns to strip trailing newlines. |
| 2026-08-31 | Rollback path | Not exercised destructively against the live service (judging window); verified by inspection: revisions `00008-q8w` (v1) and `00009-c67` (v2, secret disabled) remain listed; routing `--to-revisions=saint-elms-fire-00008-q8w=100` restores the last known-good revision. |
