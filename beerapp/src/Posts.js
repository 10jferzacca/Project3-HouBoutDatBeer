import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
      console.log('mounted')
    fetch('http://localhost:3000/posts')
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.setState({ posts: res });
      })
      .catch(error => console.log(error));
  }

 
  handleDelete = (post) => { 
      console.log('in handle delete')
      fetch(`http://localhost:3000/posts/${post}`, {
          headers: {
              "Content-Type": "application/json"
          },
          method: 'DELETE'
      })
      .then(res=> {
          res.json()
      })
      .then(json => {
          const items = this.state.posts.filter(item => item._id !== post)
          this.setState({
              posts: items
          })
          })
        }
  
  render() {
    return this.state.posts.map((post, index) => {
      return (
        <div className='post'>
            <div className="inner" key={index}>
          <h2 className="beerTitle">{post.title}</h2>
          <img src={post.picture} />
          <p>{post.caption}</p>
          <p>Brewery: {post.brewery}</p>
          <p>Category: {post.category}</p>
          <button onClick={() => this.handleDelete(post._id)}>Delete</button>
          <Link to={"/showpost/" + post._id}><button>Edit</button></Link>

          </div>
        </div>
      );
    });
  }
}

export default Posts;
