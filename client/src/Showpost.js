import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import axios from "axios"
import Random from "./Random"
class Showpost extends Component {
    constructor(props) {
        
        super(props)
       
        this.state = {
            title: "",
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
        const {title, caption, picture, brewery, category} =this.state.post;
        axios.put('http://localhost:3000/posts/edit/' + this.props.match.params.id, {title, caption, picture, brewery, category})
        .then(result => {
            console.log('result' + result)
          
        }).catch(err => console.log(err))
    }

    render()  {
  
        if (this.state.post === undefined || this.state.post === null) {
            return null;
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
                           placeholder={this.state.post.title}
                            onChange={this.handleInputChange}/>
                        </div>
                        <br />
                        <div>
                        <input 
                            type="text"
                            className="form"
                            name="caption"
                            placeholder={this.state.post.caption}
                            defaultValue={this.state.post.caption}

                            onChange={this.handleInputChange}/>
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="form"
                            name="picture"
                            placeholder={this.state.post.picture}
                            value={this.state.post.picture}
                            onChange={this.handleInputChange}/>
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="form"
                            name="brewery"
                            placeholder={this.state.post.brewery}
                            defaultValue={this.state.post.brewery}
                            onChange={this.handleInputChange}/>
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="form"
                            name="category"
                            placeholder={this.state.post.category}
                            defaultValue={this.state.post.category}
                            onChange={this.handleInputChange}/>
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="form"
                            name="user"
                            placeholder={this.state.post.userName}
                            defaultValue={this.state.post.user}
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