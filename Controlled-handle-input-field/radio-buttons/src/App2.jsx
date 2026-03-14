import React from 'react'

function App2() {
    const [gender, setgender] = React.useState("");
    const genders = ["Male", "Female", "Other's"];
    console.log(gender);

  return (
    <>
        {genders.map((item , index)=>{
            return(
                <label key={index} htmlFor={item}>
                    <input 
                    type="radio"
                    id={item}
                    name = "gender"
                    value={item}
                    checked = { gender === item }
                    onChange={(event)=>{
                        return setgender(event.target.value)
                    }} />
                    {item}
                    <br/>
                </label>
            )
        })}
    </>
  )
};

export default App2;