import React, { Component } from "react"
import { Redirect } from 'react-router-dom'
import axios from "axios"

class New extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            caption:"",
            picture:"",
            brewery:"",
            category:"",
            toDashboard: false
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
        .then(() => this.setState(() => ({
            toDashboard: true
          })))
        .catch(err => {
            console.error(err)
        })
    }
    render() { 
        if (this.state.toDashboard === true) {
            return <Redirect to='/show/posts' />
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
                            <select 
                                name = "category" onChange={this.handleInputChange}>
                        <option value="Lager" >Lager </option>
                        <option value="Port">Port</option>
                        <option value="IPA">IPA</option>
                        <option value="Belgium">Belgium</option>
                             </select> 
                        </div>
                        <br />
                        <div>
                            <button type="submit">Create</button>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default New;