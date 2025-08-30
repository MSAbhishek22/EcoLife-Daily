import React, { useMemo } from 'react'
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
  ShoppingCart
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

      {/* About + animation */}
      <section className="my-12 md:my-14 grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div className="glass-card p-4 md:p-6 rounded-2xl">
            <EcoAnimation className="w-full h-64 md:h-80" />
          </div>
          <LandingProfilePanel />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-headings mb-3">Your path to greener living</h2>
          <p className="text-muted">
            Build sustainable habits through fun missions, get tailored eco-tips powered by AI, and watch your virtual plant grow as your positive impact increases.
          </p>
          <ul className="mt-4 space-y-2 text-muted">
            <li>• Daily eco-missions to keep momentum</li>
            <li>• Personalized tips with estimated CO₂, water, and plastic savings</li>
            <li>• Shareable infographics for tips and news</li>
            <li>• Track XP, streaks, and badges as you level up</li>
          </ul>
          <div className="mt-6">
            <Link to="/dashboard" className="btn outline">Explore the dashboard</Link>
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

      {/* Keyframes for ticker fallback */}
      <style>{`@keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </motion.div>
  )
}
