# Deploying LissanAI

## Vercel (Recommended)
1. Push code to GitHub
2. Import repository at vercel.com/new
3. Set environment variables (see `.env.example`)
4. Click Deploy – live in ~2 minutes

## Docker (Self-Hosted)
```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
docker build -t lissanai .
docker run -p 3000:3000 --env-file .env.local lissanai
```

## Required Environment Variables
| Variable | Description |
|----------|-------------|
| `NEXTAUTH_URL` | Production URL |
| `NEXTAUTH_SECRET` | 32-char random secret |
| `OPENAI_API_KEY` | OpenAI API key |
| `DATABASE_URL` | PostgreSQL connection string |
