const fs = require('fs');
const path = require('path');
const vm = require('vm');

const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error('FAIL: Could not locate <script> tag in index.html');
  process.exit(1);
}

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
  window: {
    addEventListener: () => {},
    removeEventListener: () => {},
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

vm.createContext(context);
vm.runInContext(scriptMatch[1], context);

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

console.log('ALL SETTINGS & THEME TESTS PASSED PERFECTLY!');
