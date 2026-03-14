import { useState, useRef, useEffect, useCallback,useMemo } from 'react'
import './App.css'
import Header from './Components/Header'

function App() {
/*

  useCallback is a React hook that lats you cache a function defination betweeen re-renders.
  It meand , when we use the useCallback Hook, it doesn't creat multiple instances of same function when re - render happens.
  Instead os creating a new instance of teh function, it provide the cached funtion on re-render of the component.

  It is useful when you want to prevent unnecessary re-creations of functions, especially when passing them as props to child components that rely on reference equality to avoid re-renders.

  useCallback is a hook that allows you to memoize a function so that it is only recreated when its dependencies change. It takes a function and an array of dependencies as arguments, and returns the memoized function. This can be useful for optimizing performance by preventing unnecessary re-renders of child components that rely on the function as a prop. For example, if you have a child component that receives a callback function as a prop, you can use useCallback to memoize the function so that it is only recreated when its dependencies change, which can help prevent unnecessary re-renders of the child component.

  const memoizedFunction = useCallback(() => {
    // some expensive calculation
  }, [dependencies]);

  In this example, the memoizedFunction will only be recreated when the dependencies change, which can help prevent unnecessary re-renders of the child component that receives this function as a prop.

  Overall, useCallback is a powerful hook that can help optimize performance in React applications by memoizing functions that are expensive to compute or cause unnecessary re-renders.
  
*/
  const [count, setCount] = useState(0)

  const newFn = ()=>{
    console.log("function");
  }

  const memoizedFn = useCallback(()=>{
    console.log("function");
  }, [])

  return (
    <>
      <Header headerFn = {memoizedFn}/>

      <h1>{count}</h1>

      <button onClick={()=>{
      setCount((prev)=>{
        return prev+1
      })
     }}>Count</button>
    </>
  )
}

export default App
