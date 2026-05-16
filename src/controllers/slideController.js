// ============================================================
// CONTROLLER — Lógica de navegação entre slides
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react'
import { slides, SLIDE_DURATION } from '../models/slideModel'

export function useSlideController() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef(null)
  const progressRef = useRef(null)
  const startTimeRef = useRef(null)

  const isProposal = slides[current]?.type === 'proposal'

  const clearTimers = useCallback(() => {
    clearInterval(timerRef.current)
    cancelAnimationFrame(progressRef.current)
  }, [])

  const goTo = useCallback(
    (index) => {
      const clamped = Math.max(0, Math.min(index, slides.length - 1))
      setCurrent(clamped)
      setProgress(0)
    },
    []
  )

  const next = useCallback(() => {
    setCurrent((c) => {
      if (c < slides.length - 1) return c + 1
      return c
    })
    setProgress(0)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => {
      if (c > 0) return c - 1
      return c
    })
    setProgress(0)
  }, [])

  // Auto-advance + progress bar animation
  useEffect(() => {
    clearTimers()
    if (isProposal) {
      setProgress(100)
      return
    }

    setProgress(0)
    startTimeRef.current = performance.now()

    const tick = (now) => {
      const elapsed = now - startTimeRef.current
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100)
      setProgress(pct)
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(tick)
      } else {
        next()
      }
    }

    progressRef.current = requestAnimationFrame(tick)

    return clearTimers
  }, [current, isProposal, next, clearTimers])

  return { current, progress, next, prev, goTo, slides, isProposal }
}
