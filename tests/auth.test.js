import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Authentication & Service Worker Invariants', () => {
  const appJsPath = path.resolve(__dirname, '../src/app.js');
  const swJsPath = path.resolve(__dirname, '../sw.js');
  const publicSwJsPath = path.resolve(__dirname, '../public/sw.js');

  it('declares authModalTimer at module scope in src/app.js', () => {
    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    // Ensure let authModalTimer = null is explicitly declared
    expect(appJsContent).toMatch(/let\s+authModalTimer\s*=\s*null;/);

    // Ensure authModalTimer is cleared properly
    expect(appJsContent).toContain('clearTimeout(authModalTimer)');
  });

  it('declares all local UI state variables in signInWithGoogle prior to try/catch', () => {
    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    const signInIdx = appJsContent.indexOf('async function signInWithGoogle(');
    expect(signInIdx).toBeGreaterThan(0);

    const signInBlock = appJsContent.slice(signInIdx, signInIdx + 1500);
    expect(signInBlock).toMatch(/const\s+modalBtn\s*=\s*document\.getElementById/);
    expect(signInBlock).toMatch(/const\s+headerBtn\s*=\s*document\.getElementById/);
    expect(signInBlock).toMatch(/const\s+originalModalBtnHTML/);
    expect(signInBlock).toMatch(/const\s+originalHeaderBtnHTML/);
  });

  it('keeps root sw.js and public/sw.js cache versions in lockstep', () => {
    const swContent = fs.readFileSync(swJsPath, 'utf8');
    const publicSwContent = fs.readFileSync(publicSwJsPath, 'utf8');

    const swCacheMatch = swContent.match(/const CACHE_NAME = '([^']+)';/);
    const publicSwCacheMatch = publicSwContent.match(/const CACHE_NAME = '([^']+)';/);

    expect(swCacheMatch).not.toBeNull();
    expect(publicSwCacheMatch).not.toBeNull();
    expect(swCacheMatch[1]).toBe(publicSwCacheMatch[1]);
    expect(swCacheMatch[1]).toBe('plustwo-mission-v6.3');
  });

  it('ensures service worker deletes obsolete caches on activation', () => {
    const swContent = fs.readFileSync(swJsPath, 'utf8');
    expect(swContent).toContain('keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))');
    expect(swContent).toContain('self.clients.claim()');
  });
});
