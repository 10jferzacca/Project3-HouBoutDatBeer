import React, { Component } from 'react';

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

  render() {
    return this.state.posts.map(post => {
      return (
        <div className='userProfile'>
          <h2>{post.title}</h2>
          <img src={post.picture} />
          <p>{post.caption}</p>
          <p>Brewery: {post.brewery}</p>
        </div>
      );
    });
  }
}

export default Posts;
