import React from "react";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  /*
  useEffect is a hook that allows you to perform side effects in function components. It takes a function as an argument and runs it after the component renders. You can also specify dependencies for the effect, which will determine when the effect should run.

  Example of using useEffect to fetch data from an API when the component mounts :
  useEffect(() => { fetch('https://api.example.com/data')
  .then(response => response.json()) 
  .then(data => { Do something with the data }) 
  .catch(error => { console.error('Error fetching data:', error); 
  });
  }, []); // This will fetch data from the API when the component mounts, and it will not run again on subsequent renders.

  The empty dependency array means this effect will only run once when the component mounts.

  If you want to run the effect every time a specific value changes, you can include that value in the dependency array. For example, if you want to run the effect every time a count state variable changes, you can do it like this: useEffect(() => { Do something when count changes }, [count]); 

  This effect will run every time the count state variable changes.
*/
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }, 1000);
  }, [count]); // count is a dependency of the useEffect, so it will run every time the count changes. This creates an infinite loop of updates and renders, causing the count to increase indefinitely every second.

  // When we use useEffect without a dependency array, it will run after every render of the component. In this case, we are updating the count state inside the useEffect, which will trigger a re-render of the component, and then the useEffect will run again, creating an infinite loop of updates and renders.

  // Explanation of the infinite loop:
  // 1. useEffect will run after every render, so it will set a timeout to update the count after 1 second.
  // 2. When the count is updated, it will trigger a re-render of the component, and the useEffect will run again, setting another timeout to update the count after 1 second.
  // 3. This creates an infinite loop of updates and renders, causing the count to increase indefinitely every second.
  // To fix this issue, we can use an empty dependency array [] in the useEffect hook, which will ensure that the effect runs only once when the component mounts, and not on every update.

  return (
    <>
      <h1>Render, {count} times </h1>
    </>
  );
}

export default App;
