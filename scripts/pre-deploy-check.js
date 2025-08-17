#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Running pre-deployment checks...\n');

// Check 1: Verify dist directory exists
const distPath = path.join(__dirname, '../dist');
if (!fs.existsSync(distPath)) {
    console.error('❌ dist directory not found. Run npm run build first.');
    process.exit(1);
}
console.log('✅ dist directory exists');

// Check 2: Verify index.html exists
const indexPath = path.join(distPath, 'index.html');
if (!fs.existsSync(indexPath)) {
    console.error('❌ index.html not found in dist directory.');
    process.exit(1);
}
console.log('✅ index.html exists');

// Check 3: Check for SVG path issues in built files
const jsFiles = fs.readdirSync(path.join(distPath, 'assets')).filter(f => f.endsWith('.js'));
let svgIssueFound = false;

for (const jsFile of jsFiles) {
    const content = fs.readFileSync(path.join(distPath, 'assets', jsFile), 'utf8');
    if (content.includes('21 21l-4.35-4.35') && !content.includes('M21 21l-4.35-4.35')) {
        console.error(`❌ SVG path issue found in ${jsFile}`);
        svgIssueFound = true;
    }
}

if (!svgIssueFound) {
    console.log('✅ No SVG path issues found');
}

// Check 4: Verify manifest file
const manifestPath = path.join(__dirname, '../public/site.webmanifest');
if (!fs.existsSync(manifestPath)) {
    console.error('❌ site.webmanifest not found in public directory.');
    process.exit(1);
}

try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    if (!manifest.name || !manifest.short_name) {
        console.error('❌ Invalid manifest file structure.');
        process.exit(1);
    }
    console.log('✅ Manifest file is valid');
} catch (error) {
    console.error('❌ Manifest file has syntax errors:', error.message);
    process.exit(1);
}

// Check 5: Verify Vercel config
const vercelPath = path.join(__dirname, '../vercel.json');
if (!fs.existsSync(vercelPath)) {
    console.error('❌ vercel.json not found.');
    process.exit(1);
}

try {
    const vercelConfig = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
    if (!vercelConfig.rewrites || !Array.isArray(vercelConfig.rewrites)) {
        console.error('❌ Invalid vercel.json structure.');
        process.exit(1);
    }
    console.log('✅ Vercel config is valid');
} catch (error) {
    console.error('❌ Vercel config has syntax errors:', error.message);
    process.exit(1);
}

console.log('\n🎉 All pre-deployment checks passed!');
console.log('📦 Ready for deployment to Vercel');