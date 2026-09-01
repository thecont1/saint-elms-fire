/**
 * saint-elms-demo-proxy — public front door for demo traffic.
 *
 * Forwards every request to the PRIVATE saint-elms-fire Cloud Run service,
 * injecting the trusted-proxy identity headers for one fixed demo student.
 *
 * Security posture:
 *   - The upstream service stays private (IAM unchanged); this proxy is the
 *     only public entry, and it never grants the admin role.
 *   - Incoming X-Saint-Elms-* headers are STRIPPED before forwarding, so a
 *     visitor cannot spoof a role or another student's identity.
 *   - The shared secret is bound from Secret Manager, never in the image.
 *
 * Deploy/teardown runbook: infra/demo-proxy/README.md
 */
const http = require('node:http');
const https = require('node:https');

const PORT = Number(process.env.PORT || 8080);
const TARGET = process.env.TARGET_URL;               // private service URL
const AUTH_SECRET = process.env.AUTH_PROXY_SECRET;   // from Secret Manager
const DEMO_USER_ID = process.env.DEMO_USER_ID || 'student-chetna';
const DEMO_ROLE = process.env.DEMO_ROLE || 'student'; // never 'admin'
const MAX_BODY_BYTES = 10 * 1024 * 1024;

if (!TARGET || !AUTH_SECRET) {
  console.error('demo-proxy: TARGET_URL and AUTH_PROXY_SECRET must be set');
  process.exit(1);
}
const target = new URL(TARGET);

// Hop-by-hop headers must never be forwarded by a proxy.
const HOP_BY_HOP = new Set([
  'connection', 'keep-alive', 'proxy-authenticate', 'proxy-authorization',
  'te', 'trailer', 'transfer-encoding', 'upgrade', 'host',
]);

// ---------------------------------------------------------------------------
// Upstream ID token via the GCP metadata server (zero-dependency equivalent
// of google-auth-library's getIdTokenClient). The token's audience is the
// private service URL, which is exactly what Cloud Run expects.
// ---------------------------------------------------------------------------
let cachedToken = null;
let cachedTokenExp = 0; // seconds since epoch

async function getUpstreamToken(force = false) {
  const now = Math.floor(Date.now() / 1000);
  if (!force && cachedToken && now < cachedTokenExp - 60) return cachedToken;
  const res = await fetch(
    `http://metadata.google.internal/computeMetadata/v1/instance/service-accounts/default/identity?audience=${encodeURIComponent(TARGET)}`,
    { headers: { 'Metadata-Flavor': 'Google' } },
  );
  if (!res.ok) throw new Error(`metadata token request failed: HTTP ${res.status}`);
  cachedToken = await res.text();
  // Read the JWT exp claim only to schedule a refresh; no verification needed
  // because the token comes straight from the metadata server over the
  // link-local network.
  try {
    const payload = JSON.parse(Buffer.from(cachedToken.split('.')[1], 'base64url').toString());
    cachedTokenExp = typeof payload.exp === 'number' ? payload.exp : now + 300;
  } catch {
    cachedTokenExp = now + 300;
  }
  return cachedToken;
}

// ---------------------------------------------------------------------------
// Request/response plumbing
// ---------------------------------------------------------------------------
function readBody(req) {
  return new Promise((resolve, reject) => {
    if (req.method === 'GET' || req.method === 'HEAD') {
      resolve(null);
      return;
    }
    const chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(Object.assign(new Error('request body too large'), { statusCode: 413 }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

function requestUpstream(req, body, token) {
  return new Promise((resolve, reject) => {
    const headers = {};
    for (const [key, value] of Object.entries(req.headers)) {
      const lower = key.toLowerCase();
      if (HOP_BY_HOP.has(lower)) continue;
      if (lower === 'content-length') continue; // recomputed below from the buffered body
      if (lower.startsWith('x-saint-elms-')) continue; // strip spoofed identity
      headers[key] = value;
    }
    headers.host = target.hostname;
    headers.authorization = `Bearer ${token}`;
    headers['x-saint-elms-auth-secret'] = AUTH_SECRET;
    headers['x-saint-elms-user-id'] = DEMO_USER_ID;
    headers['x-saint-elms-role'] = DEMO_ROLE;
    if (body && body.length > 0) headers['content-length'] = String(body.length);

    const upstream = https.request(
      { hostname: target.hostname, port: 443, path: req.url, method: req.method, headers },
      resolve,
    );
    upstream.on('error', reject);
    if (body && body.length > 0) upstream.end(body);
    else upstream.end();
  });
}

const server = http.createServer(async (req, res) => {
  try {
    const body = await readBody(req);
    let token = await getUpstreamToken();
    let upstreamRes = await requestUpstream(req, body, token);
    // A cached token can expire between requests: refresh once and retry on
    // auth-looking failures before surfacing anything to the visitor.
    if (upstreamRes.statusCode === 401 || upstreamRes.statusCode === 403) {
      upstreamRes.resume(); // drain the rejected response
      token = await getUpstreamToken(true);
      upstreamRes = await requestUpstream(req, body, token);
    }
    res.writeHead(upstreamRes.statusCode, upstreamRes.headers);
    upstreamRes.pipe(res);
  } catch (error) {
    console.error(`demo-proxy: ${req.method} ${req.url} failed: ${error.message}`);
    if (!res.headersSent) {
      res.writeHead(error.statusCode || 502, { 'Content-Type': 'text/plain' });
      res.end(error.statusCode === 413 ? 'request body too large' : 'demo proxy: upstream unavailable');
    } else {
      res.end();
    }
  }
});

server.listen(PORT, () => {
  console.log(`demo-proxy listening on :${PORT} -> ${TARGET} as ${DEMO_USER_ID}/${DEMO_ROLE}`);
});
