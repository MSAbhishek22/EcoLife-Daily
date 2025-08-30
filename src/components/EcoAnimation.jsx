import React, { Suspense } from 'react'
import Lottie from 'lottie-react'
// Use a small, local Lottie JSON or placeholder for now
import ecoAnim from '../assets/lottie/eco-placeholder.json'

export default function EcoAnimation({ className = 'w-full h-64' }){
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-64">Loading animation...</div>}>
      <div className={className}>
        <Lottie animationData={ecoAnim} loop={true} />
      </div>
    </Suspense>
  )
}
