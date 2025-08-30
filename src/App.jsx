import React, { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Leaf, Home, LayoutDashboard, Trophy, User } from 'lucide-react'

import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import News from './pages/News'
import Profile from './pages/Profile'
import EcoTasks from './pages/EcoTasks'

import XpBar from './components/XpBar'
import AchievementModal from './components/AchievementModal'
import Auth from './components/Auth'
import Chatbot from './components/Chatbot'

const Background = () => {
  // Premium, layered background with soft ripples, leaf texture and sunrays
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-ripples leaf-texture" />
      {/* Sunrays overlay using gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(120% 120% at 10% 10%, rgba(168,230,207,0.20), transparent 48%),' +
            'radial-gradient(140% 120% at 95% 15%, rgba(244,241,222,0.22), transparent 50%),' +
            'conic-gradient(from 210deg at 20% 15%, rgba(255,255,255,0.12), rgba(255,255,255,0) 25%, rgba(255,255,255,0.12) 35%, rgba(255,255,255,0) 60%)'
        }}
      />
      {/* Floating leaves layer (light parallax feel) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={i}
            className="absolute select-none"
            style={{
              left: `${(i * 12 + 8) % 100}%`,
              top: `${(i * 14 + 10) % 100}%`,
              animation: `leafFloat ${12 + (i % 5)}s ease-in-out ${i * 300}ms infinite`,
              filter: 'drop-shadow(0 4px 10px rgba(23,58,42,0.15))',
            }}
          >
            🌿
          </span>
        ))}
      </div>
      <style>{`
        @keyframes leafFloat { 0%,100%{ transform: translate3d(0,0,0) rotate(0deg)} 50%{ transform: translate3d(6px,-10px,0) rotate(8deg)} }
      `}</style>
    </div>
  )
}

const Nav = ({ xp, level }) => {
  const [dark, setDark] = useState(() => localStorage.getItem('eco_dark') === '1')
  const [achOpen, setAchOpen] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      localStorage.setItem('eco_dark', '1')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('eco_dark', '0')
    }
  }, [dark])

  return (
    <nav className="top-nav flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center gap-2">
          <div className="p-2 rounded-md bg-eco-50 text-primary"><Leaf /></div>
          <div className="brand text-xl font-bold">EcoLife Daily</div>
        </Link>
      </div>

      <div className="links flex items-center gap-4">
        <Link to="/tasks" className="text-sm">Tasks</Link>
        <Link to="/dashboard" className="text-sm">Dashboard</Link>
        <Link to="/news" className="text-sm">News</Link>
        <Link to="/profile" className="text-sm">Profile</Link>
        <button onClick={() => setDark(d => !d)} className="ml-2 px-3 py-1 rounded bg-white/10 text-sm">{dark? 'Light' : 'Dark'}</button>
        {/* compact header: small status */}
        <div className="ml-3 hidden md:block"><XpBar xp={xp} level={level} /></div>
        <div className="ml-4"><Auth /></div>
        <AchievementModal open={achOpen} onClose={() => setAchOpen(false)} badge={{ name: 'First Steps', description: 'Completed your first eco tip' }} />
      </div>
    </nav>
  )
}

const FooterNav = () => {
  // Mobile-friendly glass bottom bar
  return (
    <div className="fixed bottom-3 inset-x-0 px-4 z-40 md:hidden">
      <div className="footer-glass max-w-xl mx-auto flex items-center justify-around py-2">
        <Link to="/" className="flex flex-col items-center text-headings hover:text-primary">
          <Home size={20} />
          <span className="text-[11px] mt-1">Home</span>
        </Link>
        <Link to="/dashboard" className="flex flex-col items-center text-headings hover:text-primary">
          <LayoutDashboard size={20} />
          <span className="text-[11px] mt-1">Dashboard</span>
        </Link>
        <Link to="/tasks" className="flex flex-col items-center text-headings hover:text-primary">
          <Trophy size={20} />
          <span className="text-[11px] mt-1">Tasks</span>
        </Link>
        <Link to="/profile" className="flex flex-col items-center text-headings hover:text-primary">
          <User size={20} />
          <span className="text-[11px] mt-1">Profile</span>
        </Link>
      </div>
    </div>
  )
}

export default function App() {
  const [userXp, setUserXp] = useState(72)
  const [userLevel, setUserLevel] = useState(4)
  const [offline, setOffline] = useState(() => !navigator.onLine)

  const addXp = (points) => {
    setUserXp(prev => {
      const newXp = prev + points
      const newLevel = Math.floor(newXp / 100) + 1
      setUserLevel(newLevel)
      return newXp
    })
  }

  useEffect(() => {
    const on = () => setOffline(false)
    const off = () => setOffline(true)
    window.addEventListener('online', on)
    window.addEventListener('offline', off)
    return () => { window.removeEventListener('online', on); window.removeEventListener('offline', off) }
  }, [])

  return (
    <div className="app-root">
      <Background />
      {offline && (
        <div className="fixed top-3 inset-x-0 z-40 px-4">
          <div className="glass-card max-w-xl mx-auto px-3 py-2 rounded-xl text-[13px] text-muted">
            You are offline. Changes will sync when you’re back online.
          </div>
        </div>
      )}

      <Nav xp={userXp} level={userLevel} />

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<EcoTasks addXp={addXp} />} />
        </Routes>
      </motion.main>

      <FooterNav />
      <Chatbot />

      {/* Light global styles for leaf floating */}
      <style>{`
        .dark .footer-glass { box-shadow: 0 12px 40px rgba(0,0,0,0.35) }
      `}</style>
    </div>
  )
}
