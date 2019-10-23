import React, { Component } from "react"
import {Link, Route, Switch} from "react-router-dom"
import Posts from "./Posts"
import New from "./New"
import Showpost from "./Showpost"

class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
       fetch('http://localhost:3000/users')
        .then(response => {
            
           return response.json();
            
        }).then(res => {
            console.log(res)
            this.setState({users: res})
        }).catch(error => console.log(error))
    }

   render() {
      
       return(
                this.state.users.map(user => {
                    return( 
                        <div className="userProfile">
                            <div>
                            <Link to={"/show/posts/"+user._id}>
                            <h2>Name:{user.name}</h2>
                            </Link>

                            <p>username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            </div>
                            </div>
                          
                    )
                    
                })
       )
       
   }
   
}

export default User;