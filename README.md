# Inspira AI — Marketing Site

Static marketing site for **Inspira AI**, a company that builds custom AI/ML products for businesses (RAG systems, document intelligence, predictive analytics, and applied LLM integrations).

Built with **React + Vite**, **Tailwind CSS**, **lucide-react**, and **Framer Motion**. Fully static — no backend or server required. Ready for Vercel or Netlify.

## Prerequisites

- Node.js 18+ (recommended)
- npm 9+

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL printed in the terminal (typically `http://localhost:5173`).

## Build for production

Create an optimized static build:

```bash
npm run build
```

Output lands in the `dist/` folder. Preview locally:

```bash
npm run preview
```

## Deploy

Upload the `dist/` directory to any static host, or connect the repo to:

- [Vercel](https://vercel.com) — framework preset: Vite
- [Netlify](https://www.netlify.com) — build command `npm run build`, publish directory `dist`
- [Cloudflare Pages](https://developers.cloudflare.com/pages/) — see below

### Cloudflare Pages (required settings)

A blank white page usually means Pages is serving the **source** `index.html` instead of the Vite build. In the Pages project settings, use:

| Setting | Value |
| --- | --- |
| Framework preset | None (or Vite) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | `/` (leave default) |
| Environment variable | `NODE_VERSION` = `22` |

Then **Retry deployment** (or push a new commit). After deploy, View Source in the browser should show scripts under `/assets/...`, **not** `/src/main.jsx`.

## Project structure

```
src/
  components/
    Navbar.jsx
    Hero.jsx
    Services.jsx
    CaseStudies.jsx
    Process.jsx
    WhyUs.jsx
    About.jsx
    CTABanner.jsx
    Footer.jsx
    FadeIn.jsx
    NetworkBackground.jsx
  App.jsx
  main.jsx
  index.css
public/
  logo.png
```

## Customization notes

- **Logo**: replace `public/logo.png`
- **Case studies**: edit placeholders in `src/components/CaseStudies.jsx`
- **Contact**: CTA uses `mailto:hello@inspira.ai` — update the address as needed
- **Theme**: colors and fonts are extended in `tailwind.config.js`
