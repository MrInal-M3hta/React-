import React from "react";
import "./App.css";

function CascadingSelect() {
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");
  console.log(country, city);

  const data = {
    India: ["Delhi", "Mumbai", "Dehradun", "Bageshwar"],
    USA: ["New York", "Los Angeles", "Miami", "Chicago"],
    Japan: ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    Germany: ["Berlin", "Hamburg", "Munich", "Cologne"],
  };
  return (
    <>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setCity("");
        }}
      >
        <option value="">Select Country</option>
        {Object.keys(data).map((item, index) => (
          <option key={index} value={item}>
            {item.toUpperCase()}
          </option>
        ))}
      </select>
      <br />
      {country && (
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          {data[country].map((item, index) => (
            <option key={index} value={item}>
              {item.toUpperCase()}
            </option>
          ))}
        </select>
      )}
      <p>{city && `Selected Country: ${country}`}</p>
      <p>{city && `Selected City: ${city}`}</p>
    </>
  );
}

export default CascadingSelect;
