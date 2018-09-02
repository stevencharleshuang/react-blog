import React from 'react';
import CreateEntryForm from './CreateEntryForm';
import Entries from './Entries';
import EditUserForm from './EditUserForm';

export default class UserPrivateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1, // ToDo: This is hardcoded, make dynamic
      username: 'johndope', // ToDo: This is hardcoded, make dynamic
      user: []
    }
  }
  componentWillMount() {
    const url = `http://localhost:5000/api/users/user/${this.state.user_id}`;
    console.log(url);
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log('Success:', (response));
        this.setState({ user: response })
      })
      .catch(error => console.error('Error:', error));
  }

  render() {
    console.log('UserPrivateProfile state:', this.state)
    return (
      <div className="user-private-profile">
        <h1>This is the User Private Profile, Dave</h1>
        <EditUserForm user_id={this.state.user_id} user={this.state.user} username={this.state.username}/>
        <br />
        <CreateEntryForm user_id={this.state.user_id} />
        <Entries user_id={this.state.user_id}/>
      </div>
    );
  }
}
