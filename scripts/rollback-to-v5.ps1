# Emergency Rollback Script to v5-pre-overhaul
# Run this PowerShell script if you ever need to immediately revert the repository and GitHub Pages to v5
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "EMERGENCY ROLLBACK TO v5-pre-overhaul" -ForegroundColor Red
Write-Host "===================================================" -ForegroundColor Cyan

$confirmation = Read-Host "Are you sure you want to reset 'main' branch back to tag 'v5-pre-overhaul'? (Type 'YES' to confirm)"
if ($confirmation -ne "YES") {
    Write-Host "Rollback cancelled." -ForegroundColor Yellow
    exit
}

Write-Host "1. Checking out main..." -ForegroundColor Green
git checkout main

Write-Host "2. Hard resetting main to v5-pre-overhaul..." -ForegroundColor Green
git reset --hard v5-pre-overhaul

Write-Host "3. Force-updating origin/main to restore live site..." -ForegroundColor Green
git push origin main --force

Write-Host "SUCCESS: Repository main branch has been rolled back to v5-pre-overhaul!" -ForegroundColor Green
Write-Host "GitHub Pages will redeploy v5 within 60 seconds." -ForegroundColor Green
