import { fallbackTips } from '../utils/fallbackData'

// Prefer proxy; only use direct key if explicitly provided in env
const GEMINI_API_KEY = import.meta?.env?.VITE_GEMINI_API_KEY || ''
const PROXY_URL = 'http://localhost:4000/api/gemini'

async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 7000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(resource, { ...options, signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (e) {
    clearTimeout(id);
    throw e;
  }
}

function randomFallback(prompt) {
  // choose a helpful fallback based on prompt keywords when possible
  const lower = (prompt || '').toLowerCase()
  if (lower.includes('tip') || lower.includes('daily')) {
    const t = fallbackTips[Math.floor(Math.random() * fallbackTips.length)]
    return `Fallback tip: ${t.text} — ${t.impact}`
  }
  if (lower.includes('plastic')) return 'Fallback advice: Use reusable alternatives (bottles, bags) and avoid single-use plastics.'
  if (lower.includes('water')) return 'Fallback advice: Shorten showers by 1-2 minutes and fix leaks to conserve water.'
  // generic fallback
  const t = fallbackTips[Math.floor(Math.random() * fallbackTips.length)]
  return `Fallback tip: ${t.text} — ${t.impact}`
}

export async function askGemini(prompt) {
  // Strategy:
  // 1) Try local proxy (fast, no client key exposure)
  // 2) If proxy fails and a key is provided, try direct call
  // 3) Always fall back to local helpful content
  const parse = (data) => (
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    data?.output?.[0]?.content?.text ||
    data?.text || ''
  )

  // 1) Proxy
  try {
    const res = await fetchWithTimeout(PROXY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
      timeout: 5000
    })
    if (res.ok) {
      const data = await res.json()
      const text = parse(data)
      if (text) return text
    }
  } catch {}

  // 2) Direct (only if key available)
  if (GEMINI_API_KEY) {
    try {
      const res = await fetchWithTimeout('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': GEMINI_API_KEY
        },
        body: JSON.stringify({
          contents: [
            { role: 'user', parts: [{ text: prompt }] }
          ]
        }),
        timeout: 6000
      })
      if (res.ok) {
        const data = await res.json()
        const text = parse(data)
        if (text) return text
      }
    } catch {}
  }

  // 3) Fallback content
  return randomFallback(prompt)
}

export default { askGemini };
