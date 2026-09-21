import fs from 'fs';
import path from 'path';
import vm from 'vm';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Set up virtual DOM/browser environment for script execution
const domElements = {};
const getOrCreateElement = (id) => {
  if (!domElements[id]) {
    domElements[id] = {
      id: id,
      className: '',
      classList: {
        _classes: new Set(),
        add(...c) { c.forEach(x => this._classes.add(x)); },
        remove(...c) { c.forEach(x => this._classes.delete(x)); },
        toggle(c, force) {
          if (force === undefined) {
            if (this._classes.has(c)) this._classes.delete(c);
            else this._classes.add(c);
          } else if (force) this._classes.add(c);
          else this._classes.delete(c);
        },
        contains(c) { return this._classes.has(c); }
      },
      textContent: '',
      setAttribute: (k, v) => {},
      appendChild: () => {},
      style: {}
    };
  }
  return domElements[id];
};

const docElement = {
  classList: {
    _classes: new Set(),
    add(...c) { c.forEach(x => this._classes.add(x)); },
    remove(...c) { c.forEach(x => this._classes.delete(x)); },
    toggle(c, force) {
      if (force === undefined) {
        if (this._classes.has(c)) this._classes.delete(c);
        else this._classes.add(c);
      } else if (force) this._classes.add(c);
      else this._classes.delete(c);
    },
    contains(c) { return this._classes.has(c); }
  }
};

const context = {
  console: console,
  setTimeout: setTimeout,
  clearTimeout: clearTimeout,
  setInterval: setInterval,
  clearInterval: clearInterval,
  navigator: { onLine: true, serviceWorker: { register: () => Promise.resolve() } },
  CustomEvent: class CustomEvent {
    constructor(type, options) {
      this.type = type;
      this.detail = options?.detail;
    }
  },
  window: {
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
    location: { reload: () => {} },
    scrollTo: () => {},
    matchMedia: (query) => ({
      matches: query.includes('dark') ? true : false,
      addEventListener: () => {}
    })
  },
  document: {
    documentElement: docElement,
    addEventListener: () => {},
    removeEventListener: () => {},
    getElementById: (id) => getOrCreateElement(id),
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: () => ({ setAttribute: () => {}, appendChild: () => {}, style: {} })
  },
  localStorage: {
    _data: {},
    getItem(k) { return this._data[k] !== undefined ? this._data[k] : null; },
    setItem(k, v) { this._data[k] = String(v); },
    removeItem(k) { delete this._data[k]; },
    clear() { this._data = {}; }
  }
};

globalThis.window = context.window;
globalThis.document = context.document;
globalThis.localStorage = context.localStorage;
globalThis.CustomEvent = context.CustomEvent;

await import('../src/app.js');
Object.assign(context, globalThis.window);

// Test theme setting
console.log('Testing setThemePreference...');
context.setThemePreference('dark');
if (!context.document.documentElement.classList.contains('dark')) {
  throw new Error('Dark mode class not added to documentElement!');
}
if (context.getThemePreference() !== 'dark') {
  throw new Error('Theme preference not saved in localStorage!');
}

context.setThemePreference('light');
if (context.document.documentElement.classList.contains('dark')) {
  throw new Error('Dark mode class not removed when switching to light!');
}

// Test settings toggles
console.log('Testing toggleUserSetting...');
const initialSound = context.getUserSetting('sound', true);
context.toggleUserSetting('sound');
if (context.getUserSetting('sound', true) === initialSound) {
  throw new Error('Sound setting was not toggled!');
}

const initialConfetti = context.getUserSetting('confetti', true);
context.toggleUserSetting('confetti');
if (context.getUserSetting('confetti', true) === initialConfetti) {
  throw new Error('Confetti setting was not toggled!');
}

// Test modal open and close
console.log('Testing modal open/close...');
context.openSettingsModal();
const modal = context.document.getElementById('settings-modal');
if (!modal.classList.contains('flex') || modal.classList.contains('hidden')) {
  throw new Error('Settings modal was not opened correctly!');
}
context.closeSettingsModal();
if (!modal.classList.contains('hidden') || modal.classList.contains('flex')) {
  throw new Error('Settings modal was not closed correctly!');
}

// Test User Dropdown & Unified Profile Header
console.log('Testing profile dropdown & auth UI states...');
context.currentUser = null;
globalThis.window.currentUser = null;
context.updateAuthHeaderUI();
const guestIcon = context.document.getElementById('guest-avatar-icon');
const userAvatar = context.document.getElementById('user-avatar-img');
const guestBlock = context.document.getElementById('dropdown-guest-block');
const signedInBlock = context.document.getElementById('dropdown-signed-in-block');

if (guestIcon.classList.contains('hidden')) {
  throw new Error('Guest icon should be visible when logged out!');
}
if (!userAvatar.classList.contains('hidden')) {
  throw new Error('User avatar should be hidden when logged out!');
}
if (guestBlock.classList.contains('hidden')) {
  throw new Error('Guest dropdown block should be visible when logged out!');
}
if (!signedInBlock.classList.contains('hidden')) {
  throw new Error('Signed-in dropdown block should be hidden when logged out!');
}

// Test logged in state
context.currentUser = { displayName: 'Arjun P', email: 'arjun@example.com', photoURL: 'https://example.com/arjun.jpg' };
globalThis.window.currentUser = context.currentUser;
context.updateAuthHeaderUI();
if (!guestIcon.classList.contains('hidden')) {
  throw new Error('Guest icon should be hidden when signed in!');
}
if (userAvatar.classList.contains('hidden')) {
  throw new Error('User avatar should be visible when signed in!');
}
if (!guestBlock.classList.contains('hidden')) {
  throw new Error('Guest dropdown block should be hidden when signed in!');
}
if (signedInBlock.classList.contains('hidden')) {
  throw new Error('Signed-in dropdown block should be visible when signed in!');
}

// Verify no duplicate settings buttons in HTML
console.log('Testing single settings entrypoint invariant...');
if (html.includes('id="header-settings-btn"')) {
  throw new Error('Duplicate header settings button still present in HTML!');
}
if (html.includes('id="mob-btn-settings"')) {
  throw new Error('Duplicate mobile nav settings button still present in HTML!');
}
if (!html.includes('id="auth-avatar-btn"')) {
  throw new Error('Unified auth avatar button not found in HTML!');
}

// Verify language switcher moved from header to settings modal
console.log('Testing language switcher placement invariant...');
if (html.includes('id="lang-switch-btn"')) {
  throw new Error('Header language switcher button (lang-switch-btn) still present in HTML!');
}
if (!html.includes('id="lang-btn-en"') || !html.includes('id="lang-btn-ml"')) {
  throw new Error('Language selector buttons (lang-btn-en / lang-btn-ml) missing in settings modal!');
}
if (!html.includes('id="settings-lang-badge"')) {
  throw new Error('settings-lang-badge missing in settings modal!');
}

// Test language switching in VM context
console.log('Testing setAppLanguage in VM context...');
context.setAppLanguage('ml');
if (context.getAppLanguage() !== 'ml') {
  throw new Error('Language preference was not saved to ml!');
}
if (context.document.documentElement.lang !== 'ml') {
  throw new Error('document.documentElement.lang was not set to ml!');
}

context.setAppLanguage('en');
if (context.getAppLanguage() !== 'en') {
  throw new Error('Language preference was not saved to en!');
}
if (context.document.documentElement.lang !== 'en') {
  throw new Error('document.documentElement.lang was not set to en!');
}

console.log('ALL SETTINGS, THEME, LANGUAGE & PROFILE TESTS PASSED PERFECTLY!');
process.exit(0);
