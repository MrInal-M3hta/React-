import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [events, setEvents] = useState([])
  const [focusBlurText, setFocusBlurText] = useState('')

  // 1. Basic Click Event
  const handleClick = () => {
    setCount(count + 1)
    logEvent('Click')
  }

  // 2. Double Click Event
  const handleDoubleClick = () => {
    setCount(0)
    logEvent('Double Click')
  }

  // 3. Change Event (Input)
  const handleChange = (e) => {
    setText(e.target.value)
    logEvent(`Input Change: ${e.target.value}`)
  }

  // 4. Focus & Blur Events
  const handleFocus = (e) => {
    logEvent('Input Focused')
    setFocusBlurText(e.target.value)
  }

  const handleBlur = (e) => {
    logEvent('Input Blurred')
    setFocusBlurText(e.target.value)
  }

  const handleFocusBlurChange = (e) => {
    setFocusBlurText(e.target.value)
  }

  // 5. Mouse Events
  const handleMouseEnter = () => {
    logEvent('Mouse Enter')
  }

  const handleMouseLeave = () => {
    logEvent('Mouse Leave')
  }

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const handleMouseDown = () => {
    logEvent('Mouse Down')
  }

  const handleMouseUp = () => {
    logEvent('Mouse Up')
  }

  // 6. Keyboard Events
  const handleKeyDown = (e) => {
    logEvent(`Key Down: ${e.key}`)
  }

  const handleKeyUp = (e) => {
    logEvent(`Key Up: ${e.key}`)
  }

  const handleKeyPress = (e) => {
    logEvent(`Key Press: ${e.key}`)
  }

  // 7. Form Events
  const handleSubmit = (e) => {
    e.preventDefault()
    logEvent(`Form Submitted with: ${text}`)
    setText('')
  }

  // 8. Event Delegation (using onClick with data attribute)
  const handleListItemClick = (e) => {
    logEvent(`List Item Clicked: ${e.currentTarget.dataset.id}`)
  }

  // 9. Scroll Event
  const handleScroll = (e) => {
    logEvent(`Scrolled: ${e.target.scrollTop}`)
  }

  // 10. Utility function to log events
  const logEvent = (eventName) => {
    setEvents(prev => [eventName, ...prev.slice(0, 9)])
  }

  // 11. Clear events log
  const handleClearLog = () => {
    setEvents([])
    logEvent('Log Cleared')
  }

  return (
    <>
      <div className="container">
        <h1>React Event Handling - Basic to Advanced</h1>

        {/* 1. Basic Click Event */}
        <section>
          <h2>1. Basic Click Event</h2>
          <button onClick={handleClick}>Click Me ({count})</button>
        </section>

        {/* 2. Double Click Event */}
        <section>
          <h2>2. Double Click Event</h2>
          <button onDoubleClick={handleDoubleClick}>Double Click to Reset</button>
        </section>

        {/* 3. Input Change Event */}
        <section>
          <h2>3. Input Change Event</h2>
          <input
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Type something..."
          />
          <p>Input value: {text}</p>
        </section>

        {/* 4. Focus & Blur Events */}
        <section>
          <h2>4. Focus & Blur Events</h2>
          <input
            type="text"
            value={focusBlurText}
            onChange={handleFocusBlurChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Click to focus/blur"
          />
          <p>Focus/Blur Input value: {focusBlurText}</p>
        </section>

        {/* 5. Mouse Events */}
        <section>
          <h2>5. Mouse Events</h2>
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{
              border: '2px solid blue',
              padding: '20px',
              minHeight: '100px',
              cursor: 'pointer'
            }}
          >
            Move your mouse here (X: {mousePos.x}, Y: {mousePos.y})
          </div>
        </section>

        {/* 6. Keyboard Events */}
        <section>
          <h2>6. Keyboard Events</h2>
          <input
            type="text"
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onKeyPress={handleKeyPress}
            placeholder="Press keys..."
          />
        </section>

        {/* 7. Form Submit */}
        <section>
          <h2>7. Form Submit Event</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={text}
              onChange={handleChange}
              placeholder="Enter and submit..."
            />
            <button type="submit">Submit</button>
          </form>
        </section>

        {/* 8. Event Delegation */}
        <section>
          <h2>8. Event Delegation (List Items)</h2>
          <ul>
            {[1, 2, 3].map(id => (
              <li
                key={id}
                onClick={handleListItemClick}
                data-id={id}
                style={{ cursor: 'pointer', padding: '5px' }}
              >
                Item {id}
              </li>
            ))}
          </ul>
        </section>

        {/* 9. Scroll Event */}
        <section>
          <h2>9. Scroll Event</h2>
          <div
            onScroll={handleScroll}
            style={{
              border: '2px solid green',
              height: '100px',
              overflow: 'auto',
              padding: '10px'
            }}
          >
            <p>Scroll content here...</p>
            {[...Array(10)].map((_, i) => (
              <p key={i}>Line {i + 1}</p>
            ))}
          </div>
        </section>

        {/* 10. Event Logs */}
        <section>
          <h2>10. Event Log</h2>
          <button onClick={handleClearLog}>Clear Log</button>
          <div style={{ border: '1px solid gray', padding: '10px', marginTop: '10px', maxHeight: '150px', overflow: 'auto' }}>
            {events.length === 0 ? (
              <p>No events recorded yet...</p>
            ) : (
              <ul>
                {events.map((event, idx) => (
                  <li key={idx}>{event}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

export default App
