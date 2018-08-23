import React from 'react';
import axios from 'axios';
import TokenService from '../services/TokenService';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      authenticated: this.props.authenticated
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogIn    = this.handleLogIn.bind(this);
    this.handleLogOut   = this.handleLogOut.bind(this);
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

  handleLogIn(e) {
    e.preventDefault();
    this.handleSubmit(this.state)
  }

  handleLogOut(e) {
    e.preventDefault();
    TokenService.destroy();
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
        TokenService.save(response.token);
        this.setState({ authenticated: true })
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    // console.log('state: ', this.state)
    return (
    <div className="login-form">
      <span>Authenticated: {this.state.authenticated ? 'True' : 'False'}</span>
      <br />
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
        <button onClick={this.handleLogIn} data-id="login">Log In</button>
        <button onClick={this.handleLogOut} data-id="logout">Log Out</button>
      </form>
    </div>
    );
  }
}
