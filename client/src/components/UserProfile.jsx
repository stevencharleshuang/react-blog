import React from 'react';
import Entries from './Entries';
import EditUserForm from './EditUserForm';
import CreateEntryForm from './CreateEntryForm';
import TokenService from '../services/TokenService';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.location.state.user,
      authenticated: false,
    }
  }

  componentWillMount() {
    if (TokenService) {
      this.setState((prevState) => ({
        authenticated: !prevState.authenticated
      }))
    }
  }

  render() {
    console.log('UserProfile state: ', this.state);
    console.log('UserProfile props: ', this.props);
    const user = this.state.user;
    return(
      <div className="user-profile">
        <h1>Hello, {user.username}!</h1>
        {
          !this.state.authenticated
            ? 'You get the public view'
            : 'You get the private view'
        }
      </div>
    );
  }
}
