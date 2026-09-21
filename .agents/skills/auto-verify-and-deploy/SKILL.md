---
name: auto-verify-and-deploy
description: Automatically verify changes (zero errors across ESLint, Vitest, and 402 engine invariants), build production bundles, and deploy to both Firebase Hosting (mission-plustwo.web.app) and GitHub Pages (sreyasts.github.io).
---

# Auto-Verify and Dual-Domain Deployment Skill

This skill enforces strict automated verification and dual-domain deployment whenever changes are made to the **Mission PlusTwo** study planner app.

## Target Domains

1. **Firebase Hosting (Primary)**:
   - URL: `https://mission-plustwo.web.app` (and `https://mission-plustwo.firebaseapp.com`)
   - Mechanism: Firebase CLI hosting deployment (`npx -y firebase-tools@latest deploy --only hosting`)

2. **GitHub Pages (Secondary)**:
   - URL: `https://sreyasts.github.io/intelligent-study-planner-for-plus-two-/`
   - Mechanism: Git push to `main` branch, which triggers the automated `.github/workflows/deploy.yml` GitHub Actions pipeline.

---

## The Zero-Error Deployment Protocol

Whenever code, styling, or content changes are made to the app, ALWAYS execute this 4-step sequence before finishing:

### Step 1: Run Full Test & Invariant Verification
All tests must pass with 0 errors and 0 failed assertions:
```powershell
npm test
npm run test:legacy
```
*Verification criteria:*
- Vitest unit tests pass (`16/16 tests`).
- Canonical syllabus & regression matrix invariants pass (`402/402 checks`).

### Step 2: Build Production Bundle
Compile Tailwind CSS, bundle ES modules, and synchronize static pages & assets:
```powershell
npm run build
```
*Verification criteria:*
- Vite builds client environment into `dist/` with zero warnings.
- `scripts/post-build.js` synchronizes all static HTML pages and icon assets into `dist/`.

### Step 3: Deploy to Firebase Hosting (Domain 1: mission-plustwo.web.app)
Upload the verified `dist/` output to Google's global CDN:
```powershell
npx -y firebase-tools@latest deploy --only hosting
```

### Step 4: Deploy to GitHub Pages (Domain 2: sreyasts.github.io)
Commit all changes with a descriptive semantic message and push to GitHub:
```powershell
git add .
git commit -m "feat/fix: <description of changes>"
git push origin main
```
*Result:*
GitHub Actions CI/CD automatically detects the push and deploys the verified bundle to GitHub Pages.

---

## One-Line Shortcut Command
To run all 4 steps in a single automated command:
```powershell
.\deploy-all.ps1
```
Or via npm:
```powershell
npm run deploy:all
```
