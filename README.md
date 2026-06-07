# UCYX Website

UCYX is a Greater Bay Area-based full-stack market entry support service partner for Chinese brands going overseas. The site is a Vite + Vue 3 single-page website focused on market entry strategy, entry design, entry delivery, and entry evaluation.

## Current Site Narrative

- **Primary audience**: Chinese brands and cross-border sellers preparing for overseas market entry.
- **Core positioning**: Global Market Entry All-stack Services for Chinese brands going overseas.
- **Service stack**:
  - Market Entry Strategy
  - Entry Design
  - Entry Delivery
  - Entry Evaluation & ROI
- **Ecosystem language**: Service ecosystem references explain capability coverage and do not imply formal relationship status. Keep the application channel for ecosystem conversations.

## Tech Stack

- Vue 3
- Vite
- Static deployment, with Vercel SPA fallback configured in `vercel.json`
- Locale JSON files for English, Simplified Chinese, and Traditional Chinese

## Project Structure

```text
ucyx/
├── index.html
├── public/
│   ├── favicon.svg
│   └── site.webmanifest
├── scripts/
│   ├── pre-deploy-check.js
│   └── validate-translations.js
├── src/
│   ├── App.vue
│   ├── main.js
│   ├── assets/css/
│   │   ├── variables.css
│   │   ├── components.css
│   │   ├── modern-style.css
│   │   └── mobile-all.css
│   └── locales/
│       ├── en.json
│       ├── zh-CN.json
│       └── zh-TW.json
├── package.json
└── vite.config.js
```

## Development

```bash
npm install
npm run dev
npm run build
npm run preview
```

The Vite dev server is configured to run on port `3001`.

## Content Updates

Update all three locale files when changing site copy:

- `src/locales/en.json`
- `src/locales/zh-CN.json`
- `src/locales/zh-TW.json`

Then validate structure:

```bash
npm run validate-translations
```

## Design Direction

The visual system uses black, white, gray, and tech green. The site should feel like a practical full-stack market entry support service partner: precise, credible, international, and execution-oriented.

Open Design is used as a rules and resource library rather than as a homepage reference. UCYX borrows Shopify's ecommerce growth staging, Wise's cross-border clarity, Stripe's structured infrastructure trust, image-led business scenes, the shared font stack, and restrained motion rules only where they help explain the business. See `docs/UCYX_DESIGN_SYSTEM.md`.

Text should support the visual story, not carry the whole page. Diagrams and structured modules must explain market entry service delivery: audience image cards, the interactive market entry path, concrete step visuals, and discrete ecosystem coverage playback. Avoid decorative blobs, orbit visuals, fake scores, artificial percentages, and tag-heavy sections.

## Deployment Checks

```bash
npm run deploy
```

This builds the site and runs `scripts/pre-deploy-check.js` to verify the generated `dist/`, manifest, Vercel config, and known SVG path issues.
