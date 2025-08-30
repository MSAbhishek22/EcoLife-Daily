# EcoLife Daily - Frontend

This is the React frontend skeleton for EcoLife Daily. It uses Vite, React, Framer Motion, Chart.js, and styled-components for the UI.


Getting started (frontend):

1. Install dependencies:

```powershell
cd ecolife-daily-frontend
npm install
```

2. Create an `.env` file from `.env.example` and add your API keys (optional for demo):

```powershell
copy .env.example .env
# then edit .env to add your keys
```

3. Start dev server:

```powershell
npm run dev
```

Features in this scaffold:
- Landing, Dashboard, News, Profile pages
- Tip card, Impact chart, Habit tracker, Chatbot widget
- Tailwind + tokens + dark mode toggle
- Fallback dummy data so no screen is ever blank
- Export utilities for PNG/PDF exports (stubs)

Firebase and production notes:
- This repo includes a `.env.example` for Vite env variables. To integrate Firebase Auth and Firestore, add your Firebase config to the app and initialize the SDK in `src/services/firebase.js` (not added yet).
- For production, avoid embedding API keys in client builds. Use a server proxy or Firebase Cloud Functions for Gemini API calls.

Next steps I can take for you:
- Wire Firebase Auth (Google + email)
- Add Firestore user/profile storage and habit persistence
- Implement server-side Gemini proxy for secure AI calls
- Polish export templates for social cards and PDFs

