# OpenAI Codex for Open Source — Verified Evidence Portfolio

**Repository**: [`sreyasts/intelligent-study-planner-for-plus-two-`](https://github.com/sreyasts/intelligent-study-planner-for-plus-two-)  
**Production Endpoint**: [https://mission-plustwo.web.app/](https://mission-plustwo.web.app/)  
**Maintainer**: Sreyas T S (`sreyasts52@gmail.com`)  
**License**: MIT License (OSI-Approved Open Source)  
**Last Verified**: 2026-09-23  

---

## 1. Project Mission & Ecosystem Value

Mission PlusTwo is a free, open-source intelligent study planning and timetable generation system purpose-built for students taking the Kerala Directorate of Higher Secondary Education (DHSE) Class 12 (+2) board examinations and Plus One Improvement examinations.

Unlike commercial ed-tech apps that charge subscription fees or push advertisements, Mission PlusTwo is 100% free, runs entirely client-side, respects student privacy (zero PII collection), functions offline as a Progressive Web App (PWA), and implements an open-source, deterministic constraint-propagation scheduler tailored to Kerala's rationalized state board syllabus.

---

## 2. Maintainer Role & Project History

| Dimension | Verified Fact | Source |
| :--- | :--- | :--- |
| **Maintainer Identity** | Sreyas T S (`sreyasts`) | Git commit history, GitHub Profile |
| **Commit Contributions** | 63 verified commits on `main` branch | Git log (`sreyasts52@gmail.com`) |
| **Project Inception** | September 2026 | GitHub API (`created_at: 2026-09-19T03:42:25Z`) |
| **Production Deployment** | Firebase Hosting (`mission-plustwo.web.app`) | Firebase CLI project `mission-plustwo` |
| **Release Management** | Semantic versioning (`v6.1.0`) with automated test validation | GitHub Releases API |

---

## 3. Technical Quality & Rigorous Engineering

| Quality Invariant | Measured Result | Source Document |
| :--- | :--- | :--- |
| **Automated Unit Tests** | 35 / 35 PASSING | `tests/engine.test.js` (Vitest) |
| **Legacy Invariant Verification** | 402 / 402 PASSING | `tests/engine_test.cjs` |
| **Chapter Coverage Rate** | 100.0% across all syllabi | `docs/BENCHMARKS.md` |
| **Duplicate Schedule Rate** | 0.0% | `docs/BENCHMARKS.md` |
| **Chronological Inversions** | 0 violations | `docs/BENCHMARKS.md` |
| **Workload Variance** | 0.44 (40% lower variance than naive sequential baseline) | `scripts/benchmark-planner.js` |
| **Security Auditing** | AES / SHA / zero plaintext secrets / strict CSP & DPDP compliance | `SECURITY.md`, `src/analytics/tracker.js` |
| **Continuous Integration** | Automated test, lint, and benchmark execution on push/PR | `.github/workflows/ci.yml` |

---

## 4. Adoption, Community & Traffic Evidence

*All metrics measured directly via GitHub REST APIs on 2026-09-23:*

- **GitHub Stars**: 5 (`stargazers_count`)
- **GitHub Forks**: 1 (`forks_count`)
- **14-Day Git Clones**: 465 total clones by 163 unique developers (`/traffic/clones`)
- **14-Day Repository Views**: 162 total views by 21 unique visitors (`/traffic/views`)
- **Top Inbound Referrer**: `github.com` (22 views, 9 unique) (`/traffic/popular/referrers`)
- **Official Releases**: 1 (`v6.1.0`)

---

## 5. Why OpenAI Codex Supports This Mission

1. **Empowering Regional Education**: Over 400,000 students appear annually for Kerala Plus Two exams, many from rural government schools without access to expensive private tutoring. Mission PlusTwo democratizes personalized academic pacing.
2. **Deterministic & AI-Assisted Syllabus Processing**: Maintaining up-to-date state board syllabus mappings, textbook chapter splits, and Malayalam translations requires continuous natural-language parsing of government notifications. OpenAI Codex tooling directly accelerates:
   - Automated DHSE examination circular scraping and timetable parsing.
   - Translation generation and validation for regional Malayalam educational terminology.
   - Curriculum adapter development for neighboring state boards (Tamil Nadu HSE, Karnataka PUC, CBSE).
3. **Open Source & Ethical Principles**: The codebase is completely transparent under the MIT License, collects zero student PII, and operates with zero commercial monetization.
