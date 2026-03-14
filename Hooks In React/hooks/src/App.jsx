import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState Hook - manages state
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [items, setItems] = useState([])

  // useRef Hook - persists value across renders
  const renderCount = useRef(0)

  // useEffect Hook - runs side effects
  useEffect(() => {
    renderCount.current++
    console.log(`Component rendered ${renderCount.current} times`)
  }, [count])

  const handleAddItem = () => {
    setItems([...items, `Item ${items.length + 1}`])
  }
  function setCountIncrease() {
    setCount(count + 1)
  }
  function setCountDecrease() {
    setCount(count - 1)
  }
  const setCountReset = () => {
    setCount(0)
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
      <h1>React Hooks </h1>
      
      <div className="card">
        <h2>useState Hook</h2>
        <div>
          <button onClick={() => setCount((count) => count + 1)}>
            Increase Count
          </button>
 {/* Why do we have to pass count as an argument here?
👉 We are NOT passing count to onClick.
👉 We are passing a function to setCount.
👉 That count is the previous state value, provided by React.

	•	This count is not the outer count
	•	It is a new variable
	•	React passes the latest state value into it

This is called a functional state update. It allows us to update state based on the previous state, which is important when the new state depends on the old state. If we just did setCount(count + 1), it would capture the count value at the time of rendering, which might not be the latest value if there are multiple updates in quick succession.

By using the functional form of setState, we ensure that we always have the most up-to-date state value when calculating the new state.

🔹 WHAT setCount ACCEPTS (VERY IMPORTANT)

setCount can be called in two ways:

1️⃣ Direct value update
setCount(count + 1)
Here:
	•	count comes from the current render (closure)
	•	Works in many cases
	•	❌ Can break in async/batched updates

2️⃣ Functional update
setCount((prevCount) => prevCount + 1)
Here:
  •	prevCount is provided by React and is always the latest state value
  •	✅ Safe for async/batched updates
  •	Recommended when new state depends on old state */}


          <button onClick={() => setCount((count) => count - 1)}>
            Decrease Count
          </button>

          {/* setCount((count) => count - 1)
          is the same as writing:

          setCount((prevCount) => {
            return prevCount - 1;
          });
          👉 That count is just a parameter name
          👉 You could rename it: */}

          <button onClick={setCountReset}>
            Reset Count
          </button>
          <p>Count: {count}</p>
        </div>

        <input 
          type="text" 
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {name && <p>Hello, {name}!</p>}
        
        <button onClick={handleAddItem}>Add Item</button>
        <ul>
          {items.map((item, idx) => <li key={idx}>{item}</li>)}
        </ul>

        <p>
          <code>useState</code> - Manages component state
        </p>
        <p>
          <code>useEffect</code> - Handles side effects (renders: {renderCount.current})
        </p>
        <p>
          <code>useRef</code> - Persists values without re-renders
        </p>
      </div>

      <p className="read-the-docs">
        Learn more about React hooks at react.dev
      </p>
    </>
  )
}

export default App
