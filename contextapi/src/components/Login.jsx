import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const alter='sheerr'
    const { setUser } = useContext(UserContext); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password,alter });
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                placeholder="Enter username"
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
