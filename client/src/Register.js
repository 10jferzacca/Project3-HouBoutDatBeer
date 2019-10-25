import React,{Component} from "react";
import axios from "axios";

class Register extends Component {
    constructor(props){
        
        super(props)
        this.state={
            username:"",
            password:""
        }
    }
    
handleInputChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    })
}
handleSubmit = event => {
    event.preventDefault();
    console.log("this is state",this.state)
    
    axios
    .post('http://localhost:3000/users/register/', this.state)
    .then((res) => {
        console.log("registration worked", res)
    })
    .catch(err => {
        console.error(err)
    })
    this.props.history.push('/show/users');
}
render() { 
    return ( 
        <div>
            <br />
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input 
                        type="text"
                        className="form"
                        name="username"
                        placeholder="username"
                        onChange={this.handleInputChange}/>
                    </div>
                    <br />
                    <div>
                        <input 
                        type="text"
                        className="form"
                        name="email"
                        placeholder="email"
                        onChange={this.handleInputChange}/>
                    </div>
                    <br />
                    <div>
                    <input 
                        type="text"
                        className="form"
                        name="password"
                        placeholder="password"
                        onChange={this.handleInputChange}/>
                    </div>
                    <br />
                    
                    <div>

                        <button type="submit" >Register</button>
                    </div>
                </form>
            </div>
        </div>
     );
    }
}

export default Register;