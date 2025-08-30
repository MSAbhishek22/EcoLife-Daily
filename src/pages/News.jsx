import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import NewsCard from '../components/NewsCard'
import { fallbackNews } from '../utils/fallbackData'

const CATEGORIES = ['All', 'Climate', 'Innovation', 'Policy', 'Sustainability']

export default function News() {
  const [articles, setArticles] = useState(fallbackNews)
  const [active, setActive] = useState('All')

  function refresh() {
    // mimic fetching new articles
    const shuffled = [...fallbackNews].sort(() => Math.random() - 0.5)
    setArticles(shuffled)
  }

  const counts = useMemo(() => {
    const map = { All: articles.length }
    for (const cat of CATEGORIES.filter(c => c !== 'All')) {
      map[cat] = articles.filter(a => (a.category || '').toLowerCase() === cat.toLowerCase()).length
    }
    return map
  }, [articles])

  const filtered = useMemo(() => {
    if (active === 'All') return articles
    return articles.filter(a => (a.category || '').toLowerCase() === active.toLowerCase())
  }, [articles, active])

  return (
    <section className="page">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-headings tracking-tight">Eco News & Insights</h1>
        <p className="text-muted mt-2 max-w-2xl mx-auto">
          Curated stories on climate, innovation, and policy — stay informed and inspired.
        </p>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-10">
        <div className="bg-card/70 backdrop-blur rounded-xl shadow-premium border border-card p-2 mb-6">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {CATEGORIES.map(cat => {
              const isActive = active === cat
              const base = 'px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors'
              const cls = isActive
                ? 'bg-eco-50 text-primary border border-emerald-100'
                : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`${base} ${cls}`}
                  aria-pressed={isActive}
                >
                  {cat}
                  <span className="ml-2 text-xs text-gray-400">{counts[cat] ?? 0}</span>
                </button>
              )
            })}
            <div className="ml-auto flex-shrink-0">
              <button onClick={refresh} className="btn outline text-sm">Refresh</button>
            </div>
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-16 bg-card rounded-xl shadow-premium border border-card">
          <div className="text-6xl mb-2">🌿</div>
          <h3 className="font-semibold text-headings mb-1">No articles in {active}</h3>
          <p className="text-muted mb-4">Try a different category or refresh for new stories.</p>
          <button onClick={refresh} className="btn primary">Refresh Feed</button>
        </div>
      )}

      {/* FAB */}
      <button
        aria-label="refresh"
        className="fixed bottom-6 right-6 btn primary shadow-lg rounded-full px-3 py-3 md:hidden"
        onClick={refresh}
      >↻</button>
    </section>
  )
}
