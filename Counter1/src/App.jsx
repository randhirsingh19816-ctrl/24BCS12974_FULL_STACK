import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increase = () => setCount((current) => current + 1)
  const decrease = () => setCount((current) => current - 1)

  return (
    <main className="app">
      <h1>Counter</h1>
      <div className="counter-box">
        <p className="count">{count}</p>
      </div>
      <div className="buttons">
        <button onClick={decrease}>Minus--</button>
        <button onClick={increase}>Plus++</button>
      </div>
    </main>
  )
}

export default App
