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
