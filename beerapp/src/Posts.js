import React, { Component } from 'react';
import { Link } from "react-router-dom"


class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
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
      fetch(`http://localhost:3000/posts/${post}`, {
          headers: {
              "Content-Type": "application/json"
          },
          method: 'DELETE'
      }).then(res=> {
          res.json()
      }).then(json => {
          this.setState({posts: this.state.posts.filter(item => {
              return item._id !== post})})})
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
          <p>Catagory: {post.category}</p>
          <Link to={"/show/posts/" + post.title}><button>Read More</button> </Link> 
          <button onClick={() => this.handleDelete(post._id)}>Delete</button>
          </div>
        </div>
      );
    });
  }
}

export default Posts;
