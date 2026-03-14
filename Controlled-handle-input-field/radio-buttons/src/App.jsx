import { useState } from "react";
import "./App.css";

function App() {
  
  const [selectedRadio, setSelectedRadio] = useState("");
  console.log(selectedRadio);

  return (
    <>
      <h1>Radio Buttons Example</h1>

      <label htmlFor="radio-1">
        <input 
          type="radio" 
          name="radio-group" 
          id="radio-1"
          value={"radio1"} 
          checked={selectedRadio === "radio1"} 
          onChange={(event) => setSelectedRadio(event.target.value)} 
        />
      Option 1
      </label>
      
      
      <label htmlFor="radio-2">
        <input 
          type="radio" 
          name="radio-group" 
          id="radio-2" 
          checked={selectedRadio === "radio2"}
          value={"radio2"} 
          onChange={(event) => setSelectedRadio(event.target.value)} />
      Option 2
      </label>
      
      
    </>
  );
}

export default App;
