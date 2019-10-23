import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import Random from "./Random"
class Showpost extends Component {
    constructor(props) {
        
        super(props)
        
        this.state = {
            title: '',
            caption:"",
            picture:"",
            brewery:"",
            category:""
           
        }
    
    }
    componentDidMount() {
        fetch('http://localhost:3000/posts/edit/' + this.props.match.params.id, {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json)
           this.setState({
            post: json
           }) 
           
        })
    }
    handleInputChange = event => {
        
        this.setState({
            [event.target.name]: event.target.value 
        });
        
    }
   
    handleSubmit = event => {
        console.log('in handle submit')
        event.preventDefault();
        const {title, caption, picture, brewery, category} =this.state
        axios.put('http://localhost:3000/posts/edit/' + this.props.match.params.id, {title, caption, picture, brewery, category})
        .then(result => {
            console.log('result' + result)
          
        }).catch(err => console.log(err))
    }

    render()  {
       console.log(this.props.match.params)
        console.log(this.state)
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
                            value={this.state.title}
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
                            placeholder={"Picture"}
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
                        <div>
                        <input 
                            type="text"
                            className="form"
                            name="user"
                            placeholder="userName"
                            onChange={this.handleInputChange}/>
                        </div>
                        <br />
                        <div>
                            <button type="submit" >Update</button>
                        </div>
                    </form>
                    <div className="search">
                        <Random />
                    </div>
                </div>
        </div>
 
        )
    
                
            }
        }
      
        
export default Showpost;