import React from 'react';
import { Link } from 'react-router-dom';
import Entries from './Entries';
import EditUserForm from './EditUserForm';
import CreateEntryForm from './CreateEntryForm';
import TokenService from '../services/TokenService';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(window.localStorage.getItem('user'))
              || this.props.location.state.user,
      authenticated: false,
    }
  }

  componentWillMount() {
    if (window.localStorage.getItem('authToken')) {
      this.setState((prevState) => ({
        authenticated: !prevState.authenticated
      }))
    }
  }

  render() {
    // console.log('UserProfile state: ', this.state);
    // console.log('UserProfile props: ', this.props);
    const user = this.state.user;
    // console.log('UserProfile user', user);
    // console.log('UserProfile user.id', user.id);
    return(
      <div className="user-profile">
        <h1>Hello, {user.username}!</h1>
        {
          !this.state.authenticated
            ? <h1>Please Log In or Register</h1>
            : <div className="user-profile-private">
                <CreateEntryForm user={ user } />
                <br />
                <Entries user={ user } />
              </div>
        }
        <br />
        {
          !this.state.authenticated
            ? null
            : <Link to={
                {
                  pathname:`/users/user/edit/${ user.id }`,
                  state: { user }
                }
              }>
                Edit User
              </Link>
        }
      {/* Render Void
      */}
      </div>
    );
  }
}
