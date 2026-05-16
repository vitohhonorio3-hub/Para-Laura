// ============================================================
// APP — Raiz da aplicação
// ============================================================

import { useState } from 'react'
import { startMusic } from './controllers/musicController'
import IntroView from './views/IntroView'
import StoryView from './views/StoryView'
import './styles/global.css'

export default function App() {
  const [started, setStarted] = useState(false)

  function handleStart() {
    setStarted(true)
    startMusic()
  }

  return (
    <>
      {!started && <IntroView onStart={handleStart} />}
      <StoryView visible={started} />
    </>
  )
}
