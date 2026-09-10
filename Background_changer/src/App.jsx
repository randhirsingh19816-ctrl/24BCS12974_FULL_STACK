import { useState } from 'react'
import './App.css'

function App() {
  const [isBlue, setIsBlue] = useState(false)

  const handleClick = () => {
    setIsBlue(!isBlue)
  }

  return (
    <div className={isBlue ? 'bg-blue' : 'bg-white'}>
      <div className="container">
        <button onClick={handleClick}>
          {isBlue ? 'Change' : 'Change'}
        </button>
      </div>
    </div>
  )
}

export default App
