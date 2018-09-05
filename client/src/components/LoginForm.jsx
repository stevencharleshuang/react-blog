import React        from 'react';
import { Redirect } from 'react-router-dom';
import TokenService from '../services/TokenService';
import UserService  from '../services/UserService';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedInUser: '',
      authenticated: this.props.authenticated,
      redirect: false,
      error: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleLogIn    = this.handleLogIn.bind(this);

  }

  handleOnChange(e) {
    const value = e.target.value
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleLogIn(e) {
    e.preventDefault();
    this.handleSubmit(this.state);
  }

  handleSubmit(formData) {
    const url = 'http://localhost:5000/api/auth/login';
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
        console.log('Success:', (response));
        TokenService.save(response.token);
        UserService.save(response.user, response.user.id, response.user.username);
        this.setState((prevState) => ({
          authenticated: !prevState.authenticated,
          loggedInUser: response.user,
          redirect: !prevState.redirect
        }));
      })
      .catch(error => {
        console.error('Error:', error)
        this.setState((prevState) => ({
          error: !prevState.error,
        }))
      });
  }

  render() {
    // console.log('state: ', this.state)
    const user = this.state.loggedInUser;
    // console.log('loggedInUser: ', user);
    if (this.state.redirect) {
      return (
        user === undefined
          ? <Redirect to="/404" />
          : <Redirect to=
              {
                {
                  pathname: `/user/${user.id}`,
                  state: { user }
                }
              }
            />
      );
    }
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
          onChange={this.handleOnChange}
        />
        <br />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          onChange={this.handleOnChange}
        />
        <br />
        <button onClick={this.handleLogIn} data-id="login">Log In</button>
      </form>
    </div>
    );
  }
}
