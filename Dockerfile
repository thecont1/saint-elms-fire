# Saint Elms Fire production image for Cloud Run.
# Bun installs from bun.lock; Node builds and serves Next because Bun 1.3.14
# currently crashes inside Next/Turbopack on Linux containers.
FROM oven/bun:1.3-debian AS dependencies
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

FROM node:22-bookworm-slim AS build
WORKDIR /app

ARG NEXT_PUBLIC_GIT_COMMIT_SHA=dev
ENV NEXT_PUBLIC_GIT_COMMIT_SHA=$NEXT_PUBLIC_GIT_COMMIT_SHA

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN node ./node_modules/next/dist/bin/next build

FROM node:22-bookworm-slim AS runtime
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=8080

COPY --from=build /app/package.json /app/bun.lock ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=10s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:8080/health/live').then(response => { if (!response.ok) process.exit(1) }).catch(() => process.exit(1))"

USER node
CMD ["node", "node_modules/next/dist/bin/next", "start"]
