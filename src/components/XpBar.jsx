import React from 'react'
import { motion } from 'framer-motion'

export default function XpBar({ xp, level }) {
  const currentLevelXp = (level - 1) * 100
  const nextLevelXp = level * 100
  const progress = ((xp - currentLevelXp) / (nextLevelXp - currentLevelXp)) * 100

  return (
    <div className="xp-bar flex items-center gap-2">
      <span className="text-sm font-semibold">Lv.{level}</span>
      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <span className="text-xs text-gray-500">{xp}XP</span>
    </div>
  )
}
