import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './loginpage.css';
function Loginpage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const submit = (e) => {
        e.preventDefault();
        if (username.trim() === '') {
            alert('Username Field should not be blank');
            return;
        }
        if (password.trim() === '') {
            alert('Password Field should not be blank');
            return;
        }
        alert('You have successfully logged in');
        setLoggedIn(true);
        navigate("/home");
    }

    return (
        <center>
        <div className="log">
            <img src="/logo.jpeg" className="smartgpt" alt="smartgpt" />
            <div className="loginbox">
            
            <form className="form" name="fill" onSubmit={submit}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" className="login-button">Login</button>
                {loggedIn}
                <br />
                <button type="reset" onClick={() => { setUsername(''); setPassword(''); setLoggedIn(false); }}>Reset</button>
            </form>
        </div>
        </div>
        </center>
    );
}

export default Loginpage;