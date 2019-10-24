import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log('this is state', this.state);

    axios
      .post('http://localhost:3000/login/', this.state)
      .then(res => {
        let user = res.data.user;
        let token = res.data.token;
        window.localStorage.setItem('user', JSON.stringify(user));
        window.localStorage.setItem('token', token);
        console.log('cookie', window.localStorage.getItem('user'));
      })
      .catch(err => {
        console.error(err);
      });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <br />
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type='text'
                className='form'
                name='username'
                placeholder='username'
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div>
              <input
                type='text'
                className='form'
                name='password'
                placeholder='password'
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <button type='submit'>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
