import React from 'react';
import CreateEntryForm from './CreateEntryForm';

export default class UserPrivateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1
    }
  }
  render() {
    return (
      <div className="user-private-profile">
        <h1>This is the User Private Profile, Dave</h1>
        <CreateEntryForm />
      </div>
    );
  }
}
