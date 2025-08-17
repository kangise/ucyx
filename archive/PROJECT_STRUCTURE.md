# UCYX Project Structure

## 🚀 Current Active Files

### Main Entry Points
- `index.html` - Root HTML file (production entry)
- `src/index.html` - Development HTML file
- `src/main.js` - **Main Vue.js application file** (fully internationalized)

### Key Directories
- `src/locales/` - Translation files (en.json, zh-CN.json, etc.)
- `src/config/` - Configuration files (i18n, site config)
- `src/assets/` - CSS, images, and other assets
- `src/components/` - Vue components
- `src/pages/` - Page components
- `src/layouts/` - Layout templates

### Build & Config
- `vite.config.js` - Vite build configuration
- `package.json` - Dependencies and scripts
- `build/` - Build scripts

## 📁 Archived Files

All unused/backup files have been moved to `archive/` directory:
- `main-old.js` - Previous main file with hardcoded text
- `main-shopify.js` - Shopify-specific version
- `main-simple.js` - Simplified version
- `main-clean.js` - Clean version
- `main-component.js` - Component-based version
- `main-json.js` - JSON-based version
- `main-test.js` - Test version
- `TestApp.vue` - Test Vue component
- Various HTML backups and CSS files

## 🌍 Internationalization Status

✅ **Completed**: All hardcoded text has been moved to translation files
- Navigation menus
- Page content
- Form labels and placeholders
- Alert messages
- Meta tags (with dynamic update functionality)

## 🛠️ Development

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

## 📝 Notes

- Main application is now fully internationalized
- All backup files are safely stored in `archive/`
- Current structure is clean and maintainable
- Ready for multi-language expansion
