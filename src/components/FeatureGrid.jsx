import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Clock, Globe, Zap, BarChart, Users } from 'lucide-react'

const features = [
  { id:1, title: 'Daily AI Tips', desc: 'Short, actionable tips generated daily.', icon: <Leaf /> },
  { id:2, title: 'Gamified Tasks', desc: 'Complete eco-missions and earn experience points.', icon: <Zap /> },
  { id:3, title: 'Track Your Impact', desc: 'See your progress and how you help the planet.', icon: <BarChart /> },
  { id:4, title: 'Community Actions', desc: 'Share tips and join local cleanups.', icon: <Users /> }
]

export default function FeatureGrid(){
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="feature-card text-center p-6 bg-white rounded-xl shadow-sm"
        >
          <div className="text-primary mb-4 flex justify-center">{feature.icon}</div>
          <h3 className="font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-600">{feature.desc}</p>
        </motion.div>
      ))}
    </div>
  )
}
