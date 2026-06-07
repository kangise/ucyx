# UCYX Multilingual System

The production site now uses locale JSON files imported directly by `src/App.vue`. The older inline `language.js` approach has been removed to avoid dual-track translation maintenance.

## Active Locales

```text
src/locales/
├── en.json
├── zh-CN.json
└── zh-TW.json
```

The site intentionally focuses on English, Simplified Chinese, and Traditional Chinese:

- English: international stakeholders, overseas ecosystem readers, and brand teams operating globally
- Simplified Chinese: mainland Chinese cross-border brands
- Traditional Chinese: Greater Bay Area, Hong Kong, Taiwan, and overseas Chinese readers

## How It Works

- `src/App.vue` imports all three locale JSON files.
- The active language is stored in `localStorage` under `ucyx-language`.
- Language switching updates the visible copy, document language, page title, and meta description.
- Navigation and section content are driven from the same locale structure across all languages.

## Updating Copy

When editing site copy, update all three files:

```text
src/locales/en.json
src/locales/zh-CN.json
src/locales/zh-TW.json
```

Then validate:

```bash
npm run validate-translations
```

The validator checks that all three locale files are valid JSON and structurally aligned with `en.json`.

## Rules

- Keep the same keys in all locale files.
- Keep arrays aligned by intent, not necessarily by exact literal translation.
- Keep ecosystem wording conservative: explain capability coverage, avoid official status claims, and keep formal relationship details out of the public list unless legal/logo permission is confirmed.
- Do not reintroduce `src/assets/js/language.js` or additional active locale files without updating the app and docs together.
