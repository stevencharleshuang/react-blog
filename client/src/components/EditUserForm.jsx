import React from 'react';
// import { Link } from 'react-router-dom';

export default class EditUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.user.id,
      username: this.props.user.username,
      name: this.props.user.name,
      email: this.props.user.email,
      password: this.props.user.password,
      avatar_url: this.props.user.avatar_url,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(e) {
    const value = e.target.value
    const name = e.target.name;
    this.setState({
      [name]: value
    })
  }

  handleEditUser(e) {
    e.preventDefault();
    console.log('Editing user with:', this.state);
    this.handleSubmit(this.state);
  }

  handleSubmit(formData) {
    const url = `http://localhost:5000/api/users/user/${this.state.id}`;
    fetch(url, {
      method: 'PUT',
      body: JSON.stringify(formData, this.state.id),
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
    console.log('EditUserForm props:', this.props);
    console.log('Edit User Form state: ', this.state);
    const user = this.props.user
    return(
      <div className="edit-user-form">
        <h1>Edit User Form</h1>
        <form>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={user.name}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder={user.email}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            id="password"
            name="password"
            placeholder={user.password}
            onChange={this.handleOnChange}
          />
          <br />
          <input
            type="text"
            id="avatar_url"
            name="avatar_url"
            placeholder={user.avatar_url}
            onChange={this.handleOnChange}
          />
          <br />
          <button onClick={this.handleEditUser} data-id="edit-user">Edit User</button>
        </form>
      </div>
    );
  }
}
