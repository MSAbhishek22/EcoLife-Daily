import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Leaf,
  Zap,
  Shield,
  LineChart,
  CheckCircle2,
  MapPin,
  Users,
  Trophy,
  WifiOff,
  UtensilsCrossed,
  Flame,
  ShoppingCart,
  Droplet,
  Recycle,
  Lightbulb,
  Sprout
} from 'lucide-react'
import EcoAnimation from '../components/EcoAnimation'
import ImpactVisualizer from '../components/ImpactVisualizer'
import LandingProfilePanel from '../components/LandingProfilePanel'
import { fallbackTips } from '../utils/fallbackData'

function TipTicker() {
  const items = useMemo(() => fallbackTips.map((t, i) => ({ id: i, text: t.text })), [])
  return (
    <div className="relative overflow-hidden rounded-2xl border border-card bg-card shadow-premium">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
      <div className="flex gap-8 whitespace-nowrap animate-[ticker_22s_linear_infinite] p-3">
        {items.concat(items).map((it, idx) => (
          <div key={`${it.id}-${idx}`} className="inline-flex items-center gap-2 text-sm text-muted">
            <CheckCircle2 className="text-primary" size={16} />
            <span>{it.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FutureCard({ icon, title, desc }){
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass-card p-4 md:p-5 rounded-2xl cursor-pointer"
    >
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-eco-50 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-headings">{title}</div>
          <div className="text-sm text-muted mt-1">{desc}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Landing() {
  const [showDemo, setShowDemo] = useState(false)
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="landing">
      {/* Hero */}
      <section className="earthy-hero leaf-texture rounded-2xl p-8 md:p-12 shadow-premium border border-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-headings tracking-tight"
          >
            Live Sustainably. Make Every Day Count.
          </motion.h1>
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 text-lg text-muted"
          >
            EcoLife Daily helps you build eco-friendly habits with daily tips, missions, and a growing plant companion that reflects your impact.
          </motion.p>
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3 justify-center"
          >
            <Link to="/tasks" className="cta-primary inline-flex items-center gap-2">
              Start Your Eco Journey
            </Link>
            <Link to="/dashboard" className="btn outline">View Dashboard</Link>
            <button onClick={() => setShowDemo(true)} className="btn outline" aria-haspopup="dialog" aria-controls="demo-modal">Watch Demo</button>
          </motion.div>

          {/* Trust badges */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-muted">
            <div className="flex items-center justify-center gap-2 glass-card px-3 py-2"><Leaf className="text-primary" size={18} /> Plant-friendly design</div>
            <div className="flex items-center justify-center gap-2 glass-card px-3 py-2"><Zap className="text-primary" size={18} /> Actionable daily tips</div>
            <div className="flex items-center justify-center gap-2 glass-card px-3 py-2"><LineChart className="text-primary" size={18} /> Track real impact</div>
            <div className="flex items-center justify-center gap-2 glass-card px-3 py-2"><Shield className="text-primary" size={18} /> Privacy-first</div>
          </div>

          {/* Ticker */}
          <div className="mt-8"><TipTicker /></div>
        </div>
      </section>

      {/* About + animation (hierarchical grid) */}
      <section className="my-12 md:my-14">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-3xl font-bold text-headings mb-2" style={{ textWrap: 'balance' }}>Your path to greener living</h2>
          <p className="text-muted">Build sustainable habits through fun missions, get tailored eco-tips powered by AI, and watch your virtual plant grow as your positive impact increases.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {/* Card A: Animation */}
            <div className="md:col-span-5 glass-card p-4 md:p-6 rounded-2xl h-full">
              <EcoAnimation className="w-full h-64 md:h-[22rem]" />
            </div>

            {/* Card B: Feature list */}
            <div className="md:col-span-7 glass-card p-4 md:p-6 rounded-2xl h-full">
              <div className="grid grid-cols-1 gap-3">
                <div className="glass-card p-3 rounded-2xl flex items-start gap-3">
                  <Sprout className="text-primary" />
                  <div className="text-sm text-muted"><span className="text-headings font-medium">Daily eco‑missions</span> keep momentum strong.</div>
                </div>
                <div className="glass-card p-3 rounded-2xl flex items-start gap-3">
                  <Droplet className="text-primary" />
                  <div className="text-sm text-muted">Personalized tips with estimated CO₂, water, and plastic savings.</div>
                </div>
                <div className="glass-card p-3 rounded-2xl flex items-start gap-3">
                  <Recycle className="text-primary" />
                  <div className="text-sm text-muted">Shareable infographics for tips and news.</div>
                </div>
                <div className="glass-card p-3 rounded-2xl flex items-start gap-3">
                  <Lightbulb className="text-primary" />
                  <div className="text-sm text-muted">Track XP, streaks, and badges as you level up.</div>
                </div>
              </div>
            </div>

            {/* Card C: Profile panel */}
            <div className="md:col-span-6 glass-card p-4 md:p-6 rounded-2xl h-full">
              <LandingProfilePanel />
            </div>

            {/* Card D: Stats + actions */}
            <div className="md:col-span-6 glass-card p-4 md:p-6 rounded-2xl h-full flex flex-col">
              <div className="grid grid-cols-3 gap-2">
                <div className="glass-card p-2 rounded-xl text-center">
                  <div className="text-xs text-muted">Tips</div>
                  <div className="text-headings font-semibold">120+</div>
                </div>
                <div className="glass-card p-2 rounded-xl text-center">
                  <div className="text-xs text-muted">Avg Streak</div>
                  <div className="text-headings font-semibold">7d</div>
                </div>
                <div className="glass-card p-2 rounded-xl text-center">
                  <div className="text-xs text-muted">Community</div>
                  <div className="text-headings font-semibold">1.2k+</div>
                </div>
              </div>

              
              <div className="mt-4 flex flex-wrap gap-2">
                <Link to="/tasks" className="cta-primary">Start Tracker</Link>
                <Link to="/news" className="btn outline">View Tips</Link>
                <button onClick={() => setShowDemo(true)} className="btn outline">Watch Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact visualizer to fill blank space with meaningful progress animation */}
      <section className="my-10">
        <ImpactVisualizer period="weekly" />
      </section>

      {/* Future updates teaser */}
      <section className="my-10">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-headings">What’s coming next</h2>
          <p className="text-muted">A peek at the roadmap — interactive, community-driven, and more delightful ways to go green.</p>
        </div>
        <div className="grid gap-4 md:gap-5 md:grid-cols-2 lg:grid-cols-3">
          <FutureCard icon={<MapPin className="text-primary" />} title="Community CleanMap" desc="Real-time hotspots and clean-up events in your area." />
          <FutureCard icon={<Trophy className="text-primary" />} title="Leaderboard & Rewards" desc="Weekly challenges, streak badges, and XP rewards." />
          <FutureCard icon={<WifiOff className="text-primary" />} title="Offline Mode" desc="Track habits without internet and auto-sync later." />
          <FutureCard icon={<UtensilsCrossed className="text-primary" />} title="EcoRecipe" desc="Discover planet-friendly recipes with low carbon footprints." />
          <FutureCard icon={<Flame className="text-primary" />} title="Green Challenge" desc="Micro challenges, streak tracking, and animated meters." />
          <FutureCard icon={<ShoppingCart className="text-primary" />} title="Sustainable Shopper" desc="Scan products for eco-scores and share results." />
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section text-center mt-12 md:mt-14">
        <h2 className="text-3xl font-bold text-headings mb-2">Ready to Make an Impact?</h2>
        <p className="text-muted mb-6">Join thousands of others in the journey towards a greener lifestyle.</p>
        <Link to="/tasks" className="cta-primary inline-flex items-center gap-2">Let’s Get Started</Link>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div id="demo-modal" role="dialog" aria-modal="true" className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={() => setShowDemo(false)}>
          <div className="bg-white rounded-2xl shadow-premium overflow-hidden w-full max-w-3xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-3 border-b">
              <h3 className="font-semibold text-headings">EcoLife Daily — Demo Walkthrough</h3>
              <button className="btn outline" onClick={() => setShowDemo(false)} aria-label="Close demo">Close</button>
            </div>
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <iframe
                title="EcoLife Daily Demo"
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
            <div className="p-3 text-sm text-muted">
              Tip: Tap “Start Your Eco Journey” to try the habit tracker and impact visualizer.
            </div>
          </div>
        </div>
      )}

      {/* Keyframes for ticker fallback */}
      <style>{`@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </motion.div>
  )
}
