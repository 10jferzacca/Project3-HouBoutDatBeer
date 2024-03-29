import React, { Component } from 'react';
import logo from './logo.svg';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Beers from './Beers';
import Category from "./Category"
import User from './User';
import Showbeer from './Showbeer';
import Posts from './Posts';
import New from './New';
import Random from './Random';
import Showpost from './Showpost';
import Login from "./Login"
import Register from "./Register"
import NewUser from './NewUser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beers: {}
      
    };
    
  }
  
  clearStorage(){
    window.localStorage.clear()
  }
  render() {
  
    return (
      <div>
        <div>
          <nav>
            <Link to='/'>
              <img
                src='https://cdn0.iconfinder.com/data/icons/beer-set-filled-color/300/205339134Untitled-3-512.png'
                className='cheers'
              />
            </Link>
            <Link to='/newpost'>
              <h2>Post</h2>
            </Link>
            {/* <Link to='/newuser'>
              <h2>New Palz</h2>
            </Link> */}
            <Link to='/show/users'>
              <h2>Palz</h2>
            </Link>

            <Link to='/yeetrandom'>
              <h2>Random Beer</h2>
            </Link>
          <div className="loginstuff">
            <Link to="/register">
              <h1>Register</h1>
            </Link>
      
        <Link to="/login" >
          <h2>Login</h2>
          </Link>

         
        <Link onClick={this.clearStorage} to="/login">
          <h2>Logout</h2>
        </Link>
        </div>
          </nav>

          {/* <div className="randobeer"><Random /></div> */}
        </div>
        <main>
          <Switch>
            <Route exact path='/' component={Posts} />
            <Route path="/login"
          component={Login}/>
           <Route path="/register"
          component={Register}/>
            <Route path='/beers' component={Beers} />
            <Route
              path='/showbeer/:name'
              render={routerProps => (
                <Showbeer {...routerProps} beers={this.state.beers} />
              )}
            />
            
            <Route exact path='/show/posts' component={Posts} />
            <Route exact path='/newpost' component={New} />
            <Route exact path="/show/posts/:uid?" component={Posts}/>
         <Route exact path="/newpost" component={New}/>
         <Route path="/showpost/:id" render={routerProps => <Showpost {...routerProps}/>}/>
            <Route exact path='/edit/:id' component={Showpost} />
            <Route exact path='/yeetrandom' component={Random} />
            <Route exact path='/newuser' component={NewUser} />
            <Route exact path="/category/:category" component={Category}/>
            <div className="userProfile">
            <Route path='/show/users' component={User} /></div>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

// to run, mongod must be running, nodemon, and npm on backend. npm run start on frontend too
