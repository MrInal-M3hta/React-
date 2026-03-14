import { useMemo } from 'react'
import { useState } from 'react'
import './App.css'

function App() {
/*

  The React useMemo Hook returns a memoized value.(its's like caching a value so that it doesn't have to be recalculated on every render). It only run when one of the dependencies has changed or updated. This optimization helps to avoid expensive calculations on every render.
  The useMemo and useCallback Hooks are similar. The main difference is:
    - useMemo return a memoized value.
    - useCallback returns a memoized function.

   useMemo is a hook that allows you to memoize a value so that it is only recomputed when its dependencies change. It takes a function and an array of dependencies as arguments, and returns the memoized value. This can be useful for optimizing performance by avoiding expensive calculations on every render. For example, if you have a component that renders a list of items and you want to filter the list based on a search term, you can use useMemo to memoize the filtered list so that it is only recomputed when the search term changes.

   const filteredList = useMemo(() => {
     return items.filter(item => item.includes(searchTerm));
   }, [items, searchTerm]);

   In this example, the filteredList will only be recomputed when either the items or searchTerm changes, which can improve performance by avoiding unnecessary calculations on every render.

   Another example of using useMemo is to memoize a function that is passed as a prop to a child component. This can help prevent unnecessary re-renders of the child component when the parent component re-renders.

   const memoizedFunction = useMemo(() => {
     return () => {
       // some expensive calculation
     };
   }, [dependencies]);

   In this example, the memoizedFunction will only be recreated when the dependencies change, which can help prevent unnecessary re-renders of the child component that receives this function as a prop.

   Overall, useMemo is a powerful hook that can help optimize performance in React applications by memoizing values and functions that are expensive to compute or cause unnecessary re-renders.

*/

  const[number, setNumber] = useState("0") 
  const [count, setCount] = useState(0)

  function cubeNumber(num){
    console.log("Calculating cube...");
    return Math.pow(num, 3)
  }

  // const result = cubeNumber(number);

  const memoizedValue = useMemo(() => cubeNumber(number), [number])
  return (
    <>
      <input type="number" value={number} onChange={(event)=>{
        setNumber( ()=> {
          return Number(event.target.value)})
      }}/>
      <h1>Cube of the number:{memoizedValue}</h1>

      <button onClick={()=>{
        setCount((prev)=>{
          return prev + 1
        })
      }}>Count</button>
      <h2>Total Count: {count}</h2>
    </>
  )
}

export default App
