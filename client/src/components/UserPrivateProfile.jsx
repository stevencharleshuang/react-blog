import React from 'react';
import CreateEntryForm from './CreateEntryForm';
import Entries from './Entries';

export default class UserPrivateProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 1 // ToDo: This is hardcoded, make dynamic
    }
  }
  render() {
    return (
      <div className="user-private-profile">
        <h1>This is the User Private Profile, Dave</h1>
        <CreateEntryForm user_id={this.state.user_id} />
        <Entries user_id={this.state.user_id}/>
      </div>
    );
  }
}
