import React, { Component } from 'react';
import Nav from './Nav';
import Home from './Home';
import Features from './Features';
import Price from './Price';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />

        <Switch>
          <Route path='/pricing' exact>
            <Price />
          </Route>

          <Route path='/pricing/:price' exact>
            <Price />
          </Route>

          <Route path='/features' exact>
            <Features />
          </Route>

          <Route path='/' exact>
            <Home />
          </Route>

          <Route path='*'>
            <h1>Not Found</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
