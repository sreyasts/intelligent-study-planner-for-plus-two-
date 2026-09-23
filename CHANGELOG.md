# Changelog

All notable changes to **Mission PlusTwo** will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [6.1.0] - 2026-09-23

### Added
- **Formal Algorithm Specification**: Authored [`docs/ALGORITHM.md`](docs/ALGORITHM.md) detailing continuous accumulator pacing, multi-subject interleaving, and topological constraint satisfaction.
- **Empirical Benchmark Suite**: Created [`scripts/benchmark.js`](scripts/benchmark.js) and [`docs/BENCHMARKS.md`](docs/BENCHMARKS.md) comparing Mission PlusTwo against Naive Sequential and Round-Robin models across 60-day CS, 90-day Bio, and 25-day sprint scenarios.
- **Telemetry & DPDP Act Specification**: Published [`docs/USAGE-METRICS.md`](docs/USAGE-METRICS.md) codifying cookieless, zero-PII retention funnels and legal compliance under India's Digital Personal Data Protection Act 2023.
- **Forensic Growth Baseline**: Documented complete Day 0 verifiable metrics in [`docs/OSS-GROWTH-BASELINE.md`](docs/OSS-GROWTH-BASELINE.md) and adoption ledger in [`docs/IMPACT.md`](docs/IMPACT.md).
- **Expanded Contributor Templates**: Added standardized GitHub issue templates for Feature Requests, Malayalam Translation, Accessibility (a11y), and Performance profiling.

### Fixed
- **Static Analysis Hygiene**: Cleaned 100% of unused imports and variable warnings across `src/engine/planner.js` and `src/app.js` (0 errors, 0 warnings).
- **Audio Preference Enforcement**: Fixed task checkmark handling in `toggleTaskDirect` to strictly respect student sound preference settings via `getUserSetting('sound')`.
- **Mission Day Navigation**: Wired `selectedMissionDayNumber` into `renderApp()` allowing students to inspect future/past mission days without desynchronizing state.

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
