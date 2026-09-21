# ==============================================================================
# Mission PlusTwo - 1-Click Build & Deploy Script for Firebase Hosting
# ==============================================================================

# 1. Switch to project directory automatically
Set-Location -Path $PSScriptRoot

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  Mission PlusTwo - Deploy to Firebase   " -ForegroundColor Cyan
Write-Host "  Target: https://mission-plustwo.web.app" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

# 2. Build the latest production bundle
Write-Host "`n[1/2] Building production bundle..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n❌ Build failed! Deployment aborted." -ForegroundColor Red
    Exit 1
}

# 3. Deploy to Firebase Hosting
Write-Host "`n[2/2] Deploying to Firebase Hosting..." -ForegroundColor Yellow
npx -y firebase-tools@latest deploy --only hosting

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Successfully deployed to https://mission-plustwo.web.app!" -ForegroundColor Green
} else {
    Write-Host "`n❌ Deployment failed. If not logged in, run: npx -y firebase-tools@latest login" -ForegroundColor Red
}
