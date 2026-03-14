import { useState } from "react";

function App() {

  const options = ["HTML", "CSS", "JavaScript", "React"];
  const [selected, setSelected] = useState([]);

  // Handle individual checkbox
  const handleChange = (e) => {
    const { value, checked } = e.target;

    setSelected(prev =>
      checked
        ? [...prev, value]
        : prev.filter(item => item !== value)
    );
  };

  // Handle Select All
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(options);   // Select all
    } else {
      setSelected([]);        // Clear all
    }
  };

  // Check if all selected
  const isAllSelected = selected.length === options.length;

  return (
    <div style={{ padding: 20 }}>

      <h2>Select Technologies</h2>

      {/* Select All */}
      <label style={{ fontWeight: "bold" }}>
        <input
          type="checkbox"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
        Select All
      </label>

      <hr />

      {/* Individual Options */}
      {options.map(option => (
        <label key={option} style={{ display: "block" }}>
          <input
            type="checkbox"
            value={option}
            checked={selected.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}

      <hr />

      <h3>Selected:</h3>
      {selected.length === 0
        ? "Nothing selected"
        : selected.map(item => (
            <div key={item}>✅ {item}</div>
          ))
      }

    </div>
  );
}

export default App;