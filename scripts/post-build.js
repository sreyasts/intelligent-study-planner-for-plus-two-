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
  'favicon.ico',
  'icon-48.png',
  'icon-96.png',
  'favicon-32.png',
  'apple-touch-icon.png',
  'icon.png',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable-192.png',
  'icon-maskable-512.png',
  'og-image.png',
  '404.html'
];

rootAssets.forEach((asset) => {
  const srcPath = path.join(rootDir, asset);
  const destPath = path.join(distDir, asset);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
  }
});

// Copy screenshot assets to dist/assets/screenshots
const srcScreenshotsDir = path.join(rootDir, 'assets', 'screenshots');
const distScreenshotsDir = path.join(distDir, 'assets', 'screenshots');
if (fs.existsSync(srcScreenshotsDir)) {
  if (!fs.existsSync(distScreenshotsDir)) {
    fs.mkdirSync(distScreenshotsDir, { recursive: true });
  }
  fs.readdirSync(srcScreenshotsDir).forEach((file) => {
    fs.copyFileSync(path.join(srcScreenshotsDir, file), path.join(distScreenshotsDir, file));
    console.log(`[post-build] Copied screenshot: ${file} -> dist/assets/screenshots/${file}`);
  });
}

// Also copy icon assets into dist/assets for relative resolution from nested bundles
const distAssetsDir = path.join(distDir, 'assets');
if (fs.existsSync(distAssetsDir)) {
  ['icon-192.png', 'icon-512.png', 'icon.png', 'icon-maskable-192.png', 'icon-maskable-512.png', 'og-image.png'].forEach((icon) => {
    const srcPath = path.join(rootDir, icon);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, path.join(distAssetsDir, icon));
    }
  });
}

console.log('[post-build] All static assets successfully verified in dist/.');
