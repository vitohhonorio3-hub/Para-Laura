// ============================================================
// VIEW — Tela final: pedido de casamento + morar juntos
// ============================================================

import { useMemo } from 'react'
import '../styles/proposal.css'

const COLORS = ['#e8a0a0', '#d4a843', '#ffffff', '#f9c6c9', '#ffd700', '#ffb6c1']

export default function ProposalView() {
  const stars = useMemo(() =>
    Array.from({ length: 90 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 2.8 + 0.8,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 2}s`,
    })), [])

  const confetti = useMemo(() =>
    Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: `${Math.random() * 6}s`,
      duration: `${Math.random() * 4 + 5}s`,
      isCircle: Math.random() > 0.5,
      width: Math.random() * 6 + 6,
      height: Math.random() * 6 + 6,
    })), [])

  return (
    <div className="proposal">
      {/* Stars */}
      <div className="proposal__stars">
        {stars.map((s) => (
          <div
            key={s.id}
            className="proposal__star"
            style={{
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
      </div>

      {/* Confetti */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="proposal__confetti-piece"
          style={{
            left: c.left,
            background: c.color,
            width: c.width,
            height: c.height,
            borderRadius: c.isCircle ? '50%' : '2px',
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
        />
      ))}

      {/* Content */}
      <div className="proposal__ring">💍</div>

      <h2 className="proposal__title">Casa & Vida</h2>

      <p className="proposal__text">
        <em>Laura</em>, você é o amor mais bonito<br />
        que já aconteceu comigo.<br /><br />
        Quero acordar ao seu lado todo dia.<br />
        Quero que a gente construa<br />
        um lar cheio de amor juntos.
      </p>

      <p className="proposal__home">
        🏠 <strong>Vamos morar juntos?</strong><br />
        E quem sabe... muito mais? 💍
      </p>

      <p className="proposal__signature">Com todo meu amor ♾️</p>
    </div>
  )
}
