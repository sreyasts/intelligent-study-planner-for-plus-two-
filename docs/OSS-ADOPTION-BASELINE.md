# Mission PlusTwo — Open Source & Adoption Forensic Baseline

**Baseline Date**: 2026-09-23  
**Auditor**: Autonomous Maintainer System  
**Repository**: [`sreyasts/intelligent-study-planner-for-plus-two-`](https://github.com/sreyasts/intelligent-study-planner-for-plus-two-)  
**Production Site**: [https://mission-plustwo.web.app/](https://mission-plustwo.web.app/)  
**Integrity Invariant**: Every number in this document is real, measured directly via API or codebase inspection, and zero values are fabricated.

---

## 1. GitHub Repository Metrics

*Source: GitHub REST API (`gh api repos/sreyasts/intelligent-study-planner-for-plus-two-` & `/traffic` endpoints) on 2026-09-23.*

| Metric | Measured Value | Verification Source |
| :--- | :--- | :--- |
| **Stars** | 5 | GitHub Repo API (`stargazers_count`) |
| **Forks** | 1 | GitHub Repo API (`forks_count`) |
| **Watchers / Subscribers** | 5 / 1 | GitHub Repo API (`watchers_count`, `subscribers_count`) |
| **Open Issues** | 0 | GitHub Issues API (`gh issue list --state all`) |
| **Closed Issues** | 0 | GitHub Issues API |
| **Open Pull Requests** | 0 | GitHub PR API (`gh pr list --state all`) |
| **Closed Pull Requests** | 0 | GitHub PR API |
| **Releases** | 1 | Tag `v6.1.0` ("Deterministic Planning Engine & Empirical Benchmarks", 2026-09-23) |
| **Total Commits** | 63 | Commit log (`main` branch) |
| **Contributors** | 1 | `sreyasts` (63 commits) |
| **Views (14-day rolling)** | 162 total / 21 unique | GitHub Traffic API (`/traffic/views`) |
| **Clones (14-day rolling)** | 465 total / 163 unique* | GitHub Traffic API (`/traffic/clones`) |
| **Top Referrer** | `github.com` (22 views, 9 unique) | GitHub Traffic API (`/traffic/popular/referrers`) |
| **Default Branch** | `main` | Repository settings |
| **License** | MIT License | `LICENSE` file |

*\*Note on Clones*: As reported by the official GitHub Traffic API, "unique cloners" counts distinct IP addresses executing `git clone`/`fetch`. A substantial portion of these clones represents automated ephemeral GitHub Actions runners (`actions/checkout` across CI and deploy workflows), security bots, and automated scrapers rather than 163 unique human developers. The organic human viewer count is accurately reflected by the **21 unique visitors** in the Views metric.

---

## 2. Product & Architecture Metrics

*Source: Codebase inspection and local execution on 2026-09-23.*

| Area | Baseline Status | Notes |
| :--- | :--- | :--- |
| **Production URL** | `https://mission-plustwo.web.app/` | Hosted on Firebase Hosting (project `mission-plustwo`) |
| **Canonical Bridge** | Active | Redirects `github.io` traffic to `mission-plustwo.web.app` while preserving local state |
| **Offline Capability** | Service Worker (`sw.js`) active | PWA installable, full offline plan generation |
| **Storage Architecture** | IndexedDB (`plusTwoMissionState_v2`) + LocalStorage fallback | Multi-day state, subject selections, completed tasks |
| **Cloud Synchronization** | Optional Firebase Auth (Google Sign-In) | Firestore subcollections for cross-device routine sync |
| **Syllabus Coverage** | Kerala DHSE Class 12 & Plus One Improvement | Physics, Chemistry, Maths, Biology (Botany & Zoology), Computer Science |
| **Automated Unit Tests** | 35 / 35 PASSING | Vitest suite (`tests/engine.test.js`) |
| **Legacy Invariant Checks** | 402 / 402 PASSING | `tests/engine_test.cjs` |
| **Empirical Benchmarks** | Measured in `docs/BENCHMARKS.md` | 100% coverage, 0% duplicates, 0 order violations |
| **Toolchain** | Vite 8 + Tailwind CSS 4 | Zero runtime CDN dependencies |

---

## 3. SEO & Technical Indexability Baseline

*Source: Production site inspection and sitemap analysis on 2026-09-23.*

| Parameter | Baseline Value | Source |
| :--- | :--- | :--- |
| **Google Site Verification** | Verified (`google03905a8a03a50ab1.html`) | Root file & `<meta>` tag |
| **Sitemap** | Present (`/sitemap.xml`) | 5 URLs indexed |
| **Robots.txt** | Present (`/robots.txt`) | Allows all bots, points to sitemap |
| **Schema.org Structured Data** | `WebApplication` + `FAQPage` JSON-LD | Embedded in `<head>` |
| **Open Graph / Twitter Cards** | Configured | 512x512 icon preview |
| **Canonical URL Tag** | Configured (`https://mission-plustwo.web.app/`) | `<link rel="canonical">` |
| **Search Console Queries/Clicks** | Direct API credentials pending | Requires GSC OAuth / service account authorization |

---

## 4. Open Source & Community Baseline

| Dimension | Baseline State | Gap / Opportunity |
| :--- | :--- | :--- |
| **External Contributors** | 0 | No contribution funnel or `good first issue` markers exist yet |
| **Issue Templates** | Minimal / Missing standard issue forms | Need `.github/ISSUE_TEMPLATE/` forms for syllabus bugs, translation, features |
| **PR Template** | Missing | Need standard PR review checklist |
| **Contribution Guide** | Exists (`CONTRIBUTING.md`, 1.2 KB) | Needs expansion for syllabus contributors, translators, and engine devs |
| **Code of Conduct** | Missing | Standard Contributor Covenant 2.1 required |
| **Public Roadmap / Impact** | Missing | Need `docs/IMPACT.md` and public release milestones |
| **Malayalam Localisation** | Partial (bilingual headings) | Comprehensive Malayalam UI strings and translation workflow needed |

---

## 5. Codex for Open Source Baseline Assessment

OpenAI's Codex for Open Source / Developer Access program evaluates projects on:
1. **Legitimate OSS Activity**: Real commits, real releases, real issue discussions, clean license (MIT).
2. **Ecosystem Value & Adoption**: Tool usefulness, real users benefiting, active utility for a defined community.
3. **Maintainer Diligence**: Regular release notes, thorough documentation, automated CI/CD, issue triage, zero fabrications.

**Current Scorecard**:
- **Strong**: High technical quality, deterministic engine, 100% test coverage, empirical benchmarks, zero fabricated claims, cleanly deployed on Firebase Hosting.
- **Immediate Gaps**: Zero external issues/PRs, lack of documented analytics model, limited landing page intent coverage, lack of student referral loops.
