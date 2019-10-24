import React, {Component} from 'react';
import logo from './logo.svg';
import {Link, Route, Switch} from "react-router-dom"
import './App.css';
import Home from "./Home"
import Beers from "./Beers"
import User from "./User"
import Showbeer from "./Showbeer"
import Posts from "./Posts"
import New from "./New"
import Showpost from "./Showpost"
import Login from "./Login"
import Register from "./Register"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers: {}
 
    }
  }
  clearStorage(){
    window.localStorage.clear()
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
        <Link to="/show/users">
          <h2>Show Users</h2>
        </Link>
        <Link to="/show/posts">
          <h2>Show Posts</h2>
        </Link>
        <Link to="/newpost">
          <h2>New Post</h2>
        </Link>
        <Link to="/register">
          <h1>Register</h1>
        </Link>
        <Link to="/login">
          <h2>Login</h2>
        </Link>
        <Link onClick={this.clearStorage} to="/login">
          <h2>Logout</h2>
        </Link>
        
        </nav>
        </div>
        <main>
          <Switch>
          <Route exact path="/"
          component={Home}/>
          <Route path="/login"
          component={Login}/>
           <Route path="/register"
          component={Register}/>
          <Route path="/beers" component={Beers}/>
          <Route path="/showbeer/:name" render={routerProps => <Showbeer {...routerProps} beers={this.state.beers}/>}/>
         <Route path="/show/users" component={User}/>
         <Route exact path="/show/posts/:uid?" component={Posts}/>
         <Route exact path="/newpost" component={New}/>
         <Route path="/showpost/:id" render={routerProps => <Showpost {...routerProps}/>}/>
          {/* <Route path="/show"
          component={ShowBeer}/> */}
        </Switch>
        </main>
        </div>
    )
  }
    
 
}

export default App;

// to run, mongod must be running, nodemon, and npm on backend. npm run start on frontend too
