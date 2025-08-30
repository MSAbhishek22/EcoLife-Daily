import React, { useEffect, useState } from 'react'

function useAnimatedNumber(target, duration = 1200){
  const [value, setValue] = useState(0)
  useEffect(()=>{
    let start = null
    const step = (timestamp) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setValue(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration])
  return value
}

export default function LiveImpactCounter({value = 1200, label = 'Plastic bottles saved'}){
  const n = useAnimatedNumber(value)
  return (
    <div className="live-impact flex items-baseline gap-3">
      <div className="text-3xl font-bold text-primary">{n}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  )
}
