import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.someFunk()
  }

  someFunk(){
    let url = window.location.pathname
    return url.split("/")[3]
  }
  componentDidMount() {

      console.log('mounted')
      let uid =this.someFunk()
      let endpoint = "http://localhost:3000/posts/"
      if(uid){
          endpoint =  endpoint + uid
      }
    fetch(endpoint)
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log("this is res",res)
        this.setState({ posts: res });
      })
      .catch(error => console.log(error));
  }

 
  handleDelete = (post) => { 
      console.log('in handle delete', post)
      fetch(`http://localhost:3000/posts/${post._id}`, {
          headers: {
              "Content-Type": "application/json"
          },
          method: 'DELETE'
      })
      .then(res=> {
        res.json().then((d)=>{
          console.log("this is d", d)
          
          this.setState({
            posts: d.posts
          })
        })
          
      })
      
  }
  
  render() {
    
    return this.state.posts.map((post, index) => {
      console.log(post)
      return (
        <div className='post' key={index}>
          <div className="inner" >
            <h2 className="beerTitle">{post.title}</h2>
            <img src={post.picture} />
            <p>{post.caption}</p>
            <p>Brewery: {post.brewery}</p>
            <p>Category: {post.category}</p>
            <p>User: {post.user.username}:{post.user._id}</p>
            <button onClick={() => this.handleDelete(post)}>Delete</button>
            <Link to={"/showpost/" + post._id}><button>Edit</button></Link>

          </div>
        </div>
      );
    });
  }
}

export default Posts;
