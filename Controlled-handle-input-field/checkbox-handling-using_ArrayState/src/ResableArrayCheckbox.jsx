import { useEffect, useRef } from "react";

function CheckboxGroup({
  options = [],
  selected = [],
  onChange,
  showSelectAll = true,
}) {
  const selectAllRef = useRef(null);

  // Determine states
  const isAllSelected = selected.length === options.length;
  const isIndeterminate =
    selected.length > 0 && selected.length < options.length;

  // Set indeterminate state
  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate]);

  // Handle individual change
  const handleChange = (value, checked) => {
    if (checked) {
      onChange([...selected, value]);
    } else {
      onChange(selected.filter((item) => item !== value));
    }
  };

  // Handle Select All
  const handleSelectAll = (checked) => {
    onChange(checked ? options : []);
  };

  return (
    <div>
      {/* Select All */}
      {showSelectAll && (
        <label style={{ fontWeight: "bold", display: "block" }}>
          <input
            ref={selectAllRef}
            type="checkbox"
            checked={isAllSelected}
            onChange={(e) => handleSelectAll(e.target.checked)}
          />
          Select All
        </label>
      )}

      {/* Individual Options */}
      {options.map((option) => (
        <label key={option} style={{ display: "block" }}>
          <input
            type="checkbox"
            value={option}
            checked={selected.includes(option)}
            onChange={(e) => handleChange(option, e.target.checked)}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default CheckboxGroup;
