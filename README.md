# leilanilatimer.com

Redesign of leilanilatimer.com. Next.js (App Router) + Tailwind CSS v4 + shadcn/ui, with `motion` for animation.

## Develop

```bash
npm install
npm run dev
```

## Where things live

- `src/lib/content.ts`: all copy, board roles, stats, and thought-leadership links
- `src/app/globals.css`: brand palette (coral `#f08e80`, cream `#fdf0e6`, ink) and theme tokens
- `src/components/site/`: page sections; `src/components/ui/`: shadcn components
- `public/images`, `public/files`: photos, badges, article thumbnails, and the board bio PDF

## Contact form

The form posts JSON to `NEXT_PUBLIC_FORM_ENDPOINT` (for example a Formspree endpoint). Until that is set, submitting shows an error that points visitors to LinkedIn.

## Deploying to GitHub Pages

GitHub Pages serves the `main` branch, which holds only the built static site. The source lives on `claude/happy-shannon-mt9l1n`.

```bash
npm run build:pages
```

That writes the static site to `out/` with the `/leilani-latimer-site` base path. Copy its contents (plus an empty `.nojekyll` file) to the root of `main`. For a root domain such as leilanilatimer.com, use `npm run build` instead.
