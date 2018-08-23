import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername() {

  }

  handlePassword() {

  }

  render() {
    return (
    <div className="login-form">
      <form>
        <input type="text" id="username" name="username" placeholder="Username" onChange={this.handleUsername} />
        <br />
        <input type="text" id="password" name="password" placeholder="Password" onChange={this.handlePassword} />
      </form>
    </div>
    );
  }
}
