import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Focus Sprint Overlay & App Minimization Invariants', () => {
  const appJsPath = path.resolve(__dirname, '../src/app.js');
  const indexPath = path.resolve(__dirname, '../index.html');
  const styleCssPath = path.resolve(__dirname, '../src/style.css');

  it('scaffolds focus overlay containers in index.html', () => {
    const indexContent = fs.readFileSync(indexPath, 'utf8');
    expect(indexContent).toContain('id="focus-overlay-container"');
    expect(indexContent).toContain('id="focus-overlay-compact"');
    expect(indexContent).toContain('id="focus-overlay-maximized"');
    expect(indexContent).toContain('id="focus-overlay-backdrop"');
  });

  it('declares app minimization styling in src/style.css', () => {
    const styleContent = fs.readFileSync(styleCssPath, 'utf8');
    expect(styleContent).toContain('body.app-minimized-focus-mode');
    expect(styleContent).toContain('focus-overlay-active-glow');
    expect(styleContent).toContain('filter: blur(10px)');
  });

  it('minimizes the app and displays the overlay when focus is started', () => {
    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    expect(appJsContent).toContain("document.body.classList.add('app-minimized-focus-mode')");
    expect(appJsContent).toContain('openFocusOverlay');
    expect(appJsContent).toContain('focusOverlayState');
  });

  it('provides a maximize option with expand icon on the compact overlay', () => {
    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    expect(appJsContent).toContain('maximizeFocusOverlay()');
    expect(appJsContent).toContain('fa-expand');
  });

  it('provides a small close option with xmark icon on the overlay', () => {
    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    expect(appJsContent).toContain('closeFocusOverlay()');
    expect(appJsContent).toContain('fa-xmark');
  });

  it('provides an Open Full App option in the maximized focus timer', () => {
    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    expect(appJsContent).toContain('restoreFullApp()');
    expect(appJsContent).toMatch(/Open Full App/i);
    expect(appJsContent).toContain('fa-arrow-up-right-from-square');
  });

  it('removes app minimization and restores app when restoreFullApp or closeFocusOverlay is called', () => {
    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    expect(appJsContent).toContain("document.body.classList.remove('app-minimized-focus-mode')");
  });

  it('exports focus overlay controllers to window for UI onclick integration', () => {
    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    expect(appJsContent).toContain('openFocusOverlay,');
    expect(appJsContent).toContain('closeFocusOverlay,');
    expect(appJsContent).toContain('maximizeFocusOverlay,');
    expect(appJsContent).toContain('minimizeFocusOverlay,');
    expect(appJsContent).toContain('restoreFullApp,');
    expect(appJsContent).toContain('toggleOverlayTimer,');
    expect(appJsContent).toContain('completeTaskFromOverlay,');
  });
});
