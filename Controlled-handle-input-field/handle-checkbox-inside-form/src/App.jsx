import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    tc: false,
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      tc: false,
    });
  }

  return (
    <div className="select-none">
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* terms and conditions */}
        <label htmlFor="tc">
          <input
            id="tc"
            type="checkbox"
            name={"tc"}
            checked={formData.tc}
            onChange={handleChange}
          />
          Terms and conditions
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
