// ============================================================
// VIEW — Barras de progresso (estilo Stories)
// ============================================================

import '../styles/slide.css'

export default function ProgressBar({ total, current, progress }) {
  return (
    <div className="progress-container">
      {Array.from({ length: total }).map((_, i) => {
        let width
        if (i < current) width = '100%'
        else if (i === current) width = `${progress}%`
        else width = '0%'

        return (
          <div className="progress-bar" key={i}>
            <div className="progress-bar__fill" style={{ width }} />
          </div>
        )
      })}
    </div>
  )
}
