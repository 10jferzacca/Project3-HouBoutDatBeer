import React, { Component } from "react"

class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name:'',
            email:'',
            username:'',
            password: ''
         }
    }
    handleInputChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.username)
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            }
        }).then(response => {
            response.json()
        }).then(res => {
            console.log(res)
        })
    }
    render() { 
        return ( 
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username: 
                    <input 
                    name="username"
                    type="text"
                    value={this.state.username}
                    onChange={this.handleInputChange}/>
                </label>
                <label>
                    Password: 
                    <input 
                    name="password"
                    type="text"
                    value={this.state.password}
                    onChange={this.handleInputChange}/>
                </label>
                
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
            </div>
         );
    }
}
 
export default NewUser;