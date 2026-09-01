# saint-elms-demo-proxy — stateless reverse proxy, no build step, no deps.
FROM node:22-alpine
WORKDIR /app
COPY server.js .
# Cloud Run injects PORT; the server reads it (default 8080).
CMD ["node", "server.js"]
