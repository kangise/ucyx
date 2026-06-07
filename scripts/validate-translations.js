#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const localesDir = path.join(__dirname, '../src/locales')
const expectedLocales = ['en.json', 'zh-CN.json', 'zh-TW.json']

function collectKeys(value, prefix = '') {
  if (Array.isArray(value)) return [prefix]
  if (!value || typeof value !== 'object') return [prefix]

  return Object.keys(value).flatMap((key) => {
    const nextPrefix = prefix ? `${prefix}.${key}` : key
    return collectKeys(value[key], nextPrefix)
  })
}

const loaded = new Map()

for (const locale of expectedLocales) {
  const filePath = path.join(localesDir, locale)
  if (!fs.existsSync(filePath)) {
    console.error(`Missing locale file: ${locale}`)
    process.exit(1)
  }

  try {
    loaded.set(locale, JSON.parse(fs.readFileSync(filePath, 'utf8')))
  } catch (error) {
    console.error(`Invalid JSON in ${locale}: ${error.message}`)
    process.exit(1)
  }
}

const baseKeys = collectKeys(loaded.get('en.json')).sort()

for (const [locale, content] of loaded) {
  const localeKeys = collectKeys(content).sort()
  const missing = baseKeys.filter((key) => !localeKeys.includes(key))
  const extra = localeKeys.filter((key) => !baseKeys.includes(key))

  if (missing.length || extra.length) {
    console.error(`Locale key mismatch in ${locale}`)
    if (missing.length) console.error(`  Missing: ${missing.join(', ')}`)
    if (extra.length) console.error(`  Extra: ${extra.join(', ')}`)
    process.exit(1)
  }
}

console.log('Translation files are valid and structurally aligned.')
