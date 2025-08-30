import React from 'react'
import XpBar from './XpBar'
import PlantBuddy from './PlantBuddy'

export default function LandingProfilePanel(){
  // Simple profile-themed panel for the landing about section
  return (
    <div className="space-y-4">
      {/* Avatar + greeting */}
      <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-eco-100 flex items-center justify-center text-primary font-bold">U</div>
        <div>
          <div className="font-semibold text-headings">Welcome 🌱</div>
          <div className="text-sm text-muted">Ready to grow your impact?</div>
        </div>
      </div>

      {/* XP snapshot */}
      <div className="glass-card p-4 rounded-2xl">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted">Level progress</div>
          <div className="text-sm font-semibold text-headings">Guest</div>
        </div>
        <div className="mt-2"><XpBar xp={12} level={1} /></div>
      </div>

      {/* PlantBuddy growth */}
      <div className="glass-card p-4 rounded-2xl">
        <h4 className="font-semibold text-headings mb-2">Plant Buddy</h4>
        <PlantBuddy xp={35} />
      </div>

      {/* Badge chips */}
      <div className="glass-card p-3 rounded-2xl">
        <div className="text-sm text-muted mb-2">Starter badges</div>
        <div className="flex flex-wrap gap-2">
          <span className="badge-chip">🌿 First Step</span>
          <span className="badge-chip">💧 Water Saver</span>
          <span className="badge-chip">♻️ Recycler</span>
        </div>
      </div>
    </div>
  )
}
