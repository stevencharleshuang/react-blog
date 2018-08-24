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
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleOnChange(e) {
    const value = e.target.value
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleRegister(e) {
    e.preventDefault();
    console.log('Registration Submitted');
    this.handleSubmit(this.state);
  }

  handleSubmit(formData) {
    const url = 'http://localhost:5000/api/users';
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
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    console.log(this.state)
    return (
      <div className="register-form">
        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            id="password"
            name="password"
            placeholder="password"
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            id="avatar_url"
            name="avatar_url"
            placeholder="avatar_url"
            onChange={this.handleOnChange}
          />
          <br />
          <button onClick={this.handleRegister} data-id="register">Register</button>
        </form>
      </div>
    );
  }
}
