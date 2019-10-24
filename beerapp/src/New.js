import React, { Component } from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"

class New extends Component {
    constructor(props) {
        super(props);
        this.user = JSON.parse(window.localStorage.getItem("user"))
        console.log("this is user",this.user)
        
        this.state = { 
            title: '',
            caption:"",
            picture:"",
            brewery:"",
            category:"",
            user:this.user,
            redirect: false
         }
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        const { title, caption, picture, brewery, category, user} = this.state;
        const post = {
            title, caption, picture, brewery, category, user 
        }
        console.log("creating this posts", post)
       
        axios
        .post('http://localhost:3000/posts/', post)
        .then((post) => console.log('post created', post))
        .catch(err => {
            console.error(err)
        })
      
    }
    render() { 
        if(!this.user){
            return <Redirect to="/login"/> 
        }
        return ( 
            <div>
                <br />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input 
                            type="text"
                            className="form"
                            name="title"
                            placeholder="Title"
                            onChange={this.handleInputChange}/>
                        </div>
                        <br />
                        <div>
                        <input 
                            type="text"
                            className="form"
                            name="caption"
                            placeholder="Caption"
                            onChange={this.handleInputChange}/>
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="form"
                            name="picture"
                            placeholder="Picture"
                            onChange={this.handleInputChange}/>
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="form"
                            name="brewery"
                            placeholder="Brewery"
                            onChange={this.handleInputChange}/>
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="form"
                            name="category"
                            placeholder="Category"
                            onChange={this.handleInputChange}/>
                        </div>
                        {/* <div>
                        <input 
                            type="text"
                            className="form"
                            name="user"
                            placeholder="userName"
                            onChange={this.handleInputChange}/>
                        </div> */}
                        <br />
                        <div>
                            <button type="submit" >Create</button>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default New;