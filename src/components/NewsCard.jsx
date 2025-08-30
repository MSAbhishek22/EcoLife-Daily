import React from 'react'
import { motion } from 'framer-motion'

export default function NewsCard({ article }){
  const badge = Math.random() > 0.8 ? 'Hot' : (Math.random()>0.95? 'Trending' : '')
  const timeAgo = (()=>{
    const diff = Date.now() - (article.timestamp || Date.now())
    const hrs = Math.floor(diff / (1000*60*60))
    if(hrs < 1) return 'just now'
    if(hrs < 24) return `${hrs}h`
    return `${Math.floor(hrs/24)}d`
  })()

  return (
    <motion.article initial={{ opacity:0, y:8 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="news-card bg-white rounded-xl p-4 shadow-premium">
      <div className="flex items-start gap-3">
        <div className="w-16 h-16 rounded-lg bg-emerald-100 flex items-center justify-center text-sm font-semibold">{article.source?.split(' ')[0] || 'News'}</div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-emerald-700">{article.title}</h4>
            {badge && <span className="ml-2 text-xs px-2 py-1 rounded bg-amber-100 text-amber-600">{badge}</span>}
          </div>
          <p className="text-sm text-gray-500 mt-1">{article.summary}</p>
          <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
            <div>{article.source}</div>
            <div>{timeAgo}</div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
