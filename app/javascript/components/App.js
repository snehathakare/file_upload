import React from "react"
import PropTypes from "prop-types"
import Upload from './Upload'
import Login from './Login'
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
} from 'react-router-dom';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h2>Login to upload file</h2>
          <ul> 
            <li> 
              <Link to="/">Login</Link>
              <Link to="/upload">Upload</Link> 
            </li>
          </ul> 
          <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/upload' component={Upload}></Route> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
