# Fast News Network

A Next.js (App Router + TypeScript + Tailwind CSS) starter for the Fast News Network site — a news-outlet-style layout (breaking news ticker, category nav, hero story, headline grid) with placeholder content, ready to iterate on and deploy.

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import this GitHub repository (`nipote-gabriel/fastnewsnetwork-com`).
2. Vercel auto-detects the Next.js framework — no configuration needed.
3. Click **Deploy**.

Every push to the default branch will trigger a new production deployment; pushes to other branches/PRs get preview deployments automatically.

## Project structure

- `app/layout.tsx` — root layout and global metadata
- `app/page.tsx` — homepage (hero story, headline grid, sidebar, footer)
- `app/globals.css` — Tailwind base styles
- `tailwind.config.ts` — brand color tokens

All headlines and images are placeholders — swap them for real content/CMS data before launch.
