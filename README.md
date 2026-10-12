# River Racing

Independent discovery index for competitive water sports. The launch build focuses on the Ohio River corridor and Oklahoma City and preserves an authoritative source and verification date for every record.

## Local development

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` and set a strong `ADMIN_PASSWORD` to enable `/admin`. Public browsing never requires authentication.

## Data and discovery

The launch dataset is a source-traceable TypeScript store in `src/data/events.ts`. Visitor search reads this cache and never invokes an AI API. `GEMINI_API_KEY` is reserved for a later, rate-limited discovery job; no Gemini workflow is claimed active in this release.

Production hardening should move records and verification history into PostgreSQL, add a scheduled discovery queue, and add authenticated moderation writes.

## Deploy

Import the repository into Vercel, set `ADMIN_PASSWORD`, and deploy. Add `riverracing.org` only after the generated Vercel URL has passed smoke testing. Use the exact DNS records Vercel presents.
