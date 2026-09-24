# Changelog

All notable changes to **Mission PlusTwo** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [6.2.0] - 2026-09-24

### Added
- **Product-Led Growth & Sharing Engine**:
  - Integrated Web Share API with instant WhatsApp and Telegram share fallbacks (`src/app.js`).
  - Added 1-click clipboard link copying (`copyShareLink()`) with visual toast confirmation.
  - Added CSV timetable export (`exportTimetableCsv()`) generating clean downloadable spreadsheets (`mission-plustwo-schedule.csv`).
  - Added dedicated `@media print` stylesheet in `src/style.css` for high-contrast, black-and-white physical wall printing and PDF saving.
- **Search Engine Acquisition Pages**:
  - `/pages/plus-two-timetable.html`: High-intent Kerala Plus Two Timetable & Revision Countdown landing page with Schema.org FAQPage structured data.
  - `/pages/study-hours-calculator.html`: Interactive client-side study hours and runway calculator computing required school day vs holiday study hours.
  - Updated `firebase.json` rewrites and `sitemap.xml` with priority `0.9` indexing.
- **Open Source Contributor Infrastructure**:
  - Added [Code of Conduct](CODE_OF_CONDUCT.md) based on Contributor Covenant 2.1.
  - Added GitHub Issue Templates for [Feature Requests](.github/ISSUE_TEMPLATE/feature_request.md) and [Malayalam Translations](.github/ISSUE_TEMPLATE/translation_correction.md).
  - Upgraded [Pull Request Template](.github/pull_request_template.md) with automated testing, mobile viewport, and privacy verification checklist.
  - Expanded [Contributing Guide](CONTRIBUTING.md) with local dev workflow, directory map, and good first issue guidelines.
  - Added [Malayalam Translation Guide](docs/TRANSLATION-GUIDE.md) and [Accessibility Standards Guide](docs/ACCESSIBILITY-GUIDE.md).
- **Forensic & Analytics Documentation**:
  - `docs/OSS-ADOPTION-BASELINE.md`: 100% measured baseline of GitHub, Product, SEO, and OSS metrics.
  - `docs/ANALYTICS.md`: Privacy-first DPDP Act & GDPR compliant analytics architecture.
  - `docs/IMPACT.md`: Public-safe community impact dashboard.
  - `docs/GROWTH-EXPERIMENTS.md`: Structured growth hypotheses and results tracking.
  - `docs/monthly/2026-09.md`: Monthly maintainer report for September 2026.
  - `docs/CODEX-OSS-EVIDENCE.md`: Verified evidence portfolio for OpenAI Codex for Open Source.

### Changed
- Standardized canonical analytics events in `src/analytics/tracker.js` (`landing_view`, `onboarding_started`, `plan_generated`, `plan_shared`, `plan_exported`, `return_visit`).
- Updated package author to `Sreyas T S <sreyasts52@gmail.com>`.

---

## [6.1.0] - 2026-09-23

### Added
- **Formal Algorithm Specification**: Authored [`docs/ALGORITHM.md`](docs/ALGORITHM.md) detailing continuous accumulator pacing, multi-subject interleaving, and topological constraint satisfaction.
- **Empirical Benchmark Suite**: Created [`scripts/benchmark-planner.js`](scripts/benchmark-planner.js) and [`docs/BENCHMARKS.md`](docs/BENCHMARKS.md) comparing Mission PlusTwo against Naive Sequential and Round-Robin models across 60-day CS, 90-day Bio, and 25-day sprint scenarios.
- **Telemetry & DPDP Act Specification**: Published [`docs/USAGE-METRICS.md`](docs/USAGE-METRICS.md) codifying cookieless, zero-PII retention funnels and legal compliance under India's Digital Personal Data Protection Act 2023.
- **Forensic Growth Baseline**: Documented complete Day 0 verifiable metrics in [`docs/OSS-GROWTH-BASELINE.md`](docs/OSS-GROWTH-BASELINE.md) and adoption ledger in [`docs/IMPACT.md`](docs/IMPACT.md).
- **Expanded Contributor Templates**: Added standardized GitHub issue templates for Feature Requests, Malayalam Translation, Accessibility (a11y), and Performance profiling.
- **Commerce & Humanities Streams**: Added curriculum mappings for Commerce (Accountancy, Business Studies, Economics) and Humanities subjects.

### Fixed
- Fixed scheduler runway underflow guard throwing explicit error on non-positive date bounds (`totalDaysCount <= 1`).
- Implemented task deduplication on input syllabus sets to prevent infinite allocation loops.
- Enforced strict numerical bounds \([1, 5]\) on task weights and chapter difficulty coefficients.
- **Static Analysis Hygiene**: Cleaned 100% of unused imports and variable warnings across `src/engine/planner.js` and `src/app.js` (0 errors, 0 warnings).

---

## [6.0.0] - 2026-09-22

### Added
- **Modular ESM Architecture**: Migrated monolithic architecture to modern Vite bundle with discrete modules for planning, audio, i18n, and analytics.
- **Dual-Stream Support**: Full support for Computer Science stream and Biology Science stream (incorporating Botany & Zoology).
- **Plus One (+1) Improvement Module**: Integrated backlog scheduling engine that guarantees completion of improvement subjects prior to examination dates.
- **Native WebAudio Harmonic Synth**: Replaced 100+ KB Tone.js dependency with an ultra-compact 0.6 KB WebAudio harmonic bell synthesizer.
- **WebAPK & Maskable PWA**: Upgraded manifest and icon assets for full Android WebAPK standalone installation without browser framing.
- **Google Account Cloud Sync**: Optional Firebase Firestore persistence enabling students to sync study progress seamlessly across mobile and laptop devices.
- **Cross-Domain Forwarding**: Implemented canonical domain bridge syncing state between GitHub Pages and Firebase Hosting.

---

## [5.0.0] - 2026-09-19

### Added
- Initial public release of Mission PlusTwo interactive study timetable generator for Kerala DHSE Class 12.
- LocalStorage state persistence and task checkmark tracking.
