// ============================================================
// CONTROLLER — Música gerada pelo Web Audio API
// ============================================================

let ctx = null
let masterGain = null
let playing = false
let loopTimeout = null

function getCtx() {
  if (!ctx) {
    ctx = new (window.AudioContext || window.webkitAudioContext)()
    masterGain = ctx.createGain()
    masterGain.gain.setValueAtTime(0.16, ctx.currentTime)
    masterGain.connect(ctx.destination)
  }
  return ctx
}

function playNote(freq, start, dur, vol = 0.5, type = 'sine') {
  const c = getCtx()
  const osc = c.createOscillator()
  const gain = c.createGain()
  osc.type = type
  osc.frequency.setValueAtTime(freq, c.currentTime + start)
  gain.gain.setValueAtTime(0, c.currentTime + start)
  gain.gain.linearRampToValueAtTime(vol, c.currentTime + start + 0.06)
  gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + start + dur)
  osc.connect(gain)
  gain.connect(masterGain)
  osc.start(c.currentTime + start)
  osc.stop(c.currentTime + start + dur + 0.15)
}

function playLoop() {
  if (!playing) return

  // Melodia romântica estilo La Vie en Rose
  const melody = [
    [261.63, 0.0, 0.55],
    [293.66, 0.55, 0.45],
    [329.63, 1.0, 0.55],
    [261.63, 1.55, 0.45],
    [329.63, 2.0, 0.55],
    [349.23, 2.55, 0.45],
    [392.00, 3.0, 1.1],
    [329.63, 4.3, 0.45],
    [349.23, 4.75, 0.45],
    [392.00, 5.2, 0.45],
    [440.00, 5.65, 0.45],
    [392.00, 6.1, 0.45],
    [349.23, 6.55, 0.45],
    [329.63, 7.0, 1.4],
  ]

  const bass = [
    [130.81, 0.0, 1.6],
    [130.81, 1.6, 1.4],
    [174.61, 3.0, 1.6],
    [164.81, 4.6, 1.4],
    [130.81, 6.0, 2.5],
  ]

  melody.forEach(([f, s, d]) => playNote(f, s, d, 0.55, 'triangle'))
  bass.forEach(([f, s, d]) => playNote(f, s, d, 0.3, 'sine'))

  loopTimeout = setTimeout(() => {
    if (playing) playLoop()
  }, 9200)
}

export function startMusic() {
  const c = getCtx()
  if (c.state === 'suspended') c.resume()
  if (!playing) {
    playing = true
    playLoop()
  }
}

export function stopMusic() {
  playing = false
  clearTimeout(loopTimeout)
  if (masterGain) {
    masterGain.gain.linearRampToValueAtTime(0, getCtx().currentTime + 0.8)
  }
}

export function resumeMusic() {
  if (masterGain && ctx) {
    masterGain.gain.linearRampToValueAtTime(0.16, ctx.currentTime + 0.5)
  }
  if (!playing) {
    playing = true
    playLoop()
  }
}

export function isPlaying() {
  return playing
}
