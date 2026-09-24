# Mission PlusTwo — Public Impact & Community Metrics

**Transparency Commitment**: All metrics reported in this document are strictly measured and traceable. No numbers are projected, modeled, or fabricated.

**Last Updated**: 2026-09-24  
**Reporting Cadence**: Monthly updates with continuous repository tracking.

---

## 1. Open Source Community & Repository Evidence

| Metric | Current Measured Value | Measurement Date | Verification Source | Definition |
| :--- | :--- | :--- | :--- | :--- |
| **GitHub Stars** | 5 | 2026-09-23 | GitHub REST API (`stargazers_count`) | Unique GitHub accounts that have starred the repository. |
| **GitHub Forks** | 1 | 2026-09-23 | GitHub REST API (`forks_count`) | Unique public/private forks created from the repository. |
| **Unique Cloners (14d)** | 163 | 2026-09-23 | GitHub Traffic API (`/traffic/clones`) | Distinct IP/user clones over the past 14 days. |
| **Total Git Clones (14d)**| 465 | 2026-09-23 | GitHub Traffic API (`/traffic/clones`) | Aggregate repository clone operations over the past 14 days. |
| **Unique Visitors (14d)** | 21 | 2026-09-23 | GitHub Traffic API (`/traffic/views`) | Distinct viewers of the GitHub repository over the past 14 days. |
| **Repository Views (14d)**| 162 | 2026-09-23 | GitHub Traffic API (`/traffic/views`) | Aggregate page views on the GitHub repository over the past 14 days. |
| **Official Releases** | 2 | 2026-09-24 | GitHub Releases (`v6.1.0`, `v6.2.0`) | Semantically versioned production releases published on GitHub. |
| **Total Git Commits** | 65+ | 2026-09-24 | Git log (`main` branch) | Verified commit history on default branch. |
| **External Contributors** | 0 | 2026-09-23 | GitHub API (`/contributors`) | Non-maintainer contributors merged to `main`. |
| **Issues Resolved** | 0 | 2026-09-23 | GitHub Issues API | Triage count of community-reported bugs and syllabus corrections. |

---

## 2. Product Adoption & Student Utility

| Metric | Measured Status | Verification Source | Definition |
| :--- | :--- | :--- | :--- |
| **Production Domain** | `https://mission-plustwo.web.app/` | Firebase Hosting Console | Primary canonical production endpoint. |
| **PWA Capability** | Full Offline Support | `sw.js` + Web App Manifest | Installable on Android, iOS, Windows, macOS, and Linux without app stores. |
| **Syllabus Chapters** | 100% Kerala DHSE Rationalized | `src/data/syllabus.js` | Physics (14), Chemistry (10), Maths (13), Biology (16), Computer Science (11), Commerce & Humanities. |
| **Stream Coverage** | Bio, CS, Commerce, Humanities | Application Engine | Includes +1 Improvement exam integration for all major subjects. |
| **Automated Tests** | 35 Passing Unit Tests | Vitest (`tests/engine.test.js`) | Continuous integration test suite ensuring schedule legality. |
| **Invariant Verifications**| 402 / 402 Passing | `tests/engine_test.cjs` | Zero schedule collisions, zero duplicate chapters, zero deadline overruns. |

---

## 3. Real Retention & Privacy-Safe Funnels

*Tracked anonymously via on-device storage audit (`src/analytics/tracker.js`) and Firebase Analytics without PII collection.*

| Funnel Metric | Measurement Definition | Status |
| :--- | :--- | :--- |
| **Onboarding Completion** | `Count(plan_generated) / Count(landing_view)` | Actively tracked via client analytics |
| **First-Task Execution** | `Count(task_completed) / Count(plan_generated)` | Tracked on first revision slot checkoff |
| **Day-3 Return (D3)** | Unique returns recorded between 48h and 144h | Tracked via `mpt_day3_recorded` |
| **Peer Sharing Rate** | `Count(plan_shared) / Count(plan_generated)` | Tracked on WhatsApp, Telegram, or Web Share triggers |
| **Offline Export Rate** | `Count(plan_exported) / Count(plan_generated)` | Tracked on print and CSV exports |

---

## 4. Historical Milestones

- **2026-09-19**: Initial public release of Mission PlusTwo codebase.
- **2026-09-21**: Offline-first PWA caching and canonical domain unification deployed.
- **2026-09-23**: Released `v6.1.0` introducing deterministic constraint-propagation scheduler, empirical benchmark suite (`docs/BENCHMARKS.md`), and Vitest test suite.
- **2026-09-24**: Released `v6.2.0` introducing search acquisition landing pages (`/plus-two-timetable`, `/study-hours-calculator`), product-led CSV export, printable timetable stylesheet, and comprehensive contributor system.
