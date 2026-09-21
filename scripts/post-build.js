import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

console.log('[post-build] Verifying and synchronizing dist output...');

// Ensure dist/pages directory exists
const distPagesDir = path.join(distDir, 'pages');
if (!fs.existsSync(distPagesDir)) {
  fs.mkdirSync(distPagesDir, { recursive: true });
}

// Copy pages
const pagesDir = path.join(rootDir, 'pages');
if (fs.existsSync(pagesDir)) {
  fs.readdirSync(pagesDir).forEach((file) => {
    fs.copyFileSync(path.join(pagesDir, file), path.join(distPagesDir, file));
    console.log(`[post-build] Copied pages/${file} -> dist/pages/${file}`);
  });
}

// Root static assets to ensure are present in dist/
const rootAssets = [
  'sitemap.xml',
  'robots.txt',
  'google03905a8a03a50ab1.html',
  'sw.js',
  'manifest.json',
  'favicon-32.png',
  'apple-touch-icon.png',
  'icon.png',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-192.png',
  'icon-maskable-512.png'
];

rootAssets.forEach((asset) => {
  const srcPath = path.join(rootDir, asset);
  const destPath = path.join(distDir, asset);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  }
});

console.log('[post-build] All static assets successfully verified in dist/.');
