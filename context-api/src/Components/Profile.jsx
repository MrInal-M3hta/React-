import { useContext } from 'react'
import UserContext from '../userContext/userContext'

function Profile() {
    const {user} = useContext(UserContext)
    if(!user){
        return <div>Please login to view your profile</div>
    }

    return (
        <>
            <h2>Welcome {user.username} to your Profile</h2>
            <p>Username: {user.username}</p>
            <p>Password: {user.password}</p>
        </>
    )
}

export default Profile