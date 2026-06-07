# Multilingual Quick Reference

## Active Languages

- `en` - English
- `zh-CN` - 简体中文
- `zh-TW` - 繁體中文

## Common Workflow

1. Edit `src/locales/en.json` first.
2. Mirror the same key structure in `src/locales/zh-CN.json`.
3. Mirror the same key structure in `src/locales/zh-TW.json`.
4. Run validation.
5. Check the language switcher in the browser.

```bash
npm run validate-translations
npm run build
```

## What Not To Do

- Do not add back Japanese, Korean, or Vietnamese as active locales in this phase.
- Do not add inline translation data to JavaScript.
- Do not use direct partner claims like "official partner" unless the business relationship and logo permission are confirmed.

## Useful Copy Anchors

- Main positioning: Global Market Entry All-stack Services for Chinese brands going overseas.
- Primary CTA: Book a Market Entry Diagnostic.
- Ecosystem CTA: Join the UCYX ecosystem network.
- Ecosystem section label: Service ecosystem coverage.
- NovoChoice CTA: Visit NovoChoice.com / 访问 NovoChoice.com / 訪問 NovoChoice.com.
