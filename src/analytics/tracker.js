/**
 * Privacy-First, Cookieless Analytics & Conversion Funnel Engine
 * Strictly compliant with India's DPDP Act and GDPR.
 * Does NOT collect IP addresses, cookies, personal names, or user IDs.
 */

const STORAGE_KEYS = {
  FIRST_VISIT: 'mpt_first_visit_ts',
  DAY3_LOGGED: 'mpt_day3_recorded',
  FUNNEL_COUNTS: 'mpt_funnel_counts_v1',
};

// Funnel stages in logical sequence
export const FUNNEL_STAGES = [
  'opened',
  'setup_started',
  'plan_created',
  'first_task_checked',
  'returned_day3',
  'share_clicked',
  'install_clicked',
  'signin_clicked',
];

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

      // Check for Day-3 return (between 48 and 120 hours after first visit)
      const hoursSinceFirstVisit = (now - Number(firstVisit)) / (1000 * 60 * 60);
      const day3Logged = localStorage.getItem(STORAGE_KEYS.DAY3_LOGGED);

      if (!day3Logged && hoursSinceFirstVisit >= 48 && hoursSinceFirstVisit <= 144) {
        localStorage.setItem(STORAGE_KEYS.DAY3_LOGGED, 'true');
        trackEvent('returned_day3', { days: Math.round(hoursSinceFirstVisit / 24) });
      }
    }
  } catch (e) {
    // LocalStorage or privacy sandbox restriction
  }
}

/**
 * Track an anonymous event
 * @param {string} eventName
 * @param {Record<string, any>} [properties]
 */
export function trackEvent(eventName, properties = {}) {
  if (typeof window === 'undefined') return;

  try {
    // 1. Update anonymous local funnel metrics for on-device audit
    const rawCounts = localStorage.getItem(STORAGE_KEYS.FUNNEL_COUNTS);
    const counts = rawCounts ? JSON.parse(rawCounts) : {};
    counts[eventName] = (counts[eventName] || 0) + 1;
    localStorage.setItem(STORAGE_KEYS.FUNNEL_COUNTS, JSON.stringify(counts));

    // 2. Dispatch event to browser for external cookieless analytics beacons (e.g. Cloudflare / Umami)
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push({ event: eventName, ...properties });
    }

    if (typeof window.umami === 'object' && typeof window.umami.track === 'function') {
      window.umami.track(eventName, properties);
    }

    // Custom browser event for UI listeners
    window.dispatchEvent(
      new CustomEvent('mpt:analytics', {
        detail: { event: eventName, properties, timestamp: Date.now() },
      })
    );
  } catch (e) {
    // Fail silently without blocking UI
  }
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
