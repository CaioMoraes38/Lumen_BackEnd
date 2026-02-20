# ─── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build && echo "=== Build OK ===" && ls dist/ || (echo "=== Build FAILED ===" && exit 1)

# ─── Stage 2: Production ───────────────────────────────────────────────────────
FROM node:22-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled output and Prisma generated client
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src/generated ./src/generated

EXPOSE 3000

CMD ["node", "dist/src/main"]
