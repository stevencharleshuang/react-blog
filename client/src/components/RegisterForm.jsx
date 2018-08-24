import React from 'react';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      avatar_url: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    const value = e.target.value
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Registration Submitted')
  }

  render() {
    console.log(this.state)
    return (
      <div className="register-form">
        <form>
          <input type="text" id="name" name="name" placeholder="name" onChange={this.handleOnChange} />
          <br />
          <input type="text" id="username" name="username" placeholder="username" onChange={this.handleOnChange} />
          <br />
          <input type="text" id="email" name="email" placeholder="email" onChange={this.handleOnChange} />
          <br />
          <input type="text" id="password" name="password" placeholder="password" onChange={this.handleOnChange} />
          <br />
          <input type="text" id="avatar_url" name="avatar_url" placeholder="avatar_url" onChange={this.handleOnChange} />
          <br />
          <button onClick={this.handleSubmit} data-id="submit">Submit</button>
        </form>
      </div>
    );
  }
}
