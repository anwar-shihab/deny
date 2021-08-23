import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Deny from './Components/Deny';

import Home from './Components/Home';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Products from './Components/Products';
import Product from './Components/Product';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
        
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/page2" component={Signin}>
            </Route>
            <Route path="/page3">
              <Signup />
            </Route>
            <Route path="/page4">
              <Products />
            </Route>
            <Route path="/page5">
              <Product />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

}

export default App;
