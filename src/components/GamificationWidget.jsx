import React, { useState } from 'react'
import AchievementModal from './AchievementModal'

export default function GamificationWidget({ xp=72, level=4 }){
  const [open, setOpen] = useState(false)
  const pct = Math.min(100, Math.round(xp % 100))

  return (
    <>
      <div className="gamify-widget fixed bottom-8 right-6 z-40 flex items-center gap-3">
        <button className="orb" onClick={() => setOpen(true)} aria-label="Open achievements">
          <div className="orb-inner">
            <div className="level">{level}</div>
            <svg className="ring" viewBox="0 0 36 36">
              <path className="bg" d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831 15.9155 15.9155 0 1 0 0-31.831"/>
              <path className="progress" d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831 15.9155 15.9155 0 1 0 0-31.831" strokeDasharray="100" strokeDashoffset={`${100 - pct}`} />
            </svg>
          </div>
        </button>
        <div className="widget-info hidden md:flex flex-col items-start">
          <div className="text-sm font-semibold">Level {level}</div>
          <div className="text-xs text-gray-400">{xp} XP • {pct}% to next</div>
        </div>
      </div>
      <AchievementModal open={open} onClose={() => setOpen(false)} badge={{ name: 'First Steps', description: 'Completed your first eco tip' }} />
    </>
  )
}
