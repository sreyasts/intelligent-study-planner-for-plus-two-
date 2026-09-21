import { describe, it, expect, beforeEach, afterAll } from 'vitest';
import {
  detectMalayalamEnvironment,
  getCurrentLanguage,
  setLanguagePreference,
  STORAGE_KEY_LANG,
} from '../src/i18n/detector.js';
import { ML_STRINGS } from '../src/i18n/ml.js';

describe('i18n Language & Browser Translation Auto-Detector', () => {
  let mockStorage = {};
  let mockDocElement = {
    lang: 'en',
    classList: {
      _classes: new Set(),
      contains(c) { return this._classes.has(c); },
      add(c) { this._classes.add(c); },
      remove(c) { this._classes.delete(c); },
    }
  };

  const mockLocalStorage = {
    getItem(k) { return mockStorage[k] || null; },
    setItem(k, v) { mockStorage[k] = String(v); },
    removeItem(k) { delete mockStorage[k]; },
    clear() { mockStorage = {}; }
  };

  let mockLanguages = ['en-US', 'en'];

  beforeEach(() => {
    mockStorage = {};
    mockDocElement.lang = 'en';
    mockDocElement.classList._classes.clear();
    mockLanguages = ['en-US', 'en'];

    Object.defineProperty(globalThis, 'window', {
      value: { localStorage: mockLocalStorage },
      writable: true,
      configurable: true
    });

    Object.defineProperty(globalThis, 'localStorage', {
      value: mockLocalStorage,
      writable: true,
      configurable: true
    });

    Object.defineProperty(globalThis, 'document', {
      value: {
        documentElement: mockDocElement,
        querySelector: () => null,
        body: { innerText: '' }
      },
      writable: true,
      configurable: true
    });

    if (!globalThis.navigator || typeof globalThis.navigator !== 'object') {
      Object.defineProperty(globalThis, 'navigator', {
        value: {},
        writable: true,
        configurable: true
      });
    }

    Object.defineProperty(globalThis.navigator, 'languages', {
      value: mockLanguages,
      writable: true,
      configurable: true
    });
  });

  afterAll(() => {
    delete globalThis.window;
    delete globalThis.document;
    delete globalThis.localStorage;
  });

  it('defaults to English ("en") when no preferences or translations are present', () => {
    const lang = getCurrentLanguage();
    expect(lang).toBe('en');
  });

  it('detects Malayalam when user manually sets preference', () => {
    setLanguagePreference('ml');
    expect(getCurrentLanguage()).toBe('ml');

    setLanguagePreference('en');
    expect(getCurrentLanguage()).toBe('en');
  });

  it('detects Malayalam when browser documentElement.lang is set to Malayalam', () => {
    mockDocElement.lang = 'ml';
    expect(detectMalayalamEnvironment()).toBe(true);
    expect(getCurrentLanguage()).toBe('ml');
  });

  it('detects browser auto-translation to Malayalam via classes and lang attribute', () => {
    mockDocElement.lang = 'ml-IN';
    mockDocElement.classList.add('translated-ltr');
    expect(detectMalayalamEnvironment()).toBe(true);
    expect(getCurrentLanguage()).toBe('ml');
  });

  it('auto-detects Malayalam when navigator.languages contains Malayalam', () => {
    Object.defineProperty(globalThis.navigator, 'languages', {
      value: ['ml-IN', 'ml', 'en'],
      writable: true,
      configurable: true
    });
    expect(detectMalayalamEnvironment()).toBe(true);
    expect(getCurrentLanguage()).toBe('ml');
  });

  it('verifies ML_STRINGS dictionary contains necessary translation keys and metadata disclaimer', () => {
    expect(ML_STRINGS._meta.lang).toBe('ml');
    expect(ML_STRINGS._meta.disclaimer).toContain('മെഷീൻ വിവർത്തനം');
    expect(ML_STRINGS.nav.today).toBe('ഇന്ന്');
    expect(ML_STRINGS.nav.plan).toBe('പൂർണ്ണ ഷെഡ്യൂൾ');
    expect(ML_STRINGS.nav.syllabus).toBe('പാഠ്യപദ്ധതി');
  });
});
