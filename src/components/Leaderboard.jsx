import React from 'react'

const mock = [
  { id: 1, name: 'Ava', points: 320, streak: 12 },
  { id: 2, name: 'Liam', points: 280, streak: 9 },
  { id: 3, name: 'Noah', points: 220, streak: 6 },
  { id: 4, name: 'Sophia', points: 180, streak: 4 }
]

export default function Leaderboard({ users = mock }){
  return (
    <div className="leaderboard bg-white rounded-xl p-4 shadow-premium">
      <h4 className="font-semibold mb-3">Leaderboard</h4>
      <div className="grid gap-2">
        {users.map((u, i) => (
          <div key={u.id} className={`flex items-center justify-between p-2 rounded ${i<3? 'bg-amber-50':'bg-white/50'}`}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center font-bold">{i+1}</div>
              <div>
                <div className="font-medium">{u.name} {i===0 && <span className="text-amber-400">👑</span>}</div>
                <div className="text-xs text-gray-500">{u.streak} day streak</div>
              </div>
            </div>
            <div className="text-sm font-semibold">{u.points}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
