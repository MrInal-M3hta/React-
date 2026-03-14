import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('')

  // ===== CALLBACK FUNCTION EXAMPLES =====

  // 1. ARROW FUNCTION CALLBACK
  const handleArrowCallback = (value) => {
    setMessage(`Arrow Function Callback: ${value}`)
  }

  // 2. NORMAL FUNCTION CALLBACK
  function handleNormalCallback(value) {
    setMessage(`Normal Function Callback: ${value}`)
  }

  // 3. ARROW FUNCTION WITH PARAMETER
  const handleArrowWithParam = () => {
    handleArrowCallback('Hello from Arrow Function!')
  }

  // 4. NORMAL FUNCTION WITH PARAMETER
  function handleNormalWithParam() {
    handleNormalCallback('Hello from Normal Function!')
  }

  // 5. CALLBACK PASSED AS PROPS (simulated)
  const executeCallback = (callback) => {
    callback('Executed via executeCallback!')
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Callback Functions in React</h1>
      
      <div className="card">
        <h2>Counter Example</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <h2>Callback Examples</h2>
        
        {/* Arrow Function Callback */}
        <button onClick={handleArrowWithParam}>
          Arrow Function Callback
        </button>

        {/* Normal Function Callback */}
        <button onClick={handleNormalWithParam}>
          Normal Function Callback
        </button>

        {/* Direct Arrow Function */}
        <button onClick={() => executeCallback(handleArrowCallback)}>
          Execute Arrow Callback
        </button>

        {/* Direct Normal Function */}
        <button onClick={() => executeCallback(handleNormalCallback)}>
          Execute Normal Callback
        </button>

        {/* Display Result */}
        {message && <p style={{ color: '#00ff00', fontWeight: 'bold' }}>{message}</p>}

        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
          <h3>Callback Functions Explanation:</h3>
          <ul>
            <li><strong>Arrow Function:</strong> const handleArrowCallback = (value) =&gt; {'{...}'}</li>
            <li><strong>Normal Function:</strong> function handleNormalCallback(value) {'{...}'}</li>
            <li><strong>Callback:</strong> A function passed as an argument to another function</li>
            <li><strong>Use Case:</strong> Handle events, parent-child communication, async operations</li>
          </ul>
        </div>
      </div>

      <p className="read-the-docs">
        Click buttons to see different callback function examples
      </p>
    </>
  )
}

export default App
