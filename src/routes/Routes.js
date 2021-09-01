import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Homepage from '../components/Homepage.jsx';
export default (
  <Router>
    <Switch>
      <Route path='/' exact component={Homepage} />
    </Switch>
  </Router>
)