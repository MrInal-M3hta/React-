import React, { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
/*
  useRef is a hook that allows you to create a mutable ref object that persists for the lifetime of the component. It can be used to store a value that does not trigger a re-render when it changes.

  Example of using useRef to store a value that does not trigger a re-render const countRef = useRef(0)

  useRef can also be used to access DOM elements directly. For example, you can use it to focus an input element when a button is clicked.
*/

  const [value , setValue] = useState(0)
  

  const countRef = useRef(0)
  // console.log(countRef);
  
  useEffect(() => {
    countRef.current = countRef.current + 1
  },[value]); // This will update the countRef.current value to the current count value whenever the value state changes, but it will not trigger a re-render of the component. This way, we can keep track of how many times the component has rendered without causing an infinite loop of updates and renders.


/*
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(prev => prev + 1)
  }, [count])

  This will cause an infinite loop of updates and renders, because the count state is being updated in the useEffect, which will trigger a re-render, and then the useEffect will run again, updating the count state again, and so on. 

  To avoid this infinite loop, we can use useRef to store the count value instead of useState. This way, we can update the count value without triggering a re-render of the component.

  const countRef = useRef(0)
  useEffect(() => { countRef.current = count }, [count]);
  This will update the countRef.current value to the current count value whenever the count state changes, but it will not trigger a re-render of the component.
*/

  const inputRef = useRef(null)

  const handleClick = () => {
    console.log(inputRef);
    console.log(inputRef.current.value);
    inputRef.current.style.background = "red"
  };

  return (
    <>
      <button onClick={()=>{
        setValue((prev)=>{
          return prev + 1
        })
      }}>Increase</button>

      <h1>{value}</h1>

      <button onClick={()=>{
        setValue((prev)=>{
          return prev - 1
        })
      }}>Decrease</button>

      <h2>Render count : {countRef.current}</h2>


      <br /><br /><br /><br />
      <h1>Accessing DOM elements by useRef</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click</button>
    </>
  )
}

export default App
