import { useState } from 'react'
import TopBar from './components/top-bar'

const App = () => {
  const [isOverlay, setIsOverlay] = useState(false)

  return (
    <main>
      <TopBar />
      <h1 className="text-rose-500"> Hello World</h1>
    </main>
  )
}

export default App
