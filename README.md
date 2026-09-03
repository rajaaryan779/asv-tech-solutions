# ASV Tech Solutions — Website

A single-page marketing site for ASV Tech Solutions (custom software, web & mobile app development).
Plain HTML/CSS/JS — no build step, no dependencies.

## Run it

Just open `index.html` in a browser. Or serve locally:

```bash
# Python
python -m http.server 5500
# then visit http://localhost:5500
```

## Structure

```
asv-tech-solutions/
├── index.html          # all markup / sections
├── privacy.html        # Privacy Policy (template — see notice at top)
├── terms.html          # Terms & Conditions (template — see notice at top)
├── assets/
│   ├── styles.css      # dark theme, gradient accents, responsive
│   ├── legal.css       # extra styles for privacy/terms pages
│   └── main.js         # nav, scroll reveal, form validation
└── README.md
```

## Legal pages

`privacy.html` and `terms.html` are **generic templates, not legal advice**. Before publishing:

1. Replace every `[bracketed]` placeholder (domain, address, entity name, jurisdiction, dates, retention periods, fee terms).
2. Align the Terms with your real client contracts / statements of work.
3. Have both reviewed by a qualified lawyer for the jurisdictions you operate in (GDPR / CCPA / India DPDP as applicable).
4. If you add analytics or a cookie banner, update the "Cookies & analytics" section to name the actual tools.

## What to customise

| Where | What |
|-------|------|
| `index.html` → `#contact` | Real email, phone, location (currently placeholders) |
| `index.html` → footer | Same contact details, social links |
| `index.html` → `#work` | Replace sample projects with real case studies |
| `index.html` → `.hero-stats` | Real numbers (products shipped, retention, etc.) |
| `assets/styles.css` → `:root` | Brand colours — `--brand`, `--brand-2`, `--brand-3`, `--grad` |
| `<title>` + `<meta description>` | SEO copy |

## Wiring the contact form

The form is front-end only. To actually receive messages, point it at a service:

**Formspree** — replace the `<form>` tag:
```html
<form class="contact-form" action="https://formspree.io/f/XXXXXXXX" method="POST">
```
and remove the `e.preventDefault()` block in `assets/main.js`.

## Deploy

- **Netlify / Vercel / Cloudflare Pages** — drag the folder in, or connect a Git repo. No build command; publish directory is the project root.
- **GitHub Pages** — push to a repo, enable Pages on the `main` branch root.
