import React, { Component } from 'react';


class ShowPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: this.props.match.params.title,
        posts: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:9000/show/posts/' + this.state.title)
      .then(response => {
        return response.json();
      })
      .then(posts => {
        this.setState({
            posts: posts
        })
        console.log(this.state.posts);
    })
     .catch(error => console.log(error));
  }
  
  render() {
    let post = this.state.posts;
        return(
            <div>
                  <h1>Beer Name: {post.title}</h1>
            </div>
                     )
                 }
    
                }
            
export default ShowPost;
