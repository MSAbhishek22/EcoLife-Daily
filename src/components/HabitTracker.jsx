import React, { useState } from 'react'
import { habits as defaultHabits } from '../utils/habitsData'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'

function ProgressBar({ value }){
  return (
    <div className="progress-rail">
      <div className="progress-fill" style={{ width: `${value}%` }} />
    </div>
  )
}

export default function HabitTracker({ demoMode = true }){
  const [habits, setHabits] = useState(defaultHabits)
  const [xp, setXp] = useState(0)

  function completeHabit(id){
    setHabits(h => h.map(item => {
      if(item.id === id){
        const updated = { ...item, streak: item.streak + 1, progress: Math.min(100, item.progress + 20) }
        return updated
      }
      return item
    }))
    // simple confetti and xp
    confetti({ particleCount: 40, spread: 70, origin: { y: 0.6 } })
    setXp(x => x + 10)
  }

  return (
    <section className="habit-tracker space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Habit Tracker</h3>
        {demoMode && <button className="text-sm btn outline" onClick={() => setHabits(defaultHabits)}>Reset demo</button>}
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {habits.map(h => (
          <motion.div key={h.id} whileHover={{ y: -6 }} className="glass-card p-4 rounded-2xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl">{h.icon}</div>
              <div>
                <div className="font-medium">{h.name}</div>
                <div className="text-sm text-gray-500">Streak: {h.streak} days</div>
              </div>
            </div>
            <div className="half">
              <ProgressBar value={h.progress} />
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm text-gray-500">{h.progress}% complete</div>
                <div>
                  <button className="btn primary text-sm" onClick={() => completeHabit(h.id)}>Complete</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 p-3 glass-card rounded-2xl">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-500">XP earned</div>
            <div className="font-semibold">{xp} XP</div>
          </div>
          <div>
            <div className="text-sm text-gray-500">Badges</div>
            <div className="font-semibold">3 earned</div>
          </div>
        </div>
      </div>
    </section>
  )
}
