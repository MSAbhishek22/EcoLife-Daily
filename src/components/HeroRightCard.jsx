import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { motion } from 'framer-motion'
import { fallbackImpact } from '../utils/fallbackData'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function HeroRightCard(){
  const data = {
    labels: ['CO₂', 'Water', 'Plastic'],
    datasets: [{
      data: [fallbackImpact.weekly.co2, fallbackImpact.weekly.water, fallbackImpact.weekly.plastic],
      backgroundColor: ['#2E7D32', '#009688', '#FFE082']
    }]
  }

  return (
    <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="p-6 bg-white rounded-xl shadow-premium">
      <h4 className="font-semibold mb-3">Impact snapshot (weekly)</h4>
      <div className="grid grid-cols-2 gap-4 items-center">
        <div>
          <Doughnut data={data} />
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-eco-50 flex items-center justify-center text-primary">CO₂</div>
            <div>
              <div className="text-sm text-gray-500">CO₂ reduced</div>
              <div className="font-medium">{fallbackImpact.weekly.co2} kg</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-eco-50 flex items-center justify-center text-accent">H₂O</div>
            <div>
              <div className="text-sm text-gray-500">Water conserved</div>
              <div className="font-medium">{fallbackImpact.weekly.water} L</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-eco-50 flex items-center justify-center text-yellow-400">PL</div>
            <div>
              <div className="text-sm text-gray-500">Plastic saved</div>
              <div className="font-medium">{fallbackImpact.weekly.plastic} units</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
