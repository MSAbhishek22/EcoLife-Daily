export const habits = [
  {
    id: 'recycle',
    name: 'Recycle Waste',
    icon: '♻️',
    color: 'green',
    progress: 80,
    streak: 7,
    history: [1,1,1,1,1,0,1]
  },
  {
    id: 'water',
    name: 'Save Water',
    icon: '💧',
    color: 'blue',
    progress: 55,
    streak: 3,
    history: [1,0,1,1,0,1,1]
  },
  {
    id: 'plant',
    name: 'Plant a Tree',
    icon: '🌱',
    color: 'teal',
    progress: 40,
    streak: 1,
    history: [0,0,0,1,0,0,0]
  }
]

export const badges = [
  { id: 'first-week', name: 'First Week', description: 'Completed a 7-day streak', earned: true },
  { id: 'green-friend', name: 'Green Friend', description: 'Shared your first tip', earned: false }
]
