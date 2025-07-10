@echo off
echo 🚗 Carosis Git Push Script
echo.
echo Current directory: %CD%
echo.

echo Adding files to git...
git add .

echo.
echo Checking status...
git status

echo.
echo Committing files...
git commit -m "🚗 Initial commit: Carosis - Oman car marketplace platform with Next.js, Prisma, and Tailwind"

echo.
echo Pushing to GitHub...
git push origin main

echo.
echo ✅ Done! Check your GitHub repository now.
echo Repository: https://github.com/Nasrashdi/carosis
echo.
pause