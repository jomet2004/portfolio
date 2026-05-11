@echo off
echo Starting the Personal Portfolio Development Server...
echo The application will open in your default browser shortly.

REM Open the browser to the local server
start http://localhost:3000

REM Start the Next.js development server
npm run dev

pause
