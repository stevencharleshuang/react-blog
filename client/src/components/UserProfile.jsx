import React from 'react';
import Entries from './Entries';
import EditUserForm from './EditUserForm';
import CreateEntryForm from './CreateEntryForm';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div className="user-profile">
        <h1>User Profile, Dave</h1>
      </div>
    );
  }
}
