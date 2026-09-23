# Mission PlusTwo — Open Source Impact & Adoption Ledger

This living document records verified evidence of **Mission PlusTwo**'s utility, real-world educational adoption, maintainer activity, and ecosystem contributions.

Every figure in this document includes its measurement date, calculation methodology, and verifiable primary data source.

---

## 1. Verified Evidence Ledger

| Metric | Verified Value | Primary Data Source | Date Measured | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Unique Visitors (Past 14 Days)** | `21` | GitHub API (`traffic/views`) | 2026-09-23 | Initial 4 days post-overhaul |
| **Total Pageviews (Past 14 Days)** | `162` | GitHub API (`traffic/views`) | 2026-09-23 | Organic traffic to repository |
| **GitHub Stars** | `5` | GitHub REST API (`stargazerCount`) | 2026-09-23 | Authentic community stars |
| **GitHub Forks** | `1` | GitHub REST API (`forkCount`) | 2026-09-23 | Community fork |
| **Total Automated Invariant Checks** | `402` | `tests/engine_test.cjs` | 2026-09-23 | 100% passing across Scenarios A-Y & fuzz testing |
| **Automated Unit Tests** | `25` | Vitest Test Suite (`npm test`) | 2026-09-23 | 3 test suites: engine, i18n, auth |
| **Total Commits on Main** | `57` | Git (`git rev-list --count HEAD`) | 2026-09-23 | Maintainer commits |
| **Unique Maintainers / Contributors** | `1` (`sreyasts`) | GitHub REST API (`contributors`) | 2026-09-23 | Primary project maintainer |
| **Curriculum Subjects Supported** | `6` | `src/data/` canonical datasets | 2026-09-23 | Physics, Chemistry, Maths, CS, Botany, Zoology |
| **Official SCERT Chapters Modeled** | `92` | SCERT Kerala Scheme of Work | 2026-09-23 | Full +2 and +1 Improvement curriculum |
| **Production Uptime & CI Health** | `100%` | GitHub Actions (`ci.yml`, `deploy.yml`) | 2026-09-23 | All recent build & deploy workflows green |

---

## 2. Educational Ecosystem Value

Mission PlusTwo addresses a persistent, statewide educational challenge in Kerala Higher Secondary Education:
* **The Static PDF Bottleneck**: Over 350,000 students enroll in Kerala DHSE Class 12 annually. Standard student resources consist of static PDF timetables that collapse the moment a student misses a single day of study.
* **Dual-Stream & Backlog Complexity**: Students concurrently balancing regular Class 12 coursework with Plus One (+1) improvement examinations previously had no algorithmic tool capable of interleaving both curriculums under disparate exam deadlines.
* **Deterministic, Privacy-Preserving Utility**: Mission PlusTwo delivers a client-side, zero-install, zero-cost progressive web app that operates fully offline on low-end mobile devices without tracking student identity.

---

## 3. Maintenance & Release Milestones

* **September 23, 2026**:
  - Authoring of formal algorithm specification ([`docs/ALGORITHM.md`](ALGORITHM.md)) and empirical benchmark suite ([`docs/BENCHMARKS.md`](BENCHMARKS.md)).
  - Cleaned 100% of static analysis warnings (ESLint: 0 errors, 0 warnings).
  - Codified DPDP-compliant telemetry specification ([`docs/USAGE-METRICS.md`](USAGE-METRICS.md)).
  - Published expanded community issue templates for Malayalam localization, accessibility, and performance.
* **September 22, 2026**:
  - Restored cloud progress synchronization on sign-in and anchored daily mission view to calendar timeline.
  - Added dedicated Improvement-Only stream and pre-completed chapter exclusion filters.
* **September 21, 2026**:
  - Deployed cross-domain canonical state synchronization between GitHub Pages and Firebase Hosting.
  - Automated PWA icon generation and WebAPK manifest compliance.
* **September 19, 2026**:
  - Initial repository public release and baseline architecture established.
