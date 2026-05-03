# Portfolio

Senior frontend portfolio starter: **React**, **TypeScript**, **Ant Design**, **Vite**, **pnpm**.

## Scripts

```bash
pnpm install
pnpm dev
pnpm run build
pnpm run lint
```

## Deployment

This repo deploys to GitHub Pages with GitHub Actions.

1. Push to `main`
2. GitHub Actions builds the app and publishes `dist`
3. In GitHub `Settings -> Pages`, set `Source` to `GitHub Actions`

## Structure

- `src/app/router.tsx` — routes
- `src/components/appLayout/` — shell layout (header, nav, footer, i18n)
- `src/pages/` — page sections
- `src/data/` — typed content (e.g. projects)
- `src/theme/antdTheme.ts` — Ant Design tokens
