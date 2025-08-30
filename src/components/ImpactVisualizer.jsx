import React, { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Leaf, Droplet } from 'lucide-react'
import PlantBuddy from './PlantBuddy'
import { fallbackImpact } from '../utils/fallbackData'

function useCountUp(target = 0, duration = 1500) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration)
      setValue(Math.floor(p * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])
  return value
}

function StatTile({ icon, label, value, suffix = '' }){
  const count = useCountUp(value, 1400)
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="glass-card p-4 rounded-2xl"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-eco-50 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div>
          <div className="text-sm text-muted">{label}</div>
          <div className="text-2xl font-extrabold text-headings">{count.toLocaleString()}<span className="ml-1 text-base font-semibold text-muted">{suffix}</span></div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ImpactVisualizer({ period = 'weekly' }) {
  const data = useMemo(() => fallbackImpact[period] || fallbackImpact.weekly, [period])

  // Optional sapling-to-tree loop using PlantBuddy XP cycling
  const [xp, setXp] = useState(40)
  useEffect(() => {
    const id = setInterval(() => {
      setXp((x) => (x >= 95 ? 40 : x + 5))
    }, 1500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="space-y-4">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-headings">Your Positive Impact</h3>
        <p className="text-sm text-muted">Keep going — small actions add up.</p>
      </div>

      {/* Stats grid */}
      <div className="grid gap-3 md:grid-cols-3">
        <StatTile icon={<Leaf className="text-primary" />} label="Trees planted (virtual)" value={Math.round(data.co2 / 20)} />
        <StatTile icon={<Droplet className="text-accent" />} label="Water saved" value={data.water} suffix="L" />
        <StatTile icon={<span role="img" aria-label="recycle">♻️</span>} label="Plastic avoided" value={data.plastic} suffix="pcs" />
      </div>

      {/* Sapling animation + daily tip spotlight */}
      <div className="grid gap-3 md:grid-cols-2">
        <div className="glass-card p-4 rounded-2xl">
          <h4 className="font-semibold mb-2 text-headings">Sapling growth</h4>
          <p className="text-sm text-muted mb-3">Your plant grows as you complete eco actions.</p>
          <PlantBuddy xp={xp} />
        </div>
        <div className="glass-card p-4 rounded-2xl">
          <h4 className="font-semibold mb-2 text-headings">Daily Eco Tip</h4>
          <p className="text-sm text-muted">Shorten your showers by 2 minutes to conserve up to 20 liters of water. Try it today! 💧</p>
          <div className="mt-3">
            <button className="cta-primary">I’ll try this</button>
          </div>
        </div>
      </div>

      {/* Decorative drifting leaves for section only */}
      <div className="relative h-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute select-none"
            style={{ left: `${20 + i * 25}%`, top: -12 }}
            animate={{ y: [0, -6, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6 + i, repeat: Infinity }}
          >
            🌿
          </motion.span>
        ))}
      </div>
    </section>
  )
}
