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
    this.handleClick = this.handleClick.bind(this);
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
  }

  render() {
    console.log('state: ', this.state)
    return (
    <div className="login-form">
      <form>
        <input type="text" id="username" name="username" placeholder="Username" onChange={this.handleUsername} />
        <br />
        <input type="text" id="password" name="password" placeholder="Password" onChange={this.handlePassword} />
        <br />
        <button onClick={this.handleClick}>Login</button>
      </form>
    </div>
    );
  }
}
