import React from "react"
import PropTypes from "prop-types"


class Login extends React.Component {
  render () {
    return (
        <div>
          <h2>Login to upload file</h2>
          <p>Username: <input placeholder="username"/></p>
          <p>Password: <input placeholder="password"/></p>
          <p><button>Login</button></p>
        </div>
      
    );
  }
}

export default Login