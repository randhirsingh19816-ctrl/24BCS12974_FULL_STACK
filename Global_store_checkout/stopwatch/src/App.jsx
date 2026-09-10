import { useEffect, useState } from 'react'
import './App.css'

const formatTime = (totalMilliseconds) => {
  const totalSeconds = Math.floor(totalMilliseconds / 1000)
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60
  const milliseconds = Math.floor((totalMilliseconds % 1000) / 10)

  const padded = (value) => String(value).padStart(2, '0')

  return `${padded(minutes)}:${padded(seconds)}.${padded(milliseconds)}`
}

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running) return undefined

    const start = performance.now() - time
    const interval = window.setInterval(() => {
      setTime(Math.floor(performance.now() - start))
    }, 10)

    return () => window.clearInterval(interval)
  }, [running])

  const handleStart = () => setRunning(true)
  const handleStop = () => setRunning(false)
  const handleReset = () => {
    setRunning(false)
    setTime(0)
  }

  return (
    <main className="stopwatch-page">
      <div className="stopwatch-card">
        <h1>Stopwatch</h1>
        <div className="time-display" aria-label="Stopwatch display">
          {formatTime(time)}
        </div>
        <div className="controls">
          <button type="button" className="control-button start" onClick={handleStart}>
            Start
          </button>
          <button type="button" className="control-button stop" onClick={handleStop}>
            Stop
          </button>
          <button type="button" className="control-button reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
