
export const fallbackTips = [
  {
    text: "Switch to LED bulbs to reduce energy consumption by up to 75%",
    impact: "Could save 50kg of CO₂ per year"
  },
  {
    text: "Use a reusable water bottle instead of buying plastic ones",
    impact: "Prevents 167 plastic bottles from entering landfills annually"
  },
  {
    text: "Unplug electronics when not in use to avoid phantom energy draw",
    impact: "Can reduce your electricity bill by 5-10%"
  }
];

export const fallbackImpact = {
  daily: { co2: 2.5, water: 15, plastic: 3 },
  weekly: { co2: 17.5, water: 105, plastic: 21 },
  monthly: { co2: 75, water: 450, plastic: 90 },
  badges: [
    { name: 'Water Saver', earned: true },
    { name: 'Plastic Reducer', earned: true },
    { name: 'Energy Efficient', earned: false }
  ]
};

export const fallbackNews = [
  {
    id: 1,
    title: "New Solar Technology Breakthrough",
    summary: "Scientists develop more efficient solar panels that work in low light conditions.",
    source: "EcoTech News",
    category: "Innovation",
    timestamp: Date.now() - 3600000,
    url: "#"
  },
  {
    id: 2,
    title: "Ocean Cleanup Project Removes 100 Tons of Plastic",
    summary: "Latest cleanup effort in the Pacific shows promising results for marine conservation.",
    source: "Ocean Watch",
    category: "Climate",
    timestamp: Date.now() - 7200000,
    url: "#"
  },
  {
    id: 3,
    title: "Cities Adopting Zero-Waste Policies",
    summary: "Major metropolitan areas implement comprehensive recycling and composting programs.",
    source: "Urban Green",
    category: "Policy",
    timestamp: Date.now() - 10800000,
    url: "#"
  }
];

export const defaultProfile = {
  name: 'Eco Warrior',
  avatar: '',
  bio: 'Reduce waste, Save water, Plant trees',
  language: 'English',
  goals: ['Reduce waste', 'Save water', 'Plant trees']
}
