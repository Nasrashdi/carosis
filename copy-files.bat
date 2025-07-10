@echo off
echo 🚗 Copying Carosis files to Git repository...
echo.

echo Copying main files...
copy ..\package.json . >nul
copy ..\package-lock.json . >nul
copy ..\next.config.js . >nul
copy ..\tailwind.config.js . >nul
copy ..\README.md . >nul
copy ..\.gitignore . >nul
copy ..\.env.example . >nul

echo Copying directories...
xcopy ..\app app\ /E /I /Y /Q >nul
xcopy ..\prisma prisma\ /E /I /Y /Q >nul
xcopy ..\public public\ /E /I /Y /Q >nul
if exist ..\lib xcopy ..\lib lib\ /E /I /Y /Q >nul

echo.
echo ✅ Files copied successfully!
echo.
echo Now run:
echo git add .
echo git commit -m "Initial commit: Carosis car marketplace"
echo git push origin main
echo.
pause