// ============================================================
// VIEW — Corações flutuantes
// ============================================================

import { useMemo } from 'react'
import '../styles/slide.css'

const EMOJIS = ['💕', '❤️', '🌸', '✨', '💗', '💖', '🥰']

export default function HeartsLayer({ active }) {
  const hearts = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left: `${Math.random() * 88 + 6}%`,
      duration: `${Math.random() * 4 + 5}s`,
      delay: `${Math.random() * 4}s`,
      size: `${Math.random() * 1.4 + 0.9}rem`,
    }))
  }, [])

  if (!active) return null

  return (
    <div className="hearts">
      {hearts.map((h) => (
        <div
          key={h.id}
          className="heart"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDuration: h.duration,
            animationDelay: h.delay,
          }}
        >
          {h.emoji}
        </div>
      ))}
    </div>
  )
}
