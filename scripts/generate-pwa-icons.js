import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const SOURCE_ICON = path.resolve('icon.png');
const PUBLIC_DIR = path.resolve('public');
const ICONS_DIR = path.join(PUBLIC_DIR, 'icons');

if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

async function generateIcons() {
  console.log('Generating production-grade PWA icons from:', SOURCE_ICON);

  // 1. Standard Icons (purpose: "any")
  await sharp(SOURCE_ICON)
    .resize(192, 192, { fit: 'contain', background: { r: 37, g: 99, b: 235, alpha: 0 } })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(ICONS_DIR, 'icon-192.png'));
  console.log('Created icon-192.png');

  await sharp(SOURCE_ICON)
    .resize(512, 512, { fit: 'contain', background: { r: 37, g: 99, b: 235, alpha: 0 } })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(ICONS_DIR, 'icon-512.png'));
  console.log('Created icon-512.png');

  // 2. Adaptive Maskable Icons with 15% safe padding (purpose: "maskable")
  // Android WebAPK circular/squircle mask cuts off outer 20%, so inner icon must be centered in safe zone
  const inner192 = await sharp(SOURCE_ICON)
    .resize(150, 150, { fit: 'contain' })
    .toBuffer();

  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: { r: 37, g: 99, b: 235, alpha: 1 }, // #2563eb
    },
  })
    .composite([{ input: inner192, gravity: 'center' }])
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(ICONS_DIR, 'icon-maskable-192.png'));
  console.log('Created icon-maskable-192.png (with Android adaptive safe-zone)');

  const inner512 = await sharp(SOURCE_ICON)
    .resize(400, 400, { fit: 'contain' })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 37, g: 99, b: 235, alpha: 1 },
    },
  })
    .composite([{ input: inner512, gravity: 'center' }])
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(ICONS_DIR, 'icon-maskable-512.png'));
  console.log('Created icon-maskable-512.png (with Android adaptive safe-zone)');

  // 3. Apple Touch Icon (180x180)
  await sharp(SOURCE_ICON)
    .resize(180, 180, { fit: 'contain', background: { r: 37, g: 99, b: 235, alpha: 1 } })
    .png({ quality: 90 })
    .toFile(path.join(ICONS_DIR, 'apple-touch-icon.png'));
  console.log('Created apple-touch-icon.png');

  // 4. Favicon 32x32
  await sharp(SOURCE_ICON)
    .resize(32, 32, { fit: 'contain' })
    .png({ quality: 90 })
    .toFile(path.join(ICONS_DIR, 'favicon-32.png'));
  console.log('Created favicon-32.png');

  // Also write optimized 192/512 to root for non-Vite fallback compatibility
  fs.copyFileSync(path.join(ICONS_DIR, 'icon-192.png'), path.resolve('icon-192.png'));
  fs.copyFileSync(path.join(ICONS_DIR, 'icon-512.png'), path.resolve('icon-512.png'));
  fs.copyFileSync(path.join(ICONS_DIR, 'icon-maskable-192.png'), path.resolve('icon-maskable-192.png'));
  fs.copyFileSync(path.join(ICONS_DIR, 'icon-maskable-512.png'), path.resolve('icon-maskable-512.png'));

  console.log('ALL PWA ICONS GENERATED SUCCESSFULLY!');
}

generateIcons().catch((err) => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
