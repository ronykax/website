# ---------- deps ----------
FROM oven/bun:1.1-alpine AS deps
WORKDIR /app

COPY bun.lockb package.json ./
RUN bun install --frozen-lockfile

# ---------- build ----------
FROM oven/bun:1.1-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN bun run build

# ---------- runner ----------
FROM oven/bun:1.1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["bun", "run", "server.js"]
