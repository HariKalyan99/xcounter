import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount((prev) => prev + 1)
  }

  const handleDec = () => {
    setCount((prev) => prev - 1)
  }
  
  return (
    <div>
      <h1>Counter App</h1>
      <br />
      <br />
      <h3>Count: {count}</h3>
      <br />
      <br />
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
    </div>
  )
}

export default App
