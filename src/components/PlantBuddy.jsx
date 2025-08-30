import React from 'react'
import { motion } from 'framer-motion'

// Simple plant buddy: grows with xp (0-100)
export default function PlantBuddy({ xp = 40 }) {
  const scale = Math.max(0.6, Math.min(1.15, 0.6 + (xp / 100) * 0.55))
  const hue = 120 + Math.floor((xp / 100) * 40) // greener with more xp

  return (
    <div className="p-4 bg-card rounded-xl shadow-premium border border-card">
      <h4 className="font-semibold mb-2">Plant Buddy</h4>
      <p className="text-sm text-muted mb-3">Nurture your plant by completing tips and tasks.</p>
      <div className="flex items-end justify-center h-40">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 180 }}
          className="relative"
        >
          {/* pot */}
          <div className="w-20 h-10 bg-orange-300 rounded-t-md mx-auto" />
          {/* stem + leaves */}
          <svg width="140" height="120" viewBox="0 0 140 120" className="absolute -top-24" style={{ left: '50%', transform: 'translateX(-50%)' }}>
            <g>
              <path d="M70 120 C 68 90, 72 70, 70 40" stroke={`hsl(${hue} 50% 35%)`} strokeWidth="6" fill="none" strokeLinecap="round" />
              <ellipse cx="55" cy="72" rx="14" ry="8" fill={`hsl(${hue} 60% 45%)`} />
              <ellipse cx="85" cy="62" rx="16" ry="9" fill={`hsl(${hue} 60% 45%)`} />
              <ellipse cx="62" cy="50" rx="10" ry="6" fill={`hsl(${hue} 60% 45%)`} />
            </g>
          </svg>
        </motion.div>
      </div>
      <div className="text-sm text-muted text-center mt-2">Growth: {Math.round(xp)}%</div>
    </div>
  )
}
