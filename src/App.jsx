import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './Team'
import Friends from './Friends'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>React_with setCount</h2>

      <Friends></Friends>
      <Team></Team>

    </>
  )
}

export default App
