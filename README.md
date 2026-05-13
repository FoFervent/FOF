# Fellowship of the Fervent — Landing Site

Static landing page for Fellowship of the Fervent (FoF), a Christian men's
ministry serving the Atlanta metro.

## Stack

- Plain HTML, no build step
- Tailwind CSS via the Play CDN with an inline theme extension
- Google Fonts: Cormorant Garamond (display) + Inter (body)
- Vanilla JS for nav, scroll reveals, and clipboard copy

## Project structure

```
docs/
├── index.html
└── assets/
    ├── css/styles.css
    ├── js/main.js
    └── img/favicon.svg
```

GitHub Pages will serve everything under `docs/` as the site root.

## Local preview

From the repo root:

```bash
python3 -m http.server 8000 --directory docs
# then open http://localhost:8000
```

Or with Node:

```bash
npx serve docs
```

## Deploying to GitHub Pages

1. Push this repo to `FoFervent/FOF` on the `main` branch.
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment**, set:
   - **Source:** Deploy from a branch
   - **Branch:** `main` · **Folder:** `/docs`
4. Save. The site will be published at:

   `https://fofervent.github.io/FOF/`

   First publish can take 1–2 minutes.

### Custom domain (optional)

If you'd like a custom domain (e.g. `fellowshipofthefervent.org`):

1. Add a `CNAME` file inside `docs/` containing only the domain.
2. In Settings → Pages add the custom domain and check **Enforce HTTPS**.
3. At your DNS provider, add a `CNAME` record pointing the domain to
   `fofervent.github.io`.

## Editing content

All copy lives in `docs/index.html`. Notable spots:

- **Hero & taglines** — first `<section id="top">`
- **About section** — `<section id="about">`
- **Four pillars** — `<section id="pillars">`
- **Weekly gathering & calendar CTA** — `<section id="gather">` (the
  "See This Week's Location" link currently has `href="#"` and is marked
  `data-placeholder="calendar-link"` — drop in the FoF calendar URL there)
- **Spring Conference 2026** — `<section id="conference">`
- **Love Offering / Zelle** — `<section id="give">`
- **Contact / footer** — `<footer>`

### Logo

The current monogram is an inline SVG placeholder in the header and footer.
When the real Fervent shield logo is available, save it to
`docs/assets/img/fervent-logo.svg` and replace the two inline `<svg>` blocks
(one in the nav, one in the footer) with:

```html
<img src="assets/img/fervent-logo.svg" alt="Fellowship of the Fervent" class="h-10 w-10" />
```

A larger version can also be dropped into the hero, above the wordmark.

## Production note on Tailwind

The site uses the Tailwind Play CDN for zero-config simplicity. For higher
polish (no FOUC, smaller payload), swap to a pre-built Tailwind file later:

```bash
npx tailwindcss -i ./src/input.css -o ./docs/assets/css/tailwind.css --minify
```

…and replace the `<script src="https://cdn.tailwindcss.com"></script>` with
`<link rel="stylesheet" href="assets/css/tailwind.css">`.
