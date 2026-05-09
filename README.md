# Karan Pratap Singh — Editorial Portfolio

An editorial / Swiss-Modernism portfolio built with Next.js 14, Tailwind, Framer Motion and Lenis.

## Stack
- Next.js 14 (App Router) · TypeScript
- Tailwind CSS + custom HSL design tokens
- Framer Motion (reveals) · Lenis (smooth scroll)
- shadcn/ui primitives (Button, Input, Textarea)
- MongoDB (contact form persistence)

## Local development
```bash
yarn install
cp .env.example .env
# fill MONGO_URL & DB_NAME
yarn dev
```

App runs at `http://localhost:3000`. Contact API at `POST /api/contact`.

## Deploy to Vercel
1. Push the repo to GitHub
2. Import into Vercel (`vercel.com/new`)
3. Add env vars: `MONGO_URL`, `DB_NAME` (point MongoDB Atlas)
4. Deploy — `next build` runs automatically

## Project structure
```
app/
├─ api/[[...path]]/route.ts   # Catch-all REST API (contact, health)
├─ globals.css                # Design tokens + tiny utilities
├─ layout.tsx                 # Root layout + theme provider
└─ page.tsx                   # Editorial single-page portfolio

components/
├─ theme-provider.tsx
└─ ui/                        # shadcn primitives (Button, Input, Textarea)

lib/utils.ts                  # cn() helper
```

## Design system
- **Display**: Fraunces (variable serif)
- **Body**: Inter
- **Meta**: JetBrains Mono
- **Accent**: terracotta `hsl(16 78% 40%)`
- **Paper**: warm cream `hsl(38 33% 95%)`
- Light/Dark variants share the same scale.

Built with data, design & curiosity.
