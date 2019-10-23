import React, { Component } from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"
class New extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            caption:"",
            picture:"",
            brewery:"",
            category:""
         }
    }
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { title, caption, picture, brewery, category} = this.state;
        const post = {
            title, caption, picture, brewery, category
        }
        axios
        .post('http://localhost:3000/posts/', post)
        .then(() => console.log('post created', post))
        .catch(err => {
            console.error(err)
        })
      
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
                        <br />
                        <div>
                            <button type="submit" onClick={this.handleSubmit}>Create</button>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default New;