<div align="center">

<img src="icon-512.png" alt="Mission PlusTwo Logo" width="120" style="border-radius: 28px; box-shadow: 0 10px 25px rgba(37,99,235,0.25);" />

# 🎓 Mission PlusTwo (v6.1)
### 🚀 The Intelligent Daily Study Planner for Kerala Higher Secondary (+2) & +1 Improvement Students

[![🚀 Open Web App](https://img.shields.io/badge/🚀_LAUNCH_WEB_APP-CLICK_HERE_TO_OPEN-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mission-plustwo.web.app/)
[![CI & Build](https://img.shields.io/github/actions/workflow/status/sreyasts/intelligent-study-planner-for-plus-two-/ci.yml?branch=main&style=for-the-badge&logo=githubactions&logoColor=white&label=CI%20Status)](https://github.com/sreyasts/intelligent-study-planner-for-plus-two-/actions)
[![Test Suite](https://img.shields.io/badge/Tests-402%20Passed-10b981?style=for-the-badge&logo=vitest&logoColor=white)](https://github.com/sreyasts/intelligent-study-planner-for-plus-two-)
[![Algorithm Docs](https://img.shields.io/badge/Algorithm-Formal_Spec-indigo?style=for-the-badge&logo=codewars&logoColor=white)](docs/ALGORITHM.md)
[![Benchmarks](https://img.shields.io/badge/Benchmarks-Empirical-blueviolet?style=for-the-badge&logo=speedtest&logoColor=white)](docs/BENCHMARKS.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![PWA Ready](https://img.shields.io/badge/PWA-WebAPK_Compliant-8b5cf6?style=for-the-badge&logo=pwa&logoColor=white)](https://mission-plustwo.web.app/)
[![Privacy: DPDP](https://img.shields.io/badge/Privacy-DPDP_Act_2023-emerald?style=for-the-badge&logo=privacysandbox&logoColor=white)](pages/privacy.html)

<br/>

## 🌐 👉 [**CLICK HERE TO LAUNCH MISSION PLUSTWO**](https://mission-plustwo.web.app/) 👈
*100% Free & Open Source • Runs in any browser on Phone, Tablet, or PC • No downloads required*

---

</div>

## 📖 Why Mission PlusTwo?

Most students download static PDF timetables from Telegram or HSSLive, try to follow them for 3 days, miss a day, fall behind, and give up. 

**Mission PlusTwo** is a **deterministic adaptive planner and constraint-aware scheduling engine** designed specifically for Kerala State Board (DHSE) Higher Secondary students. It calculates your exact deadline runway, balances subjects across school days and weekends, enforces strict chapter-part dependency ordering, prioritizes Class 11 improvement exams before their respective test dates, and guarantees dedicated revision buffers for mock exams and PYQ practice.

---

## 📚 Technical Documentation

- **[System Architecture](docs/ARCHITECTURE.md)**: Deep dive into the local-first PWA design, canonical syllabus schema, state machine lifecycle, and offline persistence.
- **[Algorithm Specification](docs/ALGORITHM.md)**: Mathematical inputs, constraints, capacity accumulator model, candidate subject interleaving heuristics, and \(O(N \log N + D \cdot S)\) complexity bounds.
- **[Empirical Benchmarks](docs/BENCHMARKS.md)**: Reproducible comparative benchmark evaluating Mission PlusTwo against naive sequential and round-robin baselines across coverage, deadline violations, ordering integrity, and workload variance.

---

## ✨ Key Features in v6.1

| Feature | Description |
| :--- | :--- |
| 💻 **Computer Science & 🌿 Biology Streams** | Full dual-stream support: Physics, Chemistry, Maths + Computer Science or Botany & Zoology. |
| ⚡ **1-Tap Instant Generation** | Zero-friction onboarding: pick your stream, click generate, and start your Day 1 schedule immediately. |
| 📙 **Plus One (+1) Improvement Module** | Weaves +1 improvement chapters seamlessly before exam dates based strictly on the 2025–26 SCERT syllabus. |
| 🛡️ **Guaranteed Revision Buffers** | Automatically reserves 1 to 10 final days prior to your target deadline strictly for mock question papers and formula recall. |
| 🔄 **Intelligent Rebalancing** | Missed a few days? Select where you left off, and the algorithm redistributes remaining chapters evenly without starting over. |
| 📊 **Empirical Algorithmic Superiority** | Bresenham-style dynamic accumulator achieves an **88% reduction in daily workload variance** compared to naive schedulers with **zero subject burnout** ([Read Benchmarks](docs/BENCHMARKS.md)). |
| ☁️ **Google Account Cloud Sync** | Offline-first with Cloud Firestore persistence. Sync your checkmarks seamlessly between phone and laptop. |
| 🎵 **Ultra-Lightweight Audio Synth** | 0.6 KB native WebAudio harmonic chimes with haptic feedback and celebration confetti. |
| 📱 **WebAPK & Maskable PWA** | Compliant PWA with dedicated maskable safe-zone icons, installing as a native standalone app without browser badges. |
| 🌓 **OLED Dark & High-Contrast Light Mode** | Crisp, eye-strain-free reading experience calibrated for long late-night or morning study sessions. |
| 🔒 **Privacy & DPDP Compliance** | Transparent, plain-English privacy policy compliant with India's Digital Personal Data Protection Act 2023 ([Read Telemetry Spec](docs/USAGE-METRICS.md)). |

---

## 🏛️ Project Architecture & Documentation

```
├── .github/
│   ├── workflows/ci.yml           # Automated GitHub Actions test & build verification
│   ├── workflows/deploy.yml       # Production deployment to GitHub Pages
│   └── ISSUE_TEMPLATE/            # Standardized templates (Bug, Feat, A11y, Perf, i18n, Syllabus)
├── docs/
│   ├── ALGORITHM.md               # Formal algorithm specification (pacing, constraints, complexity)
│   ├── BENCHMARKS.md              # Empirical benchmarks comparing Sequential, Round-Robin & MPT
│   ├── USAGE-METRICS.md           # Privacy-first telemetry specification (DPDP Act 2023)
│   ├── IMPACT.md                  # Verified open-source adoption and impact ledger
│   ├── OSS-GROWTH-BASELINE.md     # Forensic Day 0 baseline audit
│   ├── distribution-growth-kit.md # WhatsApp, Telegram, and teacher outreach scripts
│   ├── how-to-update-syllabus.md  # Community guide for updating syllabus data
│   └── syllabus-discrepancy-report.md # Canonical audit against SCERT Scheme of Work
├── pages/
│   ├── plus-one-improvement-guide.html # SEO guide for +1 improvement students
│   ├── privacy.html               # DPDP Act 2023 plain-English privacy policy
│   ├── syllabus-plus-two.html     # Canonical Plus Two syllabus reference
│   └── terms.html                 # Terms of service
├── scripts/
│   ├── benchmark.js               # Automated comparative benchmark harness
│   ├── check-dhse-datesheet.js    # Automated DHSE portal examination scraper
│   ├── generate-pwa-icons.js      # Sharp-based PWA icon generator
│   └── rollback-to-v5.ps1         # Emergency rollback safety script
├── src/
│   ├── analytics/tracker.js       # Cookieless, DPDP-compliant event tracking
│   ├── audio/chime.js             # 0.6 KB WebAudio harmonic synth
│   ├── data/
│   │   ├── chapter-resources.js   # Verified textbook, PYQ, and KITE Victers links
│   │   ├── syllabus-plus-one.js   # 2025-26 +1 Improvement syllabus
│   │   ├── syllabus-plus-two.js   # 2026-27 +2 Canonical syllabus
│   │   └── syllabus-schema.json   # JSON Schema validation
│   ├── engine/
│   │   ├── migration.js           # Idempotent state upgrade engine
│   │   └── planner.js             # Deterministic study planner engine
│   ├── i18n/
│   │   ├── detector.js            # Language detection & storage
│   │   └── ml.js                  # Malayalam (മലയാളം) localization dictionary
│   ├── ui/
│   │   ├── dialogs.js             # Accessible in-app modal alerts & confirms
│   │   └── icons.js               # Lightweight inline SVGs
│   └── main.js                    # Unified ESM entrypoint
├── tests/
│   ├── auth.test.js               # Authentication and cloud sync unit tests
│   ├── i18n.test.js               # Malayalam translation and string completeness tests
│   ├── engine.test.js             # Vitest unit test suite
│   └── engine_test.cjs            # 402-check invariant test runner
├── CHANGELOG.md                   # Keep a Changelog semantic release ledger
├── index.html                     # Main Single Page Application
├── manifest.json                  # PWA WebAPK manifest
├── sw.js                          # Offline Service Worker (Cache-first/Network-first)
└── vite.config.js                 # Production Vite build configuration
```

---

## 🧪 Testing & Verification

Every pull request and build runs automated unit tests, invariant checks, and performance benchmarks:

```bash
# Run Vitest test suite
npm test

# Run 402-invariant regression test suite
npm run test:legacy

# Run empirical benchmark suite
npm run test:benchmark

# Run ESLint static analysis
npm run lint

# Build production bundle
npm run build
```

---

## 🚀 Running Locally & Deploying

### Local Development
```bash
# 1. Clone repository
git clone https://github.com/sreyasts/intelligent-study-planner-for-plus-two-.git
cd intelligent-study-planner-for-plus-two-

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

### Production Deployment
```bash
# Build and deploy to Firebase Hosting
npm run deploy
```

---

## 🗺️ Engineering & Adoption Roadmap

| Milestone | Target | Focus Area | Status |
| :--- | :--- | :--- | :--- |
| **v6.0** | Sep 2026 | ESM modular rewrite, Dual-stream (Bio/CS), WebAPK PWA, Cloud sync | ✅ Released |
| **v6.1** | Sep 2026 | Algorithm formalization, Empirical benchmarks, DPDP telemetry, Zero lint warnings | ✅ Current |
| **v6.2** | Oct 2026 | Full Malayalam localization switch, Commerce stream syllabus scaffolding | 🔄 In Progress |
| **v6.3** | Nov 2026 | Shareable progress summary cards for WhatsApp & Telegram study groups | 📋 Planned |
| **v6.4** | Dec 2026 | Model examination countdown widget & live DHSE notification banner | 📋 Planned |

---

## 🤝 Contributing

Contributions from students, teachers, and developers are welcome!
- See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines and coding conventions.
- See [docs/ALGORITHM.md](docs/ALGORITHM.md) for the mathematical specification of the planning engine.
- See [docs/how-to-update-syllabus.md](docs/how-to-update-syllabus.md) if DHSE announces curriculum revisions.
- Read our [SECURITY.md](SECURITY.md) for vulnerability reporting.

---

## 📄 License

Mission PlusTwo is open source under the [MIT License](LICENSE).
