import { useState } from "react";
import "./App.css";

function App() {
  const [isreact, setIsReact] = useState("");
  const [isHTMl, setIsHTMl] = useState("");
  const [isCSS, setIsCSS] = useState("");
  const [isJS, setIsJS] = useState("");

  const [languages, setLanguages] = useState({
    react: null,
    HTML: null,
    CSS: null,
    JS: null
  });
  const handleChange = (e) => {
    const { name, checked } = e.target; // destructuring the name and checked properties from the event target
    setLanguages({ ...languages, [name]: checked });
  };

  return (
    // Multiple Checkboxes with individual state
    // <>
    //   <label htmlFor="counter">
    //     <input
    //       id="counter"
    //       type="checkbox"
    //       checked={isreact}
    //       onChange={(e) => setIsReact(e.target.checked)}
    //     />
    //     React
    //   </label>

    //   <br />

    //   <label htmlFor="html">
    //     <input
    //       id="html"
    //       type="checkbox"
    //       checked={isHTMl}
    //       onChange={(e) => setIsHTMl(e.target.checked)}
    //     />
    //     HTML
    //   </label>

    //   <br />

    //   <label htmlFor="css">
    //     <input
    //       id="css"
    //       type="checkbox"
    //       checked={isCSS}
    //       onChange={(e) => setIsCSS(e.target.checked)}
    //     />
    //     CSS
    //   </label>

    //   <br />

    //   <label htmlFor="js">
    //     <input
    //       id="js"
    //       type="checkbox"
    //       checked={isJS}
    //       onChange={(e) => setIsJS(e.target.checked)}
    //     />
    //     JavaScript
    //   </label>

    //   {isreact && <p>React is selected</p>}
    //   {isHTMl && <p>HTML is selected</p>}
    //   {isCSS && <p>CSS is selected</p>}
    //   {isJS && <p>JavaScript is selected</p>}
    // </>

    // Multiple Checkboxes with single state object
    <>
      <label htmlFor="react">React</label>
      <input
        id="react"
        name="react"
        type="checkbox"
        checked={languages.react}
        onChange={handleChange}
      />
      
      <br />

      <label htmlFor="html">HTML</label>
      <input
        id="html"
        name="HTML"
        type="checkbox"
        checked={languages.HTML}
        onChange={handleChange}
      />
      
      <br />

      <label htmlFor="css">CSS</label>
      <input
        id="css"
        name="CSS"
        type="checkbox"
        checked={languages.CSS}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="js">JavaScript</label>
      <input
        id="js"
        name="JS"
        type="checkbox"
        checked={languages.JS}
        onChange={handleChange}
      />

      <br />

      <label htmlFor="all">Select-All</label>
      <input 
        type="checkbox"
        id="all"
        checked={languages.react && languages.HTML && languages.CSS && languages.JS}
        // checked = {Object.values(languages).every((value) => value === true)} We can also use this to check if all checkboxes are selected.

        onChange={(e) => {
          const isChecked = e.target.checked;
          setLanguages({
            react: isChecked,
            HTML: isChecked,
            CSS: isChecked,
            JS: isChecked
          });
        }}
      />
      
      {languages.react && <p>React is selected</p>}
      {languages.HTML && <p>HTML is selected</p>}
      {languages.CSS && <p>CSS is selected</p>}
      {languages.JS && <p>JavaScript is selected</p>}
    </>
  );
}

export default App;
