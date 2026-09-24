<div align="center">

<img src="icon-512.png" alt="Mission PlusTwo Logo" width="120" style="border-radius: 28px; box-shadow: 0 10px 25px rgba(37,99,235,0.25);" />

# 🎓 Mission PlusTwo (v6.3)
### 🚀 The Intelligent Daily Study Planner for Kerala Higher Secondary (+2) & +1 Improvement Students

[![🚀 Open Web App](https://img.shields.io/badge/🚀_LAUNCH_WEB_APP-CLICK_HERE_TO_OPEN-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mission-plustwo.web.app/)
[![CI & Build](https://img.shields.io/github/actions/workflow/status/sreyasts/intelligent-study-planner-for-plus-two-/ci.yml?branch=main&style=for-the-badge&logo=githubactions&logoColor=white&label=CI%20Status)](https://github.com/sreyasts/intelligent-study-planner-for-plus-two-/actions)
[![Test Suite](https://img.shields.io/badge/Tests-53%20Unit%20•%20551%20Invariants%20Passed-10b981?style=for-the-badge&logo=vitest&logoColor=white)](https://github.com/sreyasts/intelligent-study-planner-for-plus-two-)
[![Release](https://img.shields.io/badge/Release-v6.3.0-blue?style=for-the-badge&logo=semanticrelease&logoColor=white)](https://github.com/sreyasts/intelligent-study-planner-for-plus-two-/releases/tag/v6.3.0)
[![Roadmap](https://img.shields.io/badge/Roadmap-Engineering_&_Adoption-orange?style=for-the-badge&logo=target&logoColor=white)](docs/ENGINEERING-ADOPTION-ROADMAP.md)
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

## 📚 Technical Documentation & Roadmaps

- **[Engineering & Adoption Roadmap (2026–2027)](docs/ENGINEERING-ADOPTION-ROADMAP.md)**: Product pillars, feature roadmap, grassroots school distribution, and community milestones.
- **[System Architecture](docs/ARCHITECTURE.md)**: Deep dive into local-first PWA design, canonical syllabus schema, curriculum adapter interfaces, state machine lifecycle, and offline persistence.
- **[Algorithm Specification](docs/ALGORITHM.md)**: Mathematical inputs, constraints, capacity accumulator model, candidate subject interleaving heuristics, and \(O(N \log N + D \cdot S)\) complexity bounds.
- **[Empirical Benchmarks](docs/BENCHMARKS.md)**: Reproducible comparative benchmark evaluating Mission PlusTwo against naive sequential and round-robin baselines across coverage, deadline violations, ordering integrity, and workload variance.
- **[Verified OSS & Codex Evidence](docs/CODEX-OSS-EVIDENCE.md)**: Verifiable adoption metrics, test counts, maintainer evidence, and technical invariants.
- **[Contributing Guide](CONTRIBUTING.md)** & **[Code of Conduct](CODE_OF_CONDUCT.md)**: Open source contributor workflow and community standards.

---

## ✨ Key Features in v6.3

| Feature | Description |
| :--- | :--- |
| 💻 **Four Complete Streams (+2)** | Computer Science, Biology Science, Commerce (Accountancy, Business Studies, Economics, CA), and Humanities (History, Pol Science, Sociology). |
| ⚡ **1-Tap Instant Generation** | Zero-friction onboarding: pick your stream, click generate, and start your Day 1 schedule immediately. |
| 📙 **Plus One (+1) Improvement Module** | Weaves +1 improvement chapters seamlessly before exam dates based strictly on the 2025–26 SCERT syllabus. |
| 🛡️ **Guaranteed Revision Buffers** | Automatically reserves 1 to 10 final days prior to your target deadline strictly for mock question papers and formula recall. |
| 🔄 **Intelligent Rebalancing** | Missed a few days? Select where you left off, and the algorithm redistributes remaining chapters evenly without starting over. |
| 📱 **Offline Vector QR Sharing** | Zero-dependency client-side SVG QR code generator (`src/utils/qr.js`) embedded into printable full study schedules for desk-wall hanging and peer scanning. |
| 📊 **Spreadsheet CSV & PDF Print** | 1-click CSV timetable export and high-contrast `@media print` black-and-white print stylesheet for wall schedules. |
| ⏳ **Live Exam Countdown & Load Analyzer** | Dedicated tool ([`/exam-countdown`](https://mission-plustwo.web.app/exam-countdown)) computing available study hours per chapter until DHSE board/practical exams. |
| 🩹 **Backlog Recovery & Catch-Up Planner** | Evidence-based tool ([`/backlog-recovery-planner`](https://mission-plustwo.web.app/backlog-recovery-planner)) using 70/30 interleaving to clear backlogs without falling behind on school. |
| 🧪 **Practical Exam & Lab Guidance** | Pacing protocol for Kerala DHSE 40-mark practical exams, fair record book deadlines (Jan 15), and viva-voce prep ([`/plus-two-timetable`](https://mission-plustwo.web.app/plus-two-timetable)). |
| 🧩 **Modular Curriculum Adapters** | Decoupled adapter layer (`src/adapters/`) allowing generic curriculum modules to plug directly into the deterministic scheduler. |
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
│   ├── ENGINEERING-ADOPTION-ROADMAP.md # Comprehensive 2026-2027 Engineering & Adoption Roadmap
│   ├── ALGORITHM.md               # Formal algorithm specification (pacing, constraints, complexity)
│   ├── BENCHMARKS.md              # Empirical benchmarks comparing Sequential, Round-Robin & MPT
│   ├── ARCHITECTURE.md            # System architecture, PWA design & adapter framework
│   ├── CODEX-OSS-EVIDENCE.md      # Verified evidence portfolio for OpenAI Codex for Open Source
│   ├── USAGE-METRICS.md           # Privacy-first telemetry specification (DPDP Act 2023)
│   ├── IMPACT.md                  # Verified open-source adoption and impact ledger
│   ├── OSS-ADOPTION-BASELINE.md   # Forensic Day 0 baseline audit
│   ├── distribution-growth-kit.md # WhatsApp, Telegram, and teacher outreach scripts
│   ├── how-to-update-syllabus.md  # Community guide for updating syllabus data
│   └── syllabus-discrepancy-report.md # Canonical audit against SCERT Scheme of Work
├── pages/
│   ├── exam-countdown.html        # Real-time DHSE board/practical exam countdown & load analyzer
│   ├── backlog-recovery-planner.html # Scientific 70/30 interleaved catch-up schedule generator
│   ├── plus-two-timetable.html    # Timetable guide & DHSE practical exam lab strategy
│   ├── study-hours-calculator.html # School day vs holiday study hours calculator
│   ├── plus-one-improvement-guide.html # SEO guide for +1 improvement students
│   ├── privacy.html               # DPDP Act 2023 plain-English privacy policy
│   ├── syllabus-plus-two.html     # Canonical Plus Two syllabus reference
│   └── terms.html                 # Terms of service
├── scripts/
│   ├── benchmark.js               # Automated comparative benchmark harness
│   ├── check-dhse-datesheet.js    # Automated DHSE portal examination scraper
│   ├── generate-pwa-icons.js      # Sharp-based PWA icon generator
│   └── post-build.js              # Production asset & static pages verification
├── src/
│   ├── adapters/                  # Modular Curriculum Adapter Framework
│   │   ├── CurriculumAdapter.js   # Abstract base class & schema validator
│   │   ├── KeralaDHSEAdapter.js   # Canonical Kerala SCERT +2 and +1 adapter
│   │   └── index.js               # Adapter exports
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
│   ├── utils/
│   │   └── qr.js                  # Offline vector SVG QR code generator
│   └── app.js                     # Unified ESM client application
├── tests/
│   ├── auth.test.js               # Authentication and cloud sync unit tests
│   ├── i18n.test.js               # Malayalam translation and string completeness tests
│   ├── curriculum_adapter.test.js # Multi-board adapter contract & scheduling tests
│   ├── engine.test.js             # Vitest unit test suite (26 engine tests)
│   ├── qr.test.js                 # Vector QR code generation tests
│   └── engine_test.cjs            # 551-check invariant test runner
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
# Run Vitest test suite (53 unit tests across 5 test suites)
npm test

# Run 551-invariant regression test suite (Matrix Scenarios A-Y, 500 fuzz iterations)
npm run test:legacy

# Run empirical benchmark suite
npm run test:benchmark

# Run ESLint static analysis (0 errors, 0 warnings)
npm run lint

# Build production bundle and synchronize static landing pages
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

For the complete technical breakdown, distribution channels, and grassroots adoption strategy, see the **[Engineering & Adoption Roadmap (2026–2027)](docs/ENGINEERING-ADOPTION-ROADMAP.md)**.

| Milestone | Horizon | Core Deliverables | Status |
| :--- | :--- | :--- | :--- |
| **v6.0 – v6.1** | Sep 2026 | ESM modular architecture, greedy constraint scheduler, empirical benchmarks, and 551 invariant checks | ✅ **Released** |
| **v6.2** | Sep 2026 | Web Share API, WhatsApp/Telegram fallback, CSV export, `@media print` stylesheet, and Contributor Covenant 2.1 | ✅ **Released** |
| **v6.3** | Sep 2026 | Curriculum Adapter architecture (`src/adapters/`), Exam Countdown (`/exam-countdown`), Backlog Recovery (`/backlog-recovery-planner`), offline vector QR code sharing, and DHSE practical exam lab guidance (Fixes #3) | ✅ **Released** |
| **v6.4** | Q4 2026 | Dynamic 2.5-hour DHSE model exam simulation mode, formula spaced retrieval flashcards, and automated DHSE circular scraper | 🔄 **In Progress** |

### Key Adoption & Distribution Tracks
1. **Teacher & School Grassroots**: Distribution toolkits (`docs/distribution-growth-kit.md`) and printable notice board posters for Higher Secondary teachers (HSST) across Kerala.
2. **Peer Study Group Network Effects**: Non-spammy daily check-in summary cards for student WhatsApp and Telegram study groups.
3. **High-Intent Search Discovery**: Crawlable interactive web tools ([`/exam-countdown`](https://mission-plustwo.web.app/exam-countdown), [`/backlog-recovery-planner`](https://mission-plustwo.web.app/backlog-recovery-planner), [`/plus-two-timetable`](https://mission-plustwo.web.app/plus-two-timetable)).
4. **Open Source Community**: Transparent issues, reproducible benchmarks, and active `good first issue` contribution on-ramps.

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
