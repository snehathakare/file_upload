import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types"
import history from './history';
import Routes from './Routes';

function Login () {

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const history = useHistory();

  const handleEmailChange = (e) => {
      setEmailInput(e.target.value);
  }

  const handlePasswordChange = (e) => {
      setPasswordInput(e.target.value);
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        email: 'admin',
        password: 'password'
    }
    if ((emailInput == hardcodedCred.email) && (passwordInput == hardcodedCred.password)) {
        const token = '123456abcdef';
        sessionStorage.setItem('auth-token', token);
        history.push('/upload');
    } else {
        //bad combination
        alert('wrong email or password combination');
    }
}

    return (
        <div>
          <form onSubmit={handleLoginSubmit}>
            <h2>Login to upload file</h2> 
            <p>Username: <input type="email"  
                         id="email"  
                         placeholder="Enter email" 
                         value={emailInput}
                         onChange={handleEmailChange}
                  /></p>
            <p>Password: <input type="password"  
                          id="password" 
                          placeholder="Password"
                          value={passwordInput}
                          onChange={handlePasswordChange}
                      /></p>
            <p><button onClick={handleLoginSubmit}>Login</button></p> 
          </form>         
        </div>
      
    );
  }


export default Login
