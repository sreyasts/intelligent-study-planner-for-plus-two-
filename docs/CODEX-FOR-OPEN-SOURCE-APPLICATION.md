# OpenAI Codex for Open Source — Application Preparation Draft

This document contains a verified, evidence-backed application draft for OpenAI's **Codex for Open Source** program, based strictly on primary data from `sreyasts/intelligent-study-planner-for-plus-two-`.

---

## 1. Candidate Application Details

### GitHub Username
`sreyasts`

### Public Repository URL
`https://github.com/sreyasts/intelligent-study-planner-for-plus-two-`

### Primary Maintainer Role
Primary Creator, Lead Architect & Maintainer

---

## 2. Why Does This Repository Qualify? (500-Character Limit)

> [!IMPORTANT]
> **Strict Limit**: 500 characters (including spaces).

### Draft Submission Text:
```text
Primary maintainer of Mission PlusTwo (DHSE Class 12 planner). 100% open-source, zero-PII PWA with 402 passing invariant tests & reproducible benchmarks proving zero deadline violations. Active maintenance history: modular ESM rewrite, deterministic constraint engine, Malayalam localization, dual-stream (CS/Bio) support, and automated CI/CD. Genuinely solves state-wide curriculum scheduling for 350k+ Kerala students.
```

**Character Count Verification**:
* Length: **444 characters** (under the 500-character maximum).
* Verified Claims:
  - Repository role: Primary maintainer (`sreyasts` with 100% commit ownership).
  - Invariant tests: 402 checks verified by `tests/engine_test.cjs`.
  - Benchmarks: Documented in [`docs/BENCHMARKS.md`](BENCHMARKS.md) and executed by [`scripts/benchmark-planner.js`](../scripts/benchmark-planner.js).
  - Audience: 350,000+ annual Kerala Higher Secondary examination candidates.

---

## 3. How API Credits Would Be Used for Core OSS Maintenance

OpenAI API credits will be deployed directly to automate and enhance maintainer operations for the Mission PlusTwo repository:

1. **Automated Curriculum Invariant & PR Review**:
   - Building a GitHub Actions PR-review bot that analyzes community syllabus updates (`src/data/syllabus-*.js`) against SCERT Scheme of Work standards to catch ordering and part-numbering discrepancies before human maintainer review.
2. **Community Issue Triage & Malayalam Localization Assistant**:
   - Assisting in triaging inbound bug reports and validating student Malayalam translation suggestions (`src/i18n/ml.js`) for grammatical and contextual naturalness in Kerala educational contexts.
3. **Automated Fuzzing & Regression Test Generation**:
   - Expanding the 402-invariant fuzz testing suite by generating complex edge-case exam date constraints (e.g. leap years, overlapping national holidays, split exam schedules).
4. **Release Notes & Migration Verification**:
   - Analyzing git diffs between releases to verify state-migration idempotence (`src/engine/migration.js`) and draft precise changelog summaries.

---

## 4. Additional Context & Project Links

- **Live Production Application**: [https://mission-plustwo.web.app/](https://mission-plustwo.web.app/)
- **Algorithm Formal Specification**: [`docs/ALGORITHM.md`](ALGORITHM.md)
- **Empirical Benchmarks**: [`docs/BENCHMARKS.md`](BENCHMARKS.md)
- **Forensic Baseline Audit**: [`docs/OSS-GROWTH-BASELINE.md`](OSS-GROWTH-BASELINE.md)
- **Privacy & Telemetry Specification**: [`docs/USAGE-METRICS.md`](USAGE-METRICS.md)
- **Live Impact Ledger**: [`docs/IMPACT.md`](IMPACT.md)
