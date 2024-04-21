import { useState } from 'react'
import Timer from './components/timer'
import TopBar from './components/top-bar'

const App = () => {
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <main>
      <TopBar />
      <div className="bg-black/30 rounded-b-xl">
        <Timer isOverlay={isOverlay} />
      </div>
    </main>
  )
}

export default App
