# UCYX Website

AI-Driven Global E-commerce Consultancy Website built with Vue.js and modern web technologies.

## 🚀 Features

- **Modern Vue.js Architecture**: Component-based development with Vue 3
- **Internationalization**: Multi-language support (EN, ZH-CN, ZH-TW, JA)
- **Static Site Generation**: Fast loading with pre-generated pages
- **Blog System**: Markdown-based blog with automatic page generation
- **Responsive Design**: Mobile-first approach with modern CSS
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Modular CSS**: Organized with CSS variables and component-based styles

## 📁 Project Structure

```
ucyx.com/
├── src/
│   ├── assets/
│   │   ├── css/           # Stylesheets
│   │   ├── images/        # Images and media
│   │   └── js/            # JavaScript utilities
│   ├── components/        # Vue components
│   │   ├── blog/          # Blog-specific components
│   │   └── common/        # Shared components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Page components
│   ├── locales/           # Translation files
│   ├── config/            # Configuration files
│   └── content/           # Content (blog posts, etc.)
├── build/                 # Build scripts
├── dist/                  # Generated static files
└── package.json
```

## 🛠️ Development

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Adding New Pages

1. Create a new Vue component in `src/pages/`
2. Add route configuration in `src/main.js`
3. Update navigation in `src/config/site.config.js`
4. Add translations in `src/locales/`

### Adding Blog Posts

1. Create a new Markdown file in `src/content/blog/`
2. Add frontmatter with title, date, category, etc.
3. Run build process to generate static pages

Example blog post:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
category: "Category"
tags: ["tag1", "tag2"]
excerpt: "Brief description of the post"
---

# Your Blog Post Content

Write your content here in Markdown format.
```

## 🌍 Internationalization

### Adding New Languages

1. Create new translation file in `src/locales/` (e.g., `fr.json`)
2. Update language list in `src/config/site.config.js`
3. Add language detection logic in `src/config/i18n.config.js`

### Updating Translations

Edit the JSON files in `src/locales/` directory. Changes will be reflected immediately in development mode.

## 🎨 Styling

### CSS Architecture

- **Variables**: Global design tokens in `src/assets/css/variables.css`
- **Components**: Reusable component styles in `src/assets/css/components.css`
- **Main**: Base styles and utilities in `src/assets/css/main.css`

### Adding New Styles

1. Use CSS variables for consistency
2. Follow BEM naming convention for classes
3. Add component-specific styles in Vue SFC `<style>` blocks
4. Update global styles in the CSS files

## 📱 Responsive Design

The website uses a mobile-first approach with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Site Configuration

Edit `src/config/site.config.js` to update:

- Navigation structure
- Footer links
- Page metadata
- Language settings

### Build Configuration

Edit `vite.config.js` for:

- Build optimization
- Asset handling
- Development server settings

## 📈 Performance

### Optimization Features

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Lazy loading and responsive images
- **CSS Optimization**: Purged unused styles in production
- **JavaScript Minification**: Compressed JS bundles
- **Caching**: Optimized caching headers

### Performance Monitoring

The site includes built-in performance monitoring that logs:

- Page load times
- Resource loading performance
- Core Web Vitals metrics

## 🚀 Deployment

### Static Hosting

The built site in `dist/` folder can be deployed to:

- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

### Build Process

```bash
# Production build
npm run build

# The dist/ folder contains all static files ready for deployment
```

### Environment Variables

Create `.env` file for environment-specific settings:

```env
VITE_API_URL=https://api.ucyx.com
VITE_ANALYTICS_ID=your-analytics-id
```

## 🧪 Testing

```bash
# Run tests (when implemented)
npm run test

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📝 Content Management

### Blog Management

Blog posts are managed through Markdown files in `src/content/blog/`. The build process automatically:

1. Parses frontmatter metadata
2. Converts Markdown to HTML
3. Generates individual post pages
4. Creates blog listing pages
5. Updates navigation and sitemaps

### Content Updates

1. **Text Changes**: Update translation files in `src/locales/`
2. **Images**: Add to `src/assets/images/` and reference in components
3. **New Sections**: Create new Vue components and add to page layouts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

Copyright © 2024 UCYX. All rights reserved.

## 📞 Support

For technical support or questions:

- Email: tech@ucyx.com
- Documentation: [Internal Wiki]
- Issues: [GitHub Issues]
