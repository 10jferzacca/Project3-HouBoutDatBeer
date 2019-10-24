import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    console.log('mounted');
    fetch('http://localhost:3000/posts')
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.setState({ posts: res });
      })
      .catch(error => console.log(error));
  }

  handleDelete = post => {
    console.log('in handle delete');
    fetch(`http://localhost:3000/posts/${post}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'DELETE'
    })
      .then(res => {
        res.json();
      })
      .then(json => {
        const items = this.state.posts.filter(item => item._id !== post);
        this.setState({
          posts: items
        });
      });
  };

  render() {
    return this.state.posts.map((post, index) => {
      return (
        <div className='post'>
          <div className='inner' key={index}>
            <div className='top'>
              <h2 className='beerTitle'>{post.title}</h2>
             
            </div>
            <br />
            <p className='postbeer'>
              <img src={post.picture} />
            </p>
            <p className='caption'>{post.caption}</p>
            <p>
              <img
                src='https://cdn4.iconfinder.com/data/icons/brewery-outline/128/homemade_beer_home_brew_craft_beer_brewery_fermentation_pub_4-512.png'
                className='brewery'
              />{' '}
              {post.brewery}
            </p>

            <div className='buttons'>
              <button onClick={() => this.handleDelete(post._id)}>
                Delete
              </button>
              <Link to={'/edit/' + post._id}>
                <button>Edit</button>
              </Link>
              <Link to={"/category/" + post.category} category={post.category} className="category"> <button className="right">{post.category}</button></Link>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default Posts;
