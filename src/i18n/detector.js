/**
 * i18n Language & Translation Auto-Detector (v6.1)
 * 
 * Auto-detects whether the user is using Malayalam or English:
 * 1. User manual override stored in localStorage ('plustwo_lang' = 'ml' | 'en')
 * 2. Browser translation to Malayalam (Google Chrome / Edge / Firefox auto-translate headers or DOM attributes:
 *    - document.documentElement.lang (e.g. 'ml', 'mal')
 *    - document.documentElement.classList containing 'translated-ltr', 'translated-rtl'
 *    - presence of goog-te- / skiptranslate classes
 *    - navigator.languages including 'ml', 'ml-IN')
 * 3. Fallback to 'en' by default.
 */

export const STORAGE_KEY_LANG = 'plustwo_lang';

/**
 * Detects if the browser has actively translated the page to Malayalam,
 * or if the user's primary/preferred language list includes Malayalam.
 * @returns {boolean} true if Malayalam browser environment or translation detected
 */
export function detectMalayalamEnvironment() {
  if (typeof window === 'undefined') return false;

  try {
    // 1. Check if user already manually selected a language
    const saved = localStorage.getItem(STORAGE_KEY_LANG);
    if (saved === 'ml') return true;
    if (saved === 'en') return false;

    // 2. Check documentElement lang attribute (often modified by browser translation tools)
    const docLang = (document.documentElement.lang || '').toLowerCase();
    if (docLang.startsWith('ml')) return true;

    // 3. Check for Google Translate / Browser Translation indicators
    // When Chrome or Google Translate translates English -> Malayalam:
    // - document.documentElement gets class 'translated-ltr' or attribute 'data-google-lang'
    // - cookies or meta tags may indicate target language
    const isTranslated = 
      document.documentElement.classList.contains('translated-ltr') ||
      document.documentElement.classList.contains('translated-rtl') ||
      document.querySelector('meta[name="google-translate-customization"]') !== null ||
      document.querySelector('.goog-te-banner-frame') !== null;

    if (isTranslated) {
      // If translated and docLang is ml, or page innerText has high concentration of Malayalam unicode
      if (docLang.startsWith('ml')) return true;
    }

    // 4. Check navigator.languages and navigator.language
    const userLangs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || navigator.userLanguage || ''];

    for (const lang of userLangs) {
      if (lang && lang.toLowerCase().startsWith('ml')) {
        return true;
      }
    }

    // 5. Check if document body or html contains Malayalam script characters (\u0D00-\u0D7F)
    // if browser auto-translation injected Malayalam text
    if (document.body) {
      const sampleText = document.body.innerText ? document.body.innerText.slice(0, 500) : '';
      const malayalamRegex = /[\u0D00-\u0D7F]/;
      if (malayalamRegex.test(sampleText) && isTranslated) {
        return true;
      }
    }
  } catch (e) {
    console.warn('Language auto-detection exception:', e);
  }

  return false;
}

/**
 * Resolves current language code ('ml' or 'en').
 * If no saved preference, runs auto-detection and defaults to 'en' unless Malayalam detected.
 * @returns {'ml' | 'en'}
 */
export function getCurrentLanguage() {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = localStorage.getItem(STORAGE_KEY_LANG);
    if (saved === 'ml' || saved === 'en') return saved;
  } catch (e) {}

  return detectMalayalamEnvironment() ? 'ml' : 'en';
}

/**
 * Sets user language preference manually.
 * @param {'ml' | 'en'} lang 
 */
export function setLanguagePreference(lang) {
  try {
    localStorage.setItem(STORAGE_KEY_LANG, lang);
  } catch (e) {}
}
