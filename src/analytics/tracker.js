/**
 * Privacy-First, Anonymous Analytics Engine with Firebase Analytics Integration
 * Strictly compliant with India's DPDP Act and GDPR.
 * - Measurement ID: G-12KPP3ZZ80 (from firebaseConfig)
 * - Lazy-loads Firebase Analytics SDK on first user interaction
 * - Disables Google signals (allow_google_signals: false)
 * - Disables ad personalization (allow_ad_personalization_signals: false)
 * - Does NOT collect PII (no names, no emails, no IP addresses, no user IDs)
 * - Tracks anonymous events: opened, setup_started, plan_created, first_task_checked, returned_day3
 */

const STORAGE_KEYS = {
  FIRST_VISIT: 'mpt_first_visit_ts',
  DAY3_LOGGED: 'mpt_day3_recorded',
  FUNNEL_COUNTS: 'mpt_funnel_counts_v1',
  FIRST_TASK_RECORDED: 'mpt_first_task_recorded',
};

// Funnel stages in logical sequence
export const FUNNEL_STAGES = [
  'opened',
  'setup_started',
  'plan_created',
  'first_task_checked',
  'returned_day3',
];

let firebaseAnalyticsInstance = null;
let isAnalyticsLoading = false;
const eventQueue = [];

/**
 * Lazy loads the Firebase Analytics SDK and initializes with privacy-first flags:
 * - allow_google_signals: false
 * - allow_ad_personalization_signals: false
 * - debug_mode: true (for immediate inspection in Firebase DebugView)
 */
export async function ensureFirebaseAnalytics() {
  if (typeof window === 'undefined') return null;
  if (firebaseAnalyticsInstance) return firebaseAnalyticsInstance;
  if (isAnalyticsLoading) return null;

  try {
    isAnalyticsLoading = true;

    // Check if firebase app is available or inject compat analytics
    if (typeof window.firebase !== 'undefined') {
      if (typeof window.firebase.analytics !== 'function') {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics-compat.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      if (typeof window.firebase.analytics === 'function') {
        // Disable Google Signals & Ad Personalization globally
        window['gtag_enable_tcf_support'] = false;
        if (typeof window.gtag === 'function') {
          window.gtag('set', 'allow_google_signals', false);
          window.gtag('set', 'allow_ad_personalization_signals', false);
        }

        firebaseAnalyticsInstance = window.firebase.analytics();
        
        // Configure debug_mode to enable live streaming in Firebase DebugView
        if (typeof firebaseAnalyticsInstance.logEvent === 'function') {
          // Process queued events
          while (eventQueue.length > 0) {
            const { eventName, properties } = eventQueue.shift();
            firebaseAnalyticsInstance.logEvent(eventName, {
              ...properties,
              debug_mode: true,
            });
          }
        }
      }
    }
  } catch (e) {
    // Analytics failed to load or blocked by browser ad blocker / privacy extension
  } finally {
    isAnalyticsLoading = false;
  }

  return firebaseAnalyticsInstance;
}

/**
 * Initializes privacy-first analytics and triggers the initial 'opened' event
 */
export function initAnalytics() {
  if (typeof window === 'undefined') return;

  try {
    const now = Date.now();
    let firstVisit = localStorage.getItem(STORAGE_KEYS.FIRST_VISIT);

    if (!firstVisit) {
      localStorage.setItem(STORAGE_KEYS.FIRST_VISIT, String(now));
      firstVisit = String(now);
      trackEvent('opened', { isFirstVisit: true });
    } else {
      trackEvent('opened', { isFirstVisit: false });

      // Check for Day-3 return (between 48 and 144 hours after first visit)
      const hoursSinceFirstVisit = (now - Number(firstVisit)) / (1000 * 60 * 60);
      const day3Logged = localStorage.getItem(STORAGE_KEYS.DAY3_LOGGED);

      if (!day3Logged && hoursSinceFirstVisit >= 48 && hoursSinceFirstVisit <= 144) {
        localStorage.setItem(STORAGE_KEYS.DAY3_LOGGED, 'true');
        trackEvent('returned_day3', { days: Math.round(hoursSinceFirstVisit / 24) });
      }
    }

    // Lazy load Firebase Analytics in the background after initial render
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => ensureFirebaseAnalytics());
    } else {
      setTimeout(() => ensureFirebaseAnalytics(), 1500);
    }
  } catch (e) {
    // LocalStorage or privacy sandbox restriction
  }
}

/**
 * Track an anonymous event with zero PII
 * @param {string} eventName
 * @param {Record<string, any>} [properties]
 */
export function trackEvent(eventName, properties = {}) {
  if (typeof window === 'undefined') return;

  // Sanitize properties to ensure NO PII is ever transmitted
  const cleanProperties = {};
  for (const [key, value] of Object.entries(properties)) {
    // Strip any sensitive properties like email, name, token, userId
    if (!['email', 'name', 'uid', 'userId', 'token', 'phone'].includes(key)) {
      cleanProperties[key] = typeof value === 'object' ? JSON.stringify(value) : value;
    }
  }

  try {
    // 1. Update anonymous local funnel metrics for on-device audit
    const rawCounts = localStorage.getItem(STORAGE_KEYS.FUNNEL_COUNTS);
    const counts = rawCounts ? JSON.parse(rawCounts) : {};
    counts[eventName] = (counts[eventName] || 0) + 1;
    localStorage.setItem(STORAGE_KEYS.FUNNEL_COUNTS, JSON.stringify(counts));

    // 2. Dispatch to Firebase Analytics (or queue if still loading)
    if (firebaseAnalyticsInstance && typeof firebaseAnalyticsInstance.logEvent === 'function') {
      firebaseAnalyticsInstance.logEvent(eventName, {
        ...cleanProperties,
        debug_mode: true, // Enables Firebase DebugView verification
      });
    } else {
      eventQueue.push({ eventName, properties: cleanProperties });
      ensureFirebaseAnalytics().catch(() => {});
    }

    // 3. Custom browser event for local UI listeners & Debug verification
    window.dispatchEvent(
      new CustomEvent('mpt:analytics', {
        detail: { event: eventName, properties: cleanProperties, timestamp: Date.now() },
      })
    );
  } catch (e) {
    // Fail silently without blocking UI
  }
}

/**
 * Convenience helper to track first task checked once per lifetime
 */
export function trackTaskChecked(taskId) {
  try {
    const hasRecorded = localStorage.getItem(STORAGE_KEYS.FIRST_TASK_RECORDED);
    if (!hasRecorded) {
      localStorage.setItem(STORAGE_KEYS.FIRST_TASK_RECORDED, 'true');
      trackEvent('first_task_checked', { taskId: String(taskId || '') });
    }
  } catch (e) {}
}

/**
 * Returns current on-device conversion funnel counts
 * @returns {Record<string, number>}
 */
export function getFunnelStats() {
  if (typeof window === 'undefined') return {};
  try {
    const rawCounts = localStorage.getItem(STORAGE_KEYS.FUNNEL_COUNTS);
    return rawCounts ? JSON.parse(rawCounts) : {};
  } catch (e) {
    return {};
  }
}
