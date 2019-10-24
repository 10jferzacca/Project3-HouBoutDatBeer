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
import Random from "./Random"
import Showpost from "./Showpost"
import NewUser from "./NewUser"
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
        <Link to="/newuser">
          <h2>New User</h2>
        </Link>
        <Link to="/show/users">
          <h2>Show Users</h2>
        </Link>
        <Link to="/show/posts">
          <h2>
            BeerPals
          </h2>
        </Link>
        <Link to="/newpost">
          <h2>New Post</h2>
        </Link>
        <Link to="/yeetrandom">
          <h2>RANDOM YEET</h2>
          </Link>
        
        </nav>
        
     
        {/* <div className="randobeer"><Random /></div> */}
      
        </div>
        <main>
          <Switch>
          <Route exact path="/"
          component={Posts}/>
          <Route path="/beers" component={Beers}/>
          <Route path="/showbeer/:name" render={routerProps => <Showbeer {...routerProps} beers={this.state.beers}/>}/>
         <Route path="/show/users" component={User}/>
         <Route exact path="/show/posts" component={Posts}/>
         <Route exact path="/newpost" component={New}/>
         {/* <Route path="/edit/:id" render={routerProps => <Showpost {...routerProps} post={this.state.beers}/>}/> */}
         <Route exact path="/edit/:id" component={Showpost}/>
         <Route exact path="/yeetrandom" component={Random}/>
          <Route exact path="/newuser"
          component={NewUser}/>
        </Switch>
        </main>
          
          
        </div>
    )
  }
    
 
}

export default App;

// to run, mongod must be running, nodemon, and npm on backend. npm run start on frontend too