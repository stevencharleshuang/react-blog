import React from 'react';
import axios from 'axios';
import TokenService from '../services/TokenService';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      token: undefined,
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleClick    = this.handleClick.bind(this);
  }

  handleUsername(e) {
    // console.log(e.target.value);
    this.setState({
      username: e.target.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleClick(e) {
    e.preventDefault();
    this.handleSubmit(this.state)
  }

  handleSubmit(formData) {
    const url = 'http://localhost:5000/api/auth/login'
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', (response))
        TokenService.save(response.token)
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    console.log('state: ', this.state)
    return (
    <div className="login-form">
      <form>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={this.handleUsername}
        />
        <br />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          onChange={this.handlePassword}
        />
        <br />
        <button onClick={this.handleClick}>Login</button>
      </form>
    </div>
    );
  }
}
