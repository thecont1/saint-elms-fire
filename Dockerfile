# Dockerfile for Saint Elms Fire (Production portable deployment)
# Deployable to Google Cloud Run, Fly.io, or standard container host

FROM oven/bun:1.3-alpine AS base
WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js application
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
RUN bun run build

EXPOSE 3000
CMD ["bun", "run", "start"]
