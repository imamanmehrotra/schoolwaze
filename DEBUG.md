# Debug Page for Netlify

This is a simple debug page to test if static files are being generated correctly.

## Expected Structure:
- /index.html (homepage)
- /dashboard/index.html  
- /routing/index.html
- /carpool/index.html
- /time-slots/index.html
- /alerts/index.html

## Build Process:
1. npm install
2. npm run build (runs: next build)
3. Files should be in 'out' directory

## Current Next.js Config:
- output: 'export'
- trailingSlash: true
- images: unoptimized
