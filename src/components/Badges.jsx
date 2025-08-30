import React from 'react'
import { badges } from '../utils/habitsData'

export default function Badges(){
  return (
    <div className="badges space-y-3">
      <h4 className="font-semibold">Badges</h4>
      <div className="grid gap-2">
        {badges.map(b=> (
          <div key={b.id} className={`p-3 rounded-lg ${b.earned? 'bg-eco-50':'bg-white'} border`}>{b.name} — <span className="text-sm text-gray-500">{b.description}</span></div>
        ))}
      </div>
    </div>
  )
}
