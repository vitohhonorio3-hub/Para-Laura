// ============================================================
// VIEW — Container principal dos Stories
// ============================================================

import { useState } from 'react'
import { useSlideController } from '../controllers/slideController'
import { startMusic, stopMusic, resumeMusic, isPlaying } from '../controllers/musicController'
import ProgressBar from './ProgressBar'
import SlideView from './SlideView'
import '../styles/slide.css'

export default function StoryView({ visible }) {
  const { current, progress, next, prev, slides } = useSlideController()
  const [musicOn, setMusicOn] = useState(true)
  const [showHint, setShowHint] = useState(true)

  function handleNext() {
    if (showHint) setShowHint(false)
    next()
  }

  function handlePrev() {
    if (showHint) setShowHint(false)
    prev()
  }

  function toggleMusic() {
    if (isPlaying()) {
      stopMusic()
      setMusicOn(false)
    } else {
      resumeMusic()
      setMusicOn(true)
    }
  }

  return (
    <div className={`story ${visible ? 'visible' : ''}`}>
      {/* Progress bars */}
      <ProgressBar total={slides.length} current={current} progress={progress} />

      {/* Music toggle */}
      <button className="music-btn" onClick={toggleMusic} aria-label="Música">
        {musicOn ? '🎵' : '🔇'}
      </button>

      {/* Tap hint */}
      {showHint && <p className="tap-hint">toque para avançar →</p>}

      {/* Slides */}
      {slides.map((slide, i) => (
        <SlideView
          key={slide.id}
          slide={slide}
          isActive={i === current}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      ))}
    </div>
  )
}
