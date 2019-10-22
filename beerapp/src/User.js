import React, { Component } from "react"

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
                            <h2>Name:{user.name}</h2>
                            <p>username: {user.username}</p>
                            <p>Email: {user.email}</p>
                            </div>
                    )
                })
           
              
       )
   }
}

export default User;