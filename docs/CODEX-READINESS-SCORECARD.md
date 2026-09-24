# OpenAI Codex for Open Source — Readiness Scorecard & Drafts

> **STATUS: HELD IN DRAFT — DO NOT SUBMIT TO OPENAI**  
> Per owner invariant and ethical guidelines, this application remains in draft until the quantitative 60-day and 90-day milestone thresholds are verified against real, organic metrics.

---

## 1. Quantitative Readiness Scorecard

| Assessment Dimension | Current Baseline (Day 5, Sep 2026) | 60-Day Target Milestone | 90-Day Target Milestone | Verification Source |
| :--- | :--- | :--- | :--- | :--- |
| **Repository Age** | 5 days (Created Sep 19, 2026) | 60+ days | 90+ days | GitHub API `created_at` |
| **Total Verified Commits** | 70+ commits | 100+ commits | 140+ commits | Git log (`main`) |
| **Organic GitHub Stars** | 5 stars | 25+ stars | 50+ stars | GitHub Stargazers API |
| **Community PRs Merged** | 0 PRs | 2+ merged external PRs | 5+ merged external PRs | GitHub PRs (non-maintainer) |
| **Issue Triage SLA** | 100% within 48h | 100% within 48h | 100% within 48h | `MAINTAINERS.md` SLA audit |
| **Unit Test Coverage** | 68 Vitest tests | 80+ tests | 100+ tests | Vitest CI test reporter |
| **Invariant Suite** | 551 checks passing | 551+ checks passing | 600+ checks passing | `npm run test:legacy` |
| **Weekly Active Users** | Early rollout (<50) | 100+ weekly active | 300+ weekly active | Public `/stats` dashboard |
| **Grassroots Distribution** | Initial poster & scripts | 10+ Kerala schools adopting | 30+ Kerala schools adopting | Verified teacher feedback |

---

## 2. OpenAI Application Pitch (500-Character Maximum Draft)

*Word count: 74 words / Character count (with spaces): 492 characters.*

```text
Mission PlusTwo is a free, local-first open-source study planner for Kerala's 350,000+ Class 12 State Board examinees. Unlike commercial ed-tech, it operates with zero ads, requires no sign-in, complies with India's DPDP Act, and uses a deterministic constraint scheduler with 68 unit tests and 551 invariant checks. Codex Pro will accelerate automated scraping of state board circulars, regional Malayalam translation pipelines, and curriculum adapters for neighboring state boards.
```

---

## 3. OpenAI Support Follow-Up / Update Message Draft

*To be sent by the maintainer (`sreyasts52@gmail.com`) only after reaching the 60-day review gate:*

```text
Subject: Update on Application: Mission PlusTwo (github.com/sreyasts/intelligent-study-planner-for-plus-two-)

Dear OpenAI Open Source Review Team,

I am writing to provide an updated progress report on our project, Mission PlusTwo, for the OpenAI Codex for Open Source program.

Over the past 60 days of active maintenance, we have expanded the open-source platform supporting Kerala Higher Secondary examinees:
- Released v6.3.0 introducing decoupled curriculum adapters, live exam load counters, and backlog recovery tools.
- Expanded automated testing to 68 Vitest unit tests and 551 legacy regression invariant checks (100% passing in CI).
- Integrated DPDP Act 2023 parent consent protocols for minor student safety, while preserving offline-first guest access.
- Published auditable public telemetry and maintainer SLAs (48-hour issue triage response).
- Merged community contributions and established 1-click devcontainers for contributor onboarding.

All metrics, commit logs, and test suites are publicly auditable at https://mission-plustwo.web.app/pages/stats.html and https://github.com/sreyasts/intelligent-study-planner-for-plus-two-.

We would appreciate the opportunity to leverage Codex Pro to maintain automated syllabus parsers and regional localization for underserved regional students.

Thank you for supporting open source education,
Sreyas T S
Maintainer, Mission PlusTwo
https://github.com/sreyasts
```
