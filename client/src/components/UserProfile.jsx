import React from 'react';
import Entries from './Entries';
import EditUserForm from './EditUserForm';
import CreateEntryForm from './CreateEntryForm';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.state.user,
    }
  }

  render() {
    console.log('UserProfile state: ', this.state);
    console.log('UserProfile props: ', this.props);
    return(
      <div className="user-profile">
        <h1>Hello, {this.state.user.username}!</h1>
      </div>
    );
  }
}
