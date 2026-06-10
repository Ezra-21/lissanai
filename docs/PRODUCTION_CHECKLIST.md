# Production Deployment Checklist

## Before Deploy
- [ ] All env vars set in Vercel dashboard
- [ ] `NEXTAUTH_SECRET` is a strong 32+ char random string
- [ ] `DATABASE_URL` points to production database
- [ ] OpenAI API key has sufficient credits
- [ ] Rate limiting values reviewed for production load

## After Deploy
- [ ] Smoke test all 5 core features
- [ ] Check Vercel function logs for errors
- [ ] Verify CORS headers on API routes
- [ ] Test from mobile device (iOS Safari + Android Chrome)
- [ ] Confirm email delivery (registration, password reset)

## Monitoring
- [ ] Set up Vercel deployment alerts
- [ ] Configure uptime monitoring (e.g., BetterUptime)
- [ ] Review error rate in admin analytics dashboard
