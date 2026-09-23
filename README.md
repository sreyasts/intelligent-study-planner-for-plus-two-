<div align="center">

<img src="icon-512.png" alt="Mission PlusTwo Logo" width="120" style="border-radius: 28px; box-shadow: 0 10px 25px rgba(37,99,235,0.25);" />

# 🎓 Mission PlusTwo (v6.0)
### 🚀 The Intelligent Daily Study Planner for Kerala Higher Secondary (+2) & +1 Improvement Students

[![🚀 Open Web App](https://img.shields.io/badge/🚀_LAUNCH_WEB_APP-CLICK_HERE_TO_OPEN-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white)](https://mission-plustwo.web.app/)
[![CI & Build](https://img.shields.io/github/actions/workflow/status/sreyasts/intelligent-study-planner-for-plus-two-/ci.yml?branch=main&style=for-the-badge&logo=githubactions&logoColor=white&label=CI%20Status)](https://github.com/sreyasts/intelligent-study-planner-for-plus-two-/actions)
[![Test Suite](https://img.shields.io/badge/Tests-402%20Passed-10b981?style=for-the-badge&logo=vitest&logoColor=white)](https://github.com/sreyasts/intelligent-study-planner-for-plus-two-)
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

## ✨ Key Features in v6.0

| Feature | Description |
| :--- | :--- |
| 💻 **Computer Science & 🌿 Biology Streams** | Full dual-stream support: Physics, Chemistry, Maths + Computer Science (with Advances in Computing & ICT) or Botany & Zoology. |
| ⚡ **1-Tap Instant Generation** | Zero-friction onboarding: pick your stream, click generate, and start your Day 1 schedule immediately. |
| 📙 **Plus One (+1) Improvement Module** | Weaves +1 improvement chapters seamlessly before exam dates based strictly on the 2025–26 SCERT syllabus. |
| 🛡️ **Guaranteed Revision Buffers** | Automatically reserves 1 to 10 final days prior to your target deadline strictly for mock question papers and formula recall. |
| 🔄 **Intelligent Rebalancing** | Missed a few days? Select where you left off, and the algorithm redistributes remaining chapters evenly without starting over. |
| ☁️ **Google Account Cloud Sync** | Offline-first with Cloud Firestore persistence. Sync your checkmarks seamlessly between phone and laptop. |
| 🎵 **Ultra-Lightweight Audio Synth** | 0.6 KB native WebAudio harmonic chimes (no heavy external audio libraries) with haptic feedback and celebration confetti. |
| 📱 **WebAPK & Maskable PWA** | Compliant PWA with dedicated maskable safe-zone icons, installing as a native standalone app without browser badges. |
| 🌓 **OLED Dark & High-Contrast Light Mode** | Crisp, eye-strain-free reading experience calibrated for long late-night or morning study sessions. |
| 🔒 **Privacy & DPDP Compliance** | Transparent, plain-English privacy policy compliant with India's Digital Personal Data Protection Act 2023. |

---

## 🏛️ Project Architecture

```
├── .github/
│   ├── workflows/ci.yml           # Automated GitHub Actions test & build verification
│   └── ISSUE_TEMPLATE/            # Bug report and syllabus update templates
├── docs/
│   ├── distribution-growth-kit.md # WhatsApp, Telegram, and teacher outreach scripts
│   ├── how-to-update-syllabus.md  # Community guide for updating syllabus data
│   └── syllabus-discrepancy-report.md # Canonical audit against SCERT Scheme of Work
├── pages/
│   ├── plus-one-improvement-guide.html # SEO guide for +1 improvement students
│   ├── privacy.html               # DPDP Act 2023 plain-English privacy policy
│   ├── syllabus-plus-two.html     # Canonical Plus Two syllabus reference
│   └── terms.html                 # Terms of service
├── scripts/
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
│   ├── ui/
│   │   ├── dialogs.js             # Accessible in-app modal alerts & confirms
│   │   └── icons.js               # Lightweight inline SVGs
│   └── main.js                    # Unified ESM entrypoint
├── tests/
│   ├── engine.test.js             # Vitest unit test suite
│   └── engine_test.cjs            # 402-check invariant test runner
├── index.html                     # Main Single Page Application
├── manifest.json                  # PWA WebAPK manifest
├── sw.js                          # Offline Service Worker (Cache-first/Network-first)
└── vite.config.js                 # Production Vite build configuration
```

---

## 🧪 Testing & Verification

Every build runs automated unit tests and an exhaustive invariant test suite:

```bash
# Run Vitest test suite
npm test

# Run 402-invariant regression test suite
npm run test:legacy

# Build production bundle
npm run build
```

---

## 🚀 Deployment to Firebase Hosting

To build and deploy the latest app version to [https://mission-plustwo.web.app](https://mission-plustwo.web.app):

```powershell
# 1. Switch to your project directory
cd d:\GitHub\intelligent-study-planner-for-plus-two-

# 2. Deploy using npm script (automatically builds & deploys)
npm run deploy

# Alternatively, run the 3 steps manually:
npm run build
npx -y firebase-tools@latest deploy --only hosting
```

Or run the included PowerShell script directly from anywhere:
```powershell
.\deploy.ps1
```

---

## 🤝 Contributing

Contributions from students, teachers, and developers are welcome!
- See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
- See [docs/how-to-update-syllabus.md](docs/how-to-update-syllabus.md) if DHSE announces curriculum revisions.
- Read our [SECURITY.md](SECURITY.md) for vulnerability reporting.

---

## 📄 License

Mission PlusTwo is open source under the [MIT License](LICENSE).
