import React from "react"
import PropTypes from "prop-types"
import Upload from './Upload'
import Login from './Login'
import { BrowserRouter as Router } from 'react-router-dom';
import history from './history';
import Routes from './Routes';

function App () {
    return (
      <Router>
        <div>
          <Routes />
        </div>
      </Router>  
    );
  }


export default App
