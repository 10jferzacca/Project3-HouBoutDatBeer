import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Random from './Random';

class New extends Component {
  constructor(props) {
    super(props);
    this.user = JSON.parse(window.localStorage.getItem("user"))
    
    this.state = {
      title: '',
      caption: '',
      picture: '',
      brewery: '',
      category: '',
      user: this.user,
      redirect: false
      
    };
  }
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, caption, picture, brewery, category, user} = this.state;
    const post = {
        title, caption, picture, brewery, category, user 
    }

   
    axios
    .post('http://localhost:3000/posts/', post)
    .then((post) => console.log('post created', post))
    .then(() => {
        this.setState(() => ({
            redirect: true
        }))
    })
    .catch(err => {
        console.error(err)
    })
   
  
}

  render() {
    if (!this.user) {
      return <Redirect to='/login' />;
    }
    if (this.state.redirect === true) {
        return <Redirect to="/"/>
    }

    return (
      <div className='form'>
        <br />
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type='text'
                className='form'
                name='title'
                placeholder='Title'
                onChange={this.handleInputChange}
              />
            </div>

            <div>
              <input
                type='text'
                className='form'
                name='caption'
                placeholder='Caption'
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <input
                type='text'
                className='form'
                name='picture'
                placeholder='Picture'
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <input
                type='text'
                className='form'
                name='brewery'
                placeholder='Brewery'
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <select name='category' onChange={this.handleInputChange}>
                <option value='Select'>Select a Category</option>
                <option value='Lager'>Lager</option>
                <option value='Porter'>Porter</option>
                <option value='Stout'>Stout</option>
                <option value='Ale'>Ale</option>
                <option value='Belgium'>Belgium</option>
                <option value='Pilsner'>Pilsner</option>
                <option value='Saisonr'>Saison</option>
                <option value='Sour'>Sour</option>
                <option value='Wheat'>Wheat</option>
              </select>
            </div>
            <br />
            <div>
              <button type='submit' onClick={this.handleSubmit}>
                Create
              </button>
            </div>
          </form>
          <p className='rando'>
            <Random />
          </p>
        </div>
      </div>
    );
  }
}

export default New;
