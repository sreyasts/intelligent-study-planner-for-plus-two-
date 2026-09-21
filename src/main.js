/**
 * Mission PlusTwo v6.0 - Main Application Entrypoint
 * Unifies planning engine, canonical syllabus data, cookieless analytics,
 * native WebAudio synthesizer, and accessible dialogs into a cohesive ESM module.
 */

// Planning Engine & Migration
export {
  PLANNER_ENGINE_VERSION,
  buildIntelligentPlan,
  validatePlan,
  getStreamSubjects,
  calculateDaysBetween,
} from './engine/planner.js';

export {
  migrateOldState,
  migrateLegacyUserPlan,
} from './engine/migration.js';

// Canonical Syllabus Data
export {
  PLUS_TWO_RAW_SYLLABUS,
  canonicalPlusTwoTasks,
} from './data/syllabus-plus-two.js';

export {
  PLUS_ONE_IMPROVEMENT_RAW,
  canonicalPlusOneTasks,
} from './data/syllabus-plus-one.js';

export {
  CHAPTER_RESOURCES,
} from './data/chapter-resources.js';

// Audio & Accessible UI
export {
  playTaskCompleteSound,
  playMilestoneCelebrationSound,
  playUntickSound,
} from './audio/chime.js';

export {
  showAppToast,
  showAppAlert,
  showAppConfirm,
} from './ui/dialogs.js';

export {
  ICONS,
  getSvgIcon,
} from './ui/icons.js';

// Cookieless & DPDP-Compliant Analytics
export {
  initAnalytics,
  trackEvent,
  getFunnelStats,
} from './analytics/tracker.js';
