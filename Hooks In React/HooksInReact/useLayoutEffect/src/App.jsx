import { use, useEffect, useLayoutEffect } from "react";
import "./App.css";

function App() {
  /*
  useLayoutEffect Hook works similarly to useEffect, but it is called before the User Interface (UI) gets mounted. 
  useEffect Hook is called after the UI gets mounted.

  useLayoutEffect Hook is used when you want to perform some operations that need to be done before the UI gets rendered, 
  such as measuring the size of an element or manipulating the DOM. 
  useEffect Hook is used when you want to perform some operations that can be done after the UI gets rendered, 
  such as fetching data from an API or updating the state.

  In summary, useLayoutEffect is used for operations that need to be done before the UI gets rendered, while useEffect is used for operations that can be done after the UI gets rendered.
*/

  useEffect(() => {
    console.log("Message from useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect");
  }, []);

  return (
    <>
      <h2>useLayoutEffect vs useEffect</h2>
      {Array(1000)
        .fill()
        .map((item, index) => {
          return <p key={index}>Paragraph {index + 1}</p>;
        })}
    </>
  );
}

export default App;
