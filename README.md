# EcoLife Daily — Make Every Day Count

A calm, eco‑inspired web app that turns small sustainable actions into daily wins. Plant a virtual sapling, grow your streak, watch your impact add up — and feel good doing it.

## Why this exists
Most people want to live sustainably, but change feels complicated and progress is invisible. EcoLife Daily removes that friction: one simple eco‑action a day, instant feedback (XP, streaks, and a greener PlantBuddy), and gentle guidance through tips and micro‑missions.

## What you can do
- Daily Habit Tracker — complete micro‑actions, earn XP, build your streak
- Impact Visualizer — animated counters for trees (virtual), water saved, plastic avoided
- PlantBuddy — a little plant that grows greener as you do
- EcoBuddy Chat — friendly, concise helper for tips and FAQs (works offline with fallbacks; optional AI)
- News & Tips — bite‑sized cards, shareable and uplifting
- Mobile‑first UI — glassmorphism, dark mode, and a bottom nav for quick access

## How it feels
The interface is nature‑inspired and quiet on purpose: soft greens, mint and beige gradients, glass cards, and subtle leaf movement. It’s built to be fast, readable outdoors, and accessible in dark mode.

## Quick start
1. Clone the repo
   ```bash
   git clone https://github.com/MSAbhishek22/EcoLife-Daily.git
   cd EcoLife-Daily
   ```
2. Environment variables (create `.env` in the project root)
   ```env
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   VITE_FIREBASE_MEASUREMENT_ID=...
   VITE_GEMINI_API_KEY=...
   ```
   Notes: The chatbot works without AI using built‑in answers. Adding `VITE_GEMINI_API_KEY` enables AI replies.
3. Install & run
   ```bash
   npm install
   npm run dev
   ```
   Visit the dev URL shown in the terminal (e.g. http://localhost:5173/)

## Deploy
- One‑click friendly on Vercel.
- Settings: Framework = Vite, Build = `npm run build`, Output = `dist`.
- Add the same environment variables in Project Settings → Environment Variables.

## Tech stack
- React + Vite, UnoCSS, Framer Motion
- lucide‑react icons, Chart.js (impact)
- Optional Firebase (Auth/Firestore) for persistence
- Optional Gemini API for AI tips (proxy‑first design with safe fallbacks)

## Roadmap highlights
- SSR/SSG for faster first paint and stronger SEO
- PWA + offline mode with installable app and daily reminders
- Deeper gamification: weekly challenges, badge tiers, streak ring
- Community CleanMap (events & hotspots), Sustainable Shopper (eco‑scores)
- Personalized goals and monthly share cards (e.g., “Saved 2.1 kg CO₂ this week”)

## Accessibility & performance
- Dark‑mode safe contrast, visible focus, reduced‑motion support planned
- Images sized to prevent layout shift; heavy modules are candidates for lazy loading

---

> Small steps, visible progress. EcoLife Daily is your gentle nudge toward greener living.
