import React, {Component} from 'react';
import logo from './logo.svg';
import {Link, Route, Switch} from "react-router-dom"
import './App.css';
import Home from "./Home"
import Beers from "./Beers"
import User from "./User"
import Showbeer from "./Showbeer"
import axios from "axios"
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
      <div>
        <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/beers">
          <h2>View Beers</h2>
        </Link>
        <Link to="/register">
          <h2>New User</h2>
        </Link>
        
        </nav>
        </div>
        <main>
          <Switch>
          <Route exact path="/"
          component={Home}/>
          <Route path="/beers" component={Beers}/>
          <Route path="/showbeer/:name" render={routerProps => <Showbeer {...routerProps} beers={this.state.beers}/>}/>
         <Route exact path="/register" component={User}/>
          {/* <Route path="/show"
          component={ShowBeer}/> */}
        </Switch>
        </main>
        </div>
    )
  }
    
 
}

export default App;
