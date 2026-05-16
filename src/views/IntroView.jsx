// ============================================================
// VIEW — Tela de introdução
// ============================================================

import { useState } from 'react'
import '../styles/intro.css'

export default function IntroView({ onStart }) {
  const [hiding, setHiding] = useState(false)

  function handleStart() {
    setHiding(true)
    setTimeout(onStart, 1200)
  }

  return (
    <div className={`intro ${hiding ? 'hidden' : ''}`}>
      <div className="intro__heart">💕</div>
      <h1 className="intro__title">Laura</h1>
      <p className="intro__subtitle">Uma história nossa</p>
      <button className="intro__btn" onClick={handleStart}>
        Começar ✨
      </button>
    </div>
  )
}
