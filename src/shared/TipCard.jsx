import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { fallbackTips } from '../utils/fallbackData'
import { exportElementAsPNG, exportElementAsPDF } from '../utils/exporter'

const TipCard = ({ tip = fallbackTips[0] }) => {
  const elRef = useRef(null)

  return (
    <motion.article ref={elRef} className="tip-card" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300 }}>
      <header>
        <h3 className="text-lg font-semibold">🌱 Today’s Tip</h3>
        <div className="mt-2 text-sm text-gray-700">{tip.text}</div>
      </header>
      <p className="mt-3 text-sm text-gray-500">{tip.impact}</p>
      <div className="actions mt-4 flex gap-2">
        <button className="btn primary">Mark Done</button>
        <button onClick={()=>exportElementAsPNG(elRef.current, 'ecolife-tip.png')} className="btn outline">Export PNG</button>
        <button onClick={()=>exportElementAsPDF(elRef.current, 'ecolife-tip.pdf')} className="btn outline">Export PDF</button>
      </div>
    </motion.article>
  )
}

export default TipCard
