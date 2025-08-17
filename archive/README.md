# Archive Directory

This directory contains files and components that are not currently used in the production version but may be useful for future reference or development.

## Contents

### Backup Files
- `main.js.backup` - Original main.js before Vue compiler error fixes
- `main-with-i18n.js` - Version with i18n functionality
- `main-template-string.js` - Template string version
- `main-simple.js` - Simplified version for debugging
- `main-full.js` - Full featured version
- `main-sfc.js` - Single File Component approach
- `main-test.js` - Test version
- `App.vue` - Vue SFC component

### Development Tools
- `check_tags.js` - Script for checking HTML tag matching in templates

### Unused Components & Structure
- `components/` - Vue components (not used in current template string approach)
- `pages/` - Page components
- `layouts/` - Layout components
- `content/` - Content files
- `config/` - Configuration files
- `templates/` - Template files

### Documentation
- `PROJECT_STRUCTURE.md` - Original project structure documentation
- `Principle.md` - Development principles
- `index.html` - Alternative index file

## Current Production Setup

The current production version uses:
- `src/main.js` - Main application file with template string approach
- `src/locales/` - Translation files (English only currently used)
- `src/assets/` - CSS and image assets
- Direct template string in main.js instead of SFC components

## Vue Compiler Error #24 Solution

The files in this archive represent the evolution of solving Vue compiler error #24, which was caused by:
1. SVG `stroke-width` attributes (fixed to `strokeWidth`)
2. Chinese comments in templates (replaced with English)
3. Duplicate template structures (removed)
4. Tag nesting issues (corrected)

These archived files show the debugging process and various approaches attempted.
