import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import  UserContextProvider  from './userContext/UserContextProvider'

function App() {


  return (
    
      <UserContextProvider>
        <h1>This is Contex-API</h1>
        <Login />
        <Profile  />
      </UserContextProvider>
    
  )
}

export default App
