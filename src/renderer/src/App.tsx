import { useState } from 'react'
import Timer from './components/timer'
import TopBar from './components/top-bar'

const App = () => {
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <main>
      <TopBar />
      <Timer isOverlay={isOverlay} />
    </main>
  )
}

export default App
