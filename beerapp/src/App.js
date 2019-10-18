import React, {Component} from 'react';
import logo from './logo.svg';
import {Link, Route, Switch} from "react-router-dom"
import './App.css';
import Home from "./Home"
import Beers from "./Beers"
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: {}
    }
  }
  render () {
    return (
      <div>
        <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/beers">
          <h2>View Beers</h2>
        </Link>
        </nav>
        <main>
          <Switch>
          <Route exact path="/"
          component={Home}/>
          <Route path="/beers" component={Beers}/>
          {/* <Route path="/show"
          component={ShowBeer}/> */}
          </Switch>
        </main>
      </div>
    )
  }
    
 
}

export default App;
