// ============================================================
// VIEW — Slide de foto individual
// ============================================================

import HeartsLayer from './HeartsLayer'
import ProposalView from './ProposalView'
import '../styles/slide.css'

export default function SlideView({ slide, isActive, onNext, onPrev }) {
  if (slide.type === 'proposal') {
    return (
      <div className={`slide ${isActive ? 'active' : ''}`}>
        <ProposalView />
      </div>
    )
  }

  const lines = slide.phrase.split('\n')

  return (
    <div className={`slide ${isActive ? 'active' : ''}`}>
      {/* Background photo */}
      <div
        className="slide__bg"
        style={{
          backgroundImage: `url('${slide.image}')`,
          backgroundPosition: slide.position,
        }}
      />

      {/* Overlays */}
      <div className="slide__overlay" />
      <div className="slide__vignette" />

      {/* Floating hearts */}
      <HeartsLayer active={isActive && slide.hearts} />

      {/* Text */}
      <div className="slide__content">
        <p className="slide__label">
          {String(slide.id).padStart(2, '0')} · {slide.label}
        </p>
        <h2 className="slide__phrase">
          {lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        <p className="slide__sub">{slide.sub}</p>
      </div>

      {/* Click zones */}
      <div className="slide__click-prev" onClick={onPrev} />
      <div className="slide__click-next" onClick={onNext} />
    </div>
  )
}
