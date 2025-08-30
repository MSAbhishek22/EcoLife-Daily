import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { askGemini } from '../services/geminiService'
import { AiOutlineRobot, AiOutlineClose } from 'react-icons/ai'

// Inbuilt FAQ fallback to keep chatbot useful without AI (EcoBuddy tone)
const FAQ = [
  { q: 'what is ecolife daily', a: 'EcoLife Daily helps you build sustainable habits with daily tips, missions, and a growing plant buddy that reflects your impact. 🌱' },
  { q: 'how to earn xp', a: 'Complete eco-tasks, mark tips as done, and read eco-news summaries to earn XP. Level up every 100 XP and keep your streak going! ✨' },
  { q: 'how do streaks work', a: 'Do at least one eco action daily to maintain your streak. Streak milestones unlock badges and bonus XP. 🔥' },
  { q: 'how to use habit tracker', a: 'Go to Dashboard → Habit Tracker. Tap a habit to complete and watch your progress bar fill smoothly. 💧' },
  { q: 'future roadmap', a: 'Coming soon: Community CleanMap, EcoRecipe, Offline Mode, Green Challenge, and Sustainable Shopper. ♻️' },
  { q: 'eco tips', a: 'Try easy swaps: reusable bottles, LED bulbs, short showers, and sorting recyclables. Small steps add up! 🌍' },
  { q: 'how to share tips', a: 'Use Export PNG/PDF on tip cards to share with friends. 📤' },
  { q: 'how to switch theme', a: 'Use the theme toggle in the top nav to switch between light and dark modes. 🌗' },
  { q: 'what is plant buddy', a: 'A friendly plant that grows greener as you gain XP. The more you do, the happier it gets! 🌿' },
]

function findFaqAnswer(input){
  const text = (input || '').toLowerCase()
  const hit = FAQ.find(item => text.includes(item.q))
  if (hit) return hit.a
  // soft fuzzy match by keyword
  if (/xp|level/.test(text)) return 'Earn XP by completing tasks, tips, and reading eco-news. Level up every 100 XP.'
  if (/habit|track|streak/.test(text)) return 'Track habits on the Dashboard. Completing a habit increases streaks and progress.'
  if (/tip|tips/.test(text)) return 'Check Today’s Tip on Dashboard or Landing. You can also export tips as PNG/PDF.'
  if (/news|articles/.test(text)) return 'Visit the News page. Filter by category and tap Refresh for new articles.'
  return null
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{ id: 1, from: 'bot', text: 'Hi, I\'m EcoBuddy! Ask me for eco tips, how XP/streaks work, or what\'s coming next. 🌱' }])
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  async function send() {
    if (!text.trim()) return
    const userMsg = { id: Date.now(), from: 'user', text }
    setMessages(m => [...m, userMsg])
    setText('')
    setLoading(true)

    try {
      const fallback = findFaqAnswer(userMsg.text)
      // try AI first; if it fails or returns empty, use FAQ fallback
      const ai = await Promise.race([
        askGemini(userMsg.text),
        new Promise((resolve) => setTimeout(() => resolve(''), 4000))
      ])
      const answer = (ai && ai.trim()) || fallback || 'Here’s a quick tip: carry a reusable bottle and say no to single-use plastic today!'
      setMessages(m => [...m, { id: Date.now()+1, from: 'bot', text: answer }])
    } catch (e) {
      const fallback = findFaqAnswer(userMsg.text) || 'Tip: Switch to LED bulbs to reduce energy use by up to 75%.'
      setMessages(m => [...m, { id: Date.now()+1, from: 'bot', text: fallback }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-lg overflow-hidden z-50">
            <div className="p-3 flex items-center justify-between border-b">
              <div className="flex items-center gap-2"><AiOutlineRobot size={20} /><strong>EcoBuddy</strong></div>
              <button onClick={() => setOpen(false)} className="text-gray-500"><AiOutlineClose /></button>
            </div>
            <div className="p-3 h-64 overflow-auto bg-slate-50">
              {messages.map(m => (
                <div key={m.id} className={`mb-2 ${m.from==='bot'?'text-left':'text-right'}`}>
                  <div className={`inline-block p-2 rounded-lg ${m.from==='bot'?'bg-white':'bg-eco-100'}`}>{m.text}</div>
                </div>
              ))}
              {loading && <div className="text-sm text-gray-500">Thinking...</div>}
              {/* FAQ quick suggestions when chat is short */}
              {!loading && messages.length <= 2 && (
                <div className="mt-2">
                  <div className="text-xs text-gray-500 mb-2">Quick questions</div>
                  <div className="flex flex-wrap gap-2">
                    {FAQ.slice(0,5).map((f, idx) => (
                      <button
                        key={idx}
                        onClick={() => { setText(f.q); setTimeout(() => send(), 0) }}
                        className="text-xs px-2 py-1 rounded-full border border-emerald-200 bg-white hover:bg-emerald-50 text-emerald-700"
                        aria-label={`Ask: ${f.q}`}
                      >
                        {f.q}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="p-3 border-t flex gap-2">
              <input value={text} onChange={e=>setText(e.target.value)} onKeyDown={e=>e.key==='Enter' && send()} className="flex-1 p-2 rounded-lg border" placeholder="Ask EcoBuddy..." />
              <button onClick={send} className="bg-eco-500 text-white px-3 rounded-lg">Send</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button whileTap={{ scale: 0.95 }} onClick={() => setOpen(o => !o)} className="fixed bottom-6 right-6 bg-eco-500 text-white p-4 rounded-full shadow-xl z-50">
        <AiOutlineRobot size={22} />
      </motion.button>
    </div>
  )
}
