import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
function User() {
    const {user}=useContext(UserContext)

        if(!user) return <div>no user</div>

        return <div>waasup {user.alter}</div>
}

export default User
