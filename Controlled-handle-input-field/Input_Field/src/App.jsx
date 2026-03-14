import { useState } from "react";
import "./App.css";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [data, setdata] = useState({
    name: "",
    email: "",
    phoneNo: ""
  })

  function handleChange(event){
    const {name, value} = event.target; // Destructuring the name and value from the event.target object
    setdata((prevData)=>{
      return {
        ...prevData,
        [name]: value
      }
    })
  }
 
  return (
    <>
      {/* <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Enter your email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button className="My-btn" onClick={()=>{setName(""); setEmail("")}}>Clear</button>

      {/* <h3>{email}</h3> */}
      {/* <h3>{name}</h3> */}


      {/* Multiple Input Fields */}

      <input
        type="text"
        name="name"
        placeholder="Enter your name"
        value={data.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="Enter your email"
        value={data.email}
        onChange={handleChange}
      />
      <br />
      <input
        type="number"
        name="phoneNo"
        placeholder="Phone number"
        value={data.phoneNo}
        onChange={handleChange}
      />
      <br />
      
      <h3>Name: {data.name} <br /> Email: {data.email} <br /> Phone No: {data.phoneNo}</h3>

      <button className="My-btn" onClick={()=>{setdata({name: "", email: "", phoneNo: ""})}}>Clear</button>
    </>
  );
}

export default App;
