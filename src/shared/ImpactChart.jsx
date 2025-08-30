import React, { useState, useEffect } from 'react'
import { fallbackImpact } from '../utils/fallbackData'
import { Droplet, Leaf, Clock } from 'lucide-react'

export default function ImpactChart() {
  const [period, setPeriod] = useState('daily')
  const [data, setData] = useState(fallbackImpact.daily)

  useEffect(() => {
    setData(fallbackImpact[period])
  }, [period])

  return (
    <div className="impact-chart">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Your Impact</h3>
        <div className="flex gap-2">
          <button onClick={() => setPeriod('daily')} className={`px-2 py-1 rounded ${period==='daily'?'bg-eco-500 text-white':'bg-white'}`}>Day</button>
          <button onClick={() => setPeriod('weekly')} className={`px-2 py-1 rounded ${period==='weekly'?'bg-eco-500 text-white':'bg-white'}`}>Week</button>
          <button onClick={() => setPeriod('monthly')} className={`px-2 py-1 rounded ${period==='monthly'?'bg-eco-500 text-white':'bg-white'}`}>Month</button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2 text-center">
        <div className="p-3 bg-white rounded-xl shadow-sm flex flex-col items-center gap-2">
          <Leaf className="text-eco-500" />
          <div className="text-sm text-gray-500">CO₂ reduced (kg)</div>
          <div className="text-lg font-semibold">{data.co2}</div>
        </div>
        <div className="p-3 bg-white rounded-xl shadow-sm flex flex-col items-center gap-2">
          <Droplet className="text-accent-soft" />
          <div className="text-sm text-gray-500">Water conserved (L)</div>
          <div className="text-lg font-semibold">{data.water}</div>
        </div>
        <div className="p-3 bg-white rounded-xl shadow-sm flex flex-col items-center gap-2">
          <Clock className="text-yellow-400" />
          <div className="text-sm text-gray-500">Plastic saved (units)</div>
          <div className="text-lg font-semibold">{data.plastic}</div>
        </div>
      </div>
    </div>
  )
}
