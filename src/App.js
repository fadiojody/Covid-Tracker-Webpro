import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Global, Indonesia, Province } from './pages'



const App = () => {
  return(

   <Router>
      <div className = "background">
        <center>
          
          <h1>Covid-19 Tracker</h1>
            <ul>
            <nav>
              <li>
                <Link to="/Global">
                  Global Cases
                </Link>
              </li>
              <li>
                <Link to="/Indonesia">
                  Indonesia Cases
                </Link>
              </li>
              <li>
                <Link to="/Province">
                  Indonesia Province Cases
                </Link>
              </li>
              </nav>
            </ul>
          
            </center>
        
      <Switch>
        <Route path="/Global">
          <Global />
        </Route>
        <Route path="/Indonesia">
          <Indonesia />
        </Route>
        <Route path="/Province">
          <Province />
        </Route>
      </Switch>
      </div>
    </Router>

  )

}

export default App