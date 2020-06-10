import React from 'react';
import './App.css';
import Driver from './Home/Driver';
import Admin from './Home/Admin';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Homepage from './Home/Homepage';
import Topbar from './Home/Topbar';

function App() {
  return (
    <Router>
      <div className="main">
        <Topbar/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/driver' component={Driver}/>
        </Switch>
      
        </div>
    </Router>
  );
}

export default App;
