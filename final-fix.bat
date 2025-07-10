@echo off
echo 🔧 Final fix for Carosis deployment...
echo.

echo Adding TypeScript config and dependencies...
git add .

echo.
echo Committing all fixes...
git commit -m "🔧 Add TypeScript config, fix imports, add Prisma generate to build"

echo.
echo Pushing to GitHub...
git push origin master

echo.
echo ✅ All fixes pushed! Vercel should deploy successfully now.
echo.
echo Fixed:
echo - Added tsconfig.json for path mapping
echo - Fixed relative imports in API routes  
echo - Added Prisma generate to build process
echo - Added TypeScript dependencies
echo.
pause