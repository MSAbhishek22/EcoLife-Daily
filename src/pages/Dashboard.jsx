import React from 'react'
import TipCard from '../shared/TipCard'
import ImpactChart from '../shared/ImpactChart'
import HabitTracker from '../components/HabitTracker'
import Badges from '../components/Badges'
import Footer from '../components/Footer'
import Leaderboard from '../components/Leaderboard'
import PlantBuddy from '../components/PlantBuddy'
import { demoUsers, demoImpact } from '../utils/demoData'

function ImpactCard({ impact }){
  return (
    <div className="p-4 bg-white rounded-xl shadow-premium">
      <h4 className="font-semibold mb-2">Your Impact</h4>
      <div className="text-sm text-gray-500">This week</div>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <div className="p-3 bg-emerald-50 rounded">
          <div className="text-sm text-gray-600">Plastic bottles</div>
          <div className="font-bold text-xl">{impact.bottles} saved</div>
        </div>
        <div className="p-3 bg-emerald-50 rounded">
          <div className="text-sm text-gray-600">CO₂ reduced</div>
          <div className="font-bold text-xl">{impact.co2Kg} kg</div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
  <section className="page">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center font-bold">A</div>
          <div>
            <div className="text-sm text-gray-500">Welcome back</div>
            <div className="font-semibold text-lg">Ava — Keep going 🌿</div>
          </div>
        </div>
        <div className="hidden md:flex gap-3 items-center">
          <div className="text-sm text-gray-500">Streak</div>
          <div className="font-semibold">12 days</div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <TipCard />
          <HabitTracker />
        </div>
        <div className="space-y-4">
          <PlantBuddy xp={65} />
          <ImpactCard impact={demoImpact} />
          <Leaderboard users={demoUsers} />
          <Badges />
        </div>
      </div>

      <div className="mt-8"><Footer /></div>
    </section>
  )
}
