import { useState, useContext } from 'react'
import UserContext from '../userContext/userContext'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(UserContext)

    const handlesubmit = (event) => {
        event.preventDefault()
        setUser({username, password})
    }

  return (
    <>
        <h2>Login</h2>

        <input type="text"
        placeholder='Username'
        value={username}
        onChange={(event)=>{
            return setUsername(event.target.value)
        }} />

        <input type="password" 
        placeholder='Password'
        value={password}
        onChange={(event)=>{
            return setPassword(event.target.value)
        }} />
        <button onClick={handlesubmit}>Login-btn</button>
    </>
  )
}

export default Login;