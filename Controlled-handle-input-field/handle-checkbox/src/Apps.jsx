import React from "react";

function Apps() {
  const [languages, setLanguages] = React.useState({
    react: null,
    HTML: null,
    CSS: null,
    JS: null,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setLanguages({ ...languages, [name]: checked });
  };
  return (
    <>
      <label htmlFor="all">Select-All</label>
      <input
        type="checkbox"
        id="all"
        checked={Object.values(languages).every((value) => value === true)}
        onChange={(e) => {
          const isChecked = e.target.checked;
          setLanguages({
            react: isChecked,
            HTML: isChecked,
            CSS: isChecked,
            JS: isChecked,
          });
        }}
      />
      <br />
      {/* {Object.entries(languages).map(([key, value]) => (
        <div key={key}>
          <label htmlFor={key}>{key}</label>
          <input
            id={key}
            name={key}
            type="checkbox"
            checked={value}
            onChange={handleChange}
          />
        </div>
      ))} */}
      {Object.keys(languages).map((item) => {
        return (
          <label key={item} htmlFor={item}>
            <input
              id={item}
              type="checkbox"
              name={item}
              checked={languages[item]}
              onChange={handleChange}
            />
            {item}
            <br />
          </label>
        );
      })}

      {languages.HTML && <p>HTML is selected with the help of map</p>}
      {languages.CSS && <p>CSS is selected with the help of map</p>}
      {languages.JS && <p>JS is selected with the help of map</p>}
      {languages.react && <p>React JS is selected with the help of map</p>}
    </>
  );
}

export default Apps;
