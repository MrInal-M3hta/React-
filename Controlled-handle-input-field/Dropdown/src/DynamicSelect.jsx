import React from "react";
import "./App.css";

function DynamicSelect() {
  const [language, setLanguage] = React.useState("Go");
  console.log(language)
  const languages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Go",
    "Swift",
    "Kotlin",
    "PHP",
    "TypeScript",
  ];
  return (
    <>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>  {/* value is used to set the default value of the dropdown and onChange is used to update the state when the user selects a different option */}
        <option value="">Select below</option>
        {languages.map((item, index) => (
          <option key={index} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
    </>
  );
}

export default DynamicSelect;
