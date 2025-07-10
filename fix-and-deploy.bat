@echo off
echo 🔧 Fixing Carosis deployment issues...
echo.

echo Current directory: %CD%
echo.

echo Adding fixed files...
git add .

echo.
echo Committing fixes...
git commit -m "🔧 Fix deployment issues: Add missing Prisma lib, fix Next.js config, improve error handling"

echo.
echo Pushing to GitHub...
git push origin master

echo.
echo ✅ Fixes pushed! Vercel will auto-redeploy.
echo Check your Vercel deployment in a few minutes.
echo.
pause